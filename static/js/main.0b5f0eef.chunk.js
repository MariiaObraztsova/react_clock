(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),s=n(5),r=n(4),l=n(1),u=n.n(l),h=(n(12),n(0)),p=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={date:new Date},t.timerId=setInterval((function(){}),1e3),t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){return t.tick()}),1e3)}},{key:"componentDidUpdate",value:function(t){var e=t.name;e!==this.props.name&&console.log("The Clock was renamed from ".concat(e," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"tick",value:function(){this.setState({date:new Date}),console.log(this.state.date.toLocaleTimeString())}},{key:"render",value:function(){return Object(h.jsxs)("p",{children:["Current time:"," ",this.state.date.toLocaleTimeString()]})}}]),n}(u.a.Component),b=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!0,clockName:0},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t.changeName=function(){t.setState({clockName:Math.round(100*Math.random())})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"React clock"}),this.state.isClockVisible&&Object(h.jsx)(p,{name:this.state.clockName}),Object(h.jsxs)("div",{className:"App__buttons",children:[Object(h.jsx)("button",{type:"button",className:"App__button App__button--show",onClick:this.showClock,children:"Show Clock"}),Object(h.jsx)("button",{type:"button",className:"App__button App__button--hide",onClick:this.hideClock,children:"Hide Clock"}),Object(h.jsx)("button",{type:"button",className:"App__button App__button--changeName",onClick:this.changeName,children:"Set random name"})]})]})}}]),n}(u.a.Component),m=b;a.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0b5f0eef.chunk.js.map