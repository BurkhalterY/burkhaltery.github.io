import{o as x,p as S,v as b,t as k,u as j,b as y,a as m,m as I,c as P,h as w,d as O,j as A,e as C,f as h,g as f,i as q,l as E,k as L,n as T,q as F,r as V}from"./skills.dbe092e4.js";import{u as B,o as t,c as n,a as e,F as o,r,t as a,b as i,n as D,d as N,e as g}from"./index.352e6e93.js";const z={class:"max-w-3xl px-10 py-5 bg-white rounded"},H={colspan:"5"},J={colspan:"5"},Q={class:"mt-5 mb-1 text-xl"},M={class:"text-lg"},K=["colspan"],W={key:0},$={key:1},G={key:0},R={key:1,class:"mr-2 text-xs"},U=e("td",{colspan:"3"},null,-1),X={class:"text-sm italic"},Y={class:"mt-1 mb-3"},Z=["src","alt","title"],ee={class:"text-xs"},ie={__name:"Career",setup(te){const{t:p,locale:d}=B({messages:{fr:{today:"Aujourd'hui",sending_documents_on_request:"Envoie de documents sur demande"},en:{today:"Today",sending_documents_on_request:"Sending documents on request"}}}),_=[{name:{fr:"Exp\xE9riences professionnelles",en:"Work Experience"},companies:[{name:"Open Net S\xE0rl",location:"Lausanne",places:[{job:{fr:"D\xE9veloppeur Odoo",en:"Odoo developer"},start:2022,end:!1,description:{fr:"Customisation Odoo et d\xE9veloppement Vue.js.",en:"Odoo customization & Vue.js."},skills:[]},{job:{fr:"Apprenti informaticien",en:"IT apprentice"},start:2021,end:2022,description:{fr:"Derni\xE8re ann\xE9e d'apprentissage chez Open Net, int\xE9grateur Odoo.",en:"I did my last year of apprenticeship at Open Net, Odoo integrator."},skills:[x,S,b,k,j]}]},{name:"Orif",location:"Pomy, Aigle",places:[{job:{fr:"Apprenti informaticien",en:"IT apprentice"},start:2018,end:2021,description:{fr:"Apprentissage en informatique, orient\xE9 d\xE9veloppement d'applications. J'ai, entre autres, particip\xE9 au d\xE9veloppement d'un gestionnaire de stock en PHP avec le framework CodeIgniter.",en:"I did the 3 first years of my apprenticeship at Orif, with somes stages on many others companies."},skills:[y,m,I,P]},{job:{fr:"Pr\xE9formation",en:"Pre-training"},start:2017,end:2018,description:{fr:"Pr\xE9formation d'un an au sein de la section informatique de Pomy.",en:"Before starting my apprenticeship, I did a pre-training at Orif where I have learned the IT and development basics."},skills:[w,O,A,C]}]}]},{name:{fr:"Formation",en:"Education"},companies:[{name:"ETML",location:"Lausanne",places:[{job:{fr:"Maturit\xE9 Professionnelle, technique, architecture et sciences de la vie",en:"Vocational Baccalaureate, Engineering, Architecture, Life Sciences"},start:2022,end:2024,description:{fr:"Dans le but d'acc\xE9der \xE0 une HES ou \xE0 l'EPFL, \xE0 d\xE9finir.",en:"For accessing EPFL or another High School."},skills:[]}]},{name:"EPSIC",location:"Lausanne",places:[{job:{fr:"Informaticien CFC, orient\xE9 d\xE9veloppement d'applications",en:"Federal VET Diploma, Application Development"},start:2018,end:2022,description:{fr:"Apprentissage de 4 ans, termin\xE9e avec mention bien.",en:"4 year apprenticeship, finish with a \xAB\xA0good\xA0\xBB mention."},skills:[h,f,q]}]}]},{name:{fr:"Stages",en:"Stages"},companies:[{name:"Quicksite SA",location:"Vevey",places:[{job:{fr:"Stage de d\xE9veloppeur PHP",en:"PHP developer stage"},start:2020,end:2021,description:{fr:"Stage de 9 mois chez Quicksite, agence web, chez qui j'ai d\xE9velopp\xE9 une interface de traduction pour Laravel.",en:"9 months stage at Quicksite, where I developed a translation interface with Laravel."},skills:[m,E]}]},{name:"Orif SIT",location:"Pr\xE9verenges",places:[{job:{fr:"Stage de d\xE9veloppeur C#",en:"C# developer stage"},start:2020,end:2020,description:{fr:"Stage de 2 mois au SIT de l'Orif o\xF9 j'\xE9tais charg\xE9 de d\xE9velopper un logiciel interne.",en:"2 months stage at Orif SIT, where I developed an internal software in C# and PowerShell."},skills:[f,L]}]},{name:"Creatis Informatique",location:"Pr\xE9verenges",places:[{job:{fr:"Stage de d\xE9veloppeur Android",en:"Android developer stage"},start:2019,end:2019,description:{fr:"Stage de 5 mois durant lequel j'ai particip\xE9 au d\xE9veloppement d'applications Android avec Java et Kotlin.",en:"5 months stage at Creatis, where I ported iOS applications to Android."},skills:[T,h,F,V]}]}]}];return(ne,se)=>(t(),n("div",z,[e("table",null,[(t(),n(o,null,r(_,(u,v)=>(t(),n(o,null,[e("tr",null,[e("td",H,[e("h2",{class:D(["text-2xl text-center uppercase",{"mt-5":v}])},a(u.name[i(d)]),3)])]),(t(!0),n(o,null,r(u.companies,l=>(t(),n(o,null,[e("tr",null,[e("td",J,[e("h3",Q,[N(a(l.name)+", ",1),e("span",M,a(l.location),1)])])]),(t(!0),n(o,null,r(l.places,s=>(t(),n(o,null,[e("tr",null,[e("td",{colspan:s.start!=s.end?1:3},a(s.start),9,K),s.start!=s.end?(t(),n("td",W,"-")):g("",!0),s.start!=s.end?(t(),n("td",$,[s.end?(t(),n("span",G,a(s.end),1)):(t(),n("span",R,a(i(p)("today")),1))])):g("",!0),e("td",null,a(s.job[i(d)]),1)]),e("tr",null,[U,e("td",null,[e("div",X,a(s.description[i(d)]),1),e("div",Y,[(t(!0),n(o,null,r(s.skills,c=>(t(),n("img",{src:`/images/skills/${c.icon}`,alt:c.name,title:c.name,class:"inline object-contain w-6 h-6 mx-px align-text-bottom"},null,8,Z))),256))])])])],64))),256))],64))),256))],64))),64))]),e("span",ee,a(i(p)("sending_documents_on_request")),1)]))}};export{ie as default};