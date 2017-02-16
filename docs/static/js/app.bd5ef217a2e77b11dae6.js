webpackJsonp([0,2],[,,function(t,e,r){"use strict";var n=r(10),o=r.n(n),i=function(){var t=localStorage.getItem("groceries");return null===t?a():JSON.parse(t)},a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return localStorage.setItem("groceries",o()(t)),t},s=function(t){var e=i();return t.id=c(),e.push(t),a(e)},c=function(){var t=i(),e=t[t.length-1];return void 0===e?1:e.id+1};e.a={getGroceries:i,setGroceries:a,addGrocery:s}},function(t,e,r){"use strict";var n=r(1),o=r.n(n),i=r(21),a=r.n(i),s=r(16),c=r.n(s),u=r(15),d=r.n(u);o.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"pantry",component:d.a},{path:"/pending",name:"pending",component:c.a}]})},function(t,e){},function(t,e,r){r(13);var n=r(0)(r(6),r(20),null,null);t.exports=n.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{newGrocery:{}}},methods:{onClick:function(){this.newGrocery.quantity=0,this.$emit("groceryAdded",this.newGrocery),this.newGrocery={}}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(2);e.default={data:function(){return{groceries:[]}},mounted:function(){this.groceries=n.a.getGroceries()},computed:{pantryGroceries:function(){return this.groceries.filter(function(t){return t.quantity>0})}},methods:{decreaseQuantity:function(t){t.quantity--,n.a.setGroceries(this.groceries)},increaseQuantity:function(t){t.quantity++,n.a.setGroceries(this.groceries)}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(14),o=r.n(n),i=r(2);e.default={components:{AddGrocery:o.a},data:function(){return{groceries:[]}},mounted:function(){this.groceries=i.a.getGroceries()},computed:{pendingGroceries:{cache:!1,get:function(){return this.groceries.filter(function(t){return t.quantity<t.reOrderPoint&&(void 0===t.onCart||t.onCart<=0)})}},cartGroceries:{cache:!1,get:function(){return this.groceries.filter(function(t){return t.onCart>0})}}},methods:{groceryAdded:function(t){this.groceries=i.a.addGrocery(t)},addtoCart:function(t){var e=this.groceries.find(function(e){return e.id===t.id});e.onCart=t.onCart},saveCart:function(){this.groceries=this.groceries.map(function(t){return t.quantity+=0|t.onCart,delete t.onCart,t}),i.a.setGroceries(this.groceries)}}}},,,,function(t,e){},function(t,e,r){var n=r(0)(r(7),r(19),null,null);t.exports=n.exports},function(t,e,r){var n=r(0)(r(8),r(17),null,null);t.exports=n.exports},function(t,e,r){var n=r(0)(r(9),r(18),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row text-right"},[r("router-link",{staticClass:"btn btn-primary",attrs:{to:"/pending"}},[t._v("Go to pending!")])],1),t._v(" "),r("div",{staticClass:"row jumbotron"},[t.pantryGroceries.length>0?r("div",[r("h3",[t._v("Items on pantry")]),t._v(" "),r("hr"),t._v(" "),r("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),r("tbody",t._l(t.pantryGroceries,function(e){return r("tr",{class:{danger:e.quantity<e.reOrderPoint}},[r("td",[t._v("\n                            "+t._s(e.name)+"\n                        ")]),t._v(" "),r("td",[r("button",{staticClass:"btn btn-danger",on:{click:function(r){t.decreaseQuantity(e)}}},[t._v("-")]),t._v(" "),r("span",[t._v(" "+t._s(e.quantity)+" ")]),t._v(" "),r("button",{staticClass:"btn btn-success",on:{click:function(r){t.increaseQuantity(e)}}},[t._v("+")])]),t._v(" "),r("td",[t._v("\n                            "+t._s(e.reOrderPoint)+"\n                        ")])])}))])]):t._e(),t._v(" "),t.pantryGroceries.length<=0?r("div",[r("p",[t._v("No items on pantry.")])]):t._e()])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Quantity")]),t._v(" "),r("th",[t._v("Re-Order Point")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row text-right"},[r("router-link",{staticClass:"btn btn-primary",attrs:{to:"/"}},[r("i",{staticClass:"glyphicon glyphicon-arrow-left"}),t._v(" Go to Pantry!")])],1),t._v(" "),r("div",{staticClass:"row jumbotron"},[r("AddGrocery",{on:{groceryAdded:t.groceryAdded}})],1),t._v(" "),t.pendingGroceries.length>0?r("div",{staticClass:"row jumbotron"},[r("h3",[t._v("Pending items")]),t._v(" "),r("hr"),t._v(" "),r("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),r("tbody",t._l(t.pendingGroceries,function(e){return r("tr",[r("td",[t._v("\n                        "+t._s(e.name)+"\n                    ")]),t._v(" "),r("td",[t._v("\n                        "+t._s(e.quantity)+"\n                    ")]),t._v(" "),r("td",[t._v("\n                        "+t._s(e.reOrderPoint)+"\n                    ")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.onCart,expression:"grocery.onCart"}],attrs:{type:"number"},domProps:{value:t._s(e.onCart)},on:{blur:[function(r){t.addtoCart(e)},function(e){t.$forceUpdate()}],input:function(r){r.target.composing||(e.onCart=t._n(r.target.value))}}})])])}))])]):t._e(),t._v(" "),t.cartGroceries.length>0?r("div",{staticClass:"row jumbotron"},[r("h3",[t._v("Cart")]),t._v(" "),r("hr"),t._v(" "),r("table",{staticClass:"table table-striped"},[t._m(1),t._v(" "),r("tbody",t._l(t.cartGroceries,function(e){return r("tr",[r("td",[t._v("\n                        "+t._s(e.name)+"\n                    ")]),t._v(" "),r("td",[t._v("\n                        "+t._s(e.quantity)+"\n                    ")]),t._v(" "),r("td",[t._v("\n                        "+t._s(e.reOrderPoint)+"\n                    ")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.onCart,expression:"grocery.onCart"}],attrs:{type:"number"},domProps:{value:t._s(e.onCart)},on:{blur:[function(r){t.addtoCart(e)},function(e){t.$forceUpdate()}],input:function(r){r.target.composing||(e.onCart=t._n(r.target.value))}}})])])}))]),t._v(" "),r("button",{staticClass:"btn btn-success",on:{click:function(e){e.preventDefault(),t.saveCart(e)}}},[t._v("Save cart!")])]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Quantity")]),t._v(" "),r("th",[t._v("Re-Order Point")]),t._v(" "),r("th",[t._v("Add to cart")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Quantity")]),t._v(" "),r("th",[t._v("Re-Order Point")]),t._v(" "),r("th",[t._v("Added to cart")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",[t._v("Add new item")]),t._v(" "),r("hr"),t._v(" "),r("form",{staticClass:"form-inline"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Name:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newGrocery.name,expression:"newGrocery.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t._s(t.newGrocery.name)},on:{input:function(e){e.target.composing||(t.newGrocery.name=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"reOrderPoint"}},[t._v("Re-order point:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newGrocery.reOrderPoint,expression:"newGrocery.reOrderPoint"}],staticClass:"form-control",attrs:{type:"number",id:"reOrderPoint"},domProps:{value:t._s(t.newGrocery.reOrderPoint)},on:{input:function(e){e.target.composing||(t.newGrocery.reOrderPoint=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),r("button",{staticClass:"btn btn-success",attrs:{type:"submit"},on:{click:function(e){e.preventDefault(),t.onClick(e)}}},[t._v("Add grocery")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container theme-showcase"},[t._m(0),t._v(" "),r("router-view")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row jumbotron customHeader"},[r("h1",[t._v("Groceries Manager")])])}]}},,,,function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1),o=r.n(n),i=r(5),a=r.n(i),s=r(3),c=r(4);r.n(c);new o.a({el:"#app",router:s.a,render:function(t){return t(a.a)}})}],[24]);
//# sourceMappingURL=app.bd5ef217a2e77b11dae6.js.map