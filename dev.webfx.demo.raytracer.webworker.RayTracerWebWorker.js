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
{if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.dH=f;}
function $rt_cls(cls){return GL(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return T1(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.i.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return WT;}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(UN());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return FN();}
function $rt_setThread(t){return N9(t);}
function $rt_createException(message){return WU(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var H=$rt_throw;var C_=$rt_compare;var WV=$rt_nullCheck;var F=$rt_cls;var U=$rt_createArray;var Bj=$rt_isInstance;var WW=$rt_nativeThread;var WX=$rt_suspending;var WY=$rt_resuming;var WZ=$rt_invalidPointer;var D=$rt_s;var L=$rt_eraseClinit;var Ek=$rt_imul;var DR=$rt_wrapException;var W0=$rt_checkBounds;var W1=$rt_checkUpperBound;var W2=$rt_checkLowerBound;var W3=$rt_wrapFunction0;var W4=$rt_wrapFunction1;var W5=$rt_wrapFunction2;var W6=$rt_wrapFunction3;var W7=$rt_wrapFunction4;var C=$rt_classWithoutFields;var CT
=$rt_createArrayFromData;var W8=$rt_createCharArrayFromData;var W9=$rt_createByteArrayFromData;var W$=$rt_createShortArrayFromData;var UI=$rt_createIntArrayFromData;var W_=$rt_createBooleanArrayFromData;var Xa=$rt_createFloatArrayFromData;var Xb=$rt_createDoubleArrayFromData;var Oe=$rt_createLongArrayFromData;var Xc=$rt_createBooleanArray;var Dt=$rt_createByteArray;var Xd=$rt_createShortArray;var BL=$rt_createCharArray;var EO=$rt_createIntArray;var VX=$rt_createLongArray;var Xe=$rt_createFloatArray;var Xf=$rt_createDoubleArray;var C_
=$rt_compare;var Xg=$rt_castToClass;var Xh=$rt_castToInterface;var Xi=Long_toNumber;var G=Long_fromInt;var Xj=Long_fromNumber;var P=Long_create;var BF=Long_ZERO;var Xk=Long_hi;var Dw=Long_lo;
function B(){this.$id$=0;}
function Ve(){var a=new B();E(a);return a;}
function E(a){}
function Di(a){return GL(a.constructor);}
function O1(a){return C7(a);}
function Lw(a,b){return a!==b?0:1;}
function N3(a){return (((K()).c(D(0))).c(FB(C7(a)))).d();}
function C7(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function Ts(a){var b,c,d;if(!Bj(a,Ci)){b=a;if(b.constructor.$meta.item===null)H(Uc());}c=LA(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function BX(){var a=this;B.call(a);a.eE=null;a.ct=null;a.c2=0;a.dG=0;a.eJ=null;}
function Xl(){var a=new BX();Jw(a);return a;}
function Xm(a){var b=new BX();Fn(b,a);return b;}
function Xn(a){var b=new BX();JB(b,a);return b;}
function Jw(a){a.c2=1;a.dG=1;a.dg();}
function Fn(a,b){a.c2=1;a.dG=1;a.dg();a.eE=b;}
function JB(a,b){a.c2=1;a.dG=1;a.dg();a.ct=b;}
function Qc(a){return a;}
function Pa(a){return a.eE;}
function QU(a){return a.cG();}
function Rp(a){a.eA(Pu());}
function S$(a,b){var c,d,e,f,g;b.b7((Di(a)).ff());c=a.g8();if(c!==null)b.b7((((K()).c(D(1))).c(c)).d());a:{b.iJ();if(a.eJ!==null){d=a.eJ.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.b7(D(2));b.iH(g);f=f+1|0;}}}if(a.ct!==null&&a.ct!==a){b.b7(D(3));a.ct.eA(b);}}
var Bz=C(BX);
function Xo(){var a=new Bz();Dn(a);return a;}
function Xp(a){var b=new Bz();D2(b,a);return b;}
function Dn(a){Jw(a);}
function D2(a,b){Fn(a,b);}
var Q=C(Bz);
function Xq(){var a=new Q();Bw(a);return a;}
function WU(a){var b=new Q();Fl(b,a);return b;}
function Bw(a){Dn(a);}
function Fl(a,b){D2(a,b);}
var Do=C(Q);
function GR(){var a=new Do();HF(a);return a;}
function Ck(a){var b=new Do();RR(b,a);return b;}
function HF(a){Bw(a);}
function RR(a,b){Fl(a,b);}
var Dy=C(0);
function Sp(a,b){return b;}
function Rr(a,b){if(b===null)return null;if(Bj(b,CN))return a.hm(b);if(!Bj(b,CP))return a.c4(b);return a.gF(b);}
function Tk(a,b){return b.bn();}
function S8(a,b){return b.bn();}
var D7=C(0);
var EA=C(0);
function Qu(a){return (E3(a.bn(),a,K())).d();}
function PE(b,c){var d,e,f,g,h;c.h(123);d=1;e=b.fd();f=0;g=e.p();while(f<g){h=e.hw(f);if(!d)c.h(44);Hq(h,c);c.h(58);E3(b.cw(h),b,c);d=0;f=f+1|0;}return c.h(125);}
function M0(b,c){return (SI(b,D(4),c.h(91))).h(93);}
function SI(b,c,d){var e,f;e=b.p();f=0;while(f<e){if(f>0)d.c(c);E3(b.cL(f),b,d);f=f+1|0;}return d;}
function E3(b,c,d){UH();switch(Xr.data[Bi(c.cc(b))]){case 1:return d.c(D(5));case 2:return PE(c.bT(b),d);case 3:return M0(c.dK(b),d);case 4:return d.c(Lq(c.ba(b)));case 5:return d.P(c.ba(b));case 6:return Hq(c.ba(b),d);default:}return d;}
function LE(b){if(b.cz(46)>0&&b.cz(101)<0&&b.cz(69)<0){while(b.ev(D(6))){b=b.bB(0,b.e()-1|0);}if(b.ev(D(7)))b=b.bB(0,b.e()-1|0);}return b;}
function Lq(b){if(b!==null){Sh(b);return LE(b.d());}H(Cc(D(8)));}
function Sh(b){var c;a:{b:{if(b!==null){if(b instanceof B4){if((OP(0.0)).z(b))break b;c=b;if(!c.fw()&&!c.fP())break b;H(Cc(D(9)));}if(b instanceof B9&&!(UK(0.0)).z(b)){c=b;if(c.fw())break a;if(c.fP())break a;}}}return;}H(Cc(D(10)));}
function Hq(b,c){var d,e,f,g,h,i,j;if(NQ(b))return c.c(D(11));d=0;e=b.e();c.h(34);f=0;while(f<e){a:{g=b.m(f);switch(g){case 8:break;case 9:c.c(D(12));break a;case 10:c.c(D(13));break a;case 12:c.c(D(14));break a;case 13:c.c(D(15));break a;case 34:case 92:c.h(92);c.h(g);break a;case 47:if(d==60)c.h(92);c.h(g);break a;default:if(g>=32){c.h(g);break a;}h=FB(g);i=K();X(X(i,D(16)),h);j=Bd(i);(c.c(D(17))).c(j.g_(j.e()-4|0));break a;}c.c(D(18));}f=f+1|0;d=g;}return c.h(34);}
var CZ=C(0);
function Ps(a){return a.bT(a.dc());}
var CV=C(0);
var Cy=C(0);
function Cl(){B.call(this);this.bv=null;}
function FD(a,b){E(a);a.bv=b;}
function J2(a){return a.bv;}
function Hu(a,b){var c,d,e;if(b===null){Y();return Xs;}a:{c=$rt_str(typeof b);d=(-1);switch(c.bS()){case -1034364087:if(!c.z(D(19)))break a;d=2;break a;case -1023368385:if(!c.z(D(20)))break a;d=0;break a;case -891985903:if(!c.z(D(21)))break a;d=1;break a;case 64711720:if(!c.z(D(22)))break a;d=3;break a;default:}}switch(d){case 0:if(!(Object.prototype.toString.apply(b)==='[object Array]'?1:0)){Y();e=Xt;}else{Y();e=Xu;}return e;case 1:break;case 2:Y();return Xv;case 3:Y();return Xw;default:Y();return Xx;}Y();return Xy;}
function JD(a){return Ge();}
function JZ(a,b){if(!(b instanceof FG))return Gf(b);return b;}
function FI(a,b){if(!(b instanceof Ff))return PN(b);return b;}
function I1(a,b){Uq();switch(Xz.data[Bi(a.cc(b))]){case 1:return Or(b);case 2:return CI(Nv(b));case 3:return Ll(b);default:}return b;}
function G9(a,b){if(b===null)return null;if(b instanceof BP)return $rt_ustr(b);if(b instanceof BJ)return !!b.e2();if(b instanceof B9)return b.jG();if(b instanceof B4)return b.bo();if(b instanceof W)return b.I();if(!(b instanceof BN))return b;return $rt_ustr(Ib(b));}
function FQ(a){return a.d5();}
function Ll(b){var c;c=TR(b);if(c!==Rh(c))return Bq(c);if(Ss(c)<=2.147483647E9)return Bb(c|0);return Eg(Xj(c));}
function Rx(a){return a.fe();}
function Tu(a){return a.fY();}
function LK(a,b){return a.e0(b);}
function LU(a,b){return a.fj(b);}
function Sy(a,b){return a.dZ(b);}
function Ge(){return {};}
function TH(b){var keys=[];for(var key in b){if(Object.prototype.hasOwnProperty.call(b,key)&&key!='$H'){keys.push(key);}}return keys;}
function GS(){var a=this;B.call(a);a.d0=null;a.fv=null;a.e1=0;a.fG=0;}
function UD(a,b){var c=new GS();Qr(c,a,b);return c;}
function Qr(a,b,c){E(a);a.d0=b;a.fv=c;}
function PF(a){return B6(a.d0);}
function PL(a,b){return BT(a.fv)<b?0:1;}
function Qy(a,b){a.e1=b;}
function TM(a,b){a.fG=b;}
var DH=C(0);
function M2(a,b){return OD(a.iS(b));}
var EQ=C(0);
var Br=C(0);
var W=C();
function B7(a){E(a);}
var Ba=C(0);
function Cm(){W.call(this);this.dw=0;}
var XA=null;var XB=null;function BR(){BR=L(Cm);PX();}
function Qz(a){var b=new Cm();In(b,a);return b;}
function In(a,b){BR();B7(a);a.dw=b;}
function H8(b,c){BR();if(!(c>=2&&c<=36))c=10;return ((Wa(20)).d_(b,c)).d();}
function FB(b){BR();return LC(b,4);}
function Hn(b){BR();return H8(b,10);}
function G1(b,c){var d,e,f,g,h;BR();if(c>=2&&c<=36){if(b!==null&&!b.b_()){a:{d=0;e=0;switch(b.m(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.e())H(WI());while(e<b.e()){g=e+1|0;h=FK(b.m(e));if(h<0)H(C8((((K()).c(D(23))).c(b)).d()));if(h>=c)H(C8((((((K()).c(D(24))).s(c)).c(D(1))).c(b)).d()));f=Ek(c,f)+h|0;if(f<0){if(g==b.e()&&f==(-2147483648)&&d)return (-2147483648);H(C8((((K()).c(D(25))).c(b)).d()));}e=g;}if(d)f= -f|0;return f;}H(C8(D(26)));}H(C8((((K()).c(D(27))).s(c)).d()));}
function ES(b){BR();return G1(b,10);}
function Bb(b){BR();if(b>=(-128)&&b<=127){GZ();return XB.data[b+128|0];}return Qz(b);}
function GZ(){var b;BR();a:{if(XB===null){XB=U(Cm,256);b=0;while(true){if(b>=XB.data.length)break a;XB.data[b]=Qz(b-128|0);b=b+1|0;}}}}
function MQ(a){return a.dw;}
function RC(a){return Hn(a.dw);}
function GY(b){var c,d,e;BR();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function PX(){XA=F($rt_intcls());}
var IG=C(Bz);
function Uc(){var a=new IG();Sd(a);return a;}
function Sd(a){Dn(a);}
var B1=C();
var XC=null;var XD=null;var XE=null;var XF=null;var XG=null;function O4(){O4=L(B1);Sq();}
function Sq(){XC=UI([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);XD=Oe([G(1),G(10),G(100),G(1000),G(10000),G(100000),G(1000000),G(10000000),G(100000000),G(1000000000),P(1410065408, 2),P(1215752192, 23),P(3567587328, 232),P(1316134912, 2328),P(276447232, 23283),P(2764472320, 232830),P(1874919424, 2328306),P(1569325056, 23283064),P(2808348672, 232830643)]);XE=Oe([G(1),G(10),G(100),G(10000),G(100000000),P(1874919424, 2328306)]);XF=Uo();XG=VL();}
function Fz(){W.call(this);this.dL=BF;}
var XH=null;function IU(){IU=L(Fz);Rb();}
function V4(a){var b=new Fz();IM(b,a);return b;}
function IM(a,b){IU();B7(a);a.dL=b;}
function Eg(b){IU();return V4(b);}
function LR(a){return Dw(a.dL);}
function GH(b){IU();return ((K()).iq(b)).d();}
function Qw(a){return GH(a.dL);}
function DA(b,c){return Long_udiv(b, c);}
function GF(b,c){return Long_urem(b, c);}
function Rb(){XH=F($rt_longcls());}
var BZ=C(0);
var Ep=C(0);
function B0(){var a=this;B.call(a);a.fE=BF;a.gk=BF;a.hc=null;a.hY=null;a.gM=0;a.iW=null;}
var XI=null;var XJ=null;var XK=0;var XL=0;var XM=null;function Fr(){Fr=L(B0);Nf();}
function TV(a){var b=new B0();Hp(b,a);return b;}
function XN(a,b){var c=new B0();EP(c,a,b);return c;}
function Hp(a,b){Fr();EP(a,null,b);}
function EP(a,b,c){var d;Fr();E(a);a.hc=Ve();a.gM=1;a.hY=c;a.iW=b;d=XK;XK=d+1|0;a.fE=G(d);}
function N9(b){Fr();if(XJ!==b)XJ=b;XJ.gk=IF();}
function FN(){Fr();return XJ;}
function Lm(a){return a.fE;}
function Nf(){XI=TV(D(28));XJ=XI;XK=1;XL=1;XM=VI();}
var Bg=C(0);
function Je(b){return b;}
var EL=C(0);
var Jj=C();
function Th(a,b){return a.jP(b);}
function Oi(a){return a.jL();}
var DS=C(0);
function Pf(a,b,c){return Rj(CT(B,[a.c8(b),c]));}
function Tx(a,b){D8();return XO.z(a.h3(b));}
function Qf(a,b){return TK(a.c8(b));}
function OH(a,b){return E_(a.c8(b));}
function MR(a,b,c){return E_(a.gK(b,c));}
var CP=C(0);
function O9(a,b){return a.bT(a.cw(b));}
function N_(a,b){return a.ba(a.cw(b));}
var Kz=C();
function Rj(b){var c,d,e,f;c=b.data;d=c.length;e=0;while(true){if(e>=d)return null;f=c[e];if(f!==null)break;e=e+1|0;}return f;}
var CD=C(0);
function IX(){B.call(this);this.fq=null;}
function V6(a){var b=new IX();PG(b,a);return b;}
function PG(a,b){E(a);a.fq=b;}
function QN(a,b){K1(a,b);}
function K1(a,b){IT(a.fq,b);}
var E0=C(0);
function IW(){B.call(this);this.ey=null;}
function WK(a){var b=new IW();Tc(b,a);return b;}
function Tc(a,b){E(a);a.ey=b;}
function NE(a,b){GD(a.ey,b);}
function BE(){var a=this;B.call(a);a.k=null;a.N=null;}
function Fp(a){E(a);}
var CW=C(0);
var Cs=C(BX);
function XP(a){var b=new Cs();Il(b,a);return b;}
function XQ(a){var b=new Cs();Hc(b,a);return b;}
function Il(a,b){Fn(a,b);}
function Hc(a,b){JB(a,b);}
var Cx=C(Cs);
function XR(a){var b=new Cx();Gh(b,a);return b;}
function Gh(a,b){Il(a,b);}
var Ko=C(Do);
function Ow(){var a=new Ko();Ql(a);return a;}
function Ql(a){HF(a);}
function DG(){B.call(this);this.ha=null;}
var XS=null;var XT=null;function Sr(){Sr=L(DG);Tr();}
function Pz(a){var b=new DG();FP(b,a);return b;}
function FP(a,b){Sr();E(a);a.ha=b;}
function Tr(){XS=Pz(D(29));XT=Pz(D(30));}
var JL=C();
function Ht(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.ew.data;f=b.fR;b.fR=f+1|0;g=M_(e[f]);h=(g%2|0)!=1?0:1;c=c+Ek(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function Go(b){var c,d;c=Ht(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function M_(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
var Ft=C(0);
var Ef=C(0);
var EG=C(0);
var BW=C();
function C3(a){E(a);}
function LZ(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.d9(f[c]);e=e+1|0;c=g;}}
var Ex=C(BW);
var XU=null;function SA(){SA=L(Ex);Oj();}
function UR(){var a=new Ex();J8(a);return a;}
function J8(a){SA();C3(a);}
function M3(a,b){P4(b);}
function Oj(){XU=UR();}
var EY=C(0);
var Bk=C();
var GE=C(Bk);
var Fj=C();
var XV=null;function HV(){return (DL()).hJ();}
function P1(b){return (DL()).bT(b);}
function Rv(b){return (DL()).c4(b);}
function Nd(b){return (DL()).ba(b);}
function TO(b){XV=b;}
function DL(){var b;if(XV===null){b=UX();DM();TO(E4(F(CZ),b,XW));if(XV===null){(Hw()).eZ(D(31));XV=V0();}}return XV;}
function Pc(){return Gy(F(CZ));}
function Cr(){var a=this;B.call(a);a.b=null;a.l=0;}
function XX(){var a=new Cr();Ey(a);return a;}
function Wa(a){var b=new Cr();Ed(b,a);return b;}
function Ey(a){Ed(a,16);}
function Ed(a,b){E(a);a.b=BL(b);}
function Kc(a,b){return a.eW(a.l,b);}
function Eq(a,b){return a.cl(a.l,b);}
function EW(a,b,c){var d,e,f;if(b>=0&&b<=a.l){if(c===null)c=D(5);else if(c.b_())return a;a.bx(a.l+c.e()|0);d=a.l-1|0;while(d>=b){a.b.data[d+c.e()|0]=a.b.data[d];d=d+(-1)|0;}a.l=a.l+c.e()|0;d=0;while(d<c.e()){e=a.b.data;f=b+1|0;e[b]=c.m(d);d=d+1|0;b=f;}return a;}H(Ow());}
function Hi(a,b){return a.d_(b,10);}
function My(a,b,c){return a.gG(a.l,b,c);}
function R6(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)Z(a,b,b+1|0);else{Z(a,b,b+2|0);f=a.b.data;g=b+1|0;f[b]=45;b=g;}a.b.data[b]=Cw(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Ek(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;Z(a,b,b+i|0);if(e)l=b;else{f=a.b.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.b.data;g=l+1|0;f[l]=Cw(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function JX(a,b){return a.em(a.l,b);}
function KS(a,b,c){return a.h9(b,c,10);}
function LF(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(II(c,BF)){e=0;c=T_(c);}a:{f=G(d);if(II(c,f)){if(e)Z(a,b,b+1|0);else{Z(a,b,b+2|0);g=a.b.data;h=b+1|0;g[b]=45;b=h;}a.b.data[b]=Cw(Dw(c),d);}else{i=1;j=G(1);while(true){k=N(j,f);if(CL(k,j))break;if(Im(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;Z(a,b,b+i|0);if(e)l=b;else{g=a.b.data;l=b+1|0;g[b]=45;}while(true){if(CL(j,BF))break a;g=a.b.data;h=l+1|0;g[l]=Cw(Dw(Bc(c,j)),d);c=C9(c,j);j=Bc(j,f);l=h;}}}return a;}
function I5(a,b){return a.dR(a.l,b);}
function Ii(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=C_(c,0.0);if(!d){Z(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=48;e=a.b.data;f=d+1|0;e[d]=46;a.b.data[f]=48;return a;}if(!d){Z(a,b,b+4|0);e=a.b.data;d=b+1|0;e[b]=45;e=a.b.data;f=d+1|0;e[d]=48;e=a.b.data;d=f+1|0;e[f]=46;a.b.data[d]=48;return a;}if(isNaN(c)?1:0){Z(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=78;e=a.b.data;f=d+1|0;e[d]=97;a.b.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Z(a,b,b+8|0);d=b;}else{Z(a,b,b+9|0);e=a.b.data;d=b+1|0;e[b]=45;}e=a.b.data;f=d+1|0;e[d]
=73;e=a.b.data;d=f+1|0;e[f]=110;e=a.b.data;f=d+1|0;e[d]=102;e=a.b.data;d=f+1|0;e[f]=105;e=a.b.data;f=d+1|0;e[d]=110;e=a.b.data;d=f+1|0;e[f]=105;e=a.b.data;f=d+1|0;e[d]=116;a.b.data[f]=121;return a;}O4();g=XF;Kg(c,g);h=g.cF;i=g.cZ;j=g.d$;k=1;l=1;if(j)l=2;m=18;n=NK(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=B8(m,k+1|0);i=0;}else{h=Bc(h,XD.data[ -i|0]);m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(!(i>(-100)&&i<100))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;Z(a,b,b+d|0);if(!j)o
=b;else{e=a.b.data;o=b+1|0;e[b]=45;}p=P(1569325056, 23283064);q=0;while(q<m){if(CL(p,BF))r=0;else{r=Dw(Bc(h,p));h=C9(h,p);}e=a.b.data;d=o+1|0;e[o]=(48+r|0)&65535;k=k+(-1)|0;if(k)o=d;else{e=a.b.data;o=d+1|0;e[d]=46;}p=Bc(p,G(10));q=q+1|0;}if(i){e=a.b.data;d=o+1|0;e[o]=69;if(i>=0)f=d;else{i= -i|0;e=a.b.data;f=d+1|0;e[d]=45;}if(i>=100){e=a.b.data;d=f+1|0;e[f]=(48+(i/100|0)|0)&65535;i=i%100|0;e=a.b.data;o=d+1|0;e[d]=(48+(i/10|0)|0)&65535;}else if(i<10)o=f;else{e=a.b.data;o=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.b.data[o]
=(48+(i%10|0)|0)&65535;}return a;}
function NK(b){var c,d,e,f;c=G(1);d=0;e=16;O4();f=XE.data.length-1|0;while(f>=0){if(CK(C9(b,N(c,XE.data[f])),BF)){d=d|e;c=N(c,XE.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function KC(a,b){return a.fh(a.l,b);}
function Kl(a,b,c){Z(a,b,b+1|0);a.b.data[b]=c;return a;}
function IV(a,b,c){return a.cl(b,c===null?D(5):c.d());}
function Et(a,b){var c;if(a.b.data.length>=b)return;c=a.b.data.length>=1073741823?2147483647:B8(b,B8(a.b.data.length*2|0,5));a.b=MS(a.b,c);}
function D6(a){return Ok(a.b,0,a.l);}
function JO(a){return a.l;}
function Hr(a,b,c,d){return a.dO(a.l,b,c,d);}
function Gj(a,b,c,d,e){var f,g;if(d<=e&&e<=c.e()&&d>=0){Z(a,b,(b+e|0)-d|0);while(d<e){f=a.b.data;g=b+1|0;f[b]=c.m(d);d=d+1|0;b=g;}return a;}H(GR());}
function Jq(a,b,c,d,e){var f,g,h,i;if(b>c)H(Ck(D(32)));while(b<c){f=d.data;g=e+1|0;h=a.b.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function Jl(a,b){a.l=b;}
function Z(a,b,c){var d,e;d=a.l-b|0;a.bx((a.l+c|0)-b|0);e=d-1|0;while(e>=0){a.b.data[c+e|0]=a.b.data[b+e|0];e=e+(-1)|0;}a.l=a.l+(c-b|0)|0;}
var CS=C(0);
var F6=C(Cr);
function T7(a){var b=new F6();ST(b,a);return b;}
function K(){var a=new F6();Sm(a);return a;}
function ST(a,b){Ed(a,b);}
function Sm(a){Ey(a);}
function X(a,b){Kc(a,b);return a;}
function LM(a,b){Eq(a,b);return a;}
function Bx(a,b){Hi(a,b);return a;}
function Q4(a,b){JX(a,b);return a;}
function O6(a,b){I5(a,b);return a;}
function Lz(a,b){KC(a,b);return a;}
function RL(a,b,c,d){Hr(a,b,c,d);return a;}
function Qj(a,b,c){KS(a,b,c);return a;}
function Sb(a,b,c){Ii(a,b,c);return a;}
function Mi(a,b,c,d,e){Gj(a,b,c,d,e);return a;}
function SZ(a,b,c){IV(a,b,c);return a;}
function MP(a,b,c){Kl(a,b,c);return a;}
function Tb(a,b,c){EW(a,b,c);return a;}
function Tl(a,b){Jl(a,b);}
function PO(a,b,c,d,e){Jq(a,b,c,d,e);}
function Nw(a,b,c,d,e){return a.hE(b,c,d,e);}
function Nr(a){return JO(a);}
function Bd(a){return D6(a);}
function To(a,b){Et(a,b);}
function LP(a,b,c){return a.hf(b,c);}
function Lk(a,b,c){return a.ix(b,c);}
function PK(a,b,c){return a.ho(b,c);}
function Ot(a,b,c){return a.hT(b,c);}
function TA(a,b,c){return a.g7(b,c);}
var EX=C(0);
var CY=C(0);
function L1(a,b,c){return a.fT(b,a.gQ(c));}
var Dx=C(0);
function OS(a){return WR();}
function Sj(a,b){if(b!==null&&!Bj(b,CY))return Wy(b);return b;}
function S4(a,b){if(b!==null&&!Bj(b,CG))return Wg(b);return b;}
function NJ(a,b){if(b===null){Y();return Xs;}if(!Bj(b,BZ)&&!Bj(b,CP)){if(!Bj(b,Cd)&&!Bj(b,CN)){if(b instanceof BJ){Y();return Xv;}if(b instanceof BP){Y();return Xy;}if(!J7(b)){Y();return Xx;}Y();return Xv;}Y();return Xu;}Y();return Xt;}
function C6(){B.call(this);this.dS=0;}
function GC(a){E(a);a.gt();}
function Kd(a,b){E(a);a.c7(b);}
function Pt(a){a.c7(a.dc());}
function L5(a){a.c7(EU(a.b4()));}
function RI(a){return a.dK(V8((a.b4()).i9()));}
function SL(a,b){return (a.b4()).cy(b);}
function NW(a,b,c){a.gV();(a.b4()).bg(b,c);return a;}
function S9(a){if(a.dS){a.hu();a.dS=0;}}
function SW(a){return a.d5();}
function RM(a,b,c){return a.gN(b,c);}
var Jp=C(Q);
function NO(){var a=new Jp();Te(a);return a;}
function Te(a){Bw(a);}
var Fi=C(0);
var S=C(0);
function HQ(){B.call(this);this.f4=null;}
function V9(a){var b=new HQ();Td(b,a);return b;}
function Td(a,b){E(a);a.f4=b;}
function Li(a,b){return GP(a,b);}
function GP(a,b){return OI(a.f4,b);}
var C5=C(0);
var Js=C();
function VS(){var a=new Js();Sw(a);return a;}
function Sw(a){E(a);}
function K7(a){return Gl(a);}
function Gl(a){return SP();}
var CM=C(0);
function RN(a,b,c){return (a.gS(b)).ih(V9(c));}
function OI(b,c){return c.gl(b);}
var En=C();
var XY=null;function XZ(){var a=new En();NU(a);return a;}
function NU(a){E(a);}
function NA(a){if(XY===null)XY=CI(Nb()?1:0);return XY.e2();}
function NX(a,b){var c,d;c=EE();d=WN(c);MN($rt_ustr(b),Cz(d,"handle"));return c;}
function Pm(b,c){b.cK(T$(c));}
function Nb(){{try {if(typeof WebAssembly==="object"&&typeof WebAssembly.instantiate==="function"){const module=new WebAssembly.Module(Uint8Array.of(0x0,0x61,0x73,0x6d,0x01,0x00,0x00,0x00));if(module instanceof WebAssembly.Module)return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;}}catch(e){}return false;}}
function MN(b,c){((fetch(b)).then(function(response){return WebAssembly.compileStreaming(response);})).then(function(module){return c(module);});}
var G8=C(Cs);
function Va(a){var b=new G8();LN(b,a);return b;}
function LN(a,b){Hc(a,b);}
function Ch(){B.call(this);this.c_=null;}
function EV(a){E(a);}
function Nx(a){var b,c,d;b=K();b.h(123);c=(a.fU()).u();if(c.x()){d=c.t();b.P(d.bk()!==a?d.bk():D(33));b.h(61);b.P(d.bH()!==a?d.bH():D(33));}while(c.x()){b.c(D(34));d=c.t();b.P(d.bk()!==a?d.bk():D(33));b.h(61);b.P(d.bH()!==a?d.bH():D(33));}b.h(125);return b.d();}
var Ci=C(0);
function DN(){var a=this;Ch.call(a);a.v=0;a.g=null;a.A=0;a.f6=0.0;a.bZ=0;}
function TE(){var a=new DN();IC(a);return a;}
function X0(a){var b=new DN();DY(b,a);return b;}
function X1(a,b){var c=new DN();Kf(c,a,b);return c;}
function Q6(a,b){return U(CA,b);}
function IC(a){DY(a,16);}
function DY(a,b){Kf(a,b,0.75);}
function J9(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function Kf(a,b,c){var d;EV(a);if(b>=0&&c>0.0){d=J9(b);a.v=0;a.g=a.c3(d);a.f6=c;EK(a);return;}H(Hv());}
function EK(a){a.bZ=a.g.data.length*a.f6|0;}
function Rc(a,b){var c;c=Gu(a,b);if(c===null)return null;return c.O;}
function Gu(a,b){var c,d,e;if(b===null)c=C1(a);else{d=EF(b);e=d&(a.g.data.length-1|0);c=CO(a,b,e,d);}return c;}
function CO(a,b,c,d){var e,f;e=a.g.data[c];while(e!==null){if(e.b8==d){f=e.W;if(GW(b,f))break;}e=e.H;}return e;}
function C1(a){var b;b=a.g.data[0];while(b!==null&&b.W!==null){b=b.H;}return b;}
function Ma(a,b,c){return a.dt(b,c);}
function QV(a,b,c){var d,e,f,g,h;if(b===null){d=C1(a);if(d===null){a.A=a.A+1|0;d=a.bO(null,0,0);e=a.v+1|0;a.v=e;if(e>a.bZ)a.cg();}}else{f=EF(b);g=f&(a.g.data.length-1|0);d=CO(a,b,g,f);if(d===null){a.A=a.A+1|0;d=a.bO(b,g,f);e=a.v+1|0;a.v=e;if(e>a.bZ)a.cg();}}h=d.O;d.O=c;return h;}
function Ob(a,b,c,d){var e;e=Vw(b,d);e.H=a.g.data[c];a.g.data[c]=e;return e;}
function QK(a,b){var c,d,e,f,g,h,i;c=J9(!b?1:b<<1);d=a.c3(c);e=0;while(e<a.g.data.length){f=a.g.data[e];a.g.data[e]=null;while(f!==null){g=d.data;h=f.b8&(c-1|0);i=f.H;f.H=g[h];g[h]=f;f=i;}e=e+1|0;}a.g=d;EK(a);}
function OG(a){a.hx(a.g.data.length);}
function Hm(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.g.data[0];while(e!==null){if(e.W===null)break a;f=e.H;d=e;e=f;}}else{g=EF(b);c=g&(a.g.data.length-1|0);e=a.g.data[c];while(e!==null&&!(e.b8==g&&GW(b,e.W))){f=e.H;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.H=e.H;else a.g.data[c]=e.H;a.A=a.A+1|0;a.v=a.v-1|0;return e;}
function OC(a){return a.v;}
function EF(b){return b.bS();}
function GW(b,c){return b!==c&&!b.z(c)?0:1;}
function GN(){var a=this;DN.call(a);a.bU=0;a.G=null;a.o=null;}
function WR(){var a=new GN();MU(a);return a;}
function UF(a){var b=new GN();Ov(b,a);return b;}
function MU(a){IC(a);a.bU=0;a.G=null;}
function Ov(a,b){DY(a,b);a.bU=0;a.G=null;}
function NG(a,b){return U(Fb,b);}
function LJ(a,b){var c,d,e,f,g;if(b===null)c=C1(a);else{d=b.bS();e=(d&2147483647)%a.g.data.length|0;c=CO(a,b,e,d);}if(c===null)return null;if(a.bU&&a.o!==c){f=c.y;g=c.r;g.y=f;if(f===null)a.G=g;else f.r=g;c.r=null;c.y=a.o;a.o.r=c;a.o=c;}return c.O;}
function S0(a,b,c,d){var e;e=U0(b,d);e.H=a.g.data[c];a.g.data[c]=e;a.dp(e);return e;}
function Rs(a,b,c){var d;d=a.dt(b,c);if(a.ir(a.G))a.gA(a.G.W);return d;}
function S1(a,b,c){var d,e,f,g,h,i;if(!a.v){a.G=null;a.o=null;}if(b===null){d=C1(a);if(d!==null)a.dp(d);else{a.A=a.A+1|0;e=a.v+1|0;a.v=e;if(e>a.bZ)a.cg();d=a.bO(null,0,0);}}else{f=b.bS();e=f&2147483647;g=e%a.g.data.length|0;d=CO(a,b,g,f);if(d!==null)a.dp(d);else{a.A=a.A+1|0;h=a.v+1|0;a.v=h;if(h>a.bZ){a.cg();g=e%a.g.data.length|0;}d=a.bO(b,g,f);}}i=d.O;d.O=c;return i;}
function Ly(a,b){var c,d;if(a.o===b)return;if(a.G===null){a.G=b;a.o=b;return;}c=b.y;d=b.r;if(c!==null){if(d===null)return;if(a.bU){c.r=d;d.y=c;b.r=null;b.y=a.o;a.o.r=b;a.o=b;}return;}if(d===null){b.y=a.o;b.r=null;a.o.r=b;a.o=b;}else if(a.bU){a.G=d;d.y=null;b.y=a.o;b.r=null;a.o.r=b;a.o=b;}}
function QW(a){return U1(a);}
function OZ(a){if(a.c_===null)a.c_=Uj(a);return a.c_;}
function OM(a,b){var c,d,e;c=Hm(a,b);if(c===null)return null;d=c.y;e=c.r;if(d===null)a.G=e;else d.r=e;if(e===null)a.o=d;else e.y=d;return c.O;}
function LO(a,b){return 0;}
function Rf(b){return b.G;}
var Hj=C(Cr);
function OF(){var a=new Hj();Ro(a);return a;}
function Ro(a){Ey(a);}
function O$(a,b){Eq(a,b);return a;}
function O_(a,b,c){EW(a,b,c);return a;}
function NL(a){return D6(a);}
function N7(a,b){Et(a,b);}
function LG(a,b,c){return a.h8(b,c);}
function Cq(){var a=this;B.call(a);a.fy=0;a.w=0;a.T=0;a.b$=0;}
function E5(a,b){E(a);a.b$=(-1);a.fy=b;a.T=b;}
function CC(a){return a.w;}
function Jm(a,b){if(b>=0&&b<=a.T){a.w=b;if(b<a.b$)a.b$=0;return a;}H(Cc(((((((K()).c(D(35))).s(b)).c(D(36))).s(a.T)).c(D(37))).d()));}
function HC(a){a.w=0;a.T=a.fy;a.b$=(-1);return a;}
function BT(a){return a.T-a.w|0;}
function B6(a){return a.w>=a.T?0:1;}
function Cv(){var a=this;B.call(a);a.g6=null;a.eS=0;}
function Fg(a,b,c){E(a);a.g6=b;a.eS=c;}
function Bi(a){return a.eS;}
var B2=C(Cv);
var X2=null;var XW=null;var X3=null;var X4=null;function DM(){DM=L(B2);QZ();}
function HG(a,b){var c=new B2();Jd(c,a,b);return c;}
function Jd(a,b,c){DM();Fg(a,b,c);}
function FL(){DM();return CT(B2,[X2,XW,X3]);}
function QZ(){X2=HG(D(38),0);XW=HG(D(39),1);X3=HG(D(40),2);X4=FL();}
function Co(){var a=this;B.call(a);a.f3=0;a.b1=null;a.di=null;a.f_=null;}
function X5(a){var b=new Co();D5(b,a);return b;}
function D5(a,b){E(a);a.f3=b.A;a.b1=Rf(b);a.f_=b;}
function NS(a){return a.b1===null?0:1;}
function KE(a){if(a.f3==a.f_.A)return;H(NO());}
function Fq(a){KE(a);if(!a.x())H(Po());a.di=a.b1;a.b1=a.b1.r;}
var BQ=C(0);
var Jg=C(Co);
function Wi(a){var b=new Jg();Qb(b,a);return b;}
function Qb(a,b){D5(a,b);}
function ND(a){Fq(a);return a.di;}
function RJ(a){return a.hV();}
var Dc=C(0);
function De(){B.call(this);this.cY=null;}
function X6(){var a=new De();I3(a);return a;}
function I3(a){E(a);}
function KB(a,b){a.cY=b;}
function Ny(a,b){a.cY.cR(b);}
function MM(a,b){a.cY.c1(b);}
var Dl=C(0);
function DQ(){De.call(this);this.fQ=null;}
function Io(a){I3(a);}
function Pk(a,b){a.fQ=b;KB(a,b);}
function I$(a,b){a.fZ(b);}
function QQ(a,b){return a.fQ.dJ(b);}
function KV(){var a=this;DQ.call(a);a.bI=0;a.de=0;a.dj=0;a.dv=0;a.cs=null;a.eu=0;a.bQ=null;a.cA=null;a.ez=0;}
function VO(){var a=new KV();PM(a);return a;}
function PM(a){Io(a);}
function Ta(a){var b;if(Ne()){b=NH(D(41),U(DW,0));b.cH(V6(a));}a.c1(WK(a));}
function GD(a,b){var c,d,e,f,g,h,i,j;c=P1(b);d=(c.dz(D(42),Bb(0))).I();e=c.dF(D(43));f=e===null?0:1;if(f){a.bI=(c.dF(D(43))).I();a.de=(c.dF(D(44))).I();a.dj=(c.dz(D(45),Bb(0))).I();a.dv=(c.dz(D(46),Bb(0))).I();a.eu=c.iV(D(47));}if(a.eu&&a.bQ!==null){if(!f&&a.ez){g=a.bQ;h=U(B,1);h.data[0]=Bb(d);i=g.dT(D(48),h);}else{i=a.bQ.dT(D(49),CT(B,[Bb(d),Bb(a.bI),Bb(a.de),Bb(a.dj),Bb(a.dv)]));a.ez=1;}j=i.I();a.cA.ga(j);a.cs=a.cA.iM(3*a.bI|0);}else{if(f)MW(a.bI,a.de,a.dj,a.dv);a.cs=SQ(a.bI,null);Rg(d,a.cs);}a.cR(a.dJ(a.cs));}
function IT(a,b){a.bQ=b.c$();a.cA=a.bQ.is(0);}
var DX=C(0);
function DO(){var a=this;B.call(a);a.W=null;a.O=null;}
function X7(a,b){var c=new DO();KQ(c,a,b);return c;}
function KQ(a,b,c){E(a);a.W=b;a.O=c;}
function RU(a){return a.W;}
function SX(a){return a.O;}
function CA(){var a=this;DO.call(a);a.b8=0;a.H=null;}
function Vw(a,b){var c=new CA();Hs(c,a,b);return c;}
function Hs(a,b,c){KQ(a,b,null);a.b8=c;}
function Fb(){var a=this;CA.call(a);a.r=null;a.y=null;}
function U0(a,b){var c=new Fb();QS(c,a,b);return c;}
function QS(a,b,c){Hs(a,b,c);a.r=null;a.y=null;}
var DW=C();
function HY(){var a=this;B.call(a);a.B=0.0;a.C=0.0;a.D=0.0;}
function Cu(a,b,c){var d=new HY();Qk(d,a,b,c);return d;}
function Qk(a,b,c,d){E(a);a.B=b;a.C=c;a.D=d;}
function M(b,c,d){return Cu(b,c,d);}
function BA(b){var c,d;c=GJ(b);d=c===0.0?Infinity:1.0/c;return Be(d,b);}
function Be(b,c){return Cu(c.B*b,c.C*b,c.D*b);}
function Ca(b,c){return Cu(b.B-c.B,b.C-c.C,b.D-c.D);}
function CR(b,c){return Cu(b.B+c.B,b.C+c.C,b.D+c.D);}
function By(b,c){return b.B*c.B+b.C*c.C+b.D*c.D;}
function Dk(b,c){return Cu(b.C*c.D-b.D*c.C,b.D*c.B-b.B*c.D,b.B*c.C-b.C*c.B);}
function GJ(b){return Fu(By(b,b));}
var Cp=C(Cx);
function X8(a){var b=new Cp();Fd(b,a);return b;}
function Fd(a,b){Gh(a,b);}
var Jr=C(Cp);
function X9(a){var b=new Jr();Ox(b,a);return b;}
function Ox(a,b){Fd(a,b);}
var ED=C(Bz);
var Ct=C(0);
function LI(b){return U_(b);}
function Tn(b,c,d){return KR(b.f7(c),b.f7(d));}
var G_=C();
function V7(){var a=new G_();Nl(a);return a;}
function Nl(a){E(a);}
function GM(){var a=this;B.call(a);a.cp=0;a.fr=0;a.ft=0;a.d1=0;a.bJ=null;}
function Ut(a){var b=new GM();Nz(b,a);return b;}
function Nz(a,b){a.bJ=b;E(a);a.fr=a.bJ.ck;a.ft=a.bJ.p();a.d1=(-1);}
function L9(a){return a.cp>=a.ft?0:1;}
function QO(a){var b,c;HX(a);a.d1=a.cp;b=a.bJ;c=a.cp;a.cp=c+1|0;return b.cO(c);}
function HX(a){if(a.fr>=a.bJ.ck)return;H(NO());}
var Dm=C(Ch);
function Ju(a){EV(a);}
var Dg=C(0);
function DJ(){var a=this;B.call(a);a.fD=null;a.iu=null;a.hC=null;a.gr=null;a.i8=null;a.c0=0;a.gv=0;}
function X$(a,b){var c=new DJ();Gz(c,a,b);return c;}
function Gz(a,b,c){E(a);a.fD=b.e6;a.iu=b.ei;a.hC=b.ea;a.gr=b.dQ;a.i8=b.f5;a.ga(c);}
function TS(a,b){a.gv=b;a.c0=b;}
var DD=C(Q);
function VP(){var a=new DD();FZ(a);return a;}
function FZ(a){Bw(a);}
var KO=C(DD);
function TY(){var a=new KO();Sv(a);return a;}
function Sv(a){FZ(a);}
var E7=C(0);
var Er=C(0);
var Gx=C();
function HH(b,c){if(b===null)H(UN());if(b===F($rt_voidcls()))H(Hv());if(c<0)H(V2());return RS(b.fN(),c);}
function RS(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var ER=C(0);
var KM=C();
function VB(){var a=new KM();Om(a);return a;}
function Om(a){E(a);}
function Mf(b){I$(b,VB());b.iX();}
function S3(a,b){if(!(b instanceof BP))self.postMessage(b);else self.postMessage($rt_ustr(b));}
function SN(a,b){var c,d,e,f,g;c=b.data;d=c.length;e=new Array();f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function QH(a,b){self.onmessage=Cz(Vs(b),"handleEvent");}
function Qq(b,c){b.gX(c.data);}
var IK=C(Bk);
function IJ(){var a=this;B.call(a);a.cx=0;a.cr=null;}
function UV(a){var b=new IJ();Nh(b,a);return b;}
function Nh(a,b){a.cr=b;E(a);}
function Sc(a){return a.cx>=(Fw(a.cr)).data.length?0:1;}
function M$(a){var b,c;if(a.cx==(Fw(a.cr)).data.length)H(Po());b=(Fw(a.cr)).data;c=a.cx;a.cx=c+1|0;return b[c];}
function He(){var a=this;B.call(a);a.cF=BF;a.cZ=0;a.d$=0;}
function Uo(){var a=new He();NP(a);return a;}
function NP(a){E(a);}
var Id=C();
var G0=C(Cp);
function X_(a){var b=new G0();N$(b,a);return b;}
function N$(a,b){Fd(a,b);}
var DB=C(0);
var CE=C(0);
var Cb=C();
function Fh(a){E(a);}
function QI(a){var b,c,d,e,f;b=U(B,a.p());c=0;d=a.u();while(d.x()){e=b.data;f=c+1|0;e[c]=d.t();c=f;}return b;}
function PU(a,b){var c,d,e,f;c=b.data;d=a.p();e=c.length;if(e<d)b=HH((Di(b)).f$(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.u();while(f.x()){c=b.data;e=d+1|0;c[d]=f.t();d=e;}return b;}
var E1=C(0);
function EE(){return WQ();}
function Qp(a,b){if(!b.e9())a.cE(b.eX());else a.cK(b.c$());}
function SD(a){return UL(a);}
function R7(a,b){var c;c=EE();a.cH(UZ(b,c));return c;}
function OX(b,c,d){var e,f,g,$$je;if(!d.e9())c.cE(d.eX());else{try{e=b.f(d.c$());}catch($$e){$$je=DR($$e);if($$je instanceof BX){g=$$je;f=Fv();Gi();f.iY(Ya,D(50),g);c.cE(g);return;}else{throw $$e;}}e.cH(c.g9());}}
function I2(){var a=this;B.call(a);a.dl=0;a.bG=0;a.dC=null;a.fc=null;a.eB=null;}
function WQ(){var a=new I2();NN(a);return a;}
function NN(a){E(a);}
function SR(a){return a.fc;}
function MY(a){return a.eB;}
function QL(a){return a.bG;}
function MC(a){return !a.dl&&!a.bG?0:1;}
function Sx(a,b){a.dC=b;DT(a);}
function QE(a,b){Fm(a);a.fc=b;a.bG=1;DT(a);}
function NZ(a,b){Fm(a);a.eB=b;a.dl=1;DT(a);}
function DT(a){var b,$$je;a:{if(a.dC!==null&&a.iC()){try{a.dC.cW(a);break a;}catch($$e){$$je=DR($$e);if($$je instanceof BX){b=$$je;}else{throw $$e;}}b.iZ();}}}
function Fm(a){var b,c,d;if(!a.bG&&!a.dl)return;b=new Eb;c=!a.bG?D(51):D(52);d=K();X(X(d,D(53)),c);G$(b,Bd(d));H(b);}
var If=C();
function LC(b,c){var d,e,f,g,h,i,j,k;if(!b)return D(6);d=1<<c;e=d-1|0;f=(((32-GY(b)|0)+c|0)-1|0)/c|0;g=BL(f);h=Ek(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=Cw(b>>>h&e,d);h=h-c|0;i=k;}return T1(g);}
function FC(){W.call(this);this.iU=0;}
var Yb=null;function QJ(){QJ=L(FC);NI();}
function Ww(a){var b=new FC();Hz(b,a);return b;}
function Hz(a,b){QJ();B7(a);a.iU=b;}
function F5(b){QJ();return Ww(b);}
function NI(){Yb=F($rt_shortcls());}
var Ec=C(0);
var KP=C();
function VI(){var a=new KP();Nt(a);return a;}
function Nt(a){E(a);}
var FF=C(0);
var HZ=C();
function Cz(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Cf(){var a=this;B.call(a);a.dy=null;a.cU=null;a.dr=null;a.cT=null;}
function Yc(){var a=new Cf();FA(a);return a;}
function FA(a){E(a);}
function IH(b,c){var d,e,f,g,h,i,j,k,l;d=Ca(b,c);e=BA(d);f=Cu(0.0,(-1.0),0.0);g=Dk(e,f);h=BA(g);i=Be(2.0,h);j=Dk(e,i);k=BA(j);l=Be(2.0,k);return Vn(c,e,l,i);}
function FM(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=e/d;g=Ca(b,c);h=BA(g);i=Cu(0.0,(-1.0),0.0);j=Dk(h,i);k=BA(j);l=Be(2.0,k);m=Dk(h,l);n=BA(m);o=Be(2.0*f,n);return U9(c,h,o,l);}
function HD(){B.call(this);this.fM=null;}
function T8(a){var b=new HD();QD(b,a);return b;}
function QD(a,b){E(a);a.fM=b;}
function Hl(a){return UV(a);}
function Gy(b){return T8(Re(b.fN()));}
function Re(b){var c;c=LW(b);if(c===null)c=U(B,0);return c;}
function LW(b){if (!HD.$$services$$) {HD.$$services$$ = true;CM.$$serviceList$$ = [[En, NU]];CZ.$$serviceList$$ = [[Ff, Lo]];}var cls = b;if (!cls.$$serviceList$$) {return $rt_createArray($rt_objcls(), 0);}var result = $rt_createArray($rt_objcls(), cls.$$serviceList$$.length);for (var i = 0; i < result.data.length; ++i) {var serviceDesc = cls.$$serviceList$$[i];result.data[i] = new serviceDesc[0]();serviceDesc[1](result.data[i]);}return result;}
function Fw(b){return b.fM;}
var HA=C();
function So(b){var c,d,e,f,g,h,i,j,k;c=Vh(b.i0());d=Ht(c);e=EO(d*2|0);f=0;g=0;h=0;i=0;while(i<d){j=e.data;g=g+Go(c)|0;h=h+Go(c)|0;k=f+1|0;j[f]=g;f=k+1|0;j[k]=h;i=i+1|0;}return e;}
function BK(){var a=this;B.call(a);a.b5=null;a.bp=null;a.cd=null;}
function Du(a){E(a);}
function Bu(){var a=this;B.call(a);a.Y=null;a.bl=null;}
function Yd(){var a=new Bu();CQ(a);return a;}
function CQ(a){E(a);}
function Jy(){var a=this;Bu.call(a);a.fC=null;a.e8=null;}
function TZ(a,b){var c=new Jy();Nu(c,a,b);return c;}
function Nu(a,b,c){a.fC=b;a.e8=c;CQ(a);a.bl=a.fC.bp.dy;a.Y=a.e8;}
function C4(){var a=this;B.call(a);a.gT=null;a.dm=null;a.g3=0.0;a.dP=0.0;a.c5=null;a.dE=null;a.bt=0;}
function J_(a,b,c,d,e){E(a);Fk();a.c5=Ye;a.dE=Ye;J4(a,e);a.gT=b;a.dm=e.dH();a.g3=c;a.dP=d;}
function Jv(a,b,c,d){var e;e=Dt(1);e.data[0]=63;J_(a,b,c,d,e);}
function J4(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.dP)return;}H(Cc(D(54)));}
function FH(a,b){if(b!==null){a.c5=b;a.it(b);return a;}H(Cc(D(55)));}
function SF(a,b){}
function J5(a,b){if(b!==null){a.dE=b;a.hU(b);return a;}H(Cc(D(55)));}
function R3(a,b){}
function G4(a,b,c,d){var e,f,g,h,$$je;a:{if(a.bt!=3){if(d)break a;if(a.bt!=2)break a;}H(No());}a.bt=!d?1:2;while(true){try{e=a.hh(b,c);}catch($$e){$$je=DR($$e);if($$je instanceof Q){f=$$je;H(Va(f));}else{throw $$e;}}if(e.gh()){if(!d)return e;g=BT(b);if(g<=0)return e;e=Dh(g);}else if(e.cS())break;h=!e.fA()?a.c5:a.dE;b:{Fk();if(h!==Yf){if(h===Yg)break b;else return e;}if(BT(c)<a.dm.data.length)return Yh;Jk(c,a.dm);}b.er(CC(b)+e.e()|0);}return e;}
function Gd(a,b){var c;if(a.bt!=2&&a.bt!=4)H(No());c=a.gB(b);Bo();if(c===Yi)a.bt=3;return c;}
function Lv(a,b){Bo();return Yi;}
var BU=C();
var Yj=null;var Yk=null;var Yl=null;var Ym=null;var Yn=null;var Yo=null;function Ee(){Ee=L(BU);SK();}
function J7(b){Ee();return b instanceof W;}
function JS(b){Ee();return b===null?null:b instanceof Cm?b:!(b instanceof W)?null:Bb(b.I());}
function IS(b){var c,$$je;Ee();if(b===null)return null;a:{try{c=Bb(ES(b));}catch($$e){$$je=DR($$e);if($$je instanceof Eu){break a;}else{throw $$e;}}return c;}return null;}
function E_(b){var c;Ee();c=JS(b);if(c===null&&b!==null)return IS(b.d());return c;}
function SK(){Yj=KA(0);Yk=F5(0);Yl=Bb(0);Ym=Eg(BF);Yn=KJ(0.0);Yo=Bq(0.0);}
var CN=C(0);
function Qe(a,b){return a.ba(a.cL(b));}
function Ds(){var a=this;Cq.call(a);a.fJ=0;a.ej=null;a.i$=null;}
function GQ(a,b,c,d,e,f){E5(a,c);Sr();a.i$=XS;a.fJ=b;a.ej=d;a.w=e;a.T=f;}
function Si(b,c,d){return VD(0,b.data.length,b,c,c+d|0,0,0);}
function Pw(b){return Si(b,0,b.data.length);}
function Rl(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.go())H(TY());if(BT(a)<d)H(UT());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)H(Ck((((((K()).c(D(56))).s(g)).c(D(57))).s(f)).d()));if(d<0)H(Ck(((((K()).c(D(58))).s(d)).c(D(59))).d()));h=a.w+a.fJ|0;i=0;while(i<d){j=a.ej.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.w=a.w+d|0;return a;}}e=b.data;H(Ck(((((((K()).c(D(60))).s(c)).c(D(36))).s(e.length)).c(D(61))).d()));}
function Jk(a,b){return a.e4(b,0,b.data.length);}
function Ev(a){HC(a);return a;}
function JR(){var a=this;Ds.call(a);a.gp=0;a.d3=0;}
function VD(a,b,c,d,e,f,g){var h=new JR();L2(h,a,b,c,d,e,f,g);return h;}
function L2(a,b,c,d,e,f,g,h){GQ(a,b,c,d,e,f);a.gp=g;a.d3=h;}
function Q7(a){return a.d3;}
function Gc(){var a=this;B.call(a);a.fi=null;a.eR=null;a.dA=null;a.eL=null;a.bz=null;}
function Uy(){var a=new Gc();Tw(a);return a;}
function Tw(a){E(a);}
function JT(a,b,c){if(b!==null)a.fi=b;if(c!==null)a.eR=c;return a;}
function Jn(a){var b;if(a.dA===null){b=Hl(a.fi.fI());if(b.x())a.dA=b.t();}return a.dA;}
function J0(a){var b,c;a:{if(a.bz===null){a.bz=Jn(a);if(a.eL!==null){b=a.eL.u();while(true){if(!b.x())break a;c=b.t();a.bz=c.f(a.bz);}}}}return a.bz;}
var HS=C();
function UW(b){Mf(VO());}
var Bn=C(Cv);
var Xy=null;var Xv=null;var Xw=null;var Xt=null;var Xu=null;var Xs=null;var Xx=null;var Yp=null;function Y(){Y=L(Bn);M9();}
function Cg(a,b){var c=new Bn();JG(c,a,b);return c;}
function ET(){Y();return Yp.dH();}
function JG(a,b,c){Y();Fg(a,b,c);}
function I_(){Y();return CT(Bn,[Xy,Xv,Xw,Xt,Xu,Xs,Xx]);}
function M9(){Xy=Cg(D(62),0);Xv=Cg(D(63),1);Xw=Cg(D(64),2);Xt=Cg(D(65),3);Xu=Cg(D(66),4);Xs=Cg(D(67),5);Xx=Cg(D(68),6);Yp=I_();}
function Bt(){var a=this;B.call(a);a.ip=null;a.fK=0;}
var Yq=null;var Ya=null;var Yr=null;var Ys=null;var Yt=null;var Yu=null;var Yv=null;var Yw=null;var Yx=null;function Gi(){Gi=L(Bt);PW();}
function BY(a,b){var c=new Bt();Kw(c,a,b);return c;}
function Kw(a,b,c){Gi();E(a);a.ip=b;a.fK=c;}
function C0(a){return a.fK;}
function PW(){Yq=BY(D(69),2147483647);Ya=BY(D(70),1000);Yr=BY(D(71),900);Ys=BY(D(72),800);Yt=BY(D(73),700);Yu=BY(D(74),500);Yv=BY(D(75),400);Yw=BY(D(76),300);Yx=BY(D(77),(-2147483648));}
var HB=C();
function LA(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Pi(b){return Je(String.fromCharCode(b));}
function Su(b){return b.$meta.item;}
function PI(b){return $rt_str(b.$meta.name);}
function Db(){var a=this;B.call(a);a.gn=null;a.ic=null;}
function HK(a,b,c){var d,e,f,g;d=c.data;E(a);H9(b);e=d.length;f=0;while(f<e){g=d[f];H9(g);f=f+1|0;}a.gn=b;a.ic=c.dH();}
function H9(b){var c,d;if(b.b_())H(Ji(b));if(!H$(b.m(0)))H(Ji(b));c=1;while(c<b.e()){a:{d=b.m(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(H$(d))break a;else H(Ji(b));}}c=c+1|0;}}
function H$(b){var c;a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}c=1;break a;}c=0;}return c;}
function CJ(){B.call(this);this.ia=null;}
var Yg=null;var Yf=null;var Ye=null;function Fk(){Fk=L(CJ);Lu();}
function J3(a){var b=new CJ();H3(b,a);return b;}
function H3(a,b){Fk();E(a);a.ia=b;}
function Lu(){Yg=J3(D(78));Yf=J3(D(79));Ye=J3(D(80));}
function BJ(){B.call(this);this.bY=0;}
var XO=null;var Yy=null;var Yz=null;function D8(){D8=L(BJ);Nm();}
function NM(a){var b=new BJ();Hy(b,a);return b;}
function Hy(a,b){D8();E(a);a.bY=b;}
function Q5(a){return a.bY;}
function CI(b){D8();return !b?Yy:XO;}
function IN(b){D8();return !b?D(81):D(82);}
function MH(a){return IN(a.bY);}
function Md(a,b){if(a===b)return 1;return b instanceof BJ&&b.bY==a.bY?1:0;}
function Nm(){XO=NM(1);Yy=NM(0);Yz=F($rt_booleancls());}
var Cn=C(Q);
function Hv(){var a=new Cn();EC(a);return a;}
function Cc(a){var b=new Cn();K3(b,a);return b;}
function EC(a){Bw(a);}
function K3(a,b){Fl(a,b);}
function Ie(){Cn.call(this);this.g5=null;}
function Ji(a){var b=new Ie();Qs(b,a);return b;}
function Qs(a,b){EC(a);a.g5=b;}
var KW=C(Q);
function Po(){var a=new KW();LV(a);return a;}
function LV(a){Bw(a);}
function FV(){B.call(this);this.fx=null;}
function U_(a){var b=new FV();P9(b,a);return b;}
function P9(a,b){E(a);a.fx=b;}
function Q3(a,b,c){return Tn(a.fx,b,c);}
var EJ=C();
var Xr=null;function UH(){UH=L(EJ);Rt();}
function Rt(){Xr=EO((ET()).data.length);Xr.data[Bi(Xs)]=1;Xr.data[Bi(Xt)]=2;Xr.data[Bi(Xu)]=3;Xr.data[Bi(Xv)]=4;Xr.data[Bi(Xw)]=5;Xr.data[Bi(Xy)]=6;}
var IY=C();
function Or(b){return $rt_str(b);}
function Dd(){BW.call(this);this.dM=null;}
function YA(a){var b=new Dd();Gk(b,a);return b;}
function Gk(a,b){C3(a);a.dM=b;}
function DE(){var a=this;Dd.call(a);a.hk=0;a.du=0;a.M=null;a.bP=null;a.eF=null;}
function YB(a,b){var c=new DE();Fe(c,a,b);return c;}
function Fe(a,b,c){Gk(a,b);a.M=K();a.bP=BL(32);a.hk=c;Qo();a.eF=YC;}
function MA(a,b,c,d){var $$je;if(!IE(a))return;a:{try{a.dM.ce(b,c,d);break a;}catch($$e){$$je=DR($$e);if($$je instanceof ED){}else{throw $$e;}}a.du=1;}}
function IE(a){if(a.dM===null)a.du=1;return a.du?0:1;}
function Ew(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=SY(b,c,d-c|0);g=Dt(B8(16,BC(e.length,1024)));h=Pw(g);i=a.eF.h2();Fk();j=Yf;i=FH(i,j);j=Yf;k=J5(i,j);while(true){l=(G4(k,f,h,1)).cS();a.ce(g,0,CC(h));Ev(h);if(!l)break;}while(true){l=(Gd(k,h)).cS();a.ce(g,0,CC(h));Ev(h);if(!l)break;}}
function Pn(a,b){a.bP.data[0]=b;Ew(a,a.bP,0,1);}
function Sk(a,b){a.M.c(b);Df(a);}
function Ol(a,b){(a.M.c(b)).h(10);Df(a);}
function SV(a,b){(a.M.P(b)).h(10);Df(a);}
function OJ(a){a.hr(10);}
function Df(a){var b;b=a.M.e()<=a.bP.data.length?a.bP:BL(a.M.e());a.M.ed(0,a.M.e(),b,0);Ew(a,b,0,a.M.e());a.M.d4(0);}
function O(){var a=this;B.call(a);a.V=null;a.J=null;a.R=null;}
function YD(){var a=new O();BD(a);return a;}
function BD(a){E(a);}
function Kp(){O.call(this);this.ik=null;}
function We(a){var b=new Kp();Pq(b,a);return b;}
function Pq(a,b){var c,d;a.ik=b;BD(a);a.J=R(0.5,0.1,0.1);a.R=M(4.0,2.5,(-5.0));Bl();c=YE;d=K();Bx(X(d,D(83)),c);a.V=Bd(d);YE=YE+1|0;}
function Ks(){O.call(this);this.iQ=null;}
function VF(a){var b=new Ks();NR(b,a);return b;}
function NR(a,b){var c,d;a.iQ=b;BD(a);a.J=R(0.0,0.8,0.8);a.R=M((-10.0),12.0,(-7.5));Bl();c=YE;d=K();Bx(X(d,D(83)),c);a.V=Bd(d);YE=YE+1|0;}
function V(){var a=this;BE.call(a);a.S=0.0;a.K=null;}
function YF(){var a=new V();BG(a);return a;}
function BG(a){Fp(a);}
function Ml(a,b){return BA(Ca(b,a.K));}
function MB(a,b){var c,d,e,f;c=Ca(a.K,b.bl);d=By(c,b.Y);if(d<0.0)return null;e=C2(a.S,2.0)-(By(c,c)-C2(d,2.0));f=e<0.0?0.0:d-Fu(e);if(f===0.0)return null;return VZ(a,a,b,f);}
function Kt(){V.call(this);this.i4=null;}
function VA(a){var b=new Kt();SG(b,a);return b;}
function SG(a,b){var c,d;a.i4=b;BG(a);BB();a.k=YG;a.K=M(3.0,2.0,6.0);a.S=1.75;Bl();c=YH;d=K();Bx(X(d,D(84)),c);a.N=Bd(d);YH=YH+1|0;}
function Kx(){V.call(this);this.gL=null;}
function UM(a){var b=new Kx();LQ(b,a);return b;}
function LQ(a,b){var c,d;a.gL=b;BG(a);BB();a.k=YG;a.K=M((-4.0),5.0,2.0);a.S=2.0;Bl();c=YH;d=K();Bx(X(d,D(84)),c);a.N=Bd(d);YH=YH+1|0;}
function Kr(){O.call(this);this.gx=null;}
function Wn(a){var b=new Kr();LH(b,a);return b;}
function LH(a,b){var c,d;a.gx=b;BD(a);a.J=R(0.5,0.3,0.75);a.R=M((-2.0),5.0,0.0);Bl();c=YE;d=K();Bx(X(d,D(83)),c);a.V=Bd(d);YE=YE+1|0;}
function Ku(){V.call(this);this.hi=null;}
function Uf(a){var b=new Ku();Og(b,a);return b;}
function Og(a,b){var c,d;a.hi=b;BG(a);BB();a.k=YG;a.K=M((-5.0),5.0,(-6.0));a.S=4.0;Bl();c=YH;d=K();Bx(X(d,D(84)),c);a.N=Bd(d);YH=YH+1|0;}
function Km(){V.call(this);this.iB=null;}
function Vq(a){var b=new Km();RT(b,a);return b;}
function RT(a,b){var c,d;a.iB=b;BG(a);BB();a.k=YI;a.K=M(0.0,3.0,1.0);a.S=1.0;Bl();c=YH;d=K();Bx(X(d,D(84)),c);a.N=Bd(d);YH=YH+1|0;}
var Kj=C();
function Wq(){var a=new Kj();Tg(a);return a;}
function Tg(a){E(a);}
function SB(a,b){return JJ(a,b);}
function JJ(a,b){return MG(b);}
var Gt=C();
function Um(){var a=new Gt();Ph(a);return a;}
function Ph(a){E(a);}
function Lj(a,b){return IZ(a,b);}
function IZ(a,b){return Mc(b);}
var Ki=C();
function Vj(){var a=new Ki();OU(a);return a;}
function OU(a){E(a);}
function Mu(a,b){return Gv(a,b);}
function Gv(a,b){return MT(b);}
var Gq=C();
function Ul(){var a=new Gq();QP(a);return a;}
function QP(a){E(a);}
function Pr(a,b){return GG(a,b);}
function GG(a,b){return SC(b);}
function Kv(){V.call(this);this.hp=null;}
function T4(a){var b=new Kv();R8(b,a);return b;}
function R8(a,b){var c,d;a.hp=b;BG(a);BB();a.k=YG;a.K=M(0.0,1.0,0.0);a.S=0.5;Bl();c=YH;d=K();Bx(X(d,D(84)),c);a.N=Bd(d);YH=YH+1|0;}
var Kh=C();
function WP(){var a=new Kh();Tq(a);return a;}
function Tq(a){E(a);}
function On(a,b){return K4(a,b);}
function K4(a,b){return L6(b);}
function Kn(){V.call(this);this.h5=null;}
function UA(a){var b=new Kn();PC(b,a);return b;}
function PC(a,b){var c,d;a.h5=b;BG(a);BB();a.k=YI;a.K=M(4.0,3.0,1.0);a.S=1.5;Bl();c=YH;d=K();Bx(X(d,D(84)),c);a.N=Bd(d);YH=YH+1|0;}
var EN=C(0);
var BS=C(Cb);
function Dq(a){Fh(a);}
function Dr(){BS.call(this);this.f0=null;}
function YJ(a){var b=new Dr();H1(b,a);return b;}
function H1(a,b){Dq(a);a.f0=b;}
function OE(a){return a.f0;}
var ID=C(Dr);
function U1(a){var b=new ID();OK(b,a);return b;}
function OK(a,b){H1(a,b);}
function QT(a){return Wi(a.gC());}
var KX=C();
function Uz(){var a=new KX();Ru(a);return a;}
function Ru(a){E(a);}
function NB(a,b){return Ia(a,b);}
function Ia(a,b){return Mw(b);}
var KI=C();
function Wu(){var a=new KI();S6(a);return a;}
function S6(a){E(a);}
function Q$(a,b){return FY(a,b);}
function FY(a,b){return Pg(b);}
var KZ=C();
function VQ(){var a=new KZ();L7(a);return a;}
function L7(a){E(a);}
function Oh(a,b){return I4(a,b);}
function I4(a,b){return SU(b);}
var KH=C();
function Vc(){var a=new KH();O3(a);return a;}
function O3(a){E(a);}
function LL(a,b){return HR(a,b);}
function HR(a,b){return Mg(b);}
var K0=C();
function Ui(){var a=new K0();Px(a);return a;}
function Px(a){E(a);}
function R0(a,b){return H_(a,b);}
function H_(a,b){return RO(b);}
var Gs=C();
function VM(){var a=new Gs();Rw(a);return a;}
function Rw(a){E(a);}
function Lc(a,b){return HE(a,b);}
function HE(a,b){return QR(b);}
var KG=C();
function Wr(){var a=new KG();TL(a);return a;}
function TL(a){E(a);}
function P3(a,b){return Ho(a,b);}
function Ho(a,b){return N4(b);}
var KY=C();
function Ur(){var a=new KY();QF(a);return a;}
function QF(a){E(a);}
function QY(a,b){return F7(a,b);}
function F7(a,b){return Ld(b);}
var Kk=C();
function UJ(){var a=new Kk();Np(a);return a;}
function Np(a){E(a);}
function S2(a,b){return Ke(a,b);}
function Ke(a,b){return P7(b);}
var Gp=C();
function Vy(){var a=new Gp();LT(a);return a;}
function LT(a){E(a);}
function Pj(a,b){return GX(a,b);}
function GX(a,b){return P8(b);}
function FW(){C6.call(this);this.dk=null;}
function V0(){var a=new FW();Sa(a);return a;}
function Wy(a){var b=new FW();R1(b,a);return b;}
function Sa(a){GC(a);}
function R1(a,b){Kd(a,b);}
function P6(a){return a.dk;}
function SM(a,b){a.dk=b;}
function NV(a){return a.dk;}
function OQ(a,b){return b;}
function Oa(a){return a.i6();}
var HM=C();
function RB(b,c,d,e,f){var g,h;g=C_(e,f);if(!g){g=e;e=f;}else if(g>=0){c=c+0.5*(e-f|0);g=e;}else{b=b+0.5*(f-e|0);g=f;e=f;}h=RK(b,c,d.bp,g,e);return EZ(TZ(d,h),d,0);}
function EZ(b,c,d){var e,f;e=Hh(b,c);f=null;if((e.u()).x())f=(e.u()).t();if(f!==null)return Q9(f,c,d);Cj();return YK;}
function Hh(b,c){var d,e,f,g,h,i,j,k;d=UB();e=c.b5.data;f=e.length;g=0;while(g<f){h=e[g];i=h.ek(b);if(i!==null)d.b9(i);g=g+1|0;}d.gI(LI(U5()));j=U(B5,(d.eU()).data.length);k=0;while(true){e=j.data;if(k>=e.length)break;e[k]=(d.eU()).data[k];k=k+1|0;}i=Mb(j);return i;}
function L0(b,c){var d,e;d=Hh(b,c);e=null;if((d.u()).x())e=(d.u()).t();if(e!==null)return e.bV;return 0.0;}
function Q9(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=b.bC.Y;f=CR(Be(b.bV,b.bC.Y),b.bC.bl);g=b.E.fX(f);h=Ca(e,Be(2.0*By(g,e),g));i=b.E.k.bb;j=(i.f(f)).bo()*By(g,e);i=b.E.k.bb;j=j-Fu(1.0-C2((i.f(f)).bo(),2.0)*(1.0-C2(By(g,e),2.0)));i=Be(j,g);k=b.E.k.bb;k=Be((k.f(f)).bo(),e);l=Ca(i,k);Cj();m=YK;i=Ce(m,M1(b.E,f,g,h,c));if(d>=4)return i;n=Py(b.E,CR(f,Be(0.001,h)),h,c,d);o=Lx(b.E,CR(g,Be(0.001,l)),l,c,d);k=B3(1.0-b.E.k.bq,n);p=B3(b.E.k.bq,o);return Ce(i,Ce(k,p));}
function Py(b,c,d,e,f){return B3((b.k.bD.f(c)).bo(),EZ(Vl(c,d),e,f+1|0));}
function Lx(b,c,d,e,f){return B3((b.k.bb.f(c)).bo(),EZ(Wl(c,d),e,f+1|0));}
function M1(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;g=R(0.0,0.0,0.0);h=f.cd.data;i=h.length;j=0;while(j<i){k=h[j];l=Ca(k.R,c);m=BA(l);n=L0(Wp(c,m),f);o=n<=GJ(l)&&n!==0.0?0:1;if(o){p=By(m,d);q=p>0.0?B3(p,k.J):R(0.0,0.0,0.0);r=By(m,BA(e));s=r<=0.0?R(0.0,0.0,0.0):B3(C2(r,b.k.bL),k.J);g=Ce(g,Ce(EM(b.k.bN.f(c),q),EM(b.k.bA.f(c),s)));}j=j+1|0;}return g;}
function RK(b,c,d,e,f){return BA(CR(d.dr,CR(Be(TT(b,e),d.cT),Be(O7(c,f),d.cU))));}
function TT(b,c){var d;d=c;return (b-d/2.0)/(2.0*d);}
function O7(b,c){var d;d=c;return  -(b-d/2.0)/(2.0*d);}
function TQ(b){return b.bV;}
var D9=C(0);
var DZ=C(0);
function Jo(){var a=this;B.call(a);a.db=null;a.cm=null;}
function UU(a){var b=new Jo();P_(b,a);return b;}
function P_(a,b){var c;E(a);a.cm=b;c=a;b.classObject=c;}
function GL(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=UU(b);return c;}
function K8(a){return (((K()).c(D(85))).s(C7(a))).d();}
function Ni(a){return a.cm;}
function Tf(a){if(a.db===null)a.db=PI(a.cm);return a.db;}
function Lt(a){return GL(Su(a.cm));}
var KD=C(Bk);
function B9(){W.call(this);this.cJ=0.0;}
var YL=0.0;var YM=null;function IB(){IB=L(B9);NF();}
function Wh(a){var b=new B9();Eo(b,a);return b;}
function UK(a){var b=new B9();Ja(b,a);return b;}
function Eo(a,b){IB();B7(a);a.cJ=b;}
function Ja(a,b){IB();Eo(a,b);}
function KJ(b){IB();return Wh(b);}
function Mj(a,b){if(a===b)return 1;return b instanceof B9&&b.cJ===a.cJ?1:0;}
function NF(){YL=NaN;YM=F($rt_floatcls());}
var G2=C();
function MS(b,c){var d,e,f,g;d=b.data;e=BL(c);f=BC(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function R$(b,c){var d,e,f,g;d=b.data;e=HH((Di(b)).f$(),c);f=BC(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function PS(b,c){var d,e,f,g,h,i,j,k,l,m;d=b.data.length;if(!d)return;e=U(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data.length;if(h>=i)break;j=BC(i,h+f|0);k=h+(2*f|0)|0;l=BC(i,k);SJ(g,e,h,j,l,c);h=k;}f=f*2|0;m=g;g=e;e=m;}a:{if(g!==b){h=0;while(true){m=g.data;if(h>=m.length)break a;e.data[h]=m[h];h=h+1|0;}}}}
function SJ(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=d;i=e;a:{b:{while(d!=e){if(i==f)break b;j=b.data;k=j[d];l=j[i];if(g.fB(k,l)>0){j=c.data;m=h+1|0;j[h]=l;i=i+1|0;}else{j=c.data;m=h+1|0;j[h]=k;d=d+1|0;}h=m;}while(true){if(i>=f)break a;n=c.data;j=b.data;m=h+1|0;o=i+1|0;n[h]=j[i];h=m;i=o;}}while(true){if(d>=e)break a;n=c.data;j=b.data;o=h+1|0;m=d+1|0;n[h]=j[d];h=o;d=m;}}}
function Mn(b,c){return Nk(b,0,b.data.length,c);}
function Nk(b,c,d,e){var f,g,h,i,j;f=C_(c,d);if(f>0)H(Hv());if(!f)return (-1);g=d-1|0;while(true){h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>g)return ( -i|0)-2|0;}else{g=i-1|0;if(g<c)return ( -i|0)-1|0;}}return i;}
function Mb(b){return Ug(b);}
var Dj=C();
var YN=null;var YO=null;function Hw(){var b;if(YN===null){b=new DE;SA();Fe(b,XU,0);YN=b;}return YN;}
function Pu(){var b;if(YO===null){b=new DE;Lf();Fe(b,YP,0);YO=b;}return YO;}
function IF(){return Long_fromNumber(new Date().getTime());}
var Hd=C();
function HI(b){var c,d,e;c=VJ(b.p());d=b.u();while(d.x()){e=d.t();if(Bj(e,BZ))c.b9(EU(e));else if(!Bj(e,Cd))c.b9(e);else c.b9(HI(e));}return c;}
function EU(b){var c,d,e,f,g,h;c=UF(b.p());d=(b.fU()).u();while(d.x()){e=d.t();f=e.bH();if(Bj(f,BZ)){g=f;c.bg(e.bk(),EU(g));}else if(!Bj(f,Cd))c.bg(e.bk(),f);else{h=f;c.bg(e.bk(),HI(h));}}return c;}
var Ha=C();
function S_(b){if(!(b instanceof BJ))return null;return b;}
function Lp(b){if(b===null)return null;if(b.eb(D(82)))return CI(1);if(!b.eb(D(81)))return null;return CI(0);}
function TK(b){var c;c=S_(b);if(c===null&&b!==null)return Lp(b.d());return c;}
var Ez=C(0);
var JH=C(Co);
function WF(a){var b=new JH();RD(b,a);return b;}
function RD(a,b){D5(a,b);}
function Sg(a){Fq(a);return a.di.W;}
var KF=C();
function TU(){var a=new KF();OT(a);return a;}
function OT(a){E(a);}
function MF(a,b){return JE(a,b);}
function JE(a,b){return TB(b);}
var Iq=C();
function WA(){var a=new Iq();Qd(a);return a;}
function Qd(a){E(a);}
var Fs=C(0);
var FU=C(DJ);
function VV(a,b){var c=new FU();Oc(c,a,b);return c;}
function Oc(a,b,c){Gz(a,b,c);}
function Sf(a,b){var c,d,e,f,g;c=Dt(b);d=0;while(d<b){e=c.data;f=a.fD;g=a.c0;a.c0=g+1|0;e[d]=f[g];d=d+1|0;}return c;}
var D1=C();
var YQ=null;function LB(){LB=L(D1);S7();}
function HT(b){var c,d;LB();c=YQ.cy(b);if(c===null){d=YQ;c=Uy();d.bg(b,c);}return c;}
function E4(b,c,d){var e,f,g,h,i,j;LB();e=HT(b);f=JT(e,c,d);g=J0(f);if(g!==null)return g;e=f.eR;DM();if(e!==X2){h=b.ff();i=K();X(X(i,D(86)),h);j=Bd(i);if(e===X3)H(VN(j));e=Fv();Gi();e.iK(Yr,j);}return null;}
function S7(){YQ=TE();}
var Cd=C(0);
function Pd(a,b){Hg(a,b);}
function BM(){Cb.call(this);this.ck=0;}
function DK(a){Fh(a);}
function P5(a){return Ut(a);}
var CF=C(0);
var DF=C(BM);
function HU(a){DK(a);}
var Is=C(DF);
function Wv(){var a=new Is();Mt(a);return a;}
function Mt(a){HU(a);}
var Ip=C();
function UE(){var a=new Ip();RH(a);return a;}
function RH(a){E(a);}
var BN=C();
var YR=null;var YS=null;var YT=null;var YU=null;function Bh(){Bh=L(BN);Ms();}
function El(b){Bh();return (b&64512)!=55296?0:1;}
function Ei(b){Bh();return (b&64512)!=56320?0:1;}
function Ka(b){Bh();return !El(b)&&!Ei(b)?0:1;}
function JI(b,c){Bh();return ((b&1023)<<10|c&1023)+65536|0;}
function FE(b){var c;Bh();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function Fc(b){Bh();return (56320|b&1023)&65535;}
function E9(b){Bh();return F2(b)&65535;}
function F2(b){Bh();return (Pi(b)).toLowerCase().charCodeAt(0);}
function FK(b){Bh();return HP(b);}
function HP(b){var c,d,e,f,g,h,i,j;Bh();c=F8();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=C_(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function Cw(b,c){Bh();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function F8(){Bh();if(YS===null)YS=So(((FX()).value!==null?$rt_str((FX()).value):null));return YS;}
function FX(){Bh();if(YU===null)YU=JY();return YU;}
function Ms(){YR=F($rt_charcls());YT=U(BN,128);}
function JY(){return {"value":"{?*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%slG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%sTEG%%%%%%%%%%%%%%%%%%&5G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%VR#G%%%%%%%%%%%%%"
+"%%%%%"};}
var DC=C(BS);
function JF(a){Dq(a);}
var It=C(DC);
function Ws(){var a=new It();L8(a);return a;}
function L8(a){JF(a);}
var Ir=C(Dm);
function Vg(){var a=new Ir();K$(a);return a;}
function K$(a){Ju(a);}
var CG=C(0);
var DV=C();
function Jt(a,b){E(a);a.hI(b);}
function MV(a,b){return (a.fl()).cO(b);}
function P0(a){return (a.fl()).p();}
var GK=C();
function TR(b){return b;}
function Ix(){O.call(this);this.i3=null;}
function UY(a){var b=new Ix();Mx(b,a);return b;}
function Mx(a,b){a.i3=b;BD(a);a.J=R(0.75,0.75,0.75);a.R=M((-4.0),3.0,4.0);a.V=D(87);}
var Da=C(Cq);
function FS(a,b,c,d){E5(a,b);a.w=c;a.T=d;}
function SY(b,c,d){return UQ(0,b.data.length,b,c,c+d|0,0);}
function Mz(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)H(Ck((((((K()).c(D(88))).s(g)).c(D(57))).s(f)).d()));if(BT(a)<d)H(Wd());if(d<0)H(Ck(((((K()).c(D(58))).s(d)).c(D(59))).d()));h=a.w;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.iG(h);i=i+1|0;c=g;h=f;}a.w=a.w+d|0;return a;}}e=b.data;H(Ck(((((((K()).c(D(60))).s(c)).c(D(36))).s(e.length)).c(D(61))).d()));}
function Lb(a,b){Jm(a,b);return a;}
var Dv=C(Da);
function H4(a,b,c,d){FS(a,b,c,d);}
function J$(){var a=this;Dv.call(a);a.iR=0;a.e_=0;a.f8=null;}
function UQ(a,b,c,d,e,f){var g=new J$();Tz(g,a,b,c,d,e,f);return g;}
function Tz(a,b,c,d,e,f,g){H4(a,c,e,f);a.e_=b;a.iR=g;a.f8=d;}
function M4(a,b){return a.f8.data[b+a.e_|0];}
function IA(){O.call(this);this.h6=null;}
function WG(a){var b=new IA();L_(b,a);return b;}
function L_(a,b){a.h6=b;BD(a);a.J=R(0.75,0.75,0.75);a.R=M(4.0,3.0,(-4.0));a.V=D(87);}
function Iy(){O.call(this);this.g4=null;}
function Wz(a){var b=new Iy();PZ(b,a);return b;}
function PZ(a,b){a.g4=b;BD(a);a.J=R(0.75,0.75,0.75);a.R=M((-4.0),3.0,(-4.0));a.V=D(87);}
var I6=C();
function SH(b){$rt_putStderr(b);}
function P4(b){$rt_putStdout(b);}
function Iz(){O.call(this);this.hB=null;}
function Vf(a){var b=new Iz();QB(b,a);return b;}
function QB(a,b){a.hB=b;BD(a);a.J=R(0.75,0.75,0.75);a.R=M(4.0,3.0,4.0);a.V=D(87);}
function Iv(){V.call(this);this.gd=null;}
function WO(a){var b=new Iv();QX(b,a);return b;}
function QX(a,b){a.gd=b;BG(a);BB();a.k=YG;a.K=M(0.0,1.0,0.0);a.S=1.0;a.N=D(89);}
var E6=C(0);
function KK(){B.call(this);this.e7=null;}
function Vs(a){var b=new KK();PB(b,a);return b;}
function PB(a,b){E(a);a.e7=b;}
function QM(a,b){KT(a,b);}
function KT(a,b){Qq(a.e7,b);}
function Q_(a,b){a.ie(b);}
var I7=C();
function Nv(b){return b?1:0;}
var F_=C(BK);
function U8(){var a=new F_();Qg(a);return a;}
function Qg(a){var b,c;Du(a);b=U(BE,7);c=b.data;Bl();c[0]=YV;c[1]=Vq(a);c[2]=UA(a);c[3]=T4(a);c[4]=UM(a);c[5]=VA(a);c[6]=Uf(a);a.b5=b;a.cd=CT(O,[Wn(a),VF(a),We(a)]);a.bp=IH(M(0.0,1.0,0.0),M(5.0,5.0,5.0));}
var F$=C(BK);
function WS(){var a=new F$();Od(a);return a;}
function Od(a){var b,c;Du(a);b=U(BE,2);c=b.data;c[0]=WO(a);Bl();c[1]=YV;a.b5=b;a.cd=CT(O,[Vf(a),WG(a),UY(a),Wz(a)]);a.bp=FM(M(0.0,1.0,0.0),M(3.0,3.0,3.0),600.0,450.0);}
function B4(){W.call(this);this.U=0.0;}
var YW=0.0;var YX=null;function E$(){E$=L(B4);Oy();}
function OP(a){var b=new B4();JC(b,a);return b;}
function JC(a,b){E$();B7(a);a.U=b;}
function Tt(a){return a.U;}
function OB(a){return a.U|0;}
function Bq(b){E$();return OP(b);}
function Gg(b){E$();return ((K()).hK(b)).d();}
function MD(a){return Gg(a.U);}
function TN(a,b){if(a===b)return 1;return b instanceof B4&&b.U===a.U?1:0;}
function KR(b,c){E$();return C_(b,c);}
function Mq(a){return isNaN(a.U)?1:0;}
function N8(a){return !isFinite(a.U)?1:0;}
function Oy(){YW=NaN;YX=F($rt_doublecls());}
var F9=C(BK);
function U$(){var a=new F9();RZ(a);return a;}
function RZ(a){var b,c;Du(a);b=U(BE,1);c=b.data;Bl();c[0]=YV;a.b5=b;b=U(O,1);b.data[0]=VR(a);a.cd=b;a.bp=FM(M(0.0,1.0,0.0),M(3.0,3.0,3.0),600.0,450.0);}
function DP(){var a=this;BE.call(a);a.eC=0.0;a.cn=null;}
function YY(){var a=new DP();FR(a);return a;}
function FR(a){Fp(a);}
function PJ(a,b){return a.cn;}
function RW(a,b){var c,d;c=By(a.cn,b.Y);if(c>0.0)return null;d=(a.eC+By(a.cn,b.bl))/ -c;return T6(a,a,b,d);}
var Gb=C(DP);
function U6(){var a=new Gb();RV(a);return a;}
function RV(a){FR(a);BB();a.k=YZ;a.cn=M(0.0,1.0,0.0);a.eC=0.0;a.N=D(90);}
var Ga=C(V);
function WE(){var a=new Ga();Oz(a);return a;}
function Oz(a){BG(a);BB();a.k=YZ;a.K=M(0.0,(-10000.0),0.0);a.S=1.0E-7;a.N=D(90);}
var IO=C();
function OD(b){return b!==null?b.d():null;}
function S5(b){return b!==null?b.e():0;}
function NQ(b){return S5(b)?0:1;}
function JA(){var a=this;Bu.call(a);a.et=null;a.fF=null;}
function Wl(a,b){var c=new JA();Tm(c,a,b);return c;}
function Tm(a,b,c){a.et=b;a.fF=c;CQ(a);a.bl=a.et;a.Y=a.fF;}
function Jx(){var a=this;Bu.call(a);a.eG=null;a.eI=null;}
function Vl(a,b){var c=new Jx();TI(c,a,b);return c;}
function TI(a,b,c){a.eG=b;a.eI=c;CQ(a);a.bl=a.eG;a.Y=a.eI;}
function Ky(){BS.call(this);this.da=null;}
function Uj(a){var b=new Ky();O0(b,a);return b;}
function O0(a,b){a.da=b;Dq(a);}
function R_(a){return a.da.p();}
function RX(a){return WF(a.da);}
function G7(){var a=this;BM.call(a);a.n=null;a.Q=0;}
function UB(){var a=new G7();Qv(a);return a;}
function VJ(a){var b=new G7();D0(b,a);return b;}
function V8(a){var b=new G7();OL(b,a);return b;}
function Qv(a){D0(a,10);}
function D0(a,b){DK(a);a.n=U(B,b);}
function OL(a,b){var c,d;D0(a,b.p());c=b.u();d=0;while(d<a.n.data.length){a.n.data[d]=c.t();d=d+1|0;}a.Q=a.n.data.length;}
function Mr(a,b){var c;if(a.n.data.length<b){c=a.n.data.length>=1073741823?2147483647:B8(b,B8(a.n.data.length*2|0,5));a.n=R$(a.n,c);}}
function OR(a,b){D3(a,b);return a.n.data[b];}
function Ng(a){return a.Q;}
function LY(a,b,c){var d;D3(a,b);d=a.n.data[b];a.n.data[b]=c;return d;}
function Rq(a,b){var c,d;a.bx(a.Q+1|0);c=a.n.data;d=a.Q;a.Q=d+1|0;c[d]=b;a.ck=a.ck+1|0;return 1;}
function D3(a,b){if(b>=0&&b<a.Q)return;H(GR());}
function Ns(a){var b,c,d;if(!a.Q)return D(91);b=a.Q-1|0;c=T7(a.Q*16|0);c.h(91);d=0;while(d<b){(c.P(a.n.data[d]===a?D(92):a.n.data[d])).c(D(34));d=d+1|0;}c.P(a.n.data[b]===a?D(92):a.n.data[b]);return (c.h(93)).d();}
function Jz(){var a=this;Bu.call(a);a.fS=null;a.d8=null;}
function Wp(a,b){var c=new Jz();TF(c,a,b);return c;}
function TF(a,b,c){a.fS=b;a.d8=c;CQ(a);a.bl=a.fS;a.Y=a.d8;}
function Bm(){var a=this;B.call(a);a.bA=null;a.bD=null;a.bN=null;a.bb=null;a.bq=0.0;a.bL=0.0;a.cq=null;}
function Y0(){var a=new Bm();CU(a);return a;}
function CU(a){E(a);}
var JP=C(Bm);
function Ud(){var a=new JP();Of(a);return a;}
function Of(a){CU(a);a.cq=D(90);a.bb=Ui();a.bD=Ur();a.bN=Uz();a.bA=VQ();a.bL=15.0;a.bq=0.0;}
function SU(b){return R(0.5,0.5,0.5);}
function Mw(b){return R(0.25,0.25,0.25);}
function Ld(b){return Bq(0.65);}
function RO(b){return Bq(0.0);}
var JM=C(Bm);
function TW(){var a=new JM();P2(a);return a;}
function P2(a){CU(a);a.cq=D(93);a.bb=Wu();a.bD=Vc();a.bN=Wr();a.bA=TU();a.bL=0.0;a.bq=0.1;}
function TB(b){return R(0.25,0.25,0.25);}
function N4(b){return R(0.25,0.25,0.25);}
function Mg(b){return Bq(0.25);}
function Pg(b){return Bq(0.0);}
var Jc=C(Bm);
function VG(){var a=new Jc();Lr(a);return a;}
function Lr(a){CU(a);a.cq=D(94);a.bb=Vy();a.bD=VM();a.bN=Ul();a.bA=Um();a.bL=100.0;a.bq=0.95;}
function Mc(b){return R(0.5,0.5,0.5);}
function SC(b){return R(0.0,0.0,0.0);}
function QR(b){return Bq(0.0);}
function P8(b){return Bq(1.0);}
var Em=C(0);
var JN=C(Bm);
function V1(){var a=new JN();Sl(a);return a;}
function Sl(a){CU(a);a.cq=D(95);a.bb=UJ();a.bD=Wq();a.bN=Vj();a.bA=WP();a.bL=25.0;a.bq=0.1;}
function L6(b){return R(0.75,0.75,0.75);}
function MT(b){return R(1.0,1.0,1.0);}
function MG(b){return Bq(1.0);}
function P7(b){return Bq(0.0);}
function BP(){var a=this;B.call(a);a.i=null;a.b3=0;}
var Y1=null;function KU(){KU=L(BP);Q0();}
function T1(a){var b=new BP();Gw(b,a);return b;}
function Ok(a,b,c){var d=new BP();K5(d,a,b,c);return d;}
function Gw(a,b){var c,d,e;KU();c=b.data;E(a);d=c.length;a.i=BL(d);e=0;while(e<d){a.i.data[e]=c[e];e=e+1|0;}}
function K5(a,b,c,d){var e,f;KU();E(a);a.i=BL(d);e=0;while(e<d){f=b.data;a.i.data[e]=f[e+c|0];e=e+1|0;}}
function M7(a,b){if(b>=0&&b<a.i.data.length)return a.i.data[b];H(Ow());}
function QA(a){return a.i.data.length;}
function SE(a){return a.i.data.length?0:1;}
function Rm(a,b){var c,d,e,f,g;if(a===b)return 0;c=BC(a.e(),b.e());d=0;while(true){if(d>=c)return a.e()-b.e()|0;e=a.m(d);f=b.m(d);g=e-f|0;if(g)break;d=d+1|0;}return g;}
function PQ(a,b){var c,d,e,f;if(a===b)return 1;if(b.e()>a.e())return 0;c=0;d=a.e()-b.e()|0;while(d<a.e()){e=a.m(d);f=c+1|0;if(e!=b.m(c))return 0;d=d+1|0;c=f;}return 1;}
function MJ(a,b,c){var d,e,f,g;d=B8(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.i.data.length)return (-1);if(a.i.data[d]==e)break;d=d+1|0;}return d;}f=FE(b);g=Fc(b);while(true){if(d>=(a.i.data.length-1|0))return (-1);if(a.i.data[d]==f&&a.i.data[d+1|0]==g)break;d=d+1|0;}return d;}
function PP(a,b){return a.d6(b,0);}
function Na(a,b,c){var d,e,f,g,h,i;d=BC(c,a.e()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.i.data[d]==e)break;d=d+(-1)|0;}return d;}f=FE(b);g=Fc(b);while(true){if(d<1)return (-1);if(a.i.data[d]==g){h=a.i.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function RY(a,b){return a.iP(b,a.e()-1|0);}
function LS(a,b,c){if(b>c)H(GR());return Ok(a.i,b,c-b|0);}
function R9(a,b){return a.bB(b,a.e());}
function N1(a){return a;}
function SO(a){var b,c,d;b=BL(a.i.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.i.data[c];c=c+1|0;}return b;}
function Ib(b){KU();return b===null?D(5):b.d();}
function Rn(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BP))return 0;c=b;if(c.e()!=a.e())return 0;d=0;while(d<c.e()){if(a.m(d)!=c.m(d))return 0;d=d+1|0;}return 1;}
function RE(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.e()!=b.e())return 0;c=0;while(c<a.e()){if(E9(a.m(c))!=E9(b.m(c)))return 0;c=c+1|0;}return 1;}
function MX(a){var b,c,d,e;a:{if(!a.b3){b=a.i.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.b3=(31*a.b3|0)+e|0;d=d+1|0;}}}return a.b3;}
function Qn(a,b){return a.hP(b);}
function Q0(){Y1=V7();}
var Fx=C(BW);
var YP=null;function Lf(){Lf=L(Fx);TP();}
function U2(){var a=new Fx();Hx(a);return a;}
function Hx(a){Lf();C3(a);}
function TC(a,b){SH(b);}
function TP(){YP=U2();}
var K6=C(Q);
function V2(){var a=new K6();Nn(a);return a;}
function Nn(a){Bw(a);}
function DU(){var a=this;C4.call(a);a.e$=null;a.el=null;}
function HO(a,b,c,d){Jv(a,b,c,d);a.e$=BL(512);a.el=Dt(512);}
function Nc(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.e$;e=0;f=0;g=a.el;a:{while(true){if((e+32|0)>f&&B6(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=BC(BT(b)+j|0,i.length);b.iz(d,j,f-j|0);e=0;}if(!B6(c)){if(!B6(b)&&e>=f){Bo();k=Yi;}else{Bo();k=Yh;}break a;}i=g.data;l=0;m=BC(BT(c),i.length);n=UD(b,c);k=a.gJ(d,e,f,g,l,m,n);e=n.e1;j=n.fG;if(k===null){if(!B6(b)&&e>=f){Bo();k=Yi;}else if(!B6(c)&&e>=f){Bo();k=Yh;}}c.e4(g,0,j);if(k!==null)break;}}b.er(CC(b)-(f-e|0)|0);return k;}
var Ig=C(DU);
function Vt(a){var b=new Ig();PR(b,a);return b;}
function PR(a,b){HO(a,b,2.0,4.0);}
function Tj(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.dD(2))break a;Bo();i=Yh;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!Ka(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.dD(3))break a;Bo();i=Yh;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if(!El(l))
{i=Dh(1);break a;}if(j>=d){if(h.ib())break a;Bo();i=Yi;break a;}n=j+1|0;p=k[j];if(!Ei(p)){j=n+(-2)|0;i=Dh(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.dD(4))break a;Bo();i=Yh;break a;}k=e.data;q=JI(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.iL(j);h.gu(f);return i;}
var Es=C(0);
function GV(){B.call(this);this.fL=null;}
function U3(a){var b=new GV();K_(b,a);return b;}
function K_(a,b){E(a);a.fL=b;}
function MI(a,b,c){Qt(a.fL,b,c);}
function RF(a,b,c){a.iA(b,c);}
function GU(){B.call(this);this.eV=null;}
function VT(a){var b=new GU();Pp(b,a);return b;}
function Pp(a,b){E(a);a.eV=b;}
function TG(a,b){K2(a.eV,b);}
function Pe(a,b){a.ij(b);}
var D_=C(0);
function GT(){B.call(this);this.eh=null;}
function Uu(a){var b=new GT();O2(b,a);return b;}
function O2(a,b){E(a);a.eh=b;}
function NT(a,b){PD(a.eh,b);}
function ON(a,b){a.dq(b);}
var IP=C();
function WH(){var a=new IP();Qm(a);return a;}
function Qm(a){E(a);}
var Bv=C();
var YH=0;var YE=0;var YV=null;var Y2=null;var Y3=null;var Y4=null;var Y5=null;var Y6=null;function Bl(){Bl=L(Bv);PA();}
function PA(){var b,c;YH=0;YE=0;b=U(Bm,4);c=b.data;BB();c[0]=Y7;c[1]=YZ;c[2]=YG;c[3]=YI;Y8=b;YV=U6();Y5=WE();Y2=U8();Y3=WS();Y4=U$();b=U(BK,1);b.data[0]=Y2;Y6=b;}
var IQ=C();
function Vd(){var a=new IQ();Pl(a);return a;}
function Pl(a){E(a);}
function OO(a,b,c){return J1(b,c);}
var Eu=C(Cn);
function WI(){var a=new Eu();MO(a);return a;}
function C8(a){var b=new Eu();Ty(b,a);return b;}
function MO(a){EC(a);}
function Ty(a,b){K3(a,b);}
function G6(){O.call(this);this.hO=null;}
function VR(a){var b=new G6();Oo(b,a);return b;}
function Oo(a,b){a.hO=b;BD(a);a.J=R(1.0,1.0,1.0);a.R=M(0.0,1.0,0.0);a.V=D(87);}
var Fy=C(Db);
var YC=null;function Qo(){Qo=L(Fy);PV();}
function V5(){var a=new Fy();Kb(a);return a;}
function Kb(a){Qo();HK(a,D(96),U(BP,0));}
function R4(a){return Vt(a);}
function PV(){YC=V5();}
var CB=C();
var Y9=0;var Y$=0;var Y_=null;function SQ(b,c){var d;d=3*b|0;if(c!==null&&c.data.length==d)return c;return Dt(d);}
function MW(b,c,d,e){var f,g,h,i,j,k,l;Y9=b;Y$=c;Bl();Y_=Y6.data[d];f=e*0.005;g=0.55+f*6.0*2.0*3.141592653589793;h=1.55;i=2.55;j=f-0.2;if(j>0.0){h=h+20.0*JU(1.0,j);i=i+20.0*Jb(JU(1.0,j)*3.141592653589793/2.0);}k=i*ME(g);l=i*Jb(g);Y_.bp=IH(M(0.0,1.0,0.0),M(k,h,l));}
function Rg(b,c){var d,e;d=0;e=0;while(e<Y9){d=Mh(e,b,c,d);e=e+1|0;}}
function Mh(b,c,d,e){var f,g,h,i;f=d.data;g=RB(b,c,Y_,Y9,Y$);h=e+1|0;f[e]=(g.cN(g.bh)*255.0+(-128.0)|0)<<24>>24;i=h+1|0;f[h]=(g.cN(g.be)*255.0+(-128.0)|0)<<24>>24;h=i+1|0;f[i]=(g.cN(g.bf)*255.0+(-128.0)|0)<<24>>24;return h;}
function E8(){var a=this;B.call(a);a.bh=0.0;a.be=0.0;a.bf=0.0;}
var YK=null;function Cj(){Cj=L(E8);PY();}
function Ej(a,b,c){var d=new E8();Ic(d,a,b,c);return d;}
function Ic(a,b,c,d){Cj();E(a);a.bh=b;a.be=c;a.bf=d;}
function R(b,c,d){Cj();return Ej(b,c,d);}
function B3(b,c){Cj();return Ej(b*c.bh,b*c.be,b*c.bf);}
function EM(b,c){Cj();return Ej(b.bh*c.bh,b.be*c.be,b.bf*c.bf);}
function Ce(b,c){Cj();return Ej(b.bh+c.bh,b.be+c.be,b.bf+c.bf);}
function Sz(a,b){if(b<0.0)b=0.0;else if(b>1.0)b=1.0;return b;}
function PY(){YK=R(0.0,0.0,0.0);}
var Eb=C(Bz);
function No(){var a=new Eb();PT(a);return a;}
function VN(a){var b=new Eb();G$(b,a);return b;}
function PT(a){Dn(a);}
function G$(a,b){D2(a,b);}
function HW(){var a=this;B.call(a);a.F=null;a.e6=null;a.ei=null;a.ea=null;a.dQ=null;a.f5=null;}
function T0(a){var b=new HW();LD(b,a);return b;}
function LD(a,b){var c;E(a);a.F=b;c=b.exports.memory.buffer;a.e6=new Int8Array(c);a.ei=new Int16Array(c);a.ea=new Int32Array(c);a.dQ=new Float32Array(c);a.f5=new Float64Array(c);}
function Mp(a,b){return VV(a,b);}
function Nj(a,b,c){return Nd(HL(a,b,c));}
function HL(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=c.data;switch(d.length){case 0:return a.F.exports[$rt_ustr(b)]();case 1:e=a.F;f=I(d[0]);return e.exports[$rt_ustr(b)](f);case 2:e=a.F;f=I(d[0]);g=I(d[1]);return e.exports[$rt_ustr(b)](f,g);case 3:e=a.F;f=I(d[0]);g=I(d[1]);h=I(d[2]);return e.exports[$rt_ustr(b)](f,g,h);case 4:e=a.F;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);return e.exports[$rt_ustr(b)](f,g,h,i);case 5:e=a.F;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);return e.exports[$rt_ustr(b)](f,g,h,i,j);case 6:e
=a.F;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k);case 7:e=a.F;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);l=I(d[6]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l);case 8:e=a.F;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);l=I(d[6]);m=I(d[7]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l,m);case 9:e=a.F;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);l=I(d[6]);m=I(d[7]);n=I(d[8]);return e.exports[$rt_ustr(b)](f,g,
h,i,j,k,l,m,n);default:}return null;}
function I(b){return Rv(b);}
var F3=C(Q);
function UN(){var a=new F3();Ou(a);return a;}
function Ou(a){Bw(a);}
function B5(){var a=this;B.call(a);a.E=null;a.bV=0.0;a.bC=null;}
function Za(){var a=new B5();E2(a);return a;}
function E2(a){E(a);}
function Ih(){var a=this;B5.call(a);a.en=null;a.ee=null;a.fk=0.0;a.id=null;}
function T6(a,b,c,d){var e=new Ih();TD(e,a,b,c,d);return e;}
function TD(a,b,c,d,e){a.id=b;a.en=c;a.ee=d;a.fk=e;E2(a);a.E=a.en;a.bC=a.ee;a.bV=a.fk;}
var HN=C();
function GI(){var b;b=VS();DM();return E4(F(CM),b,X2);}
function Ne(){var b;b=GI();return b!==null&&b.hN()?1:0;}
function NH(b,c){return (GI()).hq(b,c);}
function SP(){return Gy(F(CM));}
var J6=C();
function Jb(b){return Math.sin(b);}
function ME(b){return Math.cos(b);}
function Fu(b){return Math.sqrt(b);}
function Rh(b){return Math.floor(b);}
function C2(b,c){return Math.pow(b,c);}
function BC(b,c){if(b<c)c=b;return c;}
function B8(b,c){if(b>c)c=b;return c;}
function JU(b,c){if(b<c)c=b;return c;}
function Ss(b){if(b<=0.0)b= -b;return b;}
function Eh(){W.call(this);this.hW=0;}
var Zb=null;function RQ(){RQ=L(Eh);Me();}
function WM(a){var b=new Eh();IL(b,a);return b;}
function IL(a,b){RQ();B7(a);a.hW=b;}
function KA(b){RQ();return WM(b);}
function Me(){Zb=F($rt_bytecls());}
function Gn(){var a=this;B.call(a);a.eP=null;a.eQ=null;}
function UZ(a,b){var c=new Gn();Sn(c,a,b);return c;}
function Sn(a,b,c){E(a);a.eP=b;a.eQ=c;}
function OW(a,b){F4(a,b);}
function F4(a,b){OX(a.eP,a.eQ,b);}
var FO=C();
function UX(){var a=new FO();Rz(a);return a;}
function Rz(a){E(a);}
function Qi(a){return HJ(a);}
function HJ(a){return Pc();}
function Fa(){var a=this;B.call(a);a.g1=null;a.gc=null;}
var Zc=null;function EI(){EI=L(Fa);M6();}
function VW(a){var b=new Fa();GA(b,a);return b;}
function GA(a,b){EI();E(a);a.g1=b;}
function Fv(){EI();return C$(D(97));}
function C$(b){var c,d,e;EI();c=Zc.cy(b);if(c===null){c=VW(b);d=b.iD(46);if(d>=0){e=b.bB(0,d);c.gc=C$(e);}else if(!b.b_())c.gc=C$(D(98));Zc.bg(b,c);}return c;}
function L4(a,b){var c;c=IR(a,b.cG(),b.ge());if(C0(b.fz())>=C0(Ya))Jf($rt_ustr(c));else if(C0(b.fz())<C0(Yr))FT($rt_ustr(c));else I0($rt_ustr(c));}
function IR(a,b,c){var d,e,f,g,h,i,j;if(c===null)return b;d=K();e=0;a:{while(true){if(e>=b.e())break a;f=b.d6(123,e);if(f<0)break a;g=f+1|0;h=Hf(g,b);if(h<0)break;if(b.m(h)!=125){d.fg(b,e,h);e=h;continue;}i=c.data;j=ES(b.bB(g,h));if(j>=i.length){d.fg(b,e,h);e=h;continue;}d.P(i[j]);e=h+1|0;}}return d.d();}
function Hf(b,c){var d,e;EI();while(true){if(b>=c.e())return (-1);d=b+1|0;e=c.m(b);if(e<=48)break;if(e>=57)break;b=d;}return d;}
function R2(a,b,c){a.ec(Se(b,c));}
function O5(a,b,c,d){var e;e=Se(b,c);e.i5(d);a.ec(e);}
function M6(){Zc=TE();}
function FT(b){if(console){console.info(b);}}
function I0(b){if(console){console.warn(b);}}
function Jf(b){if(console){console.error(b);}}
function D4(){var a=this;B.call(a);a.fo=null;a.eY=null;a.gz=BF;a.g0=null;a.iT=BF;a.hg=BF;a.gw=null;}
var Zd=BF;function Se(a,b){var c=new D4();St(c,a,b);return c;}
function St(a,b,c){var d;E(a);a.fo=b;a.eY=c;a.gz=IF();d=Zd;Zd=T(d,G(1));a.iT=d;a.hg=(FN()).g2();}
function N5(a){return a.fo;}
function OY(a){return a.eY;}
function Oq(a){return a.g0;}
function N6(a,b){a.gw=b;}
function G3(){var a=this;B.call(a);a.dX=null;a.cj=null;}
function T$(a){var b=new G3();MZ(b,a);return b;}
function MZ(a,b){E(a);a.cj=OF();a.dX=b;}
function Qh(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;d=EE();e=HV();f=c.length;g=0;while(g<f){h=c[g];i=e.hd(h.hG());if(i===null){j=h.hG();i=HV();e.ii(j,i);}k=U3(h);(i.bn())[$rt_ustr(h.jU())]=Cz(k,"apply");g=g+1|0;}j=a.dX;l=e.bn();m=Uu(d);n=VT(a);Ls(j,l,Cz(m,"handle"),Cz(n,"handle"));return d;}
function K2(a,b){if(b!=10)a.cj.gs($rt_str(String.fromCharCode(b)));else{(Hw()).eZ(a.cj.d());a.cj=OF();}}
function PD(b,c){b.cK(T0(c));}
function Qt(b,c,d){(b.kI()).jf(c,d);}
function Ls(b,c,d,e){(WebAssembly.instantiate(b,Object.assign(c,{teavm:{currentTimeMillis:function(){return (new Date()).getTime();},isnan:isNaN,teavm_getNaN:function(){return NaN;},isinf:function(n){return !isFinite(n);},isfinite:isFinite,putwchar:e,towlower:function(code){return ((String.fromCharCode(code)).toLowerCase()).charCodeAt(0);},towupper:function(code){return ((String.fromCharCode(code)).toUpperCase()).charCodeAt(0);},getNativeOffset:function(instant){return (new Date(instant)).getTimezoneOffset();},
logString:console.log,logInt:console.log,logOutOfMemory:function(){console.log("Out of memory");}},teavmMath:{sqrt:Math.sqrt,pow:Math.pow,sin:Math.sin,cos:Math.cos}}))).then(function(instance){return d(instance);});}
var B_=C();
var Y8=null;var Y7=null;var YZ=null;var YG=null;var YI=null;function BB(){BB=L(B_);Nq();}
function Nq(){Y7=TW();YZ=Ud();YG=V1();YI=VG();}
function H0(){B.call(this);this.fH=null;}
function UL(a){var b=new H0();M5(b,a);return b;}
function M5(a,b){E(a);a.fH=b;}
function P$(a,b){Gr(a,b);}
function Gr(a,b){a.fH.hX(b);}
function I8(){var a=this;Cf.call(a);a.eH=null;a.d2=null;a.eg=null;a.eK=null;}
function U9(a,b,c,d){var e=new I8();Tv(e,a,b,c,d);return e;}
function Tv(a,b,c,d,e){a.eH=b;a.d2=c;a.eg=d;a.eK=e;FA(a);a.dy=a.eH;a.dr=a.d2;a.cU=a.eg;a.cT=a.eK;}
var Ff=C(Cl);
function Ze(){var a=new Ff();Lo(a);return a;}
function WL(a){var b=new Ff();G5(b,a);return b;}
function PN(b){if(b!==null&&!(typeof b==='undefined'?1:0))return WL(b);return null;}
function Lo(a){G5(a,Ge());}
function G5(a,b){FD(a,b);}
function JV(a,b){return a.bv[$rt_ustr(b)]||null;}
function Ij(a){return Gf(TH(a.bv));}
function Kq(a,b,c){a.bv[$rt_ustr(b)]=c;return a;}
function TJ(a){return FQ(a);}
function Tp(a,b){return G9(a,b);}
function ML(a,b){return I1(a,b);}
function NC(a,b){return FI(a,b);}
function Qx(a,b){return JZ(a,b);}
function SS(a){return JD(a);}
function OV(a,b){return Hu(a,b);}
function L$(a){return J2(a);}
function RA(a,b,c){return Kq(a,b,c);}
function O8(a,b){return JV(a,b);}
function Pv(a){return Ij(a);}
var JQ=C(Q);
function UT(){var a=new JQ();QC(a);return a;}
function QC(a){Bw(a);}
function I9(){var a=this;Cf.call(a);a.fm=null;a.dY=null;a.fn=null;a.ef=null;}
function Vn(a,b,c,d){var e=new I9();RP(e,a,b,c,d);return e;}
function RP(a,b,c,d,e){a.fm=b;a.dY=c;a.fn=d;a.ef=e;FA(a);a.dy=a.fm;a.dr=a.dY;a.cU=a.fn;a.cT=a.ef;}
function Dz(){var a=this;B.call(a);a.bW=0;a.eq=0;}
var Yi=null;var Yh=null;function Bo(){Bo=L(Dz);PH();}
function Hk(a,b){var c=new Dz();H7(c,a,b);return c;}
function H7(a,b,c){Bo();E(a);a.bW=b;a.eq=c;}
function L3(a){return a.bW?0:1;}
function Q8(a){return a.bW!=1?0:1;}
function Ti(a){return !a.h1()&&!a.fA()?0:1;}
function Ra(a){return a.bW!=2?0:1;}
function Rk(a){return a.bW!=3?0:1;}
function Qa(a){if(a.il())return a.eq;H(VP());}
function Dh(b){Bo();return Hk(2,b);}
function PH(){Yi=Hk(0,0);Yh=Hk(1,0);}
var Dp=C();
var Zf=null;var Zg=null;function D$(){D$=L(Dp);Rd();}
function Kg(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;D$();d=$rt_doubleToLongBits(b);c.d$=CK(Bf(d,P(0, 2147483648)),BF)?0:1;e=Bf(d,P(4294967295, 1048575));f=Dw(CX(d,52))&2047;if(CK(e,BF)&&!f){c.cF=BF;c.cZ=0;return;}g=0;if(f)h=Vx(e,P(0, 1048576));else{h=B$(e,1);while(CK(Bf(h,P(0, 1048576)),BF)){h=B$(h,1);f=f+(-1)|0;g=g+1|0;}}i=Mn(Zg,f);if(i<0)i=( -i|0)-2|0;j=f-Zg.data[i]|0;k=12+j|0;l=Fo(h,Zf.data[i],k);if(Iu(l,P(2808348672, 232830643))){i=i+1|0;m=f-Zg.data[i]|0;k=12+m|0;l=Fo(h,Zf.data[i],k);}n=BV(Zf.data[i],(63
-k|0)-g|0);o=CX(T(n,G(1)),1);p=CX(n,1);if(CK(h,P(0, 1048576)))p=CX(p,2);q=JK(l,p);r=KN(l,o);m=WB(q,r);h=m>0?N(Bc(l,q),q):m<0?T(N(Bc(l,r),r),r):N(Bc(T(l,Bc(r,G(2))),r),r);if(Iu(h,P(2808348672, 232830643))){i=i+1|0;h=Bc(h,G(10));}else if(II(h,P(1569325056, 23283064))){i=i+(-1)|0;h=N(h,G(10));}c.cF=h;c.cZ=i-330|0;}
function JK(b,c){var d,e;D$();d=G(10);while(CL(d,c)){d=N(d,G(10));}e=C9(b,d);if(Iu(e,Bc(c,G(2))))d=Bc(d,G(10));return d;}
function KN(b,c){var d,e;D$();d=G(1);while(CL(d,c)){d=N(d,G(10));}e=C9(b,d);if(Im(Wb(d,e),Bc(c,G(2))))d=Bc(d,G(10));return d;}
function Fo(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;D$();e=Bf(b,G(65535));f=Bf(BV(b,16),G(65535));g=Bf(BV(b,32),G(65535));h=Bf(BV(b,48),G(65535));i=Bf(c,G(65535));j=Bf(BV(c,16),G(65535));k=Bf(BV(c,32),G(65535));l=Bf(BV(c,48),G(65535));m=T(T(N(k,e),N(j,f)),N(i,g));n=T(T(T(N(l,e),N(k,f)),N(j,g)),N(i,h));o=T(T(N(l,f),N(k,g)),N(j,h));p=T(N(l,g),N(k,h));q=N(l,h);r=T(T(B$(q,32+d|0),B$(p,16+d|0)),B$(o,d));s=d>16?T(r,B$(n,d-16|0)):T(r,BV(n,16-d|0));s=T(s,BV(m,32-d|0));return s;}
function Rd(){var b,c,d,e,f,g,h,i,j,k,l;Zf=VX(660);Zg=EO(660);b=P(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=Zf.data;g=d+330|0;f[g]=DA(e,G(80));Zg.data[g]=c;e=DA(e,G(10));h=GF(e,G(10));while(CL(e,b)&&CK(Bf(e,P(0, 2147483648)),BF)){e=B$(e,1);c=c+1|0;h=B$(h,1);}e=T(e,Bc(h,G(10)));d=d+1|0;}i=P(3435973836, 214748364);j=1023;d=0;while(d<330){k=0;e=b;while(Im(e,i)){e=CX(e,1);k=k+1|0;j=j+(-1)|0;}h=N(e,G(10));if(k<=0)b=h;else{l=Bf(b,G((1<<k)-1|0));b=T(h,CX(N(l,G(10)),k));}f=Zf.data;g=(330-d|0)-1|0;f[g]=DA(b,
G(80));Zg.data[g]=j;d=d+1|0;}}
function FJ(){DV.call(this);this.eT=null;}
function Wg(a){var b=new FJ();Q2(b,a);return b;}
function Q2(a,b){Jt(a,b);}
function Op(a){return a.eT;}
function Lh(a,b){a.eT=b;}
var EB=C();
var Xz=null;function Uq(){Uq=L(EB);K9();}
function K9(){Xz=EO((ET()).data.length);Xz.data[Bi(Xy)]=1;Xz.data[Bi(Xw)]=2;Xz.data[Bi(Xv)]=3;}
function H2(){var a=this;B5.call(a);a.fV=null;a.e5=null;a.e3=0.0;a.hs=null;}
function VZ(a,b,c,d){var e=new H2();NY(e,a,b,c,d);return e;}
function NY(a,b,c,d,e){a.hs=b;a.fV=c;a.e5=d;a.e3=e;E2(a);a.E=a.fV;a.bC=a.e5;a.bV=a.e3;}
var JW=C(Cx);
var F0=C();
function U5(){var a=new F0();Mv(a);return a;}
function Mv(a){E(a);}
function R5(a,b){return Hb(a,b);}
function Hb(a,b){return TQ(b);}
function F1(){B.call(this);this.eo=null;}
function WN(a){var b=new F1();RG(b,a);return b;}
function RG(a,b){E(a);a.eo=b;}
function Lg(a,b){Pm(a.eo,b);}
function Os(a,b){a.dq(b);}
function H6(){var a=this;B.call(a);a.ew=null;a.fR=0;}
function Vh(a){var b=new H6();Pb(b,a);return b;}
function Pb(a,b){E(a);a.ew=b;}
var H5=C(Bk);
var Iw=C(Bk);
var FG=C(Cl);
function Vp(a){var b=new FG();OA(b,a);return b;}
function Gf(b){if(b!==null&&!(typeof b==='undefined'?1:0))return Vp(b);return null;}
function OA(a,b){FD(a,b);}
function EH(a){return Je(a.bv);}
function GO(a,b){return (EH(a))[b];}
function Mo(a){return (EH(a)).length;}
function N0(a,b){return GO(a,b);}
var Jh=C(Q);
function Wd(){var a=new Jh();Ry(a);return a;}
function Ry(a){Bw(a);}
var Ik=C();
function VL(){var a=new Ik();Le(a);return a;}
function Le(a){E(a);}
function GB(){BM.call(this);this.dB=null;}
function Ug(a){var b=new GB();N2(b,a);return b;}
function N2(a,b){DK(a);a.dB=b;}
function La(a,b){return a.dB.data[b];}
function M8(a){return a.dB.data.length;}
var BI=C();
var Zh=null;var Zi=null;var Zj=null;var Zk=null;var Zl=null;var Zm=null;var Zn=null;function QG(){QG=L(BI);LX();}
function Hg(b,c){var d,e,f;QG();if(c===null)c=Zm;d=U(B,b.p());b.gq(d);PS(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;b.gW(e,f[e]);e=e+1|0;}}
function J1(b,c){QG();return b!==null?b.gb(c): -c.gb(b)|0;}
function LX(){Zh=Ws();Zi=Vg();Zj=Wv();Zk=UE();Zl=WA();Zm=Vd();Zn=WH();}
$rt_packages([-1,"java",0,"util",0,"nio",2,"charset",0,"lang",-1,"dev",5,"webfx",6,"platform",7,"shared",8,"services",9,"json",10,"spi",7,"client",12,"services",13,"webassembly",14,"spi"]);
$rt_metadata([B,0,0,[],0,3,0,0,["j8",W3(Di),"bS",W3(O1),"z",W4(Lw),"d",W3(N3),"jb",W3(C7),"dH",W3(Ts)],BX,0,B,[],0,3,0,0,["dg",W3(Qc),"cG",W3(Pa),"g8",W3(QU),"iZ",W3(Rp),"eA",W4(S$)],Bz,0,BX,[],0,3,0,0,["a",W3(Dn),"q",W4(D2)],Q,0,Bz,[],0,3,0,0,["a",W3(Bw),"q",W4(Fl)],Do,"IndexOutOfBoundsException",4,Q,[],0,3,0,0,["a",W3(HF),"q",W4(RR)],Dy,0,B,[],3,3,0,0,["ba",W4(Sp),"gQ",W4(Rr),"hm",W4(Tk),"gF",W4(S8)],D7,0,B,[Dy],3,3,0,0,["ba",W4(Sp),"gQ",W4(Rr),"hm",W4(Tk),"gF",W4(S8)],EA,0,B,[Dy],3,3,0,0,["ba",W4(Sp),"gQ",
W4(Rr),"hm",W4(Tk),"gF",W4(S8),"d5",W3(Qu)],CZ,"JsonProvider",11,B,[D7,EA],3,3,0,0,["ba",W4(Sp),"gQ",W4(Rr),"hm",W4(Tk),"gF",W4(S8),"d5",W3(Qu),"hJ",W3(Ps)],CV,0,B,[CZ],3,3,0,0,["ba",W4(Sp),"gQ",W4(Rr),"hm",W4(Tk),"gF",W4(S8),"d5",W3(Qu),"hJ",W3(Ps)],Cy,0,B,[CV],3,3,0,0,["ba",W4(Sp),"gQ",W4(Rr),"hm",W4(Tk),"gF",W4(S8),"d5",W3(Qu),"hJ",W3(Ps)],Cl,0,B,[Cy],1,0,0,0,["gQ",W4(Rr),"hm",W4(Tk),"gF",W4(S8),"d5",W3(Qu),"hJ",W3(Ps),"dn",W4(FD),"fe",W3(J2),"cc",W4(Hu),"fY",W3(JD),"dZ",W4(JZ),"fj",W4(FI),"ba",W4(I1),"e0",
W4(G9),"d",W3(FQ),"bn",W3(Rx),"dc",W3(Tu),"c4",W4(LK),"bT",W4(LU),"dK",W4(Sy)],GS,0,B,[],0,3,0,0,["je",W5(Qr),"ib",W3(PF),"dD",W4(PL),"iL",W4(Qy),"gu",W4(TM)],DH,0,B,[],3,3,0,0,["hw",W4(M2)],EQ,0,B,[DH],3,3,0,0,["hw",W4(M2)],Br,0,B,[],3,3,0,0,0,W,0,B,[Br],1,3,0,0,["a",W3(B7)],Ba,0,B,[],3,3,0,0,0,Cm,0,W,[Ba],0,3,0,BR,["bs",W4(In),"I",W3(MQ),"d",W3(RC)],IG,"CloneNotSupportedException",4,Bz,[],0,3,0,0,["a",W3(Sd)],B1,0,B,[],0,0,0,O4,0,Fz,0,W,[Ba],0,3,0,IU,["kG",W4(IM),"I",W3(LR),"d",W3(Qw)],BZ,0,B,[],3,3,0,0,0,Ep,
0,B,[],3,3,0,0,0,B0,0,B,[Ep],0,3,0,Fr,["q",W4(Hp),"jl",W5(EP),"g2",W3(Lm)],Bg,0,B,[],3,3,0,0,0,EL,0,B,[Bg],3,3,0,0,0,Jj,0,B,[EL],1,3,0,0,["kg",W4(Th),"j9",W3(Oi)],DS,0,B,[],3,3,0,0,["gK",W5(Pf),"iV",W4(Tx),"h3",W4(Qf),"dF",W4(OH),"dz",W5(MR)],CP,0,B,[DS,CV],3,3,0,0,["gK",W5(Pf),"iV",W4(Tx),"h3",W4(Qf),"dF",W4(OH),"dz",W5(MR),"ba",W4(Sp),"gQ",W4(Rr),"hm",W4(Tk),"gF",W4(S8),"d5",W3(Qu),"hJ",W3(Ps),"hd",W4(O9),"c8",W4(N_)],Kz,0,B,[],4,3,0,0,0,CD,0,B,[],3,3,0,0,0,IX,0,B,[CD],0,3,0,0,["i7",W4(PG),"cW",W4(QN),"fO",
W4(K1)],E0,0,B,[],3,3,0,0,0,IW,0,B,[E0],0,3,0,0,["i7",W4(Tc),"gX",W4(NE)],BE,0,B,[],1,3,0,0,["a",W3(Fp)],CW,0,B,[],3,3,0,0,0,Cs,0,BX,[],0,3,0,0,["q",W4(Il),"fa",W4(Hc)],Cx,0,Cs,[],0,3,0,0,["q",W4(Gh)],Ko,"StringIndexOutOfBoundsException",4,Do,[],0,3,0,0,["a",W3(Ql)],DG,0,B,[],4,3,0,Sr,0,JL,0,B,[],4,3,0,0,0,Ft,0,B,[],3,3,0,0,0,Ef,0,B,[Ft],3,3,0,0,0,EG,0,B,[],3,3,0,0,0,BW,0,B,[Ef,EG],1,3,0,0,["a",W3(C3),"ce",W6(LZ)],Ex,0,BW,[],0,3,0,SA,["d9",W4(M3)],EY,0,B,[],3,3,0,0,0,Bk,0,B,[Bg],1,3,0,0,0,GE,0,Bk,[],1,3,0,0,
0]);
$rt_metadata([Fj,0,B,[],4,3,0,0,0,Cr,0,B,[Br,CW],0,0,0,0,["a",W3(Ey),"bs",W4(Ed),"kp",W4(Kc),"kH",W4(Eq),"cl",W5(EW),"kw",W4(Hi),"d_",W5(My),"gG",W6(R6),"jS",W4(JX),"em",W5(KS),"h9",W6(LF),"jZ",W4(I5),"dR",W5(Ii),"ji",W4(KC),"fh",W5(Kl),"eW",W5(IV),"bx",W4(Et),"d",W3(D6),"e",W3(JO),"ka",W6(Hr),"dO",W7(Gj),"ed",W7(Jq),"d4",W4(Jl)],CS,0,B,[],3,3,0,0,0,F6,0,Cr,[CS],0,3,0,0,["bs",W4(ST),"a",W3(Sm),"P",W4(X),"c",W4(LM),"s",W4(Bx),"iq",W4(Q4),"hK",W4(O6),"h",W4(Lz),"fg",W6(RL),"hT",W5(Qj),"ho",W5(Sb),"hE",W7(Mi),
"hf",W5(SZ),"ix",W5(MP),"g7",W5(Tb),"d4",W4(Tl),"ed",W7(PO),"dO",W7(Nw),"e",W3(Nr),"d",W3(Bd),"bx",W4(To),"eW",W5(LP),"fh",W5(Lk),"dR",W5(PK),"em",W5(Ot),"cl",W5(TA)],EX,0,B,[DS],3,3,0,0,["gK",W5(Pf),"iV",W4(Tx),"h3",W4(Qf),"dF",W4(OH),"dz",W5(MR)],CY,0,B,[CP,EX],3,3,0,0,["gK",W5(Pf),"iV",W4(Tx),"h3",W4(Qf),"dF",W4(OH),"dz",W5(MR),"ba",W4(Sp),"gQ",W4(Rr),"hm",W4(Tk),"gF",W4(S8),"d5",W3(Qu),"hJ",W3(Ps),"hd",W4(O9),"c8",W4(N_),"ii",W5(L1)],Dx,0,B,[Cy],3,3,0,0,["ba",W4(Sp),"gQ",W4(Rr),"hm",W4(Tk),"gF",W4(S8),"d5",
W3(Qu),"hJ",W3(Ps),"dc",W3(OS),"bT",W4(Sj),"dK",W4(S4),"cc",W4(NJ)],C6,0,B,[CY,Dx],1,3,0,0,["gK",W5(Pf),"iV",W4(Tx),"h3",W4(Qf),"dF",W4(OH),"dz",W5(MR),"ba",W4(Sp),"gQ",W4(Rr),"hm",W4(Tk),"gF",W4(S8),"d5",W3(Qu),"hJ",W3(Ps),"hd",W4(O9),"c8",W4(N_),"ii",W5(L1),"dc",W3(OS),"bT",W4(Sj),"dK",W4(S4),"cc",W4(NJ),"a",W3(GC),"hv",W4(Kd),"gt",W3(Pt),"hu",W3(L5),"fd",W3(RI),"cw",W4(SL),"gN",W5(NW),"gV",W3(S9),"d",W3(SW),"fT",W5(RM)],Jp,"ConcurrentModificationException",1,Q,[],0,3,0,0,["a",W3(Te)],Fi,0,B,[],3,3,0,0,0,S,
0,B,[],3,3,0,0,0,HQ,0,B,[S],0,3,0,0,["j6",W4(Td),"f",W4(Li),"kl",W4(GP)],C5,0,B,[],3,3,0,0,0,Js,0,B,[C5],0,3,0,0,["a",W3(Sw),"fI",W3(K7),"iN",W3(Gl)],CM,"WebAssemblyProvider",15,B,[],3,3,0,0,["hq",W5(RN)],En,0,B,[CM],4,3,0,0,["hq",W5(RN),"a",W3(NU),"hN",W3(NA),"gS",W4(NX)],G8,"CoderMalfunctionError",3,Cs,[],0,3,0,0,["fa",W4(LN)],Ch,0,B,[BZ],1,3,0,0,["a",W3(EV),"d",W3(Nx)],Ci,0,B,[],3,3,0,0,0,DN,0,Ch,[Ci,Br],0,3,0,0,["c3",W4(Q6),"a",W3(IC),"bs",W4(DY),"jX",W5(Kf),"cy",W4(Rc),"ke",W4(Gu),"kj",W6(CO),"ky",W3(C1),
"bg",W5(Ma),"dt",W5(QV),"bO",W6(Ob),"hx",W4(QK),"cg",W3(OG),"kn",W4(Hm),"p",W3(OC)],GN,0,DN,[BZ],0,3,0,0,["a",W3(MU),"bs",W4(Ov),"c3",W4(NG),"cy",W4(LJ),"bO",W6(S0),"bg",W5(Rs),"dt",W5(S1),"dp",W4(Ly),"fU",W3(QW),"i9",W3(OZ),"gA",W4(OM),"ir",W4(LO)],Hj,0,Cr,[CS],0,3,0,0,["a",W3(Ro),"gs",W4(O$),"h8",W5(O_),"d",W3(NL),"bx",W4(N7),"cl",W5(LG)],Cq,0,B,[],1,3,0,0,["bs",W4(E5),"kB",W3(CC),"jh",W4(Jm),"jK",W3(HC),"j0",W3(BT),"jJ",W3(B6)],Cv,0,B,[Ba,Br],1,3,0,0,["cV",W5(Fg),"jm",W3(Bi)],B2,0,Cv,[],12,3,0,DM,0,Co,0,
B,[],0,0,0,0,["cf",W4(D5),"x",W3(NS),"kr",W3(KE),"jk",W3(Fq)],BQ,0,B,[],3,3,0,0,0,Jg,0,Co,[BQ],0,0,0,0,["cf",W4(Qb),"hV",W3(ND),"t",W3(RJ)],Dc,0,B,[],3,3,0,0,0,De,0,B,[Dc],0,3,0,0,["a",W3(I3),"fZ",W4(KB),"cR",W4(Ny),"c1",W4(MM)],Dl,0,B,[Dc],3,3,0,0,0,DQ,0,De,[Dl],1,3,0,0,["a",W3(Io),"fZ",W4(Pk),"jB",W4(I$),"dJ",W4(QQ)],KV,0,DQ,[],0,3,0,0,["a",W3(PM),"iX",W3(Ta)],DX,0,B,[],3,3,0,0,0,DO,0,B,[DX,Ci],0,0,0,0,["kE",W5(KQ),"bk",W3(RU),"bH",W3(SX)],CA,0,DO,[],0,0,0,0,["hn",W5(Hs)],Fb,0,CA,[],4,0,0,0,["hn",W5(QS)],DW,
0,B,[],0,3,0,0,0,HY,0,B,[],0,3,0,0,["hb",W6(Qk)],Cp,0,Cx,[],0,3,0,0,["q",W4(Fd)],Jr,0,Cp,[],0,3,0,0,["q",W4(Ox)],ED,0,Bz,[],0,3,0,0,0,Ct,0,B,[],3,3,0,0,0,G_,0,B,[Ct],0,3,0,0,["a",W3(Nl)],GM,0,B,[BQ],0,0,0,0,["jQ",W4(Nz),"x",W3(L9),"t",W3(QO)],Dm,0,Ch,[],1,0,0,0,["a",W3(Ju)],Dg,0,B,[],3,3,0,0,0,DJ,0,B,[Dg],0,0,0,0,["hH",W5(Gz),"ga",W4(TS)],DD,"UnsupportedOperationException",4,Q,[],0,3,0,0,["a",W3(FZ)],KO,"ReadOnlyBufferException",2,DD,[],0,3,0,0,["a",W3(Sv)]]);
$rt_metadata([E7,0,B,[],3,3,0,0,0,Er,0,B,[],3,3,0,0,0,Gx,0,B,[],4,3,0,0,0,ER,0,B,[BQ],3,3,0,0,0,KM,0,B,[Dl],4,3,0,0,["a",W3(Om),"cR",W4(S3),"dJ",W4(SN),"c1",W4(QH)],IK,0,Bk,[],1,3,0,0,0,IJ,0,B,[BQ],0,0,0,0,["kz",W4(Nh),"x",W3(Sc),"t",W3(M$)],He,0,B,[],0,3,0,0,["a",W3(NP)],Id,0,B,[],4,0,0,0,0,G0,0,Cp,[],0,3,0,0,["q",W4(N$)],DB,0,B,[],3,3,0,0,0,CE,0,B,[DB],3,3,0,0,0,Cb,0,B,[CE],1,3,0,0,["a",W3(Fh),"eU",W3(QI),"gq",W4(PU)],E1,0,B,[Fi],3,3,0,0,["hX",W4(Qp),"g9",W3(SD),"ih",W4(R7)],I2,0,B,[E1],0,3,0,0,["hX",W4(Qp),
"g9",W3(SD),"ih",W4(R7),"a",W3(NN),"c$",W3(SR),"eX",W3(MY),"e9",W3(QL),"iC",W3(MC),"cH",W4(Sx),"cK",W4(QE),"cE",W4(NZ)],If,0,B,[],4,3,0,0,0,FC,0,W,[Ba],0,3,0,QJ,["jp",W4(Hz)],Ec,0,B,[],3,3,0,0,0,KP,0,B,[Ec],0,3,0,0,["a",W3(Nt)],FF,0,B,[],3,3,0,0,0,HZ,0,B,[],4,0,0,0,0,Cf,0,B,[],0,3,0,0,["a",W3(FA)],HD,0,B,[DB],4,3,0,0,["u",W3(Hl)],HA,0,B,[],4,3,0,0,0,BK,0,B,[],1,3,0,0,["a",W3(Du)],Bu,0,B,[],0,3,0,0,["a",W3(CQ)],Jy,0,Bu,[],0,0,0,0,["kA",W5(Nu)],C4,0,B,[],1,3,0,0,["ko",W7(J_),"gZ",W6(Jv),"js",W4(FH),"it",W4(SF),
"kD",W4(J5),"hU",W4(R3),"ki",W6(G4),"jr",W4(Gd),"gB",W4(Lv)],BU,0,B,[],4,3,0,Ee,0,CN,0,B,[CV,DH],3,3,0,0,["ba",W4(Sp),"gQ",W4(Rr),"hm",W4(Tk),"gF",W4(S8),"d5",W3(Qu),"hJ",W3(Ps),"hw",W4(M2),"iS",W4(Qe)],Ds,0,Cq,[Ba],1,3,0,0,["ja",function(b,c,d,e,f){GQ(this,b,c,d,e,f);},"e4",W6(Rl),"jD",W4(Jk),"j1",W3(Ev)],JR,0,Ds,[],0,0,0,0,["jo",function(b,c,d,e,f,g,h){L2(this,b,c,d,e,f,g,h);},"go",W3(Q7)],Gc,0,B,[],4,0,0,0,["jC",W5(JT),"j$",W3(Jn),"km",W3(J0)],HS,0,B,[],0,3,0,0,0,Bn,0,Cv,[],12,3,0,Y,0,Bt,0,B,[Br],0,3,0,Gi,
["cV",W5(Kw),"I",W3(C0)],HB,0,B,[],4,3,0,0,0,Db,0,B,[Ba],1,3,0,0,["j_",W5(HK)],CJ,0,B,[],0,3,0,Fk,["q",W4(H3)],BJ,0,B,[Br,Ba],0,3,0,D8,["kc",W4(Hy),"e2",W3(Q5),"d",W3(MH),"z",W4(Md)],Cn,"IllegalArgumentException",4,Q,[],0,3,0,0,["a",W3(EC),"q",W4(K3)],Ie,"IllegalCharsetNameException",3,Cn,[],0,3,0,0,["q",W4(Qs)],KW,"NoSuchElementException",1,Q,[],0,3,0,0,["a",W3(LV)],FV,0,B,[Ct],0,3,0,0,["kk",W4(P9),"fB",W5(Q3)],EJ,0,B,[],32,0,0,UH,0,IY,0,B,[Bg],1,3,0,0,0,Dd,0,BW,[],0,3,0,0,["kb",W4(Gk)],DE,0,Dd,[],0,3,0,0,
["kf",W5(Fe),"ce",W6(MA),"hr",W4(Pn),"b7",W4(Sk),"eZ",W4(Ol),"iH",W4(SV),"iJ",W3(OJ)],O,0,B,[],0,3,0,0,["a",W3(BD)],Kp,0,O,[],0,0,0,0,["X",W4(Pq)]]);
$rt_metadata([Ks,0,O,[],0,0,0,0,["X",W4(NR)],V,0,BE,[],0,3,0,0,["a",W3(BG),"fX",W4(Ml),"ek",W4(MB)],Kt,0,V,[],0,0,0,0,["X",W4(SG)],Kx,0,V,[],0,0,0,0,["X",W4(LQ)],Kr,0,O,[],0,0,0,0,["X",W4(LH)],Ku,0,V,[],0,0,0,0,["X",W4(Og)],Km,0,V,[],0,0,0,0,["X",W4(RT)],Kj,0,B,[S],0,3,0,0,["a",W3(Tg),"f",W4(SB),"bi",W4(JJ)],Gt,0,B,[S],0,3,0,0,["a",W3(Ph),"f",W4(Lj),"bc",W4(IZ)],Ki,0,B,[S],0,3,0,0,["a",W3(OU),"f",W4(Mu),"bc",W4(Gv)],Gq,0,B,[S],0,3,0,0,["a",W3(QP),"f",W4(Pr),"bc",W4(GG)],Kv,0,V,[],0,0,0,0,["X",W4(R8)],Kh,0,B,
[S],0,3,0,0,["a",W3(Tq),"f",W4(On),"bc",W4(K4)],Kn,0,V,[],0,0,0,0,["X",W4(PC)],EN,0,B,[CE],3,3,0,0,0,BS,0,Cb,[EN],1,3,0,0,["a",W3(Dq)],Dr,0,BS,[],0,0,0,0,["kC",W4(H1),"gC",W3(OE)],ID,0,Dr,[],4,0,0,0,["cf",W4(OK),"u",W3(QT)],KX,0,B,[S],0,3,0,0,["a",W3(Ru),"f",W4(NB),"bc",W4(Ia)],KI,0,B,[S],0,3,0,0,["a",W3(S6),"f",W4(Q$),"bi",W4(FY)],KZ,0,B,[S],0,3,0,0,["a",W3(L7),"f",W4(Oh),"bc",W4(I4)],KH,0,B,[S],0,3,0,0,["a",W3(O3),"f",W4(LL),"bi",W4(HR)],K0,0,B,[S],0,3,0,0,["a",W3(Px),"f",W4(R0),"bi",W4(H_)],Gs,0,B,[S],0,
3,0,0,["a",W3(Rw),"f",W4(Lc),"bi",W4(HE)],KG,0,B,[S],0,3,0,0,["a",W3(TL),"f",W4(P3),"bc",W4(Ho)],KY,0,B,[S],0,3,0,0,["a",W3(QF),"f",W4(QY),"bi",W4(F7)],Kk,0,B,[S],0,3,0,0,["a",W3(Np),"f",W4(S2),"bi",W4(Ke)],Gp,0,B,[S],0,3,0,0,["a",W3(LT),"f",W4(Pj),"bi",W4(GX)],FW,0,C6,[],0,3,0,0,["gK",W5(Pf),"iV",W4(Tx),"h3",W4(Qf),"dF",W4(OH),"dz",W5(MR),"ba",W4(Sp),"gQ",W4(Rr),"hm",W4(Tk),"gF",W4(S8),"d5",W3(Qu),"hJ",W3(Ps),"hd",W4(O9),"c8",W4(N_),"ii",W5(L1),"dc",W3(OS),"bT",W4(Sj),"dK",W4(S4),"cc",W4(NJ),"a",W3(Sa),"hv",
W4(R1),"b4",W3(P6),"c7",W4(SM),"i6",W3(NV),"c4",W4(OQ),"bn",W3(Oa)],HM,0,B,[],0,3,0,0,0,D9,0,B,[],3,3,0,0,0,DZ,0,B,[],3,3,0,0,0,Jo,0,B,[D9,DZ],0,3,0,0,["d",W3(K8),"fN",W3(Ni),"ff",W3(Tf),"f$",W3(Lt)],KD,0,Bk,[],1,3,0,0,0,B9,0,W,[Ba],0,3,0,IB,["jd",W4(Eo),"hR",W4(Ja),"z",W4(Mj)],G2,0,B,[],0,3,0,0,0,Dj,0,B,[],4,3,0,0,0,Hd,0,B,[],4,0,0,0,0,Ha,0,B,[],4,3,0,0,0,Ez,0,B,[Bg],3,0,0,0,0,JH,0,Co,[BQ],0,0,0,0,["cf",W4(RD),"t",W3(Sg)],KF,0,B,[S],0,3,0,0,["a",W3(OT),"f",W4(MF),"bc",W4(JE)],Iq,0,B,[ER],0,0,0,0,["a",W3(Qd)],Fs,
0,B,[Dg],3,3,0,0,0,FU,0,DJ,[Fs],4,0,0,0,["hH",W5(Oc),"iM",W4(Sf)],D1,0,B,[],4,3,0,LB,0,Cd,0,B,[CE],3,3,0,0,["gI",W4(Pd)],BM,0,Cb,[Cd],1,3,0,0,["gI",W4(Pd),"a",W3(DK),"u",W3(P5)],CF,0,B,[],3,3,0,0,0,DF,0,BM,[CF],1,0,0,0,["gI",W4(Pd),"a",W3(HU)]]);
$rt_metadata([Is,0,DF,[],0,0,0,0,["gI",W4(Pd),"a",W3(Mt)],Ip,0,B,[BQ],0,0,0,0,["a",W3(RH)],BN,0,B,[Ba],0,3,0,Bh,0,DC,0,BS,[],1,0,0,0,["a",W3(JF)],It,0,DC,[],0,0,0,0,["a",W3(L8)],Ir,0,Dm,[],0,0,0,0,["a",W3(K$)],CG,0,B,[CN,Cy,EQ],3,3,0,0,["ba",W4(Sp),"gQ",W4(Rr),"hm",W4(Tk),"gF",W4(S8),"d5",W3(Qu),"hJ",W3(Ps),"hw",W4(M2),"iS",W4(Qe)],DV,0,B,[CG,Dx],1,3,0,0,["ba",W4(Sp),"gQ",W4(Rr),"hm",W4(Tk),"gF",W4(S8),"d5",W3(Qu),"hJ",W3(Ps),"hw",W4(M2),"iS",W4(Qe),"dc",W3(OS),"bT",W4(Sj),"dK",W4(S4),"cc",W4(NJ),"h$",W4(Jt),
"cL",W4(MV),"p",W3(P0)],GK,0,B,[Bg],1,3,0,0,0,Ix,0,O,[],0,0,0,0,["ch",W4(Mx)],Da,0,Cq,[Ba,CS,CW,FF],1,3,0,0,["ht",W6(FS),"iz",W6(Mz),"er",W4(Lb)],Dv,0,Da,[],1,0,0,0,["ht",W6(H4)],J$,0,Dv,[],0,0,0,0,["j2",function(b,c,d,e,f,g){Tz(this,b,c,d,e,f,g);},"iG",W4(M4)],IA,0,O,[],0,0,0,0,["ch",W4(L_)],Iy,0,O,[],0,0,0,0,["ch",W4(PZ)],I6,0,B,[],4,3,0,0,0,Iz,0,O,[],0,0,0,0,["ch",W4(QB)],Iv,0,V,[],0,0,0,0,["ch",W4(QX)],E6,0,B,[Bg],3,3,0,0,0,KK,0,B,[E6],0,3,0,0,["j4",W4(PB),"ie",W4(QM),"jI",W4(KT),"jt",W4(Q_)],I7,0,B,[Bg],
1,3,0,0,0,F_,0,BK,[],0,0,0,0,["a",W3(Qg)],F$,0,BK,[],0,0,0,0,["a",W3(Od)],B4,0,W,[Ba],0,3,0,E$,["hR",W4(JC),"bo",W3(Tt),"I",W3(OB),"d",W3(MD),"z",W4(TN),"fP",W3(Mq),"fw",W3(N8)],F9,0,BK,[],0,0,0,0,["a",W3(RZ)],DP,0,BE,[],0,3,0,0,["a",W3(FR),"fX",W4(PJ),"ek",W4(RW)],Gb,0,DP,[],0,0,0,0,["a",W3(RV)],Ga,0,V,[],0,0,0,0,["a",W3(Oz)],IO,0,B,[],4,3,0,0,0,JA,0,Bu,[],0,0,0,0,["f2",W5(Tm)],Jx,0,Bu,[],0,0,0,0,["f2",W5(TI)],Ky,0,BS,[],0,0,0,0,["cf",W4(O0),"p",W3(R_),"u",W3(RX)],G7,0,BM,[Ci,Br,CF],0,3,0,0,["gI",W4(Pd),"a",
W3(Qv),"bs",W4(D0),"kF",W4(OL),"bx",W4(Mr),"cO",W4(OR),"p",W3(Ng),"gW",W5(LY),"b9",W4(Rq),"d",W3(Ns)],Jz,0,Bu,[],0,0,0,0,["f2",W5(TF)],Bm,0,B,[],0,3,0,0,["a",W3(CU)],JP,0,Bm,[],0,0,0,0,["a",W3(Of)],JM,0,Bm,[],0,0,0,0,["a",W3(P2)],Jc,0,Bm,[],0,0,0,0,["a",W3(Lr)],Em,0,B,[Bg],3,0,0,0,0,JN,0,Bm,[],0,0,0,0,["a",W3(Sl)],BP,0,B,[Br,Ba,CW],0,3,0,KU,["iE",W4(Gw),"kv",W6(K5),"m",W4(M7),"e",W3(QA),"b_",W3(SE),"hP",W4(Rm),"ev",W4(PQ),"d6",W5(MJ),"cz",W4(PP),"iP",W5(Na),"iD",W4(RY),"bB",W5(LS),"g_",W4(R9),"d",W3(N1),"i0",
W3(SO),"z",W4(Rn),"eb",W4(RE),"bS",W3(MX),"gb",W4(Qn)],Fx,0,BW,[],0,3,0,Lf,["d9",W4(TC)],K6,"NegativeArraySizeException",4,Q,[],0,3,0,0,["a",W3(Nn)],DU,0,C4,[],1,3,0,0,["gZ",W6(HO),"hh",W5(Nc)],Ig,0,DU,[],0,3,0,0,["jw",W4(PR),"gJ",function(b,c,d,e,f,g,h){return Tj(this,b,c,d,e,f,g,h);}],Es,0,B,[Bg],3,0,0,0,0,GV,0,B,[Es],0,3,0,0,["i_",W4(K_),"iA",W5(MI),"jT",W5(RF)],GU,0,B,[Ez],0,3,0,0,["jR",W4(Pp),"ij",W4(TG),"fu",W4(Pe)],D_,0,B,[Bg],3,0,0,0,0,GT,0,B,[D_],0,3,0,0,["eM",W4(O2),"dq",W4(NT),"fu",W4(ON)]]);
$rt_metadata([IP,0,B,[Ct],0,3,0,0,["a",W3(Qm)],Bv,0,B,[],4,3,0,Bl,0,IQ,0,B,[Ct],0,3,0,0,["a",W3(Pl),"fB",W5(OO)],Eu,"NumberFormatException",4,Cn,[],0,3,0,0,["a",W3(MO),"q",W4(Ty)],G6,0,O,[],0,0,0,0,["ju",W4(Oo)],Fy,0,Db,[],0,3,0,Qo,["h2",W3(R4)],CB,0,B,[],4,3,0,0,0,E8,0,B,[],0,3,0,Cj,["hb",W6(Ic),"cN",W4(Sz)],Eb,"IllegalStateException",4,Bz,[],0,3,0,0,["a",W3(PT),"q",W4(G$)],HW,0,B,[E7],4,0,0,0,["dn",W4(LD),"is",W4(Mp),"dT",W5(Nj),"jq",W5(HL)],F3,"NullPointerException",4,Q,[],0,3,0,0,["a",W3(Ou)],B5,0,B,[],
0,3,0,0,["a",W3(E2)],Ih,0,B5,[],0,0,0,0,["jN",W7(TD)],HN,0,B,[],4,3,0,0,0,J6,0,B,[],4,3,0,0,0,Eh,0,W,[Ba],0,3,0,RQ,["jn",W4(IL)],Gn,0,B,[CD],0,3,0,0,["j7",W5(Sn),"cW",W4(OW),"fO",W4(F4)],FO,0,B,[C5],0,3,0,0,["a",W3(Rz),"fI",W3(Qi),"iN",W3(HJ)],Fa,0,B,[],0,3,0,EI,["q",W4(GA),"ec",W4(L4),"iK",W5(R2),"iY",W6(O5)],D4,0,B,[Br],0,3,0,0,["kt",W5(St),"fz",W3(N5),"cG",W3(OY),"ge",W3(Oq),"i5",W4(N6)],G3,0,B,[Er],4,0,0,0,["dn",W4(MZ),"gl",W4(Qh)],B_,0,B,[],0,3,0,BB,0,H0,0,B,[CD],0,3,0,0,["eM",W4(M5),"cW",W4(P$),"fO",W4(Gr)],I8,
0,Cf,[],0,0,0,0,["gf",W7(Tv)],Ff,0,Cl,[CY],4,3,0,0,["gK",W5(Pf),"iV",W4(Tx),"h3",W4(Qf),"dF",W4(OH),"dz",W5(MR),"gQ",W4(Rr),"hm",W4(Tk),"gF",W4(S8),"d5",W3(Qu),"hJ",W3(Ps),"hd",W4(O9),"c8",W4(N_),"ii",W5(L1),"a",W3(Lo),"dn",W4(G5),"ks",W4(JV),"jO",W3(Ij),"jV",W5(Kq),"d",W3(TJ),"e0",W4(Tp),"ba",W4(ML),"fj",W4(NC),"dZ",W4(Qx),"fY",W3(SS),"cc",W4(OV),"fe",W3(L$),"fT",W5(RA),"cw",W4(O8),"fd",W3(Pv)],JQ,"BufferOverflowException",2,Q,[],0,3,0,0,["a",W3(QC)],I9,0,Cf,[],0,0,0,0,["gf",W7(RP)],Dz,0,B,[],0,3,0,Bo,["jz",
W5(H7),"gh",W3(L3),"cS",W3(Q8),"il",W3(Ti),"h1",W3(Ra),"fA",W3(Rk),"e",W3(Qa)],Dp,0,B,[],4,3,0,D$,0,FJ,0,DV,[],4,3,0,0,["ba",W4(Sp),"gQ",W4(Rr),"hm",W4(Tk),"gF",W4(S8),"d5",W3(Qu),"hJ",W3(Ps),"hw",W4(M2),"iS",W4(Qe),"dc",W3(OS),"bT",W4(Sj),"dK",W4(S4),"cc",W4(NJ),"h$",W4(Q2),"fl",W3(Op),"hI",W4(Lh)],EB,0,B,[],32,0,0,Uq,0,H2,0,B5,[],0,0,0,0,["jv",W7(NY)],JW,0,Cx,[],0,3,0,0,0,F0,0,B,[EY],0,3,0,0,["a",W3(Mv),"f7",W4(R5),"ku",W4(Hb)],F1,0,B,[Em],0,3,0,0,["eM",W4(RG),"dq",W4(Lg),"fu",W4(Os)],H6,0,B,[],0,3,0,0,["iE",
W4(Pb)],H5,0,Bk,[],1,3,0,0,0,Iw,0,Bk,[],1,3,0,0,0,FG,0,Cl,[CG],4,0,0,0,["gQ",W4(Rr),"hm",W4(Tk),"gF",W4(S8),"d5",W3(Qu),"hJ",W3(Ps),"hw",W4(M2),"iS",W4(Qe),"jj",W4(OA),"j3",W3(EH),"jx",W4(GO),"p",W3(Mo),"cL",W4(N0)],Jh,"BufferUnderflowException",2,Q,[],0,3,0,0,["a",W3(Ry)],Ik,0,B,[],0,3,0,0,["a",W3(Le)],GB,0,BM,[CF],0,0,0,0,["gI",W4(Pd),"gi",W4(N2),"cO",W4(La),"p",W3(M8)],BI,0,B,[],0,3,0,QG,0]);
function $rt_array(cls,data){this.nC=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["<java_object>@",": ","\tat ","Caused by: ",",","null","0",".","Null pointer","JSON does not allow non-finite numbers","JSON does not allow non-finite numbers.","\"\"","\\t","\\n","\\f","\\r","000","\\u","\\b","number","object","string","boolean","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ",
"main","BIG_ENDIAN","LITTLE_ENDIAN","Using default built-in JSON factory which is not interoperable with the underlying platform! Be sure you haven\'t forgot to call Json.registerProvider().","Index out of bounds","(this Map)",", ","New position "," is outside of range [0;","]","RETURN_NULL","TRACE_AND_RETURN_NULL","THROW_EXCEPTION","classes.wasm","cy","width","height","placeIndex","frameIndex","wasm","computeLinePixelRGBs","initAndComputeLinePixelRGBs","Exception raised in Future.compose()","failed","succeeded",
"Result is already complete: ","Replacement preconditions do not hold","Action must be non-null","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ",")","STRING","NUMBER","BOOLEAN","OBJECT","ARRAY","NULL","UNDEFINED","OFF","SEVERE","WARNING","INFO","CONFIG","FINE","FINER","FINEST","ALL","IGNORE","REPLACE","REPORT","false","true","Light.","Sphere.","javaClass@","Cannot instantiate any provider for service ","Light","The last char in dst ","Sphere","Floor","[]",
"(this Collection)","Default","Glass","Mirror","UTF-8","global",""]);
BP.prototype.toString=function(){return $rt_ustr(this);};
BP.prototype.valueOf=BP.prototype.toString;B.prototype.toString=function(){return $rt_ustr(N3(this));};
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
~a);};}var T=Long_add;var Wb=Long_sub;var N=Long_mul;var Bc=Long_div;var C9=Long_rem;var Vx=Long_or;var Bf=Long_and;var Zo=Long_xor;var B$=Long_shl;var CX=Long_shr;var BV=Long_shru;var WB=Long_compare;var CK=Long_eq;var Zp=Long_ne;var II=Long_lt;var CL=Long_le;var Im=Long_gt;var Iu=Long_ge;var Zq=Long_not;var T_=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(UW);
main.javaException=$rt_javaException;
(function(){var c;c=Jj.prototype;c.getLength=c.j9;c.get=c.kg;c=KK.prototype;c.handleEvent=c.jt;c=GV.prototype;c.apply=c.jT;c=GU.prototype;c.handle=c.fu;c=GT.prototype;c.handle=c.fu;c=F1.prototype;c.handle=c.fu;})();
})();

main()