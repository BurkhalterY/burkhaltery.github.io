import{o as s,c as o,F as d,r as m,n as l,a,j as i,t as n,e as h}from"./index.765c9b47.js";const u={class:"flex md:grid md:grid-cols-3 gap-4 pt-6 flex-col md:flex-row"},g={class:"relative mx-auto"},p=["src","alt"],x={class:"text-lg text-center p-1"},k={__name:"Ranking",props:{items:Array,square:Boolean},setup(c){const t=[{position:1,class:"md:mt-0 md:-order-1",height:"md:h-40",color:"c9b037"},{position:2,class:"md:mt-16 md:-order-2",height:"md:h-24",color:"d7d7d7"},{position:3,class:"md:mt-32 md:-order-1",height:"md:h-8",color:"ad8a56"}];return(_,f)=>(s(),o("div",u,[(s(!0),o(d,null,m(c.items,(r,e)=>(s(),o("div",{class:l(["mx-auto",e<3?t[e].class:""])},[a("span",g,[e<3?(s(),o("span",{key:0,class:"absolute -top-2 left-26 rounded-full w-12 h-12 flex justify-center items-center font-bold text-2xl text-black/40",style:i(`background-color: #${t[e].color};`)},n(t[e].position),5)):h("",!0)]),a("img",{src:`/images/${r.image}`,alt:r.name,class:l(["rounded-t w-64 object-cover",c.square?"h-64":"h-96"])},null,10,p),a("div",{class:l(["bg-white rounded-b w-64",e<3?t[e].height:""])},[a("h3",x,n(r.name),1)],2)],2))),256))]))}};export{k as _};
