import{S as e,i as t,s,e as n,l as i,c as o,b as c,o as l,d as r,M as a,f as h,p as d,h as u,j as f,G as v,w as _,x as m,H as g,D as p,E as w,N as b,q as $,y as E,O as j,P as y,Q as B}from"./index.7b5f1d14.js";import{I}from"./Icon.f7e2470f.js";function A(e,t,s){const n=Object.create(e);return n.subsection=t[s],n}function L(e,t,s){const n=Object.create(e);return n.section=t[s],n}function D(e){var t,s,i=new I({props:{name:"arrow-right"}});return{c(){t=n("div"),i.$$.fragment.c(),this.h()},l(e){t=o(e,"DIV",{class:!0},!1);var s=c(t);i.$$.fragment.l(s),s.forEach(r),this.h()},h(){h(t,"class","icon-container svelte-mm3tjv")},m(e,n){u(e,t,n),v(i,t,null),s=!0},i(e){s||(_(i.$$.fragment,e),s=!0)},o(e){m(i.$$.fragment,e),s=!1},d(e){e&&r(t),g(i)}}}function S(e){var t,s,i=new I({props:{name:"arrow-right"}});return{c(){t=n("div"),i.$$.fragment.c(),this.h()},l(e){t=o(e,"DIV",{class:!0},!1);var s=c(t);i.$$.fragment.l(s),s.forEach(r),this.h()},h(){h(t,"class","icon-container svelte-mm3tjv")},m(e,n){u(e,t,n),v(i,t,null),s=!0},i(e){s||(_(i.$$.fragment,e),s=!0)},o(e){m(i.$$.fragment,e),s=!1},d(e){e&&r(t),g(i)}}}function k(e){var t,s,v,g,b,$,E=e.subsection.title+"",j=e.subsection.slug===e.active_section&&S();return{c(){t=n("a"),v=i(),j&&j.c(),this.h()},l(e){t=o(e,"A",{class:!0,href:!0,"data-level":!0},!1);var s=c(t);v=l(s),j&&j.l(s),s.forEach(r),this.h()},h(){s=new a(E,v),h(t,"class","subsection svelte-mm3tjv"),h(t,"href",g=e.dir+"#"+e.subsection.slug),h(t,"data-level",b=e.subsection.level),d(t,"active",e.subsection.slug===e.active_section)},m(e,n){u(e,t,n),s.m(t),f(t,v),j&&j.m(t,null),$=!0},p(e,n){$&&!e.sections||E===(E=n.subsection.title+"")||s.p(E),n.subsection.slug===n.active_section?j?_(j,1):((j=S()).c(),_(j,1),j.m(t,null)):j&&(p(),m(j,1,1,()=>{j=null}),w()),$&&!e.dir&&!e.sections||g===(g=n.dir+"#"+n.subsection.slug)||h(t,"href",g),$&&!e.sections||b===(b=n.subsection.level)||h(t,"data-level",b),(e.sections||e.active_section)&&d(t,"active",n.subsection.slug===n.active_section)},i(e){$||(_(j),$=!0)},o(e){m(j),$=!1},d(e){e&&r(t),j&&j.d()}}}function N(e){var t,s,v,g,$,E,j,y,B=e.section.metadata.title+"",I=e.section.slug===e.active_section&&D();let L=e.section.subsections,S=[];for(let t=0;t<L.length;t+=1)S[t]=k(A(e,L,t));const N=e=>m(S[e],1,1,()=>{S[e]=null});return{c(){t=n("li"),s=n("a"),g=i(),I&&I.c(),E=i();for(let e=0;e<S.length;e+=1)S[e].c();j=i(),this.h()},l(e){t=o(e,"LI",{class:!0},!1);var n=c(t);s=o(n,"A",{class:!0,href:!0},!1);var i=c(s);g=l(i),I&&I.l(i),i.forEach(r),E=l(n);for(let e=0;e<S.length;e+=1)S[e].l(n);j=l(n),n.forEach(r),this.h()},h(){v=new a(B,g),h(s,"class","section svelte-mm3tjv"),h(s,"href",$=e.dir+"#"+e.section.slug),d(s,"active",e.section.slug===e.active_section),h(t,"class","svelte-mm3tjv")},m(e,n){u(e,t,n),f(t,s),v.m(s),f(s,g),I&&I.m(s,null),f(t,E);for(let e=0;e<S.length;e+=1)S[e].m(t,null);f(t,j),y=!0},p(e,n){if(y&&!e.sections||B===(B=n.section.metadata.title+"")||v.p(B),n.section.slug===n.active_section?I?_(I,1):((I=D()).c(),_(I,1),I.m(s,null)):I&&(p(),m(I,1,1,()=>{I=null}),w()),y&&!e.dir&&!e.sections||$===($=n.dir+"#"+n.section.slug)||h(s,"href",$),(e.sections||e.active_section)&&d(s,"active",n.section.slug===n.active_section),e.dir||e.sections||e.active_section){let s;for(L=n.section.subsections,s=0;s<L.length;s+=1){const i=A(n,L,s);S[s]?(S[s].p(e,i),_(S[s],1)):(S[s]=k(i),S[s].c(),_(S[s],1),S[s].m(t,j))}for(p(),s=L.length;s<S.length;s+=1)N(s);w()}},i(e){if(!y){_(I);for(let e=0;e<L.length;e+=1)_(S[e]);y=!0}},o(e){m(I),S=S.filter(Boolean);for(let e=0;e<S.length;e+=1)m(S[e]);y=!1},d(e){e&&r(t),I&&I.d(),b(S,e)}}}function O(e){var t,s,i;let l=e.sections,a=[];for(let t=0;t<l.length;t+=1)a[t]=N(L(e,l,t));const d=e=>m(a[e],1,1,()=>{a[e]=null});return{c(){t=n("ul");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=o(e,"UL",{class:!0},!1);var s=c(t);for(let e=0;e<a.length;e+=1)a[e].l(s);s.forEach(r),this.h()},h(){h(t,"class","reference-toc svelte-mm3tjv"),i=[$(t,"mouseenter",e.mouseenter_handler),$(t,"mouseleave",e.mouseleave_handler)]},m(n,i){u(n,t,i);for(let e=0;e<a.length;e+=1)a[e].m(t,null);e.ul_1_binding(t),s=!0},p(e,s){if(e.sections||e.dir||e.active_section){let n;for(l=s.sections,n=0;n<l.length;n+=1){const i=L(s,l,n);a[n]?(a[n].p(e,i),_(a[n],1)):(a[n]=N(i),a[n].c(),_(a[n],1),a[n].m(t,null))}for(p(),n=l.length;n<a.length;n+=1)d(n);w()}},i(e){if(!s){for(let e=0;e<l.length;e+=1)_(a[e]);s=!0}},o(e){a=a.filter(Boolean);for(let e=0;e<a.length;e+=1)m(a[e]);s=!1},d(s){s&&r(t),b(a,s),e.ul_1_binding(null),E(i)}}}function T(e,t,s){let n,{dir:i="",sections:o=[],active_section:c=null,show_contents:l,prevent_sidebar_scroll:r=!1}=t;j(()=>{if(r||l&&window.innerWidth<832)return;const e=n.querySelector(".active");if(e){const{top:t,bottom:s}=e.getBoundingClientRect(),i=200,o=window.innerHeight-200;t>o?n.parentNode.scrollBy({top:t-o,left:0,behavior:"smooth"}):s<i&&n.parentNode.scrollBy({top:s-i,left:0,behavior:"smooth"})}});return e.$set=e=>{"dir"in e&&s("dir",i=e.dir),"sections"in e&&s("sections",o=e.sections),"active_section"in e&&s("active_section",c=e.active_section),"show_contents"in e&&s("show_contents",l=e.show_contents),"prevent_sidebar_scroll"in e&&s("prevent_sidebar_scroll",r=e.prevent_sidebar_scroll)},{dir:i,sections:o,active_section:c,show_contents:l,prevent_sidebar_scroll:r,ul:n,ul_1_binding:function(e){y[e?"unshift":"push"](()=>{s("ul",n=e)})},mouseenter_handler:()=>s("prevent_sidebar_scroll",r=!0),mouseleave_handler:()=>s("prevent_sidebar_scroll",r=!1)}}class x extends e{constructor(e){super(),t(this,e,T,O,s,["dir","sections","active_section","show_contents","prevent_sidebar_scroll"])}}const C=()=>window.location.hash.slice(1);function V(e,t,s){const n=Object.create(e);return n.section=t[s],n}function q(e){var t,s,d,p,w,b,$,E,j,y,B,A,L,D,S,k,N,O,T=e.section.metadata.title+"",x=e.section.html+"",C=new I({props:{name:"edit"}});return{c(){t=n("section"),s=n("h2"),d=n("span"),w=i(),b=n("a"),E=i(),y=i(),B=n("small"),A=n("a"),C.$$.fragment.c(),D=i(),k=i(),this.h()},l(e){t=o(e,"SECTION",{"data-id":!0,class:!0},!1);var n=c(t);s=o(n,"H2",{class:!0},!1);var i=c(s);d=o(i,"SPAN",{class:!0,id:!0},!1),c(d).forEach(r),w=l(i),b=o(i,"A",{href:!0,class:!0,"aria-hidden":!0},!1),c(b).forEach(r),E=l(i),y=l(i),B=o(i,"SMALL",{class:!0},!1);var a=c(B);A=o(a,"A",{href:!0,title:!0,class:!0},!1);var h=c(A);C.$$.fragment.l(h),h.forEach(r),a.forEach(r),i.forEach(r),D=l(n),k=l(n),n.forEach(r),this.h()},h(){h(d,"class","offset-anchor"),h(d,"id",p=e.section.slug),h(b,"href",$=e.dir+"#"+e.section.slug),h(b,"class","anchor"),h(b,"aria-hidden",""),j=new a(T,y),h(A,"href",L="https://github.com/"+e.owner+"/site/edit/master"+e.path+"/"+e.dir+"/"+e.section.file),h(A,"title",e.edit_title),h(A,"class","svelte-563ye8"),h(B,"class","svelte-563ye8"),h(s,"class","svelte-563ye8"),S=new a(x,k),h(t,"data-id",N=e.section.slug),h(t,"class","svelte-563ye8")},m(e,n){u(e,t,n),f(t,s),f(s,d),f(s,w),f(s,b),f(s,E),j.m(s),f(s,y),f(s,B),f(B,A),v(C,A,null),f(t,D),S.m(t),f(t,k),O=!0},p(e,s){O&&!e.sections||p===(p=s.section.slug)||h(d,"id",p),O&&!e.dir&&!e.sections||$===($=s.dir+"#"+s.section.slug)||h(b,"href",$),O&&!e.sections||T===(T=s.section.metadata.title+"")||j.p(T),(!O||e.owner||e.path||e.dir||e.sections)&&L!==(L="https://github.com/"+s.owner+"/site/edit/master"+s.path+"/"+s.dir+"/"+s.section.file)&&h(A,"href",L),O&&!e.edit_title||h(A,"title",s.edit_title),O&&!e.sections||x===(x=s.section.html+"")||S.p(x),O&&!e.sections||N===(N=s.section.slug)||h(t,"data-id",N)},i(e){O||(_(C.$$.fragment,e),O=!0)},o(e){m(C.$$.fragment,e),O=!1},d(e){e&&r(t),g(C)}}}function z(e){var t,s,a,j,y,B,A,L;let D=e.sections,S=[];for(let t=0;t<D.length;t+=1)S[t]=q(V(e,D,t));const k=e=>m(S[e],1,1,()=>{S[e]=null});var N=new x({props:{dir:e.dir,sections:e.sections,active_section:e.active_section,show_contents:e.show_contents}}),O=new I({props:{name:e.show_contents?"close":"menu"}});return{c(){t=n("div");for(let e=0;e<S.length;e+=1)S[e].c();s=i(),a=n("aside"),j=n("div"),N.$$.fragment.c(),y=i(),B=n("button"),O.$$.fragment.c(),this.h()},l(e){t=o(e,"DIV",{class:!0},!1);var n=c(t);for(let e=0;e<S.length;e+=1)S[e].l(n);n.forEach(r),s=l(e),a=o(e,"ASIDE",{class:!0},!1);var i=c(a);j=o(i,"DIV",{class:!0},!1);var h=c(j);N.$$.fragment.l(h),h.forEach(r),y=l(i),B=o(i,"BUTTON",{class:!0},!1);var d=c(B);O.$$.fragment.l(d),d.forEach(r),i.forEach(r),this.h()},h(){h(t,"class","content listify svelte-563ye8"),h(j,"class","sidebar svelte-563ye8"),h(B,"class","svelte-563ye8"),h(a,"class","sidebar-container svelte-563ye8"),d(a,"open",e.show_contents),L=[$(j,"click",e.click_handler),$(B,"click",e.click_handler_1)]},m(n,i){u(n,t,i);for(let e=0;e<S.length;e+=1)S[e].m(t,null);e.div0_binding(t),u(n,s,i),u(n,a,i),f(a,j),v(N,j,null),f(a,y),f(a,B),v(O,B,null),e.aside_1_binding(a),A=!0},p(e,s){if(e.sections||e.owner||e.path||e.dir||e.edit_title){let n;for(D=s.sections,n=0;n<D.length;n+=1){const i=V(s,D,n);S[n]?(S[n].p(e,i),_(S[n],1)):(S[n]=q(i),S[n].c(),_(S[n],1),S[n].m(t,null))}for(p(),n=D.length;n<S.length;n+=1)k(n);w()}var n={};e.dir&&(n.dir=s.dir),e.sections&&(n.sections=s.sections),e.active_section&&(n.active_section=s.active_section),e.show_contents&&(n.show_contents=s.show_contents),N.$set(n);var i={};e.show_contents&&(i.name=s.show_contents?"close":"menu"),O.$set(i),e.show_contents&&d(a,"open",s.show_contents)},i(e){if(!A){for(let e=0;e<D.length;e+=1)_(S[e]);_(N.$$.fragment,e),_(O.$$.fragment,e),A=!0}},o(e){S=S.filter(Boolean);for(let e=0;e<S.length;e+=1)m(S[e]);m(N.$$.fragment,e),m(O.$$.fragment,e),A=!1},d(n){n&&r(t),b(S,n),e.div0_binding(null),n&&(r(s),r(a)),g(N),g(O),e.aside_1_binding(null),E(L)}}}function H(e,t,s){let n,i,o,{owner:c="caos",project:l="site",path:r="/content",dir:a="zitadel",edit_title:h="edit this section",sections:d}=t,u=!1;B(()=>{const e=i.querySelectorAll("[id]:not([data-scrollignore])");let t;const o=()=>{const{top:s}=i.getBoundingClientRect();t=[].map.call(e,e=>e.getBoundingClientRect().top-s)};let c=C();const l=()=>{const i=-window.scrollY;let o=e.length;for(;o--;)if(t[o]+i<40){const t=e[o],{id:i}=t;return void(i!==c&&(s("active_section",n=i),c=i))}};window.addEventListener("scroll",l,!0),window.addEventListener("resize",o,!0);const r=[setTimeout(o,1e3),setTimeout(l,5e3)];return o(),l(),()=>{window.removeEventListener("scroll",l,!0),window.removeEventListener("resize",o,!0),r.forEach(e=>clearTimeout(e))}});return e.$set=e=>{"owner"in e&&s("owner",c=e.owner),"project"in e&&s("project",l=e.project),"path"in e&&s("path",r=e.path),"dir"in e&&s("dir",a=e.dir),"edit_title"in e&&s("edit_title",h=e.edit_title),"sections"in e&&s("sections",d=e.sections)},{owner:c,project:l,path:r,dir:a,edit_title:h,sections:d,active_section:n,container:i,aside:o,show_contents:u,div0_binding:function(e){y[e?"unshift":"push"](()=>{s("container",i=e)})},click_handler:()=>s("show_contents",u=!1),click_handler_1:()=>s("show_contents",u=!u),aside_1_binding:function(e){y[e?"unshift":"push"](()=>{s("aside",o=e)})}}}class R extends e{constructor(e){super(),t(this,e,H,z,s,["owner","project","path","dir","edit_title","sections"])}}export{R as D};
