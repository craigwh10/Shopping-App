(window["webpackJsonpshopping-app"]=window["webpackJsonpshopping-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),i=a.n(s),c=(a(16),a(10)),l=a(1),o=a(2),u=a(4),h=a(3),p=a(7),m=a(5),d=(a(17),function(e){return r.a.createElement("button",{className:"btn btn-success btn-block",onClick:function(){return e.click()}},e.children)}),f=a(6),g=a.n(f),b=function(e){var t=function(e){var t=["list-group-item"];return e<=3?(t.push("list-group-item-danger"),[e,t]):(t.push("list-group-item-success"),[e,t])};return e.sizes.map(function(e,a){return r.a.createElement("ul",{key:g()(),className:"list-group list-group-horizontal"},r.a.createElement("li",{className:"list-group-item",key:g()()},e[0]),r.a.createElement("li",{className:t(e[1])[1].join(" "),key:g()()},t(e[1])[0]))})},k=(a(20),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-lg-3 shoeModule"},r.a.createElement("h1",null,this.props.name),r.a.createElement("p",null,this.props.purpose),r.a.createElement(b,{sizes:this.props.sizes}),r.a.createElement(d,{click:function(){return e.props.pageHandler()}},"See more"))}}]),t}(n.Component)),v=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},this.props.shoes.map(function(t,a){return r.a.createElement(k,{key:t.id,name:t.name,sizes:t.sizes,purpose:t.purpose,shoe:t,pageHandler:function(){return e.props.pageHandler(t)}})})))}}]),t}(n.Component),E=(a(21),function(e){return r.a.createElement("li",{className:"nav-item",key:g()()},r.a.createElement("a",{href:null,className:"nav-link",onClick:function(){e.handleClick(e.unique)}},e.unique.charAt(0).toUpperCase()+e.unique.slice(1)))}),S=function(e){return r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",placeholder:"Search...",className:"form-control","aria-label":"SearchBar","aria-describedby":"basic-addon1",onChange:e.changed}))},j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={searchState:"",length:0},a.handleClick=function(e){a.props.click(e)},a.clickInternalHandler=function(e){return a.props.unique()},a.changeHandler=function(e){a.setState({searchState:e.target.value,length:e.target.value.length})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.clickInternalHandler()}},{key:"render",value:function(){var e=this,t=this.clickInternalHandler().map(function(t){return r.a.createElement(E,{unique:t,key:g()(),handleClick:e.handleClick})});return r.a.createElement("div",{className:"card-header"},r.a.createElement("ul",{className:"nav nav-tabs card-header-tabs"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(S,{searchState:this.state.searchState,length:this.state.length,changed:function(t){return e.changeHandler(t)},search:this.props.searchChange(this.state.searchState)})),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:null,className:"nav-link",onClick:this.props.resetState},"Show All")),t))}}]),t}(n.PureComponent),N=(a(22),function(e){return r.a.createElement("div",{className:"shoePage"},r.a.createElement("h1",null,e.shoeData.name),r.a.createElement("h2",null,e.shoeData.purpose.charAt(0).toUpperCase()+e.shoeData.purpose.slice(1)),r.a.createElement(b,{sizes:e.shoeData.sizes}))}),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).resetState=function(){a.setState(a.baseState)},a.uniqueHeader=function(){var e=a.state.shoes.map(function(e){return e.purpose});return Object(c.a)(new Set(e))},a.clickFilter=function(e){a.setState({filteredShoes:a.state.shoes.filter(function(t){return t.purpose===e}),filteredLength:a.state.filteredShoes.length,filtered:!0,filteredValue:e,page:!1,pageShoe:[]})},a.pageHandler=function(e){a.setState({page:!0,pageShoe:e})},a.searchHandler=function(e){var t=e.toLowerCase(),n=a.state.shoes.filter(function(e){return e.name.toLowerCase().includes(t)}),r=n.length;console.table(n),a.setState({searchValue:e,filtered:r<7,filteredShoes:n,filteredLength:r,page:!1})},a.state={shoes:[{id:"a1",name:"Nike react",sizes:[[1,2],[2,1],[3,2],[4,1],[5,6]],purpose:"running"},{id:"a2",name:"Nike vaporfly",sizes:[[1,1],[2,3],[3,2],[4,2],[5,2],[6,20]],purpose:"sports"},{id:"a3",name:"Adidas ultraboost",sizes:[[1,1],[2,2],[3,2]],purpose:"sports"},{id:"a4",name:"Adidas run",sizes:[[1,18],[2,42],[3,8]],purpose:"running"},{id:"a5",name:"Nike free RN",sizes:[[1,1],[2,42],[3,8]],purpose:"running"},{id:"a6",name:"Brogues",sizes:[[1,1],[2,42],[3,8]],purpose:"smartwear"},{id:"a7",name:"Sliders",sizes:[[1,1],[2,10],[3,8]],purpose:"smartwear"}],filteredShoes:[],filteredLength:7,filtered:!1,filteredValue:null,page:!1,searchValue:null},a.clickFilter=a.clickFilter.bind(Object(p.a)(a)),a.baseState=a.state,a.resetState=a.resetState.bind(Object(p.a)(a)),a.searchHandler=a.searchHandler.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=r.a.createElement("div",{className:"card-body"},r.a.createElement(v,{shoes:this.state.filtered?this.state.filteredShoes:this.state.shoes,pageHandler:function(t){return e.pageHandler(t)}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"top-title"},this.props.appHeader),r.a.createElement("div",{className:"card text-center"},r.a.createElement(j,{click:this.clickFilter,resetState:this.resetState,unique:this.uniqueHeader,searchChange:this.searchHandler}),this.state.page?r.a.createElement(N,{shoeData:this.state.pageShoe}):t))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,{appHeader:"Shoe Application"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.0d2da4e9.chunk.js.map