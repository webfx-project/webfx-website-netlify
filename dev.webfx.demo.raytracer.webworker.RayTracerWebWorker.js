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
{superclass.call(this);};}function $rt_setCloneMethod(target, f){target.dV=f;}
function $rt_cls(cls){return G4(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Vc(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.h.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return Yk;}
function $rt_throwableMessage(t){return P0(t);}
function $rt_throwableCause(t){return P6(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(V8());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return By();}
function $rt_setThread(t){return DB(t);}
function $rt_createException(message){return Yl(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var G=$rt_throw;var CN=$rt_compare;var Ym=$rt_nullCheck;var F=$rt_cls;var X=$rt_createArray;var Bj=$rt_isInstance;var Qj=$rt_nativeThread;var W3=$rt_suspending;var Xg=$rt_resuming;var Vk=$rt_invalidPointer;var D=$rt_s;var L=$rt_eraseClinit;var EE=$rt_imul;var Z=$rt_wrapException;var Yn=$rt_checkBounds;var Yo=$rt_checkUpperBound;var Yp=$rt_checkLowerBound;var Yq=$rt_wrapFunction0;var Yr=$rt_wrapFunction1;var Ys=$rt_wrapFunction2;var Yt=$rt_wrapFunction3;var Yu=$rt_wrapFunction4;var C=$rt_classWithoutFields;var C7
=$rt_createArrayFromData;var Yv=$rt_createCharArrayFromData;var Yw=$rt_createByteArrayFromData;var Yx=$rt_createShortArrayFromData;var V0=$rt_createIntArrayFromData;var Yy=$rt_createBooleanArrayFromData;var Yz=$rt_createFloatArrayFromData;var YA=$rt_createDoubleArrayFromData;var O_=$rt_createLongArrayFromData;var YB=$rt_createBooleanArray;var CZ=$rt_createByteArray;var YC=$rt_createShortArray;var BH=$rt_createCharArray;var DH=$rt_createIntArray;var Xi=$rt_createLongArray;var YD=$rt_createFloatArray;var YE=$rt_createDoubleArray;var CN
=$rt_compare;var YF=$rt_castToClass;var YG=$rt_castToInterface;var YH=Long_toNumber;var H=Long_fromInt;var YI=Long_fromNumber;var T=Long_create;var BK=Long_ZERO;var YJ=Long_hi;var DS=Long_lo;
function B(){this.e=null;this.$id$=0;}
function P4(){var a=new B();E(a);return a;}
function DN(b){var c;if(b.e===null)Ee(b);if(b.e.t===null)b.e.t=By();else if(b.e.t!==By())G(JY(D(0)));c=b.e;c.w=c.w+1|0;}
function Bh(b){var c,d;if(!Cv(b)&&b.e.t===By()){c=b.e;d=c.w-1|0;c.w=d;if(!d)b.e.t=null;Cv(b);return;}G(Qb());}
function VT(b){Si(b,1);}
function Si(b,c){var d,$p,$z;$p=0;if(Xg()){var $T=Qj();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.e===null)Ee(b);if(b.e.t===null)b.e.t=By();if(b.e.t===By()){d=b.e;d.w=d.w+c|0;return;}$p=1;case 1:T9(b,c);if(W3()){break _;}return;default:Vk();}}Qj().s(b,c,d,$p);}
function Ee(b){b.e=XK();}
function T9(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.bi=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.hj=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=Yd(callback);return thread.suspend(function(){try{X$(b,c,callback);}catch($e){callback.hj($rt_exception($e));}});}
function X$(b,c,d){var e,f,g;e=By();if(b.e===null){Ee(b);DB(e);f=b.e;f.w=f.w+c|0;d.bi(null);return;}if(b.e.t===null){b.e.t=e;DB(e);f=b.e;f.w=f.w+c|0;d.bi(null);return;}g=b.e;if(g.L===null)g.L=L4();Mi(g.L,XD(e,b,c,d));}
function VY(b){MF(b,1);}
function MF(b,c){var d;if(!Cv(b)&&b.e.t===By()){d=b.e;d.w=d.w-c|0;if(d.w>0)return;d.t=null;if(d.L!==null&&!DM(d.L))L9(WT(b));else Cv(b);return;}G(Qb());}
function QA(b){var c,d,e;if(!Cv(b)&&b.e.t===null){c=b.e;if(c.L!==null&&!DM(c.L)){d=c.L;e=N6(d);c.L=null;e.dS();}return;}}
function Cv(a){var b,c;b=a.e;if(b===null)return 1;a:{b:{if(b.t===null){if(b.L!==null){c=b.L;if(!DM(c))break b;}if(b.eq===null)break a;c=b.eq;if(DM(c))break a;}}return 0;}KS(a);return 1;}
function KS(a){a.e=null;}
function E(a){}
function EL(a){return G4(a.constructor);}
function PP(a){return Dj(a);}
function Mc(a,b){return a!==b?0:1;}
function OZ(a){var b,c;b=FU(Dj(a));c=M();K(K(c,D(1)),b);return N(c);}
function Dj(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function UF(a){var b,c,d;if(!Bj(a,Ct)){b=a;if(b.constructor.$meta.item===null)G(Vr());}c=Mh(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function Uk(b){QA(b);}
function MR(b,c,d,e){var f;DB(b);c.e.t=b;f=c.e;f.w=f.w+d|0;e.bi(null);}
function Bq(){var a=this;B.call(a);a.dc=null;a.cD=null;a.cj=0;a.cF=0;}
function YK(a,b,c,d){var e=new Bq();HX(e,a,b,c,d);return e;}
function YL(){var a=new Bq();J1(a);return a;}
function YM(a){var b=new Bq();FG(b,a);return b;}
function YN(a){var b=new Bq();J7(b,a);return b;}
function HX(a,b,c,d,e){if(e)a.cu();a.cj=d;a.cF=e;a.dc=b;a.cD=c;}
function J1(a){a.cj=1;a.cF=1;a.cu();}
function FG(a,b){a.cj=1;a.cF=1;a.cu();a.dc=b;}
function J7(a,b){a.cj=1;a.cF=1;a.cu();a.cD=b;}
function Q9(a){return a;}
function P0(a){return a.dc;}
function P6(a){return a.cD===a?null:a.cD;}
var BS=C(Bq);
function YO(){var a=new BS();EV(a);return a;}
function YP(a){var b=new BS();Gj(b,a);return b;}
function EV(a){J1(a);}
function Gj(a,b){FG(a,b);}
var P=C(BS);
function YQ(){var a=new P();Bm(a);return a;}
function Yl(a){var b=new P();C9(b,a);return b;}
function Bm(a){EV(a);}
function C9(a,b){Gj(a,b);}
var BD=C(P);
function G9(){var a=new BD();H0(a);return a;}
function WO(a){var b=new BD();Cb(b,a);return b;}
function H0(a){Bm(a);}
function Cb(a,b){C9(a,b);}
var Du=C(0);
function Qi(a,b){return b;}
function O3(a,b){if(b===null)return null;if(Bj(b,CJ))return a.g0(b);if(!Bj(b,CQ))return a.c8(b);return a.gL(b);}
function R_(a,b){return b.bu();}
function SM(a,b){return b.bu();}
var FL=C(0);
var E6=C(0);
function Tr(a){return (E_(a.bu(),a,M())).d();}
function RH(b,c){var d,e,f,g,h;c.i(123);d=1;e=b.e$();f=0;g=e.q();while(f<g){h=e.hD(f);if(!d)c.i(44);HA(h,c);c.i(58);E_(b.cI(h),b,c);d=0;f=f+1|0;}return c.i(125);}
function Sg(b,c){return (QL(b,D(2),c.i(91))).i(93);}
function QL(b,c,d){var e,f;e=b.q();f=0;while(f<e){if(f>0)d.v(c);E_(b.cV(f),b,d);f=f+1|0;}return d;}
function E_(b,c,d){Xz();switch(YR.data[Bn(c.cq(b))]){case 1:return d.v(D(3));case 2:return RH(c.b$(b),d);case 3:return Sg(c.ds(b),d);case 4:return d.v(M$(c.be(b)));case 5:return d.T(c.be(b));case 6:return HA(c.be(b),d);default:}return d;}
function OS(b){if(b.cM(46)>0&&b.cM(101)<0&&b.cM(69)<0){while(b.eI(D(4))){b=b.bL(0,b.c()-1|0);}if(b.eI(D(5)))b=b.bL(0,b.c()-1|0);}return b;}
function M$(b){if(b!==null){Sx(b);return OS(b.d());}G(CK(D(6)));}
function Sx(b){var c;a:{b:{if(b!==null){if(b instanceof B9){if((PG(0.0)).C(b))break b;c=b;if(!c.fG()&&!c.fW())break b;G(CK(D(7)));}if(b instanceof Ce&&!(V2(0.0)).C(b)){c=b;if(c.fG())break a;if(c.fW())break a;}}}return;}G(CK(D(8)));}
function HA(b,c){var d,e,f,g,h,i,j;if(Q3(b))return c.v(D(9));d=0;e=b.c();c.i(34);f=0;while(f<e){a:{g=b.n(f);switch(g){case 8:break;case 9:c.v(D(10));break a;case 10:c.v(D(11));break a;case 12:c.v(D(12));break a;case 13:c.v(D(13));break a;case 34:case 92:c.i(92);c.i(g);break a;case 47:if(d==60)c.i(92);c.i(g);break a;default:if(g>=32){c.i(g);break a;}h=FU(g);i=M();K(K(i,D(14)),h);j=N(i);(c.v(D(15))).v(j.hk(j.c()-4|0));break a;}c.v(D(16));}f=f+1|0;d=g;}return c.i(34);}
var CX=C(0);
function T6(a){return a.b$(a.dj());}
var CT=C(0);
function G_(){var a=this;B.call(a);a.d_=null;a.fF=null;a.fc=0;a.fQ=0;}
function VV(a,b){var c=new G_();Rn(c,a,b);return c;}
function Rn(a,b,c){E(a);a.d_=b;a.fF=c;}
function Qr(a){return Ca(a.d_);}
function QC(a,b){return BZ(a.fF)<b?0:1;}
function Rv(a,b){a.fc=b;}
function U1(a,b){a.fQ=b;}
var Bw=C(0);
var Ba=C();
function Cc(a){E(a);}
var Be=C(0);
function Cw(){Ba.call(this);this.dI=0;}
var YS=null;var YT=null;function BX(){BX=L(Cw);QR();}
function Ry(a){var b=new Cw();IP(b,a);return b;}
function IP(a,b){BX();Cc(a);a.dI=b;}
function Iq(b,c){BX();if(!(c>=2&&c<=36))c=10;return ((Xw(20)).ek(b,c)).d();}
function FU(b){BX();return Mj(b,4);}
function HG(b){BX();return Iq(b,10);}
function Hf(b,c){var d,e,f,g,h,i,j;BX();if(c>=2&&c<=36){if(b!==null&&!b.cg()){a:{d=0;e=0;switch(b.n(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.c())G(Yb());while(e<b.c()){g=e+1|0;h=F3(b.n(e));if(h<0){i=new B6;j=M();K(K(j,D(17)),b);Dc(i,N(j));G(i);}if(h>=c){i=new B6;j=M();K(K(O(K(j,D(18)),c),D(19)),b);Dc(i,N(j));G(i);}f=EE(c,f)+h|0;if(f<0){if(g==b.c()&&f==(-2147483648)&&d)return (-2147483648);i=new B6;j=M();K(K(j,D(20)),b);Dc(i,N(j));G(i);}e=g;}if(d)f= -f|0;return f;}G(Vf(D(21)));}i
=new B6;j=M();O(K(j,D(22)),c);Dc(i,N(j));G(i);}
function Fa(b){BX();return Hf(b,10);}
function Bf(b){BX();if(b>=(-128)&&b<=127){Hd();return YT.data[b+128|0];}return Ry(b);}
function Hd(){var b;BX();a:{if(YT===null){YT=X(Cw,256);b=0;while(true){if(b>=YT.data.length)break a;YT.data[b]=Ry(b-128|0);b=b+1|0;}}}}
function NN(a){return a.dI;}
function SR(a){return HG(a.dI);}
function Hc(b){var c,d,e;BX();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function QR(){YS=F($rt_intcls());}
var I$=C(BS);
function Vr(){var a=new I$();Tw(a);return a;}
function Tw(a){EV(a);}
var Dv=C(0);
var FQ=C(0);
function HV(){return VZ();}
function M8(a,b){if(a.dx(b))return;G(JY(D(23)));}
var B5=C();
var YU=null;var YV=null;var YW=null;var YX=null;var YY=null;function PR(){PR=L(B5);TH();}
function TH(){YU=V0([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);YV=O_([H(1),H(10),H(100),H(1000),H(10000),H(100000),H(1000000),H(10000000),H(100000000),H(1000000000),T(1410065408, 2),T(1215752192, 23),T(3567587328, 232),T(1316134912, 2328),T(276447232, 23283),T(2764472320, 232830),T(1874919424, 2328306),T(1569325056, 23283064),T(2808348672, 232830643)]);YW=O_([H(1),H(10),H(100),H(10000),H(100000000),T(1874919424, 2328306)]);YX=VD();YY=W8();}
var Cj=C(0);
function FS(){Ba.call(this);this.dX=BK;}
var YZ=null;function Jj(){Jj=L(FS);Sl();}
function Xq(a){var b=new FS();Jf(b,a);return b;}
function Jf(a,b){Jj();Cc(a);a.dX=b;}
function EA(b){Jj();return Xq(b);}
function ME(a){return DS(a.dX);}
function GX(b){Jj();return ((M()).iA(b)).d();}
function Rr(a){return GX(a.dX);}
function DW(b,c){return Long_udiv(b, c);}
function GV(b,c){return Long_urem(b, c);}
function Sl(){YZ=F($rt_longcls());}
var B3=C(0);
var EI=C(0);
function B4(){var a=this;B.call(a);a.fN=BK;a.gs=BK;a.hn=null;a.h6=null;a.gT=0;a.i4=null;}
var Y0=null;var Y1=null;var Y2=0;var Y3=0;var Y4=null;function FK(){FK=L(B4);N8();}
function U8(a){var b=new B4();HJ(b,a);return b;}
function Y5(a,b){var c=new B4();E7(c,a,b);return c;}
function HJ(a,b){FK();E7(a,null,b);}
function E7(a,b,c){var d;FK();E(a);a.hn=P4();a.gT=1;a.h6=c;a.i4=b;d=Y2;Y2=d+1|0;a.fN=H(d);}
function DB(b){FK();if(Y1!==b)Y1=b;Y1.gs=I9();}
function By(){FK();return Y1;}
function L2(a){return a.fN;}
function N8(){Y0=U8(D(24));Y1=Y0;Y2=1;Y3=1;Y4=W5();}
var Bi=C(0);
function Rq(b){return b;}
var E2=C(0);
var JP=C();
function Us(a,b){return a.jY(b);}
function Pd(a){return a.jV();}
var Dg=C(0);
var HC=C();
function X4(){var a=new HC();QT(a);return a;}
function QT(a){E(a);}
function Oi(a){return ID(a);}
function ID(a){return UX();}
var FX=C();
var Y6=null;function U$(){U$=L(FX);RJ();}
function RJ(){Y6=DH((Fb()).data.length);Y6.data[Bn(Y7)]=1;Y6.data[Bn(Y8)]=2;Y6.data[Bn(Y9)]=3;}
var GF=C();
function MW(b){return b;}
function DM(b){return b.length?0:1;}
function Mi(b,c){var d;d=MW(c);b.push(d);}
function N6(b){return b.shift();}
function Jq(){B.call(this);this.fz=null;}
function Xs(a){var b=new Jq();Qs(b,a);return b;}
function Qs(a,b){E(a);a.fz=b;}
function RP(a,b){Jt(a,b);}
function Jt(a,b){H4(a.fz,b);}
var Fi=C(0);
function Jm(){B.call(this);this.eM=null;}
function Ye(a){var b=new Jm();Uo(b,a);return b;}
function Uo(a,b){E(a);a.eM=b;}
function OD(a,b){GT(a.eM,b);}
function BJ(){var a=this;B.call(a);a.m=null;a.R=null;}
function FI(a){E(a);}
var Fc=C(0);
var Fp=C(0);
function QE(b){return Xo(b);}
function QX(a,b){return a.fl(b,Ws());}
var Dm=C(0);
var Co=C();
function E5(a){E(a);}
function ET(a,b,c){c.bH(b);}
function DV(a,b,c){c.b1(b);}
function IB(a,b,c){var d;Dx(b,D(25));Dx(c,D(26));d=Va(b,c);a.bE(d);return d;}
function Ci(){var a=this;Co.call(a);a.A=null;a.P=null;}
var Y$=null;function Dh(){Dh=L(Ci);TA();}
function Y_(){var a=new Ci();D4(a);return a;}
function D4(a){Dh();E5(a);}
function Tm(a){var b,c;DN(a);try{if(a.A instanceof CI)b=null;else{c=a.A;Dh();b=c!==Y$?a.A:null;}return b;}finally{Bh(a);}}
function N9(a,b){var c;Dx(b,D(27));c=!Bj(b,B1)?We(a,b):b;a.bE(c);return a;}
function H1(a,b){var c,d,e,$$je;DN(a);a:{b:{try{c=a.A;if(c===null)break b;Bh(a);}catch($$e){$$je=Z($$e);d=$$je;break a;}if(c instanceof CI)DV(a,c.dq,b);else{Dh();if(c===Y$)c=null;ET(a,c,b);}return;}c:{try{if(a.P===null){a.P=b;break c;}if(a.P instanceof Fh)e=a.P;else{e=XL();e.bw(a.P);a.P=e;}e.bw(b);break c;}catch($$e){$$je=Z($$e);d=$$je;break a;}}try{Bh(a);}catch($$e){$$je=Z($$e);d=$$je;break a;}return;}Bh(a);G(d);}
function Gi(a,b){var c,d,$$je;DN(a);a:{b:{c:{try{if(a.A===null)break c;Bh(a);}catch($$e){$$je=Z($$e);c=$$je;break b;}return 0;}d:{try{if(b!==null){c=b;break d;}Dh();c=Y$;break d;}catch($$e){$$je=Z($$e);c=$$je;break b;}}try{a.A=c;d=a.P;a.P=null;Bh(a);break a;}catch($$e){$$je=Z($$e);c=$$je;}}Bh(a);G(c);}if(d!==null)ET(a,b,d);return 1;}
function UJ(a,b){var c,d,$$je;if(b===null)b=R7(null);DN(a);a:{b:{c:{try{if(a.A===null)break c;Bh(a);}catch($$e){$$je=Z($$e);c=$$je;break b;}return 0;}try{a.A=V6(b);d=a.P;a.P=null;Bh(a);break a;}catch($$e){$$je=Z($$e);c=$$je;}}Bh(a);G(c);}if(d!==null)DV(a,b,d);return 1;}
function SK(a){var b,c,d,$$je;DN(a);a:{b:{try{if(!(a.A instanceof CI))break b;b=a.A.dq.cS();c=M();CM(K(K(c,D(28)),b),125);b=N(c);Bh(a);}catch($$e){$$je=Z($$e);b=$$je;break a;}return b;}c:{try{if(a.A!==null)break c;Bh(a);}catch($$e){$$je=Z($$e);b=$$je;break a;}return D(29);}d:{try{b=a.A;Dh();if(b!==Y$)break d;Bh(a);}catch($$e){$$je=Z($$e);b=$$je;break a;}return D(30);}try{d=X3(D(31));a.iY(a.A,d);d.v(D(32));b=d.d();Bh(a);}catch($$e){$$je=Z($$e);b=$$je;break a;}return b;}Bh(a);G(b);}
function OI(a,b,c){c.T(b);}
function TA(){Y$=P4();}
var D1=C(Ci);
function Ly(a){D4(a);}
var C_=C(0);
var CC=C(Bq);
function Za(a){var b=new CC();IN(b,a);return b;}
function Zb(a){var b=new CC();Ho(b,a);return b;}
function IN(a,b){FG(a,b);}
function Ho(a,b){J7(a,b);}
var CH=C(CC);
function Zc(a){var b=new CH();Gv(b,a);return b;}
function Gv(a,b){IN(a,b);}
var Di=C(0);
function UQ(a,b,c){return H5(C7(B,[a.da(b),c]));}
function O1(a,b){Er();return Zd.C(a.h$(b));}
function Ns(a,b){return Ts(a.da(b));}
function SO(a,b){return En(a.da(b));}
function R2(a,b,c){return En(a.gR(b,c));}
var CQ=C(0);
function LJ(a,b){return a.b$(a.cI(b));}
function SL(a,b){return a.be(a.cI(b));}
var E9=C(0);
var CW=C(0);
function UA(a,b){return LJ(a,b);}
function L5(a,b,c){return a.f3(b,a.gX(c));}
var Ed=C(0);
var KV=C(BD);
function Pp(){var a=new KV();Rh(a);return a;}
function Rh(a){H0(a);}
function D5(){B.call(this);this.hl=null;}
var Ze=null;var Zf=null;function TI(){TI=L(D5);UE();}
function Qn(a){var b=new D5();F6(b,a);return b;}
function F6(a,b){TI();E(a);a.hl=b;}
function UE(){Ze=Qn(D(33));Zf=Qn(D(34));}
var Ke=C();
function Dz(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.eK.data;f=b.fX;b.fX=f+1|0;g=N4(e[f]);h=(g%2|0)!=1?0:1;c=c+EE(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function Eu(b){var c,d;c=Dz(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function N4(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
var FN=C(0);
var Ez=C(0);
var EX=C(0);
var CB=C();
function Eb(a){E(a);}
function DP(){CB.call(this);this.gP=null;}
function LK(a){Eb(a);a.gP=CZ(1);}
var EP=C(DP);
var Zg=null;function TO(){TO=L(EP);Pe();}
function V_(){var a=new EP();KA(a);return a;}
function KA(a){TO();LK(a);}
function T0(a,b,c,d){S0(b,c,d);}
function Pe(){Zg=V_();}
var Ff=C(0);
var Bo=C();
var GU=C(Bo);
function IC(){var a=this;B.call(a);a.et=null;a.fU=null;a.dr=null;a.fb=null;a.bS=null;}
function V7(){var a=new IC();Rb(a);return a;}
function Rb(a){E(a);}
function KF(a,b,c){if(b!==null)a.et=b;if(c!==null)a.fU=c;return a;}
function Kx(a){var b;if(a.dr===null){b=HB(a.et.fR());if(b.x())a.dr=b.r();}return a.dr;}
function IZ(a){var b,c;a:{if(a.bS===null){a.bS=Kx(a);if(a.fb!==null){b=a.fb.s();while(true){if(!b.x())break a;c=b.r();a.bS=c.f(a.bS);}}}}return a.bS;}
function CA(){var a=this;B.call(a);a.b=null;a.k=0;}
function Zh(){var a=new CA();EQ(a);return a;}
function Xw(a){var b=new CA();Ey(b,a);return b;}
function Zi(a){var b=new CA();K6(b,a);return b;}
function Zj(a){var b=new CA();IH(b,a);return b;}
function EQ(a){Ey(a,16);}
function Ey(a,b){E(a);a.b=BH(b);}
function K6(a,b){IH(a,b);}
function IH(a,b){var c;E(a);a.b=BH(b.c());c=0;while(c<a.b.data.length){a.b.data[c]=b.n(c);c=c+1|0;}a.k=b.c();}
function KI(a,b){return a.e8(a.k,b);}
function EK(a,b){return a.cs(a.k,b);}
function Fe(a,b,c){var d,e,f;if(b>=0&&b<=a.k){if(c===null)c=D(3);else if(c.cg())return a;a.bF(a.k+c.c()|0);d=a.k-1|0;while(d>=b){a.b.data[d+c.c()|0]=a.b.data[d];d=d+(-1)|0;}a.k=a.k+c.c()|0;d=0;while(d<c.c()){e=a.b.data;f=b+1|0;e[b]=c.n(d);d=d+1|0;b=f;}return a;}G(Pp());}
function Hv(a,b){return a.ek(b,10);}
function Nx(a,b,c){return a.gM(a.k,b,c);}
function Tl(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)Bd(a,b,b+1|0);else{Bd(a,b,b+2|0);f=a.b.data;g=b+1|0;f[b]=45;b=g;}a.b.data[b]=CG(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=EE(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;Bd(a,b,b+i|0);if(e)l=b;else{f=a.b.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.b.data;g=l+1|0;f[l]=CG(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function Kq(a,b){return a.eA(a.k,b);}
function LA(a,b,c){return a.ih(b,c,10);}
function Mm(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(Ja(c,BK)){e=0;c=Vo(c);}a:{f=H(d);if(Ja(c,f)){if(e)Bd(a,b,b+1|0);else{Bd(a,b,b+2|0);g=a.b.data;h=b+1|0;g[b]=45;b=h;}a.b.data[b]=CG(DS(c),d);}else{i=1;j=H(1);while(true){k=R(j,f);if(C2(k,j))break;if(IO(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;Bd(a,b,b+i|0);if(e)l=b;else{g=a.b.data;l=b+1|0;g[b]=45;}while(true){if(C2(j,BK))break a;g=a.b.data;h=l+1|0;g[l]=CG(DS(Bg(c,j)),d);c=Dk(c,j);j=Bg(j,f);l=h;}}}return a;}
function Jz(a,b){return a.d3(a.k,b);}
function IL(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=CN(c,0.0);if(!d){Bd(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=48;e=a.b.data;f=d+1|0;e[d]=46;a.b.data[f]=48;return a;}if(!d){Bd(a,b,b+4|0);e=a.b.data;d=b+1|0;e[b]=45;e=a.b.data;f=d+1|0;e[d]=48;e=a.b.data;d=f+1|0;e[f]=46;a.b.data[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Bd(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=78;e=a.b.data;f=d+1|0;e[d]=97;a.b.data[f]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Bd(a,b,b+8|0);d=b;}else{Bd(a,b,b+9|0);e=a.b.data;d=b+1|0;e[b]
=45;}e=a.b.data;f=d+1|0;e[d]=73;e=a.b.data;d=f+1|0;e[f]=110;e=a.b.data;f=d+1|0;e[d]=102;e=a.b.data;d=f+1|0;e[f]=105;e=a.b.data;f=d+1|0;e[d]=110;e=a.b.data;d=f+1|0;e[f]=105;e=a.b.data;f=d+1|0;e[d]=116;a.b.data[f]=121;return a;}PR();g=YX;KM(c,g);h=g.cR;i=g.c4;j=g.ej;k=1;l=1;if(j)l=2;m=18;n=OJ(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Cd(m,k+1|0);i=0;}else{h=Bg(h,YV.data[ -i|0]);m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(!(i>(-100)&&i<100))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d
=l+m|0;Bd(a,b,b+d|0);if(!j)o=b;else{e=a.b.data;o=b+1|0;e[b]=45;}p=T(1569325056, 23283064);q=0;while(q<m){if(C2(p,BK))r=0;else{r=DS(Bg(h,p));h=Dk(h,p);}e=a.b.data;d=o+1|0;e[o]=(48+r|0)&65535;k=k+(-1)|0;if(k)o=d;else{e=a.b.data;o=d+1|0;e[d]=46;}p=Bg(p,H(10));q=q+1|0;}if(i){e=a.b.data;d=o+1|0;e[o]=69;if(i>=0)f=d;else{i= -i|0;e=a.b.data;f=d+1|0;e[d]=45;}if(i>=100){e=a.b.data;d=f+1|0;e[f]=(48+(i/100|0)|0)&65535;i=i%100|0;e=a.b.data;o=d+1|0;e[d]=(48+(i/10|0)|0)&65535;}else if(i<10)o=f;else{e=a.b.data;o=f+1|0;e[f]
=(48+(i/10|0)|0)&65535;}a.b.data[o]=(48+(i%10|0)|0)&65535;}return a;}
function OJ(b){var c,d,e,f;c=H(1);d=0;e=16;PR();f=YW.data.length-1|0;while(f>=0){if(C1(Dk(b,R(c,YW.data[f])),BK)){d=d|e;c=R(c,YW.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function La(a,b){return a.fr(a.k,b);}
function KR(a,b,c){Bd(a,b,b+1|0);a.b.data[b]=c;return a;}
function Jk(a,b,c){return a.cs(b,c===null?D(3):c.d());}
function EM(a,b){var c;if(a.b.data.length>=b)return;c=a.b.data.length>=1073741823?2147483647:Cd(b,Cd(a.b.data.length*2|0,5));a.b=NO(a.b,c);}
function Ep(a){return Pf(a.b,0,a.k);}
function Kh(a){return a.k;}
function HK(a,b,c,d){return a.d0(a.k,b,c,d);}
function Gx(a,b,c,d,e){var f,g;if(d<=e&&e<=c.c()&&d>=0){Bd(a,b,(b+e|0)-d|0);while(d<e){f=a.b.data;g=b+1|0;f[b]=c.n(d);d=d+1|0;b=g;}return a;}G(G9());}
function JW(a,b,c,d,e){var f,g,h,i;if(b>c)G(WO(D(35)));while(b<c){f=d.data;g=e+1|0;h=a.b.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function JR(a,b){a.k=b;}
function Bd(a,b,c){var d,e;d=a.k-b|0;a.bF((a.k+c|0)-b|0);e=d-1|0;while(e>=0){a.b.data[c+e|0]=a.b.data[b+e|0];e=e+(-1)|0;}a.k=a.k+(c-b|0)|0;}
var C6=C(0);
var Gl=C(CA);
function Vi(a){var b=new Gl();T7(b,a);return b;}
function M(){var a=new Gl();TE(a);return a;}
function X3(a){var b=new Gl();Mw(b,a);return b;}
function T7(a,b){Ey(a,b);}
function TE(a){EQ(a);}
function Mw(a,b){K6(a,b);}
function K(a,b){KI(a,b);return a;}
function Mv(a,b){EK(a,b);return a;}
function O(a,b){Hv(a,b);return a;}
function R9(a,b){Kq(a,b);return a;}
function PT(a,b){Jz(a,b);return a;}
function CM(a,b){La(a,b);return a;}
function S1(a,b,c,d){HK(a,b,c,d);return a;}
function Rf(a,b,c){LA(a,b,c);return a;}
function Tu(a,b,c){IL(a,b,c);return a;}
function Ne(a,b,c,d,e){Gx(a,b,c,d,e);return a;}
function Ub(a,b,c){Jk(a,b,c);return a;}
function NM(a,b,c){KR(a,b,c);return a;}
function Un(a,b,c){Fe(a,b,c);return a;}
function Uw(a,b){JR(a,b);}
function QF(a,b,c,d,e){JW(a,b,c,d,e);}
function Ou(a,b,c,d,e){return a.hN(b,c,d,e);}
function Oo(a){return Kh(a);}
function N(a){return Ep(a);}
function UC(a,b){EM(a,b);}
function MA(a,b,c){return a.hp(b,c);}
function L1(a,b,c){return a.iG(b,c);}
function Qz(a,b,c){return a.hx(b,c);}
function Pm(a,b,c){return a.h1(b,c);}
function UN(a,b,c){return a.hh(b,c);}
var FF=C();
var Zk=null;function US(){US=L(FF);S5();}
function Kv(b){var c,d;US();c=Zk.cK(b);if(c===null){d=Zk;c=V7();d.bm(b,c);}return c;}
function Fz(b,c,d){var e,f,g,h,i,j;US();e=Kv(b);f=KF(e,c,d);g=IZ(f);if(g!==null)return g;e=f.fU;DK();if(e!==Zl){h=b.iq();i=M();K(K(i,D(36)),h);j=N(i);if(e===Zm)G(JY(j));e=Lq();MC();e.iP(Zn,j);}return null;}
function S5(){Zk=UT();}
var JV=C(P);
function ON(){var a=new JV();Up(a);return a;}
function Up(a){Bm(a);}
var Hk=C(CC);
function WB(a){var b=new Hk();My(b,a);return b;}
function My(a,b){Ho(a,b);}
function Cr(){B.call(this);this.df=null;}
function Fd(a){E(a);}
function Ow(a){var b,c,d;b=M();b.i(123);c=(a.f1()).s();if(c.x()){d=c.r();b.T(d.bq()!==a?d.bq():D(37));b.i(61);b.T(d.bP()!==a?d.bP():D(37));}while(c.x()){b.v(D(38));d=c.r();b.T(d.bq()!==a?d.bq():D(37));b.i(61);b.T(d.bP()!==a?d.bP():D(37));}b.i(125);return b.d();}
var Ct=C(0);
function D9(){var a=this;Cr.call(a);a.y=0;a.g=null;a.D=0;a.ga=0.0;a.b8=0;}
function UT(){var a=new D9();I6(a);return a;}
function Zo(a){var b=new D9();Eg(b,a);return b;}
function Zp(a,b){var c=new D9();KL(c,a,b);return c;}
function Sb(a,b){return X(CP,b);}
function I6(a){Eg(a,16);}
function Eg(a,b){KL(a,b,0.75);}
function KB(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function KL(a,b,c){var d;Fd(a);if(b>=0&&c>0.0){d=KB(b);a.y=0;a.g=a.c6(d);a.ga=c;E0(a);return;}G(HM());}
function E0(a){a.b8=a.g.data.length*a.ga|0;}
function Sm(a,b){var c;c=GK(a,b);if(c===null)return null;return c.S;}
function GK(a,b){var c,d,e;if(b===null)c=Dd(a);else{d=EW(b);e=d&(a.g.data.length-1|0);c=C3(a,b,e,d);}return c;}
function C3(a,b,c,d){var e,f;e=a.g.data[c];while(e!==null){if(e.ce==d){f=e.bb;if(Ha(b,f))break;}e=e.K;}return e;}
function Dd(a){var b;b=a.g.data[0];while(b!==null&&b.bb!==null){b=b.K;}return b;}
function M5(a,b,c){return a.dF(b,c);}
function RY(a,b,c){var d,e,f,g,h;if(b===null){d=Dd(a);if(d===null){a.D=a.D+1|0;d=a.bX(null,0,0);e=a.y+1|0;a.y=e;if(e>a.b8)a.co();}}else{f=EW(b);g=f&(a.g.data.length-1|0);d=C3(a,b,g,f);if(d===null){a.D=a.D+1|0;d=a.bX(b,g,f);e=a.y+1|0;a.y=e;if(e>a.b8)a.co();}}h=d.S;d.S=c;return h;}
function O8(a,b,c,d){var e;e=WR(b,d);e.K=a.g.data[c];a.g.data[c]=e;return e;}
function RO(a,b){var c,d,e,f,g,h,i;c=KB(!b?1:b<<1);d=a.c6(c);e=0;while(e<a.g.data.length){f=a.g.data[e];a.g.data[e]=null;while(f!==null){g=d.data;h=f.ce&(c-1|0);i=f.K;f.K=g[h];g[h]=f;f=i;}e=e+1|0;}a.g=d;E0(a);}
function PA(a){a.hE(a.g.data.length);}
function HD(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.g.data[0];while(e!==null){if(e.bb===null)break a;f=e.K;d=e;e=f;}}else{g=EW(b);c=g&(a.g.data.length-1|0);e=a.g.data[c];while(e!==null&&!(e.ce==g&&Ha(b,e.bb))){f=e.K;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.K=e.K;else a.g.data[c]=e.K;a.D=a.D+1|0;a.y=a.y-1|0;return e;}
function Pv(a){return a.y;}
function EW(b){return b.b0();}
function Ha(b,c){return b!==c&&!b.C(c)?0:1;}
function G7(){var a=this;D9.call(a);a.b3=0;a.J=null;a.p=null;}
function Yi(){var a=new G7();NQ(a);return a;}
function VX(a){var b=new G7();Po(b,a);return b;}
function NQ(a){I6(a);a.b3=0;a.J=null;}
function Po(a,b){Eg(a,b);a.b3=0;a.J=null;}
function OG(a,b){return X(Fv,b);}
function Mr(a,b){var c,d,e,f,g;if(b===null)c=Dd(a);else{d=b.b0();e=(d&2147483647)%a.g.data.length|0;c=C3(a,b,e,d);}if(c===null)return null;if(a.b3&&a.p!==c){f=c.B;g=c.u;g.B=f;if(f===null)a.J=g;else f.u=g;c.u=null;c.B=a.p;a.p.u=c;a.p=c;}return c.S;}
function Uc(a,b,c,d){var e;e=Wm(b,d);e.K=a.g.data[c];a.g.data[c]=e;a.dA(e);return e;}
function SF(a,b,c){var d;d=a.dF(b,c);if(a.iB(a.J))a.gF(a.J.bb);return d;}
function Ud(a,b,c){var d,e,f,g,h,i;if(!a.y){a.J=null;a.p=null;}if(b===null){d=Dd(a);if(d!==null)a.dA(d);else{a.D=a.D+1|0;e=a.y+1|0;a.y=e;if(e>a.b8)a.co();d=a.bX(null,0,0);}}else{f=b.b0();e=f&2147483647;g=e%a.g.data.length|0;d=C3(a,b,g,f);if(d!==null)a.dA(d);else{a.D=a.D+1|0;h=a.y+1|0;a.y=h;if(h>a.b8){a.co();g=e%a.g.data.length|0;}d=a.bX(b,g,f);}}i=d.S;d.S=c;return i;}
function Me(a,b){var c,d;if(a.p===b)return;if(a.J===null){a.J=b;a.p=b;return;}c=b.B;d=b.u;if(c!==null){if(d===null)return;if(a.b3){c.u=d;d.B=c;b.u=null;b.B=a.p;a.p.u=b;a.p=b;}return;}if(d===null){b.B=a.p;b.u=null;a.p.u=b;a.p=b;}else if(a.b3){a.J=d;d.B=null;b.B=a.p;b.u=null;a.p.u=b;a.p=b;}}
function RZ(a){return Wn(a);}
function PN(a){if(a.df===null)a.df=Vx(a);return a.df;}
function PE(a,b){var c,d,e;c=HD(a,b);if(c===null)return null;d=c.B;e=c.u;if(d===null)a.J=e;else d.u=e;if(e===null)a.p=d;else e.B=d;return c.S;}
function Mz(a,b){return 0;}
var DO=C(0);
function MU(a,b){return MP(a.iZ(b));}
var CJ=C(0);
function NY(a,b){return a.be(a.cV(b));}
var Eo=C(0);
var C$=C(0);
var Dr=C(0);
function Uj(a){return Yi();}
function Ss(a,b){if(b!==null&&!Bj(b,CW))return Xl(b);return b;}
function Uz(a,b){if(b!==null&&!Bj(b,C$))return Vq(b);return b;}
function M2(a,b){if(b===null){Bc();return Zq;}if(!Bj(b,B3)&&!Bj(b,CQ)){if(!Bj(b,Cl)&&!Bj(b,CJ)){if(b instanceof BO){Bc();return Y9;}if(b instanceof BV){Bc();return Y7;}if(!JG(b)){Bc();return Zr;}Bc();return Y9;}Bc();return Zs;}Bc();return Zt;}
var D2=C();
function Iu(a,b){E(a);a.hQ(b);}
function Qu(a,b){return (a.ft()).cX(b);}
function M3(a){return (a.ft()).q();}
var Hx=C(CA);
function Px(){var a=new Hx();SC(a);return a;}
function SC(a){EQ(a);}
function PY(a,b){EK(a,b);return a;}
function PZ(a,b,c){Fe(a,b,c);return a;}
function OK(a){return Ep(a);}
function O5(a,b){EM(a,b);}
function Mn(a,b,c){return a.ig(b,c);}
var DI=C(0);
function DY(){var a=this;B.call(a);a.e3=null;a.he=null;a.g2=null;a.g7=null;a.iO=null;a.dd=0;a.hM=0;}
function Zu(a,b){var c=new DY();K_(c,a,b);return c;}
function K_(a,b,c){E(a);a.e3=b.eX;a.he=b.fx;a.g2=b.e4;a.g7=b.d$;a.iO=b.ed;a.gg(c);}
function Oz(a,b){a.hM=b;a.dd=b;}
function Cz(){var a=this;B.call(a);a.fI=0;a.z=0;a.X=0;a.cf=0;}
function Fk(a,b){E(a);a.cf=(-1);a.fI=b;a.X=b;}
function CS(a){return a.z;}
function JS(a,b){var c,d,e;if(b>=0&&b<=a.X){a.z=b;if(b<a.cf)a.cf=0;return a;}c=new B$;d=a.X;e=M();CM(O(K(O(K(e,D(39)),b),D(40)),d),93);FZ(c,N(e));G(c);}
function HT(a){a.z=0;a.X=a.fI;a.cf=(-1);return a;}
function BZ(a){return a.X-a.z|0;}
function Ca(a){return a.z>=a.X?0:1;}
var Dq=C(0);
var DQ=C(0);
function Cx(){var a=this;B.call(a);a.f_=0;a.b9=null;a.dt=null;a.gh=null;}
function Zv(a){var b=new Cx();Em(b,a);return b;}
function Em(a,b){E(a);a.f_=b.D;a.b9=b.J;a.gh=b;}
function OT(a){return a.b9===null?0:1;}
function Le(a){if(a.f_==a.gh.D)return;G(ON());}
function FJ(a){Le(a);if(!a.x())G(Qd());a.dt=a.b9;a.b9=a.b9.u;}
var BW=C(0);
var JM=C(Cx);
function XG(a){var b=new JM();Q8(b,a);return b;}
function Q8(a,b){Em(a,b);}
function OA(a){FJ(a);return a.dt;}
function SY(a){return a.h3();}
var Es=C(0);
function Hp(){var a=this;B.call(a);a.d2=null;a.cH=null;}
function X8(a){var b=new Hp();L7(b,a);return b;}
function L7(a,b){E(a);a.cH=Px();a.d2=b;}
function Q7(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;d=HV();e=Ko();f=c.length;g=0;while(g<f){h=c[g];i=e.i5(h.hP());if(i===null){j=h.hP();i=Ko();e.iw(j,i);}k=W6(h);(i.bu())[$rt_ustr(h.j3())]=CL(k,"apply");g=g+1|0;}j=a.d2;l=e.bu();m=Yc(d);n=Xa(a);Ms(j,l,CL(m,"handle"),CL(n,"handle"));return d.gc();}
function Ll(a,b){if(b!=10)a.cH.gz($rt_str($rt_globals.String.fromCharCode(b)));else{(HN()).e_(a.cH.d());a.cH=Px();}}
function Ml(b,c){b.bi(V9(c));}
function MT(b,c,d){(b.kY()).jj(c,d);}
function Ms(b,c,d,e){($rt_globals.WebAssembly.instantiate(b,$rt_globals.Object.assign(c,{teavm:{currentTimeMillis:function(){return (new $rt_globals.Date()).getTime();},isnan:$rt_globals.isNaN,teavm_getNaN:function(){return $rt_globals.NaN;},isinf:function(n){return !$rt_globals.isFinite(n);},isfinite:$rt_globals.isFinite,putwchar:e,putwcharsErr:function(){},towlower:function(code){return (($rt_globals.String.fromCharCode(code)).toLowerCase()).charCodeAt(0);},towupper:function(code){return (($rt_globals.String.fromCharCode(code)).toUpperCase()).charCodeAt(0);},
getNativeOffset:function(instant){return (new $rt_globals.Date(instant)).getTimezoneOffset();},logString:$rt_globals.console.log,logInt:$rt_globals.console.log,logOutOfMemory:function(){$rt_globals.console.log('Out of memory');}},teavmMath:{sqrt:$rt_globals.Math.sqrt,pow:$rt_globals.Math.pow,sin:$rt_globals.Math.sin,cos:$rt_globals.Math.cos}}))).then(function(instance){return d(instance);});}
function DL(){B.call(this);this.dk=null;}
function Zw(){var a=new DL();F5(a);return a;}
function F5(a){E(a);}
function G0(a,b){a.dk=b;}
function Rz(a,b){a.dk.cY(b);}
function P9(a,b){a.dk.c5(b);}
function Dy(){DL.call(this);this.ex=null;}
function Jw(a){F5(a);}
function NR(a,b){a.ex=b;G0(a,b);}
function HZ(a,b){a.eU(b);}
function TD(a,b){return a.ex.dW(b);}
function LD(){var a=this;Dy.call(a);a.bQ=0;a.dn=0;a.du=0;a.dH=0;a.cC=null;a.eH=0;a.bZ=null;a.cO=null;a.eN=0;}
function W$(){var a=new LD();QD(a);return a;}
function QD(a){Jw(a);}
function Ul(a){var b;if(UP()){b=NZ(D(41),X(Fx,0));b.id(Xs(a));}a.c5(Ye(a));}
function GT(a,b){var c,d,e,f,g,h,i,j;c=UG(b);d=(c.dM(D(42),Bf(0))).M();e=c.dT(D(43));f=e===null?0:1;if(f){a.bQ=(c.dT(D(43))).M();a.dn=(c.dT(D(44))).M();a.du=(c.dM(D(45),Bf(0))).M();a.dH=(c.dM(D(46),Bf(0))).M();a.eH=c.i3(D(47));}if(a.eH&&a.bZ!==null){if(!f&&a.eN){g=a.bZ;h=X(B,1);h.data[0]=Bf(d);i=g.d4(D(48),h);}else{i=a.bZ.d4(D(49),C7(B,[Bf(d),Bf(a.bQ),Bf(a.dn),Bf(a.du),Bf(a.dH)]));a.eN=1;}j=i.M();a.cO.gg(j);a.cC=a.cO.iR(3*a.bQ|0);}else{if(f)NS(a.bQ,a.dn,a.du,a.dH);a.cC=T4(a.bQ,null);St(d,a.cC);}a.cY(a.dW(a.cC));}
function H4(a,b){a.bZ=b.hR();a.cO=a.bZ.gt(0);}
var Ef=C(0);
function D$(){var a=this;B.call(a);a.bb=null;a.S=null;}
function Zx(a,b){var c=new D$();Lw(c,a,b);return c;}
function Lw(a,b,c){E(a);a.bb=b;a.S=c;}
function S_(a){return a.bb;}
function T$(a){return a.S;}
function CP(){var a=this;D$.call(a);a.ce=0;a.K=null;}
function WR(a,b){var c=new CP();HL(c,a,b);return c;}
function HL(a,b,c){Lw(a,b,null);a.ce=c;}
function Fv(){var a=this;CP.call(a);a.u=null;a.B=null;}
function Wm(a,b){var c=new Fv();RV(c,a,b);return c;}
function RV(a,b,c){HL(a,b,c);a.u=null;a.B=null;}
function Ie(){var a=this;B.call(a);a.E=0.0;a.F=0.0;a.G=0.0;}
function CE(a,b,c){var d=new Ie();Rg(d,a,b,c);return d;}
function Rg(a,b,c,d){E(a);a.E=b;a.F=c;a.G=d;}
function Q(b,c,d){return CE(b,c,d);}
function BE(b){var c,d;c=G1(b);d=c===0.0?Infinity:1.0/c;return Bk(d,b);}
function Bk(b,c){return CE(c.E*b,c.F*b,c.G*b);}
function Ch(b,c){return CE(b.E-c.E,b.F-c.F,b.G-c.G);}
function C5(b,c){return CE(b.E+c.E,b.F+c.F,b.G+c.G);}
function BB(b,c){return b.E*c.E+b.F*c.F+b.G*c.G;}
function Dw(b,c){return CE(b.F*c.G-b.G*c.F,b.G*c.E-b.E*c.G,b.E*c.F-b.F*c.E);}
function G1(b){return FP(BB(b,b));}
var Cy=C(CH);
function Zy(a){var b=new Cy();Fy(b,a);return b;}
function Fy(a,b){Gv(a,b);}
var JX=C(Cy);
function Zz(a){var b=new JX();Pq(b,a);return b;}
function Pq(a,b){Fy(a,b);}
var EU=C(BS);
var EJ=C(0);
var EH=C(0);
var CD=C(0);
function Mq(b){return WA(b);}
function UB(b,c,d){return Lx(b.gb(c),b.gb(d));}
var Hl=C();
function Xt(){var a=new Hl();Oh(a);return a;}
function Oh(a){E(a);}
function G5(){var a=this;B.call(a);a.cy=0;a.fA=0;a.fB=0;a.ea=0;a.bR=null;}
function VI(a){var b=new G5();Ox(b,a);return b;}
function Ox(a,b){a.bR=b;E(a);a.fA=a.bR.cr;a.fB=a.bR.q();a.ea=(-1);}
function M1(a){return a.cy>=a.fB?0:1;}
function RR(a){var b,c;Id(a);a.ea=a.cy;b=a.bR;c=a.cy;a.cy=c+1|0;return b.cX(c);}
function Id(a){if(a.fA>=a.bR.cr)return;G(ON());}
var DA=C(Cr);
function JZ(a){Fd(a);}
var E8=C();
var YR=null;function Xz(){Xz=L(E8);Mk();}
function Mk(){YR=DH((Fb()).data.length);YR.data[Bn(Zq)]=1;YR.data[Bn(Zt)]=2;YR.data[Bn(Zs)]=3;YR.data[Bn(Y9)]=4;YR.data[Bn(Y8)]=5;YR.data[Bn(Y7)]=6;}
var D0=C(P);
function W_(){var a=new D0();Ge(a);return a;}
function Ge(a){Bm(a);}
var Lr=C(D0);
function U_(){var a=new Lr();TM(a);return a;}
function TM(a){Ge(a);}
var GO=C();
function H3(b,c){if(b===null)G(V8());if(b===F($rt_voidcls()))G(HM());if(c<0)G(Xn());return S7(b.fV(),c);}
function S7(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var E$=C(0);
var Jc=C(Bo);
function Jb(){var a=this;B.call(a);a.cJ=0;a.cB=null;}
function Wh(a){var b=new Jb();Ob(b,a);return b;}
function Ob(a,b){a.cB=b;E(a);}
function Tv(a){return a.cJ>=a.cB.cz.data.length?0:1;}
function N2(a){var b,c;if(a.cJ==a.cB.cz.data.length)G(Qd());b=a.cB.cz.data;c=a.cJ;a.cJ=c+1|0;return b[c];}
function Hq(){var a=this;B.call(a);a.cR=BK;a.c4=0;a.ej=0;}
function VD(){var a=new Hq();OO(a);return a;}
function OO(a){E(a);}
var IF=C();
var He=C(Cy);
function ZA(a){var b=new He();O7(b,a);return b;}
function O7(a,b){Fy(a,b);}
var Ip=C();
function XP(){var a=new Ip();Rw(a);return a;}
function Rw(a){E(a);}
function LY(a){return Lt(a);}
function Lt(a){return Rm();}
var DX=C(0);
var CU=C(0);
var Ck=C();
function FB(a){E(a);}
function RL(a){var b,c,d,e,f;b=X(B,a.q());c=0;d=a.s();while(d.x()){e=b.data;f=c+1|0;e[c]=d.r();c=f;}return b;}
function QN(a,b){var c,d,e,f;c=b.data;d=a.q();e=c.length;if(e<d)b=H3((EL(b)).gf(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.s();while(f.x()){c=b.data;e=d+1|0;c[d]=f.r();d=e;}return b;}
var II=C();
function Mj(b,c){var d,e,f,g,h,i,j,k;if(!b)return D(4);d=1<<c;e=d-1|0;f=(((32-Hc(b)|0)+c|0)-1|0)/c|0;g=BH(f);h=EE(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=CG(b>>>h&e,d);h=h-c|0;i=k;}return Vc(g);}
function FV(){Ba.call(this);this.i1=0;}
var ZB=null;function RM(){RM=L(FV);OH();}
function XW(a){var b=new FV();HQ(b,a);return b;}
function HQ(a,b){RM();Cc(a);a.i1=b;}
function Gk(b){RM();return XW(b);}
function OH(){ZB=F($rt_shortcls());}
var Ex=C(0);
var Lu=C();
function W5(){var a=new Lu();Or(a);return a;}
function Or(a){E(a);}
var F0=C(0);
var Hw=C();
function Lj(){var b;b=X4();DK();return Fz(F(CO),b,Zl);}
function UP(){var b;b=Lj();return b!==null&&b.hV()?1:0;}
function NZ(b,c){return (Lj()).i_(b,c);}
function UX(){return GP(F(CO));}
var Ig=C();
function CL(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Cp(){var a=this;B.call(a);a.dK=null;a.c1=null;a.dC=null;a.c0=null;}
function ZC(){var a=new Cp();FT(a);return a;}
function FT(a){E(a);}
function I_(b,c){var d,e,f,g,h,i,j,k,l;d=Ch(b,c);e=BE(d);f=CE(0.0,(-1.0),0.0);g=Dw(e,f);h=BE(g);i=Bk(2.0,h);j=Dw(e,i);k=BE(j);l=Bk(2.0,k);return WK(c,e,l,i);}
function F4(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=e/d;g=Ch(b,c);h=BE(g);i=CE(0.0,(-1.0),0.0);j=Dw(h,i);k=BE(j);l=Bk(2.0,k);m=Dw(h,l);n=BE(m);o=Bk(2.0*f,n);return Wv(c,h,o,l);}
var DC=C(0);
var B1=C(0);
function GE(){var a=this;D1.call(a);a.eb=null;a.fO=null;}
function Va(a,b){var c=new GE();PS(c,a,b);return c;}
function PS(a,b,c){Ly(a);a.eb=b;a.fO=c;}
function Rl(a,b){var c,d,$$je;a:{try{c=a.eb.f(b);break a;}catch($$e){$$je=Z($$e);if($$je instanceof Bq){d=$$je;}else{throw $$e;}}a.cL(d);return;}c.bE(EZ(a));}
function OQ(a,b){var c,d,$$je;a:{try{c=a.fO.f(b);break a;}catch($$e){$$je=Z($$e);if($$je instanceof Bq){d=$$je;}else{throw $$e;}}a.cL(d);return;}c.bE(EZ(a));}
function EZ(a){return Wx(a);}
function HU(){B.call(this);this.cz=null;}
function Vl(a){var b=new HU();RD(b,a);return b;}
function RD(a,b){E(a);a.cz=b;}
function HB(a){return Wh(a);}
function GP(b){return Vl(Sq(b.fV()));}
function Sq(b){var c;c=MM(b);if(c===null)c=X(B,0);return c;}
function MM(b){if (!HU.$$services$$) {HU.$$services$$ = true;CX.$$serviceList$$ = [[FW, N3]];CO.$$serviceList$$ = [[EO, U0]];}var cls = b;if (!cls.$$serviceList$$) {return $rt_createArray($rt_objcls(), 0);}var result = $rt_createArray($rt_objcls(), cls.$$serviceList$$.length);for (var i = 0; i < result.data.length; ++i) {var serviceDesc = cls.$$serviceList$$[i];result.data[i] = new serviceDesc[0]();serviceDesc[1](result.data[i]);}return result;}
var HR=C();
function TF(b){var c,d,e,f,g,h,i,j,k;c=P7(b.f7());d=Dz(c);e=DH(d*2|0);f=0;g=0;h=0;i=0;while(i<d){j=e.data;g=g+Eu(c)|0;h=h+Eu(c)|0;k=f+1|0;j[f]=g;f=k+1|0;j[k]=h;i=i+1|0;}return e;}
function Sz(b){var c,d,e,f,g,h,i;c=P7(b.f7());d=Dz(c);e=DH(d*2|0);f=0;g=0;while(g<d){h=e.data;f=f+Dz(c)|0;i=g*2|0;h[i]=f;h[i+1|0]=Eu(c);g=g+1|0;}return e;}
function BP(){var a=this;B.call(a);a.cc=null;a.bx=null;a.ck=null;}
function DJ(a){E(a);}
function Gw(){var a=this;B.call(a);a.e5=null;a.e6=null;a.e1=0;a.e2=null;}
function XD(a,b,c,d){var e=new Gw();Rs(e,a,b,c,d);return e;}
function Rs(a,b,c,d,e){E(a);a.e5=b;a.e6=c;a.e1=d;a.e2=e;}
function Tq(a){MR(a.e5,a.e6,a.e1,a.e2);}
var JH=C();
function QZ(b){return Dx(b,D(50));}
function Dx(b,c){if(b!==null)return b;G(Wo(c));}
function Lo(){Co.call(this);this.d8=null;}
function Xo(a){var b=new Lo();Tz(b,a);return b;}
function Tz(a,b){E5(a);if(b===null)b=R7(null);a.d8=b;}
function OC(a,b){DV(a,a.d8,b);}
function Bz(){var a=this;B.call(a);a.bd=null;a.br=null;}
function ZD(){var a=new Bz();C4(a);return a;}
function C4(a){E(a);}
function J4(){var a=this;Bz.call(a);a.fM=null;a.fh=null;}
function Vb(a,b){var c=new J4();Os(c,a,b);return c;}
function Os(a,b,c){a.fM=b;a.fh=c;C4(a);a.br=a.fM.bx.dK;a.bd=a.fh;}
function Df(){var a=this;B.call(a);a.g3=null;a.dy=null;a.hc=0.0;a.d1=0.0;a.c9=null;a.dR=null;a.bB=0;}
function KD(a,b,c,d,e){E(a);FD();a.c9=ZE;a.dR=ZE;Kw(a,e);a.g3=b;a.dy=e.dV();a.hc=c;a.d1=d;}
function J0(a,b,c,d){var e;e=CZ(1);e.data[0]=63;KD(a,b,c,d,e);}
function Kw(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.d1)return;}G(CK(D(51)));}
function F2(a,b){if(b!==null){a.c9=b;a.iC(b);return a;}G(CK(D(52)));}
function TV(a,b){}
function Ky(a,b){if(b!==null){a.dR=b;a.h2(b);return a;}G(CK(D(52)));}
function Ti(a,b){}
function Hi(a,b,c,d){var e,f,g,h,$$je;a:{if(a.bB!=3){if(d)break a;if(a.bB!=2)break a;}G(Ol());}a.bB=!d?1:2;while(true){try{e=a.hs(b,c);}catch($$e){$$je=Z($$e);if($$je instanceof P){f=$$je;G(WB(f));}else{throw $$e;}}if(e.gp()){if(!d)return e;g=BZ(b);if(g<=0)return e;e=Ds(g);}else if(e.cZ())break;h=!e.fK()?a.c9:a.dR;b:{FD();if(h!==ZF){if(h===ZG)break b;else return e;}if(BZ(c)<a.dy.data.length)return ZH;JQ(c,a.dy);}b.eE(CS(b)+e.c()|0);}return e;}
function Gt(a,b){var c;if(a.bB!=2&&a.bB!=4)G(Ol());c=a.gH(b);Bt();if(c===ZI)a.bB=3;return c;}
function Ma(a,b){Bt();return ZI;}
var E1=C(0);
function Jn(){B.call(this);this.fm=null;}
function W6(a){var b=new Jn();RE(b,a);return b;}
function RE(a,b){E(a);a.fm=b;}
function Um(a,b,c){MT(a.fm,b,c);}
function N$(a,b,c){a.iJ(b,c);}
function Jl(){B.call(this);this.en=null;}
function Yc(a){var b=new Jl();SV(b,a);return b;}
function SV(a,b){E(a);a.en=b;}
function M_(a,b){Ml(a.en,b);}
function ST(a,b){a.dB(b);}
var Eq=C(0);
function Jp(){B.call(this);this.gk=null;}
function Xa(a){var b=new Jp();LZ(b,a);return b;}
function LZ(a,b){E(a);a.gk=b;}
function Qh(a,b){Ll(a.gk,b);}
function UV(a,b){a.is(b);}
function DG(){var a=this;Cz.call(a);a.fS=0;a.ev=null;a.jd=null;}
function G8(a,b,c,d,e,f){Fk(a,c);TI();a.jd=Ze;a.fS=b;a.ev=d;a.z=e;a.X=f;}
function Ty(b,c,d){return W0(0,b.data.length,b,c,c+d|0,0,0);}
function Qk(b){return Ty(b,0,b.data.length);}
function Sy(a,b,c,d){var e,f,g,h,i,j,k,l;if(!d)return a;if(a.gw())G(U_());if(BZ(a)<d)G(Wd());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BD;i=M();O(K(O(K(i,D(53)),g),D(54)),f);Cb(h,N(i));G(h);}if(d<0){h=new BD;i=M();K(O(K(i,D(55)),d),D(56));Cb(h,N(i));G(h);}j=a.z+a.fS|0;k=0;while(k<d){l=a.ev.data;g=j+1|0;f=c+1|0;l[j]=e[c];k=k+1|0;j=g;c=f;}a.z=a.z+d|0;return a;}}e=b.data;h=new BD;f=e.length;i=M();CM(O(K(O(K(i,D(57)),c),D(40)),f),41);Cb(h,N(i));G(h);}
function JQ(a,b){return a.ff(b,0,b.data.length);}
function EN(a){HT(a);return a;}
function Kl(){var a=this;DG.call(a);a.gx=0;a.ee=0;}
function W0(a,b,c,d,e,f,g){var h=new Kl();MS(h,a,b,c,d,e,f,g);return h;}
function MS(a,b,c,d,e,f,g,h){G8(a,b,c,d,e,f);a.gx=g;a.ee=h;}
function Sc(a){return a.ee;}
var Cl=C(0);
function P2(a,b){Ht(a,b);}
function BQ(){Ck.call(this);this.cr=0;}
function D8(a){FB(a);}
function QY(a){return VI(a);}
var CV=C(0);
function Dt(){var a=this;BQ.call(a);a.o=null;a.U=0;}
function VS(){var a=new Dt();JJ(a);return a;}
function W7(a){var b=new Dt();Ei(b,a);return b;}
function Xu(a){var b=new Dt();PC(b,a);return b;}
function JJ(a){Ei(a,10);}
function Ei(a,b){D8(a);a.o=X(B,b);}
function PC(a,b){var c,d;Ei(a,b.q());c=b.s();d=0;while(d<a.o.data.length){a.o.data[d]=c.r();d=d+1|0;}a.U=a.o.data.length;}
function Nn(a,b){var c;if(a.o.data.length<b){c=a.o.data.length>=1073741823?2147483647:Cd(b,Cd(a.o.data.length*2|0,5));a.o=Tp(a.o,c);}}
function PI(a,b){Ej(a,b);return a.o.data[b];}
function N_(a){return a.U;}
function MO(a,b,c){var d;Ej(a,b);d=a.o.data[b];a.o.data[b]=c;return d;}
function SE(a,b){var c,d;a.bF(a.U+1|0);c=a.o.data;d=a.U;a.U=d+1|0;c[d]=b;a.cr=a.cr+1|0;return 1;}
function Ej(a,b){if(b>=0&&b<a.U)return;G(G9());}
function Oq(a){var b,c,d;if(!a.U)return D(58);b=a.U-1|0;c=Vi(a.U*16|0);c.i(91);d=0;while(d<b){(c.T(a.o.data[d]===a?D(59):a.o.data[d])).v(D(38));d=d+1|0;}c.T(a.o.data[b]===a?D(59):a.o.data[b]);return (c.i(93)).d();}
var Fh=C(Dt);
function XL(){var a=new Fh();PF(a);return a;}
function PF(a){JJ(a);}
function OB(a,b){var c,d;c=a.s();while(c.x()){d=c.r();d.bH(b);}}
function Mb(a,b){var c,d;c=a.s();while(c.x()){d=c.r();d.b1(b);}}
var H_=C();
function Wi(b){UU(W$());}
var V=C(0);
function Bx(){var a=this;B.call(a);a.iz=null;a.fT=0;}
var ZJ=null;var ZK=null;var Zn=null;var ZL=null;var ZM=null;var ZN=null;var ZO=null;var ZP=null;var ZQ=null;function MC(){MC=L(Bx);QQ();}
function B2(a,b){var c=new Bx();K2(c,a,b);return c;}
function K2(a,b,c){MC();E(a);a.iz=b;a.fT=c;}
function Db(a){return a.fT;}
function QQ(){ZJ=B2(D(60),2147483647);ZK=B2(D(61),1000);Zn=B2(D(62),900);ZL=B2(D(63),800);ZM=B2(D(64),700);ZN=B2(D(65),500);ZO=B2(D(66),400);ZP=B2(D(67),300);ZQ=B2(D(68),(-2147483648));}
function D6(){B.call(this);this.ep=0;}
function Ix(a){E(a);a.gA();}
function G$(a,b){E(a);a.c_(b);}
function Rj(a){a.c_(a.dj());}
function QO(a){a.c_(FM(a.cb()));}
function P8(a){return a.ds(Xu((a.cb()).jc()));}
function RN(a,b){return (a.cb()).cK(b);}
function Ru(a,b,c){a.g5();(a.cb()).bm(b,c);return a;}
function Ra(a){if(a.ep){a.hB();a.ep=0;}}
function TQ(a){return a.eg();}
function Oe(a,b,c){return a.gG(b,c);}
var HS=C();
function Mh(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function VM(b){b.dS();}
function L9(b){QB(b,0);}
function QB(b,c){return setTimeout(function(){VM(b);},c);}
function L4(){return T_();}
function TL(b){return b.$meta.item;}
function Qx(b){return $rt_str(b.$meta.name);}
function T_(){return [];}
function Do(){var a=this;B.call(a);a.gv=null;a.im=null;}
function H6(a,b,c){var d,e,f,g;d=c.data;E(a);Is(b);e=d.length;f=0;while(f<e){g=d[f];Is(g);f=f+1|0;}a.gv=b;a.im=c.dV();}
function Is(b){var c,d;if(b.cg())G(JO(b));if(!It(b.n(0)))G(JO(b));c=1;while(c<b.c()){a:{d=b.n(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(It(d))break a;else G(JO(b));}}c=c+1|0;}}
function It(b){var c;a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}c=1;break a;}c=0;}return c;}
function C0(){B.call(this);this.ik=null;}
var ZG=null;var ZF=null;var ZE=null;function FD(){FD=L(C0);L_();}
function Ku(a){var b=new C0();Ij(b,a);return b;}
function Ij(a,b){FD();E(a);a.ik=b;}
function L_(){ZG=Ku(D(69));ZF=Ku(D(70));ZE=Ku(D(71));}
function BO(){B.call(this);this.b7=0;}
var Zd=null;var ZR=null;var ZS=null;function Er(){Er=L(BO);Oj();}
function OL(a){var b=new BO();HO(b,a);return b;}
function HO(a,b){Er();E(a);a.b7=b;}
function Sa(a){return a.b7;}
function CY(b){Er();return !b?ZR:Zd;}
function Jh(b){Er();return !b?D(72):D(73);}
function NH(a){return Jh(a.b7);}
function Na(a,b){if(a===b)return 1;return b instanceof BO&&b.b7==a.b7?1:0;}
function Oj(){Zd=OL(1);ZR=OL(0);ZS=F($rt_booleancls());}
var B$=C(P);
function HM(){var a=new B$();ES(a);return a;}
function CK(a){var b=new B$();FZ(b,a);return b;}
function ES(a){Bm(a);}
function FZ(a,b){C9(a,b);}
function IG(){B$.call(this);this.hf=null;}
function JO(a){var b=new IG();Ro(b,a);return b;}
function Ro(a,b){ES(a);a.hf=b;}
var LE=C(P);
function Qd(){var a=new LE();ML(a);return a;}
function ML(a){Bm(a);}
function Gb(){B.call(this);this.fH=null;}
function WA(a){var b=new Gb();Q4(b,a);return b;}
function Q4(a,b){E(a);a.fH=b;}
function R8(a,b,c){return UB(a.fH,b,c);}
var Jr=C();
function Pl(b){return $rt_str(b);}
function Dp(){CB.call(this);this.dY=null;}
function ZT(a){var b=new Dp();GA(b,a);return b;}
function GA(a,b){Eb(a);a.dY=b;}
function Fs(){var a=this;Dp.call(a);a.hu=0;a.dG=0;a.bf=null;a.de=null;a.eQ=null;}
function ZU(a,b){var c=new Fs();Ka(c,a,b);return c;}
function Ka(a,b,c){GA(a,b);a.bf=M();a.de=BH(32);a.hu=c;Rk();a.eQ=ZV;}
function Nz(a,b,c,d){var $$je;if(!I8(a))return;a:{try{a.dY.cl(b,c,d);break a;}catch($$e){$$je=Z($$e);if($$je instanceof EU){}else{throw $$e;}}a.dG=1;}}
function I8(a){if(a.dY===null)a.dG=1;return a.dG?0:1;}
function Hr(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=Ua(b,c,d-c|0);g=CZ(Cd(16,BG(e.length,1024)));h=Qk(g);i=a.eQ.h9();FD();j=ZF;i=F2(i,j);j=ZF;k=Ky(i,j);while(true){l=(Hi(k,f,h,1)).cZ();a.cl(g,0,CS(h));EN(h);if(!l)break;}while(true){l=(Gt(k,h)).cZ();a.cl(g,0,CS(h));EN(h);if(!l)break;}}
function Pg(a,b){(a.bf.v(b)).i(10);G2(a);}
function G2(a){var b;b=a.bf.c()<=a.de.data.length?a.de:BH(a.bf.c());a.bf.eo(0,a.bf.c(),b,0);Hr(a,b,0,a.bf.c());a.bf.ef(0);}
function S(){var a=this;B.call(a);a.ba=null;a.N=null;a.V=null;}
function ZW(){var a=new S();BI(a);return a;}
function BI(a){E(a);}
function KW(){S.call(this);this.iu=null;}
function XC(a){var b=new KW();Qe(b,a);return b;}
function Qe(a,b){var c,d;a.iu=b;BI(a);a.N=U(0.5,0.1,0.1);a.V=Q(4.0,2.5,(-5.0));Bp();c=ZX;d=M();O(K(d,D(74)),c);a.ba=N(d);ZX=ZX+1|0;}
function KY(){S.call(this);this.iW=null;}
function W2(a){var b=new KY();OR(b,a);return b;}
function OR(a,b){var c,d;a.iW=b;BI(a);a.N=U(0.0,0.8,0.8);a.V=Q((-10.0),12.0,(-7.5));Bp();c=ZX;d=M();O(K(d,D(74)),c);a.ba=N(d);ZX=ZX+1|0;}
function Y(){var a=this;BJ.call(a);a.W=0.0;a.O=null;}
function ZY(){var a=new Y();BL(a);return a;}
function BL(a){FI(a);}
function Ni(a,b){return BE(Ch(b,a.O));}
function NA(a,b){var c,d,e,f;c=Ch(a.O,b.br);d=BB(c,b.bd);if(d<0.0)return null;e=De(a.W,2.0)-(BB(c,c)-De(d,2.0));f=e<0.0?0.0:d-FP(e);if(f===0.0)return null;return Xk(a,a,b,f);}
function KZ(){Y.call(this);this.i$=null;}
function WY(a){var b=new KZ();TW(b,a);return b;}
function TW(a,b){var c,d;a.i$=b;BL(a);BF();a.m=ZZ;a.O=Q(3.0,2.0,6.0);a.W=1.75;Bp();c=Z0;d=M();O(K(d,D(75)),c);a.R=N(d);Z0=Z0+1|0;}
function K3(){Y.call(this);this.gS=null;}
function V5(a){var b=new K3();MD(b,a);return b;}
function MD(a,b){var c,d;a.gS=b;BL(a);BF();a.m=ZZ;a.O=Q((-4.0),5.0,2.0);a.W=2.0;Bp();c=Z0;d=M();O(K(d,D(75)),c);a.R=N(d);Z0=Z0+1|0;}
function KX(){S.call(this);this.gC=null;}
function XJ(a){var b=new KX();Mo(b,a);return b;}
function Mo(a,b){var c,d;a.gC=b;BI(a);a.N=U(0.5,0.3,0.75);a.V=Q((-2.0),5.0,0.0);Bp();c=ZX;d=M();O(K(d,D(74)),c);a.ba=N(d);ZX=ZX+1|0;}
function K0(){Y.call(this);this.ht=null;}
function Vt(a){var b=new K0();Pb(b,a);return b;}
function Pb(a,b){var c,d;a.ht=b;BL(a);BF();a.m=ZZ;a.O=Q((-5.0),5.0,(-6.0));a.W=4.0;Bp();c=Z0;d=M();O(K(d,D(75)),c);a.R=N(d);Z0=Z0+1|0;}
var FE=C(0);
function KT(){Y.call(this);this.iK=null;}
function WM(a){var b=new KT();S$(b,a);return b;}
function S$(a,b){var c,d;a.iK=b;BL(a);BF();a.m=Z1;a.O=Q(0.0,3.0,1.0);a.W=1.0;Bp();c=Z0;d=M();O(K(d,D(75)),c);a.R=N(d);Z0=Z0+1|0;}
var KP=C();
function XO(){var a=new KP();Ur(a);return a;}
function Ur(a){E(a);}
function TR(a,b){return Kc(a,b);}
function Kc(a,b){return NE(b);}
var GJ=C();
function VC(){var a=new GJ();P$(a);return a;}
function P$(a){E(a);}
function L0(a,b){return Js(a,b);}
function Js(a,b){return M9(b);}
var KO=C();
function WG(){var a=new KO();PL(a);return a;}
function PL(a){E(a);}
function Nq(a,b){return GL(a,b);}
function GL(a,b){return NP(b);}
var GH=C();
function VA(){var a=new GH();RS(a);return a;}
function RS(a){E(a);}
function Qf(a,b){return GW(a,b);}
function GW(a,b){return TS(b);}
function K1(){Y.call(this);this.hy=null;}
function Ve(a){var b=new K1();Tn(b,a);return b;}
function Tn(a,b){var c,d;a.hy=b;BL(a);BF();a.m=ZZ;a.O=Q(0.0,1.0,0.0);a.W=0.5;Bp();c=Z0;d=M();O(K(d,D(75)),c);a.R=N(d);Z0=Z0+1|0;}
var KN=C();
function Yh(){var a=new KN();UD(a);return a;}
function UD(a){E(a);}
function Pi(a,b){return LM(a,b);}
function LM(a,b){return MY(b);}
function KU(){Y.call(this);this.ia=null;}
function VR(a){var b=new KU();Qp(b,a);return b;}
function Qp(a,b){var c,d;a.ia=b;BL(a);BF();a.m=Z1;a.O=Q(4.0,3.0,1.0);a.W=1.5;Bp();c=Z0;d=M();O(K(d,D(75)),c);a.R=N(d);Z0=Z0+1|0;}
var E4=C(0);
var BY=C(Ck);
function DE(a){FB(a);}
function DF(){BY.call(this);this.f8=null;}
function Z2(a){var b=new DF();Ih(b,a);return b;}
function Ih(a,b){DE(a);a.f8=b;}
function Pw(a){return a.f8;}
var I7=C(DF);
function Wn(a){var b=new I7();PB(b,a);return b;}
function PB(a,b){Ih(a,b);}
function RW(a){return XG(a.gI());}
var LF=C();
function VQ(){var a=new LF();SI(a);return a;}
function SI(a){E(a);}
function Oy(a,b){return Iw(a,b);}
function Iw(a,b){return Nu(b);}
var Li=C();
function XU(){var a=new Li();Ug(a);return a;}
function Ug(a){E(a);}
function Sj(a,b){return Gd(a,b);}
function Gd(a,b){return P5(b);}
var LH=C();
function Xb(){var a=new LH();MZ(a);return a;}
function MZ(a){E(a);}
function Pc(a,b){return Jx(a,b);}
function Jx(a,b){return T8(b);}
var Lh=C();
function WD(){var a=new Lh();PQ(a);return a;}
function PQ(a){E(a);}
function Mu(a,b){return H$(a,b);}
function H$(a,b){return Nc(b);}
var LI=C();
function Vw(){var a=new LI();Ql(a);return a;}
function Ql(a){E(a);}
function Tg(a,b){return Iv(a,b);}
function Iv(a,b){return S2(b);}
var GI=C();
function W9(){var a=new GI();SJ(a);return a;}
function SJ(a){E(a);}
function LU(a,b){return HY(a,b);}
function HY(a,b){return RU(b);}
var Lg=C();
function XQ(){var a=new Lg();UZ(a);return a;}
function UZ(a){E(a);}
function QW(a,b){return HI(a,b);}
function HI(a,b){return O0(b);}
var LG=C();
function VG(){var a=new LG();RF(a);return a;}
function RF(a){E(a);}
function R1(a,b){return Gm(a,b);}
function Gm(a,b){return LV(b);}
var KQ=C();
function V1(){var a=new KQ();Om(a);return a;}
function Om(a){E(a);}
function Ue(a,b){return KJ(a,b);}
function KJ(a,b){return Q1(b);}
var GG=C();
function WV(){var a=new GG();MK(a);return a;}
function MK(a){E(a);}
function P_(a,b){return Hb(a,b);}
function Hb(a,b){return Q2(b);}
var H7=C();
function SP(b,c,d,e,f){var g,h;g=CN(e,f);if(!g){g=e;e=f;}else if(g>=0){c=c+0.5*(e-f|0);g=e;}else{b=b+0.5*(f-e|0);g=f;e=f;}h=SZ(b,c,d.bx,g,e);return Fg(Vb(d,h),d,0);}
function Fg(b,c,d){var e,f;e=Hu(b,c);f=null;if((e.s()).x())f=(e.s()).r();if(f!==null)return Sf(f,c,d);Cu();return Z3;}
function Hu(b,c){var d,e,f,g,h,i,j,k;d=VS();e=c.cc.data;f=e.length;g=0;while(g<f){h=e[g];i=h.ey(b);if(i!==null)d.bw(i);g=g+1|0;}d.gO(Mq(Wq()));j=X(B_,(d.e7()).data.length);k=0;while(true){e=j.data;if(k>=e.length)break;e[k]=(d.e7()).data[k];k=k+1|0;}i=M6(j);return i;}
function MQ(b,c){var d,e;d=Hu(b,c);e=null;if((d.s()).x())e=(d.s()).r();if(e!==null)return e.b4;return 0.0;}
function Sf(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=b.bM.bd;f=C5(Bk(b.b4,b.bM.bd),b.bM.br);g=b.H.f5(f);h=Ch(e,Bk(2.0*BB(g,e),g));i=b.H.m.bg;j=(i.f(f)).bv()*BB(g,e);i=b.H.m.bg;j=j-FP(1.0-De((i.f(f)).bv(),2.0)*(1.0-De(BB(g,e),2.0)));i=Bk(j,g);k=b.H.m.bg;k=Bk((k.f(f)).bv(),e);l=Ch(i,k);Cu();m=Z3;i=Cm(m,NV(b.H,f,g,h,c));if(d>=4)return i;n=Qm(b.H,C5(f,Bk(0.001,h)),h,c,d);o=Md(b.H,C5(g,Bk(0.001,l)),l,c,d);k=B8(1.0-b.H.m.by,n);p=B8(b.H.m.by,o);return Cm(i,Cm(k,p));}
function Qm(b,c,d,e,f){return B8((b.m.bN.f(c)).bv(),Fg(WI(c,d),e,f+1|0));}
function Md(b,c,d,e,f){return B8((b.m.bg.f(c)).bv(),Fg(XH(c,d),e,f+1|0));}
function NV(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;g=U(0.0,0.0,0.0);h=f.ck.data;i=h.length;j=0;while(j<i){k=h[j];l=Ch(k.V,c);m=BE(l);n=MQ(XN(c,m),f);o=n<=G1(l)&&n!==0.0?0:1;if(o){p=BB(m,d);q=p>0.0?B8(p,k.N):U(0.0,0.0,0.0);r=BB(m,BE(e));s=r<=0.0?U(0.0,0.0,0.0):B8(De(r,b.m.bU),k.N);g=Cm(g,Cm(E3(b.m.bW.f(c),q),E3(b.m.bJ.f(c),s)));}j=j+1|0;}return g;}
function SZ(b,c,d,e,f){return BE(C5(d.dC,C5(Bk(U6(b,e),d.c0),Bk(PU(c,f),d.c1))));}
function U6(b,c){var d;d=c;return (b-d/2.0)/(2.0*d);}
function PU(b,c){var d;d=c;return  -(b-d/2.0)/(2.0*d);}
function U4(b){return b.b4;}
var FC=C(0);
var GD=C(Ci);
function VZ(){var a=new GD();Sr(a);return a;}
function Sr(a){D4(a);}
function TX(a){return a;}
function R4(a,b){return Gi(a,b);}
function PH(a,b){H1(a,b);}
function T5(a,b,c){return IB(a,b,c);}
var Et=C(0);
var Eh=C(0);
function JU(){var a=this;B.call(a);a.dh=null;a.ct=null;}
function Wg(a){var b=new JU();Q5(b,a);return b;}
function Q5(a,b){var c;E(a);a.ct=b;c=a;b.classObject=c;}
function G4(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=Wg(b);return c;}
function LP(a){var b,c;b=Dj(a);c=M();O(K(c,D(76)),b);return N(c);}
function Oc(a){return a.ct;}
function Uq(a){if(a.dh===null)a.dh=Qx(a.ct);return a.dh;}
function L$(a){return G4(TL(a.ct));}
var Ld=C(Bo);
function Ce(){Ba.call(this);this.cU=0.0;}
var Z4=0.0;var Z5=null;function I3(){I3=L(Ce);OE();}
function XF(a){var b=new Ce();EG(b,a);return b;}
function V2(a){var b=new Ce();JE(b,a);return b;}
function EG(a,b){I3();Cc(a);a.cU=b;}
function JE(a,b){I3();EG(a,b);}
function Lk(b){I3();return XF(b);}
function Nf(a,b){if(a===b)return 1;return b instanceof Ce&&b.cU===a.cU?1:0;}
function OE(){Z4=$rt_globals.NaN;Z5=F($rt_floatcls());}
var Ec=C(0);
var Hg=C();
function NO(b,c){var d,e,f,g;d=b.data;e=BH(c);f=BG(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Tp(b,c){var d,e,f,g;d=b.data;e=H3((EL(b)).gf(),c);f=BG(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function QK(b,c){var d,e,f,g,h,i,j,k,l,m;d=b.data.length;if(!d)return;e=X(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data.length;if(h>=i)break;j=BG(i,h+f|0);k=h+(2*f|0)|0;l=BG(i,k);TY(g,e,h,j,l,c);h=k;}f=f*2|0;m=g;g=e;e=m;}a:{if(g!==b){h=0;while(true){m=g.data;if(h>=m.length)break a;e.data[h]=m[h];h=h+1|0;}}}}
function TY(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=d;i=e;a:{b:{while(d!=e){if(i==f)break b;j=b.data;k=j[d];l=j[i];if(g.fL(k,l)>0){j=c.data;m=h+1|0;j[h]=l;i=i+1|0;}else{j=c.data;m=h+1|0;j[h]=k;d=d+1|0;}h=m;}while(true){if(i>=f)break a;n=c.data;j=b.data;m=h+1|0;o=i+1|0;n[h]=j[i];h=m;i=o;}}while(true){if(d>=e)break a;n=c.data;j=b.data;o=h+1|0;m=d+1|0;n[h]=j[d];h=o;d=m;}}}
function Nk(b,c){return Od(b,0,b.data.length,c);}
function Od(b,c,d,e){var f,g,h,i,j;f=CN(c,d);if(f>0)G(HM());if(!f)return (-1);g=d-1|0;while(true){h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>g)return ( -i|0)-2|0;}else{g=i-1|0;if(g<c)return ( -i|0)-1|0;}}return i;}
function M6(b){QZ(b);return Vu(b);}
function Ls(){D6.call(this);this.dO=null;}
function Wb(){var a=new Ls();OP(a);return a;}
function Xl(a){var b=new Ls();P3(b,a);return b;}
function OP(a){Ix(a);}
function P3(a,b){G$(a,b);}
function SH(a){return a.dO;}
function RI(a,b){a.dO=b;}
function Re(a){return a.dO;}
function Rx(a,b){return b;}
function S8(a){return a.ja();}
var ER=C();
var Z6=null;function HN(){var b;if(Z6===null){b=new Fs;TO();Ka(b,Zg,0);Z6=b;}return Z6;}
function I9(){return Long_fromNumber(new Date().getTime());}
var J_=C(Cx);
function X_(a){var b=new J_();SS(b,a);return b;}
function SS(a,b){Em(a,b);}
function Tx(a){FJ(a);return a.dt.bb;}
var Lf=C();
function U7(){var a=new Lf();PK(a);return a;}
function PK(a){E(a);}
function ND(a,b){return J9(a,b);}
function J9(a,b){return UO(b);}
var IR=C();
function X2(){var a=new IR();Q$(a);return a;}
function Q$(a){E(a);}
var D3=C(BQ);
function Ia(a){D8(a);}
var IT=C(D3);
function XV(){var a=new IT();Np(a);return a;}
function Np(a){Ia(a);}
var IQ=C();
function VW(){var a=new IQ();SW(a);return a;}
function SW(a){E(a);}
var BC=C();
var Z7=null;var Z8=null;var Z9=null;var Z$=null;var Z_=null;var AAa=null;function Bb(){Bb=L(BC);No();}
function EF(b){Bb();return (b&64512)!=55296?0:1;}
function EC(b){Bb();return (b&64512)!=56320?0:1;}
function KG(b){Bb();return !EF(b)&&!EC(b)?0:1;}
function Kb(b,c){Bb();return ((b&1023)<<10|c&1023)+65536|0;}
function FY(b){var c;Bb();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function Fw(b){Bb();return (56320|b&1023)&65535;}
function Fq(b){Bb();return Gg(b)&65535;}
function Gg(b){Bb();return F$(Hh(),b);}
function Hh(){Bb();if(Z9===null)Z9=Sz(((IA()).value!==null?$rt_str((IA()).value):null));return Z9;}
function IA(){Bb();if(Z_===null)Z_=HP();return Z_;}
function F$(b,c){var d,e;Bb();d=Jv(b,c);if(d>=0){e=b.data;if(d<(e.length/2|0))return c+e[(d*2|0)+1|0]|0;}return 0;}
function Jv(b,c){var d,e,f,g,h,i;Bb();d=b.data;e=0;f=(d.length/2|0)-1|0;while(true){g=(e+f|0)/2|0;h=d[g*2|0];i=CN(h,c);if(!i)break;if(i<=0){e=g+1|0;if(e>f)return g;}else{f=g-1|0;if(f<e)return f;}}return g;}
function F3(b){Bb();return H9(b);}
function H9(b){var c,d,e,f,g,h,i,j;Bb();c=Gn();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=CN(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function CG(b,c){Bb();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gn(){Bb();if(Z8===null)Z8=TF(((Gc()).value!==null?$rt_str((Gc()).value):null));return Z8;}
function Gc(){Bb();if(AAa===null)AAa=Kr();return AAa;}
function No(){Z7=F($rt_charcls());Z$=X(BC,128);}
function HP(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function Kr(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
var DZ=C(BY);
function J$(a){DE(a);}
var IU=C(DZ);
function XR(){var a=new IU();M0(a);return a;}
function M0(a){J$(a);}
var IS=C(DA);
function WF(){var a=new IS();LQ(a);return a;}
function LQ(a){JZ(a);}
function Hm(){var a=this;B.call(a);a.dv=null;a.c7=null;}
function We(a,b){var c=new Hm();TT(c,a,b);return c;}
function TT(a,b,c){a.c7=b;a.dv=c;E(a);}
function TZ(a,b){var c,$$je;a:{try{a.dv.ew(a.c7);}catch($$e){$$je=Z($$e);if($$je instanceof Bq){c=$$je;break a;}else{throw $$e;}}return;}G(c);}
function Ui(a,b){var c,$$je;a:{try{a.dv.ew(a.c7);}catch($$e){$$je=Z($$e);if($$je instanceof Bq){c=$$je;break a;}else{throw $$e;}}return;}G(c);}
function Lc(){B.call(this);this.fE=null;}
function WT(a){var b=new Lc();SQ(b,a);return b;}
function SQ(a,b){E(a);a.fE=b;}
function R$(a){Uk(a.fE);}
var G3=C();
function U5(b){return b;}
function Cs(){B.call(this);this.bt=null;}
function Ek(a,b){E(a);a.bt=b;}
function GR(a){return a.bt;}
function Kj(a,b){var c,d,e;if(b===null){Bc();return Zq;}a:{c=$rt_str(typeof b);d=(-1);switch(c.b0()){case -1034364087:if(!c.C(D(77)))break a;d=2;break a;case -1023368385:if(!c.C(D(78)))break a;d=0;break a;case -891985903:if(!c.C(D(79)))break a;d=1;break a;case 64711720:if(!c.C(D(80)))break a;d=3;break a;default:}}switch(d){case 0:if(!($rt_globals.Object.prototype.toString.apply(b)==='[object Array]'?1:0)){Bc();e=Zt;}else{Bc();e=Zs;}return e;case 1:break;case 2:Bc();return Y9;case 3:Bc();return Y8;default:Bc();return Zr;}Bc();return Y7;}
function LL(a){return KK();}
function Gz(a,b){if(!(b instanceof Ft))return IE(b);return b;}
function Ib(a,b){if(!(b instanceof FW))return Pr(b);return b;}
function Je(a,b){U$();switch(Y6.data[Bn(a.cq(b))]){case 1:return Pl(b);case 2:return CY(Ov(b));case 3:return OX(b);default:}return b;}
function JT(a,b){if(b===null)return null;if(b instanceof BV)return $rt_ustr(b);if(b instanceof BO)return !!b.fd();if(b instanceof Ce)return b.jQ();if(b instanceof B9)return b.bv();if(b instanceof Ba)return b.M();if(!(b instanceof BC))return b;return $rt_ustr(Iy(b));}
function Hz(a){return a.eg();}
function OX(b){var c;c=U5(b);if(c!==Su(c))return Bv(c);if(TJ(c)<=2.147483647E9)return Bf(c|0);return EA(YI(c));}
function MB(a){return a.fp();}
function Qg(a){return a.f6();}
function PW(a,b){return a.fa(b);}
function Op(a,b){return a.fZ(b);}
function R6(a,b){return a.fY(b);}
function KK(){return {};}
function Of(b){var keys=[];for(var key in b){if($rt_globals.Object.prototype.hasOwnProperty.call(b,key)&&key!='$H'){keys.push(key);}}return keys;}
var Ft=C(Cs);
function XS(a){var b=new Ft();MJ(b,a);return b;}
function IE(b){if(b!==null&&!(typeof b==='undefined'?1:0))return XS(b);return null;}
function MJ(a,b){Ek(a,b);}
function FO(a){return Rq(a.bt);}
function K9(a,b){return (FO(a))[b];}
function RX(a){return (FO(a)).length;}
function Td(a,b){return K9(a,b);}
function IY(){S.call(this);this.i9=null;}
function Wk(a){var b=new IY();Nw(b,a);return b;}
function Nw(a,b){a.i9=b;BI(a);a.N=U(0.75,0.75,0.75);a.V=Q((-4.0),3.0,4.0);a.ba=D(81);}
var Dn=C(Cz);
function F_(a,b,c,d){Fk(a,b);a.z=c;a.X=d;}
function Ua(b,c,d){return V$(0,b.data.length,b,c,c+d|0,0);}
function Ny(a,b,c,d){var e,f,g,h,i,j,k,l;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BD;i=M();O(K(O(K(i,D(82)),g),D(54)),f);Cb(h,N(i));G(h);}if(BZ(a)<d)G(XB());if(d<0){i=new BD;h=M();K(O(K(h,D(55)),d),D(56));Cb(i,N(h));G(i);}j=a.z;k=0;while(k<d){g=c+1|0;f=j+1|0;e[c]=a.iN(j);k=k+1|0;c=g;j=f;}a.z=a.z+d|0;return a;}}e=b.data;i=new BD;f=e.length;l=M();CM(O(K(O(K(l,D(57)),c),D(40)),f),41);Cb(i,N(l));G(i);}
function LT(a,b){JS(a,b);return a;}
var DR=C(Dn);
function Ik(a,b,c,d){F_(a,b,c,d);}
function KC(){var a=this;DR.call(a);a.iX=0;a.fk=0;a.gd=null;}
function V$(a,b,c,d,e,f){var g=new KC();UM(g,a,b,c,d,e,f);return g;}
function UM(a,b,c,d,e,f,g){Ik(a,c,e,f);a.fk=b;a.iX=g;a.gd=d;}
function NW(a,b){return a.gd.data[b+a.fk|0];}
function I2(){S.call(this);this.ib=null;}
function Ya(a){var b=new I2();M4(b,a);return b;}
function M4(a,b){a.ib=b;BI(a);a.N=U(0.75,0.75,0.75);a.V=Q(4.0,3.0,(-4.0));a.ba=D(81);}
function I0(){S.call(this);this.hd=null;}
function X1(a){var b=new I0();QU(b,a);return b;}
function QU(a,b){a.hd=b;BI(a);a.N=U(0.75,0.75,0.75);a.V=Q((-4.0),3.0,(-4.0));a.ba=D(81);}
var JA=C();
function S0(b,c,d){var e,f;e=0;while(e<d){f=b.data[e+c|0];$rt_putStdout(f&255);e=e+1|0;}}
function I1(){S.call(this);this.hK=null;}
function WE(a){var b=new I1();RB(b,a);return b;}
function RB(a,b){a.hK=b;BI(a);a.N=U(0.75,0.75,0.75);a.V=Q(4.0,3.0,4.0);a.ba=D(81);}
function IW(){Y.call(this);this.gl=null;}
function Yg(a){var b=new IW();R0(b,a);return b;}
function R0(a,b){a.gl=b;BL(a);BF();a.m=ZZ;a.O=Q(0.0,1.0,0.0);a.W=1.0;a.R=D(83);}
var Fn=C();
var AAb=null;function Ko(){return (DU()).hG();}
function UG(b){return (DU()).b$(b);}
function O$(b){return (DU()).c8(b);}
function Ng(b){return (DU()).be(b);}
function Qc(b){AAb=b;}
function DU(){var b;if(AAb===null){b=XP();DK();Qc(Fz(F(CX),b,AAc));if(AAb===null){(HN()).e_(D(84));AAb=Wb();}}return AAb;}
function Rm(){return GP(F(CX));}
var JB=C();
function Ov(b){return b?1:0;}
var BR=C();
var AAd=null;var AAe=null;var AAf=null;var AAg=null;var AAh=null;var AAi=null;function F1(){F1=L(BR);Qa();}
function JG(b){F1();return b instanceof Ba;}
function LC(b){F1();return b===null?null:b instanceof Cw?b:!(b instanceof Ba)?null:Bf(b.M());}
function Jy(b){var c,$$je;F1();if(b===null)return null;a:{try{c=Bf(Fa(b));}catch($$e){$$je=Z($$e);if($$je instanceof B6){break a;}else{throw $$e;}}return c;}return null;}
function En(b){var c;F1();c=LC(b);if(c===null&&b!==null)return Jy(b.d());return c;}
function Qa(){AAd=K$(0);AAe=Gk(0);AAf=Bf(0);AAg=EA(BK);AAh=Lk(0.0);AAi=Bv(0.0);}
var Gq=C(BP);
function Wu(){var a=new Gq();Q_(a);return a;}
function Q_(a){var b,c;DJ(a);b=X(BJ,7);c=b.data;Bp();c[0]=AAj;c[1]=WM(a);c[2]=VR(a);c[3]=Ve(a);c[4]=V5(a);c[5]=WY(a);c[6]=Vt(a);a.cc=b;a.ck=C7(S,[XJ(a),W2(a),XC(a)]);a.bx=I_(Q(0.0,1.0,0.0),Q(5.0,5.0,5.0));}
var Gp=C(BP);
function Yj(){var a=new Gp();O9(a);return a;}
function O9(a){var b,c;DJ(a);b=X(BJ,2);c=b.data;c[0]=Yg(a);Bp();c[1]=AAj;a.cc=b;a.ck=C7(S,[WE(a),Ya(a),Wk(a),X1(a)]);a.bx=F4(Q(0.0,1.0,0.0),Q(3.0,3.0,3.0),600.0,450.0);}
function B9(){Ba.call(this);this.Z=0.0;}
var AAk=0.0;var AAl=null;function Fr(){Fr=L(B9);Ps();}
function PG(a){var b=new B9();J8(b,a);return b;}
function J8(a,b){Fr();Cc(a);a.Z=b;}
function UH(a){return a.Z;}
function Pu(a){return a.Z|0;}
function Bv(b){Fr();return PG(b);}
function Gu(b){Fr();return ((M()).hS(b)).d();}
function NB(a){return Gu(a.Z);}
function U2(a,b){if(a===b)return 1;return b instanceof B9&&b.Z===a.Z?1:0;}
function Lx(b,c){Fr();return CN(b,c);}
function Nm(a){return $rt_globals.isNaN(a.Z)?1:0;}
function O6(a){return !$rt_globals.isFinite(a.Z)?1:0;}
function Ps(){AAk=$rt_globals.NaN;AAl=F($rt_doublecls());}
var Go=C(BP);
function Wy(){var a=new Go();Tf(a);return a;}
function Tf(a){var b,c;DJ(a);b=X(BJ,1);c=b.data;Bp();c[0]=AAj;a.cc=b;b=X(S,1);b.data[0]=Xc(a);a.ck=b;a.bx=F4(Q(0.0,1.0,0.0),Q(3.0,3.0,3.0),600.0,450.0);}
function D_(){var a=this;BJ.call(a);a.eO=0.0;a.cw=null;}
function AAm(){var a=new D_();F8(a);return a;}
function F8(a){FI(a);}
function Qy(a,b){return a.cw;}
function Tb(a,b){var c,d;c=BB(a.cw,b.bd);if(c>0.0)return null;d=(a.eO+BB(a.cw,b.br))/ -c;return Vh(a,a,b,d);}
var Gs=C(D_);
function Wr(){var a=new Gs();Ta(a);return a;}
function Ta(a){F8(a);BF();a.m=AAn;a.cw=Q(0.0,1.0,0.0);a.eO=0.0;a.R=D(85);}
var Gr=C(Y);
function X9(){var a=new Gr();Pt(a);return a;}
function Pt(a){BL(a);BF();a.m=AAn;a.O=Q(0.0,(-10000.0),0.0);a.W=1.0E-7;a.R=D(85);}
function J6(){var a=this;Bz.call(a);a.eG=null;a.fP=null;}
function XH(a,b){var c=new J6();Ux(c,a,b);return c;}
function Ux(a,b,c){a.eG=b;a.fP=c;C4(a);a.br=a.eG;a.bd=a.fP;}
function J3(){var a=this;Bz.call(a);a.eR=null;a.eT=null;}
function WI(a,b){var c=new J3();UY(c,a,b);return c;}
function UY(a,b,c){a.eR=b;a.eT=c;C4(a);a.br=a.eR;a.bd=a.eT;}
function K7(){BY.call(this);this.dg=null;}
function Vx(a){var b=new K7();PO(b,a);return b;}
function PO(a,b){a.dg=b;DE(a);}
function Tt(a){return a.dg.q();}
function Tc(a){return X_(a.dg);}
function J5(){var a=this;Bz.call(a);a.f0=null;a.ei=null;}
function XN(a,b){var c=new J5();UW(c,a,b);return c;}
function UW(a,b,c){a.f0=b;a.ei=c;C4(a);a.br=a.f0;a.bd=a.ei;}
var CO=C(0);
function Uh(a,b,c){return (a.hF(b)).h4(Xe(c));}
function RK(b,c){return c.gY(b);}
var EO=C();
var AAo=null;function AAp(){var a=new EO();U0(a);return a;}
function U0(a){E(a);}
function Uy(a){if(AAo===null)AAo=CY(NU()?1:0);return AAo.fd();}
function NF(a,b){var c,d;c=HV();d=Xd(c);SG($rt_ustr(b),CL(d,"handle"));return c.gc();}
function Mt(b,c){b.bi(X8(c));}
function NU(){{try {if(typeof $rt_globals.WebAssembly==="object"&&typeof $rt_globals.WebAssembly.instantiate==="function"){const module=new $rt_globals.WebAssembly.Module($rt_globals.Uint8Array.of(0x0,0x61,0x73,0x6d,0x01,0x00,0x00,0x00));if(module instanceof $rt_globals.WebAssembly.Module)return new $rt_globals.WebAssembly.Instance(module) instanceof $rt_globals.WebAssembly.Instance;}}catch(e){}return false;}}
function SG(b,c){(($rt_globals.fetch(b)).then(function(response){return $rt_globals.WebAssembly.compileStreaming(response);})).then(function(module){return c(module);});}
var Fx=C();
var J2=C(P);
function Qb(){var a=new J2();LS(a);return a;}
function LS(a){Bm(a);}
function Jo(){B.call(this);this.el=null;}
function Xe(a){var b=new Jo();SX(b,a);return b;}
function SX(a,b){E(a);a.el=b;}
function QI(a,b){return H2(a,b);}
function H2(a,b){return RK(a.el,b);}
function Bs(){var a=this;B.call(a);a.bJ=null;a.bN=null;a.bW=null;a.bg=null;a.by=0.0;a.bU=0.0;a.cA=null;}
function AAq(){var a=new Bs();C8(a);return a;}
function C8(a){E(a);}
var Ki=C(Bs);
function Vs(){var a=new Ki();Pa(a);return a;}
function Pa(a){C8(a);a.cA=D(85);a.bg=Vw();a.bN=VG();a.bW=VQ();a.bJ=Xb();a.bU=15.0;a.by=0.0;}
function T8(b){return U(0.5,0.5,0.5);}
function Nu(b){return U(0.25,0.25,0.25);}
function LV(b){return Bv(0.65);}
function S2(b){return Bv(0.0);}
var Kf=C(Bs);
function U9(){var a=new Kf();QV(a);return a;}
function QV(a){C8(a);a.cA=D(86);a.bg=XU();a.bN=WD();a.bW=XQ();a.bJ=U7();a.bU=0.0;a.by=0.1;}
function UO(b){return U(0.25,0.25,0.25);}
function O0(b){return U(0.25,0.25,0.25);}
function Nc(b){return Bv(0.25);}
function P5(b){return Bv(0.0);}
var JI=C(Bs);
function W4(){var a=new JI();L8(a);return a;}
function L8(a){C8(a);a.cA=D(87);a.bg=WV();a.bN=W9();a.bW=VA();a.bJ=VC();a.bU=100.0;a.by=0.95;}
function M9(b){return U(0.5,0.5,0.5);}
function TS(b){return U(0.0,0.0,0.0);}
function RU(b){return Bv(0.0);}
function Q2(b){return Bv(1.0);}
var Kg=C(Bs);
function Xm(){var a=new Kg();TC(a);return a;}
function TC(a){C8(a);a.cA=D(88);a.bg=V1();a.bN=XO();a.bW=WG();a.bJ=Yh();a.bU=25.0;a.by=0.1;}
function MY(b){return U(0.75,0.75,0.75);}
function NP(b){return U(1.0,1.0,1.0);}
function NE(b){return Bv(1.0);}
function Q1(b){return Bv(0.0);}
var FW=C(Cs);
function AAr(){var a=new FW();N3(a);return a;}
function W1(a){var b=new FW();K4(b,a);return b;}
function Pr(b){if(b!==null&&!(typeof b==='undefined'?1:0))return W1(b);return null;}
function N3(a){K4(a,KK());}
function K4(a,b){Ek(a,b);}
function Kn(a,b){return a.bt[$rt_ustr(b)]||null;}
function GB(a){return IE(Of(a.bt));}
function Lp(a,b,c){a.bt[$rt_ustr(b)]=c;return a;}
function T2(a){return Hz(a);}
function Py(a,b){return JT(a,b);}
function OF(a,b){return Je(a,b);}
function Mg(a,b){return Ib(a,b);}
function TG(a,b){return Gz(a,b);}
function Mp(a){return LL(a);}
function UI(a,b){return Kj(a,b);}
function PJ(a){return GR(a);}
function U3(a,b,c){return Lp(a,b,c);}
function T1(a,b){return Kn(a,b);}
function Ph(a){return GB(a);}
function BV(){var a=this;B.call(a);a.h=null;a.ca=0;}
var AAs=null;function LB(){LB=L(BV);R3();}
function Vc(a){var b=new BV();GN(b,a);return b;}
function Pf(a,b,c){var d=new BV();LN(d,a,b,c);return d;}
function GN(a,b){var c,d,e;LB();c=b.data;E(a);d=c.length;a.h=BH(d);e=0;while(e<d){a.h.data[e]=c[e];e=e+1|0;}}
function LN(a,b,c,d){var e,f;LB();E(a);a.h=BH(d);e=0;while(e<d){f=b.data;a.h.data[e]=f[e+c|0];e=e+1|0;}}
function N0(a,b){if(b>=0&&b<a.h.data.length)return a.h.data[b];G(Pp());}
function RA(a){return a.h.data.length;}
function TU(a){return a.h.data.length?0:1;}
function SA(a,b){var c,d,e,f,g;if(a===b)return 0;c=BG(a.c(),b.c());d=0;while(true){if(d>=c)return a.c()-b.c()|0;e=a.n(d);f=b.n(d);g=e-f|0;if(g)break;d=d+1|0;}return g;}
function QH(a,b){var c,d,e,f;if(a===b)return 1;if(b.c()>a.c())return 0;c=0;d=a.c()-b.c()|0;while(d<a.c()){e=a.n(d);f=c+1|0;if(e!=b.n(c))return 0;d=d+1|0;c=f;}return 1;}
function NI(a,b,c){var d,e,f,g;d=Cd(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.h.data.length)return (-1);if(a.h.data[d]==e)break;d=d+1|0;}return d;}f=FY(b);g=Fw(b);while(true){if(d>=(a.h.data.length-1|0))return (-1);if(a.h.data[d]==f&&a.h.data[d+1|0]==g)break;d=d+1|0;}return d;}
function QG(a,b){return a.eh(b,0);}
function N5(a,b,c){var d,e,f,g,h,i;d=BG(c,a.c()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.h.data[d]==e)break;d=d+(-1)|0;}return d;}f=FY(b);g=Fw(b);while(true){if(d<1)return (-1);if(a.h.data[d]==g){h=a.h.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function Te(a,b){return a.iV(b,a.c()-1|0);}
function MH(a,b,c){if(b>c)G(G9());return Pf(a.h,b,c-b|0);}
function To(a,b){return a.bL(b,a.c());}
function OV(a){return a;}
function T3(a){var b,c,d;b=BH(a.h.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.h.data[c];c=c+1|0;}return b;}
function Iy(b){LB();return b===null?D(3):b.d();}
function SB(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BV))return 0;c=b;if(c.c()!=a.c())return 0;d=0;while(d<c.c()){if(a.n(d)!=c.n(d))return 0;d=d+1|0;}return 1;}
function SU(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.c()!=b.c())return 0;c=0;while(c<a.c()){if(Fq(a.n(c))!=Fq(b.n(c)))return 0;c=c+1|0;}return 1;}
function NT(a){var b,c,d,e;a:{if(!a.ca){b=a.h.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.ca=(31*a.ca|0)+e|0;d=d+1|0;}}}return a.ca;}
function Ri(a,b){return a.hX(b);}
function R3(){AAs=Xt();}
var LO=C(P);
function Xn(){var a=new LO();Ok(a);return a;}
function Ok(a){Bm(a);}
function Ea(){var a=this;Df.call(a);a.fj=null;a.ez=null;}
function H8(a,b,c,d){J0(a,b,c,d);a.fj=BH(512);a.ez=CZ(512);}
function N7(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.fj;e=0;f=0;g=a.ez;a:{while(true){if((e+32|0)>f&&Ca(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=BG(BZ(b)+j|0,i.length);b.iI(d,j,f-j|0);e=0;}if(!Ca(c)){if(!Ca(b)&&e>=f){Bt();k=ZI;}else{Bt();k=ZH;}break a;}i=g.data;l=0;m=BG(BZ(c),i.length);n=VV(b,c);k=a.gQ(d,e,f,g,l,m,n);e=n.fc;j=n.fQ;if(k===null){if(!Ca(b)&&e>=f){Bt();k=ZI;}else if(!Ca(c)&&e>=f){Bt();k=ZH;}}c.ff(g,0,j);if(k!==null)break;}}b.eE(CS(b)-(f-e|0)|0);return k;}
var IJ=C(Ea);
function WP(a){var b=new IJ();QJ(b,a);return b;}
function QJ(a,b){H8(a,b,2.0,4.0);}
function Uv(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.dQ(2))break a;Bt();i=ZH;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!KG(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.dQ(3))break a;Bt();i=ZH;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if(!EF(l))
{i=Ds(1);break a;}if(j>=d){if(h.il())break a;Bt();i=ZI;break a;}n=j+1|0;p=k[j];if(!EC(p)){j=n+(-2)|0;i=Ds(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.dQ(4))break a;Bt();i=ZH;break a;}k=e.data;q=Kb(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.iQ(j);h.gB(f);return i;}
var Fl=C(0);
function Ir(){B.call(this);this.eW=null;}
function V3(a){var b=new Ir();Nr(b,a);return b;}
function Nr(a,b){E(a);a.eW=b;}
function Nl(a,b){HF(a,b);}
function HF(a,b){Sh(a.eW,b);}
function M7(a,b){a.ip(b);}
var BA=C();
var Z0=0;var ZX=0;var AAj=null;var AAt=null;var AAu=null;var AAv=null;var AAw=null;var AAx=null;function Bp(){Bp=L(BA);Qo();}
function Qo(){var b,c;Z0=0;ZX=0;b=X(Bs,4);c=b.data;BF();c[0]=AAy;c[1]=AAn;c[2]=ZZ;c[3]=Z1;AAz=b;AAj=Wr();AAw=X9();AAt=Wu();AAu=Yj();AAv=Wy();b=X(BP,1);b.data[0]=AAt;AAx=b;}
var B6=C(B$);
function Yb(){var a=new B6();NL(a);return a;}
function Vf(a){var b=new B6();Dc(b,a);return b;}
function NL(a){ES(a);}
function Dc(a,b){FZ(a,b);}
function Hj(){S.call(this);this.hW=null;}
function Xc(a){var b=new Hj();Pj(b,a);return b;}
function Pj(a,b){a.hW=b;BI(a);a.N=U(1.0,1.0,1.0);a.V=Q(0.0,1.0,0.0);a.ba=D(81);}
var GY=C();
function Ww(){var a=new GY();Rt(a);return a;}
function Rt(a){E(a);}
var GZ=C();
function X6(){var a=new GZ();Qq(a);return a;}
function Qq(a){E(a);}
function MG(a,b,c){return Kt(b,c);}
var FR=C(Do);
var ZV=null;function Rk(){Rk=L(FR);QP();}
function Xr(){var a=new FR();KH(a);return a;}
function KH(a){Rk();H6(a,D(89),X(BV,0));}
function Tj(a){return WP(a);}
function QP(){ZV=Xr();}
var CR=C();
var AAA=0;var AAB=0;var AAC=null;function T4(b,c){var d;d=3*b|0;if(c!==null&&c.data.length==d)return c;return CZ(d);}
function NS(b,c,d,e){var f,g,h,i,j,k,l;AAA=b;AAB=c;Bp();AAC=AAx.data[d];f=e*0.005;g=0.55+f*6.0*2.0*3.141592653589793;h=1.55;i=2.55;j=f-0.2;if(j>0.0){h=h+20.0*Km(1.0,j);i=i+20.0*JF(Km(1.0,j)*3.141592653589793/2.0);}k=i*NC(g);l=i*JF(g);AAC.bx=I_(Q(0.0,1.0,0.0),Q(k,h,l));}
function St(b,c){var d,e;d=0;e=0;while(e<AAA){d=Nd(e,b,c,d);e=e+1|0;}}
function Nd(b,c,d,e){var f,g,h,i;f=d.data;g=SP(b,c,AAC,AAA,AAB);h=e+1|0;f[e]=(g.cW(g.bn)*255.0+(-128.0)|0)<<24>>24;i=h+1|0;f[h]=(g.cW(g.bk)*255.0+(-128.0)|0)<<24>>24;h=i+1|0;f[i]=(g.cW(g.bl)*255.0+(-128.0)|0)<<24>>24;return h;}
var Lz=C();
function Vn(){var a=new Lz();Og(a);return a;}
function Og(a){E(a);}
function UU(b){HZ(b,Vn());b.i6();}
function NG(a,b){if(!(b instanceof BV))$rt_globals.self.postMessage(b);else $rt_globals.self.postMessage($rt_ustr(b));}
function RT(a,b){var c,d,e,f,g;c=b.data;d=c.length;e=new $rt_globals.Array();f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function PX(a,b){$rt_globals.self.onmessage=CL(V3(b),"handleEvent");}
function Sh(b,c){b.g8(c.data);}
function Fm(){var a=this;B.call(a);a.bn=0.0;a.bk=0.0;a.bl=0.0;}
var Z3=null;function Cu(){Cu=L(Fm);QS();}
function ED(a,b,c){var d=new Fm();Iz(d,a,b,c);return d;}
function Iz(a,b,c,d){Cu();E(a);a.bn=b;a.bk=c;a.bl=d;}
function U(b,c,d){Cu();return ED(b,c,d);}
function B8(b,c){Cu();return ED(b*c.bn,b*c.bk,b*c.bl);}
function E3(b,c){Cu();return ED(b.bn*c.bn,b.bk*c.bk,b.bl*c.bl);}
function Cm(b,c){Cu();return ED(b.bn+c.bn,b.bk+c.bk,b.bl+c.bl);}
function TN(a,b){if(b<0.0)b=0.0;else if(b>1.0)b=1.0;return b;}
function QS(){Z3=U(0.0,0.0,0.0);}
var GM=C(P);
function Ol(){var a=new GM();QM(a);return a;}
function JY(a){var b=new GM();Oa(b,a);return b;}
function QM(a){Bm(a);}
function Oa(a,b){C9(a,b);}
var Gh=C(P);
function Wo(a){var b=new Gh();Q0(b,a);return b;}
function V8(){var a=new Gh();Pn(a);return a;}
function Q0(a,b){C9(a,b);}
function Pn(a){Bm(a);}
function Ks(){B.call(this);this.dU=null;}
function Xp(a){var b=new Ks();S9(b,a);return b;}
function S9(a,b){E(a);a.dU=b;}
function Yd(b){return Xp(b);}
function Uf(a,b){a.dU.bi(b);}
function TP(a,b){a.dU.hj(b);}
function CF(){var a=this;B.call(a);a.hg=null;a.e0=0;}
function FA(a,b,c){E(a);a.hg=b;a.e0=c;}
function Bn(a){return a.e0;}
function B_(){var a=this;B.call(a);a.H=null;a.b4=0.0;a.bM=null;}
function AAD(){var a=new B_();Fj(a);return a;}
function Fj(a){E(a);}
function IK(){var a=this;B_.call(a);a.eB=null;a.er=null;a.fs=0.0;a.io=null;}
function Vh(a,b,c,d){var e=new IK();UR(e,a,b,c,d);return e;}
function UR(a,b,c,d,e){a.io=b;a.eB=c;a.er=d;a.fs=e;Fj(a);a.H=a.eB;a.bM=a.er;a.b4=a.fs;}
function If(){var a=this;B.call(a);a.L=null;a.eq=null;a.t=null;a.w=0;}
function XK(){var a=new If();UL(a);return a;}
function UL(a){E(a);a.t=By();}
var Kz=C();
function JF(b){return Math.sin(b);}
function NC(b){return Math.cos(b);}
function FP(b){return Math.sqrt(b);}
function Su(b){return Math.floor(b);}
function De(b,c){return Mf(b,c);}
function Mf(b,c){return Math.pow(b,c);}
function BG(b,c){if(b<c)c=b;return c;}
function Cd(b,c){if(b>c)c=b;return c;}
function Km(b,c){if(b<c)c=b;return c;}
function TJ(b){if(b<=0.0)b= -b;return b;}
function EB(){Ba.call(this);this.h5=0;}
var AAE=null;function S4(){S4=L(EB);Nb();}
function Yf(a){var b=new EB();Jd(b,a);return b;}
function Jd(a,b){S4();Cc(a);a.h5=b;}
function K$(b){S4();return Yf(b);}
function Nb(){AAE=F($rt_bytecls());}
function Fu(){var a=this;B.call(a);a.ha=null;a.gj=null;}
var AAF=null;function EY(){EY=L(Fu);NX();}
function Xh(a){var b=new Fu();GQ(b,a);return b;}
function GQ(a,b){EY();E(a);a.ha=b;}
function Lq(){EY();return Dl(D(90));}
function Dl(b){var c,d,e;EY();c=AAF.cK(b);if(c===null){c=Xh(b);d=b.iL(46);if(d>=0){e=b.bL(0,d);c.gj=Dl(e);}else if(!b.cg())c.gj=Dl(D(50));AAF.bm(b,c);}return c;}
function MX(a,b){var c;c=Ji(a,b.cS(),b.gm());if(Db(b.fJ())>=Db(ZK))JK($rt_ustr(c));else if(Db(b.fJ())<Db(Zn))Ga($rt_ustr(c));else Ju($rt_ustr(c));}
function Ji(a,b,c){var d,e,f,g,h,i,j;if(c===null)return b;d=M();e=0;a:{while(true){if(e>=b.c())break a;f=b.eh(123,e);if(f<0)break a;g=f+1|0;h=Hs(g,b);if(h<0)break;if(b.n(h)!=125){d.fq(b,e,h);e=h;continue;}i=c.data;j=Fa(b.bL(g,h));if(j>=i.length){d.fq(b,e,h);e=h;continue;}d.T(i[j]);e=h+1|0;}}return d.d();}
function Hs(b,c){var d,e;EY();while(true){if(b>=c.c())return (-1);d=b+1|0;e=c.n(b);if(e<=48)break;if(e>=57)break;b=d;}return d;}
function Th(a,b,c){a.g9(XE(b,c));}
function NX(){AAF=UT();}
function Ga(b){if($rt_globals.console){$rt_globals.console.info(b);}}
function Ju(b){if($rt_globals.console){$rt_globals.console.warn(b);}}
function JK(b){if($rt_globals.console){$rt_globals.console.error(b);}}
function El(){var a=this;B.call(a);a.fw=null;a.e9=null;a.gE=BK;a.g_=null;a.i0=BK;a.hq=BK;}
var AAG=BK;function XE(a,b){var c=new El();TK(c,a,b);return c;}
function TK(a,b,c){var d;E(a);a.fw=b;a.e9=c;a.gE=I9();d=AAG;AAG=W(d,H(1));a.i0=d;a.hq=(By()).hb();}
function O2(a){return a.fw;}
function PM(a){return a.e9;}
function Pk(a){return a.g_;}
function F7(){B.call(this);this.dm=null;}
function Wx(a){var b=new F7();L6(b,a);return b;}
function L6(a,b){a.dm=b;E(a);}
function TB(a,b){a.dm.dx(b);}
function Qv(a,b){a.dm.cL(b);}
var Cg=C();
var AAz=null;var AAy=null;var AAn=null;var ZZ=null;var Z1=null;function BF(){BF=L(Cg);On();}
function On(){AAy=U9();AAn=Vs();ZZ=Xm();Z1=W4();}
var JL=C(Bq);
function R7(a){var b=new JL();OW(b,a);return b;}
function OW(a,b){HX(a,b,null,0,0);}
function HH(){D2.call(this);this.eJ=null;}
function Vq(a){var b=new HH();Se(b,a);return b;}
function Se(a,b){Iu(a,b);}
function Rd(a){return a.eJ;}
function Rc(a,b){a.eJ=b;}
var Il=C();
function Ws(){var a=new Il();L3(a);return a;}
function L3(a){E(a);}
function Ot(a,b){return I4(a,b);}
function I4(a,b){return QE(b);}
function JC(){var a=this;Cp.call(a);a.eS=null;a.ec=null;a.eu=null;a.eV=null;}
function Wv(a,b,c,d){var e=new JC();UK(e,a,b,c,d);return e;}
function UK(a,b,c,d,e){a.eS=b;a.ec=c;a.eu=d;a.eV=e;FT(a);a.dK=a.eS;a.dC=a.ec;a.c1=a.eu;a.c0=a.eV;}
var Kk=C(P);
function Wd(){var a=new Kk();RC(a);return a;}
function RC(a){Bm(a);}
var Fo=C();
var AAH=null;function Vz(){Vz=L(Fo);Uu();}
function H5(b){var c,d,e,f;Vz();c=b.data;d=c.length;e=0;while(true){if(e>=d)return null;f=c[e];if(f!==null)break;e=e+1|0;}return f;}
function Uu(){AAH=null;}
function JD(){var a=this;Cp.call(a);a.fu=null;a.d9=null;a.fv=null;a.es=null;}
function WK(a,b,c,d){var e=new JD();S3(e,a,b,c,d);return e;}
function S3(a,b,c,d,e){a.fu=b;a.d9=c;a.fv=d;a.es=e;FT(a);a.dK=a.fu;a.dC=a.d9;a.c1=a.fv;a.c0=a.es;}
var HW=C();
function Sn(b){if(!(b instanceof BO))return null;return b;}
function PV(b){if(b===null)return null;if(b.em(D(73)))return CY(1);if(!b.em(D(72)))return null;return CY(0);}
function Ts(b){var c;c=Sn(b);if(c===null&&b!==null)return PV(b.d());return c;}
var K5=C(DY);
function Wz(a,b){var c=new K5();Nv(c,a,b);return c;}
function Nv(a,b,c){K_(a,b,c);}
function RQ(a,b){var c,d,e,f,g;c=CZ(b);d=0;while(d<b){e=c.data;f=a.e3;g=a.dd;a.dd=g+1|0;e[d]=f[g];d=d+1|0;}return c;}
function DT(){var a=this;B.call(a);a.b5=0;a.eD=0;}
var ZI=null;var ZH=null;function Bt(){Bt=L(DT);Qw();}
function Hy(a,b){var c=new DT();Io(c,a,b);return c;}
function Io(a,b,c){Bt();E(a);a.b5=b;a.eD=c;}
function MV(a){return a.b5?0:1;}
function Sd(a){return a.b5!=1?0:1;}
function Ut(a){return !a.h8()&&!a.fK()?0:1;}
function Sk(a){return a.b5!=2?0:1;}
function Sw(a){return a.b5!=3?0:1;}
function Q6(a){if(a.iv())return a.eD;G(W_());}
function Ds(b){Bt();return Hy(2,b);}
function Qw(){ZI=Hy(0,0);ZH=Hy(1,0);}
var DD=C();
var AAI=null;var AAJ=null;function Ev(){Ev=L(DD);So();}
function KM(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;Ev();d=$rt_doubleToLongBits(b);c.ej=C1(Bl(d,T(0, 2147483648)),BK)?0:1;e=Bl(d,T(4294967295, 1048575));f=DS(Da(d,52))&2047;if(C1(e,BK)&&!f){c.cR=BK;c.c4=0;return;}g=0;if(f)h=WU(e,T(0, 1048576));else{h=Cf(e,1);while(C1(Bl(h,T(0, 1048576)),BK)){h=Cf(h,1);f=f+(-1)|0;g=g+1|0;}}i=Nk(AAJ,f);if(i<0)i=( -i|0)-2|0;j=f-AAJ.data[i]|0;k=12+j|0;l=FH(h,AAI.data[i],k);if(IV(l,T(2808348672, 232830643))){i=i+1|0;m=f-AAJ.data[i]|0;k=12+m|0;l=FH(h,AAI.data[i],k);}n=B0(AAI.data[i],
(63-k|0)-g|0);o=Da(W(n,H(1)),1);p=Da(n,1);if(C1(h,T(0, 1048576)))p=Da(p,2);q=Kd(l,p);r=Ln(l,o);m=X5(q,r);h=m>0?R(Bg(l,q),q):m<0?W(R(Bg(l,r),r),r):R(Bg(W(l,Bg(r,H(2))),r),r);if(IV(h,T(2808348672, 232830643))){i=i+1|0;h=Bg(h,H(10));}else if(Ja(h,T(1569325056, 23283064))){i=i+(-1)|0;h=R(h,H(10));}c.cR=h;c.c4=i-330|0;}
function Kd(b,c){var d,e;Ev();d=H(10);while(C2(d,c)){d=R(d,H(10));}e=Dk(b,d);if(IV(e,Bg(c,H(2))))d=Bg(d,H(10));return d;}
function Ln(b,c){var d,e;Ev();d=H(1);while(C2(d,c)){d=R(d,H(10));}e=Dk(b,d);if(IO(Xx(d,e),Bg(c,H(2))))d=Bg(d,H(10));return d;}
function FH(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;Ev();e=Bl(b,H(65535));f=Bl(B0(b,16),H(65535));g=Bl(B0(b,32),H(65535));h=Bl(B0(b,48),H(65535));i=Bl(c,H(65535));j=Bl(B0(c,16),H(65535));k=Bl(B0(c,32),H(65535));l=Bl(B0(c,48),H(65535));m=W(W(R(k,e),R(j,f)),R(i,g));n=W(W(W(R(l,e),R(k,f)),R(j,g)),R(i,h));o=W(W(R(l,f),R(k,g)),R(j,h));p=W(R(l,g),R(k,h));q=R(l,h);r=W(W(Cf(q,32+d|0),Cf(p,16+d|0)),Cf(o,d));s=d>16?W(r,Cf(n,d-16|0)):W(r,B0(n,16-d|0));s=W(s,B0(m,32-d|0));return s;}
function So(){var b,c,d,e,f,g,h,i,j,k,l;AAI=Xi(660);AAJ=DH(660);b=T(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AAI.data;g=d+330|0;f[g]=DW(e,H(80));AAJ.data[g]=c;e=DW(e,H(10));h=GV(e,H(10));while(C2(e,b)&&C1(Bl(e,T(0, 2147483648)),BK)){e=Cf(e,1);c=c+1|0;h=Cf(h,1);}e=W(e,Bg(h,H(10)));d=d+1|0;}i=T(3435973836, 214748364);j=1023;d=0;while(d<330){k=0;e=b;while(IO(e,i)){e=Da(e,1);k=k+1|0;j=j+(-1)|0;}h=R(e,H(10));if(k<=0)b=h;else{l=Bl(b,H((1<<k)-1|0));b=W(h,Da(R(l,H(10)),k));}f=AAI.data;g=(330-d|0)-1|0;f[g]
=DW(b,H(80));AAJ.data[g]=j;d=d+1|0;}}
var G6=C();
function HE(b){var c,d,e;c=W7(b.q());d=b.s();while(d.x()){e=d.r();if(Bj(e,B3))c.bw(FM(e));else if(!Bj(e,Cl))c.bw(e);else c.bw(HE(e));}return c;}
function FM(b){var c,d,e,f,g,h;c=VX(b.q());d=(b.f1()).s();while(d.x()){e=d.r();f=e.bP();if(Bj(f,B3)){g=f;c.bm(e.bq(),FM(g));}else if(!Bj(f,Cl))c.bm(e.bq(),f);else{h=f;c.bm(e.bq(),HE(h));}}return c;}
function Ii(){var a=this;B_.call(a);a.f2=null;a.fg=null;a.fe=0.0;a.hz=null;}
function Xk(a,b,c,d){var e=new Ii();OU(e,a,b,c,d);return e;}
function OU(a,b,c,d,e){a.hz=b;a.f2=c;a.fg=d;a.fe=e;Fj(a);a.H=a.f2;a.bM=a.fg;a.b4=a.fe;}
var Kp=C(CH);
var Gf=C();
function Wq(){var a=new Gf();Nt(a);return a;}
function Nt(a){E(a);}
function Tk(a,b){return Hn(a,b);}
function Hn(a,b){return U4(b);}
var Bu=C(CF);
var Y7=null;var Y9=null;var Y8=null;var Zt=null;var Zs=null;var Zq=null;var Zr=null;var AAK=null;function Bc(){Bc=L(Bu);Rp();}
function Cn(a,b){var c=new Bu();Lv(c,a,b);return c;}
function Fb(){Bc();return AAK.dV();}
function Lv(a,b,c){Bc();FA(a,b,c);}
function F9(){Bc();return C7(Bu,[Y7,Y9,Y8,Zt,Zs,Zq,Zr]);}
function Rp(){Y7=Cn(D(91),0);Y9=Cn(D(92),1);Y8=Cn(D(93),2);Zt=Cn(D(94),3);Zs=Cn(D(95),4);Zq=Cn(D(96),5);Zr=Cn(D(97),6);AAK=F9();}
function Lb(){var a=this;B.call(a);a.I=null;a.eX=null;a.fx=null;a.e4=null;a.d$=null;a.ed=null;}
function V9(a){var b=new Lb();Sp(b,a);return b;}
function Sp(a,b){var c;E(a);a.I=b;c=b.exports.memory.buffer;a.eX=new $rt_globals.Int8Array(c);a.fx=new $rt_globals.Int16Array(c);a.e4=new $rt_globals.Int32Array(c);a.d$=new $rt_globals.Float32Array(c);a.ed=new $rt_globals.Float64Array(c);}
function OM(a,b){return Wz(a,b);}
function Mx(a,b,c){return Ng(I5(a,b,c));}
function I5(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=c.data;switch(d.length){case 0:return a.I.exports[$rt_ustr(b)]();case 1:e=a.I;f=I(d[0]);return e.exports[$rt_ustr(b)](f);case 2:e=a.I;f=I(d[0]);g=I(d[1]);return e.exports[$rt_ustr(b)](f,g);case 3:e=a.I;f=I(d[0]);g=I(d[1]);h=I(d[2]);return e.exports[$rt_ustr(b)](f,g,h);case 4:e=a.I;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);return e.exports[$rt_ustr(b)](f,g,h,i);case 5:e=a.I;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);return e.exports[$rt_ustr(b)](f,g,h,i,j);case 6:e
=a.I;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k);case 7:e=a.I;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);l=I(d[6]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l);case 8:e=a.I;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);l=I(d[6]);m=I(d[7]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l,m);case 9:e=a.I;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);l=I(d[6]);m=I(d[7]);n=I(d[8]);return e.exports[$rt_ustr(b)](f,g,
h,i,j,k,l,m,n);default:}return null;}
function I(b){return O$(b);}
function In(){var a=this;B.call(a);a.eK=null;a.fX=0;}
function P7(a){var b=new In();P1(b,a);return b;}
function P1(a,b){E(a);a.eK=b;}
var Im=C(Bo);
function CI(){B.call(this);this.dq=null;}
function V6(a){var b=new CI();PD(b,a);return b;}
function PD(a,b){E(a);a.dq=b;}
var IX=C(Bo);
var JN=C(P);
function XB(){var a=new JN();SN(a);return a;}
function SN(a){Bm(a);}
var B7=C(CF);
var Zl=null;var AAc=null;var Zm=null;var AAL=null;function DK(){DK=L(B7);Pz();}
function Jg(a,b){var c=new B7();KE(c,a,b);return c;}
function KE(a,b,c){DK();FA(a,b,c);}
function Ic(){DK();return C7(B7,[Zl,AAc,Zm]);}
function Pz(){Zl=Jg(D(98),0);AAc=Jg(D(99),1);Zm=Jg(D(100),2);AAL=Ic();}
var IM=C();
function W8(){var a=new IM();LW(a);return a;}
function LW(a){E(a);}
function K8(){B.call(this);this.fC=null;}
function Xd(a){var b=new K8();O4(b,a);return b;}
function O4(a,b){E(a);a.fC=b;}
function S6(a,b){Mt(a.fC,b);}
function SD(a,b){a.dB(b);}
function GS(){BQ.call(this);this.dN=null;}
function Vu(a){var b=new GS();OY(b,a);return b;}
function OY(a,b){D8(a);a.dN=b;}
function LR(a,b){return a.dN.data[b];}
function N1(a){return a.dN.data.length;}
var BN=C();
var AAM=null;var AAN=null;var AAO=null;var AAP=null;var AAQ=null;var AAR=null;var AAS=null;function RG(){RG=L(BN);MN();}
function Ht(b,c){var d,e,f;RG();if(c===null)c=AAR;d=X(B,b.q());b.gy(d);QK(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;b.g6(e,f[e]);e=e+1|0;}}
function Kt(b,c){RG();return b!==null?b.gi(c): -c.gi(b)|0;}
function MN(){AAM=XR();AAN=WF();AAO=XV();AAP=VW();AAQ=X2();AAR=X6();AAS=Ww();}
var Gy=C();
function MP(b){return b!==null?b.d():null;}
function Qt(b){return b!==null?b.c():0;}
function Q3(b){return Qt(b)?0:1;}
$rt_packages([-1,"dev",0,"webfx",1,"platform",2,"webassembly",3,"spi",2,"json",5,"spi"]);
$rt_metadata([B,0,0,[],0,3,0,0,["jZ",Yq(Cv),"ke",Yq(EL),"b0",Yq(PP),"C",Yr(Mc),"d",Yq(OZ),"jf",Yq(Dj),"dV",Yq(UF)],Bq,0,B,[],0,3,0,0,["kr",Yu(HX),"cu",Yq(Q9),"cS",Yq(P0),"kj",Yq(P6)],BS,0,Bq,[],0,3,0,0,["a",Yq(EV),"j",Yr(Gj)],P,0,BS,[],0,3,0,0,["a",Yq(Bm),"j",Yr(C9)],BD,0,P,[],0,3,0,0,["a",Yq(H0),"j",Yr(Cb)],Du,0,B,[],3,3,0,0,["be",Yr(Qi),"gX",Yr(O3),"g0",Yr(R_),"gL",Yr(SM)],FL,0,B,[Du],3,3,0,0,["be",Yr(Qi),"gX",Yr(O3),"g0",Yr(R_),"gL",Yr(SM)],E6,0,B,[Du],3,3,0,0,["be",Yr(Qi),"gX",Yr(O3),"g0",Yr(R_),"gL",Yr(SM),
"eg",Yq(Tr)],CX,"JsonProvider",6,B,[FL,E6],3,3,0,0,["be",Yr(Qi),"gX",Yr(O3),"g0",Yr(R_),"gL",Yr(SM),"eg",Yq(Tr),"hG",Yq(T6)],CT,0,B,[CX],3,3,0,0,["be",Yr(Qi),"gX",Yr(O3),"g0",Yr(R_),"gL",Yr(SM),"eg",Yq(Tr),"hG",Yq(T6)],G_,0,B,[],0,3,0,0,["ji",Ys(Rn),"il",Yq(Qr),"dQ",Yr(QC),"iQ",Yr(Rv),"gB",Yr(U1)],Bw,0,B,[],3,3,0,0,0,Ba,0,B,[Bw],1,3,0,0,["a",Yq(Cc)],Be,0,B,[],3,3,0,0,0,Cw,0,Ba,[Be],0,3,0,BX,["bA",Yr(IP),"M",Yq(NN),"d",Yq(SR)],I$,0,BS,[],0,3,0,0,["a",Yq(Tw)],Dv,0,B,[],3,3,0,0,0,FQ,0,B,[Dv],3,3,0,0,["bi",Yr(M8)],B5,
0,B,[],0,0,0,PR,0,Cj,0,B,[CT],3,3,0,0,["be",Yr(Qi),"gX",Yr(O3),"g0",Yr(R_),"gL",Yr(SM),"eg",Yq(Tr),"hG",Yq(T6)],FS,0,Ba,[Be],0,3,0,Jj,["k1",Yr(Jf),"M",Yq(ME),"d",Yq(Rr)],B3,0,B,[],3,3,0,0,0,EI,0,B,[],3,3,0,0,0,B4,0,B,[EI],0,3,0,FK,["j",Yr(HJ),"jo",Ys(E7),"hb",Yq(L2)],Bi,0,B,[],3,3,0,0,0,E2,0,B,[Bi],3,3,0,0,0,JP,0,B,[E2],1,3,0,0,["ks",Yr(Us),"kf",Yq(Pd)],Dg,0,B,[],3,3,0,0,0,HC,0,B,[Dg],0,3,0,0,["a",Yq(QT),"fR",Yq(Oi),"iT",Yq(ID)],FX,0,B,[],32,0,0,U$,0,GF,0,B,[Bi],1,3,0,0,0,Jq,0,B,[Dv],0,3,0,0,["jb",Yr(Qs),"ew",
Yr(RP),"kS",Yr(Jt)],Fi,0,B,[],3,3,0,0,0,Jm,0,B,[Fi],0,3,0,0,["jb",Yr(Uo),"g8",Yr(OD)],BJ,0,B,[],1,3,0,0,["a",Yq(FI)],Fc,0,B,[],3,3,0,0,0,Fp,0,B,[Fc],3,3,0,0,["h4",Yr(QX)],Dm,0,B,[Fp],3,3,0,0,["h4",Yr(QX)],Co,0,B,[Dm],1,0,0,0,["h4",Yr(QX),"a",Yq(E5),"kn",Ys(ET),"kc",Ys(DV),"fl",Ys(IB)],Ci,0,Co,[],0,0,0,Dh,["h4",Yr(QX),"a",Yq(D4),"hR",Yq(Tm),"id",Yr(N9),"bE",Yr(H1),"dx",Yr(Gi),"cL",Yr(UJ),"d",Yq(SK),"iY",Ys(OI)],D1,0,Ci,[],1,0,0,0,["h4",Yr(QX),"a",Yq(Ly)],C_,0,B,[],3,3,0,0,0,CC,0,Bq,[],0,3,0,0,["j",Yr(IN),"cv",
Yr(Ho)],CH,0,CC,[],0,3,0,0,["j",Yr(Gv)],Di,0,B,[],3,3,0,0,["gR",Ys(UQ),"i3",Yr(O1),"h$",Yr(Ns),"dT",Yr(SO),"dM",Ys(R2)],CQ,0,B,[Di,CT],3,3,0,0,["gR",Ys(UQ),"i3",Yr(O1),"h$",Yr(Ns),"dT",Yr(SO),"dM",Ys(R2),"be",Yr(Qi),"gX",Yr(O3),"g0",Yr(R_),"gL",Yr(SM),"eg",Yq(Tr),"hG",Yq(T6),"kB",Yr(LJ),"da",Yr(SL)],E9,0,B,[Di],3,3,0,0,["gR",Ys(UQ),"i3",Yr(O1),"h$",Yr(Ns),"dT",Yr(SO),"dM",Ys(R2)],CW,0,B,[CQ,Cj,E9],3,3,0,0,["gR",Ys(UQ),"i3",Yr(O1),"h$",Yr(Ns),"dT",Yr(SO),"dM",Ys(R2),"be",Yr(Qi),"gX",Yr(O3),"g0",Yr(R_),"gL",Yr(SM),
"eg",Yq(Tr),"hG",Yq(T6),"kB",Yr(LJ),"da",Yr(SL),"i5",Yr(UA),"iw",Ys(L5)],Ed,0,B,[Bi],3,0,0,0,0,KV,0,BD,[],0,3,0,0,["a",Yq(Rh)]]);
$rt_metadata([D5,0,B,[],4,3,0,TI,0,Ke,0,B,[],4,3,0,0,0,FN,0,B,[],3,3,0,0,0,Ez,0,B,[FN],3,3,0,0,0,EX,0,B,[],3,3,0,0,0,CB,0,B,[Ez,EX],1,3,0,0,["a",Yq(Eb)],DP,0,CB,[],1,3,0,0,["a",Yq(LK)],EP,0,DP,[],0,3,0,TO,["cl",Yt(T0)],Ff,0,B,[],3,3,0,0,0,Bo,0,B,[Bi],1,3,0,0,0,GU,0,Bo,[],1,3,0,0,0,IC,0,B,[],4,0,0,0,["jy",Ys(KF),"kh",Yq(Kx),"kx",Yq(IZ)],CA,0,B,[Bw,C_],0,0,0,0,["a",Yq(EQ),"bA",Yr(Ey),"j",Yr(K6),"kO",Yr(IH),"kE",Yr(KI),"k2",Yr(EK),"cs",Ys(Fe),"kL",Yr(Hv),"ek",Ys(Nx),"gM",Yt(Tl),"j1",Yr(Kq),"eA",Ys(LA),"ih",Yt(Mm),
"j6",Yr(Jz),"d3",Ys(IL),"jl",Yr(La),"fr",Ys(KR),"e8",Ys(Jk),"bF",Yr(EM),"d",Yq(Ep),"c",Yq(Kh),"kk",Yt(HK),"d0",Yu(Gx),"eo",Yu(JW),"ef",Yr(JR)],C6,0,B,[],3,3,0,0,0,Gl,0,CA,[C6],0,3,0,0,["bA",Yr(T7),"a",Yq(TE),"j",Yr(Mw),"T",Yr(K),"v",Yr(Mv),"ju",Yr(O),"iA",Yr(R9),"hS",Yr(PT),"i",Yr(CM),"fq",Yt(S1),"h1",Ys(Rf),"hx",Ys(Tu),"hN",Yu(Ne),"hp",Ys(Ub),"iG",Ys(NM),"hh",Ys(Un),"ef",Yr(Uw),"eo",Yu(QF),"d0",Yu(Ou),"c",Yq(Oo),"d",Yq(N),"bF",Yr(UC),"e8",Ys(MA),"fr",Ys(L1),"d3",Ys(Qz),"eA",Ys(Pm),"cs",Ys(UN)],FF,0,B,[],4,
3,0,US,0,JV,0,P,[],0,3,0,0,["a",Yq(Up)],Hk,0,CC,[],0,3,0,0,["cv",Yr(My)],Cr,0,B,[B3],1,3,0,0,["a",Yq(Fd),"d",Yq(Ow)],Ct,0,B,[],3,3,0,0,0,D9,0,Cr,[Ct,Bw],0,3,0,0,["c6",Yr(Sb),"a",Yq(I6),"bA",Yr(Eg),"j4",Ys(KL),"cK",Yr(Sm),"kp",Yr(GK),"kv",Yt(C3),"kN",Yq(Dd),"bm",Ys(M5),"dF",Ys(RY),"bX",Yt(O8),"hE",Yr(RO),"co",Yq(PA),"kz",Yr(HD),"q",Yq(Pv)],G7,0,D9,[B3],0,3,0,0,["a",Yq(NQ),"bA",Yr(Po),"c6",Yr(OG),"cK",Yr(Mr),"bX",Yt(Uc),"bm",Ys(SF),"dF",Ys(Ud),"dA",Yr(Me),"f1",Yq(RZ),"jc",Yq(PN),"gF",Yr(PE),"iB",Yr(Mz)],DO,0,
B,[],3,3,0,0,["hD",Yr(MU)],CJ,0,B,[CT,DO],3,3,0,0,["be",Yr(Qi),"gX",Yr(O3),"g0",Yr(R_),"gL",Yr(SM),"eg",Yq(Tr),"hG",Yq(T6),"hD",Yr(MU),"iZ",Yr(NY)],Eo,0,B,[DO],3,3,0,0,["hD",Yr(MU)],C$,0,B,[CJ,Cj,Eo],3,3,0,0,["be",Yr(Qi),"gX",Yr(O3),"g0",Yr(R_),"gL",Yr(SM),"eg",Yq(Tr),"hG",Yq(T6),"hD",Yr(MU),"iZ",Yr(NY)],Dr,0,B,[Cj],3,3,0,0,["be",Yr(Qi),"gX",Yr(O3),"g0",Yr(R_),"gL",Yr(SM),"eg",Yq(Tr),"hG",Yq(T6),"dj",Yq(Uj),"b$",Yr(Ss),"ds",Yr(Uz),"cq",Yr(M2)],D2,0,B,[C$,Dr],1,3,0,0,["be",Yr(Qi),"gX",Yr(O3),"g0",Yr(R_),"gL",
Yr(SM),"eg",Yq(Tr),"hG",Yq(T6),"hD",Yr(MU),"iZ",Yr(NY),"dj",Yq(Uj),"b$",Yr(Ss),"ds",Yr(Uz),"cq",Yr(M2),"ii",Yr(Iu),"cV",Yr(Qu),"q",Yq(M3)],Hx,0,CA,[C6],0,3,0,0,["a",Yq(SC),"gz",Yr(PY),"ig",Ys(PZ),"d",Yq(OK),"bF",Yr(O5),"cs",Ys(Mn)],DI,0,B,[],3,3,0,0,0,DY,0,B,[DI],0,0,0,0,["gu",Ys(K_),"gg",Yr(Oz)],Cz,0,B,[],1,3,0,0,["bA",Yr(Fk),"kU",Yq(CS),"jk",Yr(JS),"jU",Yq(HT),"j7",Yq(BZ),"jT",Yq(Ca)],Dq,0,B,[],3,3,0,0,0,DQ,0,B,[Dq],3,3,0,0,0,Cx,0,B,[],0,0,0,0,["cm",Yr(Em),"x",Yq(OT),"kG",Yq(Le),"jn",Yq(FJ)],BW,0,B,[],3,3,
0,0,0,JM,0,Cx,[BW],0,0,0,0,["cm",Yr(Q8),"h3",Yq(OA),"r",Yq(SY)],Es,0,B,[],3,3,0,0,0,Hp,0,B,[Es],4,0,0,0,["dz",Yr(L7),"gY",Yr(Q7)],DL,0,B,[Dq],0,3,0,0,["a",Yq(F5),"eU",Yr(G0),"cY",Yr(Rz),"c5",Yr(P9)],Dy,0,DL,[DQ],1,3,0,0,["a",Yq(Jw),"eU",Yr(NR),"jq",Yr(HZ),"dW",Yr(TD)],LD,0,Dy,[],0,3,0,0,["a",Yq(QD),"i6",Yq(Ul)],Ef,0,B,[],3,3,0,0,0,D$,0,B,[Ef,Ct],0,0,0,0,["kX",Ys(Lw),"bq",Yq(S_),"bP",Yq(T$)],CP,0,D$,[],0,0,0,0,["hw",Ys(HL)],Fv,0,CP,[],4,0,0,0,["hw",Ys(RV)],Ie,0,B,[],0,3,0,0,["hm",Yt(Rg)],Cy,0,CH,[],0,3,0,0,["j",
Yr(Fy)],JX,0,Cy,[],0,3,0,0,["j",Yr(Pq)],EU,0,BS,[],0,3,0,0,0]);
$rt_metadata([EJ,0,B,[],3,3,0,0,0,EH,0,B,[Bi],3,0,0,0,0,CD,0,B,[],3,3,0,0,0,Hl,0,B,[CD],0,3,0,0,["a",Yq(Oh)],G5,0,B,[BW],0,0,0,0,["j0",Yr(Ox),"x",Yq(M1),"r",Yq(RR)],DA,0,Cr,[],1,0,0,0,["a",Yq(JZ)],E8,0,B,[],32,0,0,Xz,0,D0,0,P,[],0,3,0,0,["a",Yq(Ge)],Lr,0,D0,[],0,3,0,0,["a",Yq(TM)],GO,0,B,[],4,3,0,0,0,E$,0,B,[BW],3,3,0,0,0,Jc,0,Bo,[],1,3,0,0,0,Jb,0,B,[BW],0,0,0,0,["kP",Yr(Ob),"x",Yq(Tv),"r",Yq(N2)],Hq,0,B,[],0,3,0,0,["a",Yq(OO)],IF,0,B,[],4,0,0,0,0,He,0,Cy,[],0,3,0,0,["j",Yr(O7)],Ip,0,B,[Dg],0,3,0,0,["a",Yq(Rw),
"fR",Yq(LY),"iT",Yq(Lt)],DX,0,B,[],3,3,0,0,0,CU,0,B,[DX],3,3,0,0,0,Ck,0,B,[CU],1,3,0,0,["a",Yq(FB),"e7",Yq(RL),"gy",Yr(QN)],II,0,B,[],4,3,0,0,0,FV,0,Ba,[Be],0,3,0,RM,["jw",Yr(HQ)],Ex,0,B,[],3,3,0,0,0,Lu,0,B,[Ex],0,3,0,0,["a",Yq(Or)],F0,0,B,[],3,3,0,0,0,Hw,0,B,[],4,3,0,0,0,Ig,0,B,[],4,0,0,0,0,Cp,0,B,[],0,3,0,0,["a",Yq(FT)],DC,0,B,[],3,3,0,0,0,B1,0,B,[],3,3,0,0,0,GE,0,D1,[B1],0,0,0,0,["h4",Yr(QX),"jI",Ys(PS),"bH",Yr(Rl),"b1",Yr(OQ)],HU,0,B,[DX],4,3,0,0,["s",Yq(HB)],HR,0,B,[],4,3,0,0,0,BP,0,B,[],1,3,0,0,["a",Yq(DJ)],Gw,
0,B,[DC],0,3,0,0,["kQ",Yu(Rs),"dS",Yq(Tq)],JH,0,B,[],4,3,0,0,0,Lo,0,Co,[],4,3,0,0,["h4",Yr(QX),"cv",Yr(Tz),"bE",Yr(OC)],Bz,0,B,[],0,3,0,0,["a",Yq(C4)],J4,0,Bz,[],0,0,0,0,["kR",Ys(Os)],Df,0,B,[],1,3,0,0,["kD",Yu(KD),"g$",Yt(J0),"jD",Yr(F2),"iC",Yr(TV),"kW",Yr(Ky),"h2",Yr(Ti),"ku",Yt(Hi),"jB",Yr(Gt),"gH",Yr(Ma)],E1,0,B,[Bi],3,0,0,0,0,Jn,0,B,[E1],0,3,0,0,["kC",Yr(RE),"iJ",Ys(Um),"j2",Ys(N$)],Jl,0,B,[Ed],0,3,0,0,["iS",Yr(SV),"dB",Yr(M_),"fD",Yr(ST)],Eq,0,B,[Bi],3,0,0,0,0,Jp,0,B,[Eq],0,3,0,0,["jC",Yr(LZ),"is",Yr(Qh),
"fD",Yr(UV)],DG,0,Cz,[Be],1,3,0,0,["je",function(b,c,d,e,f){G8(this,b,c,d,e,f);},"ff",Yt(Sy),"jN",Yr(JQ),"j8",Yq(EN)],Kl,0,DG,[],0,0,0,0,["jv",function(b,c,d,e,f,g,h){MS(this,b,c,d,e,f,g,h);},"gw",Yq(Sc)],Cl,0,B,[CU],3,3,0,0,["gO",Yr(P2)],BQ,0,Ck,[Cl],1,3,0,0,["gO",Yr(P2),"a",Yq(D8),"s",Yq(QY)],CV,0,B,[],3,3,0,0,0]);
$rt_metadata([Dt,0,BQ,[Ct,Bw,CV],0,3,0,0,["gO",Yr(P2),"a",Yq(JJ),"bA",Yr(Ei),"kZ",Yr(PC),"bF",Yr(Nn),"cX",Yr(PI),"q",Yq(N_),"g6",Ys(MO),"bw",Yr(SE),"d",Yq(Oq)],Fh,0,Dt,[B1],0,0,0,0,["gO",Yr(P2),"bH",Yr(OB),"b1",Yr(Mb)],H_,0,B,[],0,3,0,0,0,V,0,B,[],3,3,0,0,0,Bx,0,B,[Bw],0,3,0,MC,["c2",Ys(K2),"M",Yq(Db)],D6,0,B,[CW,Dr],1,3,0,0,["gR",Ys(UQ),"i3",Yr(O1),"h$",Yr(Ns),"dT",Yr(SO),"dM",Ys(R2),"be",Yr(Qi),"gX",Yr(O3),"g0",Yr(R_),"gL",Yr(SM),"eg",Yq(Tr),"hG",Yq(T6),"kB",Yr(LJ),"da",Yr(SL),"i5",Yr(UA),"iw",Ys(L5),"dj",
Yq(Uj),"b$",Yr(Ss),"ds",Yr(Uz),"cq",Yr(M2),"a",Yq(Ix),"hC",Yr(G$),"gA",Yq(Rj),"hB",Yq(QO),"e$",Yq(P8),"cI",Yr(RN),"gG",Ys(Ru),"g5",Yq(Ra),"d",Yq(TQ),"f3",Ys(Oe)],HS,0,B,[],4,3,0,0,0,Do,0,B,[Be],1,3,0,0,["ki",Ys(H6)],C0,0,B,[],0,3,0,FD,["j",Yr(Ij)],BO,0,B,[Bw,Be],0,3,0,Er,["km",Yr(HO),"fd",Yq(Sa),"d",Yq(NH),"C",Yr(Na)],B$,0,P,[],0,3,0,0,["a",Yq(ES),"j",Yr(FZ)],IG,0,B$,[],0,3,0,0,["j",Yr(Ro)],LE,0,P,[],0,3,0,0,["a",Yq(ML)],Gb,0,B,[CD],0,3,0,0,["kw",Yr(Q4),"fL",Ys(R8)],Jr,0,B,[Bi],1,3,0,0,0,Dp,0,CB,[],0,3,0,0,
["kl",Yr(GA)],Fs,0,Dp,[],0,3,0,0,["kq",Ys(Ka),"cl",Yt(Nz),"e_",Yr(Pg)],S,0,B,[],0,3,0,0,["a",Yq(BI)],KW,0,S,[],0,0,0,0,["bc",Yr(Qe)],KY,0,S,[],0,0,0,0,["bc",Yr(OR)],Y,0,BJ,[],0,3,0,0,["a",Yq(BL),"f5",Yr(Ni),"ey",Yr(NA)],KZ,0,Y,[],0,0,0,0,["bc",Yr(TW)],K3,0,Y,[],0,0,0,0,["bc",Yr(MD)],KX,0,S,[],0,0,0,0,["bc",Yr(Mo)],K0,0,Y,[],0,0,0,0,["bc",Yr(Pb)],FE,0,B,[],3,3,0,0,0,KT,0,Y,[],0,0,0,0,["bc",Yr(S$)],KP,0,B,[V],0,3,0,0,["a",Yq(Ur),"f",Yr(TR),"bo",Yr(Kc)],GJ,0,B,[V],0,3,0,0,["a",Yq(P$),"f",Yr(L0),"bj",Yr(Js)],KO,
0,B,[V],0,3,0,0,["a",Yq(PL),"f",Yr(Nq),"bj",Yr(GL)],GH,0,B,[V],0,3,0,0,["a",Yq(RS),"f",Yr(Qf),"bj",Yr(GW)],K1,0,Y,[],0,0,0,0,["bc",Yr(Tn)],KN,0,B,[V],0,3,0,0,["a",Yq(UD),"f",Yr(Pi),"bj",Yr(LM)],KU,0,Y,[],0,0,0,0,["bc",Yr(Qp)],E4,0,B,[CU],3,3,0,0,0,BY,0,Ck,[E4],1,3,0,0,["a",Yq(DE)],DF,0,BY,[],0,0,0,0,["kV",Yr(Ih),"gI",Yq(Pw)],I7,0,DF,[],4,0,0,0,["cm",Yr(PB),"s",Yq(RW)],LF,0,B,[V],0,3,0,0,["a",Yq(SI),"f",Yr(Oy),"bj",Yr(Iw)],Li,0,B,[V],0,3,0,0,["a",Yq(Ug),"f",Yr(Sj),"bo",Yr(Gd)],LH,0,B,[V],0,3,0,0,["a",Yq(MZ),
"f",Yr(Pc),"bj",Yr(Jx)],Lh,0,B,[V],0,3,0,0,["a",Yq(PQ),"f",Yr(Mu),"bo",Yr(H$)],LI,0,B,[V],0,3,0,0,["a",Yq(Ql),"f",Yr(Tg),"bo",Yr(Iv)],GI,0,B,[V],0,3,0,0,["a",Yq(SJ),"f",Yr(LU),"bo",Yr(HY)],Lg,0,B,[V],0,3,0,0,["a",Yq(UZ),"f",Yr(QW),"bj",Yr(HI)],LG,0,B,[V],0,3,0,0,["a",Yq(RF),"f",Yr(R1),"bo",Yr(Gm)],KQ,0,B,[V],0,3,0,0,["a",Yq(Om),"f",Yr(Ue),"bo",Yr(KJ)],GG,0,B,[V],0,3,0,0,["a",Yq(MK),"f",Yr(P_),"bo",Yr(Hb)],H7,0,B,[],0,3,0,0,0,FC,0,B,[FQ,Dm],3,3,0,0,["bi",Yr(M8),"h4",Yr(QX)]]);
$rt_metadata([GD,0,Ci,[FC,B1],4,3,0,0,["bi",Yr(M8),"h4",Yr(QX),"a",Yq(Sr),"gc",Yq(TX),"dx",Yr(R4),"bE",Yr(PH),"fl",Ys(T5)],Et,0,B,[],3,3,0,0,0,Eh,0,B,[],3,3,0,0,0,JU,0,B,[Et,Eh],0,3,0,0,["d",Yq(LP),"fV",Yq(Oc),"iq",Yq(Uq),"gf",Yq(L$)],Ld,0,Bo,[],1,3,0,0,0,Ce,0,Ba,[Be],0,3,0,I3,["jh",Yr(EG),"hZ",Yr(JE),"C",Yr(Nf)],Ec,0,B,[DI],3,3,0,0,0,Hg,0,B,[],0,3,0,0,0,Ls,0,D6,[],0,3,0,0,["gR",Ys(UQ),"i3",Yr(O1),"h$",Yr(Ns),"dT",Yr(SO),"dM",Ys(R2),"be",Yr(Qi),"gX",Yr(O3),"g0",Yr(R_),"gL",Yr(SM),"eg",Yq(Tr),"hG",Yq(T6),"kB",
Yr(LJ),"da",Yr(SL),"i5",Yr(UA),"iw",Ys(L5),"dj",Yq(Uj),"b$",Yr(Ss),"ds",Yr(Uz),"cq",Yr(M2),"a",Yq(OP),"hC",Yr(P3),"cb",Yq(SH),"c_",Yr(RI),"ja",Yq(Re),"c8",Yr(Rx),"bu",Yq(S8)],ER,0,B,[],4,3,0,0,0,J_,0,Cx,[BW],0,0,0,0,["cm",Yr(SS),"r",Yq(Tx)],Lf,0,B,[V],0,3,0,0,["a",Yq(PK),"f",Yr(ND),"bj",Yr(J9)],IR,0,B,[E$],0,0,0,0,["a",Yq(Q$)],D3,0,BQ,[CV],1,0,0,0,["gO",Yr(P2),"a",Yq(Ia)],IT,0,D3,[],0,0,0,0,["gO",Yr(P2),"a",Yq(Np)],IQ,0,B,[BW],0,0,0,0,["a",Yq(SW)],BC,0,B,[Be],0,3,0,Bb,0,DZ,0,BY,[],1,0,0,0,["a",Yq(J$)],IU,0,
DZ,[],0,0,0,0,["a",Yq(M0)],IS,0,DA,[],0,0,0,0,["a",Yq(LQ)],Hm,0,B,[B1],0,0,0,0,["kA",Ys(TT),"bH",Yr(TZ),"b1",Yr(Ui)],Lc,0,B,[DC],0,3,0,0,["jA",Yr(SQ),"dS",Yq(R$)],G3,0,B,[Bi],1,3,0,0,0,Cs,0,B,[Cj],1,0,0,0,["gX",Yr(O3),"g0",Yr(R_),"gL",Yr(SM),"eg",Yq(Tr),"hG",Yq(T6),"dz",Yr(Ek),"fp",Yq(GR),"cq",Yr(Kj),"f6",Yq(LL),"fY",Yr(Gz),"fZ",Yr(Ib),"be",Yr(Je),"fa",Yr(JT),"d",Yq(Hz),"bu",Yq(MB),"dj",Yq(Qg),"c8",Yr(PW),"b$",Yr(Op),"ds",Yr(R6)],Ft,0,Cs,[C$],4,0,0,0,["gX",Yr(O3),"g0",Yr(R_),"gL",Yr(SM),"eg",Yq(Tr),"hG",Yq(T6),
"hD",Yr(MU),"iZ",Yr(NY),"jm",Yr(MJ),"j$",Yq(FO),"jJ",Yr(K9),"q",Yq(RX),"cV",Yr(Td)],IY,0,S,[],0,0,0,0,["cp",Yr(Nw)],Dn,0,Cz,[Be,C6,C_,F0],1,3,0,0,["hA",Yt(F_),"iI",Yt(Ny),"eE",Yr(LT)],DR,0,Dn,[],1,0,0,0,["hA",Yt(Ik)],KC,0,DR,[],0,0,0,0,["j9",function(b,c,d,e,f,g){UM(this,b,c,d,e,f,g);},"iN",Yr(NW)],I2,0,S,[],0,0,0,0,["cp",Yr(M4)],I0,0,S,[],0,0,0,0,["cp",Yr(QU)],JA,0,B,[],4,3,0,0,0,I1,0,S,[],0,0,0,0,["cp",Yr(RB)],IW,0,Y,[],0,0,0,0,["cp",Yr(R0)],Fn,0,B,[],4,3,0,0,0,JB,0,B,[Bi],1,3,0,0,0,BR,0,B,[],4,3,0,F1,0,Gq,
0,BP,[],0,0,0,0,["a",Yq(Q_)],Gp,0,BP,[],0,0,0,0,["a",Yq(O9)],B9,0,Ba,[Be],0,3,0,Fr,["hZ",Yr(J8),"bv",Yq(UH),"M",Yq(Pu),"d",Yq(NB),"C",Yr(U2),"fW",Yq(Nm),"fG",Yq(O6)],Go,0,BP,[],0,0,0,0,["a",Yq(Tf)],D_,0,BJ,[],0,3,0,0,["a",Yq(F8),"f5",Yr(Qy),"ey",Yr(Tb)],Gs,0,D_,[],0,0,0,0,["a",Yq(Ta)],Gr,0,Y,[],0,0,0,0,["a",Yq(Pt)],J6,0,Bz,[],0,0,0,0,["f$",Ys(Ux)],J3,0,Bz,[],0,0,0,0,["f$",Ys(UY)],K7,0,BY,[],0,0,0,0,["cm",Yr(PO),"q",Yq(Tt),"s",Yq(Tc)],J5,0,Bz,[],0,0,0,0,["f$",Ys(UW)],CO,"WebAssemblyProvider",4,B,[],3,3,0,0,["i_",
Ys(Uh)],EO,0,B,[CO],4,3,0,0,["i_",Ys(Uh),"a",Yq(U0),"hV",Yq(Uy),"hF",Yr(NF)]]);
$rt_metadata([Fx,0,B,[],0,3,0,0,0,J2,0,P,[],0,3,0,0,["a",Yq(LS)],Jo,0,B,[V],0,3,0,0,["kg",Yr(SX),"f",Yr(QI),"js",Yr(H2)],Bs,0,B,[],0,3,0,0,["a",Yq(C8)],Ki,0,Bs,[],0,0,0,0,["a",Yq(Pa)],Kf,0,Bs,[],0,0,0,0,["a",Yq(QV)],JI,0,Bs,[],0,0,0,0,["a",Yq(L8)],Kg,0,Bs,[],0,0,0,0,["a",Yq(TC)],FW,0,Cs,[CW],4,3,0,0,["gR",Ys(UQ),"i3",Yr(O1),"h$",Yr(Ns),"dT",Yr(SO),"dM",Ys(R2),"gX",Yr(O3),"g0",Yr(R_),"gL",Yr(SM),"eg",Yq(Tr),"hG",Yq(T6),"kB",Yr(LJ),"da",Yr(SL),"i5",Yr(UA),"iw",Ys(L5),"a",Yq(N3),"dz",Yr(K4),"kH",Yr(Kn),"jr",Yq(GB),
"kb",Ys(Lp),"d",Yq(T2),"fa",Yr(Py),"be",Yr(OF),"fZ",Yr(Mg),"fY",Yr(TG),"f6",Yq(Mp),"cq",Yr(UI),"fp",Yq(PJ),"f3",Ys(U3),"cI",Yr(T1),"e$",Yq(Ph)],BV,0,B,[Bw,Be,C_],0,3,0,LB,["iM",Yr(GN),"kK",Yt(LN),"n",Yr(N0),"c",Yq(RA),"cg",Yq(TU),"hX",Yr(SA),"eI",Yr(QH),"eh",Ys(NI),"cM",Yr(QG),"iV",Ys(N5),"iL",Yr(Te),"bL",Ys(MH),"hk",Yr(To),"d",Yq(OV),"f7",Yq(T3),"C",Yr(SB),"em",Yr(SU),"b0",Yq(NT),"gi",Yr(Ri)],LO,0,P,[],0,3,0,0,["a",Yq(Ok)],Ea,0,Df,[],1,3,0,0,["g$",Yt(H8),"hs",Ys(N7)],IJ,0,Ea,[],0,3,0,0,["jH",Yr(QJ),"gQ",function(b,
c,d,e,f,g,h){return Uv(this,b,c,d,e,f,g,h);}],Fl,0,B,[Bi],3,3,0,0,0,Ir,0,B,[Fl],0,3,0,0,["j_",Yr(Nr),"ip",Yr(Nl),"jS",Yr(HF),"jE",Yr(M7)],BA,0,B,[],4,3,0,Bp,0,B6,0,B$,[],0,3,0,0,["a",Yq(NL),"j",Yr(Dc)],Hj,0,S,[],0,0,0,0,["jF",Yr(Pj)],GY,0,B,[CD],0,3,0,0,["a",Yq(Rt)],GZ,0,B,[CD],0,3,0,0,["a",Yq(Qq),"fL",Ys(MG)],FR,0,Do,[],0,3,0,Rk,["h9",Yq(Tj)],CR,0,B,[],4,3,0,0,0,Lz,0,B,[DQ],4,3,0,0,["a",Yq(Og),"cY",Yr(NG),"dW",Yr(RT),"c5",Yr(PX)],Fm,0,B,[],0,3,0,Cu,["hm",Yt(Iz),"cW",Yr(TN)],GM,0,P,[],0,3,0,0,["a",Yq(QM),"j",
Yr(Oa)],Gh,0,P,[],0,3,0,0,["j",Yr(Q0),"a",Yq(Pn)],Ks,0,B,[FE],0,0,0,0,["ky",Yr(S9),"bi",Yr(Uf),"hj",Yr(TP)],CF,0,B,[Be,Bw],1,3,0,0,["c2",Ys(FA),"jp",Yq(Bn)],B_,0,B,[],0,3,0,0,["a",Yq(Fj)],IK,0,B_,[],0,0,0,0,["jX",Yu(UR)],If,0,B,[],0,0,0,0,["a",Yq(UL)],Kz,0,B,[],4,3,0,0,0,EB,0,Ba,[Be],0,3,0,S4,["jt",Yr(Jd)],Fu,0,B,[],0,3,0,EY,["j",Yr(GQ),"g9",Yr(MX),"iP",Ys(Th)],El,0,B,[Bw],0,3,0,0,["kI",Ys(TK),"fJ",Yq(O2),"cS",Yq(PM),"gm",Yq(Pk)],F7,0,B,[B1],0,0,0,0,["j5",Yr(L6),"bH",Yr(TB),"b1",Yr(Qv)],Cg,0,B,[],0,3,0,BF,0,JL,
0,Bq,[],0,3,0,0,["j",Yr(OW)],HH,0,D2,[],4,3,0,0,["be",Yr(Qi),"gX",Yr(O3),"g0",Yr(R_),"gL",Yr(SM),"eg",Yq(Tr),"hG",Yq(T6),"hD",Yr(MU),"iZ",Yr(NY),"dj",Yq(Uj),"b$",Yr(Ss),"ds",Yr(Uz),"cq",Yr(M2),"ii",Yr(Se),"ft",Yq(Rd),"hQ",Yr(Rc)],Il,0,B,[V],0,3,0,0,["a",Yq(L3),"f",Yr(Ot),"k0",Yr(I4)],JC,0,Cp,[],0,0,0,0,["gn",Yu(UK)],Kk,0,P,[],0,3,0,0,["a",Yq(RC)],Fo,0,B,[],4,3,0,Vz,0,JD,0,Cp,[],0,0,0,0,["gn",Yu(S3)],HW,0,B,[],4,3,0,0,0,K5,0,DY,[Ec],4,0,0,0,["gu",Ys(Nv),"iR",Yr(RQ)],DT,0,B,[],0,3,0,Bt,["jL",Ys(Io),"gp",Yq(MV),
"cZ",Yq(Sd),"iv",Yq(Ut),"h8",Yq(Sk),"fK",Yq(Sw),"c",Yq(Q6)],DD,0,B,[],4,3,0,Ev,0,G6,0,B,[],4,0,0,0,0,Ii,0,B_,[],0,0,0,0,["jG",Yu(OU)]]);
$rt_metadata([Kp,0,CH,[],0,3,0,0,0,Gf,0,B,[Ff],0,3,0,0,["a",Yq(Nt),"gb",Yr(Tk),"kJ",Yr(Hn)],Bu,0,CF,[],12,3,0,Bc,0,Lb,0,B,[EJ],4,0,0,0,["dz",Yr(Sp),"gt",Yr(OM),"d4",Ys(Mx),"jx",Ys(I5)],In,0,B,[],0,3,0,0,["iM",Yr(P1)],Im,0,Bo,[],1,3,0,0,0,CI,0,B,[],0,0,0,0,["cv",Yr(PD)],IX,0,Bo,[],1,3,0,0,0,JN,0,P,[],0,3,0,0,["a",Yq(SN)],B7,0,CF,[],12,3,0,DK,0,IM,0,B,[],0,3,0,0,["a",Yq(LW)],K8,0,B,[EH],0,3,0,0,["iS",Yr(O4),"dB",Yr(S6),"fD",Yr(SD)],GS,0,BQ,[CV],0,0,0,0,["gO",Yr(P2),"gq",Yr(OY),"cX",Yr(LR),"q",Yq(N1)],BN,0,B,[],
0,3,0,RG,0,Gy,0,B,[],4,3,0,0,0]);
function $rt_array(cls,data){this.e=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","<java_object>@",",","null","0",".","Null pointer","JSON does not allow non-finite numbers","JSON does not allow non-finite numbers.","\"\"","\\t","\\n","\\f","\\r","000","\\u","\\b","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","String is null or empty","Illegal radix: ",
"Result is already complete","main","No null success mapper accepted","No null failure mapper accepted","No null handler accepted","Future{cause=","Future{unresolved}","Future{result=null}","Future{result=","}","BIG_ENDIAN","LITTLE_ENDIAN","Index out of bounds","Cannot instantiate any provider for service ","(this Map)",", ","New position "," is outside of range [0;","classes.wasm","cy","width","height","placeIndex","frameIndex","wasm","computeLinePixelRGBs","initAndComputeLinePixelRGBs","","Replacement preconditions do not hold",
"Action must be non-null","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","[]","(this Collection)","OFF","SEVERE","WARNING","INFO","CONFIG","FINE","FINER","FINEST","ALL","IGNORE","REPLACE","REPORT","false","true","Light.","Sphere.","javaClass@","number","object","string","boolean","Light","The last char in dst ","Sphere","Using default built-in JSON factory which is not interoperable with the underlying platform! Be sure you haven\'t forgot to call Json.registerProvider().",
"Floor","Default","Glass","Mirror","UTF-8","global","STRING","NUMBER","BOOLEAN","OBJECT","ARRAY","NULL","UNDEFINED","RETURN_NULL","TRACE_AND_RETURN_NULL","THROW_EXCEPTION"]);
BV.prototype.toString=function(){return $rt_ustr(this);};
BV.prototype.valueOf=BV.prototype.toString;B.prototype.toString=function(){return $rt_ustr(OZ(this));};
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
a|b);};Long_xor=function(a,b){return $rt_globals.BigInt.asIntN(64,a^b);};Long_shl=function(a,b){return $rt_globals.BigInt.asIntN(64,a<<$rt_globals.BigInt(b&63));};Long_shr=function(a,b){return $rt_globals.BigInt.asIntN(64,a>>$rt_globals.BigInt(b&63));};Long_shru=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var W=Long_add;var Xx=Long_sub;var R=Long_mul;var Bg=Long_div;var Dk=Long_rem;var WU
=Long_or;var Bl=Long_and;var AAT=Long_xor;var Cf=Long_shl;var Da=Long_shr;var B0=Long_shru;var X5=Long_compare;var C1=Long_eq;var AAU=Long_ne;var Ja=Long_lt;var C2=Long_le;var IO=Long_gt;var IV=Long_ge;var AAV=Long_not;var Vo=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new $rt_globals.Error("Thread already started");}if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof $rt_globals.Error){throw result;}};this.run();};TeaVMThread.prototype.resume
=function(){if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending()
{var thread=$rt_nativeThread();return thread!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new $rt_globals.Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread
=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer(){throw new $rt_globals.Error("Invalid recorded state");}main=$rt_mainStarter(Wi);
main.javaException=$rt_javaException;
(function(){var c;c=JP.prototype;c.getLength=c.kf;c.get=c.ks;c=Jn.prototype;c.apply=c.j2;c=Jl.prototype;c.handle=c.fD;c=Jp.prototype;c.handle=c.fD;c=Ir.prototype;c.handleEvent=c.jE;c=K8.prototype;c.handle=c.fD;})();
})(this);

main()