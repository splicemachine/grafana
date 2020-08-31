/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/ui","@grafana/runtime","@grafana/data","rxjs","emotion"],(function(e,t,r,a,n,o){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=6)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=a},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t,r){"use strict";r.r(t);var a=r(3),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function o(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var u=function(){return(u=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function s(e,t,r,a){return new(r||(r=Promise))((function(n,o){function u(e){try{i(a.next(e))}catch(e){o(e)}}function s(e){try{i(a.throw(e))}catch(e){o(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,s)}i((a=a.apply(e,t||[])).next())}))}function i(e,t){var r,a,n,o,u={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,a=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(n=u.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){u.label=o[1];break}if(6===o[0]&&u.label<n[1]){u.label=n[1],n=o;break}if(n&&u.label<n[2]){u.label=n[2],u.ops.push(o);break}n[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var c,l=r(2),f=r(4),d=function(e){function t(t){var r,a,n=e.call(this,t)||this;return n.type="splicemachinedb",n.url=null!=(r=t.url)?r:"",n.username=null!=(a=t.username)?a:"",n.name=t.name,n.database=t.database,n.basicAuth=t.basicAuth,n.withCredentials=t.withCredentials,n.headers=t.jsonData,n}return o(t,e),t.prototype.testDatasource=function(){return s(this,void 0,void 0,(function(){return i(this,(function(e){return[2,Object(l.getBackendSrv)().datasourceRequest({url:this.url+"/",method:"GET",headers:this.headers}).then((function(e){return 200===e.status?{status:"success",message:"Data source is working",title:"Success"}:{status:"fail",message:e.message}}))]}))}))},t.prototype.query=function(e){var t=this,r=e.intervalMs,n=e.maxDataPoints,o=e.range,s=e.requestId,i=l.config.bootData.user.orgId,c=e.targets;this.filterQuery&&(c=c.filter((function(e){return t.filterQuery(e)})));var d=c.map((function(e){var a=t.id;if("__expr__"===e.datasource)return u(u({},e),{datasourceId:a,orgId:i});if(e.datasource){var o="default"===e.datasource?l.config.defaultDatasource:e.datasource,s=l.config.datasources[o];if(!s)throw new Error("Unknown Datasource: "+e.datasource);a=s.id}return u(u({},e),{datasourceId:a,intervalMs:r,maxDataPoints:n,orgId:i})}));if(!d.length)return Object(f.of)({data:[]});var m={queries:d};o&&(m.range=o,m.from=o.from.valueOf().toString(),m.to=o.to.valueOf().toString());var p=Object(l.getBackendSrv)().datasourceRequest({url:this.url+"/query",method:"POST",data:m,headers:this.headers,requestId:s}).then((function(e){return{data:e.data,state:a.LoadingState.Done}})).catch((function(e){e.isHandled=!0;var r=Object(l.toDataQueryResponse)(e);return t.processResponse?t.processResponse(r):r}));return Object(f.from)(p)},t}(l.DataSourceWithBackend),m=r(0),p=r.n(m),h=r(5),y=r(1),g=y.LegacyForms.Input,v=y.LegacyForms.FormField,b=y.LegacyForms.SecretFormField,w=function(e){var t,r,a=e.defaultUrl,n=e.dataSourceConfig,o=e.onChange,s=n.secureJsonData?n.secureJsonData.basicAuthPassword:"";void 0!==n.url&&null!==n.url&&""!==n.url||(n.url=a);var i=Object(y.useTheme)(),l=Object(m.useCallback)((function(e){o(u(u({},n),e))}),[n]);r=p.a.createElement(p.a.Fragment,null,"Your access method is ",p.a.createElement("em",null,"Server"),", this means the URL needs to be accessible from the grafana backend/server.");var f,d,w=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(n.url),q=Object(h.css)(c||(f=["\n    box-shadow: inset 0 0px 5px ",";\n  "],d=["\n    box-shadow: inset 0 0px 5px ",";\n  "],Object.defineProperty?Object.defineProperty(f,"raw",{value:d}):f.raw=d,c=f),i.palette.red),x=Object(h.cx)(((t={})["width-20"]=!0,t[q]=!w,t)),E=p.a.createElement(g,{className:x,placeholder:a,value:n.url,onChange:function(e){return l({url:e.currentTarget.value})}});return p.a.createElement("div",{className:"gf-form-group"},p.a.createElement(p.a.Fragment,null,p.a.createElement("h3",{className:"page-heading"},"HTTP"),p.a.createElement("div",{className:"gf-form-group"},p.a.createElement("div",{className:"gf-form"},p.a.createElement(v,{label:"URL",labelWidth:11,tooltip:r,inputEl:E})),p.a.createElement("div",{className:"gf-form"},p.a.createElement(v,{label:"User",labelWidth:10,inputWidth:18,placeholder:"user",value:n.basicAuthUser,onChange:function(e){o(u(u({},n),{basicAuth:!0,withCredentials:!0,basicAuthUser:e.currentTarget.value,jsonData:u(u({},n.jsonData),{user:e.currentTarget.value})}))}})),p.a.createElement("div",{className:"gf-form"},p.a.createElement(b,{isConfigured:!1,value:s||"",inputWidth:18,labelWidth:10,onReset:function(){o(u(u({},n),{basicAuthPassword:"",secureJsonData:u(u({},n.secureJsonData),{basicAuthPassword:""}),secureJsonFields:u(u({},n.secureJsonFields),{basicAuthPassword:!1})}))},onChange:function(e){o(u(u({},n),{basicAuth:!0,withCredentials:!0,basicAuthPassword:e.currentTarget.value,secureJsonData:u(u({},n.secureJsonData),{basicAuthPassword:e.currentTarget.value}),jsonData:u(u({},n.jsonData),{password:e.currentTarget.value})}))}})))))},q=[{label:"Time series",value:"time_series"},{label:"Table",value:"table"}],x="SELECT\n    <time_column> as time,\n    <value_column> as value\n  FROM\n    <table name>\n  WHERE\n    $__timeFilter(time_column)\n  ORDER BY\n    <time_column> ASC",E=function(e){function t(t){var r=e.call(this,t)||this;r.onFormatChange=function(e){r.query.format=e.value,"table"===r.query.format&&r.query.queryText===x?r.query.queryText="":"time_series"===r.query.format&&""===r.query.queryText&&(r.query.queryText=x),r.setState({formatOption:e},r.onRunQuery)},r.onQueryTextChange=function(e){var t=r.props,a=t.onChange,n=t.query;r.query.queryText=e.target.value,a(u(u({},n),{queryText:e.target.value}))},r.onQueryTextKeyDown=function(e){var t=e;if(13===t.keyCode&&t.shiftKey||"Tab"===t.key)return t.preventDefault(),void r.onRunQuery()},r.onRunQuery=function(){var e=r.query;r.props.onChange(e),r.props.onRunQuery()};var a=Object.assign({},{},t.query);return r.query=a,void 0!==r.query.format&&null!==r.query.format||(r.query.format="time_series"),void 0!==r.query.queryText&&null!==r.query.queryText&&""!==r.query.queryText||(void 0===r.query.format||null===r.query.format||"time_series"===r.query.format?r.query.queryText=x:r.query.queryText=""),r.state={formatOption:q.find((function(e){return e.value===a.format}))||q[0]},r}return o(t,e),t.prototype.render=function(){var e=this.state.formatOption;return p.a.createElement("div",{className:"gf-form-group"},p.a.createElement("div",{className:"gf-form-inline"},p.a.createElement("div",{className:"gf-form gf-form--grow"},p.a.createElement("textarea",{rows:9,className:"gf-form-input",placeholder:"Enter a splice machine query (run with Shift+Enter)","data-min-length":0,"data-items":100,value:this.query.queryText,onKeyDown:this.onQueryTextKeyDown,onChange:this.onQueryTextChange,spellCheck:!1}))),p.a.createElement("div",{className:"gf-form-inline"},p.a.createElement("div",{className:"gf-form"},p.a.createElement("div",{className:"gf-form-label width-7"},"Format"),p.a.createElement(y.Select,{width:16,isSearchable:!1,options:q,onChange:this.onFormatChange,value:e}))))},t}(m.PureComponent);r.d(t,"plugin",(function(){return O}));var O=new a.DataSourcePlugin(d).setConfigEditor((function(e){var t=e.options,r=e.onOptionsChange;return p.a.createElement(p.a.Fragment,null,p.a.createElement(w,{defaultUrl:"http://splicedb-splice-http.<NAMESPACE>.svc.cluster.local:1111/",dataSourceConfig:t,showAccessOptions:!0,onChange:r}))})).setQueryEditor(E)}])}));
//# sourceMappingURL=module.js.map