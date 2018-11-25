(function(){'use strict';
var e="object"===typeof __ScalaJSEnv&&__ScalaJSEnv?__ScalaJSEnv:{},h="object"===typeof e.global&&e.global?e.global:"object"===typeof global&&global&&global.Object===Object?global:this;e.global=h;e.exportsNamespace="object"===typeof e.exportsNamespace&&e.exportsNamespace?e.exportsNamespace:h;h.Object.freeze(e);var m={envInfo:e,semantics:{asInstanceOfs:2,arrayIndexOutOfBounds:2,moduleInit:2,strictFloats:!1,productionMode:!0},assumingES6:!1,linkerVersion:"0.6.25",globalThis:this};h.Object.freeze(m);
h.Object.freeze(m.semantics);var n=h.Math.imul||function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0},p=h.Math.clz32||function(a){if(0===a)return 32;var b=1;0===(a&4294901760)&&(a<<=16,b+=16);0===(a&4278190080)&&(a<<=8,b+=8);0===(a&4026531840)&&(a<<=4,b+=4);0===(a&3221225472)&&(a<<=2,b+=2);return b+(a>>31)},q=0,r=h.WeakMap?new h.WeakMap:null;function u(a){return function(b,c){return!(!b||!b.$classData||b.$classData.l!==c||b.$classData.j!==a)}}
function aa(a){for(var b in a)return b}function v(a,b,c){var d=new a.y(b[c]);if(c<b.length-1){a=a.m;c+=1;for(var f=d.B,g=0;g<f.length;g++)f[g]=v(a,b,c)}return d}function ba(a){switch(typeof a){case "string":return w(x);case "number":var b=a|0;return b===a?y(b)?w(z):A(b)?w(B):w(C):"number"===typeof a?w(ca):w(da);case "boolean":return w(ea);case "undefined":return w(fa);default:return null===a?a.Y():a&&a.$classData&&a.$classData.g.A?w(ga):a&&a.$classData?w(a.$classData):null}}
function ha(a){switch(typeof a){case "string":ia||(ia=(new D).d());for(var b=0,c=1,d=-1+(a.length|0)|0;0<=d;)b=b+n(65535&(a.charCodeAt(d)|0),c)|0,c=n(31,c),d=-1+d|0;return b;case "number":E||(E=(new F).d());b=E;c=a|0;if(c===a&&-Infinity!==1/a)b=c;else{if(b.h)b.E[0]=a,b=G(b.s[b.G]|0,b.s[b.F]|0);else{if(a!==a)b=!1,a=2047,c=+h.Math.pow(2,51);else if(Infinity===a||-Infinity===a)b=0>a,a=2047,c=0;else if(0===a)b=-Infinity===1/a,c=a=0;else if(d=(b=0>a)?-a:a,d>=+h.Math.pow(2,-1022)){a=+h.Math.pow(2,52);var c=
+h.Math.log(d)/.6931471805599453,c=+h.Math.floor(c)|0,c=1023>c?c:1023,f=+h.Math.pow(2,c);f>d&&(c=-1+c|0,f/=2);f=d/f*a;d=+h.Math.floor(f);f-=d;d=.5>f?d:.5<f?1+d:0!==d%2?1+d:d;2<=d/a&&(c=1+c|0,d=1);1023<c?(c=2047,d=0):(c=1023+c|0,d-=a);a=c;c=d}else a=d/+h.Math.pow(2,-1074),c=+h.Math.floor(a),d=a-c,a=0,c=.5>d?c:.5<d?1+c:0!==c%2?1+c:c;c=+c;b=G(c|0,(b?-2147483648:0)|(a|0)<<20|c/4294967296|0)}b=b.t^b.r}return b;case "boolean":return a?1231:1237;case "undefined":return 0;default:return a&&a.$classData||
null===a?a.z():null===r?42:ka(a)}}function la(a,b){var c=h.Object.getPrototypeOf,d=h.Object.getOwnPropertyDescriptor;for(a=c(a);null!==a;){var f=d(a,b);if(void 0!==f)return f;a=c(a)}}function ma(a,b,c){a=la(a,c);if(void 0!==a)return c=a.get,void 0!==c?c.call(b):a.value}function na(a,b,c,d){a=la(a,c);if(void 0!==a&&(a=a.set,void 0!==a)){a.call(b,d);return}throw new h.TypeError("super has no setter '"+c+"'.");}
var ka=null!==r?function(a){switch(typeof a){case "string":case "number":case "boolean":case "undefined":return ha(a);default:if(null===a)return 0;var b=r.get(a);void 0===b&&(q=b=q+1|0,r.set(a,b));return b}}:function(a){if(a&&a.$classData){var b=a.$idHashCode$0;if(void 0!==b)return b;if(h.Object.isSealed(a))return 42;q=b=q+1|0;return a.$idHashCode$0=b}return null===a?0:ha(a)};function y(a){return"number"===typeof a&&a<<24>>24===a&&1/a!==1/-0}
function A(a){return"number"===typeof a&&a<<16>>16===a&&1/a!==1/-0}function H(){this.u=this.y=void 0;this.j=this.m=this.g=null;this.l=0;this.C=null;this.q="";this.b=this.o=this.p=void 0;this.name="";this.isRawJSType=this.isArrayClass=this.isInterface=this.isPrimitive=!1;this.isInstance=void 0}function I(a,b,c){var d=new H;d.g={};d.m=null;d.C=a;d.q=b;d.b=function(){return!1};d.name=c;d.isPrimitive=!0;d.isInstance=function(){return!1};return d}
function J(a,b,c,d,f,g,l){var k=new H,t=aa(a);g=g||function(a){return!!(a&&a.$classData&&a.$classData.g[t])};l=l||function(a,b){return!!(a&&a.$classData&&a.$classData.l===b&&a.$classData.j.g[t])};k.u=f;k.g=c;k.q="L"+b+";";k.b=l;k.name=b;k.isInterface=!1;k.isRawJSType=!!d;k.isInstance=g;return k}
function oa(a){function b(a){if("number"===typeof a){this.B=Array(a);for(var b=0;b<a;b++)this.B[b]=f}else this.B=a}var c=new H,d=a.C,f="longZero"==d?K().w:d;b.prototype=new L;b.prototype.constructor=b;b.prototype.$classData=c;var d="["+a.q,g=a.j||a,l=a.l+1;c.y=b;c.u=pa;c.g={a:1,aa:1,c:1};c.m=a;c.j=g;c.l=l;c.C=null;c.q=d;c.p=void 0;c.o=void 0;c.b=void 0;c.name=d;c.isPrimitive=!1;c.isInterface=!1;c.isArrayClass=!0;c.isInstance=function(a){return g.b(a,l)};return c}
function w(a){if(!a.p){var b=new M;b.n=a;a.p=b}return a.p}function qa(a){a.o||(a.o=oa(a));return a.o}H.prototype.getFakeInstance=function(){return this===x?"some string":this===ea?!1:this===z||this===B||this===C||this===ca||this===da?0:this===ga?K().w:this===fa?void 0:{$classData:this}};H.prototype.getSuperclass=function(){return this.u?w(this.u):null};H.prototype.getComponentType=function(){return this.m?w(this.m):null};
H.prototype.newArrayOfThisClass=function(a){for(var b=this,c=0;c<a.length;c++)b=qa(b);return v(b,a,0)};var ra=I(!1,"Z","boolean"),sa=I(0,"C","char"),ta=I(0,"B","byte"),ua=I(0,"S","short"),va=I(0,"I","int"),wa=I("longZero","J","long"),xa=I(0,"F","float"),ya=I(0,"D","double");ra.b=u(ra);sa.b=u(sa);ta.b=u(ta);ua.b=u(ua);va.b=u(va);wa.b=u(wa);xa.b=u(xa);ya.b=u(ya);function N(){}function L(){}L.prototype=N.prototype;N.prototype.d=function(){return this};N.prototype.v=function(){var a=ba(this).n.name,b=(+(this.z()>>>0)).toString(16);return a+"@"+b};N.prototype.z=function(){return ka(this)};N.prototype.toString=function(){return this.v()};var pa=J({a:0},"java.lang.Object",{a:1},void 0,void 0,function(a){return null!==a},function(a,b){if(a=a&&a.$classData){var c=a.l||0;return!(c<b)&&(c>b||!a.j.isPrimitive)}return!1});N.prototype.$classData=pa;
function O(){this.f=null}O.prototype=new L;O.prototype.constructor=O;O.prototype.d=function(){P=this;this.f=h.$;return this};function za(a,b){return function(a){return function(){return(0,a.D)()}}(b)}O.prototype.$classData=J({H:0},"org.querki.jquery.package$",{H:1,a:1});var P=void 0;function Q(){P||(P=(new O).d());return P}function R(){}R.prototype=new L;R.prototype.constructor=R;R.prototype.d=function(){return this};
function Aa(){var a=S();(0,Q().f)("body").append("\x3cp\x3eHello World\x3c/p\x3e");var b=(0,Q().f)('\x3cbutton type\x3d"button"\x3eClick me!\x3c/button\x3e').click(za(Q(),Ba(function(){return function(){Ca()}}(a)))),c=(0,Q().f)("body");b.appendTo(c);(0,Q().f)("#click-me-button").click(za(Q(),Ba(function(){return function(){Ca()}}(a))))}function Ca(){S();(0,Q().f)("body").append("\x3cp\x3eYou clicked the button!\x3c/p\x3e")}R.prototype.$classData=J({I:0},"tutorial.webapp.TutorialApp$",{I:1,a:1});
var T=void 0;function S(){T||(T=(new R).d());return T}function M(){this.n=null}M.prototype=new L;M.prototype.constructor=M;M.prototype.v=function(){return(this.n.isInterface?"interface ":this.n.isPrimitive?"":"class ")+this.n.name};M.prototype.$classData=J({M:0},"java.lang.Class",{M:1,a:1});function F(){this.h=!1;this.E=this.s=this.k=null;this.x=!1;this.G=this.F=0}F.prototype=new L;F.prototype.constructor=F;
F.prototype.d=function(){E=this;this.k=(this.h=!!(h.ArrayBuffer&&h.Int32Array&&h.Float32Array&&h.Float64Array))?new h.ArrayBuffer(8):null;this.s=this.h?new h.Int32Array(this.k,0,2):null;this.h&&new h.Float32Array(this.k,0,2);this.E=this.h?new h.Float64Array(this.k,0,1):null;if(this.h)this.s[0]=16909060,a=1===((new h.Int8Array(this.k,0,8))[0]|0);else var a=!0;this.F=(this.x=a)?0:1;this.G=this.x?1:0;return this};F.prototype.$classData=J({T:0},"scala.scalajs.runtime.Bits$",{T:1,a:1});var E=void 0;
function D(){}D.prototype=new L;D.prototype.constructor=D;D.prototype.d=function(){return this};D.prototype.$classData=J({V:0},"scala.scalajs.runtime.RuntimeString$",{V:1,a:1});var ia=void 0;function U(){}U.prototype=new L;U.prototype.constructor=U;function Ea(){}Ea.prototype=U.prototype;function V(){}V.prototype=new L;V.prototype.constructor=V;function Fa(){}Fa.prototype=V.prototype;V.prototype.v=function(){return"\x3cfunction0\x3e"};
var fa=J({W:0},"scala.runtime.BoxedUnit",{W:1,a:1,c:1},void 0,void 0,function(a){return void 0===a}),ea=J({K:0},"java.lang.Boolean",{K:1,a:1,c:1,e:1},void 0,void 0,function(a){return"boolean"===typeof a});function W(){this.D=null}W.prototype=new Fa;W.prototype.constructor=W;function Ba(a){var b=new W;b.D=a;return b}W.prototype.$classData=J({S:0},"scala.scalajs.runtime.AnonFunction0",{S:1,ca:1,a:1,X:1});function X(){this.w=null}X.prototype=new L;X.prototype.constructor=X;
X.prototype.d=function(){Y=this;this.w=G(0,0);return this};
function Ga(a,b){if(0===(-2097152&b))b=""+(4294967296*b+ +(a>>>0));else{var c=(32+p(1E9)|0)-(0!==b?p(b):32+p(a)|0)|0,d=c,f=0===(32&d)?1E9<<d:0,d=0===(32&d)?5E8>>>(31-d|0)|0|0<<d:1E9<<d,g=a,l=b;for(a=b=0;0<=c&&0!==(-2097152&l);){var k=g,t=l,Da=f,ja=d;if(t===ja?(-2147483648^k)>=(-2147483648^Da):(-2147483648^t)>=(-2147483648^ja))k=l,t=d,l=g-f|0,k=(-2147483648^l)>(-2147483648^g)?-1+(k-t|0)|0:k-t|0,g=l,l=k,32>c?b|=1<<c:a|=1<<c;c=-1+c|0;k=d>>>1|0;f=f>>>1|0|d<<31;d=k}c=l;if(0===c?-1147483648<=(-2147483648^
g):-2147483648<=(-2147483648^c))c=4294967296*l+ +(g>>>0),g=c/1E9,f=g/4294967296|0,d=b,b=g=d+(g|0)|0,a=(-2147483648^g)<(-2147483648^d)?1+(a+f|0)|0:a+f|0,g=c%1E9|0;c=""+g;b=""+(4294967296*a+ +(b>>>0))+"000000000".substring(c.length|0)+c}return b}X.prototype.$classData=J({U:0},"scala.scalajs.runtime.RuntimeLong$",{U:1,a:1,ba:1,c:1});var Y=void 0;function K(){Y||(Y=(new X).d());return Y}
var x=J({J:0},"java.lang.String",{J:1,a:1,c:1,Z:1,e:1},void 0,void 0,function(a){return"string"===typeof a}),z=J({L:0},"java.lang.Byte",{L:1,i:1,a:1,c:1,e:1},void 0,void 0,function(a){return y(a)}),da=J({N:0},"java.lang.Double",{N:1,i:1,a:1,c:1,e:1},void 0,void 0,function(a){return"number"===typeof a}),ca=J({O:0},"java.lang.Float",{O:1,i:1,a:1,c:1,e:1},void 0,void 0,function(a){return"number"===typeof a}),C=J({P:0},"java.lang.Integer",{P:1,i:1,a:1,c:1,e:1},void 0,void 0,function(a){return"number"===
typeof a&&(a|0)===a&&1/a!==1/-0}),ga=J({Q:0},"java.lang.Long",{Q:1,i:1,a:1,c:1,e:1},void 0,void 0,function(a){return!!(a&&a.$classData&&a.$classData.g.A)}),B=J({R:0},"java.lang.Short",{R:1,i:1,a:1,c:1,e:1},void 0,void 0,function(a){return A(a)});function Z(){this.r=this.t=0}Z.prototype=new Ea;Z.prototype.constructor=Z;Z.prototype.v=function(){K();var a=this.t,b=this.r;return b===a>>31?""+a:0>b?"-"+Ga(-a|0,0!==a?~b:-b|0):Ga(a,b)};function G(a,b){var c=new Z;c.t=a;c.r=b;return c}
Z.prototype.z=function(){return this.t^this.r};Z.prototype.$classData=J({A:0},"scala.scalajs.runtime.RuntimeLong",{A:1,i:1,a:1,c:1,e:1});var Ha=S(),Ia;Ia=new (qa(x).y)([]);(function(a){(0,Q().f)(function(){return function(){Aa()}}(a))})(Ha,Ia);
}).call(this);
//# sourceMappingURL=scala-js-tutorial-opt.js.map