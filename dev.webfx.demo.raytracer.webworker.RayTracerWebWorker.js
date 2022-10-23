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
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return U7(characters);}
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
var G=$rt_throw;var Dg=$rt_compare;var Yd=$rt_nullCheck;var F=$rt_cls;var U=$rt_createArray;var Bh=$rt_isInstance;var Qh=$rt_nativeThread;var WV=$rt_suspending;var W$=$rt_resuming;var Vc=$rt_invalidPointer;var D=$rt_s;var L=$rt_eraseClinit;var Ez=$rt_imul;var W=$rt_wrapException;var Ye=$rt_checkBounds;var Yf=$rt_checkUpperBound;var Yg=$rt_checkLowerBound;var Yh=$rt_wrapFunction0;var Yi=$rt_wrapFunction1;var Yj=$rt_wrapFunction2;var Yk=$rt_wrapFunction3;var Yl=$rt_wrapFunction4;var C=$rt_classWithoutFields;var C1
=$rt_createArrayFromData;var Ym=$rt_createCharArrayFromData;var Yn=$rt_createByteArrayFromData;var Yo=$rt_createShortArrayFromData;var VS=$rt_createIntArrayFromData;var Yp=$rt_createBooleanArrayFromData;var Yq=$rt_createFloatArrayFromData;var Yr=$rt_createDoubleArrayFromData;var O6=$rt_createLongArrayFromData;var Ys=$rt_createBooleanArray;var DC=$rt_createByteArray;var Yt=$rt_createShortArray;var BI=$rt_createCharArray;var E1=$rt_createIntArray;var Xa=$rt_createLongArray;var Yu=$rt_createFloatArray;var Yv=$rt_createDoubleArray;var Dg
=$rt_compare;var Yw=$rt_castToClass;var Yx=$rt_castToInterface;var Yy=Long_toNumber;var H=Long_fromInt;var Yz=Long_fromNumber;var Q=Long_create;var BL=Long_ZERO;var YA=Long_hi;var DL=Long_lo;
function B(){this.f=null;this.$id$=0;}
function P2(){var a=new B();E(a);return a;}
function DI(b){var c;if(b.f===null)D_(b);if(b.f.u===null)b.f.u=Bx();else if(b.f.u!==Bx())G(JS(D(0)));c=b.f;c.x=c.x+1|0;}
function Be(b){var c,d;if(!Cr(b)&&b.f.u===Bx()){c=b.f;d=c.x-1|0;c.x=d;if(!d)b.f.u=null;Cr(b);return;}G(P_());}
function VL(b){Sb(b,1);}
function Sb(b,c){var d,$p,$z;$p=0;if(W$()){var $T=Qh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.f===null)D_(b);if(b.f.u===null)b.f.u=Bx();if(b.f.u===Bx()){d=b.f;d.x=d.x+c|0;return;}$p=1;case 1:TZ(b,c);if(WV()){break _;}return;default:Vc();}}Qh().s(b,c,d,$p);}
function D_(b){b.f=XD();}
function TZ(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.bj=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.hf=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=X6(callback);return thread.suspend(function(){try{X0(b,c,callback);}catch($e){callback.hf($rt_exception($e));}});}
function X0(b,c,d){var e,f,g;e=Bx();if(b.f===null){D_(b);Du(e);f=b.f;f.x=f.x+c|0;d.bj(null);return;}if(b.f.u===null){b.f.u=e;Du(e);f=b.f;f.x=f.x+c|0;d.bj(null);return;}g=b.f;if(g.M===null)g.M=LV();L$(g.M,Xv(e,b,c,d));}
function VQ(b){Mx(b,1);}
function Mx(b,c){var d;if(!Cr(b)&&b.f.u===Bx()){d=b.f;d.x=d.x-c|0;if(d.x>0)return;d.u=null;if(d.M!==null&&!DH(d.M))LZ(WM(b));else Cr(b);return;}G(P_());}
function Qx(b){var c,d,e;if(!Cr(b)&&b.f.u===null){c=b.f;if(c.M!==null&&!DH(c.M)){d=c.M;e=NZ(d);c.M=null;e.dP();}return;}}
function Cr(a){var b,c;b=a.f;if(b===null)return 1;a:{b:{if(b.u===null){if(b.M!==null){c=b.M;if(!DH(c))break b;}if(b.en===null)break a;c=b.en;if(DH(c))break a;}}return 0;}KN(a);return 1;}
function KN(a){a.f=null;}
function E(a){}
function EG(a){return GY(a.constructor);}
function PM(a){return Dc(a);}
function L5(a,b){return a!==b?0:1;}
function OV(a){return (((K()).e(D(1))).e(FR(Dc(a)))).d();}
function Dc(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function Uw(a){var b,c,d;if(!Bh(a,Cp)){b=a;if(b.constructor.$meta.item===null)G(Vj());}c=L9(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function Ua(b){Qx(b);}
function MK(b,c,d,e){var f;Du(b);c.f.u=b;f=c.f;f.x=f.x+d|0;e.bj(null);}
function Bo(){var a=this;B.call(a);a.db=null;a.f3=null;a.ck=0;a.cE=0;}
function YB(a,b,c,d){var e=new Bo();HR(e,a,b,c,d);return e;}
function YC(){var a=new Bo();JV(a);return a;}
function YD(a){var b=new Bo();FC(b,a);return b;}
function YE(a){var b=new Bo();J1(b,a);return b;}
function HR(a,b,c,d,e){if(e)a.cv();a.ck=d;a.cE=e;a.db=b;a.f3=c;}
function JV(a){a.ck=1;a.cE=1;a.cv();}
function FC(a,b){a.ck=1;a.cE=1;a.cv();a.db=b;}
function J1(a,b){a.ck=1;a.cE=1;a.cv();a.f3=b;}
function Q5(a){return a;}
function PX(a){return a.db;}
var BC=C(Bo);
function YF(){var a=new BC();Dv(a);return a;}
function YG(a){var b=new BC();Ee(b,a);return b;}
function Dv(a){JV(a);}
function Ee(a,b){FC(a,b);}
var O=C(BC);
function YH(){var a=new O();Bq(a);return a;}
function Yc(a){var b=new O();D0(b,a);return b;}
function Bq(a){Dv(a);}
function D0(a,b){Ee(a,b);}
var Dx=C(O);
function G3(){var a=new Dx();HU(a);return a;}
function Cs(a){var b=new Dx();SX(b,a);return b;}
function HU(a){Bq(a);}
function SX(a,b){D0(a,b);}
function G5(){var a=this;B.call(a);a.d8=null;a.fC=null;a.e$=0;a.fN=0;}
function VN(a,b){var c=new G5();Rm(c,a,b);return c;}
function Rm(a,b,c){E(a);a.d8=b;a.fC=c;}
function Qo(a){return B9(a.d8);}
function Qz(a,b){return BY(a.fC)<b?0:1;}
function Rt(a,b){a.e$=b;}
function UT(a,b){a.fN=b;}
var Bv=C(0);
var X=C();
function B$(a){E(a);}
var Bb=C(0);
function Ct(){X.call(this);this.dF=0;}
var YI=null;var YJ=null;function BW(){BW=L(Ct);QN();}
function Rv(a){var b=new Ct();IG(b,a);return b;}
function IG(a,b){BW();B$(a);a.dF=b;}
function Ii(b,c){BW();if(!(c>=2&&c<=36))c=10;return ((Xo(20)).eh(b,c)).d();}
function FR(b){BW();return L_(b,4);}
function HA(b){BW();return Ii(b,10);}
function Ha(b,c){var d,e,f,g,h;BW();if(c>=2&&c<=36){if(b!==null&&!b.ch()){a:{d=0;e=0;switch(b.o(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.c())G(X4());while(e<b.c()){g=e+1|0;h=FZ(b.o(e));if(h<0)G(Dd((((K()).e(D(2))).e(b)).d()));if(h>=c)G(Dd((((((K()).e(D(3))).w(c)).e(D(4))).e(b)).d()));f=Ez(c,f)+h|0;if(f<0){if(g==b.c()&&f==(-2147483648)&&d)return (-2147483648);G(Dd((((K()).e(D(5))).e(b)).d()));}e=g;}if(d)f= -f|0;return f;}G(Dd(D(6)));}G(Dd((((K()).e(D(7))).w(c)).d()));}
function E8(b){BW();return Ha(b,10);}
function Bc(b){BW();if(b>=(-128)&&b<=127){G$();return YJ.data[b+128|0];}return Rv(b);}
function G$(){var b;BW();a:{if(YJ===null){YJ=U(Ct,256);b=0;while(true){if(b>=YJ.data.length)break a;YJ.data[b]=Rv(b-128|0);b=b+1|0;}}}}
function NG(a){return a.dF;}
function SH(a){return HA(a.dF);}
function G9(b){var c,d,e;BW();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function QN(){YI=F($rt_intcls());}
var I1=C(BC);
function Vj(){var a=new I1();Tn(a);return a;}
function Tn(a){Dv(a);}
var Dq=C(0);
var FN=C(0);
function HP(){return VR();}
function M0(a,b){if(a.dv(b))return;G(JS(D(8)));}
var B4=C();
var YK=null;var YL=null;var YM=null;var YN=null;var YO=null;function PO(){PO=L(B4);Ty();}
function Ty(){YK=VS([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);YL=O6([H(1),H(10),H(100),H(1000),H(10000),H(100000),H(1000000),H(10000000),H(100000000),H(1000000000),Q(1410065408, 2),Q(1215752192, 23),Q(3567587328, 232),Q(1316134912, 2328),Q(276447232, 23283),Q(2764472320, 232830),Q(1874919424, 2328306),Q(1569325056, 23283064),Q(2808348672, 232830643)]);YM=O6([H(1),H(10),H(100),H(10000),H(100000000),Q(1874919424, 2328306)]);YN=Vv();YO=W0();}
var Dp=C(0);
function Qg(a,b){return b;}
function OY(a,b){if(b===null)return null;if(Bh(b,C3))return a.iH(b);if(!Bh(b,CR))return a.c7(b);return a.ib(b);}
function PZ(a,b){return b.bv();}
function L4(a,b){return b.bv();}
var FH=C(0);
var E3=C(0);
function Ti(a){return (E7(a.bv(),a,K())).d();}
function Rb(b,c){var d,e,f,g,h;c.j(123);d=1;e=b.fB();f=0;g=e.r();while(f<g){h=e.hz(f);if(!d)c.j(44);Hu(h,c);c.j(58);E7(b.cH(h),b,c);d=0;f=f+1|0;}return c.j(125);}
function UC(b,c){return (Oa(b,D(9),c.j(91))).j(93);}
function Oa(b,c,d){var e,f;e=b.r();f=0;while(f<e){if(f>0)d.e(c);E7(b.cU(f),b,d);f=f+1|0;}return d;}
function E7(b,c,d){Xr();switch(YP.data[Bl(c.cr(b))]){case 1:return d.e(D(10));case 2:return Rb(c.bK(b),d);case 3:return UC(c.dc(b),d);case 4:return d.e(M2(c.bf(b)));case 5:return d.U(c.bf(b));case 6:return Hu(c.bf(b),d);default:}return d;}
function OO(b){if(b.cL(46)>0&&b.cL(101)<0&&b.cL(69)<0){while(b.eF(D(11))){b=b.bN(0,b.c()-1|0);}if(b.eF(D(12)))b=b.bN(0,b.c()-1|0);}return b;}
function M2(b){if(b!==null){Sr(b);return OO(b.d());}G(Cg(D(13)));}
function Sr(b){var c;a:{b:{if(b!==null){if(b instanceof B7){if((PD(0.0)).D(b))break b;c=b;if(!c.fD()&&!c.fU())break b;G(Cg(D(14)));}if(b instanceof Ca&&!(VU(0.0)).D(b)){c=b;if(c.fD())break a;if(c.fU())break a;}}}return;}G(Cg(D(15)));}
function Hu(b,c){var d,e,f,g,h,i,j;if(QZ(b))return c.e(D(16));d=0;e=b.c();c.j(34);f=0;while(f<e){a:{g=b.o(f);switch(g){case 8:break;case 9:c.e(D(17));break a;case 10:c.e(D(18));break a;case 12:c.e(D(19));break a;case 13:c.e(D(20));break a;case 34:case 92:c.j(92);c.j(g);break a;case 47:if(d==60)c.j(92);c.j(g);break a;default:if(g>=32){c.j(g);break a;}h=FR(g);i=K();Y(Y(i,D(21)),h);j=Bg(i);(c.e(D(22))).e(j.hg(j.c()-4|0));break a;}c.e(D(23));}f=f+1|0;d=g;}return c.j(34);}
var CS=C(0);
function UF(a){return a.bK(a.dj());}
var CG=C(0);
function FP(){X.call(this);this.dU=BL;}
var YQ=null;function Jc(){Jc=L(FP);Se();}
function Xi(a){var b=new FP();I8(b,a);return b;}
function I8(a,b){Jc();B$(a);a.dU=b;}
function Ev(b){Jc();return Xi(b);}
function Mv(a){return DL(a.dU);}
function GT(b){Jc();return ((K()).iw(b)).d();}
function Rp(a){return GT(a.dU);}
function DP(b,c){return Long_udiv(b, c);}
function GR(b,c){return Long_urem(b, c);}
function Se(){YQ=F($rt_longcls());}
var B2=C(0);
var ED=C(0);
function B3(){var a=this;B.call(a);a.fK=BL;a.gq=BL;a.hj=null;a.h3=null;a.gP=0;a.i1=null;}
var YR=null;var YS=null;var YT=0;var YU=0;var YV=null;function FG(){FG=L(B3);N1();}
function U0(a){var b=new B3();HD(b,a);return b;}
function YW(a,b){var c=new B3();E4(c,a,b);return c;}
function HD(a,b){FG();E4(a,null,b);}
function E4(a,b,c){var d;FG();E(a);a.hj=P2();a.gP=1;a.h3=c;a.i1=b;d=YT;YT=d+1|0;a.fK=H(d);}
function Du(b){FG();if(YS!==b)YS=b;YS.gq=I0();}
function Bx(){FG();return YS;}
function LT(a){return a.fK;}
function N1(){YR=U0(D(24));YS=YR;YT=1;YU=1;YV=WX();}
var Bf=C(0);
function JD(b){return b;}
var EY=C(0);
var JJ=C();
function Uj(a,b){return a.jV(b);}
function O$(a){return a.jS();}
var Da=C(0);
var Hw=C();
function XW(){var a=new Hw();QP(a);return a;}
function QP(a){E(a);}
function Od(a){return Iu(a);}
function Iu(a){return UP();}
var FU=C();
var YX=null;function U3(){U3=L(FU);RF();}
function RF(){YX=E1((E9()).data.length);YX.data[Bl(YY)]=1;YX.data[Bl(YZ)]=2;YX.data[Bl(Y0)]=3;}
var GA=C();
function MO(b){return b;}
function DH(b){return b.length?0:1;}
function L$(b,c){var d;d=MO(c);b.push(d);}
function NZ(b){return b.shift();}
function Jj(){B.call(this);this.fv=null;}
function Xk(a){var b=new Jj();Qp(b,a);return b;}
function Qp(a,b){E(a);a.fv=b;}
function RL(a,b){Jm(a,b);}
function Jm(a,b){HY(a.fv,b);}
var Fe=C(0);
function Jf(){B.call(this);this.eJ=null;}
function X7(a){var b=new Jf();Ue(b,a);return b;}
function Ue(a,b){E(a);a.eJ=b;}
function Oz(a,b){GP(a.eJ,b);}
function BK(){var a=this;B.call(a);a.n=null;a.S=null;}
function FE(a){E(a);}
var E$=C(0);
var Fk=C(0);
function QB(b){return Xg(b);}
function QU(a,b){return a.fh(b,Wl());}
var Dh=C(0);
var Ck=C();
function E2(a){E(a);}
function EP(a,b,c){c.bI(b);}
function DO(a,b,c){c.b3(b);}
function Is(a,b,c){var d;EQ(b,D(25));EQ(c,D(26));d=U5(b,c);a.bF(d);return d;}
function Ce(){var a=this;Ck.call(a);a.B=null;a.Q=null;}
var Y1=null;function Db(){Db=L(Ce);Tr();}
function Y2(){var a=new Ce();DY(a);return a;}
function DY(a){Db();E2(a);}
function Td(a){var b,c;DI(a);try{if(a.B instanceof CH)b=null;else{c=a.B;Db();b=c!==Y1?a.B:null;}return b;}finally{Be(a);}}
function N2(a,b){var c;EQ(b,D(27));c=!Bh(b,B0)?V8(a,b):b;a.bF(c);return a;}
function HV(a,b){var c,d,e,$$je;DI(a);a:{b:{try{c=a.B;if(c===null)break b;Be(a);}catch($$e){$$je=W($$e);d=$$je;break a;}if(c instanceof CH)DO(a,c.dq,b);else{Db();if(c===Y1)c=null;EP(a,c,b);}return;}c:{try{if(a.Q===null){a.Q=b;break c;}if(a.Q instanceof Fd)e=a.Q;else{e=XE();e.bx(a.Q);a.Q=e;}e.bx(b);break c;}catch($$e){$$je=W($$e);d=$$je;break a;}}try{Be(a);}catch($$e){$$je=W($$e);d=$$je;break a;}return;}Be(a);G(d);}
function Gd(a,b){var c,d,$$je;DI(a);a:{b:{c:{try{if(a.B===null)break c;Be(a);}catch($$e){$$je=W($$e);c=$$je;break b;}return 0;}d:{try{if(b!==null){c=b;break d;}Db();c=Y1;break d;}catch($$e){$$je=W($$e);c=$$je;break b;}}try{a.B=c;d=a.Q;a.Q=null;Be(a);break a;}catch($$e){$$je=W($$e);c=$$je;}}Be(a);G(c);}if(d!==null)EP(a,b,d);return 1;}
function Uz(a,b){var c,d,$$je;if(b===null)b=R1(null);DI(a);a:{b:{c:{try{if(a.B===null)break c;Be(a);}catch($$e){$$je=W($$e);c=$$je;break b;}return 0;}try{a.B=VY(b);d=a.Q;a.Q=null;Be(a);break a;}catch($$e){$$je=W($$e);c=$$je;}}Be(a);G(c);}if(d!==null)DO(a,b,d);return 1;}
function SD(a){var b,c,d,$$je;DI(a);a:{b:{try{if(!(a.B instanceof CH))break b;b=a.B.dq.cR();c=K();Gg(Y(Y(c,D(28)),b),125);b=Bg(c);Be(a);}catch($$e){$$je=W($$e);b=$$je;break a;}return b;}c:{try{if(a.B!==null)break c;Be(a);}catch($$e){$$je=W($$e);b=$$je;break a;}return D(29);}d:{try{b=a.B;Db();if(b!==Y1)break d;Be(a);}catch($$e){$$je=W($$e);b=$$je;break a;}return D(30);}try{d=XV(D(31));a.iV(a.B,d);d.e(D(32));b=d.d();Be(a);}catch($$e){$$je=W($$e);b=$$je;break a;}return b;}Be(a);G(b);}
function OE(a,b,c){c.U(b);}
function Tr(){Y1=P2();}
var DV=C(Ce);
function Ls(a){DY(a);}
var C4=C(0);
var CA=C(Bo);
function Y3(a){var b=new CA();IE(b,a);return b;}
function Y4(a){var b=new CA();Hi(b,a);return b;}
function IE(a,b){FC(a,b);}
function Hi(a,b){J1(a,b);}
var CF=C(CA);
function Y5(a){var b=new CF();Gq(b,a);return b;}
function Gq(a,b){IE(a,b);}
var C_=C(0);
function Uf(a,b,c){return Pj(C1(B,[a.c_(b),c]));}
function UW(a,b){En();return Y6.D(a.h7(b));}
function Oo(a,b){return Tj(a.c_(b));}
function Un(a,b){return Ej(a.c_(b));}
function R7(a,b,c){return Ej(a.gN(b,c));}
var CR=C(0);
function Uq(a,b){return a.bK(a.cH(b));}
function Nh(a,b){return a.bf(a.cH(b));}
var D$=C(0);
var KQ=C(Dx);
function Pk(){var a=new KQ();Rf(a);return a;}
function Rf(a){HU(a);}
function DZ(){B.call(this);this.hh=null;}
var Y7=null;var Y8=null;function Tz(){Tz=L(DZ);Uu();}
function Ql(a){var b=new DZ();F2(b,a);return b;}
function F2(a,b){Tz();E(a);a.hh=b;}
function Uu(){Y7=Ql(D(33));Y8=Ql(D(34));}
var J$=C();
function HG(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.eH.data;f=b.fV;b.fV=f+1|0;g=NX(e[f]);h=(g%2|0)!=1?0:1;c=c+Ez(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function GB(b){var c,d;c=HG(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function NX(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
var FJ=C(0);
var Eu=C(0);
var ET=C(0);
var Cz=C();
function D8(a){E(a);}
function MH(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.gX(f[c]);e=e+1|0;c=g;}}
var EL=C(Cz);
var Y9=null;function TF(){TF=L(EL);O_();}
function V3(){var a=new EL();Kv(a);return a;}
function Kv(a){TF();D8(a);}
function NP(a,b){QT(b);}
function O_(){Y9=V3();}
var Fb=C(0);
var Bm=C();
var GQ=C(Bm);
function It(){var a=this;B.call(a);a.eq=null;a.fR=null;a.dr=null;a.e9=null;a.bU=null;}
function VZ(){var a=new It();Q$(a);return a;}
function Q$(a){E(a);}
function KA(a,b,c){if(b!==null)a.eq=b;if(c!==null)a.fR=c;return a;}
function Kr(a){var b;if(a.dr===null){b=Hv(a.eq.fO());if(b.y())a.dr=b.s();}return a.dr;}
function IQ(a){var b,c;a:{if(a.bU===null){a.bU=Kr(a);if(a.e9!==null){b=a.e9.t();while(true){if(!b.y())break a;c=b.s();a.bU=c.g(a.bU);}}}}return a.bU;}
function Cy(){var a=this;B.call(a);a.b=null;a.l=0;}
function Y$(){var a=new Cy();EM(a);return a;}
function Xo(a){var b=new Cy();Et(b,a);return b;}
function Y_(a){var b=new Cy();K1(b,a);return b;}
function Za(a){var b=new Cy();Iy(b,a);return b;}
function EM(a){Et(a,16);}
function Et(a,b){E(a);a.b=BI(b);}
function K1(a,b){Iy(a,b);}
function Iy(a,b){var c;E(a);a.b=BI(b.c());c=0;while(c<a.b.data.length){a.b.data[c]=b.o(c);c=c+1|0;}a.l=b.c();}
function KD(a,b){return a.e5(a.l,b);}
function EF(a,b){return a.ct(a.l,b);}
function Fa(a,b,c){var d,e,f;if(b>=0&&b<=a.l){if(c===null)c=D(10);else if(c.ch())return a;a.bG(a.l+c.c()|0);d=a.l-1|0;while(d>=b){a.b.data[d+c.c()|0]=a.b.data[d];d=d+(-1)|0;}a.l=a.l+c.c()|0;d=0;while(d<c.c()){e=a.b.data;f=b+1|0;e[b]=c.o(d);d=d+1|0;b=f;}return a;}G(Pk());}
function Hp(a,b){return a.eh(b,10);}
function Np(a,b,c){return a.gJ(a.l,b,c);}
function Tc(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)Ba(a,b,b+1|0);else{Ba(a,b,b+2|0);f=a.b.data;g=b+1|0;f[b]=45;b=g;}a.b.data[b]=CE(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Ez(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;Ba(a,b,b+i|0);if(e)l=b;else{f=a.b.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.b.data;g=l+1|0;f[l]=CE(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function Kj(a,b){return a.ex(a.l,b);}
function Lu(a,b,c){return a.id(b,c,10);}
function Mc(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(I3(c,BL)){e=0;c=Vg(c);}a:{f=H(d);if(I3(c,f)){if(e)Ba(a,b,b+1|0);else{Ba(a,b,b+2|0);g=a.b.data;h=b+1|0;g[b]=45;b=h;}a.b.data[b]=CE(DL(c),d);}else{i=1;j=H(1);while(true){k=N(j,f);if(CW(k,j))break;if(IF(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;Ba(a,b,b+i|0);if(e)l=b;else{g=a.b.data;l=b+1|0;g[b]=45;}while(true){if(CW(j,BL))break a;g=a.b.data;h=l+1|0;g[l]=CE(DL(Bd(c,j)),d);c=De(c,j);j=Bd(j,f);l=h;}}}return a;}
function Jr(a,b){return a.d0(a.l,b);}
function IC(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=Dg(c,0.0);if(!d){Ba(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=48;e=a.b.data;f=d+1|0;e[d]=46;a.b.data[f]=48;return a;}if(!d){Ba(a,b,b+4|0);e=a.b.data;d=b+1|0;e[b]=45;e=a.b.data;f=d+1|0;e[d]=48;e=a.b.data;d=f+1|0;e[f]=46;a.b.data[d]=48;return a;}if(isNaN(c)?1:0){Ba(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=78;e=a.b.data;f=d+1|0;e[d]=97;a.b.data[f]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Ba(a,b,b+8|0);d=b;}else{Ba(a,b,b+9|0);e=a.b.data;d=b+1|0;e[b]=45;}e=a.b.data;f=d+
1|0;e[d]=73;e=a.b.data;d=f+1|0;e[f]=110;e=a.b.data;f=d+1|0;e[d]=102;e=a.b.data;d=f+1|0;e[f]=105;e=a.b.data;f=d+1|0;e[d]=110;e=a.b.data;d=f+1|0;e[f]=105;e=a.b.data;f=d+1|0;e[d]=116;a.b.data[f]=121;return a;}PO();g=YN;KH(c,g);h=g.cQ;i=g.c3;j=g.eg;k=1;l=1;if(j)l=2;m=18;n=OF(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=B_(m,k+1|0);i=0;}else{h=Bd(h,YL.data[ -i|0]);m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(!(i>(-100)&&i<100))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d=l+m|0;Ba(a,b,b+d|0);if
(!j)o=b;else{e=a.b.data;o=b+1|0;e[b]=45;}p=Q(1569325056, 23283064);q=0;while(q<m){if(CW(p,BL))r=0;else{r=DL(Bd(h,p));h=De(h,p);}e=a.b.data;d=o+1|0;e[o]=(48+r|0)&65535;k=k+(-1)|0;if(k)o=d;else{e=a.b.data;o=d+1|0;e[d]=46;}p=Bd(p,H(10));q=q+1|0;}if(i){e=a.b.data;d=o+1|0;e[o]=69;if(i>=0)f=d;else{i= -i|0;e=a.b.data;f=d+1|0;e[d]=45;}if(i>=100){e=a.b.data;d=f+1|0;e[f]=(48+(i/100|0)|0)&65535;i=i%100|0;e=a.b.data;o=d+1|0;e[d]=(48+(i/10|0)|0)&65535;}else if(i<10)o=f;else{e=a.b.data;o=f+1|0;e[f]=(48+(i/10|0)|0)&65535;}a.b.data[o]
=(48+(i%10|0)|0)&65535;}return a;}
function OF(b){var c,d,e,f;c=H(1);d=0;e=16;PO();f=YM.data.length-1|0;while(f>=0){if(CV(De(b,N(c,YM.data[f])),BL)){d=d|e;c=N(c,YM.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function K7(a,b){return a.fn(a.l,b);}
function KM(a,b,c){Ba(a,b,b+1|0);a.b.data[b]=c;return a;}
function Jd(a,b,c){return a.ct(b,c===null?D(10):c.d());}
function EH(a,b){var c;if(a.b.data.length>=b)return;c=a.b.data.length>=1073741823?2147483647:B_(b,B_(a.b.data.length*2|0,5));a.b=NH(a.b,c);}
function El(a){return Pa(a.b,0,a.l);}
function Kb(a){return a.l;}
function HE(a,b,c,d){return a.dX(a.l,b,c,d);}
function Gs(a,b,c,d,e){var f,g;if(d<=e&&e<=c.c()&&d>=0){Ba(a,b,(b+e|0)-d|0);while(d<e){f=a.b.data;g=b+1|0;f[b]=c.o(d);d=d+1|0;b=g;}return a;}G(G3());}
function JQ(a,b,c,d,e){var f,g,h,i;if(b>c)G(Cs(D(35)));while(b<c){f=d.data;g=e+1|0;h=a.b.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function JL(a,b){a.l=b;}
function Ba(a,b,c){var d,e;d=a.l-b|0;a.bG((a.l+c|0)-b|0);e=d-1|0;while(e>=0){a.b.data[c+e|0]=a.b.data[b+e|0];e=e+(-1)|0;}a.l=a.l+(c-b|0)|0;}
var C0=C(0);
var Gf=C(Cy);
function Va(a){var b=new Gf();TX(b,a);return b;}
function K(){var a=new Gf();Tv(a);return a;}
function XV(a){var b=new Gf();Mm(b,a);return b;}
function TX(a,b){Et(a,b);}
function Tv(a){EM(a);}
function Mm(a,b){K1(a,b);}
function Y(a,b){KD(a,b);return a;}
function Ml(a,b){EF(a,b);return a;}
function BA(a,b){Hp(a,b);return a;}
function R3(a,b){Kj(a,b);return a;}
function PQ(a,b){Jr(a,b);return a;}
function Gg(a,b){K7(a,b);return a;}
function SR(a,b,c,d){HE(a,b,c,d);return a;}
function Rd(a,b,c){Lu(a,b,c);return a;}
function Tl(a,b,c){IC(a,b,c);return a;}
function M8(a,b,c,d,e){Gs(a,b,c,d,e);return a;}
function T3(a,b,c){Jd(a,b,c);return a;}
function NF(a,b,c){KM(a,b,c);return a;}
function Ud(a,b,c){Fa(a,b,c);return a;}
function Um(a,b){JL(a,b);}
function QC(a,b,c,d,e){JQ(a,b,c,d,e);}
function Op(a,b,c,d,e){return a.hK(b,c,d,e);}
function Oj(a){return Kb(a);}
function Bg(a){return El(a);}
function Us(a,b){EH(a,b);}
function Mr(a,b,c){return a.hl(b,c);}
function LS(a,b,c){return a.iC(b,c);}
function Qw(a,b,c){return a.ht(b,c);}
function Pg(a,b,c){return a.hY(b,c);}
function UG(a,b,c){return a.hd(b,c);}
var FB=C();
var Zb=null;function UK(){UK=L(FB);SV();}
function Kp(b){var c,d;UK();c=Zb.cJ(b);if(c===null){d=Zb;c=VZ();d.bn(b,c);}return c;}
function Fu(b,c,d){var e,f,g,h,i,j;UK();e=Kp(b);f=KA(e,c,d);g=IQ(f);if(g!==null)return g;e=f.fR;DF();if(e!==Zc){h=b.im();i=K();Y(Y(i,D(36)),h);j=Bg(i);if(e===Zd)G(JS(j));e=Ll();Mt();e.iM(Ze,j);}return null;}
function SV(){Zb=UL();}
var JP=C(O);
function OJ(){var a=new JP();Ug(a);return a;}
function Ug(a){Bq(a);}
var He=C(CA);
function Wt(a){var b=new He();Mo(b,a);return b;}
function Mo(a,b){Hi(a,b);}
var Fv=C(0);
var CM=C(0);
function Nt(a,b,c){return a.f4(b,a.gT(c));}
function Cn(){B.call(this);this.df=null;}
function E_(a){E(a);}
function Or(a){var b,c,d;b=K();b.j(123);c=(a.fZ()).t();if(c.y()){d=c.s();b.U(d.br()!==a?d.br():D(37));b.j(61);b.U(d.bR()!==a?d.bR():D(37));}while(c.y()){b.e(D(38));d=c.s();b.U(d.br()!==a?d.br():D(37));b.j(61);b.U(d.bR()!==a?d.bR():D(37));}b.j(125);return b.d();}
var Cp=C(0);
function D4(){var a=this;Cn.call(a);a.z=0;a.h=null;a.E=0;a.f$=0.0;a.b$=0;}
function UL(){var a=new D4();IX(a);return a;}
function Zf(a){var b=new D4();Eb(b,a);return b;}
function Zg(a,b){var c=new D4();KG(c,a,b);return c;}
function R6(a,b){return U(CK,b);}
function IX(a){Eb(a,16);}
function Eb(a,b){KG(a,b,0.75);}
function Kw(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function KG(a,b,c){var d;E_(a);if(b>=0&&c>0.0){d=Kw(b);a.z=0;a.h=a.c5(d);a.f$=c;EW(a);return;}G(HH());}
function EW(a){a.b$=a.h.data.length*a.f$|0;}
function Sf(a,b){var c;c=GG(a,b);if(c===null)return null;return c.T;}
function GG(a,b){var c,d,e;if(b===null)c=C8(a);else{d=ES(b);e=d&(a.h.data.length-1|0);c=CX(a,b,e,d);}return c;}
function CX(a,b,c,d){var e,f;e=a.h.data[c];while(e!==null){if(e.cf==d){f=e.bc;if(G7(b,f))break;}e=e.L;}return e;}
function C8(a){var b;b=a.h.data[0];while(b!==null&&b.bc!==null){b=b.L;}return b;}
function MX(a,b,c){return a.dC(b,c);}
function RU(a,b,c){var d,e,f,g,h;if(b===null){d=C8(a);if(d===null){a.E=a.E+1|0;d=a.bZ(null,0,0);e=a.z+1|0;a.z=e;if(e>a.b$)a.cp();}}else{f=ES(b);g=f&(a.h.data.length-1|0);d=CX(a,b,g,f);if(d===null){a.E=a.E+1|0;d=a.bZ(b,g,f);e=a.z+1|0;a.z=e;if(e>a.b$)a.cp();}}h=d.T;d.T=c;return h;}
function O3(a,b,c,d){var e;e=WK(b,d);e.L=a.h.data[c];a.h.data[c]=e;return e;}
function RK(a,b){var c,d,e,f,g,h,i;c=Kw(!b?1:b<<1);d=a.c5(c);e=0;while(e<a.h.data.length){f=a.h.data[e];a.h.data[e]=null;while(f!==null){g=d.data;h=f.cf&(c-1|0);i=f.L;f.L=g[h];g[h]=f;f=i;}e=e+1|0;}a.h=d;EW(a);}
function Pw(a){a.hA(a.h.data.length);}
function Hx(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.h.data[0];while(e!==null){if(e.bc===null)break a;f=e.L;d=e;e=f;}}else{g=ES(b);c=g&(a.h.data.length-1|0);e=a.h.data[c];while(e!==null&&!(e.cf==g&&G7(b,e.bc))){f=e.L;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.L=e.L;else a.h.data[c]=e.L;a.E=a.E+1|0;a.z=a.z-1|0;return e;}
function Pr(a){return a.z;}
function ES(b){return b.b2();}
function G7(b,c){return b!==c&&!b.D(c)?0:1;}
function G1(){var a=this;D4.call(a);a.b5=0;a.K=null;a.q=null;}
function X_(){var a=new G1();NJ(a);return a;}
function VP(a){var b=new G1();Pi(b,a);return b;}
function NJ(a){IX(a);a.b5=0;a.K=null;}
function Pi(a,b){Eb(a,b);a.b5=0;a.K=null;}
function OC(a,b){return U(Fq,b);}
function Mh(a,b){var c,d,e,f,g;if(b===null)c=C8(a);else{d=b.b2();e=(d&2147483647)%a.h.data.length|0;c=CX(a,b,e,d);}if(c===null)return null;if(a.b5&&a.q!==c){f=c.C;g=c.v;g.C=f;if(f===null)a.K=g;else f.v=g;c.v=null;c.C=a.q;a.q.v=c;a.q=c;}return c.T;}
function T4(a,b,c,d){var e;e=Wf(b,d);e.L=a.h.data[c];a.h.data[c]=e;a.dy(e);return e;}
function Sy(a,b,c){var d;d=a.dC(b,c);if(a.ix(a.K))a.gD(a.K.bc);return d;}
function T5(a,b,c){var d,e,f,g,h,i;if(!a.z){a.K=null;a.q=null;}if(b===null){d=C8(a);if(d!==null)a.dy(d);else{a.E=a.E+1|0;e=a.z+1|0;a.z=e;if(e>a.b$)a.cp();d=a.bZ(null,0,0);}}else{f=b.b2();e=f&2147483647;g=e%a.h.data.length|0;d=CX(a,b,g,f);if(d!==null)a.dy(d);else{a.E=a.E+1|0;h=a.z+1|0;a.z=h;if(h>a.b$){a.cp();g=e%a.h.data.length|0;}d=a.bZ(b,g,f);}}i=d.T;d.T=c;return i;}
function L7(a,b){var c,d;if(a.q===b)return;if(a.K===null){a.K=b;a.q=b;return;}c=b.C;d=b.v;if(c!==null){if(d===null)return;if(a.b5){c.v=d;d.C=c;b.v=null;b.C=a.q;a.q.v=b;a.q=b;}return;}if(d===null){b.C=a.q;b.v=null;a.q.v=b;a.q=b;}else if(a.b5){a.K=d;d.C=null;b.C=a.q;b.v=null;a.q.v=b;a.q=b;}}
function RV(a){return Wg(a);}
function PK(a){if(a.df===null)a.df=Vp(a);return a.df;}
function PA(a,b){var c,d,e;c=Hx(a,b);if(c===null)return null;d=c.C;e=c.v;if(d===null)a.K=e;else d.v=e;if(e===null)a.q=d;else e.C=d;return c.T;}
function Mq(a,b){return 0;}
function Sl(b){return b.K;}
var DS=C(0);
function MJ(a,b){return MG(a.iW(b));}
var C3=C(0);
function Q9(a,b){return a.bf(a.cU(b));}
var CP=C(0);
var Ek=C(0);
var C7=C(0);
var Dm=C(0);
function T_(a){return X_();}
function Pp(a,b){if(b!==null&&!Bh(b,CM))return Xd(b);return b;}
function Mw(a,b){if(b!==null&&!Bh(b,C7))return Vi(b);return b;}
function MU(a,b){if(b===null){Z();return Zh;}if(!Bh(b,B2)&&!Bh(b,CR)){if(!Bh(b,Ch)&&!Bh(b,C3)){if(b instanceof BO){Z();return Y0;}if(b instanceof BU){Z();return YY;}if(!Jz(b)){Z();return Zi;}Z();return Y0;}Z();return Zj;}Z();return Zk;}
var DW=C();
function Im(a,b){E(a);a.hN(b);}
function Qr(a,b){return (a.fp()).cW(b);}
function MV(a){return (a.fp()).r();}
var Hr=C(Cy);
function Pt(){var a=new Hr();Sv(a);return a;}
function Sv(a){EM(a);}
function PV(a,b){EF(a,b);return a;}
function PW(a,b,c){Fa(a,b,c);return a;}
function OG(a){return El(a);}
function O0(a,b){EH(a,b);}
function Md(a,b,c){return a.ic(b,c);}
var DD=C(0);
function DR(){var a=this;B.call(a);a.e0=null;a.ha=null;a.gY=null;a.g3=null;a.iL=null;a.dd=0;a.hJ=0;}
function Zl(a,b){var c=new DR();K6(c,a,b);return c;}
function K6(a,b,c){E(a);a.e0=b.eU;a.ha=b.ft;a.gY=b.e1;a.g3=b.d7;a.iL=b.ea;a.ge(c);}
function Ov(a,b){a.hJ=b;a.dd=b;}
function Cx(){var a=this;B.call(a);a.fF=0;a.A=0;a.Y=0;a.cg=0;}
function Fg(a,b){E(a);a.cg=(-1);a.fF=b;a.Y=b;}
function CN(a){return a.A;}
function JM(a,b){if(b>=0&&b<=a.Y){a.A=b;if(b<a.cg)a.cg=0;return a;}G(Cg(((((((K()).e(D(39))).w(b)).e(D(40))).w(a.Y)).e(D(41))).d()));}
function HN(a){a.A=0;a.Y=a.fF;a.cg=(-1);return a;}
function BY(a){return a.Y-a.A|0;}
function B9(a){return a.A>=a.Y?0:1;}
var Dl=C(0);
var DJ=C(0);
function Cv(){var a=this;B.call(a);a.f9=0;a.b_=null;a.ds=null;a.gf=null;}
function Zm(a){var b=new Cv();Ei(b,a);return b;}
function Ei(a,b){E(a);a.f9=b.E;a.b_=Sl(b);a.gf=b;}
function OP(a){return a.b_===null?0:1;}
function K_(a){if(a.f9==a.gf.E)return;G(OJ());}
function FF(a){K_(a);if(!a.y())G(Qb());a.ds=a.b_;a.b_=a.b_.v;}
var BV=C(0);
var JG=C(Cv);
function Xy(a){var b=new JG();Q4(b,a);return b;}
function Q4(a,b){Ei(a,b);}
function Ow(a){FF(a);return a.ds;}
function SP(a){return a.h0();}
var Eo=C(0);
function Hj(){var a=this;B.call(a);a.dZ=null;a.cG=null;}
function XY(a){var b=new Hj();LX(b,a);return b;}
function LX(a,b){E(a);a.cG=Pt();a.dZ=b;}
function Q3(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;d=HP();e=G6();f=c.length;g=0;while(g<f){h=c[g];i=e.i2(h.hM());if(i===null){j=h.hM();i=G6();e.hD(j,i);}k=WY(h);(i.bv())[$rt_ustr(h.j0())]=CI(k,"apply");g=g+1|0;}j=a.dZ;l=e.bv();m=X5(d);n=W4(a);Mi(j,l,CI(m,"handle"),CI(n,"handle"));return d.ga();}
function Lg(a,b){if(b!=10)a.cG.gx($rt_str(String.fromCharCode(b)));else{(HI()).e7(a.cG.d());a.cG=Pt();}}
function Mb(b,c){b.bj(V1(c));}
function MM(b,c,d){(b.kT()).jh(c,d);}
function Mi(b,c,d,e){(WebAssembly.instantiate(b,Object.assign(c,{teavm:{currentTimeMillis:function(){return (new Date()).getTime();},isnan:isNaN,teavm_getNaN:function(){return NaN;},isinf:function(n){return !isFinite(n);},isfinite:isFinite,putwchar:e,towlower:function(code){return ((String.fromCharCode(code)).toLowerCase()).charCodeAt(0);},towupper:function(code){return ((String.fromCharCode(code)).toUpperCase()).charCodeAt(0);},getNativeOffset:function(instant){return (new Date(instant)).getTimezoneOffset();},
logString:console.log,logInt:console.log,logOutOfMemory:function(){console.log("Out of memory");}},teavmMath:{sqrt:Math.sqrt,pow:Math.pow,sin:Math.sin,cos:Math.cos}}))).then(function(instance){return d(instance);});}
function DG(){B.call(this);this.dk=null;}
function Zn(){var a=new DG();F1(a);return a;}
function F1(a){E(a);}
function GU(a,b){a.dk=b;}
function Rw(a,b){a.dk.cX(b);}
function P4(a,b){a.dk.c4(b);}
function Ds(){DG.call(this);this.eu=null;}
function Jo(a){F1(a);}
function NK(a,b){a.eu=b;GU(a,b);}
function HT(a,b){a.eR(b);}
function Tu(a,b){return a.eu.dT(b);}
function Lx(){var a=this;Ds.call(a);a.bS=0;a.dn=0;a.dt=0;a.dE=0;a.cC=null;a.eE=0;a.b1=null;a.cN=null;a.eK=0;}
function W2(){var a=new Lx();QA(a);return a;}
function QA(a){Jo(a);}
function Ub(a){var b;if(UI()){b=NS(D(42),U(Fs,0));b.h_(Xk(a));}a.c4(X7(a));}
function GP(a,b){var c,d,e,f,g,h,i,j;c=Sh(b);d=(c.dJ(D(43),Bc(0))).N();e=c.dQ(D(44));f=e===null?0:1;if(f){a.bS=(c.dQ(D(44))).N();a.dn=(c.dQ(D(45))).N();a.dt=(c.dJ(D(46),Bc(0))).N();a.dE=(c.dJ(D(47),Bc(0))).N();a.eE=c.i0(D(48));}if(a.eE&&a.b1!==null){if(!f&&a.eK){g=a.b1;h=U(B,1);h.data[0]=Bc(d);i=g.d1(D(49),h);}else{i=a.b1.d1(D(50),C1(B,[Bc(d),Bc(a.bS),Bc(a.dn),Bc(a.dt),Bc(a.dE)]));a.eK=1;}j=i.N();a.cN.ge(j);a.cC=a.cN.iO(3*a.bS|0);}else{if(f)NL(a.bS,a.dn,a.dt,a.dE);a.cC=TV(a.bS,null);Sn(d,a.cC);}a.cX(a.dT(a.cC));}
function HY(a,b){a.b1=b.hO();a.cN=a.b1.gr(0);}
var Ea=C(0);
function D5(){var a=this;B.call(a);a.bc=null;a.T=null;}
function Zo(a,b){var c=new D5();Lq(c,a,b);return c;}
function Lq(a,b,c){E(a);a.bc=b;a.T=c;}
function S2(a){return a.bc;}
function T0(a){return a.T;}
function CK(){var a=this;D5.call(a);a.cf=0;a.L=null;}
function WK(a,b){var c=new CK();HF(c,a,b);return c;}
function HF(a,b,c){Lq(a,b,null);a.cf=c;}
function Fq(){var a=this;CK.call(a);a.v=null;a.C=null;}
function Wf(a,b){var c=new Fq();RR(c,a,b);return c;}
function RR(a,b,c){HF(a,b,c);a.v=null;a.C=null;}
function H9(){var a=this;B.call(a);a.F=0.0;a.G=0.0;a.H=0.0;}
function CC(a,b,c){var d=new H9();Re(d,a,b,c);return d;}
function Re(a,b,c,d){E(a);a.F=b;a.G=c;a.H=d;}
function M(b,c,d){return CC(b,c,d);}
function BF(b){var c,d;c=GV(b);d=c===0.0?Infinity:1.0/c;return Bi(d,b);}
function Bi(b,c){return CC(c.F*b,c.G*b,c.H*b);}
function Cd(b,c){return CC(b.F-c.F,b.G-c.G,b.H-c.H);}
function CZ(b,c){return CC(b.F+c.F,b.G+c.G,b.H+c.H);}
function BB(b,c){return b.F*c.F+b.G*c.G+b.H*c.H;}
function Dr(b,c){return CC(b.G*c.H-b.H*c.G,b.H*c.F-b.F*c.H,b.F*c.G-b.G*c.F);}
function GV(b){return FL(BB(b,b));}
var Cw=C(CF);
function Zp(a){var b=new Cw();Ft(b,a);return b;}
function Ft(a,b){Gq(a,b);}
var JR=C(Cw);
function Zq(a){var b=new JR();Pl(b,a);return b;}
function Pl(a,b){Ft(a,b);}
var ER=C(BC);
var EE=C(0);
var EC=C(0);
var CB=C(0);
function Mg(b){return Ws(b);}
function Ur(b,c,d){return Lr(b.f_(c),b.f_(d));}
var Hf=C();
function Xl(){var a=new Hf();Oc(a);return a;}
function Oc(a){E(a);}
function GZ(){var a=this;B.call(a);a.cz=0;a.fw=0;a.fx=0;a.d9=0;a.bT=null;}
function VA(a){var b=new GZ();Ot(b,a);return b;}
function Ot(a,b){a.bT=b;E(a);a.fw=a.bT.cs;a.fx=a.bT.r();a.d9=(-1);}
function MT(a){return a.cz>=a.fx?0:1;}
function RN(a){var b,c;H8(a);a.d9=a.cz;b=a.bT;c=a.cz;a.cz=c+1|0;return b.cW(c);}
function H8(a){if(a.fw>=a.bT.cs)return;G(OJ());}
var Dt=C(Cn);
function JT(a){E_(a);}
var E5=C();
var YP=null;function Xr(){Xr=L(E5);Ma();}
function Ma(){YP=E1((E9()).data.length);YP.data[Bl(Zh)]=1;YP.data[Bl(Zk)]=2;YP.data[Bl(Zj)]=3;YP.data[Bl(Y0)]=4;YP.data[Bl(YZ)]=5;YP.data[Bl(YY)]=6;}
var DU=C(O);
function W3(){var a=new DU();F_(a);return a;}
function F_(a){Bq(a);}
var Lm=C(DU);
function U4(){var a=new Lm();TD(a);return a;}
function TD(a){F_(a);}
var GK=C();
function HX(b,c){if(b===null)G(V0());if(b===F($rt_voidcls()))G(HH());if(c<0)G(Xf());return SY(b.fT(),c);}
function SY(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var E6=C(0);
var I5=C(Bm);
function I4(){var a=this;B.call(a);a.cI=0;a.cB=null;}
function V_(a){var b=new I4();N7(b,a);return b;}
function N7(a,b){a.cB=b;E(a);}
function Tm(a){return a.cI>=(FM(a.cB)).data.length?0:1;}
function NV(a){var b,c;if(a.cI==(FM(a.cB)).data.length)G(Qb());b=(FM(a.cB)).data;c=a.cI;a.cI=c+1|0;return b[c];}
function Hk(){var a=this;B.call(a);a.cQ=BL;a.c3=0;a.eg=0;}
function Vv(){var a=new Hk();OK(a);return a;}
function OK(a){E(a);}
var Iw=C();
var G_=C(Cw);
function Zr(a){var b=new G_();O2(b,a);return b;}
function O2(a,b){Ft(a,b);}
var DQ=C(0);
var CO=C(0);
var Cf=C();
function Fx(a){E(a);}
function RH(a){var b,c,d,e,f;b=U(B,a.r());c=0;d=a.t();while(d.y()){e=b.data;f=c+1|0;e[c]=d.s();c=f;}return b;}
function QJ(a,b){var c,d,e,f;c=b.data;d=a.r();e=c.length;if(e<d)b=HX((EG(b)).gd(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.t();while(f.y()){c=b.data;e=d+1|0;c[d]=f.s();d=e;}return b;}
var Iz=C();
function L_(b,c){var d,e,f,g,h,i,j,k;if(!b)return D(11);d=1<<c;e=d-1|0;f=(((32-G9(b)|0)+c|0)-1|0)/c|0;g=BI(f);h=Ez(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=CE(b>>>h&e,d);h=h-c|0;i=k;}return U7(g);}
function FS(){X.call(this);this.iY=0;}
var Zs=null;function RI(){RI=L(FS);OD();}
function XO(a){var b=new FS();HK(b,a);return b;}
function HK(a,b){RI();B$(a);a.iY=b;}
function Ge(b){RI();return XO(b);}
function OD(){Zs=F($rt_shortcls());}
var Es=C(0);
var Lo=C();
function WX(){var a=new Lo();Ol(a);return a;}
function Ol(a){E(a);}
var FW=C(0);
var Hq=C();
function Le(){var b;b=XW();DF();return Fu(F(CJ),b,Zc);}
function UI(){var b;b=Le();return b!==null&&b.hS()?1:0;}
function NS(b,c){return (Le()).i9(b,c);}
function UP(){return GL(F(CJ));}
var H_=C();
function CI(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Cl(){var a=this;B.call(a);a.dH=null;a.c0=null;a.dA=null;a.cZ=null;}
function Zt(){var a=new Cl();FQ(a);return a;}
function FQ(a){E(a);}
function I2(b,c){var d,e,f,g,h,i,j,k,l;d=Cd(b,c);e=BF(d);f=CC(0.0,(-1.0),0.0);g=Dr(e,f);h=BF(g);i=Bi(2.0,h);j=Dr(e,i);k=BF(j);l=Bi(2.0,k);return WE(c,e,l,i);}
function F0(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=e/d;g=Cd(b,c);h=BF(g);i=CC(0.0,(-1.0),0.0);j=Dr(h,i);k=BF(j);l=Bi(2.0,k);m=Dr(h,l);n=BF(m);o=Bi(2.0*f,n);return Wo(c,h,o,l);}
var Dw=C(0);
var B0=C(0);
function Gz(){var a=this;DV.call(a);a.d$=null;a.fL=null;}
function U5(a,b){var c=new Gz();PP(c,a,b);return c;}
function PP(a,b,c){Ls(a);a.d$=b;a.fL=c;}
function Rk(a,b){var c,d,$$je;a:{try{c=a.d$.g(b);break a;}catch($$e){$$je=W($$e);if($$je instanceof Bo){d=$$je;}else{throw $$e;}}a.cK(d);return;}c.bF(EV(a));}
function OM(a,b){var c,d,$$je;a:{try{c=a.fL.g(b);break a;}catch($$e){$$je=W($$e);if($$je instanceof Bo){d=$$je;}else{throw $$e;}}a.cK(d);return;}c.bF(EV(a));}
function EV(a){return Wp(a);}
function HO(){B.call(this);this.fS=null;}
function Vd(a){var b=new HO();RA(b,a);return b;}
function RA(a,b){E(a);a.fS=b;}
function Hv(a){return V_(a);}
function GL(b){return Vd(Sk(b.fT()));}
function Sk(b){var c;c=MD(b);if(c===null)c=U(B,0);return c;}
function MD(b){if (!HO.$$services$$) {HO.$$services$$ = true;CS.$$serviceList$$ = [[FT, NW]];CJ.$$serviceList$$ = [[EK, US]];}var cls = b;if (!cls.$$serviceList$$) {return $rt_createArray($rt_objcls(), 0);}var result = $rt_createArray($rt_objcls(), cls.$$serviceList$$.length);for (var i = 0; i < result.data.length; ++i) {var serviceDesc = cls.$$serviceList$$[i];result.data[i] = new serviceDesc[0]();serviceDesc[1](result.data[i]);}return result;}
function FM(b){return b.fS;}
var HL=C();
function Tw(b){var c,d,e,f,g,h,i,j,k;c=Wz(b.i4());d=HG(c);e=E1(d*2|0);f=0;g=0;h=0;i=0;while(i<d){j=e.data;g=g+GB(c)|0;h=h+GB(c)|0;k=f+1|0;j[f]=g;f=k+1|0;j[k]=h;i=i+1|0;}return e;}
function BP(){var a=this;B.call(a);a.cd=null;a.by=null;a.cl=null;}
function DE(a){E(a);}
function Gr(){var a=this;B.call(a);a.e2=null;a.e3=null;a.eY=0;a.eZ=null;}
function Xv(a,b,c,d){var e=new Gr();Rq(e,a,b,c,d);return e;}
function Rq(a,b,c,d,e){E(a);a.e2=b;a.e3=c;a.eY=d;a.eZ=e;}
function Th(a){MK(a.e2,a.e3,a.eY,a.eZ);}
var JA=C();
function EQ(b,c){if(b!==null)return b;G(Wh(c));}
function Lj(){Ck.call(this);this.d5=null;}
function Xg(a){var b=new Lj();Tq(b,a);return b;}
function Tq(a,b){E2(a);if(b===null)b=R1(null);a.d5=b;}
function Oy(a,b){DO(a,a.d5,b);}
function By(){var a=this;B.call(a);a.be=null;a.bs=null;}
function Zu(){var a=new By();CY(a);return a;}
function CY(a){E(a);}
function JY(){var a=this;By.call(a);a.fJ=null;a.fd=null;}
function U6(a,b){var c=new JY();Om(c,a,b);return c;}
function Om(a,b,c){a.fJ=b;a.fd=c;CY(a);a.bs=a.fJ.by.dH;a.be=a.fd;}
function C$(){var a=this;B.call(a);a.gZ=null;a.dw=null;a.g$=0.0;a.dY=0.0;a.c8=null;a.dO=null;a.bC=0;}
function Ky(a,b,c,d,e){E(a);Fz();a.c8=Zv;a.dO=Zv;Kq(a,e);a.gZ=b;a.dw=e.dS();a.g$=c;a.dY=d;}
function JU(a,b,c,d){var e;e=DC(1);e.data[0]=63;Ky(a,b,c,d,e);}
function Kq(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.dY)return;}G(Cg(D(51)));}
function FY(a,b){if(b!==null){a.c8=b;a.iy(b);return a;}G(Cg(D(52)));}
function TM(a,b){}
function Ks(a,b){if(b!==null){a.dO=b;a.hZ(b);return a;}G(Cg(D(52)));}
function S_(a,b){}
function Hc(a,b,c,d){var e,f,g,h,$$je;a:{if(a.bC!=3){if(d)break a;if(a.bC!=2)break a;}G(Og());}a.bC=!d?1:2;while(true){try{e=a.ho(b,c);}catch($$e){$$je=W($$e);if($$je instanceof O){f=$$je;G(Wt(f));}else{throw $$e;}}if(e.gn()){if(!d)return e;g=BY(b);if(g<=0)return e;e=Dn(g);}else if(e.cY())break;h=!e.fH()?a.c8:a.dO;b:{Fz();if(h!==Zw){if(h===Zx)break b;else return e;}if(BY(c)<a.dw.data.length)return Zy;JK(c,a.dw);}b.eB(CN(b)+e.c()|0);}return e;}
function Go(a,b){var c;if(a.bC!=2&&a.bC!=4)G(Og());c=a.gF(b);Bs();if(c===Zz)a.bC=3;return c;}
function L2(a,b){Bs();return Zz;}
var EX=C(0);
function Jg(){B.call(this);this.fi=null;}
function WY(a){var b=new Jg();RB(b,a);return b;}
function RB(a,b){E(a);a.fi=b;}
function Uc(a,b,c){MM(a.fi,b,c);}
function N3(a,b,c){a.iF(b,c);}
function Je(){B.call(this);this.ek=null;}
function X5(a){var b=new Je();SL(b,a);return b;}
function SL(a,b){E(a);a.ek=b;}
function M3(a,b){Mb(a.ek,b);}
function SJ(a,b){a.dz(b);}
var Em=C(0);
function Ji(){B.call(this);this.gi=null;}
function W4(a){var b=new Ji();LQ(b,a);return b;}
function LQ(a,b){E(a);a.gi=b;}
function Qf(a,b){Lg(a.gi,b);}
function UN(a,b){a.ip(b);}
function DB(){var a=this;Cx.call(a);a.fP=0;a.es=null;a.jb=null;}
function G2(a,b,c,d,e,f){Fg(a,c);Tz();a.jb=Y7;a.fP=b;a.es=d;a.A=e;a.Y=f;}
function Tp(b,c,d){return WS(0,b.data.length,b,c,c+d|0,0,0);}
function Qi(b){return Tp(b,0,b.data.length);}
function Ss(a,b,c,d){var e,f,g,h,i,j;if(!d)return a;if(a.gu())G(U4());if(BY(a)<d)G(V7());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Cs((((((K()).e(D(53))).w(g)).e(D(54))).w(f)).d()));if(d<0)G(Cs(((((K()).e(D(55))).w(d)).e(D(56))).d()));h=a.A+a.fP|0;i=0;while(i<d){j=a.es.data;g=h+1|0;f=c+1|0;j[h]=e[c];i=i+1|0;h=g;c=f;}a.A=a.A+d|0;return a;}}e=b.data;G(Cs(((((((K()).e(D(57))).w(c)).e(D(40))).w(e.length)).e(D(58))).d()));}
function JK(a,b){return a.fb(b,0,b.data.length);}
function EJ(a){HN(a);return a;}
function Kf(){var a=this;DB.call(a);a.gv=0;a.eb=0;}
function WS(a,b,c,d,e,f,g){var h=new Kf();ML(h,a,b,c,d,e,f,g);return h;}
function ML(a,b,c,d,e,f,g,h){G2(a,b,c,d,e,f);a.gv=g;a.eb=h;}
function R8(a){return a.eb;}
var Ch=C(0);
function P0(a,b){Hn(a,b);}
function BQ(){Cf.call(this);this.cs=0;}
function D3(a){Fx(a);}
function QV(a){return VA(a);}
var CQ=C(0);
function Do(){var a=this;BQ.call(a);a.p=null;a.V=0;}
function VK(){var a=new Do();JC(a);return a;}
function WZ(a){var b=new Do();Ed(b,a);return b;}
function Xm(a){var b=new Do();Py(b,a);return b;}
function JC(a){Ed(a,10);}
function Ed(a,b){D3(a);a.p=U(B,b);}
function Py(a,b){var c,d;Ed(a,b.r());c=b.t();d=0;while(d<a.p.data.length){a.p.data[d]=c.s();d=d+1|0;}a.V=a.p.data.length;}
function Nf(a,b){var c;if(a.p.data.length<b){c=a.p.data.length>=1073741823?2147483647:B_(b,B_(a.p.data.length*2|0,5));a.p=Tg(a.p,c);}}
function PF(a,b){Ef(a,b);return a.p.data[b];}
function N5(a){return a.V;}
function MF(a,b,c){var d;Ef(a,b);d=a.p.data[b];a.p.data[b]=c;return d;}
function Sx(a,b){var c,d;a.bG(a.V+1|0);c=a.p.data;d=a.V;a.V=d+1|0;c[d]=b;a.cs=a.cs+1|0;return 1;}
function Ef(a,b){if(b>=0&&b<a.V)return;G(G3());}
function Ok(a){var b,c,d;if(!a.V)return D(59);b=a.V-1|0;c=Va(a.V*16|0);c.j(91);d=0;while(d<b){(c.U(a.p.data[d]===a?D(60):a.p.data[d])).e(D(38));d=d+1|0;}c.U(a.p.data[b]===a?D(60):a.p.data[b]);return (c.j(93)).d();}
var Fd=C(Do);
function XE(){var a=new Fd();PB(a);return a;}
function PB(a){JC(a);}
function Ox(a,b){var c,d;c=a.t();while(c.y()){d=c.s();d.bI(b);}}
function L3(a,b){var c,d;c=a.t();while(c.y()){d=c.s();d.b3(b);}}
var H4=C();
function Wb(b){UM(W2());}
var S=C(0);
function Bw(){var a=this;B.call(a);a.iv=null;a.fQ=0;}
var ZA=null;var ZB=null;var Ze=null;var ZC=null;var ZD=null;var ZE=null;var ZF=null;var ZG=null;var ZH=null;function Mt(){Mt=L(Bw);QM();}
function B1(a,b){var c=new Bw();KX(c,a,b);return c;}
function KX(a,b,c){Mt();E(a);a.iv=b;a.fQ=c;}
function C6(a){return a.fQ;}
function QM(){ZA=B1(D(61),2147483647);ZB=B1(D(62),1000);Ze=B1(D(63),900);ZC=B1(D(64),800);ZD=B1(D(65),700);ZE=B1(D(66),500);ZF=B1(D(67),400);ZG=B1(D(68),300);ZH=B1(D(69),(-2147483648));}
function D1(){B.call(this);this.em=0;}
function Ip(a){E(a);a.gy();}
function G4(a,b){E(a);a.c$(b);}
function Ri(a){a.c$(a.dj());}
function QK(a){a.c$(FI(a.cc()));}
function TN(a){return a.dc(Xm((a.cc()).ja()));}
function RJ(a,b){return (a.cc()).cJ(b);}
function Rs(a,b,c){a.g1();(a.cc()).bn(b,c);return a;}
function Q8(a){if(a.em){a.hx();a.em=0;}}
function TH(a){return a.ed();}
function N$(a,b,c){return a.gE(b,c);}
var HM=C();
function L9(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function VE(b){b.dP();}
function LZ(b){Qy(b,0);}
function Qy(b,c){return setTimeout(function(){VE(b);},c);}
function LV(){return T1();}
function P6(b){return JD(String.fromCharCode(b));}
function TC(b){return b.$meta.item;}
function Qu(b){return $rt_str(b.$meta.name);}
function T1(){return [];}
function Dj(){var a=this;B.call(a);a.gt=null;a.ij=null;}
function HZ(a,b,c){var d,e,f,g;d=c.data;E(a);Ik(b);e=d.length;f=0;while(f<e){g=d[f];Ik(g);f=f+1|0;}a.gt=b;a.ij=c.dS();}
function Ik(b){var c,d;if(b.ch())G(JI(b));if(!Il(b.o(0)))G(JI(b));c=1;while(c<b.c()){a:{d=b.o(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(Il(d))break a;else G(JI(b));}}c=c+1|0;}}
function Il(b){var c;a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}c=1;break a;}c=0;}return c;}
function CU(){B.call(this);this.ih=null;}
var Zx=null;var Zw=null;var Zv=null;function Fz(){Fz=L(CU);L1();}
function Ko(a){var b=new CU();Ic(b,a);return b;}
function Ic(a,b){Fz();E(a);a.ih=b;}
function L1(){Zx=Ko(D(70));Zw=Ko(D(71));Zv=Ko(D(72));}
function BO(){B.call(this);this.b9=0;}
var Y6=null;var ZI=null;var ZJ=null;function En(){En=L(BO);Oe();}
function OH(a){var b=new BO();HJ(b,a);return b;}
function HJ(a,b){En();E(a);a.b9=b;}
function R5(a){return a.b9;}
function CT(b){En();return !b?ZI:Y6;}
function I$(b){En();return !b?D(73):D(74);}
function NA(a){return I$(a.b9);}
function M4(a,b){if(a===b)return 1;return b instanceof BO&&b.b9==a.b9?1:0;}
function Oe(){Y6=OH(1);ZI=OH(0);ZJ=F($rt_booleancls());}
var Cu=C(O);
function HH(){var a=new Cu();EO(a);return a;}
function Cg(a){var b=new Cu();LE(b,a);return b;}
function EO(a){Bq(a);}
function LE(a,b){D0(a,b);}
function Ix(){Cu.call(this);this.hb=null;}
function JI(a){var b=new Ix();Rn(b,a);return b;}
function Rn(a,b){EO(a);a.hb=b;}
var Ly=C(O);
function Qb(){var a=new Ly();MC(a);return a;}
function MC(a){Bq(a);}
function F8(){B.call(this);this.fE=null;}
function Ws(a){var b=new F8();Q0(b,a);return b;}
function Q0(a,b){E(a);a.fE=b;}
function R2(a,b,c){return Ur(a.fE,b,c);}
var Jk=C();
function Pf(b){return $rt_str(b);}
function Dk(){Cz.call(this);this.dV=null;}
function ZK(a){var b=new Dk();Gv(b,a);return b;}
function Gv(a,b){D8(a);a.dV=b;}
function Fn(){var a=this;Dk.call(a);a.hq=0;a.dD=0;a.bg=null;a.de=null;a.eN=null;}
function ZL(a,b){var c=new Fn();J6(c,a,b);return c;}
function J6(a,b,c){Gv(a,b);a.bg=K();a.de=BI(32);a.hq=c;Rj();a.eN=ZM;}
function Nr(a,b,c,d){var $$je;if(!IZ(a))return;a:{try{a.dV.cm(b,c,d);break a;}catch($$e){$$je=W($$e);if($$je instanceof ER){}else{throw $$e;}}a.dD=1;}}
function IZ(a){if(a.dV===null)a.dD=1;return a.dD?0:1;}
function Hl(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=T2(b,c,d-c|0);g=DC(B_(16,BH(e.length,1024)));h=Qi(g);i=a.eN.h6();Fz();j=Zw;i=FY(i,j);j=Zw;k=Ks(i,j);while(true){l=(Hc(k,f,h,1)).cY();a.cm(g,0,CN(h));EJ(h);if(!l)break;}while(true){l=(Go(k,h)).cY();a.cm(g,0,CN(h));EJ(h);if(!l)break;}}
function Pb(a,b){(a.bg.e(b)).j(10);GW(a);}
function GW(a){var b;b=a.bg.c()<=a.de.data.length?a.de:BI(a.bg.c());a.bg.el(0,a.bg.c(),b,0);Hl(a,b,0,a.bg.c());a.bg.ec(0);}
function P(){var a=this;B.call(a);a.bb=null;a.O=null;a.W=null;}
function ZN(){var a=new P();BJ(a);return a;}
function BJ(a){E(a);}
function KR(){P.call(this);this.ir=null;}
function Xu(a){var b=new KR();Qc(b,a);return b;}
function Qc(a,b){var c,d;a.ir=b;BJ(a);a.O=R(0.5,0.1,0.1);a.W=M(4.0,2.5,(-5.0));Bn();c=ZO;d=K();BA(Y(d,D(75)),c);a.bb=Bg(d);ZO=ZO+1|0;}
function KT(){P.call(this);this.iT=null;}
function WU(a){var b=new KT();ON(b,a);return b;}
function ON(a,b){var c,d;a.iT=b;BJ(a);a.O=R(0.0,0.8,0.8);a.W=M((-10.0),12.0,(-7.5));Bn();c=ZO;d=K();BA(Y(d,D(75)),c);a.bb=Bg(d);ZO=ZO+1|0;}
function V(){var a=this;BK.call(a);a.X=0.0;a.P=null;}
function ZP(){var a=new V();BM(a);return a;}
function BM(a){FE(a);}
function Na(a,b){return BF(Cd(b,a.P));}
function Ns(a,b){var c,d,e,f;c=Cd(a.P,b.bs);d=BB(c,b.be);if(d<0.0)return null;e=C9(a.X,2.0)-(BB(c,c)-C9(d,2.0));f=e<0.0?0.0:d-FL(e);if(f===0.0)return null;return Xc(a,a,b,f);}
function KU(){V.call(this);this.i8=null;}
function WQ(a){var b=new KU();TO(b,a);return b;}
function TO(a,b){var c,d;a.i8=b;BM(a);BG();a.n=ZQ;a.P=M(3.0,2.0,6.0);a.X=1.75;Bn();c=ZR;d=K();BA(Y(d,D(76)),c);a.S=Bg(d);ZR=ZR+1|0;}
function KY(){V.call(this);this.gO=null;}
function VX(a){var b=new KY();Mu(b,a);return b;}
function Mu(a,b){var c,d;a.gO=b;BM(a);BG();a.n=ZQ;a.P=M((-4.0),5.0,2.0);a.X=2.0;Bn();c=ZR;d=K();BA(Y(d,D(76)),c);a.S=Bg(d);ZR=ZR+1|0;}
function KS(){P.call(this);this.gA=null;}
function XC(a){var b=new KS();Me(b,a);return b;}
function Me(a,b){var c,d;a.gA=b;BJ(a);a.O=R(0.5,0.3,0.75);a.W=M((-2.0),5.0,0.0);Bn();c=ZO;d=K();BA(Y(d,D(75)),c);a.bb=Bg(d);ZO=ZO+1|0;}
function KV(){V.call(this);this.hp=null;}
function Vl(a){var b=new KV();O8(b,a);return b;}
function O8(a,b){var c,d;a.hp=b;BM(a);BG();a.n=ZQ;a.P=M((-5.0),5.0,(-6.0));a.X=4.0;Bn();c=ZR;d=K();BA(Y(d,D(76)),c);a.S=Bg(d);ZR=ZR+1|0;}
var FA=C(0);
function KO(){V.call(this);this.iG=null;}
function WF(a){var b=new KO();S1(b,a);return b;}
function S1(a,b){var c,d;a.iG=b;BM(a);BG();a.n=ZS;a.P=M(0.0,3.0,1.0);a.X=1.0;Bn();c=ZR;d=K();BA(Y(d,D(76)),c);a.S=Bg(d);ZR=ZR+1|0;}
var KK=C();
function XH(){var a=new KK();Ui(a);return a;}
function Ui(a){E(a);}
function TI(a,b){return J8(a,b);}
function J8(a,b){return Nx(b);}
var GF=C();
function Vt(){var a=new GF();P5(a);return a;}
function P5(a){E(a);}
function LR(a,b){return Jl(a,b);}
function Jl(a,b){return M1(b);}
var KJ=C();
function WA(){var a=new KJ();PI(a);return a;}
function PI(a){E(a);}
function Nj(a,b){return GH(a,b);}
function GH(a,b){return NI(b);}
var GD=C();
function Vr(){var a=new GD();RO(a);return a;}
function RO(a){E(a);}
function Qd(a,b){return GS(a,b);}
function GS(a,b){return TJ(b);}
function KW(){V.call(this);this.hu=null;}
function U9(a){var b=new KW();Te(b,a);return b;}
function Te(a,b){var c,d;a.hu=b;BM(a);BG();a.n=ZQ;a.P=M(0.0,1.0,0.0);a.X=0.5;Bn();c=ZR;d=K();BA(Y(d,D(76)),c);a.S=Bg(d);ZR=ZR+1|0;}
var KI=C();
function X$(){var a=new KI();Ut(a);return a;}
function Ut(a){E(a);}
function Pc(a,b){return LF(a,b);}
function LF(a,b){return MQ(b);}
function KP(){V.call(this);this.h9=null;}
function VJ(a){var b=new KP();Qn(b,a);return b;}
function Qn(a,b){var c,d;a.h9=b;BM(a);BG();a.n=ZS;a.P=M(4.0,3.0,1.0);a.X=1.5;Bn();c=ZR;d=K();BA(Y(d,D(76)),c);a.S=Bg(d);ZR=ZR+1|0;}
var E0=C(0);
var BX=C(Cf);
function Dz(a){Fx(a);}
function DA(){BX.call(this);this.f6=null;}
function ZT(a){var b=new DA();Ia(b,a);return b;}
function Ia(a,b){Dz(a);a.f6=b;}
function Ps(a){return a.f6;}
var IY=C(DA);
function Wg(a){var b=new IY();Px(b,a);return b;}
function Px(a,b){Ia(a,b);}
function RS(a){return Xy(a.gG());}
var Lz=C();
function VI(){var a=new Lz();SB(a);return a;}
function SB(a){E(a);}
function Ou(a,b){return Io(a,b);}
function Io(a,b){return Nm(b);}
var Ld=C();
function XM(){var a=new Ld();T8(a);return a;}
function T8(a){E(a);}
function Sc(a,b){return F$(a,b);}
function F$(a,b){return P3(b);}
var LB=C();
function W5(){var a=new LB();MR(a);return a;}
function MR(a){E(a);}
function O9(a,b){return Jp(a,b);}
function Jp(a,b){return TY(b);}
var Lc=C();
function Wv(){var a=new Lc();PN(a);return a;}
function PN(a){E(a);}
function Mk(a,b){return H3(a,b);}
function H3(a,b){return M6(b);}
var LC=C();
function Vo(){var a=new LC();Qj(a);return a;}
function Qj(a){E(a);}
function S9(a,b){return In(a,b);}
function In(a,b){return SS(b);}
var GE=C();
function W1(){var a=new GE();SC(a);return a;}
function SC(a){E(a);}
function LN(a,b){return HS(a,b);}
function HS(a,b){return RQ(b);}
var Lb=C();
function XI(){var a=new Lb();UR(a);return a;}
function UR(a){E(a);}
function QS(a,b){return HC(a,b);}
function HC(a,b){return OW(b);}
var LA=C();
function Vy(){var a=new LA();RC(a);return a;}
function RC(a){E(a);}
function RX(a,b){return Gh(a,b);}
function Gh(a,b){return LO(b);}
var KL=C();
function VT(){var a=new KL();Oh(a);return a;}
function Oh(a){E(a);}
function T6(a,b){return KE(a,b);}
function KE(a,b){return QX(b);}
var GC=C();
function WO(){var a=new GC();MB(a);return a;}
function MB(a){E(a);}
function P7(a,b){return G8(a,b);}
function G8(a,b){return QY(b);}
var H0=C();
function SF(b,c,d,e,f){var g,h;g=Dg(e,f);if(!g){g=e;e=f;}else if(g>=0){c=c+0.5*(e-f|0);g=e;}else{b=b+0.5*(f-e|0);g=f;e=f;}h=SQ(b,c,d.by,g,e);return Fc(U6(d,h),d,0);}
function Fc(b,c,d){var e,f;e=Ho(b,c);f=null;if((e.t()).y())f=(e.t()).s();if(f!==null)return R_(f,c,d);Cq();return ZU;}
function Ho(b,c){var d,e,f,g,h,i,j,k;d=VK();e=c.cd.data;f=e.length;g=0;while(g<f){h=e[g];i=h.ev(b);if(i!==null)d.bx(i);g=g+1|0;}d.gL(Mg(Wj()));j=U(B8,(d.e4()).data.length);k=0;while(true){e=j.data;if(k>=e.length)break;e[k]=(d.e4()).data[k];k=k+1|0;}i=MY(j);return i;}
function MI(b,c){var d,e;d=Ho(b,c);e=null;if((d.t()).y())e=(d.t()).s();if(e!==null)return e.b6;return 0.0;}
function R_(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=b.bO.be;f=CZ(Bi(b.b6,b.bO.be),b.bO.bs);g=b.I.f2(f);h=Cd(e,Bi(2.0*BB(g,e),g));i=b.I.n.bh;j=(i.g(f)).bw()*BB(g,e);i=b.I.n.bh;j=j-FL(1.0-C9((i.g(f)).bw(),2.0)*(1.0-C9(BB(g,e),2.0)));i=Bi(j,g);k=b.I.n.bh;k=Bi((k.g(f)).bw(),e);l=Cd(i,k);Cq();m=ZU;i=Ci(m,NO(b.I,f,g,h,c));if(d>=4)return i;n=Qk(b.I,CZ(f,Bi(0.001,h)),h,c,d);o=L6(b.I,CZ(g,Bi(0.001,l)),l,c,d);k=B6(1.0-b.I.n.bz,n);p=B6(b.I.n.bz,o);return Ci(i,Ci(k,p));}
function Qk(b,c,d,e,f){return B6((b.n.bP.g(c)).bw(),Fc(WC(c,d),e,f+1|0));}
function L6(b,c,d,e,f){return B6((b.n.bh.g(c)).bw(),Fc(XA(c,d),e,f+1|0));}
function NO(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;g=R(0.0,0.0,0.0);h=f.cl.data;i=h.length;j=0;while(j<i){k=h[j];l=Cd(k.W,c);m=BF(l);n=MI(XG(c,m),f);o=n<=GV(l)&&n!==0.0?0:1;if(o){p=BB(m,d);q=p>0.0?B6(p,k.O):R(0.0,0.0,0.0);r=BB(m,BF(e));s=r<=0.0?R(0.0,0.0,0.0):B6(C9(r,b.n.bW),k.O);g=Ci(g,Ci(EZ(b.n.bY.g(c),q),EZ(b.n.bL.g(c),s)));}j=j+1|0;}return g;}
function SQ(b,c,d,e,f){return BF(CZ(d.dA,CZ(Bi(UY(b,e),d.cZ),Bi(PR(c,f),d.c0))));}
function UY(b,c){var d;d=c;return (b-d/2.0)/(2.0*d);}
function PR(b,c){var d;d=c;return  -(b-d/2.0)/(2.0*d);}
function UV(b){return b.b6;}
var Fy=C(0);
var Gy=C(Ce);
function VR(){var a=new Gy();Sm(a);return a;}
function Sm(a){DY(a);}
function TP(a){return a;}
function RZ(a,b){return Gd(a,b);}
function PE(a,b){HV(a,b);}
function TW(a,b,c){return Is(a,b,c);}
var Ep=C(0);
var Ec=C(0);
function JO(){var a=this;B.call(a);a.dh=null;a.cu=null;}
function V$(a){var b=new JO();Q1(b,a);return b;}
function Q1(a,b){var c;E(a);a.cu=b;c=a;b.classObject=c;}
function GY(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=V$(b);return c;}
function LI(a){return (((K()).e(D(77))).w(Dc(a))).d();}
function N8(a){return a.cu;}
function Uh(a){if(a.dh===null)a.dh=Qu(a.cu);return a.dh;}
function L0(a){return GY(TC(a.cu));}
var K$=C(Bm);
function Ca(){X.call(this);this.cT=0.0;}
var ZV=0.0;var ZW=null;function IU(){IU=L(Ca);OA();}
function Xx(a){var b=new Ca();EB(b,a);return b;}
function VU(a){var b=new Ca();Jx(b,a);return b;}
function EB(a,b){IU();B$(a);a.cT=b;}
function Jx(a,b){IU();EB(a,b);}
function Lf(b){IU();return Xx(b);}
function M9(a,b){if(a===b)return 1;return b instanceof Ca&&b.cT===a.cT?1:0;}
function OA(){ZV=NaN;ZW=F($rt_floatcls());}
var D9=C(0);
var Hb=C();
function NH(b,c){var d,e,f,g;d=b.data;e=BI(c);f=BH(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Tg(b,c){var d,e,f,g;d=b.data;e=HX((EG(b)).gd(),c);f=BH(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function QH(b,c){var d,e,f,g,h,i,j,k,l,m;d=b.data.length;if(!d)return;e=U(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data.length;if(h>=i)break;j=BH(i,h+f|0);k=h+(2*f|0)|0;l=BH(i,k);TQ(g,e,h,j,l,c);h=k;}f=f*2|0;m=g;g=e;e=m;}a:{if(g!==b){h=0;while(true){m=g.data;if(h>=m.length)break a;e.data[h]=m[h];h=h+1|0;}}}}
function TQ(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=d;i=e;a:{b:{while(d!=e){if(i==f)break b;j=b.data;k=j[d];l=j[i];if(g.fI(k,l)>0){j=c.data;m=h+1|0;j[h]=l;i=i+1|0;}else{j=c.data;m=h+1|0;j[h]=k;d=d+1|0;}h=m;}while(true){if(i>=f)break a;n=c.data;j=b.data;m=h+1|0;o=i+1|0;n[h]=j[i];h=m;i=o;}}while(true){if(d>=e)break a;n=c.data;j=b.data;o=h+1|0;m=d+1|0;n[h]=j[d];h=o;d=m;}}}
function Nc(b,c){return N9(b,0,b.data.length,c);}
function N9(b,c,d,e){var f,g,h,i,j;f=Dg(c,d);if(f>0)G(HH());if(!f)return (-1);g=d-1|0;while(true){h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>g)return ( -i|0)-2|0;}else{g=i-1|0;if(g<c)return ( -i|0)-1|0;}}return i;}
function MY(b){return Vm(b);}
function Ln(){D1.call(this);this.dL=null;}
function V5(){var a=new Ln();OL(a);return a;}
function Xd(a){var b=new Ln();P1(b,a);return b;}
function OL(a){Ip(a);}
function P1(a,b){G4(a,b);}
function SA(a){return a.dL;}
function RE(a,b){a.dL=b;}
function Rc(a){return a.dL;}
function Ru(a,b){return b;}
function SZ(a){return a.i$();}
var EN=C();
var ZX=null;function HI(){var b;if(ZX===null){b=new Fn;TF();J6(b,Y9,0);ZX=b;}return ZX;}
function I0(){return Long_fromNumber(new Date().getTime());}
var J5=C(Cv);
function X1(a){var b=new J5();SI(b,a);return b;}
function SI(a,b){Ei(a,b);}
function To(a){FF(a);return a.ds.bc;}
var Ku=C();
function Wa(){var a=new Ku();Rr(a);return a;}
function Rr(a){E(a);}
function NC(a){return Kn(a);}
function Kn(a){return Rl();}
var La=C();
function UZ(){var a=new La();PH(a);return a;}
function PH(a){E(a);}
function Nw(a,b){return J3(a,b);}
function J3(a,b){return UH(b);}
var II=C();
function XU(){var a=new II();Q6(a);return a;}
function Q6(a){E(a);}
var DX=C(BQ);
function H5(a){D3(a);}
var IK=C(DX);
function XN(){var a=new IK();Ni(a);return a;}
function Ni(a){H5(a);}
var IH=C();
function VO(){var a=new IH();SM(a);return a;}
function SM(a){E(a);}
var BS=C();
var ZY=null;var ZZ=null;var Z0=null;var Z1=null;function Bk(){Bk=L(BS);Ng();}
function EA(b){Bk();return (b&64512)!=55296?0:1;}
function Ex(b){Bk();return (b&64512)!=56320?0:1;}
function KB(b){Bk();return !EA(b)&&!Ex(b)?0:1;}
function J7(b,c){Bk();return ((b&1023)<<10|c&1023)+65536|0;}
function FV(b){var c;Bk();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function Fr(b){Bk();return (56320|b&1023)&65535;}
function Fl(b){Bk();return Gb(b)&65535;}
function Gb(b){Bk();return (P6(b)).toLowerCase().charCodeAt(0);}
function FZ(b){Bk();return H2(b);}
function H2(b){var c,d,e,f,g,h,i,j;Bk();c=Gi();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=Dg(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function CE(b,c){Bk();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gi(){Bk();if(ZZ===null)ZZ=Tw(((F9()).value!==null?$rt_str((F9()).value):null));return ZZ;}
function F9(){Bk();if(Z1===null)Z1=Kk();return Z1;}
function Ng(){ZY=F($rt_charcls());Z0=U(BS,128);}
function Kk(){return {"value":"{?*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%slG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%sTEG%%%%%%%%%%%%%%%%%%&5G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%VR#G%%%%%%%%%%%%%"
+"%%%%%"};}
var DT=C(BX);
function J4(a){Dz(a);}
var IL=C(DT);
function XJ(){var a=new IL();MS(a);return a;}
function MS(a){J4(a);}
var IJ=C(Dt);
function Wy(){var a=new IJ();LJ(a);return a;}
function LJ(a){JT(a);}
function Hg(){var a=this;B.call(a);a.du=null;a.c6=null;}
function V8(a,b){var c=new Hg();TK(c,a,b);return c;}
function TK(a,b,c){a.c6=b;a.du=c;E(a);}
function TR(a,b){var c,$$je;a:{try{a.du.et(a.c6);}catch($$e){$$je=W($$e);if($$je instanceof Bo){c=$$je;break a;}else{throw $$e;}}return;}G(c);}
function T$(a,b){var c,$$je;a:{try{a.du.et(a.c6);}catch($$e){$$je=W($$e);if($$je instanceof Bo){c=$$je;break a;}else{throw $$e;}}return;}G(c);}
function K9(){B.call(this);this.fA=null;}
function WM(a){var b=new K9();SG(b,a);return b;}
function SG(a,b){E(a);a.fA=b;}
function R4(a){Ua(a.fA);}
var GX=C();
function UX(b){return b;}
function Co(){B.call(this);this.bu=null;}
function Eg(a,b){E(a);a.bu=b;}
function GN(a){return a.bu;}
function Kd(a,b){var c,d,e;if(b===null){Z();return Zh;}a:{c=$rt_str(typeof b);d=(-1);switch(c.b2()){case -1034364087:if(!c.D(D(78)))break a;d=2;break a;case -1023368385:if(!c.D(D(79)))break a;d=0;break a;case -891985903:if(!c.D(D(80)))break a;d=1;break a;case 64711720:if(!c.D(D(81)))break a;d=3;break a;default:}}switch(d){case 0:if(!(Object.prototype.toString.apply(b)==='[object Array]'?1:0)){Z();e=Zk;}else{Z();e=Zj;}return e;case 1:break;case 2:Z();return Y0;case 3:Z();return YZ;default:Z();return Zi;}Z();return YY;}
function LD(a){return KF();}
function Gu(a,b){if(!(b instanceof Fo))return Iv(b);return b;}
function H6(a,b){if(!(b instanceof FT))return Pm(b);return b;}
function I7(a,b){U3();switch(YX.data[Bl(a.cr(b))]){case 1:return Pf(b);case 2:return CT(Oq(b));case 3:return OT(b);default:}return b;}
function JN(a,b){if(b===null)return null;if(b instanceof BU)return $rt_ustr(b);if(b instanceof BO)return !!b.e_();if(b instanceof Ca)return b.jN();if(b instanceof B7)return b.bw();if(b instanceof X)return b.N();if(!(b instanceof BS))return b;return $rt_ustr(Iq(b));}
function Ht(a){return a.ed();}
function OT(b){var c;c=UX(b);if(c!==So(c))return Bu(c);if(TA(c)<=2.147483647E9)return Bc(c|0);return Ev(Yz(c));}
function Ms(a){return a.fl();}
function Qe(a){return a.f5();}
function PT(a,b){return a.e8(b);}
function Mp(a,b){return a.fX(b);}
function Os(a,b){return a.fW(b);}
function KF(){return {};}
function N_(b){var keys=[];for(var key in b){if(Object.prototype.hasOwnProperty.call(b,key)&&key!='$H'){keys.push(key);}}return keys;}
var Fo=C(Co);
function XK(a){var b=new Fo();MA(b,a);return b;}
function Iv(b){if(b!==null&&!(typeof b==='undefined'?1:0))return XK(b);return null;}
function MA(a,b){Eg(a,b);}
function FK(a){return JD(a.bu);}
function K4(a,b){return (FK(a))[b];}
function RT(a){return (FK(a)).length;}
function S6(a,b){return K4(a,b);}
function IP(){P.call(this);this.i7=null;}
function Wd(a){var b=new IP();No(b,a);return b;}
function No(a,b){a.i7=b;BJ(a);a.O=R(0.75,0.75,0.75);a.W=M((-4.0),3.0,4.0);a.bb=D(82);}
var Di=C(Cx);
function F6(a,b,c,d){Fg(a,b);a.A=c;a.Y=d;}
function T2(b,c,d){return V2(0,b.data.length,b,c,c+d|0,0);}
function Nq(a,b,c,d){var e,f,g,h,i;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f)G(Cs((((((K()).e(D(83))).w(g)).e(D(54))).w(f)).d()));if(BY(a)<d)G(Xt());if(d<0)G(Cs(((((K()).e(D(55))).w(d)).e(D(56))).d()));h=a.A;i=0;while(i<d){g=c+1|0;f=h+1|0;e[c]=a.iK(h);i=i+1|0;c=g;h=f;}a.A=a.A+d|0;return a;}}e=b.data;G(Cs(((((((K()).e(D(57))).w(c)).e(D(40))).w(e.length)).e(D(58))).d()));}
function LM(a,b){JM(a,b);return a;}
var DK=C(Di);
function Id(a,b,c,d){F6(a,b,c,d);}
function Kx(){var a=this;DK.call(a);a.iU=0;a.fg=0;a.gb=null;}
function V2(a,b,c,d,e,f){var g=new Kx();UE(g,a,b,c,d,e,f);return g;}
function UE(a,b,c,d,e,f,g){Id(a,c,e,f);a.fg=b;a.iU=g;a.gb=d;}
function NQ(a,b){return a.gb.data[b+a.fg|0];}
function IT(){P.call(this);this.h$=null;}
function X2(a){var b=new IT();MW(b,a);return b;}
function MW(a,b){a.h$=b;BJ(a);a.O=R(0.75,0.75,0.75);a.W=M(4.0,3.0,(-4.0));a.bb=D(82);}
function IR(){P.call(this);this.g_=null;}
function XT(a){var b=new IR();QQ(b,a);return b;}
function QQ(a,b){a.g_=b;BJ(a);a.O=R(0.75,0.75,0.75);a.W=M((-4.0),3.0,(-4.0));a.bb=D(82);}
var Jt=C();
function QT(b){$rt_putStdout(b);}
function IS(){P.call(this);this.hH=null;}
function Wx(a){var b=new IS();Ry(b,a);return b;}
function Ry(a,b){a.hH=b;BJ(a);a.O=R(0.75,0.75,0.75);a.W=M(4.0,3.0,4.0);a.bb=D(82);}
function IN(){V.call(this);this.gj=null;}
function X9(a){var b=new IN();RW(b,a);return b;}
function RW(a,b){a.gj=b;BM(a);BG();a.n=ZQ;a.P=M(0.0,1.0,0.0);a.X=1.0;a.S=D(84);}
var Fj=C();
var Z2=null;function G6(){return (DN()).hE();}
function Sh(b){return (DN()).bK(b);}
function O5(b){return (DN()).c7(b);}
function M$(b){return (DN()).bf(b);}
function Qa(b){Z2=b;}
function DN(){var b;if(Z2===null){b=Wa();DF();Qa(Fu(F(CS),b,Z3));if(Z2===null){(HI()).e7(D(85));Z2=V5();}}return Z2;}
function Rl(){return GL(F(CS));}
var Ju=C();
function Oq(b){return b?1:0;}
var BR=C();
var Z4=null;var Z5=null;var Z6=null;var Z7=null;var Z8=null;var Z9=null;function FX(){FX=L(BR);P8();}
function Jz(b){FX();return b instanceof X;}
function Lw(b){FX();return b===null?null:b instanceof Ct?b:!(b instanceof X)?null:Bc(b.N());}
function Jq(b){var c,$$je;FX();if(b===null)return null;a:{try{c=Bc(E8(b));}catch($$e){$$je=W($$e);if($$je instanceof EI){break a;}else{throw $$e;}}return c;}return null;}
function Ej(b){var c;FX();c=Lw(b);if(c===null&&b!==null)return Jq(b.d());return c;}
function P8(){Z4=K5(0);Z5=Ge(0);Z6=Bc(0);Z7=Ev(BL);Z8=Lf(0.0);Z9=Bu(0.0);}
var Gl=C(BP);
function Wn(){var a=new Gl();Q7(a);return a;}
function Q7(a){var b,c;DE(a);b=U(BK,7);c=b.data;Bn();c[0]=Z$;c[1]=WF(a);c[2]=VJ(a);c[3]=U9(a);c[4]=VX(a);c[5]=WQ(a);c[6]=Vl(a);a.cd=b;a.cl=C1(P,[XC(a),WU(a),Xu(a)]);a.by=I2(M(0.0,1.0,0.0),M(5.0,5.0,5.0));}
var Gk=C(BP);
function Ya(){var a=new Gk();O4(a);return a;}
function O4(a){var b,c;DE(a);b=U(BK,2);c=b.data;c[0]=X9(a);Bn();c[1]=Z$;a.cd=b;a.cl=C1(P,[Wx(a),X2(a),Wd(a),XT(a)]);a.by=F0(M(0.0,1.0,0.0),M(3.0,3.0,3.0),600.0,450.0);}
function B7(){X.call(this);this.ba=0.0;}
var Z_=0.0;var AAa=null;function Fm(){Fm=L(B7);Pn();}
function PD(a){var b=new B7();J2(b,a);return b;}
function J2(a,b){Fm();B$(a);a.ba=b;}
function Ux(a){return a.ba;}
function Pq(a){return a.ba|0;}
function Bu(b){Fm();return PD(b);}
function Gp(b){Fm();return ((K()).hP(b)).d();}
function Nu(a){return Gp(a.ba);}
function UU(a,b){if(a===b)return 1;return b instanceof B7&&b.ba===a.ba?1:0;}
function Lr(b,c){Fm();return Dg(b,c);}
function Ne(a){return isNaN(a.ba)?1:0;}
function O1(a){return !isFinite(a.ba)?1:0;}
function Pn(){Z_=NaN;AAa=F($rt_doublecls());}
var Gj=C(BP);
function Wq(){var a=new Gj();S8(a);return a;}
function S8(a){var b,c;DE(a);b=U(BK,1);c=b.data;Bn();c[0]=Z$;a.cd=b;b=U(P,1);b.data[0]=W6(a);a.cl=b;a.by=F0(M(0.0,1.0,0.0),M(3.0,3.0,3.0),600.0,450.0);}
function D6(){var a=this;BK.call(a);a.eL=0.0;a.cx=null;}
function AAb(){var a=new D6();F4(a);return a;}
function F4(a){FE(a);}
function Qv(a,b){return a.cx;}
function S4(a,b){var c,d;c=BB(a.cx,b.be);if(c>0.0)return null;d=(a.eL+BB(a.cx,b.bs))/ -c;return U_(a,a,b,d);}
var Gn=C(D6);
function Wk(){var a=new Gn();S3(a);return a;}
function S3(a){F4(a);BG();a.n=AAc;a.cx=M(0.0,1.0,0.0);a.eL=0.0;a.S=D(86);}
var Gm=C(V);
function XZ(){var a=new Gm();Po(a);return a;}
function Po(a){BM(a);BG();a.n=AAc;a.P=M(0.0,(-10000.0),0.0);a.X=1.0E-7;a.S=D(86);}
function J0(){var a=this;By.call(a);a.eD=null;a.fM=null;}
function XA(a,b){var c=new J0();Uo(c,a,b);return c;}
function Uo(a,b,c){a.eD=b;a.fM=c;CY(a);a.bs=a.eD;a.be=a.fM;}
function JX(){var a=this;By.call(a);a.eO=null;a.eQ=null;}
function WC(a,b){var c=new JX();UQ(c,a,b);return c;}
function UQ(a,b,c){a.eO=b;a.eQ=c;CY(a);a.bs=a.eO;a.be=a.eQ;}
function K2(){BX.call(this);this.dg=null;}
function Vp(a){var b=new K2();PL(b,a);return b;}
function PL(a,b){a.dg=b;Dz(a);}
function Tk(a){return a.dg.r();}
function S5(a){return X1(a.dg);}
function JZ(){var a=this;By.call(a);a.fY=null;a.ef=null;}
function XG(a,b){var c=new JZ();UO(c,a,b);return c;}
function UO(a,b,c){a.fY=b;a.ef=c;CY(a);a.bs=a.fY;a.be=a.ef;}
var CJ=C(0);
function T9(a,b,c){return (a.hB(b)).h1(W8(c));}
function RG(b,c){return c.gU(b);}
var EK=C();
var AAd=null;function AAe(){var a=new EK();US(a);return a;}
function US(a){E(a);}
function Up(a){if(AAd===null)AAd=CT(NN()?1:0);return AAd.e_();}
function Ny(a,b){var c,d;c=HP();d=W7(c);Sz($rt_ustr(b),CI(d,"handle"));return c.ga();}
function Mj(b,c){b.bj(XY(c));}
function NN(){{try {if(typeof WebAssembly==="object"&&typeof WebAssembly.instantiate==="function"){const module=new WebAssembly.Module(Uint8Array.of(0x0,0x61,0x73,0x6d,0x01,0x00,0x00,0x00));if(module instanceof WebAssembly.Module)return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;}}catch(e){}return false;}}
function Sz(b,c){((fetch(b)).then(function(response){return WebAssembly.compileStreaming(response);})).then(function(module){return c(module);});}
var Fs=C();
var JW=C(O);
function P_(){var a=new JW();LL(a);return a;}
function LL(a){Bq(a);}
function Jh(){B.call(this);this.ei=null;}
function W8(a){var b=new Jh();SN(b,a);return b;}
function SN(a,b){E(a);a.ei=b;}
function QF(a,b){return HW(a,b);}
function HW(a,b){return RG(a.ei,b);}
function Br(){var a=this;B.call(a);a.bL=null;a.bP=null;a.bY=null;a.bh=null;a.bz=0.0;a.bW=0.0;a.cA=null;}
function AAf(){var a=new Br();C2(a);return a;}
function C2(a){E(a);}
var Kc=C(Br);
function Vk(){var a=new Kc();O7(a);return a;}
function O7(a){C2(a);a.cA=D(86);a.bh=Vo();a.bP=Vy();a.bY=VI();a.bL=W5();a.bW=15.0;a.bz=0.0;}
function TY(b){return R(0.5,0.5,0.5);}
function Nm(b){return R(0.25,0.25,0.25);}
function LO(b){return Bu(0.65);}
function SS(b){return Bu(0.0);}
var J_=C(Br);
function U1(){var a=new J_();QR(a);return a;}
function QR(a){C2(a);a.cA=D(87);a.bh=XM();a.bP=Wv();a.bY=XI();a.bL=UZ();a.bW=0.0;a.bz=0.1;}
function UH(b){return R(0.25,0.25,0.25);}
function OW(b){return R(0.25,0.25,0.25);}
function M6(b){return Bu(0.25);}
function P3(b){return Bu(0.0);}
var JB=C(Br);
function WW(){var a=new JB();LY(a);return a;}
function LY(a){C2(a);a.cA=D(88);a.bh=WO();a.bP=W1();a.bY=Vr();a.bL=Vt();a.bW=100.0;a.bz=0.95;}
function M1(b){return R(0.5,0.5,0.5);}
function TJ(b){return R(0.0,0.0,0.0);}
function RQ(b){return Bu(0.0);}
function QY(b){return Bu(1.0);}
var Ka=C(Br);
function Xe(){var a=new Ka();Tt(a);return a;}
function Tt(a){C2(a);a.cA=D(89);a.bh=VT();a.bP=XH();a.bY=WA();a.bL=X$();a.bW=25.0;a.bz=0.1;}
function MQ(b){return R(0.75,0.75,0.75);}
function NI(b){return R(1.0,1.0,1.0);}
function Nx(b){return Bu(1.0);}
function QX(b){return Bu(0.0);}
var FT=C(Co);
function AAg(){var a=new FT();NW(a);return a;}
function WT(a){var b=new FT();KZ(b,a);return b;}
function Pm(b){if(b!==null&&!(typeof b==='undefined'?1:0))return WT(b);return null;}
function NW(a){KZ(a,KF());}
function KZ(a,b){Eg(a,b);}
function Kh(a,b){return a.bu[$rt_ustr(b)]||null;}
function Gw(a){return Iv(N_(a.bu));}
function Lk(a,b,c){a.bu[$rt_ustr(b)]=c;return a;}
function TT(a){return Ht(a);}
function Pu(a,b){return JN(a,b);}
function OB(a,b){return I7(a,b);}
function L8(a,b){return H6(a,b);}
function Tx(a,b){return Gu(a,b);}
function Mf(a){return LD(a);}
function Uy(a,b){return Kd(a,b);}
function PG(a){return GN(a);}
function N4(a,b,c){return Lk(a,b,c);}
function TS(a,b){return Kh(a,b);}
function SO(a){return Gw(a);}
function BU(){var a=this;B.call(a);a.i=null;a.cb=0;}
var AAh=null;function Lv(){Lv=L(BU);RY();}
function U7(a){var b=new BU();GJ(b,a);return b;}
function Pa(a,b,c){var d=new BU();LG(d,a,b,c);return d;}
function GJ(a,b){var c,d,e;Lv();c=b.data;E(a);d=c.length;a.i=BI(d);e=0;while(e<d){a.i.data[e]=c[e];e=e+1|0;}}
function LG(a,b,c,d){var e,f;Lv();E(a);a.i=BI(d);e=0;while(e<d){f=b.data;a.i.data[e]=f[e+c|0];e=e+1|0;}}
function NT(a,b){if(b>=0&&b<a.i.data.length)return a.i.data[b];G(Pk());}
function Rx(a){return a.i.data.length;}
function TL(a){return a.i.data.length?0:1;}
function St(a,b){var c,d,e,f,g;if(a===b)return 0;c=BH(a.c(),b.c());d=0;while(true){if(d>=c)return a.c()-b.c()|0;e=a.o(d);f=b.o(d);g=e-f|0;if(g)break;d=d+1|0;}return g;}
function QE(a,b){var c,d,e,f;if(a===b)return 1;if(b.c()>a.c())return 0;c=0;d=a.c()-b.c()|0;while(d<a.c()){e=a.o(d);f=c+1|0;if(e!=b.o(c))return 0;d=d+1|0;c=f;}return 1;}
function NB(a,b,c){var d,e,f,g;d=B_(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.i.data.length)return (-1);if(a.i.data[d]==e)break;d=d+1|0;}return d;}f=FV(b);g=Fr(b);while(true){if(d>=(a.i.data.length-1|0))return (-1);if(a.i.data[d]==f&&a.i.data[d+1|0]==g)break;d=d+1|0;}return d;}
function QD(a,b){return a.ee(b,0);}
function NY(a,b,c){var d,e,f,g,h,i;d=BH(c,a.c()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.i.data[d]==e)break;d=d+(-1)|0;}return d;}f=FV(b);g=Fr(b);while(true){if(d<1)return (-1);if(a.i.data[d]==g){h=a.i.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function S7(a,b){return a.iS(b,a.c()-1|0);}
function My(a,b,c){if(b>c)G(G3());return Pa(a.i,b,c-b|0);}
function Tf(a,b){return a.bN(b,a.c());}
function OR(a){return a;}
function TU(a){var b,c,d;b=BI(a.i.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.i.data[c];c=c+1|0;}return b;}
function Iq(b){Lv();return b===null?D(10):b.d();}
function Su(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BU))return 0;c=b;if(c.c()!=a.c())return 0;d=0;while(d<c.c()){if(a.o(d)!=c.o(d))return 0;d=d+1|0;}return 1;}
function SK(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.c()!=b.c())return 0;c=0;while(c<a.c()){if(Fl(a.o(c))!=Fl(b.o(c)))return 0;c=c+1|0;}return 1;}
function NM(a){var b,c,d,e;a:{if(!a.cb){b=a.i.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.cb=(31*a.cb|0)+e|0;d=d+1|0;}}}return a.cb;}
function Rh(a,b){return a.hU(b);}
function RY(){AAh=Xl();}
var LH=C(O);
function Xf(){var a=new LH();Of(a);return a;}
function Of(a){Bq(a);}
function D7(){var a=this;C$.call(a);a.ff=null;a.ew=null;}
function H1(a,b,c,d){JU(a,b,c,d);a.ff=BI(512);a.ew=DC(512);}
function N0(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.ff;e=0;f=0;g=a.ew;a:{while(true){if((e+32|0)>f&&B9(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=BH(BY(b)+j|0,i.length);b.iE(d,j,f-j|0);e=0;}if(!B9(c)){if(!B9(b)&&e>=f){Bs();k=Zz;}else{Bs();k=Zy;}break a;}i=g.data;l=0;m=BH(BY(c),i.length);n=VN(b,c);k=a.gM(d,e,f,g,l,m,n);e=n.e$;j=n.fN;if(k===null){if(!B9(b)&&e>=f){Bs();k=Zz;}else if(!B9(c)&&e>=f){Bs();k=Zy;}}c.fb(g,0,j);if(k!==null)break;}}b.eB(CN(b)-(f-e|0)|0);return k;}
var IA=C(D7);
function WH(a){var b=new IA();QG(b,a);return b;}
function QG(a,b){H1(a,b,2.0,4.0);}
function Ul(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.dN(2))break a;Bs();i=Zy;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!KB(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.dN(3))break a;Bs();i=Zy;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if(!EA(l))
{i=Dn(1);break a;}if(j>=d){if(h.ii())break a;Bs();i=Zz;break a;}n=j+1|0;p=k[j];if(!Ex(p)){j=n+(-2)|0;i=Dn(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.dN(4))break a;Bs();i=Zy;break a;}k=e.data;q=J7(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.iN(j);h.gz(f);return i;}
var Fh=C(0);
function Ij(){B.call(this);this.eT=null;}
function VV(a){var b=new Ij();Nk(b,a);return b;}
function Nk(a,b){E(a);a.eT=b;}
function Nd(a,b){Hz(a,b);}
function Hz(a,b){Sa(a.eT,b);}
function MZ(a,b){a.il(b);}
var I_=C();
function X3(){var a=new I_();Rg(a);return a;}
function Rg(a){E(a);}
var Bz=C();
var ZR=0;var ZO=0;var Z$=null;var AAi=null;var AAj=null;var AAk=null;var AAl=null;var AAm=null;function Bn(){Bn=L(Bz);Qm();}
function Qm(){var b,c;ZR=0;ZO=0;b=U(Br,4);c=b.data;BG();c[0]=AAn;c[1]=AAc;c[2]=ZQ;c[3]=ZS;AAo=b;Z$=Wk();AAl=XZ();AAi=Wn();AAj=Ya();AAk=Wq();b=U(BP,1);b.data[0]=AAi;AAm=b;}
var Ja=C();
function Ww(){var a=new Ja();P9(a);return a;}
function P9(a){E(a);}
function PC(a,b,c){return Km(b,c);}
var EI=C(Cu);
function X4(){var a=new EI();NE(a);return a;}
function Dd(a){var b=new EI();UB(b,a);return b;}
function NE(a){EO(a);}
function UB(a,b){LE(a,b);}
function Hd(){P.call(this);this.hT=null;}
function W6(a){var b=new Hd();Pd(b,a);return b;}
function Pd(a,b){a.hT=b;BJ(a);a.O=R(1.0,1.0,1.0);a.W=M(0.0,1.0,0.0);a.bb=D(82);}
var FO=C(Dj);
var ZM=null;function Rj(){Rj=L(FO);QL();}
function Xj(){var a=new FO();KC(a);return a;}
function KC(a){Rj();HZ(a,D(90),U(BU,0));}
function Ta(a){return WH(a);}
function QL(){ZM=Xj();}
var CL=C();
var AAp=0;var AAq=0;var AAr=null;function TV(b,c){var d;d=3*b|0;if(c!==null&&c.data.length==d)return c;return DC(d);}
function NL(b,c,d,e){var f,g,h,i,j,k,l;AAp=b;AAq=c;Bn();AAr=AAm.data[d];f=e*0.005;g=0.55+f*6.0*2.0*3.141592653589793;h=1.55;i=2.55;j=f-0.2;if(j>0.0){h=h+20.0*Kg(1.0,j);i=i+20.0*Jy(Kg(1.0,j)*3.141592653589793/2.0);}k=i*Nv(g);l=i*Jy(g);AAr.by=I2(M(0.0,1.0,0.0),M(k,h,l));}
function Sn(b,c){var d,e;d=0;e=0;while(e<AAp){d=M7(e,b,c,d);e=e+1|0;}}
function M7(b,c,d,e){var f,g,h,i;f=d.data;g=SF(b,c,AAr,AAp,AAq);h=e+1|0;f[e]=(g.cV(g.bo)*255.0+(-128.0)|0)<<24>>24;i=h+1|0;f[h]=(g.cV(g.bl)*255.0+(-128.0)|0)<<24>>24;h=i+1|0;f[i]=(g.cV(g.bm)*255.0+(-128.0)|0)<<24>>24;return h;}
var Lt=C();
function Vf(){var a=new Lt();Ob(a);return a;}
function Ob(a){E(a);}
function UM(b){HT(b,Vf());b.i3();}
function Nz(a,b){if(!(b instanceof BU))self.postMessage(b);else self.postMessage($rt_ustr(b));}
function RP(a,b){var c,d,e,f,g;c=b.data;d=c.length;e=new Array();f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function PU(a,b){self.onmessage=CI(VV(b),"handleEvent");}
function Sa(b,c){b.g4(c.data);}
function Fi(){var a=this;B.call(a);a.bo=0.0;a.bl=0.0;a.bm=0.0;}
var ZU=null;function Cq(){Cq=L(Fi);QO();}
function Ey(a,b,c){var d=new Fi();Ir(d,a,b,c);return d;}
function Ir(a,b,c,d){Cq();E(a);a.bo=b;a.bl=c;a.bm=d;}
function R(b,c,d){Cq();return Ey(b,c,d);}
function B6(b,c){Cq();return Ey(b*c.bo,b*c.bl,b*c.bm);}
function EZ(b,c){Cq();return Ey(b.bo*c.bo,b.bl*c.bl,b.bm*c.bm);}
function Ci(b,c){Cq();return Ey(b.bo+c.bo,b.bl+c.bl,b.bm+c.bm);}
function TE(a,b){if(b<0.0)b=0.0;else if(b>1.0)b=1.0;return b;}
function QO(){ZU=R(0.0,0.0,0.0);}
var GI=C(BC);
function Og(){var a=new GI();QI(a);return a;}
function JS(a){var b=new GI();N6(b,a);return b;}
function QI(a){Dv(a);}
function N6(a,b){Ee(a,b);}
var Gc=C(O);
function Wh(a){var b=new Gc();QW(b,a);return b;}
function V0(){var a=new Gc();Ph(a);return a;}
function QW(a,b){D0(a,b);}
function Ph(a){Bq(a);}
function Kl(){B.call(this);this.dR=null;}
function Xh(a){var b=new Kl();S0(b,a);return b;}
function S0(a,b){E(a);a.dR=b;}
function X6(b){return Xh(b);}
function T7(a,b){a.dR.bj(b);}
function TG(a,b){a.dR.hf(b);}
function CD(){var a=this;B.call(a);a.hc=null;a.eX=0;}
function Fw(a,b,c){E(a);a.hc=b;a.eX=c;}
function Bl(a){return a.eX;}
function B8(){var a=this;B.call(a);a.I=null;a.b6=0.0;a.bO=null;}
function AAs(){var a=new B8();Ff(a);return a;}
function Ff(a){E(a);}
function IB(){var a=this;B8.call(a);a.ey=null;a.eo=null;a.fo=0.0;a.ik=null;}
function U_(a,b,c,d){var e=new IB();UJ(e,a,b,c,d);return e;}
function UJ(a,b,c,d,e){a.ik=b;a.ey=c;a.eo=d;a.fo=e;Ff(a);a.I=a.ey;a.bO=a.eo;a.b6=a.fo;}
function H$(){var a=this;B.call(a);a.M=null;a.en=null;a.u=null;a.x=0;}
function XD(){var a=new H$();UD(a);return a;}
function UD(a){E(a);a.u=Bx();}
var Kt=C();
function Jy(b){return Math.sin(b);}
function Nv(b){return Math.cos(b);}
function FL(b){return Math.sqrt(b);}
function So(b){return Math.floor(b);}
function C9(b,c){return Math.pow(b,c);}
function BH(b,c){if(b<c)c=b;return c;}
function B_(b,c){if(b>c)c=b;return c;}
function Kg(b,c){if(b<c)c=b;return c;}
function TA(b){if(b<=0.0)b= -b;return b;}
function Ew(){X.call(this);this.h2=0;}
var AAt=null;function SU(){SU=L(Ew);M5();}
function X8(a){var b=new Ew();I6(b,a);return b;}
function I6(a,b){SU();B$(a);a.h2=b;}
function K5(b){SU();return X8(b);}
function M5(){AAt=F($rt_bytecls());}
function Fp(){var a=this;B.call(a);a.g8=null;a.gh=null;}
var AAu=null;function EU(){EU=L(Fp);NR();}
function W_(a){var b=new Fp();GM(b,a);return b;}
function GM(a,b){EU();E(a);a.g8=b;}
function Ll(){EU();return Df(D(91));}
function Df(b){var c,d,e;EU();c=AAu.cJ(b);if(c===null){c=W_(b);d=b.iI(46);if(d>=0){e=b.bN(0,d);c.gh=Df(e);}else if(!b.ch())c.gh=Df(D(92));AAu.bn(b,c);}return c;}
function MP(a,b){var c;c=Jb(a,b.cR(),b.gk());if(C6(b.fG())>=C6(ZB))JE($rt_ustr(c));else if(C6(b.fG())<C6(Ze))F7($rt_ustr(c));else Jn($rt_ustr(c));}
function Jb(a,b,c){var d,e,f,g,h,i,j;if(c===null)return b;d=K();e=0;a:{while(true){if(e>=b.c())break a;f=b.ee(123,e);if(f<0)break a;g=f+1|0;h=Hm(g,b);if(h<0)break;if(b.o(h)!=125){d.fm(b,e,h);e=h;continue;}i=c.data;j=E8(b.bN(g,h));if(j>=i.length){d.fm(b,e,h);e=h;continue;}d.U(i[j]);e=h+1|0;}}return d.d();}
function Hm(b,c){var d,e;EU();while(true){if(b>=c.c())return (-1);d=b+1|0;e=c.o(b);if(e<=48)break;if(e>=57)break;b=d;}return d;}
function S$(a,b,c){a.g5(Xw(b,c));}
function NR(){AAu=UL();}
function F7(b){if(console){console.info(b);}}
function Jn(b){if(console){console.warn(b);}}
function JE(b){if(console){console.error(b);}}
function Eh(){var a=this;B.call(a);a.fs=null;a.e6=null;a.gC=BL;a.g7=null;a.iX=BL;a.hm=BL;}
var AAv=BL;function Xw(a,b){var c=new Eh();TB(c,a,b);return c;}
function TB(a,b,c){var d;E(a);a.fs=b;a.e6=c;a.gC=I0();d=AAv;AAv=T(d,H(1));a.iX=d;a.hm=(Bx()).g9();}
function OX(a){return a.fs;}
function PJ(a){return a.e6;}
function Pe(a){return a.g7;}
function F3(){B.call(this);this.dm=null;}
function Wp(a){var b=new F3();LW(b,a);return b;}
function LW(a,b){a.dm=b;E(a);}
function Ts(a,b){a.dm.dv(b);}
function Qs(a,b){a.dm.cK(b);}
var Cc=C();
var AAo=null;var AAn=null;var AAc=null;var ZQ=null;var ZS=null;function BG(){BG=L(Cc);Oi();}
function Oi(){AAn=U1();AAc=Vk();ZQ=Xe();ZS=WW();}
var JF=C(Bo);
function R1(a){var b=new JF();OS(b,a);return b;}
function OS(a,b){HR(a,b,null,0,0);}
function HB(){DW.call(this);this.eG=null;}
function Vi(a){var b=new HB();R$(b,a);return b;}
function R$(a,b){Im(a,b);}
function Ra(a){return a.eG;}
function Q_(a,b){a.eG=b;}
var Ie=C();
function Wl(){var a=new Ie();LU(a);return a;}
function LU(a){E(a);}
function On(a,b){return IV(a,b);}
function IV(a,b){return QB(b);}
function Jv(){var a=this;Cl.call(a);a.eP=null;a.d_=null;a.er=null;a.eS=null;}
function Wo(a,b,c,d){var e=new Jv();UA(e,a,b,c,d);return e;}
function UA(a,b,c,d,e){a.eP=b;a.d_=c;a.er=d;a.eS=e;FQ(a);a.dH=a.eP;a.dA=a.d_;a.c0=a.er;a.cZ=a.eS;}
var Ke=C(O);
function V7(){var a=new Ke();Rz(a);return a;}
function Rz(a){Bq(a);}
var Js=C();
function Pj(b){var c,d,e,f;c=b.data;d=c.length;e=0;while(true){if(e>=d)return null;f=c[e];if(f!==null)break;e=e+1|0;}return f;}
function Jw(){var a=this;Cl.call(a);a.fq=null;a.d6=null;a.fr=null;a.ep=null;}
function WE(a,b,c,d){var e=new Jw();ST(e,a,b,c,d);return e;}
function ST(a,b,c,d,e){a.fq=b;a.d6=c;a.fr=d;a.ep=e;FQ(a);a.dH=a.fq;a.dA=a.d6;a.c0=a.fr;a.cZ=a.ep;}
var HQ=C();
function Sg(b){if(!(b instanceof BO))return null;return b;}
function PS(b){if(b===null)return null;if(b.ej(D(74)))return CT(1);if(!b.ej(D(73)))return null;return CT(0);}
function Tj(b){var c;c=Sg(b);if(c===null&&b!==null)return PS(b.d());return c;}
var K0=C(DR);
function Wr(a,b){var c=new K0();Nn(c,a,b);return c;}
function Nn(a,b,c){K6(a,b,c);}
function RM(a,b){var c,d,e,f,g;c=DC(b);d=0;while(d<b){e=c.data;f=a.e0;g=a.dd;a.dd=g+1|0;e[d]=f[g];d=d+1|0;}return c;}
function DM(){var a=this;B.call(a);a.b7=0;a.eA=0;}
var Zz=null;var Zy=null;function Bs(){Bs=L(DM);Qt();}
function Hs(a,b){var c=new DM();Ih(c,a,b);return c;}
function Ih(a,b,c){Bs();E(a);a.b7=b;a.eA=c;}
function MN(a){return a.b7?0:1;}
function R9(a){return a.b7!=1?0:1;}
function Uk(a){return !a.h5()&&!a.fH()?0:1;}
function Sd(a){return a.b7!=2?0:1;}
function Sq(a){return a.b7!=3?0:1;}
function Q2(a){if(a.is())return a.eA;G(W3());}
function Dn(b){Bs();return Hs(2,b);}
function Qt(){Zz=Hs(0,0);Zy=Hs(1,0);}
var Dy=C();
var AAw=null;var AAx=null;function Eq(){Eq=L(Dy);Si();}
function KH(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;Eq();d=$rt_doubleToLongBits(b);c.eg=CV(Bj(d,Q(0, 2147483648)),BL)?0:1;e=Bj(d,Q(4294967295, 1048575));f=DL(C5(d,52))&2047;if(CV(e,BL)&&!f){c.cQ=BL;c.c3=0;return;}g=0;if(f)h=WN(e,Q(0, 1048576));else{h=Cb(e,1);while(CV(Bj(h,Q(0, 1048576)),BL)){h=Cb(h,1);f=f+(-1)|0;g=g+1|0;}}i=Nc(AAx,f);if(i<0)i=( -i|0)-2|0;j=f-AAx.data[i]|0;k=12+j|0;l=FD(h,AAw.data[i],k);if(IM(l,Q(2808348672, 232830643))){i=i+1|0;m=f-AAx.data[i]|0;k=12+m|0;l=FD(h,AAw.data[i],k);}n=BZ(AAw.data[i],
(63-k|0)-g|0);o=C5(T(n,H(1)),1);p=C5(n,1);if(CV(h,Q(0, 1048576)))p=C5(p,2);q=J9(l,p);r=Li(l,o);m=XX(q,r);h=m>0?N(Bd(l,q),q):m<0?T(N(Bd(l,r),r),r):N(Bd(T(l,Bd(r,H(2))),r),r);if(IM(h,Q(2808348672, 232830643))){i=i+1|0;h=Bd(h,H(10));}else if(I3(h,Q(1569325056, 23283064))){i=i+(-1)|0;h=N(h,H(10));}c.cQ=h;c.c3=i-330|0;}
function J9(b,c){var d,e;Eq();d=H(10);while(CW(d,c)){d=N(d,H(10));}e=De(b,d);if(IM(e,Bd(c,H(2))))d=Bd(d,H(10));return d;}
function Li(b,c){var d,e;Eq();d=H(1);while(CW(d,c)){d=N(d,H(10));}e=De(b,d);if(IF(Xp(d,e),Bd(c,H(2))))d=Bd(d,H(10));return d;}
function FD(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;Eq();e=Bj(b,H(65535));f=Bj(BZ(b,16),H(65535));g=Bj(BZ(b,32),H(65535));h=Bj(BZ(b,48),H(65535));i=Bj(c,H(65535));j=Bj(BZ(c,16),H(65535));k=Bj(BZ(c,32),H(65535));l=Bj(BZ(c,48),H(65535));m=T(T(N(k,e),N(j,f)),N(i,g));n=T(T(T(N(l,e),N(k,f)),N(j,g)),N(i,h));o=T(T(N(l,f),N(k,g)),N(j,h));p=T(N(l,g),N(k,h));q=N(l,h);r=T(T(Cb(q,32+d|0),Cb(p,16+d|0)),Cb(o,d));s=d>16?T(r,Cb(n,d-16|0)):T(r,BZ(n,16-d|0));s=T(s,BZ(m,32-d|0));return s;}
function Si(){var b,c,d,e,f,g,h,i,j,k,l;AAw=Xa(660);AAx=E1(660);b=Q(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AAw.data;g=d+330|0;f[g]=DP(e,H(80));AAx.data[g]=c;e=DP(e,H(10));h=GR(e,H(10));while(CW(e,b)&&CV(Bj(e,Q(0, 2147483648)),BL)){e=Cb(e,1);c=c+1|0;h=Cb(h,1);}e=T(e,Bd(h,H(10)));d=d+1|0;}i=Q(3435973836, 214748364);j=1023;d=0;while(d<330){k=0;e=b;while(IF(e,i)){e=C5(e,1);k=k+1|0;j=j+(-1)|0;}h=N(e,H(10));if(k<=0)b=h;else{l=Bj(b,H((1<<k)-1|0));b=T(h,C5(N(l,H(10)),k));}f=AAw.data;g=(330-d|0)-1|0;f[g]
=DP(b,H(80));AAx.data[g]=j;d=d+1|0;}}
var G0=C();
function Hy(b){var c,d,e;c=WZ(b.r());d=b.t();while(d.y()){e=d.s();if(Bh(e,B2))c.bx(FI(e));else if(!Bh(e,Ch))c.bx(e);else c.bx(Hy(e));}return c;}
function FI(b){var c,d,e,f,g,h;c=VP(b.r());d=(b.fZ()).t();while(d.y()){e=d.s();f=e.bR();if(Bh(f,B2)){g=f;c.bn(e.br(),FI(g));}else if(!Bh(f,Ch))c.bn(e.br(),f);else{h=f;c.bn(e.br(),Hy(h));}}return c;}
function Ib(){var a=this;B8.call(a);a.f0=null;a.fc=null;a.fa=0.0;a.hv=null;}
function Xc(a,b,c,d){var e=new Ib();OQ(e,a,b,c,d);return e;}
function OQ(a,b,c,d,e){a.hv=b;a.f0=c;a.fc=d;a.fa=e;Ff(a);a.I=a.f0;a.bO=a.fc;a.b6=a.fa;}
var Ki=C(CF);
var Ga=C();
function Wj(){var a=new Ga();Nl(a);return a;}
function Nl(a){E(a);}
function Tb(a,b){return Hh(a,b);}
function Hh(a,b){return UV(b);}
var Bt=C(CD);
var YY=null;var Y0=null;var YZ=null;var Zk=null;var Zj=null;var Zh=null;var Zi=null;var AAy=null;function Z(){Z=L(Bt);Ro();}
function Cj(a,b){var c=new Bt();Lp(c,a,b);return c;}
function E9(){Z();return AAy.dS();}
function Lp(a,b,c){Z();Fw(a,b,c);}
function F5(){Z();return C1(Bt,[YY,Y0,YZ,Zk,Zj,Zh,Zi]);}
function Ro(){YY=Cj(D(93),0);Y0=Cj(D(94),1);YZ=Cj(D(95),2);Zk=Cj(D(96),3);Zj=Cj(D(97),4);Zh=Cj(D(98),5);Zi=Cj(D(99),6);AAy=F5();}
function K8(){var a=this;B.call(a);a.J=null;a.eU=null;a.ft=null;a.e1=null;a.d7=null;a.ea=null;}
function V1(a){var b=new K8();Sj(b,a);return b;}
function Sj(a,b){var c;E(a);a.J=b;c=b.exports.memory.buffer;a.eU=new Int8Array(c);a.ft=new Int16Array(c);a.e1=new Int32Array(c);a.d7=new Float32Array(c);a.ea=new Float64Array(c);}
function OI(a,b){return Wr(a,b);}
function Mn(a,b,c){return M$(IW(a,b,c));}
function IW(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=c.data;switch(d.length){case 0:return a.J.exports[$rt_ustr(b)]();case 1:e=a.J;f=I(d[0]);return e.exports[$rt_ustr(b)](f);case 2:e=a.J;f=I(d[0]);g=I(d[1]);return e.exports[$rt_ustr(b)](f,g);case 3:e=a.J;f=I(d[0]);g=I(d[1]);h=I(d[2]);return e.exports[$rt_ustr(b)](f,g,h);case 4:e=a.J;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);return e.exports[$rt_ustr(b)](f,g,h,i);case 5:e=a.J;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);return e.exports[$rt_ustr(b)](f,g,h,i,j);case 6:e
=a.J;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k);case 7:e=a.J;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);l=I(d[6]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l);case 8:e=a.J;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);l=I(d[6]);m=I(d[7]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l,m);case 9:e=a.J;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);l=I(d[6]);m=I(d[7]);n=I(d[8]);return e.exports[$rt_ustr(b)](f,g,
h,i,j,k,l,m,n);default:}return null;}
function I(b){return O5(b);}
function Ig(){var a=this;B.call(a);a.eH=null;a.fV=0;}
function Wz(a){var b=new Ig();PY(b,a);return b;}
function PY(a,b){E(a);a.eH=b;}
var If=C(Bm);
function CH(){B.call(this);this.dq=null;}
function VY(a){var b=new CH();Pz(b,a);return b;}
function Pz(a,b){E(a);a.dq=b;}
var IO=C(Bm);
var JH=C(O);
function Xt(){var a=new JH();SE(a);return a;}
function SE(a){Bq(a);}
var B5=C(CD);
var Zc=null;var Z3=null;var Zd=null;var AAz=null;function DF(){DF=L(B5);Pv();}
function I9(a,b){var c=new B5();Kz(c,a,b);return c;}
function Kz(a,b,c){DF();Fw(a,b,c);}
function H7(){DF();return C1(B5,[Zc,Z3,Zd]);}
function Pv(){Zc=I9(D(100),0);Z3=I9(D(101),1);Zd=I9(D(102),2);AAz=H7();}
var ID=C();
function W0(){var a=new ID();LP(a);return a;}
function LP(a){E(a);}
function K3(){B.call(this);this.fy=null;}
function W7(a){var b=new K3();OZ(b,a);return b;}
function OZ(a,b){E(a);a.fy=b;}
function SW(a,b){Mj(a.fy,b);}
function Sw(a,b){a.dz(b);}
function GO(){BQ.call(this);this.dK=null;}
function Vm(a){var b=new GO();OU(b,a);return b;}
function OU(a,b){D3(a);a.dK=b;}
function LK(a,b){return a.dK.data[b];}
function NU(a){return a.dK.data.length;}
var BN=C();
var AAA=null;var AAB=null;var AAC=null;var AAD=null;var AAE=null;var AAF=null;var AAG=null;function RD(){RD=L(BN);ME();}
function Hn(b,c){var d,e,f;RD();if(c===null)c=AAF;d=U(B,b.r());b.gw(d);QH(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;b.g2(e,f[e]);e=e+1|0;}}
function Km(b,c){RD();return b!==null?b.gg(c): -c.gg(b)|0;}
function ME(){AAA=XJ();AAB=Wy();AAC=XN();AAD=VO();AAE=XU();AAF=Ww();AAG=X3();}
var Gt=C();
function MG(b){return b!==null?b.d():null;}
function Qq(b){return b!==null?b.c():0;}
function QZ(b){return Qq(b)?0:1;}
$rt_packages([-1,"dev",0,"webfx",1,"platform",2,"webassembly",3,"spi",2,"json",5,"spi"]);
$rt_metadata([B,0,0,[],0,3,0,0,["jW",Yh(Cr),"kb",Yh(EG),"b2",Yh(PM),"D",Yi(L5),"d",Yh(OV),"jd",Yh(Dc),"dS",Yh(Uw)],Bo,0,B,[],0,3,0,0,["kn",Yl(HR),"cv",Yh(Q5),"cR",Yh(PX)],BC,0,Bo,[],0,3,0,0,["a",Yh(Dv),"k",Yi(Ee)],O,0,BC,[],0,3,0,0,["a",Yh(Bq),"k",Yi(D0)],Dx,0,O,[],0,3,0,0,["a",Yh(HU),"k",Yi(SX)],G5,0,B,[],0,3,0,0,["jg",Yj(Rm),"ii",Yh(Qo),"dN",Yi(Qz),"iN",Yi(Rt),"gz",Yi(UT)],Bv,0,B,[],3,3,0,0,0,X,0,B,[Bv],1,3,0,0,["a",Yh(B$)],Bb,0,B,[],3,3,0,0,0,Ct,0,X,[Bb],0,3,0,BW,["bB",Yi(IG),"N",Yh(NG),"d",Yh(SH)],I1,0,
BC,[],0,3,0,0,["a",Yh(Tn)],Dq,0,B,[],3,3,0,0,0,FN,0,B,[Dq],3,3,0,0,["bj",Yi(M0)],B4,0,B,[],0,0,0,PO,0,Dp,0,B,[],3,3,0,0,["bf",Yi(Qg),"gT",Yi(OY),"iH",Yi(PZ),"ib",Yi(L4)],FH,0,B,[Dp],3,3,0,0,["bf",Yi(Qg),"gT",Yi(OY),"iH",Yi(PZ),"ib",Yi(L4)],E3,0,B,[Dp],3,3,0,0,["bf",Yi(Qg),"gT",Yi(OY),"iH",Yi(PZ),"ib",Yi(L4),"ed",Yh(Ti)],CS,"JsonProvider",6,B,[FH,E3],3,3,0,0,["bf",Yi(Qg),"gT",Yi(OY),"iH",Yi(PZ),"ib",Yi(L4),"ed",Yh(Ti),"hE",Yh(UF)],CG,0,B,[CS],3,3,0,0,["bf",Yi(Qg),"gT",Yi(OY),"iH",Yi(PZ),"ib",Yi(L4),"ed",Yh(Ti),
"hE",Yh(UF)],FP,0,X,[Bb],0,3,0,Jc,["kW",Yi(I8),"N",Yh(Mv),"d",Yh(Rp)],B2,0,B,[],3,3,0,0,0,ED,0,B,[],3,3,0,0,0,B3,0,B,[ED],0,3,0,FG,["k",Yi(HD),"jm",Yj(E4),"g9",Yh(LT)],Bf,0,B,[],3,3,0,0,0,EY,0,B,[Bf],3,3,0,0,0,JJ,0,B,[EY],1,3,0,0,["ko",Yi(Uj),"kc",Yh(O$)],Da,0,B,[],3,3,0,0,0,Hw,0,B,[Da],0,3,0,0,["a",Yh(QP),"fO",Yh(Od),"iQ",Yh(Iu)],FU,0,B,[],32,0,0,U3,0,GA,0,B,[Bf],1,3,0,0,0,Jj,0,B,[Dq],0,3,0,0,["i_",Yi(Qp),"et",Yi(RL),"kN",Yi(Jm)],Fe,0,B,[],3,3,0,0,0,Jf,0,B,[Fe],0,3,0,0,["i_",Yi(Ue),"g4",Yi(Oz)],BK,0,B,[],1,
3,0,0,["a",Yh(FE)],E$,0,B,[],3,3,0,0,0,Fk,0,B,[E$],3,3,0,0,["h1",Yi(QU)],Dh,0,B,[Fk],3,3,0,0,["h1",Yi(QU)],Ck,0,B,[Dh],1,0,0,0,["h1",Yi(QU),"a",Yh(E2),"kj",Yj(EP),"j_",Yj(DO),"fh",Yj(Is)],Ce,0,Ck,[],0,0,0,Db,["h1",Yi(QU),"a",Yh(DY),"hO",Yh(Td),"h_",Yi(N2),"bF",Yi(HV),"dv",Yi(Gd),"cK",Yi(Uz),"d",Yh(SD),"iV",Yj(OE)],DV,0,Ce,[],1,0,0,0,["h1",Yi(QU),"a",Yh(Ls)],C4,0,B,[],3,3,0,0,0,CA,0,Bo,[],0,3,0,0,["k",Yi(IE),"cw",Yi(Hi)],CF,0,CA,[],0,3,0,0,["k",Yi(Gq)],C_,0,B,[],3,3,0,0,["gN",Yj(Uf),"i0",Yi(UW),"h7",Yi(Oo),"dQ",
Yi(Un),"dJ",Yj(R7)],CR,0,B,[C_,CG],3,3,0,0,["gN",Yj(Uf),"i0",Yi(UW),"h7",Yi(Oo),"dQ",Yi(Un),"dJ",Yj(R7),"bf",Yi(Qg),"gT",Yi(OY),"iH",Yi(PZ),"ib",Yi(L4),"ed",Yh(Ti),"hE",Yh(UF),"i2",Yi(Uq),"c_",Yi(Nh)],D$,0,B,[Bf],3,0,0,0,0,KQ,0,Dx,[],0,3,0,0,["a",Yh(Rf)],DZ,0,B,[],4,3,0,Tz,0,J$,0,B,[],4,3,0,0,0,FJ,0,B,[],3,3,0,0,0]);
$rt_metadata([Eu,0,B,[FJ],3,3,0,0,0,ET,0,B,[],3,3,0,0,0,Cz,0,B,[Eu,ET],1,3,0,0,["a",Yh(D8),"cm",Yk(MH)],EL,0,Cz,[],0,3,0,TF,["gX",Yi(NP)],Fb,0,B,[],3,3,0,0,0,Bm,0,B,[Bf],1,3,0,0,0,GQ,0,Bm,[],1,3,0,0,0,It,0,B,[],4,0,0,0,["jv",Yj(KA),"ke",Yh(Kr),"kt",Yh(IQ)],Cy,0,B,[Bv,C4],0,0,0,0,["a",Yh(EM),"bB",Yi(Et),"k",Yi(K1),"kJ",Yi(Iy),"kz",Yi(KD),"kX",Yi(EF),"ct",Yj(Fa),"kG",Yi(Hp),"eh",Yj(Np),"gJ",Yk(Tc),"jY",Yi(Kj),"ex",Yj(Lu),"id",Yk(Mc),"j3",Yi(Jr),"d0",Yj(IC),"jj",Yi(K7),"fn",Yj(KM),"e5",Yj(Jd),"bG",Yi(EH),"d",Yh(El),
"c",Yh(Kb),"kg",Yk(HE),"dX",Yl(Gs),"el",Yl(JQ),"ec",Yi(JL)],C0,0,B,[],3,3,0,0,0,Gf,0,Cy,[C0],0,3,0,0,["bB",Yi(TX),"a",Yh(Tv),"k",Yi(Mm),"U",Yi(Y),"e",Yi(Ml),"w",Yi(BA),"iw",Yi(R3),"hP",Yi(PQ),"j",Yi(Gg),"fm",Yk(SR),"hY",Yj(Rd),"ht",Yj(Tl),"hK",Yl(M8),"hl",Yj(T3),"iC",Yj(NF),"hd",Yj(Ud),"ec",Yi(Um),"el",Yl(QC),"dX",Yl(Op),"c",Yh(Oj),"d",Yh(Bg),"bG",Yi(Us),"e5",Yj(Mr),"fn",Yj(LS),"d0",Yj(Qw),"ex",Yj(Pg),"ct",Yj(UG)],FB,0,B,[],4,3,0,UK,0,JP,0,O,[],0,3,0,0,["a",Yh(Ug)],He,0,CA,[],0,3,0,0,["cw",Yi(Mo)],Fv,0,B,[C_],
3,3,0,0,["gN",Yj(Uf),"i0",Yi(UW),"h7",Yi(Oo),"dQ",Yi(Un),"dJ",Yj(R7)],CM,0,B,[CR,Fv],3,3,0,0,["gN",Yj(Uf),"i0",Yi(UW),"h7",Yi(Oo),"dQ",Yi(Un),"dJ",Yj(R7),"bf",Yi(Qg),"gT",Yi(OY),"iH",Yi(PZ),"ib",Yi(L4),"ed",Yh(Ti),"hE",Yh(UF),"i2",Yi(Uq),"c_",Yi(Nh),"hD",Yj(Nt)],Cn,0,B,[B2],1,3,0,0,["a",Yh(E_),"d",Yh(Or)],Cp,0,B,[],3,3,0,0,0,D4,0,Cn,[Cp,Bv],0,3,0,0,["c5",Yi(R6),"a",Yh(IX),"bB",Yi(Eb),"j1",Yj(KG),"cJ",Yi(Sf),"kl",Yi(GG),"kr",Yk(CX),"kI",Yh(C8),"bn",Yj(MX),"dC",Yj(RU),"bZ",Yk(O3),"hA",Yi(RK),"cp",Yh(Pw),"kv",
Yi(Hx),"r",Yh(Pr)],G1,0,D4,[B2],0,3,0,0,["a",Yh(NJ),"bB",Yi(Pi),"c5",Yi(OC),"cJ",Yi(Mh),"bZ",Yk(T4),"bn",Yj(Sy),"dC",Yj(T5),"dy",Yi(L7),"fZ",Yh(RV),"ja",Yh(PK),"gD",Yi(PA),"ix",Yi(Mq)],DS,0,B,[],3,3,0,0,["hz",Yi(MJ)],C3,0,B,[CG,DS],3,3,0,0,["bf",Yi(Qg),"gT",Yi(OY),"iH",Yi(PZ),"ib",Yi(L4),"ed",Yh(Ti),"hE",Yh(UF),"hz",Yi(MJ),"iW",Yi(Q9)],CP,0,B,[CG],3,3,0,0,["bf",Yi(Qg),"gT",Yi(OY),"iH",Yi(PZ),"ib",Yi(L4),"ed",Yh(Ti),"hE",Yh(UF)],Ek,0,B,[DS],3,3,0,0,["hz",Yi(MJ)],C7,0,B,[C3,CP,Ek],3,3,0,0,["bf",Yi(Qg),"gT",Yi(OY),
"iH",Yi(PZ),"ib",Yi(L4),"ed",Yh(Ti),"hE",Yh(UF),"hz",Yi(MJ),"iW",Yi(Q9)],Dm,0,B,[CP],3,3,0,0,["bf",Yi(Qg),"gT",Yi(OY),"iH",Yi(PZ),"ib",Yi(L4),"ed",Yh(Ti),"hE",Yh(UF),"dj",Yh(T_),"bK",Yi(Pp),"dc",Yi(Mw),"cr",Yi(MU)],DW,0,B,[C7,Dm],1,3,0,0,["bf",Yi(Qg),"gT",Yi(OY),"iH",Yi(PZ),"ib",Yi(L4),"ed",Yh(Ti),"hE",Yh(UF),"hz",Yi(MJ),"iW",Yi(Q9),"dj",Yh(T_),"bK",Yi(Pp),"dc",Yi(Mw),"cr",Yi(MU),"ie",Yi(Im),"cU",Yi(Qr),"r",Yh(MV)],Hr,0,Cy,[C0],0,3,0,0,["a",Yh(Sv),"gx",Yi(PV),"ic",Yj(PW),"d",Yh(OG),"bG",Yi(O0),"ct",Yj(Md)],DD,
0,B,[],3,3,0,0,0,DR,0,B,[DD],0,0,0,0,["gs",Yj(K6),"ge",Yi(Ov)],Cx,0,B,[],1,3,0,0,["bB",Yi(Fg),"kP",Yh(CN),"ji",Yi(JM),"jR",Yh(HN),"j4",Yh(BY),"jQ",Yh(B9)],Dl,0,B,[],3,3,0,0,0,DJ,0,B,[Dl],3,3,0,0,0,Cv,0,B,[],0,0,0,0,["cn",Yi(Ei),"y",Yh(OP),"kB",Yh(K_),"jl",Yh(FF)],BV,0,B,[],3,3,0,0,0,JG,0,Cv,[BV],0,0,0,0,["cn",Yi(Q4),"h0",Yh(Ow),"s",Yh(SP)],Eo,0,B,[],3,3,0,0,0,Hj,0,B,[Eo],4,0,0,0,["dx",Yi(LX),"gU",Yi(Q3)],DG,0,B,[Dl],0,3,0,0,["a",Yh(F1),"eR",Yi(GU),"cX",Yi(Rw),"c4",Yi(P4)],Ds,0,DG,[DJ],1,3,0,0,["a",Yh(Jo),"eR",
Yi(NK),"jo",Yi(HT),"dT",Yi(Tu)],Lx,0,Ds,[],0,3,0,0,["a",Yh(QA),"i3",Yh(Ub)],Ea,0,B,[],3,3,0,0,0,D5,0,B,[Ea,Cp],0,0,0,0,["kS",Yj(Lq),"br",Yh(S2),"bR",Yh(T0)],CK,0,D5,[],0,0,0,0,["hs",Yj(HF)],Fq,0,CK,[],4,0,0,0,["hs",Yj(RR)],H9,0,B,[],0,3,0,0,["hi",Yk(Re)],Cw,0,CF,[],0,3,0,0,["k",Yi(Ft)],JR,0,Cw,[],0,3,0,0,["k",Yi(Pl)],ER,0,BC,[],0,3,0,0,0,EE,0,B,[],3,3,0,0,0]);
$rt_metadata([EC,0,B,[Bf],3,0,0,0,0,CB,0,B,[],3,3,0,0,0,Hf,0,B,[CB],0,3,0,0,["a",Yh(Oc)],GZ,0,B,[BV],0,0,0,0,["jX",Yi(Ot),"y",Yh(MT),"s",Yh(RN)],Dt,0,Cn,[],1,0,0,0,["a",Yh(JT)],E5,0,B,[],32,0,0,Xr,0,DU,0,O,[],0,3,0,0,["a",Yh(F_)],Lm,0,DU,[],0,3,0,0,["a",Yh(TD)],GK,0,B,[],4,3,0,0,0,E6,0,B,[BV],3,3,0,0,0,I5,0,Bm,[],1,3,0,0,0,I4,0,B,[BV],0,0,0,0,["kK",Yi(N7),"y",Yh(Tm),"s",Yh(NV)],Hk,0,B,[],0,3,0,0,["a",Yh(OK)],Iw,0,B,[],4,0,0,0,0,G_,0,Cw,[],0,3,0,0,["k",Yi(O2)],DQ,0,B,[],3,3,0,0,0,CO,0,B,[DQ],3,3,0,0,0,Cf,0,B,
[CO],1,3,0,0,["a",Yh(Fx),"e4",Yh(RH),"gw",Yi(QJ)],Iz,0,B,[],4,3,0,0,0,FS,0,X,[Bb],0,3,0,RI,["jt",Yi(HK)],Es,0,B,[],3,3,0,0,0,Lo,0,B,[Es],0,3,0,0,["a",Yh(Ol)],FW,0,B,[],3,3,0,0,0,Hq,0,B,[],4,3,0,0,0,H_,0,B,[],4,0,0,0,0,Cl,0,B,[],0,3,0,0,["a",Yh(FQ)],Dw,0,B,[],3,3,0,0,0,B0,0,B,[],3,3,0,0,0,Gz,0,DV,[B0],0,0,0,0,["h1",Yi(QU),"jF",Yj(PP),"bI",Yi(Rk),"b3",Yi(OM)],HO,0,B,[DQ],4,3,0,0,["t",Yh(Hv)],HL,0,B,[],4,3,0,0,0,BP,0,B,[],1,3,0,0,["a",Yh(DE)],Gr,0,B,[Dw],0,3,0,0,["kL",Yl(Rq),"dP",Yh(Th)],JA,0,B,[],4,3,0,0,0,Lj,
0,Ck,[],4,3,0,0,["h1",Yi(QU),"cw",Yi(Tq),"bF",Yi(Oy)],By,0,B,[],0,3,0,0,["a",Yh(CY)],JY,0,By,[],0,0,0,0,["kM",Yj(Om)],C$,0,B,[],1,3,0,0,["ky",Yl(Ky),"g6",Yk(JU),"jA",Yi(FY),"iy",Yi(TM),"kR",Yi(Ks),"hZ",Yi(S_),"kq",Yk(Hc),"jy",Yi(Go),"gF",Yi(L2)],EX,0,B,[Bf],3,0,0,0,0,Jg,0,B,[EX],0,3,0,0,["kx",Yi(RB),"iF",Yj(Uc),"jZ",Yj(N3)],Je,0,B,[D$],0,3,0,0,["iP",Yi(SL),"dz",Yi(M3),"fz",Yi(SJ)],Em,0,B,[Bf],3,0,0,0,0,Ji,0,B,[Em],0,3,0,0,["jz",Yi(LQ),"ip",Yi(Qf),"fz",Yi(UN)],DB,0,Cx,[Bb],1,3,0,0,["jc",function(b,c,d,e,f){G2(this,
b,c,d,e,f);},"fb",Yk(Ss),"jK",Yi(JK),"j5",Yh(EJ)],Kf,0,DB,[],0,0,0,0,["js",function(b,c,d,e,f,g,h){ML(this,b,c,d,e,f,g,h);},"gu",Yh(R8)],Ch,0,B,[CO],3,3,0,0,["gL",Yi(P0)],BQ,0,Cf,[Ch],1,3,0,0,["gL",Yi(P0),"a",Yh(D3),"t",Yh(QV)],CQ,0,B,[],3,3,0,0,0,Do,0,BQ,[Cp,Bv,CQ],0,3,0,0,["gL",Yi(P0),"a",Yh(JC),"bB",Yi(Ed),"kU",Yi(Py),"bG",Yi(Nf),"cW",Yi(PF),"r",Yh(N5),"g2",Yj(MF),"bx",Yi(Sx),"d",Yh(Ok)],Fd,0,Do,[B0],0,0,0,0,["gL",Yi(P0),"bI",Yi(Ox),"b3",Yi(L3)]]);
$rt_metadata([H4,0,B,[],0,3,0,0,0,S,0,B,[],3,3,0,0,0,Bw,0,B,[Bv],0,3,0,Mt,["c1",Yj(KX),"N",Yh(C6)],D1,0,B,[CM,Dm],1,3,0,0,["gN",Yj(Uf),"i0",Yi(UW),"h7",Yi(Oo),"dQ",Yi(Un),"dJ",Yj(R7),"bf",Yi(Qg),"gT",Yi(OY),"iH",Yi(PZ),"ib",Yi(L4),"ed",Yh(Ti),"hE",Yh(UF),"i2",Yi(Uq),"c_",Yi(Nh),"hD",Yj(Nt),"dj",Yh(T_),"bK",Yi(Pp),"dc",Yi(Mw),"cr",Yi(MU),"a",Yh(Ip),"hy",Yi(G4),"gy",Yh(Ri),"hx",Yh(QK),"fB",Yh(TN),"cH",Yi(RJ),"gE",Yj(Rs),"g1",Yh(Q8),"d",Yh(TH),"f4",Yj(N$)],HM,0,B,[],4,3,0,0,0,Dj,0,B,[Bb],1,3,0,0,["kf",Yj(HZ)],CU,
0,B,[],0,3,0,Fz,["k",Yi(Ic)],BO,0,B,[Bv,Bb],0,3,0,En,["ki",Yi(HJ),"e_",Yh(R5),"d",Yh(NA),"D",Yi(M4)],Cu,0,O,[],0,3,0,0,["a",Yh(EO),"k",Yi(LE)],Ix,0,Cu,[],0,3,0,0,["k",Yi(Rn)],Ly,0,O,[],0,3,0,0,["a",Yh(MC)],F8,0,B,[CB],0,3,0,0,["ks",Yi(Q0),"fI",Yj(R2)],Jk,0,B,[Bf],1,3,0,0,0,Dk,0,Cz,[],0,3,0,0,["kh",Yi(Gv)],Fn,0,Dk,[],0,3,0,0,["km",Yj(J6),"cm",Yk(Nr),"e7",Yi(Pb)],P,0,B,[],0,3,0,0,["a",Yh(BJ)],KR,0,P,[],0,0,0,0,["bd",Yi(Qc)],KT,0,P,[],0,0,0,0,["bd",Yi(ON)],V,0,BK,[],0,3,0,0,["a",Yh(BM),"f2",Yi(Na),"ev",Yi(Ns)],KU,
0,V,[],0,0,0,0,["bd",Yi(TO)],KY,0,V,[],0,0,0,0,["bd",Yi(Mu)],KS,0,P,[],0,0,0,0,["bd",Yi(Me)],KV,0,V,[],0,0,0,0,["bd",Yi(O8)],FA,0,B,[],3,3,0,0,0,KO,0,V,[],0,0,0,0,["bd",Yi(S1)],KK,0,B,[S],0,3,0,0,["a",Yh(Ui),"g",Yi(TI),"bp",Yi(J8)],GF,0,B,[S],0,3,0,0,["a",Yh(P5),"g",Yi(LR),"bk",Yi(Jl)],KJ,0,B,[S],0,3,0,0,["a",Yh(PI),"g",Yi(Nj),"bk",Yi(GH)],GD,0,B,[S],0,3,0,0,["a",Yh(RO),"g",Yi(Qd),"bk",Yi(GS)],KW,0,V,[],0,0,0,0,["bd",Yi(Te)],KI,0,B,[S],0,3,0,0,["a",Yh(Ut),"g",Yi(Pc),"bk",Yi(LF)],KP,0,V,[],0,0,0,0,["bd",Yi(Qn)],E0,
0,B,[CO],3,3,0,0,0,BX,0,Cf,[E0],1,3,0,0,["a",Yh(Dz)],DA,0,BX,[],0,0,0,0,["kQ",Yi(Ia),"gG",Yh(Ps)],IY,0,DA,[],4,0,0,0,["cn",Yi(Px),"t",Yh(RS)],Lz,0,B,[S],0,3,0,0,["a",Yh(SB),"g",Yi(Ou),"bk",Yi(Io)],Ld,0,B,[S],0,3,0,0,["a",Yh(T8),"g",Yi(Sc),"bp",Yi(F$)],LB,0,B,[S],0,3,0,0,["a",Yh(MR),"g",Yi(O9),"bk",Yi(Jp)],Lc,0,B,[S],0,3,0,0,["a",Yh(PN),"g",Yi(Mk),"bp",Yi(H3)],LC,0,B,[S],0,3,0,0,["a",Yh(Qj),"g",Yi(S9),"bp",Yi(In)],GE,0,B,[S],0,3,0,0,["a",Yh(SC),"g",Yi(LN),"bp",Yi(HS)],Lb,0,B,[S],0,3,0,0,["a",Yh(UR),"g",Yi(QS),
"bk",Yi(HC)],LA,0,B,[S],0,3,0,0,["a",Yh(RC),"g",Yi(RX),"bp",Yi(Gh)],KL,0,B,[S],0,3,0,0,["a",Yh(Oh),"g",Yi(T6),"bp",Yi(KE)],GC,0,B,[S],0,3,0,0,["a",Yh(MB),"g",Yi(P7),"bp",Yi(G8)],H0,0,B,[],0,3,0,0,0,Fy,0,B,[FN,Dh],3,3,0,0,["bj",Yi(M0),"h1",Yi(QU)],Gy,0,Ce,[Fy,B0],4,3,0,0,["bj",Yi(M0),"h1",Yi(QU),"a",Yh(Sm),"ga",Yh(TP),"dv",Yi(RZ),"bF",Yi(PE),"fh",Yj(TW)],Ep,0,B,[],3,3,0,0,0]);
$rt_metadata([Ec,0,B,[],3,3,0,0,0,JO,0,B,[Ep,Ec],0,3,0,0,["d",Yh(LI),"fT",Yh(N8),"im",Yh(Uh),"gd",Yh(L0)],K$,0,Bm,[],1,3,0,0,0,Ca,0,X,[Bb],0,3,0,IU,["jf",Yi(EB),"hW",Yi(Jx),"D",Yi(M9)],D9,0,B,[DD],3,3,0,0,0,Hb,0,B,[],0,3,0,0,0,Ln,0,D1,[],0,3,0,0,["gN",Yj(Uf),"i0",Yi(UW),"h7",Yi(Oo),"dQ",Yi(Un),"dJ",Yj(R7),"bf",Yi(Qg),"gT",Yi(OY),"iH",Yi(PZ),"ib",Yi(L4),"ed",Yh(Ti),"hE",Yh(UF),"i2",Yi(Uq),"c_",Yi(Nh),"hD",Yj(Nt),"dj",Yh(T_),"bK",Yi(Pp),"dc",Yi(Mw),"cr",Yi(MU),"a",Yh(OL),"hy",Yi(P1),"cc",Yh(SA),"c$",Yi(RE),"i$",
Yh(Rc),"c7",Yi(Ru),"bv",Yh(SZ)],EN,0,B,[],4,3,0,0,0,J5,0,Cv,[BV],0,0,0,0,["cn",Yi(SI),"s",Yh(To)],Ku,0,B,[Da],0,3,0,0,["a",Yh(Rr),"fO",Yh(NC),"iQ",Yh(Kn)],La,0,B,[S],0,3,0,0,["a",Yh(PH),"g",Yi(Nw),"bk",Yi(J3)],II,0,B,[E6],0,0,0,0,["a",Yh(Q6)],DX,0,BQ,[CQ],1,0,0,0,["gL",Yi(P0),"a",Yh(H5)],IK,0,DX,[],0,0,0,0,["gL",Yi(P0),"a",Yh(Ni)],IH,0,B,[BV],0,0,0,0,["a",Yh(SM)],BS,0,B,[Bb],0,3,0,Bk,0,DT,0,BX,[],1,0,0,0,["a",Yh(J4)],IL,0,DT,[],0,0,0,0,["a",Yh(MS)],IJ,0,Dt,[],0,0,0,0,["a",Yh(LJ)],Hg,0,B,[B0],0,0,0,0,["kw",Yj(TK),
"bI",Yi(TR),"b3",Yi(T$)],K9,0,B,[Dw],0,3,0,0,["jx",Yi(SG),"dP",Yh(R4)],GX,0,B,[Bf],1,3,0,0,0,Co,0,B,[CP],1,0,0,0,["gT",Yi(OY),"iH",Yi(PZ),"ib",Yi(L4),"ed",Yh(Ti),"hE",Yh(UF),"dx",Yi(Eg),"fl",Yh(GN),"cr",Yi(Kd),"f5",Yh(LD),"fW",Yi(Gu),"fX",Yi(H6),"bf",Yi(I7),"e8",Yi(JN),"d",Yh(Ht),"bv",Yh(Ms),"dj",Yh(Qe),"c7",Yi(PT),"bK",Yi(Mp),"dc",Yi(Os)],Fo,0,Co,[C7],4,0,0,0,["gT",Yi(OY),"iH",Yi(PZ),"ib",Yi(L4),"ed",Yh(Ti),"hE",Yh(UF),"hz",Yi(MJ),"iW",Yi(Q9),"jk",Yi(MA),"j7",Yh(FK),"jG",Yi(K4),"r",Yh(RT),"cU",Yi(S6)],IP,0,
P,[],0,0,0,0,["cq",Yi(No)],Di,0,Cx,[Bb,C0,C4,FW],1,3,0,0,["hw",Yk(F6),"iE",Yk(Nq),"eB",Yi(LM)],DK,0,Di,[],1,0,0,0,["hw",Yk(Id)],Kx,0,DK,[],0,0,0,0,["j6",function(b,c,d,e,f,g){UE(this,b,c,d,e,f,g);},"iK",Yi(NQ)],IT,0,P,[],0,0,0,0,["cq",Yi(MW)],IR,0,P,[],0,0,0,0,["cq",Yi(QQ)],Jt,0,B,[],4,3,0,0,0,IS,0,P,[],0,0,0,0,["cq",Yi(Ry)],IN,0,V,[],0,0,0,0,["cq",Yi(RW)],Fj,0,B,[],4,3,0,0,0,Ju,0,B,[Bf],1,3,0,0,0,BR,0,B,[],4,3,0,FX,0,Gl,0,BP,[],0,0,0,0,["a",Yh(Q7)],Gk,0,BP,[],0,0,0,0,["a",Yh(O4)],B7,0,X,[Bb],0,3,0,Fm,["hW",
Yi(J2),"bw",Yh(Ux),"N",Yh(Pq),"d",Yh(Nu),"D",Yi(UU),"fU",Yh(Ne),"fD",Yh(O1)],Gj,0,BP,[],0,0,0,0,["a",Yh(S8)],D6,0,BK,[],0,3,0,0,["a",Yh(F4),"f2",Yi(Qv),"ev",Yi(S4)],Gn,0,D6,[],0,0,0,0,["a",Yh(S3)],Gm,0,V,[],0,0,0,0,["a",Yh(Po)],J0,0,By,[],0,0,0,0,["f8",Yj(Uo)],JX,0,By,[],0,0,0,0,["f8",Yj(UQ)],K2,0,BX,[],0,0,0,0,["cn",Yi(PL),"r",Yh(Tk),"t",Yh(S5)],JZ,0,By,[],0,0,0,0,["f8",Yj(UO)],CJ,"WebAssemblyProvider",4,B,[],3,3,0,0,["i9",Yj(T9)],EK,0,B,[CJ],4,3,0,0,["i9",Yj(T9),"a",Yh(US),"hS",Yh(Up),"hB",Yi(Ny)],Fs,0,B,
[],0,3,0,0,0]);
$rt_metadata([JW,0,O,[],0,3,0,0,["a",Yh(LL)],Jh,0,B,[S],0,3,0,0,["kd",Yi(SN),"g",Yi(QF),"jq",Yi(HW)],Br,0,B,[],0,3,0,0,["a",Yh(C2)],Kc,0,Br,[],0,0,0,0,["a",Yh(O7)],J_,0,Br,[],0,0,0,0,["a",Yh(QR)],JB,0,Br,[],0,0,0,0,["a",Yh(LY)],Ka,0,Br,[],0,0,0,0,["a",Yh(Tt)],FT,0,Co,[CM],4,3,0,0,["gN",Yj(Uf),"i0",Yi(UW),"h7",Yi(Oo),"dQ",Yi(Un),"dJ",Yj(R7),"gT",Yi(OY),"iH",Yi(PZ),"ib",Yi(L4),"ed",Yh(Ti),"hE",Yh(UF),"i2",Yi(Uq),"c_",Yi(Nh),"hD",Yj(Nt),"a",Yh(NW),"dx",Yi(KZ),"kC",Yi(Kh),"jp",Yh(Gw),"j$",Yj(Lk),"d",Yh(TT),"e8",
Yi(Pu),"bf",Yi(OB),"fX",Yi(L8),"fW",Yi(Tx),"f5",Yh(Mf),"cr",Yi(Uy),"fl",Yh(PG),"f4",Yj(N4),"cH",Yi(TS),"fB",Yh(SO)],BU,0,B,[Bv,Bb,C4],0,3,0,Lv,["iJ",Yi(GJ),"kF",Yk(LG),"o",Yi(NT),"c",Yh(Rx),"ch",Yh(TL),"hU",Yi(St),"eF",Yi(QE),"ee",Yj(NB),"cL",Yi(QD),"iS",Yj(NY),"iI",Yi(S7),"bN",Yj(My),"hg",Yi(Tf),"d",Yh(OR),"i4",Yh(TU),"D",Yi(Su),"ej",Yi(SK),"b2",Yh(NM),"gg",Yi(Rh)],LH,0,O,[],0,3,0,0,["a",Yh(Of)],D7,0,C$,[],1,3,0,0,["g6",Yk(H1),"ho",Yj(N0)],IA,0,D7,[],0,3,0,0,["jE",Yi(QG),"gM",function(b,c,d,e,f,g,h){return Ul(this,
b,c,d,e,f,g,h);}],Fh,0,B,[Bf],3,3,0,0,0,Ij,0,B,[Fh],0,3,0,0,["j8",Yi(Nk),"il",Yi(Nd),"jP",Yi(Hz),"jB",Yi(MZ)],I_,0,B,[CB],0,3,0,0,["a",Yh(Rg)],Bz,0,B,[],4,3,0,Bn,0,Ja,0,B,[CB],0,3,0,0,["a",Yh(P9),"fI",Yj(PC)],EI,0,Cu,[],0,3,0,0,["a",Yh(NE),"k",Yi(UB)],Hd,0,P,[],0,0,0,0,["jC",Yi(Pd)],FO,0,Dj,[],0,3,0,Rj,["h6",Yh(Ta)],CL,0,B,[],4,3,0,0,0,Lt,0,B,[DJ],4,3,0,0,["a",Yh(Ob),"cX",Yi(Nz),"dT",Yi(RP),"c4",Yi(PU)],Fi,0,B,[],0,3,0,Cq,["hi",Yk(Ir),"cV",Yi(TE)],GI,0,BC,[],0,3,0,0,["a",Yh(QI),"k",Yi(N6)],Gc,0,O,[],0,3,0,0,
["k",Yi(QW),"a",Yh(Ph)],Kl,0,B,[FA],0,0,0,0,["ku",Yi(S0),"bj",Yi(T7),"hf",Yi(TG)],CD,0,B,[Bb,Bv],1,3,0,0,["c1",Yj(Fw),"jn",Yh(Bl)],B8,0,B,[],0,3,0,0,["a",Yh(Ff)],IB,0,B8,[],0,0,0,0,["jU",Yl(UJ)],H$,0,B,[],0,0,0,0,["a",Yh(UD)],Kt,0,B,[],4,3,0,0,0,Ew,0,X,[Bb],0,3,0,SU,["jr",Yi(I6)],Fp,0,B,[],0,3,0,EU,["k",Yi(GM),"g5",Yi(MP),"iM",Yj(S$)],Eh,0,B,[Bv],0,3,0,0,["kD",Yj(TB),"fG",Yh(OX),"cR",Yh(PJ),"gk",Yh(Pe)],F3,0,B,[B0],0,0,0,0,["j2",Yi(LW),"bI",Yi(Ts),"b3",Yi(Qs)],Cc,0,B,[],0,3,0,BG,0,JF,0,Bo,[],0,3,0,0,["k",Yi(OS)],HB,
0,DW,[],4,3,0,0,["bf",Yi(Qg),"gT",Yi(OY),"iH",Yi(PZ),"ib",Yi(L4),"ed",Yh(Ti),"hE",Yh(UF),"hz",Yi(MJ),"iW",Yi(Q9),"dj",Yh(T_),"bK",Yi(Pp),"dc",Yi(Mw),"cr",Yi(MU),"ie",Yi(R$),"fp",Yh(Ra),"hN",Yi(Q_)],Ie,0,B,[S],0,3,0,0,["a",Yh(LU),"g",Yi(On),"kV",Yi(IV)],Jv,0,Cl,[],0,0,0,0,["gl",Yl(UA)],Ke,0,O,[],0,3,0,0,["a",Yh(Rz)],Js,0,B,[],4,3,0,0,0,Jw,0,Cl,[],0,0,0,0,["gl",Yl(ST)],HQ,0,B,[],4,3,0,0,0,K0,0,DR,[D9],4,0,0,0,["gs",Yj(Nn),"iO",Yi(RM)],DM,0,B,[],0,3,0,Bs,["jI",Yj(Ih),"gn",Yh(MN),"cY",Yh(R9),"is",Yh(Uk),"h5",Yh(Sd),
"fH",Yh(Sq),"c",Yh(Q2)],Dy,0,B,[],4,3,0,Eq,0,G0,0,B,[],4,0,0,0,0,Ib,0,B8,[],0,0,0,0,["jD",Yl(OQ)],Ki,0,CF,[],0,3,0,0,0]);
$rt_metadata([Ga,0,B,[Fb],0,3,0,0,["a",Yh(Nl),"f_",Yi(Tb),"kE",Yi(Hh)],Bt,0,CD,[],12,3,0,Z,0,K8,0,B,[EE],4,0,0,0,["dx",Yi(Sj),"gr",Yi(OI),"d1",Yj(Mn),"ju",Yj(IW)],Ig,0,B,[],0,3,0,0,["iJ",Yi(PY)],If,0,Bm,[],1,3,0,0,0,CH,0,B,[],0,0,0,0,["cw",Yi(Pz)],IO,0,Bm,[],1,3,0,0,0,JH,0,O,[],0,3,0,0,["a",Yh(SE)],B5,0,CD,[],12,3,0,DF,0,ID,0,B,[],0,3,0,0,["a",Yh(LP)],K3,0,B,[EC],0,3,0,0,["iP",Yi(OZ),"dz",Yi(SW),"fz",Yi(Sw)],GO,0,BQ,[CQ],0,0,0,0,["gL",Yi(P0),"go",Yi(OU),"cW",Yi(LK),"r",Yh(NU)],BN,0,B,[],0,3,0,RD,0,Gt,0,B,[],
4,3,0,0,0]);
function $rt_array(cls,data){this.f=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","<java_object>@","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","String is null or empty","Illegal radix: ","Result is already complete",",","null","0",".","Null pointer","JSON does not allow non-finite numbers","JSON does not allow non-finite numbers.","\"\"","\\t",
"\\n","\\f","\\r","000","\\u","\\b","main","No null success mapper accepted","No null failure mapper accepted","No null handler accepted","Future{cause=","Future{unresolved}","Future{result=null}","Future{result=","}","BIG_ENDIAN","LITTLE_ENDIAN","Index out of bounds","Cannot instantiate any provider for service ","(this Map)",", ","New position "," is outside of range [0;","]","classes.wasm","cy","width","height","placeIndex","frameIndex","wasm","computeLinePixelRGBs","initAndComputeLinePixelRGBs","Replacement preconditions do not hold",
"Action must be non-null","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ",")","[]","(this Collection)","OFF","SEVERE","WARNING","INFO","CONFIG","FINE","FINER","FINEST","ALL","IGNORE","REPLACE","REPORT","false","true","Light.","Sphere.","javaClass@","number","object","string","boolean","Light","The last char in dst ","Sphere","Using default built-in JSON factory which is not interoperable with the underlying platform! Be sure you haven\'t forgot to call Json.registerProvider().",
"Floor","Default","Glass","Mirror","UTF-8","global","","STRING","NUMBER","BOOLEAN","OBJECT","ARRAY","NULL","UNDEFINED","RETURN_NULL","TRACE_AND_RETURN_NULL","THROW_EXCEPTION"]);
BU.prototype.toString=function(){return $rt_ustr(this);};
BU.prototype.valueOf=BU.prototype.toString;B.prototype.toString=function(){return $rt_ustr(OV(this));};
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
~a);};}var T=Long_add;var Xp=Long_sub;var N=Long_mul;var Bd=Long_div;var De=Long_rem;var WN=Long_or;var Bj=Long_and;var AAH=Long_xor;var Cb=Long_shl;var C5=Long_shr;var BZ=Long_shru;var XX=Long_compare;var CV=Long_eq;var AAI=Long_ne;var I3=Long_lt;var CW=Long_le;var IF=Long_gt;var IM=Long_ge;var AAJ=Long_not;var Vg=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof Error){throw result;}};this.run();};TeaVMThread.prototype.resume=function(){if($rt_currentNativeThread
!==null){throw new Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending(){var thread=$rt_nativeThread();return thread
!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer()
{throw new Error("Invalid recorded state");}main=$rt_mainStarter(Wb);
main.javaException=$rt_javaException;
(function(){var c;c=JJ.prototype;c.getLength=c.kc;c.get=c.ko;c=Jg.prototype;c.apply=c.jZ;c=Je.prototype;c.handle=c.fz;c=Ji.prototype;c.handle=c.fz;c=Ij.prototype;c.handleEvent=c.jB;c=K3.prototype;c.handle=c.fz;})();
})();

main()