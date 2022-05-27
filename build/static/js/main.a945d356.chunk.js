(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{28:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(9),s=c(3),i=c(1),l=c(0),a=Object(i.createContext)(),r=function(e){var t=e.children,c=Object(i.useState)("light"),n=Object(s.a)(c,2),r=n[0],j=n[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");j(e.matches?"dark":"light"),e.addEventListener("change",(function(e){j(e.matches?"dark":"light")}))}),[]);return Object(l.jsx)(a.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),j(e)}}],children:t})},j="",o="Dev",b="Imer Lopez",h="Computer Science Student and Part-time developer",d="I\u2019m interested in web development, mobile development and cyber security",u="https://drive.google.com/file/d/1bXSqKjWYJmkYa9n2hVzPNJBYVKOmM4Ni/view?usp=sharing",m={linkedin:"https://linkedin.com/in/imer-lopez-98b39419",github:"https://github.com/imerlopez"},O=[],x=["HTML","CSS","JavaScript","Vuejs","Reactjs","MongoDB","Linux","API","Git","Nodejs","Mysql","Active Directory","Photoshop","Figma","Express"],f="imerlopez538@gmail.com",p=c(16),k=c.n(p),v=c(14),N=c.n(v),_=c(18),g=c.n(_),w=c(17),C=c.n(w),S=(c(28),function(){var e=Object(i.useContext)(a),t=Object(s.a)(e,1)[0],c=t.themeName,n=t.toggleTheme,r=Object(i.useState)(!1),j=Object(s.a)(r,2),o=j[0],b=j[1],h=function(){return b(!o)};return Object(l.jsxs)("nav",{className:"center nav",children:[Object(l.jsxs)("ul",{style:{display:o?"flex":null},className:"nav__list",children:[O.length?Object(l.jsx)("li",{className:"nav__list-item",children:Object(l.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,x.length?Object(l.jsx)("li",{className:"nav__list-item",children:Object(l.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,f?Object(l.jsx)("li",{className:"nav__list-item",children:Object(l.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contact"})}):null]}),Object(l.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===c?Object(l.jsx)(N.a,{}):Object(l.jsx)(k.a,{})}),Object(l.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:o?Object(l.jsx)(C.a,{}):Object(l.jsx)(g.a,{})})]})}),y=(c(32),function(){var e=j,t=o;return Object(l.jsxs)("header",{className:"header center",children:[Object(l.jsx)("h3",{children:e?Object(l.jsx)("a",{href:e,className:"link",children:t}):t}),Object(l.jsx)(S,{})]})}),P=c(11),E=c.n(P),z=c(19),I=c.n(z),L=(c(33),function(){var e=b,t=h,c=d,n=u,s=m;return Object(l.jsxs)("div",{className:"about center",children:[e&&Object(l.jsxs)("h1",{children:["Hi, I am ",Object(l.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(l.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(l.jsx)("p",{className:"about__desc",children:c&&c}),Object(l.jsxs)("div",{className:"about__contact center",children:[n&&Object(l.jsx)("a",{href:n,target:"_blank",children:Object(l.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(l.jsxs)(l.Fragment,{children:[s.github&&Object(l.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(l.jsx)(E.a,{})}),s.linkedin&&Object(l.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(l.jsx)(I.a,{})})]})]})]})}),J=c(7),M=c.n(J),B=c(20),Y=c.n(B),A=(c(35),function(e){var t=e.project;return Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("h3",{children:t.name}),Object(l.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(l.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(l.jsx)("li",{className:"project__stack-item",children:e},M()())}))}),t.sourceCode&&Object(l.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(l.jsx)(E.a,{})}),t.livePreview&&Object(l.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(l.jsx)(Y.a,{})})]})}),D=(c(36),function(){return O.length?Object(l.jsxs)("section",{id:"projects",className:"section projects",children:[Object(l.jsx)("h2",{className:"section__title",children:"Projects"}),Object(l.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(l.jsx)(A,{project:e},M()())}))})]}):null}),T=(c(37),function(){return x.length?Object(l.jsxs)("section",{className:"section skills",id:"skills",children:[Object(l.jsx)("h2",{className:"section__title",children:"Skills"}),Object(l.jsx)("ul",{className:"skills__list",children:x.map((function(e){return Object(l.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},M()())}))})]}):null}),V=c(21),q=c.n(V),F=(c(38),function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(l.jsx)("div",{className:"scroll-top",children:Object(l.jsx)("a",{href:"#top",children:Object(l.jsx)(q.a,{fontSize:"large"})})}):null}),H=(c(39),function(){return f?Object(l.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(l.jsx)("h2",{className:"section__title",children:"Contact"}),Object(l.jsx)("a",{href:"mailto:".concat(f),target:"blank",children:Object(l.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),K=(c(40),function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("a",{href:"",className:"link footer__link",children:"Created By Imer Lopez"})})}),R=(c(41),function(){var e=Object(i.useContext)(a),t=Object(s.a)(e,1)[0].themeName;return Object(l.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(l.jsx)(y,{}),Object(l.jsxs)("main",{children:[Object(l.jsx)(L,{}),Object(l.jsx)(D,{}),Object(l.jsx)(T,{}),Object(l.jsx)(H,{})]}),Object(l.jsx)(F,{}),Object(l.jsx)(K,{})]})});c(42);Object(n.render)(Object(l.jsx)(r,{children:Object(l.jsx)(R,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a945d356.chunk.js.map