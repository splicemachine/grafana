import { Observable } from 'rxjs';

import { DataQueryRequest, DataQueryResponse, FieldType, CircularDataFrame, toUtc } from '@grafana/data';
import { getBackendSrv } from '@grafana/runtime';

import { SpliceQuery } from './types';

export function runStream(
  target: SpliceQuery,
  req: DataQueryRequest<SpliceQuery>,
  headerinfo: any,
  queryurl: string
): Observable<DataQueryResponse> {
  return new Observable<DataQueryResponse>(subscriber => {
    const streamId = `signal-${req.panelId}-${target.refId}`;
    const { intervalMs, requestId } = req;
    const speed = intervalMs || 5000;
    const maxDataPoints = req.maxDataPoints || 750;

    const data = new CircularDataFrame({
      append: 'tail',
      capacity: maxDataPoints,
    });

    data.refId = target.refId;
    data.name = target.alias || 'Fetch ' + target.refId;
    data.addField({ name: 'time', type: FieldType.time });
    data.addField({ name: 'value', type: FieldType.number });

    let timeoutId: any = null;
    let prevTime = 0;
    let prevAddRowDone = true;

    const addNextRow = (fromtime: number, totime: number) => {
      //fetch data for time

      const queries: any[] = [];
      const range = {
        from: toUtc(fromtime),
        to: toUtc(totime),
      };

      queries.push({
        //getTemplateSrv().replace(qText, request.scopedVars, 'regex'),
        ...target,
        maxDataPoints,
        speed,
        totime,
      });
      const body: any = {
        queries,
      };
      body.range = range;
      body.from = range.from.valueOf().toString();
      body.to = range.to.valueOf().toString();

      getBackendSrv()
        .datasourceRequest({
          url: queryurl + '/query',
          method: 'POST',
          data: body,
          headers: headerinfo,
          requestId,
        })
        .then((rsp: any) => {
          if (rsp.data && rsp.data[0]) {
            for (const row of rsp.data[0].rows) {
              data.fields[0].values.add(row[0]);
              data.fields[1].values.add(row[1]);
            }
          }
        })
        .catch(err => {
          err.isHandled = true; // Avoid extra popup warning
        });
      prevAddRowDone = true;
      prevTime = totime;
    };

    // Fill the buffer on init
    if (true) {
      let time = Date.now() - maxDataPoints * speed;
      prevAddRowDone = false;
      addNextRow(time, Date.now());
    }

    const pushNextEvent = () => {
      if (prevAddRowDone) {
        prevAddRowDone = false;
        addNextRow(prevTime, Date.now());
        subscriber.next({
          data: [data],
          key: streamId,
        });
      }
      timeoutId = setTimeout(pushNextEvent, speed);
    };

    // Send first event in 5ms
    setTimeout(pushNextEvent, speed);

    return () => {
      console.log('unsubscribing to stream ' + streamId);
      clearTimeout(timeoutId);
    };
  });
}
