(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[6],{56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var s=c(22),n=c(0),r=c.n(n),i=c(1),a=c(60),j=c(47),o=(c(56),c(2)),l=function(e){var t=e.data;return Object(o.jsxs)("div",{className:"projectIntro",children:[Object(o.jsx)("h1",{className:"projectIntro__title",children:t.title}),Object(o.jsxs)("div",{className:"projectIntro__info",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Stack"}),Object(o.jsx)("span",{children:t.stack})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Live"}),Object(o.jsx)("span",{children:Object(o.jsx)("a",{className:"hover-button",href:t.demo,target:"_blank",rel:"noreferrer",children:"Website"})})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Code"}),Object(o.jsx)("span",{children:Object(o.jsx)("a",{className:"hover-button",href:t.github,target:"_blank",rel:"noreferrer",children:"Github"})})]})]})]})},b=(c(57),function(){var e=Object(i.f)();return Object(o.jsxs)("menu",{className:"projectControl",children:[Object(o.jsx)("button",{onClick:function(){return e.goBack()},children:Object(o.jsx)("span",{className:"hover-button",children:"\u2190 Back to home"})}),Object(o.jsx)("button",{onClick:function(){return window.scrollTo(0,0)},children:Object(o.jsx)("span",{className:"hover-button",children:"Top"})})]})}),h=r.a.memo(b),d=c(48);c(58),t.default=function(){var e=Object(i.h)().id,t=Object(n.useState)(!1),c=Object(s.a)(t,2),r=c[0],b=c[1],p=d.a.filter((function(t){return t.id===e}))[0];return Object(n.useEffect)((function(){setTimeout((function(){return b(!0)}),100)}),[]),r&&Object(o.jsxs)(a.a.section,{className:"project",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[Object(o.jsx)(j.a,{}),Object(o.jsx)(l,{data:p}),Object(o.jsx)("div",{className:"project__about text",children:Object(o.jsx)("p",{children:p.text[0].para})}),Object(o.jsx)("img",{className:"project__introImg img",src:p.screenshot.pc[0],alt:"screenshot"}),Object(o.jsxs)("div",{className:"project__purpose text",children:[Object(o.jsx)("h2",{children:p.text[1].title}),p.text[1].para.map((function(e,t){return Object(o.jsx)("p",{children:e},t)}))]}),Object(o.jsxs)("div",{className:"project__stack",children:[Object(o.jsx)("div",{className:"project__stack__icon",children:Object(o.jsx)("div",{children:p.stackIcon.map((function(e,t){return Object(o.jsx)("img",{className:"img",src:e,alt:"stack icon"},t)}))})}),Object(o.jsxs)("div",{className:"project__stack__text text",children:[Object(o.jsx)("h2",{children:p.text[2].title}),p.text[2].para.map((function(e,t){return Object(o.jsx)("p",{children:e},t)}))]})]}),0!==p.screenshot.mobile.length&&Object(o.jsx)("div",{className:"project__imgs --mobile",children:p.screenshot.mobile.map((function(e,t){return Object(o.jsx)("img",{className:"img",src:e,alt:"mobile screenshot"},t)}))}),Object(o.jsx)("div",{className:"project__imgs",children:p.screenshot.pc.filter((function(e,t){return 0!==t})).map((function(e,t){return Object(o.jsx)("img",{className:"img",src:e,alt:"desktop screenshot"},t)}))}),Object(o.jsx)(h,{})]})}}}]);
//# sourceMappingURL=6.d6c9a035.chunk.js.map