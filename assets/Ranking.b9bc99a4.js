import{o as s,c as o,F as d,r as m,n as l,a,j as i,t as c,e as h}from"./index.7aa94114.js";const u={class:"flex flex-col gap-4 pt-6 md:grid md:grid-cols-3 md:flex-row"},p={class:"relative mx-auto"},g=["src","alt"],_={class:"p-1 text-lg text-center"},k={__name:"Ranking",props:{items:Array,square:Boolean},setup(n){const t=[{position:1,class:"md:mt-0 md:-order-1",height:"md:h-40",color:"c9b037"},{position:2,class:"md:mt-16 md:-order-2",height:"md:h-24",color:"d7d7d7"},{position:3,class:"md:mt-32 md:-order-1",height:"md:h-8",color:"ad8a56"}];return(x,f)=>(s(),o("div",u,[(s(!0),o(d,null,m(n.items,(r,e)=>(s(),o("div",{class:l(["mx-auto",e<3?t[e].class:""])},[a("span",p,[e<3?(s(),o("span",{key:0,class:"absolute flex items-center justify-center w-12 h-12 text-2xl font-bold rounded-full -top-2 left-26 text-black/40",style:i(`background-color: #${t[e].color};`)},c(t[e].position),5)):h("",!0)]),a("img",{src:`/images/${r.image}`,alt:r.name,class:"object-cover w-64 rounded-t"},null,8,g),a("div",{class:l(["w-64 bg-white rounded-b",e<3?t[e].height:""])},[a("h3",_,c(r.name),1)],2)],2))),256))]))}};export{k as _};
