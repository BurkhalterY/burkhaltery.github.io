import{v as u,g as d,q as m,f as p,j as h,c as g,a as _,m as v}from"./skills.271d1883.js";import{o as a,c as t,F as n,r as l,a as e,n as x,t as r}from"./index.2685a6ad.js";const k=e("h2",{class:"text-2xl text-center my-4 px-2 py-1 bg-white rounded"}," Quelques projets ",-1),j={class:"my-5 p-5 bg-white rounded grid grid-cols-5 gap-5"},b={class:"text-2xl"},q={class:"mt-1"},f=["src","alt","title"],w={class:"max-w-sm text-justify"},y={class:"col-span-2"},B=["href"],C=["src","alt"],R={__name:"Projects",setup(S){const o=[{name:"epsic.burkhalter.dev",image:"projects/prog-normalux.png",link:"https://epsic.burkhalter.dev",skills:[u],dateRange:"janv. 2019 - juil. 2022",description:"Un site qui reprend et r\xE9explique les modules d'informatique que j'ai vu en premi\xE8re ann\xE9e dans le but d'aider mes camarades. Depuis, chaque classe de premi\xE8re ann\xE9e l'utilise."},{name:"Bataille navale",image:"projects/bataille-navale.png",link:"https://github.com/BurkhalterY/EPSIC_Bataille_Navale/releases",skills:[d],dateRange:"nov. 2019",description:"Jeu r\xE9alis\xE9 dans le cadre de l'EPSIC. C'est un jeu de bataille navale classique avec quelques fonctionnalit\xE9s suppl\xE9mentaires telles que des sonars et des bombes nucl\xE9aires."},{name:"Use Your Cheats",image:"projects/use-your-cheats.png",link:"https://github.com/BurkhalterY/UseYourCheats/releases",skills:[m,p,h],dateRange:"ao\xFBt 2019",description:"Petite application Android qui exploite une faille du jeu Use Your Words et permet la tricherie."},{name:"Normalux.ch",image:"projects/normalux.png",link:"https://www.normalux.ch",skills:[g,_,v],dateRange:"janv. 2018",description:"Un site de jeu dans lequel il faut reproduire un dessin en 45s selon un mod\xE8le (similaire \xE0 Pokedraw.net qui est maintenant down). Il y a plusieurs modes de jeu."}];return(P,U)=>(a(),t("div",null,[k,(a(),t(n,null,l(o,(s,c)=>e("div",j,[e("div",{class:x(["col-span-3",{"order-1":c%2==0}])},[e("h3",b,r(s.name),1),e("div",q,[(a(!0),t(n,null,l(s.skills,i=>(a(),t("img",{src:`/images/skills/${i.icon}`,alt:i.name,title:i.name,class:"object-contain align-text-bottom inline w-6 h-6 mx-px"},null,8,f))),256))]),e("p",w,r(s.description),1)],2),e("div",y,[e("a",{target:"_blank",href:s.link},[e("img",{src:`/images/${s.image}`,alt:s.name,class:"w-64 h-48 object-contain"},null,8,C)],8,B)])])),64))]))}};export{R as default};
