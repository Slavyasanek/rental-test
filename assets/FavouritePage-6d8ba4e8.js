import{r as e,s as o,e as h,g as E,j as t,A as S}from"./index-8ac5d1c4.js";import{s as k,S as L,L as y,C as w,a as T,M as b,g as F}from"./CatalogPage.styled-aef18a94.js";const N=s=>e.createElement("svg",{xmlSpace:"preserve",viewBox:"0 0 32 32",...s},e.createElement("g",{fill:"none",stroke:"#263238",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10},e.createElement("path",{d:"M12.5 27.5v2a1 1 0 0 1-1 1h-2M29.5 27.5v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2M30.5 27.5h-19M11.496 20.926c1.715-.323 4.285-.426 8.004-.426 8.5 0 11 .583 11 3v1.188"}),e.createElement("path",{d:"M26.5 25.5v-1c0-.55.45-1 1-1h3v2h-4zM11 23.5h.5c.55 0 1 .45 1 1v1h-3M14.5 25.5h0a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2h0M28.569 21.206 26.82 15.95c-.181-.53-.761-1.02-1.311-1.09-1.189-.15-3.37-.36-6.01-.36s-4.82.21-6.01.36c-.55.07-1.13.56-1.311 1.09l-.847 2.55"}),e.createElement("path",{d:"M9.5 30.5v-16h0a1.999 1.999 0 0 0 2-2V11c0-1.375-1.125-2.5-2.5-2.5H4A2.5 2.5 0 0 0 1.5 11v1.5a2 2 0 0 0 2 2h0v5l-2 11"}),e.createElement("circle",{cx:6.5,cy:4,r:2.5}),e.createElement("path",{d:"M9.5 13v-.319a.999.999 0 0 0-1.164-.986l-3.672.611a1 1 0 0 1-1.164-.987M7.5 30.5 6.5 19l-3 11.5M5.5 14.5h4"}))),$=o.div`
    display: inline-flex;
    align-items: center;
    margin-bottom: 18px;
    column-gap: 8px;
    @media screen and (${h.desktop}) {
        margin-bottom: 30px;
    }
`,z=o.h1`
    font-size: 20px;
    line-height: 1.5;
    font-weight: 500;
    @media screen and (${h.desktop}) {
        font-size: 28px;
    }
`,A=o(N)`
    width: 24px;
    height: 24px;
    fill: ${s=>s.theme.mainText};
    @media screen and (${h.desktop}){
       width: 30px;
       height: 30px; 
    }
`,B=o.p`
    line-height: 1.42;
    font-size: 16px;
    color: ${s=>s.theme.oddText};
`,P=()=>{const[s,p]=e.useState(!1),[a,f]=e.useState([]),[g,u]=e.useState(!1),i=E(k),[v,m]=e.useState(null),[c,x]=e.useState(1);e.useEffect(()=>{async function r(){u(!0);try{const n=(await F()).filter(d=>i.includes(d.id));f(n)}catch{return}finally{u(!1)}}r()},[i]);const M=r=>{if(r.target.nodeName!=="BUTTON")return;const l=r.target.closest("li").id;try{const n=a.find(d=>Number(d.id)===Number(l));m(n),p(!0)}catch{return}},j=()=>{p(!1),m(null)},C=()=>{a.length>c*8?x(r=>r+1):(x(1),window.scrollTo({top:0,behavior:"smooth"}))};return t.jsxs(t.Fragment,{children:[t.jsxs($,{children:[t.jsx(z,{children:"Car Favourites"}),t.jsx(A,{})]}),g?t.jsx(L,{count:i.length}):a.length>0?t.jsxs(y,{children:[t.jsx(w,{cars:a.slice(0,8*c),onClick:M}),a.length>8&&t.jsx(T,{onClick:C,children:a.length>c*8?"Load more":"Hide"})]}):t.jsx(B,{children:"Your favourites list is currently empty."}),t.jsx(S,{children:s&&t.jsx(b,{closeMethod:j,car:v})})]})};export{P as default};
