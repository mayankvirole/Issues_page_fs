(function(){"use strict";var e={1175:function(e,t,s){var n=s(144),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],a=s(1001),o={},u=(0,a.Z)(o,r,i,!1,null,null,null),l=u.exports,c=s(8345),d=function(){var e=this,t=e._self._c;return t("div",[t("nav",{staticClass:"navbar navbar-expand-lg navbar-dark navi"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"home",attrs:{to:"/home"}},[e._v("Issues Page")]),t("ul",{staticClass:"navbar-nav"},[t("li",{staticClass:"user-tag nav-item active"},[e._v("Hi! "+e._s(e.user.name))]),t("li",{staticClass:"nav-item active"},[t("a",{staticClass:"logout",on:{click:e.logUserOut}},[e._v(" Logout")])])])],1)]),t("section",[t("div",{staticClass:"container"},[t("div",{staticClass:"issue-container"},[t("ul",[t("li",[t("h3",[t("span",{class:{"active-pane":!e.toggleIssues,inactive:e.toggleIssues},on:{click:e.toggle}},[e._v("All Issues")])])]),t("li",[t("h3",[t("span",{class:{"active-pane":e.toggleIssues,inactive:!e.toggleIssues},on:{click:e.toggle}},[e._v("My Issues")])])])]),e.toggleIssues?e._e():t("div",e._l(e.issues,(function(s){return t("div",{key:s._id,staticClass:"issue"},[t("router-link",{staticClass:"link",attrs:{to:"/Issue?id="+s._id}},[t("h4",[e._v(e._s(s.title))])]),t("p",[e._v("Created By "+e._s(s.author.username)+" at "+e._s(s.createdAt.substring(0,10)))])],1)})),0),e.toggleIssues?t("div",e._l(e.myIssues,(function(n){return t("div",{key:n._id,staticClass:"issue"},[t("div",[t("router-link",{staticClass:"link",attrs:{to:"/Issue?id="+n._id}},[t("h4",[e._v(e._s(n.title))])]),t("p",[e._v("Created at "+e._s(n.createdAt.substring(0,10)))])],1),t("div",{staticClass:"icons"},[t("span",{staticClass:"del-span",on:{click:function(t){return e.deleteIssue(`${n._id}`)}}},[t("img",{staticClass:"del",attrs:{src:s(9936)}})]),t("span",{staticClass:"edit-span"},[t("router-link",{staticClass:"bton",attrs:{to:"/edit-issue?id="+n._id}},[t("img",{staticClass:"edit",attrs:{src:s(8518)}})])],1)])])})),0):e._e()])])]),t("div",{staticClass:"container"},[t("div",{staticClass:"issue-container"},[t("router-link",{staticClass:"bton",attrs:{to:"/create_issue"}},[e._v("+ New Issue")])],1)])])},f=[],p=(s(7658),s(6040)),g=s.n(p),h=s(6737),m=s.n(h),v={data(){return{user:{},issues:[],myIssues:[],toggleIssues:!1}},methods:{getUserDetails(){let e=localStorage.getItem("jwt"),t=g().decode(e);this.user=t},logUserOut(){localStorage.removeItem("jwt"),this.$router.push("/")},toggle(){this.toggleIssues=!this.toggleIssues},async getAllIssues(){try{let e=await this.$http.get("/issue/all-issues");e.data&&(this.issues=e.data.Issues)}catch(e){let t=e.response;409==t.status?m()("Error",t.data.message,"error"):m()("Error",t.data.err.message,"error")}},async getMyIssues(){try{let e=await this.$http.post("/issue/my-issues",{username:this.user.name});e.data.Issues.length>=1&&(this.myIssues=e.data.Issues)}catch(e){console.log(e)}},async deleteIssue(e){try{console.log("title : ",e);let t=await this.$http.delete(`/issue/delete-issue?id=${e}`);201===t.status&&this.getMyIssues()}catch(t){console.log(t.message)}}},created(){this.getUserDetails(),this.getAllIssues(),this.getMyIssues()}},b=v,y=(0,a.Z)(b,d,f,!1,null,null,null),_=y.exports,C=function(){var e=this,t=e._self._c;return t("div",{staticClass:"create-issue"},[t("create_issue")],1)},I=[],w=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-6 offset-lg-3 col-sm-10 offset-sm-1 ci"},[t("h1",{staticClass:"text-center"},[e._v("Create a new Issue")]),t("form",{staticClass:"border border-primary p-5",on:{submit:function(t){return t.preventDefault(),e.handleSubmitForm.apply(null,arguments)}}},[t("label",{attrs:{for:"title"}},[e._v("Title ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.issue.title,expression:"issue.title"}],staticClass:"form-control",attrs:{type:"text",name:"title",id:"title",required:"",placeholder:"Enter issue title"},domProps:{value:e.issue.title},on:{input:function(t){t.target.composing||e.$set(e.issue,"title",t.target.value)}}}),t("label",{attrs:{for:"desc"}},[e._v("Description")]),t("editor",{attrs:{"api-key":"x2wa24yd18evrl913zegfr0p5t0d37jbprlqo1jyt2sk8clw",plugins:"code lists",id:"desc","output-format":"text",init:{selector:"#desc",branding:!1,height:300,placeholder:"Describe your issue in detail here."}},model:{value:e.issue.desc,callback:function(t){e.$set(e.issue,"desc",t)},expression:"issue.desc"}}),t("label",{attrs:{for:"image"}},[e._v(" Related Image : ")]),t("input",{attrs:{type:"file",name:"image",id:"image"},on:{change:e.handleUpload}}),t("center",[t("button",{staticClass:"btn btn-primary btn-block w-50 my-4",attrs:{type:"submit"}},[e._v("Create Issue")])])],1)])])])},k=[],x=s(396),j={data(){return{issue:{title:"",desc:"",author:{id:"",username:""},image:null}}},methods:{async handleSubmitForm(){try{let e=await this.$http.post("/issue/create-issue",this.issue);console.log(this.issue,"this is our issue"),e.data&&(m()("Success","Issue was created","success"),this.$router.push("/home"))}catch(e){let t=e.response;409==t.status?m()("Error",t.data.message,"error"):m()("Error",t.data.err.message,"error")}},generateAuth(){let e=localStorage.getItem("jwt"),t=g().decode(e);this.issue.author.id=t._id,this.issue.author.username=t.name},handleUpload(){this.issue.image=event.target.files[0]}},components:{editor:x.Z},created(){this.generateAuth()}},A=j,E=(0,a.Z)(A,w,k,!1,null,null,null),O=E.exports,S={components:{create_issue:O}},P=S,Z=(0,a.Z)(P,C,I,!1,null,null,null),$=Z.exports;n.ZP.use(c.ZP);const T=[{path:"/home",name:"home",component:_,meta:{requiresAuth:!0}},{path:"/",name:"login",component:()=>s.e(560).then(s.bind(s,6560))},{path:"/register",name:"register",component:()=>s.e(345).then(s.bind(s,3345))},{path:"/create_issue",name:"create_issue",component:$},{path:"/Issue",name:"display_issue",component:()=>s.e(692).then(s.bind(s,4692))},{path:"/edit-issue",name:"edit-issue",component:()=>s.e(522).then(s.bind(s,3522))}],N=new c.ZP({mode:"history",base:"/",routes:T});N.beforeEach(((e,t,s)=>{e.matched.some((e=>e.meta.requiresAuth))&&null==localStorage.getItem("jwt")?s({path:"/"}):s()}));var U=N,D=s(594);const L=D.Z.create({baseURL:"/"});n.ZP.prototype.$http=L,n.ZP.config.productionTip=!1,new n.ZP({router:U,render:e=>e(l)}).$mount("#app")},9936:function(e,t,s){e.exports=s.p+"img/delete.b2059be2.png"},8518:function(e,t,s){e.exports=s.p+"img/edit.fdcbae7f.png"}},t={};function s(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,s),i.exports}s.m=e,function(){var e=[];s.O=function(t,n,r,i){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],i=e[c][2];for(var o=!0,u=0;u<n.length;u++)(!1&i||a>=i)&&Object.keys(s.O).every((function(e){return s.O[e](n[u])}))?n.splice(u--,1):(o=!1,i<a&&(a=i));if(o){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,r,i]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,n){return s.f[n](e,t),t}),[]))}}(),function(){s.u=function(e){return"js/"+e+"."+{345:"5dcf0a38",522:"d8ca6ab8",560:"b223e9e0",692:"d40a92c5"}[e]+".js"}}(),function(){s.miniCssF=function(e){return"css/"+e+"."+{345:"3d39350c",560:"fea2261e",692:"277ca7f1"}[e]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="issues_page:";s.l=function(n,r,i,a){if(e[n])e[n].push(r);else{var o,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+i){o=d;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",t+i),o.src=n),e[n]=[r];var f=function(t,s){o.onerror=o.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(e){return e(s)})),t)return t(s)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,s,n,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(s){if(i.onerror=i.onload=null,"load"===s.type)n();else{var a=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=o,i.parentNode.removeChild(i),r(u)}};return i.onerror=i.onload=a,i.href=t,s?s.parentNode.insertBefore(i,s.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var s=document.getElementsByTagName("link"),n=0;n<s.length;n++){var r=s[n],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){r=a[n],i=r.getAttribute("data-href");if(i===e||i===t)return r}},n=function(n){return new Promise((function(r,i){var a=s.miniCssF(n),o=s.p+a;if(t(a,o))return r();e(n,o,null,r,i)}))},r={143:0};s.f.miniCss=function(e,t){var s={345:1,560:1,692:1};r[e]?t.push(r[e]):0!==r[e]&&s[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};s.f.j=function(t,n){var r=s.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(s,n){r=e[t]=[s,n]}));n.push(r[2]=i);var a=s.p+s.u(t),o=new Error,u=function(n){if(s.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",o.name="ChunkLoadError",o.type=i,o.request=a,r[1](o)}};s.l(a,u,"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,a=n[0],o=n[1],u=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in o)s.o(o,r)&&(s.m[r]=o[r]);if(u)var c=u(s)}for(t&&t(n);l<a.length;l++)i=a[l],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(c)},n=self["webpackChunkissues_page"]=self["webpackChunkissues_page"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(1175)}));n=s.O(n)})();
//# sourceMappingURL=app.ceaa1b2e.js.map