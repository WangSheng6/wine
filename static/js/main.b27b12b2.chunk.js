(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{106:function(e,t,a){e.exports=a(233)},111:function(e,t,a){},158:function(e,t,a){},174:function(e,t,a){},230:function(e,t,a){},233:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(45),o=a.n(r);a(111),a(112),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(71),l=a(21),s=(a(113),a(101)),h=a.n(s);a(158);var u=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h.a,{type:"warning"},"warning"))},m=(a(159),a(102)),d=a.n(m),p=(a(165),a(103)),g=a.n(p),f=a(46),v=a(47),E=a(49),w=a(48),y=a(50),b=(a(174),a(32)),k=a.n(b);k.a.initialize("57b561f7d48f3c2e","191019");var N,O=k.a.Query("wine"),j=[],D=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(E.a)(this,Object(w.a)(t).call(this,e))).state={refreshing:!1,down:!1,height:document.documentElement.clientHeight,data:[],hasMore:!0,reqNum:0},a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"change",value:function(e){this.props.history.push({pathname:"/list/"+e.id})}},{key:"genData",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;j=t,O.limit(10),O.skip(10*a),O.find().then((function(t){for(var a=0;a<t.length;a++)j.push({id:"".concat(t[a].goodsID),icon:t[a].Banner.split("||")[0],text:t[a].Name,price:"".concat(t[a].Price)});t.length<10&&e.setState({hasMore:!1})})).then((function(t){setTimeout((function(){return e.setState({height:N,data:j,refreshing:!1})}),0)}))}},{key:"componentDidMount",value:function(){N=this.state.height-o.a.findDOMNode(this.ptr).offsetTop,this.genData()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(d.a,{damping:100,ref:function(t){return e.ptr=t},style:{height:this.state.height,overflow:"auto"},indicator:this.state.down?{}:{deactivate:"\u4e0a\u62c9\u53ef\u4ee5\u5237\u65b0"},direction:"up",refreshing:this.state.refreshing,onRefresh:function(){e.state.hasMore&&e.setState({refreshing:!0,data:e.genData(e.state.data,e.state.reqNum+1)})}},i.a.createElement(g.a,{data:this.state.data,columnNum:2,hasLine:!1,renderItem:function(t){return i.a.createElement("div",{style:{padding:"12.5px"}},i.a.createElement("img",{src:t.icon,style:{width:"75%"},alt:"",onClick:function(){return e.change({id:t.id})}}),i.a.createElement("div",{className:"name"},i.a.createElement("span",null,t.text)),i.a.createElement("div",{className:"price"},i.a.createElement("p",null,"\u4ef7\u683c\uff1a\uffe5",t.price)))}})))}}]),t}(i.a.Component),x=(a(221),a(52)),z=a.n(x),H=(a(226),a(73)),I=a.n(H),M=(a(228),a(74)),S=a.n(M),B=(a(90),a(70)),C=a.n(B),T=(a(54),a(44)),q=a.n(T);a(230);k.a.initialize("57b561f7d48f3c2e","191019");var A=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(E.a)(this,Object(w.a)(t).call(this,e))).state={goodsID:e.match.params.id,data:{},banner:[],intro:[],imgHeight:176,loading:!0},a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=k.a.Query("wine");t.equalTo("goodsID","==",1*this.state.goodsID),t.find().then((function(t){var a=t[0];setTimeout((function(){e.setState({data:a,banner:a.Banner.split("||"),intro:a.intro.split("||"),loading:!1})}),100)}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{paddingTop:"15px"}},this.state.loading?i.a.createElement("div",{className:"loading"},i.a.createElement(q.a,{type:"loading"}),i.a.createElement("p",{className:"text"},"\u6570\u636e\u52a0\u8f7d\u4e2d...")):i.a.createElement("div",null,i.a.createElement(S.a,null,i.a.createElement(C.a,{autoplay:!1,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)}},this.state.banner.map((function(t){return i.a.createElement("a",{key:t,href:"http://www.alipay.com",style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},i.a.createElement("img",{src:t,alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))})))),i.a.createElement("h3",null,this.state.data.Name),i.a.createElement("p",null,"\uffe5",this.state.data.Price),i.a.createElement(S.a,{size:"lg"},i.a.createElement(I.a,{size:"lg"}),i.a.createElement(z.a,null,i.a.createElement(z.a.Header,{title:"\u5546\u54c1\u8be6\u60c5"}),i.a.createElement(z.a.Body,null,i.a.createElement("div",null,this.state.intro.map((function(t){return i.a.createElement("a",{key:t,href:"http://www.alipay.com",style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},i.a.createElement("img",{src:"".concat(t),alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))}))))),i.a.createElement(I.a,{size:"lg"}))))}}]),t}(i.a.Component);o.a.render(i.a.createElement(c.a,null,i.a.createElement(l.a,{exact:!0,path:"/",component:u}),i.a.createElement(l.a,{exact:!0,path:"/list",component:D}),i.a.createElement(l.a,{exact:!0,path:"/list/:id",component:A})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[106,1,2]]]);
//# sourceMappingURL=main.b27b12b2.chunk.js.map