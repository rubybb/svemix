function _(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function M(t){return t()}function z(){return Object.create(null)}function m(t){t.forEach(M)}function I(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function st(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function G(t){return Object.keys(t).length===0}function J(t,...n){if(t==null)return _;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(J(n,e))}function at(t,n,e,i){if(t){const c=B(t,n,e,i);return t[0](c)}}function B(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function dt(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],u=Math.max(n.dirty.length,c.length);for(let o=0;o<u;o+=1)s[o]=n.dirty[o]|c[o];return s}return n.dirty|c}return n.dirty}function _t(t,n,e,i,c,s){if(c){const u=B(n,e,i,s);t.p(u,c)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let $=!1;function K(){$=!0}function Q(){$=!1}function W(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const l=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=l?c+1:W(1,c,b=>n[e[b]].claim_order,l))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const s=[],u=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);o>=r;o--)u.push(n[o]);o--}for(;o>=0;o--)u.push(n[o]);s.reverse(),u.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<u.length;r++){for(;l<s.length&&u[r].claim_order>=s[l].claim_order;)l++;const a=l<s.length?s[l]:null;t.insertBefore(u[r],a)}}function U(t,n){if($){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function mt(t,n,e){$&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode.removeChild(t)}function pt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function yt(){return A(" ")}function gt(){return A("")}function bt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function xt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,n,e,i,c=!1){tt(t);const s=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const o=t[u];if(n(o)){const r=e(o);return r===void 0?t.splice(u,1):t[u]=r,c||(t.claim_info.last_index=u),o}}for(let u=t.claim_info.last_index-1;u>=0;u--){const o=t[u];if(n(o)){const r=e(o);return r===void 0?t.splice(u,1):t[u]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function O(t,n,e,i){return L(t,c=>c.nodeName===n,c=>{const s=[];for(let u=0;u<c.attributes.length;u++){const o=c.attributes[u];e[o.name]||s.push(o.name)}s.forEach(u=>c.removeAttribute(u))},()=>i(n))}function $t(t,n,e){return O(t,n,e,X)}function wt(t,n,e){return O(t,n,e,Y)}function nt(t,n){return L(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function Et(t){return nt(t," ")}function St(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function kt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let p;function y(t){p=t}function w(){if(!p)throw new Error("Function called outside component initialization");return p}function At(t){w().$$.on_mount.push(t)}function Nt(t){w().$$.after_update.push(t)}function jt(t,n){w().$$.context.set(t,n)}function qt(t){return w().$$.context.get(t)}const g=[],T=[],E=[],D=[],et=Promise.resolve();let N=!1;function it(){N||(N=!0,et.then(F))}function j(t){E.push(t)}const q=new Set;let S=0;function F(){const t=p;do{for(;S<g.length;){const n=g[S];S++,y(n),rt(n.$$)}for(y(null),g.length=0,S=0;T.length;)T.pop()();for(let n=0;n<E.length;n+=1){const e=E[n];q.has(e)||(q.add(e),e())}E.length=0}while(g.length);for(;D.length;)D.pop()();N=!1,q.clear(),y(t)}function rt(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const k=new Set;let d;function vt(){d={r:0,c:[],p:d}}function Ct(){d.r||m(d.c),d=d.p}function ct(t,n){t&&t.i&&(k.delete(t),t.i(n))}function Mt(t,n,e,i){if(t&&t.o){if(k.has(t))return;k.add(t),d.c.push(()=>{k.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function zt(t,n){const e={},i={},c={$$scope:1};let s=t.length;for(;s--;){const u=t[s],o=n[s];if(o){for(const r in u)r in o||(i[r]=1);for(const r in o)c[r]||(e[r]=o[r],c[r]=1);t[s]=o}else for(const r in u)c[r]=1}for(const u in i)u in e||(e[u]=void 0);return e}function Bt(t){return typeof t=="object"&&t!==null?t:{}}function Lt(t){t&&t.c()}function Ot(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:c,on_mount:s,on_destroy:u,after_update:o}=t.$$;c&&c.m(n,e),i||j(()=>{const r=s.map(M).filter(I);u?u.push(...r):m(r),t.$$.on_mount=[]}),o.forEach(j)}function ot(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(g.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Tt(t,n,e,i,c,s,u,o=[-1]){const r=p;y(t);const l=t.$$={fragment:null,ctx:null,props:s,update:_,not_equal:c,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:z(),dirty:o,skip_bound:!1,root:n.target||r.$$.root};u&&u(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,b,...v)=>{const C=v.length?v[0]:b;return l.ctx&&c(l.ctx[f],l.ctx[f]=C)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](C),a&&lt(t,f)),b}):[],l.update(),a=!0,m(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){K();const f=Z(n.target);l.fragment&&l.fragment.l(f),f.forEach(V)}else l.fragment&&l.fragment.c();n.intro&&ct(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),Q(),F()}y(r)}class Dt{$destroy(){ot(this,1),this.$destroy=_}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const h=[];function Ft(t,n=_){let e;const i=new Set;function c(o){if(P(t,o)&&(t=o,e)){const r=!h.length;for(const l of i)l[1](),h.push(l,t);if(r){for(let l=0;l<h.length;l+=2)h[l][0](h[l+1]);h.length=0}}}function s(o){c(o(t))}function u(o,r=_){const l=[o,r];return i.add(l),i.size===1&&(e=n(c)||_),o(t),()=>{i.delete(l),i.size===0&&(e(),e=null)}}return{set:c,update:s,subscribe:u}}export{At as A,H as B,Ft as C,at as D,_t as E,ht as F,dt as G,U as H,_ as I,pt as J,kt as K,qt as L,Y as M,wt as N,st as O,bt as P,ft as Q,Dt as S,Z as a,xt as b,$t as c,V as d,X as e,mt as f,nt as g,St as h,Tt as i,Lt as j,yt as k,gt as l,Ot as m,Et as n,ut as o,zt as p,Bt as q,vt as r,P as s,A as t,Mt as u,ot as v,Ct as w,ct as x,jt as y,Nt as z};
