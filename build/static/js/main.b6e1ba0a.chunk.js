(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(10),i=a.n(o),c=(a(79),a(27)),l=a(28),s=a(32),u=a(29),m=a(33),p=a(130).a.Search,h=function(e){var t=e.setInputValue;return n.a.createElement(p,{className:"input-search",placeholder:"input search text",onChange:function(e){var a=e.target.value;return t(a)},style:{width:200}})},f=function(e){var t=e.trip,a=t.fromName,r=t.toName,o=t.date,i=t.vehicle;return n.a.createElement("div",{className:"list-item"},n.a.createElement("h3",{className:"list-item_from"},a),n.a.createElement("h4",{className:"list-item_to"},r),n.a.createElement("p",{className:"list-item_date"},o),n.a.createElement("p",{className:"list-item_how"},i))},v=a(49),d=a.n(v),N=a(72),w=[{fromName:"Berlin, Germany",toName:"Kyiv, Ukraine",departAt:"2019-05-29T00:00:00.000Z",vehicle:"plane"},{fromName:"Berlin, Germany",toName:"Dnipro, Ukraine",departAt:"2019-06-02T00:00:00.000Z",vehicle:"car"},{fromName:"London, UK",toName:"Kyiv, Ukraine",departAt:"2019-06-07T00:00:00.000Z",vehicle:"plane"},{fromName:"Lyon, France",toName:"Kyiv, Ukraine",departAt:"2019-06-07T00:00:00.000Z",vehicle:"plane"},{fromName:"Moscow, Russia",toName:"Kyiv, Ukraine",departAt:"2019-06-08T00:00:00.000Z",vehicle:"car"},{fromName:"Kyiv, Ukraine",toName:"Berlin, Germany",departAt:"2019-05-30T00:00:00.000Z",vehicle:"train"}],y=function(){var e=Object(N.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,t){e(w)}));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={value:""},a.setInputValue=function(e){return a.setState({value:e})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.trips,t=this.state.value,a=e.filter(function(e,a){return function(e,t,a){var r,n,o=new Set,i=a.toLowerCase();return(r=e.fromName,n=e.toName,[r,n]).forEach(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase().indexOf(i)>-1?o.add(t):null}),o.has(e.id)}(e,a,t)});return n.a.createElement("div",{className:"App"},n.a.createElement(h,{setInputValue:this.setInputValue}),n.a.createElement("section",{className:"trip-layout"},a.map(function(e,t){return n.a.createElement(f,{key:t,trip:e})})))}}]),t}(n.a.PureComponent),b=(a(127),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={trips:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;y().then(function(t){var a=function(e){return e.reduce(function(e,t,a){var r,n,o,i,c=new Date(t.departAt).toLocaleString(),l=(r=t.fromName,n=t.toName,o=c,i=t.vehicle,{id:a,fromName:r,toName:n,date:o,vehicle:i});return e.push(l),e},[])}(t);e.setState({trips:a})})}},{key:"render",value:function(){var e=this.state.trips;return n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{href:"https://github.com/jeyakoroll/voypost",target:"_blank",rel:"noopener noreferrer ",className:"github-corner","aria-label":"View source on GitHub"},n.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#70B7FD",color:"#fff",position:"absolute",top:0,border:0,right:0},"aria-hidden":"true"},n.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),n.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),n.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"}))," "),null!==e&&n.a.createElement(C,{trips:e}))}}]),t}(r.PureComponent));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,t,a){e.exports=a(128)},79:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.b6e1ba0a.chunk.js.map