(()=>{var nm=0,Qu=1,im=2;var Ar=1,sm=2,$o=3,Ts=0,yi=1,Qt=2,eo=0,Qo=1,Ii=2,ed=3,td=4,rm=5;var to=100,om=101,am=102,lm=103,cm=104,hm=200,um=201,dm=202,fm=203,nd=204,id=205,pm=206,mm=207,gm=208,_m=209,xm=210,ym=211,vm=212,Mm=213,Sm=214,_c=0,xc=1,yc=2,No=3,vc=4,Mc=5,Sc=6,bc=7,sd=0,bm=1,wm=2,As=0,rd=1,od=2,ad=3,ea=4,ld=5,cd=6,hd=7,Ou="attached",Tm="detached",ud=300,no=301,ta=302,Yc=303,Kc=304,Wn=1e3,oi=1001,gr=1002,kn=1003,Zc=1004;var io=1005;var Sn=1006,na=1007;var vi=1008;var Pi=1009,dd=1010,fd=1011,ia=1012,Jc=1013,ms=1014,ci=1015,Mi=1016,jc=1017,$c=1018,so=1020,pd=35902,md=35899,gd=1021,_d=1022,Si=1023,Ws=1026,tr=1027,Qc=1028,eh=1029,Er=1030,th=1031;var nh=1033,dl=33776,fl=33777,pl=33778,ml=33779,ih=35840,sh=35841,rh=35842,oh=35843,ah=36196,lh=37492,ch=37496,hh=37488,uh=37489,gl=37490,dh=37491,fh=37808,ph=37809,mh=37810,gh=37811,_h=37812,xh=37813,yh=37814,vh=37815,Mh=37816,Sh=37817,bh=37818,wh=37819,Th=37820,Ah=37821,Eh=36492,Rh=36494,Ch=36495,Ih=36283,Ph=36284,_l=36285,Lh=36286;var Vr=2300,Wr=2301,mc=2302,Bu=2303,zu=2400,ku=2401,Gu=2402,Am=2500;var xd=0,xl=1,sa=2,Em=3200;var Nh=0,Rm=1,nr="",fn="srgb",ei="srgb-linear",za="linear",pn="srgb";var gc=7680;var Cm=519,Im=512,Pm=513,Lm=514,yd=515,Nm=516,Dm=517,vd=518,Md=519,Sd=35044;var bd="300 es",$i=2e3,Do=2001;function n0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function i0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Um(){let i=Uo("canvas");return i.style.display="block",i}var op={},Fo=null;function ka(...i){let e="THREE."+i.shift();Fo?Fo("log",e,...i):console.log(e,...i)}function Fm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function at(...i){i=Fm(i);let e="THREE."+i.shift();if(Fo)Fo("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function _t(...i){i=Fm(i);let e="THREE."+i.shift();if(Fo)Fo("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Hr(...i){let e=i.join(" ");e in op||(op[e]=!0,at(...i))}function Om(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Bm={[_c]:_c,[yc]:Sc,[vc]:vc,[No]:Mc,[xc]:xc,[Sc]:yc,[bc]:bc,[Mc]:No},Ss=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ap=1234567,Ua=Math.PI/180,Xr=180/Math.PI;function gs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(si[i&255]+si[i>>8&255]+si[i>>16&255]+si[i>>24&255]+"-"+si[e&255]+si[e>>8&255]+"-"+si[e>>16&15|64]+si[e>>24&255]+"-"+si[t&63|128]+si[t>>8&255]+"-"+si[t>>16&255]+si[t>>24&255]+si[n&255]+si[n>>8&255]+si[n>>16&255]+si[n>>24&255]).toLowerCase()}function zt(i,e,t){return Math.max(e,Math.min(t,i))}function wd(i,e){return(i%e+e)%e}function s0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function r0(i,e,t){return i!==e?(t-i)/(e-i):0}function Fa(i,e,t){return(1-t)*i+t*e}function o0(i,e,t,n){return Fa(i,e,1-Math.exp(-t*n))}function a0(i,e=1){return e-Math.abs(wd(i,e*2)-e)}function l0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function c0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function h0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function u0(i,e){return i+Math.random()*(e-i)}function d0(i){return i*(.5-Math.random())}function f0(i){i!==void 0&&(ap=i);let e=ap+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function p0(i){return i*Ua}function m0(i){return i*Xr}function g0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function _0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Td(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function x0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:at("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ad(i,e){if(e.constructor===Float32Array)return i;let t=Dh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Ed(i,e){if(e.constructor===Float32Array)return i;let t=Dh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Uh={DEG2RAD:Ua,RAD2DEG:Xr,generateUUID:gs,clamp:zt,euclideanModulo:wd,mapLinear:s0,inverseLerp:r0,lerp:Fa,damp:o0,pingpong:a0,smoothstep:l0,smootherstep:c0,randInt:h0,randFloat:u0,randFloatSpread:d0,seededRandom:f0,degToRad:p0,radToDeg:m0,isPowerOfTwo:g0,ceilPowerOfTwo:_0,floorPowerOfTwo:Td,setQuaternionFromProperEuler:x0,normalize:Ed,denormalize:Ad},Nd=class Nd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=zt(this.x,e.x,t.x),this.y=zt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=zt(this.x,e,t),this.y=zt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nd.prototype.isVector2=!0;var ve=Nd,mi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(u!==v||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*v;m<0&&(d=-d,f=-f,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){let M=Math.acos(m),T=Math.sin(M);g=Math.sin(g*M)/T,a=Math.sin(a*M)/T,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+v*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+v*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Dd=class Dd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=zt(this.x,e.x,t.x),this.y=zt(this.y,e.y,t.y),this.z=zt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=zt(this.x,e,t),this.y=zt(this.y,e,t),this.z=zt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cu.copy(this).projectOnVector(e),this.sub(cu)}reflect(e){return this.sub(cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dd.prototype.isVector3=!0;var O=Dd,cu=new O,lp=new mi,Ud=class Ud{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],v=s[0],m=s[3],g=s[6],M=s[1],T=s[4],S=s[7],C=s[2],R=s[5],x=s[8];return r[0]=o*v+a*M+l*C,r[3]=o*m+a*T+l*R,r[6]=o*g+a*S+l*x,r[1]=c*v+h*M+u*C,r[4]=c*m+h*T+u*R,r[7]=c*g+h*S+u*x,r[2]=d*v+f*M+p*C,r[5]=d*m+f*T+p*R,r[8]=d*g+f*S+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hu.makeScale(e,t)),this}rotate(e){return Hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hu.makeRotation(-e)),this}translate(e,t){return Hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ud.prototype.isMatrix3=!0;var Lt=Ud,hu=new Lt,cp=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hp=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y0(){let i={enabled:!0,workingColorSpace:ei,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pn&&(s.r=Vs(s.r),s.g=Vs(s.g),s.b=Vs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pn&&(s.r=Lo(s.r),s.g=Lo(s.g),s.b=Lo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===nr?za:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ei]:{primaries:e,whitePoint:n,transfer:za,toXYZ:cp,fromXYZ:hp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:pn,toXYZ:cp,fromXYZ:hp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}var Wt=y0();function Vs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var po,wc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{po===void 0&&(po=Uo("canvas")),po.width=e.width,po.height=e.height;let s=po.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=po}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Uo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vs(t[n]/255)*255):t[n]=Vs(t[n]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},v0=0,Oo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(uu(s[o].image)):r.push(uu(s[o]))}else r=uu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function uu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}var M0=0,du=new O,Gn=class i extends Ss{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=oi,s=oi,r=Sn,o=vi,a=Si,l=Pi,c=i.DEFAULT_ANISOTROPY,h=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=gs(),this.name="",this.source=new Oo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(du).x}get height(){return this.source.getSize(du).y}get depth(){return this.source.getSize(du).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wn:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wn:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=ud;Gn.DEFAULT_ANISOTROPY=1;var Fd=class Fd{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,S=(f+1)/2,C=(g+1)/2,R=(h+d)/4,x=(u+v)/4,b=(p+m)/4;return T>S&&T>C?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=R/n,r=x/n):S>C?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=R/s,r=b/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=x/r,s=b/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-p)*(m-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=zt(this.x,e.x,t.x),this.y=zt(this.y,e.y,t.y),this.z=zt(this.z,e.z,t.z),this.w=zt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=zt(this.x,e,t),this.y=zt(this.y,e,t),this.z=zt(this.z,e,t),this.w=zt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fd.prototype.isVector4=!0;var hn=Fd,Tc=class extends Ss{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Gn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Oo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bi=class extends Tc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ga=class extends Gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ac=class extends Gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var qc=class qc{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,p,v,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,p,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/mo.setFromMatrixColumn(e,0).length(),r=1/mo.setFromMatrixColumn(e,1).length(),o=1/mo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,v=c*u;t[0]=d+v*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,v=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S0,e,b0)}lookAt(e,t,n){let s=this.elements;return Fi.subVectors(e,t),Fi.lengthSq()===0&&(Fi.z=1),Fi.normalize(),hr.crossVectors(n,Fi),hr.lengthSq()===0&&(Math.abs(n.z)===1?Fi.x+=1e-4:Fi.z+=1e-4,Fi.normalize(),hr.crossVectors(n,Fi)),hr.normalize(),zl.crossVectors(Fi,hr),s[0]=hr.x,s[4]=zl.x,s[8]=Fi.x,s[1]=hr.y,s[5]=zl.y,s[9]=Fi.y,s[2]=hr.z,s[6]=zl.z,s[10]=Fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],v=n[6],m=n[10],g=n[14],M=n[3],T=n[7],S=n[11],C=n[15],R=s[0],x=s[4],b=s[8],z=s[12],N=s[1],B=s[5],W=s[9],Z=s[13],P=s[2],Y=s[6],K=s[10],ee=s[14],oe=s[3],ne=s[7],le=s[11],fe=s[15];return r[0]=o*R+a*N+l*P+c*oe,r[4]=o*x+a*B+l*Y+c*ne,r[8]=o*b+a*W+l*K+c*le,r[12]=o*z+a*Z+l*ee+c*fe,r[1]=h*R+u*N+d*P+f*oe,r[5]=h*x+u*B+d*Y+f*ne,r[9]=h*b+u*W+d*K+f*le,r[13]=h*z+u*Z+d*ee+f*fe,r[2]=p*R+v*N+m*P+g*oe,r[6]=p*x+v*B+m*Y+g*ne,r[10]=p*b+v*W+m*K+g*le,r[14]=p*z+v*Z+m*ee+g*fe,r[3]=M*R+T*N+S*P+C*oe,r[7]=M*x+T*B+S*Y+C*ne,r[11]=M*b+T*W+S*K+C*le,r[15]=M*z+T*Z+S*ee+C*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],v=e[7],m=e[11],g=e[15],M=l*f-c*d,T=a*f-c*u,S=a*d-l*u,C=o*f-c*h,R=o*d-l*h,x=o*u-a*h;return t*(v*M-m*T+g*S)-n*(p*M-m*C+g*R)+s*(p*T-v*C+g*x)-r*(p*S-v*R+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],v=e[13],m=e[14],g=e[15],M=t*a-n*o,T=t*l-s*o,S=t*c-r*o,C=n*l-s*a,R=n*c-r*a,x=s*c-r*l,b=h*v-u*p,z=h*m-d*p,N=h*g-f*p,B=u*m-d*v,W=u*g-f*v,Z=d*g-f*m,P=M*Z-T*W+S*B+C*N-R*z+x*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/P;return e[0]=(a*Z-l*W+c*B)*Y,e[1]=(s*W-n*Z-r*B)*Y,e[2]=(v*x-m*R+g*C)*Y,e[3]=(d*R-u*x-f*C)*Y,e[4]=(l*N-o*Z-c*z)*Y,e[5]=(t*Z-s*N+r*z)*Y,e[6]=(m*S-p*x-g*T)*Y,e[7]=(h*x-d*S+f*T)*Y,e[8]=(o*W-a*N+c*b)*Y,e[9]=(n*N-t*W-r*b)*Y,e[10]=(p*R-v*S+g*M)*Y,e[11]=(u*S-h*R-f*M)*Y,e[12]=(a*z-o*B-l*b)*Y,e[13]=(t*B-n*z+s*b)*Y,e[14]=(v*T-p*C-m*M)*Y,e[15]=(h*C-u*T+d*M)*Y,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,v=o*h,m=o*u,g=a*u,M=l*c,T=l*h,S=l*u,C=n.x,R=n.y,x=n.z;return s[0]=(1-(v+g))*C,s[1]=(f+S)*C,s[2]=(p-T)*C,s[3]=0,s[4]=(f-S)*R,s[5]=(1-(d+g))*R,s[6]=(m+M)*R,s[7]=0,s[8]=(p+T)*x,s[9]=(m-M)*x,s[10]=(1-(d+v))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=mo.set(s[0],s[1],s[2]).length(),a=mo.set(s[4],s[5],s[6]).length(),l=mo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ls.copy(this);let c=1/o,h=1/a,u=1/l;return ls.elements[0]*=c,ls.elements[1]*=c,ls.elements[2]*=c,ls.elements[4]*=h,ls.elements[5]*=h,ls.elements[6]*=h,ls.elements[8]*=u,ls.elements[9]*=u,ls.elements[10]*=u,t.setFromRotationMatrix(ls),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=$i,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,v;if(l)p=r/(o-r),v=o*r/(o-r);else if(a===$i)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Do)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=$i,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,v;if(l)p=1/(o-r),v=o/(o-r);else if(a===$i)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===Do)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};qc.prototype.isMatrix4=!0;var wt=qc,mo=new O,ls=new wt,S0=new O(0,0,0),b0=new O(1,1,1),hr=new O,zl=new O,Fi=new O,up=new wt,dp=new mi,us=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(up,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dp.setFromEuler(this),this.setFromQuaternion(dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};us.DEFAULT_ORDER="XYZ";var Bo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},w0=0,fp=new O,go=new mi,Us=new wt,kl=new O,Sa=new O,T0=new O,A0=new mi,pp=new O(1,0,0),mp=new O(0,1,0),gp=new O(0,0,1),_p={type:"added"},E0={type:"removed"},_o={type:"childadded",child:null},fu={type:"childremoved",child:null},En=class i extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new us,n=new mi,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new Lt}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.multiply(go),this}rotateOnWorldAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.premultiply(go),this}rotateX(e){return this.rotateOnAxis(pp,e)}rotateY(e){return this.rotateOnAxis(mp,e)}rotateZ(e){return this.rotateOnAxis(gp,e)}translateOnAxis(e,t){return fp.copy(e).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pp,e)}translateY(e){return this.translateOnAxis(mp,e)}translateZ(e){return this.translateOnAxis(gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Us.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kl.copy(e):kl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Us.lookAt(Sa,kl,this.up):Us.lookAt(kl,Sa,this.up),this.quaternion.setFromRotationMatrix(Us),s&&(Us.extractRotation(s.matrixWorld),go.setFromRotationMatrix(Us),this.quaternion.premultiply(go.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_p),_o.child=e,this.dispatchEvent(_o),_o.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(E0),fu.child=e,this.dispatchEvent(fu),fu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Us.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Us.multiply(e.parent.matrixWorld)),e.applyMatrix4(Us),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_p),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,T0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,A0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};En.DEFAULT_UP=new O(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xt=class extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}},R0={type:"move"},zo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(R0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function pu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Wt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Wt.workingColorSpace){if(e=wd(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=pu(o,r,e+1/3),this.g=pu(o,r,e),this.b=pu(o,r,e-1/3)}return Wt.colorSpaceToWorking(this,s),this}setStyle(e,t=fn){function n(r){r!==void 0&&parseFloat(r)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){let n=zm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return Wt.workingToColorSpace(ri.copy(this),e),Math.round(zt(ri.r*255,0,255))*65536+Math.round(zt(ri.g*255,0,255))*256+Math.round(zt(ri.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.workingToColorSpace(ri.copy(this),t);let n=ri.r,s=ri.g,r=ri.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Wt.workingColorSpace){return Wt.workingToColorSpace(ri.copy(this),t),e.r=ri.r,e.g=ri.g,e.b=ri.b,e}getStyle(e=fn){Wt.workingToColorSpace(ri.copy(this),e);let t=ri.r,n=ri.g,s=ri.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+t,ur.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ur),e.getHSL(Gl);let n=Fa(ur.h,Gl.h,t),s=Fa(ur.s,Gl.s,t),r=Fa(ur.l,Gl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ri=new qe;qe.NAMES=zm;var _r=class extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new us,this.environmentIntensity=1,this.environmentRotation=new us,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},cs=new O,Fs=new O,mu=new O,Os=new O,xo=new O,yo=new O,xp=new O,gu=new O,_u=new O,xu=new O,yu=new hn,vu=new hn,Mu=new hn,Gs=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),cs.subVectors(e,t),s.cross(cs);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){cs.subVectors(s,t),Fs.subVectors(n,t),mu.subVectors(e,t);let o=cs.dot(cs),a=cs.dot(Fs),l=cs.dot(mu),c=Fs.dot(Fs),h=Fs.dot(mu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Os)===null?!1:Os.x>=0&&Os.y>=0&&Os.x+Os.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Os)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Os.x),l.addScaledVector(o,Os.y),l.addScaledVector(a,Os.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return yu.setScalar(0),vu.setScalar(0),Mu.setScalar(0),yu.fromBufferAttribute(e,t),vu.fromBufferAttribute(e,n),Mu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(yu,r.x),o.addScaledVector(vu,r.y),o.addScaledVector(Mu,r.z),o}static isFrontFacing(e,t,n,s){return cs.subVectors(n,t),Fs.subVectors(e,t),cs.cross(Fs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cs.subVectors(this.c,this.b),Fs.subVectors(this.a,this.b),cs.cross(Fs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;xo.subVectors(s,n),yo.subVectors(r,n),gu.subVectors(e,n);let l=xo.dot(gu),c=yo.dot(gu);if(l<=0&&c<=0)return t.copy(n);_u.subVectors(e,s);let h=xo.dot(_u),u=yo.dot(_u);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(xo,o);xu.subVectors(e,r);let f=xo.dot(xu),p=yo.dot(xu);if(p>=0&&f<=p)return t.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(yo,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return xp.subVectors(r,s),a=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(xp,a);let g=1/(m+v+d);return o=v*g,a=d*g,t.copy(n).addScaledVector(xo,o).addScaledVector(yo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gi=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hs.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hs.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hs):hs.fromBufferAttribute(r,o),hs.applyMatrix4(e.matrixWorld),this.expandByPoint(hs);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hl.copy(n.boundingBox)),Hl.applyMatrix4(e.matrixWorld),this.union(Hl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hs),hs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),Vl.subVectors(this.max,ba),vo.subVectors(e.a,ba),Mo.subVectors(e.b,ba),So.subVectors(e.c,ba),dr.subVectors(Mo,vo),fr.subVectors(So,Mo),Br.subVectors(vo,So);let t=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-Br.z,Br.y,dr.z,0,-dr.x,fr.z,0,-fr.x,Br.z,0,-Br.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-Br.y,Br.x,0];return!Su(t,vo,Mo,So,Vl)||(t=[1,0,0,0,1,0,0,0,1],!Su(t,vo,Mo,So,Vl))?!1:(Wl.crossVectors(dr,fr),t=[Wl.x,Wl.y,Wl.z],Su(t,vo,Mo,So,Vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hs).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hs).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bs=[new O,new O,new O,new O,new O,new O,new O,new O],hs=new O,Hl=new gi,vo=new O,Mo=new O,So=new O,dr=new O,fr=new O,Br=new O,ba=new O,Vl=new O,Wl=new O,zr=new O;function Su(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zr.fromArray(i,r);let a=s.x*Math.abs(zr.x)+s.y*Math.abs(zr.y)+s.z*Math.abs(zr.z),l=e.dot(zr),c=t.dot(zr),h=n.dot(zr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Hs=C0();function C0(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function I0(i){Math.abs(i)>65504&&at("DataUtils.toHalfFloat(): Value out of range."),i=zt(i,-65504,65504),Hs.floatView[0]=i;let e=Hs.uint32View[0],t=e>>23&511;return Hs.baseTable[t]+((e&8388607)>>Hs.shiftTable[t])}function P0(i){let e=i>>10;return Hs.uint32View[0]=Hs.mantissaTable[Hs.offsetTable[e]+(i&1023)]+Hs.exponentTable[e],Hs.floatView[0]}var xr=class{static toHalfFloat(e){return I0(e)}static fromHalfFloat(e){return P0(e)}},Vn=new O,Xl=new ve,L0=0,Ft=class extends Ss{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:L0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sd,this.updateRanges=[],this.gpuType=ci,this.version=0,this._normalizationScale=e!==void 0?Dh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xl.fromBufferAttribute(this,t),Xl.applyMatrix3(e),this.setXY(t,Xl.x,Xl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix3(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix4(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyNormalMatrix(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.transformDirection(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ad(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ed(e,this.array)}};var Ha=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Va=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var sn=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},N0=new gi,wa=new O,bu=new O,Ri=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):N0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);let t=wa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(wa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(bu)),this.expandByPoint(wa.copy(e.center).sub(bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},D0=0,ji=new wt,wu=new En,bo=new O,Oi=new gi,Ta=new gi,Jn=new O,rn=class i extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n0(e)?Va:Ha)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ji.makeRotationFromQuaternion(e),this.applyMatrix4(ji),this}rotateX(e){return ji.makeRotationX(e),this.applyMatrix4(ji),this}rotateY(e){return ji.makeRotationY(e),this.applyMatrix4(ji),this}rotateZ(e){return ji.makeRotationZ(e),this.applyMatrix4(ji),this}translate(e,t,n){return ji.makeTranslation(e,t,n),this.applyMatrix4(ji),this}scale(e,t,n){return ji.makeScale(e,t,n),this.applyMatrix4(ji),this}lookAt(e){return wu.lookAt(e),wu.updateMatrix(),this.applyMatrix4(wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bo).negate(),this.translate(bo.x,bo.y,bo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new sn(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Oi.setFromBufferAttribute(r),this.morphTargetsRelative?(Jn.addVectors(this.boundingBox.min,Oi.min),this.boundingBox.expandByPoint(Jn),Jn.addVectors(this.boundingBox.max,Oi.max),this.boundingBox.expandByPoint(Jn)):(this.boundingBox.expandByPoint(Oi.min),this.boundingBox.expandByPoint(Oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(Oi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ta.setFromBufferAttribute(a),this.morphTargetsRelative?(Jn.addVectors(Oi.min,Ta.min),Oi.expandByPoint(Jn),Jn.addVectors(Oi.max,Ta.max),Oi.expandByPoint(Jn)):(Oi.expandByPoint(Ta.min),Oi.expandByPoint(Ta.max))}Oi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Jn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Jn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Jn.fromBufferAttribute(a,c),l&&(bo.fromBufferAttribute(e,c),Jn.add(bo)),s=Math.max(s,n.distanceToSquared(Jn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let z=0;z<n.count;z++)a[z]=new O,l[z]=new O;let h=new O,u=new O,d=new O,f=new ve,p=new ve,v=new ve,m=new O,g=new O;function M(z,N,B){c[z]=c[N]=c[B]=1,h.fromBufferAttribute(n,z),u.fromBufferAttribute(n,N),d.fromBufferAttribute(n,B),f.fromBufferAttribute(r,z),p.fromBufferAttribute(r,N),v.fromBufferAttribute(r,B),u.sub(h),d.sub(h),p.sub(f),v.sub(f);let W=1/(p.x*v.y-v.x*p.y);isFinite(W)&&(m.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(W),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(W),a[z].add(m),a[N].add(m),a[B].add(m),l[z].add(g),l[N].add(g),l[B].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let z=0,N=T.length;z<N;++z){let B=T[z],W=B.start,Z=B.count;for(let P=W,Y=W+Z;P<Y;P+=3)M(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let S=new O,C=new O,R=new O,x=new O;function b(z){R.fromBufferAttribute(s,z),x.copy(R);let N=a[z];S.copy(N),S.sub(R.multiplyScalar(R.dot(N))).normalize(),C.crossVectors(x,N);let W=C.dot(l[z])<0?-1:1;o.setXYZW(z,S.x,S.y,S.z,W)}for(let z=0,N=n.count;z<N;++z)c[z]&&b(z);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,u=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jn.fromBufferAttribute(e,t),Jn.normalize(),e.setXYZ(t,Jn.x,Jn.y,Jn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new Ft(d,h,u)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},qr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sd,this.updateRanges=[],this.version=0,this.uuid=gs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=yp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=yp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function yp(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=gs()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var pi=new O,yr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Dh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.applyMatrix4(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.applyNormalMatrix(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.transformDirection(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ka("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ka("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ad(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ed(e,this.data.array)}},Tu=new O,U0=new O,F0=new Lt,Ei=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Tu.subVectors(n,t).cross(U0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Tu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||F0.getNormalMatrix(e),s=this.coplanarPoint(Tu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},O0=0,_i=class extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=Qo,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nd,this.blendDst=id,this.blendEquation=to,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=No,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gc,this.stencilZFail=gc,this.stencilZPass=gc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ei().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ve().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Xs=class extends _i{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wo,Aa=new O,To=new O,Ao=new O,Eo=new ve,Ea=new ve,km=new wt,ql=new O,Ra=new O,Yl=new O,vp=new ve,Au=new ve,Mp=new ve,vr=class extends En{constructor(e=new Xs){if(super(),this.isSprite=!0,this.type="Sprite",wo===void 0){wo=new rn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qr(t,5);wo.setIndex([0,1,2,0,2,3]),wo.setAttribute("position",new yr(n,3,0,!1)),wo.setAttribute("uv",new yr(n,2,3,!1))}this.geometry=wo,this.material=e,this.center=new ve(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&_t('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),To.setFromMatrixScale(this.matrixWorld),km.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ao.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&To.multiplyScalar(-Ao.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Kl(ql.set(-.5,-.5,0),Ao,o,To,s,r),Kl(Ra.set(.5,-.5,0),Ao,o,To,s,r),Kl(Yl.set(.5,.5,0),Ao,o,To,s,r),vp.set(0,0),Au.set(1,0),Mp.set(1,1);let a=e.ray.intersectTriangle(ql,Ra,Yl,!1,Aa);if(a===null&&(Kl(Ra.set(-.5,.5,0),Ao,o,To,s,r),Au.set(0,1),a=e.ray.intersectTriangle(ql,Yl,Ra,!1,Aa),a===null))return;let l=e.ray.origin.distanceTo(Aa);l<e.near||l>e.far||t.push({distance:l,point:Aa.clone(),uv:Gs.getInterpolation(Aa,ql,Ra,Yl,vp,Au,Mp,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Kl(i,e,t,n,s,r){Eo.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ea.x=r*Eo.x-s*Eo.y,Ea.y=s*Eo.x+r*Eo.y):Ea.copy(Eo),i.copy(e),i.x+=Ea.x,i.y+=Ea.y,i.applyMatrix4(km)}var zs=new O,Eu=new O,Zl=new O,Jl=new O,Mr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zs.copy(this.origin).addScaledVector(this.direction,t),zs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Eu.copy(e).add(t).multiplyScalar(.5),Zl.copy(t).sub(e).normalize(),Jl.copy(this.origin).sub(Eu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Zl),a=Jl.dot(this.direction),l=-Jl.dot(Zl),c=Jl.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Eu).addScaledVector(Zl,d),f}intersectSphere(e,t){if(e.radius<0)return null;zs.subVectors(e.center,this.origin);let n=zs.dot(this.direction),s=zs.dot(zs)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zs)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,v=t.y-o.y,m=t.z-o.z,g=n.x-o.x,M=n.y-o.y,T=n.z-o.z,S=Math.abs(l),C=Math.abs(c),R=Math.abs(h),x,b,z,N,B,W,Z,P,Y,K,ee,oe;if(S>=C&&S>=R?(z=l,W=u,Y=p,oe=g,l>=0?(x=c,b=h,N=d,B=f,Z=v,P=m,K=M,ee=T):(x=h,b=c,N=f,B=d,Z=m,P=v,K=T,ee=M)):C>=R?(z=c,W=d,Y=v,oe=M,c>=0?(x=h,b=l,N=f,B=u,Z=m,P=p,K=T,ee=g):(x=l,b=h,N=u,B=f,Z=p,P=m,K=g,ee=T)):(z=h,W=f,Y=m,oe=T,h>=0?(x=l,b=c,N=u,B=d,Z=p,P=v,K=g,ee=M):(x=c,b=l,N=d,B=u,Z=v,P=p,K=M,ee=g)),z===0)return null;let ne=x/z,le=b/z,fe=1/z,Be=N-ne*W,Ve=B-le*W,ie=Z-ne*Y,Ce=P-le*Y,ze=K-ne*oe,Qe=ee-le*oe,ke=ze*Ce-Qe*ie,be=Be*Qe-Ve*ze,Tt=ie*Ve-Ce*Be;if(s){if(ke<0||be<0||Tt<0)return null}else if((ke<0||be<0||Tt<0)&&(ke>0||be>0||Tt>0))return null;let rt=ke+be+Tt;if(rt===0)return null;let Nt=fe*(ke*W+be*Y+Tt*oe);return(rt>0?Nt<0:Nt>0)?null:this.at(Nt/rt,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xn=class extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.combine=sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sp=new wt,kr=new Mr,jl=new Ri,bp=new O,$l=new O,Ql=new O,ec=new O,Ru=new O,tc=new O,wp=new O,nc=new O,et=class extends En{constructor(e=new rn,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){tc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ru.fromBufferAttribute(u,e),o?tc.addScaledVector(Ru,h):tc.addScaledVector(Ru.sub(t),h))}t.add(tc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jl.copy(n.boundingSphere),jl.applyMatrix4(r),kr.copy(e.ray).recast(e.near),!(jl.containsPoint(kr.origin)===!1&&(kr.intersectSphere(jl,bp)===null||kr.origin.distanceToSquared(bp)>(e.far-e.near)**2))&&(Sp.copy(r).invert(),kr.copy(e.ray).applyMatrix4(Sp),!(n.boundingBox!==null&&kr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,kr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){let m=d[p],g=o[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,C=T;S<C;S+=3){let R=a.getX(S),x=a.getX(S+1),b=a.getX(S+2);s=ic(this,g,e,n,c,h,u,R,x,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let M=a.getX(m),T=a.getX(m+1),S=a.getX(m+2);s=ic(this,o,e,n,c,h,u,M,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){let m=d[p],g=o[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,C=T;S<C;S+=3){let R=S,x=S+1,b=S+2;s=ic(this,g,e,n,c,h,u,R,x,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let M=m,T=m+1,S=m+2;s=ic(this,o,e,n,c,h,u,M,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function B0(i,e,t,n,s,r,o,a){let l;if(e.side===yi?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ts,a),l===null)return null;nc.copy(a),nc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(nc);return c<t.near||c>t.far?null:{distance:c,point:nc.clone(),object:i}}function ic(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,$l),i.getVertexPosition(l,Ql),i.getVertexPosition(c,ec);let h=B0(i,e,t,n,$l,Ql,ec,wp);if(h){let u=new O;Gs.getBarycoord(wp,$l,Ql,ec,u),s&&(h.uv=Gs.getInterpolatedAttribute(s,a,l,c,u,new ve)),r&&(h.uv1=Gs.getInterpolatedAttribute(r,a,l,c,u,new ve)),o&&(h.normal=Gs.getInterpolatedAttribute(o,a,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new O,materialIndex:0};Gs.getNormal($l,Ql,ec,d.normal),h.face=d,h.barycoord=u}return h}var Ca=new hn,Tp=new hn,Ap=new hn,z0=new hn,Ep=new wt,sc=new O,Cu=new Ri,Rp=new wt,Iu=new Mr,Wa=class extends et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ou,this.bindMatrix=new wt,this.bindMatrixInverse=new wt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sc),this.boundingBox.expandByPoint(sc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ri),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sc),this.boundingSphere.expandByPoint(sc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cu.copy(this.boundingSphere),Cu.applyMatrix4(s),e.ray.intersectsSphere(Cu)!==!1&&(Rp.copy(s).invert(),Iu.copy(e.ray).applyMatrix4(Rp),!(this.boundingBox!==null&&Iu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Iu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new hn,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ou?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tm?this.bindMatrixInverse.copy(this.bindMatrix).invert():at("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Tp.fromBufferAttribute(s.attributes.skinIndex,e),Ap.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ca.copy(t),t.set(0,0,0,0)):(Ca.set(t.x,t.y,t.z,1),t.set(0,0,0)),Ca.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Ap.getComponent(r);if(o!==0){let a=Tp.getComponent(r);Ep.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(z0.copy(Ca).applyMatrix4(Ep),o)}}return t.isVector4&&(t.w=Ca.w),t.applyMatrix4(this.bindMatrixInverse)}},ko=class extends En{constructor(){super(),this.isBone=!0,this.type="Bone"}},ds=class extends Gn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=kn,h=kn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Cp=new wt,k0=new wt,Xa=class i{constructor(e=[],t=[]){this.uuid=gs(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){at("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new wt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new wt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:k0;Cp.multiplyMatrices(a,t[r]),Cp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ds(t,e,e,Si,ci);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(at("Skeleton: No bone found with UUID:",r),o=new ko),this.bones.push(o),this.boneInverses.push(new wt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},qs=class extends Ft{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ro=new wt,Ip=new wt,rc=[],Pp=new gi,G0=new wt,Ia=new et,Pa=new Ri,qa=class extends et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,G0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ro),Pp.copy(e.boundingBox).applyMatrix4(Ro),this.boundingBox.union(Pp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ro),Pa.copy(e.boundingSphere).applyMatrix4(Ro),this.boundingSphere.union(Pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ia.geometry=this.geometry,Ia.material=this.material,Ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(n),e.ray.intersectsSphere(Pa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ro),Ip.multiplyMatrices(n,Ro),Ia.matrixWorld=Ip,Ia.raycast(e,rc);for(let o=0,a=rc.length;o<a;o++){let l=rc[o];l.instanceId=r,l.object=this,t.push(l)}rc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ds(new Float32Array(s*this.count),s,this.count,Qc,ci));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gr=new Ri,H0=new ve(.5,.5),oc=new O,Sr=class{constructor(e=new Ei,t=new Ei,n=new Ei,s=new Ei,r=new Ei,o=new Ei){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$i,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],v=r[9],m=r[10],g=r[11],M=r[12],T=r[13],S=r[14],C=r[15];if(s[0].setComponents(c-o,f-h,g-p,C-M).normalize(),s[1].setComponents(c+o,f+h,g+p,C+M).normalize(),s[2].setComponents(c+a,f+u,g+v,C+T).normalize(),s[3].setComponents(c-a,f-u,g-v,C-T).normalize(),n)s[4].setComponents(l,d,m,S).normalize(),s[5].setComponents(c-l,f-d,g-m,C-S).normalize();else if(s[4].setComponents(c-l,f-d,g-m,C-S).normalize(),t===$i)s[5].setComponents(c+l,f+d,g+m,C+S).normalize();else if(t===Do)s[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){Gr.center.set(0,0,0);let t=H0.distanceTo(e.center);return Gr.radius=.7071067811865476+t,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(oc.x=s.normal.x>0?e.max.x:e.min.x,oc.y=s.normal.y>0?e.max.y:e.min.y,oc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Lp=new wt,Ec=class i{constructor(){this.coordinateSystem=$i,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Lp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Sr),n[s].setFromProjectionMatrix(Lp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Sr),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Go=class extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Rc=new O,Cc=new O,Np=new wt,La=new Mr,ac=new Ri,Pu=new O,Dp=new O,Yr=class extends En{constructor(e=new rn,t=new Go){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Rc.fromBufferAttribute(t,s-1),Cc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Rc.distanceTo(Cc);e.setAttribute("lineDistance",new sn(n,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(s),ac.radius+=r,e.ray.intersectsSphere(ac)===!1)return;Np.copy(s).invert(),La.copy(e.ray).applyMatrix4(Np);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=c){let g=h.getX(v),M=h.getX(v+1),T=lc(this,e,La,l,g,M,v);T&&t.push(T)}if(this.isLineLoop){let v=h.getX(p-1),m=h.getX(f),g=lc(this,e,La,l,v,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=c){let g=lc(this,e,La,l,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){let v=lc(this,e,La,l,p-1,f,p-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lc(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Rc.fromBufferAttribute(a,s),Cc.fromBufferAttribute(a,r),t.distanceSqToSegment(Rc,Cc,Pu,Dp)>n)return;Pu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Pu);if(!(c<e.near||c>e.far))return{distance:c,point:Dp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Up=new O,Fp=new O,Ya=class extends Yr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Up.fromBufferAttribute(t,s),Fp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Up.distanceTo(Fp);e.setAttribute("lineDistance",new sn(n,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ka=class extends Yr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ho=class extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Op=new wt,Hu=new Mr,cc=new Ri,hc=new O,br=class extends En{constructor(e=new rn,t=new Ho){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(s),cc.radius+=r,e.ray.intersectsSphere(cc)===!1)return;Op.copy(s).invert(),Hu.copy(e.ray).applyMatrix4(Op);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,v=f;p<v;p++){let m=c.getX(p);hc.fromBufferAttribute(u,m),Bp(hc,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,v=f;p<v;p++)hc.fromBufferAttribute(u,p),Bp(hc,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bp(i,e,t,n,s,r,o){let a=Hu.distanceSqToPoint(i);if(a<t){let l=new O;Hu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Za=class extends Gn{constructor(e=[],t=no,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xi=class extends Gn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ys=class extends Gn{constructor(e,t,n=ms,s,r,o,a=kn,l=kn,c,h=Ws,u=1){if(h!==Ws&&h!==tr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ja=class extends Ys{constructor(e,t=ms,n=no,s,r,o=kn,a=kn,l,c=Ws){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ja=class extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ai=class i extends rn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(u,2));function p(v,m,g,M,T,S,C,R,x,b,z){let N=S/x,B=C/b,W=S/2,Z=C/2,P=R/2,Y=x+1,K=b+1,ee=0,oe=0,ne=new O;for(let le=0;le<K;le++){let fe=le*B-Z;for(let Be=0;Be<Y;Be++){let Ve=Be*N-W;ne[v]=Ve*M,ne[m]=fe*T,ne[g]=P,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[m]=0,ne[g]=R>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Be/x),u.push(1-le/b),ee+=1}}for(let le=0;le<b;le++)for(let fe=0;fe<x;fe++){let Be=d+fe+Y*le,Ve=d+fe+Y*(le+1),ie=d+(fe+1)+Y*(le+1),Ce=d+(fe+1)+Y*le;l.push(Be,Ve,Ce),l.push(Ve,ie,Ce),oe+=6}a.addGroup(f,oe,z),f+=oe,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Vo=class i extends rn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new O,h=new ve;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new sn(o,3)),this.setAttribute("normal",new sn(a,3)),this.setAttribute("uv",new sn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Un=class i extends rn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,v=[],m=n/2,g=0;M(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new sn(u,3)),this.setAttribute("normal",new sn(d,3)),this.setAttribute("uv",new sn(f,2));function M(){let S=new O,C=new O,R=0,x=(t-e)/n;for(let b=0;b<=r;b++){let z=[],N=b/r,B=N*(t-e)+e;for(let W=0;W<=s;W++){let Z=W/s,P=Z*l+a,Y=Math.sin(P),K=Math.cos(P);C.x=B*Y,C.y=-N*n+m,C.z=B*K,u.push(C.x,C.y,C.z),S.set(Y,x,K).normalize(),d.push(S.x,S.y,S.z),f.push(Z,1-N),z.push(p++)}v.push(z)}for(let b=0;b<s;b++)for(let z=0;z<r;z++){let N=v[z][b],B=v[z+1][b],W=v[z+1][b+1],Z=v[z][b+1];(e>0||z!==0)&&(h.push(N,B,Z),R+=3),(t>0||z!==r-1)&&(h.push(B,W,Z),R+=3)}c.addGroup(g,R,0),g+=R}function T(S){let C=p,R=new ve,x=new O,b=0,z=S===!0?e:t,N=S===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*N,0),d.push(0,N,0),f.push(.5,.5),p++;let B=p;for(let W=0;W<=s;W++){let P=W/s*l+a,Y=Math.cos(P),K=Math.sin(P);x.x=z*K,x.y=m*N,x.z=z*Y,u.push(x.x,x.y,x.z),d.push(0,N,0),R.x=Y*.5+.5,R.y=K*.5*N+.5,f.push(R.x,R.y),p++}for(let W=0;W<s;W++){let Z=C+W,P=B+W;S===!0?h.push(P,P+1,Z):h.push(P+1,P,Z),b+=3}c.addGroup(g,b,S===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){at("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ve:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new O,s=[],r=[],o=[],a=new O,l=new wt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(zt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Wo=class extends li{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ve){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ic=class extends Wo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Rd(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var zp=new O,kp=new O,Lu=new Rd,Nu=new Rd,Du=new Rd,Pc=class extends li{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(kp.subVectors(s[0],s[1]).add(s[0]),c=kp);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(zp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),Lu.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,v,m),Nu.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,v,m),Du.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(Lu.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Nu.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Du.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Lu.calc(l),Nu.calc(l),Du.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Gp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function V0(i,e){let t=1-i;return t*t*e}function W0(i,e){return 2*(1-i)*i*e}function X0(i,e){return i*i*e}function Oa(i,e,t,n){return V0(i,e)+W0(i,t)+X0(i,n)}function q0(i,e){let t=1-i;return t*t*t*e}function Y0(i,e){let t=1-i;return 3*t*t*i*e}function K0(i,e){return 3*(1-i)*i*i*e}function Z0(i,e){return i*i*i*e}function Ba(i,e,t,n,s){return q0(i,e)+Y0(i,t)+K0(i,n)+Z0(i,s)}var $a=class extends li{constructor(e=new ve,t=new ve,n=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ba(e,s.x,r.x,o.x,a.x),Ba(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lc=class extends li{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ba(e,s.x,r.x,o.x,a.x),Ba(e,s.y,r.y,o.y,a.y),Ba(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qa=class extends li{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nc=class extends li{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},el=class extends li{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Oa(e,s.x,r.x,o.x),Oa(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tl=class extends li{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Oa(e,s.x,r.x,o.x),Oa(e,s.y,r.y,o.y),Oa(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nl=class extends li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Gp(a,l.x,c.x,h.x,u.x),Gp(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ve().fromArray(s))}return this}},Dc=Object.freeze({__proto__:null,ArcCurve:Ic,CatmullRomCurve3:Pc,CubicBezierCurve:$a,CubicBezierCurve3:Lc,EllipseCurve:Wo,LineCurve:Qa,LineCurve3:Nc,QuadraticBezierCurve:el,QuadraticBezierCurve3:tl,SplineCurve:nl}),Uc=class extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Dc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},il=class extends Uc{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Qa(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new el(this.currentPoint.clone(),new ve(e,t),new ve(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new $a(this.currentPoint.clone(),new ve(e,t),new ve(n,s),new ve(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new nl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Wo(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},zi=class extends il{constructor(e){super(e),this.uuid=gs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new il().fromJSON(s))}return this}};function J0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Gm(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=t_(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,u=l;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return sl(r,o,t,a,l,c,0),o}function Gm(i,e,t,n,s){let r;if(s===d_(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Hp(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Hp(o/n|0,i[o],i[o+1],r);return r&&Xo(r,r.next)&&(ol(r),r=r.next),r}function Kr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Xo(t,t.next)||Dn(t.prev,t,t.next)===0)){if(ol(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function sl(i,e,t,n,s,r,o){if(!i)return;!o&&r&&o_(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?$0(i,n,s,r):j0(i)){e.push(l.i,i.i,c.i),ol(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Q0(Kr(i),e),sl(i,e,t,n,s,r,2)):o===2&&e_(i,e,t,n,s,r):sl(Kr(i),e,t,n,s,r,1);break}}}function j0(i){let e=i.prev,t=i,n=i.next;if(Dn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Na(s,a,r,l,o,c,p.x,p.y)&&Dn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function $0(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Dn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),v=Math.max(a,l,c),m=Math.max(h,u,d),g=Vu(f,p,e,t,n),M=Vu(v,m,e,t,n),T=i.prevZ,S=i.nextZ;for(;T&&T.z>=g&&S&&S.z<=M;){if(T.x>=f&&T.x<=v&&T.y>=p&&T.y<=m&&T!==s&&T!==o&&Na(a,h,l,u,c,d,T.x,T.y)&&Dn(T.prev,T,T.next)>=0||(T=T.prevZ,S.x>=f&&S.x<=v&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&Na(a,h,l,u,c,d,S.x,S.y)&&Dn(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;T&&T.z>=g;){if(T.x>=f&&T.x<=v&&T.y>=p&&T.y<=m&&T!==s&&T!==o&&Na(a,h,l,u,c,d,T.x,T.y)&&Dn(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;S&&S.z<=M;){if(S.x>=f&&S.x<=v&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&Na(a,h,l,u,c,d,S.x,S.y)&&Dn(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Q0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Xo(n,s)&&Vm(n,t,t.next,s)&&rl(n,s)&&rl(s,n)&&(e.push(n.i,t.i,s.i),ol(t),ol(t.next),t=i=s),t=t.next}while(t!==i);return Kr(t)}function e_(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&c_(o,a)){let l=Wm(o,a);o=Kr(o,o.next),l=Kr(l,l.next),sl(o,e,t,n,s,r,0),sl(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function t_(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Gm(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(l_(c))}s.sort(n_);for(let r=0;r<s.length;r++)t=i_(s[r],t);return t}function n_(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function i_(i,e){let t=s_(i,e);if(!t)return e;let n=Wm(t,i);return Kr(n,n.next),Kr(t,t.next)}function s_(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Xo(i,t))return t;do{if(Xo(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Hm(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);rl(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&r_(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function r_(i,e){return Dn(i.prev,i,e.prev)<0&&Dn(e.next,i,i.next)<0}function o_(i,e,t,n){let s=i;do s.z===0&&(s.z=Vu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,a_(s)}function a_(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Vu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function l_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Hm(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Na(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Hm(i,e,t,n,s,r,o,a)}function c_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!h_(i,e)&&(rl(i,e)&&rl(e,i)&&u_(i,e)&&(Dn(i.prev,i,e.prev)||Dn(i,e.prev,e))||Xo(i,e)&&Dn(i.prev,i,i.next)>0&&Dn(e.prev,e,e.next)>0)}function Dn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Xo(i,e){return i.x===e.x&&i.y===e.y}function Vm(i,e,t,n){let s=dc(Dn(i,e,t)),r=dc(Dn(i,e,n)),o=dc(Dn(t,n,i)),a=dc(Dn(t,n,e));return!!(s!==r&&o!==a||s===0&&uc(i,t,e)||r===0&&uc(i,n,e)||o===0&&uc(t,i,n)||a===0&&uc(t,e,n))}function uc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function dc(i){return i>0?1:i<0?-1:0}function h_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Vm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function rl(i,e){return Dn(i.prev,i,i.next)<0?Dn(i,e,i.next)>=0&&Dn(i,i.prev,e)>=0:Dn(i,e,i.prev)<0||Dn(i,i.next,e)<0}function u_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Wm(i,e){let t=Wu(i.i,i.x,i.y),n=Wu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Hp(i,e,t,n){let s=Wu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ol(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function d_(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Xu=class{static triangulate(e,t,n=2){return J0(e,t,n)}},vs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Vp(e),Wp(n,e);let o=e.length;t.forEach(Vp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Wp(n,t[l]);let a=Xu.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Vp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Wp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var wr=class i extends rn{constructor(e=new zi([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new sn(s,3)),this.setAttribute("uv",new sn(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:f_,T,S=!1,C,R,x,b;if(g){T=g.getSpacedPoints(h),S=!0,d=!1;let pe=g.isCatmullRomCurve3?g.closed:!1;C=g.computeFrenetFrames(h,pe),R=new O,x=new O,b=new O}d||(m=0,f=0,p=0,v=0);let z=a.extractPoints(c),N=z.shape,B=z.holes;if(!vs.isClockWise(N)){N=N.reverse();for(let pe=0,Ue=B.length;pe<Ue;pe++){let de=B[pe];vs.isClockWise(de)&&(B[pe]=de.reverse())}}function Z(pe){let de=10000000000000001e-36,We=pe[0];for(let De=1;De<=pe.length;De++){let ut=De%pe.length,tt=pe[ut],Rt=tt.x-We.x,nt=tt.y-We.y,gt=Rt*Rt+nt*nt,H=Math.max(Math.abs(tt.x),Math.abs(tt.y),Math.abs(We.x),Math.abs(We.y)),_n=de*H*H;if(gt<=_n){pe.splice(ut,1),De--;continue}We=tt}}Z(N),B.forEach(Z);let P=B.length,Y=N;for(let pe=0;pe<P;pe++){let Ue=B[pe];N=N.concat(Ue)}function K(pe,Ue,de){return Ue||_t("ExtrudeGeometry: vec does not exist"),pe.clone().addScaledVector(Ue,de)}let ee=N.length;function oe(pe,Ue,de){let We,De,ut,tt=pe.x-Ue.x,Rt=pe.y-Ue.y,nt=de.x-pe.x,gt=de.y-pe.y,H=tt*tt+Rt*Rt,_n=tt*gt-Rt*nt;if(Math.abs(_n)>Number.EPSILON){let mt=Math.sqrt(H),Mt=Math.sqrt(nt*nt+gt*gt),Re=Ue.x-Rt/mt,un=Ue.y+tt/mt,st=de.x-gt/Mt,ft=de.y+nt/Mt,I=((st-Re)*gt-(ft-un)*nt)/(tt*gt-Rt*nt);We=Re+tt*I-pe.x,De=un+Rt*I-pe.y;let w=We*We+De*De;if(w<=2)return new ve(We,De);ut=Math.sqrt(w/2)}else{let mt=!1;tt>Number.EPSILON?nt>Number.EPSILON&&(mt=!0):tt<-Number.EPSILON?nt<-Number.EPSILON&&(mt=!0):Math.sign(Rt)===Math.sign(gt)&&(mt=!0),mt?(We=-Rt,De=tt,ut=Math.sqrt(H)):(We=tt,De=Rt,ut=Math.sqrt(H/2))}return new ve(We/ut,De/ut)}let ne=[];for(let pe=0,Ue=Y.length,de=Ue-1,We=pe+1;pe<Ue;pe++,de++,We++)de===Ue&&(de=0),We===Ue&&(We=0),ne[pe]=oe(Y[pe],Y[de],Y[We]);let le=[],fe,Be=ne.concat();for(let pe=0,Ue=P;pe<Ue;pe++){let de=B[pe];fe=[];for(let We=0,De=de.length,ut=De-1,tt=We+1;We<De;We++,ut++,tt++)ut===De&&(ut=0),tt===De&&(tt=0),fe[We]=oe(de[We],de[ut],de[tt]);le.push(fe),Be=Be.concat(fe)}let Ve;if(m===0)Ve=vs.triangulateShape(Y,B);else{let pe=[],Ue=[];for(let de=0;de<m;de++){let We=de/m,De=f*Math.cos(We*Math.PI/2),ut=p*Math.sin(We*Math.PI/2)+v;for(let tt=0,Rt=Y.length;tt<Rt;tt++){let nt=K(Y[tt],ne[tt],ut);be(nt.x,nt.y,-De),We===0&&pe.push(nt)}for(let tt=0,Rt=P;tt<Rt;tt++){let nt=B[tt];fe=le[tt];let gt=[];for(let H=0,_n=nt.length;H<_n;H++){let mt=K(nt[H],fe[H],ut);be(mt.x,mt.y,-De),We===0&&gt.push(mt)}We===0&&Ue.push(gt)}}Ve=vs.triangulateShape(pe,Ue)}let ie=Ve.length,Ce=p+v;for(let pe=0;pe<ee;pe++){let Ue=d?K(N[pe],Be[pe],Ce):N[pe];S?(x.copy(C.normals[0]).multiplyScalar(Ue.x),R.copy(C.binormals[0]).multiplyScalar(Ue.y),b.copy(T[0]).add(x).add(R),be(b.x,b.y,b.z)):be(Ue.x,Ue.y,0)}for(let pe=1;pe<=h;pe++)for(let Ue=0;Ue<ee;Ue++){let de=d?K(N[Ue],Be[Ue],Ce):N[Ue];S?(x.copy(C.normals[pe]).multiplyScalar(de.x),R.copy(C.binormals[pe]).multiplyScalar(de.y),b.copy(T[pe]).add(x).add(R),be(b.x,b.y,b.z)):be(de.x,de.y,u/h*pe)}for(let pe=m-1;pe>=0;pe--){let Ue=pe/m,de=f*Math.cos(Ue*Math.PI/2),We=p*Math.sin(Ue*Math.PI/2)+v;for(let De=0,ut=Y.length;De<ut;De++){let tt=K(Y[De],ne[De],We);be(tt.x,tt.y,u+de)}for(let De=0,ut=B.length;De<ut;De++){let tt=B[De];fe=le[De];for(let Rt=0,nt=tt.length;Rt<nt;Rt++){let gt=K(tt[Rt],fe[Rt],We);S?be(gt.x,gt.y+T[h-1].y,T[h-1].x+de):be(gt.x,gt.y,u+de)}}}ze(),Qe();function ze(){let pe=s.length/3;if(d){let Ue=0,de=ee*Ue;for(let We=0;We<ie;We++){let De=Ve[We];Tt(De[2]+de,De[1]+de,De[0]+de)}Ue=h+m*2,de=ee*Ue;for(let We=0;We<ie;We++){let De=Ve[We];Tt(De[0]+de,De[1]+de,De[2]+de)}}else{for(let Ue=0;Ue<ie;Ue++){let de=Ve[Ue];Tt(de[2],de[1],de[0])}for(let Ue=0;Ue<ie;Ue++){let de=Ve[Ue];Tt(de[0]+ee*h,de[1]+ee*h,de[2]+ee*h)}}n.addGroup(pe,s.length/3-pe,0)}function Qe(){let pe=s.length/3,Ue=0;ke(Y,Ue),Ue+=Y.length;for(let de=0,We=B.length;de<We;de++){let De=B[de];ke(De,Ue),Ue+=De.length}n.addGroup(pe,s.length/3-pe,1)}function ke(pe,Ue){let de=pe.length;for(;--de>=0;){let We=de,De=de-1;De<0&&(De=pe.length-1);for(let ut=0,tt=h+m*2;ut<tt;ut++){let Rt=ee*ut,nt=ee*(ut+1),gt=Ue+We+Rt,H=Ue+De+Rt,_n=Ue+De+nt,mt=Ue+We+nt;rt(gt,H,_n,mt)}}}function be(pe,Ue,de){l.push(pe),l.push(Ue),l.push(de)}function Tt(pe,Ue,de){Nt(pe),Nt(Ue),Nt(de);let We=s.length/3,De=M.generateTopUV(n,s,We-3,We-2,We-1);Et(De[0]),Et(De[1]),Et(De[2])}function rt(pe,Ue,de,We){Nt(pe),Nt(Ue),Nt(We),Nt(Ue),Nt(de),Nt(We);let De=s.length/3,ut=M.generateSideWallUV(n,s,De-6,De-3,De-2,De-1);Et(ut[0]),Et(ut[1]),Et(ut[3]),Et(ut[1]),Et(ut[2]),Et(ut[3])}function Nt(pe){s.push(l[pe*3+0]),s.push(l[pe*3+1]),s.push(l[pe*3+2])}function Et(pe){r.push(pe.x),r.push(pe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return p_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Dc[s.type]().fromJSON(s)),new i(n,e.options)}},f_={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ve(r,o),new ve(a,l),new ve(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],v=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ve(o,1-l),new ve(c,1-u),new ve(d,1-p),new ve(v,1-g)]:[new ve(a,1-l),new ve(h,1-u),new ve(f,1-p),new ve(m,1-g)]}};function p_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Zr=class i extends rn{constructor(e=[new ve(0,-.5),new ve(.5,0),new ve(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=zt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new O,d=new ve,f=new O,p=new O,v=new O,m=0,g=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,f.x=g*1,f.y=-m,f.z=g*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:v.normalize(),l.push(v.x,v.y,v.z);break;default:m=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let M=0;M<=t;M++){let T=n+M*h*s,S=Math.sin(T),C=Math.cos(T);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*S,u.y=e[R].y,u.z=e[R].x*C,o.push(u.x,u.y,u.z),d.x=M/t,d.y=R/(e.length-1),a.push(d.x,d.y);let x=l[3*R+0]*S,b=l[3*R+1],z=l[3*R+0]*C;c.push(x,b,z)}}for(let M=0;M<t;M++)for(let T=0;T<e.length-1;T++){let S=T+M*e.length,C=S,R=S+e.length,x=S+e.length+1,b=S+1;r.push(C,R,b),r.push(x,b,R)}this.setIndex(r),this.setAttribute("position",new sn(o,3)),this.setAttribute("uv",new sn(a,2)),this.setAttribute("normal",new sn(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Dt=class i extends rn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],v=[],m=[];for(let g=0;g<h;g++){let M=g*d-o;for(let T=0;T<c;T++){let S=T*u-r;p.push(S,-M,0),v.push(0,0,1),m.push(T/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let T=M+c*g,S=M+c*(g+1),C=M+1+c*(g+1),R=M+1+c*g;f.push(T,S,R),f.push(S,C,R)}this.setIndex(f),this.setAttribute("position",new sn(p,3)),this.setAttribute("normal",new sn(v,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var qo=class i extends rn{constructor(e=new zi([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new sn(s,3)),this.setAttribute("normal",new sn(r,3)),this.setAttribute("uv",new sn(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,p=d.holes;vs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let M=p[m];vs.isClockWise(M)===!0&&(p[m]=M.reverse())}let v=vs.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let M=p[m];f=f.concat(M)}for(let m=0,g=f.length;m<g;m++){let M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,g=v.length;m<g;m++){let M=v[m],T=M[0]+u,S=M[1]+u,C=M[2]+u;n.push(T,S,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return m_(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function m_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var fs=class i extends rn{constructor(e=new tl(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new O,l=new O,c=new ve,h=new O,u=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new sn(u,3)),this.setAttribute("normal",new sn(d,3)),this.setAttribute("uv",new sn(f,2));function v(){for(let T=0;T<t;T++)m(T);m(r===!1?t:0),M(),g()}function m(T){h=e.getPointAt(T/t,h);let S=o.normals[T],C=o.binormals[T];for(let R=0;R<=s;R++){let x=R/s*Math.PI*2,b=Math.sin(x),z=-Math.cos(x);l.x=z*S.x+b*C.x,l.y=z*S.y+b*C.y,l.z=z*S.z+b*C.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let T=1;T<=t;T++)for(let S=1;S<=s;S++){let C=(s+1)*(T-1)+(S-1),R=(s+1)*T+(S-1),x=(s+1)*T+S,b=(s+1)*(T-1)+S;p.push(C,R,b),p.push(R,x,b)}}function M(){for(let T=0;T<=t;T++)for(let S=0;S<=s;S++)c.x=T/t,c.y=S/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Dc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ro(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Xp(s))s.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Xp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function hi(i){let e={};for(let t=0;t<i.length;t++){let n=ro(i[t]);for(let s in n)e[s]=n[s]}return e}function Xp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function g_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Cd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Wt.workingColorSpace}var Xm={clone:ro,merge:hi},__=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ki=class extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=__,this.fragmentShader=x_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=g_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new qe().setHex(s.value);break;case"v2":this.uniforms[n].value=new ve().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new hn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new wt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fc=class extends ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},lt=class extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nh,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},mn=class extends lt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Hr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Hr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Yo=class extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oc=class extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function mr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Da(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function y_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function qp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function v_(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var bs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Bc=class extends bs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zu,endingEnd:zu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ku:r=e,a=2*t-n;break;case Gu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ku:o=e,l=2*n-t;break;case Gu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),v=p*p,m=v*p,g=-d*m+2*d*v-d*p,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*p+1,T=(-1-f)*m+(1.5+f)*v+.5*p,S=f*m-f*v;for(let C=0;C!==a;++C)r[C]=g*o[h+C]+M*o[c+C]+T*o[l+C]+S*o[u+C];return r}},zc=class extends bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},kc=class extends bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gc=class extends bs{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(s-t),v=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*v+o[l+m]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let v=o[c+p],m=o[l+p],g=f*d+p*2,M=u[g],T=u[g+1],S=e*d+p*2,C=h[S],R=h[S+1],x=S_(n,t,M,C,s);r[p]=qm(x,v,T,R,m)}return r}};function qm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function M_(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function S_(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=qm(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=M_(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Ci=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mr(t,this.TimeBufferType),this.values=mr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:mr(e.times,Array),values:mr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Da(e.settings)&&(n.settings={inTangents:mr(e.settings.inTangents,Array),outTangents:mr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Gc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Vr:t=this.InterpolantFactoryMethodDiscrete;break;case Wr:t=this.InterpolantFactoryMethodLinear;break;case mc:t=this.InterpolantFactoryMethodSmooth;break;case Bu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return at("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return Wr;case this.InterpolantFactoryMethodSmooth:return mc;case this.InterpolantFactoryMethodBezier:return Bu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Da(this.settings)&&(Yp(this.settings.inTangents,e),Yp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Da(this.settings)&&(Kp(this.settings.inTangents,e),Kp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(_t("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(_t("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){_t("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){_t("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&i0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){_t("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===mc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let v=t[u+p];if(v!==t[d+p]||v!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Da(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Kp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Ci.prototype.ValueTypeName="";Ci.prototype.TimeBufferType=Float32Array;Ci.prototype.ValueBufferType=Float32Array;Ci.prototype.DefaultInterpolation=Wr;var Ks=class extends Ci{constructor(e,t,n){super(e,t,n)}};Ks.prototype.ValueTypeName="bool";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Vr;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}};al.prototype.ValueTypeName="color";var Zs=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}};Zs.prototype.ValueTypeName="number";var Hc=class extends bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)mi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Js=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}};Js.prototype.ValueTypeName="quaternion";Js.prototype.InterpolantFactoryMethodSmooth=void 0;var js=class extends Ci{constructor(e,t,n){super(e,t,n)}};js.prototype.ValueTypeName="string";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=Vr;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;var Tr=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}};Tr.prototype.ValueTypeName="vector";var ll=class{constructor(e="",t=-1,n=[],s=Am){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=gs(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(w_(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Ci.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=y_(l);l=qp(l,1,h),c=qp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Zs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function b_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zs;case"vector":case"vector2":case"vector3":case"vector4":return Tr;case"color":return al;case"quaternion":return Js;case"bool":case"boolean":return Ks;case"string":return js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function w_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=b_(i.type);if(i.times===void 0){let n=[],s=[];v_(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Da(i.settings)&&(t.settings={inTangents:mr(i.settings.inTangents,Float32Array),outTangents:mr(i.settings.outTangents,Float32Array)}),t}var Ms={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Zp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Zp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Zp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Vc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ym=new Vc,ps=class{constructor(e){this.manager=e!==void 0?e:Ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ps.DEFAULT_MATERIAL_NAME="__DEFAULT";var ks={},qu=class extends Error{constructor(e,t){super(e),this.response=t}},Jr=class extends ps{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ms.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ks[e]!==void 0){ks[e].push({onLoad:t,onProgress:n,onError:s});return}ks[e]=[],ks[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&at("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ks[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,v=0,m=new ReadableStream({start(g){M();function M(){u.read().then(({done:T,value:S})=>{if(T)g.close();else{v+=S.byteLength;let C=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let R=0,x=h.length;R<x;R++){let b=h[R];b.onProgress&&b.onProgress(C)}g.enqueue(S),M()}},T=>{g.error(T)})}}});return new Response(m)}else throw new qu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Ms.add(`file:${e}`,c);let h=ks[e];delete ks[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=ks[e];if(h===void 0)throw this.manager.itemError(e),c;delete ks[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Co=new WeakMap,Wc=class extends ps{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ms.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Co.get(o);u===void 0&&(u=[],Co.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Uo("img");function l(){h(),t&&t(this);let u=Co.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Co.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Ms.remove(`image:${e}`);let d=Co.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}Co.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ms.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var cl=class extends ps{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new ds,a=new Jr(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){s!==void 0?s(h):_t(h);return}r._applyTexData(o,c),t&&t(o,c)},n,s),o}createDataTexture(e){let t=new ds;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:oi,e.wrapT=t.wrapT!==void 0?t.wrapT:oi,e.magFilter=t.magFilter!==void 0?t.magFilter:Sn,e.minFilter=t.minFilter!==void 0?t.minFilter:Sn,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=vi),t.mipmapCount===1&&(e.minFilter=Sn),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},jr=class extends ps{constructor(e){super(e)}load(e,t,n,s){let r=new Gn,o=new Wc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},$r=class extends En{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ko=class extends $r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Uu=new wt,Jp=new O,jp=new O,Zo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sr,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Jp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jp),jp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Uu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Uu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Do||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},fc=new O,pc=new mi,ys=new O,hl=class extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fc,pc,ys),ys.x===1&&ys.y===1&&ys.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fc,pc,ys.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fc,pc,ys),ys.x===1&&ys.y===1&&ys.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fc,pc,ys.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},pr=new O,$p=new ve,Qp=new ve,zn=class extends hl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,t){return this.getViewBounds(e,$p,Qp),t.subVectors(Qp,$p)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ua*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Yu=class extends Zo{constructor(){super(new zn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Xr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},$s=class extends $r{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Yu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ku=class extends Zo{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0}},Qs=class extends $r{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ku}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Qr=class extends hl{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zu=class extends Zo{constructor(){super(new Qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ws=class extends $r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new Zu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var er=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Fu=new WeakMap,ul=class extends ps{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&at("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&at("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ms.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Fu.has(o)===!0?(s&&s(Fu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ms.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Fu.set(l,c),Ms.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ms.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Io=-90,Po=1,Jo=class extends En{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zn(Io,Po,e,t);s.layers=this.layers,this.add(s);let r=new zn(Io,Po,e,t);r.layers=this.layers,this.add(r);let o=new zn(Io,Po,e,t);o.layers=this.layers,this.add(o);let a=new zn(Io,Po,e,t);a.layers=this.layers,this.add(a);let l=new zn(Io,Po,e,t);l.layers=this.layers,this.add(l);let c=new zn(Io,Po,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===$i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Do)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Xc=class extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Id="\\[\\]\\.:\\/",T_=new RegExp("["+Id+"]","g"),Pd="[^"+Id+"]",A_="[^"+Id.replace("\\.","")+"]",E_=/((?:WC+[\/:])*)/.source.replace("WC",Pd),R_=/(WCOD+)?/.source.replace("WCOD",A_),C_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pd),I_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pd),P_=new RegExp("^"+E_+R_+C_+I_+"$"),L_=["material","materials","bones","map"],Ju=class{constructor(e,t,n){let s=n||Mn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(T_,"")}static parseTrackName(e){let t=P_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);L_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){at("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){_t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){_t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){_t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){_t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){_t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){_t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){_t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;_t("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){_t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){_t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mn.Composite=Ju;Mn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mn.prototype.GetterByBindingType=[Mn.prototype._getValue_direct,Mn.prototype._getValue_array,Mn.prototype._getValue_arrayElement,Mn.prototype._getValue_toArray];Mn.prototype.SetterByBindingTypeAndVersioning=[[Mn.prototype._setValue_direct,Mn.prototype._setValue_direct_setNeedsUpdate,Mn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_array,Mn.prototype._setValue_array_setNeedsUpdate,Mn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_arrayElement,Mn.prototype._setValue_arrayElement_setNeedsUpdate,Mn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_fromArray,Mn.prototype._setValue_fromArray_setNeedsUpdate,Mn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var WS=new Float32Array(1);var em=new wt,jo=class{constructor(e,t,n=0,s=1/0){this.ray=new Mr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):_t("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return em.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(em),this}intersectObject(e,t=!0,n=[]){return ju(e,this,n,t),n.sort(tm),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ju(e[s],this,n,t);return n.sort(tm),n}};function tm(i,e){return i.distance-e.distance}function ju(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)ju(r[o],e,t,!0)}}var Od=class Od{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Od.prototype.isMatrix2=!0;var $u=Od;function Ld(i,e,t,n){let s=N_(n);switch(t){case gd:return i*e;case Qc:return i*e/s.components*s.byteLength;case eh:return i*e/s.components*s.byteLength;case Er:return i*e*2/s.components*s.byteLength;case th:return i*e*2/s.components*s.byteLength;case _d:return i*e*3/s.components*s.byteLength;case Si:return i*e*4/s.components*s.byteLength;case nh:return i*e*4/s.components*s.byteLength;case dl:case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pl:case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sh:case oh:return Math.max(i,16)*Math.max(e,8)/4;case ih:case rh:return Math.max(i,8)*Math.max(e,8)/2;case ah:case lh:case hh:case uh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ch:case gl:case dh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case mh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case gh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _h:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case yh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Th:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Eh:case Rh:case Ch:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ih:case Ph:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _l:case Lh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function N_(i){switch(i){case Pi:case dd:return{byteLength:1,components:1};case ia:case fd:case Mi:return{byteLength:2,components:1};case jc:case $c:return{byteLength:2,components:4};case ms:case Jc:case ci:return{byteLength:4,components:1};case pd:case md:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function mg(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function U_(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var F_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,B_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,V_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,X_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,q_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Z_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,J_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ox=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ax=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",dx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,mx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ax=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ex=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Rx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ix=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ox=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zx=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$x=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ey=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ry=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ay=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ly=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,uy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,py=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,my=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_y=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,My=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,by=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ty=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ey=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ry=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Iy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Uy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,By=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ky=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ky=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$y=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ev=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ov=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,av=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:F_,alphahash_pars_fragment:O_,alphamap_fragment:B_,alphamap_pars_fragment:z_,alphatest_fragment:k_,alphatest_pars_fragment:G_,aomap_fragment:H_,aomap_pars_fragment:V_,batching_pars_vertex:W_,batching_vertex:X_,begin_vertex:q_,beginnormal_vertex:Y_,bsdfs:K_,iridescence_fragment:Z_,bumpmap_pars_fragment:J_,clipping_planes_fragment:j_,clipping_planes_pars_fragment:$_,clipping_planes_pars_vertex:Q_,clipping_planes_vertex:ex,color_fragment:tx,color_pars_fragment:nx,color_pars_vertex:ix,color_vertex:sx,common:rx,defaultnormal_vertex:ox,displacementmap_pars_vertex:ax,displacementmap_vertex:lx,emissivemap_fragment:cx,emissivemap_pars_fragment:hx,colorspace_fragment:ux,colorspace_pars_fragment:dx,envmap_fragment:fx,envmap_common_pars_fragment:px,envmap_pars_fragment:mx,envmap_pars_vertex:gx,envmap_physical_pars_fragment:Ex,envmap_vertex:_x,fog_vertex:xx,fog_pars_vertex:yx,fog_fragment:vx,fog_pars_fragment:Mx,gradientmap_pars_fragment:Sx,lightmap_pars_fragment:bx,lights_lambert_fragment:wx,lights_lambert_pars_fragment:Tx,lights_pars_begin:Ax,lights_toon_fragment:Rx,lights_toon_pars_fragment:Cx,lights_phong_fragment:Ix,lights_phong_pars_fragment:Px,lights_physical_fragment:Lx,lights_physical_pars_fragment:Nx,lights_fragment_begin:Dx,lights_fragment_maps:Ux,lights_fragment_end:Fx,lightprobes_pars_fragment:Ox,logdepthbuf_fragment:Bx,logdepthbuf_pars_fragment:zx,logdepthbuf_pars_vertex:kx,logdepthbuf_vertex:Gx,map_fragment:Hx,map_pars_fragment:Vx,map_particle_fragment:Wx,map_particle_pars_fragment:Xx,metalnessmap_fragment:qx,metalnessmap_pars_fragment:Yx,morphinstance_vertex:Kx,morphcolor_vertex:Zx,morphnormal_vertex:Jx,morphtarget_pars_vertex:jx,morphtarget_vertex:$x,normal_fragment_begin:Qx,normal_fragment_maps:ey,normal_pars_fragment:ty,normal_pars_vertex:ny,normal_vertex:iy,normalmap_pars_fragment:sy,clearcoat_normal_fragment_begin:ry,clearcoat_normal_fragment_maps:oy,clearcoat_pars_fragment:ay,iridescence_pars_fragment:ly,opaque_fragment:cy,packing:hy,premultiplied_alpha_fragment:uy,project_vertex:dy,dithering_fragment:fy,dithering_pars_fragment:py,roughnessmap_fragment:my,roughnessmap_pars_fragment:gy,shadowmap_pars_fragment:_y,shadowmap_pars_vertex:xy,shadowmap_vertex:yy,shadowmask_pars_fragment:vy,skinbase_vertex:My,skinning_pars_vertex:Sy,skinning_vertex:by,skinnormal_vertex:wy,specularmap_fragment:Ty,specularmap_pars_fragment:Ay,tonemapping_fragment:Ey,tonemapping_pars_fragment:Ry,transmission_fragment:Cy,transmission_pars_fragment:Iy,uv_pars_fragment:Py,uv_pars_vertex:Ly,uv_vertex:Ny,worldpos_vertex:Dy,background_vert:Uy,background_frag:Fy,backgroundCube_vert:Oy,backgroundCube_frag:By,cube_vert:zy,cube_frag:ky,depth_vert:Gy,depth_frag:Hy,distance_vert:Vy,distance_frag:Wy,equirect_vert:Xy,equirect_frag:qy,linedashed_vert:Yy,linedashed_frag:Ky,meshbasic_vert:Zy,meshbasic_frag:Jy,meshlambert_vert:jy,meshlambert_frag:$y,meshmatcap_vert:Qy,meshmatcap_frag:ev,meshnormal_vert:tv,meshnormal_frag:nv,meshphong_vert:iv,meshphong_frag:sv,meshphysical_vert:rv,meshphysical_frag:ov,meshtoon_vert:av,meshtoon_frag:lv,points_vert:cv,points_frag:hv,shadow_vert:uv,shadow_frag:dv,sprite_vert:fv,sprite_frag:pv},Ke={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Rs={basic:{uniforms:hi([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:hi([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:hi([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:hi([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:hi([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:hi([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:hi([Ke.points,Ke.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:hi([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:hi([Ke.common,Ke.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:hi([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:hi([Ke.sprite,Ke.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:hi([Ke.common,Ke.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:hi([Ke.lights,Ke.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Rs.physical={uniforms:hi([Rs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Fh={r:0,b:0,g:0},mv=new wt,gg=new Lt;gg.set(-1,0,0,0,1,0,0,0,1);function gv(i,e,t,n,s,r){let o=new qe(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let S=M.backgroundBlurriness>0;T=e.get(T,S)}return T}function p(M){let T=!1,S=f(M);S===null?m(o,a):S&&S.isColor&&(m(S,1),T=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,T){let S=f(T);S&&S.isCubeTexture?(c===void 0&&(c=new et(new ai(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:ro(Rs.backgroundCube.uniforms),vertexShader:Rs.backgroundCube.vertexShader,fragmentShader:Rs.backgroundCube.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,R,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mv.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gg),c.material.toneMapped=Wt.getTransfer(S.colorSpace)!==pn,(h!==S||u!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new et(new Dt(2,2),new ki({name:"BackgroundMaterial",uniforms:ro(Rs.background.uniforms),vertexShader:Rs.background.vertexShader,fragmentShader:Rs.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Wt.getTransfer(S.colorSpace)!==pn,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,T){M.getRGB(Fh,Cd(i)),t.buffers.color.setClear(Fh.r,Fh.g,Fh.b,T,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:p,addToRenderList:v,dispose:g}}function _v(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(B,W,Z,P,Y){let K=!1,ee=u(B,P,Z,W);r!==ee&&(r=ee,c(r.object)),K=f(B,P,Z,Y),K&&p(B,P,Z,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(B,W,Z,P),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(B){return i.bindVertexArray(B)}function h(B){return i.deleteVertexArray(B)}function u(B,W,Z,P){let Y=P.wireframe===!0,K=n[W.id];K===void 0&&(K={},n[W.id]=K);let ee=B.isInstancedMesh===!0?B.id:0,oe=K[ee];oe===void 0&&(oe={},K[ee]=oe);let ne=oe[Z.id];ne===void 0&&(ne={},oe[Z.id]=ne);let le=ne[Y];return le===void 0&&(le=d(l()),ne[Y]=le),le}function d(B){let W=[],Z=[],P=[];for(let Y=0;Y<t;Y++)W[Y]=0,Z[Y]=0,P[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Z,attributeDivisors:P,object:B,attributes:{},index:null}}function f(B,W,Z,P){let Y=r.attributes,K=W.attributes,ee=0,oe=Z.getAttributes();for(let ne in oe)if(oe[ne].location>=0){let fe=Y[ne],Be=K[ne];if(Be===void 0&&(ne==="instanceMatrix"&&B.instanceMatrix&&(Be=B.instanceMatrix),ne==="instanceColor"&&B.instanceColor&&(Be=B.instanceColor)),fe===void 0||fe.attribute!==Be||Be&&fe.data!==Be.data)return!0;ee++}return r.attributesNum!==ee||r.index!==P}function p(B,W,Z,P){let Y={},K=W.attributes,ee=0,oe=Z.getAttributes();for(let ne in oe)if(oe[ne].location>=0){let fe=K[ne];fe===void 0&&(ne==="instanceMatrix"&&B.instanceMatrix&&(fe=B.instanceMatrix),ne==="instanceColor"&&B.instanceColor&&(fe=B.instanceColor));let Be={};Be.attribute=fe,fe&&fe.data&&(Be.data=fe.data),Y[ne]=Be,ee++}r.attributes=Y,r.attributesNum=ee,r.index=P}function v(){let B=r.newAttributes;for(let W=0,Z=B.length;W<Z;W++)B[W]=0}function m(B){g(B,0)}function g(B,W){let Z=r.newAttributes,P=r.enabledAttributes,Y=r.attributeDivisors;Z[B]=1,P[B]===0&&(i.enableVertexAttribArray(B),P[B]=1),Y[B]!==W&&(i.vertexAttribDivisor(B,W),Y[B]=W)}function M(){let B=r.newAttributes,W=r.enabledAttributes;for(let Z=0,P=W.length;Z<P;Z++)W[Z]!==B[Z]&&(i.disableVertexAttribArray(Z),W[Z]=0)}function T(B,W,Z,P,Y,K,ee){ee===!0?i.vertexAttribIPointer(B,W,Z,Y,K):i.vertexAttribPointer(B,W,Z,P,Y,K)}function S(B,W,Z,P){v();let Y=P.attributes,K=Z.getAttributes(),ee=W.defaultAttributeValues;for(let oe in K){let ne=K[oe];if(ne.location>=0){let le=Y[oe];if(le===void 0&&(oe==="instanceMatrix"&&B.instanceMatrix&&(le=B.instanceMatrix),oe==="instanceColor"&&B.instanceColor&&(le=B.instanceColor)),le!==void 0){let fe=le.normalized,Be=le.itemSize,Ve=e.get(le);if(Ve===void 0)continue;let ie=Ve.buffer,Ce=Ve.type,ze=Ve.bytesPerElement,Qe=Ce===i.INT||Ce===i.UNSIGNED_INT||le.gpuType===Jc;if(le.isInterleavedBufferAttribute){let ke=le.data,be=ke.isInterleavedBuffer===!0?ke.stride:ke.itemSize,Tt=le.offset;if(ke.isInstancedInterleavedBuffer||ke.isInstancedBufferAttribute){for(let rt=0;rt<ne.locationSize;rt++)g(ne.location+rt,ke.meshPerAttribute);B.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let rt=0;rt<ne.locationSize;rt++)m(ne.location+rt);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let rt=0;rt<ne.locationSize;rt++)T(ne.location+rt,Be/ne.locationSize,Ce,fe,be*ze,(Tt+Be/ne.locationSize*rt)*ze,Qe)}else{if(le.isInstancedBufferAttribute){for(let ke=0;ke<ne.locationSize;ke++)g(ne.location+ke,le.meshPerAttribute);B.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ke=0;ke<ne.locationSize;ke++)m(ne.location+ke);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let ke=0;ke<ne.locationSize;ke++)T(ne.location+ke,Be/ne.locationSize,Ce,fe,Be*ze,Be/ne.locationSize*ke*ze,Qe)}}else if(ee!==void 0){let fe=ee[oe];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(ne.location,fe);break;case 3:i.vertexAttrib3fv(ne.location,fe);break;case 4:i.vertexAttrib4fv(ne.location,fe);break;default:i.vertexAttrib1fv(ne.location,fe)}}}}M()}function C(){z();for(let B in n){let W=n[B];for(let Z in W){let P=W[Z];for(let Y in P){let K=P[Y];for(let ee in K)h(K[ee].object),delete K[ee];delete P[Y]}}delete n[B]}}function R(B){if(n[B.id]===void 0)return;let W=n[B.id];for(let Z in W){let P=W[Z];for(let Y in P){let K=P[Y];for(let ee in K)h(K[ee].object),delete K[ee];delete P[Y]}}delete n[B.id]}function x(B){for(let W in n){let Z=n[W];for(let P in Z){let Y=Z[P];if(Y[B.id]===void 0)continue;let K=Y[B.id];for(let ee in K)h(K[ee].object),delete K[ee];delete Y[B.id]}}}function b(B){for(let W in n){let Z=n[W],P=B.isInstancedMesh===!0?B.id:0,Y=Z[P];if(Y!==void 0){for(let K in Y){let ee=Y[K];for(let oe in ee)h(ee[oe].object),delete ee[oe];delete Y[K]}delete Z[P],Object.keys(Z).length===0&&delete n[W]}}}function z(){N(),o=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function xv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function yv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Si&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===Mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Pi&&x!==ci&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(at("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&at("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:S,maxSamples:C,samples:R}}function vv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ei,a=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,T=M*4,S=g.clippingState||null;l.value=S,S=h(p,d,T,f);for(let C=0;C!==T;++C)S[C]=t[C];g.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,p!==!0||m===null){let g=f+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,S=f;T!==v;++T,S+=4)o.copy(u[T]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Ml=class extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Za(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ai(5,5,5),r=new ki({name:"CubemapFromEquirect",uniforms:ro(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yi,blending:eo});r.uniforms.tEquirect.value=t;let o=new et(s,r),a=t.minFilter;return t.minFilter===vi&&(t.minFilter=Sn),new Jo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Km=256,Mv=3,Sv=20,_g=256,xg=16,bv=3,wv=new O,Tv=new qe,Rr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Jo(1,10,null),this._boxMesh=new et(new ai(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=wv}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(Tv));let m=new Jo(n,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Km,Td(e))}_fromTexture(e,t){e.mapping===no||e.mapping===ta?this._setSize(e.image.length===0?Km:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Zm(e,!1,!1),n=Math.log2(e)-Mv;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Zm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===no||e.mapping===ta?(this._cubemapMaterial===null&&(this._cubemapMaterial=jm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Jm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Av(),this._integrationMaterial=Ev());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/xg);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-bv)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(_g*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Rv());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Zm(i,e,t){return new Ml(i,{minFilter:vi,generateMipmaps:e,type:Mi,colorSpace:ei,depthBuffer:t})}function bl(i,e,t){return new ki({name:i,uniforms:e,vertexShader:Ht.cube_vert,fragmentShader:t,side:yi,blending:eo,depthTest:!1,depthWrite:!1})}function Av(){return bl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${_g}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ev(){return bl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:xg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Rv(){return bl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Sv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Jm(){return bl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function jm(){return bl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Cv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Yc||f===Kc)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let v=new Ml(p.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Yc||f===Kc,v=f===no||f===ta;if(p||v){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Rr(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new Rr(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Yc?d.mapping=no:f===Kc&&(d.mapping=ta),d}function l(d){let f=0,p=6;for(let v=0;v<p;v++)d[v]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Iv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Hr("WebGLRenderer: "+n+" extension not supported."),s}}}function Pv(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let v=r.get(p);v&&(e.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(p){let v=p.attributes;for(let m in v)e.update(v[m],i.ARRAY_BUFFER)}function u(p){let v=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let M=v!==null?v.array.length:m.array.length/3-1,T=m.count>=65535?Va:Ha,S=new T(Math.ceil(M/3)*6,1),C=S.array;if(v!==null){let x=v.array;g=v.version;for(let b=0,z=0;b<M;b+=3){let N=x[b+0],B=x[b+1],W=x[b+2];C[z++]=N,C[z++]=B,C[z++]=B,C[z++]=W,C[z++]=W,C[z++]=N}}else{g=m.version;for(let x=0,b=0;x<M;x+=3){let z=x+0,N=x+1,B=x+2;C[b++]=z,C[b++]=N,C[b++]=N,C[b++]=B,C[b++]=B,C[b++]=z}}S.version=g;let R=r.get(p);R&&e.remove(R),r.set(p,S)}function d(p){let v=r.get(p);if(v){let m=p.index;m!==null&&v.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in s){let v=s[p].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Lv(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];t.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Nv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:_t("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Dv(i,e,t){let n=new WeakMap,s=new hn;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let z=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",z)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],T=0;f===!0&&(T=1),p===!0&&(T=2),v===!0&&(T=3);let S=a.attributes.position.count*T,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let R=new Float32Array(S*C*4*u),x=new Ga(R,S,C,u);x.type=ci,x.needsUpdate=!0;let b=T*4;for(let N=0;N<u;N++){let B=m[N],W=g[N],Z=M[N],P=S*C*4*N;for(let Y=0;Y<B.count;Y++){let K=Y*b;f===!0&&(s.fromBufferAttribute(B,Y),R[P+K+0]=s.x,R[P+K+1]=s.y,R[P+K+2]=s.z,R[P+K+3]=0),p===!0&&(s.fromBufferAttribute(W,Y),R[P+K+4]=s.x,R[P+K+5]=s.y,R[P+K+6]=s.z,R[P+K+7]=0),v===!0&&(s.fromBufferAttribute(Z,Y),R[P+K+8]=s.x,R[P+K+9]=s.y,R[P+K+10]=s.z,R[P+K+11]=Z.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new ve(S,C)},n.set(a,d),a.addEventListener("dispose",z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Uv(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Fv={[rd]:"LINEAR_TONE_MAPPING",[od]:"REINHARD_TONE_MAPPING",[ad]:"CINEON_TONE_MAPPING",[ea]:"ACES_FILMIC_TONE_MAPPING",[cd]:"AGX_TONE_MAPPING",[hd]:"NEUTRAL_TONE_MAPPING",[ld]:"CUSTOM_TONE_MAPPING"};function Ov(i,e,t,n,s,r){let o=new Bi(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new rn;h.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new sn([0,2,0,0,2,0],2));let u=new Fc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new et(h,u),f=new Qr(-1,1,1,-1,0,1),p=null,v=null,m=!1,g,M=null,T=[],S=!1;this.setSize=function(C,R){o.setSize(C,R),a!==null&&a.setSize(C,R),l!==null&&l.setSize(C,R);for(let x=0;x<T.length;x++){let b=T[x];b.setSize&&b.setSize(C,R)}},this.setEffects=function(C){T=C,S=T.length>0&&T[0].isRenderPass===!0;let R=o.width,x=o.height;T.length>0&&a===null&&(a=new Bi(R,x,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),l=new Bi(R,x,{type:Mi,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&T.some(z=>z.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Ys(R,x),r===!0&&(c.format=tr,c.type=so)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let z=0;z<T.length;z++){let N=T[z];N.setSize&&N.setSize(R,x),b&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(C,R){if(m||C.toneMapping===As&&T.length===0)return!1;if(M=R,R!==null){let x=R.width,b=R.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return S===!1&&C.setRenderTarget(o),g=C.toneMapping,C.toneMapping=As,!0},this.hasRenderPass=function(){return S},this.end=function(C,R){C.toneMapping=g,m=!0;let x=o,b=a;for(let z=0;z<T.length;z++){let N=T[z];N.enabled!==!1&&(N.render(C,b,x,R),N.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(p!==C.outputColorSpace||v!==C.toneMapping){p=C.outputColorSpace,v=C.toneMapping,u.defines={},Wt.getTransfer(p)===pn&&(u.defines.SRGB_TRANSFER="");let z=Fv[v];z&&(u.defines[z]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,C.setRenderTarget(M),C.render(d,f),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var yg=new Gn,vg=new Ys(1,1),Mg=new Ja(1),Sg=new Ga,bg=new Ac,wg=new Za,$m=[],Qm=[],eg=new Float32Array(16),tg=new Float32Array(9),ng=new Float32Array(4);function oa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=$m[s];if(r===void 0&&(r=new Float32Array(s),$m[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Yn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Bh(i,e){let t=Qm[e];t===void 0&&(t=new Int32Array(e),Qm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Bv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;i.uniform2fv(this.addr,e),Kn(t,e)}}function kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yn(t,e))return;i.uniform3fv(this.addr,e),Kn(t,e)}}function Gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;i.uniform4fv(this.addr,e),Kn(t,e)}}function Hv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kn(t,e)}else{if(Yn(t,n))return;ng.set(n),i.uniformMatrix2fv(this.addr,!1,ng),Kn(t,n)}}function Vv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kn(t,e)}else{if(Yn(t,n))return;tg.set(n),i.uniformMatrix3fv(this.addr,!1,tg),Kn(t,n)}}function Wv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kn(t,e)}else{if(Yn(t,n))return;eg.set(n),i.uniformMatrix4fv(this.addr,!1,eg),Kn(t,n)}}function Xv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;i.uniform2iv(this.addr,e),Kn(t,e)}}function Yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yn(t,e))return;i.uniform3iv(this.addr,e),Kn(t,e)}}function Kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;i.uniform4iv(this.addr,e),Kn(t,e)}}function Zv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;i.uniform2uiv(this.addr,e),Kn(t,e)}}function jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yn(t,e))return;i.uniform3uiv(this.addr,e),Kn(t,e)}}function $v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;i.uniform4uiv(this.addr,e),Kn(t,e)}}function zh(i){return i.version===0&&(i.compareFunction=Md,i.needsUpdate=!0),i}function Qv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=zh(vg):r=yg,t.setTexture2D(e||r,s)}function eM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bg,s)}function tM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=zh(Mg):r=wg,t.setTextureCube(e||r,s)}function nM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Sg,s)}function iM(i){switch(i){case 5126:return Bv;case 35664:return zv;case 35665:return kv;case 35666:return Gv;case 35674:return Hv;case 35675:return Vv;case 35676:return Wv;case 5124:case 35670:return Xv;case 35667:case 35671:return qv;case 35668:case 35672:return Yv;case 35669:case 35673:return Kv;case 5125:return Zv;case 36294:return Jv;case 36295:return jv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Qv;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}function sM(i,e){i.uniform1fv(this.addr,e)}function rM(i,e){let t=oa(e,this.size,2);i.uniform2fv(this.addr,t)}function oM(i,e){let t=oa(e,this.size,3);i.uniform3fv(this.addr,t)}function aM(i,e){let t=oa(e,this.size,4);i.uniform4fv(this.addr,t)}function lM(i,e){let t=oa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cM(i,e){let t=oa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hM(i,e){let t=oa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function uM(i,e){i.uniform1iv(this.addr,e)}function dM(i,e){i.uniform2iv(this.addr,e)}function fM(i,e){i.uniform3iv(this.addr,e)}function pM(i,e){i.uniform4iv(this.addr,e)}function mM(i,e){i.uniform1uiv(this.addr,e)}function gM(i,e){i.uniform2uiv(this.addr,e)}function _M(i,e){i.uniform3uiv(this.addr,e)}function xM(i,e){i.uniform4uiv(this.addr,e)}function yM(i,e,t){let n=this.cache,s=e.length,r=Bh(t,s);Yn(n,r)||(i.uniform1iv(this.addr,r),Kn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=zh(vg):o=yg;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function vM(i,e,t){let n=this.cache,s=e.length,r=Bh(t,s);Yn(n,r)||(i.uniform1iv(this.addr,r),Kn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||bg,r[o])}function MM(i,e,t){let n=this.cache,s=e.length,r=Bh(t,s);Yn(n,r)||(i.uniform1iv(this.addr,r),Kn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=zh(Mg):o=wg;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function SM(i,e,t){let n=this.cache,s=e.length,r=Bh(t,s);Yn(n,r)||(i.uniform1iv(this.addr,r),Kn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Sg,r[o])}function bM(i){switch(i){case 5126:return sM;case 35664:return rM;case 35665:return oM;case 35666:return aM;case 35674:return lM;case 35675:return cM;case 35676:return hM;case 5124:case 35670:return uM;case 35667:case 35671:return dM;case 35668:case 35672:return fM;case 35669:case 35673:return pM;case 5125:return mM;case 36294:return gM;case 36295:return _M;case 36296:return xM;case 35678:case 36198:case 36298:case 36306:case 35682:return yM;case 35679:case 36299:case 36307:return vM;case 35680:case 36300:case 36308:case 36293:return MM;case 36289:case 36303:case 36311:case 36292:return SM}}var kd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iM(t.type)}},Gd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bM(t.type)}},Hd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Bd=/(\w+)(\])?(\[|\.)?/g;function ig(i,e){i.seq.push(e),i.map[e.id]=e}function wM(i,e,t){let n=i.name,s=n.length;for(Bd.lastIndex=0;;){let r=Bd.exec(n),o=Bd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ig(t,c===void 0?new kd(a,i,e):new Gd(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Hd(a),ig(t,u)),t=u}}}var ra=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);wM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function sg(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var TM=37297,AM=0;function EM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var rg=new Lt;function RM(i){Wt._getMatrix(rg,Wt.workingColorSpace,i);let e=`mat3( ${rg.elements.map(t=>t.toFixed(4))} )`;switch(Wt.getTransfer(i)){case za:return[e,"LinearTransferOETF"];case pn:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function og(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+EM(i.getShaderSource(e),a)}else return r}function CM(i,e){let t=RM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var IM={[rd]:"Linear",[od]:"Reinhard",[ad]:"Cineon",[ea]:"ACESFilmic",[cd]:"AgX",[hd]:"Neutral",[ld]:"Custom"};function PM(i,e){let t=IM[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Oh=new O;function LM(){Wt.getLuminanceCoefficients(Oh);let i=Oh.x.toFixed(4),e=Oh.y.toFixed(4),t=Oh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function DM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function UM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function vl(i){return i!==""}function ag(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function lg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var FM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vd(i){return i.replace(FM,OM)}function OM(i,e){let t=Ht[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Vd(t)}var BM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cg(i){return i.replace(BM,zM)}function zM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var kM={[Ar]:"SHADOWMAP_TYPE_PCF",[$o]:"SHADOWMAP_TYPE_VSM"};function GM(i){return kM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var HM={[ta]:"ENVMAP_MODE_REFRACTION"};function VM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":HM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var WM={[sd]:"ENVMAP_BLENDING_MULTIPLY",[bm]:"ENVMAP_BLENDING_MIX",[wm]:"ENVMAP_BLENDING_ADD"};function XM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":WM[i.combine]||"ENVMAP_BLENDING_NONE"}function qM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=GM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=VM(t),u=XM(t),d=NM(t),f=DM(r),p=s.createProgram(),v,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(vl).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(vl).join(`
`),m.length>0&&(m+=`
`)):(v=[hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),m=[hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==As?"#define TONE_MAPPING":"",t.toneMapping!==As?Ht.tonemapping_pars_fragment:"",t.toneMapping!==As?PM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,CM("linearToOutputTexel",t.outputColorSpace),LM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vl).join(`
`)),o=Vd(o),o=ag(o,t),o=lg(o,t),a=Vd(a),a=ag(a,t),a=lg(a,t),o=cg(o),a=cg(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=g+v+o,T=g+m+a,S=sg(s,s.VERTEX_SHADER,M),C=sg(s,s.FRAGMENT_SHADER,T);s.attachShader(p,S),s.attachShader(p,C),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function R(N){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(p)||"",W=s.getShaderInfoLog(S)||"",Z=s.getShaderInfoLog(C)||"",P=B.trim(),Y=W.trim(),K=Z.trim(),ee=!0,oe=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,S,C);else{let ne=og(s,S,"vertex"),le=og(s,C,"fragment");_t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+P+`
`+ne+`
`+le)}else P!==""?at("WebGLProgram: Program Info Log:",P):(Y===""||K==="")&&(oe=!1);oe&&(N.diagnostics={runnable:ee,programLog:P,vertexShader:{log:Y,prefix:v},fragmentShader:{log:K,prefix:m}})}s.deleteShader(S),s.deleteShader(C),x=new ra(s,p),b=UM(s,p)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(p,TM)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=AM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=C,this}var YM=0,Wd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xd(e),t.set(e,n)),n}},Xd=class{constructor(e){this.id=YM++,this.code=e,this.usedTimes=0}};function KM(i){return i===Er||i===gl||i===_l}function ZM(i,e,t,n,s,r){let o=new Bo,a=new Wd,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,b,z,N,B,W){let Z=N.fog,P=B.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ee=e.get(x.envMap||Y,K),oe=d[x.type],ne=n.precision;x.precision!==null&&(ne=n.getMaxPrecision(x.precision),ne!==x.precision&&at("WebGLProgram.getParameters:",x.precision,"not supported, using",ne,"instead."));let le=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,fe=le!==void 0?le.length:0,Be=0;P.morphAttributes.position!==void 0&&(Be=1),P.morphAttributes.normal!==void 0&&(Be=2),P.morphAttributes.color!==void 0&&(Be=3);let Ve,ie,Ce,ze;if(oe){let Xe=Rs[oe];Ve=Xe.vertexShader,ie=Xe.fragmentShader}else{Ve=x.vertexShader,ie=x.fragmentShader;let Xe=a.getVertexShaderStage(x),Yt=a.getFragmentShaderStage(x);a.update(x,Xe,Yt),Ce=Xe.id,ze=Yt.id}let Qe=i.getRenderTarget(),ke=i.state.buffers.depth.getReversed(),be=B.isInstancedMesh===!0,Tt=B.isBatchedMesh===!0,rt=!!x.map,Nt=!!x.matcap,Et=!!ee,pe=Et&&ee.isPMREMTexture===!0,Ue=!!x.aoMap,de=!!x.lightMap,We=!!x.bumpMap&&x.wireframe===!1,De=!!x.normalMap,ut=!!x.displacementMap,tt=!!x.emissiveMap,Rt=!!x.metalnessMap,nt=!!x.roughnessMap,gt=x.anisotropy>0,H=x.clearcoat>0,_n=x.diffuseRoughness>0,mt=x.dispersion>0,Mt=x.retroreflectivity>0,Re=x.iridescence>0,un=x.sheen>0,st=x.transmission>0,ft=gt&&!!x.anisotropyMap,I=H&&!!x.clearcoatMap,w=H&&!!x.clearcoatNormalMap,te=H&&!!x.clearcoatRoughnessMap,Te=_n&&!!x.diffuseRoughnessMap,ge=Re&&!!x.iridescenceMap,Se=Re&&!!x.iridescenceThicknessMap,Pe=un&&!!x.sheenColorMap,ce=un&&!!x.sheenRoughnessMap,ue=!!x.specularMap,Ae=!!x.specularColorMap,U=!!x.specularIntensityMap,me=st&&!!x.transmissionMap,ae=st&&!!x.thicknessMap,Le=!!x.gradientMap,Fe=!!x.alphaMap,Ne=x.alphaTest>0,je=!!x.alphaHash,St=!!x.extensions,Ee=As;x.toneMapped&&(Qe===null||Qe.isXRRenderTarget===!0)&&(Ee=i.toneMapping);let ot=pe?ee.isCompressedCubeTexture?ee.image[0].mipmaps:ee.mipmaps:null,xt={shaderID:oe,shaderType:x.type,shaderName:x.name,vertexShader:Ve,fragmentShader:ie,defines:x.defines,customVertexShaderID:Ce,customFragmentShaderID:ze,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:ne,batching:Tt,batchingColor:Tt&&B._colorsTexture!==null,instancing:be,instancingColor:be&&B.instanceColor!==null,instancingMorph:be&&B.morphTexture!==null,outputColorSpace:Qe===null?i.outputColorSpace:Qe.isXRRenderTarget===!0?Qe.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:rt,matcap:Nt,envMap:Et,envMapMode:Et&&ee.mapping,envMapPMREM:pe,envMapMaxLod:pe?ot.length-1:null,envMapSize:pe?ot[0].width:null,aoMap:Ue,lightMap:de,bumpMap:We,normalMap:De,displacementMap:ut,emissiveMap:tt,normalMapObjectSpace:De&&x.normalMapType===Rm,normalMapTangentSpace:De&&x.normalMapType===Nh,packedNormalMap:De&&x.normalMapType===Nh&&KM(x.normalMap.format),metalnessMap:Rt,roughnessMap:nt,anisotropy:gt,anisotropyMap:ft,clearcoat:H,clearcoatMap:I,clearcoatNormalMap:w,clearcoatRoughnessMap:te,diffuseRoughness:_n,diffuseRoughnessMap:Te,dispersion:mt,retroreflection:Mt,iridescence:Re,iridescenceMap:ge,iridescenceThicknessMap:Se,sheen:un,sheenColorMap:Pe,sheenRoughnessMap:ce,specularMap:ue,specularColorMap:Ae,specularIntensityMap:U,transmission:st,transmissionMap:me,thicknessMap:ae,gradientMap:Le,opaque:x.transparent===!1&&x.blending===Qo&&x.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Ne,alphaHash:je,combine:x.combine,mapUv:rt&&f(x.map.channel),aoMapUv:Ue&&f(x.aoMap.channel),lightMapUv:de&&f(x.lightMap.channel),bumpMapUv:We&&f(x.bumpMap.channel),normalMapUv:De&&f(x.normalMap.channel),displacementMapUv:ut&&f(x.displacementMap.channel),emissiveMapUv:tt&&f(x.emissiveMap.channel),metalnessMapUv:Rt&&f(x.metalnessMap.channel),roughnessMapUv:nt&&f(x.roughnessMap.channel),anisotropyMapUv:ft&&f(x.anisotropyMap.channel),clearcoatMapUv:I&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Te&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ge&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:ce&&f(x.sheenRoughnessMap.channel),specularMapUv:ue&&f(x.specularMap.channel),specularColorMapUv:Ae&&f(x.specularColorMap.channel),specularIntensityMapUv:U&&f(x.specularIntensityMap.channel),transmissionMapUv:me&&f(x.transmissionMap.channel),thicknessMapUv:ae&&f(x.thicknessMap.channel),alphaMapUv:Fe&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(De||gt),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!P.attributes.uv&&(rt||Fe),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&De===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ke,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Be,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:W.filter(Xe=>Xe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:rt&&x.map.isVideoTexture===!0&&Wt.getTransfer(x.map.colorSpace)===pn,decodeVideoTextureEmissive:tt&&x.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(x.emissiveMap.colorSpace)===pn,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qt,flipSided:x.side===yi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:St&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&x.extensions.multiDraw===!0||Tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function v(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let z in x.defines)b.push(z),b.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(m(b,x),g(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let b=d[x.type],z;if(b){let N=Rs[b];z=Xm.clone(N.uniforms)}else z=x.uniforms;return z}function T(x,b){let z=h.get(b);return z!==void 0?++z.usedTimes:(z=new qM(i,b,x,s),c.push(z),h.set(b,z)),z}function S(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function C(x){a.remove(x)}function R(){a.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:M,acquireProgram:T,releaseProgram:S,releaseShaderCache:C,programs:c,dispose:R}}function JM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function jM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ug(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dg(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,v,m,g){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:g},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=p,M.materialVariant=o(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=m,M.group=g),e++,M}function l(d,f,p,v,m,g,M){M.reversedDepth===!0&&(m=-m);let T=a(d,f,p,v,m,g);p.transmission>0?n.push(T):p.transparent===!0?s.push(T):t.push(T)}function c(d,f,p,v,m,g){let M=a(d,f,p,v,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||jM),n.length>1&&n.sort(f||ug),s.length>1&&s.sort(f||ug)}function u(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function $M(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new dg,i.set(n,[o])):s>=r.length?(o=new dg,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function QM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new qe};break;case"SpotLight":t={position:new O,direction:new O,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function eS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var tS=0;function nS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function iS(i){let e=new QM,t=eS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new wt,o=new wt;function a(c){let h=0,u=0,d=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,M=0,T=0,S=0,C=0,R=0,x=0,b=0,z=0,N=0;c.sort(nS);for(let W=0,Z=c.length;W<Z;W++){let P=c[W],Y=P.color,K=P.intensity,ee=P.distance,oe=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Er?oe=P.shadow.map.texture:oe=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=Y.r*K,u+=Y.g*K,d+=Y.b*K;else if(P.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(P.sh.coefficients[ne],K);N++}else if(P.isSunLight){let ne=e.get(P);if(ne.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let le=P.shadow,fe=t.get(P);fe.shadowIntensity=le.intensity,fe.shadowBias=le.bias,fe.shadowNormalBias=le.normalBias,fe.shadowRadius=le.radius,fe.shadowMapSize.copy(le.mapSize).multiply(le.getFrameExtents()),n.sunShadow[p]=fe,n.sunShadowMap[p]=oe;let Be=le.getViewportCount();for(let Ve=0;Ve<Be;Ve++)n.sunShadowMatrix[v+Ve]=le.getMatrix(Ve),n.sunShadowCascade[v+Ve]=le._cascadeData[Ve];v+=Be,p++}n.sun[f]=ne,f++}else if(P.isDirectionalLight){let ne=e.get(P);if(ne.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let le=P.shadow,fe=t.get(P);fe.shadowIntensity=le.intensity,fe.shadowBias=le.bias,fe.shadowNormalBias=le.normalBias,fe.shadowRadius=le.radius,fe.shadowMapSize=le.mapSize,n.directionalShadow[m]=fe,n.directionalShadowMap[m]=oe,n.directionalShadowMatrix[m]=P.shadow.matrix,C++}n.directional[m]=ne,m++}else if(P.isSpotLight){let ne=e.get(P);ne.position.setFromMatrixPosition(P.matrixWorld),ne.color.copy(Y).multiplyScalar(K),ne.distance=ee,ne.coneCos=Math.cos(P.angle),ne.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),ne.decay=P.decay,n.spot[M]=ne;let le=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,le.updateMatrices(P),P.castShadow&&z++),n.spotLightMatrix[M]=le.matrix,P.castShadow){let fe=t.get(P);fe.shadowIntensity=le.intensity,fe.shadowBias=le.bias,fe.shadowNormalBias=le.normalBias,fe.shadowRadius=le.radius,fe.shadowMapSize=le.mapSize,n.spotShadow[M]=fe,n.spotShadowMap[M]=oe,x++}M++}else if(P.isRectAreaLight){let ne=e.get(P);ne.color.copy(Y).multiplyScalar(K),ne.halfWidth.set(P.width*.5,0,0),ne.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=ne,T++}else if(P.isPointLight){let ne=e.get(P);if(ne.color.copy(P.color).multiplyScalar(P.intensity),ne.distance=P.distance,ne.decay=P.decay,P.castShadow){let le=P.shadow,fe=t.get(P);fe.shadowIntensity=le.intensity,fe.shadowBias=le.bias,fe.shadowNormalBias=le.normalBias,fe.shadowRadius=le.radius,fe.shadowMapSize=le.mapSize,fe.shadowCameraNear=le.camera.near,fe.shadowCameraFar=le.camera.far,n.pointShadow[g]=fe,n.pointShadowMap[g]=oe,n.pointShadowMatrix[g]=P.shadow.matrix,R++}n.point[g]=ne,g++}else if(P.isHemisphereLight){let ne=e.get(P);ne.skyColor.copy(P.color).multiplyScalar(K),ne.groundColor.copy(P.groundColor).multiplyScalar(K),n.hemi[S]=ne,S++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ke.LTC_FLOAT_1,n.rectAreaLTC2=Ke.LTC_FLOAT_2):(n.rectAreaLTC1=Ke.LTC_HALF_1,n.rectAreaLTC2=Ke.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let B=n.hash;(B.sunLength!==f||B.directionalLength!==m||B.pointLength!==g||B.spotLength!==M||B.rectAreaLength!==T||B.hemiLength!==S||B.numSunShadows!==p||B.numDirectionalShadows!==C||B.numPointShadows!==R||B.numSpotShadows!==x||B.numSpotMaps!==b||B.numLightProbes!==N)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=T,n.point.length=g,n.hemi.length=S,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-z,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=z,n.numLightProbes=N,B.sunLength=f,B.directionalLength=m,B.pointLength=g,B.spotLength=M,B.rectAreaLength=T,B.hemiLength=S,B.numSunShadows=p,B.numDirectionalShadows=C,B.numPointShadows=R,B.numSpotShadows=x,B.numSpotMaps=b,B.numLightProbes=N,n.version=tS++)}function l(c,h){let u=0,d=0,f=0,p=0,v=0,m=0,g=h.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){let S=c[M];if(S.isSunLight){let C=n.sun[u];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(g),u++}else if(S.isDirectionalLight){let C=n.directional[d];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),d++}else if(S.isSpotLight){let C=n.spot[p];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),p++}else if(S.isRectAreaLight){let C=n.rectArea[v];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){let C=n.point[f];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){let C=n.hemi[m];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function fg(i){let e=new iS(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function sS(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new fg(i),e.set(s,[a])):r>=o.length?(a=new fg(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var rS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aS=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],lS=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],pg=new wt,yl=new O,zd=new O;function cS(i,e,t){let n=new Sr,s=new ve,r=new ve,o=new hn,a=new Yo,l=new Oc,c={},h=t.maxTextureSize,u={[Ts]:yi,[yi]:Ts,[Qt]:Qt},d=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:rS,fragmentShader:oS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new rn;p.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new et(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ar;let g=this.type;this.render=function(R,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===sm&&(at("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ar);let z=i.getRenderTarget(),N=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),W=i.state;W.setBlending(eo),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let Z=g!==this.type;Z&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(Y=>Y.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,Y=R.length;P<Y;P++){let K=R[P],ee=K.shadow;if(ee===void 0){at("WebGLShadowMap:",K,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;s.copy(ee.mapSize);let oe=ee.getFrameExtents();s.multiply(oe),r.copy(ee.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,ee.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,ee.mapSize.y=r.y));let ne=i.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=ne,ee.map===null||Z===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===$o){if(K.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new Bi(s.x,s.y,{format:Er,type:Mi,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),ee.map.texture.name=K.name+".shadowMap",ee.map.depthTexture=new Ys(s.x,s.y,ci),ee.map.depthTexture.name=K.name+".shadowMapDepth",ee.map.depthTexture.format=Ws,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=kn,ee.map.depthTexture.magFilter=kn}else K.isPointLight?(ee.map=new Ml(s.x),ee.map.depthTexture=new Ja(s.x,ms)):(ee.map=new Bi(s.x,s.y),ee.map.depthTexture=new Ys(s.x,s.y,ms)),ee.map.depthTexture.name=K.name+".shadowMap",ee.map.depthTexture.format=Ws,this.type===Ar?(ee.map.depthTexture.compareFunction=ne?vd:yd,ee.map.depthTexture.minFilter=Sn,ee.map.depthTexture.magFilter=Sn):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=kn,ee.map.depthTexture.magFilter=kn);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==s.x||ee.map.height!==s.y)&&ee.map.setSize(s.x,s.y);let le=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();K.isPointLight!==!0&&ee.updateMatrices(K,b);let fe=(ee.camera.layers.mask&4294967294)!==0?ee.camera.layers:b.layers;for(let Be=0;Be<le;Be++){let Ve=ee.getCamera(Be);if(K.isPointLight){let ie=ee.camera,Ce=ee.matrix,ze=K.distance||ie.far;ze!==ie.far&&(ie.far=ze,ie.updateProjectionMatrix()),yl.setFromMatrixPosition(K.matrixWorld),ie.position.copy(yl),zd.copy(ie.position),zd.add(aS[Be]),ie.up.copy(lS[Be]),ie.lookAt(zd),ie.updateMatrixWorld(),Ce.makeTranslation(-yl.x,-yl.y,-yl.z),pg.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(pg,ie.coordinateSystem,ie.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)i.setRenderTarget(ee.map,Be),i.clear();else{Be===0&&(i.setRenderTarget(ee.map),i.clear());let ie=ee.getViewport(Be);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),W.viewport(o)}n=ee.getFrustum(Be),S(x,b,Ve,K,fe,this.type)}ee.isPointLightShadow!==!0&&this.type===$o&&M(ee,b),ee.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(z,N,B)};function M(R,x){let b=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null?R.mapPass=new Bi(s.x,s.y,{format:Er,type:Mi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(x,null,b,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(x,null,b,f,v,null)}function T(R,x,b,z){let N=null,B=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(B!==void 0)N=B;else if(N=b.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let W=N.uuid,Z=x.uuid,P=c[W];P===void 0&&(P={},c[W]=P);let Y=P[Z];Y===void 0&&(Y=N.clone(),P[Z]=Y,x.addEventListener("dispose",C)),N=Y}if(N.visible=x.visible,N.wireframe=x.wireframe,z===$o?N.side=x.shadowSide!==null?x.shadowSide:x.side:N.side=x.shadowSide!==null?x.shadowSide:u[x.side],N.alphaMap=x.alphaMap,N.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,N.map=x.map,N.clipShadows=x.clipShadows,N.clippingPlanes=x.clippingPlanes,N.clipIntersection=x.clipIntersection,N.displacementMap=x.displacementMap,N.displacementScale=x.displacementScale,N.displacementBias=x.displacementBias,N.wireframeLinewidth=x.wireframeLinewidth,N.linewidth=x.linewidth,b.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let W=i.properties.get(N);W.light=b}return N}function S(R,x,b,z,N,B){if(R.visible===!1)return;if(R.layers.test(N)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&B===$o)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);let P=e.update(R),Y=R.material;if(Array.isArray(Y)){let K=P.groups;for(let ee=0,oe=K.length;ee<oe;ee++){let ne=K[ee],le=Y[ne.materialIndex];if(le&&le.visible){let fe=T(R,le,z,B);R.onBeforeShadow(i,R,x,b,P,fe,ne),i.renderBufferDirect(b,null,P,fe,R,ne),R.onAfterShadow(i,R,x,b,P,fe,ne)}}}else if(Y.visible){let K=T(R,Y,z,B);R.onBeforeShadow(i,R,x,b,P,K,null),i.renderBufferDirect(b,null,P,K,R,null),R.onAfterShadow(i,R,x,b,P,K,null)}}let Z=R.children;for(let P=0,Y=Z.length;P<Y;P++)S(Z[P],x,b,z,N,B)}function C(R){R.target.removeEventListener("dispose",C);for(let b in c){let z=c[b],N=R.target.uuid;N in z&&(z[N].dispose(),delete z[N])}}}function hS(i,e){function t(){let U=!1,me=new hn,ae=null,Le=new hn(0,0,0,0);return{setMask:function(Fe){ae!==Fe&&!U&&(i.colorMask(Fe,Fe,Fe,Fe),ae=Fe)},setLocked:function(Fe){U=Fe},setClear:function(Fe,Ne,je,St,Ee){Ee===!0&&(Fe*=St,Ne*=St,je*=St),me.set(Fe,Ne,je,St),Le.equals(me)===!1&&(i.clearColor(Fe,Ne,je,St),Le.copy(me))},reset:function(){U=!1,ae=null,Le.set(-1,0,0,0)}}}function n(){let U=!1,me=!1,ae=null,Le=null,Fe=null;return{setReversed:function(Ne){if(me!==Ne){let je=e.get("EXT_clip_control");Ne?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),me=Ne;let St=Fe;Fe=null,this.setClear(St)}},getReversed:function(){return me},setTest:function(Ne){Ne?ke(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(Ne){ae!==Ne&&!U&&(i.depthMask(Ne),ae=Ne)},setFunc:function(Ne){if(me&&(Ne=Bm[Ne]),Le!==Ne){switch(Ne){case _c:i.depthFunc(i.NEVER);break;case xc:i.depthFunc(i.ALWAYS);break;case yc:i.depthFunc(i.LESS);break;case No:i.depthFunc(i.LEQUAL);break;case vc:i.depthFunc(i.EQUAL);break;case Mc:i.depthFunc(i.GEQUAL);break;case Sc:i.depthFunc(i.GREATER);break;case bc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=Ne}},setLocked:function(Ne){U=Ne},setClear:function(Ne){Fe!==Ne&&(Fe=Ne,me&&(Ne=1-Ne),i.clearDepth(Ne))},reset:function(){U=!1,ae=null,Le=null,Fe=null,me=!1}}}function s(){let U=!1,me=null,ae=null,Le=null,Fe=null,Ne=null,je=null,St=null,Ee=null;return{setTest:function(ot){U||(ot?ke(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(ot){me!==ot&&!U&&(i.stencilMask(ot),me=ot)},setFunc:function(ot,xt,Xe){(ae!==ot||Le!==xt||Fe!==Xe)&&(i.stencilFunc(ot,xt,Xe),ae=ot,Le=xt,Fe=Xe)},setOp:function(ot,xt,Xe){(Ne!==ot||je!==xt||St!==Xe)&&(i.stencilOp(ot,xt,Xe),Ne=ot,je=xt,St=Xe)},setLocked:function(ot){U=ot},setClear:function(ot){Ee!==ot&&(i.clearStencil(ot),Ee=ot)},reset:function(){U=!1,me=null,ae=null,Le=null,Fe=null,Ne=null,je=null,St=null,Ee=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],v=null,m=!1,g=null,M=null,T=null,S=null,C=null,R=null,x=null,b=new qe(0,0,0),z=0,N=!1,B=null,W=null,Z=null,P=null,Y=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,oe=0,ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ee=oe>=1):ne.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ee=oe>=2);let le=null,fe={},Be=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),ie=new hn().fromArray(Be),Ce=new hn().fromArray(Ve);function ze(U,me,ae,Le){let Fe=new Uint8Array(4),Ne=i.createTexture();i.bindTexture(U,Ne),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<ae;je++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,Fe):i.texImage2D(me+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Fe);return Ne}let Qe={};Qe[i.TEXTURE_2D]=ze(i.TEXTURE_2D,i.TEXTURE_2D,1),Qe[i.TEXTURE_CUBE_MAP]=ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Qe[i.TEXTURE_2D_ARRAY]=ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Qe[i.TEXTURE_3D]=ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ke(i.DEPTH_TEST),o.setFunc(No),We(!1),De(Qu),ke(i.CULL_FACE),Ue(eo);function ke(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function be(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Tt(U,me){return d[U]!==me?(i.bindFramebuffer(U,me),d[U]=me,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=me),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=me),!0):!1}function rt(U,me){let ae=p,Le=!1;if(U){ae=f.get(me),ae===void 0&&(ae=[],f.set(me,ae));let Fe=U.textures;if(ae.length!==Fe.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Ne=0,je=Fe.length;Ne<je;Ne++)ae[Ne]=i.COLOR_ATTACHMENT0+Ne;ae.length=Fe.length,Le=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,Le=!0);Le&&i.drawBuffers(ae)}function Nt(U){return v!==U?(i.useProgram(U),v=U,!0):!1}let Et={[to]:i.FUNC_ADD,[om]:i.FUNC_SUBTRACT,[am]:i.FUNC_REVERSE_SUBTRACT};Et[lm]=i.MIN,Et[cm]=i.MAX;let pe={[hm]:i.ZERO,[um]:i.ONE,[dm]:i.SRC_COLOR,[nd]:i.SRC_ALPHA,[xm]:i.SRC_ALPHA_SATURATE,[gm]:i.DST_COLOR,[pm]:i.DST_ALPHA,[fm]:i.ONE_MINUS_SRC_COLOR,[id]:i.ONE_MINUS_SRC_ALPHA,[_m]:i.ONE_MINUS_DST_COLOR,[mm]:i.ONE_MINUS_DST_ALPHA,[ym]:i.CONSTANT_COLOR,[vm]:i.ONE_MINUS_CONSTANT_COLOR,[Mm]:i.CONSTANT_ALPHA,[Sm]:i.ONE_MINUS_CONSTANT_ALPHA};function Ue(U,me,ae,Le,Fe,Ne,je,St,Ee,ot){if(U===eo){m===!0&&(be(i.BLEND),m=!1);return}if(m===!1&&(ke(i.BLEND),m=!0),U!==rm){if(U!==g||ot!==N){if((M!==to||C!==to)&&(i.blendEquation(i.FUNC_ADD),M=to,C=to),ot)switch(U){case Qo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ii:i.blendFunc(i.ONE,i.ONE);break;case ed:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case td:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:_t("WebGLState: Invalid blending: ",U);break}else switch(U){case Qo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ed:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case td:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",U);break}T=null,S=null,R=null,x=null,b.set(0,0,0),z=0,g=U,N=ot}return}Fe=Fe||me,Ne=Ne||ae,je=je||Le,(me!==M||Fe!==C)&&(i.blendEquationSeparate(Et[me],Et[Fe]),M=me,C=Fe),(ae!==T||Le!==S||Ne!==R||je!==x)&&(i.blendFuncSeparate(pe[ae],pe[Le],pe[Ne],pe[je]),T=ae,S=Le,R=Ne,x=je),(St.equals(b)===!1||Ee!==z)&&(i.blendColor(St.r,St.g,St.b,Ee),b.copy(St),z=Ee),g=U,N=!1}function de(U,me){U.side===Qt?be(i.CULL_FACE):ke(i.CULL_FACE);let ae=U.side===yi;me&&(ae=!ae),We(ae),U.blending===Qo&&U.transparent===!1?Ue(eo):Ue(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Le=U.stencilWrite;a.setTest(Le),Le&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),tt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ke(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(U){B!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),B=U)}function De(U){U!==nm?(ke(i.CULL_FACE),U!==W&&(U===Qu?i.cullFace(i.BACK):U===im?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),W=U}function ut(U){U!==Z&&(ee&&i.lineWidth(U),Z=U)}function tt(U,me,ae){U?(ke(i.POLYGON_OFFSET_FILL),(P!==me||Y!==ae)&&(P=me,Y=ae,o.getReversed()&&(me=-me,ae=-ae),i.polygonOffset(me,ae))):be(i.POLYGON_OFFSET_FILL)}function Rt(U){U?ke(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function nt(U){U===void 0&&(U=i.TEXTURE0+K-1),le!==U&&(i.activeTexture(U),le=U)}function gt(U,me,ae){ae===void 0&&(le===null?ae=i.TEXTURE0+K-1:ae=le);let Le=fe[ae];Le===void 0&&(Le={type:void 0,texture:void 0},fe[ae]=Le),(Le.type!==U||Le.texture!==me)&&(le!==ae&&(i.activeTexture(ae),le=ae),i.bindTexture(U,me||Qe[U]),Le.type=U,Le.texture=me)}function H(){let U=fe[le];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _n(){try{i.compressedTexImage2D(...arguments)}catch(U){_t("WebGLState:",U)}}function mt(){try{i.compressedTexImage3D(...arguments)}catch(U){_t("WebGLState:",U)}}function Mt(){try{i.texSubImage2D(...arguments)}catch(U){_t("WebGLState:",U)}}function Re(){try{i.texSubImage3D(...arguments)}catch(U){_t("WebGLState:",U)}}function un(){try{i.compressedTexSubImage2D(...arguments)}catch(U){_t("WebGLState:",U)}}function st(){try{i.compressedTexSubImage3D(...arguments)}catch(U){_t("WebGLState:",U)}}function ft(){try{i.texStorage2D(...arguments)}catch(U){_t("WebGLState:",U)}}function I(){try{i.texStorage3D(...arguments)}catch(U){_t("WebGLState:",U)}}function w(){try{i.texImage2D(...arguments)}catch(U){_t("WebGLState:",U)}}function te(){try{i.texImage3D(...arguments)}catch(U){_t("WebGLState:",U)}}function Te(U){return u[U]!==void 0?u[U]:i.getParameter(U)}function ge(U,me){u[U]!==me&&(i.pixelStorei(U,me),u[U]=me)}function Se(U){ie.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ie.copy(U))}function Pe(U){Ce.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ce.copy(U))}function ce(U,me){let ae=c.get(me);ae===void 0&&(ae=new WeakMap,c.set(me,ae));let Le=ae.get(U);Le===void 0&&(Le=i.getUniformBlockIndex(me,U.name),i.uniformBlockBinding(me,Le,Le),ae.set(U,Le))}function ue(U,me,ae){let Fe=c.get(me).get(U);l[Fe]!==ae&&(i.bindBufferBase(i.UNIFORM_BUFFER,Fe,ae),l[Fe]=ae)}function Ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},le=null,fe={},d={},l={},f=new WeakMap,p=[],v=null,m=!1,g=null,M=null,T=null,S=null,C=null,R=null,x=null,b=new qe(0,0,0),z=0,N=!1,B=null,W=null,Z=null,P=null,Y=null,ie.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ke,disable:be,bindFramebuffer:Tt,drawBuffers:rt,useProgram:Nt,setBlending:Ue,setMaterial:de,setFlipSided:We,setCullFace:De,setLineWidth:ut,setPolygonOffset:tt,setScissorTest:Rt,activeTexture:nt,bindTexture:gt,unbindTexture:H,compressedTexImage2D:_n,compressedTexImage3D:mt,texImage2D:w,texImage3D:te,pixelStorei:ge,getParameter:Te,updateUBOMapping:ce,uniformBlockBinding:ue,texStorage2D:ft,texStorage3D:I,texSubImage2D:Mt,texSubImage3D:Re,compressedTexSubImage2D:un,compressedTexSubImage3D:st,scissor:Se,viewport:Pe,reset:Ae}}function uS(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,v=new FinalizationRegistry(I=>p.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return m?new OffscreenCanvas(I,w):Uo("canvas")}function M(I,w,te){let Te=1,ge=ft(I);if((ge.width>te||ge.height>te)&&(Te=te/Math.max(ge.width,ge.height)),Te<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Se=Math.floor(Te*ge.width),Pe=Math.floor(Te*ge.height);d===void 0&&(d=g(Se,Pe));let ce=w?g(Se,Pe):d;return ce.width=Se,ce.height=Pe,ce.getContext("2d").drawImage(I,0,0,Se,Pe),at("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Se+"x"+Pe+")."),ce}else return"data"in I&&at("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),I;return I}function T(I){return I.generateMipmaps}function S(I){i.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(I,w,te,Te,ge,Se=!1){if(I!==null){if(i[I]!==void 0)return i[I];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Pe;Te&&(Pe=e.get("EXT_texture_norm16"),Pe||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=w;if(w===i.RED&&(te===i.FLOAT&&(ce=i.R32F),te===i.HALF_FLOAT&&(ce=i.R16F),te===i.UNSIGNED_BYTE&&(ce=i.R8),te===i.UNSIGNED_SHORT&&Pe&&(ce=Pe.R16_EXT),te===i.SHORT&&Pe&&(ce=Pe.R16_SNORM_EXT)),w===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(ce=i.R8UI),te===i.UNSIGNED_SHORT&&(ce=i.R16UI),te===i.UNSIGNED_INT&&(ce=i.R32UI),te===i.BYTE&&(ce=i.R8I),te===i.SHORT&&(ce=i.R16I),te===i.INT&&(ce=i.R32I)),w===i.RG&&(te===i.FLOAT&&(ce=i.RG32F),te===i.HALF_FLOAT&&(ce=i.RG16F),te===i.UNSIGNED_BYTE&&(ce=i.RG8),te===i.UNSIGNED_SHORT&&Pe&&(ce=Pe.RG16_EXT),te===i.SHORT&&Pe&&(ce=Pe.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(te===i.UNSIGNED_BYTE&&(ce=i.RG8UI),te===i.UNSIGNED_SHORT&&(ce=i.RG16UI),te===i.UNSIGNED_INT&&(ce=i.RG32UI),te===i.BYTE&&(ce=i.RG8I),te===i.SHORT&&(ce=i.RG16I),te===i.INT&&(ce=i.RG32I)),w===i.RGB_INTEGER&&(te===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),te===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),te===i.UNSIGNED_INT&&(ce=i.RGB32UI),te===i.BYTE&&(ce=i.RGB8I),te===i.SHORT&&(ce=i.RGB16I),te===i.INT&&(ce=i.RGB32I)),w===i.RGBA_INTEGER&&(te===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),te===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),te===i.UNSIGNED_INT&&(ce=i.RGBA32UI),te===i.BYTE&&(ce=i.RGBA8I),te===i.SHORT&&(ce=i.RGBA16I),te===i.INT&&(ce=i.RGBA32I)),w===i.RGB&&(te===i.UNSIGNED_SHORT&&Pe&&(ce=Pe.RGB16_EXT),te===i.SHORT&&Pe&&(ce=Pe.RGB16_SNORM_EXT),te===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),te===i.UNSIGNED_INT_10F_11F_11F_REV&&(ce=i.R11F_G11F_B10F)),w===i.RGBA){let ue=Se?za:Wt.getTransfer(ge);te===i.FLOAT&&(ce=i.RGBA32F),te===i.HALF_FLOAT&&(ce=i.RGBA16F),te===i.UNSIGNED_BYTE&&(ce=ue===pn?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT&&Pe&&(ce=Pe.RGBA16_EXT),te===i.SHORT&&Pe&&(ce=Pe.RGBA16_SNORM_EXT),te===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function x(I,w){let te;return I?w===null||w===ms||w===so?te=i.DEPTH24_STENCIL8:w===ci?te=i.DEPTH32F_STENCIL8:w===ia&&(te=i.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ms||w===so?te=i.DEPTH_COMPONENT24:w===ci?te=i.DEPTH_COMPONENT32F:w===ia&&(te=i.DEPTH_COMPONENT16),te}function b(I,w){return T(I)===!0||I.isFramebufferTexture&&I.minFilter!==kn&&I.minFilter!==Sn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function z(I){let w=new WeakRef(I);n.get(I).__ref=w,p.add(w),v.register(I,w,w)}function N(I){let w=n.get(I).__ref;w!==void 0&&(p.delete(w),v.unregister(w))}function B(I){Z(I.target)}function W(I){P(I.target)}function Z(I){I.removeEventListener("dispose",B),N(I),K(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function P(I){I.removeEventListener("dispose",W),N(I),oe(I)}function Y(){for(let I of p){let w=I.deref();w!==void 0&&(w.isRenderTarget===!0?P(w):Z(w))}p.clear(),u.clear()}function K(I){let w=n.get(I);if(w.__webglInit===void 0)return;let te=I.source,Te=f.get(te);if(Te){let ge=Te[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&ee(I),Object.keys(Te).length===0&&f.delete(te)}n.remove(I)}function ee(I){let w=n.get(I);i.deleteTexture(w.__webglTexture);let te=I.source,Te=f.get(te);delete Te[w.__cacheKey],o.memory.textures--}function oe(I){let w=n.get(I);w.__depthDisposeCallback&&w.__depthDisposeCallback();let te=I.depthTexture;if(te&&te.renderTarget===I&&Z(te),I.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(w.__webglFramebuffer[ge]))for(let Se=0;Se<w.__webglFramebuffer[ge].length;Se++)i.deleteFramebuffer(w.__webglFramebuffer[ge][Se]);else i.deleteFramebuffer(w.__webglFramebuffer[ge]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ge])}else{if(Array.isArray(w.__webglFramebuffer))for(let ge=0;ge<w.__webglFramebuffer.length;ge++)i.deleteFramebuffer(w.__webglFramebuffer[ge]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ge=0;ge<w.__webglColorRenderbuffer.length;ge++)w.__webglColorRenderbuffer[ge]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ge]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let Te=I.textures;for(let ge=0,Se=Te.length;ge<Se;ge++){let Pe=n.get(Te[ge]);Pe.__webglTexture&&(i.deleteTexture(Pe.__webglTexture),o.memory.textures--),n.remove(Te[ge])}n.remove(I)}let ne=0;function le(){ne=0}function fe(){return ne}function Be(I){ne=I}function Ve(){let I=ne;return I>=s.maxTextures&&at("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),ne+=1,I}function ie(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.mipmapsAutoUpdate),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function Ce(I,w){let te=n.get(I);if(I.isVideoTexture&&un(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&te.__version!==I.version){let Te=I.image;if(Te===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(Te.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{de(te,I,w);return}}else I.isExternalTexture&&(te.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+w)}function ze(I,w){let te=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&te.__version!==I.version){de(te,I,w);return}else I.isExternalTexture&&(te.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+w)}function Qe(I,w){let te=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&te.__version!==I.version){de(te,I,w);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+w)}function ke(I,w){let te=n.get(I);if(I.version>0&&te.__version!==I.version){We(te,I,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+w)}let be={[Wn]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[gr]:i.MIRRORED_REPEAT},Tt={[kn]:i.NEAREST,[Zc]:i.NEAREST_MIPMAP_NEAREST,[io]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},rt={[Im]:i.NEVER,[Md]:i.ALWAYS,[Pm]:i.LESS,[yd]:i.LEQUAL,[Lm]:i.EQUAL,[vd]:i.GEQUAL,[Nm]:i.GREATER,[Dm]:i.NOTEQUAL};function Nt(I,w){if(w.type===ci&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Sn||w.magFilter===na||w.magFilter===io||w.magFilter===vi||w.minFilter===Sn||w.minFilter===na||w.minFilter===io||w.minFilter===vi)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,be[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,be[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,be[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Tt[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Tt[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,rt[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===kn||w.minFilter!==io&&w.minFilter!==vi||w.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let te=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Et(I,w){let te=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",B),z(w));let Te=w.source,ge=f.get(Te);ge===void 0&&(ge={},f.set(Te,ge));let Se=ie(w);if(Se!==I.__cacheKey){ge[Se]===void 0&&(ge[Se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,te=!0),ge[Se].usedTimes++;let Pe=ge[I.__cacheKey];Pe!==void 0&&(ge[I.__cacheKey].usedTimes--,Pe.usedTimes===0&&ee(w)),I.__cacheKey=Se,I.__webglTexture=ge[Se].texture}return te}function pe(I,w,te){return Math.floor(Math.floor(I/te)/w)}function Ue(I,w,te,Te){let Se=I.updateRanges;if(Se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,te,Te,w.data);else{Se.sort((U,me)=>U.start-me.start);let Pe=0;for(let U=1;U<Se.length;U++){let me=Se[Pe],ae=Se[U],Le=me.start+me.count,Fe=pe(ae.start,w.width,4),Ne=pe(me.start,w.width,4);ae.start<=Le+1&&Fe===Ne&&pe(ae.start+ae.count-1,w.width,4)===Fe?me.count=Math.max(me.count,ae.start+ae.count-me.start):(++Pe,Se[Pe]=ae)}Se.length=Pe+1;let ce=t.getParameter(i.UNPACK_ROW_LENGTH),ue=t.getParameter(i.UNPACK_SKIP_PIXELS),Ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let U=0,me=Se.length;U<me;U++){let ae=Se[U],Le=Math.floor(ae.start/4),Fe=Math.ceil(ae.count/4),Ne=Le%w.width,je=Math.floor(Le/w.width),St=Fe,Ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,je),t.texSubImage2D(i.TEXTURE_2D,0,Ne,je,St,Ee,te,Te,w.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ce),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function de(I,w,te){let Te=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Te=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Te=i.TEXTURE_3D);let ge=Et(I,w),Se=w.source;t.bindTexture(Te,I.__webglTexture,i.TEXTURE0+te);let Pe=n.get(Se);if(Se.version!==Pe.__version||ge===!0){if(t.activeTexture(i.TEXTURE0+te),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let Ee=Wt.getPrimaries(Wt.workingColorSpace),ot=w.colorSpace===nr?null:Wt.getPrimaries(w.colorSpace),xt=w.colorSpace===nr||Ee===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ue=M(w.image,!1,s.maxTextureSize);ue=st(w,ue);let Ae=r.convert(w.format,w.colorSpace),U=r.convert(w.type),me=R(w.internalFormat,Ae,U,w.normalized,w.colorSpace,w.isVideoTexture);Nt(Te,w);let ae,Le=w.mipmaps,Fe=w.isVideoTexture!==!0,Ne=Pe.__version===void 0||ge===!0,je=Se.dataReady,St=b(w,ue);if(w.isDepthTexture)me=x(w.format===tr,w.type),Ne&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,me,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,me,ue.width,ue.height,0,Ae,U,null));else if(w.isDataTexture)if(Le.length>0){Fe&&Ne&&t.texStorage2D(i.TEXTURE_2D,St,me,Le[0].width,Le[0].height);for(let Ee=0,ot=Le.length;Ee<ot;Ee++)ae=Le[Ee],Fe?je&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,ae.width,ae.height,Ae,U,ae.data):t.texImage2D(i.TEXTURE_2D,Ee,me,ae.width,ae.height,0,Ae,U,ae.data);w.generateMipmaps=!1}else Fe?(Ne&&t.texStorage2D(i.TEXTURE_2D,St,me,ue.width,ue.height),je&&Ue(w,ue,Ae,U)):t.texImage2D(i.TEXTURE_2D,0,me,ue.width,ue.height,0,Ae,U,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Fe&&Ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,St,me,Le[0].width,Le[0].height,ue.depth);for(let Ee=0,ot=Le.length;Ee<ot;Ee++)if(ae=Le[Ee],w.format!==Si)if(Ae!==null)if(Fe){if(je)if(w.layerUpdates.size>0){let xt=Ld(ae.width,ae.height,w.format,w.type);for(let Xe of w.layerUpdates){let Yt=ae.data.subarray(Xe*xt/ae.data.BYTES_PER_ELEMENT,(Xe+1)*xt/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,Xe,ae.width,ae.height,1,Ae,Yt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,ae.width,ae.height,ue.depth,Ae,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ee,me,ae.width,ae.height,ue.depth,0,ae.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?je&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,ae.width,ae.height,ue.depth,Ae,U,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ee,me,ae.width,ae.height,ue.depth,0,Ae,U,ae.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Fe&&Ne&&t.texStorage2D(i.TEXTURE_2D,St,me,Le[0].width,Le[0].height);for(let Ee=0,ot=Le.length;Ee<ot;Ee++)ae=Le[Ee],w.format!==Si?Ae!==null?Fe?je&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ee,0,0,ae.width,ae.height,Ae,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,Ee,me,ae.width,ae.height,0,ae.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?je&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,ae.width,ae.height,Ae,U,ae.data):t.texImage2D(i.TEXTURE_2D,Ee,me,ae.width,ae.height,0,Ae,U,ae.data)}else if(w.isDataArrayTexture)if(Fe){if(Ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,St,me,ue.width,ue.height,ue.depth),je)if(w.layerUpdates.size>0){let Ee=Ld(ue.width,ue.height,w.format,w.type);for(let ot of w.layerUpdates){let xt=ue.data.subarray(ot*Ee/ue.data.BYTES_PER_ELEMENT,(ot+1)*Ee/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,ue.width,ue.height,1,Ae,U,xt)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ae,U,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,ue.width,ue.height,ue.depth,0,Ae,U,ue.data);else if(w.isData3DTexture)Fe?(Ne&&t.texStorage3D(i.TEXTURE_3D,St,me,ue.width,ue.height,ue.depth),je&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ae,U,ue.data)):t.texImage3D(i.TEXTURE_3D,0,me,ue.width,ue.height,ue.depth,0,Ae,U,ue.data);else if(w.isFramebufferTexture){if(Ne)if(Fe)t.texStorage2D(i.TEXTURE_2D,St,me,ue.width,ue.height);else{let Ee=ue.width,ot=ue.height;for(let xt=0;xt<St;xt++)t.texImage2D(i.TEXTURE_2D,xt,me,Ee,ot,0,Ae,U,null),Ee>>=1,ot>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let Ee=i.canvas;if(Ee.hasAttribute("layoutsubtree")||Ee.setAttribute("layoutsubtree","true"),ue.parentNode!==Ee){Ee.appendChild(ue),u.add(w),Ee.onpaint=ot=>{let xt=ot.changedElements;for(let Xe of u)xt.includes(Xe.image)&&(Xe.needsUpdate=!0)},Ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ue);else{let xt=i.RGBA,Xe=i.RGBA,Yt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,Xe,Yt,ue)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Fe&&Ne){let Ee=ft(Le[0]);t.texStorage2D(i.TEXTURE_2D,St,me,Ee.width,Ee.height)}for(let Ee=0,ot=Le.length;Ee<ot;Ee++)ae=Le[Ee],Fe?je&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,Ae,U,ae):t.texImage2D(i.TEXTURE_2D,Ee,me,Ae,U,ae);w.generateMipmaps=!1}else if(Fe){if(Ne){let Ee=ft(ue);t.texStorage2D(i.TEXTURE_2D,St,me,Ee.width,Ee.height)}je&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,U,ue)}else t.texImage2D(i.TEXTURE_2D,0,me,Ae,U,ue);T(w)&&w.mipmapsAutoUpdate===!0&&S(Te),Pe.__version=Se.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function We(I,w,te){if(w.image.length!==6)return;let Te=Et(I,w),ge=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+te);let Se=n.get(ge);if(ge.version!==Se.__version||Te===!0){t.activeTexture(i.TEXTURE0+te);let Pe=Wt.getPrimaries(Wt.workingColorSpace),ce=w.colorSpace===nr?null:Wt.getPrimaries(w.colorSpace),ue=w.colorSpace===nr||Pe===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Ae=w.isCompressedTexture||w.image[0].isCompressedTexture,U=w.image[0]&&w.image[0].isDataTexture,me=[];for(let Xe=0;Xe<6;Xe++)!Ae&&!U?me[Xe]=M(w.image[Xe],!0,s.maxCubemapSize):me[Xe]=U?w.image[Xe].image:w.image[Xe],me[Xe]=st(w,me[Xe]);let ae=me[0],Le=r.convert(w.format,w.colorSpace),Fe=r.convert(w.type),Ne=R(w.internalFormat,Le,Fe,w.normalized,w.colorSpace),je=w.isVideoTexture!==!0,St=Se.__version===void 0||Te===!0,Ee=ge.dataReady,ot=b(w,ae);Nt(i.TEXTURE_CUBE_MAP,w);let xt;if(w.isDepthTexture){if(Ne=x(w.format===tr,w.type),St)if(je)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ne,ae.width,ae.height);else for(let Xe=0;Xe<6;Xe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,Ne,ae.width,ae.height,0,Le,Fe,null)}else if(Ae){je&&St&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Ne,ae.width,ae.height);for(let Xe=0;Xe<6;Xe++){xt=me[Xe].mipmaps;for(let Yt=0;Yt<xt.length;Yt++){let wn=xt[Yt];w.format!==Si?Le!==null?je?Ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Yt,0,0,wn.width,wn.height,Le,wn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Yt,Ne,wn.width,wn.height,0,wn.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Yt,0,0,wn.width,wn.height,Le,Fe,wn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Yt,Ne,wn.width,wn.height,0,Le,Fe,wn.data)}}}else{if(xt=w.mipmaps,je&&St){xt.length>0&&ot++;let Xe=ft(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Ne,Xe.width,Xe.height)}for(let Xe=0;Xe<6;Xe++)if(U){je?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,0,0,me[Xe].width,me[Xe].height,Le,Fe,me[Xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,Ne,me[Xe].width,me[Xe].height,0,Le,Fe,me[Xe].data);for(let Yt=0;Yt<xt.length;Yt++){let Xn=xt[Yt].image[Xe].image;je?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Yt+1,0,0,Xn.width,Xn.height,Le,Fe,Xn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Yt+1,Ne,Xn.width,Xn.height,0,Le,Fe,Xn.data)}}else{je?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,0,0,Le,Fe,me[Xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,Ne,Le,Fe,me[Xe]);for(let Yt=0;Yt<xt.length;Yt++){let wn=xt[Yt];je?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Yt+1,0,0,Le,Fe,wn.image[Xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Yt+1,Ne,Le,Fe,wn.image[Xe])}}}T(w)&&w.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),Se.__version=ge.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function De(I,w,te,Te,ge,Se){let Pe=r.convert(te.format,te.colorSpace),ce=r.convert(te.type),ue=R(te.internalFormat,Pe,ce,te.normalized,te.colorSpace),Ae=n.get(w),U=n.get(te);if(U.__renderTarget=w,!Ae.__hasExternalTextures){let me=Math.max(1,w.width>>Se),ae=Math.max(1,w.height>>Se);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,Se,ue,me,ae,w.depth,0,Pe,ce,null):t.texImage2D(ge,Se,ue,me,ae,0,Pe,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Re(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,ge,U.__webglTexture,0,Mt(w)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Te,ge,U.__webglTexture,Se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(I,w,te){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){let Te=w.depthTexture,ge=Te&&Te.isDepthTexture?Te.type:null,Se=x(w.stencilBuffer,ge),Pe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Re(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(w),Se,w.width,w.height):te?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(w),Se,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Se,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,I)}else{let Te=w.textures;for(let ge=0;ge<Te.length;ge++){let Se=Te[ge],Pe=r.convert(Se.format,Se.colorSpace),ce=r.convert(Se.type),ue=R(Se.internalFormat,Pe,ce,Se.normalized,Se.colorSpace);Re(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(w),ue,w.width,w.height):te?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(w),ue,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ue,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(I,w,te){let Te=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ge=n.get(w.depthTexture);ge.__renderTarget=w;let Se=Te?w.depthTexture.image[0]:w.depthTexture.image;(!ge.__webglTexture||Se.width!==w.width||Se.height!==w.height)&&(Se.width=w.width,Se.height=w.height,w.depthTexture.needsUpdate=!0),Te?ke(w.depthTexture,0):Ce(w.depthTexture,0);let Pe=ge.__webglTexture,ce=Mt(w),ue=Te?i.TEXTURE_CUBE_MAP_POSITIVE_X+te:i.TEXTURE_2D,Ae=w.depthTexture.format===tr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ws)Re(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ae,ue,Pe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,Ae,ue,Pe,0);else if(w.depthTexture.format===tr)Re(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ae,ue,Pe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,Ae,ue,Pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt(I){let w=n.get(I),te=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let Te=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Te){let ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Te.removeEventListener("dispose",ge)};Te.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=Te}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(te)for(let Te=0;Te<6;Te++)tt(w.__webglFramebuffer[Te],I,Te);else I.texture.mipmaps.length>0?tt(w.__webglFramebuffer[0],I,0):tt(w.__webglFramebuffer,I,0);else if(te){w.__webglDepthbuffer=[];for(let Te=0;Te<6;Te++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Te]),w.__webglDepthbuffer[Te]===void 0)w.__webglDepthbuffer[Te]=i.createRenderbuffer(),ut(w.__webglDepthbuffer[Te],I,!1);else{let ge=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=w.__webglDepthbuffer[Te];i.bindRenderbuffer(i.RENDERBUFFER,Se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,Se)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ut(w.__webglDepthbuffer,I,!1);else{let ge=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,Se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(I,w,te){let Te=n.get(I);w!==void 0&&De(Te.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&Rt(I)}function gt(I){let w=I.texture,te=n.get(I),Te=n.get(w);I.addEventListener("dispose",W),z(I);let ge=I.textures,Se=I.isWebGLCubeRenderTarget===!0,Pe=ge.length>1;if(Pe||(Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture()),Te.__version=w.version,o.memory.textures++),Se){te.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(w.mipmaps.length>0){te.__webglFramebuffer[ce]=[];for(let ue=0;ue<w.mipmaps.length;ue++)te.__webglFramebuffer[ce][ue]=i.createFramebuffer()}else te.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(w.mipmaps.length>0){te.__webglFramebuffer=[];for(let ce=0;ce<w.mipmaps.length;ce++)te.__webglFramebuffer[ce]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let ce=0,ue=ge.length;ce<ue;ce++){let Ae=n.get(ge[ce]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Re(I)===!1){te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let ce=0;ce<ge.length;ce++){let ue=ge[ce];te.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[ce]);let Ae=r.convert(ue.format,ue.colorSpace),U=r.convert(ue.type),me=R(ue.internalFormat,Ae,U,ue.normalized,ue.colorSpace,I.isXRRenderTarget===!0),ae=Mt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,me,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,te.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(te.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Se){t.bindTexture(i.TEXTURE_CUBE_MAP,Te.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,w);for(let ce=0;ce<6;ce++)if(w.mipmaps.length>0)for(let ue=0;ue<w.mipmaps.length;ue++)De(te.__webglFramebuffer[ce][ue],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else De(te.__webglFramebuffer[ce],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);T(w)?S(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(Pe){for(let ce=0,ue=ge.length;ce<ue;ce++){let Ae=ge[ce],U=n.get(Ae),me=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,U.__webglTexture),Nt(me,Ae),De(te.__webglFramebuffer,I,Ae,i.COLOR_ATTACHMENT0+ce,me,0),T(Ae)&&S(me)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ce=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Te.__webglTexture),Nt(ce,w),w.mipmaps.length>0)for(let ue=0;ue<w.mipmaps.length;ue++)De(te.__webglFramebuffer[ue],I,w,i.COLOR_ATTACHMENT0,ce,ue);else De(te.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,ce,0);T(w)?S(ce):w.mipmaps.length>0&&i.texParameteri(ce,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&Rt(I)}function H(I){let w=I.textures;for(let te=0,Te=w.length;te<Te;te++){let ge=w[te];if(T(ge)&&ge.mipmapsAutoUpdate===!0){let Se=C(I),Pe=n.get(ge).__webglTexture;t.bindTexture(Se,Pe),S(Se),t.unbindTexture()}}}let _n=[];function mt(I){if(I.samples>0){if(Re(I)===!1){let w=I.textures,te=I.width,Te=I.height,ge=i.COLOR_BUFFER_BIT,Se=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(I),ce=w.length>1;if(ce)for(let Ae=0;Ae<w.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ae=0;Ae<w.length;Ae++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ae]);let U=n.get(w[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,U,0)}i.blitFramebuffer(0,0,te,Te,0,0,te,Te,ge,i.NEAREST),l===!0&&(_n.length=0,_n.push(i.COLOR_ATTACHMENT0+Ae),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&_n.push(Se),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_n))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Ae=0;Ae<w.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ae]);let U=n.get(w[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,U,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Mt(I){return Math.min(s.maxSamples,I.samples)}function Re(I){let w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function un(I){let w=o.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function st(I,w){let te=I.colorSpace,Te=I.format,ge=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||te!==ei&&te!==nr&&(Wt.getTransfer(te)===pn?(Te!==Si||ge!==Pi)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",te)),w}function ft(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Ve,this.resetTextureUnits=le,this.getTextureUnits=fe,this.setTextureUnits=Be,this.setTexture2D=Ce,this.setTexture2DArray=ze,this.setTexture3D=Qe,this.setTextureCube=ke,this.rebindTextures=nt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Re,this.dispose=Y}function dS(i,e){function t(n,s=nr){let r,o=Wt.getTransfer(s);if(n===Pi)return i.UNSIGNED_BYTE;if(n===jc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$c)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===md)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===dd)return i.BYTE;if(n===fd)return i.SHORT;if(n===ia)return i.UNSIGNED_SHORT;if(n===Jc)return i.INT;if(n===ms)return i.UNSIGNED_INT;if(n===ci)return i.FLOAT;if(n===Mi)return i.HALF_FLOAT;if(n===gd)return i.ALPHA;if(n===_d)return i.RGB;if(n===Si)return i.RGBA;if(n===Ws)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===Qc)return i.RED;if(n===eh)return i.RED_INTEGER;if(n===Er)return i.RG;if(n===th)return i.RG_INTEGER;if(n===nh)return i.RGBA_INTEGER;if(n===dl||n===fl||n===pl||n===ml)if(o===pn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ml)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ih||n===sh||n===rh||n===oh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ih)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ah||n===lh||n===ch||n===hh||n===uh||n===gl||n===dh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ah||n===lh)return o===pn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ch)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===hh)return r.COMPRESSED_R11_EAC;if(n===uh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===gl)return r.COMPRESSED_RG11_EAC;if(n===dh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fh||n===ph||n===mh||n===gh||n===_h||n===xh||n===yh||n===vh||n===Mh||n===Sh||n===bh||n===wh||n===Th||n===Ah)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fh)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ph)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mh)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gh)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_h)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xh)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yh)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vh)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mh)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sh)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bh)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wh)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Th)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ah)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eh||n===Rh||n===Ch)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Eh)return o===pn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ch)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ih||n===Ph||n===_l||n===Lh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ih)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ph)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===so?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var fS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,qd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ja(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ki({vertexShader:fS,fragmentShader:pS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new Dt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yd=class extends Ss{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,v=typeof XRWebGLBinding<"u",m=new qd,g={},M=t.getContextAttributes(),T=null,S=null,C=[],R=[],x=new ve,b=null,z=null,N=new zn;N.viewport=new hn;let B=new zn;B.viewport=new hn;let W=[N,B],Z=new Xc,P=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let Ce=C[ie];return Ce===void 0&&(Ce=new zo,C[ie]=Ce),Ce.getTargetRaySpace()},this.getControllerGrip=function(ie){let Ce=C[ie];return Ce===void 0&&(Ce=new zo,C[ie]=Ce),Ce.getGripSpace()},this.getHand=function(ie){let Ce=C[ie];return Ce===void 0&&(Ce=new zo,C[ie]=Ce),Ce.getHandSpace()};function K(ie){let Ce=R.indexOf(ie.inputSource);if(Ce===-1)return;let ze=C[Ce];ze!==void 0&&(ze.update(ie.inputSource,ie.frame,c||o),ze.dispatchEvent({type:ie.type,data:ie.inputSource}))}function ee(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",oe);for(let ie=0;ie<C.length;ie++){let Ce=R[ie];Ce!==null&&(R[ie]=null,C[ie].disconnect(Ce))}P=null,Y=null,m.reset();for(let ie in g)delete g[ie];if(e.setRenderTarget(T),f=null,d=null,u=null,s=null,S=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),z!==null){let ie=z.camera;ie.fov=z.fov,ie.zoom=z.zoom,ie.updateProjectionMatrix(),z=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,n.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",oe),M.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ze=null,Qe=null,ke=null;M.depth&&(ke=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ze=M.stencil?tr:Ws,Qe=M.stencil?so:ms);let be={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Bi(d.textureWidth,d.textureHeight,{format:Si,type:Pi,depthTexture:new Ys(d.textureWidth,d.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,ze),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ze={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ze),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Bi(f.framebufferWidth,f.framebufferHeight,{format:Si,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(ie){for(let Ce=0;Ce<ie.removed.length;Ce++){let ze=ie.removed[Ce],Qe=R.indexOf(ze);Qe>=0&&(R[Qe]=null,C[Qe].disconnect(ze))}for(let Ce=0;Ce<ie.added.length;Ce++){let ze=ie.added[Ce],Qe=R.indexOf(ze);if(Qe===-1){for(let be=0;be<C.length;be++)if(be>=R.length){R.push(ze),Qe=be;break}else if(R[be]===null){R[be]=ze,Qe=be;break}if(Qe===-1)break}let ke=C[Qe];ke&&ke.connect(ze)}}function ne(ie,Ce){Ce===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(Ce.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let Ce=ie.near,ze=ie.far;m.texture!==null&&(m.depthNear>0&&(Ce=m.depthNear),m.depthFar>0&&(ze=m.depthFar)),Z.near=B.near=N.near=Ce,Z.far=B.far=N.far=ze,(P!==Z.near||Y!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),P=Z.near,Y=Z.far),Z.layers.mask=ie.layers.mask|6,N.layers.mask=Z.layers.mask&-5,B.layers.mask=Z.layers.mask&-3;let Qe=ie.parent,ke=Z.cameras;ne(Z,Qe);for(let be=0;be<ke.length;be++)ne(ke[be],Qe);Z.projectionMatrix.copy(N.projectionMatrix),Z.projectionMatrixInverse.copy(N.projectionMatrixInverse),z===null&&ie.isPerspectiveCamera&&(z={camera:ie,fov:ie.fov,zoom:ie.zoom}),le(ie,Z,Qe)};function le(ie,Ce,ze){ze===null?ie.matrix.copy(Ce.matrixWorld):(ie.matrix.copy(ze.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(Ce.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(Ce.projectionMatrix),ie.projectionMatrixInverse.copy(Ce.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Xr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Z)},this.getCameraTexture=function(ie){return g[ie]};let fe=null;function Be(ie,Ce){if(h=Ce.getViewerPose(c||o),p=Ce,h!==null){let ze=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Qe=!1;ze.length!==Z.cameras.length&&(Z.cameras.length=0,Qe=!0);for(let rt=0;rt<ze.length;rt++){let Nt=ze[rt],Et=null;if(f!==null)Et=f.getViewport(Nt);else{let Ue=u.getViewSubImage(d,Nt);Et=Ue.viewport,rt===0&&(e.setRenderTargetTextures(S,Ue.colorTexture,Ue.depthStencilTexture),e.setRenderTarget(S))}let pe=W[rt];pe===void 0&&(pe=new zn,pe.layers.enable(rt),pe.viewport=new hn,W[rt]=pe),pe.matrix.fromArray(Nt.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Nt.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Et.x,Et.y,Et.width,Et.height),rt===0&&(Z.matrix.copy(pe.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Qe===!0&&Z.cameras.push(pe)}let ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let rt=u.getDepthInformation(ze[0]);rt&&rt.isValid&&rt.texture&&m.init(rt,s.renderState)}if(ke&&ke.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let rt=0;rt<ze.length;rt++){let Nt=ze[rt].camera;if(Nt){let Et=g[Nt];Et||(Et=new ja,g[Nt]=Et);let pe=u.getCameraImage(Nt);Et.sourceTexture=pe}}}}for(let ze=0;ze<C.length;ze++){let Qe=R[ze],ke=C[ze];Qe!==null&&ke!==void 0&&ke.update(Qe,Ce,c||o)}fe&&fe(ie,Ce),Ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ce}),p=null}let Ve=new mg;Ve.setAnimationLoop(Be),this.setAnimationLoop=function(ie){fe=ie},this.dispose=function(){}}},mS=new wt,Tg=new Lt;Tg.set(-1,0,0,0,1,0,0,0,1);function gS(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Cd(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,M,T,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,S)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,M,T):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===yi&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===yi&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=e.get(g),T=M.envMap,S=M.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(mS.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Tg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=T*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===yi&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _S(i,e,t,n){let s={},r={};function o(M,T){let S=T.program;n.uniformBlockBinding(M,S,s[M.id])}function a(M,T){let S=s[M.id];S===void 0&&(p(M),S=l(M),s[M.id]=S,M.addEventListener("dispose",m));let C=T.program;n.updateUBOMapping(M,C);let R=e.render.frame;r[M.id]!==R&&(c(M),r[M.id]=R)}function l(M){let T=i.createBuffer(),S=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,S,C),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(M){let T=s[M.id],S=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let R=0,x=S.length;R<x;R++){let b=S[R];if(Array.isArray(b))for(let z=0,N=b.length;z<N;z++)h(b[z],R,z,C);else h(b,R,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,T,S,C){if(d(M,T,S,C)===!0){let R=M.__offset,x=M.value;if(Array.isArray(x)){let b=0;for(let z=0;z<x.length;z++){let N=x[z],B=v(N,!0);u(N,M.__data,b),b+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,M.__data)}}function u(M,T,S){typeof M=="number"||typeof M=="boolean"?T[S]=M:M.isMatrix3?(T[S]=M.elements[0],T[S+1]=M.elements[1],T[S+2]=M.elements[2],T[S+3]=0,T[S+4]=M.elements[3],T[S+5]=M.elements[4],T[S+6]=M.elements[5],T[S+7]=0,T[S+8]=M.elements[6],T[S+9]=M.elements[7],T[S+10]=M.elements[8],T[S+11]=0):ArrayBuffer.isView(M)?T.set(M.subarray(0,T.length-S),S):M.toArray(T,S)}function d(M,T,S,C){let R=M.value,x=T+"_"+S;if(Array.isArray(R)){C[x]===void 0&&(C[x]=[]);let b=C[x],z=!1;for(let N=0;N<R.length;N++)f(R[N],b,N)===!0&&(z=!0);return z}return f(R,C,x)}function f(M,T,S){if(T[S]===void 0)return typeof M=="number"||typeof M=="boolean"?T[S]=M:ArrayBuffer.isView(M)?T[S]=M.slice():T[S]=M.clone(),!0;{let C=T[S];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return T[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function p(M){let T=M.uniforms,S=0,C=16;for(let x=0,b=T.length;x<b;x++){let z=Array.isArray(T[x])?T[x]:[T[x]];for(let N=0,B=z.length;N<B;N++){let W=z[N],Z=Array.isArray(W.value)?W.value:[W.value],P=Array.isArray(T[x])||Array.isArray(W.value),Y=S;for(let ee=0,oe=Z.length;ee<oe;ee++){let ne=Z[ee],le=v(ne,P),fe=S%C,Be=fe%le.boundary,Ve=fe+Be;S+=Be,Ve!==0&&C-Ve<le.storage&&(S+=C-Ve),ee===0&&(Y=S),S+=le.storage}let K=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new K((S-Y)/Float32Array.BYTES_PER_ELEMENT),W.__offset=Y}}let R=S%C;return R>0&&(S+=C-R),M.__size=S,M.__cache={},this}function v(M,T){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):at("WebGLRenderer: Unsupported uniform value type.",M),T===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(M){let T=M.target;T.removeEventListener("dispose",m),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function g(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:g}}var xS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Es=null;function yS(){return Es===null&&(Es=new ds(xS,16,16,Er,Mi),Es.name="DFG_LUT",Es.minFilter=Sn,Es.magFilter=Sn,Es.wrapS=oi,Es.wrapT=oi,Es.generateMipmaps=!1,Es.needsUpdate=!0),Es}var Sl=class{constructor(e={}){let{canvas:t=Um(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Pi}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let v=f,m=new Set([nh,th,eh]),g=new Set([Pi,ms,ia,so,jc,$c]),M=new Uint32Array(4),T=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},C=null,R=null,x=[],b=[],z=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=As,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,B=!1,W=null,Z=null,P=null,Y=null;this._outputColorSpace=fn;let K=0,ee=0,oe=null,ne=-1,le=null,fe=new hn,Be=new hn,Ve=null,ie=new qe(0),Ce=0,ze=t.width,Qe=t.height,ke=1,be=null,Tt=null,rt=new hn(0,0,ze,Qe),Nt=new hn(0,0,ze,Qe),Et=!1,pe=new Sr,Ue=new Ec,de=!1,We=!1,De=new wt,ut=new O,tt=new hn,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function gt(){return oe===null?ke:1}let H=n;function _n(A,k){return t.getContext(A,k)}let mt,Mt,Re,un,st,ft,I,w,te,Te,ge,Se,Pe,ce,ue,Ae,U,me,ae,Le,Fe,Ne,je;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",xt,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),H===null){let k="webgl2";if(H=_n(k,A),H===null)throw _n(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}St()}catch(A){throw t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),_t("WebGLRenderer: "+A.message),A}function St(){mt=new Iv(H),mt.init(),Fe=new dS(H,mt),Mt=new yv(H,mt,e,Fe),Re=new hS(H,mt),Mt.reversedDepthBuffer&&d&&Re.buffers.depth.setReversed(!0),Z=H.createFramebuffer(),P=H.createFramebuffer(),Y=H.createFramebuffer(),un=new Nv(H),st=new JM,ft=new uS(H,mt,Re,st,Mt,Fe,un),I=new Cv(N),w=new U_(H),Ne=new _v(H,w),te=new Pv(H,w,un,Ne),Te=new Uv(H,te,w,Ne,un),me=new Dv(H,Mt,ft),ue=new vv(st),ge=new ZM(N,I,mt,Mt,Ne,ue),Se=new gS(N,st),Pe=new $M,ce=new sS(mt),U=new gv(N,I,Re,Te,p,l),Ae=new cS(N,Te,Mt),je=new _S(H,un,Mt,Re),ae=new xv(H,mt,un),Le=new Lv(H,mt,un),un.programs=ge.programs,N.capabilities=Mt,N.extensions=mt,N.properties=st,N.renderLists=Pe,N.shadowMap=Ae,N.state=Re,N.info=un}v!==Pi&&(z=new Ov(v,t.width,t.height,a,s,r));let Ee=new Yd(N,H);this.xr=Ee,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(A){A!==void 0&&(ke=A,this.setSize(ze,Qe,!1))},this.getSize=function(A){return A.set(ze,Qe)},this.setSize=function(A,k,se=!0){if(Ee.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}ze=A,Qe=k,t.width=Math.floor(A*ke),t.height=Math.floor(k*ke),se===!0&&(t.style.width=A+"px",t.style.height=k+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(ze*ke,Qe*ke).floor()},this.setDrawingBufferSize=function(A,k,se){ze=A,Qe=k,ke=se,t.width=Math.floor(A*se),t.height=Math.floor(k*se),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(v===Pi){_t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(fe)},this.getViewport=function(A){return A.copy(rt)},this.setViewport=function(A,k,se,Q){A.isVector4?rt.set(A.x,A.y,A.z,A.w):rt.set(A,k,se,Q),Re.viewport(fe.copy(rt).multiplyScalar(gt()).round())},this.getScissor=function(A){return A.copy(Nt)},this.setScissor=function(A,k,se,Q){A.isVector4?Nt.set(A.x,A.y,A.z,A.w):Nt.set(A,k,se,Q),Re.scissor(Be.copy(Nt).multiplyScalar(gt()).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(A){Re.setScissorTest(Et=A)},this.setOpaqueSort=function(A){be=A},this.setTransparentSort=function(A){Tt=A},this.getClearColor=function(A){return A.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,se=!0){let Q=0;if(A){let $=!1;if(oe!==null){let Oe=oe.texture.format;$=m.has(Oe)}if($){let Oe=oe.texture.type,Je=g.has(Oe),Ie=U.getClearColor(),He=U.getClearAlpha(),it=Ie.r,ct=Ie.g,Ct=Ie.b;Je?(M[0]=it,M[1]=ct,M[2]=Ct,M[3]=He,H.clearBufferuiv(H.COLOR,0,M)):(T[0]=it,T[1]=ct,T[2]=Ct,T[3]=He,H.clearBufferiv(H.COLOR,0,T))}else Q|=H.COLOR_BUFFER_BIT}k&&(Q|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(Q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&H.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),W=A},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),U.dispose(),Pe.dispose(),ce.dispose(),ft.dispose(),st.dispose(),I.dispose(),Te.dispose(),te.dispose(),Ne.dispose(),je.dispose(),ge.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Lr),Ee.removeEventListener("sessionend",sr),Vi.stop()};function ot(A){A.preventDefault(),ka("WebGLRenderer: Context Lost."),B=!0}function xt(){ka("WebGLRenderer: Context Restored."),B=!1;let A=un.autoReset,k=Ae.enabled,se=Ae.autoUpdate,Q=Ae.needsUpdate,$=Ae.type;St(),un.autoReset=A,Ae.enabled=k,Ae.autoUpdate=se,Ae.needsUpdate=Q,Ae.type=$}function Xe(A){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Yt(A){let k=A.target;k.removeEventListener("dispose",Yt),wn(k)}function wn(A){Xn(A),st.remove(A)}function Xn(A){let k=st.get(A).programs;k!==void 0&&(k.forEach(function(se){ge.releaseProgram(se)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,se,Q,$,Oe){k===null&&(k=Rt);let Je=$.isMesh&&$.matrixWorld.determinantAffine()<0,Ie=Bn(A,k,se,Q,$);Re.setMaterial(Q,Je);let He=se.index,it=1;if(Q.wireframe===!0){if(He=te.getWireframeAttribute(se),He===void 0)return;it=2}let ct=se.drawRange,Ct=se.attributes.position,$e=ct.start*it,Ot=(ct.start+ct.count)*it;Oe!==null&&($e=Math.max($e,Oe.start*it),Ot=Math.min(Ot,(Oe.start+Oe.count)*it)),He!==null?($e=Math.max($e,0),Ot=Math.min(Ot,He.count)):Ct!=null&&($e=Math.max($e,0),Ot=Math.min(Ot,Ct.count));let yn=Ot-$e;if(yn<0||yn===1/0)return;Ne.setup($,Q,Ie,se,He);let en,Jt=ae;if(He!==null&&(en=w.get(He),Jt=Le,Jt.setIndex(en)),$.isMesh)Q.wireframe===!0?(Re.setLineWidth(Q.wireframeLinewidth*gt()),Jt.setMode(H.LINES)):Jt.setMode(H.TRIANGLES);else if($.isLine){let bn=Q.linewidth;bn===void 0&&(bn=1),Re.setLineWidth(bn*gt()),$.isLineSegments?Jt.setMode(H.LINES):$.isLineLoop?Jt.setMode(H.LINE_LOOP):Jt.setMode(H.LINE_STRIP)}else $.isPoints?Jt.setMode(H.POINTS):$.isSprite&&Jt.setMode(H.TRIANGLES);if($.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))Jt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let bn=$._multiDrawStarts,Ze=$._multiDrawCounts,Cn=$._multiDrawCount,Vt=He?w.get(He).bytesPerElement:1,Qn=st.get(Q).currentProgram.getUniforms();for(let dn=0;dn<Cn;dn++)Qn.setValue(H,"_gl_DrawID",dn),Jt.render(bn[dn]/Vt,Ze[dn])}else if($.isInstancedMesh)Jt.renderInstances($e,yn,$.count);else if(se.isInstancedBufferGeometry){let bn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ze=Math.min(se.instanceCount,bn);Jt.renderInstances($e,yn,Ze)}else Jt.render($e,yn)};function Hi(A,k,se,Q){W!==null&&A.isNodeMaterial&&W.setObject(Q,A),de===!0&&ue.setState(A,se,!1),A.transparent===!0&&A.side===Qt&&A.forceSinglePass===!1?(A.side=yi,A.needsUpdate=!0,Xi(A,k,Q),A.side=Ts,A.needsUpdate=!0,Xi(A,k,Q),A.side=Qt):Xi(A,k,Q)}this.compile=function(A,k,se=null){se===null&&(se=A),W!==null&&W.renderStart(A,k,se),R=ce.get(se),R.init(k),b.push(R),se.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(R.pushLight($),$.castShadow&&R.pushShadow($))}),A!==se&&A.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(R.pushLight($),$.castShadow&&R.pushShadow($))}),R.setupLights(),W!==null&&W.updateLights(R.state.lightsArray),We=this.localClippingEnabled,de=ue.init(this.clippingPlanes,We),de===!0&&ue.setGlobalState(this.clippingPlanes,k),W!==null&&Ae.render(R.state.shadowsArray,se,k);let Q=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Oe=$.material;if(Oe)if(Array.isArray(Oe))for(let Je=0;Je<Oe.length;Je++){let Ie=Oe[Je];Hi(Ie,se,k,$),Q.add(Ie)}else Hi(Oe,se,k,$),Q.add(Oe)}),R=b.pop(),W!==null&&W.renderEnd(),Q},this.compileAsync=function(A,k,se=null){let Q=this.compile(A,k,se);return new Promise($=>{function Oe(){if(Q.forEach(function(Je){let He=st.get(Je).currentProgram;(He===void 0||He.isReady())&&Q.delete(Je)}),Q.size===0){$(A);return}setTimeout(Oe,10)}mt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Ni=null;function Is(A){Ni&&Ni(A)}function Lr(){Vi.stop()}function sr(){Vi.start()}let Vi=new mg;Vi.setAnimationLoop(Is),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(A){Ni=A,Ee.setAnimationLoop(A),A===null?Vi.stop():Vi.start()},Ee.addEventListener("sessionstart",Lr),Ee.addEventListener("sessionend",sr),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;W!==null&&W.renderStart(A,k);let se=Ee.enabled===!0&&Ee.isPresenting===!0,Q=z!==null&&(oe===null||se)&&z.begin(N,oe);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(k),k=Ee.getCamera()),A.isScene===!0&&A.onBeforeRender(N,A,k,oe),R=ce.get(A,b.length),R.init(k),R.state.textureUnits=ft.getTextureUnits(),b.push(R),De.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?Ue.setFromArrayCamera(k):pe.setFromProjectionMatrix(De,$i,k.reversedDepth),We=this.localClippingEnabled,de=ue.init(this.clippingPlanes,We),C=Pe.get(A,x.length),C.init(),x.push(C),this.info.render.frame++,Ee.enabled===!0&&Ee.isPresenting===!0){let Je=N.xr.getDepthSensingMesh();Je!==null&&Wi(Je,k,-1/0,N.sortObjects)}Wi(A,k,0,N.sortObjects),C.finish(),W!==null&&W.updateLights(R.state.lightsArray),N.sortObjects===!0&&C.sort(be,Tt),nt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,nt&&U.addToRenderList(C,A),this.info.autoReset===!0&&this.info.reset(),de===!0&&ue.beginShadows();let $=R.state.shadowsArray;if(Ae.render($,A,k),de===!0&&ue.endShadows(),(Q&&z.hasRenderPass())===!1){let Je=C.opaque,Ie=C.transmissive;if(R.setupLights(),k.isArrayCamera){let He=k.cameras;if(Ie.length>0)for(let it=0,ct=He.length;it<ct;it++){let Ct=He[it];ts(Je,Ie,A,Ct)}nt&&U.render(A);for(let it=0,ct=He.length;it<ct;it++){let Ct=He[it];rr(C,A,Ct,Ct.viewport)}}else Ie.length>0&&ts(Je,Ie,A,k),nt&&U.render(A),rr(C,A,k)}oe!==null&&ee===0&&(ft.updateMultisampleRenderTarget(oe),ft.updateRenderTargetMipmap(oe)),Q&&z.end(N),A.isScene===!0&&A.onAfterRender(N,A,k),Ne.resetDefaultState(),ne=-1,le=null,b.pop(),b.length>0?(R=b[b.length-1],ft.setTextureUnits(R.state.textureUnits),de===!0&&ue.setGlobalState(N.clippingPlanes,R.state.camera)):R=null,x.pop(),x.length>0?C=x[x.length-1]:C=null,W!==null&&W.renderEnd()};function Wi(A,k,se,Q){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)R.pushLight(A),A.castShadow&&R.pushShadow(A);else if(A.isSprite){let Je=k.isArrayCamera?Ue:pe;if(!A.frustumCulled||A.intersectsFrustum(Je)){Q&&tt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(De);let Ie=Te.update(A),He=A.material;He.visible&&C.push(A,Ie,He,se,tt.z,null,k)}}else if(A.isMesh||A.isLine||A.isPoints){let Je=k.isArrayCamera?Ue:pe;if(!A.frustumCulled||A.intersectsFrustum(Je)){let Ie=Te.update(A),He=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),tt.copy(A.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),tt.copy(Ie.boundingSphere.center)),tt.applyMatrix4(A.matrixWorld).applyMatrix4(De)),Array.isArray(He)){let it=Ie.groups;for(let ct=0,Ct=it.length;ct<Ct;ct++){let $e=it[ct],Ot=He[$e.materialIndex];Ot&&Ot.visible&&C.push(A,Ie,Ot,se,tt.z,$e,k)}}else He.visible&&C.push(A,Ie,He,se,tt.z,null,k)}}}let Oe=A.children;for(let Je=0,Ie=Oe.length;Je<Ie;Je++)Wi(Oe[Je],k,se,Q)}function rr(A,k,se,Q){let{opaque:$,transmissive:Oe,transparent:Je}=A;R.setupLightsView(se),de===!0&&ue.setGlobalState(N.clippingPlanes,se),Q&&Re.viewport(fe.copy(Q)),$.length>0&&or($,k,se),Oe.length>0&&or(Oe,k,se),Je.length>0&&or(Je,k,se),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function ts(A,k,se,Q){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[Q.id]===void 0){let $e=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[Q.id]=new Bi(1,1,{generateMipmaps:!0,type:$e?Mi:Pi,minFilter:vi,samples:Math.max(4,Mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}let Oe=R.state.transmissionRenderTarget[Q.id],Je=Q.viewport||fe;Oe.setSize(Je.z*N.transmissionResolutionScale,Je.w*N.transmissionResolutionScale);let Ie=N.getRenderTarget(),He=N.getActiveCubeFace(),it=N.getActiveMipmapLevel();N.setRenderTarget(Oe),N.getClearColor(ie),Ce=N.getClearAlpha(),Ce<1&&N.setClearColor(16777215,.5),N.clear(),nt&&U.render(se);let ct=N.toneMapping;N.toneMapping=As;let Ct=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),R.setupLightsView(Q),de===!0&&ue.setGlobalState(N.clippingPlanes,Q),or(A,se,Q),ft.updateMultisampleRenderTarget(Oe),ft.updateRenderTargetMipmap(Oe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ot=0,yn=k.length;Ot<yn;Ot++){let en=k[Ot],{object:Jt,geometry:bn,material:Ze,group:Cn}=en;if(Ze.side===Qt&&Jt.layers.test(Q.layers)){let Vt=Ze.side;Ze.side=yi,Ze.needsUpdate=!0,ns(Jt,se,Q,bn,Ze,Cn),Ze.side=Vt,Ze.needsUpdate=!0,$e=!0}}$e===!0&&(ft.updateMultisampleRenderTarget(Oe),ft.updateRenderTargetMipmap(Oe))}N.setRenderTarget(Ie,He,it),N.setClearColor(ie,Ce),Ct!==void 0&&(Q.viewport=Ct),N.toneMapping=ct}function or(A,k,se){let Q=k.isScene===!0?k.overrideMaterial:null;for(let $=0,Oe=A.length;$<Oe;$++){let Je=A[$],{object:Ie,geometry:He,group:it}=Je,ct=Je.material;ct.allowOverride===!0&&Q!==null&&(ct=Q),Ie.layers.test(se.layers)&&ns(Ie,k,se,He,ct,it)}}function ns(A,k,se,Q,$,Oe){W!==null&&$.isNodeMaterial&&W.setObject(A,$),A.onBeforeRender(N,k,se,Q,$,Oe),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(N,k,se,Q,A,Oe),$.transparent===!0&&$.side===Qt&&$.forceSinglePass===!1?($.side=yi,$.needsUpdate=!0,N.renderBufferDirect(se,k,Q,$,A,Oe),$.side=Ts,$.needsUpdate=!0,N.renderBufferDirect(se,k,Q,$,A,Oe),$.side=Qt):N.renderBufferDirect(se,k,Q,$,A,Oe),A.onAfterRender(N,k,se,Q,$,Oe)}function On(A){let k=0;for(let se of A)se.texture!==null&&k++;return k}function Xi(A,k,se){k.isScene!==!0&&(k=Rt);let Q=st.get(A),$=R.state.lights,Oe=R.state.shadowsArray,Je=$.state.version,Ie=ge.getParameters(A,$.state,Oe,k,se,R.state.lightProbeGridArray),He=ge.getProgramCacheKey(Ie),it=Q.programs;Q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,Q.fog=k.fog;let ct=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Q.envMap=I.get(A.envMap||Q.environment,ct),Q.envMapRotation=Q.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,it===void 0&&(A.addEventListener("dispose",Yt),it=new Map,Q.programs=it,Q.programVariants=new Map);let Ct=it.get(He);if(Ct!==void 0){if(Q.currentProgram===Ct&&Q.lightsStateVersion===Je)return ar(A,Ie),Ct}else Ie.uniforms=ge.getUniforms(A),W!==null&&A.isNodeMaterial&&W.build(A,se,Ie),A.onBeforeCompile(Ie,N),Ct=ge.acquireProgram(Ie,He),it.set(He,Ct),Q.uniforms=Ie.uniforms;let $e=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=ue.uniform),ar(A,Ie),Q.needsLights=Zt(A),Q.lightsStateVersion=Je,Q.needsLights&&($e.ambientLightColor.value=$.state.ambient,$e.lightProbe.value=$.state.probe,$e.sunLights.value=$.state.sun,$e.sunLightShadows.value=$.state.sunShadow,$e.directionalLights.value=$.state.directional,$e.directionalLightShadows.value=$.state.directionalShadow,$e.spotLights.value=$.state.spot,$e.spotLightShadows.value=$.state.spotShadow,$e.rectAreaLights.value=$.state.rectArea,$e.ltc_1.value=$.state.rectAreaLTC1,$e.ltc_2.value=$.state.rectAreaLTC2,$e.pointLights.value=$.state.point,$e.pointLightShadows.value=$.state.pointShadow,$e.hemisphereLights.value=$.state.hemi,$e.sunShadowMatrix.value=$.state.sunShadowMatrix,$e.sunShadowCascade.value=$.state.sunShadowCascade,$e.directionalShadowMatrix.value=$.state.directionalShadowMatrix,$e.spotLightMatrix.value=$.state.spotLightMatrix,$e.spotLightMap.value=$.state.spotLightMap,$e.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.numLightProbeGrids=On(R.state.lightProbeGridArray),Q.currentProgram=Ct,Q.uniformsList=null,Ct}function Ps(A,k,se,Q,$){let Oe=st.get(A),Je=Oe.currentProgram.id+","+Q+","+$,Ie=Oe.programVariants.get(Je);return Ie===void 0?(Ie=Xi(A,k,se),Oe.programVariants.set(Je,Ie)):(Oe.currentProgram=Ie,Oe.uniformsList=null,Oe.outputColorSpace=Q,Oe.toneMapping=$),Ie}function Ls(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=ra.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function ar(A,k){let se=st.get(A);se.outputColorSpace=k.outputColorSpace,se.batching=k.batching,se.batchingColor=k.batchingColor,se.instancing=k.instancing,se.instancingColor=k.instancingColor,se.instancingMorph=k.instancingMorph,se.skinning=k.skinning,se.morphTargets=k.morphTargets,se.morphNormals=k.morphNormals,se.morphColors=k.morphColors,se.morphTargetsCount=k.morphTargetsCount,se.numClippingPlanes=k.numClippingPlanes,se.numIntersection=k.numClipIntersection,se.vertexAlphas=k.vertexAlphas,se.vertexTangents=k.vertexTangents,se.toneMapping=k.toneMapping}function Bn(A,k,se,Q,$){k.isScene!==!0&&(k=Rt),ft.resetTextureUnits();let Oe=k.fog,Je=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?k.environment:null,Ie=oe===null?N.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Wt.workingColorSpace,He=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,it=I.get(Q.envMap||Je,He),ct=Q.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Ct=!!se.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),$e=!!se.morphAttributes.position,Ot=!!se.morphAttributes.normal,yn=!!se.morphAttributes.color,en=As;Q.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(en=N.toneMapping);let Jt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,bn=Jt!==void 0?Jt.length:0,Ze=st.get(Q),Cn=R.state.lights;if(de===!0&&(We===!0||A!==le)){let bt=A===le&&Q.id===ne;ue.setState(Q,A,bt)}let Vt=!1,Qn=!1;Q.version===Ze.__version?Ze.needsLights&&Ze.lightsStateVersion!==Cn.state.version||$.isBatchedMesh&&Ze.batching===!1||!$.isBatchedMesh&&Ze.batching===!0||$.isBatchedMesh&&Ze.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ze.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ze.instancing===!1||!$.isInstancedMesh&&Ze.instancing===!0||$.isSkinnedMesh&&Ze.skinning===!1||!$.isSkinnedMesh&&Ze.skinning===!0||$.isInstancedMesh&&Ze.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ze.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ze.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ze.instancingMorph===!1&&$.morphTexture!==null||Ze.envMap!==it||Q.fog===!0&&Ze.fog!==Oe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ue.numPlanes||Ze.numIntersection!==ue.numIntersection)||Ze.vertexAlphas!==ct||Ze.vertexTangents!==Ct||Ze.morphTargets!==$e||Ze.morphNormals!==Ot||Ze.morphColors!==yn||Ze.morphTargetsCount!==bn||Ze.numLightProbeGrids!==On(R.state.lightProbeGridArray)?Vt=!0:(Ze.outputColorSpace!==Ie||Ze.toneMapping!==en)&&(Qn=!0):(Vt=!0,Ze.__version=Q.version);let dn=Ze.currentProgram;(Vt===!0||Qn===!0)&&(dn=Qn===!0?Ps(Q,k,$,Ie,en):Xi(Q,k,$),W&&Q.isNodeMaterial&&W.onUpdateProgram(Q,dn,Ze));let Di=!1,ui=!1,$t=!1,ht=dn.getUniforms(),an=Ze.uniforms;if(Re.useProgram(dn.program)&&(Di=!0,ui=!0,$t=!0),Q.id!==ne&&(ne=Q.id,ui=!0),Di||le!==A){Re.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ht.setValue(H,"projectionMatrix",A.projectionMatrix),ht.setValue(H,"viewMatrix",A.matrixWorldInverse);let Kt=ht.map.cameraPosition;Kt!==void 0&&Kt.setValue(H,ut.setFromMatrixPosition(A.matrixWorld)),Mt.logarithmicDepthBuffer&&ht.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ht.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),le!==A&&(le=A,ui=!0,$t=!0)}if(Ze.needsLights&&(Cn.state.sunShadowMap.length>0&&ht.setValue(H,"sunShadowMap",Cn.state.sunShadowMap,ft),Cn.state.directionalShadowMap.length>0&&ht.setValue(H,"directionalShadowMap",Cn.state.directionalShadowMap,ft),Cn.state.spotShadowMap.length>0&&ht.setValue(H,"spotShadowMap",Cn.state.spotShadowMap,ft),Cn.state.pointShadowMap.length>0&&ht.setValue(H,"pointShadowMap",Cn.state.pointShadowMap,ft)),$.isSkinnedMesh){ht.setOptional(H,$,"bindMatrix"),ht.setOptional(H,$,"bindMatrixInverse");let bt=$.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),ht.setValue(H,"boneTexture",bt.boneTexture,ft))}$.isBatchedMesh&&(ht.setOptional(H,$,"batchingTexture"),ht.setValue(H,"batchingTexture",$._matricesTexture,ft),ht.setOptional(H,$,"batchingIdTexture"),ht.setValue(H,"batchingIdTexture",$._indirectTexture,ft),ht.setOptional(H,$,"batchingColorTexture"),$._colorsTexture!==null&&ht.setValue(H,"batchingColorTexture",$._colorsTexture,ft));let ln=se.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&me.update($,se,dn),(ui||Ze.receiveShadow!==$.receiveShadow)&&(Ze.receiveShadow=$.receiveShadow,ht.setValue(H,"receiveShadow",$.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&k.environment!==null&&(an.envMapIntensity.value=k.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=yS()),ui){if(ht.setValue(H,"toneMappingExposure",N.toneMappingExposure),Ze.needsLights&&Nr(an,$t),Oe&&Q.fog===!0&&Se.refreshFogUniforms(an,Oe),Se.refreshMaterialUniforms(an,Q,ke,Qe,R.state.transmissionRenderTarget[A.id]),Ze.needsLights&&Ze.numLightProbeGrids>0){let bt=S,Kt=0;for(let Tn of R.state.lightProbeGridArray)Tn.texture!==null&&(bt.textures[Kt]=Tn.texture,bt.min[Kt]=Tn.boundingBox.min,bt.max[Kt]=Tn.boundingBox.max,bt.resolution[Kt]=Tn.resolution,Kt++);for(let Tn in bt)bt[Tn].length=Kt;an.probesSH.value=bt.textures,an.probesMin.value=bt.min,an.probesMax.value=bt.max,an.probesResolution.value=bt.resolution}ra.upload(H,Ls(Ze),an,ft)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ra.upload(H,Ls(Ze),an,ft),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ht.setValue(H,"center",$.center),ht.setValue(H,"modelViewMatrix",$.modelViewMatrix),ht.setValue(H,"normalMatrix",$.normalMatrix),ht.setValue(H,"modelMatrix",$.matrixWorld),Q.uniformsGroups!==void 0){let bt=Q.uniformsGroups;for(let Kt=0,Tn=bt.length;Kt<Tn;Kt++){let qi=bt[Kt];je.update(qi,dn),je.bind(qi,dn)}}return dn}function Nr(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Zt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(A,k,se){let Q=st.get(A);Q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),st.get(A.texture).__webglTexture=k,st.get(A.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:se,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){let se=st.get(A);se.__webglFramebuffer=k,se.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,se=0){oe=A,K=k,ee=se;let Q=null,$=!1,Oe=!1;if(A){let Ie=st.get(A);if(Ie.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer(H.FRAMEBUFFER,Ie.__webglFramebuffer),fe.copy(A.viewport),Be.copy(A.scissor),Ve=A.scissorTest,Re.viewport(fe),Re.scissor(Be),Re.setScissorTest(Ve),ne=-1;return}else if(Ie.__webglFramebuffer===void 0)ft.setupRenderTarget(A);else if(Ie.__hasExternalTextures)ft.rebindTextures(A,st.get(A.texture).__webglTexture,st.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ct=A.depthTexture;if(Ie.__boundDepthTexture!==ct){if(ct!==null&&st.has(ct)&&(A.width!==ct.image.width||A.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ft.setupDepthRenderbuffer(A)}}let He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Oe=!0);let it=st.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[k])?Q=it[k][se]:Q=it[k],$=!0):A.samples>0&&ft.useMultisampledRTT(A)===!1?Q=st.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?Q=it[se]:Q=it,fe.copy(A.viewport),Be.copy(A.scissor),Ve=A.scissorTest}else fe.copy(rt).multiplyScalar(ke).floor(),Be.copy(Nt).multiplyScalar(ke).floor(),Ve=Et;if(se!==0&&(Q=Z),Re.bindFramebuffer(H.FRAMEBUFFER,Q)&&Re.drawBuffers(A,Q),Re.viewport(fe),Re.scissor(Be),Re.setScissorTest(Ve),$){let Ie=st.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ie.__webglTexture,se)}else if(Oe){let Ie=k;for(let He=0;He<A.textures.length;He++){let it=st.get(A.textures[He]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+He,it.__webglTexture,se,Ie)}}else if(A!==null&&se!==0){let Ie=st.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ie.__webglTexture,se)}ne=-1};function is(A){let k=st.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=Mt.textureFormatReadable(A.format),k.__typeReadable=Mt.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,se,Q,$,Oe,Je,Ie=0){if(!(A&&A.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=st.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Je!==void 0&&(He=He[Je],Array.isArray(He)&&(He=He[0])),He){Re.bindFramebuffer(H.FRAMEBUFFER,He);try{let it=A.textures[Ie],ct=it.format,Ct=it.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ie);let $e=is(it);if($e.__formatReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-Q&&se>=0&&se<=A.height-$&&H.readPixels(k,se,Q,$,Fe.convert(ct),Fe.convert(Ct),Oe)}finally{let it=oe!==null?st.get(oe).__webglFramebuffer:null;Re.bindFramebuffer(H.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(A,k,se,Q,$,Oe,Je,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=st.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Je!==void 0&&(He=He[Je],Array.isArray(He)&&(He=He[0])),He)if(k>=0&&k<=A.width-Q&&se>=0&&se<=A.height-$){Re.bindFramebuffer(H.FRAMEBUFFER,He);let it=A.textures[Ie],ct=it.format,Ct=it.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ie);let $e=is(it);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ot=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ot),H.bufferData(H.PIXEL_PACK_BUFFER,Oe.byteLength,H.STREAM_READ),H.readPixels(k,se,Q,$,Fe.convert(ct),Fe.convert(Ct),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let yn=oe!==null?st.get(oe).__webglFramebuffer:null;Re.bindFramebuffer(H.FRAMEBUFFER,yn);let en=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Om(H,en,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ot),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Oe),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Ot),H.deleteSync(en),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,se=0){let Q=Math.pow(2,-se),$=Math.floor(A.image.width*Q),Oe=Math.floor(A.image.height*Q),Je=k!==null?k.x:0,Ie=k!==null?k.y:0;ft.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,se,0,0,Je,Ie,$,Oe),Re.unbindTexture()},this.copyTextureToTexture=function(A,k,se=null,Q=null,$=0,Oe=0){let Je,Ie,He,it,ct,Ct,$e,Ot,yn,en=A.isCompressedTexture?A.mipmaps[Oe]:A.image;if(se!==null)Je=se.max.x-se.min.x,Ie=se.max.y-se.min.y,He=se.isBox3?se.max.z-se.min.z:1,it=se.min.x,ct=se.min.y,Ct=se.isBox3?se.min.z:0;else{let ht=Math.pow(2,-$);Je=Math.floor(en.width*ht),Ie=Math.floor(en.height*ht),A.isDataArrayTexture?He=en.depth:A.isData3DTexture?He=Math.floor(en.depth*ht):He=1,it=0,ct=0,Ct=0}Q!==null?($e=Q.x,Ot=Q.y,yn=Q.z):($e=0,Ot=0,yn=0);let Jt=Fe.convert(k.format),bn=Fe.convert(k.type),Ze;k.isData3DTexture?(ft.setTexture3D(k,0),Ze=H.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ft.setTexture2DArray(k,0),Ze=H.TEXTURE_2D_ARRAY):(ft.setTexture2D(k,0),Ze=H.TEXTURE_2D),Re.activeTexture(H.TEXTURE0),Re.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),Re.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),Re.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);let Cn=Re.getParameter(H.UNPACK_ROW_LENGTH),Vt=Re.getParameter(H.UNPACK_IMAGE_HEIGHT),Qn=Re.getParameter(H.UNPACK_SKIP_PIXELS),dn=Re.getParameter(H.UNPACK_SKIP_ROWS),Di=Re.getParameter(H.UNPACK_SKIP_IMAGES);Re.pixelStorei(H.UNPACK_ROW_LENGTH,en.width),Re.pixelStorei(H.UNPACK_IMAGE_HEIGHT,en.height),Re.pixelStorei(H.UNPACK_SKIP_PIXELS,it),Re.pixelStorei(H.UNPACK_SKIP_ROWS,ct),Re.pixelStorei(H.UNPACK_SKIP_IMAGES,Ct);let ui=A.isDataArrayTexture||A.isData3DTexture,$t=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){let ht=st.get(A),an=st.get(k),ln=st.get(ht.__renderTarget),bt=st.get(an.__renderTarget);Re.bindFramebuffer(H.READ_FRAMEBUFFER,ln.__webglFramebuffer),Re.bindFramebuffer(H.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Kt=0;Kt<He;Kt++)ui&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,st.get(A).__webglTexture,$,Ct+Kt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,st.get(k).__webglTexture,Oe,yn+Kt)),H.blitFramebuffer(it,ct,it+Je,ct+Ie,$e,Ot,$e+Je,Ot+Ie,H.DEPTH_BUFFER_BIT,H.NEAREST);Re.bindFramebuffer(H.READ_FRAMEBUFFER,null),Re.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||st.has(A)){let ht=st.get(A),an=st.get(k);Re.bindFramebuffer(H.READ_FRAMEBUFFER,P),Re.bindFramebuffer(H.DRAW_FRAMEBUFFER,Y);for(let ln=0;ln<He;ln++)ui?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ht.__webglTexture,$,Ct+ln):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ht.__webglTexture,$),$t?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,an.__webglTexture,Oe,yn+ln):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,an.__webglTexture,Oe),$!==0?H.blitFramebuffer(it,ct,it+Je,ct+Ie,$e,Ot,$e+Je,Ot+Ie,H.COLOR_BUFFER_BIT,H.NEAREST):$t?H.copyTexSubImage3D(Ze,Oe,$e,Ot,yn+ln,it,ct,Je,Ie):H.copyTexSubImage2D(Ze,Oe,$e,Ot,it,ct,Je,Ie);Re.bindFramebuffer(H.READ_FRAMEBUFFER,null),Re.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else $t?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Ze,Oe,$e,Ot,yn,Je,Ie,He,Jt,bn,en.data):k.isCompressedArrayTexture?H.compressedTexSubImage3D(Ze,Oe,$e,Ot,yn,Je,Ie,He,Jt,en.data):H.texSubImage3D(Ze,Oe,$e,Ot,yn,Je,Ie,He,Jt,bn,en):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Oe,$e,Ot,Je,Ie,Jt,bn,en.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Oe,$e,Ot,en.width,en.height,Jt,en.data):H.texSubImage2D(H.TEXTURE_2D,Oe,$e,Ot,Je,Ie,Jt,bn,en);Re.pixelStorei(H.UNPACK_ROW_LENGTH,Cn),Re.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Vt),Re.pixelStorei(H.UNPACK_SKIP_PIXELS,Qn),Re.pixelStorei(H.UNPACK_SKIP_ROWS,dn),Re.pixelStorei(H.UNPACK_SKIP_IMAGES,Di),Oe===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&H.generateMipmap(Ze),Re.unbindTexture()},this.initRenderTarget=function(A){st.get(A).__webglFramebuffer===void 0&&ft.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ft.setTextureCube(A,0):A.isData3DTexture?ft.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ft.setTexture2DArray(A,0):ft.setTexture2D(A,0),Re.unbindTexture()},this.resetState=function(){K=0,ee=0,oe=null,Re.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Wt._getUnpackColorSpace()}};function Kd(i,e){if(e===xd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===sa||e===xl){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===sa)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Ag(i){let e=new Map,t=new Map,n=i.clone();return Eg(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Eg(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Eg(i.children[n],e.children[n],t)}var kh=class extends ps{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new tf(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new pf(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new $d(t)}),this.register(function(t){return new Gh(t,qt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Gh(t,qt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new gf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=er.extractUrlBase(e);o=er.resolveURL(c,this.path)}else o=er.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Jr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Lg){try{o[qt.KHR_BINARY_GLTF]=new _f(e)}catch(u){s&&s(u);return}r=JSON.parse(o[qt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new wf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case qt.KHR_MATERIALS_UNLIT:o[u]=new Qd;break;case qt.KHR_DRACO_MESH_COMPRESSION:o[u]=new xf(r,this.dracoLoader);break;case qt.KHR_TEXTURE_TRANSFORM:o[u]=new yf;break;case qt.KHR_MESH_QUANTIZATION:o[u]=new vf;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function vS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Fn(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var qt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},$d=class{constructor(e){this.parser=e,this.name=qt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new qe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],ei);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ws(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Qs(h),c.distance=u;break;case"spot":c=new $s(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Cs(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Qd=class{constructor(){this.name=qt.KHR_MATERIALS_UNLIT}getMaterialType(){return xn}extendParams(e,t,n){let s=[];e.color=new qe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ei),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,fn))}return Promise.all(s)}},ef=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Fn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},tf=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Fn(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=Fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ve(r,r)}return Promise.all(s)}},nf=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Fn(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=Fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},sf=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Fn(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=Fn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},rf=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Fn(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=Fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},of=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Fn(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=Fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],ei)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,fn)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},af=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Fn(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=Fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},lf=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Fn(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=Fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(r[0],r[1],r[2],ei),Promise.all(s)}},cf=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_IOR}getMaterialType(e){return Fn(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=Fn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},hf=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Fn(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=Fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(r[0],r[1],r[2],ei),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,fn)),Promise.all(s)}},uf=class{constructor(e){this.parser=e,this.name=qt.EXT_MATERIALS_BUMP}getMaterialType(e){return Fn(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=Fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},df=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Fn(this.parser,e,this.name)!==null?mn:null}extendMaterialParams(e,t){let n=Fn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},ff=class{constructor(e){this.parser=e,this.name=qt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},pf=class{constructor(e){this.parser=e,this.name=qt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},mf=class{constructor(e){this.parser=e,this.name=qt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Gh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},gf=class{constructor(e){this.name=qt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Qi.TRIANGLES&&c.mode!==Qi.TRIANGLE_STRIP&&c.mode!==Qi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let p of u){let v=new wt,m=new O,g=new mi,M=new O(1,1,1),T=new qa(p.geometry,p.material,d);for(let C=0;C<d;C++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,C),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,C),l.SCALE&&M.fromBufferAttribute(l.SCALE,C),T.setMatrixAt(C,v.compose(m,g,M));let S=null;for(let C in l)if(C==="_COLOR_0"){let R=l[C];T.instanceColor=new qs(R.array,R.itemSize,R.normalized)}else if(C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"){if(S===null){let x=T.geometry;S=new rn,S.name=x.name;for(let b in x.attributes)S.setAttribute(b,x.attributes[b]);for(let b in x.morphAttributes)S.morphAttributes[b]=x.morphAttributes[b];x.index!==null&&S.setIndex(x.index),S.morphTargetsRelative=x.morphTargetsRelative;for(let b of x.groups)S.addGroup(b.start,b.count,b.materialIndex);x.boundingBox!==null&&(S.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(S.boundingSphere=x.boundingSphere.clone()),S.drawRange.start=x.drawRange.start,S.drawRange.count=x.drawRange.count,S.userData=Object.assign({},x.userData),T.geometry=S}let R=l[C];S.setAttribute(C,new qs(R.array,R.itemSize,R.normalized))}En.prototype.copy.call(T,p),this.parser.assignFinalMaterial(T),f.push(T)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Lg="glTF",wl=12,Rg={JSON:1313821514,BIN:5130562},_f=class{constructor(e){this.name=qt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,wl),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Lg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-wl,r=new DataView(e,wl),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Rg.JSON){let c=new Uint8Array(e,wl+o,a);this.content=n.decode(c)}else if(l===Rg.BIN){let c=wl+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},xf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Sf[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Sf[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=aa[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let v=f.attributes[p],m=l[p];m!==void 0&&(v.normalized=m)}u(f)},a,c,ei,d)})})}},yf=class{constructor(){this.name=qt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},vf=class{constructor(){this.name=qt.KHR_MESH_QUANTIZATION}},Hh=class extends bs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,v=p-c,m=-2*f+3*d,g=f-d,M=1-m,T=g-d+u;for(let S=0;S!==a;S++){let C=o[v+S+a],R=o[v+S+l]*h,x=o[p+S+a],b=o[p+S]*h;r[S]=M*C+T*R+m*x+g*b}return r}},MS=new mi,Mf=class extends Hh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return MS.fromArray(r).normalize().toArray(r),r}},Qi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},aa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cg={9728:kn,9729:Sn,9984:Zc,9985:na,9986:io,9987:vi},Ig={33071:oi,33648:gr,10497:Wn},Zd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Cr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},SS={CUBICSPLINE:void 0,LINEAR:Wr,STEP:Vr},Jd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new lt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ts})),i.DefaultMaterial}function oo(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Cs(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function TS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function AS(i){let e,t=i.extensions&&i.extensions[qt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+jd(t.attributes):e=i.indices+":"+jd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+jd(i.targets[n]);return e}function jd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function bf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ES(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var RS=new wt,wf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new vS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new jr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ul(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Jr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return oo(r,a,s),Cs(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(er.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Zd[s.type],a=aa[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ft(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Zd[s.type],c=aa[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,v,m;if(f&&f!==u){let g=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,T=t.cache.get(M);T||(v=new c(a,g*f,s.count*f/h),T=new qr(v,f/h),t.cache.add(M,T)),m=new yr(T,l,d%f/h,p)}else a===null?v=new c(s.count*l):v=new c(a,d,s.count*l),m=new Ft(v,l,p);if(s.sparse!==void 0){let g=Zd.SCALAR,M=aa[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,C=new M(o[1],T,s.sparse.count*g),R=new c(o[2],S,s.sparse.count*l);a!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,b=C.length;x<b;x++){let z=C[x];if(m.setX(z,R[x*l]),l>=2&&m.setY(z,R[x*l+1]),l>=3&&m.setZ(z,R[x*l+2]),l>=4&&m.setW(z,R[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Cg[d.magFilter]||Sn,h.minFilter=Cg[d.minFilter]||vi,h.wrapS=Ig[d.wrapS]||Wn,h.wrapT=Ig[d.wrapT]||Wn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==kn&&h.minFilter!==Sn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,p){t.parse(d,f,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let v=f;t.isImageBitmapLoader===!0&&(v=function(m){let g=new Gn(m);g.needsUpdate=!0,f(g)}),t.load(er.resolveURL(d,r.path),v,void 0,p)})})}let u=h.then(function(d){return c===!0&&a.revokeObjectURL(l),Cs(d,o),d.userData.mimeType=o.mimeType||ES(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[qt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[qt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[qt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ho,_i.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Go,_i.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return lt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[qt.KHR_MATERIALS_UNLIT]){let u=s[qt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new qe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],ei),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,fn)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Qt);let h=r.alphaMode||Jd.OPAQUE;if(h===Jd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Jd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==xn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ve(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==xn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==xn){let u=r.emissiveFactor;a.emissive=new qe().setRGB(u[0],u[1],u[2],ei)}return r.emissiveTexture!==void 0&&o!==xn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,fn)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Cs(u,r),t.associations.set(u,{materials:e}),r.extensions&&oo(s,u,r),u})}createUniqueName(e){let t=Mn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[qt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Pg(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=AS(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[qt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Pg(new rn,c,t),c.mode===Qi.TRIANGLE_STRIP?d=d.then(f=>Kd(f,xl)):c.mode===Qi.TRIANGLE_FAN&&(d=d.then(f=>Kd(f,sa))),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?bS(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let v=h[f],m=o[f],g,M=c[f];if(m.mode===Qi.TRIANGLES||m.mode===Qi.TRIANGLE_STRIP||m.mode===Qi.TRIANGLE_FAN||m.mode===void 0){let T=r.isSkinnedMesh===!0,S=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");T&&S===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=T&&S?new Wa(v,M):new et(v,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Qi.LINES)g=new Ya(v,M);else if(m.mode===Qi.LINE_STRIP)g=new Yr(v,M);else if(m.mode===Qi.LINE_LOOP)g=new Ka(v,M);else if(m.mode===Qi.POINTS)g=new br(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&TS(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Cs(g,r),m.extensions&&oo(s,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&oo(s,u[0],r),u[0];let d=new Xt;r.extensions&&oo(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zn(Uh.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Qr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Cs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new wt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Xa(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],p=s.samplers[f.sampler],v=f.target,m=v.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,M=s.parameters!==void 0?s.parameters[p.output]:p.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",M)),c.push(p),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],v=u[3],m=u[4],g=[];for(let T=0,S=d.length;T<S;T++){let C=d[T],R=f[T],x=p[T],b=v[T],z=m[T];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();let N=n._createAnimationTracks(C,R,x,b,z);if(N)for(let B=0;B<N.length;B++)g.push(N[B])}let M=new ll(r,void 0,g);return Cs(M,s),M})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,RS)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new O().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new ko:c.length>1?h=new Xt:c.length===1?h=c[0]:h=new En,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Cs(h,r),r.extensions&&oo(n,h,r),r.matrix!==void 0){let u=new wt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Xt;n.name&&(r.name=s.createUniqueName(n.name)),Cs(r,n),n.extensions&&oo(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Ag(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof _i||d instanceof Gn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Cr[r.path]===Cr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Cr[r.path]){case Cr.weights:h=Zs;break;case Cr.rotation:h=Js;break;case Cr.translation:case Cr.scale:h=Tr;break;default:n.itemSize===1?h=Zs:h=Tr;break}let u=s.interpolation!==void 0?SS[s.interpolation]:Wr,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let v=new h(l[f]+"."+Cr[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=bf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Js?Mf:Hh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function CS(i,e,t){let n=e.attributes,s=new gi;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){let h=bf(aa[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new O,l=new O;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let v=bf(aa[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Ri;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Pg(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Sf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Wt.workingColorSpace!==ei&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Wt.workingColorSpace}" not supported.`),Cs(i,e),CS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?wS(i,e.targets,t):i})}var Vh=class extends cl{constructor(e){super(e),this.type=Mi}parse(e){let o=function(b,z){switch(b){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(z||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(z||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(z||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(z||""))}},u=function(b,z,N){z=z||1024;let W=b.pos,Z=-1,P=0,Y="",K=String.fromCharCode.apply(null,new Uint16Array(b.subarray(W,W+128)));for(;0>(Z=K.indexOf(`
`))&&P<z&&W<b.byteLength;)Y+=K,P+=K.length,W+=128,K=String.fromCharCode.apply(null,new Uint16Array(b.subarray(W,W+128)));return-1<Z?(N!==!1&&(b.pos+=P+Z+1),Y+K.slice(0,Z)):!1},d=function(b){let z=/^#\?(\S+)/,N=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,W=/^\s*FORMAT=(\S+)\s*$/,Z=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},Y,K;for((b.pos>=b.byteLength||!(Y=u(b)))&&o(1,"no header found"),(K=Y.match(z))||o(3,"bad initial token"),P.valid|=1,P.programtype=K[1],P.string+=Y+`
`;Y=u(b),Y!==!1;){if(P.string+=Y+`
`,Y.charAt(0)==="#"){P.comments+=Y+`
`;continue}if((K=Y.match(N))&&(P.gamma=parseFloat(K[1])),(K=Y.match(B))&&(P.exposure=parseFloat(K[1])),(K=Y.match(W))&&(P.valid|=2,P.format=K[1]),(K=Y.match(Z))&&(P.valid|=4,P.height=parseInt(K[1],10),P.width=parseInt(K[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||o(3,"missing format specifier"),P.valid&4||o(3,"missing image size specifier"),P},f=function(b,z,N){let B=z;if(B<8||B>32767||b[0]!==2||b[1]!==2||b[2]&128)return new Uint8Array(b);B!==(b[2]<<8|b[3])&&o(3,"wrong scanline width");let W=new Uint8Array(4*z*N);W.length||o(4,"unable to allocate buffer space");let Z=0,P=0,Y=4*B,K=new Uint8Array(4),ee=new Uint8Array(Y),oe=N;for(;oe>0&&P<b.byteLength;){P+4>b.byteLength&&o(1),K[0]=b[P++],K[1]=b[P++],K[2]=b[P++],K[3]=b[P++],(K[0]!=2||K[1]!=2||(K[2]<<8|K[3])!=B)&&o(3,"bad rgbe scanline format");let ne=0,le;for(;ne<Y&&P<b.byteLength;){le=b[P++];let Be=le>128;if(Be&&(le-=128),(le===0||ne+le>Y)&&o(3,"bad scanline data"),Be){let Ve=b[P++];for(let ie=0;ie<le;ie++)ee[ne++]=Ve}else ee.set(b.subarray(P,P+le),ne),ne+=le,P+=le}let fe=B;for(let Be=0;Be<fe;Be++){let Ve=0;W[Z]=ee[Be+Ve],Ve+=B,W[Z+1]=ee[Be+Ve],Ve+=B,W[Z+2]=ee[Be+Ve],Ve+=B,W[Z+3]=ee[Be+Ve],Z+=4}oe--}return W},p=function(b,z,N,B){let W=b[z+3],Z=Math.pow(2,W-128)/255;N[B+0]=b[z+0]*Z,N[B+1]=b[z+1]*Z,N[B+2]=b[z+2]*Z,N[B+3]=1},v=function(b,z,N,B){let W=b[z+3],Z=Math.pow(2,W-128)/255;N[B+0]=xr.toHalfFloat(Math.min(b[z+0]*Z,65504)),N[B+1]=xr.toHalfFloat(Math.min(b[z+1]*Z,65504)),N[B+2]=xr.toHalfFloat(Math.min(b[z+2]*Z,65504)),N[B+3]=xr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let g=d(m),M=g.width,T=g.height,S=f(m.subarray(m.pos),M,T),C,R,x;switch(this.type){case ci:x=S.length/4;let b=new Float32Array(x*4);for(let N=0;N<x;N++)p(S,N*4,b,N*4);C=b,R=ci;break;case Mi:x=S.length/4;let z=new Uint16Array(x*4);for(let N=0;N<x;N++)v(S,N*4,z,N*4);C=z,R=Mi;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:M,height:T,data:C,header:g.string,gamma:g.gamma,exposure:g.exposure,type:R,colorSpace:ei,minFilter:Sn,magFilter:Sn,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var Ng="data:image/webp;base64,UklGRoAUAABXRUJQVlA4IHQUAAAwgQCdASo9BFwAPpFInUylq6KiINGpmXASCWljPdvTL8bFE/y5sMAvcl5fz+2f8qj/jenCUE+0SEaJEJrv4A3nf9o/4fTQ/zPcEdT/yfsCfrHyibRTPh8kIzr40x6XnJDnF/N/93r9f///B77dl7mM/6uz/NfP/vNNyD/+cv/Vf3ygWEVCN9KRG7DqqcqZC8PKPZTPsNqytTYdy8ynk8G0Sg+Oellu5R983GFoGoJioppiEZk8BfGxQ3gDoUMnPfH/rrehXT82lvSAqw/fUWH7/il9aeuQkvYe41GALAyfBC+Tx2sc9YatbwvlCx95YdUN2/i+cYn1ZNN5XFjxB/Uw5OGW4pzsZWHbJ2a18QPmL7wHWSzNSy43me2bjhUxFpnU3U9QZyiy16kJ8HPGMSEeiEiHknbwF8/nadf+TWM1GDlLfPb5zDlVsJo5dlbs2N8nk/72+rNSV5kTgvPo2mff/LHrzhhurKa11UcuDJzI9Qqju9DKeUMSye25aFDais49brwKHWp8MhU6uqTCP+8c/BHZ2kMB5T74y3S3djvzWbxwmbDbjibrf1zIXvmiIrz2RVQ4tT1D0qJ8HDVdGS7b+H1uBNb7nFrXjTE6gOHfn85nSNKwgdgfDolyjG6Qdr2RBIY9QBB8xhF3w+nl3h9aJQY1YsZbgg/brlFCg+Nqa4hWqjKgxqs2zYlPXreBsGnJBK0LJegwXGvX8AhRCW81O+aHJqAuR252DSWx9YrqbwBYI+OnVttICyAEhnTr6JKAwXONGbQshy25wDldYlJQOr0pvyDRk0+DCrtYkfTHJWHA1Y/Z+w8EAq/YJMg9EbM47hwdJYYdliRjlzy4elbNfj6Yke3Ak4DjFuUXbfOft1kCI2LEWHp97njI4LalgiOXo3tucJwm4J0dkbjtm5Vw1REh33JqlYTVnRWXAfKCK7IsHKXQhjSybtE/SSRZpMAnNyuxKDlRWq7fPvJTrtuQ/d7ySj/Jzofhjn7BAR90YpvjlSuCMiUoE2ZRF1e9zqWjqQjKTWALy2c3wyY4fdws5WiiKXm6y9AgaisBjbbeVOTO6ZiWS4yuSE3p9THp6PtvLK14PhtEvKIEY14jQ4d01V/58ZPeqypCpze0G/wIFTLYS7CcdmQ8RGVHPXW+WckDPzm5+KUmQikrVFQLVmgc/bKThh32wJTEWO8coxjdIzvsLa9Ywf2U53X7N0GREixI0ReeOWOoIofkpv90C+H3T1kUCUhk51d8XsQVqUZypiMcVeqTAwpsKtrhIhnlycABKF91G/8KAlESNRAMx9+T+DIGocEooEUESKz/H1W9z+AKJIGNRvOa/+OoskSiamTFtS8O7Dm2cybaotFOjtuhIX9cwEyO5CYFNtK+vt0okcEAAP7ugz3WACH/XHS3OaneVtqNfBwC9k6+yRRWEw44g7Ea/Kn8Ip+0azUScgGGhuUR+3B8C2P/YgFAOEHRnd+WprYM+gDA+Ov4bjJ6TjMBsmWjk8jQg0XEvv4vACV0V4She2T7lsmzVVNLc04DCkCCBWqvInO11RO+OMKfpvwSJ86wErBZtFDq6lCeqxYhTUjEiA0b0hILUQ/6jVlhtOhwO7k4oZHEsF5fUO74qLgV61NYfEIh3njMvb91YtExbcg8d6GHM2e91zv8Q5r/WsdQZK3nwLe9oeoH51WCmEjqNEZhbQzTSafmWAfCX2TPLIhPbZL15DRn46c0pchVFrT6OyypEWffRGMcz9+dPXChlS+CTeeLzJlF3r7itLAk9I4skyyxZInGfR3iID4ZP7FtPcgU3xhupeXewgc0Gj5WdX/E65PFPie0CSKXmrNFMMcRRKUkvcnSHVprrjrcOFWcD8kOEHFIE3K/3Ek+eJkQyKwB9EeizyWx7SzxRvJCgQJbnc/blT4uL0ND4fJyYN/FG886mHxeuzeUx15Z3DtYI0nhpeFIyyYAnQU7c/COsgIWX11wEyd3vA8M9fX/vidBffSF3LhEt60oCvPjs1koX9r0C4cFs3mUnARWBKne3J53Mp78bakRRlMS/QY0jMFmwY6F/IWMbOfAJYkdlVP1hOZZ8h/fwNfiiZKcvQtsDkgFp/iZgQS1gw40ztDXVXl1hfA/mbbzkJ8/KYXetMIgpGMLGplvyrHvTBEkW2xXezH/mn4W0JgZTmpKPwp4+PhrE1zOdlbLz8Nuz2J85WUiQU44yequ1XaJMbwL8l7AiQzHzzVNdFTt1EZqCNKe6um2jlqgioihrR7Q4Chud6ILAUG2SYIipWn+ZpP4gnPaJeRQynHK7rQQcMMr276OLG9jQkk31bNNsINmjldnE9ZsYY1z61lzH0meP8eDNj/yzHNZFx3+yl3FLnL9jrjdBrPtCY1qxx/PnLhPc/0XoiL4PGndRiYgFiOKaCaKrR+geg1jH3PRtND1qEjx/StbKiBtS0yR8FD05vx1zblUImSbG8tzq6/nvnP5iIyGeDenI5dRjyTdZUzrZLnw7pQKOzIwdL55JU7Rgdd9Onerbykv3NJ+fx84OEXh5fAAg016508vANHqHjYU7Gm36IhFYAwcvHrB1Pp6/vhRi1TvD0ntQQbPPBa/3gzoYdZ3a6izTyTs9WRmr0IWz/425T+2Gx5S0RhAOHf826rA3d+F2K2j3nYicwBW5Y64PuryBZm3nqvCEm5YACeUe39CUJd/e46A6/d3yUwuzcBAi10Iq3lugTtBsNKhfS/ngVyQGEsE1ILkTg8QpmCgjPsj0EqZgWnDchpMWRdFooh7GT5i46T7BLNjBWHPXjrfQRffpKk7AREnt8EnNzqtMOlDsGwDhY+QmoaJRfoFkkpq6CcH4YXoDXenDK7Jzsk1DG0nJLtzHYdKc+ocM69FtTa8SCR8zuvsplcMfwfV7aPVZvQWgou7lvXmKKfd8EX4Zm16wllTHjydNmwb4RB7iLLPdZknDhUEa7oEYS5biXw5f4z9FSmBPmJveXYxyptzd0FIgCnUpgFa1Gbc75nA4KASPxkHJQtTjBkMV/pCef53m2mZ5kv3dH6blsVH53FdXjlA2GdFCC5+KNTP6phhIk10JR+NMRfrsuBM506MfhIqeFaiNoWu7YnaiwugBjUiAn7y5Fqtc0aJkjw8j3s+kpzyjGS5fqF0HoyELsdiwngEsZWiZKyfayKnS7OuNuhxqyBcZsXHYXDK5INWX5jMlNCSwC2B4icoocN9pFYWisXrN4Ne8IAne0Ow3x195IizkEKUEBYZlqRpxBzoa7euJ0+8b34PxafQLjhZXLMouV89PJ45UIUeX+KHJujLRuSJ5XUQ8MmtnDreeDYy8zyIRt9Z8QREQtVFaiipdrIL6a9zQzxjQK+kisJBKfOuJtT1BFgu5ZbaO1rH5Gjnu4y3nuFjrlG5Mf36JKTs1ZLgE1l9QkPPR80+njjHcABwAId5Mw3nzBSzLUGPxoy8gKikmU9tDs3dZFgJdV5z2lh6SDq8jLVEYv//GCqNC64KV84//jD6SgX6qSbssSYOCLGg0YqWjJrqFSaaCQ/GomYrINKmNrwjcvKY5F114POw5EVKdvJ5MARBlsZAyr1VqHQ6HFF11FtGwuB0EXduJ6UbaV036c+flaLv1pTl9cR8Ds9krNp5++u7fHYoGNBhqtyAXKHqtX223VDlL5JFzgN8CTErZX8NsitSHjF4JgVJHYRwA8+lZBfCqc2CM8soQYX4scx4JCkPL6LG1GBNlhurW20+FVIfEEJgNuREmwTIrp90vVEsqH/PmpZqpErubdwRVAQlCfXgxh3Hr+W+oBTvPP/4s1QiBMVtTTfKSVRNy0bA+fG5dJaLlBMT70unrl7qUEn0Xk7F1YoQr49OKgL1TsxTUB0gZtGeTnGObT1rcfVX/Zl0Oxm4iLDHSEms5GsKVUcTWfcxjNLDef965K2q/qNTAAJFoG0fC1uSY6g+A+qOvpzgVBx0KxjsKkcUARjyCgfn/gFqjE+C4Y0mjRxB7JzG2wNeyROD7osFSXXUSB9CBxiMSB4ZelWZmvRn7jWOlxiuEvVgVgXc97XbLfKZxAjWebo6KRWLfZ8qLk0ZPKEsClg2HAwC4lxXL9WsbSjyhLnbxyfRNqZdwoaRR25pD14djojgtDcvDd//GgseaAPunuppvuUq0LhDsRev9iq6OvcjI9eoYtZK0WRvt8YKijmVHuUzOBPWXrtvbXgTyTQfe7ywtXvo82BtTbvO8ZUbuVAcpu8Ll726QSIVWFF1kOC55CrouJHe82Y+8h7tSqO3eIz6xCk8p51aJ4AIJW+92jx4ZfZtVhrqtIUh9+FgVqZLNw7HMsg09apn1LuVG3wXxiBOE8ccZ00qCxQ08HKSMzGrbQnIrg2xWgHUuuWXKYxE3J48fv1/4zVpA96eMQIaUmAlxQYGhvL29iaXgaKu6uvHlwyFbdfkRl5nSJxW5VSVu/4DOOxpy4zKcmKmWIT8zk6NTyUH/44cPuAkVfFwF7cGgZGRa1XvfTGXV/RGfaTLlv8fBS6HoGyI9ntr+pM7K2VQZB7nYO8SsTYqr4LN/0yN9YeP4SJ8JQsOxP9glmL3JbzI925K/Ilx6X5bWPo750fL3x+HHxsgCNTyYNV3tIlgf8/gYUd1p3RNW+tMxU9gT/IWB5vbz97NC9c0MzPXQxNZIgqZ6gaXKiwelArQMk5f3/VBxS4sV2hRup7zRoOhd0WKUj9GukMSjQ2dDIm1534i3s5nUcO1gjl+n/zkxYNbVezKNqQ0GsVAlKTsfNVHVccKnTba4P140bO286GMss5zCLWYihS9lIGF5j42OhdpzlEyWixNiXiS9I6jbWo1IwWi6/FznLGv9f7e8+RzhMYdonY1Qfj7CKESW9g3F+3nGMg+P3KQ8EPl9lG/Iymd3+IcbzUGSKzAGuKdMXg2ozOrq++V0VLj+O/q82Sjr20v5DQ5Sovn4n3/MKWd3uc1L8LzGzopO0h+nRBYp+8xnrULFpOxBI01fqDtPv3QsVFQL7HB5hv621ea/L16EutJ1iHGemH3BNjQGMISoQCNH24e6Y4UlnFhWyls7Sr7rFUIgw4qJlsyx3NJdp104DDlS4PmFArmZZ/eSwRAXln2mTbaQVaSuaOpR9lk5QRQQYKeHzFE+p95UNWSsobn7fAA2KGSvdMfBWVhQxLJCMWRXUHpblgT0EXoyo5GXxzFzTjg0eFmoMK05L3pAEho/lM9YeYkaJBMcCeuGmjKe63tbMwo8h6YaY0UcOzEO205La9XnE6a83CP/OVjHklu1bLX1xJHjN/UMPl+G9jz0s5w9ti1TC3huiUQQii/P6mLMw5Wj4xtifgXCWeJ0qNfChi316NE+RmSlxl0x48pnPuE7epjgKUGLh1OA2AScLffOOrR0tCo0Nlwm0vibJUOtoG7eU/fXwWlvBSVWjfpyLUWZAHxeD5XdNsv8TegsgxrBTi/vh+9woIQgzojjauTqDARIUHo3BS/phVf4YtbzdZ2CKSxt7VLSDIuilzlsDUrqsunJW7QLr3mQ+H9ldjHYdn78f6lNK/OOAut4ZVuXvM6hscRjBxgw8u5y6dmHjPwG/QdyW9tLsv2F3iSvC9fulx7lCLxicw/rGRsl+iWs3vb2ZQRAkOhn7927gOhBSDB9FKlcr/jD1CFcfDrtVH3PJDHiU95J/pIcPA1VXFqusspLCgEYi71BFj4wG2J/lp/4yQVKjRx7ok+1WGdocdeXGGOHr+7rtmstG5YRlnhofGWfhE3ddIydtphNKWr1ewyff/whXs/+QVDiIdT/1TA6uLNzWAgFvxaDbpK7BoyYJYAw0ohNkKH16uZbi1IawFd+M/frJ1EYDnNU25n2qj4ekwFslC9VK6eLex1cZxFnnBE+XMoSjoLndc8JOVEGJ6OB4vhNhpPgcuxAAxlB8vFyplOZ23bG0nESLUlH8/QSYsBdM6dgDslP3CTyzv1X1iCaK5DGauEsZVMMQSymYJoCvebeOA7D9q6kuKg/Rcw5SZPARCGoFVcavYWZ6kwmWM5tr7IDzRNkkUojd/k3U24kjSrWwxhb5OXCBzlnsKYJyrF4TmKEiCesbRrVwjAGK90Vev10CEvOf2rYohJLYTgEyMjJ5Y4g2lWn5p8NqvqyYIwfirYoVCimZPPw+xibicl+rsWBOcnQSp32HC1Y3cm81v4eFkyHoTFM/45ol2kK1vA3OmRLExBaX8prVJ0dsWvnkT9OGHOGGA+YPDOg36Daqwio0NfNuAEiHNLNNTOZgh1hJTuSTlHTBkWhB82pty7QGCu6FwQ9Gf5wSmP7kIxCyUV9tS59K0krN35fsV1CIh49hc2b8ctPDGrgW+HRRrpY5bt4aKvcs1vVRbO1LPEeX/c2CptYTCzm1wDqyKSy4MSOBNZ6XhTFtH0M0EGlO9H8GloYXcDDqxK9hoep/RYIDcGq/MmQdHUfWoUb5QA/ev/hy9frqDC67bmhex6Tk5RA227rrH+HWGH6JyE7u4mm4PNtokJdltRHSnxBDJIYHV+LURzsd3F8jQDTvHIUoFAIkCD46bMu4bOOvQWoAd9ebAhGiyqBimJ2wAqU4Lwtlpz28YQGeYYvLxI9mWcwOGmC691Mb1DhrtNqnhCS27vtETybb/4icZI/UOnHoYQgZdBi1Sot/T+HYCAFQBQfFeF7eJO1Vek+uUnM4B+TuniMHZ8Ddg07SK23RXPCj+DrhEym/quS6VkGevK97YW+8qisd/tstmedzy5O6O7ex/5LisZTMP7M5+gM9heKJSj3IFcxPQpgYyydyX0GtKTxKJhyTlRNFVo+ECbp9vg1GrdHwSuiE2rC5jinvHiHhlQJub3qfMJlS4Y9J303mxirrt6E2euGPhgsLbfSKrPA3yTik419EUyII2DDIC+ew3tVP4D69bIo3H1+re01EIN7CMA1i/LV6IBzw4IK9zaJo/xCsVR1QnIDf6FeOCbxR6FQ8/fBWS1qiLTGKopV0WDwW3GQqONFGhA9+ZkAAAA",Dg="data:image/webp;base64,UklGRuQEAABXRUJQVlA4INgEAAAwMgCdASraAkwAPolEnEulI6wnoFgJSYARCWluCv+9wf/5wfXooaOTIArgRthwcxwe6p02yl7NNWTrxBF+2eX+v/0ZsgL/3ANxaYHcG/GVoVGNKmJ7J5dufJF4wtuvDOPRV92szkn8kntNVaj7hZCZPJ4UE76Ptn7NW9BaqVLrbUe35LenGfkmdSAmYWtPJz3JU9E/raG6fObpPQyP5N5R0WSX94My7Hh4HW3Yxlr97c0xQqdCfhqtwKVfp7K+zChWIIzPFMDwvkEVq33FAqAeWTWrVa40W62O2hrDB6ZL1U7tlxLt7325ObNRWnHe3XQzsHBKgtN4KjG0HBhifeZoYTK2nhwUdehpXouLgSKTXZL/v69jwllV9+/bz2t+7Dxq+Mya6HdWKpart+Z/tm0UgpShicDyPA+Kr3080/MkC4ineGxflDF3GawjXYfuAEswZpSMFKmsmKQDqFm5CRzSRH0DrjMGqTziMx/aVSZBDd6NKbDGYbQaT0KdyGxAGAGqMmuBy/P+qWfS9FPbkaY9OQfP1gRajTObAAD9pl3mU/DkD+1lpvfyB+VTd7MYptr3Ap3432QsRUgn+FrrKt8n0xDZoy8iTPvjeVy10+7BMPexT1a1AU2dZkSSszNMhFv8v8jnR5v3Xn5jBcqj7U229AHTlwSZpKUZIYs7ysJLPDJMel520QnLUEi8l4mPXFE4skzJAHCCckD+yyrAo/l3hobXi7cDmOr8esrUEDUvTPjrl7XEoUh7amMlAOxQvCWOftz/BsDf28nkJgW4OhCCJeUhykWoo/VGOQBVjai4HKsCA8Ss/B1eetJYhR4fLl07Jq25BQb3Sdbf5b/s6HMFRAsokU2+o8MbP8YINkJiNb4v6CcFfdV/eQUVr6/NAal2IoHmBEmi2BjspPf/KuUQBbyZuGx6HxXip+SynOJnhYYinLJPhUNkqw6SKgJ9BdMZ0LihR3PmYRJhIC9hwCiVzZeT19Fqs9Vo5n267BsvAOFc9uXwENvYuFxdI3fQ488zi7irnzQB2DwtkgGAT8iNwbbSNVWkjWpQtOZaaLjttCEm/F2yJ9zT2hc+hm1kE6udkpqan7ICQ+9lwlPf297iMLV0g9fkB0CvOzrUp61otptnr5HbfjxLfTM9kJ2vl5/ELueEaz29CEufGQJ/xvBtBoHjkyMlzIv+DFHsxy99MfRiZKYupMZtbLyjBUcfP1BpKDxM6sIiBBqyQtGOmm3lWhwr3HJ/liH8IK7Ft5wmu9Dz08zuUg9lz/Ajq3Kx4bNjmK8PjFPlT2NKHZ0PcNIfEvDxx0bpf5I3RTF6LviGrb6X2sOYkczfQALn/g+5jRFeXtcHncLR1xqN3G72LwNzaticBRKMZysHRMTkPria5mgxaAAVf88/e48gzvPjjiegFBu3MXLWdjTOnHK+BFkBBHWHqfraHUFmycrqXtFIH8FBlsIKyGFbzLRaJ0xoOfu29T/d9q/8hq7POGxeWZsUiDi2Cuvcl3gQyjGPaGw5jcBrewE2O4cR7SPYooUoIobgc2zyGANGzxG6zcFqw7hZ5YomhTeJLQ3EFH+gI9ZMoaqZCXqjbenfuz8XSXMVgsG8IFDO2YQAsQzHwv61hteyVEhvcZHppUU7jhRuy+FeqW2UR+OSAAAA";var IS=/^https?:$/.test(location.protocol),PS=document.currentScript?.src||location.href,Tf=i=>new URL(`assets3d/${i}`,PS).href,Wh=null;function qg(i){if(!IS)return null;if(Wh)return Wh;let e=new jr,t=new kh,n=(o,a)=>new Promise(l=>e.load(Tf(o),c=>{c.wrapS=c.wrapT=Wn,c.anisotropy=ir,a&&(c.colorSpace=fn),l(c)},void 0,()=>l(null))),s=(o,a,l=!0)=>{let c=a?"-sm":"";return Promise.all([l?n(`tex/${o}-col${c}.webp`,!0):null,n(`tex/${o}-nor${c}.webp`),n(`tex/${o}-rough.webp`)]).then(([h,u,d])=>u&&(h||!l)?{map:h,normalMap:u,roughnessMap:d}:null)},r=o=>new Promise(a=>t.load(Tf(`models/${o}`),l=>a(l.scene),void 0,()=>a(null)));return Wh={oak:s("oak",!0),floor:s("floor",!0),plaster:s("plaster",!1,!1),rug:s("rug",!1,!1),linen:s("linen",!1,!1),jacquard:Promise.all([n("tex/jacquard-nor.webp"),n("tex/jacquard-rough.webp")]).then(([o,a])=>o?{normalMap:o,roughnessMap:a}:null),env:new Promise(o=>new Vh().load(Tf("env/room-morning.hdr"),o,void 0,()=>o(null))),viewM:n("env/view-morning.webp",!0),viewN:n("env/view-night.webp",!0),plantTable:i?Promise.resolve(null):r("potted_plant_02.glb"),plantFloor:i?Promise.resolve(null):r("potted_plant_01.glb"),succulent:i?Promise.resolve(null):r("potted_plant_04.glb")},Wh}function ao(i,e,t,n=0){if(!i)return null;let s=i.clone();return s.repeat.set(e,t),s.rotation=n,s.center.set(.5,.5),s.needsUpdate=!0,s}function Zn(i,e,t,n,s=0,r={}){!e||!i||(r.keepMap||(i.map=ao(e.map,t,n,s)),i.normalMap=ao(e.normalMap,t,n,s),i.normalScale?.set(r.ns??1,r.ns??1),e.roughnessMap&&!r.keepRough&&(i.roughnessMap=ao(e.roughnessMap,t,n,s),i.roughness=r.rough??1),r.color&&i.color.set(r.color),i.needsUpdate=!0)}function Yh(i,e,t,n,s,r,o=0){let a=new Xt;a.add(i);let l=new gi().setFromObject(i),c=l.getSize(new O),h=r/(c.y||1);return i.position.set(-(l.min.x+l.max.x)/2,-l.min.y,-(l.min.z+l.max.z)/2),a.scale.setScalar(h),a.position.set(t,n,s),a.rotation.y=o,i.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0,(u.material.alphaTest>0||u.material.transparent)&&(u.material.side=Qt))}),e.add(a),a}function Ug(i,e,t,n,s,r,o,a,l,c="#ffffff"){let d=[],f=[],p=[];for(let g=0;g<=24;g++){let M=on(s,o,g/24),T=l+Math.tan(M)*e,C=((M>=0?M:Math.max(r,M*a))-r)/(o-r);for(let R=0;R<=72;R++){let x=R/72,b=t+(x-.5)*n;d.push(Math.sin(b)*e,T,-Math.cos(b)*e),f.push(x,C)}}for(let g=0;g<24;g++)for(let M=0;M<72;M++){let T=g*73+M,S=T+72+1;p.push(T,T+1,S,T+1,S+1,S)}let v=new rn;v.setAttribute("position",new Ft(new Float32Array(d),3)),v.setAttribute("uv",new Ft(new Float32Array(f),2)),v.setIndex(p);let m=new et(v,new xn({map:i,color:c,toneMapped:!1,side:Qt,fog:!1}));return m.frustumCulled=!1,m}var Me=Math.PI,jn=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),on=(i,e,t)=>i+(e-i)*t,bi=(i,e,t)=>{let n=jn((t-i)/(e-i));return n*n*(3-2*n)},Ir=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,Fg=i=>1-(1-i)**3,Li=(i,e,t,n)=>e+(i-e)*Math.exp(-t*n),Af=()=>new Promise(i=>setTimeout(i)),Rn=7.8,ti=1.5,LS=.17,Og=30,Ef=1.3,Xh=.16,Rf={Hard:{depth:.08,radius:.85,k:250,c:27,crown:.018},Medium:{depth:.16,radius:1,k:130,c:15,crown:.045},Soft:{depth:.3,radius:1.2,k:72,c:8,crown:.08}},gn=i=>()=>{i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296};function Pr(i,e,t,n){let s=gn(n),r=new Float32Array(e*t);for(let a=0;a<r.length;a++)r[a]=s();let o=new Float32Array(i*i);for(let a=0;a<i;a++){let l=a/i*t,c=l|0,h=(c+1)%t,u=l-c;u=u*u*(3-2*u);for(let d=0;d<i;d++){let f=d/i*e,p=f|0,v=(p+1)%e,m=f-p;m=m*m*(3-2*m);let g=r[c*e+p],M=r[c*e+v],T=r[h*e+p],S=r[h*e+v];o[a*i+d]=g+(M-g)*m+(T-g)*u+(g-M-T+S)*m*u}}return o}function Zh(i,e,t){let n=new Uint8Array(e*e*4);for(let s=0,r=0;s<e;s++){let o=(s+e-1)%e*e,a=(s+1)%e*e,l=s*e;for(let c=0;c<e;c++,r+=4){let h=i[l+(c+e-1)%e],u=i[l+(c+1)%e],d=i[o+c],f=i[a+c],p=(h-u)*t,v=(d-f)*t,m=1/Math.sqrt(p*p+v*v+1);n[r]=(p*m*.5+.5)*255,n[r+1]=(v*m*.5+.5)*255,n[r+2]=(m*.5+.5)*255,n[r+3]=255}}return n}var ir=8;function Jh(i,e,t){let n=new ds(i,e,e,Si);return n.wrapS=n.wrapT=Wn,n.magFilter=Sn,n.minFilter=vi,n.generateMipmaps=!0,n.anisotropy=ir,t&&(n.colorSpace=fn),n.needsUpdate=!0,n}function Bg(i,e){let t=new Float32Array(i*i),n=Pr(i,10,e.threads,11),s=Pr(i,e.threads,10,23),r=Pr(i,e.threads,e.threads,5),o=Pr(i,12,12,7);for(let a=0,l=0;a<i;a++){let c=a/i;for(let h=0;h<i;h++,l++){let u=h/i,d=(u+c)*e.cells,f=(u-c)*e.cells,p=Math.abs(Math.sin(Me*d)),v=Math.abs(Math.sin(Me*f)),m=(p*v)**e.round,g=Math.min(p,v),T=((p<v?f:d)*e.stitches%1+1)%1<.6?1:0,S=1-bi(0,e.seam,g),C=1-bi(.05,.24,Math.hypot(p,v)),R=n[l]*.5+s[l]*.5;t[l]=m+S*T*.018+C*.1*(e.tuft??1)+(o[l]-.5)*.05+(R-.5)*.011+(r[l]-.5)*.0016}}return Jh(Zh(t,i,e.normal),i,!1)}function zg(i,e,t,n){let s=new Float32Array(i*i);return t.forEach(([r,o,a],l)=>{let c=Pr(i,r,o,n+l);for(let h=0;h<s.length;h++)s[h]+=c[h]*a}),Jh(Zh(s,i,e),i,!1)}function NS(i,e){let t=new Float32Array(i*i),n=Pr(i,48,48,81);for(let s=0,r=0;s<i;s++)for(let o=0;o<i;o++,r++)t[r]=Math.sin(2*Me*o/i*e)*Math.sin(2*Me*s/i*e)*.5+(n[r]-.5)*.08;return Jh(Zh(t,i,9),i,!1)}function kg(i,e,t){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createRadialGradient(i/2,i/2,i*e,i/2,i/2,i*t);return r.addColorStop(0,"#fff"),r.addColorStop(.55,"#888"),r.addColorStop(1,"#000"),s.fillStyle=r,s.fillRect(0,0,i,i),new xi(n)}var Gg=i=>new Promise(e=>{let t=new Image;t.onload=()=>{let n=new Gn(t);n.wrapS=n.wrapT=Wn,n.colorSpace=fn,n.anisotropy=ir,n.needsUpdate=!0,e(n)},t.src=i});function Lf(i,e,t){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d");e(s,i);let r=new xi(n);return r.wrapS=r.wrapT=Wn,r.colorSpace=fn,r.anisotropy=ir,r.repeat.set(t,t),r}function es(i,e,t,n,s,r){for(let o of[-e,0,e])for(let a of[-e,0,e]){let l=t+o,c=n+a;l+s<0||l-s>e||c+s<0||c-s>e||(i.save(),i.translate(l,c),r(i),i.restore())}}function Gi(i,e,t,n=.05){i.fillStyle=t,i.fillRect(0,0,e,e);let s=gn(9),r=Math.max(2,e/512);for(let o=0;o<e;o+=r)i.fillStyle=`rgba(0,0,0,${(s()*n).toFixed(3)})`,i.fillRect(0,o,e,r/2),i.fillStyle=`rgba(255,255,255,${(s()*n).toFixed(3)})`,i.fillRect(o,0,r/2,e)}var Hg=(i,e,t)=>{i.beginPath(),i.moveTo(0,0),i.bezierCurveTo(t,-e*.25,t*.8,-e*.75,0,-e),i.bezierCurveTo(-t*.8,-e*.75,-t,-e*.25,0,0),i.closePath()},Vg=(i,e,t,n)=>{i.beginPath(),i.moveTo(0,0),i.lineTo(0,-e*.97);for(let s=1;s<n;s++){let r=-e*s/n,o=t*Math.sin(Me*s/n)*.85;i.moveTo(0,r+e*.03),i.lineTo(o,r-e*.07),i.moveTo(0,r+e*.03),i.lineTo(-o,r-e*.07)}};function DS(i,e){let t="rgba(234,245,251,.96)";i.fillStyle=t,i.beginPath(),i.arc(0,0,e,0,Me*2),i.fill(),i.fillStyle="#2b4fbd",i.beginPath(),i.arc(0,0,e*.8,0,Me*2),i.fill(),i.fillStyle=t;for(let n=0;n<16;n++){let s=n/16*Me*2;i.beginPath(),i.ellipse(Math.cos(s)*e*.62,Math.sin(s)*e*.62,e*.16,e*.07,s,0,Me*2),i.fill()}i.strokeStyle="rgba(118,201,219,.95)",i.lineWidth=e*.05,i.beginPath(),i.arc(0,0,e*.4,0,Me*2),i.stroke(),i.fillStyle=t,i.beginPath(),i.arc(0,0,e*.2,0,Me*2),i.fill()}function US(i,e){let t=["#f47a35","#ff9d5c","#e5506b","#f6c344"];for(let n=0;n<6;n++)i.save(),i.rotate(n/6*Me*2),i.fillStyle=t[n%t.length],i.beginPath(),i.moveTo(0,0),i.lineTo(e*.22,-e*.5),i.lineTo(0,-e),i.lineTo(-e*.22,-e*.5),i.closePath(),i.fill(),i.restore();i.fillStyle="#3a1f2b",i.beginPath(),i.arc(0,0,e*.12,0,Me*2),i.fill()}function Cf(i,e,t){i.strokeStyle=t,i.fillStyle=t,i.lineWidth=e*.05;for(let n=0;n<8;n++)i.save(),i.rotate(n/8*Me*2),i.beginPath(),i.ellipse(0,-e*.42,e*.14,e*.3,0,0,Me*2),i.stroke(),i.restore();i.beginPath(),i.arc(0,0,e*.16,0,Me*2),i.fill();for(let n=0;n<4;n++)i.save(),i.rotate(n/4*Me*2+Me/4),i.beginPath(),i.moveTo(0,-e*.72),i.bezierCurveTo(e*.4,-e*.86,e*.34,-e*1.14,0,-e*1.02),i.stroke(),i.beginPath(),i.moveTo(0,-e*.72),i.bezierCurveTo(-e*.4,-e*.86,-e*.34,-e*1.14,0,-e*1.02),i.stroke(),i.restore()}function FS(i,e,t){i.strokeStyle=t,i.lineWidth=e*.055;for(let n=0;n<8;n++){let s=n/8*Me*2;i.beginPath(),i.arc(Math.cos(s)*e*.55,Math.sin(s)*e*.55,e*.42,0,Me*2),i.stroke()}i.beginPath(),i.arc(0,0,e*.2,0,Me*2),i.stroke()}function OS(i,e,t){i.strokeStyle=t,i.lineCap="round",i.lineWidth=e*.02,i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(e*.12,-e*.5,0,-e),i.stroke(),i.lineWidth=e*.014,i.beginPath();for(let n=1;n<24;n++){let s=n/24,r=-e*s,o=e*.12*Math.sin(Me*s)*.9,a=e*.34*Math.sin(Me*(s*.82+.1));i.moveTo(o,r),i.lineTo(o+a,r-a*.5),i.moveTo(o,r),i.lineTo(o-a,r-a*.5)}i.stroke()}function Wg(i,e,t,n,s,r){i.strokeStyle=t,i.lineWidth=r,i.lineCap="round";for(let o=0;o<n;o++){let a=(o+.5)*e/n;i.beginPath();for(let l=0;l<=e;l+=4){let c=a+Math.sin(l/e*Me*4+o*.9)*e*s;l?i.lineTo(l,c):i.moveTo(l,c)}i.stroke()}}function BS(i,e,t,n){Gi(i,e,t,.02);let s=4,r=e/s;i.strokeStyle=n,i.lineWidth=e*.007;for(let o=0;o<s;o++)for(let a=0;a<s;a++){let l=(a+.5)*r,c=(o+.5)*r,h=r*.5;for(let u=1;u<=4;u++){let d=h*u/4;i.beginPath();for(let f=0;f<=6;f++){let p=f/6*Me*2+Me/6,v=l+Math.cos(p)*d,m=c+Math.sin(p)*d;f?i.lineTo(v,m):i.moveTo(v,m)}i.stroke()}}}function zS(i,e,t,n,s){Gi(i,e,t,.05);let r=4,o=e/r,a=(l,c)=>{let h=Math.round((l%e+e)%e/(o/2))%(r*2),u=Math.round((c%e+e)%e/(o/2))%(r*2);return gn(h*31+u*7+3)()<.34};i.fillStyle=s;for(let l=-r;l<r*2;l++)for(let c=-r;c<r*2;c++){let h=(l+c+1)/2*o,u=(c-l)/2*o;h<-o||h>e+o||u<-o||u>e+o||!a(h,u)||(i.beginPath(),i.moveTo(h,u-o/2),i.lineTo(h+o/2,u),i.lineTo(h,u+o/2),i.lineTo(h-o/2,u),i.closePath(),i.fill())}i.strokeStyle=n,i.lineWidth=e*.008;for(let l=-r;l<=r*2;l++)i.beginPath(),i.moveTo(l*o,0),i.lineTo(l*o+e,e),i.stroke(),i.beginPath(),i.moveTo(l*o,0),i.lineTo(l*o-e,e),i.stroke()}var Tl={eco:{top:(i,e)=>{Gi(i,e,"#2346ad",.06),[[.2,.25,.4],[.7,.6,1.9],[.45,.9,2.6]].forEach(([n,s,r])=>es(i,e,n*e,s*e,e*.28,o=>{o.rotate(r),o.fillStyle="rgba(104,201,212,.55)",o.beginPath(),o.ellipse(0,0,e*.26,e*.13,0,0,Me*2),o.fill()})),[[.25,.3,.16],[.76,.18,.13],[.58,.7,.17],[.06,.8,.12]].forEach(([n,s,r])=>es(i,e,n*e,s*e,e*r,o=>DS(o,e*r)))},side:(i,e)=>{Gi(i,e,"#f2f5fb",.03);let t=6,n=e/t;i.fillStyle="#2b4fbd";for(let s=0;s<t;s++)for(let r=0;r<=t;r++)i.beginPath(),i.arc((r+s%2*.5)*n,(s+.5)*n,n*.2,0,Me*2),i.fill()},rep:[.32,1.1],quilt:!1,dark:!0,piping:"#f2f5fb",under:"#c9ccd6",label:["#ffffff","#2b4fbd"]},plush:{top:(i,e)=>{Gi(i,e,"#1b3488",.07),[[.24,.36,.4],[.73,.3,-.9],[.5,.82,2.2],[.96,.74,1.2]].forEach(([n,s,r])=>es(i,e,n*e,s*e,e*.34,o=>{o.rotate(r),o.strokeStyle="rgba(176,198,240,.9)",o.lineWidth=e*.006,Hg(o,e*.3,e*.11),o.stroke(),o.lineWidth=e*.003,Vg(o,e*.3,e*.11,9),o.stroke()}));let t=gn(44);i.fillStyle="rgba(255,255,255,.08)";for(let n=0;n<2600;n++)i.fillRect(t()*e,t()*e,2,2)},rep:[.36,.5],quilt:!1,dark:!0,piping:"#eef0f7",under:"#1d2f6e",label:["#f3efe4","#223f98"]},vento:{top:(i,e)=>{Gi(i,e,"#132a4c",.05);let t=gn(52),n=["#1d6f57","#2c9a6c","#4fb983","#0f5651","#3d8f5c"],s=[],r=[];for(let o=0;o<16;o++){let a=e*(.12+t()*.12);s.push([t()*e,t()*e,t()*Me*2,a,n[o%n.length]])}for(let o=0;o<7;o++)r.push([t()*e,t()*e,t()*Me*2]);s.forEach(([o,a,l,c,h])=>es(i,e,o,a,c,u=>{u.rotate(l),u.fillStyle=h,Hg(u,c,c*.38),u.fill(),u.strokeStyle="rgba(8,40,34,.55)",u.lineWidth=e*.0022,Vg(u,c,c*.38,7),u.stroke()})),r.forEach(([o,a,l])=>es(i,e,o,a,e*.07,c=>{c.rotate(l),US(c,e*.055)}))},rep:[.34,.45],quilt:!1,dark:!0,piping:"#132a4c",under:"#10223e",label:["#f2c14e","#132a4c"]},aura:{top:(i,e)=>{Gi(i,e,"#f6f5f1",.025),[[.25,.25],[.75,.75]].forEach(([t,n])=>es(i,e,t*e,n*e,e*.2,s=>Cf(s,e*.16,"#6f727b"))),[[.75,.25],[.25,.75]].forEach(([t,n])=>es(i,e,t*e,n*e,e*.09,s=>Cf(s,e*.065,"#8d9097")))},side:(i,e)=>{Gi(i,e,"#f4f3ef",.025);for(let t=0;t<3;t++)es(i,e,(t+.5)*e/3,e*.5,e*.14,n=>Cf(n,e*.1,"#9d9fa6"))},rep:[.6,.8],quilt:!0,piping:"#e2e1dc",under:"#cfcdc6",label:["#1d2b5e","#e9ecf5"]},"imperio-white":{top:(i,e)=>{Gi(i,e,"#f7f6f2",.02);let t=gn(61),n=[];for(let s=0;s<5;s++)n.push([t()*e,t()*e,e*(.1+t()*.1),t()*Me*2]);i.strokeStyle="rgba(128,128,140,.6)",i.lineWidth=e*.011,n.forEach(([s,r,o,a])=>es(i,e,s,r,o*1.1,l=>{l.rotate(a);for(let c=0;c<3;c++)l.beginPath(),l.arc(0,0,o*(1-c*.26),0,Me*1.35),l.stroke()}))},side:(i,e)=>BS(i,e,"#ecebe7","#9c9ca5"),rep:[.32,.9],quilt:!0,piping:"#e6e2d4",under:"#cdcac2",label:["#2b47a8","#ffffff"]},"imperio-blue":{top:(i,e)=>zS(i,e,"#1b2d68","#3f66c8","rgba(138,166,234,.45)"),rep:[.9,1.2],quilt:!1,dark:!0,piping:"#eef0f6",under:"#172656",label:["#ffffff","#1b2d68"]},"camellia-pt":{top:(i,e)=>{Gi(i,e,"#f8f7f3",.02),Wg(i,e,"rgba(118,118,126,.95)",3,.06,e*.02)},side:(i,e)=>{Gi(i,e,"#f5f4ef",.02),Wg(i,e,"rgba(176,176,184,.95)",5,.04,e*.016)},rep:[.5,1],quilt:!0,piping:"#ece4cb",under:"#d3cfc4",label:["#b98b3f","#fffaf0"],topper:"pillow"},"camellia-et":{top:(i,e)=>{Gi(i,e,"#f7f6f4",.02),[[.25,.25,.14,"#9893b3"],[.75,.75,.14,"#9893b3"],[.75,.25,.08,"#aeaac4"],[.25,.75,.08,"#aeaac4"]].forEach(([t,n,s,r])=>es(i,e,t*e,n*e,e*s*1.1,o=>FS(o,e*s,r)))},rep:[.75,.9],quilt:!0,piping:"#e8e1cb",under:"#d3cfc4",label:["#24305f","#f2efe6"],topper:"euro"},emma:{top:(i,e)=>{Gi(i,e,"#edf3ea",.025),[[.2,.4,.5,"#6f757c"],[.7,.2,2.4,"#7fa66c"],[.55,.72,-.7,"#6f757c"],[.08,.92,1.6,"#7fa66c"],[.9,.62,3.6,"#80868d"]].forEach(([t,n,s,r])=>es(i,e,t*e,n*e,e*.34,o=>{o.rotate(s),OS(o,e*.32,r)}))},rep:[.36,.5],quilt:!1,piping:"#e6e4d4",under:"#cfd3cb",label:["#2f5d34","#f4f1e4"]}};function kS(i,e,t,n){let s=[];for(let r=0;r<t;r++)s.push(-(i-e+e*Math.tan((t-r)/t*Me/4)));for(let r=0;r<=n;r++)s.push(-(i-e)+2*(i-e)*r/n);for(let r=1;r<=t;r++)s.push(i-e+e*Math.tan(r/t*Me/4));return s}var If=[{n:[0,1,0],u:0,v:2,g:0},{n:[0,-1,0],u:0,v:2,g:2},{n:[0,0,1],u:0,v:1,g:1},{n:[0,0,-1],u:0,v:1,g:1},{n:[1,0,0],u:2,v:1,g:1},{n:[-1,0,0],u:2,v:1,g:1}],El=class{constructor({cs:e=3,seg:t=[1,1,1],groups:n=!1}){this.cs=e,this.seg=t;let s=If.map(l=>[e*2+t[l.u]+1,e*2+t[l.v]+1]),r=s.reduce((l,[c,h])=>l+c*h,0),o=[];this.geometry=new rn;let a=0;If.forEach((l,c)=>{let[h,u]=s[c],d=o.length,f=(l.u===0&&l.v===2?1:0)^(l.n[0]+l.n[1]+l.n[2]<0?1:0)^(l.u===2?1:0);for(let p=0;p<u-1;p++)for(let v=0;v<h-1;v++){let m=a+p*h+v,g=m+1,M=m+h,T=M+1;f?o.push(m,M,g,g,M,T):o.push(m,g,M,g,T,M)}n&&this.geometry.addGroup(d,o.length-d,l.g),a+=h*u}),this.geometry.setIndex(o),this.pos=new Float32Array(r*3),this.nor=new Float32Array(r*3),this.uvs=new Float32Array(r*2),this.geometry.setAttribute("position",new Ft(this.pos,3)),this.geometry.setAttribute("normal",new Ft(this.nor,3)),this.geometry.setAttribute("uv",new Ft(this.uvs,2))}fill(e,t,n,s,r={},o=[1,1,1]){let a=[e/2,t/2,n/2],{pos:l,nor:c,uvs:h,cs:u,seg:d}=this,f=a.map((R,x)=>kS(R,s,u,d[x])),p=r.crown||0,v=r.bulge||0,m=r.sag||0,g=a[0],M=a[2],T=a[1],S=0;for(let R of If){let x=3-R.u-R.v,b=R.n[x],z=o[R.g];for(let N of f[R.v])for(let B of f[R.u]){let W=[0,0,0];W[R.u]=B,W[R.v]=N,W[x]=b*a[x];let Z=W.map((Ve,ie)=>jn(Ve,-(a[ie]-s),a[ie]-s)),P=W[0]-Z[0],Y=W[1]-Z[1],K=W[2]-Z[2],ee=1/(Math.sqrt(P*P+Y*Y+K*K)||1);P*=ee,Y*=ee,K*=ee;let oe=Z[0]+P*s,ne=Z[1]+Y*s,le=Z[2]+K*s;if(p||v||m){let Ve=oe/g,ie=le/M,Ce=bi(-T*.4,T,ne),ze=1-Ve**4,Qe=1-ie**4;ne+=p*ze*Qe*Ce-m*Ve*Ve;let ke=Math.cos(ne/T*Me/2)*v;oe+=ke*Math.sign(oe)*bi(.7,1,Math.abs(Ve)),le+=ke*Math.sign(le)*bi(.8,1,Math.abs(ie)),P+=4*p*Ve**3*Qe*Ce/g,K+=4*p*ie**3*ze*Ce/M;let be=1/Math.sqrt(P*P+Y*Y+K*K);P*=be,Y*=be,K*=be}let fe=S*3,Be=S*2;l[fe]=oe,l[fe+1]=ne,l[fe+2]=le,c[fe]=P,c[fe+1]=Y,c[fe+2]=K,h[Be]=B/(z[0]??z),h[Be+1]=N/(z[1]??z),S++}}let C=this.geometry;return C.attributes.position.needsUpdate=!0,C.attributes.normal.needsUpdate=!0,C.attributes.uv.needsUpdate=!0,C.computeBoundingSphere(),this}},$n=(i,e,t,n,s={})=>new El({cs:s.cs??2,seg:s.seg??[8,1,12],groups:!!s.groups}).fill(i,e,t,n,s.shape,s.tile??[1,1,1]);function Yg(i,e,t,n,s=91,r=44){let o=gn(s),a=Array.from({length:14},()=>[o()*1.8-.9,o()*1.8-.9,.12+o()*.3,(o()-.55)*.16]),l=[],c=[],h=[],u=.36;[1,-1].forEach((f,p)=>{let v=p*(r+1)*(r+1);for(let m=0;m<=r;m++)for(let g=0;g<=r;g++){let M=g/r*2-1,T=m/r*2-1,S=Math.pow(Math.max(0,(1-Math.abs(M)**2.4)*(1-Math.abs(T)**2.4)),.46),C=0;for(let[z,N,B,W]of a)C+=W*Math.exp(-((M-z)**2+(T-N)**2)/(B*B));let R=M*i/2-Math.sign(M)*i*.028*(1-T*T)*Math.abs(M)**7,x=T*e/2-Math.sign(T)*e*.045*(1-M*M)*Math.abs(T)**7,b=f>0?t/2*S*(1+C*(p?0:1)):-t/2*S*u;l.push(R,b- -t/2*u+n,x),c.push((M+1)/2*i,(T+1)/2*e)}for(let m=0;m<r;m++)for(let g=0;g<r;g++){let M=v+m*(r+1)+g,T=M+r+1;f>0?h.push(M,T,M+1,M+1,T,T+1):h.push(M,M+1,T,M+1,T+1,T)}});let d=new rn;return d.setAttribute("position",new Ft(new Float32Array(l),3)),d.setAttribute("uv",new Ft(new Float32Array(c),2)),d.setIndex(h),d.computeVertexNormals(),d}var Kh=class extends li{constructor(e,t,n){super(),this.w=e,this.d=t,this.r=n}getPoint(e,t=new O){let{w:n,d:s,r}=this,o=n-2*r,a=s-2*r,l=Me*r/2,c=2*(o+a)+4*l,h=(e%1+1)%1*c,u=n/2-r,d=s/2-r,f=[[o,p=>t.set(-u+p*o,0,d+r)],[l,p=>t.set(u+Math.sin(p*Me/2)*r,0,d+Math.cos(p*Me/2)*r)],[a,p=>t.set(u+r,0,d-p*a)],[l,p=>t.set(u+Math.cos(p*Me/2)*r,0,-d-Math.sin(p*Me/2)*r)],[o,p=>t.set(u-p*o,0,-d-r)],[l,p=>t.set(-u-Math.sin(p*Me/2)*r,0,-d-Math.cos(p*Me/2)*r)],[a,p=>t.set(-u-r,0,-d+p*a)],[l,p=>t.set(-u-Math.cos(p*Me/2)*r,0,d+Math.sin(p*Me/2)*r)]];for(let[p,v]of f){if(h<=p)return v(h/p),t;h-=p}return t}},Al={uDentA:{value:new hn(0,0,0,1)},uTopY:{value:ti+.7},uRange:{value:.5}};function Pf(i){return i.onBeforeCompile=e=>{Object.assign(e.uniforms,Al),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
        uniform vec4 uDentA; uniform float uTopY, uRange;
        vec3 dentAt(vec4 d, vec3 p){ vec2 q = p.xz - d.xy; float g = exp(-dot(q, q) / (d.w * d.w)); return vec3(d.z * g, 2.0 * d.z * g * q / (d.w * d.w)); }`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        vec4 dentP = modelMatrix * vec4(position, 1.0);
        float dentMask = smoothstep(uTopY - uRange, uTopY - 0.05, dentP.y);
        vec3 dentS = dentAt(uDentA, dentP.xyz);
        objectNormal = normalize(objectNormal - vec3(dentS.y, 0.0, dentS.z) * dentMask);`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.y -= dentS.x * dentMask;`)},i.customProgramCacheKey=()=>"ec-dent",i}function GS(){let i=new Yo({side:Qt});return i.onBeforeCompile=e=>{Object.assign(e.uniforms,Al),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
        uniform vec4 uDentA; uniform float uTopY, uRange;
        float dentAt(vec4 d, vec3 p){ vec2 q = p.xz - d.xy; return d.z * exp(-dot(q, q) / (d.w * d.w)); }`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec4 dentP = modelMatrix * vec4(position, 1.0);
        transformed.y -= dentAt(uDentA, dentP.xyz) * smoothstep(uTopY - uRange, uTopY - 0.05, dentP.y);`)},i.customProgramCacheKey=()=>"ec-dent-depth",i}function Xg(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}var qh=null;function Kg(i){return qh||(qh=(async()=>{let e=i?512:1024,t=Bg(e,{cells:2,round:.42,seam:.13,stitches:12,normal:i?20:40,threads:i?96:190,tuft:.35});await Af();let n=Bg(e,{cells:1,round:.5,seam:.075,stitches:22,normal:i?34:68,threads:i?96:190,tuft:1.3});await Af();let s=zg(256,2.2,[[96,96,.7],[40,40,.5]],40),r=zg(256,1.5,[[256,10,.5],[10,256,.5],[64,64,.2]],70),o=NS(256,4),a=Lf(512,(h,u)=>{h.fillStyle="#a8a294",h.fillRect(0,0,u,u);let d=gn(17),f=["#d9c27a","#7fa36b","#c96f63","#6b8cc7","#e6e1d3","#8c8c8c","#b9a27d","#f0e7c9","#6d6d64","#d08f4a","#cfd6e3"];for(let p=0;p<1500;p++){let v=d()*u,m=d()*u,g=3+d()*11,M=4+(d()*3|0),T=d()*Me,S=f[d()*f.length|0],C=[];for(let R=0;R<M;R++){let x=T+R/M*Me*2,b=g*(.6+d()*.5);C.push([Math.cos(x)*b,Math.sin(x)*b])}es(h,u,v,m,g*1.2,R=>{R.fillStyle=S,R.beginPath(),C.forEach(([x,b],z)=>z?R.lineTo(x,b):R.moveTo(x,b)),R.closePath(),R.fill()})}},1.4);await Af();let[l,c]=await Promise.all([Gg(Ng),Gg(Dg)]);return l.wrapS=l.wrapT=c.wrapS=c.wrapT=gr,{N:e,topQ:t,sideQ:n,pore:s,weave:r,egg:o,chips:a,oakRail:l,oakPlank:c}})(),qh)}function Zg(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,.5)"),t.addColorStop(.5,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),i}async function HS(i,e){let t=matchMedia("(prefers-reduced-motion: reduce)").matches,n=Math.min(innerWidth,innerHeight)<600,s=!t&&e.ambient===!0,r;try{r=new Sl({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(_){return e.onFail?.(_),null}r.setPixelRatio(Math.min(devicePixelRatio||1,n?1:1.25)),r.toneMapping=ea,r.toneMappingExposure=1,r.shadowMap.enabled=!0,r.shadowMap.type=Ar,ir=Math.min(12,r.capabilities.getMaxAnisotropy());let o=new _r,a=new zn(Og,1.6,2,260),l=new Ei(new O(0,1,0),-(ti+.7)),c=null,h=null;{let _=new _r,y=new Rr(r);_.background=new qe("#1b2340");let E=(L,D,G,V,j,he,ye)=>{let we=new et(new Dt(G,V),new xn({color:new qe(L).multiplyScalar(D),side:Qt}));we.position.set(j,he,ye),we.lookAt(0,0,0),_.add(we)};E("#ffcf9a",7,9,9,-14,8,7),E("#9db8ff",5,7,14,15,6,-7),E("#ffe9d4",1.6,26,12,0,16,2),E("#39456f",1.2,40,40,0,-10,0),c=o.environment=y.fromScene(_,.05).texture,o.environmentIntensity=.4,y.dispose()}let{N:u,topQ:d,sideQ:f,pore:p,weave:v,egg:m,chips:g,oakRail:M,oakPlank:T}=await Kg(n),S=(_={})=>new mn({roughness:.92,sheen:1,sheenRoughness:.55,sheenColor:new qe("#fff6ec"),normalScale:new ve(.62,.62),side:Qt,shadowSide:Qt,..._}),C=(_,y={})=>new lt({color:_,roughness:.94,normalMap:p,...y}),R=new xi(document.createElement("canvas")),x={top:Pf(S({map:R,normalMap:d})),side:Pf(S({map:R,normalMap:f})),under:new lt({color:"#c9c7c0",roughness:1,side:Qt}),piping:Pf(new mn({color:"#dddcd8",roughness:.7,sheen:.6,sheenRoughness:.6})),foam22:C("#f4f2ea"),foam25:C("#efe7d3"),foam30:C("#e4d8bb"),hd:C("#e3eaf1"),memory:C("#e8bf78"),pu:C("#e2efe4"),profile:C("#f3f1e9",{normalMap:m,normalScale:new ve(1.5,1.5)}),rebond:C("#ffffff",{map:g}),zoneSoft:C("#f4f1e7"),zoneFirm:C("#cfb98a"),oak:new lt({map:M,roughness:.5,color:new qe(1.5,1.42,1.32)}),plank:new lt({map:T,roughness:.55,color:new qe(1.02,.98,.94)}),iron:new lt({color:"#17181c",roughness:.5}),pillow:new mn({color:"#f4f2ec",roughness:1,sheen:1,sheenRoughness:.7,sheenColor:new qe("#ffffff"),normalMap:p,normalScale:new ve(.25,.25)})},b=new Xt;o.add(b);let z=GS();{let _=document.createElement("canvas");_.width=_.height=256;let y=_.getContext("2d");y.filter="blur(22px)",y.fillStyle="#000",y.fillRect(50,50,156,156);let E=new et(new Dt(1,1),new xn({map:new xi(_),transparent:!0,opacity:.55,depthWrite:!1}));E.rotation.x=-Me/2,E.position.y=.012,E.scale.set(11,13,1),b.add(E),b.contact=E}let N=new Xt;b.add(N);let B=(_,y,E,L,D,G=N,V=!0)=>{let j=new et(_,y);return j.position.set(E,L,D),j.castShadow=V,j.receiveShadow=!0,G.add(j),j},W=.68,Z=.19,P=ti-W/2,Y=$n(1,W,Z,.025,{seg:[1,1,1],tile:[[1,.74],[1,.74],[1,.74]]}).geometry,K=$n(Z,W,Rn+.44,.025,{seg:[1,1,8],tile:[[1,.74],[8.3,.74],[1,.74]]}).geometry,ee=B(Y,x.oak,0,P,Rn/2+.12),oe=B(Y,x.oak,0,P,-Rn/2-.12),ne=[B(K,x.oak,0,P,0),B(K,x.oak,0,P,0)],le=new Un(.13,.075,ti-W+.1,4,1);le.rotateY(Me/4);let fe=[-1,1].flatMap(_=>[-1,1].map(y=>{let E=B(le,x.oak,0,(ti-W+.1)/2,y*(Rn/2+.1));return E.userData.sx=_,E}));[-.34,.34].forEach(_=>B(new Un(.06,.06,ti-W,16),x.iron,_*.9,(ti-W)/2,Rn*.22)),[-.34,.34].forEach(_=>B(new Un(.06,.06,ti-W,16),x.iron,_*.9,(ti-W)/2,-Rn*.22));let Be=$n(1,.05,.32,.015,{seg:[1,1,1]}).geometry,Ve=Array.from({length:11},(_,y)=>B(Be,x.oak,0,ti-.04,-Rn/2+.35+y*(Rn-.7)/10)),ie=2.75,Ce=1,ze=new zi;{let y=Ce/2,E=ie,L=.36;ze.moveTo(-y,0),ze.lineTo(y,0),ze.lineTo(y,E-L),ze.absellipse(y-.055,E-L,.055,L,0,Me/2,!1,0),ze.lineTo(-y+.055,E),ze.absellipse(-y+.055,E-L,.055,L,Me/2,Me,!1,0),ze.lineTo(-y,0)}let Qe=new wr(ze,{depth:.13,bevelEnabled:!0,bevelThickness:.03,bevelSize:.012,bevelSegments:3,curveSegments:24}),ke=B(Qe,x.plank,0,ti-.35,-Rn/2-.37),be=-Rn/2-.75,Tt=(_,y,E,L=!0)=>{let D=document.createElement("canvas");D.width=_,D.height=y,E(D.getContext("2d"),_,y);let G=new xi(D);return L&&(G.colorSpace=fn),G.anisotropy=ir,G},rt=new xi(Zg());rt.colorSpace=fn;let Nt=[],Et=(_,y,E,L,D,G,V)=>{let j=new vr(new Xs({map:rt,color:y,transparent:!0,opacity:L,blending:Ii,depthWrite:!1,toneMapped:!1}));return j.scale.set(E,E,1),j.position.set(D,G,V),j.userData.o=L,_.add(j),Nt.push(j),j},pe=(_,y,E)=>new xn({map:_,color:y,transparent:!0,opacity:E,blending:Ii,depthWrite:!1,toneMapped:!1}),Ue=_=>new xn({color:new qe(_).multiplyScalar(1.6),toneMapped:!1}),de=(_,y,E,L=0,D=0,G=0,V=!0)=>{let j=new et(_,y);return j.position.set(L,D,G),j.castShadow=V,j.receiveShadow=!0,E.add(j),j},We=(_,y=32)=>new Zr(_.map(([E,L])=>new ve(E,L)),y),De=new lt({color:"#c09a5f",roughness:.28,metalness:.9}),ut=new lt({color:"#17171a",roughness:.42,metalness:.2}),tt=new mn({color:"#f3f1ec",roughness:.3,clearcoat:.5}),Rt=new Xt,nt=new Xt;o.add(Rt,nt);let gt=new Xt;Rt.add(gt);let H=new Xt,_n=new Xt;b.add(H,_n);let mt=new Xt,Mt=new Xt,Re=new Xt;H.add(mt,Mt),_n.add(Re);let un=[],st=_=>{let y=Tt(512,512,(E,L,D)=>{E.fillStyle="#fff",E.fillRect(0,0,L,D);let G=gn(3);for(let V=0;V<700;V++){let j=G()*L,he=G()*D,ye=8+G()*30,we=(G()*.02).toFixed(3);for(let Ye of j<ye?[0,L]:j>L-ye?[0,-L]:[0])for(let Gt of he<ye?[0,D]:he>D-ye?[0,-D]:[0]){let nn=E.createRadialGradient(j+Ye,he+Gt,0,j+Ye,he+Gt,ye);nn.addColorStop(0,`rgba(0,0,0,${we})`),nn.addColorStop(1,"rgba(0,0,0,0)"),E.fillStyle=nn,E.fillRect(j+Ye-ye,he+Gt-ye,ye*2,ye*2)}}});return y.wrapS=y.wrapT=Wn,y.repeat.set(_[0],_[1]),y},ft=_=>{let y=[],E=[],L=[],D=new O,G=new O;for(let{m:j,w:he,h:ye,bend:we=0}of _){let Ye=we?4:1,Gt=new wt().extractRotation(j);for(let nn=0;nn<Ye;nn++){let Nn=nn/Ye,Ti=(nn+1)/Ye,Ai=(Ji,as)=>{let Ma=we*as*as;return D.set(Ji*he,as*ye,Ma).applyMatrix4(j),[D.x,D.y,D.z]},Zi=[[-.5,Nn],[.5,Nn],[.5,Ti],[-.5,Nn],[.5,Ti],[-.5,Ti]];for(let[Ji,as]of Zi)y.push(...Ai(Ji,as)),E.push(Ji+.5,as),G.set(0,-we*2*as,1).normalize().applyMatrix4(Gt),L.push(G.x,G.y,G.z)}}let V=new rn;return V.setAttribute("position",new Ft(new Float32Array(y),3)),V.setAttribute("normal",new Ft(new Float32Array(L),3)),V.setAttribute("uv",new Ft(new Float32Array(E),2)),V},I=_=>{let y=_.map(he=>he.index?he.toNonIndexed():he),E=0;y.forEach(he=>{E+=he.attributes.position.count});let L=new Float32Array(E*3),D=new Float32Array(E*3),G=new Float32Array(E*2),V=0;y.forEach(he=>{L.set(he.attributes.position.array,V*3),D.set(he.attributes.normal.array,V*3),he.attributes.uv&&G.set(he.attributes.uv.array,V*2),V+=he.attributes.position.count});let j=new rn;return j.setAttribute("position",new Ft(L,3)),j.setAttribute("normal",new Ft(D,3)),j.setAttribute("uv",new Ft(G,2)),j},w=(_,y,E,L=0,D=0,G=0,V=1)=>new wt().compose(new O(_,y,E),new mi().setFromEuler(new us(D,L,G,"YXZ")),new O(V,V,V)),te=Tt(128,128,(_,y,E)=>{_.translate(y/2,E-4);let L=_.createLinearGradient(-y*.4,0,y*.4,-E);L.addColorStop(0,"#2f7a33"),L.addColorStop(.5,"#4f9f45"),L.addColorStop(1,"#2a6a2e"),_.fillStyle=L,_.beginPath(),_.moveTo(0,0),_.bezierCurveTo(-y*.5,-E*.18,-y*.5,-E*.78,-y*.16,-E*.9),_.bezierCurveTo(-y*.05,-E*.94,0,-E*.86,0,-E*.82),_.bezierCurveTo(0,-E*.86,y*.05,-E*.94,y*.16,-E*.9),_.bezierCurveTo(y*.5,-E*.78,y*.5,-E*.18,0,0),_.fill(),_.strokeStyle="rgba(220,245,190,.35)",_.lineWidth=2,_.beginPath(),_.moveTo(0,0),_.lineTo(0,-E*.8),_.stroke(),_.strokeStyle="rgba(230,250,200,.18)",_.lineWidth=1;for(let D=1;D<6;D++){let G=-E*.14*D;_.beginPath(),_.moveTo(0,G),_.quadraticCurveTo(-y*.14,G-8,-y*.3,G-14),_.moveTo(0,G),_.quadraticCurveTo(y*.14,G-8,y*.3,G-14),_.stroke()}}),Te=_=>Tt(128,512,(y,E,L)=>{let D=gn(_?41:42);y.strokeStyle=_?"#3c5a2c":"#5d8a3a",y.lineWidth=3,y.beginPath(),y.moveTo(E/2,L),y.lineTo(E/2,6),y.stroke();for(let G=0;G<34;G++){let V=G/34,j=L-18-V*(L-30),he=E*.47*Math.sin(Me*(.15+V*.8))*(1-V*.35);for(let ye of[-1,1]){let we=_?["#2f5a2a","#3e6e31","#274d24"]:["#4f8f3c","#6aa84a","#3f7a33"];y.fillStyle=we[(G+(ye>0?1:0))%3];let Ye=E/2+ye*he,Gt=j-he*.55-D()*4;y.beginPath(),y.moveTo(E/2,j),y.quadraticCurveTo(E/2+ye*he*.5,j-he*.1-4,Ye,Gt),y.quadraticCurveTo(E/2+ye*he*.45,j-he*.28+3,E/2,j-7),y.fill()}}}),ge=(_,y={})=>new lt({map:_,roughness:.62,side:Qt,alphaTest:.5,...y}),Se=5.45,Pe=10.6,ce=be+34,ue=T.clone();ue.wrapS=ue.wrapT=Wn;let Ae=Se+50,U=40;ue.repeat.set(U/9,Ae/.52),ue.needsUpdate=!0;let me=new Dt(Ae,U);{let _=me.attributes.uv;for(let y=0;y<_.count;y++)_.setXY(y,_.getY(y),_.getX(y))}let ae=new et(me,new lt({map:ue,color:"#c49d78",roughness:.46}));ae.rotation.x=-Me/2,ae.position.set((Se-50)/2,0,be+U/2),ae.receiveShadow=!0,gt.add(ae);let Le=new lt({color:"#efe2d1",map:st([7,5]),roughness:.95}),Fe=de(new Dt(Se+50,40),Le,gt,(Se-50)/2,20,be,!1);de(new ai(Se+50,.34,.06),new lt({color:"#f4ede3",roughness:.7}),gt,(Se-50)/2,.17,be+.03,!1);let Ne=new lt({color:"#141518",roughness:.34,metalness:.55}),je=(_,y,E,L,D,G,V=gt)=>de(new ai(_,y,E),Ne,V,L,D,G);for(let _=be+.07;_<ce;_+=3.35)je(.13,Pe,.13,Se,Pe/2,_);je(.16,.16,ce-be,Se,Pe,(be+ce)/2),je(.18,.1,ce-be,Se,.05,(be+ce)/2);let St=Tt(256,256,(_,y,E)=>{_.translate(y/2,E/2),_.rotate(-.5),_.translate(-y/2,-E/2),[[.2,.12,.1],[.42,.04,.07],[.7,.16,.06]].forEach(([L,D,G])=>{let V=L*y,j=_.createLinearGradient(V-D*y,0,V+D*y,0);j.addColorStop(0,"rgba(255,255,255,0)"),j.addColorStop(.5,`rgba(255,255,255,${G})`),j.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=j,_.fillRect(-y,-E,y*3,E*3)})});St.wrapS=St.wrapT=Wn,St.repeat.set(6,1);let Ee=de(new Dt(ce-be,Pe),pe(St,"#ffffff",.22),gt,Se-.01,Pe/2,(be+ce)/2,!1);Ee.rotation.y=-Me/2,Ee.renderOrder=5;let ot=de(new Dt(ce-be,30),Le,gt,Se,Pe+15.08,(be+ce)/2,!1);ot.rotation.y=-Me/2,de(new Dt(7,90),new lt({color:"#d9d2c7",roughness:.85}),gt,Se+3.5,-.03,0,!1).rotation.x=-Me/2;let xt=Se+6.2;de(new Dt(90,3.3),pe(St,"#e8f4ff",.14),gt,xt,1.65,0,!1).rotation.y=-Me/2;let Xe=de(new Un(.045,.045,90,8),Ne,gt,xt,3.3,0);Xe.rotation.x=Me/2;for(let _=-30;_<40;_+=3.6)je(.07,3.3,.07,xt,1.65,_);let Yt=new O(-4.5,0,20),wn=new O(.6,0,-.8),Xn=(_,y,E,L,D,G,V)=>{let j=new et(new Dt(y,E),new xn({map:_,toneMapped:!1,transparent:!0,depthWrite:!1}));return j.position.copy(Yt).addScaledVector(wn,L),j.position.y=D,j.lookAt(Yt.x,D,Yt.z),j.renderOrder=G,V.add(j),j},Hi=(_,y,E,L,D,G,V,j=1)=>{let he=gn(G),ye=[he()*9,he()*9,he()*9,he()*9];_.fillStyle=V,_.beginPath(),_.moveTo(0,E);for(let we=0;we<=y;we+=4){let Ye=we/y*j,Gt=L-D*(.55*Math.sin(Ye*5.1+ye[0])+.3*Math.sin(Ye*11.7+ye[1])+.15*Math.sin(Ye*27+ye[2])+.08*Math.sin(Ye*61+ye[3]));_.lineTo(we,Gt)}_.lineTo(y,E),_.closePath(),_.fill()},Ni=(_,y,E,L,D,G,V,j=1)=>{let he=gn(V),ye=Math.max(10,G*4);for(let we=0;we<D.length;we++){_.fillStyle=D[we];let Ye=L*(1-we*.14),Gt=we*L*.1*j;for(let nn=0;nn<ye;nn++){let Nn=he()*Me*2,Ti=Math.sqrt(he())*Ye,Ai=L*(.1+he()*.16)*(1-we*.1),Zi=y+Math.cos(Nn)*Ti+Gt*.6,Ji=E+Math.sin(Nn)*Ti*.78-Gt;_.beginPath(),_.arc(Zi,Ji,Ai,0,Me*2),_.fill()}}},Is=(_,y,E,L,D)=>{let G=gn(D);for(let V=0;V<y*E/90;V++)_.fillStyle=G()<.5?`rgba(255,255,255,${(G()*L).toFixed(3)})`:`rgba(0,0,0,${(G()*L).toFixed(3)})`,_.fillRect(G()*y,G()*E,1+G()*2,1+G()*2)},Lr=Tt(2048,1024,(_,y,E)=>{let L=_.createLinearGradient(0,0,0,E*.66);L.addColorStop(0,"#86b2df"),L.addColorStop(.45,"#b7d1ec"),L.addColorStop(.82,"#efe3d4"),L.addColorStop(1,"#fbe1bd"),_.fillStyle=L,_.fillRect(0,0,y,E);let D=y*.82,G=E*.5,V=_.createRadialGradient(D,G,0,D,G,E*.6);V.addColorStop(0,"rgba(255,248,226,1)"),V.addColorStop(.1,"rgba(255,228,176,.6)"),V.addColorStop(.45,"rgba(255,214,160,.16)"),V.addColorStop(1,"rgba(255,214,160,0)"),_.fillStyle=V,_.fillRect(0,0,y,E),_.fillStyle="#fffbf2",_.beginPath(),_.arc(D,G,E*.045,0,Me*2),_.fill();let j=gn(14);for(let he=0;he<14;he++){let ye=j()*y,we=E*(.08+j()*.3),Ye=120+j()*260;_.save(),_.translate(ye,we),_.scale(1,.16);let Gt=_.createRadialGradient(0,0,0,0,0,Ye);Gt.addColorStop(0,"rgba(255,255,255,.45)"),Gt.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=Gt,_.beginPath(),_.arc(0,0,Ye,0,Me*2),_.fill(),_.restore()}[[.55,.1,3,"#c4cbdc"],[.585,.085,5,"#a9b7cb"],[.625,.07,7,"#8fa6ad"],[.67,.055,9,"#7c9c86"]].forEach(([he,ye,we,Ye],Gt)=>{Hi(_,y,E,E*he,E*ye,we,Ye,1+Gt*.3);let nn=_.createLinearGradient(0,E*(he-.01),0,E*(he+.06));nn.addColorStop(0,"rgba(250,240,228,0)"),nn.addColorStop(1,"rgba(250,240,228,.5)"),_.fillStyle=nn,_.fillRect(0,E*(he-.01),y,E*.07)}),_.fillStyle="#7c9c86",_.fillRect(0,E*.72,y,E)}),sr=Tt(2048,512,(_,y,E)=>{let L=(V,j,he,ye,we,Ye)=>{let Gt=_.createLinearGradient(0,V-j,0,E);Gt.addColorStop(0,ye),Gt.addColorStop(1,we),Hi(_,y,E,V,j,he,Gt,Ye)};L(E*.3,E*.12,21,"#a9c6a0","#8fb488",1.3),L(E*.46,E*.11,22,"#93bd78","#77a560",1.7),L(E*.62,E*.1,23,"#7cad5f","#5e9148",2.2),_.globalCompositeOperation="source-atop",_.strokeStyle="rgba(45,85,35,.22)",_.lineWidth=2.5;for(let V=0;V<22;V++){let j=E*(.66+V*.015);_.beginPath();for(let he=0;he<=y;he+=14)_.lineTo(he,j+Math.sin(he*.0035+V*.35)*12);_.stroke()}_.globalCompositeOperation="source-over";let D=gn(24);for(let V=0;V<60;V++){let j=D()*y,he=E*(.3+D()*.5);Ni(_,j,he,10+D()*18,["#2f5a2a","#3f7034","#5a8d45","#7eae5e"],3,100+V)}let G=_.createLinearGradient(0,E*.22,0,E*.55);G.addColorStop(0,"rgba(240,236,226,.45)"),G.addColorStop(1,"rgba(240,236,226,0)"),_.globalCompositeOperation="source-atop",_.fillStyle=G,_.fillRect(0,0,y,E),_.globalCompositeOperation="source-over",Is(_,y,E,.05,25)}),Vi=Tt(1024,512,(_,y,E)=>{let L=gn(31);for(let D=0;D<9;D++){let G=y*(D/8)+(L()-.5)*60,V=E*(.46+L()*.22);Ni(_,G,V,60+L()*50,["#1f4220","#2c5a2a","#3f7535","#5b9346","#86bb63"],10,200+D)}_.fillStyle="#244a23",_.fillRect(0,E*.84,y,E),_.globalCompositeOperation="source-atop",Is(_,y,E,.07,32),_.globalCompositeOperation="source-over"}),Wi=[Xn(Lr,220,88,95,16,1,gt),Xn(sr,120,30,50,-.5,2,gt),Xn(Vi,56,20,30,1.2,3,gt)],rr=new lt({color:"#ffffff",roughness:.95,transparent:!0,opacity:.74,side:Qt,depthWrite:!1,emissive:new qe("#fff1de"),emissiveIntensity:.42}),ts=Tt(256,256,(_,y,E)=>{_.fillStyle="#fff",_.fillRect(0,0,y,E);let L=gn(8);for(let D=0;D<2600;D++)_.fillStyle=`rgba(0,0,0,${(L()*.07).toFixed(3)})`,_.fillRect(L()*y,L()*E,1+L()*3,1);for(let D=0;D<y;D+=3)_.fillStyle=`rgba(0,0,0,${(L()*.04).toFixed(3)})`,_.fillRect(D,0,1,E)});ts.wrapS=ts.wrapT=Wn,ts.repeat.set(3,6);let or=new lt({color:"#d9c8ae",map:ts,roughness:1,side:Qt}),ns=[],On=(_,y,E,L,D,G,V,j=gt,he="z",ye=Pe-.2)=>{let we=new Dt(y,ye,Math.round(y*12),14),Ye=new et(we,_);return he==="z"?(Ye.rotation.y=-Me/2,Ye.position.set(E,ye/2,L+y/2)):Ye.position.set(E+y/2,ye/2,L),Ye.renderOrder=_.transparent?6:0,Ye.castShadow=!_.transparent,Ye.receiveShadow=!0,j.add(Ye),ns.push({geo:we,base:we.attributes.position.array.slice(),ph:D,pleats:G,depth:V,w:y,h:ye}),Ye};On(rr,2.2,Se-.3,be+.2,0,10,.12),On(or,1.05,Se-.46,be+.14,1.7,6,.16),de(new Un(.03,.03,9,8),Ne,gt,Se-.4,Pe-.2,be+4.5).rotation.x=Me/2;let Xi=Tt(512,128,(_,y,E)=>{_.filter="blur(6px)",_.fillStyle="#fff";for(let L=0;L<4;L++)_.fillRect(14+L*y/4,14,y/4-30,E-28)}),Ps=new Dt(1,1);[[Se,be+3.6],[Se,be+17],[Se-9.5,be+20.5],[Se-9.5,be+7.1]].forEach(([_,y],E)=>Ps.attributes.position.setXYZ([2,3,1,0][E],_,.07,y)),Ps.computeVertexNormals();let Ls=new et(Ps,Object.assign(pe(Xi,"#ffdcae",.2),{side:Qt}));Ls.renderOrder=2,Ls.frustumCulled=!1,gt.add(Ls);let ar=(_,y,E)=>new ki({uniforms:{uTime:{value:0},uPx:{value:r.getPixelRatio()},uCol:{value:new qe(...y)},uA:{value:E}},vertexShader:`attribute float phase; uniform float uTime, uPx; varying float vA;
      void main(){ vec3 p = position;
        ${_==="dust"?"p += vec3(sin(uTime*.21 + phase)*.22, sin(uTime*.13 + phase*1.7)*.3, cos(uTime*.17 + phase*.9)*.22);":""}
        vA = .4 + .6 * (.5 + .5 * sin(uTime * (.9 + fract(phase) * 1.8) + phase * 3.1));
        vec4 mv = modelViewMatrix * vec4(p, 1.);
        gl_PointSize = uPx * ${_==="dust"?"(1.2 + fract(phase * 7.) * 1.8) * (44. / -mv.z)":"(1.1 + fract(phase * 3.) * 1.9)"};
        gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 uCol; uniform float uA; varying float vA; void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .04, d) * vA * uA; gl_FragColor = vec4(uCol * a, a); }",transparent:!0,depthWrite:!1,blending:Ii}),Bn=(_,y,E,L,D)=>{let G=new Float32Array(_*3),V=new Float32Array(_),j=gn(y);for(let we=0;we<_;we++)G.set(E(j),we*3),V[we]=j()*50;let he=new rn;he.setAttribute("position",new Ft(G,3)),he.setAttribute("phase",new Ft(V,1));let ye=new br(he,L);return ye.frustumCulled=!1,ye.renderOrder=7,D.add(ye),ye},Nr=ar("dust",[1,.93,.8],.32);Bn(n?30:60,31,_=>[Se-.5-_()*7,.4+_()*7.5,be+2+_()*12],Nr,gt);let Zt={A:4.6,hs:4.55,ry:3.4},is=Zt.hs+Zt.ry,A=(_,y,E,L=72)=>{let D=[new ve(-_,0),new ve(-_,y)];for(let G=1;G<L;G++){let V=Me-G/L*Me;D.push(new ve(Math.cos(V)*_,y+Math.sin(V)*E))}return D.push(new ve(_,y),new ve(_,0)),D},k=new Xt;Rt.add(k);let se=Tt(512,512,(_,y,E)=>{let L=y/(Zt.A*2),D=E/is,G=he=>[(he.x+Zt.A)*L,E-he.y*D],V=()=>{_.beginPath(),A(Zt.A,Zt.hs,Zt.ry).forEach((he,ye)=>{let[we,Ye]=G(he);ye?_.lineTo(we,Ye):_.moveTo(we,Ye)})};_.fillStyle="#000",_.fillRect(0,0,y,E),_.globalCompositeOperation="lighter";for(let he=0;he<26;he++){let ye=he/25;V(),_.lineWidth=6+ye*150,_.strokeStyle=`rgba(255,255,255,${(.09*(1-ye)**1.6+.012).toFixed(3)})`,_.stroke()}_.globalCompositeOperation="multiply";let j=_.createLinearGradient(0,E,0,0);j.addColorStop(0,"#2a2a2a"),j.addColorStop(.35,"#b0b0b0"),j.addColorStop(1,"#ffffff"),_.fillStyle=j,_.fillRect(0,0,y,E)}),Q=new zi(A(Zt.A,Zt.hs,Zt.ry)),$=new qo(Q,24);{let _=$.attributes.position,y=$.attributes.uv;for(let E=0;E<_.count;E++)y.setXY(E,(_.getX(E)+Zt.A)/(Zt.A*2),_.getY(E)/is)}let Oe=new lt({color:"#f5eadb",map:st([2,2]),roughness:.95,emissive:new qe("#ffb46e"),emissiveMap:se,emissiveIntensity:.95});de($,Oe,k,0,0,be+.004,!1);let Je=new zi([...A(Zt.A+.17,Zt.hs,Zt.ry+.17),...A(Zt.A,Zt.hs,Zt.ry).reverse()]),Ie=new lt({color:"#f2e6d6",roughness:.9});de(new wr(Je,{depth:.2,bevelEnabled:!0,bevelThickness:.02,bevelSize:.02,bevelSegments:2,curveSegments:6}),Ie,k,0,0,be,!0);class He extends li{constructor(y,E){super(),this.pts=E?[...y,y[0]]:y,this.acc=[0];for(let L=1;L<this.pts.length;L++)this.acc.push(this.acc[L-1]+this.pts[L].distanceTo(this.pts[L-1]))}getPoint(y,E=new O){let L=this.acc[this.acc.length-1]*jn(y),D=1;for(;D<this.acc.length-1&&this.acc[D]<L;)D++;let G=this.acc[D-1],V=this.acc[D];return E.lerpVectors(this.pts[D-1],this.pts[D],V>G?(L-G)/(V-G):0)}}let it=de(new fs(new He(A(Zt.A-.035,Zt.hs,Zt.ry-.035).map(_=>new O(_.x,Math.max(.35,_.y),be+.17))),240,.028,6,!1),Ue("#ffd9a6"),k,0,0,0,!1),ct=Tt(512,512,(_,y,E)=>{let D=(y-120)/(Zt.A*2),G=(E-60)/is;_.beginPath(),A(Zt.A,Zt.hs,Zt.ry).forEach((V,j)=>{let he=60+(V.x+Zt.A)*D,ye=E-V.y*G;j?_.lineTo(he,ye):_.moveTo(he,ye)}),_.globalCompositeOperation="lighter";for(let V=0;V<14;V++){let j=V/13;_.lineWidth=4+j*90,_.strokeStyle=`rgba(255,255,255,${(.12*(1-j)**2).toFixed(3)})`,_.stroke()}}),Ct=de(new Dt(Zt.A*2*512/392,is*512/452),pe(ct,"#ffb46a",.55),k,0,is*512/452/2,be+.012,!1);Ct.renderOrder=1;let $e=new Xt;Rt.add($e);let Ot=_=>Tt(256,360,(y,E,L)=>{let D=gn(_),G=y.createLinearGradient(0,0,0,L);G.addColorStop(0,"#f3ede3"),G.addColorStop(1,"#e9e0d2"),y.fillStyle=G,y.fillRect(0,0,E,L),y.fillStyle="rgba(232,170,120,.55)",y.beginPath(),y.arc(E*(.3+D()*.4),L*(.26+D()*.1),E*.11,0,Me*2),y.fill(),[["#d9cbb6",.5],["#b8b3aa",.6],["#8f98a3",.7],["#6f7c8a",.82]].forEach(([V,j],he)=>Hi(y,E,L,L*j,L*(.1-he*.012),_*7+he,V,.45+D()*.3))}),yn=new lt({color:"#3a2a20",roughness:.5}),en=new lt({color:"#f8f5ef",roughness:.9}),Jt=(_,y,E,L,D)=>{let G=new Xt;G.position.set(E,L,be+.02),$e.add(G);let V=.07,j=.075;[[_,V,0,y/2-V/2],[_,V,0,-y/2+V/2],[V,y-2*V,-_/2+V/2,0],[V,y-2*V,_/2-V/2,0]].forEach(([he,ye,we,Ye])=>de(new ai(he,ye,j),yn,G,we,Ye,j/2)),de(new Dt(_-2*V,y-2*V),en,G,0,0,.014,!1),de(new Dt((_-2*V)*.7,(y-2*V)*.74),new lt({map:Ot(D),roughness:.8}),G,0,.02,.018,!1)};Jt(1.16,1.6,-1.5,5.36,3),Jt(1.32,1.96,0,5.54,7),Jt(1.16,1.6,1.5,5.36,11);let bn=Tt(512,512,(_,y,E)=>{let L=gn(21);_.fillStyle="#ffffff",_.fillRect(0,0,y,E);for(let D=0;D<16e3;D++)_.fillStyle=L()<.5?`rgba(255,255,255,${(L()*.3).toFixed(3)})`:`rgba(120,100,80,${(L()*.08).toFixed(3)})`,_.fillRect(L()*y,L()*E,1+L()*2.5,1+L())});bn.wrapS=bn.wrapT=Wn,bn.repeat.set(4,4);let Ze=de($n(1,.06,1,.025,{seg:[1,1,1]}).geometry,new lt({map:bn,color:"#e8dece",roughness:1,normalMap:p,normalScale:new ve(.5,.5)}),b,.9,.03,1.6,!1);Ze.receiveShadow=!0,de(new Un(.82,.82,.07,48),ut,mt,0,2.05,0),[0,2.09,4.19].forEach(_=>{de(new Un(.04,.028,2.02,10),ut,mt,Math.cos(_)*.48,1.01,Math.sin(_)*.48).rotation.set(Math.sin(_)*.1,0,-Math.cos(_)*.1)});let Cn=new mn({color:"#fbf7ef",emissive:new qe("#ffcf98"),emissiveIntensity:.7,roughness:.3,clearcoat:.4,side:Qt}),Vt=(_,y,E,L,D,G)=>{let V=new Xt;return V.position.set(y,E,L),V.scale.setScalar(D),_.add(V),de(We([[0,0],[.27,0],[.29,.03],[.25,.07],[.07,.1],[0,.1]]),De,V),de(new Un(.03,.034,.92,12),De,V,0,.55,0),de(We(Array.from({length:14},(j,he)=>{let ye=he/13*Me/2;return[.5*Math.cos(ye),.4*Math.sin(ye)]}),40),Cn,V,0,.99,0),de(new Vo(.47,32),Ue("#ffe3b8"),V,0,.985,0,!1).rotation.x=Me/2,Et(V,G,2.6,.36,0,1.02,0),Et(V,"#fff0d8",.9,.5,0,.96,0),V};Vt(mt,.28,2.09,-.34,1,"#ffc98a");let Qn=new Qs("#ffc78c",0,10,2);Qn.position.set(.28,2.95,-.34),H.add(Qn);let dn=de(We([[0,0],[.22,0],[.26,.05],[.29,.42],[.31,.46],[.28,.47],[0,.42]]),tt,mt,-.36,2.09,.3),Di;{let _=[],y=gn(57);for(let E=0;E<8;E++){let L=-Me*.2+E/8*Me*1.25+y()*.3,D=.3+y()*.5,G=.15+y()*(E%3?.45:1.1),V=6+Math.floor(G*5);for(let j=0;j<V;j++){let he=j/(V-1),ye=.22+D*Math.min(1,he*1.6),we=-.36+Math.cos(L)*ye,Ye=.3+Math.sin(L)*ye,Gt=Math.hypot(we,Ye)<.78,nn=.5+.12*Math.sin(he*Me)-G*he*he;Gt&&(nn=Math.max(nn,.04+.1*(1-he))),_.push({m:w(we,2.09+nn,Ye,L+Me/2+(y()-.5)*1.2,-.5-y()*.9+he*.8,(y()-.5)*.8,.17+y()*.09),w:1,h:1})}}Di=new et(ft(_),ge(te)),Di.castShadow=!0,mt.add(Di),un.push({o:Di,axis:"z",amp:.012,speed:.7,ph:0})}let ui=[de($n(1.9,1.42,1.5,.03,{seg:[2,2,2]}).geometry,x.oak,Re,0,1.2,0),de($n(1.74,.62,.05,.012,{seg:[2,2,1]}).geometry,x.oak,Re,0,1.42,.76)];de(new ai(.42,.05,.05),De,Re,0,1.46,.8),[[-.8,-.6],[.8,-.6],[-.8,.6],[.8,.6]].forEach(([_,y])=>de(new Un(.06,.035,.5,8),x.oak,Re,_,.25,y)),de($n(.96,.085,.7,.012,{seg:[1,1,1]}).geometry,new lt({color:"#ece7de",roughness:.8}),Re,-.3,1.955,.16).rotation.y=-.06,de($n(.84,.075,.62,.012,{seg:[1,1,1]}).geometry,new lt({color:"#c9ccce",roughness:.8}),Re,-.28,2.035,.14).rotation.y=.1,de(We([[0,0],[.15,0],[.17,.02],[.18,.2],[.16,.27],[.065,.31],[.055,.37],[.065,.385],[0,.385]],28),new mn({color:"#a8641f",roughness:.12,clearcoat:1,transparent:!0,opacity:.86}),Re,.4,1.91,-.2);{let _=gn(66),y=[];for(let E=0;E<8;E++){let L=new Un(.007,.007,1.15,4);L.translate(0,.575,0),L.applyMatrix4(w(.4,1.91+.36,-.2,_()*Me*2,(.1+_()*.22)*(_()<.5?-1:1),(.1+_()*.22)*(_()<.5?-1:1))),y.push(L)}de(I(y),ut,Re)}let $t=8.35,ht=.18,an=.5,ln=de(new Dt(110,60),new lt({color:"#1f2026",roughness:.2,metalness:.12}),nt,0,0,be+30,!1);ln.rotation.x=-Me/2;let bt=new lt({color:"#2a2930",map:st([6,4]),roughness:.92});de(new Dt(an+55,$t),bt,nt,(an-55)/2,$t/2,be,!1);for(let _=an;_<50;_+=3.6)je(.13,$t,.13,_,$t/2,be+.06,nt);je(60,.14,.14,an+30,$t-.07,be+.06,nt),je(60,.1,.16,an+30,.05,be+.07,nt);let Kt=de(new Dt(60,$t),pe(St,"#c8d2ff",.1),nt,an+30,$t/2,be+.02,!1);Kt.renderOrder=5;let Tn=new Xt;nt.add(Tn);let qi=new lt({color:"#1b1a1f",roughness:.9});de(new Dt(110,60),qi,Tn,0,$t,be+30,!1).rotation.x=Me/2;let Yi={x:1.8,z:2.6,rx:9.6,rz:6.6},Dr=(_,y)=>Array.from({length:160},(E,L)=>{let D=L/160*Me*2;return new O(Yi.x+Math.cos(D)*Yi.rx*_,y,Yi.z+Math.sin(D)*Yi.rz*_)});de(new fs(new He(Dr(1,$t-.06),!0),320,.035,6,!0),Ue("#ffcf8a"),Tn,0,0,0,!1),de(new fs(new He(Dr(.93,$t-.03),!0),320,.018,5,!0),Ue("#b07a45"),Tn,0,0,0,!1);let Rl=Tt(512,512,(_,y,E)=>{_.translate(y/2,E/2),((D,G,V)=>{let j=_.createRadialGradient(0,0,D,0,0,G);j.addColorStop(0,"rgba(255,255,255,0)"),j.addColorStop(.75,`rgba(255,255,255,${V})`),j.addColorStop(.86,`rgba(255,255,255,${V*.5})`),j.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=j,_.fillRect(-y/2,-E/2,y,E)})(y*.05,y*.5,.9)}),ca=de(new Dt(Yi.rx*2/.86*1,Yi.rz*2/.86),pe(Rl,"#ffb46a",.55),Tn,Yi.x,$t-.015,Yi.z,!1);ca.rotation.x=Me/2,ca.renderOrder=1;let lr;{let _=[];for(let L=-5.26;L<-3.45;L+=.31){let D=new ai(.2,$t,.13);D.translate(L,$t/2,be+.075),_.push(D)}let y=M.clone();y.wrapS=y.wrapT=Wn,y.repeat.set(.3,3),y.needsUpdate=!0,lr=de(I(_),new lt({color:"#7a5236",map:y,roughness:.55}),nt);let E=Tt(64,256,(L,D,G)=>{let V=L.createLinearGradient(0,0,D,0);V.addColorStop(0,"rgba(255,255,255,0)"),V.addColorStop(.5,"rgba(255,255,255,1)"),V.addColorStop(1,"rgba(255,255,255,0)"),L.fillStyle=V,L.fillRect(0,0,D,G)});[-4.795,-3.865].forEach(L=>{de(new ai(.035,$t-.3,.02),Ue("#ffc98a"),nt,L,$t/2,be+.03,!1);let D=de(new Dt(1.5,$t),pe(E,"#ffa955",.5),nt,L,$t/2,be+.145,!1);D.renderOrder=2})}let ni=new ve(.35,1.4),wi=9.4,Ns=be+.04,Ds=(()=>{let _=Math.asin(jn((Ns-ni.y)/wi,-1,1)),y=_,E=Me-_,L=[];for(let D=0;D<=120;D++)L.push(y+D/120*(E-y));return L})(),Ur=new zi;Ds.forEach((_,y)=>{let E=ni.x+Math.cos(_)*wi,L=ni.y+Math.sin(_)*wi;y?Ur.lineTo(E,L):Ur.moveTo(E,L)}),Ur.closePath();let lo=new wr(Ur,{depth:ht,bevelEnabled:!0,bevelThickness:.015,bevelSize:.03,bevelSegments:2,curveSegments:4});lo.rotateX(Me/2),lo.translate(0,ht,0);let ha=de(lo,[new lt({color:"#3b3a3d",roughness:.62,metalness:0}),new lt({color:"#25262b",roughness:.5})],nt,0,0,0,!1);ha.receiveShadow=!0,de(new fs(new He(Ds.map(_=>new O(ni.x+Math.cos(_)*(wi+.04),.035,Math.max(Ns+.02,ni.y+Math.sin(_)*(wi+.04))))),260,.028,5,!1),Ue("#ffc27a"),nt,0,0,0,!1);{let _=[],y=[];Ds.forEach((V,j)=>{let he=Math.cos(V),ye=Math.sin(V);_.push(ni.x+he*(wi-.1),.012,Math.max(Ns,ni.y+ye*(wi-.1)),ni.x+he*(wi+1.7),.012,Math.max(Ns,ni.y+ye*(wi+1.7))),y.push(j/120,0,j/120,1)});let E=[];for(let V=0;V<Ds.length-1;V++){let j=V*2;E.push(j,j+1,j+2,j+1,j+3,j+2)}let L=new rn;L.setAttribute("position",new Ft(new Float32Array(_),3)),L.setAttribute("uv",new Ft(new Float32Array(y),2)),L.setIndex(E);let D=Tt(4,64,(V,j,he)=>{let ye=V.createLinearGradient(0,he,0,0);ye.addColorStop(0,"rgba(255,255,255,1)"),ye.addColorStop(.25,"rgba(255,255,255,.45)"),ye.addColorStop(1,"rgba(255,255,255,0)"),V.fillStyle=ye,V.fillRect(0,0,j,he)}),G=new et(L,pe(D,"#ff9e50",.5));G.renderOrder=2,G.frustumCulled=!1,nt.add(G)}let Cl=Tt(64,256,(_,y,E)=>{let L=_.createLinearGradient(0,0,0,E);L.addColorStop(0,"rgba(255,255,255,0)"),L.addColorStop(1,"rgba(255,255,255,.9)"),_.fillStyle=L,_.fillRect(0,0,y,E)}),cr=de(new Dt(52,7),pe(Cl,"#7c6aa6",.13),nt,an+26,.006,be+3.5,!1);cr.rotation.x=-Me/2,cr.renderOrder=1;let Fr=Tt(2048,1024,(_,y,E)=>{let L=_.createLinearGradient(0,0,0,E*.7);L.addColorStop(0,"#18204a"),L.addColorStop(.32,"#2f3168"),L.addColorStop(.55,"#5d4c86"),L.addColorStop(.74,"#b4728c"),L.addColorStop(.88,"#ea9a6e"),L.addColorStop(1,"#f5bd86"),_.fillStyle=L,_.fillRect(0,0,y,E);let D=gn(77);for(let G=0;G<160;G++){_.fillStyle=`rgba(240,240,255,${(.15+D()*.5).toFixed(2)})`;let V=D()<.9?1.2:2;_.fillRect(D()*y,D()*E*.3,V,V)}for(let G=0;G<10;G++){let V=D()*y,j=E*(.42+D()*.2),he=160+D()*320;_.save(),_.translate(V,j),_.scale(1,.06);let ye=_.createRadialGradient(0,0,0,0,0,he);ye.addColorStop(0,"rgba(255,170,170,.35)"),ye.addColorStop(1,"rgba(255,170,170,0)"),_.fillStyle=ye,_.beginPath(),_.arc(0,0,he,0,Me*2),_.fill(),_.restore()}[[.66,.1,41,"#5a4f80"],[.7,.085,43,"#43426c"],[.745,.07,45,"#2f3253"],[.79,.055,47,"#1f2338"]].forEach(([G,V,j,he],ye)=>{Hi(_,y,E,E*G,E*V,j,he,1.2+ye*.35);let we=_.createLinearGradient(0,E*(G-.005),0,E*(G+.05));we.addColorStop(0,"rgba(240,150,140,0)"),we.addColorStop(1,`rgba(240,150,140,${(.18-ye*.04).toFixed(2)})`),_.fillStyle=we,_.fillRect(0,E*(G-.005),y,E*.06)}),_.fillStyle="#1f2338",_.fillRect(0,E*.84,y,E)}),ua=Tt(2048,512,(_,y,E)=>{Hi(_,y,E,E*.5,E*.14,51,"#182029",1.6);let L=gn(52);for(let D=0;D<70;D++){let G=L()*y,V=E*(.4+L()*.3);Ni(_,G,V,12+L()*26,["#0f161b","#151f26","#1f2a2f"],3,300+D)}_.fillStyle="#141b22",_.fillRect(0,E*.72,y,E)}),da=Tt(1024,768,(_,y,E)=>{let L=gn(61);_.strokeStyle="#0d1311",_.lineCap="round",[[.36,1,.33,.62,16],[.35,.78,.25,.52,7],[.34,.74,.46,.5,6]].forEach(([D,G,V,j,he])=>{_.lineWidth=he,_.beginPath(),_.moveTo(y*D,E*G),_.quadraticCurveTo(y*(D+V)/2,E*(G+j)/2+14,y*V,E*j),_.stroke()}),Ni(_,y*.35,E*.42,140,["#0a110f","#0f1815","#16211d","#202c26","#3a3433"],26,400),Ni(_,y*.2,E*.62,70,["#0a110f","#111a17","#1a2621","#352f2f"],10,402);for(let D=0;D<14;D++)Ni(_,y*(D/13),E*(.86+L()*.05),36+L()*26,["#0a100e","#101815"],6,410+D);_.fillStyle="#0a100e",_.fillRect(0,E*.91,y,E)}),co=(_,y,E,L,D,G,V)=>{let j=new et(new Dt(y,E),new xn({map:_,toneMapped:!1,transparent:!0,depthWrite:!1}));return j.position.set(L,D,G),j.renderOrder=V,nt.add(j),j},ho=[co(Fr,340,170,18,22,be-90,1),co(ua,190,48,14,-9,be-44,2),co(da,34,25.5,10,4.6,be-13,3)],ss=ar("star",[1,.97,.9],.8);ho.stars=Bn(n?30:60,9,_=>[-40+_()*110,22+_()*30,be-85],ss,nt);let Il=new lt({color:"#4b4c57",roughness:.95,transparent:!0,opacity:.55,side:Qt,depthWrite:!1,emissive:new qe("#2a2440"),emissiveIntensity:.5});On(Il,2.6,10.4,be+.38,2.2,11,.11,nt,"x",$t-.12);let F={x:.25,z:2.05,h:3.55};de(new Un(.34,.36,.05,32),ut,Mt,F.x,ht+.025,F.z),de(new Un(.028,.028,F.h,10),ut,Mt,F.x,ht+F.h/2,F.z),de(new fs(new He([[0,0],[.05,.19],[.24,.3],[.44,.24],[.58,.06]].map(([_,y])=>new O(F.x+_,ht+F.h+y,F.z))),24,.026,8,!1),ut,Mt);let J=Vt(Mt,F.x+.58,ht+F.h+.06-1.39*1.08,F.z,1.08,"#ffb870");J.children[0].visible=J.children[1].visible=!1;let re=new Qs("#ffb36b",0,12,1.8);re.position.set(F.x+.58,ht+F.h-.5,F.z),H.add(re);let _e=de(We([[0,0],[.36,0],[.42,.62],[.45,.66],[.4,.68],[0,.6]]),new lt({color:"#2b2b30",roughness:.55}),Mt,.95,ht,-.9),xe;{let _=[],y=gn(88);for(let E=0;E<26;E++){let L=-2.6+E/25*4+(y()-.5)*.35,D=.35+y()*1,G=2.1+y()*2.1;_.push({m:w(.95+(y()-.5)*.2,ht+.55+y()*.15,-.9+(y()-.5)*.2,L,-(Me/2-D),(y()-.5)*.5,1),w:.95+y()*.3,h:G,bend:-.35-y()*.65})}xe=new et(ft(_),ge(Te(!0))),xe.castShadow=!0,Mt.add(xe),un.push({o:xe,axis:"z",amp:.02,speed:.5,ph:1.3})}let Ge=new $s("#fff1e0",300,90,.6,.85,1.2);Ge.castShadow=!0,Ge.shadow.mapSize.set(1024,1024),Ge.shadow.radius=6,Ge.shadow.blurSamples=16,Ge.shadow.bias=-4e-4,Ge.shadow.normalBias=.025,Ge.shadow.camera.near=4,Ge.shadow.camera.far=80,o.add(Ge,Ge.target);let pt={pos:[new O(-6.5,13.5,11),new O(Se+22,17,9)],at:[new O(0,2,-.4),new O(-.5,1.6,-.8)]},It=new ws("#fff6ec",1);It.position.set(-4,5,14),o.add(It);let Ut=new ws("#9a90e0",0);Ut.position.set(5,9,-30),o.add(Ut);let yt=new Ko("#e9f0ff","#dcb98f",1);o.add(yt);let cn=_=>{ss.uniforms.uTime.value=_,Nr.uniforms.uTime.value=_,ns.forEach(y=>{let E=y.geo.attributes.position.array,L=y.base;for(let D=0;D<E.length;D+=3){let G=L[D],V=L[D+1],j=(y.h/2-V)/y.h,he=Math.sin((G/y.w+.5)*Me*y.pleats)*y.depth;E[D+2]=L[D+2]+he+(Math.sin(_*.9+y.ph+V*.35)*.1*j*j+Math.sin(_*1.6+G*2.1)*.025*j)*(t?0:1),E[D]=L[D]+Math.sin(_*.7+y.ph)*.05*j*j*(t?0:1)}y.geo.attributes.position.needsUpdate=!0,y.geo.computeVertexNormals()}),t||un.forEach(y=>{y.o.rotation[y.axis]=Math.sin(_*y.speed+y.ph)*y.amp})};cn(0);let Pt=(_,y)=>[new qe(_),new qe(y)],At={key:Pt("#ffe6c8","#fff3e2"),fill:Pt("#8c9cff","#fff6ec"),sky:Pt("#ffcf9a","#e9f0ff"),ground:Pt("#141419","#dcb98f")},Bt=(_,y,E)=>_.copy(y[0]).lerp(y[1],E),tn=null;function Pn(){let _=bi(0,1,q.day),y=1-_,E=1-.85*Ir(q.buildPose),L=q.day>=.5;L!==tn&&(tn=L,Rt.visible=mt.visible=Re.visible=Ze.visible=L,nt.visible=Mt.visible=!L,o.environment=L&&h?h:c,b.contact.position.y=L?.012:ht+.006),Ge.position.lerpVectors(pt.pos[0],pt.pos[1],_),Ge.target.position.lerpVectors(pt.at[0],pt.at[1],_),Bt(Ge.color,At.key,_),Ge.intensity=on(260,520,_),Ge.angle=on(.5,.62,_),Bt(It.color,At.fill,_),It.intensity=on(.32,1,_),Ut.intensity=y*.75,Bt(yt.color,At.sky,_),Bt(yt.groundColor,At.ground,_),yt.intensity=on(.4,1.05,_),o.environmentIntensity=on(.3,.85,_),r.toneMappingExposure=on(1,1.02,_),Qn.intensity=2.2*E,re.intensity=13*E,Cn.emissiveIntensity=on(1.5,.7,_)*on(.15,1,E),Nt.forEach(D=>{D.material.opacity=D.userData.o*on(1,.55,_)*E}),Oe.emissiveIntensity=.95*on(.4,1,E)}let Ui=be+.02,_s=new Ei(new O(0,0,1),-Ui),Hn=new zn(Og,1.6,2,260),fa=new jo,Pl=new ve,kt=new O,jt=new O,dt={sizes:{},blocks:{},dirty:!1,last:""},vt={desk:{hero:{pose:{tx:-2.7,shift:0,az:-.09,pol:1.36,zoom:.93,dy:.45,open:0},zone:{x0:.045,y:.19,minY:.8}},cap1:{pose:{tx:-3.3,shift:0,az:-.2,pol:1.3,zoom:.86,dy:.35,open:.45},zone:{x0:.05,y:.3,minY:.8}},cap2:{pose:{tx:-2.4,shift:0,az:-.03,pol:1.25,zoom:.92,dy:.95,open:1},zone:{x0:.05,y:.26,minY:1.2}},cap3:{pose:{tx:-3.6,shift:0,az:.13,pol:1.32,zoom:.88,dy:.3,open:.3},zone:{x0:.05,y:.32,minY:.8}},show:{pose:{tx:0,shift:0,az:-.5,pol:1.27,zoom:1,dy:0,open:0}}},phone:{hero:{pose:{tx:0,shift:0,az:-.2,pol:1.29,zoom:.98,dy:1.3,open:0},zone:{y:.105,align:"center",minY:3.4}},cap1:{pose:{tx:0,shift:0,az:-.26,pol:1.25,zoom:.94,dy:.55,open:.45},zone:{y:.11,align:"center",minY:4.6}},cap2:{pose:{tx:0,shift:0,az:-.16,pol:1.22,zoom:.92,dy:.55,open:1},zone:{y:.11,align:"center",minY:5.4}},cap3:{pose:{tx:0,shift:0,az:-.08,pol:1.24,zoom:.94,dy:.55,open:.3},zone:{y:.11,align:"center",minY:4.6}},show:{pose:{tx:0,shift:0,az:-.5,pol:1.27,zoom:1,dy:0,open:0}}}},vn=[[0,"hero"],[.07,"hero"],[.17,"cap1"],[.3,"cap1"],[.4,"cap2"],[.53,"cap2"],[.63,"cap3"],[.74,"cap3"],[.82,"show"]],In={hero:[-1,-.5,.055,.1],cap1:[.14,.19,.3,.34],cap2:[.37,.42,.53,.57],cap3:[.6,.65,.74,.78]},qn=(_,y)=>{let E=In[_];return E?Math.min(jn((y-E[0])/(E[1]-E[0])),jn((E[3]-y)/(E[3]-E[2]))):0},Ki=["tx","shift","az","pol","zoom","dy"];function di(_){let y=q.phone?vt.phone:vt.desk,E=0;for(;E<vn.length-2&&_>vn[E+1][0];)E++;let[L,D]=vn[E],[G,V]=vn[E+1],j=bi(L,G,_),he=y[D].pose,ye=y[V].pose,we={};for(let Ye in he)we[Ye]=on(he[Ye],ye[Ye],j);return we}let fi=()=>ti+X.coverTop*.5+(q.phone?.1:.75),jh=(_,y)=>({az:_.az,pol:jn(_.pol+y*.08,.7,1.52),d:q.dist*_.zoom*(1+y*(q.phone?-.08:-.05)),ty:on(q.ty,Math.max(q.ty,fi()),y)+_.dy,shift:_.shift,tx:_.tx??0});function Nf(_,y,E,L,D,G,V=0){let j=-G*2*Math.tan(_.fov*Me/360)*_.aspect*_.getFilmWidth();Math.abs(_.filmOffset-j)>1e-5&&(_.filmOffset=j,_.updateProjectionMatrix()),_.position.set(V+Math.sin(y)*Math.sin(E)*L,D+Math.cos(E)*L,Math.cos(y)*Math.sin(E)*L),_.lookAt(V,D,0),_.updateMatrixWorld()}let Df=(_,y)=>(Pl.set(_*2-1,1-y*2),fa.setFromCamera(Pl,Hn),fa.ray.intersectPlane(_s,kt)?kt.clone():null);function Uf(){dt.dirty=!1;let _=i.clientWidth,y=i.clientHeight;if(!_||!y)return;let E=`${_}x${y}:${q.phone}:${q.dist.toFixed(3)}:${JSON.stringify(dt.sizes)}`;if(E===dt.last)return;dt.last=E;let L=q.phone?vt.phone:vt.desk;Hn.fov=a.fov,Hn.aspect=_/y,Hn.near=a.near,Hn.far=a.far,Hn.filmGauge=a.filmGauge,Hn.filmOffset=0,Hn.updateProjectionMatrix();for(let D in dt.sizes){let G=L[D],[V,j]=dt.sizes[D];if(!G?.zone||!V||!j)continue;let he=G.zone,ye=jh(G.pose,Ir(G.pose.open));Nf(Hn,ye.az,ye.pol,ye.d,ye.ty,ye.shift,ye.tx);let we=he.align==="center"?.5-V/_/2:he.x0,Ye=Df(we,he.y),Gt=Df(we+V/_,he.y);if(!Ye||!Gt)continue;let nn=(Gt.x-Ye.x)/V;Ye.y-j*nn<he.minY&&(nn=Math.max(nn*.55,(Ye.y-he.minY)/j));let Nn=V*nn,Ti=j*nn,Ai=he.align==="center"?(Ye.x+Gt.x)/2-Nn/2:Ye.x,Zi=Ye.y,Ji=dt.blocks[D]||(dt.blocks[D]={o:0,oT:0,corners:[],center:new O});Ji.corners=[[Ai,Zi],[Ai+Nn,Zi],[Ai+Nn,Zi-Ti],[Ai,Zi-Ti]].map(([as,Ma])=>new O(as,Ma,Ui)),Ji.center.set(Ai+Nn/2,Zi-Ti/2,Ui)}}let pa=new $s("#ffd9a8",0,30,.5,.9,1.4);o.add(pa,pa.target);let ma=new O(-6,5,Ui),Ff=new O,Of=_=>(jt.copy(_).project(a),[(jt.x*.5+.5)*i.clientWidth,(.5-jt.y*.5)*i.clientHeight]),Ll=[new O,new O,new O],$h="",Bf="";function Jg(_){let y=Ir(q.buildPose),E={},L=!1,D=null,G=0,V="",j=0;for(let he in dt.blocks){let ye=dt.blocks[he];ye.oT===0&&(j=Math.max(j,ye.o))}for(let he in dt.blocks){let ye=dt.blocks[he],we=ye.oT>ye.o&&j>.08?ye.o:ye.oT;ye.o!==ye.oT&&(ye.o=t?ye.oT:Li(ye.o,we,we<ye.o?10:6,_),Math.abs(ye.o-ye.oT)<.002&&(ye.o=ye.oT),L=!0);let Ye=ye.o*(1-y);Ye>G&&(G=Ye,D=ye);let Gt=Ye>.002&&ye.corners.length?ye.corners.map(Of):null;E[he]={o:Ye,quad:Gt},V+=he+Ye.toFixed(3)+(Gt?Gt.flat().map(nn=>nn.toFixed(1)).join(","):"")}if(V!==$h&&($h=V,e.onWords?.(E)),D&&Ff.copy(D.center),ma.lerp(Ff,t?1:1-Math.exp(-4*_)),pa.target.position.copy(ma),pa.position.set(ma.x+1.6,ma.y+6.2,ma.z+7),pa.intensity=G*(1-y)*on(70,18,bi(0,1,q.day)),e.onSpots){let he=uo(),ye=ti+X.h+X.crown*.5;Ll[0].set(-.35,ye+.02,-.4),Ll[1].set(he*.31,ye+.01,Rn*.2),Ll[2].set(he*.16,ti+X.h*.45,Rn/2+.05);let we=(dt.blocks.hero?.o??0)*(1-y)*(1-bi(0,.06,X.open))*(X.swap<1?0:1),Ye=Ll.map(Of),Gt=Ye.flat().map(nn=>nn.toFixed(1)).join(",")+we.toFixed(3);Gt!==Bf&&(Bf=Gt,e.onSpots(Ye,we))}return L}let q={w:(e.width??60)/10,wTarget:(e.width??60)/10,allOpen:!1,az:-.5,pol:1.27,azUser:0,polUser:0,vAz:0,scrollIn:t?1:0,intro:t?1:0,lift:0,dist:20,ty:2.25,visible:!1,last:0,raf:0,touched:!1,time:0,phone:!1,story:null,st:{tx:-2.7,shift:0,az:-.09,pol:1.36,zoom:.93,dy:.45},storyW:1,idle:!1,lastDraw:0,day:e.theme==="morning"?1:0,dayT:e.theme==="morning"?1:0,build:1,buildT:3,buildPose:0,released:!0},uo=()=>q.w-.02,Nl=!n,X={root:new Xt,stack:new Xt,cover:new Xt,open:0,hi:null,dent:0,dentV:0,dentT:0,dentX:0,dentZ:0,feel:"Medium",crown:Rf.Medium.crown,h:.7,hT:.7,top:0,look:null,lookName:null,label:"",groups:{},mix:{},key:null,swap:1,swapTo:null,coverTop:.7,builtW:0};b.add(X.root),X.root.add(X.stack,X.cover),X.root.position.y=ti;let zf=_=>{let y=new et(_.geometry,[x.top,x.side,x.under]);return y.castShadow=!0,y.receiveShadow=!0,y.customDepthMaterial=z,X.cover.add(y),y};X.body=new El({cs:4,seg:Nl?[40,12,92]:[26,8,56],groups:!0}),X.bodyMesh=zf(X.body),X.topBox=new El({cs:3,seg:Nl?[36,4,84]:[24,3,52],groups:!0}),X.topMesh=zf(X.topBox);let Qh=()=>{let _=new et(new fs(new Kh(1,1,.1),8,.01,3,!0),x.piping);return _.castShadow=!0,X.cover.add(_),_};X.pipeT=Qh(),X.pipeB=Qh(),X.pipeX=Qh();let rs=640,ga=260,Dl=document.createElement("canvas");Dl.width=rs,Dl.height=ga;let An=Dl.getContext("2d"),Ul=new xi(Dl);Ul.colorSpace=fn,Ul.anisotropy=ir,X.decal=new et(new Dt(1,1),new lt({map:Ul,transparent:!0,roughness:.75,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})),X.cover.add(X.decal);function jg(){let[_,y]=X.look.label;An.clearRect(0,0,rs,ga),An.fillStyle=_,Xg(An,6,6,rs-12,ga-12,16),An.fill(),An.strokeStyle=y,An.globalAlpha=.5,An.lineWidth=3,An.setLineDash([12,8]),Xg(An,22,22,rs-44,ga-44,9),An.stroke(),An.setLineDash([]),An.globalAlpha=1,An.fillStyle=y,An.textAlign="center",An.textBaseline="middle";let E="EASY COMFORT SLEEP SOLUTIONS",L=30,D=7,G=()=>(An.font=`600 ${L}px "Hanken Grotesk", system-ui, sans-serif`,[...E].reduce((we,Ye)=>we+An.measureText(Ye).width+D,-D)),V=G();if(V>rs-90){let we=(rs-90)/V;L*=we,D*=we,V=G()}let j=rs/2-V/2;An.textAlign="left";for(let we of E)An.fillText(we,j,80),j+=An.measureText(we).width+D;An.textAlign="center";let he=92;An.font=`400 ${he}px "Young Serif", Georgia, serif`;let ye=An.measureText(X.label).width;ye>rs-96&&(he*=(rs-96)/ye,An.font=`400 ${he}px "Young Serif", Georgia, serif`),An.fillText(X.label,rs/2,166),Ul.needsUpdate=!0}X.pillows=[-1,1].map(_=>{let y=new et(Yg(2.5,1.66,.62,-.25,_>0?91:37,Nl?44:28),x.pillow);return y.castShadow=!0,y.receiveShadow=!0,y.position.set(_*1.36,0,-Rn/2+1.06),y.rotation.set(-.07,_*.05,0),X.cover.add(y),y});let kf=()=>Math.min(LS,(X.h-X.top)*.26);function Fl(){let _=uo(),y=X.top,E=X.h,L=E-y,D=kf(),G=Math.min(.045,L*.07);if(X.body.fill(_,L,Rn,D,{crown:y?0:X.crown,bulge:G},[.92,.62,1]),X.bodyMesh.position.y=L/2,X.topMesh.visible=y>.001,y>.001){let j=Math.min(.09,y*.45);X.topBox.fill(_-.1,y+.03,Rn-.1,j,{crown:X.crown,bulge:.015},[.92,.62,1]),X.topMesh.position.y=L+y/2-.015,X.pipeX.position.y=E-j*.3}X.pipeT.position.y=L-D*.3,X.pipeB.position.y=D*.3,X.pipeX.visible=!!X.look?.topper,X.look?.topper==="euro"&&(X.pipeX.position.y=L-Math.min(.22,L*.24));let V=Math.min(.27,L*.5);X.decal.scale.set(V*rs/ga,V,1),X.decal.position.set(-_*.26,L*.5,Rn/2+G*Math.cos(0)*.9+.025),X.pillows.forEach(j=>{j.userData.y=E+.26+X.crown*.7,j.position.y=j.userData.y}),Al.uTopY.value=ti+E,Al.uRange.value=Math.min(.75,E*.75),l.constant=-(ti+E)}function eu(){let _=uo(),y=kf(),E=y*.3,L=(D,G,V,j)=>new fs(new Kh(D,G,V),Nl?260:140,j,7,!0);if([X.pipeT,X.pipeB].forEach(D=>{D.geometry.dispose(),D.geometry=L(_-E*2,Rn-E*2,Math.max(.05,y*.8),.034),D.scale.x=1}),X.pipeX.geometry.dispose(),X.look?.topper==="pillow"){let D=Math.min(.09,X.top*.45),G=D*.3;X.pipeX.geometry=L(_-.1-G*2,Rn-.1-G*2,Math.max(.05,D*.8),.03)}else X.pipeX.geometry=L(_+.05,Rn+.05,Math.max(.05,y),.03);X.pipeX.scale.x=1,X.builtW=_}let Gf=_=>_.userData.slabs.forEach(y=>{y.scale.x=(uo()-.06)/3});function $g(_,y){let E=_.inches/10,L=Math.min(.035,E*.3),D;if(_.zones){D=new Xt;let G=[.34,.32,.34],V=Rn-.08,j=-V/2;G.forEach((he,ye)=>{let we=new et($n(3,E,V*he-.06,L,{seg:[10,2,6]}).geometry,ye===1?x.zoneFirm:x.zoneSoft);we.castShadow=!0,we.receiveShadow=!0,we.position.z=j+V*he/2,j+=V*he,D.add(we)}),y.add(D)}else D=new et($n(3,E,Rn-.08,L,{seg:[10,2,16],shape:{sag:.008}}).geometry,x[_.mat]??x.foam25),D.castShadow=!0,D.receiveShadow=!0,y.add(D);return D.userData={h:E,hi:0,hiT:0},D}function Hf(_){if(X.groups[_.key])return X.groups[_.key];let y=new Xt;return y.visible=!1,X.stack.add(y),y.userData.slabs=[..._.layers].reverse().map(E=>$g(E,y)),y.userData.sum=y.userData.slabs.reduce((E,L)=>E+L.userData.h,0),y.userData.openH=0,Gf(y),X.groups[_.key]=y,X.mix[_.key]=0,y}let _a={},xa=new ds(new Uint8Array([255,255,255,255]),1,1,Si);xa.needsUpdate=!0;let fo={top:v,side:v,ns:.32,rTop:xa,rSide:xa},Vf=_=>{let y=Tl[_]??Tl.aura;return _a[_]||(_a[_]={top:Lf(u,y.top,y.rep[0]),side:Lf(u/2,y.side??y.top,y.rep[1])}),_a[_]};function tu(_){let y=Tl[_]??Tl.aura;X.look=y,Vf(_),x.top.map=_a[_].top,x.side.map=_a[_].side,x.top.normalMap=y.quilt?d:fo.top,x.side.normalMap=y.quilt?f:fo.side;let E=y.quilt?.62:fo.ns;x.top.normalScale.set(E,E),x.side.normalScale.set(E,E),x.top.roughnessMap=y.quilt?xa:fo.rTop,x.side.roughnessMap=y.quilt?xa:fo.rSide,x.top.sheen=x.side.sheen=y.dark?.16:.7,x.top.sheenColor.set(y.dark?"#a9b8e6":"#fff6ec"),x.side.sheenColor.copy(x.top.sheenColor),x.top.roughness=x.side.roughness=y.dark?.86:.92,x.piping.color.set(y.piping),x.under.color.set(y.under),X.top=y.topper==="pillow"?.2:0,jg(),Fl(),eu()}function nu(){let _=q.w,y=uo();ee.scale.x=oe.scale.x=_+.44,ne[0].position.x=-(_/2+.12),ne[1].position.x=_/2+.12,fe.forEach(E=>{E.position.x=E.userData.sx*(_/2+.1)}),Ve.forEach(E=>{E.scale.x=_+.1}),ke.scale.x=_+.78,b.contact.scale.x=(_+1.2)*1.55,H.position.set(-(_/2+1.55),0,-Rn/2+.55),_n.position.set(_/2+1.25,0,-Rn/2+.35),Ze.scale.set(_+7.6,1,Rn+5.6),k.scale.x=(_+3.2)/9.2,gt.position.x=(_-6)/2,Fl(),[X.pipeT,X.pipeB,X.pipeX].forEach(E=>{E.scale.x=y/(X.builtW||y)}),Object.values(X.groups).forEach(Gf)}let Qg=()=>X.swap<1?Math.sin(Me*X.swap)*.55:0,e0=.62,iu=()=>{let _=X.groups[X.key],y=_?_.userData.slabs.length:1,E=Math.min(.28,1.4/Math.max(1,y)),L=.3+y*E+.1,D=L+.66;return{st:E,cover:L,pillows:D,end:D+.15+.62}},xs=null,su=(_,y)=>_<=0?y:_<.72?y*(1-(_/.72)**2):-.03*Math.sin(Me*(_-.72)/.28);function Ol(){let _=X.open,y=q.build<1&&!!xs,E=q.build*q.buildT;X.stack.visible=_>.002||y,Object.entries(X.groups).forEach(([G,V])=>{let j=X.mix[G];V.visible=X.stack.visible&&j>.002;let he=V.userData.slabs,ye=he.length,we=Math.max(.05,X.h-.07)/V.userData.sum,Ye=Math.min(.05,.26/Math.max(1,ye-1)),Gt=.035,nn=0;he.forEach((Nn,Ti)=>{let Ai=Nn.userData.h,Zi=(ye-1-Ti)*Ye,Ji=Ir(jn((_-Zi)/(1-Zi*.9)));if(Nn.position.y=on(Gt+Ai*we/2,nn+Ai*Ef/2,Ji),Nn.scale.y=on(we,Ef,Ji),Gt+=Ai*we,nn+=Ai*Ef+Xh,y&&G===X.key){let rp=(E-(.3+Ti*xs.st))/e0;Nn.visible=rp>0,Nn.position.y+=su(rp,2.6)}else Nn.visible=!0;if(!V.visible)return;let as=G===X.key?1:-1,Ma=Fg(jn(j*1.5-(ye-1-Ti)*.1));Nn.position.x=as*(1-Ma)*8;let sp=Li(Nn.userData.hi,Nn.userData.hiT,14,.016);Nn.userData.hi=sp,Nn.position.z=sp*.5}),V.userData.openH=nn-Xh});let L=Ir(jn(_*1.25)),D=y?(E-xs.cover)/.72:1;X.cover.visible=D>0,X.cover.position.y=on(0,X.coverTop,L)+Qg()+(D<1?su(D,3.2):0),X.pillows.forEach((G,V)=>{let j=y?(E-xs.pillows-V*.15)/.6:1;G.visible=j>0,G.position.y=G.userData.y+(j<1?su(j,1.8):0)}),X.cover.rotation.x=X.swap<1?-Math.sin(Me*X.swap)*.035:0}let Wf=0,Xf=0;function Bl(){let _=i.clientWidth||1,y=i.clientHeight||1;if(_===Wf&&y===Xf)return;Wf=_,Xf=y,r.setSize(_,y,!1),a.aspect=_/y,a.updateProjectionMatrix();let E=Math.tan(a.fov*Me/360),L=_>860,D=L&&_<1240,G=(L?D?23.5:19.5:11.5)/(2*E*a.aspect),V=(L?11.6:7.6)/(2*E);q.dist=Math.max(G,V),q.phone=!L,q.ty=L?2.85:1.75,dt.dirty=!0,Ln()}let qf={desk:{tx:0,shift:0,az:-.6,pol:1.15,zoom:.84,dy:.15},phone:{tx:0,shift:0,az:-.55,pol:1.17,zoom:.82,dy:.35}},Or={};function ru(){let _=!s||q.touched?0:Math.sin(q.time*.35)*.07,y=!q.phone&&e.frame||{},E={az:q.az*(1-q.lift*.55),pol:q.pol+q.lift*.15,d:q.dist*(y.zoom??1)*(1+q.lift*(q.phone?-.08:-.05)),ty:on(q.ty,Math.max(q.ty,fi()),q.lift)+(y.dy??0),shift:0,tx:y.tx??0},L=jh(q.st,q.lift),D=jh(q.phone?qf.phone:qf.desk,0),G=q.storyW,V=Ir(q.buildPose);for(let ye of["az","pol","d","ty","shift","tx"])Or[ye]=on(on(E[ye],L[ye],G),D[ye],V);let j=Or.az+q.azUser+_+(1-q.scrollIn)*.22,he=jn(Or.pol+q.polUser+(1-q.scrollIn)*.07,.7,1.52);Nf(a,j,he,Or.d*(1+(1-q.scrollIn)*.1),Or.ty,Or.shift,Or.tx)}let Yf=new jo,Kf=new ve,ya=new O;function Zf(_){let y=i.getBoundingClientRect();return Kf.set((_.clientX-y.left)/y.width*2-1,-((_.clientY-y.top)/y.height)*2+1),Yf.setFromCamera(Kf,a),!Yf.ray.intersectPlane(l,ya)||Math.abs(ya.x)>uo()/2||Math.abs(ya.z)>Rn/2||X.open>.05||X.swap<1?null:{x:ya.x,z:ya.z}}let ii=null,va=!1,Jf=_=>jn(_,-1-q.az,(q.day>=.5?.16:.42)-q.az),jf=()=>{va&&(X.dentT=0,va=!1)},$f=_=>{X.dentX=_.x,X.dentZ=_.z};i.addEventListener("pointerdown",_=>{if(q.story!=null||q.buildPose>0)return;q.touched=!0,ii={x:_.clientX,y:_.clientY,moved:!1,type:_.pointerType};let y=Zf(_);y&&(va=!0,$f(y),X.dentT=1,X.dentV-=.4,Ln()),i.setPointerCapture(_.pointerId)}),i.addEventListener("pointermove",_=>{if(ii){let E=_.clientX-ii.x,L=_.clientY-ii.y;!ii.moved&&Math.hypot(E,L)>6&&(ii.moved=!0,jf(),i.classList.add("is-dragging")),ii.moved&&(q.vAz=-E*.0045*60,q.azUser=Jf(q.azUser-E*.0045),ii.type==="mouse"&&(q.polUser=jn(q.polUser-L*.004,-.5,.3)),ii.x=_.clientX,ii.y=_.clientY,Ln());return}if(_.pointerType!=="mouse"||q.story!=null||q.buildPose>0)return;let y=Zf(_);y?($f(y),X.dentT!==1&&(X.dentT=.4),Ln()):X.dentT===.4&&(X.dentT=0,Ln())});let Qf=()=>{ii&&(ii.type!=="mouse"&&!ii.moved&&va?(setTimeout(()=>{X.dentT=0,Ln()},240),va=!1):jf(),ii=null,i.classList.remove("is-dragging"),Ln())};i.addEventListener("pointerup",Qf),i.addEventListener("pointercancel",Qf),i.addEventListener("pointerleave",()=>{X.dentT===.4&&(X.dentT=0),Ln()});function Ln(){q.idle=!1,!q.raf&&q.visible&&!document.hidden&&(q.last=performance.now(),q.raf=requestAnimationFrame(au))}let ou=!1;function au(){if(q.raf=0,!q.visible||document.hidden)return;let _=performance.now();if(q.idle&&_-q.lastDraw<30){q.raf=requestAnimationFrame(au);return}let y=jn((_-q.last)/1e3,0,.05);q.last=_,q.time+=y;let E=s&&!q.touched;s&&cn(q.time),q.intro<1&&q.released&&(q.intro=Math.min(1,q.intro+y/2.6),q.scrollIn=Fg(q.intro),E=!0),q.w!==q.wTarget?(q.w=Math.abs(q.w-q.wTarget)<.003?q.wTarget:Li(q.w,q.wTarget,7,y),nu(),E=!0,ou=!0):ou&&(ou=!1,eu(),nu()),X.swap<1&&(X.swap=Math.min(1,X.swap+y/(t?.001:.62)),X.swap>=.5&&X.swapTo&&(tu(X.swapTo),X.swapTo=null),E=!0),X.h!==X.hT&&(X.h=Math.abs(X.h-X.hT)<.002?X.hT:Li(X.h,X.hT,6,y),Fl(),E=!0,X.h===X.hT&&eu()),q.day!==q.dayT&&(q.day=t?q.dayT:q.dayT>q.day?Math.min(q.dayT,q.day+y/1.5):Math.max(q.dayT,q.day-y/1.5),E=!0,Pn()),q.build<1&&(q.build=Math.min(1,q.build+y/q.buildT),E=!0,e.onBuild?.(q.build),q.build>=1&&e.onBuilt?.()),q.released&&q.buildPose>0&&(q.buildPose=Math.max(0,q.buildPose-y/2),E=!0,Pn(),q.buildPose===0&&e.onSettled?.());let L=q.story!=null?di(q.story):null;if(L){for(let we of Ki)Math.abs(q.st[we]-L[we])>1e-4?(q.st[we]=t?L[we]:Li(q.st[we],L[we],6,y),E=!0):q.st[we]=L[we];Math.abs(q.azUser)+Math.abs(q.polUser)>1e-4&&(q.azUser=Li(q.azUser,0,4,y),q.polUser=Li(q.polUser,0,4,y),E=!0)}let D=L?1:0;q.storyW!==D&&(q.storyW=t||Math.abs(q.storyW-D)<.002?D:Li(q.storyW,D,5,y),E=!0);for(let we in dt.blocks)dt.blocks[we].oT=L?qn(we,q.story):0;if(dt.dirty&&Uf(),L&&L.open!=null)Math.abs(X.open-L.open)>8e-4?(X.open=t?L.open:Li(X.open,L.open,7,y),E=!0):X.open=L.open;else{let we=q.allOpen||X.hi!==null?1:0;if(X.open!==we){let Ye=y/(t?.001:1.15);X.open=we>X.open?Math.min(1,X.open+Ye):Math.max(0,X.open-Ye*1.2),E=!0}}Object.keys(X.mix).forEach(we=>{let Ye=we===X.key?1:0;X.mix[we]!==Ye&&(E=!0,X.open<.02||t?X.mix[we]=Ye:X.open>.7&&(X.mix[we]=Ye?Math.min(1,X.mix[we]+y/.75):Math.max(0,X.mix[we]-y/.5)))});let G=Rf[X.feel];Math.abs(X.crown-G.crown)>6e-4&&(X.crown=Li(X.crown,G.crown,5,y),Fl(),E=!0);for(let we=0;we<3;we++){let Ye=y/3,Gt=(X.dentT*G.depth-X.dent)*G.k-X.dentV*G.c;X.dentV+=Gt*Ye,X.dent+=X.dentV*Ye}(Math.abs(X.dent-X.dentT*G.depth)>8e-4||Math.abs(X.dentV)>.002)&&(E=!0),Al.uDentA.value.set(X.dentX,X.dentZ,Math.max(0,X.dent),G.radius),Object.values(X.groups).forEach(we=>we.userData.slabs.forEach(Ye=>{Math.abs(Ye.userData.hi-Ye.userData.hiT)>.004&&(E=!0)})),Ol();let V=X.groups[X.key],j=(V?V.userData.openH:X.h)+Xh*1.4;Math.abs(X.coverTop-j)>.002&&(X.coverTop=Li(X.coverTop,j,6,y),E=!0,Ol());let he=q.lift,ye=Ir(X.open);q.lift=Li(q.lift,ye,5,y),Math.abs(q.lift-ye)<5e-4&&(q.lift=ye),q.lift!==he&&(E=!0,e.onLift?.(q.lift)),!ii&&Math.abs(q.vAz)>.002?(q.azUser=Jf(q.azUser+q.vAz*y),q.vAz*=Math.exp(-3.5*y),E=!0):ii||(q.vAz=0),ru(),Tn.visible=a.position.y<$t-.25,Jg(y)&&(E=!0),r.render(o,a),q.lastDraw=_,q.idle=!E,(E||s)&&q.visible&&(q.raf=requestAnimationFrame(au))}let lu=[];{let _=qg(n),y=(D,G)=>lu.push(D.then(V=>{V&&(G(V),Ln())}).catch(()=>{})),E=3.937,L=Me/180;_&&(y(_.oak,D=>{let G=1.83*E;Zn(x.oak,D,.1,1.14,Me/2,{color:"#ffffff",rough:.82,ns:.9});let V=x.oak.clone();Zn(V,D,.09,.13,0,{ns:.9}),fe.forEach(he=>{he.material=V}),Zn(x.plank,D,.14,.95,Me/2,{color:"#ffffff",rough:.8,ns:.9});let j=x.oak.clone();Zn(j,D,1/G,1/G,0,{ns:.9}),ui.forEach(he=>{he.material=j}),lr&&Zn(lr.material,D,.03,$t/G,0,{color:"#7a5639",rough:.75})}),y(_.floor,D=>{let G=1.7*E;Zn(ae.material,D,U/G,Ae/G,0,{color:"#ffffff",rough:.8,ns:.8})}),y(_.plaster,D=>{let G=2*E;Zn(Le,D,(Se+50)/G,40/G,0,{keepMap:!0,ns:.55}),Zn(Oe,D,Zt.A*2/G,is/G,0,{keepMap:!0,ns:.55}),Zn(bt,D,(an+55)/G,$t/G,0,{keepMap:!0,ns:.7})}),y(_.rug,D=>{let G=.27*E;Zn(Ze.material,D,13.6/G,13.4/G,0,{keepMap:!0,ns:1.2})}),y(_.jacquard,D=>{let G=.28*E;Object.assign(fo,{top:ao(D.normalMap,.92/G,.92/G),side:ao(D.normalMap,.62/G,.62/G),ns:.55,rTop:ao(D.roughnessMap,.92/G,.92/G),rSide:ao(D.roughnessMap,.62/G,.62/G)}),X.lookName&&tu(X.lookName)}),y(_.linen,D=>{let G=.27*E;Zn(x.pillow,D,1/G,1/G,0,{keepMap:!0,ns:.9})}),y(_.env,D=>{let G=new Rr(r);h=G.fromEquirectangular(D).texture,G.dispose(),D.dispose(),tn=null,Pn()}),y(_.viewM,D=>{Wi.forEach(V=>{V.visible=!1});let G=Ug(D,130,Math.atan2(wn.x,-wn.z),Me,-48*L,-25.2*L,50.4*L,.8,1.5);G.position.set(Yt.x,0,Yt.z),gt.add(G)}),y(_.viewN,D=>{ho.forEach(V=>{V.visible=!1}),ho.stars.visible=!1;let G=Ug(D,140,.12,Me,-50*L,-21.6*L,54*L,.55,-10,"#a39bb8");G.position.set(0,0,14),nt.add(G)}),y(_.plantTable,D=>{Di.visible=dn.visible=!1,un.push({o:Yh(D,mt,-.36,2.09,.3,1.5,.5),axis:"z",amp:.008,speed:.7,ph:0})}),y(_.plantFloor,D=>{xe.visible=_e.visible=!1,un.push({o:Yh(D,Mt,.95,ht,-.9,4.3,.4),axis:"z",amp:.01,speed:.5,ph:1.3})}),y(_.succulent,D=>{Yh(D,Re,.5,1.91,.36,.78,.3)}))}try{await Promise.all([document.fonts.load('200px "Young Serif"'),document.fonts.load('600 30px "Hanken Grotesk"'),document.fonts.load('400 30px "Hanken Grotesk"')])}catch{}let os=e.model;Hf(os),X.key=os.key,X.mix[os.key]=1,X.feel=os.feel,X.crown=Rf[os.feel].crown,X.h=X.hT=os.inches/10,X.label=os.label,X.lookName=os.look,tu(os.look),nu(),Ol(),X.coverTop=X.groups[os.key].userData.openH+Xh*1.4,e.build&&!t?(xs=iu(),q.build=0,q.buildT=xs.end,q.buildPose=1,q.released=!1,q.intro=1,q.scrollIn=1):e.intro&&!t?(q.intro=0,q.scrollIn=0,q.released=!1):(q.intro=1,q.scrollIn=1),e.story!=null?q.story=e.story:q.storyW=0,Bl(),Ol(),Pn();let ep=window.requestIdleCallback||(_=>setTimeout(_,120)),t0=Object.keys(Tl).filter(_=>_!==os.look),tp=()=>{let _=t0.shift();if(!_)return;let y=Vf(_);r.initTexture(y.top),r.initTexture(y.side),ep(tp)};setTimeout(()=>ep(tp),1500),addEventListener("resize",Bl),window.ResizeObserver&&new ResizeObserver(Bl).observe(i);let np=()=>{q.raf&&cancelAnimationFrame(q.raf),q.raf=0};new IntersectionObserver(([_])=>{q.visible=_.isIntersecting,q.visible?Ln():np()}).observe(i),document.addEventListener("visibilitychange",()=>{document.hidden?np():Ln()}),q.visible=!0,ru(),lu.length&&await Promise.race([Promise.all(lu),new Promise(_=>setTimeout(_,n?2500:4e3))]);{let _=[Rt,nt,mt,Mt,Re,Ze].filter(y=>!y.visible);_.forEach(y=>{y.visible=!0});try{r.compileAsync?await r.compileAsync(o,a):r.compile(o,a)}catch{}r.render(o,a),_.forEach(y=>{y.visible=!1})}r.render(o,a);let ip=i.getBoundingClientRect();return q.visible=ip.top<innerHeight&&ip.bottom>0,e.onReady?.(),Ln(),{setModel(_){Hf(_);let y=_.look!==X.lookName||_.label!==X.label;X.key=_.key,X.feel=_.feel,X.hT=_.inches/10,y&&(X.lookName=_.look,X.label=_.label,X.swapTo=_.look,X.swap=0),Object.values(X.groups).forEach(E=>E.userData.slabs.forEach(L=>{L.userData.hiT=0})),X.hi=null,q.build<1&&(xs=iu(),q.buildT=xs.end),Ln()},setOpen(_){q.allOpen=_,Ln()},release(){q.released||(q.released=!0,q.build=1,Ln())},replay(){if(q.allOpen=!1,X.hi=null,t){Ln();return}X.open=0,q.lift=0,q.azUser=0,q.polUser=0,q.vAz=0,xs=iu(),q.build=0,q.buildT=xs.end,q.buildPose=1,q.released=!1,Pn(),Ln()},setStory(_,y){if(q.story=_,_!=null&&y){let E=di(_);for(let L of Ki)q.st[L]=E[L];X.open=E.open,q.storyW=1}Ln()},setBlockSizes(_){dt.sizes=_,dt.last="",Uf();for(let y in dt.blocks)dt.blocks[y].o=dt.blocks[y].oT=q.story!=null?qn(y,q.story):0;$h="",Ln()},setPalette({n:_,m:y}={}){let E=new qe("#ffffff");_&&(bt.color.set(_),qi.color.set(_).multiplyScalar(.72)),y&&(Le.color.set(y),Oe.color.set(y).lerp(E,.38),Ie.color.set(y).lerp(E,.18)),Ln()},setTheme(_,y){q.dayT=_==="morning"?1:0,(y||t)&&(q.day=q.dayT,Pn()),Ln()},highlight(_){X.hi=_;let y=X.groups[X.key];y&&[...y.userData.slabs].reverse().forEach((E,L)=>{E.userData.hiT=L===_?1:0}),Ln()},setWidth(_){q.wTarget=_/10,Ln()},resize:Bl,debug:{S:q,mat:X,renderer:r,words:dt,render:()=>{ru(),r.render(o,a)}}}}async function VS(i,e){let t=Math.min(innerWidth,innerHeight)<600,n;try{n=new Sl({canvas:i,antialias:!0,alpha:!0,powerPreference:"default"})}catch(F){return e.onFail?.(F),null}n.setPixelRatio(Math.min(devicePixelRatio||1,t?1.75:1.5)),n.toneMapping=ea,n.shadowMap.enabled=!0,n.shadowMap.type=Ar,ir=Math.min(12,n.capabilities.getMaxAnisotropy());let{sideQ:s,pore:r,weave:o,egg:a,chips:l,oakRail:c,oakPlank:h}=await Kg(t),u=new _r,d=new zn(28,1.8,1,160);{let F=new _r,J=new Rr(n);F.background=new qe("#20294a");let re=(_e,xe,Ge,pt,It,Ut,yt)=>{let cn=new et(new Dt(Ge,pt),new xn({color:new qe(_e).multiplyScalar(xe),side:Qt}));cn.position.set(It,Ut,yt),cn.lookAt(0,0,0),F.add(cn)};re("#ffe2c0",4,14,10,-10,9,8),re("#b9cbff",3,10,14,12,7,-6),re("#ffffff",1.4,30,10,0,16,0),u.environment=J.fromScene(F,.05).texture,J.dispose()}let f=7.8,p=5,v=1.15,m=1.35,g=72,M=8,T=-f/2,S=Array.from({length:g+1},(F,J)=>T+f*J/g),C=Array.from({length:M+1},(F,J)=>-p/2+p*J/M),R=(F,J,re)=>Math.exp(-((F-J)**2)/(2*re*re)),x=F=>70+(F-T)/f*860,b=F=>{let J=x(F);return .26*R(J,178,66)+.74*R(J,330,52)+R(J,548,56)+.42*R(J,652,58)+.22*R(J,770,48)+.3*R(J,862,22)},z=F=>.6+.4*Math.exp(-((F/1.15)**2)),N={cover:1.15,memory:1,foam22:.86,pu:.8,profile:.78,foam25:.66,foam30:.5,hd:.36,rebond:.14},B=(F,J)=>{if(F!=="zones")return N[F]??.6;let re=(J-T)/f;return re<1/3?.72:re<2/3?.3:.66},W={Soft:.27,Medium:.2,Hard:.14},Z={su:.7*(3.6/3.9)*1290/3072,sv:.7,n:[.56,.07],m:[.5,.12]},P=(F,J,re)=>{let _e=document.createElement("canvas");_e.width=F,_e.height=J,re(_e.getContext("2d"),F,J);let xe=new xi(_e);return xe.colorSpace=fn,xe.anisotropy=ir,xe},Y=new xi(Zg());Y.colorSpace=fn;let K=(F,J={})=>new lt({color:F,roughness:.95,normalMap:r,normalScale:new ve(.7,.7),vertexColors:!0,...J}),ee=o.clone();ee.repeat.set(10,7),ee.needsUpdate=!0;let oe={cover:new mn({color:"#f5f3ee",roughness:.9,sheen:.8,sheenRoughness:.6,sheenColor:new qe("#ffffff"),normalMap:s,normalScale:new ve(.5,.5),vertexColors:!0}),foam22:K("#f4f2ea"),foam25:K("#efe7d3"),foam30:K("#e4d8bb"),hd:K("#e3eaf1"),memory:K("#e8bf78"),pu:K("#e2efe4"),profile:K("#f3f1e9",{normalMap:a,normalScale:new ve(1.2,1.2)}),rebond:K("#ffffff",{map:l}),zoneSoft:K("#f4f1e7"),zoneFirm:K("#cfb98a"),oak:new lt({map:c,roughness:.5,color:new qe(1.45,1.38,1.3)}),plank:new lt({map:h,roughness:.5,color:new qe(1.1,1.04,.98)}),pillow:new mn({color:"#ebe8e1",roughness:1,sheen:.35,sheenRoughness:.8,sheenColor:new qe("#ffffff"),normalMap:r,normalScale:new ve(.2,.2)}),sheet:new mn({color:"#ebe7de",roughness:.92,sheen:.7,sheenRoughness:.6,sheenColor:new qe("#ffffff"),normalMap:ee,normalScale:new ve(.18,.18),side:Qt}),duvet:new mn({color:"#2d3558",roughness:.96,sheen:.55,sheenRoughness:.55,sheenColor:new qe("#8592c8"),normalMap:ee,normalScale:new ve(.28,.28),side:Qt}),skin:new lt({color:"#c79a7d",roughness:.62}),skinDark:new lt({color:"#a97c62",roughness:.7}),hair:new mn({color:"#33231a",roughness:.72,sheen:.45,sheenRoughness:.45,sheenColor:new qe("#8a6a52"),normalMap:(()=>{let J=Pr(256,180,4,3),re=Pr(256,70,3,9),_e=new Float32Array(256*256);for(let xe=0;xe<_e.length;xe++)_e[xe]=J[xe]*.65+re[xe]*.35;return Jh(Zh(_e,256,7),256,!1)})(),normalScale:new ve(.35,.35)}),dark:new lt({color:"#241d1a",roughness:.45}),brass:new lt({color:"#b8925a",roughness:.3,metalness:.85}),shade:new lt({color:"#f1e2c6",emissive:new qe("#ffad5c"),emissiveIntensity:1.3,roughness:.9,side:Qt}),frame:new lt({color:"#141824",roughness:.38,metalness:.4})},ne=-p/2-1.15,le=.9,fe=4.5,Be=2.4,Ve=6.3,ie=fe-le,Ce=Ve-Be,ze=(le+fe)/2,Qe=(Be+Ve)/2,ke=.42,be=ne-ke,Tt=(()=>{let F=new zi;F.moveTo(-17,-8),F.lineTo(17,-8),F.lineTo(17,8),F.lineTo(-17,8),F.lineTo(-17,-8);let J=new zi;J.moveTo(le-.5,Be-5.6),J.lineTo(le-.5,Ve-5.6),J.lineTo(fe-.5,Ve-5.6),J.lineTo(fe-.5,Be-5.6),J.lineTo(le-.5,Be-5.6),F.holes.push(J);let re=new qo(F,4),_e=re.attributes.position,xe=re.attributes.uv;for(let Ge=0;Ge<_e.count;Ge++)xe.setXY(Ge,(_e.getX(Ge)+17)/34,(_e.getY(Ge)+8)/16);return re})(),rt=new et(Tt,new lt({color:"#1b2343",roughness:.95,alphaMap:kg(512,.26,.5),transparent:!0}));rt.position.set(.5,5.6,ne),rt.receiveShadow=!0,u.add(rt);let Nt=new lt({color:"#1b2343",roughness:.95,side:Qt});[[ie,ke,ze,Ve,-Me/2,"x"],[ie,ke,ze,Be,Me/2,"x"],[ke,Ce,le,Qe,Me/2,"y"],[ke,Ce,fe,Qe,-Me/2,"y"]].forEach(([F,J,re,_e,xe,Ge])=>{let pt=new et(new Dt(F,J),Nt);pt.position.set(re,_e,ne-ke/2),pt.rotation[Ge]=xe,pt.receiveShadow=!0,u.add(pt)});let Et=h.clone();Et.wrapS=Et.wrapT=Wn,Et.repeat.set(4.5,34),Et.needsUpdate=!0;let pe=new et(new Dt(34,24),new lt({map:Et,color:"#4c3c34",roughness:.42,alphaMap:kg(512,.2,.5),transparent:!0}));pe.rotation.x=-Me/2,pe.position.set(.5,0,2.5),pe.receiveShadow=!0,u.add(pe);let Ue=P(256,280,(F,J,re)=>{let _e=gn(8),xe=F.createLinearGradient(0,0,0,re);xe.addColorStop(0,"#060a1d"),xe.addColorStop(.55,"#15214b"),xe.addColorStop(1,"#2d4174"),F.fillStyle=xe,F.fillRect(0,0,J,re);for(let yt=0;yt<90;yt++)F.fillStyle=`rgba(235,240,255,${(.15+_e()*.5).toFixed(2)})`,F.fillRect(_e()*J,_e()*re*.7,1.2,1.2);let Ge=J*.64,pt=re*.24,It=J*.08,Ut=F.createRadialGradient(Ge,pt,It,Ge,pt,It*6);Ut.addColorStop(0,"rgba(190,208,255,.38)"),Ut.addColorStop(1,"rgba(190,208,255,0)"),F.fillStyle=Ut,F.fillRect(0,0,J,re),F.fillStyle="#fbf8ea",F.beginPath(),F.arc(Ge,pt,It,0,Me*2),F.fill(),F.fillStyle="rgba(15,22,52,.9)",F.beginPath(),F.moveTo(0,re);for(let yt=0;yt<=J;yt+=4)F.lineTo(yt,re*(.86+.03*Math.sin(yt*.05)+.015*Math.sin(yt*.17)));F.lineTo(J,re),F.fill()}),de=P(256,280,(F,J,re)=>{let _e=F.createLinearGradient(0,0,0,re);_e.addColorStop(0,"#7db1e2"),_e.addColorStop(.5,"#c9def0"),_e.addColorStop(.85,"#ffd9ab"),_e.addColorStop(1,"#ffc88f"),F.fillStyle=_e,F.fillRect(0,0,J,re);let xe=J*.3,Ge=re*.74,pt=J*.07,It=F.createRadialGradient(xe,Ge,pt*.5,xe,Ge,pt*8);It.addColorStop(0,"rgba(255,242,218,.95)"),It.addColorStop(.25,"rgba(255,214,160,.4)"),It.addColorStop(1,"rgba(255,214,160,0)"),F.fillStyle=It,F.fillRect(0,0,J,re),F.fillStyle="#fffbf2",F.beginPath(),F.arc(xe,Ge,pt,0,Me*2),F.fill(),F.fillStyle="rgba(122,150,128,.85)",F.beginPath(),F.moveTo(0,re);for(let Ut=0;Ut<=J;Ut+=4)F.lineTo(Ut,re*(.86+.03*Math.sin(Ut*.05)+.015*Math.sin(Ut*.17)));F.lineTo(J,re),F.fill()}),We=new et(new Dt(ie,Ce),new xn({map:Ue,toneMapped:!1})),De=new et(new Dt(ie,Ce),new xn({map:de,toneMapped:!1,transparent:!0,opacity:0,depthWrite:!1}));We.position.set(ze,Qe,be+.01),De.position.set(ze,Qe,be+.015),De.renderOrder=1,u.add(We,De);let ut=new et(new Vo(.15,32),new xn({color:"#f4f1e4",toneMapped:!1,transparent:!0}));ut.position.set(le+ie*.7,Ve-Ce*.2,be+.02),ut.visible=!1,ut.renderOrder=2,u.add(ut);let tt=new vr(new Xs({map:Y,color:"#b8c6ff",transparent:!0,opacity:.4,blending:Ii,depthWrite:!1,toneMapped:!1}));tt.scale.set(1.5,1.5,1),tt.position.copy(ut.position),tt.visible=!1,tt.renderOrder=2,u.add(tt);let Rt=P(256,280,(F,J,re)=>{let _e=gn(31);for(let xe=0;xe<70;xe++){F.fillStyle=`rgba(235,240,255,${(.2+_e()*.6).toFixed(2)})`;let Ge=_e()<.1?1.8:1.1;F.fillRect(_e()*J,_e()*re*.5,Ge,Ge)}}),nt=new et(new Dt(ie,Ce),new xn({map:Rt,transparent:!0,blending:Ii,depthWrite:!1,toneMapped:!1}));nt.position.set(ze,Qe,be+.018),nt.visible=!1,nt.renderOrder=2,u.add(nt);let gt=P(128,128,(F,J,re)=>{let _e=F.createLinearGradient(0,re,J,0);_e.addColorStop(0,"rgba(255,255,255,0)"),_e.addColorStop(.42,"rgba(255,255,255,0)"),_e.addColorStop(.5,"rgba(255,255,255,.55)"),_e.addColorStop(.56,"rgba(255,255,255,.1)"),_e.addColorStop(.64,"rgba(255,255,255,.3)"),_e.addColorStop(.7,"rgba(255,255,255,0)"),F.fillStyle=_e,F.fillRect(0,0,J,re)}),H=new et(new Dt(ie,Ce),new xn({map:gt,color:"#c9d4ff",transparent:!0,opacity:.07,blending:Ii,depthWrite:!1,toneMapped:!1}));H.position.set(ze,Qe,be+.1),H.renderOrder=3,u.add(H);let _n=new et($n(ie+.5,.1,ke+.24,.02,{seg:[1,1,1]}).geometry,oe.plank);_n.position.set(ze,Be-.05,ne-ke/2+.12),_n.castShadow=_n.receiveShadow=!0,u.add(_n);let mt=(F,J,re,_e,xe=.12)=>{let Ge=new et(new ai(F,J,xe),oe.frame);Ge.position.set(re,_e,be+xe/2+.02),Ge.castShadow=!0,Ge.receiveShadow=!0,u.add(Ge)},Mt=.13;mt(ie+Mt*2,Mt,ze,Ve+Mt/2),mt(ie+Mt*2,Mt,ze,Be-Mt/2),mt(Mt,Ce,le-Mt/2,Qe),mt(Mt,Ce,fe+Mt/2,Qe),mt(.06,Ce,ze,Qe,.08),mt(ie,.05,ze,Be+Ce*.55,.08);let Re=new lt({color:"#d4d8e8",roughness:.92,transparent:!0,opacity:.55,side:Qt,depthWrite:!1,emissive:new qe("#3d4a7a"),emissiveIntensity:.4});{let F=new Dt(1.5,Ce+1.6,26,6),J=F.attributes.position;for(let _e=0;_e<J.count;_e++)J.setZ(_e,Math.sin((J.getX(_e)/1.5+.5)*Me*6)*.08);F.computeVertexNormals();let re=new et(F,Re);re.position.set(fe+.55,Qe+.3,ne+.3),re.renderOrder=3,u.add(re)}let un=P(64,256,(F,J,re)=>{let _e=F.createLinearGradient(0,0,0,re);_e.addColorStop(0,"rgba(255,255,255,1)"),_e.addColorStop(.6,"rgba(255,255,255,.35)"),_e.addColorStop(1,"rgba(255,255,255,0)"),F.fillStyle=_e,F.fillRect(0,0,J,re),F.globalCompositeOperation="destination-in";let xe=F.createLinearGradient(0,0,J,0);xe.addColorStop(0,"rgba(0,0,0,0)"),xe.addColorStop(.25,"#000"),xe.addColorStop(.75,"#000"),xe.addColorStop(1,"rgba(0,0,0,0)"),F.fillStyle=xe,F.fillRect(0,0,J,re)}),st=new rn,ft=[[le,Ve-.1,ne+.04],[fe,Ve-.1,ne+.04],[le-1.6,1.4,2.4],[fe-1.6,1.4,2.4]];st.setAttribute("position",new Ft(new Float32Array(ft.flat()),3)),st.setAttribute("uv",new Ft(new Float32Array([0,1,1,1,0,0,1,0]),2)),st.setIndex([0,2,1,1,2,3]);let I=new et(st,new xn({map:un,color:"#9fb4ff",transparent:!0,opacity:.16,blending:Ii,depthWrite:!1,side:Qt,toneMapped:!1}));I.renderOrder=4,I.frustumCulled=!1,u.add(I);let w=t?50:110,te=new Float32Array(w*3),Te=new Float32Array(w),ge=gn(5);for(let F=0;F<w;F++){let J=ge(),re=ge(),_e=(It,Ut,yt)=>It.map((cn,Pt)=>cn+(Ut[Pt]-cn)*yt),xe=_e(ft[0],ft[1],re),Ge=_e(ft[2],ft[3],re),pt=_e(xe,Ge,J);te.set([pt[0],pt[1],pt[2]+(ge()-.5)*.8],F*3),Te[F]=ge()*50}let Se=new rn;Se.setAttribute("position",new Ft(te,3)),Se.setAttribute("phase",new Ft(Te,1));let Pe=new ki({uniforms:{uTime:{value:0},uPx:{value:n.getPixelRatio()},uCol:{value:new qe(.85,.9,1)},uA:{value:.6}},vertexShader:`attribute float phase; uniform float uTime, uPx; varying float vA;
      void main(){ vec3 p = position + vec3(sin(uTime*.21 + phase)*.16, sin(uTime*.13 + phase*1.7)*.22, cos(uTime*.17 + phase*.9)*.16);
        vA = .35 + .65 * (.5 + .5 * sin(uTime * (.9 + fract(phase) * 1.8) + phase * 3.1));
        vec4 mv = modelViewMatrix * vec4(p, 1.); gl_PointSize = uPx * (1.1 + fract(phase * 7.) * 1.6) * (40. / -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 uCol; uniform float uA; varying float vA; void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .04, d) * vA * uA; gl_FragColor = vec4(uCol * a, a); }",transparent:!0,depthWrite:!1,blending:Ii}),ce=new br(Se,Pe);ce.renderOrder=5,ce.frustumCulled=!1,u.add(ce);let ue=new Xt;ue.position.set(T-1.3,0,-.6),u.add(ue);let Ae=(F,J,re,_e,xe)=>{let Ge=new et(F,J);return Ge.position.set(re,_e,xe),Ge.castShadow=!0,Ge.receiveShadow=!0,ue.add(Ge),Ge},U=1.86,me=1.5,ae=1.2,Le=.34;Ae($n(me,U-Le-.06,ae,.03,{seg:[2,2,2],tile:[[1.2,.8],[1,.8],[1.2,.8]]}).geometry,oe.oak,0,Le+(U-Le-.06)/2,0),Ae($n(me+.08,.07,ae+.08,.025,{seg:[2,1,2]}).geometry,oe.plank,0,U-.035,0),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([F,J])=>Ae(new Un(.05,.032,Le,10),oe.oak,F*(me/2-.1),Le/2,J*(ae/2-.1)));let Fe=new Un(.018,.018,.32,10);Fe.rotateZ(Me/2),[U-.42,U-1.03].forEach(F=>{Ae($n(me-.12,.52,.04,.012,{seg:[1,1,1]}).geometry,oe.plank,0,F,ae/2+.02),Ae(Fe,oe.brass,0,F+.08,ae/2+.07)});let Ne=-.32,je=-.2;Ae(new Zr([[0,0],[.16,0],[.17,.02],[.2,.14],[.22,.3],[.19,.44],[.1,.52],[.05,.56],[.05,.66],[0,.66]].map(([F,J])=>new ve(F,J)),32),new mn({color:"#d8cdbd",roughness:.32,clearcoat:.6,clearcoatRoughness:.3}),Ne,U,je);let St=Ae(new Un(.36,.38,.44,40,1,!0),oe.shade,Ne,U+.86,je);St.castShadow=!1,Ae(new Un(.012,.012,.3,6),oe.brass,Ne,U+.74,je).castShadow=!1;let Ee=new vr(new Xs({map:Y,color:"#ffb468",transparent:!0,opacity:.45,blending:Ii,depthWrite:!1,toneMapped:!1}));Ee.scale.set(2.8,2.8,1),Ee.position.set(Ne,U+.86,je),ue.add(Ee);let ot=new Qs("#ffb06a",8,9,1.8);ot.position.set(Ne,U+.8,je),ue.add(ot),[["#6b4b3a",.62,.07,.46,.02],["#2f4656",.56,.06,.42,-.12]].forEach(([F,J,re,_e,xe],Ge)=>{let pt=Ae($n(J,re,_e,.008,{seg:[1,1,1]}).geometry,new lt({color:F,roughness:.7}),.3,U+re/2+Ge*.07,-.28);pt.rotation.y=xe;let It=Ae(new ai(J-.03,re*.7,_e-.02),new lt({color:"#efe8da",roughness:.9}),.3+.012,U+re/2+Ge*.07,-.28);It.rotation.y=xe}),Ae(new Un(.075,.066,.27,24,1,!0),new mn({color:"#dfe8f2",roughness:.06,transparent:!0,opacity:.28,side:Qt}),-.02,U+.135,.4).castShadow=!1,Ae(new Un(.069,.062,.18,24),new mn({color:"#b9cfe6",roughness:.05,transparent:!0,opacity:.35}),-.02,U+.09,.4).castShadow=!1;let xt=document.createElement("canvas");xt.width=256,xt.height=112;let Xe=new xi(xt);Xe.colorSpace=fn;let Yt="",wn=F=>{if(F===Yt)return;Yt=F;let J=xt.getContext("2d");J.fillStyle="#0c0e15",J.fillRect(0,0,256,112),J.font='700 74px "Hanken Grotesk", system-ui, sans-serif',J.textAlign="center",J.textBaseline="middle",J.shadowColor="#ff6a2a",J.shadowBlur=14,J.fillStyle="#ff8152",J.fillText(F,128,60),Xe.needsUpdate=!0};wn("11:34");let Xn=new Xt;Xn.position.set(.38,U,.3),Xn.rotation.y=.35,ue.add(Xn);let Hi=new et($n(.5,.24,.17,.025,{seg:[1,1,1]}).geometry,new lt({color:"#1a1c23",roughness:.4}));Hi.position.y=.12,Hi.castShadow=!0,Xn.add(Hi);let Ni=new et(new Dt(.42,.18),new xn({map:Xe,toneMapped:!1}));Ni.position.set(0,.12,.087),Xn.add(Ni);let Is=new vr(new Xs({map:Y,color:"#ff7a45",transparent:!0,opacity:.25,blending:Ii,depthWrite:!1,toneMapped:!1}));Is.scale.set(.6,.6,1),Is.position.set(0,.12,.12),Xn.add(Is);let Lr=new Xt;u.add(Lr);let sr=(F,J,re,_e,xe,Ge=!0)=>{let pt=new et(F,J);return pt.position.set(re,_e,xe),pt.castShadow=Ge,pt.receiveShadow=!0,Lr.add(pt),pt};sr($n(f+.3,.5,p+.26,.03,{seg:[6,1,4],tile:[[2.6,.4],[8,.5],[2.6,.4]]}).geometry,oe.oak,0,v-.25,0);let Vi=new Un(.12,.07,v-.5,6);Vi.rotateY(Me/6),[[-1,1],[1,1],[-1,-1],[1,-1]].forEach(([F,J])=>sr(Vi,oe.oak,F*(f/2-.1),(v-.5)/2,J*(p/2-.05)));{let F=new zi,J=(p+.5)/2,re=3.1,_e=.4,xe=.06;F.moveTo(-J,0),F.lineTo(J,0),F.lineTo(J,re-_e),F.absellipse(J-xe,re-_e,xe,_e,0,Me/2,!1,0),F.lineTo(-J+xe,re),F.absellipse(-J+xe,re-_e,xe,_e,Me/2,Me,!1,0),F.lineTo(-J,0);let Ge=new wr(F,{depth:.14,bevelEnabled:!0,bevelThickness:.03,bevelSize:.012,bevelSegments:3,curveSegments:20}),pt=sr(Ge,oe.plank,T-.36,.2,0);pt.rotation.y=Me/2}let Wi;{let F=document.createElement("canvas");F.width=F.height=128;let J=F.getContext("2d"),re=J.createRadialGradient(64,64,6,64,64,62);re.addColorStop(0,"rgba(0,0,0,.75)"),re.addColorStop(1,"rgba(0,0,0,0)"),J.fillStyle=re,J.fillRect(0,0,128,128),Wi=new et(new Dt(1,1),new xn({map:new xi(F),transparent:!0,depthWrite:!1})),Wi.rotation.x=-Me/2,Wi.position.set(0,.012,0),Wi.scale.set(f+3,p+2.2,1),u.add(Wi)}let rr=new lt({color:"#2f3040",roughness:1,normalMap:r,normalScale:new ve(.6,.6)}),ts=new et($n(f+2.6,.05,p+2.8,.025,{seg:[1,1,1]}).geometry,rr);ts.position.set(.3,.025,.5),ts.receiveShadow=!0,u.add(ts);{let F=P(256,340,(yt,cn,Pt)=>{let At=gn(17),Bt=yt.createLinearGradient(0,0,0,Pt);Bt.addColorStop(0,"#efe9df"),Bt.addColorStop(1,"#e4dccf"),yt.fillStyle=Bt,yt.fillRect(0,0,cn,Pt),yt.fillStyle="rgba(214,170,120,.6)",yt.beginPath(),yt.arc(cn*.64,Pt*.3,cn*.1,0,Me*2),yt.fill(),[["#cfc3b0",.52],["#a9aeb4",.62],["#7e8b99",.72],["#56657a",.84]].forEach(([tn,Pn],Ui)=>{let _s=At()*6;yt.fillStyle=tn,yt.beginPath(),yt.moveTo(0,Pt);for(let Hn=0;Hn<=cn;Hn+=4)yt.lineTo(Hn,Pt*Pn-Pt*(.07-Ui*.01)*(.6+.4*Math.sin(Hn*.018+_s))*Math.sin(Hn/cn*Me*(1+Ui*.3)+Ui));yt.lineTo(cn,Pt),yt.fill()})}),J=new Xt;J.position.set(T+.2,4.7,ne+.02),u.add(J);let re=1.25,_e=1.65,xe=.07,Ge=.07,pt=new lt({color:"#3a2a20",roughness:.5});[[re,xe,0,_e/2-xe/2],[re,xe,0,-_e/2+xe/2],[xe,_e-2*xe,-re/2+xe/2,0],[xe,_e-2*xe,re/2-xe/2,0]].forEach(([yt,cn,Pt,At])=>{let Bt=new et(new ai(yt,cn,Ge),pt);Bt.position.set(Pt,At,Ge/2),Bt.castShadow=!0,J.add(Bt)});let It=new et(new Dt(re-2*xe,_e-2*xe),new lt({color:"#f6f2ea",roughness:.9}));It.position.z=.012,J.add(It);let Ut=new et(new Dt((re-2*xe)*.72,(_e-2*xe)*.76),new lt({map:F,roughness:.8}));Ut.position.set(0,.02,.016),J.add(Ut)}class or{constructor(J,re,_e){this.ia=J,this.ib=re;let xe=re-J+1,Ge=xe*(M+1)+xe*2+(M+1)*4;this.pos=new Float32Array(Ge*3),this.col=new Float32Array(Ge*3).fill(1);let pt=new Float32Array(Ge*2),It=[],Ut=this.geo=new rn;for(let At=0;At<xe-1;At++)for(let Bt=0;Bt<M;Bt++){let tn=At*(M+1)+Bt,Pn=tn+M+1;It.push(tn,tn+1,Pn,Pn,tn+1,Pn+1)}let yt=xe*(M+1);for(let At=0;At<xe-1;At++){let Bt=yt+At*2,tn=Bt+2;It.push(Bt,Bt+1,tn,tn,Bt+1,tn+1)}let cn=yt+xe*2,Pt=cn+(M+1)*2;for(let At=0;At<M;At++){let Bt=cn+At*2,tn=Bt+2;It.push(Bt,tn,Bt+1,Bt+1,tn,tn+1)}for(let At=0;At<M;At++){let Bt=Pt+At*2,tn=Bt+2;It.push(Bt,Bt+1,tn,tn,Bt+1,tn+1)}this.fr=yt,Ut.setIndex(It),Ut.setAttribute("position",new Ft(this.pos,3)),Ut.setAttribute("color",new Ft(this.col,3)),Ut.setAttribute("uv",new Ft(pt,2)),this.uv=pt,this.mesh=new et(Ut,_e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1}fill(J,re,_e){let{pos:xe,uv:Ge,col:pt,ia:It,ib:Ut}=this,yt=0,cn=(Pt,At,Bt,tn,Pn)=>{xe[yt*3]=Pt,xe[yt*3+1]=At,xe[yt*3+2]=Bt,Ge[yt*2]=tn,Ge[yt*2+1]=Pn,yt++};for(let Pt=It;Pt<=Ut;Pt++)for(let At=0;At<=M;At++)cn(S[Pt],J(Pt,At),C[At],S[Pt]/1.3,C[At]/1.3);for(let Pt=It;Pt<=Ut;Pt++){let At=J(Pt,M),Bt=re(Pt,M),tn=_e(Pt),Pn=(this.fr+(Pt-It)*2)*3;cn(S[Pt],At,p/2,S[Pt]/1.3,At/1.3),cn(S[Pt],Bt,p/2,S[Pt]/1.3,Bt/1.3);let Ui=1,_s=1-.36*tn,Hn=1-.62*tn;pt[Pn]=Ui,pt[Pn+1]=_s,pt[Pn+2]=Hn,pt[Pn+3]=Ui,pt[Pn+4]=_s,pt[Pn+5]=Hn}for(let Pt of[It,Ut])for(let At=0;At<=M;At++){let Bt=J(Pt,At),tn=re(Pt,At);cn(S[Pt],Bt,C[At],C[At]/1.3,Bt/1.3),cn(S[Pt],tn,C[At],C[At]/1.3,tn/1.3)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.computeVertexNormals()}}let ns=new Xt;u.add(ns);let On=[],Xi=[],Ps=.7,Ls="Medium",ar=1,Bn=[],Nr=!1,Zt=0,is=new xn({color:"#0a0d1c",transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1}),A=[];function k(F){A.forEach(J=>{ns.remove(J),J.geometry.dispose()}),A=Array.from({length:Math.max(0,F-1)},()=>{let J=new Dt(1,1,g,1),re=new et(J,is);return re.frustumCulled=!1,re.renderOrder=2,ns.add(re),re})}function se(F){Xi.forEach(_e=>{ns.remove(_e.mesh),_e.geo.dispose()}),Ls=F.feel,On=[{mat:"cover",h:(F.inches<=5?.045:.07)*m},...F.layers.map(_e=>({mat:_e.mat,h:_e.inches/10*m}))],Ps=On.reduce((_e,xe)=>_e+xe.h,0),Nr=On.some(_e=>_e.mat==="zones"),Zt=On.findIndex(_e=>_e.mat==="rebond"),Zt<0&&(Zt=On.length-1);let re=_e=>On.reduce((xe,Ge)=>xe+B(Ge.mat,_e)*Ge.h,0);ar=S.reduce((_e,xe)=>_e+re(xe),0)/S.length,Xi=[],On.forEach((_e,xe)=>{(_e.mat==="zones"?[[0,g/3,oe.zoneSoft],[g/3,g*2/3,oe.zoneFirm],[g*2/3,g,oe.zoneSoft]]:[[0,g,oe[_e.mat]??oe.foam25]]).forEach(([pt,It,Ut])=>{let yt=new or(pt,It,Ut);yt.k=xe,Xi.push(yt),ns.add(yt.mesh)})}),Bn=Array.from({length:On.length+1},()=>Array.from({length:g+1},()=>new Float32Array(M+1))),k(On.length),cr=null}let Q=Yg(1.7,2.3,.52,-.26,91,t?28:40),$=new et(Q,oe.pillow);$.castShadow=!0,$.receiveShadow=!0,u.add($);let Oe=new et(Q,oe.pillow);Oe.castShadow=!0,Oe.receiveShadow=!0,Oe.rotation.y=-.06,u.add(Oe);let Je=T+1.12,Ie=new Xt;u.add(Ie);{let F=new et(la(.4),oe.hair);F.scale.set(1.1,.8,.96),Ie.add(F);let J=new et(la(.27),oe.hair);J.scale.set(1.15,.72,1),J.position.set(-.24,.05,-.04),Ie.add(J);let re=new et(la(.32),oe.hair);re.scale.set(1.25,.42,1.15),re.position.set(-.26,-.17,.02),Ie.add(re);let _e=new et(la(.08),oe.skinDark);_e.scale.set(1.25,.45,.95),_e.position.set(.1,.3,.02),_e.rotation.z=-.2,Ie.add(_e);let xe=new et(la(.21),oe.skin);xe.scale.set(1.35,.85,.9),xe.position.set(.36,-.06,-.04),Ie.add(xe);let Ge=new et(la(.2),oe.skin);Ge.scale.set(1.1,.8,.7),Ge.position.set(.22,-.12,-.28),Ie.add(Ge),Ie.traverse(pt=>{pt.castShadow=!0,pt.receiveShadow=!0})}let He=T+1.62,it=f/2+.14,ct=90,Ct=30,$e=-p/2-.55,Ot=p/2+.015,yn=new Dt(1,1,ct,Ct),en=new et(yn,oe.duvet);en.castShadow=!0,en.receiveShadow=!0,en.frustumCulled=!1,u.add(en);let Jt=5,bn=new Dt(1,1,ct,Jt),Ze=new et(bn,oe.duvet);Ze.castShadow=!0,Ze.receiveShadow=!0,Ze.frustumCulled=!1,u.add(Ze);let Cn=8,Vt=new Dt(1,1,Cn,Ct),Qn=new et(Vt,oe.sheet);Qn.castShadow=!0,Qn.receiveShadow=!0,Qn.frustumCulled=!1,Qn.visible=!1,u.add(Qn);let dn=[[0,.46,.7],[.32,.9,.82],[.8,.8,.8],[1.3,.64,.72],[1.9,.9,.8],[2.55,.74,.74],[3.25,.62,.7],[4.2,.46,.62],[5,.4,.55],[5.45,.3,.5],[5.9,.12,.45]],Di=(F,J)=>{if(F<=dn[0][0])return dn[0][J];for(let re=1;re<dn.length;re++)if(F<=dn[re][0]){let _e=(F-dn[re-1][0])/(dn[re][0]-dn[re-1][0]),xe=_e*_e*(3-2*_e);return on(dn[re-1][J],dn[re][J],xe)}return dn[dn.length-1][J]},ui=new Ko("#3b4a86","#0b0f22",.55);u.add(ui);let $t=new ws("#a9bcff",.45);$t.position.set(5,12,6),u.add($t);let ht=new $s("#a9bcff",300,24,.5,.8,1.5);ht.position.set(ze,Qe+.5,ne+.35),ht.target.position.set(-.9,1.9,.2),ht.castShadow=!0,ht.shadow.mapSize.set(t?1024:2048,t?1024:2048),ht.shadow.bias=-5e-4,ht.shadow.normalBias=.02,ht.shadow.radius=5,ht.shadow.camera.near=.5,ht.shadow.camera.far=30,u.add(ht,ht.target);let an=new ws("#c9d4ff",.5);an.position.set(-3,4,12),u.add(an);let ln=(F,J)=>[new qe(F),new qe(J)],bt={hemiS:ln("#3b4a86","#eef3ff"),hemiG:ln("#0b0f22","#e8d6bf"),moon:ln("#a9bcff","#ffe3bd"),front:ln("#c9d4ff","#fff6ec"),duvet:ln("#2d3558","#eef1f6"),sheen:ln("#8592c8","#ffffff"),skin:ln("#c79a7d","#d8a888"),wall:ln("#1b2343","#ebe5db"),floor:ln("#3a2e29","#c9b195"),frame:ln("#141824","#f2eee8"),curtain:ln("#d4d8e8","#ffffff"),curtainE:ln("#3d4a7a","#fff0da"),beam:ln("#9fb4ff","#ffd59c"),dust:ln("#d9e6ff","#ffe2b0"),sheet:ln("#ebe7de","#f7f4ee"),rug:ln("#2b2c3a","#d8cbb8"),view:ln("#55629c","#fff8ee")},Kt=(F,J,re)=>F.copy(J[0]).lerp(J[1],re),Tn=e.theme==="morning"?1:0,qi=Tn,Yi=0,Dr=0,Rl=1,ca=!1;function lr(){let F=bi(0,1,Tn),J=1-F;Kt(ui.color,bt.hemiS,F),Kt(ui.groundColor,bt.hemiG,F),ui.intensity=on(.55,1.15,F),Kt($t.color,bt.moon,F),$t.intensity=on(.45,1.5,F),Kt(ht.color,bt.moon,F),ht.intensity=on(300,520,F),Kt(an.color,bt.front,F),an.intensity=on(.5,.75,F),Kt(oe.duvet.color,bt.duvet,F),Kt(oe.duvet.sheenColor,bt.sheen,F),Kt(oe.sheet.color,bt.sheet,F),Kt(oe.skin.color,bt.skin,F),Kt(rt.material.color,bt.wall,F),Kt(pe.material.color,bt.floor,F),Kt(oe.frame.color,bt.frame,F),Nt.color.copy(rt.material.color).multiplyScalar(on(1.25,.97,F)),Kt(rr.color,bt.rug,F),ca&&(ut.material.opacity=J,tt.material.opacity=.4*J,nt.material.opacity=J),H.material.opacity=on(.07,.14,F),Kt(Re.color,bt.curtain,F),Kt(Re.emissive,bt.curtainE,F),Re.opacity=on(.55,.75,F),De.material.opacity=F,Kt(I.material.color,bt.beam,F),I.material.opacity=on(.16,.22,F),Kt(Pe.uniforms.uCol.value,bt.dust,F),Pe.uniforms.uA.value=on(.6,.85,F),u.environmentIntensity=on(.35,.85,F),Wi.material.opacity=on(.85,.5,F);let re=J*Rl;ot.intensity=8*re,oe.shade.emissiveIntensity=.05+1.25*re,Ee.material.opacity=.45*re,Is.material.opacity=.25*J}let ni=0,wi=0,Ns=0,Ds=0,Ur=0,lo=0;function ha(){let F=i.clientWidth||1,J=i.clientHeight||1;n.setSize(F,J,!1),d.aspect=F/J;let re=F>900&&F/J>1.25,_e=Math.tan(d.fov*Me/360),xe=f+3.6;lo=re?.19:0,d.userData.d=Math.max(xe/(2*_e*d.aspect*(re?.58:.97)),3.4/_e),d.filmOffset=-lo*2*_e*d.aspect*d.getFilmWidth(),d.updateProjectionMatrix()}function Cl(){let F=d.userData.d*(1-.05*Ur),J=-.14+ni,re=.21+wi;d.position.set(-.5+Math.sin(J)*Math.cos(re)*F,1.95+Math.sin(re)*F,Math.cos(J)*Math.cos(re)*F),d.lookAt(-.5,1.95,0),d.updateMatrixWorld()}i.addEventListener("pointermove",F=>{let J=i.getBoundingClientRect();Ns=((F.clientX-J.left)/J.width-.5)*.12,Ds=-((F.clientY-J.top)/J.height-.5)*.06,ss()},{passive:!0}),i.addEventListener("pointerleave",()=>{Ns=0,Ds=0,ss()});let cr=null,Fr={shoulders:new O,hips:new O,core:new O};function ua(F,J){let re=Ir(jn(F)),_e=On.length,xe=Math.min(.42,Ps*W[Ls]*1.6);Ur=re,Rl=1-bi(.9,1,F);let Ge=[v+Ps];On.forEach((kt,jt)=>Ge.push(Ge[jt]-kt.h));for(let kt=0;kt<=g;kt++){let jt=S[kt],dt=On.map(In=>B(In.mat,jt)*In.h),vt=dt.reduce((In,qn)=>In+qn,0),vn=xe*re*b(jt)*(vt/ar);for(let In=0;In<=M;In++){let qn=vn*z(C[In]),Ki=0;Bn[_e][kt][In]=Ge[_e];for(let di=_e-1;di>=0;di--){Ki+=qn*dt[di]/vt;let fi=Ge[di]-Ki;di>0&&On[di].mat==="profile"&&(fi+=.012*Math.sin(jt*9.5)),Bn[di][kt][In]=fi}}}Xi.forEach(kt=>{let jt=On[kt.k].h;kt.fill((dt,vt)=>Bn[kt.k][dt][vt],(dt,vt)=>Bn[kt.k+1][dt][vt],dt=>jn((1-(Bn[kt.k][dt][M]-Bn[kt.k+1][dt][M])/jt)*6.5))}),A.forEach((kt,jt)=>{let dt=kt.geometry.attributes.position.array;for(let vt=0;vt<=g;vt++){let vn=Bn[jt+1][vt][M];dt[vt*3]=S[vt],dt[vt*3+1]=vn+.006,dt[vt*3+2]=p/2+.004,dt[(g+1+vt)*3]=S[vt],dt[(g+1+vt)*3+1]=vn-.006,dt[(g+1+vt)*3+2]=p/2+.004}kt.geometry.attributes.position.needsUpdate=!0});let pt=(kt,jt)=>{let dt=jn((kt-T)/f*g,0,g),vt=Math.min(g-1,Math.floor(dt)),vn=dt-vt,In=jn((jt+p/2)/p*M,0,M),qn=Math.min(M-1,Math.floor(In)),Ki=In-qn,di=Bn[0][vt][qn]+(Bn[0][vt+1][qn]-Bn[0][vt][qn])*vn,fi=Bn[0][vt][qn+1]+(Bn[0][vt+1][qn+1]-Bn[0][vt][qn+1])*vn;return di+(fi-di)*Ki},It=pt(Je,0);$.position.set(Je-.05,It+.26,-.05),$.scale.set(1,1-.1*re,1),Oe.position.set(Je-.12,pt(Je,-1.4)+.26,-1.45),Ie.position.set(Je+.02,It+.66+.025*(1-re)+.006*Math.sin(J),-.12),Ie.rotation.z=.06+.03*(1-re);let Ut=yn.attributes.position.array,yt=1-re;for(let kt=0;kt<=Ct;kt++){let jt=$e+(Ot-$e)*kt/Ct;for(let dt=0;dt<=ct;dt++){let vt=He+(it-He)*dt/ct,vn=vt-He,In=(kt*(ct+1)+dt)*3,qn=Di(vn,2)*1.12,Ki=1/(1+(Math.abs(jt)/qn)**3.2),di=Math.exp(-(((vn-.75)/.5)**2)),fi=pt(Math.min(vt,f/2),Math.max(-p/2,Math.min(p/2,jt)))+.11+Di(vn,1)*Ki*(1+.05*yt)+Math.sin(J)*.03*di*Ki;fi+=.045*Math.exp(-((vn/.14)**2)),fi-=(1-bi(0,.16,vn))*.14*(1-Ki*.5),fi+=(.016*Math.sin(vt*2.1+jt*1.1+1.3)+.007*Math.sin(vt*5.3-jt*1.9))*bi(.2,1.2,vn)*(1-Ki*.6),jt<-p/2&&(fi-=(-p/2-jt)*1.7),jt>p/2-.34&&(fi-=((jt-(p/2-.34))/.36)**2*.1),vt>f/2-.06&&(fi-=(vt-(f/2-.06))*1.9),Ut[In]=vt,Ut[In+1]=fi,Ut[In+2]=jt}}yn.attributes.position.needsUpdate=!0,yn.computeVertexNormals();let cn=bn.attributes.position.array,Pt=.1;for(let kt=0;kt<=Jt;kt++){let jt=kt/Jt*Me/2;for(let dt=0;dt<=ct;dt++){let vt=(Ct*(ct+1)+dt)*3,vn=(kt*(ct+1)+dt)*3;cn[vn]=Ut[vt],cn[vn+1]=Ut[vt+1]-Pt+Math.cos(jt)*Pt-(kt===Jt?.02:0),cn[vn+2]=Ut[vt+2]+Math.sin(jt)*Pt*.9}}bn.attributes.position.needsUpdate=!0,bn.computeVertexNormals();let At=Vt.attributes.position.array,Bt=.42;for(let kt=0;kt<=Ct;kt++)for(let jt=0;jt<=Cn;jt++){let dt=Math.round(jt/Cn*Bt/(it-He)*ct),vt=(kt*(ct+1)+dt)*3,vn=(kt*(Cn+1)+jt)*3,In=Ut[vt+2],qn=bi(p/2-.2,p/2-.7,In)*bi(-p/2+.05,-p/2+.5,In);At[vn]=Ut[vt]-.012+.03*Math.sin(In*3.1+1),At[vn+1]=Ut[vt+1]+(.028+.02*Math.sin(jt/Cn*Me))*qn-.04*(1-qn),At[vn+2]=In}Vt.attributes.position.needsUpdate=!0,Vt.computeVertexNormals();let tn=kt=>{let jt=Math.round(kt/(it-He)*ct),dt=Math.round((0-$e)/(Ot-$e)*Ct),vt=(dt*(ct+1)+jt)*3;return[Ut[vt],Ut[vt+1]]},[Pn,Ui]=tn(.36),[_s,Hn]=tn(1.92);Fr.shoulders.set(Pn,Ui+.04,0),Fr.hips.set(_s,Hn+.04,0);let fa=Math.round((_s-T)/f*g),Pl=(Bn[Zt][fa][M]+Bn[Zt+1][fa][M])/2;Fr.core.set(_s+.6,Pl,p/2+.01)}let da=new O;function co(){if(!e.onPoints)return;let F=i.clientWidth,J=i.clientHeight,re={};for(let _e in Fr)da.copy(Fr[_e]).project(d),re[_e]=[(da.x*.5+.5)*F,(.5-da.y*.5)*J];e.onPoints(re)}function ho(F){let J=Math.min(.1,Math.max(0,(F-Yi)/1e3));Yi=F;let re=!1;return Tn!==qi&&(Tn=qi>Tn?Math.min(qi,Tn+J/1.4):Math.max(qi,Tn-J/1.4),re=!0),lr(),ni=Li(ni,Ns,4,J),wi=Li(wi,Ds,4,J),Math.abs(ni-Ns)+Math.abs(wi-Ds)>1e-4&&(re=!0),Pe.uniforms.uTime.value=F/1e3,We.material.map.userData.real&&(We.material.map.offset.x=Z.n[0]+ni*.1),De.material.map.userData.real&&(De.material.map.offset.x=Z.m[0]+ni*.1),Cl(),n.render(u,d),co(),re}function ss(){Dr||(Yi=performance.now(),Dr=requestAnimationFrame(Il))}function Il(F){Dr=0,ho(F)&&(Dr=requestAnimationFrame(Il))}try{await document.fonts.load('700 74px "Hanken Grotesk"')}catch{}{let F=qg(t),J=1.83*3.937,re=(_e,xe)=>_e.then(Ge=>{Ge&&(xe(Ge),ss())}).catch(()=>{});if(F){re(F.oak,xe=>{Zn(oe.oak,xe,.07,1.1,Me/2,{color:"#ffffff",rough:.82,ns:.9}),Zn(oe.plank,xe,1/J,1/J,Me/2,{color:"#ffffff",rough:.8,ns:.9})}),re(F.floor,xe=>{Zn(pe.material,xe,34/6.6929,24/6.6929,0,{rough:.7,ns:.8})}),re(F.rug,xe=>{Zn(rr,xe,(f+2.6)/1.9685,(p+2.8)/1.9685,0,{keepMap:!0,ns:1})});let _e=(xe,[Ge,pt])=>{let It=xe.clone();return It.wrapS=It.wrapT=oi,It.repeat.set(Z.su,Z.sv),It.offset.set(Ge,pt),It.userData.real=!0,It.needsUpdate=!0,It};re(F.viewN,xe=>{We.material.map=_e(xe,Z.n),We.material.color.copy(bt.view[0]),We.material.needsUpdate=!0,ca=!0,ut.visible=tt.visible=nt.visible=!0,lr()}),re(F.viewM,xe=>{De.material.map=_e(xe,Z.m),De.material.color.copy(bt.view[1]),De.material.needsUpdate=!0}),re(F.plantFloor,xe=>{Yh(xe.clone(),u,fe+1.15,0,ne+.75,3.1,.6)}),re(F.plaster,xe=>{Zn(rt.material,xe,34/7.874,16/7.874,0,{keepMap:!0,ns:.7})}),re(F.linen,xe=>{Zn(oe.pillow,xe,1/1.06299,1/1.06299,0,{keepMap:!0,ns:.9}),Zn(oe.sheet,xe,9,6.5,0,{keepMap:!0,ns:.6,keepRough:!0}),Zn(oe.duvet,xe,9,6.5,0,{keepMap:!0,ns:.8,keepRough:!0})})}}return ha(),se(e.model),ua(e.settle??0,0),lr(),Cl(),n.render(u,d),co(),addEventListener("resize",()=>{ha(),ss()}),window.ResizeObserver&&new ResizeObserver(()=>{ha(),ss()}).observe(i),e.onReady?.(),{setModel(F){se(F),cr&&ua(cr[0],cr[1]),ss()},draw(F,J,re){cr=[F,J],re&&wn(re),ua(F,J),ho(performance.now())},setTheme(F,J){qi=F==="morning"?1:0,J&&(Tn=qi),ss()},setWall(F,J){F&&bt.wall[0].set(F),J&&bt.wall[1].set(J),lr(),ss()},info(){return{zones:Nr,rebond:On.some(F=>F.mat==="rebond")}}}}function la(i){return new Zr(Array.from({length:17},(e,t)=>{let n=-Me/2+Me*t/16;return new ve(Math.cos(n)*i+1e-4,Math.sin(n)*i)}),28)}window.EasyComfortBed={mount:HS,mountNight:VS};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
