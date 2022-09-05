import{u as p,o as s,c as t,a as e,t as i,b as l,F as r,r as u,n as h}from"./index.34fc4faa.js";import{v as g,g as f,r as _,f as x,j as v,c as b,a as w,m as j}from"./skills.dbe092e4.js";const k={class:"text-2xl text-center my-4 px-2 py-1 bg-white rounded"},y={class:"my-5 p-5 bg-white rounded grid grid-cols-5 gap-5"},q={class:"text-2xl"},C={class:"mt-1"},B=["src","alt","title"],P={class:"max-w-sm text-justify"},S={class:"col-span-2"},A=["href"],I=["src","alt"],F={__name:"Projects",setup(U){const{t:c,locale:o}=p({messages:{fr:{some_projects:"Quelques projets"},en:{some_projects:"Some projects"}}}),d=[{name:{fr:"epsic.burkhalter.dev",en:"epsic.burkhalter.dev"},image:"projects/prog-normalux.png",link:"https://epsic.burkhalter.dev",skills:[g],dateRange:"janv. 2019 - juil. 2022",description:{fr:"Un site qui reprend et r\xE9explique les modules d'informatique que j'ai vu en premi\xE8re ann\xE9e dans le but d'aider mes camarades. Depuis, chaque classe de premi\xE8re ann\xE9e l'utilise.",en:"A website with the content of many of our first year of apprenticeship courses at EPSIC. Firstly made with CodeIgniter in PHP, then with Angular, and finally with Vue.js."}},{name:{fr:"Bataille navale",en:"Battleship"},image:"projects/bataille-navale.png",link:"https://github.com/BurkhalterY/EPSIC_Bataille_Navale/releases",skills:[f],dateRange:"nov. 2019",description:{fr:"Jeu r\xE9alis\xE9 dans le cadre de l'EPSIC. C'est un jeu de bataille navale classique avec quelques fonctionnalit\xE9s suppl\xE9mentaires telles que des sonars et des bombes nucl\xE9aires.",en:"A fully fonctional battleship game with a lot of additional features like \xAB\xA0sonars\xA0\xBB and \xAB\xA0nuclear bombs\xA0\xBB."}},{name:{fr:"Use Your Cheats",en:"Use Your Cheats"},image:"projects/use-your-cheats.png",link:"https://github.com/BurkhalterY/UseYourCheats/releases",skills:[_,x,v],dateRange:"ao\xFBt 2019",description:{fr:"Petite application Android qui exploite une faille du jeu Use Your Words. Cela permet de conna\xEEtre la house answer et de voter pour soi-m\xEAme.",en:"A little Android application that exploit a fault on the Use Your Words backend. That's allow you to vote for yourself and know which is the house answer."}},{name:{fr:"Normalux.ch",en:"Normalux.ch"},image:"projects/normalux.png",link:"https://www.normalux.ch",skills:[b,w,j],dateRange:"janv. 2018",description:{fr:"Un site de jeu dans lequel il faut reproduire un dessin en 45 secondes selon un mod\xE8le (similaire \xE0 Pokedraw.net qui est maintenant down). Il y a plusieurs modes de jeu.",en:"A drawing website where you have to reproduce a model in only 45\u2033. There are a lot of game modes and explore the gallery may be very funny!"}}];return(Y,E)=>(s(),t("div",null,[e("h2",k,i(l(c)("some_projects")),1),(s(),t(r,null,u(d,(a,m)=>e("div",y,[e("div",{class:h(["col-span-3",{"order-1":m%2==0}])},[e("h3",q,i(a.name[l(o)]),1),e("div",C,[(s(!0),t(r,null,u(a.skills,n=>(s(),t("img",{src:`/images/skills/${n.icon}`,alt:n.name,title:n.name,class:"object-contain align-text-bottom inline w-6 h-6 mx-px"},null,8,B))),256))]),e("p",P,i(a.description[l(o)]),1)],2),e("div",S,[e("a",{target:"_blank",href:a.link},[e("img",{src:`/images/${a.image}`,alt:a.name,class:"w-64 h-48 object-contain"},null,8,I)],8,A)])])),64))]))}};export{F as default};
