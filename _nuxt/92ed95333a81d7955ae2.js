(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{315:function(t,n,e){"use strict";function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return o}))},319:function(t,n){var e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(e){var o=new Uint8Array(16);t.exports=function(){return e(o),o}}else{var r=new Array(16);t.exports=function(){for(var t,i=0;i<16;i++)0==(3&i)&&(t=4294967296*Math.random()),r[i]=t>>>((3&i)<<3)&255;return r}}},320:function(t,n){for(var e=[],i=0;i<256;++i)e[i]=(i+256).toString(16).substr(1);t.exports=function(t,n){var i=n||0,o=e;return[o[t[i++]],o[t[i++]],o[t[i++]],o[t[i++]],"-",o[t[i++]],o[t[i++]],"-",o[t[i++]],o[t[i++]],"-",o[t[i++]],o[t[i++]],"-",o[t[i++]],o[t[i++]],o[t[i++]],o[t[i++]],o[t[i++]],o[t[i++]]].join("")}},325:function(t,n,e){"use strict";function o(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function r(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}e.d(n,"a",(function(){return r}))},329:function(t,n,e){var o=e(319),r=e(320);t.exports=function(t,n,e){var i=n&&e||0;"string"==typeof t&&(n="binary"===t?new Array(16):null,t=null);var c=(t=t||{}).random||(t.rng||o)();if(c[6]=15&c[6]|64,c[8]=63&c[8]|128,n)for(var l=0;l<16;++l)n[i+l]=c[l];return n||r(c)}},352:function(t,n,e){var content=e(591);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(52).default)("483850c4",content,!0,{sourceMap:!1})},590:function(t,n,e){"use strict";var o=e(352);e.n(o).a},591:function(t,n,e){(t.exports=e(51)(!1)).push([t.i,".input[data-v-05a2cfa2]{background-color:#fff;border-radius:4px;border:1px solid #dcdfe6;box-sizing:border-box;color:#606266;display:block;font-size:inherit;height:40px;line-height:40px;outline:none;padding:0 15px;-webkit-transition:border-color .2s cubic-bezier(.645,.045,.355,1);transition:border-color .2s cubic-bezier(.645,.045,.355,1)}.input[data-v-05a2cfa2]:hover{border-color:#c0c4cc}.input[data-v-05a2cfa2]:focus{border-color:#409eff}.button[data-v-05a2cfa2]{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #dcdfe6;color:#606266;-webkit-appearance:none;text-align:center;box-sizing:border-box;outline:none;margin:0;-webkit-transition:.1s;transition:.1s;font-weight:500;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;padding:12px 20px;font-size:14px;border-radius:4px}@-webkit-keyframes blink-data-v-05a2cfa2{0%{opacity:.5}50%{opacity:1}to{opacity:.5}}@keyframes blink-data-v-05a2cfa2{0%{opacity:.5}50%{opacity:1}to{opacity:.5}}.mask[data-v-05a2cfa2]{background-color:rgba(0,0,0,.4);position:fixed;top:0;left:0;right:0;bottom:0;z-index:100}.manager-container[data-v-05a2cfa2]{width:500px;max-width:100%;min-width:60%;margin:auto}.manager-container>.sub-container[data-v-05a2cfa2]{margin-top:2rem}.manager-container .action-group[data-v-05a2cfa2]{text-align:center}.manager-container .action-group .action-item[data-v-05a2cfa2]{margin-bottom:1rem}",""])},608:function(t,n,e){"use strict";e.r(n);var o=e(123),r=e(53),c=e.n(r),l=e(314),d={name:"Manager",components:{CommonTools:e(331).a},head:{title:"后台管理"},data:function(){return{actions:[{title:"重新部署",api:"".concat(o.a,"/app/reDeploy")},{title:"修复数据库",api:"".concat(o.a,"/app/correct/post")},{title:"更新数据库",api:"".concat(o.a,"/repo/init/all")},{title:"清空缓存",api:"".concat(o.a,"/redis/flush/all")},{title:"关闭客户端",api:"".concat(o.b,"/app/exit")},{title:"切换自动部署状态",api:"".concat(o.a,"/app/toggle/autoDeploy")}],status:null}},created:function(){this.updateAppStatus()},methods:{handleActionClick:function(t){c.a.get(t).then((function(t){var data=t.data,n="已发送请求";""!==data&&(n+=",返回数据:"+data),l.a.tip(n)})),this.updateAppStatus()},updateAppStatus:function(){var t=this;c.a.get("/app/get/status").then((function(n){var data=n.data;t.status=data}))}}},f=(e(590),e(26)),component=Object(f.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"manager-container"},[e("el-card",{staticClass:"action-container sub-container"},[e("div",{attrs:{slot:"header"},slot:"header"},[t._v("操作")]),t._v(" "),e("div",{staticClass:"action-group"},t._l(t.actions,(function(n,o){return e("div",{key:o,staticClass:"action-item"},[e("el-button",{on:{click:function(e){return t.handleActionClick(n.api)}}},[t._v(t._s(n.title))])],1)})),0)]),t._v(" "),null!=t.status?e("el-card",{staticClass:"app-status-container sub-container"},[e("div",{attrs:{slot:"header"},slot:"header"},[t._v("应用状态")]),t._v(" "),e("div",{staticClass:"app-status"},[e("div",[t._v("环境:"+t._s(t.status.name))]),t._v(" "),e("div",[t._v("是否自动部署:"+t._s(t.status.autoDeploy))])])]):t._e(),t._v(" "),e("CommonTools")],1)}),[],!1,null,"05a2cfa2",null);n.default=component.exports}}]);