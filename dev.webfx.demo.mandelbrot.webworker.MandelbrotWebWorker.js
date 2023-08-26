"use strict";
var main;(function($rt_globals){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}$rt_globals.Array.prototype.fill=$rt_globals.Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?$rt_globals.Math.max(len+start,0):$rt_globals.Math.min(start,len);end
=end===$rt_globals.undefined?len:end|0;end=end<0?$rt_globals.Math.max(len+end,0):$rt_globals.Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new $rt_globals.Array(sz);data.fill(null);return new $rt_array(cls,data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new $rt_globals.Array(sz));}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if(typeof $rt_globals.BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new $rt_globals.Array(sz);var arr=new $rt_array($rt_longcls(),data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),new $rt_globals.BigInt64Array(sz));};$rt_createLongArrayFromData
=function(data){var buffer=new $rt_globals.BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new $rt_globals.Uint16Array(sz));}function $rt_createCharArrayFromData(data){var buffer=new $rt_globals.Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new $rt_globals.Int8Array(sz));}function $rt_createByteArrayFromData(data)
{var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new $rt_globals.Int16Array(sz));}function $rt_createShortArrayFromData(data){var buffer=new $rt_globals.Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new $rt_globals.Int32Array(sz));}function $rt_createIntArrayFromData(data)
{var buffer=new $rt_globals.Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new $rt_globals.Int8Array(sz));}function $rt_createBooleanArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new $rt_globals.Float32Array(sz));}function $rt_createFloatArrayFromData(data)
{var buffer=new $rt_globals.Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new $rt_globals.Float64Array(sz));}function $rt_createDoubleArrayFromData(data){var buffer=new $rt_globals.Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta
={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum
=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache
===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long",
"J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double","D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex)
{throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){var javaCause=$rt_throwableCause(ex);var jsCause=javaCause!==null?javaCause.$jsException:$rt_globals.undefined;var cause=typeof jsCause==="object"?{cause:jsCause}:$rt_globals.undefined;err=new JavaError("Java exception thrown",cause);if(typeof $rt_globals.Error.captureStackTrace==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException
=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,
javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,
arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if
(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+
1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),
arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i
=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value)
{if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)
===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr
=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i
=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum
=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName
:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f){return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,
p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i)
{javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new $rt_globals.DataView(new $rt_globals.ArrayBuffer(8));var $rt_doubleToLongBits;var $rt_longBitsToDouble;if
(typeof $rt_globals.BigInt!=='function'){$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else {$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,
true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){var hi=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n>>$rt_globals.BigInt(32)));var lo=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n&$rt_globals.BigInt(0xFFFFFFFF)));$rt_numberConversionView.setInt32(0,lo,true);$rt_numberConversionView.setInt32(4,hi,true);return $rt_numberConversionView.getFloat64(0,
true);};}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}var JavaError;if(typeof $rt_globals.Reflect==='object'){var defaultMessage=$rt_globals.Symbol("defaultMessage");JavaError=function JavaError(message,cause){var self=$rt_globals.Reflect.construct($rt_globals.Error,[$rt_globals.undefined,cause],JavaError);$rt_globals.Object.setPrototypeOf(self,
JavaError.prototype);self[defaultMessage]=message;return self;};JavaError.prototype=$rt_globals.Object.create($rt_globals.Error.prototype,{constructor:{configurable:true,writable:true,value:JavaError},message:{get:function(){var javaException=this[$rt_javaExceptionProp];if(typeof javaException==='object'){var javaMessage=$rt_throwableMessage(javaException);if(typeof javaMessage==="object"){return javaMessage.toString();}}return this[defaultMessage];}}});}else {JavaError=$rt_globals.Error;}function $rt_javaException(e)
{return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item)
{++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName
+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if(typeof $rt_globals.BigInt!=="function"){Long.prototype.toString=function(){var result=[];var n=this;var positive=Long_isPositive(n);if
(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val, -(val<0)|0);};Long_fromNumber=function(val){if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val
|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};Long_fromInt=function(val){return $rt_globals.BigInt(val);};Long_fromNumber=function(val)
{return $rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(32,val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv
=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function()
{superclass.call(this);};}function $rt_setCloneMethod(target, f){target.c4=f;}
function $rt_cls(cls){return Hq(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Ul(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.q.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return Wx;}
function $rt_throwableMessage(t){return PS(t);}
function $rt_throwableCause(t){return PX(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Df());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return BV();}
function $rt_setThread(t){return DV(t);}
function $rt_createException(message){return Wy(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var G=$rt_throw;var BX=$rt_compare;var Wz=$rt_nullCheck;var I=$rt_cls;var By=$rt_createArray;var BH=$rt_isInstance;var P$=$rt_nativeThread;var Vz=$rt_suspending;var VJ=$rt_resuming;var Uo=$rt_invalidPointer;var D=$rt_s;var R=$rt_eraseClinit;var BP=$rt_imul;var Bk=$rt_wrapException;var WA=$rt_checkBounds;var WB=$rt_checkUpperBound;var WC=$rt_checkLowerBound;var WD=$rt_wrapFunction0;var WE=$rt_wrapFunction1;var WF=$rt_wrapFunction2;var WG=$rt_wrapFunction3;var WH=$rt_wrapFunction4;var E=$rt_classWithoutFields;var B5
=$rt_createArrayFromData;var WI=$rt_createCharArrayFromData;var WJ=$rt_createByteArrayFromData;var WK=$rt_createShortArrayFromData;var B_=$rt_createIntArrayFromData;var WL=$rt_createBooleanArrayFromData;var WM=$rt_createFloatArrayFromData;var WN=$rt_createDoubleArrayFromData;var Fo=$rt_createLongArrayFromData;var WO=$rt_createBooleanArray;var Fw=$rt_createByteArray;var WP=$rt_createShortArray;var BY=$rt_createCharArray;var W=$rt_createIntArray;var VL=$rt_createLongArray;var WQ=$rt_createFloatArray;var WR=$rt_createDoubleArray;var BX
=$rt_compare;var WS=$rt_castToClass;var WT=$rt_castToInterface;var V_=Long_toNumber;var C=Long_fromInt;var WU=Long_fromNumber;var F=Long_create;var M=Long_ZERO;var WV=Long_hi;var K=Long_lo;
function B(){this.k=null;this.$id$=0;}
function PW(){var a=new B();J(a);return a;}
function D5(b){var c;if(b.k===null)EA(b);if(b.k.x===null)b.k.x=BV();else if(b.k.x!==BV())G(Ko(D(0)));c=b.k;c.D=c.D+1|0;}
function BB(b){var c,d;if(!CS(b)&&b.k.x===BV()){c=b.k;d=c.D-1|0;c.D=d;if(!d)b.k.x=null;CS(b);return;}G(P2());}
function UL(b){RR(b,1);}
function RR(b,c){var d,$p,$z;$p=0;if(VJ()){var $T=P$();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.k===null)EA(b);if(b.k.x===null)b.k.x=BV();if(b.k.x===BV()){d=b.k;d.D=d.D+c|0;return;}$p=1;case 1:Tr(b,c);if(Vz()){break _;}return;default:Uo();}}P$().s(b,c,d,$p);}
function EA(b){b.k=Wa();}
function Tr(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.bu=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.hn=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=Wu(callback);return thread.suspend(function(){try{Wq(b,c,callback);}catch($e){callback.hn($rt_exception($e));}});}
function Wq(b,c,d){var e,f,g;e=BV();if(b.k===null){EA(b);DV(e);f=b.k;f.D=f.D+c|0;d.bu(null);return;}if(b.k.x===null){b.k.x=e;DV(e);f=b.k;f.D=f.D+c|0;d.bu(null);return;}g=b.k;if(g.U===null)g.U=L9();Ml(g.U,V7(e,b,c,d));}
function UP(b){MG(b,1);}
function MG(b,c){var d;if(!CS(b)&&b.k.x===BV()){d=b.k;d.D=d.D-c|0;if(d.D>0)return;d.x=null;if(d.U!==null&&!D4(d.U))Mc(Vs(b));else CS(b);return;}G(P2());}
function Qi(b){var c,d,e;if(!CS(b)&&b.k.x===null){c=b.k;if(c.U!==null&&!D4(c.U)){d=c.U;e=NY(d);c.U=null;e.eh();}return;}}
function CS(a){var b,c;b=a.k;if(b===null)return 1;a:{b:{if(b.x===null){if(b.U!==null){c=b.U;if(!D4(c))break b;}if(b.eW===null)break a;c=b.eW;if(D4(c))break a;}}return 0;}K_(a);return 1;}
function K_(a){a.k=null;}
function J(a){}
function DO(a){return Hq(a.constructor);}
function PG(a){return DA(a);}
function Mh(a,b){return a!==b?0:1;}
function OO(a){var b,c;b=Gp(DA(a));c=Y();P(P(c,D(1)),b);return Bb(c);}
function DA(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function TV(a){var b,c,d;if(!BH(a,CQ)){b=a;if(b.constructor.$meta.item===null)G(Uu());}c=Mk(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function TE(b){Qi(b);}
function MQ(b,c,d,e){var f;DV(b);c.k.x=b;f=c.k;f.D=f.D+d|0;e.bu(null);}
function BM(){var a=this;B.call(a);a.dE=null;a.c1=null;a.ct=0;a.c3=0;}
function WW(a,b,c,d){var e=new BM();Iw(e,a,b,c,d);return e;}
function WX(){var a=new BM();Kq(a);return a;}
function WY(a){var b=new BM();Gc(b,a);return b;}
function WZ(a){var b=new BM();Ks(b,a);return b;}
function Iw(a,b,c,d,e){if(e)a.cK();a.ct=d;a.c3=e;a.dE=b;a.c1=c;}
function Kq(a){a.ct=1;a.c3=1;a.cK();}
function Gc(a,b){a.ct=1;a.c3=1;a.cK();a.dE=b;}
function Ks(a,b){a.ct=1;a.c3=1;a.cK();a.c1=b;}
function QL(a){return a;}
function PS(a){return a.dE;}
function PX(a){return a.c1===a?null:a.c1;}
var Ca=E(BM);
function W0(){var a=new Ca();Fl(a);return a;}
function W1(a){var b=new Ca();GP(b,a);return b;}
function Fl(a){Kq(a);}
function GP(a,b){Gc(a,b);}
var V=E(Ca);
function W2(){var a=new V();BE(a);return a;}
function Wy(a){var b=new V();C0(b,a);return b;}
function BE(a){Fl(a);}
function C0(a,b){GP(a,b);}
var B1=E(V);
function DL(){var a=new B1();Iz(a);return a;}
function Vm(a){var b=new B1();Cx(b,a);return b;}
function Iz(a){BE(a);}
function Cx(a,b){C0(a,b);}
var DP=E(0);
function P8(a,b){return b;}
function OR(a,b){if(b===null)return null;if(BH(b,C6))return a.g3(b);if(!BH(b,Da))return a.dy(b);return a.gP(b);}
function RI(a,b){return b.bE();}
function Sf(a,b){return b.bE();}
var Gh=E(0);
var Fy=E(0);
function SQ(a){return (FD(a.bE(),a,Y())).j();}
function Ri(b,c){var d,e,f,g,h;c.r(123);d=1;e=b.fs();f=0;g=e.M();while(f<g){h=e.hF(f);if(!d)c.r(44);H5(h,c);c.r(58);FD(b.c8(h),b,c);d=0;f=f+1|0;}return c.r(125);}
function RP(b,c){return (Qs(b,D(2),c.r(91))).r(93);}
function Qs(b,c,d){var e,f;e=b.M();f=0;while(f<e){if(f>0)d.C(c);FD(b.dk(f),b,d);f=f+1|0;}return d;}
function FD(b,c,d){V4();switch(W3.data[Bd(c.cE(b))]){case 1:return d.C(D(3));case 2:return Ri(c.cj(b),d);case 3:return RP(c.dV(b),d);case 4:return d.C(M5(c.bn(b)));case 5:return d.bf(c.bn(b));case 6:return H5(c.bn(b),d);default:}return d;}
function OJ(b){if(b.da(46)>0&&b.da(101)<0&&b.da(69)<0){while(b.e8(D(4))){b=b.bF(0,b.g()-1|0);}if(b.e8(D(5)))b=b.bF(0,b.g()-1|0);}return b;}
function M5(b){if(b!==null){R4(b);return OJ(b.j());}G(CG(D(6)));}
function R4(b){var c;a:{b:{if(b!==null){if(b instanceof Cp){if((Pv(0.0)).A(b))break b;c=b;if(!c.f1()&&!c.gc())break b;G(CG(D(7)));}if(b instanceof Cy&&!(UR(0.0)).A(b)){c=b;if(c.f1())break a;if(c.gc())break a;}}}return;}G(CG(D(8)));}
function H5(b,c){var d,e,f,g,h,i,j;if(QE(b))return c.C(D(9));d=0;e=b.g();c.r(34);f=0;while(f<e){a:{g=b.o(f);switch(g){case 8:break;case 9:c.C(D(10));break a;case 10:c.C(D(11));break a;case 12:c.C(D(12));break a;case 13:c.C(D(13));break a;case 34:case 92:c.r(92);c.r(g);break a;case 47:if(d==60)c.r(92);c.r(g);break a;default:if(g>=32){c.r(g);break a;}h=Gp(g);i=Y();P(P(i,D(14)),h);j=Bb(i);(c.C(D(15))).C(j.ho(j.g()-4|0));break a;}c.C(D(16));}f=f+1|0;d=g;}return c.r(34);}
var Dg=E(0);
function Tp(a){return a.cj(a.dN());}
var Dc=E(0);
function HA(){var a=this;B.call(a);a.ez=null;a.f0=null;a.fw=0;a.f8=0;}
function UN(a,b){var c=new HA();Q0(c,a,b);return c;}
function Q0(a,b,c){J(a);a.ez=b;a.f0=c;}
function Qb(a){return Cv(a.ez);}
function Qk(a,b){return Cd(a.f0)<b?0:1;}
function Q$(a,b){a.fw=b;}
function Uc(a,b){a.f8=b;}
var BI=E(0);
var Bc=E();
function Bm(a){J(a);}
var Bn=E(0);
function CV(){Bc.call(this);this.d$=0;}
var W4=null;var W5=null;function B2(){B2=R(CV);Qx();}
function Rb(a){var b=new CV();Jl(b,a);return b;}
function Jl(a,b){B2();Bm(a);a.d$=b;}
function I0(b,c){B2();if(!(c>=2&&c<=36))c=10;return ((V2(20)).eP(b,c)).j();}
function Gp(b){B2();return Mn(b,4);}
function Ia(b){B2();return I0(b,10);}
function E9(b,c){var d,e,f,g,h,i,j;B2();if(c>=2&&c<=36){if(b!==null&&!b.bW()){a:{d=0;e=0;switch(b.o(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.g())G(T0());while(e<b.g()){g=e+1|0;h=Ex(b.o(e));if(h<0){i=new BQ;j=Y();P(P(j,D(17)),b);B7(i,Bb(j));G(i);}if(h>=c){i=new BQ;j=Y();P(P(Bj(P(j,D(18)),c),D(19)),b);B7(i,Bb(j));G(i);}f=BP(c,f)+h|0;if(f<0){if(g==b.g()&&f==(-2147483648)&&d)return (-2147483648);i=new BQ;j=Y();P(P(j,D(20)),b);B7(i,Bb(j));G(i);}e=g;}if(d)f= -f|0;return f;}G(CH(D(21)));}i
=new BQ;j=Y();Bj(P(j,D(22)),c);B7(i,Bb(j));G(i);}
function D6(b){B2();return E9(b,10);}
function Bv(b){B2();if(b>=(-128)&&b<=127){HG();return W5.data[b+128|0];}return Rb(b);}
function HG(){var b;B2();a:{if(W5===null){W5=By(CV,256);b=0;while(true){if(b>=W5.data.length)break a;W5.data[b]=Rb(b-128|0);b=b+1|0;}}}}
function NG(a){return a.d$;}
function Sk(a){return Ia(a.d$);}
function CL(b){var c,d,e;B2();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function HM(b){var c,d,e;B2();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function CC(b){B2();return b>>31|( -b|0)>>>31;}
function Qx(){W4=I($rt_intcls());}
var Jz=E(Ca);
function Uu(){var a=new Jz();SW(a);return a;}
function SW(a){Fl(a);}
var DQ=E(0);
var Gm=E(0);
function Is(){return UQ();}
function M4(a,b){if(a.d1(b))return;G(Ko(D(23)));}
var Cm=E();
var W6=null;var W7=null;var W8=null;var W9=null;var W$=null;function PH(){PH=R(Cm);S6();}
function S6(){W6=B_([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);W7=Fo([C(1),C(10),C(100),C(1000),C(10000),C(100000),C(1000000),C(10000000),C(100000000),C(1000000000),F(1410065408, 2),F(1215752192, 23),F(3567587328, 232),F(1316134912, 2328),F(276447232, 23283),F(2764472320, 232830),F(1874919424, 2328306),F(1569325056, 23283064),F(2808348672, 232830643)]);W8=Fo([C(1),C(10),C(100),C(10000),C(100000000),F(1874919424, 2328306)]);W9=UA();W$=VD();}
var CE=E(0);
var Fg=E();
var W_=null;function Wg(){Wg=R(Fg);QO();}
function QO(){W_=W((J3()).data.length);W_.data[Bd(Xa)]=1;W_.data[Bd(Xb)]=2;W_.data[Bd(Xc)]=3;W_.data[Bd(Xd)]=4;W_.data[Bd(Xe)]=5;W_.data[Bd(Xf)]=6;W_.data[Bd(Xg)]=7;W_.data[Bd(Xh)]=8;}
var FK=E();
var Xi=null;function B4(){B4=R(FK);Nx();}
function LH(){B4();return B9((-3.9012757202628037),0.3632155357886345,(-1.5960299759051222),1.6023384588317566,D(24),D(25),0,321,44,1000,240,371,F(2934060552, 9));}
function JH(){B4();return B9((-1.617617631906755),2.082124330451932,(-0.8379058137691474),1.936900657999868,D(24),D(26),0,0,0,250,123,183,F(3508701852, 1));}
function Hx(){B4();return B9((-0.3923604154656245),(-0.35385390657205185),0.6337449826252688,0.6626248642954482,D(24),D(27),1,2486,1200,5000,100,298,F(2167787160, 14));}
function HU(){B4();return B9(0.3255969663863445,0.3838641014597792,0.07356094433491353,0.11726129563998954,D(24),D(27),1,0,12,3000,73,330,F(2753102528, 26));}
function IC(){B4();return B9((-1.9073528222932252),(-1.9073514924809212),0.00198475588464816,0.0019857532438761864,D(24),D(28),0,1157,565,5000,126,252,F(3930967113, 17));}
function GB(){B4();return B9((-1.4611993645157393),(-1.4611969393517183),(-2.69122434052013E-6),(-8.7235132469165E-7),D(24),D(29),1,1092,539,5000,144,181,F(1185635964, 9));}
function IF(){B4();return B9((-1.5960139049602644),0.4920585171556493,(-0.30991904708784934),1.2561352694990862,D(24),D(30),0,0,0,10000,54,207,F(829234216, 65));}
function Ix(){B4();return B9((-1.941022691742085),(-1.940943066443167),6.182644332733532E-4,6.779834074618679E-4,D(24),D(27),1,250,1,5000,118,253,F(2737667071, 34));}
function Hj(){B4();return B9(0.25211825446288316,0.25249702635864024,(-3.1927191194277595E-4),(-3.519299012499159E-5),D(24),D(31),0,1300,0,50000,125,288,F(3877585330, 78));}
function Nx(){var b;b=B5(F0,[LH(),JH(),Hx(),HU(),IC(),GB(),IF(),Ix(),Hj()]);Xi=b;}
function Go(){Bc.call(this);this.en=M;}
var Xj=null;function Ct(){Ct=R(Go);RT();}
function VU(a){var b=new Go();JF(b,a);return b;}
function JF(a,b){Ct();Bm(a);a.en=b;}
function EZ(b){Ct();return VU(b);}
function La(b,c){var d,e,f,g,h,i,j;Ct();if(c>=2&&c<=36){if(b!==null&&!b.bW()){a:{d=0;e=0;switch(b.o(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=M;while(e<b.g()){g=e+1|0;h=Ex(b.o(e));if(h<0){i=new BQ;j=Y();P(P(j,D(17)),b);B7(i,Bb(j));G(i);}if(h>=c){i=new BQ;j=Y();P(P(Bj(P(j,D(18)),c),D(19)),b);B7(i,Bb(j));G(i);}f=L(Q(C(c),f),C(h));if(Bx(f,M)){if(g==b.g()&&X(f,F(0, 2147483648))&&d)return F(0, 2147483648);i=new BQ;j=Y();P(P(j,D(20)),b);B7(i,Bb(j));G(i);}e=g;}if(d)f=Bt(f);return f;}G(CH(D(21)));}i
=new BQ;j=Y();Bj(P(j,D(22)),c);B7(i,Bb(j));G(i);}
function KG(b){Ct();return La(b,10);}
function MF(a){return K(a.en);}
function Hm(b){Ct();return ((Y()).iz(b)).j();}
function Q7(a){return Hm(a.en);}
function Hr(b){var c,d,e;Ct();if(X(b,M))return 64;c=0;d=T(b,32);if(BG(d,M))c=32;else d=b;e=T(d,16);if(X(e,M))e=d;else c=c|16;d=T(e,8);if(X(d,M))d=e;else c=c|8;e=T(d,4);if(X(e,M))e=d;else c=c|4;d=T(e,2);if(X(d,M))d=e;else c=c|2;if(BG(T(d,1),M))c=c|1;return (64-c|0)-1|0;}
function IP(b){var c,d,e;Ct();if(X(b,M))return 64;c=0;d=U(b,32);if(BG(d,M))c=32;else d=b;e=U(d,16);if(X(e,M))e=d;else c=c|16;d=U(e,8);if(X(d,M))d=e;else c=c|8;e=U(d,4);if(X(e,M))e=d;else c=c|4;d=U(e,2);if(X(d,M))d=e;else c=c|2;if(BG(U(d,1),M))c=c|1;return (64-c|0)-1|0;}
function Eq(b){Ct();return K(Cs(Z(b,63),T(Bt(b),63)));}
function Ee(b,c){return Long_udiv(b, c);}
function Hl(b,c){return Long_urem(b, c);}
function RT(){Xj=I($rt_longcls());}
var Ck=E(0);
var E7=E(0);
function Cl(){var a=this;B.call(a);a.f6=M;a.gy=M;a.hq=null;a.h9=null;a.gV=0;a.i4=null;}
var Xk=null;var Xl=null;var Xm=0;var Xn=0;var Xo=null;function Gg(){Gg=R(Cl);N1();}
function Uh(a){var b=new Cl();Ic(b,a);return b;}
function Xp(a,b){var c=new Cl();Fz(c,a,b);return c;}
function Ic(a,b){Gg();Fz(a,null,b);}
function Fz(a,b,c){var d;Gg();J(a);a.hq=PW();a.gV=1;a.h9=c;a.i4=b;d=Xm;Xm=d+1|0;a.f6=C(d);}
function DV(b){Gg();if(Xl!==b)Xl=b;Xl.gy=Jy();}
function BV(){Gg();return Xl;}
function L6(a){return a.f6;}
function N1(){Xk=Uh(D(32));Xl=Xk;Xm=1;Xn=1;Xo=VA();}
var BD=E(0);
function Q6(b){return b;}
var Fu=E(0);
var Kc=E();
function TK(a,b){return a.jZ(b);}
function O1(a){return a.jW();}
var Dw=E(0);
var H8=E();
function Wn(){var a=new H8();Qy(a);return a;}
function Qy(a){J(a);}
function Ob(a){return Ja(a);}
function Ja(a){return Ua();}
function Bl(){var a=this;Bc.call(a);a.a=null;a.e=0;a.f=0;a.br=0;}
var Xq=null;var Xr=null;var Xs=null;var Xt=null;var Xu=null;var Xv=null;function Be(){Be=R(Bl);T4();}
function Vu(a){var b=new Bl();I3(b,a);return b;}
function Xw(a,b){var c=new Bl();FB(c,a,b);return c;}
function Bu(a,b){var c=new Bl();Iv(c,a,b);return c;}
function Bp(a,b,c){var d=new Bl();JM(d,a,b,c);return d;}
function S7(a,b){var c=new Bl();GX(c,a,b);return c;}
function Vn(a,b){var c=new Bl();LQ(c,a,b);return c;}
function I3(a,b){Be();FB(a,b,10);}
function FB(a,b,c){Be();Bm(a);a.br=(-2);if(b===null)G(Df());if(c>=2&&c<=36){if(b.g()){He(a,b,c);return;}G(CH(D(33)));}G(CH(D(34)));}
function Iv(a,b,c){var d;Be();Bm(a);a.br=(-2);a.f=b;a.e=1;d=W(1);d.data[0]=c;a.a=d;}
function JM(a,b,c,d){Be();Bm(a);a.br=(-2);a.f=b;a.e=c;a.a=d;}
function GX(a,b,c){var d;Be();Bm(a);a.br=(-2);a.f=b;if(X(H(c,F(0, 4294967295)),M)){a.e=1;d=W(1);d.data[0]=K(c);a.a=d;}else{a.e=2;a.a=B_([K(c),WV(c)]);}}
function LQ(a,b,c){var d,e;Be();d=c.data;Bm(a);a.br=(-2);e=d.length;if(e){a.f=b;a.e=e;a.a=c;BC(a);}else{a.f=0;a.e=1;d=W(1);d.data[0]=0;a.a=d;}}
function BF(b){Be();if(Bx(b,M)){if(X(b,C(-1)))return Xt;return S7((-1),Bt(b));}if(Cc(b,C(10)))return S7(1,b);return Xu.data[K(b)];}
function He(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;Be();e=c.g();if(c.o(0)!=45){f=1;g=0;h=e;}else{f=(-1);g=1;h=e+(-1)|0;}Vk();i=Xx.data[d];j=h/i|0;k=h%i|0;if(k)j=j+1|0;l=W(j);m=Xy.data[d-2|0];n=0;if(!k)k=i;o=g+k|0;while(g<e){p=l.data;q=E9(c.bF(g,o),d);r=Hd(l,n,m);s=r+PT(l,n,q)|0;h=n+1|0;p[n]=s;s=o+i|0;n=h;g=o;o=s;}b.f=f;b.e=n;b.a=l;BC(b);}
function PJ(a){if(a.f<0)a=Bp(1,a.e,a.a);return a;}
function Q1(a){return !a.f?a:Bp( -a.f|0,a.e,a.a);}
function O2(a,b){return SX(a,b);}
function MZ(a,b){return MK(a,b);}
function St(a){return a.f;}
function QF(a,b){if(b&&a.f)return b>0?HK(a,b):G9(a, -b|0);return a;}
function Ma(a,b){if(b&&a.f)return b>0?G9(a,b):HK(a, -b|0);return a;}
function Qz(a){if(a.f)a=MP(a);return a;}
function TP(a){return Ue(a);}
function PF(a,b){var c,d,e,f;if(!b)return !(a.a.data[0]&1)?0:1;if(b<0)G(Cq(D(35)));c=b>>5;if(c>=a.e)return a.f>=0?0:1;d=a.a.data[c];e=1<<(b&31);if(a.f<0){f=a.ec();if(c<f)return 0;d=f==c? -d|0:d^(-1);}return !(d&e)?0:1;}
function Q4(a){var b;if(!a.f)return (-1);b=a.ec();return (b<<5)+HM(a.a.data[b])|0;}
function NC(a){var b;b=a.e<=1?H(C(a.a.data[0]),F(4294967295, 0)):Cs(U(C(a.a.data[1]),32),H(C(a.a.data[0]),F(4294967295, 0)));return Q(C(a.f),b);}
function Nd(a,b){if(a.f>b.f)return 1;if(a.f<b.f)return (-1);if(a.e>b.e)return a.f;if(a.e<b.e)return  -b.f|0;return BP(a.f,Eh(a.a,b.a,a.e));}
function Pw(a,b){var c;if(a===b)return 1;if(!(b instanceof Bl))return 0;c=b;return a.f==c.f&&a.e==c.e&&a.hs(c.a)?1:0;}
function TJ(a,b){var c,d;c=a.e-1|0;while(c>=0){d=b.data;if(a.a.data[c]!=d[c])break;c=c+(-1)|0;}return c>=0?0:1;}
function Ta(a,b){if(!b.f){Be();return Xq;}if(a.f)return Lq(a,b);Be();return Xq;}
function Ng(a,b){var c;if(b<0)G(Cq(D(36)));if(!b){Be();return Xr;}if(b!=1){Be();if(!a.A(Xr)&&!a.A(Xq)){if(a.cL(0))return Kl(a,b);c=1;while(!a.cL(c)){c=c+1|0;}return (Ly(BP(c,b))).z((a.cT(c)).bt(b));}}return a;}
function RC(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=b.f;if(!c)G(Cq(D(37)));d=b.e;e=b.a;if(d==1)return Q3(a,e.data[0],c);f=a.a;g=a.e;h=BX(g,d);i=!h?Eh(f,e,g):h<=0?(-1):1;if(i<0){j=By(Bl,2);k=j.data;Be();k[0]=Xq;k[1]=a;return j;}l=a.f;m=(g-d|0)+1|0;n=l!=c?(-1):1;o=W(m);p=T3(o,m,f,g,e,d);q=Bp(n,m,o);r=Bp(l,d,p);BC(q);BC(r);return B5(Bl,[q,r]);}
function BC(a){var b,c,d;while(a.e>0){b=a.a.data;c=a.e-1|0;a.e=c;if(b[c])break;}b=a.a.data;d=a.e;a.e=d+1|0;if(!b[d])a.f=0;}
function M2(a){var b;if(a.br==(-2)){if(!a.f)b=(-1);else{b=0;while(!a.a.data[b]){b=b+1|0;}}a.br=b;}return a.br;}
function Ly(b){var c,d,e,f,g;Be();if(b<Xv.data.length)return Xv.data[b];c=b>>5;d=b&31;e=c+1|0;f=W(e);g=f.data;g[c]=1<<d;return Bp(1,e,f);}
function T4(){var b;Xq=Bu(0,0);Xr=Bu(1,1);Xs=Bu(1,10);Xt=Bu((-1),1);Xu=B5(Bl,[Xq,Xr,Bu(1,2),Bu(1,3),Bu(1,4),Bu(1,5),Bu(1,6),Bu(1,7),Bu(1,8),Bu(1,9),Xs]);Xv=By(Bl,32);b=0;while(b<Xv.data.length){Xv.data[b]=BF(U(C(1),b));b=b+1|0;}}
var Gz=E(V);
function Cq(a){var b=new Gz();PE(b,a);return b;}
function PE(a,b){C0(a,b);}
var Gt=E();
var Xz=null;function Ui(){Ui=R(Gt);Rk();}
function Rk(){Xz=W((FF()).data.length);Xz.data[Bd(XA)]=1;Xz.data[Bd(XB)]=2;Xz.data[Bd(XC)]=3;}
var G$=E();
function MV(b){return b;}
function D4(b){return b.length?0:1;}
function Ml(b,c){var d;d=MV(c);b.push(d);}
function NY(b){return b.shift();}
var FH=E(0);
var FT=E(0);
function Ql(b){return VR(b);}
function QB(a,b){return a.fG(b,Vb());}
var DC=E(0);
var CN=E();
function Fx(a){J(a);}
function Fi(a,b,c){c.bR(b);}
function Ed(a,b,c){c.b_(b);}
function I$(a,b,c){var d;Fj(b,D(38));Fj(c,D(39));d=Uk(b,c);a.bN(d);return d;}
function CA(){var a=this;CN.call(a);a.J=null;a.ba=null;}
var XD=null;function Dx(){Dx=R(CA);S1();}
function XE(){var a=new CA();En(a);return a;}
function En(a){Dx();Fx(a);}
function SL(a){var b,c;D5(a);try{if(a.J instanceof C5)b=null;else{c=a.J;Dx();b=c!==XD?a.J:null;}return b;}finally{BB(a);}}
function N2(a,b){var c;Fj(b,D(40));c=!BH(b,Ce)?U3(a,b):b;a.bN(c);return a;}
function IA(a,b){var c,d,e,$$je;D5(a);a:{b:{try{c=a.J;if(c===null)break b;BB(a);}catch($$e){$$je=Bk($$e);d=$$je;break a;}if(c instanceof C5)Ed(a,c.dS,b);else{Dx();if(c===XD)c=null;Fi(a,c,b);}return;}c:{try{if(a.ba===null){a.ba=b;break c;}if(a.ba instanceof FJ)e=a.ba;else{e=Wb();e.bV(a.ba);a.ba=e;}e.bV(b);break c;}catch($$e){$$je=Bk($$e);d=$$je;break a;}}try{BB(a);}catch($$e){$$je=Bk($$e);d=$$je;break a;}return;}BB(a);G(d);}
function GO(a,b){var c,d,$$je;D5(a);a:{b:{c:{try{if(a.J===null)break c;BB(a);}catch($$e){$$je=Bk($$e);c=$$je;break b;}return 0;}d:{try{if(b!==null){c=b;break d;}Dx();c=XD;break d;}catch($$e){$$je=Bk($$e);c=$$je;break b;}}try{a.J=c;d=a.ba;a.ba=null;BB(a);break a;}catch($$e){$$je=Bk($$e);c=$$je;}}BB(a);G(c);}if(d!==null)Fi(a,b,d);return 1;}
function TY(a,b){var c,d,$$je;if(b===null)b=RF(null);D5(a);a:{b:{c:{try{if(a.J===null)break c;BB(a);}catch($$e){$$je=Bk($$e);c=$$je;break b;}return 0;}try{a.J=UU(b);d=a.ba;a.ba=null;BB(a);break a;}catch($$e){$$je=Bk($$e);c=$$je;}}BB(a);G(c);}if(d!==null)Ed(a,b,d);return 1;}
function Sd(a){var b,c,d,$$je;D5(a);a:{b:{try{if(!(a.J instanceof C5))break b;b=a.J.dS.df();c=Y();C9(P(P(c,D(41)),b),125);b=Bb(c);BB(a);}catch($$e){$$je=Bk($$e);b=$$je;break a;}return b;}c:{try{if(a.J!==null)break c;BB(a);}catch($$e){$$je=Bk($$e);b=$$je;break a;}return D(42);}d:{try{b=a.J;Dx();if(b!==XD)break d;BB(a);}catch($$e){$$je=Bk($$e);b=$$je;break a;}return D(43);}try{d=Wm(D(44));a.iY(a.J,d);d.C(D(45));b=d.j();BB(a);}catch($$e){$$je=Bk($$e);b=$$je;break a;}return b;}BB(a);G(b);}
function OA(a,b,c){c.bf(b);}
function S1(){XD=PW();}
var Ek=E(CA);
function LK(a){En(a);}
var Dp=E(0);
var C2=E(BM);
function XF(a){var b=new C2();Jk(b,a);return b;}
function XG(a){var b=new C2();HT(b,a);return b;}
function Jk(a,b){Gc(a,b);}
function HT(a,b){Ks(a,b);}
var C4=E(C2);
function XH(a){var b=new C4();GY(b,a);return b;}
function GY(a,b){Jk(a,b);}
var Dz=E(0);
function T6(a,b,c){return IE(B5(B,[a.dC(b),c]));}
function OP(a,b){EQ();return XI.A(a.ib(b));}
function Nn(a,b){return SR(a.dC(b));}
function Sh(a,b){return EM(a.dC(b));}
function Rx(a,b,c){return EM(a.gU(b,c));}
var Da=E(0);
function LR(a,b){return a.cj(a.c8(b));}
function Se(a,b){return a.bn(a.c8(b));}
var FC=E(0);
var De=E(0);
function TS(a,b){return LR(a,b);}
function L$(a,b,c){return a.gh(b,a.g0(c));}
var Ez=E(0);
var Lb=E(B1);
function Pb(){var a=new Lb();QV(a);return a;}
function QV(a){Iz(a);}
function HC(){B.call(this);this.fe=null;}
function VP(a){var b=new HC();PN(b,a);return b;}
function PN(a,b){J(a);a.fe=b;}
function Ot(a,b){K8(a,b);}
function K8(a,b){GS(a.fe,b);}
var FL=E(0);
function HB(){B.call(this);this.eJ=null;}
function VN(a){var b=new HB();Ty(b,a);return b;}
function Ty(a,b){J(a);a.eJ=b;}
function Oe(a,b){I8(a.eJ,b);}
function Eo(){B.call(this);this.hp=null;}
var XJ=null;var XK=null;function S8(){S8=R(Eo);TU();}
function Qa(a){var b=new Eo();GD(b,a);return b;}
function GD(a,b){S8();J(a);a.hp=b;}
function TU(){XJ=Qa(D(46));XK=Qa(D(47));}
var KA=E();
function DT(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.e$.data;f=b.gd;b.gd=f+1|0;g=NW(e[f]);h=(g%2|0)!=1?0:1;c=c+BP(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function ET(b){var c,d;c=DT(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function NW(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function CM(){var a=this;B.call(a);a.w=null;a.s=null;a.B=null;a.u=null;a.cO=0;}
function XL(){var a=new CM();FW(a);return a;}
function FW(a){J(a);}
function F0(){var a=this;CM.call(a);a.hc=null;a.gH=null;a.h6=0;a.g$=0;a.gS=0;a.iJ=0;a.i7=0;a.h1=M;}
function B9(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=new F0();Nw(n,a,b,c,d,e,f,g,h,i,j,k,l,m);return n;}
function XM(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=new F0();GA(n,a,b,c,d,e,f,g,h,i,j,k,l,m);return n;}
function Nw(a,b,c,d,e,f,g,h,i,j,k,l,m,n){GA(a,BJ(b),BJ(c),BJ(d),BJ(e),f,g,h,i,j,k,l,m,n);}
function GA(a,b,c,d,e,f,g,h,i,j,k,l,m,n){FW(a);a.w=b;a.s=c;a.B=d;a.u=e;a.hc=f;a.gH=g;a.h6=h;a.g$=i;a.gS=j;a.cO=k;a.iJ=l;a.i7=m;a.h1=n;}
var Gk=E(0);
var EY=E(0);
var Fn=E(0);
var C1=E();
function Ew(a){J(a);}
function D8(){C1.call(this);this.gR=null;}
function LS(a){Ew(a);a.gR=Fw(1);}
var Fc=E(D8);
var XN=null;function Tc(){Tc=R(Fc);O3();}
function UZ(){var a=new Fc();KS(a);return a;}
function KS(a){Tc();LS(a);}
function Tk(a,b,c,d){Sr(b,c,d);}
function O3(){XN=UZ();}
var BK=E();
var Hk=E(BK);
function I_(){var a=this;B.call(a);a.eX=null;a.ga=null;a.dU=null;a.fv=null;a.b2=null;}
function UW(){var a=new I_();QN(a);return a;}
function QN(a){J(a);}
function KY(a,b,c){if(b!==null)a.eX=b;if(c!==null)a.ga=c;return a;}
function KP(a){var b;if(a.dU===null){b=H7(a.eX.bp());if(b.W())a.dU=b.N();}return a.dU;}
function Jo(a){var b,c;a:{if(a.b2===null){a.b2=KP(a);if(a.fv!==null){b=a.fv.Z();while(true){if(!b.W())break a;c=b.N();a.b2=c.c6(a.b2);}}}}return a.b2;}
function CZ(){var a=this;B.call(a);a.d=null;a.p=0;}
function XO(){var a=new CZ();Fd(a);return a;}
function V2(a){var b=new CZ();EX(b,a);return b;}
function XP(a){var b=new CZ();Lg(b,a);return b;}
function XQ(a){var b=new CZ();Je(b,a);return b;}
function Fd(a){EX(a,16);}
function EX(a,b){J(a);a.d=BY(b);}
function Lg(a,b){Je(a,b);}
function Je(a,b){var c;J(a);a.d=BY(b.g());c=0;while(c<a.d.data.length){a.d.data[c]=b.o(c);c=c+1|0;}a.p=b.g();}
function K3(a,b){return a.fq(a.p,b);}
function E$(a,b){return a.cI(a.p,b);}
function FI(a,b,c){var d,e,f;if(b>=0&&b<=a.p){if(c===null)c=D(3);else if(c.bW())return a;a.bP(a.p+c.g()|0);d=a.p-1|0;while(d>=b){a.d.data[d+c.g()|0]=a.d.data[d];d=d+(-1)|0;}a.p=a.p+c.g()|0;d=0;while(d<c.g()){e=a.d.data;f=b+1|0;e[b]=c.o(d);d=d+1|0;b=f;}return a;}G(Pb());}
function H0(a,b){return a.eP(b,10);}
function Nq(a,b,c){return a.gQ(a.p,b,c);}
function SJ(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)Bo(a,b,b+1|0);else{Bo(a,b,b+2|0);f=a.d.data;g=b+1|0;f[b]=45;b=g;}a.d.data[b]=C3(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=BP(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;Bo(a,b,b+i|0);if(e)l=b;else{f=a.d.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.d.data;g=l+1|0;f[l]=C3(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function KJ(a,b){return a.e3(a.p,b);}
function LM(a,b,c){return a.ij(b,c,10);}
function Mr(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(Bx(c,M)){e=0;c=Bt(c);}a:{f=C(d);if(Bx(c,f)){if(e)Bo(a,b,b+1|0);else{Bo(a,b,b+2|0);g=a.d.data;h=b+1|0;g[b]=45;b=h;}a.d.data[b]=C3(K(c),d);}else{i=1;j=C(1);while(true){k=Q(j,f);if(Bq(k,j))break;if(Cc(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;Bo(a,b,b+i|0);if(e)l=b;else{g=a.d.data;l=b+1|0;g[b]=45;}while(true){if(Bq(j,M))break a;g=a.d.data;h=l+1|0;g[l]=C3(K(Bg(c,j)),d);c=BO(c,j);j=Bg(j,f);l=h;}}}return a;}
function J0(a,b){return a.eu(a.p,b);}
function Ji(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=BX(c,0.0);if(!d){Bo(a,b,b+3|0);e=a.d.data;d=b+1|0;e[b]=48;e=a.d.data;f=d+1|0;e[d]=46;a.d.data[f]=48;return a;}if(!d){Bo(a,b,b+4|0);e=a.d.data;d=b+1|0;e[b]=45;e=a.d.data;f=d+1|0;e[d]=48;e=a.d.data;d=f+1|0;e[f]=46;a.d.data[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Bo(a,b,b+3|0);e=a.d.data;d=b+1|0;e[b]=78;e=a.d.data;f=d+1|0;e[d]=97;a.d.data[f]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Bo(a,b,b+8|0);d=b;}else{Bo(a,b,b+9|0);e=a.d.data;d=b+1|0;e[b]
=45;}e=a.d.data;f=d+1|0;e[d]=73;e=a.d.data;d=f+1|0;e[f]=110;e=a.d.data;f=d+1|0;e[d]=102;e=a.d.data;d=f+1|0;e[f]=105;e=a.d.data;f=d+1|0;e[d]=110;e=a.d.data;d=f+1|0;e[f]=105;e=a.d.data;f=d+1|0;e[d]=116;a.d.data[f]=121;return a;}PH();g=W9;K7(c,g);h=g.de;i=g.ds;j=g.eO;k=1;l=1;if(j)l=2;m=18;n=OB(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=BA(m,k+1|0);i=0;}else{h=Bg(h,W7.data[ -i|0]);m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(!(i>(-100)&&i<100))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d
=l+m|0;Bo(a,b,b+d|0);if(!j)o=b;else{e=a.d.data;o=b+1|0;e[b]=45;}p=F(1569325056, 23283064);q=0;while(q<m){if(Bq(p,M))r=0;else{r=K(Bg(h,p));h=BO(h,p);}e=a.d.data;d=o+1|0;e[o]=(48+r|0)&65535;k=k+(-1)|0;if(k)o=d;else{e=a.d.data;o=d+1|0;e[d]=46;}p=Bg(p,C(10));q=q+1|0;}if(i){e=a.d.data;d=o+1|0;e[o]=69;if(i>=0)f=d;else{i= -i|0;e=a.d.data;f=d+1|0;e[d]=45;}if(i>=100){e=a.d.data;d=f+1|0;e[f]=(48+(i/100|0)|0)&65535;i=i%100|0;e=a.d.data;o=d+1|0;e[d]=(48+(i/10|0)|0)&65535;}else if(i<10)o=f;else{e=a.d.data;o=f+1|0;e[f]=(48
+(i/10|0)|0)&65535;}a.d.data[o]=(48+(i%10|0)|0)&65535;}return a;}
function OB(b){var c,d,e,f;c=C(1);d=0;e=16;PH();f=W8.data.length-1|0;while(f>=0){if(X(BO(b,Q(c,W8.data[f])),M)){d=d|e;c=Q(c,W8.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function Lm(a,b){return a.fP(a.p,b);}
function K$(a,b,c){Bo(a,b,b+1|0);a.d.data[b]=c;return a;}
function JN(a,b,c){return a.cI(b,c===null?D(3):c.j());}
function E_(a,b){var c;if(a.d.data.length>=b)return;c=a.d.data.length>=1073741823?2147483647:BA(b,BA(a.d.data.length*2|0,5));a.d=NH(a.d,c);}
function EO(a){return ID(a.d,0,a.p);}
function KB(a){return a.p;}
function G5(a,b){if(b>=0&&b<a.p)return a.d.data[b];G(DL());}
function Id(a,b,c,d){return a.eq(a.p,b,c,d);}
function G0(a,b,c,d,e){var f,g;if(d<=e&&e<=c.g()&&d>=0){Bo(a,b,(b+e|0)-d|0);while(d<e){f=a.d.data;g=b+1|0;f[b]=c.o(d);d=d+1|0;b=g;}return a;}G(DL());}
function KU(a,b,c,d){return a.eZ(a.p,b,c,d);}
function G7(a,b,c,d,e){var f,g,h,i,j;Bo(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.d.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function Km(a,b,c,d,e){var f,g,h,i;if(b>c)G(Vm(D(48)));while(b<c){f=d.data;g=e+1|0;h=a.d.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function Kf(a,b){a.p=b;}
function Bo(a,b,c){var d,e;d=a.p-b|0;a.bP((a.p+c|0)-b|0);e=d-1|0;while(e>=0){a.d.data[c+e|0]=a.d.data[b+e|0];e=e+(-1)|0;}a.p=a.p+(c-b|0)|0;}
var Dn=E(0);
var GR=E(CZ);
function Mo(a){var b=new GR();Tq(b,a);return b;}
function Y(){var a=new GR();S3(a);return a;}
function Wm(a){var b=new GR();My(b,a);return b;}
function Tq(a,b){EX(a,b);}
function S3(a){Fd(a);}
function My(a,b){Lg(a,b);}
function P(a,b){K3(a,b);return a;}
function Mx(a,b){E$(a,b);return a;}
function Bj(a,b){H0(a,b);return a;}
function RG(a,b){KJ(a,b);return a;}
function PK(a,b){J0(a,b);return a;}
function C9(a,b){Lm(a,b);return a;}
function PA(a,b,c,d){KU(a,b,c,d);return a;}
function Ss(a,b,c,d){Id(a,b,c,d);return a;}
function QU(a,b,c){LM(a,b,c);return a;}
function SU(a,b,c){Ji(a,b,c);return a;}
function Na(a,b,c,d,e){G0(a,b,c,d,e);return a;}
function Po(a,b,c,d,e){G7(a,b,c,d,e);return a;}
function Tv(a,b,c){JN(a,b,c);return a;}
function NF(a,b,c){K$(a,b,c);return a;}
function TG(a,b,c){FI(a,b,c);return a;}
function TO(a,b){Kf(a,b);}
function Qm(a,b,c,d,e){Km(a,b,c,d,e);}
function TA(a,b,c,d,e){return a.jc(b,c,d,e);}
function Ol(a,b,c,d,e){return a.hM(b,c,d,e);}
function Rq(a,b){return G5(a,b);}
function Og(a){return KB(a);}
function Bb(a){return EO(a);}
function TT(a,b){E_(a,b);}
function MC(a,b,c){return a.hu(b,c);}
function L5(a,b,c){return a.iE(b,c);}
function Qh(a,b,c){return a.hA(b,c);}
function O8(a,b,c){return a.hZ(b,c);}
function T2(a,b,c){return a.hl(b,c);}
var Ga=E();
var XR=null;function T8(){T8=R(Ga);Sv();}
function KN(b){var c,d;T8();c=XR.c$(b);if(c===null){d=XR;c=UW();d.bw(b,c);}return c;}
function F5(b,c,d){var e,f,g,h,i,j;T8();e=KN(b);f=KY(e,c,d);g=Jo(f);if(g!==null)return g;e=f.ga;D2();if(e!==XS){h=b.ir();i=Y();P(P(i,D(49)),h);j=Bb(i);if(e===XT)G(Ko(j));e=LC();ME();e.iR(XU,j);}return null;}
function Sv(){XR=T9();}
var Kk=E(V);
function OF(){var a=new Kk();TH(a);return a;}
function TH(a){BE(a);}
var HO=E(C2);
function Vf(a){var b=new HO();MA(b,a);return b;}
function MA(a,b){HT(a,b);}
function DY(){B.call(this);this.dI=null;}
function Jm(a){J(a);}
function On(a){var b,c,d;b=Y();b.r(123);c=(a.gg()).Z();if(c.W()){d=c.N();b.bf(d.bz()!==a?d.bz():D(50));b.r(61);b.bf(d.bZ()!==a?d.bZ():D(50));}while(c.W()){b.C(D(51));d=c.N();b.bf(d.bz()!==a?d.bz():D(50));b.r(61);b.bf(d.bZ()!==a?d.bZ():D(50));}b.r(125);return b.j();}
var CQ=E(0);
function Es(){var a=this;DY.call(a);a.F=0;a.n=null;a.P=0;a.gm=0.0;a.ch=0;}
function T9(){var a=new Es();Jv(a);return a;}
function XV(a){var b=new Es();EC(b,a);return b;}
function XW(a,b){var c=new Es();K5(c,a,b);return c;}
function RK(a,b){return By(C_,b);}
function Jv(a){EC(a,16);}
function EC(a,b){K5(a,b,0.75);}
function KT(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function K5(a,b,c){var d;Jm(a);if(b>=0&&c>0.0){d=KT(b);a.F=0;a.n=a.dv(d);a.gm=c;Fs(a);return;}G(If());}
function Fs(a){a.ch=a.n.data.length*a.gm|0;}
function RU(a,b){var c;c=Ha(a,b);if(c===null)return null;return c.be;}
function Ha(a,b){var c,d,e;if(b===null)c=Du(a);else{d=Fm(b);e=d&(a.n.data.length-1|0);c=Dl(a,b,e,d);}return c;}
function Dl(a,b,c,d){var e,f;e=a.n.data[c];while(e!==null){if(e.cp==d){f=e.bm;if(HE(b,f))break;}e=e.S;}return e;}
function Du(a){var b;b=a.n.data[0];while(b!==null&&b.bm!==null){b=b.S;}return b;}
function M1(a,b,c){return a.d8(b,c);}
function Rv(a,b,c){var d,e,f,g,h;if(b===null){d=Du(a);if(d===null){a.P=a.P+1|0;d=a.b6(null,0,0);e=a.F+1|0;a.F=e;if(e>a.ch)a.cA();}}else{f=Fm(b);g=f&(a.n.data.length-1|0);d=Dl(a,b,g,f);if(d===null){a.P=a.P+1|0;d=a.b6(b,g,f);e=a.F+1|0;a.F=e;if(e>a.ch)a.cA();}}h=d.be;d.be=c;return h;}
function OY(a,b,c,d){var e;e=Vq(b,d);e.S=a.n.data[c];a.n.data[c]=e;return e;}
function Ro(a,b){var c,d,e,f,g,h,i;c=KT(!b?1:b<<1);d=a.dv(c);e=0;while(e<a.n.data.length){f=a.n.data[e];a.n.data[e]=null;while(f!==null){g=d.data;h=f.cp&(c-1|0);i=f.S;f.S=g[h];g[h]=f;f=i;}e=e+1|0;}a.n=d;Fs(a);}
function Pn(a){a.hG(a.n.data.length);}
function H9(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.n.data[0];while(e!==null){if(e.bm===null)break a;f=e.S;d=e;e=f;}}else{g=Fm(b);c=g&(a.n.data.length-1|0);e=a.n.data[c];while(e!==null&&!(e.cp==g&&HE(b,e.bm))){f=e.S;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.S=e.S;else a.n.data[c]=e.S;a.P=a.P+1|0;a.F=a.F-1|0;return e;}
function Pi(a){return a.F;}
function Fm(b){return b.b9();}
function HE(b,c){return b!==c&&!b.A(c)?0:1;}
function Hu(){var a=this;Es.call(a);a.cc=0;a.R=null;a.v=null;}
function Ww(){var a=new Hu();NJ(a);return a;}
function UO(a){var b=new Hu();O_(b,a);return b;}
function NJ(a){Jv(a);a.cc=0;a.R=null;}
function O_(a,b){EC(a,b);a.cc=0;a.R=null;}
function Oy(a,b){return By(F1,b);}
function Mu(a,b){var c,d,e,f,g;if(b===null)c=Du(a);else{d=b.b9();e=(d&2147483647)%a.n.data.length|0;c=Dl(a,b,e,d);}if(c===null)return null;if(a.cc&&a.v!==c){f=c.K;g=c.y;g.K=f;if(f===null)a.R=g;else f.y=g;c.y=null;c.K=a.v;a.v.y=c;a.v=c;}return c.be;}
function Tw(a,b,c,d){var e;e=U9(b,d);e.S=a.n.data[c];a.n.data[c]=e;a.d4(e);return e;}
function R_(a,b,c){var d;d=a.d8(b,c);if(a.iA(a.R))a.gK(a.R.bm);return d;}
function Tx(a,b,c){var d,e,f,g,h,i;if(!a.F){a.R=null;a.v=null;}if(b===null){d=Du(a);if(d!==null)a.d4(d);else{a.P=a.P+1|0;e=a.F+1|0;a.F=e;if(e>a.ch)a.cA();d=a.b6(null,0,0);}}else{f=b.b9();e=f&2147483647;g=e%a.n.data.length|0;d=Dl(a,b,g,f);if(d!==null)a.d4(d);else{a.P=a.P+1|0;h=a.F+1|0;a.F=h;if(h>a.ch){a.cA();g=e%a.n.data.length|0;}d=a.b6(b,g,f);}}i=d.be;d.be=c;return i;}
function Mi(a,b){var c,d;if(a.v===b)return;if(a.R===null){a.R=b;a.v=b;return;}c=b.K;d=b.y;if(c!==null){if(d===null)return;if(a.cc){c.y=d;d.K=c;b.y=null;b.K=a.v;a.v.y=b;a.v=b;}return;}if(d===null){b.K=a.v;b.y=null;a.v.y=b;a.v=b;}else if(a.cc){a.R=d;d.K=null;b.K=a.v;b.y=null;a.v.y=b;a.v=b;}}
function Rw(a){return U$(a);}
function PC(a){if(a.dI===null)a.dI=Uw(a);return a.dI;}
function Pt(a,b){var c,d,e;c=H9(a,b);if(c===null)return null;d=c.K;e=c.y;if(d===null)a.R=e;else d.y=e;if(e===null)a.v=d;else e.K=d;return c.be;}
function MB(a,b){return 0;}
var D7=E(0);
function MT(a,b){return MO(a.iZ(b));}
var C6=E(0);
function NQ(a,b){return a.bn(a.dk(b));}
var EN=E(0);
var Do=E(0);
var DK=E(0);
function TD(a){return Ww();}
function R0(a,b){if(b!==null&&!BH(b,De))return VO(b);return b;}
function TR(a,b){if(b!==null&&!BH(b,Do))return Ut(b);return b;}
function MY(a,b){if(b===null){Bs();return XX;}if(!BH(b,Ck)&&!BH(b,Da)){if(!BH(b,CI)&&!BH(b,C6)){if(b instanceof B6){Bs();return XC;}if(b instanceof Cb){Bs();return XA;}if(!J5(b)){Bs();return XY;}Bs();return XC;}Bs();return XZ;}Bs();return X0;}
var El=E();
function I5(a,b){J(a);a.hP(b);}
function Qd(a,b){return (a.fR()).eF(b);}
function M0(a){return (a.fR()).M();}
var H2=E(CZ);
function Pk(){var a=new H2();R8(a);return a;}
function R8(a){Fd(a);}
function PQ(a,b){E$(a,b);return a;}
function PR(a,b,c){FI(a,b,c);return a;}
function OC(a){return EO(a);}
function OT(a,b){E_(a,b);}
function Ms(a,b,c){return a.ii(b,c);}
var D1=E(0);
function Ei(){var a=this;B.call(a);a.h3=null;a.hi=null;a.eN=null;a.g_=null;a.iO=null;a.bx=0;a.fd=0;}
function X1(a,b){var c=new Ei();Ll(c,a,b);return c;}
function Ll(a,b,c){J(a);a.h3=b.fi;a.hi=b.fT;a.eN=b.fn;a.g_=b.ey;a.iO=b.eD;a.gr(c);}
function Oq(a,b){a.fd=b;a.bx=b;}
function No(a){a.bx=a.fd;}
function CY(){var a=this;B.call(a);a.f3=0;a.G=0;a.bh=0;a.cq=0;}
function FM(a,b){J(a);a.cq=(-1);a.f3=b;a.bh=b;}
function Db(a){return a.G;}
function Kg(a,b){var c,d,e;if(b>=0&&b<=a.bh){a.G=b;if(b<a.cq)a.cq=0;return a;}c=new Cu;d=a.bh;e=Y();C9(Bj(P(Bj(P(e,D(52)),b),D(53)),d),93);Gv(c,Bb(e));G(c);}
function Ip(a){a.G=0;a.bh=a.f3;a.cq=(-1);return a;}
function Cd(a){return a.bh-a.G|0;}
function Cv(a){return a.G>=a.bh?0:1;}
var DJ=E(0);
var D9=E(0);
function CW(){var a=this;B.call(a);a.gk=0;a.ci=null;a.dW=null;a.gs=null;}
function X2(a){var b=new CW();EL(b,a);return b;}
function EL(a,b){J(a);a.gk=b.P;a.ci=b.R;a.gs=b;}
function OK(a){return a.ci===null?0:1;}
function Lr(a){if(a.gk==a.gs.P)return;G(OF());}
function Ge(a){Lr(a);if(!a.W())G(P5());a.dW=a.ci;a.ci=a.ci.y;}
var CR=E(0);
var J_=E(CW);
function V$(a){var b=new J_();QJ(b,a);return b;}
function QJ(a,b){EL(a,b);}
function Os(a){Ge(a);return a.dW;}
function Sq(a){return a.h2();}
var ER=E(0);
function HW(){var a=this;B.call(a);a.et=null;a.c5=null;}
function Wp(a){var b=new HW();Mb(b,a);return b;}
function Mb(a,b){J(a);a.c5=Pk();a.et=b;}
function QI(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;d=Is();e=KH();f=c.length;g=0;while(g<f){h=c[g];i=e.i5(h.hO());if(i===null){j=h.hO();i=KH();e.iw(j,i);}k=VB(h);(i.bE())[$rt_ustr(h.j6())]=C8(k,"apply");g=g+1|0;}j=a.et;l=e.bE();m=Ws(d);n=VF(a);Mv(j,l,C8(m,"handle"),C8(n,"handle"));return d.gn();}
function Lw(a,b){if(b!=10)a.c5.gE($rt_str($rt_globals.String.fromCharCode(b)));else{(Ig()).ft(a.c5.j());a.c5=Pk();}}
function Mq(b,c){b.bu(UX(c));}
function MS(b,c,d){(b.k8()).jj(c,d);}
function Mv(b,c,d,e){($rt_globals.WebAssembly.instantiate(b,$rt_globals.Object.assign(c,{teavm:{currentTimeMillis:function(){return (new $rt_globals.Date()).getTime();},isnan:$rt_globals.isNaN,teavm_getNaN:function(){return $rt_globals.NaN;},isinf:function(n){return !$rt_globals.isFinite(n);},isfinite:$rt_globals.isFinite,putwchar:e,putwcharsErr:function(){},towlower:function(code){return (($rt_globals.String.fromCharCode(code)).toLowerCase()).charCodeAt(0);},towupper:function(code){return (($rt_globals.String.fromCharCode(code)).toUpperCase()).charCodeAt(0);},
getNativeOffset:function(instant){return (new $rt_globals.Date(instant)).getTimezoneOffset();},logString:$rt_globals.console.log,logInt:$rt_globals.console.log,logOutOfMemory:function(){$rt_globals.console.log('Out of memory');}},teavmMath:{sqrt:$rt_globals.Math.sqrt,pow:$rt_globals.Math.pow,sin:$rt_globals.Math.sin,cos:$rt_globals.Math.cos}}))).then(function(instance){return d(instance);});}
var EB=E(0);
function Et(){var a=this;B.call(a);a.bm=null;a.be=null;}
function X3(a,b){var c=new Et();LJ(c,a,b);return c;}
function LJ(a,b,c){J(a);a.bm=b;a.be=c;}
function SC(a){return a.bm;}
function Ts(a){return a.be;}
function C_(){var a=this;Et.call(a);a.cp=0;a.S=null;}
function Vq(a,b){var c=new C_();Ie(c,a,b);return c;}
function Ie(a,b,c){LJ(a,b,null);a.cp=c;}
function F1(){var a=this;C_.call(a);a.y=null;a.K=null;}
function U9(a,b){var c=new F1();Rr(c,a,b);return c;}
function Rr(a,b,c){Ie(a,b,c);a.y=null;a.K=null;}
var CX=E(C4);
function X4(a){var b=new CX();F4(b,a);return b;}
function F4(a,b){GY(a,b);}
var Kn=E(CX);
function X5(a){var b=new Kn();Pc(b,a);return b;}
function Pc(a,b){F4(a,b);}
var Fk=E(Ca);
var E8=E(0);
var E6=E(0);
var Gb=E(0);
var HP=E();
function VW(){var a=new HP();Oa(a);return a;}
function Oa(a){J(a);}
function Hs(){var a=this;B.call(a);a.cS=0;a.fV=0;a.fW=0;a.eA=0;a.b0=null;}
function UD(a){var b=new Hs();Op(b,a);return b;}
function Op(a,b){a.b0=b;J(a);a.fV=a.b0.cF;a.fW=a.b0.M();a.eA=(-1);}
function MX(a){return a.cS>=a.fW?0:1;}
function Rp(a){var b,c;IM(a);a.eA=a.cS;b=a.b0;c=a.cS;a.cS=c+1|0;return b.eF(c);}
function IM(a){if(a.fV>=a.b0.cF)return;G(OF());}
var FA=E();
var W3=null;function V4(){V4=R(FA);Mp();}
function Mp(){W3=W((FF()).data.length);W3.data[Bd(XX)]=1;W3.data[Bd(X0)]=2;W3.data[Bd(XZ)]=3;W3.data[Bd(XC)]=4;W3.data[Bd(XB)]=5;W3.data[Bd(XA)]=6;}
var Ej=E(V);
function VE(){var a=new Ej();GK(a);return a;}
function GK(a){BE(a);}
var LD=E(Ej);
function Uj(){var a=new LD();Tb(a);return a;}
function Tb(a){GK(a);}
var Hf=E();
function Iu(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(If());}return b.data.length;}
function O0(b,c){if(b===null)G(Df());if(b===I($rt_voidcls()))G(If());if(c<0)G(VQ());return Sx(b.gb(),c);}
function Sx(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var JC=E(BK);
function JB(){var a=this;B.call(a);a.c9=0;a.cY=null;}
function U6(a){var b=new JB();N6(b,a);return b;}
function N6(a,b){a.cY=b;J(a);}
function SV(a){return a.c9>=a.cY.cX.data.length?0:1;}
function NU(a){var b,c;if(a.c9==a.cY.cX.data.length)G(P5());b=a.cY.cX.data;c=a.c9;a.c9=c+1|0;return b[c];}
function HX(){var a=this;B.call(a);a.de=M;a.ds=0;a.eO=0;}
function UA(){var a=new HX();OG(a);return a;}
function OG(a){J(a);}
var Jc=E();
var HH=E(CX);
function X6(a){var b=new HH();OX(b,a);return b;}
function OX(a,b){F4(a,b);}
var IZ=E();
function Wd(){var a=new IZ();Q_(a);return a;}
function Q_(a){J(a);}
function L3(a){return LF(a);}
function LF(a){return QZ();}
var Ef=E(0);
var Dd=E(0);
var CF=E();
function F6(a){J(a);}
var Jf=E();
function Mn(b,c){var d,e,f,g,h,i,j,k;if(!b)return D(4);d=1<<c;e=d-1|0;f=(((32-CL(b)|0)+c|0)-1|0)/c|0;g=BY(f);h=BP(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=C3(b>>>h&e,d);h=h-c|0;i=k;}return Ul(g);}
function Gr(){Bc.call(this);this.i1=0;}
var X7=null;function Rm(){Rm=R(Gr);Oz();}
function Wh(a){var b=new Gr();Ik(b,a);return b;}
function Ik(a,b){Rm();Bm(a);a.i1=b;}
function GQ(b){Rm();return Wh(b);}
function Oz(){X7=I($rt_shortcls());}
var EW=E(0);
var LG=E();
function VA(){var a=new LG();Oj(a);return a;}
function Oj(a){J(a);}
var Gw=E(0);
var H1=E();
function Lt(){var b;b=Wn();D2();return F5(I(C$),b,XS);}
function T5(){var b;b=Lt();return b!==null&&b.hU()?1:0;}
function NR(b,c){return (Lt()).i9(b,c);}
function Ua(){return Hg(I(C$));}
function LO(){var a=this;B.call(a);a.cW=0;a.cU=null;}
function OU(){var a=new LO();SM(a);return a;}
function SM(a){J(a);}
function RL(a){return null;}
function Sy(a){if(!a.cW){a.cU=a.g6();a.cW=1;}return a.cU;}
function Nk(a,b){a.cW=1;a.cU=b;}
function NI(a){a.cW=0;a.cU=null;}
var IQ=E();
function C8(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
var DW=E(0);
var Ce=E(0);
function G8(){var a=this;Ek.call(a);a.eC=null;a.f7=null;}
function Uk(a,b){var c=new G8();PI(c,a,b);return c;}
function PI(a,b,c){LK(a);a.eC=b;a.f7=c;}
function QY(a,b){var c,d,$$je;a:{try{c=a.eC.c6(b);break a;}catch($$e){$$je=Bk($$e);if($$je instanceof BM){d=$$je;}else{throw $$e;}}a.c_(d);return;}c.bN(Fq(a));}
function OI(a,b){var c,d,$$je;a:{try{c=a.f7.c6(b);break a;}catch($$e){$$je=Bk($$e);if($$je instanceof BM){d=$$je;}else{throw $$e;}}a.c_(d);return;}c.bN(Fq(a));}
function Fq(a){return Vd(a);}
function Iq(){B.call(this);this.cX=null;}
function Up(a){var b=new Iq();Rg(b,a);return b;}
function Rg(a,b){J(a);a.cX=b;}
function H7(a){return U6(a);}
function Hg(b){return Up(RY(b.gb()));}
function RY(b){var c;c=MN(b);if(c===null)c=By(B,0);return c;}
function MN(b){if (!Iq.$$services$$) {Iq.$$services$$ = true;Dg.$$serviceList$$ = [[Gs, NV]];C$.$$serviceList$$ = [[Fb, Ub]];}var cls = b;if (!cls.$$serviceList$$) {return $rt_createArray($rt_objcls(), 0);}var result = $rt_createArray($rt_objcls(), cls.$$serviceList$$.length);for (var i = 0; i < result.data.length; ++i) {var serviceDesc = cls.$$serviceList$$[i];result.data[i] = new serviceDesc[0]();serviceDesc[1](result.data[i]);}return result;}
var Il=E();
function S4(b){var c,d,e,f,g,h,i,j,k;c=PY(b.ek());d=DT(c);e=W(d*2|0);f=0;g=0;h=0;i=0;while(i<d){j=e.data;g=g+ET(c)|0;h=h+ET(c)|0;k=f+1|0;j[f]=g;f=k+1|0;j[k]=h;i=i+1|0;}return e;}
function R6(b){var c,d,e,f,g,h,i;c=PY(b.ek());d=DT(c);e=W(d*2|0);f=0;g=0;while(g<d){h=e.data;f=f+DT(c)|0;i=g*2|0;h[i]=f;h[i+1|0]=ET(c);g=g+1|0;}return e;}
function GZ(){var a=this;B.call(a);a.fo=null;a.fp=null;a.fl=0;a.fm=null;}
function V7(a,b,c,d){var e=new GZ();Q8(e,a,b,c,d);return e;}
function Q8(a,b,c,d,e){J(a);a.fo=b;a.fp=c;a.fl=d;a.fm=e;}
function SP(a){MQ(a.fo,a.fp,a.fl,a.fm);}
var J6=E();
function Fj(b,c){if(b!==null)return b;G(Ph(c));}
function LA(){CN.call(this);this.ex=null;}
function VR(a){var b=new LA();S0(b,a);return b;}
function S0(a,b){Fx(a);if(b===null)b=RF(null);a.ex=b;}
function Ov(a,b){Ed(a,a.ex,b);}
function Dv(){var a=this;B.call(a);a.g7=null;a.d2=null;a.hh=0.0;a.es=0.0;a.dz=null;a.eg=null;a.bK=0;}
function KW(a,b,c,d,e){J(a);F9();a.dz=X8;a.eg=X8;KO(a,e);a.g7=b;a.d2=e.c4();a.hh=c;a.es=d;}
function Kp(a,b,c,d){var e;e=Fw(1);e.data[0]=63;KW(a,b,c,d,e);}
function KO(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.es)return;}G(CG(D(54)));}
function Gy(a,b){if(b!==null){a.dz=b;a.iB(b);return a;}G(CG(D(55)));}
function Th(a,b){}
function KQ(a,b){if(b!==null){a.eg=b;a.h0(b);return a;}G(CG(D(55)));}
function SH(a,b){}
function HN(a,b,c,d){var e,f,g,h,$$je;a:{if(a.bK!=3){if(d)break a;if(a.bK!=2)break a;}G(Of());}a.bK=!d?1:2;while(true){try{e=a.hx(b,c);}catch($$e){$$je=Bk($$e);if($$je instanceof V){f=$$je;G(Vf(f));}else{throw $$e;}}if(e.gw()){if(!d)return e;g=Cd(b);if(g<=0)return e;e=DM(g);}else if(e.dp())break;h=!e.f5()?a.dz:a.eg;b:{F9();if(h!==X9){if(h===X$)break b;else return e;}if(Cd(c)<a.d2.data.length)return X_;Kd(c,a.d2);}b.e6(Db(b)+e.g()|0);}return e;}
function GW(a,b){var c;if(a.bK!=2&&a.bK!=4)G(Of());c=a.gM(b);BR();if(c===Ya)a.bK=3;return c;}
function Mf(a,b){BR();return Ya;}
var Ft=E(0);
function JP(){B.call(this);this.fH=null;}
function VB(a){var b=new JP();Rh(b,a);return b;}
function Rh(a,b){J(a);a.fH=b;}
function TF(a,b,c){MS(a.fH,b,c);}
function N3(a,b,c){a.iH(b,c);}
function JO(){B.call(this);this.eT=null;}
function Ws(a){var b=new JO();So(b,a);return b;}
function So(a,b){J(a);a.eT=b;}
function M7(a,b){Mq(a.eT,b);}
function Sm(a,b){a.d5(b);}
var EP=E(0);
function JR(){B.call(this);this.gu=null;}
function VF(a){var b=new JR();L4(b,a);return b;}
function L4(a,b){J(a);a.gu=b;}
function P7(a,b){Lw(a.gu,b);}
function T_(a,b){a.it(b);}
function Dh(){var a=this;CM.call(a);a.cR=0;a.dG=0;a.e_=0;a.cN=0;}
var Yb=null;var Yc=null;var Yd=null;function Cz(){Cz=R(Dh);QS();}
function VY(){var a=new Dh();Hv(a);return a;}
function Hv(a){Cz();FW(a);}
function J7(a){HI(a,0.9);}
function JS(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;a.cR=b|0;a.dG=c|0;if(a.w.bC()<23){d=a.w;Cz();a.w=d.H(23,Yb);}if(a.s.bC()<23){d=a.s;Cz();a.s=d.H(23,Yb);}if(a.B.bC()<23){d=a.B;Cz();a.B=d.H(23,Yb);}if(a.u.bC()<23){d=a.u;Cz();a.u=d.H(23,Yb);}d=a.s.T(a.w);e=BA(a.s.bC(),15)*2|0;Cz();f=d.H(e,Yb);g=f.L(Si(b),Yb);h=0;while(g.dF(Yc)<0){h=h+1|0;g=g.cV(Yd);}if(h<15)h=15;i=(h+5|0)+((h-10|0)/10|0)|0;a.w=a.w.H(i,Yb);a.s=a.s.H(i,Yb);a.B=a.B.H(i,Yb);a.u=a.u.H(i,Yb);j=a.s.T(a.w);k=a.u.T(a.B);l=j.L(k,Yb);m=Si(b/c);if(l.dF(m)
<0){n=(j.cV(m)).L(l,Yb);o=(a.s.bj(a.w)).L(Yc,Yb);a.s=(o.bj(n.L(Yc,Yb))).H(i,Yb);a.w=(o.T(n.L(Yc,Yb))).H(i,Yb);}else if(l.dF(m)>0){p=(k.cV(l)).L(m,Yb);o=(a.u.bj(a.B)).L(Yc,Yb);a.u=(o.bj(p.L(Yc,Yb))).H(i,Yb);a.B=(o.T(p.L(Yc,Yb))).H(i,Yb);}}
function HI(a,b){var c,d,e,f,g;c=a.w.bj(a.s);Cz();d=c.L(Yc,Yb);e=(a.B.bj(a.u)).L(Yc,Yb);f=BJ((a.s.T(a.w)).X()/2.0*b);g=BJ((a.u.T(a.B)).X()/2.0*b);a.w=d.T(f);a.s=d.bj(f);a.B=e.T(g);a.u=e.bj(g);}
function Jq(b){var c;Cz();c=VY();c.w=BJ(b.w.X());c.s=BJ(b.s.X());c.B=BJ(b.B.X());c.u=BJ(b.u.X());c.cO=b.cO;return c;}
function QS(){Eu();Yb=Xh;Yc=IO(D(56));Yd=IO(D(57));}
var Ky=E(V);
function Js(){var a=new Ky();QK(a);return a;}
function QK(a){BE(a);}
function D0(){var a=this;CY.call(a);a.f9=0;a.eY=null;a.jb=null;}
function Hw(a,b,c,d,e,f){FM(a,c);S8();a.jb=XJ;a.f9=b;a.eY=d;a.G=e;a.bh=f;}
function SZ(b,c,d){return Vx(0,b.data.length,b,c,c+d|0,0,0);}
function P_(b){return SZ(b,0,b.data.length);}
function R5(a,b,c,d){var e,f,g,h,i,j,k,l;if(!d)return a;if(a.gC())G(Uj());if(Cd(a)<d)G(U2());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new B1;i=Y();Bj(P(Bj(P(i,D(58)),g),D(59)),f);Cx(h,Bb(i));G(h);}if(d<0){h=new B1;i=Y();P(Bj(P(i,D(60)),d),D(61));Cx(h,Bb(i));G(h);}j=a.G+a.f9|0;k=0;while(k<d){l=a.eY.data;g=j+1|0;f=c+1|0;l[j]=e[c];k=k+1|0;j=g;c=f;}a.G=a.G+d|0;return a;}}e=b.data;h=new B1;f=e.length;i=Y();C9(Bj(P(Bj(P(i,D(62)),c),D(53)),f),41);Cx(h,Bb(i));G(h);}
function Kd(a,b){return a.fz(b,0,b.data.length);}
function Fa(a){Ip(a);return a;}
function KE(){var a=this;D0.call(a);a.gD=0;a.eE=0;}
function Vx(a,b,c,d,e,f,g){var h=new KE();MR(h,a,b,c,d,e,f,g);return h;}
function MR(a,b,c,d,e,f,g,h){Hw(a,b,c,d,e,f);a.gD=g;a.eE=h;}
function RM(a){return a.eE;}
var CI=E(0);
function DR(){CF.call(this);this.cF=0;}
function K6(a){F6(a);}
function QC(a){return UD(a);}
var Fe=E(0);
function DN(){var a=this;DR.call(a);a.E=null;a.bg=0;}
function Ye(){var a=new DN();J8(a);return a;}
function VC(a){var b=new DN();EF(b,a);return b;}
function VX(a){var b=new DN();Pq(b,a);return b;}
function J8(a){EF(a,10);}
function EF(a,b){K6(a);a.E=By(B,b);}
function Pq(a,b){var c,d;EF(a,b.M());c=b.Z();d=0;while(d<a.E.data.length){a.E.data[d]=c.N();d=d+1|0;}a.bg=a.E.data.length;}
function Ni(a,b){var c;if(a.E.data.length<b){c=a.E.data.length>=1073741823?2147483647:BA(b,BA(a.E.data.length*2|0,5));a.E=SO(a.E,c);}}
function Py(a,b){GU(a,b);return a.E.data[b];}
function N4(a){return a.bg;}
function R$(a,b){var c,d;a.bP(a.bg+1|0);c=a.E.data;d=a.bg;a.bg=d+1|0;c[d]=b;a.cF=a.cF+1|0;return 1;}
function GU(a,b){if(b>=0&&b<a.bg)return;G(DL());}
function Oi(a){var b,c,d;if(!a.bg)return D(63);b=a.bg-1|0;c=Mo(a.bg*16|0);c.r(91);d=0;while(d<b){(c.bf(a.E.data[d]===a?D(64):a.E.data[d])).C(D(51));d=d+1|0;}c.bf(a.E.data[b]===a?D(64):a.E.data[b]);return (c.r(93)).j();}
var FJ=E(DN);
function Wb(){var a=new FJ();Pu(a);return a;}
function Pu(a){J8(a);}
function Ou(a,b){var c,d;c=a.Z();while(c.W()){d=c.N();d.bR(b);}}
function Mg(a,b){var c,d;c=a.Z();while(c.W()){d=c.N();d.b_(b);}}
var Er=E(0);
function BU(){var a=this;B.call(a);a.iy=null;a.f_=0;}
var Yf=null;var Yg=null;var XU=null;var Yh=null;var Yi=null;var Yj=null;var Yk=null;var Yl=null;var Ym=null;function ME(){ME=R(BU);Qw();}
function Ci(a,b){var c=new BU();Lc(c,a,b);return c;}
function Lc(a,b,c){ME();J(a);a.iy=b;a.f_=c;}
function Dt(a){return a.f_;}
function Qw(){Yf=Ci(D(65),2147483647);Yg=Ci(D(66),1000);XU=Ci(D(67),900);Yh=Ci(D(68),800);Yi=Ci(D(69),700);Yj=Ci(D(70),500);Yk=Ci(D(71),400);Yl=Ci(D(72),300);Ym=Ci(D(73),(-2147483648));}
function Ep(){B.call(this);this.eV=0;}
function I6(a){J(a);a.gF();}
function Hy(a,b){J(a);a.dA(b);}
function QW(a){a.dA(a.dN());}
function Qu(a){a.dA(Gi(a.cm()));}
function PZ(a){return a.dV(VX((a.cm()).ja()));}
function Rn(a,b){return (a.cm()).c$(b);}
function Q9(a,b,c){a.g9();(a.cm()).bw(b,c);return a;}
function QM(a){if(a.eV){a.hD();a.eV=0;}}
function Te(a){return a.eH();}
function N9(a,b,c){return a.gL(b,c);}
var In=E();
function Mk(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Nl(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&Hz(b.constructor,c)?1:0;}
function Hz(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Hz(d[e],c))return 1;e=e+1|0;}return 0;}
function UH(b){b.eh();}
function Mc(b){Qj(b,0);}
function Qj(b,c){return setTimeout(function(){UH(b);},c);}
function L9(){return Tt();}
function Qr(b){return b.$meta.primitive?1:0;}
function S_(b){return b.$meta.item;}
function Qg(b){return $rt_str(b.$meta.name);}
function Tt(){return [];}
function DG(){var a=this;B.call(a);a.gB=null;a.ip=null;}
function IG(a,b,c){var d,e,f,g;d=c.data;J(a);I2(b);e=d.length;f=0;while(f<e){g=d[f];I2(g);f=f+1|0;}a.gB=b;a.ip=c.c4();}
function I2(b){var c,d;if(b.bW())G(Kb(b));if(!I4(b.o(0)))G(Kb(b));c=1;while(c<b.g()){a:{d=b.o(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(I4(d))break a;else G(Kb(b));}}c=c+1|0;}}
function I4(b){var c;a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}c=1;break a;}c=0;}return c;}
function Dk(){B.call(this);this.im=null;}
var X$=null;var X9=null;var X8=null;function F9(){F9=R(Dk);Me();}
function KM(a){var b=new Dk();IS(b,a);return b;}
function IS(a,b){F9();J(a);a.im=b;}
function Me(){X$=KM(D(74));X9=KM(D(75));X8=KM(D(76));}
function B6(){B.call(this);this.cg=0;}
var XI=null;var Yn=null;var Yo=null;function EQ(){EQ=R(B6);Oc();}
function OD(a){var b=new B6();Ih(b,a);return b;}
function Ih(a,b){EQ();J(a);a.cg=b;}
function RJ(a){return a.cg;}
function Di(b){EQ();return !b?Yn:XI;}
function JJ(b){EQ();return !b?D(77):D(78);}
function Ny(a){return JJ(a.cg);}
function M9(a,b){if(a===b)return 1;return b instanceof B6&&b.cg==a.cg?1:0;}
function Oc(){XI=OD(1);Yn=OD(0);Yo=I($rt_booleancls());}
var Cu=E(V);
function If(){var a=new Cu();Fh(a);return a;}
function CG(a){var b=new Cu();Gv(b,a);return b;}
function Fh(a){BE(a);}
function Gv(a,b){C0(a,b);}
function Jd(){Cu.call(this);this.hj=null;}
function Kb(a){var b=new Jd();Q2(b,a);return b;}
function Q2(a,b){Fh(a);a.hj=b;}
var LP=E(V);
function P5(){var a=new LP();MM(a);return a;}
function MM(a){BE(a);}
var JT=E();
function O7(b){return $rt_str(b);}
function DH(){C1.call(this);this.eo=null;}
function Yp(a){var b=new DH();G3(b,a);return b;}
function G3(a,b){Ew(a);a.eo=b;}
function FX(){var a=this;DH.call(a);a.hy=0;a.d9=0;a.bo=null;a.dH=null;a.fc=null;}
function Yq(a,b){var c=new FX();Kv(c,a,b);return c;}
function Kv(a,b,c){G3(a,b);a.bo=Y();a.dH=BY(32);a.hy=c;QX();a.fc=Yr;}
function Ns(a,b,c,d){var $$je;if(!Jx(a))return;a:{try{a.eo.cv(b,c,d);break a;}catch($$e){$$je=Bk($$e);if($$je instanceof Fk){}else{throw $$e;}}a.d9=1;}}
function Jx(a){if(a.eo===null)a.d9=1;return a.d9?0:1;}
function HY(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=Tu(b,c,d-c|0);g=Fw(BA(16,B8(e.length,1024)));h=P_(g);i=a.fc.ia();F9();j=X9;i=Gy(i,j);j=X9;k=KQ(i,j);while(true){l=(HN(k,f,h,1)).dp();a.cv(g,0,Db(h));Fa(h);if(!l)break;}while(true){l=(GW(k,h)).dp();a.cv(g,0,Db(h));Fa(h);if(!l)break;}}
function O4(a,b){(a.bo.C(b)).r(10);Ho(a);}
function Ho(a){var b;b=a.bo.g()<=a.dH.data.length?a.dH:BY(a.bo.g());a.bo.eU(0,a.bo.g(),b,0);HY(a,b,0,a.bo.g());a.bo.eG(0);}
var F$=E(0);
var Fv=E(0);
var CU=E(CF);
function Fr(a){F6(a);}
function DZ(){CU.call(this);this.gj=null;}
function Ys(a){var b=new DZ();IR(b,a);return b;}
function IR(a,b){Fr(a);a.gj=b;}
function Pj(a){return a.gj;}
var Jw=E(DZ);
function U$(a){var b=new Jw();Pp(b,a);return b;}
function Pp(a,b){IR(a,b);}
function Rt(a){return V$(a.gN());}
var F7=E(0);
var G6=E(CA);
function UQ(){var a=new G6();RZ(a);return a;}
function RZ(a){En(a);}
function Ti(a){return a;}
function Rz(a,b){return GO(a,b);}
function Px(a,b){IA(a,b);}
function To(a,b,c){return I$(a,b,c);}
var ES=E(0);
var ED=E(0);
function Kj(){var a=this;B.call(a);a.dL=null;a.bJ=null;}
function U5(a){var b=new Kj();QG(b,a);return b;}
function QG(a,b){var c;J(a);a.bJ=b;c=a;b.classObject=c;}
function Hq(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=U5(b);return c;}
function LX(a){var b,c;b=DA(a);c=Y();Bj(P(c,D(79)),b);return Bb(c);}
function N7(a){return a.bJ;}
function P3(a,b){return Nl(b,a.bJ);}
function TI(a){if(a.dL===null)a.dL=Qg(a.bJ);return a.dL;}
function RD(a){return Qr(a.bJ);}
function Md(a){return Hq(S_(a.bJ));}
var Lp=E(BK);
function Cy(){Bc.call(this);this.di=0.0;}
var Yt=0.0;var Yu=null;function Jp(){Jp=R(Cy);Ow();}
function V9(a){var b=new Cy();E5(b,a);return b;}
function UR(a){var b=new Cy();J4(b,a);return b;}
function E5(a,b){Jp();Bm(a);a.di=b;}
function J4(a,b){Jp();E5(a,b);}
function Lu(b){Jp();return V9(b);}
function Nb(a,b){if(a===b)return 1;return b instanceof Cy&&b.di===a.di?1:0;}
function Ow(){Yt=$rt_globals.NaN;Yu=I($rt_floatcls());}
var Ey=E(0);
var HJ=E();
function NH(b,c){var d,e,f,g;d=b.data;e=BY(c);f=B8(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function SO(b,c){var d,e,f,g;d=b.data;e=O0((DO(b)).em(),c);f=B8(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Ne(b,c){return N8(b,0,b.data.length,c);}
function N8(b,c,d,e){var f,g,h,i,j;f=BX(c,d);if(f>0)G(If());if(!f)return (-1);g=d-1|0;while(true){h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>g)return ( -i|0)-2|0;}else{g=i-1|0;if(g<c)return ( -i|0)-1|0;}}return i;}
function LE(){Ep.call(this);this.ed=null;}
function U0(){var a=new LE();OH(a);return a;}
function VO(a){var b=new LE();PV(b,a);return b;}
function OH(a){I6(a);}
function PV(a,b){Hy(a,b);}
function Sb(a){return a.ed;}
function Rj(a,b){a.ed=b;}
function QT(a){return a.ed;}
function Ra(a,b){return b;}
function SA(a){return a.i$();}
var Ff=E();
var Yv=null;function Ig(){var b;if(Yv===null){b=new FX;Tc();Kv(b,XN,0);Yv=b;}return Yv;}
function C7(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Iu(b)){g=e+f|0;if(g<=Iu(d)){a:{b:{if(b!==d){h=(DO(b)).em();i=(DO(d)).em();if(h!==null&&i!==null){if(h===i)break b;if(!h.cZ()&&!i.cZ()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.g5(n)){Gj(b,c,d,e,k);G(Js());}k=k+1|0;g=m;}Gj(b,c,d,e,f);return;}if(!h.cZ())break a;if(i.cZ())break b;else break a;}G(Js());}}Gj(b,c,d,e,f);return;}G(Js());}}G(DL());}G(Ph(D(80)));}
function Gj(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Jy(){return Long_fromNumber(new Date().getTime());}
var DU=E();
var Xx=null;var Xy=null;function Vk(){Vk=R(DU);RA();}
function RA(){Xx=B_([(-1),(-1),31,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5]);Xy=B_([(-2147483648),1162261467,1073741824,1220703125,362797056,1977326743,1073741824,387420489,1000000000,214358881,429981696,815730721,1475789056,170859375,268435456,410338673,612220032,893871739,1280000000,1801088541,113379904,148035889,191102976,244140625,308915776,387420489,481890304,594823321,729000000,887503681,1073741824,1291467969,1544804416,1838265625,60466176]);}
var Ku=E(CW);
function Wr(a){var b=new Ku();Sl(b,a);return b;}
function Sl(a,b){EL(a,b);}
function SY(a){Ge(a);return a.dW.bm;}
function Bh(){var a=this;Bc.call(a);a.bT=null;a.i=0;a.h=M;a.c=0;a.bO=0;}
var Yw=null;var Yx=null;var Yy=null;var Yz=null;var YA=null;var YB=null;var YC=null;var YD=null;var YE=null;var YF=null;var YG=null;var YH=null;function Bf(){Bf=R(Bh);N0();}
function Rd(a,b){var c=new Bh();Io(c,a,b);return c;}
function CO(a,b){var c=new Bh();EI(c,a,b);return c;}
function YI(a,b,c){var d=new Bh();FS(d,a,b,c);return d;}
function IO(a){var b=new Bh();Lv(b,a);return b;}
function Si(a){var b=new Bh();H6(b,a);return b;}
function CT(a,b){var c=new Bh();CJ(c,a,b);return c;}
function Uz(a){var b=new Bh();HF(b,a);return b;}
function Io(a,b,c){Bf();Bm(a);a.h=b;a.c=c;a.i=Cr(b);}
function EI(a,b,c){Bf();Bm(a);a.h=C(b);a.c=c;a.i=HR(b);}
function FS(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;Bf();Bm(a);e=c+(d-1|0)|0;if(b===null)G(Df());f=b.data;if(e<f.length&&c>=0&&d>0&&e>=0){g=Mo(d);h=0;if(c>e)i=c;else if(f[c]!=43)i=c;else{c=c+1|0;i=c;}j=0;k=0;while(true){l=BX(i,e);if(l>0)break;if(f[i]==46)break;if(f[i]==101)break;if(f[i]==69)break;if(!k){if(f[i]!=48)k=1;else j=j+1|0;}i=i+1|0;}m=i-c|0;g.eL(b,c,m);m=h+m|0;if(l<=0&&f[i]==46){n=i+1|0;i=n;while(i<=e&&f[i]!=101&&f[i]!=69){if(!k){if(f[i]!=48)k=1;else j=j+1|0;}i=i+1|0;}a.c=i-n|0;m=m+a.c|0;g.eL(b,n,a.c);}
else a.c=0;if(i<=e&&!(f[i]!=101&&f[i]!=69)){n=i+1|0;if(n>e)i=n;else if(f[n]!=43)i=n;else{i=n+1|0;if(i>e)i=n;else if(f[i]==45)i=n;}o=JY(b,i,(e+1|0)-i|0);p=S(C(a.c),C(D6(o)));a.c=K(p);if(BG(p,C(a.c)))G(CH(D(81)));}if(m>=19)D_(a,Vu(g.j()));else{a.h=KG(g.j());a.i=Cr(a.h);}a.bO=g.g()-j|0;if(g.o(0)==45)a.bO=a.bO-1|0;return;}G(T0());}
function Lv(a,b){Bf();FS(a,b.ek(),0,b.g());}
function H6(a,b){var c,d,e,f;Bf();Bm(a);if(!(!$rt_globals.isFinite(b)?1:0)&&!($rt_globals.isNaN(b)?1:0)){c=$rt_doubleToLongBits(b);a.c=1075-K(H(Z(c,52),C(2047)))|0;d=a.c!=1075?Cs(H(c,F(4294967295, 1048575)),F(0, 1048576)):U(H(c,F(4294967295, 1048575)),1);if(X(d,M)){a.c=0;a.bO=1;}if(a.c>0){e=B8(a.c,IP(d));d=T(d,e);a.c=a.c-e|0;}if(BG(Z(c,63),M))d=Bt(d);f=Cr(d);if(a.c>=0){if(a.c<=0){a.h=d;a.i=f;}else if(a.c<YC.data.length&&(f+YD.data[a.c]|0)<64){a.h=Q(d,YC.data[a.c]);a.i=Cr(a.h);}else D_(a,GL(BF(d),a.c));}else
{a.i=!f?0:f-a.c|0;if(a.i<64)a.h=U(d, -a.c|0);else a.bT=(BF(d)).O( -a.c|0);a.c=0;}return;}G(CH(D(82)));}
function CJ(a,b,c){Bf();Bm(a);if(b!==null){a.c=c;D_(a,b);return;}G(Df());}
function HF(a,b){Bf();EI(a,b,0);}
function BN(b,c){Bf();if(!c)return JL(b);if(X(b,M)&&c>=0&&c<YG.data.length)return YG.data[c];return Rd(b,c);}
function JL(b){Bf();if(B3(b,M)&&Bx(b,C(11)))return YF.data[K(b)];return Rd(b,0);}
function BJ(b){Bf();if(!(!$rt_globals.isFinite(b)?1:0)&&!($rt_globals.isNaN(b)?1:0))return IO(EJ(b));G(CH(D(83)));}
function MH(a,b){var c;a:{c=a.c-b.c|0;if(BW(a)){if(c<=0)return b;if(!BW(b))break a;return a;}if(BW(b)&&c>=0)return a;}if(c){if(c>0)return FR(a,b,c);return FR(b,a, -c|0);}if((BA(a.i,b.i)+1|0)<64)return BN(L(a.h,b.h),a.c);return CT((Ba(a)).bq(Ba(b)),a.c);}
function FR(b,c,d){var e,f,g,h,i;Bf();if(d<YB.data.length){e=b.i;f=c.i+YE.data[d]|0;if((BA(e,f)+1|0)<64)return BN(L(b.h,Q(c.h,YB.data[d])),b.c);}g=new Bh;h=Ba(b);i=Cj(Ba(c),C(d));CJ(g,h.bq(i),b.c);return g;}
function PO(a,b){var c,d,e,f,g,h,i;a:{c=a.c-b.c|0;if(BW(a)){if(c<=0)return b.id();if(!BW(b))break a;return a;}if(BW(b)&&c>=0)return a;}if(!c){if((BA(a.i,b.i)+1|0)<64)return BN(S(a.h,b.h),a.c);return CT((Ba(a)).bB(Ba(b)),a.c);}if(c>0){if(c<YB.data.length){d=a.i;e=b.i+YE.data[c]|0;if((BA(d,e)+1|0)<64)return BN(S(a.h,Q(b.h,YB.data[c])),a.c);}f=new Bh;g=Ba(a);h=Cj(Ba(b),C(c));CJ(f,g.bB(h),a.c);return f;}d= -c|0;if(d<YB.data.length){e=a.i+YE.data[d]|0;i=b.i;if((BA(e,i)+1|0)<64)return BN(S(Q(a.h,YB.data[d]),b.h),
b.c);}f=new Bh;g=Cj(Ba(a),C(d));CJ(f,g.bB(Ba(b)),b.c);return f;}
function ST(a,b){var c,d,e,f;c=L(C(a.c),C(b.c));if(!BW(a)&&!BW(b)){if((a.i+b.i|0)<64)return BN(Q(a.h,b.h),FE(c));d=new Bh;e=Ba(a);f=Ba(b);e=e.z(f);CJ(d,e,FE(c));return d;}return JW(c);}
function NT(a,b,c,d){return a.fM(b,c,Ls(d));}
function Mm(a,b,c,d){var e,f,g,h,i,j,k;if(d===null)G(Df());if(BW(b))G(Cq(D(84)));a:{e=S(S(C(a.c),C(b.c)),C(c));if(a.i<64&&b.i<64){f=Ds(e,M);if(!f)return Dq(a.h,b.h,c,d);if(f>0){if(B3(e,C(YB.data.length)))break a;f=b.i;g=YE.data;h=K(e);if((f+g[h]|0)>=64)break a;return Dq(a.h,Q(b.h,YB.data[h]),c,d);}i=Bt(e);if(Bx(i,C(YB.data.length))){f=a.i;g=YE.data;h=K(i);if((f+g[h]|0)<64)return Dq(Q(a.h,YB.data[h]),b.h,c,d);}}}j=Ba(a);k=Ba(b);f=Ds(e,M);if(f>0)k=Cj(k,C(K(e)));else if(f<0)j=Cj(j,C(K(Bt(e))));return F_(j,k,c,
d);}
function F_(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Bf();f=b.fE(c);g=f.data;h=g[0];i=g[1];if(!i.bl())return CT(h,d);j=BP(b.bl(),c.bl());if(c.cz()>=63){k=((i.dx()).eK()).dn(c.dx());l=Dy(!h.cL(0)?0:1,BP(j,5+k|0),e);}else{m=i.bG();n=c.bG();k=Gf(U(DI(m),1),DI(n));l=Dy(!h.cL(0)?0:1,BP(j,5+k|0),e);}if(!l)return CT(h,d);if(h.cz()<63)return BN(L(h.bG(),C(l)),d);o=h.bq(BF(C(l)));return CT(o,d);}
function Dq(b,c,d,e){var f,g,h,i;Bf();f=Bg(b,c);g=BO(b,c);h=BP(Eq(b),Eq(c));if(BG(g,M)){i=Gf(U(DI(g),1),DI(c));f=L(f,C(Dy(K(f)&1,BP(h,5+i|0),e)));}return BN(f,d);}
function Sc(a,b,c){return a.fM(b,a.c,c);}
function T7(a){a:{if(a.i>=63){if(a.i!=63)break a;if(X(a.h,F(0, 2147483648)))break a;}return BN(Bt(a.h),a.c);}return CT((Ba(a)).fA(),a.c);}
function P9(a){if(a.i>=64)return (Ba(a)).bl();return Eq(a.h);}
function BW(a){return !a.i&&BG(a.h,C(-1))?1:0;}
function Sz(a){return a.c;}
function SK(a,b,c){var d,e,f,g,h;if(c===null)G(Df());d=S(C(b),C(a.c));e=Ds(d,M);if(!e)return a;if(e<=0){if(a.i<64){f=Bt(d);Bf();if(Bx(f,C(YB.data.length)))return Dq(a.h,YB.data[K(f)],b,c);}return F_(Ba(a),Cw(Bt(d)),b,c);}Bf();if(Bx(d,C(YB.data.length))){e=a.i;g=YE.data;h=K(d);if((e+g[h]|0)<64)return BN(Q(a.h,YB.data[h]),b);}return CT(Cj(Ba(a),C(K(d))),b);}
function L8(a,b){var c,d,e,f,g,h,i,j;c=a.bl();d=b.bl();e=BX(c,d);if(e){if(e>=0)return 1;return (-1);}if(a.c==b.c&&a.i<64&&b.i<64)return Bx(a.h,b.h)?(-1):Bq(a.h,b.h)?0:1;f=S(C(a.c),C(b.c));g=FU(a)-FU(b)|0;h=C(g);if(Cc(h,L(f,C(1))))return c;if(Bx(h,S(f,C(1))))return  -c|0;i=Ba(a);j=Ba(b);e=Ds(f,M);if(e<0)i=i.z(Cw(Bt(f)));else if(e>0)j=j.z(Cw(f));return i.dn(j);}
function Pf(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=a.bl();c=1076;d=S(C(a.i),WU(a.c/0.3010299956639812));if(B3(d,C(-1074))&&b){if(Cc(d,C(1025)))return b*Infinity;e=(Ba(a)).dx();if(a.c<=0)f=e.z(Cw(C( -a.c|0)));else{g=Cw(C(a.c));h=100-K(d)|0;if(h>0){e=e.O(h);c=c-h|0;}i=e.fE(g);j=i.data;k=(j[1].eK()).dn(g);f=(j[0].O(2)).bq(BF(C((BP(k,k+3|0)/2|0)+1|0)));c=c+(-2)|0;}l=f.iQ();m=f.cz()-54|0;if(m<=0){n=U(f.bG(), -m|0);o=BG(H(n,C(3)),C(3))?n:L(n,C(2));}else{n=(f.cT(m)).bG();o=!(X(H(n,C(1)),C(1))&&l<m)&&BG(H(n,C(3)),
C(3))?n:L(n,C(2));}if(X(H(o,F(0, 4194304)),M)){p=Z(o,1);q=c+m|0;}else{p=Z(o,2);q=c+(m+1|0)|0;}if(q>2046)return b*Infinity;if(q<=0){if(q<(-53))return b*0.0;a:{p=Z(n,1);r=H(p,T(C(-1),63+q|0));p=Z(p, -q|0);if(BG(H(p,C(3)),C(3))){if(BG(H(p,C(1)),C(1)))break a;if(X(r,M))break a;if(l>=m)break a;}p=L(p,C(1));}q=0;p=Z(p,1);}p=Cs(Cs(H(C(b),F(0, 2147483648)),U(C(q),52)),H(p,F(4294967295, 1048575)));return $rt_longBitsToDouble(p);}return b*0.0;}
function Gf(b,c){var d;Bf();d=Ds(b,c);return d>0?1:d>=0?0:(-1);}
function Dy(b,c,d){var e;Bf();a:{e=0;Wg();switch(W_.data[Bd(d)]){case 1:if(!c)break a;G(Cq(D(85)));case 2:e=CC(c);break a;case 3:break;case 4:e=BA(CC(c),0);break a;case 5:e=B8(CC(c),0);break a;case 6:if(EE(c)<5)break a;e=CC(c);break a;case 7:if(EE(c)<=5)break a;e=CC(c);break a;case 8:if((EE(c)+b|0)<=5)break a;e=CC(c);break a;default:break a;}}return e;}
function FU(a){return a.bO>0?a.bO:((a.i-1|0)*0.3010299956639812|0)+1|0;}
function FE(b){Bf();if(Bx(b,C(-2147483648)))G(Cq(D(86)));if(Bq(b,C(2147483647)))return K(b);G(Cq(D(87)));}
function JW(b){var c;Bf();c=K(b);if(X(b,C(c)))return BN(M,c);if(Bx(b,M))return CO(0,(-2147483648));return CO(0,2147483647);}
function Ba(a){if(a.bT===null)a.bT=BF(a.h);return a.bT;}
function D_(a,b){a.bT=b;a.i=b.cz();if(a.i<64)a.h=b.bG();}
function Cr(b){Bf();if(Bx(b,M))b=Ki(b,C(-1));return 64-Hr(b)|0;}
function HR(b){Bf();if(b<0)b=b^(-1);return 32-CL(b)|0;}
function N0(){var b,c;Yw=CO(0,0);Yx=CO(1,0);Yy=CO(10,0);YB=Fo([C(1),C(10),C(100),C(1000),C(10000),C(100000),C(1000000),C(10000000),C(100000000),C(1000000000),F(1410065408, 2),F(1215752192, 23),F(3567587328, 232),F(1316134912, 2328),F(276447232, 23283),F(2764472320, 232830),F(1874919424, 2328306),F(1569325056, 23283064),F(2808348672, 232830643)]);YC=Fo([C(1),C(5),C(25),C(125),C(625),C(3125),C(15625),C(78125),C(390625),C(1953125),C(9765625),C(48828125),C(244140625),C(1220703125),F(1808548329, 1),F(452807053, 7),
F(2264035265, 35),F(2730241733, 177),F(766306777, 888),F(3831533885, 4440),F(1977800241, 22204),F(1299066613, 111022),F(2200365769, 555111),F(2411894253, 2775557),F(3469536673, 13877787),F(167814181, 69388939),F(839070905, 346944695),F(4195354525, 1734723475)]);YD=W(YC.data.length);YE=W(YB.data.length);YF=By(Bh,11);YG=By(Bh,11);YH=BY(100);b=0;while(b<YG.data.length){YF.data[b]=CO(b,0);YG.data[b]=CO(0,b);YH.data[b]=48;b=b+1|0;}while(b<YH.data.length){YH.data[b]=48;b=b+1|0;}c=0;while(c<YD.data.length){YD.data[c]
=Cr(YC.data[c]);c=c+1|0;}c=0;while(c<YE.data.length){YE.data[c]=Cr(YB.data[c]);c=c+1|0;}Bz();YA=YJ;Yz=YK;}
var BZ=E();
var YL=null;var YM=null;var YN=null;var YO=null;var YP=null;var YQ=null;function Br(){Br=R(BZ);Nj();}
function E4(b){Br();return (b&64512)!=55296?0:1;}
function E2(b){Br();return (b&64512)!=56320?0:1;}
function K1(b){Br();return !E4(b)&&!E2(b)?0:1;}
function Kw(b,c){Br();return ((b&1023)<<10|c&1023)+65536|0;}
function Gu(b){var c;Br();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function F2(b){Br();return (56320|b&1023)&65535;}
function FV(b){Br();return GM(b)&65535;}
function GM(b){Br();return GG(HL(),b);}
function HL(){Br();if(YN===null)YN=R6(((I9()).value!==null?$rt_str((I9()).value):null));return YN;}
function I9(){Br();if(YP===null)YP=Ii();return YP;}
function GG(b,c){var d,e;Br();d=JV(b,c);if(d>=0){e=b.data;if(d<(e.length/2|0))return c+e[(d*2|0)+1|0]|0;}return 0;}
function JV(b,c){var d,e,f,g,h,i;Br();d=b.data;e=0;f=(d.length/2|0)-1|0;while(true){g=(e+f|0)/2|0;h=d[g*2|0];i=BX(h,c);if(!i)break;if(i<=0){e=g+1|0;if(e>f)return g;}else{f=g-1|0;if(f<e)return f;}}return g;}
function Ex(b){Br();return II(b);}
function II(b){var c,d,e,f,g,h,i,j;Br();c=GT();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=BX(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function C3(b,c){Br();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function GT(){Br();if(YM===null)YM=S4(((GJ()).value!==null?$rt_str((GJ()).value):null));return YM;}
function GJ(){Br();if(YQ===null)YQ=KK();return YQ;}
function Nj(){YL=I($rt_charcls());YO=By(BZ,128);}
function Ii(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function KK(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
var DF=E();
var YR=null;var YS=null;function Dj(){Dj=R(DF);M6();}
function KZ(b,c,d){var e,f,g,h,i,j;Dj();e=0;f=c;g=b;a:{while(true){if(e>=d)break a;h=g*g;i=f*f;if(h+i>=8.0)break;j=h-i+b;f=2.0*g*f+c;e=e+1|0;g=j;}}return e;}
function Kx(b,c,d,e){var f;Dj();YR.iN();f=YS.bp();if(!(f!==null&&f.e_==d&&e>=f.cN&&b==f.cR&&c==f.dG)){B4();f=Jq(Xi.data[d]);f.e_=d;JS(f,b,c);YS.eM(f);}while(f.cN<e){J7(f);f.cN=f.cN+1|0;}}
function JA(b,c){Dj();if(c!==null&&c.data.length==b)return c;return W(b);}
function HS(b,c){var d,e,f;Dj();d=0;e=YS.bp();while(d<e.cR){f=d+1|0;IW(d,b,c);d=f;}}
function IW(b,c,d){var e,f,g,h;Dj();e=d.data;f=Ij(b,c);g=YS.bp();h=KZ(f.er,f.db,g.cO);e[b]=h;return h;}
function Ij(b,c){var d,e,f,g,h;Dj();d=YS.bp();e=YR.bp();if(e===null){f=YR;e=U_();f.eM(e);e.dB=d.w.X();e.fQ=d.s.X();e.dT=null;e.dj=1.7976931348623157E308;e.db=1.7976931348623157E308;}if(e.dQ===null){e.fL=(e.fQ-e.dB)/(d.cR-1|0);e.dT=(d.u.T(d.B)).gY(Uz(d.dG-1|0),d.u.bC(),6);}g=c;if(g!==e.dj){f=d.u;h=e.dT;e.dj=g;e.dQ=f.T(h.cV(BJ(g)));e.fB=e.dQ.X();}e.er=e.dB+e.fL*b;e.db=e.fB;return e;}
function M6(){YR=OU();YS=OU();}
function HQ(){var a=this;B.call(a);a.dY=null;a.dw=null;}
function U3(a,b){var c=new HQ();Tf(c,a,b);return c;}
function Tf(a,b,c){a.dw=b;a.dY=c;J(a);}
function Tj(a,b){var c,$$je;a:{try{a.dY.e0(a.dw);}catch($$e){$$je=Bk($$e);if($$je instanceof BM){c=$$je;break a;}else{throw $$e;}}return;}G(c);}
function TC(a,b){var c,$$je;a:{try{a.dY.e0(a.dw);}catch($$e){$$je=Bk($$e);if($$je instanceof BM){c=$$je;break a;}else{throw $$e;}}return;}G(c);}
function Lo(){B.call(this);this.fZ=null;}
function Vs(a){var b=new Lo();Sj(b,a);return b;}
function Sj(a,b){J(a);a.fZ=b;}
function RH(a){TE(a.fZ);}
var Hp=E();
function Ug(b){return b;}
function CP(){B.call(this);this.bD=null;}
function EG(a,b){J(a);a.bD=b;}
function Hi(a){return a.bD;}
function KC(a,b){var c,d,e;if(b===null){Bs();return XX;}a:{c=$rt_str(typeof b);d=(-1);switch(c.b9()){case -1034364087:if(!c.A(D(88)))break a;d=2;break a;case -1023368385:if(!c.A(D(89)))break a;d=0;break a;case -891985903:if(!c.A(D(90)))break a;d=1;break a;case 64711720:if(!c.A(D(91)))break a;d=3;break a;default:}}switch(d){case 0:if(!($rt_globals.Object.prototype.toString.apply(b)==='[object Array]'?1:0)){Bs();e=X0;}else{Bs();e=XZ;}return e;case 1:break;case 2:Bs();return XC;case 3:Bs();return XB;default:Bs();return XY;}Bs();return XA;}
function LT(a){return K4();}
function G2(a,b){if(!(b instanceof FY))return Jb(b);return b;}
function IK(a,b){if(!(b instanceof Gs))return Pd(b);return b;}
function JE(a,b){Ui();switch(Xz.data[Bd(a.cE(b))]){case 1:return O7(b);case 2:return Di(Om(b));case 3:return ON(b);default:}return b;}
function Kh(a,b){if(b===null)return null;if(b instanceof Cb)return $rt_ustr(b);if(b instanceof B6)return !!b.fy();if(b instanceof Cy)return b.jQ();if(b instanceof Cp)return b.X();if(b instanceof Bc)return b.V();if(!(b instanceof BZ))return b;return $rt_ustr(I7(b));}
function H4(a){return a.eH();}
function ON(b){var c;c=Ug(b);if(c!==R1(c))return FO(c);if(S9(c)<=2.147483647E9)return Bv(c|0);return EZ(WU(c));}
function MD(a){return a.fN();}
function P6(a){return a.gi();}
function PM(a,b){return a.fu(b);}
function Oh(a,b){return a.gf(b);}
function RE(a,b){return a.ge(b);}
function K4(){return {};}
function N$(b){var keys=[];for(var key in b){if($rt_globals.Object.prototype.hasOwnProperty.call(b,key)&&key!='$H'){keys.push(key);}}return keys;}
var FY=E(CP);
function We(a){var b=new FY();ML(b,a);return b;}
function Jb(b){if(b!==null&&!(typeof b==='undefined'?1:0))return We(b);return null;}
function ML(a,b){EG(a,b);}
function Gl(a){return Q6(a.bD);}
function Lj(a,b){return (Gl(a))[b];}
function Ru(a){return (Gl(a)).length;}
function SE(a,b){return Lj(a,b);}
var DD=E(CY);
function GH(a,b,c,d){FM(a,b);a.G=c;a.bh=d;}
function Tu(b,c,d){return UY(0,b.data.length,b,c,c+d|0,0);}
function Nr(a,b,c,d){var e,f,g,h,i,j,k,l;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new B1;i=Y();Bj(P(Bj(P(i,D(92)),g),D(59)),f);Cx(h,Bb(i));G(h);}if(Cd(a)<d)G(V6());if(d<0){i=new B1;h=Y();P(Bj(P(h,D(60)),d),D(61));Cx(i,Bb(h));G(i);}j=a.G;k=0;while(k<d){g=c+1|0;f=j+1|0;e[c]=a.iL(j);k=k+1|0;c=g;j=f;}a.G=a.G+d|0;return a;}}e=b.data;i=new B1;f=e.length;l=Y();C9(Bj(P(Bj(P(l,D(62)),c),D(53)),f),41);Cx(i,Bb(l));G(i);}
function LZ(a,b){Kg(a,b);return a;}
var D$=E(DD);
function IT(a,b,c,d){GH(a,b,c,d);}
function KV(){var a=this;D$.call(a);a.iX=0;a.fF=0;a.go=null;}
function UY(a,b,c,d,e,f){var g=new KV();T1(g,a,b,c,d,e,f);return g;}
function T1(a,b,c,d,e,f,g){IT(a,c,e,f);a.fF=b;a.iX=g;a.go=d;}
function NO(a,b){return a.go.data[b+a.fF|0];}
var J1=E();
function Sr(b,c,d){var e,f;e=0;while(e<d){f=b.data[e+c|0];$rt_putStdout(f&255);e=e+1|0;}}
var FP=E();
var YT=null;function KH(){return (Ec()).hI();}
function TW(b){return (Ec()).cj(b);}
function OZ(b){return (Ec()).dy(b);}
function Nc(b){return (Ec()).bn(b);}
function P4(b){YT=b;}
function Ec(){var b;if(YT===null){b=Wd();D2();P4(F5(I(Dg),b,YU));if(YT===null){(Ig()).ft(D(93));YT=U0();}}return YT;}
function QZ(){return Hg(I(Dg));}
var J2=E();
function Om(b){return b?1:0;}
var CD=E();
var YV=null;var YW=null;var YJ=null;var YK=null;function Bz(){Bz=R(CD);ND();}
function Lq(b,c){Bz();return Dr(b,c);}
function Dr(b,c){var d,e,f,g,h,i,j,k,l,m;Bz();if(c.e<=b.e){d=c;c=b;b=d;}if(b.e<63)return Ir(c,b);e=(c.e&(-2))<<4;f=c.cT(e);g=b.cT(e);h=c.bB(f.O(e));i=b.bB(g.O(e));j=Dr(f,g);k=Dr(h,i);l=Dr(f.bB(h),i.bB(g));d=(l.bq(j)).bq(k);d=d.O(e);m=j.O(e<<1);return (m.bq(d)).bq(k);}
function Ir(b,c){var d,e,f,g,h,i,j,k,l,m,n;Bz();d=b.e;e=c.e;f=d+e|0;g=b.f==c.f?1:(-1);if(f!=2){h=b.a;i=c.a;j=W(f);Jh(h,d,i,e,j);k=Bp(g,f,j);BC(k);return k;}l=Cg(b.a.data[0],c.a.data[0],0,0);m=K(l);n=WV(l);return !n?Bu(g,m):Bp(g,2,B_([m,n]));}
function Jh(b,c,d,e,f){Bz();if(c&&e){if(c==1)f.data[e]=Dm(f,d,e,b.data[0]);else if(e!=1)G_(b,d,f,c,e);else f.data[c]=Dm(f,b,c,d.data[0]);return;}}
function G_(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;Bz();if(b===c&&e==f){F8(b,e,d);return;}g=0;while(g<e){h=b.data;i=M;j=h[g];k=0;while(k<f){l=d.data;m=c.data[k];n=g+k|0;o=Cg(j,m,l[n],K(i));l[n]=K(o);i=T(o,32);k=k+1|0;}d.data[g+f|0]=K(i);g=g+1|0;}}
function Dm(b,c,d,e){var f,g,h,i;Bz();f=M;g=0;while(g<d){h=b.data;i=Cg(c.data[g],e,K(f),0);h[g]=K(i);f=T(i,32);g=g+1|0;}return K(f);}
function Hd(b,c,d){Bz();return Dm(b,b,c,d);}
function FG(b,c){var d,e,f,g,h,i,j,k,l,m;Bz();d=b.f;if(!d){Be();return Xq;}e=b.e;f=b.a;if(e!=1){g=e+1|0;h=W(g);i=h.data;i[e]=Dm(h,f,e,c);j=Bp(d,g,h);BC(j);return j;}k=Cg(f.data[0],c,0,0);l=K(k);m=WV(k);return !m?Bu(d,l):Bp(d,2,B_([l,m]));}
function Kl(b,c){var d,e,f;Bz();Be();d=Xr;while(c>1){if(c&1)d=d.z(b);e=b.e==1?b.z(b):Vn(1,F8(b.a,b.e,W(b.e<<1)));c=c>>1;b=e;}f=d.z(b);return f;}
function F8(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;Bz();e=0;while(e<c){f=M;g=e+1|0;h=g;while(h<c){i=d.data;j=b.data;k=j[e];l=j[h];m=e+h|0;n=Cg(k,l,i[m],K(f));i[m]=K(n);f=T(n,32);h=h+1|0;}d.data[e+c|0]=K(f);e=g;}HD(d,d,c<<1);f=M;e=0;o=0;while(e<c){i=d.data;j=b.data;n=Cg(j[e],j[e],i[o],K(f));i[o]=K(n);n=T(n,32);l=o+1|0;n=L(n,H(C(i[l]),F(4294967295, 0)));i[l]=K(n);f=T(n,32);e=e+1|0;o=l+1|0;}return d;}
function Cj(b,c){Bz();return B3(c,C(YV.data.length))?b.z(Cw(c)):FG(b,YV.data[K(c)]);}
function Cw(b){var c,d,e,f,g,h,i;Bz();c=K(b);if(Bx(b,C(YJ.data.length)))return YJ.data[c];if(Bq(b,C(50))){Be();return Xs.bt(c);}if(Bq(b,C(1000)))return (YK.data[1].bt(c)).O(c);d=L(C(1),WU(V_(b)/2.4082399653118496));if(Cc(d,C(1000000)))G(Cq(D(94)));if(Bq(b,C(2147483647)))return (YK.data[1].bt(c)).O(c);e=YK.data[1].bt(2147483647);f=S(b,C(2147483647));g=K(BO(b,C(2147483647)));h=e;i=f;while(Cc(i,C(2147483647))){h=h.z(e);i=S(i,C(2147483647));}h=h.z(YK.data[1].bt(g));h=h.O(2147483647);while(Cc(f,C(2147483647))){h
=h.O(2147483647);f=S(f,C(2147483647));}h=h.O(g);return h;}
function GL(b,c){Bz();if(c<YW.data.length)return FG(b,YW.data[c]);if(c<YK.data.length)return b.z(YK.data[c]);return b.z(YK.data[1].bt(c));}
function Cg(b,c,d,e){Bz();return L(L(Q(H(C(b),F(4294967295, 0)),H(C(c),F(4294967295, 0))),H(C(d),F(4294967295, 0))),H(C(e),F(4294967295, 0)));}
function ND(){var b,c,d,e,f;YV=B_([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);YW=B_([1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,244140625,1220703125]);YJ=By(Bl,32);YK=By(Bl,32);b=C(1);c=0;while(c<=18){YK.data[c]=BF(b);YJ.data[c]=BF(U(b,c));b=Q(b,C(5));c=c+1|0;}while(c<YJ.data.length){d=YK.data;e=YK.data;f=c-1|0;d[c]=e[f].z(YK.data[1]);YJ.data[c]=YJ.data[f].z(Xs);c=c+1|0;}}
function D3(){B.call(this);this.dO=null;}
function YX(){var a=new D3();GC(a);return a;}
function GC(a){J(a);}
function Hn(a,b){a.dO=b;}
function Rc(a,b){a.dO.dm(b);}
function P0(a,b){a.dO.du(b);}
var B$=E();
var YY=null;var YZ=null;var Y0=null;var Y1=null;var Y2=null;var Y3=null;function Gx(){Gx=R(B$);P1();}
function J5(b){Gx();return b instanceof Bc;}
function LN(b){Gx();return b===null?null:b instanceof CV?b:!(b instanceof Bc)?null:Bv(b.V());}
function JZ(b){var c,$$je;Gx();if(b===null)return null;a:{try{c=Bv(D6(b));}catch($$e){$$je=Bk($$e);if($$je instanceof BQ){break a;}else{throw $$e;}}return c;}return null;}
function EM(b){var c;Gx();c=LN(b);if(c===null&&b!==null)return JZ(b.j());return c;}
function P1(){YY=Lk(0);YZ=GQ(0);Y0=Bv(0);Y1=EZ(M);Y2=Lu(0.0);Y3=FO(0.0);}
function Cp(){Bc.call(this);this.bv=0.0;}
var Y4=0.0;var Y5=null;function Ke(){Ke=R(Cp);Pe();}
function Pv(a){var b=new Cp();Kt(b,a);return b;}
function Kt(a,b){Ke();Bm(a);a.bv=b;}
function Pg(a){return a.bv|0;}
function FO(b){Ke();return Pv(b);}
function EJ(b){Ke();return ((Y()).hR(b)).j();}
function Nt(a){return EJ(a.bv);}
function Ud(a,b){if(a===b)return 1;return b instanceof Cp&&b.bv===a.bv?1:0;}
function Nh(a){return $rt_globals.isNaN(a.bv)?1:0;}
function OV(a){return !$rt_globals.isFinite(a.bv)?1:0;}
function Pe(){Y4=$rt_globals.NaN;Y5=I($rt_doublecls());}
var Jr=E();
function Eh(b,c,d){var e,f,g,h;e=d-1|0;while(e>=0){f=c.data;if(b.data[e]!=f[e])break;e=e+(-1)|0;}if(e<0)g=0;else{h=c.data;g=B3(H(C(b.data[e]),F(4294967295, 0)),H(C(h[e]),F(4294967295, 0)))?1:(-1);}return g;}
function SX(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=b.f;e=c.f;if(!d)return c;if(!e)return b;f=b.e;g=c.e;if((f+g|0)==2){h=H(C(b.a.data[0]),F(4294967295, 0));i=H(C(c.a.data[0]),F(4294967295, 0));if(d!=e)return BF(d>=0?S(h,i):S(i,h));j=L(h,i);k=K(j);l=WV(j);return !l?Bu(d,k):Bp(d,2,B_([k,l]));}if(d==e)m=f<g?Eg(c.a,g,b.a,f):Eg(b.a,f,c.a,g);else{n=BX(f,g);o=!n?Eh(b.a,c.a,f):n<=0?(-1):1;if(!o){Be();return Xq;}if(o!=1){m=Ea(c.a,g,b.a,f);d=e;}else m=Ea(b.a,f,c.a,g);}p=m.data;q=Bp(d,p.length,m);BC(q);return q;}
function Pa(b,c,d,e,f){var g,h,i,j,k,l,m;g=b.data;h=e.data;i=c.data;j=L(H(C(i[0]),F(4294967295, 0)),H(C(h[0]),F(4294967295, 0)));g[0]=K(j);k=Z(j,32);if(d<f){l=1;while(l<d){m=L(k,L(H(C(i[l]),F(4294967295, 0)),H(C(h[l]),F(4294967295, 0))));g[l]=K(m);k=Z(m,32);l=l+1|0;}while(l<f){m=L(k,H(C(h[l]),F(4294967295, 0)));g[l]=K(m);k=Z(m,32);l=l+1|0;}}else{l=1;while(l<f){m=L(k,L(H(C(i[l]),F(4294967295, 0)),H(C(h[l]),F(4294967295, 0))));g[l]=K(m);k=Z(m,32);l=l+1|0;}while(l<d){m=L(k,H(C(i[l]),F(4294967295, 0)));g[l]=K(m);k
=Z(m,32);l=l+1|0;}}if(BG(k,M))g[l]=K(k);}
function MK(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=b.f;e=c.f;if(!e)return b;if(!d)return c.fA();f=b.e;g=c.e;if((f+g|0)==2){h=H(C(b.a.data[0]),F(4294967295, 0));i=H(C(c.a.data[0]),F(4294967295, 0));if(d<0)h=Bt(h);if(e<0)i=Bt(i);return BF(S(h,i));}j=BX(f,g);k=!j?Eh(b.a,c.a,f):j<=0?(-1):1;if(k==(-1)){l= -e|0;m=d!=e?Eg(c.a,g,b.a,f):Ea(c.a,g,b.a,f);}else if(d!=e){m=Eg(b.a,f,c.a,g);l=d;}else{if(!k){Be();return Xq;}m=Ea(b.a,f,c.a,g);l=d;}n=m.data;o=Bp(l,n.length,m);BC(o);return o;}
function O9(b,c,d,e,f){var g,h,i,j,k;g=M;h=0;while(h<f){i=b.data;j=e.data;k=L(g,S(H(C(c.data[h]),F(4294967295, 0)),H(C(j[h]),F(4294967295, 0))));i[h]=K(k);g=Z(k,32);h=h+1|0;}while(h<d){j=b.data;k=L(g,H(C(c.data[h]),F(4294967295, 0)));j[h]=K(k);g=Z(k,32);h=h+1|0;}}
function Eg(b,c,d,e){var f;f=W(c+1|0);Pa(f,b,c,d,e);return f;}
function PT(b,c,d){var e,f,g,h;e=H(C(d),F(4294967295, 0));f=0;while(BG(e,M)&&f<c){g=b.data;h=L(e,H(C(g[f]),F(4294967295, 0)));g[f]=K(h);e=Z(h,32);f=f+1|0;}return K(e);}
function Ea(b,c,d,e){var f;f=W(c);O9(f,b,c,d,e);return f;}
function Lh(){CU.call(this);this.dK=null;}
function Uw(a){var b=new Lh();PD(b,a);return b;}
function PD(a,b){a.dK=b;Fr(a);}
function SS(a){return a.dK.M();}
function SD(a){return Wr(a.dK);}
function LU(){var a=this;B.call(a);a.er=0.0;a.db=0.0;a.dB=0.0;a.fQ=0.0;a.dT=null;a.dQ=null;a.fB=0.0;a.fL=0.0;a.dj=0.0;}
function U_(){var a=new LU();M8(a);return a;}
function M8(a){J(a);}
var C$=E(0);
function TB(a,b,c){return (a.hH(b)).h4(VH(c));}
function Rl(b,c){return c.g1(b);}
var Fb=E();
var Y6=null;function Y7(){var a=new Fb();Ub(a);return a;}
function Ub(a){J(a);}
function TQ(a){if(Y6===null)Y6=Di(NM()?1:0);return Y6.fy();}
function Nu(a,b){var c,d;c=Is();d=VG(c);Sa($rt_ustr(b),C8(d,"handle"));return c.gn();}
function Mw(b,c){b.bu(Wp(c));}
function NM(){{try {if(typeof $rt_globals.WebAssembly==="object"&&typeof $rt_globals.WebAssembly.instantiate==="function"){const module=new $rt_globals.WebAssembly.Module($rt_globals.Uint8Array.of(0x0,0x61,0x73,0x6d,0x01,0x00,0x00,0x00));if(module instanceof $rt_globals.WebAssembly.Module)return new $rt_globals.WebAssembly.Instance(module) instanceof $rt_globals.WebAssembly.Instance;}}catch(e){}return false;}}
function Sa(b,c){(($rt_globals.fetch(b)).then(function(response){return $rt_globals.WebAssembly.compileStreaming(response);})).then(function(module){return c(module);});}
function DS(){D3.call(this);this.e1=null;}
function JX(a){GC(a);}
function NK(a,b){a.e1=b;Hn(a,b);}
function Iy(a,b){a.ff(b);}
function NN(a,b){return a.e1.dh(b);}
function JG(){var a=this;DS.call(a);a.b5=0;a.dJ=0;a.dX=0;a.dZ=0;a.cQ=null;a.fx=0;a.cb=null;a.cH=null;a.eQ=0;}
function V1(){var a=new JG();Oo(a);return a;}
function Oo(a){JX(a);}
function L1(a){var b;if(T5()){b=NR(D(95),By(F3,0));b.ig(VP(a));}a.du(VN(a));}
function I8(a,b){var c,d,e,f,g,h,i;c=TW(b);d=(c.eb(D(96),Bv(0))).V();e=c.ei(D(97));f=e===null?0:1;if(f){a.b5=(c.ei(D(97))).V();a.dJ=(c.ei(D(98))).V();a.dX=(c.eb(D(99),Bv(0))).V();a.dZ=(c.eb(D(100),Bv(0))).V();a.fx=c.i3(D(101));}if(a.fx&&a.cb!==null){if(!f&&a.eQ){g=a.cb;h=By(B,1);h.data[0]=Bv(d);g.ev(D(102),h);}else{i=(a.cb.ev(D(103),B5(B,[Bv(d),Bv(a.b5),Bv(a.dJ),Bv(a.dX),Bv(a.dZ)]))).V();a.cH.gr(i);a.eQ=1;}a.cH.hY();a.cQ=a.cH.hr(a.b5);}else{if(f)Kx(a.b5,a.dJ,a.dX,a.dZ);a.cQ=JA(a.b5,null);HS(d,a.cQ);}a.dm(a.dh(a.cQ));}
function GS(a,b){a.cb=b.hQ();a.cH=a.cb.gz(0);}
var F3=E();
var Kr=E(V);
function P2(){var a=new Kr();LY(a);return a;}
function LY(a){BE(a);}
function JQ(){B.call(this);this.eR=null;}
function VH(a){var b=new JQ();Sp(b,a);return b;}
function Sp(a,b){J(a);a.eR=b;}
function Qp(a,b){return IB(a,b);}
function IB(a,b){return Rl(a.eR,b);}
var GV=E();
function T3(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;h=f.data;i=W(e+1|0);j=W(g+1|0);k=g-1|0;l=CL(h[k]);if(l){EK(j,f,0,l);EK(i,d,0,l);}else{C7(d,0,i,0,e);C7(f,0,j,0,g);}m=j.data;n=m[k];o=c-1|0;while(o>=0){a:{h=i.data;if(h[e]==n)p=(-1);else{q=L(U(H(C(h[e]),F(4294967295, 0)),32),H(C(h[e-1|0]),F(4294967295, 0)));r=QP(q,n);p=K(r);s=WV(r);if(p){t=0;p=p+1|0;while(true){p=p+(-1)|0;if(t)break;u=Q(H(C(p),F(4294967295, 0)),H(C(m[g-2|0]),F(4294967295, 0)));v=C(s);w=L(U(v,32),H(C(h[e-2|0]),F(4294967295, 0)));x
=L(H(v,F(4294967295, 0)),H(C(n),F(4294967295, 0)));if(CL(WV(x))>=32)s=K(x);else t=1;if(Bq(Ki(u,F(0, 2147483648)),Ki(w,F(0, 2147483648))))break a;}}}}if(p){y=e-g|0;z=M_(i,y,j,g,p);if(z){p=p+(-1)|0;ba=M;bb=0;while(bb<g){k=y+bb|0;v=L(ba,L(H(C(h[k]),F(4294967295, 0)),H(C(m[bb]),F(4294967295, 0))));h[k]=K(v);ba=T(v,32);bb=bb+1|0;}}}if(b!==null)b.data[o]=p;e=e+(-1)|0;o=o+(-1)|0;}if(l){K0(j,g,i,0,l);return j;}C7(i,0,j,0,g);return i;}
function Ps(b,c,d,e){var f,g,h,i,j,k,l,m,n;f=M;g=H(C(e),F(4294967295, 0));h=d-1|0;while(h>=0){i=c.data;j=Cs(U(f,32),H(C(i[h]),F(4294967295, 0)));if(B3(j,M)){k=Bg(j,g);f=BO(j,g);}else{l=T(j,1);m=C(e>>>1);k=Bg(l,m);n=BO(l,m);f=L(U(n,1),H(j,C(1)));if(e&1){if(Bq(k,f))f=S(f,k);else if(Bq(S(k,f),g)){f=L(f,S(g,k));k=S(k,C(1));}else{f=L(f,S(U(g,1),k));k=S(k,C(2));}}}b.data[h]=K(H(k,F(4294967295, 0)));h=h+(-1)|0;}return K(f);}
function QP(b,c){var d,e,f,g,h;d=H(C(c),F(4294967295, 0));if(B3(b,M)){e=Bg(b,d);f=BO(b,d);}else{g=T(b,1);h=C(c>>>1);e=Bg(g,h);f=BO(g,h);f=L(U(f,1),H(b,C(1)));if(c&1){if(Bq(e,f))f=S(f,e);else if(Bq(S(e,f),d)){f=L(f,S(d,e));e=S(e,C(1));}else{f=L(f,S(U(d,1),e));e=S(e,C(2));}}}return Cs(U(f,32),H(e,F(4294967295, 0)));}
function Q3(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=b.a;f=b.e;g=b.f;if(f!=1){h=g!=d?(-1):1;i=W(f);j=W(1);j.data[0]=Ps(i,e,f,c);k=Bp(h,f,i);l=Bp(g,1,j);BC(k);BC(l);return B5(Bl,[k,l]);}m=H(C(e.data[0]),F(4294967295, 0));n=H(C(c),F(4294967295, 0));o=Bg(m,n);p=BO(m,n);if(g!=d)o=Bt(o);if(g<0)p=Bt(p);return B5(Bl,[BF(o),BF(p)]);}
function M_(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=M;h=M;i=0;while(i<e){j=b.data;k=Cg(d.data[i],f,K(g),0);l=c+i|0;m=L(S(H(C(j[l]),F(4294967295, 0)),H(k,F(4294967295, 0))),h);j[l]=K(m);h=Z(m,32);g=T(k,32);i=i+1|0;}n=b.data;o=c+e|0;m=L(S(H(C(n[o]),F(4294967295, 0)),g),h);n[o]=K(m);return WV(m);}
var IJ=E();
function Ue(b){var c,d,e,f;if(!b.f)return 0;c=b.e<<5;d=b.a.data[b.e-1|0];if(b.f<0){e=b.ec();if(e==(b.e-1|0))d=d+(-1)|0;}f=c-CL(d)|0;return f;}
function G9(b,c){var d,e,f,g,h;d=c>>5;e=c&31;f=(b.e+d|0)+(e?1:0)|0;g=W(f);EK(g,b.a,d,e);h=Bp(b.f,f,g);BC(h);return h;}
function EK(b,c,d,e){var f,g,h,i,j,k;a:{if(!e)C7(c,0,b,d,b.data.length-d|0);else{f=b.data;g=32-e|0;h=f.length-1|0;f[h]=0;while(true){if(h<=d)break a;i=c.data;j=f[h];k=(h-d|0)-1|0;f[h]=j|i[k]>>>g;f[h-1|0]=i[k]<<e;h=h+(-1)|0;}}}h=0;while(h<d){b.data[h]=0;h=h+1|0;}}
function HD(b,c,d){var e,f,g,h;e=0;f=0;while(f<d){g=b.data;h=c.data[f];g[f]=h<<1|e;e=h>>>31;f=f+1|0;}if(e)b.data[d]=e;}
function MP(b){var c,d,e,f;c=b.e;d=c+1|0;e=W(d);HD(e,b.a,c);f=Bp(b.f,d,e);BC(f);return f;}
function HK(b,c){var d,e,f,g,h,i,j,k,l,m,n;d=c>>5;e=c&31;if(d>=b.e){if(b.f>=0){Be();f=Xq;}else{Be();f=Xt;}return f;}a:{g=b.e-d|0;h=g+1|0;i=W(h);K0(i,g,b.a,d,e);if(b.f>=0)h=g;else{j=0;while(true){k=BX(j,d);if(k>=0)break;if(b.a.data[j])break;j=j+1|0;}if(k>=0){if(e<=0){h=g;break a;}if(!(b.a.data[j]<<(32-e|0))){h=g;break a;}}e=0;while(true){l=BX(e,g);if(l>=0)break;m=i.data;if(m[e]!=(-1))break;m[e]=0;e=e+1|0;}if(l)h=g;m=i.data;m[e]=m[e]+1|0;}}n=Bp(b.f,h,i);BC(n);return n;}
function K0(b,c,d,e,f){var g,h,i,j,k,l,m;g=1;h=0;while(h<e){g=g&(d.data[h]?0:1);h=h+1|0;}if(!f)C7(d,e,b,0,c);else{i=d.data;j=32-f|0;g=g&(i[h]<<j?0:1);k=0;while(k<(c-1|0)){l=b.data;m=k+e|0;l[k]=i[m]>>>f|i[m+1|0]<<j;k=k+1|0;}b.data[k]=i[k+e|0]>>>f;}return g;}
var Gs=E(CP);
function Y8(){var a=new Gs();NV(a);return a;}
function Vy(a){var b=new Gs();Ld(b,a);return b;}
function Pd(b){if(b!==null&&!(typeof b==='undefined'?1:0))return Vy(b);return null;}
function NV(a){Ld(a,K4());}
function Ld(a,b){EG(a,b);}
function KF(a,b){return a.bD[$rt_ustr(b)]||null;}
function G4(a){return Jb(N$(a.bD));}
function LB(a,b,c){a.bD[$rt_ustr(b)]=c;return a;}
function Tm(a){return H4(a);}
function Pl(a,b){return Kh(a,b);}
function Ox(a,b){return JE(a,b);}
function Mj(a,b){return IK(a,b);}
function S5(a,b){return G2(a,b);}
function Mt(a){return LT(a);}
function TX(a,b){return KC(a,b);}
function Pz(a){return Hi(a);}
function Uf(a,b,c){return LB(a,b,c);}
function Tl(a,b){return KF(a,b);}
function O5(a){return G4(a);}
function Cb(){var a=this;B.call(a);a.q=null;a.cl=0;}
var Y9=null;function Gq(){Gq=R(Cb);Ry();}
function Ul(a){var b=new Cb();Hc(b,a);return b;}
function ID(a,b,c){var d=new Cb();LV(d,a,b,c);return d;}
function Hc(a,b){var c,d,e;Gq();c=b.data;J(a);d=c.length;a.q=BY(d);e=0;while(e<d){a.q.data[e]=c[e];e=e+1|0;}}
function LV(a,b,c,d){var e,f;Gq();J(a);a.q=BY(d);e=0;while(e<d){f=b.data;a.q.data[e]=f[e+c|0];e=e+1|0;}}
function NS(a,b){if(b>=0&&b<a.q.data.length)return a.q.data[b];G(Pb());}
function Re(a){return a.q.data.length;}
function Tg(a){return a.q.data.length?0:1;}
function Qo(a,b){var c,d,e,f;if(a===b)return 1;if(b.g()>a.g())return 0;c=0;d=a.g()-b.g()|0;while(d<a.g()){e=a.o(d);f=c+1|0;if(e!=b.o(c))return 0;d=d+1|0;c=f;}return 1;}
function Nz(a,b,c){var d,e,f,g;d=BA(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.q.data.length)return (-1);if(a.q.data[d]==e)break;d=d+1|0;}return d;}f=Gu(b);g=F2(b);while(true){if(d>=(a.q.data.length-1|0))return (-1);if(a.q.data[d]==f&&a.q.data[d+1|0]==g)break;d=d+1|0;}return d;}
function Qn(a,b){return a.eI(b,0);}
function NX(a,b,c){var d,e,f,g,h,i;d=B8(c,a.g()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.q.data[d]==e)break;d=d+(-1)|0;}return d;}f=Gu(b);g=F2(b);while(true){if(d<1)return (-1);if(a.q.data[d]==g){h=a.q.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function SF(a,b){return a.iV(b,a.g()-1|0);}
function MI(a,b,c){if(b>c)G(DL());return ID(a.q,b,c-b|0);}
function SN(a,b){return a.bF(b,a.g());}
function OL(a){return a;}
function Tn(a){var b,c,d;b=BY(a.q.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.q.data[c];c=c+1|0;}return b;}
function I7(b){Gq();return b===null?D(3):b.j();}
function JY(b,c,d){Gq();return ID(b,c,d);}
function R7(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Cb))return 0;c=b;if(c.g()!=a.g())return 0;d=0;while(d<c.g()){if(a.o(d)!=c.o(d))return 0;d=d+1|0;}return 1;}
function Sn(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.g()!=b.g())return 0;c=0;while(c<a.g()){if(FV(a.o(c))!=FV(b.o(c)))return 0;c=c+1|0;}return 1;}
function NL(a){var b,c,d,e;a:{if(!a.cl){b=a.q.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.cl=(31*a.cl|0)+e|0;d=d+1|0;}}}return a.cl;}
function Ry(){Y9=VW();}
var LW=E(V);
function VQ(){var a=new LW();Od(a);return a;}
function Od(a){BE(a);}
function Ev(){var a=this;Dv.call(a);a.fD=null;a.e2=null;}
function IH(a,b,c,d){Kp(a,b,c,d);a.fD=BY(512);a.e2=Fw(512);}
function NZ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.fD;e=0;f=0;g=a.e2;a:{while(true){if((e+32|0)>f&&Cv(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=B8(Cd(b)+j|0,i.length);b.iG(d,j,f-j|0);e=0;}if(!Cv(c)){if(!Cv(b)&&e>=f){BR();k=Ya;}else{BR();k=X_;}break a;}i=g.data;l=0;m=B8(Cd(c),i.length);n=UN(b,c);k=a.gT(d,e,f,g,l,m,n);e=n.fw;j=n.f8;if(k===null){if(!Cv(b)&&e>=f){BR();k=Ya;}else if(!Cv(c)&&e>=f){BR();k=X_;}}c.fz(g,0,j);if(k!==null)break;}}b.e6(Db(b)-(f-e|0)|0);return k;}
var Jg=E(Ev);
function Vo(a){var b=new Jg();Qq(b,a);return b;}
function Qq(a,b){IH(a,b,2.0,4.0);}
function TN(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.ef(2))break a;BR();i=X_;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!K1(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.ef(3))break a;BR();i=X_;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if(!E4(l))
{i=DM(1);break a;}if(j>=d){if(h.io())break a;BR();i=Ya;break a;}n=j+1|0;p=k[j];if(!E2(p)){j=n+(-2)|0;i=DM(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.ef(4))break a;BR();i=X_;break a;}k=e.data;q=Kw(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.iS(j);h.gG(f);return i;}
var FN=E(0);
function I1(){B.call(this);this.fg=null;}
function US(a){var b=new I1();Nm(b,a);return b;}
function Nm(a,b){J(a);a.fg=b;}
function Nf(a,b){H_(a,b);}
function H_(a,b){RQ(a.fg,b);}
function M3(a,b){a.iq(b);}
var BQ=E(Cu);
function T0(){var a=new BQ();NE(a);return a;}
function CH(a){var b=new BQ();B7(b,a);return b;}
function NE(a){Fh(a);}
function B7(a,b){Gv(a,b);}
var Gn=E(DG);
var Yr=null;function QX(){QX=R(Gn);Qv();}
function VV(){var a=new Gn();K2(a);return a;}
function K2(a){QX();IG(a,D(104),By(Cb,0));}
function SI(a){return Vo(a);}
function Qv(){Yr=VV();}
var LL=E();
function Ur(){var a=new LL();N_(a);return a;}
function N_(a){J(a);}
function T$(b){Iy(b,Ur());b.i6();}
function Nv(a,b){if(!(b instanceof Cb))$rt_globals.self.postMessage(b);else $rt_globals.self.postMessage($rt_ustr(b));}
function Or(a,b){var c,d,e,f,g;c=b.data;d=c.length;e=new $rt_globals.Array();f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function PP(a,b){$rt_globals.self.onmessage=C8(US(b),"handleEvent");}
function RQ(b,c){b.ha(c.data);}
var Hb=E(V);
function Of(){var a=new Hb();Qt(a);return a;}
function Ko(a){var b=new Hb();N5(b,a);return b;}
function Qt(a){BE(a);}
function N5(a,b){C0(a,b);}
var GN=E(V);
function Ph(a){var b=new GN();QD(b,a);return b;}
function Df(){var a=new GN();O$(a);return a;}
function QD(a,b){C0(a,b);}
function O$(a){BE(a);}
function KL(){B.call(this);this.ej=null;}
function VT(a){var b=new KL();SB(b,a);return b;}
function SB(a,b){J(a);a.ej=b;}
function Wu(b){return VT(b);}
function Tz(a,b){a.ej.bu(b);}
function Td(a,b){a.ej.hn(b);}
function Ch(){var a=this;B.call(a);a.hk=null;a.fk=0;}
function Em(a,b,c){J(a);a.hk=b;a.fk=c;}
function Bd(a){return a.fk;}
function IN(){var a=this;B.call(a);a.U=null;a.eW=null;a.x=null;a.D=0;}
function Wa(){var a=new IN();TZ(a);return a;}
function TZ(a){J(a);a.x=BV();}
var KR=E();
function R1(b){return Math.floor(b);}
function B8(b,c){if(b<c)c=b;return c;}
function BA(b,c){if(b>c)c=b;return c;}
function EE(b){if(b<=0)b= -b|0;return b;}
function DI(b){if(Bq(b,M))b=Bt(b);return b;}
function S9(b){if(b<=0.0)b= -b;return b;}
function E0(){Bc.call(this);this.h5=0;}
var Y$=null;function Su(){Su=R(E0);M$();}
function Wv(a){var b=new E0();JD(b,a);return b;}
function JD(a,b){Su();Bm(a);a.h5=b;}
function Lk(b){Su();return Wv(b);}
function M$(){Y$=I($rt_bytecls());}
function BL(){Ch.call(this);this.h8=0;}
var Xb=null;var Xc=null;var Xd=null;var Xe=null;var Xf=null;var Xg=null;var Xh=null;var Xa=null;var Y_=null;function Eu(){Eu=R(BL);Rs();}
function CB(a,b,c){var d=new BL();K9(d,a,b,c);return d;}
function J3(){Eu();return Y_.c4();}
function K9(a,b,c,d){Eu();Em(a,b,c);a.h8=d;}
function Ls(b){Eu();switch(b){case 0:break;case 1:return Xc;case 2:return Xd;case 3:return Xe;case 4:return Xf;case 5:return Xg;case 6:return Xh;case 7:return Xa;default:G(CG(D(105)));}return Xb;}
function Im(){Eu();return B5(BL,[Xb,Xc,Xd,Xe,Xf,Xg,Xh,Xa]);}
function Rs(){Xb=CB(D(106),0,0);Xc=CB(D(107),1,1);Xd=CB(D(108),2,2);Xe=CB(D(109),3,3);Xf=CB(D(110),4,4);Xg=CB(D(111),5,5);Xh=CB(D(112),6,6);Xa=CB(D(113),7,7);Y_=Im();}
function FZ(){var a=this;B.call(a);a.hf=null;a.gt=null;}
var Za=null;function Fp(){Fp=R(FZ);NP();}
function VK(a){var b=new FZ();Hh(b,a);return b;}
function Hh(a,b){Fp();J(a);a.hf=b;}
function LC(){Fp();return DB(D(114));}
function DB(b){var c,d,e;Fp();c=Za.c$(b);if(c===null){c=VK(b);d=b.iI(46);if(d>=0){e=b.bF(0,d);c.gt=DB(e);}else if(!b.bW())c.gt=DB(D(115));Za.bw(b,c);}return c;}
function MW(a,b){var c;c=JK(a,b.df(),b.gv());if(Dt(b.f4())>=Dt(Yg))J9($rt_ustr(c));else if(Dt(b.f4())<Dt(XU))GI($rt_ustr(c));else JU($rt_ustr(c));}
function JK(a,b,c){var d,e,f,g,h,i,j;if(c===null)return b;d=Y();e=0;a:{while(true){if(e>=b.g())break a;f=b.eI(123,e);if(f<0)break a;g=f+1|0;h=HZ(g,b);if(h<0)break;if(b.o(h)!=125){d.fO(b,e,h);e=h;continue;}i=c.data;j=D6(b.bF(g,h));if(j>=i.length){d.fO(b,e,h);e=h;continue;}d.bf(i[j]);e=h+1|0;}}return d.j();}
function HZ(b,c){var d,e;Fp();while(true){if(b>=c.g())return (-1);d=b+1|0;e=c.o(b);if(e<=48)break;if(e>=57)break;b=d;}return d;}
function SG(a,b,c){a.hb(V8(b,c));}
function NP(){Za=T9();}
function GI(b){if($rt_globals.console){$rt_globals.console.info(b);}}
function JU(b){if($rt_globals.console){$rt_globals.console.warn(b);}}
function J9(b){if($rt_globals.console){$rt_globals.console.error(b);}}
function EH(){var a=this;B.call(a);a.fS=null;a.fr=null;a.gJ=M;a.he=null;a.i0=M;a.hv=M;}
var Zb=M;function V8(a,b){var c=new EH();S$(c,a,b);return c;}
function S$(a,b,c){var d;J(a);a.fS=b;a.fr=c;a.gJ=Jy();d=Zb;Zb=L(d,C(1));a.i0=d;a.hv=(BV()).hg();}
function OQ(a){return a.fS;}
function PB(a){return a.fr;}
function O6(a){return a.he;}
function GE(){B.call(this);this.dP=null;}
function Vd(a){var b=new GE();L_(b,a);return b;}
function L_(a,b){a.dP=b;J(a);}
function S2(a,b){a.dP.d1(b);}
function Qe(a,b){a.dP.c_(b);}
var J$=E(BM);
function RF(a){var b=new J$();OM(b,a);return b;}
function OM(a,b){Iw(a,b,null,0,0);}
function Ib(){El.call(this);this.e9=null;}
function Ut(a){var b=new Ib();RO(b,a);return b;}
function RO(a,b){I5(a,b);}
function QR(a){return a.e9;}
function QQ(a,b){a.e9=b;}
var IU=E();
function Vb(){var a=new IU();L7(a);return a;}
function L7(a){J(a);}
function Ok(a,b){return Jt(a,b);}
function Jt(a,b){return Ql(b);}
var KD=E(V);
function U2(){var a=new KD();Rf(a);return a;}
function Rf(a){BE(a);}
var FQ=E();
var Zc=null;function Ux(){Ux=R(FQ);TM();}
function IE(b){var c,d,e,f;Ux();c=b.data;d=c.length;e=0;while(true){if(e>=d)return null;f=c[e];if(f!==null)break;e=e+1|0;}return f;}
function TM(){Zc=null;}
var HV=E();
function VS(b){T$(V1());}
var It=E();
function RV(b){if(!(b instanceof B6))return null;return b;}
function PL(b){if(b===null)return null;if(b.eS(D(78)))return Di(1);if(!b.eS(D(77)))return null;return Di(0);}
function SR(b){var c;c=RV(b);if(c===null&&b!==null)return PL(b.j());return c;}
var Lf=E(Ei);
function Ve(a,b){var c=new Lf();Np(c,a,b);return c;}
function Np(a,b,c){Ll(a,b,c);}
function QA(a,b){var c,d,e,f,g,h;c=W(b);while(a.bx%4|0){a.bx=a.bx+1|0;}d=a.bx/4|0;e=0;while(e<b){f=c.data;g=a.eN;h=d+1|0;f[e]=g[d];e=e+1|0;d=h;}a.bx=d*4|0;return c;}
function Eb(){var a=this;B.call(a);a.cd=0;a.e5=0;}
var Ya=null;var X_=null;function BR(){BR=R(Eb);Qf();}
function H3(a,b){var c=new Eb();IY(c,a,b);return c;}
function IY(a,b,c){BR();J(a);a.cd=b;a.e5=c;}
function MU(a){return a.cd?0:1;}
function RN(a){return a.cd!=1?0:1;}
function TL(a){return !a.h_()&&!a.f5()?0:1;}
function RS(a){return a.cd!=2?0:1;}
function R3(a){return a.cd!=3?0:1;}
function QH(a){if(a.iv())return a.e5;G(VE());}
function DM(b){BR();return H3(2,b);}
function Qf(){Ya=H3(0,0);X_=H3(1,0);}
var DX=E();
var Zd=null;var Ze=null;function EU(){EU=R(DX);RW();}
function K7(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;EU();d=$rt_doubleToLongBits(b);c.eO=X(H(d,F(0, 2147483648)),M)?0:1;e=H(d,F(4294967295, 1048575));f=K(Z(d,52))&2047;if(X(e,M)&&!f){c.de=M;c.ds=0;return;}g=0;if(f)h=Cs(e,F(0, 1048576));else{h=U(e,1);while(X(H(h,F(0, 1048576)),M)){h=U(h,1);f=f+(-1)|0;g=g+1|0;}}i=Ne(Ze,f);if(i<0)i=( -i|0)-2|0;j=f-Ze.data[i]|0;k=12+j|0;l=Gd(h,Zd.data[i],k);if(B3(l,F(2808348672, 232830643))){i=i+1|0;m=f-Ze.data[i]|0;k=12+m|0;l=Gd(h,Zd.data[i],k);}n=T(Zd.data[i],(63-k|0)-g|0);o=Z(L(n,
C(1)),1);p=Z(n,1);if(X(h,F(0, 1048576)))p=Z(p,2);q=Kz(l,p);r=Lz(l,o);m=Ds(q,r);h=m>0?Q(Bg(l,q),q):m<0?L(Q(Bg(l,r),r),r):Q(Bg(L(l,Bg(r,C(2))),r),r);if(B3(h,F(2808348672, 232830643))){i=i+1|0;h=Bg(h,C(10));}else if(Bx(h,F(1569325056, 23283064))){i=i+(-1)|0;h=Q(h,C(10));}c.de=h;c.ds=i-330|0;}
function Kz(b,c){var d,e;EU();d=C(10);while(Bq(d,c)){d=Q(d,C(10));}e=BO(b,d);if(B3(e,Bg(c,C(2))))d=Bg(d,C(10));return d;}
function Lz(b,c){var d,e;EU();d=C(1);while(Bq(d,c)){d=Q(d,C(10));}e=BO(b,d);if(Cc(S(d,e),Bg(c,C(2))))d=Bg(d,C(10));return d;}
function Gd(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;EU();e=H(b,C(65535));f=H(T(b,16),C(65535));g=H(T(b,32),C(65535));h=H(T(b,48),C(65535));i=H(c,C(65535));j=H(T(c,16),C(65535));k=H(T(c,32),C(65535));l=H(T(c,48),C(65535));m=L(L(Q(k,e),Q(j,f)),Q(i,g));n=L(L(L(Q(l,e),Q(k,f)),Q(j,g)),Q(i,h));o=L(L(Q(l,f),Q(k,g)),Q(j,h));p=L(Q(l,g),Q(k,h));q=Q(l,h);r=L(L(U(q,32+d|0),U(p,16+d|0)),U(o,d));s=d>16?L(r,U(n,d-16|0)):L(r,T(n,16-d|0));s=L(s,T(m,32-d|0));return s;}
function RW(){var b,c,d,e,f,g,h,i,j,k,l;Zd=VL(660);Ze=W(660);b=F(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=Zd.data;g=d+330|0;f[g]=Ee(e,C(80));Ze.data[g]=c;e=Ee(e,C(10));h=Hl(e,C(10));while(Bq(e,b)&&X(H(e,F(0, 2147483648)),M)){e=U(e,1);c=c+1|0;h=U(h,1);}e=L(e,Bg(h,C(10)));d=d+1|0;}i=F(3435973836, 214748364);j=1023;d=0;while(d<330){k=0;e=b;while(Cc(e,i)){e=Z(e,1);k=k+1|0;j=j+(-1)|0;}h=Q(e,C(10));if(k<=0)b=h;else{l=H(b,C((1<<k)-1|0));b=L(h,Z(Q(l,C(10)),k));}f=Zd.data;g=(330-d|0)-1|0;f[g]=Ee(b,C(80));Ze.data[g]
=j;d=d+1|0;}}
var Ht=E();
function H$(b){var c,d,e;c=VC(b.M());d=b.Z();while(d.W()){e=d.N();if(BH(e,Ck))c.bV(Gi(e));else if(!BH(e,CI))c.bV(e);else c.bV(H$(e));}return c;}
function Gi(b){var c,d,e,f,g,h;c=UO(b.M());d=(b.gg()).Z();while(d.W()){e=d.N();f=e.bZ();if(BH(f,Ck)){g=f;c.bw(e.bz(),Gi(g));}else if(!BH(f,CI))c.bw(e.bz(),f);else{h=f;c.bw(e.bz(),H$(h));}}return c;}
var KI=E(C4);
var BS=E(Ch);
var XA=null;var XC=null;var XB=null;var X0=null;var XZ=null;var XX=null;var XY=null;var Zf=null;function Bs(){Bs=R(BS);Q5();}
function CK(a,b){var c=new BS();LI(c,a,b);return c;}
function FF(){Bs();return Zf.c4();}
function LI(a,b,c){Bs();Em(a,b,c);}
function GF(){Bs();return B5(BS,[XA,XC,XB,X0,XZ,XX,XY]);}
function Q5(){XA=CK(D(116),0);XC=CK(D(117),1);XB=CK(D(118),2);X0=CK(D(119),3);XZ=CK(D(120),4);XX=CK(D(121),5);XY=CK(D(122),6);Zf=GF();}
function Ln(){var a=this;B.call(a);a.Q=null;a.fi=null;a.fT=null;a.fn=null;a.ey=null;a.eD=null;}
function UX(a){var b=new Ln();RX(b,a);return b;}
function RX(a,b){var c;J(a);a.Q=b;c=b.exports.memory.buffer;a.fi=new $rt_globals.Int8Array(c);a.fT=new $rt_globals.Int16Array(c);a.fn=new $rt_globals.Int32Array(c);a.ey=new $rt_globals.Float32Array(c);a.eD=new $rt_globals.Float64Array(c);}
function OE(a,b){return Ve(a,b);}
function Mz(a,b,c){return Nc(Ju(a,b,c));}
function Ju(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=c.data;switch(d.length){case 0:return a.Q.exports[$rt_ustr(b)]();case 1:e=a.Q;f=O(d[0]);return e.exports[$rt_ustr(b)](f);case 2:e=a.Q;f=O(d[0]);g=O(d[1]);return e.exports[$rt_ustr(b)](f,g);case 3:e=a.Q;f=O(d[0]);g=O(d[1]);h=O(d[2]);return e.exports[$rt_ustr(b)](f,g,h);case 4:e=a.Q;f=O(d[0]);g=O(d[1]);h=O(d[2]);i=O(d[3]);return e.exports[$rt_ustr(b)](f,g,h,i);case 5:e=a.Q;f=O(d[0]);g=O(d[1]);h=O(d[2]);i=O(d[3]);j=O(d[4]);return e.exports[$rt_ustr(b)](f,g,h,i,j);case 6:e
=a.Q;f=O(d[0]);g=O(d[1]);h=O(d[2]);i=O(d[3]);j=O(d[4]);k=O(d[5]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k);case 7:e=a.Q;f=O(d[0]);g=O(d[1]);h=O(d[2]);i=O(d[3]);j=O(d[4]);k=O(d[5]);l=O(d[6]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l);case 8:e=a.Q;f=O(d[0]);g=O(d[1]);h=O(d[2]);i=O(d[3]);j=O(d[4]);k=O(d[5]);l=O(d[6]);m=O(d[7]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l,m);case 9:e=a.Q;f=O(d[0]);g=O(d[1]);h=O(d[2]);i=O(d[3]);j=O(d[4]);k=O(d[5]);l=O(d[6]);m=O(d[7]);n=O(d[8]);return e.exports[$rt_ustr(b)](f,g,
h,i,j,k,l,m,n);default:}return null;}
function O(b){return OZ(b);}
function IX(){var a=this;B.call(a);a.e$=null;a.gd=0;}
function PY(a){var b=new IX();PU(b,a);return b;}
function PU(a,b){J(a);a.e$=b;}
var IV=E(BK);
function C5(){B.call(this);this.dS=null;}
function UU(a){var b=new C5();Pr(b,a);return b;}
function Pr(a,b){J(a);a.dS=b;}
var Jn=E(BK);
var Ka=E(V);
function V6(){var a=new Ka();Sg(a);return a;}
function Sg(a){BE(a);}
var Co=E(Ch);
var XS=null;var YU=null;var XT=null;var Zg=null;function D2(){D2=R(Co);Pm();}
function JI(a,b){var c=new Co();KX(c,a,b);return c;}
function KX(a,b,c){D2();Em(a,b,c);}
function IL(){D2();return B5(Co,[XS,YU,XT]);}
function Pm(){XS=JI(D(123),0);YU=JI(D(124),1);XT=JI(D(125),2);Zg=IL();}
var Jj=E();
function VD(){var a=new Jj();L0(a);return a;}
function L0(a){J(a);}
function Li(){B.call(this);this.fX=null;}
function VG(a){var b=new Li();OS(b,a);return b;}
function OS(a,b){J(a);a.fX=b;}
function Sw(a,b){Mw(a.fX,b);}
function R9(a,b){a.d5(b);}
var G1=E();
function MO(b){return b!==null?b.j():null;}
function Qc(b){return b!==null?b.g():0;}
function QE(b){return Qc(b)?0:1;}
$rt_packages([-1,"dev",0,"webfx",1,"platform",2,"webassembly",3,"spi",2,"json",5,"spi"]);
$rt_metadata([B,0,0,[],0,3,0,0,["j0",WD(CS),"kj",WD(DO),"b9",WD(PG),"A",WE(Mh),"j",WD(OO),"je",WD(DA),"c4",WD(TV)],BM,0,B,[],0,3,0,0,["kz",WH(Iw),"cK",WD(QL),"df",WD(PS),"kq",WD(PX)],Ca,0,BM,[],0,3,0,0,["b",WD(Fl),"m",WE(GP)],V,0,Ca,[],0,3,0,0,["b",WD(BE),"m",WE(C0)],B1,0,V,[],0,3,0,0,["b",WD(Iz),"m",WE(Cx)],DP,0,B,[],3,3,0,0,["bn",WE(P8),"g0",WE(OR),"g3",WE(RI),"gP",WE(Sf)],Gh,0,B,[DP],3,3,0,0,["bn",WE(P8),"g0",WE(OR),"g3",WE(RI),"gP",WE(Sf)],Fy,0,B,[DP],3,3,0,0,["bn",WE(P8),"g0",WE(OR),"g3",WE(RI),"gP",WE(Sf),
"eH",WD(SQ)],Dg,"JsonProvider",6,B,[Gh,Fy],3,3,0,0,["bn",WE(P8),"g0",WE(OR),"g3",WE(RI),"gP",WE(Sf),"eH",WD(SQ),"hI",WD(Tp)],Dc,0,B,[Dg],3,3,0,0,["bn",WE(P8),"g0",WE(OR),"g3",WE(RI),"gP",WE(Sf),"eH",WD(SQ),"hI",WD(Tp)],HA,0,B,[],0,3,0,0,["ji",WF(Q0),"io",WD(Qb),"ef",WE(Qk),"iS",WE(Q$),"gG",WE(Uc)],BI,0,B,[],3,3,0,0,0,Bc,0,B,[BI],1,3,0,0,["b",WD(Bm)],Bn,0,B,[],3,3,0,0,0,CV,0,Bc,[Bn],0,3,0,B2,["by",WE(Jl),"V",WD(NG),"j",WD(Sk)],Jz,0,Ca,[],0,3,0,0,["b",WD(SW)],DQ,0,B,[],3,3,0,0,0,Gm,0,B,[DQ],3,3,0,0,["bu",WE(M4)],Cm,
0,B,[],0,0,0,PH,0,CE,0,B,[Dc],3,3,0,0,["bn",WE(P8),"g0",WE(OR),"g3",WE(RI),"gP",WE(Sf),"eH",WD(SQ),"hI",WD(Tp)],Fg,0,B,[],32,0,0,Wg,0,FK,0,B,[],4,3,0,B4,0,Go,0,Bc,[Bn],0,3,0,Ct,["k_",WE(JF),"V",WD(MF),"j",WD(Q7)],Ck,0,B,[],3,3,0,0,0,E7,0,B,[],3,3,0,0,0,Cl,0,B,[E7],0,3,0,Gg,["m",WE(Ic),"jo",WF(Fz),"hg",WD(L6)],BD,0,B,[],3,3,0,0,0,Fu,0,B,[BD],3,3,0,0,0,Kc,0,B,[Fu],1,3,0,0,["kA",WE(TK),"kl",WD(O1)],Dw,0,B,[],3,3,0,0,0,H8,0,B,[Dw],0,3,0,0,["b",WD(Qy),"bp",WD(Ob),"iU",WD(Ja)],Bl,0,Bc,[Bn,BI],0,3,0,Be,["m",WE(I3),
"cs",WF(FB),"hC",WF(Iv),"k7",WG(JM),"ke",WF(GX),"j2",WF(LQ),"dx",WD(PJ),"fA",WD(Q1),"bq",WE(O2),"bB",WE(MZ),"bl",WD(St),"cT",WE(QF),"O",WE(Ma),"eK",WD(Qz),"cz",WD(TP),"cL",WE(PF),"iQ",WD(Q4),"bG",WD(NC),"dn",WE(Nd),"A",WE(Pw),"hs",WE(TJ),"z",WE(Ta),"bt",WE(Ng),"fE",WE(RC),"jS",WD(BC),"ec",WD(M2)],Gz,0,V,[],0,3,0,0,["m",WE(PE)],Gt,0,B,[],32,0,0,Ui,0,G$,0,B,[BD],1,3,0,0,0,FH,0,B,[],3,3,0,0,0,FT,0,B,[FH],3,3,0,0,["h4",WE(QB)],DC,0,B,[FT],3,3,0,0,["h4",WE(QB)],CN,0,B,[DC],1,0,0,0,["h4",WE(QB),"b",WD(Fx),"ku",WF(Fi),
"kh",WF(Ed),"fG",WF(I$)],CA,0,CN,[],0,0,0,Dx,["h4",WE(QB),"b",WD(En),"hQ",WD(SL),"ig",WE(N2),"bN",WE(IA),"d1",WE(GO),"c_",WE(TY),"j",WD(Sd),"iY",WF(OA)],Ek,0,CA,[],1,0,0,0,["h4",WE(QB),"b",WD(LK)],Dp,0,B,[],3,3,0,0,0,C2,0,BM,[],0,3,0,0,["m",WE(Jk),"cM",WE(HT)],C4,0,C2,[],0,3,0,0,["m",WE(GY)],Dz,0,B,[],3,3,0,0,["gU",WF(T6),"i3",WE(OP),"ib",WE(Nn),"ei",WE(Sh),"eb",WF(Rx)],Da,0,B,[Dz,Dc],3,3,0,0,["gU",WF(T6),"i3",WE(OP),"ib",WE(Nn),"ei",WE(Sh),"eb",WF(Rx),"bn",WE(P8),"g0",WE(OR),"g3",WE(RI),"gP",WE(Sf),"eH",WD(SQ),
"hI",WD(Tp),"kK",WE(LR),"dC",WE(Se)],FC,0,B,[Dz],3,3,0,0,["gU",WF(T6),"i3",WE(OP),"ib",WE(Nn),"ei",WE(Sh),"eb",WF(Rx)],De,0,B,[Da,CE,FC],3,3,0,0,["gU",WF(T6),"i3",WE(OP),"ib",WE(Nn),"ei",WE(Sh),"eb",WF(Rx),"bn",WE(P8),"g0",WE(OR),"g3",WE(RI),"gP",WE(Sf),"eH",WD(SQ),"hI",WD(Tp),"kK",WE(LR),"dC",WE(Se),"i5",WE(TS),"iw",WF(L$)],Ez,0,B,[BD],3,0,0,0,0,Lb,0,B1,[],0,3,0,0,["b",WD(QV)]]);
$rt_metadata([HC,0,B,[DQ],0,3,0,0,["i_",WE(PN),"e0",WE(Ot),"kZ",WE(K8)],FL,0,B,[],3,3,0,0,0,HB,0,B,[FL],0,3,0,0,["i_",WE(Ty),"ha",WE(Oe)],Eo,0,B,[],4,3,0,S8,0,KA,0,B,[],4,3,0,0,0,CM,0,B,[],0,3,0,0,["b",WD(FW)],F0,0,CM,[],0,3,0,0,["jY",function(b,c,d,e,f,g,h,i,j,k,l,m,n){Nw(this,b,c,d,e,f,g,h,i,j,k,l,m,n);},"kk",function(b,c,d,e,f,g,h,i,j,k,l,m,n){GA(this,b,c,d,e,f,g,h,i,j,k,l,m,n);}],Gk,0,B,[],3,3,0,0,0,EY,0,B,[Gk],3,3,0,0,0,Fn,0,B,[],3,3,0,0,0,C1,0,B,[EY,Fn],1,3,0,0,["b",WD(Ew)],D8,0,C1,[],1,3,0,0,["b",WD(LS)],Fc,
0,D8,[],0,3,0,Tc,["cv",WG(Tk)],BK,0,B,[BD],1,3,0,0,0,Hk,0,BK,[],1,3,0,0,0,I_,0,B,[],4,0,0,0,["jy",WF(KY),"kn",WD(KP),"kF",WD(Jo)],CZ,0,B,[BI,Dp],0,0,0,0,["b",WD(Fd),"by",WE(EX),"m",WE(Lg),"kV",WE(Je),"kN",WE(K3),"la",WE(E$),"cI",WF(FI),"kS",WE(H0),"eP",WF(Nq),"gQ",WG(SJ),"j4",WE(KJ),"e3",WF(LM),"ij",WG(Mr),"j9",WE(J0),"eu",WF(Ji),"jl",WE(Lm),"fP",WF(K$),"fq",WF(JN),"bP",WE(E_),"j",WD(EO),"g",WD(KB),"o",WE(G5),"kr",WG(Id),"eq",WH(G0),"kB",WG(KU),"eZ",WH(G7),"eU",WH(Km),"eG",WE(Kf)],Dn,0,B,[],3,3,0,0,0,GR,0,CZ,
[Dn],0,3,0,0,["by",WE(Tq),"b",WD(S3),"m",WE(My),"bf",WE(P),"C",WE(Mx),"ju",WE(Bj),"iz",WE(RG),"hR",WE(PK),"r",WE(C9),"eL",WG(PA),"fO",WG(Ss),"hZ",WF(QU),"hA",WF(SU),"hM",WH(Na),"jc",WH(Po),"hu",WF(Tv),"iE",WF(NF),"hl",WF(TG),"eG",WE(TO),"eU",WH(Qm),"eZ",WH(TA),"eq",WH(Ol),"o",WE(Rq),"g",WD(Og),"j",WD(Bb),"bP",WE(TT),"fq",WF(MC),"fP",WF(L5),"eu",WF(Qh),"e3",WF(O8),"cI",WF(T2)],Ga,0,B,[],4,3,0,T8,0,Kk,0,V,[],0,3,0,0,["b",WD(TH)],HO,0,C2,[],0,3,0,0,["cM",WE(MA)],DY,0,B,[Ck],1,3,0,0,["b",WD(Jm),"j",WD(On)],CQ,0,
B,[],3,3,0,0,0,Es,0,DY,[CQ,BI],0,3,0,0,["dv",WE(RK),"b",WD(Jv),"by",WE(EC),"j7",WF(K5),"c$",WE(RU),"kx",WE(Ha),"kE",WG(Dl),"kU",WD(Du),"bw",WF(M1),"d8",WF(Rv),"b6",WG(OY),"hG",WE(Ro),"cA",WD(Pn),"kI",WE(H9),"M",WD(Pi)],Hu,0,Es,[Ck],0,3,0,0,["b",WD(NJ),"by",WE(O_),"dv",WE(Oy),"c$",WE(Mu),"b6",WG(Tw),"bw",WF(R_),"d8",WF(Tx),"d4",WE(Mi),"gg",WD(Rw),"ja",WD(PC),"gK",WE(Pt),"iA",WE(MB)],D7,0,B,[],3,3,0,0,["hF",WE(MT)],C6,0,B,[Dc,D7],3,3,0,0,["bn",WE(P8),"g0",WE(OR),"g3",WE(RI),"gP",WE(Sf),"eH",WD(SQ),"hI",WD(Tp),
"hF",WE(MT),"iZ",WE(NQ)],EN,0,B,[D7],3,3,0,0,["hF",WE(MT)],Do,0,B,[C6,CE,EN],3,3,0,0,["bn",WE(P8),"g0",WE(OR),"g3",WE(RI),"gP",WE(Sf),"eH",WD(SQ),"hI",WD(Tp),"hF",WE(MT),"iZ",WE(NQ)],DK,0,B,[CE],3,3,0,0,["bn",WE(P8),"g0",WE(OR),"g3",WE(RI),"gP",WE(Sf),"eH",WD(SQ),"hI",WD(Tp),"dN",WD(TD),"cj",WE(R0),"dV",WE(TR),"cE",WE(MY)],El,0,B,[Do,DK],1,3,0,0,["bn",WE(P8),"g0",WE(OR),"g3",WE(RI),"gP",WE(Sf),"eH",WD(SQ),"hI",WD(Tp),"hF",WE(MT),"iZ",WE(NQ),"dN",WD(TD),"cj",WE(R0),"dV",WE(TR),"cE",WE(MY),"ik",WE(I5),"dk",WE(Qd),
"M",WD(M0)],H2,0,CZ,[Dn],0,3,0,0,["b",WD(R8),"gE",WE(PQ),"ii",WF(PR),"j",WD(OC),"bP",WE(OT),"cI",WF(Ms)],D1,0,B,[],3,3,0,0,0,Ei,0,B,[D1],0,0,0,0,["gA",WF(Ll),"gr",WE(Oq),"hY",WD(No)],CY,0,B,[],1,3,0,0,["by",WE(FM),"k1",WD(Db),"jk",WE(Kg),"jV",WD(Ip),"j$",WD(Cd),"jU",WD(Cv)],DJ,0,B,[],3,3,0,0,0,D9,0,B,[DJ],3,3,0,0,0,CW,0,B,[],0,0,0,0,["cw",WE(EL),"W",WD(OK),"kP",WD(Lr),"jn",WD(Ge)],CR,0,B,[],3,3,0,0,0,J_,0,CW,[CR],0,0,0,0,["cw",WE(QJ),"h2",WD(Os),"N",WD(Sq)],ER,0,B,[],3,3,0,0,0,HW,0,B,[ER],4,0,0,0,["d3",WE(Mb),
"g1",WE(QI)],EB,0,B,[],3,3,0,0,0,Et,0,B,[EB,CQ],0,0,0,0,["k5",WF(LJ),"bz",WD(SC),"bZ",WD(Ts)],C_,0,Et,[],0,0,0,0,["hz",WF(Ie)],F1,0,C_,[],4,0,0,0,["hz",WF(Rr)],CX,0,C4,[],0,3,0,0,["m",WE(F4)],Kn,0,CX,[],0,3,0,0,["m",WE(Pc)],Fk,0,Ca,[],0,3,0,0,0]);
$rt_metadata([E8,0,B,[],3,3,0,0,0,E6,0,B,[BD],3,0,0,0,0,Gb,0,B,[],3,3,0,0,0,HP,0,B,[Gb],0,3,0,0,["b",WD(Oa)],Hs,0,B,[CR],0,0,0,0,["j1",WE(Op),"W",WD(MX),"N",WD(Rp)],FA,0,B,[],32,0,0,V4,0,Ej,0,V,[],0,3,0,0,["b",WD(GK)],LD,0,Ej,[],0,3,0,0,["b",WD(Tb)],Hf,0,B,[],4,3,0,0,0,JC,0,BK,[],1,3,0,0,0,JB,0,B,[CR],0,0,0,0,["kW",WE(N6),"W",WD(SV),"N",WD(NU)],HX,0,B,[],0,3,0,0,["b",WD(OG)],Jc,0,B,[],4,0,0,0,0,HH,0,CX,[],0,3,0,0,["m",WE(OX)],IZ,0,B,[Dw],0,3,0,0,["b",WD(Q_),"bp",WD(L3),"iU",WD(LF)],Ef,0,B,[],3,3,0,0,0,Dd,0,
B,[Ef],3,3,0,0,0,CF,0,B,[Dd],1,3,0,0,["b",WD(F6)],Jf,0,B,[],4,3,0,0,0,Gr,0,Bc,[Bn],0,3,0,Rm,["jw",WE(Ik)],EW,0,B,[],3,3,0,0,0,LG,0,B,[EW],0,3,0,0,["b",WD(Oj)],Gw,0,B,[],3,3,0,0,0,H1,0,B,[],4,3,0,0,0,LO,0,B,[],0,3,0,0,["b",WD(SM),"g6",WD(RL),"bp",WD(Sy),"eM",WE(Nk),"iN",WD(NI)],IQ,0,B,[],4,0,0,0,0,DW,0,B,[],3,3,0,0,0,Ce,0,B,[],3,3,0,0,0,G8,0,Ek,[Ce],0,0,0,0,["h4",WE(QB),"jH",WF(PI),"bR",WE(QY),"b_",WE(OI)],Iq,0,B,[Ef],4,3,0,0,["Z",WD(H7)],Il,0,B,[],4,3,0,0,0,GZ,0,B,[DW],0,3,0,0,["kX",WH(Q8),"eh",WD(SP)],J6,0,
B,[],4,3,0,0,0,LA,0,CN,[],4,3,0,0,["h4",WE(QB),"cM",WE(S0),"bN",WE(Ov)],Dv,0,B,[],1,3,0,0,["kM",WH(KW),"hd",WG(Kp),"jE",WE(Gy),"iB",WE(Th),"k4",WE(KQ),"h0",WE(SH),"kD",WG(HN),"jC",WE(GW),"gM",WE(Mf)],Ft,0,B,[BD],3,0,0,0,0,JP,0,B,[Ft],0,3,0,0,["kL",WE(Rh),"iH",WF(TF),"j5",WF(N3)],JO,0,B,[Ez],0,3,0,0,["iT",WE(So),"d5",WE(M7),"fY",WE(Sm)],EP,0,B,[BD],3,0,0,0,0,JR,0,B,[EP],0,3,0,0,["jD",WE(L4),"it",WE(P7),"fY",WE(T_)],Dh,0,CM,[],4,0,0,Cz,["b",WD(Hv),"j3",WD(J7),"kY",WF(JS),"k3",WE(HI)],Ky,0,V,[],0,3,0,0,["b",WD(QK)],D0,
0,CY,[Bn],1,3,0,0,["jd",function(b,c,d,e,f){Hw(this,b,c,d,e,f);},"fz",WG(R5),"jM",WE(Kd),"j_",WD(Fa)],KE,0,D0,[],0,0,0,0,["jv",function(b,c,d,e,f,g,h){MR(this,b,c,d,e,f,g,h);},"gC",WD(RM)],CI,0,B,[Dd],3,3,0,0,0,DR,0,CF,[CI],1,3,0,0,["b",WD(K6),"Z",WD(QC)],Fe,0,B,[],3,3,0,0,0,DN,0,DR,[CQ,BI,Fe],0,3,0,0,["b",WD(J8),"by",WE(EF),"k9",WE(Pq),"bP",WE(Ni),"eF",WE(Py),"M",WD(N4),"bV",WE(R$),"j",WD(Oi)],FJ,0,DN,[Ce],0,0,0,0,["bR",WE(Ou),"b_",WE(Mg)],Er,0,B,[],3,3,0,0,0]);
$rt_metadata([BU,0,B,[BI],0,3,0,ME,["cs",WF(Lc),"V",WD(Dt)],Ep,0,B,[De,DK],1,3,0,0,["gU",WF(T6),"i3",WE(OP),"ib",WE(Nn),"ei",WE(Sh),"eb",WF(Rx),"bn",WE(P8),"g0",WE(OR),"g3",WE(RI),"gP",WE(Sf),"eH",WD(SQ),"hI",WD(Tp),"kK",WE(LR),"dC",WE(Se),"i5",WE(TS),"iw",WF(L$),"dN",WD(TD),"cj",WE(R0),"dV",WE(TR),"cE",WE(MY),"b",WD(I6),"hE",WE(Hy),"gF",WD(QW),"hD",WD(Qu),"fs",WD(PZ),"c8",WE(Rn),"gL",WF(Q9),"g9",WD(QM),"j",WD(Te),"gh",WF(N9)],In,0,B,[],4,3,0,0,0,DG,0,B,[Bn],1,3,0,0,["kp",WF(IG)],Dk,0,B,[],0,3,0,F9,["m",WE(IS)],B6,
0,B,[BI,Bn],0,3,0,EQ,["kt",WE(Ih),"fy",WD(RJ),"j",WD(Ny),"A",WE(M9)],Cu,0,V,[],0,3,0,0,["b",WD(Fh),"m",WE(Gv)],Jd,0,Cu,[],0,3,0,0,["m",WE(Q2)],LP,0,V,[],0,3,0,0,["b",WD(MM)],JT,0,B,[BD],1,3,0,0,0,DH,0,C1,[],0,3,0,0,["ks",WE(G3)],FX,0,DH,[],0,3,0,0,["ky",WF(Kv),"cv",WG(Ns),"ft",WE(O4)],F$,0,B,[],3,3,0,0,0,Fv,0,B,[Dd],3,3,0,0,0,CU,0,CF,[Fv],1,3,0,0,["b",WD(Fr)],DZ,0,CU,[],0,0,0,0,["k2",WE(IR),"gN",WD(Pj)],Jw,0,DZ,[],4,0,0,0,["cw",WE(Pp),"Z",WD(Rt)],F7,0,B,[Gm,DC],3,3,0,0,["bu",WE(M4),"h4",WE(QB)],G6,0,CA,[F7,
Ce],4,3,0,0,["bu",WE(M4),"h4",WE(QB),"b",WD(RZ),"gn",WD(Ti),"d1",WE(Rz),"bN",WE(Px),"fG",WF(To)],ES,0,B,[],3,3,0,0,0,ED,0,B,[],3,3,0,0,0,Kj,0,B,[ES,ED],0,3,0,0,["j",WD(LX),"gb",WD(N7),"g5",WE(P3),"ir",WD(TI),"cZ",WD(RD),"em",WD(Md)],Lp,0,BK,[],1,3,0,0,0,Cy,0,Bc,[Bn],0,3,0,Jp,["jh",WE(E5),"fh",WE(J4),"A",WE(Nb)],Ey,0,B,[D1],3,3,0,0,0,HJ,0,B,[],0,3,0,0,0,LE,0,Ep,[],0,3,0,0,["gU",WF(T6),"i3",WE(OP),"ib",WE(Nn),"ei",WE(Sh),"eb",WF(Rx),"bn",WE(P8),"g0",WE(OR),"g3",WE(RI),"gP",WE(Sf),"eH",WD(SQ),"hI",WD(Tp),"kK",
WE(LR),"dC",WE(Se),"i5",WE(TS),"iw",WF(L$),"dN",WD(TD),"cj",WE(R0),"dV",WE(TR),"cE",WE(MY),"b",WD(OH),"hE",WE(PV),"cm",WD(Sb),"dA",WE(Rj),"i$",WD(QT),"dy",WE(Ra),"bE",WD(SA)],Ff,0,B,[],4,3,0,0,0,DU,0,B,[],0,0,0,Vk,0,Ku,0,CW,[CR],0,0,0,0,["cw",WE(Sl),"N",WD(SY)],Bh,0,Bc,[Bn,BI],0,3,0,Bf,["iP",WG(FS),"m",WE(Lv),"fh",WE(H6),"jO",WF(CJ),"by",WE(HF),"bj",WE(MH),"T",WE(PO),"cV",WE(ST),"gY",WG(NT),"fM",WG(Mm),"L",WF(Sc),"id",WD(T7),"bl",WD(P9),"bC",WD(Sz),"H",WF(SK),"dF",WE(L8),"X",WD(Pf)],BZ,0,B,[Bn],0,3,0,Br,0,DF,
0,B,[],4,3,0,Dj,0,HQ,0,B,[Ce],0,0,0,0,["kJ",WF(Tf),"bR",WE(Tj),"b_",WE(TC)],Lo,0,B,[DW],0,3,0,0,["jB",WE(Sj),"eh",WD(RH)],Hp,0,B,[BD],1,3,0,0,0,CP,0,B,[CE],1,0,0,0,["g0",WE(OR),"g3",WE(RI),"gP",WE(Sf),"eH",WD(SQ),"hI",WD(Tp),"d3",WE(EG),"fN",WD(Hi),"cE",WE(KC),"gi",WD(LT),"ge",WE(G2),"gf",WE(IK),"bn",WE(JE),"fu",WE(Kh),"j",WD(H4),"bE",WD(MD),"dN",WD(P6),"dy",WE(PM),"cj",WE(Oh),"dV",WE(RE)],FY,0,CP,[Do],4,0,0,0,["g0",WE(OR),"g3",WE(RI),"gP",WE(Sf),"eH",WD(SQ),"hI",WD(Tp),"hF",WE(MT),"iZ",WE(NQ),"jm",WE(ML),"kc",
WD(Gl),"jI",WE(Lj),"M",WD(Ru),"dk",WE(SE)],DD,0,CY,[Bn,Dn,Dp,Gw],1,3,0,0,["hB",WG(GH),"iG",WG(Nr),"e6",WE(LZ)],D$,0,DD,[],1,0,0,0,["hB",WG(IT)],KV,0,D$,[],0,0,0,0,["kb",function(b,c,d,e,f,g){T1(this,b,c,d,e,f,g);},"iL",WE(NO)],J1,0,B,[],4,3,0,0,0,FP,0,B,[],4,3,0,0,0,J2,0,B,[BD],1,3,0,0,0,CD,0,B,[],0,0,0,Bz,0,D3,0,B,[DJ],0,3,0,0,["b",WD(GC),"ff",WE(Hn),"dm",WE(Rc),"du",WE(P0)],B$,0,B,[],4,3,0,Gx,0,Cp,0,Bc,[Bn],0,3,0,Ke,["fh",WE(Kt),"V",WD(Pg),"j",WD(Nt),"A",WE(Ud),"gc",WD(Nh),"f1",WD(OV)],Jr,0,B,[],0,0,0,0,0,Lh,
0,CU,[],0,0,0,0,["cw",WE(PD),"M",WD(SS),"Z",WD(SD)]]);
$rt_metadata([LU,0,B,[],4,0,0,0,["b",WD(M8)],C$,"WebAssemblyProvider",4,B,[],3,3,0,0,["i9",WF(TB)],Fb,0,B,[C$],4,3,0,0,["i9",WF(TB),"b",WD(Ub),"hU",WD(TQ),"hH",WE(Nu)],DS,0,D3,[D9],1,3,0,0,["b",WD(JX),"ff",WE(NK),"jq",WE(Iy),"dh",WE(NN)],JG,0,DS,[],0,3,0,0,["b",WD(Oo),"i6",WD(L1)],F3,0,B,[],0,3,0,0,0,Kr,0,V,[],0,3,0,0,["b",WD(LY)],JQ,0,B,[Er],0,3,0,0,["km",WE(Sp),"c6",WE(Qp),"js",WE(IB)],GV,0,B,[],0,0,0,0,0,IJ,0,B,[],0,0,0,0,0,Gs,0,CP,[De],4,3,0,0,["gU",WF(T6),"i3",WE(OP),"ib",WE(Nn),"ei",WE(Sh),"eb",WF(Rx),
"g0",WE(OR),"g3",WE(RI),"gP",WE(Sf),"eH",WD(SQ),"hI",WD(Tp),"kK",WE(LR),"dC",WE(Se),"i5",WE(TS),"iw",WF(L$),"b",WD(NV),"d3",WE(Ld),"kQ",WE(KF),"jr",WD(G4),"kg",WF(LB),"j",WD(Tm),"fu",WE(Pl),"bn",WE(Ox),"gf",WE(Mj),"ge",WE(S5),"gi",WD(Mt),"cE",WE(TX),"fN",WD(Pz),"gh",WF(Uf),"c8",WE(Tl),"fs",WD(O5)],Cb,0,B,[BI,Bn,Dp],0,3,0,Gq,["iK",WE(Hc),"iP",WG(LV),"o",WE(NS),"g",WD(Re),"bW",WD(Tg),"e8",WE(Qo),"eI",WF(Nz),"da",WE(Qn),"iV",WF(NX),"iI",WE(SF),"bF",WF(MI),"ho",WE(SN),"j",WD(OL),"ek",WD(Tn),"A",WE(R7),"eS",WE(Sn),
"b9",WD(NL)],LW,0,V,[],0,3,0,0,["b",WD(Od)],Ev,0,Dv,[],1,3,0,0,["hd",WG(IH),"hx",WF(NZ)],Jg,0,Ev,[],0,3,0,0,["jG",WE(Qq),"gT",function(b,c,d,e,f,g,h){return TN(this,b,c,d,e,f,g,h);}],FN,0,B,[BD],3,3,0,0,0,I1,0,B,[FN],0,3,0,0,["kd",WE(Nm),"iq",WE(Nf),"jT",WE(H_),"jF",WE(M3)],BQ,0,Cu,[],0,3,0,0,["b",WD(NE),"m",WE(B7)],Gn,0,DG,[],0,3,0,QX,["ia",WD(SI)],LL,0,B,[D9],4,3,0,0,["b",WD(N_),"dm",WE(Nv),"dh",WE(Or),"du",WE(PP)],Hb,0,V,[],0,3,0,0,["b",WD(Qt),"m",WE(N5)],GN,0,V,[],0,3,0,0,["m",WE(QD),"b",WD(O$)],KL,0,B,
[F$],0,0,0,0,["kG",WE(SB),"bu",WE(Tz),"hn",WE(Td)],Ch,0,B,[Bn,BI],1,3,0,0,["cs",WF(Em),"jp",WD(Bd)],IN,0,B,[],0,0,0,0,["b",WD(TZ)],KR,0,B,[],4,3,0,0,0,E0,0,Bc,[Bn],0,3,0,Su,["jt",WE(JD)],BL,0,Ch,[],12,3,0,Eu,0,FZ,0,B,[],0,3,0,Fp,["m",WE(Hh),"hb",WE(MW),"iR",WF(SG)],EH,0,B,[BI],0,3,0,0,["kR",WF(S$),"f4",WD(OQ),"df",WD(PB),"gv",WD(O6)],GE,0,B,[Ce],0,0,0,0,["j8",WE(L_),"bR",WE(S2),"b_",WE(Qe)],J$,0,BM,[],0,3,0,0,["m",WE(OM)],Ib,0,El,[],4,3,0,0,["bn",WE(P8),"g0",WE(OR),"g3",WE(RI),"gP",WE(Sf),"eH",WD(SQ),"hI",WD(Tp),
"hF",WE(MT),"iZ",WE(NQ),"dN",WD(TD),"cj",WE(R0),"dV",WE(TR),"cE",WE(MY),"ik",WE(RO),"fR",WD(QR),"hP",WE(QQ)],IU,0,B,[Er],0,3,0,0,["b",WD(L7),"c6",WE(Ok),"k$",WE(Jt)],KD,0,V,[],0,3,0,0,["b",WD(Rf)],FQ,0,B,[],4,3,0,Ux,0,HV,0,B,[],0,3,0,0,0,It,0,B,[],4,3,0,0,0,Lf,0,Ei,[Ey],4,0,0,0,["gA",WF(Np),"hr",WE(QA)],Eb,0,B,[],0,3,0,BR,["jK",WF(IY),"gw",WD(MU),"dp",WD(RN),"iv",WD(TL),"h_",WD(RS),"f5",WD(R3),"g",WD(QH)],DX,0,B,[],4,3,0,EU,0,Ht,0,B,[],4,0,0,0,0,KI,0,C4,[],0,3,0,0,0,BS,0,Ch,[],12,3,0,Bs,0,Ln,0,B,[E8],4,0,0,
0,["d3",WE(RX),"gz",WE(OE),"ev",WF(Mz),"jx",WF(Ju)],IX,0,B,[],0,3,0,0,["iK",WE(PU)],IV,0,BK,[],1,3,0,0,0,C5,0,B,[],0,0,0,0,["cM",WE(Pr)],Jn,0,BK,[],1,3,0,0,0,Ka,0,V,[],0,3,0,0,["b",WD(Sg)]]);
$rt_metadata([Co,0,Ch,[],12,3,0,D2,0,Jj,0,B,[],0,3,0,0,["b",WD(L0)],Li,0,B,[E6],0,3,0,0,["iT",WE(OS),"d5",WE(Sw),"fY",WE(R9)],G1,0,B,[],4,3,0,0,0]);
function $rt_array(cls,data){this.k=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","<java_object>@",",","null","0",".","Null pointer","JSON does not allow non-finite numbers","JSON does not allow non-finite numbers.","\"\"","\\t","\\n","\\f","\\r","000","\\u","\\b","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","String is null or empty","Illegal radix: ",
"Result is already complete","black","white, rgb(255, 204, 0) 15%, rgb(135, 31, 19) 33%, rgb(0, 0, 153) 67%, rgb(0, 102, 255) 85%, white","blueviolet, orange, brown, black","red, red","white, rgb(0, 102, 255) 18% , rgb(51, 51, 51) 50%, rgb(229, 0, 178) 85%, white","red, yellow 18%, green 29%, #1E90FF 44%, red","black, red 17%, yellow 83%, white","red, orange, green, blue, yellow, white","main","Zero length BigInteger","Radix out of range","Negative bit address","Negative exponent","BigInteger divide by zero",
"No null success mapper accepted","No null failure mapper accepted","No null handler accepted","Future{cause=","Future{unresolved}","Future{result=null}","Future{result=","}","BIG_ENDIAN","LITTLE_ENDIAN","Index out of bounds","Cannot instantiate any provider for service ","(this Map)",", ","New position "," is outside of range [0;","Replacement preconditions do not hold","Action must be non-null","2","10","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","[]",
"(this Collection)","OFF","SEVERE","WARNING","INFO","CONFIG","FINE","FINER","FINEST","ALL","IGNORE","REPLACE","REPORT","false","true","javaClass@","Either src or dest is null","Scale out of range.","Infinite or NaN","Infinity or NaN","Division by zero","Rounding necessary","Overflow","Underflow","number","object","string","boolean","The last char in dst ","Using default built-in JSON factory which is not interoperable with the underlying platform! Be sure you haven\'t forgot to call Json.registerProvider().",
"power of ten too big","classes.wasm","cy","width","height","placeIndex","frameIndex","wasm","computeLinePixelIterations","initAndComputeLinePixelIterations","UTF-8","Invalid rounding mode","UP","DOWN","CEILING","FLOOR","HALF_UP","HALF_DOWN","HALF_EVEN","UNNECESSARY","global","","STRING","NUMBER","BOOLEAN","OBJECT","ARRAY","NULL","UNDEFINED","RETURN_NULL","TRACE_AND_RETURN_NULL","THROW_EXCEPTION"]);
Cb.prototype.toString=function(){return $rt_ustr(this);};
Cb.prototype.valueOf=Cb.prototype.toString;B.prototype.toString=function(){return $rt_ustr(OO(this));};
B.prototype.__teavm_class__=function(){return $dbg_class(this);};
var Long_eq;var Long_ne;var Long_gt;var Long_ge;var Long_lt;var Long_le;var Long_compare;var Long_add;var Long_sub;var Long_inc;var Long_dec;var Long_mul;var Long_div;var Long_rem;var Long_udiv;var Long_urem;var Long_neg;var Long_and;var Long_or;var Long_xor;var Long_shl;var Long_shr;var Long_shru;var Long_not;if(typeof $rt_globals.BigInt!=='function'){Long_eq=function(a,b){return a.hi===b.hi&&a.lo===b.lo;};Long_ne=function(a,b){return a.hi!==b.hi||a.lo!==b.lo;};Long_gt=function(a,b){if(a.hi<b.hi){return false;}if
(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};Long_ge=function(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};Long_lt=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};Long_le=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y
=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);};Long_add=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo+b_lolo|0;var lohi
=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_inc=function(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);};Long_dec=function(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);};Long_neg=function(a){return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));};Long_sub=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>
31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_compare=function(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo
>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_mul=function(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi
>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);};Long_div=function(a,b){if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)
<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];};Long_udiv=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];};Long_rem=function(a,b){if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];};Long_urem=function(a,
b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];};function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive
?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a){return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}Long_and=function(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);};Long_or=function(a,b){return new Long(a.lo
|b.lo,a.hi|b.hi);};Long_xor=function(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);};Long_shl=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}};Long_shr=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}};Long_shru=function(a,b){b&=63;if(b===
0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}};Long_not=function(a){return new Long(~a.hi,~a.lo);};function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>
16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi
=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|
0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a){var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -
n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=
b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)
+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;}}else {Long_eq=function(a,b){return a===b;};Long_ne=function(a,b){return a!==b;};Long_gt=function(a,b){return a>b;};Long_ge
=function(a,b){return a>=b;};Long_lt=function(a,b){return a<b;};Long_le=function(a,b){return a<=b;};Long_add=function(a,b){return $rt_globals.BigInt.asIntN(64,a+b);};Long_inc=function(a){return $rt_globals.BigInt.asIntN(64,a+1);};Long_dec=function(a){return $rt_globals.BigInt.asIntN(64,a -1);};Long_neg=function(a){return $rt_globals.BigInt.asIntN(64, -a);};Long_sub=function(a,b){return $rt_globals.BigInt.asIntN(64,a -b);};Long_compare=function(a,b){return a<b? -1:a>b?1:0;};Long_mul=function(a,b){return $rt_globals.BigInt.asIntN(64,
a*b);};Long_div=function(a,b){return $rt_globals.BigInt.asIntN(64,a/b);};Long_udiv=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)/$rt_globals.BigInt.asUintN(64,b));};Long_rem=function(a,b){return $rt_globals.BigInt.asIntN(64,a%b);};Long_urem=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)%$rt_globals.BigInt.asUintN(64,b));};Long_and=function(a,b){return $rt_globals.BigInt.asIntN(64,a&b);};Long_or=function(a,b){return $rt_globals.BigInt.asIntN(64,
a|b);};Long_xor=function(a,b){return $rt_globals.BigInt.asIntN(64,a^b);};Long_shl=function(a,b){return $rt_globals.BigInt.asIntN(64,a<<$rt_globals.BigInt(b&63));};Long_shr=function(a,b){return $rt_globals.BigInt.asIntN(64,a>>$rt_globals.BigInt(b&63));};Long_shru=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var L=Long_add;var S=Long_sub;var Q=Long_mul;var Bg=Long_div;var BO=Long_rem;var Cs
=Long_or;var H=Long_and;var Ki=Long_xor;var U=Long_shl;var Z=Long_shr;var T=Long_shru;var Ds=Long_compare;var X=Long_eq;var BG=Long_ne;var Bx=Long_lt;var Bq=Long_le;var Cc=Long_gt;var B3=Long_ge;var Zh=Long_not;var Bt=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new $rt_globals.Error("Thread already started");}if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof $rt_globals.Error){throw result;}};this.run();};TeaVMThread.prototype.resume
=function(){if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending()
{var thread=$rt_nativeThread();return thread!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new $rt_globals.Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread
=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer(){throw new $rt_globals.Error("Invalid recorded state");}main=$rt_mainStarter(VS);
main.javaException=$rt_javaException;
(function(){var c;c=Kc.prototype;c.getLength=c.kl;c.get=c.kA;c=JP.prototype;c.apply=c.j5;c=JO.prototype;c.handle=c.fY;c=JR.prototype;c.handle=c.fY;c=I1.prototype;c.handleEvent=c.jF;c=Li.prototype;c.handle=c.fY;})();
})(this);

main()