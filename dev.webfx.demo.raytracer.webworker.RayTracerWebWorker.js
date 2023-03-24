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
function $rt_cls(cls){return G3(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Vb(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.h.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return Yi;}
function $rt_throwableMessage(t){return P0(t);}
function $rt_throwableCause(t){return P6(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(V6());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return By();}
function $rt_setThread(t){return DB(t);}
function $rt_createException(message){return Yj(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var G=$rt_throw;var CN=$rt_compare;var Yk=$rt_nullCheck;var F=$rt_cls;var X=$rt_createArray;var Bj=$rt_isInstance;var Qj=$rt_nativeThread;var W1=$rt_suspending;var Xe=$rt_resuming;var Vj=$rt_invalidPointer;var D=$rt_s;var M=$rt_eraseClinit;var EE=$rt_imul;var Z=$rt_wrapException;var Yl=$rt_checkBounds;var Ym=$rt_checkUpperBound;var Yn=$rt_checkLowerBound;var Yo=$rt_wrapFunction0;var Yp=$rt_wrapFunction1;var Yq=$rt_wrapFunction2;var Yr=$rt_wrapFunction3;var Ys=$rt_wrapFunction4;var C=$rt_classWithoutFields;var C7
=$rt_createArrayFromData;var Yt=$rt_createCharArrayFromData;var Yu=$rt_createByteArrayFromData;var Yv=$rt_createShortArrayFromData;var VY=$rt_createIntArrayFromData;var Yw=$rt_createBooleanArrayFromData;var Yx=$rt_createFloatArrayFromData;var Yy=$rt_createDoubleArrayFromData;var O$=$rt_createLongArrayFromData;var Yz=$rt_createBooleanArray;var CZ=$rt_createByteArray;var YA=$rt_createShortArray;var BH=$rt_createCharArray;var DH=$rt_createIntArray;var Xg=$rt_createLongArray;var YB=$rt_createFloatArray;var YC=$rt_createDoubleArray;var CN
=$rt_compare;var YD=$rt_castToClass;var YE=$rt_castToInterface;var YF=Long_toNumber;var H=Long_fromInt;var YG=Long_fromNumber;var T=Long_create;var BK=Long_ZERO;var YH=Long_hi;var DS=Long_lo;
function B(){this.e=null;this.$id$=0;}
function P4(){var a=new B();E(a);return a;}
function DN(b){var c;if(b.e===null)Ee(b);if(b.e.t===null)b.e.t=By();else if(b.e.t!==By())G(JX(D(0)));c=b.e;c.w=c.w+1|0;}
function Bh(b){var c,d;if(!Cv(b)&&b.e.t===By()){c=b.e;d=c.w-1|0;c.w=d;if(!d)b.e.t=null;Cv(b);return;}G(Qb());}
function VR(b){Si(b,1);}
function Si(b,c){var d,$p,$z;$p=0;if(Xe()){var $T=Qj();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.e===null)Ee(b);if(b.e.t===null)b.e.t=By();if(b.e.t===By()){d=b.e;d.w=d.w+c|0;return;}$p=1;case 1:T9(b,c);if(W1()){break _;}return;default:Vj();}}Qj().s(b,c,d,$p);}
function Ee(b){b.e=XI();}
function T9(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.bi=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.hj=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=Yb(callback);return thread.suspend(function(){try{X8(b,c,callback);}catch($e){callback.hj($rt_exception($e));}});}
function X8(b,c,d){var e,f,g;e=By();if(b.e===null){Ee(b);DB(e);f=b.e;f.w=f.w+c|0;d.bi(null);return;}if(b.e.t===null){b.e.t=e;DB(e);f=b.e;f.w=f.w+c|0;d.bi(null);return;}g=b.e;if(g.L===null)g.L=L3();Mh(g.L,XB(e,b,c,d));}
function VW(b){ME(b,1);}
function ME(b,c){var d;if(!Cv(b)&&b.e.t===By()){d=b.e;d.w=d.w-c|0;if(d.w>0)return;d.t=null;if(d.L!==null&&!DM(d.L))L8(WR(b));else Cv(b);return;}G(Qb());}
function QA(b){var c,d,e;if(!Cv(b)&&b.e.t===null){c=b.e;if(c.L!==null&&!DM(c.L)){d=c.L;e=N5(d);c.L=null;e.dS();}return;}}
function Cv(a){var b,c;b=a.e;if(b===null)return 1;a:{b:{if(b.t===null){if(b.L!==null){c=b.L;if(!DM(c))break b;}if(b.eq===null)break a;c=b.eq;if(DM(c))break a;}}return 0;}KR(a);return 1;}
function KR(a){a.e=null;}
function E(a){}
function EL(a){return G3(a.constructor);}
function PP(a){return Dj(a);}
function Mb(a,b){return a!==b?0:1;}
function OY(a){var b,c;b=FT(Dj(a));c=L();K(K(c,D(1)),b);return N(c);}
function Dj(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function UE(a){var b,c,d;if(!Bj(a,Ct)){b=a;if(b.constructor.$meta.item===null)G(Vq());}c=Mg(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function Uk(b){QA(b);}
function MQ(b,c,d,e){var f;DB(b);c.e.t=b;f=c.e;f.w=f.w+d|0;e.bi(null);}
function Bq(){var a=this;B.call(a);a.dc=null;a.cD=null;a.cj=0;a.cF=0;}
function YI(a,b,c,d){var e=new Bq();HW(e,a,b,c,d);return e;}
function YJ(){var a=new Bq();J0(a);return a;}
function YK(a){var b=new Bq();FF(b,a);return b;}
function YL(a){var b=new Bq();J6(b,a);return b;}
function HW(a,b,c,d,e){if(e)a.cu();a.cj=d;a.cF=e;a.dc=b;a.cD=c;}
function J0(a){a.cj=1;a.cF=1;a.cu();}
function FF(a,b){a.cj=1;a.cF=1;a.cu();a.dc=b;}
function J6(a,b){a.cj=1;a.cF=1;a.cu();a.cD=b;}
function Q9(a){return a;}
function P0(a){return a.dc;}
function P6(a){return a.cD===a?null:a.cD;}
var BS=C(Bq);
function YM(){var a=new BS();EV(a);return a;}
function YN(a){var b=new BS();Gi(b,a);return b;}
function EV(a){J0(a);}
function Gi(a,b){FF(a,b);}
var P=C(BS);
function YO(){var a=new P();Bm(a);return a;}
function Yj(a){var b=new P();C9(b,a);return b;}
function Bm(a){EV(a);}
function C9(a,b){Gi(a,b);}
var BD=C(P);
function G8(){var a=new BD();HZ(a);return a;}
function WM(a){var b=new BD();Cb(b,a);return b;}
function HZ(a){Bm(a);}
function Cb(a,b){C9(a,b);}
var Du=C(0);
function Qi(a,b){return b;}
function O2(a,b){if(b===null)return null;if(Bj(b,CJ))return a.g0(b);if(!Bj(b,CQ))return a.c8(b);return a.gL(b);}
function R_(a,b){return b.bu();}
function SM(a,b){return b.bu();}
var FK=C(0);
var E6=C(0);
function Tr(a){return (E_(a.bu(),a,L())).d();}
function RH(b,c){var d,e,f,g,h;c.i(123);d=1;e=b.e$();f=0;g=e.q();while(f<g){h=e.hD(f);if(!d)c.i(44);Hz(h,c);c.i(58);E_(b.cI(h),b,c);d=0;f=f+1|0;}return c.i(125);}
function Sg(b,c){return (QL(b,D(2),c.i(91))).i(93);}
function QL(b,c,d){var e,f;e=b.q();f=0;while(f<e){if(f>0)d.v(c);E_(b.cV(f),b,d);f=f+1|0;}return d;}
function E_(b,c,d){Xx();switch(YP.data[Bn(c.cq(b))]){case 1:return d.v(D(3));case 2:return RH(c.b$(b),d);case 3:return Sg(c.ds(b),d);case 4:return d.v(M9(c.be(b)));case 5:return d.T(c.be(b));case 6:return Hz(c.be(b),d);default:}return d;}
function OR(b){if(b.cM(46)>0&&b.cM(101)<0&&b.cM(69)<0){while(b.eI(D(4))){b=b.bL(0,b.c()-1|0);}if(b.eI(D(5)))b=b.bL(0,b.c()-1|0);}return b;}
function M9(b){if(b!==null){Sx(b);return OR(b.d());}G(CK(D(6)));}
function Sx(b){var c;a:{b:{if(b!==null){if(b instanceof B9){if((PG(0.0)).C(b))break b;c=b;if(!c.fG()&&!c.fW())break b;G(CK(D(7)));}if(b instanceof Ce&&!(V0(0.0)).C(b)){c=b;if(c.fG())break a;if(c.fW())break a;}}}return;}G(CK(D(8)));}
function Hz(b,c){var d,e,f,g,h,i,j;if(Q3(b))return c.v(D(9));d=0;e=b.c();c.i(34);f=0;while(f<e){a:{g=b.n(f);switch(g){case 8:break;case 9:c.v(D(10));break a;case 10:c.v(D(11));break a;case 12:c.v(D(12));break a;case 13:c.v(D(13));break a;case 34:case 92:c.i(92);c.i(g);break a;case 47:if(d==60)c.i(92);c.i(g);break a;default:if(g>=32){c.i(g);break a;}h=FT(g);i=L();K(K(i,D(14)),h);j=N(i);(c.v(D(15))).v(j.hk(j.c()-4|0));break a;}c.v(D(16));}f=f+1|0;d=g;}return c.i(34);}
var CX=C(0);
function T6(a){return a.b$(a.dj());}
var CT=C(0);
function G$(){var a=this;B.call(a);a.d_=null;a.fF=null;a.fc=0;a.fQ=0;}
function VT(a,b){var c=new G$();Rn(c,a,b);return c;}
function Rn(a,b,c){E(a);a.d_=b;a.fF=c;}
function Qr(a){return Ca(a.d_);}
function QC(a,b){return BZ(a.fF)<b?0:1;}
function Rv(a,b){a.fc=b;}
function U0(a,b){a.fQ=b;}
var Bw=C(0);
var Ba=C();
function Cc(a){E(a);}
var Be=C(0);
function Cw(){Ba.call(this);this.dI=0;}
var YQ=null;var YR=null;function BX(){BX=M(Cw);QR();}
function Ry(a){var b=new Cw();IN(b,a);return b;}
function IN(a,b){BX();Cc(a);a.dI=b;}
function Io(b,c){BX();if(!(c>=2&&c<=36))c=10;return ((Xu(20)).ek(b,c)).d();}
function FT(b){BX();return Mi(b,4);}
function HF(b){BX();return Io(b,10);}
function He(b,c){var d,e,f,g,h,i,j;BX();if(c>=2&&c<=36){if(b!==null&&!b.cg()){a:{d=0;e=0;switch(b.n(0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==b.c())G(X_());while(e<b.c()){g=e+1|0;h=F2(b.n(e));if(h<0){i=new B6;j=L();K(K(j,D(17)),b);Dc(i,N(j));G(i);}if(h>=c){i=new B6;j=L();K(K(O(K(j,D(18)),c),D(19)),b);Dc(i,N(j));G(i);}f=EE(c,f)+h|0;if(f<0){if(g==b.c()&&f==(-2147483648)&&d)return (-2147483648);i=new B6;j=L();K(K(j,D(20)),b);Dc(i,N(j));G(i);}e=g;}if(d)f= -f|0;return f;}G(Ve(D(21)));}i
=new B6;j=L();O(K(j,D(22)),c);Dc(i,N(j));G(i);}
function Fa(b){BX();return He(b,10);}
function Bf(b){BX();if(b>=(-128)&&b<=127){Hc();return YR.data[b+128|0];}return Ry(b);}
function Hc(){var b;BX();a:{if(YR===null){YR=X(Cw,256);b=0;while(true){if(b>=YR.data.length)break a;YR.data[b]=Ry(b-128|0);b=b+1|0;}}}}
function NM(a){return a.dI;}
function SR(a){return HF(a.dI);}
function Hb(b){var c,d,e;BX();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function QR(){YQ=F($rt_intcls());}
var I8=C(BS);
function Vq(){var a=new I8();Tw(a);return a;}
function Tw(a){EV(a);}
var Dv=C(0);
var FP=C(0);
function HU(){return VX();}
function M7(a,b){if(a.dx(b))return;G(JX(D(23)));}
var B5=C();
var YS=null;var YT=null;var YU=null;var YV=null;var YW=null;function PR(){PR=M(B5);TH();}
function TH(){YS=VY([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);YT=O$([H(1),H(10),H(100),H(1000),H(10000),H(100000),H(1000000),H(10000000),H(100000000),H(1000000000),T(1410065408, 2),T(1215752192, 23),T(3567587328, 232),T(1316134912, 2328),T(276447232, 23283),T(2764472320, 232830),T(1874919424, 2328306),T(1569325056, 23283064),T(2808348672, 232830643)]);YU=O$([H(1),H(10),H(100),H(10000),H(100000000),T(1874919424, 2328306)]);YV=VB();YW=W6();}
var Cj=C(0);
function FR(){Ba.call(this);this.dX=BK;}
var YX=null;function Jh(){Jh=M(FR);Sl();}
function Xo(a){var b=new FR();Jd(b,a);return b;}
function Jd(a,b){Jh();Cc(a);a.dX=b;}
function EA(b){Jh();return Xo(b);}
function MD(a){return DS(a.dX);}
function GW(b){Jh();return ((L()).iz(b)).d();}
function Rr(a){return GW(a.dX);}
function DW(b,c){return Long_udiv(b, c);}
function GU(b,c){return Long_urem(b, c);}
function Sl(){YX=F($rt_longcls());}
var B3=C(0);
var EI=C(0);
function B4(){var a=this;B.call(a);a.fN=BK;a.gs=BK;a.hn=null;a.h6=null;a.gT=0;a.i3=null;}
var YY=null;var YZ=null;var Y0=0;var Y1=0;var Y2=null;function FJ(){FJ=M(B4);N7();}
function U7(a){var b=new B4();HI(b,a);return b;}
function Y3(a,b){var c=new B4();E7(c,a,b);return c;}
function HI(a,b){FJ();E7(a,null,b);}
function E7(a,b,c){var d;FJ();E(a);a.hn=P4();a.gT=1;a.h6=c;a.i3=b;d=Y0;Y0=d+1|0;a.fN=H(d);}
function DB(b){FJ();if(YZ!==b)YZ=b;YZ.gs=I7();}
function By(){FJ();return YZ;}
function L1(a){return a.fN;}
function N7(){YY=U7(D(24));YZ=YY;Y0=1;Y1=1;Y2=W3();}
var Bi=C(0);
function Rq(b){return b;}
var E2=C(0);
var JO=C();
function Us(a,b){return a.jX(b);}
function Pc(a){return a.jU();}
var Dg=C(0);
var HB=C();
function X2(){var a=new HB();QT(a);return a;}
function QT(a){E(a);}
function Oh(a){return IB(a);}
function IB(a){return UW();}
var FW=C();
var Y4=null;function U9(){U9=M(FW);RJ();}
function RJ(){Y4=DH((Fb()).data.length);Y4.data[Bn(Y5)]=1;Y4.data[Bn(Y6)]=2;Y4.data[Bn(Y7)]=3;}
var GE=C();
function MV(b){return b;}
function DM(b){return b.length?0:1;}
function Mh(b,c){var d;d=MV(c);b.push(d);}
function N5(b){return b.shift();}
function Jo(){B.call(this);this.fz=null;}
function Xq(a){var b=new Jo();Qs(b,a);return b;}
function Qs(a,b){E(a);a.fz=b;}
function RP(a,b){Jr(a,b);}
function Jr(a,b){H3(a.fz,b);}
var Fi=C(0);
function Jk(){B.call(this);this.eM=null;}
function Yc(a){var b=new Jk();Uo(b,a);return b;}
function Uo(a,b){E(a);a.eM=b;}
function OC(a,b){GS(a.eM,b);}
function BJ(){var a=this;B.call(a);a.m=null;a.R=null;}
function FH(a){E(a);}
var Fc=C(0);
var Fo=C(0);
function QE(b){return Xm(b);}
function QX(a,b){return a.fl(b,Wq());}
var Dm=C(0);
var Co=C();
function E5(a){E(a);}
function ET(a,b,c){c.bH(b);}
function DV(a,b,c){c.b1(b);}
function Iz(a,b,c){var d;Dx(b,D(25));Dx(c,D(26));d=U_(b,c);a.bE(d);return d;}
function Ci(){var a=this;Co.call(a);a.A=null;a.P=null;}
var Y8=null;function Dh(){Dh=M(Ci);TA();}
function Y9(){var a=new Ci();D4(a);return a;}
function D4(a){Dh();E5(a);}
function Tm(a){var b,c;DN(a);try{if(a.A instanceof CI)b=null;else{c=a.A;Dh();b=c!==Y8?a.A:null;}return b;}finally{Bh(a);}}
function N8(a,b){var c;Dx(b,D(27));c=!Bj(b,B1)?Wc(a,b):b;a.bE(c);return a;}
function H0(a,b){var c,d,e,$$je;DN(a);a:{b:{try{c=a.A;if(c===null)break b;Bh(a);}catch($$e){$$je=Z($$e);d=$$je;break a;}if(c instanceof CI)DV(a,c.dq,b);else{Dh();if(c===Y8)c=null;ET(a,c,b);}return;}c:{try{if(a.P===null){a.P=b;break c;}if(a.P instanceof Fh)e=a.P;else{e=XJ();e.bw(a.P);a.P=e;}e.bw(b);break c;}catch($$e){$$je=Z($$e);d=$$je;break a;}}try{Bh(a);}catch($$e){$$je=Z($$e);d=$$je;break a;}return;}Bh(a);G(d);}
function Gh(a,b){var c,d,$$je;DN(a);a:{b:{c:{try{if(a.A===null)break c;Bh(a);}catch($$e){$$je=Z($$e);c=$$je;break b;}return 0;}d:{try{if(b!==null){c=b;break d;}Dh();c=Y8;break d;}catch($$e){$$je=Z($$e);c=$$je;break b;}}try{a.A=c;d=a.P;a.P=null;Bh(a);break a;}catch($$e){$$je=Z($$e);c=$$je;}}Bh(a);G(c);}if(d!==null)ET(a,b,d);return 1;}
function UI(a,b){var c,d,$$je;if(b===null)b=R7(null);DN(a);a:{b:{c:{try{if(a.A===null)break c;Bh(a);}catch($$e){$$je=Z($$e);c=$$je;break b;}return 0;}try{a.A=V4(b);d=a.P;a.P=null;Bh(a);break a;}catch($$e){$$je=Z($$e);c=$$je;}}Bh(a);G(c);}if(d!==null)DV(a,b,d);return 1;}
function SK(a){var b,c,d,$$je;DN(a);a:{b:{try{if(!(a.A instanceof CI))break b;b=a.A.dq.cS();c=L();CM(K(K(c,D(28)),b),125);b=N(c);Bh(a);}catch($$e){$$je=Z($$e);b=$$je;break a;}return b;}c:{try{if(a.A!==null)break c;Bh(a);}catch($$e){$$je=Z($$e);b=$$je;break a;}return D(29);}d:{try{b=a.A;Dh();if(b!==Y8)break d;Bh(a);}catch($$e){$$je=Z($$e);b=$$je;break a;}return D(30);}try{d=X1(D(31));a.iX(a.A,d);d.v(D(32));b=d.d();Bh(a);}catch($$e){$$je=Z($$e);b=$$je;break a;}return b;}Bh(a);G(b);}
function OH(a,b,c){c.T(b);}
function TA(){Y8=P4();}
var D1=C(Ci);
function Lx(a){D4(a);}
var C_=C(0);
var CC=C(Bq);
function Y$(a){var b=new CC();IL(b,a);return b;}
function Y_(a){var b=new CC();Hn(b,a);return b;}
function IL(a,b){FF(a,b);}
function Hn(a,b){J6(a,b);}
var CH=C(CC);
function Za(a){var b=new CH();Gu(b,a);return b;}
function Gu(a,b){IL(a,b);}
var Di=C(0);
function UP(a,b,c){return Po(C7(B,[a.da(b),c]));}
function O0(a,b){Er();return Zb.C(a.h$(b));}
function Nr(a,b){return Ts(a.da(b));}
function SO(a,b){return En(a.da(b));}
function R2(a,b,c){return En(a.gR(b,c));}
var CQ=C(0);
function LI(a,b){return a.b$(a.cI(b));}
function SL(a,b){return a.be(a.cI(b));}
var E9=C(0);
var CW=C(0);
function Uz(a,b){return LI(a,b);}
function L4(a,b,c){return a.f3(b,a.gX(c));}
var Ed=C(0);
var KU=C(BD);
function Pp(){var a=new KU();Rh(a);return a;}
function Rh(a){HZ(a);}
function D5(){B.call(this);this.hl=null;}
var Zc=null;var Zd=null;function TI(){TI=M(D5);UD();}
function Qn(a){var b=new D5();F5(b,a);return b;}
function F5(a,b){TI();E(a);a.hl=b;}
function UD(){Zc=Qn(D(33));Zd=Qn(D(34));}
var Kd=C();
function Dz(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.eK.data;f=b.fX;b.fX=f+1|0;g=N3(e[f]);h=(g%2|0)!=1?0:1;c=c+EE(d,g/2|0)|0;d=d*46|0;if(!h)break;}return c;}
function Eu(b){var c,d;c=Dz(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function N3(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
var FM=C(0);
var Ez=C(0);
var EX=C(0);
var CB=C();
function Eb(a){E(a);}
function DP(){CB.call(this);this.gP=null;}
function LJ(a){Eb(a);a.gP=CZ(1);}
var EP=C(DP);
var Ze=null;function TO(){TO=M(EP);Pd();}
function V9(){var a=new EP();Kz(a);return a;}
function Kz(a){TO();LJ(a);}
function T0(a,b,c,d){S0(b,c,d);}
function Pd(){Ze=V9();}
var Ff=C(0);
var Bo=C();
var GT=C(Bo);
function IA(){var a=this;B.call(a);a.et=null;a.fU=null;a.dr=null;a.fb=null;a.bS=null;}
function V5(){var a=new IA();Rb(a);return a;}
function Rb(a){E(a);}
function KE(a,b,c){if(b!==null)a.et=b;if(c!==null)a.fU=c;return a;}
function Kw(a){var b;if(a.dr===null){b=HA(a.et.fR());if(b.x())a.dr=b.r();}return a.dr;}
function IX(a){var b,c;a:{if(a.bS===null){a.bS=Kw(a);if(a.fb!==null){b=a.fb.s();while(true){if(!b.x())break a;c=b.r();a.bS=c.f(a.bS);}}}}return a.bS;}
function CA(){var a=this;B.call(a);a.b=null;a.k=0;}
function Zf(){var a=new CA();EQ(a);return a;}
function Xu(a){var b=new CA();Ey(b,a);return b;}
function Zg(a){var b=new CA();K5(b,a);return b;}
function Zh(a){var b=new CA();IF(b,a);return b;}
function EQ(a){Ey(a,16);}
function Ey(a,b){E(a);a.b=BH(b);}
function K5(a,b){IF(a,b);}
function IF(a,b){var c;E(a);a.b=BH(b.c());c=0;while(c<a.b.data.length){a.b.data[c]=b.n(c);c=c+1|0;}a.k=b.c();}
function KH(a,b){return a.e8(a.k,b);}
function EK(a,b){return a.cs(a.k,b);}
function Fe(a,b,c){var d,e,f;if(b>=0&&b<=a.k){if(c===null)c=D(3);else if(c.cg())return a;a.bF(a.k+c.c()|0);d=a.k-1|0;while(d>=b){a.b.data[d+c.c()|0]=a.b.data[d];d=d+(-1)|0;}a.k=a.k+c.c()|0;d=0;while(d<c.c()){e=a.b.data;f=b+1|0;e[b]=c.n(d);d=d+1|0;b=f;}return a;}G(Pp());}
function Hu(a,b){return a.ek(b,10);}
function Nw(a,b,c){return a.gM(a.k,b,c);}
function Tl(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)Bd(a,b,b+1|0);else{Bd(a,b,b+2|0);f=a.b.data;g=b+1|0;f[b]=45;b=g;}a.b.data[b]=CG(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=EE(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;Bd(a,b,b+i|0);if(e)l=b;else{f=a.b.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.b.data;g=l+1|0;f[l]=CG(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function Kp(a,b){return a.eA(a.k,b);}
function Lz(a,b,c){return a.ig(b,c,10);}
function Ml(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(I$(c,BK)){e=0;c=Vn(c);}a:{f=H(d);if(I$(c,f)){if(e)Bd(a,b,b+1|0);else{Bd(a,b,b+2|0);g=a.b.data;h=b+1|0;g[b]=45;b=h;}a.b.data[b]=CG(DS(c),d);}else{i=1;j=H(1);while(true){k=R(j,f);if(C2(k,j))break;if(IM(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;Bd(a,b,b+i|0);if(e)l=b;else{g=a.b.data;l=b+1|0;g[b]=45;}while(true){if(C2(j,BK))break a;g=a.b.data;h=l+1|0;g[l]=CG(DS(Bg(c,j)),d);c=Dk(c,j);j=Bg(j,f);l=h;}}}return a;}
function Jx(a,b){return a.d3(a.k,b);}
function IJ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=CN(c,0.0);if(!d){Bd(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=48;e=a.b.data;f=d+1|0;e[d]=46;a.b.data[f]=48;return a;}if(!d){Bd(a,b,b+4|0);e=a.b.data;d=b+1|0;e[b]=45;e=a.b.data;f=d+1|0;e[d]=48;e=a.b.data;d=f+1|0;e[f]=46;a.b.data[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Bd(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=78;e=a.b.data;f=d+1|0;e[d]=97;a.b.data[f]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Bd(a,b,b+8|0);d=b;}else{Bd(a,b,b+9|0);e=a.b.data;d=b+1|0;e[b]
=45;}e=a.b.data;f=d+1|0;e[d]=73;e=a.b.data;d=f+1|0;e[f]=110;e=a.b.data;f=d+1|0;e[d]=102;e=a.b.data;d=f+1|0;e[f]=105;e=a.b.data;f=d+1|0;e[d]=110;e=a.b.data;d=f+1|0;e[f]=105;e=a.b.data;f=d+1|0;e[d]=116;a.b.data[f]=121;return a;}PR();g=YV;KL(c,g);h=g.cR;i=g.c4;j=g.ej;k=1;l=1;if(j)l=2;m=18;n=OI(h);if(n>0)m=m-n|0;if(i<7&&i>=(-3)){if(i>=0){k=i+1|0;m=Cd(m,k+1|0);i=0;}else{h=Bg(h,YT.data[ -i|0]);m=m-i|0;i=0;}}if(i){l=l+2|0;if(!(i>(-10)&&i<10))l=l+1|0;if(!(i>(-100)&&i<100))l=l+1|0;if(i<0)l=l+1|0;}if(i&&m==k)m=m+1|0;d
=l+m|0;Bd(a,b,b+d|0);if(!j)o=b;else{e=a.b.data;o=b+1|0;e[b]=45;}p=T(1569325056, 23283064);q=0;while(q<m){if(C2(p,BK))r=0;else{r=DS(Bg(h,p));h=Dk(h,p);}e=a.b.data;d=o+1|0;e[o]=(48+r|0)&65535;k=k+(-1)|0;if(k)o=d;else{e=a.b.data;o=d+1|0;e[d]=46;}p=Bg(p,H(10));q=q+1|0;}if(i){e=a.b.data;d=o+1|0;e[o]=69;if(i>=0)f=d;else{i= -i|0;e=a.b.data;f=d+1|0;e[d]=45;}if(i>=100){e=a.b.data;d=f+1|0;e[f]=(48+(i/100|0)|0)&65535;i=i%100|0;e=a.b.data;o=d+1|0;e[d]=(48+(i/10|0)|0)&65535;}else if(i<10)o=f;else{e=a.b.data;o=f+1|0;e[f]
=(48+(i/10|0)|0)&65535;}a.b.data[o]=(48+(i%10|0)|0)&65535;}return a;}
function OI(b){var c,d,e,f;c=H(1);d=0;e=16;PR();f=YU.data.length-1|0;while(f>=0){if(C1(Dk(b,R(c,YU.data[f])),BK)){d=d|e;c=R(c,YU.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function K_(a,b){return a.fr(a.k,b);}
function KQ(a,b,c){Bd(a,b,b+1|0);a.b.data[b]=c;return a;}
function Ji(a,b,c){return a.cs(b,c===null?D(3):c.d());}
function EM(a,b){var c;if(a.b.data.length>=b)return;c=a.b.data.length>=1073741823?2147483647:Cd(b,Cd(a.b.data.length*2|0,5));a.b=NN(a.b,c);}
function Ep(a){return Pe(a.b,0,a.k);}
function Kg(a){return a.k;}
function HJ(a,b,c,d){return a.d0(a.k,b,c,d);}
function Gw(a,b,c,d,e){var f,g;if(d<=e&&e<=c.c()&&d>=0){Bd(a,b,(b+e|0)-d|0);while(d<e){f=a.b.data;g=b+1|0;f[b]=c.n(d);d=d+1|0;b=g;}return a;}G(G8());}
function JV(a,b,c,d,e){var f,g,h,i;if(b>c)G(WM(D(35)));while(b<c){f=d.data;g=e+1|0;h=a.b.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function JQ(a,b){a.k=b;}
function Bd(a,b,c){var d,e;d=a.k-b|0;a.bF((a.k+c|0)-b|0);e=d-1|0;while(e>=0){a.b.data[c+e|0]=a.b.data[b+e|0];e=e+(-1)|0;}a.k=a.k+(c-b|0)|0;}
var C6=C(0);
var Gk=C(CA);
function Vh(a){var b=new Gk();T7(b,a);return b;}
function L(){var a=new Gk();TE(a);return a;}
function X1(a){var b=new Gk();Mv(b,a);return b;}
function T7(a,b){Ey(a,b);}
function TE(a){EQ(a);}
function Mv(a,b){K5(a,b);}
function K(a,b){KH(a,b);return a;}
function Mu(a,b){EK(a,b);return a;}
function O(a,b){Hu(a,b);return a;}
function R9(a,b){Kp(a,b);return a;}
function PT(a,b){Jx(a,b);return a;}
function CM(a,b){K_(a,b);return a;}
function S1(a,b,c,d){HJ(a,b,c,d);return a;}
function Rf(a,b,c){Lz(a,b,c);return a;}
function Tu(a,b,c){IJ(a,b,c);return a;}
function Nd(a,b,c,d,e){Gw(a,b,c,d,e);return a;}
function Ub(a,b,c){Ji(a,b,c);return a;}
function NL(a,b,c){KQ(a,b,c);return a;}
function Un(a,b,c){Fe(a,b,c);return a;}
function Uv(a,b){JQ(a,b);}
function QF(a,b,c,d,e){JV(a,b,c,d,e);}
function Ot(a,b,c,d,e){return a.hN(b,c,d,e);}
function On(a){return Kg(a);}
function N(a){return Ep(a);}
function UB(a,b){EM(a,b);}
function Mz(a,b,c){return a.hp(b,c);}
function L0(a,b,c){return a.iF(b,c);}
function Qz(a,b,c){return a.hx(b,c);}
function Pl(a,b,c){return a.h1(b,c);}
function UM(a,b,c){return a.hh(b,c);}
var FE=C();
var Zi=null;function UR(){UR=M(FE);S5();}
function Ku(b){var c,d;UR();c=Zi.cK(b);if(c===null){d=Zi;c=V5();d.bm(b,c);}return c;}
function Fy(b,c,d){var e,f,g,h,i,j;UR();e=Ku(b);f=KE(e,c,d);g=IX(f);if(g!==null)return g;e=f.fU;DK();if(e!==Zj){h=b.ip();i=L();K(K(i,D(36)),h);j=N(i);if(e===Zk)G(JX(j));e=Lp();MB();e.iO(Zl,j);}return null;}
function S5(){Zi=US();}
var JU=C(P);
function OM(){var a=new JU();Up(a);return a;}
function Up(a){Bm(a);}
var Hj=C(CC);
function Wz(a){var b=new Hj();Mx(b,a);return b;}
function Mx(a,b){Hn(a,b);}
function Cr(){B.call(this);this.df=null;}
function Fd(a){E(a);}
function Ov(a){var b,c,d;b=L();b.i(123);c=(a.f1()).s();if(c.x()){d=c.r();b.T(d.bq()!==a?d.bq():D(37));b.i(61);b.T(d.bP()!==a?d.bP():D(37));}while(c.x()){b.v(D(38));d=c.r();b.T(d.bq()!==a?d.bq():D(37));b.i(61);b.T(d.bP()!==a?d.bP():D(37));}b.i(125);return b.d();}
var Ct=C(0);
function D9(){var a=this;Cr.call(a);a.y=0;a.g=null;a.D=0;a.ga=0.0;a.b8=0;}
function US(){var a=new D9();I4(a);return a;}
function Zm(a){var b=new D9();Eg(b,a);return b;}
function Zn(a,b){var c=new D9();KK(c,a,b);return c;}
function Sb(a,b){return X(CP,b);}
function I4(a){Eg(a,16);}
function Eg(a,b){KK(a,b,0.75);}
function KA(b){var c,d;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;d=c|c>>1;d=d|d>>2;d=d|d>>4;d=d|d>>8;d=d|d>>16;return d+1|0;}
function KK(a,b,c){var d;Fd(a);if(b>=0&&c>0.0){d=KA(b);a.y=0;a.g=a.c6(d);a.ga=c;E0(a);return;}G(HL());}
function E0(a){a.b8=a.g.data.length*a.ga|0;}
function Sm(a,b){var c;c=GJ(a,b);if(c===null)return null;return c.S;}
function GJ(a,b){var c,d,e;if(b===null)c=Dd(a);else{d=EW(b);e=d&(a.g.data.length-1|0);c=C3(a,b,e,d);}return c;}
function C3(a,b,c,d){var e,f;e=a.g.data[c];while(e!==null){if(e.ce==d){f=e.bb;if(G_(b,f))break;}e=e.K;}return e;}
function Dd(a){var b;b=a.g.data[0];while(b!==null&&b.bb!==null){b=b.K;}return b;}
function M4(a,b,c){return a.dF(b,c);}
function RY(a,b,c){var d,e,f,g,h;if(b===null){d=Dd(a);if(d===null){a.D=a.D+1|0;d=a.bX(null,0,0);e=a.y+1|0;a.y=e;if(e>a.b8)a.co();}}else{f=EW(b);g=f&(a.g.data.length-1|0);d=C3(a,b,g,f);if(d===null){a.D=a.D+1|0;d=a.bX(b,g,f);e=a.y+1|0;a.y=e;if(e>a.b8)a.co();}}h=d.S;d.S=c;return h;}
function O7(a,b,c,d){var e;e=WP(b,d);e.K=a.g.data[c];a.g.data[c]=e;return e;}
function RO(a,b){var c,d,e,f,g,h,i;c=KA(!b?1:b<<1);d=a.c6(c);e=0;while(e<a.g.data.length){f=a.g.data[e];a.g.data[e]=null;while(f!==null){g=d.data;h=f.ce&(c-1|0);i=f.K;f.K=g[h];g[h]=f;f=i;}e=e+1|0;}a.g=d;E0(a);}
function PA(a){a.hE(a.g.data.length);}
function HC(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.g.data[0];while(e!==null){if(e.bb===null)break a;f=e.K;d=e;e=f;}}else{g=EW(b);c=g&(a.g.data.length-1|0);e=a.g.data[c];while(e!==null&&!(e.ce==g&&G_(b,e.bb))){f=e.K;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.K=e.K;else a.g.data[c]=e.K;a.D=a.D+1|0;a.y=a.y-1|0;return e;}
function Pv(a){return a.y;}
function EW(b){return b.b0();}
function G_(b,c){return b!==c&&!b.C(c)?0:1;}
function G6(){var a=this;D9.call(a);a.b3=0;a.J=null;a.p=null;}
function Yg(){var a=new G6();NP(a);return a;}
function VV(a){var b=new G6();Pn(b,a);return b;}
function NP(a){I4(a);a.b3=0;a.J=null;}
function Pn(a,b){Eg(a,b);a.b3=0;a.J=null;}
function OF(a,b){return X(Fu,b);}
function Mq(a,b){var c,d,e,f,g;if(b===null)c=Dd(a);else{d=b.b0();e=(d&2147483647)%a.g.data.length|0;c=C3(a,b,e,d);}if(c===null)return null;if(a.b3&&a.p!==c){f=c.B;g=c.u;g.B=f;if(f===null)a.J=g;else f.u=g;c.u=null;c.B=a.p;a.p.u=c;a.p=c;}return c.S;}
function Uc(a,b,c,d){var e;e=Wk(b,d);e.K=a.g.data[c];a.g.data[c]=e;a.dA(e);return e;}
function SF(a,b,c){var d;d=a.dF(b,c);if(a.iA(a.J))a.gF(a.J.bb);return d;}
function Ud(a,b,c){var d,e,f,g,h,i;if(!a.y){a.J=null;a.p=null;}if(b===null){d=Dd(a);if(d!==null)a.dA(d);else{a.D=a.D+1|0;e=a.y+1|0;a.y=e;if(e>a.b8)a.co();d=a.bX(null,0,0);}}else{f=b.b0();e=f&2147483647;g=e%a.g.data.length|0;d=C3(a,b,g,f);if(d!==null)a.dA(d);else{a.D=a.D+1|0;h=a.y+1|0;a.y=h;if(h>a.b8){a.co();g=e%a.g.data.length|0;}d=a.bX(b,g,f);}}i=d.S;d.S=c;return i;}
function Md(a,b){var c,d;if(a.p===b)return;if(a.J===null){a.J=b;a.p=b;return;}c=b.B;d=b.u;if(c!==null){if(d===null)return;if(a.b3){c.u=d;d.B=c;b.u=null;b.B=a.p;a.p.u=b;a.p=b;}return;}if(d===null){b.B=a.p;b.u=null;a.p.u=b;a.p=b;}else if(a.b3){a.J=d;d.B=null;b.B=a.p;b.u=null;a.p.u=b;a.p=b;}}
function RZ(a){return Wl(a);}
function PN(a){if(a.df===null)a.df=Vw(a);return a.df;}
function PE(a,b){var c,d,e;c=HC(a,b);if(c===null)return null;d=c.B;e=c.u;if(d===null)a.J=e;else d.u=e;if(e===null)a.p=d;else e.B=d;return c.S;}
function My(a,b){return 0;}
var DO=C(0);
function MT(a,b){return MO(a.iY(b));}
var CJ=C(0);
function NX(a,b){return a.be(a.cV(b));}
var Eo=C(0);
var C$=C(0);
var Dr=C(0);
function Uj(a){return Yg();}
function Ss(a,b){if(b!==null&&!Bj(b,CW))return Xj(b);return b;}
function Uy(a,b){if(b!==null&&!Bj(b,C$))return Vp(b);return b;}
function M1(a,b){if(b===null){Bc();return Zo;}if(!Bj(b,B3)&&!Bj(b,CQ)){if(!Bj(b,Cl)&&!Bj(b,CJ)){if(b instanceof BO){Bc();return Y7;}if(b instanceof BV){Bc();return Y5;}if(!JF(b)){Bc();return Zp;}Bc();return Y7;}Bc();return Zq;}Bc();return Zr;}
var D2=C();
function Is(a,b){E(a);a.hQ(b);}
function Qu(a,b){return (a.ft()).cX(b);}
function M2(a){return (a.ft()).q();}
var Hw=C(CA);
function Px(){var a=new Hw();SC(a);return a;}
function SC(a){EQ(a);}
function PY(a,b){EK(a,b);return a;}
function PZ(a,b,c){Fe(a,b,c);return a;}
function OJ(a){return Ep(a);}
function O4(a,b){EM(a,b);}
function Mm(a,b,c){return a.ie(b,c);}
var DI=C(0);
function DY(){var a=this;B.call(a);a.e3=null;a.he=null;a.g2=null;a.g7=null;a.iN=null;a.dd=0;a.hM=0;}
function Zs(a,b){var c=new DY();K$(c,a,b);return c;}
function K$(a,b,c){E(a);a.e3=b.eX;a.he=b.fx;a.g2=b.e4;a.g7=b.d$;a.iN=b.ed;a.gg(c);}
function Oy(a,b){a.hM=b;a.dd=b;}
function Cz(){var a=this;B.call(a);a.fI=0;a.z=0;a.X=0;a.cf=0;}
function Fk(a,b){E(a);a.cf=(-1);a.fI=b;a.X=b;}
function CS(a){return a.z;}
function JR(a,b){var c,d,e;if(b>=0&&b<=a.X){a.z=b;if(b<a.cf)a.cf=0;return a;}c=new B$;d=a.X;e=L();CM(O(K(O(K(e,D(39)),b),D(40)),d),93);FY(c,N(e));G(c);}
function HS(a){a.z=0;a.X=a.fI;a.cf=(-1);return a;}
function BZ(a){return a.X-a.z|0;}
function Ca(a){return a.z>=a.X?0:1;}
var Dq=C(0);
var DQ=C(0);
function Cx(){var a=this;B.call(a);a.f_=0;a.b9=null;a.dt=null;a.gh=null;}
function Zt(a){var b=new Cx();Em(b,a);return b;}
function Em(a,b){E(a);a.f_=b.D;a.b9=b.J;a.gh=b;}
function OS(a){return a.b9===null?0:1;}
function Ld(a){if(a.f_==a.gh.D)return;G(OM());}
function FI(a){Ld(a);if(!a.x())G(Qd());a.dt=a.b9;a.b9=a.b9.u;}
var BW=C(0);
var JL=C(Cx);
function XE(a){var b=new JL();Q8(b,a);return b;}
function Q8(a,b){Em(a,b);}
function Oz(a){FI(a);return a.dt;}
function SY(a){return a.h3();}
var Es=C(0);
function Ho(){var a=this;B.call(a);a.d2=null;a.cH=null;}
function X6(a){var b=new Ho();L6(b,a);return b;}
function L6(a,b){E(a);a.cH=Px();a.d2=b;}
function Q7(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;d=HU();e=Kn();f=c.length;g=0;while(g<f){h=c[g];i=e.i4(h.hP());if(i===null){j=h.hP();i=Kn();e.iv(j,i);}k=W4(h);(i.bu())[$rt_ustr(h.j2())]=CL(k,"apply");g=g+1|0;}j=a.d2;l=e.bu();m=Ya(d);n=W$(a);Mr(j,l,CL(m,"handle"),CL(n,"handle"));return d.gc();}
function Lk(a,b){if(b!=10)a.cH.gz($rt_str($rt_globals.String.fromCharCode(b)));else{(HM()).e_(a.cH.d());a.cH=Px();}}
function Mk(b,c){b.bi(V7(c));}
function MS(b,c,d){(b.kX()).ji(c,d);}
function Mr(b,c,d,e){($rt_globals.WebAssembly.instantiate(b,$rt_globals.Object.assign(c,{teavm:{currentTimeMillis:function(){return (new $rt_globals.Date()).getTime();},isnan:$rt_globals.isNaN,teavm_getNaN:function(){return $rt_globals.NaN;},isinf:function(n){return !$rt_globals.isFinite(n);},isfinite:$rt_globals.isFinite,putwchar:e,towlower:function(code){return (($rt_globals.String.fromCharCode(code)).toLowerCase()).charCodeAt(0);},towupper:function(code){return (($rt_globals.String.fromCharCode(code)).toUpperCase()).charCodeAt(0);},
getNativeOffset:function(instant){return (new $rt_globals.Date(instant)).getTimezoneOffset();},logString:$rt_globals.console.log,logInt:$rt_globals.console.log,logOutOfMemory:function(){$rt_globals.console.log("Out of memory");}},teavmMath:{sqrt:$rt_globals.Math.sqrt,pow:$rt_globals.Math.pow,sin:$rt_globals.Math.sin,cos:$rt_globals.Math.cos}}))).then(function(instance){return d(instance);});}
function DL(){B.call(this);this.dk=null;}
function Zu(){var a=new DL();F4(a);return a;}
function F4(a){E(a);}
function GZ(a,b){a.dk=b;}
function Rz(a,b){a.dk.cY(b);}
function P9(a,b){a.dk.c5(b);}
function Dy(){DL.call(this);this.ex=null;}
function Ju(a){F4(a);}
function NQ(a,b){a.ex=b;GZ(a,b);}
function HY(a,b){a.eU(b);}
function TD(a,b){return a.ex.dW(b);}
function LC(){var a=this;Dy.call(a);a.bQ=0;a.dn=0;a.du=0;a.dH=0;a.cC=null;a.eH=0;a.bZ=null;a.cO=null;a.eN=0;}
function W8(){var a=new LC();QD(a);return a;}
function QD(a){Ju(a);}
function Ul(a){var b;if(UO()){b=NY(D(41),X(Fw,0));b.ic(Xq(a));}a.c5(Yc(a));}
function GS(a,b){var c,d,e,f,g,h,i,j;c=UF(b);d=(c.dM(D(42),Bf(0))).M();e=c.dT(D(43));f=e===null?0:1;if(f){a.bQ=(c.dT(D(43))).M();a.dn=(c.dT(D(44))).M();a.du=(c.dM(D(45),Bf(0))).M();a.dH=(c.dM(D(46),Bf(0))).M();a.eH=c.i2(D(47));}if(a.eH&&a.bZ!==null){if(!f&&a.eN){g=a.bZ;h=X(B,1);h.data[0]=Bf(d);i=g.d4(D(48),h);}else{i=a.bZ.d4(D(49),C7(B,[Bf(d),Bf(a.bQ),Bf(a.dn),Bf(a.du),Bf(a.dH)]));a.eN=1;}j=i.M();a.cO.gg(j);a.cC=a.cO.iQ(3*a.bQ|0);}else{if(f)NR(a.bQ,a.dn,a.du,a.dH);a.cC=T4(a.bQ,null);St(d,a.cC);}a.cY(a.dW(a.cC));}
function H3(a,b){a.bZ=b.hR();a.cO=a.bZ.gt(0);}
var Ef=C(0);
function D$(){var a=this;B.call(a);a.bb=null;a.S=null;}
function Zv(a,b){var c=new D$();Lv(c,a,b);return c;}
function Lv(a,b,c){E(a);a.bb=b;a.S=c;}
function S_(a){return a.bb;}
function T$(a){return a.S;}
function CP(){var a=this;D$.call(a);a.ce=0;a.K=null;}
function WP(a,b){var c=new CP();HK(c,a,b);return c;}
function HK(a,b,c){Lv(a,b,null);a.ce=c;}
function Fu(){var a=this;CP.call(a);a.u=null;a.B=null;}
function Wk(a,b){var c=new Fu();RV(c,a,b);return c;}
function RV(a,b,c){HK(a,b,c);a.u=null;a.B=null;}
function Ic(){var a=this;B.call(a);a.E=0.0;a.F=0.0;a.G=0.0;}
function CE(a,b,c){var d=new Ic();Rg(d,a,b,c);return d;}
function Rg(a,b,c,d){E(a);a.E=b;a.F=c;a.G=d;}
function Q(b,c,d){return CE(b,c,d);}
function BE(b){var c,d;c=G0(b);d=c===0.0?Infinity:1.0/c;return Bk(d,b);}
function Bk(b,c){return CE(c.E*b,c.F*b,c.G*b);}
function Ch(b,c){return CE(b.E-c.E,b.F-c.F,b.G-c.G);}
function C5(b,c){return CE(b.E+c.E,b.F+c.F,b.G+c.G);}
function BB(b,c){return b.E*c.E+b.F*c.F+b.G*c.G;}
function Dw(b,c){return CE(b.F*c.G-b.G*c.F,b.G*c.E-b.E*c.G,b.E*c.F-b.F*c.E);}
function G0(b){return FO(BB(b,b));}
var Cy=C(CH);
function Zw(a){var b=new Cy();Fx(b,a);return b;}
function Fx(a,b){Gu(a,b);}
var JW=C(Cy);
function Zx(a){var b=new JW();Pq(b,a);return b;}
function Pq(a,b){Fx(a,b);}
var EU=C(BS);
var EJ=C(0);
var EH=C(0);
var CD=C(0);
function Mp(b){return Wy(b);}
function UA(b,c,d){return Lw(b.gb(c),b.gb(d));}
var Hk=C();
function Xr(){var a=new Hk();Og(a);return a;}
function Og(a){E(a);}
function G4(){var a=this;B.call(a);a.cy=0;a.fA=0;a.fB=0;a.ea=0;a.bR=null;}
function VG(a){var b=new G4();Ow(b,a);return b;}
function Ow(a,b){a.bR=b;E(a);a.fA=a.bR.cr;a.fB=a.bR.q();a.ea=(-1);}
function M0(a){return a.cy>=a.fB?0:1;}
function RR(a){var b,c;Ib(a);a.ea=a.cy;b=a.bR;c=a.cy;a.cy=c+1|0;return b.cX(c);}
function Ib(a){if(a.fA>=a.bR.cr)return;G(OM());}
var DA=C(Cr);
function JY(a){Fd(a);}
var E8=C();
var YP=null;function Xx(){Xx=M(E8);Mj();}
function Mj(){YP=DH((Fb()).data.length);YP.data[Bn(Zo)]=1;YP.data[Bn(Zr)]=2;YP.data[Bn(Zq)]=3;YP.data[Bn(Y7)]=4;YP.data[Bn(Y6)]=5;YP.data[Bn(Y5)]=6;}
var D0=C(P);
function W9(){var a=new D0();Gd(a);return a;}
function Gd(a){Bm(a);}
var Lq=C(D0);
function U$(){var a=new Lq();TM(a);return a;}
function TM(a){Gd(a);}
var GN=C();
function H2(b,c){if(b===null)G(V6());if(b===F($rt_voidcls()))G(HL());if(c<0)G(Xl());return S7(b.fV(),c);}
function S7(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var E$=C(0);
var Ja=C(Bo);
function I_(){var a=this;B.call(a);a.cJ=0;a.cB=null;}
function Wf(a){var b=new I_();Oa(b,a);return b;}
function Oa(a,b){a.cB=b;E(a);}
function Tv(a){return a.cJ>=a.cB.cz.data.length?0:1;}
function N1(a){var b,c;if(a.cJ==a.cB.cz.data.length)G(Qd());b=a.cB.cz.data;c=a.cJ;a.cJ=c+1|0;return b[c];}
function Hp(){var a=this;B.call(a);a.cR=BK;a.c4=0;a.ej=0;}
function VB(){var a=new Hp();ON(a);return a;}
function ON(a){E(a);}
var ID=C();
var Hd=C(Cy);
function Zy(a){var b=new Hd();O6(b,a);return b;}
function O6(a,b){Fx(a,b);}
var In=C();
function XN(){var a=new In();Rw(a);return a;}
function Rw(a){E(a);}
function LX(a){return Ls(a);}
function Ls(a){return Rm();}
var DX=C(0);
var CU=C(0);
var Ck=C();
function FA(a){E(a);}
function RL(a){var b,c,d,e,f;b=X(B,a.q());c=0;d=a.s();while(d.x()){e=b.data;f=c+1|0;e[c]=d.r();c=f;}return b;}
function QN(a,b){var c,d,e,f;c=b.data;d=a.q();e=c.length;if(e<d)b=H2((EL(b)).gf(),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.s();while(f.x()){c=b.data;e=d+1|0;c[d]=f.r();d=e;}return b;}
var IG=C();
function Mi(b,c){var d,e,f,g,h,i,j,k;if(!b)return D(4);d=1<<c;e=d-1|0;f=(((32-Hb(b)|0)+c|0)-1|0)/c|0;g=BH(f);h=EE(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=CG(b>>>h&e,d);h=h-c|0;i=k;}return Vb(g);}
function FU(){Ba.call(this);this.i0=0;}
var Zz=null;function RM(){RM=M(FU);OG();}
function XU(a){var b=new FU();HP(b,a);return b;}
function HP(a,b){RM();Cc(a);a.i0=b;}
function Gj(b){RM();return XU(b);}
function OG(){Zz=F($rt_shortcls());}
var Ex=C(0);
var Lt=C();
function W3(){var a=new Lt();Oq(a);return a;}
function Oq(a){E(a);}
var FZ=C(0);
var Hv=C();
function Li(){var b;b=X2();DK();return Fy(F(CO),b,Zj);}
function UO(){var b;b=Li();return b!==null&&b.hV()?1:0;}
function NY(b,c){return (Li()).i$(b,c);}
function UW(){return GO(F(CO));}
var Ie=C();
function CL(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Cp(){var a=this;B.call(a);a.dK=null;a.c1=null;a.dC=null;a.c0=null;}
function ZA(){var a=new Cp();FS(a);return a;}
function FS(a){E(a);}
function I9(b,c){var d,e,f,g,h,i,j,k,l;d=Ch(b,c);e=BE(d);f=CE(0.0,(-1.0),0.0);g=Dw(e,f);h=BE(g);i=Bk(2.0,h);j=Dw(e,i);k=BE(j);l=Bk(2.0,k);return WI(c,e,l,i);}
function F3(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=e/d;g=Ch(b,c);h=BE(g);i=CE(0.0,(-1.0),0.0);j=Dw(h,i);k=BE(j);l=Bk(2.0,k);m=Dw(h,l);n=BE(m);o=Bk(2.0*f,n);return Wt(c,h,o,l);}
var DC=C(0);
var B1=C(0);
function GD(){var a=this;D1.call(a);a.eb=null;a.fO=null;}
function U_(a,b){var c=new GD();PS(c,a,b);return c;}
function PS(a,b,c){Lx(a);a.eb=b;a.fO=c;}
function Rl(a,b){var c,d,$$je;a:{try{c=a.eb.f(b);break a;}catch($$e){$$je=Z($$e);if($$je instanceof Bq){d=$$je;}else{throw $$e;}}a.cL(d);return;}c.bE(EZ(a));}
function OP(a,b){var c,d,$$je;a:{try{c=a.fO.f(b);break a;}catch($$e){$$je=Z($$e);if($$je instanceof Bq){d=$$je;}else{throw $$e;}}a.cL(d);return;}c.bE(EZ(a));}
function EZ(a){return Wv(a);}
function HT(){B.call(this);this.cz=null;}
function Vk(a){var b=new HT();RD(b,a);return b;}
function RD(a,b){E(a);a.cz=b;}
function HA(a){return Wf(a);}
function GO(b){return Vk(Sq(b.fV()));}
function Sq(b){var c;c=ML(b);if(c===null)c=X(B,0);return c;}
function ML(b){if (!HT.$$services$$) {HT.$$services$$ = true;CX.$$serviceList$$ = [[FV, N2]];CO.$$serviceList$$ = [[EO, UZ]];}var cls = b;if (!cls.$$serviceList$$) {return $rt_createArray($rt_objcls(), 0);}var result = $rt_createArray($rt_objcls(), cls.$$serviceList$$.length);for (var i = 0; i < result.data.length; ++i) {var serviceDesc = cls.$$serviceList$$[i];result.data[i] = new serviceDesc[0]();serviceDesc[1](result.data[i]);}return result;}
var HQ=C();
function TF(b){var c,d,e,f,g,h,i,j,k;c=P7(b.f7());d=Dz(c);e=DH(d*2|0);f=0;g=0;h=0;i=0;while(i<d){j=e.data;g=g+Eu(c)|0;h=h+Eu(c)|0;k=f+1|0;j[f]=g;f=k+1|0;j[k]=h;i=i+1|0;}return e;}
function Sz(b){var c,d,e,f,g,h,i;c=P7(b.f7());d=Dz(c);e=DH(d*2|0);f=0;g=0;while(g<d){h=e.data;f=f+Dz(c)|0;i=g*2|0;h[i]=f;h[i+1|0]=Eu(c);g=g+1|0;}return e;}
function BP(){var a=this;B.call(a);a.cc=null;a.bx=null;a.ck=null;}
function DJ(a){E(a);}
function Gv(){var a=this;B.call(a);a.e5=null;a.e6=null;a.e1=0;a.e2=null;}
function XB(a,b,c,d){var e=new Gv();Rs(e,a,b,c,d);return e;}
function Rs(a,b,c,d,e){E(a);a.e5=b;a.e6=c;a.e1=d;a.e2=e;}
function Tq(a){MQ(a.e5,a.e6,a.e1,a.e2);}
var JG=C();
function QZ(b){return Dx(b,D(50));}
function Dx(b,c){if(b!==null)return b;G(Wm(c));}
function Ln(){Co.call(this);this.d8=null;}
function Xm(a){var b=new Ln();Tz(b,a);return b;}
function Tz(a,b){E5(a);if(b===null)b=R7(null);a.d8=b;}
function OB(a,b){DV(a,a.d8,b);}
function Bz(){var a=this;B.call(a);a.bd=null;a.br=null;}
function ZB(){var a=new Bz();C4(a);return a;}
function C4(a){E(a);}
function J3(){var a=this;Bz.call(a);a.fM=null;a.fh=null;}
function Va(a,b){var c=new J3();Or(c,a,b);return c;}
function Or(a,b,c){a.fM=b;a.fh=c;C4(a);a.br=a.fM.bx.dK;a.bd=a.fh;}
function Df(){var a=this;B.call(a);a.g3=null;a.dy=null;a.hc=0.0;a.d1=0.0;a.c9=null;a.dR=null;a.bB=0;}
function KC(a,b,c,d,e){E(a);FC();a.c9=ZC;a.dR=ZC;Kv(a,e);a.g3=b;a.dy=e.dV();a.hc=c;a.d1=d;}
function JZ(a,b,c,d){var e;e=CZ(1);e.data[0]=63;KC(a,b,c,d,e);}
function Kv(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.d1)return;}G(CK(D(51)));}
function F1(a,b){if(b!==null){a.c9=b;a.iB(b);return a;}G(CK(D(52)));}
function TV(a,b){}
function Kx(a,b){if(b!==null){a.dR=b;a.h2(b);return a;}G(CK(D(52)));}
function Ti(a,b){}
function Hh(a,b,c,d){var e,f,g,h,$$je;a:{if(a.bB!=3){if(d)break a;if(a.bB!=2)break a;}G(Ok());}a.bB=!d?1:2;while(true){try{e=a.hs(b,c);}catch($$e){$$je=Z($$e);if($$je instanceof P){f=$$je;G(Wz(f));}else{throw $$e;}}if(e.gp()){if(!d)return e;g=BZ(b);if(g<=0)return e;e=Ds(g);}else if(e.cZ())break;h=!e.fK()?a.c9:a.dR;b:{FC();if(h!==ZD){if(h===ZE)break b;else return e;}if(BZ(c)<a.dy.data.length)return ZF;JP(c,a.dy);}b.eE(CS(b)+e.c()|0);}return e;}
function Gs(a,b){var c;if(a.bB!=2&&a.bB!=4)G(Ok());c=a.gH(b);Bt();if(c===ZG)a.bB=3;return c;}
function L_(a,b){Bt();return ZG;}
var E1=C(0);
function Jl(){B.call(this);this.fm=null;}
function W4(a){var b=new Jl();RE(b,a);return b;}
function RE(a,b){E(a);a.fm=b;}
function Um(a,b,c){MS(a.fm,b,c);}
function N9(a,b,c){a.iI(b,c);}
function Jj(){B.call(this);this.en=null;}
function Ya(a){var b=new Jj();SV(b,a);return b;}
function SV(a,b){E(a);a.en=b;}
function M$(a,b){Mk(a.en,b);}
function ST(a,b){a.dB(b);}
var Eq=C(0);
function Jn(){B.call(this);this.gk=null;}
function W$(a){var b=new Jn();LY(b,a);return b;}
function LY(a,b){E(a);a.gk=b;}
function Qh(a,b){Lk(a.gk,b);}
function UU(a,b){a.ir(b);}
function DG(){var a=this;Cz.call(a);a.fS=0;a.ev=null;a.jc=null;}
function G7(a,b,c,d,e,f){Fk(a,c);TI();a.jc=Zc;a.fS=b;a.ev=d;a.z=e;a.X=f;}
function Ty(b,c,d){return WY(0,b.data.length,b,c,c+d|0,0,0);}
function Qk(b){return Ty(b,0,b.data.length);}
function Sy(a,b,c,d){var e,f,g,h,i,j,k,l;if(!d)return a;if(a.gw())G(U$());if(BZ(a)<d)G(Wb());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BD;i=L();O(K(O(K(i,D(53)),g),D(54)),f);Cb(h,N(i));G(h);}if(d<0){h=new BD;i=L();K(O(K(i,D(55)),d),D(56));Cb(h,N(i));G(h);}j=a.z+a.fS|0;k=0;while(k<d){l=a.ev.data;g=j+1|0;f=c+1|0;l[j]=e[c];k=k+1|0;j=g;c=f;}a.z=a.z+d|0;return a;}}e=b.data;h=new BD;f=e.length;i=L();CM(O(K(O(K(i,D(57)),c),D(40)),f),41);Cb(h,N(i));G(h);}
function JP(a,b){return a.ff(b,0,b.data.length);}
function EN(a){HS(a);return a;}
function Kk(){var a=this;DG.call(a);a.gx=0;a.ee=0;}
function WY(a,b,c,d,e,f,g){var h=new Kk();MR(h,a,b,c,d,e,f,g);return h;}
function MR(a,b,c,d,e,f,g,h){G7(a,b,c,d,e,f);a.gx=g;a.ee=h;}
function Sc(a){return a.ee;}
var Cl=C(0);
function P2(a,b){Hs(a,b);}
function BQ(){Ck.call(this);this.cr=0;}
function D8(a){FA(a);}
function QY(a){return VG(a);}
var CV=C(0);
function Dt(){var a=this;BQ.call(a);a.o=null;a.U=0;}
function VQ(){var a=new Dt();JI(a);return a;}
function W5(a){var b=new Dt();Ei(b,a);return b;}
function Xs(a){var b=new Dt();PC(b,a);return b;}
function JI(a){Ei(a,10);}
function Ei(a,b){D8(a);a.o=X(B,b);}
function PC(a,b){var c,d;Ei(a,b.q());c=b.s();d=0;while(d<a.o.data.length){a.o.data[d]=c.r();d=d+1|0;}a.U=a.o.data.length;}
function Nm(a,b){var c;if(a.o.data.length<b){c=a.o.data.length>=1073741823?2147483647:Cd(b,Cd(a.o.data.length*2|0,5));a.o=Tp(a.o,c);}}
function PI(a,b){Ej(a,b);return a.o.data[b];}
function N$(a){return a.U;}
function MN(a,b,c){var d;Ej(a,b);d=a.o.data[b];a.o.data[b]=c;return d;}
function SE(a,b){var c,d;a.bF(a.U+1|0);c=a.o.data;d=a.U;a.U=d+1|0;c[d]=b;a.cr=a.cr+1|0;return 1;}
function Ej(a,b){if(b>=0&&b<a.U)return;G(G8());}
function Op(a){var b,c,d;if(!a.U)return D(58);b=a.U-1|0;c=Vh(a.U*16|0);c.i(91);d=0;while(d<b){(c.T(a.o.data[d]===a?D(59):a.o.data[d])).v(D(38));d=d+1|0;}c.T(a.o.data[b]===a?D(59):a.o.data[b]);return (c.i(93)).d();}
var Fh=C(Dt);
function XJ(){var a=new Fh();PF(a);return a;}
function PF(a){JI(a);}
function OA(a,b){var c,d;c=a.s();while(c.x()){d=c.r();d.bH(b);}}
function Ma(a,b){var c,d;c=a.s();while(c.x()){d=c.r();d.b1(b);}}
var H9=C();
function Wg(b){UT(W8());}
var V=C(0);
function Bx(){var a=this;B.call(a);a.iy=null;a.fT=0;}
var ZH=null;var ZI=null;var Zl=null;var ZJ=null;var ZK=null;var ZL=null;var ZM=null;var ZN=null;var ZO=null;function MB(){MB=M(Bx);QQ();}
function B2(a,b){var c=new Bx();K1(c,a,b);return c;}
function K1(a,b,c){MB();E(a);a.iy=b;a.fT=c;}
function Db(a){return a.fT;}
function QQ(){ZH=B2(D(60),2147483647);ZI=B2(D(61),1000);Zl=B2(D(62),900);ZJ=B2(D(63),800);ZK=B2(D(64),700);ZL=B2(D(65),500);ZM=B2(D(66),400);ZN=B2(D(67),300);ZO=B2(D(68),(-2147483648));}
function D6(){B.call(this);this.ep=0;}
function Iv(a){E(a);a.gA();}
function G9(a,b){E(a);a.c_(b);}
function Rj(a){a.c_(a.dj());}
function QO(a){a.c_(FL(a.cb()));}
function P8(a){return a.ds(Xs((a.cb()).jb()));}
function RN(a,b){return (a.cb()).cK(b);}
function Ru(a,b,c){a.g5();(a.cb()).bm(b,c);return a;}
function Ra(a){if(a.ep){a.hB();a.ep=0;}}
function TQ(a){return a.eg();}
function Od(a,b,c){return a.gG(b,c);}
var HR=C();
function Mg(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function VK(b){b.dS();}
function L8(b){QB(b,0);}
function QB(b,c){return setTimeout(function(){VK(b);},c);}
function L3(){return T_();}
function TL(b){return b.$meta.item;}
function Qx(b){return $rt_str(b.$meta.name);}
function T_(){return [];}
function Do(){var a=this;B.call(a);a.gv=null;a.il=null;}
function H4(a,b,c){var d,e,f,g;d=c.data;E(a);Iq(b);e=d.length;f=0;while(f<e){g=d[f];Iq(g);f=f+1|0;}a.gv=b;a.il=c.dV();}
function Iq(b){var c,d;if(b.cg())G(JN(b));if(!Ir(b.n(0)))G(JN(b));c=1;while(c<b.c()){a:{d=b.n(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(Ir(d))break a;else G(JN(b));}}c=c+1|0;}}
function Ir(b){var c;a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}c=1;break a;}c=0;}return c;}
function C0(){B.call(this);this.ij=null;}
var ZE=null;var ZD=null;var ZC=null;function FC(){FC=M(C0);L$();}
function Kt(a){var b=new C0();Ih(b,a);return b;}
function Ih(a,b){FC();E(a);a.ij=b;}
function L$(){ZE=Kt(D(69));ZD=Kt(D(70));ZC=Kt(D(71));}
function BO(){B.call(this);this.b7=0;}
var Zb=null;var ZP=null;var ZQ=null;function Er(){Er=M(BO);Oi();}
function OK(a){var b=new BO();HN(b,a);return b;}
function HN(a,b){Er();E(a);a.b7=b;}
function Sa(a){return a.b7;}
function CY(b){Er();return !b?ZP:Zb;}
function Jf(b){Er();return !b?D(72):D(73);}
function NG(a){return Jf(a.b7);}
function M_(a,b){if(a===b)return 1;return b instanceof BO&&b.b7==a.b7?1:0;}
function Oi(){Zb=OK(1);ZP=OK(0);ZQ=F($rt_booleancls());}
var B$=C(P);
function HL(){var a=new B$();ES(a);return a;}
function CK(a){var b=new B$();FY(b,a);return b;}
function ES(a){Bm(a);}
function FY(a,b){C9(a,b);}
function IE(){B$.call(this);this.hf=null;}
function JN(a){var b=new IE();Ro(b,a);return b;}
function Ro(a,b){ES(a);a.hf=b;}
var LD=C(P);
function Qd(){var a=new LD();MK(a);return a;}
function MK(a){Bm(a);}
function Ga(){B.call(this);this.fH=null;}
function Wy(a){var b=new Ga();Q4(b,a);return b;}
function Q4(a,b){E(a);a.fH=b;}
function R8(a,b,c){return UA(a.fH,b,c);}
var Jp=C();
function Pk(b){return $rt_str(b);}
function Dp(){CB.call(this);this.dY=null;}
function ZR(a){var b=new Dp();Gz(b,a);return b;}
function Gz(a,b){Eb(a);a.dY=b;}
function Fr(){var a=this;Dp.call(a);a.hu=0;a.dG=0;a.bf=null;a.de=null;a.eQ=null;}
function ZS(a,b){var c=new Fr();J_(c,a,b);return c;}
function J_(a,b,c){Gz(a,b);a.bf=L();a.de=BH(32);a.hu=c;Rk();a.eQ=ZT;}
function Ny(a,b,c,d){var $$je;if(!I6(a))return;a:{try{a.dY.cl(b,c,d);break a;}catch($$e){$$je=Z($$e);if($$je instanceof EU){}else{throw $$e;}}a.dG=1;}}
function I6(a){if(a.dY===null)a.dG=1;return a.dG?0:1;}
function Hq(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=Ua(b,c,d-c|0);g=CZ(Cd(16,BG(e.length,1024)));h=Qk(g);i=a.eQ.h9();FC();j=ZD;i=F1(i,j);j=ZD;k=Kx(i,j);while(true){l=(Hh(k,f,h,1)).cZ();a.cl(g,0,CS(h));EN(h);if(!l)break;}while(true){l=(Gs(k,h)).cZ();a.cl(g,0,CS(h));EN(h);if(!l)break;}}
function Pf(a,b){(a.bf.v(b)).i(10);G1(a);}
function G1(a){var b;b=a.bf.c()<=a.de.data.length?a.de:BH(a.bf.c());a.bf.eo(0,a.bf.c(),b,0);Hq(a,b,0,a.bf.c());a.bf.ef(0);}
function S(){var a=this;B.call(a);a.ba=null;a.N=null;a.V=null;}
function ZU(){var a=new S();BI(a);return a;}
function BI(a){E(a);}
function KV(){S.call(this);this.it=null;}
function XA(a){var b=new KV();Qe(b,a);return b;}
function Qe(a,b){var c,d;a.it=b;BI(a);a.N=U(0.5,0.1,0.1);a.V=Q(4.0,2.5,(-5.0));Bp();c=ZV;d=L();O(K(d,D(74)),c);a.ba=N(d);ZV=ZV+1|0;}
function KX(){S.call(this);this.iV=null;}
function W0(a){var b=new KX();OQ(b,a);return b;}
function OQ(a,b){var c,d;a.iV=b;BI(a);a.N=U(0.0,0.8,0.8);a.V=Q((-10.0),12.0,(-7.5));Bp();c=ZV;d=L();O(K(d,D(74)),c);a.ba=N(d);ZV=ZV+1|0;}
function Y(){var a=this;BJ.call(a);a.W=0.0;a.O=null;}
function ZW(){var a=new Y();BL(a);return a;}
function BL(a){FH(a);}
function Nh(a,b){return BE(Ch(b,a.O));}
function Nz(a,b){var c,d,e,f;c=Ch(a.O,b.br);d=BB(c,b.bd);if(d<0.0)return null;e=De(a.W,2.0)-(BB(c,c)-De(d,2.0));f=e<0.0?0.0:d-FO(e);if(f===0.0)return null;return Xi(a,a,b,f);}
function KY(){Y.call(this);this.i9=null;}
function WW(a){var b=new KY();TW(b,a);return b;}
function TW(a,b){var c,d;a.i9=b;BL(a);BF();a.m=ZX;a.O=Q(3.0,2.0,6.0);a.W=1.75;Bp();c=ZY;d=L();O(K(d,D(75)),c);a.R=N(d);ZY=ZY+1|0;}
function K2(){Y.call(this);this.gS=null;}
function V3(a){var b=new K2();MC(b,a);return b;}
function MC(a,b){var c,d;a.gS=b;BL(a);BF();a.m=ZX;a.O=Q((-4.0),5.0,2.0);a.W=2.0;Bp();c=ZY;d=L();O(K(d,D(75)),c);a.R=N(d);ZY=ZY+1|0;}
function KW(){S.call(this);this.gC=null;}
function XH(a){var b=new KW();Mn(b,a);return b;}
function Mn(a,b){var c,d;a.gC=b;BI(a);a.N=U(0.5,0.3,0.75);a.V=Q((-2.0),5.0,0.0);Bp();c=ZV;d=L();O(K(d,D(74)),c);a.ba=N(d);ZV=ZV+1|0;}
function KZ(){Y.call(this);this.ht=null;}
function Vs(a){var b=new KZ();Pa(b,a);return b;}
function Pa(a,b){var c,d;a.ht=b;BL(a);BF();a.m=ZX;a.O=Q((-5.0),5.0,(-6.0));a.W=4.0;Bp();c=ZY;d=L();O(K(d,D(75)),c);a.R=N(d);ZY=ZY+1|0;}
var FD=C(0);
function KS(){Y.call(this);this.iJ=null;}
function WK(a){var b=new KS();S$(b,a);return b;}
function S$(a,b){var c,d;a.iJ=b;BL(a);BF();a.m=ZZ;a.O=Q(0.0,3.0,1.0);a.W=1.0;Bp();c=ZY;d=L();O(K(d,D(75)),c);a.R=N(d);ZY=ZY+1|0;}
var KO=C();
function XM(){var a=new KO();Ur(a);return a;}
function Ur(a){E(a);}
function TR(a,b){return Kb(a,b);}
function Kb(a,b){return ND(b);}
var GI=C();
function VA(){var a=new GI();P$(a);return a;}
function P$(a){E(a);}
function LZ(a,b){return Jq(a,b);}
function Jq(a,b){return M8(b);}
var KN=C();
function WE(){var a=new KN();PL(a);return a;}
function PL(a){E(a);}
function Np(a,b){return GK(a,b);}
function GK(a,b){return NO(b);}
var GG=C();
function Vy(){var a=new GG();RS(a);return a;}
function RS(a){E(a);}
function Qf(a,b){return GV(a,b);}
function GV(a,b){return TS(b);}
function K0(){Y.call(this);this.hy=null;}
function Vd(a){var b=new K0();Tn(b,a);return b;}
function Tn(a,b){var c,d;a.hy=b;BL(a);BF();a.m=ZX;a.O=Q(0.0,1.0,0.0);a.W=0.5;Bp();c=ZY;d=L();O(K(d,D(75)),c);a.R=N(d);ZY=ZY+1|0;}
var KM=C();
function Yf(){var a=new KM();UC(a);return a;}
function UC(a){E(a);}
function Ph(a,b){return LL(a,b);}
function LL(a,b){return MX(b);}
function KT(){Y.call(this);this.ia=null;}
function VP(a){var b=new KT();Qp(b,a);return b;}
function Qp(a,b){var c,d;a.ia=b;BL(a);BF();a.m=ZZ;a.O=Q(4.0,3.0,1.0);a.W=1.5;Bp();c=ZY;d=L();O(K(d,D(75)),c);a.R=N(d);ZY=ZY+1|0;}
var E4=C(0);
var BY=C(Ck);
function DE(a){FA(a);}
function DF(){BY.call(this);this.f8=null;}
function Z0(a){var b=new DF();If(b,a);return b;}
function If(a,b){DE(a);a.f8=b;}
function Pw(a){return a.f8;}
var I5=C(DF);
function Wl(a){var b=new I5();PB(b,a);return b;}
function PB(a,b){If(a,b);}
function RW(a){return XE(a.gI());}
var LE=C();
function VO(){var a=new LE();SI(a);return a;}
function SI(a){E(a);}
function Ox(a,b){return Iu(a,b);}
function Iu(a,b){return Nt(b);}
var Lh=C();
function XS(){var a=new Lh();Ug(a);return a;}
function Ug(a){E(a);}
function Sj(a,b){return Gc(a,b);}
function Gc(a,b){return P5(b);}
var LG=C();
function W_(){var a=new LG();MY(a);return a;}
function MY(a){E(a);}
function Pb(a,b){return Jv(a,b);}
function Jv(a,b){return T8(b);}
var Lg=C();
function WB(){var a=new Lg();PQ(a);return a;}
function PQ(a){E(a);}
function Mt(a,b){return H8(a,b);}
function H8(a,b){return Nb(b);}
var LH=C();
function Vv(){var a=new LH();Ql(a);return a;}
function Ql(a){E(a);}
function Tg(a,b){return It(a,b);}
function It(a,b){return S2(b);}
var GH=C();
function W7(){var a=new GH();SJ(a);return a;}
function SJ(a){E(a);}
function LT(a,b){return HX(a,b);}
function HX(a,b){return RU(b);}
var Lf=C();
function XO(){var a=new Lf();UY(a);return a;}
function UY(a){E(a);}
function QW(a,b){return HH(a,b);}
function HH(a,b){return OZ(b);}
var LF=C();
function VE(){var a=new LF();RF(a);return a;}
function RF(a){E(a);}
function R1(a,b){return Gl(a,b);}
function Gl(a,b){return LU(b);}
var KP=C();
function VZ(){var a=new KP();Ol(a);return a;}
function Ol(a){E(a);}
function Ue(a,b){return KI(a,b);}
function KI(a,b){return Q1(b);}
var GF=C();
function WT(){var a=new GF();MJ(a);return a;}
function MJ(a){E(a);}
function P_(a,b){return Ha(a,b);}
function Ha(a,b){return Q2(b);}
var H5=C();
function SP(b,c,d,e,f){var g,h;g=CN(e,f);if(!g){g=e;e=f;}else if(g>=0){c=c+0.5*(e-f|0);g=e;}else{b=b+0.5*(f-e|0);g=f;e=f;}h=SZ(b,c,d.bx,g,e);return Fg(Va(d,h),d,0);}
function Fg(b,c,d){var e,f;e=Ht(b,c);f=null;if((e.s()).x())f=(e.s()).r();if(f!==null)return Sf(f,c,d);Cu();return Z1;}
function Ht(b,c){var d,e,f,g,h,i,j,k;d=VQ();e=c.cc.data;f=e.length;g=0;while(g<f){h=e[g];i=h.ey(b);if(i!==null)d.bw(i);g=g+1|0;}d.gO(Mp(Wo()));j=X(B_,(d.e7()).data.length);k=0;while(true){e=j.data;if(k>=e.length)break;e[k]=(d.e7()).data[k];k=k+1|0;}i=M5(j);return i;}
function MP(b,c){var d,e;d=Ht(b,c);e=null;if((d.s()).x())e=(d.s()).r();if(e!==null)return e.b4;return 0.0;}
function Sf(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=b.bM.bd;f=C5(Bk(b.b4,b.bM.bd),b.bM.br);g=b.H.f5(f);h=Ch(e,Bk(2.0*BB(g,e),g));i=b.H.m.bg;j=(i.f(f)).bv()*BB(g,e);i=b.H.m.bg;j=j-FO(1.0-De((i.f(f)).bv(),2.0)*(1.0-De(BB(g,e),2.0)));i=Bk(j,g);k=b.H.m.bg;k=Bk((k.f(f)).bv(),e);l=Ch(i,k);Cu();m=Z1;i=Cm(m,NU(b.H,f,g,h,c));if(d>=4)return i;n=Qm(b.H,C5(f,Bk(0.001,h)),h,c,d);o=Mc(b.H,C5(g,Bk(0.001,l)),l,c,d);k=B8(1.0-b.H.m.by,n);p=B8(b.H.m.by,o);return Cm(i,Cm(k,p));}
function Qm(b,c,d,e,f){return B8((b.m.bN.f(c)).bv(),Fg(WG(c,d),e,f+1|0));}
function Mc(b,c,d,e,f){return B8((b.m.bg.f(c)).bv(),Fg(XF(c,d),e,f+1|0));}
function NU(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;g=U(0.0,0.0,0.0);h=f.ck.data;i=h.length;j=0;while(j<i){k=h[j];l=Ch(k.V,c);m=BE(l);n=MP(XL(c,m),f);o=n<=G0(l)&&n!==0.0?0:1;if(o){p=BB(m,d);q=p>0.0?B8(p,k.N):U(0.0,0.0,0.0);r=BB(m,BE(e));s=r<=0.0?U(0.0,0.0,0.0):B8(De(r,b.m.bU),k.N);g=Cm(g,Cm(E3(b.m.bW.f(c),q),E3(b.m.bJ.f(c),s)));}j=j+1|0;}return g;}
function SZ(b,c,d,e,f){return BE(C5(d.dC,C5(Bk(U5(b,e),d.c0),Bk(PU(c,f),d.c1))));}
function U5(b,c){var d;d=c;return (b-d/2.0)/(2.0*d);}
function PU(b,c){var d;d=c;return  -(b-d/2.0)/(2.0*d);}
function U3(b){return b.b4;}
var FB=C(0);
var GC=C(Ci);
function VX(){var a=new GC();Sr(a);return a;}
function Sr(a){D4(a);}
function TX(a){return a;}
function R4(a,b){return Gh(a,b);}
function PH(a,b){H0(a,b);}
function T5(a,b,c){return Iz(a,b,c);}
var Et=C(0);
var Eh=C(0);
function JT(){var a=this;B.call(a);a.dh=null;a.ct=null;}
function We(a){var b=new JT();Q5(b,a);return b;}
function Q5(a,b){var c;E(a);a.ct=b;c=a;b.classObject=c;}
function G3(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=We(b);return c;}
function LO(a){var b,c;b=Dj(a);c=L();O(K(c,D(76)),b);return N(c);}
function Ob(a){return a.ct;}
function Uq(a){if(a.dh===null)a.dh=Qx(a.ct);return a.dh;}
function L9(a){return G3(TL(a.ct));}
var Lc=C(Bo);
function Ce(){Ba.call(this);this.cU=0.0;}
var Z2=0.0;var Z3=null;function I1(){I1=M(Ce);OD();}
function XD(a){var b=new Ce();EG(b,a);return b;}
function V0(a){var b=new Ce();JD(b,a);return b;}
function EG(a,b){I1();Cc(a);a.cU=b;}
function JD(a,b){I1();EG(a,b);}
function Lj(b){I1();return XD(b);}
function Ne(a,b){if(a===b)return 1;return b instanceof Ce&&b.cU===a.cU?1:0;}
function OD(){Z2=$rt_globals.NaN;Z3=F($rt_floatcls());}
var Ec=C(0);
var Hf=C();
function NN(b,c){var d,e,f,g;d=b.data;e=BH(c);f=BG(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Tp(b,c){var d,e,f,g;d=b.data;e=H2((EL(b)).gf(),c);f=BG(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function QK(b,c){var d,e,f,g,h,i,j,k,l,m;d=b.data.length;if(!d)return;e=X(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data.length;if(h>=i)break;j=BG(i,h+f|0);k=h+(2*f|0)|0;l=BG(i,k);TY(g,e,h,j,l,c);h=k;}f=f*2|0;m=g;g=e;e=m;}a:{if(g!==b){h=0;while(true){m=g.data;if(h>=m.length)break a;e.data[h]=m[h];h=h+1|0;}}}}
function TY(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;h=d;i=e;a:{b:{while(d!=e){if(i==f)break b;j=b.data;k=j[d];l=j[i];if(g.fL(k,l)>0){j=c.data;m=h+1|0;j[h]=l;i=i+1|0;}else{j=c.data;m=h+1|0;j[h]=k;d=d+1|0;}h=m;}while(true){if(i>=f)break a;n=c.data;j=b.data;m=h+1|0;o=i+1|0;n[h]=j[i];h=m;i=o;}}while(true){if(d>=e)break a;n=c.data;j=b.data;o=h+1|0;m=d+1|0;n[h]=j[d];h=o;d=m;}}}
function Nj(b,c){return Oc(b,0,b.data.length,c);}
function Oc(b,c,d,e){var f,g,h,i,j;f=CN(c,d);if(f>0)G(HL());if(!f)return (-1);g=d-1|0;while(true){h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>g)return ( -i|0)-2|0;}else{g=i-1|0;if(g<c)return ( -i|0)-1|0;}}return i;}
function M5(b){QZ(b);return Vt(b);}
function Lr(){D6.call(this);this.dO=null;}
function V_(){var a=new Lr();OO(a);return a;}
function Xj(a){var b=new Lr();P3(b,a);return b;}
function OO(a){Iv(a);}
function P3(a,b){G9(a,b);}
function SH(a){return a.dO;}
function RI(a,b){a.dO=b;}
function Re(a){return a.dO;}
function Rx(a,b){return b;}
function S8(a){return a.i_();}
var ER=C();
var Z4=null;function HM(){var b;if(Z4===null){b=new Fr;TO();J_(b,Ze,0);Z4=b;}return Z4;}
function I7(){return Long_fromNumber(new Date().getTime());}
var J$=C(Cx);
function X9(a){var b=new J$();SS(b,a);return b;}
function SS(a,b){Em(a,b);}
function Tx(a){FI(a);return a.dt.bb;}
var Le=C();
function U6(){var a=new Le();PK(a);return a;}
function PK(a){E(a);}
function NC(a,b){return J8(a,b);}
function J8(a,b){return UN(b);}
var IP=C();
function X0(){var a=new IP();Q$(a);return a;}
function Q$(a){E(a);}
var D3=C(BQ);
function H$(a){D8(a);}
var IR=C(D3);
function XT(){var a=new IR();No(a);return a;}
function No(a){H$(a);}
var IO=C();
function VU(){var a=new IO();SW(a);return a;}
function SW(a){E(a);}
var BC=C();
var Z5=null;var Z6=null;var Z7=null;var Z8=null;var Z9=null;var Z$=null;function Bb(){Bb=M(BC);Nn();}
function EF(b){Bb();return (b&64512)!=55296?0:1;}
function EC(b){Bb();return (b&64512)!=56320?0:1;}
function KF(b){Bb();return !EF(b)&&!EC(b)?0:1;}
function Ka(b,c){Bb();return ((b&1023)<<10|c&1023)+65536|0;}
function FX(b){var c;Bb();c=b-65536|0;return (55296|c>>10&1023)&65535;}
function Fv(b){Bb();return (56320|b&1023)&65535;}
function Fp(b){Bb();return Gf(b)&65535;}
function Gf(b){Bb();return F9(Hg(),b);}
function Hg(){Bb();if(Z7===null)Z7=Sz(((Iy()).value!==null?$rt_str((Iy()).value):null));return Z7;}
function Iy(){Bb();if(Z9===null)Z9=HO();return Z9;}
function F9(b,c){var d,e;Bb();d=Jt(b,c);if(d>=0){e=b.data;if(d<(e.length/2|0))return c+e[(d*2|0)+1|0]|0;}return 0;}
function Jt(b,c){var d,e,f,g,h,i;Bb();d=b.data;e=0;f=(d.length/2|0)-1|0;while(true){g=(e+f|0)/2|0;h=d[g*2|0];i=CN(h,c);if(!i)break;if(i<=0){e=g+1|0;if(e>f)return g;}else{f=g-1|0;if(f<e)return f;}}return g;}
function F2(b){Bb();return H7(b);}
function H7(b){var c,d,e,f,g,h,i,j;Bb();c=Gm();d=c.data;e=0;f=(d.length/2|0)-1|0;while(f>=e){g=(e+f|0)/2|0;h=g*2|0;i=d[h];j=CN(b,i);if(j>0)e=g+1|0;else{if(j>=0)return d[h+1|0];f=g-1|0;}}return (-1);}
function CG(b,c){Bb();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gm(){Bb();if(Z6===null)Z6=TF(((Gb()).value!==null?$rt_str((Gb()).value):null));return Z6;}
function Gb(){Bb();if(Z$===null)Z$=Kq();return Z$;}
function Nn(){Z5=F($rt_charcls());Z8=X(BC,128);}
function HO(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function Kq(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
var DZ=C(BY);
function J9(a){DE(a);}
var IS=C(DZ);
function XP(){var a=new IS();MZ(a);return a;}
function MZ(a){J9(a);}
var IQ=C(DA);
function WD(){var a=new IQ();LP(a);return a;}
function LP(a){JY(a);}
function Hl(){var a=this;B.call(a);a.dv=null;a.c7=null;}
function Wc(a,b){var c=new Hl();TT(c,a,b);return c;}
function TT(a,b,c){a.c7=b;a.dv=c;E(a);}
function TZ(a,b){var c,$$je;a:{try{a.dv.ew(a.c7);}catch($$e){$$je=Z($$e);if($$je instanceof Bq){c=$$je;break a;}else{throw $$e;}}return;}G(c);}
function Ui(a,b){var c,$$je;a:{try{a.dv.ew(a.c7);}catch($$e){$$je=Z($$e);if($$je instanceof Bq){c=$$je;break a;}else{throw $$e;}}return;}G(c);}
function Lb(){B.call(this);this.fE=null;}
function WR(a){var b=new Lb();SQ(b,a);return b;}
function SQ(a,b){E(a);a.fE=b;}
function R$(a){Uk(a.fE);}
var G2=C();
function U4(b){return b;}
function Cs(){B.call(this);this.bt=null;}
function Ek(a,b){E(a);a.bt=b;}
function GQ(a){return a.bt;}
function Ki(a,b){var c,d,e;if(b===null){Bc();return Zo;}a:{c=$rt_str(typeof b);d=(-1);switch(c.b0()){case -1034364087:if(!c.C(D(77)))break a;d=2;break a;case -1023368385:if(!c.C(D(78)))break a;d=0;break a;case -891985903:if(!c.C(D(79)))break a;d=1;break a;case 64711720:if(!c.C(D(80)))break a;d=3;break a;default:}}switch(d){case 0:if(!($rt_globals.Object.prototype.toString.apply(b)==='[object Array]'?1:0)){Bc();e=Zr;}else{Bc();e=Zq;}return e;case 1:break;case 2:Bc();return Y7;case 3:Bc();return Y6;default:Bc();return Zp;}Bc();return Y5;}
function LK(a){return KJ();}
function Gy(a,b){if(!(b instanceof Fs))return IC(b);return b;}
function H_(a,b){if(!(b instanceof FV))return Pr(b);return b;}
function Jc(a,b){U9();switch(Y4.data[Bn(a.cq(b))]){case 1:return Pk(b);case 2:return CY(Ou(b));case 3:return OW(b);default:}return b;}
function JS(a,b){if(b===null)return null;if(b instanceof BV)return $rt_ustr(b);if(b instanceof BO)return !!b.fd();if(b instanceof Ce)return b.jP();if(b instanceof B9)return b.bv();if(b instanceof Ba)return b.M();if(!(b instanceof BC))return b;return $rt_ustr(Iw(b));}
function Hy(a){return a.eg();}
function OW(b){var c;c=U4(b);if(c!==Su(c))return Bv(c);if(TJ(c)<=2.147483647E9)return Bf(c|0);return EA(YG(c));}
function MA(a){return a.fp();}
function Qg(a){return a.f6();}
function PW(a,b){return a.fa(b);}
function Oo(a,b){return a.fZ(b);}
function R6(a,b){return a.fY(b);}
function KJ(){return {};}
function Oe(b){var keys=[];for(var key in b){if($rt_globals.Object.prototype.hasOwnProperty.call(b,key)&&key!='$H'){keys.push(key);}}return keys;}
var Fs=C(Cs);
function XQ(a){var b=new Fs();MI(b,a);return b;}
function IC(b){if(b!==null&&!(typeof b==='undefined'?1:0))return XQ(b);return null;}
function MI(a,b){Ek(a,b);}
function FN(a){return Rq(a.bt);}
function K8(a,b){return (FN(a))[b];}
function RX(a){return (FN(a)).length;}
function Td(a,b){return K8(a,b);}
function IW(){S.call(this);this.i8=null;}
function Wi(a){var b=new IW();Nv(b,a);return b;}
function Nv(a,b){a.i8=b;BI(a);a.N=U(0.75,0.75,0.75);a.V=Q((-4.0),3.0,4.0);a.ba=D(81);}
var Dn=C(Cz);
function F$(a,b,c,d){Fk(a,b);a.z=c;a.X=d;}
function Ua(b,c,d){return V8(0,b.data.length,b,c,c+d|0,0);}
function Nx(a,b,c,d){var e,f,g,h,i,j,k,l;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BD;i=L();O(K(O(K(i,D(82)),g),D(54)),f);Cb(h,N(i));G(h);}if(BZ(a)<d)G(Xz());if(d<0){i=new BD;h=L();K(O(K(h,D(55)),d),D(56));Cb(i,N(h));G(i);}j=a.z;k=0;while(k<d){g=c+1|0;f=j+1|0;e[c]=a.iM(j);k=k+1|0;c=g;j=f;}a.z=a.z+d|0;return a;}}e=b.data;i=new BD;f=e.length;l=L();CM(O(K(O(K(l,D(57)),c),D(40)),f),41);Cb(i,N(l));G(i);}
function LS(a,b){JR(a,b);return a;}
var DR=C(Dn);
function Ii(a,b,c,d){F$(a,b,c,d);}
function KB(){var a=this;DR.call(a);a.iW=0;a.fk=0;a.gd=null;}
function V8(a,b,c,d,e,f){var g=new KB();UL(g,a,b,c,d,e,f);return g;}
function UL(a,b,c,d,e,f,g){Ii(a,c,e,f);a.fk=b;a.iW=g;a.gd=d;}
function NV(a,b){return a.gd.data[b+a.fk|0];}
function I0(){S.call(this);this.ib=null;}
function X$(a){var b=new I0();M3(b,a);return b;}
function M3(a,b){a.ib=b;BI(a);a.N=U(0.75,0.75,0.75);a.V=Q(4.0,3.0,(-4.0));a.ba=D(81);}
function IY(){S.call(this);this.hd=null;}
function XZ(a){var b=new IY();QU(b,a);return b;}
function QU(a,b){a.hd=b;BI(a);a.N=U(0.75,0.75,0.75);a.V=Q((-4.0),3.0,(-4.0));a.ba=D(81);}
var Jz=C();
function S0(b,c,d){var e,f;e=0;while(e<d){f=b.data[e+c|0];$rt_putStdout(f&255);e=e+1|0;}}
function IZ(){S.call(this);this.hK=null;}
function WC(a){var b=new IZ();RB(b,a);return b;}
function RB(a,b){a.hK=b;BI(a);a.N=U(0.75,0.75,0.75);a.V=Q(4.0,3.0,4.0);a.ba=D(81);}
function IU(){Y.call(this);this.gl=null;}
function Ye(a){var b=new IU();R0(b,a);return b;}
function R0(a,b){a.gl=b;BL(a);BF();a.m=ZX;a.O=Q(0.0,1.0,0.0);a.W=1.0;a.R=D(83);}
var Fn=C();
var Z_=null;function Kn(){return (DU()).hG();}
function UF(b){return (DU()).b$(b);}
function O9(b){return (DU()).c8(b);}
function Nf(b){return (DU()).be(b);}
function Qc(b){Z_=b;}
function DU(){var b;if(Z_===null){b=XN();DK();Qc(Fy(F(CX),b,AAa));if(Z_===null){(HM()).e_(D(84));Z_=V_();}}return Z_;}
function Rm(){return GO(F(CX));}
var JA=C();
function Ou(b){return b?1:0;}
var BR=C();
var AAb=null;var AAc=null;var AAd=null;var AAe=null;var AAf=null;var AAg=null;function F0(){F0=M(BR);Qa();}
function JF(b){F0();return b instanceof Ba;}
function LB(b){F0();return b===null?null:b instanceof Cw?b:!(b instanceof Ba)?null:Bf(b.M());}
function Jw(b){var c,$$je;F0();if(b===null)return null;a:{try{c=Bf(Fa(b));}catch($$e){$$je=Z($$e);if($$je instanceof B6){break a;}else{throw $$e;}}return c;}return null;}
function En(b){var c;F0();c=LB(b);if(c===null&&b!==null)return Jw(b.d());return c;}
function Qa(){AAb=K9(0);AAc=Gj(0);AAd=Bf(0);AAe=EA(BK);AAf=Lj(0.0);AAg=Bv(0.0);}
var Gp=C(BP);
function Ws(){var a=new Gp();Q_(a);return a;}
function Q_(a){var b,c;DJ(a);b=X(BJ,7);c=b.data;Bp();c[0]=AAh;c[1]=WK(a);c[2]=VP(a);c[3]=Vd(a);c[4]=V3(a);c[5]=WW(a);c[6]=Vs(a);a.cc=b;a.ck=C7(S,[XH(a),W0(a),XA(a)]);a.bx=I9(Q(0.0,1.0,0.0),Q(5.0,5.0,5.0));}
var Go=C(BP);
function Yh(){var a=new Go();O8(a);return a;}
function O8(a){var b,c;DJ(a);b=X(BJ,2);c=b.data;c[0]=Ye(a);Bp();c[1]=AAh;a.cc=b;a.ck=C7(S,[WC(a),X$(a),Wi(a),XZ(a)]);a.bx=F3(Q(0.0,1.0,0.0),Q(3.0,3.0,3.0),600.0,450.0);}
function B9(){Ba.call(this);this.Z=0.0;}
var AAi=0.0;var AAj=null;function Fq(){Fq=M(B9);Ps();}
function PG(a){var b=new B9();J7(b,a);return b;}
function J7(a,b){Fq();Cc(a);a.Z=b;}
function UG(a){return a.Z;}
function Pu(a){return a.Z|0;}
function Bv(b){Fq();return PG(b);}
function Gt(b){Fq();return ((L()).hS(b)).d();}
function NA(a){return Gt(a.Z);}
function U1(a,b){if(a===b)return 1;return b instanceof B9&&b.Z===a.Z?1:0;}
function Lw(b,c){Fq();return CN(b,c);}
function Nl(a){return $rt_globals.isNaN(a.Z)?1:0;}
function O5(a){return !$rt_globals.isFinite(a.Z)?1:0;}
function Ps(){AAi=$rt_globals.NaN;AAj=F($rt_doublecls());}
var Gn=C(BP);
function Ww(){var a=new Gn();Tf(a);return a;}
function Tf(a){var b,c;DJ(a);b=X(BJ,1);c=b.data;Bp();c[0]=AAh;a.cc=b;b=X(S,1);b.data[0]=Xa(a);a.ck=b;a.bx=F3(Q(0.0,1.0,0.0),Q(3.0,3.0,3.0),600.0,450.0);}
function D_(){var a=this;BJ.call(a);a.eO=0.0;a.cw=null;}
function AAk(){var a=new D_();F7(a);return a;}
function F7(a){FH(a);}
function Qy(a,b){return a.cw;}
function Tb(a,b){var c,d;c=BB(a.cw,b.bd);if(c>0.0)return null;d=(a.eO+BB(a.cw,b.br))/ -c;return Vg(a,a,b,d);}
var Gr=C(D_);
function Wp(){var a=new Gr();Ta(a);return a;}
function Ta(a){F7(a);BF();a.m=AAl;a.cw=Q(0.0,1.0,0.0);a.eO=0.0;a.R=D(85);}
var Gq=C(Y);
function X7(){var a=new Gq();Pt(a);return a;}
function Pt(a){BL(a);BF();a.m=AAl;a.O=Q(0.0,(-10000.0),0.0);a.W=1.0E-7;a.R=D(85);}
function J5(){var a=this;Bz.call(a);a.eG=null;a.fP=null;}
function XF(a,b){var c=new J5();Uw(c,a,b);return c;}
function Uw(a,b,c){a.eG=b;a.fP=c;C4(a);a.br=a.eG;a.bd=a.fP;}
function J2(){var a=this;Bz.call(a);a.eR=null;a.eT=null;}
function WG(a,b){var c=new J2();UX(c,a,b);return c;}
function UX(a,b,c){a.eR=b;a.eT=c;C4(a);a.br=a.eR;a.bd=a.eT;}
function K6(){BY.call(this);this.dg=null;}
function Vw(a){var b=new K6();PO(b,a);return b;}
function PO(a,b){a.dg=b;DE(a);}
function Tt(a){return a.dg.q();}
function Tc(a){return X9(a.dg);}
function J4(){var a=this;Bz.call(a);a.f0=null;a.ei=null;}
function XL(a,b){var c=new J4();UV(c,a,b);return c;}
function UV(a,b,c){a.f0=b;a.ei=c;C4(a);a.br=a.f0;a.bd=a.ei;}
var CO=C(0);
function Uh(a,b,c){return (a.hF(b)).h4(Xc(c));}
function RK(b,c){return c.gY(b);}
var EO=C();
var AAm=null;function AAn(){var a=new EO();UZ(a);return a;}
function UZ(a){E(a);}
function Ux(a){if(AAm===null)AAm=CY(NT()?1:0);return AAm.fd();}
function NE(a,b){var c,d;c=HU();d=Xb(c);SG($rt_ustr(b),CL(d,"handle"));return c.gc();}
function Ms(b,c){b.bi(X6(c));}
function NT(){{try {if(typeof $rt_globals.WebAssembly==="object"&&typeof $rt_globals.WebAssembly.instantiate==="function"){const module=new $rt_globals.WebAssembly.Module($rt_globals.Uint8Array.of(0x0,0x61,0x73,0x6d,0x01,0x00,0x00,0x00));if(module instanceof $rt_globals.WebAssembly.Module)return new $rt_globals.WebAssembly.Instance(module) instanceof $rt_globals.WebAssembly.Instance;}}catch(e){}return false;}}
function SG(b,c){(($rt_globals.fetch(b)).then(function(response){return $rt_globals.WebAssembly.compileStreaming(response);})).then(function(module){return c(module);});}
var Fw=C();
var J1=C(P);
function Qb(){var a=new J1();LR(a);return a;}
function LR(a){Bm(a);}
function Jm(){B.call(this);this.el=null;}
function Xc(a){var b=new Jm();SX(b,a);return b;}
function SX(a,b){E(a);a.el=b;}
function QI(a,b){return H1(a,b);}
function H1(a,b){return RK(a.el,b);}
function Bs(){var a=this;B.call(a);a.bJ=null;a.bN=null;a.bW=null;a.bg=null;a.by=0.0;a.bU=0.0;a.cA=null;}
function AAo(){var a=new Bs();C8(a);return a;}
function C8(a){E(a);}
var Kh=C(Bs);
function Vr(){var a=new Kh();O_(a);return a;}
function O_(a){C8(a);a.cA=D(85);a.bg=Vv();a.bN=VE();a.bW=VO();a.bJ=W_();a.bU=15.0;a.by=0.0;}
function T8(b){return U(0.5,0.5,0.5);}
function Nt(b){return U(0.25,0.25,0.25);}
function LU(b){return Bv(0.65);}
function S2(b){return Bv(0.0);}
var Ke=C(Bs);
function U8(){var a=new Ke();QV(a);return a;}
function QV(a){C8(a);a.cA=D(86);a.bg=XS();a.bN=WB();a.bW=XO();a.bJ=U6();a.bU=0.0;a.by=0.1;}
function UN(b){return U(0.25,0.25,0.25);}
function OZ(b){return U(0.25,0.25,0.25);}
function Nb(b){return Bv(0.25);}
function P5(b){return Bv(0.0);}
var JH=C(Bs);
function W2(){var a=new JH();L7(a);return a;}
function L7(a){C8(a);a.cA=D(87);a.bg=WT();a.bN=W7();a.bW=Vy();a.bJ=VA();a.bU=100.0;a.by=0.95;}
function M8(b){return U(0.5,0.5,0.5);}
function TS(b){return U(0.0,0.0,0.0);}
function RU(b){return Bv(0.0);}
function Q2(b){return Bv(1.0);}
var Kf=C(Bs);
function Xk(){var a=new Kf();TC(a);return a;}
function TC(a){C8(a);a.cA=D(88);a.bg=VZ();a.bN=XM();a.bW=WE();a.bJ=Yf();a.bU=25.0;a.by=0.1;}
function MX(b){return U(0.75,0.75,0.75);}
function NO(b){return U(1.0,1.0,1.0);}
function ND(b){return Bv(1.0);}
function Q1(b){return Bv(0.0);}
var FV=C(Cs);
function AAp(){var a=new FV();N2(a);return a;}
function WZ(a){var b=new FV();K3(b,a);return b;}
function Pr(b){if(b!==null&&!(typeof b==='undefined'?1:0))return WZ(b);return null;}
function N2(a){K3(a,KJ());}
function K3(a,b){Ek(a,b);}
function Km(a,b){return a.bt[$rt_ustr(b)]||null;}
function GA(a){return IC(Oe(a.bt));}
function Lo(a,b,c){a.bt[$rt_ustr(b)]=c;return a;}
function T2(a){return Hy(a);}
function Py(a,b){return JS(a,b);}
function OE(a,b){return Jc(a,b);}
function Mf(a,b){return H_(a,b);}
function TG(a,b){return Gy(a,b);}
function Mo(a){return LK(a);}
function UH(a,b){return Ki(a,b);}
function PJ(a){return GQ(a);}
function U2(a,b,c){return Lo(a,b,c);}
function T1(a,b){return Km(a,b);}
function Pg(a){return GA(a);}
function BV(){var a=this;B.call(a);a.h=null;a.ca=0;}
var AAq=null;function LA(){LA=M(BV);R3();}
function Vb(a){var b=new BV();GM(b,a);return b;}
function Pe(a,b,c){var d=new BV();LM(d,a,b,c);return d;}
function GM(a,b){var c,d,e;LA();c=b.data;E(a);d=c.length;a.h=BH(d);e=0;while(e<d){a.h.data[e]=c[e];e=e+1|0;}}
function LM(a,b,c,d){var e,f;LA();E(a);a.h=BH(d);e=0;while(e<d){f=b.data;a.h.data[e]=f[e+c|0];e=e+1|0;}}
function NZ(a,b){if(b>=0&&b<a.h.data.length)return a.h.data[b];G(Pp());}
function RA(a){return a.h.data.length;}
function TU(a){return a.h.data.length?0:1;}
function SA(a,b){var c,d,e,f,g;if(a===b)return 0;c=BG(a.c(),b.c());d=0;while(true){if(d>=c)return a.c()-b.c()|0;e=a.n(d);f=b.n(d);g=e-f|0;if(g)break;d=d+1|0;}return g;}
function QH(a,b){var c,d,e,f;if(a===b)return 1;if(b.c()>a.c())return 0;c=0;d=a.c()-b.c()|0;while(d<a.c()){e=a.n(d);f=c+1|0;if(e!=b.n(c))return 0;d=d+1|0;c=f;}return 1;}
function NH(a,b,c){var d,e,f,g;d=Cd(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.h.data.length)return (-1);if(a.h.data[d]==e)break;d=d+1|0;}return d;}f=FX(b);g=Fv(b);while(true){if(d>=(a.h.data.length-1|0))return (-1);if(a.h.data[d]==f&&a.h.data[d+1|0]==g)break;d=d+1|0;}return d;}
function QG(a,b){return a.eh(b,0);}
function N4(a,b,c){var d,e,f,g,h,i;d=BG(c,a.c()-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.h.data[d]==e)break;d=d+(-1)|0;}return d;}f=FX(b);g=Fv(b);while(true){if(d<1)return (-1);if(a.h.data[d]==g){h=a.h.data;i=d-1|0;if(h[i]==f)break;}d=d+(-1)|0;}return i;}
function Te(a,b){return a.iU(b,a.c()-1|0);}
function MG(a,b,c){if(b>c)G(G8());return Pe(a.h,b,c-b|0);}
function To(a,b){return a.bL(b,a.c());}
function OU(a){return a;}
function T3(a){var b,c,d;b=BH(a.h.data.length);c=0;while(true){d=b.data;if(c>=d.length)break;d[c]=a.h.data[c];c=c+1|0;}return b;}
function Iw(b){LA();return b===null?D(3):b.d();}
function SB(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BV))return 0;c=b;if(c.c()!=a.c())return 0;d=0;while(d<c.c()){if(a.n(d)!=c.n(d))return 0;d=d+1|0;}return 1;}
function SU(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(a.c()!=b.c())return 0;c=0;while(c<a.c()){if(Fp(a.n(c))!=Fp(b.n(c)))return 0;c=c+1|0;}return 1;}
function NS(a){var b,c,d,e;a:{if(!a.ca){b=a.h.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.ca=(31*a.ca|0)+e|0;d=d+1|0;}}}return a.ca;}
function Ri(a,b){return a.hX(b);}
function R3(){AAq=Xr();}
var LN=C(P);
function Xl(){var a=new LN();Oj(a);return a;}
function Oj(a){Bm(a);}
function Ea(){var a=this;Df.call(a);a.fj=null;a.ez=null;}
function H6(a,b,c,d){JZ(a,b,c,d);a.fj=BH(512);a.ez=CZ(512);}
function N6(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.fj;e=0;f=0;g=a.ez;a:{while(true){if((e+32|0)>f&&Ca(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=BG(BZ(b)+j|0,i.length);b.iH(d,j,f-j|0);e=0;}if(!Ca(c)){if(!Ca(b)&&e>=f){Bt();k=ZG;}else{Bt();k=ZF;}break a;}i=g.data;l=0;m=BG(BZ(c),i.length);n=VT(b,c);k=a.gQ(d,e,f,g,l,m,n);e=n.fc;j=n.fQ;if(k===null){if(!Ca(b)&&e>=f){Bt();k=ZG;}else if(!Ca(c)&&e>=f){Bt();k=ZF;}}c.ff(g,0,j);if(k!==null)break;}}b.eE(CS(b)-(f-e|0)|0);return k;}
var IH=C(Ea);
function WN(a){var b=new IH();QJ(b,a);return b;}
function QJ(a,b){H6(a,b,2.0,4.0);}
function Uu(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.dQ(2))break a;Bt();i=ZF;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!KF(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.dQ(3))break a;Bt();i=ZF;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if(!EF(l))
{i=Ds(1);break a;}if(j>=d){if(h.ik())break a;Bt();i=ZG;break a;}n=j+1|0;p=k[j];if(!EC(p)){j=n+(-2)|0;i=Ds(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.dQ(4))break a;Bt();i=ZF;break a;}k=e.data;q=Ka(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.iP(j);h.gB(f);return i;}
var Fl=C(0);
function Ip(){B.call(this);this.eW=null;}
function V1(a){var b=new Ip();Nq(b,a);return b;}
function Nq(a,b){E(a);a.eW=b;}
function Nk(a,b){HE(a,b);}
function HE(a,b){Sh(a.eW,b);}
function M6(a,b){a.io(b);}
var BA=C();
var ZY=0;var ZV=0;var AAh=null;var AAr=null;var AAs=null;var AAt=null;var AAu=null;var AAv=null;function Bp(){Bp=M(BA);Qo();}
function Qo(){var b,c;ZY=0;ZV=0;b=X(Bs,4);c=b.data;BF();c[0]=AAw;c[1]=AAl;c[2]=ZX;c[3]=ZZ;AAx=b;AAh=Wp();AAu=X7();AAr=Ws();AAs=Yh();AAt=Ww();b=X(BP,1);b.data[0]=AAr;AAv=b;}
var B6=C(B$);
function X_(){var a=new B6();NK(a);return a;}
function Ve(a){var b=new B6();Dc(b,a);return b;}
function NK(a){ES(a);}
function Dc(a,b){FY(a,b);}
function Hi(){S.call(this);this.hW=null;}
function Xa(a){var b=new Hi();Pi(b,a);return b;}
function Pi(a,b){a.hW=b;BI(a);a.N=U(1.0,1.0,1.0);a.V=Q(0.0,1.0,0.0);a.ba=D(81);}
var GX=C();
function Wu(){var a=new GX();Rt(a);return a;}
function Rt(a){E(a);}
var GY=C();
function X4(){var a=new GY();Qq(a);return a;}
function Qq(a){E(a);}
function MF(a,b,c){return Ks(b,c);}
var FQ=C(Do);
var ZT=null;function Rk(){Rk=M(FQ);QP();}
function Xp(){var a=new FQ();KG(a);return a;}
function KG(a){Rk();H4(a,D(89),X(BV,0));}
function Tj(a){return WN(a);}
function QP(){ZT=Xp();}
var CR=C();
var AAy=0;var AAz=0;var AAA=null;function T4(b,c){var d;d=3*b|0;if(c!==null&&c.data.length==d)return c;return CZ(d);}
function NR(b,c,d,e){var f,g,h,i,j,k,l;AAy=b;AAz=c;Bp();AAA=AAv.data[d];f=e*0.005;g=0.55+f*6.0*2.0*3.141592653589793;h=1.55;i=2.55;j=f-0.2;if(j>0.0){h=h+20.0*Kl(1.0,j);i=i+20.0*JE(Kl(1.0,j)*3.141592653589793/2.0);}k=i*NB(g);l=i*JE(g);AAA.bx=I9(Q(0.0,1.0,0.0),Q(k,h,l));}
function St(b,c){var d,e;d=0;e=0;while(e<AAy){d=Nc(e,b,c,d);e=e+1|0;}}
function Nc(b,c,d,e){var f,g,h,i;f=d.data;g=SP(b,c,AAA,AAy,AAz);h=e+1|0;f[e]=(g.cW(g.bn)*255.0+(-128.0)|0)<<24>>24;i=h+1|0;f[h]=(g.cW(g.bk)*255.0+(-128.0)|0)<<24>>24;h=i+1|0;f[i]=(g.cW(g.bl)*255.0+(-128.0)|0)<<24>>24;return h;}
var Ly=C();
function Vm(){var a=new Ly();Of(a);return a;}
function Of(a){E(a);}
function UT(b){HY(b,Vm());b.i5();}
function NF(a,b){if(!(b instanceof BV))$rt_globals.self.postMessage(b);else $rt_globals.self.postMessage($rt_ustr(b));}
function RT(a,b){var c,d,e,f,g;c=b.data;d=c.length;e=new $rt_globals.Array();f=0;while(f<d){g=c[f];e[f]=g;f=f+1|0;}return e;}
function PX(a,b){$rt_globals.self.onmessage=CL(V1(b),"handleEvent");}
function Sh(b,c){b.g8(c.data);}
function Fm(){var a=this;B.call(a);a.bn=0.0;a.bk=0.0;a.bl=0.0;}
var Z1=null;function Cu(){Cu=M(Fm);QS();}
function ED(a,b,c){var d=new Fm();Ix(d,a,b,c);return d;}
function Ix(a,b,c,d){Cu();E(a);a.bn=b;a.bk=c;a.bl=d;}
function U(b,c,d){Cu();return ED(b,c,d);}
function B8(b,c){Cu();return ED(b*c.bn,b*c.bk,b*c.bl);}
function E3(b,c){Cu();return ED(b.bn*c.bn,b.bk*c.bk,b.bl*c.bl);}
function Cm(b,c){Cu();return ED(b.bn+c.bn,b.bk+c.bk,b.bl+c.bl);}
function TN(a,b){if(b<0.0)b=0.0;else if(b>1.0)b=1.0;return b;}
function QS(){Z1=U(0.0,0.0,0.0);}
var GL=C(P);
function Ok(){var a=new GL();QM(a);return a;}
function JX(a){var b=new GL();N_(b,a);return b;}
function QM(a){Bm(a);}
function N_(a,b){C9(a,b);}
var Gg=C(P);
function Wm(a){var b=new Gg();Q0(b,a);return b;}
function V6(){var a=new Gg();Pm(a);return a;}
function Q0(a,b){C9(a,b);}
function Pm(a){Bm(a);}
function Kr(){B.call(this);this.dU=null;}
function Xn(a){var b=new Kr();S9(b,a);return b;}
function S9(a,b){E(a);a.dU=b;}
function Yb(b){return Xn(b);}
function Uf(a,b){a.dU.bi(b);}
function TP(a,b){a.dU.hj(b);}
function CF(){var a=this;B.call(a);a.hg=null;a.e0=0;}
function Fz(a,b,c){E(a);a.hg=b;a.e0=c;}
function Bn(a){return a.e0;}
function B_(){var a=this;B.call(a);a.H=null;a.b4=0.0;a.bM=null;}
function AAB(){var a=new B_();Fj(a);return a;}
function Fj(a){E(a);}
function II(){var a=this;B_.call(a);a.eB=null;a.er=null;a.fs=0.0;a.im=null;}
function Vg(a,b,c,d){var e=new II();UQ(e,a,b,c,d);return e;}
function UQ(a,b,c,d,e){a.im=b;a.eB=c;a.er=d;a.fs=e;Fj(a);a.H=a.eB;a.bM=a.er;a.b4=a.fs;}
function Id(){var a=this;B.call(a);a.L=null;a.eq=null;a.t=null;a.w=0;}
function XI(){var a=new Id();UK(a);return a;}
function UK(a){E(a);a.t=By();}
var Ky=C();
function JE(b){return Math.sin(b);}
function NB(b){return Math.cos(b);}
function FO(b){return Math.sqrt(b);}
function Su(b){return Math.floor(b);}
function De(b,c){return Me(b,c);}
function Me(b,c){return Math.pow(b,c);}
function BG(b,c){if(b<c)c=b;return c;}
function Cd(b,c){if(b>c)c=b;return c;}
function Kl(b,c){if(b<c)c=b;return c;}
function TJ(b){if(b<=0.0)b= -b;return b;}
function EB(){Ba.call(this);this.h5=0;}
var AAC=null;function S4(){S4=M(EB);Na();}
function Yd(a){var b=new EB();Jb(b,a);return b;}
function Jb(a,b){S4();Cc(a);a.h5=b;}
function K9(b){S4();return Yd(b);}
function Na(){AAC=F($rt_bytecls());}
function Ft(){var a=this;B.call(a);a.ha=null;a.gj=null;}
var AAD=null;function EY(){EY=M(Ft);NW();}
function Xf(a){var b=new Ft();GP(b,a);return b;}
function GP(a,b){EY();E(a);a.ha=b;}
function Lp(){EY();return Dl(D(90));}
function Dl(b){var c,d,e;EY();c=AAD.cK(b);if(c===null){c=Xf(b);d=b.iK(46);if(d>=0){e=b.bL(0,d);c.gj=Dl(e);}else if(!b.cg())c.gj=Dl(D(50));AAD.bm(b,c);}return c;}
function MW(a,b){var c;c=Jg(a,b.cS(),b.gm());if(Db(b.fJ())>=Db(ZI))JJ($rt_ustr(c));else if(Db(b.fJ())<Db(Zl))F_($rt_ustr(c));else Js($rt_ustr(c));}
function Jg(a,b,c){var d,e,f,g,h,i,j;if(c===null)return b;d=L();e=0;a:{while(true){if(e>=b.c())break a;f=b.eh(123,e);if(f<0)break a;g=f+1|0;h=Hr(g,b);if(h<0)break;if(b.n(h)!=125){d.fq(b,e,h);e=h;continue;}i=c.data;j=Fa(b.bL(g,h));if(j>=i.length){d.fq(b,e,h);e=h;continue;}d.T(i[j]);e=h+1|0;}}return d.d();}
function Hr(b,c){var d,e;EY();while(true){if(b>=c.c())return (-1);d=b+1|0;e=c.n(b);if(e<=48)break;if(e>=57)break;b=d;}return d;}
function Th(a,b,c){a.g9(XC(b,c));}
function NW(){AAD=US();}
function F_(b){if($rt_globals.console){$rt_globals.console.info(b);}}
function Js(b){if($rt_globals.console){$rt_globals.console.warn(b);}}
function JJ(b){if($rt_globals.console){$rt_globals.console.error(b);}}
function El(){var a=this;B.call(a);a.fw=null;a.e9=null;a.gE=BK;a.g_=null;a.iZ=BK;a.hq=BK;}
var AAE=BK;function XC(a,b){var c=new El();TK(c,a,b);return c;}
function TK(a,b,c){var d;E(a);a.fw=b;a.e9=c;a.gE=I7();d=AAE;AAE=W(d,H(1));a.iZ=d;a.hq=(By()).hb();}
function O1(a){return a.fw;}
function PM(a){return a.e9;}
function Pj(a){return a.g_;}
function F6(){B.call(this);this.dm=null;}
function Wv(a){var b=new F6();L5(b,a);return b;}
function L5(a,b){a.dm=b;E(a);}
function TB(a,b){a.dm.dx(b);}
function Qv(a,b){a.dm.cL(b);}
var Cg=C();
var AAx=null;var AAw=null;var AAl=null;var ZX=null;var ZZ=null;function BF(){BF=M(Cg);Om();}
function Om(){AAw=U8();AAl=Vr();ZX=Xk();ZZ=W2();}
var JK=C(Bq);
function R7(a){var b=new JK();OV(b,a);return b;}
function OV(a,b){HW(a,b,null,0,0);}
function HG(){D2.call(this);this.eJ=null;}
function Vp(a){var b=new HG();Se(b,a);return b;}
function Se(a,b){Is(a,b);}
function Rd(a){return a.eJ;}
function Rc(a,b){a.eJ=b;}
var Ij=C();
function Wq(){var a=new Ij();L2(a);return a;}
function L2(a){E(a);}
function Os(a,b){return I2(a,b);}
function I2(a,b){return QE(b);}
function JB(){var a=this;Cp.call(a);a.eS=null;a.ec=null;a.eu=null;a.eV=null;}
function Wt(a,b,c,d){var e=new JB();UJ(e,a,b,c,d);return e;}
function UJ(a,b,c,d,e){a.eS=b;a.ec=c;a.eu=d;a.eV=e;FS(a);a.dK=a.eS;a.dC=a.ec;a.c1=a.eu;a.c0=a.eV;}
var Kj=C(P);
function Wb(){var a=new Kj();RC(a);return a;}
function RC(a){Bm(a);}
var Jy=C();
function Po(b){var c,d,e,f;c=b.data;d=c.length;e=0;while(true){if(e>=d)return null;f=c[e];if(f!==null)break;e=e+1|0;}return f;}
function JC(){var a=this;Cp.call(a);a.fu=null;a.d9=null;a.fv=null;a.es=null;}
function WI(a,b,c,d){var e=new JC();S3(e,a,b,c,d);return e;}
function S3(a,b,c,d,e){a.fu=b;a.d9=c;a.fv=d;a.es=e;FS(a);a.dK=a.fu;a.dC=a.d9;a.c1=a.fv;a.c0=a.es;}
var HV=C();
function Sn(b){if(!(b instanceof BO))return null;return b;}
function PV(b){if(b===null)return null;if(b.em(D(73)))return CY(1);if(!b.em(D(72)))return null;return CY(0);}
function Ts(b){var c;c=Sn(b);if(c===null&&b!==null)return PV(b.d());return c;}
var K4=C(DY);
function Wx(a,b){var c=new K4();Nu(c,a,b);return c;}
function Nu(a,b,c){K$(a,b,c);}
function RQ(a,b){var c,d,e,f,g;c=CZ(b);d=0;while(d<b){e=c.data;f=a.e3;g=a.dd;a.dd=g+1|0;e[d]=f[g];d=d+1|0;}return c;}
function DT(){var a=this;B.call(a);a.b5=0;a.eD=0;}
var ZG=null;var ZF=null;function Bt(){Bt=M(DT);Qw();}
function Hx(a,b){var c=new DT();Im(c,a,b);return c;}
function Im(a,b,c){Bt();E(a);a.b5=b;a.eD=c;}
function MU(a){return a.b5?0:1;}
function Sd(a){return a.b5!=1?0:1;}
function Ut(a){return !a.h8()&&!a.fK()?0:1;}
function Sk(a){return a.b5!=2?0:1;}
function Sw(a){return a.b5!=3?0:1;}
function Q6(a){if(a.iu())return a.eD;G(W9());}
function Ds(b){Bt();return Hx(2,b);}
function Qw(){ZG=Hx(0,0);ZF=Hx(1,0);}
var DD=C();
var AAF=null;var AAG=null;function Ev(){Ev=M(DD);So();}
function KL(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;Ev();d=$rt_doubleToLongBits(b);c.ej=C1(Bl(d,T(0, 2147483648)),BK)?0:1;e=Bl(d,T(4294967295, 1048575));f=DS(Da(d,52))&2047;if(C1(e,BK)&&!f){c.cR=BK;c.c4=0;return;}g=0;if(f)h=WS(e,T(0, 1048576));else{h=Cf(e,1);while(C1(Bl(h,T(0, 1048576)),BK)){h=Cf(h,1);f=f+(-1)|0;g=g+1|0;}}i=Nj(AAG,f);if(i<0)i=( -i|0)-2|0;j=f-AAG.data[i]|0;k=12+j|0;l=FG(h,AAF.data[i],k);if(IT(l,T(2808348672, 232830643))){i=i+1|0;m=f-AAG.data[i]|0;k=12+m|0;l=FG(h,AAF.data[i],k);}n=B0(AAF.data[i],
(63-k|0)-g|0);o=Da(W(n,H(1)),1);p=Da(n,1);if(C1(h,T(0, 1048576)))p=Da(p,2);q=Kc(l,p);r=Lm(l,o);m=X3(q,r);h=m>0?R(Bg(l,q),q):m<0?W(R(Bg(l,r),r),r):R(Bg(W(l,Bg(r,H(2))),r),r);if(IT(h,T(2808348672, 232830643))){i=i+1|0;h=Bg(h,H(10));}else if(I$(h,T(1569325056, 23283064))){i=i+(-1)|0;h=R(h,H(10));}c.cR=h;c.c4=i-330|0;}
function Kc(b,c){var d,e;Ev();d=H(10);while(C2(d,c)){d=R(d,H(10));}e=Dk(b,d);if(IT(e,Bg(c,H(2))))d=Bg(d,H(10));return d;}
function Lm(b,c){var d,e;Ev();d=H(1);while(C2(d,c)){d=R(d,H(10));}e=Dk(b,d);if(IM(Xv(d,e),Bg(c,H(2))))d=Bg(d,H(10));return d;}
function FG(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;Ev();e=Bl(b,H(65535));f=Bl(B0(b,16),H(65535));g=Bl(B0(b,32),H(65535));h=Bl(B0(b,48),H(65535));i=Bl(c,H(65535));j=Bl(B0(c,16),H(65535));k=Bl(B0(c,32),H(65535));l=Bl(B0(c,48),H(65535));m=W(W(R(k,e),R(j,f)),R(i,g));n=W(W(W(R(l,e),R(k,f)),R(j,g)),R(i,h));o=W(W(R(l,f),R(k,g)),R(j,h));p=W(R(l,g),R(k,h));q=R(l,h);r=W(W(Cf(q,32+d|0),Cf(p,16+d|0)),Cf(o,d));s=d>16?W(r,Cf(n,d-16|0)):W(r,B0(n,16-d|0));s=W(s,B0(m,32-d|0));return s;}
function So(){var b,c,d,e,f,g,h,i,j,k,l;AAF=Xg(660);AAG=DH(660);b=T(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=AAF.data;g=d+330|0;f[g]=DW(e,H(80));AAG.data[g]=c;e=DW(e,H(10));h=GU(e,H(10));while(C2(e,b)&&C1(Bl(e,T(0, 2147483648)),BK)){e=Cf(e,1);c=c+1|0;h=Cf(h,1);}e=W(e,Bg(h,H(10)));d=d+1|0;}i=T(3435973836, 214748364);j=1023;d=0;while(d<330){k=0;e=b;while(IM(e,i)){e=Da(e,1);k=k+1|0;j=j+(-1)|0;}h=R(e,H(10));if(k<=0)b=h;else{l=Bl(b,H((1<<k)-1|0));b=W(h,Da(R(l,H(10)),k));}f=AAF.data;g=(330-d|0)-1|0;f[g]
=DW(b,H(80));AAG.data[g]=j;d=d+1|0;}}
var G5=C();
function HD(b){var c,d,e;c=W5(b.q());d=b.s();while(d.x()){e=d.r();if(Bj(e,B3))c.bw(FL(e));else if(!Bj(e,Cl))c.bw(e);else c.bw(HD(e));}return c;}
function FL(b){var c,d,e,f,g,h;c=VV(b.q());d=(b.f1()).s();while(d.x()){e=d.r();f=e.bP();if(Bj(f,B3)){g=f;c.bm(e.bq(),FL(g));}else if(!Bj(f,Cl))c.bm(e.bq(),f);else{h=f;c.bm(e.bq(),HD(h));}}return c;}
function Ig(){var a=this;B_.call(a);a.f2=null;a.fg=null;a.fe=0.0;a.hz=null;}
function Xi(a,b,c,d){var e=new Ig();OT(e,a,b,c,d);return e;}
function OT(a,b,c,d,e){a.hz=b;a.f2=c;a.fg=d;a.fe=e;Fj(a);a.H=a.f2;a.bM=a.fg;a.b4=a.fe;}
var Ko=C(CH);
var Ge=C();
function Wo(){var a=new Ge();Ns(a);return a;}
function Ns(a){E(a);}
function Tk(a,b){return Hm(a,b);}
function Hm(a,b){return U3(b);}
var Bu=C(CF);
var Y5=null;var Y7=null;var Y6=null;var Zr=null;var Zq=null;var Zo=null;var Zp=null;var AAH=null;function Bc(){Bc=M(Bu);Rp();}
function Cn(a,b){var c=new Bu();Lu(c,a,b);return c;}
function Fb(){Bc();return AAH.dV();}
function Lu(a,b,c){Bc();Fz(a,b,c);}
function F8(){Bc();return C7(Bu,[Y5,Y7,Y6,Zr,Zq,Zo,Zp]);}
function Rp(){Y5=Cn(D(91),0);Y7=Cn(D(92),1);Y6=Cn(D(93),2);Zr=Cn(D(94),3);Zq=Cn(D(95),4);Zo=Cn(D(96),5);Zp=Cn(D(97),6);AAH=F8();}
function La(){var a=this;B.call(a);a.I=null;a.eX=null;a.fx=null;a.e4=null;a.d$=null;a.ed=null;}
function V7(a){var b=new La();Sp(b,a);return b;}
function Sp(a,b){var c;E(a);a.I=b;c=b.exports.memory.buffer;a.eX=new $rt_globals.Int8Array(c);a.fx=new $rt_globals.Int16Array(c);a.e4=new $rt_globals.Int32Array(c);a.d$=new $rt_globals.Float32Array(c);a.ed=new $rt_globals.Float64Array(c);}
function OL(a,b){return Wx(a,b);}
function Mw(a,b,c){return Nf(I3(a,b,c));}
function I3(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=c.data;switch(d.length){case 0:return a.I.exports[$rt_ustr(b)]();case 1:e=a.I;f=I(d[0]);return e.exports[$rt_ustr(b)](f);case 2:e=a.I;f=I(d[0]);g=I(d[1]);return e.exports[$rt_ustr(b)](f,g);case 3:e=a.I;f=I(d[0]);g=I(d[1]);h=I(d[2]);return e.exports[$rt_ustr(b)](f,g,h);case 4:e=a.I;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);return e.exports[$rt_ustr(b)](f,g,h,i);case 5:e=a.I;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);return e.exports[$rt_ustr(b)](f,g,h,i,j);case 6:e
=a.I;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k);case 7:e=a.I;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);l=I(d[6]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l);case 8:e=a.I;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);l=I(d[6]);m=I(d[7]);return e.exports[$rt_ustr(b)](f,g,h,i,j,k,l,m);case 9:e=a.I;f=I(d[0]);g=I(d[1]);h=I(d[2]);i=I(d[3]);j=I(d[4]);k=I(d[5]);l=I(d[6]);m=I(d[7]);n=I(d[8]);return e.exports[$rt_ustr(b)](f,g,
h,i,j,k,l,m,n);default:}return null;}
function I(b){return O9(b);}
function Il(){var a=this;B.call(a);a.eK=null;a.fX=0;}
function P7(a){var b=new Il();P1(b,a);return b;}
function P1(a,b){E(a);a.eK=b;}
var Ik=C(Bo);
function CI(){B.call(this);this.dq=null;}
function V4(a){var b=new CI();PD(b,a);return b;}
function PD(a,b){E(a);a.dq=b;}
var IV=C(Bo);
var JM=C(P);
function Xz(){var a=new JM();SN(a);return a;}
function SN(a){Bm(a);}
var B7=C(CF);
var Zj=null;var AAa=null;var Zk=null;var AAI=null;function DK(){DK=M(B7);Pz();}
function Je(a,b){var c=new B7();KD(c,a,b);return c;}
function KD(a,b,c){DK();Fz(a,b,c);}
function Ia(){DK();return C7(B7,[Zj,AAa,Zk]);}
function Pz(){Zj=Je(D(98),0);AAa=Je(D(99),1);Zk=Je(D(100),2);AAI=Ia();}
var IK=C();
function W6(){var a=new IK();LV(a);return a;}
function LV(a){E(a);}
function K7(){B.call(this);this.fC=null;}
function Xb(a){var b=new K7();O3(b,a);return b;}
function O3(a,b){E(a);a.fC=b;}
function S6(a,b){Ms(a.fC,b);}
function SD(a,b){a.dB(b);}
function GR(){BQ.call(this);this.dN=null;}
function Vt(a){var b=new GR();OX(b,a);return b;}
function OX(a,b){D8(a);a.dN=b;}
function LQ(a,b){return a.dN.data[b];}
function N0(a){return a.dN.data.length;}
var BN=C();
var AAJ=null;var AAK=null;var AAL=null;var AAM=null;var AAN=null;var AAO=null;var AAP=null;function RG(){RG=M(BN);MM();}
function Hs(b,c){var d,e,f;RG();if(c===null)c=AAO;d=X(B,b.q());b.gy(d);QK(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;b.g6(e,f[e]);e=e+1|0;}}
function Ks(b,c){RG();return b!==null?b.gi(c): -c.gi(b)|0;}
function MM(){AAJ=XP();AAK=WD();AAL=XT();AAM=VU();AAN=X0();AAO=X4();AAP=Wu();}
var Gx=C();
function MO(b){return b!==null?b.d():null;}
function Qt(b){return b!==null?b.c():0;}
function Q3(b){return Qt(b)?0:1;}
$rt_packages([-1,"dev",0,"webfx",1,"platform",2,"webassembly",3,"spi",2,"json",5,"spi"]);
$rt_metadata([B,0,0,[],0,3,0,0,["jY",Yo(Cv),"kd",Yo(EL),"b0",Yo(PP),"C",Yp(Mb),"d",Yo(OY),"je",Yo(Dj),"dV",Yo(UE)],Bq,0,B,[],0,3,0,0,["kq",Ys(HW),"cu",Yo(Q9),"cS",Yo(P0),"ki",Yo(P6)],BS,0,Bq,[],0,3,0,0,["a",Yo(EV),"j",Yp(Gi)],P,0,BS,[],0,3,0,0,["a",Yo(Bm),"j",Yp(C9)],BD,0,P,[],0,3,0,0,["a",Yo(HZ),"j",Yp(Cb)],Du,0,B,[],3,3,0,0,["be",Yp(Qi),"gX",Yp(O2),"g0",Yp(R_),"gL",Yp(SM)],FK,0,B,[Du],3,3,0,0,["be",Yp(Qi),"gX",Yp(O2),"g0",Yp(R_),"gL",Yp(SM)],E6,0,B,[Du],3,3,0,0,["be",Yp(Qi),"gX",Yp(O2),"g0",Yp(R_),"gL",Yp(SM),
"eg",Yo(Tr)],CX,"JsonProvider",6,B,[FK,E6],3,3,0,0,["be",Yp(Qi),"gX",Yp(O2),"g0",Yp(R_),"gL",Yp(SM),"eg",Yo(Tr),"hG",Yo(T6)],CT,0,B,[CX],3,3,0,0,["be",Yp(Qi),"gX",Yp(O2),"g0",Yp(R_),"gL",Yp(SM),"eg",Yo(Tr),"hG",Yo(T6)],G$,0,B,[],0,3,0,0,["jh",Yq(Rn),"ik",Yo(Qr),"dQ",Yp(QC),"iP",Yp(Rv),"gB",Yp(U0)],Bw,0,B,[],3,3,0,0,0,Ba,0,B,[Bw],1,3,0,0,["a",Yo(Cc)],Be,0,B,[],3,3,0,0,0,Cw,0,Ba,[Be],0,3,0,BX,["bA",Yp(IN),"M",Yo(NM),"d",Yo(SR)],I8,0,BS,[],0,3,0,0,["a",Yo(Tw)],Dv,0,B,[],3,3,0,0,0,FP,0,B,[Dv],3,3,0,0,["bi",Yp(M7)],B5,
0,B,[],0,0,0,PR,0,Cj,0,B,[CT],3,3,0,0,["be",Yp(Qi),"gX",Yp(O2),"g0",Yp(R_),"gL",Yp(SM),"eg",Yo(Tr),"hG",Yo(T6)],FR,0,Ba,[Be],0,3,0,Jh,["k0",Yp(Jd),"M",Yo(MD),"d",Yo(Rr)],B3,0,B,[],3,3,0,0,0,EI,0,B,[],3,3,0,0,0,B4,0,B,[EI],0,3,0,FJ,["j",Yp(HI),"jn",Yq(E7),"hb",Yo(L1)],Bi,0,B,[],3,3,0,0,0,E2,0,B,[Bi],3,3,0,0,0,JO,0,B,[E2],1,3,0,0,["kr",Yp(Us),"ke",Yo(Pc)],Dg,0,B,[],3,3,0,0,0,HB,0,B,[Dg],0,3,0,0,["a",Yo(QT),"fR",Yo(Oh),"iS",Yo(IB)],FW,0,B,[],32,0,0,U9,0,GE,0,B,[Bi],1,3,0,0,0,Jo,0,B,[Dv],0,3,0,0,["ja",Yp(Qs),"ew",
Yp(RP),"kR",Yp(Jr)],Fi,0,B,[],3,3,0,0,0,Jk,0,B,[Fi],0,3,0,0,["ja",Yp(Uo),"g8",Yp(OC)],BJ,0,B,[],1,3,0,0,["a",Yo(FH)],Fc,0,B,[],3,3,0,0,0,Fo,0,B,[Fc],3,3,0,0,["h4",Yp(QX)],Dm,0,B,[Fo],3,3,0,0,["h4",Yp(QX)],Co,0,B,[Dm],1,0,0,0,["h4",Yp(QX),"a",Yo(E5),"km",Yq(ET),"kb",Yq(DV),"fl",Yq(Iz)],Ci,0,Co,[],0,0,0,Dh,["h4",Yp(QX),"a",Yo(D4),"hR",Yo(Tm),"ic",Yp(N8),"bE",Yp(H0),"dx",Yp(Gh),"cL",Yp(UI),"d",Yo(SK),"iX",Yq(OH)],D1,0,Ci,[],1,0,0,0,["h4",Yp(QX),"a",Yo(Lx)],C_,0,B,[],3,3,0,0,0,CC,0,Bq,[],0,3,0,0,["j",Yp(IL),"cv",
Yp(Hn)],CH,0,CC,[],0,3,0,0,["j",Yp(Gu)],Di,0,B,[],3,3,0,0,["gR",Yq(UP),"i2",Yp(O0),"h$",Yp(Nr),"dT",Yp(SO),"dM",Yq(R2)],CQ,0,B,[Di,CT],3,3,0,0,["gR",Yq(UP),"i2",Yp(O0),"h$",Yp(Nr),"dT",Yp(SO),"dM",Yq(R2),"be",Yp(Qi),"gX",Yp(O2),"g0",Yp(R_),"gL",Yp(SM),"eg",Yo(Tr),"hG",Yo(T6),"kA",Yp(LI),"da",Yp(SL)],E9,0,B,[Di],3,3,0,0,["gR",Yq(UP),"i2",Yp(O0),"h$",Yp(Nr),"dT",Yp(SO),"dM",Yq(R2)],CW,0,B,[CQ,Cj,E9],3,3,0,0,["gR",Yq(UP),"i2",Yp(O0),"h$",Yp(Nr),"dT",Yp(SO),"dM",Yq(R2),"be",Yp(Qi),"gX",Yp(O2),"g0",Yp(R_),"gL",Yp(SM),
"eg",Yo(Tr),"hG",Yo(T6),"kA",Yp(LI),"da",Yp(SL),"i4",Yp(Uz),"iv",Yq(L4)],Ed,0,B,[Bi],3,0,0,0,0,KU,0,BD,[],0,3,0,0,["a",Yo(Rh)]]);
$rt_metadata([D5,0,B,[],4,3,0,TI,0,Kd,0,B,[],4,3,0,0,0,FM,0,B,[],3,3,0,0,0,Ez,0,B,[FM],3,3,0,0,0,EX,0,B,[],3,3,0,0,0,CB,0,B,[Ez,EX],1,3,0,0,["a",Yo(Eb)],DP,0,CB,[],1,3,0,0,["a",Yo(LJ)],EP,0,DP,[],0,3,0,TO,["cl",Yr(T0)],Ff,0,B,[],3,3,0,0,0,Bo,0,B,[Bi],1,3,0,0,0,GT,0,Bo,[],1,3,0,0,0,IA,0,B,[],4,0,0,0,["jx",Yq(KE),"kg",Yo(Kw),"kw",Yo(IX)],CA,0,B,[Bw,C_],0,0,0,0,["a",Yo(EQ),"bA",Yp(Ey),"j",Yp(K5),"kN",Yp(IF),"kD",Yp(KH),"k1",Yp(EK),"cs",Yq(Fe),"kK",Yp(Hu),"ek",Yq(Nw),"gM",Yr(Tl),"j0",Yp(Kp),"eA",Yq(Lz),"ig",Yr(Ml),
"j5",Yp(Jx),"d3",Yq(IJ),"jk",Yp(K_),"fr",Yq(KQ),"e8",Yq(Ji),"bF",Yp(EM),"d",Yo(Ep),"c",Yo(Kg),"kj",Yr(HJ),"d0",Ys(Gw),"eo",Ys(JV),"ef",Yp(JQ)],C6,0,B,[],3,3,0,0,0,Gk,0,CA,[C6],0,3,0,0,["bA",Yp(T7),"a",Yo(TE),"j",Yp(Mv),"T",Yp(K),"v",Yp(Mu),"jt",Yp(O),"iz",Yp(R9),"hS",Yp(PT),"i",Yp(CM),"fq",Yr(S1),"h1",Yq(Rf),"hx",Yq(Tu),"hN",Ys(Nd),"hp",Yq(Ub),"iF",Yq(NL),"hh",Yq(Un),"ef",Yp(Uv),"eo",Ys(QF),"d0",Ys(Ot),"c",Yo(On),"d",Yo(N),"bF",Yp(UB),"e8",Yq(Mz),"fr",Yq(L0),"d3",Yq(Qz),"eA",Yq(Pl),"cs",Yq(UM)],FE,0,B,[],4,
3,0,UR,0,JU,0,P,[],0,3,0,0,["a",Yo(Up)],Hj,0,CC,[],0,3,0,0,["cv",Yp(Mx)],Cr,0,B,[B3],1,3,0,0,["a",Yo(Fd),"d",Yo(Ov)],Ct,0,B,[],3,3,0,0,0,D9,0,Cr,[Ct,Bw],0,3,0,0,["c6",Yp(Sb),"a",Yo(I4),"bA",Yp(Eg),"j3",Yq(KK),"cK",Yp(Sm),"ko",Yp(GJ),"ku",Yr(C3),"kM",Yo(Dd),"bm",Yq(M4),"dF",Yq(RY),"bX",Yr(O7),"hE",Yp(RO),"co",Yo(PA),"ky",Yp(HC),"q",Yo(Pv)],G6,0,D9,[B3],0,3,0,0,["a",Yo(NP),"bA",Yp(Pn),"c6",Yp(OF),"cK",Yp(Mq),"bX",Yr(Uc),"bm",Yq(SF),"dF",Yq(Ud),"dA",Yp(Md),"f1",Yo(RZ),"jb",Yo(PN),"gF",Yp(PE),"iA",Yp(My)],DO,0,
B,[],3,3,0,0,["hD",Yp(MT)],CJ,0,B,[CT,DO],3,3,0,0,["be",Yp(Qi),"gX",Yp(O2),"g0",Yp(R_),"gL",Yp(SM),"eg",Yo(Tr),"hG",Yo(T6),"hD",Yp(MT),"iY",Yp(NX)],Eo,0,B,[DO],3,3,0,0,["hD",Yp(MT)],C$,0,B,[CJ,Cj,Eo],3,3,0,0,["be",Yp(Qi),"gX",Yp(O2),"g0",Yp(R_),"gL",Yp(SM),"eg",Yo(Tr),"hG",Yo(T6),"hD",Yp(MT),"iY",Yp(NX)],Dr,0,B,[Cj],3,3,0,0,["be",Yp(Qi),"gX",Yp(O2),"g0",Yp(R_),"gL",Yp(SM),"eg",Yo(Tr),"hG",Yo(T6),"dj",Yo(Uj),"b$",Yp(Ss),"ds",Yp(Uy),"cq",Yp(M1)],D2,0,B,[C$,Dr],1,3,0,0,["be",Yp(Qi),"gX",Yp(O2),"g0",Yp(R_),"gL",
Yp(SM),"eg",Yo(Tr),"hG",Yo(T6),"hD",Yp(MT),"iY",Yp(NX),"dj",Yo(Uj),"b$",Yp(Ss),"ds",Yp(Uy),"cq",Yp(M1),"ih",Yp(Is),"cV",Yp(Qu),"q",Yo(M2)],Hw,0,CA,[C6],0,3,0,0,["a",Yo(SC),"gz",Yp(PY),"ie",Yq(PZ),"d",Yo(OJ),"bF",Yp(O4),"cs",Yq(Mm)],DI,0,B,[],3,3,0,0,0,DY,0,B,[DI],0,0,0,0,["gu",Yq(K$),"gg",Yp(Oy)],Cz,0,B,[],1,3,0,0,["bA",Yp(Fk),"kT",Yo(CS),"jj",Yp(JR),"jT",Yo(HS),"j6",Yo(BZ),"jS",Yo(Ca)],Dq,0,B,[],3,3,0,0,0,DQ,0,B,[Dq],3,3,0,0,0,Cx,0,B,[],0,0,0,0,["cm",Yp(Em),"x",Yo(OS),"kF",Yo(Ld),"jm",Yo(FI)],BW,0,B,[],3,3,
0,0,0,JL,0,Cx,[BW],0,0,0,0,["cm",Yp(Q8),"h3",Yo(Oz),"r",Yo(SY)],Es,0,B,[],3,3,0,0,0,Ho,0,B,[Es],4,0,0,0,["dz",Yp(L6),"gY",Yp(Q7)],DL,0,B,[Dq],0,3,0,0,["a",Yo(F4),"eU",Yp(GZ),"cY",Yp(Rz),"c5",Yp(P9)],Dy,0,DL,[DQ],1,3,0,0,["a",Yo(Ju),"eU",Yp(NQ),"jp",Yp(HY),"dW",Yp(TD)],LC,0,Dy,[],0,3,0,0,["a",Yo(QD),"i5",Yo(Ul)],Ef,0,B,[],3,3,0,0,0,D$,0,B,[Ef,Ct],0,0,0,0,["kW",Yq(Lv),"bq",Yo(S_),"bP",Yo(T$)],CP,0,D$,[],0,0,0,0,["hw",Yq(HK)],Fu,0,CP,[],4,0,0,0,["hw",Yq(RV)],Ic,0,B,[],0,3,0,0,["hm",Yr(Rg)],Cy,0,CH,[],0,3,0,0,["j",
Yp(Fx)],JW,0,Cy,[],0,3,0,0,["j",Yp(Pq)],EU,0,BS,[],0,3,0,0,0]);
$rt_metadata([EJ,0,B,[],3,3,0,0,0,EH,0,B,[Bi],3,0,0,0,0,CD,0,B,[],3,3,0,0,0,Hk,0,B,[CD],0,3,0,0,["a",Yo(Og)],G4,0,B,[BW],0,0,0,0,["jZ",Yp(Ow),"x",Yo(M0),"r",Yo(RR)],DA,0,Cr,[],1,0,0,0,["a",Yo(JY)],E8,0,B,[],32,0,0,Xx,0,D0,0,P,[],0,3,0,0,["a",Yo(Gd)],Lq,0,D0,[],0,3,0,0,["a",Yo(TM)],GN,0,B,[],4,3,0,0,0,E$,0,B,[BW],3,3,0,0,0,Ja,0,Bo,[],1,3,0,0,0,I_,0,B,[BW],0,0,0,0,["kO",Yp(Oa),"x",Yo(Tv),"r",Yo(N1)],Hp,0,B,[],0,3,0,0,["a",Yo(ON)],ID,0,B,[],4,0,0,0,0,Hd,0,Cy,[],0,3,0,0,["j",Yp(O6)],In,0,B,[Dg],0,3,0,0,["a",Yo(Rw),
"fR",Yo(LX),"iS",Yo(Ls)],DX,0,B,[],3,3,0,0,0,CU,0,B,[DX],3,3,0,0,0,Ck,0,B,[CU],1,3,0,0,["a",Yo(FA),"e7",Yo(RL),"gy",Yp(QN)],IG,0,B,[],4,3,0,0,0,FU,0,Ba,[Be],0,3,0,RM,["jv",Yp(HP)],Ex,0,B,[],3,3,0,0,0,Lt,0,B,[Ex],0,3,0,0,["a",Yo(Oq)],FZ,0,B,[],3,3,0,0,0,Hv,0,B,[],4,3,0,0,0,Ie,0,B,[],4,0,0,0,0,Cp,0,B,[],0,3,0,0,["a",Yo(FS)],DC,0,B,[],3,3,0,0,0,B1,0,B,[],3,3,0,0,0,GD,0,D1,[B1],0,0,0,0,["h4",Yp(QX),"jH",Yq(PS),"bH",Yp(Rl),"b1",Yp(OP)],HT,0,B,[DX],4,3,0,0,["s",Yo(HA)],HQ,0,B,[],4,3,0,0,0,BP,0,B,[],1,3,0,0,["a",Yo(DJ)],Gv,
0,B,[DC],0,3,0,0,["kP",Ys(Rs),"dS",Yo(Tq)],JG,0,B,[],4,3,0,0,0,Ln,0,Co,[],4,3,0,0,["h4",Yp(QX),"cv",Yp(Tz),"bE",Yp(OB)],Bz,0,B,[],0,3,0,0,["a",Yo(C4)],J3,0,Bz,[],0,0,0,0,["kQ",Yq(Or)],Df,0,B,[],1,3,0,0,["kC",Ys(KC),"g$",Yr(JZ),"jC",Yp(F1),"iB",Yp(TV),"kV",Yp(Kx),"h2",Yp(Ti),"kt",Yr(Hh),"jA",Yp(Gs),"gH",Yp(L_)],E1,0,B,[Bi],3,0,0,0,0,Jl,0,B,[E1],0,3,0,0,["kB",Yp(RE),"iI",Yq(Um),"j1",Yq(N9)],Jj,0,B,[Ed],0,3,0,0,["iR",Yp(SV),"dB",Yp(M$),"fD",Yp(ST)],Eq,0,B,[Bi],3,0,0,0,0,Jn,0,B,[Eq],0,3,0,0,["jB",Yp(LY),"ir",Yp(Qh),
"fD",Yp(UU)],DG,0,Cz,[Be],1,3,0,0,["jd",function(b,c,d,e,f){G7(this,b,c,d,e,f);},"ff",Yr(Sy),"jM",Yp(JP),"j7",Yo(EN)],Kk,0,DG,[],0,0,0,0,["ju",function(b,c,d,e,f,g,h){MR(this,b,c,d,e,f,g,h);},"gw",Yo(Sc)],Cl,0,B,[CU],3,3,0,0,["gO",Yp(P2)],BQ,0,Ck,[Cl],1,3,0,0,["gO",Yp(P2),"a",Yo(D8),"s",Yo(QY)],CV,0,B,[],3,3,0,0,0]);
$rt_metadata([Dt,0,BQ,[Ct,Bw,CV],0,3,0,0,["gO",Yp(P2),"a",Yo(JI),"bA",Yp(Ei),"kY",Yp(PC),"bF",Yp(Nm),"cX",Yp(PI),"q",Yo(N$),"g6",Yq(MN),"bw",Yp(SE),"d",Yo(Op)],Fh,0,Dt,[B1],0,0,0,0,["gO",Yp(P2),"bH",Yp(OA),"b1",Yp(Ma)],H9,0,B,[],0,3,0,0,0,V,0,B,[],3,3,0,0,0,Bx,0,B,[Bw],0,3,0,MB,["c2",Yq(K1),"M",Yo(Db)],D6,0,B,[CW,Dr],1,3,0,0,["gR",Yq(UP),"i2",Yp(O0),"h$",Yp(Nr),"dT",Yp(SO),"dM",Yq(R2),"be",Yp(Qi),"gX",Yp(O2),"g0",Yp(R_),"gL",Yp(SM),"eg",Yo(Tr),"hG",Yo(T6),"kA",Yp(LI),"da",Yp(SL),"i4",Yp(Uz),"iv",Yq(L4),"dj",
Yo(Uj),"b$",Yp(Ss),"ds",Yp(Uy),"cq",Yp(M1),"a",Yo(Iv),"hC",Yp(G9),"gA",Yo(Rj),"hB",Yo(QO),"e$",Yo(P8),"cI",Yp(RN),"gG",Yq(Ru),"g5",Yo(Ra),"d",Yo(TQ),"f3",Yq(Od)],HR,0,B,[],4,3,0,0,0,Do,0,B,[Be],1,3,0,0,["kh",Yq(H4)],C0,0,B,[],0,3,0,FC,["j",Yp(Ih)],BO,0,B,[Bw,Be],0,3,0,Er,["kl",Yp(HN),"fd",Yo(Sa),"d",Yo(NG),"C",Yp(M_)],B$,0,P,[],0,3,0,0,["a",Yo(ES),"j",Yp(FY)],IE,0,B$,[],0,3,0,0,["j",Yp(Ro)],LD,0,P,[],0,3,0,0,["a",Yo(MK)],Ga,0,B,[CD],0,3,0,0,["kv",Yp(Q4),"fL",Yq(R8)],Jp,0,B,[Bi],1,3,0,0,0,Dp,0,CB,[],0,3,0,0,
["kk",Yp(Gz)],Fr,0,Dp,[],0,3,0,0,["kp",Yq(J_),"cl",Yr(Ny),"e_",Yp(Pf)],S,0,B,[],0,3,0,0,["a",Yo(BI)],KV,0,S,[],0,0,0,0,["bc",Yp(Qe)],KX,0,S,[],0,0,0,0,["bc",Yp(OQ)],Y,0,BJ,[],0,3,0,0,["a",Yo(BL),"f5",Yp(Nh),"ey",Yp(Nz)],KY,0,Y,[],0,0,0,0,["bc",Yp(TW)],K2,0,Y,[],0,0,0,0,["bc",Yp(MC)],KW,0,S,[],0,0,0,0,["bc",Yp(Mn)],KZ,0,Y,[],0,0,0,0,["bc",Yp(Pa)],FD,0,B,[],3,3,0,0,0,KS,0,Y,[],0,0,0,0,["bc",Yp(S$)],KO,0,B,[V],0,3,0,0,["a",Yo(Ur),"f",Yp(TR),"bo",Yp(Kb)],GI,0,B,[V],0,3,0,0,["a",Yo(P$),"f",Yp(LZ),"bj",Yp(Jq)],KN,
0,B,[V],0,3,0,0,["a",Yo(PL),"f",Yp(Np),"bj",Yp(GK)],GG,0,B,[V],0,3,0,0,["a",Yo(RS),"f",Yp(Qf),"bj",Yp(GV)],K0,0,Y,[],0,0,0,0,["bc",Yp(Tn)],KM,0,B,[V],0,3,0,0,["a",Yo(UC),"f",Yp(Ph),"bj",Yp(LL)],KT,0,Y,[],0,0,0,0,["bc",Yp(Qp)],E4,0,B,[CU],3,3,0,0,0,BY,0,Ck,[E4],1,3,0,0,["a",Yo(DE)],DF,0,BY,[],0,0,0,0,["kU",Yp(If),"gI",Yo(Pw)],I5,0,DF,[],4,0,0,0,["cm",Yp(PB),"s",Yo(RW)],LE,0,B,[V],0,3,0,0,["a",Yo(SI),"f",Yp(Ox),"bj",Yp(Iu)],Lh,0,B,[V],0,3,0,0,["a",Yo(Ug),"f",Yp(Sj),"bo",Yp(Gc)],LG,0,B,[V],0,3,0,0,["a",Yo(MY),
"f",Yp(Pb),"bj",Yp(Jv)],Lg,0,B,[V],0,3,0,0,["a",Yo(PQ),"f",Yp(Mt),"bo",Yp(H8)],LH,0,B,[V],0,3,0,0,["a",Yo(Ql),"f",Yp(Tg),"bo",Yp(It)],GH,0,B,[V],0,3,0,0,["a",Yo(SJ),"f",Yp(LT),"bo",Yp(HX)],Lf,0,B,[V],0,3,0,0,["a",Yo(UY),"f",Yp(QW),"bj",Yp(HH)],LF,0,B,[V],0,3,0,0,["a",Yo(RF),"f",Yp(R1),"bo",Yp(Gl)],KP,0,B,[V],0,3,0,0,["a",Yo(Ol),"f",Yp(Ue),"bo",Yp(KI)],GF,0,B,[V],0,3,0,0,["a",Yo(MJ),"f",Yp(P_),"bo",Yp(Ha)],H5,0,B,[],0,3,0,0,0,FB,0,B,[FP,Dm],3,3,0,0,["bi",Yp(M7),"h4",Yp(QX)]]);
$rt_metadata([GC,0,Ci,[FB,B1],4,3,0,0,["bi",Yp(M7),"h4",Yp(QX),"a",Yo(Sr),"gc",Yo(TX),"dx",Yp(R4),"bE",Yp(PH),"fl",Yq(T5)],Et,0,B,[],3,3,0,0,0,Eh,0,B,[],3,3,0,0,0,JT,0,B,[Et,Eh],0,3,0,0,["d",Yo(LO),"fV",Yo(Ob),"ip",Yo(Uq),"gf",Yo(L9)],Lc,0,Bo,[],1,3,0,0,0,Ce,0,Ba,[Be],0,3,0,I1,["jg",Yp(EG),"hZ",Yp(JD),"C",Yp(Ne)],Ec,0,B,[DI],3,3,0,0,0,Hf,0,B,[],0,3,0,0,0,Lr,0,D6,[],0,3,0,0,["gR",Yq(UP),"i2",Yp(O0),"h$",Yp(Nr),"dT",Yp(SO),"dM",Yq(R2),"be",Yp(Qi),"gX",Yp(O2),"g0",Yp(R_),"gL",Yp(SM),"eg",Yo(Tr),"hG",Yo(T6),"kA",
Yp(LI),"da",Yp(SL),"i4",Yp(Uz),"iv",Yq(L4),"dj",Yo(Uj),"b$",Yp(Ss),"ds",Yp(Uy),"cq",Yp(M1),"a",Yo(OO),"hC",Yp(P3),"cb",Yo(SH),"c_",Yp(RI),"i_",Yo(Re),"c8",Yp(Rx),"bu",Yo(S8)],ER,0,B,[],4,3,0,0,0,J$,0,Cx,[BW],0,0,0,0,["cm",Yp(SS),"r",Yo(Tx)],Le,0,B,[V],0,3,0,0,["a",Yo(PK),"f",Yp(NC),"bj",Yp(J8)],IP,0,B,[E$],0,0,0,0,["a",Yo(Q$)],D3,0,BQ,[CV],1,0,0,0,["gO",Yp(P2),"a",Yo(H$)],IR,0,D3,[],0,0,0,0,["gO",Yp(P2),"a",Yo(No)],IO,0,B,[BW],0,0,0,0,["a",Yo(SW)],BC,0,B,[Be],0,3,0,Bb,0,DZ,0,BY,[],1,0,0,0,["a",Yo(J9)],IS,0,
DZ,[],0,0,0,0,["a",Yo(MZ)],IQ,0,DA,[],0,0,0,0,["a",Yo(LP)],Hl,0,B,[B1],0,0,0,0,["kz",Yq(TT),"bH",Yp(TZ),"b1",Yp(Ui)],Lb,0,B,[DC],0,3,0,0,["jz",Yp(SQ),"dS",Yo(R$)],G2,0,B,[Bi],1,3,0,0,0,Cs,0,B,[Cj],1,0,0,0,["gX",Yp(O2),"g0",Yp(R_),"gL",Yp(SM),"eg",Yo(Tr),"hG",Yo(T6),"dz",Yp(Ek),"fp",Yo(GQ),"cq",Yp(Ki),"f6",Yo(LK),"fY",Yp(Gy),"fZ",Yp(H_),"be",Yp(Jc),"fa",Yp(JS),"d",Yo(Hy),"bu",Yo(MA),"dj",Yo(Qg),"c8",Yp(PW),"b$",Yp(Oo),"ds",Yp(R6)],Fs,0,Cs,[C$],4,0,0,0,["gX",Yp(O2),"g0",Yp(R_),"gL",Yp(SM),"eg",Yo(Tr),"hG",Yo(T6),
"hD",Yp(MT),"iY",Yp(NX),"jl",Yp(MI),"j9",Yo(FN),"jI",Yp(K8),"q",Yo(RX),"cV",Yp(Td)],IW,0,S,[],0,0,0,0,["cp",Yp(Nv)],Dn,0,Cz,[Be,C6,C_,FZ],1,3,0,0,["hA",Yr(F$),"iH",Yr(Nx),"eE",Yp(LS)],DR,0,Dn,[],1,0,0,0,["hA",Yr(Ii)],KB,0,DR,[],0,0,0,0,["j8",function(b,c,d,e,f,g){UL(this,b,c,d,e,f,g);},"iM",Yp(NV)],I0,0,S,[],0,0,0,0,["cp",Yp(M3)],IY,0,S,[],0,0,0,0,["cp",Yp(QU)],Jz,0,B,[],4,3,0,0,0,IZ,0,S,[],0,0,0,0,["cp",Yp(RB)],IU,0,Y,[],0,0,0,0,["cp",Yp(R0)],Fn,0,B,[],4,3,0,0,0,JA,0,B,[Bi],1,3,0,0,0,BR,0,B,[],4,3,0,F0,0,Gp,
0,BP,[],0,0,0,0,["a",Yo(Q_)],Go,0,BP,[],0,0,0,0,["a",Yo(O8)],B9,0,Ba,[Be],0,3,0,Fq,["hZ",Yp(J7),"bv",Yo(UG),"M",Yo(Pu),"d",Yo(NA),"C",Yp(U1),"fW",Yo(Nl),"fG",Yo(O5)],Gn,0,BP,[],0,0,0,0,["a",Yo(Tf)],D_,0,BJ,[],0,3,0,0,["a",Yo(F7),"f5",Yp(Qy),"ey",Yp(Tb)],Gr,0,D_,[],0,0,0,0,["a",Yo(Ta)],Gq,0,Y,[],0,0,0,0,["a",Yo(Pt)],J5,0,Bz,[],0,0,0,0,["f$",Yq(Uw)],J2,0,Bz,[],0,0,0,0,["f$",Yq(UX)],K6,0,BY,[],0,0,0,0,["cm",Yp(PO),"q",Yo(Tt),"s",Yo(Tc)],J4,0,Bz,[],0,0,0,0,["f$",Yq(UV)],CO,"WebAssemblyProvider",4,B,[],3,3,0,0,["i$",
Yq(Uh)],EO,0,B,[CO],4,3,0,0,["i$",Yq(Uh),"a",Yo(UZ),"hV",Yo(Ux),"hF",Yp(NE)]]);
$rt_metadata([Fw,0,B,[],0,3,0,0,0,J1,0,P,[],0,3,0,0,["a",Yo(LR)],Jm,0,B,[V],0,3,0,0,["kf",Yp(SX),"f",Yp(QI),"jr",Yp(H1)],Bs,0,B,[],0,3,0,0,["a",Yo(C8)],Kh,0,Bs,[],0,0,0,0,["a",Yo(O_)],Ke,0,Bs,[],0,0,0,0,["a",Yo(QV)],JH,0,Bs,[],0,0,0,0,["a",Yo(L7)],Kf,0,Bs,[],0,0,0,0,["a",Yo(TC)],FV,0,Cs,[CW],4,3,0,0,["gR",Yq(UP),"i2",Yp(O0),"h$",Yp(Nr),"dT",Yp(SO),"dM",Yq(R2),"gX",Yp(O2),"g0",Yp(R_),"gL",Yp(SM),"eg",Yo(Tr),"hG",Yo(T6),"kA",Yp(LI),"da",Yp(SL),"i4",Yp(Uz),"iv",Yq(L4),"a",Yo(N2),"dz",Yp(K3),"kG",Yp(Km),"jq",Yo(GA),
"ka",Yq(Lo),"d",Yo(T2),"fa",Yp(Py),"be",Yp(OE),"fZ",Yp(Mf),"fY",Yp(TG),"f6",Yo(Mo),"cq",Yp(UH),"fp",Yo(PJ),"f3",Yq(U2),"cI",Yp(T1),"e$",Yo(Pg)],BV,0,B,[Bw,Be,C_],0,3,0,LA,["iL",Yp(GM),"kJ",Yr(LM),"n",Yp(NZ),"c",Yo(RA),"cg",Yo(TU),"hX",Yp(SA),"eI",Yp(QH),"eh",Yq(NH),"cM",Yp(QG),"iU",Yq(N4),"iK",Yp(Te),"bL",Yq(MG),"hk",Yp(To),"d",Yo(OU),"f7",Yo(T3),"C",Yp(SB),"em",Yp(SU),"b0",Yo(NS),"gi",Yp(Ri)],LN,0,P,[],0,3,0,0,["a",Yo(Oj)],Ea,0,Df,[],1,3,0,0,["g$",Yr(H6),"hs",Yq(N6)],IH,0,Ea,[],0,3,0,0,["jG",Yp(QJ),"gQ",function(b,
c,d,e,f,g,h){return Uu(this,b,c,d,e,f,g,h);}],Fl,0,B,[Bi],3,3,0,0,0,Ip,0,B,[Fl],0,3,0,0,["j$",Yp(Nq),"io",Yp(Nk),"jR",Yp(HE),"jD",Yp(M6)],BA,0,B,[],4,3,0,Bp,0,B6,0,B$,[],0,3,0,0,["a",Yo(NK),"j",Yp(Dc)],Hi,0,S,[],0,0,0,0,["jE",Yp(Pi)],GX,0,B,[CD],0,3,0,0,["a",Yo(Rt)],GY,0,B,[CD],0,3,0,0,["a",Yo(Qq),"fL",Yq(MF)],FQ,0,Do,[],0,3,0,Rk,["h9",Yo(Tj)],CR,0,B,[],4,3,0,0,0,Ly,0,B,[DQ],4,3,0,0,["a",Yo(Of),"cY",Yp(NF),"dW",Yp(RT),"c5",Yp(PX)],Fm,0,B,[],0,3,0,Cu,["hm",Yr(Ix),"cW",Yp(TN)],GL,0,P,[],0,3,0,0,["a",Yo(QM),"j",
Yp(N_)],Gg,0,P,[],0,3,0,0,["j",Yp(Q0),"a",Yo(Pm)],Kr,0,B,[FD],0,0,0,0,["kx",Yp(S9),"bi",Yp(Uf),"hj",Yp(TP)],CF,0,B,[Be,Bw],1,3,0,0,["c2",Yq(Fz),"jo",Yo(Bn)],B_,0,B,[],0,3,0,0,["a",Yo(Fj)],II,0,B_,[],0,0,0,0,["jW",Ys(UQ)],Id,0,B,[],0,0,0,0,["a",Yo(UK)],Ky,0,B,[],4,3,0,0,0,EB,0,Ba,[Be],0,3,0,S4,["js",Yp(Jb)],Ft,0,B,[],0,3,0,EY,["j",Yp(GP),"g9",Yp(MW),"iO",Yq(Th)],El,0,B,[Bw],0,3,0,0,["kH",Yq(TK),"fJ",Yo(O1),"cS",Yo(PM),"gm",Yo(Pj)],F6,0,B,[B1],0,0,0,0,["j4",Yp(L5),"bH",Yp(TB),"b1",Yp(Qv)],Cg,0,B,[],0,3,0,BF,0,JK,
0,Bq,[],0,3,0,0,["j",Yp(OV)],HG,0,D2,[],4,3,0,0,["be",Yp(Qi),"gX",Yp(O2),"g0",Yp(R_),"gL",Yp(SM),"eg",Yo(Tr),"hG",Yo(T6),"hD",Yp(MT),"iY",Yp(NX),"dj",Yo(Uj),"b$",Yp(Ss),"ds",Yp(Uy),"cq",Yp(M1),"ih",Yp(Se),"ft",Yo(Rd),"hQ",Yp(Rc)],Ij,0,B,[V],0,3,0,0,["a",Yo(L2),"f",Yp(Os),"kZ",Yp(I2)],JB,0,Cp,[],0,0,0,0,["gn",Ys(UJ)],Kj,0,P,[],0,3,0,0,["a",Yo(RC)],Jy,0,B,[],4,3,0,0,0,JC,0,Cp,[],0,0,0,0,["gn",Ys(S3)],HV,0,B,[],4,3,0,0,0,K4,0,DY,[Ec],4,0,0,0,["gu",Yq(Nu),"iQ",Yp(RQ)],DT,0,B,[],0,3,0,Bt,["jK",Yq(Im),"gp",Yo(MU),
"cZ",Yo(Sd),"iu",Yo(Ut),"h8",Yo(Sk),"fK",Yo(Sw),"c",Yo(Q6)],DD,0,B,[],4,3,0,Ev,0,G5,0,B,[],4,0,0,0,0,Ig,0,B_,[],0,0,0,0,["jF",Ys(OT)]]);
$rt_metadata([Ko,0,CH,[],0,3,0,0,0,Ge,0,B,[Ff],0,3,0,0,["a",Yo(Ns),"gb",Yp(Tk),"kI",Yp(Hm)],Bu,0,CF,[],12,3,0,Bc,0,La,0,B,[EJ],4,0,0,0,["dz",Yp(Sp),"gt",Yp(OL),"d4",Yq(Mw),"jw",Yq(I3)],Il,0,B,[],0,3,0,0,["iL",Yp(P1)],Ik,0,Bo,[],1,3,0,0,0,CI,0,B,[],0,0,0,0,["cv",Yp(PD)],IV,0,Bo,[],1,3,0,0,0,JM,0,P,[],0,3,0,0,["a",Yo(SN)],B7,0,CF,[],12,3,0,DK,0,IK,0,B,[],0,3,0,0,["a",Yo(LV)],K7,0,B,[EH],0,3,0,0,["iR",Yp(O3),"dB",Yp(S6),"fD",Yp(SD)],GR,0,BQ,[CV],0,0,0,0,["gO",Yp(P2),"gq",Yp(OX),"cX",Yp(LQ),"q",Yo(N0)],BN,0,B,[],
0,3,0,RG,0,Gx,0,B,[],4,3,0,0,0]);
function $rt_array(cls,data){this.e=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","<java_object>@",",","null","0",".","Null pointer","JSON does not allow non-finite numbers","JSON does not allow non-finite numbers.","\"\"","\\t","\\n","\\f","\\r","000","\\u","\\b","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","String is null or empty","Illegal radix: ",
"Result is already complete","main","No null success mapper accepted","No null failure mapper accepted","No null handler accepted","Future{cause=","Future{unresolved}","Future{result=null}","Future{result=","}","BIG_ENDIAN","LITTLE_ENDIAN","Index out of bounds","Cannot instantiate any provider for service ","(this Map)",", ","New position "," is outside of range [0;","classes.wasm","cy","width","height","placeIndex","frameIndex","wasm","computeLinePixelRGBs","initAndComputeLinePixelRGBs","","Replacement preconditions do not hold",
"Action must be non-null","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","[]","(this Collection)","OFF","SEVERE","WARNING","INFO","CONFIG","FINE","FINER","FINEST","ALL","IGNORE","REPLACE","REPORT","false","true","Light.","Sphere.","javaClass@","number","object","string","boolean","Light","The last char in dst ","Sphere","Using default built-in JSON factory which is not interoperable with the underlying platform! Be sure you haven\'t forgot to call Json.registerProvider().",
"Floor","Default","Glass","Mirror","UTF-8","global","STRING","NUMBER","BOOLEAN","OBJECT","ARRAY","NULL","UNDEFINED","RETURN_NULL","TRACE_AND_RETURN_NULL","THROW_EXCEPTION"]);
BV.prototype.toString=function(){return $rt_ustr(this);};
BV.prototype.valueOf=BV.prototype.toString;B.prototype.toString=function(){return $rt_ustr(OY(this));};
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
a|b);};Long_xor=function(a,b){return $rt_globals.BigInt.asIntN(64,a^b);};Long_shl=function(a,b){return $rt_globals.BigInt.asIntN(64,a<<$rt_globals.BigInt(b&63));};Long_shr=function(a,b){return $rt_globals.BigInt.asIntN(64,a>>$rt_globals.BigInt(b&63));};Long_shru=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var W=Long_add;var Xv=Long_sub;var R=Long_mul;var Bg=Long_div;var Dk=Long_rem;var WS
=Long_or;var Bl=Long_and;var AAQ=Long_xor;var Cf=Long_shl;var Da=Long_shr;var B0=Long_shru;var X3=Long_compare;var C1=Long_eq;var AAR=Long_ne;var I$=Long_lt;var C2=Long_le;var IM=Long_gt;var IT=Long_ge;var AAS=Long_not;var Vn=Long_neg;
function TeaVMThread(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending
=function(){return this.status===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new $rt_globals.Error("Thread already started");}if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof $rt_globals.Error){throw result;}};this.run();};TeaVMThread.prototype.resume
=function(){if($rt_currentNativeThread!==null){throw new $rt_globals.Error("Another thread is running");}this.status=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending()
{var thread=$rt_nativeThread();return thread!=null&&thread.isSuspending();}function $rt_resuming(){var thread=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new $rt_globals.Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread
=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer(){throw new $rt_globals.Error("Invalid recorded state");}main=$rt_mainStarter(Wg);
main.javaException=$rt_javaException;
(function(){var c;c=JO.prototype;c.getLength=c.ke;c.get=c.kr;c=Jl.prototype;c.apply=c.j1;c=Jj.prototype;c.handle=c.fD;c=Jn.prototype;c.handle=c.fD;c=Ip.prototype;c.handleEvent=c.jD;c=K7.prototype;c.handle=c.fD;})();
})(this);

main()