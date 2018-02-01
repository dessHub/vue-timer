webpackJsonp([1],{0:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel panel-default"},[this._m(0),this._v(" "),e("div",{staticClass:"panel-body"},[e("h1",{staticClass:"text-center"},[this._v(this._s(this.tie)+" hours")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-heading"},[e("h1",{staticClass:"text-center"},[this._v("Total Time")])])}]},n={name:"App",components:{sidebar:i("VU/8")({props:["tie"]},s,!1,null,null,null).exports},data:function(){return{totalTime:1.5}},events:{timeUpdate:function(t){this.totalTime+=parseFlaot(t.totalTime)},deleteTime:function(t){this.totalTime-=parseFloat(t.totalTime)}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"wrapper"}},[i("nav",{staticClass:"navbar navbar-default"},[i("div",{staticClass:"container"},[t._m(0),t._v(" "),i("ul",{staticClass:"nav navbar-nav"},[i("li",[i("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/time-entries"}},[t._v("Timer Entries")])],1)])])]),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"col-md-3"},[i("sidebar",{attrs:{time:t.totalTime}})],1),t._v(" "),i("div",{staticClass:"col-md-9"},[i("router-view")],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e("i",{staticClass:"glyphicon glyphicon-timer"}),this._v("\n        Vue Timer Tracker\n      ")])}]};var l=i("VU/8")(n,r,!1,function(t){i("vyB4")},null,null).exports,o=i("/ocq"),c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"jumbotron"},[e("h1",[this._v("Vue Timer Tracker")]),this._v(" "),e("p",[e("strong",[this._v("\n      Get started by "),e("router-link",{attrs:{to:"/time-entries"}},[this._v("creating a timer entry")])],1)])])},staticRenderFns:[]},m=i("VU/8")(null,c,!1,null,null,null).exports,v={data:function(){return{timeEntries:[{user:{firstName:"Ryan",lastName:"Chenkie",email:"ryanchenkie@gmail.com",image:"https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250"},comment:"first time entry",totalTime:1.5,date:"2016-04-08"}]}},methods:{deleteTimeEntry:function(t){var e=this.timeEntries.indexOf(t);window.confirm("Are you sure you want to delete this time entry?")&&(this.timeEntries.splice(e,1),this.$dispatch("deleteTime",t))}},events:{timeUpdate:function(t){return this.timeEntries.push(t),!0}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",["/log-time"!==t.$route.path?i("router-link",{staticClass:"btn btn-primary",attrs:{to:"/log-time"}},[t._v("\n    Log Time\n  ")]):t._e(),t._v(" "),"/log-time"==t.$route.path?i("div",[i("h3",[t._v("Log Time")])]):t._e(),t._v(" "),i("hr"),t._v(" "),i("router-view"),t._v(" "),i("div",{staticClass:"time-entries"},[t.timeEntries.length?t._e():i("p",[i("strong",[t._v("No time entries yet")])]),t._v(" "),i("div",{staticClass:"list-group"},t._l(t.timeEntries,function(e){return i("a",{staticClass:"list-group-item"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-2 user-details"},[i("img",{staticClass:"avatar image-circle img-responsive",attrs:{src:e.user.image}}),t._v(" "),i("p",{staticClass:"text-center"},[i("strong",[t._v("\n                "+t._s(e.user.firstName)+"\n                "+t._s(e.user.lastName)+"\n              ")])])]),t._v(" "),i("div",{staticClass:"col-sm-2 text-center time-block"},[i("h3",{staticClass:"list-group-item-text total-time"},[i("i",{staticClass:"glyphicon glyphicon-time"}),t._v("\n              "+t._s(e.totalTime)+"\n           ")]),t._v(" "),i("p",{staticClass:"label label-primary text-center"},[i("i",{staticClass:"glyphicon glyphicon-calendar"}),t._v("\n              "+t._s(e.date)+"\n           ")])]),t._v(" "),i("div",{staticClass:"col-sm-7 comment-section"},[i("p",[t._v(t._s(e.comment))])]),t._v(" "),i("div",{staticClass:"col-sm-1"},[i("button",{staticClass:"btn btn-xs btn-danger delete-button",on:{click:function(e){t.deleteTimerEntry(t.timerEntry)}}},[t._v("\n              X\n            ")])])])])}))])],1)},staticRenderFns:[]};var d=i("VU/8")(v,u,!1,function(t){i("d8fY")},null,null).exports,p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-horizontal"},[i("div",{staticClass:"form-group"},[i("div",{staticClass:"col-sm-6"},[i("label",[t._v("Date")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.timeEntry.date,expression:"timeEntry.date"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Date"},domProps:{value:t.timeEntry.date},on:{input:function(e){e.target.composing||t.$set(t.timeEntry,"date",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"col-sm-6"},[i("label",[t._v("Hours")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.timeEntry.totalTime,expression:"timeEntry.totalTime"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Hours"},domProps:{value:t.timeEntry.totalTime},on:{input:function(e){e.target.composing||t.$set(t.timeEntry,"totalTime",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"form-group"},[i("div",{staticClass:"col-sm-12"},[i("label",[t._v("Comment")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.timeEntry.comment,expression:"timeEntry.comment"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Comment"},domProps:{value:t.timeEntry.comment},on:{input:function(e){e.target.composing||t.$set(t.timeEntry,"comment",e.target.value)}}})])]),t._v(" "),i("button",{staticClass:"btn btn-primary",on:{click:t.save}},[t._v("Save")]),t._v(" "),i("router-link",{staticClass:"btn btn-danger",attrs:{to:"/time-entries"}},[t._v("Cancel")]),t._v(" "),i("hr")],1)},staticRenderFns:[]},_=i("VU/8")({data:function(){return{timeEntry:{firstName:"Ryan",lastName:"Chenkie",email:"ryanchenkie@gmail.com",image:"https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250&d=retro&r=g"}}},methods:{save:function(){var t=this.timeEntry;this.$dispatch("timeUpdate",t),this.timeEntry={}}}},p,!1,null,null,null).exports;a.a.use(o.a);var h=new o.a({routes:[{path:"/",name:"Home",component:m},{path:"/time-entries",name:"TimeEntries",component:d,children:[{path:"/log-time",name:"LogTime",component:_}]}]}),f=i("8+8L");a.a.use(o.a),a.a.use(f.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:h,components:{App:l},template:"<App/>"})},d8fY:function(t,e){},vyB4:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.60cf8ae00d74d5824850.js.map