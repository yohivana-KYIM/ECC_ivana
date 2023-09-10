import{u as y,r as _,b as w,o as i,c as h,d as t,e as s,w as o,f as e,g as a,t as x,h as u,T as m,i as b}from"./app-2c444acf.js";import{M as v,U as g,B as k,X as C,C as p,a as f}from"./index-32190f06.js";import"./vue.runtime.esm-bundler-fc9d968a.js";const j={class:"relative bg-white text-zinc-500 w-full h-auto shadow"},q={class:"flex justify-between items-center sm:px-6 px-4 py-4"},$={class:"lg:w-2/6"},P=t("div",{class:"lg:h-14 h-12"},[t("img",{src:"/assets/LOGO.png",class:"w-full h-full object-cover"})],-1),T=t("h1",{class:"font-bold xl:text-xl text-sm text-gray-800"},"Eglise du Christianisme Céleste",-1),A={class:"relative w-2/6 lg:block hidden"},D={class:"absolute inset-y-0 left-0 flex items-center pl-3"},S=t("input",{type:"text",class:"w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-red-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300",placeholder:"Search"},null,-1),M={key:0,class:"lg:flex xl:text-base text-sm hidden w-2/6 px-4 items-center justify-end"},z={key:1,class:"lg:flex xl:text-base text-sm hidden w-2/6 px-4 items-center justify-end"},B={class:"text-right"},G={class:"text-lg"},I={class:"text-sm text-gray-500"},V=["src","alt"],N={type:"button"},E={class:"relative lg:block hidden"},F={class:"flex items-center justify-center list-none space-x-6 w-full xl:text-lg text-sm"},L={class:"py-4"},U={class:"relative group py-4"},J={class:"cursor-pointer p-2 rounded-lg text-left font-semibold flex items-center text-gray-500 group-hover:bg-red-500 group-hover:text-white"},O=t("span",null,"Publications",-1),R={class:"ml-1"},X={class:"absolute z-50 hidden bg-white w-52 shadow top-full left-0 rounded-b-lg text-base group-hover:block"},H={class:"relative group py-4"},K={class:"cursor-pointer p-2 rounded-lg text-left font-semibold flex items-center text-gray-500 group-hover:bg-red-500 group-hover:text-white"},Q=t("span",null,"Profils",-1),W={class:"ml-1"},Y={class:"absolute z-20 hidden bg-white w-52 shadow top-full left-0 rounded-b-lg text-base group-hover:block"},Z={class:"py-4"},ee={class:"relative group py-4"},te={class:"cursor-pointer p-2 rounded-lg text-left font-semibold flex items-center text-gray-500 group-hover:bg-red-500 group-hover:text-white"},se=t("span",null,"Multimédia",-1),oe={class:"ml-1"},le={class:"absolute z-20 hidden bg-white w-52 shadow top-full left-0 rounded-b-lg text-base group-hover:block"},ae={class:"relative group py-4"},re={class:"cursor-pointer p-2 rounded-lg text-left font-semibold flex items-center text-gray-500 group-hover:bg-red-500 group-hover:text-white"},ne=t("span",null,"Cantiques",-1),ie={class:"ml-1"},de={class:"absolute z-20 hidden bg-white w-52 shadow top-full left-0 rounded-b-lg text-base group-hover:block"},ce={class:"py-4"},ue={class:"relative group py-4"},he={class:"cursor-pointer p-2 rounded-lg text-left font-semibold flex items-center text-gray-500 group-hover:bg-red-500 group-hover:text-white"},pe=t("span",null,"Documents",-1),fe={class:"ml-1"},me={class:"absolute z-20 hidden bg-white w-52 shadow top-full left-0 rounded-b-lg text-base group-hover:block"},be={class:"py-4"},xe={key:0,class:"relative w-full"},ve={class:"relative w-full px-6"},ge={class:"absolute inset-y-0 left-6 flex items-center pl-3"},ye=t("input",{type:"text",class:"w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-red-400 text-sm focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300",placeholder:"Search"},null,-1),_e={class:"flex items-start flex-col justify-start py-4 list-none w-full text-sm"},we={class:"relative py-1 px-6 w-full"},ke=t("span",null,"Publications",-1),Ce={class:""},je={class:"relative py-1 px-6 w-full"},qe=t("span",null,"Profils",-1),$e={class:""},Pe={class:"py-1 px-6 w-full"},Te={class:"relative py-1 px-6 w-full"},Ae=t("span",null,"Multimédia",-1),De={class:""},Se={class:"relative w-full py-1 px-6"},Me=t("span",null,"Cantiques",-1),ze={class:""},Be={class:"py-1 px-6 w-full"},Ge={class:"relative py-1 px-6 w-full"},Ie=t("span",null,"Documents",-1),Ve={class:""},Ne={class:"text-left ml-2"},Ee={class:"text-base"},Fe={class:"text-xs text-gray-500"},Le=["src","alt"],He={__name:"SiteNavigation",setup(Ue){const d=y();let r=_({menu:!1,submenu:{publication:!1,profil:!1,multimedia:!1,cantiques:!1,document:!1}});return(Je,n)=>{const l=w("router-link");return i(),h("header",j,[t("div",q,[t("div",$,[s(l,{to:"/",class:"inline-flex items-center"},{default:o(()=>[P,T]),_:1})]),t("div",A,[t("span",D,[s(e(v),{class:"w-5 h-5 text-gray-400"})]),S]),!e(d).user&&!e(d).token?(i(),h("div",M,[s(l,{to:{name:"register"},class:"py-2 text-base px-4 text-center rounded-lg bg-gradient-to-r bg-red-500 text-white font-semibold"},{default:o(()=>[a("Rejoindre la communauté")]),_:1}),s(l,{to:{name:"login"},class:"py-2 px-4 text-center text-red-500 font-semibold md:mx-4"},{default:o(()=>[a("Connexion")]),_:1})])):(i(),h("div",z,[s(l,{to:{name:"account",params:{id:e(d).user.id}},class:"lg:flex hidden items-center space-x-3"},{default:o(()=>[t("div",B,[t("div",G,x(e(d).user.username),1),t("div",I,x(e(d).user.email),1)]),t("div",null,[e(d).user.avatar!=null&&e(d).user.avatar!="null"?(i(),h("img",{key:0,class:"h-16 w-16 rounded-full object-cover",src:e(d).user.avatar,alt:e(d).user.username},null,8,V)):(i(),u(e(g),{key:1,class:"h-16 w-16 text-gray-800"}))])]),_:1},8,["to"])])),t("div",{onClick:n[0]||(n[0]=c=>e(r).menu=!e(r).menu),class:"lg:hidden block"},[t("button",N,[e(r).menu?(i(),u(e(C),{key:1,class:"h-6 w-6"})):(i(),u(e(k),{key:0,class:"h-6 w-6"}))])])]),t("nav",E,[t("ul",F,[t("li",L,[s(l,{to:{name:"home"},class:"cursor-pointer p-2 rounded-lg text-left font-semibold text-gray-500 hover:bg-red-500 hover:text-white"},{default:o(()=>[a("Acceuil")]),_:1})]),t("li",U,[t("div",J,[O,t("span",R,[s(e(p),{class:"h-4 w-4 group-hover:hidden transition-all duration-500"}),s(e(f),{class:"h-4 w-4 hidden group-hover:block transition-all duration-500"})])]),t("div",X,[s(l,{to:{name:"messages"},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Messages")]),_:1}),s(l,{to:{name:"jobs"},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Jobs")]),_:1}),s(l,{to:{name:"evenements"},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Evenements")]),_:1}),s(l,{to:{name:"annonces"},class:"hover:text-white hover:bg-red-500 px-4 py-2 rounded-b-lg font-semibold block"},{default:o(()=>[a("Annonces")]),_:1})])]),t("li",H,[t("div",K,[Q,t("span",W,[s(e(p),{class:"h-4 w-4 group-hover:hidden transition-all duration-500"}),s(e(f),{class:"h-4 w-4 hidden group-hover:block transition-all duration-500"})])]),t("div",Y,[s(l,{to:{name:"profile",params:{userType:"faithful"}},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Fidèle")]),_:1}),s(l,{to:{name:"profile",params:{userType:"faithful"},query:{parish_official:!0}},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Chargé Paroissial")]),_:1}),s(l,{to:{name:"profile",params:{userType:"prayerGroup"}},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Groupe de Prière")]),_:1}),s(l,{to:{name:"profile",params:{userType:"diocese"}},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Diocèse")]),_:1}),s(l,{to:{name:"profile",params:{userType:"seat"}},class:"hover:text-white hover:bg-red-500 px-4 py-2 rounded-b-lg font-semibold block"},{default:o(()=>[a("Siège")]),_:1})])]),t("li",Z,[s(l,{to:{name:"paroisses"},class:"cursor-pointer p-2 rounded-lg text-left font-semibold text-gray-500 hover:bg-red-500 hover:text-white"},{default:o(()=>[a("Paroisses")]),_:1})]),t("li",ee,[t("div",te,[se,t("span",oe,[s(e(p),{class:"h-4 w-4 group-hover:hidden transition-all duration-500"}),s(e(f),{class:"h-4 w-4 hidden group-hover:block transition-all duration-500"})])]),t("div",le,[s(l,{to:{name:"multimedia"},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Audio")]),_:1}),s(l,{to:{name:"multimedia"},class:"hover:text-white hover:bg-red-500 px-4 py-2 rounded-b-lg font-semibold block"},{default:o(()=>[a("Video")]),_:1})])]),t("li",ae,[t("div",re,[ne,t("span",ie,[s(e(p),{class:"h-4 w-4 group-hover:hidden transition-all duration-500"}),s(e(f),{class:"h-4 w-4 hidden group-hover:block transition-all duration-500"})])]),t("div",de,[s(l,{to:{name:"cantique"},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Audios")]),_:1}),s(l,{to:{name:"cantique"},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Playlists")]),_:1}),s(l,{to:{name:"cantique"},class:"hover:text-white hover:bg-red-500 px-4 py-2 rounded-b-lg font-semibold block"},{default:o(()=>[a("Partitions")]),_:1})])]),t("li",ce,[s(l,{to:{name:"formation"},class:"cursor-pointer p-2 rounded-lg text-left font-semibold text-gray-500 hover:bg-red-500 hover:text-white"},{default:o(()=>[a("Formations")]),_:1})]),t("li",ue,[t("div",he,[pe,t("span",fe,[s(e(p),{class:"h-4 w-4 group-hover:hidden transition-all duration-500"}),s(e(f),{class:"h-4 w-4 hidden group-hover:block transition-all duration-500"})])]),t("div",me,[s(l,{to:{name:"library"},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Livres")]),_:1}),s(l,{to:{name:"library"},class:"hover:text-white hover:bg-red-500 px-4 py-2 rounded-b-lg font-semibold block"},{default:o(()=>[a("Documents officiels")]),_:1})])]),t("li",be,[s(l,{to:{name:"contact"},class:"cursor-pointer p-2 rounded-lg text-left font-semibold text-gray-500 hover:bg-red-500 hover:text-white"},{default:o(()=>[a("Contact")]),_:1})])])]),s(m,{"enter-active-class":"transition duration-500","enter-from-class":"opacity-0 -translate-x-full absolute","enter-to-class":"opacity-1 translate-x-0","leave-active-class":"transition duration-500","leave-from-class":"opacity-1/2 translate-x-0","leave-to-class":"translate-x-1/2 opacity-0 "},{default:o(()=>[e(r).menu?(i(),h("nav",xe,[t("div",ve,[t("span",ge,[s(e(v),{class:"w-5 h-5 text-gray-400"})]),ye]),t("ul",_e,[t("li",{onClick:n[1]||(n[1]=c=>e(r).menu=!e(r).menu),class:"py-1 px-6 w-full"},[s(l,{to:{name:"home"},class:"cursor-pointer p-2 text-left block font-semibold text-gray-500 hover:bg-red-500 focus:bg-red-500 w-full hover:text-white"},{default:o(()=>[a("Acceuil")]),_:1})]),t("li",we,[t("div",{onClick:n[2]||(n[2]=c=>e(r).submenu.publication=!e(r).submenu.publication),class:"cursor-pointer p-2 text-left font-semibold flex justify-between w-full items-center text-gray-500 hover:bg-red-500 hover:text-white"},[ke,t("span",Ce,[e(r).submenu.publication?(i(),u(e(f),{key:1,class:"h-4 w-4"})):(i(),u(e(p),{key:0,class:"h-4 w-4"}))])]),s(m,{"enter-active-class":"transition duration-500","enter-from-class":"opacity-0 -translate-x-full absolute","enter-to-class":"opacity-1 translate-x-0","leave-active-class":"transition duration-500","leave-from-class":"opacity-1/2 translate-x-0","leave-to-class":"translate-x-1/2 opacity-0 "},{default:o(()=>[e(r).submenu.publication?(i(),h("div",{key:0,onClick:n[3]||(n[3]=c=>e(r).menu=!e(r).menu),class:"shadow rounded-lg my-2 bg-gray-50 text-sm overflow-hidden"},[s(l,{to:{name:"messages"},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Messages")]),_:1}),s(l,{to:{name:"jobs"},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Jobs")]),_:1}),s(l,{to:{name:"evenements"},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Evenements")]),_:1}),s(l,{to:{name:"annonces"},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Annonces")]),_:1})])):b("",!0)]),_:1})]),t("li",je,[t("div",{onClick:n[4]||(n[4]=c=>e(r).submenu.profil=!e(r).submenu.profil),class:"cursor-pointer p-2 text-left font-semibold flex justify-between w-full items-center text-gray-500 hover:bg-red-500 hover:text-white"},[qe,t("span",$e,[e(r).submenu.profil?(i(),u(e(f),{key:1,class:"h-4 w-4"})):(i(),u(e(p),{key:0,class:"h-4 w-4"}))])]),s(m,{"enter-active-class":"transition duration-500","enter-from-class":"opacity-0 -translate-x-full absolute","enter-to-class":"opacity-1 translate-x-0","leave-active-class":"transition duration-500","leave-from-class":"opacity-1/2 translate-x-0","leave-to-class":"translate-x-1/2 opacity-0 "},{default:o(()=>[e(r).submenu.profil?(i(),h("div",{key:0,onClick:n[5]||(n[5]=c=>e(r).menu=!e(r).menu),class:"shadow rounded-lg my-2 bg-gray-50 text-sm overflow-hidden"},[s(l,{to:{name:"profile",params:{userType:"faithful"}},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Fidèle")]),_:1}),s(l,{to:{name:"profile",params:{userType:"faithful"},query:{parish_official:!0}},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Chargé Paroissial")]),_:1}),s(l,{to:{name:"profile",params:{userType:"prayerGroup"}},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Groupe de Prière")]),_:1}),s(l,{to:{name:"profile",params:{userType:"diocese"}},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Diocèse")]),_:1}),s(l,{to:{name:"profile",params:{userType:"seat"}},class:"hover:text-white hover:bg-red-500 px-4 py-2 rounded-b-lg font-semibold block"},{default:o(()=>[a("Siège")]),_:1})])):b("",!0)]),_:1})]),t("li",Pe,[s(l,{to:{name:"paroisses"},class:"cursor-pointer p-2 text-left block font-semibold text-gray-500 hover:bg-red-500 focus:bg-red-500 w-full hover:text-white"},{default:o(()=>[a("Paroisses")]),_:1})]),t("li",Te,[t("div",{onClick:n[6]||(n[6]=c=>e(r).submenu.multimedia=!e(r).submenu.multimedia),class:"cursor-pointer p-2 text-left font-semibold flex justify-between w-full items-center text-gray-500 hover:bg-red-500 hover:text-white"},[Ae,t("span",De,[e(r).submenu.multimedia?(i(),u(e(f),{key:1,class:"h-4 w-4"})):(i(),u(e(p),{key:0,class:"h-4 w-4"}))])]),s(m,{"enter-active-class":"transition duration-500","enter-from-class":"opacity-0 -translate-x-full absolute","enter-to-class":"opacity-1 translate-x-0","leave-active-class":"transition duration-500","leave-from-class":"opacity-1/2 translate-x-0","leave-to-class":"translate-x-1/2 opacity-0 "},{default:o(()=>[e(r).submenu.multimedia?(i(),h("div",{key:0,onClick:n[7]||(n[7]=c=>e(r).menu=!e(r).menu),class:"shadow rounded-lg my-2 bg-gray-50 text-sm overflow-hidden"},[s(l,{to:{name:"multimedia"},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Audio")]),_:1}),s(l,{to:{name:"multimedia"},class:"hover:text-white hover:bg-red-500 px-4 py-2 rounded-b-lg font-semibold block"},{default:o(()=>[a("Video")]),_:1})])):b("",!0)]),_:1})]),t("li",Se,[t("div",{onClick:n[8]||(n[8]=c=>e(r).submenu.cantiques=!e(r).submenu.cantiques),class:"cursor-pointer p-2 text-left font-semibold flex justify-between w-full items-center text-gray-500 hover:bg-red-500 hover:text-white"},[Me,t("span",ze,[e(r).submenu.cantiques?(i(),u(e(f),{key:1,class:"h-4 w-4"})):(i(),u(e(p),{key:0,class:"h-4 w-4"}))])]),s(m,{"enter-active-class":"transition duration-500","enter-from-class":"opacity-0 -translate-x-full absolute","enter-to-class":"opacity-1 translate-x-0","leave-active-class":"transition duration-500","leave-from-class":"opacity-1/2 translate-x-0","leave-to-class":"translate-x-1/2 opacity-0 "},{default:o(()=>[e(r).submenu.cantiques?(i(),h("div",{key:0,onClick:n[9]||(n[9]=c=>e(r).menu=!e(r).menu),class:"shadow rounded-lg my-2 bg-gray-50 text-sm overflow-hidden"},[s(l,{to:{name:"cantique"},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Audios")]),_:1}),s(l,{to:{name:"cantique"},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Playlists")]),_:1}),s(l,{to:{name:"cantique"},class:"hover:text-white hover:bg-red-500 px-4 py-2 rounded-b-lg font-semibold block"},{default:o(()=>[a("Partitions")]),_:1})])):b("",!0)]),_:1})]),t("li",Be,[s(l,{to:{name:"formation"},class:"cursor-pointer p-2 text-left block font-semibold text-gray-500 hover:bg-red-500 focus:bg-red-500 w-full hover:text-white"},{default:o(()=>[a("Formations")]),_:1})]),t("li",Ge,[t("div",{onClick:n[10]||(n[10]=c=>e(r).submenu.document=!e(r).submenu.document),class:"cursor-pointer p-2 text-left font-semibold flex justify-between w-full items-center text-gray-500 hover:bg-red-500 hover:text-white"},[Ie,t("span",Ve,[e(r).submenu.document?(i(),u(e(f),{key:1,class:"h-4 w-4"})):(i(),u(e(p),{key:0,class:"h-4 w-4"}))])]),s(m,{"enter-active-class":"transition duration-500","enter-from-class":"opacity-0 -translate-x-full absolute","enter-to-class":"opacity-1 translate-x-0","leave-active-class":"transitionhidden duration-500","leave-from-class":"opacity-1/2 translate-x-0","leave-to-class":"translate-x-1/2 opacity-0 "},{default:o(()=>[e(r).submenu.document?(i(),h("div",{key:0,onClick:n[11]||(n[11]=c=>e(r).menu=!e(r).menu),class:"shadow rounded-lg my-2 bg-gray-50 text-sm overflow-hidden"},[s(l,{to:{name:"library"},class:"hover:text-white hover:bg-red-500 px-4 py-2 font-semibold block"},{default:o(()=>[a("Livres")]),_:1}),s(l,{to:{name:"library"},class:"hover:text-white hover:bg-red-500 px-4 py-2 rounded-b-lg font-semibold block"},{default:o(()=>[a("Documents officiels")]),_:1})])):b("",!0)]),_:1})]),t("li",{onClick:n[12]||(n[12]=c=>e(r).menu=!e(r).menu),class:"py-1 px-6 w-full"},[s(l,{to:{name:"contact"},class:"cursor-pointer p-2 text-left block font-semibold text-gray-500 hover:bg-red-500 focus:bg-red-500 w-full hover:text-white"},{default:o(()=>[a("Contact")]),_:1})])]),!e(d).user&&!e(d).token?(i(),h("div",{key:0,onClick:n[13]||(n[13]=c=>e(r).menu=!e(r).menu),class:"text-sm w-full px-4"},[s(l,{to:{name:"register"},class:"py-2 px-4 block text-center rounded-lg bg-red-500 text-white font-semibold"},{default:o(()=>[a("Rejoindre la communauté")]),_:1}),s(l,{to:{name:"login"},class:"py-2 px-4 block text-center text-red-500 font-semibold md:mx-4"},{default:o(()=>[a("Se Connecter")]),_:1})])):(i(),h("div",{key:1,onClick:n[14]||(n[14]=c=>e(r).menu=!e(r).menu),class:"w-full px-6 pb-4"},[s(l,{to:{name:"account",params:{id:e(d).user.id}},class:"flex flex-row-reverse justify-end items-center w-full"},{default:o(()=>[t("div",Ne,[t("div",Ee,x(e(d).user.username),1),t("div",Fe,x(e(d).user.email),1)]),t("div",null,[e(d).user.avatar!=null&&e(d).user.avatar!="null"?(i(),h("img",{key:0,class:"h-16 w-16 rounded-full object-cover",src:e(d).user.avatar,alt:e(d).user.username},null,8,Le)):(i(),u(e(g),{key:1,class:"h-16 w-16 text-gray-800"}))])]),_:1},8,["to"])]))])):b("",!0)]),_:1})])}}};export{He as default};