(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{FJi0:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("1Qp6"),l=a("oR2e"),c=a("KQm4"),i=a("HaE+"),s=a("o0o1"),u=a.n(s),d=a("/19t"),m=a("zrW2"),f=a("Gi8J"),g=a.n(f),p=a("gm8Z"),h=a.n(p);function b(){return(b=Object(i.a)(u.a.mark((function e(t,a,n,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("article id ",t),a(t).then((function(e){console.log("result from voting",e),r()})).catch((function(e){console.log("error while voting",e),n(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(i.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!confirm("Are you sure that you want to delete the article")){e.next=5;break}return e.next=3,t();case 3:console.log("deleted"),a();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){var t=e.title,a=e.domain,l=e.articleId,c=e.url,i=e.userVotedAlready,s=e.createdAt,u=e.author,f=e.totalScore,p=e.setServiceError,y=e.getRankedArticles,v=e.userRoles,O=Object(n.useContext)(m.a).theme,j=Object(d.c)("voteOnArticle",{articleId:l},{autoFetch:!1}),w=j.fetch,x=(j.data,j.error),k=j.isLoading,S=Object(d.c)("deleteArticle",{articleId:l},{autoFetch:!1}),A=S.fetch;S.data,S.error,S.isLoading;Object(n.useEffect)((function(){x&&"Validation failed. Please login to continue."==x.message?p("Only authenticated users can upvote. Please try to connect your wallet"):x&&"User already voted"==x.message?p("You already voted"):x&&x&&p(x.message)}),[x]);var L=((new Date).getTime()-new Date(s).getTime())/1e3/60/60;return r.a.createElement("div",{style:{paddingLeft:10}},r.a.createElement("div",{style:{fontWeight:"bold"}},!i&&r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement(h.a,{style:{},color:"#3f3d56",loading:k,size:3,margin:2}),r.a.createElement("img",{style:{cursor:"pointer",height:18,marginRight:5},onClick:function(){return function(e,t,a,n){return b.apply(this,arguments)}(l,w,p,y)},src:g.a})),r.a.createElement(o.h,{href:c},t," "),r.a.createElement("span",{style:{fontWeight:"normal",fontSize:"small",color:"#a2a2a2"}},"(",a,") ")),r.a.createElement(o.k,{theme:O},r.a.createElement("span",{style:{fontWeight:"normal"}},parseInt(f)," points ")," ",r.a.createElement("span",null,"by")," ",r.a.createElement("span",{style:{fontWeight:"normal"}}," ",u,",")," ",r.a.createElement("span",null," submitted ",Number.parseFloat(L).toFixed(2)," hours ago "),v&&v.includes("Moderator")&&r.a.createElement("span",{onClick:function(){return function(e,t){return E.apply(this,arguments)}(A,y)},style:{fontWeight:"bold",cursor:"pointer"}},"Delete")))}var v=a("HoMr");function O(e,t){return t.totalScore-e.totalScore}function j(){var e=Object(d.b)(),t=e.authenticate,a=e.isAuthenticated,l=e.user,s=e.Moralis,m=Object(d.d)("Article"),f=m.data,g=m.error,p=m.isLoading,b=Object(d.d)("User"),E=(b.data,b.error,b.isLoading,Object(n.useState)("")),j=E[0],w=E[1],x=Object(n.useState)(""),k=x[0],S=x[1],A=Object(n.useState)(),L=A[0],F=A[1],C=Object(n.useState)(!1),R=C[0],I=C[1],W=Object(n.useState)(),D=W[0],J=W[1],U=Object(n.useState)(),z=U[0],V=U[1],P=Object(n.useState)(),T=P[0],B=P[1],G=Object(d.c)("saveArticle",{title:j,url:k},{autoFetch:!1}),H=G.fetch,M=G.data,N=G.error,Y=G.isLoading,q=Object(d.c)("onboardPreviousDataIfOldUser",{ethAddress:T},{autoFetch:!1}),K=q.fetch;q.data,q.error,q.isLoading;Object(n.useEffect)((function(){if(console.log("user 3213",l),null!==l){var e=l.get("ethAddress");console.log(" user data 321 ",e),X(),B(e)}}),[l]),Object(n.useEffect)((function(){console.log(" is authenticated ",a)}),[a]),Object(n.useEffect)((function(){void 0!==T&&(console.log("eth address data ",T),K())}),[T]);var Q=Object(d.c)("getRankedArticles",{},{autoFetch:!0}),X=Q.fetch,Z=Q.data;Q.error,Q.isLoading;Object(n.useEffect)((function(){console.log(" here are the articles ",M,typeof M),"Success"==M&&(console.log("also called"),I(!1),V("Article submitted successfully!"),w(""),S(""),X())}),[M]);var $=Object(d.c)("onboardContributor",{},{autoFetch:!1}),_=($.fetch,$.data,$.error,$.isLoading,Object(d.c)("getShnWeightedBalance",{},{autoFetch:!1})),ee=(_.fetch,_.data),te=(_.error,_.isLoading,Object(d.c)("getUserRoles",{},{autoFetch:!0})),ae=(te.fetch,te.data);te.error,te.isLoading;if(Object(n.useEffect)((function(){console.log("user roles ",ae)}),[ae]),Object(n.useEffect)((function(){console.log("isSaveArticleLoading",Y),Y&&I(!1)}),[Y]),g)return r.a.createElement("span",null,"🤯");if(p)return r.a.createElement("span",null,"🙄");function ne(){return(ne=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.User.logOut();case 2:window.location.reload(!0);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",{style:{boxShadow:"0px 3px 0px 0px",display:"flex",alignItems:"baseline",background:"rgb(250 218 94)",margin:"0 auto"}},r.a.createElement("span",null,r.a.createElement("h2",{style:{color:"rgb(54 52 54)",display:"inline",paddingLeft:10}},"Degen News"))," ",r.a.createElement("span",{style:{paddingLeft:15,paddingRight:15}},"|"),r.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){return function(e,t,a){console.log(" hello ",e),e?t(!0):a("Only vaccinated people can submit an article... 😷💉 👀  Nah, we are kidding, you actually have to be contributor. Go to the ShineDAO main page to find out what that is and to complete the onboarding."),R&&(V(),t(!R))}(a,I,J)}},"Submit"),a?r.a.createElement("span",{onClick:function(){return function(){return ne.apply(this,arguments)}()},style:{marginLeft:"auto",paddingRight:8,cursor:"pointer"}},"Log out"):r.a.createElement("div",{style:{marginLeft:"auto"}},r.a.createElement(o.a,{backgroundHover:"#45e25a",onClick:function(){return Object(v.i)(t,s)}},"Connect Wallet"))),r.a.createElement("div",null,!1,a&&r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(o.l,{fontWeight:"bold",color:"#181717",padding:"0px 0px 0px 10px"},"Welcome ",l.get("username"),", submit your most interesting DeFi news!")),r.a.createElement(h.a,{style:{},color:"#3f3d56",loading:Y,size:15,margin:10}),R&&r.a.createElement("div",{style:{paddingLeft:5}},r.a.createElement("label",{htmlFor:"title"},"Title: "),r.a.createElement("input",{value:j,onChange:function(e){return function(e,t){t(e.target.value)}(e,w)},type:"text",id:"title",name:"title"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"url"},"URL: "),r.a.createElement("input",{value:k,onChange:function(e){return function(e,t){t(e.target.value)}(e,S)},type:"text",id:"url",name:"url"}),r.a.createElement("br",null),r.a.createElement(o.a,{onClick:function(){return!Y&&H()}},"Submit")),!1,!1,!1,D&&" "+D,z&&r.a.createElement("div",{style:{paddingLeft:10}}," ",z,r.a.createElement("br",null)),N&&r.a.createElement("div",{style:{paddingLeft:10,color:"tomato"}}," Error: ",N.message," "),L&&r.a.createElement("div",null," ",L),ee&&ee.length>0&&ee.map((function(e){return r.a.createElement("div",null,"Symbol: ",e.symbol," ",e.balance)})),r.a.createElement("br",null),r.a.createElement("div",{style:{width:"100%"}},!1,Z&&0!=Z.length&&Object(c.a)(Z).sort(O).map((function(e,t){return r.a.createElement(y,{getRankedArticles:X,setServiceError:F,totalScore:e.totalScore,key:"key-"+t,author:e.author,url:e.url,createdAt:e.createdAt,articleId:e.articleId,title:e.title,domain:e.domain,userVotedAlready:e.userVotedAlready,userRoles:ae})})))),console.log("type of articles",f.length),!1,!1,!1,!1,!1)}t.default=function(e){e.location;return r.a.createElement(d.a,{appId:"jTkB07PzkYA1pq8KpEaR3oDOApdmSpgJeCSXgJYF",serverUrl:"https://fsnbzd9rxwph.usemoralis.com:2053/server"},r.a.createElement(o.f,{position:"absolute",bottom:"4px",width:"100%",height:"60px"},r.a.createElement(o.j,null),r.a.createElement(l.b,null),r.a.createElement(o.i,{width:"90%",background:"whitesmoke",style:{display:"flex",alignItems:"center",flexDirection:"column",paddingBottom:"200px"}},r.a.createElement(j,null))))}},Gi8J:function(e,t,a){e.exports=a.p+"static/upVote-59be2780a357ad49191ef4a6e5b67d8f.png"}}]);
//# sourceMappingURL=component---src-pages-news-js-e11d6859617b8911ed2b.js.map