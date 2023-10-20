import{s as n,m as T,d as o,A as R,P as i,r as l,j as e,a as M}from"./index-1c1ba289.js";import{s as A,C as b,n as m,S as q,a as N,g as D}from"./SkeletonList-09e336fe.js";const F=n(T.div)`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: ${t=>t.theme.greyText};
`,U=n(T.div)`
    background-color: ${t=>t.theme.mainBcg};
    border-radius: 24px;
    padding: 14px;
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    @media screen and (${o.maxTablet}){
        margin-top: 20px;
    }
    @media screen and (${o.tablet}){
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        max-width: 400px;
    }
    @media screen and (${o.desktop}){
        padding: 40px;
        max-width: 540px;
    }
`,G=n.button`
    background-color: transparent;
    border: none;
    padding: 0;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    &:hover, &:focus > svg {
        fill: ${t=>t.theme.decorativePurple};
    }
    @media screen and (${o.desktop}) {
        top: 16px;
        right: 16px;
    }
`,H=n(R)`
    fill: ${t=>t.theme.mainText};
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 20px;
    height: 20px;
    @media screen and (${o.desktop}){
        width: 24px;
        height: 24px;
    }
`,$=n.div`
    margin-bottom: 24px;
`,V=n.div`
    border-radius: 14px;
    width: 100%;
    height: 180px;
    overflow: hidden;
    margin-bottom: 8px;
    @media screen and (${o.desktop}){
        height: 248px;
        margin-bottom: 14px;
    }
`,W=n.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,Y=n.p`
    line-height: 1.42;
    font-size: 12px;
    @media screen and (${o.tablet}){
        font-size: 14px;
    }
`,S=n.p`
    line-height: 1.42;
    font-weight: 500;
    margin-bottom: 8px;
    font-size: 12px;
    @media screen and (${o.tablet}){
        font-size: 14px;
    }
`,J=n.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    margin-bottom: 8px;
    & > span {
        color: ${t=>t.theme.decorativePurple};
    }
`,K=n.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
`,w=n.li`
    background-color: ${t=>t.theme.oddBcg};
    border-radius: 35px;
    padding: 7px 14px;
`,v=n.p`
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.24px;
    color: ${t=>t.theme.lightGrey};
    & > span {
        font-weight: 600;
        color: ${t=>t.theme.decorativePurple};
    }
`,Q=n.a`
    border-radius: 12px;
    background-color: ${t=>t.theme.decorativePurple};
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    padding: 12px 50px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.42;
    color: ${t=>t.theme.mainBcg};
    display: block;
    cursor: pointer;
    width: max-content;
    &:hover, &:focus {
        background-color: ${t=>t.theme.decorativePurpleHover};
    }
`,X={initial:{opacity:0},isOn:{opacity:1,transition:{type:"spring",stiffness:100,damping:18}},exit:{opacity:0,transition:{type:"spring",stiffness:100,damping:18}}},B=({car:t,closeMethod:r})=>{const{id:p,year:h,make:j,model:u,type:y,img:x,description:f,fuelConsumption:C,engineSize:c,accessories:s,functionalities:a,rentalPrice:g,address:L,rentalConditions:E,mileage:k}=t,z=L.split(", "),P=E.split(`
`),I=d=>{d.target===d.currentTarget&&r()};return l.useEffect(()=>{document.body.classList.add("close");const d=O=>{O.code==="Escape"&&r()};return window.addEventListener("keydown",d),()=>{document.body.classList.remove("close")}},[r]),e.jsx(F,{onClick:I,initial:"initial",animate:"isOn",exit:"exit",variants:X,children:e.jsxs(U,{children:[e.jsx(G,{onClick:r,children:e.jsx(H,{})}),e.jsx(V,{children:e.jsx(W,{src:x||A})}),e.jsxs(J,{children:[j," ",e.jsx("span",{children:u}),", ",h]}),e.jsx(b,{items:[z[1],z[2],`Id: ${p}`,`Year: ${h}`,`Type: ${y}`]},m()),e.jsx(b,{items:[`Fuel Consumption: ${C}`,`Engine Size: ${c}`]},m()),f&&e.jsx($,{children:e.jsx(Y,{children:f})}),(s||a)&&e.jsxs($,{children:[e.jsx(S,{children:"Accessories and functionalities:"}),a&&e.jsx(b,{items:a},m()),s&&e.jsx(b,{items:s},m())]}),e.jsx(S,{children:"Rental Conditions:"}),(P.length>0||k||g)&&e.jsx($,{children:e.jsxs(K,{children:[P.map(d=>e.jsx(w,{children:e.jsx(v,{children:d})},m())),k&&e.jsx(w,{children:e.jsxs(v,{children:["Mileage: ",e.jsx("span",{children:k.toLocaleString("en-US")})]})}),g&&e.jsx(w,{children:e.jsxs(v,{children:["Price: ",e.jsx("span",{children:g})]})})]})}),e.jsx(Q,{href:"tel:+380730000000",children:"Rental car"})]})})};B.propTypes={car:i.shape({id:i.number,year:i.number.isRequired,make:i.string.isRequired,model:i.string.isRequired,type:i.string,img:i.string,description:i.string,fuelConsumption:i.string,engineSize:i.string,accessories:i.arrayOf(i.string),functionalities:i.arrayOf(i.string),rentalPrice:i.string,address:i.string,rentalConditions:i.string,mileage:i.number}),closeMethod:i.func.isRequired};const ee=()=>{const[t,r]=l.useState(!1),[p,h]=l.useState([]),[j,u]=l.useState(!1),[y,x]=l.useState(null);l.useEffect(()=>{async function c(){u(!0);try{const s=await D();h(s)}catch{return}finally{u(!1)}}c()},[]);const f=c=>{if(c.target.nodeName!=="BUTTON")return;const s=c.target.closest("li").id;try{const a=p.find(g=>Number(g.id)===Number(s));x(a),r(!0)}catch(a){console.log(a)}},C=()=>{r(!1),x(null)};return e.jsxs(e.Fragment,{children:[j?e.jsx(q,{count:8}):p&&e.jsx(N,{cars:p,onClick:f}),e.jsx(M,{children:t&&e.jsx(B,{closeMethod:C,car:y})})]})};export{ee as default};
