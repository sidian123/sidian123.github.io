(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{316:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},317:function(t,e,n){"use strict";function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},318:function(t,e,n){"use strict";var r=n(3),o=n(19),c=n(28),l=n(184),d=n(84),f=n(10),v=n(53).f,h=n(85).f,m=n(9).f,x=n(319).trim,y=r.Number,w=y,N=y.prototype,k="Number"==c(n(123)(N)),I="trim"in String.prototype,_=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=I?e.trim():x(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(k?f((function(){N.valueOf.call(n)})):"Number"!=c(n))?l(new w(_(e)),n,y):_(e)};for(var C,E=n(7)?v(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;E.length>A;A++)o(w,C=E[A])&&!o(y,C)&&m(y,C,h(w,C));y.prototype=N,N.constructor=y,n(11)(r,"Number",y)}},319:function(t,e,n){var r=n(6),o=n(27),c=n(10),l=n(320),d="["+l+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),h=function(t,e,n){var o={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=o[t]=d?e(m):l[t];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},m=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=h},320:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},331:function(t,e,n){var r=n(6);r(r.S,"Number",{isNaN:function(t){return t!=t}})},357:function(t,e,n){var content=n(607);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("29278448",content,!0,{sourceMap:!1})},600:function(t,e,n){"use strict";var r=n(6),o=n(601)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(130)("find")},601:function(t,e,n){var r=n(40),o=n(129),c=n(41),l=n(30),d=n(602);t.exports=function(t,e){var n=1==t,f=2==t,v=3==t,h=4==t,m=6==t,x=5==t||m,y=e||d;return function(e,d,w){for(var N,k,I=c(e),_=o(I),C=r(d,w,3),E=l(_.length),A=0,S=n?y(e,E):f?y(e,0):void 0;E>A;A++)if((x||A in _)&&(k=C(N=_[A],A,I),t))if(n)S[A]=k;else if(k)switch(t){case 3:return!0;case 5:return N;case 6:return A;case 2:S.push(N)}else if(h)return!1;return m?-1:v||h?h:S}}},602:function(t,e,n){var r=n(603);t.exports=function(t,e){return new(r(t))(e)}},603:function(t,e,n){var r=n(12),o=n(186),c=n(2)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},604:function(t,e,n){var r=n(6);r(r.S,"Number",{isInteger:n(605)})},605:function(t,e,n){var r=n(12),o=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&o(t)===t}},606:function(t,e,n){"use strict";var r=n(357);n.n(r).a},607:function(t,e,n){(t.exports=n(51)(!1)).push([t.i,".input[data-v-7b22c18c]{background-color:#fff;border-radius:4px;border:1px solid #dcdfe6;box-sizing:border-box;color:#606266;display:block;font-size:inherit;height:40px;line-height:40px;outline:none;padding:0 15px;-webkit-transition:border-color .2s cubic-bezier(.645,.045,.355,1);transition:border-color .2s cubic-bezier(.645,.045,.355,1)}.input[data-v-7b22c18c]:hover{border-color:#c0c4cc}.input[data-v-7b22c18c]:focus{border-color:#409eff}.button[data-v-7b22c18c]{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #dcdfe6;color:#606266;-webkit-appearance:none;text-align:center;box-sizing:border-box;outline:none;margin:0;-webkit-transition:.1s;transition:.1s;font-weight:500;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;padding:12px 20px;font-size:14px;border-radius:4px}@-webkit-keyframes blink-data-v-7b22c18c{0%{opacity:.5}50%{opacity:1}to{opacity:.5}}@keyframes blink-data-v-7b22c18c{0%{opacity:.5}50%{opacity:1}to{opacity:.5}}.mask[data-v-7b22c18c]{background-color:rgba(0,0,0,.4);position:fixed;top:0;left:0;right:0;bottom:0;z-index:100}.count7[data-v-7b22c18c]{width:500px;max-width:100%;min-width:60%;margin:auto}.count7 .intro[data-v-7b22c18c]{margin:1rem 0}.count7 .count-body .count7-header .header-item[data-v-7b22c18c]{display:inline-block}.count7 .count-body .count7-header .header-item .header-item-input[data-v-7b22c18c]{max-width:180px}@media screen and (max-width:575px){.count7 .count-body .count7-header .header-item[data-v-7b22c18c]{display:block}}.count7 .count-body .count7-result[data-v-7b22c18c]{display:grid;grid-template-columns:repeat(10,minmax(40px,auto));overflow:auto}.matched[data-v-7b22c18c]{color:red}",""])},622:function(t,e,n){"use strict";n.r(e);n(600),n(86),n(39),n(29),n(318),n(604),n(126),n(127);var r=n(316),o=n(317),c=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"isMatch",value:function(t){return t%7==0&&0!==t||(!!(""+t).includes("7")||void 0)}},{key:"getRange",value:function(t,e){for(var n=[],i=t;i<=e;i++)this.isMatch(i)&&n.push(i);return n}}]),t}(),l=function(t,e,n){var r=[];if(t>e)return r;for(var i=t;i<=e;i++)r.push(null==n?i:n(i));return r},d=n(327),f=new c,v={name:"Count7",components:{CommonTools:d.a},data:function(){return{start:0,end:200}},computed:{datas:function(){var t=parseInt(this.start),e=parseInt(this.end);Number.isInteger(t)||(t=0),(!Number.isInteger(e)||Number.isInteger(e)&&e<t)&&(e=t);var n=f.getRange(t,e),r=l(t-t%10,e-e%10+(e%10==0?0:10),(function(t){return{num:t,flag:!1}})),o=!0,c=!1,d=void 0;try{for(var v,h=function(){var t=v.value;r.find((function(e){return e.num===t})).flag=!0},m=n[Symbol.iterator]();!(o=(v=m.next()).done);o=!0)h()}catch(t){c=!0,d=t}finally{try{o||null==m.return||m.return()}finally{if(c)throw d}}return r}}},h=(n(606),n(26)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"count7"},[n("el-card",{staticClass:"intro"},[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n            数七作弊器\n        ")]),t._v(" "),n("div",[t._v("每个人递增喊数字, 但是对于7及7的倍数,和数字上含7的数字, 不能喊,喊了就要受惩罚.")]),t._v(" "),n("div",[t._v("这就是该应用的目的, 作弊!")])]),t._v(" "),n("el-card",{staticClass:"count-body"},[n("div",{staticClass:"count7-header",attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"header-item"},[n("span",[t._v("开始数字: ")]),n("el-input",{staticClass:"header-item-input",attrs:{placeholder:"开始数字"},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}})],1),t._v(" "),n("div",{staticClass:"header-item"},[n("span",[t._v("结束数字: ")]),n("el-input",{staticClass:"header-item-input",attrs:{placeholder:"结束数字"},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}})],1)]),t._v(" "),n("div",{staticClass:"count7-result"},t._l(t.datas,(function(e,r){return n("div",{staticClass:"result-item",class:{matched:e.flag}},[t._v("\n                "+t._s(e.num)+"\n            ")])})),0)]),t._v(" "),n("CommonTools")],1)}),[],!1,null,"7b22c18c",null);e.default=component.exports}}]);