(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{RE0o:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("1Qp6"),o=n("oR2e"),c=n("HaE+"),i=n("o0o1"),s=n.n(i),u=n("meUc"),d=n.n(u),m=n("vDqi");function h(e,t,n,a,l,r){var o=e.split("&").reduce((function(e,t){var n=t.split("=");return e[n[0]]=n[1],e}),{});console.log(o),function(e,t,n,a,l){m.get("https://shinedaoserver.net/verifyAcc?authorization="+e).then((function(e){console.log(e.data),t(e.data.username),n(e.data.id),a(e.data.avatar),l(125)})).catch((function(e){console.log("err1,",e)}))}(o.access_token,n,a,l,r),t(o.access_token)}function b(){return(b=Object(c.a)(s.a.mark((function e(t,n,a,l,r){var o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:r.address,symbol:r.symbol,decimals:r.decimals,image:r.image}}});case 3:(o=e.sent)?(console.log("Thanks for your interest!",o),t(!0),l(500),a(n+1)):console.log("Your loss!"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function E(){return(E=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x89"}]});case 3:e.next=16;break;case 5:if(e.prev=5,e.t0=e.catch(0),console.log("code error ",e.t0.code),4902!==e.t0.code){e.next=16;break}return e.prev=9,e.next=12,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x89",chainName:"Matic(Polygon) Mainnet",rpcUrls:["https://rpc-mainnet.matic.network"],blockExplorerUrls:["https://polygonscan.com"],nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18}}]});case 12:e.next=16;break;case 14:e.prev=14,e.t1=e.catch(9);case 16:case"end":return e.stop()}}),e,null,[[0,5],[9,14]])})))).apply(this,arguments)}function p(e,t,n,a){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(s.a.mark((function e(t,n,a,l){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=16;break}return console.log("load 1",window.web3),window.web3=new d.a(window.ethereum),e.next=5,window.ethereum.enable();case 5:return t(!0),e.next=8,ethereum.request({method:"eth_chainId"});case 8:r=e.sent,n(r),ethereum.on("chainChanged",y),ethereum.request({method:"eth_accounts"}).then((function(e){return w(e,a,l)})).catch((function(e){console.error(e)})),ethereum.on("accountsChanged",g),console.log("load 1",window.web3),e.next=30;break;case 16:if(!window.web3){e.next=27;break}return window.web3=new d.a(window.web3.currentProvider),t(!0),e.next=21,ethereum.request({method:"eth_chainId"});case 21:y(r=e.sent),ethereum.on("chainChanged",y),console.log("load 2"),e.next=30;break;case 27:t(!1),window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!"),console.log("load 3");case 30:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){window.location.reload(!0)}function g(e,t){console.log("current account called 321",e),window.location.reload(!0)}function w(e,t,n){0===e.length?console.log("Please connect to MetaMask."):e[0]!==t&&(n(e[0]),console.log("current account ",e[0],t))}var v=n("M6F4"),x=n.n(v),k=n("JUMO"),S=n("gm8Z"),C=n.n(S);t.default=function(e){var t=e.location,n=Object(a.useState)(),c=n[0],i=n[1],s=Object(a.useState)(),u=s[0],d=s[1],f=Object(a.useState)(),y=f[0],g=f[1],w=Object(a.useState)(),v=w[0],S=w[1],O=Object(a.useState)(),j=O[0],A=O[1],I=Object(a.useState)(!1),D=I[0],M=I[1],T=Object(a.useState)(),P=T[0],_=T[1],H=Object(a.useState)(),N=H[0],R=H[1],W=Object(a.useState)(),Y=W[0],J=W[1],q=Object(a.useState)(),z=q[0],U=q[1],F=Object(a.useState)(1),B=F[0],G=F[1],L=Object(a.useState)(null),V=L[0],Q=L[1],X=Object(a.useState)(1),Z=(X[0],X[1]),K=Object(a.useState)(1),$=K[0],ee=K[1],te=Object(a.useState)(),ne=te[0],ae=te[1],le=Object(a.useState)(),re=le[0],oe=le[1],ce=Object(a.useState)(),ie=ce[0],se=ce[1],ue=Object(a.useState)(),de=ue[0],me=ue[1];return Object(a.useEffect)((function(){void 0!==ne&&(console.log("acc code 623",ne),p(i,G,V,Q))}),[ne]),Object(a.useEffect)((function(){h(t.hash,ae,oe,se,me,R),console.log("acces code set",ne)}),[t.hash]),Object(a.useEffect)((function(){console.log("recognzied",B),Z(function(e){return console.log("chain id is ",e),"0x1"===e?"Ethereum":"0x89"===e?"Polygon":"Unrecognized Chain"}(B))}),[B]),l.a.createElement(r.f,{position:"absolute",bottom:"4px",width:"100%",height:"60px"},l.a.createElement(r.h,null),l.a.createElement(o.b,null),l.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",paddingBottom:"200px"}},!1,l.a.createElement("br",null)," ",l.a.createElement("br",null),c&&re&&l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("p",null,"Welcome onboard ",l.a.createElement("b",null,re)," !")),l.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.a.createElement("img",{style:{borderRadius:"10%",boxShadow:"0 0 7px 1px"},src:"https://cdn.discordapp.com/avatars/"+ie+"/"+de+".png"}),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("br",null))),function(e,t,n,a,o,c,i,s,u,d,h,p,f,y,g,w,v,x,k,S,O,j,A,I,D,M){if(1==O)return l.a.createElement("div",null,console.log("ccc ",h),e&&"0x89"!=h&&l.a.createElement("div",null,l.a.createElement("p",{style:{textAlign:"center"}},"Chain Unsupported!",l.a.createElement("br",null),"We use Polygon/Matic chain as its much chepar to use compared to the Ethereum mainnet."),l.a.createElement("br",null),l.a.createElement(r.a,{onClick:function(){return function(){return E.apply(this,arguments)}()}},"Switch to Polygon")),l.a.createElement("br",null),e&&"0x89"==h&&t&&l.a.createElement("div",null,"Just by verifying discord you got yourself some free SHN. You can redeem them at the end. Please, continue with the next steps."),e&&"0x89"==h&&!t&&l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",{style:{textAlign:"center"}},"Your Discord Account"),l.a.createElement("br",null),l.a.createElement("p",{style:{width:900,textAlign:"left"}},"We need to pair your ETH address with your Discord account, so we can create an identity for you. This will enable contribution tracking and reward distribution process. Just by being active in the discord, you will earn some SHN tokens on weekly basis.")),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(r.a,{onClick:function(){return window.open("https://discord.com/api/oauth2/authorize?response_type=token&client_id=893462659737985114&state=15773059ghq9183habn&scope=identify&redirect_uri=https://shinedao.finance/onboarding","_self")}},"VERIFY DISCORD"))),!e&&l.a.createElement("div",{style:{textAlign:"center"}},o?l.a.createElement("div",null,' "Welcome back, please connect your wallet again" '):l.a.createElement("div",null,l.a.createElement("h2",{style:{textAlign:"center"}},"Become a contributor"),l.a.createElement("br",null),l.a.createElement("p",{style:{width:900}},"In this onboarding process we are going to set up your contributor profile, so that you can start earning SHN automatically. We will introduce you to our tool stack and share recourses that will allow you to understand how you can ",l.a.createElement("b",null,"get involved regardless of your background, skill level, or availability."),l.a.createElement("br",null),l.a.createElement("br",null)," If you’re successful in completing all of the steps, you’ll earn your first 500 SHN 🌟"))));if(2==O)return l.a.createElement("div",null,i?l.a.createElement("p",null,"Hoooray!!! You just won some more SHN. Please continue with the next steps."):l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",{style:{textAlign:"center"}},"Join ShineDAO Discord"),l.a.createElement("br",null),l.a.createElement("p",null,"If you haven’t yet, join our Discord server. This is our main communication tool. Once you read through ",l.a.createElement("b",null,"#🏁start-here channel"),", please verify.",l.a.createElement("br",null),l.a.createElement("br",null),"If you’re in the server already, you can just press verify."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(r.a,{style:{marginRight:15},onClick:function(){return window.open("https://discord.com/invite/QkhbP7bZrj","_blank")}},"JOIN DISCORD"),l.a.createElement(r.a,{style:{marginLeft:15},onClick:function(){return function(e,t,n){m.get("https://shinedaoserver.net/verifyServer?authorization="+e).then((function(e){console.log(e.data),t(250),console.log("type ",typeof e.data.userJoinedServer),1==e.data.userJoinedServer?n(!0):n(!1)})).catch((function(e){console.log("err5,",e)}))}(o,c,s)}},"VERIFY"))),l.a.createElement("br",null),l.a.createElement("br",null));if(3==O)return l.a.createElement("div",null,(void 0===u||!1===u)&&l.a.createElement("div",null,l.a.createElement("h2",{style:{textAlign:"center"}},"Introduce Yourself"),l.a.createElement("br",null),l.a.createElement("div",null,"Its time to introduce yourself in the",l.a.createElement("a",{href:"https://discord.com/channels/785582893572948060/868084312455651348",target:"_blank"},"#introductions channel"),". When you introduce yourself in the channel, come back to this page and click verify.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{style:{width:900,textAlign:"left",margin:"0 auto"}},l.a.createElement("b",null,"Please add the following info:"),l.a.createElement("br",null),l.a.createElement("b",null,"- Motivation:")," What brings you here?",l.a.createElement("br",null),l.a.createElement("b",null,"- Experience:")," (Content / Marketing / Core Contracts / Frontend/ Partnerships / UX ,...)",l.a.createElement("br",null),l.a.createElement("b",null,"- Specific Skills:")," (Copywriting, Podcasting, Java, JS, HTML, CSS, Python, Solidity, ... )",l.a.createElement("br",null),l.a.createElement("b",null,"- Where do you see yourself contributing: ")," (Product and Tech Guild / Growth Guild / Hunting Guild / Infrastructure Guild )",l.a.createElement("br",null),l.a.createElement("b",null,"- Bandwidth:")," (~10 hours / week). We'd also suggest joining our weekly community call every Monday 5:30 pm UTC."),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h4",null," Here are ShineDAO's intro resources if you need more information:"),l.a.createElement("br",null),"To be able to understand what how ShineDAO works please read our documentation",l.a.createElement("a",{href:"https://docs.shinedao.finance/",target:"_blank"},"https://docs.shinedao.finance/"),l.a.createElement("br",null),"To be able to understand how to get involved please check out our notion board",l.a.createElement("a",{href:"https://oasis-firefly-683.notion.site/ShineDAO-23d023e521934cca9d835be9f73790d7",target:"_blank"},"https://oasis-firefly-683.notion.site/ShineDAO-23d023e521934cca9d835be9f73790d7")),l.a.createElement("br",null)),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(r.a,{onClick:function(){return function(e,t,n){m.get("https://shinedaoserver.net/verifyMessage?authorization="+e).then((function(e){console.log(e.data),t(375),1==e.data.userIntroduced?n(!0):n(!1)})).catch((function(e){console.log("err5,",e)}))}(o,c,d)}},"VERIFY "))),console.log("messageVerified",u),console.log("type of message",typeof u),console.log("type of messag1e",void 0===u),!1===u&&l.a.createElement("div",null," ",l.a.createElement("br",null),l.a.createElement("p",{style:{textAlign:"center"}},"We could not detect your post. Please try again or post a message on discord by asking for help. ")),!0===u&&l.a.createElement("div",null,l.a.createElement("div",null,!p&&l.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},l.a.createElement("p",null,"Before you can claim your tokens, lets add the tokens to Metamask."),l.a.createElement(r.a,{style:{width:"200px"},onClick:function(){return function(e,t,n,a,l){return b.apply(this,arguments)}(f,O,j,c,{address:"0x53D76f967De13E7F95e90196438DCe695eCFA957",symbol:"SHN",decimals:18,image:"https://i.ibb.co/mRKYzwB/shine-logo-256.png"})}},"Add SHN to Metamask"," ")))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null));if(O=4)return l.a.createElement("div",null,p&&l.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},l.a.createElement("div",null,l.a.createElement("p",{style:{textAlign:"center"}},"Nice job! You are almost there! ",l.a.createElement("br",null)," After claiming your reward, you will be an official ShineDAO's contributor. The reward will be airdropped to your address on Polygon/Matic chain in few minutes.")),l.a.createElement("div",null,!0!==k&&!A&&l.a.createElement(r.a,{style:{width:"200px"},onClick:function(){return function(e,t,n,a,l,r,o,c,i,s){i(!0),m.get("https://shinedaoserver.net/claimReward?authorization="+e+"&address="+n+"&username="+a+"&discordId="+l+"&avatarId="+r).then((function(e){1==e.data.contributorDetected?t(!0):0==e.data.registrationSuccess?o(!0):1==e.data.registrationSuccess&&(c(!0),s(e.data.txnHash)),i(!1),console.log("claim ",e.data)})).catch((function(e){i(!1),console.log("err5,",e)}))}(o,g,w,t,n,a,x,S,I,M)}},"Claim your SHN tokens"," "),l.a.createElement("br",null),l.a.createElement("div",{style:{marginTop:20,display:"flex",flexDirection:"column",alignItems:"center"}}," ",l.a.createElement(C.a,{style:{},color:"#3f3d56",loading:A,size:15,margin:2}),A&&l.a.createElement("p",{style:{textAlign:"center"}},l.a.createElement("br",null),"This may take few minutes. Please don't close the screen."))),l.a.createElement("br",null),l.a.createElement("br",null),y&&!A&&l.a.createElement("p",{style:{textAlign:"center"}},"It seems you are already a contributor. Only people who are not contributors can become contributors."),!0===v&&l.a.createElement("p",{style:{textAlign:"center"}},"Something went wrong. Plese try again later."),!0===k&&l.a.createElement("p",{style:{textAlign:"center"}},"Congrats! Your tokens are on the way!"),D&&l.a.createElement("p",{style:{textAlign:"center"}},"Transaction hash:"," ",l.a.createElement("a",{target:"_blank",href:"https://polygonscan.com/tx/"+D},D))))}(c,re,ie,de,ne,R,Y,J,z,U,B,P,_,u,d,V,y,g,v,S,$,ee,D,M,j,A),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),!1,l.a.createElement("div",{style:{display:"flex"}},!1,function(e,t,n,a,l){return console.log("server verified ",a),1==e?t&&n&&l:2==e?t&&n&&l&&a:void 0}($,c,re,Y,"0x89"==B)&&l.a.createElement(r.a,{style:{marginLeft:15},onClick:function(){return ee($+1)}},"NEXT"," ")),!c&&l.a.createElement("div",{style:{width:"220px"}},l.a.createElement(r.b,{onClick:function(){return p(i,G,V,Q)},borderRadius:"4px",border:"1px solid white",color:"white",background:"#1E1E1E",clickable:!0,width:"100%",height:"48px",margin:"5px 0 0 0"},l.a.createElement(r.i,{fontWeight:800,color:"white"},"CONNECT WALLET"))),c&&re&&l.a.createElement("p",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Tokens earned: "),N," ",l.a.createElement("img",{style:{height:"23px"},src:x.a})," (SHN)"),c&&l.a.createElement("div",null,l.a.createElement(k.a,{style:{width:"300px"},animated:!0,striped:!0,variant:"success",now:$/4*100,label:" Step "+$}))))}}}]);
//# sourceMappingURL=component---src-pages-onboarding-js-ebfce5615ce8c8810972.js.map