import{S as t,i as e,s as n,e as s,a as l,b as a,f as o,h as r,d as i,j as c,C as h,l as f,p as u,t as g,v as d,w as m,x as v,r as p,y as $,D as w,E as b,F as y,G as E,H as _,I as j,J as k,K as A,L as B,o as L,m as x,M as I,q as S}from"./client.658078ef.js";function T(t,e,n){const s=t.slice();return s[13]=e[n],s}function D(t,e,n){const s=t.slice();return s[10]=e[n],s}function N(t){let e,n,l;return n=new k({props:{name:"las la-arrow-right"}}),{c(){e=s("div"),d(n.$$.fragment),this.h()},l(t){e=a(t,"DIV",{class:!0});var s=o(e);m(n.$$.fragment,s),s.forEach(i),this.h()},h(){c(e,"class","icon-container svelte-1kbpyyb")},m(t,s){f(t,e,s),v(n,e,null),l=!0},i(t){l||(g(n.$$.fragment,t),l=!0)},o(t){p(n.$$.fragment,t),l=!1},d(t){t&&i(e),$(n)}}}function C(t){let e,n,l;return n=new k({props:{name:"las la-arrow-right"}}),{c(){e=s("div"),d(n.$$.fragment),this.h()},l(t){e=a(t,"DIV",{class:!0});var s=o(e);m(n.$$.fragment,s),s.forEach(i),this.h()},h(){c(e,"class","icon-container svelte-1kbpyyb")},m(t,s){f(t,e,s),v(n,e,null),l=!0},i(t){l||(g(n.$$.fragment,t),l=!0)},o(t){p(n.$$.fragment,t),l=!1},d(t){t&&i(e),$(n)}}}function V(t){let e,n,d,m,v,$,y=t[13].title+"",E=t[13].slug===t[4]&&C();return{c(){e=s("a"),d=l(),E&&E.c(),this.h()},l(t){e=a(t,"A",{class:!0,href:!0,"data-level":!0});var n=o(e);d=r(n),E&&E.l(n),n.forEach(i),this.h()},h(){n=new A(d),c(e,"class","subsection svelte-1kbpyyb"),c(e,"href",m=t[1]+"/"+t[2]+"#"+t[13].slug),c(e,"data-level",v=t[13].level),h(e,"active",t[13].slug===t[4])},m(t,s){f(t,e,s),n.m(y,e),u(e,d),E&&E.m(e,null),$=!0},p(t,s){(!$||8&s)&&y!==(y=t[13].title+"")&&n.p(y),t[13].slug===t[4]?E?24&s&&g(E,1):(E=C(),E.c(),g(E,1),E.m(e,null)):E&&(w(),p(E,1,1,()=>{E=null}),b()),(!$||14&s&&m!==(m=t[1]+"/"+t[2]+"#"+t[13].slug))&&c(e,"href",m),(!$||8&s&&v!==(v=t[13].level))&&c(e,"data-level",v),24&s&&h(e,"active",t[13].slug===t[4])},i(t){$||(g(E),$=!0)},o(t){p(E),$=!1},d(t){t&&i(e),E&&E.d()}}}function q(t){let e,n,d,m,v,$,E,_,j=t[10].metadata.title+"",k=t[10].slug===t[4]&&N(),B=t[10].subsections,L=[];for(let e=0;e<B.length;e+=1)L[e]=V(T(t,B,e));const x=t=>p(L[t],1,1,()=>{L[t]=null});return{c(){e=s("li"),n=s("a"),m=l(),k&&k.c(),$=l();for(let t=0;t<L.length;t+=1)L[t].c();E=l(),this.h()},l(t){e=a(t,"LI",{class:!0});var s=o(e);n=a(s,"A",{class:!0,href:!0});var l=o(n);m=r(l),k&&k.l(l),l.forEach(i),$=r(s);for(let t=0;t<L.length;t+=1)L[t].l(s);E=r(s),s.forEach(i),this.h()},h(){d=new A(m),c(n,"class","section svelte-1kbpyyb"),c(n,"href",v=t[1]+"/"+t[2]+"#"+t[10].slug),h(n,"active",t[10].slug===t[4]),c(e,"class","svelte-1kbpyyb")},m(t,s){f(t,e,s),u(e,n),d.m(j,n),u(n,m),k&&k.m(n,null),u(e,$);for(let t=0;t<L.length;t+=1)L[t].m(e,null);u(e,E),_=!0},p(t,s){if((!_||8&s)&&j!==(j=t[10].metadata.title+"")&&d.p(j),t[10].slug===t[4]?k?24&s&&g(k,1):(k=N(),k.c(),g(k,1),k.m(n,null)):k&&(w(),p(k,1,1,()=>{k=null}),b()),(!_||14&s&&v!==(v=t[1]+"/"+t[2]+"#"+t[10].slug))&&c(n,"href",v),24&s&&h(n,"active",t[10].slug===t[4]),30&s){let n;for(B=t[10].subsections,n=0;n<B.length;n+=1){const l=T(t,B,n);L[n]?(L[n].p(l,s),g(L[n],1)):(L[n]=V(l),L[n].c(),g(L[n],1),L[n].m(e,E))}for(w(),n=B.length;n<L.length;n+=1)x(n);b()}},i(t){if(!_){g(k);for(let t=0;t<B.length;t+=1)g(L[t]);_=!0}},o(t){p(k),L=L.filter(Boolean);for(let t=0;t<L.length;t+=1)p(L[t]);_=!1},d(t){t&&i(e),k&&k.d(),y(L,t)}}}function z(t){let e,n,l,r,h=t[3],u=[];for(let e=0;e<h.length;e+=1)u[e]=q(D(t,h,e));const d=t=>p(u[t],1,1,()=>{u[t]=null});return{c(){e=s("ul");for(let t=0;t<u.length;t+=1)u[t].c();this.h()},l(t){e=a(t,"UL",{class:!0});var n=o(e);for(let t=0;t<u.length;t+=1)u[t].l(n);n.forEach(i),this.h()},h(){c(e,"class","reference-toc svelte-1kbpyyb")},m(s,a){f(s,e,a);for(let t=0;t<u.length;t+=1)u[t].m(e,null);t[7](e),n=!0,l||(r=[E(e,"mouseenter",t[8]),E(e,"mouseleave",t[9])],l=!0)},p(t,[n]){if(30&n){let s;for(h=t[3],s=0;s<h.length;s+=1){const l=D(t,h,s);u[s]?(u[s].p(l,n),g(u[s],1)):(u[s]=q(l),u[s].c(),g(u[s],1),u[s].m(e,null))}for(w(),s=h.length;s<u.length;s+=1)d(s);b()}},i(t){if(!n){for(let t=0;t<h.length;t+=1)g(u[t]);n=!0}},o(t){u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)p(u[t]);n=!1},d(n){n&&i(e),y(u,n),t[7](null),l=!1,_(r)}}}function H(t,e,n){let s,{lang:l="en"}=e,{dir:a=""}=e,{sections:o=[]}=e,{active_section:r=null}=e,{show_contents:i}=e,{prevent_sidebar_scroll:c=!1}=e;j(()=>{if(c||i&&window.innerWidth<832)return;const t=s.querySelector(".active");if(t){const{top:e,bottom:n}=t.getBoundingClientRect(),l=200,a=window.innerHeight-200;e>a?s.parentNode.scrollBy({top:e-a,left:0,behavior:"smooth"}):n<l&&s.parentNode.scrollBy({top:n-l,left:0,behavior:"smooth"})}});return t.$set=t=>{"lang"in t&&n(1,l=t.lang),"dir"in t&&n(2,a=t.dir),"sections"in t&&n(3,o=t.sections),"active_section"in t&&n(4,r=t.active_section),"show_contents"in t&&n(6,i=t.show_contents),"prevent_sidebar_scroll"in t&&n(0,c=t.prevent_sidebar_scroll)},[c,l,a,o,r,s,i,function(t){B[t?"unshift":"push"](()=>{s=t,n(5,s)})},()=>n(0,c=!0),()=>n(0,c=!1)]}class M extends t{constructor(t){super(),e(this,t,H,z,n,{lang:1,dir:2,sections:3,active_section:4,show_contents:6,prevent_sidebar_scroll:0})}}function R(t,e,n){const s=t.slice();return s[15]=e[n],s}function O(t){let e,n,h,w,b,y,E,_,j,B,L,x,I,S,T,D,N,C,V,q=t[15].metadata.title+"",z=t[15].html+"";return I=new k({props:{name:"las la-external-link-alt",size:"24px"}}),{c(){e=s("section"),n=s("h2"),h=s("span"),b=l(),y=s("a"),_=l(),B=l(),L=s("small"),x=s("a"),d(I.$$.fragment),T=l(),N=l(),this.h()},l(t){e=a(t,"SECTION",{"data-id":!0,class:!0});var s=o(e);n=a(s,"H2",{class:!0});var l=o(n);h=a(l,"SPAN",{class:!0,id:!0}),o(h).forEach(i),b=r(l),y=a(l,"A",{href:!0,class:!0,"aria-hidden":!0}),o(y).forEach(i),_=r(l),B=r(l),L=a(l,"SMALL",{class:!0});var c=o(L);x=a(c,"A",{href:!0,title:!0,class:!0});var f=o(x);m(I.$$.fragment,f),f.forEach(i),c.forEach(i),l.forEach(i),T=r(s),N=r(s),s.forEach(i),this.h()},h(){c(h,"class","offset-anchor"),c(h,"id",w=t[15].slug),c(y,"href",E=t[4]+"#"+t[15].slug),c(y,"class","anchor"),c(y,"aria-hidden",""),j=new A(B),c(x,"href",S="https://github.com/"+t[1]+"/"+t[2]+"/edit/master"+t[3]+"/"+t[4]+"/"+t[15].file),c(x,"title",t[5]),c(x,"class","svelte-184vty6"),c(L,"class","svelte-184vty6"),c(n,"class","svelte-184vty6"),D=new A(N),c(e,"data-id",C=t[15].slug),c(e,"class","svelte-184vty6")},m(t,s){f(t,e,s),u(e,n),u(n,h),u(n,b),u(n,y),u(n,_),j.m(q,n),u(n,B),u(n,L),u(L,x),v(I,x,null),u(e,T),D.m(z,e),u(e,N),V=!0},p(t,n){(!V||64&n&&w!==(w=t[15].slug))&&c(h,"id",w),(!V||80&n&&E!==(E=t[4]+"#"+t[15].slug))&&c(y,"href",E),(!V||64&n)&&q!==(q=t[15].metadata.title+"")&&j.p(q),(!V||94&n&&S!==(S="https://github.com/"+t[1]+"/"+t[2]+"/edit/master"+t[3]+"/"+t[4]+"/"+t[15].file))&&c(x,"href",S),(!V||32&n)&&c(x,"title",t[5]),(!V||64&n)&&z!==(z=t[15].html+"")&&D.p(z),(!V||64&n&&C!==(C=t[15].slug))&&c(e,"data-id",C)},i(t){V||(g(I.$$.fragment,t),V=!0)},o(t){p(I.$$.fragment,t),V=!1},d(t){t&&i(e),$(I)}}}function U(t){let e,n,j,A,B,L,x,I,S,T,D,N=t[6],C=[];for(let e=0;e<N.length;e+=1)C[e]=O(R(t,N,e));const V=t=>p(C[t],1,1,()=>{C[t]=null});return B=new M({props:{lang:t[0],dir:t[4],sections:t[6],active_section:t[7],show_contents:t[10]}}),I=new k({props:{name:t[10]?"las la-window-close":"las la-bars"}}),{c(){e=s("div");for(let t=0;t<C.length;t+=1)C[t].c();n=l(),j=s("aside"),A=s("div"),d(B.$$.fragment),L=l(),x=s("button"),d(I.$$.fragment),this.h()},l(t){e=a(t,"DIV",{class:!0});var s=o(e);for(let t=0;t<C.length;t+=1)C[t].l(s);s.forEach(i),n=r(t),j=a(t,"ASIDE",{class:!0});var l=o(j);A=a(l,"DIV",{class:!0});var c=o(A);m(B.$$.fragment,c),c.forEach(i),L=r(l),x=a(l,"BUTTON",{class:!0});var h=o(x);m(I.$$.fragment,h),h.forEach(i),l.forEach(i),this.h()},h(){c(e,"class","content listify svelte-184vty6"),c(A,"class","sidebar svelte-184vty6"),c(x,"class","svelte-184vty6"),c(j,"class","sidebar-container svelte-184vty6"),h(j,"open",t[10])},m(s,l){f(s,e,l);for(let t=0;t<C.length;t+=1)C[t].m(e,null);t[11](e),f(s,n,l),f(s,j,l),u(j,A),v(B,A,null),u(j,L),u(j,x),v(I,x,null),t[14](j),S=!0,T||(D=[E(A,"click",t[12]),E(x,"click",t[13])],T=!0)},p(t,[n]){if(126&n){let s;for(N=t[6],s=0;s<N.length;s+=1){const l=R(t,N,s);C[s]?(C[s].p(l,n),g(C[s],1)):(C[s]=O(l),C[s].c(),g(C[s],1),C[s].m(e,null))}for(w(),s=N.length;s<C.length;s+=1)V(s);b()}const s={};1&n&&(s.lang=t[0]),16&n&&(s.dir=t[4]),64&n&&(s.sections=t[6]),128&n&&(s.active_section=t[7]),1024&n&&(s.show_contents=t[10]),B.$set(s);const l={};1024&n&&(l.name=t[10]?"las la-window-close":"las la-bars"),I.$set(l),1024&n&&h(j,"open",t[10])},i(t){if(!S){for(let t=0;t<N.length;t+=1)g(C[t]);g(B.$$.fragment,t),g(I.$$.fragment,t),S=!0}},o(t){C=C.filter(Boolean);for(let t=0;t<C.length;t+=1)p(C[t]);p(B.$$.fragment,t),p(I.$$.fragment,t),S=!1},d(s){s&&i(e),y(C,s),t[11](null),s&&i(n),s&&i(j),$(B),$(I),t[14](null),T=!1,_(D)}}}function F(t,e,n){let s,l,a,{lang:o=x.lang}=e,{owner:r="caos"}=e,{project:i="site"}=e,{path:c="/docs"}=e,{dir:h=""}=e,{edit_title:f="edit this section"}=e,{sections:u}=e,g=!1;L(()=>{const t=l.querySelectorAll("[id]:not([data-scrollignore])");let e;const a=()=>{const{top:n}=l.getBoundingClientRect();e=[].map.call(t,t=>t.getBoundingClientRect().top-n)};let o=window.location.hash.slice(1);const r=()=>{const l=-window.scrollY;let a=t.length;for(;a--;)if(e[a]+l<40){const e=t[a],{id:l}=e;return void(l!==o&&(n(7,s=l),o=l))}};window.addEventListener("scroll",r,!0),window.addEventListener("resize",a,!0);const i=[setTimeout(a,1e3),setTimeout(r,5e3)];return a(),r(),()=>{window.removeEventListener("scroll",r,!0),window.removeEventListener("resize",a,!0),i.forEach(t=>clearTimeout(t))}});return t.$set=t=>{"lang"in t&&n(0,o=t.lang),"owner"in t&&n(1,r=t.owner),"project"in t&&n(2,i=t.project),"path"in t&&n(3,c=t.path),"dir"in t&&n(4,h=t.dir),"edit_title"in t&&n(5,f=t.edit_title),"sections"in t&&n(6,u=t.sections)},[o,r,i,c,h,f,u,s,l,a,g,function(t){B[t?"unshift":"push"](()=>{l=t,n(8,l)})},()=>n(10,g=!1),()=>n(10,g=!g),function(t){B[t?"unshift":"push"](()=>{a=t,n(9,a)})}]}class G extends t{constructor(t){super(),e(this,t,F,U,n,{lang:0,owner:1,project:2,path:3,dir:4,edit_title:5,sections:6})}}function J(t,e,n){const s=t.slice();return s[3]=e[n].name,s[4]=e[n].content,s[6]=n,s}function K(t){let e,n,l;return{c(){e=s("meta"),this.h()},l(t){e=a(t,"META",{name:!0,content:!0}),this.h()},h(){c(e,"name",n=t[3]),c(e,"content",l=t[4])},m(t,n){f(t,e,n)},p(t,s){4&s&&n!==(n=t[3])&&c(e,"name",n),4&s&&l!==(l=t[4])&&c(e,"content",l)},d(t){t&&i(e)}}}function P(t){let e,n,s,a,o;document.title=e=x.name+" • "+t[0];let c=t[2],h=[];for(let e=0;e<c.length;e+=1)h[e]=K(J(t,c,e));return a=new G({props:{sections:t[1],project:"site",dir:t[0]}}),{c(){for(let t=0;t<h.length;t+=1)h[t].c();n=I(),s=l(),d(a.$$.fragment)},l(t){const e=S('[data-svelte="svelte-4bltt5"]',document.head);for(let t=0;t<h.length;t+=1)h[t].l(e);n=I(),e.forEach(i),s=r(t),m(a.$$.fragment,t)},m(t,e){for(let t=0;t<h.length;t+=1)h[t].m(document.head,null);u(document.head,n),f(t,s,e),v(a,t,e),o=!0},p(t,[s]){if((!o||1&s)&&e!==(e=x.name+" • "+t[0])&&(document.title=e),4&s){let e;for(c=t[2],e=0;e<c.length;e+=1){const l=J(t,c,e);h[e]?h[e].p(l,s):(h[e]=K(l),h[e].c(),h[e].m(n.parentNode,n))}for(;e<h.length;e+=1)h[e].d(1);h.length=c.length}const l={};2&s&&(l.sections=t[1]),1&s&&(l.dir=t[0]),a.$set(l)},i(t){o||(g(a.$$.fragment,t),o=!0)},o(t){p(a.$$.fragment,t),o=!1},d(t){y(h,t),i(n),t&&i(s),$(a,t)}}}async function W({params:t}){const{lang:e,slug:n}=t;return{sections:await this.fetch(`${e}/${n}.json`).then(t=>t.json()),slug:n,tags:[]}}function Y(t,e,n){let{slug:s}=e,{sections:l}=e,{tags:a}=e;return t.$set=t=>{"slug"in t&&n(0,s=t.slug),"sections"in t&&n(1,l=t.sections),"tags"in t&&n(2,a=t.tags)},[s,l,a]}export default class extends t{constructor(t){super(),e(this,t,Y,P,n,{slug:0,sections:1,tags:2})}}export{W as preload};
