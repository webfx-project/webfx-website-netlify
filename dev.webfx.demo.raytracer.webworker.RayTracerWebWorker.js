"use strict";
var main;(function(){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}Array.prototype.fill=Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?Math.max(len+start,0):Math.min(start,len);end=end===undefined?len:end|0;end=end<0?Math.max(len
+end,0):Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new Array(sz);data.fill(null);return new $rt_array(cls,data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new Array(sz));}function $rt_createNumericArray(cls,nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if
(typeof BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new Array(sz);var arr=new $rt_array($rt_longcls(),data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),new BigInt64Array(sz));};$rt_createLongArrayFromData=function(data){var buffer=new BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz)
{return $rt_createNumericArray($rt_charcls(),new Uint16Array(sz));}function $rt_createCharArrayFromData(data){var buffer=new Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new Int8Array(sz));}function $rt_createByteArrayFromData(data){var buffer=new Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),
new Int16Array(sz));}function $rt_createShortArrayFromData(data){var buffer=new Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new Int32Array(sz));}function $rt_createIntArrayFromData(data){var buffer=new Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new Int8Array(sz));}function $rt_createBooleanArrayFromData(data)
{var buffer=new Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new Float32Array(sz));}function $rt_createFloatArrayFromData(data){var buffer=new Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new Float64Array(sz));}function $rt_createDoubleArrayFromData(data)
{var buffer=new Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls()
{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}var $rt_javaExceptionProp=Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){err=new Error("Java exception thrown");if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,
ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,
dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]
|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,
0);}function $rt_createShortMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),
dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),
arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0)
{return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for
(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer
=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if
((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof console==="object"?$rt_createOutputFunction(function(msg){console.info(msg);}):function(){};var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof console==="object"?$rt_createOutputFunction(function(msg){console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data)
{var i=0;var packages=new Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName
="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass
=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k
<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f){return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args
=Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]
=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new DataView(new ArrayBuffer(8));var $rt_doubleToLongBits;var $rt_longBitsToDouble;if(typeof BigInt!=='function'){$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n)
{$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else {$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};$rt_longBitsToDouble=function(n){var hi=Number(BigInt.asIntN(32,n>>BigInt(32)));var lo=Number(BigInt.asIntN(32,
n&BigInt(0xFFFFFFFF)));$rt_numberConversionView.setInt32(0,lo,true);$rt_numberConversionView.setInt32(4,hi,true);return $rt_numberConversionView.getFloat64(0,true);};}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}function $rt_javaException(e){return e instanceof Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]
:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}
else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__
=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if(typeof BigInt!=="function"){Long.prototype.toString=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push(String.fromCharCode(48
+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val, -(val<0)|0);};Long_fromNumber=function(val){if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000
*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=BigInt(0);Long_create=function(lo,hi){return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};Long_fromInt=function(val){return BigInt(val);};Long_fromNumber=function(val){return BigInt(val>=0?Math.floor(val):Math.ceil(val));};Long_toNumber=function(val){return Number(val);};Long_hi=function(val){return Number(BigInt.asIntN(64,val>>BigInt(32)))|0;};Long_lo=function(val)
{return Number(BigInt.asIntN(32,val))|0;};}var $rt_imul=Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index)
{if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.dS=f;}
function $rt_cls(cls){return GY(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return U8(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.i.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return Yc;}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(V1());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return Bx();}
function $rt_setThread(t){return Dt(t);}
function $rt_createException(message){return Yd(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var G=$rt_throw;var Df=$rt_compare;var Ye=$rt_nullCheck;var F=$rt_cls;var U=$rt_createArray;var Bh=$rt_isInstance;var Qf=$rt_nativeThread;var WV=$rt_suspending;var W$=$rt_resuming;var Vd=$rt_invalidPointer;var D=$rt_s;var L=$rt_eraseClinit;var Ez=$rt_imul;var W=$rt_wrapException;var Yf=$rt_checkBounds;var Yg=$rt_checkUpperBound;var Yh=$rt_checkLowerBound;var Yi=$rt_wrapFunction0;var Yj=$rt_wrapFunction1;var Yk=$rt_wrapFunction2;var Yl=$rt_wrapFunction3;var Ym=$rt_wrapFunction4;var C=$rt_classWithoutFields;var C2
=$rt_createArrayFromData;var Yn=$rt_createCharArrayFromData;var Yo=$rt_createByteArrayFromData;var Yp=$rt_createShortArrayFromData;var VT=$rt_createIntArrayFromData;var Yq=$rt_createBooleanArrayFromData;var Yr=$rt_createFloatArrayFromData;var Ys=$rt_createDoubleArrayFromData;var O3=$rt_createLongArrayFromData;var Yt=$rt_createBooleanArray;var DB=$rt_createByteArray;var Yu=$rt_createShortArray;var BI=$rt_createCharArray;var E1=$rt_createIntArray;var Xa=$rt_createLongArray;var Yv=$rt_createFloatArray;var Yw=$rt_createDoubleArray;var Df
=$rt_compare;var Yx=$rt_castToClass;var Yy=$rt_castToInterface;var Yz=Long_toNumber;var H=Long_fromInt;var YA=Long_fromNumber;var Q=Long_create;var BL=Long_ZERO;var YB=Long_hi;var DK=Long_lo;
function B(){this.f=null;this.$id$=0;}
function PZ(){var a=new B();E(a);return a;}
function DH(b){var c;if(b.f===null)Ea(b);if(b.f.u===null)b.f.u=Bx();else if(b.f.u!==Bx())G(JS(D(0)));c=b.f;c.x=c.x+1|0;}
function Be(b){var c,d;if(!Cs(b)&&b.f.u===Bx()){c=b.f;d=c.x-1|0;c.x=d;if(!d)b.f.u=null;Cs(b);return;}G(P9());}
function VM(b){Sc(b,1);}
function Sc(b,c){var d,$p,$z;$p=0;if(W$()){var $T=Qf();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.f===null)Ea(b);if(b.f.u===null)b.f.u=Bx();if(b.f.u===Bx()){d=b.f;d.x=d.x+c|0;return;}$p=1;case 1:T2(b,c);if(WV()){break _;}return;default:Vd();}}Qf().s(b,c,d,$p);}
function Ea(b){b.f=XD();}
function T2(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.bj=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.hh=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=X7(callback);return thread.suspend(function(){try{X1(b,c,callback);}catch($e){callback.hh($rt_exception($e));}});}
function X1(b,c,d){var e,f,g;e=Bx();if(b.f===null){Ea(b);Dt(e);f=b.f;f.x=f.x+c|0;d.bj(null);return;}if(b.f.u===null){b.f.u=e;Dt(e);f=b.f;f.x=f.x+c|0;d.bj(null);return;}g=b.f;if(g.M===null)g.M=LY();Mb(g.M,Xv(e,b,c,d));}
function VR(b){My(b,1);}
function My(b,c){var d;if(!Cs(b)&&b.f.u===Bx()){d=b.f;d.x=d.x-c|0;if(d.x>0)return;d.u=null;if(d.M!==null&&!DG(d.M))L3(WM(b));else Cs(b);return;}G(P9());}
function Qv(b){var c,d,e;if(!Cs(b)&&b.f.u===null){c=b.f;if(c.M!==null&&!DG(c.M)){d=c.M;e=NY(d);c.M=null;e.dP();}return;}}
function Cs(a){var b,c;b=a.f;if(b===null)return 1;a:{b:{if(b.u===null){if(b.M!==null){c=b.M;if(!DG(c))break b;}if(b.en===null)break a;c=b.en;if(DG(c))break a;}}return 0;}KM(a);return 1;}
function KM(a){a.f=null;}
function E(a){}
function EG(a){return GY(a.constructor);}
function PK(a){return Db(a);}
function L8(a,b){return a!==b?0:1;}
function OS(a){return (((K()).e(D(1))).e(FR(Db(a)))).d();}
function Db(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function Uy(a){var b,c,d;if(!Bh(a,Cq)){b=a;if(b.constructor.$meta.item===null)G(Vk());}c=Ma(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function Ud(b){Qv(b);}
function MK(b,c,d,e){var f;Dt(b);c.f.u=b;f=c.f;f.x=f.x+d|0;e.bj(null);}
function Bo(){var a=this;B.call(a);a.db=null;a.f4=null;a.ck=0;a.cE=0;}
function YC(a,b,c,d){var e=new Bo();HQ(e,a,b,c,d);return e;}
function YD(){var a=new Bo();JV(a);return a;}
function YE(a){var b=new Bo();FC(b,a);return b;}
function YF(a){var b=new Bo();J1(b,a);return b;}
function HQ(a,b,c,d,e){if(e)a.cv();a.ck=d;a.cE=e;a.db=b;a.f4=c;}
function JV(a){a.ck=1;a.cE=1;a.cv();}
function FC(a,b){a.ck=1;a.cE=1;a.cv();a.db=b;}
function J1(a,b){a.ck=1;a.cE=1;a.cv();a.f4=b;}
function Q4(a){return a;}
function PV(a){return a.db;}
var BC=C(Bo);
function YG(){var a=new BC();Du(a);return a;}
function YH(a){var b=new BC();Ef(b,a);return b;}
function Du(a){JV(a);}
function Ef(a,b){FC(a,b);}
var O=C(BC);
function YI(){var a=new O();Bq(a);return a;}
function Yd(a){var b=new O();DZ(b,a);return b;}
function Bq(a){Du(a);}
function DZ(a,b){Ef(a,b);}
var Dw=C(O);
function G3(){var a=new Dw();HT(a);return a;}
function Ct(a){var b=new Dw();SZ(b,a);return b;}
function HT(a){Bq(a);}
function SZ(a,b){DZ(a,b);}
var Do=C(0);
function Qe(a,b){return b;}
function OV(a,b){if(b===null)return null;if(Bh(b,CI))return a.gX(b);if(!Bh(b,CM))return a.c7(b);return a.gJ(b);}
function R5(a,b){return b.bv();}
function SG(a,b){return b.bv();}
var FH=C(0);
var E3=C(0);
function Tk(a){return (E7(a.bv(),a,K())).d();}
function RC(b,c){var d,e,f,g,h;c.j(123);d=1;e=b.e7();f=0;g=e.r();while(f<g){h=e.hB(f);if(!d)c.j(44);Ht(h,c);c.j(58);E7(b.cH(h),b,c);d=0;f=f+1|0;}return c.j(125);}
function Sa(b,c){return (QG(b,D(2),c.j(91))).j(93);}
function QG(b,c,d){var e,f;e=b.r();f=0;while(f<e){if(f>0)d.e(c);E7(b.cU(f),b,d);f=f+1|0;}return d;}
function E7(b,c,d){Xr();switch(YJ.data[Bl(c.cr(b))]){case 1:return d.e(D(3));case 2:return RC(c.b_(b),d);case 3:return Sa(c.dr(b),d);case 4:return d.e(M2(c.bf(b)));case 5:return d.U(c.bf(b));case 6:return Ht(c.bf(b),d);default:}return d;}
function OL(b){if(b.cL(46)>0&&b.cL(101)<0&&b.cL(69)<0){while(b.eF(D(4))){b=b.bM(0,b.c()-1|0);}if(b.eF(D(5)))b=b.bM(0,b.c()-1|0);}return b;}
function M2(b){if(b!==null){Ss(b);return OL(b.d());}G(Ch(D(6)));}
function Ss(b){var c;a:{b:{if(b!==null){if(b instanceof B7){if((PA(0.0)).D(b))break b;c=b;if(!c.fD()&&!c.fU())break b;G(Ch(D(7)));}if(b instanceof Ca&&!(VV(0.0)).D(b)){c=b;if(c.fD())break a;if(c.fU())break a;}}}return;}G(Ch(D(8)));}
function Ht(b,c){var d,e,f,g,h,i,j;if(QY(b))return c.e(D(9));d=0;e=b.c();c.j(34);f=0;while(f<e){a:{g=b.o(f);switch(g){case 8:break;case 9:c.e(D(10));break a;case 10:c.e(D(11));break a;case 12:c.e(D(12));break a;case 13:c.e(D(13));break a;case 34:case 92:c.j(92);c.j(g);break a;case 47:if(d==60)c.j(92);c.j(g);break a;default:if(g>=32){c.j(g);break a;}h=FR(g);i=K();Y(Y(i,D(14)),h);j=Bg(i);(c.e(D(15))).e(j.hi(j.c()-4|0));break a;}c.e(D(16));}f=f+1|0;d=g;}return c.j(34);}
var CT=C(0);
function TZ(a){return a.b_(a.di());}
var CP=C(0);
function G5(){var a=this;B.call(a);a.d8=null;a.fC=null;a.e_=0;a.fN=0;}
function VO(a,b){var c=new G5();Rk(c,a,b);return c;}
function Rk(a,b,c){E(a);a.d8=b;a.fC=c;}
function Qm(a){return B9(a.d8);}
function Qx(a,b){return BY(a.fC)<b?0:1;}
function Rq(a,b){a.e_=b;}
function UU(a,b){a.fN=b;}
var Bv=C(0);
var X=C();
function B$(a){E(a);}
var Bb=C(0);
function Cu(){X.call(this);this.dF=0;}
var YK=null;var YL=null;function BW(){BW=L(Cu);QM();}
function Rt(a){var b=new Cu();IG(b,a);return b;}
function IG(a,b){BW();B$(a);a.dF=b;}
function Ii(b,c){BW();if(!(c>=2&&c<=36))c=10;return ((Xo(20)).eh(b,c)).d();}
function FR(b){BW();return Mc(b,4);}
function Hz(b){BW();return Ii(b,10);}
function G_(b,c){var d,e,f,g,h;BW();if(c>=2&&c<=36){if(b!==null&&!b.ch()){a:{d=0;e=0;switch(b.o(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.c())G(X5());while(e<b.c()){g=e+1|0;h=FZ(b.o(e));if(h<0)G(Dc((((K()).e(D(17))).e(b)).d()));if(h>=c)G(Dc((((((K()).e(D(18))).w(c)).e(D(19))).e(b)).d()));f=Ez(c,f)+h|0;if(f<0){if(g==b.c()&&f==(-2147483648)&&d)return (-2147483648);G(Dc((((K()).e(D(20))).e(b)).d()));}e=g;}if(d)f= -f|0;return f;}G(Dc(D(21)));}G(Dc((((K()).e(D(22))).w(c)).d()));}
function E8(b){BW();return G_(b,10);}
function Bc(b){BW();if(b>=(-128)&&b<=127){G9();return YL.data[b+128|0];}return Rt(b);}
function G9(){var b;BW();a:{if(YL===null){YL=U(Cu,256);b=0;while(true){if(b>=YL.data.length)break a;YL.data[b]=Rt(b-128|0);b=b+1|0;}}}}
function NE(a){return a.dF;}
function SK(a){return Hz(a.dF);}
function G8(b){var c,d,e;BW();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function QM(){YK=F($rt_intcls());}
var I1=C(BC);
function Vk(){var a=new I1();Tp(a);return a;}
function Tp(a){Du(a);}
var Dp=C(0);
var FN=C(0);
function HO(){return VS();}
function M0(a,b){if(a.dv(b))return;G(JS(D(23)));}
var B4=C();
var YM=null;var YN=null;var YO=null;var YP=null;var YQ=null;function PM(){PM=L(B4);TA();}
function TA(){YM=VT([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);YN=O3([H(1),H(10),H(100),H(1000),H(10000),H(100000),H(1000000),H(10000000),H(100000000),H(1000000000),Q(1410065408, 2),Q(1215752192, 23),Q(3567587328, 232),Q(1316134912, 2328),Q(276447232, 23283),Q(2764472320, 232830),Q(1874919424, 2328306),Q(1569325056, 23283064),Q(2808348672, 232830643)]);YO=O3([H(1),H(10),H(100),H(10000),H(100000000),Q(1874919424, 2328306)]);YP=Vw();YQ=W0();}
var Cf=C(0);
function FP(){X.call(this);this.dU=BL;}
var YR=null;function Jc(){Jc=L(FP);Sf();}
function Xi(a){var b=new FP();I8(b,a);return b;}
function I8(a,b){Jc();B$(a);a.dU=b;}
function Ev(b){Jc();return Xi(b);}
function Mx(a){return DK(a.dU);}
function GT(b){Jc();return ((K()).ix(b)).d();}
function Rn(a){return GT(a.dU);}
function DP(b,c){return Long_udiv(b, c);}
function GR(b,c){return Long_urem(b, c);}
function Sf(){YR=F($rt_longcls());}
var B2=C(0);
var ED=C(0);
function B3(){var a=this;B.call(a);a.fK=BL;a.gq=BL;a.hl=null;a.h4=null;a.gQ=0;a.i1=null;}
var YS=null;var YT=null;var YU=0;var YV=0;var YW=null;function FG(){FG=L(B3);N0();}
function U1(a){var b=new B3();HC(b,a);return b;}
function YX(a,b){var c=new B3();E4(c,a,b);return c;}
function HC(a,b){FG();E4(a,null,b);}
function E4(a,b,c){var d;FG();E(a);a.hl=PZ();a.gQ=1;a.h4=c;a.i1=b;d=YU;YU=d+1|0;a.fK=H(d);}
function Dt(b){FG();if(YT!==b)YT=b;YT.gq=I0();}
function Bx(){FG();return YT;}
function LW(a){return a.fK;}
function N0(){YS=U1(D(24));YT=YS;YU=1;YV=1;YW=WX();}
var Bf=C(0);
function JD(b){return b;}
var EY=C(0);
var JJ=C();
function Ul(a,b){return a.jV(b);}
function O7(a){return a.jS();}
var C_=C(0);
var Hv=C();
function XX(){var a=new Hv();QO(a);return a;}
function QO(a){E(a);}
function Ob(a){return Iu(a);}
function Iu(a){return UQ();}
var FU=C();
var YY=null;function U4(){U4=L(FU);RE();}
function RE(){YY=E1((E9()).data.length);YY.data[Bl(YZ)]=1;YY.data[Bl(Y0)]=2;YY.data[Bl(Y1)]=3;}
var GA=C();
function MO(b){return b;}
function DG(b){return b.length?0:1;}
function Mb(b,c){var d;d=MO(c);b.push(d);}
function NY(b){return b.shift();}
function Jj(){B.call(this);this.fw=null;}
function Xk(a){var b=new Jj();Qn(b,a);return b;}
function Qn(a,b){E(a);a.fw=b;}
function RK(a,b){Jm(a,b);}
function Jm(a,b){HX(a.fw,b);}
var Fe=C(0);
function Jf(){B.call(this);this.eJ=null;}
function X8(a){var b=new Jf();Uh(b,a);return b;}
function Uh(a,b){E(a);a.eJ=b;}
function Ow(a,b){GP(a.eJ,b);}
function BK(){var a=this;B.call(a);a.n=null;a.S=null;}
function FE(a){E(a);}
var E$=C(0);
var Fk=C(0);
function Qz(b){return Xg(b);}
function QT(a,b){return a.fi(b,Wl());}
var Dg=C(0);
var Cl=C();
function E2(a){E(a);}
function EP(a,b,c){c.bI(b);}
function DO(a,b,c){c.b2(b);}
function Is(a,b,c){var d;EQ(b,D(25));EQ(c,D(26));d=U6(b,c);a.bF(d);return d;}
function Ce(){var a=this;Cl.call(a);a.B=null;a.Q=null;}
var Y2=null;function Da(){Da=L(Ce);Tt();}
function Y3(){var a=new Ce();DX(a);return a;}
function DX(a){Da();E2(a);}
function Tf(a){var b,c;DH(a);try{if(a.B instanceof CH)b=null;else{c=a.B;Da();b=c!==Y2?a.B:null;}return b;}finally{Be(a);}}
function N1(a,b){var c;EQ(b,D(27));c=!Bh(b,B0)?V9(a,b):b;a.bF(c);return a;}
function HU(a,b){var c,d,e,$$je;DH(a);a:{b:{try{c=a.B;if(c===null)break b;Be(a);}catch($$e){$$je=W($$e);d=$$je;break a;}if(c instanceof CH)DO(a,c.dp,b);else{Da();if(c===Y2)c=null;EP(a,c,b);}return;}c:{try{if(a.Q===null){a.Q=b;break c;}if(a.Q instanceof Fd)e=a.Q;else{e=XE();e.bx(a.Q);a.Q=e;}e.bx(b);break c;}catch($$e){$$je=W($$e);d=$$je;break a;}}try{Be(a);}catch($$e){$$je=W($$e);d=$$je;break a;}return;}Be(a);G(d);}
function Gd(a,b){var c,d,$$je;DH(a);a:{b:{c:{try{if(a.B===null)break c;Be(a);}catch($$e){$$je=W($$e);c=$$je;break b;}return 0;}d:{try{if(b!==null){c=b;break d;}Da();c=Y2;break d;}catch($$e){$$je=W($$e);c=$$je;break b;}}try{a.B=c;d=a.Q;a.Q=null;Be(a);break a;}catch($$e){$$je=W($$e);c=$$je;}}Be(a);G(c);}if(d!==null)EP(a,b,d);return 1;}
function UC(a,b){var c,d,$$je;if(b===null)b=R1(null);DH(a);a:{b:{c:{try{if(a.B===null)break c;Be(a);}catch($$e){$$je=W($$e);c=$$je;break b;}return 0;}try{a.B=VZ(b);d=a.Q;a.Q=null;Be(a);break a;}catch($$e){$$je=W($$e);c=$$je;}}Be(a);G(c);}if(d!==null)DO(a,b,d);return 1;}
function SE(a){var b,c,d,$$je;DH(a);a:{b:{try{if(!(a.B instanceof CH))break b;b=a.B.dp.cR();c=K();Gg(Y(Y(c,D(28)),b),125);b=Bg(c);Be(a);}catch($$e){$$je=W($$e);b=$$je;break a;}return b;}c:{try{if(a.B!==null)break c;Be(a);}catch($$e){$$je=W($$e);b=$$je;break a;}return D(29);}d:{try{b=a.B;Da();if(b!==Y2)break d;Be(a);}catch($$e){$$je=W($$e);b=$$je;break a;}return D(30);}try{d=XW(D(31));a.iV(a.B,d);d.e(D(32));b=d.d();Be(a);}catch($$e){$$je=W($$e);b=$$je;break a;}return b;}Be(a);G(b);}
function OB(a,b,c){c.U(b);}
function Tt(){Y2=PZ();}
var DU=C(Ce);
function Ls(a){DX(a);}
var C5=C(0);
var CB=C(Bo);
function Y4(a){var b=new CB();IE(b,a);return b;}
function Y5(a){var b=new CB();Hh(b,a);return b;}
function IE(a,b){FC(a,b);}
function Hh(a,b){J1(a,b);}
var CG=C(CB);
function Y6(a){var b=new CG();Gq(b,a);return b;}
function Gq(a,b){IE(a,b);}
var D6=C(0);
function N8(a,b,c){return Ph(C2(B,[a.c_(b),c]));}
function Rj(a,b){En();return Y7.D(a.h8(b));}
function ND(a,b){return Tl(a.c_(b));}
function PE(a,b){return Ek(a.c_(b));}
function TB(a,b,c){return Ek(a.gO(b,c));}
var CM=C(0);
function LD(a,b){return a.b_(a.cH(b));}
function SF(a,b){return a.bf(a.cH(b));}
var D9=C(0);
var CS=C(0);
function Us(a,b){return LD(a,b);}
function LZ(a,b,c){return a.f1(b,a.gU(c));}
var D_=C(0);
var KP=C(Dw);
function Pi(){var a=new KP();Rc(a);return a;}
function Rc(a){HT(a);}
function DY(){B.call(this);this.hj=null;}
var Y8=null;var Y9=null;function TC(){TC=L(DY);Uw();}
function Qj(a){var b=new DY();F2(b,a);return b;}
function F2(a,b){TC();E(a);a.hj=b;}
function Uw(){Y8=Qj(D(33));Y9=Qj(D(34));}
var J$=C();
function HF(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.eH.data;f=b.fV;b.fV=f+1|0;g=NW(e[f]);h=(g%2|0)!=1?0:1;c=c+Ez(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function GB(b){var c,d;c=HF(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function NW(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
var FJ=C(0);
var Eu=C(0);
var ET=C(0);
var CA=C();
function D8(a){E(a);}
function MI(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.gZ(f[c]);e=e+1|0;c=g;}}
var EL=C(CA);
var Y$=null;function TI(){TI=L(EL);O8();}
function V4(){var a=new EL();Ku(a);return a;}
function Ku(a){TI();D8(a);}
function NN(a,b){QS(b);}
function O8(){Y$=V4();}
var Fb=C(0);
var Bm=C();
var GQ=C(Bm);
function It(){var a=this;B.call(a);a.eq=null;a.fR=null;a.dq=null;a.e$=null;a.bT=null;}
function V0(){var a=new It();Q8(a);return a;}
function Q8(a){E(a);}
function Kz(a,b,c){if(b!==null)a.eq=b;if(c!==null)a.fR=c;return a;}
function Kr(a){var b;if(a.dq===null){b=Hu(a.eq.fO());if(b.y())a.dq=b.s();}return a.dq;}
function IQ(a){var b,c;a:{if(a.bT===null){a.bT=Kr(a);if(a.e$!==null){b=a.e$.t();while(true){if(!b.y())break a;c=b.s();a.bT=c.g(a.bT);}}}}return a.bT;}
function Cz(){var a=this;B.call(a);a.b=null;a.l=0;}
function Y_(){var a=new Cz();EM(a);return a;}
function Xo(a){var b=new Cz();Et(b,a);return b;}
function Za(a){var b=new Cz();K0(b,a);return b;}
function Zb(a){var b=new Cz();Iy(b,a);return b;}
function EM(a){Et(a,16);}
function Et(a,b){E(a);a.b=BI(b);}
function K0(a,b){Iy(a,b);}
function Iy(a,b){var c;E(a);a.b=BI(b.c());c=0;while(c<a.b.data.length){a.b.data[c]=b.o(c);c=c+1|0;}a.l=b.c();}
function KC(a,b){return a.e5(a.l,b);}
function EF(a,b){return a.ct(a.l,b);}
function Fa(a,b,c){var d,e,f;if(b>=0&&b<=a.l){if(c===null)c=D(3);else if(c.ch())return a;a.bG(a.l+c.c()|0);d=a.l-1|0;while(d>=b){a.b.data[d+c.c()|0]=a.b.data[d];d=d+(-1)|0;}a.l=a.l+c.c()|0;d=0;while(d<c.c()){e=a.b.data;f=b+1|0;e[b]=c.o(d);d=d+1|0;b=f;}return a;}G(Pi());}
function Ho(a,b){return a.eh(b,10);}
function No(a,b,c){return a.gK(a.l,b,c);}
function Te(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)Ba(a,b,b+1|0);else{Ba(a,b,b+2|0);f=a.b.data;g=b+1|0;f[b]=45;b=g;}a.b.data[b]=CF(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Ez(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;Ba(a,b,b+i|0);if(e)l=b;else{f=a.b.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.b.data;g=l+1|0;f[l]=CF(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function Kk(a,b){return a.ex(a.l,b);}
function Lu(a,b,c){return a.id(b,c,10);}
function Mf(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(I3(c,BL)){e=0;c=Vh(c);}a:{f=H(d);if(I3(c,f)){if(e)Ba(a,b,b+1|0);else{Ba(a,b,b+2|0);g=a.b.data;h=b+1|0;g[b]=45;b=h;}a.b.data[b]=CF(DK(c),d);}else{i=1;j=H(1);while(true){k=N(j,f);if(CX(k,j))break;if(IF(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;Ba(a,b,b+i|0);if(e)l=b;else{g=a.b.data;l=b+1|0;g[b]=45;}while(true){if(CX(j,BL))break a;g=a.b.data;h=l+1|0;g[l]=CF(DK(Bd(c,j)),d);c=Dd(c,j);j=Bd(j,f);l=h;}}}return a;}
function Jr(a,b){return a.d0(a.l,b);}
function IC(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=Df(c,0.0);if(!d){Ba(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=48;e=a.b.data;f=d+1|0;e[d]=46;a.b.data[f]=48;return a;}if(!d){Ba(a,b,b+4|0);e=a.b.data;d=b+1|0;e[b]=45;e=a.b.data;f=d+1|0;e[d]=48;e=a.b.data;d=f+1|0;e[f]=46;a.b.data[d]=48;return a;}if(isNaN(c)?1:0){Ba(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=78;e=a.b.data;f=d+1|0;e[d]=97;a.b.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Ba(a,b,b+8|0);d=b;}else{Ba(a,b,b+9|0);e=a.b.data;d=b+1|0;e[b]=45;}e=a.b.data;f=d+
1|0;e[d]=73;e=a.b.data;d=f+1|0;e[f]=110;e=a.b.data;f=d+1|0;e[d]=102;e=a.b.data;d=f+1|0;e[f]=105;e=a.b.data;f=d+1|0;e[d]=110;e=a.b.data;d=f+1|0;e[f]=105;e=a.b.data;f=d+1|0;e[d]=116;a.b.data[f]=121;return a;}PM();g=YP;KG(c,g);h=g.cQ;i=g.c3;j=g.eg;k=1;l=1;if(j)l=2;m=18;n=OC(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=B_(m,k+1|0);i=0;}else{h=Bd(h,YN.data[ -i|0]);m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(!(i>(-100)&&i<100))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;Ba(a,b,b+d|0);if
(!j)o=b;else{e=a.b.data;o=b+1|0;e[b]=45;}p=Q(1569325056, 23283064);q=0;while(q<m){if(CX(p,BL))r=0;else{r=DK(Bd(h,p));h=Dd(h,p);}e=a.b.data;d=o+1|0;e[o]=(48+r|0)&65535;k=k+(-1)|0;if(k)o=d;else{e=a.b.data;o=d+1|0;e[d]=46;}p=Bd(p,H(10));q=q+1|0;}if(i){e=a.b.data;d=o+1|0;e[o]=69;if(i>=0)f=d;else{i= -i|0;e=a.b.data;f=d+1|0;e[d]=45;}if(i>=100){e=a.b.data;d=f+1|0;e[f]=(48+(i/100|0)|0)&65535;i=i%100|0;e=a.b.data;o=d+1|0;e[d]=(48+(i/10|0)|0)&65535;}else if(i<10)o=f;else{e=a.b.data;o=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.b.data[o]
=(48+(i%10|0)|0)&65535;}return a;}
function OC(b){var c,d,e,f;c=H(1);d=0;e=16;PM();f=YO.data.length-1|0;while(f>=0){if(CW(Dd(b,N(c,YO.data[f])),BL)){d=d|e;c=N(c,YO.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function K6(a,b){return a.fo(a.l,b);}
function KL(a,b,c){Ba(a,b,b+1|0);a.b.data[b]=c;return a;}
function Jd(a,b,c){return a.ct(b,c===null?D(3):c.d());}
function EH(a,b){var c;if(a.b.data.length>=b)return;c=a.b.data.length>=1073741823?2147483647:B_(b,B_(a.b.data.length*2|0,5));a.b=NF(a.b,c);}
function El(a){return O9(a.b,0,a.l);}
function Kb(a){return a.l;}
function HD(a,b,c,d){return a.dX(a.l,b,c,d);}
function Gs(a,b,c,d,e){var f,g;if(d<=e&&e<=c.c()&&d>=0){Ba(a,b,(b+e|0)-d|0);while(d<e){f=a.b.data;g=b+1|0;f[b]=c.o(d);d=d+1|0;b=g;}return a;}G(G3());}
function JQ(a,b,c,d,e){var f,g,h,i;if(b>c)G(Ct(D(35)));while(b<c){f=d.data;g=e+1|0;h=a.b.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function JL(a,b){a.l=b;}
function Ba(a,b,c){var d,e;d=a.l-b|0;a.bG((a.l+c|0)-b|0);e=d-1|0;while(e>=0){a.b.data[c+e|0]=a.b.data[b+e|0];e=e+(-1)|0;}a.l=a.l+(c-b|0)|0;}
var C1=C(0);
var Gf=C(Cz);
function Vb(a){var b=new Gf();T0(b,a);return b;}
function K(){var a=new Gf();Tx(a);return a;}
function XW(a){var b=new Gf();Mp(b,a);return b;}
function T0(a,b){Et(a,b);}
function Tx(a){EM(a);}
function Mp(a,b){K0(a,b);}
function Y(a,b){KC(a,b);return a;}
function Mo(a,b){EF(a,b);return a;}
function BA(a,b){Ho(a,b);return a;}
function R3(a,b){Kk(a,b);return a;}
function PO(a,b){Jr(a,b);return a;}
function Gg(a,b){K6(a,b);return a;}
function ST(a,b,c,d){HD(a,b,c,d);return a;}
function Ra(a,b,c){Lu(a,b,c);return a;}
function Tn(a,b,c){IC(a,b,c);return a;}
function M8(a,b,c,d,e){Gs(a,b,c,d,e);return a;}
function T6(a,b,c){Jd(a,b,c);return a;}
function NC(a,b,c){KL(a,b,c);return a;}
function Ug(a,b,c){Fa(a,b,c);return a;}
function Uo(a,b){JL(a,b);}
function QA(a,b,c,d,e){JQ(a,b,c,d,e);}
function On(a,b,c,d,e){return a.hL(b,c,d,e);}
function Oh(a){return Kb(a);}
function Bg(a){return El(a);}
function Uu(a,b){EH(a,b);}
function Mt(a,b,c){return a.hn(b,c);}
function LV(a,b,c){return a.iD(b,c);}
function Qu(a,b,c){return a.hv(b,c);}
function Pe(a,b,c){return a.hZ(b,c);}
function UH(a,b,c){return a.hf(b,c);}
var FB=C();
var Zc=null;function UL(){UL=L(FB);SX();}
function Kp(b){var c,d;UL();c=Zc.cJ(b);if(c===null){d=Zc;c=V0();d.bn(b,c);}return c;}
function Fv(b,c,d){var e,f,g,h,i,j;UL();e=Kp(b);f=Kz(e,c,d);g=IQ(f);if(g!==null)return g;e=f.fR;DE();if(e!==Zd){h=b.im();i=K();Y(Y(i,D(36)),h);j=Bg(i);if(e===Ze)G(JS(j));e=Lk();Mv();e.iM(Zf,j);}return null;}
function SX(){Zc=UM();}
var JP=C(O);
function OG(){var a=new JP();Ui(a);return a;}
function Ui(a){Bq(a);}
var Hd=C(CB);
function Wt(a){var b=new Hd();Mr(b,a);return b;}
function Mr(a,b){Hh(a,b);}
function Co(){B.call(this);this.de=null;}
function E_(a){E(a);}
function Op(a){var b,c,d;b=K();b.j(123);c=(a.fZ()).t();if(c.y()){d=c.s();b.U(d.br()!==a?d.br():D(37));b.j(61);b.U(d.bQ()!==a?d.bQ():D(37));}while(c.y()){b.e(D(38));d=c.s();b.U(d.br()!==a?d.br():D(37));b.j(61);b.U(d.bQ()!==a?d.bQ():D(37));}b.j(125);return b.d();}
var Cq=C(0);
function D3(){var a=this;Co.call(a);a.z=0;a.h=null;a.E=0;a.f$=0.0;a.b9=0;}
function UM(){var a=new D3();IX(a);return a;}
function Zg(a){var b=new D3();Ec(b,a);return b;}
function Zh(a,b){var c=new D3();KF(c,a,b);return c;}
function R7(a,b){return U(CL,b);}
function IX(a){Ec(a,16);}
function Ec(a,b){KF(a,b,0.75);}
function Kv(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function KF(a,b,c){var d;E_(a);if(b>=0&&c>0.0){d=Kv(b);a.z=0;a.h=a.c5(d);a.f$=c;EW(a);return;}G(HG());}
function EW(a){a.b9=a.h.data.length*a.f$|0;}
function Sg(a,b){var c;c=GG(a,b);if(c===null)return null;return c.T;}
function GG(a,b){var c,d,e;if(b===null)c=C8(a);else{d=ES(b);e=d&(a.h.data.length-1|0);c=CY(a,b,e,d);}return c;}
function CY(a,b,c,d){var e,f;e=a.h.data[c];while(e!==null){if(e.cf==d){f=e.bc;if(G6(b,f))break;}e=e.L;}return e;}
function C8(a){var b;b=a.h.data[0];while(b!==null&&b.bc!==null){b=b.L;}return b;}
function MX(a,b,c){return a.dC(b,c);}
function RT(a,b,c){var d,e,f,g,h;if(b===null){d=C8(a);if(d===null){a.E=a.E+1|0;d=a.bY(null,0,0);e=a.z+1|0;a.z=e;if(e>a.b9)a.cp();}}else{f=ES(b);g=f&(a.h.data.length-1|0);d=CY(a,b,g,f);if(d===null){a.E=a.E+1|0;d=a.bY(b,g,f);e=a.z+1|0;a.z=e;if(e>a.b9)a.cp();}}h=d.T;d.T=c;return h;}
function O0(a,b,c,d){var e;e=WK(b,d);e.L=a.h.data[c];a.h.data[c]=e;return e;}
function RJ(a,b){var c,d,e,f,g,h,i;c=Kv(!b?1:b<<1);d=a.c5(c);e=0;while(e<a.h.data.length){f=a.h.data[e];a.h.data[e]=null;while(f!==null){g=d.data;h=f.cf&(c-1|0);i=f.L;f.L=g[h];g[h]=f;f=i;}e=e+1|0;}a.h=d;EW(a);}
function Pt(a){a.hC(a.h.data.length);}
function Hw(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.h.data[0];while(e!==null){if(e.bc===null)break a;f=e.L;d=e;e=f;}}else{g=ES(b);c=g&(a.h.data.length-1|0);e=a.h.data[c];while(e!==null&&!(e.cf==g&&G6(b,e.bc))){f=e.L;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.L=e.L;else a.h.data[c]=e.L;a.E=a.E+1|0;a.z=a.z-1|0;return e;}
function Po(a){return a.z;}
function ES(b){return b.b1();}
function G6(b,c){return b!==c&&!b.D(c)?0:1;}
function G1(){var a=this;D3.call(a);a.b4=0;a.K=null;a.q=null;}
function Ya(){var a=new G1();NH(a);return a;}
function VQ(a){var b=new G1();Pg(b,a);return b;}
function NH(a){IX(a);a.b4=0;a.K=null;}
function Pg(a,b){Ec(a,b);a.b4=0;a.K=null;}
function Oz(a,b){return U(Fr,b);}
function Mk(a,b){var c,d,e,f,g;if(b===null)c=C8(a);else{d=b.b1();e=(d&2147483647)%a.h.data.length|0;c=CY(a,b,e,d);}if(c===null)return null;if(a.b4&&a.q!==c){f=c.C;g=c.v;g.C=f;if(f===null)a.K=g;else f.v=g;c.v=null;c.C=a.q;a.q.v=c;a.q=c;}return c.T;}
function T7(a,b,c,d){var e;e=Wf(b,d);e.L=a.h.data[c];a.h.data[c]=e;a.dy(e);return e;}
function Sz(a,b,c){var d;d=a.dC(b,c);if(a.iy(a.K))a.gD(a.K.bc);return d;}
function T8(a,b,c){var d,e,f,g,h,i;if(!a.z){a.K=null;a.q=null;}if(b===null){d=C8(a);if(d!==null)a.dy(d);else{a.E=a.E+1|0;e=a.z+1|0;a.z=e;if(e>a.b9)a.cp();d=a.bY(null,0,0);}}else{f=b.b1();e=f&2147483647;g=e%a.h.data.length|0;d=CY(a,b,g,f);if(d!==null)a.dy(d);else{a.E=a.E+1|0;h=a.z+1|0;a.z=h;if(h>a.b9){a.cp();g=e%a.h.data.length|0;}d=a.bY(b,g,f);}}i=d.T;d.T=c;return i;}
function L$(a,b){var c,d;if(a.q===b)return;if(a.K===null){a.K=b;a.q=b;return;}c=b.C;d=b.v;if(c!==null){if(d===null)return;if(a.b4){c.v=d;d.C=c;b.v=null;b.C=a.q;a.q.v=b;a.q=b;}return;}if(d===null){b.C=a.q;b.v=null;a.q.v=b;a.q=b;}else if(a.b4){a.K=d;d.C=null;b.C=a.q;b.v=null;a.q.v=b;a.q=b;}}
function RU(a){return Wg(a);}
function PI(a){if(a.de===null)a.de=Vq(a);return a.de;}
function Px(a,b){var c,d,e;c=Hw(a,b);if(c===null)return null;d=c.C;e=c.v;if(d===null)a.K=e;else d.v=e;if(e===null)a.q=d;else e.C=d;return c.T;}
function Ms(a,b){return 0;}
function Sl(b){return b.K;}
var DL=C(0);
function LJ(a,b){return MH(a.iW(b));}
var CI=C(0);
function NQ(a,b){return a.bf(a.cU(b));}
var Fn=C(0);
var C4=C(0);
var Dl=C(0);
function Uc(a){return Ya();}
function Sn(a,b){if(b!==null&&!Bh(b,CS))return Xd(b);return b;}
function Ur(a,b){if(b!==null&&!Bh(b,C4))return Vj(b);return b;}
function MU(a,b){if(b===null){Z();return Zi;}if(!Bh(b,B2)&&!Bh(b,CM)){if(!Bh(b,Ci)&&!Bh(b,CI)){if(b instanceof BO){Z();return Y1;}if(b instanceof BU){Z();return YZ;}if(!Jz(b)){Z();return Zj;}Z();return Y1;}Z();return Zk;}Z();return Zl;}
var DV=C();
function Im(a,b){E(a);a.hO(b);}
function Qp(a,b){return (a.fq()).cW(b);}
function MV(a){return (a.fq()).r();}
var Hq=C(Cz);
function Pq(){var a=new Hq();Sw(a);return a;}
function Sw(a){EM(a);}
function PT(a,b){EF(a,b);return a;}
function PU(a,b,c){Fa(a,b,c);return a;}
function OD(a){return El(a);}
function OX(a,b){EH(a,b);}
function Mg(a,b,c){return a.ic(b,c);}
var DC=C(0);
function DR(){var a=this;B.call(a);a.e0=null;a.hc=null;a.g0=null;a.g5=null;a.iL=null;a.dc=0;a.hK=0;}
function Zm(a,b){var c=new DR();K5(c,a,b);return c;}
function K5(a,b,c){E(a);a.e0=b.eU;a.hc=b.fu;a.g0=b.e1;a.g5=b.d7;a.iL=b.ea;a.ge(c);}
function Os(a,b){a.hK=b;a.dc=b;}
function Cy(){var a=this;B.call(a);a.fF=0;a.A=0;a.Y=0;a.cg=0;}
function Fg(a,b){E(a);a.cg=(-1);a.fF=b;a.Y=b;}
function CO(a){return a.A;}
function JM(a,b){if(b>=0&&b<=a.Y){a.A=b;if(b<a.cg)a.cg=0;return a;}G(Ch(((((((K()).e(D(39))).w(b)).e(D(40))).w(a.Y)).e(D(41))).d()));}
function HM(a){a.A=0;a.Y=a.fF;a.cg=(-1);return a;}
function BY(a){return a.Y-a.A|0;}
function B9(a){return a.A>=a.Y?0:1;}
var Dk=C(0);
var DI=C(0);
function Cw(){var a=this;B.call(a);a.f9=0;a.b$=null;a.ds=null;a.gf=null;}
function Zn(a){var b=new Cw();Ej(b,a);return b;}
function Ej(a,b){E(a);a.f9=b.E;a.b$=Sl(b);a.gf=b;}
function OM(a){return a.b$===null?0:1;}
function K$(a){if(a.f9==a.gf.E)return;G(OG());}
function FF(a){K$(a);if(!a.y())G(P_());a.ds=a.b$;a.b$=a.b$.v;}
var BV=C(0);
var JG=C(Cw);
function Xy(a){var b=new JG();Q3(b,a);return b;}
function Q3(a,b){Ej(a,b);}
function Ot(a){FF(a);return a.ds;}
function SR(a){return a.h1();}
var Eo=C(0);
function Hi(){var a=this;B.call(a);a.dZ=null;a.cG=null;}
function XZ(a){var b=new Hi();L1(b,a);return b;}
function L1(a,b){E(a);a.cG=Pq();a.dZ=b;}
function Q2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;d=HO();e=Ki();f=c.length;g=0;while(g<f){h=c[g];i=e.i2(h.hN());if(i===null){j=h.hN();i=Ki();e.it(j,i);}k=WY(h);(i.bv())[$rt_ustr(h.j0())]=CJ(k,"apply");g=g+1|0;}j=a.dZ;l=e.bv();m=X6(d);n=W4(a);Ml(j,l,CJ(m,"handle"),CJ(n,"handle"));return d.ga();}
function Lf(a,b){if(b!=10)a.cG.gx($rt_str(String.fromCharCode(b)));else{(HH()).e8(a.cG.d());a.cG=Pq();}}
function Me(b,c){b.bj(V2(c));}
function MM(b,c,d){(b.kU()).jh(c,d);}
function Ml(b,c,d,e){(WebAssembly.instantiate(b,Object.assign(c,{teavm:{currentTimeMillis:function(){return (new Date()).getTime();},isnan:isNaN,teavm_getNaN:function(){return NaN;},isinf:function(n){return !isFinite(n);},isfinite:isFinite,putwchar:e,towlower:function(code){return ((String.fromCharCode(code)).toLowerCase()).charCodeAt(0);},towupper:function(code){return ((String.fromCharCode(code)).toUpperCase()).charCodeAt(0);},getNativeOffset:function(instant){return (new Date(instant)).getTimezoneOffset();},
logString:console.log,logInt:console.log,logOutOfMemory:function(){console.log("Out of memory");}},teavmMath:{sqrt:Math.sqrt,pow:Math.pow,sin:Math.sin,cos:Math.cos}}))).then(function(instance){return d(instance);});}
function DF(){B.call(this);this.dj=null;}
function Zo(){var a=new DF();F1(a);return a;}
function F1(a){E(a);}
function GU(a,b){a.dj=b;}
function Ru(a,b){a.dj.cX(b);}
function P2(a,b){a.dj.c4(b);}
function Dr(){DF.call(this);this.eu=null;}
function Jo(a){F1(a);}
function NI(a,b){a.eu=b;GU(a,b);}
function HS(a,b){a.eR(b);}
function Tw(a,b){return a.eu.dT(b);}
function Lx(){var a=this;Dr.call(a);a.bR=0;a.dm=0;a.dt=0;a.dE=0;a.cC=null;a.eE=0;a.b0=null;a.cN=null;a.eK=0;}
function W2(){var a=new Lx();Qy(a);return a;}
function Qy(a){Jo(a);}
function Ue(a){var b;if(UJ()){b=NR(D(42),U(Ft,0));b.ia(Xk(a));}a.c4(X8(a));}
function GP(a,b){var c,d,e,f,g,h,i,j;c=Uz(b);d=(c.dJ(D(43),Bc(0))).N();e=c.dQ(D(44));f=e===null?0:1;if(f){a.bR=(c.dQ(D(44))).N();a.dm=(c.dQ(D(45))).N();a.dt=(c.dJ(D(46),Bc(0))).N();a.dE=(c.dJ(D(47),Bc(0))).N();a.eE=c.i0(D(48));}if(a.eE&&a.b0!==null){if(!f&&a.eK){g=a.b0;h=U(B,1);h.data[0]=Bc(d);i=g.d1(D(49),h);}else{i=a.b0.d1(D(50),C2(B,[Bc(d),Bc(a.bR),Bc(a.dm),Bc(a.dt),Bc(a.dE)]));a.eK=1;}j=i.N();a.cN.ge(j);a.cC=a.cN.iO(3*a.bR|0);}else{if(f)NJ(a.bR,a.dm,a.dt,a.dE);a.cC=TX(a.bR,null);So(d,a.cC);}a.cX(a.dT(a.cC));}
function HX(a,b){a.b0=b.hP();a.cN=a.b0.gr(0);}
var Eb=C(0);
function D4(){var a=this;B.call(a);a.bc=null;a.T=null;}
function Zp(a,b){var c=new D4();Lq(c,a,b);return c;}
function Lq(a,b,c){E(a);a.bc=b;a.T=c;}
function S4(a){return a.bc;}
function T3(a){return a.T;}
function CL(){var a=this;D4.call(a);a.cf=0;a.L=null;}
function WK(a,b){var c=new CL();HE(c,a,b);return c;}
function HE(a,b,c){Lq(a,b,null);a.cf=c;}
function Fr(){var a=this;CL.call(a);a.v=null;a.C=null;}
function Wf(a,b){var c=new Fr();RQ(c,a,b);return c;}
function RQ(a,b,c){HE(a,b,c);a.v=null;a.C=null;}
function H8(){var a=this;B.call(a);a.F=0.0;a.G=0.0;a.H=0.0;}
function CD(a,b,c){var d=new H8();Rb(d,a,b,c);return d;}
function Rb(a,b,c,d){E(a);a.F=b;a.G=c;a.H=d;}
function M(b,c,d){return CD(b,c,d);}
function BF(b){var c,d;c=GV(b);d=c===0.0?Infinity:1.0/c;return Bi(d,b);}
function Bi(b,c){return CD(c.F*b,c.G*b,c.H*b);}
function Cd(b,c){return CD(b.F-c.F,b.G-c.G,b.H-c.H);}
function C0(b,c){return CD(b.F+c.F,b.G+c.G,b.H+c.H);}
function BB(b,c){return b.F*c.F+b.G*c.G+b.H*c.H;}
function Dq(b,c){return CD(b.G*c.H-b.H*c.G,b.H*c.F-b.F*c.H,b.F*c.G-b.G*c.F);}
function GV(b){return FL(BB(b,b));}
var Cx=C(CG);
function Zq(a){var b=new Cx();Fu(b,a);return b;}
function Fu(a,b){Gq(a,b);}
var JR=C(Cx);
function Zr(a){var b=new JR();Pj(b,a);return b;}
function Pj(a,b){Fu(a,b);}
var ER=C(BC);
var EE=C(0);
var EC=C(0);
var CC=C(0);
function Mj(b){return Ws(b);}
function Ut(b,c,d){return Lr(b.f_(c),b.f_(d));}
var He=C();
function Xl(){var a=new He();Oa(a);return a;}
function Oa(a){E(a);}
function GZ(){var a=this;B.call(a);a.cz=0;a.fx=0;a.fy=0;a.d9=0;a.bS=null;}
function VB(a){var b=new GZ();Oq(b,a);return b;}
function Oq(a,b){a.bS=b;E(a);a.fx=a.bS.cs;a.fy=a.bS.r();a.d9=(-1);}
function MT(a){return a.cz>=a.fy?0:1;}
function RM(a){var b,c;H7(a);a.d9=a.cz;b=a.bS;c=a.cz;a.cz=c+1|0;return b.cW(c);}
function H7(a){if(a.fx>=a.bS.cs)return;G(OG());}
var Ds=C(Co);
function JT(a){E_(a);}
var E5=C();
var YJ=null;function Xr(){Xr=L(E5);Md();}
function Md(){YJ=E1((E9()).data.length);YJ.data[Bl(Zi)]=1;YJ.data[Bl(Zl)]=2;YJ.data[Bl(Zk)]=3;YJ.data[Bl(Y1)]=4;YJ.data[Bl(Y0)]=5;YJ.data[Bl(YZ)]=6;}
var DT=C(O);
function W3(){var a=new DT();F_(a);return a;}
function F_(a){Bq(a);}
var Ll=C(DT);
function U5(){var a=new Ll();TG(a);return a;}
function TG(a){F_(a);}
var GK=C();
function HW(b,c){if(b===null)G(V1());if(b===F($rt_voidcls()))G(HG());if(c<0)G(Xf());return S0(b.fT(),c);}
function S0(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var E6=C(0);
var I5=C(Bm);
function I4(){var a=this;B.call(a);a.cI=0;a.cB=null;}
function Wa(a){var b=new I4();N5(b,a);return b;}
function N5(a,b){a.cB=b;E(a);}
function To(a){return a.cI>=(FM(a.cB)).data.length?0:1;}
function NU(a){var b,c;if(a.cI==(FM(a.cB)).data.length)G(P_());b=(FM(a.cB)).data;c=a.cI;a.cI=c+1|0;return b[c];}
function Hj(){var a=this;B.call(a);a.cQ=BL;a.c3=0;a.eg=0;}
function Vw(){var a=new Hj();OH(a);return a;}
function OH(a){E(a);}
var Iw=C();
var G$=C(Cx);
function Zs(a){var b=new G$();OZ(b,a);return b;}
function OZ(a,b){Fu(a,b);}
var Ih=C();
function XI(){var a=new Ih();Rr(a);return a;}
function Rr(a){E(a);}
function LS(a){return Ln(a);}
function Ln(a){return Ri();}
var DQ=C(0);
var CQ=C(0);
var Cg=C();
function Fx(a){E(a);}
function RG(a){var b,c,d,e,f;b=U(B,a.r());c=0;d=a.t();while(d.y()){e=b.data;f=c+1|0;e[c]=d.s();c=f;}return b;}
function QI(a,b){var c,d,e,f;c=b.data;d=a.r();e=c.length;if(e<d)b=HW((EG(b)).gd(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.t();while(f.y()){c=b.data;e=d+1|0;c[d]=f.s();d=e;}return b;}
var Iz=C();
function Mc(b,c){var d,e,f,g,h,i,j,k;if(!b)return D(4);d=1<<c;e=d-1|0;f=(((32-G8(b)|0)+c|0)-1|0)/c|0;g=BI(f);h=Ez(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=CF(b>>>h&e,d);h=h-c|0;i=k;}return U8(g);}
function FS(){X.call(this);this.iY=0;}
var Zt=null;function RH(){RH=L(FS);OA();}
function XP(a){var b=new FS();HJ(b,a);return b;}
function HJ(a,b){RH();B$(a);a.iY=b;}
function Ge(b){RH();return XP(b);}
function OA(){Zt=F($rt_shortcls());}
var Es=C(0);
var Lo=C();
function WX(){var a=new Lo();Ok(a);return a;}
function Ok(a){E(a);}
var FW=C(0);
var Hp=C();
function Ld(){var b;b=XX();DE();return Fv(F(CK),b,Zd);}
function UJ(){var b;b=Ld();return b!==null&&b.hT()?1:0;}
function NR(b,c){return (Ld()).i9(b,c);}
function UQ(){return GL(F(CK));}
var H$=C();
function CJ(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Cm(){var a=this;B.call(a);a.dH=null;a.c0=null;a.dA=null;a.cZ=null;}
function Zu(){var a=new Cm();FQ(a);return a;}
function FQ(a){E(a);}
function I2(b,c){var d,e,f,g,h,i,j,k,l;d=Cd(b,c);e=BF(d);f=CD(0.0,(-1.0),0.0);g=Dq(e,f);h=BF(g);i=Bi(2.0,h);j=Dq(e,i);k=BF(j);l=Bi(2.0,k);return WE(c,e,l,i);}
function F0(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=e/d;g=Cd(b,c);h=BF(g);i=CD(0.0,(-1.0),0.0);j=Dq(h,i);k=BF(j);l=Bi(2.0,k);m=Dq(h,l);n=BF(m);o=Bi(2.0*f,n);return Wo(c,h,o,l);}
var Dv=C(0);
var B0=C(0);
function Gz(){var a=this;DU.call(a);a.d$=null;a.fL=null;}
function U6(a,b){var c=new Gz();PN(c,a,b);return c;}
function PN(a,b,c){Ls(a);a.d$=b;a.fL=c;}
function Rh(a,b){var c,d,$$je;a:{try{c=a.d$.g(b);break a;}catch($$e){$$je=W($$e);if($$je instanceof Bo){d=$$je;}else{throw $$e;}}a.cK(d);return;}c.bF(EV(a));}
function OJ(a,b){var c,d,$$je;a:{try{c=a.fL.g(b);break a;}catch($$e){$$je=W($$e);if($$je instanceof Bo){d=$$je;}else{throw $$e;}}a.cK(d);return;}c.bF(EV(a));}
function EV(a){return Wp(a);}
function HN(){B.call(this);this.fS=null;}
function Ve(a){var b=new HN();Ry(b,a);return b;}
function Ry(a,b){E(a);a.fS=b;}
function Hu(a){return Wa(a);}
function GL(b){return Ve(Sk(b.fT()));}
function Sk(b){var c;c=ME(b);if(c===null)c=U(B,0);return c;}
function ME(b){if (!HN.$$services$$) {HN.$$services$$ = true;CT.$$serviceList$$ = [[FT, NV]];CK.$$serviceList$$ = [[EK, UT]];}var cls = b;if (!cls.$$serviceList$$) {return $rt_createArray($rt_objcls(), 0);}var result = $rt_createArray($rt_objcls(), cls.$$serviceList$$.length);for (var i = 0; i < result.data.length; ++i) {var serviceDesc = cls.$$serviceList$$[i];result.data[i] = new serviceDesc[0]();serviceDesc[1](result.data[i]);}return result;}
function FM(b){return b.fS;}
var HK=C();
function Ty(b){var c,d,e,f,g,h,i,j,k;c=Wz(b.i4());d=HF(c);e=E1(d*2|0);f=0;g=0;h=0;i=0;while(i<d){j=e.data;g=g+GB(c)|0;h=h+GB(c)|0;k=f+1|0;j[f]=g;f=k+1|0;j[k]=h;i=i+1|0;}return e;}
function BP(){var a=this;B.call(a);a.cd=null;a.by=null;a.cl=null;}
function DD(a){E(a);}
function Gr(){var a=this;B.call(a);a.e2=null;a.e3=null;a.eY=0;a.eZ=null;}
function Xv(a,b,c,d){var e=new Gr();Ro(e,a,b,c,d);return e;}
function Ro(a,b,c,d,e){E(a);a.e2=b;a.e3=c;a.eY=d;a.eZ=e;}
function Tj(a){MK(a.e2,a.e3,a.eY,a.eZ);}
var JA=C();
function EQ(b,c){if(b!==null)return b;G(Wh(c));}
function Li(){Cl.call(this);this.d5=null;}
function Xg(a){var b=new Li();Ts(b,a);return b;}
function Ts(a,b){E2(a);if(b===null)b=R1(null);a.d5=b;}
function Ov(a,b){DO(a,a.d5,b);}
function By(){var a=this;B.call(a);a.be=null;a.bs=null;}
function Zv(){var a=new By();CZ(a);return a;}
function CZ(a){E(a);}
function JY(){var a=this;By.call(a);a.fJ=null;a.fe=null;}
function U7(a,b){var c=new JY();Ol(c,a,b);return c;}
function Ol(a,b,c){a.fJ=b;a.fe=c;CZ(a);a.bs=a.fJ.by.dH;a.be=a.fe;}
function C$(){var a=this;B.call(a);a.g1=null;a.dw=null;a.ha=0.0;a.dY=0.0;a.c8=null;a.dO=null;a.bC=0;}
function Kx(a,b,c,d,e){E(a);Fz();a.c8=Zw;a.dO=Zw;Kq(a,e);a.g1=b;a.dw=e.dS();a.ha=c;a.dY=d;}
function JU(a,b,c,d){var e;e=DB(1);e.data[0]=63;Kx(a,b,c,d,e);}
function Kq(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.dY)return;}G(Ch(D(51)));}
function FY(a,b){if(b!==null){a.c8=b;a.iz(b);return a;}G(Ch(D(52)));}
function TP(a,b){}
function Ks(a,b){if(b!==null){a.dO=b;a.h0(b);return a;}G(Ch(D(52)));}
function Tb(a,b){}
function Hb(a,b,c,d){var e,f,g,h,$$je;a:{if(a.bC!=3){if(d)break a;if(a.bC!=2)break a;}G(Oe());}a.bC=!d?1:2;while(true){try{e=a.hq(b,c);}catch($$e){$$je=W($$e);if($$je instanceof O){f=$$je;G(Wt(f));}else{throw $$e;}}if(e.gn()){if(!d)return e;g=BY(b);if(g<=0)return e;e=Dm(g);}else if(e.cY())break;h=!e.fH()?a.c8:a.dO;b:{Fz();if(h!==Zx){if(h===Zy)break b;else return e;}if(BY(c)<a.dw.data.length)return Zz;JK(c,a.dw);}b.eB(CO(b)+e.c()|0);}return e;}
function Go(a,b){var c;if(a.bC!=2&&a.bC!=4)G(Oe());c=a.gF(b);Bs();if(c===ZA)a.bC=3;return c;}
function L6(a,b){Bs();return ZA;}
var EX=C(0);
function Jg(){B.call(this);this.fj=null;}
function WY(a){var b=new Jg();Rz(b,a);return b;}
function Rz(a,b){E(a);a.fj=b;}
function Uf(a,b,c){MM(a.fj,b,c);}
function N2(a,b,c){a.iG(b,c);}
function Je(){B.call(this);this.ek=null;}
function X6(a){var b=new Je();SO(b,a);return b;}
function SO(a,b){E(a);a.ek=b;}
function M3(a,b){Me(a.ek,b);}
function SM(a,b){a.dz(b);}
var Em=C(0);
function Ji(){B.call(this);this.gi=null;}
function W4(a){var b=new Ji();LT(b,a);return b;}
function LT(a,b){E(a);a.gi=b;}
function Qd(a,b){Lf(a.gi,b);}
function UO(a,b){a.ip(b);}
function DA(){var a=this;Cy.call(a);a.fP=0;a.es=null;a.jb=null;}
function G2(a,b,c,d,e,f){Fg(a,c);TC();a.jb=Y8;a.fP=b;a.es=d;a.A=e;a.Y=f;}
function Tr(b,c,d){return WS(0,b.data.length,b,c,c+d|0,0,0);}
function Qg(b){return Tr(b,0,b.data.length);}
function St(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.gu())G(U5());if(BY(a)<d)G(V8());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Ct((((((K()).e(D(53))).w(g)).e(D(54))).w(f)).d()));if(d<0)G(Ct(((((K()).e(D(55))).w(d)).e(D(56))).d()));h=a.A+a.fP|0;i=0;while(i<d){j=a.es.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.A=a.A+d|0;return a;}}e=b.data;G(Ct(((((((K()).e(D(57))).w(c)).e(D(40))).w(e.length)).e(D(58))).d()));}
function JK(a,b){return a.fc(b,0,b.data.length);}
function EJ(a){HM(a);return a;}
function Kf(){var a=this;DA.call(a);a.gv=0;a.eb=0;}
function WS(a,b,c,d,e,f,g){var h=new Kf();ML(h,a,b,c,d,e,f,g);return h;}
function ML(a,b,c,d,e,f,g,h){G2(a,b,c,d,e,f);a.gv=g;a.eb=h;}
function R8(a){return a.eb;}
var Ci=C(0);
function PX(a,b){Hm(a,b);}
function BQ(){Cg.call(this);this.cs=0;}
function D2(a){Fx(a);}
function QU(a){return VB(a);}
var CR=C(0);
function Dn(){var a=this;BQ.call(a);a.p=null;a.V=0;}
function VL(){var a=new Dn();JC(a);return a;}
function WZ(a){var b=new Dn();Ee(b,a);return b;}
function Xm(a){var b=new Dn();Pv(b,a);return b;}
function JC(a){Ee(a,10);}
function Ee(a,b){D2(a);a.p=U(B,b);}
function Pv(a,b){var c,d;Ee(a,b.r());c=b.t();d=0;while(d<a.p.data.length){a.p.data[d]=c.s();d=d+1|0;}a.V=a.p.data.length;}
function Nf(a,b){var c;if(a.p.data.length<b){c=a.p.data.length>=1073741823?2147483647:B_(b,B_(a.p.data.length*2|0,5));a.p=Ti(a.p,c);}}
function PC(a,b){Eg(a,b);return a.p.data[b];}
function N3(a){return a.V;}
function MG(a,b,c){var d;Eg(a,b);d=a.p.data[b];a.p.data[b]=c;return d;}
function Sy(a,b){var c,d;a.bG(a.V+1|0);c=a.p.data;d=a.V;a.V=d+1|0;c[d]=b;a.cs=a.cs+1|0;return 1;}
function Eg(a,b){if(b>=0&&b<a.V)return;G(G3());}
function Oj(a){var b,c,d;if(!a.V)return D(59);b=a.V-1|0;c=Vb(a.V*16|0);c.j(91);d=0;while(d<b){(c.U(a.p.data[d]===a?D(60):a.p.data[d])).e(D(38));d=d+1|0;}c.U(a.p.data[b]===a?D(60):a.p.data[b]);return (c.j(93)).d();}
var Fd=C(Dn);
function XE(){var a=new Fd();Py(a);return a;}
function Py(a){JC(a);}
function Ou(a,b){var c,d;c=a.t();while(c.y()){d=c.s();d.bI(b);}}
function L7(a,b){var c,d;c=a.t();while(c.y()){d=c.s();d.b2(b);}}
var H3=C();
function Wb(b){UN(W2());}
var S=C(0);
function Bw(){var a=this;B.call(a);a.iw=null;a.fQ=0;}
var ZB=null;var ZC=null;var Zf=null;var ZD=null;var ZE=null;var ZF=null;var ZG=null;var ZH=null;var ZI=null;function Mv(){Mv=L(Bw);QL();}
function B1(a,b){var c=new Bw();KW(c,a,b);return c;}
function KW(a,b,c){Mv();E(a);a.iw=b;a.fQ=c;}
function C7(a){return a.fQ;}
function QL(){ZB=B1(D(61),2147483647);ZC=B1(D(62),1000);Zf=B1(D(63),900);ZD=B1(D(64),800);ZE=B1(D(65),700);ZF=B1(D(66),500);ZG=B1(D(67),400);ZH=B1(D(68),300);ZI=B1(D(69),(-2147483648));}
function D0(){B.call(this);this.em=0;}
function Ip(a){E(a);a.gy();}
function G4(a,b){E(a);a.c$(b);}
function Rf(a){a.c$(a.di());}
function QJ(a){a.c$(FI(a.cc()));}
function P1(a){return a.dr(Xm((a.cc()).ja()));}
function RI(a,b){return (a.cc()).cJ(b);}
function Rp(a,b,c){a.g3();(a.cc()).bn(b,c);return a;}
function Q7(a){if(a.em){a.hz();a.em=0;}}
function TK(a){return a.ed();}
function N9(a,b,c){return a.gE(b,c);}
var HL=C();
function Ma(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function VF(b){b.dP();}
function L3(b){Qw(b,0);}
function Qw(b,c){return setTimeout(function(){VF(b);},c);}
function LY(){return T4();}
function P4(b){return JD(String.fromCharCode(b));}
function TF(b){return b.$meta.item;}
function Qs(b){return $rt_str(b.$meta.name);}
function T4(){return [];}
function Di(){var a=this;B.call(a);a.gt=null;a.ij=null;}
function HY(a,b,c){var d,e,f,g;d=c.data;E(a);Ik(b);e=d.length;f=0;while(f<e){g=d[f];Ik(g);f=f+1|0;}a.gt=b;a.ij=c.dS();}
function Ik(b){var c,d;if(b.ch())G(JI(b));if(!Il(b.o(0)))G(JI(b));c=1;while(c<b.c()){a:{d=b.o(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(Il(d))break a;else G(JI(b));}}c=c+1|0;}}
function Il(b){var c;a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}c=1;break a;}c=0;}return c;}
function CV(){B.call(this);this.ih=null;}
var Zy=null;var Zx=null;var Zw=null;function Fz(){Fz=L(CV);L5();}
function Ko(a){var b=new CV();Ib(b,a);return b;}
function Ib(a,b){Fz();E(a);a.ih=b;}
function L5(){Zy=Ko(D(70));Zx=Ko(D(71));Zw=Ko(D(72));}
function BO(){B.call(this);this.b8=0;}
var Y7=null;var ZJ=null;var ZK=null;function En(){En=L(BO);Oc();}
function OE(a){var b=new BO();HI(b,a);return b;}
function HI(a,b){En();E(a);a.b8=b;}
function R6(a){return a.b8;}
function CU(b){En();return !b?ZJ:Y7;}
function I$(b){En();return !b?D(73):D(74);}
function Ny(a){return I$(a.b8);}
function M4(a,b){if(a===b)return 1;return b instanceof BO&&b.b8==a.b8?1:0;}
function Oc(){Y7=OE(1);ZJ=OE(0);ZK=F($rt_booleancls());}
var Cv=C(O);
function HG(){var a=new Cv();EO(a);return a;}
function Ch(a){var b=new Cv();LF(b,a);return b;}
function EO(a){Bq(a);}
function LF(a,b){DZ(a,b);}
function Ix(){Cv.call(this);this.hd=null;}
function JI(a){var b=new Ix();Rl(b,a);return b;}
function Rl(a,b){EO(a);a.hd=b;}
var Ly=C(O);
function P_(){var a=new Ly();MD(a);return a;}
function MD(a){Bq(a);}
function F8(){B.call(this);this.fE=null;}
function Ws(a){var b=new F8();QZ(b,a);return b;}
function QZ(a,b){E(a);a.fE=b;}
function R2(a,b,c){return Ut(a.fE,b,c);}
var Jk=C();
function Pd(b){return $rt_str(b);}
function Dj(){CA.call(this);this.dV=null;}
function ZL(a){var b=new Dj();Gv(b,a);return b;}
function Gv(a,b){D8(a);a.dV=b;}
function Fo(){var a=this;Dj.call(a);a.hs=0;a.dD=0;a.bg=null;a.dd=null;a.eN=null;}
function ZM(a,b){var c=new Fo();J6(c,a,b);return c;}
function J6(a,b,c){Gv(a,b);a.bg=K();a.dd=BI(32);a.hs=c;Rg();a.eN=ZN;}
function Nq(a,b,c,d){var $$je;if(!IZ(a))return;a:{try{a.dV.cm(b,c,d);break a;}catch($$e){$$je=W($$e);if($$je instanceof ER){}else{throw $$e;}}a.dD=1;}}
function IZ(a){if(a.dV===null)a.dD=1;return a.dD?0:1;}
function Hk(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=T5(b,c,d-c|0);g=DB(B_(16,BH(e.length,1024)));h=Qg(g);i=a.eN.h7();Fz();j=Zx;i=FY(i,j);j=Zx;k=Ks(i,j);while(true){l=(Hb(k,f,h,1)).cY();a.cm(g,0,CO(h));EJ(h);if(!l)break;}while(true){l=(Go(k,h)).cY();a.cm(g,0,CO(h));EJ(h);if(!l)break;}}
function O$(a,b){(a.bg.e(b)).j(10);GW(a);}
function GW(a){var b;b=a.bg.c()<=a.dd.data.length?a.dd:BI(a.bg.c());a.bg.el(0,a.bg.c(),b,0);Hk(a,b,0,a.bg.c());a.bg.ec(0);}
function P(){var a=this;B.call(a);a.bb=null;a.O=null;a.W=null;}
function ZO(){var a=new P();BJ(a);return a;}
function BJ(a){E(a);}
function KQ(){P.call(this);this.ir=null;}
function Xu(a){var b=new KQ();Qa(b,a);return b;}
function Qa(a,b){var c,d;a.ir=b;BJ(a);a.O=R(0.5,0.1,0.1);a.W=M(4.0,2.5,(-5.0));Bn();c=ZP;d=K();BA(Y(d,D(75)),c);a.bb=Bg(d);ZP=ZP+1|0;}
function KS(){P.call(this);this.iT=null;}
function WU(a){var b=new KS();OK(b,a);return b;}
function OK(a,b){var c,d;a.iT=b;BJ(a);a.O=R(0.0,0.8,0.8);a.W=M((-10.0),12.0,(-7.5));Bn();c=ZP;d=K();BA(Y(d,D(75)),c);a.bb=Bg(d);ZP=ZP+1|0;}
function V(){var a=this;BK.call(a);a.X=0.0;a.P=null;}
function ZQ(){var a=new V();BM(a);return a;}
function BM(a){FE(a);}
function Na(a,b){return BF(Cd(b,a.P));}
function Nr(a,b){var c,d,e,f;c=Cd(a.P,b.bs);d=BB(c,b.be);if(d<0.0)return null;e=C9(a.X,2.0)-(BB(c,c)-C9(d,2.0));f=e<0.0?0.0:d-FL(e);if(f===0.0)return null;return Xc(a,a,b,f);}
function KT(){V.call(this);this.i8=null;}
function WQ(a){var b=new KT();TQ(b,a);return b;}
function TQ(a,b){var c,d;a.i8=b;BM(a);BG();a.n=ZR;a.P=M(3.0,2.0,6.0);a.X=1.75;Bn();c=ZS;d=K();BA(Y(d,D(76)),c);a.S=Bg(d);ZS=ZS+1|0;}
function KX(){V.call(this);this.gP=null;}
function VY(a){var b=new KX();Mw(b,a);return b;}
function Mw(a,b){var c,d;a.gP=b;BM(a);BG();a.n=ZR;a.P=M((-4.0),5.0,2.0);a.X=2.0;Bn();c=ZS;d=K();BA(Y(d,D(76)),c);a.S=Bg(d);ZS=ZS+1|0;}
function KR(){P.call(this);this.gA=null;}
function XC(a){var b=new KR();Mh(b,a);return b;}
function Mh(a,b){var c,d;a.gA=b;BJ(a);a.O=R(0.5,0.3,0.75);a.W=M((-2.0),5.0,0.0);Bn();c=ZP;d=K();BA(Y(d,D(75)),c);a.bb=Bg(d);ZP=ZP+1|0;}
function KU(){V.call(this);this.hr=null;}
function Vm(a){var b=new KU();O5(b,a);return b;}
function O5(a,b){var c,d;a.hr=b;BM(a);BG();a.n=ZR;a.P=M((-5.0),5.0,(-6.0));a.X=4.0;Bn();c=ZS;d=K();BA(Y(d,D(76)),c);a.S=Bg(d);ZS=ZS+1|0;}
var FA=C(0);
function KN(){V.call(this);this.iH=null;}
function WF(a){var b=new KN();S3(b,a);return b;}
function S3(a,b){var c,d;a.iH=b;BM(a);BG();a.n=ZT;a.P=M(0.0,3.0,1.0);a.X=1.0;Bn();c=ZS;d=K();BA(Y(d,D(76)),c);a.S=Bg(d);ZS=ZS+1|0;}
var KJ=C();
function XH(){var a=new KJ();Uk(a);return a;}
function Uk(a){E(a);}
function TL(a,b){return J8(a,b);}
function J8(a,b){return Nv(b);}
var GF=C();
function Vu(){var a=new GF();P3(a);return a;}
function P3(a){E(a);}
function LU(a,b){return Jl(a,b);}
function Jl(a,b){return M1(b);}
var KI=C();
function WA(){var a=new KI();PG(a);return a;}
function PG(a){E(a);}
function Ni(a,b){return GH(a,b);}
function GH(a,b){return NG(b);}
var GD=C();
function Vs(){var a=new GD();RN(a);return a;}
function RN(a){E(a);}
function Qb(a,b){return GS(a,b);}
function GS(a,b){return TM(b);}
function KV(){V.call(this);this.hw=null;}
function U$(a){var b=new KV();Tg(b,a);return b;}
function Tg(a,b){var c,d;a.hw=b;BM(a);BG();a.n=ZR;a.P=M(0.0,1.0,0.0);a.X=0.5;Bn();c=ZS;d=K();BA(Y(d,D(76)),c);a.S=Bg(d);ZS=ZS+1|0;}
var KH=C();
function X_(){var a=new KH();Uv(a);return a;}
function Uv(a){E(a);}
function Pa(a,b){return LG(a,b);}
function LG(a,b){return MQ(b);}
function KO(){V.call(this);this.h$=null;}
function VK(a){var b=new KO();Ql(b,a);return b;}
function Ql(a,b){var c,d;a.h$=b;BM(a);BG();a.n=ZT;a.P=M(4.0,3.0,1.0);a.X=1.5;Bn();c=ZS;d=K();BA(Y(d,D(76)),c);a.S=Bg(d);ZS=ZS+1|0;}
var E0=C(0);
var BX=C(Cg);
function Dy(a){Fx(a);}
function Dz(){BX.call(this);this.f6=null;}
function ZU(a){var b=new Dz();H_(b,a);return b;}
function H_(a,b){Dy(a);a.f6=b;}
function Pp(a){return a.f6;}
var IY=C(Dz);
function Wg(a){var b=new IY();Pu(b,a);return b;}
function Pu(a,b){H_(a,b);}
function RR(a){return Xy(a.gG());}
var Lz=C();
function VJ(){var a=new Lz();SC(a);return a;}
function SC(a){E(a);}
function Or(a,b){return Io(a,b);}
function Io(a,b){return Nl(b);}
var Lc=C();
function XN(){var a=new Lc();T_(a);return a;}
function T_(a){E(a);}
function Sd(a,b){return F$(a,b);}
function F$(a,b){return P0(b);}
var LB=C();
function W5(){var a=new LB();MR(a);return a;}
function MR(a){E(a);}
function O6(a,b){return Jp(a,b);}
function Jp(a,b){return T1(b);}
var Lb=C();
function Wv(){var a=new Lb();PL(a);return a;}
function PL(a){E(a);}
function Mn(a,b){return H2(a,b);}
function H2(a,b){return M6(b);}
var LC=C();
function Vp(){var a=new LC();Qh(a);return a;}
function Qh(a){E(a);}
function S_(a,b){return In(a,b);}
function In(a,b){return SU(b);}
var GE=C();
function W1(){var a=new GE();SD(a);return a;}
function SD(a){E(a);}
function LP(a,b){return HR(a,b);}
function HR(a,b){return RP(b);}
var La=C();
function XJ(){var a=new La();US(a);return a;}
function US(a){E(a);}
function QR(a,b){return HB(a,b);}
function HB(a,b){return OT(b);}
var LA=C();
function Vz(){var a=new LA();RA(a);return a;}
function RA(a){E(a);}
function RW(a,b){return Gh(a,b);}
function Gh(a,b){return LQ(b);}
var KK=C();
function VU(){var a=new KK();Of(a);return a;}
function Of(a){E(a);}
function T9(a,b){return KD(a,b);}
function KD(a,b){return QW(b);}
var GC=C();
function WO(){var a=new GC();MC(a);return a;}
function MC(a){E(a);}
function P5(a,b){return G7(a,b);}
function G7(a,b){return QX(b);}
var HZ=C();
function SI(b,c,d,e,f){var g,h;g=Df(e,f);if(!g){g=e;e=f;}else if(g>=0){c=c+0.5*(e-f|0);g=e;}else{b=b+0.5*(f-e|0);g=f;e=f;}h=SS(b,c,d.by,g,e);return Fc(U7(d,h),d,0);}
function Fc(b,c,d){var e,f;e=Hn(b,c);f=null;if((e.t()).y())f=(e.t()).s();if(f!==null)return R_(f,c,d);Cr();return ZV;}
function Hn(b,c){var d,e,f,g,h,i,j,k;d=VL();e=c.cd.data;f=e.length;g=0;while(g<f){h=e[g];i=h.ev(b);if(i!==null)d.bx(i);g=g+1|0;}d.gM(Mj(Wj()));j=U(B8,(d.e4()).data.length);k=0;while(true){e=j.data;if(k>=e.length)break;e[k]=(d.e4()).data[k];k=k+1|0;}i=MY(j);return i;}
function MJ(b,c){var d,e;d=Hn(b,c);e=null;if((d.t()).y())e=(d.t()).s();if(e!==null)return e.b5;return 0.0;}
function R_(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=b.bN.be;f=C0(Bi(b.b5,b.bN.be),b.bN.bs);g=b.I.f3(f);h=Cd(e,Bi(2.0*BB(g,e),g));i=b.I.n.bh;j=(i.g(f)).bw()*BB(g,e);i=b.I.n.bh;j=j-FL(1.0-C9((i.g(f)).bw(),2.0)*(1.0-C9(BB(g,e),2.0)));i=Bi(j,g);k=b.I.n.bh;k=Bi((k.g(f)).bw(),e);l=Cd(i,k);Cr();m=ZV;i=Cj(m,NM(b.I,f,g,h,c));if(d>=4)return i;n=Qi(b.I,C0(f,Bi(0.001,h)),h,c,d);o=L9(b.I,C0(g,Bi(0.001,l)),l,c,d);k=B6(1.0-b.I.n.bz,n);p=B6(b.I.n.bz,o);return Cj(i,Cj(k,p));}
function Qi(b,c,d,e,f){return B6((b.n.bO.g(c)).bw(),Fc(WC(c,d),e,f+1|0));}
function L9(b,c,d,e,f){return B6((b.n.bh.g(c)).bw(),Fc(XA(c,d),e,f+1|0));}
function NM(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;g=R(0.0,0.0,0.0);h=f.cl.data;i=h.length;j=0;while(j<i){k=h[j];l=Cd(k.W,c);m=BF(l);n=MJ(XG(c,m),f);o=n<=GV(l)&&n!==0.0?0:1;if(o){p=BB(m,d);q=p>0.0?B6(p,k.O):R(0.0,0.0,0.0);r=BB(m,BF(e));s=r<=0.0?R(0.0,0.0,0.0):B6(C9(r,b.n.bV),k.O);g=Cj(g,Cj(EZ(b.n.bX.g(c),q),EZ(b.n.bK.g(c),s)));}j=j+1|0;}return g;}
function SS(b,c,d,e,f){return BF(C0(d.dA,C0(Bi(UZ(b,e),d.cZ),Bi(PP(c,f),d.c0))));}
function UZ(b,c){var d;d=c;return (b-d/2.0)/(2.0*d);}
function PP(b,c){var d;d=c;return  -(b-d/2.0)/(2.0*d);}
function UX(b){return b.b5;}
var Fy=C(0);
var Gy=C(Ce);
function VS(){var a=new Gy();Sm(a);return a;}
function Sm(a){DX(a);}
function TR(a){return a;}
function RY(a,b){return Gd(a,b);}
function PB(a,b){HU(a,b);}
function TY(a,b,c){return Is(a,b,c);}
var Ep=C(0);
var Ed=C(0);
function JO(){var a=this;B.call(a);a.dg=null;a.cu=null;}
function V_(a){var b=new JO();Q0(b,a);return b;}
function Q0(a,b){var c;E(a);a.cu=b;c=a;b.classObject=c;}
function GY(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=V_(b);return c;}
function LK(a){return (((K()).e(D(77))).w(Db(a))).d();}
function N6(a){return a.cu;}
function Uj(a){if(a.dg===null)a.dg=Qs(a.cu);return a.dg;}
function L4(a){return GY(TF(a.cu));}
var K9=C(Bm);
function Ca(){X.call(this);this.cT=0.0;}
var ZW=0.0;var ZX=null;function IU(){IU=L(Ca);Ox();}
function Xx(a){var b=new Ca();EB(b,a);return b;}
function VV(a){var b=new Ca();Jx(b,a);return b;}
function EB(a,b){IU();B$(a);a.cT=b;}
function Jx(a,b){IU();EB(a,b);}
function Le(b){IU();return Xx(b);}
function M9(a,b){if(a===b)return 1;return b instanceof Ca&&b.cT===a.cT?1:0;}
function Ox(){ZW=NaN;ZX=F($rt_floatcls());}
var D$=C(0);
var Ha=C();
function NF(b,c){var d,e,f,g;d=b.data;e=BI(c);f=BH(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Ti(b,c){var d,e,f,g;d=b.data;e=HW((EG(b)).gd(),c);f=BH(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function QF(b,c){var d,e,f,g,h,i,j,k,l,m;d=b.data.length;if(!d)return;e=U(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data.length;if(h>=i)break;j=BH(i,h+f|0);k=h+(2*f|0)|0;l=BH(i,k);TS(g,e,h,j,l,c);h=k;}f=f*2|0;m=g;g=e;e=m;}a:{if(g!==b){h=0;while(true){m=g.data;if(h>=m.length)break a;e.data[h]=m[h];h=h+1|0;}}}}
function TS(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=d;i=e;a:{b:{while(d!=e){if(i==f)break b;j=b.data;k=j[d];l=j[i];if(g.fI(k,l)>0){j=c.data;m=h+1|0;j[h]=l;i=i+1|0;}else{j=c.data;m=h+1|0;j[h]=k;d=d+1|0;}h=m;}while(true){if(i>=f)break a;n=c.data;j=b.data;m=h+1|0;o=i+1|0;n[h]=j[i];h=m;i=o;}}while(true){if(d>=e)break a;n=c.data;j=b.data;o=h+1|0;m=d+1|0;n[h]=j[d];h=o;d=m;}}}
function Nc(b,c){return N7(b,0,b.data.length,c);}
function N7(b,c,d,e){var f,g,h,i,j;f=Df(c,d);if(f>0)G(HG());if(!f)return (-1);g=d-1|0;while(true){h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>g)return ( -i|0)-2|0;}else{g=i-1|0;if(g<c)return ( -i|0)-1|0;}}return i;}
function MY(b){return Vn(b);}
function Lm(){D0.call(this);this.dL=null;}
function V6(){var a=new Lm();OI(a);return a;}
function Xd(a){var b=new Lm();PY(b,a);return b;}
function OI(a){Ip(a);}
function PY(a,b){G4(a,b);}
function SB(a){return a.dL;}
function RD(a,b){a.dL=b;}
function Q_(a){return a.dL;}
function Rs(a,b){return b;}
function S1(a){return a.i$();}
var EN=C();
var ZY=null;function HH(){var b;if(ZY===null){b=new Fo;TI();J6(b,Y$,0);ZY=b;}return ZY;}
function I0(){return Long_fromNumber(new Date().getTime());}
var J5=C(Cw);
function X2(a){var b=new J5();SL(b,a);return b;}
function SL(a,b){Ej(a,b);}
function Tq(a){FF(a);return a.ds.bc;}
var K_=C();
function U0(){var a=new K_();PF(a);return a;}
function PF(a){E(a);}
function Nu(a,b){return J3(a,b);}
function J3(a,b){return UI(b);}
var II=C();
function XV(){var a=new II();Q5(a);return a;}
function Q5(a){E(a);}
var DW=C(BQ);
function H4(a){D2(a);}
var IK=C(DW);
function XO(){var a=new IK();Nh(a);return a;}
function Nh(a){H4(a);}
var IH=C();
function VP(){var a=new IH();SP(a);return a;}
function SP(a){E(a);}
var BS=C();
var ZZ=null;var Z0=null;var Z1=null;var Z2=null;function Bk(){Bk=L(BS);Ng();}
function EA(b){Bk();return (b&64512)!=55296?0:1;}
function Ex(b){Bk();return (b&64512)!=56320?0:1;}
function KA(b){Bk();return !EA(b)&&!Ex(b)?0:1;}
function J7(b,c){Bk();return ((b&1023)<<10|c&1023)+65536|0;}
function FV(b){var c;Bk();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function Fs(b){Bk();return (56320|b&1023)&65535;}
function Fl(b){Bk();return Gb(b)&65535;}
function Gb(b){Bk();return (P4(b)).toLowerCase().charCodeAt(0);}
function FZ(b){Bk();return H1(b);}
function H1(b){var c,d,e,f,g,h,i,j;Bk();c=Gi();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=Df(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function CF(b,c){Bk();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gi(){Bk();if(Z0===null)Z0=Ty(((F9()).value!==null?$rt_str((F9()).value):null));return Z0;}
function F9(){Bk();if(Z2===null)Z2=Kl();return Z2;}
function Ng(){ZZ=F($rt_charcls());Z1=U(BS,128);}
function Kl(){return {"value":"{?*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%slG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%sTEG%%%%%%%%%%%%%%%%%%&5G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%VR#G%%%%%%%%%%%%%"
+"%%%%%"};}
var DS=C(BX);
function J4(a){Dy(a);}
var IL=C(DS);
function XK(){var a=new IL();MS(a);return a;}
function MS(a){J4(a);}
var IJ=C(Ds);
function Wy(){var a=new IJ();LL(a);return a;}
function LL(a){JT(a);}
function Hf(){var a=this;B.call(a);a.du=null;a.c6=null;}
function V9(a,b){var c=new Hf();TN(c,a,b);return c;}
function TN(a,b,c){a.c6=b;a.du=c;E(a);}
function TT(a,b){var c,$$je;a:{try{a.du.et(a.c6);}catch($$e){$$je=W($$e);if($$je instanceof Bo){c=$$je;break a;}else{throw $$e;}}return;}G(c);}
function Ub(a,b){var c,$$je;a:{try{a.du.et(a.c6);}catch($$e){$$je=W($$e);if($$je instanceof Bo){c=$$je;break a;}else{throw $$e;}}return;}G(c);}
function K8(){B.call(this);this.fB=null;}
function WM(a){var b=new K8();SJ(b,a);return b;}
function SJ(a,b){E(a);a.fB=b;}
function R4(a){Ud(a.fB);}
var GX=C();
function UY(b){return b;}
function Cp(){B.call(this);this.bu=null;}
function Eh(a,b){E(a);a.bu=b;}
function GN(a){return a.bu;}
function Kd(a,b){var c,d,e;if(b===null){Z();return Zi;}a:{c=$rt_str(typeof b);d=(-1);switch(c.b1()){case -1034364087:if(!c.D(D(78)))break a;d=2;break a;case -1023368385:if(!c.D(D(79)))break a;d=0;break a;case -891985903:if(!c.D(D(80)))break a;d=1;break a;case 64711720:if(!c.D(D(81)))break a;d=3;break a;default:}}switch(d){case 0:if(!(Object.prototype.toString.apply(b)==='[object Array]'?1:0)){Z();e=Zl;}else{Z();e=Zk;}return e;case 1:break;case 2:Z();return Y1;case 3:Z();return Y0;default:Z();return Zj;}Z();return YZ;}
function LE(a){return KE();}
function Gu(a,b){if(!(b instanceof Fp))return Iv(b);return b;}
function H5(a,b){if(!(b instanceof FT))return Pk(b);return b;}
function I7(a,b){U4();switch(YY.data[Bl(a.cr(b))]){case 1:return Pd(b);case 2:return CU(Oo(b));case 3:return OQ(b);default:}return b;}
function JN(a,b){if(b===null)return null;if(b instanceof BU)return $rt_ustr(b);if(b instanceof BO)return !!b.fa();if(b instanceof Ca)return b.jN();if(b instanceof B7)return b.bw();if(b instanceof X)return b.N();if(!(b instanceof BS))return b;return $rt_ustr(Iq(b));}
function Hs(a){return a.ed();}
function OQ(b){var c;c=UY(b);if(c!==Sp(c))return Bu(c);if(TD(c)<=2.147483647E9)return Bc(c|0);return Ev(YA(c));}
function Mu(a){return a.fm();}
function Qc(a){return a.f5();}
function PR(a,b){return a.e9(b);}
function Oi(a,b){return a.fX(b);}
function R0(a,b){return a.fW(b);}
function KE(){return {};}
function N$(b){var keys=[];for(var key in b){if(Object.prototype.hasOwnProperty.call(b,key)&&key!='$H'){keys.push(key);}}return keys;}
var Fp=C(Cp);
function XL(a){var b=new Fp();MB(b,a);return b;}
function Iv(b){if(b!==null&&!(typeof b==='undefined'?1:0))return XL(b);return null;}
function MB(a,b){Eh(a,b);}
function FK(a){return JD(a.bu);}
function K3(a,b){return (FK(a))[b];}
function RS(a){return (FK(a)).length;}
function S8(a,b){return K3(a,b);}
function IP(){P.call(this);this.i7=null;}
function Wd(a){var b=new IP();Nn(b,a);return b;}
function Nn(a,b){a.i7=b;BJ(a);a.O=R(0.75,0.75,0.75);a.W=M((-4.0),3.0,4.0);a.bb=D(82);}
var Dh=C(Cy);
function F6(a,b,c,d){Fg(a,b);a.A=c;a.Y=d;}
function T5(b,c,d){return V3(0,b.data.length,b,c,c+d|0,0);}
function Np(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Ct((((((K()).e(D(83))).w(g)).e(D(54))).w(f)).d()));if(BY(a)<d)G(Xt());if(d<0)G(Ct(((((K()).e(D(55))).w(d)).e(D(56))).d()));h=a.A;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.iK(h);i=i+1|0;c=g;h=f;}a.A=a.A+d|0;return a;}}e=b.data;G(Ct(((((((K()).e(D(57))).w(c)).e(D(40))).w(e.length)).e(D(58))).d()));}
function LO(a,b){JM(a,b);return a;}
var DJ=C(Dh);
function Ic(a,b,c,d){F6(a,b,c,d);}
function Kw(){var a=this;DJ.call(a);a.iU=0;a.fh=0;a.gb=null;}
function V3(a,b,c,d,e,f){var g=new Kw();UG(g,a,b,c,d,e,f);return g;}
function UG(a,b,c,d,e,f,g){Ic(a,c,e,f);a.fh=b;a.iU=g;a.gb=d;}
function NO(a,b){return a.gb.data[b+a.fh|0];}
function IT(){P.call(this);this.h_=null;}
function X3(a){var b=new IT();MW(b,a);return b;}
function MW(a,b){a.h_=b;BJ(a);a.O=R(0.75,0.75,0.75);a.W=M(4.0,3.0,(-4.0));a.bb=D(82);}
function IR(){P.call(this);this.hb=null;}
function XU(a){var b=new IR();QP(b,a);return b;}
function QP(a,b){a.hb=b;BJ(a);a.O=R(0.75,0.75,0.75);a.W=M((-4.0),3.0,(-4.0));a.bb=D(82);}
var Jt=C();
function QS(b){$rt_putStdout(b);}
function IS(){P.call(this);this.hI=null;}
function Wx(a){var b=new IS();Rw(b,a);return b;}
function Rw(a,b){a.hI=b;BJ(a);a.O=R(0.75,0.75,0.75);a.W=M(4.0,3.0,4.0);a.bb=D(82);}
function IN(){V.call(this);this.gj=null;}
function X$(a){var b=new IN();RV(b,a);return b;}
function RV(a,b){a.gj=b;BM(a);BG();a.n=ZR;a.P=M(0.0,1.0,0.0);a.X=1.0;a.S=D(84);}
var Fj=C();
var Z3=null;function Ki(){return (DN()).hE();}
function Uz(b){return (DN()).b_(b);}
function O2(b){return (DN()).c7(b);}
function M$(b){return (DN()).bf(b);}
function P$(b){Z3=b;}
function DN(){var b;if(Z3===null){b=XI();DE();P$(Fv(F(CT),b,Z4));if(Z3===null){(HH()).e8(D(85));Z3=V6();}}return Z3;}
function Ri(){return GL(F(CT));}
var Ju=C();
function Oo(b){return b?1:0;}
var BR=C();
var Z5=null;var Z6=null;var Z7=null;var Z8=null;var Z9=null;var Z$=null;function FX(){FX=L(BR);P6();}
function Jz(b){FX();return b instanceof X;}
function Lw(b){FX();return b===null?null:b instanceof Cu?b:!(b instanceof X)?null:Bc(b.N());}
function Jq(b){var c,$$je;FX();if(b===null)return null;a:{try{c=Bc(E8(b));}catch($$e){$$je=W($$e);if($$je instanceof EI){break a;}else{throw $$e;}}return c;}return null;}
function Ek(b){var c;FX();c=Lw(b);if(c===null&&b!==null)return Jq(b.d());return c;}
function P6(){Z5=K4(0);Z6=Ge(0);Z7=Bc(0);Z8=Ev(BL);Z9=Le(0.0);Z$=Bu(0.0);}
var Gl=C(BP);
function Wn(){var a=new Gl();Q6(a);return a;}
function Q6(a){var b,c;DD(a);b=U(BK,7);c=b.data;Bn();c[0]=Z_;c[1]=WF(a);c[2]=VK(a);c[3]=U$(a);c[4]=VY(a);c[5]=WQ(a);c[6]=Vm(a);a.cd=b;a.cl=C2(P,[XC(a),WU(a),Xu(a)]);a.by=I2(M(0.0,1.0,0.0),M(5.0,5.0,5.0));}
var Gk=C(BP);
function Yb(){var a=new Gk();O1(a);return a;}
function O1(a){var b,c;DD(a);b=U(BK,2);c=b.data;c[0]=X$(a);Bn();c[1]=Z_;a.cd=b;a.cl=C2(P,[Wx(a),X3(a),Wd(a),XU(a)]);a.by=F0(M(0.0,1.0,0.0),M(3.0,3.0,3.0),600.0,450.0);}
function B7(){X.call(this);this.ba=0.0;}
var AAa=0.0;var AAb=null;function Fm(){Fm=L(B7);Pl();}
function PA(a){var b=new B7();J2(b,a);return b;}
function J2(a,b){Fm();B$(a);a.ba=b;}
function UA(a){return a.ba;}
function Pn(a){return a.ba|0;}
function Bu(b){Fm();return PA(b);}
function Gp(b){Fm();return ((K()).hQ(b)).d();}
function Ns(a){return Gp(a.ba);}
function UV(a,b){if(a===b)return 1;return b instanceof B7&&b.ba===a.ba?1:0;}
function Lr(b,c){Fm();return Df(b,c);}
function Ne(a){return isNaN(a.ba)?1:0;}
function OY(a){return !isFinite(a.ba)?1:0;}
function Pl(){AAa=NaN;AAb=F($rt_doublecls());}
var Gj=C(BP);
function Wq(){var a=new Gj();S$(a);return a;}
function S$(a){var b,c;DD(a);b=U(BK,1);c=b.data;Bn();c[0]=Z_;a.cd=b;b=U(P,1);b.data[0]=W6(a);a.cl=b;a.by=F0(M(0.0,1.0,0.0),M(3.0,3.0,3.0),600.0,450.0);}
function D5(){var a=this;BK.call(a);a.eL=0.0;a.cx=null;}
function AAc(){var a=new D5();F4(a);return a;}
function F4(a){FE(a);}
function Qt(a,b){return a.cx;}
function S6(a,b){var c,d;c=BB(a.cx,b.be);if(c>0.0)return null;d=(a.eL+BB(a.cx,b.bs))/ -c;return Va(a,a,b,d);}
var Gn=C(D5);
function Wk(){var a=new Gn();S5(a);return a;}
function S5(a){F4(a);BG();a.n=AAd;a.cx=M(0.0,1.0,0.0);a.eL=0.0;a.S=D(86);}
var Gm=C(V);
function X0(){var a=new Gm();Pm(a);return a;}
function Pm(a){BM(a);BG();a.n=AAd;a.P=M(0.0,(-10000.0),0.0);a.X=1.0E-7;a.S=D(86);}
function J0(){var a=this;By.call(a);a.eD=null;a.fM=null;}
function XA(a,b){var c=new J0();Up(c,a,b);return c;}
function Up(a,b,c){a.eD=b;a.fM=c;CZ(a);a.bs=a.eD;a.be=a.fM;}
function JX(){var a=this;By.call(a);a.eO=null;a.eQ=null;}
function WC(a,b){var c=new JX();UR(c,a,b);return c;}
function UR(a,b,c){a.eO=b;a.eQ=c;CZ(a);a.bs=a.eO;a.be=a.eQ;}
function K1(){BX.call(this);this.df=null;}
function Vq(a){var b=new K1();PJ(b,a);return b;}
function PJ(a,b){a.df=b;Dy(a);}
function Tm(a){return a.df.r();}
function S7(a){return X2(a.df);}
function JZ(){var a=this;By.call(a);a.fY=null;a.ef=null;}
function XG(a,b){var c=new JZ();UP(c,a,b);return c;}
function UP(a,b,c){a.fY=b;a.ef=c;CZ(a);a.bs=a.fY;a.be=a.ef;}
var CK=C(0);
function Ua(a,b,c){return (a.hD(b)).h2(W8(c));}
function RF(b,c){return c.gV(b);}
var EK=C();
var AAe=null;function AAf(){var a=new EK();UT(a);return a;}
function UT(a){E(a);}
function Uq(a){if(AAe===null)AAe=CU(NL()?1:0);return AAe.fa();}
function Nw(a,b){var c,d;c=HO();d=W7(c);SA($rt_ustr(b),CJ(d,"handle"));return c.ga();}
function Mm(b,c){b.bj(XZ(c));}
function NL(){{try {if(typeof WebAssembly==="object"&&typeof WebAssembly.instantiate==="function"){const module=new WebAssembly.Module(Uint8Array.of(0x0,0x61,0x73,0x6d,0x01,0x00,0x00,0x00));if(module instanceof WebAssembly.Module)return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;}}catch(e){}return false;}}
function SA(b,c){((fetch(b)).then(function(response){return WebAssembly.compileStreaming(response);})).then(function(module){return c(module);});}
var Ft=C();
var JW=C(O);
function P9(){var a=new JW();LN(a);return a;}
function LN(a){Bq(a);}
function Jh(){B.call(this);this.ei=null;}
function W8(a){var b=new Jh();SQ(b,a);return b;}
function SQ(a,b){E(a);a.ei=b;}
function QD(a,b){return HV(a,b);}
function HV(a,b){return RF(a.ei,b);}
function Br(){var a=this;B.call(a);a.bK=null;a.bO=null;a.bX=null;a.bh=null;a.bz=0.0;a.bV=0.0;a.cA=null;}
function AAg(){var a=new Br();C3(a);return a;}
function C3(a){E(a);}
var Kc=C(Br);
function Vl(){var a=new Kc();O4(a);return a;}
function O4(a){C3(a);a.cA=D(86);a.bh=Vp();a.bO=Vz();a.bX=VJ();a.bK=W5();a.bV=15.0;a.bz=0.0;}
function T1(b){return R(0.5,0.5,0.5);}
function Nl(b){return R(0.25,0.25,0.25);}
function LQ(b){return Bu(0.65);}
function SU(b){return Bu(0.0);}
var J_=C(Br);
function U2(){var a=new J_();QQ(a);return a;}
function QQ(a){C3(a);a.cA=D(87);a.bh=XN();a.bO=Wv();a.bX=XJ();a.bK=U0();a.bV=0.0;a.bz=0.1;}
function UI(b){return R(0.25,0.25,0.25);}
function OT(b){return R(0.25,0.25,0.25);}
function M6(b){return Bu(0.25);}
function P0(b){return Bu(0.0);}
var JB=C(Br);
function WW(){var a=new JB();L2(a);return a;}
function L2(a){C3(a);a.cA=D(88);a.bh=WO();a.bO=W1();a.bX=Vs();a.bK=Vu();a.bV=100.0;a.bz=0.95;}
function M1(b){return R(0.5,0.5,0.5);}
function TM(b){return R(0.0,0.0,0.0);}
function RP(b){return Bu(0.0);}
function QX(b){return Bu(1.0);}
var Ka=C(Br);
function Xe(){var a=new Ka();Tv(a);return a;}
function Tv(a){C3(a);a.cA=D(89);a.bh=VU();a.bO=XH();a.bX=WA();a.bK=X_();a.bV=25.0;a.bz=0.1;}
function MQ(b){return R(0.75,0.75,0.75);}
function NG(b){return R(1.0,1.0,1.0);}
function Nv(b){return Bu(1.0);}
function QW(b){return Bu(0.0);}
var FT=C(Cp);
function AAh(){var a=new FT();NV(a);return a;}
function WT(a){var b=new FT();KY(b,a);return b;}
function Pk(b){if(b!==null&&!(typeof b==='undefined'?1:0))return WT(b);return null;}
function NV(a){KY(a,KE());}
function KY(a,b){Eh(a,b);}
function Kh(a,b){return a.bu[$rt_ustr(b)]||null;}
function Gw(a){return Iv(N$(a.bu));}
function Lj(a,b,c){a.bu[$rt_ustr(b)]=c;return a;}
function TV(a){return Hs(a);}
function Pr(a,b){return JN(a,b);}
function Oy(a,b){return I7(a,b);}
function L_(a,b){return H5(a,b);}
function Tz(a,b){return Gu(a,b);}
function Mi(a){return LE(a);}
function UB(a,b){return Kd(a,b);}
function PD(a){return GN(a);}
function UW(a,b,c){return Lj(a,b,c);}
function TU(a,b){return Kh(a,b);}
function O_(a){return Gw(a);}
function BU(){var a=this;B.call(a);a.i=null;a.cb=0;}
var AAi=null;function Lv(){Lv=L(BU);RX();}
function U8(a){var b=new BU();GJ(b,a);return b;}
function O9(a,b,c){var d=new BU();LH(d,a,b,c);return d;}
function GJ(a,b){var c,d,e;Lv();c=b.data;E(a);d=c.length;a.i=BI(d);e=0;while(e<d){a.i.data[e]=c[e];e=e+1|0;}}
function LH(a,b,c,d){var e,f;Lv();E(a);a.i=BI(d);e=0;while(e<d){f=b.data;a.i.data[e]=f[e+c|0];e=e+1|0;}}
function NS(a,b){if(b>=0&&b<a.i.data.length)return a.i.data[b];G(Pi());}
function Rv(a){return a.i.data.length;}
function TO(a){return a.i.data.length?0:1;}
function Su(a,b){var c,d,e,f,g;if(a===b)return 0;c=BH(a.c(),b.c());d=0;while(true){if(d>=c)return a.c()-b.c()|0;e=a.o(d);f=b.o(d);g=e-f|0;if(g)break;d=d+1|0;}return g;}
function QC(a,b){var c,d,e,f;if(a===b)return 1;if(b.c()>a.c())return 0;c=0;d=a.c()-b.c()|0;while(d<a.c()){e=a.o(d);f=c+1|0;if(e!=b.o(c))return 0;d=d+1|0;c=f;}return 1;}
function Nz(a,b,c){var d,e,f,g;d=B_(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.i.data.length)return (-1);if(a.i.data[d]==e)break;d=d+1|0;}return d;}f=FV(b);g=Fs(b);while(true){if(d>=(a.i.data.length-1|0))return (-1);if(a.i.data[d]==f&&a.i.data[d+1|0]==g)break;d=d+1|0;}return d;}
function QB(a,b){return a.ee(b,0);}
function NX(a,b,c){var d,e,f,g,h,i;d=BH(c,a.c()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.i.data[d]==e)break;d=d+(-1)|0;}return d;}f=FV(b);g=Fs(b);while(true){if(d<1)return (-1);if(a.i.data[d]==g){h=a.i.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function S9(a,b){return a.iS(b,a.c()-1|0);}
function Mz(a,b,c){if(b>c)G(G3());return O9(a.i,b,c-b|0);}
function Th(a,b){return a.bM(b,a.c());}
function OO(a){return a;}
function TW(a){var b,c,d;b=BI(a.i.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.i.data[c];c=c+1|0;}return b;}
function Iq(b){Lv();return b===null?D(3):b.d();}
function Sv(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BU))return 0;c=b;if(c.c()!=a.c())return 0;d=0;while(d<c.c()){if(a.o(d)!=c.o(d))return 0;d=d+1|0;}return 1;}
function SN(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.c()!=b.c())return 0;c=0;while(c<a.c()){if(Fl(a.o(c))!=Fl(b.o(c)))return 0;c=c+1|0;}return 1;}
function NK(a){var b,c,d,e;a:{if(!a.cb){b=a.i.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.cb=(31*a.cb|0)+e|0;d=d+1|0;}}}return a.cb;}
function Re(a,b){return a.hV(b);}
function RX(){AAi=Xl();}
var LI=C(O);
function Xf(){var a=new LI();Od(a);return a;}
function Od(a){Bq(a);}
function D7(){var a=this;C$.call(a);a.fg=null;a.ew=null;}
function H0(a,b,c,d){JU(a,b,c,d);a.fg=BI(512);a.ew=DB(512);}
function NZ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.fg;e=0;f=0;g=a.ew;a:{while(true){if((e+32|0)>f&&B9(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=BH(BY(b)+j|0,i.length);b.iF(d,j,f-j|0);e=0;}if(!B9(c)){if(!B9(b)&&e>=f){Bs();k=ZA;}else{Bs();k=Zz;}break a;}i=g.data;l=0;m=BH(BY(c),i.length);n=VO(b,c);k=a.gN(d,e,f,g,l,m,n);e=n.e_;j=n.fN;if(k===null){if(!B9(b)&&e>=f){Bs();k=ZA;}else if(!B9(c)&&e>=f){Bs();k=Zz;}}c.fc(g,0,j);if(k!==null)break;}}b.eB(CO(b)-(f-e|0)|0);return k;}
var IA=C(D7);
function WH(a){var b=new IA();QE(b,a);return b;}
function QE(a,b){H0(a,b,2.0,4.0);}
function Un(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.dN(2))break a;Bs();i=Zz;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!KA(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.dN(3))break a;Bs();i=Zz;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if(!EA(l))
{i=Dm(1);break a;}if(j>=d){if(h.ii())break a;Bs();i=ZA;break a;}n=j+1|0;p=k[j];if(!Ex(p)){j=n+(-2)|0;i=Dm(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.dN(4))break a;Bs();i=Zz;break a;}k=e.data;q=J7(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.iN(j);h.gz(f);return i;}
var Fh=C(0);
function Ij(){B.call(this);this.eT=null;}
function VW(a){var b=new Ij();Nj(b,a);return b;}
function Nj(a,b){E(a);a.eT=b;}
function Nd(a,b){Hy(a,b);}
function Hy(a,b){Sb(a.eT,b);}
function MZ(a,b){a.il(b);}
var I_=C();
function X4(){var a=new I_();Rd(a);return a;}
function Rd(a){E(a);}
var Bz=C();
var ZS=0;var ZP=0;var Z_=null;var AAj=null;var AAk=null;var AAl=null;var AAm=null;var AAn=null;function Bn(){Bn=L(Bz);Qk();}
function Qk(){var b,c;ZS=0;ZP=0;b=U(Br,4);c=b.data;BG();c[0]=AAo;c[1]=AAd;c[2]=ZR;c[3]=ZT;AAp=b;Z_=Wk();AAm=X0();AAj=Wn();AAk=Yb();AAl=Wq();b=U(BP,1);b.data[0]=AAj;AAn=b;}
var Ja=C();
function Ww(){var a=new Ja();P7(a);return a;}
function P7(a){E(a);}
function Pz(a,b,c){return Kn(b,c);}
var EI=C(Cv);
function X5(){var a=new EI();NB(a);return a;}
function Dc(a){var b=new EI();UE(b,a);return b;}
function NB(a){EO(a);}
function UE(a,b){LF(a,b);}
function Hc(){P.call(this);this.hU=null;}
function W6(a){var b=new Hc();Pb(b,a);return b;}
function Pb(a,b){a.hU=b;BJ(a);a.O=R(1.0,1.0,1.0);a.W=M(0.0,1.0,0.0);a.bb=D(82);}
var FO=C(Di);
var ZN=null;function Rg(){Rg=L(FO);QK();}
function Xj(){var a=new FO();KB(a);return a;}
function KB(a){Rg();HY(a,D(90),U(BU,0));}
function Tc(a){return WH(a);}
function QK(){ZN=Xj();}
var CN=C();
var AAq=0;var AAr=0;var AAs=null;function TX(b,c){var d;d=3*b|0;if(c!==null&&c.data.length==d)return c;return DB(d);}
function NJ(b,c,d,e){var f,g,h,i,j,k,l;AAq=b;AAr=c;Bn();AAs=AAn.data[d];f=e*0.005;g=0.55+f*6.0*2.0*3.141592653589793;h=1.55;i=2.55;j=f-0.2;if(j>0.0){h=h+20.0*Kg(1.0,j);i=i+20.0*Jy(Kg(1.0,j)*3.141592653589793/2.0);}k=i*Nt(g);l=i*Jy(g);AAs.by=I2(M(0.0,1.0,0.0),M(k,h,l));}
function So(b,c){var d,e;d=0;e=0;while(e<AAq){d=M7(e,b,c,d);e=e+1|0;}}
function M7(b,c,d,e){var f,g,h,i;f=d.data;g=SI(b,c,AAs,AAq,AAr);h=e+1|0;f[e]=(g.cV(g.bo)*255.0+(-128.0)|0)<<24>>24;i=h+1|0;f[h]=(g.cV(g.bl)*255.0+(-128.0)|0)<<24>>24;h=i+1|0;f[i]=(g.cV(g.bm)*255.0+(-128.0)|0)<<24>>24;return h;}
var Lt=C();
function Vg(){var a=new Lt();N_(a);return a;}
function N_(a){E(a);}
function UN(b){HS(b,Vg());b.i3();}
function Nx(a,b){if(!(b instanceof BU))self.postMessage(b);else self.postMessage($rt_ustr(b));}
function RO(a,b){var c,d,e,f,g;c=b.data;d=c.length;e=new Array();f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function PS(a,b){self.onmessage=CJ(VW(b),"handleEvent");}
function Sb(b,c){b.g6(c.data);}
function Fi(){var a=this;B.call(a);a.bo=0.0;a.bl=0.0;a.bm=0.0;}
var ZV=null;function Cr(){Cr=L(Fi);QN();}
function Ey(a,b,c){var d=new Fi();Ir(d,a,b,c);return d;}
function Ir(a,b,c,d){Cr();E(a);a.bo=b;a.bl=c;a.bm=d;}
function R(b,c,d){Cr();return Ey(b,c,d);}
function B6(b,c){Cr();return Ey(b*c.bo,b*c.bl,b*c.bm);}
function EZ(b,c){Cr();return Ey(b.bo*c.bo,b.bl*c.bl,b.bm*c.bm);}
function Cj(b,c){Cr();return Ey(b.bo+c.bo,b.bl+c.bl,b.bm+c.bm);}
function TH(a,b){if(b<0.0)b=0.0;else if(b>1.0)b=1.0;return b;}
function QN(){ZV=R(0.0,0.0,0.0);}
var GI=C(BC);
function Oe(){var a=new GI();QH(a);return a;}
function JS(a){var b=new GI();N4(b,a);return b;}
function QH(a){Du(a);}
function N4(a,b){Ef(a,b);}
var Gc=C(O);
function Wh(a){var b=new Gc();QV(b,a);return b;}
function V1(){var a=new Gc();Pf(a);return a;}
function QV(a,b){DZ(a,b);}
function Pf(a){Bq(a);}
function Km(){B.call(this);this.dR=null;}
function Xh(a){var b=new Km();S2(b,a);return b;}
function S2(a,b){E(a);a.dR=b;}
function X7(b){return Xh(b);}
function T$(a,b){a.dR.bj(b);}
function TJ(a,b){a.dR.hh(b);}
function CE(){var a=this;B.call(a);a.he=null;a.eX=0;}
function Fw(a,b,c){E(a);a.he=b;a.eX=c;}
function Bl(a){return a.eX;}
function B8(){var a=this;B.call(a);a.I=null;a.b5=0.0;a.bN=null;}
function AAt(){var a=new B8();Ff(a);return a;}
function Ff(a){E(a);}
function IB(){var a=this;B8.call(a);a.ey=null;a.eo=null;a.fp=0.0;a.ik=null;}
function Va(a,b,c,d){var e=new IB();UK(e,a,b,c,d);return e;}
function UK(a,b,c,d,e){a.ik=b;a.ey=c;a.eo=d;a.fp=e;Ff(a);a.I=a.ey;a.bN=a.eo;a.b5=a.fp;}
function H9(){var a=this;B.call(a);a.M=null;a.en=null;a.u=null;a.x=0;}
function XD(){var a=new H9();UF(a);return a;}
function UF(a){E(a);a.u=Bx();}
var Kt=C();
function Jy(b){return Math.sin(b);}
function Nt(b){return Math.cos(b);}
function FL(b){return Math.sqrt(b);}
function Sp(b){return Math.floor(b);}
function C9(b,c){return Math.pow(b,c);}
function BH(b,c){if(b<c)c=b;return c;}
function B_(b,c){if(b>c)c=b;return c;}
function Kg(b,c){if(b<c)c=b;return c;}
function TD(b){if(b<=0.0)b= -b;return b;}
function Ew(){X.call(this);this.h3=0;}
var AAu=null;function SW(){SW=L(Ew);M5();}
function X9(a){var b=new Ew();I6(b,a);return b;}
function I6(a,b){SW();B$(a);a.h3=b;}
function K4(b){SW();return X9(b);}
function M5(){AAu=F($rt_bytecls());}
function Fq(){var a=this;B.call(a);a.g$=null;a.gh=null;}
var AAv=null;function EU(){EU=L(Fq);NP();}
function W_(a){var b=new Fq();GM(b,a);return b;}
function GM(a,b){EU();E(a);a.g$=b;}
function Lk(){EU();return De(D(91));}
function De(b){var c,d,e;EU();c=AAv.cJ(b);if(c===null){c=W_(b);d=b.iI(46);if(d>=0){e=b.bM(0,d);c.gh=De(e);}else if(!b.ch())c.gh=De(D(92));AAv.bn(b,c);}return c;}
function MP(a,b){var c;c=Jb(a,b.cR(),b.gk());if(C7(b.fG())>=C7(ZC))JE($rt_ustr(c));else if(C7(b.fG())<C7(Zf))F7($rt_ustr(c));else Jn($rt_ustr(c));}
function Jb(a,b,c){var d,e,f,g,h,i,j;if(c===null)return b;d=K();e=0;a:{while(true){if(e>=b.c())break a;f=b.ee(123,e);if(f<0)break a;g=f+1|0;h=Hl(g,b);if(h<0)break;if(b.o(h)!=125){d.fn(b,e,h);e=h;continue;}i=c.data;j=E8(b.bM(g,h));if(j>=i.length){d.fn(b,e,h);e=h;continue;}d.U(i[j]);e=h+1|0;}}return d.d();}
function Hl(b,c){var d,e;EU();while(true){if(b>=c.c())return (-1);d=b+1|0;e=c.o(b);if(e<=48)break;if(e>=57)break;b=d;}return d;}
function Ta(a,b,c){a.g7(Xw(b,c));}
function NP(){AAv=UM();}
function F7(b){if(console){console.info(b);}}
function Jn(b){if(console){console.warn(b);}}
function JE(b){if(console){console.error(b);}}
function Ei(){var a=this;B.call(a);a.ft=null;a.e6=null;a.gC=BL;a.g9=null;a.iX=BL;a.ho=BL;}
var AAw=BL;function Xw(a,b){var c=new Ei();TE(c,a,b);return c;}
function TE(a,b,c){var d;E(a);a.ft=b;a.e6=c;a.gC=I0();d=AAw;AAw=T(d,H(1));a.iX=d;a.ho=(Bx()).g_();}
function OU(a){return a.ft;}
function PH(a){return a.e6;}
function Pc(a){return a.g9;}
function F3(){B.call(this);this.dl=null;}
function Wp(a){var b=new F3();L0(b,a);return b;}
function L0(a,b){a.dl=b;E(a);}
function Tu(a,b){a.dl.dv(b);}
function Qq(a,b){a.dl.cK(b);}
var Cc=C();
var AAp=null;var AAo=null;var AAd=null;var ZR=null;var ZT=null;function BG(){BG=L(Cc);Og();}
function Og(){AAo=U2();AAd=Vl();ZR=Xe();ZT=WW();}
var JF=C(Bo);
function R1(a){var b=new JF();OP(b,a);return b;}
function OP(a,b){HQ(a,b,null,0,0);}
function HA(){DV.call(this);this.eG=null;}
function Vj(a){var b=new HA();R$(b,a);return b;}
function R$(a,b){Im(a,b);}
function Q$(a){return a.eG;}
function Q9(a,b){a.eG=b;}
var Id=C();
function Wl(){var a=new Id();LX(a);return a;}
function LX(a){E(a);}
function Om(a,b){return IV(a,b);}
function IV(a,b){return Qz(b);}
function Jv(){var a=this;Cm.call(a);a.eP=null;a.d_=null;a.er=null;a.eS=null;}
function Wo(a,b,c,d){var e=new Jv();UD(e,a,b,c,d);return e;}
function UD(a,b,c,d,e){a.eP=b;a.d_=c;a.er=d;a.eS=e;FQ(a);a.dH=a.eP;a.dA=a.d_;a.c0=a.er;a.cZ=a.eS;}
var Ke=C(O);
function V8(){var a=new Ke();Rx(a);return a;}
function Rx(a){Bq(a);}
var Js=C();
function Ph(b){var c,d,e,f;c=b.data;d=c.length;e=0;while(true){if(e>=d)return null;f=c[e];if(f!==null)break;e=e+1|0;}return f;}
function Jw(){var a=this;Cm.call(a);a.fr=null;a.d6=null;a.fs=null;a.ep=null;}
function WE(a,b,c,d){var e=new Jw();SV(e,a,b,c,d);return e;}
function SV(a,b,c,d,e){a.fr=b;a.d6=c;a.fs=d;a.ep=e;FQ(a);a.dH=a.fr;a.dA=a.d6;a.c0=a.fs;a.cZ=a.ep;}
var HP=C();
function Sh(b){if(!(b instanceof BO))return null;return b;}
function PQ(b){if(b===null)return null;if(b.ej(D(74)))return CU(1);if(!b.ej(D(73)))return null;return CU(0);}
function Tl(b){var c;c=Sh(b);if(c===null&&b!==null)return PQ(b.d());return c;}
var KZ=C(DR);
function Wr(a,b){var c=new KZ();Nm(c,a,b);return c;}
function Nm(a,b,c){K5(a,b,c);}
function RL(a,b){var c,d,e,f,g;c=DB(b);d=0;while(d<b){e=c.data;f=a.e0;g=a.dc;a.dc=g+1|0;e[d]=f[g];d=d+1|0;}return c;}
function DM(){var a=this;B.call(a);a.b6=0;a.eA=0;}
var ZA=null;var Zz=null;function Bs(){Bs=L(DM);Qr();}
function Hr(a,b){var c=new DM();Ig(c,a,b);return c;}
function Ig(a,b,c){Bs();E(a);a.b6=b;a.eA=c;}
function MN(a){return a.b6?0:1;}
function R9(a){return a.b6!=1?0:1;}
function Um(a){return !a.h6()&&!a.fH()?0:1;}
function Se(a){return a.b6!=2?0:1;}
function Sr(a){return a.b6!=3?0:1;}
function Q1(a){if(a.is())return a.eA;G(W3());}
function Dm(b){Bs();return Hr(2,b);}
function Qr(){ZA=Hr(0,0);Zz=Hr(1,0);}
var Dx=C();
var AAx=null;var AAy=null;function Eq(){Eq=L(Dx);Si();}
function KG(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;Eq();d=$rt_doubleToLongBits(b);c.eg=CW(Bj(d,Q(0, 2147483648)),BL)?0:1;e=Bj(d,Q(4294967295, 1048575));f=DK(C6(d,52))&2047;if(CW(e,BL)&&!f){c.cQ=BL;c.c3=0;return;}g=0;if(f)h=WN(e,Q(0, 1048576));else{h=Cb(e,1);while(CW(Bj(h,Q(0, 1048576)),BL)){h=Cb(h,1);f=f+(-1)|0;g=g+1|0;}}i=Nc(AAy,f);if(i<0)i=( -i|0)-2|0;j=f-AAy.data[i]|0;k=12+j|0;l=FD(h,AAx.data[i],k);if(IM(l,Q(2808348672, 232830643))){i=i+1|0;m=f-AAy.data[i]|0;k=12+m|0;l=FD(h,AAx.data[i],k);}n=BZ(AAx.data[i],
(63-k|0)-g|0);o=C6(T(n,H(1)),1);p=C6(n,1);if(CW(h,Q(0, 1048576)))p=C6(p,2);q=J9(l,p);r=Lh(l,o);m=XY(q,r);h=m>0?N(Bd(l,q),q):m<0?T(N(Bd(l,r),r),r):N(Bd(T(l,Bd(r,H(2))),r),r);if(IM(h,Q(2808348672, 232830643))){i=i+1|0;h=Bd(h,H(10));}else if(I3(h,Q(1569325056, 23283064))){i=i+(-1)|0;h=N(h,H(10));}c.cQ=h;c.c3=i-330|0;}
function J9(b,c){var d,e;Eq();d=H(10);while(CX(d,c)){d=N(d,H(10));}e=Dd(b,d);if(IM(e,Bd(c,H(2))))d=Bd(d,H(10));return d;}
function Lh(b,c){var d,e;Eq();d=H(1);while(CX(d,c)){d=N(d,H(10));}e=Dd(b,d);if(IF(Xp(d,e),Bd(c,H(2))))d=Bd(d,H(10));return d;}
function FD(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;Eq();e=Bj(b,H(65535));f=Bj(BZ(b,16),H(65535));g=Bj(BZ(b,32),H(65535));h=Bj(BZ(b,48),H(65535));i=Bj(c,H(65535));j=Bj(BZ(c,16),H(65535));k=Bj(BZ(c,32),H(65535));l=Bj(BZ(c,48),H(65535));m=T(T(N(k,e),N(j,f)),N(i,g));n=T(T(T(N(l,e),N(k,f)),N(j,g)),N(i,h));o=T(T(N(l,f),N(k,g)),N(j,h));p=T(N(l,g),N(k,h));q=N(l,h);r=T(T(Cb(q,32+d|0),Cb(p,16+d|0)),Cb(o,d));s=d>16?T(r,Cb(n,d-16|0)):T(r,BZ(n,16-d|0));s=T(s,BZ(m,32-d|0));return s;}
function Si(){var b,c,d,e,f,g,h,i,j,k,l;AAx=Xa(660);AAy=E1(660);b=Q(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AAx.data;g=d+330|0;f[g]=DP(e,H(80));AAy.data[g]=c;e=DP(e,H(10));h=GR(e,H(10));while(CX(e,b)&&CW(Bj(e,Q(0, 2147483648)),BL)){e=Cb(e,1);c=c+1|0;h=Cb(h,1);}e=T(e,Bd(h,H(10)));d=d+1|0;}i=Q(3435973836, 214748364);j=1023;d=0;while(d<330){k=0;e=b;while(IF(e,i)){e=C6(e,1);k=k+1|0;j=j+(-1)|0;}h=N(e,H(10));if(k<=0)b=h;else{l=Bj(b,H((1<<k)-1|0));b=T(h,C6(N(l,H(10)),k));}f=AAx.data;g=(330-d|0)-1|0;f[g]
=DP(b,H(80));AAy.data[g]=j;d=d+1|0;}}
var G0=C();
function Hx(b){var c,d,e;c=WZ(b.r());d=b.t();while(d.y()){e=d.s();if(Bh(e,B2))c.bx(FI(e));else if(!Bh(e,Ci))c.bx(e);else c.bx(Hx(e));}return c;}
function FI(b){var c,d,e,f,g,h;c=VQ(b.r());d=(b.fZ()).t();while(d.y()){e=d.s();f=e.bQ();if(Bh(f,B2)){g=f;c.bn(e.br(),FI(g));}else if(!Bh(f,Ci))c.bn(e.br(),f);else{h=f;c.bn(e.br(),Hx(h));}}return c;}
function Ia(){var a=this;B8.call(a);a.f0=null;a.fd=null;a.fb=0.0;a.hx=null;}
function Xc(a,b,c,d){var e=new Ia();ON(e,a,b,c,d);return e;}
function ON(a,b,c,d,e){a.hx=b;a.f0=c;a.fd=d;a.fb=e;Ff(a);a.I=a.f0;a.bN=a.fd;a.b5=a.fb;}
var Kj=C(CG);
var Ga=C();
function Wj(){var a=new Ga();Nk(a);return a;}
function Nk(a){E(a);}
function Td(a,b){return Hg(a,b);}
function Hg(a,b){return UX(b);}
var Bt=C(CE);
var YZ=null;var Y1=null;var Y0=null;var Zl=null;var Zk=null;var Zi=null;var Zj=null;var AAz=null;function Z(){Z=L(Bt);Rm();}
function Ck(a,b){var c=new Bt();Lp(c,a,b);return c;}
function E9(){Z();return AAz.dS();}
function Lp(a,b,c){Z();Fw(a,b,c);}
function F5(){Z();return C2(Bt,[YZ,Y1,Y0,Zl,Zk,Zi,Zj]);}
function Rm(){YZ=Ck(D(93),0);Y1=Ck(D(94),1);Y0=Ck(D(95),2);Zl=Ck(D(96),3);Zk=Ck(D(97),4);Zi=Ck(D(98),5);Zj=Ck(D(99),6);AAz=F5();}
function K7(){var a=this;B.call(a);a.J=null;a.eU=null;a.fu=null;a.e1=null;a.d7=null;a.ea=null;}
function V2(a){var b=new K7();Sj(b,a);return b;}
function Sj(a,b){var c;E(a);a.J=b;c=b.exports.memory.buffer;a.eU=new Int8Array(c);a.fu=new Int16Array(c);a.e1=new Int32Array(c);a.d7=new Float32Array(c);a.ea=new Float64Array(c);}
function OF(a,b){return Wr(a,b);}
function Mq(a,b,c){return M$(IW(a,b,c));}
function IW(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=c.data;switch(d.length){case 0:return a.J.exports[$rt_ustr(b)]();case 1:e=a.J;f=I(d[0]);return e.exports[$rt_ustr(b)](f);case 2:e=a.J;f=I(d[0]);g=I(d[1]);return e.exports[$rt_ustr(b)](f,g);case 3:e=a.J;f=I(d[0]);g=I(d[1]);h=I(d[2]);return e.exports[$rt_ustr(b)](f,g,h);case 4:e=a.J;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);return e.exports[$rt_ustr(b)](f,g,h,i);case 5:e=a.J;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);return e.exports[$rt_ustr(b)](f,g,h,i,j);case 6:e
=a.J;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k);case 7:e=a.J;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);l=I(d[6]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l);case 8:e=a.J;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);l=I(d[6]);m=I(d[7]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l,m);case 9:e=a.J;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);l=I(d[6]);m=I(d[7]);n=I(d[8]);return e.exports[$rt_ustr(b)](f,g,
h,i,j,k,l,m,n);default:}return null;}
function I(b){return O2(b);}
function If(){var a=this;B.call(a);a.eH=null;a.fV=0;}
function Wz(a){var b=new If();PW(b,a);return b;}
function PW(a,b){E(a);a.eH=b;}
var Ie=C(Bm);
function CH(){B.call(this);this.dp=null;}
function VZ(a){var b=new CH();Pw(b,a);return b;}
function Pw(a,b){E(a);a.dp=b;}
var IO=C(Bm);
var JH=C(O);
function Xt(){var a=new JH();SH(a);return a;}
function SH(a){Bq(a);}
var B5=C(CE);
var Zd=null;var Z4=null;var Ze=null;var AAA=null;function DE(){DE=L(B5);Ps();}
function I9(a,b){var c=new B5();Ky(c,a,b);return c;}
function Ky(a,b,c){DE();Fw(a,b,c);}
function H6(){DE();return C2(B5,[Zd,Z4,Ze]);}
function Ps(){Zd=I9(D(100),0);Z4=I9(D(101),1);Ze=I9(D(102),2);AAA=H6();}
var ID=C();
function W0(){var a=new ID();LR(a);return a;}
function LR(a){E(a);}
function K2(){B.call(this);this.fz=null;}
function W7(a){var b=new K2();OW(b,a);return b;}
function OW(a,b){E(a);a.fz=b;}
function SY(a,b){Mm(a.fz,b);}
function Sx(a,b){a.dz(b);}
function GO(){BQ.call(this);this.dK=null;}
function Vn(a){var b=new GO();OR(b,a);return b;}
function OR(a,b){D2(a);a.dK=b;}
function LM(a,b){return a.dK.data[b];}
function NT(a){return a.dK.data.length;}
var BN=C();
var AAB=null;var AAC=null;var AAD=null;var AAE=null;var AAF=null;var AAG=null;var AAH=null;function RB(){RB=L(BN);MF();}
function Hm(b,c){var d,e,f;RB();if(c===null)c=AAG;d=U(B,b.r());b.gw(d);QF(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;b.g4(e,f[e]);e=e+1|0;}}
function Kn(b,c){RB();return b!==null?b.gg(c): -c.gg(b)|0;}
function MF(){AAB=XK();AAC=Wy();AAD=XO();AAE=VP();AAF=XV();AAG=Ww();AAH=X4();}
var Gt=C();
function MH(b){return b!==null?b.d():null;}
function Qo(b){return b!==null?b.c():0;}
function QY(b){return Qo(b)?0:1;}
$rt_packages([-1,"dev",0,"webfx",1,"platform",2,"webassembly",3,"spi",2,"json",5,"spi"]);
$rt_metadata([B,0,0,[],0,3,0,0,["jW",Yi(Cs),"kb",Yi(EG),"b1",Yi(PK),"D",Yj(L8),"d",Yi(OS),"jd",Yi(Db),"dS",Yi(Uy)],Bo,0,B,[],0,3,0,0,["kn",Ym(HQ),"cv",Yi(Q4),"cR",Yi(PV)],BC,0,Bo,[],0,3,0,0,["a",Yi(Du),"k",Yj(Ef)],O,0,BC,[],0,3,0,0,["a",Yi(Bq),"k",Yj(DZ)],Dw,0,O,[],0,3,0,0,["a",Yi(HT),"k",Yj(SZ)],Do,0,B,[],3,3,0,0,["bf",Yj(Qe),"gU",Yj(OV),"gX",Yj(R5),"gJ",Yj(SG)],FH,0,B,[Do],3,3,0,0,["bf",Yj(Qe),"gU",Yj(OV),"gX",Yj(R5),"gJ",Yj(SG)],E3,0,B,[Do],3,3,0,0,["bf",Yj(Qe),"gU",Yj(OV),"gX",Yj(R5),"gJ",Yj(SG),"ed",Yi(Tk)],CT,
"JsonProvider",6,B,[FH,E3],3,3,0,0,["bf",Yj(Qe),"gU",Yj(OV),"gX",Yj(R5),"gJ",Yj(SG),"ed",Yi(Tk),"hE",Yi(TZ)],CP,0,B,[CT],3,3,0,0,["bf",Yj(Qe),"gU",Yj(OV),"gX",Yj(R5),"gJ",Yj(SG),"ed",Yi(Tk),"hE",Yi(TZ)],G5,0,B,[],0,3,0,0,["jg",Yk(Rk),"ii",Yi(Qm),"dN",Yj(Qx),"iN",Yj(Rq),"gz",Yj(UU)],Bv,0,B,[],3,3,0,0,0,X,0,B,[Bv],1,3,0,0,["a",Yi(B$)],Bb,0,B,[],3,3,0,0,0,Cu,0,X,[Bb],0,3,0,BW,["bB",Yj(IG),"N",Yi(NE),"d",Yi(SK)],I1,0,BC,[],0,3,0,0,["a",Yi(Tp)],Dp,0,B,[],3,3,0,0,0,FN,0,B,[Dp],3,3,0,0,["bj",Yj(M0)],B4,0,B,[],0,0,
0,PM,0,Cf,0,B,[CP],3,3,0,0,["bf",Yj(Qe),"gU",Yj(OV),"gX",Yj(R5),"gJ",Yj(SG),"ed",Yi(Tk),"hE",Yi(TZ)],FP,0,X,[Bb],0,3,0,Jc,["kX",Yj(I8),"N",Yi(Mx),"d",Yi(Rn)],B2,0,B,[],3,3,0,0,0,ED,0,B,[],3,3,0,0,0,B3,0,B,[ED],0,3,0,FG,["k",Yj(HC),"jm",Yk(E4),"g_",Yi(LW)],Bf,0,B,[],3,3,0,0,0,EY,0,B,[Bf],3,3,0,0,0,JJ,0,B,[EY],1,3,0,0,["ko",Yj(Ul),"kc",Yi(O7)],C_,0,B,[],3,3,0,0,0,Hv,0,B,[C_],0,3,0,0,["a",Yi(QO),"fO",Yi(Ob),"iQ",Yi(Iu)],FU,0,B,[],32,0,0,U4,0,GA,0,B,[Bf],1,3,0,0,0,Jj,0,B,[Dp],0,3,0,0,["i_",Yj(Qn),"et",Yj(RK),"kO",
Yj(Jm)],Fe,0,B,[],3,3,0,0,0,Jf,0,B,[Fe],0,3,0,0,["i_",Yj(Uh),"g6",Yj(Ow)],BK,0,B,[],1,3,0,0,["a",Yi(FE)],E$,0,B,[],3,3,0,0,0,Fk,0,B,[E$],3,3,0,0,["h2",Yj(QT)],Dg,0,B,[Fk],3,3,0,0,["h2",Yj(QT)],Cl,0,B,[Dg],1,0,0,0,["h2",Yj(QT),"a",Yi(E2),"kj",Yk(EP),"j_",Yk(DO),"fi",Yk(Is)],Ce,0,Cl,[],0,0,0,Da,["h2",Yj(QT),"a",Yi(DX),"hP",Yi(Tf),"ia",Yj(N1),"bF",Yj(HU),"dv",Yj(Gd),"cK",Yj(UC),"d",Yi(SE),"iV",Yk(OB)],DU,0,Ce,[],1,0,0,0,["h2",Yj(QT),"a",Yi(Ls)],C5,0,B,[],3,3,0,0,0,CB,0,Bo,[],0,3,0,0,["k",Yj(IE),"cw",Yj(Hh)],CG,
0,CB,[],0,3,0,0,["k",Yj(Gq)],D6,0,B,[],3,3,0,0,["gO",Yk(N8),"i0",Yj(Rj),"h8",Yj(ND),"dQ",Yj(PE),"dJ",Yk(TB)],CM,0,B,[D6,CP],3,3,0,0,["gO",Yk(N8),"i0",Yj(Rj),"h8",Yj(ND),"dQ",Yj(PE),"dJ",Yk(TB),"bf",Yj(Qe),"gU",Yj(OV),"gX",Yj(R5),"gJ",Yj(SG),"ed",Yi(Tk),"hE",Yi(TZ),"kx",Yj(LD),"c_",Yj(SF)],D9,0,B,[D6],3,3,0,0,["gO",Yk(N8),"i0",Yj(Rj),"h8",Yj(ND),"dQ",Yj(PE),"dJ",Yk(TB)],CS,0,B,[CM,Cf,D9],3,3,0,0,["gO",Yk(N8),"i0",Yj(Rj),"h8",Yj(ND),"dQ",Yj(PE),"dJ",Yk(TB),"bf",Yj(Qe),"gU",Yj(OV),"gX",Yj(R5),"gJ",Yj(SG),"ed",
Yi(Tk),"hE",Yi(TZ),"kx",Yj(LD),"c_",Yj(SF),"i2",Yj(Us),"it",Yk(LZ)],D_,0,B,[Bf],3,0,0,0,0,KP,0,Dw,[],0,3,0,0,["a",Yi(Rc)]]);
$rt_metadata([DY,0,B,[],4,3,0,TC,0,J$,0,B,[],4,3,0,0,0,FJ,0,B,[],3,3,0,0,0,Eu,0,B,[FJ],3,3,0,0,0,ET,0,B,[],3,3,0,0,0,CA,0,B,[Eu,ET],1,3,0,0,["a",Yi(D8),"cm",Yl(MI)],EL,0,CA,[],0,3,0,TI,["gZ",Yj(NN)],Fb,0,B,[],3,3,0,0,0,Bm,0,B,[Bf],1,3,0,0,0,GQ,0,Bm,[],1,3,0,0,0,It,0,B,[],4,0,0,0,["jv",Yk(Kz),"ke",Yi(Kr),"kt",Yi(IQ)],Cz,0,B,[Bv,C5],0,0,0,0,["a",Yi(EM),"bB",Yj(Et),"k",Yj(K0),"kK",Yj(Iy),"kA",Yj(KC),"kY",Yj(EF),"ct",Yk(Fa),"kH",Yj(Ho),"eh",Yk(No),"gK",Yl(Te),"jY",Yj(Kk),"ex",Yk(Lu),"id",Yl(Mf),"j3",Yj(Jr),"d0",
Yk(IC),"jj",Yj(K6),"fo",Yk(KL),"e5",Yk(Jd),"bG",Yj(EH),"d",Yi(El),"c",Yi(Kb),"kg",Yl(HD),"dX",Ym(Gs),"el",Ym(JQ),"ec",Yj(JL)],C1,0,B,[],3,3,0,0,0,Gf,0,Cz,[C1],0,3,0,0,["bB",Yj(T0),"a",Yi(Tx),"k",Yj(Mp),"U",Yj(Y),"e",Yj(Mo),"w",Yj(BA),"ix",Yj(R3),"hQ",Yj(PO),"j",Yj(Gg),"fn",Yl(ST),"hZ",Yk(Ra),"hv",Yk(Tn),"hL",Ym(M8),"hn",Yk(T6),"iD",Yk(NC),"hf",Yk(Ug),"ec",Yj(Uo),"el",Ym(QA),"dX",Ym(On),"c",Yi(Oh),"d",Yi(Bg),"bG",Yj(Uu),"e5",Yk(Mt),"fo",Yk(LV),"d0",Yk(Qu),"ex",Yk(Pe),"ct",Yk(UH)],FB,0,B,[],4,3,0,UL,0,JP,0,O,
[],0,3,0,0,["a",Yi(Ui)],Hd,0,CB,[],0,3,0,0,["cw",Yj(Mr)],Co,0,B,[B2],1,3,0,0,["a",Yi(E_),"d",Yi(Op)],Cq,0,B,[],3,3,0,0,0,D3,0,Co,[Cq,Bv],0,3,0,0,["c5",Yj(R7),"a",Yi(IX),"bB",Yj(Ec),"j1",Yk(KF),"cJ",Yj(Sg),"kl",Yj(GG),"kr",Yl(CY),"kJ",Yi(C8),"bn",Yk(MX),"dC",Yk(RT),"bY",Yl(O0),"hC",Yj(RJ),"cp",Yi(Pt),"kv",Yj(Hw),"r",Yi(Po)],G1,0,D3,[B2],0,3,0,0,["a",Yi(NH),"bB",Yj(Pg),"c5",Yj(Oz),"cJ",Yj(Mk),"bY",Yl(T7),"bn",Yk(Sz),"dC",Yk(T8),"dy",Yj(L$),"fZ",Yi(RU),"ja",Yi(PI),"gD",Yj(Px),"iy",Yj(Ms)],DL,0,B,[],3,3,0,0,["hB",
Yj(LJ)],CI,0,B,[CP,DL],3,3,0,0,["bf",Yj(Qe),"gU",Yj(OV),"gX",Yj(R5),"gJ",Yj(SG),"ed",Yi(Tk),"hE",Yi(TZ),"hB",Yj(LJ),"iW",Yj(NQ)],Fn,0,B,[DL],3,3,0,0,["hB",Yj(LJ)],C4,0,B,[CI,Cf,Fn],3,3,0,0,["bf",Yj(Qe),"gU",Yj(OV),"gX",Yj(R5),"gJ",Yj(SG),"ed",Yi(Tk),"hE",Yi(TZ),"hB",Yj(LJ),"iW",Yj(NQ)],Dl,0,B,[Cf],3,3,0,0,["bf",Yj(Qe),"gU",Yj(OV),"gX",Yj(R5),"gJ",Yj(SG),"ed",Yi(Tk),"hE",Yi(TZ),"di",Yi(Uc),"b_",Yj(Sn),"dr",Yj(Ur),"cr",Yj(MU)],DV,0,B,[C4,Dl],1,3,0,0,["bf",Yj(Qe),"gU",Yj(OV),"gX",Yj(R5),"gJ",Yj(SG),"ed",Yi(Tk),
"hE",Yi(TZ),"hB",Yj(LJ),"iW",Yj(NQ),"di",Yi(Uc),"b_",Yj(Sn),"dr",Yj(Ur),"cr",Yj(MU),"ie",Yj(Im),"cU",Yj(Qp),"r",Yi(MV)],Hq,0,Cz,[C1],0,3,0,0,["a",Yi(Sw),"gx",Yj(PT),"ic",Yk(PU),"d",Yi(OD),"bG",Yj(OX),"ct",Yk(Mg)],DC,0,B,[],3,3,0,0,0,DR,0,B,[DC],0,0,0,0,["gs",Yk(K5),"ge",Yj(Os)],Cy,0,B,[],1,3,0,0,["bB",Yj(Fg),"kQ",Yi(CO),"ji",Yj(JM),"jR",Yi(HM),"j4",Yi(BY),"jQ",Yi(B9)],Dk,0,B,[],3,3,0,0,0,DI,0,B,[Dk],3,3,0,0,0,Cw,0,B,[],0,0,0,0,["cn",Yj(Ej),"y",Yi(OM),"kC",Yi(K$),"jl",Yi(FF)],BV,0,B,[],3,3,0,0,0,JG,0,Cw,[BV],
0,0,0,0,["cn",Yj(Q3),"h1",Yi(Ot),"s",Yi(SR)],Eo,0,B,[],3,3,0,0,0,Hi,0,B,[Eo],4,0,0,0,["dx",Yj(L1),"gV",Yj(Q2)],DF,0,B,[Dk],0,3,0,0,["a",Yi(F1),"eR",Yj(GU),"cX",Yj(Ru),"c4",Yj(P2)],Dr,0,DF,[DI],1,3,0,0,["a",Yi(Jo),"eR",Yj(NI),"jo",Yj(HS),"dT",Yj(Tw)],Lx,0,Dr,[],0,3,0,0,["a",Yi(Qy),"i3",Yi(Ue)],Eb,0,B,[],3,3,0,0,0,D4,0,B,[Eb,Cq],0,0,0,0,["kT",Yk(Lq),"br",Yi(S4),"bQ",Yi(T3)],CL,0,D4,[],0,0,0,0,["hu",Yk(HE)],Fr,0,CL,[],4,0,0,0,["hu",Yk(RQ)],H8,0,B,[],0,3,0,0,["hk",Yl(Rb)],Cx,0,CG,[],0,3,0,0,["k",Yj(Fu)],JR,0,Cx,
[],0,3,0,0,["k",Yj(Pj)],ER,0,BC,[],0,3,0,0,0,EE,0,B,[],3,3,0,0,0]);
$rt_metadata([EC,0,B,[Bf],3,0,0,0,0,CC,0,B,[],3,3,0,0,0,He,0,B,[CC],0,3,0,0,["a",Yi(Oa)],GZ,0,B,[BV],0,0,0,0,["jX",Yj(Oq),"y",Yi(MT),"s",Yi(RM)],Ds,0,Co,[],1,0,0,0,["a",Yi(JT)],E5,0,B,[],32,0,0,Xr,0,DT,0,O,[],0,3,0,0,["a",Yi(F_)],Ll,0,DT,[],0,3,0,0,["a",Yi(TG)],GK,0,B,[],4,3,0,0,0,E6,0,B,[BV],3,3,0,0,0,I5,0,Bm,[],1,3,0,0,0,I4,0,B,[BV],0,0,0,0,["kL",Yj(N5),"y",Yi(To),"s",Yi(NU)],Hj,0,B,[],0,3,0,0,["a",Yi(OH)],Iw,0,B,[],4,0,0,0,0,G$,0,Cx,[],0,3,0,0,["k",Yj(OZ)],Ih,0,B,[C_],0,3,0,0,["a",Yi(Rr),"fO",Yi(LS),"iQ",
Yi(Ln)],DQ,0,B,[],3,3,0,0,0,CQ,0,B,[DQ],3,3,0,0,0,Cg,0,B,[CQ],1,3,0,0,["a",Yi(Fx),"e4",Yi(RG),"gw",Yj(QI)],Iz,0,B,[],4,3,0,0,0,FS,0,X,[Bb],0,3,0,RH,["jt",Yj(HJ)],Es,0,B,[],3,3,0,0,0,Lo,0,B,[Es],0,3,0,0,["a",Yi(Ok)],FW,0,B,[],3,3,0,0,0,Hp,0,B,[],4,3,0,0,0,H$,0,B,[],4,0,0,0,0,Cm,0,B,[],0,3,0,0,["a",Yi(FQ)],Dv,0,B,[],3,3,0,0,0,B0,0,B,[],3,3,0,0,0,Gz,0,DU,[B0],0,0,0,0,["h2",Yj(QT),"jF",Yk(PN),"bI",Yj(Rh),"b2",Yj(OJ)],HN,0,B,[DQ],4,3,0,0,["t",Yi(Hu)],HK,0,B,[],4,3,0,0,0,BP,0,B,[],1,3,0,0,["a",Yi(DD)],Gr,0,B,[Dv],
0,3,0,0,["kM",Ym(Ro),"dP",Yi(Tj)],JA,0,B,[],4,3,0,0,0,Li,0,Cl,[],4,3,0,0,["h2",Yj(QT),"cw",Yj(Ts),"bF",Yj(Ov)],By,0,B,[],0,3,0,0,["a",Yi(CZ)],JY,0,By,[],0,0,0,0,["kN",Yk(Ol)],C$,0,B,[],1,3,0,0,["kz",Ym(Kx),"g8",Yl(JU),"jA",Yj(FY),"iz",Yj(TP),"kS",Yj(Ks),"h0",Yj(Tb),"kq",Yl(Hb),"jy",Yj(Go),"gF",Yj(L6)],EX,0,B,[Bf],3,0,0,0,0,Jg,0,B,[EX],0,3,0,0,["ky",Yj(Rz),"iG",Yk(Uf),"jZ",Yk(N2)],Je,0,B,[D_],0,3,0,0,["iP",Yj(SO),"dz",Yj(M3),"fA",Yj(SM)],Em,0,B,[Bf],3,0,0,0,0,Ji,0,B,[Em],0,3,0,0,["jz",Yj(LT),"ip",Yj(Qd),"fA",
Yj(UO)],DA,0,Cy,[Bb],1,3,0,0,["jc",function(b,c,d,e,f){G2(this,b,c,d,e,f);},"fc",Yl(St),"jK",Yj(JK),"j5",Yi(EJ)],Kf,0,DA,[],0,0,0,0,["js",function(b,c,d,e,f,g,h){ML(this,b,c,d,e,f,g,h);},"gu",Yi(R8)],Ci,0,B,[CQ],3,3,0,0,["gM",Yj(PX)],BQ,0,Cg,[Ci],1,3,0,0,["gM",Yj(PX),"a",Yi(D2),"t",Yi(QU)],CR,0,B,[],3,3,0,0,0,Dn,0,BQ,[Cq,Bv,CR],0,3,0,0,["gM",Yj(PX),"a",Yi(JC),"bB",Yj(Ee),"kV",Yj(Pv),"bG",Yj(Nf),"cW",Yj(PC),"r",Yi(N3),"g4",Yk(MG),"bx",Yj(Sy),"d",Yi(Oj)]]);
$rt_metadata([Fd,0,Dn,[B0],0,0,0,0,["gM",Yj(PX),"bI",Yj(Ou),"b2",Yj(L7)],H3,0,B,[],0,3,0,0,0,S,0,B,[],3,3,0,0,0,Bw,0,B,[Bv],0,3,0,Mv,["c1",Yk(KW),"N",Yi(C7)],D0,0,B,[CS,Dl],1,3,0,0,["gO",Yk(N8),"i0",Yj(Rj),"h8",Yj(ND),"dQ",Yj(PE),"dJ",Yk(TB),"bf",Yj(Qe),"gU",Yj(OV),"gX",Yj(R5),"gJ",Yj(SG),"ed",Yi(Tk),"hE",Yi(TZ),"kx",Yj(LD),"c_",Yj(SF),"i2",Yj(Us),"it",Yk(LZ),"di",Yi(Uc),"b_",Yj(Sn),"dr",Yj(Ur),"cr",Yj(MU),"a",Yi(Ip),"hA",Yj(G4),"gy",Yi(Rf),"hz",Yi(QJ),"e7",Yi(P1),"cH",Yj(RI),"gE",Yk(Rp),"g3",Yi(Q7),"d",Yi(TK),
"f1",Yk(N9)],HL,0,B,[],4,3,0,0,0,Di,0,B,[Bb],1,3,0,0,["kf",Yk(HY)],CV,0,B,[],0,3,0,Fz,["k",Yj(Ib)],BO,0,B,[Bv,Bb],0,3,0,En,["ki",Yj(HI),"fa",Yi(R6),"d",Yi(Ny),"D",Yj(M4)],Cv,0,O,[],0,3,0,0,["a",Yi(EO),"k",Yj(LF)],Ix,0,Cv,[],0,3,0,0,["k",Yj(Rl)],Ly,0,O,[],0,3,0,0,["a",Yi(MD)],F8,0,B,[CC],0,3,0,0,["ks",Yj(QZ),"fI",Yk(R2)],Jk,0,B,[Bf],1,3,0,0,0,Dj,0,CA,[],0,3,0,0,["kh",Yj(Gv)],Fo,0,Dj,[],0,3,0,0,["km",Yk(J6),"cm",Yl(Nq),"e8",Yj(O$)],P,0,B,[],0,3,0,0,["a",Yi(BJ)],KQ,0,P,[],0,0,0,0,["bd",Yj(Qa)],KS,0,P,[],0,0,0,
0,["bd",Yj(OK)],V,0,BK,[],0,3,0,0,["a",Yi(BM),"f3",Yj(Na),"ev",Yj(Nr)],KT,0,V,[],0,0,0,0,["bd",Yj(TQ)],KX,0,V,[],0,0,0,0,["bd",Yj(Mw)],KR,0,P,[],0,0,0,0,["bd",Yj(Mh)],KU,0,V,[],0,0,0,0,["bd",Yj(O5)],FA,0,B,[],3,3,0,0,0,KN,0,V,[],0,0,0,0,["bd",Yj(S3)],KJ,0,B,[S],0,3,0,0,["a",Yi(Uk),"g",Yj(TL),"bp",Yj(J8)],GF,0,B,[S],0,3,0,0,["a",Yi(P3),"g",Yj(LU),"bk",Yj(Jl)],KI,0,B,[S],0,3,0,0,["a",Yi(PG),"g",Yj(Ni),"bk",Yj(GH)],GD,0,B,[S],0,3,0,0,["a",Yi(RN),"g",Yj(Qb),"bk",Yj(GS)],KV,0,V,[],0,0,0,0,["bd",Yj(Tg)],KH,0,B,[S],
0,3,0,0,["a",Yi(Uv),"g",Yj(Pa),"bk",Yj(LG)],KO,0,V,[],0,0,0,0,["bd",Yj(Ql)],E0,0,B,[CQ],3,3,0,0,0,BX,0,Cg,[E0],1,3,0,0,["a",Yi(Dy)],Dz,0,BX,[],0,0,0,0,["kR",Yj(H_),"gG",Yi(Pp)],IY,0,Dz,[],4,0,0,0,["cn",Yj(Pu),"t",Yi(RR)],Lz,0,B,[S],0,3,0,0,["a",Yi(SC),"g",Yj(Or),"bk",Yj(Io)],Lc,0,B,[S],0,3,0,0,["a",Yi(T_),"g",Yj(Sd),"bp",Yj(F$)],LB,0,B,[S],0,3,0,0,["a",Yi(MR),"g",Yj(O6),"bk",Yj(Jp)],Lb,0,B,[S],0,3,0,0,["a",Yi(PL),"g",Yj(Mn),"bp",Yj(H2)],LC,0,B,[S],0,3,0,0,["a",Yi(Qh),"g",Yj(S_),"bp",Yj(In)],GE,0,B,[S],0,3,0,
0,["a",Yi(SD),"g",Yj(LP),"bp",Yj(HR)],La,0,B,[S],0,3,0,0,["a",Yi(US),"g",Yj(QR),"bk",Yj(HB)],LA,0,B,[S],0,3,0,0,["a",Yi(RA),"g",Yj(RW),"bp",Yj(Gh)],KK,0,B,[S],0,3,0,0,["a",Yi(Of),"g",Yj(T9),"bp",Yj(KD)],GC,0,B,[S],0,3,0,0,["a",Yi(MC),"g",Yj(P5),"bp",Yj(G7)],HZ,0,B,[],0,3,0,0,0,Fy,0,B,[FN,Dg],3,3,0,0,["bj",Yj(M0),"h2",Yj(QT)],Gy,0,Ce,[Fy,B0],4,3,0,0,["bj",Yj(M0),"h2",Yj(QT),"a",Yi(Sm),"ga",Yi(TR),"dv",Yj(RY),"bF",Yj(PB),"fi",Yk(TY)]]);
$rt_metadata([Ep,0,B,[],3,3,0,0,0,Ed,0,B,[],3,3,0,0,0,JO,0,B,[Ep,Ed],0,3,0,0,["d",Yi(LK),"fT",Yi(N6),"im",Yi(Uj),"gd",Yi(L4)],K9,0,Bm,[],1,3,0,0,0,Ca,0,X,[Bb],0,3,0,IU,["jf",Yj(EB),"hX",Yj(Jx),"D",Yj(M9)],D$,0,B,[DC],3,3,0,0,0,Ha,0,B,[],0,3,0,0,0,Lm,0,D0,[],0,3,0,0,["gO",Yk(N8),"i0",Yj(Rj),"h8",Yj(ND),"dQ",Yj(PE),"dJ",Yk(TB),"bf",Yj(Qe),"gU",Yj(OV),"gX",Yj(R5),"gJ",Yj(SG),"ed",Yi(Tk),"hE",Yi(TZ),"kx",Yj(LD),"c_",Yj(SF),"i2",Yj(Us),"it",Yk(LZ),"di",Yi(Uc),"b_",Yj(Sn),"dr",Yj(Ur),"cr",Yj(MU),"a",Yi(OI),"hA",Yj(PY),
"cc",Yi(SB),"c$",Yj(RD),"i$",Yi(Q_),"c7",Yj(Rs),"bv",Yi(S1)],EN,0,B,[],4,3,0,0,0,J5,0,Cw,[BV],0,0,0,0,["cn",Yj(SL),"s",Yi(Tq)],K_,0,B,[S],0,3,0,0,["a",Yi(PF),"g",Yj(Nu),"bk",Yj(J3)],II,0,B,[E6],0,0,0,0,["a",Yi(Q5)],DW,0,BQ,[CR],1,0,0,0,["gM",Yj(PX),"a",Yi(H4)],IK,0,DW,[],0,0,0,0,["gM",Yj(PX),"a",Yi(Nh)],IH,0,B,[BV],0,0,0,0,["a",Yi(SP)],BS,0,B,[Bb],0,3,0,Bk,0,DS,0,BX,[],1,0,0,0,["a",Yi(J4)],IL,0,DS,[],0,0,0,0,["a",Yi(MS)],IJ,0,Ds,[],0,0,0,0,["a",Yi(LL)],Hf,0,B,[B0],0,0,0,0,["kw",Yk(TN),"bI",Yj(TT),"b2",Yj(Ub)],K8,
0,B,[Dv],0,3,0,0,["jx",Yj(SJ),"dP",Yi(R4)],GX,0,B,[Bf],1,3,0,0,0,Cp,0,B,[Cf],1,0,0,0,["gU",Yj(OV),"gX",Yj(R5),"gJ",Yj(SG),"ed",Yi(Tk),"hE",Yi(TZ),"dx",Yj(Eh),"fm",Yi(GN),"cr",Yj(Kd),"f5",Yi(LE),"fW",Yj(Gu),"fX",Yj(H5),"bf",Yj(I7),"e9",Yj(JN),"d",Yi(Hs),"bv",Yi(Mu),"di",Yi(Qc),"c7",Yj(PR),"b_",Yj(Oi),"dr",Yj(R0)],Fp,0,Cp,[C4],4,0,0,0,["gU",Yj(OV),"gX",Yj(R5),"gJ",Yj(SG),"ed",Yi(Tk),"hE",Yi(TZ),"hB",Yj(LJ),"iW",Yj(NQ),"jk",Yj(MB),"j7",Yi(FK),"jG",Yj(K3),"r",Yi(RS),"cU",Yj(S8)],IP,0,P,[],0,0,0,0,["cq",Yj(Nn)],Dh,
0,Cy,[Bb,C1,C5,FW],1,3,0,0,["hy",Yl(F6),"iF",Yl(Np),"eB",Yj(LO)],DJ,0,Dh,[],1,0,0,0,["hy",Yl(Ic)],Kw,0,DJ,[],0,0,0,0,["j6",function(b,c,d,e,f,g){UG(this,b,c,d,e,f,g);},"iK",Yj(NO)],IT,0,P,[],0,0,0,0,["cq",Yj(MW)],IR,0,P,[],0,0,0,0,["cq",Yj(QP)],Jt,0,B,[],4,3,0,0,0,IS,0,P,[],0,0,0,0,["cq",Yj(Rw)],IN,0,V,[],0,0,0,0,["cq",Yj(RV)],Fj,0,B,[],4,3,0,0,0,Ju,0,B,[Bf],1,3,0,0,0,BR,0,B,[],4,3,0,FX,0,Gl,0,BP,[],0,0,0,0,["a",Yi(Q6)],Gk,0,BP,[],0,0,0,0,["a",Yi(O1)],B7,0,X,[Bb],0,3,0,Fm,["hX",Yj(J2),"bw",Yi(UA),"N",Yi(Pn),
"d",Yi(Ns),"D",Yj(UV),"fU",Yi(Ne),"fD",Yi(OY)],Gj,0,BP,[],0,0,0,0,["a",Yi(S$)],D5,0,BK,[],0,3,0,0,["a",Yi(F4),"f3",Yj(Qt),"ev",Yj(S6)],Gn,0,D5,[],0,0,0,0,["a",Yi(S5)],Gm,0,V,[],0,0,0,0,["a",Yi(Pm)],J0,0,By,[],0,0,0,0,["f8",Yk(Up)],JX,0,By,[],0,0,0,0,["f8",Yk(UR)],K1,0,BX,[],0,0,0,0,["cn",Yj(PJ),"r",Yi(Tm),"t",Yi(S7)],JZ,0,By,[],0,0,0,0,["f8",Yk(UP)],CK,"WebAssemblyProvider",4,B,[],3,3,0,0,["i9",Yk(Ua)],EK,0,B,[CK],4,3,0,0,["i9",Yk(Ua),"a",Yi(UT),"hT",Yi(Uq),"hD",Yj(Nw)],Ft,0,B,[],0,3,0,0,0]);
$rt_metadata([JW,0,O,[],0,3,0,0,["a",Yi(LN)],Jh,0,B,[S],0,3,0,0,["kd",Yj(SQ),"g",Yj(QD),"jq",Yj(HV)],Br,0,B,[],0,3,0,0,["a",Yi(C3)],Kc,0,Br,[],0,0,0,0,["a",Yi(O4)],J_,0,Br,[],0,0,0,0,["a",Yi(QQ)],JB,0,Br,[],0,0,0,0,["a",Yi(L2)],Ka,0,Br,[],0,0,0,0,["a",Yi(Tv)],FT,0,Cp,[CS],4,3,0,0,["gO",Yk(N8),"i0",Yj(Rj),"h8",Yj(ND),"dQ",Yj(PE),"dJ",Yk(TB),"gU",Yj(OV),"gX",Yj(R5),"gJ",Yj(SG),"ed",Yi(Tk),"hE",Yi(TZ),"kx",Yj(LD),"c_",Yj(SF),"i2",Yj(Us),"it",Yk(LZ),"a",Yi(NV),"dx",Yj(KY),"kD",Yj(Kh),"jp",Yi(Gw),"j$",Yk(Lj),"d",
Yi(TV),"e9",Yj(Pr),"bf",Yj(Oy),"fX",Yj(L_),"fW",Yj(Tz),"f5",Yi(Mi),"cr",Yj(UB),"fm",Yi(PD),"f1",Yk(UW),"cH",Yj(TU),"e7",Yi(O_)],BU,0,B,[Bv,Bb,C5],0,3,0,Lv,["iJ",Yj(GJ),"kG",Yl(LH),"o",Yj(NS),"c",Yi(Rv),"ch",Yi(TO),"hV",Yj(Su),"eF",Yj(QC),"ee",Yk(Nz),"cL",Yj(QB),"iS",Yk(NX),"iI",Yj(S9),"bM",Yk(Mz),"hi",Yj(Th),"d",Yi(OO),"i4",Yi(TW),"D",Yj(Sv),"ej",Yj(SN),"b1",Yi(NK),"gg",Yj(Re)],LI,0,O,[],0,3,0,0,["a",Yi(Od)],D7,0,C$,[],1,3,0,0,["g8",Yl(H0),"hq",Yk(NZ)],IA,0,D7,[],0,3,0,0,["jE",Yj(QE),"gN",function(b,c,d,e,f,
g,h){return Un(this,b,c,d,e,f,g,h);}],Fh,0,B,[Bf],3,3,0,0,0,Ij,0,B,[Fh],0,3,0,0,["j8",Yj(Nj),"il",Yj(Nd),"jP",Yj(Hy),"jB",Yj(MZ)],I_,0,B,[CC],0,3,0,0,["a",Yi(Rd)],Bz,0,B,[],4,3,0,Bn,0,Ja,0,B,[CC],0,3,0,0,["a",Yi(P7),"fI",Yk(Pz)],EI,0,Cv,[],0,3,0,0,["a",Yi(NB),"k",Yj(UE)],Hc,0,P,[],0,0,0,0,["jC",Yj(Pb)],FO,0,Di,[],0,3,0,Rg,["h7",Yi(Tc)],CN,0,B,[],4,3,0,0,0,Lt,0,B,[DI],4,3,0,0,["a",Yi(N_),"cX",Yj(Nx),"dT",Yj(RO),"c4",Yj(PS)],Fi,0,B,[],0,3,0,Cr,["hk",Yl(Ir),"cV",Yj(TH)],GI,0,BC,[],0,3,0,0,["a",Yi(QH),"k",Yj(N4)],Gc,
0,O,[],0,3,0,0,["k",Yj(QV),"a",Yi(Pf)],Km,0,B,[FA],0,0,0,0,["ku",Yj(S2),"bj",Yj(T$),"hh",Yj(TJ)],CE,0,B,[Bb,Bv],1,3,0,0,["c1",Yk(Fw),"jn",Yi(Bl)],B8,0,B,[],0,3,0,0,["a",Yi(Ff)],IB,0,B8,[],0,0,0,0,["jU",Ym(UK)],H9,0,B,[],0,0,0,0,["a",Yi(UF)],Kt,0,B,[],4,3,0,0,0,Ew,0,X,[Bb],0,3,0,SW,["jr",Yj(I6)],Fq,0,B,[],0,3,0,EU,["k",Yj(GM),"g7",Yj(MP),"iM",Yk(Ta)],Ei,0,B,[Bv],0,3,0,0,["kE",Yk(TE),"fG",Yi(OU),"cR",Yi(PH),"gk",Yi(Pc)],F3,0,B,[B0],0,0,0,0,["j2",Yj(L0),"bI",Yj(Tu),"b2",Yj(Qq)],Cc,0,B,[],0,3,0,BG,0,JF,0,Bo,[],
0,3,0,0,["k",Yj(OP)],HA,0,DV,[],4,3,0,0,["bf",Yj(Qe),"gU",Yj(OV),"gX",Yj(R5),"gJ",Yj(SG),"ed",Yi(Tk),"hE",Yi(TZ),"hB",Yj(LJ),"iW",Yj(NQ),"di",Yi(Uc),"b_",Yj(Sn),"dr",Yj(Ur),"cr",Yj(MU),"ie",Yj(R$),"fq",Yi(Q$),"hO",Yj(Q9)],Id,0,B,[S],0,3,0,0,["a",Yi(LX),"g",Yj(Om),"kW",Yj(IV)],Jv,0,Cm,[],0,0,0,0,["gl",Ym(UD)],Ke,0,O,[],0,3,0,0,["a",Yi(Rx)],Js,0,B,[],4,3,0,0,0,Jw,0,Cm,[],0,0,0,0,["gl",Ym(SV)],HP,0,B,[],4,3,0,0,0,KZ,0,DR,[D$],4,0,0,0,["gs",Yk(Nm),"iO",Yj(RL)],DM,0,B,[],0,3,0,Bs,["jI",Yk(Ig),"gn",Yi(MN),"cY",Yi(R9),
"is",Yi(Um),"h6",Yi(Se),"fH",Yi(Sr),"c",Yi(Q1)],Dx,0,B,[],4,3,0,Eq,0,G0,0,B,[],4,0,0,0,0,Ia,0,B8,[],0,0,0,0,["jD",Ym(ON)],Kj,0,CG,[],0,3,0,0,0]);
$rt_metadata([Ga,0,B,[Fb],0,3,0,0,["a",Yi(Nk),"f_",Yj(Td),"kF",Yj(Hg)],Bt,0,CE,[],12,3,0,Z,0,K7,0,B,[EE],4,0,0,0,["dx",Yj(Sj),"gr",Yj(OF),"d1",Yk(Mq),"ju",Yk(IW)],If,0,B,[],0,3,0,0,["iJ",Yj(PW)],Ie,0,Bm,[],1,3,0,0,0,CH,0,B,[],0,0,0,0,["cw",Yj(Pw)],IO,0,Bm,[],1,3,0,0,0,JH,0,O,[],0,3,0,0,["a",Yi(SH)],B5,0,CE,[],12,3,0,DE,0,ID,0,B,[],0,3,0,0,["a",Yi(LR)],K2,0,B,[EC],0,3,0,0,["iP",Yj(OW),"dz",Yj(SY),"fA",Yj(Sx)],GO,0,BQ,[CR],0,0,0,0,["gM",Yj(PX),"go",Yj(OR),"cW",Yj(LM),"r",Yi(NT)],BN,0,B,[],0,3,0,RB,0,Gt,0,B,[],
4,3,0,0,0]);
function $rt_array(cls,data){this.f=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","<java_object>@",",","null","0",".","Null pointer","JSON does not allow non-finite numbers","JSON does not allow non-finite numbers.","\"\"","\\t","\\n","\\f","\\r","000","\\u","\\b","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","String is null or empty","Illegal radix: ",
"Result is already complete","main","No null success mapper accepted","No null failure mapper accepted","No null handler accepted","Future{cause=","Future{unresolved}","Future{result=null}","Future{result=","}","BIG_ENDIAN","LITTLE_ENDIAN","Index out of bounds","Cannot instantiate any provider for service ","(this Map)",", ","New position "," is outside of range [0;","]","classes.wasm","cy","width","height","placeIndex","frameIndex","wasm","computeLinePixelRGBs","initAndComputeLinePixelRGBs","Replacement preconditions do not hold",
"Action must be non-null","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ",")","[]","(this Collection)","OFF","SEVERE","WARNING","INFO","CONFIG","FINE","FINER","FINEST","ALL","IGNORE","REPLACE","REPORT","false","true","Light.","Sphere.","javaClass@","number","object","string","boolean","Light","The last char in dst ","Sphere","Using default built-in JSON factory which is not interoperable with the underlying platform! Be sure you haven\'t forgot to call Json.registerProvider().",
"Floor","Default","Glass","Mirror","UTF-8","global","","STRING","NUMBER","BOOLEAN","OBJECT","ARRAY","NULL","UNDEFINED","RETURN_NULL","TRACE_AND_RETURN_NULL","THROW_EXCEPTION"]);
BU.prototype.toString=function(){return $rt_ustr(this);};
BU.prototype.valueOf=BU.prototype.toString;B.prototype.toString=function(){return $rt_ustr(OS(this));};
B.prototype.__teavm_class__=function(){return $dbg_class(this);};
var Long_eq;var Long_ne;var Long_gt;var Long_ge;var Long_lt;var Long_le;var Long_compare;var Long_add;var Long_sub;var Long_inc;var Long_dec;var Long_mul;var Long_div;var Long_rem;var Long_udiv;var Long_urem;var Long_neg;var Long_and;var Long_or;var Long_xor;var Long_shl;var Long_shr;var Long_shru;var Long_not;if(typeof BigInt!=='function'){Long_eq=function(a,b){return a.hi===b.hi&&a.lo===b.lo;};Long_ne=function(a,b){return a.hi!==b.hi||a.lo!==b.lo;};Long_gt=function(a,b){if(a.hi<b.hi){return false;}if(a.hi
>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};Long_ge=function(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};Long_lt=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};Long_le=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo
>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);};Long_add=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>
16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_inc=function(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);};Long_dec=function(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);};Long_neg=function(a){return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));};Long_sub=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -
b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_compare=function(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo
&1) -(b.lo&1);};Long_mul=function(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi
|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);};Long_div=function(a,b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)
/Long_toNumber(b));}return (Long_divRem(a,b))[0];};Long_udiv=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];};Long_rem=function(a,b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];};Long_urem=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)
/Long_toNumber(b));}return (Long_udivRem(a,b))[1];};function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a
=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a){return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}Long_and=function(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);};Long_or=function(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);};Long_xor=function(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);};Long_shl=function(a,b){b&=63;if(b===0){return a;}
else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}};Long_shr=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}};Long_shru=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi
>>>b -32,0);}};Long_not=function(a){return new Long(~a.hi,~a.lo);};function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo
=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=
a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi
=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a){var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if
(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup
>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while
(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;}}else {Long_eq=function(a,b){return a===b;};Long_ne=function(a,b){return a!==b;};Long_gt=function(a,b){return a>b;};Long_ge=function(a,b){return a>=b;};Long_lt=function(a,b){return a<b;};Long_le=function(a,b){return a<=b;};Long_add=function(a,b){return BigInt.asIntN(64,
a+b);};Long_inc=function(a){return BigInt.asIntN(64,a+1);};Long_dec=function(a){return BigInt.asIntN(64,a -1);};Long_neg=function(a){return BigInt.asIntN(64, -a);};Long_sub=function(a,b){return BigInt.asIntN(64,a -b);};Long_compare=function(a,b){return a<b? -1:a>b?1:0;};Long_mul=function(a,b){return BigInt.asIntN(64,a*b);};Long_div=function(a,b){return BigInt.asIntN(64,a/b);};Long_udiv=function(a,b){return BigInt.asIntN(64,BigInt.asUintN(64,a)/BigInt.asUintN(64,b));};Long_rem=function(a,b){return BigInt.asIntN(64,
a%b);};Long_urem=function(a,b){return BigInt.asIntN(64,BigInt.asUintN(64,a)%BigInt.asUintN(64,b));};Long_and=function(a,b){return BigInt.asIntN(64,a&b);};Long_or=function(a,b){return BigInt.asIntN(64,a|b);};Long_xor=function(a,b){return BigInt.asIntN(64,a^b);};Long_shl=function(a,b){return BigInt.asIntN(64,a<<BigInt(b&63));};Long_shr=function(a,b){return BigInt.asIntN(64,a>>BigInt(b&63));};Long_shru=function(a,b){return BigInt.asIntN(64,BigInt.asUintN(64,a)>>BigInt(b&63));};Long_not=function(a){return BigInt.asIntN(64,
~a);};}var T=Long_add;var Xp=Long_sub;var N=Long_mul;var Bd=Long_div;var Dd=Long_rem;var WN=Long_or;var Bj=Long_and;var AAI=Long_xor;var Cb=Long_shl;var C6=Long_shr;var BZ=Long_shru;var XY=Long_compare;var CW=Long_eq;var AAJ=Long_ne;var I3=Long_lt;var CX=Long_le;var IF=Long_gt;var IM=Long_ge;var AAK=Long_not;var Vh=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof Error){throw result;}};this.run();};TeaVMThread.prototype.resume=function(){if($rt_currentNativeThread
!==null){throw new Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending(){var thread=$rt_nativeThread();return thread
!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer()
{throw new Error("Invalid recorded state");}main=$rt_mainStarter(Wb);
main.javaException=$rt_javaException;
(function(){var c;c=JJ.prototype;c.getLength=c.kc;c.get=c.ko;c=Jg.prototype;c.apply=c.jZ;c=Je.prototype;c.handle=c.fA;c=Ji.prototype;c.handle=c.fA;c=Ij.prototype;c.handleEvent=c.jB;c=K2.prototype;c.handle=c.fA;})();
})();

main()