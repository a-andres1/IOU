(this["webpackJsonpi-o-u"]=this["webpackJsonpi-o-u"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(20),i=n.n(s),o=(n(27),n(3)),r=n(4),l=n(2),d=(n(28),n(0));var j=function(e){return Object(d.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(d.jsx)(r.b,{className:"navbar-brand",to:"/dashboard",children:"IOU"}),Object(d.jsx)("div",{children:Object(d.jsxs)("ul",{className:"navbar-nav",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{to:"/login",className:"/"===window.location.pathname?"nav-link active":"nav-link",onClick:function(){return e.handleLogout},children:"Logout"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{to:"/dashboard",className:"/dashboard"===window.location.pathname?"nav-link active":"nav-link",children:"Dashboard"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{to:"/transaction",className:"/transaction"===window.location.pathname?"nav-link active":"nav-link",children:"Transactions"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{to:"/newcircle",className:"/newcircle"===window.location.pathname?"nav-link active":"nav-link",children:"New Circle"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{to:"/circlepage",className:"/circlepage"===window.location.pathname?"nav-link active":"nav-link",children:"Circle Page"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{to:"/invitepage",className:"/invitepage"===window.location.pathname?"nav-link active":"nav-link",children:"Invite Page"})})]})})]})};n(35);var b=function(){return Object(d.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(d.jsx)(r.b,{className:"navbar-brand",to:"/dashboard",children:"IOU"}),Object(d.jsx)("div",{children:Object(d.jsx)("ul",{className:"navbar-nav",children:Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link",children:"Login"})})})})]})},u=n(6);n(36);var h=function(e){return Object(d.jsx)("main",Object(u.a)({className:"wrapper"},e))};var m=function(e){var t=Object(l.e)(),n=Object(c.useState)({email:"",password:""}),a=Object(o.a)(n,2),s=a[0],i=a[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container col-lg-10 fs-4",children:Object(d.jsxs)("div",{className:"row align-items-center",children:[Object(d.jsx)("div",{className:"col-lg-3"}),Object(d.jsx)("div",{className:"col-lg-6",children:Object(d.jsxs)("form",{className:"p-4 p-md-5 border rounded-5 bg-info",children:[Object(d.jsxs)("div",{className:"form-floating mb-3",style:{textAlign:"center"},children:[Object(d.jsx)("h2",{style:{color:"white"},children:"Welcome to IOU"}),Object(d.jsx)("h3",{className:"mb-3",style:{color:"white"},children:"Sign in here"}),Object(d.jsx)("input",{className:"form-control",type:"email",placeholder:"Email address","aria-label":"default input example",onChange:function(e){var t=e.target.value;i(Object(u.a)(Object(u.a)({},s),{},{email:t}))}})]}),Object(d.jsx)("div",{className:"form-floating mb-3",children:Object(d.jsx)("input",{className:"form-control",type:"password",placeholder:"Password","aria-label":"default input example",onChange:function(e){var t=e.target.value;i(Object(u.a)(Object(u.a)({},s),{},{password:t}))}})}),Object(d.jsx)("div",{className:"mt-5",children:Object(d.jsx)("button",{className:"w-100 btn btn-lg btn-info",type:"submit",onClick:function(n){return function(n){n.preventDefault();var c={email:s.email,password:s.password},a=JSON.stringify(c);fetch("/api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:a}).then((function(e){return e.json()})).then((function(n){console.log(n),"Incorrect email or password, please try again"===n.message?alert(n.message):(e.handleLogin(),t.push("/dashboard"))})).catch((function(e){return console.log(e)}))}(n)},children:"Login"})})]})})]})})})};var p=function(){var e=Object(l.e)(),t=Object(c.useState)(),n=Object(o.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(),r=Object(o.a)(i,2),j=r[0],b=r[1],u=Object(c.useState)(),h=Object(o.a)(u,2),m=h[0],p=h[1],O=Object(c.useState)(),x=Object(o.a)(O,2),f=x[0],g=x[1];return Object(d.jsx)("div",{className:"container col-lg-10 fs-4",children:Object(d.jsxs)("div",{className:"row align-items-center",children:[Object(d.jsx)("div",{className:"col-lg-3"}),Object(d.jsx)("div",{className:"col-lg-6",children:Object(d.jsxs)("form",{className:"p-4 p-md-5 border rounded-5 bg-info",children:[Object(d.jsx)("div",{className:"form-floating mb-3",children:Object(d.jsx)("input",{className:"form-control",type:"text",placeholder:"First Name","aria-label":"default input example",onChange:function(e){return s(e.target.value)}})}),Object(d.jsx)("div",{className:"form-floating mb-3",children:Object(d.jsx)("input",{className:"form-control",type:"text",placeholder:"Last Name","aria-label":"default input example",onChange:function(e){return b(e.target.value)}})}),Object(d.jsx)("div",{className:"form-floating mb-3",children:Object(d.jsx)("input",{className:"form-control",type:"email",placeholder:"Email address","aria-label":"default input example",onChange:function(e){return p(e.target.value)}})}),Object(d.jsx)("div",{className:"form-floating mb-3",children:Object(d.jsx)("input",{className:"form-control",type:"password",placeholder:"Password","aria-label":"default input example",onChange:function(e){return g(e.target.value)}})}),Object(d.jsx)("div",{className:"mt-5",children:Object(d.jsx)("button",{className:"w-100 btn btn-lg btn-info",type:"submit",onClick:function(t){return function(t){t.preventDefault();var n={first_name:a,last_name:j,email:m,password:f},c=JSON.stringify(n);fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:c}).then((function(t){console.log(t),200===t.status?e.push("/dashboard"):alert("There was an error")})).catch((function(e){console.log(e)}))}(t)},id:"signUpBtn",children:"Sign Up"})})]})})]})})};var O=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{handleLogin:e.handleLogin}),Object(d.jsx)(p,{handleLogin:e.handleLogin})]})};var x=function(e){var t=Object(l.e)();return Object(c.useEffect)((function(){fetch("/api/users/authcheck",{method:"GET"}).then((function(e){console.log(e),200===e.status?console.log("200!!!"):(console.log("401!!!"),t.push("/login"))})).catch((function(e){console.log(e),t.push("/login")}))}),[]),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-lg-12",style:{width:"100%"},children:[Object(d.jsx)("div",{className:"row",style:{justifyContent:"center"},children:Object(d.jsx)("div",{className:"card text-dark bg-info mb-3",style:{maxWidth:"18rem"},children:Object(d.jsxs)("div",{className:"card-header",children:["Welcome ",e.name]})})}),Object(d.jsx)("div",{className:"row",style:{justifyContent:"center"},children:Object(d.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(e){e.preventDefault(),window.location.href="./newgroup"},children:"Create a Group"})}),Object(d.jsx)("div",{className:"row ",style:{justifyContent:"center"},children:Object(d.jsx)("div",{className:"card text-dark bg-info mb-3 rounded-circle mt-3",style:{maxWidth:"13rem",justifyContent:"center"},children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",style:{textAlign:"center"},children:"Info card title"}),Object(d.jsx)("p",{className:"card-text",style:{textAlign:"center"},children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})})}),Object(d.jsx)("div",{className:"row",style:{justifyContent:"center"},children:Object(d.jsx)("div",{className:"card text-dark bg-info mb-3",style:{maxWidth:"18rem"},children:Object(d.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(e){e.preventDefault(),window.location.href="./transaction"},children:"Transactions"})})})]})})})};var f=function(e){var t=e.userId;console.log(t);var n=Object(l.e)(),a=Object(c.useState)({circle_name:""}),s=Object(o.a)(a,2),i=s[0],r=s[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"card bg-info",style:{textAlign:"center",marginBottom:"50px"},children:Object(d.jsx)("h1",{children:"New Circle Page"})}),Object(d.jsx)("div",{className:"input-group mb-3",children:Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Circle Name","aria-label":"Enter Circle Name",onChange:function(e){var t=e.target.value;r({circle_name:t})}})}),Object(d.jsx)("button",{className:"w-20 btn btn-lg btn-info",type:"button",onClick:function(e){return function(e){e.preventDefault();var c={circle_name:i.circle_name},a=JSON.stringify(c);fetch("/api/circles",{method:"POST",headers:{"Content-Type":"application/json"},body:a}).then((function(e){return e.json()})).then((function(e){fetch("/api/usercircles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({circle_id:e.id,user_id:t})}),console.log(e),n.push("/invitepage")}))}(e)},id:"button-addon2",children:"Submit"})]})};var g=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2);return t[0],t[1],Object(c.useEffect)((function(){fetch("/api/transactions/circle/user",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"card bg-info",style:{textAlign:"center",backgroundColor:"blue",marginBottom:"50px"},children:Object(d.jsx)("h1",{children:"My Circle Page"})}),Object(d.jsxs)("div",{className:"card text-center",style:{marginBottom:"50px"},children:[Object(d.jsx)("div",{className:"card-header",children:"My Transactions"}),Object(d.jsx)("div",{className:"card-body",children:Object(d.jsx)("p",{className:"card-text",children:"Where all the transactions go"})})]}),Object(d.jsx)("label",{for:"cars",children:"Choose a Circle Name:"}),Object(d.jsxs)("select",{name:"circle",id:"circle",children:[Object(d.jsx)("option",{value:"volvo",children:"Group 1"}),Object(d.jsx)("option",{value:"saab",children:"Group 2"}),Object(d.jsx)("option",{value:"mercedes",children:"Group 3"}),Object(d.jsx)("option",{value:"audi",children:"Group 4"})]}),Object(d.jsx)("div",{className:"input-group mb-3",children:Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Payment Description","aria-label":"Enter Payment Description"})}),Object(d.jsx)("div",{className:"input-group mb-3",children:Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Payment Amount","aria-label":"Enter Payment Amount"})}),Object(d.jsx)("button",{className:"w-20 btn btn-lg btn-info",type:"button",onClick:function(e){e.preventDefault(),window.location.pathname="/transaction"},id:"button-addon2",children:"Pay Now"}),Object(d.jsx)("button",{className:"w-20 btn btn-lg btn-info",type:"button",onClick:function(e){e.preventDefault(),window.location.pathname="/invitepage"},id:"button-addon2",children:"Invite"})]})},v=n(22);var N=function(e){var t=e.data,n=e.handleCheckbox;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("p",{className:"card-text",children:[t.first_name," ",t.last_name]}),Object(d.jsx)("div",{className:"form-check",children:Object(d.jsx)("input",{className:"form-check-input",type:"checkbox",value:t.id,id:"flexCheckDefault",onClick:function(e){n(e)}})})]})})};var y=function(e){var t=e.handleCircle,n=Object(l.e)();console.log(e);var a=Object(c.useState)([]),s=Object(o.a)(a,2),i=s[0],r=s[1],j=Object(c.useState)([]),b=Object(o.a)(j,2),h=b[0],m=b[1],p=Object(c.useState)({circleID:0,users:[]}),O=Object(o.a)(p,2),x=O[0],f=O[1];function g(e){var t=Object(v.a)(x.users);t.push(e.target.value),f(Object(u.a)(Object(u.a)({},x),{},{users:t})),console.log(e.target.value)}return Object(c.useEffect)((function(){fetch("/api/users",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){r(e)})).catch((function(e){console.log(e)})),console.log(e.userId);var t="/api/circles/user/"+e.userId;console.log(t);fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),m(e),f(Object(u.a)(Object(u.a)({},x),{},{circleID:e[0].id}))})).catch((function(e){console.log(e)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"card bg-info",style:{textAlign:"center",marginBottom:"50px"},children:Object(d.jsx)("h1",{children:"Invite Page"})}),i.map((function(e){return Object(d.jsx)(N,{data:e,handleCheckbox:g})})),Object(d.jsx)("label",{for:"circle",children:"Choose a Circle Name:"}),Object(d.jsx)("select",{name:"circle",id:"circle",onChange:function(e){f(Object(u.a)(Object(u.a)({},x),{},{circleID:parseInt(e.target.value)}))},children:h.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name})}))}),Object(d.jsx)("button",{className:"w-20 btn btn-lg btn-info",type:"button",onClick:function(e){!function(e){e.preventDefault(),fetch("/api/usercircles/addUsers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(u.a)({},x))}).then((function(e){t(x.circleID),n.push("/circlepage")})).catch()}(e)},id:"button-addon2",children:"Submit"})]})};var w=function(e){var t=e.data;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"card-body",children:Object(d.jsxs)("p",{className:"card-text",children:[t.description," ",t.value," ",t.date]})})})};var C=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){fetch("/api/transactions/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(e){console.log(e)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"card bg-info",style:{textAlign:"center",marginBottom:"50px"},children:Object(d.jsx)("h1",{children:"Transactions Page"})}),Object(d.jsxs)("div",{className:"card text-center",style:{marginBottom:"50px"},children:[Object(d.jsx)("div",{className:"card-header",children:"My Transactions"}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("p",{className:"card-text",children:"Where all the transactions go"}),a.map((function(e){return Object(d.jsx)(w,{data:e})}))]})]}),Object(d.jsx)("div",{className:"input-group mb-3",children:Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Group Name","aria-label":"Enter Group Name"})}),Object(d.jsx)("label",{for:"cars",children:"Choose a Circle Name:"}),Object(d.jsxs)("select",{name:"circle",id:"circle",children:[Object(d.jsx)("option",{value:"volvo",children:"Group 1"}),Object(d.jsx)("option",{value:"saab",children:"Group 2"}),Object(d.jsx)("option",{value:"mercedes",children:"Group 3"}),Object(d.jsx)("option",{value:"audi",children:"Group 4"})]}),Object(d.jsx)("div",{className:"input-group mb-3",children:Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Payment Amount","aria-label":"Enter Payment Amount"})}),Object(d.jsx)("button",{className:"w-20 btn btn-lg btn-info",type:"button",onClick:function(e){e.preventDefault(),window.location.pathname="/transaction"},id:"button-addon2",children:"Pay Now"})]})};n(19);var k=function(e){return console.log(e),e.userState.loggedIn?Object(d.jsx)(j,{handleLogout:e.handleLogout}):Object(d.jsx)(b,{})};var I=function(){var e=Object(c.useState)({circleID:0}),t=Object(o.a)(e,2),n=t[0],a=t[1],s=function(e){a({circleID:e})},i=Object(c.useState)({loggedIn:!1,userId:0}),j=Object(o.a)(i,2),b=j[0],u=j[1],m=function(){u({loggedIn:!0})},p=Object(l.e)();Object(c.useEffect)((function(){fetch("/api/users/authcheck",{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e),u({loggedIn:!0,userId:e.userId})})).catch((function(e){console.log(e),p.push("/login")}))}),[p]);var v=function(){console.log("here"),fetch("api/users/logout",{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))};return console.log(b),Object(d.jsx)(r.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)(k,{userState:b,handleLogout:v}),Object(d.jsxs)(h,{children:[Object(d.jsx)(l.a,{exact:!0,path:["/","/dashboard"],component:x}),Object(d.jsx)(l.a,{exact:!0,path:"/login",component:function(){return Object(d.jsx)(O,{handleLogin:m,handleLogout:v})}}),Object(d.jsx)(l.a,{exact:!0,path:"/newcircle",component:function(){return Object(d.jsx)(f,{userId:b.userId})}}),Object(d.jsx)(l.a,{exact:!0,path:"/circlepage",component:function(){return Object(d.jsx)(g,{userId:b.userId,circleState:n})}}),Object(d.jsx)(l.a,{exact:!0,path:"/invitepage",component:function(){return Object(d.jsx)(y,{userId:b.userId,handleCircle:s})}}),Object(d.jsx)(l.a,{exact:!0,path:"/transaction",component:function(){return Object(d.jsx)(C,{userId:b.userId})}})]})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),S()}},[[37,1,2]]]);
//# sourceMappingURL=main.3c131953.chunk.js.map