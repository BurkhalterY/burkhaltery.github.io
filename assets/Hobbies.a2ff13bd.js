import{u as m,f as c,o as l,c as d,a as e,g as t,w as s,t as a,b as i,T as u,h as x,i as p}from"./index.858d3795.js";const f={class:"flex flex-col justify-center gap-5 sm:flex-row"},g=e("div",{class:"text-5xl"},"\u{1F3B5}",-1),h={class:"my-2"},v=e("div",{class:"text-5xl"},"\u{1F38C}",-1),w={class:"my-2"},b=e("div",{class:"text-5xl"},"\u{1F579}",-1),y={class:"my-2"},M={__name:"Hobbies",setup(k){const{t:n}=m({messages:{fr:{music:"Musique",anime:"Animes",gaming:"Jeux vid\xE9o"},en:{music:"Music",anime:"Animes",gaming:"Gaming"}}});return(B,A)=>{const o=c("router-link"),r=c("router-view");return l(),d("div",null,[e("div",f,[t(o,{to:{name:"Music"},class:"px-10 pt-5 text-center bg-white rounded"},{default:s(()=>[g,e("div",h,a(i(n)("music")),1)]),_:1}),t(o,{to:{name:"Anime"},class:"px-10 pt-5 text-center bg-white rounded"},{default:s(()=>[v,e("div",w,a(i(n)("anime")),1)]),_:1}),t(o,{to:{name:"Gaming"},class:"px-10 pt-5 text-center bg-white rounded"},{default:s(()=>[b,e("div",y,a(i(n)("gaming")),1)]),_:1})]),t(r,null,{default:s(({Component:_})=>[t(u,{mode:"out-in"},{default:s(()=>[(l(),x(p(_)))]),_:2},1024)]),_:1})])}}};export{M as default};