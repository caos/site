import{_ as t,a as n,i as e,s as r,b as i,S as o,e as c,c as a,d as s,f as u,g as f,h as l,H as h,j as v,t as d,k as m,l as g,m as p,n as $,o as w,p as y,q as E,r as _,u as b,v as R,w as j,x as D,y as k,z as A,A as x,B,C as S,I as T,D as I,E as L,F as C,G as N,J as M,K as P}from"./client.5d762b45.js";function V(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function q(t,n,e){var r=t.slice();return r[12]=n[e],r}function z(t,n,e){var r=t.slice();return r[9]=n[e],r}function H(t){var n,e,r=new T({props:{name:"arrow-right"}});return{c:function(){n=c("div"),p(r.$$.fragment),this.h()},l:function(t){n=s(t,"DIV",{class:!0});var e=u(n);$(r.$$.fragment,e),e.forEach(l),this.h()},h:function(){v(n,"class","icon-container svelte-mm3tjv")},m:function(t,i){m(t,n,i),w(r,n,null),e=!0},i:function(t){e||(y(r.$$.fragment,t),e=!0)},o:function(t){E(r.$$.fragment,t),e=!1},d:function(t){t&&l(n),_(r)}}}function O(t){var n,e,r=new T({props:{name:"arrow-right"}});return{c:function(){n=c("div"),p(r.$$.fragment),this.h()},l:function(t){n=s(t,"DIV",{class:!0});var e=u(n);$(r.$$.fragment,e),e.forEach(l),this.h()},h:function(){v(n,"class","icon-container svelte-mm3tjv")},m:function(t,i){m(t,n,i),w(r,n,null),e=!0},i:function(t){e||(y(r.$$.fragment,t),e=!0)},o:function(t){E(r.$$.fragment,t),e=!1},d:function(t){t&&l(n),_(r)}}}function U(t){var n,e,r,i,o,p,$=t[12].title+"",w=t[12].slug===t[3]&&O();return{c:function(){n=c("a"),r=a(),w&&w.c(),this.h()},l:function(t){n=s(t,"A",{class:!0,href:!0,"data-level":!0});var e=u(n);r=f(e),w&&w.l(e),e.forEach(l),this.h()},h:function(){e=new h($,r),v(n,"class","subsection svelte-mm3tjv"),v(n,"href",i=t[1]+"#"+t[12].slug),v(n,"data-level",o=t[12].level),d(n,"active",t[12].slug===t[3])},m:function(t,i){m(t,n,i),e.m(n),g(n,r),w&&w.m(n,null),p=!0},p:function(t,r){(!p||4&r)&&$!==($=t[12].title+"")&&e.p($),t[12].slug===t[3]?w?y(w,1):((w=O()).c(),y(w,1),w.m(n,null)):w&&(b(),E(w,1,1,(function(){w=null})),R()),(!p||6&r&&i!==(i=t[1]+"#"+t[12].slug))&&v(n,"href",i),(!p||4&r&&o!==(o=t[12].level))&&v(n,"data-level",o),12&r&&d(n,"active",t[12].slug===t[3])},i:function(t){p||(y(w),p=!0)},o:function(t){E(w),p=!1},d:function(t){t&&l(n),w&&w.d()}}}function F(t){for(var n,e,r,i,o,p,$,w,_=t[9].metadata.title+"",D=t[9].slug===t[3]&&H(),k=t[9].subsections,A=[],x=0;x<k.length;x+=1)A[x]=U(q(t,k,x));var B=function(t){return E(A[t],1,1,(function(){A[t]=null}))};return{c:function(){n=c("li"),e=c("a"),i=a(),D&&D.c(),p=a();for(var t=0;t<A.length;t+=1)A[t].c();$=a(),this.h()},l:function(t){n=s(t,"LI",{class:!0});var r=u(n);e=s(r,"A",{class:!0,href:!0});var o=u(e);i=f(o),D&&D.l(o),o.forEach(l),p=f(r);for(var c=0;c<A.length;c+=1)A[c].l(r);$=f(r),r.forEach(l),this.h()},h:function(){r=new h(_,i),v(e,"class","section svelte-mm3tjv"),v(e,"href",o=t[1]+"#"+t[9].slug),d(e,"active",t[9].slug===t[3]),v(n,"class","svelte-mm3tjv")},m:function(t,o){m(t,n,o),g(n,e),r.m(e),g(e,i),D&&D.m(e,null),g(n,p);for(var c=0;c<A.length;c+=1)A[c].m(n,null);g(n,$),w=!0},p:function(t,i){if((!w||4&i)&&_!==(_=t[9].metadata.title+"")&&r.p(_),t[9].slug===t[3]?D?y(D,1):((D=H()).c(),y(D,1),D.m(e,null)):D&&(b(),E(D,1,1,(function(){D=null})),R()),(!w||6&i&&o!==(o=t[1]+"#"+t[9].slug))&&v(e,"href",o),12&i&&d(e,"active",t[9].slug===t[3]),14&i){var c;for(k=t[9].subsections,c=0;c<k.length;c+=1){var a=q(t,k,c);A[c]?(A[c].p(a,i),y(A[c],1)):(A[c]=U(a),A[c].c(),y(A[c],1),A[c].m(n,$))}for(b(),c=k.length;c<A.length;c+=1)B(c);R()}},i:function(t){if(!w){y(D);for(var n=0;n<k.length;n+=1)y(A[n]);w=!0}},o:function(t){E(D),A=A.filter(Boolean);for(var n=0;n<A.length;n+=1)E(A[n]);w=!1},d:function(t){t&&l(n),D&&D.d(),j(A,t)}}}function G(t){for(var n,e,r,i=t[2],o=[],a=0;a<i.length;a+=1)o[a]=F(z(t,i,a));var f=function(t){return E(o[t],1,1,(function(){o[t]=null}))};return{c:function(){n=c("ul");for(var t=0;t<o.length;t+=1)o[t].c();this.h()},l:function(t){n=s(t,"UL",{class:!0});for(var e=u(n),r=0;r<o.length;r+=1)o[r].l(e);e.forEach(l),this.h()},h:function(){v(n,"class","reference-toc svelte-mm3tjv")},m:function(i,c,a){m(i,n,c);for(var s=0;s<o.length;s+=1)o[s].m(n,null);t[6](n),e=!0,a&&D(r),r=[k(n,"mouseenter",t[7]),k(n,"mouseleave",t[8])]},p:function(t,e){var r=A(e,1)[0];if(14&r){var c;for(i=t[2],c=0;c<i.length;c+=1){var a=z(t,i,c);o[c]?(o[c].p(a,r),y(o[c],1)):(o[c]=F(a),o[c].c(),y(o[c],1),o[c].m(n,null))}for(b(),c=i.length;c<o.length;c+=1)f(c);R()}},i:function(t){if(!e){for(var n=0;n<i.length;n+=1)y(o[n]);e=!0}},o:function(t){o=o.filter(Boolean);for(var n=0;n<o.length;n+=1)E(o[n]);e=!1},d:function(e){e&&l(n),j(o,e),t[6](null),D(r)}}}function J(t,n,e){var r,i=n.dir,o=void 0===i?"":i,c=n.sections,a=void 0===c?[]:c,s=n.active_section,u=void 0===s?null:s,f=n.show_contents,l=n.prevent_sidebar_scroll,h=void 0!==l&&l;x((function(){if(!(h||f&&window.innerWidth<832)){var t=r.querySelector(".active");if(t){var n=t.getBoundingClientRect(),e=n.top,i=n.bottom,o=window.innerHeight-200;e>o?r.parentNode.scrollBy({top:e-o,left:0,behavior:"smooth"}):i<200&&r.parentNode.scrollBy({top:i-200,left:0,behavior:"smooth"})}}}));return t.$set=function(t){"dir"in t&&e(1,o=t.dir),"sections"in t&&e(2,a=t.sections),"active_section"in t&&e(3,u=t.active_section),"show_contents"in t&&e(5,f=t.show_contents),"prevent_sidebar_scroll"in t&&e(0,h=t.prevent_sidebar_scroll)},[h,o,a,u,r,f,function(t){I[t?"unshift":"push"]((function(){e(4,r=t)}))},function(){return e(0,h=!0)},function(){return e(0,h=!1)}]}var K=function(c){t(u,o);var a,s=(a=u,function(){var t,n=B(a);if(V()){var e=B(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return S(this,t)});function u(t){var o;return n(this,u),o=s.call(this),e(i(o),t,J,G,r,{dir:1,sections:2,active_section:3,show_contents:5,prevent_sidebar_scroll:0}),o}return u}();function W(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function Y(t,n,e){var r=t.slice();return r[14]=n[e],r}function Q(t){var n,e,r,i,o,d,b,R,j,D,k,A,x,B,S,I,L,C,N=t[14].metadata.title+"",M=t[14].html+"",P=new T({props:{name:"edit"}});return{c:function(){n=c("section"),e=c("h2"),r=c("span"),o=a(),d=c("a"),R=a(),D=a(),k=c("small"),A=c("a"),p(P.$$.fragment),B=a(),I=a(),this.h()},l:function(t){n=s(t,"SECTION",{"data-id":!0,class:!0});var i=u(n);e=s(i,"H2",{class:!0});var c=u(e);r=s(c,"SPAN",{class:!0,id:!0}),u(r).forEach(l),o=f(c),d=s(c,"A",{href:!0,class:!0,"aria-hidden":!0}),u(d).forEach(l),R=f(c),D=f(c),k=s(c,"SMALL",{class:!0});var a=u(k);A=s(a,"A",{href:!0,title:!0,class:!0});var h=u(A);$(P.$$.fragment,h),h.forEach(l),a.forEach(l),c.forEach(l),B=f(i),I=f(i),i.forEach(l),this.h()},h:function(){v(r,"class","offset-anchor"),v(r,"id",i=t[14].slug),v(d,"href",b=t[3]+"#"+t[14].slug),v(d,"class","anchor"),v(d,"aria-hidden",""),j=new h(N,D),v(A,"href",x="https://github.com/"+t[0]+"/"+t[1]+"/edit/master"+t[2]+"/"+t[3]+"/"+t[14].file),v(A,"title",t[4]),v(A,"class","svelte-1y0hfgk"),v(k,"class","svelte-1y0hfgk"),v(e,"class","svelte-1y0hfgk"),S=new h(M,I),v(n,"data-id",L=t[14].slug),v(n,"class","svelte-1y0hfgk")},m:function(t,i){m(t,n,i),g(n,e),g(e,r),g(e,o),g(e,d),g(e,R),j.m(e),g(e,D),g(e,k),g(k,A),w(P,A,null),g(n,B),S.m(n),g(n,I),C=!0},p:function(t,e){(!C||32&e&&i!==(i=t[14].slug))&&v(r,"id",i),(!C||40&e&&b!==(b=t[3]+"#"+t[14].slug))&&v(d,"href",b),(!C||32&e)&&N!==(N=t[14].metadata.title+"")&&j.p(N),(!C||47&e&&x!==(x="https://github.com/"+t[0]+"/"+t[1]+"/edit/master"+t[2]+"/"+t[3]+"/"+t[14].file))&&v(A,"href",x),(!C||16&e)&&v(A,"title",t[4]),(!C||32&e)&&M!==(M=t[14].html+"")&&S.p(M),(!C||32&e&&L!==(L=t[14].slug))&&v(n,"data-id",L)},i:function(t){C||(y(P.$$.fragment,t),C=!0)},o:function(t){E(P.$$.fragment,t),C=!1},d:function(t){t&&l(n),_(P)}}}function X(t){for(var n,e,r,i,o,h,x,B,S=t[5],I=[],L=0;L<S.length;L+=1)I[L]=Q(Y(t,S,L));var C=function(t){return E(I[t],1,1,(function(){I[t]=null}))},N=new K({props:{dir:t[3],sections:t[5],active_section:t[6],show_contents:t[9]}}),M=new T({props:{name:t[9]?"close":"menu"}});return{c:function(){n=c("div");for(var t=0;t<I.length;t+=1)I[t].c();e=a(),r=c("aside"),i=c("div"),p(N.$$.fragment),o=a(),h=c("button"),p(M.$$.fragment),this.h()},l:function(t){n=s(t,"DIV",{class:!0});for(var c=u(n),a=0;a<I.length;a+=1)I[a].l(c);c.forEach(l),e=f(t),r=s(t,"ASIDE",{class:!0});var v=u(r);i=s(v,"DIV",{class:!0});var d=u(i);$(N.$$.fragment,d),d.forEach(l),o=f(v),h=s(v,"BUTTON",{class:!0});var m=u(h);$(M.$$.fragment,m),m.forEach(l),v.forEach(l),this.h()},h:function(){v(n,"class","content listify svelte-1y0hfgk"),v(i,"class","sidebar svelte-1y0hfgk"),v(h,"class","svelte-1y0hfgk"),v(r,"class","sidebar-container svelte-1y0hfgk"),d(r,"open",t[9])},m:function(c,a,s){m(c,n,a);for(var u=0;u<I.length;u+=1)I[u].m(n,null);t[10](n),m(c,e,a),m(c,r,a),g(r,i),w(N,i,null),g(r,o),g(r,h),w(M,h,null),t[13](r),x=!0,s&&D(B),B=[k(i,"click",t[11]),k(h,"click",t[12])]},p:function(t,e){var i=A(e,1)[0];if(63&i){var o;for(S=t[5],o=0;o<S.length;o+=1){var c=Y(t,S,o);I[o]?(I[o].p(c,i),y(I[o],1)):(I[o]=Q(c),I[o].c(),y(I[o],1),I[o].m(n,null))}for(b(),o=S.length;o<I.length;o+=1)C(o);R()}var a={};8&i&&(a.dir=t[3]),32&i&&(a.sections=t[5]),64&i&&(a.active_section=t[6]),512&i&&(a.show_contents=t[9]),N.$set(a);var s={};512&i&&(s.name=t[9]?"close":"menu"),M.$set(s),512&i&&d(r,"open",t[9])},i:function(t){if(!x){for(var n=0;n<S.length;n+=1)y(I[n]);y(N.$$.fragment,t),y(M.$$.fragment,t),x=!0}},o:function(t){I=I.filter(Boolean);for(var n=0;n<I.length;n+=1)E(I[n]);E(N.$$.fragment,t),E(M.$$.fragment,t),x=!1},d:function(i){i&&l(n),j(I,i),t[10](null),i&&l(e),i&&l(r),_(N),_(M),t[13](null),D(B)}}}function Z(t,n,e){var r,i,o,c=n.owner,a=void 0===c?"caos":c,s=n.project,u=void 0===s?"site":s,f=n.path,l=void 0===f?"/docs":f,h=n.dir,v=void 0===h?"":h,d=n.edit_title,m=void 0===d?"edit this section":d,g=n.sections,p=!1;L((function(){var t,n=i.querySelectorAll("[id]:not([data-scrollignore])"),o=function(){var e=i.getBoundingClientRect().top;t=[].map.call(n,(function(t){return t.getBoundingClientRect().top-e}))},c=window.location.hash.slice(1),a=function(){for(var i=-window.scrollY,o=n.length;o--;)if(t[o]+i<40){var a=n[o].id;return void(a!==c&&(e(6,r=a),c=a))}};window.addEventListener("scroll",a,!0),window.addEventListener("resize",o,!0);var s=[setTimeout(o,1e3),setTimeout(a,5e3)];return o(),a(),function(){window.removeEventListener("scroll",a,!0),window.removeEventListener("resize",o,!0),s.forEach((function(t){return clearTimeout(t)}))}}));return t.$set=function(t){"owner"in t&&e(0,a=t.owner),"project"in t&&e(1,u=t.project),"path"in t&&e(2,l=t.path),"dir"in t&&e(3,v=t.dir),"edit_title"in t&&e(4,m=t.edit_title),"sections"in t&&e(5,g=t.sections)},[a,u,l,v,m,g,r,i,o,p,function(t){I[t?"unshift":"push"]((function(){e(7,i=t)}))},function(){return e(9,p=!1)},function(){return e(9,p=!p)},function(t){I[t?"unshift":"push"]((function(){e(8,o=t)}))}]}var tt=function(c){t(u,o);var a,s=(a=u,function(){var t,n=B(a);if(W()){var e=B(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return S(this,t)});function u(t){var o;return n(this,u),o=s.call(this),e(i(o),t,Z,X,r,{owner:0,project:1,path:2,dir:3,edit_title:4,sections:5}),o}return u}();function nt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function et(t){return{c:function(){this.h()},l:function(t){this.h()},h:function(){document.title="Caos • Documentation"},m:P,d:P}}function rt(t){return document.title="Docs • "+t[0][0].metadata.seotitle,{c:P,l:P,m:P,d:P}}function it(t){var n,e,r,i,o,u,h,d;function b(t,n){return t[0][0]&&t[0][0].metadata&&t[0][0].metadata.seotitle?rt:et}var R=b(t),j=R(t),D=new tt({props:{sections:t[0],project:"site",dir:""}});return{c:function(){j.c(),n=c("meta"),r=c("meta"),o=c("meta"),h=a(),p(D.$$.fragment),this.h()},l:function(t){var e=M('[data-svelte="svelte-a9xup3"]',document.head);j.l(e),n=s(e,"META",{name:!0,content:!0}),r=s(e,"META",{name:!0,content:!0}),o=s(e,"META",{name:!0,content:!0}),e.forEach(l),h=f(t),$(D.$$.fragment,t),this.h()},h:function(){v(n,"name","Description"),v(n,"content",e=t[0][0].metadata.seodescription),v(r,"name","twitter:title"),v(r,"content",i=t[0][0].metadata.twittertitle),v(o,"name","twitter:description"),v(o,"content",u=t[0][0].metadata.twitterdescription)},m:function(t,e){j.m(document.head,null),g(document.head,n),g(document.head,r),g(document.head,o),m(t,h,e),w(D,t,e),d=!0},p:function(t,c){var a=A(c,1)[0];R!==(R=b(t))&&(j.d(1),(j=R(t))&&(j.c(),j.m(n.parentNode,n))),(!d||1&a&&e!==(e=t[0][0].metadata.seodescription))&&v(n,"content",e),(!d||1&a&&i!==(i=t[0][0].metadata.twittertitle))&&v(r,"content",i),(!d||1&a&&u!==(u=t[0][0].metadata.twitterdescription))&&v(o,"content",u);var s={};1&a&&(s.sections=t[0]),D.$set(s)},i:function(t){d||(y(D.$$.fragment,t),d=!0)},o:function(t){E(D.$$.fragment,t),d=!1},d:function(t){j.d(t),l(n),l(r),l(o),t&&l(h),_(D,t)}}}function ot(t){return ct.apply(this,arguments)}function ct(){return(ct=C(N.mark((function t(n){var e;return N.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("index.json").then((function(t){return t.json()}));case 2:return e=t.sent,t.abrupt("return",{sections:e});case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function at(t,n,e){var r=n.sections;return t.$set=function(t){"sections"in t&&e(0,r=t.sections)},[r]}var st=function(c){t(u,o);var a,s=(a=u,function(){var t,n=B(a);if(nt()){var e=B(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return S(this,t)});function u(t){var o;return n(this,u),o=s.call(this),e(i(o),t,at,it,r,{sections:0}),o}return u}();export default st;export{ot as preload};
