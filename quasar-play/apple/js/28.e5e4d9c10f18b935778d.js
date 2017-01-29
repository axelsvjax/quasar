webpackJsonp([28,96],{202:function(e,t,o){var i=o(116)(o(273),o(411),null,null);e.exports=i.exports},273:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{position:"bottom",reverse:!1,size:8,color:"#e21b0c",timeouts:[]}},computed:{computedSize:function(){return this.size+"px"}},methods:{trigger:function(){var e=this;this.$refs.bar.start(),setTimeout(function(){e.$refs.bar&&e.$refs.bar.stop()},5e3*Math.random()+2e3)}}}},411:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("q-ajax-bar",{ref:"bar",attrs:{position:e.position,reverse:e.reverse,size:e.computedSize,color:e.color}}),e._v(" "),o("div",{staticClass:"layout-padding",staticStyle:{"max-width":"600px"}},[o("p",{staticClass:"caption"},[e._v("Ajax Bar component captures Ajax calls automatically. This page here triggers events manually for demonstrating purposes only.")]),e._v(" "),o("div",{staticClass:"card",staticStyle:{"margin-top":"25px"}},[o("div",{staticClass:"card-title bg-primary text-center"},[o("button",{staticClass:"orange push",on:{click:function(t){e.trigger()}}},[e._v("Trigger Event")])]),e._v(" "),o("p",{staticClass:"caption text-center"},[e._v("Try out some combinations for Ajax Bar.")]),e._v(" "),o("div",{staticClass:"card-content group column"},[o("div",{staticClass:"auto column items-center"},[o("div",{staticClass:"flex"},[o("div",{staticClass:"column group"},[o("label",[o("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{val:"top"},domProps:{value:e.position},on:{input:function(t){e.position=t}}}),e._v("\n                Top\n              ")],1),e._v(" "),o("label",[o("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{val:"bottom"},domProps:{value:e.position},on:{input:function(t){e.position=t}}}),e._v("\n                Bottom\n              ")],1)]),e._v(" "),o("div",{staticClass:"column group"},[o("label",[o("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{val:"right"},domProps:{value:e.position},on:{input:function(t){e.position=t}}}),e._v("\n                Right\n              ")],1),e._v(" "),o("label",[o("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{val:"left"},domProps:{value:e.position},on:{input:function(t){e.position=t}}}),e._v("\n                Left\n              ")],1)])])]),e._v(" "),o("div",{staticClass:"row justify-center",staticStyle:{"margin-top":"15px"}},[o("label",{staticStyle:{"white-space":"nowrap"}},[o("q-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.reverse,expression:"reverse"}],domProps:{value:e.reverse},on:{input:function(t){e.reverse=t}}}),e._v("\n            Reverse Direction\n          ")],1)]),e._v(" "),o("div",[o("span",[e._v("Size ("),o("em",[e._v(e._s(e.size)+"px")]),e._v(")")]),e._v(" "),o("q-range",{directives:[{name:"model",rawName:"v-model",value:e.size,expression:"size"}],staticStyle:{"margin-top":"25px"},attrs:{min:2,max:20,"label-always":""},domProps:{value:e.size},on:{input:function(t){e.size=t}}})],1),e._v(" "),o("div",{staticClass:"auto column items-center"},[o("div",{staticClass:"flex"},[o("div",{staticClass:"floating-label"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.color,expression:"color"}],attrs:{required:""},domProps:{value:e._s(e.color)},on:{input:function(t){t.target.composing||(e.color=t.target.value)}}}),e._v(" "),o("label",[e._v("Color")])])])])])])])],1)},staticRenderFns:[]}}});