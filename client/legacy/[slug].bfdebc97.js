import{_ as n,a as t,b as e,c as r,i,s as o,d as c,S as a,j as s,k as l,l as u,p as f,r as h,e as v,J as d,t as g,K as m,v as p,w as $,y,C as w,D as b,E,z as _,F as R,L as D,M as k,N as A,O as B,f as S,P as j,Q as x,R as L,T,o as I,m as N,A as C,B as P,U as z,q as V}from"./client.097bacda.js";function q(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var i,o=t(n);if(r){var c=t(this).constructor;i=Reflect.construct(o,arguments,c)}else i=o.apply(this,arguments);return e(this,i)}}function M(n,t,e){var r=n.slice();return r[13]=t[e],r}function O(n,t,e){var r=n.slice();return r[10]=t[e],r}function U(n){var t,e,r=new L({props:{name:"las la-arrow-right"}});return{c:function(){t=s("div"),w(r.$$.fragment),this.h()},l:function(n){t=u(n,"DIV",{class:!0});var e=f(t);b(r.$$.fragment,e),e.forEach(v),this.h()},h:function(){g(t,"class","icon-container svelte-1kbpyyb")},m:function(n,i){p(n,t,i),E(r,t,null),e=!0},i:function(n){e||(y(r.$$.fragment,n),e=!0)},o:function(n){_(r.$$.fragment,n),e=!1},d:function(n){n&&v(t),R(r)}}}function H(n){var t,e,r=new L({props:{name:"las la-arrow-right"}});return{c:function(){t=s("div"),w(r.$$.fragment),this.h()},l:function(n){t=u(n,"DIV",{class:!0});var e=f(t);b(r.$$.fragment,e),e.forEach(v),this.h()},h:function(){g(t,"class","icon-container svelte-1kbpyyb")},m:function(n,i){p(n,t,i),E(r,t,null),e=!0},i:function(n){e||(y(r.$$.fragment,n),e=!0)},o:function(n){_(r.$$.fragment,n),e=!1},d:function(n){n&&v(t),R(r)}}}function F(n){var t,e,r,i,o,c,a=n[13].title+"",w=n[13].slug===n[4]&&H();return{c:function(){t=s("a"),r=l(),w&&w.c(),this.h()},l:function(n){t=u(n,"A",{class:!0,href:!0,"data-level":!0});var e=f(t);r=h(e),w&&w.l(e),e.forEach(v),this.h()},h:function(){e=new d(r),g(t,"class","subsection svelte-1kbpyyb"),g(t,"href",i=n[1]+"/"+n[2]+"#"+n[13].slug),g(t,"data-level",o=n[13].level),m(t,"active",n[13].slug===n[4])},m:function(n,i){p(n,t,i),e.m(a,t),$(t,r),w&&w.m(t,null),c=!0},p:function(n,r){(!c||8&r)&&a!==(a=n[13].title+"")&&e.p(a),n[13].slug===n[4]?w?24&r&&y(w,1):((w=H()).c(),y(w,1),w.m(t,null)):w&&(D(),_(w,1,1,(function(){w=null})),k()),(!c||14&r&&i!==(i=n[1]+"/"+n[2]+"#"+n[13].slug))&&g(t,"href",i),(!c||8&r&&o!==(o=n[13].level))&&g(t,"data-level",o),24&r&&m(t,"active",n[13].slug===n[4])},i:function(n){c||(y(w),c=!0)},o:function(n){_(w),c=!1},d:function(n){n&&v(t),w&&w.d()}}}function J(n){for(var t,e,r,i,o,c,a,w,b=n[10].metadata.title+"",E=n[10].slug===n[4]&&U(),R=n[10].subsections,B=[],S=0;S<R.length;S+=1)B[S]=F(M(n,R,S));var j=function(n){return _(B[n],1,1,(function(){B[n]=null}))};return{c:function(){t=s("li"),e=s("a"),i=l(),E&&E.c(),c=l();for(var n=0;n<B.length;n+=1)B[n].c();a=l(),this.h()},l:function(n){t=u(n,"LI",{class:!0});var r=f(t);e=u(r,"A",{class:!0,href:!0});var o=f(e);i=h(o),E&&E.l(o),o.forEach(v),c=h(r);for(var s=0;s<B.length;s+=1)B[s].l(r);a=h(r),r.forEach(v),this.h()},h:function(){r=new d(i),g(e,"class","section svelte-1kbpyyb"),g(e,"href",o=n[1]+"/"+n[2]+"#"+n[10].slug),m(e,"active",n[10].slug===n[4]),g(t,"class","svelte-1kbpyyb")},m:function(n,o){p(n,t,o),$(t,e),r.m(b,e),$(e,i),E&&E.m(e,null),$(t,c);for(var s=0;s<B.length;s+=1)B[s].m(t,null);$(t,a),w=!0},p:function(n,i){if((!w||8&i)&&b!==(b=n[10].metadata.title+"")&&r.p(b),n[10].slug===n[4]?E?24&i&&y(E,1):((E=U()).c(),y(E,1),E.m(e,null)):E&&(D(),_(E,1,1,(function(){E=null})),k()),(!w||14&i&&o!==(o=n[1]+"/"+n[2]+"#"+n[10].slug))&&g(e,"href",o),24&i&&m(e,"active",n[10].slug===n[4]),30&i){var c;for(R=n[10].subsections,c=0;c<R.length;c+=1){var s=M(n,R,c);B[c]?(B[c].p(s,i),y(B[c],1)):(B[c]=F(s),B[c].c(),y(B[c],1),B[c].m(t,a))}for(D(),c=R.length;c<B.length;c+=1)j(c);k()}},i:function(n){if(!w){y(E);for(var t=0;t<R.length;t+=1)y(B[t]);w=!0}},o:function(n){_(E),B=B.filter(Boolean);for(var t=0;t<B.length;t+=1)_(B[t]);w=!1},d:function(n){n&&v(t),E&&E.d(),A(B,n)}}}function K(n){for(var t,e,r,i,o=n[3],c=[],a=0;a<o.length;a+=1)c[a]=J(O(n,o,a));var l=function(n){return _(c[n],1,1,(function(){c[n]=null}))};return{c:function(){t=s("ul");for(var n=0;n<c.length;n+=1)c[n].c();this.h()},l:function(n){t=u(n,"UL",{class:!0});for(var e=f(t),r=0;r<c.length;r+=1)c[r].l(e);e.forEach(v),this.h()},h:function(){g(t,"class","reference-toc svelte-1kbpyyb")},m:function(o,a){p(o,t,a);for(var s=0;s<c.length;s+=1)c[s].m(t,null);n[7](t),e=!0,r||(i=[B(t,"mouseenter",n[8]),B(t,"mouseleave",n[9])],r=!0)},p:function(n,e){var r=S(e,1)[0];if(30&r){var i;for(o=n[3],i=0;i<o.length;i+=1){var a=O(n,o,i);c[i]?(c[i].p(a,r),y(c[i],1)):(c[i]=J(a),c[i].c(),y(c[i],1),c[i].m(t,null))}for(D(),i=o.length;i<c.length;i+=1)l(i);k()}},i:function(n){if(!e){for(var t=0;t<o.length;t+=1)y(c[t]);e=!0}},o:function(n){c=c.filter(Boolean);for(var t=0;t<c.length;t+=1)_(c[t]);e=!1},d:function(e){e&&v(t),A(c,e),n[7](null),r=!1,j(i)}}}function Q(n,t,e){var r,i=t.lang,o=void 0===i?"en":i,c=t.dir,a=void 0===c?"":c,s=t.sections,l=void 0===s?[]:s,u=t.active_section,f=void 0===u?null:u,h=t.show_contents,v=t.prevent_sidebar_scroll,d=void 0!==v&&v;x((function(){if(!(d||h&&window.innerWidth<832)){var n=r.querySelector(".active");if(n){var t=n.getBoundingClientRect(),e=t.top,i=t.bottom,o=window.innerHeight-200;e>o?r.parentNode.scrollBy({top:e-o,left:0,behavior:"smooth"}):i<200&&r.parentNode.scrollBy({top:i-200,left:0,behavior:"smooth"})}}}));return n.$set=function(n){"lang"in n&&e(1,o=n.lang),"dir"in n&&e(2,a=n.dir),"sections"in n&&e(3,l=n.sections),"active_section"in n&&e(4,f=n.active_section),"show_contents"in n&&e(6,h=n.show_contents),"prevent_sidebar_scroll"in n&&e(0,d=n.prevent_sidebar_scroll)},[d,o,a,l,f,r,h,function(n){T[n?"unshift":"push"]((function(){e(5,r=n)}))},function(){return e(0,d=!0)},function(){return e(0,d=!1)}]}var W=function(t){n(s,a);var e=q(s);function s(n){var t;return r(this,s),t=e.call(this),i(c(t),n,Q,K,o,{lang:1,dir:2,sections:3,active_section:4,show_contents:6,prevent_sidebar_scroll:0}),t}return s}();function Y(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var i,o=t(n);if(r){var c=t(this).constructor;i=Reflect.construct(o,arguments,c)}else i=o.apply(this,arguments);return e(this,i)}}function G(n,t,e){var r=n.slice();return r[15]=t[e],r}function X(n){var t,e,r,i,o,c,a,m,D,k,A,B,S,j,x,T,I,N,C=n[15].metadata.title+"",P=n[15].html+"",z=new L({props:{name:"las la-external-link-alt",size:"24px"}});return{c:function(){t=s("section"),e=s("h2"),r=s("span"),o=l(),c=s("a"),m=l(),k=l(),A=s("small"),B=s("a"),w(z.$$.fragment),j=l(),T=l(),this.h()},l:function(n){t=u(n,"SECTION",{"data-id":!0,class:!0});var i=f(t);e=u(i,"H2",{class:!0});var a=f(e);r=u(a,"SPAN",{class:!0,id:!0}),f(r).forEach(v),o=h(a),c=u(a,"A",{href:!0,class:!0,"aria-hidden":!0}),f(c).forEach(v),m=h(a),k=h(a),A=u(a,"SMALL",{class:!0});var s=f(A);B=u(s,"A",{href:!0,title:!0,class:!0});var l=f(B);b(z.$$.fragment,l),l.forEach(v),s.forEach(v),a.forEach(v),j=h(i),T=h(i),i.forEach(v),this.h()},h:function(){g(r,"class","offset-anchor"),g(r,"id",i=n[15].slug),g(c,"href",a=n[4]+"#"+n[15].slug),g(c,"class","anchor"),g(c,"aria-hidden",""),D=new d(k),g(B,"href",S="https://github.com/"+n[1]+"/"+n[2]+"/edit/master"+n[3]+"/"+n[4]+"/"+n[15].file),g(B,"title",n[5]),g(B,"class","svelte-184vty6"),g(A,"class","svelte-184vty6"),g(e,"class","svelte-184vty6"),x=new d(T),g(t,"data-id",I=n[15].slug),g(t,"class","svelte-184vty6")},m:function(n,i){p(n,t,i),$(t,e),$(e,r),$(e,o),$(e,c),$(e,m),D.m(C,e),$(e,k),$(e,A),$(A,B),E(z,B,null),$(t,j),x.m(P,t),$(t,T),N=!0},p:function(n,e){(!N||64&e&&i!==(i=n[15].slug))&&g(r,"id",i),(!N||80&e&&a!==(a=n[4]+"#"+n[15].slug))&&g(c,"href",a),(!N||64&e)&&C!==(C=n[15].metadata.title+"")&&D.p(C),(!N||94&e&&S!==(S="https://github.com/"+n[1]+"/"+n[2]+"/edit/master"+n[3]+"/"+n[4]+"/"+n[15].file))&&g(B,"href",S),(!N||32&e)&&g(B,"title",n[5]),(!N||64&e)&&P!==(P=n[15].html+"")&&x.p(P),(!N||64&e&&I!==(I=n[15].slug))&&g(t,"data-id",I)},i:function(n){N||(y(z.$$.fragment,n),N=!0)},o:function(n){_(z.$$.fragment,n),N=!1},d:function(n){n&&v(t),R(z)}}}function Z(n){for(var t,e,r,i,o,c,a,d,x,T=n[6],I=[],N=0;N<T.length;N+=1)I[N]=X(G(n,T,N));var C=function(n){return _(I[n],1,1,(function(){I[n]=null}))},P=new W({props:{lang:n[0],dir:n[4],sections:n[6],active_section:n[7],show_contents:n[10]}}),z=new L({props:{name:n[10]?"las la-window-close":"las la-bars"}});return{c:function(){t=s("div");for(var n=0;n<I.length;n+=1)I[n].c();e=l(),r=s("aside"),i=s("div"),w(P.$$.fragment),o=l(),c=s("button"),w(z.$$.fragment),this.h()},l:function(n){t=u(n,"DIV",{class:!0});for(var a=f(t),s=0;s<I.length;s+=1)I[s].l(a);a.forEach(v),e=h(n),r=u(n,"ASIDE",{class:!0});var l=f(r);i=u(l,"DIV",{class:!0});var d=f(i);b(P.$$.fragment,d),d.forEach(v),o=h(l),c=u(l,"BUTTON",{class:!0});var g=f(c);b(z.$$.fragment,g),g.forEach(v),l.forEach(v),this.h()},h:function(){g(t,"class","content listify svelte-184vty6"),g(i,"class","sidebar svelte-184vty6"),g(c,"class","svelte-184vty6"),g(r,"class","sidebar-container svelte-184vty6"),m(r,"open",n[10])},m:function(s,l){p(s,t,l);for(var u=0;u<I.length;u+=1)I[u].m(t,null);n[11](t),p(s,e,l),p(s,r,l),$(r,i),E(P,i,null),$(r,o),$(r,c),E(z,c,null),n[14](r),a=!0,d||(x=[B(i,"click",n[12]),B(c,"click",n[13])],d=!0)},p:function(n,e){var i=S(e,1)[0];if(126&i){var o;for(T=n[6],o=0;o<T.length;o+=1){var c=G(n,T,o);I[o]?(I[o].p(c,i),y(I[o],1)):(I[o]=X(c),I[o].c(),y(I[o],1),I[o].m(t,null))}for(D(),o=T.length;o<I.length;o+=1)C(o);k()}var a={};1&i&&(a.lang=n[0]),16&i&&(a.dir=n[4]),64&i&&(a.sections=n[6]),128&i&&(a.active_section=n[7]),1024&i&&(a.show_contents=n[10]),P.$set(a);var s={};1024&i&&(s.name=n[10]?"las la-window-close":"las la-bars"),z.$set(s),1024&i&&m(r,"open",n[10])},i:function(n){if(!a){for(var t=0;t<T.length;t+=1)y(I[t]);y(P.$$.fragment,n),y(z.$$.fragment,n),a=!0}},o:function(n){I=I.filter(Boolean);for(var t=0;t<I.length;t+=1)_(I[t]);_(P.$$.fragment,n),_(z.$$.fragment,n),a=!1},d:function(i){i&&v(t),A(I,i),n[11](null),i&&v(e),i&&v(r),R(P),R(z),n[14](null),d=!1,j(x)}}}function nn(n,t,e){var r,i,o,c=t.lang,a=void 0===c?N.lang:c,s=t.owner,l=void 0===s?"caos":s,u=t.project,f=void 0===u?"site":u,h=t.path,v=void 0===h?"/docs":h,d=t.dir,g=void 0===d?"":d,m=t.edit_title,p=void 0===m?"edit this section":m,$=t.sections,y=!1;I((function(){var n,t=i.querySelectorAll("[id]:not([data-scrollignore])"),o=function(){var e=i.getBoundingClientRect().top;n=[].map.call(t,(function(n){return n.getBoundingClientRect().top-e}))},c=window.location.hash.slice(1),a=function(){for(var i=-window.scrollY,o=t.length;o--;)if(n[o]+i<40){var a=t[o].id;return void(a!==c&&(e(7,r=a),c=a))}};window.addEventListener("scroll",a,!0),window.addEventListener("resize",o,!0);var s=[setTimeout(o,1e3),setTimeout(a,5e3)];return o(),a(),function(){window.removeEventListener("scroll",a,!0),window.removeEventListener("resize",o,!0),s.forEach((function(n){return clearTimeout(n)}))}}));return n.$set=function(n){"lang"in n&&e(0,a=n.lang),"owner"in n&&e(1,l=n.owner),"project"in n&&e(2,f=n.project),"path"in n&&e(3,v=n.path),"dir"in n&&e(4,g=n.dir),"edit_title"in n&&e(5,p=n.edit_title),"sections"in n&&e(6,$=n.sections)},[a,l,f,v,g,p,$,r,i,o,y,function(n){T[n?"unshift":"push"]((function(){e(8,i=n)}))},function(){return e(10,y=!1)},function(){return e(10,y=!y)},function(n){T[n?"unshift":"push"]((function(){e(9,o=n)}))}]}var tn=function(t){n(s,a);var e=Y(s);function s(n){var t;return r(this,s),t=e.call(this),i(c(t),n,nn,Z,o,{lang:0,owner:1,project:2,path:3,dir:4,edit_title:5,sections:6}),t}return s}();function en(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var i,o=t(n);if(r){var c=t(this).constructor;i=Reflect.construct(o,arguments,c)}else i=o.apply(this,arguments);return e(this,i)}}function rn(n,t,e){var r=n.slice();return r[3]=t[e].name,r[4]=t[e].content,r[6]=e,r}function on(n){var t,e,r;return{c:function(){t=s("meta"),this.h()},l:function(n){t=u(n,"META",{name:!0,content:!0}),this.h()},h:function(){g(t,"name",e=n[3]),g(t,"content",r=n[4])},m:function(n,e){p(n,t,e)},p:function(n,i){4&i&&e!==(e=n[3])&&g(t,"name",e),4&i&&r!==(r=n[4])&&g(t,"content",r)},d:function(n){n&&v(t)}}}function cn(n){var t,e,r,i;document.title=t=N.name+" • "+n[0];for(var o=n[2],c=[],a=0;a<o.length;a+=1)c[a]=on(rn(n,o,a));var s=new tn({props:{sections:n[1],project:"site",dir:n[0]}});return{c:function(){for(var n=0;n<c.length;n+=1)c[n].c();e=z(),r=l(),w(s.$$.fragment)},l:function(n){for(var t=V('[data-svelte="svelte-4bltt5"]',document.head),i=0;i<c.length;i+=1)c[i].l(t);e=z(),t.forEach(v),r=h(n),b(s.$$.fragment,n)},m:function(n,t){for(var o=0;o<c.length;o+=1)c[o].m(document.head,null);$(document.head,e),p(n,r,t),E(s,n,t),i=!0},p:function(n,r){var a=S(r,1)[0];if((!i||1&a)&&t!==(t=N.name+" • "+n[0])&&(document.title=t),4&a){var l;for(o=n[2],l=0;l<o.length;l+=1){var u=rn(n,o,l);c[l]?c[l].p(u,a):(c[l]=on(u),c[l].c(),c[l].m(e.parentNode,e))}for(;l<c.length;l+=1)c[l].d(1);c.length=o.length}var f={};2&a&&(f.sections=n[1]),1&a&&(f.dir=n[0]),s.$set(f)},i:function(n){i||(y(s.$$.fragment,n),i=!0)},o:function(n){_(s.$$.fragment,n),i=!1},d:function(n){A(c,n),v(e),n&&v(r),R(s,n)}}}function an(n){return sn.apply(this,arguments)}function sn(){return(sn=C(P.mark((function n(t){var e,r,i,o,c;return P.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.params,r=e.lang,i=e.slug,n.next=4,this.fetch("".concat(r,"/").concat(i,".json")).then((function(n){return n.json()}));case 4:return o=n.sent,c=[],n.abrupt("return",{sections:o,slug:i,tags:c});case 7:case"end":return n.stop()}}),n,this)})))).apply(this,arguments)}function ln(n,t,e){var r=t.slug,i=t.sections,o=t.tags;return n.$set=function(n){"slug"in n&&e(0,r=n.slug),"sections"in n&&e(1,i=n.sections),"tags"in n&&e(2,o=n.tags)},[r,i,o]}var un=function(t){n(s,a);var e=en(s);function s(n){var t;return r(this,s),t=e.call(this),i(c(t),n,ln,cn,o,{slug:0,sections:1,tags:2}),t}return s}();export default un;export{an as preload};