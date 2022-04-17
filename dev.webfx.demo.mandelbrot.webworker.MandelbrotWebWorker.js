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
{if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.cR=f;}
function $rt_cls(cls){return G8(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return S9(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.q.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return U8;}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(CZ());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return Gf();}
function $rt_setThread(t){return NX(t);}
function $rt_createException(message){return U9(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var G=$rt_throw;var BT=$rt_compare;var U$=$rt_nullCheck;var J=$rt_cls;var Bu=$rt_createArray;var BF=$rt_isInstance;var U_=$rt_nativeThread;var Va=$rt_suspending;var Vb=$rt_resuming;var Vc=$rt_invalidPointer;var D=$rt_s;var Q=$rt_eraseClinit;var BL=$rt_imul;var D$=$rt_wrapException;var Vd=$rt_checkBounds;var Ve=$rt_checkUpperBound;var Vf=$rt_checkLowerBound;var Vg=$rt_wrapFunction0;var Vh=$rt_wrapFunction1;var Vi=$rt_wrapFunction2;var Vj=$rt_wrapFunction3;var Vk=$rt_wrapFunction4;var E=$rt_classWithoutFields;var BX
=$rt_createArrayFromData;var Vl=$rt_createCharArrayFromData;var Vm=$rt_createByteArrayFromData;var Vn=$rt_createShortArrayFromData;var B1=$rt_createIntArrayFromData;var Vo=$rt_createBooleanArrayFromData;var Vp=$rt_createFloatArrayFromData;var Vq=$rt_createDoubleArrayFromData;var E6=$rt_createLongArrayFromData;var Vr=$rt_createBooleanArray;var Iq=$rt_createByteArray;var Vs=$rt_createShortArray;var BU=$rt_createCharArray;var U=$rt_createIntArray;var Ur=$rt_createLongArray;var Vt=$rt_createFloatArray;var Vu=$rt_createDoubleArray;var BT
=$rt_compare;var Vv=$rt_castToClass;var Vw=$rt_castToInterface;var UQ=Long_toNumber;var C=Long_fromInt;var Vx=Long_fromNumber;var F=Long_create;var M=Long_ZERO;var Vy=Long_hi;var I=Long_lo;
function B(){this.$id$=0;}
function TX(){var a=new B();K(a);return a;}
function K(a){}
function CY(a){return G8(a.constructor);}
function OP(a){return Do(a);}
function Ly(a,b){return a!==b?0:1;}
function NR(a){return (((V()).d(D(0))).d(F4(Do(a)))).f();}
function Do(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function SH(a){var b,c,d;if(!BF(a,CC)){b=a;if(b.constructor.$meta.item===null)G(Th());}c=LB(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function B$(){var a=this;B.call(a);a.eZ=null;a.cP=null;a.dn=0;a.d6=0;a.e3=null;}
function Vz(){var a=new B$();JV(a);return a;}
function VA(a){var b=new B$();FP(b,a);return b;}
function VB(a){var b=new B$();JW(b,a);return b;}
function JV(a){a.dn=1;a.d6=1;a.dG();}
function FP(a,b){a.dn=1;a.d6=1;a.dG();a.eZ=b;}
function JW(a,b){a.dn=1;a.d6=1;a.dG();a.cP=b;}
function PO(a){return a;}
function O1(a){return a.eZ;}
function Qp(a){return a.c2();}
function QT(a){a.eW(Pf());}
function Sr(a,b){var c,d,e,f,g;b.cg((CY(a)).fC());c=a.hb();if(c!==null)b.cg((((V()).d(D(1))).d(c)).f());a:{b.iM();if(a.e3!==null){d=a.e3.data;e=d.length;f=0;while(true){if(f>=e)break a;g=d[f];b.cg(D(2));b.iG(g);f=f+1|0;}}}if(a.cP!==null&&a.cP!==a){b.cg(D(3));a.cP.eW(b);}}
var BR=E(B$);
function VC(){var a=new BR();DH(a);return a;}
function VD(a){var b=new BR();Ek(b,a);return b;}
function DH(a){JV(a);}
function Ek(a,b){FP(a,b);}
var W=E(BR);
function VE(){var a=new W();BK(a);return a;}
function U9(a){var b=new W();C_(b,a);return b;}
function BK(a){DH(a);}
function C_(a,b){Ek(a,b);}
var DI=E(W);
function Dz(){var a=new DI();Ic(a);return a;}
function CF(a){var b=new DI();Rf(b,a);return b;}
function Ic(a){BK(a);}
function Rf(a,b){C_(a,b);}
var DS=E(0);
function RO(a,b){return b;}
function QV(a,b){if(b===null)return null;if(BF(b,C6))return a.hq(b);if(!BF(b,C8))return a.dr(b);return a.gJ(b);}
function SB(a,b){return b.bx();}
function Sp(a,b){return b.bx();}
var Er=E(0);
var EY=E(0);
function P7(a){return (Fo(a.bx(),a,V())).f();}
function Pl(b,c){var d,e,f,g,h;c.n(123);d=1;e=b.fz();f=0;g=e.J();while(f<g){h=e.hz(f);if(!d)c.n(44);HU(h,c);c.n(58);Fo(b.cT(h),b,c);d=0;f=f+1|0;}return c.n(125);}
function MT(b,c){return (R5(b,D(4),c.n(91))).n(93);}
function R5(b,c,d){var e,f;e=b.J();f=0;while(f<e){if(f>0)d.d(c);Fo(b.c9(f),b,d);f=f+1|0;}return d;}
function Fo(b,c,d){TA();switch(VF.data[Bb(c.cl(b))]){case 1:return d.d(D(5));case 2:return Pl(c.b3(b),d);case 3:return MT(c.d8(b),d);case 4:return d.d(Lt(c.bj(b)));case 5:return d.Z(c.bj(b));case 6:return HU(c.bj(b),d);default:}return d;}
function LH(b){if(b.cW(46)>0&&b.cW(101)<0&&b.cW(69)<0){while(b.eS(D(6))){b=b.by(0,b.i()-1|0);}if(b.eS(D(7)))b=b.by(0,b.i()-1|0);}return b;}
function Lt(b){if(b!==null){RH(b);return LH(b.f());}G(Cb(D(8)));}
function RH(b){var c;a:{b:{if(b!==null){if(b instanceof Ci){if((OB(0.0)).A(b))break b;c=b;if(!c.fQ()&&!c.f5())break b;G(Cb(D(9)));}if(b instanceof Cp&&!(TB(0.0)).A(b)){c=b;if(c.fQ())break a;if(c.f5())break a;}}}return;}G(Cb(D(10)));}
function HU(b,c){var d,e,f,g,h,i,j;if(NH(b))return c.d(D(11));d=0;e=b.i();c.n(34);f=0;while(f<e){a:{g=b.o(f);switch(g){case 8:break;case 9:c.d(D(12));break a;case 10:c.d(D(13));break a;case 12:c.d(D(14));break a;case 13:c.d(D(15));break a;case 34:case 92:c.n(92);c.n(g);break a;case 47:if(d==60)c.n(92);c.n(g);break a;default:if(g>=32){c.n(g);break a;}h=F4(g);i=V();Ce(Ce(i,D(16)),h);j=DE(i);(c.d(D(17))).d(j.he(j.i()-4|0));break a;}c.d(D(18));}f=f+1|0;d=g;}return c.n(34);}
var Df=E(0);
function Pc(a){return a.b3(a.dD());}
var Da=E(0);
var CS=E(0);
function CG(){B.call(this);this.bG=null;}
function F7(a,b){K(a);a.bG=b;}
function Kg(a){return a.bG;}
function HY(a,b){var c,d,e;if(b===null){Bn();return VG;}a:{c=$rt_str(typeof b);d=(-1);switch(c.b1()){case -1034364087:if(!c.A(D(19)))break a;d=2;break a;case -1023368385:if(!c.A(D(20)))break a;d=0;break a;case -891985903:if(!c.A(D(21)))break a;d=1;break a;case 64711720:if(!c.A(D(22)))break a;d=3;break a;default:}}switch(d){case 0:if(!(Object.prototype.toString.apply(b)==='[object Array]'?1:0)){Bn();e=VH;}else{Bn();e=VI;}return e;case 1:break;case 2:Bn();return VJ;case 3:Bn();return VK;default:Bn();return VL;}Bn();return VM;}
function JY(a){return GE();}
function Ke(a,b){if(!(b instanceof F$))return GG(b);return b;}
function Ga(a,b){if(!(b instanceof FG))return Pr(b);return b;}
function Jo(a,b){To();switch(VN.data[Bb(a.cl(b))]){case 1:return Oa(b);case 2:return C2(Nm(b));case 3:return Lm(b);default:}return b;}
function HA(a,b){if(b===null)return null;if(b instanceof B3)return $rt_ustr(b);if(b instanceof BY)return !!b.fk();if(b instanceof Cp)return b.jG();if(b instanceof Ci)return b.R();if(b instanceof Ba)return b.Q();if(!(b instanceof B2))return b;return $rt_ustr(IK(b));}
function Gj(a){return a.es();}
function Lm(b){var c;c=S3(b);if(c!==QM(c))return Ft(c);if(RS(c)<=2.147483647E9)return Br(c|0);return EC(Vx(c));}
function Q0(a){return a.fB();}
function SI(a){return a.f$();}
function LM(a,b){return a.fh(b);}
function LV(a,b){return a.fG(b);}
function RZ(a,b){return a.el(b);}
function GE(){return {};}
function SV(b){var keys=[];for(var key in b){if(Object.prototype.hasOwnProperty.call(b,key)&&key!='$H'){keys.push(key);}}return keys;}
function Hg(){var a=this;B.call(a);a.em=null;a.fP=null;a.fi=0;a.fW=0;}
function Tx(a,b){var c=new Hg();P1(c,a,b);return c;}
function P1(a,b,c){K(a);a.em=b;a.fP=c;}
function Pm(a){return Cn(a.em);}
function Pq(a,b){return B5(a.fP)<b?0:1;}
function P$(a,b){a.fi=b;}
function SY(a,b){a.fW=b;}
var D2=E(0);
function MU(a,b){return Oo(a.iT(b));}
var Fe=E(0);
var BB=E(0);
var Ba=E();
function Bi(a){K(a);}
var Bj=E(0);
function CI(){Ba.call(this);this.dW=0;}
var VO=null;var VP=null;function BS(){BS=Q(CI);PA();}
function P_(a){var b=new CI();IV(b,a);return b;}
function IV(a,b){BS();Bi(a);a.dW=b;}
function IG(b,c){BS();if(!(c>=2&&c<=36))c=10;return ((UI(20)).eB(b,c)).f();}
function F4(b){BS();return LE(b,4);}
function HS(b){BS();return IG(b,10);}
function EM(b,c){var d,e,f,g,h;BS();if(c>=2&&c<=36){if(b!==null&&!b.bM()){a:{d=0;e=0;switch(b.o(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.i())G(SM());while(e<b.i()){g=e+1|0;h=Ed(b.o(e));if(h<0)G(Bp((((V()).d(D(23))).d(b)).f()));if(h>=c)G(Bp((((((V()).d(D(24))).t(c)).d(D(1))).d(b)).f()));f=BL(c,f)+h|0;if(f<0){if(g==b.i()&&f==(-2147483648)&&d)return (-2147483648);G(Bp((((V()).d(D(25))).d(b)).f()));}e=g;}if(d)f= -f|0;return f;}G(Bp(D(26)));}G(Bp((((V()).d(D(27))).t(c)).f()));}
function DN(b){BS();return EM(b,10);}
function Br(b){BS();if(b>=(-128)&&b<=127){Hp();return VP.data[b+128|0];}return P_(b);}
function Hp(){var b;BS();a:{if(VP===null){VP=Bu(CI,256);b=0;while(true){if(b>=VP.data.length)break a;VP.data[b]=P_(b-128|0);b=b+1|0;}}}}
function MK(a){return a.dW;}
function Q5(a){return HS(a.dW);}
function Cx(b){var c,d,e;BS();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function Hv(b){var c,d,e;BS();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function Cs(b){BS();return b>>31|( -b|0)>>>31;}
function PA(){VO=J($rt_intcls());}
var I7=E(BR);
function Th(){var a=new I7();RC(a);return a;}
function RC(a){DH(a);}
var Cg=E();
var VQ=null;var VR=null;var VS=null;var VT=null;var VU=null;function OR(){OR=Q(Cg);RP();}
function RP(){VQ=B1([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);VR=E6([C(1),C(10),C(100),C(1000),C(10000),C(100000),C(1000000),C(10000000),C(100000000),C(1000000000),F(1410065408, 2),F(1215752192, 23),F(3567587328, 232),F(1316134912, 2328),F(276447232, 23283),F(2764472320, 232830),F(1874919424, 2328306),F(1569325056, 23283064),F(2808348672, 232830643)]);VS=E6([C(1),C(10),C(100),C(10000),C(100000000),F(1874919424, 2328306)]);VT=Tn();VU=Uj();}
var E0=E();
var VV=null;function UU(){UU=Q(E0);PR();}
function PR(){VV=U((Jw()).data.length);VV.data[Bb(VW)]=1;VV.data[Bb(VX)]=2;VV.data[Bb(VY)]=3;VV.data[Bb(VZ)]=4;VV.data[Bb(V0)]=5;VV.data[Bb(V1)]=6;VV.data[Bb(V2)]=7;VV.data[Bb(V3)]=8;}
var Fl=E();
var V4=null;function BW(){BW=Q(Fl);My();}
function K0(){BW();return B0((-3.9012757202628037),0.3632155357886345,(-1.5960299759051222),1.6023384588317566,D(28),D(29),0,321,44,1000,240,371,F(2934060552, 9));}
function Jc(){BW();return B0((-1.617617631906755),2.082124330451932,(-0.8379058137691474),1.936900657999868,D(28),D(30),0,0,0,250,123,183,F(3508701852, 1));}
function He(){BW();return B0((-0.3923604154656245),(-0.35385390657205185),0.6337449826252688,0.6626248642954482,D(28),D(31),1,2486,1200,5000,100,298,F(2167787160, 14));}
function HH(){BW();return B0(0.3255969663863445,0.3838641014597792,0.07356094433491353,0.11726129563998954,D(28),D(31),1,0,12,3000,73,330,F(2753102528, 26));}
function Ie(){BW();return B0((-1.9073528222932252),(-1.9073514924809212),0.00198475588464816,0.0019857532438761864,D(28),D(32),0,1157,565,5000,126,252,F(3930967113, 17));}
function Gg(){BW();return B0((-1.4611993645157393),(-1.4611969393517183),(-2.69122434052013E-6),(-8.7235132469165E-7),D(28),D(33),1,1092,539,5000,144,181,F(1185635964, 9));}
function Ii(){BW();return B0((-1.5960139049602644),0.4920585171556493,(-0.30991904708784934),1.2561352694990862,D(28),D(34),0,0,0,10000,54,207,F(829234216, 65));}
function Ib(){BW();return B0((-1.941022691742085),(-1.940943066443167),6.182644332733532E-4,6.779834074618679E-4,D(28),D(31),1,250,1,5000,118,253,F(2737667071, 34));}
function G2(){BW();return B0(0.25211825446288316,0.25249702635864024,(-3.1927191194277595E-4),(-3.519299012499159E-5),D(28),D(35),0,1300,0,50000,125,288,F(3877585330, 78));}
function My(){var b;b=BX(FB,[K0(),Jc(),He(),HH(),Ie(),Gg(),Ii(),Ib(),G2()]);V4=b;}
function F3(){Ba.call(this);this.d$=M;}
var V5=null;function Cm(){Cm=Q(F3);QH();}
function Uz(a){var b=new F3();Ja(b,a);return b;}
function Ja(a,b){Cm();Bi(a);a.d$=b;}
function EC(b){Cm();return Uz(b);}
function KD(b,c){var d,e,f,g,h;Cm();if(c>=2&&c<=36){if(b!==null&&!b.bM()){a:{d=0;e=0;switch(b.o(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=M;while(e<b.i()){g=e+1|0;h=Ed(b.o(e));if(h<0)G(Bp((((V()).d(D(23))).d(b)).f()));if(h>=c)G(Bp((((((V()).d(D(24))).t(c)).d(D(1))).d(b)).f()));f=L(P(C(c),f),C(h));if(Bt(f,M)){if(g==b.i()&&X(f,F(0, 2147483648))&&d)return F(0, 2147483648);G(Bp((((V()).d(D(25))).d(b)).f()));}e=g;}if(d)f=Bo(f);return f;}G(Bp(D(26)));}G(Bp((((V()).d(D(27))).t(c)).f()));}
function Ka(b){Cm();return KD(b,10);}
function LR(a){return I(a.d$);}
function G5(b){Cm();return ((V()).ip(b)).f();}
function P8(a){return G5(a.d$);}
function G9(b){var c,d,e;Cm();if(X(b,M))return 64;c=0;d=S(b,32);if(BA(d,M))c=32;else d=b;e=S(d,16);if(X(e,M))e=d;else c=c|16;d=S(e,8);if(X(d,M))d=e;else c=c|8;e=S(d,4);if(X(e,M))e=d;else c=c|4;d=S(e,2);if(X(d,M))d=e;else c=c|2;if(BA(S(d,1),M))c=c|1;return (64-c|0)-1|0;}
function Iw(b){var c,d,e;Cm();if(X(b,M))return 64;c=0;d=T(b,32);if(BA(d,M))c=32;else d=b;e=T(d,16);if(X(e,M))e=d;else c=c|16;d=T(e,8);if(X(d,M))d=e;else c=c|8;e=T(d,4);if(X(e,M))e=d;else c=c|4;d=T(e,2);if(X(d,M))d=e;else c=c|2;if(BA(T(d,1),M))c=c|1;return (64-c|0)-1|0;}
function D5(b){Cm();return I(Cl(Y(b,63),S(Bo(b),63)));}
function DU(b,c){return Long_udiv(b, c);}
function G4(b,c){return Long_urem(b, c);}
function QH(){V5=J($rt_longcls());}
var Cd=E(0);
var EL=E(0);
function Cf(){var a=this;B.call(a);a.fV=M;a.gr=M;a.hg=null;a.h1=null;a.gO=0;a.iX=null;}
var V6=null;var V7=null;var V8=0;var V9=0;var V$=null;function FU(){FU=Q(Cf);M$();}
function S5(a){var b=new Cf();HT(b,a);return b;}
function V_(a,b){var c=new Cf();Fc(c,a,b);return c;}
function HT(a,b){FU();Fc(a,null,b);}
function Fc(a,b,c){var d;FU();K(a);a.hg=TX();a.gO=1;a.h1=c;a.iX=b;d=V8;V8=d+1|0;a.fV=C(d);}
function NX(b){FU();if(V7!==b)V7=b;V7.gr=I6();}
function Gf(){FU();return V7;}
function Ln(a){return a.fV;}
function M$(){V6=S5(D(36));V7=V6;V8=1;V9=1;V$=Uh();}
var BC=E(0);
function JB(b){return b;}
var Fa=E(0);
var JG=E();
function Sy(a,b){return a.jQ(b);}
function N5(a){return a.jM();}
var D_=E(0);
function O6(a,b,c){return QO(BX(B,[a.dv(b),c]));}
function SK(a,b){Es();return Wa.A(a.h6(b));}
function PQ(a,b){return SX(a.dv(b));}
function Os(a,b){return Fz(a.dv(b));}
function ML(a,b,c){return Fz(a.gN(b,c));}
var C8=E(0);
function OW(a,b){return a.b3(a.cT(b));}
function N0(a,b){return a.bj(a.cT(b));}
function Bh(){var a=this;Ba.call(a);a.a=null;a.g=0;a.h=0;a.bm=0;}
var Wb=null;var Wc=null;var Wd=null;var We=null;var Wf=null;var Wg=null;function Bc(){Bc=Q(Bh);SQ();}
function Ub(a){var b=new Bh();II(b,a);return b;}
function Wh(a,b){var c=new Bh();Fd(c,a,b);return c;}
function Bq(a,b){var c=new Bh();Ia(c,a,b);return c;}
function Bl(a,b,c){var d=new Bh();Ji(d,a,b,c);return d;}
function RQ(a,b){var c=new Bh();GF(c,a,b);return c;}
function T6(a,b){var c=new Bh();K6(c,a,b);return c;}
function II(a,b){Bc();Fd(a,b,10);}
function Fd(a,b,c){Bc();Bi(a);a.bm=(-2);if(b===null)G(CZ());if(c>=2&&c<=36){if(b.i()){GW(a,b,c);return;}G(Bp(D(37)));}G(Bp(D(38)));}
function Ia(a,b,c){var d;Bc();Bi(a);a.bm=(-2);a.h=b;a.g=1;d=U(1);d.data[0]=c;a.a=d;}
function Ji(a,b,c,d){Bc();Bi(a);a.bm=(-2);a.h=b;a.g=c;a.a=d;}
function GF(a,b,c){var d;Bc();Bi(a);a.bm=(-2);a.h=b;if(X(H(c,F(0, 4294967295)),M)){a.g=1;d=U(1);d.data[0]=I(c);a.a=d;}else{a.g=2;a.a=B1([I(c),Vy(c)]);}}
function K6(a,b,c){var d,e;Bc();d=c.data;Bi(a);a.bm=(-2);e=d.length;if(e){a.h=b;a.g=e;a.a=c;Bx(a);}else{a.h=0;a.g=1;d=U(1);d.data[0]=0;a.a=d;}}
function By(b){Bc();if(Bt(b,M)){if(X(b,C(-1)))return We;return RQ((-1),Bo(b));}if(B4(b,C(10)))return RQ(1,b);return Wf.data[I(b)];}
function GW(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;Bc();e=c.i();if(c.o(0)!=45){f=1;g=0;h=e;}else{f=(-1);g=1;h=e+(-1)|0;}T4();i=Wi.data[d];j=h/i|0;k=h%i|0;if(k)j=j+1|0;l=U(j);m=Wj.data[d-2|0];n=0;if(!k)k=i;o=g+k|0;while(g<e){p=l.data;q=EM(c.by(g,o),d);r=GV(l,n,m);s=r+O2(l,n,q)|0;h=n+1|0;p[n]=s;s=o+i|0;n=h;g=o;o=s;}b.h=f;b.g=n;b.a=l;Bx(b);}
function OT(a){if(a.h<0)a=Bl(1,a.g,a.a);return a;}
function P2(a){return !a.h?a:Bl( -a.h|0,a.g,a.a);}
function N6(a,b){return RD(a,b);}
function L7(a,b){return LU(a,b);}
function Rc(a){return a.h;}
function PI(a,b){if(b&&a.h)return b>0?Hu(a,b):GO(a, -b|0);return a;}
function Ls(a,b){if(b&&a.h)return b>0?GO(a,b):Hu(a, -b|0);return a;}
function PB(a){if(a.h)a=LY(a);return a;}
function SD(a){return S0(a);}
function OO(a,b){var c,d,e,f;if(!b)return !(a.a.data[0]&1)?0:1;if(b<0)G(Cj(D(39)));c=b>>5;if(c>=a.g)return a.h>=0?0:1;d=a.a.data[c];e=1<<(b&31);if(a.h<0){f=a.d1();if(c<f)return 0;d=f==c? -d|0:d^(-1);}return !(d&e)?0:1;}
function P6(a){var b;if(!a.h)return (-1);b=a.d1();return (b<<5)+Hv(a.a.data[b])|0;}
function ME(a){var b;b=a.g<=1?H(C(a.a.data[0]),F(4294967295, 0)):Cl(T(C(a.a.data[1]),32),H(C(a.a.data[0]),F(4294967295, 0)));return P(C(a.h),b);}
function Mh(a,b){if(a.h>b.h)return 1;if(a.h<b.h)return (-1);if(a.g>b.g)return a.h;if(a.g<b.g)return  -b.h|0;return BL(a.h,DX(a.a,b.a,a.g));}
function OD(a,b){var c;if(a===b)return 1;if(!(b instanceof Bh))return 0;c=b;return a.h==c.h&&a.g==c.g&&a.hj(c.a)?1:0;}
function Sx(a,b){var c,d;c=a.g-1|0;while(c>=0){d=b.data;if(a.a.data[c]!=d[c])break;c=c+(-1)|0;}return c>=0?0:1;}
function RV(a,b){if(!b.h){Bc();return Wb;}if(a.h)return KO(a,b);Bc();return Wb;}
function Mk(a,b){var c;if(b<0)G(Cj(D(40)));if(!b){Bc();return Wc;}if(b!=1){Bc();if(!a.A(Wc)&&!a.A(Wb)){if(a.cC(0))return JP(a,b);c=1;while(!a.cC(c)){c=c+1|0;}return (KW(BL(c,b))).z((a.cI(c)).bn(b));}}return a;}
function Qw(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=b.h;if(!c)G(Cj(D(41)));d=b.g;e=b.a;if(d==1)return P4(a,e.data[0],c);f=a.a;g=a.g;h=BT(g,d);i=!h?DX(f,e,g):h<=0?(-1):1;if(i<0){j=Bu(Bh,2);k=j.data;Bc();k[0]=Wb;k[1]=a;return j;}l=a.h;m=(g-d|0)+1|0;n=l!=c?(-1):1;o=U(m);p=SP(o,m,f,g,e,d);q=Bl(n,m,o);r=Bl(l,d,p);Bx(q);Bx(r);return BX(Bh,[q,r]);}
function Bx(a){var b,c,d;while(a.g>0){b=a.a.data;c=a.g-1|0;a.g=c;if(b[c])break;}b=a.a.data;d=a.g;a.g=d+1|0;if(!b[d])a.h=0;}
function L9(a){var b;if(a.bm==(-2)){if(!a.h)b=(-1);else{b=0;while(!a.a.data[b]){b=b+1|0;}}a.bm=b;}return a.bm;}
function KW(b){var c,d,e,f,g;Bc();if(b<Wg.data.length)return Wg.data[b];c=b>>5;d=b&31;e=c+1|0;f=U(e);g=f.data;g[c]=1<<d;return Bl(1,e,f);}
function SQ(){var b;Wb=Bq(0,0);Wc=Bq(1,1);Wd=Bq(1,10);We=Bq((-1),1);Wf=BX(Bh,[Wb,Wc,Bq(1,2),Bq(1,3),Bq(1,4),Bq(1,5),Bq(1,6),Bq(1,7),Bq(1,8),Bq(1,9),Wd]);Wg=Bu(Bh,32);b=0;while(b<Wg.data.length){Wg.data[b]=By(T(C(1),b));b=b+1|0;}}
var Gb=E(W);
function Cj(a){var b=new Gb();ON(b,a);return b;}
function ON(a,b){C_(a,b);}
var KJ=E();
function QO(b){var c,d,e,f;c=b.data;d=c.length;e=0;while(true){if(e>=d)return null;f=c[e];if(f!==null)break;e=e+1|0;}return f;}
var Db=E(0);
var CO=E(B$);
function Wk(a){var b=new CO();IU(b,a);return b;}
function Wl(a){var b=new CO();HG(b,a);return b;}
function IU(a,b){FP(a,b);}
function HG(a,b){JW(a,b);}
var CQ=E(CO);
function Wm(a){var b=new CQ();GH(b,a);return b;}
function GH(a,b){IU(a,b);}
var KE=E(DI);
function Oh(){var a=new KE();PX(a);return a;}
function PX(a){Ic(a);}
var CW=E(0);
function Hi(){B.call(this);this.e2=null;}
function Uv(a){var b=new Hi();OX(b,a);return b;}
function OX(a,b){K(a);a.e2=b;}
function Nv(a,b){Kj(a,b);}
function Kj(a,b){Gy(a.e2,b);}
var Fm=E(0);
function Hh(){B.call(this);this.eu=null;}
function Ut(a){var b=new Hh();Sj(b,a);return b;}
function Sj(a,b){K(a);a.eu=b;}
function Nh(a,b){IL(a.eu,b);}
function D1(){B.call(this);this.hf=null;}
var Wn=null;var Wo=null;function RR(){RR=Q(D1);SG();}
function Pi(a){var b=new D1();Gi(b,a);return b;}
function Gi(a,b){RR();K(a);a.hf=b;}
function SG(){Wn=Pi(D(42));Wo=Pi(D(43));}
var J5=E();
function HX(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.eT.data;f=b.f7;b.f7=f+1|0;g=M3(e[f]);h=(g%2|0)!=1?0:1;c=c+BL(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function GR(b){var c,d;c=HX(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function M3(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function Cy(){var a=this;B.call(a);a.x=null;a.s=null;a.B=null;a.v=null;a.cE=0;}
function Wp(){var a=new Cy();Fy(a);return a;}
function Fy(a){K(a);}
function FB(){var a=this;Cy.call(a);a.g3=null;a.gB=null;a.hX=0;a.g1=0;a.gL=0;a.iC=0;a.i0=0;a.hU=M;}
function B0(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=new FB();Mx(n,a,b,c,d,e,f,g,h,i,j,k,l,m);return n;}
function Wq(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=new FB();Gd(n,a,b,c,d,e,f,g,h,i,j,k,l,m);return n;}
function Mx(a,b,c,d,e,f,g,h,i,j,k,l,m,n){Gd(a,BD(b),BD(c),BD(d),BD(e),f,g,h,i,j,k,l,m,n);}
function Gd(a,b,c,d,e,f,g,h,i,j,k,l,m,n){Fy(a);a.x=b;a.s=c;a.B=d;a.v=e;a.g3=f;a.gB=g;a.hX=h;a.g1=i;a.gL=j;a.cE=k;a.iC=l;a.i0=m;a.hU=n;}
var FX=E(0);
var EB=E(0);
var E5=E(0);
var B7=E();
function Dj(a){K(a);}
function LZ(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.ex(f[c]);e=e+1|0;c=g;}}
var EU=E(B7);
var Wr=null;function R0(){R0=Q(EU);N7();}
function TH(){var a=new EU();Kn(a);return a;}
function Kn(a){R0();Dj(a);}
function MV(a,b){PE(b);}
function N7(){Wr=TH();}
var BG=E();
var G3=E(BG);
var FK=E();
var Ws=null;function Is(){return (D4()).hJ();}
function PD(b){return (D4()).b3(b);}
function QZ(b){return (D4()).dr(b);}
function M7(b){return (D4()).bj(b);}
function S1(b){Ws=b;}
function D4(){var b;if(Ws===null){b=TL();D6();S1(Fp(J(Df),b,Wt));if(Ws===null){(H0()).fg(D(44));Ws=Uu();}}return Ws;}
function O4(){return GY(J(Df));}
function CN(){var a=this;B.call(a);a.c=null;a.p=0;}
function Wu(){var a=new CN();EV(a);return a;}
function UI(a){var b=new CN();Ez(b,a);return b;}
function EV(a){Ez(a,16);}
function Ez(a,b){K(a);a.c=BU(b);}
function Kw(a,b){return a.fd(a.p,b);}
function EN(a,b){return a.cA(a.p,b);}
function Fj(a,b,c){var d,e,f;if(b>=0&&b<=a.p){if(c===null)c=D(5);else if(c.bM())return a;a.bI(a.p+c.i()|0);d=a.p-1|0;while(d>=b){a.c.data[d+c.i()|0]=a.c.data[d];d=d+(-1)|0;}a.p=a.p+c.i()|0;d=0;while(d<c.i()){e=a.c.data;f=b+1|0;e[b]=c.o(d);d=d+1|0;b=f;}return a;}G(Oh());}
function HM(a,b){return a.eB(b,10);}
function Ms(a,b,c){return a.gK(a.p,b,c);}
function Rr(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)Bk(a,b,b+1|0);else{Bk(a,b,b+2|0);f=a.c.data;g=b+1|0;f[b]=45;b=g;}a.c.data[b]=CP(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=BL(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;Bk(a,b,b+i|0);if(e)l=b;else{f=a.c.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.c.data;g=l+1|0;f[l]=CP(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function Kc(a,b){return a.eM(a.p,b);}
function K2(a,b,c){return a.h_(b,c,10);}
function LI(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(Bt(c,M)){e=0;c=Bo(c);}a:{f=C(d);if(Bt(c,f)){if(e)Bk(a,b,b+1|0);else{Bk(a,b,b+2|0);g=a.c.data;h=b+1|0;g[b]=45;b=h;}a.c.data[b]=CP(I(c),d);}else{i=1;j=C(1);while(true){k=P(j,f);if(Bm(k,j))break;if(B4(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;Bk(a,b,b+i|0);if(e)l=b;else{g=a.c.data;l=b+1|0;g[b]=45;}while(true){if(Bm(j,M))break a;g=a.c.data;h=l+1|0;g[l]=CP(I(Be(c,j)),d);c=BJ(c,j);j=Be(j,f);l=h;}}}return a;}
function Js(a,b){return a.ef(a.p,b);}
function IR(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=BT(c,0.0);if(!d){Bk(a,b,b+3|0);e=a.c.data;d=b+1|0;e[b]=48;e=a.c.data;f=d+1|0;e[d]=46;a.c.data[f]=48;return a;}if(!d){Bk(a,b,b+4|0);e=a.c.data;d=b+1|0;e[b]=45;e=a.c.data;f=d+1|0;e[d]=48;e=a.c.data;d=f+1|0;e[f]=46;a.c.data[d]=48;return a;}if(isNaN(c)?1:0){Bk(a,b,b+3|0);e=a.c.data;d=b+1|0;e[b]=78;e=a.c.data;f=d+1|0;e[d]=97;a.c.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bk(a,b,b+8|0);d=b;}else{Bk(a,b,b+9|0);e=a.c.data;d=b+1|0;e[b]=45;}e=a.c.data;f=d+
1|0;e[d]=73;e=a.c.data;d=f+1|0;e[f]=110;e=a.c.data;f=d+1|0;e[d]=102;e=a.c.data;d=f+1|0;e[f]=105;e=a.c.data;f=d+1|0;e[d]=110;e=a.c.data;d=f+1|0;e[f]=105;e=a.c.data;f=d+1|0;e[d]=116;a.c.data[f]=121;return a;}OR();g=VT;KA(c,g);h=g.c1;i=g.dk;j=g.eA;k=1;l=1;if(j)l=2;m=18;n=NB(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Bw(m,k+1|0);i=0;}else{h=Be(h,VR.data[ -i|0]);m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(!(i>(-100)&&i<100))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;Bk(a,b,b+d|0);if
(!j)o=b;else{e=a.c.data;o=b+1|0;e[b]=45;}p=F(1569325056, 23283064);q=0;while(q<m){if(Bm(p,M))r=0;else{r=I(Be(h,p));h=BJ(h,p);}e=a.c.data;d=o+1|0;e[o]=(48+r|0)&65535;k=k+(-1)|0;if(k)o=d;else{e=a.c.data;o=d+1|0;e[d]=46;}p=Be(p,C(10));q=q+1|0;}if(i){e=a.c.data;d=o+1|0;e[o]=69;if(i>=0)f=d;else{i= -i|0;e=a.c.data;f=d+1|0;e[d]=45;}if(i>=100){e=a.c.data;d=f+1|0;e[f]=(48+(i/100|0)|0)&65535;i=i%100|0;e=a.c.data;o=d+1|0;e[d]=(48+(i/10|0)|0)&65535;}else if(i<10)o=f;else{e=a.c.data;o=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.c.data[o]
=(48+(i%10|0)|0)&65535;}return a;}
function NB(b){var c,d,e,f;c=C(1);d=0;e=16;OR();f=VS.data.length-1|0;while(f>=0){if(X(BJ(b,P(c,VS.data[f])),M)){d=d|e;c=P(c,VS.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function KM(a,b){return a.fE(a.p,b);}
function KC(a,b,c){Bk(a,b,b+1|0);a.c.data[b]=c;return a;}
function Jj(a,b,c){return a.cA(b,c===null?D(5):c.f());}
function EQ(a,b){var c;if(a.c.data.length>=b)return;c=a.c.data.length>=1073741823?2147483647:Bw(b,Bw(a.c.data.length*2|0,5));a.c=MM(a.c,c);}
function Eq(a){return If(a.c,0,a.p);}
function J6(a){return a.p;}
function GL(a,b){if(b>=0&&b<a.p)return a.c.data[b];G(Dz());}
function HV(a,b,c,d){return a.eb(a.p,b,c,d);}
function GJ(a,b,c,d,e){var f,g;if(d<=e&&e<=c.i()&&d>=0){Bk(a,b,(b+e|0)-d|0);while(d<e){f=a.c.data;g=b+1|0;f[b]=c.o(d);d=d+1|0;b=g;}return a;}G(Dz());}
function Kp(a,b,c,d){return a.eK(a.p,b,c,d);}
function GN(a,b,c,d,e){var f,g,h,i,j;Bk(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.c.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function JQ(a,b,c,d,e){var f,g,h,i;if(b>c)G(CF(D(45)));while(b<c){f=d.data;g=e+1|0;h=a.c.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function JJ(a,b){a.p=b;}
function Bk(a,b,c){var d,e;d=a.p-b|0;a.bI((a.p+c|0)-b|0);e=d-1|0;while(e>=0){a.c.data[c+e|0]=a.c.data[b+e|0];e=e+(-1)|0;}a.p=a.p+(c-b|0)|0;}
var C$=E(0);
var Gx=E(CN);
function LF(a){var b=new Gx();Sb(b,a);return b;}
function V(){var a=new Gx();RL(a);return a;}
function Sb(a,b){Ez(a,b);}
function RL(a){EV(a);}
function Ce(a,b){Kw(a,b);return a;}
function LN(a,b){EN(a,b);return a;}
function L$(a,b){HM(a,b);return a;}
function Qz(a,b){Kc(a,b);return a;}
function OU(a,b){Js(a,b);return a;}
function LA(a,b){KM(a,b);return a;}
function OJ(a,b,c,d){Kp(a,b,c,d);return a;}
function Ra(a,b,c,d){HV(a,b,c,d);return a;}
function PW(a,b,c){K2(a,b,c);return a;}
function RA(a,b,c){IR(a,b,c);return a;}
function Mf(a,b,c,d,e){GJ(a,b,c,d,e);return a;}
function Ov(a,b,c,d,e){GN(a,b,c,d,e);return a;}
function Sg(a,b,c){Jj(a,b,c);return a;}
function MJ(a,b,c){KC(a,b,c);return a;}
function St(a,b,c){Fj(a,b,c);return a;}
function SC(a,b){JJ(a,b);}
function Ps(a,b,c,d,e){JQ(a,b,c,d,e);}
function So(a,b,c,d,e){return a.i9(b,c,d,e);}
function Nn(a,b,c,d,e){return a.hE(b,c,d,e);}
function Ql(a,b){return GL(a,b);}
function Nj(a){return J6(a);}
function DE(a){return Eq(a);}
function SE(a,b){EQ(a,b);}
function LQ(a,b,c){return a.hl(b,c);}
function Ll(a,b,c){return a.iv(b,c);}
function Pp(a,b,c){return a.hs(b,c);}
function Oc(a,b,c){return a.hS(b,c);}
function SO(a,b,c){return a.ha(b,c);}
var Fk=E(0);
var De=E(0);
function L0(a,b,c){return a.f8(b,a.gT(c));}
var DP=E(0);
function OF(a){return U7();}
function RJ(a,b){if(b!==null&&!BF(b,De))return UX(b);return b;}
function Sl(a,b){if(b!==null&&!BF(b,C0))return UM(b);return b;}
function NA(a,b){if(b===null){Bn();return VG;}if(!BF(b,Cd)&&!BF(b,C8)){if(!BF(b,Cv)&&!BF(b,C6)){if(b instanceof BY){Bn();return VJ;}if(b instanceof B3){Bn();return VM;}if(!Km(b)){Bn();return VL;}Bn();return VJ;}Bn();return VI;}Bn();return VH;}
function Dn(){B.call(this);this.eg=0;}
function G1(a){K(a);a.gz();}
function Kx(a,b){K(a);a.dt(b);}
function Pd(a){a.dt(a.dD());}
function L4(a){a.dt(Fi(a.cd()));}
function Q$(a){return a.d8(UC((a.cd()).i7()));}
function R7(a,b){return (a.cd()).cV(b);}
function NM(a,b,c){a.g0();(a.cd()).br(b,c);return a;}
function Sq(a){if(a.eg){a.hx();a.eg=0;}}
function Sd(a){return a.es();}
function Rb(a,b,c){return a.gP(b,c);}
var JO=E(W);
function NF(){var a=new JO();Sv(a);return a;}
function Sv(a){BK(a);}
var FJ=E(0);
var FS=E(0);
function Io(){B.call(this);this.ge=null;}
function UE(a){var b=new Io();Su(b,a);return b;}
function Su(a,b){K(a);a.ge=b;}
function Lk(a,b){return Hc(a,b);}
function Hc(a,b){return Ot(a.ge,b);}
var Dl=E(0);
var JS=E();
function Um(){var a=new JS();RX(a);return a;}
function RX(a){K(a);}
function La(a){return GM(a);}
function GM(a){return R$();}
var C5=E(0);
function Rd(a,b,c){return (a.gV(b)).ii(UE(c));}
function Ot(b,c){return c.gs(b);}
var EJ=E();
var Wv=null;function Ww(){var a=new EJ();NK(a);return a;}
function NK(a){K(a);}
function Ns(a){if(Wv===null)Wv=C2(M5()?1:0);return Wv.fk();}
function NN(a,b){var c,d;c=E3();d=U5(c);MH($rt_ustr(b),CT(d,"handle"));return c;}
function O9(b,c){b.c8(Te(c));}
function M5(){{try {if(typeof WebAssembly==="object"&&typeof WebAssembly.instantiate==="function"){const module=new WebAssembly.Module(Uint8Array.of(0x0,0x61,0x73,0x6d,0x01,0x00,0x00,0x00));if(module instanceof WebAssembly.Module)return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;}}catch(e){}return false;}}
function MH(b,c){((fetch(b)).then(function(response){return WebAssembly.compileStreaming(response);})).then(function(module){return c(module);});}
var Hz=E(CO);
function TV(a){var b=new Hz();LO(b,a);return b;}
function LO(a,b){HG(a,b);}
function DK(){B.call(this);this.dz=null;}
function IX(a){K(a);}
function No(a){var b,c,d;b=V();b.n(123);c=(a.f9()).bg();if(c.bb()){d=c.S();b.Z(d.bt()!==a?d.bt():D(46));b.n(61);b.Z(d.bR()!==a?d.bR():D(46));}while(c.bb()){b.d(D(47));d=c.S();b.Z(d.bt()!==a?d.bt():D(46));b.n(61);b.Z(d.bR()!==a?d.bR():D(46));}b.n(125);return b.f();}
var CC=E(0);
function D7(){var a=this;DK.call(a);a.D=0;a.m=null;a.L=0;a.gg=0.0;a.b$=0;}
function ST(){var a=new D7();I3(a);return a;}
function Wx(a){var b=new D7();Eg(b,a);return b;}
function Wy(a,b){var c=new D7();Ky(c,a,b);return c;}
function QB(a,b){return Bu(CU,b);}
function I3(a){Eg(a,16);}
function Eg(a,b){Ky(a,b,0.75);}
function Ko(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function Ky(a,b,c){var d;IX(a);if(b>=0&&c>0.0){d=Ko(b);a.D=0;a.m=a.dp(d);a.gg=c;E_(a);return;}G(HZ());}
function E_(a){a.b$=a.m.data.length*a.gg|0;}
function QI(a,b){var c;c=GT(a,b);if(c===null)return null;return c.Y;}
function GT(a,b){var c,d,e;if(b===null)c=Di(a);else{d=E4(b);e=d&(a.m.data.length-1|0);c=C7(a,b,e,d);}return c;}
function C7(a,b,c,d){var e,f;e=a.m.data[c];while(e!==null){if(e.ch==d){f=e.bh;if(Hn(b,f))break;}e=e.O;}return e;}
function Di(a){var b;b=a.m.data[0];while(b!==null&&b.bh!==null){b=b.O;}return b;}
function L8(a,b,c){return a.dU(b,c);}
function Qq(a,b,c){var d,e,f,g,h;if(b===null){d=Di(a);if(d===null){a.L=a.L+1|0;d=a.bX(null,0,0);e=a.D+1|0;a.D=e;if(e>a.b$)a.cr();}}else{f=E4(b);g=f&(a.m.data.length-1|0);d=C7(a,b,g,f);if(d===null){a.L=a.L+1|0;d=a.bX(b,g,f);e=a.D+1|0;a.D=e;if(e>a.b$)a.cr();}}h=d.Y;d.Y=c;return h;}
function N2(a,b,c,d){var e;e=T_(b,d);e.O=a.m.data[c];a.m.data[c]=e;return e;}
function Qh(a,b){var c,d,e,f,g,h,i;c=Ko(!b?1:b<<1);d=a.dp(c);e=0;while(e<a.m.data.length){f=a.m.data[e];a.m.data[e]=null;while(f!==null){g=d.data;h=f.ch&(c-1|0);i=f.O;f.O=g[h];g[h]=f;f=i;}e=e+1|0;}a.m=d;E_(a);}
function Or(a){a.hA(a.m.data.length);}
function HR(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.m.data[0];while(e!==null){if(e.bh===null)break a;f=e.O;d=e;e=f;}}else{g=E4(b);c=g&(a.m.data.length-1|0);e=a.m.data[c];while(e!==null&&!(e.ch==g&&Hn(b,e.bh))){f=e.O;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.O=e.O;else a.m.data[c]=e.O;a.L=a.L+1|0;a.D=a.D-1|0;return e;}
function On(a){return a.D;}
function E4(b){return b.b1();}
function Hn(b,c){return b!==c&&!b.A(c)?0:1;}
function G_(){var a=this;D7.call(a);a.b5=0;a.N=null;a.w=null;}
function U7(){var a=new G_();MO(a);return a;}
function Ty(a){var b=new G_();Of(b,a);return b;}
function MO(a){I3(a);a.b5=0;a.N=null;}
function Of(a,b){Eg(a,b);a.b5=0;a.N=null;}
function Nx(a,b){return Bu(FC,b);}
function LK(a,b){var c,d,e,f,g;if(b===null)c=Di(a);else{d=b.b1();e=(d&2147483647)%a.m.data.length|0;c=C7(a,b,e,d);}if(c===null)return null;if(a.b5&&a.w!==c){f=c.H;g=c.y;g.H=f;if(f===null)a.N=g;else f.y=g;c.y=null;c.H=a.w;a.w.y=c;a.w=c;}return c.Y;}
function Sh(a,b,c,d){var e;e=TN(b,d);e.O=a.m.data[c];a.m.data[c]=e;a.dR(e);return e;}
function QW(a,b,c){var d;d=a.dU(b,c);if(a.iq(a.N))a.gF(a.N.bh);return d;}
function Si(a,b,c){var d,e,f,g,h,i;if(!a.D){a.N=null;a.w=null;}if(b===null){d=Di(a);if(d!==null)a.dR(d);else{a.L=a.L+1|0;e=a.D+1|0;a.D=e;if(e>a.b$)a.cr();d=a.bX(null,0,0);}}else{f=b.b1();e=f&2147483647;g=e%a.m.data.length|0;d=C7(a,b,g,f);if(d!==null)a.dR(d);else{a.L=a.L+1|0;h=a.D+1|0;a.D=h;if(h>a.b$){a.cr();g=e%a.m.data.length|0;}d=a.bX(b,g,f);}}i=d.Y;d.Y=c;return i;}
function Lz(a,b){var c,d;if(a.w===b)return;if(a.N===null){a.N=b;a.w=b;return;}c=b.H;d=b.y;if(c!==null){if(d===null)return;if(a.b5){c.y=d;d.H=c;b.y=null;b.H=a.w;a.w.y=b;a.w=b;}return;}if(d===null){b.H=a.w;b.y=null;a.w.y=b;a.w=b;}else if(a.b5){a.N=d;d.H=null;b.H=a.w;b.y=null;a.w.y=b;a.w=b;}}
function Qr(a){return TO(a);}
function OL(a){if(a.dz===null)a.dz=Tk(a);return a.dz;}
function Oz(a,b){var c,d,e;c=HR(a,b);if(c===null)return null;d=c.H;e=c.y;if(d===null)a.N=e;else d.y=e;if(e===null)a.w=d;else e.H=d;return c.Y;}
function LP(a,b){return 0;}
function QL(b){return b.N;}
var HN=E(CN);
function Oq(){var a=new HN();QS(a);return a;}
function QS(a){EV(a);}
function OZ(a,b){EN(a,b);return a;}
function O0(a,b,c){Fj(a,b,c);return a;}
function NC(a){return Eq(a);}
function NU(a,b){EQ(a,b);}
function LJ(a,b,c){return a.h$(b,c);}
function CM(){var a=this;B.call(a);a.fS=0;a.E=0;a.bc=0;a.ci=0;}
function Fq(a,b){K(a);a.ci=(-1);a.fS=b;a.bc=b;}
function CV(a){return a.E;}
function JK(a,b){if(b>=0&&b<=a.bc){a.E=b;if(b<a.ci)a.ci=0;return a;}G(Cb(((((((V()).d(D(48))).t(b)).d(D(49))).t(a.bc)).d(D(50))).f()));}
function H8(a){a.E=0;a.bc=a.fS;a.ci=(-1);return a;}
function B5(a){return a.bc-a.E|0;}
function Cn(a){return a.E>=a.bc?0:1;}
function B_(){var a=this;B.call(a);a.g_=null;a.fa=0;}
function D0(a,b,c){K(a);a.g_=b;a.fa=c;}
function Bb(a){return a.fa;}
var Ch=E(B_);
var Wz=null;var Wt=null;var WA=null;var WB=null;function D6(){D6=Q(Ch);Qs();}
function Id(a,b){var c=new Ch();JA(c,a,b);return c;}
function JA(a,b,c){D6();D0(a,b,c);}
function Ge(){D6();return BX(Ch,[Wz,Wt,WA]);}
function Qs(){Wz=Id(D(51),0);Wt=Id(D(52),1);WA=Id(D(53),2);WB=Ge();}
function CK(){var a=this;B.call(a);a.gc=0;a.ca=null;a.dJ=null;a.gl=null;}
function WC(a){var b=new CK();Ep(b,a);return b;}
function Ep(a,b){K(a);a.gc=b.L;a.ca=QL(b);a.gl=b;}
function NI(a){return a.ca===null?0:1;}
function KP(a){if(a.gc==a.gl.L)return;G(NF());}
function FR(a){KP(a);if(!a.bb())G(Pa());a.dJ=a.ca;a.ca=a.ca.y;}
var CD=E(0);
var JD=E(CK);
function UO(a){var b=new JD();PM(b,a);return b;}
function PM(a,b){Ep(a,b);}
function Nu(a){FR(a);return a.dJ;}
function Q_(a){return a.hV();}
var Ef=E(0);
function D8(){var a=this;B.call(a);a.bh=null;a.Y=null;}
function WD(a,b){var c=new D8();K1(c,a,b);return c;}
function K1(a,b,c){K(a);a.bh=b;a.Y=c;}
function Rj(a){return a.bh;}
function Se(a){return a.Y;}
function CU(){var a=this;D8.call(a);a.ch=0;a.O=null;}
function T_(a,b){var c=new CU();HW(c,a,b);return c;}
function HW(a,b,c){K1(a,b,null);a.ch=c;}
function FC(){var a=this;CU.call(a);a.y=null;a.H=null;}
function TN(a,b){var c=new FC();Qm(c,a,b);return c;}
function Qm(a,b,c){HW(a,b,c);a.y=null;a.H=null;}
var Ee=E();
var CL=E(CQ);
function WE(a){var b=new CL();FE(b,a);return b;}
function FE(a,b){GH(a,b);}
var JR=E(CL);
function WF(a){var b=new JR();Oi(b,a);return b;}
function Oi(a,b){FE(a,b);}
var E2=E(BR);
var FO=E(0);
var HC=E();
function UB(){var a=new HC();Ne(a);return a;}
function Ne(a){K(a);}
function G$(){var a=this;B.call(a);a.cH=0;a.fL=0;a.fN=0;a.en=0;a.bS=null;}
function Tq(a){var b=new G$();Nr(b,a);return b;}
function Nr(a,b){a.bS=b;K(a);a.fL=a.bS.cx;a.fN=a.bS.J();a.en=(-1);}
function L5(a){return a.cH>=a.fN?0:1;}
function Qk(a){var b,c;Iu(a);a.en=a.cH;b=a.bS;c=a.cH;a.cH=c+1|0;return b.eq(c);}
function Iu(a){if(a.fL>=a.bS.cx)return;G(NF());}
var DA=E(0);
function D3(){var a=this;B.call(a);a.iB=null;a.it=null;a.e1=null;a.gx=null;a.i5=null;a.bq=0;a.ej=0;}
function WG(a,b){var c=new D3();GZ(c,a,b);return c;}
function GZ(a,b,c){K(a);a.iB=b.fn;a.it=b.eI;a.e1=b.eC;a.gx=b.ee;a.i5=b.gf;a.gm(c);}
function S4(a,b){a.ej=b;a.bq=b;}
function LL(a){a.bq=a.ej;}
var DY=E(W);
function Ul(){var a=new DY();Gp(a);return a;}
function Gp(a){BK(a);}
var KY=E(DY);
function S7(){var a=new KY();RW(a);return a;}
function RW(a){Gp(a);}
var Fs=E(0);
var EO=E(0);
var GX=E();
function H_(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(HZ());}return b.data.length;}
function N4(b,c){if(b===null)G(CZ());if(b===J($rt_voidcls()))G(HZ());if(c<0)G(Uw());return Rg(b.f3(),c);}
function Rg(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Du=E(0);
var DF=E(0);
var KV=E();
function Uc(){var a=new KV();N9(a);return a;}
function N9(a){K(a);}
function Md(b){Jv(b,Uc());b.iY();}
function Sk(a,b){if(!(b instanceof B3))self.postMessage(b);else self.postMessage($rt_ustr(b));}
function RF(a,b){var c,d,e,f,g;c=b.data;d=c.length;e=new Array();f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function Qf(a,b){self.onmessage=CT(T7(b),"handleEvent");}
function P0(b,c){b.g2(c.data);}
var I$=E(BG);
function I9(){var a=this;B.call(a);a.cU=0;a.cM=null;}
function TK(a){var b=new I9();Na(b,a);return b;}
function Na(a,b){a.cM=b;K(a);}
function RB(a){return a.cU>=(FZ(a.cM)).data.length?0:1;}
function M2(a){var b,c;if(a.cU==(FZ(a.cM)).data.length)G(Pa());b=(FZ(a.cM)).data;c=a.cU;a.cU=c+1|0;return b[c];}
function HK(){var a=this;B.call(a);a.c1=M;a.dk=0;a.eA=0;}
function Tn(){var a=new HK();NG(a);return a;}
function NG(a){K(a);}
var IM=E();
var Hq=E(CL);
function WH(a){var b=new Hq();NZ(b,a);return b;}
function NZ(a,b){FE(a,b);}
var Fn=E(0);
function E3(){return U6();}
function PZ(a,b){if(!b.fq())a.c0(b.fe());else a.c8(b.dx());}
function R1(a){return TC(a);}
function Rt(a,b){var c;c=E3();a.c3(TM(b,c));return c;}
function OI(b,c,d){var e,f,g,$$je;if(!d.fq())c.c0(d.fe());else{try{e=b.gh(d.dx());}catch($$e){$$je=D$($$e);if($$je instanceof B$){g=$$je;f=FY();GI();f.iZ(WI,D(54),g);c.c0(g);return;}else{throw $$e;}}e.c3(c.hc());}}
function Jp(){var a=this;B.call(a);a.dM=0;a.bQ=0;a.d0=null;a.fx=null;a.eX=null;}
function U6(){var a=new Jp();NE(a);return a;}
function NE(a){K(a);}
function R_(a){return a.fx;}
function MR(a){return a.eX;}
function Qi(a){return a.bQ;}
function Mv(a){return !a.dM&&!a.bQ?0:1;}
function RY(a,b){a.d0=b;Ea(a);}
function Qe(a,b){FM(a);a.fx=b;a.bQ=1;Ea(a);}
function NO(a,b){FM(a);a.eX=b;a.dM=1;Ea(a);}
function Ea(a){var b,$$je;a:{if(a.d0!==null&&a.iz()){try{a.d0.dh(a);break a;}catch($$e){$$je=D$($$e);if($$je instanceof B$){b=$$je;}else{throw $$e;}}b.i1();}}}
function FM(a){var b,c,d;if(!a.bQ&&!a.dM)return;b=new Ex;c=!a.bQ?D(55):D(56);d=V();Ce(Ce(d,D(57)),c);HB(b,DE(d));G(b);}
var DV=E(0);
var CX=E(0);
var Cu=E();
function FH(a){K(a);}
var IO=E();
function LE(b,c){var d,e,f,g,h,i,j,k;if(!b)return D(6);d=1<<c;e=d-1|0;f=(((32-Cx(b)|0)+c|0)-1|0)/c|0;g=BU(f);h=BL(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=CP(b>>>h&e,d);h=h-c|0;i=k;}return S9(g);}
function F6(){Ba.call(this);this.iV=0;}
var WJ=null;function Qg(){Qg=Q(F6);Ny();}
function UV(a){var b=new F6();H4(b,a);return b;}
function H4(a,b){Qg();Bi(a);a.iV=b;}
function Gw(b){Qg();return UV(b);}
function Ny(){WJ=J($rt_shortcls());}
var Ey=E(0);
var KZ=E();
function Uh(){var a=new KZ();Nl(a);return a;}
function Nl(a){K(a);}
var F9=E(0);
function K4(){var a=this;B.call(a);a.cL=0;a.cJ=null;}
function NV(){var a=new K4();Ru(a);return a;}
function Ru(a){K(a);}
function QC(a){return null;}
function Rh(a){if(!a.cL){a.cJ=a.gX();a.cL=1;}return a.cJ;}
function Mq(a,b){a.cL=1;a.cJ=b;}
function MN(a){a.cL=0;a.cJ=null;}
var Ix=E();
function CT(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function H9(){B.call(this);this.f2=null;}
function Tb(a){var b=new H9();Qd(b,a);return b;}
function Qd(a,b){K(a);a.f2=b;}
function HQ(a){return TK(a);}
function GY(b){return Tb(QK(b.f3()));}
function QK(b){var c;c=LX(b);if(c===null)c=Bu(B,0);return c;}
function LX(b){if (!H9.$$services$$) {H9.$$services$$ = true;C5.$$serviceList$$ = [[EJ, NK]];Df.$$serviceList$$ = [[FG, Lq]];}var cls = b;if (!cls.$$serviceList$$) {return $rt_createArray($rt_objcls(), 0);}var result = $rt_createArray($rt_objcls(), cls.$$serviceList$$.length);for (var i = 0; i < result.data.length; ++i) {var serviceDesc = cls.$$serviceList$$[i];result.data[i] = new serviceDesc[0]();serviceDesc[1](result.data[i]);}return result;}
function FZ(b){return b.f2;}
var H5=E();
function RN(b){var c,d,e,f,g,h,i,j,k;c=TY(b.f_());d=HX(c);e=U(d*2|0);f=0;g=0;h=0;i=0;while(i<d){j=e.data;g=g+GR(c)|0;h=h+GR(c)|0;k=f+1|0;j[f]=g;f=k+1|0;j[k]=h;i=i+1|0;}return e;}
function Dk(){var a=this;B.call(a);a.gY=null;a.dP=null;a.g9=0.0;a.ed=0.0;a.ds=null;a.d3=null;a.bD=0;}
function Kr(a,b,c,d,e){K(a);FL();a.ds=WK;a.d3=WK;Ki(a,e);a.gY=b;a.dP=e.cR();a.g9=c;a.ed=d;}
function JU(a,b,c,d){var e;e=Iq(1);e.data[0]=63;Kr(a,b,c,d,e);}
function Ki(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.ed)return;}G(Cb(D(58)));}
function F_(a,b){if(b!==null){a.ds=b;a.is(b);return a;}G(Cb(D(59)));}
function R3(a,b){}
function Kk(a,b){if(b!==null){a.d3=b;a.hT(b);return a;}G(Cb(D(59)));}
function Rp(a,b){}
function Hw(a,b,c,d){var e,f,g,h,$$je;a:{if(a.bD!=3){if(d)break a;if(a.bD!=2)break a;}G(Ni());}a.bD=!d?1:2;while(true){try{e=a.hn(b,c);}catch($$e){$$je=D$($$e);if($$je instanceof W){f=$$je;G(TV(f));}else{throw $$e;}}if(e.gp()){if(!d)return e;g=B5(b);if(g<=0)return e;e=DB(g);}else if(e.df())break;h=!e.fU()?a.ds:a.d3;b:{FL();if(h!==WL){if(h===WM)break b;else return e;}if(B5(c)<a.dP.data.length)return WN;JH(c,a.dP);}b.eQ(CV(b)+e.i()|0);}return e;}
function GD(a,b){var c;if(a.bD!=2&&a.bD!=4)G(Ni());c=a.gG(b);BN();if(c===WO)a.bD=3;return c;}
function Lx(a,b){BN();return WO;}
var B6=E();
var WP=null;var WQ=null;var WR=null;var WS=null;var WT=null;var WU=null;function EA(){EA=Q(B6);R6();}
function Km(b){EA();return b instanceof Ba;}
function J9(b){EA();return b===null?null:b instanceof CI?b:!(b instanceof Ba)?null:Br(b.Q());}
function Jg(b){var c,$$je;EA();if(b===null)return null;a:{try{c=Br(DN(b));}catch($$e){$$je=D$($$e);if($$je instanceof ER){break a;}else{throw $$e;}}return c;}return null;}
function Fz(b){var c;EA();c=J9(b);if(c===null&&b!==null)return Jg(b.f());return c;}
function R6(){WP=KK(0);WQ=Gw(0);WR=Br(0);WS=EC(M);WT=KR(0.0);WU=Ft(0.0);}
function C1(){var a=this;Cy.call(a);a.dN=0;a.e4=0;a.eU=0;a.cD=0;}
var WV=null;var WW=null;var WX=null;function Cq(){Cq=Q(C1);PT();}
function UD(){var a=new C1();Hb(a);return a;}
function Hb(a){Cq();Fy(a);}
function Jz(a){Hr(a,0.9);}
function Jk(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;a.dN=b|0;a.e4=c|0;if(a.x.bw()<23){d=a.x;Cq();a.x=d.F(23,WV);}if(a.s.bw()<23){d=a.s;Cq();a.s=d.F(23,WV);}if(a.B.bw()<23){d=a.B;Cq();a.B=d.F(23,WV);}if(a.v.bw()<23){d=a.v;Cq();a.v=d.F(23,WV);}d=a.s.P(a.x);e=Bw(a.s.bw(),15)*2|0;Cq();f=d.F(e,WV);g=f.I(Q3(b),WV);h=0;while(g.dy(WW)<0){h=h+1|0;g=g.cK(WX);}if(h<15)h=15;i=(h+5|0)+((h-10|0)/10|0)|0;a.x=a.x.F(i,WV);a.s=a.s.F(i,WV);a.B=a.B.F(i,WV);a.v=a.v.F(i,WV);j=a.s.P(a.x);k=a.v.P(a.B);l=j.I(k,WV);m=Q3(b/c);if(l.dy(m)
<0){n=(j.cK(m)).I(l,WV);o=(a.s.bd(a.x)).I(WW,WV);a.s=(o.bd(n.I(WW,WV))).F(i,WV);a.x=(o.P(n.I(WW,WV))).F(i,WV);}else if(l.dy(m)>0){p=(k.cK(l)).I(m,WV);o=(a.v.bd(a.B)).I(WW,WV);a.v=(o.bd(p.I(WW,WV))).F(i,WV);a.B=(o.P(p.I(WW,WV))).F(i,WV);}}
function Hr(a,b){var c,d,e,f,g;c=a.x.bd(a.s);Cq();d=c.I(WW,WV);e=(a.B.bd(a.v)).I(WW,WV);f=BD((a.s.P(a.x)).R()/2.0*b);g=BD((a.v.P(a.B)).R()/2.0*b);a.x=d.P(f);a.s=d.bd(f);a.B=e.P(g);a.v=e.bd(g);}
function I0(b){var c;Cq();c=UD();c.x=BD(b.x.R());c.s=BD(b.s.R());c.B=BD(b.B.R());c.v=BD(b.v.R());c.cE=b.cE;return c;}
function PT(){F2();WV=V3;WW=Iv(D(60));WX=Iv(D(61));}
var J3=E(W);
function I2(){var a=new J3();PN(a);return a;}
function PN(a){BK(a);}
var C6=E(0);
function PP(a,b){return a.bj(a.c9(b));}
function DM(){var a=this;CM.call(a);a.fY=0;a.eJ=null;a.i8=null;}
function Hd(a,b,c,d,e,f){Fq(a,c);RR();a.i8=Wn;a.fY=b;a.eJ=d;a.E=e;a.bc=f;}
function RI(b,c,d){return Ue(0,b.data.length,b,c,c+d|0,0,0);}
function Ph(b){return RI(b,0,b.data.length);}
function QQ(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.gv())G(S7());if(B5(a)<d)G(TI());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(CF((((((V()).d(D(62))).t(g)).d(D(63))).t(f)).f()));if(d<0)G(CF(((((V()).d(D(64))).t(d)).d(D(65))).f()));h=a.E+a.fY|0;i=0;while(i<d){j=a.eJ.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.E=a.E+d|0;return a;}}e=b.data;G(CF(((((((V()).d(D(66))).t(c)).d(D(49))).t(e.length)).d(D(67))).f()));}
function JH(a,b){return a.fl(b,0,b.data.length);}
function ES(a){H8(a);return a;}
function J8(){var a=this;DM.call(a);a.gw=0;a.ep=0;}
function Ue(a,b,c,d,e,f,g){var h=new J8();L1(h,a,b,c,d,e,f,g);return h;}
function L1(a,b,c,d,e,f,g,h){Hd(a,b,c,d,e,f);a.gw=g;a.ep=h;}
function QD(a){return a.ep;}
function GC(){var a=this;B.call(a);a.fF=null;a.e_=null;a.dZ=null;a.e5=null;a.bL=null;}
function Tv(){var a=new GC();SJ(a);return a;}
function SJ(a){K(a);}
function J$(a,b,c){if(b!==null)a.fF=b;if(c!==null)a.e_=c;return a;}
function JL(a){var b;if(a.dZ===null){b=HQ(a.fF.bk());if(b.bb())a.dZ=b.S();}return a.dZ;}
function Kf(a){var b,c;a:{if(a.bL===null){a.bL=JL(a);if(a.e5!==null){b=a.e5.bg();while(true){if(!b.bb())break a;c=b.S();a.bL=c.gh(a.bL);}}}}return a.bL;}
var BM=E(B_);
var VM=null;var VJ=null;var VK=null;var VH=null;var VI=null;var VG=null;var VL=null;var WY=null;function Bn(){Bn=Q(BM);M1();}
function Cz(a,b){var c=new BM();JZ(c,a,b);return c;}
function Fh(){Bn();return WY.cR();}
function JZ(a,b,c){Bn();D0(a,b,c);}
function Jx(){Bn();return BX(BM,[VM,VJ,VK,VH,VI,VG,VL]);}
function M1(){VM=Cz(D(68),0);VJ=Cz(D(69),1);VK=Cz(D(70),2);VH=Cz(D(71),3);VI=Cz(D(72),4);VG=Cz(D(73),5);VL=Cz(D(74),6);WY=Jx();}
function BP(){var a=this;B.call(a);a.io=null;a.f0=0;}
var WZ=null;var WI=null;var W0=null;var W1=null;var W2=null;var W3=null;var W4=null;var W5=null;var W6=null;function GI(){GI=Q(BP);Pz();}
function Ca(a,b){var c=new BP();KG(c,a,b);return c;}
function KG(a,b,c){GI();K(a);a.io=b;a.f0=c;}
function Dh(a){return a.f0;}
function Pz(){WZ=Ca(D(75),2147483647);WI=Ca(D(76),1000);W0=Ca(D(77),900);W1=Ca(D(78),800);W2=Ca(D(79),700);W3=Ca(D(80),500);W4=Ca(D(81),400);W5=Ca(D(82),300);W6=Ca(D(83),(-2147483648));}
var H6=E();
function LB(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Mr(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&Hf(b.constructor,c)?1:0;}
function Hf(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Hf(d[e],c))return 1;e=e+1|0;}return 0;}
function O7(b){return JB(String.fromCharCode(b));}
function Pw(b){return b.$meta.primitive?1:0;}
function RU(b){return b.$meta.item;}
function Po(b){return $rt_str(b.$meta.name);}
function Dt(){var a=this;B.call(a);a.gu=null;a.ie=null;}
function Ij(a,b,c){var d,e,f,g;d=c.data;K(a);IH(b);e=d.length;f=0;while(f<e){g=d[f];IH(g);f=f+1|0;}a.gu=b;a.ie=c.cR();}
function IH(b){var c,d;if(b.bM())G(JF(b));if(!IJ(b.o(0)))G(JF(b));c=1;while(c<b.i()){a:{d=b.o(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(IJ(d))break a;else G(JF(b));}}c=c+1|0;}}
function IJ(b){var c;a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}c=1;break a;}c=0;}return c;}
function C4(){B.call(this);this.ic=null;}
var WM=null;var WL=null;var WK=null;function FL(){FL=Q(C4);Lw();}
function Kh(a){var b=new C4();IA(b,a);return b;}
function IA(a,b){FL();K(a);a.ic=b;}
function Lw(){WM=Kh(D(84));WL=Kh(D(85));WK=Kh(D(86));}
function BY(){B.call(this);this.b9=0;}
var Wa=null;var W7=null;var W8=null;function Es(){Es=Q(BY);Nf();}
function ND(a){var b=new BY();H2(b,a);return b;}
function H2(a,b){Es();K(a);a.b9=b;}
function QA(a){return a.b9;}
function C2(b){Es();return !b?W7:Wa;}
function Jd(b){Es();return !b?D(87):D(88);}
function Mz(a){return Jd(a.b9);}
function Mb(a,b){if(a===b)return 1;return b instanceof BY&&b.b9==a.b9?1:0;}
function Nf(){Wa=ND(1);W7=ND(0);W8=J($rt_booleancls());}
var CJ=E(W);
function HZ(){var a=new CJ();E1(a);return a;}
function Cb(a){var b=new CJ();K9(b,a);return b;}
function E1(a){BK(a);}
function K9(a,b){C_(a,b);}
function IN(){CJ.call(this);this.g$=null;}
function JF(a){var b=new IN();P3(b,a);return b;}
function P3(a,b){E1(a);a.g$=b;}
var K5=E(W);
function Pa(){var a=new K5();LW(a);return a;}
function LW(a){BK(a);}
var E9=E();
var VF=null;function TA(){TA=Q(E9);QX();}
function QX(){VF=U((Fh()).data.length);VF.data[Bb(VG)]=1;VF.data[Bb(VH)]=2;VF.data[Bb(VI)]=3;VF.data[Bb(VJ)]=4;VF.data[Bb(VK)]=5;VF.data[Bb(VM)]=6;}
var Jl=E();
function Oa(b){return $rt_str(b);}
function Dv(){B7.call(this);this.d_=null;}
function W9(a){var b=new Dv();GK(b,a);return b;}
function GK(a,b){Dj(a);a.d_=b;}
function DZ(){var a=this;Dv.call(a);a.hp=0;a.dV=0;a.V=null;a.bZ=null;a.e0=null;}
function W$(a,b){var c=new DZ();FF(c,a,b);return c;}
function FF(a,b,c){GK(a,b);a.V=V();a.bZ=BU(32);a.hp=c;PY();a.e0=W_;}
function Mu(a,b,c,d){var $$je;if(!I5(a))return;a:{try{a.d_.cn(b,c,d);break a;}catch($$e){$$je=D$($$e);if($$je instanceof E2){}else{throw $$e;}}a.dV=1;}}
function I5(a){if(a.d_===null)a.dV=1;return a.dV?0:1;}
function ET(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=Sf(b,c,d-c|0);g=Iq(Bw(16,BZ(e.length,1024)));h=Ph(g);i=a.e0.h5();FL();j=WL;i=F_(i,j);j=WL;k=Kk(i,j);while(true){l=(Hw(k,f,h,1)).df();a.cn(g,0,CV(h));ES(h);if(!l)break;}while(true){l=(GD(k,h)).df();a.cn(g,0,CV(h));ES(h);if(!l)break;}}
function O_(a,b){a.bZ.data[0]=b;ET(a,a.bZ,0,1);}
function RK(a,b){a.V.d(b);Dy(a);}
function N8(a,b){(a.V.d(b)).n(10);Dy(a);}
function Sc(a,b){(a.V.Z(b)).n(10);Dy(a);}
function Ou(a){a.hu(10);}
function Dy(a){var b;b=a.V.i()<=a.bZ.data.length?a.bZ:BU(a.V.i());a.V.eG(0,a.V.i(),b,0);ET(a,b,0,a.V.i());a.V.er(0);}
var Fb=E(0);
var CH=E(Cu);
function E$(a){FH(a);}
function DL(){CH.call(this);this.gb=null;}
function Xa(a){var b=new DL();Iz(b,a);return b;}
function Iz(a,b){E$(a);a.gb=b;}
function Op(a){return a.gb;}
var I4=E(DL);
function TO(a){var b=new I4();Ow(b,a);return b;}
function Ow(a,b){Iz(a,b);}
function Qo(a){return UO(a.gH());}
function Gn(){Dn.call(this);this.dL=null;}
function Uu(){var a=new Gn();Ry(a);return a;}
function UX(a){var b=new Gn();Rn(b,a);return b;}
function Ry(a){G1(a);}
function Rn(a,b){Kx(a,b);}
function PH(a){return a.dL;}
function R8(a,b){a.dL=b;}
function NL(a){return a.dL;}
function OC(a,b){return b;}
function N1(a){return a.i4();}
var Et=E(0);
var Eh=E(0);
function JN(){var a=this;B.call(a);a.dC=null;a.bC=null;}
function TJ(a){var b=new JN();PK(b,a);return b;}
function PK(a,b){var c;K(a);a.bC=b;c=a;b.classObject=c;}
function G8(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=TJ(b);return c;}
function Lb(a){return (((V()).d(D(89))).t(Do(a))).f();}
function Nb(a){return a.bC;}
function O$(a,b){return Mr(b,a.bC);}
function Sw(a){if(a.dC===null)a.dC=Po(a.bC);return a.dC;}
function Qx(a){return Pw(a.bC);}
function Lv(a){return G8(RU(a.bC));}
var KN=E(BG);
function Cp(){Ba.call(this);this.c6=0.0;}
var Xb=0.0;var Xc=null;function IZ(){IZ=Q(Cp);Nw();}
function UN(a){var b=new Cp();EK(b,a);return b;}
function TB(a){var b=new Cp();Jy(b,a);return b;}
function EK(a,b){IZ();Bi(a);a.c6=b;}
function Jy(a,b){IZ();EK(a,b);}
function KR(b){IZ();return UN(b);}
function Mg(a,b){if(a===b)return 1;return b instanceof Cp&&b.c6===a.c6?1:0;}
function Nw(){Xb=NaN;Xc=J($rt_floatcls());}
var Hs=E();
function MM(b,c){var d,e,f,g;d=b.data;e=BU(c);f=BZ(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Rw(b,c){var d,e,f,g;d=b.data;e=N4((CY(b)).d9(),c);f=BZ(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Mj(b,c){return Nd(b,0,b.data.length,c);}
function Nd(b,c,d,e){var f,g,h,i,j;f=BT(c,d);if(f>0)G(HZ());if(!f)return (-1);g=d-1|0;while(true){h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>g)return ( -i|0)-2|0;}else{g=i-1|0;if(g<c)return ( -i|0)-1|0;}}return i;}
var DD=E();
var Xd=null;var Xe=null;function H0(){var b;if(Xd===null){b=new DZ;R0();FF(b,Wr,0);Xd=b;}return Xd;}
function Pf(){var b;if(Xe===null){b=new DZ;Lh();FF(b,Xf,0);Xe=b;}return Xe;}
function CR(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=H_(b)){g=e+f|0;if(g<=H_(d)){a:{b:{if(b!==d){h=(CY(b)).d9();i=(CY(d)).d9();if(h!==null&&i!==null){if(h===i)break b;if(!h.cN()&&!i.cN()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.gW(n)){FV(b,c,d,e,k);G(I2());}k=k+1|0;g=m;}FV(b,c,d,e,f);return;}if(!h.cN())break a;if(i.cN())break b;else break a;}G(I2());}}FV(b,c,d,e,f);return;}G(I2());}}G(Dz());}G(TR(D(90)));}
function FV(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function I6(){return Long_fromNumber(new Date().getTime());}
var DG=E();
var Wi=null;var Wj=null;function T4(){T4=Q(DG);Qu();}
function Qu(){Wi=B1([(-1),(-1),31,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5]);Wj=B1([(-2147483648),1162261467,1073741824,1220703125,362797056,1977326743,1073741824,387420489,1000000000,214358881,429981696,815730721,1475789056,170859375,268435456,410338673,612220032,893871739,1280000000,1801088541,113379904,148035889,191102976,244140625,308915776,387420489,481890304,594823321,729000000,887503681,1073741824,1291467969,1544804416,1838265625,60466176]);}
var HJ=E();
function Ig(b){var c,d,e;c=Ui(b.J());d=b.bg();while(d.bb()){e=d.S();if(BF(e,Cd))c.de(Fi(e));else if(!BF(e,Cv))c.de(e);else c.de(Ig(e));}return c;}
function Fi(b){var c,d,e,f,g,h;c=Ty(b.J());d=(b.f9()).bg();while(d.bb()){e=d.S();f=e.bR();if(BF(f,Cd)){g=f;c.br(e.bt(),Fi(g));}else if(!BF(f,Cv))c.br(e.bt(),f);else{h=f;c.br(e.bt(),Ig(h));}}return c;}
var HD=E();
function Ss(b){if(!(b instanceof BY))return null;return b;}
function Lr(b){if(b===null)return null;if(b.eE(D(88)))return C2(1);if(!b.eE(D(87)))return null;return C2(0);}
function SX(b){var c;c=Ss(b);if(c===null&&b!==null)return Lr(b.f());return c;}
var EW=E(0);
var J0=E(CK);
function U0(a){var b=new J0();Q6(b,a);return b;}
function Q6(a,b){Ep(a,b);}
function RG(a){FR(a);return a.dJ.bh;}
function Bf(){var a=this;Ba.call(a);a.bK=null;a.k=0;a.j=M;a.b=0;a.bF=0;}
var Xg=null;var Xh=null;var Xi=null;var Xj=null;var Xk=null;var Xl=null;var Xm=null;var Xn=null;var Xo=null;var Xp=null;var Xq=null;var Xr=null;function Bd(){Bd=Q(Bf);M8();}
function Qa(a,b){var c=new Bf();H7(c,a,b);return c;}
function CB(a,b){var c=new Bf();Em(c,a,b);return c;}
function Xs(a,b,c){var d=new Bf();Fv(d,a,b,c);return d;}
function Iv(a){var b=new Bf();KS(b,a);return b;}
function Q3(a){var b=new Bf();HP(b,a);return b;}
function CE(a,b){var c=new Bf();Cw(c,a,b);return c;}
function Tl(a){var b=new Bf();Ho(b,a);return b;}
function H7(a,b,c){Bd();Bi(a);a.j=b;a.b=c;a.k=Ck(b);}
function Em(a,b,c){Bd();Bi(a);a.j=C(b);a.b=c;a.k=HE(b);}
function Fv(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;Bd();Bi(a);e=c+(d-1|0)|0;if(b===null)G(CZ());f=b.data;if(e<f.length&&c>=0&&d>0&&e>=0){g=LF(d);h=0;if(c>e)i=c;else if(f[c]!=43)i=c;else{c=c+1|0;i=c;}j=0;k=0;while(true){l=BT(i,e);if(l>0)break;if(f[i]==46)break;if(f[i]==101)break;if(f[i]==69)break;if(!k){if(f[i]!=48)k=1;else j=j+1|0;}i=i+1|0;}m=i-c|0;g.ey(b,c,m);m=h+m|0;if(l<=0&&f[i]==46){n=i+1|0;i=n;while(i<=e&&f[i]!=101&&f[i]!=69){if(!k){if(f[i]!=48)k=1;else j=j+1|0;}i=i+1|0;}a.b=i-n|0;m=m+a.b|0;g.ey(b,n,a.b);}
else a.b=0;if(i<=e&&!(f[i]!=101&&f[i]!=69)){n=i+1|0;if(n>e)i=n;else if(f[n]!=43)i=n;else{i=n+1|0;if(i>e)i=n;else if(f[i]==45)i=n;}o=Jr(b,i,(e+1|0)-i|0);p=R(C(a.b),C(DN(o)));a.b=I(p);if(BA(p,C(a.b)))G(Bp(D(91)));}if(m>=19)DQ(a,Ub(g.f()));else{a.j=Ka(g.f());a.k=Ck(a.j);}a.bF=g.i()-j|0;if(g.o(0)==45)a.bF=a.bF-1|0;return;}G(SM());}
function KS(a,b){Bd();Fv(a,b.f_(),0,b.i());}
function HP(a,b){var c,d,e,f;Bd();Bi(a);if(!(!isFinite(b)?1:0)&&!(isNaN(b)?1:0)){c=$rt_doubleToLongBits(b);a.b=1075-I(H(Y(c,52),C(2047)))|0;d=a.b!=1075?Cl(H(c,F(4294967295, 1048575)),F(0, 1048576)):T(H(c,F(4294967295, 1048575)),1);if(X(d,M)){a.b=0;a.bF=1;}if(a.b>0){e=BZ(a.b,Iw(d));d=S(d,e);a.b=a.b-e|0;}if(BA(Y(c,63),M))d=Bo(d);f=Ck(d);if(a.b>=0){if(a.b<=0){a.j=d;a.k=f;}else if(a.b<Xm.data.length&&(f+Xn.data[a.b]|0)<64){a.j=P(d,Xm.data[a.b]);a.k=Ck(a.j);}else DQ(a,Gq(By(d),a.b));}else{a.k=!f?0:f-a.b|0;if(a.k
<64)a.j=T(d, -a.b|0);else a.bK=(By(d)).K( -a.b|0);a.b=0;}return;}G(Bp(D(92)));}
function Cw(a,b,c){Bd();Bi(a);if(b!==null){a.b=c;DQ(a,b);return;}G(CZ());}
function Ho(a,b){Bd();Em(a,b,0);}
function BI(b,c){Bd();if(!c)return Jh(b);if(X(b,M)&&c>=0&&c<Xq.data.length)return Xq.data[c];return Qa(b,c);}
function Jh(b){Bd();if(BV(b,M)&&Bt(b,C(11)))return Xp.data[I(b)];return Qa(b,0);}
function BD(b){Bd();if(!(!isFinite(b)?1:0)&&!(isNaN(b)?1:0))return Iv(En(b));G(Bp(D(93)));}
function LS(a,b){var c;a:{c=a.b-b.b|0;if(BQ(a)){if(c<=0)return b;if(!BQ(b))break a;return a;}if(BQ(b)&&c>=0)return a;}if(c){if(c>0)return Fu(a,b,c);return Fu(b,a, -c|0);}if((Bw(a.k,b.k)+1|0)<64)return BI(L(a.j,b.j),a.b);return CE((Z(a)).bl(Z(b)),a.b);}
function Fu(b,c,d){var e,f,g,h,i;Bd();if(d<Xl.data.length){e=b.k;f=c.k+Xo.data[d]|0;if((Bw(e,f)+1|0)<64)return BI(L(b.j,P(c.j,Xl.data[d])),b.b);}g=new Bf;h=Z(b);i=Cc(Z(c),C(d));Cw(g,h.bl(i),b.b);return g;}
function OY(a,b){var c,d,e,f,g,h,i;a:{c=a.b-b.b|0;if(BQ(a)){if(c<=0)return b.h8();if(!BQ(b))break a;return a;}if(BQ(b)&&c>=0)return a;}if(!c){if((Bw(a.k,b.k)+1|0)<64)return BI(R(a.j,b.j),a.b);return CE((Z(a)).bv(Z(b)),a.b);}if(c>0){if(c<Xl.data.length){d=a.k;e=b.k+Xo.data[c]|0;if((Bw(d,e)+1|0)<64)return BI(R(a.j,P(b.j,Xl.data[c])),a.b);}f=new Bf;g=Z(a);h=Cc(Z(b),C(c));Cw(f,g.bv(h),a.b);return f;}d= -c|0;if(d<Xl.data.length){e=a.k+Xo.data[d]|0;i=b.k;if((Bw(e,i)+1|0)<64)return BI(R(P(a.j,Xl.data[d]),b.j),b.b);}f
=new Bf;g=Cc(Z(a),C(d));Cw(f,g.bv(Z(b)),b.b);return f;}
function Rz(a,b){var c,d,e,f;c=L(C(a.b),C(b.b));if(!BQ(a)&&!BQ(b)){if((a.k+b.k|0)<64)return BI(P(a.j,b.j),Ff(c));d=new Bf;e=Z(a);f=Z(b);e=e.z(f);Cw(d,e,Ff(c));return d;}return Jn(c);}
function M0(a,b,c,d){return a.fA(b,c,KQ(d));}
function LD(a,b,c,d){var e,f,g,h,i,j,k;if(d===null)G(CZ());if(BQ(b))G(Cj(D(94)));a:{e=R(R(C(a.b),C(b.b)),C(c));if(a.k<64&&b.k<64){f=Dg(e,M);if(!f)return Dc(a.j,b.j,c,d);if(f>0){if(BV(e,C(Xl.data.length)))break a;f=b.k;g=Xo.data;h=I(e);if((f+g[h]|0)>=64)break a;return Dc(a.j,P(b.j,Xl.data[h]),c,d);}i=Bo(e);if(Bt(i,C(Xl.data.length))){f=a.k;g=Xo.data;h=I(i);if((f+g[h]|0)<64)return Dc(P(a.j,Xl.data[h]),b.j,c,d);}}}j=Z(a);k=Z(b);f=Dg(e,M);if(f>0)k=Cc(k,C(I(e)));else if(f<0)j=Cc(j,C(I(Bo(e))));return FN(j,k,c,d);}
function FN(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Bd();f=b.fs(c);g=f.data;h=g[0];i=g[1];if(!i.bf())return CE(h,d);j=BL(b.bf(),c.bf());if(c.cq()>=63){k=((i.dq()).ev()).dd(c.dq());l=Dm(!h.cC(0)?0:1,BL(j,5+k|0),e);}else{m=i.bz();n=c.bz();k=FT(T(Dw(m),1),Dw(n));l=Dm(!h.cC(0)?0:1,BL(j,5+k|0),e);}if(!l)return CE(h,d);if(h.cq()<63)return BI(L(h.bz(),C(l)),d);o=h.bl(By(C(l)));return CE(o,d);}
function Dc(b,c,d,e){var f,g,h,i;Bd();f=Be(b,c);g=BJ(b,c);h=BL(D5(b),D5(c));if(BA(g,M)){i=FT(T(Dw(g),1),Dw(c));f=L(f,C(Dm(I(f)&1,BL(h,5+i|0),e)));}return BI(f,d);}
function QY(a,b,c){return a.fA(b,a.b,c);}
function SS(a){a:{if(a.k>=63){if(a.k!=63)break a;if(X(a.j,F(0, 2147483648)))break a;}return BI(Bo(a.j),a.b);}return CE((Z(a)).fm(),a.b);}
function Pe(a){if(a.k>=64)return (Z(a)).bf();return D5(a.j);}
function BQ(a){return !a.k&&BA(a.j,C(-1))?1:0;}
function Ri(a){return a.b;}
function Rs(a,b,c){var d,e,f,g,h;if(c===null)G(CZ());d=R(C(b),C(a.b));e=Dg(d,M);if(!e)return a;if(e<=0){if(a.k<64){f=Bo(d);Bd();if(Bt(f,C(Xl.data.length)))return Dc(a.j,Xl.data[I(f)],b,c);}return FN(Z(a),Co(Bo(d)),b,c);}Bd();if(Bt(d,C(Xl.data.length))){e=a.k;g=Xo.data;h=I(d);if((e+g[h]|0)<64)return BI(P(a.j,Xl.data[h]),b);}return CE(Cc(Z(a),C(I(d))),b);}
function Lo(a,b){var c,d,e,f,g,h,i,j;c=a.bf();d=b.bf();e=BT(c,d);if(e){if(e>=0)return 1;return (-1);}if(a.b==b.b&&a.k<64&&b.k<64)return Bt(a.j,b.j)?(-1):Bm(a.j,b.j)?0:1;f=R(C(a.b),C(b.b));g=Fw(a)-Fw(b)|0;h=C(g);if(B4(h,L(f,C(1))))return c;if(Bt(h,R(f,C(1))))return  -c|0;i=Z(a);j=Z(b);e=Dg(f,M);if(e<0)i=i.z(Co(Bo(f)));else if(e>0)j=j.z(Co(f));return i.dd(j);}
function Ok(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=a.bf();c=1076;d=R(C(a.k),Vx(a.b/0.3010299956639812));if(BV(d,C(-1074))&&b){if(B4(d,C(1025)))return b*Infinity;e=(Z(a)).dq();if(a.b<=0)f=e.z(Co(C( -a.b|0)));else{g=Co(C(a.b));h=100-I(d)|0;if(h>0){e=e.K(h);c=c-h|0;}i=e.fs(g);j=i.data;k=(j[1].ev()).dd(g);f=(j[0].K(2)).bl(By(C((BL(k,k+3|0)/2|0)+1|0)));c=c+(-2)|0;}l=f.iL();m=f.cq()-54|0;if(m<=0){n=T(f.bz(), -m|0);o=BA(H(n,C(3)),C(3))?n:L(n,C(2));}else{n=(f.cI(m)).bz();o=!(X(H(n,C(1)),C(1))&&l<m)&&BA(H(n,C(3)),
C(3))?n:L(n,C(2));}if(X(H(o,F(0, 4194304)),M)){p=Y(o,1);q=c+m|0;}else{p=Y(o,2);q=c+(m+1|0)|0;}if(q>2046)return b*Infinity;if(q<=0){if(q<(-53))return b*0.0;a:{p=Y(n,1);r=H(p,S(C(-1),63+q|0));p=Y(p, -q|0);if(BA(H(p,C(3)),C(3))){if(BA(H(p,C(1)),C(1)))break a;if(X(r,M))break a;if(l>=m)break a;}p=L(p,C(1));}q=0;p=Y(p,1);}p=Cl(Cl(H(C(b),F(0, 2147483648)),T(C(q),52)),H(p,F(4294967295, 1048575)));return $rt_longBitsToDouble(p);}return b*0.0;}
function FT(b,c){var d;Bd();d=Dg(b,c);return d>0?1:d>=0?0:(-1);}
function Dm(b,c,d){var e;Bd();a:{e=0;UU();switch(VV.data[Bb(d)]){case 1:if(!c)break a;G(Cj(D(95)));case 2:e=Cs(c);break a;case 3:break;case 4:e=Bw(Cs(c),0);break a;case 5:e=BZ(Cs(c),0);break a;case 6:if(Ei(c)<5)break a;e=Cs(c);break a;case 7:if(Ei(c)<=5)break a;e=Cs(c);break a;case 8:if((Ei(c)+b|0)<=5)break a;e=Cs(c);break a;default:break a;}}return e;}
function Fw(a){return a.bF>0?a.bF:((a.k-1|0)*0.3010299956639812|0)+1|0;}
function Ff(b){Bd();if(Bt(b,C(-2147483648)))G(Cj(D(96)));if(Bm(b,C(2147483647)))return I(b);G(Cj(D(97)));}
function Jn(b){var c;Bd();c=I(b);if(X(b,C(c)))return BI(M,c);if(Bt(b,M))return CB(0,(-2147483648));return CB(0,2147483647);}
function Z(a){if(a.bK===null)a.bK=By(a.j);return a.bK;}
function DQ(a,b){a.bK=b;a.k=b.cq();if(a.k<64)a.j=b.bz();}
function Ck(b){Bd();if(Bt(b,M))b=JM(b,C(-1));return 64-G9(b)|0;}
function HE(b){Bd();if(b<0)b=b^(-1);return 32-Cx(b)|0;}
function M8(){var b,c;Xg=CB(0,0);Xh=CB(1,0);Xi=CB(10,0);Xl=E6([C(1),C(10),C(100),C(1000),C(10000),C(100000),C(1000000),C(10000000),C(100000000),C(1000000000),F(1410065408, 2),F(1215752192, 23),F(3567587328, 232),F(1316134912, 2328),F(276447232, 23283),F(2764472320, 232830),F(1874919424, 2328306),F(1569325056, 23283064),F(2808348672, 232830643)]);Xm=E6([C(1),C(5),C(25),C(125),C(625),C(3125),C(15625),C(78125),C(390625),C(1953125),C(9765625),C(48828125),C(244140625),C(1220703125),F(1808548329, 1),F(452807053, 7),
F(2264035265, 35),F(2730241733, 177),F(766306777, 888),F(3831533885, 4440),F(1977800241, 22204),F(1299066613, 111022),F(2200365769, 555111),F(2411894253, 2775557),F(3469536673, 13877787),F(167814181, 69388939),F(839070905, 346944695),F(4195354525, 1734723475)]);Xn=U(Xm.data.length);Xo=U(Xl.data.length);Xp=Bu(Bf,11);Xq=Bu(Bf,11);Xr=BU(100);b=0;while(b<Xq.data.length){Xp.data[b]=CB(b,0);Xq.data[b]=CB(0,b);Xr.data[b]=48;b=b+1|0;}while(b<Xr.data.length){Xr.data[b]=48;b=b+1|0;}c=0;while(c<Xn.data.length){Xn.data[c]
=Ck(Xm.data[c]);c=c+1|0;}c=0;while(c<Xo.data.length){Xo.data[c]=Ck(Xl.data[c]);c=c+1|0;}Bv();Xk=Xt;Xj=Xu;}
var FW=E(0);
var Gm=E(D3);
function Up(a,b){var c=new Gm();N3(c,a,b);return c;}
function N3(a,b,c){GZ(a,b,c);}
function Mi(a,b){var c,d,e,f,g,h;c=U(b);while(a.bq%4|0){a.bq=a.bq+1|0;}d=a.bq/4|0;e=0;while(e<b){f=c.data;g=a.e1;h=d+1|0;f[e]=g[d];e=e+1|0;d=h;}a.bq=d*4|0;return c;}
var Ej=E();
var Xv=null;function LC(){LC=Q(Ej);Sn();}
function Ip(b){var c,d;LC();c=Xv.cV(b);if(c===null){d=Xv;c=Tv();d.br(b,c);}return c;}
function Fp(b,c,d){var e,f,g,h,i,j;LC();e=Ip(b);f=J$(e,c,d);g=Kf(f);if(g!==null)return g;e=f.e_;D6();if(e!==Wz){h=b.fC();i=V();Ce(Ce(i,D(98)),h);j=DE(i);if(e===WA)G(Uk(j));e=FY();GI();e.iN(W0,j);}return null;}
function Sn(){Xv=ST();}
var B2=E();
var Xw=null;var Xx=null;var Xy=null;var Xz=null;function BE(){BE=Q(B2);Mp();}
function EH(b){BE();return (b&64512)!=55296?0:1;}
function EF(b){BE();return (b&64512)!=56320?0:1;}
function Ku(b){BE();return !EH(b)&&!EF(b)?0:1;}
function J1(b,c){BE();return ((b&1023)<<10|c&1023)+65536|0;}
function F8(b){var c;BE();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function FD(b){BE();return (56320|b&1023)&65535;}
function Fx(b){BE();return Gs(b)&65535;}
function Gs(b){BE();return (O7(b)).toLowerCase().charCodeAt(0);}
function Ed(b){BE();return In(b);}
function In(b){var c,d,e,f,g,h,i,j;BE();c=Gz();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=BT(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function CP(b,c){BE();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gz(){BE();if(Xx===null)Xx=RN(((Go()).value!==null?$rt_str((Go()).value):null));return Xx;}
function Go(){BE();if(Xz===null)Xz=Kd();return Xz;}
function Mp(){Xw=J($rt_charcls());Xy=Bu(B2,128);}
function Kd(){return {"value":"{?*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%slG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%sTEG%%%%%%%%%%%%%%%%%%&5G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%VR#G%%%%%%%%%%%%%"
+"%%%%%"};}
var Ds=E();
var XA=null;var XB=null;function C3(){C3=Q(Ds);L_();}
function Ks(b,c,d){var e,f,g,h,i,j;C3();e=0;f=c;g=b;a:{while(true){if(e>=d)break a;h=g*g;i=f*f;if(h+i>=8.0)break;j=h-i+b;f=2.0*g*f+c;e=e+1|0;g=j;}}return e;}
function J2(b,c,d,e){var f;C3();XA.iI();f=XB.bk();if(!(f!==null&&f.eU==d&&e>=f.cD)){BW();f=I0(V4.data[d]);f.eU=d;Jk(f,b,c);XB.ez(f);}while(f.cD<e){Jz(f);f.cD=f.cD+1|0;}}
function I8(b,c){C3();if(c!==null&&c.data.length==b)return c;return U(b);}
function HF(b,c){var d,e,f;C3();d=0;e=XB.bk();while(d<e.dN){f=d+1|0;ID(d,b,c);d=f;}}
function ID(b,c,d){var e,f,g,h;C3();e=d.data;f=H3(b,c);g=XB.bk();h=Ks(f.ec,f.cX,g.cE);e[b]=h;return h;}
function H3(b,c){var d,e,f,g,h;C3();d=XB.bk();e=XA.bk();if(e===null){f=XA;e=TQ();f.ez(e);e.du=d.x.R();e.fH=d.s.R();e.dI=null;e.c7=1.7976931348623157E308;e.cX=1.7976931348623157E308;}if(e.dE===null){e.fy=(e.fH-e.du)/(d.dN-1|0);e.dI=(d.v.P(d.B)).gS(Tl(d.e4-1|0),d.v.bw(),6);}g=c;if(g!==e.c7){f=d.v;h=e.dI;e.c7=g;e.dE=f.P(h.cK(BD(g)));e.fp=e.dE.R();}e.ec=e.du+e.fy*b;e.cX=e.fp;return e;}
function L_(){XA=NV();XB=NV();}
var C0=E(0);
var Ec=E();
function JT(a,b){K(a);a.hI(b);}
function MP(a,b){return (a.fI()).eq(b);}
function PC(a){return (a.fI()).J();}
var G7=E();
function S3(b){return b;}
var Dq=E(CM);
function Gk(a,b,c,d){Fq(a,b);a.E=c;a.bc=d;}
function Sf(b,c,d){return TG(0,b.data.length,b,c,c+d|0,0);}
function Mt(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(CF((((((V()).d(D(99))).t(g)).d(D(63))).t(f)).f()));if(B5(a)<d)G(UK());if(d<0)G(CF(((((V()).d(D(64))).t(d)).d(D(65))).f()));h=a.E;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.iF(h);i=i+1|0;c=g;h=f;}a.E=a.E+d|0;return a;}}e=b.data;G(CF(((((((V()).d(D(66))).t(c)).d(D(49))).t(e.length)).d(D(67))).f()));}
function Le(a,b){JK(a,b);return a;}
var DO=E(Dq);
function IB(a,b,c,d){Gk(a,b,c,d);}
function Kq(){var a=this;DO.call(a);a.iS=0;a.ft=0;a.gi=null;}
function TG(a,b,c,d,e,f){var g=new Kq();SN(g,a,b,c,d,e,f);return g;}
function SN(a,b,c,d,e,f,g){IB(a,c,e,f);a.ft=b;a.iS=g;a.gi=d;}
function MW(a,b){return a.gi.data[b+a.ft|0];}
var Jt=E();
function R4(b){$rt_putStderr(b);}
function PE(b){$rt_putStdout(b);}
var Fr=E(0);
function KT(){B.call(this);this.fo=null;}
function T7(a){var b=new KT();Pj(b,a);return b;}
function Pj(a,b){K(a);a.fo=b;}
function Qj(a,b){K3(a,b);}
function K3(a,b){P0(a.fo,b);}
function QF(a,b){a.ig(b);}
var Ju=E();
function Nm(b){return b?1:0;}
function Dx(){B.call(this);this.dj=null;}
function XC(){var a=new Dx();Jq(a);return a;}
function Jq(a){K(a);}
function KL(a,b){a.dj=b;}
function Np(a,b){a.dj.dc(b);}
function MF(a,b){a.dj.dm(b);}
var Ct=E();
var XD=null;var XE=null;var Xt=null;var Xu=null;function Bv(){Bv=Q(Ct);MG();}
function KO(b,c){Bv();return Dd(b,c);}
function Dd(b,c){var d,e,f,g,h,i,j,k,l,m;Bv();if(c.g<=b.g){d=c;c=b;b=d;}if(b.g<63)return H$(c,b);e=(c.g&(-2))<<4;f=c.cI(e);g=b.cI(e);h=c.bv(f.K(e));i=b.bv(g.K(e));j=Dd(f,g);k=Dd(h,i);l=Dd(f.bv(h),i.bv(g));d=(l.bl(j)).bl(k);d=d.K(e);m=j.K(e<<1);return (m.bl(d)).bl(k);}
function H$(b,c){var d,e,f,g,h,i,j,k,l,m,n;Bv();d=b.g;e=c.g;f=d+e|0;g=b.h==c.h?1:(-1);if(f!=2){h=b.a;i=c.a;j=U(f);IQ(h,d,i,e,j);k=Bl(g,f,j);Bx(k);return k;}l=B9(b.a.data[0],c.a.data[0],0,0);m=I(l);n=Vy(l);return !n?Bq(g,m):Bl(g,2,B1([m,n]));}
function IQ(b,c,d,e,f){Bv();if(c&&e){if(c==1)f.data[e]=C9(f,d,e,b.data[0]);else if(e!=1)GQ(b,d,f,c,e);else f.data[c]=C9(f,b,c,d.data[0]);return;}}
function GQ(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;Bv();if(b===c&&e==f){FI(b,e,d);return;}g=0;while(g<e){h=b.data;i=M;j=h[g];k=0;while(k<f){l=d.data;m=c.data[k];n=g+k|0;o=B9(j,m,l[n],I(i));l[n]=I(o);i=S(o,32);k=k+1|0;}d.data[g+f|0]=I(i);g=g+1|0;}}
function C9(b,c,d,e){var f,g,h,i;Bv();f=M;g=0;while(g<d){h=b.data;i=B9(c.data[g],e,I(f),0);h[g]=I(i);f=S(i,32);g=g+1|0;}return I(f);}
function GV(b,c,d){Bv();return C9(b,b,c,d);}
function Fg(b,c){var d,e,f,g,h,i,j,k,l,m;Bv();d=b.h;if(!d){Bc();return Wb;}e=b.g;f=b.a;if(e!=1){g=e+1|0;h=U(g);i=h.data;i[e]=C9(h,f,e,c);j=Bl(d,g,h);Bx(j);return j;}k=B9(f.data[0],c,0,0);l=I(k);m=Vy(k);return !m?Bq(d,l):Bl(d,2,B1([l,m]));}
function JP(b,c){var d,e,f;Bv();Bc();d=Wc;while(c>1){if(c&1)d=d.z(b);e=b.g==1?b.z(b):T6(1,FI(b.a,b.g,U(b.g<<1)));c=c>>1;b=e;}f=d.z(b);return f;}
function FI(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;Bv();e=0;while(e<c){f=M;g=e+1|0;h=g;while(h<c){i=d.data;j=b.data;k=j[e];l=j[h];m=e+h|0;n=B9(k,l,i[m],I(f));i[m]=I(n);f=S(n,32);h=h+1|0;}d.data[e+c|0]=I(f);e=g;}Hj(d,d,c<<1);f=M;e=0;o=0;while(e<c){i=d.data;j=b.data;n=B9(j[e],j[e],i[o],I(f));i[o]=I(n);n=S(n,32);l=o+1|0;n=L(n,H(C(i[l]),F(4294967295, 0)));i[l]=I(n);f=S(n,32);e=e+1|0;o=l+1|0;}return d;}
function Cc(b,c){Bv();return BV(c,C(XD.data.length))?b.z(Co(c)):Fg(b,XD.data[I(c)]);}
function Co(b){var c,d,e,f,g,h,i;Bv();c=I(b);if(Bt(b,C(Xt.data.length)))return Xt.data[c];if(Bm(b,C(50))){Bc();return Wd.bn(c);}if(Bm(b,C(1000)))return (Xu.data[1].bn(c)).K(c);d=L(C(1),Vx(UQ(b)/2.4082399653118496));if(B4(d,C(1000000)))G(Cj(D(100)));if(Bm(b,C(2147483647)))return (Xu.data[1].bn(c)).K(c);e=Xu.data[1].bn(2147483647);f=R(b,C(2147483647));g=I(BJ(b,C(2147483647)));h=e;i=f;while(B4(i,C(2147483647))){h=h.z(e);i=R(i,C(2147483647));}h=h.z(Xu.data[1].bn(g));h=h.K(2147483647);while(B4(f,C(2147483647))){h
=h.K(2147483647);f=R(f,C(2147483647));}h=h.K(g);return h;}
function Gq(b,c){Bv();if(c<XE.data.length)return Fg(b,XE.data[c]);if(c<Xu.data.length)return b.z(Xu.data[c]);return b.z(Xu.data[1].bn(c));}
function B9(b,c,d,e){Bv();return L(L(P(H(C(b),F(4294967295, 0)),H(C(c),F(4294967295, 0))),H(C(d),F(4294967295, 0))),H(C(e),F(4294967295, 0)));}
function MG(){var b,c,d,e,f;XD=B1([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);XE=B1([1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,244140625,1220703125]);Xt=Bu(Bh,32);Xu=Bu(Bh,32);b=C(1);c=0;while(c<=18){Xu.data[c]=By(b);Xt.data[c]=By(T(b,c));b=P(b,C(5));c=c+1|0;}while(c<Xt.data.length){d=Xu.data;e=Xu.data;f=c-1|0;d[c]=e[f].z(Xu.data[1]);Xt.data[c]=Xt.data[f].z(Wd);c=c+1|0;}}
function D9(){Dx.call(this);this.f6=null;}
function IW(a){Jq(a);}
function O8(a,b){a.f6=b;KL(a,b);}
function Jv(a,b){a.ga(b);}
function Rl(a,b){return a.f6.c5(b);}
function Ci(){Ba.call(this);this.bo=0.0;}
var XF=0.0;var XG=null;function JI(){JI=Q(Ci);Oj();}
function OB(a){var b=new Ci();JX(b,a);return b;}
function JX(a,b){JI();Bi(a);a.bo=b;}
function Om(a){return a.bo|0;}
function Ft(b){JI();return OB(b);}
function En(b){JI();return ((V()).hK(b)).f();}
function Mw(a){return En(a.bo);}
function SZ(a,b){if(a===b)return 1;return b instanceof Ci&&b.bo===a.bo?1:0;}
function Mn(a){return isNaN(a.bo)?1:0;}
function NW(a){return !isFinite(a.bo)?1:0;}
function Oj(){XF=NaN;XG=J($rt_doublecls());}
var I1=E();
function DX(b,c,d){var e,f,g,h;e=d-1|0;while(e>=0){f=c.data;if(b.data[e]!=f[e])break;e=e+(-1)|0;}if(e<0)g=0;else{h=c.data;g=BV(H(C(b.data[e]),F(4294967295, 0)),H(C(h[e]),F(4294967295, 0)))?1:(-1);}return g;}
function RD(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=b.h;e=c.h;if(!d)return c;if(!e)return b;f=b.g;g=c.g;if((f+g|0)==2){h=H(C(b.a.data[0]),F(4294967295, 0));i=H(C(c.a.data[0]),F(4294967295, 0));if(d!=e)return By(d>=0?R(h,i):R(i,h));j=L(h,i);k=I(j);l=Vy(j);return !l?Bq(d,k):Bl(d,2,B1([k,l]));}if(d==e)m=f<g?DW(c.a,g,b.a,f):DW(b.a,f,c.a,g);else{n=BT(f,g);o=!n?DX(b.a,c.a,f):n<=0?(-1):1;if(!o){Bc();return Wb;}if(o!=1){m=DR(c.a,g,b.a,f);d=e;}else m=DR(b.a,f,c.a,g);}p=m.data;q=Bl(d,p.length,m);Bx(q);return q;}
function Og(b,c,d,e,f){var g,h,i,j,k,l,m;g=b.data;h=e.data;i=c.data;j=L(H(C(i[0]),F(4294967295, 0)),H(C(h[0]),F(4294967295, 0)));g[0]=I(j);k=Y(j,32);if(d<f){l=1;while(l<d){m=L(k,L(H(C(i[l]),F(4294967295, 0)),H(C(h[l]),F(4294967295, 0))));g[l]=I(m);k=Y(m,32);l=l+1|0;}while(l<f){m=L(k,H(C(h[l]),F(4294967295, 0)));g[l]=I(m);k=Y(m,32);l=l+1|0;}}else{l=1;while(l<f){m=L(k,L(H(C(i[l]),F(4294967295, 0)),H(C(h[l]),F(4294967295, 0))));g[l]=I(m);k=Y(m,32);l=l+1|0;}while(l<d){m=L(k,H(C(i[l]),F(4294967295, 0)));g[l]=I(m);k
=Y(m,32);l=l+1|0;}}if(BA(k,M))g[l]=I(k);}
function LU(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=b.h;e=c.h;if(!e)return b;if(!d)return c.fm();f=b.g;g=c.g;if((f+g|0)==2){h=H(C(b.a.data[0]),F(4294967295, 0));i=H(C(c.a.data[0]),F(4294967295, 0));if(d<0)h=Bo(h);if(e<0)i=Bo(i);return By(R(h,i));}j=BT(f,g);k=!j?DX(b.a,c.a,f):j<=0?(-1):1;if(k==(-1)){l= -e|0;m=d!=e?DW(c.a,g,b.a,f):DR(c.a,g,b.a,f);}else if(d!=e){m=DW(b.a,f,c.a,g);l=d;}else{if(!k){Bc();return Wb;}m=DR(b.a,f,c.a,g);l=d;}n=m.data;o=Bl(l,n.length,m);Bx(o);return o;}
function Od(b,c,d,e,f){var g,h,i,j,k;g=M;h=0;while(h<f){i=b.data;j=e.data;k=L(g,R(H(C(c.data[h]),F(4294967295, 0)),H(C(j[h]),F(4294967295, 0))));i[h]=I(k);g=Y(k,32);h=h+1|0;}while(h<d){j=b.data;k=L(g,H(C(c.data[h]),F(4294967295, 0)));j[h]=I(k);g=Y(k,32);h=h+1|0;}}
function DW(b,c,d,e){var f;f=U(c+1|0);Og(f,b,c,d,e);return f;}
function O2(b,c,d){var e,f,g,h;e=H(C(d),F(4294967295, 0));f=0;while(BA(e,M)&&f<c){g=b.data;h=L(e,H(C(g[f]),F(4294967295, 0)));g[f]=I(h);e=Y(h,32);f=f+1|0;}return I(e);}
function DR(b,c,d,e){var f;f=U(c);Od(f,b,c,d,e);return f;}
var Je=E();
function Oo(b){return b!==null?b.f():null;}
function Sm(b){return b!==null?b.i():0;}
function NH(b){return Sm(b)?0:1;}
function KI(){CH.call(this);this.dB=null;}
function Tk(a){var b=new KI();OM(b,a);return b;}
function OM(a,b){a.dB=b;E$(a);}
function Rx(a){return a.dB.J();}
function Rk(a){return U0(a.dB);}
function K8(){var a=this;B.call(a);a.ec=0.0;a.cX=0.0;a.du=0.0;a.fH=0.0;a.dI=null;a.dE=null;a.fp=0.0;a.fy=0.0;a.c7=0.0;}
function TQ(){var a=new K8();Ma(a);return a;}
function Ma(a){K(a);}
var Cv=E(0);
function DC(){Cu.call(this);this.cx=0;}
function Kz(a){FH(a);}
function PF(a){return Tq(a);}
var EX=E(0);
function Hy(){var a=this;DC.call(a);a.C=null;a.ba=0;}
function Ui(a){var b=new Hy();Gu(b,a);return b;}
function UC(a){var b=new Hy();Ox(b,a);return b;}
function Gu(a,b){Kz(a);a.C=Bu(B,b);}
function Ox(a,b){var c,d;Gu(a,b.J());c=b.bg();d=0;while(d<a.C.data.length){a.C.data[d]=c.S();d=d+1|0;}a.ba=a.C.data.length;}
function Mo(a,b){var c;if(a.C.data.length<b){c=a.C.data.length>=1073741823?2147483647:Bw(b,Bw(a.C.data.length*2|0,5));a.C=Rw(a.C,c);}}
function OE(a,b){GA(a,b);return a.C.data[b];}
function M_(a){return a.ba;}
function QU(a,b){var c,d;a.bI(a.ba+1|0);c=a.C.data;d=a.ba;a.ba=d+1|0;c[d]=b;a.cx=a.cx+1|0;return 1;}
function GA(a,b){if(b>=0&&b<a.ba)return;G(Dz());}
function Nk(a){var b,c,d;if(!a.ba)return D(101);b=a.ba-1|0;c=LF(a.ba*16|0);c.n(91);d=0;while(d<b){(c.Z(a.C.data[d]===a?D(102):a.C.data[d])).d(D(47));d=d+1|0;}c.Z(a.C.data[b]===a?D(102):a.C.data[b]);return (c.n(93)).f();}
function Jb(){var a=this;D9.call(a);a.bW=0;a.dA=0;a.dK=0;a.dO=0;a.cG=null;a.fj=0;a.b4=null;a.cz=null;a.eD=0;}
function UF(){var a=new Jb();Nq(a);return a;}
function Nq(a){IW(a);}
function Lg(a){var b;if(M9()){b=Nz(D(103),Bu(Ee,0));b.c3(Uv(a));}a.dm(Ut(a));}
function IL(a,b){var c,d,e,f,g,h,i;c=PD(b);d=(c.dY(D(104),Br(0))).Q();e=c.d4(D(105));f=e===null?0:1;if(f){a.bW=(c.d4(D(105))).Q();a.dA=(c.d4(D(106))).Q();a.dK=(c.dY(D(107),Br(0))).Q();a.dO=(c.dY(D(108),Br(0))).Q();a.fj=c.iW(D(109));}if(a.fj&&a.b4!==null){if(!f&&a.eD){g=a.b4;h=Bu(B,1);h.data[0]=Br(d);g.eh(D(110),h);}else{i=(a.b4.eh(D(111),BX(B,[Br(d),Br(a.bW),Br(a.dA),Br(a.dK),Br(a.dO)]))).Q();a.cz.gm(i);a.eD=1;}a.cz.hR();a.cG=a.cz.hi(a.bW);}else{if(f)J2(a.bW,a.dA,a.dK,a.dO);a.cG=I8(a.bW,null);HF(d,a.cG);}a.dc(a.c5(a.cG));}
function Gy(a,b){a.b4=b.dx();a.cz=a.b4.ir(0);}
var GB=E();
function SP(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;h=f.data;i=U(e+1|0);j=U(g+1|0);k=g-1|0;l=Cx(h[k]);if(l){Eo(j,f,0,l);Eo(i,d,0,l);}else{CR(d,0,i,0,e);CR(f,0,j,0,g);}m=j.data;n=m[k];o=c-1|0;while(o>=0){a:{h=i.data;if(h[e]==n)p=(-1);else{q=L(T(H(C(h[e]),F(4294967295, 0)),32),H(C(h[e-1|0]),F(4294967295, 0)));r=PS(q,n);p=I(r);s=Vy(r);if(p){t=0;p=p+1|0;while(true){p=p+(-1)|0;if(t)break;u=P(H(C(p),F(4294967295, 0)),H(C(m[g-2|0]),F(4294967295, 0)));v=C(s);w=L(T(v,32),H(C(h[e-2|0]),F(4294967295, 0)));x
=L(H(v,F(4294967295, 0)),H(C(n),F(4294967295, 0)));if(Cx(Vy(x))>=32)s=I(x);else t=1;if(Bm(JM(u,F(0, 2147483648)),JM(w,F(0, 2147483648))))break a;}}}}if(p){y=e-g|0;z=Me(i,y,j,g,p);if(z){p=p+(-1)|0;ba=M;bb=0;while(bb<g){k=y+bb|0;v=L(ba,L(H(C(h[k]),F(4294967295, 0)),H(C(m[bb]),F(4294967295, 0))));h[k]=I(v);ba=S(v,32);bb=bb+1|0;}}}if(b!==null)b.data[o]=p;e=e+(-1)|0;o=o+(-1)|0;}if(l){Kt(j,g,i,0,l);return j;}CR(i,0,j,0,g);return i;}
function Oy(b,c,d,e){var f,g,h,i,j,k,l,m,n;f=M;g=H(C(e),F(4294967295, 0));h=d-1|0;while(h>=0){i=c.data;j=Cl(T(f,32),H(C(i[h]),F(4294967295, 0)));if(BV(j,M)){k=Be(j,g);f=BJ(j,g);}else{l=S(j,1);m=C(e>>>1);k=Be(l,m);n=BJ(l,m);f=L(T(n,1),H(j,C(1)));if(e&1){if(Bm(k,f))f=R(f,k);else if(Bm(R(k,f),g)){f=L(f,R(g,k));k=R(k,C(1));}else{f=L(f,R(T(g,1),k));k=R(k,C(2));}}}b.data[h]=I(H(k,F(4294967295, 0)));h=h+(-1)|0;}return I(f);}
function PS(b,c){var d,e,f,g,h;d=H(C(c),F(4294967295, 0));if(BV(b,M)){e=Be(b,d);f=BJ(b,d);}else{g=S(b,1);h=C(c>>>1);e=Be(g,h);f=BJ(g,h);f=L(T(f,1),H(b,C(1)));if(c&1){if(Bm(e,f))f=R(f,e);else if(Bm(R(e,f),d)){f=L(f,R(d,e));e=R(e,C(1));}else{f=L(f,R(T(d,1),e));e=R(e,C(2));}}}return Cl(T(f,32),H(e,F(4294967295, 0)));}
function P4(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=b.a;f=b.g;g=b.h;if(f!=1){h=g!=d?(-1):1;i=U(f);j=U(1);j.data[0]=Oy(i,e,f,c);k=Bl(h,f,i);l=Bl(g,1,j);Bx(k);Bx(l);return BX(Bh,[k,l]);}m=H(C(e.data[0]),F(4294967295, 0));n=H(C(c),F(4294967295, 0));o=Be(m,n);p=BJ(m,n);if(g!=d)o=Bo(o);if(g<0)p=Bo(p);return BX(Bh,[By(o),By(p)]);}
function Me(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=M;h=M;i=0;while(i<e){j=b.data;k=B9(d.data[i],f,I(g),0);l=c+i|0;m=L(R(H(C(j[l]),F(4294967295, 0)),H(k,F(4294967295, 0))),h);j[l]=I(m);h=Y(m,32);g=S(k,32);i=i+1|0;}n=b.data;o=c+e|0;m=L(R(H(C(n[o]),F(4294967295, 0)),g),h);n[o]=I(m);return Vy(m);}
var Ir=E();
function S0(b){var c,d,e,f;if(!b.h)return 0;c=b.g<<5;d=b.a.data[b.g-1|0];if(b.h<0){e=b.d1();if(e==(b.g-1|0))d=d+(-1)|0;}f=c-Cx(d)|0;return f;}
function GO(b,c){var d,e,f,g,h;d=c>>5;e=c&31;f=(b.g+d|0)+(e?1:0)|0;g=U(f);Eo(g,b.a,d,e);h=Bl(b.h,f,g);Bx(h);return h;}
function Eo(b,c,d,e){var f,g,h,i,j,k;a:{if(!e)CR(c,0,b,d,b.data.length-d|0);else{f=b.data;g=32-e|0;h=f.length-1|0;f[h]=0;while(true){if(h<=d)break a;i=c.data;j=f[h];k=(h-d|0)-1|0;f[h]=j|i[k]>>>g;f[h-1|0]=i[k]<<e;h=h+(-1)|0;}}}h=0;while(h<d){b.data[h]=0;h=h+1|0;}}
function Hj(b,c,d){var e,f,g,h;e=0;f=0;while(f<d){g=b.data;h=c.data[f];g[f]=h<<1|e;e=h>>>31;f=f+1|0;}if(e)b.data[d]=e;}
function LY(b){var c,d,e,f;c=b.g;d=c+1|0;e=U(d);Hj(e,b.a,c);f=Bl(b.h,d,e);Bx(f);return f;}
function Hu(b,c){var d,e,f,g,h,i,j,k,l,m,n;d=c>>5;e=c&31;if(d>=b.g){if(b.h>=0){Bc();f=Wb;}else{Bc();f=We;}return f;}a:{g=b.g-d|0;h=g+1|0;i=U(h);Kt(i,g,b.a,d,e);if(b.h>=0)h=g;else{j=0;while(true){k=BT(j,d);if(k>=0)break;if(b.a.data[j])break;j=j+1|0;}if(k>=0){if(e<=0){h=g;break a;}if(!(b.a.data[j]<<(32-e|0))){h=g;break a;}}e=0;while(true){l=BT(e,g);if(l>=0)break;m=i.data;if(m[e]!=(-1))break;m[e]=0;e=e+1|0;}if(l)h=g;m=i.data;m[e]=m[e]+1|0;}}n=Bl(b.h,h,i);Bx(n);return n;}
function Kt(b,c,d,e,f){var g,h,i,j,k,l,m;g=1;h=0;while(h<e){g=g&(d.data[h]?0:1);h=h+1|0;}if(!f)CR(d,e,b,0,c);else{i=d.data;j=32-f|0;g=g&(i[h]<<j?0:1);k=0;while(k<(c-1|0)){l=b.data;m=k+e|0;l[k]=i[m]>>>f|i[m+1|0]<<j;k=k+1|0;}b.data[k]=i[k+e|0]>>>f;}return g;}
var EI=E(0);
function B3(){var a=this;B.call(a);a.q=null;a.cc=0;}
var XH=null;function F5(){F5=Q(B3);Qt();}
function S9(a){var b=new B3();GU(b,a);return b;}
function If(a,b,c){var d=new B3();K$(d,a,b,c);return d;}
function GU(a,b){var c,d,e;F5();c=b.data;K(a);d=c.length;a.q=BU(d);e=0;while(e<d){a.q.data[e]=c[e];e=e+1|0;}}
function K$(a,b,c,d){var e,f;F5();K(a);a.q=BU(d);e=0;while(e<d){f=b.data;a.q.data[e]=f[e+c|0];e=e+1|0;}}
function MZ(a,b){if(b>=0&&b<a.q.data.length)return a.q.data[b];G(Oh());}
function Qb(a){return a.q.data.length;}
function R2(a){return a.q.data.length?0:1;}
function Pu(a,b){var c,d,e,f;if(a===b)return 1;if(b.i()>a.i())return 0;c=0;d=a.i()-b.i()|0;while(d<a.i()){e=a.o(d);f=c+1|0;if(e!=b.o(c))return 0;d=d+1|0;c=f;}return 1;}
function MB(a,b,c){var d,e,f,g;d=Bw(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.q.data.length)return (-1);if(a.q.data[d]==e)break;d=d+1|0;}return d;}f=F8(b);g=FD(b);while(true){if(d>=(a.q.data.length-1|0))return (-1);if(a.q.data[d]==f&&a.q.data[d+1|0]==g)break;d=d+1|0;}return d;}
function Pt(a,b){return a.et(b,0);}
function M4(a,b,c){var d,e,f,g,h,i;d=BZ(c,a.i()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.q.data[d]==e)break;d=d+(-1)|0;}return d;}f=F8(b);g=FD(b);while(true){if(d<1)return (-1);if(a.q.data[d]==g){h=a.q.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function Rm(a,b){return a.iQ(b,a.i()-1|0);}
function LT(a,b,c){if(b>c)G(Dz());return If(a.q,b,c-b|0);}
function Rv(a,b){return a.by(b,a.i());}
function NQ(a){return a;}
function R9(a){var b,c,d;b=BU(a.q.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.q.data[c];c=c+1|0;}return b;}
function IK(b){F5();return b===null?D(5):b.f();}
function Jr(b,c,d){F5();return If(b,c,d);}
function QR(a,b){var c,d;if(a===b)return 1;if(!(b instanceof B3))return 0;c=b;if(c.i()!=a.i())return 0;d=0;while(d<c.i()){if(a.o(d)!=c.o(d))return 0;d=d+1|0;}return 1;}
function Q7(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.i()!=b.i())return 0;c=0;while(c<a.i()){if(Fx(a.o(c))!=Fx(b.o(c)))return 0;c=c+1|0;}return 1;}
function MQ(a){var b,c,d,e;a:{if(!a.cc){b=a.q.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.cc=(31*a.cc|0)+e|0;d=d+1|0;}}}return a.cc;}
function Qt(){XH=UB();}
var F0=E(B7);
var Xf=null;function Lh(){Lh=Q(F0);S2();}
function TP(){var a=new F0();H1(a);return a;}
function H1(a){Lh();Dj(a);}
function SR(a,b){R4(b);}
function S2(){Xf=TP();}
var K_=E(W);
function Uw(){var a=new K_();Ng(a);return a;}
function Ng(a){BK(a);}
function Eb(){var a=this;Dk.call(a);a.fr=null;a.eL=null;}
function Im(a,b,c,d){JU(a,b,c,d);a.fr=BU(512);a.eL=Iq(512);}
function M6(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.fr;e=0;f=0;g=a.eL;a:{while(true){if((e+32|0)>f&&Cn(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=BZ(B5(b)+j|0,i.length);b.ix(d,j,f-j|0);e=0;}if(!Cn(c)){if(!Cn(b)&&e>=f){BN();k=WO;}else{BN();k=WN;}break a;}i=g.data;l=0;m=BZ(B5(c),i.length);n=Tx(b,c);k=a.gM(d,e,f,g,l,m,n);e=n.fi;j=n.fW;if(k===null){if(!Cn(b)&&e>=f){BN();k=WO;}else if(!Cn(c)&&e>=f){BN();k=WN;}}c.fl(g,0,j);if(k!==null)break;}}b.eQ(CV(b)-(f-e|0)|0);return k;}
var IP=E(Eb);
function T8(a){var b=new IP();Pv(b,a);return b;}
function Pv(a,b){Im(a,b,2.0,4.0);}
function SA(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.d2(2))break a;BN();i=WN;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!Ku(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.d2(3))break a;BN();i=WN;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if(!EH(l))
{i=DB(1);break a;}if(j>=d){if(h.id())break a;BN();i=WO;break a;}n=j+1|0;p=k[j];if(!EF(p)){j=n+(-2)|0;i=DB(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.d2(4))break a;BN();i=WN;break a;}k=e.data;q=J1(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.iO(j);h.gA(f);return i;}
var EP=E(0);
function Hm(){B.call(this);this.f1=null;}
function TS(a){var b=new Hm();Ld(b,a);return b;}
function Ld(a,b){K(a);a.f1=b;}
function MA(a,b,c){P5(a.f1,b,c);}
function Q8(a,b,c){a.iy(b,c);}
function Hl(){B.call(this);this.fc=null;}
function Un(a){var b=new Hl();Pb(b,a);return b;}
function Pb(a,b){K(a);a.fc=b;}
function SU(a,b){K7(a.fc,b);}
function O5(a,b){a.ik(b);}
var Ev=E(0);
function Hk(){B.call(this);this.eH=null;}
function Tr(a){var b=new Hk();OQ(b,a);return b;}
function OQ(a,b){K(a);a.eH=b;}
function NJ(a,b){Pk(a.eH,b);}
function OA(a,b){a.dS(b);}
var ER=E(CJ);
function SM(){var a=new ER();MI(a);return a;}
function Bp(a){var b=new ER();SL(b,a);return b;}
function MI(a){E1(a);}
function SL(a,b){K9(a,b);}
var F1=E(Dt);
var W_=null;function PY(){PY=Q(F1);Py();}
function UA(){var a=new F1();Kv(a);return a;}
function Kv(a){PY();Ij(a,D(112),Bu(B3,0));}
function Rq(a){return T8(a);}
function Py(){W_=UA();}
var Ex=E(BR);
function Ni(){var a=new Ex();Px(a);return a;}
function Uk(a){var b=new Ex();HB(b,a);return b;}
function Px(a){DH(a);}
function HB(a,b){Ek(a,b);}
function It(){var a=this;B.call(a);a.M=null;a.fn=null;a.eI=null;a.eC=null;a.ee=null;a.gf=null;}
function S8(a){var b=new It();LG(b,a);return b;}
function LG(a,b){var c;K(a);a.M=b;c=b.exports.memory.buffer;a.fn=new Int8Array(c);a.eI=new Int16Array(c);a.eC=new Int32Array(c);a.ee=new Float32Array(c);a.gf=new Float64Array(c);}
function Mm(a,b){return Up(a,b);}
function Nc(a,b,c){return M7(Ik(a,b,c));}
function Ik(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=c.data;switch(d.length){case 0:return a.M.exports[$rt_ustr(b)]();case 1:e=a.M;f=O(d[0]);return e.exports[$rt_ustr(b)](f);case 2:e=a.M;f=O(d[0]);g=O(d[1]);return e.exports[$rt_ustr(b)](f,g);case 3:e=a.M;f=O(d[0]);g=O(d[1]);h=O(d[2]);return e.exports[$rt_ustr(b)](f,g,h);case 4:e=a.M;f=O(d[0]);g=O(d[1]);h=O(d[2]);i=O(d[3]);return e.exports[$rt_ustr(b)](f,g,h,i);case 5:e=a.M;f=O(d[0]);g=O(d[1]);h=O(d[2]);i=O(d[3]);j=O(d[4]);return e.exports[$rt_ustr(b)](f,g,h,i,j);case 6:e
=a.M;f=O(d[0]);g=O(d[1]);h=O(d[2]);i=O(d[3]);j=O(d[4]);k=O(d[5]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k);case 7:e=a.M;f=O(d[0]);g=O(d[1]);h=O(d[2]);i=O(d[3]);j=O(d[4]);k=O(d[5]);l=O(d[6]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l);case 8:e=a.M;f=O(d[0]);g=O(d[1]);h=O(d[2]);i=O(d[3]);j=O(d[4]);k=O(d[5]);l=O(d[6]);m=O(d[7]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l,m);case 9:e=a.M;f=O(d[0]);g=O(d[1]);h=O(d[2]);i=O(d[3]);j=O(d[4]);k=O(d[5]);l=O(d[6]);m=O(d[7]);n=O(d[8]);return e.exports[$rt_ustr(b)](f,g,
h,i,j,k,l,m,n);default:}return null;}
function O(b){return QZ(b);}
var Gt=E(W);
function TR(a){var b=new Gt();PG(b,a);return b;}
function CZ(){var a=new Gt();Oe(a);return a;}
function PG(a,b){C_(a,b);}
function Oe(a){BK(a);}
var Il=E();
function G6(){var b;b=Um();D6();return Fp(J(C5),b,Wz);}
function M9(){var b;b=G6();return b!==null&&b.hN()?1:0;}
function Nz(b,c){return (G6()).ht(b,c);}
function R$(){return GY(J(C5));}
var Kl=E();
function QM(b){return Math.floor(b);}
function BZ(b,c){if(b<c)c=b;return c;}
function Bw(b,c){if(b>c)c=b;return c;}
function Ei(b){if(b<=0)b= -b|0;return b;}
function Dw(b){if(Bm(b,M))b=Bo(b);return b;}
function RS(b){if(b<=0.0)b= -b;return b;}
function ED(){Ba.call(this);this.hW=0;}
var XI=null;function Re(){Re=Q(ED);Mc();}
function U4(a){var b=new ED();I_(b,a);return b;}
function I_(a,b){Re();Bi(a);a.hW=b;}
function KK(b){Re();return U4(b);}
function Mc(){XI=J($rt_bytecls());}
function GP(){var a=this;B.call(a);a.e9=null;a.e$=null;}
function TM(a,b){var c=new GP();RM(c,a,b);return c;}
function RM(a,b,c){K(a);a.e9=b;a.e$=c;}
function OH(a,b){Gv(a,b);}
function Gv(a,b){OI(a.e9,a.e$,b);}
function BH(){B_.call(this);this.hZ=0;}
var VX=null;var VY=null;var VZ=null;var V0=null;var V1=null;var V2=null;var V3=null;var VW=null;var XJ=null;function F2(){F2=Q(BH);Qn();}
function Cr(a,b,c){var d=new BH();KB(d,a,b,c);return d;}
function Jw(){F2();return XJ.cR();}
function KB(a,b,c,d){F2();D0(a,b,c);a.hZ=d;}
function KQ(b){F2();switch(b){case 0:break;case 1:return VY;case 2:return VZ;case 3:return V0;case 4:return V1;case 5:return V2;case 6:return V3;case 7:return VW;default:G(Cb(D(113)));}return VX;}
function Qn(){VX=Cr(D(114),0,0);VY=Cr(D(115),1,1);VZ=Cr(D(116),2,2);V0=Cr(D(117),3,3);V1=Cr(D(118),4,4);V2=Cr(D(119),5,5);V3=Cr(D(120),6,6);VW=Cr(D(121),7,7);XJ=BX(BH,[VX,VY,VZ,V0,V1,V2,V3,VW]);}
var Gh=E();
function TL(){var a=new Gh();Q2(a);return a;}
function Q2(a){K(a);}
function PV(a){return Ih(a);}
function Ih(a){return O4();}
function FA(){var a=this;B.call(a);a.g7=null;a.gn=null;}
var XK=null;function E8(){E8=Q(FA);MY();}
function Uq(a){var b=new FA();G0(b,a);return b;}
function G0(a,b){E8();K(a);a.g7=b;}
function FY(){E8();return Dp(D(122));}
function Dp(b){var c,d,e;E8();c=XK.cV(b);if(c===null){c=Uq(b);d=b.iA(46);if(d>=0){e=b.by(0,d);c.gn=Dp(e);}else if(!b.bM())c.gn=Dp(D(123));XK.br(b,c);}return c;}
function L3(a,b){var c;c=Jf(a,b.c2(),b.go());if(Dh(b.fT())>=Dh(WI))JC($rt_ustr(c));else if(Dh(b.fT())<Dh(W0))Gl($rt_ustr(c));else Jm($rt_ustr(c));}
function Jf(a,b,c){var d,e,f,g,h,i,j;if(c===null)return b;d=V();e=0;a:{while(true){if(e>=b.i())break a;f=b.et(123,e);if(f<0)break a;g=f+1|0;h=HL(g,b);if(h<0)break;if(b.o(h)!=125){d.fD(b,e,h);e=h;continue;}i=c.data;j=DN(b.by(g,h));if(j>=i.length){d.fD(b,e,h);e=h;continue;}d.Z(i[j]);e=h+1|0;}}return d.f();}
function HL(b,c){var d,e;E8();while(true){if(b>=c.i())return (-1);d=b+1|0;e=c.o(b);if(e<=48)break;if(e>=57)break;b=d;}return d;}
function Ro(a,b,c){a.eF(RE(b,c));}
function OS(a,b,c,d){var e;e=RE(b,c);e.i3(d);a.eF(e);}
function MY(){XK=ST();}
function Gl(b){if(console){console.info(b);}}
function Jm(b){if(console){console.warn(b);}}
function JC(b){if(console){console.error(b);}}
function El(){var a=this;B.call(a);a.fJ=null;a.ff=null;a.gE=M;a.g6=null;a.iU=M;a.hm=M;a.gC=null;}
var XL=M;function RE(a,b){var c=new El();RT(c,a,b);return c;}
function RT(a,b,c){var d;K(a);a.fJ=b;a.ff=c;a.gE=I6();d=XL;XL=L(d,C(1));a.iU=d;a.hm=(Gf()).g8();}
function NS(a){return a.fJ;}
function OK(a){return a.ff;}
function N_(a){return a.g6;}
function NT(a,b){a.gC=b;}
function Ht(){var a=this;B.call(a);a.ek=null;a.cv=null;}
function Te(a){var b=new Ht();MS(b,a);return b;}
function MS(a,b){K(a);a.cv=Oq();a.ek=b;}
function PU(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;d=E3();e=Is();f=c.length;g=0;while(g<f){h=c[g];i=e.hh(h.hG());if(i===null){j=h.hG();i=Is();e.ij(j,i);}k=TS(h);(i.bx())[$rt_ustr(h.jX())]=CT(k,"apply");g=g+1|0;}j=a.ek;l=e.bx();m=Tr(d);n=Un(a);Lu(j,l,CT(m,"handle"),CT(n,"handle"));return d;}
function K7(a,b){if(b!=10)a.cv.gy($rt_str(String.fromCharCode(b)));else{(H0()).fg(a.cv.f());a.cv=Oq();}}
function Pk(b,c){b.c8(S8(c));}
function P5(b,c,d){(b.kS()).jf(c,d);}
function Lu(b,c,d,e){(WebAssembly.instantiate(b,Object.assign(c,{teavm:{currentTimeMillis:function(){return (new Date()).getTime();},isnan:isNaN,teavm_getNaN:function(){return NaN;},isinf:function(n){return !isFinite(n);},isfinite:isFinite,putwchar:e,towlower:function(code){return ((String.fromCharCode(code)).toLowerCase()).charCodeAt(0);},towupper:function(code){return ((String.fromCharCode(code)).toUpperCase()).charCodeAt(0);},getNativeOffset:function(instant){return (new Date(instant)).getTimezoneOffset();},
logString:console.log,logInt:console.log,logOutOfMemory:function(){console.log("Out of memory");}},teavmMath:{sqrt:Math.sqrt,pow:Math.pow,sin:Math.sin,cos:Math.cos}}))).then(function(instance){return d(instance);});}
function Iy(){B.call(this);this.fX=null;}
function TC(a){var b=new Iy();MX(b,a);return b;}
function MX(a,b){K(a);a.fX=b;}
function PJ(a,b){GS(a,b);}
function GS(a,b){a.fX.h0(b);}
var FG=E(CG);
function XM(){var a=new FG();Lq(a);return a;}
function U3(a){var b=new FG();Hx(b,a);return b;}
function Pr(b){if(b!==null&&!(typeof b==='undefined'?1:0))return U3(b);return null;}
function Lq(a){Hx(a,GE());}
function Hx(a,b){F7(a,b);}
function J_(a,b){return a.bG[$rt_ustr(b)]||null;}
function IS(a){return GG(SV(a.bG));}
function KF(a,b,c){a.bG[$rt_ustr(b)]=c;return a;}
function SW(a){return Gj(a);}
function SF(a,b){return HA(a,b);}
function MD(a,b){return Jo(a,b);}
function Nt(a,b){return Ga(a,b);}
function P9(a,b){return Ke(a,b);}
function Sa(a){return JY(a);}
function OG(a,b){return HY(a,b);}
function L6(a){return Kg(a);}
function Q4(a,b,c){return KF(a,b,c);}
function OV(a,b){return J_(a,b);}
function Pg(a){return IS(a);}
var J7=E(W);
function TI(){var a=new J7();Qc(a);return a;}
function Qc(a){BK(a);}
var HI=E();
function Uy(b){Md(UF());}
function DT(){var a=this;B.call(a);a.b6=0;a.eP=0;}
var WO=null;var WN=null;function BN(){BN=Q(DT);Pn();}
function HO(a,b){var c=new DT();IF(c,a,b);return c;}
function IF(a,b,c){BN();K(a);a.b6=b;a.eP=c;}
function L2(a){return a.b6?0:1;}
function QE(a){return a.b6!=1?0:1;}
function Sz(a){return !a.h4()&&!a.fU()?0:1;}
function QG(a){return a.b6!=2?0:1;}
function QP(a){return a.b6!=3?0:1;}
function PL(a){if(a.il())return a.eP;G(Ul());}
function DB(b){BN();return HO(2,b);}
function Pn(){WO=HO(0,0);WN=HO(1,0);}
var DJ=E();
var XN=null;var XO=null;function Eu(){Eu=Q(DJ);QJ();}
function KA(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;Eu();d=$rt_doubleToLongBits(b);c.eA=X(H(d,F(0, 2147483648)),M)?0:1;e=H(d,F(4294967295, 1048575));f=I(Y(d,52))&2047;if(X(e,M)&&!f){c.c1=M;c.dk=0;return;}g=0;if(f)h=Cl(e,F(0, 1048576));else{h=T(e,1);while(X(H(h,F(0, 1048576)),M)){h=T(h,1);f=f+(-1)|0;g=g+1|0;}}i=Mj(XO,f);if(i<0)i=( -i|0)-2|0;j=f-XO.data[i]|0;k=12+j|0;l=FQ(h,XN.data[i],k);if(BV(l,F(2808348672, 232830643))){i=i+1|0;m=f-XO.data[i]|0;k=12+m|0;l=FQ(h,XN.data[i],k);}n=S(XN.data[i],(63-k|0)-g|0);o=Y(L(n,
C(1)),1);p=Y(n,1);if(X(h,F(0, 1048576)))p=Y(p,2);q=J4(l,p);r=KX(l,o);m=Dg(q,r);h=m>0?P(Be(l,q),q):m<0?L(P(Be(l,r),r),r):P(Be(L(l,Be(r,C(2))),r),r);if(BV(h,F(2808348672, 232830643))){i=i+1|0;h=Be(h,C(10));}else if(Bt(h,F(1569325056, 23283064))){i=i+(-1)|0;h=P(h,C(10));}c.c1=h;c.dk=i-330|0;}
function J4(b,c){var d,e;Eu();d=C(10);while(Bm(d,c)){d=P(d,C(10));}e=BJ(b,d);if(BV(e,Be(c,C(2))))d=Be(d,C(10));return d;}
function KX(b,c){var d,e;Eu();d=C(1);while(Bm(d,c)){d=P(d,C(10));}e=BJ(b,d);if(B4(R(d,e),Be(c,C(2))))d=Be(d,C(10));return d;}
function FQ(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;Eu();e=H(b,C(65535));f=H(S(b,16),C(65535));g=H(S(b,32),C(65535));h=H(S(b,48),C(65535));i=H(c,C(65535));j=H(S(c,16),C(65535));k=H(S(c,32),C(65535));l=H(S(c,48),C(65535));m=L(L(P(k,e),P(j,f)),P(i,g));n=L(L(L(P(l,e),P(k,f)),P(j,g)),P(i,h));o=L(L(P(l,f),P(k,g)),P(j,h));p=L(P(l,g),P(k,h));q=P(l,h);r=L(L(T(q,32+d|0),T(p,16+d|0)),T(o,d));s=d>16?L(r,T(n,d-16|0)):L(r,S(n,16-d|0));s=L(s,S(m,32-d|0));return s;}
function QJ(){var b,c,d,e,f,g,h,i,j,k,l;XN=Ur(660);XO=U(660);b=F(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=XN.data;g=d+330|0;f[g]=DU(e,C(80));XO.data[g]=c;e=DU(e,C(10));h=G4(e,C(10));while(Bm(e,b)&&X(H(e,F(0, 2147483648)),M)){e=T(e,1);c=c+1|0;h=T(h,1);}e=L(e,Be(h,C(10)));d=d+1|0;}i=F(3435973836, 214748364);j=1023;d=0;while(d<330){k=0;e=b;while(B4(e,i)){e=Y(e,1);k=k+1|0;j=j+(-1)|0;}h=P(e,C(10));if(k<=0)b=h;else{l=H(b,C((1<<k)-1|0));b=L(h,Y(P(l,C(10)),k));}f=XN.data;g=(330-d|0)-1|0;f[g]=DU(b,C(80));XO.data[g]
=j;d=d+1|0;}}
function Gc(){Ec.call(this);this.fb=null;}
function UM(a){var b=new Gc();Qy(b,a);return b;}
function Qy(a,b){JT(a,b);}
function N$(a){return a.fb;}
function Lj(a,b){a.fb=b;}
var EZ=E();
var VN=null;function To(){To=Q(EZ);Lc();}
function Lc(){VN=U((Fh()).data.length);VN.data[Bb(VM)]=1;VN.data[Bb(VK)]=2;VN.data[Bb(VJ)]=3;}
var Kb=E(CQ);
function Gr(){B.call(this);this.eN=null;}
function U5(a){var b=new Gr();Q9(b,a);return b;}
function Q9(a,b){K(a);a.eN=b;}
function Li(a,b){O9(a.eN,b);}
function Ob(a,b){a.dS(b);}
function IE(){var a=this;B.call(a);a.eT=null;a.f7=0;}
function TY(a){var b=new IE();O3(b,a);return b;}
function O3(a,b){K(a);a.eT=b;}
var IC=E(BG);
var IY=E(BG);
var F$=E(CG);
function T3(a){var b=new F$();Ol(b,a);return b;}
function GG(b){if(b!==null&&!(typeof b==='undefined'?1:0))return T3(b);return null;}
function Ol(a,b){F7(a,b);}
function E7(a){return JB(a.bG);}
function Ha(a,b){return (E7(a))[b];}
function Ml(a){return (E7(a)).length;}
function NP(a,b){return Ha(a,b);}
var JE=E(W);
function UK(){var a=new JE();Q1(a);return a;}
function Q1(a){BK(a);}
var IT=E();
function Uj(){var a=new IT();Lf(a);return a;}
function Lf(a){K(a);}
$rt_packages([-1,"java",0,"util",0,"nio",2,"charset",0,"lang",-1,"dev",5,"webfx",6,"platform",7,"shared",8,"services",9,"json",10,"spi",7,"client",12,"services",13,"webassembly",14,"spi"]);
$rt_metadata([B,0,0,[],0,3,0,0,["kb",Vg(CY),"b1",Vg(OP),"A",Vh(Ly),"f",Vg(NR),"ja",Vg(Do),"cR",Vg(SH)],B$,0,B,[],0,3,0,0,["dG",Vg(PO),"c2",Vg(O1),"hb",Vg(Qp),"i1",Vg(QT),"eW",Vh(Sr)],BR,0,B$,[],0,3,0,0,["e",Vg(DH),"r",Vh(Ek)],W,0,BR,[],0,3,0,0,["e",Vg(BK),"r",Vh(C_)],DI,"IndexOutOfBoundsException",4,W,[],0,3,0,0,["e",Vg(Ic),"r",Vh(Rf)],DS,0,B,[],3,3,0,0,["bj",Vh(RO),"gT",Vh(QV),"hq",Vh(SB),"gJ",Vh(Sp)],Er,0,B,[DS],3,3,0,0,["bj",Vh(RO),"gT",Vh(QV),"hq",Vh(SB),"gJ",Vh(Sp)],EY,0,B,[DS],3,3,0,0,["bj",Vh(RO),"gT",
Vh(QV),"hq",Vh(SB),"gJ",Vh(Sp),"es",Vg(P7)],Df,"JsonProvider",11,B,[Er,EY],3,3,0,0,["bj",Vh(RO),"gT",Vh(QV),"hq",Vh(SB),"gJ",Vh(Sp),"es",Vg(P7),"hJ",Vg(Pc)],Da,0,B,[Df],3,3,0,0,["bj",Vh(RO),"gT",Vh(QV),"hq",Vh(SB),"gJ",Vh(Sp),"es",Vg(P7),"hJ",Vg(Pc)],CS,0,B,[Da],3,3,0,0,["bj",Vh(RO),"gT",Vh(QV),"hq",Vh(SB),"gJ",Vh(Sp),"es",Vg(P7),"hJ",Vg(Pc)],CG,0,B,[CS],1,0,0,0,["gT",Vh(QV),"hq",Vh(SB),"gJ",Vh(Sp),"es",Vg(P7),"hJ",Vg(Pc),"dQ",Vh(F7),"fB",Vg(Kg),"cl",Vh(HY),"f$",Vg(JY),"el",Vh(Ke),"fG",Vh(Ga),"bj",Vh(Jo),"fh",
Vh(HA),"f",Vg(Gj),"bx",Vg(Q0),"dD",Vg(SI),"dr",Vh(LM),"b3",Vh(LV),"d8",Vh(RZ)],Hg,0,B,[],0,3,0,0,["je",Vi(P1),"id",Vg(Pm),"d2",Vh(Pq),"iO",Vh(P$),"gA",Vh(SY)],D2,0,B,[],3,3,0,0,["hz",Vh(MU)],Fe,0,B,[D2],3,3,0,0,["hz",Vh(MU)],BB,0,B,[],3,3,0,0,0,Ba,0,B,[BB],1,3,0,0,["e",Vg(Bi)],Bj,0,B,[],3,3,0,0,0,CI,0,Ba,[Bj],0,3,0,BS,["bs",Vh(IV),"Q",Vg(MK),"f",Vg(Q5)],I7,"CloneNotSupportedException",4,BR,[],0,3,0,0,["e",Vg(RC)],Cg,0,B,[],0,0,0,OR,0,E0,0,B,[],32,0,0,UU,0,Fl,0,B,[],4,3,0,BW,0,F3,0,Ba,[Bj],0,3,0,Cm,["kQ",Vh(Ja),
"Q",Vg(LR),"f",Vg(P8)],Cd,0,B,[],3,3,0,0,0,EL,0,B,[],3,3,0,0,0,Cf,0,B,[EL],0,3,0,FU,["r",Vh(HT),"jl",Vi(Fc),"g8",Vg(Ln)],BC,0,B,[],3,3,0,0,0,Fa,0,B,[BC],3,3,0,0,0,JG,0,B,[Fa],1,3,0,0,["ko",Vh(Sy),"kd",Vg(N5)],D_,0,B,[],3,3,0,0,["gN",Vi(O6),"iW",Vh(SK),"h6",Vh(PQ),"d4",Vh(Os),"dY",Vi(ML)],C8,0,B,[D_,Da],3,3,0,0,["gN",Vi(O6),"iW",Vh(SK),"h6",Vh(PQ),"d4",Vh(Os),"dY",Vi(ML),"bj",Vh(RO),"gT",Vh(QV),"hq",Vh(SB),"gJ",Vh(Sp),"es",Vg(P7),"hJ",Vg(Pc),"hh",Vh(OW),"dv",Vh(N0)],Bh,0,Ba,[Bj,BB],0,3,0,Bc,["r",Vh(II),"ck",
Vi(Fd),"hw",Vi(Ia),"kO",Vj(Ji),"j9",Vi(GF),"jS",Vi(K6),"dq",Vg(OT),"fm",Vg(P2),"bl",Vh(N6),"bv",Vh(L7),"bf",Vg(Rc),"cI",Vh(PI),"K",Vh(Ls),"ev",Vg(PB),"cq",Vg(SD),"cC",Vh(OO),"iL",Vg(P6),"bz",Vg(ME),"dd",Vh(Mh),"A",Vh(OD),"hj",Vh(Sx),"z",Vh(RV),"bn",Vh(Mk),"fs",Vh(Qw),"jI",Vg(Bx),"d1",Vg(L9)],Gb,"ArithmeticException",4,W,[],0,3,0,0,["r",Vh(ON)],KJ,0,B,[],4,3,0,0,0,Db,0,B,[],3,3,0,0,0,CO,0,B$,[],0,3,0,0,["r",Vh(IU),"fu",Vh(HG)],CQ,0,CO,[],0,3,0,0,["r",Vh(GH)],KE,"StringIndexOutOfBoundsException",4,DI,[],0,3,0,
0,["e",Vg(PX)],CW,0,B,[],3,3,0,0,0,Hi,0,B,[CW],0,3,0,0,["i6",Vh(OX),"dh",Vh(Nv),"f4",Vh(Kj)],Fm,0,B,[],3,3,0,0,0,Hh,0,B,[Fm],0,3,0,0,["i6",Vh(Sj),"g2",Vh(Nh)],D1,0,B,[],4,3,0,RR,0,J5,0,B,[],4,3,0,0,0,Cy,0,B,[],0,3,0,0,["e",Vg(Fy)],FB,0,Cy,[],0,3,0,0,["jO",function(b,c,d,e,f,g,h,i,j,k,l,m,n){Mx(this,b,c,d,e,f,g,h,i,j,k,l,m,n);},"kc",function(b,c,d,e,f,g,h,i,j,k,l,m,n){Gd(this,b,c,d,e,f,g,h,i,j,k,l,m,n);}],FX,0,B,[],3,3,0,0,0,EB,0,B,[FX],3,3,0,0,0,E5,0,B,[],3,3,0,0,0]);
$rt_metadata([B7,0,B,[EB,E5],1,3,0,0,["e",Vg(Dj),"cn",Vj(LZ)],EU,0,B7,[],0,3,0,R0,["ex",Vh(MV)],BG,0,B,[BC],1,3,0,0,0,G3,0,BG,[],1,3,0,0,0,FK,0,B,[],4,3,0,0,0,CN,0,B,[BB,Db],0,0,0,0,["e",Vg(EV),"bs",Vh(Ez),"ky",Vh(Kw),"kR",Vh(EN),"cA",Vi(Fj),"kD",Vh(HM),"eB",Vi(Ms),"gK",Vj(Rr),"jV",Vh(Kc),"eM",Vi(K2),"h_",Vj(LI),"j2",Vh(Js),"ef",Vi(IR),"ji",Vh(KM),"fE",Vi(KC),"fd",Vi(Jj),"bI",Vh(EQ),"f",Vg(Eq),"i",Vg(J6),"o",Vh(GL),"kh",Vj(HV),"eb",Vk(GJ),"kp",Vj(Kp),"eK",Vk(GN),"eG",Vk(JQ),"er",Vh(JJ)],C$,0,B,[],3,3,0,0,0,Gx,
0,CN,[C$],0,3,0,0,["bs",Vh(Sb),"e",Vg(RL),"Z",Vh(Ce),"d",Vh(LN),"t",Vh(L$),"ip",Vh(Qz),"hK",Vh(OU),"n",Vh(LA),"ey",Vj(OJ),"fD",Vj(Ra),"hS",Vi(PW),"hs",Vi(RA),"hE",Vk(Mf),"i9",Vk(Ov),"hl",Vi(Sg),"iv",Vi(MJ),"ha",Vi(St),"er",Vh(SC),"eG",Vk(Ps),"eK",Vk(So),"eb",Vk(Nn),"o",Vh(Ql),"i",Vg(Nj),"f",Vg(DE),"bI",Vh(SE),"fd",Vi(LQ),"fE",Vi(Ll),"ef",Vi(Pp),"eM",Vi(Oc),"cA",Vi(SO)],Fk,0,B,[D_],3,3,0,0,["gN",Vi(O6),"iW",Vh(SK),"h6",Vh(PQ),"d4",Vh(Os),"dY",Vi(ML)],De,0,B,[C8,Fk],3,3,0,0,["gN",Vi(O6),"iW",Vh(SK),"h6",Vh(PQ),
"d4",Vh(Os),"dY",Vi(ML),"bj",Vh(RO),"gT",Vh(QV),"hq",Vh(SB),"gJ",Vh(Sp),"es",Vg(P7),"hJ",Vg(Pc),"hh",Vh(OW),"dv",Vh(N0),"ij",Vi(L0)],DP,0,B,[CS],3,3,0,0,["bj",Vh(RO),"gT",Vh(QV),"hq",Vh(SB),"gJ",Vh(Sp),"es",Vg(P7),"hJ",Vg(Pc),"dD",Vg(OF),"b3",Vh(RJ),"d8",Vh(Sl),"cl",Vh(NA)],Dn,0,B,[De,DP],1,3,0,0,["gN",Vi(O6),"iW",Vh(SK),"h6",Vh(PQ),"d4",Vh(Os),"dY",Vi(ML),"bj",Vh(RO),"gT",Vh(QV),"hq",Vh(SB),"gJ",Vh(Sp),"es",Vg(P7),"hJ",Vg(Pc),"hh",Vh(OW),"dv",Vh(N0),"ij",Vi(L0),"dD",Vg(OF),"b3",Vh(RJ),"d8",Vh(Sl),"cl",Vh(NA),
"e",Vg(G1),"hy",Vh(Kx),"gz",Vg(Pd),"hx",Vg(L4),"fz",Vg(Q$),"cT",Vh(R7),"gP",Vi(NM),"g0",Vg(Sq),"f",Vg(Sd),"f8",Vi(Rb)],JO,"ConcurrentModificationException",1,W,[],0,3,0,0,["e",Vg(Sv)],FJ,0,B,[],3,3,0,0,0,FS,0,B,[],3,3,0,0,0,Io,0,B,[FS],0,3,0,0,["j_",Vh(Su),"gh",Vh(Lk),"kt",Vh(Hc)],Dl,0,B,[],3,3,0,0,0,JS,0,B,[Dl],0,3,0,0,["e",Vg(RX),"bk",Vg(La),"iP",Vg(GM)],C5,"WebAssemblyProvider",15,B,[],3,3,0,0,["ht",Vi(Rd)],EJ,0,B,[C5],4,3,0,0,["ht",Vi(Rd),"e",Vg(NK),"hN",Vg(Ns),"gV",Vh(NN)],Hz,"CoderMalfunctionError",3,
CO,[],0,3,0,0,["fu",Vh(LO)],DK,0,B,[Cd],1,3,0,0,["e",Vg(IX),"f",Vg(No)],CC,0,B,[],3,3,0,0,0,D7,0,DK,[CC,BB],0,3,0,0,["dp",Vh(QB),"e",Vg(I3),"bs",Vh(Eg),"j0",Vi(Ky),"cV",Vh(QI),"km",Vh(GT),"ks",Vj(C7),"kF",Vg(Di),"br",Vi(L8),"dU",Vi(Qq),"bX",Vj(N2),"hA",Vh(Qh),"cr",Vg(Or),"kw",Vh(HR),"J",Vg(On)],G_,0,D7,[Cd],0,3,0,0,["e",Vg(MO),"bs",Vh(Of),"dp",Vh(Nx),"cV",Vh(LK),"bX",Vj(Sh),"br",Vi(QW),"dU",Vi(Si),"dR",Vh(Lz),"f9",Vg(Qr),"i7",Vg(OL),"gF",Vh(Oz),"iq",Vh(LP)],HN,0,CN,[C$],0,3,0,0,["e",Vg(QS),"gy",Vh(OZ),"h$",
Vi(O0),"f",Vg(NC),"bI",Vh(NU),"cA",Vi(LJ)],CM,0,B,[],1,3,0,0,["bs",Vh(Fq),"kI",Vg(CV),"jh",Vh(JK),"jL",Vg(H8),"j3",Vg(B5),"jK",Vg(Cn)],B_,0,B,[Bj,BB],1,3,0,0,["ck",Vi(D0),"jm",Vg(Bb)],Ch,0,B_,[],12,3,0,D6,0,CK,0,B,[],0,0,0,0,["co",Vh(Ep),"bb",Vg(NI),"kA",Vg(KP),"jk",Vg(FR)],CD,0,B,[],3,3,0,0,0,JD,0,CK,[CD],0,0,0,0,["co",Vh(PM),"hV",Vg(Nu),"S",Vg(Q_)],Ef,0,B,[],3,3,0,0,0,D8,0,B,[Ef,CC],0,0,0,0,["kM",Vi(K1),"bt",Vg(Rj),"bR",Vg(Se)],CU,0,D8,[],0,0,0,0,["hr",Vi(HW)],FC,0,CU,[],4,0,0,0,["hr",Vi(Qm)],Ee,0,B,[],0,
3,0,0,0,CL,0,CQ,[],0,3,0,0,["r",Vh(FE)],JR,0,CL,[],0,3,0,0,["r",Vh(Oi)],E2,0,BR,[],0,3,0,0,0,FO,0,B,[],3,3,0,0,0,HC,0,B,[FO],0,3,0,0,["e",Vg(Ne)],G$,0,B,[CD],0,0,0,0,["jR",Vh(Nr),"bb",Vg(L5),"S",Vg(Qk)],DA,0,B,[],3,3,0,0,0,D3,0,B,[DA],0,0,0,0,["hH",Vi(GZ),"gm",Vh(S4),"hR",Vg(LL)],DY,"UnsupportedOperationException",4,W,[],0,3,0,0,["e",Vg(Gp)],KY,"ReadOnlyBufferException",2,DY,[],0,3,0,0,["e",Vg(RW)],Fs,0,B,[],3,3,0,0,0,EO,0,B,[],3,3,0,0,0,GX,0,B,[],4,3,0,0,0]);
$rt_metadata([Du,0,B,[],3,3,0,0,0,DF,0,B,[Du],3,3,0,0,0,KV,0,B,[DF],4,3,0,0,["e",Vg(N9),"dc",Vh(Sk),"c5",Vh(RF),"dm",Vh(Qf)],I$,0,BG,[],1,3,0,0,0,I9,0,B,[CD],0,0,0,0,["kG",Vh(Na),"bb",Vg(RB),"S",Vg(M2)],HK,0,B,[],0,3,0,0,["e",Vg(NG)],IM,0,B,[],4,0,0,0,0,Hq,0,CL,[],0,3,0,0,["r",Vh(NZ)],Fn,0,B,[FJ],3,3,0,0,["h0",Vh(PZ),"hc",Vg(R1),"ii",Vh(Rt)],Jp,0,B,[Fn],0,3,0,0,["h0",Vh(PZ),"hc",Vg(R1),"ii",Vh(Rt),"e",Vg(NE),"dx",Vg(R_),"fe",Vg(MR),"fq",Vg(Qi),"iz",Vg(Mv),"c3",Vh(RY),"c8",Vh(Qe),"c0",Vh(NO)],DV,0,B,[],3,3,0,
0,0,CX,0,B,[DV],3,3,0,0,0,Cu,0,B,[CX],1,3,0,0,["e",Vg(FH)],IO,0,B,[],4,3,0,0,0,F6,0,Ba,[Bj],0,3,0,Qg,["jp",Vh(H4)],Ey,0,B,[],3,3,0,0,0,KZ,0,B,[Ey],0,3,0,0,["e",Vg(Nl)],F9,0,B,[],3,3,0,0,0,K4,0,B,[],0,3,0,0,["e",Vg(Ru),"gX",Vg(QC),"bk",Vg(Rh),"ez",Vh(Mq),"iI",Vg(MN)],Ix,0,B,[],4,0,0,0,0,H9,0,B,[DV],4,3,0,0,["bg",Vg(HQ)],H5,0,B,[],4,3,0,0,0,Dk,0,B,[],1,3,0,0,["kx",Vk(Kr),"g5",Vj(JU),"jt",Vh(F_),"is",Vh(R3),"kL",Vh(Kk),"hT",Vh(Rp),"kr",Vj(Hw),"js",Vh(GD),"gG",Vh(Lx)],B6,0,B,[],4,3,0,EA,0,C1,0,Cy,[],4,0,0,Cq,["e",
Vg(Hb),"jT",Vg(Jz),"kH",Vi(Jk),"kK",Vh(Hr)],J3,"ArrayStoreException",4,W,[],0,3,0,0,["e",Vg(PN)],C6,0,B,[Da,D2],3,3,0,0,["bj",Vh(RO),"gT",Vh(QV),"hq",Vh(SB),"gJ",Vh(Sp),"es",Vg(P7),"hJ",Vg(Pc),"hz",Vh(MU),"iT",Vh(PP)],DM,0,CM,[Bj],1,3,0,0,["i_",function(b,c,d,e,f){Hd(this,b,c,d,e,f);},"fl",Vj(QQ),"jC",Vh(JH),"j4",Vg(ES)],J8,0,DM,[],0,0,0,0,["jo",function(b,c,d,e,f,g,h){L1(this,b,c,d,e,f,g,h);},"gv",Vg(QD)],GC,0,B,[],4,0,0,0,["jB",Vi(J$),"ke",Vg(JL),"ku",Vg(Kf)],BM,0,B_,[],12,3,0,Bn,0,BP,0,B,[BB],0,3,0,GI,["ck",
Vi(KG),"Q",Vg(Dh)],H6,0,B,[],4,3,0,0,0,Dt,0,B,[Bj],1,3,0,0,["kg",Vi(Ij)],C4,0,B,[],0,3,0,FL,["r",Vh(IA)],BY,0,B,[BB,Bj],0,3,0,Es,["kj",Vh(H2),"fk",Vg(QA),"f",Vg(Mz),"A",Vh(Mb)],CJ,"IllegalArgumentException",4,W,[],0,3,0,0,["e",Vg(E1),"r",Vh(K9)],IN,"IllegalCharsetNameException",3,CJ,[],0,3,0,0,["r",Vh(P3)],K5,"NoSuchElementException",1,W,[],0,3,0,0,["e",Vg(LW)],E9,0,B,[],32,0,0,TA,0,Jl,0,B,[BC],1,3,0,0,0,Dv,0,B7,[],0,3,0,0,["ki",Vh(GK)],DZ,0,Dv,[],0,3,0,0,["kn",Vi(FF),"cn",Vj(Mu),"hu",Vh(O_),"cg",Vh(RK),"fg",
Vh(N8),"iG",Vh(Sc),"iM",Vg(Ou)],Fb,0,B,[CX],3,3,0,0,0,CH,0,Cu,[Fb],1,3,0,0,["e",Vg(E$)],DL,0,CH,[],0,0,0,0,["kJ",Vh(Iz),"gH",Vg(Op)],I4,0,DL,[],4,0,0,0,["co",Vh(Ow),"bg",Vg(Qo)],Gn,0,Dn,[],0,3,0,0,["gN",Vi(O6),"iW",Vh(SK),"h6",Vh(PQ),"d4",Vh(Os),"dY",Vi(ML),"bj",Vh(RO),"gT",Vh(QV),"hq",Vh(SB),"gJ",Vh(Sp),"es",Vg(P7),"hJ",Vg(Pc),"hh",Vh(OW),"dv",Vh(N0),"ij",Vi(L0),"dD",Vg(OF),"b3",Vh(RJ),"d8",Vh(Sl),"cl",Vh(NA),"e",Vg(Ry),"hy",Vh(Rn),"cd",Vg(PH),"dt",Vh(R8),"i4",Vg(NL),"dr",Vh(OC),"bx",Vg(N1)],Et,0,B,[],3,3,
0,0,0,Eh,0,B,[],3,3,0,0,0]);
$rt_metadata([JN,0,B,[Et,Eh],0,3,0,0,["f",Vg(Lb),"f3",Vg(Nb),"gW",Vh(O$),"fC",Vg(Sw),"cN",Vg(Qx),"d9",Vg(Lv)],KN,0,BG,[],1,3,0,0,0,Cp,0,Ba,[Bj],0,3,0,IZ,["jd",Vh(EK),"e6",Vh(Jy),"A",Vh(Mg)],Hs,0,B,[],0,3,0,0,0,DD,0,B,[],4,3,0,0,0,DG,0,B,[],0,0,0,T4,0,HJ,0,B,[],4,0,0,0,0,HD,0,B,[],4,3,0,0,0,EW,0,B,[BC],3,0,0,0,0,J0,0,CK,[CD],0,0,0,0,["co",Vh(Q6),"S",Vg(RG)],Bf,0,Ba,[Bj,BB],0,3,0,Bd,["iK",Vj(Fv),"r",Vh(KS),"e6",Vh(HP),"jE",Vi(Cw),"bs",Vh(Ho),"bd",Vh(LS),"P",Vh(OY),"cK",Vh(Rz),"gS",Vj(M0),"fA",Vj(LD),"I",Vi(QY),
"h8",Vg(SS),"bf",Vg(Pe),"bw",Vg(Ri),"F",Vi(Rs),"dy",Vh(Lo),"R",Vg(Ok)],FW,0,B,[DA],3,3,0,0,0,Gm,0,D3,[FW],4,0,0,0,["hH",Vi(N3),"hi",Vh(Mi)],Ej,0,B,[],4,3,0,LC,0,B2,0,B,[Bj],0,3,0,BE,0,Ds,0,B,[],4,3,0,C3,0,C0,0,B,[C6,CS,Fe],3,3,0,0,["bj",Vh(RO),"gT",Vh(QV),"hq",Vh(SB),"gJ",Vh(Sp),"es",Vg(P7),"hJ",Vg(Pc),"hz",Vh(MU),"iT",Vh(PP)],Ec,0,B,[C0,DP],1,3,0,0,["bj",Vh(RO),"gT",Vh(QV),"hq",Vh(SB),"gJ",Vh(Sp),"es",Vg(P7),"hJ",Vg(Pc),"hz",Vh(MU),"iT",Vh(PP),"dD",Vg(OF),"b3",Vh(RJ),"d8",Vh(Sl),"cl",Vh(NA),"ia",Vh(JT),"c9",
Vh(MP),"J",Vg(PC)],G7,0,B,[BC],1,3,0,0,0,Dq,0,CM,[Bj,C$,Db,F9],1,3,0,0,["hv",Vj(Gk),"ix",Vj(Mt),"eQ",Vh(Le)],DO,0,Dq,[],1,0,0,0,["hv",Vj(IB)],Kq,0,DO,[],0,0,0,0,["j6",function(b,c,d,e,f,g){SN(this,b,c,d,e,f,g);},"iF",Vh(MW)],Jt,0,B,[],4,3,0,0,0,Fr,0,B,[BC],3,3,0,0,0,KT,0,B,[Fr],0,3,0,0,["j8",Vh(Pj),"ig",Vh(Qj),"jJ",Vh(K3),"ju",Vh(QF)],Ju,0,B,[BC],1,3,0,0,0,Dx,0,B,[Du],0,3,0,0,["e",Vg(Jq),"ga",Vh(KL),"dc",Vh(Np),"dm",Vh(MF)],Ct,0,B,[],0,0,0,Bv,0,D9,0,Dx,[DF],1,3,0,0,["e",Vg(IW),"ga",Vh(O8),"jA",Vh(Jv),"c5",Vh(Rl)],Ci,
0,Ba,[Bj],0,3,0,JI,["e6",Vh(JX),"Q",Vg(Om),"f",Vg(Mw),"A",Vh(SZ),"f5",Vg(Mn),"fQ",Vg(NW)],I1,0,B,[],0,0,0,0,0,Je,0,B,[],4,3,0,0,0,KI,0,CH,[],0,0,0,0,["co",Vh(OM),"J",Vg(Rx),"bg",Vg(Rk)],K8,0,B,[],4,0,0,0,["e",Vg(Ma)],Cv,0,B,[CX],3,3,0,0,0,DC,0,Cu,[Cv],1,3,0,0,["e",Vg(Kz),"bg",Vg(PF)],EX,0,B,[],3,3,0,0,0,Hy,0,DC,[CC,BB,EX],0,3,0,0,["bs",Vh(Gu),"kP",Vh(Ox),"bI",Vh(Mo),"eq",Vh(OE),"J",Vg(M_),"de",Vh(QU),"f",Vg(Nk)],Jb,0,D9,[],0,3,0,0,["e",Vg(Nq),"iY",Vg(Lg)],GB,0,B,[],0,0,0,0,0,Ir,0,B,[],0,0,0,0,0,EI,0,B,[BC],
3,0,0,0,0,B3,0,B,[BB,Bj,Db],0,3,0,F5,["iD",Vh(GU),"iK",Vj(K$),"o",Vh(MZ),"i",Vg(Qb),"bM",Vg(R2),"eS",Vh(Pu),"et",Vi(MB),"cW",Vh(Pt),"iQ",Vi(M4),"iA",Vh(Rm),"by",Vi(LT),"he",Vh(Rv),"f",Vg(NQ),"f_",Vg(R9),"A",Vh(QR),"eE",Vh(Q7),"b1",Vg(MQ)],F0,0,B7,[],0,3,0,Lh,["ex",Vh(SR)],K_,"NegativeArraySizeException",4,W,[],0,3,0,0,["e",Vg(Ng)],Eb,0,Dk,[],1,3,0,0,["g5",Vj(Im),"hn",Vi(M6)],IP,0,Eb,[],0,3,0,0,["jv",Vh(Pv),"gM",function(b,c,d,e,f,g,h){return SA(this,b,c,d,e,f,g,h);}],EP,0,B,[BC],3,0,0,0,0,Hm,0,B,[EP],0,3,0,
0,["i$",Vh(Ld),"iy",Vi(MA),"jW",Vi(Q8)],Hl,0,B,[EW],0,3,0,0,["jU",Vh(Pb),"ik",Vh(SU),"fO",Vh(O5)]]);
$rt_metadata([Ev,0,B,[BC],3,0,0,0,0,Hk,0,B,[Ev],0,3,0,0,["e7",Vh(OQ),"dS",Vh(NJ),"fO",Vh(OA)],ER,"NumberFormatException",4,CJ,[],0,3,0,0,["e",Vg(MI),"r",Vh(SL)],F1,0,Dt,[],0,3,0,PY,["h5",Vg(Rq)],Ex,"IllegalStateException",4,BR,[],0,3,0,0,["e",Vg(Px),"r",Vh(HB)],It,0,B,[Fs],4,0,0,0,["dQ",Vh(LG),"ir",Vh(Mm),"eh",Vi(Nc),"jq",Vi(Ik)],Gt,"NullPointerException",4,W,[],0,3,0,0,["r",Vh(PG),"e",Vg(Oe)],Il,0,B,[],4,3,0,0,0,Kl,0,B,[],4,3,0,0,0,ED,0,Ba,[Bj],0,3,0,Re,["jn",Vh(I_)],GP,0,B,[CW],0,3,0,0,["ka",Vi(RM),"dh",Vh(OH),
"f4",Vh(Gv)],BH,0,B_,[],12,3,0,F2,0,Gh,0,B,[Dl],0,3,0,0,["e",Vg(Q2),"bk",Vg(PV),"iP",Vg(Ih)],FA,0,B,[],0,3,0,E8,["r",Vh(G0),"eF",Vh(L3),"iN",Vi(Ro),"iZ",Vj(OS)],El,0,B,[BB],0,3,0,0,["kC",Vi(RT),"fT",Vg(NS),"c2",Vg(OK),"go",Vg(N_),"i3",Vh(NT)],Ht,0,B,[EO],4,0,0,0,["dQ",Vh(MS),"gs",Vh(PU)],Iy,0,B,[CW],0,3,0,0,["e7",Vh(MX),"dh",Vh(PJ),"f4",Vh(GS)],FG,0,CG,[De],4,3,0,0,["gN",Vi(O6),"iW",Vh(SK),"h6",Vh(PQ),"d4",Vh(Os),"dY",Vi(ML),"gT",Vh(QV),"hq",Vh(SB),"gJ",Vh(Sp),"es",Vg(P7),"hJ",Vg(Pc),"hh",Vh(OW),"dv",Vh(N0),
"ij",Vi(L0),"e",Vg(Lq),"dQ",Vh(Hx),"kB",Vh(J_),"jP",Vg(IS),"jY",Vi(KF),"f",Vg(SW),"fh",Vh(SF),"bj",Vh(MD),"fG",Vh(Nt),"el",Vh(P9),"f$",Vg(Sa),"cl",Vh(OG),"fB",Vg(L6),"f8",Vi(Q4),"cT",Vh(OV),"fz",Vg(Pg)],J7,"BufferOverflowException",2,W,[],0,3,0,0,["e",Vg(Qc)],HI,0,B,[],0,3,0,0,0,DT,0,B,[],0,3,0,BN,["jy",Vi(IF),"gp",Vg(L2),"df",Vg(QE),"il",Vg(Sz),"h4",Vg(QG),"fU",Vg(QP),"i",Vg(PL)],DJ,0,B,[],4,3,0,Eu,0,Gc,0,Ec,[],4,3,0,0,["bj",Vh(RO),"gT",Vh(QV),"hq",Vh(SB),"gJ",Vh(Sp),"es",Vg(P7),"hJ",Vg(Pc),"hz",Vh(MU),"iT",
Vh(PP),"dD",Vg(OF),"b3",Vh(RJ),"d8",Vh(Sl),"cl",Vh(NA),"ia",Vh(Qy),"fI",Vg(N$),"hI",Vh(Lj)],EZ,0,B,[],32,0,0,To,0,Kb,0,CQ,[],0,3,0,0,0,Gr,0,B,[EI],0,3,0,0,["e7",Vh(Q9),"dS",Vh(Li),"fO",Vh(Ob)],IE,0,B,[],0,3,0,0,["iD",Vh(O3)],IC,0,BG,[],1,3,0,0,0,IY,0,BG,[],1,3,0,0,0,F$,0,CG,[C0],4,0,0,0,["gT",Vh(QV),"hq",Vh(SB),"gJ",Vh(Sp),"es",Vg(P7),"hJ",Vg(Pc),"hz",Vh(MU),"iT",Vh(PP),"jj",Vh(Ol),"j7",Vg(E7),"jw",Vh(Ha),"J",Vg(Ml),"c9",Vh(NP)],JE,"BufferUnderflowException",2,W,[],0,3,0,0,["e",Vg(Q1)],IT,0,B,[],0,3,0,0,["e",
Vg(Lf)]]);
function $rt_array(cls,data){this.ol=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["<java_object>@",": ","\tat ","Caused by: ",",","null","0",".","Null pointer","JSON does not allow non-finite numbers","JSON does not allow non-finite numbers.","\"\"","\\t","\\n","\\f","\\r","000","\\u","\\b","number","object","string","boolean","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ",
"black","white, rgb(255, 204, 0) 15%, rgb(135, 31, 19) 33%, rgb(0, 0, 153) 67%, rgb(0, 102, 255) 85%, white","blueviolet, orange, brown, black","red, red","white, rgb(0, 102, 255) 18% , rgb(51, 51, 51) 50%, rgb(229, 0, 178) 85%, white","red, yellow 18%, green 29%, #1E90FF 44%, red","black, red 17%, yellow 83%, white","red, orange, green, blue, yellow, white","main","Zero length BigInteger","Radix out of range","Negative bit address","Negative exponent","BigInteger divide by zero","BIG_ENDIAN","LITTLE_ENDIAN",
"Using default built-in JSON factory which is not interoperable with the underlying platform! Be sure you haven\'t forgot to call Json.registerProvider().","Index out of bounds","(this Map)",", ","New position "," is outside of range [0;","]","RETURN_NULL","TRACE_AND_RETURN_NULL","THROW_EXCEPTION","Exception raised in Future.compose()","failed","succeeded","Result is already complete: ","Replacement preconditions do not hold","Action must be non-null","2","10","The last byte in src "," is outside of array of size ",
"Length "," must be non-negative","Offset ",")","STRING","NUMBER","BOOLEAN","OBJECT","ARRAY","NULL","UNDEFINED","OFF","SEVERE","WARNING","INFO","CONFIG","FINE","FINER","FINEST","ALL","IGNORE","REPLACE","REPORT","false","true","javaClass@","Either src or dest is null","Scale out of range.","Infinite or NaN","Infinity or NaN","Division by zero","Rounding necessary","Overflow","Underflow","Cannot instantiate any provider for service ","The last char in dst ","power of ten too big","[]","(this Collection)","classes.wasm",
"cy","width","height","placeIndex","frameIndex","wasm","computeLinePixelIterations","initAndComputeLinePixelIterations","UTF-8","Invalid rounding mode","UP","DOWN","CEILING","FLOOR","HALF_UP","HALF_DOWN","HALF_EVEN","UNNECESSARY","global",""]);
B3.prototype.toString=function(){return $rt_ustr(this);};
B3.prototype.valueOf=B3.prototype.toString;B.prototype.toString=function(){return $rt_ustr(NR(this));};
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
~a);};}var L=Long_add;var R=Long_sub;var P=Long_mul;var Be=Long_div;var BJ=Long_rem;var Cl=Long_or;var H=Long_and;var JM=Long_xor;var T=Long_shl;var Y=Long_shr;var S=Long_shru;var Dg=Long_compare;var X=Long_eq;var BA=Long_ne;var Bt=Long_lt;var Bm=Long_le;var B4=Long_gt;var BV=Long_ge;var XP=Long_not;var Bo=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(Uy);
main.javaException=$rt_javaException;
(function(){var c;c=JG.prototype;c.getLength=c.kd;c.get=c.ko;c=KT.prototype;c.handleEvent=c.ju;c=Hm.prototype;c.apply=c.jW;c=Hl.prototype;c.handle=c.fO;c=Hk.prototype;c.handle=c.fO;c=Gr.prototype;c.handle=c.fO;})();
})();

main()