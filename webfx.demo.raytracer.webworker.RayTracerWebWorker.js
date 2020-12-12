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
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.dK=f;}
function $rt_cls(cls){return Gj(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Tf(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.h.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(T7());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return Fi();}
function $rt_setThread(t){return NI(t);}
function $rt_createException(message){return VZ(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var F=$rt_throw;var CY=$rt_compare;var V0=$rt_nullCheck;var E=$rt_cls;var L=$rt_createArray;var Be=$rt_isInstance;var V1=$rt_nativeThread;var V2=$rt_suspending;var V3=$rt_resuming;var V4=$rt_invalidPointer;var C=$rt_s;var J=$rt_eraseClinit;var D2=$rt_imul;var Ba=$rt_wrapException;
function B(){this.$id$=0;}
function Uy(){var a=new B();D(a);return a;}
function D(a){return;}
function Cv(a){return Gj(a.constructor);}
function Ov(a){return DG(a);}
function KT(a,b){return a!==b?0:1;}
function Nz(a){return I().c(Cv(a).dj()).c(C(0)).c(E$(DG(a))).e();}
function DG(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function SO(a){var b,c,d;if(!Be(a,B6)){b=a;if(b.constructor.$meta.item===null)F(Tr());}c=K0(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function BN(){var a=this;B.call(a);a.eC=null;a.cr=null;a.cX=0;a.dJ=0;a.eH=null;}
function V5(){var a=new BN();I2(a);return a;}
function V6(a){var b=new BN();EY(b,a);return b;}
function V7(a){var b=new BN();I3(b,a);return b;}
function I2(a){a.cX=1;a.dJ=1;a.dg();}
function EY(a,b){a.cX=1;a.dJ=1;a.dg();a.eC=b;}
function I3(a,b){a.cX=1;a.dJ=1;a.dg();a.cr=b;}
function PB(a){return a;}
function OI(a){return a.eC;}
function Qk(a){return a.cF();}
function Q2(a){a.ex(O0());}
function Sy(a,b){var c,d,e,f,g;b.b4(Cv(a).dj());c=a.gX();if(c!==null)b.b4(I().c(C(1)).c(c).e());a:{b.iz();if(a.eH!==null){d=a.eH.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.b4(C(2));b.iy(g);f=f+1|0;}}}if(a.cr!==null&&a.cr!==a){b.b4(C(3));a.cr.ex(b);}}
function Bu(){BN.call(this);}
function V8(){var a=new Bu();C8(a);return a;}
function V9(a){var b=new Bu();DI(b,a);return b;}
function C8(a){I2(a);}
function DI(a,b){EY(a,b);}
function N(){Bu.call(this);}
function V$(){var a=new N();Br(a);return a;}
function VZ(a){var b=new N();ES(b,a);return b;}
function Br(a){C8(a);}
function ES(a,b){DI(a,b);}
function C$(){N.call(this);}
function Gn(){var a=new C$();Hj(a);return a;}
function B8(a){var b=new C$();Rk(b,a);return b;}
function Hj(a){Br(a);}
function Rk(a,b){ES(a,b);}
function CT(){}
function Dh(){B.call(this);this.cy=null;}
function V_(){var a=new Dh();FM(a);return a;}
function FM(a){D(a);}
function Jo(a,b){a.cy=b;}
function Ow(a,b){a.cy.cP(b);}
function Ro(a,b){a.cy.cW(b);}
function C9(){}
function CX(){Dh.call(this);this.fS=null;}
function Wa(){var a=new CX();IW(a);return a;}
function IW(a){FM(a);}
function Pg(a,b){a.fS=b;Jo(a,b);}
function J$(a,b){a.f3(b);}
function Qu(a,b){return a.fS.dL(b);}
function Gs(){var a=this;B.call(a);a.dX=null;a.fq=null;a.e1=0;a.du=0;}
function TX(a,b){var c=new Gs();PS(c,a,b);return c;}
function PS(a,b,c){D(a);a.dX=b;a.fq=c;}
function O5(a){return CF(a.dX);}
function O_(a,b){return Bw(a.fq)<b?0:1;}
function P4(a,b){a.e1=b;}
function S5(a,b){a.du=b;}
function Bm(){}
function S(){B.call(this);}
function Wb(){var a=new S();BX(a);return a;}
function BX(a){D(a);}
function V(){}
function B$(){S.call(this);this.dy=0;}
var Wc=null;var Wd=null;function BK(){BK=J(B$);Pm();}
function P5(a){var b=new B$();HX(b,a);return b;}
function HX(a,b){BK();BX(a);a.dy=b;}
function HD(b,c){BK();if(!(c>=2&&c<=36))c=10;return Vq(20).ea(b,c).e();}
function E$(b){BK();return K1(b,4);}
function G8(b){BK();return HD(b,10);}
function GG(b,c){var d,e,f,g,h;BK();if(c>=2&&c<=36){if(b!==null&&!b.b8()){a:{d=0;e=0;switch(b.l(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.d())F(VQ());while(e<b.d()){g=e+1|0;h=Fh(b.l(e));if(h<0)F(CU(I().c(C(4)).c(b).e()));if(h>=c)F(CU(I().c(C(5)).r(c).c(C(1)).c(b).e()));f=D2(c,f)+h|0;if(f<0){if(g==b.d()&&f==(-2147483648)&&d)return (-2147483648);F(CU(I().c(C(6)).c(b).e()));}e=g;}if(d)f= -f;return f;}F(CU(C(7)));}F(CU(I().c(C(8)).r(c).e()));}
function Er(b){BK();return GG(b,10);}
function X(b){BK();if(b>=(-128)&&b<=127){Gx();return Wd.data[b+128|0];}return P5(b);}
function Gx(){var b;BK();a:{if(Wd===null){Wd=L(B$,256);b=0;while(true){if(b>=Wd.data.length)break a;Wd.data[b]=P5(b-128|0);b=b+1|0;}}}}
function Mk(a){return a.dy;}
function Re(a){return G8(a.dy);}
function Gv(b){var c,d,e;BK();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function Pm(){Wc=E($rt_intcls());}
function H8(){Bu.call(this);}
function Tr(){var a=new H8();RM(a);return a;}
function RM(a){C8(a);}
function BR(){B.call(this);}
var We=null;var Wf=null;var Wg=null;var Wh=null;var Wi=null;function Oy(){Oy=J(BR);R0();}
function R0(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;We=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);Wf=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);Wg=b;Wh=TD();Wi=U4();}
function By(){var a=this;B.call(a);a.j=null;a.P=null;}
function Wj(){var a=new By();EV(a);return a;}
function EV(a){D(a);}
function Q(){var a=this;By.call(a);a.N=0.0;a.L=null;}
function Wk(){var a=new Q();Bz(a);return a;}
function Bz(a){EV(a);}
function Qa(a,b){return Bv(BT(b,a.L));}
function Kx(a,b){var c,d,e,f;c=BT(a.L,b.bg);d=Bq(c,b.Y);if(d<0.0)return null;e=CP(a.N,2.0)-(Bq(c,c)-CP(d,2.0));f=e<0.0?0.0:d-E6(e);if(f===0.0)return null;return T3(a,a,b,f);}
function B0(){var a=this;B.call(a);a.F=null;a.bP=0.0;a.bL=null;}
function Wl(){var a=new B0();DE(a);return a;}
function DE(a){D(a);}
function Jh(){var a=this;B0.call(a);a.eU=null;a.eL=null;a.dR=0.0;a.hn=null;}
function T3(a,b,c,d){var e=new Jh();PO(e,a,b,c,d);return e;}
function PO(a,b,c,d,e){a.hn=b;a.eU=c;a.eL=d;a.dR=e;DE(a);a.F=a.eU;a.bL=a.eL;a.bP=a.dR;}
function E9(){S.call(this);this.dM=Long_ZERO;}
var Wm=null;function Io(){Io=J(E9);QO();}
function Vk(a){var b=new E9();Id(b,a);return b;}
function Id(a,b){Io();BX(a);a.dM=b;}
function DW(b){Io();return Vk(b);}
function Lb(a){return a.dM.lo;}
function Gc(b){Io();return I().ie(b).e();}
function P1(a){return Gc(a.dM);}
function Dm(b,c){return Long_udiv(b, c);}
function Ga(b,c){return Long_urem(b, c);}
function QO(){Wm=E($rt_longcls());}
function BQ(){}
function D6(){}
function B4(){var a=this;B.call(a);a.fy=Long_ZERO;a.gc=Long_ZERO;a.g3=null;a.hL=null;a.gy=0;a.iO=null;}
var Wn=null;var Wo=null;var Wp=Long_ZERO;var Wq=0;function E4(){E4=J(B4);ML();}
function Ta(a){var b=new B4();G9(b,a);return b;}
function Wr(a,b){var c=new B4();Eo(c,a,b);return c;}
function G9(a,b){E4();Eo(a,null,b);}
function Eo(a,b,c){var d;E4();D(a);a.g3=Uy();a.gy=1;a.hL=c;a.iO=b;d=Wp;Wp=Long_add(d,Long_fromInt(1));a.fy=d;}
function NI(b){E4();if(Wo!==b)Wo=b;Wo.gc=H7();}
function Fi(){E4();return Wo;}
function KI(a){return a.fy;}
function ML(){Wn=Ta(C(9));Wo=Wn;Wp=Long_fromInt(1);Wq=1;}
function Bb(){}
function IG(b){return b;}
function Em(){}
function IN(){B.call(this);}
function SD(a,b){return a.jE(b);}
function NN(a){return a.jC();}
function CJ(){}
function Ch(){BN.call(this);}
function Ws(a){var b=new Ch();HW(b,a);return b;}
function Wt(a){var b=new Ch();GV(b,a);return b;}
function HW(a,b){EY(a,b);}
function GV(a,b){I3(a,b);}
function Cm(){Ch.call(this);}
function Wu(a){var b=new Cm();FH(b,a);return b;}
function FH(a,b){HW(a,b);}
function JK(){C$.call(this);}
function NZ(){var a=new JK();PL(a);return a;}
function PL(a){Hj(a);}
function De(){}
function D1(){}
function Dx(){var a=this;By.call(a);a.fc=0.0;a.co=null;}
function Wv(){var a=new Dx();HI(a);return a;}
function HI(a){EV(a);}
function KH(a,b){return a.co;}
function Ss(a,b){var c,d;c=Bq(a.co,b.Y);if(c>0.0)return null;d=(a.fc+Bq(a.co,b.bg))/ -c;return Vd(a,a,b,d);}
function Dq(){B.call(this);this.g1=null;}
var Ww=null;var Wx=null;function R1(){R1=J(Dq);SN();}
function O3(a){var b=new Dq();Fn(b,a);return b;}
function Fn(a,b){R1();D(a);a.g1=b;}
function SN(){Ww=O3(C(10));Wx=O3(C(11));}
function Je(){B.call(this);}
function Nt(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.es.data;f=b.fN;b.fN=f+1|0;g=MC(e[f]);h=(g%2|0)!=1?0:1;c=c+D2(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function FT(b){var c,d;c=Nt(b);d=c/2|0;if(c%2|0)d= -d;return d;}
function MC(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function Fc(){B.call(this);}
var Wy=null;function Ut(){Ut=J(Fc);S2();}
function S2(){var $$je;Wy=$rt_createIntArray(Eh().data.length);a:{try{Wy.data[Bd(Wz)]=1;break a;}catch($$e){$$je=Ba($$e);if($$je instanceof Bi){}else{throw $$e;}}}b:{try{Wy.data[Bd(WA)]=2;break b;}catch($$e){$$je=Ba($$e);if($$je instanceof Bi){}else{throw $$e;}}}c:{try{Wy.data[Bd(WB)]=3;break c;}catch($$e){$$je=Ba($$e);if($$je instanceof Bi){}else{throw $$e;}}}d:{try{Wy.data[Bd(WC)]=4;break d;}catch($$e){$$je=Ba($$e);if($$je instanceof Bi){}else{throw $$e;}}}e:{try{Wy.data[Bd(WD)]=5;break e;}catch($$e){$$je
=Ba($$e);if($$je instanceof Bi){}else{throw $$e;}}}f:{try{Wy.data[Bd(WE)]=6;break f;}catch($$e){$$je=Ba($$e);if($$je instanceof Bi){}else{throw $$e;}}}}
function Eu(){}
function Ix(){B.call(this);}
function Hr(){var b;b=VK();Ds();return EW(E(CK),b,WF);}
function PD(){var b;b=Hr();return b!==null&&b.hy()?1:0;}
function MX(b,c){return Hr().h2(b,c);}
function S4(){return F4(E(CK));}
function Bf(){B.call(this);}
function F$(){Bf.call(this);}
function P(){}
function FZ(){B.call(this);}
function VA(){var a=new FZ();PW(a);return a;}
function PW(a){D(a);}
function PX(a,b){return Kp(a,b);}
function Kp(a,b){return M8(b);}
function Fx(){var a=this;CX.call(a);a.bN=0;a.cx=0;a.c2=0;a.c9=0;a.cs=null;a.eP=0;a.bz=null;a.dt=null;a.dZ=0;}
function TM(){var a=new Fx();Q5(a);return a;}
function Q5(a){IW(a);}
function NF(a){var b;if(PD()){b=MX(C(12),L(D3,0));b.c0(T1(a));}a.cW(UQ(a));}
function Hi(a,b){var c,d,e,f,g,h,i,j,k;c=NM(b);d=c.dC(C(13),X(0)).I();e=c.dG(C(14));f=e===null?0:1;if(f){a.bN=c.dG(C(14)).I();a.cx=c.dG(C(15)).I();a.c2=c.dC(C(16),X(0)).I();a.c9=c.dC(C(17),X(0)).I();a.eP=c.iN(C(18));}if(a.eP&&a.bz!==null){if(!f&&a.dZ){g=a.bz;h=L(B,1);h.data[0]=X(d);i=g.dT(C(19),h);}else{g=a.bz;h=L(B,5);j=h.data;j[0]=X(d);j[1]=X(a.bN);j[2]=X(a.cx);j[3]=X(a.c2);j[4]=X(a.c9);i=g.dT(C(20),h);a.dZ=1;}k=i.I();a.dt.f1(k);a.cs=a.dt.iE(3*a.bN|0);}else{if(f)KD(a.bN,a.cx,a.c2,a.c9);a.cs=Rq(a.bN,null);Kw(d,
a.cs);}a.cP(a.dL(a.cs));}
function JG(a,b){a.bz=b.c$();a.dt=a.bz.ij(0);}
function FX(){B.call(this);}
function UB(){var a=new FX();O$(a);return a;}
function O$(a){D(a);}
function Sd(a,b){return Ie(a,b);}
function Ie(a,b){return Rb(b);}
function Cf(){var a=this;B.call(a);a.b=null;a.k=0;}
function WG(){var a=new Cf();Eb(a);return a;}
function Vq(a){var b=new Cf();F2(b,a);return b;}
function Eb(a){F2(a,16);}
function F2(a,b){D(a);a.b=$rt_createCharArray(b);}
function D7(a,b){return a.ci(a.k,b);}
function Et(a,b,c){var d,e,f;if(b>=0&&b<=a.k){if(c===null)c=C(21);else if(c.b8())return a;a.bu(a.k+c.d()|0);d=a.k-1|0;while(d>=b){a.b.data[d+c.d()|0]=a.b.data[d];d=d+(-1)|0;}a.k=a.k+c.d()|0;d=0;while(d<c.d()){e=a.b.data;f=b+1|0;e[b]=c.l(d);d=d+1|0;b=f;}return a;}F(NZ());}
function G3(a,b){return a.ea(b,10);}
function L6(a,b,c){return a.gs(a.k,b,c);}
function RA(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)U(a,b,b+1|0);else{U(a,b,b+2|0);f=a.b.data;g=b+1|0;f[b]=45;b=g;}a.b.data[b]=Ck(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=D2(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;U(a,b,b+i|0);if(e)l=b;else{f=a.b.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.b.data;g=l+1|0;f[l]=Ck(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function Jq(a,b){return a.ei(a.k,b);}
function Kk(a,b,c){return a.hX(b,c,10);}
function K3(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(Long_lt(c,Long_ZERO)){e=0;c=Long_neg(c);}a:{f=Long_fromInt(d);if(Long_lt(c,f)){if(e)U(a,b,b+1|0);else{U(a,b,b+2|0);g=a.b.data;h=b+1|0;g[b]=45;b=h;}a.b.data[b]=Ck(c.lo,d);}else{i=1;j=Long_fromInt(1);while(true){k=Long_mul(j,f);if(Long_le(k,j))break;if(Long_gt(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;U(a,b,b+i|0);if(e)l=b;else{g=a.b.data;l=b+1|0;g[b]=45;}while(true){if(Long_le(j,Long_ZERO))break a;g=a.b.data;h=l+1|0;g[l]=Ck(Long_div(c,j).lo,d);c=Long_rem(c,j);j=Long_div(j,
f);l=h;}}}return a;}
function IA(a,b){return a.dS(a.k,b);}
function HO(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=CY(c,0.0);if(!d){U(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=48;e=a.b.data;f=d+1|0;e[d]=46;a.b.data[f]=48;return a;}if(!d){U(a,b,b+4|0);e=a.b.data;d=b+1|0;e[b]=45;e=a.b.data;f=d+1|0;e[d]=48;e=a.b.data;d=f+1|0;e[f]=46;a.b.data[d]=48;return a;}if(isNaN(c)?1:0){U(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=78;e=a.b.data;f=d+1|0;e[d]=97;a.b.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){U(a,b,b+8|0);d=b;}else{U(a,b,b+9|0);e=a.b.data;d=b+1|0;e[b]=45;}e=a.b.data;f=d+1|0;e[d]
=73;e=a.b.data;d=f+1|0;e[f]=110;e=a.b.data;f=d+1|0;e[d]=102;e=a.b.data;d=f+1|0;e[f]=105;e=a.b.data;f=d+1|0;e[d]=110;e=a.b.data;d=f+1|0;e[f]=105;e=a.b.data;f=d+1|0;e[d]=116;a.b.data[f]=121;return a;}Oy();g=Wh;JF(c,g);h=g.cD;i=g.cV;j=g.d$;k=1;l=1;if(j)l=2;m=18;n=Nh(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=BY(m,k+1|0);i=0;}else if(i<0){h=Long_div(h,Wf.data[ -i]);m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(!(i>(-100)&&i<100))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;U(a,b,b+
d|0);if(!j)o=b;else{e=a.b.data;o=b+1|0;e[b]=45;}p=new Long(1569325056, 23283064);q=0;while(q<m){if(Long_le(p,Long_ZERO))r=0;else{r=Long_div(h,p).lo;h=Long_rem(h,p);}e=a.b.data;d=o+1|0;e[o]=(48+r|0)&65535;k=k+(-1)|0;if(k)o=d;else{e=a.b.data;o=d+1|0;e[d]=46;}p=Long_div(p,Long_fromInt(10));q=q+1|0;}if(i){e=a.b.data;d=o+1|0;e[o]=69;if(i>=0)f=d;else{i= -i;e=a.b.data;f=d+1|0;e[d]=45;}if(i>=100){e=a.b.data;d=f+1|0;e[f]=(48+(i/100|0)|0)&65535;i=i%100|0;e=a.b.data;o=d+1|0;e[d]=(48+(i/10|0)|0)&65535;}else if(i<10)o=f;else
{e=a.b.data;o=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.b.data[o]=(48+(i%10|0)|0)&65535;}return a;}
function Nh(b){var c,d,e,f;c=Long_fromInt(1);d=0;e=16;Oy();f=Wg.data.length-1|0;while(f>=0){if(Long_eq(Long_rem(b,Long_mul(c,Wg.data[f])),Long_ZERO)){d=d|e;c=Long_mul(c,Wg.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function J3(a,b){return a.fe(a.k,b);}
function JH(a,b,c){U(a,b,b+1|0);a.b.data[b]=c;return a;}
function JC(a,b){return a.eR(a.k,b);}
function Iq(a,b,c){return a.ci(b,c===null?C(21):c.e());}
function D9(a,b){var c,d;if(a.b.data.length>=b)return;if(a.b.data.length>=1073741823)c=2147483647;else{d=a.b.data.length*2|0;c=BY(b,BY(d,5));}a.b=Ml(a.b,c);}
function DO(a){return NO(a.b,0,a.k);}
function Jf(a){return a.k;}
function G$(a,b,c,d){return a.dP(a.k,b,c,d);}
function FJ(a,b,c,d,e){var f,g;if(d<=e&&e<=c.d()&&d>=0){U(a,b,(b+e|0)-d|0);while(d<e){f=a.b.data;g=b+1|0;f[b]=c.l(d);d=d+1|0;b=g;}return a;}F(Gn());}
function IZ(a,b,c,d,e){var f,g,h,i;if(b>c)F(B8(C(22)));while(b<c){f=d.data;g=e+1|0;h=a.b.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function IP(a,b){a.k=b;}
function U(a,b,c){var d,e;d=a.k-b|0;a.bu((a.k+c|0)-b|0);e=d-1|0;while(e>=0){a.b.data[c+e|0]=a.b.data[b+e|0];e=e+(-1)|0;}a.k=a.k+(c-b|0)|0;}
function CI(){}
function FB(){Cf.call(this);}
function I(){var a=new FB();RX(a);return a;}
function RX(a){Eb(a);}
function K8(a,b){D7(a,b);return a;}
function Bs(a,b){G3(a,b);return a;}
function QA(a,b){Jq(a,b);return a;}
function OD(a,b){IA(a,b);return a;}
function KZ(a,b){J3(a,b);return a;}
function Ri(a,b,c,d){G$(a,b,c,d);return a;}
function R(a,b){JC(a,b);return a;}
function PJ(a,b,c){Kk(a,b,c);return a;}
function RK(a,b,c){HO(a,b,c);return a;}
function LQ(a,b,c,d,e){FJ(a,b,c,d,e);return a;}
function Sp(a,b,c){Iq(a,b,c);return a;}
function Mj(a,b,c){JH(a,b,c);return a;}
function Sz(a,b,c){Et(a,b,c);return a;}
function SI(a,b){IP(a,b);}
function Pb(a,b,c,d,e){IZ(a,b,c,d,e);}
function M4(a,b,c,d,e){return a.hq(b,c,d,e);}
function M1(a){return Jf(a);}
function Y(a){return DO(a);}
function SM(a,b){D9(a,b);}
function La(a,b,c){return a.g5(b,c);}
function KG(a,b,c){return a.io(b,c);}
function O9(a,b,c){return a.ha(b,c);}
function NW(a,b,c){return a.hD(b,c);}
function SZ(a,b,c){return a.gW(b,c);}
function D3(){B.call(this);}
function Dc(){}
function Ns(a,b,c){var d,e;d=L(B,2);e=d.data;e[0]=a.c7(b);e[1]=c;return Oj(d);}
function Q$(a,b){DP();return WH.z(a.hQ(b));}
function Md(a,b){return Lx(a.c7(b));}
function RH(a,b){return DN(a.c7(b));}
function Lf(a,b,c){return DN(a.gw(b,c));}
function Dw(){}
function Oh(a,b){return b;}
function MO(a,b){if(b===null)return null;if(Be(b,CL))return a.f$(b);if(!Be(b,Cs))return a.c1(b);return a.hT(b);}
function OB(a,b){return b.bk();}
function S7(a,b){return b.bk();}
function Ek(){}
function E_(){}
function M3(a){return E2(a.bk(),a,I()).e();}
function Q_(b,c){var d,e,f,g,h;c.q(123);d=1;e=b.e4();f=0;g=e.n();while(f<g){h=e.hi(f);if(!d)c.q(44);HE(h,c);c.q(58);E2(b.ct(h),b,c);d=0;f=f+1|0;}return c.q(125);}
function Nb(b,c){return OO(b,C(23),c.q(91)).q(93);}
function OO(b,c,d){var e,f;e=b.n();f=0;while(f<e){if(f>0)d.c(c);E2(b.cK(f),b,d);f=f+1|0;}return d;}
function E2(b,c,d){Ut();switch(Wy.data[Bd(c.ce(b))]){case 1:return d.c(C(21));case 2:return Q_(c.bV(b),d);case 3:return Nb(c.cN(b),d);case 4:return d.c(SR(c.W(b)));case 5:return d.di(c.W(b));case 6:return HE(c.W(b),d);default:}return d;}
function My(b){if(b.cw(46)>0&&b.cw(101)<0&&b.cw(69)<0){while(b.eq(C(24))){b=b.bl(0,b.d()-1|0);}if(b.eq(C(25)))b=b.bl(0,b.d()-1|0);}return b;}
function SR(b){if(b!==null){N4(b);return My(b.e());}F(B2(C(26)));}
function N4(b){var c;a:{b:{if(b!==null){if(b instanceof BV){if(Og(0.0).z(b))break b;c=b;if(!c.fs()&&!c.fK())break b;F(B2(C(27)));}if(b instanceof BZ&&!T5(0.0).z(b)){c=b;if(c.fs())break a;if(c.fK())break a;}}}return;}F(B2(C(28)));}
function HE(b,c){var d,e,f,g,h,i,j;if(Nu(b))return c.c(C(29));d=0;e=b.d();c.q(34);f=0;while(f<e){a:{g=b.l(f);switch(g){case 8:break;case 9:c.c(C(30));break a;case 10:c.c(C(31));break a;case 12:c.c(C(32));break a;case 13:c.c(C(33));break a;case 34:case 92:c.q(92);c.q(g);break a;case 47:if(d==60)c.q(92);c.q(g);break a;default:if(g>=32){c.q(g);break a;}h=E$(g);i=I();R(R(i,C(34)),h);j=Y(i);c.c(C(35)).c(j.g0(j.d()-4|0));break a;}c.c(C(36));}f=f+1|0;d=g;}return c.q(34);}
function CG(){}
function P2(a){return a.bV(a.dd());}
function Cx(){}
function Cs(){}
function OR(a,b){return a.bV(a.ct(b));}
function Pn(a,b){return a.W(a.ct(b));}
function IU(){N.call(this);}
function No(){var a=new IU();SA(a);return a;}
function SA(a){Br(a);}
function F0(){B.call(this);}
function VI(){var a=new F0();Lu(a);return a;}
function Lu(a){D(a);}
function N1(a,b){return F_(a,b);}
function F_(a,b){return RS(b);}
function FY(){B.call(this);}
function Ua(){var a=new FY();MK(a);return a;}
function MK(a){D(a);}
function LJ(a,b){return IB(a,b);}
function IB(a,b){return Qd(b);}
function Ez(){}
function IS(){B.call(this);this.fM=null;}
function UQ(a){var b=new IS();OP(b,a);return b;}
function OP(a,b){D(a);a.fM=b;}
function Sg(a,b){Hi(a.fM,b);}
function CB(){}
function IR(){B.call(this);this.eZ=null;}
function T1(a){var b=new IR();QV(b,a);return b;}
function QV(a,b){D(a);a.eZ=b;}
function Rl(a,b){Kq(a,b);}
function Kq(a,b){JG(a.eZ,b);}
function JM(){var a=this;B.call(a);a.eo=null;a.ep=null;}
function Uo(a,b){var c=new JM();P3(c,a,b);return c;}
function P3(a,b,c){D(a);a.eo=b;a.ep=c;}
function SK(a,b){Jl(a,b);}
function Jl(a,b){L7(a.eo,a.ep,b);}
function I9(){var a=this;B.call(a);a.fD=null;a.er=null;a.cQ=null;a.d6=null;a.bJ=null;}
function VT(){var a=new I9();PE(a);return a;}
function PE(a){D(a);}
function Fk(a,b,c){if(b!==null)a.fD=b;if(c!==null)a.er=c;return a;}
function FS(a){var b;if(a.cQ===null){b=G6(a.fD.fA());if(b.x())a.cQ=b.s();}return a.cQ;}
function IV(a){var b,c;a:{if(a.bJ===null){a.bJ=FS(a);if(a.d6!==null){b=a.d6.t();while(true){if(!b.x())break a;c=b.s();a.bJ=c.f(a.bJ);}}}}return a.bJ;}
function Ex(){}
function EJ(){}
function CS(){}
function Ev(){B.call(this);}
var WI=null;function OZ(){OZ=J(Ev);KP();}
function IY(b){var c,d;OZ();c=WI.cv(b);if(c===null){d=WI;c=VT();d.bd(b,c);}return c;}
function EW(b,c,d){var e,f,g,h,i,j;OZ();e=IY(b);f=Fk(e,c,d);g=IV(f);if(g!==null)return g;e=f.er;Ds();if(e!==WF){h=b.dj();i=I();R(R(R(i,C(37)),h),C(38));j=Y(i);if(e===WJ)F(U6(j));e=E7();FI();e.iB(WK,j);}return null;}
function KP(){WI=S3();}
function CH(){}
function GN(){Ch.call(this);}
function Uu(a){var b=new GN();K$(b,a);return b;}
function K$(a,b){GV(a,b);}
function B5(){B.call(this);this.c_=null;}
function WL(){var a=new B5();Es(a);return a;}
function Es(a){D(a);}
function B6(){}
function Dy(){var a=this;B5.call(a);a.u=0;a.g=null;a.A=0;a.fV=0.0;a.bW=0;}
function S3(){var a=new Dy();H4(a);return a;}
function WM(a){var b=new Dy();DF(b,a);return b;}
function WN(a,b){var c=new Dy();JD(c,a,b);return c;}
function QD(a,b){return L(Cq,b);}
function H4(a){DF(a,16);}
function DF(a,b){JD(a,b,0.75);}
function Jx(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function JD(a,b,c){var d;Es(a);if(b>=0&&c>0.0){d=Jx(b);a.u=0;a.g=a.cY(d);a.fV=c;El(a);return;}F(Ha());}
function El(a){a.bW=a.g.data.length*a.fV|0;}
function QP(a,b){var c;c=FU(a,b);if(c===null)return null;return c.Q;}
function FU(a,b){var c,d,e;if(b===null)c=CN(a);else{d=Eg(b);e=d&(a.g.data.length-1|0);c=CE(a,b,e,d);}return c;}
function CE(a,b,c,d){var e,f;e=a.g.data[c];while(e!==null){if(e.b5==d){f=e.V;if(Gu(b,f))break;}e=e.H;}return e;}
function CN(a){var b;b=a.g.data[0];while(b!==null&&b.V!==null){b=b.H;}return b;}
function LB(a,b,c){return a.dw(b,c);}
function Ql(a,b,c){var d,e,f,g,h;if(b===null){d=CN(a);if(d===null){a.A=a.A+1|0;d=a.bI(null,0,0);e=a.u+1|0;a.u=e;if(e>a.bW)a.cf();}}else{f=Eg(b);g=f&(a.g.data.length-1|0);d=CE(a,b,g,f);if(d===null){a.A=a.A+1|0;d=a.bI(b,g,f);e=a.u+1|0;a.u=e;if(e>a.bW)a.cf();}}h=d.Q;d.Q=c;return h;}
function NL(a,b,c,d){var e;e=UR(b,d);e.H=a.g.data[c];a.g.data[c]=e;return e;}
function Qe(a,b){var c,d,e,f,g,h,i;c=Jx(!b?1:b<<1);d=a.cY(c);e=0;while(e<a.g.data.length){f=a.g.data[e];a.g.data[e]=null;while(f!==null){g=d.data;h=f.b5&(c-1|0);i=f.H;f.H=g[h];g[h]=f;f=i;}e=e+1|0;}a.g=d;El(a);}
function N9(a){a.hj(a.g.data.length);}
function G7(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.g.data[0];while(e!==null){if(e.V===null)break a;f=e.H;d=e;e=f;}}else{g=Eg(b);c=g&(a.g.data.length-1|0);e=a.g.data[c];while(e!==null&&!(e.b5==g&&Gu(b,e.V))){f=e.H;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.H=e.H;else a.g.data[c]=e.H;a.A=a.A+1|0;a.u=a.u-1|0;return e;}
function N6(a){return a.u;}
function Eg(b){return b.bM();}
function Gu(b,c){return b!==c&&!b.z(c)?0:1;}
function Gl(){var a=this;Dy.call(a);a.bQ=0;a.E=null;a.m=null;}
function VY(){var a=new Gl();Mm(a);return a;}
function TZ(a){var b=new Gl();NY(b,a);return b;}
function Mm(a){H4(a);a.bQ=0;a.E=null;}
function NY(a,b){DF(a,b);a.bQ=0;a.E=null;}
function Ne(a,b){return L(EK,b);}
function K7(a,b){var c,d,e,f,g;if(b===null)c=CN(a);else{d=b.bM();e=(d&2147483647)%a.g.data.length|0;c=CE(a,b,e,d);}if(c===null)return null;if(a.bQ&&a.m!==c){f=c.y;g=c.p;g.y=f;if(f===null)a.E=g;else f.p=g;c.p=null;c.y=a.m;a.m.p=c;a.m=c;}return c.Q;}
function Sq(a,b,c,d){var e;e=Uh(b,d);e.H=a.g.data[c];a.g.data[c]=e;a.dq(e);return e;}
function Q8(a,b,c){var d;d=a.dw(b,c);if(a.ig(a.E))a.go(a.E.V);return d;}
function Sr(a,b,c){var d,e,f,g,h,i;if(!a.u){a.E=null;a.m=null;}if(b===null){d=CN(a);if(d!==null)a.dq(d);else{a.A=a.A+1|0;e=a.u+1|0;a.u=e;if(e>a.bW)a.cf();d=a.bI(null,0,0);}}else{f=b.bM();e=f&2147483647;g=e%a.g.data.length|0;d=CE(a,b,g,f);if(d!==null)a.dq(d);else{a.A=a.A+1|0;h=a.u+1|0;a.u=h;if(h>a.bW){a.cf();g=e%a.g.data.length|0;}d=a.bI(b,g,f);}}i=d.Q;d.Q=c;return i;}
function KV(a,b){var c,d;if(a.m===b)return;if(a.E===null){a.E=b;a.m=b;return;}c=b.y;d=b.p;if(c!==null){if(d===null)return;if(a.bQ){c.p=d;d.y=c;b.p=null;b.y=a.m;a.m.p=b;a.m=b;}return;}if(d===null){b.y=a.m;b.p=null;a.m.p=b;a.m=b;}else if(a.bQ){a.E=d;d.y=null;b.y=a.m;b.p=null;a.m.p=b;a.m=b;}}
function Qm(a){return Uj(a);}
function Op(a){if(a.c_===null)a.c_=Ty(a);return a.c_;}
function Od(a,b){var c,d,e;c=G7(a,b);if(c===null)return null;d=c.y;e=c.p;if(d===null)a.E=e;else d.p=e;if(e===null)a.m=d;else e.y=d;return c.Q;}
function K_(a,b){return 0;}
function QS(b){return b.E;}
function B9(){B.call(this);this.bn=null;}
function WO(a){var b=new B9();DY(b,a);return b;}
function DY(a,b){D(a);a.bn=b;}
function F9(a){return a.bn;}
function GU(a,b){var c,d,e,f;if(b===null){T();return Wz;}a:{c=b;d=$rt_str(typeof c);e=(-1);switch(d.bM()){case -1034364087:if(!d.z(C(39)))break a;e=2;break a;case -1023368385:if(!d.z(C(40)))break a;e=0;break a;case -891985903:if(!d.z(C(41)))break a;e=1;break a;case 64711720:if(!d.z(C(42)))break a;e=3;break a;default:}}switch(e){case 0:if(!(Object.prototype.toString.apply(c)==='[object Array]'?1:0)){T();f=WA;}else{T();f=WB;}return f;case 1:break;case 2:T();return WC;case 3:T();return WD;default:T();return WP;}T();return WE;}
function GO(a){return Is();}
function J5(a,b){if(b instanceof EA)return b;return JJ(b);}
function IM(a,b){if(b instanceof EN)return b;return LT(b);}
function Ko(a,b){TQ();switch(WQ.data[Bd(a.ce(b))]){case 1:return NV(b);case 2:return Cy(M5(b));case 3:return Mv(b);default:}return b;}
function HJ(a,b){if(b===null)return null;if(b instanceof BJ)return $rt_ustr(b);if(b instanceof BD)return !!b.e2();if(b instanceof BZ)return b.jx();if(b instanceof BV)return b.bm();if(b instanceof S)return b.I();if(!(b instanceof BH))return b;return $rt_ustr(Dg(b));}
function Jj(a){return a.d4();}
function Mv(b){var c;c=S8(b);if(c!==QT(c))return Bk(c);if(R2(c)<=2.147483647E9)return X(c|0);return DW(Long_fromNumber(c));}
function M2(a){return a.fd();}
function Px(a){return a.fQ();}
function Or(a,b){return a.eY(b);}
function NT(a,b){return a.eE(b);}
function MH(a,b){return a.f6(b);}
function Is(){return {};}
function MM(b){var keys=[];for(var key in b){if(Object.prototype.hasOwnProperty.call(b,key)&&key!='$H'){keys.push(key);}}return keys;}
function G4(){Cf.call(this);}
function N8(){var a=new G4();Q0(a);return a;}
function Q0(a){Eb(a);}
function OG(a,b){D7(a,b);return a;}
function OH(a,b,c){Et(a,b,c);return a;}
function Ni(a){return DO(a);}
function NG(a,b){D9(a,b);}
function K4(a,b,c){return a.hW(b,c);}
function Ce(){var a=this;B.call(a);a.fu=0;a.v=0;a.T=0;a.b7=0;}
function WR(a){var b=new Ce();EB(b,a);return b;}
function EB(a,b){D(a);a.b7=(-1);a.fu=b;a.T=b;}
function Ct(a){return a.v;}
function IQ(a,b){if(b>=0&&b<=a.T){a.v=b;if(b<a.b7)a.b7=0;return a;}F(B2(I().c(C(43)).r(b).c(C(44)).r(a.T).c(C(45)).e()));}
function Hg(a){a.v=0;a.T=a.fu;a.b7=(-1);return a;}
function Bw(a){return a.T-a.v|0;}
function CF(a){return a.v>=a.T?0:1;}
function Bn(){var a=this;B.call(a);a.bC=null;a.bG=null;a.bT=null;a.R=null;a.bp=0.0;a.bB=0.0;a.cj=null;}
function WS(){var a=new Bn();Cz(a);return a;}
function Cz(a){D(a);}
function Ca(){var a=this;B.call(a);a.fU=0;a.bX=null;a.dk=null;a.f2=null;}
function WT(a){var b=new Ca();DM(b,a);return b;}
function DM(a,b){D(a);a.fU=b.A;a.bX=QS(b);a.f2=b;}
function Nv(a){return a.bX===null?0:1;}
function J7(a){if(a.fU==a.f2.A)return;F(No());}
function E1(a){J7(a);if(!a.x())F(OW());a.dk=a.bX;a.bX=a.bX.p;}
function B7(){}
function IJ(){Ca.call(this);}
function Vx(a){var b=new IJ();Py(b,a);return b;}
function Py(a,b){DM(a,b);}
function M9(a){E1(a);return a.dk;}
function Rh(a){return a.hF();}
function Ei(){}
function CV(){var a=this;B.call(a);a.d7=null;a.hk=null;a.iW=null;a.gV=null;a.is=null;a.dz=0;a.gE=0;}
function WU(a,b){var c=new CV();Kd(c,a,b);return c;}
function Kd(a,b,c){D(a);a.d7=b.ej;a.hk=b.dU;a.iW=b.f0;a.gV=b.fa;a.is=b.fL;a.f1(c);}
function Mz(a,b){a.gE=b;a.dz=b;}
function DD(){}
function Dz(){var a=this;B.call(a);a.V=null;a.Q=null;}
function WV(a,b){var c=new Dz();Kh(c,a,b);return c;}
function Kh(a,b,c){D(a);a.V=b;a.Q=c;}
function Rp(a){return a.V;}
function Sl(a){return a.Q;}
function Cq(){var a=this;Dz.call(a);a.b5=0;a.H=null;}
function UR(a,b){var c=new Cq();G_(c,a,b);return c;}
function G_(a,b,c){Kh(a,b,null);a.b5=c;}
function EK(){var a=this;Cq.call(a);a.p=null;a.y=null;}
function Uh(a,b){var c=new EK();Qh(c,a,b);return c;}
function Qh(a,b,c){G_(a,b,c);a.p=null;a.y=null;}
function Cd(){Cm.call(this);}
function WW(a){var b=new Cd();EM(b,a);return b;}
function EM(a,b){FH(a,b);}
function I0(){Cd.call(this);}
function WX(a){var b=new I0();N0(b,a);return b;}
function N0(a,b){EM(a,b);}
function Ef(){Bu.call(this);}
function Ed(){}
function EQ(){B.call(this);}
var WQ=null;function TQ(){TQ=J(EQ);Ng();}
function Ng(){var $$je;WQ=$rt_createIntArray(Eh().data.length);a:{try{WQ.data[Bd(WE)]=1;break a;}catch($$e){$$je=Ba($$e);if($$je instanceof Bi){}else{throw $$e;}}}b:{try{WQ.data[Bd(WD)]=2;break b;}catch($$e){$$je=Ba($$e);if($$je instanceof Bi){}else{throw $$e;}}}c:{try{WQ.data[Bd(WC)]=3;break c;}catch($$e){$$je=Ba($$e);if($$je instanceof Bi){}else{throw $$e;}}}}
function In(){B.call(this);}
function PR(b){return b!==null?b.e():null;}
function LI(b){return b!==null?b.d():0;}
function Nu(b){return LI(b)?0:1;}
function Gk(){var a=this;B.call(a);a.cm=0;a.fm=0;a.fn=0;a.d0=0;a.bE=null;}
function TI(a){var b=new Gk();M7(b,a);return b;}
function M7(a,b){a.bE=b;D(a);a.fm=a.bE.ch;a.fn=a.bE.n();a.d0=(-1);}
function Lw(a){return a.cm>=a.fn?0:1;}
function Qf(a){var b,c;Ht(a);a.d0=a.cm;b=a.bE;c=a.cm;a.cm=c+1|0;return b.cO(c);}
function Ht(a){if(a.fm>=a.bE.ch)return;F(No());}
function O(){var a=this;B.call(a);a.X=null;a.K=null;a.O=null;}
function WY(){var a=new O();BB(a);return a;}
function BB(a){D(a);}
function Do(){N.call(this);}
function U8(){var a=new Do();Fw(a);return a;}
function Fw(a){Br(a);}
function Kb(){Do.call(this);}
function Te(){var a=new Kb();R6(a);return a;}
function R6(a){Fw(a);}
function H$(){B.call(this);}
function Tj(b){Ky(TM());}
function F3(){B.call(this);}
function Hl(b,c){if(b===null)F(T7());if(b===E($rt_voidcls()))F(Ha());if(c<0)F(Vi());return Rn(b.fI(),c);}
function Rn(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Ih(){B.call(this);}
function VK(){var a=new Ih();LX(a);return a;}
function LX(a){D(a);}
function Le(a){return Ff(a);}
function Ff(a){return S4();}
function Ec(){}
function EH(){}
function EX(){return Uv();}
function PT(a,b){if(!b.e7())a.cB(b.eS());else a.cJ(b.c$());}
function NP(a){return Vp(a);}
function Po(a,b){var c;c=EX();a.c0(Uo(b,c));return c;}
function L7(b,c,d){var e,f,g,$$je;if(!d.e7())c.cB(d.eS());else{try{e=b.f(d.c$());}catch($$e){$$je=Ba($$e);if($$je instanceof BN){g=$$je;f=E7();FI();f.iQ(WZ,C(46),g);c.cB(g);return;}else{throw $$e;}}e.c0(c.iA());}}
function Ia(){Bf.call(this);}
function H_(){var a=this;B.call(a);a.cu=0;a.cp=null;}
function Uf(a){var b=new H_();MS(b,a);return b;}
function MS(a,b){a.cp=b;D(a);}
function RL(a){return a.cu>=E8(a.cp).data.length?0:1;}
function MB(a){var b,c;if(a.cu==E8(a.cp).data.length)F(OW());b=E8(a.cp).data;c=a.cu;a.cu=c+1|0;return b[c];}
function G0(){var a=this;B.call(a);a.cD=Long_ZERO;a.cV=0;a.d$=0;}
function TD(){var a=new G0();Nq(a);return a;}
function Nq(a){D(a);}
function CK(){}
function Np(a,b,c){return a.hU(b).hg(TC(c));}
function P_(b,c){return c.hu(b);}
function HK(){B.call(this);}
function Bi(){Cd.call(this);}
function W0(a){var b=new Bi();NJ(b,a);return b;}
function NJ(a,b){EM(a,b);}
function Dn(){}
function Cu(){}
function B1(){B.call(this);}
function W1(){var a=new B1();EP(a);return a;}
function EP(a){D(a);}
function Qb(a){var b,c,d,e,f;b=L(B,a.n());c=0;d=a.t();while(d.x()){e=b.data;f=c+1|0;e[c]=d.s();c=f;}return b;}
function Pj(a,b){var c,d,e,f;c=b.data;d=a.n();e=c.length;if(e<d)b=Hl(Cv(b).fZ(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.t();while(f.x()){c=b.data;e=d+1|0;c[d]=f.s();d=e;}return b;}
function Nr(a){var b,c;b=I();b.c(C(47));c=a.t();if(c.x())b.c(Dg(c.s()));while(c.x()){b.c(C(48)).c(Dg(c.s()));}b.c(C(45));return b.e();}
function HM(){B.call(this);}
function K1(b,c){var d,e,f,g,h,i,j,k;if(!b)return C(24);d=1<<c;e=d-1|0;f=(((32-Gv(b)|0)+c|0)-1|0)/c|0;g=$rt_createCharArray(f);h=D2(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=Ck(b>>>h&e,d);h=h-c|0;i=k;}return Tf(g);}
function Fa(){S.call(this);this.iM=0;}
var W2=null;function Qc(){Qc=J(Fa);Nf();}
function VF(a){var b=new Fa();Hd(b,a);return b;}
function Hd(a,b){Qc();BX(a);a.iM=b;}
function FA(b){Qc();return VF(b);}
function Nf(){W2=E($rt_shortcls());}
function Fd(){}
function GT(){B.call(this);}
function VH(){var a=new GT();S$(a);return a;}
function S$(a){D(a);}
function Ky(b){J$(b,VH());b.iP();}
function RV(a,b){if(!(b instanceof BJ))self.postMessage(b);else self.postMessage($rt_ustr(b));}
function MI(a,b){var c,d,e,f,g;c=b.data;d=c.length;e=new Array();f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function St(a,b){self.onmessage=Cp(Tc(b),"handleEvent");}
function Mq(b,c){b.gL(c.data);}
function GK(){var a=this;B.call(a);a.c6=0;a.bx=0;a.c4=null;a.fB=null;a.fJ=null;}
function Uv(){var a=new GK();QB(a);return a;}
function QB(a){D(a);}
function K2(a){return a.fB;}
function Q4(a){return a.fJ;}
function M$(a){return a.bx;}
function LG(a){return !a.c6&&!a.bx?0:1;}
function PP(a,b){a.c4=b;Du(a);}
function SW(a,b){Eq(a);a.fB=b;a.bx=1;Du(a);}
function Ok(a,b){Eq(a);a.fJ=b;a.c6=1;Du(a);}
function Du(a){var b,$$je;a:{if(a.c4!==null&&a.it()){try{a.c4.cT(a);break a;}catch($$e){$$je=Ba($$e);if($$je instanceof BN){b=$$je;}else{throw $$e;}}b.iR();}}}
function Eq(a){var b,c,d;if(!a.bx&&!a.c6)return;b=new DT;c=!a.bx?C(49):C(50);d=I();R(R(d,C(51)),c);GR(b,Y(d));F(b);}
function Hu(){B.call(this);}
function Cp(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Di(){}
function PZ(a,b){return PR(a.iK(b));}
function CL(){}
function S9(a,b){return a.W(a.cK(b));}
function E3(){}
function CO(){}
function Df(){}
function Qp(a){return VY();}
function KO(a,b){if(b!==null&&!Be(b,CA))return Vv(b);return b;}
function P8(a,b){if(b!==null&&!Be(b,CO))return U9(b);return b;}
function Sf(a,b){if(b===null){T();return Wz;}if(!Be(b,BQ)&&!Be(b,Cs)){if(!Be(b,B3)&&!Be(b,CL)){if(b instanceof BD){T();return WC;}if(b instanceof BJ){T();return WE;}if(!JB(b)){T();return WP;}T();return WC;}T();return WB;}T();return WA;}
function C1(){B.call(this);}
function W3(a){var b=new C1();F6(b,a);return b;}
function F6(a,b){D(a);a.ht(b);}
function So(a,b){return a.fh().cO(b);}
function KK(a){return a.fh().n();}
function Kv(){C1.call(this);this.fb=null;}
function U9(a){var b=new Kv();Q6(b,a);return b;}
function Q6(a,b){F6(a,b);}
function SV(a){return a.fb;}
function O2(a,b){a.fb=b;}
function Hh(){B.call(this);this.fH=null;}
function Tl(a){var b=new Hh();P$(b,a);return b;}
function P$(a,b){D(a);a.fH=b;}
function G6(a){return Uf(a);}
function F4(b){return Tl(Lj(b.fI()));}
function Lj(b){if (!Hh.$$services$$) {Hh.$$services$$ = true;CG.$$serviceList$$ = [[EN, SG]];CK.$$serviceList$$ = [[Ey, Oe]];}var cls = b;if (!cls.$$serviceList$$) {return $rt_createArray($rt_objcls(), 0);}var result = $rt_createArray($rt_objcls(), cls.$$serviceList$$.length);for (var i = 0; i < result.data.length; ++i) {var serviceDesc = cls.$$serviceList$$[i];result.data[i] = new serviceDesc[0]();serviceDesc[1](result.data[i]);}return result;}
function E8(b){return b.fH;}
function He(){B.call(this);}
function Os(b){var c,d,e,f;c=Uz(b.iS());d=FT(c);e=$rt_createIntArray(d);f=0;while(f<d){e.data[f]=FT(c);f=f+1|0;}return e;}
function CR(){var a=this;B.call(a);a.gG=null;a.dn=null;a.gQ=0.0;a.dQ=0.0;a.c3=null;a.dF=null;a.br=0;}
function W4(a,b,c,d){var e=new CR();Jz(e,a,b,c,d);return e;}
function W5(a,b,c){var d=new CR();I1(d,a,b,c);return d;}
function Jz(a,b,c,d,e){D(a);ER();a.c3=W6;a.dF=W6;Ju(a,e);a.gG=b;a.dn=e.dK();a.gQ=c;a.dQ=d;}
function I1(a,b,c,d){var e;e=$rt_createByteArray(1);e.data[0]=63;Jz(a,b,c,d,e);}
function Ju(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.dQ)return;}F(B2(C(52)));}
function Fg(a,b){if(b!==null){a.c3=b;a.ii(b);return a;}F(B2(C(53)));}
function Sa(a,b){return;}
function Jv(a,b){if(b!==null){a.dF=b;a.hE(b);return a;}F(B2(C(53)));}
function Rx(a,b){return;}
function GJ(a,b,c,d){var e,f,g,h,$$je;a:{if(a.br!=3){if(d)break a;if(a.br!=2)break a;}F(M0());}a.br=!d?1:2;while(true){try{e=a.g7(b,c);}catch($$e){$$je=Ba($$e);if($$je instanceof N){f=$$je;F(Uu(f));}else{throw $$e;}}if(e.f9()){if(!d)return e;g=Bw(b);if(g<=0)return e;e=C5(g);}else if(e.cR())break;h=!e.fw()?a.c3:a.dF;b:{ER();if(h!==W7){if(h===W8)break b;else return e;}if(Bw(c)<a.dn.data.length)return W9;IO(c,a.dn);}b.em(Ct(b)+e.d()|0);}return e;}
function FE(a,b){var c;if(a.br!=2&&a.br!=4)F(M0());c=a.gp(b);Bt();if(c===W$)a.br=3;return c;}
function KS(a,b){Bt();return W$;}
function E0(){}
function CA(){}
function PK(a,b,c){return a.d2(b,a.gB(c));}
function EN(){B9.call(this);}
function W_(){var a=new EN();SG(a);return a;}
function Vj(a){var b=new EN();GP(b,a);return b;}
function LT(b){if(b!==null&&!(typeof b==='undefined'?1:0))return Vj(b);return null;}
function SG(a){GP(a,Is());}
function GP(a,b){DY(a,b);}
function Go(a,b){return a.bn[$rt_ustr(b)]||null;}
function Hk(a){return JJ(MM(a.bn));}
function Kn(a,b,c){var d,e;d=a.bn;e=c;d[$rt_ustr(b)]=e;return a;}
function On(a){return Jj(a);}
function OT(a,b){return HJ(a,b);}
function Nc(a,b){return Ko(a,b);}
function Mc(a,b){return IM(a,b);}
function Ou(a,b){return J5(a,b);}
function LP(a){return GO(a);}
function Mw(a,b){return GU(a,b);}
function LH(a){return F9(a);}
function SB(a,b,c){return Kn(a,b,c);}
function KN(a,b){return Go(a,b);}
function Rs(a){return Hk(a);}
function ED(){}
function JQ(){B.call(this);this.fj=null;}
function Tc(a){var b=new JQ();Lv(b,a);return b;}
function Lv(a,b){D(a);a.fj=b;}
function N_(a,b){H9(a,b);}
function H9(a,b){Mq(a.fj,b);}
function Nw(a,b){a.h5(b);}
function BG(){B.call(this);}
var Xa=null;var Xb=null;var Xc=null;var Xd=null;var Xe=null;var Xf=null;function Ew(){Ew=J(BG);Sk();}
function JB(b){Ew();return b instanceof S;}
function Jb(b){Ew();return b===null?null:b instanceof B$?b:!(b instanceof S)?null:X(b.I());}
function II(b){var c,$$je;Ew();if(b===null)return null;a:{try{c=X(Er(b));}catch($$e){$$je=Ba($$e);if($$je instanceof D$){break a;}else{throw $$e;}}return c;}return null;}
function DN(b){var c;Ew();c=Jb(b);if(c===null&&b!==null)return II(b.e());return c;}
function Sk(){Xa=JR(0);Xb=FA(0);Xc=X(0);Xd=DW(Long_ZERO);Xe=J9(0.0);Xf=Bk(0.0);}
function Dd(){var a=this;Ce.call(a);a.fC=0;a.eg=null;a.i1=null;}
function Xg(a,b,c,d,e){var f=new Dd();Gm(f,a,b,c,d,e);return f;}
function Gm(a,b,c,d,e,f){EB(a,c);R1();a.i1=Ww;a.fC=b;a.eg=d;a.v=e;a.T=f;}
function RR(b,c,d){return UW(0,b.data.length,b,c,c+d|0,0,0);}
function O1(b){return RR(b,0,b.data.length);}
function QX(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.ge())F(Te());if(Bw(a)<d)F(Ud());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)F(B8(I().c(C(54)).r(g).c(C(55)).r(f).e()));if(d<0)F(B8(I().c(C(56)).r(d).c(C(57)).e()));h=a.v+a.fC|0;i=0;while(i<d){j=a.eg.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.v=a.v+d|0;return a;}}e=b.data;F(B8(I().c(C(58)).r(c).c(C(44)).r(e.length).c(C(59)).e()));}
function IO(a,b){return a.e3(b,0,b.data.length);}
function D_(a){Hg(a);return a;}
function Ji(){var a=this;Dd.call(a);a.gf=0;a.d1=0;}
function UW(a,b,c,d,e,f,g){var h=new Ji();Lo(h,a,b,c,d,e,f,g);return h;}
function Lo(a,b,c,d,e,f,g,h){Gm(a,b,c,d,e,f);a.gf=g;a.d1=h;}
function QH(a){return a.d1;}
function Bx(){var a=this;B.call(a);a.Y=null;a.bg=null;}
function Xh(){var a=new Bx();CD(a);return a;}
function CD(a){D(a);}
function ID(){CV.call(this);}
function Vy(a,b){var c=new ID();LZ(c,a,b);return c;}
function LZ(a,b,c){Kd(a,b,c);}
function Ry(a,b){var c,d,e,f,g;c=$rt_createByteArray(b);d=0;while(d<b){e=c.data;f=a.d7;g=a.dz;a.dz=g+1|0;e[d]=f[g];d=d+1|0;}return c;}
function I7(){B.call(this);this.fz=null;}
function Uc(a){var b=new I7();R7(b,a);return b;}
function R7(a,b){D(a);a.fz=b;}
function QK(a,b){Lp(a.fz,b);}
function Mh(a,b){a.dr(b);}
function DC(){}
function I6(){B.call(this);this.e0=null;}
function VB(a){var b=new I6();Sm(b,a);return b;}
function Sm(a,b){D(a);a.e0=b;}
function K9(a,b){Iz(a.e0,b);}
function Mb(a,b){a.h$(b);}
function ET(){}
function I5(){B.call(this);this.et=null;}
function UD(a){var b=new I5();ME(b,a);return b;}
function ME(a,b){D(a);a.et=b;}
function Rt(a,b,c){S1(a.et,b,c);}
function LY(a,b,c){a.iq(b,c);}
function Bo(){var a=this;B.call(a);a.id=null;a.fF=0;}
var Xi=null;var WZ=null;var WK=null;var Xj=null;var Xk=null;var Xl=null;var Xm=null;var Xn=null;var Xo=null;function FI(){FI=J(Bo);Pl();}
function BO(a,b){var c=new Bo();JL(c,a,b);return c;}
function JL(a,b,c){FI();D(a);a.id=b;a.fF=c;}
function CM(a){return a.fF;}
function Pl(){Xi=BO(C(60),2147483647);WZ=BO(C(61),1000);WK=BO(C(62),900);Xj=BO(C(63),800);Xk=BO(C(64),700);Xl=BO(C(65),500);Xm=BO(C(66),400);Xn=BO(C(67),300);Xo=BO(C(68),(-2147483648));}
function Hf(){B.call(this);}
function K0(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function OQ(b){return IG(String.fromCharCode(b));}
function R4(b){return b.$meta.item;}
function O7(b){return $rt_str(b.$meta.name);}
function C0(){var a=this;B.call(a);a.gd=null;a.h4=null;}
function Xp(a,b){var c=new C0();Hn(c,a,b);return c;}
function Hn(a,b,c){var d,e,f,g;d=c.data;D(a);HG(b);e=d.length;f=0;while(f<e){g=d[f];HG(g);f=f+1|0;}a.gd=b;a.h4=c.dK();}
function HG(b){var c,d;if(b.b8())F(IL(b));if(!HH(b.l(0)))F(IL(b));c=1;while(c<b.d()){a:{d=b.l(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(HH(d))break a;else F(IL(b));}}c=c+1|0;}}
function HH(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function CC(){B.call(this);this.h1=null;}
var W8=null;var W7=null;var W6=null;function ER(){ER=J(CC);KR();}
function Jt(a){var b=new CC();Hx(b,a);return b;}
function Hx(a,b){ER();D(a);a.h1=b;}
function KR(){W8=Jt(C(69));W7=Jt(C(70));W6=Jt(C(71));}
function BD(){B.call(this);this.bU=0;}
var WH=null;var Xq=null;var Xr=null;function DP(){DP=J(BD);MY();}
function Nl(a){var b=new BD();Hc(b,a);return b;}
function Hc(a,b){DP();D(a);a.bU=b;}
function QC(a){return a.bU;}
function Cy(b){DP();return !b?Xq:WH;}
function Ii(b){DP();return !b?C(72):C(73);}
function Me(a){return Ii(a.bU);}
function LM(a,b){if(a===b)return 1;return b instanceof BD&&b.bU==a.bU?1:0;}
function MY(){WH=Nl(1);Xq=Nl(0);Xr=E($rt_booleancls());}
function B_(){N.call(this);}
function Ha(){var a=new B_();Ee(a);return a;}
function B2(a){var b=new B_();Kr(b,a);return b;}
function Ee(a){Br(a);}
function Kr(a,b){ES(a,b);}
function HL(){B_.call(this);this.gS=null;}
function IL(a){var b=new HL();PU(b,a);return b;}
function PU(a,b){Ee(a);a.gS=b;}
function Km(){N.call(this);}
function OW(){var a=new Km();Lg(a);return a;}
function Lg(a){Br(a);}
function JU(){B.call(this);this.fp=null;}
function Tt(a){var b=new JU();KY(b,a);return b;}
function KY(a,b){D(a);a.fp=b;}
function NC(a,b){LA(a.fp,b);}
function Mo(a,b){a.dr(b);}
function Ci(){}
function K6(b){return Us(b);}
function SL(b,c,d){return Ki(b.fW(c),b.fW(d));}
function Fu(){B.call(this);this.ft=null;}
function Us(a){var b=new Fu();Pr(b,a);return b;}
function Pr(a,b){D(a);a.ft=b;}
function Qy(a,b,c){return SL(a.ft,b,c);}
function Ir(){B.call(this);}
function NV(b){return $rt_str(b);}
function E5(){}
function DV(){}
function BM(){B.call(this);}
function Xs(){var a=new BM();CQ(a);return a;}
function CQ(a){D(a);}
function Ln(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.d8(f[c]);e=e+1|0;c=g;}}
function C2(){BM.call(this);this.dN=null;}
function Xt(a){var b=new C2();FK(b,a);return b;}
function FK(a,b){CQ(a);a.dN=b;}
function IX(){var a=this;C2.call(a);a.g8=0;a.dx=0;a.M=null;a.bK=null;a.eD=null;}
function LC(a,b){var c=new IX();Qx(c,a,b);return c;}
function Qx(a,b,c){FK(a,b);a.M=I();a.bK=$rt_createCharArray(32);a.g8=c;a.eD=Vl();}
function L9(a,b,c,d){var $$je;if(!H6(a))return;a:{try{a.dN.cd(b,c,d);break a;}catch($$e){$$je=Ba($$e);if($$je instanceof Ef){}else{throw $$e;}}a.dx=1;}}
function H6(a){if(a.dN===null)a.dx=1;return a.dx?0:1;}
function Ea(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=Sn(b,c,d-c|0);g=$rt_createByteArray(BY(16,Bh(e.length,1024)));h=O1(g);i=a.eD.hP();ER();j=W7;i=Fg(i,j);j=W7;k=Jv(i,j);while(true){l=GJ(k,f,h,1).cR();a.cd(g,0,Ct(h));D_(h);if(!l)break;}while(true){l=FE(k,h).cR();a.cd(g,0,Ct(h));D_(h);if(!l)break;}}
function OU(a,b){a.bK.data[0]=b;Ea(a,a.bK,0,1);}
function RU(a,b){a.M.c(b);C3(a);}
function NQ(a,b){a.M.c(b).q(10);C3(a);}
function Sj(a,b){a.M.di(b).q(10);C3(a);}
function Oa(a){a.hc(10);}
function C3(a){var b;b=a.M.d()<=a.bK.data.length?a.bK:$rt_createCharArray(a.M.d());a.M.ee(0,a.M.d(),b,0);Ea(a,b,0,a.M.d());a.M.d3(0);}
function Cj(){var a=this;B.call(a);a.gU=null;a.eM=0;}
function Xu(a,b){var c=new Cj();EO(c,a,b);return c;}
function EO(a,b,c){D(a);a.gU=b;a.eM=c;}
function Bd(a){return a.eM;}
function Bl(){Cj.call(this);}
var WE=null;var WC=null;var WD=null;var WA=null;var WB=null;var Wz=null;var WP=null;var Xv=null;function T(){T=J(Bl);Kz();}
function Cl(a,b){var c=new Bl();Iu(c,a,b);return c;}
function Eh(){T();return Xv.dK();}
function Iu(a,b,c){T();EO(a,b,c);}
function F1(){var b,c;T();b=L(Bl,7);c=b.data;c[0]=WE;c[1]=WC;c[2]=WD;c[3]=WA;c[4]=WB;c[5]=Wz;c[6]=WP;return b;}
function Kz(){WE=Cl(C(74),0);WC=Cl(C(75),1);WD=Cl(C(76),2);WA=Cl(C(77),3);WB=Cl(C(78),4);Wz=Cl(C(79),5);WP=Cl(C(80),6);Xv=F1();}
function En(){}
function BL(){B1.call(this);}
function Xw(){var a=new BL();Da(a);return a;}
function Da(a){EP(a);}
function Db(){BL.call(this);this.fT=null;}
function Xx(a){var b=new Db();Hw(b,a);return b;}
function Hw(a,b){Da(a);a.fT=b;}
function N7(a){return a.fT;}
function H5(){Db.call(this);}
function Uj(a){var b=new H5();Ob(b,a);return b;}
function Ob(a,b){Hw(a,b);}
function Qj(a){return Vx(a.gq());}
function Bp(){B.call(this);}
var Xy=0;var Xz=0;var XA=null;var XB=null;var XC=null;var XD=null;var XE=null;var XF=null;function Bg(){Bg=J(Bp);NR();}
function NR(){var b,c;Xy=0;Xz=0;b=L(Bn,4);c=b.data;BE();c[0]=XG;c[1]=XH;c[2]=XI;c[3]=XJ;XK=b;XA=VU();XE=TU();XB=VL();XC=S_();XD=VD();b=L(BA,1);b.data[0]=XB;XF=b;}
function DQ(){}
function IT(){var a=this;B.call(a);a.db=null;a.ck=null;}
function Ue(a){var b=new IT();Pt(b,a);return b;}
function Pt(a,b){var c;D(a);a.ck=b;c=a;b.classObject=c;}
function Gj(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=Ue(b);return c;}
function MT(a){return a.ck;}
function SC(a){if(a.db===null)a.db=O7(a.ck);return a.db;}
function KQ(a){return Gj(R4(a.ck));}
function J6(){Bf.call(this);}
function Jc(){var a=this;B.call(a);a.B=0.0;a.C=0.0;a.D=0.0;}
function Cb(a,b,c){var d=new Jc();N3(d,a,b,c);return d;}
function N3(a,b,c,d){D(a);a.B=b;a.C=c;a.D=d;}
function K(b,c,d){return Cb(b,c,d);}
function Bv(b){var c,d;c=Iw(b);d=c===0.0?Infinity:1.0/c;return Z(d,b);}
function Z(b,c){return Cb(c.B*b,c.C*b,c.D*b);}
function BT(b,c){return Cb(b.B-c.B,b.C-c.C,b.D-c.D);}
function Cr(b,c){return Cb(b.B+c.B,b.C+c.C,b.D+c.D);}
function Bq(b,c){return b.B*c.B+b.C*c.C+b.D*c.D;}
function C4(b,c){return Cb(b.C*c.D-b.D*c.C,b.D*c.B-b.B*c.D,b.B*c.C-b.C*c.B);}
function Iw(b){return E6(Bq(b,b));}
function BZ(){S.call(this);this.cI=0.0;}
var XL=0.0;var XM=null;function H3(){H3=J(BZ);Nd();}
function Vu(a){var b=new BZ();D5(b,a);return b;}
function T5(a){var b=new BZ();IE(b,a);return b;}
function D5(a,b){H3();BX(a);a.cI=b;}
function IE(a,b){H3();D5(a,b);}
function J9(b){H3();return Vu(b);}
function LR(a,b){if(a===b)return 1;return b instanceof BZ&&b.cI===a.cI?1:0;}
function Nd(){XL=NaN;XM=E($rt_floatcls());}
function GH(){B.call(this);}
function Ml(b,c){var d,e,f,g;d=b.data;e=$rt_createCharArray(c);f=Bh(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function RF(b,c){var d,e,f,g;d=b.data;e=Hl(Cv(b).fZ(),c);f=Bh(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Pf(b,c){var d,e,f,g,h,i,j,k,l,m;d=b.data.length;if(!d)return;e=L(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data.length;if(h>=i)break;j=Bh(i,h+f|0);k=h+(2*f|0)|0;l=Bh(i,k);Sb(g,e,h,j,l,c);h=k;}f=f*2|0;m=g;g=e;e=m;}a:{if(g!==b){h=0;while(true){m=g.data;if(h>=m.length)break a;e.data[h]=m[h];h=h+1|0;}}}}
function Sb(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=d;i=e;a:{b:{while(d!=e){if(i==f)break b;j=b.data;k=j[d];l=j[i];if(g.fx(k,l)>0){j=c.data;m=h+1|0;j[h]=l;i=i+1|0;}else{j=c.data;m=h+1|0;j[h]=k;d=d+1|0;}h=m;}while(true){if(i>=f)break a;n=c.data;j=b.data;m=h+1|0;o=i+1|0;n[h]=j[i];h=m;i=o;}}while(true){if(d>=e)break a;n=c.data;j=b.data;o=h+1|0;m=d+1|0;n[h]=j[d];h=o;d=m;}}}
function LW(b,c){return MU(b,0,b.data.length,c);}
function MU(b,c,d,e){var f,g,h,i;if(c>d)F(Ha());f=d-1|0;while(true){g=b.data;h=(c+f|0)/2|0;i=g[h];if(i==e)break;if(e>=i){c=h+1|0;if(c>f)return  -h-2|0;}else{f=h-1|0;if(f<c)return  -h-1|0;}}return h;}
function LF(b){return Ts(b);}
function JI(){BM.call(this);}
function Va(){var a=new JI();Ld(a);return a;}
function Ld(a){CQ(a);}
function KU(a,b){$rt_putStdout(b);}
function C7(){B.call(this);}
var XN=null;var XO=null;function Hb(){if(XN===null)XN=LC(Va(),0);return XN;}
function O0(){if(XO===null)XO=LC(UZ(),0);return XO;}
function H7(){return Long_fromNumber(new Date().getTime());}
function D8(){B.call(this);}
var XP=null;function Gb(){return Dr().hl();}
function NM(b){return Dr().bV(b);}
function MP(b){return Dr().c1(b);}
function Rc(b){return Dr().W(b);}
function R8(b){XP=b;}
function Dr(){var b;if(XP===null){b=U2();Ds();R8(EW(E(CG),b,XQ));if(XP===null){Hb().eX(C(81));XP=Uq();}}return XP;}
function KE(){return F4(E(CG));}
function I$(){Ca.call(this);}
function VN(a){var b=new I$();Rf(b,a);return b;}
function Rf(a,b){DM(a,b);}
function RP(a){E1(a);return a.dk.V;}
function H0(){BL.call(this);}
function VJ(){var a=new H0();PC(a);return a;}
function PC(a){Da(a);}
function HZ(){B5.call(this);}
function UU(){var a=new HZ();PI(a);return a;}
function PI(a){Es(a);}
function B3(){}
function OL(a,b){G2(a,b);}
function BF(){B1.call(this);this.ch=0;}
function XR(){var a=new BF();Dv(a);return a;}
function Dv(a){EP(a);}
function Pp(a){return TI(a);}
function H1(){BF.call(this);}
function VE(){var a=new H1();L4(a);return a;}
function L4(a){Dv(a);}
function BH(){B.call(this);}
var XS=null;var XT=null;var XU=null;var XV=null;function Bc(){Bc=J(BH);L2();}
function D4(b){Bc();return (b&64512)!=55296?0:1;}
function DZ(b){Bc();return (b&64512)!=56320?0:1;}
function JA(b){Bc();return !D4(b)&&!DZ(b)?0:1;}
function Ja(b,c){Bc();return ((b&1023)<<10|c&1023)+65536|0;}
function Fb(b){var c;Bc();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function EL(b){Bc();return (56320|b&1023)&65535;}
function EE(b){Bc();return Fy(b)&65535;}
function Fy(b){Bc();return OQ(b).toLowerCase().charCodeAt(0);}
function Fh(b){Bc();return Hp(b);}
function Hp(b){var c,d,e,f,g,h,i,j;Bc();c=FC();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=CY(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function Ck(b,c){Bc();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function FC(){Bc();if(XT===null)XT=Os((Fv().value!==null?$rt_str(Fv().value):null));return XT;}
function Fv(){Bc();if(XV===null)XV=Jr();return XV;}
function L2(){XS=E($rt_charcls());XU=L(BH,128);}
function Jr(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function Ey(){B.call(this);}
var XW=null;function XX(){var a=new Ey();Oe(a);return a;}
function Oe(a){D(a);}
function MJ(a){if(XW===null)XW=Cy(PF()?1:0);return XW.e2();}
function Qw(a,b){var c,d;c=EX();d=Tt(c);Om($rt_ustr(b),Cp(d,"handle"));return c;}
function LA(b,c){b.cJ(To(c));}
function PF(){{try {if(typeof WebAssembly==="object"&&typeof WebAssembly.instantiate==="function"){const module=new WebAssembly.Module(Uint8Array.of(0x0,0x61,0x73,0x6d,0x01,0x00,0x00,0x00));if(module instanceof WebAssembly.Module)return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;}}catch(e){}return false;}}
function Om(b,c){((fetch(b)).then(function(response){return WebAssembly.compileStreaming(response);})).then(function(module){return c(module);});}
function Im(){B.call(this);}
function PV(b,c,d,e,f){var g,h;g=CY(e,f);if(!g){g=e;e=f;}else if(g>=0){c=c+0.5*(e-f|0);g=e;}else{b=b+0.5*(f-e|0);g=f;e=f;}h=Sh(b,c,d.bo,g,e);return EU(UF(d,h),d,0);}
function EU(b,c,d){var e,f;e=Jn(b,c);f=null;if(e.t().x())f=e.t().s();if(f!==null)return OV(f,c,d);Cn();return XY;}
function Jn(b,c){var d,e,f,g,h,i,j,k;d=TR();e=c.b9.data;f=e.length;g=0;while(g<f){h=e[g];i=h.eF(b);if(i!==null)d.b6(i);g=g+1|0;}d.gt(K6(Tw()));j=L(B0,d.eQ().data.length);k=0;while(true){e=j.data;if(k>=e.length)break;e[k]=d.eQ().data[k];k=k+1|0;}i=LF(j);return i;}
function Rd(b,c){var d,e;d=Jn(b,c);e=null;if(d.t().x())e=d.t().s();if(e!==null)return e.bP;return 0.0;}
function OV(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=b.bL.Y;f=Cr(Z(b.bP,b.bL.Y),b.bL.bg);g=b.F.eN(f);h=BT(e,Z(2.0*Bq(g,e),g));i=b.F.j.R;j=i.f(f).bm()*Bq(g,e);i=b.F.j.R;j=j-E6(1.0-CP(i.f(f).bm(),2.0)*(1.0-CP(Bq(g,e),2.0)));i=Z(j,g);k=b.F.j.R;k=Z(k.f(f).bm(),e);l=BT(i,k);Cn();m=XY;i=Cc(m,Mp(b.F,f,g,h,c));if(d>=4)return i;n=Sx(b.F,Cr(f,Z(0.001,h)),h,c,d);o=Ps(b.F,Cr(g,Z(0.001,l)),l,c,d);k=BU(1.0-b.F.j.bp,n);p=BU(b.F.j.bp,o);return Cc(i,Cc(k,p));}
function Sx(b,c,d,e,f){return BU(b.j.bG.f(c).bm(),EU(Th(c,d),e,f+1|0));}
function Ps(b,c,d,e,f){return BU(b.j.R.f(c).bm(),EU(Vg(c,d),e,f+1|0));}
function Mp(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;g=M(0.0,0.0,0.0);h=f.b0.data;i=h.length;j=0;while(j<i){k=h[j];l=BT(k.O,c);m=Bv(l);n=Rd(Ur(c,m),f);o=n<=Iw(l)&&n!==0.0?0:1;if(o){p=Bq(m,d);q=p>0.0?BU(p,k.K):M(0.0,0.0,0.0);r=Bq(m,Bv(e));s=r<=0.0?M(0.0,0.0,0.0):BU(CP(r,b.j.bB),k.K);g=Cc(g,Cc(DU(b.j.bT.f(c),q),DU(b.j.bC.f(c),s)));}j=j+1|0;}return g;}
function Sh(b,c,d,e,f){return Bv(Cr(d.de,Cr(Z(OX(b,e),d.dA),Z(Lh(c,f),d.cG))));}
function OX(b,c){var d;d=c;return (b-d/2.0)/(2.0*d);}
function Lh(b,c){var d;d=c;return  -(b-d/2.0)/(2.0*d);}
function O8(b){return b.bP;}
function Gi(){B.call(this);}
function S8(b){return b;}
function I8(){O.call(this);this.hS=null;}
function Vo(a){var b=new I8();MD(b,a);return b;}
function MD(a,b){a.hS=b;BB(a);a.K=M(1.0,1.0,1.0);a.O=K(0.0,1.0,0.0);a.X=C(82);}
function HS(){Q.call(this);this.h7=null;}
function TJ(a){var b=new HS();PQ(b,a);return b;}
function PQ(a,b){a.h7=b;Bz(a);BE();a.j=XI;a.L=K(0.0,1.0,0.0);a.N=1.0;a.P=C(83);}
function CZ(){Ce.call(this);}
function XZ(a,b,c){var d=new CZ();Fs(d,a,b,c);return d;}
function Fs(a,b,c,d){EB(a,b);a.v=c;a.T=d;}
function Sn(b,c,d){return T_(0,b.data.length,b,c,c+d|0,0);}
function L8(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)F(B8(I().c(C(84)).r(g).c(C(55)).r(f).e()));if(Bw(a)<d)F(Vs());if(d<0)F(B8(I().c(C(56)).r(d).c(C(57)).e()));h=a.v;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.iw(h);i=i+1|0;c=g;h=f;}a.v=a.v+d|0;return a;}}e=b.data;F(B8(I().c(C(58)).r(c).c(C(44)).r(e.length).c(C(59)).e()));}
function KC(a,b){IQ(a,b);return a;}
function Dk(){CZ.call(this);}
function X0(a,b,c){var d=new Dk();Hy(d,a,b,c);return d;}
function Hy(a,b,c,d){Fs(a,b,c,d);}
function Jy(){var a=this;Dk.call(a);a.iI=0;a.e8=0;a.fX=null;}
function T_(a,b,c,d,e,f){var g=new Jy();SX(g,a,b,c,d,e,f);return g;}
function SX(a,b,c,d,e,f,g){Hy(a,c,e,f);a.e8=b;a.iI=g;a.fX=d;}
function Mr(a,b){return a.fX.data[b+a.e8|0];}
function FV(){B.call(this);}
function Oj(b){var c,d,e,f;c=b.data;d=c.length;e=0;while(true){if(e>=d)return null;f=c[e];if(f!==null)break;e=e+1|0;}return f;}
function JS(){Bn.call(this);}
function VC(){var a=new JS();M_(a);return a;}
function M_(a){Cz(a);a.cj=C(85);a.R=U5();a.bG=UL();a.bT=T8();a.bC=Vz();a.bB=100.0;a.bp=0.95;}
function OK(b){return M(0.5,0.5,0.5);}
function RO(b){return M(0.0,0.0,0.0);}
function PG(b){return Bk(0.0);}
function Oo(b){return Bk(1.0);}
function DJ(){}
function Ke(){B.call(this);}
function U2(){var a=new Ke();LO(a);return a;}
function LO(a){D(a);}
function Sv(a){return JE(a);}
function JE(a){return KE();}
function HC(){B.call(this);}
function QM(b){if(!(b instanceof BD))return null;return b;}
function OE(b){if(b===null)return null;if(b.ec(C(73)))return Cy(1);if(!b.ec(C(72)))return null;return Cy(0);}
function Lx(b){var c;c=QM(b);if(c===null&&b!==null)return OE(b.e());return c;}
function JV(){Bn.call(this);}
function VV(){var a=new JV();PA(a);return a;}
function PA(a){Cz(a);a.cj=C(86);a.R=Vm();a.bG=Tm();a.bT=Tn();a.bC=T9();a.bB=15.0;a.bp=0.0;}
function Ls(b){return M(0.5,0.5,0.5);}
function LD(b){return M(0.25,0.25,0.25);}
function Qr(b){return Bk(0.65);}
function Nj(b){return Bk(0.0);}
function Ib(){B.call(this);}
function GQ(b){var c,d,e;c=U1(b.n());d=b.t();while(d.x()){e=d.s();if(Be(e,BQ))c.b6(EG(e));else if(!Be(e,B3))c.b6(e);else c.b6(GQ(e));}return c;}
function EG(b){var c,d,e,f,g,h;c=TZ(b.n());d=b.iJ().t();while(d.x()){e=d.s();f=e.gZ();if(Be(f,BQ)){g=f;c.bd(e.dv(),EG(g));}else if(!Be(f,B3))c.bd(e.dv(),f);else{h=f;c.bd(e.dv(),GQ(h));}}return c;}
function JT(){Bn.call(this);}
function UG(){var a=new JT();P0(a);return a;}
function P0(a){Cz(a);a.cj=C(87);a.R=VI();a.bG=Ua();a.bT=VA();a.bC=UB();a.bB=25.0;a.bp=0.1;}
function Rb(b){return M(0.75,0.75,0.75);}
function M8(b){return M(1.0,1.0,1.0);}
function Qd(b){return Bk(1.0);}
function RS(b){return Bk(0.0);}
function Gf(){B.call(this);}
function Vm(){var a=new Gf();RD(a);return a;}
function RD(a){D(a);}
function K5(a,b){return Kg(a,b);}
function Kg(a,b){return Nj(b);}
function IC(){B.call(this);}
function M5(b){return b?1:0;}
function JW(){Bn.call(this);}
function Uw(){var a=new JW();RZ(a);return a;}
function RZ(a){Cz(a);a.cj=C(88);a.R=UY();a.bG=UX();a.bT=TV();a.bC=Tx();a.bB=0.0;a.bp=0.1;}
function O4(b){return M(0.25,0.25,0.25);}
function Pv(b){return M(0.25,0.25,0.25);}
function QF(b){return Bk(0.25);}
function Qo(b){return Bk(0.0);}
function Ge(){B.call(this);}
function T9(){var a=new Ge();Ot(a);return a;}
function Ot(a){D(a);}
function Pu(a,b){return Fp(a,b);}
function Fp(a,b){return Ls(b);}
function Gg(){B.call(this);}
function Tm(){var a=new Gg();KW(a);return a;}
function KW(a){D(a);}
function Qz(a,b){return FD(a,b);}
function FD(a,b){return Qr(b);}
function Gd(){B.call(this);}
function Tn(){var a=new Gd();SF(a);return a;}
function SF(a){D(a);}
function SY(a,b){return Hm(a,b);}
function Hm(a,b){return LD(b);}
function BA(){var a=this;B.call(a);a.b9=null;a.bo=null;a.b0=null;}
function X1(){var a=new BA();DA(a);return a;}
function DA(a){D(a);}
function BV(){S.call(this);this.U=0.0;}
var X2=0.0;var X3=null;function EF(){EF=J(BV);N2();}
function Og(a){var b=new BV();I4(b,a);return b;}
function I4(a,b){EF();BX(a);a.U=b;}
function SQ(a){return a.U;}
function N5(a){return a.U|0;}
function Bk(b){EF();return Og(b);}
function FG(b){EF();return I().hv(b).e();}
function L_(a){return FG(a.U);}
function S6(a,b){if(a===b)return 1;return b instanceof BV&&b.U===a.U?1:0;}
function Ki(b,c){EF();return CY(b,c);}
function L0(a){return isNaN(a.U)?1:0;}
function NH(a){return !isFinite(a.U)?1:0;}
function N2(){X2=NaN;X3=E($rt_doublecls());}
function Co(){B.call(this);}
var X4=0;var X5=0;var X6=null;function Rq(b,c){var d;d=3*b|0;if(c!==null&&c.data.length==d)return c;return $rt_createByteArray(d);}
function KD(b,c,d,e){var f,g,h,i,j,k,l;X4=b;X5=c;Bg();X6=XF.data[d];f=e*0.005;g=0.55+f*6.0*2.0*3.141592653589793;h=1.55;i=2.55;j=f-0.2;if(j>0.0){h=h+20.0*Jk(1.0,j);i=i+20.0*IF(Jk(1.0,j)*3.141592653589793/2.0);}k=i*Ma(g);l=i*IF(g);X6.bo=Kt(K(0.0,1.0,0.0),K(k,h,l));}
function Kw(b,c){var d,e;d=0;e=0;while(e<X4){d=M6(e,b,c,d);e=e+1|0;}}
function M6(b,c,d,e){var f,g,h,i;f=d.data;g=PV(b,c,X6,X4,X5);h=e+1|0;f[e]=(g.cM(g.bc)*255.0+(-128.0)|0)<<24>>24;i=h+1|0;f[h]=(g.cM(g.bb)*255.0+(-128.0)|0)<<24>>24;h=i+1|0;f[i]=(g.cM(g.ba)*255.0+(-128.0)|0)<<24>>24;return h;}
function JO(){BL.call(this);this.da=null;}
function Ty(a){var b=new JO();Oq(b,a);return b;}
function Oq(a,b){a.da=b;Da(a);}
function RG(a){return a.da.n();}
function Rr(a){return VN(a.da);}
function If(){var a=this;B0.call(a);a.eW=null;a.eb=null;a.eG=0.0;a.iU=null;}
function Vd(a,b,c,d){var e=new If();L3(e,a,b,c,d);return e;}
function L3(a,b,c,d,e){a.iU=b;a.eW=c;a.eb=d;a.eG=e;DE(a);a.F=a.eW;a.bL=a.eb;a.bP=a.eG;}
function C6(){}
function GM(){var a=this;BF.call(a);a.w=null;a.bt=0;}
function TR(){var a=new GM();PY(a);return a;}
function U1(a){var b=new GM();DH(b,a);return b;}
function Vn(a){var b=new GM();Oc(b,a);return b;}
function PY(a){DH(a,10);}
function DH(a,b){Dv(a);a.w=L(B,b);}
function Oc(a,b){var c,d;DH(a,b.n());c=b.t();d=0;while(d<a.w.data.length){a.w.data[d]=c.s();d=d+1|0;}a.bt=a.w.data.length;}
function L1(a,b){var c,d;if(a.w.data.length<b){if(a.w.data.length>=1073741823)c=2147483647;else{d=a.w.data.length*2|0;c=BY(b,BY(d,5));}a.w=RF(a.w,c);}}
function Oi(a,b){DK(a,b);return a.w.data[b];}
function MR(a){return a.bt;}
function Ll(a,b,c){var d;DK(a,b);d=a.w.data[b];a.w.data[b]=c;return d;}
function Q7(a,b){var c,d;a.bu(a.bt+1|0);c=a.w.data;d=a.bt;a.bt=d+1|0;c[d]=b;a.ch=a.ch+1|0;return 1;}
function DK(a,b){if(b>=0&&b<a.bt)return;F(Gn());}
function EA(){B9.call(this);}
function Tu(a){var b=new EA();KX(b,a);return b;}
function JJ(b){if(b!==null&&!(typeof b==='undefined'?1:0))return Tu(b);return null;}
function KX(a,b){DY(a,b);}
function Fe(a){return IG(a.bn);}
function Gt(a,b){return Fe(a)[b];}
function Nk(a){return Fe(a).length;}
function Q3(a,b){return Gt(a,b);}
function BJ(){var a=this;B.call(a);a.h=null;a.b1=0;}
var X7=null;function Kl(){Kl=J(BJ);Qs();}
function Tf(a){var b=new BJ();FW(b,a);return b;}
function NO(a,b,c){var d=new BJ();Ks(d,a,b,c);return d;}
function FW(a,b){var c,d,e;Kl();c=b.data;D(a);d=c.length;a.h=$rt_createCharArray(d);e=0;while(e<d){a.h.data[e]=c[e];e=e+1|0;}}
function Ks(a,b,c,d){var e,f;Kl();D(a);a.h=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.h.data[e]=f[e+c|0];e=e+1|0;}}
function Mt(a,b){if(b>=0&&b<a.h.data.length)return a.h.data[b];F(NZ());}
function P6(a){return a.h.data.length;}
function R$(a){return a.h.data.length?0:1;}
function QY(a,b){var c,d,e,f,g;if(a===b)return 0;c=Bh(a.d(),b.d());d=0;while(true){if(d>=c)return a.d()-b.d()|0;e=a.l(d);f=b.l(d);g=e-f|0;if(g)break;d=d+1|0;}return g;}
function Pd(a,b){var c,d,e,f;if(a===b)return 1;if(b.d()>a.d())return 0;c=0;d=a.d()-b.d()|0;while(d<a.d()){e=a.l(d);f=c+1|0;if(e!=b.l(c))return 0;d=d+1|0;c=f;}return 1;}
function Mf(a,b,c){var d,e,f,g;d=BY(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.h.data.length)return (-1);if(a.h.data[d]==e)break;d=d+1|0;}return d;}f=Fb(b);g=EL(b);while(true){if(d>=(a.h.data.length-1|0))return (-1);if(a.h.data[d]==f&&a.h.data[d+1|0]==g)break;d=d+1|0;}return d;}
function Pc(a,b){return a.d5(b,0);}
function MF(a,b,c){var d,e,f,g,h,i;d=Bh(c,a.d()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.h.data[d]==e)break;d=d+(-1)|0;}return d;}f=Fb(b);g=EL(b);while(true){if(d<1)return (-1);if(a.h.data[d]==g){h=a.h.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function Ru(a,b){return a.iG(b,a.d()-1|0);}
function Lc(a,b,c){if(b>c)F(Gn());return NO(a.h,b,c-b|0);}
function RE(a,b){return a.bl(b,a.d());}
function Nx(a){return a;}
function Se(a){var b,c,d;b=$rt_createCharArray(a.h.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.h.data[c];c=c+1|0;}return b;}
function Dg(b){Kl();return b===null?C(21):b.e();}
function QZ(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BJ))return 0;c=b;if(c.d()!=a.d())return 0;d=0;while(d<c.d()){if(a.l(d)!=c.l(d))return 0;d=d+1|0;}return 1;}
function Rg(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.d()!=b.d())return 0;c=0;while(c<a.d()){if(EE(a.l(c))!=EE(b.l(c)))return 0;c=c+1|0;}return 1;}
function Mn(a){var b,c,d,e;a:{if(!a.b1){b=a.h.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.b1=(31*a.b1|0)+e|0;d=d+1|0;}}}return a.b1;}
function PN(a,b){return a.hz(b);}
function Qs(){X7=Vh();}
function HQ(){O.call(this);this.hb=null;}
function UK(a){var b=new HQ();Li(b,a);return b;}
function Li(a,b){a.hb=b;BB(a);a.K=M(0.75,0.75,0.75);a.O=K(4.0,3.0,(-4.0));a.X=C(82);}
function HU(){O.call(this);this.ga=null;}
function TG(a){var b=new HU();Qg(b,a);return b;}
function Qg(a,b){a.ga=b;BB(a);a.K=M(0.75,0.75,0.75);a.O=K(4.0,3.0,4.0);a.X=C(82);}
function HP(){O.call(this);this.i0=null;}
function Tg(a){var b=new HP();OF(b,a);return b;}
function OF(a,b){a.i0=b;BB(a);a.K=M(0.75,0.75,0.75);a.O=K((-4.0),3.0,(-4.0));a.X=C(82);}
function HR(){O.call(this);this.h6=null;}
function Vw(a){var b=new HR();Su(b,a);return b;}
function Su(a,b){a.h6=b;BB(a);a.K=M(0.75,0.75,0.75);a.O=K((-4.0),3.0,4.0);a.X=C(82);}
function Ku(){N.call(this);}
function Vi(){var a=new Ku();MZ(a);return a;}
function MZ(a){Br(a);}
function DB(){CR.call(this);}
function X8(a,b,c){var d=new DB();Ho(d,a,b,c);return d;}
function Ho(a,b,c,d){I1(a,b,c,d);}
function MG(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(Bh(Bw(b),512));e=0;f=0;g=$rt_createByteArray(Bh(Bw(c),512));a:{while(true){if((e+32|0)>f&&CF(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bh(Bw(b)+j|0,i.length);b.ip(d,j,f-j|0);e=0;}if(!CF(c)){if(!CF(b)&&e>=f){Bt();k=W$;}else{Bt();k=W9;}break a;}i=g.data;l=Bh(Bw(c),i.length);m=TX(b,c);k=a.gv(d,e,f,g,0,l,m);e=m.e1;if(k===null&&0==m.du){Bt();k=W$;}j=m.du;c.e3(g,0,j);if(k!==null)break;}}b.em(Ct(b)-(f-e|0)|0);return k;}
function HN(){DB.call(this);}
function UM(a){var b=new HN();Pe(b,a);return b;}
function Pe(a,b){Ho(a,b,2.0,4.0);}
function SH(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.dE(2))break a;Bt();i=W9;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!JA(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.dE(3))break a;Bt();i=W9;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if(!D4(l))
{i=C5(1);break a;}if(j>=d){if(h.h3())break a;Bt();i=W$;break a;}n=j+1|0;p=k[j];if(!DZ(p)){j=n+(-2)|0;i=C5(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.dE(4))break a;Bt();i=W9;break a;}k=e.data;q=Ja(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.iD(j);h.gk(f);return i;}
function GE(){Q.call(this);this.gF=null;}
function U$(a){var b=new GE();L5(b,a);return b;}
function L5(a,b){var c,d;a.gF=b;Bz(a);BE();a.j=XJ;a.L=K(4.0,3.0,1.0);a.N=1.5;Bg();c=Xy;d=I();Bs(R(d,C(89)),c);a.P=Y(d);Xy=Xy+1|0;}
function BS(){B.call(this);}
var XK=null;var XG=null;var XH=null;var XI=null;var XJ=null;function BE(){BE=J(BS);SU();}
function SU(){XG=Uw();XH=VV();XI=UG();XJ=VC();}
function Gw(){Q.call(this);this.hh=null;}
function TK(a){var b=new Gw();QL(b,a);return b;}
function QL(a,b){var c,d;a.hh=b;Bz(a);BE();a.j=XJ;a.L=K(0.0,3.0,1.0);a.N=1.0;Bg();c=Xy;d=I();Bs(R(d,C(89)),c);a.P=Y(d);Xy=Xy+1|0;}
function Ip(){B.call(this);this.eh=null;}
function Vp(a){var b=new Ip();Nm(b,a);return b;}
function Nm(a,b){D(a);a.eh=b;}
function LK(a,b){Ka(a,b);}
function Ka(a,b){a.eh.gT(b);}
function Ij(){B.call(this);}
function VP(){var a=new Ij();PM(a);return a;}
function PM(a){D(a);}
function Ik(){B.call(this);}
function Ux(){var a=new Ik();OS(a);return a;}
function OS(a){D(a);}
function Of(a,b,c){return Js(b,c);}
function D$(){B_.call(this);}
function VQ(){var a=new D$();Mi(a);return a;}
function CU(a){var b=new D$();SS(b,a);return b;}
function Mi(a){Ee(a);}
function SS(a,b){Kr(a,b);}
function Kf(){C0.call(this);}
function Vl(){var a=new Kf();Rv(a);return a;}
function Rv(a){Hn(a,C(90),L(BJ,0));}
function Rz(a){return UM(a);}
function HY(){B.call(this);}
function Tw(){var a=new HY();LL(a);return a;}
function LL(a){D(a);}
function Ox(a,b){return FF(a,b);}
function FF(a,b){return O8(b);}
function DT(){Bu.call(this);}
function M0(){var a=new DT();Ph(a);return a;}
function U6(a){var b=new DT();GR(b,a);return b;}
function Ph(a){C8(a);}
function GR(a,b){DI(a,b);}
function Dj(){B.call(this);this.eu=0;}
function X9(){var a=new Dj();FR(a);return a;}
function X$(a){var b=new Dj();Hs(b,a);return b;}
function FR(a){D(a);a.gj();}
function Hs(a,b){D(a);a.c5(b);}
function OC(a){a.c5(a.dd());}
function S0(a){a.c5(EG(a.b2()));}
function Pa(a){return a.cN(Vn(a.b2().iZ()));}
function NA(a,b){return a.b2().cv(b);}
function Qn(a,b,c){a.gJ();a.b2().bd(b,c);return a;}
function Lz(a){if(a.eu){a.he();a.eu=0;}}
function Pz(a){return a.d4();}
function Mx(a,b,c){return a.iC(b,c);}
function J2(){BA.call(this);}
function VD(){var a=new J2();QJ(a);return a;}
function QJ(a){var b,c;DA(a);b=L(By,1);c=b.data;Bg();c[0]=XA;a.b9=b;b=L(O,1);b.data[0]=Vo(a);a.b0=b;a.bo=Kj(K(0.0,1.0,0.0),K(3.0,3.0,3.0),600.0,450.0);}
function JY(){BA.call(this);}
function S_(){var a=new JY();Qq(a);return a;}
function Qq(a){var b,c;DA(a);b=L(By,2);c=b.data;c[0]=TJ(a);Bg();c[1]=XA;a.b9=b;b=L(O,4);c=b.data;c[0]=TG(a);c[1]=UK(a);c[2]=Vw(a);c[3]=Tg(a);a.b0=b;a.bo=Kj(K(0.0,1.0,0.0),K(3.0,3.0,3.0),600.0,450.0);}
function JZ(){BA.call(this);}
function VL(){var a=new JZ();Pk(a);return a;}
function Pk(a){var b,c;DA(a);b=L(By,7);c=b.data;Bg();c[0]=XA;c[1]=TK(a);c[2]=U$(a);c[3]=T6(a);c[4]=Tk(a);c[5]=T0(a);c[6]=VX(a);a.b9=b;b=L(O,3);c=b.data;c[0]=T4(a);c[1]=Tp(a);c[2]=TS(a);a.b0=b;a.bo=Kt(K(0.0,1.0,0.0),K(5.0,5.0,5.0));}
function Fz(){N.call(this);}
function T7(){var a=new Fz();NX(a);return a;}
function NX(a){Br(a);}
function J0(){Q.call(this);}
function TU(){var a=new J0();RQ(a);return a;}
function RQ(a){Bz(a);BE();a.j=XH;a.L=K(0.0,(-10000.0),0.0);a.N=1.0E-7;a.P=C(86);}
function J1(){Dx.call(this);}
function VU(){var a=new J1();NK(a);return a;}
function NK(a){HI(a);BE();a.j=XH;a.co=K(0.0,1.0,0.0);a.fc=0.0;a.P=C(86);}
function Gy(){O.call(this);this.hp=null;}
function Tp(a){var b=new Gy();P7(b,a);return b;}
function P7(a,b){var c,d;a.hp=b;BB(a);a.K=M(0.0,0.8,0.8);a.O=K((-10.0),12.0,(-7.5));Bg();c=Xz;d=I();Bs(R(d,C(91)),c);a.X=Y(d);Xz=Xz+1|0;}
function Jw(){B.call(this);}
function IF(b){return Math.sin(b);}
function Ma(b){return Math.cos(b);}
function E6(b){return Math.sqrt(b);}
function QT(b){return Math.floor(b);}
function CP(b,c){return Math.pow(b,c);}
function Bh(b,c){if(b<c)c=b;return c;}
function BY(b,c){if(b>c)c=b;return c;}
function Jk(b,c){if(b<c)c=b;return c;}
function R2(b){if(b<=0.0)b= -b;return b;}
function GB(){O.call(this);this.ih=null;}
function T4(a){var b=new GB();NB(b,a);return b;}
function NB(a,b){var c,d;a.ih=b;BB(a);a.K=M(0.5,0.3,0.75);a.O=K((-2.0),5.0,0.0);Bg();c=Xz;d=I();Bs(R(d,C(91)),c);a.X=Y(d);Xz=Xz+1|0;}
function Gz(){O.call(this);this.hZ=null;}
function TS(a){var b=new Gz();QG(b,a);return b;}
function QG(a,b){var c,d;a.hZ=b;BB(a);a.K=M(0.5,0.1,0.1);a.O=K(4.0,2.5,(-5.0));Bg();c=Xz;d=I();Bs(R(d,C(91)),c);a.X=Y(d);Xz=Xz+1|0;}
function GC(){Q.call(this);this.g$=null;}
function Tk(a){var b=new GC();Sc(b,a);return b;}
function Sc(a,b){var c,d;a.g$=b;Bz(a);BE();a.j=XI;a.L=K((-4.0),5.0,2.0);a.N=2.0;Bg();c=Xy;d=I();Bs(R(d,C(89)),c);a.P=Y(d);Xy=Xy+1|0;}
function DX(){S.call(this);this.hI=0;}
var X_=null;function Rj(){Rj=J(DX);LN();}
function VW(a){var b=new DX();Ic(b,a);return b;}
function Ic(a,b){Rj();BX(a);a.hI=b;}
function JR(b){Rj();return VW(b);}
function LN(){X_=E($rt_bytecls());}
function GF(){Q.call(this);this.hH=null;}
function T6(a){var b=new GF();Lq(b,a);return b;}
function Lq(a,b){var c,d;a.hH=b;Bz(a);BE();a.j=XI;a.L=K(0.0,1.0,0.0);a.N=0.5;Bg();c=Xy;d=I();Bs(R(d,C(89)),c);a.P=Y(d);Xy=Xy+1|0;}
function GA(){Q.call(this);this.iV=null;}
function VX(a){var b=new GA();Si(b,a);return b;}
function Si(a,b){var c,d;a.iV=b;Bz(a);BE();a.j=XI;a.L=K((-5.0),5.0,(-6.0));a.N=4.0;Bg();c=Xy;d=I();Bs(R(d,C(89)),c);a.P=Y(d);Xy=Xy+1|0;}
function Cg(){var a=this;B.call(a);a.cZ=null;a.cG=null;a.de=null;a.dA=null;}
function Ya(){var a=new Cg();EC(a);return a;}
function EC(a){D(a);}
function Kt(b,c){var d,e,f,g,h,i,j,k,l;d=BT(b,c);e=Bv(d);f=Cb(0.0,(-1.0),0.0);g=C4(e,f);h=Bv(g);i=Z(2.0,h);j=C4(e,i);k=Bv(j);l=Z(2.0,k);return Ug(c,e,l,i);}
function Kj(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=e/d;g=BT(b,c);h=Bv(g);i=Cb(0.0,(-1.0),0.0);j=C4(h,i);k=Bv(j);l=Z(2.0,k);m=C4(h,l);n=Bv(m);o=Z(2.0*f,n);return U3(c,h,o,l);}
function GD(){Q.call(this);this.gx=null;}
function T0(a){var b=new GD();NS(b,a);return b;}
function NS(a,b){var c,d;a.gx=b;Bz(a);BE();a.j=XI;a.L=K(3.0,2.0,6.0);a.N=1.75;Bg();c=Xy;d=I();Bs(R(d,C(89)),c);a.P=Y(d);Xy=Xy+1|0;}
function F8(){Dj.call(this);this.cC=null;}
function Uq(){var a=new F8();OA(a);return a;}
function Vv(a){var b=new F8();R_(b,a);return b;}
function OA(a){FR(a);}
function R_(a,b){Hs(a,b);}
function Ly(a){return a.cC;}
function SP(a,b){a.cC=b;}
function Lm(a){return a.cC;}
function ON(a,b){return b;}
function MW(a){return a.iY();}
function JX(){var a=this;B.call(a);a.G=null;a.ej=null;a.dU=null;a.f0=null;a.fa=null;a.fL=null;}
function U0(a){var b=new JX();KB(b,a);return b;}
function KB(a,b){var c;D(a);a.G=b;c=b.exports.memory.buffer;a.ej=new Int8Array(c);a.dU=new Int16Array(c);a.f0=new Int32Array(c);a.fa=new Float32Array(c);a.fL=new Float64Array(c);}
function N$(a,b){return Vy(a,b);}
function Q9(a,b,c){return Rc(Gh(a,b,c));}
function Gh(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=c.data;switch(d.length){case 0:return a.G.exports[$rt_ustr(b)]();case 1:e=a.G;f=G(d[0]);return e.exports[$rt_ustr(b)](f);case 2:e=a.G;f=G(d[0]);g=G(d[1]);return e.exports[$rt_ustr(b)](f,g);case 3:e=a.G;f=G(d[0]);g=G(d[1]);h=G(d[2]);return e.exports[$rt_ustr(b)](f,g,h);case 4:e=a.G;f=G(d[0]);g=G(d[1]);h=G(d[2]);i=G(d[3]);return e.exports[$rt_ustr(b)](f,g,h,i);case 5:e=a.G;f=G(d[0]);g=G(d[1]);h=G(d[2]);i=G(d[3]);j=G(d[4]);return e.exports[$rt_ustr(b)](f,g,h,i,j);case 6:e
=a.G;f=G(d[0]);g=G(d[1]);h=G(d[2]);i=G(d[3]);j=G(d[4]);k=G(d[5]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k);case 7:e=a.G;f=G(d[0]);g=G(d[1]);h=G(d[2]);i=G(d[3]);j=G(d[4]);k=G(d[5]);l=G(d[6]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l);case 8:e=a.G;f=G(d[0]);g=G(d[1]);h=G(d[2]);i=G(d[3]);j=G(d[4]);k=G(d[5]);l=G(d[6]);m=G(d[7]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l,m);case 9:e=a.G;f=G(d[0]);g=G(d[1]);h=G(d[2]);i=G(d[3]);j=G(d[4]);k=G(d[5]);l=G(d[6]);m=G(d[7]);n=G(d[8]);return e.exports[$rt_ustr(b)](f,g,
h,i,j,k,l,m,n);default:}return null;}
function G(b){return MP(b);}
function Ep(){var a=this;B.call(a);a.bc=0.0;a.bb=0.0;a.ba=0.0;}
var XY=null;function Cn(){Cn=J(Ep);SJ();}
function D0(a,b,c){var d=new Ep();GS(d,a,b,c);return d;}
function GS(a,b,c,d){Cn();D(a);a.bc=b;a.bb=c;a.ba=d;}
function M(b,c,d){Cn();return D0(b,c,d);}
function BU(b,c){Cn();return D0(b*c.bc,b*c.bb,b*c.ba);}
function DU(b,c){Cn();return D0(b.bc*c.bc,b.bb*c.bb,b.ba*c.ba);}
function Cc(b,c){Cn();return D0(b.bc+c.bc,b.bb+c.bb,b.ba+c.ba);}
function RI(a,b){if(b<0.0)b=0.0;else if(b>1.0)b=1.0;return b;}
function SJ(){XY=M(0.0,0.0,0.0);}
function EI(){var a=this;B.call(a);a.gO=null;a.f5=null;}
var Yb=null;function Ej(){Ej=J(EI);Ms();}
function Vc(a){var b=new EI();F5(b,a);return b;}
function F5(a,b){Ej();D(a);a.gO=b;}
function E7(){Ej();return CW(C(92));}
function CW(b){var c,d,e;Ej();c=Yb.cv(b);if(c===null){c=Vc(b);d=b.iu(46);if(d>=0){e=b.bl(0,d);c.f5=CW(e);}else if(!b.b8())c.f5=CW(C(93));Yb.bd(b,c);}return c;}
function Lt(a,b){var c;c=Il(a,b.cF(),b.f7());if(CM(b.fv())>=CM(WZ))IH($rt_ustr(c));else if(CM(b.fv())<CM(WK))Ft($rt_ustr(c));else It($rt_ustr(c));}
function Il(a,b,c){var d,e,f,g,h,i,j;if(c===null)return b;d=I();e=0;a:{while(true){if(e>=b.d())break a;f=b.d5(123,e);if(f<0)break a;g=f+1|0;h=G1(g,b);if(h<0)break;if(b.l(h)!=125){d.c(b.bl(e,h));e=h;continue;}i=c.data;j=Er(b.bl(g,h));if(j>=i.length){d.h8(b,e,h);e=h;continue;}d.di(i[j]);e=h+1|0;}}return d.e();}
function G1(b,c){var d,e;Ej();while(true){if(b>=c.d())return (-1);d=b+1|0;e=c.l(b);if(e<=48)break;if(e>=57)break;b=d;}return d;}
function Rw(a,b,c){a.ed(RN(b,c));}
function Oz(a,b,c,d){var e;e=RN(b,c);e.iX(d);a.ed(e);}
function Ms(){Yb=S3();}
function Ft(b){if(console){console.info(b);}}
function It(b){if(console){console.warn(b);}}
function IH(b){if(console){console.error(b);}}
function DL(){var a=this;B.call(a);a.fi=null;a.eT=null;a.gn=Long_ZERO;a.gN=null;a.iL=Long_ZERO;a.g6=Long_ZERO;a.gl=null;}
var Yc=Long_ZERO;function RN(a,b){var c=new DL();R3(c,a,b);return c;}
function R3(a,b,c){var d;D(a);a.fi=b;a.eT=c;a.gn=H7();d=Yc;Yc=Long_add(d,Long_fromInt(1));a.iL=d;a.g6=Fi().gP();}
function ND(a){return a.fi;}
function Ol(a){return a.eT;}
function NU(a){return a.gN;}
function NE(a,b){a.gl=b;}
function GI(){B.call(this);}
function Vh(){var a=new GI();MV(a);return a;}
function MV(a){D(a);}
function FO(){var a=this;Bx.call(a);a.ez=null;a.eO=null;}
function Vg(a,b){var c=new FO();KJ(c,a,b);return c;}
function KJ(a,b,c){a.ez=b;a.eO=c;CD(a);a.bg=a.ez;a.Y=a.eO;}
function FQ(){var a=this;Bx.call(a);a.fr=null;a.fE=null;}
function Ur(a,b){var c=new FQ();ST(c,a,b);return c;}
function ST(a,b,c){a.fr=b;a.fE=c;CD(a);a.bg=a.fr;a.Y=a.fE;}
function FN(){var a=this;Bx.call(a);a.eK=null;a.fO=null;}
function UF(a,b){var c=new FN();Pq(c,a,b);return c;}
function Pq(a,b,c){a.eK=b;a.fO=c;CD(a);a.bg=a.eK.bo.cZ;a.Y=a.fO;}
function GZ(){B.call(this);}
function Vz(){var a=new GZ();Sw(a);return a;}
function Sw(a){D(a);}
function RW(a,b){return Hq(a,b);}
function Hq(a,b){return OK(b);}
function FP(){var a=this;Bx.call(a);a.ff=null;a.e5=null;}
function Th(a,b){var c=new FP();RY(c,a,b);return c;}
function RY(a,b,c){a.ff=b;a.e5=c;CD(a);a.bg=a.ff;a.Y=a.e5;}
function Fm(){B.call(this);}
function UY(){var a=new Fm();OY(a);return a;}
function OY(a){D(a);}
function Q1(a,b){return Gp(a,b);}
function Gp(a,b){return Qo(b);}
function GX(){B.call(this);}
function UL(){var a=new GX();PH(a);return a;}
function PH(a){D(a);}
function OM(a,b){return FL(a,b);}
function FL(a,b){return PG(b);}
function Fq(){B.call(this);}
function UX(){var a=new Fq();Qi(a);return a;}
function Qi(a){D(a);}
function Rm(a,b){return Ig(a,b);}
function Ig(a,b){return QF(b);}
function GY(){B.call(this);}
function T8(){var a=new GY();Nn(a);return a;}
function Nn(a){D(a);}
function Na(a,b){return HT(a,b);}
function HT(a,b){return RO(b);}
function Fr(){B.call(this);}
function TV(){var a=new Fr();MN(a);return a;}
function MN(a){D(a);}
function RJ(a,b){return Kc(a,b);}
function Kc(a,b){return Pv(b);}
function Fo(){B.call(this);}
function Tx(){var a=new Fo();LE(a);return a;}
function LE(a){D(a);}
function L$(a,b){return Iv(a,b);}
function Iv(a,b){return O4(b);}
function GW(){B.call(this);}
function U5(){var a=new GW();Pi(a);return a;}
function Pi(a){D(a);}
function MQ(a,b){return Hv(a,b);}
function Hv(a,b){return Oo(b);}
function Jg(){N.call(this);}
function Ud(){var a=new Jg();P9(a);return a;}
function P9(a){Br(a);}
function Dl(){var a=this;B.call(a);a.bR=0;a.el=0;}
var W$=null;var W9=null;function Bt(){Bt=J(Dl);O6();}
function G5(a,b){var c=new Dl();HB(c,a,b);return c;}
function HB(a,b,c){Bt();D(a);a.bR=b;a.el=c;}
function Lr(a){return a.bR?0:1;}
function QI(a){return a.bR!=1?0:1;}
function SE(a){return !a.hN()&&!a.fw()?0:1;}
function QN(a){return a.bR!=2?0:1;}
function QW(a){return a.bR!=3?0:1;}
function Pw(a){if(a.h_())return a.el;F(U8());}
function C5(b){Bt();return G5(2,b);}
function O6(){W$=G5(0,0);W9=G5(1,0);}
function C_(){B.call(this);}
var Yd=null;var Ye=null;function DR(){DR=J(C_);QR();}
function JF(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;DR();d=$rt_doubleToLongBits(b);c.d$=Long_eq(Long_and(d,new Long(0, 2147483648)),Long_ZERO)?0:1;e=Long_and(d,new Long(4294967295, 1048575));f=Long_shr(d,52).lo&2047;if(Long_eq(e,Long_ZERO)&&!f){c.cD=Long_ZERO;c.cV=0;return;}g=0;if(f)h=Long_or(e,new Long(0, 1048576));else{h=Long_shl(e,1);while(Long_eq(Long_and(h,new Long(0, 1048576)),Long_ZERO)){h=Long_shl(h,1);f=f+(-1)|0;g=g+1|0;}}i=LW(Ye,f);if(i<0)i= -i-2|0;j=f-Ye.data[i]|0;k=12+j|0;l=EZ(h,Yd.data[i],k);if(Long_ge(l,
new Long(2808348672, 232830643))){i=i+1|0;m=f-Ye.data[i]|0;k=12+m|0;l=EZ(h,Yd.data[i],k);}n=Long_shru(Yd.data[i],(63-k|0)-g|0);o=Long_shr(Long_add(n,Long_fromInt(1)),1);p=Long_shr(n,1);if(Long_eq(h,new Long(0, 1048576)))p=Long_shr(p,2);q=Jd(l,p);r=J_(l,o);m=Long_compare(q,r);h=m>0?Long_mul(Long_div(l,q),q):m<0?Long_add(Long_mul(Long_div(l,r),r),r):Long_mul(Long_div(Long_add(l,Long_div(r,Long_fromInt(2))),r),r);if(Long_ge(h,new Long(2808348672, 232830643))){i=i+1|0;h=Long_div(h,Long_fromInt(10));}else if(Long_lt(h,
new Long(1569325056, 23283064))){i=i+(-1)|0;h=Long_mul(h,Long_fromInt(10));}c.cD=h;c.cV=i-330|0;}
function Jd(b,c){var d,e;DR();d=Long_fromInt(10);while(Long_le(d,c)){d=Long_mul(d,Long_fromInt(10));}e=Long_rem(b,d);if(Long_ge(e,Long_div(c,Long_fromInt(2))))d=Long_div(d,Long_fromInt(10));return d;}
function J_(b,c){var d,e;DR();d=Long_fromInt(1);while(Long_le(d,c)){d=Long_mul(d,Long_fromInt(10));}e=Long_rem(b,d);if(Long_gt(Long_sub(d,e),Long_div(c,Long_fromInt(2))))d=Long_div(d,Long_fromInt(10));return d;}
function EZ(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;DR();e=Long_and(b,Long_fromInt(65535));f=Long_and(Long_shru(b,16),Long_fromInt(65535));g=Long_and(Long_shru(b,32),Long_fromInt(65535));h=Long_and(Long_shru(b,48),Long_fromInt(65535));i=Long_and(c,Long_fromInt(65535));j=Long_and(Long_shru(c,16),Long_fromInt(65535));k=Long_and(Long_shru(c,32),Long_fromInt(65535));l=Long_and(Long_shru(c,48),Long_fromInt(65535));m=Long_add(Long_add(Long_mul(k,e),Long_mul(j,f)),Long_mul(i,g));n=Long_add(Long_add(Long_add(Long_mul(l,
e),Long_mul(k,f)),Long_mul(j,g)),Long_mul(i,h));o=Long_add(Long_add(Long_mul(l,f),Long_mul(k,g)),Long_mul(j,h));p=Long_add(Long_mul(l,g),Long_mul(k,h));q=Long_mul(l,h);r=Long_add(Long_add(Long_shl(q,32+d|0),Long_shl(p,16+d|0)),Long_shl(o,d));s=d>16?Long_add(r,Long_shl(n,d-16|0)):Long_add(r,Long_shru(n,16-d|0));s=Long_add(s,Long_shru(m,32-d|0));return s;}
function QR(){var b,c,d,e,f,g,h,i,j,k,l;Yd=$rt_createLongArray(660);Ye=$rt_createIntArray(660);b=new Long(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=Yd.data;g=d+330|0;f[g]=Dm(e,Long_fromInt(80));Ye.data[g]=c;e=Dm(e,Long_fromInt(10));h=Ga(e,Long_fromInt(10));while(Long_le(e,b)&&Long_eq(Long_and(e,new Long(0, 2147483648)),Long_ZERO)){e=Long_shl(e,1);c=c+1|0;h=Long_shl(h,1);}e=Long_add(e,Long_div(h,Long_fromInt(10)));d=d+1|0;}i=new Long(3435973836, 214748364);j=1023;d=0;while(d<330){k=0;e=b;while(Long_gt(e,
i)){e=Long_shr(e,1);k=k+1|0;j=j+(-1)|0;}h=Long_mul(e,Long_fromInt(10));if(k<=0)b=h;else{l=Long_and(b,Long_fromInt((1<<k)-1|0));b=Long_add(h,Long_shr(Long_mul(l,Long_fromInt(10)),k));}f=Yd.data;g=(330-d|0)-1|0;f[g]=Dm(b,Long_fromInt(80));Ye.data[g]=j;d=d+1|0;}}
function JP(){var a=this;Cg.call(a);a.d_=null;a.eV=null;a.dY=null;a.ef=null;}
function U3(a,b,c,d){var e=new JP();RB(e,a,b,c,d);return e;}
function RB(a,b,c,d,e){a.d_=b;a.eV=c;a.dY=d;a.ef=e;EC(a);a.cZ=a.d_;a.de=a.eV;a.cG=a.dY;a.dA=a.ef;}
function JN(){var a=this;Cg.call(a);a.fP=null;a.fl=null;a.dW=null;a.ey=null;}
function Ug(a,b,c,d){var e=new JN();QE(e,a,b,c,d);return e;}
function QE(a,b,c,d,e){a.fP=b;a.fl=c;a.dW=d;a.ey=e;EC(a);a.cZ=a.fP;a.de=a.fl;a.cG=a.dW;a.dA=a.ey;}
function Jp(){Cm.call(this);}
function J4(){B.call(this);this.ev=null;}
function TC(a){var b=new J4();KM(b,a);return b;}
function KM(a,b){D(a);a.ev=b;}
function KL(a,b){return GL(a,b);}
function GL(a,b){return P_(a.ev,b);}
function HA(){var a=this;B.call(a);a.es=null;a.fN=0;}
function Uz(a){var b=new HA();OJ(b,a);return b;}
function OJ(a,b){D(a);a.es=b;}
function Gq(){var a=this;B.call(a);a.fG=null;a.b_=null;}
function To(a){var b=new Gq();R5(b,a);return b;}
function R5(a,b){D(a);a.b_=N8();a.fG=b;}
function RC(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;d=EX();e=Gb();f=c.length;g=0;while(g<f){h=c[g];i=e.hO(h.hs());if(i===null){j=h.hs();i=Gb();e.hK(j,i);}k=UD(h);i.bk()[$rt_ustr(h.jI())]=Cp(k,"apply");g=g+1|0;}j=a.fG;l=e.bk();m=Uc(d);n=VB(a);R9(j,l,Cp(m,"handle"),Cp(n,"handle"));return d;}
function Iz(a,b){if(b!=10)a.b_.gi($rt_str(String.fromCharCode(b)));else{Hb().eX(a.b_.e());a.b_=N8();}}
function Lp(b,c){b.cJ(U0(c));}
function S1(b,c,d){b.j7().i$(c,d);}
function R9(b,c,d,e){(WebAssembly.instantiate(b,Object.assign(c,{teavm:{currentTimeMillis:function(){return (new Date()).getTime();},isnan:isNaN,teavm_getNaN:function(){return NaN;},isinf:function(n){return !isFinite(n);},isfinite:isFinite,putwchar:e,towlower:function(code){return ((String.fromCharCode(code)).toLowerCase()).charCodeAt(0);},towupper:function(code){return ((String.fromCharCode(code)).toUpperCase()).charCodeAt(0);},getNativeOffset:function(instant){return (new Date(instant)).getTimezoneOffset();},
logString:console.log,logInt:console.log,logOutOfMemory:function(){console.log("Out of memory");}},teavmMath:{sqrt:Math.sqrt,pow:Math.pow,sin:Math.sin,cos:Math.cos}}))).then(function(instance){return d(instance);});}
function Hz(){Bf.call(this);}
function H2(){Bf.call(this);}
function BP(){Cj.call(this);}
var WF=null;var XQ=null;var WJ=null;var Yf=null;function Ds(){Ds=J(BP);LS();}
function Fl(a,b){var c=new BP();J8(c,a,b);return c;}
function J8(a,b,c){Ds();EO(a,b,c);}
function Fj(){var b,c;Ds();b=L(BP,3);c=b.data;c[0]=WF;c[1]=XQ;c[2]=WJ;return b;}
function LS(){WF=Fl(C(94),0);XQ=Fl(C(95),1);WJ=Fl(C(96),2);Yf=Fj();}
function IK(){N.call(this);}
function Vs(){var a=new IK();Ra(a);return a;}
function Ra(a){Br(a);}
function HF(){BM.call(this);}
function UZ(){var a=new HF();RT(a);return a;}
function RT(a){CQ(a);}
function QQ(a,b){Qv(b);}
function Qv(b){$rt_putStderr(b);}
function HV(){B.call(this);}
function U4(){var a=new HV();KF(a);return a;}
function KF(a){D(a);}
function F7(){BF.call(this);this.dD=null;}
function Ts(a){var b=new F7();Ny(b,a);return b;}
function Ny(a,b){Dv(a);a.dD=b;}
function KA(a,b){return a.dD.data[b];}
function Mu(a){return a.dD.data.length;}
function BW(){B.call(this);}
var Yg=null;var Yh=null;var Yi=null;var Yj=null;var Yk=null;function Dp(){Dp=J(BW);Lk();}
function Iy(){Dp();return VE();}
function Jm(){Dp();return VJ();}
function Gr(){Dp();return UU();}
function G2(b,c){var d,e,f;Dp();if(c===null)c=Yj;d=L(B,b.n());b.gg(d);Pf(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;b.gK(e,f[e]);e=e+1|0;}}
function Js(b,c){var d,e;Dp();if(b!==null){d=b;e=d.f4(c);}else{d=c;e= -d.f4(b);}return e;}
function Lk(){Yg=Jm();Yh=Gr();Yi=Iy();Yj=Ux();Yk=VP();}
$rt_packages([-1,"java",0,"util",1,"logging",0,"nio",3,"charset",0,"lang",-1,"webfx",6,"demo",7,"raytracer",8,"math",6,"platform",10,"shared",11,"util",12,"serviceloader",11,"services",14,"json",15,"spi",16,"impl",17,"listmap",10,"teavm",19,"services",20,"json",21,"spi",22,"impl",10,"client",24,"services",25,"webassembly",26,"spi"]);
$rt_metadata([B,"Object",5,0,[],0,3,0,["jY",function(){return Cv(this);},"bM",function(){return Ov(this);},"z",function(b){return KT(this,b);},"e",function(){return Nz(this);},"i5",function(){return DG(this);},"dK",function(){return SO(this);}],BN,0,B,[],0,3,0,["dg",function(){return PB(this);},"cF",function(){return OI(this);},"gX",function(){return Qk(this);},"iR",function(){Q2(this);},"ex",function(b){Sy(this,b);}],Bu,0,BN,[],0,3,0,0,N,0,Bu,[],0,3,0,0,C$,"IndexOutOfBoundsException",5,N,[],0,3,0,0,CT,0,B,
[],3,3,0,0,Dh,0,B,[CT],0,3,0,["f3",function(b){Jo(this,b);},"cP",function(b){Ow(this,b);},"cW",function(b){Ro(this,b);}],C9,0,B,[CT],3,3,0,0,CX,0,Dh,[C9],1,3,0,["f3",function(b){Pg(this,b);},"jJ",function(b){J$(this,b);},"dL",function(b){return Qu(this,b);}],Gs,0,B,[],0,3,0,["h3",function(){return O5(this);},"dE",function(b){return O_(this,b);},"iD",function(b){P4(this,b);},"gk",function(b){S5(this,b);}],Bm,0,B,[],3,3,0,0,S,0,B,[Bm],1,3,0,0,V,0,B,[],3,3,0,0,B$,"Integer",5,S,[V],0,3,BK,["I",function(){return Mk(this);
},"e",function(){return Re(this);}],H8,"CloneNotSupportedException",5,Bu,[],0,3,0,0,BR,0,B,[],0,0,Oy,0,By,0,B,[],1,3,0,0,Q,0,By,[],0,3,0,["eN",function(b){return Qa(this,b);},"eF",function(b){return Kx(this,b);}],B0,0,B,[],0,3,0,0,Jh,"Sphere$1",9,B0,[],0,0,0,0,E9,"Long",5,S,[V],0,3,Io,["I",function(){return Lb(this);},"e",function(){return P1(this);}],BQ,0,B,[],3,3,0,0,D6,0,B,[],3,3,0,0,B4,0,B,[D6],0,3,E4,["gP",function(){return KI(this);}],Bb,0,B,[],3,3,0,0,Em,0,B,[Bb],3,3,0,0,IN,0,B,[Em],1,3,0,["j_",function(b)
{return SD(this,b);},"j0",function(){return NN(this);}],CJ,0,B,[],3,3,0,0,Ch,0,BN,[],0,3,0,0,Cm,0,Ch,[],0,3,0,0,JK,"StringIndexOutOfBoundsException",5,C$,[],0,3,0,0,De,0,B,[],3,3,0,0,D1,0,B,[De],3,3,0,0,Dx,0,By,[],0,3,0,["eN",function(b){return KH(this,b);},"eF",function(b){return Ss(this,b);}],Dq,0,B,[],4,3,R1,0,Je,0,B,[],4,3,0,0,Fc,0,B,[],32,0,Ut,0,Eu,0,B,[],3,3,0,0,Ix,0,B,[],4,3,0,0,Bf,0,B,[Bb],1,3,0,0,F$,0,Bf,[],1,3,0,0,P,0,B,[],3,3,0,0,FZ,0,B,[P],0,3,0,["f",function(b){return PX(this,b);},"bh",function(b)
{return Kp(this,b);}],Fx,0,CX,[],0,3,0,["iP",function(){NF(this);},"kq",function(b){Hi(this,b);},"jv",function(b){JG(this,b);}],FX,0,B,[P],0,3,0,["f",function(b){return Sd(this,b);},"bh",function(b){return Ie(this,b);}],Cf,0,B,[Bm,CJ],0,0,0,["kA",function(b){return D7(this,b);},"ci",function(b,c){return Et(this,b,c);},"kp",function(b){return G3(this,b);},"ea",function(b,c){return L6(this,b,c);},"gs",function(b,c,d){return RA(this,b,c,d);},"jG",function(b){return Jq(this,b);},"ei",function(b,c){return Kk(this,
b,c);},"hX",function(b,c,d){return K3(this,b,c,d);},"jO",function(b){return IA(this,b);},"dS",function(b,c){return HO(this,b,c);},"ja",function(b){return J3(this,b);},"fe",function(b,c){return JH(this,b,c);},"ki",function(b){return JC(this,b);},"eR",function(b,c){return Iq(this,b,c);},"bu",function(b){D9(this,b);},"e",function(){return DO(this);},"d",function(){return Jf(this);},"j4",function(b,c,d){return G$(this,b,c,d);},"dP",function(b,c,d,e){return FJ(this,b,c,d,e);},"ee",function(b,c,d,e){IZ(this,b,c,d,
e);},"d3",function(b){IP(this,b);},"jW",function(b,c){U(this,b,c);}],CI,0,B,[],3,3,0,0,FB,0,Cf,[CI],0,3,0,["c",function(b){return K8(this,b);},"r",function(b){return Bs(this,b);},"ie",function(b){return QA(this,b);},"hv",function(b){return OD(this,b);},"q",function(b){return KZ(this,b);},"h8",function(b,c,d){return Ri(this,b,c,d);},"di",function(b){return R(this,b);},"hD",function(b,c){return PJ(this,b,c);},"ha",function(b,c){return RK(this,b,c);},"hq",function(b,c,d,e){return LQ(this,b,c,d,e);},"g5",function(b,
c){return Sp(this,b,c);},"io",function(b,c){return Mj(this,b,c);},"gW",function(b,c){return Sz(this,b,c);},"d3",function(b){SI(this,b);},"ee",function(b,c,d,e){Pb(this,b,c,d,e);},"dP",function(b,c,d,e){return M4(this,b,c,d,e);},"d",function(){return M1(this);},"e",function(){return Y(this);},"bu",function(b){SM(this,b);},"eR",function(b,c){return La(this,b,c);},"fe",function(b,c){return KG(this,b,c);},"dS",function(b,c){return O9(this,b,c);},"ei",function(b,c){return NW(this,b,c);},"ci",function(b,c){return SZ(this,
b,c);}],D3,0,B,[],0,3,0,0,Dc,0,B,[],3,3,0,["gw",function(b,c){return Ns(this,b,c);},"iN",function(b){return Q$(this,b);},"hQ",function(b){return Md(this,b);},"dG",function(b){return RH(this,b);},"dC",function(b,c){return Lf(this,b,c);}]]);
$rt_metadata([Dw,0,B,[],3,3,0,["W",function(b){return Oh(this,b);},"gB",function(b){return MO(this,b);},"f$",function(b){return OB(this,b);},"hT",function(b){return S7(this,b);}],Ek,0,B,[Dw],3,3,0,["W",function(b){return Oh(this,b);},"gB",function(b){return MO(this,b);},"f$",function(b){return OB(this,b);},"hT",function(b){return S7(this,b);}],E_,0,B,[Dw],3,3,0,["d4",function(){return M3(this);},"W",function(b){return Oh(this,b);},"gB",function(b){return MO(this,b);},"f$",function(b){return OB(this,b);},"hT",
function(b){return S7(this,b);}],CG,"JsonProvider",16,B,[Ek,E_],3,3,0,["hl",function(){return P2(this);},"W",function(b){return Oh(this,b);},"gB",function(b){return MO(this,b);},"f$",function(b){return OB(this,b);},"hT",function(b){return S7(this,b);},"d4",function(){return M3(this);}],Cx,0,B,[CG],3,3,0,["hl",function(){return P2(this);},"W",function(b){return Oh(this,b);},"gB",function(b){return MO(this,b);},"f$",function(b){return OB(this,b);},"hT",function(b){return S7(this,b);},"d4",function(){return M3(this);
}],Cs,0,B,[Dc,Cx],3,3,0,["hO",function(b){return OR(this,b);},"c7",function(b){return Pn(this,b);},"gw",function(b,c){return Ns(this,b,c);},"iN",function(b){return Q$(this,b);},"hQ",function(b){return Md(this,b);},"dG",function(b){return RH(this,b);},"dC",function(b,c){return Lf(this,b,c);},"hl",function(){return P2(this);},"W",function(b){return Oh(this,b);},"gB",function(b){return MO(this,b);},"f$",function(b){return OB(this,b);},"hT",function(b){return S7(this,b);},"d4",function(){return M3(this);}],IU,"ConcurrentModificationException",
1,N,[],0,3,0,0,F0,0,B,[P],0,3,0,["f",function(b){return N1(this,b);},"be",function(b){return F_(this,b);}],FY,0,B,[P],0,3,0,["f",function(b){return LJ(this,b);},"be",function(b){return IB(this,b);}],Ez,0,B,[],3,3,0,0,IS,0,B,[Ez],0,3,0,["gL",function(b){Sg(this,b);}],CB,0,B,[],3,3,0,0,IR,0,B,[CB],0,3,0,["cT",function(b){Rl(this,b);},"e_",function(b){Kq(this,b);}],JM,0,B,[CB],0,3,0,["cT",function(b){SK(this,b);},"e_",function(b){Jl(this,b);}],I9,"SingleServiceProvider$ServiceInfo",13,B,[],4,0,0,["i3",function(b,
c){return Fk(this,b,c);},"j1",function(){return FS(this);},"ke",function(){return IV(this);}],Ex,0,B,[Bb],3,0,0,0,EJ,0,B,[],3,3,0,0,CS,0,B,[],3,3,0,0,Ev,0,B,[],4,3,OZ,0,CH,0,B,[Cx],3,3,0,["hl",function(){return P2(this);},"W",function(b){return Oh(this,b);},"gB",function(b){return MO(this,b);},"f$",function(b){return OB(this,b);},"hT",function(b){return S7(this,b);},"d4",function(){return M3(this);}],GN,"CoderMalfunctionError",4,Ch,[],0,3,0,0,B5,0,B,[BQ],1,3,0,0,B6,0,B,[],3,3,0,0,Dy,0,B5,[B6,Bm],0,3,0,["cY",
function(b){return QD(this,b);},"kj",function(){El(this);},"cv",function(b){return QP(this,b);},"j9",function(b){return FU(this,b);},"kc",function(b,c,d){return CE(this,b,c,d);},"kr",function(){return CN(this);},"bd",function(b,c){return LB(this,b,c);},"dw",function(b,c){return Ql(this,b,c);},"bI",function(b,c,d){return NL(this,b,c,d);},"hj",function(b){Qe(this,b);},"cf",function(){N9(this);},"kf",function(b){return G7(this,b);},"n",function(){return N6(this);}],Gl,"LinkedHashMap",1,Dy,[BQ],0,3,0,["cY",function(b)
{return Ne(this,b);},"cv",function(b){return K7(this,b);},"bI",function(b,c,d){return Sq(this,b,c,d);},"bd",function(b,c){return Q8(this,b,c);},"dw",function(b,c){return Sr(this,b,c);},"dq",function(b){KV(this,b);},"iJ",function(){return Qm(this);},"iZ",function(){return Op(this);},"go",function(b){return Od(this,b);},"ig",function(b){return K_(this,b);}],B9,0,B,[CH],1,0,0,["fd",function(){return F9(this);},"ce",function(b){return GU(this,b);},"fQ",function(){return GO(this);},"f6",function(b){return J5(this,
b);},"eE",function(b){return IM(this,b);},"W",function(b){return Ko(this,b);},"eY",function(b){return HJ(this,b);},"e",function(){return Jj(this);},"bk",function(){return M2(this);},"dd",function(){return Px(this);},"c1",function(b){return Or(this,b);},"bV",function(b){return NT(this,b);},"cN",function(b){return MH(this,b);},"hl",function(){return P2(this);},"gB",function(b){return MO(this,b);},"f$",function(b){return OB(this,b);},"hT",function(b){return S7(this,b);},"d4",function(){return M3(this);}],G4,0,
Cf,[CI],0,3,0,["gi",function(b){return OG(this,b);},"hW",function(b,c){return OH(this,b,c);},"e",function(){return Ni(this);},"bu",function(b){NG(this,b);},"ci",function(b,c){return K4(this,b,c);}],Ce,0,B,[],1,3,0,["kt",function(){return Ct(this);},"i_",function(b){return IQ(this,b);},"jB",function(){return Hg(this);},"jP",function(){return Bw(this);},"jA",function(){return CF(this);}],Bn,0,B,[],0,3,0,0,Ca,0,B,[],0,0,0,["x",function(){return Nv(this);},"kk",function(){J7(this);},"jc",function(){E1(this);}],B7,
0,B,[],3,3,0,0,IJ,0,Ca,[B7],0,0,0,["hF",function(){return M9(this);},"s",function(){return Rh(this);}],Ei,0,B,[],3,3,0,0,CV,0,B,[De],0,0,0,["f1",function(b){Mz(this,b);}],DD,0,B,[],3,3,0,0,Dz,0,B,[DD,B6],0,0,0,["dv",function(){return Rp(this);},"gZ",function(){return Sl(this);}],Cq,0,Dz,[],0,0,0,0,EK,0,Cq,[],4,0,0,0,Cd,0,Cm,[],0,3,0,0,I0,0,Cd,[],0,3,0,0,Ef,0,Bu,[],0,3,0,0,Ed,0,B,[Bb],3,0,0,0,EQ,0,B,[],32,0,TQ,0,In,0,B,[],4,3,0,0,Gk,0,B,[B7],0,0,0,["x",function(){return Lw(this);},"s",function(){return Qf(this);
},"js",function(){Ht(this);}],O,0,B,[],0,3,0,0,Do,"UnsupportedOperationException",5,N,[],0,3,0,0,Kb,"ReadOnlyBufferException",3,Do,[],0,3,0,0,H$,0,B,[],0,3,0,0,F3,0,B,[],4,3,0,0]);
$rt_metadata([Ih,0,B,[CS],0,3,0,["fA",function(){return Le(this);},"iF",function(){return Ff(this);}],Ec,0,B,[],3,3,0,0,EH,0,B,[Ec],3,3,0,["gT",function(b){PT(this,b);},"iA",function(){return NP(this);},"hg",function(b){return Po(this,b);}],Ia,0,Bf,[],1,3,0,0,H_,0,B,[B7],0,0,0,["x",function(){return RL(this);},"s",function(){return MB(this);}],G0,0,B,[],0,3,0,0,CK,"WebAssemblyProvider",27,B,[],3,3,0,["h2",function(b,c){return Np(this,b,c);}],HK,0,B,[],4,0,0,0,Bi,0,Cd,[],0,3,0,0,Dn,0,B,[],3,3,0,0,Cu,0,B,[Dn],
3,3,0,0,B1,0,B,[Cu],1,3,0,["eQ",function(){return Qb(this);},"gg",function(b){return Pj(this,b);},"e",function(){return Nr(this);}],HM,0,B,[],4,3,0,0,Fa,0,S,[V],0,3,Qc,0,Fd,0,B,[],3,3,0,0,GT,0,B,[C9],4,3,0,["cP",function(b){RV(this,b);},"dL",function(b){return MI(this,b);},"cW",function(b){St(this,b);}],GK,0,B,[EH],0,3,0,["c$",function(){return K2(this);},"eS",function(){return Q4(this);},"e7",function(){return M$(this);},"it",function(){return LG(this);},"c0",function(b){PP(this,b);},"cJ",function(b){SW(this,
b);},"cB",function(b){Ok(this,b);},"jL",function(){Du(this);},"jN",function(){Eq(this);},"gT",function(b){PT(this,b);},"iA",function(){return NP(this);},"hg",function(b){return Po(this,b);}],Hu,0,B,[],4,0,0,0,Di,0,B,[],3,3,0,["hi",function(b){return PZ(this,b);}],CL,0,B,[Cx,Di],3,3,0,["iK",function(b){return S9(this,b);},"hl",function(){return P2(this);},"W",function(b){return Oh(this,b);},"gB",function(b){return MO(this,b);},"f$",function(b){return OB(this,b);},"hT",function(b){return S7(this,b);},"d4",function()
{return M3(this);},"hi",function(b){return PZ(this,b);}],E3,0,B,[Di],3,3,0,["hi",function(b){return PZ(this,b);}],CO,0,B,[CL,CH,E3],3,3,0,["iK",function(b){return S9(this,b);},"hl",function(){return P2(this);},"W",function(b){return Oh(this,b);},"gB",function(b){return MO(this,b);},"f$",function(b){return OB(this,b);},"hT",function(b){return S7(this,b);},"d4",function(){return M3(this);},"hi",function(b){return PZ(this,b);}],Df,0,B,[CH],3,3,0,["dd",function(){return Qp(this);},"bV",function(b){return KO(this,
b);},"cN",function(b){return P8(this,b);},"ce",function(b){return Sf(this,b);},"hl",function(){return P2(this);},"W",function(b){return Oh(this,b);},"gB",function(b){return MO(this,b);},"f$",function(b){return OB(this,b);},"hT",function(b){return S7(this,b);},"d4",function(){return M3(this);}],C1,0,B,[CO,Df],1,3,0,["cK",function(b){return So(this,b);},"n",function(){return KK(this);},"iK",function(b){return S9(this,b);},"hl",function(){return P2(this);},"W",function(b){return Oh(this,b);},"gB",function(b){return MO(this,
b);},"f$",function(b){return OB(this,b);},"hT",function(b){return S7(this,b);},"d4",function(){return M3(this);},"hi",function(b){return PZ(this,b);},"dd",function(){return Qp(this);},"bV",function(b){return KO(this,b);},"cN",function(b){return P8(this,b);},"ce",function(b){return Sf(this,b);}],Kv,0,C1,[],4,3,0,["fh",function(){return SV(this);},"ht",function(b){O2(this,b);}],Hh,0,B,[Dn],4,3,0,["t",function(){return G6(this);}],He,0,B,[],4,3,0,0,CR,0,B,[],1,3,0,["jy",function(b){Ju(this,b);},"jl",function(b)
{return Fg(this,b);},"ii",function(b){Sa(this,b);},"kv",function(b){return Jv(this,b);},"hE",function(b){Rx(this,b);},"kb",function(b,c,d){return GJ(this,b,c,d);},"jk",function(b){return FE(this,b);},"gp",function(b){return KS(this,b);}],E0,0,B,[Dc],3,3,0,["gw",function(b,c){return Ns(this,b,c);},"iN",function(b){return Q$(this,b);},"hQ",function(b){return Md(this,b);},"dG",function(b){return RH(this,b);},"dC",function(b,c){return Lf(this,b,c);}],CA,0,B,[Cs,E0],3,3,0,["hK",function(b,c){return PK(this,b,c);
},"hO",function(b){return OR(this,b);},"c7",function(b){return Pn(this,b);},"gw",function(b,c){return Ns(this,b,c);},"iN",function(b){return Q$(this,b);},"hQ",function(b){return Md(this,b);},"dG",function(b){return RH(this,b);},"dC",function(b,c){return Lf(this,b,c);},"hl",function(){return P2(this);},"W",function(b){return Oh(this,b);},"gB",function(b){return MO(this,b);},"f$",function(b){return OB(this,b);},"hT",function(b){return S7(this,b);},"d4",function(){return M3(this);}],EN,"TeaVmJsonObject",23,B9,
[CA],4,3,0,["kl",function(b){return Go(this,b);},"kn",function(){return Hk(this);},"jZ",function(b,c){return Kn(this,b,c);},"e",function(){return On(this);},"eY",function(b){return OT(this,b);},"W",function(b){return Nc(this,b);},"eE",function(b){return Mc(this,b);},"f6",function(b){return Ou(this,b);},"fQ",function(){return LP(this);},"ce",function(b){return Mw(this,b);},"fd",function(){return LH(this);},"d2",function(b,c){return SB(this,b,c);},"ct",function(b){return KN(this,b);},"e4",function(){return Rs(this);
},"hK",function(b,c){return PK(this,b,c);},"hO",function(b){return OR(this,b);},"c7",function(b){return Pn(this,b);},"gw",function(b,c){return Ns(this,b,c);},"iN",function(b){return Q$(this,b);},"hQ",function(b){return Md(this,b);},"dG",function(b){return RH(this,b);},"dC",function(b,c){return Lf(this,b,c);},"hl",function(){return P2(this);},"gB",function(b){return MO(this,b);},"f$",function(b){return OB(this,b);},"hT",function(b){return S7(this,b);},"d4",function(){return M3(this);}],ED,0,B,[Bb],3,3,0,0,JQ,
0,B,[ED],0,3,0,["h5",function(b){N_(this,b);},"jz",function(b){H9(this,b);},"jm",function(b){return Nw(this,b);}],BG,0,B,[],4,3,Ew,0,Dd,0,Ce,[V],1,3,0,["e3",function(b,c,d){return QX(this,b,c,d);},"jt",function(b){return IO(this,b);},"jQ",function(){return D_(this);}],Ji,0,Dd,[],0,0,0,["ge",function(){return QH(this);}],Bx,0,B,[],0,3,0,0,ID,0,CV,[D1],4,0,0,["iE",function(b){return Ry(this,b);}],I7,0,B,[Ed],0,3,0,["dr",function(b){QK(this,b);},"fo",function(b){return Mh(this,b);}],DC,0,B,[Bb],3,0,0,0,I6,0,B,
[DC],0,3,0,["h$",function(b){K9(this,b);},"fo",function(b){return Mb(this,b);}],ET,0,B,[Bb],3,0,0,0,I5,0,B,[ET],0,3,0,["iq",function(b,c){Rt(this,b,c);},"jH",function(b,c){return LY(this,b,c);}],Bo,0,B,[Bm],0,3,FI,["I",function(){return CM(this);}],Hf,0,B,[],4,3,0,0,C0,0,B,[V],1,3,0,0,CC,0,B,[],0,3,ER,0,BD,"Boolean",5,B,[Bm,V],0,3,DP,["e2",function(){return QC(this);},"e",function(){return Me(this);},"z",function(b){return LM(this,b);}],B_,"IllegalArgumentException",5,N,[],0,3,0,0,HL,"IllegalCharsetNameException",
4,B_,[],0,3,0,0]);
$rt_metadata([Km,"NoSuchElementException",1,N,[],0,3,0,0,JU,0,B,[Ex],0,3,0,["dr",function(b){NC(this,b);},"fo",function(b){return Mo(this,b);}],Ci,0,B,[],3,3,0,0,Fu,0,B,[Ci],0,3,0,["fx",function(b,c){return Qy(this,b,c);}],Ir,0,B,[Bb],1,3,0,0,E5,0,B,[],3,3,0,0,DV,0,B,[E5],3,3,0,0,BM,0,B,[DV,Ei],1,3,0,["cd",function(b,c,d){Ln(this,b,c,d);}],C2,0,BM,[],0,3,0,0,IX,0,C2,[],0,3,0,["cd",function(b,c,d){L9(this,b,c,d);},"ju",function(){return H6(this);},"jq",function(b,c,d){Ea(this,b,c,d);},"hc",function(b){OU(this,
b);},"b4",function(b){RU(this,b);},"eX",function(b){NQ(this,b);},"iy",function(b){Sj(this,b);},"iz",function(){Oa(this);},"i7",function(){C3(this);}],Cj,0,B,[V,Bm],1,3,0,["je",function(){return Bd(this);}],Bl,0,Cj,[],12,3,T,0,En,0,B,[Cu],3,3,0,0,BL,0,B1,[En],1,3,0,0,Db,0,BL,[],0,0,0,["gq",function(){return N7(this);}],H5,0,Db,[],4,0,0,["t",function(){return Qj(this);}],Bp,0,B,[],4,3,Bg,0,DQ,0,B,[],3,3,0,0,IT,"Class",5,B,[DQ],0,3,0,["fI",function(){return MT(this);},"dj",function(){return SC(this);},"fZ",function()
{return KQ(this);}],J6,0,Bf,[],1,3,0,0,Jc,0,B,[],0,3,0,0,BZ,0,S,[V],0,3,H3,["z",function(b){return LR(this,b);}],GH,0,B,[],0,3,0,0,JI,0,BM,[],0,0,0,["d8",function(b){KU(this,b);}],C7,0,B,[],4,3,0,0,D8,0,B,[],4,3,0,0,I$,0,Ca,[B7],0,0,0,["s",function(){return RP(this);}],H0,0,BL,[],4,0,0,0,HZ,0,B5,[],4,0,0,0,B3,0,B,[Cu],3,3,0,["gt",function(b){OL(this,b);}],BF,0,B1,[B3],1,3,0,["t",function(){return Pp(this);},"gt",function(b){OL(this,b);}],H1,0,BF,[],4,0,0,0,BH,0,B,[V],0,3,Bc,0,Ey,0,B,[CK],4,3,0,["hy",function()
{return MJ(this);},"hU",function(b){return Qw(this,b);},"h2",function(b,c){return Np(this,b,c);}],Im,0,B,[],0,3,0,0,Gi,0,B,[Bb],1,3,0,0,I8,0,O,[],0,0,0,0,HS,0,Q,[],0,0,0,0,CZ,0,Ce,[V,CI,CJ,Fd],1,3,0,["ip",function(b,c,d){return L8(this,b,c,d);},"em",function(b){return KC(this,b);}],Dk,0,CZ,[],1,0,0,0,Jy,0,Dk,[],0,0,0,["iw",function(b){return Mr(this,b);}],FV,0,B,[],4,3,0,0,JS,0,Bn,[],0,0,0,0,DJ,0,B,[],3,3,0,0,Ke,0,B,[CS],0,3,0,["fA",function(){return Sv(this);},"iF",function(){return JE(this);}],HC,0,B,[],4,
3,0,0,JV,0,Bn,[],0,0,0,0,Ib,0,B,[],4,0,0,0,JT,0,Bn,[],0,0,0,0,Gf,0,B,[P],0,3,0,["f",function(b){return K5(this,b);},"be",function(b){return Kg(this,b);}]]);
$rt_metadata([IC,0,B,[Bb],1,3,0,0,JW,0,Bn,[],0,0,0,0,Ge,0,B,[P],0,3,0,["f",function(b){return Pu(this,b);},"bh",function(b){return Fp(this,b);}],Gg,0,B,[P],0,3,0,["f",function(b){return Qz(this,b);},"be",function(b){return FD(this,b);}],Gd,0,B,[P],0,3,0,["f",function(b){return SY(this,b);},"bh",function(b){return Hm(this,b);}],BA,0,B,[],1,3,0,0,BV,"Double",5,S,[V],0,3,EF,["bm",function(){return SQ(this);},"I",function(){return N5(this);},"e",function(){return L_(this);},"z",function(b){return S6(this,b);},"fK",
function(){return L0(this);},"fs",function(){return NH(this);}],Co,0,B,[],4,3,0,0,JO,0,BL,[],0,0,0,["n",function(){return RG(this);},"t",function(){return Rr(this);}],If,"Floor$1",9,B0,[],0,0,0,0,C6,0,B,[],3,3,0,0,GM,"ArrayList",1,BF,[B6,Bm,C6],0,3,0,["bu",function(b){L1(this,b);},"cO",function(b){return Oi(this,b);},"n",function(){return MR(this);},"gK",function(b,c){return Ll(this,b,c);},"b6",function(b){return Q7(this,b);},"jD",function(b){DK(this,b);}],EA,0,B9,[CO],4,0,0,["jS",function(){return Fe(this);
},"jp",function(b){return Gt(this,b);},"n",function(){return Nk(this);},"cK",function(b){return Q3(this,b);},"iK",function(b){return S9(this,b);},"hl",function(){return P2(this);},"W",function(b){return Oh(this,b);},"gB",function(b){return MO(this,b);},"f$",function(b){return OB(this,b);},"hT",function(b){return S7(this,b);},"d4",function(){return M3(this);},"hi",function(b){return PZ(this,b);}],BJ,"String",5,B,[Bm,V,CJ],0,3,Kl,["l",function(b){return Mt(this,b);},"d",function(){return P6(this);},"b8",function()
{return R$(this);},"hz",function(b){return QY(this,b);},"eq",function(b){return Pd(this,b);},"d5",function(b,c){return Mf(this,b,c);},"cw",function(b){return Pc(this,b);},"iG",function(b,c){return MF(this,b,c);},"iu",function(b){return Ru(this,b);},"bl",function(b,c){return Lc(this,b,c);},"g0",function(b){return RE(this,b);},"e",function(){return Nx(this);},"iS",function(){return Se(this);},"z",function(b){return QZ(this,b);},"ec",function(b){return Rg(this,b);},"bM",function(){return Mn(this);},"f4",function(b)
{return PN(this,b);}],HQ,0,O,[],0,0,0,0,HU,0,O,[],0,0,0,0,HP,0,O,[],0,0,0,0,HR,0,O,[],0,0,0,0,Ku,"NegativeArraySizeException",5,N,[],0,3,0,0,DB,0,CR,[],1,3,0,["g7",function(b,c){return MG(this,b,c);}],HN,0,DB,[],0,3,0,["gv",function(b,c,d,e,f,g,h){return SH(this,b,c,d,e,f,g,h);}],GE,0,Q,[],0,0,0,0,BS,0,B,[],0,3,BE,0,Gw,0,Q,[],0,0,0,0,Ip,0,B,[CB],0,3,0,["cT",function(b){LK(this,b);},"e_",function(b){Ka(this,b);}],Ij,0,B,[Ci],0,3,0,0,Ik,0,B,[Ci],0,3,0,["fx",function(b,c){return Of(this,b,c);}],D$,"NumberFormatException",
5,B_,[],0,3,0,0,Kf,0,C0,[],0,3,0,["hP",function(){return Rz(this);}],HY,0,B,[Eu],0,3,0,["fW",function(b){return Ox(this,b);},"ji",function(b){return FF(this,b);}],DT,"IllegalStateException",5,Bu,[],0,3,0,0,Dj,0,B,[CA,Df],1,3,0,["gj",function(){OC(this);},"he",function(){S0(this);},"e4",function(){return Pa(this);},"ct",function(b){return NA(this,b);},"iC",function(b,c){return Qn(this,b,c);},"gJ",function(){Lz(this);},"e",function(){return Pz(this);},"d2",function(b,c){return Mx(this,b,c);},"hK",function(b,c)
{return PK(this,b,c);},"hO",function(b){return OR(this,b);},"c7",function(b){return Pn(this,b);},"gw",function(b,c){return Ns(this,b,c);},"iN",function(b){return Q$(this,b);},"hQ",function(b){return Md(this,b);},"dG",function(b){return RH(this,b);},"dC",function(b,c){return Lf(this,b,c);},"hl",function(){return P2(this);},"W",function(b){return Oh(this,b);},"gB",function(b){return MO(this,b);},"f$",function(b){return OB(this,b);},"hT",function(b){return S7(this,b);},"d4",function(){return M3(this);},"dd",function()
{return Qp(this);},"bV",function(b){return KO(this,b);},"cN",function(b){return P8(this,b);},"ce",function(b){return Sf(this,b);}],J2,0,BA,[],0,0,0,0,JY,0,BA,[],0,0,0,0,JZ,0,BA,[],0,0,0,0,Fz,"NullPointerException",5,N,[],0,3,0,0,J0,0,Q,[],0,0,0,0,J1,0,Dx,[],0,0,0,0,Gy,0,O,[],0,0,0,0,Jw,0,B,[],4,3,0,0,GB,0,O,[],0,0,0,0,Gz,0,O,[],0,0,0,0,GC,0,Q,[],0,0,0,0,DX,0,S,[V],0,3,Rj,0,GF,0,Q,[],0,0,0,0,GA,0,Q,[],0,0,0,0,Cg,0,B,[],0,3,0,0,GD,0,Q,[],0,0,0,0,F8,"MapJsonObject",18,Dj,[],0,3,0,["b2",function(){return Ly(this);
},"c5",function(b){SP(this,b);},"iY",function(){return Lm(this);},"c1",function(b){return ON(this,b);},"bk",function(){return MW(this);}],JX,0,B,[DJ],4,0,0,["ij",function(b){return N$(this,b);},"dT",function(b,c){return Q9(this,b,c);},"jj",function(b,c){return Gh(this,b,c);}]]);
$rt_metadata([Ep,0,B,[],0,3,Cn,["cM",function(b){return RI(this,b);}],EI,"Logger",2,B,[],0,3,Ej,["ed",function(b){Lt(this,b);},"j8",function(b,c){return Il(this,b,c);},"iB",function(b,c){Rw(this,b,c);},"iQ",function(b,c,d){Oz(this,b,c,d);}],DL,0,B,[Bm],0,3,0,["fv",function(){return ND(this);},"cF",function(){return Ol(this);},"f7",function(){return NU(this);},"iX",function(b){NE(this,b);}],GI,0,B,[Ci],0,3,0,0,FO,0,Bx,[],0,0,0,0,FQ,0,Bx,[],0,0,0,0,FN,0,Bx,[],0,0,0,0,GZ,0,B,[P],0,3,0,["f",function(b){return RW(this,
b);},"bh",function(b){return Hq(this,b);}],FP,0,Bx,[],0,0,0,0,Fm,0,B,[P],0,3,0,["f",function(b){return Q1(this,b);},"be",function(b){return Gp(this,b);}],GX,0,B,[P],0,3,0,["f",function(b){return OM(this,b);},"be",function(b){return FL(this,b);}],Fq,0,B,[P],0,3,0,["f",function(b){return Rm(this,b);},"be",function(b){return Ig(this,b);}],GY,0,B,[P],0,3,0,["f",function(b){return Na(this,b);},"bh",function(b){return HT(this,b);}],Fr,0,B,[P],0,3,0,["f",function(b){return RJ(this,b);},"bh",function(b){return Kc(this,
b);}],Fo,0,B,[P],0,3,0,["f",function(b){return L$(this,b);},"bh",function(b){return Iv(this,b);}],GW,0,B,[P],0,3,0,["f",function(b){return MQ(this,b);},"be",function(b){return Hv(this,b);}],Jg,"BufferOverflowException",3,N,[],0,3,0,0,Dl,0,B,[],0,3,Bt,["f9",function(){return Lr(this);},"cR",function(){return QI(this);},"h_",function(){return SE(this);},"hN",function(){return QN(this);},"fw",function(){return QW(this);},"d",function(){return Pw(this);}],C_,0,B,[],4,3,DR,0,JP,0,Cg,[],0,0,0,0,JN,0,Cg,[],0,0,0,0,Jp,
0,Cm,[],0,3,0,0,J4,0,B,[P],0,3,0,["f",function(b){return KL(this,b);},"jn",function(b){return GL(this,b);}],HA,0,B,[],0,3,0,0,Gq,0,B,[EJ],4,0,0,["hu",function(b){return RC(this,b);},"ka",function(b){Iz(this,b);}],Hz,0,Bf,[],1,3,0,0,H2,0,Bf,[],1,3,0,0,BP,0,Cj,[],12,3,Ds,0,IK,"BufferUnderflowException",3,N,[],0,3,0,0,HF,0,BM,[],0,0,0,["d8",function(b){QQ(this,b);}],HV,0,B,[],0,3,0,0,F7,0,BF,[C6],0,0,0,["cO",function(b){return KA(this,b);},"n",function(){return Mu(this);}],BW,0,B,[],0,3,Dp,0]);
function $rt_array(cls,data){this.nv=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["@",": ","    at ","Caused by: ","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ","main","BIG_ENDIAN","LITTLE_ENDIAN","classes.wasm","cy","width","height","placeIndex","frameIndex","wasm","computeLinePixelRGBs","initAndComputeLinePixelRGBs","null","Index out of bounds",",","0",".","Null pointer",
"JSON does not allow non-finite numbers","JSON does not allow non-finite numbers.","\"\"","\\t","\\n","\\f","\\r","000","\\u","\\b","Cannot find META-INF/services/"," on classpath","number","object","string","boolean","New position "," is outside of range [0;","]","Exception raised in Future.compose()","[",", ","failed","succeeded","Result is already complete: ","Replacement preconditions do not hold","Action must be non-null","The last byte in src "," is outside of array of size ","Length "," must be non-negative",
"Offset ",")","OFF","SEVERE","WARNING","INFO","CONFIG","FINE","FINER","FINEST","ALL","IGNORE","REPLACE","REPORT","false","true","STRING","NUMBER","BOOLEAN","OBJECT","ARRAY","NULL","UNDEFINED","Using default built-in JSON factory which is not interoperable with the underlying platform! Be sure you haven\'t forgot to call Json.registerProvider().","Light","Sphere","The last char in dst ","Glass","Floor","Mirror","Default","Sphere.","UTF-8","Light.","global","","RETURN_NULL","TRACE_AND_RETURN_NULL","THROW_EXCEPTION"]);
BJ.prototype.toString=function(){return $rt_ustr(this);};
BJ.prototype.valueOf=BJ.prototype.toString;B.prototype.toString=function(){return $rt_ustr(Nz(this));};
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
=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(Tj);
(function(){var c;c=IN.prototype;c.getLength=c.j0;c.get=c.j_;c=JQ.prototype;c.handleEvent=c.jm;c=I7.prototype;c.handle=c.fo;c=I6.prototype;c.handle=c.fo;c=I5.prototype;c.apply=c.jH;c=JU.prototype;c.handle=c.fo;})();
})();

main()