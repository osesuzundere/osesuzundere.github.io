(this.webpackJsonptheapp=this.webpackJsonptheapp||[]).push([[0],{44:function(e,t,a){e.exports=a(55)},49:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(16),r=a.n(o),l=(a(49),a(10)),c=a(7),s=a(12),u=a(11),m=a(72),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(m.a,{style:h.container,maxWidth:"sm",onClick:function(){window.location.href="/"}},i.a.createElement("img",{style:h.image,src:d.image_oses,alt:"image_oses"}),i.a.createElement("div",{style:h.heading},i.a.createElement("div",null,"UZUNDERE"),i.a.createElement("div",null,"ERZURUM")),i.a.createElement("img",{style:h.image,src:d.image_arzen,alt:"image_arzen"}))}}]),a}(n.Component),d={image_oses:"https://www.oses.com.tr/assets/images/oses.png",image_arzen:"http://arzen.com.tr/images/arzen_logo.png"},h={container:{height:"70px",backgroundColor:"whitesmoke",display:"flex",justifyContent:"space-between",alignItems:"center"},image:{height:"40px",marginTop:"5px"},heading:{display:"block",fontWeight:"bold",fontSize:"15px",marginTop:"5px",textAlign:"center"}},g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(m.a,{style:b.container,maxWidth:"sm"},"Muzaffer M\xfcjdeci")}}]),a}(n.Component),b={container:{minHeight:"50px",backgroundColor:"gray",color:"white",textAlign:"right",paddingTop:"15px"}},f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{style:k.root},i.a.createElement(p,null),i.a.createElement(m.a,{style:k.container,maxWidth:"sm"},this.props.content),i.a.createElement(g,null))}}]),a}(n.Component),k={container:{backgroundColor:"whitesmoke",minHeight:"200px",paddingTop:"30px",paddingBottom:"30px"},root:{}},E=a(73),v=a(81),y=a(74),w=a(75),x=a(76),j=a(77),O=a(35),A=a.n(O),C=a(36),S=a.n(C),z=a(37),R=a.n(z),T=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=null,t=window.innerWidth,a=window.innerHeight;e=t<600?(a-367)/2+"px":a-305+"px";var n=[];P.forEach((function(t){n.push(i.a.createElement(E.a,{item:!0,sm:6,xs:12,key:t.id},i.a.createElement(v.a,null,i.a.createElement(y.a,{onClick:function(e){window.location.href=t.to}},i.a.createElement(w.a,{component:"img",alt:t.id,height:e,image:t.image}),i.a.createElement(x.a,{style:_.card_header},t.title)))))}));var o=[];W.forEach((function(e){o.push(i.a.createElement(j.a,{key:e.label,style:{color:e.color},"aria-label":e.label,onClick:function(){window.open(e.to,"_blank")}},i.a.createElement(e.icon,{fontSize:"large"})))}));var r=i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(E.a,{container:!0,spacing:1},n)),i.a.createElement("div",null,i.a.createElement(E.a,{container:!0,spacing:3,style:{justifyContent:"center",marginTop:"20px"}},o)));return i.a.createElement(f,{content:r})}}]),a}(n.Component),_={card_header:{textAlign:"center",fontWeight:"bolder",fontSize:"20px"}},P=[{id:"oses",image:"https://www.oses.com.tr/assets/images/media_promo.jpg",title:"OSES S\u0130PAR\u0130\u015e",to:"/?page=order&subpage=oses"},{id:"arzen",image:"http://arzen.com.tr/images/menupage/serbetli.jpg",title:"ARZEN S\u0130PAR\u0130\u015e",to:"/?page=order&subpage=arzen"}],W=[{icon:A.a,to:"https://wa.me/905364572436?text=Sipari\u015f vermek istiyorum.",color:"#25d366",label:"whatsapp"},{icon:S.a,to:"tel:905364572436",color:"#4885ed",label:"phone"},{icon:R.a,to:"https://goo.gl/maps/FTJTrqDY8BF2e6pj8",color:"#e94333",label:"location"}],B=a(14),K=a(82),H=a(83),U=a(78),D=a(79),L=a(80),M=a(39),F=a.n(M),I=a(38),J=a.n(I),Z=a(41),G=a.n(Z),N=a(40),q=a.n(N),V={oses:[{title:"\xc7i\u011fk\xf6fte",sub:[{title:"D\xfcr\xfcm",step:1,amount:0,unit:"ad"},{title:"Porsiyon",step:.5,amount:0,unit:"kg"}]},{title:"Tost",sub:[{title:"Ka\u015farl\u0131",step:1,amount:0,unit:"ad"},{title:"Sucuklu",step:1,amount:0,unit:"ad"}]},{title:"\u0130\xe7ecek",sub:[{title:"Ayran B\xfcy\xfck",step:1,amount:0,unit:"ad"},{title:"Ayran K\xfc\xe7\xfck",step:1,amount:0,unit:"ad"},{title:"Fanta",step:1,amount:0,unit:"ad"}]},{title:"Ekstra",sub:[{title:"Lava\u015f",step:1,amount:0,unit:"ad"},{title:"G\xf6bek",step:.5,amount:0,unit:"ad"},{title:"Limon",step:1,amount:0,unit:"ad"}]}],arzen:[{title:"Dondurma",sub:[{title:"K\xfclah",step:1,amount:0,unit:"ad"},{title:"Paket",step:.5,amount:0,unit:"kg"}]},{title:"Pasta",sub:[{title:"3 Ki\u015filik",step:1,amount:0,unit:"ad"},{title:"5 Ki\u015filik",step:1,amount:0,unit:"ad"}]},{title:"\u015eerbetli Tatl\u0131",sub:[{title:"Baklava",step:.5,amount:0,unit:"kg"},{title:"K\xfcnefe",step:.5,amount:0,unit:"kg"},{title:"Kaday\u0131f Dolmas\u0131",step:.5,amount:0,unit:"kg"},{title:"\u015e\xf6biyet",step:.5,amount:0,unit:"kg"},{title:"Burma",step:.5,amount:0,unit:"kg"},{title:"\u0130rmik Helvas\u0131",step:.5,amount:0,unit:"kg"}]},{title:"S\xfctl\xfc Tatl\u0131lar",sub:[{title:"S\xfctla\xe7",step:1,amount:0,unit:"ad"},{title:"Ke\u015fk\xfcl",step:1,amount:0,unit:"ad"},{title:"Profiterol",step:1,amount:0,unit:"ad"},{title:"Tavuk G\xf6\u011fs\xfc",step:1,amount:0,unit:"ad"}]}]},Y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),n=t.call(this,e);var i=window.location.search,o=new URLSearchParams(i).get("subpage");return n.state={sub:o,orders:V[o]},n.changeAmount=n.changeAmount.bind(Object(B.a)(n)),n.refreshAmounts=n.refreshAmounts.bind(Object(B.a)(n)),n.makeOrder=n.makeOrder.bind(Object(B.a)(n)),n}return Object(c.a)(a,[{key:"changeAmount",value:function(e,t,a){for(var n=this.state.orders,i=0;i<n.length;i++)if(n[i].title===e)for(var o=0;o<n[i].sub.length;o++)if(n[i].sub[o].title===t){var r=a*n[i].sub[o].step;if((r+=n[i].sub[o].amount)<0)return;return n[i].sub[o].amount=r,void this.setState({orders:n})}}},{key:"refreshAmounts",value:function(){for(var e=this.state.orders,t=0;t<e.length;t++)for(var a=0;a<e[t].sub.length;a++)e[t].sub[a].amount=0;this.setState({orders:e})}},{key:"makeOrder",value:function(){for(var e="Sipari\u015f vermek istiyorum.%0A%0A",t=this.state.orders,a=0;a<t.length;a++)for(var n=0;n<t[a].sub.length;n++)if(t[a].sub[n].amount>0){var i=t[a].sub[n].amount,o=t[a].sub[n].unit,r=t[a].sub[n].title,l=t[a].title;e+="[".concat(i," ").concat(o,"] ").concat(l," > ").concat(r,"%0A")}console.log(e),window.open("https://wa.me/905364572436?text="+e,"_blank")}},{key:"render",value:function(){var e=this,t=null,a=(window.innerWidth,window.innerHeight);t=a-245+"px";var n=[];this.state.orders.forEach((function(t){var a=[];t.sub.forEach((function(n){a.push(i.a.createElement(K.a,{key:n.title},i.a.createElement(H.a,{primary:n.title}),i.a.createElement(j.a,{style:{color:"#c8d4aa"},onClick:function(a){e.changeAmount(t.title,n.title,-1)}},i.a.createElement(J.a,null)),i.a.createElement("div",{style:$.amountbox},0!==n.amount?n.amount+" "+n.unit:""),i.a.createElement(j.a,{style:{color:"#a3b52f"},onClick:function(a){e.changeAmount(t.title,n.title,1)}},i.a.createElement(F.a,null))))})),n.push(i.a.createElement("li",{key:t.title},i.a.createElement("ul",{style:{paddingLeft:"0px"}},i.a.createElement(U.a,{style:$.stickyheader},t.title),a)))}));var o=i.a.createElement("div",null,i.a.createElement(D.a,{subheader:i.a.createElement("li",null),style:{overflow:"auto",maxHeight:t}},n),i.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"}},i.a.createElement(j.a,{style:$.refresh,onClick:this.refreshAmounts},i.a.createElement(q.a,null)),i.a.createElement(L.a,{variant:"contained",style:$.orderbutton,endIcon:i.a.createElement(G.a,null),onClick:function(){e.makeOrder()}},"S\u0130PAR\u0130\u015e VER")));return i.a.createElement(f,{content:o})}}]),a}(n.Component),$={stickyheader:{backgroundColor:"#e21e27",color:"whitesmoke",fontSize:"15px"},orderbutton:{width:"90%",marginTop:"5px",backgroundColor:"#97d700",color:"white"},refresh:{marginTop:"5px"},amountbox:{borderBottom:"1.5px solid #cccccc",borderRadius:"5px",height:"20px",width:"50px",marginRight:"5px",fontSize:"15px",textAlign:"right",paddingRight:"1px"}},Q=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=window.location.search,t=new URLSearchParams(e).get("page"),a=i.a.createElement(T,null);return"order"===t&&(a=i.a.createElement(Y,null)),a}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.3959f77c.chunk.js.map