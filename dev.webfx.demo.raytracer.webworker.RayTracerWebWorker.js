"use strict";
var main;(function(){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_createArray(cls,sz){var data=new Array(sz);var arr=new $rt_array(cls,data);if(sz>0){var i=0;do {data[i]=null;i=i+1|0;}while(i<sz);}return arr;}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new Array(sz));}function $rt_createLongArray(sz){var data=new Array(sz);var arr=new $rt_array($rt_longcls(),data);for(var i=0;i<sz;i=i+1|0){data[i]=Long_ZERO;}return arr;}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new Uint16Array(sz));}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new Int8Array(sz));}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new Int16Array(sz));}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new Int32Array(sz));}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),
new Int8Array(sz));}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new Float32Array(sz));}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new Float64Array(sz));}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false};arraycls.classObject=null;arraycls.$array
=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}function $rt_exception(ex){var err=ex.$jsException;if(!err){err=new Error("Java exception thrown");if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,
ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_objcls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first
=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays
=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for
(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]
|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim
=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&isNaN(value)){throw "NaN";}return value;}var $rt_stdoutBuffer="";var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:function(ch){if(ch===0xA){if(console){console.info($rt_stdoutBuffer);}$rt_stdoutBuffer
="";}else {$rt_stdoutBuffer+=String.fromCharCode(ch);}};var $rt_stderrBuffer="";var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:function(ch){if(ch===0xA){if(console){console.error($rt_stderrBuffer);}$rt_stderrBuffer="";}else {$rt_stderrBuffer+=String.fromCharCode(ch);}};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]
=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype
=Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]
=func;}}}cls.$array=null;}}function $rt_threadStarter(f){return function(){var args=Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance
=new Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new DataView(new ArrayBuffer(8));function $rt_doubleToLongBits(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));}function $rt_longBitsToDouble(n)
{$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}function $rt_javaException(e){return e instanceof Error&&typeof e.$javaException==='object'?e.$javaException:null;}function $rt_jsException(e)
{return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err.$javaException;if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if
(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};Long.prototype.toString
=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};var Long_ZERO=new Long(0,0);var Long_MAX_NORMAL=1<<18;function Long_fromInt(val){return val>=0?new Long(val,0):new Long(val, -1);}function Long_fromNumber(val)
{if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}}function Long_toNumber(val){var lo=val.lo;var hi=val.hi;if(lo<0){lo+=0x100000000;}return 0x100000000*hi+lo;}var $rt_imul=Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){if(a<0){a+=0x100000000;}if(b<0){b+=0x100000000;}return a/b|0;};var $rt_umod=function(a,b){if(a<0){a+=0x100000000;}if
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.dI=f;}
function $rt_cls(cls){return Gj(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Tg(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.h.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(T0());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return Fl();}
function $rt_setThread(t){return Nv(t);}
function $rt_createException(message){return VZ(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var F=$rt_throw;var CW=$rt_compare;var V0=$rt_nullCheck;var E=$rt_cls;var L=$rt_createArray;var Be=$rt_isInstance;var V1=$rt_nativeThread;var V2=$rt_suspending;var V3=$rt_resuming;var V4=$rt_invalidPointer;var C=$rt_s;var J=$rt_eraseClinit;var D0=$rt_imul;var Ba=$rt_wrapException;
function B(){this.$id$=0;}
function Up(){var a=new B();D(a);return a;}
function D(a){return;}
function Cv(a){return Gj(a.constructor);}
function Om(a){return DF(a);}
function KU(a,b){return a!==b?0:1;}
function Np(a){return I().c(Cv(a).dg()).c(C(0)).c(E_(DF(a))).e();}
function DF(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function SL(a){var b,c,d;if(!Be(a,B9)){b=a;if(b.constructor.$meta.item===null)F(Tq());}c=KZ(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function BN(){var a=this;B.call(a);a.eC=null;a.cq=null;a.cZ=0;a.dH=0;a.eH=null;}
function V5(){var a=new BN();IY(a);return a;}
function V6(a){var b=new BN();EZ(b,a);return b;}
function V7(a){var b=new BN();I3(b,a);return b;}
function IY(a){a.cZ=1;a.dH=1;a.dd();}
function EZ(a,b){a.cZ=1;a.dH=1;a.dd();a.eC=b;}
function I3(a,b){a.cZ=1;a.dH=1;a.dd();a.cq=b;}
function Px(a){return a;}
function Ox(a){return a.eC;}
function Qc(a){return a.cD();}
function QL(a){a.ey(OR());}
function Sr(a,b){var c,d,e,f,g;b.b4(Cv(a).dg());c=a.g0();if(c!==null)b.b4(I().c(C(1)).c(c).e());a:{b.iB();if(a.eH!==null){d=a.eH.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.b4(C(2));b.iz(g);f=f+1|0;}}}if(a.cq!==null&&a.cq!==a){b.b4(C(3));a.cq.ey(b);}}
function Bv(){BN.call(this);}
function V8(){var a=new Bv();C9(a);return a;}
function V9(a){var b=new Bv();DI(b,a);return b;}
function C9(a){IY(a);}
function DI(a,b){EZ(a,b);}
function N(){Bv.call(this);}
function V$(){var a=new N();Br(a);return a;}
function VZ(a){var b=new N();EX(b,a);return b;}
function Br(a){C9(a);}
function EX(a,b){DI(a,b);}
function C$(){N.call(this);}
function Gp(){var a=new C$();Hb(a);return a;}
function Ca(a){var b=new C$();Ra(b,a);return b;}
function Hb(a){Br(a);}
function Ra(a,b){EX(a,b);}
function Dh(){}
function RL(a,b){return b;}
function QN(a,b){if(b===null)return null;if(Be(b,CB))return a.hf(b);if(!Be(b,CD))return a.c1(b);return a.gx(b);}
function SD(a,b){return b.bj();}
function Sp(a,b){return b.bj();}
function DN(){}
function Ed(){}
function PP(a){return EE(a.bj(),a,I()).e();}
function O1(b,c){var d,e,f,g,h;c.q(123);d=1;e=b.e_();f=0;g=e.n();while(f<g){h=e.hp(f);if(!d)c.q(44);G0(h,c);c.q(58);EE(b.ct(h),b,c);d=0;f=f+1|0;}return c.q(125);}
function Mo(b,c){return R2(b,C(4),c.q(91)).q(93);}
function R2(b,c,d){var e,f;e=b.n();f=0;while(f<e){if(f>0)d.c(c);EE(b.cI(f),b,d);f=f+1|0;}return d;}
function EE(b,c,d){TV();switch(V_.data[Bd(c.b_(b))]){case 1:return d.c(C(5));case 2:return O1(c.bP(b),d);case 3:return Mo(c.dL(b),d);case 4:return d.c(KO(c.Y(b)));case 5:return d.df(c.Y(b));case 6:return G0(c.Y(b),d);default:}return d;}
function K3(b){if(b.cw(46)>0&&b.cw(101)<0&&b.cw(69)<0){while(b.et(C(6))){b=b.bk(0,b.d()-1|0);}if(b.et(C(7)))b=b.bk(0,b.d()-1|0);}return b;}
function KO(b){if(b!==null){RD(b);return K3(b.e());}F(B2(C(8)));}
function RD(b){var c;a:{b:{if(b!==null){if(b instanceof BT){if(N_(0.0).z(b))break b;c=b;if(!c.fq()&&!c.fI())break b;F(B2(C(9)));}if(b instanceof BY&&!TX(0.0).z(b)){c=b;if(c.fq())break a;if(c.fI())break a;}}}return;}F(B2(C(10)));}
function G0(b,c){var d,e,f,g,h,i,j;if(Nb(b))return c.c(C(11));d=0;e=b.d();c.q(34);f=0;while(f<e){a:{g=b.l(f);switch(g){case 8:break;case 9:c.c(C(12));break a;case 10:c.c(C(13));break a;case 12:c.c(C(14));break a;case 13:c.c(C(15));break a;case 34:case 92:c.q(92);c.q(g);break a;case 47:if(d==60)c.q(92);c.q(g);break a;default:if(g>=32){c.q(g);break a;}h=E_(g);i=I();R(R(i,C(16)),h);j=Y(i);c.c(C(17)).c(j.g4(j.d()-4|0));break a;}c.c(C(18));}f=f+1|0;d=g;}return c.q(34);}
function CM(){}
function OP(a){return a.bP(a.c_());}
function CJ(){}
function Co(){}
function Cb(){B.call(this);this.bs=null;}
function Wa(a){var b=new Cb();Fb(b,a);return b;}
function Fb(a,b){D(a);a.bs=b;}
function Jt(a){return a.bs;}
function G3(a,b){var c,d,e,f;if(b===null){T();return Wb;}a:{c=b;d=$rt_str(typeof c);e=(-1);switch(d.bO()){case -1034364087:if(!d.z(C(19)))break a;e=2;break a;case -1023368385:if(!d.z(C(20)))break a;e=0;break a;case -891985903:if(!d.z(C(21)))break a;e=1;break a;case 64711720:if(!d.z(C(22)))break a;e=3;break a;default:}}switch(e){case 0:if(!(Object.prototype.toString.apply(c)==='[object Array]'?1:0)){T();f=Wc;}else{T();f=Wd;}return f;case 1:break;case 2:T();return We;case 3:T();return Wf;default:T();return Wg;}T();return Wh;}
function I5(a){return FO();}
function Jq(a,b){if(b instanceof Fe)return b;return FP(b);}
function Fg(a,b){if(b instanceof ER)return b;return O$(b);}
function Ir(a,b){TF();switch(Wi.data[Bd(a.b_(b))]){case 1:return NN(b);case 2:return Cy(MS(b));case 3:return KJ(b);default:}return b;}
function GI(a,b){if(b===null)return null;if(b instanceof BI)return $rt_ustr(b);if(b instanceof BD)return !!b.eZ();if(b instanceof BY)return b.jy();if(b instanceof BT)return b.bl();if(b instanceof S)return b.I();if(!(b instanceof BG))return b;return $rt_ustr(De(b));}
function Fo(a){return a.d5();}
function KJ(b){var c;c=S8(b);if(c!==QD(c))return Bm(c);if(RO(c)<=2.147483647E9)return X(c|0);return DW(Long_fromNumber(c));}
function QT(a){return a.fa();}
function SN(a){return a.fQ();}
function K9(a,b){return a.eX(b);}
function Li(a,b){return a.fd(b);}
function RU(a,b){return a.dZ(b);}
function FO(){return {};}
function SZ(b){var keys=[];for(var key in b){if(Object.prototype.hasOwnProperty.call(b,key)&&key!='$H'){keys.push(key);}}return keys;}
function Gr(){var a=this;B.call(a);a.d0=null;a.fp=null;a.eY=0;a.ds=0;}
function TS(a,b){var c=new Gr();PM(c,a,b);return c;}
function PM(a,b,c){D(a);a.d0=b;a.fp=c;}
function O2(a){return CF(a.d0);}
function O8(a,b){return Bw(a.fp)<b?0:1;}
function PT(a,b){a.eY=b;}
function S4(a,b){a.ds=b;}
function Do(){}
function Mq(a,b){return NZ(a.iL(b));}
function Es(){}
function Bn(){}
function S(){B.call(this);}
function Wj(){var a=new S();BW(a);return a;}
function BW(a){D(a);}
function V(){}
function Cc(){S.call(this);this.dx=0;}
var Wk=null;var Wl=null;function BJ(){BJ=J(Cc);Ph();}
function PU(a){var b=new Cc();HT(b,a);return b;}
function HT(a,b){BJ();BW(a);a.dx=b;}
function HD(b,c){BJ();if(!(c>=2&&c<=36))c=10;return Vl(20).d$(b,c).e();}
function E_(b){BJ();return K1(b,4);}
function GX(b){BJ();return HD(b,10);}
function Gz(b,c){var d,e,f,g,h;BJ();if(c>=2&&c<=36){if(b!==null&&!b.b8()){a:{d=0;e=0;switch(b.l(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.d())F(VO());while(e<b.d()){g=e+1|0;h=Fi(b.l(e));if(h<0)F(CU(I().c(C(23)).c(b).e()));if(h>=c)F(CU(I().c(C(24)).r(c).c(C(1)).c(b).e()));f=D0(c,f)+h|0;if(f<0){if(g==b.d()&&f==(-2147483648)&&d)return (-2147483648);F(CU(I().c(C(25)).c(b).e()));}e=g;}if(d)f= -f;return f;}F(CU(C(26)));}F(CU(I().c(C(27)).r(c).e()));}
function Et(b){BJ();return Gz(b,10);}
function X(b){BJ();if(b>=(-128)&&b<=127){Gy();return Wl.data[b+128|0];}return PU(b);}
function Gy(){var b;BJ();a:{if(Wl===null){Wl=L(Cc,256);b=0;while(true){if(b>=Wl.data.length)break a;Wl.data[b]=PU(b-128|0);b=b+1|0;}}}}
function Me(a){return a.dx;}
function QY(a){return GX(a.dx);}
function Gx(b){var c,d,e;BJ();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function Ph(){Wk=E($rt_intcls());}
function H9(){Bv.call(this);}
function Tq(){var a=new H9();Rz(a);return a;}
function Rz(a){C9(a);}
function BQ(){B.call(this);}
var Wm=null;var Wn=null;var Wo=null;var Wp=null;var Wq=null;function Op(){Op=J(BQ);RM();}
function RM(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;Wm=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);Wn=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);Wo=b;Wp=TD();Wq=UV();}
function E9(){S.call(this);this.dM=Long_ZERO;}
var Wr=null;function Ik(){Ik=J(E9);Qx();}
function Ve(a){var b=new E9();Ic(b,a);return b;}
function Ic(a,b){Ik();BW(a);a.dM=b;}
function DW(b){Ik();return Ve(b);}
function Le(a){return a.dM.lo;}
function Gf(b){Ik();return I().ii(b).e();}
function PR(a){return Gf(a.dM);}
function Dj(b,c){return Long_udiv(b, c);}
function Gd(b,c){return Long_urem(b, c);}
function Qx(){Wr=E($rt_longcls());}
function BP(){}
function D5(){}
function B4(){var a=this;B.call(a);a.fy=Long_ZERO;a.gc=Long_ZERO;a.g7=null;a.hR=null;a.gE=0;a.iP=null;}
var Ws=null;var Wt=null;var Wu=Long_ZERO;var Wv=0;function E3(){E3=J(B4);ME();}
function Ta(a){var b=new B4();GZ(b,a);return b;}
function Ww(a,b){var c=new B4();Er(c,a,b);return c;}
function GZ(a,b){E3();Er(a,null,b);}
function Er(a,b,c){var d;E3();D(a);a.g7=Up();a.gE=1;a.hR=c;a.iP=b;d=Wu;Wu=Long_add(d,Long_fromInt(1));a.fy=d;}
function Nv(b){E3();if(Wt!==b)Wt=b;Wt.gc=H8();}
function Fl(){E3();return Wt;}
function KK(a){return a.fy;}
function ME(){Ws=Ta(C(28));Wt=Ws;Wu=Long_fromInt(1);Wv=1;}
function Bb(){}
function IG(b){return b;}
function Eo(){}
function IL(){B.call(this);}
function SA(a,b){return a.jH(b);}
function NF(a){return a.jD();}
function Dy(){}
function OC(a,b,c){var d,e;d=L(B,2);e=d.data;e[0]=a.c5(b);e[1]=c;return QF(d);}
function SQ(a,b){DO();return Wx.z(a.hW(b));}
function PA(a,b){return S2(a.c5(b));}
function N3(a,b){return EM(a.c5(b));}
function Mf(a,b,c){return EM(a.gC(b,c));}
function CD(){}
function Ou(a,b){return a.bP(a.ct(b));}
function Nx(a,b){return a.Y(a.ct(b));}
function J1(){B.call(this);}
function QF(b){var c,d,e,f;c=b.data;d=c.length;e=0;while(true){if(e>=d)return null;f=c[e];if(f!==null)break;e=e+1|0;}return f;}
function Ct(){}
function In(){B.call(this);this.fk=null;}
function Vg(a){var b=new In();O3(b,a);return b;}
function O3(a,b){D(a);a.fk=b;}
function P7(a,b){Kq(a,b);}
function Kq(a,b){Ij(a.fk,b);}
function EB(){}
function Im(){B.call(this);this.ew=null;}
function VQ(a){var b=new Im();Sv(b,a);return b;}
function Sv(a,b){D(a);a.ew=b;}
function M0(a,b){Gb(a.ew,b);}
function BA(){var a=this;B.call(a);a.j=null;a.N=null;}
function Wy(){var a=new BA();E1(a);return a;}
function E1(a){D(a);}
function CK(){}
function Ci(){BN.call(this);}
function Wz(a){var b=new Ci();HS(b,a);return b;}
function WA(a){var b=new Ci();GM(b,a);return b;}
function HS(a,b){EZ(a,b);}
function GM(a,b){I3(a,b);}
function Cn(){Ci.call(this);}
function WB(a){var b=new Cn();FR(b,a);return b;}
function FR(a,b){HS(a,b);}
function JQ(){C$.call(this);}
function NS(){var a=new JQ();PH(a);return a;}
function PH(a){Hb(a);}
function Dn(){B.call(this);this.g5=null;}
var WC=null;var WD=null;function RN(){RN=J(Dn);SK();}
function OW(a){var b=new Dn();Fn(b,a);return b;}
function Fn(a,b){RN();D(a);a.g5=b;}
function SK(){WC=OW(C(29));WD=OW(C(30));}
function Jb(){B.call(this);}
function Nc(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.eu.data;f=b.fK;b.fK=f+1|0;g=My(e[f]);h=(g%2|0)!=1?0:1;c=c+D0(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function FX(b){var c,d;c=Nc(b);d=c/2|0;if(c%2|0)d= -d;return d;}
function My(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function Ez(){}
function Bf(){B.call(this);}
function Gc(){Bf.call(this);}
function EV(){B.call(this);}
var WE=null;function Hq(){return Ds().hC();}
function Pl(b){return Ds().bP(b);}
function QR(b){return Ds().c1(b);}
function MC(b){return Ds().Y(b);}
function S6(b){WE=b;}
function Ds(){var b;if(WE===null){b=T9();Dt();S6(EF(E(CM),b,WF));if(WE===null){G5().eW(C(31));WE=U_();}}return WE;}
function Oz(){return F8(E(CM));}
function Ch(){var a=this;B.call(a);a.b=null;a.k=0;}
function WG(){var a=new Ch();Eb(a);return a;}
function Vl(a){var b=new Ch();F6(b,a);return b;}
function Eb(a){F6(a,16);}
function F6(a,b){D(a);a.b=$rt_createCharArray(b);}
function D6(a,b){return a.ci(a.k,b);}
function Ex(a,b,c){var d,e,f;if(b>=0&&b<=a.k){if(c===null)c=C(5);else if(c.b8())return a;a.bu(a.k+c.d()|0);d=a.k-1|0;while(d>=b){a.b.data[d+c.d()|0]=a.b.data[d];d=d+(-1)|0;}a.k=a.k+c.d()|0;d=0;while(d<c.d()){e=a.b.data;f=b+1|0;e[b]=c.l(d);d=d+1|0;b=f;}return a;}F(NS());}
function GS(a,b){return a.d$(b,10);}
function LY(a,b,c){return a.gy(a.k,b,c);}
function Rq(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)U(a,b,b+1|0);else{U(a,b,b+2|0);f=a.b.data;g=b+1|0;f[b]=45;b=g;}a.b.data[b]=Cm(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=D0(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;U(a,b,b+i|0);if(e)l=b;else{f=a.b.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.b.data;g=l+1|0;f[l]=Cm(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function Jo(a,b){return a.ek(a.k,b);}
function Kh(a,b,c){return a.h2(b,c,10);}
function K4(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(Long_lt(c,Long_ZERO)){e=0;c=Long_neg(c);}a:{f=Long_fromInt(d);if(Long_lt(c,f)){if(e)U(a,b,b+1|0);else{U(a,b,b+2|0);g=a.b.data;h=b+1|0;g[b]=45;b=h;}a.b.data[b]=Cm(c.lo,d);}else{i=1;j=Long_fromInt(1);while(true){k=Long_mul(j,f);if(Long_le(k,j))break;if(Long_gt(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;U(a,b,b+i|0);if(e)l=b;else{g=a.b.data;l=b+1|0;g[b]=45;}while(true){if(Long_le(j,Long_ZERO))break a;g=a.b.data;h=l+1|0;g[l]=Cm(Long_div(c,j).lo,d);c=Long_rem(c,j);j=Long_div(j,
f);l=h;}}}return a;}
function Iw(a,b){return a.dS(a.k,b);}
function HP(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=CW(c,0.0);if(!d){U(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=48;e=a.b.data;f=d+1|0;e[d]=46;a.b.data[f]=48;return a;}if(!d){U(a,b,b+4|0);e=a.b.data;d=b+1|0;e[b]=45;e=a.b.data;f=d+1|0;e[d]=48;e=a.b.data;d=f+1|0;e[f]=46;a.b.data[d]=48;return a;}if(isNaN(c)?1:0){U(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=78;e=a.b.data;f=d+1|0;e[d]=97;a.b.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){U(a,b,b+8|0);d=b;}else{U(a,b,b+9|0);e=a.b.data;d=b+1|0;e[b]=45;}e=a.b.data;f=d+1|0;e[d]
=73;e=a.b.data;d=f+1|0;e[f]=110;e=a.b.data;f=d+1|0;e[d]=102;e=a.b.data;d=f+1|0;e[f]=105;e=a.b.data;f=d+1|0;e[d]=110;e=a.b.data;d=f+1|0;e[f]=105;e=a.b.data;f=d+1|0;e[d]=116;a.b.data[f]=121;return a;}Op();g=Wp;JH(c,g);h=g.cC;i=g.cW;j=g.d9;k=1;l=1;if(j)l=2;m=18;n=M6(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=BX(m,k+1|0);i=0;}else if(i<0){h=Long_div(h,Wn.data[ -i]);m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(!(i>(-100)&&i<100))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;U(a,b,b+
d|0);if(!j)o=b;else{e=a.b.data;o=b+1|0;e[b]=45;}p=new Long(1569325056, 23283064);q=0;while(q<m){if(Long_le(p,Long_ZERO))r=0;else{r=Long_div(h,p).lo;h=Long_rem(h,p);}e=a.b.data;d=o+1|0;e[o]=(48+r|0)&65535;k=k+(-1)|0;if(k)o=d;else{e=a.b.data;o=d+1|0;e[d]=46;}p=Long_div(p,Long_fromInt(10));q=q+1|0;}if(i){e=a.b.data;d=o+1|0;e[o]=69;if(i>=0)f=d;else{i= -i;e=a.b.data;f=d+1|0;e[d]=45;}if(i>=100){e=a.b.data;d=f+1|0;e[f]=(48+(i/100|0)|0)&65535;i=i%100|0;e=a.b.data;o=d+1|0;e[d]=(48+(i/10|0)|0)&65535;}else if(i<10)o=f;else
{e=a.b.data;o=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.b.data[o]=(48+(i%10|0)|0)&65535;}return a;}
function M6(b){var c,d,e,f;c=Long_fromInt(1);d=0;e=16;Op();f=Wo.data.length-1|0;while(f>=0){if(Long_eq(Long_rem(b,Long_mul(c,Wo.data[f])),Long_ZERO)){d=d|e;c=Long_mul(c,Wo.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function J4(a,b){return a.fb(a.k,b);}
function JM(a,b,c){U(a,b,b+1|0);a.b.data[b]=c;return a;}
function JD(a,b){return a.eT(a.k,b);}
function Il(a,b,c){return a.ci(b,c===null?C(5):c.e());}
function D9(a,b){var c,d;if(a.b.data.length>=b)return;if(a.b.data.length>=1073741823)c=2147483647;else{d=a.b.data.length*2|0;c=BX(b,BX(d,5));}a.b=Mg(a.b,c);}
function DM(a){return NG(a.b,0,a.k);}
function Je(a){return a.k;}
function G1(a,b,c,d){return a.dP(a.k,b,c,d);}
function FT(a,b,c,d,e){var f,g;if(d<=e&&e<=c.d()&&d>=0){U(a,b,(b+e|0)-d|0);while(d<e){f=a.b.data;g=b+1|0;f[b]=c.l(d);d=d+1|0;b=g;}return a;}F(Gp());}
function IT(a,b,c,d,e){var f,g,h,i;if(b>c)F(Ca(C(32)));while(b<c){f=d.data;g=e+1|0;h=a.b.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function IN(a,b){a.k=b;}
function U(a,b,c){var d,e;d=a.k-b|0;a.bu((a.k+c|0)-b|0);e=d-1|0;while(e>=0){a.b.data[c+e|0]=a.b.data[b+e|0];e=e+(-1)|0;}a.k=a.k+(c-b|0)|0;}
function CH(){}
function FE(){Ch.call(this);}
function I(){var a=new FE();RJ(a);return a;}
function RJ(a){Eb(a);}
function K_(a,b){D6(a,b);return a;}
function Bs(a,b){GS(a,b);return a;}
function Qo(a,b){Jo(a,b);return a;}
function Or(a,b){Iw(a,b);return a;}
function KY(a,b){J4(a,b);return a;}
function Q6(a,b,c,d){G1(a,b,c,d);return a;}
function R(a,b){JD(a,b);return a;}
function PF(a,b,c){Kh(a,b,c);return a;}
function Rx(a,b,c){HP(a,b,c);return a;}
function LI(a,b,c,d,e){FT(a,b,c,d,e);return a;}
function Sg(a,b,c){Il(a,b,c);return a;}
function Md(a,b,c){JM(a,b,c);return a;}
function Su(a,b,c){Ex(a,b,c);return a;}
function SE(a,b){IN(a,b);}
function O_(a,b,c,d,e){IT(a,b,c,d,e);}
function MT(a,b,c,d,e){return a.hx(b,c,d,e);}
function MQ(a){return Je(a);}
function Y(a){return DM(a);}
function SH(a,b){D9(a,b);}
function Lc(a,b,c){return a.g$(b,c);}
function KI(a,b,c){return a.iq(b,c);}
function O7(a,b,c){return a.hh(b,c);}
function NP(a,b,c){return a.hM(b,c);}
function ST(a,b,c){return a.gZ(b,c);}
function Ey(){}
function CL(){}
function Lp(a,b,c){return a.fM(b,a.gI(c));}
function Dg(){}
function Oc(a){return VX();}
function RF(a,b){if(b!==null&&!Be(b,CL))return VF(b);return b;}
function Sl(a,b){if(b!==null&&!Be(b,Cw))return Vq(b);return b;}
function M5(a,b){if(b===null){T();return Wb;}if(!Be(b,BP)&&!Be(b,CD)){if(!Be(b,B3)&&!Be(b,CB)){if(b instanceof BD){T();return We;}if(b instanceof BI){T();return Wh;}if(!Jy(b)){T();return Wg;}T();return We;}T();return Wd;}T();return Wc;}
function CT(){B.call(this);this.dT=0;}
function WH(){var a=new CT();Ga(a);return a;}
function WI(a){var b=new CT();JE(b,a);return b;}
function Ga(a){D(a);a.gl();}
function JE(a,b){D(a);a.c4(b);}
function OQ(a){a.c4(a.c_());}
function Lt(a){a.c4(Ev(a.b1()));}
function Q3(a){return a.dL(Vh(a.b1().i1()));}
function R5(a,b){return a.b1().cv(b);}
function Ni(a,b,c){a.gN();a.b1().be(b,c);return a;}
function Sq(a){if(a.dT){a.hn();a.dT=0;}}
function Sd(a){return a.d5();}
function Q7(a,b,c){return a.gF(b,c);}
function IR(){N.call(this);}
function M$(){var a=new IR();Sx(a);return a;}
function Sx(a){Br(a);}
function EU(){}
function P(){}
function Hm(){B.call(this);this.fW=null;}
function Vi(a){var b=new Hm();Sw(b,a);return b;}
function Sw(a,b){D(a);a.fW=b;}
function KG(a,b){return Gn(a,b);}
function Gn(a,b){return N4(a.fW,b);}
function CS(){}
function IV(){B.call(this);}
function U4(){var a=new IV();RS(a);return a;}
function RS(a){D(a);}
function Kw(a){return FV(a);}
function FV(a){return R9();}
function CA(){}
function Q8(a,b,c){return a.gK(b).ia(Vi(c));}
function N4(b,c){return c.gd(b);}
function D3(){B.call(this);}
var WJ=null;function WK(){var a=new D3();Ng(a);return a;}
function Ng(a){D(a);}
function MW(a){if(WJ===null)WJ=Cy(MA()?1:0);return WJ.eZ();}
function Nj(a,b){var c,d;c=Eh();d=VT(c);Mb($rt_ustr(b),Cp(d,"handle"));return c;}
function OJ(b,c){b.cH(Tn(c));}
function MA(){{try {if(typeof WebAssembly==="object"&&typeof WebAssembly.instantiate==="function"){const module=new WebAssembly.Module(Uint8Array.of(0x0,0x61,0x73,0x6d,0x01,0x00,0x00,0x00));if(module instanceof WebAssembly.Module)return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;}}catch(e){}return false;}}
function Mb(b,c){((fetch(b)).then(function(response){return WebAssembly.compileStreaming(response);})).then(function(module){return c(module);});}
function GH(){Ci.call(this);}
function Ul(a){var b=new GH();La(b,a);return b;}
function La(a,b){GM(a,b);}
function B8(){B.call(this);this.c8=null;}
function WL(){var a=new B8();Ew(a);return a;}
function Ew(a){D(a);}
function B9(){}
function Du(){var a=this;B8.call(a);a.u=0;a.g=null;a.A=0;a.fY=0.0;a.bW=0;}
function SW(){var a=new Du();H5(a);return a;}
function WM(a){var b=new Du();DE(b,a);return b;}
function WN(a,b){var c=new Du();JG(c,a,b);return c;}
function Qq(a,b){return L(Cq,b);}
function H5(a){DE(a,16);}
function DE(a,b){JG(a,b,0.75);}
function Jz(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function JG(a,b,c){var d;Ew(a);if(b>=0&&c>0.0){d=Jz(b);a.u=0;a.g=a.c0(d);a.fY=c;En(a);return;}F(G4());}
function En(a){a.bW=a.g.data.length*a.fY|0;}
function Qy(a,b){var c;c=F3(a,b);if(c===null)return null;return c.O;}
function F3(a,b){var c,d,e;if(b===null)c=CO(a);else{d=Ei(b);e=d&(a.g.data.length-1|0);c=CC(a,b,e,d);}return c;}
function CC(a,b,c,d){var e,f;e=a.g.data[c];while(e!==null){if(e.b5==d){f=e.U;if(Gv(b,f))break;}e=e.H;}return e;}
function CO(a){var b;b=a.g.data[0];while(b!==null&&b.U!==null){b=b.H;}return b;}
function Lz(a,b,c){return a.du(b,c);}
function Qd(a,b,c){var d,e,f,g,h;if(b===null){d=CO(a);if(d===null){a.A=a.A+1|0;d=a.bK(null,0,0);e=a.u+1|0;a.u=e;if(e>a.bW)a.cd();}}else{f=Ei(b);g=f&(a.g.data.length-1|0);d=CC(a,b,g,f);if(d===null){a.A=a.A+1|0;d=a.bK(b,g,f);e=a.u+1|0;a.u=e;if(e>a.bW)a.cd();}}h=d.O;d.O=c;return h;}
function Nz(a,b,c,d){var e;e=UG(b,d);e.H=a.g.data[c];a.g.data[c]=e;return e;}
function P4(a,b){var c,d,e,f,g,h,i;c=Jz(!b?1:b<<1);d=a.c0(c);e=0;while(e<a.g.data.length){f=a.g.data[e];a.g.data[e]=null;while(f!==null){g=d.data;h=f.b5&(c-1|0);i=f.H;f.H=g[h];g[h]=f;f=i;}e=e+1|0;}a.g=d;En(a);}
function N2(a){a.hq(a.g.data.length);}
function GW(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.g.data[0];while(e!==null){if(e.U===null)break a;f=e.H;d=e;e=f;}}else{g=Ei(b);c=g&(a.g.data.length-1|0);e=a.g.data[c];while(e!==null&&!(e.b5==g&&Gv(b,e.U))){f=e.H;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.H=e.H;else a.g.data[c]=e.H;a.A=a.A+1|0;a.u=a.u-1|0;return e;}
function NY(a){return a.u;}
function Ei(b){return b.bO();}
function Gv(b,c){return b!==c&&!b.z(c)?0:1;}
function Gl(){var a=this;Du.call(a);a.bQ=0;a.G=null;a.m=null;}
function VX(){var a=new Gl();Mi(a);return a;}
function TT(a){var b=new Gl();NR(b,a);return b;}
function Mi(a){H5(a);a.bQ=0;a.G=null;}
function NR(a,b){DE(a,b);a.bQ=0;a.G=null;}
function M2(a,b){return L(EO,b);}
function K8(a,b){var c,d,e,f,g;if(b===null)c=CO(a);else{d=b.bO();e=(d&2147483647)%a.g.data.length|0;c=CC(a,b,e,d);}if(c===null)return null;if(a.bQ&&a.m!==c){f=c.y;g=c.p;g.y=f;if(f===null)a.G=g;else f.p=g;c.p=null;c.y=a.m;a.m.p=c;a.m=c;}return c.O;}
function Sh(a,b,c,d){var e;e=Ua(b,d);e.H=a.g.data[c];a.g.data[c]=e;a.dn(e);return e;}
function QO(a,b,c){var d;d=a.du(b,c);if(a.ij(a.G))a.gs(a.G.U);return d;}
function Si(a,b,c){var d,e,f,g,h,i;if(!a.u){a.G=null;a.m=null;}if(b===null){d=CO(a);if(d!==null)a.dn(d);else{a.A=a.A+1|0;e=a.u+1|0;a.u=e;if(e>a.bW)a.cd();d=a.bK(null,0,0);}}else{f=b.bO();e=f&2147483647;g=e%a.g.data.length|0;d=CC(a,b,g,f);if(d!==null)a.dn(d);else{a.A=a.A+1|0;h=a.u+1|0;a.u=h;if(h>a.bW){a.cd();g=e%a.g.data.length|0;}d=a.bK(b,g,f);}}i=d.O;d.O=c;return i;}
function KX(a,b){var c,d;if(a.m===b)return;if(a.G===null){a.G=b;a.m=b;return;}c=b.y;d=b.p;if(c!==null){if(d===null)return;if(a.bQ){c.p=d;d.y=c;b.p=null;b.y=a.m;a.m.p=b;a.m=b;}return;}if(d===null){b.y=a.m;b.p=null;a.m.p=b;a.m=b;}else if(a.bQ){a.G=d;d.y=null;b.y=a.m;b.p=null;a.m.p=b;a.m=b;}}
function Qe(a){return Ub(a);}
function Oj(a){if(a.c8===null)a.c8=Tx(a);return a.c8;}
function N8(a,b){var c,d,e;c=GW(a,b);if(c===null)return null;d=c.y;e=c.p;if(d===null)a.G=e;else d.p=e;if(e===null)a.m=d;else e.y=d;return c.O;}
function Lb(a,b){return 0;}
function QB(b){return b.G;}
function GT(){Ch.call(this);}
function N1(){var a=new GT();QK(a);return a;}
function QK(a){Eb(a);}
function Ov(a,b){D6(a,b);return a;}
function Ow(a,b,c){Ex(a,b,c);return a;}
function M7(a){return DM(a);}
function Nt(a,b){D9(a,b);}
function K5(a,b,c){return a.h1(b,c);}
function Cg(){var a=this;B.call(a);a.fs=0;a.v=0;a.R=0;a.b7=0;}
function WO(a){var b=new Cg();EG(b,a);return b;}
function EG(a,b){D(a);a.b7=(-1);a.fs=b;a.R=b;}
function Cs(a){return a.v;}
function IO(a,b){if(b>=0&&b<=a.R){a.v=b;if(b<a.b7)a.b7=0;return a;}F(B2(I().c(C(33)).r(b).c(C(34)).r(a.R).c(C(35)).e()));}
function G$(a){a.v=0;a.R=a.fs;a.b7=(-1);return a;}
function Bw(a){return a.R-a.v|0;}
function CF(a){return a.v>=a.R?0:1;}
function Cl(){var a=this;B.call(a);a.gY=null;a.eP=0;}
function WP(a,b){var c=new Cl();ES(c,a,b);return c;}
function ES(a,b,c){D(a);a.gY=b;a.eP=c;}
function Bd(a){return a.eP;}
function BR(){Cl.call(this);}
var WQ=null;var WF=null;var WR=null;var WS=null;function Dt(){Dt=J(BR);Qh();}
function Hc(a,b){var c=new BR();IF(c,a,b);return c;}
function IF(a,b,c){Dt();ES(a,b,c);}
function Fj(){var b,c;Dt();b=L(BR,3);c=b.data;c[0]=WQ;c[1]=WF;c[2]=WR;return b;}
function Qh(){WQ=Hc(C(36),0);WF=Hc(C(37),1);WR=Hc(C(38),2);WS=Fj();}
function Ce(){var a=this;B.call(a);a.fV=0;a.bY=null;a.dh=null;a.f3=null;}
function WT(a){var b=new Ce();DL(b,a);return b;}
function DL(a,b){D(a);a.fV=b.A;a.bY=QB(b);a.f3=b;}
function Ne(a){return a.bY===null?0:1;}
function J6(a){if(a.fV==a.f3.A)return;F(M$());}
function E2(a){J6(a);if(!a.x())F(OL());a.dh=a.bY;a.bY=a.bY.p;}
function B_(){}
function II(){Ce.call(this);}
function Vs(a){var b=new II();Pw(b,a);return b;}
function Pw(a,b){DL(a,b);}
function MZ(a){E2(a);return a.dh;}
function Q4(a){return a.hO();}
function CZ(){}
function C1(){B.call(this);this.cV=null;}
function WU(){var a=new C1();It(a);return a;}
function It(a){D(a);}
function J3(a,b){a.cV=b;}
function MU(a,b){a.cV.cO(b);}
function Ma(a,b){a.cV.cY(b);}
function C8(){}
function Dx(){C1.call(this);this.fJ=null;}
function WV(){var a=new Dx();HU(a);return a;}
function HU(a){It(a);}
function OH(a,b){a.fJ=b;J3(a,b);}
function IA(a,b){a.fR(b);}
function P$(a,b){return a.fJ.dK(b);}
function Kk(){var a=this;Dx.call(a);a.bE=0;a.db=0;a.di=0;a.dw=0;a.cp=null;a.es=0;a.bM=null;a.cx=null;a.ex=0;}
function UZ(){var a=new Kk();O9(a);return a;}
function O9(a){HU(a);}
function St(a){var b;if(MD()){b=M3(C(39),L(DC,0));b.cE(Vg(a));}a.cY(VQ(a));}
function Gb(a,b){var c,d,e,f,g,h,i,j,k;c=Pl(b);d=c.dA(C(40),X(0)).I();e=c.dG(C(41));f=e===null?0:1;if(f){a.bE=c.dG(C(41)).I();a.db=c.dG(C(42)).I();a.di=c.dA(C(43),X(0)).I();a.dw=c.dA(C(44),X(0)).I();a.es=c.iO(C(45));}if(a.es&&a.bM!==null){if(!f&&a.ex){g=a.bM;h=L(B,1);h.data[0]=X(d);i=g.dU(C(46),h);}else{g=a.bM;h=L(B,5);j=h.data;j[0]=X(d);j[1]=X(a.bE);j[2]=X(a.db);j[3]=X(a.di);j[4]=X(a.dw);i=g.dU(C(47),h);a.ex=1;}k=i.I();a.cx.f4(k);a.cp=a.cx.iE(3*a.bE|0);}else{if(f)Mk(a.bE,a.db,a.di,a.dw);a.cp=R$(a.bE,null);QC(d,
a.cp);}a.cO(a.dK(a.cp));}
function Ij(a,b){a.bM=b.c7();a.cx=a.bM.ik(0);}
function Ej(){}
function DD(){}
function Dv(){var a=this;B.call(a);a.U=null;a.O=null;}
function WW(a,b){var c=new Dv();Kf(c,a,b);return c;}
function Kf(a,b,c){D(a);a.U=b;a.O=c;}
function Rd(a){return a.U;}
function Se(a){return a.O;}
function Cq(){var a=this;Dv.call(a);a.b5=0;a.H=null;}
function UG(a,b){var c=new Cq();G2(c,a,b);return c;}
function G2(a,b,c){Kf(a,b,null);a.b5=c;}
function EO(){var a=this;Cq.call(a);a.p=null;a.y=null;}
function Ua(a,b){var c=new EO();Qa(c,a,b);return c;}
function Qa(a,b,c){G2(a,b,c);a.p=null;a.y=null;}
function DC(){B.call(this);}
function Ht(){var a=this;B.call(a);a.B=0.0;a.C=0.0;a.D=0.0;}
function Ck(a,b,c){var d=new Ht();PG(d,a,b,c);return d;}
function PG(a,b,c,d){D(a);a.B=b;a.C=c;a.D=d;}
function K(b,c,d){return Ck(b,c,d);}
function Bx(b){var c,d;c=Gh(b);d=c===0.0?Infinity:1.0/c;return Z(d,b);}
function Z(b,c){return Ck(c.B*b,c.C*b,c.D*b);}
function B0(b,c){return Ck(b.B-c.B,b.C-c.C,b.D-c.D);}
function CG(b,c){return Ck(b.B+c.B,b.C+c.C,b.D+c.D);}
function Bt(b,c){return b.B*c.B+b.C*c.C+b.D*c.D;}
function C7(b,c){return Ck(b.C*c.D-b.D*c.C,b.D*c.B-b.B*c.D,b.B*c.C-b.C*c.B);}
function Gh(b){return E6(Bt(b,b));}
function Cf(){Cn.call(this);}
function WX(a){var b=new Cf();EQ(b,a);return b;}
function EQ(a,b){FR(a,b);}
function IU(){Cf.call(this);}
function WY(a){var b=new IU();NT(b,a);return b;}
function NT(a,b){EQ(a,b);}
function Eg(){Bv.call(this);}
function Gk(){var a=this;B.call(a);a.cm=0;a.fl=0;a.fn=0;a.d1=0;a.bF=null;}
function TI(a){var b=new Gk();MV(b,a);return b;}
function MV(a,b){a.bF=b;D(a);a.fl=a.bF.ch;a.fn=a.bF.n();a.d1=(-1);}
function Lw(a){return a.cm>=a.fn?0:1;}
function P8(a){var b,c;Hs(a);a.d1=a.cm;b=a.bF;c=a.cm;a.cm=c+1|0;return b.cL(c);}
function Hs(a){if(a.fl>=a.bF.ch)return;F(M$());}
function C3(){}
function Dq(){var a=this;B.call(a);a.fx=null;a.im=null;a.hv=null;a.gj=null;a.i0=null;a.cX=0;a.gn=0;}
function WZ(a,b){var c=new Dq();F9(c,a,b);return c;}
function F9(a,b,c){D(a);a.fx=b.e3;a.im=b.eh;a.hv=b.d_;a.gj=b.dR;a.i0=b.fX;a.f4(c);}
function S9(a,b){a.gn=b;a.cX=b;}
function Dl(){N.call(this);}
function U0(){var a=new Dl();Fx(a);return a;}
function Fx(a){Br(a);}
function Kd(){Dl.call(this);}
function Td(){var a=new Kd();RR(a);return a;}
function RR(a){Fx(a);}
function EI(){}
function D7(){}
function F7(){B.call(this);}
function Hd(b,c){if(b===null)F(T0());if(b===E($rt_voidcls()))F(G4());if(c<0)F(Vc());return Rb(b.fG(),c);}
function Rb(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Kb(){B.call(this);}
function UL(){var a=new Kb();NI(a);return a;}
function NI(a){D(a);}
function LF(b){IA(b,UL());b.iQ();}
function Sk(a,b){if(!(b instanceof BI))self.postMessage(b);else self.postMessage($rt_ustr(b));}
function R7(a,b){var c,d,e,f,g;c=b.data;d=c.length;e=new Array();f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function P1(a,b){self.onmessage=Cp(UC(b),"handleEvent");}
function PL(b,c){b.gP(c.data);}
function Ia(){Bf.call(this);}
function H_(){var a=this;B.call(a);a.cu=0;a.co=null;}
function T7(a){var b=new H_();MG(b,a);return b;}
function MG(a,b){a.co=b;D(a);}
function Ry(a){return a.cu>=E8(a.co).data.length?0:1;}
function Mx(a){var b,c;if(a.cu==E8(a.co).data.length)F(OL());b=E8(a.co).data;c=a.cu;a.cu=c+1|0;return b[c];}
function GO(){var a=this;B.call(a);a.cC=Long_ZERO;a.cW=0;a.d9=0;}
function TD(){var a=new GO();M_(a);return a;}
function M_(a){D(a);}
function HK(){B.call(this);}
function Bj(){Cf.call(this);}
function W0(a){var b=new Bj();Nw(b,a);return b;}
function Nw(a,b){EQ(a,b);}
function Dk(){}
function Cu(){}
function B1(){B.call(this);}
function W1(){var a=new B1();ET(a);return a;}
function ET(a){D(a);}
function P2(a){var b,c,d,e,f;b=L(B,a.n());c=0;d=a.t();while(d.x()){e=b.data;f=c+1|0;e[c]=d.s();c=f;}return b;}
function Pf(a,b){var c,d,e,f;c=b.data;d=a.n();e=c.length;if(e<d)b=Hd(Cv(b).f2(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.t();while(f.x()){c=b.data;e=d+1|0;c[d]=f.s();d=e;}return b;}
function Na(a){var b,c;b=I();b.c(C(48));c=a.t();if(c.x())b.c(De(c.s()));while(c.x()){b.c(C(49)).c(De(c.s()));}b.c(C(35));return b.e();}
function EC(){}
function Eh(){return VW();}
function PK(a,b){if(!b.e6())a.cB(b.eU());else a.cH(b.c7());}
function RY(a){return TY(a);}
function Rr(a,b){var c;c=Eh();a.cE(T_(b,c));return c;}
function Oh(b,c,d){var e,f,g,$$je;if(!d.e6())c.cB(d.eU());else{try{e=b.f(d.c7());}catch($$e){$$je=Ba($$e);if($$je instanceof BN){g=$$je;f=E7();FS();f.iR(W2,C(50),g);c.cB(g);return;}else{throw $$e;}}e.cE(c.g1());}}
function Is(){var a=this;B.call(a);a.dk=0;a.bD=0;a.dD=null;a.e$=null;a.ez=null;}
function VW(){var a=new Is();M9(a);return a;}
function M9(a){D(a);}
function R_(a){return a.e$;}
function Mm(a){return a.ez;}
function P5(a){return a.bD;}
function L2(a){return !a.dk&&!a.bD?0:1;}
function RT(a,b){a.dD=b;Dz(a);}
function PZ(a,b){EY(a);a.e$=b;a.bD=1;Dz(a);}
function Nl(a,b){EY(a);a.ez=b;a.dk=1;Dz(a);}
function Dz(a){var b,$$je;a:{if(a.dD!==null&&a.iu()){try{a.dD.cT(a);break a;}catch($$e){$$je=Ba($$e);if($$je instanceof BN){b=$$je;}else{throw $$e;}}b.iS();}}}
function EY(a){var b,c,d;if(!a.bD&&!a.dk)return;b=new DT;c=!a.bD?C(51):C(52);d=I();R(R(d,C(53)),c);GJ(b,Y(d));F(b);}
function HM(){B.call(this);}
function K1(b,c){var d,e,f,g,h,i,j,k;if(!b)return C(6);d=1<<c;e=d-1|0;f=(((32-Gx(b)|0)+c|0)-1|0)/c|0;g=$rt_createCharArray(f);h=D0(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=Cm(b>>>h&e,d);h=h-c|0;i=k;}return Tg(g);}
function Fa(){S.call(this);this.iN=0;}
var W3=null;function P3(){P3=J(Fa);M4();}
function VD(a){var b=new Fa();G7(b,a);return b;}
function G7(a,b){P3();BW(a);a.iN=b;}
function FD(b){P3();return VD(b);}
function M4(){W3=E($rt_shortcls());}
function Fd(){}
function Hu(){B.call(this);}
function Cp(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function B6(){var a=this;B.call(a);a.dz=null;a.cR=null;a.dq=null;a.cQ=null;}
function W4(){var a=new B6();E$(a);return a;}
function E$(a){D(a);}
function H$(b,c){var d,e,f,g,h,i,j,k,l;d=B0(b,c);e=Bx(d);f=Ck(0.0,(-1.0),0.0);g=C7(e,f);h=Bx(g);i=Z(2.0,h);j=C7(e,i);k=Bx(j);l=Z(2.0,k);return Ux(c,e,l,i);}
function Fk(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=e/d;g=B0(b,c);h=Bx(g);i=Ck(0.0,(-1.0),0.0);j=C7(h,i);k=Bx(j);l=Z(2.0,k);m=C7(h,l);n=Bx(m);o=Z(2.0*f,n);return Ui(c,h,o,l);}
function G_(){B.call(this);this.fF=null;}
function Tl(a){var b=new G_();PY(b,a);return b;}
function PY(a,b){D(a);a.fF=b;}
function GV(a){return T7(a);}
function F8(b){return Tl(Lk(b.fG()));}
function Lk(b){if (!G_.$$services$$) {G_.$$services$$ = true;CA.$$serviceList$$ = [[D3, Ng]];CM.$$serviceList$$ = [[ER, KM]];}var cls = b;if (!cls.$$serviceList$$) {return $rt_createArray($rt_objcls(), 0);}var result = $rt_createArray($rt_objcls(), cls.$$serviceList$$.length);for (var i = 0; i < result.data.length; ++i) {var serviceDesc = cls.$$serviceList$$[i];result.data[i] = new serviceDesc[0]();serviceDesc[1](result.data[i]);}return result;}
function E8(b){return b.fF;}
function G8(){B.call(this);}
function Ol(b){var c,d,e,f;c=Ur(b.iT());d=FX(c);e=$rt_createIntArray(d);f=0;while(f<d){e.data[f]=FX(c);f=f+1|0;}return e;}
function BE(){var a=this;B.call(a);a.b2=null;a.bm=null;a.ca=null;}
function W5(){var a=new BE();Dd(a);return a;}
function Dd(a){D(a);}
function Bp(){var a=this;B.call(a);a.W=null;a.bi=null;}
function W6(){var a=new Bp();CE(a);return a;}
function CE(a){D(a);}
function I0(){var a=this;Bp.call(a);a.fw=null;a.e5=null;}
function Te(a,b){var c=new I0();MR(c,a,b);return c;}
function MR(a,b,c){a.fw=b;a.e5=c;CE(a);a.bi=a.fw.bm.dz;a.W=a.e5;}
function CR(){var a=this;B.call(a);a.gL=null;a.dl=null;a.gV=0.0;a.dQ=0.0;a.c2=null;a.dF=null;a.bp=0;}
function W7(a,b,c,d){var e=new CR();JB(e,a,b,c,d);return e;}
function W8(a,b,c){var d=new CR();IX(d,a,b,c);return d;}
function JB(a,b,c,d,e){D(a);EW();a.c2=W9;a.dF=W9;Jv(a,e);a.gL=b;a.dl=e.dI();a.gV=c;a.dQ=d;}
function IX(a,b,c,d){var e;e=$rt_createByteArray(1);e.data[0]=63;JB(a,b,c,d,e);}
function Jv(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.dQ)return;}F(B2(C(54)));}
function Ff(a,b){if(b!==null){a.c2=b;a.il(b);return a;}F(B2(C(55)));}
function R0(a,b){return;}
function Jw(a,b){if(b!==null){a.dF=b;a.hN(b);return a;}F(B2(C(55)));}
function Rn(a,b){return;}
function GD(a,b,c,d){var e,f,g,h,$$je;a:{if(a.bp!=3){if(d)break a;if(a.bp!=2)break a;}F(MN());}a.bp=!d?1:2;while(true){try{e=a.ha(b,c);}catch($$e){$$je=Ba($$e);if($$je instanceof N){f=$$je;F(Ul(f));}else{throw $$e;}}if(e.f_()){if(!d)return e;g=Bw(b);if(g<=0)return e;e=C4(g);}else if(e.cP())break;h=!e.fu()?a.c2:a.dF;b:{EW();if(h!==W$){if(h===W_)break b;else return e;}if(Bw(c)<a.dl.data.length)return Xa;IM(c,a.dl);}b.ep(Cs(b)+e.d()|0);}return e;}
function FN(a,b){var c;if(a.bp!=2&&a.bp!=4)F(MN());c=a.gt(b);Bu();if(c===Xb)a.bp=3;return c;}
function KT(a,b){Bu();return Xb;}
function BL(){B.call(this);}
var Xc=null;var Xd=null;var Xe=null;var Xf=null;var Xg=null;var Xh=null;function DU(){DU=J(BL);R4();}
function Jy(b){DU();return b instanceof S;}
function Ji(b){DU();return b===null?null:b instanceof Cc?b:!(b instanceof S)?null:X(b.I());}
function Ii(b){var c,$$je;DU();if(b===null)return null;a:{try{c=X(Et(b));}catch($$e){$$je=Ba($$e);if($$je instanceof D$){break a;}else{throw $$e;}}return c;}return null;}
function EM(b){var c;DU();c=Ji(b);if(c===null&&b!==null)return Ii(b.e());return c;}
function R4(){Xc=J2(0);Xd=FD(0);Xe=X(0);Xf=DW(Long_ZERO);Xg=J_(0.0);Xh=Bm(0.0);}
function CB(){}
function Pz(a,b){return a.Y(a.cI(b));}
function Dc(){var a=this;Cg.call(a);a.fC=0;a.ei=null;a.i2=null;}
function Xi(a,b,c,d,e){var f=new Dc();Go(f,a,b,c,d,e);return f;}
function Go(a,b,c,d,e,f){EG(a,c);RN();a.i2=WC;a.fC=b;a.ei=d;a.v=e;a.R=f;}
function RE(b,c,d){return UN(0,b.data.length,b,c,c+d|0,0,0);}
function OT(b){return RE(b,0,b.data.length);}
function QH(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.gg())F(Td());if(Bw(a)<d)F(T5());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)F(Ca(I().c(C(56)).r(g).c(C(57)).r(f).e()));if(d<0)F(Ca(I().c(C(58)).r(d).c(C(59)).e()));h=a.v+a.fC|0;i=0;while(i<d){j=a.ei.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.v=a.v+d|0;return a;}}e=b.data;F(Ca(I().c(C(60)).r(c).c(C(34)).r(e.length).c(C(61)).e()));}
function IM(a,b){return a.e1(b,0,b.data.length);}
function D_(a){G$(a);return a;}
function Jh(){var a=this;Dc.call(a);a.gh=0;a.d3=0;}
function UN(a,b,c,d,e,f,g){var h=new Jh();Lq(h,a,b,c,d,e,f,g);return h;}
function Lq(a,b,c,d,e,f,g,h){Go(a,b,c,d,e,f);a.gh=g;a.d3=h;}
function Qr(a){return a.d3;}
function FM(){var a=this;B.call(a);a.fc=null;a.eO=null;a.dB=null;a.eJ=null;a.bx=null;}
function TN(){var a=new FM();SP(a);return a;}
function SP(a){D(a);}
function Jj(a,b,c){if(b!==null)a.fc=b;if(c!==null)a.eO=c;return a;}
function IP(a){var b;if(a.dB===null){b=GV(a.fc.fB());if(b.x())a.dB=b.s();}return a.dB;}
function Jr(a){var b,c;a:{if(a.bx===null){a.bx=IP(a);if(a.eJ!==null){b=a.eJ.t();while(true){if(!b.x())break a;c=b.s();a.bx=c.f(a.bx);}}}}return a.bx;}
function Ho(){B.call(this);}
function T8(b){LF(UZ());}
function Bk(){Cl.call(this);}
var Wh=null;var We=null;var Wf=null;var Wc=null;var Wd=null;var Wb=null;var Wg=null;var Xj=null;function T(){T=J(Bk);Mw();}
function B7(a,b){var c=new Bk();I7(c,a,b);return c;}
function Eu(){T();return Xj.dI();}
function I7(a,b,c){T();ES(a,b,c);}
function IB(){var b,c;T();b=L(Bk,7);c=b.data;c[0]=Wh;c[1]=We;c[2]=Wf;c[3]=Wc;c[4]=Wd;c[5]=Wb;c[6]=Wg;return b;}
function Mw(){Wh=B7(C(62),0);We=B7(C(63),1);Wf=B7(C(64),2);Wc=B7(C(65),3);Wd=B7(C(66),4);Wb=B7(C(67),5);Wg=B7(C(68),6);Xj=IB();}
function Bo(){var a=this;B.call(a);a.ih=null;a.fD=0;}
var Xk=null;var W2=null;var Xl=null;var Xm=null;var Xn=null;var Xo=null;var Xp=null;var Xq=null;var Xr=null;function FS(){FS=J(Bo);Pg();}
function BO(a,b){var c=new Bo();JY(c,a,b);return c;}
function JY(a,b,c){FS();D(a);a.ih=b;a.fD=c;}
function CN(a){return a.fD;}
function Pg(){Xk=BO(C(69),2147483647);W2=BO(C(70),1000);Xl=BO(C(71),900);Xm=BO(C(72),800);Xn=BO(C(73),700);Xo=BO(C(74),500);Xp=BO(C(75),400);Xq=BO(C(76),300);Xr=BO(C(77),(-2147483648));}
function G9(){B.call(this);}
function KZ(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function OF(b){return IG(String.fromCharCode(b));}
function RQ(b){return b.$meta.item;}
function O5(b){return $rt_str(b.$meta.name);}
function CY(){var a=this;B.call(a);a.gf=null;a.h7=null;}
function Xs(a,b){var c=new CY();Hg(c,a,b);return c;}
function Hg(a,b,c){var d,e,f,g;d=c.data;D(a);HF(b);e=d.length;f=0;while(f<e){g=d[f];HF(g);f=f+1|0;}a.gf=b;a.h7=c.dI();}
function HF(b){var c,d;if(b.b8())F(IK(b));if(!HG(b.l(0)))F(IK(b));c=1;while(c<b.d()){a:{d=b.l(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(HG(d))break a;else F(IK(b));}}c=c+1|0;}}
function HG(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function Cz(){B.call(this);this.h5=null;}
var W_=null;var W$=null;var W9=null;function EW(){EW=J(Cz);KS();}
function Ju(a){var b=new Cz();Hy(b,a);return b;}
function Hy(a,b){EW();D(a);a.h5=b;}
function KS(){W_=Ju(C(78));W$=Ju(C(79));W9=Ju(C(80));}
function BD(){B.call(this);this.bV=0;}
var Wx=null;var Xt=null;var Xu=null;function DO(){DO=J(BD);ML();}
function M8(a){var b=new BD();G6(b,a);return b;}
function G6(a,b){DO();D(a);a.bV=b;}
function Qp(a){return a.bV;}
function Cy(b){DO();return !b?Xt:Wx;}
function Id(b){DO();return !b?C(81):C(82);}
function L7(a){return Id(a.bV);}
function LD(a,b){if(a===b)return 1;return b instanceof BD&&b.bV==a.bV?1:0;}
function ML(){Wx=M8(1);Xt=M8(0);Xu=E($rt_booleancls());}
function Cd(){N.call(this);}
function G4(){var a=new Cd();Ef(a);return a;}
function B2(a){var b=new Cd();Ks(b,a);return b;}
function Ef(a){Br(a);}
function Ks(a,b){EX(a,b);}
function HL(){Cd.call(this);this.gX=null;}
function IK(a){var b=new HL();PN(b,a);return b;}
function PN(a,b){Ef(a);a.gX=b;}
function Kl(){N.call(this);}
function OL(){var a=new Kl();Lj(a);return a;}
function Lj(a){Br(a);}
function Cj(){}
function K7(b){return Uk(b);}
function SG(b,c,d){return Kg(b.fZ(c),b.fZ(d));}
function Ft(){B.call(this);this.fr=null;}
function Uk(a){var b=new Ft();Ps(b,a);return b;}
function Ps(a,b){D(a);a.fr=b;}
function Qn(a,b,c){return SG(a.fr,b,c);}
function Em(){B.call(this);}
var V_=null;function TV(){TV=J(Em);QP();}
function QP(){var $$je;V_=$rt_createIntArray(Eu().data.length);a:{try{V_.data[Bd(Wb)]=1;break a;}catch($$e){$$je=Ba($$e);if($$je instanceof Bj){}else{throw $$e;}}}b:{try{V_.data[Bd(Wc)]=2;break b;}catch($$e){$$je=Ba($$e);if($$je instanceof Bj){}else{throw $$e;}}}c:{try{V_.data[Bd(Wd)]=3;break c;}catch($$e){$$je=Ba($$e);if($$je instanceof Bj){}else{throw $$e;}}}d:{try{V_.data[Bd(We)]=4;break d;}catch($$e){$$je=Ba($$e);if($$je instanceof Bj){}else{throw $$e;}}}e:{try{V_.data[Bd(Wf)]=5;break e;}catch($$e){$$je
=Ba($$e);if($$je instanceof Bj){}else{throw $$e;}}}f:{try{V_.data[Bd(Wh)]=6;break f;}catch($$e){$$je=Ba($$e);if($$je instanceof Bj){}else{throw $$e;}}}}
function Io(){B.call(this);}
function NN(b){return $rt_str(b);}
function E5(){}
function DV(){}
function BM(){B.call(this);}
function Xv(){var a=new BM();CQ(a);return a;}
function CQ(a){D(a);}
function Ln(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.d8(f[c]);e=e+1|0;c=g;}}
function C0(){BM.call(this);this.dN=null;}
function Xw(a){var b=new C0();FU(b,a);return b;}
function FU(a,b){CQ(a);a.dN=b;}
function IS(){var a=this;C0.call(a);a.hd=0;a.dv=0;a.M=null;a.bL=null;a.eD=null;}
function LA(a,b){var c=new IS();Ql(c,a,b);return c;}
function Ql(a,b,c){FU(a,b);a.M=I();a.bL=$rt_createCharArray(32);a.hd=c;a.eD=Vf();}
function L0(a,b,c,d){var $$je;if(!H7(a))return;a:{try{a.dN.cc(b,c,d);break a;}catch($$e){$$je=Ba($$e);if($$je instanceof Eg){}else{throw $$e;}}a.dv=1;}}
function H7(a){if(a.dN===null)a.dv=1;return a.dv?0:1;}
function Ea(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=Sf(b,c,d-c|0);g=$rt_createByteArray(BX(16,Bh(e.length,1024)));h=OT(g);i=a.eD.hV();EW();j=W$;i=Ff(i,j);j=W$;k=Jw(i,j);while(true){l=GD(k,f,h,1).cP();a.cc(g,0,Cs(h));D_(h);if(!l)break;}while(true){l=FN(k,h).cP();a.cc(g,0,Cs(h));D_(h);if(!l)break;}}
function OK(a,b){a.bL.data[0]=b;Ea(a,a.bL,0,1);}
function RH(a,b){a.M.c(b);C2(a);}
function NH(a,b){a.M.c(b).q(10);C2(a);}
function Sc(a,b){a.M.df(b).q(10);C2(a);}
function N5(a){a.hk(10);}
function C2(a){var b;b=a.M.d()<=a.bL.data.length?a.bL:$rt_createCharArray(a.M.d());a.M.ec(0,a.M.d(),b,0);Ea(a,b,0,a.M.d());a.M.d4(0);}
function M(){var a=this;B.call(a);a.T=null;a.J=null;a.P=null;}
function Xx(){var a=new M();Bz(a);return a;}
function Bz(a){D(a);}
function JR(){M.call(this);this.id=null;}
function Vo(a){var b=new JR();ON(b,a);return b;}
function ON(a,b){var c,d;a.id=b;Bz(a);a.J=O(0.5,0.1,0.1);a.P=K(4.0,2.5,(-5.0));Bg();c=Xy;d=I();Bs(R(d,C(83)),c);a.T=Y(d);Xy=Xy+1|0;}
function JU(){M.call(this);this.iI=null;}
function UP(a){var b=new JU();Nd(b,a);return b;}
function Nd(a,b){var c,d;a.iI=b;Bz(a);a.J=O(0.0,0.8,0.8);a.P=K((-10.0),12.0,(-7.5));Bg();c=Xy;d=I();Bs(R(d,C(83)),c);a.T=Y(d);Xy=Xy+1|0;}
function Q(){var a=this;BA.call(a);a.Q=0.0;a.K=null;}
function Xz(){var a=new Q();BB(a);return a;}
function BB(a){E1(a);}
function LL(a,b){return Bx(B0(b,a.K));}
function L1(a,b){var c,d,e,f;c=B0(a.K,b.bi);d=Bt(c,b.W);if(d<0.0)return null;e=CP(a.Q,2.0)-(Bt(c,c)-CP(d,2.0));f=e<0.0?0.0:d-E6(e);if(f===0.0)return null;return U$(a,a,b,f);}
function JV(){Q.call(this);this.iW=null;}
function UJ(a){var b=new JV();R1(b,a);return b;}
function R1(a,b){var c,d;a.iW=b;BB(a);By();a.j=XA;a.K=K(3.0,2.0,6.0);a.Q=1.75;Bg();c=XB;d=I();Bs(R(d,C(84)),c);a.N=Y(d);XB=XB+1|0;}
function JZ(){Q.call(this);this.gD=null;}
function TZ(a){var b=new JZ();Ld(b,a);return b;}
function Ld(a,b){var c,d;a.gD=b;BB(a);By();a.j=XA;a.K=K((-4.0),5.0,2.0);a.Q=2.0;Bg();c=XB;d=I();Bs(R(d,C(84)),c);a.N=Y(d);XB=XB+1|0;}
function JT(){M.call(this);this.gp=null;}
function Vv(a){var b=new JT();K6(b,a);return b;}
function K6(a,b){var c,d;a.gp=b;Bz(a);a.J=O(0.5,0.3,0.75);a.P=K((-2.0),5.0,0.0);Bg();c=Xy;d=I();Bs(R(d,C(83)),c);a.T=Y(d);Xy=Xy+1|0;}
function JW(){Q.call(this);this.hb=null;}
function Tt(a){var b=new JW();ND(b,a);return b;}
function ND(a,b){var c,d;a.hb=b;BB(a);By();a.j=XA;a.K=K((-5.0),5.0,(-6.0));a.Q=4.0;Bg();c=XB;d=I();Bs(R(d,C(84)),c);a.N=Y(d);XB=XB+1|0;}
function JO(){Q.call(this);this.it=null;}
function UA(a){var b=new JO();Rc(b,a);return b;}
function Rc(a,b){var c,d;a.it=b;BB(a);By();a.j=XC;a.K=K(0.0,3.0,1.0);a.Q=1.0;Bg();c=XB;d=I();Bs(R(d,C(84)),c);a.N=Y(d);XB=XB+1|0;}
function JK(){B.call(this);}
function Vy(){var a=new JK();Sz(a);return a;}
function Sz(a){D(a);}
function RW(a,b){return I_(a,b);}
function I_(a,b){return L6(b);}
function F2(){B.call(this);}
function TB(){var a=new F2();OE(a);return a;}
function OE(a){D(a);}
function KH(a,b){return Ip(a,b);}
function Ip(a,b){return LC(b);}
function JJ(){B.call(this);}
function Ut(){var a=new JJ();Oe(a);return a;}
function Oe(a){D(a);}
function LU(a,b){return F4(a,b);}
function F4(a,b){return Mh(b);}
function FZ(){B.call(this);}
function Tz(){var a=new FZ();P9(a);return a;}
function P9(a){D(a);}
function OO(a,b){return Ge(a,b);}
function Ge(a,b){return RX(b);}
function JX(){Q.call(this);this.hi=null;}
function Ti(a){var b=new JX();Rs(b,a);return b;}
function Rs(a,b){var c,d;a.hi=b;BB(a);By();a.j=XA;a.K=K(0.0,1.0,0.0);a.Q=0.5;Bg();c=XB;d=I();Bs(R(d,C(84)),c);a.N=Y(d);XB=XB+1|0;}
function JI(){B.call(this);}
function VV(){var a=new JI();SJ(a);return a;}
function SJ(a){D(a);}
function NJ(a,b){return Kt(a,b);}
function Kt(a,b){return Lu(b);}
function JP(){Q.call(this);this.hY=null;}
function TP(a){var b=new JP();OZ(b,a);return b;}
function OZ(a,b){var c,d;a.hY=b;BB(a);By();a.j=XC;a.K=K(4.0,3.0,1.0);a.Q=1.5;Bg();c=XB;d=I();Bs(R(d,C(84)),c);a.N=Y(d);XB=XB+1|0;}
function Eq(){}
function BK(){B1.call(this);}
function XD(){var a=new BK();Da(a);return a;}
function Da(a){ET(a);}
function Db(){BK.call(this);this.fS=null;}
function XE(a){var b=new Db();Hw(b,a);return b;}
function Hw(a,b){Da(a);a.fS=b;}
function N0(a){return a.fS;}
function H6(){Db.call(this);}
function Ub(a){var b=new H6();N6(b,a);return b;}
function N6(a,b){Hw(a,b);}
function Qb(a){return Vs(a.gu());}
function Km(){B.call(this);}
function TO(){var a=new Km();QQ(a);return a;}
function QQ(a){D(a);}
function MX(a,b){return HI(a,b);}
function HI(a,b){return LW(b);}
function J$(){B.call(this);}
function VB(){var a=new J$();Sn(a);return a;}
function Sn(a){D(a);}
function Qu(a,b){return Fw(a,b);}
function Fw(a,b){return OD(b);}
function Ko(){B.call(this);}
function U1(){var a=new Ko();Lv(a);return a;}
function Lv(a){D(a);}
function NE(a,b){return Iv(a,b);}
function Iv(a,b){return Sb(b);}
function J9(){B.call(this);}
function Un(){var a=new J9();Oo(a);return a;}
function Oo(a){D(a);}
function K$(a,b){return Hn(a,b);}
function Hn(a,b){return LG(b);}
function Kp(){B.call(this);}
function Tw(){var a=new Kp();OU(a);return a;}
function OU(a){D(a);}
function Rk(a,b){return HH(a,b);}
function HH(a,b){return Q9(b);}
function F1(){B.call(this);}
function UW(){var a=new F1();QS(a);return a;}
function QS(a){D(a);}
function KB(a,b){return Ha(a,b);}
function Ha(a,b){return P_(b);}
function J8(){B.call(this);}
function Vz(){var a=new J8();S3(a);return a;}
function S3(a){D(a);}
function Pn(a,b){return GY(a,b);}
function GY(a,b){return Nq(b);}
function Kn(){B.call(this);}
function TG(){var a=new Kn();P0(a);return a;}
function P0(a){D(a);}
function Qg(a,b){return FF(a,b);}
function FF(a,b){return KC(b);}
function JL(){B.call(this);}
function TW(){var a=new JL();MO(a);return a;}
function MO(a){D(a);}
function Sj(a,b){return JF(a,b);}
function JF(a,b){return Pq(b);}
function FY(){B.call(this);}
function UH(){var a=new FY();Lh(a);return a;}
function Lh(a){D(a);}
function OG(a,b){return Gw(a,b);}
function Gw(a,b){return Pr(b);}
function Fu(){CT.call(this);this.dj=null;}
function U_(){var a=new Fu();Rw(a);return a;}
function VF(a){var b=new Fu();Rl(b,a);return b;}
function Rw(a){Ga(a);}
function Rl(a,b){JE(a,b);}
function Pp(a){return a.dj;}
function R6(a,b){a.dj=b;}
function Nh(a){return a.dj;}
function Oa(a,b){return b;}
function Ny(a){return a.iY();}
function Hi(){B.call(this);}
function QX(b,c,d,e,f){var g,h;g=CW(e,f);if(!g){g=e;e=f;}else if(g>=0){c=c+0.5*(e-f|0);g=e;}else{b=b+0.5*(f-e|0);g=f;e=f;}h=Q5(b,c,d.bm,g,e);return EA(Te(d,h),d,0);}
function EA(b,c,d){var e,f;e=GR(b,c);f=null;if(e.t().x())f=e.t().s();if(f!==null)return Qt(f,c,d);B$();return XF;}
function GR(b,c){var d,e,f,g,h,i,j,k;d=TQ();e=c.b2.data;f=e.length;g=0;while(g<f){h=e[g];i=h.ej(b);if(i!==null)d.b6(i);g=g+1|0;}d.gA(K7(Ue()));j=L(BU,d.eR().data.length);k=0;while(true){e=j.data;if(k>=e.length)break;e[k]=d.eR().data[k];k=k+1|0;}i=LB(j);return i;}
function Lo(b,c){var d,e;d=GR(b,c);e=null;if(d.t().x())e=d.t().s();if(e!==null)return e.bR;return 0.0;}
function Qt(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=b.bz.W;f=CG(Z(b.bR,b.bz.W),b.bz.bi);g=b.E.fP(f);h=B0(e,Z(2.0*Bt(g,e),g));i=b.E.j.Z;j=i.f(f).bl()*Bt(g,e);i=b.E.j.Z;j=j-E6(1.0-CP(i.f(f).bl(),2.0)*(1.0-CP(Bt(g,e),2.0)));i=Z(j,g);k=b.E.j.Z;k=Z(k.f(f).bl(),e);l=B0(i,k);B$();m=XF;i=B5(m,Mp(b.E,f,g,h,c));if(d>=4)return i;n=OV(b.E,CG(f,Z(0.001,h)),h,c,d);o=KV(b.E,CG(g,Z(0.001,l)),l,c,d);k=BS(1.0-b.E.j.bn,n);p=BS(b.E.j.bn,o);return B5(i,B5(k,p));}
function OV(b,c,d,e,f){return BS(b.j.bA.f(c).bl(),EA(Uv(c,d),e,f+1|0));}
function KV(b,c,d,e,f){return BS(b.j.Z.f(c).bl(),EA(Vu(c,d),e,f+1|0));}
function Mp(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;g=O(0.0,0.0,0.0);h=f.ca.data;i=h.length;j=0;while(j<i){k=h[j];l=B0(k.P,c);m=Bx(l);n=Lo(Vx(c,m),f);o=n<=Gh(l)&&n!==0.0?0:1;if(o){p=Bt(m,d);q=p>0.0?BS(p,k.J):O(0.0,0.0,0.0);r=Bt(m,Bx(e));s=r<=0.0?O(0.0,0.0,0.0):BS(CP(r,b.j.bH),k.J);g=B5(g,B5(Ep(b.j.bJ.f(c),q),Ep(b.j.by.f(c),s)));}j=j+1|0;}return g;}
function Q5(b,c,d,e,f){return Bx(CG(d.dq,CG(Z(S$(b,e),d.cQ),Z(Os(c,f),d.cR))));}
function S$(b,c){var d;d=c;return (b-d/2.0)/(2.0*d);}
function Os(b,c){var d;d=c;return  -(b-d/2.0)/(2.0*d);}
function S7(b){return b.bR;}
function DP(){}
function IQ(){var a=this;B.call(a);a.c$=null;a.cj=null;}
function T6(a){var b=new IQ();Pu(b,a);return b;}
function Pu(a,b){var c;D(a);a.cj=b;c=a;b.classObject=c;}
function Gj(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=T6(b);return c;}
function MH(a){return a.cj;}
function Sy(a){if(a.c$===null)a.c$=O5(a.cj);return a.c$;}
function KR(a){return Gj(RQ(a.cj));}
function J5(){Bf.call(this);}
function BY(){S.call(this);this.cG=0.0;}
var XG=0.0;var XH=null;function H4(){H4=J(BY);M1();}
function Vr(a){var b=new BY();D4(b,a);return b;}
function TX(a){var b=new BY();IC(b,a);return b;}
function D4(a,b){H4();BW(a);a.cG=b;}
function IC(a,b){H4();D4(a,b);}
function J_(b){H4();return Vr(b);}
function LJ(a,b){if(a===b)return 1;return b instanceof BY&&b.cG===a.cG?1:0;}
function M1(){XG=NaN;XH=E($rt_floatcls());}
function GA(){B.call(this);}
function Mg(b,c){var d,e,f,g;d=b.data;e=$rt_createCharArray(c);f=Bh(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Ru(b,c){var d,e,f,g;d=b.data;e=Hd(Cv(b).f2(),c);f=Bh(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Pd(b,c){var d,e,f,g,h,i,j,k,l,m;d=b.data.length;if(!d)return;e=L(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data.length;if(h>=i)break;j=Bh(i,h+f|0);k=h+(2*f|0)|0;l=Bh(i,k);R3(g,e,h,j,l,c);h=k;}f=f*2|0;m=g;g=e;e=m;}a:{if(g!==b){h=0;while(true){m=g.data;if(h>=m.length)break a;e.data[h]=m[h];h=h+1|0;}}}}
function R3(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=d;i=e;a:{b:{while(d!=e){if(i==f)break b;j=b.data;k=j[d];l=j[i];if(g.fv(k,l)>0){j=c.data;m=h+1|0;j[h]=l;i=i+1|0;}else{j=c.data;m=h+1|0;j[h]=k;d=d+1|0;}h=m;}while(true){if(i>=f)break a;n=c.data;j=b.data;m=h+1|0;o=i+1|0;n[h]=j[i];h=m;i=o;}}while(true){if(d>=e)break a;n=c.data;j=b.data;o=h+1|0;m=d+1|0;n[h]=j[d];h=o;d=m;}}}
function LN(b,c){return MJ(b,0,b.data.length,c);}
function MJ(b,c,d,e){var f,g,h,i;if(c>d)F(G4());f=d-1|0;while(true){g=b.data;h=(c+f|0)/2|0;i=g[h];if(i==e)break;if(e>=i){c=h+1|0;if(c>f)return  -h-2|0;}else{f=h-1|0;if(f<c)return  -h-1|0;}}return h;}
function LB(b){return Tu(b);}
function JN(){BM.call(this);}
function U3(){var a=new JN();Lg(a);return a;}
function Lg(a){CQ(a);}
function KW(a,b){$rt_putStdout(b);}
function C6(){B.call(this);}
var XI=null;var XJ=null;function G5(){if(XI===null)XI=LA(U3(),0);return XI;}
function OR(){if(XJ===null)XJ=LA(UQ(),0);return XJ;}
function H8(){return Long_fromNumber(new Date().getTime());}
function GN(){B.call(this);}
function He(b){var c,d,e;c=UT(b.n());d=b.t();while(d.x()){e=d.s();if(Be(e,BP))c.b6(Ev(e));else if(!Be(e,B3))c.b6(e);else c.b6(He(e));}return c;}
function Ev(b){var c,d,e,f,g,h;c=TT(b.n());d=b.iK().t();while(d.x()){e=d.s();f=e.g3();if(Be(f,BP)){g=f;c.be(e.dt(),Ev(g));}else if(!Be(f,B3))c.be(e.dt(),f);else{h=f;c.be(e.dt(),He(h));}}return c;}
function GK(){B.call(this);}
function Ss(b){if(!(b instanceof BD))return null;return b;}
function KN(b){if(b===null)return null;if(b.ea(C(82)))return Cy(1);if(!b.ea(C(81)))return null;return Cy(0);}
function S2(b){var c;c=Ss(b);if(c===null&&b!==null)return KN(b.e());return c;}
function Ec(){}
function I8(){Ce.call(this);}
function VL(a){var b=new I8();QZ(b,a);return b;}
function QZ(a,b){DL(a,b);}
function RC(a){E2(a);return a.dh.U;}
function J7(){B.call(this);}
function S_(){var a=new J7();Od(a);return a;}
function Od(a){D(a);}
function L5(a,b){return I6(a,b);}
function I6(a,b){return SU(b);}
function HW(){BK.call(this);}
function VH(){var a=new HW();Py(a);return a;}
function Py(a){Da(a);}
function HV(){B8.call(this);}
function UK(){var a=new HV();PE(a);return a;}
function PE(a){Ew(a);}
function E4(){}
function Fs(){Dq.call(this);}
function U7(a,b){var c=new Fs();NA(c,a,b);return c;}
function NA(a,b,c){F9(a,b,c);}
function RB(a,b){var c,d,e,f,g;c=$rt_createByteArray(b);d=0;while(d<b){e=c.data;f=a.fx;g=a.cX;a.cX=g+1|0;e[d]=f[g];d=d+1|0;}return c;}
function DH(){B.call(this);}
var XK=null;function K0(){K0=J(DH);So();}
function Hp(b){var c,d;K0();c=XK.cv(b);if(c===null){d=XK;c=TN();d.be(b,c);}return c;}
function EF(b,c,d){var e,f,g,h,i,j;K0();e=Hp(b);f=Jj(e,c,d);g=Jr(f);if(g!==null)return g;e=f.eO;Dt();if(e!==WQ){h=b.dg();i=I();R(R(R(i,C(85)),h),C(86));j=Y(i);if(e===WR)F(UX(j));e=E7();FS();e.iC(Xl,j);}return null;}
function So(){XK=SW();}
function B3(){}
function OA(a,b){GQ(a,b);}
function BF(){B1.call(this);this.ch=0;}
function XL(){var a=new BF();Dr(a);return a;}
function Dr(a){ET(a);}
function Po(a){return TI(a);}
function HX(){BF.call(this);}
function VC(){var a=new HX();LT(a);return a;}
function LT(a){Dr(a);}
function BG(){B.call(this);}
var XM=null;var XN=null;var XO=null;var XP=null;function Bc(){Bc=J(BG);LS();}
function D1(b){Bc();return (b&64512)!=55296?0:1;}
function DY(b){Bc();return (b&64512)!=56320?0:1;}
function JC(b){Bc();return !D1(b)&&!DY(b)?0:1;}
function I$(b,c){Bc();return ((b&1023)<<10|c&1023)+65536|0;}
function Fc(b){var c;Bc();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function EP(b){Bc();return (56320|b&1023)&65535;}
function EK(b){Bc();return FA(b)&65535;}
function FA(b){Bc();return OF(b).toLowerCase().charCodeAt(0);}
function Fi(b){Bc();return Hl(b);}
function Hl(b){var c,d,e,f,g,h,i,j;Bc();c=FG();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=CW(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function Cm(b,c){Bc();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function FG(){Bc();if(XN===null)XN=Ol((Fv().value!==null?$rt_str(Fv().value):null));return XN;}
function Fv(){Bc();if(XP===null)XP=Jp();return XP;}
function LS(){XM=E($rt_charcls());XO=L(BG,128);}
function Jp(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function Cw(){}
function DB(){B.call(this);}
function XQ(a){var b=new DB();IW(b,a);return b;}
function IW(a,b){D(a);a.hB(b);}
function Mj(a,b){return a.ff().cL(b);}
function Pk(a){return a.ff().n();}
function Gi(){B.call(this);}
function S8(b){return b;}
function H0(){M.call(this);this.iV=null;}
function T$(a){var b=new H0();LX(b,a);return b;}
function LX(a,b){a.iV=b;Bz(a);a.J=O(0.75,0.75,0.75);a.P=K((-4.0),3.0,4.0);a.T=C(87);}
function CX(){Cg.call(this);}
function XR(a,b,c){var d=new CX();Fq(d,a,b,c);return d;}
function Fq(a,b,c,d){EG(a,b);a.v=c;a.R=d;}
function Sf(b,c,d){return T3(0,b.data.length,b,c,c+d|0,0);}
function LZ(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)F(Ca(I().c(C(88)).r(g).c(C(57)).r(f).e()));if(Bw(a)<d)F(Vn());if(d<0)F(Ca(I().c(C(58)).r(d).c(C(59)).e()));h=a.v;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.iy(h);i=i+1|0;c=g;h=f;}a.v=a.v+d|0;return a;}}e=b.data;F(Ca(I().c(C(60)).r(c).c(C(34)).r(e.length).c(C(61)).e()));}
function KA(a,b){IO(a,b);return a;}
function Df(){CX.call(this);}
function XS(a,b,c){var d=new Df();Hz(d,a,b,c);return d;}
function Hz(a,b,c,d){Fq(a,b,c,d);}
function JA(){var a=this;Df.call(a);a.iJ=0;a.e7=0;a.f0=null;}
function T3(a,b,c,d,e,f){var g=new JA();SS(g,a,b,c,d,e,f);return g;}
function SS(a,b,c,d,e,f,g){Hz(a,c,e,f);a.e7=b;a.iJ=g;a.f0=d;}
function Mr(a,b){return a.f0.data[b+a.e7|0];}
function H3(){M.call(this);this.hZ=null;}
function VM(a){var b=new H3();Ly(b,a);return b;}
function Ly(a,b){a.hZ=b;Bz(a);a.J=O(0.75,0.75,0.75);a.P=K(4.0,3.0,(-4.0));a.T=C(87);}
function H1(){M.call(this);this.gW=null;}
function VG(a){var b=new H1();Pj(b,a);return b;}
function Pj(a,b){a.gW=b;Bz(a);a.J=O(0.75,0.75,0.75);a.P=K((-4.0),3.0,(-4.0));a.T=C(87);}
function H2(){M.call(this);this.hu=null;}
function Uq(a){var b=new H2();PW(b,a);return b;}
function PW(a,b){a.hu=b;Bz(a);a.J=O(0.75,0.75,0.75);a.P=K(4.0,3.0,4.0);a.T=C(87);}
function HY(){Q.call(this);this.f7=null;}
function VU(a){var b=new HY();Qf(b,a);return b;}
function Qf(a,b){a.f7=b;BB(a);By();a.j=XA;a.K=K(0.0,1.0,0.0);a.Q=1.0;a.N=C(89);}
function EH(){}
function Ka(){B.call(this);this.e4=null;}
function UC(a){var b=new Ka();OY(b,a);return b;}
function OY(a,b){D(a);a.e4=b;}
function P6(a,b){Ki(a,b);}
function Ki(a,b){PL(a.e4,b);}
function Qv(a,b){a.h9(b);}
function Ix(){B.call(this);}
function MS(b){return b?1:0;}
function FJ(){BE.call(this);}
function Uh(){var a=new FJ();PB(a);return a;}
function PB(a){var b,c;Dd(a);b=L(BA,7);c=b.data;Bg();c[0]=XT;c[1]=UA(a);c[2]=TP(a);c[3]=Ti(a);c[4]=TZ(a);c[5]=UJ(a);c[6]=Tt(a);a.b2=b;b=L(M,3);c=b.data;c[0]=Vv(a);c[1]=UP(a);c[2]=Vo(a);a.ca=b;a.bm=H$(K(0.0,1.0,0.0),K(5.0,5.0,5.0));}
function FI(){BE.call(this);}
function VY(){var a=new FI();NB(a);return a;}
function NB(a){var b,c;Dd(a);b=L(BA,2);c=b.data;c[0]=VU(a);Bg();c[1]=XT;a.b2=b;b=L(M,4);c=b.data;c[0]=Uq(a);c[1]=VM(a);c[2]=T$(a);c[3]=VG(a);a.ca=b;a.bm=Fk(K(0.0,1.0,0.0),K(3.0,3.0,3.0),600.0,450.0);}
function BT(){S.call(this);this.S=0.0;}
var XU=0.0;var XV=null;function EL(){EL=J(BT);NU();}
function N_(a){var b=new BT();I4(b,a);return b;}
function I4(a,b){EL();BW(a);a.S=b;}
function SM(a){return a.S;}
function NX(a){return a.S|0;}
function Bm(b){EL();return N_(b);}
function FQ(b){EL();return I().hD(b).e();}
function L3(a){return FQ(a.S);}
function S5(a,b){if(a===b)return 1;return b instanceof BT&&b.S===a.S?1:0;}
function Kg(b,c){EL();return CW(b,c);}
function LQ(a){return isNaN(a.S)?1:0;}
function Nu(a){return !isFinite(a.S)?1:0;}
function NU(){XU=NaN;XV=E($rt_doublecls());}
function FH(){BE.call(this);}
function Uj(){var a=new FH();Rj(a);return a;}
function Rj(a){var b,c;Dd(a);b=L(BA,1);c=b.data;Bg();c[0]=XT;a.b2=b;b=L(M,1);b.data[0]=U2(a);a.ca=b;a.bm=Fk(K(0.0,1.0,0.0),K(3.0,3.0,3.0),600.0,450.0);}
function Dw(){var a=this;BA.call(a);a.eA=0.0;a.ck=null;}
function XW(){var a=new Dw();Fp(a);return a;}
function Fp(a){E1(a);}
function O6(a,b){return a.ck;}
function Rf(a,b){var c,d;c=Bt(a.ck,b.W);if(c>0.0)return null;d=(a.eA+Bt(a.ck,b.bi))/ -c;return Tk(a,a,b,d);}
function FL(){Dw.call(this);}
function Uf(){var a=new FL();Re(a);return a;}
function Re(a){Fp(a);By();a.j=XX;a.ck=K(0.0,1.0,0.0);a.eA=0.0;a.N=C(90);}
function FK(){Q.call(this);}
function VK(){var a=new FK();NV(a);return a;}
function NV(a){BB(a);By();a.j=XX;a.K=K(0.0,(-10000.0),0.0);a.Q=1.0E-7;a.N=C(90);}
function Ie(){B.call(this);}
function NZ(b){return b!==null?b.e():null;}
function Sm(b){return b!==null?b.d():0;}
function Nb(b){return Sm(b)?0:1;}
function I2(){var a=this;Bp.call(a);a.er=null;a.fz=null;}
function Vu(a,b){var c=new I2();SF(c,a,b);return c;}
function SF(a,b,c){a.er=b;a.fz=c;CE(a);a.bi=a.er;a.W=a.fz;}
function IZ(){var a=this;Bp.call(a);a.eE=null;a.eG=null;}
function Uv(a,b){var c=new IZ();S0(c,a,b);return c;}
function S0(a,b,c){a.eE=b;a.eG=c;CE(a);a.bi=a.eE;a.W=a.eG;}
function J0(){BK.call(this);this.c9=null;}
function Tx(a){var b=new J0();Ok(b,a);return b;}
function Ok(a,b){a.c9=b;Da(a);}
function Rv(a){return a.c9.n();}
function Rg(a){return VL(a.c9);}
function C5(){}
function GG(){var a=this;BF.call(a);a.w=null;a.br=0;}
function TQ(){var a=new GG();PQ(a);return a;}
function UT(a){var b=new GG();DG(b,a);return b;}
function Vh(a){var b=new GG();N7(b,a);return b;}
function PQ(a){DG(a,10);}
function DG(a,b){Dr(a);a.w=L(B,b);}
function N7(a,b){var c,d;DG(a,b.n());c=b.t();d=0;while(d<a.w.data.length){a.w.data[d]=c.s();d=d+1|0;}a.br=a.w.data.length;}
function LR(a,b){var c,d;if(a.w.data.length<b){if(a.w.data.length>=1073741823)c=2147483647;else{d=a.w.data.length*2|0;c=BX(b,BX(d,5));}a.w=Ru(a.w,c);}}
function Ob(a,b){DJ(a,b);return a.w.data[b];}
function MF(a){return a.br;}
function Lm(a,b,c){var d;DJ(a,b);d=a.w.data[b];a.w.data[b]=c;return d;}
function QM(a,b){var c,d;a.bu(a.br+1|0);c=a.w.data;d=a.br;a.br=d+1|0;c[d]=b;a.ch=a.ch+1|0;return 1;}
function DJ(a,b){if(b>=0&&b<a.br)return;F(Gp());}
function I1(){var a=this;Bp.call(a);a.fL=null;a.d7=null;}
function Vx(a,b){var c=new I1();SX(c,a,b);return c;}
function SX(a,b,c){a.fL=b;a.d7=c;CE(a);a.bi=a.fL;a.W=a.d7;}
function Bi(){var a=this;B.call(a);a.by=null;a.bA=null;a.bJ=null;a.Z=null;a.bn=0.0;a.bH=0.0;a.cn=null;}
function XY(){var a=new Bi();CI(a);return a;}
function CI(a){D(a);}
function Jf(){Bi.call(this);}
function Tr(){var a=new Jf();NC(a);return a;}
function NC(a){CI(a);a.cn=C(90);a.Z=Tw();a.bA=TG();a.bJ=TO();a.by=U1();a.bH=15.0;a.bn=0.0;}
function Sb(b){return O(0.5,0.5,0.5);}
function LW(b){return O(0.25,0.25,0.25);}
function KC(b){return Bm(0.65);}
function Q9(b){return Bm(0.0);}
function Jc(){Bi.call(this);}
function Tb(){var a=new Jc();Pm(a);return a;}
function Pm(a){CI(a);a.cn=C(91);a.Z=VB();a.bA=Un();a.bJ=Vz();a.by=S_();a.bH=0.0;a.bn=0.1;}
function SU(b){return O(0.25,0.25,0.25);}
function Nq(b){return O(0.25,0.25,0.25);}
function LG(b){return Bm(0.25);}
function OD(b){return Bm(0.0);}
function IE(){Bi.call(this);}
function UR(){var a=new IE();KP(a);return a;}
function KP(a){CI(a);a.cn=C(92);a.Z=UH();a.bA=UW();a.bJ=Tz();a.by=TB();a.bH=100.0;a.bn=0.95;}
function LC(b){return O(0.5,0.5,0.5);}
function RX(b){return O(0.0,0.0,0.0);}
function P_(b){return Bm(0.0);}
function Pr(b){return Bm(1.0);}
function D2(){}
function Jd(){Bi.call(this);}
function Va(){var a=new Jd();RI(a);return a;}
function RI(a){CI(a);a.cn=C(93);a.Z=TW();a.bA=Vy();a.bJ=Ut();a.by=VV();a.bH=25.0;a.bn=0.1;}
function Lu(b){return O(0.75,0.75,0.75);}
function Mh(b){return O(1.0,1.0,1.0);}
function L6(b){return Bm(1.0);}
function Pq(b){return Bm(0.0);}
function BI(){var a=this;B.call(a);a.h=null;a.b0=0;}
var XZ=null;function Kj(){Kj=J(BI);Qi();}
function Tg(a){var b=new BI();F5(b,a);return b;}
function NG(a,b,c){var d=new BI();Ku(d,a,b,c);return d;}
function F5(a,b){var c,d,e;Kj();c=b.data;D(a);d=c.length;a.h=$rt_createCharArray(d);e=0;while(e<d){a.h.data[e]=c[e];e=e+1|0;}}
function Ku(a,b,c,d){var e,f;Kj();D(a);a.h=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.h.data[e]=f[e+c|0];e=e+1|0;}}
function Mu(a,b){if(b>=0&&b<a.h.data.length)return a.h.data[b];F(NS());}
function PV(a){return a.h.data.length;}
function RZ(a){return a.h.data.length?0:1;}
function QI(a,b){var c,d,e,f,g;if(a===b)return 0;c=Bh(a.d(),b.d());d=0;while(true){if(d>=c)return a.d()-b.d()|0;e=a.l(d);f=b.l(d);g=e-f|0;if(g)break;d=d+1|0;}return g;}
function Pb(a,b){var c,d,e,f;if(a===b)return 1;if(b.d()>a.d())return 0;c=0;d=a.d()-b.d()|0;while(d<a.d()){e=a.l(d);f=c+1|0;if(e!=b.l(c))return 0;d=d+1|0;c=f;}return 1;}
function L9(a,b,c){var d,e,f,g;d=BX(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.h.data.length)return (-1);if(a.h.data[d]==e)break;d=d+1|0;}return d;}f=Fc(b);g=EP(b);while(true){if(d>=(a.h.data.length-1|0))return (-1);if(a.h.data[d]==f&&a.h.data[d+1|0]==g)break;d=d+1|0;}return d;}
function Pa(a,b){return a.d6(b,0);}
function Mz(a,b,c){var d,e,f,g,h,i;d=Bh(c,a.d()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.h.data[d]==e)break;d=d+(-1)|0;}return d;}f=Fc(b);g=EP(b);while(true){if(d<1)return (-1);if(a.h.data[d]==g){h=a.h.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function Rh(a,b){return a.iH(b,a.d()-1|0);}
function Lf(a,b,c){if(b>c)F(Gp());return NG(a.h,b,c-b|0);}
function Rt(a,b){return a.bk(b,a.d());}
function Nn(a){return a;}
function R8(a){var b,c,d;b=$rt_createCharArray(a.h.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.h.data[c];c=c+1|0;}return b;}
function De(b){Kj();return b===null?C(5):b.e();}
function QJ(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BI))return 0;c=b;if(c.d()!=a.d())return 0;d=0;while(d<c.d()){if(a.l(d)!=c.l(d))return 0;d=d+1|0;}return 1;}
function Q0(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.d()!=b.d())return 0;c=0;while(c<a.d()){if(EK(a.l(c))!=EK(b.l(c)))return 0;c=c+1|0;}return 1;}
function Ml(a){var b,c,d,e;a:{if(!a.b0){b=a.h.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.b0=(31*a.b0|0)+e|0;d=d+1|0;}}}return a.b0;}
function PJ(a,b){return a.hI(b);}
function Qi(){XZ=Vb();}
function Kv(){N.call(this);}
function Vc(){var a=new Kv();MM(a);return a;}
function MM(a){Br(a);}
function DA(){CR.call(this);}
function X0(a,b,c){var d=new DA();Hk(d,a,b,c);return d;}
function Hk(a,b,c,d){IX(a,b,c,d);}
function MB(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(Bh(Bw(b),512));e=0;f=0;g=$rt_createByteArray(Bh(Bw(c),512));a:{while(true){if((e+32|0)>f&&CF(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bh(Bw(b)+j|0,i.length);b.ir(d,j,f-j|0);e=0;}if(!CF(c)){if(!CF(b)&&e>=f){Bu();k=Xb;}else{Bu();k=Xa;}break a;}i=g.data;l=Bh(Bw(c),i.length);m=TS(b,c);k=a.gB(d,e,f,g,0,l,m);e=m.eY;if(k===null&&0==m.ds){Bu();k=Xb;}j=m.ds;c.e1(g,0,j);if(k!==null)break;}}b.ep(Cs(b)-(f-e|0)|0);return k;}
function HN(){DA.call(this);}
function UD(a){var b=new HN();Pc(b,a);return b;}
function Pc(a,b){Hk(a,b,2.0,4.0);}
function SC(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.dE(2))break a;Bu();i=Xa;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!JC(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.dE(3))break a;Bu();i=Xa;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if(!D1(l))
{i=C4(1);break a;}if(j>=d){if(h.h6())break a;Bu();i=Xb;break a;}n=j+1|0;p=k[j];if(!DY(p)){j=n+(-2)|0;i=C4(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.dE(4))break a;Bu();i=Xa;break a;}k=e.data;q=I$(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.iD(j);h.gm(f);return i;}
function D8(){}
function Gu(){B.call(this);this.fE=null;}
function Uc(a){var b=new Gu();Ky(b,a);return b;}
function Ky(a,b){D(a);a.fE=b;}
function L8(a,b,c){PO(a.fE,b,c);}
function Q1(a,b,c){a.is(b,c);}
function Gt(){B.call(this);this.eS=null;}
function U5(a){var b=new Gt();OM(b,a);return b;}
function OM(a,b){D(a);a.eS=b;}
function SY(a,b){Kr(a.eS,b);}
function OB(a,b){a.ic(b);}
function DR(){}
function Gs(){B.call(this);this.eg=null;}
function TJ(a){var b=new Gs();On(b,a);return b;}
function On(a,b){D(a);a.eg=b;}
function Nf(a,b){O0(a.eg,b);}
function N9(a,b){a.dp(b);}
function If(){B.call(this);}
function VN(){var a=new If();PI(a);return a;}
function PI(a){D(a);}
function Bq(){B.call(this);}
var XB=0;var Xy=0;var XT=null;var X1=null;var X2=null;var X3=null;var X4=null;var X5=null;function Bg(){Bg=J(Bq);OX();}
function OX(){var b,c;XB=0;Xy=0;b=L(Bi,4);c=b.data;By();c[0]=X6;c[1]=XX;c[2]=XA;c[3]=XC;X7=b;XT=Uf();X4=VK();X1=Uh();X2=VY();X3=Uj();b=L(BE,1);b.data[0]=X1;X5=b;}
function Ig(){B.call(this);}
function Uo(){var a=new Ig();OI(a);return a;}
function OI(a){D(a);}
function N$(a,b,c){return Js(b,c);}
function D$(){Cd.call(this);}
function VO(){var a=new D$();Mc(a);return a;}
function CU(a){var b=new D$();SR(b,a);return b;}
function Mc(a){Ef(a);}
function SR(a,b){Ks(a,b);}
function GF(){M.call(this);this.hH=null;}
function U2(a){var b=new GF();NK(b,a);return b;}
function NK(a,b){a.hH=b;Bz(a);a.J=O(1.0,1.0,1.0);a.P=K(0.0,1.0,0.0);a.T=C(87);}
function Ke(){CY.call(this);}
function Vf(){var a=new Ke();Ri(a);return a;}
function Ri(a){Hg(a,C(94),L(BI,0));}
function Ro(a){return UD(a);}
function Cr(){B.call(this);}
var X8=0;var X9=0;var X$=null;function R$(b,c){var d;d=3*b|0;if(c!==null&&c.data.length==d)return c;return $rt_createByteArray(d);}
function Mk(b,c,d,e){var f,g,h,i,j,k,l;X8=b;X9=c;Bg();X$=X5.data[d];f=e*0.005;g=0.55+f*6.0*2.0*3.141592653589793;h=1.55;i=2.55;j=f-0.2;if(j>0.0){h=h+20.0*Jk(1.0,j);i=i+20.0*ID(Jk(1.0,j)*3.141592653589793/2.0);}k=i*L4(g);l=i*ID(g);X$.bm=H$(K(0.0,1.0,0.0),K(k,h,l));}
function QC(b,c){var d,e;d=0;e=0;while(e<X8){d=LH(e,b,c,d);e=e+1|0;}}
function LH(b,c,d,e){var f,g,h,i;f=d.data;g=QX(b,c,X$,X8,X9);h=e+1|0;f[e]=(g.cK(g.bf)*255.0+(-128.0)|0)<<24>>24;i=h+1|0;f[h]=(g.cK(g.bc)*255.0+(-128.0)|0)<<24>>24;h=i+1|0;f[i]=(g.cK(g.bd)*255.0+(-128.0)|0)<<24>>24;return h;}
function EJ(){var a=this;B.call(a);a.bf=0.0;a.bc=0.0;a.bd=0.0;}
var XF=null;function B$(){B$=J(EJ);Pi();}
function DZ(a,b,c){var d=new EJ();HJ(d,a,b,c);return d;}
function HJ(a,b,c,d){B$();D(a);a.bf=b;a.bc=c;a.bd=d;}
function O(b,c,d){B$();return DZ(b,c,d);}
function BS(b,c){B$();return DZ(b*c.bf,b*c.bc,b*c.bd);}
function Ep(b,c){B$();return DZ(b.bf*c.bf,b.bc*c.bc,b.bd*c.bd);}
function B5(b,c){B$();return DZ(b.bf+c.bf,b.bc+c.bc,b.bd+c.bd);}
function RV(a,b){if(b<0.0)b=0.0;else if(b>1.0)b=1.0;return b;}
function Pi(){XF=O(0.0,0.0,0.0);}
function DT(){Bv.call(this);}
function MN(){var a=new DT();Pe(a);return a;}
function UX(a){var b=new DT();GJ(b,a);return b;}
function Pe(a){C9(a);}
function GJ(a,b){DI(a,b);}
function Hr(){var a=this;B.call(a);a.F=null;a.e3=null;a.eh=null;a.d_=null;a.dR=null;a.fX=null;}
function Tf(a){var b=new Hr();K2(b,a);return b;}
function K2(a,b){var c;D(a);a.F=b;c=b.exports.memory.buffer;a.e3=new Int8Array(c);a.eh=new Int16Array(c);a.d_=new Int32Array(c);a.dR=new Float32Array(c);a.fX=new Float64Array(c);}
function LP(a,b){return U7(a,b);}
function MI(a,b,c){return MC(Hh(a,b,c));}
function Hh(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=c.data;switch(d.length){case 0:return a.F.exports[$rt_ustr(b)]();case 1:e=a.F;f=G(d[0]);return e.exports[$rt_ustr(b)](f);case 2:e=a.F;f=G(d[0]);g=G(d[1]);return e.exports[$rt_ustr(b)](f,g);case 3:e=a.F;f=G(d[0]);g=G(d[1]);h=G(d[2]);return e.exports[$rt_ustr(b)](f,g,h);case 4:e=a.F;f=G(d[0]);g=G(d[1]);h=G(d[2]);i=G(d[3]);return e.exports[$rt_ustr(b)](f,g,h,i);case 5:e=a.F;f=G(d[0]);g=G(d[1]);h=G(d[2]);i=G(d[3]);j=G(d[4]);return e.exports[$rt_ustr(b)](f,g,h,i,j);case 6:e
=a.F;f=G(d[0]);g=G(d[1]);h=G(d[2]);i=G(d[3]);j=G(d[4]);k=G(d[5]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k);case 7:e=a.F;f=G(d[0]);g=G(d[1]);h=G(d[2]);i=G(d[3]);j=G(d[4]);k=G(d[5]);l=G(d[6]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l);case 8:e=a.F;f=G(d[0]);g=G(d[1]);h=G(d[2]);i=G(d[3]);j=G(d[4]);k=G(d[5]);l=G(d[6]);m=G(d[7]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l,m);case 9:e=a.F;f=G(d[0]);g=G(d[1]);h=G(d[2]);i=G(d[3]);j=G(d[4]);k=G(d[5]);l=G(d[6]);m=G(d[7]);n=G(d[8]);return e.exports[$rt_ustr(b)](f,g,
h,i,j,k,l,m,n);default:}return null;}
function G(b){return QR(b);}
function FB(){N.call(this);}
function T0(){var a=new FB();NQ(a);return a;}
function NQ(a){Br(a);}
function BU(){var a=this;B.call(a);a.E=null;a.bR=0.0;a.bz=null;}
function X_(){var a=new BU();ED(a);return a;}
function ED(a){D(a);}
function HO(){var a=this;BU.call(a);a.el=null;a.ed=null;a.fe=0.0;a.h8=null;}
function Tk(a,b,c,d){var e=new HO();SV(e,a,b,c,d);return e;}
function SV(a,b,c,d,e){a.h8=b;a.el=c;a.ed=d;a.fe=e;ED(a);a.E=a.el;a.bz=a.ed;a.bR=a.fe;}
function Hj(){B.call(this);}
function Gg(){var b;b=U4();Dt();return EF(E(CA),b,WQ);}
function MD(){var b;b=Gg();return b!==null&&b.hG()?1:0;}
function M3(b,c){return Gg().hj(b,c);}
function R9(){return F8(E(CA));}
function Jx(){B.call(this);}
function ID(b){return Math.sin(b);}
function L4(b){return Math.cos(b);}
function E6(b){return Math.sqrt(b);}
function QD(b){return Math.floor(b);}
function CP(b,c){return Math.pow(b,c);}
function Bh(b,c){if(b<c)c=b;return c;}
function BX(b,c){if(b>c)c=b;return c;}
function Jk(b,c){if(b<c)c=b;return c;}
function RO(b){if(b<=0.0)b= -b;return b;}
function DX(){S.call(this);this.hP=0;}
var Ya=null;function Q_(){Q_=J(DX);LE();}
function VS(a){var b=new DX();Ib(b,a);return b;}
function Ib(a,b){Q_();BW(a);a.hP=b;}
function J2(b){Q_();return VS(b);}
function LE(){Ya=E($rt_bytecls());}
function FW(){var a=this;B.call(a);a.eM=null;a.eN=null;}
function T_(a,b){var c=new FW();RK(c,a,b);return c;}
function RK(a,b,c){D(a);a.eM=b;a.eN=c;}
function Og(a,b){FC(a,b);}
function FC(a,b){Oh(a.eM,a.eN,b);}
function Fm(){B.call(this);}
function T9(){var a=new Fm();QV(a);return a;}
function QV(a){D(a);}
function PD(a){return Hf(a);}
function Hf(a){return Oz();}
function EN(){var a=this;B.call(a);a.gT=null;a.f6=null;}
var Yb=null;function El(){El=J(EN);Mt();}
function U8(a){var b=new EN();F$(b,a);return b;}
function F$(a,b){El();D(a);a.gT=b;}
function E7(){El();return CV(C(95));}
function CV(b){var c,d,e;El();c=Yb.cv(b);if(c===null){c=U8(b);d=b.iv(46);if(d>=0){e=b.bk(0,d);c.f6=CV(e);}else if(!b.b8())c.f6=CV(C(96));Yb.be(b,c);}return c;}
function Ls(a,b){var c;c=Ih(a,b.cD(),b.f8());if(CN(b.ft())>=CN(W2))IH($rt_ustr(c));else if(CN(b.ft())<CN(Xl))Fr($rt_ustr(c));else Iq($rt_ustr(c));}
function Ih(a,b,c){var d,e,f,g,h,i,j;if(c===null)return b;d=I();e=0;a:{while(true){if(e>=b.d())break a;f=b.d6(123,e);if(f<0)break a;g=f+1|0;h=GP(g,b);if(h<0)break;if(b.l(h)!=125){d.c(b.bk(e,h));e=h;continue;}i=c.data;j=Et(b.bk(g,h));if(j>=i.length){d.h$(b,e,h);e=h;continue;}d.df(i[j]);e=h+1|0;}}return d.e();}
function GP(b,c){var d,e;El();while(true){if(b>=c.d())return (-1);d=b+1|0;e=c.l(b);if(e<=48)break;if(e>=57)break;b=d;}return d;}
function Rm(a,b,c){a.eb(RA(b,c));}
function Oq(a,b,c,d){var e;e=RA(b,c);e.iX(d);a.eb(e);}
function Mt(){Yb=SW();}
function Fr(b){if(console){console.info(b);}}
function Iq(b){if(console){console.warn(b);}}
function IH(b){if(console){console.error(b);}}
function DK(){var a=this;B.call(a);a.fi=null;a.eV=null;a.gr=Long_ZERO;a.gS=null;a.iM=Long_ZERO;a.g_=Long_ZERO;a.go=null;}
var Yc=Long_ZERO;function RA(a,b){var c=new DK();RP(c,a,b);return c;}
function RP(a,b,c){var d;D(a);a.fi=b;a.eV=c;a.gr=H8();d=Yc;Yc=Long_add(d,Long_fromInt(1));a.iM=d;a.g_=Fl().gU();}
function Nr(a){return a.fi;}
function Oi(a){return a.eV;}
function NM(a){return a.gS;}
function Ns(a,b){a.go=b;}
function GB(){var a=this;B.call(a);a.dX=null;a.cg=null;}
function Tn(a){var b=new GB();Mn(b,a);return b;}
function Mn(a,b){D(a);a.cg=N1();a.dX=b;}
function PC(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;d=Eh();e=Hq();f=c.length;g=0;while(g<f){h=c[g];i=e.g8(h.hz());if(i===null){j=h.hz();i=Hq();e.ib(j,i);}k=Uc(h);i.bj()[$rt_ustr(h.jM())]=Cp(k,"apply");g=g+1|0;}j=a.dX;l=e.bj();m=TJ(d);n=U5(a);KQ(j,l,Cp(m,"handle"),Cp(n,"handle"));return d;}
function Kr(a,b){if(b!=10)a.cg.gk($rt_str(String.fromCharCode(b)));else{G5().eW(a.cg.e());a.cg=N1();}}
function O0(b,c){b.cH(Tf(c));}
function PO(b,c,d){b.kA().i9(c,d);}
function KQ(b,c,d,e){(WebAssembly.instantiate(b,Object.assign(c,{teavm:{currentTimeMillis:function(){return (new Date()).getTime();},isnan:isNaN,teavm_getNaN:function(){return NaN;},isinf:function(n){return !isFinite(n);},isfinite:isFinite,putwchar:e,towlower:function(code){return ((String.fromCharCode(code)).toLowerCase()).charCodeAt(0);},towupper:function(code){return ((String.fromCharCode(code)).toUpperCase()).charCodeAt(0);},getNativeOffset:function(instant){return (new Date(instant)).getTimezoneOffset();},
logString:console.log,logInt:console.log,logOutOfMemory:function(){console.log("Out of memory");}},teavmMath:{sqrt:Math.sqrt,pow:Math.pow,sin:Math.sin,cos:Math.cos}}))).then(function(instance){return d(instance);});}
function BZ(){B.call(this);}
var X7=null;var X6=null;var XX=null;var XA=null;var XC=null;function By(){By=J(BZ);MP();}
function MP(){X6=Tb();XX=Tr();XA=Va();XC=UR();}
function GC(){B.call(this);}
function Vb(){var a=new GC();MK(a);return a;}
function MK(a){D(a);}
function Hv(){B.call(this);this.fA=null;}
function TY(a){var b=new Hv();Ms(b,a);return b;}
function Ms(a,b){D(a);a.fA=b;}
function Pt(a,b){F0(a,b);}
function F0(a,b){a.fA.hQ(b);}
function Iy(){var a=this;B6.call(a);a.eF=null;a.d2=null;a.ef=null;a.eI=null;}
function Ui(a,b,c,d){var e=new Iy();SO(e,a,b,c,d);return e;}
function SO(a,b,c,d,e){a.eF=b;a.d2=c;a.ef=d;a.eI=e;E$(a);a.dz=a.eF;a.dq=a.d2;a.cR=a.ef;a.cQ=a.eI;}
function ER(){Cb.call(this);}
function Yd(){var a=new ER();KM(a);return a;}
function VR(a){var b=new ER();GE(b,a);return b;}
function O$(b){if(b!==null&&!(typeof b==='undefined'?1:0))return VR(b);return null;}
function KM(a){GE(a,FO());}
function GE(a,b){Fb(a,b);}
function Jl(a,b){return a.bs[$rt_ustr(b)]||null;}
function HQ(a){return FP(SZ(a.bs));}
function JS(a,b,c){var d,e;d=a.bs;e=c;d[$rt_ustr(b)]=e;return a;}
function S1(a){return Fo(a);}
function SI(a,b){return GI(a,b);}
function L_(a,b){return Ir(a,b);}
function MY(a,b){return Fg(a,b);}
function PS(a,b){return Jq(a,b);}
function Sa(a){return I5(a);}
function Of(a,b){return G3(a,b);}
function Lx(a){return Jt(a);}
function QW(a,b,c){return JS(a,b,c);}
function Ot(a,b){return Jl(a,b);}
function OS(a){return HQ(a);}
function Jg(){N.call(this);}
function T5(){var a=new Jg();PX(a);return a;}
function PX(a){Br(a);}
function Iz(){var a=this;B6.call(a);a.fg=null;a.dY=null;a.fh=null;a.ee=null;}
function Ux(a,b,c,d){var e=new Iz();Q$(e,a,b,c,d);return e;}
function Q$(a,b,c,d,e){a.fg=b;a.dY=c;a.fh=d;a.ee=e;E$(a);a.dz=a.fg;a.dq=a.dY;a.cR=a.fh;a.cQ=a.ee;}
function Di(){var a=this;B.call(a);a.bS=0;a.eo=0;}
var Xb=null;var Xa=null;function Bu(){Bu=J(Di);O4();}
function GU(a,b){var c=new Di();HC(c,a,b);return c;}
function HC(a,b,c){Bu();D(a);a.bS=b;a.eo=c;}
function Lr(a){return a.bS?0:1;}
function Qs(a){return a.bS!=1?0:1;}
function SB(a){return !a.hU()&&!a.fu()?0:1;}
function Qw(a){return a.bS!=2?0:1;}
function QG(a){return a.bS!=3?0:1;}
function Pv(a){if(a.ie())return a.eo;F(U0());}
function C4(b){Bu();return GU(2,b);}
function O4(){Xb=GU(0,0);Xa=GU(1,0);}
function C_(){B.call(this);}
var Ye=null;var Yf=null;function DQ(){DQ=J(C_);QA();}
function JH(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;DQ();d=$rt_doubleToLongBits(b);c.d9=Long_eq(Long_and(d,new Long(0, 2147483648)),Long_ZERO)?0:1;e=Long_and(d,new Long(4294967295, 1048575));f=Long_shr(d,52).lo&2047;if(Long_eq(e,Long_ZERO)&&!f){c.cC=Long_ZERO;c.cW=0;return;}g=0;if(f)h=Long_or(e,new Long(0, 1048576));else{h=Long_shl(e,1);while(Long_eq(Long_and(h,new Long(0, 1048576)),Long_ZERO)){h=Long_shl(h,1);f=f+(-1)|0;g=g+1|0;}}i=LN(Yf,f);if(i<0)i= -i-2|0;j=f-Yf.data[i]|0;k=12+j|0;l=E0(h,Ye.data[i],k);if(Long_ge(l,
new Long(2808348672, 232830643))){i=i+1|0;m=f-Yf.data[i]|0;k=12+m|0;l=E0(h,Ye.data[i],k);}n=Long_shru(Ye.data[i],(63-k|0)-g|0);o=Long_shr(Long_add(n,Long_fromInt(1)),1);p=Long_shr(n,1);if(Long_eq(h,new Long(0, 1048576)))p=Long_shr(p,2);q=Ja(l,p);r=Kc(l,o);m=Long_compare(q,r);h=m>0?Long_mul(Long_div(l,q),q):m<0?Long_add(Long_mul(Long_div(l,r),r),r):Long_mul(Long_div(Long_add(l,Long_div(r,Long_fromInt(2))),r),r);if(Long_ge(h,new Long(2808348672, 232830643))){i=i+1|0;h=Long_div(h,Long_fromInt(10));}else if(Long_lt(h,
new Long(1569325056, 23283064))){i=i+(-1)|0;h=Long_mul(h,Long_fromInt(10));}c.cC=h;c.cW=i-330|0;}
function Ja(b,c){var d,e;DQ();d=Long_fromInt(10);while(Long_le(d,c)){d=Long_mul(d,Long_fromInt(10));}e=Long_rem(b,d);if(Long_ge(e,Long_div(c,Long_fromInt(2))))d=Long_div(d,Long_fromInt(10));return d;}
function Kc(b,c){var d,e;DQ();d=Long_fromInt(1);while(Long_le(d,c)){d=Long_mul(d,Long_fromInt(10));}e=Long_rem(b,d);if(Long_gt(Long_sub(d,e),Long_div(c,Long_fromInt(2))))d=Long_div(d,Long_fromInt(10));return d;}
function E0(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;DQ();e=Long_and(b,Long_fromInt(65535));f=Long_and(Long_shru(b,16),Long_fromInt(65535));g=Long_and(Long_shru(b,32),Long_fromInt(65535));h=Long_and(Long_shru(b,48),Long_fromInt(65535));i=Long_and(c,Long_fromInt(65535));j=Long_and(Long_shru(c,16),Long_fromInt(65535));k=Long_and(Long_shru(c,32),Long_fromInt(65535));l=Long_and(Long_shru(c,48),Long_fromInt(65535));m=Long_add(Long_add(Long_mul(k,e),Long_mul(j,f)),Long_mul(i,g));n=Long_add(Long_add(Long_add(Long_mul(l,
e),Long_mul(k,f)),Long_mul(j,g)),Long_mul(i,h));o=Long_add(Long_add(Long_mul(l,f),Long_mul(k,g)),Long_mul(j,h));p=Long_add(Long_mul(l,g),Long_mul(k,h));q=Long_mul(l,h);r=Long_add(Long_add(Long_shl(q,32+d|0),Long_shl(p,16+d|0)),Long_shl(o,d));s=d>16?Long_add(r,Long_shl(n,d-16|0)):Long_add(r,Long_shru(n,16-d|0));s=Long_add(s,Long_shru(m,32-d|0));return s;}
function QA(){var b,c,d,e,f,g,h,i,j,k,l;Ye=$rt_createLongArray(660);Yf=$rt_createIntArray(660);b=new Long(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=Ye.data;g=d+330|0;f[g]=Dj(e,Long_fromInt(80));Yf.data[g]=c;e=Dj(e,Long_fromInt(10));h=Gd(e,Long_fromInt(10));while(Long_le(e,b)&&Long_eq(Long_and(e,new Long(0, 2147483648)),Long_ZERO)){e=Long_shl(e,1);c=c+1|0;h=Long_shl(h,1);}e=Long_add(e,Long_div(h,Long_fromInt(10)));d=d+1|0;}i=new Long(3435973836, 214748364);j=1023;d=0;while(d<330){k=0;e=b;while(Long_gt(e,
i)){e=Long_shr(e,1);k=k+1|0;j=j+(-1)|0;}h=Long_mul(e,Long_fromInt(10));if(k<=0)b=h;else{l=Long_and(b,Long_fromInt((1<<k)-1|0));b=Long_add(h,Long_shr(Long_mul(l,Long_fromInt(10)),k));}f=Ye.data;g=(330-d|0)-1|0;f[g]=Dj(b,Long_fromInt(80));Yf.data[g]=j;d=d+1|0;}}
function Fh(){DB.call(this);this.eQ=null;}
function Vq(a){var b=new Fh();Qm(b,a);return b;}
function Qm(a,b){IW(a,b);}
function NL(a){return a.eQ;}
function KF(a,b){a.eQ=b;}
function Ee(){B.call(this);}
var Wi=null;function TF(){TF=J(Ee);Kx();}
function Kx(){var $$je;Wi=$rt_createIntArray(Eu().data.length);a:{try{Wi.data[Bd(Wh)]=1;break a;}catch($$e){$$je=Ba($$e);if($$je instanceof Bj){}else{throw $$e;}}}b:{try{Wi.data[Bd(Wf)]=2;break b;}catch($$e){$$je=Ba($$e);if($$je instanceof Bj){}else{throw $$e;}}}c:{try{Wi.data[Bd(We)]=3;break c;}catch($$e){$$je=Ba($$e);if($$je instanceof Bj){}else{throw $$e;}}}}
function Hx(){var a=this;BU.call(a);a.fN=null;a.e2=null;a.e0=0.0;a.hl=null;}
function U$(a,b,c,d){var e=new Hx();Nk(e,a,b,c,d);return e;}
function Nk(a,b,c,d,e){a.hl=b;a.fN=c;a.e2=d;a.e0=e;ED(a);a.E=a.fN;a.bz=a.e2;a.bR=a.e0;}
function Jn(){Cn.call(this);}
function Fy(){B.call(this);}
function Ue(){var a=new Fy();LV(a);return a;}
function LV(a){D(a);}
function Rp(a,b){return GL(a,b);}
function GL(a,b){return S7(b);}
function Fz(){B.call(this);this.em=null;}
function VT(a){var b=new Fz();Q2(b,a);return b;}
function Q2(a,b){D(a);a.em=b;}
function KE(a,b){OJ(a.em,b);}
function NO(a,b){a.dp(b);}
function HB(){var a=this;B.call(a);a.eu=null;a.fK=0;}
function Ur(a){var b=new HB();Oy(b,a);return b;}
function Oy(a,b){D(a);a.eu=b;}
function HA(){Bf.call(this);}
function HZ(){Bf.call(this);}
function Fe(){Cb.call(this);}
function Uz(a){var b=new Fe();NW(b,a);return b;}
function FP(b){if(b!==null&&!(typeof b==='undefined'?1:0))return Uz(b);return null;}
function NW(a,b){Fb(a,b);}
function Ek(a){return IG(a.bs);}
function Gm(a,b){return Ek(a)[b];}
function LO(a){return Ek(a).length;}
function Nm(a,b){return Gm(a,b);}
function IJ(){N.call(this);}
function Vn(){var a=new IJ();QU(a);return a;}
function QU(a){Br(a);}
function HE(){BM.call(this);}
function UQ(){var a=new HE();RG(a);return a;}
function RG(a){CQ(a);}
function Qz(a,b){Qk(b);}
function Qk(b){$rt_putStderr(b);}
function HR(){B.call(this);}
function UV(){var a=new HR();KD(a);return a;}
function KD(a){D(a);}
function F_(){BF.call(this);this.dC=null;}
function Tu(a){var b=new F_();No(b,a);return b;}
function No(a,b){Dr(a);a.dC=b;}
function Kz(a,b){return a.dC.data[b];}
function Mv(a){return a.dC.data.length;}
function BV(){B.call(this);}
var Yg=null;var Yh=null;var Yi=null;var Yj=null;var Yk=null;function Dm(){Dm=J(BV);Ll();}
function Iu(){Dm();return VC();}
function Jm(){Dm();return VH();}
function Gq(){Dm();return UK();}
function GQ(b,c){var d,e,f;Dm();if(c===null)c=Yj;d=L(B,b.n());b.gi(d);Pd(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;b.gO(e,f[e]);e=e+1|0;}}
function Js(b,c){var d,e;Dm();if(b!==null){d=b;e=d.f5(c);}else{d=c;e= -d.f5(b);}return e;}
function Ll(){Yg=Jm();Yh=Gq();Yi=Iu();Yj=Uo();Yk=VN();}
$rt_packages([-1,"java",0,"util",1,"logging",0,"nio",3,"charset",0,"lang",-1,"dev",6,"webfx",7,"demo",8,"raytracer",9,"math",7,"platform",11,"shared",12,"util",13,"serviceloader",12,"services",15,"json",16,"spi",17,"impl",18,"listmap",11,"teavm",20,"services",21,"json",22,"spi",23,"impl",11,"client",25,"services",26,"webassembly",27,"spi"]);
$rt_metadata([B,"Object",5,0,[],0,3,0,["j0",function(){return Cv(this);},"bO",function(){return Om(this);},"z",function(b){return KU(this,b);},"e",function(){return Np(this);},"i5",function(){return DF(this);},"dI",function(){return SL(this);}],BN,0,B,[],0,3,0,["dd",function(){return Px(this);},"cD",function(){return Ox(this);},"g0",function(){return Qc(this);},"iS",function(){QL(this);},"ey",function(b){Sr(this,b);}],Bv,0,BN,[],0,3,0,0,N,0,Bv,[],0,3,0,0,C$,"IndexOutOfBoundsException",5,N,[],0,3,0,0,Dh,0,B,
[],3,3,0,["Y",function(b){return RL(this,b);},"gI",function(b){return QN(this,b);},"hf",function(b){return SD(this,b);},"gx",function(b){return Sp(this,b);}],DN,0,B,[Dh],3,3,0,["Y",function(b){return RL(this,b);},"gI",function(b){return QN(this,b);},"hf",function(b){return SD(this,b);},"gx",function(b){return Sp(this,b);}],Ed,0,B,[Dh],3,3,0,["d5",function(){return PP(this);},"Y",function(b){return RL(this,b);},"gI",function(b){return QN(this,b);},"hf",function(b){return SD(this,b);},"gx",function(b){return Sp(this,
b);}],CM,"JsonProvider",17,B,[DN,Ed],3,3,0,["hC",function(){return OP(this);},"Y",function(b){return RL(this,b);},"gI",function(b){return QN(this,b);},"hf",function(b){return SD(this,b);},"gx",function(b){return Sp(this,b);},"d5",function(){return PP(this);}],CJ,0,B,[CM],3,3,0,["hC",function(){return OP(this);},"Y",function(b){return RL(this,b);},"gI",function(b){return QN(this,b);},"hf",function(b){return SD(this,b);},"gx",function(b){return Sp(this,b);},"d5",function(){return PP(this);}],Co,0,B,[CJ],3,3,0,
["hC",function(){return OP(this);},"Y",function(b){return RL(this,b);},"gI",function(b){return QN(this,b);},"hf",function(b){return SD(this,b);},"gx",function(b){return Sp(this,b);},"d5",function(){return PP(this);}],Cb,0,B,[Co],1,0,0,["fa",function(){return Jt(this);},"b_",function(b){return G3(this,b);},"fQ",function(){return I5(this);},"dZ",function(b){return Jq(this,b);},"fd",function(b){return Fg(this,b);},"Y",function(b){return Ir(this,b);},"eX",function(b){return GI(this,b);},"e",function(){return Fo(this);
},"bj",function(){return QT(this);},"c_",function(){return SN(this);},"c1",function(b){return K9(this,b);},"bP",function(b){return Li(this,b);},"dL",function(b){return RU(this,b);},"hC",function(){return OP(this);},"gI",function(b){return QN(this,b);},"hf",function(b){return SD(this,b);},"gx",function(b){return Sp(this,b);},"d5",function(){return PP(this);}],Gr,0,B,[],0,3,0,["h6",function(){return O2(this);},"dE",function(b){return O8(this,b);},"iD",function(b){PT(this,b);},"gm",function(b){S4(this,b);}],Do,
0,B,[],3,3,0,["hp",function(b){return Mq(this,b);}],Es,0,B,[Do],3,3,0,["hp",function(b){return Mq(this,b);}],Bn,0,B,[],3,3,0,0,S,0,B,[Bn],1,3,0,0,V,0,B,[],3,3,0,0,Cc,"Integer",5,S,[V],0,3,BJ,["I",function(){return Me(this);},"e",function(){return QY(this);}],H9,"CloneNotSupportedException",5,Bv,[],0,3,0,0,BQ,0,B,[],0,0,Op,0,E9,"Long",5,S,[V],0,3,Ik,["I",function(){return Le(this);},"e",function(){return PR(this);}],BP,0,B,[],3,3,0,0,D5,0,B,[],3,3,0,0,B4,0,B,[D5],0,3,E3,["gU",function(){return KK(this);}],Bb,
0,B,[],3,3,0,0,Eo,0,B,[Bb],3,3,0,0,IL,0,B,[Eo],1,3,0,["j$",function(b){return SA(this,b);},"j1",function(){return NF(this);}],Dy,0,B,[],3,3,0,["gC",function(b,c){return OC(this,b,c);},"iO",function(b){return SQ(this,b);},"hW",function(b){return PA(this,b);},"dG",function(b){return N3(this,b);},"dA",function(b,c){return Mf(this,b,c);}],CD,0,B,[Dy,CJ],3,3,0,["g8",function(b){return Ou(this,b);},"c5",function(b){return Nx(this,b);},"gC",function(b,c){return OC(this,b,c);},"iO",function(b){return SQ(this,b);},"hW",
function(b){return PA(this,b);},"dG",function(b){return N3(this,b);},"dA",function(b,c){return Mf(this,b,c);},"hC",function(){return OP(this);},"Y",function(b){return RL(this,b);},"gI",function(b){return QN(this,b);},"hf",function(b){return SD(this,b);},"gx",function(b){return Sp(this,b);},"d5",function(){return PP(this);}],J1,0,B,[],4,3,0,0,Ct,0,B,[],3,3,0,0,In,0,B,[Ct],0,3,0,["cT",function(b){P7(this,b);},"fH",function(b){Kq(this,b);}],EB,0,B,[],3,3,0,0,Im,0,B,[EB],0,3,0,["gP",function(b){M0(this,b);}],BA,
0,B,[],1,3,0,0,CK,0,B,[],3,3,0,0,Ci,0,BN,[],0,3,0,0,Cn,0,Ci,[],0,3,0,0,JQ,"StringIndexOutOfBoundsException",5,C$,[],0,3,0,0,Dn,0,B,[],4,3,RN,0,Jb,0,B,[],4,3,0,0,Ez,0,B,[],3,3,0,0,Bf,0,B,[Bb],1,3,0,0,Gc,0,Bf,[],1,3,0,0,EV,0,B,[],4,3,0,0,Ch,0,B,[Bn,CK],0,0,0,["kz",function(b){return D6(this,b);},"ci",function(b,c){return Ex(this,b,c);},"ko",function(b){return GS(this,b);},"d$",function(b,c){return LY(this,b,c);},"gy",function(b,c,d){return Rq(this,b,c,d);},"jK",function(b){return Jo(this,b);},"ek",function(b,
c){return Kh(this,b,c);},"h2",function(b,c,d){return K4(this,b,c,d);},"jR",function(b){return Iw(this,b);},"dS",function(b,c){return HP(this,b,c);},"ja",function(b){return J4(this,b);},"fb",function(b,c){return JM(this,b,c);},"kh",function(b){return JD(this,b);},"eT",function(b,c){return Il(this,b,c);},"bu",function(b){D9(this,b);},"e",function(){return DM(this);},"d",function(){return Je(this);},"j4",function(b,c,d){return G1(this,b,c,d);},"dP",function(b,c,d,e){return FT(this,b,c,d,e);},"ec",function(b,c,
d,e){IT(this,b,c,d,e);},"d4",function(b){IN(this,b);},"jX",function(b,c){U(this,b,c);}],CH,0,B,[],3,3,0,0,FE,0,Ch,[CH],0,3,0,["c",function(b){return K_(this,b);},"r",function(b){return Bs(this,b);},"ii",function(b){return Qo(this,b);},"hD",function(b){return Or(this,b);},"q",function(b){return KY(this,b);},"h$",function(b,c,d){return Q6(this,b,c,d);},"df",function(b){return R(this,b);},"hM",function(b,c){return PF(this,b,c);},"hh",function(b,c){return Rx(this,b,c);},"hx",function(b,c,d,e){return LI(this,b,c,
d,e);},"g$",function(b,c){return Sg(this,b,c);},"iq",function(b,c){return Md(this,b,c);},"gZ",function(b,c){return Su(this,b,c);},"d4",function(b){SE(this,b);},"ec",function(b,c,d,e){O_(this,b,c,d,e);},"dP",function(b,c,d,e){return MT(this,b,c,d,e);},"d",function(){return MQ(this);},"e",function(){return Y(this);},"bu",function(b){SH(this,b);},"eT",function(b,c){return Lc(this,b,c);},"fb",function(b,c){return KI(this,b,c);},"dS",function(b,c){return O7(this,b,c);},"ek",function(b,c){return NP(this,b,c);},"ci",
function(b,c){return ST(this,b,c);}],Ey,0,B,[Dy],3,3,0,["gC",function(b,c){return OC(this,b,c);},"iO",function(b){return SQ(this,b);},"hW",function(b){return PA(this,b);},"dG",function(b){return N3(this,b);},"dA",function(b,c){return Mf(this,b,c);}]]);
$rt_metadata([CL,0,B,[CD,Ey],3,3,0,["ib",function(b,c){return Lp(this,b,c);},"g8",function(b){return Ou(this,b);},"c5",function(b){return Nx(this,b);},"gC",function(b,c){return OC(this,b,c);},"iO",function(b){return SQ(this,b);},"hW",function(b){return PA(this,b);},"dG",function(b){return N3(this,b);},"dA",function(b,c){return Mf(this,b,c);},"hC",function(){return OP(this);},"Y",function(b){return RL(this,b);},"gI",function(b){return QN(this,b);},"hf",function(b){return SD(this,b);},"gx",function(b){return Sp(this,
b);},"d5",function(){return PP(this);}],Dg,0,B,[Co],3,3,0,["c_",function(){return Oc(this);},"bP",function(b){return RF(this,b);},"dL",function(b){return Sl(this,b);},"b_",function(b){return M5(this,b);},"hC",function(){return OP(this);},"Y",function(b){return RL(this,b);},"gI",function(b){return QN(this,b);},"hf",function(b){return SD(this,b);},"gx",function(b){return Sp(this,b);},"d5",function(){return PP(this);}],CT,0,B,[CL,Dg],1,3,0,["gl",function(){OQ(this);},"hn",function(){Lt(this);},"e_",function(){
return Q3(this);},"ct",function(b){return R5(this,b);},"gF",function(b,c){return Ni(this,b,c);},"gN",function(){Sq(this);},"e",function(){return Sd(this);},"fM",function(b,c){return Q7(this,b,c);},"ib",function(b,c){return Lp(this,b,c);},"g8",function(b){return Ou(this,b);},"c5",function(b){return Nx(this,b);},"gC",function(b,c){return OC(this,b,c);},"iO",function(b){return SQ(this,b);},"hW",function(b){return PA(this,b);},"dG",function(b){return N3(this,b);},"dA",function(b,c){return Mf(this,b,c);},"hC",function()
{return OP(this);},"Y",function(b){return RL(this,b);},"gI",function(b){return QN(this,b);},"hf",function(b){return SD(this,b);},"gx",function(b){return Sp(this,b);},"d5",function(){return PP(this);},"c_",function(){return Oc(this);},"bP",function(b){return RF(this,b);},"dL",function(b){return Sl(this,b);},"b_",function(b){return M5(this,b);}],IR,"ConcurrentModificationException",1,N,[],0,3,0,0,EU,0,B,[],3,3,0,0,P,0,B,[],3,3,0,0,Hm,0,B,[P],0,3,0,["f",function(b){return KG(this,b);},"kd",function(b){return Gn(this,
b);}],CS,0,B,[],3,3,0,0,IV,0,B,[CS],0,3,0,["fB",function(){return Kw(this);},"iF",function(){return FV(this);}],CA,"WebAssemblyProvider",28,B,[],3,3,0,["hj",function(b,c){return Q8(this,b,c);}],D3,0,B,[CA],4,3,0,["hG",function(){return MW(this);},"gK",function(b){return Nj(this,b);},"hj",function(b,c){return Q8(this,b,c);}],GH,"CoderMalfunctionError",4,Ci,[],0,3,0,0,B8,0,B,[BP],1,3,0,0,B9,0,B,[],3,3,0,0,Du,0,B8,[B9,Bn],0,3,0,["c0",function(b){return Qq(this,b);},"ki",function(){En(this);},"cv",function(b){return Qy(this,
b);},"j8",function(b){return F3(this,b);},"kb",function(b,c,d){return CC(this,b,c,d);},"kq",function(){return CO(this);},"be",function(b,c){return Lz(this,b,c);},"du",function(b,c){return Qd(this,b,c);},"bK",function(b,c,d){return Nz(this,b,c,d);},"hq",function(b){P4(this,b);},"cd",function(){N2(this);},"kf",function(b){return GW(this,b);},"n",function(){return NY(this);}],Gl,"LinkedHashMap",1,Du,[BP],0,3,0,["c0",function(b){return M2(this,b);},"cv",function(b){return K8(this,b);},"bK",function(b,c,d){return Sh(this,
b,c,d);},"be",function(b,c){return QO(this,b,c);},"du",function(b,c){return Si(this,b,c);},"dn",function(b){KX(this,b);},"iK",function(){return Qe(this);},"i1",function(){return Oj(this);},"gs",function(b){return N8(this,b);},"ij",function(b){return Lb(this,b);}],GT,0,Ch,[CH],0,3,0,["gk",function(b){return Ov(this,b);},"h1",function(b,c){return Ow(this,b,c);},"e",function(){return M7(this);},"bu",function(b){Nt(this,b);},"ci",function(b,c){return K5(this,b,c);}],Cg,0,B,[],1,3,0,["kt",function(){return Cs(this);
},"i_",function(b){return IO(this,b);},"jC",function(){return G$(this);},"jS",function(){return Bw(this);},"jB",function(){return CF(this);}],Cl,0,B,[V,Bn],1,3,0,["je",function(){return Bd(this);}],BR,0,Cl,[],12,3,Dt,0,Ce,0,B,[],0,0,0,["x",function(){return Ne(this);},"kj",function(){J6(this);},"jc",function(){E2(this);}],B_,0,B,[],3,3,0,0,II,0,Ce,[B_],0,0,0,["hO",function(){return MZ(this);},"s",function(){return Q4(this);}],CZ,0,B,[],3,3,0,0,C1,0,B,[CZ],0,3,0,["fR",function(b){J3(this,b);},"cO",function(b)
{MU(this,b);},"cY",function(b){Ma(this,b);}],C8,0,B,[CZ],3,3,0,0,Dx,0,C1,[C8],1,3,0,["fR",function(b){OH(this,b);},"jt",function(b){IA(this,b);},"dK",function(b){return P$(this,b);}],Kk,0,Dx,[],0,3,0,["iQ",function(){St(this);},"kp",function(b){Gb(this,b);},"i$",function(b){Ij(this,b);}],Ej,0,B,[],3,3,0,0,DD,0,B,[],3,3,0,0,Dv,0,B,[DD,B9],0,0,0,["dt",function(){return Rd(this);},"g3",function(){return Se(this);}],Cq,0,Dv,[],0,0,0,0,EO,0,Cq,[],4,0,0,0,DC,0,B,[],0,3,0,0,Ht,0,B,[],0,3,0,0,Cf,0,Cn,[],0,3,0,0,IU,
0,Cf,[],0,3,0,0,Eg,0,Bv,[],0,3,0,0,Gk,0,B,[B_],0,0,0,["x",function(){return Lw(this);},"s",function(){return P8(this);},"js",function(){Hs(this);}],C3,0,B,[],3,3,0,0,Dq,0,B,[C3],0,0,0,["f4",function(b){S9(this,b);}],Dl,"UnsupportedOperationException",5,N,[],0,3,0,0,Kd,"ReadOnlyBufferException",3,Dl,[],0,3,0,0,EI,0,B,[],3,3,0,0,D7,0,B,[],3,3,0,0,F7,0,B,[],4,3,0,0,Kb,0,B,[C8],4,3,0,["cO",function(b){Sk(this,b);},"dK",function(b){return R7(this,b);},"cY",function(b){P1(this,b);}],Ia,0,Bf,[],1,3,0,0,H_,0,B,[B_],
0,0,0,["x",function(){return Ry(this);},"s",function(){return Mx(this);}],GO,0,B,[],0,3,0,0]);
$rt_metadata([HK,0,B,[],4,0,0,0,Bj,0,Cf,[],0,3,0,0,Dk,0,B,[],3,3,0,0,Cu,0,B,[Dk],3,3,0,0,B1,0,B,[Cu],1,3,0,["eR",function(){return P2(this);},"gi",function(b){return Pf(this,b);},"e",function(){return Na(this);}],EC,0,B,[EU],3,3,0,["hQ",function(b){PK(this,b);},"g1",function(){return RY(this);},"ia",function(b){return Rr(this,b);}],Is,0,B,[EC],0,3,0,["c7",function(){return R_(this);},"eU",function(){return Mm(this);},"e6",function(){return P5(this);},"iu",function(){return L2(this);},"cE",function(b){RT(this,
b);},"cH",function(b){PZ(this,b);},"cB",function(b){Nl(this,b);},"jO",function(){Dz(this);},"jQ",function(){EY(this);},"hQ",function(b){PK(this,b);},"g1",function(){return RY(this);},"ia",function(b){return Rr(this,b);}],HM,0,B,[],4,3,0,0,Fa,0,S,[V],0,3,P3,0,Fd,0,B,[],3,3,0,0,Hu,0,B,[],4,0,0,0,B6,0,B,[],0,3,0,0,G_,0,B,[Dk],4,3,0,["t",function(){return GV(this);}],G8,0,B,[],4,3,0,0,BE,0,B,[],1,3,0,0,Bp,0,B,[],0,3,0,0,I0,0,Bp,[],0,0,0,0,CR,0,B,[],1,3,0,["jz",function(b){Jv(this,b);},"jk",function(b){return Ff(this,
b);},"il",function(b){R0(this,b);},"kv",function(b){return Jw(this,b);},"hN",function(b){Rn(this,b);},"ka",function(b,c,d){return GD(this,b,c,d);},"jj",function(b){return FN(this,b);},"gt",function(b){return KT(this,b);}],BL,0,B,[],4,3,DU,0,CB,0,B,[CJ,Do],3,3,0,["iL",function(b){return Pz(this,b);},"hC",function(){return OP(this);},"Y",function(b){return RL(this,b);},"gI",function(b){return QN(this,b);},"hf",function(b){return SD(this,b);},"gx",function(b){return Sp(this,b);},"d5",function(){return PP(this);
},"hp",function(b){return Mq(this,b);}],Dc,0,Cg,[V],1,3,0,["e1",function(b,c,d){return QH(this,b,c,d);},"jv",function(b){return IM(this,b);},"jT",function(){return D_(this);}],Jh,0,Dc,[],0,0,0,["gg",function(){return Qr(this);}],FM,"SingleServiceProvider$ServiceInfo",14,B,[],4,0,0,["ju",function(b,c){return Jj(this,b,c);},"j2",function(){return IP(this);},"ke",function(){return Jr(this);}],Ho,0,B,[],0,3,0,0,Bk,0,Cl,[],12,3,T,0,Bo,0,B,[Bn],0,3,FS,["I",function(){return CN(this);}],G9,0,B,[],4,3,0,0,CY,0,B,[V],
1,3,0,0,Cz,0,B,[],0,3,EW,0,BD,"Boolean",5,B,[Bn,V],0,3,DO,["eZ",function(){return Qp(this);},"e",function(){return L7(this);},"z",function(b){return LD(this,b);}],Cd,"IllegalArgumentException",5,N,[],0,3,0,0,HL,"IllegalCharsetNameException",4,Cd,[],0,3,0,0,Kl,"NoSuchElementException",1,N,[],0,3,0,0,Cj,0,B,[],3,3,0,0,Ft,0,B,[Cj],0,3,0,["fv",function(b,c){return Qn(this,b,c);}],Em,0,B,[],32,0,TV,0,Io,0,B,[Bb],1,3,0,0,E5,0,B,[],3,3,0,0,DV,0,B,[E5],3,3,0,0,BM,0,B,[DV,Ej],1,3,0,["cc",function(b,c,d){Ln(this,b,c,
d);}],C0,0,BM,[],0,3,0,0,IS,0,C0,[],0,3,0,["cc",function(b,c,d){L0(this,b,c,d);},"jw",function(){return H7(this);},"jq",function(b,c,d){Ea(this,b,c,d);},"hk",function(b){OK(this,b);},"b4",function(b){RH(this,b);},"eW",function(b){NH(this,b);},"iz",function(b){Sc(this,b);},"iB",function(){N5(this);},"i6",function(){C2(this);}],M,0,B,[],0,3,0,0,JR,0,M,[],0,0,0,0,JU,0,M,[],0,0,0,0,Q,0,BA,[],0,3,0,["fP",function(b){return LL(this,b);},"ej",function(b){return L1(this,b);}],JV,0,Q,[],0,0,0,0,JZ,0,Q,[],0,0,0,0,JT,
0,M,[],0,0,0,0,JW,0,Q,[],0,0,0,0]);
$rt_metadata([JO,0,Q,[],0,0,0,0,JK,0,B,[P],0,3,0,["f",function(b){return RW(this,b);},"bg",function(b){return I_(this,b);}],F2,0,B,[P],0,3,0,["f",function(b){return KH(this,b);},"ba",function(b){return Ip(this,b);}],JJ,0,B,[P],0,3,0,["f",function(b){return LU(this,b);},"ba",function(b){return F4(this,b);}],FZ,0,B,[P],0,3,0,["f",function(b){return OO(this,b);},"ba",function(b){return Ge(this,b);}],JX,0,Q,[],0,0,0,0,JI,0,B,[P],0,3,0,["f",function(b){return NJ(this,b);},"ba",function(b){return Kt(this,b);}],JP,
0,Q,[],0,0,0,0,Eq,0,B,[Cu],3,3,0,0,BK,0,B1,[Eq],1,3,0,0,Db,0,BK,[],0,0,0,["gu",function(){return N0(this);}],H6,0,Db,[],4,0,0,["t",function(){return Qb(this);}],Km,0,B,[P],0,3,0,["f",function(b){return MX(this,b);},"ba",function(b){return HI(this,b);}],J$,0,B,[P],0,3,0,["f",function(b){return Qu(this,b);},"bg",function(b){return Fw(this,b);}],Ko,0,B,[P],0,3,0,["f",function(b){return NE(this,b);},"ba",function(b){return Iv(this,b);}],J9,0,B,[P],0,3,0,["f",function(b){return K$(this,b);},"bg",function(b){return Hn(this,
b);}],Kp,0,B,[P],0,3,0,["f",function(b){return Rk(this,b);},"bg",function(b){return HH(this,b);}],F1,0,B,[P],0,3,0,["f",function(b){return KB(this,b);},"bg",function(b){return Ha(this,b);}],J8,0,B,[P],0,3,0,["f",function(b){return Pn(this,b);},"ba",function(b){return GY(this,b);}],Kn,0,B,[P],0,3,0,["f",function(b){return Qg(this,b);},"bg",function(b){return FF(this,b);}],JL,0,B,[P],0,3,0,["f",function(b){return Sj(this,b);},"bg",function(b){return JF(this,b);}],FY,0,B,[P],0,3,0,["f",function(b){return OG(this,
b);},"bg",function(b){return Gw(this,b);}],Fu,"MapJsonObject",19,CT,[],0,3,0,["b1",function(){return Pp(this);},"c4",function(b){R6(this,b);},"iY",function(){return Nh(this);},"c1",function(b){return Oa(this,b);},"bj",function(){return Ny(this);}],Hi,0,B,[],0,3,0,0,DP,0,B,[],3,3,0,0,IQ,"Class",5,B,[DP],0,3,0,["fG",function(){return MH(this);},"dg",function(){return Sy(this);},"f2",function(){return KR(this);}],J5,0,Bf,[],1,3,0,0,BY,0,S,[V],0,3,H4,["z",function(b){return LJ(this,b);}],GA,0,B,[],0,3,0,0,JN,0,
BM,[],0,0,0,["d8",function(b){KW(this,b);}],C6,0,B,[],4,3,0,0,GN,0,B,[],4,0,0,0,GK,0,B,[],4,3,0,0,Ec,0,B,[Bb],3,0,0,0,I8,0,Ce,[B_],0,0,0,["s",function(){return RC(this);}],J7,0,B,[P],0,3,0,["f",function(b){return L5(this,b);},"ba",function(b){return I6(this,b);}],HW,0,BK,[],4,0,0,0,HV,0,B8,[],4,0,0,0,E4,0,B,[C3],3,3,0,0,Fs,0,Dq,[E4],4,0,0,["iE",function(b){return RB(this,b);}],DH,0,B,[],4,3,K0,0,B3,0,B,[Cu],3,3,0,["gA",function(b){OA(this,b);}],BF,0,B1,[B3],1,3,0,["t",function(){return Po(this);},"gA",function(b)
{OA(this,b);}],HX,0,BF,[],4,0,0,0,BG,0,B,[V],0,3,Bc,0,Cw,0,B,[CB,Co,Es],3,3,0,["iL",function(b){return Pz(this,b);},"hC",function(){return OP(this);},"Y",function(b){return RL(this,b);},"gI",function(b){return QN(this,b);},"hf",function(b){return SD(this,b);},"gx",function(b){return Sp(this,b);},"d5",function(){return PP(this);},"hp",function(b){return Mq(this,b);}],DB,0,B,[Cw,Dg],1,3,0,["cI",function(b){return Mj(this,b);},"n",function(){return Pk(this);},"iL",function(b){return Pz(this,b);},"hC",function()
{return OP(this);},"Y",function(b){return RL(this,b);},"gI",function(b){return QN(this,b);},"hf",function(b){return SD(this,b);},"gx",function(b){return Sp(this,b);},"d5",function(){return PP(this);},"hp",function(b){return Mq(this,b);},"c_",function(){return Oc(this);},"bP",function(b){return RF(this,b);},"dL",function(b){return Sl(this,b);},"b_",function(b){return M5(this,b);}],Gi,0,B,[Bb],1,3,0,0,H0,0,M,[],0,0,0,0,CX,0,Cg,[V,CH,CK,Fd],1,3,0,["ir",function(b,c,d){return LZ(this,b,c,d);},"ep",function(b){return KA(this,
b);}]]);
$rt_metadata([Df,0,CX,[],1,0,0,0,JA,0,Df,[],0,0,0,["iy",function(b){return Mr(this,b);}],H3,0,M,[],0,0,0,0,H1,0,M,[],0,0,0,0,H2,0,M,[],0,0,0,0,HY,0,Q,[],0,0,0,0,EH,0,B,[Bb],3,3,0,0,Ka,0,B,[EH],0,3,0,["h9",function(b){P6(this,b);},"jA",function(b){Ki(this,b);},"jl",function(b){return Qv(this,b);}],Ix,0,B,[Bb],1,3,0,0,FJ,0,BE,[],0,0,0,0,FI,0,BE,[],0,0,0,0,BT,"Double",5,S,[V],0,3,EL,["bl",function(){return SM(this);},"I",function(){return NX(this);},"e",function(){return L3(this);},"z",function(b){return S5(this,
b);},"fI",function(){return LQ(this);},"fq",function(){return Nu(this);}],FH,0,BE,[],0,0,0,0,Dw,0,BA,[],0,3,0,["fP",function(b){return O6(this,b);},"ej",function(b){return Rf(this,b);}],FL,0,Dw,[],0,0,0,0,FK,0,Q,[],0,0,0,0,Ie,0,B,[],4,3,0,0,I2,0,Bp,[],0,0,0,0,IZ,0,Bp,[],0,0,0,0,J0,0,BK,[],0,0,0,["n",function(){return Rv(this);},"t",function(){return Rg(this);}],C5,0,B,[],3,3,0,0,GG,"ArrayList",1,BF,[B9,Bn,C5],0,3,0,["bu",function(b){LR(this,b);},"cL",function(b){return Ob(this,b);},"n",function(){return MF(this);
},"gO",function(b,c){return Lm(this,b,c);},"b6",function(b){return QM(this,b);},"jE",function(b){DJ(this,b);}],I1,0,Bp,[],0,0,0,0,Bi,0,B,[],0,3,0,0,Jf,0,Bi,[],0,0,0,0,Jc,0,Bi,[],0,0,0,0,IE,0,Bi,[],0,0,0,0,D2,0,B,[Bb],3,0,0,0,Jd,0,Bi,[],0,0,0,0,BI,"String",5,B,[Bn,V,CK],0,3,Kj,["l",function(b){return Mu(this,b);},"d",function(){return PV(this);},"b8",function(){return RZ(this);},"hI",function(b){return QI(this,b);},"et",function(b){return Pb(this,b);},"d6",function(b,c){return L9(this,b,c);},"cw",function(b)
{return Pa(this,b);},"iH",function(b,c){return Mz(this,b,c);},"iv",function(b){return Rh(this,b);},"bk",function(b,c){return Lf(this,b,c);},"g4",function(b){return Rt(this,b);},"e",function(){return Nn(this);},"iT",function(){return R8(this);},"z",function(b){return QJ(this,b);},"ea",function(b){return Q0(this,b);},"bO",function(){return Ml(this);},"f5",function(b){return PJ(this,b);}],Kv,"NegativeArraySizeException",5,N,[],0,3,0,0,DA,0,CR,[],1,3,0,["ha",function(b,c){return MB(this,b,c);}],HN,0,DA,[],0,3,0,
["gB",function(b,c,d,e,f,g,h){return SC(this,b,c,d,e,f,g,h);}],D8,0,B,[Bb],3,0,0,0,Gu,0,B,[D8],0,3,0,["is",function(b,c){L8(this,b,c);},"jL",function(b,c){return Q1(this,b,c);}],Gt,0,B,[Ec],0,3,0,["ic",function(b){SY(this,b);},"fo",function(b){return OB(this,b);}],DR,0,B,[Bb],3,0,0,0,Gs,0,B,[DR],0,3,0,["dp",function(b){Nf(this,b);},"fo",function(b){return N9(this,b);}],If,0,B,[Cj],0,3,0,0,Bq,0,B,[],4,3,Bg,0,Ig,0,B,[Cj],0,3,0,["fv",function(b,c){return N$(this,b,c);}],D$,"NumberFormatException",5,Cd,[],0,3,0,
0,GF,0,M,[],0,0,0,0,Ke,0,CY,[],0,3,0,["hV",function(){return Ro(this);}],Cr,0,B,[],4,3,0,0,EJ,0,B,[],0,3,B$,["cK",function(b){return RV(this,b);}],DT,"IllegalStateException",5,Bv,[],0,3,0,0,Hr,0,B,[EI],4,0,0,["ik",function(b){return LP(this,b);},"dU",function(b,c){return MI(this,b,c);},"ji",function(b,c){return Hh(this,b,c);}],FB,"NullPointerException",5,N,[],0,3,0,0,BU,0,B,[],0,3,0,0]);
$rt_metadata([HO,"Floor$1",10,BU,[],0,0,0,0,Hj,0,B,[],4,3,0,0,Jx,0,B,[],4,3,0,0,DX,0,S,[V],0,3,Q_,0,FW,0,B,[Ct],0,3,0,["cT",function(b){Og(this,b);},"fH",function(b){FC(this,b);}],Fm,0,B,[CS],0,3,0,["fB",function(){return PD(this);},"iF",function(){return Hf(this);}],EN,"Logger",2,B,[],0,3,El,["eb",function(b){Ls(this,b);},"j7",function(b,c){return Ih(this,b,c);},"iC",function(b,c){Rm(this,b,c);},"iR",function(b,c,d){Oq(this,b,c,d);}],DK,0,B,[Bn],0,3,0,["ft",function(){return Nr(this);},"cD",function(){return Oi(this);
},"f8",function(){return NM(this);},"iX",function(b){Ns(this,b);}],GB,0,B,[D7],4,0,0,["gd",function(b){return PC(this,b);},"j_",function(b){Kr(this,b);}],BZ,0,B,[],0,3,By,0,GC,0,B,[Cj],0,3,0,0,Hv,0,B,[Ct],0,3,0,["cT",function(b){Pt(this,b);},"fH",function(b){F0(this,b);}],Iy,0,B6,[],0,0,0,0,ER,"TeaVmJsonObject",24,Cb,[CL],4,3,0,["kk",function(b){return Jl(this,b);},"jG",function(){return HQ(this);},"jN",function(b,c){return JS(this,b,c);},"e",function(){return S1(this);},"eX",function(b){return SI(this,b);},
"Y",function(b){return L_(this,b);},"fd",function(b){return MY(this,b);},"dZ",function(b){return PS(this,b);},"fQ",function(){return Sa(this);},"b_",function(b){return Of(this,b);},"fa",function(){return Lx(this);},"fM",function(b,c){return QW(this,b,c);},"ct",function(b){return Ot(this,b);},"e_",function(){return OS(this);},"ib",function(b,c){return Lp(this,b,c);},"g8",function(b){return Ou(this,b);},"c5",function(b){return Nx(this,b);},"gC",function(b,c){return OC(this,b,c);},"iO",function(b){return SQ(this,
b);},"hW",function(b){return PA(this,b);},"dG",function(b){return N3(this,b);},"dA",function(b,c){return Mf(this,b,c);},"hC",function(){return OP(this);},"gI",function(b){return QN(this,b);},"hf",function(b){return SD(this,b);},"gx",function(b){return Sp(this,b);},"d5",function(){return PP(this);}],Jg,"BufferOverflowException",3,N,[],0,3,0,0,Iz,0,B6,[],0,0,0,0,Di,0,B,[],0,3,Bu,["f_",function(){return Lr(this);},"cP",function(){return Qs(this);},"ie",function(){return SB(this);},"hU",function(){return Qw(this);
},"fu",function(){return QG(this);},"d",function(){return Pv(this);}],C_,0,B,[],4,3,DQ,0,Fh,0,DB,[],4,3,0,["ff",function(){return NL(this);},"hB",function(b){KF(this,b);}],Ee,0,B,[],32,0,TF,0,Hx,"Sphere$1",10,BU,[],0,0,0,0,Jn,0,Cn,[],0,3,0,0,Fy,0,B,[Ez],0,3,0,["fZ",function(b){return Rp(this,b);},"km",function(b){return GL(this,b);}],Fz,0,B,[D2],0,3,0,["dp",function(b){KE(this,b);},"fo",function(b){return NO(this,b);}],HB,0,B,[],0,3,0,0,HA,0,Bf,[],1,3,0,0,HZ,0,Bf,[],1,3,0,0,Fe,0,Cb,[Cw],4,0,0,["jV",function()
{return Ek(this);},"jp",function(b){return Gm(this,b);},"n",function(){return LO(this);},"cI",function(b){return Nm(this,b);},"iL",function(b){return Pz(this,b);},"hC",function(){return OP(this);},"Y",function(b){return RL(this,b);},"gI",function(b){return QN(this,b);},"hf",function(b){return SD(this,b);},"gx",function(b){return Sp(this,b);},"d5",function(){return PP(this);},"hp",function(b){return Mq(this,b);}],IJ,"BufferUnderflowException",3,N,[],0,3,0,0,HE,0,BM,[],0,0,0,["d8",function(b){Qz(this,b);}],HR,
0,B,[],0,3,0,0,F_,0,BF,[C5],0,0,0,["cL",function(b){return Kz(this,b);},"n",function(){return Mv(this);}],BV,0,B,[],0,3,Dm,0]);
function $rt_array(cls,data){this.nv=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["@",": ","    at ","Caused by: ",",","null","0",".","Null pointer","JSON does not allow non-finite numbers","JSON does not allow non-finite numbers.","\"\"","\\t","\\n","\\f","\\r","000","\\u","\\b","number","object","string","boolean","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ","main",
"BIG_ENDIAN","LITTLE_ENDIAN","Using default built-in JSON factory which is not interoperable with the underlying platform! Be sure you haven\'t forgot to call Json.registerProvider().","Index out of bounds","New position "," is outside of range [0;","]","RETURN_NULL","TRACE_AND_RETURN_NULL","THROW_EXCEPTION","classes.wasm","cy","width","height","placeIndex","frameIndex","wasm","computeLinePixelRGBs","initAndComputeLinePixelRGBs","[",", ","Exception raised in Future.compose()","failed","succeeded","Result is already complete: ",
"Replacement preconditions do not hold","Action must be non-null","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ",")","STRING","NUMBER","BOOLEAN","OBJECT","ARRAY","NULL","UNDEFINED","OFF","SEVERE","WARNING","INFO","CONFIG","FINE","FINER","FINEST","ALL","IGNORE","REPLACE","REPORT","false","true","Light.","Sphere.","Cannot find META-INF/services/"," on classpath","Light","The last char in dst ","Sphere","Floor","Default","Glass","Mirror","UTF-8","global",""]);
BI.prototype.toString=function(){return $rt_ustr(this);};
BI.prototype.valueOf=BI.prototype.toString;B.prototype.toString=function(){return $rt_ustr(Np(this));};
B.prototype.__teavm_class__=function(){return $dbg_class(this);};
function Long_eq(a,b){return a.hi===b.hi&&a.lo===b.lo;}function Long_ne(a,b){return a.hi!==b.hi||a.lo!==b.lo;}function Long_gt(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);}function Long_ge(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);}function Long_lt(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>
1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);}function Long_le(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);}function Long_add(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_inc(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);}function Long_dec(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);}function Long_neg(a)
{return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));}function Long_sub(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<
16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_compare(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}function Long_mul(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo
+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);}function Long_div(a,b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];}function Long_udiv(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];}function Long_rem(a,
b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];}function Long_urem(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];}function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}function Long_and(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);}function Long_or(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);}function Long_xor(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);}function Long_shl(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}}function Long_shr(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi
<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}}function Long_shru(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}}function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup
=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -
b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF
|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a)
{var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup
=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q
=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;}function $rt_startThread(runner,callback){var result;try {result
=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(T8);
(function(){var c;c=IL.prototype;c.getLength=c.j1;c.get=c.j$;c=Ka.prototype;c.handleEvent=c.jl;c=Gu.prototype;c.apply=c.jL;c=Gt.prototype;c.handle=c.fo;c=Gs.prototype;c.handle=c.fo;c=Fz.prototype;c.handle=c.fo;})();
})();

main()