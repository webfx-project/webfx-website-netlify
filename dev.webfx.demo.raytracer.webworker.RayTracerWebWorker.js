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
function $rt_cls(cls){return G0(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return U6(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.i.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return Yb;}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(V0());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return Bx();}
function $rt_setThread(t){return Du(t);}
function $rt_createException(message){return Yc(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var G=$rt_throw;var Dg=$rt_compare;var Yd=$rt_nullCheck;var F=$rt_cls;var U=$rt_createArray;var Bh=$rt_isInstance;var Qo=$rt_nativeThread;var W1=$rt_suspending;var Xa=$rt_resuming;var Ve=$rt_invalidPointer;var D=$rt_s;var L=$rt_eraseClinit;var Ey=$rt_imul;var W=$rt_wrapException;var Ye=$rt_checkBounds;var Yf=$rt_checkUpperBound;var Yg=$rt_checkLowerBound;var Yh=$rt_wrapFunction0;var Yi=$rt_wrapFunction1;var Yj=$rt_wrapFunction2;var Yk=$rt_wrapFunction3;var Yl=$rt_wrapFunction4;var C=$rt_classWithoutFields;var C3
=$rt_createArrayFromData;var Ym=$rt_createCharArrayFromData;var Yn=$rt_createByteArrayFromData;var Yo=$rt_createShortArrayFromData;var VV=$rt_createIntArrayFromData;var Yp=$rt_createBooleanArrayFromData;var Yq=$rt_createFloatArrayFromData;var Yr=$rt_createDoubleArrayFromData;var O9=$rt_createLongArrayFromData;var Ys=$rt_createBooleanArray;var DE=$rt_createByteArray;var Yt=$rt_createShortArray;var BI=$rt_createCharArray;var E5=$rt_createIntArray;var Xc=$rt_createLongArray;var Yu=$rt_createFloatArray;var Yv=$rt_createDoubleArray;var Dg
=$rt_compare;var Yw=$rt_castToClass;var Yx=$rt_castToInterface;var Yy=Long_toNumber;var H=Long_fromInt;var Yz=Long_fromNumber;var Q=Long_create;var BL=Long_ZERO;var YA=Long_hi;var DL=Long_lo;
function B(){this.f=null;this.$id$=0;}
function P9(){var a=new B();E(a);return a;}
function DJ(b){var c;if(b.f===null)D9(b);if(b.f.u===null)b.f.u=Bx();else if(b.f.u!==Bx())G(JS(D(0)));c=b.f;c.x=c.x+1|0;}
function Be(b){var c,d;if(!Cr(b)&&b.f.u===Bx()){c=b.f;d=c.x-1|0;c.x=d;if(!d)b.f.u=null;Cr(b);return;}G(Qi());}
function VO(b){Se(b,1);}
function Se(b,c){var d,$p,$z;$p=0;if(Xa()){var $T=Qo();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.f===null)D9(b);if(b.f.u===null)b.f.u=Bx();if(b.f.u===Bx()){d=b.f;d.x=d.x+c|0;return;}$p=1;case 1:TW(b,c);if(W1()){break _;}return;default:Ve();}}Qo().s(b,c,d,$p);}
function D9(b){b.f=XI();}
function TW(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.bi=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.hd=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=X5(callback);return thread.suspend(function(){try{X0(b,c,callback);}catch($e){callback.hd($rt_exception($e));}});}
function X0(b,c,d){var e,f,g;e=Bx();if(b.f===null){D9(b);Du(e);f=b.f;f.x=f.x+c|0;d.bi(null);return;}if(b.f.u===null){b.f.u=e;Du(e);f=b.f;f.x=f.x+c|0;d.bi(null);return;}g=b.f;if(g.M===null)g.M=LX();Mb(g.M,Xy(e,b,c,d));}
function VU(b){Mu(b,1);}
function Mu(b,c){var d;if(!Cr(b)&&b.f.u===Bx()){d=b.f;d.x=d.x-c|0;if(d.x>0)return;d.u=null;if(d.M!==null&&!DI(d.M))L1(WR(b));else Cr(b);return;}G(Qi());}
function QL(b){var c,d,e;if(!Cr(b)&&b.f.u===null){c=b.f;if(c.M!==null&&!DI(c.M)){d=c.M;e=N6(d);c.M=null;e.dP();}return;}}
function Cr(a){var b,c;b=a.f;if(b===null)return 1;a:{b:{if(b.u===null){if(b.M!==null){c=b.M;if(!DI(c))break b;}if(b.ej===null)break a;c=b.ej;if(DI(c))break a;}}return 0;}KQ(a);return 1;}
function KQ(a){a.f=null;}
function E(a){}
function EG(a){return G0(a.constructor);}
function PW(a){return Db(a);}
function L7(a,b){return a!==b?0:1;}
function OY(a){return (((K()).e(D(1))).e(FR(Db(a)))).d();}
function Db(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function Uy(a){var b,c,d;if(!Bh(a,Co)){b=a;if(b.constructor.$meta.item===null)G(Vl());}c=Ma(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function T9(b){QL(b);}
function MK(b,c,d,e){var f;Du(b);c.f.u=b;f=c.f;f.x=f.x+d|0;e.bi(null);}
function Bo(){var a=this;B.call(a);a.de=null;a.f4=null;a.cl=0;a.cF=0;}
function YB(a,b,c,d){var e=new Bo();HS(e,a,b,c,d);return e;}
function YC(){var a=new Bo();JV(a);return a;}
function YD(a){var b=new Bo();FE(b,a);return b;}
function YE(a){var b=new Bo();J1(b,a);return b;}
function HS(a,b,c,d,e){if(e)a.cu();a.cl=d;a.cF=e;a.de=b;a.f4=c;}
function JV(a){a.cl=1;a.cF=1;a.cu();}
function FE(a,b){a.cl=1;a.cF=1;a.cu();a.de=b;}
function J1(a,b){a.cl=1;a.cF=1;a.cu();a.f4=b;}
function Rj(a){return a;}
function P6(a){return a.de;}
var BC=C(Bo);
function YF(){var a=new BC();Dv(a);return a;}
function YG(a){var b=new BC();Ee(b,a);return b;}
function Dv(a){JV(a);}
function Ee(a,b){FE(a,b);}
var O=C(BC);
function YH(){var a=new O();Bq(a);return a;}
function Yc(a){var b=new O();DX(b,a);return b;}
function Bq(a){Dv(a);}
function DX(a,b){Ee(a,b);}
var Dy=C(O);
function G5(){var a=new Dy();HU(a);return a;}
function Cs(a){var b=new Dy();S1(b,a);return b;}
function HU(a){Bq(a);}
function S1(a,b){DX(a,b);}
var Bf=C(0);
function JD(b){return b;}
var Fb=C(0);
function C1(){B.call(this);this.cX=null;}
function XY(a){var b=new C1();SD(b,a);return b;}
function SD(a,b){E(a);a.cX=b;}
function G6(){var a=this;B.call(a);a.d9=null;a.fz=null;a.e9=0;a.fK=0;}
function VR(a,b){var c=new G6();Rw(c,a,b);return c;}
function Rw(a,b,c){E(a);a.d9=b;a.fz=c;}
function Qy(a){return B9(a.d9);}
function QN(a,b){return BY(a.fz)<b?0:1;}
function RB(a,b){a.e9=b;}
function UR(a,b){a.fK=b;}
var Bv=C(0);
var X=C();
function B$(a){E(a);}
var Bb=C(0);
function Ct(){X.call(this);this.dG=0;}
var YI=null;var YJ=null;function BW(){BW=L(Ct);Q0();}
function RE(a){var b=new Ct();IC(b,a);return b;}
function IC(a,b){BW();B$(a);a.dG=b;}
function Ih(b,c){BW();if(!(c>=2&&c<=36))c=10;return ((Xq(20)).eg(b,c)).d();}
function FR(b){BW();return Mc(b,4);}
function Hy(b){BW();return Ih(b,10);}
function Hb(b,c){var d,e,f,g,h;BW();if(c>=2&&c<=36){if(b!==null&&!b.ci()){a:{d=0;e=0;switch(b.o(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.c())G(X4());while(e<b.c()){g=e+1|0;h=FZ(b.o(e));if(h<0)G(Dc((((K()).e(D(2))).e(b)).d()));if(h>=c)G(Dc((((((K()).e(D(3))).w(c)).e(D(4))).e(b)).d()));f=Ey(c,f)+h|0;if(f<0){if(g==b.c()&&f==(-2147483648)&&d)return (-2147483648);G(Dc((((K()).e(D(5))).e(b)).d()));}e=g;}if(d)f= -f|0;return f;}G(Dc(D(6)));}G(Dc((((K()).e(D(7))).w(c)).d()));}
function E8(b){BW();return Hb(b,10);}
function Bc(b){BW();if(b>=(-128)&&b<=127){G_();return YJ.data[b+128|0];}return RE(b);}
function G_(){var b;BW();a:{if(YJ===null){YJ=U(Ct,256);b=0;while(true){if(b>=YJ.data.length)break a;YJ.data[b]=RE(b-128|0);b=b+1|0;}}}}
function NJ(a){return a.dG;}
function SK(a){return Hy(a.dG);}
function G9(b){var c,d,e;BW();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function Q0(){YI=F($rt_intcls());}
var IX=C(BC);
function Vl(){var a=new IX();To(a);return a;}
function To(a){Dv(a);}
var B4=C();
var YK=null;var YL=null;var YM=null;var YN=null;var YO=null;function PZ(){PZ=L(B4);Tz();}
function Tz(){YK=VV([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);YL=O9([H(1),H(10),H(100),H(1000),H(10000),H(100000),H(1000000),H(10000000),H(100000000),H(1000000000),Q(1410065408, 2),Q(1215752192, 23),Q(3567587328, 232),Q(1316134912, 2328),Q(276447232, 23283),Q(2764472320, 232830),Q(1874919424, 2328306),Q(1569325056, 23283064),Q(2808348672, 232830643)]);YM=O9([H(1),H(10),H(100),H(10000),H(100000000),Q(1874919424, 2328306)]);YN=Vz();YO=W5();}
var EF=C();
var YP=null;function Xu(){Xu=L(EF);O_();}
function O_(){YP=E5((EB()).data.length);YP.data[Bl(YQ)]=1;YP.data[Bl(YR)]=2;YP.data[Bl(YS)]=3;YP.data[Bl(YT)]=4;YP.data[Bl(YU)]=5;YP.data[Bl(YV)]=6;}
var Dr=C(0);
function Ot(a,b){return b;}
function MQ(a,b){if(b===null)return null;if(Bh(b,CL))return a.hQ(b);if(!Bh(b,CV))return a.c$(b);return a.gD(b);}
function SC(a,b){return b.bw();}
function Q8(a,b){return b.bw();}
var Ec=C(0);
var FK=C(0);
function Md(a){return (ED(a.bw(),a,K())).d();}
function LS(b,c){var d,e,f,g,h;c.j(123);d=1;e=b.gh();f=0;g=e.r();while(f<g){h=e.hx(f);if(!d)c.j(44);Ji(h,c);c.j(58);ED(b.cH(h),b,c);d=0;f=f+1|0;}return c.j(125);}
function N0(b,c){return (UA(b,D(8),c.j(91))).j(93);}
function UA(b,c,d){var e,f;e=b.r();f=0;while(f<e){if(f>0)d.e(c);ED(b.cV(f),b,d);f=f+1|0;}return d;}
function ED(b,c,d){Xu();switch(YP.data[Bl(c.cD(b))]){case 1:return d.e(D(9));case 2:return LS(c.b8(b),d);case 3:return N0(c.c7(b),d);case 4:return d.e(O5(c.bf(b)));case 5:return d.U(c.bf(b));case 6:return Ji(c.bf(b),d);default:}return d;}
function PM(b){if(b.cL(46)>0&&b.cL(101)<0&&b.cL(69)<0){while(b.eD(D(10))){b=b.bL(0,b.c()-1|0);}if(b.eD(D(11)))b=b.bL(0,b.c()-1|0);}return b;}
function O5(b){if(b!==null){SX(b);return PM(b.d());}G(Ch(D(12)));}
function SX(b){var c;a:{b:{if(b!==null){if(b instanceof B7){if((PK(0.0)).D(b))break b;c=b;if(!c.fA()&&!c.fR())break b;G(Ch(D(13)));}if(b instanceof Ca&&!(VX(0.0)).D(b)){c=b;if(c.fA())break a;if(c.fR())break a;}}}return;}G(Ch(D(14)));}
function Ji(b,c){var d,e,f,g,h,i,j;if(Rb(b))return c.e(D(15));d=0;e=b.c();c.j(34);f=0;while(f<e){a:{g=b.o(f);switch(g){case 8:break;case 9:c.e(D(16));break a;case 10:c.e(D(17));break a;case 12:c.e(D(18));break a;case 13:c.e(D(19));break a;case 34:case 92:c.j(92);c.j(g);break a;case 47:if(d==60)c.j(92);c.j(g);break a;default:if(g>=32){c.j(g);break a;}h=FR(g);i=K();Y(Y(i,D(20)),h);j=Bg(i);(c.e(D(21))).e(j.he(j.c()-4|0));break a;}c.e(D(22));}f=f+1|0;d=g;}return c.j(34);}
var CI=C(0);
function Q4(a){return a.b8(a.dl());}
var CG=C(0);
var DQ=C(0);
function MJ(a,b){return ME(a.iX(b));}
var CL=C(0);
function Qd(a,b){return a.bf(a.cV(b));}
function FP(){X.call(this);this.dU=BL;}
var YW=null;function Ja(){Ja=L(FP);Sh();}
function Xk(a){var b=new FP();I4(b,a);return b;}
function I4(a,b){Ja();B$(a);a.dU=b;}
function Et(b){Ja();return Xk(b);}
function Mt(a){return DL(a.dU);}
function GU(b){Ja();return ((K()).iv(b)).d();}
function Ry(a){return GU(a.dU);}
function DN(b,c){return Long_udiv(b, c);}
function GS(b,c){return Long_urem(b, c);}
function Sh(){YW=F($rt_longcls());}
var Da=C(0);
var Jf=C();
function XA(){var a=new Jf();NQ(a);return a;}
function NQ(a){E(a);}
function My(a){return I2(a);}
function I2(a){return NG();}
var B2=C(0);
var EC=C(0);
function B3(){var a=this;B.call(a);a.fH=BL;a.gr=BL;a.hh=null;a.h1=null;a.gQ=0;a.i2=null;}
var YX=null;var YY=null;var YZ=0;var Y0=0;var Y1=null;function FI(){FI=L(B3);N$();}
function U0(a){var b=new B3();HA(b,a);return b;}
function Y2(a,b){var c=new B3();E6(c,a,b);return c;}
function HA(a,b){FI();E6(a,null,b);}
function E6(a,b,c){var d;FI();E(a);a.hh=P9();a.gQ=1;a.h1=c;a.i2=b;d=YZ;YZ=d+1|0;a.fH=H(d);}
function Du(b){FI();if(YY!==b)YY=b;YY.gr=IW();}
function Bx(){FI();return YY;}
function LW(a){return a.fH;}
function N$(){YX=U0(D(23));YY=YX;YZ=1;Y0=1;Y1=W3();}
var DC=C(0);
var E1=C(0);
var JJ=C();
function Ui(a,b){return a.jY(b);}
function Pd(a){return a.jU();}
var CP=C(0);
var Ej=C(0);
var CZ=C(0);
var GA=C();
function MO(b){return b;}
function DI(b){return b.length?0:1;}
function Mb(b,c){var d;d=MO(c);b.push(d);}
function N6(b){return b.shift();}
var EK=C(0);
var DV=C(0);
function Je(){B.call(this);this.ft=null;}
function Xm(a){var b=new Je();QA(b,a);return b;}
function QA(a,b){E(a);a.ft=b;}
function RS(a,b){LE(a,b);}
function LE(a,b){KD(a.ft,b);}
function Cn(){B.call(this);this.bz=null;}
function Fv(a,b){E(a);a.bz=b;}
function GN(a){return a.bz;}
function F4(a,b){var c,d,e;if(b===null){Z();return YQ;}a:{c=$rt_str(typeof b);d=(-1);switch(c.b2()){case -1034364087:if(!c.D(D(24)))break a;d=2;break a;case -1023368385:if(!c.D(D(25)))break a;d=0;break a;case -891985903:if(!c.D(D(26)))break a;d=1;break a;case 64711720:if(!c.D(D(27)))break a;d=3;break a;default:}}switch(d){case 0:if(!(Object.prototype.toString.apply(b)==='[object Array]'?1:0)){Z();e=YR;}else{Z();e=YS;}return e;case 1:break;case 2:Z();return YT;case 3:Z();return YU;default:Z();return Y3;}Z();return YV;}
function GZ(a){return Jd();}
function KJ(a,b){if(!(b instanceof E9))return He(b);return b;}
function K3(a,b){if(!(b instanceof EP))return RL(b);return b;}
function JF(a,b){XQ();switch(Y4.data[Bl(a.cD(b))]){case 1:return Pk(b);case 2:return CQ(Ow(b));case 3:return M7(b);default:}return b;}
function Gx(a,b){if(b===null)return null;if(b instanceof BU)return $rt_ustr(b);if(b instanceof BO)return !!b.e$();if(b instanceof Ca)return b.jN();if(b instanceof B7)return b.bx();if(b instanceof X)return b.N();if(!(b instanceof BS))return b;return $rt_ustr(In(b));}
function Lz(a){return a.ec();}
function M7(b){var c;c=UX(b);if(c!==Sr(c))return Bu(c);if(TB(c)<=2.147483647E9)return Bc(c|0);return Et(Yz(c));}
function MP(a){return a.fi();}
function T3(a){return a.f5();}
function MW(a,b){return a.e6(b);}
function MS(a,b){return a.ex(b);}
function L6(a,b){return a.d7(b);}
function Jd(){return {};}
function M3(b){var keys=[];for(var key in b){if(Object.prototype.hasOwnProperty.call(b,key)&&key!='$H'){keys.push(key);}}return keys;}
var C_=C(0);
function Uc(a,b,c){return Po(C3(B,[a.dc(b),c]));}
function UW(a,b){El();return Y5.D(a.h6(b));}
function Ox(a,b){return Tk(a.dc(b));}
function Un(a,b){return Ei(a.dc(b));}
function Sa(a,b,c){return Ei(a.gO(b,c));}
var CV=C(0);
function Pw(a,b){return a.b8(a.cH(b));}
function Rc(a,b){return a.bf(a.cH(b));}
var Fy=C(0);
var CX=C(0);
function Sm(a,b,c){return a.fT(b,a.gV(c));}
var EP=C(Cn);
function Y6(){var a=new EP();NS(a);return a;}
function Xh(a){var b=new EP();JB(b,a);return b;}
function RL(b){if(b!==null&&!(typeof b==='undefined'?1:0))return Xh(b);return null;}
function NS(a){JB(a,Jd());}
function JB(a,b){Fv(a,b);}
function LA(a,b){return a.bz[$rt_ustr(b)]||null;}
function HV(a){return He(M3(a.bz));}
function K$(a,b,c){a.bz[$rt_ustr(b)]=c;return a;}
function OM(a){return Lz(a);}
function T1(a,b){return Gx(a,b);}
function RP(a,b){return JF(a,b);}
function Or(a,b){return K3(a,b);}
function PD(a,b){return KJ(a,b);}
function L_(a){return GZ(a);}
function Qz(a,b){return F4(a,b);}
function Mg(a){return GN(a);}
function QG(a,b,c){return K$(a,b,c);}
function Sk(a,b){return LA(a,b);}
function QI(a){return HV(a);}
var Fe=C(0);
function Jc(){B.call(this);this.eI=null;}
function X6(a){var b=new Jc();Ub(b,a);return b;}
function Ub(a,b){E(a);a.eI=b;}
function OF(a,b){GP(a.eI,b);}
function BK(){var a=this;B.call(a);a.n=null;a.S=null;}
function FG(a){E(a);}
var C5=C(0);
var CA=C(Bo);
function Y7(a){var b=new CA();IA(b,a);return b;}
function Y8(a){var b=new CA();Hl(b,a);return b;}
function IA(a,b){FE(a,b);}
function Hl(a,b){J1(a,b);}
var CF=C(CA);
function Y9(a){var b=new CF();Gr(b,a);return b;}
function Gr(a,b){IA(a,b);}
var ES=C(0);
var S=C(0);
function Gm(){B.call(this);this.eu=null;}
function U$(a){var b=new Gm();Nz(b,a);return b;}
function Nz(a,b){E(a);a.eu=b;}
function Ol(a,b){return Jv(a,b);}
function Jv(a,b){return Uv(a.eu,b);}
var KT=C(Dy);
function Pp(){var a=new KT();Rs(a);return a;}
function Rs(a){HU(a);}
function DW(){B.call(this);this.hf=null;}
var Y$=null;var Y_=null;function TA(){TA=L(DW);Uw();}
function Qu(a){var b=new DW();F1(b,a);return b;}
function F1(a,b){TA();E(a);a.hf=b;}
function Uw(){Y$=Qu(D(28));Y_=Qu(D(29));}
var Kb=C();
function HD(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.eG.data;f=b.fU;b.fU=f+1|0;g=N2(e[f]);h=(g%2|0)!=1?0:1;c=c+Ey(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function GB(b){var c,d;c=HD(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function N2(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function D4(){B.call(this);this.c0=null;}
function Za(){var a=new D4();Ix(a);return a;}
function Ix(a){E(a);}
function Jk(a,b){a.c0=b;}
function Mq(a,b){a.c0.cZ(b);}
function MG(a,b){a.c0.c8(b);}
var FJ=C(0);
var Es=C(0);
var EV=C(0);
var Cz=C();
function D8(a){E(a);}
function MH(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.gY(f[c]);e=e+1|0;c=g;}}
var EL=C(Cz);
var Zb=null;function TK(){TK=L(EL);Pe();}
function V4(){var a=new EL();Kw(a);return a;}
function Kw(a){TK();D8(a);}
function NT(a,b){Q7(b);}
function Pe(){Zb=V4();}
var Fa=C(0);
var Bm=C();
var GQ=C(Bm);
function Ip(){var a=this;B.call(a);a.em=null;a.fO=null;a.dq=null;a.e7=null;a.bV=null;}
function VZ(){var a=new Ip();Rm(a);return a;}
function Rm(a){E(a);}
function KC(a,b,c){if(b!==null)a.em=b;if(c!==null)a.fO=c;return a;}
function Kt(a){var b;if(a.dq===null){b=Hw(a.em.fL());if(b.y())a.dq=b.s();}return a.dq;}
function IM(a){var b,c;a:{if(a.bV===null){a.bV=Kt(a);if(a.e7!==null){b=a.e7.t();while(true){if(!b.y())break a;c=b.s();a.bV=c.g(a.bV);}}}}return a.bV;}
function Cy(){var a=this;B.call(a);a.b=null;a.l=0;}
function Zc(){var a=new Cy();EM(a);return a;}
function Xq(a){var b=new Cy();Er(b,a);return b;}
function Zd(a){var b=new Cy();K5(b,a);return b;}
function Ze(a){var b=new Cy();Is(b,a);return b;}
function EM(a){Er(a,16);}
function Er(a,b){E(a);a.b=BI(b);}
function K5(a,b){Is(a,b);}
function Is(a,b){var c;E(a);a.b=BI(b.c());c=0;while(c<a.b.data.length){a.b.data[c]=b.o(c);c=c+1|0;}a.l=b.c();}
function KG(a,b){return a.e2(a.l,b);}
function EE(a,b){return a.cs(a.l,b);}
function E_(a,b,c){var d,e,f;if(b>=0&&b<=a.l){if(c===null)c=D(9);else if(c.ci())return a;a.bG(a.l+c.c()|0);d=a.l-1|0;while(d>=b){a.b.data[d+c.c()|0]=a.b.data[d];d=d+(-1)|0;}a.l=a.l+c.c()|0;d=0;while(d<c.c()){e=a.b.data;f=b+1|0;e[b]=c.o(d);d=d+1|0;b=f;}return a;}G(Pp());}
function Hs(a,b){return a.eg(b,10);}
function Np(a,b,c){return a.gJ(a.l,b,c);}
function Tf(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)Ba(a,b,b+1|0);else{Ba(a,b,b+2|0);f=a.b.data;g=b+1|0;f[b]=45;b=g;}a.b.data[b]=CE(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Ey(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;Ba(a,b,b+i|0);if(e)l=b;else{f=a.b.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.b.data;g=l+1|0;f[l]=CE(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function Km(a,b){return a.es(a.l,b);}
function Lq(a,b,c){return a.ia(b,c,10);}
function Me(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(IZ(c,BL)){e=0;c=Vi(c);}a:{f=H(d);if(IZ(c,f)){if(e)Ba(a,b,b+1|0);else{Ba(a,b,b+2|0);g=a.b.data;h=b+1|0;g[b]=45;b=h;}a.b.data[b]=CE(DL(c),d);}else{i=1;j=H(1);while(true){k=N(j,f);if(CU(k,j))break;if(IB(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;Ba(a,b,b+i|0);if(e)l=b;else{g=a.b.data;l=b+1|0;g[b]=45;}while(true){if(CU(j,BL))break a;g=a.b.data;h=l+1|0;g[l]=CE(DL(Bd(c,j)),d);c=De(c,j);j=Bd(j,f);l=h;}}}return a;}
function Jp(a,b){return a.d0(a.l,b);}
function Iw(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=Dg(c,0.0);if(!d){Ba(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=48;e=a.b.data;f=d+1|0;e[d]=46;a.b.data[f]=48;return a;}if(!d){Ba(a,b,b+4|0);e=a.b.data;d=b+1|0;e[b]=45;e=a.b.data;f=d+1|0;e[d]=48;e=a.b.data;d=f+1|0;e[f]=46;a.b.data[d]=48;return a;}if(isNaN(c)?1:0){Ba(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=78;e=a.b.data;f=d+1|0;e[d]=97;a.b.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Ba(a,b,b+8|0);d=b;}else{Ba(a,b,b+9|0);e=a.b.data;d=b+1|0;e[b]=45;}e=a.b.data;f=d+
1|0;e[d]=73;e=a.b.data;d=f+1|0;e[f]=110;e=a.b.data;f=d+1|0;e[d]=102;e=a.b.data;d=f+1|0;e[f]=105;e=a.b.data;f=d+1|0;e[d]=110;e=a.b.data;d=f+1|0;e[f]=105;e=a.b.data;f=d+1|0;e[d]=116;a.b.data[f]=121;return a;}PZ();g=YN;KK(c,g);h=g.cQ;i=g.c6;j=g.ef;k=1;l=1;if(j)l=2;m=18;n=OJ(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=B_(m,k+1|0);i=0;}else{h=Bd(h,YL.data[ -i|0]);m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(!(i>(-100)&&i<100))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;Ba(a,b,b+d|0);if
(!j)o=b;else{e=a.b.data;o=b+1|0;e[b]=45;}p=Q(1569325056, 23283064);q=0;while(q<m){if(CU(p,BL))r=0;else{r=DL(Bd(h,p));h=De(h,p);}e=a.b.data;d=o+1|0;e[o]=(48+r|0)&65535;k=k+(-1)|0;if(k)o=d;else{e=a.b.data;o=d+1|0;e[d]=46;}p=Bd(p,H(10));q=q+1|0;}if(i){e=a.b.data;d=o+1|0;e[o]=69;if(i>=0)f=d;else{i= -i|0;e=a.b.data;f=d+1|0;e[d]=45;}if(i>=100){e=a.b.data;d=f+1|0;e[f]=(48+(i/100|0)|0)&65535;i=i%100|0;e=a.b.data;o=d+1|0;e[d]=(48+(i/10|0)|0)&65535;}else if(i<10)o=f;else{e=a.b.data;o=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.b.data[o]
=(48+(i%10|0)|0)&65535;}return a;}
function OJ(b){var c,d,e,f;c=H(1);d=0;e=16;PZ();f=YM.data.length-1|0;while(f>=0){if(CT(De(b,N(c,YM.data[f])),BL)){d=d|e;c=N(c,YM.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function K8(a,b){return a.fl(a.l,b);}
function KP(a,b,c){Ba(a,b,b+1|0);a.b.data[b]=c;return a;}
function Jb(a,b,c){return a.cs(b,c===null?D(9):c.d());}
function EH(a,b){var c;if(a.b.data.length>=b)return;c=a.b.data.length>=1073741823?2147483647:B_(b,B_(a.b.data.length*2|0,5));a.b=NK(a.b,c);}
function Ek(a){return Pf(a.b,0,a.l);}
function Ke(a){return a.l;}
function HB(a,b,c,d){return a.dX(a.l,b,c,d);}
function Gt(a,b,c,d,e){var f,g;if(d<=e&&e<=c.c()&&d>=0){Ba(a,b,(b+e|0)-d|0);while(d<e){f=a.b.data;g=b+1|0;f[b]=c.o(d);d=d+1|0;b=g;}return a;}G(G5());}
function JQ(a,b,c,d,e){var f,g,h,i;if(b>c)G(Cs(D(30)));while(b<c){f=d.data;g=e+1|0;h=a.b.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function JL(a,b){a.l=b;}
function Ba(a,b,c){var d,e;d=a.l-b|0;a.bG((a.l+c|0)-b|0);e=d-1|0;while(e>=0){a.b.data[c+e|0]=a.b.data[b+e|0];e=e+(-1)|0;}a.l=a.l+(c-b|0)|0;}
var C2=C(0);
var Ge=C(Cy);
function Vd(a){var b=new Ge();TU(b,a);return b;}
function K(){var a=new Ge();Tw(a);return a;}
function XW(a){var b=new Ge();Mm(b,a);return b;}
function TU(a,b){Er(a,b);}
function Tw(a){EM(a);}
function Mm(a,b){K5(a,b);}
function Y(a,b){KG(a,b);return a;}
function Ml(a,b){EE(a,b);return a;}
function BA(a,b){Hs(a,b);return a;}
function R8(a,b){Km(a,b);return a;}
function P0(a,b){Jp(a,b);return a;}
function Gf(a,b){K8(a,b);return a;}
function SU(a,b,c,d){HB(a,b,c,d);return a;}
function Rn(a,b,c){Lq(a,b,c);return a;}
function Tm(a,b,c){Iw(a,b,c);return a;}
function M$(a,b,c,d,e){Gt(a,b,c,d,e);return a;}
function T0(a,b,c){Jb(a,b,c);return a;}
function NI(a,b,c){KP(a,b,c);return a;}
function Ua(a,b,c){E_(a,b,c);return a;}
function Um(a,b){JL(a,b);}
function QP(a,b,c,d,e){JQ(a,b,c,d,e);}
function Oy(a,b,c,d,e){return a.hE(b,c,d,e);}
function Oq(a){return Ke(a);}
function Bg(a){return Ek(a);}
function Ur(a,b){EH(a,b);}
function Mp(a,b,c){return a.hj(b,c);}
function LV(a,b,c){return a.iB(b,c);}
function QK(a,b,c){return a.hr(b,c);}
function Pl(a,b,c){return a.hV(b,c);}
function UI(a,b,c){return a.hb(b,c);}
var FD=C();
var Zf=null;function UL(){UL=L(FD);S0();}
function Kr(b){var c,d;UL();c=Zf.cJ(b);if(c===null){d=Zf;c=VZ();d.bm(b,c);}return c;}
function Fw(b,c,d){var e,f,g,h,i,j;UL();e=Kr(b);f=KC(e,c,d);g=IM(f);if(g!==null)return g;e=f.fO;DH();if(e!==Zg){h=b.ik();i=K();Y(Y(i,D(31)),h);j=Bg(i);if(e===Zh)G(JS(j));e=Ll();Mr();e.iL(Zi,j);}return null;}
function S0(){Zf=UN();}
var JP=C(O);
function OO(){var a=new JP();Ud(a);return a;}
function Ud(a){Bq(a);}
var Fk=C(0);
var FU=C(0);
function LY(b){return U9(b);}
function OQ(a,b){return a.ga(b,Wv());}
var Dm=C(0);
var Cf=C();
function FX(a){E(a);}
function E0(a,b,c){c.bI(b);}
function DF(a,b,c){c.b4(b);}
function K4(a,b,c){var d;EQ(b,D(32));EQ(c,D(33));d=V1(b,c);a.bv(d);return d;}
function Ce(){var a=this;Cf.call(a);a.B=null;a.O=null;}
var Zj=null;function Dw(){Dw=L(Ce);M4();}
function Zk(){var a=new Ce();Dk(a);return a;}
function Dk(a){Dw();FX(a);}
function Qn(a){var b,c;DJ(a);try{if(a.B instanceof C1)b=null;else{c=a.B;Dw();b=c!==Zj?a.B:null;}return b;}finally{Be(a);}}
function ST(a,b){var c;EQ(b,D(34));c=!Bh(b,B0)?WH(a,b):b;a.bv(c);return a;}
function Gz(a,b){var c,d,e,$$je;DJ(a);a:{b:{try{c=a.B;if(c===null)break b;Be(a);}catch($$e){$$je=W($$e);d=$$je;break a;}if(c instanceof C1)DF(a,c.cX,b);else{Dw();if(c===Zj)c=null;E0(a,c,b);}return;}c:{try{if(a.O===null){a.O=b;break c;}if(a.O instanceof Eb)e=a.O;else{e=V8();e.by(a.O);a.O=e;}e.by(b);break c;}catch($$e){$$je=W($$e);d=$$je;break a;}}try{Be(a);}catch($$e){$$je=W($$e);d=$$je;break a;}return;}Be(a);G(d);}
function Hv(a,b){var c,d,$$je;DJ(a);a:{b:{c:{try{if(a.B===null)break c;Be(a);}catch($$e){$$je=W($$e);c=$$je;break b;}return 0;}d:{try{if(b!==null){c=b;break d;}Dw();c=Zj;break d;}catch($$e){$$je=W($$e);c=$$je;break b;}}try{a.B=c;d=a.O;a.O=null;Be(a);break a;}catch($$e){$$je=W($$e);c=$$je;}}Be(a);G(c);}if(d!==null)E0(a,b,d);return 1;}
function OD(a,b){var c,d,$$je;if(b===null)b=Pc(null);DJ(a);a:{b:{c:{try{if(a.B===null)break c;Be(a);}catch($$e){$$je=W($$e);c=$$je;break b;}return 0;}try{a.B=XY(b);d=a.O;a.O=null;Be(a);break a;}catch($$e){$$je=W($$e);c=$$je;}}Be(a);G(c);}if(d!==null)DF(a,b,d);return 1;}
function RH(a){var b,c,d,$$je;DJ(a);a:{b:{try{if(!(a.B instanceof C1))break b;b=a.B.cX.cR();c=K();Gf(Y(Y(c,D(35)),b),125);b=Bg(c);Be(a);}catch($$e){$$je=W($$e);b=$$je;break a;}return b;}c:{try{if(a.B!==null)break c;Be(a);}catch($$e){$$je=W($$e);b=$$je;break a;}return D(36);}d:{try{b=a.B;Dw();if(b!==Zj)break d;Be(a);}catch($$e){$$je=W($$e);b=$$je;break a;}return D(37);}try{d=XW(D(38));a.iW(a.B,d);d.e(D(39));b=d.d();Be(a);}catch($$e){$$je=W($$e);b=$$je;break a;}return b;}Be(a);G(b);}
function PF(a,b,c){c.U(b);}
function M4(){Zj=P9();}
var D5=C(Ce);
function KU(a){Dk(a);}
var B0=C(0);
function G$(){var a=this;D5.call(a);a.eA=null;a.fs=null;}
function V1(a,b){var c=new G$();Tt(c,a,b);return c;}
function Tt(a,b,c){KU(a);a.eA=b;a.fs=c;}
function SQ(a,b){var c,d,$$je;a:{try{c=a.eA.g(b);break a;}catch($$e){$$je=W($$e);if($$je instanceof Bo){d=$$je;}else{throw $$e;}}a.cK(d);return;}c.bv(Fd(a));}
function P_(a,b){var c,d,$$je;a:{try{c=a.fs.g(b);break a;}catch($$e){$$je=W($$e);if($$je instanceof Bo){d=$$je;}else{throw $$e;}}a.cK(d);return;}c.bv(Fd(a));}
function Fd(a){return XB(a);}
var Hh=C(CA);
function Wu(a){var b=new Hh();Mn(b,a);return b;}
function Mn(a,b){Hl(a,b);}
function Cm(){B.call(this);this.dg=null;}
function E$(a){E(a);}
function Oz(a){var b,c,d;b=K();b.j(123);c=(a.fY()).t();if(c.y()){d=c.s();b.U(d.br()!==a?d.br():D(40));b.j(61);b.U(d.bQ()!==a?d.bQ():D(40));}while(c.y()){b.e(D(41));d=c.s();b.U(d.br()!==a?d.br():D(40));b.j(61);b.U(d.bQ()!==a?d.bQ():D(40));}b.j(125);return b.d();}
var Co=C(0);
function D0(){var a=this;Cm.call(a);a.z=0;a.h=null;a.E=0;a.f$=0.0;a.b$=0;}
function UN(){var a=new D0();IT(a);return a;}
function Zl(a){var b=new D0();D_(b,a);return b;}
function Zm(a,b){var c=new D0();KI(c,a,b);return c;}
function R_(a,b){return U(CJ,b);}
function IT(a){D_(a,16);}
function D_(a,b){KI(a,b,0.75);}
function Kx(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function KI(a,b,c){var d;E$(a);if(b>=0&&c>0.0){d=Kx(b);a.z=0;a.h=a.c9(d);a.f$=c;EZ(a);return;}G(HE());}
function EZ(a){a.b$=a.h.data.length*a.f$|0;}
function Si(a,b){var c;c=GG(a,b);if(c===null)return null;return c.T;}
function GG(a,b){var c,d,e;if(b===null)c=C8(a);else{d=EU(b);e=d&(a.h.data.length-1|0);c=CW(a,b,e,d);}return c;}
function CW(a,b,c,d){var e,f;e=a.h.data[c];while(e!==null){if(e.cg==d){f=e.bc;if(G7(b,f))break;}e=e.L;}return e;}
function C8(a){var b;b=a.h.data[0];while(b!==null&&b.bc!==null){b=b.L;}return b;}
function M0(a,b,c){return a.dD(b,c);}
function RY(a,b,c){var d,e,f,g,h;if(b===null){d=C8(a);if(d===null){a.E=a.E+1|0;d=a.b0(null,0,0);e=a.z+1|0;a.z=e;if(e>a.b$)a.cp();}}else{f=EU(b);g=f&(a.h.data.length-1|0);d=CW(a,b,g,f);if(d===null){a.E=a.E+1|0;d=a.b0(b,g,f);e=a.z+1|0;a.z=e;if(e>a.b$)a.cp();}}h=d.T;d.T=c;return h;}
function O6(a,b,c,d){var e;e=WQ(b,d);e.L=a.h.data[c];a.h.data[c]=e;return e;}
function RQ(a,b){var c,d,e,f,g,h,i;c=Kx(!b?1:b<<1);d=a.c9(c);e=0;while(e<a.h.data.length){f=a.h.data[e];a.h.data[e]=null;while(f!==null){g=d.data;h=f.cg&(c-1|0);i=f.L;f.L=g[h];g[h]=f;f=i;}e=e+1|0;}a.h=d;EZ(a);}
function PB(a){a.hy(a.h.data.length);}
function Hx(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.h.data[0];while(e!==null){if(e.bc===null)break a;f=e.L;d=e;e=f;}}else{g=EU(b);c=g&(a.h.data.length-1|0);e=a.h.data[c];while(e!==null&&!(e.cg==g&&G7(b,e.bc))){f=e.L;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.L=e.L;else a.h.data[c]=e.L;a.E=a.E+1|0;a.z=a.z-1|0;return e;}
function Pv(a){return a.z;}
function EU(b){return b.b2();}
function G7(b,c){return b!==c&&!b.D(c)?0:1;}
function G2(){var a=this;D0.call(a);a.b5=0;a.J=null;a.q=null;}
function X$(){var a=new G2();NM(a);return a;}
function VT(a){var b=new G2();Pn(b,a);return b;}
function NM(a){IT(a);a.b5=0;a.J=null;}
function Pn(a,b){D_(a,b);a.b5=0;a.J=null;}
function OH(a,b){return U(Fr,b);}
function Mj(a,b){var c,d,e,f,g;if(b===null)c=C8(a);else{d=b.b2();e=(d&2147483647)%a.h.data.length|0;c=CW(a,b,e,d);}if(c===null)return null;if(a.b5&&a.q!==c){f=c.C;g=c.v;g.C=f;if(f===null)a.J=g;else f.v=g;c.v=null;c.C=a.q;a.q.v=c;a.q=c;}return c.T;}
function T2(a,b,c,d){var e;e=We(b,d);e.L=a.h.data[c];a.h.data[c]=e;a.dy(e);return e;}
function Sz(a,b,c){var d;d=a.dD(b,c);if(a.iw(a.J))a.gC(a.J.bc);return d;}
function T4(a,b,c){var d,e,f,g,h,i;if(!a.z){a.J=null;a.q=null;}if(b===null){d=C8(a);if(d!==null)a.dy(d);else{a.E=a.E+1|0;e=a.z+1|0;a.z=e;if(e>a.b$)a.cp();d=a.b0(null,0,0);}}else{f=b.b2();e=f&2147483647;g=e%a.h.data.length|0;d=CW(a,b,g,f);if(d!==null)a.dy(d);else{a.E=a.E+1|0;h=a.z+1|0;a.z=h;if(h>a.b$){a.cp();g=e%a.h.data.length|0;}d=a.b0(b,g,f);}}i=d.T;d.T=c;return i;}
function L9(a,b){var c,d;if(a.q===b)return;if(a.J===null){a.J=b;a.q=b;return;}c=b.C;d=b.v;if(c!==null){if(d===null)return;if(a.b5){c.v=d;d.C=c;b.v=null;b.C=a.q;a.q.v=b;a.q=b;}return;}if(d===null){b.C=a.q;b.v=null;a.q.v=b;a.q=b;}else if(a.b5){a.J=d;d.C=null;b.C=a.q;b.v=null;a.q.v=b;a.q=b;}}
function RZ(a){return Wf(a);}
function PU(a){if(a.dg===null)a.dg=Vt(a);return a.dg;}
function PI(a,b){var c,d,e;c=Hx(a,b);if(c===null)return null;d=c.C;e=c.v;if(d===null)a.J=e;else d.v=e;if(e===null)a.q=d;else e.C=d;return c.T;}
function Mo(a,b){return 0;}
function Sp(b){return b.J;}
var Ht=C(Cy);
function Pz(){var a=new Ht();Sx(a);return a;}
function Sx(a){EM(a);}
function P4(a,b){EE(a,b);return a;}
function P5(a,b,c){E_(a,b,c);return a;}
function OK(a){return Ek(a);}
function O1(a,b){EH(a,b);}
function Mf(a,b,c){return a.h_(b,c);}
function Cx(){var a=this;B.call(a);a.fC=0;a.A=0;a.Z=0;a.ch=0;}
function Fh(a,b){E(a);a.ch=(-1);a.fC=b;a.Z=b;}
function CM(a){return a.A;}
function JM(a,b){if(b>=0&&b<=a.Z){a.A=b;if(b<a.ch)a.ch=0;return a;}G(Ch(((((((K()).e(D(42))).w(b)).e(D(43))).w(a.Z)).e(D(44))).d()));}
function HO(a){a.A=0;a.Z=a.fC;a.ch=(-1);return a;}
function BY(a){return a.Z-a.A|0;}
function B9(a){return a.A>=a.Z?0:1;}
function Cv(){var a=this;B.call(a);a.f9=0;a.b_=null;a.dr=null;a.ge=null;}
function Zn(a){var b=new Cv();Eh(b,a);return b;}
function Eh(a,b){E(a);a.f9=b.E;a.b_=Sp(b);a.ge=b;}
function OS(a){return a.b_===null?0:1;}
function Lb(a){if(a.f9==a.ge.E)return;G(OO());}
function FH(a){Lb(a);if(!a.y())G(Qj());a.dr=a.b_;a.b_=a.b_.v;}
var BV=C(0);
var JG=C(Cv);
function XD(a){var b=new JG();Ri(b,a);return b;}
function Ri(a,b){Eh(a,b);}
function OE(a){FH(a);return a.dr;}
function SP(a){return a.hX();}
var DT=C(0);
function D7(){D4.call(this);this.eR=null;}
function Gw(a){Ix(a);}
function N9(a,b){a.eR=b;Jk(a,b);}
function IS(a,b){a.e8(b);}
function LL(a,b){return a.eR.dT(b);}
function Lt(){var a=this;D7.call(a);a.bR=0;a.dn=0;a.ds=0;a.dF=0;a.cC=null;a.eC=0;a.b1=null;a.cM=null;a.eJ=0;}
function W7(){var a=new Lt();QO(a);return a;}
function QO(a){Gw(a);}
function T_(a){var b;if(Nq()){b=T8(D(45),U(Ew,0));b.iO(Xm(a));}a.c8(X6(a));}
function GP(a,b){var c,d,e,f,g,h,i,j;c=NN(b);d=(c.dK(D(46),Bc(0))).N();e=c.dQ(D(47));f=e===null?0:1;if(f){a.bR=(c.dQ(D(47))).N();a.dn=(c.dQ(D(48))).N();a.ds=(c.dK(D(49),Bc(0))).N();a.dF=(c.dK(D(50),Bc(0))).N();a.eC=c.i1(D(51));}if(a.eC&&a.b1!==null){if(!f&&a.eJ){g=a.b1;h=U(B,1);h.data[0]=Bc(d);i=g.d1(D(52),h);}else{i=a.b1.d1(D(53),C3(B,[Bc(d),Bc(a.bR),Bc(a.dn),Bc(a.ds),Bc(a.dF)]));a.eJ=1;}j=i.N();a.cM.gf(j);a.cC=a.cM.iP(3*a.bR|0);}else{if(f)NO(a.bR,a.dn,a.ds,a.dF);a.cC=TT(a.bR,null);Sq(d,a.cC);}a.cZ(a.dT(a.cC));}
function KD(a,b){a.b1=b.hI();a.cM=a.b1.gI(0);}
var D$=C(0);
function D2(){var a=this;B.call(a);a.bc=null;a.T=null;}
function Zo(a,b){var c=new D2();Lo(c,a,b);return c;}
function Lo(a,b,c){E(a);a.bc=b;a.T=c;}
function S6(a){return a.bc;}
function TX(a){return a.T;}
function CJ(){var a=this;D2.call(a);a.cg=0;a.L=null;}
function WQ(a,b){var c=new CJ();HC(c,a,b);return c;}
function HC(a,b,c){Lo(a,b,null);a.cg=c;}
function Fr(){var a=this;CJ.call(a);a.v=null;a.C=null;}
function We(a,b){var c=new Fr();RW(c,a,b);return c;}
function RW(a,b,c){HC(a,b,c);a.v=null;a.C=null;}
function H9(){var a=this;B.call(a);a.F=0.0;a.G=0.0;a.H=0.0;}
function CC(a,b,c){var d=new H9();Ro(d,a,b,c);return d;}
function Ro(a,b,c,d){E(a);a.F=b;a.G=c;a.H=d;}
function M(b,c,d){return CC(b,c,d);}
function BF(b){var c,d;c=GW(b);d=c===0.0?Infinity:1.0/c;return Bi(d,b);}
function Bi(b,c){return CC(c.F*b,c.G*b,c.H*b);}
function Cd(b,c){return CC(b.F-c.F,b.G-c.G,b.H-c.H);}
function C0(b,c){return CC(b.F+c.F,b.G+c.G,b.H+c.H);}
function BB(b,c){return b.F*c.F+b.G*c.G+b.H*c.H;}
function Dq(b,c){return CC(b.G*c.H-b.H*c.G,b.H*c.F-b.F*c.H,b.F*c.G-b.G*c.F);}
function GW(b){return FM(BB(b,b));}
var Cw=C(CF);
function Zp(a){var b=new Cw();Ft(b,a);return b;}
function Ft(a,b){Gr(a,b);}
var JR=C(Cw);
function Zq(a){var b=new JR();Pq(b,a);return b;}
function Pq(a,b){Ft(a,b);}
var ER=C(BC);
var CB=C(0);
function Mi(b){return Ws(b);}
function Up(b,c,d){return Lp(b.f_(c),b.f_(d));}
var Hi=C();
function Xn(){var a=new Hi();Oi(a);return a;}
function Oi(a){E(a);}
function G1(){var a=this;B.call(a);a.cz=0;a.fu=0;a.fv=0;a.d$=0;a.bS=null;}
function VE(a){var b=new G1();OB(b,a);return b;}
function OB(a,b){a.bS=b;E(a);a.fu=a.bS.cr;a.fv=a.bS.r();a.d$=(-1);}
function MX(a){return a.cz>=a.fv?0:1;}
function RT(a){var b,c;H8(a);a.d$=a.cz;b=a.bS;c=a.cz;a.cz=c+1|0;return b.cY(c);}
function H8(a){if(a.fu>=a.bS.cr)return;G(OO());}
var DO=C(0);
var CN=C(0);
var Cg=C();
function FA(a){E(a);}
function RN(a){var b,c,d,e,f;b=U(B,a.r());c=0;d=a.t();while(d.y()){e=b.data;f=c+1|0;e[c]=d.s();c=f;}return b;}
function QW(a,b){var c,d,e,f;c=b.data;d=a.r();e=c.length;if(e<d)b=HW((EG(b)).gd(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.t();while(f.y()){c=b.data;e=d+1|0;c[d]=f.s();d=e;}return b;}
var Ci=C(0);
function P8(a,b){Hq(a,b);}
function BQ(){Cg.call(this);this.cr=0;}
function DZ(a){FA(a);}
function Q9(a){return VE(a);}
var CO=C(0);
function Do(){var a=this;BQ.call(a);a.p=null;a.V=0;}
function VN(){var a=new Do();JC(a);return a;}
function W4(a){var b=new Do();Ed(b,a);return b;}
function Xp(a){var b=new Do();PH(b,a);return b;}
function JC(a){Ed(a,10);}
function Ed(a,b){DZ(a);a.p=U(B,b);}
function PH(a,b){var c,d;Ed(a,b.r());c=b.t();d=0;while(d<a.p.data.length){a.p.data[d]=c.s();d=d+1|0;}a.V=a.p.data.length;}
function Nh(a,b){var c;if(a.p.data.length<b){c=a.p.data.length>=1073741823?2147483647:B_(b,B_(a.p.data.length*2|0,5));a.p=Ti(a.p,c);}}
function PL(a,b){Ef(a,b);return a.p.data[b];}
function Od(a){return a.V;}
function MD(a,b,c){var d;Ef(a,b);d=a.p.data[b];a.p.data[b]=c;return d;}
function Sy(a,b){var c,d;a.bG(a.V+1|0);c=a.p.data;d=a.V;a.V=d+1|0;c[d]=b;a.cr=a.cr+1|0;return 1;}
function Ef(a,b){if(b>=0&&b<a.V)return;G(G5());}
function Os(a){var b,c,d;if(!a.V)return D(54);b=a.V-1|0;c=Vd(a.V*16|0);c.j(91);d=0;while(d<b){(c.U(a.p.data[d]===a?D(55):a.p.data[d])).e(D(41));d=d+1|0;}c.U(a.p.data[b]===a?D(55):a.p.data[b]);return (c.j(93)).d();}
var Eb=C(Do);
function V8(){var a=new Eb();QH(a);return a;}
function QH(a){JC(a);}
function Ql(a,b){var c,d;c=a.t();while(c.y()){d=c.s();d.bI(b);}}
function UM(a,b){var c,d;c=a.t();while(c.y()){d=c.s();d.b4(b);}}
var Dt=C(Cm);
function JT(a){E$(a);}
var DS=C(O);
function W8(){var a=new DS();F$(a);return a;}
function F$(a){Bq(a);}
var Lm=C(DS);
function U4(){var a=new Lm();TE(a);return a;}
function TE(a){F$(a);}
var GK=C();
function HW(b,c){if(b===null)G(V0());if(b===F($rt_voidcls()))G(HE());if(c<0)G(Xi());return S2(b.fQ(),c);}
function S2(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var E7=C(0);
var I1=C(Bm);
function I0(){var a=this;B.call(a);a.cI=0;a.cB=null;}
function V$(a){var b=new I0();Of(b,a);return b;}
function Of(a,b){a.cB=b;E(a);}
function Tn(a){return a.cI>=(FN(a.cB)).data.length?0:1;}
function N1(a){var b,c;if(a.cI==(FN(a.cB)).data.length)G(Qj());b=(FN(a.cB)).data;c=a.cI;a.cI=c+1|0;return b[c];}
function Hn(){var a=this;B.call(a);a.cQ=BL;a.c6=0;a.ef=0;}
function Vz(){var a=new Hn();OP(a);return a;}
function OP(a){E(a);}
var Iq=C();
var Ha=C(Cw);
function Zr(a){var b=new Ha();O4(b,a);return b;}
function O4(a,b){Ft(a,b);}
var It=C();
function Mc(b,c){var d,e,f,g,h,i,j,k;if(!b)return D(10);d=1<<c;e=d-1|0;f=(((32-G9(b)|0)+c|0)-1|0)/c|0;g=BI(f);h=Ey(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=CE(b>>>h&e,d);h=h-c|0;i=k;}return U6(g);}
var Dd=C(0);
function PN(a){return X$();}
function Q1(a,b){if(b!==null&&!Bh(b,CX))return U8(b);return b;}
function T$(a,b){if(b!==null&&!Bh(b,CZ))return V_(b);return b;}
function PR(a,b){if(b===null){Z();return YQ;}if(!Bh(b,B2)&&!Bh(b,CV)){if(!Bh(b,Ci)&&!Bh(b,CL)){if(b instanceof BO){Z();return YT;}if(b instanceof BU){Z();return YV;}if(!Jy(b)){Z();return Y3;}Z();return YT;}Z();return YS;}Z();return YR;}
function Ds(){B.call(this);this.fV=0;}
function Hj(a){E(a);a.gx();}
function GR(a,b){E(a);a.db(b);}
function R2(a){a.db(a.dl());}
function Ob(a){a.db(FL(a.cd()));}
function L$(a){return a.c7(Xp((a.cd()).ja()));}
function S4(a,b){return (a.cd()).cJ(b);}
function Nw(a,b,c){a.g1();(a.cd()).bm(b,c);return a;}
function Tq(a){if(a.fV){a.hv();a.fV=0;}}
function Rr(a){return a.ec();}
function PS(a,b,c){return a.gS(b,c);}
function FS(){X.call(this);this.iZ=0;}
var Zs=null;function RO(){RO=L(FS);OI();}
function XS(a){var b=new FS();HI(b,a);return b;}
function HI(a,b){RO();B$(a);a.iZ=b;}
function Gd(b){RO();return XS(b);}
function OI(){Zs=F($rt_shortcls());}
var Eq=C(0);
var Ln=C();
function W3(){var a=new Ln();Ou(a);return a;}
function Ou(a){E(a);}
var FV=C(0);
function Lk(){Cf.call(this);this.fw=null;}
function U9(a){var b=new Lk();QX(b,a);return b;}
function QX(a,b){FX(a);if(b===null)b=Pc(null);a.fw=b;}
function UE(a,b){DF(a,a.fw,b);}
var Fi=C(0);
function GV(){B.call(this);this.fh=null;}
function VP(a){var b=new GV();TG(b,a);return b;}
function TG(a,b){E(a);a.fh=b;}
function PC(a,b){HX(a,b);}
function HX(a,b){RC(a.fh,b);}
function Tx(a,b){a.ii(b);}
var H_=C();
function CH(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
var Ff=C(0);
function G4(){var a=this;B.call(a);a.f0=null;a.cy=null;}
function Xd(a){var b=new G4();Qx(b,a);return b;}
function Qx(a,b){E(a);a.cy=Pz();a.f0=b;}
function N4(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;d=Jl();e=Kk();f=c.length;g=0;while(g<f){h=c[g];i=e.hZ(h.hG());if(i===null){j=h.hG();i=Kk();e.hY(j,i);}k=Xt(h);(i.bw())[$rt_ustr(h.j4())]=CH(k,"apply");g=g+1|0;}j=a.f0;l=e.bw();m=Vy(d);n=Wl(a);UB(j,l,CH(m,"handle"),CH(n,"handle"));return d.d4();}
function Ga(a,b){if(b!=10)a.cy.gw($rt_str(String.fromCharCode(b)));else{(HF()).e4(a.cy.d());a.cy=Pz();}}
function Qg(b,c){b.bi(Xw(c));}
function O8(b,c,d){(b.jw()).ji(c,d);}
function UB(b,c,d,e){(WebAssembly.instantiate(b,Object.assign(c,{teavm:{currentTimeMillis:function(){return (new Date()).getTime();},isnan:isNaN,teavm_getNaN:function(){return NaN;},isinf:function(n){return !isFinite(n);},isfinite:isFinite,putwchar:e,towlower:function(code){return ((String.fromCharCode(code)).toLowerCase()).charCodeAt(0);},towupper:function(code){return ((String.fromCharCode(code)).toUpperCase()).charCodeAt(0);},getNativeOffset:function(instant){return (new Date(instant)).getTimezoneOffset();},
logString:console.log,logInt:console.log,logOutOfMemory:function(){console.log("Out of memory");}},teavmMath:{sqrt:Math.sqrt,pow:Math.pow,sin:Math.sin,cos:Math.cos}}))).then(function(instance){return d(instance);});}
function Ck(){var a=this;B.call(a);a.dI=null;a.c3=null;a.dA=null;a.c2=null;}
function Zt(){var a=new Ck();FQ(a);return a;}
function FQ(a){E(a);}
function IY(b,c){var d,e,f,g,h,i,j,k,l;d=Cd(b,c);e=BF(d);f=CC(0.0,(-1.0),0.0);g=Dq(e,f);h=BF(g);i=Bi(2.0,h);j=Dq(e,i);k=BF(j);l=Bi(2.0,k);return WI(c,e,l,i);}
function F0(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=e/d;g=Cd(b,c);h=BF(g);i=CC(0.0,(-1.0),0.0);j=Dq(h,i);k=BF(j);l=Bi(2.0,k);m=Dq(h,l);n=BF(m);o=Bi(2.0*f,n);return Wo(c,h,o,l);}
function J_(){B.call(this);this.dh=null;}
function XB(a){var b=new J_();ON(b,a);return b;}
function ON(a,b){a.dh=b;E(a);}
function NB(a,b){a.dh.du(b);}
function Mw(a,b){a.dh.cK(b);}
var Dx=C(0);
function HP(){B.call(this);this.fP=null;}
function Vf(a){var b=new HP();RJ(b,a);return b;}
function RJ(a,b){E(a);a.fP=b;}
function Hw(a){return V$(a);}
function GL(b){return Vf(So(b.fQ()));}
function So(b){var c;c=MB(b);if(c===null)c=U(B,0);return c;}
function MB(b){if (!HP.$$services$$) {HP.$$services$$ = true;CI.$$serviceList$$ = [[EP, NS]];CR.$$serviceList$$ = [[EW, Uk]];}var cls = b;if (!cls.$$serviceList$$) {return $rt_createArray($rt_objcls(), 0);}var result = $rt_createArray($rt_objcls(), cls.$$serviceList$$.length);for (var i = 0; i < result.data.length; ++i) {var serviceDesc = cls.$$serviceList$$[i];result.data[i] = new serviceDesc[0]();serviceDesc[1](result.data[i]);}return result;}
function FN(b){return b.fP;}
var HJ=C();
function Ty(b){var c,d,e,f,g,h,i,j,k;c=WA(b.i4());d=HD(c);e=E5(d*2|0);f=0;g=0;h=0;i=0;while(i<d){j=e.data;g=g+GB(c)|0;h=h+GB(c)|0;k=f+1|0;j[f]=g;f=k+1|0;j[k]=h;i=i+1|0;}return e;}
function BP(){var a=this;B.call(a);a.ce=null;a.bA=null;a.cm=null;}
function DG(a){E(a);}
function Gs(){var a=this;B.call(a);a.eZ=null;a.e0=null;a.eX=0;a.eY=null;}
function Xy(a,b,c,d){var e=new Gs();Rz(e,a,b,c,d);return e;}
function Rz(a,b,c,d,e){E(a);a.eZ=b;a.e0=c;a.eX=d;a.eY=e;}
function Tj(a){MK(a.eZ,a.e0,a.eX,a.eY);}
function HL(){B.call(this);this.f1=null;}
function Xt(a){var b=new HL();OA(b,a);return b;}
function OA(a,b){E(a);a.f1=b;}
function LI(a,b,c){O8(a.f1,b,c);}
function Tp(a,b,c){a.iF(b,c);}
function HK(){B.call(this);this.e5=null;}
function Wl(a){var b=new HK();Qp(b,a);return b;}
function Qp(a,b){E(a);a.e5=b;}
function TH(a,b){Ga(a.e5,b);}
function UT(a,b){a.im(b);}
function HH(){B.call(this);this.eE=null;}
function Vy(a){var b=new HH();NV(b,a);return b;}
function NV(a,b){E(a);a.eE=b;}
function TF(a,b){Qg(a.eE,b);}
function SN(a,b){a.dz(b);}
var Jz=C();
function EQ(b,c){if(b!==null)return b;G(Wg(c));}
function By(){var a=this;B.call(a);a.be=null;a.bs=null;}
function Zu(){var a=new By();CY(a);return a;}
function CY(a){E(a);}
function JY(){var a=this;By.call(a);a.fG=null;a.fc=null;}
function U5(a,b){var c=new JY();Ov(c,a,b);return c;}
function Ov(a,b,c){a.fG=b;a.fc=c;CY(a);a.bs=a.fG.bA.dI;a.be=a.fc;}
function C$(){var a=this;B.call(a);a.gZ=null;a.dv=null;a.g9=0.0;a.dY=0.0;a.c_=null;a.dO=null;a.bE=0;}
function Kz(a,b,c,d,e){E(a);FB();a.c_=Zv;a.dO=Zv;Ks(a,e);a.gZ=b;a.dv=e.dS();a.g9=c;a.dY=d;}
function JU(a,b,c,d){var e;e=DE(1);e.data[0]=63;Kz(a,b,c,d,e);}
function Ks(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.dY)return;}G(Ch(D(56)));}
function FY(a,b){if(b!==null){a.c_=b;a.ix(b);return a;}G(Ch(D(57)));}
function TP(a,b){}
function Ku(a,b){if(b!==null){a.dO=b;a.hW(b);return a;}G(Ch(D(57)));}
function Tc(a,b){}
function Hf(a,b,c,d){var e,f,g,h,$$je;a:{if(a.bE!=3){if(d)break a;if(a.bE!=2)break a;}G(On());}a.bE=!d?1:2;while(true){try{e=a.hm(b,c);}catch($$e){$$je=W($$e);if($$je instanceof O){f=$$je;G(Wu(f));}else{throw $$e;}}if(e.gn()){if(!d)return e;g=BY(b);if(g<=0)return e;e=Dn(g);}else if(e.c1())break;h=!e.fE()?a.c_:a.dO;b:{FB();if(h!==Zw){if(h===Zx)break b;else return e;}if(BY(c)<a.dv.data.length)return Zy;JK(c,a.dv);}b.ey(CM(b)+e.c()|0);}return e;}
function Gp(a,b){var c;if(a.bE!=2&&a.bE!=4)G(On());c=a.gE(b);Bs();if(c===Zz)a.bE=3;return c;}
function L5(a,b){Bs();return Zz;}
function Jm(){Ds.call(this);this.cT=null;}
function XJ(){var a=new Jm();Nc(a);return a;}
function U8(a){var b=new Jm();QE(b,a);return b;}
function Nc(a){Hj(a);}
function QE(a,b){GR(a,b);}
function Uu(a){return a.cT;}
function OT(a,b){a.cT=b;}
function N8(a){return a.cT;}
function L2(a,b){return b;}
function Rq(a){return a.i9();}
var DP=C();
function Hm(a,b){E(a);a.hH(b);}
function LT(a,b){return (a.fn()).cY(b);}
function PE(a){return (a.fn()).r();}
function DD(){var a=this;Cx.call(a);a.fM=0;a.eo=null;a.jb=null;}
function G3(a,b,c,d,e,f){Fh(a,c);TA();a.jb=Y$;a.fM=b;a.eo=d;a.A=e;a.Z=f;}
function Tu(b,c,d){return WW(0,b.data.length,b,c,c+d|0,0,0);}
function Qq(b){return Tu(b,0,b.data.length);}
function Su(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.gt())G(U4());if(BY(a)<d)G(V7());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Cs((((((K()).e(D(58))).w(g)).e(D(59))).w(f)).d()));if(d<0)G(Cs(((((K()).e(D(60))).w(d)).e(D(61))).d()));h=a.A+a.fM|0;i=0;while(i<d){j=a.eo.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.A=a.A+d|0;return a;}}e=b.data;G(Cs(((((((K()).e(D(62))).w(c)).e(D(43))).w(e.length)).e(D(63))).d()));}
function JK(a,b){return a.fa(b,0,b.data.length);}
function EJ(a){HO(a);return a;}
function Kh(){var a=this;DD.call(a);a.gu=0;a.ea=0;}
function WW(a,b,c,d,e,f,g){var h=new Kh();MM(h,a,b,c,d,e,f,g);return h;}
function MM(a,b,c,d,e,f,g,h){G3(a,b,c,d,e,f);a.gu=g;a.ea=h;}
function Sb(a){return a.ea;}
var H5=C();
function Wb(b){Rp(W7());}
function Bw(){var a=this;B.call(a);a.iu=null;a.fN=0;}
var ZA=null;var ZB=null;var Zi=null;var ZC=null;var ZD=null;var ZE=null;var ZF=null;var ZG=null;var ZH=null;function Mr(){Mr=L(Bw);QZ();}
function B1(a,b){var c=new Bw();K1(c,a,b);return c;}
function K1(a,b,c){Mr();E(a);a.iu=b;a.fN=c;}
function C7(a){return a.fN;}
function QZ(){ZA=B1(D(64),2147483647);ZB=B1(D(65),1000);Zi=B1(D(66),900);ZC=B1(D(67),800);ZD=B1(D(68),700);ZE=B1(D(69),500);ZF=B1(D(70),400);ZG=B1(D(71),300);ZH=B1(D(72),(-2147483648));}
var HM=C();
function Ma(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function VI(b){b.dP();}
function L1(b){QM(b,0);}
function QM(b,c){return setTimeout(function(){VI(b);},c);}
function LX(){return TY();}
function Qb(b){return JD(String.fromCharCode(b));}
function TD(b){return b.$meta.item;}
function QF(b){return $rt_str(b.$meta.name);}
function TY(){return [];}
function Dj(){var a=this;B.call(a);a.gs=null;a.ig=null;}
function H0(a,b,c){var d,e,f,g;d=c.data;E(a);Ii(b);e=d.length;f=0;while(f<e){g=d[f];Ii(g);f=f+1|0;}a.gs=b;a.ig=c.dS();}
function Ii(b){var c,d;if(b.ci())G(JI(b));if(!Ik(b.o(0)))G(JI(b));c=1;while(c<b.c()){a:{d=b.o(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(Ik(d))break a;else G(JI(b));}}c=c+1|0;}}
function Ik(b){var c;a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}c=1;break a;}c=0;}return c;}
function CS(){B.call(this);this.id=null;}
var Zx=null;var Zw=null;var Zv=null;function FB(){FB=L(CS);L4();}
function Kq(a){var b=new CS();Ic(b,a);return b;}
function Ic(a,b){FB();E(a);a.id=b;}
function L4(){Zx=Kq(D(73));Zw=Kq(D(74));Zv=Kq(D(75));}
function BO(){B.call(this);this.b9=0;}
var Y5=null;var ZI=null;var ZJ=null;function El(){El=L(BO);Oj();}
function OL(a){var b=new BO();HG(b,a);return b;}
function HG(a,b){El();E(a);a.b9=b;}
function R$(a){return a.b9;}
function CQ(b){El();return !b?ZI:Y5;}
function I8(b){El();return !b?D(76):D(77);}
function ND(a){return I8(a.b9);}
function M5(a,b){if(a===b)return 1;return b instanceof BO&&b.b9==a.b9?1:0;}
function Oj(){Y5=OL(1);ZI=OL(0);ZJ=F($rt_booleancls());}
var Cu=C(O);
function HE(){var a=new Cu();EO(a);return a;}
function Ch(a){var b=new Cu();LC(b,a);return b;}
function EO(a){Bq(a);}
function LC(a,b){DX(a,b);}
function Ir(){Cu.call(this);this.g_=null;}
function JI(a){var b=new Ir();Rx(b,a);return b;}
function Rx(a,b){EO(a);a.g_=b;}
var Lu=C(O);
function Qj(){var a=new Lu();MA(a);return a;}
function MA(a){Bq(a);}
var Ij=C();
function Wt(){var a=new Ij();Sl(a);return a;}
function Sl(a){E(a);}
function Rp(b){IS(b,Wt());b.i3();}
function Nt(a,b){if(!(b instanceof BU))self.postMessage(b);else self.postMessage($rt_ustr(b));}
function UC(a,b){var c,d,e,f,g;c=b.data;d=c.length;e=new Array();f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function SG(a,b){self.onmessage=CH(VP(b),"handleEvent");}
function RC(b,c){b.g3(c.data);}
function F7(){B.call(this);this.fB=null;}
function Ws(a){var b=new F7();Rd(b,a);return b;}
function Rd(a,b){E(a);a.fB=b;}
function R6(a,b,c){return Up(a.fB,b,c);}
var Jg=C();
function Pk(b){return $rt_str(b);}
function Dl(){Cz.call(this);this.dV=null;}
function ZK(a){var b=new Dl();Gv(b,a);return b;}
function Gv(a,b){D8(a);a.dV=b;}
function Fp(){var a=this;Dl.call(a);a.ho=0;a.dE=0;a.bg=null;a.df=null;a.eM=null;}
function ZL(a,b){var c=new Fp();J7(c,a,b);return c;}
function J7(a,b,c){Gv(a,b);a.bg=K();a.df=BI(32);a.ho=c;Rv();a.eM=ZM;}
function Ns(a,b,c,d){var $$je;if(!IV(a))return;a:{try{a.dV.cn(b,c,d);break a;}catch($$e){$$je=W($$e);if($$je instanceof ER){}else{throw $$e;}}a.dE=1;}}
function IV(a){if(a.dV===null)a.dE=1;return a.dE?0:1;}
function Ho(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=TZ(b,c,d-c|0);g=DE(B_(16,BH(e.length,1024)));h=Qq(g);i=a.eM.h4();FB();j=Zw;i=FY(i,j);j=Zw;k=Ku(i,j);while(true){l=(Hf(k,f,h,1)).c1();a.cn(g,0,CM(h));EJ(h);if(!l)break;}while(true){l=(Gp(k,h)).c1();a.cn(g,0,CM(h));EJ(h);if(!l)break;}}
function Pg(a,b){(a.bg.e(b)).j(10);GX(a);}
function GX(a){var b;b=a.bg.c()<=a.df.data.length?a.df:BI(a.bg.c());a.bg.ei(0,a.bg.c(),b,0);Ho(a,b,0,a.bg.c());a.bg.eb(0);}
function P(){var a=this;B.call(a);a.bb=null;a.P=null;a.W=null;}
function ZN(){var a=new P();BJ(a);return a;}
function BJ(a){E(a);}
function KV(){P.call(this);this.ip=null;}
function Xx(a){var b=new KV();Qk(b,a);return b;}
function Qk(a,b){var c,d;a.ip=b;BJ(a);a.P=R(0.5,0.1,0.1);a.W=M(4.0,2.5,(-5.0));Bn();c=ZO;d=K();BA(Y(d,D(78)),c);a.bb=Bg(d);ZO=ZO+1|0;}
function KX(){P.call(this);this.iT=null;}
function W0(a){var b=new KX();OR(b,a);return b;}
function OR(a,b){var c,d;a.iT=b;BJ(a);a.P=R(0.0,0.8,0.8);a.W=M((-10.0),12.0,(-7.5));Bn();c=ZO;d=K();BA(Y(d,D(78)),c);a.bb=Bg(d);ZO=ZO+1|0;}
var Fo=C(0);
function Gn(){B.call(this);this.fS=null;}
function U1(a){var b=new Gn();QC(b,a);return b;}
function QC(a,b){E(a);a.fS=b;}
function MY(a,b){TJ(a.fS,b);}
function PX(a,b){a.dz(b);}
function V(){var a=this;BK.call(a);a.X=0.0;a.Q=null;}
function ZP(){var a=new V();BM(a);return a;}
function BM(a){FG(a);}
function Nb(a,b){return BF(Cd(b,a.Q));}
function Nv(a,b){var c,d,e,f;c=Cd(a.Q,b.bs);d=BB(c,b.be);if(d<0.0)return null;e=C9(a.X,2.0)-(BB(c,c)-C9(d,2.0));f=e<0.0?0.0:d-FM(e);if(f===0.0)return null;return Xf(a,a,b,f);}
function KY(){V.call(this);this.i8=null;}
function WV(a){var b=new KY();TQ(b,a);return b;}
function TQ(a,b){var c,d;a.i8=b;BM(a);BG();a.n=ZQ;a.Q=M(3.0,2.0,6.0);a.X=1.75;Bn();c=ZR;d=K();BA(Y(d,D(79)),c);a.S=Bg(d);ZR=ZR+1|0;}
function K2(){V.call(this);this.gP=null;}
function VY(a){var b=new K2();Ms(b,a);return b;}
function Ms(a,b){var c,d;a.gP=b;BM(a);BG();a.n=ZQ;a.Q=M((-4.0),5.0,2.0);a.X=2.0;Bn();c=ZR;d=K();BA(Y(d,D(79)),c);a.S=Bg(d);ZR=ZR+1|0;}
function KW(){P.call(this);this.gz=null;}
function XH(a){var b=new KW();Mh(b,a);return b;}
function Mh(a,b){var c,d;a.gz=b;BJ(a);a.P=R(0.5,0.3,0.75);a.W=M((-2.0),5.0,0.0);Bn();c=ZO;d=K();BA(Y(d,D(78)),c);a.bb=Bg(d);ZO=ZO+1|0;}
function KZ(){V.call(this);this.hn=null;}
function Vn(a){var b=new KZ();Pa(b,a);return b;}
function Pa(a,b){var c,d;a.hn=b;BM(a);BG();a.n=ZQ;a.Q=M((-5.0),5.0,(-6.0));a.X=4.0;Bn();c=ZR;d=K();BA(Y(d,D(79)),c);a.S=Bg(d);ZR=ZR+1|0;}
var FC=C(0);
function KR(){V.call(this);this.iG=null;}
function WL(a){var b=new KR();S5(b,a);return b;}
function S5(a,b){var c,d;a.iG=b;BM(a);BG();a.n=ZS;a.Q=M(0.0,3.0,1.0);a.X=1.0;Bn();c=ZR;d=K();BA(Y(d,D(79)),c);a.S=Bg(d);ZR=ZR+1|0;}
var KN=C();
function XL(){var a=new KN();Uf(a);return a;}
function Uf(a){E(a);}
function TM(a,b){return J9(a,b);}
function J9(a,b){return NC(b);}
var GF=C();
function Vw(){var a=new GF();Qa(a);return a;}
function Qa(a){E(a);}
function LU(a,b){return Jh(a,b);}
function Jh(a,b){return M2(b);}
var KM=C();
function WC(){var a=new KM();PQ(a);return a;}
function PQ(a){E(a);}
function Nl(a,b){return GH(a,b);}
function GH(a,b){return NL(b);}
var GD=C();
function Vv(){var a=new GD();RU(a);return a;}
function RU(a){E(a);}
function Qm(a,b){return GT(a,b);}
function GT(a,b){return TN(b);}
function K0(){V.call(this);this.hs=null;}
function U_(a){var b=new K0();Tg(b,a);return b;}
function Tg(a,b){var c,d;a.hs=b;BM(a);BG();a.n=ZQ;a.Q=M(0.0,1.0,0.0);a.X=0.5;Bn();c=ZR;d=K();BA(Y(d,D(79)),c);a.S=Bg(d);ZR=ZR+1|0;}
var KL=C();
function X9(){var a=new KL();Us(a);return a;}
function Us(a){E(a);}
function Ph(a,b){return LD(a,b);}
function LD(a,b){return MT(b);}
function KS(){V.call(this);this.h8=null;}
function VM(a){var b=new KS();Qw(b,a);return b;}
function Qw(a,b){var c,d;a.h8=b;BM(a);BG();a.n=ZS;a.Q=M(4.0,3.0,1.0);a.X=1.5;Bn();c=ZR;d=K();BA(Y(d,D(79)),c);a.S=Bg(d);ZR=ZR+1|0;}
var E3=C(0);
var BX=C(Cg);
function DA(a){FA(a);}
function DB(){BX.call(this);this.f6=null;}
function ZT(a){var b=new DB();Ia(b,a);return b;}
function Ia(a,b){DA(a);a.f6=b;}
function Py(a){return a.f6;}
var IU=C(DB);
function Wf(a){var b=new IU();PG(b,a);return b;}
function PG(a,b){Ia(a,b);}
function RX(a){return XD(a.gF());}
var Lv=C();
function VL(){var a=new Lv();SA(a);return a;}
function SA(a){E(a);}
function OC(a,b){return Im(a,b);}
function Im(a,b){return Nn(b);}
var Lf=C();
function XP(){var a=new Lf();T7(a);return a;}
function T7(a){E(a);}
function Sf(a,b){return F9(a,b);}
function F9(a,b){return P$(b);}
var Lx=C();
function W9(){var a=new Lx();MU(a);return a;}
function MU(a){E(a);}
function Pb(a,b){return Jn(a,b);}
function Jn(a,b){return TV(b);}
var KB=C(Bo);
function Pc(a){var b=new KB();OV(b,a);return b;}
function OV(a,b){HS(a,b,null,0,0);}
var Le=C();
function Ww(){var a=new Le();PY(a);return a;}
function PY(a){E(a);}
function Mk(a,b){return H4(a,b);}
function H4(a,b){return M8(b);}
var Ly=C();
function Vs(){var a=new Ly();Qr(a);return a;}
function Qr(a){E(a);}
function Ta(a,b){return Il(a,b);}
function Il(a,b){return SW(b);}
var GE=C();
function W6(){var a=new GE();SB(a);return a;}
function SB(a){E(a);}
function LP(a,b){return HT(a,b);}
function HT(a,b){return RV(b);}
var Ld=C();
function XM(){var a=new Ld();UQ(a);return a;}
function UQ(a){E(a);}
function Q6(a,b){return Hz(a,b);}
function Hz(a,b){return OZ(b);}
var Lw=C();
function VB(){var a=new Lw();RK(a);return a;}
function RK(a){E(a);}
function R1(a,b){return Gg(a,b);}
function Gg(a,b){return LQ(b);}
var KO=C();
function VW(){var a=new KO();Oo(a);return a;}
function Oo(a){E(a);}
function T5(a,b){return KH(a,b);}
function KH(a,b){return Q_(b);}
var GC=C();
function WT(){var a=new GC();Mz(a);return a;}
function Mz(a){E(a);}
function Qc(a,b){return G8(a,b);}
function G8(a,b){return Ra(b);}
var H1=C();
function SI(b,c,d,e,f){var g,h;g=Dg(e,f);if(!g){g=e;e=f;}else if(g>=0){c=c+0.5*(e-f|0);g=e;}else{b=b+0.5*(f-e|0);g=f;e=f;}h=SR(b,c,d.bA,g,e);return Fc(U5(d,h),d,0);}
function Fc(b,c,d){var e,f;e=Hr(b,c);f=null;if((e.t()).y())f=(e.t()).s();if(f!==null)return Sd(f,c,d);Cp();return ZU;}
function Hr(b,c){var d,e,f,g,h,i,j,k;d=VN();e=c.ce.data;f=e.length;g=0;while(g<f){h=e[g];i=h.eq(b);if(i!==null)d.by(i);g=g+1|0;}d.gM(Mi(Wi()));j=U(B8,(d.e1()).data.length);k=0;while(true){e=j.data;if(k>=e.length)break;e[k]=(d.e1()).data[k];k=k+1|0;}i=M1(j);return i;}
function MI(b,c){var d,e;d=Hr(b,c);e=null;if((d.t()).y())e=(d.t()).s();if(e!==null)return e.b6;return 0.0;}
function Sd(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=b.bN.be;f=C0(Bi(b.b6,b.bN.be),b.bN.bs);g=b.I.f3(f);h=Cd(e,Bi(2.0*BB(g,e),g));i=b.I.n.bh;j=(i.g(f)).bx()*BB(g,e);i=b.I.n.bh;j=j-FM(1.0-C9((i.g(f)).bx(),2.0)*(1.0-C9(BB(g,e),2.0)));i=Bi(j,g);k=b.I.n.bh;k=Bi((k.g(f)).bx(),e);l=Cd(i,k);Cp();m=ZU;i=Cj(m,NR(b.I,f,g,h,c));if(d>=4)return i;n=Qt(b.I,C0(f,Bi(0.001,h)),h,c,d);o=L8(b.I,C0(g,Bi(0.001,l)),l,c,d);k=B6(1.0-b.I.n.bB,n);p=B6(b.I.n.bB,o);return Cj(i,Cj(k,p));}
function Qt(b,c,d,e,f){return B6((b.n.bO.g(c)).bx(),Fc(WE(c,d),e,f+1|0));}
function L8(b,c,d,e,f){return B6((b.n.bh.g(c)).bx(),Fc(XF(c,d),e,f+1|0));}
function NR(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;g=R(0.0,0.0,0.0);h=f.cm.data;i=h.length;j=0;while(j<i){k=h[j];l=Cd(k.W,c);m=BF(l);n=MI(XK(c,m),f);o=n<=GW(l)&&n!==0.0?0:1;if(o){p=BB(m,d);q=p>0.0?B6(p,k.P):R(0.0,0.0,0.0);r=BB(m,BF(e));s=r<=0.0?R(0.0,0.0,0.0):B6(C9(r,b.n.bW),k.P);g=Cj(g,Cj(E2(b.n.bZ.g(c),q),E2(b.n.bK.g(c),s)));}j=j+1|0;}return g;}
function SR(b,c,d,e,f){return BF(C0(d.dA,C0(Bi(UY(b,e),d.c2),Bi(P1(c,f),d.c3))));}
function UY(b,c){var d;d=c;return (b-d/2.0)/(2.0*d);}
function P1(b,c){var d;d=c;return  -(b-d/2.0)/(2.0*d);}
function UV(b){return b.b6;}
var Em=C(0);
var Ea=C(0);
function JO(){var a=this;B.call(a);a.dj=null;a.ct=null;}
function V9(a){var b=new JO();Rg(b,a);return b;}
function Rg(a,b){var c;E(a);a.ct=b;c=a;b.classObject=c;}
function G0(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=V9(b);return c;}
function LJ(a){return (((K()).e(D(80))).w(Db(a))).d();}
function Og(a){return a.ct;}
function Ue(a){if(a.dj===null)a.dj=QF(a.ct);return a.dj;}
function L3(a){return G0(TD(a.ct));}
var K_=C(Bm);
function Ca(){X.call(this);this.cU=0.0;}
var ZV=0.0;var ZW=null;function IQ(){IQ=L(Ca);OG();}
function XC(a){var b=new Ca();EA(b,a);return b;}
function VX(a){var b=new Ca();Jw(b,a);return b;}
function EA(a,b){IQ();B$(a);a.cU=b;}
function Jw(a,b){IQ();EA(a,b);}
function Lg(b){IQ();return XC(b);}
function M_(a,b){if(a===b)return 1;return b instanceof Ca&&b.cU===a.cU?1:0;}
function OG(){ZV=NaN;ZW=F($rt_floatcls());}
var Hd=C();
function NK(b,c){var d,e,f,g;d=b.data;e=BI(c);f=BH(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Ti(b,c){var d,e,f,g;d=b.data;e=HW((EG(b)).gd(),c);f=BH(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function QU(b,c){var d,e,f,g,h,i,j,k,l,m;d=b.data.length;if(!d)return;e=U(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data.length;if(h>=i)break;j=BH(i,h+f|0);k=h+(2*f|0)|0;l=BH(i,k);TR(g,e,h,j,l,c);h=k;}f=f*2|0;m=g;g=e;e=m;}a:{if(g!==b){h=0;while(true){m=g.data;if(h>=m.length)break a;e.data[h]=m[h];h=h+1|0;}}}}
function TR(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=d;i=e;a:{b:{while(d!=e){if(i==f)break b;j=b.data;k=j[d];l=j[i];if(g.fF(k,l)>0){j=c.data;m=h+1|0;j[h]=l;i=i+1|0;}else{j=c.data;m=h+1|0;j[h]=k;d=d+1|0;}h=m;}while(true){if(i>=f)break a;n=c.data;j=b.data;m=h+1|0;o=i+1|0;n[h]=j[i];h=m;i=o;}}while(true){if(d>=e)break a;n=c.data;j=b.data;o=h+1|0;m=d+1|0;n[h]=j[d];h=o;d=m;}}}
function Ne(b,c){return Oh(b,0,b.data.length,c);}
function Oh(b,c,d,e){var f,g,h,i,j;f=Dg(c,d);if(f>0)G(HE());if(!f)return (-1);g=d-1|0;while(true){h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>g)return ( -i|0)-2|0;}else{g=i-1|0;if(g<c)return ( -i|0)-1|0;}}return i;}
function M1(b){return Vo(b);}
var EN=C();
var ZX=null;function HF(){var b;if(ZX===null){b=new Fp;TK();J7(b,Zb,0);ZX=b;}return ZX;}
function IW(){return Long_fromNumber(new Date().getTime());}
var F3=C();
function Wa(){var a=new F3();Ut(a);return a;}
function Ut(a){E(a);}
function Px(a){return Ka(a);}
function Ka(a){return Mx();}
var J6=C(Cv);
function X1(a){var b=new J6();SL(b,a);return b;}
function SL(a,b){Eh(a,b);}
function Ts(a){FH(a);return a.dr.bc;}
var CR=C(0);
function Uh(a,b,c){return (a.ir(b)).i$(U$(c));}
function Uv(b,c){return c.iU(b);}
var Lc=C();
function UZ(){var a=new Lc();PO(a);return a;}
function PO(a){E(a);}
function NA(a,b){return J3(a,b);}
function J3(a,b){return UJ(b);}
var IE=C();
function XV(){var a=new IE();Rk(a);return a;}
function Rk(a){E(a);}
var DU=C(BQ);
function H6(a){DZ(a);}
var IG=C(DU);
function XR(){var a=new IG();Nk(a);return a;}
function Nk(a){H6(a);}
var ID=C();
function VS(){var a=new ID();SO(a);return a;}
function SO(a){E(a);}
var BS=C();
var ZY=null;var ZZ=null;var Z0=null;var Z1=null;function Bk(){Bk=L(BS);Ni();}
function Ez(b){Bk();return (b&64512)!=55296?0:1;}
function Ev(b){Bk();return (b&64512)!=56320?0:1;}
function KE(b){Bk();return !Ez(b)&&!Ev(b)?0:1;}
function J8(b,c){Bk();return ((b&1023)<<10|c&1023)+65536|0;}
function FT(b){var c;Bk();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function Fs(b){Bk();return (56320|b&1023)&65535;}
function Fm(b){Bk();return Gb(b)&65535;}
function Gb(b){Bk();return (Qb(b)).toLowerCase().charCodeAt(0);}
function FZ(b){Bk();return H3(b);}
function H3(b){var c,d,e,f,g,h,i,j;Bk();c=Gh();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=Dg(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function CE(b,c){Bk();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gh(){Bk();if(ZZ===null)ZZ=Ty(((F8()).value!==null?$rt_str((F8()).value):null));return ZZ;}
function F8(){Bk();if(Z1===null)Z1=Kn();return Z1;}
function Ni(){ZY=F($rt_charcls());Z0=U(BS,128);}
function Kn(){return {"value":"{?*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%slG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%sTEG%%%%%%%%%%%%%%%%%%&5G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%VR#G%%%%%%%%%%%%%"
+"%%%%%"};}
var DR=C(BX);
function J4(a){DA(a);}
var IH=C(DR);
function XN(){var a=new IH();MV(a);return a;}
function MV(a){J4(a);}
var IF=C(Dt);
function Wz(){var a=new IF();LK(a);return a;}
function LK(a){JT(a);}
function K9(){B.call(this);this.fy=null;}
function WR(a){var b=new K9();SJ(b,a);return b;}
function SJ(a,b){E(a);a.fy=b;}
function R9(a){T9(a.fy);}
var GY=C();
function UX(b){return b;}
function IL(){P.call(this);this.i7=null;}
function Wc(a){var b=new IL();No(b,a);return b;}
function No(a,b){a.i7=b;BJ(a);a.P=R(0.75,0.75,0.75);a.W=M((-4.0),3.0,4.0);a.bb=D(81);}
var Dh=C(Cx);
function F5(a,b,c,d){Fh(a,b);a.A=c;a.Z=d;}
function TZ(b,c,d){return V3(0,b.data.length,b,c,c+d|0,0);}
function Nr(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Cs((((((K()).e(D(82))).w(g)).e(D(59))).w(f)).d()));if(BY(a)<d)G(Xv());if(d<0)G(Cs(((((K()).e(D(60))).w(d)).e(D(61))).d()));h=a.A;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.iJ(h);i=i+1|0;c=g;h=f;}a.A=a.A+d|0;return a;}}e=b.data;G(Cs(((((((K()).e(D(62))).w(c)).e(D(43))).w(e.length)).e(D(63))).d()));}
function LO(a,b){JM(a,b);return a;}
var DK=C(Dh);
function Id(a,b,c,d){F5(a,b,c,d);}
function Ky(){var a=this;DK.call(a);a.iV=0;a.ff=0;a.gb=null;}
function V3(a,b,c,d,e,f){var g=new Ky();UH(g,a,b,c,d,e,f);return g;}
function UH(a,b,c,d,e,f,g){Id(a,c,e,f);a.ff=b;a.iV=g;a.gb=d;}
function NW(a,b){return a.gb.data[b+a.ff|0];}
function IP(){P.call(this);this.h9=null;}
function X2(a){var b=new IP();MZ(b,a);return b;}
function MZ(a,b){a.h9=b;BJ(a);a.P=R(0.75,0.75,0.75);a.W=M(4.0,3.0,(-4.0));a.bb=D(81);}
var LF=C();
function Wv(){var a=new LF();LZ(a);return a;}
function LZ(a){E(a);}
function N_(a,b){return Iz(a,b);}
function Iz(a,b){return LY(b);}
var HR=C();
function IR(){var b;b=XA();DH();return Fw(F(CR),b,Zg);}
function Nq(){var b;b=IR();return b!==null&&b.hO()?1:0;}
function T8(b,c){return (IR()).iM(b,c);}
function NG(){return GL(F(CR));}
function IN(){P.call(this);this.g$=null;}
function XU(a){var b=new IN();Q3(b,a);return b;}
function Q3(a,b){a.g$=b;BJ(a);a.P=R(0.75,0.75,0.75);a.W=M((-4.0),3.0,(-4.0));a.bb=D(81);}
function CD(){var a=this;B.call(a);a.ha=null;a.eW=0;}
function Fz(a,b,c){E(a);a.ha=b;a.eW=c;}
function Bl(a){return a.eW;}
var Bt=C(CD);
var YV=null;var YT=null;var YU=null;var YR=null;var YS=null;var YQ=null;var Y3=null;var Z2=null;function Z(){Z=L(Bt);SV();}
function Cq(a,b){var c=new Bt();HZ(c,a,b);return c;}
function EB(){Z();return Z2.dS();}
function HZ(a,b,c){Z();Fz(a,b,c);}
function I5(){Z();return C3(Bt,[YV,YT,YU,YR,YS,YQ,Y3]);}
function SV(){YV=Cq(D(83),0);YT=Cq(D(84),1);YU=Cq(D(85),2);YR=Cq(D(86),3);YS=Cq(D(87),4);YQ=Cq(D(88),5);Y3=Cq(D(89),6);Z2=I5();}
var Jr=C();
function Q7(b){$rt_putStdout(b);}
function IO(){P.call(this);this.hC=null;}
function Wy(a){var b=new IO();RG(b,a);return b;}
function RG(a,b){a.hC=b;BJ(a);a.P=R(0.75,0.75,0.75);a.W=M(4.0,3.0,4.0);a.bb=D(81);}
function IJ(){V.call(this);this.gj=null;}
function X8(a){var b=new IJ();R0(b,a);return b;}
function R0(a,b){a.gj=b;BM(a);BG();a.n=ZQ;a.Q=M(0.0,1.0,0.0);a.X=1.0;a.S=D(90);}
var Ew=C();
var Js=C();
function Ow(b){return b?1:0;}
var Ep=C();
var Z3=null;function Kk(){return (Dp()).h5();}
function NN(b){return (Dp()).b8(b);}
function NU(b){return (Dp()).c$(b);}
function R5(b){return (Dp()).bf(b);}
function Qs(b){Z3=b;}
function Dp(){var b;if(Z3===null){b=Wa();DH();Qs(Fw(F(CI),b,Z4));if(Z3===null){(HF()).e4(D(91));Z3=XJ();}}return Z3;}
function Mx(){return GL(F(CI));}
var Fu=C(0);
function Jl(){return Vq();}
function N3(a,b){if(a.du(b))return;G(JS(D(92)));}
var EY=C(0);
var Hc=C(Ce);
function Vq(){var a=new Hc();RA(a);return a;}
function RA(a){Dk(a);}
function Ng(a){return a;}
function O2(a,b){return Hv(a,b);}
function UU(a,b){Gz(a,b);}
function PP(a,b,c){return K4(a,b,c);}
var BR=C();
var Z5=null;var Z6=null;var Z7=null;var Z8=null;var Z9=null;var Z$=null;function FW(){FW=L(BR);Qe();}
function Jy(b){FW();return b instanceof X;}
function Ls(b){FW();return b===null?null:b instanceof Ct?b:!(b instanceof X)?null:Bc(b.N());}
function Jo(b){var c,$$je;FW();if(b===null)return null;a:{try{c=Bc(E8(b));}catch($$e){$$je=W($$e);if($$je instanceof EI){break a;}else{throw $$e;}}return c;}return null;}
function Ei(b){var c;FW();c=Ls(b);if(c===null&&b!==null)return Jo(b.d());return c;}
function Qe(){Z5=K7(0);Z6=Gd(0);Z7=Bc(0);Z8=Et(BL);Z9=Lg(0.0);Z$=Bu(0.0);}
var Gk=C(BP);
function Wn(){var a=new Gk();Rl(a);return a;}
function Rl(a){var b,c;DG(a);b=U(BK,7);c=b.data;Bn();c[0]=Z_;c[1]=WL(a);c[2]=VM(a);c[3]=U_(a);c[4]=VY(a);c[5]=WV(a);c[6]=Vn(a);a.ce=b;a.cm=C3(P,[XH(a),W0(a),Xx(a)]);a.bA=IY(M(0.0,1.0,0.0),M(5.0,5.0,5.0));}
var Gj=C(BP);
function X_(){var a=new Gj();O7(a);return a;}
function O7(a){var b,c;DG(a);b=U(BK,2);c=b.data;c[0]=X8(a);Bn();c[1]=Z_;a.ce=b;a.cm=C3(P,[Wy(a),X2(a),Wc(a),XU(a)]);a.bA=F0(M(0.0,1.0,0.0),M(3.0,3.0,3.0),600.0,450.0);}
function B7(){X.call(this);this.ba=0.0;}
var AAa=0.0;var AAb=null;function Fn(){Fn=L(B7);Pr();}
function PK(a){var b=new B7();J2(b,a);return b;}
function J2(a,b){Fn();B$(a);a.ba=b;}
function Uz(a){return a.ba;}
function Pu(a){return a.ba|0;}
function Bu(b){Fn();return PK(b);}
function Gq(b){Fn();return ((K()).hK(b)).d();}
function Nx(a){return Gq(a.ba);}
function US(a,b){if(a===b)return 1;return b instanceof B7&&b.ba===a.ba?1:0;}
function Lp(b,c){Fn();return Dg(b,c);}
function Nf(a){return isNaN(a.ba)?1:0;}
function O3(a){return !isFinite(a.ba)?1:0;}
function Pr(){AAa=NaN;AAb=F($rt_doublecls());}
var Gi=C(BP);
function Wr(){var a=new Gi();S_(a);return a;}
function S_(a){var b,c;DG(a);b=U(BK,1);c=b.data;Bn();c[0]=Z_;a.ce=b;b=U(P,1);b.data[0]=W$(a);a.cm=b;a.bA=F0(M(0.0,1.0,0.0),M(3.0,3.0,3.0),600.0,450.0);}
var JN=C();
function I6(b){var c,d,e;c=W4(b.r());d=b.t();while(d.y()){e=d.s();if(Bh(e,B2))c.by(FL(e));else if(!Bh(e,Ci))c.by(e);else c.by(I6(e));}return c;}
function FL(b){var c,d,e,f,g,h;c=VT(b.r());d=(b.fY()).t();while(d.y()){e=d.s();f=e.bQ();if(Bh(f,B2)){g=f;c.bm(e.br(),FL(g));}else if(!Bh(f,Ci))c.bm(e.br(),f);else{h=f;c.bm(e.br(),I6(h));}}return c;}
function D3(){var a=this;BK.call(a);a.eK=0.0;a.cw=null;}
function AAc(){var a=new D3();F2(a);return a;}
function F2(a){FG(a);}
function QJ(a,b){return a.cw;}
function S8(a,b){var c,d;c=BB(a.cw,b.be);if(c>0.0)return null;d=(a.eK+BB(a.cw,b.bs))/ -c;return Vb(a,a,b,d);}
var Go=C(D3);
function Wj(){var a=new Go();S7(a);return a;}
function S7(a){F2(a);BG();a.n=AAd;a.cw=M(0.0,1.0,0.0);a.eK=0.0;a.S=D(93);}
var Gl=C(V);
function XZ(){var a=new Gl();Ps(a);return a;}
function Ps(a){BM(a);BG();a.n=AAd;a.Q=M(0.0,(-10000.0),0.0);a.X=1.0E-7;a.S=D(93);}
function J0(){var a=this;By.call(a);a.eB=null;a.fI=null;}
function XF(a,b){var c=new J0();Uo(c,a,b);return c;}
function Uo(a,b,c){a.eB=b;a.fI=c;CY(a);a.bs=a.eB;a.be=a.fI;}
function JX(){var a=this;By.call(a);a.eO=null;a.eS=null;}
function WE(a,b){var c=new JX();UP(c,a,b);return c;}
function UP(a,b,c){a.eO=b;a.eS=c;CY(a);a.bs=a.eO;a.be=a.eS;}
function K6(){BX.call(this);this.di=null;}
function Vt(a){var b=new K6();PV(b,a);return b;}
function PV(a,b){a.di=b;DA(a);}
function Tl(a){return a.di.r();}
function S9(a){return X1(a.di);}
function JZ(){var a=this;By.call(a);a.fX=null;a.ee=null;}
function XK(a,b){var c=new JZ();UO(c,a,b);return c;}
function UO(a,b,c){a.fX=b;a.ee=c;CY(a);a.bs=a.fX;a.be=a.ee;}
var JW=C(O);
function Qi(){var a=new JW();LN(a);return a;}
function LN(a){Bq(a);}
function Br(){var a=this;B.call(a);a.bK=null;a.bO=null;a.bZ=null;a.bh=null;a.bB=0.0;a.bW=0.0;a.cA=null;}
function AAe(){var a=new Br();C4(a);return a;}
function C4(a){E(a);}
var Kf=C(Br);
function Vm(){var a=new Kf();O$(a);return a;}
function O$(a){C4(a);a.cA=D(93);a.bh=Vs();a.bO=VB();a.bZ=VL();a.bK=W9();a.bW=15.0;a.bB=0.0;}
function TV(b){return R(0.5,0.5,0.5);}
function Nn(b){return R(0.25,0.25,0.25);}
function LQ(b){return Bu(0.65);}
function SW(b){return Bu(0.0);}
var Kc=C(Br);
function U2(){var a=new Kc();Q5(a);return a;}
function Q5(a){C4(a);a.cA=D(94);a.bh=XP();a.bO=Ww();a.bZ=XM();a.bK=UZ();a.bW=0.0;a.bB=0.1;}
function UJ(b){return R(0.25,0.25,0.25);}
function OZ(b){return R(0.25,0.25,0.25);}
function M8(b){return Bu(0.25);}
function P$(b){return Bu(0.0);}
var JA=C(Br);
function W2(){var a=new JA();L0(a);return a;}
function L0(a){C4(a);a.cA=D(95);a.bh=WT();a.bO=W6();a.bZ=Vv();a.bK=Vw();a.bW=100.0;a.bB=0.95;}
function M2(b){return R(0.5,0.5,0.5);}
function TN(b){return R(0.0,0.0,0.0);}
function RV(b){return Bu(0.0);}
function Ra(b){return Bu(1.0);}
var Kd=C(Br);
function Xg(){var a=new Kd();Tv(a);return a;}
function Tv(a){C4(a);a.cA=D(96);a.bh=VW();a.bO=XL();a.bZ=WC();a.bK=X9();a.bW=25.0;a.bB=0.1;}
function MT(b){return R(0.75,0.75,0.75);}
function NL(b){return R(1.0,1.0,1.0);}
function NC(b){return Bu(1.0);}
function Q_(b){return Bu(0.0);}
function BU(){var a=this;B.call(a);a.i=null;a.cb=0;}
var AAf=null;function Lr(){Lr=L(BU);R3();}
function U6(a){var b=new BU();GJ(b,a);return b;}
function Pf(a,b,c){var d=new BU();LG(d,a,b,c);return d;}
function GJ(a,b){var c,d,e;Lr();c=b.data;E(a);d=c.length;a.i=BI(d);e=0;while(e<d){a.i.data[e]=c[e];e=e+1|0;}}
function LG(a,b,c,d){var e,f;Lr();E(a);a.i=BI(d);e=0;while(e<d){f=b.data;a.i.data[e]=f[e+c|0];e=e+1|0;}}
function NY(a,b){if(b>=0&&b<a.i.data.length)return a.i.data[b];G(Pp());}
function RF(a){return a.i.data.length;}
function TO(a){return a.i.data.length?0:1;}
function Sv(a,b){var c,d,e,f,g;if(a===b)return 0;c=BH(a.c(),b.c());d=0;while(true){if(d>=c)return a.c()-b.c()|0;e=a.o(d);f=b.o(d);g=e-f|0;if(g)break;d=d+1|0;}return g;}
function QS(a,b){var c,d,e,f;if(a===b)return 1;if(b.c()>a.c())return 0;c=0;d=a.c()-b.c()|0;while(d<a.c()){e=a.o(d);f=c+1|0;if(e!=b.o(c))return 0;d=d+1|0;c=f;}return 1;}
function NE(a,b,c){var d,e,f,g;d=B_(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.i.data.length)return (-1);if(a.i.data[d]==e)break;d=d+1|0;}return d;}f=FT(b);g=Fs(b);while(true){if(d>=(a.i.data.length-1|0))return (-1);if(a.i.data[d]==f&&a.i.data[d+1|0]==g)break;d=d+1|0;}return d;}
function QQ(a,b){return a.ed(b,0);}
function N5(a,b,c){var d,e,f,g,h,i;d=BH(c,a.c()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.i.data[d]==e)break;d=d+(-1)|0;}return d;}f=FT(b);g=Fs(b);while(true){if(d<1)return (-1);if(a.i.data[d]==g){h=a.i.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function S$(a,b){return a.iS(b,a.c()-1|0);}
function Mv(a,b,c){if(b>c)G(G5());return Pf(a.i,b,c-b|0);}
function Th(a,b){return a.bL(b,a.c());}
function OW(a){return a;}
function TS(a){var b,c,d;b=BI(a.i.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.i.data[c];c=c+1|0;}return b;}
function In(b){Lr();return b===null?D(9):b.d();}
function Sw(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BU))return 0;c=b;if(c.c()!=a.c())return 0;d=0;while(d<c.c()){if(a.o(d)!=c.o(d))return 0;d=d+1|0;}return 1;}
function SM(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.c()!=b.c())return 0;c=0;while(c<a.c()){if(Fm(a.o(c))!=Fm(b.o(c)))return 0;c=c+1|0;}return 1;}
function NP(a){var b,c,d,e;a:{if(!a.cb){b=a.i.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.cb=(31*a.cb|0)+e|0;d=d+1|0;}}}return a.cb;}
function Ru(a,b){return a.hR(b);}
function R3(){AAf=Xn();}
var LH=C(O);
function Xi(){var a=new LH();Ok(a);return a;}
function Ok(a){Bq(a);}
function D6(){var a=this;C$.call(a);a.fe=null;a.er=null;}
function H2(a,b,c,d){JU(a,b,c,d);a.fe=BI(512);a.er=DE(512);}
function N7(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.fe;e=0;f=0;g=a.er;a:{while(true){if((e+32|0)>f&&B9(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=BH(BY(b)+j|0,i.length);b.iE(d,j,f-j|0);e=0;}if(!B9(c)){if(!B9(b)&&e>=f){Bs();k=Zz;}else{Bs();k=Zy;}break a;}i=g.data;l=0;m=BH(BY(c),i.length);n=VR(b,c);k=a.gN(d,e,f,g,l,m,n);e=n.e9;j=n.fK;if(k===null){if(!B9(b)&&e>=f){Bs();k=Zz;}else if(!B9(c)&&e>=f){Bs();k=Zy;}}c.fa(g,0,j);if(k!==null)break;}}b.ey(CM(b)-(f-e|0)|0);return k;}
var Iu=C(D6);
function WN(a){var b=new Iu();QT(b,a);return b;}
function QT(a,b){H2(a,b,2.0,4.0);}
function Ul(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.dN(2))break a;Bs();i=Zy;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!KE(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.dN(3))break a;Bs();i=Zy;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if(!Ez(l))
{i=Dn(1);break a;}if(j>=d){if(h.ie())break a;Bs();i=Zz;break a;}n=j+1|0;p=k[j];if(!Ev(p)){j=n+(-2)|0;i=Dn(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.dN(4))break a;Bs();i=Zy;break a;}k=e.data;q=J8(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.iN(j);h.gy(f);return i;}
var E4=C();
var Y4=null;function XQ(){XQ=L(E4);Om();}
function Om(){Y4=E5((EB()).data.length);Y4.data[Bl(YV)]=1;Y4.data[Bl(YU)]=2;Y4.data[Bl(YT)]=3;}
var I9=C();
function X3(){var a=new I9();Rt(a);return a;}
function Rt(a){E(a);}
var Bz=C();
var ZR=0;var ZO=0;var Z_=null;var AAg=null;var AAh=null;var AAi=null;var AAj=null;var AAk=null;function Bn(){Bn=L(Bz);Qv();}
function Qv(){var b,c;ZR=0;ZO=0;b=U(Br,4);c=b.data;BG();c[0]=AAl;c[1]=AAd;c[2]=ZQ;c[3]=ZS;AAm=b;Z_=Wj();AAj=XZ();AAg=Wn();AAh=X_();AAi=Wr();b=U(BP,1);b.data[0]=AAg;AAk=b;}
var I$=C();
function Wx(){var a=new I$();Qf(a);return a;}
function Qf(a){E(a);}
function PJ(a,b,c){return Kp(b,c);}
var EI=C(Cu);
function X4(){var a=new EI();NH(a);return a;}
function Dc(a){var b=new EI();UF(b,a);return b;}
function NH(a){EO(a);}
function UF(a,b){LC(a,b);}
function Hg(){P.call(this);this.hP=null;}
function W$(a){var b=new Hg();Pi(b,a);return b;}
function Pi(a,b){a.hP=b;BJ(a);a.P=R(1.0,1.0,1.0);a.W=M(0.0,1.0,0.0);a.bb=D(81);}
var FO=C(Dj);
var ZM=null;function Rv(){Rv=L(FO);QY();}
function Xl(){var a=new FO();KF(a);return a;}
function KF(a){Rv();H0(a,D(97),U(BU,0));}
function Td(a){return WN(a);}
function QY(){ZM=Xl();}
var ET=C(0);
function LB(){var a=this;B.call(a);a.K=null;a.fJ=null;a.dZ=null;a.eQ=null;a.fj=null;a.eF=null;}
function Xw(a){var b=new LB();P3(b,a);return b;}
function P3(a,b){var c;E(a);a.K=b;c=b.exports.memory.buffer;a.fJ=new Int8Array(c);a.dZ=new Int16Array(c);a.eQ=new Int32Array(c);a.fj=new Float32Array(c);a.eF=new Float64Array(c);}
function Oa(a,b){return WX(a,b);}
function Pt(a,b,c){return R5(Kj(a,b,c));}
function Kj(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=c.data;switch(d.length){case 0:return a.K.exports[$rt_ustr(b)]();case 1:e=a.K;f=J(d[0]);return e.exports[$rt_ustr(b)](f);case 2:e=a.K;f=J(d[0]);g=J(d[1]);return e.exports[$rt_ustr(b)](f,g);case 3:e=a.K;f=J(d[0]);g=J(d[1]);h=J(d[2]);return e.exports[$rt_ustr(b)](f,g,h);case 4:e=a.K;f=J(d[0]);g=J(d[1]);h=J(d[2]);i=J(d[3]);return e.exports[$rt_ustr(b)](f,g,h,i);case 5:e=a.K;f=J(d[0]);g=J(d[1]);h=J(d[2]);i=J(d[3]);j=J(d[4]);return e.exports[$rt_ustr(b)](f,g,h,i,j);case 6:e
=a.K;f=J(d[0]);g=J(d[1]);h=J(d[2]);i=J(d[3]);j=J(d[4]);k=J(d[5]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k);case 7:e=a.K;f=J(d[0]);g=J(d[1]);h=J(d[2]);i=J(d[3]);j=J(d[4]);k=J(d[5]);l=J(d[6]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l);case 8:e=a.K;f=J(d[0]);g=J(d[1]);h=J(d[2]);i=J(d[3]);j=J(d[4]);k=J(d[5]);l=J(d[6]);m=J(d[7]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l,m);case 9:e=a.K;f=J(d[0]);g=J(d[1]);h=J(d[2]);i=J(d[3]);j=J(d[4]);k=J(d[5]);l=J(d[6]);m=J(d[7]);n=J(d[8]);return e.exports[$rt_ustr(b)](f,g,
h,i,j,k,l,m,n);default:}return null;}
function J(b){return NU(b);}
var CK=C();
var AAn=0;var AAo=0;var AAp=null;function TT(b,c){var d;d=3*b|0;if(c!==null&&c.data.length==d)return c;return DE(d);}
function NO(b,c,d,e){var f,g,h,i,j,k,l;AAn=b;AAo=c;Bn();AAp=AAk.data[d];f=e*0.005;g=0.55+f*6.0*2.0*3.141592653589793;h=1.55;i=2.55;j=f-0.2;if(j>0.0){h=h+20.0*Ki(1.0,j);i=i+20.0*Jx(Ki(1.0,j)*3.141592653589793/2.0);}k=i*Ny(g);l=i*Jx(g);AAp.bA=IY(M(0.0,1.0,0.0),M(k,h,l));}
function Sq(b,c){var d,e;d=0;e=0;while(e<AAn){d=M9(e,b,c,d);e=e+1|0;}}
function M9(b,c,d,e){var f,g,h,i;f=d.data;g=SI(b,c,AAp,AAn,AAo);h=e+1|0;f[e]=(g.cW(g.bn)*255.0+(-128.0)|0)<<24>>24;i=h+1|0;f[h]=(g.cW(g.bk)*255.0+(-128.0)|0)<<24>>24;h=i+1|0;f[i]=(g.cW(g.bl)*255.0+(-128.0)|0)<<24>>24;return h;}
function Fj(){var a=this;B.call(a);a.bn=0.0;a.bk=0.0;a.bl=0.0;}
var ZU=null;function Cp(){Cp=L(Fj);Q2();}
function Ex(a,b,c){var d=new Fj();Io(d,a,b,c);return d;}
function Io(a,b,c,d){Cp();E(a);a.bn=b;a.bk=c;a.bl=d;}
function R(b,c,d){Cp();return Ex(b,c,d);}
function B6(b,c){Cp();return Ex(b*c.bn,b*c.bk,b*c.bl);}
function E2(b,c){Cp();return Ex(b.bn*c.bn,b.bk*c.bk,b.bl*c.bl);}
function Cj(b,c){Cp();return Ex(b.bn+c.bn,b.bk+c.bk,b.bl+c.bl);}
function TI(a,b){if(b<0.0)b=0.0;else if(b>1.0)b=1.0;return b;}
function Q2(){ZU=R(0.0,0.0,0.0);}
var GI=C(BC);
function On(){var a=new GI();QV(a);return a;}
function JS(a){var b=new GI();Oe(b,a);return b;}
function QV(a){Dv(a);}
function Oe(a,b){Ee(a,b);}
var D1=C(0);
var Fx=C(0);
var Gc=C(O);
function Wg(a){var b=new Gc();Q$(b,a);return b;}
function V0(){var a=new Gc();Pm(a);return a;}
function Q$(a,b){DX(a,b);}
function Pm(a){Bq(a);}
function Ko(){B.call(this);this.dR=null;}
function Xj(a){var b=new Ko();S3(b,a);return b;}
function S3(a,b){E(a);a.dR=b;}
function X5(b){return Xj(b);}
function T6(a,b){a.dR.bi(b);}
function TL(a,b){a.dR.hd(b);}
function B8(){var a=this;B.call(a);a.I=null;a.b6=0.0;a.bN=null;}
function AAq(){var a=new B8();Fg(a);return a;}
function Fg(a){E(a);}
function Iv(){var a=this;B8.call(a);a.et=null;a.ek=null;a.fm=0.0;a.ih=null;}
function Vb(a,b,c,d){var e=new Iv();UK(e,a,b,c,d);return e;}
function UK(a,b,c,d,e){a.ih=b;a.et=c;a.ek=d;a.fm=e;Fg(a);a.I=a.et;a.bN=a.ek;a.b6=a.fm;}
function H$(){var a=this;B.call(a);a.M=null;a.ej=null;a.u=null;a.x=0;}
function XI(){var a=new H$();UG(a);return a;}
function UG(a){E(a);a.u=Bx();}
var EW=C();
var AAr=null;function AAs(){var a=new EW();Uk(a);return a;}
function Uk(a){E(a);}
function MF(a){if(AAr===null)AAr=CQ(Nu()?1:0);return AAr.e$();}
function R7(a,b){var c,d;c=Jl();d=U1(c);SH($rt_ustr(b),CH(d,"handle"));return c.d4();}
function TJ(b,c){b.bi(Xd(c));}
function Nu(){{try {if(typeof WebAssembly==="object"&&typeof WebAssembly.instantiate==="function"){const module=new WebAssembly.Module(Uint8Array.of(0x0,0x61,0x73,0x6d,0x01,0x00,0x00,0x00));if(module instanceof WebAssembly.Module)return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;}}catch(e){}return false;}}
function SH(b,c){((fetch(b)).then(function(response){return WebAssembly.compileStreaming(response);})).then(function(module){return c(module);});}
var Kv=C();
function Jx(b){return Math.sin(b);}
function Ny(b){return Math.cos(b);}
function FM(b){return Math.sqrt(b);}
function Sr(b){return Math.floor(b);}
function C9(b,c){return Math.pow(b,c);}
function BH(b,c){if(b<c)c=b;return c;}
function B_(b,c){if(b>c)c=b;return c;}
function Ki(b,c){if(b<c)c=b;return c;}
function TB(b){if(b<=0.0)b= -b;return b;}
function Eu(){X.call(this);this.h0=0;}
var AAt=null;function SZ(){SZ=L(Eu);M6();}
function X7(a){var b=new Eu();I3(b,a);return b;}
function I3(a,b){SZ();B$(a);a.h0=b;}
function K7(b){SZ();return X7(b);}
function M6(){AAt=F($rt_bytecls());}
function Di(){var a=this;B.call(a);a.fW=null;a.iD=null;a.hJ=null;a.ij=null;a.iK=null;a.cN=0;a.gq=0;}
function AAu(a,b){var c=new Di();Lh(c,a,b);return c;}
function Lh(a,b,c){E(a);a.fW=b.fJ;a.iD=b.dZ;a.hJ=b.eQ;a.ij=b.fj;a.iK=b.eF;a.gf(c);}
function SE(a,b){a.gq=b;a.cN=b;}
var HN=C(Di);
function WX(a,b){var c=new HN();SS(c,a,b);return c;}
function SS(a,b,c){Lh(a,b,c);}
function Re(a,b){var c,d,e,f,g;c=DE(b);d=0;while(d<b){e=c.data;f=a.fW;g=a.cN;a.cN=g+1|0;e[d]=f[g];d=d+1|0;}return c;}
function Fq(){var a=this;B.call(a);a.g7=null;a.gi=null;}
var AAv=null;function EX(){EX=L(Fq);NX();}
function Xb(a){var b=new Fq();GM(b,a);return b;}
function GM(a,b){EX();E(a);a.g7=b;}
function Ll(){EX();return Df(D(98));}
function Df(b){var c,d,e;EX();c=AAv.cJ(b);if(c===null){c=Xb(b);d=b.iH(46);if(d>=0){e=b.bL(0,d);c.gi=Df(e);}else if(!b.ci())c.gi=Df(D(99));AAv.bm(b,c);}return c;}
function MR(a,b){var c;c=I_(a,b.cR(),b.gk());if(C7(b.fD())>=C7(ZB))JE($rt_ustr(c));else if(C7(b.fD())<C7(Zi))F6($rt_ustr(c));else Jj($rt_ustr(c));}
function I_(a,b,c){var d,e,f,g,h,i,j;if(c===null)return b;d=K();e=0;a:{while(true){if(e>=b.c())break a;f=b.ed(123,e);if(f<0)break a;g=f+1|0;h=Hp(g,b);if(h<0)break;if(b.o(h)!=125){d.fk(b,e,h);e=h;continue;}i=c.data;j=E8(b.bL(g,h));if(j>=i.length){d.fk(b,e,h);e=h;continue;}d.U(i[j]);e=h+1|0;}}return d.d();}
function Hp(b,c){var d,e;EX();while(true){if(b>=c.c())return (-1);d=b+1|0;e=c.o(b);if(e<=48)break;if(e>=57)break;b=d;}return d;}
function Tb(a,b,c){a.g4(Xz(b,c));}
function NX(){AAv=UN();}
function F6(b){if(console){console.info(b);}}
function Jj(b){if(console){console.warn(b);}}
function JE(b){if(console){console.error(b);}}
function Eg(){var a=this;B.call(a);a.fq=null;a.e3=null;a.gB=BL;a.g6=null;a.iY=BL;a.hk=BL;}
var AAw=BL;function Xz(a,b){var c=new Eg();TC(c,a,b);return c;}
function TC(a,b,c){var d;E(a);a.fq=b;a.e3=c;a.gB=IW();d=AAw;AAw=T(d,H(1));a.iY=d;a.hk=(Bx()).g8();}
function O0(a){return a.fq;}
function PT(a){return a.e3;}
function Pj(a){return a.g6;}
var Cc=C();
var AAm=null;var AAl=null;var AAd=null;var ZQ=null;var ZS=null;function BG(){BG=L(Cc);Op();}
function Op(){AAl=U2();AAd=Vm();ZQ=Xg();ZS=W2();}
var E9=C(Cn);
function VC(a){var b=new E9();Oc(b,a);return b;}
function He(b){if(b!==null&&!(typeof b==='undefined'?1:0))return VC(b);return null;}
function Oc(a,b){Fv(a,b);}
function Fl(a){return JD(a.bz);}
function HY(a,b){return (Fl(a))[b];}
function Nj(a){return (Fl(a)).length;}
function ML(a,b){return HY(a,b);}
function Jt(){var a=this;Ck.call(a);a.eP=null;a.d_=null;a.en=null;a.eT=null;}
function Wo(a,b,c,d){var e=new Jt();UD(e,a,b,c,d);return e;}
function UD(a,b,c,d,e){a.eP=b;a.d_=c;a.en=d;a.eT=e;FQ(a);a.dI=a.eP;a.dA=a.d_;a.c3=a.en;a.c2=a.eT;}
var Kg=C(O);
function V7(){var a=new Kg();RI(a);return a;}
function RI(a){Bq(a);}
var Jq=C();
function Po(b){var c,d,e,f;c=b.data;d=c.length;e=0;while(true){if(e>=d)return null;f=c[e];if(f!==null)break;e=e+1|0;}return f;}
function Ju(){var a=this;Ck.call(a);a.fo=null;a.d6=null;a.fp=null;a.el=null;}
function WI(a,b,c,d){var e=new Ju();SY(e,a,b,c,d);return e;}
function SY(a,b,c,d,e){a.fo=b;a.d6=c;a.fp=d;a.el=e;FQ(a);a.dI=a.fo;a.dA=a.d6;a.c3=a.fp;a.c2=a.el;}
var HQ=C();
function Sj(b){if(!(b instanceof BO))return null;return b;}
function P2(b){if(b===null)return null;if(b.eh(D(77)))return CQ(1);if(!b.eh(D(76)))return null;return CQ(0);}
function Tk(b){var c;c=Sj(b);if(c===null&&b!==null)return P2(b.d());return c;}
function DM(){var a=this;B.call(a);a.b7=0;a.ew=0;}
var Zz=null;var Zy=null;function Bs(){Bs=L(DM);QD();}
function Hu(a,b){var c=new DM();Ig(c,a,b);return c;}
function Ig(a,b,c){Bs();E(a);a.b7=b;a.ew=c;}
function MN(a){return a.b7?0:1;}
function Sc(a){return a.b7!=1?0:1;}
function Uj(a){return !a.h3()&&!a.fE()?0:1;}
function Sg(a){return a.b7!=2?0:1;}
function St(a){return a.b7!=3?0:1;}
function Rh(a){if(a.iq())return a.ew;G(W8());}
function Dn(b){Bs();return Hu(2,b);}
function QD(){Zz=Hu(0,0);Zy=Hu(1,0);}
var Dz=C();
var AAx=null;var AAy=null;function En(){En=L(Dz);Sn();}
function KK(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;En();d=$rt_doubleToLongBits(b);c.ef=CT(Bj(d,Q(0, 2147483648)),BL)?0:1;e=Bj(d,Q(4294967295, 1048575));f=DL(C6(d,52))&2047;if(CT(e,BL)&&!f){c.cQ=BL;c.c6=0;return;}g=0;if(f)h=WS(e,Q(0, 1048576));else{h=Cb(e,1);while(CT(Bj(h,Q(0, 1048576)),BL)){h=Cb(h,1);f=f+(-1)|0;g=g+1|0;}}i=Ne(AAy,f);if(i<0)i=( -i|0)-2|0;j=f-AAy.data[i]|0;k=12+j|0;l=FF(h,AAx.data[i],k);if(II(l,Q(2808348672, 232830643))){i=i+1|0;m=f-AAy.data[i]|0;k=12+m|0;l=FF(h,AAx.data[i],k);}n=BZ(AAx.data[i],
(63-k|0)-g|0);o=C6(T(n,H(1)),1);p=C6(n,1);if(CT(h,Q(0, 1048576)))p=C6(p,2);q=J$(l,p);r=Lj(l,o);m=XX(q,r);h=m>0?N(Bd(l,q),q):m<0?T(N(Bd(l,r),r),r):N(Bd(T(l,Bd(r,H(2))),r),r);if(II(h,Q(2808348672, 232830643))){i=i+1|0;h=Bd(h,H(10));}else if(IZ(h,Q(1569325056, 23283064))){i=i+(-1)|0;h=N(h,H(10));}c.cQ=h;c.c6=i-330|0;}
function J$(b,c){var d,e;En();d=H(10);while(CU(d,c)){d=N(d,H(10));}e=De(b,d);if(II(e,Bd(c,H(2))))d=Bd(d,H(10));return d;}
function Lj(b,c){var d,e;En();d=H(1);while(CU(d,c)){d=N(d,H(10));}e=De(b,d);if(IB(Xr(d,e),Bd(c,H(2))))d=Bd(d,H(10));return d;}
function FF(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;En();e=Bj(b,H(65535));f=Bj(BZ(b,16),H(65535));g=Bj(BZ(b,32),H(65535));h=Bj(BZ(b,48),H(65535));i=Bj(c,H(65535));j=Bj(BZ(c,16),H(65535));k=Bj(BZ(c,32),H(65535));l=Bj(BZ(c,48),H(65535));m=T(T(N(k,e),N(j,f)),N(i,g));n=T(T(T(N(l,e),N(k,f)),N(j,g)),N(i,h));o=T(T(N(l,f),N(k,g)),N(j,h));p=T(N(l,g),N(k,h));q=N(l,h);r=T(T(Cb(q,32+d|0),Cb(p,16+d|0)),Cb(o,d));s=d>16?T(r,Cb(n,d-16|0)):T(r,BZ(n,16-d|0));s=T(s,BZ(m,32-d|0));return s;}
function Sn(){var b,c,d,e,f,g,h,i,j,k,l;AAx=Xc(660);AAy=E5(660);b=Q(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AAx.data;g=d+330|0;f[g]=DN(e,H(80));AAy.data[g]=c;e=DN(e,H(10));h=GS(e,H(10));while(CU(e,b)&&CT(Bj(e,Q(0, 2147483648)),BL)){e=Cb(e,1);c=c+1|0;h=Cb(h,1);}e=T(e,Bd(h,H(10)));d=d+1|0;}i=Q(3435973836, 214748364);j=1023;d=0;while(d<330){k=0;e=b;while(IB(e,i)){e=C6(e,1);k=k+1|0;j=j+(-1)|0;}h=N(e,H(10));if(k<=0)b=h;else{l=Bj(b,H((1<<k)-1|0));b=T(h,C6(N(l,H(10)),k));}f=AAx.data;g=(330-d|0)-1|0;f[g]
=DN(b,H(80));AAy.data[g]=j;d=d+1|0;}}
function Ib(){var a=this;B8.call(a);a.fZ=null;a.fb=null;a.e_=0.0;a.ht=null;}
function Xf(a,b,c,d){var e=new Ib();OU(e,a,b,c,d);return e;}
function OU(a,b,c,d,e){a.ht=b;a.fZ=c;a.fb=d;a.e_=e;Fg(a);a.I=a.fZ;a.bN=a.fb;a.b6=a.e_;}
function La(){DP.call(this);this.eN=null;}
function V_(a){var b=new La();RD(b,a);return b;}
function RD(a,b){Hm(a,b);}
function QR(a){return a.eN;}
function Tr(a,b){a.eN=b;}
var Kl=C(CF);
var F_=C();
function Wi(){var a=new F_();Nm(a);return a;}
function Nm(a){E(a);}
function Te(a,b){return Hk(a,b);}
function Hk(a,b){return UV(b);}
function If(){var a=this;B.call(a);a.eG=null;a.fU=0;}
function WA(a){var b=new If();P7(b,a);return b;}
function P7(a,b){E(a);a.eG=b;}
var Ie=C(Bm);
var IK=C(Bm);
var JH=C(O);
function Xv(){var a=new JH();SF(a);return a;}
function SF(a){Bq(a);}
var B5=C(CD);
var Zg=null;var Z4=null;var Zh=null;var AAz=null;function DH(){DH=L(B5);PA();}
function I7(a,b){var c=new B5();KA(c,a,b);return c;}
function KA(a,b,c){DH();Fz(a,b,c);}
function H7(){DH();return C3(B5,[Zg,Z4,Zh]);}
function PA(){Zg=I7(D(100),0);Z4=I7(D(101),1);Zh=I7(D(102),2);AAz=H7();}
var Iy=C();
function W5(){var a=new Iy();LR(a);return a;}
function LR(a){E(a);}
function J5(){var a=this;B.call(a);a.dt=null;a.dx=null;}
function WH(a,b){var c=new J5();Ug(c,a,b);return c;}
function Ug(a,b,c){a.dx=b;a.dt=c;E(a);}
function RR(a,b){var c,$$je;a:{try{a.dt.ep(a.dx);}catch($$e){$$je=W($$e);if($$je instanceof Bo){c=$$je;break a;}else{throw $$e;}}return;}G(c);}
function Rf(a,b){var c,$$je;a:{try{a.dt.ep(a.dx);}catch($$e){$$je=W($$e);if($$je instanceof Bo){c=$$je;break a;}else{throw $$e;}}return;}G(c);}
function GO(){BQ.call(this);this.dL=null;}
function Vo(a){var b=new GO();OX(b,a);return b;}
function OX(a,b){DZ(a);a.dL=b;}
function LM(a,b){return a.dL.data[b];}
function NZ(a){return a.dL.data.length;}
var BN=C();
var AAA=null;var AAB=null;var AAC=null;var AAD=null;var AAE=null;var AAF=null;var AAG=null;function RM(){RM=L(BN);MC();}
function Hq(b,c){var d,e,f;RM();if(c===null)c=AAF;d=U(B,b.r());b.gv(d);QU(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;b.g2(e,f[e]);e=e+1|0;}}
function Kp(b,c){RM();return b!==null?b.gg(c): -c.gg(b)|0;}
function MC(){AAA=XN();AAB=Wz();AAC=XR();AAD=VS();AAE=XV();AAF=Wx();AAG=X3();}
var Gu=C();
function ME(b){return b!==null?b.d():null;}
function QB(b){return b!==null?b.c():0;}
function Rb(b){return QB(b)?0:1;}
$rt_packages([-1,"dev",0,"webfx",1,"stack",2,"platform",3,"webassembly",4,"spi",3,"json",6,"spi"]);
$rt_metadata([B,0,0,[],0,3,0,0,["jZ",Yh(Cr),"kd",Yh(EG),"b2",Yh(PW),"D",Yi(L7),"d",Yh(OY),"jd",Yh(Db),"dS",Yh(Uy)],Bo,0,B,[],0,3,0,0,["ko",Yl(HS),"cu",Yh(Rj),"cR",Yh(P6)],BC,0,Bo,[],0,3,0,0,["a",Yh(Dv),"k",Yi(Ee)],O,0,BC,[],0,3,0,0,["a",Yh(Bq),"k",Yi(DX)],Dy,0,O,[],0,3,0,0,["a",Yh(HU),"k",Yi(S1)],Bf,0,B,[],3,3,0,0,0,Fb,0,B,[Bf],3,0,0,0,0,C1,0,B,[],0,0,0,0,["cv",Yi(SD)],G6,0,B,[],0,3,0,0,["jh",Yj(Rw),"ie",Yh(Qy),"dN",Yi(QN),"iN",Yi(RB),"gy",Yi(UR)],Bv,0,B,[],3,3,0,0,0,X,0,B,[Bv],1,3,0,0,["a",Yh(B$)],Bb,0,B,[],
3,3,0,0,0,Ct,0,X,[Bb],0,3,0,BW,["bD",Yi(IC),"N",Yh(NJ),"d",Yh(SK)],IX,0,BC,[],0,3,0,0,["a",Yh(To)],B4,0,B,[],0,0,0,PZ,0,EF,0,B,[],32,0,0,Xu,0,Dr,0,B,[],3,3,0,0,["bf",Yi(Ot),"gV",Yi(MQ),"hQ",Yi(SC),"gD",Yi(Q8)],Ec,0,B,[Dr],3,3,0,0,["bf",Yi(Ot),"gV",Yi(MQ),"hQ",Yi(SC),"gD",Yi(Q8)],FK,0,B,[Dr],3,3,0,0,["bf",Yi(Ot),"gV",Yi(MQ),"hQ",Yi(SC),"gD",Yi(Q8),"ec",Yh(Md)],CI,"JsonProvider",7,B,[Ec,FK],3,3,0,0,["bf",Yi(Ot),"gV",Yi(MQ),"hQ",Yi(SC),"gD",Yi(Q8),"ec",Yh(Md),"h5",Yh(Q4)],CG,0,B,[CI],3,3,0,0,["bf",Yi(Ot),"gV",
Yi(MQ),"hQ",Yi(SC),"gD",Yi(Q8),"ec",Yh(Md),"h5",Yh(Q4)],DQ,0,B,[],3,3,0,0,["hx",Yi(MJ)],CL,0,B,[CG,DQ],3,3,0,0,["bf",Yi(Ot),"gV",Yi(MQ),"hQ",Yi(SC),"gD",Yi(Q8),"ec",Yh(Md),"h5",Yh(Q4),"hx",Yi(MJ),"iX",Yi(Qd)],FP,0,X,[Bb],0,3,0,Ja,["kV",Yi(I4),"N",Yh(Mt),"d",Yh(Ry)],Da,0,B,[],3,3,0,0,0,Jf,0,B,[Da],0,3,0,0,["a",Yh(NQ),"fL",Yh(My),"iQ",Yh(I2)],B2,0,B,[],3,3,0,0,0,EC,0,B,[],3,3,0,0,0,B3,0,B,[EC],0,3,0,FI,["k",Yi(HA),"jn",Yj(E6),"g8",Yh(LW)],DC,0,B,[],3,3,0,0,0,E1,0,B,[Bf],3,3,0,0,0,JJ,0,B,[E1],1,3,0,0,["kp",Yi(Ui),
"kf",Yh(Pd)],CP,0,B,[CG],3,3,0,0,["bf",Yi(Ot),"gV",Yi(MQ),"hQ",Yi(SC),"gD",Yi(Q8),"ec",Yh(Md),"h5",Yh(Q4)],Ej,0,B,[DQ],3,3,0,0,["hx",Yi(MJ)],CZ,0,B,[CL,CP,Ej],3,3,0,0,["bf",Yi(Ot),"gV",Yi(MQ),"hQ",Yi(SC),"gD",Yi(Q8),"ec",Yh(Md),"h5",Yh(Q4),"hx",Yi(MJ),"iX",Yi(Qd)],GA,0,B,[Bf],1,3,0,0,0,EK,0,B,[Bf],3,0,0,0,0,DV,0,B,[],3,3,0,0,0,Je,0,B,[DV],0,3,0,0,["i_",Yi(QA),"ep",Yi(RS),"j9",Yi(LE)],Cn,0,B,[CP],1,0,0,0,["gV",Yi(MQ),"hQ",Yi(SC),"gD",Yi(Q8),"ec",Yh(Md),"h5",Yh(Q4),"dw",Yi(Fv),"fi",Yh(GN),"cD",Yi(F4),"f5",Yh(GZ),
"d7",Yi(KJ),"ex",Yi(K3),"bf",Yi(JF),"e6",Yi(Gx),"d",Yh(Lz),"bw",Yh(MP),"dl",Yh(T3),"c$",Yi(MW),"b8",Yi(MS),"c7",Yi(L6)],C_,0,B,[],3,3,0,0,["gO",Yj(Uc),"i1",Yi(UW),"h6",Yi(Ox),"dQ",Yi(Un),"dK",Yj(Sa)],CV,0,B,[C_,CG],3,3,0,0,["gO",Yj(Uc),"i1",Yi(UW),"h6",Yi(Ox),"dQ",Yi(Un),"dK",Yj(Sa),"bf",Yi(Ot),"gV",Yi(MQ),"hQ",Yi(SC),"gD",Yi(Q8),"ec",Yh(Md),"h5",Yh(Q4),"hZ",Yi(Pw),"dc",Yi(Rc)],Fy,0,B,[C_],3,3,0,0,["gO",Yj(Uc),"i1",Yi(UW),"h6",Yi(Ox),"dQ",Yi(Un),"dK",Yj(Sa)],CX,0,B,[CV,Fy],3,3,0,0,["gO",Yj(Uc),"i1",Yi(UW),"h6",
Yi(Ox),"dQ",Yi(Un),"dK",Yj(Sa),"bf",Yi(Ot),"gV",Yi(MQ),"hQ",Yi(SC),"gD",Yi(Q8),"ec",Yh(Md),"h5",Yh(Q4),"hZ",Yi(Pw),"dc",Yi(Rc),"hY",Yj(Sm)],EP,0,Cn,[CX],4,3,0,0,["gO",Yj(Uc),"i1",Yi(UW),"h6",Yi(Ox),"dQ",Yi(Un),"dK",Yj(Sa),"gV",Yi(MQ),"hQ",Yi(SC),"gD",Yi(Q8),"ec",Yh(Md),"h5",Yh(Q4),"hZ",Yi(Pw),"dc",Yi(Rc),"hY",Yj(Sm),"a",Yh(NS),"dw",Yi(JB),"kB",Yi(LA),"j$",Yh(HV),"kX",Yj(K$),"d",Yh(OM),"e6",Yi(T1),"bf",Yi(RP),"ex",Yi(Or),"d7",Yi(PD),"f5",Yh(L_),"cD",Yi(Qz),"fi",Yh(Mg),"fT",Yj(QG),"cH",Yi(Sk),"gh",Yh(QI)],Fe,
0,B,[],3,3,0,0,0,Jc,0,B,[Fe],0,3,0,0,["i_",Yi(Ub),"g3",Yi(OF)],BK,0,B,[],1,3,0,0,["a",Yh(FG)],C5,0,B,[],3,3,0,0,0,CA,0,Bo,[],0,3,0,0,["k",Yi(IA),"cv",Yi(Hl)]]);
$rt_metadata([CF,0,CA,[],0,3,0,0,["k",Yi(Gr)],ES,0,B,[Bf],3,0,0,0,0,S,0,B,[],3,3,0,0,0,Gm,0,B,[S],0,3,0,0,["jX",Yi(Nz),"g",Yi(Ol),"jx",Yi(Jv)],KT,0,Dy,[],0,3,0,0,["a",Yh(Rs)],DW,0,B,[],4,3,0,TA,0,Kb,0,B,[],4,3,0,0,0,D4,0,B,[DC],0,3,0,0,["a",Yh(Ix),"e8",Yi(Jk),"cZ",Yi(Mq),"c8",Yi(MG)],FJ,0,B,[],3,3,0,0,0,Es,0,B,[FJ],3,3,0,0,0,EV,0,B,[],3,3,0,0,0,Cz,0,B,[Es,EV],1,3,0,0,["a",Yh(D8),"cn",Yk(MH)],EL,0,Cz,[],0,3,0,TK,["gY",Yi(NT)],Fa,0,B,[],3,3,0,0,0,Bm,0,B,[Bf],1,3,0,0,0,GQ,0,Bm,[],1,3,0,0,0,Ip,0,B,[],4,0,0,0,["jt",
Yj(KC),"kg",Yh(Kt),"ku",Yh(IM)],Cy,0,B,[Bv,C5],0,0,0,0,["a",Yh(EM),"bD",Yi(Er),"k",Yi(K5),"kJ",Yi(Is),"ky",Yi(KG),"kW",Yi(EE),"cs",Yj(E_),"kG",Yi(Hs),"eg",Yj(Np),"gJ",Yk(Tf),"j2",Yi(Km),"es",Yj(Lq),"ia",Yk(Me),"j6",Yi(Jp),"d0",Yj(Iw),"jk",Yi(K8),"fl",Yj(KP),"e2",Yj(Jb),"bG",Yi(EH),"d",Yh(Ek),"c",Yh(Ke),"ki",Yk(HB),"dX",Yl(Gt),"ei",Yl(JQ),"eb",Yi(JL)],C2,0,B,[],3,3,0,0,0,Ge,0,Cy,[C2],0,3,0,0,["bD",Yi(TU),"a",Yh(Tw),"k",Yi(Mm),"U",Yi(Y),"e",Yi(Ml),"w",Yi(BA),"iv",Yi(R8),"hK",Yi(P0),"j",Yi(Gf),"fk",Yk(SU),"hV",
Yj(Rn),"hr",Yj(Tm),"hE",Yl(M$),"hj",Yj(T0),"iB",Yj(NI),"hb",Yj(Ua),"eb",Yi(Um),"ei",Yl(QP),"dX",Yl(Oy),"c",Yh(Oq),"d",Yh(Bg),"bG",Yi(Ur),"e2",Yj(Mp),"fl",Yj(LV),"d0",Yj(QK),"es",Yj(Pl),"cs",Yj(UI)],FD,0,B,[],4,3,0,UL,0,JP,0,O,[],0,3,0,0,["a",Yh(Ud)],Fk,0,B,[],3,3,0,0,0,FU,0,B,[Fk],3,3,0,0,["i$",Yi(OQ)],Dm,0,B,[FU],3,3,0,0,["i$",Yi(OQ)],Cf,0,B,[Dm],1,0,0,0,["i$",Yi(OQ),"a",Yh(FX),"je",Yj(E0),"jE",Yj(DF),"ga",Yj(K4)],Ce,0,Cf,[],0,0,0,Dw,["i$",Yi(OQ),"a",Yh(Dk),"hI",Yh(Qn),"iO",Yi(ST),"bv",Yi(Gz),"du",Yi(Hv),"cK",
Yi(OD),"d",Yh(RH),"iW",Yj(PF)],D5,0,Ce,[],1,0,0,0,["i$",Yi(OQ),"a",Yh(KU)],B0,0,B,[],3,3,0,0,0,G$,0,D5,[B0],0,0,0,0,["i$",Yi(OQ),"jD",Yj(Tt),"bI",Yi(SQ),"b4",Yi(P_)],Hh,0,CA,[],0,3,0,0,["cv",Yi(Mn)],Cm,0,B,[B2],1,3,0,0,["a",Yh(E$),"d",Yh(Oz)],Co,0,B,[],3,3,0,0,0,D0,0,Cm,[Co,Bv],0,3,0,0,["c9",Yi(R_),"a",Yh(IT),"bD",Yi(D_),"j5",Yj(KI),"cJ",Yi(Si),"km",Yi(GG),"ks",Yk(CW),"kI",Yh(C8),"bm",Yj(M0),"dD",Yj(RY),"b0",Yk(O6),"hy",Yi(RQ),"cp",Yh(PB),"kw",Yi(Hx),"r",Yh(Pv)],G2,0,D0,[B2],0,3,0,0,["a",Yh(NM),"bD",Yi(Pn),
"c9",Yi(OH),"cJ",Yi(Mj),"b0",Yk(T2),"bm",Yj(Sz),"dD",Yj(T4),"dy",Yi(L9),"fY",Yh(RZ),"ja",Yh(PU),"gC",Yi(PI),"iw",Yi(Mo)],Ht,0,Cy,[C2],0,3,0,0,["a",Yh(Sx),"gw",Yi(P4),"h_",Yj(P5),"d",Yh(OK),"bG",Yi(O1),"cs",Yj(Mf)],Cx,0,B,[],1,3,0,0,["bD",Yi(Fh),"kP",Yh(CM),"jj",Yi(JM),"jS",Yh(HO),"j7",Yh(BY),"jR",Yh(B9)],Cv,0,B,[],0,0,0,0,["co",Yi(Eh),"y",Yh(OS),"kA",Yh(Lb),"jm",Yh(FH)],BV,0,B,[],3,3,0,0,0,JG,0,Cv,[BV],0,0,0,0,["co",Yi(Ri),"hX",Yh(OE),"s",Yh(SP)],DT,0,B,[DC],3,3,0,0,0,D7,0,D4,[DT],1,3,0,0,["a",Yh(Gw),"e8",Yi(N9),
"j1",Yi(IS),"dT",Yi(LL)],Lt,0,D7,[],0,3,0,0,["a",Yh(QO),"i3",Yh(T_)],D$,0,B,[],3,3,0,0,0,D2,0,B,[D$,Co],0,0,0,0,["kT",Yj(Lo),"br",Yh(S6),"bQ",Yh(TX)],CJ,0,D2,[],0,0,0,0,["hq",Yj(HC)],Fr,0,CJ,[],4,0,0,0,["hq",Yj(RW)],H9,0,B,[],0,3,0,0,["hg",Yk(Ro)],Cw,0,CF,[],0,3,0,0,["k",Yi(Ft)],JR,0,Cw,[],0,3,0,0,["k",Yi(Pq)]]);
$rt_metadata([ER,0,BC,[],0,3,0,0,0,CB,0,B,[],3,3,0,0,0,Hi,0,B,[CB],0,3,0,0,["a",Yh(Oi)],G1,0,B,[BV],0,0,0,0,["j0",Yi(OB),"y",Yh(MX),"s",Yh(RT)],DO,0,B,[],3,3,0,0,0,CN,0,B,[DO],3,3,0,0,0,Cg,0,B,[CN],1,3,0,0,["a",Yh(FA),"e1",Yh(RN),"gv",Yi(QW)],Ci,0,B,[CN],3,3,0,0,["gM",Yi(P8)],BQ,0,Cg,[Ci],1,3,0,0,["gM",Yi(P8),"a",Yh(DZ),"t",Yh(Q9)],CO,0,B,[],3,3,0,0,0,Do,0,BQ,[Co,Bv,CO],0,3,0,0,["gM",Yi(P8),"a",Yh(JC),"bD",Yi(Ed),"kU",Yi(PH),"bG",Yi(Nh),"cY",Yi(PL),"r",Yh(Od),"g2",Yj(MD),"by",Yi(Sy),"d",Yh(Os)],Eb,0,Do,[B0],
0,0,0,0,["gM",Yi(P8),"bI",Yi(Ql),"b4",Yi(UM)],Dt,0,Cm,[],1,0,0,0,["a",Yh(JT)],DS,0,O,[],0,3,0,0,["a",Yh(F$)],Lm,0,DS,[],0,3,0,0,["a",Yh(TE)],GK,0,B,[],4,3,0,0,0,E7,0,B,[BV],3,3,0,0,0,I1,0,Bm,[],1,3,0,0,0,I0,0,B,[BV],0,0,0,0,["kK",Yi(Of),"y",Yh(Tn),"s",Yh(N1)],Hn,0,B,[],0,3,0,0,["a",Yh(OP)],Iq,0,B,[],4,0,0,0,0,Ha,0,Cw,[],0,3,0,0,["k",Yi(O4)],It,0,B,[],4,3,0,0,0,Dd,0,B,[CP],3,3,0,0,["bf",Yi(Ot),"gV",Yi(MQ),"hQ",Yi(SC),"gD",Yi(Q8),"ec",Yh(Md),"h5",Yh(Q4),"dl",Yh(PN),"b8",Yi(Q1),"c7",Yi(T$),"cD",Yi(PR)],Ds,0,B,
[CX,Dd],1,3,0,0,["gO",Yj(Uc),"i1",Yi(UW),"h6",Yi(Ox),"dQ",Yi(Un),"dK",Yj(Sa),"bf",Yi(Ot),"gV",Yi(MQ),"hQ",Yi(SC),"gD",Yi(Q8),"ec",Yh(Md),"h5",Yh(Q4),"hZ",Yi(Pw),"dc",Yi(Rc),"hY",Yj(Sm),"dl",Yh(PN),"b8",Yi(Q1),"c7",Yi(T$),"cD",Yi(PR),"a",Yh(Hj),"hw",Yi(GR),"gx",Yh(R2),"hv",Yh(Ob),"gh",Yh(L$),"cH",Yi(S4),"gS",Yj(Nw),"g1",Yh(Tq),"d",Yh(Rr),"fT",Yj(PS)],FS,0,X,[Bb],0,3,0,RO,["jr",Yi(HI)],Eq,0,B,[],3,3,0,0,0,Ln,0,B,[Eq],0,3,0,0,["a",Yh(Ou)],FV,0,B,[],3,3,0,0,0,Lk,0,Cf,[],4,3,0,0,["i$",Yi(OQ),"cv",Yi(QX),"bv",Yi(UE)],Fi,
0,B,[Bf],3,3,0,0,0,GV,0,B,[Fi],0,3,0,0,["kb",Yi(TG),"ii",Yi(PC),"jQ",Yi(HX),"jz",Yi(Tx)],H_,0,B,[],4,0,0,0,0,Ff,0,B,[],3,3,0,0,0,G4,0,B,[Ff],4,0,0,0,["dw",Yi(Qx),"iU",Yi(N4)],Ck,0,B,[],0,3,0,0,["a",Yh(FQ)],J_,0,B,[B0],0,0,0,0,["jL",Yi(ON),"bI",Yi(NB),"b4",Yi(Mw)],Dx,0,B,[],3,3,0,0,0,HP,0,B,[DO],4,3,0,0,["t",Yh(Hw)],HJ,0,B,[],4,3,0,0,0,BP,0,B,[],1,3,0,0,["a",Yh(DG)],Gs,0,B,[Dx],0,3,0,0,["kL",Yl(Rz),"dP",Yh(Tj)],HL,0,B,[ES],0,3,0,0,["jT",Yi(OA),"iF",Yj(LI),"j3",Yj(Tp)],HK,0,B,[EK],0,3,0,0,["kM",Yi(Qp),"im",Yi(TH),
"fx",Yi(UT)],HH,0,B,[Fb],0,3,0,0,["gK",Yi(NV),"dz",Yi(TF),"fx",Yi(SN)],Jz,0,B,[],4,3,0,0,0,By,0,B,[],0,3,0,0,["a",Yh(CY)],JY,0,By,[],0,0,0,0,["kN",Yj(Ov)],C$,0,B,[],1,3,0,0,["kx",Yl(Kz),"g5",Yk(JU),"jy",Yi(FY),"ix",Yi(TP),"kS",Yi(Ku),"hW",Yi(Tc),"kr",Yk(Hf),"jv",Yi(Gp),"gE",Yi(L5)],Jm,0,Ds,[],0,3,0,0,["gO",Yj(Uc),"i1",Yi(UW),"h6",Yi(Ox),"dQ",Yi(Un),"dK",Yj(Sa),"bf",Yi(Ot),"gV",Yi(MQ),"hQ",Yi(SC),"gD",Yi(Q8),"ec",Yh(Md),"h5",Yh(Q4),"hZ",Yi(Pw),"dc",Yi(Rc),"hY",Yj(Sm),"dl",Yh(PN),"b8",Yi(Q1),"c7",Yi(T$),"cD",
Yi(PR),"a",Yh(Nc),"hw",Yi(QE),"cd",Yh(Uu),"db",Yi(OT),"i9",Yh(N8),"c$",Yi(L2),"bw",Yh(Rq)]]);
$rt_metadata([DP,0,B,[CZ,Dd],1,3,0,0,["bf",Yi(Ot),"gV",Yi(MQ),"hQ",Yi(SC),"gD",Yi(Q8),"ec",Yh(Md),"h5",Yh(Q4),"hx",Yi(MJ),"iX",Yi(Qd),"dl",Yh(PN),"b8",Yi(Q1),"c7",Yi(T$),"cD",Yi(PR),"ib",Yi(Hm),"cV",Yi(LT),"r",Yh(PE)],DD,0,Cx,[Bb],1,3,0,0,["jc",function(b,c,d,e,f){G3(this,b,c,d,e,f);},"fa",Yk(Su),"jJ",Yi(JK),"j8",Yh(EJ)],Kh,0,DD,[],0,0,0,0,["jq",function(b,c,d,e,f,g,h){MM(this,b,c,d,e,f,g,h);},"gt",Yh(Sb)],H5,0,B,[],0,3,0,0,0,Bw,0,B,[Bv],0,3,0,Mr,["c4",Yj(K1),"N",Yh(C7)],HM,0,B,[],4,3,0,0,0,Dj,0,B,[Bb],1,3,
0,0,["kh",Yj(H0)],CS,0,B,[],0,3,0,FB,["k",Yi(Ic)],BO,0,B,[Bv,Bb],0,3,0,El,["kk",Yi(HG),"e$",Yh(R$),"d",Yh(ND),"D",Yi(M5)],Cu,0,O,[],0,3,0,0,["a",Yh(EO),"k",Yi(LC)],Ir,0,Cu,[],0,3,0,0,["k",Yi(Rx)],Lu,0,O,[],0,3,0,0,["a",Yh(MA)],Ij,0,B,[DT],4,3,0,0,["a",Yh(Sl),"cZ",Yi(Nt),"dT",Yi(UC),"c8",Yi(SG)],F7,0,B,[CB],0,3,0,0,["kt",Yi(Rd),"fF",Yj(R6)],Jg,0,B,[Bf],1,3,0,0,0,Dl,0,Cz,[],0,3,0,0,["kj",Yi(Gv)],Fp,0,Dl,[],0,3,0,0,["kn",Yj(J7),"cn",Yk(Ns),"e4",Yi(Pg)],P,0,B,[],0,3,0,0,["a",Yh(BJ)],KV,0,P,[],0,0,0,0,["bd",Yi(Qk)],KX,
0,P,[],0,0,0,0,["bd",Yi(OR)],Fo,0,B,[Bf],3,0,0,0,0,Gn,0,B,[Fo],0,3,0,0,["gK",Yi(QC),"dz",Yi(MY),"fx",Yi(PX)],V,0,BK,[],0,3,0,0,["a",Yh(BM),"f3",Yi(Nb),"eq",Yi(Nv)],KY,0,V,[],0,0,0,0,["bd",Yi(TQ)],K2,0,V,[],0,0,0,0,["bd",Yi(Ms)],KW,0,P,[],0,0,0,0,["bd",Yi(Mh)],KZ,0,V,[],0,0,0,0,["bd",Yi(Pa)],FC,0,B,[],3,3,0,0,0,KR,0,V,[],0,0,0,0,["bd",Yi(S5)],KN,0,B,[S],0,3,0,0,["a",Yh(Uf),"g",Yi(TM),"bo",Yi(J9)],GF,0,B,[S],0,3,0,0,["a",Yh(Qa),"g",Yi(LU),"bj",Yi(Jh)],KM,0,B,[S],0,3,0,0,["a",Yh(PQ),"g",Yi(Nl),"bj",Yi(GH)],GD,
0,B,[S],0,3,0,0,["a",Yh(RU),"g",Yi(Qm),"bj",Yi(GT)],K0,0,V,[],0,0,0,0,["bd",Yi(Tg)],KL,0,B,[S],0,3,0,0,["a",Yh(Us),"g",Yi(Ph),"bj",Yi(LD)],KS,0,V,[],0,0,0,0,["bd",Yi(Qw)],E3,0,B,[CN],3,3,0,0,0,BX,0,Cg,[E3],1,3,0,0,["a",Yh(DA)],DB,0,BX,[],0,0,0,0,["kQ",Yi(Ia),"gF",Yh(Py)],IU,0,DB,[],4,0,0,0,["co",Yi(PG),"t",Yh(RX)],Lv,0,B,[S],0,3,0,0,["a",Yh(SA),"g",Yi(OC),"bj",Yi(Im)],Lf,0,B,[S],0,3,0,0,["a",Yh(T7),"g",Yi(Sf),"bo",Yi(F9)],Lx,0,B,[S],0,3,0,0,["a",Yh(MU),"g",Yi(Pb),"bj",Yi(Jn)],KB,0,Bo,[],0,3,0,0,["k",Yi(OV)],Le,
0,B,[S],0,3,0,0,["a",Yh(PY),"g",Yi(Mk),"bo",Yi(H4)],Ly,0,B,[S],0,3,0,0,["a",Yh(Qr),"g",Yi(Ta),"bo",Yi(Il)],GE,0,B,[S],0,3,0,0,["a",Yh(SB),"g",Yi(LP),"bo",Yi(HT)],Ld,0,B,[S],0,3,0,0,["a",Yh(UQ),"g",Yi(Q6),"bj",Yi(Hz)],Lw,0,B,[S],0,3,0,0,["a",Yh(RK),"g",Yi(R1),"bo",Yi(Gg)],KO,0,B,[S],0,3,0,0,["a",Yh(Oo),"g",Yi(T5),"bo",Yi(KH)]]);
$rt_metadata([GC,0,B,[S],0,3,0,0,["a",Yh(Mz),"g",Yi(Qc),"bo",Yi(G8)],H1,0,B,[],0,3,0,0,0,Em,0,B,[],3,3,0,0,0,Ea,0,B,[],3,3,0,0,0,JO,0,B,[Em,Ea],0,3,0,0,["d",Yh(LJ),"fQ",Yh(Og),"ik",Yh(Ue),"gd",Yh(L3)],K_,0,Bm,[],1,3,0,0,0,Ca,0,X,[Bb],0,3,0,IQ,["jg",Yi(EA),"hT",Yi(Jw),"D",Yi(M_)],Hd,0,B,[],0,3,0,0,0,EN,0,B,[],4,3,0,0,0,F3,0,B,[Da],0,3,0,0,["a",Yh(Ut),"fL",Yh(Px),"iQ",Yh(Ka)],J6,0,Cv,[BV],0,0,0,0,["co",Yi(SL),"s",Yh(Ts)],CR,"WebAssemblyProvider",5,B,[],3,3,0,0,["iM",Yj(Uh)],Lc,0,B,[S],0,3,0,0,["a",Yh(PO),"g",
Yi(NA),"bj",Yi(J3)],IE,0,B,[E7],0,0,0,0,["a",Yh(Rk)],DU,0,BQ,[CO],1,0,0,0,["gM",Yi(P8),"a",Yh(H6)],IG,0,DU,[],0,0,0,0,["gM",Yi(P8),"a",Yh(Nk)],ID,0,B,[BV],0,0,0,0,["a",Yh(SO)],BS,0,B,[Bb],0,3,0,Bk,0,DR,0,BX,[],1,0,0,0,["a",Yh(J4)],IH,0,DR,[],0,0,0,0,["a",Yh(MV)],IF,0,Dt,[],0,0,0,0,["a",Yh(LK)],K9,0,B,[Dx],0,3,0,0,["ju",Yi(SJ),"dP",Yh(R9)],GY,0,B,[Bf],1,3,0,0,0,IL,0,P,[],0,0,0,0,["cq",Yi(No)],Dh,0,Cx,[Bb,C2,C5,FV],1,3,0,0,["hu",Yk(F5),"iE",Yk(Nr),"ey",Yi(LO)],DK,0,Dh,[],1,0,0,0,["hu",Yk(Id)],Ky,0,DK,[],0,0,0,
0,["j_",function(b,c,d,e,f,g){UH(this,b,c,d,e,f,g);},"iJ",Yi(NW)],IP,0,P,[],0,0,0,0,["cq",Yi(MZ)],LF,0,B,[S],0,3,0,0,["a",Yh(LZ),"g",Yi(N_),"kR",Yi(Iz)],HR,0,B,[],4,3,0,0,0,IN,0,P,[],0,0,0,0,["cq",Yi(Q3)],CD,0,B,[Bb,Bv],1,3,0,0,["c4",Yj(Fz),"jo",Yh(Bl)],Bt,0,CD,[],12,3,0,Z,0,Jr,0,B,[],4,3,0,0,0,IO,0,P,[],0,0,0,0,["cq",Yi(RG)],IJ,0,V,[],0,0,0,0,["cq",Yi(R0)],Ew,0,B,[],0,3,0,0,0,Js,0,B,[Bf],1,3,0,0,0,Ep,0,B,[],4,3,0,0,0,Fu,0,B,[DV],3,3,0,0,["bi",Yi(N3)],EY,0,B,[Fu,Dm],3,3,0,0,["bi",Yi(N3),"i$",Yi(OQ)],Hc,0,Ce,
[EY,B0],4,3,0,0,["bi",Yi(N3),"i$",Yi(OQ),"a",Yh(RA),"d4",Yh(Ng),"du",Yi(O2),"bv",Yi(UU),"ga",Yj(PP)],BR,0,B,[],4,3,0,FW,0,Gk,0,BP,[],0,0,0,0,["a",Yh(Rl)],Gj,0,BP,[],0,0,0,0,["a",Yh(O7)],B7,0,X,[Bb],0,3,0,Fn,["hT",Yi(J2),"bx",Yh(Uz),"N",Yh(Pu),"d",Yh(Nx),"D",Yi(US),"fR",Yh(Nf),"fA",Yh(O3)],Gi,0,BP,[],0,0,0,0,["a",Yh(S_)],JN,0,B,[],4,0,0,0,0,D3,0,BK,[],0,3,0,0,["a",Yh(F2),"f3",Yi(QJ),"eq",Yi(S8)],Go,0,D3,[],0,0,0,0,["a",Yh(S7)]]);
$rt_metadata([Gl,0,V,[],0,0,0,0,["a",Yh(Ps)],J0,0,By,[],0,0,0,0,["f8",Yj(Uo)],JX,0,By,[],0,0,0,0,["f8",Yj(UP)],K6,0,BX,[],0,0,0,0,["co",Yi(PV),"r",Yh(Tl),"t",Yh(S9)],JZ,0,By,[],0,0,0,0,["f8",Yj(UO)],JW,0,O,[],0,3,0,0,["a",Yh(LN)],Br,0,B,[],0,3,0,0,["a",Yh(C4)],Kf,0,Br,[],0,0,0,0,["a",Yh(O$)],Kc,0,Br,[],0,0,0,0,["a",Yh(Q5)],JA,0,Br,[],0,0,0,0,["a",Yh(L0)],Kd,0,Br,[],0,0,0,0,["a",Yh(Tv)],BU,0,B,[Bv,Bb,C5],0,3,0,Lr,["iI",Yi(GJ),"kE",Yk(LG),"o",Yi(NY),"c",Yh(RF),"ci",Yh(TO),"hR",Yi(Sv),"eD",Yi(QS),"ed",Yj(NE),"cL",
Yi(QQ),"iS",Yj(N5),"iH",Yi(S$),"bL",Yj(Mv),"he",Yi(Th),"d",Yh(OW),"i4",Yh(TS),"D",Yi(Sw),"eh",Yi(SM),"b2",Yh(NP),"gg",Yi(Ru)],LH,0,O,[],0,3,0,0,["a",Yh(Ok)],D6,0,C$,[],1,3,0,0,["g5",Yk(H2),"hm",Yj(N7)],Iu,0,D6,[],0,3,0,0,["jC",Yi(QT),"gN",function(b,c,d,e,f,g,h){return Ul(this,b,c,d,e,f,g,h);}],E4,0,B,[],32,0,0,XQ,0,I9,0,B,[CB],0,3,0,0,["a",Yh(Rt)],Bz,0,B,[],4,3,0,Bn,0,I$,0,B,[CB],0,3,0,0,["a",Yh(Qf),"fF",Yj(PJ)],EI,0,Cu,[],0,3,0,0,["a",Yh(NH),"k",Yi(UF)],Hg,0,P,[],0,0,0,0,["jA",Yi(Pi)],FO,0,Dj,[],0,3,0,Rv,
["h4",Yh(Td)],ET,0,B,[],3,3,0,0,0,LB,0,B,[ET],4,0,0,0,["dw",Yi(P3),"gI",Yi(Oa),"d1",Yj(Pt),"js",Yj(Kj)],CK,0,B,[],4,3,0,0,0,Fj,0,B,[],0,3,0,Cp,["hg",Yk(Io),"cW",Yi(TI)],GI,0,BC,[],0,3,0,0,["a",Yh(QV),"k",Yi(Oe)],D1,0,B,[],3,3,0,0,0,Fx,0,B,[D1],3,3,0,0,0,Gc,0,O,[],0,3,0,0,["k",Yi(Q$),"a",Yh(Pm)],Ko,0,B,[FC],0,0,0,0,["kv",Yi(S3),"bi",Yi(T6),"hd",Yi(TL)],B8,0,B,[],0,3,0,0,["a",Yh(Fg)],Iv,0,B8,[],0,0,0,0,["jW",Yl(UK)],H$,0,B,[],0,0,0,0,["a",Yh(UG)],EW,0,B,[CR],4,3,0,0,["iM",Yj(Uh),"a",Yh(Uk),"hO",Yh(MF),"ir",Yi(R7)],Kv,
0,B,[],4,3,0,0,0,Eu,0,X,[Bb],0,3,0,SZ,["jp",Yi(I3)],Di,0,B,[D1],0,0,0,0,["hL",Yj(Lh),"gf",Yi(SE)],HN,0,Di,[Fx],4,0,0,0,["hL",Yj(SS),"iP",Yi(Re)],Fq,0,B,[],0,3,0,EX,["k",Yi(GM),"g4",Yi(MR),"iL",Yj(Tb)],Eg,0,B,[Bv],0,3,0,0,["kC",Yj(TC),"fD",Yh(O0),"cR",Yh(PT),"gk",Yh(Pj)],Cc,0,B,[],0,3,0,BG,0,E9,0,Cn,[CZ],4,0,0,0,["gV",Yi(MQ),"hQ",Yi(SC),"gD",Yi(Q8),"ec",Yh(Md),"h5",Yh(Q4),"hx",Yi(MJ),"iX",Yi(Qd),"jl",Yi(Oc),"ka",Yh(Fl),"jF",Yi(HY),"r",Yh(Nj),"cV",Yi(ML)],Jt,0,Ck,[],0,0,0,0,["gl",Yl(UD)],Kg,0,O,[],0,3,0,0,["a",
Yh(RI)],Jq,0,B,[],4,3,0,0,0,Ju,0,Ck,[],0,0,0,0,["gl",Yl(SY)],HQ,0,B,[],4,3,0,0,0,DM,0,B,[],0,3,0,Bs,["jH",Yj(Ig),"gn",Yh(MN),"c1",Yh(Sc),"iq",Yh(Uj),"h3",Yh(Sg),"fE",Yh(St),"c",Yh(Rh)],Dz,0,B,[],4,3,0,En,0]);
$rt_metadata([Ib,0,B8,[],0,0,0,0,["jB",Yl(OU)],La,0,DP,[],4,3,0,0,["bf",Yi(Ot),"gV",Yi(MQ),"hQ",Yi(SC),"gD",Yi(Q8),"ec",Yh(Md),"h5",Yh(Q4),"hx",Yi(MJ),"iX",Yi(Qd),"dl",Yh(PN),"b8",Yi(Q1),"c7",Yi(T$),"cD",Yi(PR),"ib",Yi(RD),"fn",Yh(QR),"hH",Yi(Tr)],Kl,0,CF,[],0,3,0,0,0,F_,0,B,[Fa],0,3,0,0,["a",Yh(Nm),"f_",Yi(Te),"kD",Yi(Hk)],If,0,B,[],0,3,0,0,["iI",Yi(P7)],Ie,0,Bm,[],1,3,0,0,0,IK,0,Bm,[],1,3,0,0,0,JH,0,O,[],0,3,0,0,["a",Yh(SF)],B5,0,CD,[],12,3,0,DH,0,Iy,0,B,[],0,3,0,0,["a",Yh(LR)],J5,0,B,[B0],0,0,0,0,["jP",Yj(Ug),
"bI",Yi(RR),"b4",Yi(Rf)],GO,0,BQ,[CO],0,0,0,0,["gM",Yi(P8),"go",Yi(OX),"cY",Yi(LM),"r",Yh(NZ)],BN,0,B,[],0,3,0,RM,0,Gu,0,B,[],4,3,0,0,0]);
function $rt_array(cls,data){this.f=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","<java_object>@","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","String is null or empty","Illegal radix: ",",","null","0",".","Null pointer","JSON does not allow non-finite numbers","JSON does not allow non-finite numbers.","\"\"","\\t","\\n","\\f","\\r","000","\\u",
"\\b","main","number","object","string","boolean","BIG_ENDIAN","LITTLE_ENDIAN","Index out of bounds","Cannot instantiate any provider for service ","No null success mapper accepted","No null failure mapper accepted","No null handler accepted","Future{cause=","Future{unresolved}","Future{result=null}","Future{result=","}","(this Map)",", ","New position "," is outside of range [0;","]","classes.wasm","cy","width","height","placeIndex","frameIndex","wasm","computeLinePixelRGBs","initAndComputeLinePixelRGBs","[]",
"(this Collection)","Replacement preconditions do not hold","Action must be non-null","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ",")","OFF","SEVERE","WARNING","INFO","CONFIG","FINE","FINER","FINEST","ALL","IGNORE","REPLACE","REPORT","false","true","Light.","Sphere.","javaClass@","Light","The last char in dst ","STRING","NUMBER","BOOLEAN","OBJECT","ARRAY","NULL","UNDEFINED","Sphere","Using default built-in JSON factory which is not interoperable with the underlying platform! Be sure you haven\'t forgot to call Json.registerProvider().",
"Result is already complete","Floor","Default","Glass","Mirror","UTF-8","global","","RETURN_NULL","TRACE_AND_RETURN_NULL","THROW_EXCEPTION"]);
BU.prototype.toString=function(){return $rt_ustr(this);};
BU.prototype.valueOf=BU.prototype.toString;B.prototype.toString=function(){return $rt_ustr(OY(this));};
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
~a);};}var T=Long_add;var Xr=Long_sub;var N=Long_mul;var Bd=Long_div;var De=Long_rem;var WS=Long_or;var Bj=Long_and;var AAH=Long_xor;var Cb=Long_shl;var C6=Long_shr;var BZ=Long_shru;var XX=Long_compare;var CT=Long_eq;var AAI=Long_ne;var IZ=Long_lt;var CU=Long_le;var IB=Long_gt;var II=Long_ge;var AAJ=Long_not;var Vi=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof Error){throw result;}};this.run();};TeaVMThread.prototype.resume=function(){if($rt_currentNativeThread
!==null){throw new Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending(){var thread=$rt_nativeThread();return thread
!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer()
{throw new Error("Invalid recorded state");}main=$rt_mainStarter(Wb);
main.javaException=$rt_javaException;
(function(){var c;c=JJ.prototype;c.getLength=c.kf;c.get=c.kp;c=GV.prototype;c.handleEvent=c.jz;c=HL.prototype;c.apply=c.j3;c=HK.prototype;c.handle=c.fx;c=HH.prototype;c.handle=c.fx;c=Gn.prototype;c.handle=c.fx;})();
})();

main()