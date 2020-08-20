# grafana

## Development Setup

### Quickstart

Build the code

```bash
cd grafana-plugins/splice-plugin && yarn install && yarn dev
```

Start Grafana

```bash
cd ../..
docker run -d -p 3000:3000 -v "$(pwd)"/grafana-plugins:/var/lib/grafana/plugins --name=grafana grafana/grafana:7.0.0
```

Open Browser (admin)
```
http://localhost:3000
default credentails admin / admin
```


Restart Grafana (after making changes to code and recompiling)
```bash
docker stop grafana
docker rm grafana
```

## Resources

API
https://grafana.com/docs/grafana/latest/packages_api/
