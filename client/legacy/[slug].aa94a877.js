import{_ as t,a as n,i as e,s as r,b as i,S as o,j as c,k as a,l as s,p as l,r as u,d as f,K as h,t as v,L as d,v as g,w as m,D as p,E as $,F as w,z as y,A as b,G as E,M as _,N as R,O as D,P as k,Q as A,c as B,R as S,e as j,f as x,T as L,U as T,o as I,m as N,B as C,C as P,V,q as z}from"./client.f1f4e649.js";function q(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function M(t,n,e){var r=t.slice();return r[13]=n[e],r}function O(t,n,e){var r=t.slice();return r[10]=n[e],r}function U(t){var n,e,r=new L({props:{name:"las la-arrow-right"}});return{c:function(){n=c("div"),p(r.$$.fragment),this.h()},l:function(t){n=s(t,"DIV",{class:!0});var e=l(n);$(r.$$.fragment,e),e.forEach(f),this.h()},h:function(){v(n,"class","icon-container svelte-1kbpyyb")},m:function(t,i){g(t,n,i),w(r,n,null),e=!0},i:function(t){e||(y(r.$$.fragment,t),e=!0)},o:function(t){b(r.$$.fragment,t),e=!1},d:function(t){t&&f(n),E(r)}}}function H(t){var n,e,r=new L({props:{name:"las la-arrow-right"}});return{c:function(){n=c("div"),p(r.$$.fragment),this.h()},l:function(t){n=s(t,"DIV",{class:!0});var e=l(n);$(r.$$.fragment,e),e.forEach(f),this.h()},h:function(){v(n,"class","icon-container svelte-1kbpyyb")},m:function(t,i){g(t,n,i),w(r,n,null),e=!0},i:function(t){e||(y(r.$$.fragment,t),e=!0)},o:function(t){b(r.$$.fragment,t),e=!1},d:function(t){t&&f(n),E(r)}}}function F(t){var n,e,r,i,o,p,$=t[13].title+"",w=t[13].slug===t[4]&&H();return{c:function(){n=c("a"),r=a(),w&&w.c(),this.h()},l:function(t){n=s(t,"A",{class:!0,href:!0,"data-level":!0});var e=l(n);r=u(e),w&&w.l(e),e.forEach(f),this.h()},h:function(){e=new h($,r),v(n,"class","subsection svelte-1kbpyyb"),v(n,"href",i=t[1]+"/"+t[2]+"#"+t[13].slug),v(n,"data-level",o=t[13].level),d(n,"active",t[13].slug===t[4])},m:function(t,i){g(t,n,i),e.m(n),m(n,r),w&&w.m(n,null),p=!0},p:function(t,r){(!p||8&r)&&$!==($=t[13].title+"")&&e.p($),t[13].slug===t[4]?w?y(w,1):((w=H()).c(),y(w,1),w.m(n,null)):w&&(_(),b(w,1,1,(function(){w=null})),R()),(!p||14&r&&i!==(i=t[1]+"/"+t[2]+"#"+t[13].slug))&&v(n,"href",i),(!p||8&r&&o!==(o=t[13].level))&&v(n,"data-level",o),24&r&&d(n,"active",t[13].slug===t[4])},i:function(t){p||(y(w),p=!0)},o:function(t){b(w),p=!1},d:function(t){t&&f(n),w&&w.d()}}}function G(t){for(var n,e,r,i,o,p,$,w,E=t[10].metadata.title+"",k=t[10].slug===t[4]&&U(),A=t[10].subsections,B=[],S=0;S<A.length;S+=1)B[S]=F(M(t,A,S));var j=function(t){return b(B[t],1,1,(function(){B[t]=null}))};return{c:function(){n=c("li"),e=c("a"),i=a(),k&&k.c(),p=a();for(var t=0;t<B.length;t+=1)B[t].c();$=a(),this.h()},l:function(t){n=s(t,"LI",{class:!0});var r=l(n);e=s(r,"A",{class:!0,href:!0});var o=l(e);i=u(o),k&&k.l(o),o.forEach(f),p=u(r);for(var c=0;c<B.length;c+=1)B[c].l(r);$=u(r),r.forEach(f),this.h()},h:function(){r=new h(E,i),v(e,"class","section svelte-1kbpyyb"),v(e,"href",o=t[1]+"/"+t[2]+"#"+t[10].slug),d(e,"active",t[10].slug===t[4]),v(n,"class","svelte-1kbpyyb")},m:function(t,o){g(t,n,o),m(n,e),r.m(e),m(e,i),k&&k.m(e,null),m(n,p);for(var c=0;c<B.length;c+=1)B[c].m(n,null);m(n,$),w=!0},p:function(t,i){if((!w||8&i)&&E!==(E=t[10].metadata.title+"")&&r.p(E),t[10].slug===t[4]?k?y(k,1):((k=U()).c(),y(k,1),k.m(e,null)):k&&(_(),b(k,1,1,(function(){k=null})),R()),(!w||14&i&&o!==(o=t[1]+"/"+t[2]+"#"+t[10].slug))&&v(e,"href",o),24&i&&d(e,"active",t[10].slug===t[4]),30&i){var c;for(A=t[10].subsections,c=0;c<A.length;c+=1){var a=M(t,A,c);B[c]?(B[c].p(a,i),y(B[c],1)):(B[c]=F(a),B[c].c(),y(B[c],1),B[c].m(n,$))}for(_(),c=A.length;c<B.length;c+=1)j(c);R()}},i:function(t){if(!w){y(k);for(var n=0;n<A.length;n+=1)y(B[n]);w=!0}},o:function(t){b(k),B=B.filter(Boolean);for(var n=0;n<B.length;n+=1)b(B[n]);w=!1},d:function(t){t&&f(n),k&&k.d(),D(B,t)}}}function K(t){for(var n,e,r,i=t[3],o=[],a=0;a<i.length;a+=1)o[a]=G(O(t,i,a));var u=function(t){return b(o[t],1,1,(function(){o[t]=null}))};return{c:function(){n=c("ul");for(var t=0;t<o.length;t+=1)o[t].c();this.h()},l:function(t){n=s(t,"UL",{class:!0});for(var e=l(n),r=0;r<o.length;r+=1)o[r].l(e);e.forEach(f),this.h()},h:function(){v(n,"class","reference-toc svelte-1kbpyyb")},m:function(i,c,a){g(i,n,c);for(var s=0;s<o.length;s+=1)o[s].m(n,null);t[7](n),e=!0,a&&k(r),r=[A(n,"mouseenter",t[8]),A(n,"mouseleave",t[9])]},p:function(t,e){var r=B(e,1)[0];if(30&r){var c;for(i=t[3],c=0;c<i.length;c+=1){var a=O(t,i,c);o[c]?(o[c].p(a,r),y(o[c],1)):(o[c]=G(a),o[c].c(),y(o[c],1),o[c].m(n,null))}for(_(),c=i.length;c<o.length;c+=1)u(c);R()}},i:function(t){if(!e){for(var n=0;n<i.length;n+=1)y(o[n]);e=!0}},o:function(t){o=o.filter(Boolean);for(var n=0;n<o.length;n+=1)b(o[n]);e=!1},d:function(e){e&&f(n),D(o,e),t[7](null),k(r)}}}function Q(t,n,e){var r,i=n.lang,o=void 0===i?"en":i,c=n.dir,a=void 0===c?"":c,s=n.sections,l=void 0===s?[]:s,u=n.active_section,f=void 0===u?null:u,h=n.show_contents,v=n.prevent_sidebar_scroll,d=void 0!==v&&v;S((function(){if(!(d||h&&window.innerWidth<832)){var t=r.querySelector(".active");if(t){var n=t.getBoundingClientRect(),e=n.top,i=n.bottom,o=window.innerHeight-200;e>o?r.parentNode.scrollBy({top:e-o,left:0,behavior:"smooth"}):i<200&&r.parentNode.scrollBy({top:i-200,left:0,behavior:"smooth"})}}}));return t.$set=function(t){"lang"in t&&e(1,o=t.lang),"dir"in t&&e(2,a=t.dir),"sections"in t&&e(3,l=t.sections),"active_section"in t&&e(4,f=t.active_section),"show_contents"in t&&e(6,h=t.show_contents),"prevent_sidebar_scroll"in t&&e(0,d=t.prevent_sidebar_scroll)},[d,o,a,l,f,r,h,function(t){T[t?"unshift":"push"]((function(){e(5,r=t)}))},function(){return e(0,d=!0)},function(){return e(0,d=!1)}]}var W=function(c){t(l,o);var a,s=(a=l,function(){var t,n=j(a);if(q()){var e=j(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return x(this,t)});function l(t){var o;return n(this,l),o=s.call(this),e(i(o),t,Q,K,r,{lang:1,dir:2,sections:3,active_section:4,show_contents:6,prevent_sidebar_scroll:0}),o}return l}();function Y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function J(t,n,e){var r=t.slice();return r[15]=n[e],r}function X(t){var n,e,r,i,o,d,_,R,D,k,A,B,S,j,x,T,I,N,C=t[15].metadata.title+"",P=t[15].html+"",V=new L({props:{name:"las la-external-link-alt",size:"24px"}});return{c:function(){n=c("section"),e=c("h2"),r=c("span"),o=a(),d=c("a"),R=a(),k=a(),A=c("small"),B=c("a"),p(V.$$.fragment),j=a(),T=a(),this.h()},l:function(t){n=s(t,"SECTION",{"data-id":!0,class:!0});var i=l(n);e=s(i,"H2",{class:!0});var c=l(e);r=s(c,"SPAN",{class:!0,id:!0}),l(r).forEach(f),o=u(c),d=s(c,"A",{href:!0,class:!0,"aria-hidden":!0}),l(d).forEach(f),R=u(c),k=u(c),A=s(c,"SMALL",{class:!0});var a=l(A);B=s(a,"A",{href:!0,title:!0,class:!0});var h=l(B);$(V.$$.fragment,h),h.forEach(f),a.forEach(f),c.forEach(f),j=u(i),T=u(i),i.forEach(f),this.h()},h:function(){v(r,"class","offset-anchor"),v(r,"id",i=t[15].slug),v(d,"href",_=t[4]+"#"+t[15].slug),v(d,"class","anchor"),v(d,"aria-hidden",""),D=new h(C,k),v(B,"href",S="https://github.com/"+t[1]+"/"+t[2]+"/edit/master"+t[3]+"/"+t[4]+"/"+t[15].file),v(B,"title",t[5]),v(B,"class","svelte-184vty6"),v(A,"class","svelte-184vty6"),v(e,"class","svelte-184vty6"),x=new h(P,T),v(n,"data-id",I=t[15].slug),v(n,"class","svelte-184vty6")},m:function(t,i){g(t,n,i),m(n,e),m(e,r),m(e,o),m(e,d),m(e,R),D.m(e),m(e,k),m(e,A),m(A,B),w(V,B,null),m(n,j),x.m(n),m(n,T),N=!0},p:function(t,e){(!N||64&e&&i!==(i=t[15].slug))&&v(r,"id",i),(!N||80&e&&_!==(_=t[4]+"#"+t[15].slug))&&v(d,"href",_),(!N||64&e)&&C!==(C=t[15].metadata.title+"")&&D.p(C),(!N||94&e&&S!==(S="https://github.com/"+t[1]+"/"+t[2]+"/edit/master"+t[3]+"/"+t[4]+"/"+t[15].file))&&v(B,"href",S),(!N||32&e)&&v(B,"title",t[5]),(!N||64&e)&&P!==(P=t[15].html+"")&&x.p(P),(!N||64&e&&I!==(I=t[15].slug))&&v(n,"data-id",I)},i:function(t){N||(y(V.$$.fragment,t),N=!0)},o:function(t){b(V.$$.fragment,t),N=!1},d:function(t){t&&f(n),E(V)}}}function Z(t){for(var n,e,r,i,o,h,S,j,x=t[6],T=[],I=0;I<x.length;I+=1)T[I]=X(J(t,x,I));var N=function(t){return b(T[t],1,1,(function(){T[t]=null}))},C=new W({props:{lang:t[0],dir:t[4],sections:t[6],active_section:t[7],show_contents:t[10]}}),P=new L({props:{name:t[10]?"las la-window-close":"las la-bars"}});return{c:function(){n=c("div");for(var t=0;t<T.length;t+=1)T[t].c();e=a(),r=c("aside"),i=c("div"),p(C.$$.fragment),o=a(),h=c("button"),p(P.$$.fragment),this.h()},l:function(t){n=s(t,"DIV",{class:!0});for(var c=l(n),a=0;a<T.length;a+=1)T[a].l(c);c.forEach(f),e=u(t),r=s(t,"ASIDE",{class:!0});var v=l(r);i=s(v,"DIV",{class:!0});var d=l(i);$(C.$$.fragment,d),d.forEach(f),o=u(v),h=s(v,"BUTTON",{class:!0});var g=l(h);$(P.$$.fragment,g),g.forEach(f),v.forEach(f),this.h()},h:function(){v(n,"class","content listify svelte-184vty6"),v(i,"class","sidebar svelte-184vty6"),v(h,"class","svelte-184vty6"),v(r,"class","sidebar-container svelte-184vty6"),d(r,"open",t[10])},m:function(c,a,s){g(c,n,a);for(var l=0;l<T.length;l+=1)T[l].m(n,null);t[11](n),g(c,e,a),g(c,r,a),m(r,i),w(C,i,null),m(r,o),m(r,h),w(P,h,null),t[14](r),S=!0,s&&k(j),j=[A(i,"click",t[12]),A(h,"click",t[13])]},p:function(t,e){var i=B(e,1)[0];if(126&i){var o;for(x=t[6],o=0;o<x.length;o+=1){var c=J(t,x,o);T[o]?(T[o].p(c,i),y(T[o],1)):(T[o]=X(c),T[o].c(),y(T[o],1),T[o].m(n,null))}for(_(),o=x.length;o<T.length;o+=1)N(o);R()}var a={};1&i&&(a.lang=t[0]),16&i&&(a.dir=t[4]),64&i&&(a.sections=t[6]),128&i&&(a.active_section=t[7]),1024&i&&(a.show_contents=t[10]),C.$set(a);var s={};1024&i&&(s.name=t[10]?"las la-window-close":"las la-bars"),P.$set(s),1024&i&&d(r,"open",t[10])},i:function(t){if(!S){for(var n=0;n<x.length;n+=1)y(T[n]);y(C.$$.fragment,t),y(P.$$.fragment,t),S=!0}},o:function(t){T=T.filter(Boolean);for(var n=0;n<T.length;n+=1)b(T[n]);b(C.$$.fragment,t),b(P.$$.fragment,t),S=!1},d:function(i){i&&f(n),D(T,i),t[11](null),i&&f(e),i&&f(r),E(C),E(P),t[14](null),k(j)}}}function tt(t,n,e){var r,i,o,c=n.lang,a=void 0===c?N.lang:c,s=n.owner,l=void 0===s?"caos":s,u=n.project,f=void 0===u?"site":u,h=n.path,v=void 0===h?"/docs":h,d=n.dir,g=void 0===d?"":d,m=n.edit_title,p=void 0===m?"edit this section":m,$=n.sections,w=!1;I((function(){var t,n=i.querySelectorAll("[id]:not([data-scrollignore])"),o=function(){var e=i.getBoundingClientRect().top;t=[].map.call(n,(function(t){return t.getBoundingClientRect().top-e}))},c=window.location.hash.slice(1),a=function(){for(var i=-window.scrollY,o=n.length;o--;)if(t[o]+i<40){var a=n[o].id;return void(a!==c&&(e(7,r=a),c=a))}};window.addEventListener("scroll",a,!0),window.addEventListener("resize",o,!0);var s=[setTimeout(o,1e3),setTimeout(a,5e3)];return o(),a(),function(){window.removeEventListener("scroll",a,!0),window.removeEventListener("resize",o,!0),s.forEach((function(t){return clearTimeout(t)}))}}));return t.$set=function(t){"lang"in t&&e(0,a=t.lang),"owner"in t&&e(1,l=t.owner),"project"in t&&e(2,f=t.project),"path"in t&&e(3,v=t.path),"dir"in t&&e(4,g=t.dir),"edit_title"in t&&e(5,p=t.edit_title),"sections"in t&&e(6,$=t.sections)},[a,l,f,v,g,p,$,r,i,o,w,function(t){T[t?"unshift":"push"]((function(){e(8,i=t)}))},function(){return e(10,w=!1)},function(){return e(10,w=!w)},function(t){T[t?"unshift":"push"]((function(){e(9,o=t)}))}]}var nt=function(c){t(l,o);var a,s=(a=l,function(){var t,n=j(a);if(Y()){var e=j(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return x(this,t)});function l(t){var o;return n(this,l),o=s.call(this),e(i(o),t,tt,Z,r,{lang:0,owner:1,project:2,path:3,dir:4,edit_title:5,sections:6}),o}return l}();function et(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function rt(t,n,e){var r=t.slice();return r[3]=n[e].name,r[4]=n[e].content,r[6]=e,r}function it(t){var n,e,r;return{c:function(){n=c("meta"),this.h()},l:function(t){n=s(t,"META",{name:!0,content:!0}),this.h()},h:function(){v(n,"name",e=t[3]),v(n,"content",r=t[4])},m:function(t,e){g(t,n,e)},p:function(t,i){4&i&&e!==(e=t[3])&&v(n,"name",e),4&i&&r!==(r=t[4])&&v(n,"content",r)},d:function(t){t&&f(n)}}}function ot(t){var n,e,r,i;document.title=n=N.name+" • "+t[0];for(var o=t[2],c=[],s=0;s<o.length;s+=1)c[s]=it(rt(t,o,s));var l=new nt({props:{sections:t[1],project:"site",dir:t[0]}});return{c:function(){for(var t=0;t<c.length;t+=1)c[t].c();e=V(),r=a(),p(l.$$.fragment)},l:function(t){for(var n=z('[data-svelte="svelte-4bltt5"]',document.head),i=0;i<c.length;i+=1)c[i].l(n);e=V(),n.forEach(f),r=u(t),$(l.$$.fragment,t)},m:function(t,n){for(var o=0;o<c.length;o+=1)c[o].m(document.head,null);m(document.head,e),g(t,r,n),w(l,t,n),i=!0},p:function(t,r){var a=B(r,1)[0];if((!i||1&a)&&n!==(n=N.name+" • "+t[0])&&(document.title=n),4&a){var s;for(o=t[2],s=0;s<o.length;s+=1){var u=rt(t,o,s);c[s]?c[s].p(u,a):(c[s]=it(u),c[s].c(),c[s].m(e.parentNode,e))}for(;s<c.length;s+=1)c[s].d(1);c.length=o.length}var f={};2&a&&(f.sections=t[1]),1&a&&(f.dir=t[0]),l.$set(f)},i:function(t){i||(y(l.$$.fragment,t),i=!0)},o:function(t){b(l.$$.fragment,t),i=!1},d:function(t){D(c,t),f(e),t&&f(r),E(l,t)}}}function ct(t){return at.apply(this,arguments)}function at(){return(at=C(P.mark((function t(n){var e,r,i,o,c;return P.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.params,r=e.lang,i=e.slug,t.next=4,this.fetch("".concat(r,"/").concat(i,".json")).then((function(t){return t.json()}));case 4:return o=t.sent,c=[],t.abrupt("return",{sections:o,slug:i,tags:c});case 7:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function st(t,n,e){var r=n.slug,i=n.sections,o=n.tags;return t.$set=function(t){"slug"in t&&e(0,r=t.slug),"sections"in t&&e(1,i=t.sections),"tags"in t&&e(2,o=t.tags)},[r,i,o]}var lt=function(c){t(l,o);var a,s=(a=l,function(){var t,n=j(a);if(et()){var e=j(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return x(this,t)});function l(t){var o;return n(this,l),o=s.call(this),e(i(o),t,st,ot,r,{slug:0,sections:1,tags:2}),o}return l}();export default lt;export{ct as preload};