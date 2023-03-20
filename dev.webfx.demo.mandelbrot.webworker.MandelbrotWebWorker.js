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
{superclass.call(this);};}function $rt_setCloneMethod(target, f){target.c3=f;}
function $rt_cls(cls){return Hp(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Uk(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.q.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return Wv;}
function $rt_throwableMessage(t){return PS(t);}
function $rt_throwableCause(t){return PX(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Df());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return BV();}
function $rt_setThread(t){return DV(t);}
function $rt_createException(message){return Ww(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var G=$rt_throw;var BX=$rt_compare;var Wx=$rt_nullCheck;var I=$rt_cls;var By=$rt_createArray;var BH=$rt_isInstance;var P$=$rt_nativeThread;var Vx=$rt_suspending;var VH=$rt_resuming;var Un=$rt_invalidPointer;var D=$rt_s;var R=$rt_eraseClinit;var BP=$rt_imul;var Bk=$rt_wrapException;var Wy=$rt_checkBounds;var Wz=$rt_checkUpperBound;var WA=$rt_checkLowerBound;var WB=$rt_wrapFunction0;var WC=$rt_wrapFunction1;var WD=$rt_wrapFunction2;var WE=$rt_wrapFunction3;var WF=$rt_wrapFunction4;var E=$rt_classWithoutFields;var B5
=$rt_createArrayFromData;var WG=$rt_createCharArrayFromData;var WH=$rt_createByteArrayFromData;var WI=$rt_createShortArrayFromData;var B_=$rt_createIntArrayFromData;var WJ=$rt_createBooleanArrayFromData;var WK=$rt_createFloatArrayFromData;var WL=$rt_createDoubleArrayFromData;var Fo=$rt_createLongArrayFromData;var WM=$rt_createBooleanArray;var Fw=$rt_createByteArray;var WN=$rt_createShortArray;var BY=$rt_createCharArray;var W=$rt_createIntArray;var VJ=$rt_createLongArray;var WO=$rt_createFloatArray;var WP=$rt_createDoubleArray;var BX
=$rt_compare;var WQ=$rt_castToClass;var WR=$rt_castToInterface;var V9=Long_toNumber;var C=Long_fromInt;var WS=Long_fromNumber;var F=Long_create;var M=Long_ZERO;var WT=Long_hi;var K=Long_lo;
function B(){this.k=null;this.$id$=0;}
function PW(){var a=new B();J(a);return a;}
function D5(b){var c;if(b.k===null)EA(b);if(b.k.x===null)b.k.x=BV();else if(b.k.x!==BV())G(Kn(D(0)));c=b.k;c.D=c.D+1|0;}
function BB(b){var c,d;if(!CS(b)&&b.k.x===BV()){c=b.k;d=c.D-1|0;c.D=d;if(!d)b.k.x=null;CS(b);return;}G(P2());}
function UJ(b){RR(b,1);}
function RR(b,c){var d,$p,$z;$p=0;if(VH()){var $T=P$();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.k===null)EA(b);if(b.k.x===null)b.k.x=BV();if(b.k.x===BV()){d=b.k;d.D=d.D+c|0;return;}$p=1;case 1:Tr(b,c);if(Vx()){break _;}return;default:Un();}}P$().s(b,c,d,$p);}
function EA(b){b.k=V$();}
function Tr(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.bu=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.hn=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=Ws(callback);return thread.suspend(function(){try{Wo(b,c,callback);}catch($e){callback.hn($rt_exception($e));}});}
function Wo(b,c,d){var e,f,g;e=BV();if(b.k===null){EA(b);DV(e);f=b.k;f.D=f.D+c|0;d.bu(null);return;}if(b.k.x===null){b.k.x=e;DV(e);f=b.k;f.D=f.D+c|0;d.bu(null);return;}g=b.k;if(g.U===null)g.U=L8();Mk(g.U,V5(e,b,c,d));}
function UN(b){MF(b,1);}
function MF(b,c){var d;if(!CS(b)&&b.k.x===BV()){d=b.k;d.D=d.D-c|0;if(d.D>0)return;d.x=null;if(d.U!==null&&!D4(d.U))Mb(Vq(b));else CS(b);return;}G(P2());}
function Qi(b){var c,d,e;if(!CS(b)&&b.k.x===null){c=b.k;if(c.U!==null&&!D4(c.U)){d=c.U;e=NX(d);c.U=null;e.eg();}return;}}
function CS(a){var b,c;b=a.k;if(b===null)return 1;a:{b:{if(b.x===null){if(b.U!==null){c=b.U;if(!D4(c))break b;}if(b.eV===null)break a;c=b.eV;if(D4(c))break a;}}return 0;}K$(a);return 1;}
function K$(a){a.k=null;}
function J(a){}
function DO(a){return Hp(a.constructor);}
function PG(a){return DA(a);}
function Mg(a,b){return a!==b?0:1;}
function ON(a){var b,c;b=Go(DA(a));c=Y();P(P(c,D(1)),b);return Bb(c);}
function DA(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function TU(a){var b,c,d;if(!BH(a,CQ)){b=a;if(b.constructor.$meta.item===null)G(Ut());}c=Mj(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function TE(b){Qi(b);}
function MP(b,c,d,e){var f;DV(b);c.k.x=b;f=c.k;f.D=f.D+d|0;e.bu(null);}
function BM(){var a=this;B.call(a);a.dD=null;a.c0=null;a.ct=0;a.c2=0;}
function WU(a,b,c,d){var e=new BM();Iv(e,a,b,c,d);return e;}
function WV(){var a=new BM();Kp(a);return a;}
function WW(a){var b=new BM();Gb(b,a);return b;}
function WX(a){var b=new BM();Kr(b,a);return b;}
function Iv(a,b,c,d,e){if(e)a.cK();a.ct=d;a.c2=e;a.dD=b;a.c0=c;}
function Kp(a){a.ct=1;a.c2=1;a.cK();}
function Gb(a,b){a.ct=1;a.c2=1;a.cK();a.dD=b;}
function Kr(a,b){a.ct=1;a.c2=1;a.cK();a.c0=b;}
function QL(a){return a;}
function PS(a){return a.dD;}
function PX(a){return a.c0===a?null:a.c0;}
var Ca=E(BM);
function WY(){var a=new Ca();Fl(a);return a;}
function WZ(a){var b=new Ca();GO(b,a);return b;}
function Fl(a){Kp(a);}
function GO(a,b){Gb(a,b);}
var V=E(Ca);
function W0(){var a=new V();BE(a);return a;}
function Ww(a){var b=new V();C0(b,a);return b;}
function BE(a){Fl(a);}
function C0(a,b){GO(a,b);}
var B1=E(V);
function DL(){var a=new B1();Iy(a);return a;}
function Vk(a){var b=new B1();Cx(b,a);return b;}
function Iy(a){BE(a);}
function Cx(a,b){C0(a,b);}
var DP=E(0);
function P8(a,b){return b;}
function OQ(a,b){if(b===null)return null;if(BH(b,C6))return a.g3(b);if(!BH(b,Da))return a.dx(b);return a.gP(b);}
function RI(a,b){return b.bE();}
function Sf(a,b){return b.bE();}
var Gg=E(0);
var Fy=E(0);
function SQ(a){return (FD(a.bE(),a,Y())).j();}
function Ri(b,c){var d,e,f,g,h;c.r(123);d=1;e=b.fs();f=0;g=e.M();while(f<g){h=e.hF(f);if(!d)c.r(44);H4(h,c);c.r(58);FD(b.c7(h),b,c);d=0;f=f+1|0;}return c.r(125);}
function RP(b,c){return (Qs(b,D(2),c.r(91))).r(93);}
function Qs(b,c,d){var e,f;e=b.M();f=0;while(f<e){if(f>0)d.C(c);FD(b.dj(f),b,d);f=f+1|0;}return d;}
function FD(b,c,d){V2();switch(W1.data[Bd(c.cE(b))]){case 1:return d.C(D(3));case 2:return Ri(c.cj(b),d);case 3:return RP(c.dT(b),d);case 4:return d.C(M4(c.bn(b)));case 5:return d.bf(c.bn(b));case 6:return H4(c.bn(b),d);default:}return d;}
function OI(b){if(b.c_(46)>0&&b.c_(101)<0&&b.c_(69)<0){while(b.e7(D(4))){b=b.bF(0,b.g()-1|0);}if(b.e7(D(5)))b=b.bF(0,b.g()-1|0);}return b;}
function M4(b){if(b!==null){R4(b);return OI(b.j());}G(CG(D(6)));}
function R4(b){var c;a:{b:{if(b!==null){if(b instanceof Cp){if((Pv(0.0)).A(b))break b;c=b;if(!c.f1()&&!c.gc())break b;G(CG(D(7)));}if(b instanceof Cy&&!(UP(0.0)).A(b)){c=b;if(c.f1())break a;if(c.gc())break a;}}}return;}G(CG(D(8)));}
function H4(b,c){var d,e,f,g,h,i,j;if(QE(b))return c.C(D(9));d=0;e=b.g();c.r(34);f=0;while(f<e){a:{g=b.o(f);switch(g){case 8:break;case 9:c.C(D(10));break a;case 10:c.C(D(11));break a;case 12:c.C(D(12));break a;case 13:c.C(D(13));break a;case 34:case 92:c.r(92);c.r(g);break a;case 47:if(d==60)c.r(92);c.r(g);break a;default:if(g>=32){c.r(g);break a;}h=Go(g);i=Y();P(P(i,D(14)),h);j=Bb(i);(c.C(D(15))).C(j.ho(j.g()-4|0));break a;}c.C(D(16));}f=f+1|0;d=g;}return c.r(34);}
var Dg=E(0);
function Tp(a){return a.cj(a.dL());}
var Dc=E(0);
function Hz(){var a=this;B.call(a);a.ey=null;a.f0=null;a.fw=0;a.f8=0;}
function UL(a,b){var c=new Hz();Q0(c,a,b);return c;}
function Q0(a,b,c){J(a);a.ey=b;a.f0=c;}
function Qb(a){return Cv(a.ey);}
function Qk(a,b){return Cd(a.f0)<b?0:1;}
function Q$(a,b){a.fw=b;}
function Ub(a,b){a.f8=b;}
var BI=E(0);
var Bc=E();
function Bm(a){J(a);}
var Bn=E(0);
function CV(){Bc.call(this);this.d9=0;}
var W2=null;var W3=null;function B2(){B2=R(CV);Qx();}
function Rb(a){var b=new CV();Jj(b,a);return b;}
function Jj(a,b){B2();Bm(a);a.d9=b;}
function IY(b,c){B2();if(!(c>=2&&c<=36))c=10;return ((V0(20)).eO(b,c)).j();}
function Go(b){B2();return Mm(b,4);}
function H_(b){B2();return IY(b,10);}
function E9(b,c){var d,e,f,g,h,i,j;B2();if(c>=2&&c<=36){if(b!==null&&!b.bW()){a:{d=0;e=0;switch(b.o(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.g())G(TZ());while(e<b.g()){g=e+1|0;h=Ex(b.o(e));if(h<0){i=new BQ;j=Y();P(P(j,D(17)),b);B7(i,Bb(j));G(i);}if(h>=c){i=new BQ;j=Y();P(P(Bj(P(j,D(18)),c),D(19)),b);B7(i,Bb(j));G(i);}f=BP(c,f)+h|0;if(f<0){if(g==b.g()&&f==(-2147483648)&&d)return (-2147483648);i=new BQ;j=Y();P(P(j,D(20)),b);B7(i,Bb(j));G(i);}e=g;}if(d)f= -f|0;return f;}G(CH(D(21)));}i
=new BQ;j=Y();Bj(P(j,D(22)),c);B7(i,Bb(j));G(i);}
function D6(b){B2();return E9(b,10);}
function Bv(b){B2();if(b>=(-128)&&b<=127){HF();return W3.data[b+128|0];}return Rb(b);}
function HF(){var b;B2();a:{if(W3===null){W3=By(CV,256);b=0;while(true){if(b>=W3.data.length)break a;W3.data[b]=Rb(b-128|0);b=b+1|0;}}}}
function NF(a){return a.d9;}
function Sk(a){return H_(a.d9);}
function CL(b){var c,d,e;B2();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function HL(b){var c,d,e;B2();if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;e=d<<8;if(!e)e=d;else c=c|8;d=e<<4;if(!d)d=e;else c=c|4;e=d<<2;if(!e)e=d;else c=c|2;if(e<<1)c=c|1;return (32-c|0)-1|0;}
function CC(b){B2();return b>>31|( -b|0)>>>31;}
function Qx(){W2=I($rt_intcls());}
var Jx=E(Ca);
function Ut(){var a=new Jx();SW(a);return a;}
function SW(a){Fl(a);}
var DQ=E(0);
var Gl=E(0);
function Ir(){return UO();}
function M3(a,b){if(a.d0(b))return;G(Kn(D(23)));}
var Cm=E();
var W4=null;var W5=null;var W6=null;var W7=null;var W8=null;function PH(){PH=R(Cm);S6();}
function S6(){W4=B_([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);W5=Fo([C(1),C(10),C(100),C(1000),C(10000),C(100000),C(1000000),C(10000000),C(100000000),C(1000000000),F(1410065408, 2),F(1215752192, 23),F(3567587328, 232),F(1316134912, 2328),F(276447232, 23283),F(2764472320, 232830),F(1874919424, 2328306),F(1569325056, 23283064),F(2808348672, 232830643)]);W6=Fo([C(1),C(10),C(100),C(10000),C(100000000),F(1874919424, 2328306)]);W7=Uy();W8=VB();}
var CE=E(0);
var Fg=E();
var W9=null;function We(){We=R(Fg);QO();}
function QO(){W9=W((J2()).data.length);W9.data[Bd(W$)]=1;W9.data[Bd(W_)]=2;W9.data[Bd(Xa)]=3;W9.data[Bd(Xb)]=4;W9.data[Bd(Xc)]=5;W9.data[Bd(Xd)]=6;W9.data[Bd(Xe)]=7;W9.data[Bd(Xf)]=8;}
var FK=E();
var Xg=null;function B4(){B4=R(FK);Nw();}
function LG(){B4();return B9((-3.9012757202628037),0.3632155357886345,(-1.5960299759051222),1.6023384588317566,D(24),D(25),0,321,44,1000,240,371,F(2934060552, 9));}
function JF(){B4();return B9((-1.617617631906755),2.082124330451932,(-0.8379058137691474),1.936900657999868,D(24),D(26),0,0,0,250,123,183,F(3508701852, 1));}
function Hw(){B4();return B9((-0.3923604154656245),(-0.35385390657205185),0.6337449826252688,0.6626248642954482,D(24),D(27),1,2486,1200,5000,100,298,F(2167787160, 14));}
function HT(){B4();return B9(0.3255969663863445,0.3838641014597792,0.07356094433491353,0.11726129563998954,D(24),D(27),1,0,12,3000,73,330,F(2753102528, 26));}
function IB(){B4();return B9((-1.9073528222932252),(-1.9073514924809212),0.00198475588464816,0.0019857532438761864,D(24),D(28),0,1157,565,5000,126,252,F(3930967113, 17));}
function GA(){B4();return B9((-1.4611993645157393),(-1.4611969393517183),(-2.69122434052013E-6),(-8.7235132469165E-7),D(24),D(29),1,1092,539,5000,144,181,F(1185635964, 9));}
function ID(){B4();return B9((-1.5960139049602644),0.4920585171556493,(-0.30991904708784934),1.2561352694990862,D(24),D(30),0,0,0,10000,54,207,F(829234216, 65));}
function Iw(){B4();return B9((-1.941022691742085),(-1.940943066443167),6.182644332733532E-4,6.779834074618679E-4,D(24),D(27),1,250,1,5000,118,253,F(2737667071, 34));}
function Hi(){B4();return B9(0.25211825446288316,0.25249702635864024,(-3.1927191194277595E-4),(-3.519299012499159E-5),D(24),D(31),0,1300,0,50000,125,288,F(3877585330, 78));}
function Nw(){var b;b=B5(FZ,[LG(),JF(),Hw(),HT(),IB(),GA(),ID(),Iw(),Hi()]);Xg=b;}
function Gn(){Bc.call(this);this.em=M;}
var Xh=null;function Ct(){Ct=R(Gn);RT();}
function VS(a){var b=new Gn();JD(b,a);return b;}
function JD(a,b){Ct();Bm(a);a.em=b;}
function EZ(b){Ct();return VS(b);}
function K_(b,c){var d,e,f,g,h,i,j;Ct();if(c>=2&&c<=36){if(b!==null&&!b.bW()){a:{d=0;e=0;switch(b.o(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=M;while(e<b.g()){g=e+1|0;h=Ex(b.o(e));if(h<0){i=new BQ;j=Y();P(P(j,D(17)),b);B7(i,Bb(j));G(i);}if(h>=c){i=new BQ;j=Y();P(P(Bj(P(j,D(18)),c),D(19)),b);B7(i,Bb(j));G(i);}f=L(Q(C(c),f),C(h));if(Bx(f,M)){if(g==b.g()&&X(f,F(0, 2147483648))&&d)return F(0, 2147483648);i=new BQ;j=Y();P(P(j,D(20)),b);B7(i,Bb(j));G(i);}e=g;}if(d)f=Bt(f);return f;}G(CH(D(21)));}i
=new BQ;j=Y();Bj(P(j,D(22)),c);B7(i,Bb(j));G(i);}
function KF(b){Ct();return K_(b,10);}
function ME(a){return K(a.em);}
function Hl(b){Ct();return ((Y()).iy(b)).j();}
function Q7(a){return Hl(a.em);}
function Hq(b){var c,d,e;Ct();if(X(b,M))return 64;c=0;d=T(b,32);if(BG(d,M))c=32;else d=b;e=T(d,16);if(X(e,M))e=d;else c=c|16;d=T(e,8);if(X(d,M))d=e;else c=c|8;e=T(d,4);if(X(e,M))e=d;else c=c|4;d=T(e,2);if(X(d,M))d=e;else c=c|2;if(BG(T(d,1),M))c=c|1;return (64-c|0)-1|0;}
function IN(b){var c,d,e;Ct();if(X(b,M))return 64;c=0;d=U(b,32);if(BG(d,M))c=32;else d=b;e=U(d,16);if(X(e,M))e=d;else c=c|16;d=U(e,8);if(X(d,M))d=e;else c=c|8;e=U(d,4);if(X(e,M))e=d;else c=c|4;d=U(e,2);if(X(d,M))d=e;else c=c|2;if(BG(U(d,1),M))c=c|1;return (64-c|0)-1|0;}
function Eq(b){Ct();return K(Cs(Z(b,63),T(Bt(b),63)));}
function Ee(b,c){return Long_udiv(b, c);}
function Hk(b,c){return Long_urem(b, c);}
function RT(){Xh=I($rt_longcls());}
var Ck=E(0);
var E7=E(0);
function Cl(){var a=this;B.call(a);a.f6=M;a.gy=M;a.hq=null;a.h9=null;a.gV=0;a.i3=null;}
var Xi=null;var Xj=null;var Xk=0;var Xl=0;var Xm=null;function Gf(){Gf=R(Cl);N0();}
function Ug(a){var b=new Cl();Ib(b,a);return b;}
function Xn(a,b){var c=new Cl();Fz(c,a,b);return c;}
function Ib(a,b){Gf();Fz(a,null,b);}
function Fz(a,b,c){var d;Gf();J(a);a.hq=PW();a.gV=1;a.h9=c;a.i3=b;d=Xk;Xk=d+1|0;a.f6=C(d);}
function DV(b){Gf();if(Xj!==b)Xj=b;Xj.gy=Jw();}
function BV(){Gf();return Xj;}
function L5(a){return a.f6;}
function N0(){Xi=Ug(D(32));Xj=Xi;Xk=1;Xl=1;Xm=Vy();}
var BD=E(0);
function Q6(b){return b;}
var Fu=E(0);
var Kb=E();
function TK(a,b){return a.jY(b);}
function O0(a){return a.jV();}
var Dw=E(0);
var H7=E();
function Wl(){var a=new H7();Qy(a);return a;}
function Qy(a){J(a);}
function Oa(a){return I$(a);}
function I$(a){return T_();}
function Bl(){var a=this;Bc.call(a);a.a=null;a.e=0;a.f=0;a.br=0;}
var Xo=null;var Xp=null;var Xq=null;var Xr=null;var Xs=null;var Xt=null;function Be(){Be=R(Bl);T3();}
function Vs(a){var b=new Bl();I1(b,a);return b;}
function Xu(a,b){var c=new Bl();FB(c,a,b);return c;}
function Bu(a,b){var c=new Bl();Iu(c,a,b);return c;}
function Bp(a,b,c){var d=new Bl();JK(d,a,b,c);return d;}
function S7(a,b){var c=new Bl();GW(c,a,b);return c;}
function Vl(a,b){var c=new Bl();LP(c,a,b);return c;}
function I1(a,b){Be();FB(a,b,10);}
function FB(a,b,c){Be();Bm(a);a.br=(-2);if(b===null)G(Df());if(c>=2&&c<=36){if(b.g()){Hd(a,b,c);return;}G(CH(D(33)));}G(CH(D(34)));}
function Iu(a,b,c){var d;Be();Bm(a);a.br=(-2);a.f=b;a.e=1;d=W(1);d.data[0]=c;a.a=d;}
function JK(a,b,c,d){Be();Bm(a);a.br=(-2);a.f=b;a.e=c;a.a=d;}
function GW(a,b,c){var d;Be();Bm(a);a.br=(-2);a.f=b;if(X(H(c,F(0, 4294967295)),M)){a.e=1;d=W(1);d.data[0]=K(c);a.a=d;}else{a.e=2;a.a=B_([K(c),WT(c)]);}}
function LP(a,b,c){var d,e;Be();d=c.data;Bm(a);a.br=(-2);e=d.length;if(e){a.f=b;a.e=e;a.a=c;BC(a);}else{a.f=0;a.e=1;d=W(1);d.data[0]=0;a.a=d;}}
function BF(b){Be();if(Bx(b,M)){if(X(b,C(-1)))return Xr;return S7((-1),Bt(b));}if(Cc(b,C(10)))return S7(1,b);return Xs.data[K(b)];}
function Hd(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;Be();e=c.g();if(c.o(0)!=45){f=1;g=0;h=e;}else{f=(-1);g=1;h=e+(-1)|0;}Vi();i=Xv.data[d];j=h/i|0;k=h%i|0;if(k)j=j+1|0;l=W(j);m=Xw.data[d-2|0];n=0;if(!k)k=i;o=g+k|0;while(g<e){p=l.data;q=E9(c.bF(g,o),d);r=Hc(l,n,m);s=r+PT(l,n,q)|0;h=n+1|0;p[n]=s;s=o+i|0;n=h;g=o;o=s;}b.f=f;b.e=n;b.a=l;BC(b);}
function PJ(a){if(a.f<0)a=Bp(1,a.e,a.a);return a;}
function Q1(a){return !a.f?a:Bp( -a.f|0,a.e,a.a);}
function O1(a,b){return SX(a,b);}
function MY(a,b){return MJ(a,b);}
function St(a){return a.f;}
function QF(a,b){if(b&&a.f)return b>0?HJ(a,b):G8(a, -b|0);return a;}
function L_(a,b){if(b&&a.f)return b>0?G8(a,b):HJ(a, -b|0);return a;}
function Qz(a){if(a.f)a=MO(a);return a;}
function TO(a){return Ud(a);}
function PF(a,b){var c,d,e,f;if(!b)return !(a.a.data[0]&1)?0:1;if(b<0)G(Cq(D(35)));c=b>>5;if(c>=a.e)return a.f>=0?0:1;d=a.a.data[c];e=1<<(b&31);if(a.f<0){f=a.eb();if(c<f)return 0;d=f==c? -d|0:d^(-1);}return !(d&e)?0:1;}
function Q4(a){var b;if(!a.f)return (-1);b=a.eb();return (b<<5)+HL(a.a.data[b])|0;}
function NB(a){var b;b=a.e<=1?H(C(a.a.data[0]),F(4294967295, 0)):Cs(U(C(a.a.data[1]),32),H(C(a.a.data[0]),F(4294967295, 0)));return Q(C(a.f),b);}
function Nc(a,b){if(a.f>b.f)return 1;if(a.f<b.f)return (-1);if(a.e>b.e)return a.f;if(a.e<b.e)return  -b.f|0;return BP(a.f,Eh(a.a,b.a,a.e));}
function Pw(a,b){var c;if(a===b)return 1;if(!(b instanceof Bl))return 0;c=b;return a.f==c.f&&a.e==c.e&&a.hs(c.a)?1:0;}
function TJ(a,b){var c,d;c=a.e-1|0;while(c>=0){d=b.data;if(a.a.data[c]!=d[c])break;c=c+(-1)|0;}return c>=0?0:1;}
function Ta(a,b){if(!b.f){Be();return Xo;}if(a.f)return Lp(a,b);Be();return Xo;}
function Nf(a,b){var c;if(b<0)G(Cq(D(36)));if(!b){Be();return Xp;}if(b!=1){Be();if(!a.A(Xp)&&!a.A(Xo)){if(a.cL(0))return Kk(a,b);c=1;while(!a.cL(c)){c=c+1|0;}return (Lx(BP(c,b))).z((a.cS(c)).bt(b));}}return a;}
function RC(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=b.f;if(!c)G(Cq(D(37)));d=b.e;e=b.a;if(d==1)return Q3(a,e.data[0],c);f=a.a;g=a.e;h=BX(g,d);i=!h?Eh(f,e,g):h<=0?(-1):1;if(i<0){j=By(Bl,2);k=j.data;Be();k[0]=Xo;k[1]=a;return j;}l=a.f;m=(g-d|0)+1|0;n=l!=c?(-1):1;o=W(m);p=T2(o,m,f,g,e,d);q=Bp(n,m,o);r=Bp(l,d,p);BC(q);BC(r);return B5(Bl,[q,r]);}
function BC(a){var b,c,d;while(a.e>0){b=a.a.data;c=a.e-1|0;a.e=c;if(b[c])break;}b=a.a.data;d=a.e;a.e=d+1|0;if(!b[d])a.f=0;}
function M1(a){var b;if(a.br==(-2)){if(!a.f)b=(-1);else{b=0;while(!a.a.data[b]){b=b+1|0;}}a.br=b;}return a.br;}
function Lx(b){var c,d,e,f,g;Be();if(b<Xt.data.length)return Xt.data[b];c=b>>5;d=b&31;e=c+1|0;f=W(e);g=f.data;g[c]=1<<d;return Bp(1,e,f);}
function T3(){var b;Xo=Bu(0,0);Xp=Bu(1,1);Xq=Bu(1,10);Xr=Bu((-1),1);Xs=B5(Bl,[Xo,Xp,Bu(1,2),Bu(1,3),Bu(1,4),Bu(1,5),Bu(1,6),Bu(1,7),Bu(1,8),Bu(1,9),Xq]);Xt=By(Bl,32);b=0;while(b<Xt.data.length){Xt.data[b]=BF(U(C(1),b));b=b+1|0;}}
var Gy=E(V);
function Cq(a){var b=new Gy();PE(b,a);return b;}
function PE(a,b){C0(a,b);}
var Gs=E();
var Xx=null;function Uh(){Uh=R(Gs);Rk();}
function Rk(){Xx=W((FF()).data.length);Xx.data[Bd(Xy)]=1;Xx.data[Bd(Xz)]=2;Xx.data[Bd(XA)]=3;}
var G9=E();
function MU(b){return b;}
function D4(b){return b.length?0:1;}
function Mk(b,c){var d;d=MU(c);b.push(d);}
function NX(b){return b.shift();}
var FH=E(0);
var FS=E(0);
function Ql(b){return VP(b);}
function QB(a,b){return a.fG(b,U_());}
var DC=E(0);
var CN=E();
function Fx(a){J(a);}
function Fi(a,b,c){c.bR(b);}
function Ed(a,b,c){c.b_(b);}
function I8(a,b,c){var d;Fj(b,D(38));Fj(c,D(39));d=Uj(b,c);a.bN(d);return d;}
function CA(){var a=this;CN.call(a);a.J=null;a.ba=null;}
var XB=null;function Dx(){Dx=R(CA);S1();}
function XC(){var a=new CA();En(a);return a;}
function En(a){Dx();Fx(a);}
function SL(a){var b,c;D5(a);try{if(a.J instanceof C5)b=null;else{c=a.J;Dx();b=c!==XB?a.J:null;}return b;}finally{BB(a);}}
function N1(a,b){var c;Fj(b,D(40));c=!BH(b,Ce)?U1(a,b):b;a.bN(c);return a;}
function Iz(a,b){var c,d,e,$$je;D5(a);a:{b:{try{c=a.J;if(c===null)break b;BB(a);}catch($$e){$$je=Bk($$e);d=$$je;break a;}if(c instanceof C5)Ed(a,c.dQ,b);else{Dx();if(c===XB)c=null;Fi(a,c,b);}return;}c:{try{if(a.ba===null){a.ba=b;break c;}if(a.ba instanceof FJ)e=a.ba;else{e=V_();e.bV(a.ba);a.ba=e;}e.bV(b);break c;}catch($$e){$$je=Bk($$e);d=$$je;break a;}}try{BB(a);}catch($$e){$$je=Bk($$e);d=$$je;break a;}return;}BB(a);G(d);}
function GN(a,b){var c,d,$$je;D5(a);a:{b:{c:{try{if(a.J===null)break c;BB(a);}catch($$e){$$je=Bk($$e);c=$$je;break b;}return 0;}d:{try{if(b!==null){c=b;break d;}Dx();c=XB;break d;}catch($$e){$$je=Bk($$e);c=$$je;break b;}}try{a.J=c;d=a.ba;a.ba=null;BB(a);break a;}catch($$e){$$je=Bk($$e);c=$$je;}}BB(a);G(c);}if(d!==null)Fi(a,b,d);return 1;}
function TX(a,b){var c,d,$$je;if(b===null)b=RF(null);D5(a);a:{b:{c:{try{if(a.J===null)break c;BB(a);}catch($$e){$$je=Bk($$e);c=$$je;break b;}return 0;}try{a.J=US(b);d=a.ba;a.ba=null;BB(a);break a;}catch($$e){$$je=Bk($$e);c=$$je;}}BB(a);G(c);}if(d!==null)Ed(a,b,d);return 1;}
function Sd(a){var b,c,d,$$je;D5(a);a:{b:{try{if(!(a.J instanceof C5))break b;b=a.J.dQ.de();c=Y();C9(P(P(c,D(41)),b),125);b=Bb(c);BB(a);}catch($$e){$$je=Bk($$e);b=$$je;break a;}return b;}c:{try{if(a.J!==null)break c;BB(a);}catch($$e){$$je=Bk($$e);b=$$je;break a;}return D(42);}d:{try{b=a.J;Dx();if(b!==XB)break d;BB(a);}catch($$e){$$je=Bk($$e);b=$$je;break a;}return D(43);}try{d=Wk(D(44));a.iX(a.J,d);d.C(D(45));b=d.j();BB(a);}catch($$e){$$je=Bk($$e);b=$$je;break a;}return b;}BB(a);G(b);}
function Oz(a,b,c){c.bf(b);}
function S1(){XB=PW();}
var Ek=E(CA);
function LJ(a){En(a);}
var Dp=E(0);
var C2=E(BM);
function XD(a){var b=new C2();Ji(b,a);return b;}
function XE(a){var b=new C2();HS(b,a);return b;}
function Ji(a,b){Gb(a,b);}
function HS(a,b){Kr(a,b);}
var C4=E(C2);
function XF(a){var b=new C4();GX(b,a);return b;}
function GX(a,b){Ji(a,b);}
var Dz=E(0);
function T5(a,b,c){return O_(B5(B,[a.dB(b),c]));}
function OO(a,b){EQ();return XG.A(a.ib(b));}
function Nm(a,b){return SR(a.dB(b));}
function Sh(a,b){return EM(a.dB(b));}
function Rx(a,b,c){return EM(a.gU(b,c));}
var Da=E(0);
function LQ(a,b){return a.cj(a.c7(b));}
function Se(a,b){return a.bn(a.c7(b));}
var FC=E(0);
var De=E(0);
function TR(a,b){return LQ(a,b);}
function L9(a,b,c){return a.gh(b,a.g0(c));}
var Ez=E(0);
var La=E(B1);
function Pb(){var a=new La();QV(a);return a;}
function QV(a){Iy(a);}
function HB(){B.call(this);this.fd=null;}
function VN(a){var b=new HB();PN(b,a);return b;}
function PN(a,b){J(a);a.fd=b;}
function Os(a,b){K7(a,b);}
function K7(a,b){GR(a.fd,b);}
var FL=E(0);
function HA(){B.call(this);this.eI=null;}
function VL(a){var b=new HA();Ty(b,a);return b;}
function Ty(a,b){J(a);a.eI=b;}
function Od(a,b){I6(a.eI,b);}
function Eo(){B.call(this);this.hp=null;}
var XH=null;var XI=null;function S8(){S8=R(Eo);TT();}
function Qa(a){var b=new Eo();GC(b,a);return b;}
function GC(a,b){S8();J(a);a.hp=b;}
function TT(){XH=Qa(D(46));XI=Qa(D(47));}
var Kz=E();
function DT(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.e9.data;f=b.gd;b.gd=f+1|0;g=NV(e[f]);h=(g%2|0)!=1?0:1;c=c+BP(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function ET(b){var c,d;c=DT(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function NV(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function CM(){var a=this;B.call(a);a.w=null;a.s=null;a.B=null;a.u=null;a.cO=0;}
function XJ(){var a=new CM();FV(a);return a;}
function FV(a){J(a);}
function FZ(){var a=this;CM.call(a);a.hc=null;a.gH=null;a.h6=0;a.g$=0;a.gS=0;a.iI=0;a.i6=0;a.h1=M;}
function B9(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=new FZ();Nv(n,a,b,c,d,e,f,g,h,i,j,k,l,m);return n;}
function XK(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=new FZ();Gz(n,a,b,c,d,e,f,g,h,i,j,k,l,m);return n;}
function Nv(a,b,c,d,e,f,g,h,i,j,k,l,m,n){Gz(a,BJ(b),BJ(c),BJ(d),BJ(e),f,g,h,i,j,k,l,m,n);}
function Gz(a,b,c,d,e,f,g,h,i,j,k,l,m,n){FV(a);a.w=b;a.s=c;a.B=d;a.u=e;a.hc=f;a.gH=g;a.h6=h;a.g$=i;a.gS=j;a.cO=k;a.iI=l;a.i6=m;a.h1=n;}
var Gj=E(0);
var EY=E(0);
var Fn=E(0);
var C1=E();
function Ew(a){J(a);}
function D8(){C1.call(this);this.gR=null;}
function LR(a){Ew(a);a.gR=Fw(1);}
var Fc=E(D8);
var XL=null;function Tc(){Tc=R(Fc);O2();}
function UX(){var a=new Fc();KR(a);return a;}
function KR(a){Tc();LR(a);}
function Tk(a,b,c,d){Sr(b,c,d);}
function O2(){XL=UX();}
var BK=E();
var Hj=E(BK);
function I9(){var a=this;B.call(a);a.eW=null;a.ga=null;a.dS=null;a.fv=null;a.b2=null;}
function UU(){var a=new I9();QN(a);return a;}
function QN(a){J(a);}
function KX(a,b,c){if(b!==null)a.eW=b;if(c!==null)a.ga=c;return a;}
function KO(a){var b;if(a.dS===null){b=H6(a.eW.bp());if(b.W())a.dS=b.N();}return a.dS;}
function Jm(a){var b,c;a:{if(a.b2===null){a.b2=KO(a);if(a.fv!==null){b=a.fv.Z();while(true){if(!b.W())break a;c=b.N();a.b2=c.c5(a.b2);}}}}return a.b2;}
function CZ(){var a=this;B.call(a);a.d=null;a.p=0;}
function XM(){var a=new CZ();Fd(a);return a;}
function V0(a){var b=new CZ();EX(b,a);return b;}
function XN(a){var b=new CZ();Lf(b,a);return b;}
function XO(a){var b=new CZ();Jc(b,a);return b;}
function Fd(a){EX(a,16);}
function EX(a,b){J(a);a.d=BY(b);}
function Lf(a,b){Jc(a,b);}
function Jc(a,b){var c;J(a);a.d=BY(b.g());c=0;while(c<a.d.data.length){a.d.data[c]=b.o(c);c=c+1|0;}a.p=b.g();}
function K2(a,b){return a.fq(a.p,b);}
function E$(a,b){return a.cI(a.p,b);}
function FI(a,b,c){var d,e,f;if(b>=0&&b<=a.p){if(c===null)c=D(3);else if(c.bW())return a;a.bP(a.p+c.g()|0);d=a.p-1|0;while(d>=b){a.d.data[d+c.g()|0]=a.d.data[d];d=d+(-1)|0;}a.p=a.p+c.g()|0;d=0;while(d<c.g()){e=a.d.data;f=b+1|0;e[b]=c.o(d);d=d+1|0;b=f;}return a;}G(Pb());}
function HZ(a,b){return a.eO(b,10);}
function Np(a,b,c){return a.gQ(a.p,b,c);}
function SJ(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)Bo(a,b,b+1|0);else{Bo(a,b,b+2|0);f=a.d.data;g=b+1|0;f[b]=45;b=g;}a.d.data[b]=C3(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=BP(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;Bo(a,b,b+i|0);if(e)l=b;else{f=a.d.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.d.data;g=l+1|0;f[l]=C3(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function KI(a,b){return a.e2(a.p,b);}
function LL(a,b,c){return a.ii(b,c,10);}
function Mq(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(Bx(c,M)){e=0;c=Bt(c);}a:{f=C(d);if(Bx(c,f)){if(e)Bo(a,b,b+1|0);else{Bo(a,b,b+2|0);g=a.d.data;h=b+1|0;g[b]=45;b=h;}a.d.data[b]=C3(K(c),d);}else{i=1;j=C(1);while(true){k=Q(j,f);if(Bq(k,j))break;if(Cc(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;Bo(a,b,b+i|0);if(e)l=b;else{g=a.d.data;l=b+1|0;g[b]=45;}while(true){if(Bq(j,M))break a;g=a.d.data;h=l+1|0;g[l]=C3(K(Bg(c,j)),d);c=BO(c,j);j=Bg(j,f);l=h;}}}return a;}
function JY(a,b){return a.et(a.p,b);}
function Jg(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=BX(c,0.0);if(!d){Bo(a,b,b+3|0);e=a.d.data;d=b+1|0;e[b]=48;e=a.d.data;f=d+1|0;e[d]=46;a.d.data[f]=48;return a;}if(!d){Bo(a,b,b+4|0);e=a.d.data;d=b+1|0;e[b]=45;e=a.d.data;f=d+1|0;e[d]=48;e=a.d.data;d=f+1|0;e[f]=46;a.d.data[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Bo(a,b,b+3|0);e=a.d.data;d=b+1|0;e[b]=78;e=a.d.data;f=d+1|0;e[d]=97;a.d.data[f]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Bo(a,b,b+8|0);d=b;}else{Bo(a,b,b+9|0);e=a.d.data;d=b+1|0;e[b]
=45;}e=a.d.data;f=d+1|0;e[d]=73;e=a.d.data;d=f+1|0;e[f]=110;e=a.d.data;f=d+1|0;e[d]=102;e=a.d.data;d=f+1|0;e[f]=105;e=a.d.data;f=d+1|0;e[d]=110;e=a.d.data;d=f+1|0;e[f]=105;e=a.d.data;f=d+1|0;e[d]=116;a.d.data[f]=121;return a;}PH();g=W7;K6(c,g);h=g.dd;i=g.dr;j=g.eN;k=1;l=1;if(j)l=2;m=18;n=OA(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=BA(m,k+1|0);i=0;}else{h=Bg(h,W5.data[ -i|0]);m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(!(i>(-100)&&i<100))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d
=l+m|0;Bo(a,b,b+d|0);if(!j)o=b;else{e=a.d.data;o=b+1|0;e[b]=45;}p=F(1569325056, 23283064);q=0;while(q<m){if(Bq(p,M))r=0;else{r=K(Bg(h,p));h=BO(h,p);}e=a.d.data;d=o+1|0;e[o]=(48+r|0)&65535;k=k+(-1)|0;if(k)o=d;else{e=a.d.data;o=d+1|0;e[d]=46;}p=Bg(p,C(10));q=q+1|0;}if(i){e=a.d.data;d=o+1|0;e[o]=69;if(i>=0)f=d;else{i= -i|0;e=a.d.data;f=d+1|0;e[d]=45;}if(i>=100){e=a.d.data;d=f+1|0;e[f]=(48+(i/100|0)|0)&65535;i=i%100|0;e=a.d.data;o=d+1|0;e[d]=(48+(i/10|0)|0)&65535;}else if(i<10)o=f;else{e=a.d.data;o=f+1|0;e[f]=(48
+(i/10|0)|0)&65535;}a.d.data[o]=(48+(i%10|0)|0)&65535;}return a;}
function OA(b){var c,d,e,f;c=C(1);d=0;e=16;PH();f=W6.data.length-1|0;while(f>=0){if(X(BO(b,Q(c,W6.data[f])),M)){d=d|e;c=Q(c,W6.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function Ll(a,b){return a.fP(a.p,b);}
function K9(a,b,c){Bo(a,b,b+1|0);a.d.data[b]=c;return a;}
function JL(a,b,c){return a.cI(b,c===null?D(3):c.j());}
function E_(a,b){var c;if(a.d.data.length>=b)return;c=a.d.data.length>=1073741823?2147483647:BA(b,BA(a.d.data.length*2|0,5));a.d=NG(a.d,c);}
function EO(a){return IC(a.d,0,a.p);}
function KA(a){return a.p;}
function G4(a,b){if(b>=0&&b<a.p)return a.d.data[b];G(DL());}
function Ic(a,b,c,d){return a.ep(a.p,b,c,d);}
function GZ(a,b,c,d,e){var f,g;if(d<=e&&e<=c.g()&&d>=0){Bo(a,b,(b+e|0)-d|0);while(d<e){f=a.d.data;g=b+1|0;f[b]=c.o(d);d=d+1|0;b=g;}return a;}G(DL());}
function KT(a,b,c,d){return a.eY(a.p,b,c,d);}
function G6(a,b,c,d,e){var f,g,h,i,j;Bo(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.d.data;i=b+1|0;j=d+1|0;h[b]=g[d];b=i;d=j;}return a;}
function Kl(a,b,c,d,e){var f,g,h,i;if(b>c)G(Vk(D(48)));while(b<c){f=d.data;g=e+1|0;h=a.d.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function Ke(a,b){a.p=b;}
function Bo(a,b,c){var d,e;d=a.p-b|0;a.bP((a.p+c|0)-b|0);e=d-1|0;while(e>=0){a.d.data[c+e|0]=a.d.data[b+e|0];e=e+(-1)|0;}a.p=a.p+(c-b|0)|0;}
var Dn=E(0);
var GQ=E(CZ);
function Mn(a){var b=new GQ();Tq(b,a);return b;}
function Y(){var a=new GQ();S3(a);return a;}
function Wk(a){var b=new GQ();Mx(b,a);return b;}
function Tq(a,b){EX(a,b);}
function S3(a){Fd(a);}
function Mx(a,b){Lf(a,b);}
function P(a,b){K2(a,b);return a;}
function Mw(a,b){E$(a,b);return a;}
function Bj(a,b){HZ(a,b);return a;}
function RG(a,b){KI(a,b);return a;}
function PK(a,b){JY(a,b);return a;}
function C9(a,b){Ll(a,b);return a;}
function PA(a,b,c,d){KT(a,b,c,d);return a;}
function Ss(a,b,c,d){Ic(a,b,c,d);return a;}
function QU(a,b,c){LL(a,b,c);return a;}
function SU(a,b,c){Jg(a,b,c);return a;}
function M_(a,b,c,d,e){GZ(a,b,c,d,e);return a;}
function Po(a,b,c,d,e){G6(a,b,c,d,e);return a;}
function Tv(a,b,c){JL(a,b,c);return a;}
function NE(a,b,c){K9(a,b,c);return a;}
function TG(a,b,c){FI(a,b,c);return a;}
function TN(a,b){Ke(a,b);}
function Qm(a,b,c,d,e){Kl(a,b,c,d,e);}
function TA(a,b,c,d,e){return a.jb(b,c,d,e);}
function Ok(a,b,c,d,e){return a.hM(b,c,d,e);}
function Rq(a,b){return G4(a,b);}
function Of(a){return KA(a);}
function Bb(a){return EO(a);}
function TS(a,b){E_(a,b);}
function MB(a,b,c){return a.hu(b,c);}
function L4(a,b,c){return a.iD(b,c);}
function Qh(a,b,c){return a.hA(b,c);}
function O7(a,b,c){return a.hZ(b,c);}
function T1(a,b,c){return a.hl(b,c);}
var F_=E();
var XP=null;function T7(){T7=R(F_);Sv();}
function KM(b){var c,d;T7();c=XP.c9(b);if(c===null){d=XP;c=UU();d.bw(b,c);}return c;}
function F4(b,c,d){var e,f,g,h,i,j;T7();e=KM(b);f=KX(e,c,d);g=Jm(f);if(g!==null)return g;e=f.ga;D2();if(e!==XQ){h=b.iq();i=Y();P(P(i,D(49)),h);j=Bb(i);if(e===XR)G(Kn(j));e=LB();MD();e.iQ(XS,j);}return null;}
function Sv(){XP=T8();}
var Kj=E(V);
function OE(){var a=new Kj();TH(a);return a;}
function TH(a){BE(a);}
var HN=E(C2);
function Vd(a){var b=new HN();Mz(b,a);return b;}
function Mz(a,b){HS(a,b);}
function DY(){B.call(this);this.dG=null;}
function Jk(a){J(a);}
function Om(a){var b,c,d;b=Y();b.r(123);c=(a.gg()).Z();if(c.W()){d=c.N();b.bf(d.bz()!==a?d.bz():D(50));b.r(61);b.bf(d.bZ()!==a?d.bZ():D(50));}while(c.W()){b.C(D(51));d=c.N();b.bf(d.bz()!==a?d.bz():D(50));b.r(61);b.bf(d.bZ()!==a?d.bZ():D(50));}b.r(125);return b.j();}
var CQ=E(0);
function Es(){var a=this;DY.call(a);a.F=0;a.n=null;a.P=0;a.gm=0.0;a.ch=0;}
function T8(){var a=new Es();Jt(a);return a;}
function XT(a){var b=new Es();EC(b,a);return b;}
function XU(a,b){var c=new Es();K4(c,a,b);return c;}
function RK(a,b){return By(C_,b);}
function Jt(a){EC(a,16);}
function EC(a,b){K4(a,b,0.75);}
function KS(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function K4(a,b,c){var d;Jk(a);if(b>=0&&c>0.0){d=KS(b);a.F=0;a.n=a.du(d);a.gm=c;Fs(a);return;}G(Ie());}
function Fs(a){a.ch=a.n.data.length*a.gm|0;}
function RU(a,b){var c;c=G_(a,b);if(c===null)return null;return c.be;}
function G_(a,b){var c,d,e;if(b===null)c=Du(a);else{d=Fm(b);e=d&(a.n.data.length-1|0);c=Dl(a,b,e,d);}return c;}
function Dl(a,b,c,d){var e,f;e=a.n.data[c];while(e!==null){if(e.cp==d){f=e.bm;if(HD(b,f))break;}e=e.S;}return e;}
function Du(a){var b;b=a.n.data[0];while(b!==null&&b.bm!==null){b=b.S;}return b;}
function M0(a,b,c){return a.d7(b,c);}
function Rv(a,b,c){var d,e,f,g,h;if(b===null){d=Du(a);if(d===null){a.P=a.P+1|0;d=a.b6(null,0,0);e=a.F+1|0;a.F=e;if(e>a.ch)a.cA();}}else{f=Fm(b);g=f&(a.n.data.length-1|0);d=Dl(a,b,g,f);if(d===null){a.P=a.P+1|0;d=a.b6(b,g,f);e=a.F+1|0;a.F=e;if(e>a.ch)a.cA();}}h=d.be;d.be=c;return h;}
function OX(a,b,c,d){var e;e=Vo(b,d);e.S=a.n.data[c];a.n.data[c]=e;return e;}
function Ro(a,b){var c,d,e,f,g,h,i;c=KS(!b?1:b<<1);d=a.du(c);e=0;while(e<a.n.data.length){f=a.n.data[e];a.n.data[e]=null;while(f!==null){g=d.data;h=f.cp&(c-1|0);i=f.S;f.S=g[h];g[h]=f;f=i;}e=e+1|0;}a.n=d;Fs(a);}
function Pn(a){a.hG(a.n.data.length);}
function H8(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.n.data[0];while(e!==null){if(e.bm===null)break a;f=e.S;d=e;e=f;}}else{g=Fm(b);c=g&(a.n.data.length-1|0);e=a.n.data[c];while(e!==null&&!(e.cp==g&&HD(b,e.bm))){f=e.S;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.S=e.S;else a.n.data[c]=e.S;a.P=a.P+1|0;a.F=a.F-1|0;return e;}
function Pi(a){return a.F;}
function Fm(b){return b.b9();}
function HD(b,c){return b!==c&&!b.A(c)?0:1;}
function Ht(){var a=this;Es.call(a);a.cc=0;a.R=null;a.v=null;}
function Wu(){var a=new Ht();NI(a);return a;}
function UM(a){var b=new Ht();O$(b,a);return b;}
function NI(a){Jt(a);a.cc=0;a.R=null;}
function O$(a,b){EC(a,b);a.cc=0;a.R=null;}
function Ox(a,b){return By(F0,b);}
function Mt(a,b){var c,d,e,f,g;if(b===null)c=Du(a);else{d=b.b9();e=(d&2147483647)%a.n.data.length|0;c=Dl(a,b,e,d);}if(c===null)return null;if(a.cc&&a.v!==c){f=c.K;g=c.y;g.K=f;if(f===null)a.R=g;else f.y=g;c.y=null;c.K=a.v;a.v.y=c;a.v=c;}return c.be;}
function Tw(a,b,c,d){var e;e=U7(b,d);e.S=a.n.data[c];a.n.data[c]=e;a.d3(e);return e;}
function R_(a,b,c){var d;d=a.d7(b,c);if(a.iz(a.R))a.gK(a.R.bm);return d;}
function Tx(a,b,c){var d,e,f,g,h,i;if(!a.F){a.R=null;a.v=null;}if(b===null){d=Du(a);if(d!==null)a.d3(d);else{a.P=a.P+1|0;e=a.F+1|0;a.F=e;if(e>a.ch)a.cA();d=a.b6(null,0,0);}}else{f=b.b9();e=f&2147483647;g=e%a.n.data.length|0;d=Dl(a,b,g,f);if(d!==null)a.d3(d);else{a.P=a.P+1|0;h=a.F+1|0;a.F=h;if(h>a.ch){a.cA();g=e%a.n.data.length|0;}d=a.b6(b,g,f);}}i=d.be;d.be=c;return i;}
function Mh(a,b){var c,d;if(a.v===b)return;if(a.R===null){a.R=b;a.v=b;return;}c=b.K;d=b.y;if(c!==null){if(d===null)return;if(a.cc){c.y=d;d.K=c;b.y=null;b.K=a.v;a.v.y=b;a.v=b;}return;}if(d===null){b.K=a.v;b.y=null;a.v.y=b;a.v=b;}else if(a.cc){a.R=d;d.K=null;b.K=a.v;b.y=null;a.v.y=b;a.v=b;}}
function Rw(a){return U8(a);}
function PC(a){if(a.dG===null)a.dG=Uv(a);return a.dG;}
function Pt(a,b){var c,d,e;c=H8(a,b);if(c===null)return null;d=c.K;e=c.y;if(d===null)a.R=e;else d.y=e;if(e===null)a.v=d;else e.K=d;return c.be;}
function MA(a,b){return 0;}
var D7=E(0);
function MS(a,b){return MN(a.iY(b));}
var C6=E(0);
function NP(a,b){return a.bn(a.dj(b));}
var EN=E(0);
var Do=E(0);
var DK=E(0);
function TD(a){return Wu();}
function R0(a,b){if(b!==null&&!BH(b,De))return VM(b);return b;}
function TQ(a,b){if(b!==null&&!BH(b,Do))return Us(b);return b;}
function MX(a,b){if(b===null){Bs();return XV;}if(!BH(b,Ck)&&!BH(b,Da)){if(!BH(b,CI)&&!BH(b,C6)){if(b instanceof B6){Bs();return XA;}if(b instanceof Cb){Bs();return Xy;}if(!J4(b)){Bs();return XW;}Bs();return XA;}Bs();return XX;}Bs();return XY;}
var El=E();
function I3(a,b){J(a);a.hP(b);}
function Qd(a,b){return (a.fR()).eE(b);}
function MZ(a){return (a.fR()).M();}
var H1=E(CZ);
function Pk(){var a=new H1();R8(a);return a;}
function R8(a){Fd(a);}
function PQ(a,b){E$(a,b);return a;}
function PR(a,b,c){FI(a,b,c);return a;}
function OB(a){return EO(a);}
function OS(a,b){E_(a,b);}
function Mr(a,b,c){return a.ih(b,c);}
var D1=E(0);
function Ei(){var a=this;B.call(a);a.h3=null;a.hi=null;a.eM=null;a.g_=null;a.iN=null;a.bx=0;a.fc=0;}
function XZ(a,b){var c=new Ei();Lk(c,a,b);return c;}
function Lk(a,b,c){J(a);a.h3=b.fi;a.hi=b.fT;a.eM=b.fn;a.g_=b.ex;a.iN=b.eC;a.gr(c);}
function Op(a,b){a.fc=b;a.bx=b;}
function Nn(a){a.bx=a.fc;}
function CY(){var a=this;B.call(a);a.f3=0;a.G=0;a.bh=0;a.cq=0;}
function FM(a,b){J(a);a.cq=(-1);a.f3=b;a.bh=b;}
function Db(a){return a.G;}
function Kf(a,b){var c,d,e;if(b>=0&&b<=a.bh){a.G=b;if(b<a.cq)a.cq=0;return a;}c=new Cu;d=a.bh;e=Y();C9(Bj(P(Bj(P(e,D(52)),b),D(53)),d),93);Gu(c,Bb(e));G(c);}
function Io(a){a.G=0;a.bh=a.f3;a.cq=(-1);return a;}
function Cd(a){return a.bh-a.G|0;}
function Cv(a){return a.G>=a.bh?0:1;}
var DJ=E(0);
var D9=E(0);
function CW(){var a=this;B.call(a);a.gk=0;a.ci=null;a.dU=null;a.gs=null;}
function X0(a){var b=new CW();EL(b,a);return b;}
function EL(a,b){J(a);a.gk=b.P;a.ci=b.R;a.gs=b;}
function OJ(a){return a.ci===null?0:1;}
function Lq(a){if(a.gk==a.gs.P)return;G(OE());}
function Gd(a){Lq(a);if(!a.W())G(P5());a.dU=a.ci;a.ci=a.ci.y;}
var CR=E(0);
var J$=E(CW);
function V8(a){var b=new J$();QJ(b,a);return b;}
function QJ(a,b){EL(a,b);}
function Or(a){Gd(a);return a.dU;}
function Sq(a){return a.h2();}
var ER=E(0);
function HV(){var a=this;B.call(a);a.es=null;a.c4=null;}
function Wn(a){var b=new HV();Ma(b,a);return b;}
function Ma(a,b){J(a);a.c4=Pk();a.es=b;}
function QI(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;d=Ir();e=KG();f=c.length;g=0;while(g<f){h=c[g];i=e.i4(h.hO());if(i===null){j=h.hO();i=KG();e.iv(j,i);}k=Vz(h);(i.bE())[$rt_ustr(h.j5())]=C8(k,"apply");g=g+1|0;}j=a.es;l=e.bE();m=Wq(d);n=VD(a);Mu(j,l,C8(m,"handle"),C8(n,"handle"));return d.gn();}
function Lv(a,b){if(b!=10)a.c4.gE($rt_str($rt_globals.String.fromCharCode(b)));else{(If()).ft(a.c4.j());a.c4=Pk();}}
function Mp(b,c){b.bu(UV(c));}
function MR(b,c,d){(b.k7()).ji(c,d);}
function Mu(b,c,d,e){($rt_globals.WebAssembly.instantiate(b,$rt_globals.Object.assign(c,{teavm:{currentTimeMillis:function(){return (new $rt_globals.Date()).getTime();},isnan:$rt_globals.isNaN,teavm_getNaN:function(){return $rt_globals.NaN;},isinf:function(n){return !$rt_globals.isFinite(n);},isfinite:$rt_globals.isFinite,putwchar:e,towlower:function(code){return (($rt_globals.String.fromCharCode(code)).toLowerCase()).charCodeAt(0);},towupper:function(code){return (($rt_globals.String.fromCharCode(code)).toUpperCase()).charCodeAt(0);},
getNativeOffset:function(instant){return (new $rt_globals.Date(instant)).getTimezoneOffset();},logString:$rt_globals.console.log,logInt:$rt_globals.console.log,logOutOfMemory:function(){$rt_globals.console.log("Out of memory");}},teavmMath:{sqrt:$rt_globals.Math.sqrt,pow:$rt_globals.Math.pow,sin:$rt_globals.Math.sin,cos:$rt_globals.Math.cos}}))).then(function(instance){return d(instance);});}
var EB=E(0);
function Et(){var a=this;B.call(a);a.bm=null;a.be=null;}
function X1(a,b){var c=new Et();LI(c,a,b);return c;}
function LI(a,b,c){J(a);a.bm=b;a.be=c;}
function SC(a){return a.bm;}
function Ts(a){return a.be;}
function C_(){var a=this;Et.call(a);a.cp=0;a.S=null;}
function Vo(a,b){var c=new C_();Id(c,a,b);return c;}
function Id(a,b,c){LI(a,b,null);a.cp=c;}
function F0(){var a=this;C_.call(a);a.y=null;a.K=null;}
function U7(a,b){var c=new F0();Rr(c,a,b);return c;}
function Rr(a,b,c){Id(a,b,c);a.y=null;a.K=null;}
var CX=E(C4);
function X2(a){var b=new CX();F3(b,a);return b;}
function F3(a,b){GX(a,b);}
var Km=E(CX);
function X3(a){var b=new Km();Pc(b,a);return b;}
function Pc(a,b){F3(a,b);}
var Fk=E(Ca);
var E8=E(0);
var E6=E(0);
var Ga=E(0);
var HO=E();
function VU(){var a=new HO();N_(a);return a;}
function N_(a){J(a);}
function Hr(){var a=this;B.call(a);a.cR=0;a.fV=0;a.fW=0;a.ez=0;a.b0=null;}
function UB(a){var b=new Hr();Oo(b,a);return b;}
function Oo(a,b){a.b0=b;J(a);a.fV=a.b0.cF;a.fW=a.b0.M();a.ez=(-1);}
function MW(a){return a.cR>=a.fW?0:1;}
function Rp(a){var b,c;IK(a);a.ez=a.cR;b=a.b0;c=a.cR;a.cR=c+1|0;return b.eE(c);}
function IK(a){if(a.fV>=a.b0.cF)return;G(OE());}
var FA=E();
var W1=null;function V2(){V2=R(FA);Mo();}
function Mo(){W1=W((FF()).data.length);W1.data[Bd(XV)]=1;W1.data[Bd(XY)]=2;W1.data[Bd(XX)]=3;W1.data[Bd(XA)]=4;W1.data[Bd(Xz)]=5;W1.data[Bd(Xy)]=6;}
var Ej=E(V);
function VC(){var a=new Ej();GJ(a);return a;}
function GJ(a){BE(a);}
var LC=E(Ej);
function Ui(){var a=new LC();Tb(a);return a;}
function Tb(a){GJ(a);}
var He=E();
function It(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Ie());}return b.data.length;}
function OZ(b,c){if(b===null)G(Df());if(b===I($rt_voidcls()))G(Ie());if(c<0)G(VO());return Sx(b.gb(),c);}
function Sx(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var JA=E(BK);
function Jz(){var a=this;B.call(a);a.c8=0;a.cX=null;}
function U4(a){var b=new Jz();N5(b,a);return b;}
function N5(a,b){a.cX=b;J(a);}
function SV(a){return a.c8>=a.cX.cW.data.length?0:1;}
function NT(a){var b,c;if(a.c8==a.cX.cW.data.length)G(P5());b=a.cX.cW.data;c=a.c8;a.c8=c+1|0;return b[c];}
function HW(){var a=this;B.call(a);a.dd=M;a.dr=0;a.eN=0;}
function Uy(){var a=new HW();OF(a);return a;}
function OF(a){J(a);}
var Ja=E();
var HG=E(CX);
function X4(a){var b=new HG();OW(b,a);return b;}
function OW(a,b){F3(a,b);}
var IX=E();
function Wb(){var a=new IX();Q_(a);return a;}
function Q_(a){J(a);}
function L2(a){return LE(a);}
function LE(a){return QZ();}
var Ef=E(0);
var Dd=E(0);
var CF=E();
function F5(a){J(a);}
var Jd=E();
function Mm(b,c){var d,e,f,g,h,i,j,k;if(!b)return D(4);d=1<<c;e=d-1|0;f=(((32-CL(b)|0)+c|0)-1|0)/c|0;g=BY(f);h=BP(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=C3(b>>>h&e,d);h=h-c|0;i=k;}return Uk(g);}
function Gq(){Bc.call(this);this.i0=0;}
var X5=null;function Rm(){Rm=R(Gq);Oy();}
function Wf(a){var b=new Gq();Ij(b,a);return b;}
function Ij(a,b){Rm();Bm(a);a.i0=b;}
function GP(b){Rm();return Wf(b);}
function Oy(){X5=I($rt_shortcls());}
var EW=E(0);
var LF=E();
function Vy(){var a=new LF();Oi(a);return a;}
function Oi(a){J(a);}
var Gv=E(0);
var H0=E();
function Ls(){var b;b=Wl();D2();return F4(I(C$),b,XQ);}
function T4(){var b;b=Ls();return b!==null&&b.hU()?1:0;}
function NQ(b,c){return (Ls()).i8(b,c);}
function T_(){return Hf(I(C$));}
function LN(){var a=this;B.call(a);a.cV=0;a.cT=null;}
function OT(){var a=new LN();SM(a);return a;}
function SM(a){J(a);}
function RL(a){return null;}
function Sy(a){if(!a.cV){a.cT=a.g6();a.cV=1;}return a.cT;}
function Nj(a,b){a.cV=1;a.cT=b;}
function NH(a){a.cV=0;a.cT=null;}
var IO=E();
function C8(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
var DW=E(0);
var Ce=E(0);
function G7(){var a=this;Ek.call(a);a.eB=null;a.f7=null;}
function Uj(a,b){var c=new G7();PI(c,a,b);return c;}
function PI(a,b,c){LJ(a);a.eB=b;a.f7=c;}
function QY(a,b){var c,d,$$je;a:{try{c=a.eB.c5(b);break a;}catch($$e){$$je=Bk($$e);if($$je instanceof BM){d=$$je;}else{throw $$e;}}a.c$(d);return;}c.bN(Fq(a));}
function OH(a,b){var c,d,$$je;a:{try{c=a.f7.c5(b);break a;}catch($$e){$$je=Bk($$e);if($$je instanceof BM){d=$$je;}else{throw $$e;}}a.c$(d);return;}c.bN(Fq(a));}
function Fq(a){return Vb(a);}
function Ip(){B.call(this);this.cW=null;}
function Uo(a){var b=new Ip();Rg(b,a);return b;}
function Rg(a,b){J(a);a.cW=b;}
function H6(a){return U4(a);}
function Hf(b){return Uo(RY(b.gb()));}
function RY(b){var c;c=MM(b);if(c===null)c=By(B,0);return c;}
function MM(b){if (!Ip.$$services$$) {Ip.$$services$$ = true;Dg.$$serviceList$$ = [[Gr, NU]];C$.$$serviceList$$ = [[Fb, Ua]];}var cls = b;if (!cls.$$serviceList$$) {return $rt_createArray($rt_objcls(), 0);}var result = $rt_createArray($rt_objcls(), cls.$$serviceList$$.length);for (var i = 0; i < result.data.length; ++i) {var serviceDesc = cls.$$serviceList$$[i];result.data[i] = new serviceDesc[0]();serviceDesc[1](result.data[i]);}return result;}
var Ik=E();
function S4(b){var c,d,e,f,g,h,i,j,k;c=PY(b.ej());d=DT(c);e=W(d*2|0);f=0;g=0;h=0;i=0;while(i<d){j=e.data;g=g+ET(c)|0;h=h+ET(c)|0;k=f+1|0;j[f]=g;f=k+1|0;j[k]=h;i=i+1|0;}return e;}
function R6(b){var c,d,e,f,g,h,i;c=PY(b.ej());d=DT(c);e=W(d*2|0);f=0;g=0;while(g<d){h=e.data;f=f+DT(c)|0;i=g*2|0;h[i]=f;h[i+1|0]=ET(c);g=g+1|0;}return e;}
function GY(){var a=this;B.call(a);a.fo=null;a.fp=null;a.fl=0;a.fm=null;}
function V5(a,b,c,d){var e=new GY();Q8(e,a,b,c,d);return e;}
function Q8(a,b,c,d,e){J(a);a.fo=b;a.fp=c;a.fl=d;a.fm=e;}
function SP(a){MP(a.fo,a.fp,a.fl,a.fm);}
var J5=E();
function Fj(b,c){if(b!==null)return b;G(Ph(c));}
function Lz(){CN.call(this);this.ew=null;}
function VP(a){var b=new Lz();S0(b,a);return b;}
function S0(a,b){Fx(a);if(b===null)b=RF(null);a.ew=b;}
function Ou(a,b){Ed(a,a.ew,b);}
function Dv(){var a=this;B.call(a);a.g7=null;a.d1=null;a.hh=0.0;a.er=0.0;a.dy=null;a.ef=null;a.bK=0;}
function KV(a,b,c,d,e){J(a);F8();a.dy=X6;a.ef=X6;KN(a,e);a.g7=b;a.d1=e.c3();a.hh=c;a.er=d;}
function Ko(a,b,c,d){var e;e=Fw(1);e.data[0]=63;KV(a,b,c,d,e);}
function KN(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.er)return;}G(CG(D(54)));}
function Gx(a,b){if(b!==null){a.dy=b;a.iA(b);return a;}G(CG(D(55)));}
function Th(a,b){}
function KP(a,b){if(b!==null){a.ef=b;a.h0(b);return a;}G(CG(D(55)));}
function SH(a,b){}
function HM(a,b,c,d){var e,f,g,h,$$je;a:{if(a.bK!=3){if(d)break a;if(a.bK!=2)break a;}G(Oe());}a.bK=!d?1:2;while(true){try{e=a.hx(b,c);}catch($$e){$$je=Bk($$e);if($$je instanceof V){f=$$je;G(Vd(f));}else{throw $$e;}}if(e.gw()){if(!d)return e;g=Cd(b);if(g<=0)return e;e=DM(g);}else if(e.dn())break;h=!e.f5()?a.dy:a.ef;b:{F8();if(h!==X7){if(h===X8)break b;else return e;}if(Cd(c)<a.d1.data.length)return X9;Kc(c,a.d1);}b.e5(Db(b)+e.g()|0);}return e;}
function GV(a,b){var c;if(a.bK!=2&&a.bK!=4)G(Oe());c=a.gM(b);BR();if(c===X$)a.bK=3;return c;}
function Me(a,b){BR();return X$;}
var Ft=E(0);
function JN(){B.call(this);this.fH=null;}
function Vz(a){var b=new JN();Rh(b,a);return b;}
function Rh(a,b){J(a);a.fH=b;}
function TF(a,b,c){MR(a.fH,b,c);}
function N2(a,b,c){a.iG(b,c);}
function JM(){B.call(this);this.eS=null;}
function Wq(a){var b=new JM();So(b,a);return b;}
function So(a,b){J(a);a.eS=b;}
function M6(a,b){Mp(a.eS,b);}
function Sm(a,b){a.d4(b);}
var EP=E(0);
function JP(){B.call(this);this.gu=null;}
function VD(a){var b=new JP();L3(b,a);return b;}
function L3(a,b){J(a);a.gu=b;}
function P7(a,b){Lv(a.gu,b);}
function T$(a,b){a.is(b);}
function Dh(){var a=this;CM.call(a);a.dX=0;a.ff=0;a.e$=0;a.cN=0;}
var X_=null;var Ya=null;var Yb=null;function Cz(){Cz=R(Dh);QS();}
function VW(){var a=new Dh();Hu(a);return a;}
function Hu(a){Cz();FV(a);}
function J6(a){HH(a,0.9);}
function JQ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;a.dX=b|0;a.ff=c|0;if(a.w.bC()<23){d=a.w;Cz();a.w=d.H(23,X_);}if(a.s.bC()<23){d=a.s;Cz();a.s=d.H(23,X_);}if(a.B.bC()<23){d=a.B;Cz();a.B=d.H(23,X_);}if(a.u.bC()<23){d=a.u;Cz();a.u=d.H(23,X_);}d=a.s.T(a.w);e=BA(a.s.bC(),15)*2|0;Cz();f=d.H(e,X_);g=f.L(Si(b),X_);h=0;while(g.dE(Ya)<0){h=h+1|0;g=g.cU(Yb);}if(h<15)h=15;i=(h+5|0)+((h-10|0)/10|0)|0;a.w=a.w.H(i,X_);a.s=a.s.H(i,X_);a.B=a.B.H(i,X_);a.u=a.u.H(i,X_);j=a.s.T(a.w);k=a.u.T(a.B);l=j.L(k,X_);m=Si(b/c);if(l.dE(m)
<0){n=(j.cU(m)).L(l,X_);o=(a.s.bj(a.w)).L(Ya,X_);a.s=(o.bj(n.L(Ya,X_))).H(i,X_);a.w=(o.T(n.L(Ya,X_))).H(i,X_);}else if(l.dE(m)>0){p=(k.cU(l)).L(m,X_);o=(a.u.bj(a.B)).L(Ya,X_);a.u=(o.bj(p.L(Ya,X_))).H(i,X_);a.B=(o.T(p.L(Ya,X_))).H(i,X_);}}
function HH(a,b){var c,d,e,f,g;c=a.w.bj(a.s);Cz();d=c.L(Ya,X_);e=(a.B.bj(a.u)).L(Ya,X_);f=BJ((a.s.T(a.w)).X()/2.0*b);g=BJ((a.u.T(a.B)).X()/2.0*b);a.w=d.T(f);a.s=d.bj(f);a.B=e.T(g);a.u=e.bj(g);}
function Jo(b){var c;Cz();c=VW();c.w=BJ(b.w.X());c.s=BJ(b.s.X());c.B=BJ(b.B.X());c.u=BJ(b.u.X());c.cO=b.cO;return c;}
function QS(){Eu();X_=Xf;Ya=IM(D(56));Yb=IM(D(57));}
var Kx=E(V);
function Jq(){var a=new Kx();QK(a);return a;}
function QK(a){BE(a);}
function D0(){var a=this;CY.call(a);a.f9=0;a.eX=null;a.ja=null;}
function Hv(a,b,c,d,e,f){FM(a,c);S8();a.ja=XH;a.f9=b;a.eX=d;a.G=e;a.bh=f;}
function SZ(b,c,d){return Vv(0,b.data.length,b,c,c+d|0,0,0);}
function P_(b){return SZ(b,0,b.data.length);}
function R5(a,b,c,d){var e,f,g,h,i,j,k,l;if(!d)return a;if(a.gC())G(Ui());if(Cd(a)<d)G(U0());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new B1;i=Y();Bj(P(Bj(P(i,D(58)),g),D(59)),f);Cx(h,Bb(i));G(h);}if(d<0){h=new B1;i=Y();P(Bj(P(i,D(60)),d),D(61));Cx(h,Bb(i));G(h);}j=a.G+a.f9|0;k=0;while(k<d){l=a.eX.data;g=j+1|0;f=c+1|0;l[j]=e[c];k=k+1|0;j=g;c=f;}a.G=a.G+d|0;return a;}}e=b.data;h=new B1;f=e.length;i=Y();C9(Bj(P(Bj(P(i,D(62)),c),D(53)),f),41);Cx(h,Bb(i));G(h);}
function Kc(a,b){return a.fz(b,0,b.data.length);}
function Fa(a){Io(a);return a;}
function KD(){var a=this;D0.call(a);a.gD=0;a.eD=0;}
function Vv(a,b,c,d,e,f,g){var h=new KD();MQ(h,a,b,c,d,e,f,g);return h;}
function MQ(a,b,c,d,e,f,g,h){Hv(a,b,c,d,e,f);a.gD=g;a.eD=h;}
function RM(a){return a.eD;}
var CI=E(0);
function DR(){CF.call(this);this.cF=0;}
function K5(a){F5(a);}
function QC(a){return UB(a);}
var Fe=E(0);
function DN(){var a=this;DR.call(a);a.E=null;a.bg=0;}
function Yc(){var a=new DN();J7(a);return a;}
function VA(a){var b=new DN();EF(b,a);return b;}
function VV(a){var b=new DN();Pq(b,a);return b;}
function J7(a){EF(a,10);}
function EF(a,b){K5(a);a.E=By(B,b);}
function Pq(a,b){var c,d;EF(a,b.M());c=b.Z();d=0;while(d<a.E.data.length){a.E.data[d]=c.N();d=d+1|0;}a.bg=a.E.data.length;}
function Nh(a,b){var c;if(a.E.data.length<b){c=a.E.data.length>=1073741823?2147483647:BA(b,BA(a.E.data.length*2|0,5));a.E=SO(a.E,c);}}
function Py(a,b){GT(a,b);return a.E.data[b];}
function N3(a){return a.bg;}
function R$(a,b){var c,d;a.bP(a.bg+1|0);c=a.E.data;d=a.bg;a.bg=d+1|0;c[d]=b;a.cF=a.cF+1|0;return 1;}
function GT(a,b){if(b>=0&&b<a.bg)return;G(DL());}
function Oh(a){var b,c,d;if(!a.bg)return D(63);b=a.bg-1|0;c=Mn(a.bg*16|0);c.r(91);d=0;while(d<b){(c.bf(a.E.data[d]===a?D(64):a.E.data[d])).C(D(51));d=d+1|0;}c.bf(a.E.data[b]===a?D(64):a.E.data[b]);return (c.r(93)).j();}
var FJ=E(DN);
function V_(){var a=new FJ();Pu(a);return a;}
function Pu(a){J7(a);}
function Ot(a,b){var c,d;c=a.Z();while(c.W()){d=c.N();d.bR(b);}}
function Mf(a,b){var c,d;c=a.Z();while(c.W()){d=c.N();d.b_(b);}}
var Er=E(0);
function BU(){var a=this;B.call(a);a.ix=null;a.f_=0;}
var Yd=null;var Ye=null;var XS=null;var Yf=null;var Yg=null;var Yh=null;var Yi=null;var Yj=null;var Yk=null;function MD(){MD=R(BU);Qw();}
function Ci(a,b){var c=new BU();Lb(c,a,b);return c;}
function Lb(a,b,c){MD();J(a);a.ix=b;a.f_=c;}
function Dt(a){return a.f_;}
function Qw(){Yd=Ci(D(65),2147483647);Ye=Ci(D(66),1000);XS=Ci(D(67),900);Yf=Ci(D(68),800);Yg=Ci(D(69),700);Yh=Ci(D(70),500);Yi=Ci(D(71),400);Yj=Ci(D(72),300);Yk=Ci(D(73),(-2147483648));}
function Ep(){B.call(this);this.eU=0;}
function I4(a){J(a);a.gF();}
function Hx(a,b){J(a);a.dz(b);}
function QW(a){a.dz(a.dL());}
function Qu(a){a.dz(Gh(a.cm()));}
function PZ(a){return a.dT(VV((a.cm()).i_()));}
function Rn(a,b){return (a.cm()).c9(b);}
function Q9(a,b,c){a.g9();(a.cm()).bw(b,c);return a;}
function QM(a){if(a.eU){a.hD();a.eU=0;}}
function Te(a){return a.eG();}
function N8(a,b,c){return a.gL(b,c);}
var Im=E();
function Mj(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Nk(b,c){return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&Hy(b.constructor,c)?1:0;}
function Hy(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Hy(d[e],c))return 1;e=e+1|0;}return 0;}
function UF(b){b.eg();}
function Mb(b){Qj(b,0);}
function Qj(b,c){return setTimeout(function(){UF(b);},c);}
function L8(){return Tt();}
function Qr(b){return b.$meta.primitive?1:0;}
function S_(b){return b.$meta.item;}
function Qg(b){return $rt_str(b.$meta.name);}
function Tt(){return [];}
function DG(){var a=this;B.call(a);a.gB=null;a.io=null;}
function IE(a,b,c){var d,e,f,g;d=c.data;J(a);I0(b);e=d.length;f=0;while(f<e){g=d[f];I0(g);f=f+1|0;}a.gB=b;a.io=c.c3();}
function I0(b){var c,d;if(b.bW())G(Ka(b));if(!I2(b.o(0)))G(Ka(b));c=1;while(c<b.g()){a:{d=b.o(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(I2(d))break a;else G(Ka(b));}}c=c+1|0;}}
function I2(b){var c;a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}c=1;break a;}c=0;}return c;}
function Dk(){B.call(this);this.il=null;}
var X8=null;var X7=null;var X6=null;function F8(){F8=R(Dk);Md();}
function KL(a){var b=new Dk();IQ(b,a);return b;}
function IQ(a,b){F8();J(a);a.il=b;}
function Md(){X8=KL(D(74));X7=KL(D(75));X6=KL(D(76));}
function B6(){B.call(this);this.cg=0;}
var XG=null;var Yl=null;var Ym=null;function EQ(){EQ=R(B6);Ob();}
function OC(a){var b=new B6();Ig(b,a);return b;}
function Ig(a,b){EQ();J(a);a.cg=b;}
function RJ(a){return a.cg;}
function Di(b){EQ();return !b?Yl:XG;}
function JH(b){EQ();return !b?D(77):D(78);}
function Nx(a){return JH(a.cg);}
function M8(a,b){if(a===b)return 1;return b instanceof B6&&b.cg==a.cg?1:0;}
function Ob(){XG=OC(1);Yl=OC(0);Ym=I($rt_booleancls());}
var Cu=E(V);
function Ie(){var a=new Cu();Fh(a);return a;}
function CG(a){var b=new Cu();Gu(b,a);return b;}
function Fh(a){BE(a);}
function Gu(a,b){C0(a,b);}
function Jb(){Cu.call(this);this.hj=null;}
function Ka(a){var b=new Jb();Q2(b,a);return b;}
function Q2(a,b){Fh(a);a.hj=b;}
var LO=E(V);
function P5(){var a=new LO();ML(a);return a;}
function ML(a){BE(a);}
var JR=E();
function O6(b){return $rt_str(b);}
function DH(){C1.call(this);this.en=null;}
function Yn(a){var b=new DH();G2(b,a);return b;}
function G2(a,b){Ew(a);a.en=b;}
function FW(){var a=this;DH.call(a);a.hy=0;a.d8=0;a.bo=null;a.dF=null;a.fb=null;}
function Yo(a,b){var c=new FW();Ku(c,a,b);return c;}
function Ku(a,b,c){G2(a,b);a.bo=Y();a.dF=BY(32);a.hy=c;QX();a.fb=Yp;}
function Nr(a,b,c,d){var $$je;if(!Jv(a))return;a:{try{a.en.cv(b,c,d);break a;}catch($$e){$$je=Bk($$e);if($$je instanceof Fk){}else{throw $$e;}}a.d8=1;}}
function Jv(a){if(a.en===null)a.d8=1;return a.d8?0:1;}
function HX(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=Tu(b,c,d-c|0);g=Fw(BA(16,B8(e.length,1024)));h=P_(g);i=a.fb.ia();F8();j=X7;i=Gx(i,j);j=X7;k=KP(i,j);while(true){l=(HM(k,f,h,1)).dn();a.cv(g,0,Db(h));Fa(h);if(!l)break;}while(true){l=(GV(k,h)).dn();a.cv(g,0,Db(h));Fa(h);if(!l)break;}}
function O3(a,b){(a.bo.C(b)).r(10);Hn(a);}
function Hn(a){var b;b=a.bo.g()<=a.dF.data.length?a.dF:BY(a.bo.g());a.bo.eT(0,a.bo.g(),b,0);HX(a,b,0,a.bo.g());a.bo.eF(0);}
var F9=E(0);
var Fv=E(0);
var CU=E(CF);
function Fr(a){F5(a);}
function DZ(){CU.call(this);this.gj=null;}
function Yq(a){var b=new DZ();IP(b,a);return b;}
function IP(a,b){Fr(a);a.gj=b;}
function Pj(a){return a.gj;}
var Ju=E(DZ);
function U8(a){var b=new Ju();Pp(b,a);return b;}
function Pp(a,b){IP(a,b);}
function Rt(a){return V8(a.gN());}
var F6=E(0);
var G5=E(CA);
function UO(){var a=new G5();RZ(a);return a;}
function RZ(a){En(a);}
function Ti(a){return a;}
function Rz(a,b){return GN(a,b);}
function Px(a,b){Iz(a,b);}
function To(a,b,c){return I8(a,b,c);}
var ES=E(0);
var ED=E(0);
function Ki(){var a=this;B.call(a);a.dJ=null;a.bJ=null;}
function U3(a){var b=new Ki();QG(b,a);return b;}
function QG(a,b){var c;J(a);a.bJ=b;c=a;b.classObject=c;}
function Hp(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=U3(b);return c;}
function LW(a){var b,c;b=DA(a);c=Y();Bj(P(c,D(79)),b);return Bb(c);}
function N6(a){return a.bJ;}
function P3(a,b){return Nk(b,a.bJ);}
function TI(a){if(a.dJ===null)a.dJ=Qg(a.bJ);return a.dJ;}
function RD(a){return Qr(a.bJ);}
function Mc(a){return Hp(S_(a.bJ));}
var Lo=E(BK);
function Cy(){Bc.call(this);this.dh=0.0;}
var Yr=0.0;var Ys=null;function Jn(){Jn=R(Cy);Ov();}
function V7(a){var b=new Cy();E5(b,a);return b;}
function UP(a){var b=new Cy();J3(b,a);return b;}
function E5(a,b){Jn();Bm(a);a.dh=b;}
function J3(a,b){Jn();E5(a,b);}
function Lt(b){Jn();return V7(b);}
function Na(a,b){if(a===b)return 1;return b instanceof Cy&&b.dh===a.dh?1:0;}
function Ov(){Yr=$rt_globals.NaN;Ys=I($rt_floatcls());}
var Ey=E(0);
var HI=E();
function NG(b,c){var d,e,f,g;d=b.data;e=BY(c);f=B8(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function SO(b,c){var d,e,f,g;d=b.data;e=OZ((DO(b)).el(),c);f=B8(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Nd(b,c){return N7(b,0,b.data.length,c);}
function N7(b,c,d,e){var f,g,h,i,j;f=BX(c,d);if(f>0)G(Ie());if(!f)return (-1);g=d-1|0;while(true){h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>g)return ( -i|0)-2|0;}else{g=i-1|0;if(g<c)return ( -i|0)-1|0;}}return i;}
function LD(){Ep.call(this);this.ec=null;}
function UY(){var a=new LD();OG(a);return a;}
function VM(a){var b=new LD();PV(b,a);return b;}
function OG(a){I4(a);}
function PV(a,b){Hx(a,b);}
function Sb(a){return a.ec;}
function Rj(a,b){a.ec=b;}
function QT(a){return a.ec;}
function Ra(a,b){return b;}
function SA(a){return a.i9();}
var Ff=E();
var Yt=null;function If(){var b;if(Yt===null){b=new FW;Tc();Ku(b,XL,0);Yt=b;}return Yt;}
function C7(b,c,d,e,f){var g,h,i,j,k,l,m,n;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=It(b)){g=e+f|0;if(g<=It(d)){a:{b:{if(b!==d){h=(DO(b)).el();i=(DO(d)).el();if(h!==null&&i!==null){if(h===i)break b;if(!h.cY()&&!i.cY()){j=b;k=0;g=c;while(k<f){l=j.data;m=g+1|0;n=l[g];if(!i.g5(n)){Gi(b,c,d,e,k);G(Jq());}k=k+1|0;g=m;}Gi(b,c,d,e,f);return;}if(!h.cY())break a;if(i.cY())break b;else break a;}G(Jq());}}Gi(b,c,d,e,f);return;}G(Jq());}}G(DL());}G(Ph(D(80)));}
function Gi(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Jw(){return Long_fromNumber(new Date().getTime());}
var DU=E();
var Xv=null;var Xw=null;function Vi(){Vi=R(DU);RA();}
function RA(){Xv=B_([(-1),(-1),31,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5]);Xw=B_([(-2147483648),1162261467,1073741824,1220703125,362797056,1977326743,1073741824,387420489,1000000000,214358881,429981696,815730721,1475789056,170859375,268435456,410338673,612220032,893871739,1280000000,1801088541,113379904,148035889,191102976,244140625,308915776,387420489,481890304,594823321,729000000,887503681,1073741824,1291467969,1544804416,1838265625,60466176]);}
var Kt=E(CW);
function Wp(a){var b=new Kt();Sl(b,a);return b;}
function Sl(a,b){EL(a,b);}
function SY(a){Gd(a);return a.dU.bm;}
function Bh(){var a=this;Bc.call(a);a.bT=null;a.i=0;a.h=M;a.c=0;a.bO=0;}
var Yu=null;var Yv=null;var Yw=null;var Yx=null;var Yy=null;var Yz=null;var YA=null;var YB=null;var YC=null;var YD=null;var YE=null;var YF=null;function Bf(){Bf=R(Bh);NZ();}
function Rd(a,b){var c=new Bh();In(c,a,b);return c;}
function CO(a,b){var c=new Bh();EI(c,a,b);return c;}
function YG(a,b,c){var d=new Bh();FR(d,a,b,c);return d;}
function IM(a){var b=new Bh();Lu(b,a);return b;}
function Si(a){var b=new Bh();H5(b,a);return b;}
function CT(a,b){var c=new Bh();CJ(c,a,b);return c;}
function Ux(a){var b=new Bh();HE(b,a);return b;}
function In(a,b,c){Bf();Bm(a);a.h=b;a.c=c;a.i=Cr(b);}
function EI(a,b,c){Bf();Bm(a);a.h=C(b);a.c=c;a.i=HQ(b);}
function FR(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;Bf();Bm(a);e=c+(d-1|0)|0;if(b===null)G(Df());f=b.data;if(e<f.length&&c>=0&&d>0&&e>=0){g=Mn(d);h=0;if(c>e)i=c;else if(f[c]!=43)i=c;else{c=c+1|0;i=c;}j=0;k=0;while(true){l=BX(i,e);if(l>0)break;if(f[i]==46)break;if(f[i]==101)break;if(f[i]==69)break;if(!k){if(f[i]!=48)k=1;else j=j+1|0;}i=i+1|0;}m=i-c|0;g.eK(b,c,m);m=h+m|0;if(l<=0&&f[i]==46){n=i+1|0;i=n;while(i<=e&&f[i]!=101&&f[i]!=69){if(!k){if(f[i]!=48)k=1;else j=j+1|0;}i=i+1|0;}a.c=i-n|0;m=m+a.c|0;g.eK(b,n,a.c);}
else a.c=0;if(i<=e&&!(f[i]!=101&&f[i]!=69)){n=i+1|0;if(n>e)i=n;else if(f[n]!=43)i=n;else{i=n+1|0;if(i>e)i=n;else if(f[i]==45)i=n;}o=JW(b,i,(e+1|0)-i|0);p=S(C(a.c),C(D6(o)));a.c=K(p);if(BG(p,C(a.c)))G(CH(D(81)));}if(m>=19)D_(a,Vs(g.j()));else{a.h=KF(g.j());a.i=Cr(a.h);}a.bO=g.g()-j|0;if(g.o(0)==45)a.bO=a.bO-1|0;return;}G(TZ());}
function Lu(a,b){Bf();FR(a,b.ej(),0,b.g());}
function H5(a,b){var c,d,e,f;Bf();Bm(a);if(!(!$rt_globals.isFinite(b)?1:0)&&!($rt_globals.isNaN(b)?1:0)){c=$rt_doubleToLongBits(b);a.c=1075-K(H(Z(c,52),C(2047)))|0;d=a.c!=1075?Cs(H(c,F(4294967295, 1048575)),F(0, 1048576)):U(H(c,F(4294967295, 1048575)),1);if(X(d,M)){a.c=0;a.bO=1;}if(a.c>0){e=B8(a.c,IN(d));d=T(d,e);a.c=a.c-e|0;}if(BG(Z(c,63),M))d=Bt(d);f=Cr(d);if(a.c>=0){if(a.c<=0){a.h=d;a.i=f;}else if(a.c<YA.data.length&&(f+YB.data[a.c]|0)<64){a.h=Q(d,YA.data[a.c]);a.i=Cr(a.h);}else D_(a,GK(BF(d),a.c));}else
{a.i=!f?0:f-a.c|0;if(a.i<64)a.h=U(d, -a.c|0);else a.bT=(BF(d)).O( -a.c|0);a.c=0;}return;}G(CH(D(82)));}
function CJ(a,b,c){Bf();Bm(a);if(b!==null){a.c=c;D_(a,b);return;}G(Df());}
function HE(a,b){Bf();EI(a,b,0);}
function BN(b,c){Bf();if(!c)return JJ(b);if(X(b,M)&&c>=0&&c<YE.data.length)return YE.data[c];return Rd(b,c);}
function JJ(b){Bf();if(B3(b,M)&&Bx(b,C(11)))return YD.data[K(b)];return Rd(b,0);}
function BJ(b){Bf();if(!(!$rt_globals.isFinite(b)?1:0)&&!($rt_globals.isNaN(b)?1:0))return IM(EJ(b));G(CH(D(83)));}
function MG(a,b){var c;a:{c=a.c-b.c|0;if(BW(a)){if(c<=0)return b;if(!BW(b))break a;return a;}if(BW(b)&&c>=0)return a;}if(c){if(c>0)return FQ(a,b,c);return FQ(b,a, -c|0);}if((BA(a.i,b.i)+1|0)<64)return BN(L(a.h,b.h),a.c);return CT((Ba(a)).bq(Ba(b)),a.c);}
function FQ(b,c,d){var e,f,g,h,i;Bf();if(d<Yz.data.length){e=b.i;f=c.i+YC.data[d]|0;if((BA(e,f)+1|0)<64)return BN(L(b.h,Q(c.h,Yz.data[d])),b.c);}g=new Bh;h=Ba(b);i=Cj(Ba(c),C(d));CJ(g,h.bq(i),b.c);return g;}
function PO(a,b){var c,d,e,f,g,h,i;a:{c=a.c-b.c|0;if(BW(a)){if(c<=0)return b.id();if(!BW(b))break a;return a;}if(BW(b)&&c>=0)return a;}if(!c){if((BA(a.i,b.i)+1|0)<64)return BN(S(a.h,b.h),a.c);return CT((Ba(a)).bB(Ba(b)),a.c);}if(c>0){if(c<Yz.data.length){d=a.i;e=b.i+YC.data[c]|0;if((BA(d,e)+1|0)<64)return BN(S(a.h,Q(b.h,Yz.data[c])),a.c);}f=new Bh;g=Ba(a);h=Cj(Ba(b),C(c));CJ(f,g.bB(h),a.c);return f;}d= -c|0;if(d<Yz.data.length){e=a.i+YC.data[d]|0;i=b.i;if((BA(e,i)+1|0)<64)return BN(S(Q(a.h,Yz.data[d]),b.h),
b.c);}f=new Bh;g=Cj(Ba(a),C(d));CJ(f,g.bB(Ba(b)),b.c);return f;}
function ST(a,b){var c,d,e,f;c=L(C(a.c),C(b.c));if(!BW(a)&&!BW(b)){if((a.i+b.i|0)<64)return BN(Q(a.h,b.h),FE(c));d=new Bh;e=Ba(a);f=Ba(b);e=e.z(f);CJ(d,e,FE(c));return d;}return JU(c);}
function NS(a,b,c,d){return a.fM(b,c,Lr(d));}
function Ml(a,b,c,d){var e,f,g,h,i,j,k;if(d===null)G(Df());if(BW(b))G(Cq(D(84)));a:{e=S(S(C(a.c),C(b.c)),C(c));if(a.i<64&&b.i<64){f=Ds(e,M);if(!f)return Dq(a.h,b.h,c,d);if(f>0){if(B3(e,C(Yz.data.length)))break a;f=b.i;g=YC.data;h=K(e);if((f+g[h]|0)>=64)break a;return Dq(a.h,Q(b.h,Yz.data[h]),c,d);}i=Bt(e);if(Bx(i,C(Yz.data.length))){f=a.i;g=YC.data;h=K(i);if((f+g[h]|0)<64)return Dq(Q(a.h,Yz.data[h]),b.h,c,d);}}}j=Ba(a);k=Ba(b);f=Ds(e,M);if(f>0)k=Cj(k,C(K(e)));else if(f<0)j=Cj(j,C(K(Bt(e))));return F$(j,k,c,
d);}
function F$(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Bf();f=b.fE(c);g=f.data;h=g[0];i=g[1];if(!i.bl())return CT(h,d);j=BP(b.bl(),c.bl());if(c.cz()>=63){k=((i.dw()).eJ()).dm(c.dw());l=Dy(!h.cL(0)?0:1,BP(j,5+k|0),e);}else{m=i.bG();n=c.bG();k=Ge(U(DI(m),1),DI(n));l=Dy(!h.cL(0)?0:1,BP(j,5+k|0),e);}if(!l)return CT(h,d);if(h.cz()<63)return BN(L(h.bG(),C(l)),d);o=h.bq(BF(C(l)));return CT(o,d);}
function Dq(b,c,d,e){var f,g,h,i;Bf();f=Bg(b,c);g=BO(b,c);h=BP(Eq(b),Eq(c));if(BG(g,M)){i=Ge(U(DI(g),1),DI(c));f=L(f,C(Dy(K(f)&1,BP(h,5+i|0),e)));}return BN(f,d);}
function Sc(a,b,c){return a.fM(b,a.c,c);}
function T6(a){a:{if(a.i>=63){if(a.i!=63)break a;if(X(a.h,F(0, 2147483648)))break a;}return BN(Bt(a.h),a.c);}return CT((Ba(a)).fA(),a.c);}
function P9(a){if(a.i>=64)return (Ba(a)).bl();return Eq(a.h);}
function BW(a){return !a.i&&BG(a.h,C(-1))?1:0;}
function Sz(a){return a.c;}
function SK(a,b,c){var d,e,f,g,h;if(c===null)G(Df());d=S(C(b),C(a.c));e=Ds(d,M);if(!e)return a;if(e<=0){if(a.i<64){f=Bt(d);Bf();if(Bx(f,C(Yz.data.length)))return Dq(a.h,Yz.data[K(f)],b,c);}return F$(Ba(a),Cw(Bt(d)),b,c);}Bf();if(Bx(d,C(Yz.data.length))){e=a.i;g=YC.data;h=K(d);if((e+g[h]|0)<64)return BN(Q(a.h,Yz.data[h]),b);}return CT(Cj(Ba(a),C(K(d))),b);}
function L7(a,b){var c,d,e,f,g,h,i,j;c=a.bl();d=b.bl();e=BX(c,d);if(e){if(e>=0)return 1;return (-1);}if(a.c==b.c&&a.i<64&&b.i<64)return Bx(a.h,b.h)?(-1):Bq(a.h,b.h)?0:1;f=S(C(a.c),C(b.c));g=FT(a)-FT(b)|0;h=C(g);if(Cc(h,L(f,C(1))))return c;if(Bx(h,S(f,C(1))))return  -c|0;i=Ba(a);j=Ba(b);e=Ds(f,M);if(e<0)i=i.z(Cw(Bt(f)));else if(e>0)j=j.z(Cw(f));return i.dm(j);}
function Pf(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=a.bl();c=1076;d=S(C(a.i),WS(a.c/0.3010299956639812));if(B3(d,C(-1074))&&b){if(Cc(d,C(1025)))return b*Infinity;e=(Ba(a)).dw();if(a.c<=0)f=e.z(Cw(C( -a.c|0)));else{g=Cw(C(a.c));h=100-K(d)|0;if(h>0){e=e.O(h);c=c-h|0;}i=e.fE(g);j=i.data;k=(j[1].eJ()).dm(g);f=(j[0].O(2)).bq(BF(C((BP(k,k+3|0)/2|0)+1|0)));c=c+(-2)|0;}l=f.iP();m=f.cz()-54|0;if(m<=0){n=U(f.bG(), -m|0);o=BG(H(n,C(3)),C(3))?n:L(n,C(2));}else{n=(f.cS(m)).bG();o=!(X(H(n,C(1)),C(1))&&l<m)&&BG(H(n,C(3)),
C(3))?n:L(n,C(2));}if(X(H(o,F(0, 4194304)),M)){p=Z(o,1);q=c+m|0;}else{p=Z(o,2);q=c+(m+1|0)|0;}if(q>2046)return b*Infinity;if(q<=0){if(q<(-53))return b*0.0;a:{p=Z(n,1);r=H(p,T(C(-1),63+q|0));p=Z(p, -q|0);if(BG(H(p,C(3)),C(3))){if(BG(H(p,C(1)),C(1)))break a;if(X(r,M))break a;if(l>=m)break a;}p=L(p,C(1));}q=0;p=Z(p,1);}p=Cs(Cs(H(C(b),F(0, 2147483648)),U(C(q),52)),H(p,F(4294967295, 1048575)));return $rt_longBitsToDouble(p);}return b*0.0;}
function Ge(b,c){var d;Bf();d=Ds(b,c);return d>0?1:d>=0?0:(-1);}
function Dy(b,c,d){var e;Bf();a:{e=0;We();switch(W9.data[Bd(d)]){case 1:if(!c)break a;G(Cq(D(85)));case 2:e=CC(c);break a;case 3:break;case 4:e=BA(CC(c),0);break a;case 5:e=B8(CC(c),0);break a;case 6:if(EE(c)<5)break a;e=CC(c);break a;case 7:if(EE(c)<=5)break a;e=CC(c);break a;case 8:if((EE(c)+b|0)<=5)break a;e=CC(c);break a;default:break a;}}return e;}
function FT(a){return a.bO>0?a.bO:((a.i-1|0)*0.3010299956639812|0)+1|0;}
function FE(b){Bf();if(Bx(b,C(-2147483648)))G(Cq(D(86)));if(Bq(b,C(2147483647)))return K(b);G(Cq(D(87)));}
function JU(b){var c;Bf();c=K(b);if(X(b,C(c)))return BN(M,c);if(Bx(b,M))return CO(0,(-2147483648));return CO(0,2147483647);}
function Ba(a){if(a.bT===null)a.bT=BF(a.h);return a.bT;}
function D_(a,b){a.bT=b;a.i=b.cz();if(a.i<64)a.h=b.bG();}
function Cr(b){Bf();if(Bx(b,M))b=Kh(b,C(-1));return 64-Hq(b)|0;}
function HQ(b){Bf();if(b<0)b=b^(-1);return 32-CL(b)|0;}
function NZ(){var b,c;Yu=CO(0,0);Yv=CO(1,0);Yw=CO(10,0);Yz=Fo([C(1),C(10),C(100),C(1000),C(10000),C(100000),C(1000000),C(10000000),C(100000000),C(1000000000),F(1410065408, 2),F(1215752192, 23),F(3567587328, 232),F(1316134912, 2328),F(276447232, 23283),F(2764472320, 232830),F(1874919424, 2328306),F(1569325056, 23283064),F(2808348672, 232830643)]);YA=Fo([C(1),C(5),C(25),C(125),C(625),C(3125),C(15625),C(78125),C(390625),C(1953125),C(9765625),C(48828125),C(244140625),C(1220703125),F(1808548329, 1),F(452807053, 7),
F(2264035265, 35),F(2730241733, 177),F(766306777, 888),F(3831533885, 4440),F(1977800241, 22204),F(1299066613, 111022),F(2200365769, 555111),F(2411894253, 2775557),F(3469536673, 13877787),F(167814181, 69388939),F(839070905, 346944695),F(4195354525, 1734723475)]);YB=W(YA.data.length);YC=W(Yz.data.length);YD=By(Bh,11);YE=By(Bh,11);YF=BY(100);b=0;while(b<YE.data.length){YD.data[b]=CO(b,0);YE.data[b]=CO(0,b);YF.data[b]=48;b=b+1|0;}while(b<YF.data.length){YF.data[b]=48;b=b+1|0;}c=0;while(c<YB.data.length){YB.data[c]
=Cr(YA.data[c]);c=c+1|0;}c=0;while(c<YC.data.length){YC.data[c]=Cr(Yz.data[c]);c=c+1|0;}Bz();Yy=YH;Yx=YI;}
var BZ=E();
var YJ=null;var YK=null;var YL=null;var YM=null;var YN=null;var YO=null;function Br(){Br=R(BZ);Ni();}
function E4(b){Br();return (b&64512)!=55296?0:1;}
function E2(b){Br();return (b&64512)!=56320?0:1;}
function K0(b){Br();return !E4(b)&&!E2(b)?0:1;}
function Kv(b,c){Br();return ((b&1023)<<10|c&1023)+65536|0;}
function Gt(b){var c;Br();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function F1(b){Br();return (56320|b&1023)&65535;}
function FU(b){Br();return GL(b)&65535;}
function GL(b){Br();return GF(HK(),b);}
function HK(){Br();if(YL===null)YL=R6(((I7()).value!==null?$rt_str((I7()).value):null));return YL;}
function I7(){Br();if(YN===null)YN=Ih();return YN;}
function GF(b,c){var d,e;Br();d=JT(b,c);if(d>=0){e=b.data;if(d<(e.length/2|0))return c+e[(d*2|0)+1|0]|0;}return 0;}
function JT(b,c){var d,e,f,g,h,i;Br();d=b.data;e=0;f=(d.length/2|0)-1|0;while(true){g=(e+f|0)/2|0;h=d[g*2|0];i=BX(h,c);if(!i)break;if(i<=0){e=g+1|0;if(e>f)return g;}else{f=g-1|0;if(f<e)return f;}}return g;}
function Ex(b){Br();return IG(b);}
function IG(b){var c,d,e,f,g,h,i,j;Br();c=GS();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=BX(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function C3(b,c){Br();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function GS(){Br();if(YK===null)YK=S4(((GI()).value!==null?$rt_str((GI()).value):null));return YK;}
function GI(){Br();if(YO===null)YO=KJ();return YO;}
function Ni(){YJ=I($rt_charcls());YM=By(BZ,128);}
function Ih(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function KJ(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
var DF=E();
var YP=null;var YQ=null;function Dj(){Dj=R(DF);M5();}
function KY(b,c,d){var e,f,g,h,i,j;Dj();e=0;f=c;g=b;a:{while(true){if(e>=d)break a;h=g*g;i=f*f;if(h+i>=8.0)break;j=h-i+b;f=2.0*g*f+c;e=e+1|0;g=j;}}return e;}
function Kw(b,c,d,e){var f;Dj();YP.iM();f=YQ.bp();if(!(f!==null&&f.e$==d&&e>=f.cN)){B4();f=Jo(Xg.data[d]);f.e$=d;JQ(f,b,c);YQ.eL(f);}while(f.cN<e){J6(f);f.cN=f.cN+1|0;}}
function Jy(b,c){Dj();if(c!==null&&c.data.length==b)return c;return W(b);}
function HR(b,c){var d,e,f;Dj();d=0;e=YQ.bp();while(d<e.dX){f=d+1|0;IU(d,b,c);d=f;}}
function IU(b,c,d){var e,f,g,h;Dj();e=d.data;f=Ii(b,c);g=YQ.bp();h=KY(f.eq,f.da,g.cO);e[b]=h;return h;}
function Ii(b,c){var d,e,f,g,h;Dj();d=YQ.bp();e=YP.bp();if(e===null){f=YP;e=U9();f.eL(e);e.dA=d.w.X();e.fQ=d.s.X();e.dR=null;e.di=1.7976931348623157E308;e.da=1.7976931348623157E308;}if(e.dO===null){e.fL=(e.fQ-e.dA)/(d.dX-1|0);e.dR=(d.u.T(d.B)).gY(Ux(d.ff-1|0),d.u.bC(),6);}g=c;if(g!==e.di){f=d.u;h=e.dR;e.di=g;e.dO=f.T(h.cU(BJ(g)));e.fB=e.dO.X();}e.eq=e.dA+e.fL*b;e.da=e.fB;return e;}
function M5(){YP=OT();YQ=OT();}
function HP(){var a=this;B.call(a);a.dW=null;a.dv=null;}
function U1(a,b){var c=new HP();Tf(c,a,b);return c;}
function Tf(a,b,c){a.dv=b;a.dW=c;J(a);}
function Tj(a,b){var c,$$je;a:{try{a.dW.eZ(a.dv);}catch($$e){$$je=Bk($$e);if($$je instanceof BM){c=$$je;break a;}else{throw $$e;}}return;}G(c);}
function TC(a,b){var c,$$je;a:{try{a.dW.eZ(a.dv);}catch($$e){$$je=Bk($$e);if($$je instanceof BM){c=$$je;break a;}else{throw $$e;}}return;}G(c);}
function Ln(){B.call(this);this.fZ=null;}
function Vq(a){var b=new Ln();Sj(b,a);return b;}
function Sj(a,b){J(a);a.fZ=b;}
function RH(a){TE(a.fZ);}
var Ho=E();
function Uf(b){return b;}
function CP(){B.call(this);this.bD=null;}
function EG(a,b){J(a);a.bD=b;}
function Hh(a){return a.bD;}
function KB(a,b){var c,d,e;if(b===null){Bs();return XV;}a:{c=$rt_str(typeof b);d=(-1);switch(c.b9()){case -1034364087:if(!c.A(D(88)))break a;d=2;break a;case -1023368385:if(!c.A(D(89)))break a;d=0;break a;case -891985903:if(!c.A(D(90)))break a;d=1;break a;case 64711720:if(!c.A(D(91)))break a;d=3;break a;default:}}switch(d){case 0:if(!($rt_globals.Object.prototype.toString.apply(b)==='[object Array]'?1:0)){Bs();e=XY;}else{Bs();e=XX;}return e;case 1:break;case 2:Bs();return XA;case 3:Bs();return Xz;default:Bs();return XW;}Bs();return Xy;}
function LS(a){return K3();}
function G1(a,b){if(!(b instanceof FX))return I_(b);return b;}
function II(a,b){if(!(b instanceof Gr))return Pd(b);return b;}
function JC(a,b){Uh();switch(Xx.data[Bd(a.cE(b))]){case 1:return O6(b);case 2:return Di(Ol(b));case 3:return OM(b);default:}return b;}
function Kg(a,b){if(b===null)return null;if(b instanceof Cb)return $rt_ustr(b);if(b instanceof B6)return !!b.fy();if(b instanceof Cy)return b.jP();if(b instanceof Cp)return b.X();if(b instanceof Bc)return b.V();if(!(b instanceof BZ))return b;return $rt_ustr(I5(b));}
function H3(a){return a.eG();}
function OM(b){var c;c=Uf(b);if(c!==R1(c))return FO(c);if(S9(c)<=2.147483647E9)return Bv(c|0);return EZ(WS(c));}
function MC(a){return a.fN();}
function P6(a){return a.gi();}
function PM(a,b){return a.fu(b);}
function Og(a,b){return a.gf(b);}
function RE(a,b){return a.ge(b);}
function K3(){return {};}
function N9(b){var keys=[];for(var key in b){if($rt_globals.Object.prototype.hasOwnProperty.call(b,key)&&key!='$H'){keys.push(key);}}return keys;}
var FX=E(CP);
function Wc(a){var b=new FX();MK(b,a);return b;}
function I_(b){if(b!==null&&!(typeof b==='undefined'?1:0))return Wc(b);return null;}
function MK(a,b){EG(a,b);}
function Gk(a){return Q6(a.bD);}
function Li(a,b){return (Gk(a))[b];}
function Ru(a){return (Gk(a)).length;}
function SE(a,b){return Li(a,b);}
var DD=E(CY);
function GG(a,b,c,d){FM(a,b);a.G=c;a.bh=d;}
function Tu(b,c,d){return UW(0,b.data.length,b,c,c+d|0,0);}
function Nq(a,b,c,d){var e,f,g,h,i,j,k,l;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new B1;i=Y();Bj(P(Bj(P(i,D(92)),g),D(59)),f);Cx(h,Bb(i));G(h);}if(Cd(a)<d)G(V4());if(d<0){i=new B1;h=Y();P(Bj(P(h,D(60)),d),D(61));Cx(i,Bb(h));G(i);}j=a.G;k=0;while(k<d){g=c+1|0;f=j+1|0;e[c]=a.iK(j);k=k+1|0;c=g;j=f;}a.G=a.G+d|0;return a;}}e=b.data;i=new B1;f=e.length;l=Y();C9(Bj(P(Bj(P(l,D(62)),c),D(53)),f),41);Cx(i,Bb(l));G(i);}
function LY(a,b){Kf(a,b);return a;}
var D$=E(DD);
function IR(a,b,c,d){GG(a,b,c,d);}
function KU(){var a=this;D$.call(a);a.iW=0;a.fF=0;a.go=null;}
function UW(a,b,c,d,e,f){var g=new KU();T0(g,a,b,c,d,e,f);return g;}
function T0(a,b,c,d,e,f,g){IR(a,c,e,f);a.fF=b;a.iW=g;a.go=d;}
function NN(a,b){return a.go.data[b+a.fF|0];}
var J0=E();
function Sr(b,c,d){var e,f;e=0;while(e<d){f=b.data[e+c|0];$rt_putStdout(f&255);e=e+1|0;}}
var FP=E();
var YR=null;function KG(){return (Ec()).hI();}
function TV(b){return (Ec()).cj(b);}
function OY(b){return (Ec()).dx(b);}
function Nb(b){return (Ec()).bn(b);}
function P4(b){YR=b;}
function Ec(){var b;if(YR===null){b=Wb();D2();P4(F4(I(Dg),b,YS));if(YR===null){(If()).ft(D(93));YR=UY();}}return YR;}
function QZ(){return Hf(I(Dg));}
var J1=E();
function Ol(b){return b?1:0;}
var CD=E();
var YT=null;var YU=null;var YH=null;var YI=null;function Bz(){Bz=R(CD);NC();}
function Lp(b,c){Bz();return Dr(b,c);}
function Dr(b,c){var d,e,f,g,h,i,j,k,l,m;Bz();if(c.e<=b.e){d=c;c=b;b=d;}if(b.e<63)return Iq(c,b);e=(c.e&(-2))<<4;f=c.cS(e);g=b.cS(e);h=c.bB(f.O(e));i=b.bB(g.O(e));j=Dr(f,g);k=Dr(h,i);l=Dr(f.bB(h),i.bB(g));d=(l.bq(j)).bq(k);d=d.O(e);m=j.O(e<<1);return (m.bq(d)).bq(k);}
function Iq(b,c){var d,e,f,g,h,i,j,k,l,m,n;Bz();d=b.e;e=c.e;f=d+e|0;g=b.f==c.f?1:(-1);if(f!=2){h=b.a;i=c.a;j=W(f);Jf(h,d,i,e,j);k=Bp(g,f,j);BC(k);return k;}l=Cg(b.a.data[0],c.a.data[0],0,0);m=K(l);n=WT(l);return !n?Bu(g,m):Bp(g,2,B_([m,n]));}
function Jf(b,c,d,e,f){Bz();if(c&&e){if(c==1)f.data[e]=Dm(f,d,e,b.data[0]);else if(e!=1)G$(b,d,f,c,e);else f.data[c]=Dm(f,b,c,d.data[0]);return;}}
function G$(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;Bz();if(b===c&&e==f){F7(b,e,d);return;}g=0;while(g<e){h=b.data;i=M;j=h[g];k=0;while(k<f){l=d.data;m=c.data[k];n=g+k|0;o=Cg(j,m,l[n],K(i));l[n]=K(o);i=T(o,32);k=k+1|0;}d.data[g+f|0]=K(i);g=g+1|0;}}
function Dm(b,c,d,e){var f,g,h,i;Bz();f=M;g=0;while(g<d){h=b.data;i=Cg(c.data[g],e,K(f),0);h[g]=K(i);f=T(i,32);g=g+1|0;}return K(f);}
function Hc(b,c,d){Bz();return Dm(b,b,c,d);}
function FG(b,c){var d,e,f,g,h,i,j,k,l,m;Bz();d=b.f;if(!d){Be();return Xo;}e=b.e;f=b.a;if(e!=1){g=e+1|0;h=W(g);i=h.data;i[e]=Dm(h,f,e,c);j=Bp(d,g,h);BC(j);return j;}k=Cg(f.data[0],c,0,0);l=K(k);m=WT(k);return !m?Bu(d,l):Bp(d,2,B_([l,m]));}
function Kk(b,c){var d,e,f;Bz();Be();d=Xp;while(c>1){if(c&1)d=d.z(b);e=b.e==1?b.z(b):Vl(1,F7(b.a,b.e,W(b.e<<1)));c=c>>1;b=e;}f=d.z(b);return f;}
function F7(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;Bz();e=0;while(e<c){f=M;g=e+1|0;h=g;while(h<c){i=d.data;j=b.data;k=j[e];l=j[h];m=e+h|0;n=Cg(k,l,i[m],K(f));i[m]=K(n);f=T(n,32);h=h+1|0;}d.data[e+c|0]=K(f);e=g;}HC(d,d,c<<1);f=M;e=0;o=0;while(e<c){i=d.data;j=b.data;n=Cg(j[e],j[e],i[o],K(f));i[o]=K(n);n=T(n,32);l=o+1|0;n=L(n,H(C(i[l]),F(4294967295, 0)));i[l]=K(n);f=T(n,32);e=e+1|0;o=l+1|0;}return d;}
function Cj(b,c){Bz();return B3(c,C(YT.data.length))?b.z(Cw(c)):FG(b,YT.data[K(c)]);}
function Cw(b){var c,d,e,f,g,h,i;Bz();c=K(b);if(Bx(b,C(YH.data.length)))return YH.data[c];if(Bq(b,C(50))){Be();return Xq.bt(c);}if(Bq(b,C(1000)))return (YI.data[1].bt(c)).O(c);d=L(C(1),WS(V9(b)/2.4082399653118496));if(Cc(d,C(1000000)))G(Cq(D(94)));if(Bq(b,C(2147483647)))return (YI.data[1].bt(c)).O(c);e=YI.data[1].bt(2147483647);f=S(b,C(2147483647));g=K(BO(b,C(2147483647)));h=e;i=f;while(Cc(i,C(2147483647))){h=h.z(e);i=S(i,C(2147483647));}h=h.z(YI.data[1].bt(g));h=h.O(2147483647);while(Cc(f,C(2147483647))){h
=h.O(2147483647);f=S(f,C(2147483647));}h=h.O(g);return h;}
function GK(b,c){Bz();if(c<YU.data.length)return FG(b,YU.data[c]);if(c<YI.data.length)return b.z(YI.data[c]);return b.z(YI.data[1].bt(c));}
function Cg(b,c,d,e){Bz();return L(L(Q(H(C(b),F(4294967295, 0)),H(C(c),F(4294967295, 0))),H(C(d),F(4294967295, 0))),H(C(e),F(4294967295, 0)));}
function NC(){var b,c,d,e,f;YT=B_([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);YU=B_([1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,244140625,1220703125]);YH=By(Bl,32);YI=By(Bl,32);b=C(1);c=0;while(c<=18){YI.data[c]=BF(b);YH.data[c]=BF(U(b,c));b=Q(b,C(5));c=c+1|0;}while(c<YH.data.length){d=YI.data;e=YI.data;f=c-1|0;d[c]=e[f].z(YI.data[1]);YH.data[c]=YH.data[f].z(Xq);c=c+1|0;}}
function D3(){B.call(this);this.dM=null;}
function YV(){var a=new D3();GB(a);return a;}
function GB(a){J(a);}
function Hm(a,b){a.dM=b;}
function Rc(a,b){a.dM.dl(b);}
function P0(a,b){a.dM.dt(b);}
var B$=E();
var YW=null;var YX=null;var YY=null;var YZ=null;var Y0=null;var Y1=null;function Gw(){Gw=R(B$);P1();}
function J4(b){Gw();return b instanceof Bc;}
function LM(b){Gw();return b===null?null:b instanceof CV?b:!(b instanceof Bc)?null:Bv(b.V());}
function JX(b){var c,$$je;Gw();if(b===null)return null;a:{try{c=Bv(D6(b));}catch($$e){$$je=Bk($$e);if($$je instanceof BQ){break a;}else{throw $$e;}}return c;}return null;}
function EM(b){var c;Gw();c=LM(b);if(c===null&&b!==null)return JX(b.j());return c;}
function P1(){YW=Lj(0);YX=GP(0);YY=Bv(0);YZ=EZ(M);Y0=Lt(0.0);Y1=FO(0.0);}
function Cp(){Bc.call(this);this.bv=0.0;}
var Y2=0.0;var Y3=null;function Kd(){Kd=R(Cp);Pe();}
function Pv(a){var b=new Cp();Ks(b,a);return b;}
function Ks(a,b){Kd();Bm(a);a.bv=b;}
function Pg(a){return a.bv|0;}
function FO(b){Kd();return Pv(b);}
function EJ(b){Kd();return ((Y()).hR(b)).j();}
function Ns(a){return EJ(a.bv);}
function Uc(a,b){if(a===b)return 1;return b instanceof Cp&&b.bv===a.bv?1:0;}
function Ng(a){return $rt_globals.isNaN(a.bv)?1:0;}
function OU(a){return !$rt_globals.isFinite(a.bv)?1:0;}
function Pe(){Y2=$rt_globals.NaN;Y3=I($rt_doublecls());}
var Jp=E();
function Eh(b,c,d){var e,f,g,h;e=d-1|0;while(e>=0){f=c.data;if(b.data[e]!=f[e])break;e=e+(-1)|0;}if(e<0)g=0;else{h=c.data;g=B3(H(C(b.data[e]),F(4294967295, 0)),H(C(h[e]),F(4294967295, 0)))?1:(-1);}return g;}
function SX(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=b.f;e=c.f;if(!d)return c;if(!e)return b;f=b.e;g=c.e;if((f+g|0)==2){h=H(C(b.a.data[0]),F(4294967295, 0));i=H(C(c.a.data[0]),F(4294967295, 0));if(d!=e)return BF(d>=0?S(h,i):S(i,h));j=L(h,i);k=K(j);l=WT(j);return !l?Bu(d,k):Bp(d,2,B_([k,l]));}if(d==e)m=f<g?Eg(c.a,g,b.a,f):Eg(b.a,f,c.a,g);else{n=BX(f,g);o=!n?Eh(b.a,c.a,f):n<=0?(-1):1;if(!o){Be();return Xo;}if(o!=1){m=Ea(c.a,g,b.a,f);d=e;}else m=Ea(b.a,f,c.a,g);}p=m.data;q=Bp(d,p.length,m);BC(q);return q;}
function Pa(b,c,d,e,f){var g,h,i,j,k,l,m;g=b.data;h=e.data;i=c.data;j=L(H(C(i[0]),F(4294967295, 0)),H(C(h[0]),F(4294967295, 0)));g[0]=K(j);k=Z(j,32);if(d<f){l=1;while(l<d){m=L(k,L(H(C(i[l]),F(4294967295, 0)),H(C(h[l]),F(4294967295, 0))));g[l]=K(m);k=Z(m,32);l=l+1|0;}while(l<f){m=L(k,H(C(h[l]),F(4294967295, 0)));g[l]=K(m);k=Z(m,32);l=l+1|0;}}else{l=1;while(l<f){m=L(k,L(H(C(i[l]),F(4294967295, 0)),H(C(h[l]),F(4294967295, 0))));g[l]=K(m);k=Z(m,32);l=l+1|0;}while(l<d){m=L(k,H(C(i[l]),F(4294967295, 0)));g[l]=K(m);k
=Z(m,32);l=l+1|0;}}if(BG(k,M))g[l]=K(k);}
function MJ(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=b.f;e=c.f;if(!e)return b;if(!d)return c.fA();f=b.e;g=c.e;if((f+g|0)==2){h=H(C(b.a.data[0]),F(4294967295, 0));i=H(C(c.a.data[0]),F(4294967295, 0));if(d<0)h=Bt(h);if(e<0)i=Bt(i);return BF(S(h,i));}j=BX(f,g);k=!j?Eh(b.a,c.a,f):j<=0?(-1):1;if(k==(-1)){l= -e|0;m=d!=e?Eg(c.a,g,b.a,f):Ea(c.a,g,b.a,f);}else if(d!=e){m=Eg(b.a,f,c.a,g);l=d;}else{if(!k){Be();return Xo;}m=Ea(b.a,f,c.a,g);l=d;}n=m.data;o=Bp(l,n.length,m);BC(o);return o;}
function O8(b,c,d,e,f){var g,h,i,j,k;g=M;h=0;while(h<f){i=b.data;j=e.data;k=L(g,S(H(C(c.data[h]),F(4294967295, 0)),H(C(j[h]),F(4294967295, 0))));i[h]=K(k);g=Z(k,32);h=h+1|0;}while(h<d){j=b.data;k=L(g,H(C(c.data[h]),F(4294967295, 0)));j[h]=K(k);g=Z(k,32);h=h+1|0;}}
function Eg(b,c,d,e){var f;f=W(c+1|0);Pa(f,b,c,d,e);return f;}
function PT(b,c,d){var e,f,g,h;e=H(C(d),F(4294967295, 0));f=0;while(BG(e,M)&&f<c){g=b.data;h=L(e,H(C(g[f]),F(4294967295, 0)));g[f]=K(h);e=Z(h,32);f=f+1|0;}return K(e);}
function Ea(b,c,d,e){var f;f=W(c);O8(f,b,c,d,e);return f;}
function Lg(){CU.call(this);this.dI=null;}
function Uv(a){var b=new Lg();PD(b,a);return b;}
function PD(a,b){a.dI=b;Fr(a);}
function SS(a){return a.dI.M();}
function SD(a){return Wp(a.dI);}
function LT(){var a=this;B.call(a);a.eq=0.0;a.da=0.0;a.dA=0.0;a.fQ=0.0;a.dR=null;a.dO=null;a.fB=0.0;a.fL=0.0;a.di=0.0;}
function U9(){var a=new LT();M7(a);return a;}
function M7(a){J(a);}
var C$=E(0);
function TB(a,b,c){return (a.hH(b)).h4(VF(c));}
function Rl(b,c){return c.g1(b);}
var Fb=E();
var Y4=null;function Y5(){var a=new Fb();Ua(a);return a;}
function Ua(a){J(a);}
function TP(a){if(Y4===null)Y4=Di(NL()?1:0);return Y4.fy();}
function Nt(a,b){var c,d;c=Ir();d=VE(c);Sa($rt_ustr(b),C8(d,"handle"));return c.gn();}
function Mv(b,c){b.bu(Wn(c));}
function NL(){{try {if(typeof $rt_globals.WebAssembly==="object"&&typeof $rt_globals.WebAssembly.instantiate==="function"){const module=new $rt_globals.WebAssembly.Module($rt_globals.Uint8Array.of(0x0,0x61,0x73,0x6d,0x01,0x00,0x00,0x00));if(module instanceof $rt_globals.WebAssembly.Module)return new $rt_globals.WebAssembly.Instance(module) instanceof $rt_globals.WebAssembly.Instance;}}catch(e){}return false;}}
function Sa(b,c){(($rt_globals.fetch(b)).then(function(response){return $rt_globals.WebAssembly.compileStreaming(response);})).then(function(module){return c(module);});}
function DS(){D3.call(this);this.e0=null;}
function JV(a){GB(a);}
function NJ(a,b){a.e0=b;Hm(a,b);}
function Ix(a,b){a.fe(b);}
function NM(a,b){return a.e0.dg(b);}
function JE(){var a=this;DS.call(a);a.b5=0;a.dH=0;a.dV=0;a.dY=0;a.cQ=null;a.fx=0;a.cb=null;a.cH=null;a.eP=0;}
function VZ(){var a=new JE();On(a);return a;}
function On(a){JV(a);}
function L0(a){var b;if(T4()){b=NQ(D(95),By(F2,0));b.ie(VN(a));}a.dt(VL(a));}
function I6(a,b){var c,d,e,f,g,h,i;c=TV(b);d=(c.ea(D(96),Bv(0))).V();e=c.eh(D(97));f=e===null?0:1;if(f){a.b5=(c.eh(D(97))).V();a.dH=(c.eh(D(98))).V();a.dV=(c.ea(D(99),Bv(0))).V();a.dY=(c.ea(D(100),Bv(0))).V();a.fx=c.i2(D(101));}if(a.fx&&a.cb!==null){if(!f&&a.eP){g=a.cb;h=By(B,1);h.data[0]=Bv(d);g.eu(D(102),h);}else{i=(a.cb.eu(D(103),B5(B,[Bv(d),Bv(a.b5),Bv(a.dH),Bv(a.dV),Bv(a.dY)]))).V();a.cH.gr(i);a.eP=1;}a.cH.hY();a.cQ=a.cH.hr(a.b5);}else{if(f)Kw(a.b5,a.dH,a.dV,a.dY);a.cQ=Jy(a.b5,null);HR(d,a.cQ);}a.dl(a.dg(a.cQ));}
function GR(a,b){a.cb=b.hQ();a.cH=a.cb.gz(0);}
var F2=E();
var Kq=E(V);
function P2(){var a=new Kq();LX(a);return a;}
function LX(a){BE(a);}
function JO(){B.call(this);this.eQ=null;}
function VF(a){var b=new JO();Sp(b,a);return b;}
function Sp(a,b){J(a);a.eQ=b;}
function Qp(a,b){return IA(a,b);}
function IA(a,b){return Rl(a.eQ,b);}
var GU=E();
function T2(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;h=f.data;i=W(e+1|0);j=W(g+1|0);k=g-1|0;l=CL(h[k]);if(l){EK(j,f,0,l);EK(i,d,0,l);}else{C7(d,0,i,0,e);C7(f,0,j,0,g);}m=j.data;n=m[k];o=c-1|0;while(o>=0){a:{h=i.data;if(h[e]==n)p=(-1);else{q=L(U(H(C(h[e]),F(4294967295, 0)),32),H(C(h[e-1|0]),F(4294967295, 0)));r=QP(q,n);p=K(r);s=WT(r);if(p){t=0;p=p+1|0;while(true){p=p+(-1)|0;if(t)break;u=Q(H(C(p),F(4294967295, 0)),H(C(m[g-2|0]),F(4294967295, 0)));v=C(s);w=L(U(v,32),H(C(h[e-2|0]),F(4294967295, 0)));x
=L(H(v,F(4294967295, 0)),H(C(n),F(4294967295, 0)));if(CL(WT(x))>=32)s=K(x);else t=1;if(Bq(Kh(u,F(0, 2147483648)),Kh(w,F(0, 2147483648))))break a;}}}}if(p){y=e-g|0;z=M$(i,y,j,g,p);if(z){p=p+(-1)|0;ba=M;bb=0;while(bb<g){k=y+bb|0;v=L(ba,L(H(C(h[k]),F(4294967295, 0)),H(C(m[bb]),F(4294967295, 0))));h[k]=K(v);ba=T(v,32);bb=bb+1|0;}}}if(b!==null)b.data[o]=p;e=e+(-1)|0;o=o+(-1)|0;}if(l){KZ(j,g,i,0,l);return j;}C7(i,0,j,0,g);return i;}
function Ps(b,c,d,e){var f,g,h,i,j,k,l,m,n;f=M;g=H(C(e),F(4294967295, 0));h=d-1|0;while(h>=0){i=c.data;j=Cs(U(f,32),H(C(i[h]),F(4294967295, 0)));if(B3(j,M)){k=Bg(j,g);f=BO(j,g);}else{l=T(j,1);m=C(e>>>1);k=Bg(l,m);n=BO(l,m);f=L(U(n,1),H(j,C(1)));if(e&1){if(Bq(k,f))f=S(f,k);else if(Bq(S(k,f),g)){f=L(f,S(g,k));k=S(k,C(1));}else{f=L(f,S(U(g,1),k));k=S(k,C(2));}}}b.data[h]=K(H(k,F(4294967295, 0)));h=h+(-1)|0;}return K(f);}
function QP(b,c){var d,e,f,g,h;d=H(C(c),F(4294967295, 0));if(B3(b,M)){e=Bg(b,d);f=BO(b,d);}else{g=T(b,1);h=C(c>>>1);e=Bg(g,h);f=BO(g,h);f=L(U(f,1),H(b,C(1)));if(c&1){if(Bq(e,f))f=S(f,e);else if(Bq(S(e,f),d)){f=L(f,S(d,e));e=S(e,C(1));}else{f=L(f,S(U(d,1),e));e=S(e,C(2));}}}return Cs(U(f,32),H(e,F(4294967295, 0)));}
function Q3(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=b.a;f=b.e;g=b.f;if(f!=1){h=g!=d?(-1):1;i=W(f);j=W(1);j.data[0]=Ps(i,e,f,c);k=Bp(h,f,i);l=Bp(g,1,j);BC(k);BC(l);return B5(Bl,[k,l]);}m=H(C(e.data[0]),F(4294967295, 0));n=H(C(c),F(4294967295, 0));o=Bg(m,n);p=BO(m,n);if(g!=d)o=Bt(o);if(g<0)p=Bt(p);return B5(Bl,[BF(o),BF(p)]);}
function M$(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=M;h=M;i=0;while(i<e){j=b.data;k=Cg(d.data[i],f,K(g),0);l=c+i|0;m=L(S(H(C(j[l]),F(4294967295, 0)),H(k,F(4294967295, 0))),h);j[l]=K(m);h=Z(m,32);g=T(k,32);i=i+1|0;}n=b.data;o=c+e|0;m=L(S(H(C(n[o]),F(4294967295, 0)),g),h);n[o]=K(m);return WT(m);}
var IH=E();
function Ud(b){var c,d,e,f;if(!b.f)return 0;c=b.e<<5;d=b.a.data[b.e-1|0];if(b.f<0){e=b.eb();if(e==(b.e-1|0))d=d+(-1)|0;}f=c-CL(d)|0;return f;}
function G8(b,c){var d,e,f,g,h;d=c>>5;e=c&31;f=(b.e+d|0)+(e?1:0)|0;g=W(f);EK(g,b.a,d,e);h=Bp(b.f,f,g);BC(h);return h;}
function EK(b,c,d,e){var f,g,h,i,j,k;a:{if(!e)C7(c,0,b,d,b.data.length-d|0);else{f=b.data;g=32-e|0;h=f.length-1|0;f[h]=0;while(true){if(h<=d)break a;i=c.data;j=f[h];k=(h-d|0)-1|0;f[h]=j|i[k]>>>g;f[h-1|0]=i[k]<<e;h=h+(-1)|0;}}}h=0;while(h<d){b.data[h]=0;h=h+1|0;}}
function HC(b,c,d){var e,f,g,h;e=0;f=0;while(f<d){g=b.data;h=c.data[f];g[f]=h<<1|e;e=h>>>31;f=f+1|0;}if(e)b.data[d]=e;}
function MO(b){var c,d,e,f;c=b.e;d=c+1|0;e=W(d);HC(e,b.a,c);f=Bp(b.f,d,e);BC(f);return f;}
function HJ(b,c){var d,e,f,g,h,i,j,k,l,m,n;d=c>>5;e=c&31;if(d>=b.e){if(b.f>=0){Be();f=Xo;}else{Be();f=Xr;}return f;}a:{g=b.e-d|0;h=g+1|0;i=W(h);KZ(i,g,b.a,d,e);if(b.f>=0)h=g;else{j=0;while(true){k=BX(j,d);if(k>=0)break;if(b.a.data[j])break;j=j+1|0;}if(k>=0){if(e<=0){h=g;break a;}if(!(b.a.data[j]<<(32-e|0))){h=g;break a;}}e=0;while(true){l=BX(e,g);if(l>=0)break;m=i.data;if(m[e]!=(-1))break;m[e]=0;e=e+1|0;}if(l)h=g;m=i.data;m[e]=m[e]+1|0;}}n=Bp(b.f,h,i);BC(n);return n;}
function KZ(b,c,d,e,f){var g,h,i,j,k,l,m;g=1;h=0;while(h<e){g=g&(d.data[h]?0:1);h=h+1|0;}if(!f)C7(d,e,b,0,c);else{i=d.data;j=32-f|0;g=g&(i[h]<<j?0:1);k=0;while(k<(c-1|0)){l=b.data;m=k+e|0;l[k]=i[m]>>>f|i[m+1|0]<<j;k=k+1|0;}b.data[k]=i[k+e|0]>>>f;}return g;}
var Gr=E(CP);
function Y6(){var a=new Gr();NU(a);return a;}
function Vw(a){var b=new Gr();Lc(b,a);return b;}
function Pd(b){if(b!==null&&!(typeof b==='undefined'?1:0))return Vw(b);return null;}
function NU(a){Lc(a,K3());}
function Lc(a,b){EG(a,b);}
function KE(a,b){return a.bD[$rt_ustr(b)]||null;}
function G3(a){return I_(N9(a.bD));}
function LA(a,b,c){a.bD[$rt_ustr(b)]=c;return a;}
function Tm(a){return H3(a);}
function Pl(a,b){return Kg(a,b);}
function Ow(a,b){return JC(a,b);}
function Mi(a,b){return II(a,b);}
function S5(a,b){return G1(a,b);}
function Ms(a){return LS(a);}
function TW(a,b){return KB(a,b);}
function Pz(a){return Hh(a);}
function Ue(a,b,c){return LA(a,b,c);}
function Tl(a,b){return KE(a,b);}
function O4(a){return G3(a);}
function Cb(){var a=this;B.call(a);a.q=null;a.cl=0;}
var Y7=null;function Gp(){Gp=R(Cb);Ry();}
function Uk(a){var b=new Cb();Hb(b,a);return b;}
function IC(a,b,c){var d=new Cb();LU(d,a,b,c);return d;}
function Hb(a,b){var c,d,e;Gp();c=b.data;J(a);d=c.length;a.q=BY(d);e=0;while(e<d){a.q.data[e]=c[e];e=e+1|0;}}
function LU(a,b,c,d){var e,f;Gp();J(a);a.q=BY(d);e=0;while(e<d){f=b.data;a.q.data[e]=f[e+c|0];e=e+1|0;}}
function NR(a,b){if(b>=0&&b<a.q.data.length)return a.q.data[b];G(Pb());}
function Re(a){return a.q.data.length;}
function Tg(a){return a.q.data.length?0:1;}
function Qo(a,b){var c,d,e,f;if(a===b)return 1;if(b.g()>a.g())return 0;c=0;d=a.g()-b.g()|0;while(d<a.g()){e=a.o(d);f=c+1|0;if(e!=b.o(c))return 0;d=d+1|0;c=f;}return 1;}
function Ny(a,b,c){var d,e,f,g;d=BA(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.q.data.length)return (-1);if(a.q.data[d]==e)break;d=d+1|0;}return d;}f=Gt(b);g=F1(b);while(true){if(d>=(a.q.data.length-1|0))return (-1);if(a.q.data[d]==f&&a.q.data[d+1|0]==g)break;d=d+1|0;}return d;}
function Qn(a,b){return a.eH(b,0);}
function NW(a,b,c){var d,e,f,g,h,i;d=B8(c,a.g()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.q.data[d]==e)break;d=d+(-1)|0;}return d;}f=Gt(b);g=F1(b);while(true){if(d<1)return (-1);if(a.q.data[d]==g){h=a.q.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function SF(a,b){return a.iU(b,a.g()-1|0);}
function MH(a,b,c){if(b>c)G(DL());return IC(a.q,b,c-b|0);}
function SN(a,b){return a.bF(b,a.g());}
function OK(a){return a;}
function Tn(a){var b,c,d;b=BY(a.q.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.q.data[c];c=c+1|0;}return b;}
function I5(b){Gp();return b===null?D(3):b.j();}
function JW(b,c,d){Gp();return IC(b,c,d);}
function R7(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Cb))return 0;c=b;if(c.g()!=a.g())return 0;d=0;while(d<c.g()){if(a.o(d)!=c.o(d))return 0;d=d+1|0;}return 1;}
function Sn(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.g()!=b.g())return 0;c=0;while(c<a.g()){if(FU(a.o(c))!=FU(b.o(c)))return 0;c=c+1|0;}return 1;}
function NK(a){var b,c,d,e;a:{if(!a.cl){b=a.q.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.cl=(31*a.cl|0)+e|0;d=d+1|0;}}}return a.cl;}
function Ry(){Y7=VU();}
var LV=E(V);
function VO(){var a=new LV();Oc(a);return a;}
function Oc(a){BE(a);}
function Ev(){var a=this;Dv.call(a);a.fD=null;a.e1=null;}
function IF(a,b,c,d){Ko(a,b,c,d);a.fD=BY(512);a.e1=Fw(512);}
function NY(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.fD;e=0;f=0;g=a.e1;a:{while(true){if((e+32|0)>f&&Cv(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=B8(Cd(b)+j|0,i.length);b.iF(d,j,f-j|0);e=0;}if(!Cv(c)){if(!Cv(b)&&e>=f){BR();k=X$;}else{BR();k=X9;}break a;}i=g.data;l=0;m=B8(Cd(c),i.length);n=UL(b,c);k=a.gT(d,e,f,g,l,m,n);e=n.fw;j=n.f8;if(k===null){if(!Cv(b)&&e>=f){BR();k=X$;}else if(!Cv(c)&&e>=f){BR();k=X9;}}c.fz(g,0,j);if(k!==null)break;}}b.e5(Db(b)-(f-e|0)|0);return k;}
var Je=E(Ev);
function Vm(a){var b=new Je();Qq(b,a);return b;}
function Qq(a,b){IF(a,b,2.0,4.0);}
function TM(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.ee(2))break a;BR();i=X9;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!K0(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.ee(3))break a;BR();i=X9;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if(!E4(l))
{i=DM(1);break a;}if(j>=d){if(h.im())break a;BR();i=X$;break a;}n=j+1|0;p=k[j];if(!E2(p)){j=n+(-2)|0;i=DM(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.ee(4))break a;BR();i=X9;break a;}k=e.data;q=Kv(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.iR(j);h.gG(f);return i;}
var FN=E(0);
function IZ(){B.call(this);this.fg=null;}
function UQ(a){var b=new IZ();Nl(b,a);return b;}
function Nl(a,b){J(a);a.fg=b;}
function Ne(a,b){H$(a,b);}
function H$(a,b){RQ(a.fg,b);}
function M2(a,b){a.ip(b);}
var BQ=E(Cu);
function TZ(){var a=new BQ();ND(a);return a;}
function CH(a){var b=new BQ();B7(b,a);return b;}
function ND(a){Fh(a);}
function B7(a,b){Gu(a,b);}
var Gm=E(DG);
var Yp=null;function QX(){QX=R(Gm);Qv();}
function VT(){var a=new Gm();K1(a);return a;}
function K1(a){QX();IE(a,D(104),By(Cb,0));}
function SI(a){return Vm(a);}
function Qv(){Yp=VT();}
var LK=E();
function Uq(){var a=new LK();N$(a);return a;}
function N$(a){J(a);}
function T9(b){Ix(b,Uq());b.i5();}
function Nu(a,b){if(!(b instanceof Cb))$rt_globals.self.postMessage(b);else $rt_globals.self.postMessage($rt_ustr(b));}
function Oq(a,b){var c,d,e,f,g;c=b.data;d=c.length;e=new $rt_globals.Array();f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function PP(a,b){$rt_globals.self.onmessage=C8(UQ(b),"handleEvent");}
function RQ(b,c){b.ha(c.data);}
var Ha=E(V);
function Oe(){var a=new Ha();Qt(a);return a;}
function Kn(a){var b=new Ha();N4(b,a);return b;}
function Qt(a){BE(a);}
function N4(a,b){C0(a,b);}
var GM=E(V);
function Ph(a){var b=new GM();QD(b,a);return b;}
function Df(){var a=new GM();O9(a);return a;}
function QD(a,b){C0(a,b);}
function O9(a){BE(a);}
function KK(){B.call(this);this.ei=null;}
function VR(a){var b=new KK();SB(b,a);return b;}
function SB(a,b){J(a);a.ei=b;}
function Ws(b){return VR(b);}
function Tz(a,b){a.ei.bu(b);}
function Td(a,b){a.ei.hn(b);}
function Ch(){var a=this;B.call(a);a.hk=null;a.fk=0;}
function Em(a,b,c){J(a);a.hk=b;a.fk=c;}
function Bd(a){return a.fk;}
function IL(){var a=this;B.call(a);a.U=null;a.eV=null;a.x=null;a.D=0;}
function V$(){var a=new IL();TY(a);return a;}
function TY(a){J(a);a.x=BV();}
var KQ=E();
function R1(b){return Math.floor(b);}
function B8(b,c){if(b<c)c=b;return c;}
function BA(b,c){if(b>c)c=b;return c;}
function EE(b){if(b<=0)b= -b|0;return b;}
function DI(b){if(Bq(b,M))b=Bt(b);return b;}
function S9(b){if(b<=0.0)b= -b;return b;}
function E0(){Bc.call(this);this.h5=0;}
var Y8=null;function Su(){Su=R(E0);M9();}
function Wt(a){var b=new E0();JB(b,a);return b;}
function JB(a,b){Su();Bm(a);a.h5=b;}
function Lj(b){Su();return Wt(b);}
function M9(){Y8=I($rt_bytecls());}
function BL(){Ch.call(this);this.h8=0;}
var W_=null;var Xa=null;var Xb=null;var Xc=null;var Xd=null;var Xe=null;var Xf=null;var W$=null;var Y9=null;function Eu(){Eu=R(BL);Rs();}
function CB(a,b,c){var d=new BL();K8(d,a,b,c);return d;}
function J2(){Eu();return Y9.c3();}
function K8(a,b,c,d){Eu();Em(a,b,c);a.h8=d;}
function Lr(b){Eu();switch(b){case 0:break;case 1:return Xa;case 2:return Xb;case 3:return Xc;case 4:return Xd;case 5:return Xe;case 6:return Xf;case 7:return W$;default:G(CG(D(105)));}return W_;}
function Il(){Eu();return B5(BL,[W_,Xa,Xb,Xc,Xd,Xe,Xf,W$]);}
function Rs(){W_=CB(D(106),0,0);Xa=CB(D(107),1,1);Xb=CB(D(108),2,2);Xc=CB(D(109),3,3);Xd=CB(D(110),4,4);Xe=CB(D(111),5,5);Xf=CB(D(112),6,6);W$=CB(D(113),7,7);Y9=Il();}
function FY(){var a=this;B.call(a);a.hf=null;a.gt=null;}
var Y$=null;function Fp(){Fp=R(FY);NO();}
function VI(a){var b=new FY();Hg(b,a);return b;}
function Hg(a,b){Fp();J(a);a.hf=b;}
function LB(){Fp();return DB(D(114));}
function DB(b){var c,d,e;Fp();c=Y$.c9(b);if(c===null){c=VI(b);d=b.iH(46);if(d>=0){e=b.bF(0,d);c.gt=DB(e);}else if(!b.bW())c.gt=DB(D(115));Y$.bw(b,c);}return c;}
function MV(a,b){var c;c=JI(a,b.de(),b.gv());if(Dt(b.f4())>=Dt(Ye))J8($rt_ustr(c));else if(Dt(b.f4())<Dt(XS))GH($rt_ustr(c));else JS($rt_ustr(c));}
function JI(a,b,c){var d,e,f,g,h,i,j;if(c===null)return b;d=Y();e=0;a:{while(true){if(e>=b.g())break a;f=b.eH(123,e);if(f<0)break a;g=f+1|0;h=HY(g,b);if(h<0)break;if(b.o(h)!=125){d.fO(b,e,h);e=h;continue;}i=c.data;j=D6(b.bF(g,h));if(j>=i.length){d.fO(b,e,h);e=h;continue;}d.bf(i[j]);e=h+1|0;}}return d.j();}
function HY(b,c){var d,e;Fp();while(true){if(b>=c.g())return (-1);d=b+1|0;e=c.o(b);if(e<=48)break;if(e>=57)break;b=d;}return d;}
function SG(a,b,c){a.hb(V6(b,c));}
function NO(){Y$=T8();}
function GH(b){if($rt_globals.console){$rt_globals.console.info(b);}}
function JS(b){if($rt_globals.console){$rt_globals.console.warn(b);}}
function J8(b){if($rt_globals.console){$rt_globals.console.error(b);}}
function EH(){var a=this;B.call(a);a.fS=null;a.fr=null;a.gJ=M;a.he=null;a.iZ=M;a.hv=M;}
var Y_=M;function V6(a,b){var c=new EH();S$(c,a,b);return c;}
function S$(a,b,c){var d;J(a);a.fS=b;a.fr=c;a.gJ=Jw();d=Y_;Y_=L(d,C(1));a.iZ=d;a.hv=(BV()).hg();}
function OP(a){return a.fS;}
function PB(a){return a.fr;}
function O5(a){return a.he;}
function GD(){B.call(this);this.dN=null;}
function Vb(a){var b=new GD();L$(b,a);return b;}
function L$(a,b){a.dN=b;J(a);}
function S2(a,b){a.dN.d0(b);}
function Qe(a,b){a.dN.c$(b);}
var J9=E(BM);
function RF(a){var b=new J9();OL(b,a);return b;}
function OL(a,b){Iv(a,b,null,0,0);}
function Ia(){El.call(this);this.e8=null;}
function Us(a){var b=new Ia();RO(b,a);return b;}
function RO(a,b){I3(a,b);}
function QR(a){return a.e8;}
function QQ(a,b){a.e8=b;}
var IS=E();
function U_(){var a=new IS();L6(a);return a;}
function L6(a){J(a);}
function Oj(a,b){return Jr(a,b);}
function Jr(a,b){return Ql(b);}
var KC=E(V);
function U0(){var a=new KC();Rf(a);return a;}
function Rf(a){BE(a);}
var JZ=E();
function O_(b){var c,d,e,f;c=b.data;d=c.length;e=0;while(true){if(e>=d)return null;f=c[e];if(f!==null)break;e=e+1|0;}return f;}
var HU=E();
function VQ(b){T9(VZ());}
var Is=E();
function RV(b){if(!(b instanceof B6))return null;return b;}
function PL(b){if(b===null)return null;if(b.eR(D(78)))return Di(1);if(!b.eR(D(77)))return null;return Di(0);}
function SR(b){var c;c=RV(b);if(c===null&&b!==null)return PL(b.j());return c;}
var Le=E(Ei);
function Vc(a,b){var c=new Le();No(c,a,b);return c;}
function No(a,b,c){Lk(a,b,c);}
function QA(a,b){var c,d,e,f,g,h;c=W(b);while(a.bx%4|0){a.bx=a.bx+1|0;}d=a.bx/4|0;e=0;while(e<b){f=c.data;g=a.eM;h=d+1|0;f[e]=g[d];e=e+1|0;d=h;}a.bx=d*4|0;return c;}
function Eb(){var a=this;B.call(a);a.cd=0;a.e4=0;}
var X$=null;var X9=null;function BR(){BR=R(Eb);Qf();}
function H2(a,b){var c=new Eb();IW(c,a,b);return c;}
function IW(a,b,c){BR();J(a);a.cd=b;a.e4=c;}
function MT(a){return a.cd?0:1;}
function RN(a){return a.cd!=1?0:1;}
function TL(a){return !a.h_()&&!a.f5()?0:1;}
function RS(a){return a.cd!=2?0:1;}
function R3(a){return a.cd!=3?0:1;}
function QH(a){if(a.iu())return a.e4;G(VC());}
function DM(b){BR();return H2(2,b);}
function Qf(){X$=H2(0,0);X9=H2(1,0);}
var DX=E();
var Za=null;var Zb=null;function EU(){EU=R(DX);RW();}
function K6(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;EU();d=$rt_doubleToLongBits(b);c.eN=X(H(d,F(0, 2147483648)),M)?0:1;e=H(d,F(4294967295, 1048575));f=K(Z(d,52))&2047;if(X(e,M)&&!f){c.dd=M;c.dr=0;return;}g=0;if(f)h=Cs(e,F(0, 1048576));else{h=U(e,1);while(X(H(h,F(0, 1048576)),M)){h=U(h,1);f=f+(-1)|0;g=g+1|0;}}i=Nd(Zb,f);if(i<0)i=( -i|0)-2|0;j=f-Zb.data[i]|0;k=12+j|0;l=Gc(h,Za.data[i],k);if(B3(l,F(2808348672, 232830643))){i=i+1|0;m=f-Zb.data[i]|0;k=12+m|0;l=Gc(h,Za.data[i],k);}n=T(Za.data[i],(63-k|0)-g|0);o=Z(L(n,
C(1)),1);p=Z(n,1);if(X(h,F(0, 1048576)))p=Z(p,2);q=Ky(l,p);r=Ly(l,o);m=Ds(q,r);h=m>0?Q(Bg(l,q),q):m<0?L(Q(Bg(l,r),r),r):Q(Bg(L(l,Bg(r,C(2))),r),r);if(B3(h,F(2808348672, 232830643))){i=i+1|0;h=Bg(h,C(10));}else if(Bx(h,F(1569325056, 23283064))){i=i+(-1)|0;h=Q(h,C(10));}c.dd=h;c.dr=i-330|0;}
function Ky(b,c){var d,e;EU();d=C(10);while(Bq(d,c)){d=Q(d,C(10));}e=BO(b,d);if(B3(e,Bg(c,C(2))))d=Bg(d,C(10));return d;}
function Ly(b,c){var d,e;EU();d=C(1);while(Bq(d,c)){d=Q(d,C(10));}e=BO(b,d);if(Cc(S(d,e),Bg(c,C(2))))d=Bg(d,C(10));return d;}
function Gc(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;EU();e=H(b,C(65535));f=H(T(b,16),C(65535));g=H(T(b,32),C(65535));h=H(T(b,48),C(65535));i=H(c,C(65535));j=H(T(c,16),C(65535));k=H(T(c,32),C(65535));l=H(T(c,48),C(65535));m=L(L(Q(k,e),Q(j,f)),Q(i,g));n=L(L(L(Q(l,e),Q(k,f)),Q(j,g)),Q(i,h));o=L(L(Q(l,f),Q(k,g)),Q(j,h));p=L(Q(l,g),Q(k,h));q=Q(l,h);r=L(L(U(q,32+d|0),U(p,16+d|0)),U(o,d));s=d>16?L(r,U(n,d-16|0)):L(r,T(n,16-d|0));s=L(s,T(m,32-d|0));return s;}
function RW(){var b,c,d,e,f,g,h,i,j,k,l;Za=VJ(660);Zb=W(660);b=F(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=Za.data;g=d+330|0;f[g]=Ee(e,C(80));Zb.data[g]=c;e=Ee(e,C(10));h=Hk(e,C(10));while(Bq(e,b)&&X(H(e,F(0, 2147483648)),M)){e=U(e,1);c=c+1|0;h=U(h,1);}e=L(e,Bg(h,C(10)));d=d+1|0;}i=F(3435973836, 214748364);j=1023;d=0;while(d<330){k=0;e=b;while(Cc(e,i)){e=Z(e,1);k=k+1|0;j=j+(-1)|0;}h=Q(e,C(10));if(k<=0)b=h;else{l=H(b,C((1<<k)-1|0));b=L(h,Z(Q(l,C(10)),k));}f=Za.data;g=(330-d|0)-1|0;f[g]=Ee(b,C(80));Zb.data[g]
=j;d=d+1|0;}}
var Hs=E();
function H9(b){var c,d,e;c=VA(b.M());d=b.Z();while(d.W()){e=d.N();if(BH(e,Ck))c.bV(Gh(e));else if(!BH(e,CI))c.bV(e);else c.bV(H9(e));}return c;}
function Gh(b){var c,d,e,f,g,h;c=UM(b.M());d=(b.gg()).Z();while(d.W()){e=d.N();f=e.bZ();if(BH(f,Ck)){g=f;c.bw(e.bz(),Gh(g));}else if(!BH(f,CI))c.bw(e.bz(),f);else{h=f;c.bw(e.bz(),H9(h));}}return c;}
var KH=E(C4);
var BS=E(Ch);
var Xy=null;var XA=null;var Xz=null;var XY=null;var XX=null;var XV=null;var XW=null;var Zc=null;function Bs(){Bs=R(BS);Q5();}
function CK(a,b){var c=new BS();LH(c,a,b);return c;}
function FF(){Bs();return Zc.c3();}
function LH(a,b,c){Bs();Em(a,b,c);}
function GE(){Bs();return B5(BS,[Xy,XA,Xz,XY,XX,XV,XW]);}
function Q5(){Xy=CK(D(116),0);XA=CK(D(117),1);Xz=CK(D(118),2);XY=CK(D(119),3);XX=CK(D(120),4);XV=CK(D(121),5);XW=CK(D(122),6);Zc=GE();}
function Lm(){var a=this;B.call(a);a.Q=null;a.fi=null;a.fT=null;a.fn=null;a.ex=null;a.eC=null;}
function UV(a){var b=new Lm();RX(b,a);return b;}
function RX(a,b){var c;J(a);a.Q=b;c=b.exports.memory.buffer;a.fi=new $rt_globals.Int8Array(c);a.fT=new $rt_globals.Int16Array(c);a.fn=new $rt_globals.Int32Array(c);a.ex=new $rt_globals.Float32Array(c);a.eC=new $rt_globals.Float64Array(c);}
function OD(a,b){return Vc(a,b);}
function My(a,b,c){return Nb(Js(a,b,c));}
function Js(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=c.data;switch(d.length){case 0:return a.Q.exports[$rt_ustr(b)]();case 1:e=a.Q;f=O(d[0]);return e.exports[$rt_ustr(b)](f);case 2:e=a.Q;f=O(d[0]);g=O(d[1]);return e.exports[$rt_ustr(b)](f,g);case 3:e=a.Q;f=O(d[0]);g=O(d[1]);h=O(d[2]);return e.exports[$rt_ustr(b)](f,g,h);case 4:e=a.Q;f=O(d[0]);g=O(d[1]);h=O(d[2]);i=O(d[3]);return e.exports[$rt_ustr(b)](f,g,h,i);case 5:e=a.Q;f=O(d[0]);g=O(d[1]);h=O(d[2]);i=O(d[3]);j=O(d[4]);return e.exports[$rt_ustr(b)](f,g,h,i,j);case 6:e
=a.Q;f=O(d[0]);g=O(d[1]);h=O(d[2]);i=O(d[3]);j=O(d[4]);k=O(d[5]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k);case 7:e=a.Q;f=O(d[0]);g=O(d[1]);h=O(d[2]);i=O(d[3]);j=O(d[4]);k=O(d[5]);l=O(d[6]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l);case 8:e=a.Q;f=O(d[0]);g=O(d[1]);h=O(d[2]);i=O(d[3]);j=O(d[4]);k=O(d[5]);l=O(d[6]);m=O(d[7]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l,m);case 9:e=a.Q;f=O(d[0]);g=O(d[1]);h=O(d[2]);i=O(d[3]);j=O(d[4]);k=O(d[5]);l=O(d[6]);m=O(d[7]);n=O(d[8]);return e.exports[$rt_ustr(b)](f,g,
h,i,j,k,l,m,n);default:}return null;}
function O(b){return OY(b);}
function IV(){var a=this;B.call(a);a.e9=null;a.gd=0;}
function PY(a){var b=new IV();PU(b,a);return b;}
function PU(a,b){J(a);a.e9=b;}
var IT=E(BK);
function C5(){B.call(this);this.dQ=null;}
function US(a){var b=new C5();Pr(b,a);return b;}
function Pr(a,b){J(a);a.dQ=b;}
var Jl=E(BK);
var J_=E(V);
function V4(){var a=new J_();Sg(a);return a;}
function Sg(a){BE(a);}
var Co=E(Ch);
var XQ=null;var YS=null;var XR=null;var Zd=null;function D2(){D2=R(Co);Pm();}
function JG(a,b){var c=new Co();KW(c,a,b);return c;}
function KW(a,b,c){D2();Em(a,b,c);}
function IJ(){D2();return B5(Co,[XQ,YS,XR]);}
function Pm(){XQ=JG(D(123),0);YS=JG(D(124),1);XR=JG(D(125),2);Zd=IJ();}
var Jh=E();
function VB(){var a=new Jh();LZ(a);return a;}
function LZ(a){J(a);}
function Lh(){B.call(this);this.fX=null;}
function VE(a){var b=new Lh();OR(b,a);return b;}
function OR(a,b){J(a);a.fX=b;}
function Sw(a,b){Mv(a.fX,b);}
function R9(a,b){a.d4(b);}
var G0=E();
function MN(b){return b!==null?b.j():null;}
function Qc(b){return b!==null?b.g():0;}
function QE(b){return Qc(b)?0:1;}
$rt_packages([-1,"dev",0,"webfx",1,"platform",2,"webassembly",3,"spi",2,"json",5,"spi"]);
$rt_metadata([B,0,0,[],0,3,0,0,["jZ",WB(CS),"ki",WB(DO),"b9",WB(PG),"A",WC(Mg),"j",WB(ON),"jd",WB(DA),"c3",WB(TU)],BM,0,B,[],0,3,0,0,["ky",WF(Iv),"cK",WB(QL),"de",WB(PS),"kp",WB(PX)],Ca,0,BM,[],0,3,0,0,["b",WB(Fl),"m",WC(GO)],V,0,Ca,[],0,3,0,0,["b",WB(BE),"m",WC(C0)],B1,0,V,[],0,3,0,0,["b",WB(Iy),"m",WC(Cx)],DP,0,B,[],3,3,0,0,["bn",WC(P8),"g0",WC(OQ),"g3",WC(RI),"gP",WC(Sf)],Gg,0,B,[DP],3,3,0,0,["bn",WC(P8),"g0",WC(OQ),"g3",WC(RI),"gP",WC(Sf)],Fy,0,B,[DP],3,3,0,0,["bn",WC(P8),"g0",WC(OQ),"g3",WC(RI),"gP",WC(Sf),
"eG",WB(SQ)],Dg,"JsonProvider",6,B,[Gg,Fy],3,3,0,0,["bn",WC(P8),"g0",WC(OQ),"g3",WC(RI),"gP",WC(Sf),"eG",WB(SQ),"hI",WB(Tp)],Dc,0,B,[Dg],3,3,0,0,["bn",WC(P8),"g0",WC(OQ),"g3",WC(RI),"gP",WC(Sf),"eG",WB(SQ),"hI",WB(Tp)],Hz,0,B,[],0,3,0,0,["jh",WD(Q0),"im",WB(Qb),"ee",WC(Qk),"iR",WC(Q$),"gG",WC(Ub)],BI,0,B,[],3,3,0,0,0,Bc,0,B,[BI],1,3,0,0,["b",WB(Bm)],Bn,0,B,[],3,3,0,0,0,CV,0,Bc,[Bn],0,3,0,B2,["by",WC(Jj),"V",WB(NF),"j",WB(Sk)],Jx,0,Ca,[],0,3,0,0,["b",WB(SW)],DQ,0,B,[],3,3,0,0,0,Gl,0,B,[DQ],3,3,0,0,["bu",WC(M3)],Cm,
0,B,[],0,0,0,PH,0,CE,0,B,[Dc],3,3,0,0,["bn",WC(P8),"g0",WC(OQ),"g3",WC(RI),"gP",WC(Sf),"eG",WB(SQ),"hI",WB(Tp)],Fg,0,B,[],32,0,0,We,0,FK,0,B,[],4,3,0,B4,0,Gn,0,Bc,[Bn],0,3,0,Ct,["k$",WC(JD),"V",WB(ME),"j",WB(Q7)],Ck,0,B,[],3,3,0,0,0,E7,0,B,[],3,3,0,0,0,Cl,0,B,[E7],0,3,0,Gf,["m",WC(Ib),"jn",WD(Fz),"hg",WB(L5)],BD,0,B,[],3,3,0,0,0,Fu,0,B,[BD],3,3,0,0,0,Kb,0,B,[Fu],1,3,0,0,["kz",WC(TK),"kk",WB(O0)],Dw,0,B,[],3,3,0,0,0,H7,0,B,[Dw],0,3,0,0,["b",WB(Qy),"bp",WB(Oa),"iT",WB(I$)],Bl,0,Bc,[Bn,BI],0,3,0,Be,["m",WC(I1),
"cs",WD(FB),"hC",WD(Iu),"k6",WE(JK),"kd",WD(GW),"j1",WD(LP),"dw",WB(PJ),"fA",WB(Q1),"bq",WC(O1),"bB",WC(MY),"bl",WB(St),"cS",WC(QF),"O",WC(L_),"eJ",WB(Qz),"cz",WB(TO),"cL",WC(PF),"iP",WB(Q4),"bG",WB(NB),"dm",WC(Nc),"A",WC(Pw),"hs",WC(TJ),"z",WC(Ta),"bt",WC(Nf),"fE",WC(RC),"jR",WB(BC),"eb",WB(M1)],Gy,0,V,[],0,3,0,0,["m",WC(PE)],Gs,0,B,[],32,0,0,Uh,0,G9,0,B,[BD],1,3,0,0,0,FH,0,B,[],3,3,0,0,0,FS,0,B,[FH],3,3,0,0,["h4",WC(QB)],DC,0,B,[FS],3,3,0,0,["h4",WC(QB)],CN,0,B,[DC],1,0,0,0,["h4",WC(QB),"b",WB(Fx),"kt",WD(Fi),
"kg",WD(Ed),"fG",WD(I8)],CA,0,CN,[],0,0,0,Dx,["h4",WC(QB),"b",WB(En),"hQ",WB(SL),"ie",WC(N1),"bN",WC(Iz),"d0",WC(GN),"c$",WC(TX),"j",WB(Sd),"iX",WD(Oz)],Ek,0,CA,[],1,0,0,0,["h4",WC(QB),"b",WB(LJ)],Dp,0,B,[],3,3,0,0,0,C2,0,BM,[],0,3,0,0,["m",WC(Ji),"cM",WC(HS)],C4,0,C2,[],0,3,0,0,["m",WC(GX)],Dz,0,B,[],3,3,0,0,["gU",WD(T5),"i2",WC(OO),"ib",WC(Nm),"eh",WC(Sh),"ea",WD(Rx)],Da,0,B,[Dz,Dc],3,3,0,0,["gU",WD(T5),"i2",WC(OO),"ib",WC(Nm),"eh",WC(Sh),"ea",WD(Rx),"bn",WC(P8),"g0",WC(OQ),"g3",WC(RI),"gP",WC(Sf),"eG",WB(SQ),
"hI",WB(Tp),"kJ",WC(LQ),"dB",WC(Se)],FC,0,B,[Dz],3,3,0,0,["gU",WD(T5),"i2",WC(OO),"ib",WC(Nm),"eh",WC(Sh),"ea",WD(Rx)],De,0,B,[Da,CE,FC],3,3,0,0,["gU",WD(T5),"i2",WC(OO),"ib",WC(Nm),"eh",WC(Sh),"ea",WD(Rx),"bn",WC(P8),"g0",WC(OQ),"g3",WC(RI),"gP",WC(Sf),"eG",WB(SQ),"hI",WB(Tp),"kJ",WC(LQ),"dB",WC(Se),"i4",WC(TR),"iv",WD(L9)],Ez,0,B,[BD],3,0,0,0,0,La,0,B1,[],0,3,0,0,["b",WB(QV)]]);
$rt_metadata([HB,0,B,[DQ],0,3,0,0,["i$",WC(PN),"eZ",WC(Os),"kY",WC(K7)],FL,0,B,[],3,3,0,0,0,HA,0,B,[FL],0,3,0,0,["i$",WC(Ty),"ha",WC(Od)],Eo,0,B,[],4,3,0,S8,0,Kz,0,B,[],4,3,0,0,0,CM,0,B,[],0,3,0,0,["b",WB(FV)],FZ,0,CM,[],0,3,0,0,["jX",function(b,c,d,e,f,g,h,i,j,k,l,m,n){Nv(this,b,c,d,e,f,g,h,i,j,k,l,m,n);},"kj",function(b,c,d,e,f,g,h,i,j,k,l,m,n){Gz(this,b,c,d,e,f,g,h,i,j,k,l,m,n);}],Gj,0,B,[],3,3,0,0,0,EY,0,B,[Gj],3,3,0,0,0,Fn,0,B,[],3,3,0,0,0,C1,0,B,[EY,Fn],1,3,0,0,["b",WB(Ew)],D8,0,C1,[],1,3,0,0,["b",WB(LR)],Fc,
0,D8,[],0,3,0,Tc,["cv",WE(Tk)],BK,0,B,[BD],1,3,0,0,0,Hj,0,BK,[],1,3,0,0,0,I9,0,B,[],4,0,0,0,["jx",WD(KX),"km",WB(KO),"kE",WB(Jm)],CZ,0,B,[BI,Dp],0,0,0,0,["b",WB(Fd),"by",WC(EX),"m",WC(Lf),"kU",WC(Jc),"kM",WC(K2),"k_",WC(E$),"cI",WD(FI),"kR",WC(HZ),"eO",WD(Np),"gQ",WE(SJ),"j3",WC(KI),"e2",WD(LL),"ii",WE(Mq),"j8",WC(JY),"et",WD(Jg),"jk",WC(Ll),"fP",WD(K9),"fq",WD(JL),"bP",WC(E_),"j",WB(EO),"g",WB(KA),"o",WC(G4),"kq",WE(Ic),"ep",WF(GZ),"kA",WE(KT),"eY",WF(G6),"eT",WF(Kl),"eF",WC(Ke)],Dn,0,B,[],3,3,0,0,0,GQ,0,CZ,
[Dn],0,3,0,0,["by",WC(Tq),"b",WB(S3),"m",WC(Mx),"bf",WC(P),"C",WC(Mw),"jt",WC(Bj),"iy",WC(RG),"hR",WC(PK),"r",WC(C9),"eK",WE(PA),"fO",WE(Ss),"hZ",WD(QU),"hA",WD(SU),"hM",WF(M_),"jb",WF(Po),"hu",WD(Tv),"iD",WD(NE),"hl",WD(TG),"eF",WC(TN),"eT",WF(Qm),"eY",WF(TA),"ep",WF(Ok),"o",WC(Rq),"g",WB(Of),"j",WB(Bb),"bP",WC(TS),"fq",WD(MB),"fP",WD(L4),"et",WD(Qh),"e2",WD(O7),"cI",WD(T1)],F_,0,B,[],4,3,0,T7,0,Kj,0,V,[],0,3,0,0,["b",WB(TH)],HN,0,C2,[],0,3,0,0,["cM",WC(Mz)],DY,0,B,[Ck],1,3,0,0,["b",WB(Jk),"j",WB(Om)],CQ,0,
B,[],3,3,0,0,0,Es,0,DY,[CQ,BI],0,3,0,0,["du",WC(RK),"b",WB(Jt),"by",WC(EC),"j6",WD(K4),"c9",WC(RU),"kw",WC(G_),"kD",WE(Dl),"kT",WB(Du),"bw",WD(M0),"d7",WD(Rv),"b6",WE(OX),"hG",WC(Ro),"cA",WB(Pn),"kH",WC(H8),"M",WB(Pi)],Ht,0,Es,[Ck],0,3,0,0,["b",WB(NI),"by",WC(O$),"du",WC(Ox),"c9",WC(Mt),"b6",WE(Tw),"bw",WD(R_),"d7",WD(Tx),"d3",WC(Mh),"gg",WB(Rw),"i_",WB(PC),"gK",WC(Pt),"iz",WC(MA)],D7,0,B,[],3,3,0,0,["hF",WC(MS)],C6,0,B,[Dc,D7],3,3,0,0,["bn",WC(P8),"g0",WC(OQ),"g3",WC(RI),"gP",WC(Sf),"eG",WB(SQ),"hI",WB(Tp),
"hF",WC(MS),"iY",WC(NP)],EN,0,B,[D7],3,3,0,0,["hF",WC(MS)],Do,0,B,[C6,CE,EN],3,3,0,0,["bn",WC(P8),"g0",WC(OQ),"g3",WC(RI),"gP",WC(Sf),"eG",WB(SQ),"hI",WB(Tp),"hF",WC(MS),"iY",WC(NP)],DK,0,B,[CE],3,3,0,0,["bn",WC(P8),"g0",WC(OQ),"g3",WC(RI),"gP",WC(Sf),"eG",WB(SQ),"hI",WB(Tp),"dL",WB(TD),"cj",WC(R0),"dT",WC(TQ),"cE",WC(MX)],El,0,B,[Do,DK],1,3,0,0,["bn",WC(P8),"g0",WC(OQ),"g3",WC(RI),"gP",WC(Sf),"eG",WB(SQ),"hI",WB(Tp),"hF",WC(MS),"iY",WC(NP),"dL",WB(TD),"cj",WC(R0),"dT",WC(TQ),"cE",WC(MX),"ij",WC(I3),"dj",WC(Qd),
"M",WB(MZ)],H1,0,CZ,[Dn],0,3,0,0,["b",WB(R8),"gE",WC(PQ),"ih",WD(PR),"j",WB(OB),"bP",WC(OS),"cI",WD(Mr)],D1,0,B,[],3,3,0,0,0,Ei,0,B,[D1],0,0,0,0,["gA",WD(Lk),"gr",WC(Op),"hY",WB(Nn)],CY,0,B,[],1,3,0,0,["by",WC(FM),"k0",WB(Db),"jj",WC(Kf),"jU",WB(Io),"j9",WB(Cd),"jT",WB(Cv)],DJ,0,B,[],3,3,0,0,0,D9,0,B,[DJ],3,3,0,0,0,CW,0,B,[],0,0,0,0,["cw",WC(EL),"W",WB(OJ),"kO",WB(Lq),"jm",WB(Gd)],CR,0,B,[],3,3,0,0,0,J$,0,CW,[CR],0,0,0,0,["cw",WC(QJ),"h2",WB(Or),"N",WB(Sq)],ER,0,B,[],3,3,0,0,0,HV,0,B,[ER],4,0,0,0,["d2",WC(Ma),
"g1",WC(QI)],EB,0,B,[],3,3,0,0,0,Et,0,B,[EB,CQ],0,0,0,0,["k4",WD(LI),"bz",WB(SC),"bZ",WB(Ts)],C_,0,Et,[],0,0,0,0,["hz",WD(Id)],F0,0,C_,[],4,0,0,0,["hz",WD(Rr)],CX,0,C4,[],0,3,0,0,["m",WC(F3)],Km,0,CX,[],0,3,0,0,["m",WC(Pc)],Fk,0,Ca,[],0,3,0,0,0]);
$rt_metadata([E8,0,B,[],3,3,0,0,0,E6,0,B,[BD],3,0,0,0,0,Ga,0,B,[],3,3,0,0,0,HO,0,B,[Ga],0,3,0,0,["b",WB(N_)],Hr,0,B,[CR],0,0,0,0,["j0",WC(Oo),"W",WB(MW),"N",WB(Rp)],FA,0,B,[],32,0,0,V2,0,Ej,0,V,[],0,3,0,0,["b",WB(GJ)],LC,0,Ej,[],0,3,0,0,["b",WB(Tb)],He,0,B,[],4,3,0,0,0,JA,0,BK,[],1,3,0,0,0,Jz,0,B,[CR],0,0,0,0,["kV",WC(N5),"W",WB(SV),"N",WB(NT)],HW,0,B,[],0,3,0,0,["b",WB(OF)],Ja,0,B,[],4,0,0,0,0,HG,0,CX,[],0,3,0,0,["m",WC(OW)],IX,0,B,[Dw],0,3,0,0,["b",WB(Q_),"bp",WB(L2),"iT",WB(LE)],Ef,0,B,[],3,3,0,0,0,Dd,0,
B,[Ef],3,3,0,0,0,CF,0,B,[Dd],1,3,0,0,["b",WB(F5)],Jd,0,B,[],4,3,0,0,0,Gq,0,Bc,[Bn],0,3,0,Rm,["jv",WC(Ij)],EW,0,B,[],3,3,0,0,0,LF,0,B,[EW],0,3,0,0,["b",WB(Oi)],Gv,0,B,[],3,3,0,0,0,H0,0,B,[],4,3,0,0,0,LN,0,B,[],0,3,0,0,["b",WB(SM),"g6",WB(RL),"bp",WB(Sy),"eL",WC(Nj),"iM",WB(NH)],IO,0,B,[],4,0,0,0,0,DW,0,B,[],3,3,0,0,0,Ce,0,B,[],3,3,0,0,0,G7,0,Ek,[Ce],0,0,0,0,["h4",WC(QB),"jG",WD(PI),"bR",WC(QY),"b_",WC(OH)],Ip,0,B,[Ef],4,3,0,0,["Z",WB(H6)],Ik,0,B,[],4,3,0,0,0,GY,0,B,[DW],0,3,0,0,["kW",WF(Q8),"eg",WB(SP)],J5,0,
B,[],4,3,0,0,0,Lz,0,CN,[],4,3,0,0,["h4",WC(QB),"cM",WC(S0),"bN",WC(Ou)],Dv,0,B,[],1,3,0,0,["kL",WF(KV),"hd",WE(Ko),"jD",WC(Gx),"iA",WC(Th),"k3",WC(KP),"h0",WC(SH),"kC",WE(HM),"jB",WC(GV),"gM",WC(Me)],Ft,0,B,[BD],3,0,0,0,0,JN,0,B,[Ft],0,3,0,0,["kK",WC(Rh),"iG",WD(TF),"j4",WD(N2)],JM,0,B,[Ez],0,3,0,0,["iS",WC(So),"d4",WC(M6),"fY",WC(Sm)],EP,0,B,[BD],3,0,0,0,0,JP,0,B,[EP],0,3,0,0,["jC",WC(L3),"is",WC(P7),"fY",WC(T$)],Dh,0,CM,[],4,0,0,Cz,["b",WB(Hu),"j2",WB(J6),"kX",WD(JQ),"k2",WC(HH)],Kx,0,V,[],0,3,0,0,["b",WB(QK)],D0,
0,CY,[Bn],1,3,0,0,["jc",function(b,c,d,e,f){Hv(this,b,c,d,e,f);},"fz",WE(R5),"jL",WC(Kc),"j$",WB(Fa)],KD,0,D0,[],0,0,0,0,["ju",function(b,c,d,e,f,g,h){MQ(this,b,c,d,e,f,g,h);},"gC",WB(RM)],CI,0,B,[Dd],3,3,0,0,0,DR,0,CF,[CI],1,3,0,0,["b",WB(K5),"Z",WB(QC)],Fe,0,B,[],3,3,0,0,0,DN,0,DR,[CQ,BI,Fe],0,3,0,0,["b",WB(J7),"by",WC(EF),"k8",WC(Pq),"bP",WC(Nh),"eE",WC(Py),"M",WB(N3),"bV",WC(R$),"j",WB(Oh)],FJ,0,DN,[Ce],0,0,0,0,["bR",WC(Ot),"b_",WC(Mf)],Er,0,B,[],3,3,0,0,0]);
$rt_metadata([BU,0,B,[BI],0,3,0,MD,["cs",WD(Lb),"V",WB(Dt)],Ep,0,B,[De,DK],1,3,0,0,["gU",WD(T5),"i2",WC(OO),"ib",WC(Nm),"eh",WC(Sh),"ea",WD(Rx),"bn",WC(P8),"g0",WC(OQ),"g3",WC(RI),"gP",WC(Sf),"eG",WB(SQ),"hI",WB(Tp),"kJ",WC(LQ),"dB",WC(Se),"i4",WC(TR),"iv",WD(L9),"dL",WB(TD),"cj",WC(R0),"dT",WC(TQ),"cE",WC(MX),"b",WB(I4),"hE",WC(Hx),"gF",WB(QW),"hD",WB(Qu),"fs",WB(PZ),"c7",WC(Rn),"gL",WD(Q9),"g9",WB(QM),"j",WB(Te),"gh",WD(N8)],Im,0,B,[],4,3,0,0,0,DG,0,B,[Bn],1,3,0,0,["ko",WD(IE)],Dk,0,B,[],0,3,0,F8,["m",WC(IQ)],B6,
0,B,[BI,Bn],0,3,0,EQ,["ks",WC(Ig),"fy",WB(RJ),"j",WB(Nx),"A",WC(M8)],Cu,0,V,[],0,3,0,0,["b",WB(Fh),"m",WC(Gu)],Jb,0,Cu,[],0,3,0,0,["m",WC(Q2)],LO,0,V,[],0,3,0,0,["b",WB(ML)],JR,0,B,[BD],1,3,0,0,0,DH,0,C1,[],0,3,0,0,["kr",WC(G2)],FW,0,DH,[],0,3,0,0,["kx",WD(Ku),"cv",WE(Nr),"ft",WC(O3)],F9,0,B,[],3,3,0,0,0,Fv,0,B,[Dd],3,3,0,0,0,CU,0,CF,[Fv],1,3,0,0,["b",WB(Fr)],DZ,0,CU,[],0,0,0,0,["k1",WC(IP),"gN",WB(Pj)],Ju,0,DZ,[],4,0,0,0,["cw",WC(Pp),"Z",WB(Rt)],F6,0,B,[Gl,DC],3,3,0,0,["bu",WC(M3),"h4",WC(QB)],G5,0,CA,[F6,
Ce],4,3,0,0,["bu",WC(M3),"h4",WC(QB),"b",WB(RZ),"gn",WB(Ti),"d0",WC(Rz),"bN",WC(Px),"fG",WD(To)],ES,0,B,[],3,3,0,0,0,ED,0,B,[],3,3,0,0,0,Ki,0,B,[ES,ED],0,3,0,0,["j",WB(LW),"gb",WB(N6),"g5",WC(P3),"iq",WB(TI),"cY",WB(RD),"el",WB(Mc)],Lo,0,BK,[],1,3,0,0,0,Cy,0,Bc,[Bn],0,3,0,Jn,["jg",WC(E5),"fh",WC(J3),"A",WC(Na)],Ey,0,B,[D1],3,3,0,0,0,HI,0,B,[],0,3,0,0,0,LD,0,Ep,[],0,3,0,0,["gU",WD(T5),"i2",WC(OO),"ib",WC(Nm),"eh",WC(Sh),"ea",WD(Rx),"bn",WC(P8),"g0",WC(OQ),"g3",WC(RI),"gP",WC(Sf),"eG",WB(SQ),"hI",WB(Tp),"kJ",
WC(LQ),"dB",WC(Se),"i4",WC(TR),"iv",WD(L9),"dL",WB(TD),"cj",WC(R0),"dT",WC(TQ),"cE",WC(MX),"b",WB(OG),"hE",WC(PV),"cm",WB(Sb),"dz",WC(Rj),"i9",WB(QT),"dx",WC(Ra),"bE",WB(SA)],Ff,0,B,[],4,3,0,0,0,DU,0,B,[],0,0,0,Vi,0,Kt,0,CW,[CR],0,0,0,0,["cw",WC(Sl),"N",WB(SY)],Bh,0,Bc,[Bn,BI],0,3,0,Bf,["iO",WE(FR),"m",WC(Lu),"fh",WC(H5),"jN",WD(CJ),"by",WC(HE),"bj",WC(MG),"T",WC(PO),"cU",WC(ST),"gY",WE(NS),"fM",WE(Ml),"L",WD(Sc),"id",WB(T6),"bl",WB(P9),"bC",WB(Sz),"H",WD(SK),"dE",WC(L7),"X",WB(Pf)],BZ,0,B,[Bn],0,3,0,Br,0,DF,
0,B,[],4,3,0,Dj,0,HP,0,B,[Ce],0,0,0,0,["kI",WD(Tf),"bR",WC(Tj),"b_",WC(TC)],Ln,0,B,[DW],0,3,0,0,["jA",WC(Sj),"eg",WB(RH)],Ho,0,B,[BD],1,3,0,0,0,CP,0,B,[CE],1,0,0,0,["g0",WC(OQ),"g3",WC(RI),"gP",WC(Sf),"eG",WB(SQ),"hI",WB(Tp),"d2",WC(EG),"fN",WB(Hh),"cE",WC(KB),"gi",WB(LS),"ge",WC(G1),"gf",WC(II),"bn",WC(JC),"fu",WC(Kg),"j",WB(H3),"bE",WB(MC),"dL",WB(P6),"dx",WC(PM),"cj",WC(Og),"dT",WC(RE)],FX,0,CP,[Do],4,0,0,0,["g0",WC(OQ),"g3",WC(RI),"gP",WC(Sf),"eG",WB(SQ),"hI",WB(Tp),"hF",WC(MS),"iY",WC(NP),"jl",WC(MK),"kb",
WB(Gk),"jH",WC(Li),"M",WB(Ru),"dj",WC(SE)],DD,0,CY,[Bn,Dn,Dp,Gv],1,3,0,0,["hB",WE(GG),"iF",WE(Nq),"e5",WC(LY)],D$,0,DD,[],1,0,0,0,["hB",WE(IR)],KU,0,D$,[],0,0,0,0,["ka",function(b,c,d,e,f,g){T0(this,b,c,d,e,f,g);},"iK",WC(NN)],J0,0,B,[],4,3,0,0,0,FP,0,B,[],4,3,0,0,0,J1,0,B,[BD],1,3,0,0,0,CD,0,B,[],0,0,0,Bz,0,D3,0,B,[DJ],0,3,0,0,["b",WB(GB),"fe",WC(Hm),"dl",WC(Rc),"dt",WC(P0)],B$,0,B,[],4,3,0,Gw,0,Cp,0,Bc,[Bn],0,3,0,Kd,["fh",WC(Ks),"V",WB(Pg),"j",WB(Ns),"A",WC(Uc),"gc",WB(Ng),"f1",WB(OU)],Jp,0,B,[],0,0,0,0,0,Lg,
0,CU,[],0,0,0,0,["cw",WC(PD),"M",WB(SS),"Z",WB(SD)]]);
$rt_metadata([LT,0,B,[],4,0,0,0,["b",WB(M7)],C$,"WebAssemblyProvider",4,B,[],3,3,0,0,["i8",WD(TB)],Fb,0,B,[C$],4,3,0,0,["i8",WD(TB),"b",WB(Ua),"hU",WB(TP),"hH",WC(Nt)],DS,0,D3,[D9],1,3,0,0,["b",WB(JV),"fe",WC(NJ),"jp",WC(Ix),"dg",WC(NM)],JE,0,DS,[],0,3,0,0,["b",WB(On),"i5",WB(L0)],F2,0,B,[],0,3,0,0,0,Kq,0,V,[],0,3,0,0,["b",WB(LX)],JO,0,B,[Er],0,3,0,0,["kl",WC(Sp),"c5",WC(Qp),"jr",WC(IA)],GU,0,B,[],0,0,0,0,0,IH,0,B,[],0,0,0,0,0,Gr,0,CP,[De],4,3,0,0,["gU",WD(T5),"i2",WC(OO),"ib",WC(Nm),"eh",WC(Sh),"ea",WD(Rx),
"g0",WC(OQ),"g3",WC(RI),"gP",WC(Sf),"eG",WB(SQ),"hI",WB(Tp),"kJ",WC(LQ),"dB",WC(Se),"i4",WC(TR),"iv",WD(L9),"b",WB(NU),"d2",WC(Lc),"kP",WC(KE),"jq",WB(G3),"kf",WD(LA),"j",WB(Tm),"fu",WC(Pl),"bn",WC(Ow),"gf",WC(Mi),"ge",WC(S5),"gi",WB(Ms),"cE",WC(TW),"fN",WB(Pz),"gh",WD(Ue),"c7",WC(Tl),"fs",WB(O4)],Cb,0,B,[BI,Bn,Dp],0,3,0,Gp,["iJ",WC(Hb),"iO",WE(LU),"o",WC(NR),"g",WB(Re),"bW",WB(Tg),"e7",WC(Qo),"eH",WD(Ny),"c_",WC(Qn),"iU",WD(NW),"iH",WC(SF),"bF",WD(MH),"ho",WC(SN),"j",WB(OK),"ej",WB(Tn),"A",WC(R7),"eR",WC(Sn),
"b9",WB(NK)],LV,0,V,[],0,3,0,0,["b",WB(Oc)],Ev,0,Dv,[],1,3,0,0,["hd",WE(IF),"hx",WD(NY)],Je,0,Ev,[],0,3,0,0,["jF",WC(Qq),"gT",function(b,c,d,e,f,g,h){return TM(this,b,c,d,e,f,g,h);}],FN,0,B,[BD],3,3,0,0,0,IZ,0,B,[FN],0,3,0,0,["kc",WC(Nl),"ip",WC(Ne),"jS",WC(H$),"jE",WC(M2)],BQ,0,Cu,[],0,3,0,0,["b",WB(ND),"m",WC(B7)],Gm,0,DG,[],0,3,0,QX,["ia",WB(SI)],LK,0,B,[D9],4,3,0,0,["b",WB(N$),"dl",WC(Nu),"dg",WC(Oq),"dt",WC(PP)],Ha,0,V,[],0,3,0,0,["b",WB(Qt),"m",WC(N4)],GM,0,V,[],0,3,0,0,["m",WC(QD),"b",WB(O9)],KK,0,B,
[F9],0,0,0,0,["kF",WC(SB),"bu",WC(Tz),"hn",WC(Td)],Ch,0,B,[Bn,BI],1,3,0,0,["cs",WD(Em),"jo",WB(Bd)],IL,0,B,[],0,0,0,0,["b",WB(TY)],KQ,0,B,[],4,3,0,0,0,E0,0,Bc,[Bn],0,3,0,Su,["js",WC(JB)],BL,0,Ch,[],12,3,0,Eu,0,FY,0,B,[],0,3,0,Fp,["m",WC(Hg),"hb",WC(MV),"iQ",WD(SG)],EH,0,B,[BI],0,3,0,0,["kQ",WD(S$),"f4",WB(OP),"de",WB(PB),"gv",WB(O5)],GD,0,B,[Ce],0,0,0,0,["j7",WC(L$),"bR",WC(S2),"b_",WC(Qe)],J9,0,BM,[],0,3,0,0,["m",WC(OL)],Ia,0,El,[],4,3,0,0,["bn",WC(P8),"g0",WC(OQ),"g3",WC(RI),"gP",WC(Sf),"eG",WB(SQ),"hI",WB(Tp),
"hF",WC(MS),"iY",WC(NP),"dL",WB(TD),"cj",WC(R0),"dT",WC(TQ),"cE",WC(MX),"ij",WC(RO),"fR",WB(QR),"hP",WC(QQ)],IS,0,B,[Er],0,3,0,0,["b",WB(L6),"c5",WC(Oj),"k9",WC(Jr)],KC,0,V,[],0,3,0,0,["b",WB(Rf)],JZ,0,B,[],4,3,0,0,0,HU,0,B,[],0,3,0,0,0,Is,0,B,[],4,3,0,0,0,Le,0,Ei,[Ey],4,0,0,0,["gA",WD(No),"hr",WC(QA)],Eb,0,B,[],0,3,0,BR,["jJ",WD(IW),"gw",WB(MT),"dn",WB(RN),"iu",WB(TL),"h_",WB(RS),"f5",WB(R3),"g",WB(QH)],DX,0,B,[],4,3,0,EU,0,Hs,0,B,[],4,0,0,0,0,KH,0,C4,[],0,3,0,0,0,BS,0,Ch,[],12,3,0,Bs,0,Lm,0,B,[E8],4,0,0,0,
["d2",WC(RX),"gz",WC(OD),"eu",WD(My),"jw",WD(Js)],IV,0,B,[],0,3,0,0,["iJ",WC(PU)],IT,0,BK,[],1,3,0,0,0,C5,0,B,[],0,0,0,0,["cM",WC(Pr)],Jl,0,BK,[],1,3,0,0,0,J_,0,V,[],0,3,0,0,["b",WB(Sg)]]);
$rt_metadata([Co,0,Ch,[],12,3,0,D2,0,Jh,0,B,[],0,3,0,0,["b",WB(LZ)],Lh,0,B,[E6],0,3,0,0,["iS",WC(OR),"d4",WC(Sw),"fY",WC(R9)],G0,0,B,[],4,3,0,0,0]);
function $rt_array(cls,data){this.k=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","<java_object>@",",","null","0",".","Null pointer","JSON does not allow non-finite numbers","JSON does not allow non-finite numbers.","\"\"","\\t","\\n","\\f","\\r","000","\\u","\\b","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","String is null or empty","Illegal radix: ",
"Result is already complete","black","white, rgb(255, 204, 0) 15%, rgb(135, 31, 19) 33%, rgb(0, 0, 153) 67%, rgb(0, 102, 255) 85%, white","blueviolet, orange, brown, black","red, red","white, rgb(0, 102, 255) 18% , rgb(51, 51, 51) 50%, rgb(229, 0, 178) 85%, white","red, yellow 18%, green 29%, #1E90FF 44%, red","black, red 17%, yellow 83%, white","red, orange, green, blue, yellow, white","main","Zero length BigInteger","Radix out of range","Negative bit address","Negative exponent","BigInteger divide by zero",
"No null success mapper accepted","No null failure mapper accepted","No null handler accepted","Future{cause=","Future{unresolved}","Future{result=null}","Future{result=","}","BIG_ENDIAN","LITTLE_ENDIAN","Index out of bounds","Cannot instantiate any provider for service ","(this Map)",", ","New position "," is outside of range [0;","Replacement preconditions do not hold","Action must be non-null","2","10","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","[]",
"(this Collection)","OFF","SEVERE","WARNING","INFO","CONFIG","FINE","FINER","FINEST","ALL","IGNORE","REPLACE","REPORT","false","true","javaClass@","Either src or dest is null","Scale out of range.","Infinite or NaN","Infinity or NaN","Division by zero","Rounding necessary","Overflow","Underflow","number","object","string","boolean","The last char in dst ","Using default built-in JSON factory which is not interoperable with the underlying platform! Be sure you haven\'t forgot to call Json.registerProvider().",
"power of ten too big","classes.wasm","cy","width","height","placeIndex","frameIndex","wasm","computeLinePixelIterations","initAndComputeLinePixelIterations","UTF-8","Invalid rounding mode","UP","DOWN","CEILING","FLOOR","HALF_UP","HALF_DOWN","HALF_EVEN","UNNECESSARY","global","","STRING","NUMBER","BOOLEAN","OBJECT","ARRAY","NULL","UNDEFINED","RETURN_NULL","TRACE_AND_RETURN_NULL","THROW_EXCEPTION"]);
Cb.prototype.toString=function(){return $rt_ustr(this);};
Cb.prototype.valueOf=Cb.prototype.toString;B.prototype.toString=function(){return $rt_ustr(ON(this));};
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
=Long_or;var H=Long_and;var Kh=Long_xor;var U=Long_shl;var Z=Long_shr;var T=Long_shru;var Ds=Long_compare;var X=Long_eq;var BG=Long_ne;var Bx=Long_lt;var Bq=Long_le;var Cc=Long_gt;var B3=Long_ge;var Ze=Long_not;var Bt=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new $rt_globals.Error("Thread already started");}if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof $rt_globals.Error){throw result;}};this.run();};TeaVMThread.prototype.resume
=function(){if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending()
{var thread=$rt_nativeThread();return thread!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new $rt_globals.Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread
=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer(){throw new $rt_globals.Error("Invalid recorded state");}main=$rt_mainStarter(VQ);
main.javaException=$rt_javaException;
(function(){var c;c=Kb.prototype;c.getLength=c.kk;c.get=c.kz;c=JN.prototype;c.apply=c.j4;c=JM.prototype;c.handle=c.fY;c=JP.prototype;c.handle=c.fY;c=IZ.prototype;c.handleEvent=c.jE;c=Lh.prototype;c.handle=c.fY;})();
})(this);

main()