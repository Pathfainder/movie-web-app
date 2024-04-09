import{ar as $,p as L,j as e,q as T,r as d,c as D,ax as _}from"./vendor-BLI4_ydL.js";import{e as K,i as q,g as U,f as J,s as Q,b as F,d as Y,c as X,M as Z,E as b,h as v,I as P,a as C,P as I,B as E,j as G,L as W,k as V,u as ee,l as te,m as ne,n as re,o as ae,p as O,q as se,r as B,t as k,v as ie,w as ce,x as oe,y as de,z as le,A as ue,C as me,D as pe,F as fe,G as he,H as xe,J as ge,K as ye,O as je,Q as M,R as Se}from"./index-CQtvjRok.js";import{a as N,I as we}from"./Icons-CZFEeYpu.js";import{b as R,a as z,T as Ee,l as be}from"./react-dom-CEJeLXPx.js";import{S as Ne}from"./StatusCircle-X2LSSZm_.js";import"./auth-72H9TcpW.js";import"./caption-parsing-B-atfEeL.js";import"./locales-DDhh_Os3.js";import"./hls-2_Gpnevg.js";import"./language-db-CTkLv2pZ.js";function ve(n,t){return!!V().DISALLOWED_IDS.map(a=>a.split("-")).find(a=>n===a[1]&&t===a[0])}function Pe(n){const{t}=R(),c=$(),a=L(),{error:l,value:x,loading:u}=z(async()=>{var s;const f=await K(),p=(f==null?void 0:f.success)&&q(f.version)&&f.allowed;if(p&&!f.hasPermission)throw new Error("extension-no-permission");const j=U();if(j&&!p)try{await J(j)}catch{throw new Error("failed-api-metadata")}else Q([...F().listSources(),...F().listEmbeds()]);let o=null;try{if(!c.media)throw new Error("no media params");o=Y(c.media)}catch{}if(!o)return null;if(ve(o.id,o.type))throw new Error("dmca");let g=null;try{g=await X(o.type,o.id,c.season)}catch(r){if(r.status===404)return null;throw r}if(!g)return null;let S=c.episode;if(g.meta.type===Z.SERIES){let r=g.meta.seasonData.episodes.find(i=>i.id===c.episode);r||(r=g.meta.seasonData.episodes[0]),S=r.id,(c.season!==g.meta.seasonData.id||c.episode!==r.id)&&a(`/media/${c.media}/${g.meta.seasonData.id}/${r.id}`,{replace:!0})}(s=n.onGetMeta)==null||s.call(n,g,S)},[]);return l&&l.message==="extension-no-permission"?e.jsx(b,{children:e.jsxs(v,{children:[e.jsx(P,{icon:N.WAND,children:t("player.metadata.extensionPermission.badge")}),e.jsx(C,{children:t("player.metadata.extensionPermission.title")}),e.jsx(I,{children:t("player.metadata.extensionPermission.text")}),e.jsx(E,{onClick:()=>{G({page:"PermissionGrant",redirectUrl:window.location.href})},theme:"purple",padding:"md:px-12 p-2.5",className:"mt-6",children:t("player.metadata.extensionPermission.button")})]})}):l&&l.message==="dmca"?e.jsx(b,{children:e.jsxs(v,{children:[e.jsx(P,{icon:N.DRAGON,children:t("player.metadata.dmca.badge")}),e.jsx(C,{children:t("player.metadata.dmca.title")}),e.jsx(I,{children:t("player.metadata.dmca.text")}),e.jsx(E,{href:"/",theme:"purple",padding:"md:px-12 p-2.5",className:"mt-6",children:t("player.metadata.failed.homeButton")})]})}):l&&l.message==="failed-api-metadata"?e.jsx(b,{children:e.jsxs(v,{children:[e.jsx(P,{icon:N.WAND,children:t("player.metadata.failed.badge")}),e.jsx(C,{children:t("player.metadata.api.text")}),e.jsx(I,{children:t("player.metadata.api.title")}),e.jsx(E,{href:"/",theme:"purple",padding:"md:px-12 p-2.5",className:"mt-6",children:t("player.metadata.failed.homeButton")})]})}):l?e.jsx(b,{children:e.jsxs(v,{children:[e.jsx(P,{icon:N.WAND,children:t("player.metadata.failed.badge")}),e.jsx(C,{children:t("player.metadata.failed.title")}),e.jsx(I,{children:t("player.metadata.failed.text")}),e.jsx(E,{href:"/",theme:"purple",padding:"md:px-12 p-2.5",className:"mt-6",children:t("player.metadata.failed.homeButton")})]})}):!x&&!u?e.jsx(b,{children:e.jsxs(v,{children:[e.jsx(P,{icon:N.WAND,children:t("player.metadata.notFound.badge")}),e.jsx(C,{children:t("player.metadata.notFound.title")}),e.jsx(I,{children:t("player.metadata.notFound.text")}),e.jsx(E,{href:"/",theme:"purple",padding:"md:px-12 p-2.5",className:"mt-6",children:t("player.metadata.notFound.homeButton")})]})}):e.jsx(b,{children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx(W,{})})})}function Ce(n){const{t}=R(),c=ee("error"),a=T(),[l,x]=d.useState("unknown"),u=d.useMemo(()=>{const f=n.data;let p="";const j=te();return p+=`URL - ${a.pathname}
`,p+=`API - ${j.length>0}

`,Object.values(f.sources).forEach(o=>{var g;p+=`${o.id}: ${o.status}
`,o.reason&&(p+=`${o.reason}
`),(g=o.error)!=null&&g.message?p+=`${o.error.name??"unknown"}: ${o.error.message}
`:o.error&&(p+=`${o.error.toString()}
`)}),p},[n,a]);return d.useEffect(()=>{ne().then(f=>{x(f)})},[t]),l==="disallowed"?e.jsx(b,{children:e.jsxs(v,{children:[e.jsx(P,{icon:N.LOCK,children:t("player.scraping.extensionFailure.badge")}),e.jsx(C,{children:t("player.scraping.extensionFailure.title")}),e.jsx(I,{children:e.jsx(Ee,{i18nKey:"player.scraping.extensionFailure.text",components:{bold:e.jsx("span",{className:"font-bold",style:{color:"#cfcfcf"}})}})}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(E,{href:"/",theme:"secondary",padding:"md:px-12 p-2.5",className:"mt-6",children:t("player.scraping.extensionFailure.homeButton")}),e.jsx(E,{onClick:()=>{G({page:"PermissionGrant",redirectUrl:window.location.href})},theme:"purple",padding:"md:px-12 p-2.5",className:"mt-6",children:t("player.scraping.extensionFailure.enableExtension")})]})]})}):e.jsxs(b,{children:[e.jsxs(v,{children:[e.jsx(P,{icon:N.WAND,children:t("player.scraping.notFound.badge")}),e.jsx(C,{children:t("player.scraping.notFound.title")}),e.jsx(I,{children:t("player.scraping.notFound.text")}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(E,{href:"/",theme:"secondary",padding:"md:px-12 p-2.5",className:"mt-6",children:t("player.scraping.notFound.homeButton")}),e.jsx(E,{onClick:()=>c.show(),theme:"purple",padding:"md:px-12 p-2.5",className:"mt-6",children:t("player.scraping.notFound.detailsButton")})]})]}),u?e.jsx(re,{id:c.id,onClose:()=>c.hide(),error:u}):null]})}const Ie={notfound:"player.scraping.items.notFound",failure:"player.scraping.items.failure",pending:"player.scraping.items.pending"},Ae={failure:"error",notfound:"noresult",pending:"loading",success:"success",waiting:"waiting"};function H(n){const{t}=R(),c=Ie[n.status],a=Ae[n.status];return e.jsxs("div",{className:"grid gap-4 grid-cols-[auto,1fr]","data-source-id":n.id,children:[e.jsx(Ne,{type:a,percentage:n.percentage??0}),e.jsxs("div",{children:[e.jsx("p",{className:a==="loading"?"text-white":"text-type-secondary",children:n.name}),e.jsx(ae,{animation:"fade",show:!!c,children:e.jsx("p",{className:"text-[15px] mt-1",children:c?t(c):""})}),n.children]})]})}function Me(n){return e.jsx("div",{"data-source-id":n.id,className:"w-80 mb-6",children:e.jsx("div",{className:D({"!bg-opacity-100 py-6":n.hasChildren,"w-80 rounded-md px-6 bg-video-scraping-card bg-opacity-0":!0}),children:e.jsx(H,{...n})})})}function Re(){const[n,t]=d.useState({}),[c,a]=d.useState([]),[l,x]=d.useState(),u=d.useRef(null),f=d.useCallback(s=>{t(s.sourceIds.map(r=>{const i=k().find(h=>h.id===r);if(!i)throw new Error("invalid source id");return{name:i.name,id:i.id,status:"waiting",percentage:0}}).reduce((r,i)=>(r[i.id]=i,r),{})),a(s.sourceIds.map(r=>({id:r,children:[]})))},[]),p=d.useCallback(s=>{const r=u.current;t(i=>(i[s]&&(i[s].status="pending"),r&&i[r]&&i[r].status==="pending"&&(i[r].status="success"),{...i})),x(s),u.current=s},[]),j=d.useCallback(s=>{t(r=>(r[s.id]&&(r[s.id].status=s.status,r[s.id].reason=s.reason,r[s.id].error=s.error,r[s.id].percentage=s.percentage),{...r}))},[]),o=d.useCallback(s=>{t(r=>(s.embeds.forEach(i=>{const m=k().find(y=>y.id===i.embedScraperId);if(!m)throw new Error("invalid source id");const h={embedId:i.embedScraperId,name:m.name,id:i.id,status:"waiting",percentage:0};r[i.id]=h}),{...r})),a(r=>{const i=r.find(m=>m.id===s.sourceId);if(!i)throw new Error("invalid source id");return i.children=s.embeds.map(m=>m.id),[...r]})},[]),g=d.useCallback(()=>{u.current=null},[]),S=d.useCallback(s=>(s&&u.current&&t(r=>u.current?(r[u.current]&&(r[u.current].status="success"),{...r}):r),s),[]);return{initEvent:f,startEvent:p,updateEvent:j,discoverEmbedsEvent:o,startScrape:g,getResult:S,sources:n,sourceOrder:c,currentSource:l}}function Oe(){const{sources:n,sourceOrder:t,currentSource:c,updateEvent:a,discoverEmbedsEvent:l,initEvent:x,getResult:u,startEvent:f,startScrape:p}=Re();return{startScraping:d.useCallback(async o=>{const g=U();if(g&&!O()){p();const r=ie(g),i=await se(r.scrapeAll(o),["completed","noOutput"]);i.on("init",x),i.on("start",f),i.on("update",a),i.on("discoverEmbeds",l);const m=await i.promise();return m&&O()&&await B(m.stream),u(m===""?null:m)}p();const s=await F().runAll({media:o,events:{init:x,start:f,update:a,discoverEmbeds:l}});return s&&O()&&await B(s.stream),u(s)},[x,f,a,l,u,p]),sourceOrder:t,sources:n,currentSource:c}}function De(n,t,c,a){const[l,x]=d.useState(!1),u=d.useCallback(()=>{if(!n.current||!t.current)return;const p=[...t.current.querySelectorAll("div[data-source-id]")],j=p.findIndex(A=>A.getAttribute("data-source-id")===a),o=p[j];if(!o)return;const g=n.current.getBoundingClientRect().width,S=t.current.getBoundingClientRect().width,s=n.current.getBoundingClientRect().height,r=t.current.getBoundingClientRect().top,i=o.getBoundingClientRect().top,m=o.getBoundingClientRect().height,h=i-r,y=g/2-S/2,w=s/2-h-m/2;t.current.style.transform=`translateY(${w}px) translateX(${y}px)`,setTimeout(()=>{x(!0)},150)},[a,n,t,x]),f=d.useRef(u);return d.useEffect(()=>{u(),f.current=u},[u,c]),d.useEffect(()=>{function p(){f.current()}return window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}},[]),l}function Fe(n){return e.jsxs("div",{className:"flex flex-col justify-center items-center h-screen text-center font-medium",children:[e.jsx(ce,{}),e.jsx(we,{className:"text-type-danger text-2xl",icon:N.WARNING}),e.jsx("div",{className:"max-w-[19rem] mt-3 mb-12 text-type-secondary",children:n.children})]})}function Be(n){const{report:t}=oe(),{startScraping:c,sourceOrder:a,sources:l,currentSource:x}=Oe(),u=be(),{t:f}=R(),p=d.useRef(null),j=d.useRef(null),[o,g]=d.useState(!1),S=De(p,j,a,x),s=d.useRef({sourceOrder:a,sources:l});d.useEffect(()=>{s.current={sourceOrder:a,sources:l}},[a,l]);const r=d.useRef(!1);d.useEffect(()=>{r.current||(r.current=!0,(async()=>{var h,y;const m=await c(n.media);u()&&((h=n.onResult)==null||h.call(n,s.current.sources,s.current.sourceOrder),t(de(n.media,s.current.sourceOrder,s.current.sources)),(y=n.onGetStream)==null||y.call(n,m))})().catch(()=>g(!0)))},[c,n,t,u]);let i=a.findIndex(m=>m.id===x||m.children.includes(x??""));return i===-1&&(i=a.length-1),o?e.jsx(Fe,{children:f("player.turnstile.error")}):e.jsxs("div",{className:"h-full w-full relative dir-neutral:origin-top-left flex",ref:p,children:[!a||a.length===0?e.jsxs("div",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-center z-0",children:[e.jsx(W,{className:"mb-8"}),e.jsx("p",{children:f("player.turnstile.verifyingHumanity")})]}):null,e.jsx("div",{className:D({"absolute transition-[transform,opacity] opacity-0 dir-neutral:left-0":!0,"!opacity-100":S}),ref:j,children:a.map(m=>{const h=l[m.id],y=Math.abs(a.findIndex(w=>w.id===m.id)-i);return e.jsx("div",{className:"transition-opacity duration-100",style:{opacity:Math.max(0,1-y*.3)},children:e.jsx(Me,{id:m.id,name:h.name,status:h.status,hasChildren:m.children.length>0,percentage:h.percentage,children:e.jsx("div",{className:D({"space-y-6 mt-8":m.children.length>0}),children:m.children.map(w=>{const A=l[w];return e.jsx(H,{id:w,name:A.name,status:A.status,percentage:A.percentage},w)})})})},m.id)})})]})}async function ke(){return!(!V().HAS_ONBOARDING||await le()||ue.getState().proxySet||me.getState().completed)}function $e(n){const t=n??"";if(!!!t.match(/^\d+(:\d+)*$/))return null;const a=t.split(":").map(Number).reverse(),l=a[2]??0,x=Math.min(a[1]??0,59),u=Math.min(a[0]??0,x>0?59:1/0);return l*60*60+x*60+u}function Le(){const n=L(),t=$(),[c,a]=d.useState(null),[l]=pe("t"),{status:x,playMedia:u,reset:f,setScrapeNotFound:p,shouldStartFromBeginning:j,setShouldStartFromBeginning:o}=fe(),{setPlayerMeta:g,scrapeMedia:S}=he(),s=xe(),r=JSON.stringify({media:t.media,season:t.season,episode:t.episode});d.useEffect(()=>{f()},[r,f]);const i=d.useCallback(h=>{var y,w;(h==null?void 0:h.type)==="show"?n(`/media/${t.media}/${(y=h.season)==null?void 0:y.tmdbId}/${(w=h.episode)==null?void 0:w.tmdbId}`):n(`/media/${t.media}`)},[n,t]),m=d.useCallback(h=>{if(!h)return;let y;l&&(y=$e(l)??void 0),u(ge(h),ye(h.stream.captions),h.sourceId,j?0:y),o(!1)},[u,l,j,o]);return e.jsxs(je,{backUrl:s,onMetaChange:i,children:[x===M.IDLE?e.jsx(Pe,{onGetMeta:g}):null,x===M.SCRAPING&&S?e.jsx(Be,{media:S,onResult:(h,y)=>{a({sourceOrder:y,sources:h}),p()},onGetStream:m}):null,x===M.SCRAPE_NOT_FOUND&&c?e.jsx(Ce,{data:c}):null,x===M.PLAYBACK_ERROR?e.jsx(Se,{}):null]})}function Je(){const n=T(),{loading:t,error:c,value:a}=z(()=>ke());if(c)throw new Error("Failed to detect onboarding");return t?null:a?e.jsx(_,{replace:!0,to:{pathname:"/onboarding",search:`redirect=${encodeURIComponent(n.pathname)}`}}):e.jsx(Le,{})}export{Je as PlayerView,Le as RealPlayerView,Je as default};
//# sourceMappingURL=PlayerView-1pKHu5QS.js.map