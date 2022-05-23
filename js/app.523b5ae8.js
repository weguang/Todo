(function(){"use strict";var t={9517:function(t,e,o){var n=o(8935),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"todo-container"},[o("div",{staticClass:"todo-wrap"},[o("Header",{attrs:{addTodo:t.addTodo}}),o("List",{attrs:{todos:t.todos}}),o("Footer",{attrs:{clearAllTodo:t.clearAllTodo,todos:t.todos,checkAllTodo:t.checkAllTodo}})],1)])])},r=[],i=o(8937),a=o.n(i),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-header"},[o("input",{attrs:{type:"text",placeholder:"请输入你的任务名称，按回车键确认"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add.apply(null,arguments)}}})])},l=[],u=o(562),c={name:"Header",methods:{add(t){if(!t.target.value.trim())return t.target.value="",alert("输入不能为空");const e={id:(0,u.x0)(),title:t.target.value.trim(),done:!1};this.todoObj=e,this.addTodo(e),t.target.value=""}},data(){return{todoObj:{}}},props:["addTodo"]},h=c,f=o(1001),p=(0,f.Z)(h,d,l,!1,null,"c7de199e",null),v=p.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{directives:[{name:"show",rawName:"v-show",value:0!==t.todos.length,expression:"todos.length!==0"}],staticClass:"todo-main"},[o("transition-group",{attrs:{name:"todo",appear:""}},t._l(t.todos,(function(t){return o("Item",{key:t.id,attrs:{todo:t}})})),1)],1)},b=[],k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("label",[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{change:function(e){return t.handleCheck(t.todo.id)}}}),o("span",{directives:[{name:"show",rawName:"v-show",value:!t.todo.isEdit,expression:"!todo.isEdit"}]},[t._v(t._s(t.todo.title))]),o("input",{directives:[{name:"show",rawName:"v-show",value:t.todo.isEdit,expression:"todo.isEdit"},{name:"focus",rawName:"v-focus",value:t.focusStatus,expression:"focusStatus"}],attrs:{type:"text"},domProps:{value:t.todo.title},on:{blur:function(e){return t.handleBlur(t.todo,e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleBlur(t.todo,e)}}})]),o("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.handleDelete(t.todo.id)}}},[t._v("删除")]),o("button",{directives:[{name:"show",rawName:"v-show",value:!t.focusStatus,expression:"!focusStatus"}],staticClass:"btn btn-edit",on:{click:function(e){return t.handleEdit(t.todo,e)}}},[t._v("编辑")])])},T=[],g={name:"Item",data(){return{focusStatus:!1}},props:["todo"],methods:{handleCheck(t){this.$bus.$emit("checkTodo",t)},handleDelete(t){confirm("确认删除吗👩🏻️")&&a().publish("deleteTodo",t)},handleEdit(t,e){t.hasOwnProperty("isEdit")?(t.isEdit=!0,console.log("已经有了")):(this.$set(t,"isEdit",!0),console.log("没有")),this.focusStatus=!this.focusStatus},handleBlur(t,e){if(this.todo.isEdit=this.focusStatus=!1,console.log("updataTodo",t.id,e.target.value),!e.target.value.trim())return alert("输入不能为空！");this.$bus.$emit("updataTodo",t.id,e.target.value)}}},y=g,w=(0,f.Z)(y,k,T,!1,null,"5f718d63",null),_=w.exports,A={name:"List",components:{Item:_},props:["todos"]},x=A,E=(0,f.Z)(x,m,b,!1,null,"6b30f51c",null),$=E.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],staticClass:"todo-footer"},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.isAll,expression:"isAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isAll)?t._i(t.isAll,null)>-1:t.isAll},on:{change:function(e){var o=t.isAll,n=e.target,s=!!n.checked;if(Array.isArray(o)){var r=null,i=t._i(o,r);n.checked?i<0&&(t.isAll=o.concat([r])):i>-1&&(t.isAll=o.slice(0,i).concat(o.slice(i+1)))}else t.isAll=s}}})]),o("span",[o("span",[t._v("已完成"+t._s(t.donetTotal))]),t._v(" / 全部"+t._s(t.todos.length)+" ")]),o("button",{staticClass:"btn btn-danger",on:{click:t.clearAll}},[t._v("清除已完成任务")])])},C=[],S={name:"Footer",props:["todos","checkAllTodo","clearAllTodo"],computed:{total(){return this.todos.length},donetTotal(){return this.todos.reduce(((t,e)=>t+e.done),0)},isAll:{get(){return this.donetTotal===this.total&&0!==this.total},set(t){this.checkAllTodo(t)}}},methods:{clearAll(){this.clearAllTodo()}}},N=S,Z=(0,f.Z)(N,O,C,!1,null,"3e9bb00e",null),j=Z.exports,I={name:"App",components:{Header:v,List:$,Footer:j,Header:v},methods:{addTodo(t){this.todos.unshift(t)},checkTodo(t){this.todos.forEach((e=>{e.done=e.id===t?!e.done:e.done}))},updateTodo(t,e){this.todos.forEach((o=>{o.id===t&&(o.title=e)}))},deleteTodo(t,e){this.todos=this.todos.filter((t=>e!==t.id))},checkAllTodo(t){this.todos.forEach((e=>{e.done=t}))},clearAllTodo(){this.todos=this.todos.filter((t=>!t.done))}},data(){return{msg:"欢迎梁哥🙋🏻",todos:JSON.parse(localStorage.getItem("todos"))||[]}},watch:{todos:{deep:!0,handler(t){localStorage.setItem("todos",JSON.stringify(t))}}},mounted(){this.$bus.$on("checkTodo",this.checkTodo),this.pubId=a().subscribe("deleteTodo",this.deleteTodo),this.$bus.$on("updataTodo",this.updateTodo)},beforeDestroy(){this.$bus.$off("checkTodo"),this.$bus.$off("updateTodo"),a().unsubscribe(this.pubId)}},P=I,F=(0,f.Z)(P,s,r,!1,null,null,null),H=F.exports;n.Z.config.productionTip=!1,n.Z.directive("focus",{update:function(t,{value:e}){e&&t.focus()}}),new n.Z({el:"#app",render:t=>t(H),beforeCreate(){n.Z.prototype.$bus=this}})}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=t,function(){var t=[];o.O=function(e,n,s,r){if(!n){var i=1/0;for(u=0;u<t.length;u++){n=t[u][0],s=t[u][1],r=t[u][2];for(var a=!0,d=0;d<n.length;d++)(!1&r||i>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[d])}))?n.splice(d--,1):(a=!1,r<i&&(i=r));if(a){t.splice(u--,1);var l=s();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,s,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,r,i=n[0],a=n[1],d=n[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(d)var u=d(o)}for(e&&e(n);l<i.length;l++)r=i[l],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},n=self["webpackChunkvue_zero"]=self["webpackChunkvue_zero"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(9517)}));n=o.O(n)})();
//# sourceMappingURL=app.523b5ae8.js.map