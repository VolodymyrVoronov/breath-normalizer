(this["webpackJsonpbreath-normalizer"]=this["webpackJsonpbreath-normalizer"]||[]).push([[0],{44:function(e,t,r){},47:function(e,t,r){},48:function(e,t,r){},49:function(e,t,r){},50:function(e,t,r){},51:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(12),s=r.n(c),i=r(9),o=r(3),l=r(11),j=r(27),b=r(2),m=function(e){var t=e.children,r=e.duration,a=void 0===r?3e3:r;return Object(b.jsx)(j.a,{to:"1",from:"0",attributeName:"opacity",duration:a,children:t})},_=(r(44),[{id:1,time:1,sec:60},{id:2,time:2,sec:120},{id:3,time:5,sec:300},{id:4,time:10,sec:600}]),h=function(){var e=n.a.useState(_),t=Object(l.a)(e,1)[0];return Object(b.jsx)(m,{children:Object(b.jsxs)("div",{className:"start-page",children:[Object(b.jsx)("h1",{className:"start-page__title",children:"Breath normalizer"}),Object(b.jsx)("p",{className:"start-page__info",children:"\u0415\u0441\u043b\u0438 \u0432\u044b \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0435, \u0447\u0442\u043e \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u044b, \u043d\u0435\u0440\u0432\u043d\u0438\u0447\u0430\u0435\u0442\u0435 \u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u0441 \u0434\u0435\u0434\u043b\u0430\u0439\u043d\u0430\u043c\u0438, \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u0435 \u0441\u0435\u0431\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0438\u043d\u0443\u0442 \u043d\u0430 \u0434\u044b\u0445\u0430\u043d\u0438\u0435. \u0420\u0430\u0437\u0431\u0435\u0439\u0442\u0435 \u0446\u0438\u043a\u043b \u043d\u0430 \u043f\u044f\u0442\u044c \u0441\u0435\u043a\u0443\u043d\u0434: \u043f\u043e \u043f\u044f\u0442\u044c \u0441\u0435\u043a\u0443\u043d\u0434 \u043d\u0430 \u0432\u0434\u043e\u0445 \u0438 \u0432\u044b\u0434\u043e\u0445. \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0434\u044b\u0448\u0430\u0442\u044c \u0441 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0435\u0439."}),Object(b.jsx)("div",{className:"start-page__buttons",children:t.map((function(e){var t=e.id,r=e.time,a=e.sec,n=void 0===a?60:a;return Object(b.jsxs)(i.b,{to:{pathname:"/normalizer",state:{duration:n,time:r}},className:"start-page__button",type:"submit",children:[r," \u043c\u0438\u043d"]},t)}))})]})})},u=r(26),d=function(e){return(e>=10?e.toString()[0]:"0")+(e>=10?e.toString()[1]:e.toString())},x=(r(47),function(){return Object(b.jsx)(m,{children:Object(b.jsx)(i.b,{to:"/",className:"back-button",children:Object(b.jsxs)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("title",{}),Object(b.jsxs)("g",{"data-name":"Layer 2",id:"Layer_2",children:[Object(b.jsx)("path",{d:"M31,16A15,15,0,1,1,16,1,15,15,0,0,1,31,16ZM3,16A13,13,0,1,0,16,3,13,13,0,0,0,3,16Z"}),Object(b.jsx)("path",{d:"M19.87,10.41,14.29,16l5.58,5.59a1,1,0,0,1,0,1.41h0a1,1,0,0,1-1.41,0L12.1,16.64a.91.91,0,0,1,0-1.28L18.46,9a1,1,0,0,1,1.41,0h0A1,1,0,0,1,19.87,10.41Z"})]})]})})})}),O=(r(48),function(){var e=Object(o.f)(),t=Object(o.g)(),r=n.a.useState(0),a=Object(l.a)(r,2),c=a[0],s=a[1],i=n.a.useState(!0),j=Object(l.a)(i,2),m=j[0],_=j[1],h=n.a.useState(0),O=Object(l.a)(h,2),z=O[0],f=O[1],p=Object(u.useStopwatch)({autoStart:!0}),v=p.seconds,N=p.minutes,w=t.state,g=w.duration,S=w.time;return n.a.useEffect((function(){var t=setInterval((function(){s(c+1),f((function(){return z+1}))}),1e3);return c===g&&e.push("/"),5===z&&f(0),function(){clearInterval(t)}}),[c,z]),n.a.useEffect((function(){var e=setInterval((function(){f((function(){return z+1}))}),1e3);return 5===z&&(f(0),_(!m)),function(){clearInterval(e)}}),[z]),Object(b.jsxs)("div",{className:"normalizer",children:[Object(b.jsx)(x,{}),Object(b.jsx)("header",{className:"normalizer__header",children:Object(b.jsxs)("p",{className:"normalizer__header-text",children:["\u0412\u0440\u0435\u043c\u044f \u0441\u0435\u0430\u043d\u0441\u0430: ",S," \u043c\u0438\u043d."]})}),Object(b.jsx)("p",{className:"normalizer__text",children:m?"\u0412\u0434\u043e\u0445":"\u0412\u044b\u0434\u043e\u0445"}),Object(b.jsxs)("ul",{className:"normalizer__bars",children:[Object(b.jsx)("li",{className:"normalizer__bar normalizer__bar--1 \n        ".concat(m?4===z&&"normalizer__bar--show":0===z&&"normalizer__bar--show")}),Object(b.jsx)("li",{className:"normalizer__bar normalizer__bar--2\n          ".concat(m?3===z&&"normalizer__bar--show":1===z&&"normalizer__bar--show")}),Object(b.jsx)("li",{className:"normalizer__bar normalizer__bar--3\n          ".concat(2===z&&"normalizer__bar--show")}),Object(b.jsx)("li",{className:"normalizer__bar normalizer__bar--4\n          ".concat(m?1===z&&"normalizer__bar--show":3===z&&"normalizer__bar--show")}),Object(b.jsx)("li",{className:"normalizer__bar normalizer__bar--5\n          ".concat(m?0===z&&"normalizer__bar--show":4===z&&"normalizer__bar--show")})]}),Object(b.jsxs)("div",{className:"normalizer__timer",children:[Object(b.jsxs)("p",{className:"normalizer__timer-text",children:[d(N),":"]}),Object(b.jsx)("p",{className:"normalizer__timer-text",children:d(v)})]})]})}),z=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(h,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/normalizer",children:Object(b.jsx)(O,{})})]})})};r(49),r(50);s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(z,{})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.1ea18407.chunk.js.map