(this.webpackJsonplab2react=this.webpackJsonplab2react||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var s=n(16),a=n.n(s),i=n(42),r=n.n(i),c=(n(47),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))}),o=n(29),l=n(13),d=(n(48),n(5)),h=(n(49),n(50),n(6));var u=function(e){var t=e.editState,n=e.show,a=e.toDelete,i=Object(s.useState)(e.task_name),r=Object(l.a)(i,2),c=r[0],o=r[1];return 0===t?Object(h.jsxs)("div",{id:"task"+e.task_id,className:"comp"+e.completed.toString()+"show"+n.toString(),children:[Object(h.jsx)("input",{type:"checkbox",id:e.task_id,name:"cb"+e.task_name,"aria-label":"checkbox for "+e.task_name,value:e.task_name,checked:e.completed&&!a,onChange:function(t){return e.handleTaskFieldChanged(t.target.id,"completed",t.target.checked)}}),Object(h.jsxs)("label",{htmlFor:e.task_name,"aria-label":e.task_name+" completed: "+e.completed.toString(),className:"taskLabel",children:[" ",e.task_name," "]}),Object(h.jsxs)("select",{name:"priorityLvl",id:"priorityLvl",value:e.priority,"aria-label":"Set priority for this task",onChange:function(t){return e.handleConfEdit2(e.task_id,t.target.value)},children:[Object(h.jsx)("option",{value:"0"}),Object(h.jsx)("option",{value:"1",children:"!"}),Object(h.jsx)("option",{value:"2",children:"!!"}),Object(h.jsx)("option",{value:"3",children:"!!!"})]}),Object(h.jsx)("button",{type:"button",id:"ed"+e.task_id,"aria-label":"edit task",onClick:function(t){return e.handleEditClick(t.target.id)},className:"edit",children:"edit "})]}):1===t?Object(h.jsxs)("div",{id:"task"+e.task_id,className:"comp"+e.completed.toString()+"show"+n.toString(),children:[Object(h.jsx)("input",{type:"checkbox",id:e.task_id,name:e.task_name,value:e.task_name,checked:e.completed}),Object(h.jsx)("input",{type:"text",id:"newTask",name:"newTask",value:c,onChange:function(e){return o(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&e.handleConfEdit(e.task_id,c)}}),Object(h.jsx)("button",{type:"button",id:e.task_id,onClick:function(t){return e.handleConfEdit(t.target.id,c)},className:"edit",children:" confirm edit "})]}):Object(h.jsxs)("div",{id:e.task_id,className:"comp"+e.completed.toString()+"show"+n.toString(),children:[Object(h.jsx)("input",{type:"checkbox",id:e.task_id,name:"cb"+e.task_name,value:e.task_name,checked:e.completed}),Object(h.jsxs)("label",{htmlFor:e.task_name,children:[" ",e.task_name," "]})]})};n(52);var j=function(e){var t=Object(s.useState)(-1),n=Object(l.a)(t,2),a=n[0],i=n[1];function r(t,n){i(-1),e.handleTaskFieldChanged(t,"task_name",n)}function c(t,n){e.handleTaskFieldChanged(t,"priority",n)}if(0===e.tasks.length)return Object(h.jsx)("div",{children:" Nothing to do!"});if(-1!==a){var o=e.tasks.map((function(t){return a.includes(t.task_id)?Object(h.jsx)(u,{className:"task",handleTaskFieldChanged:e.handleTaskFieldChanged,task_id:t.task_id,task_name:t.task_name,completed:t.completed,priority:t.priority,editState:1,show:e.showCompletedTask,handleConfEdit:r}):Object(h.jsx)(u,{handleTaskFieldChanged:e.handleTaskFieldChanged,task_id:t.task_id,task_name:t.task_name,completed:t.completed,priority:t.priority,editState:2,show:e.showCompletedTask})}));return Object(h.jsxs)("div",{id:"TaskList",children:[" ",o," "]})}var d=e.tasks.map((function(t){return Object(h.jsx)(u,{handleTaskFieldChanged:e.handleTaskFieldChanged,task_id:t.task_id,task_name:t.task_name,completed:t.completed,priority:t.priority,editState:0,show:e.showCompletedTask,toDelete:e.toDelete,handleEditClick:function(e){return i(e)},handleConfEdit2:c})}));return Object(h.jsxs)("div",{id:"TaskList",children:[" ",d," "]})};n(53);var b=function(e){var t=Object(s.useState)(e.currentList),n=Object(l.a)(t,2),a=(n[0],n[1]),i=!e.initial,r=e.taskLists.map((function(e){return Object(h.jsxs)("option",{value:e.list_id,children:[" ",e.list_name]})}));return Object(h.jsxs)("div",{className:"top",children:[Object(h.jsxs)("span",{className:"listSelection","aria-label":"List Selection Menu",children:[Object(h.jsx)("label",{htmlFor:"listSelect",children:" List:"}),Object(h.jsxs)("select",{name:"listSelect",id:"listSelect",value:e.currentList,"aria-label":"List Selection Menu",onChange:function(t){return n=t.target.value,e.handleTaskListSelect(n),void a(n);var n},children:[Object(h.jsx)("option",{value:"wow",children:" Select list "}),r]})]}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"sharedWithText",children:e.sharedWith}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"showSort"+i.toString(),children:[Object(h.jsx)("label",{htmlFor:"sortWithSelect","aria-label":"Sort by Menu",children:"Sort by:"}),Object(h.jsxs)("select",{name:"sortWithSelect","aria-label":"Sort by Menu",id:"sortWithSelect",value:e.sortVal,onChange:function(t){return e.setSort(t.target.value)},children:[Object(h.jsx)("option",{value:"default",children:"default"}),Object(h.jsx)("option",{value:"priorityAsc",children:"Lowest to Highest priority"}),Object(h.jsx)("option",{value:"priorityDesc",children:"Highest to lowest priority"})]})]})]})};n(54);var k=function(e){var t=Object(s.useState)(""),n=Object(l.a)(t,2),a=n[0],i=n[1],r=Object(s.useState)(""),c=Object(l.a)(r,2),o=c[0],d=c[1],u=Object(s.useState)("0"),j=Object(l.a)(u,2),b=j[0],k=j[1],O=Object(s.useState)(""),p=Object(l.a)(O,2),x=p[0],m=p[1],f=!e.initial;function g(){return e.handleTaskListAdded(a),i(""),""===a?Object(h.jsx)("p",{id:"taskAddMessage",role:"alert",children:"No list added due to blank entry, please try again."}):Object(h.jsxs)("p",{id:"taskAddMessage",role:"alert",children:["List ",a," successfully added!"]})}function T(){e.handleTaskAdded(o,b),d(""),k("0")}function S(){e.handleTaskListShared(x),m("")}function w(){e.handleTaskListUnShared(x),m("")}function v(t){"Enter"===t&&(e.handleTaskListShared(x),m(""))}function y(t){"Enter"===t&&(e.handleTaskAdded(o,b),d(""),k("0"))}return e.showCompletedTask?Object(h.jsxs)("div",{className:"bottom",children:[Object(h.jsxs)("div",{className:"showTask"+f.toString(),children:[Object(h.jsxs)("div",{className:"taskStuff_row1",children:[Object(h.jsx)("label",{htmlFor:"newTask",children:" New task:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",id:"newTask",name:"newTask","aria-label":"text box for new task entry",onKeyPress:function(e){return y(e.key)},onChange:function(e){return d(e.target.value)},value:o}),Object(h.jsxs)("select",{name:"priorityLvl",id:"priorityLvl","aria-label":"Set priority for new task",onChange:function(e){return k(e.target.value)},children:[Object(h.jsx)("option",{value:"0",children:"Select priority"}),Object(h.jsx)("option",{value:"0",children:"None"}),Object(h.jsx)("option",{value:"1",children:"Low"}),Object(h.jsx)("option",{value:"2",children:"Medium"}),Object(h.jsx)("option",{value:"3",children:"High"})]}),Object(h.jsx)("button",{type:"button",id:"createTask",onClick:function(){return T()},children:"Create Task"})]}),Object(h.jsx)("button",{type:"button",id:"hide",onClick:function(){return e.handleHideCompleted()},children:"Hide Completed Tasks"}),Object(h.jsx)("button",{type:"button",id:"clear",onClick:function(){return e.handleTasksDeleted()},children:"Clear Completed Tasks"})," ",Object(h.jsx)("br",{})]}),Object(h.jsxs)("div",{className:"listStuff_row1",children:[Object(h.jsx)("label",{htmlFor:"newList",children:" New List:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",id:"newList",name:"newList","aria-label":"Text box for new list entry",onKeyPress:function(t){"Enter"===t.key&&(e.handleTaskListAdded(a),i(""))},onChange:function(e){return i(e.target.value)},value:a}),Object(h.jsx)("button",{type:"button",id:"createList",onClick:function(){return g()},children:" Create List "})]}),Object(h.jsxs)("div",{className:"shareStuff",children:[Object(h.jsx)("label",{htmlFor:"shareText",className:"showTask"+f.toString()+"isOwned"+e.isOwner.toString(),children:" Share/Unshare this list with: "})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",className:"showTask"+f.toString()+"isOwned"+e.isOwner.toString(),id:"shareText",name:"shareText",onChange:function(e){return m(e.target.value)},onKeyPress:function(e){v(e.key)},value:x}),Object(h.jsx)("button",{type:"button",className:"showTask"+f.toString()+"isOwned"+e.isOwner.toString(),id:"listShare",onClick:function(){return S()},children:"Share"}),Object(h.jsx)("button",{type:"button",className:"showTask"+f.toString()+"isOwned"+e.isOwner.toString(),id:"listShare",onClick:function(){return w()},children:"Unshare"})]}),Object(h.jsx)("button",{type:"button",className:"showTask"+f.toString()+"isOwned"+e.isOwner.toString(),id:"listDelete",onClick:function(){return e.handleTaskListDeleted()},children:"Delete this list "})," ",Object(h.jsx)("br",{})]}):Object(h.jsxs)("div",{className:"bottom",children:[Object(h.jsxs)("div",{className:"showTask"+f.toString(),children:[Object(h.jsxs)("div",{className:"taskStuff_row1",children:[Object(h.jsx)("label",{htmlFor:"newTask","aria-label":"text box for new task entry",children:" New task:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text","aria-label":"text box for new task entry",id:"newTask",name:"newTask",onKeyPress:function(e){return y(e.key)},onChange:function(e){return d(e.target.value)},value:o}),Object(h.jsxs)("select",{name:"priorityLvl",id:"priorityLvl","aria-label":"Set priority for new task",onChange:function(e){return k(e.target.value)},children:[Object(h.jsx)("option",{value:"0",children:"Select priority"}),Object(h.jsx)("option",{value:"0",children:"None"}),Object(h.jsx)("option",{value:"1",children:"Low"}),Object(h.jsx)("option",{value:"2",children:"Medium"}),Object(h.jsx)("option",{value:"3",children:"High"})]}),Object(h.jsx)("button",{type:"button",id:"createTask",onClick:function(){return T()},children:" Create Task "})]}),Object(h.jsx)("button",{type:"button",id:"show",onClick:function(){return e.handleHideCompleted()},children:"Show Completed Tasks"}),Object(h.jsx)("button",{type:"button",id:"clear",onClick:function(){return e.handleTasksDeleted()},children:"Clear Completed Tasks "})," ",Object(h.jsx)("br",{})]}),Object(h.jsxs)("div",{className:"listStuff_row1",children:[Object(h.jsx)("label",{htmlFor:"newList",children:" New List:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",id:"newList",name:"newList","aria-label":"Text box for new list entry",onChange:function(e){return i(e.target.value)},value:a}),Object(h.jsx)("button",{type:"button",id:"createList",onClick:function(){return g()},children:" Create List "})]}),Object(h.jsxs)("div",{className:"shareStuff",children:[Object(h.jsx)("label",{htmlFor:"shareText",className:"showTask"+f.toString()+"isOwned"+e.isOwner.toString(),children:" Share/Unshare this list with: "})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",className:"showTask"+f.toString()+"isOwned"+e.isOwner.toString(),id:"shareText",name:"shareText",onChange:function(e){return m(e.target.value)},onKeyPress:function(e){v(e.key)},value:x}),Object(h.jsx)("button",{type:"button",className:"showTask"+f.toString()+"isOwned"+e.isOwner.toString(),id:"listShare",onClick:function(){return S()},children:"Share"}),Object(h.jsx)("button",{type:"button",className:"showTask"+f.toString()+"isOwned"+e.isOwner.toString(),id:"listShare",onClick:function(){return w()},children:"Unshare"})]}),Object(h.jsx)("button",{type:"button",className:"showTask"+f.toString()+"isOwned"+e.isOwner.toString(),id:"listDelete",onClick:function(){return e.handleTasksDeleted()},children:"Delete this list "})," ",Object(h.jsx)("br",{})]})};var O=function(e){var t=!0;if(e.loading)return e.loading&&Object(h.jsx)("h1",{children:"Loading"});if("wow"===e.currentList)return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"List of Things to Do"}),Object(h.jsx)("h5",{children:"Select a list or create a new one!"}),Object(h.jsx)(b,{currentList:e.currentList,taskLists:e.taskLists,handleTaskListSelect:e.handleTaskListSelect,setSort:e.setSort,sortPriority:e.sortPriority,sortVal:e.sortVal,sortDirection:e.sortDirection,deleteAllTasks:e.deleteAllTasks,initial:t}),Object(h.jsx)(k,{showCompletedTask:e.showCompletedTask,handleTaskListAdded:e.handleTaskListAdded,handleTaskAdded:e.handleTaskAdded,isOwner:e.isOwner,initial:t})]});if(0===e.tasks.length)return t=!1,Object(h.jsxs)("div",{className:"App",children:[e.loading&&Object(h.jsx)("h1",{children:"Loading"}),Object(h.jsx)("h1",{children:"List of Things to Do"}),Object(h.jsx)(b,{currentList:e.currentList,taskLists:e.taskLists,handleTaskListSelect:e.handleTaskListSelect,setSort:e.setSort,sortPriority:e.sortPriority,sortVal:e.sortVal,sortDirection:e.sortDirection,deleteAllTasks:e.deleteAllTasks,sharedWith:Object(h.jsxs)("p",{children:["Shared with: ",e.currentListSharedWith.map((function(e){return e+" ,"}))]}),initial:t}),Object(h.jsx)("p",{children:"Your list has no tasks"}),Object(h.jsx)(k,{showCompletedTask:e.showCompletedTask,handleTaskListAdded:e.handleTaskListAdded,handleTaskAdded:e.handleTaskAdded,handleTaskListDeleted:e.handleTaskListDeleted,handleTasksDeleted:e.handleTasksDeleted,handleHideCompleted:e.handleHideCompleted,handleTaskListShared:e.handleTaskListShared,handleTaskListUnShared:e.handleTaskListUnShared,currentListSharedWith:e.currentListSharedWith,isOwner:e.isOwner,initial:t})]});t=!1;var n=e.tasks.length;return Object(h.jsxs)("div",{className:"App",children:[e.loading&&Object(h.jsx)("h1",{children:"Loading"}),Object(h.jsx)("h1",{children:"List of Things to Do"}),Object(h.jsx)(b,{currentList:e.currentList,taskLists:e.taskLists,handleTaskListSelect:e.handleTaskListSelect,setSort:e.setSort,sortPriority:e.sortPriority,sortVal:e.sortVal,sortDirection:e.sortDirection,deleteAllTasks:e.deleteAllTasks,sharedWith:Object(h.jsxs)("span",{children:["Shared with: ",e.currentListSharedWith.map((function(e){return Object(h.jsxs)("span",{children:[e,", "]})}))]}),initial:t}),Object(h.jsxs)("p",{children:["Number of tasks: ",n+(10===n&&" (max)")]}),Object(h.jsx)(j,{handleTaskFieldChanged:e.handleTaskFieldChanged,tasks:e.tasks,setSort:e.setSort,sortPriority:e.sortPriority,sortDirection:e.sortDirection,toDelete:e.toDelete,showCompletedTask:e.showCompletedTask}),Object(h.jsx)("br",{}),Object(h.jsx)(k,{showCompletedTask:e.showCompletedTask,handleTaskListAdded:e.handleTaskListAdded,handleTaskAdded:e.handleTaskAdded,handleTaskListDeleted:e.handleTaskListDeleted,handleTasksDeleted:e.handleTasksDeleted,handleHideCompleted:e.handleHideCompleted,handleTaskListShared:e.handleTaskListShared,handleTaskListUnShared:e.handleTaskListUnShared,isOwner:e.isOwner,currentListSharedWith:e.currentListSharedWith,initial:t})]})},p=n(39),x=n(26),m=n(40);x.a.initializeApp({apiKey:"AIzaSyCcjiZC0kvbIDUuYKiskjJDrvurCA-F2g8",authDomain:"acowe-fbdb1.firebaseapp.com",projectId:"acowe-fbdb1",storageBucket:"acowe-fbdb1.appspot.com",messagingSenderId:"258279491687",appId:"1:258279491687:web:b339460be12ffae3222cc2",measurementId:"G-DQR3SH9VE5"});var f=x.a.firestore();var g=function(e){var t=e.collectionName;console.log(t);var n=f.collection(t).where("sharedWith","array-contains",e.user.email),a=Object(m.a)(n),i=Object(l.a)(a,3),r=i[0],c=i[1],u=(i[2],Object(s.useState)("wow")),j=Object(l.a)(u,2),b=j[0],k=j[1],x=Object(s.useState)([]),g=Object(l.a)(x,2),T=g[0],S=g[1],w=Object(s.useState)(!1),v=Object(l.a)(w,2),y=v[0],L=v[1],C=Object(s.useState)("default"),_=Object(l.a)(C,2),N=_[0],D=_[1],A=Object(s.useState)("place_order"),E=Object(l.a)(A,2),F=E[0],P=E[1],W=Object(s.useState)("asc"),I=Object(l.a)(W,2),U=I[0],H=I[1],K="desc"===U?f.collection(t).doc(b).collection("Tasks").orderBy(F,"desc"):f.collection(t).doc(b).collection("Tasks").orderBy(F,"asc"),V=Object(m.a)(K),M=Object(l.a)(V,3),B=M[0],z=M[1],G=(M[2],Object(s.useState)(!0)),J=Object(l.a)(G,2),Y=J[0],Q=J[1],R=Object(s.useState)(!1),Z=Object(l.a)(R,2),q=Z[0],X=Z[1],$=Object(s.useState)(""),ee=Object(l.a)($,2),te=ee[0],ne=ee[1],se=Object(s.useState)(0),ae=Object(l.a)(se,2),ie=ae[0],re=ae[1],ce=[],oe=[];function le(n){var s=e.user.email;"wow"!==n&&f.collection(t).where("sharedWith","array-contains",e.user.email).get().then((function(e){e.forEach((function(e){e.id===n&&(S(e.data().sharedWith),L(e.data().sharedWith[0]===s))}))}))}function de(e){f.collection(t).doc(e).collection("Tasks").get().then((function(n){n.forEach((function(n){f.collection(t).doc(e).collection("Tasks").doc(n.id).delete()}))}))}return r&&(ce=r.docs.map((function(e){return Object(o.a)({},e.data())}))),"wow"!==b&&B&&(oe=B.docs.map((function(e){return Object(o.a)({},e.data())}))),Object(h.jsx)("div",{children:Object(h.jsx)(O,{loading:c,taskLists:ce,taskLoading:z,tasks:oe,currentList:b,showCompletedTask:Y,handleHideCompleted:function(){return Q(!Y)},handleTaskListAdded:function(n){var s=Object(p.a)();f.collection(t).doc(s).set({list_id:s,list_name:n,sharedWith:[e.user.email],owner:e.user.uid}).catch((function(e){console.error("Error writing document: ",e)})),k(s),le(s)},handleTaskListSelect:function(e){console.log("input list id: "+e),k(e),le(e)},handleTaskListShared:function(e){f.collection(t).doc(b).update({sharedWith:T.concat([e])}).catch((function(e){console.error("Error writing document: ",e)})),le(b)},handleTaskListUnShared:function(e){f.collection(t).doc(b).update({sharedWith:T.filter((function(t){return t!==e}))}).catch((function(e){console.error("Error writing document: ",e)})),le(b)},handleTaskAdded:function(n,s){ne("");var a=Object(p.a)();re(ie+1),f.collection(t).doc(b).collection("Tasks").doc(a).set({task_id:a,task_name:n,completed:!1,priority:s,place_order:ie,sharedWith:T,owner:e.user.uid}).catch((function(e){console.error("Error writing document: ",e)}))},handleTaskFieldChanged:function(e,n,s){f.collection(t).doc(b).collection("Tasks").doc(e).update(Object(d.a)({},n,s)).catch((function(e){console.error("Error writing document: ",e)}))},handleTaskListDeleted:function(){if(ce.length>0){var e=b;"wow"===e?(console.log("A"),console.log("Please select a list to be deleted")):e===ce[0].list_id?1===ce.length?k("wow"):k(ce[1].list_id):k(ce[0].list_id),de(e),f.collection(t).doc(e).delete().catch((function(e){console.error("Error deleting document: ",e)}))}},handleTasksDeleted:function(){var e=function(){for(var e=[],t=0;t<oe.length;t++)oe[t].completed&&e.push(oe[t].task_id);return e}();X(!0);for(var n=0;n<e.length;n++)f.collection(t).doc(b).collection("Tasks").doc(e[n]).delete().catch((function(e){console.error("Error writing document: ",e)}));X(!1)},deleteAllTasks:de,setSort:function(e){D(e),"priorityAsc"===e?(P("priority"),H("asc")):"priorityDesc"===e?(P("priority"),H("desc")):(P("place_order"),H("desc"))},sortVal:N,toDelete:q,maxMessage:te,isOwner:y,currentListSharedWith:T})})},T=n(36);n(57);var S=function(e){var t=["tab-list-item"];return e.activeTab===e.label&&t.push("tab-list-active"),Object(h.jsx)("li",{className:t.join(" "),onClick:function(){return e.onClickTab(e.label)},"aria-label":e.label+" tab",children:e.label})};var w=function(e){var t=Object(s.useState)(e.children[0].key),n=Object(l.a)(t,2),a=n[0],i=n[1];return Object(h.jsxs)("div",{className:"tabs",children:[Object(h.jsx)("ol",{className:"tab-list","aria-label":"Login Tablist",children:e.children.map((function(e){return Object(h.jsx)(S,{label:e.key,activeTab:a,onClickTab:function(e){return i(e)}},e.key)}))}),e.children.find((function(e){return e.key===a}))]})};x.a.initializeApp({apiKey:"AIzaSyCcjiZC0kvbIDUuYKiskjJDrvurCA-F2g8",authDomain:"acowe-fbdb1.firebaseapp.com",projectId:"acowe-fbdb1",storageBucket:"acowe-fbdb1.appspot.com",messagingSenderId:"258279491687",appId:"1:258279491687:web:b339460be12ffae3222cc2",measurementId:"G-DQR3SH9VE5"});var v=x.a.auth(),y=new x.a.auth.GoogleAuthProvider;function L(){var e=Object(T.c)(v),t=Object(l.a)(e,4),n=t[0],a=t[1],i=t[2],r=t[3],c=Object(s.useState)(""),o=Object(l.a)(c,2),d=o[0],u=o[1],j=Object(s.useState)(""),b=Object(l.a)(j,2),k=b[0],O=b[1];if(a)return Object(h.jsx)("div",{children:"Unexpectedly signed in already"});if(i)return Object(h.jsx)("p",{children:"Logging in\u2026"});return Object(h.jsxs)("div",{className:"signIn",children:[r&&Object(h.jsxs)("p",{children:['"Error logging in: " ',r.message]}),Object(h.jsx)("input",{type:"text",id:"emailText",name:"emailText",onKeyPress:function(e){"Enter"===e.key&&""!==k&&n(d,k)},onChange:function(e){return u(e.target.value)},"aria-label":"Textbox for email entry",value:d})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",id:"passText",name:"passText",onKeyPress:function(e){"Enter"===e.key&&""!==d&&n(d,k)},onChange:function(e){return O(e.target.value)},"aria-label":"Textbox for password entry",value:k})," ",Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(){return n(d,k)},children:"Login"}),Object(h.jsx)("button",{onClick:function(){return v.signInWithPopup(y)},children:"Login with Google"})]})}function C(){var e=Object(T.b)(v),t=Object(l.a)(e,4),n=t[0],a=t[1],i=t[2],r=t[3],c=Object(s.useState)(""),o=Object(l.a)(c,2),d=o[0],u=o[1],j=Object(s.useState)(""),b=Object(l.a)(j,2),k=b[0],O=b[1];if(a)return Object(h.jsx)("div",{children:"Unexpectedly signed in already"});if(i)return Object(h.jsx)("p",{children:"Signing up\u2026"});return Object(h.jsxs)("div",{className:"signUp",children:[r&&Object(h.jsxs)("p",{children:['"Error signing up: " ',r.message]}),Object(h.jsx)("input",{type:"text",id:"emailText",name:"emailText",onKeyPress:function(e){"Enter"===e.key&&""!==k&&n(d,k)},onChange:function(e){return u(e.target.value)},"aria-label":"Textbox for user creation email entry",value:d})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",id:"passText",name:"passText",onKeyPress:function(e){"Enter"===e.key&&""!==d&&n(d,k)},onChange:function(e){return O(e.target.value)},"aria-label":"Textbox for user creation password entry",value:k})," ",Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(){return n(d,k)},children:"Create user"})]})}var _=function(e){var t=Object(T.a)(v),n=Object(l.a)(t,3),s=n[0],a=n[1],i=n[2];return a?Object(h.jsx)("p",{children:"Checking..."}):s?Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"AppInUseButton",children:[s.displayName||s.email,Object(h.jsx)("button",{type:"button",onClick:function(){return v.signOut()},children:"Logout"}),!s.emailVerified&&Object(h.jsx)("button",{type:"button",onClick:function(){v.currentUser.sendEmailVerification()},children:"Verify email"}),Object(h.jsx)("br",{})]}),Object(h.jsx)(g,Object(o.a)(Object(o.a)({},e),{},{user:s,collectionName:"TaskList-SharingAllowed"}))]}):Object(h.jsxs)(h.Fragment,{children:[i&&Object(h.jsxs)("p",{children:["Error App: ",i.message]}),Object(h.jsxs)(w,{children:[Object(h.jsx)(L,{},"Sign In"),Object(h.jsx)(C,{},"Sign Up")]})]})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root")),c()}},[[58,1,2]]]);
//# sourceMappingURL=main.6b0b9b7f.chunk.js.map