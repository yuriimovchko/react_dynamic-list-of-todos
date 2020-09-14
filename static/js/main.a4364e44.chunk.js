(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),s=n(3),l=n(1),i=n.n(l),u=n(2),d=n(6),m=n(7),p=n(10),f=n(9),h=(n(17),n(18),n(8)),v=n.n(h),_=(n(19),function(e){var t=e.todos,n=e.checkboxChange,r=e.selectedTodoId,c=e.handleClick,o=e.todoFilter,s=e.todoFilterComplete;return a.a.createElement("div",{className:"TodoList"},a.a.createElement("h2",null,"Todos:"),a.a.createElement("input",{type:"text",onChange:function(e){return o(e.target.value)},placeholder:"Search todo"}),a.a.createElement("select",{onChange:function(e){return s(e.target.value)}},a.a.createElement("option",{value:"all"},"All"),a.a.createElement("option",{value:"completed"},"Completed"),a.a.createElement("option",{value:"active"},"Active")),a.a.createElement("div",{className:"TodoList__list-container"},a.a.createElement("ul",{className:"TodoList__list"},t.map((function(e){return a.a.createElement("li",{key:e.id,className:e.completed?"TodoList__item TodoList__item--checked":"TodoList__item TodoList__item--unchecked"},a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",checked:e.completed,onClick:function(){return n(e.id)},readOnly:!0}),a.a.createElement("p",null,e.title)),a.a.createElement("button",{className:v()("TodoList__user-button","button",{"TodoList__user-button--selected":r===e.id}),type:"button",onClick:function(){return c(e.userId,e.id)}},"User\xa0#",e.userId))})))))}),E=(n(20),function(e){var t=e.user,n=e.clear;return a.a.createElement("div",{className:"CurrentUser"},a.a.createElement("h2",{className:"CurrentUser__title"},a.a.createElement("span",null,"Selected user :\xa0",t.id)),a.a.createElement("h3",{className:"CurrentUser__name"},t.name),a.a.createElement("p",{className:"CurrentUser__email"},t.email),a.a.createElement("p",{className:"CurrentUser__phone"},t.phone),a.a.createElement("button",{type:"button",onClick:function(){return n()}},"Clear"))}),b="https://mate-api.herokuapp.com",C=function(){return fetch("".concat(b,"/todos")).then((function(e){return e.json()})).then((function(e){return e.data}))},k=function(e){return fetch("".concat(b,"/users/").concat(e)).then((function(e){return e.json()}))},U=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={todos:[],prevTodos:[],selectedUserId:void 0,selectedTodoId:null,currentUser:{},filter:"all"},e.componentDidMount=Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C();case 2:n=t.sent,e.setState({todos:n.filter((function(e){return e.title&&e.id&&e.userId}))});case 4:case"end":return t.stop()}}),t)}))),e.componentDidUpdate=Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.state.currentUser.id===e.state.selectedUserId){t.next=5;break}return t.next=3,k(e.state.selectedUserId);case 3:n=t.sent,e.updateUser(n.data);case 5:case"end":return t.stop()}}),t)}))),e.checkboxChange=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===+t?Object(s.a)(Object(s.a)({},e),{},{completed:!e.completed}):Object(s.a)({},e)}))}}))},e.handleClick=function(t,n){e.setState({selectedUserId:t,selectedTodoId:n})},e.updateUser=function(t){e.setState({currentUser:t})},e.clear=function(){e.setState({selectedUserId:void 0,selectedTodoId:null,currentUser:{}})},e.todoFilterText=function(){var t=Object(u.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C();case 2:r=t.sent,e.setState({todos:r.filter((function(e){return e.title&&e.title.includes(n)}))});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.todoFilterComplete=function(t){e.setState({filter:t})},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId,r=e.selectedTodoId,c=e.currentUser,o=e.filter,s=[];return o&&("all"===o?s=t:"completed"===o?s=t.filter((function(e){return e.completed})):"active"===o&&(s=t.filter((function(e){return!e.completed})))),a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"App__sidebar"},a.a.createElement(_,{todos:s,checkboxChange:this.checkboxChange,selectedUserId:n,selectedTodoId:r,handleClick:this.handleClick,todoFilter:this.todoFilterText,todoFilterComplete:this.todoFilterComplete})),a.a.createElement("div",{className:"App__content"},a.a.createElement("div",{className:"App__content-container"},n?a.a.createElement(E,{user:c,clear:this.clear}):"No user selected")))}}]),n}(a.a.Component);o.a.render(a.a.createElement(U,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.a4364e44.chunk.js.map