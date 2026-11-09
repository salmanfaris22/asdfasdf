(()=>{var Jp=0,Bu=1,jp=2;var xr=1,$p=2,Fo=3,vs=0,pi=1,nn=2,Gr=0,Oo=1,rs=2,zu=3,ku=4,Qp=5;var Hr=100,em=101,tm=102,nm=103,im=104,sm=200,rm=201,om=202,am=203,Gu=204,Hu=205,lm=206,cm=207,hm=208,um=209,dm=210,fm=211,pm=212,mm=213,gm=214,nc=0,ic=1,sc=2,yo=3,rc=4,oc=5,ac=6,lc=7,Vu=0,_m=1,xm=2,Ms=0,Wu=1,Xu=2,qu=3,Bo=4,Yu=5,Ku=6,Zu=7,Su="attached",ym="detached",Ju=300,Vr=301,zo=302,Lc=303,Nc=304,kn=1e3,Ti=1001,lr=1002,Un=1003,Dc=1004;var Wr=1005;var _n=1006,ko=1007;var mi=1008;var Ci=1009,ju=1010,$u=1011,Go=1012,Uc=1013,os=1014,ri=1015,gi=1016,Fc=1017,Oc=1018,Xr=1020,Qu=35902,ed=35899,td=1021,nd=1022,_i=1023,ks=1026,Js=1027,Bc=1028,zc=1029,yr=1030,kc=1031;var Gc=1033,Za=33776,Ja=33777,ja=33778,$a=33779,Hc=35840,Vc=35841,Wc=35842,Xc=35843,qc=36196,Yc=37492,Kc=37496,Zc=37488,Jc=37489,Qa=37490,jc=37491,$c=37808,Qc=37809,eh=37810,th=37811,nh=37812,ih=37813,sh=37814,rh=37815,oh=37816,ah=37817,lh=37818,ch=37819,hh=37820,uh=37821,dh=36492,fh=36494,ph=36495,mh=36283,gh=36284,el=36285,_h=36286;var Cr=2300,Ir=2301,ec=2302,bu=2303,wu=2400,Tu=2401,Au=2402,vm=2500;var id=0,tl=1,Ho=2,Mm=3200;var xh=0,Sm=1,js="",ln="srgb",Jn="srgb-linear",va="linear",cn="srgb";var tc=7680;var bm=519,wm=512,Tm=513,Am=514,sd=515,Em=516,Rm=517,rd=518,od=519,ad=35044;var ld="300 es",Wi=2e3,vo=2001;function jg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $g(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cm(){let i=Mo("canvas");return i.style.display="block",i}var ep={},So=null;function Ma(...i){let e="THREE."+i.shift();So?So("log",e,...i):console.log(e,...i)}function Im(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function st(...i){i=Im(i);let e="THREE."+i.shift();if(So)So("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function _t(...i){i=Im(i);let e="THREE."+i.shift();if(So)So("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Rr(...i){let e=i.join(" ");e in ep||(ep[e]=!0,st(...i))}function Pm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Lm={[nc]:nc,[sc]:ac,[rc]:rc,[yo]:oc,[ic]:ic,[ac]:sc,[lc]:lc,[oc]:yo},_s=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tp=1234567,ga=Math.PI/180,Pr=180/Math.PI;function as(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ni[i&255]+ni[i>>8&255]+ni[i>>16&255]+ni[i>>24&255]+"-"+ni[e&255]+ni[e>>8&255]+"-"+ni[e>>16&15|64]+ni[e>>24&255]+"-"+ni[t&63|128]+ni[t>>8&255]+"-"+ni[t>>16&255]+ni[t>>24&255]+ni[n&255]+ni[n>>8&255]+ni[n>>16&255]+ni[n>>24&255]).toLowerCase()}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function cd(i,e){return(i%e+e)%e}function Qg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function e0(i,e,t){return i!==e?(t-i)/(e-i):0}function _a(i,e,t){return(1-t)*i+t*e}function t0(i,e,t,n){return _a(i,e,1-Math.exp(-t*n))}function n0(i,e=1){return e-Math.abs(cd(i,e*2)-e)}function i0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function s0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function r0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function o0(i,e){return i+Math.random()*(e-i)}function a0(i){return i*(.5-Math.random())}function l0(i){i!==void 0&&(tp=i);let e=tp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function c0(i){return i*ga}function h0(i){return i*Pr}function u0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function d0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function f0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ud(i,e){if(e.constructor===Float32Array)return i;let t=yh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function dd(i,e){if(e.constructor===Float32Array)return i;let t=yh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var vh={DEG2RAD:ga,RAD2DEG:Pr,generateUUID:as,clamp:Lt,euclideanModulo:cd,mapLinear:Qg,inverseLerp:e0,lerp:_a,damp:t0,pingpong:n0,smoothstep:i0,smootherstep:s0,randInt:r0,randFloat:o0,randFloatSpread:a0,seededRandom:l0,degToRad:c0,radToDeg:h0,isPowerOfTwo:u0,ceilPowerOfTwo:d0,floorPowerOfTwo:hd,setQuaternionFromProperEuler:f0,normalize:dd,denormalize:ud},xd=class xd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xd.prototype.isVector2=!0;var ge=xd,hi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],M=r[o+3];if(u!==M||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*M;m<0&&(d=-d,f=-f,p=-p,M=-M,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),A=Math.sin(v);g=Math.sin(g*v)/A,a=Math.sin(a*v)/A,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+M*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+M*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},yd=class yd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(np.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(np.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kh.copy(this).projectOnVector(e),this.sub(Kh)}reflect(e){return this.sub(Kh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yd.prototype.isVector3=!0;var U=yd,Kh=new U,np=new hi,vd=class vd{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],M=s[0],m=s[3],g=s[6],v=s[1],A=s[4],S=s[7],C=s[2],T=s[5],x=s[8];return r[0]=o*M+a*v+l*C,r[3]=o*m+a*A+l*T,r[6]=o*g+a*S+l*x,r[1]=c*M+h*v+u*C,r[4]=c*m+h*A+u*T,r[7]=c*g+h*S+u*x,r[2]=d*M+f*v+p*C,r[5]=d*m+f*A+p*T,r[8]=d*g+f*S+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/p;return e[0]=u*M,e[1]=(s*c-h*n)*M,e[2]=(a*n-s*o)*M,e[3]=d*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=f*M,e[7]=(n*l-c*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zh.makeScale(e,t)),this}rotate(e){return Rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zh.makeRotation(-e)),this}translate(e,t){return Rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};vd.prototype.isMatrix3=!0;var wt=vd,Zh=new wt,ip=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sp=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function p0(){let i={enabled:!0,workingColorSpace:Jn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===cn&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===cn&&(s.r=xo(s.r),s.g=xo(s.g),s.b=xo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===js?va:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Jn]:{primaries:e,whitePoint:n,transfer:va,toXYZ:ip,fromXYZ:sp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:n,transfer:cn,toXYZ:ip,fromXYZ:sp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}var Ot=p0();function zs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qr,cc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qr===void 0&&(Qr=Mo("canvas")),Qr.width=e.width,Qr.height=e.height;let s=Qr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Qr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Mo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zs(t[n]/255)*255):t[n]=zs(t[n]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},m0=0,bo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jh(s[o].image)):r.push(Jh(s[o]))}else r=Jh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Jh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}var g0=0,jh=new U,Fn=class i extends _s{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ti,s=Ti,r=_n,o=mi,a=_i,l=Ci,c=i.DEFAULT_ANISOTROPY,h=js){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=as(),this.name="",this.source=new bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(jh).x}get height(){return this.source.getSize(jh).y}get depth(){return this.source.getSize(jh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kn:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kn:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Ju;Fn.DEFAULT_ANISOTROPY=1;var Md=class Md{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],M=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,S=(f+1)/2,C=(g+1)/2,T=(h+d)/4,x=(u+M)/4,b=(p+m)/4;return A>S&&A>C?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=T/n,r=x/n):S>C?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=b/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=x/r,s=b/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(u-M)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this.w=Lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this.w=Lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Md.prototype.isVector4=!0;var on=Md,hc=class extends _s{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Fn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new bo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ui=class extends hc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Sa=class extends Fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var uc=class extends Fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Pc=class Pc{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,p,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,p,M,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,p,M,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=M,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/eo.setFromMatrixColumn(e,0).length(),r=1/eo.setFromMatrixColumn(e,1).length(),o=1/eo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,M=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-M*c,t[9]=-a*l,t[2]=M-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,M=c*u;t[0]=d+M*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=M+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,M=c*u;t[0]=d-M*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=M-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,M=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+M,t[1]=l*u,t[5]=M*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,M=a*c;t[0]=l*h,t[4]=M-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-M*u}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,M=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+M,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=M*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_0,e,x0)}lookAt(e,t,n){let s=this.elements;return Ni.subVectors(e,t),Ni.lengthSq()===0&&(Ni.z=1),Ni.normalize(),nr.crossVectors(n,Ni),nr.lengthSq()===0&&(Math.abs(n.z)===1?Ni.x+=1e-4:Ni.z+=1e-4,Ni.normalize(),nr.crossVectors(n,Ni)),nr.normalize(),wl.crossVectors(Ni,nr),s[0]=nr.x,s[4]=wl.x,s[8]=Ni.x,s[1]=nr.y,s[5]=wl.y,s[9]=Ni.y,s[2]=nr.z,s[6]=wl.z,s[10]=Ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],M=n[6],m=n[10],g=n[14],v=n[3],A=n[7],S=n[11],C=n[15],T=s[0],x=s[4],b=s[8],B=s[12],N=s[1],F=s[5],W=s[9],Z=s[13],P=s[2],Y=s[6],K=s[10],X=s[14],ye=s[3],te=s[7],ce=s[11],me=s[15];return r[0]=o*T+a*N+l*P+c*ye,r[4]=o*x+a*F+l*Y+c*te,r[8]=o*b+a*W+l*K+c*ce,r[12]=o*B+a*Z+l*X+c*me,r[1]=h*T+u*N+d*P+f*ye,r[5]=h*x+u*F+d*Y+f*te,r[9]=h*b+u*W+d*K+f*ce,r[13]=h*B+u*Z+d*X+f*me,r[2]=p*T+M*N+m*P+g*ye,r[6]=p*x+M*F+m*Y+g*te,r[10]=p*b+M*W+m*K+g*ce,r[14]=p*B+M*Z+m*X+g*me,r[3]=v*T+A*N+S*P+C*ye,r[7]=v*x+A*F+S*Y+C*te,r[11]=v*b+A*W+S*K+C*ce,r[15]=v*B+A*Z+S*X+C*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],M=e[7],m=e[11],g=e[15],v=l*f-c*d,A=a*f-c*u,S=a*d-l*u,C=o*f-c*h,T=o*d-l*h,x=o*u-a*h;return t*(M*v-m*A+g*S)-n*(p*v-m*C+g*T)+s*(p*A-M*C+g*x)-r*(p*S-M*T+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],M=e[13],m=e[14],g=e[15],v=t*a-n*o,A=t*l-s*o,S=t*c-r*o,C=n*l-s*a,T=n*c-r*a,x=s*c-r*l,b=h*M-u*p,B=h*m-d*p,N=h*g-f*p,F=u*m-d*M,W=u*g-f*M,Z=d*g-f*m,P=v*Z-A*W+S*F+C*N-T*B+x*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/P;return e[0]=(a*Z-l*W+c*F)*Y,e[1]=(s*W-n*Z-r*F)*Y,e[2]=(M*x-m*T+g*C)*Y,e[3]=(d*T-u*x-f*C)*Y,e[4]=(l*N-o*Z-c*B)*Y,e[5]=(t*Z-s*N+r*B)*Y,e[6]=(m*S-p*x-g*A)*Y,e[7]=(h*x-d*S+f*A)*Y,e[8]=(o*W-a*N+c*b)*Y,e[9]=(n*N-t*W-r*b)*Y,e[10]=(p*T-M*S+g*v)*Y,e[11]=(u*S-h*T-f*v)*Y,e[12]=(a*B-o*F-l*b)*Y,e[13]=(t*F-n*B+s*b)*Y,e[14]=(M*A-p*C-m*v)*Y,e[15]=(h*C-u*A+d*v)*Y,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,M=o*h,m=o*u,g=a*u,v=l*c,A=l*h,S=l*u,C=n.x,T=n.y,x=n.z;return s[0]=(1-(M+g))*C,s[1]=(f+S)*C,s[2]=(p-A)*C,s[3]=0,s[4]=(f-S)*T,s[5]=(1-(d+g))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(p+A)*x,s[9]=(m-v)*x,s[10]=(1-(d+M))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=eo.set(s[0],s[1],s[2]).length(),a=eo.set(s[4],s[5],s[6]).length(),l=eo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ji.copy(this);let c=1/o,h=1/a,u=1/l;return ji.elements[0]*=c,ji.elements[1]*=c,ji.elements[2]*=c,ji.elements[4]*=h,ji.elements[5]*=h,ji.elements[6]*=h,ji.elements[8]*=u,ji.elements[9]*=u,ji.elements[10]*=u,t.setFromRotationMatrix(ji),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Wi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,M;if(l)p=r/(o-r),M=o*r/(o-r);else if(a===Wi)p=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===vo)p=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Wi,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,M;if(l)p=1/(o-r),M=o/(o-r);else if(a===Wi)p=-2/(o-r),M=-(o+r)/(o-r);else if(a===vo)p=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Pc.prototype.isMatrix4=!0;var xt=Pc,eo=new U,ji=new xt,_0=new U(0,0,0),x0=new U(1,1,1),nr=new U,wl=new U,Ni=new U,rp=new xt,op=new hi,es=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return op.setFromEuler(this),this.setFromQuaternion(op,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};es.DEFAULT_ORDER="XYZ";var wo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},y0=0,ap=new U,to=new hi,Ps=new xt,Tl=new U,ia=new U,v0=new U,M0=new hi,lp=new U(1,0,0),cp=new U(0,1,0),hp=new U(0,0,1),up={type:"added"},S0={type:"removed"},no={type:"childadded",child:null},$h={type:"childremoved",child:null},bn=class i extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new es,n=new hi,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new wt}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(lp,e)}rotateY(e){return this.rotateOnAxis(cp,e)}rotateZ(e){return this.rotateOnAxis(hp,e)}translateOnAxis(e,t){return ap.copy(e).applyQuaternion(this.quaternion),this.position.add(ap.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lp,e)}translateY(e){return this.translateOnAxis(cp,e)}translateZ(e){return this.translateOnAxis(hp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ps.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tl.copy(e):Tl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ps.lookAt(ia,Tl,this.up):Ps.lookAt(Tl,ia,this.up),this.quaternion.setFromRotationMatrix(Ps),s&&(Ps.extractRotation(s.matrixWorld),to.setFromRotationMatrix(Ps),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(up),no.child=e,this.dispatchEvent(no),no.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(S0),$h.child=e,this.dispatchEvent($h),$h.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ps.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ps.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ps),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(up),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,v0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,M0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bn.DEFAULT_UP=new U(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kt=class extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},b0={type:"move"},To=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let M of e.hand.values()){let m=t.getJointPose(M,n),g=this._getHandJoint(c,M);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(b0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},Al={h:0,s:0,l:0};function Qh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ot.workingColorSpace){if(e=cd(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Qh(o,r,e+1/3),this.g=Qh(o,r,e),this.b=Qh(o,r,e-1/3)}return Ot.colorSpaceToWorking(this,s),this}setStyle(e,t=ln){function n(r){r!==void 0&&parseFloat(r)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){let n=Nm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Ot.workingToColorSpace(ii.copy(this),e),Math.round(Lt(ii.r*255,0,255))*65536+Math.round(Lt(ii.g*255,0,255))*256+Math.round(Lt(ii.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.workingToColorSpace(ii.copy(this),t);let n=ii.r,s=ii.g,r=ii.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ot.workingColorSpace){return Ot.workingToColorSpace(ii.copy(this),t),e.r=ii.r,e.g=ii.g,e.b=ii.b,e}getStyle(e=ln){Ot.workingToColorSpace(ii.copy(this),e);let t=ii.r,n=ii.g,s=ii.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+t,ir.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ir),e.getHSL(Al);let n=_a(ir.h,Al.h,t),s=_a(ir.s,Al.s,t),r=_a(ir.l,Al.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ii=new Ge;Ge.NAMES=Nm;var cr=class extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new es,this.environmentIntensity=1,this.environmentRotation=new es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$i=new U,Ls=new U,eu=new U,Ns=new U,io=new U,so=new U,dp=new U,tu=new U,nu=new U,iu=new U,su=new on,ru=new on,ou=new on,Os=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$i.subVectors(e,t),s.cross($i);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$i.subVectors(s,t),Ls.subVectors(n,t),eu.subVectors(e,t);let o=$i.dot($i),a=$i.dot(Ls),l=$i.dot(eu),c=Ls.dot(Ls),h=Ls.dot(eu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ns)===null?!1:Ns.x>=0&&Ns.y>=0&&Ns.x+Ns.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ns)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ns.x),l.addScaledVector(o,Ns.y),l.addScaledVector(a,Ns.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return su.setScalar(0),ru.setScalar(0),ou.setScalar(0),su.fromBufferAttribute(e,t),ru.fromBufferAttribute(e,n),ou.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(su,r.x),o.addScaledVector(ru,r.y),o.addScaledVector(ou,r.z),o}static isFrontFacing(e,t,n,s){return $i.subVectors(n,t),Ls.subVectors(e,t),$i.cross(Ls).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Ls.subVectors(this.a,this.b),$i.cross(Ls).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;io.subVectors(s,n),so.subVectors(r,n),tu.subVectors(e,n);let l=io.dot(tu),c=so.dot(tu);if(l<=0&&c<=0)return t.copy(n);nu.subVectors(e,s);let h=io.dot(nu),u=so.dot(nu);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(io,o);iu.subVectors(e,r);let f=io.dot(iu),p=so.dot(iu);if(p>=0&&f<=p)return t.copy(r);let M=f*c-l*p;if(M<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(so,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return dp.subVectors(r,s),a=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(dp,a);let g=1/(m+M+d);return o=M*g,a=d*g,t.copy(n).addScaledVector(io,o).addScaledVector(so,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ui=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qi):Qi.fromBufferAttribute(r,o),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),El.copy(n.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),Rl.subVectors(this.max,sa),ro.subVectors(e.a,sa),oo.subVectors(e.b,sa),ao.subVectors(e.c,sa),sr.subVectors(oo,ro),rr.subVectors(ao,oo),wr.subVectors(ro,ao);let t=[0,-sr.z,sr.y,0,-rr.z,rr.y,0,-wr.z,wr.y,sr.z,0,-sr.x,rr.z,0,-rr.x,wr.z,0,-wr.x,-sr.y,sr.x,0,-rr.y,rr.x,0,-wr.y,wr.x,0];return!au(t,ro,oo,ao,Rl)||(t=[1,0,0,0,1,0,0,0,1],!au(t,ro,oo,ao,Rl))?!1:(Cl.crossVectors(sr,rr),t=[Cl.x,Cl.y,Cl.z],au(t,ro,oo,ao,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ds),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ds=[new U,new U,new U,new U,new U,new U,new U,new U],Qi=new U,El=new ui,ro=new U,oo=new U,ao=new U,sr=new U,rr=new U,wr=new U,sa=new U,Rl=new U,Cl=new U,Tr=new U;function au(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Tr.fromArray(i,r);let a=s.x*Math.abs(Tr.x)+s.y*Math.abs(Tr.y)+s.z*Math.abs(Tr.z),l=e.dot(Tr),c=t.dot(Tr),h=n.dot(Tr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Bs=w0();function w0(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function T0(i){Math.abs(i)>65504&&st("DataUtils.toHalfFloat(): Value out of range."),i=Lt(i,-65504,65504),Bs.floatView[0]=i;let e=Bs.uint32View[0],t=e>>23&511;return Bs.baseTable[t]+((e&8388607)>>Bs.shiftTable[t])}function A0(i){let e=i>>10;return Bs.uint32View[0]=Bs.mantissaTable[Bs.offsetTable[e]+(i&1023)]+Bs.exponentTable[e],Bs.floatView[0]}var hr=class{static toHalfFloat(e){return T0(e)}static fromHalfFloat(e){return A0(e)}},zn=new U,Il=new ge,E0=0,Ct=class extends _s{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:E0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ad,this.updateRanges=[],this.gpuType=ri,this.version=0,this._normalizationScale=e!==void 0?yh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Il.fromBufferAttribute(this,t),Il.applyMatrix3(e),this.setXY(t,Il.x,Il.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix3(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ud(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):dd(e,this.array)}};var ba=class extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var wa=class extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var en=class extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},R0=new ui,ra=new U,lu=new U,Ai=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):R0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);let t=ra.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ra,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(lu)),this.expandByPoint(ra.copy(e.center).sub(lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},C0=0,Vi=new xt,cu=new bn,lo=new U,Di=new ui,oa=new ui,Yn=new U,tn=class i extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jg(e)?wa:ba)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new wt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vi.makeRotationFromQuaternion(e),this.applyMatrix4(Vi),this}rotateX(e){return Vi.makeRotationX(e),this.applyMatrix4(Vi),this}rotateY(e){return Vi.makeRotationY(e),this.applyMatrix4(Vi),this}rotateZ(e){return Vi.makeRotationZ(e),this.applyMatrix4(Vi),this}translate(e,t,n){return Vi.makeTranslation(e,t,n),this.applyMatrix4(Vi),this}scale(e,t,n){return Vi.makeScale(e,t,n),this.applyMatrix4(Vi),this}lookAt(e){return cu.lookAt(e),cu.updateMatrix(),this.applyMatrix4(cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new en(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Di.setFromBufferAttribute(r),this.morphTargetsRelative?(Yn.addVectors(this.boundingBox.min,Di.min),this.boundingBox.expandByPoint(Yn),Yn.addVectors(this.boundingBox.max,Di.max),this.boundingBox.expandByPoint(Yn)):(this.boundingBox.expandByPoint(Di.min),this.boundingBox.expandByPoint(Di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Di.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];oa.setFromBufferAttribute(a),this.morphTargetsRelative?(Yn.addVectors(Di.min,oa.min),Di.expandByPoint(Yn),Yn.addVectors(Di.max,oa.max),Di.expandByPoint(Yn)):(Di.expandByPoint(oa.min),Di.expandByPoint(oa.max))}Di.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Yn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Yn.fromBufferAttribute(a,c),l&&(lo.fromBufferAttribute(e,c),Yn.add(lo)),s=Math.max(s,n.distanceToSquared(Yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ct(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let B=0;B<n.count;B++)a[B]=new U,l[B]=new U;let h=new U,u=new U,d=new U,f=new ge,p=new ge,M=new ge,m=new U,g=new U;function v(B,N,F){c[B]=c[N]=c[F]=1,h.fromBufferAttribute(n,B),u.fromBufferAttribute(n,N),d.fromBufferAttribute(n,F),f.fromBufferAttribute(r,B),p.fromBufferAttribute(r,N),M.fromBufferAttribute(r,F),u.sub(h),d.sub(h),p.sub(f),M.sub(f);let W=1/(p.x*M.y-M.x*p.y);isFinite(W)&&(m.copy(u).multiplyScalar(M.y).addScaledVector(d,-p.y).multiplyScalar(W),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-M.x).multiplyScalar(W),a[B].add(m),a[N].add(m),a[F].add(m),l[B].add(g),l[N].add(g),l[F].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let B=0,N=A.length;B<N;++B){let F=A[B],W=F.start,Z=F.count;for(let P=W,Y=W+Z;P<Y;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let S=new U,C=new U,T=new U,x=new U;function b(B){T.fromBufferAttribute(s,B),x.copy(T);let N=a[B];S.copy(N),S.sub(T.multiplyScalar(T.dot(N))).normalize(),C.crossVectors(x,N);let W=C.dot(l[B])<0?-1:1;o.setXYZW(B,S.x,S.y,S.z,W)}for(let B=0,N=n.count;B<N;++B)c[B]&&b(B);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),M=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yn.fromBufferAttribute(e,t),Yn.normalize(),e.setXYZ(t,Yn.x,Yn.y,Yn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?f=l[M]*a.data.stride+a.offset:f=l[M]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new Ct(d,h,u)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ad,this.updateRanges=[],this.version=0,this.uuid=as()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=fp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=fp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function fp(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=as()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var ci=new U,ur=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?yh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ci.fromBufferAttribute(this,t),ci.applyMatrix4(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ci.fromBufferAttribute(this,t),ci.applyNormalMatrix(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ci.fromBufferAttribute(this,t),ci.transformDirection(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ma("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ma("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ud(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):dd(e,this.data.array)}},hu=new U,I0=new U,P0=new wt,wi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=hu.subVectors(n,t).cross(I0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(hu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||P0.getNormalMatrix(e),s=this.coplanarPoint(hu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},L0=0,di=class extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Oo,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gu,this.blendDst=Hu,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tc,this.stencilZFail=tc,this.stencilZPass=tc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new wi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},dr=class extends di{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},co,aa=new U,ho=new U,uo=new U,fo=new ge,la=new ge,Dm=new xt,Pl=new U,ca=new U,Ll=new U,pp=new ge,uu=new ge,mp=new ge,Nr=class extends bn{constructor(e=new dr){if(super(),this.isSprite=!0,this.type="Sprite",co===void 0){co=new tn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lr(t,5);co.setIndex([0,1,2,0,2,3]),co.setAttribute("position",new ur(n,3,0,!1)),co.setAttribute("uv",new ur(n,2,3,!1))}this.geometry=co,this.material=e,this.center=new ge(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&_t('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ho.setFromMatrixScale(this.matrixWorld),Dm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),uo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ho.multiplyScalar(-uo.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Nl(Pl.set(-.5,-.5,0),uo,o,ho,s,r),Nl(ca.set(.5,-.5,0),uo,o,ho,s,r),Nl(Ll.set(.5,.5,0),uo,o,ho,s,r),pp.set(0,0),uu.set(1,0),mp.set(1,1);let a=e.ray.intersectTriangle(Pl,ca,Ll,!1,aa);if(a===null&&(Nl(ca.set(-.5,.5,0),uo,o,ho,s,r),uu.set(0,1),a=e.ray.intersectTriangle(Pl,Ll,ca,!1,aa),a===null))return;let l=e.ray.origin.distanceTo(aa);l<e.near||l>e.far||t.push({distance:l,point:aa.clone(),uv:Os.getInterpolation(aa,Pl,ca,Ll,pp,uu,mp,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Nl(i,e,t,n,s,r){fo.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(la.x=r*fo.x-s*fo.y,la.y=s*fo.x+r*fo.y):la.copy(fo),i.copy(e),i.x+=la.x,i.y+=la.y,i.applyMatrix4(Dm)}var Us=new U,du=new U,Dl=new U,Ul=new U,fr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Us)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Us.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Us.copy(this.origin).addScaledVector(this.direction,t),Us.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){du.copy(e).add(t).multiplyScalar(.5),Dl.copy(t).sub(e).normalize(),Ul.copy(this.origin).sub(du);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Dl),a=Ul.dot(this.direction),l=-Ul.dot(Dl),c=Ul.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let M=1/h;u*=M,d*=M,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(du).addScaledVector(Dl,d),f}intersectSphere(e,t){if(e.radius<0)return null;Us.subVectors(e.center,this.origin);let n=Us.dot(this.direction),s=Us.dot(Us)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Us)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,M=t.y-o.y,m=t.z-o.z,g=n.x-o.x,v=n.y-o.y,A=n.z-o.z,S=Math.abs(l),C=Math.abs(c),T=Math.abs(h),x,b,B,N,F,W,Z,P,Y,K,X,ye;if(S>=C&&S>=T?(B=l,W=u,Y=p,ye=g,l>=0?(x=c,b=h,N=d,F=f,Z=M,P=m,K=v,X=A):(x=h,b=c,N=f,F=d,Z=m,P=M,K=A,X=v)):C>=T?(B=c,W=d,Y=M,ye=v,c>=0?(x=h,b=l,N=f,F=u,Z=m,P=p,K=A,X=g):(x=l,b=h,N=u,F=f,Z=p,P=m,K=g,X=A)):(B=h,W=f,Y=m,ye=A,h>=0?(x=l,b=c,N=u,F=d,Z=p,P=M,K=g,X=v):(x=c,b=l,N=d,F=u,Z=M,P=p,K=v,X=g)),B===0)return null;let te=x/B,ce=b/B,me=1/B,Oe=N-te*W,He=F-ce*W,re=Z-te*Y,Ie=P-ce*Y,We=K-te*ye,et=X-ce*ye,de=We*Ie-et*re,Be=Oe*et-He*We,an=re*He-Ie*Oe;if(s){if(de<0||Be<0||an<0)return null}else if((de<0||Be<0||an<0)&&(de>0||Be>0||an>0))return null;let lt=de+Be+an;if(lt===0)return null;let Tt=me*(de*W+Be*Y+an*ye);return(lt>0?Tt<0:Tt>0)?null:this.at(Tt/lt,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wn=class extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.combine=Vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gp=new xt,Ar=new fr,Fl=new Ai,_p=new U,Ol=new U,Bl=new U,zl=new U,fu=new U,kl=new U,xp=new U,Gl=new U,ot=class extends bn{constructor(e=new tn,t=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){kl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(fu.fromBufferAttribute(u,e),o?kl.addScaledVector(fu,h):kl.addScaledVector(fu.sub(t),h))}t.add(kl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fl.copy(n.boundingSphere),Fl.applyMatrix4(r),Ar.copy(e.ray).recast(e.near),!(Fl.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Fl,_p)===null||Ar.origin.distanceToSquared(_p)>(e.far-e.near)**2))&&(gp.copy(r).invert(),Ar.copy(e.ray).applyMatrix4(gp),!(n.boundingBox!==null&&Ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,M=d.length;p<M;p++){let m=d[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,C=A;S<C;S+=3){let T=a.getX(S),x=a.getX(S+1),b=a.getX(S+2);s=Hl(this,g,e,n,c,h,u,T,x,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let m=p,g=M;m<g;m+=3){let v=a.getX(m),A=a.getX(m+1),S=a.getX(m+2);s=Hl(this,o,e,n,c,h,u,v,A,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,M=d.length;p<M;p++){let m=d[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,C=A;S<C;S+=3){let T=S,x=S+1,b=S+2;s=Hl(this,g,e,n,c,h,u,T,x,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=p,g=M;m<g;m+=3){let v=m,A=m+1,S=m+2;s=Hl(this,o,e,n,c,h,u,v,A,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function N0(i,e,t,n,s,r,o,a){let l;if(e.side===pi?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===vs,a),l===null)return null;Gl.copy(a),Gl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Gl);return c<t.near||c>t.far?null:{distance:c,point:Gl.clone(),object:i}}function Hl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ol),i.getVertexPosition(l,Bl),i.getVertexPosition(c,zl);let h=N0(i,e,t,n,Ol,Bl,zl,xp);if(h){let u=new U;Os.getBarycoord(xp,Ol,Bl,zl,u),s&&(h.uv=Os.getInterpolatedAttribute(s,a,l,c,u,new ge)),r&&(h.uv1=Os.getInterpolatedAttribute(r,a,l,c,u,new ge)),o&&(h.normal=Os.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new U,materialIndex:0};Os.getNormal(Ol,Bl,zl,d.normal),h.face=d,h.barycoord=u}return h}var ha=new on,yp=new on,vp=new on,D0=new on,Mp=new xt,Vl=new U,pu=new Ai,Sp=new xt,mu=new fr,Ta=class extends ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Su,this.bindMatrix=new xt,this.bindMatrixInverse=new xt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ui),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Vl),this.boundingBox.expandByPoint(Vl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ai),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Vl),this.boundingSphere.expandByPoint(Vl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pu.copy(this.boundingSphere),pu.applyMatrix4(s),e.ray.intersectsSphere(pu)!==!1&&(Sp.copy(s).invert(),mu.copy(e.ray).applyMatrix4(Sp),!(this.boundingBox!==null&&mu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,mu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new on,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Su?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ym?this.bindMatrixInverse.copy(this.bindMatrix).invert():st("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;yp.fromBufferAttribute(s.attributes.skinIndex,e),vp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ha.copy(t),t.set(0,0,0,0)):(ha.set(t.x,t.y,t.z,1),t.set(0,0,0)),ha.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=vp.getComponent(r);if(o!==0){let a=yp.getComponent(r);Mp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(D0.copy(ha).applyMatrix4(Mp),o)}}return t.isVector4&&(t.w=ha.w),t.applyMatrix4(this.bindMatrixInverse)}},Ao=class extends bn{constructor(){super(),this.isBone=!0,this.type="Bone"}},ts=class extends Fn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Un,h=Un,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bp=new xt,U0=new xt,Aa=class i{constructor(e=[],t=[]){this.uuid=as(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){st("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new xt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new xt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:U0;bp.multiplyMatrices(a,t[r]),bp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ts(t,e,e,_i,ri);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(st("Skeleton: No bone found with UUID:",r),o=new Ao),this.bones.push(o),this.boneInverses.push(new xt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Gs=class extends Ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},po=new xt,wp=new xt,Wl=[],Tp=new ui,F0=new xt,ua=new ot,da=new Ai,Ea=class extends ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,F0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,po),Tp.copy(e.boundingBox).applyMatrix4(po),this.boundingBox.union(Tp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,po),da.copy(e.boundingSphere).applyMatrix4(po),this.boundingSphere.union(da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ua.geometry=this.geometry,ua.material=this.material,ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(n),e.ray.intersectsSphere(da)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,po),wp.multiplyMatrices(n,po),ua.matrixWorld=wp,ua.raycast(e,Wl);for(let o=0,a=Wl.length;o<a;o++){let l=Wl[o];l.instanceId=r,l.object=this,t.push(l)}Wl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ts(new Float32Array(s*this.count),s,this.count,Bc,ri));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Er=new Ai,O0=new ge(.5,.5),Xl=new U,pr=class{constructor(e=new wi,t=new wi,n=new wi,s=new wi,r=new wi,o=new wi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],M=r[9],m=r[10],g=r[11],v=r[12],A=r[13],S=r[14],C=r[15];if(s[0].setComponents(c-o,f-h,g-p,C-v).normalize(),s[1].setComponents(c+o,f+h,g+p,C+v).normalize(),s[2].setComponents(c+a,f+u,g+M,C+A).normalize(),s[3].setComponents(c-a,f-u,g-M,C-A).normalize(),n)s[4].setComponents(l,d,m,S).normalize(),s[5].setComponents(c-l,f-d,g-m,C-S).normalize();else if(s[4].setComponents(c-l,f-d,g-m,C-S).normalize(),t===Wi)s[5].setComponents(c+l,f+d,g+m,C+S).normalize();else if(t===vo)s[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);let t=O0.distanceTo(e.center);return Er.radius=.7071067811865476+t,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Xl.x=s.normal.x>0?e.max.x:e.min.x,Xl.y=s.normal.y>0?e.max.y:e.min.y,Xl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ap=new xt,dc=class i{constructor(){this.coordinateSystem=Wi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Ap.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new pr),n[s].setFromProjectionMatrix(Ap,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new pr),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Eo=class extends di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fc=new U,pc=new U,Ep=new xt,fa=new fr,ql=new Ai,gu=new U,Rp=new U,Dr=class extends bn{constructor(e=new tn,t=new Eo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)fc.fromBufferAttribute(t,s-1),pc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=fc.distanceTo(pc);e.setAttribute("lineDistance",new en(n,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ql.copy(n.boundingSphere),ql.applyMatrix4(s),ql.radius+=r,e.ray.intersectsSphere(ql)===!1)return;Ep.copy(s).invert(),fa.copy(e.ray).applyMatrix4(Ep);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let M=f,m=p-1;M<m;M+=c){let g=h.getX(M),v=h.getX(M+1),A=Yl(this,e,fa,l,g,v,M);A&&t.push(A)}if(this.isLineLoop){let M=h.getX(p-1),m=h.getX(f),g=Yl(this,e,fa,l,M,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let M=f,m=p-1;M<m;M+=c){let g=Yl(this,e,fa,l,M,M+1,M);g&&t.push(g)}if(this.isLineLoop){let M=Yl(this,e,fa,l,p-1,f,p-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(fc.fromBufferAttribute(a,s),pc.fromBufferAttribute(a,r),t.distanceSqToSegment(fc,pc,gu,Rp)>n)return;gu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(gu);if(!(c<e.near||c>e.far))return{distance:c,point:Rp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Cp=new U,Ip=new U,Ra=class extends Dr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Cp.fromBufferAttribute(t,s),Ip.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Cp.distanceTo(Ip);e.setAttribute("lineDistance",new en(n,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ca=class extends Dr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ro=class extends di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pp=new xt,Eu=new fr,Kl=new Ai,Zl=new U,mr=class extends bn{constructor(e=new tn,t=new Ro){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kl.copy(n.boundingSphere),Kl.applyMatrix4(s),Kl.radius+=r,e.ray.intersectsSphere(Kl)===!1)return;Pp.copy(s).invert(),Eu.copy(e.ray).applyMatrix4(Pp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,M=f;p<M;p++){let m=c.getX(p);Zl.fromBufferAttribute(u,m),Lp(Zl,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,M=f;p<M;p++)Zl.fromBufferAttribute(u,p),Lp(Zl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lp(i,e,t,n,s,r,o){let a=Eu.distanceSqToPoint(i);if(a<t){let l=new U;Eu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ia=class extends Fn{constructor(e=[],t=Vr,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fi=class extends Fn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hs=class extends Fn{constructor(e,t,n=os,s,r,o,a=Un,l=Un,c,h=ks,u=1){if(h!==ks&&h!==Js)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Pa=class extends Hs{constructor(e,t=os,n=Vr,s,r,o=Un,a=Un,l,c=ks){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},La=class extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ei=class i extends tn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(u,2));function p(M,m,g,v,A,S,C,T,x,b,B){let N=S/x,F=C/b,W=S/2,Z=C/2,P=T/2,Y=x+1,K=b+1,X=0,ye=0,te=new U;for(let ce=0;ce<K;ce++){let me=ce*F-Z;for(let Oe=0;Oe<Y;Oe++){let He=Oe*N-W;te[M]=He*v,te[m]=me*A,te[g]=P,c.push(te.x,te.y,te.z),te[M]=0,te[m]=0,te[g]=T>0?1:-1,h.push(te.x,te.y,te.z),u.push(Oe/x),u.push(1-ce/b),X+=1}}for(let ce=0;ce<b;ce++)for(let me=0;me<x;me++){let Oe=d+me+Y*ce,He=d+me+Y*(ce+1),re=d+(me+1)+Y*(ce+1),Ie=d+(me+1)+Y*ce;l.push(Oe,He,Ie),l.push(He,re,Ie),ye+=6}a.addGroup(f,ye,B),f+=ye,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Na=class i extends tn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new U,h=new ge;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new en(o,3)),this.setAttribute("normal",new en(a,3)),this.setAttribute("uv",new en(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gn=class i extends tn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,M=[],m=n/2,g=0;v(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new en(u,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(f,2));function v(){let S=new U,C=new U,T=0,x=(t-e)/n;for(let b=0;b<=r;b++){let B=[],N=b/r,F=N*(t-e)+e;for(let W=0;W<=s;W++){let Z=W/s,P=Z*l+a,Y=Math.sin(P),K=Math.cos(P);C.x=F*Y,C.y=-N*n+m,C.z=F*K,u.push(C.x,C.y,C.z),S.set(Y,x,K).normalize(),d.push(S.x,S.y,S.z),f.push(Z,1-N),B.push(p++)}M.push(B)}for(let b=0;b<s;b++)for(let B=0;B<r;B++){let N=M[B][b],F=M[B+1][b],W=M[B+1][b+1],Z=M[B][b+1];(e>0||B!==0)&&(h.push(N,F,Z),T+=3),(t>0||B!==r-1)&&(h.push(F,W,Z),T+=3)}c.addGroup(g,T,0),g+=T}function A(S){let C=p,T=new ge,x=new U,b=0,B=S===!0?e:t,N=S===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*N,0),d.push(0,N,0),f.push(.5,.5),p++;let F=p;for(let W=0;W<=s;W++){let P=W/s*l+a,Y=Math.cos(P),K=Math.sin(P);x.x=B*K,x.y=m*N,x.z=B*Y,u.push(x.x,x.y,x.z),d.push(0,N,0),T.x=Y*.5+.5,T.y=K*.5*N+.5,f.push(T.x,T.y),p++}for(let W=0;W<s;W++){let Z=C+W,P=F+W;S===!0?h.push(P,P+1,Z):h.push(P+1,P,Z),b+=3}c.addGroup(g,b,S===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){st("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ge:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,s=[],r=[],o=[],a=new U,l=new xt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Lt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Lt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Co=class extends si{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ge){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},mc=class extends Co{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function fd(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Np=new U,Dp=new U,_u=new fd,xu=new fd,yu=new fd,gc=class extends si{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Dp.subVectors(s[0],s[1]).add(s[0]),c=Dp);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Np.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Np),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),M=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);M<1e-4&&(M=1),p<1e-4&&(p=M),m<1e-4&&(m=M),_u.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,M,m),xu.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,M,m),yu.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,M,m)}else this.curveType==="catmullrom"&&(_u.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),xu.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),yu.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(_u.calc(l),xu.calc(l),yu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Up(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function B0(i,e){let t=1-i;return t*t*e}function z0(i,e){return 2*(1-i)*i*e}function k0(i,e){return i*i*e}function xa(i,e,t,n){return B0(i,e)+z0(i,t)+k0(i,n)}function G0(i,e){let t=1-i;return t*t*t*e}function H0(i,e){let t=1-i;return 3*t*t*i*e}function V0(i,e){return 3*(1-i)*i*i*e}function W0(i,e){return i*i*i*e}function ya(i,e,t,n,s){return G0(i,e)+H0(i,t)+V0(i,n)+W0(i,s)}var Da=class extends si{constructor(e=new ge,t=new ge,n=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ya(e,s.x,r.x,o.x,a.x),ya(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_c=class extends si{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ya(e,s.x,r.x,o.x,a.x),ya(e,s.y,r.y,o.y,a.y),ya(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ua=class extends si{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xc=class extends si{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends si{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(xa(e,s.x,r.x,o.x),xa(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends si{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(xa(e,s.x,r.x,o.x),xa(e,s.y,r.y,o.y),xa(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Up(a,l.x,c.x,h.x,u.x),Up(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ge().fromArray(s))}return this}},yc=Object.freeze({__proto__:null,ArcCurve:mc,CatmullRomCurve3:gc,CubicBezierCurve:Da,CubicBezierCurve3:_c,EllipseCurve:Co,LineCurve:Ua,LineCurve3:xc,QuadraticBezierCurve:Fa,QuadraticBezierCurve3:Oa,SplineCurve:Ba}),vc=class extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new yc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},za=class extends vc{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ua(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Fa(this.currentPoint.clone(),new ge(e,t),new ge(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Da(this.currentPoint.clone(),new ge(e,t),new ge(n,s),new ge(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ba(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Co(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ns=class extends za{constructor(e){super(e),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new za().fromJSON(s))}return this}};function X0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Um(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=J0(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,u=l;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ka(r,o,t,a,l,c,0),o}function Um(i,e,t,n,s){let r;if(s===a_(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Fp(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Fp(o/n|0,i[o],i[o+1],r);return r&&Io(r,r.next)&&(Ha(r),r=r.next),r}function Ur(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Io(t,t.next)||Ln(t.prev,t,t.next)===0)){if(Ha(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ka(i,e,t,n,s,r,o){if(!i)return;!o&&r&&t_(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Y0(i,n,s,r):q0(i)){e.push(l.i,i.i,c.i),Ha(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=K0(Ur(i),e),ka(i,e,t,n,s,r,2)):o===2&&Z0(i,e,t,n,s,r):ka(Ur(i),e,t,n,s,r,1);break}}}function q0(i){let e=i.prev,t=i,n=i.next;if(Ln(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&pa(s,a,r,l,o,c,p.x,p.y)&&Ln(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Y0(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ln(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),M=Math.max(a,l,c),m=Math.max(h,u,d),g=Ru(f,p,e,t,n),v=Ru(M,m,e,t,n),A=i.prevZ,S=i.nextZ;for(;A&&A.z>=g&&S&&S.z<=v;){if(A.x>=f&&A.x<=M&&A.y>=p&&A.y<=m&&A!==s&&A!==o&&pa(a,h,l,u,c,d,A.x,A.y)&&Ln(A.prev,A,A.next)>=0||(A=A.prevZ,S.x>=f&&S.x<=M&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&pa(a,h,l,u,c,d,S.x,S.y)&&Ln(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;A&&A.z>=g;){if(A.x>=f&&A.x<=M&&A.y>=p&&A.y<=m&&A!==s&&A!==o&&pa(a,h,l,u,c,d,A.x,A.y)&&Ln(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;S&&S.z<=v;){if(S.x>=f&&S.x<=M&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&pa(a,h,l,u,c,d,S.x,S.y)&&Ln(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function K0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Io(n,s)&&Om(n,t,t.next,s)&&Ga(n,s)&&Ga(s,n)&&(e.push(n.i,t.i,s.i),Ha(t),Ha(t.next),t=i=s),t=t.next}while(t!==i);return Ur(t)}function Z0(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&s_(o,a)){let l=Bm(o,a);o=Ur(o,o.next),l=Ur(l,l.next),ka(o,e,t,n,s,r,0),ka(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function J0(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Um(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(i_(c))}s.sort(j0);for(let r=0;r<s.length;r++)t=$0(s[r],t);return t}function j0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function $0(i,e){let t=Q0(i,e);if(!t)return e;let n=Bm(t,i);return Ur(n,n.next),Ur(t,t.next)}function Q0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Io(i,t))return t;do{if(Io(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Fm(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Ga(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&e_(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function e_(i,e){return Ln(i.prev,i,e.prev)<0&&Ln(e.next,i,i.next)<0}function t_(i,e,t,n){let s=i;do s.z===0&&(s.z=Ru(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,n_(s)}function n_(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Ru(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function i_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Fm(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function pa(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Fm(i,e,t,n,s,r,o,a)}function s_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!r_(i,e)&&(Ga(i,e)&&Ga(e,i)&&o_(i,e)&&(Ln(i.prev,i,e.prev)||Ln(i,e.prev,e))||Io(i,e)&&Ln(i.prev,i,i.next)>0&&Ln(e.prev,e,e.next)>0)}function Ln(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Io(i,e){return i.x===e.x&&i.y===e.y}function Om(i,e,t,n){let s=jl(Ln(i,e,t)),r=jl(Ln(i,e,n)),o=jl(Ln(t,n,i)),a=jl(Ln(t,n,e));return!!(s!==r&&o!==a||s===0&&Jl(i,t,e)||r===0&&Jl(i,n,e)||o===0&&Jl(t,i,n)||a===0&&Jl(t,e,n))}function Jl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function jl(i){return i>0?1:i<0?-1:0}function r_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Om(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ga(i,e){return Ln(i.prev,i,i.next)<0?Ln(i,e,i.next)>=0&&Ln(i,i.prev,e)>=0:Ln(i,e,i.prev)<0||Ln(i,i.next,e)<0}function o_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Bm(i,e){let t=Cu(i.i,i.x,i.y),n=Cu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Fp(i,e,t,n){let s=Cu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ha(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Cu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function a_(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Iu=class{static triangulate(e,t,n=2){return X0(e,t,n)}},ms=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Op(e),Bp(n,e);let o=e.length;t.forEach(Op);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Bp(n,t[l]);let a=Iu.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Op(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var gr=class i extends tn{constructor(e=new ns([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new en(s,3)),this.setAttribute("uv",new en(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:l_,A,S=!1,C,T,x,b;if(g){A=g.getSpacedPoints(h),S=!0,d=!1;let pe=g.isCatmullRomCurve3?g.closed:!1;C=g.computeFrenetFrames(h,pe),T=new U,x=new U,b=new U}d||(m=0,f=0,p=0,M=0);let B=a.extractPoints(c),N=B.shape,F=B.holes;if(!ms.isClockWise(N)){N=N.reverse();for(let pe=0,oe=F.length;pe<oe;pe++){let Pe=F[pe];ms.isClockWise(Pe)&&(F[pe]=Pe.reverse())}}function Z(pe){let Pe=10000000000000001e-36,Ye=pe[0];for(let Ue=1;Ue<=pe.length;Ue++){let gt=Ue%pe.length,Je=pe[gt],tt=Je.x-Ye.x,rt=Je.y-Ye.y,It=tt*tt+rt*rt,G=Math.max(Math.abs(Je.x),Math.abs(Je.y),Math.abs(Ye.x),Math.abs(Ye.y)),qt=Pe*G*G;if(It<=qt){pe.splice(gt,1),Ue--;continue}Ye=Je}}Z(N),F.forEach(Z);let P=F.length,Y=N;for(let pe=0;pe<P;pe++){let oe=F[pe];N=N.concat(oe)}function K(pe,oe,Pe){return oe||_t("ExtrudeGeometry: vec does not exist"),pe.clone().addScaledVector(oe,Pe)}let X=N.length;function ye(pe,oe,Pe){let Ye,Ue,gt,Je=pe.x-oe.x,tt=pe.y-oe.y,rt=Pe.x-pe.x,It=Pe.y-pe.y,G=Je*Je+tt*tt,qt=Je*It-tt*rt;if(Math.abs(qt)>Number.EPSILON){let ut=Math.sqrt(G),At=Math.sqrt(rt*rt+It*It),Ne=oe.x-tt/ut,sn=oe.y+Je/ut,at=Pe.x-It/At,ct=Pe.y+rt/At,I=((at-Ne)*It-(ct-sn)*rt)/(Je*It-tt*rt);Ye=Ne+Je*I-pe.x,Ue=sn+tt*I-pe.y;let w=Ye*Ye+Ue*Ue;if(w<=2)return new ge(Ye,Ue);gt=Math.sqrt(w/2)}else{let ut=!1;Je>Number.EPSILON?rt>Number.EPSILON&&(ut=!0):Je<-Number.EPSILON?rt<-Number.EPSILON&&(ut=!0):Math.sign(tt)===Math.sign(It)&&(ut=!0),ut?(Ye=-tt,Ue=Je,gt=Math.sqrt(G)):(Ye=Je,Ue=tt,gt=Math.sqrt(G/2))}return new ge(Ye/gt,Ue/gt)}let te=[];for(let pe=0,oe=Y.length,Pe=oe-1,Ye=pe+1;pe<oe;pe++,Pe++,Ye++)Pe===oe&&(Pe=0),Ye===oe&&(Ye=0),te[pe]=ye(Y[pe],Y[Pe],Y[Ye]);let ce=[],me,Oe=te.concat();for(let pe=0,oe=P;pe<oe;pe++){let Pe=F[pe];me=[];for(let Ye=0,Ue=Pe.length,gt=Ue-1,Je=Ye+1;Ye<Ue;Ye++,gt++,Je++)gt===Ue&&(gt=0),Je===Ue&&(Je=0),me[Ye]=ye(Pe[Ye],Pe[gt],Pe[Je]);ce.push(me),Oe=Oe.concat(me)}let He;if(m===0)He=ms.triangulateShape(Y,F);else{let pe=[],oe=[];for(let Pe=0;Pe<m;Pe++){let Ye=Pe/m,Ue=f*Math.cos(Ye*Math.PI/2),gt=p*Math.sin(Ye*Math.PI/2)+M;for(let Je=0,tt=Y.length;Je<tt;Je++){let rt=K(Y[Je],te[Je],gt);Be(rt.x,rt.y,-Ue),Ye===0&&pe.push(rt)}for(let Je=0,tt=P;Je<tt;Je++){let rt=F[Je];me=ce[Je];let It=[];for(let G=0,qt=rt.length;G<qt;G++){let ut=K(rt[G],me[G],gt);Be(ut.x,ut.y,-Ue),Ye===0&&It.push(ut)}Ye===0&&oe.push(It)}}He=ms.triangulateShape(pe,oe)}let re=He.length,Ie=p+M;for(let pe=0;pe<X;pe++){let oe=d?K(N[pe],Oe[pe],Ie):N[pe];S?(x.copy(C.normals[0]).multiplyScalar(oe.x),T.copy(C.binormals[0]).multiplyScalar(oe.y),b.copy(A[0]).add(x).add(T),Be(b.x,b.y,b.z)):Be(oe.x,oe.y,0)}for(let pe=1;pe<=h;pe++)for(let oe=0;oe<X;oe++){let Pe=d?K(N[oe],Oe[oe],Ie):N[oe];S?(x.copy(C.normals[pe]).multiplyScalar(Pe.x),T.copy(C.binormals[pe]).multiplyScalar(Pe.y),b.copy(A[pe]).add(x).add(T),Be(b.x,b.y,b.z)):Be(Pe.x,Pe.y,u/h*pe)}for(let pe=m-1;pe>=0;pe--){let oe=pe/m,Pe=f*Math.cos(oe*Math.PI/2),Ye=p*Math.sin(oe*Math.PI/2)+M;for(let Ue=0,gt=Y.length;Ue<gt;Ue++){let Je=K(Y[Ue],te[Ue],Ye);Be(Je.x,Je.y,u+Pe)}for(let Ue=0,gt=F.length;Ue<gt;Ue++){let Je=F[Ue];me=ce[Ue];for(let tt=0,rt=Je.length;tt<rt;tt++){let It=K(Je[tt],me[tt],Ye);S?Be(It.x,It.y+A[h-1].y,A[h-1].x+Pe):Be(It.x,It.y,u+Pe)}}}We(),et();function We(){let pe=s.length/3;if(d){let oe=0,Pe=X*oe;for(let Ye=0;Ye<re;Ye++){let Ue=He[Ye];an(Ue[2]+Pe,Ue[1]+Pe,Ue[0]+Pe)}oe=h+m*2,Pe=X*oe;for(let Ye=0;Ye<re;Ye++){let Ue=He[Ye];an(Ue[0]+Pe,Ue[1]+Pe,Ue[2]+Pe)}}else{for(let oe=0;oe<re;oe++){let Pe=He[oe];an(Pe[2],Pe[1],Pe[0])}for(let oe=0;oe<re;oe++){let Pe=He[oe];an(Pe[0]+X*h,Pe[1]+X*h,Pe[2]+X*h)}}n.addGroup(pe,s.length/3-pe,0)}function et(){let pe=s.length/3,oe=0;de(Y,oe),oe+=Y.length;for(let Pe=0,Ye=F.length;Pe<Ye;Pe++){let Ue=F[Pe];de(Ue,oe),oe+=Ue.length}n.addGroup(pe,s.length/3-pe,1)}function de(pe,oe){let Pe=pe.length;for(;--Pe>=0;){let Ye=Pe,Ue=Pe-1;Ue<0&&(Ue=pe.length-1);for(let gt=0,Je=h+m*2;gt<Je;gt++){let tt=X*gt,rt=X*(gt+1),It=oe+Ye+tt,G=oe+Ue+tt,qt=oe+Ue+rt,ut=oe+Ye+rt;lt(It,G,qt,ut)}}}function Be(pe,oe,Pe){l.push(pe),l.push(oe),l.push(Pe)}function an(pe,oe,Pe){Tt(pe),Tt(oe),Tt(Pe);let Ye=s.length/3,Ue=v.generateTopUV(n,s,Ye-3,Ye-2,Ye-1);mt(Ue[0]),mt(Ue[1]),mt(Ue[2])}function lt(pe,oe,Pe,Ye){Tt(pe),Tt(oe),Tt(Ye),Tt(oe),Tt(Pe),Tt(Ye);let Ue=s.length/3,gt=v.generateSideWallUV(n,s,Ue-6,Ue-3,Ue-2,Ue-1);mt(gt[0]),mt(gt[1]),mt(gt[3]),mt(gt[1]),mt(gt[2]),mt(gt[3])}function Tt(pe){s.push(l[pe*3+0]),s.push(l[pe*3+1]),s.push(l[pe*3+2])}function mt(pe){r.push(pe.x),r.push(pe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return c_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new yc[s.type]().fromJSON(s)),new i(n,e.options)}},l_={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ge(r,o),new ge(a,l),new ge(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],M=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ge(o,1-l),new ge(c,1-u),new ge(d,1-p),new ge(M,1-g)]:[new ge(a,1-l),new ge(h,1-u),new ge(f,1-p),new ge(m,1-g)]}};function c_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Fr=class i extends tn{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Lt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new U,d=new ge,f=new U,p=new U,M=new U,m=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,f.x=g*1,f.y=-m,f.z=g*0,M.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:M.normalize(),l.push(M.x,M.y,M.z);break;default:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=M.x,f.y+=M.y,f.z+=M.z,f.normalize(),l.push(f.x,f.y,f.z),M.copy(p)}for(let v=0;v<=t;v++){let A=n+v*h*s,S=Math.sin(A),C=Math.cos(A);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*S,u.y=e[T].y,u.z=e[T].x*C,o.push(u.x,u.y,u.z),d.x=v/t,d.y=T/(e.length-1),a.push(d.x,d.y);let x=l[3*T+0]*S,b=l[3*T+1],B=l[3*T+0]*C;c.push(x,b,B)}}for(let v=0;v<t;v++)for(let A=0;A<e.length-1;A++){let S=A+v*e.length,C=S,T=S+e.length,x=S+e.length+1,b=S+1;r.push(C,T,b),r.push(x,b,T)}this.setIndex(r),this.setAttribute("position",new en(o,3)),this.setAttribute("uv",new en(a,2)),this.setAttribute("normal",new en(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Nt=class i extends tn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],M=[],m=[];for(let g=0;g<h;g++){let v=g*d-o;for(let A=0;A<c;A++){let S=A*u-r;p.push(S,-v,0),M.push(0,0,1),m.push(A/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let A=v+c*g,S=v+c*(g+1),C=v+1+c*(g+1),T=v+1+c*g;f.push(A,S,T),f.push(S,C,T)}this.setIndex(f),this.setAttribute("position",new en(p,3)),this.setAttribute("normal",new en(M,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Va=class i extends tn{constructor(e=new ns([new ge(0,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new en(s,3)),this.setAttribute("normal",new en(r,3)),this.setAttribute("uv",new en(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,p=d.holes;ms.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let v=p[m];ms.isClockWise(v)===!0&&(p[m]=v.reverse())}let M=ms.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let v=p[m];f=f.concat(v)}for(let m=0,g=f.length;m<g;m++){let v=f[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,g=M.length;m<g;m++){let v=M[m],A=v[0]+u,S=v[1]+u,C=v[2]+u;n.push(A,S,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return h_(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function h_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var is=class i extends tn{constructor(e=new Oa(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new U,l=new U,c=new ge,h=new U,u=[],d=[],f=[],p=[];M(),this.setIndex(p),this.setAttribute("position",new en(u,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(f,2));function M(){for(let A=0;A<t;A++)m(A);m(r===!1?t:0),v(),g()}function m(A){h=e.getPointAt(A/t,h);let S=o.normals[A],C=o.binormals[A];for(let T=0;T<=s;T++){let x=T/s*Math.PI*2,b=Math.sin(x),B=-Math.cos(x);l.x=B*S.x+b*C.x,l.y=B*S.y+b*C.y,l.z=B*S.z+b*C.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let A=1;A<=t;A++)for(let S=1;S<=s;S++){let C=(s+1)*(A-1)+(S-1),T=(s+1)*A+(S-1),x=(s+1)*A+S,b=(s+1)*(A-1)+S;p.push(C,T,b),p.push(T,x,b)}}function v(){for(let A=0;A<=t;A++)for(let S=0;S<=s;S++)c.x=A/t,c.y=S/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new yc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function qr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(zp(s))s.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(zp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function oi(i){let e={};for(let t=0;t<i.length;t++){let n=qr(i[t]);for(let s in n)e[s]=n[s]}return e}function zp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function u_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}var zm={clone:qr,merge:oi},d_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fi=class extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d_,this.fragmentShader=f_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=u_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ge().setHex(s.value);break;case"v2":this.uniforms[n].value=new ge().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new on().fromArray(s.value);break;case"m3":this.uniforms[n].value=new wt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new xt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Mc=class extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pt=class extends di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xh,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xn=class extends pt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Rr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Rr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Po=class extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sc=class extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ar(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ma(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function p_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function kp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function m_(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var xs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},bc=class extends xs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wu,endingEnd:wu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tu:r=e,a=2*t-n;break;case Au:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tu:o=e,l=2*n-t;break;case Au:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),M=p*p,m=M*p,g=-d*m+2*d*M-d*p,v=(1+d)*m+(-1.5-2*d)*M+(-.5+d)*p+1,A=(-1-f)*m+(1.5+f)*M+.5*p,S=f*m-f*M;for(let C=0;C!==a;++C)r[C]=g*o[h+C]+v*o[c+C]+A*o[l+C]+S*o[u+C];return r}},wc=class extends xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Tc=class extends xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ac=class extends xs{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(s-t),M=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*M+o[l+m]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let M=o[c+p],m=o[l+p],g=f*d+p*2,v=u[g],A=u[g+1],S=e*d+p*2,C=h[S],T=h[S+1],x=__(n,t,v,C,s);r[p]=km(x,M,A,T,m)}return r}};function km(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function g_(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function __(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=km(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=g_(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Ri=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ar(t,this.TimeBufferType),this.values=ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ar(e.times,Array),values:ar(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ma(e.settings)&&(n.settings={inTangents:ar(e.settings.inTangents,Array),outTangents:ar(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ac(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Cr:t=this.InterpolantFactoryMethodDiscrete;break;case Ir:t=this.InterpolantFactoryMethodLinear;break;case ec:t=this.InterpolantFactoryMethodSmooth;break;case bu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return st("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return ec;case this.InterpolantFactoryMethodBezier:return bu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;ma(this.settings)&&(Gp(this.settings.inTangents,e),Gp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ma(this.settings)&&(Hp(this.settings.inTangents,e),Hp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(_t("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(_t("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){_t("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){_t("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&$g(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){_t("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ec,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let M=t[u+p];if(M!==t[d+p]||M!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ma(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Gp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Hp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Ri.prototype.ValueTypeName="";Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=Ir;var Vs=class extends Ri{constructor(e,t,n){super(e,t,n)}};Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=Cr;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}};Wa.prototype.ValueTypeName="color";var Ws=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}};Ws.prototype.ValueTypeName="number";var Ec=class extends xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)hi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xs=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ec(this.times,this.values,this.getValueSize(),e)}};Xs.prototype.ValueTypeName="quaternion";Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var qs=class extends Ri{constructor(e,t,n){super(e,t,n)}};qs.prototype.ValueTypeName="string";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=Cr;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;var _r=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}};_r.prototype.ValueTypeName="vector";var Xa=class{constructor(e="",t=-1,n=[],s=vm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=as(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(y_(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Ri.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=p_(l);l=kp(l,1,h),c=kp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ws(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function x_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ws;case"vector":case"vector2":case"vector3":case"vector4":return _r;case"color":return Wa;case"quaternion":return Xs;case"bool":case"boolean":return Vs;case"string":return qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function y_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=x_(i.type);if(i.times===void 0){let n=[],s=[];m_(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),ma(i.settings)&&(t.settings={inTangents:ar(i.settings.inTangents,Float32Array),outTangents:ar(i.settings.outTangents,Float32Array)}),t}var gs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Vp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Vp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Vp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Rc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gm=new Rc,ss=class{constructor(e){this.manager=e!==void 0?e:Gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ss.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fs={},Pu=class extends Error{constructor(e,t){super(e),this.response=t}},Or=class extends ss{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=gs.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Fs[e]!==void 0){Fs[e].push({onLoad:t,onProgress:n,onError:s});return}Fs[e]=[],Fs[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&st("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Fs[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,M=0,m=new ReadableStream({start(g){v();function v(){u.read().then(({done:A,value:S})=>{if(A)g.close();else{M+=S.byteLength;let C=new ProgressEvent("progress",{lengthComputable:p,loaded:M,total:f});for(let T=0,x=h.length;T<x;T++){let b=h[T];b.onProgress&&b.onProgress(C)}g.enqueue(S),v()}},A=>{g.error(A)})}}});return new Response(m)}else throw new Pu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{gs.add(`file:${e}`,c);let h=Fs[e];delete Fs[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Fs[e];if(h===void 0)throw this.manager.itemError(e),c;delete Fs[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var mo=new WeakMap,Cc=class extends ss{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=gs.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=mo.get(o);u===void 0&&(u=[],mo.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Mo("img");function l(){h(),t&&t(this);let u=mo.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}mo.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),gs.remove(`image:${e}`);let d=mo.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}mo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),gs.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var qa=class extends ss{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new ts,a=new Or(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){s!==void 0?s(h):_t(h);return}r._applyTexData(o,c),t&&t(o,c)},n,s),o}createDataTexture(e){let t=new ts;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Ti,e.wrapT=t.wrapT!==void 0?t.wrapT:Ti,e.magFilter=t.magFilter!==void 0?t.magFilter:_n,e.minFilter=t.minFilter!==void 0?t.minFilter:_n,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=mi),t.mipmapCount===1&&(e.minFilter=_n),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Br=class extends ss{constructor(e){super(e)}load(e,t,n,s){let r=new Fn,o=new Cc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},zr=class extends bn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Lo=class extends zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},vu=new xt,Wp=new U,Xp=new U,No=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=Ci,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Wp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wp),Xp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){vu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(vu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===vo||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},$l=new U,Ql=new hi,ps=new U,Ya=class extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($l,Ql,ps),ps.x===1&&ps.y===1&&ps.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,Ql,ps.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose($l,Ql,ps),ps.x===1&&ps.y===1&&ps.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,Ql,ps.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},or=new U,qp=new ge,Yp=new ge,Dn=class extends Ya{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,t){return this.getViewBounds(e,qp,Yp),t.subVectors(Yp,qp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ga*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lu=class extends No{constructor(){super(new Dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Pr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ys=class extends zr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Lu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Nu=class extends No{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0}},Ks=class extends zr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},kr=class extends Ya{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Du=class extends No{constructor(){super(new kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ys=class extends zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new Du}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Zs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Mu=new WeakMap,Ka=class extends ss{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&st("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&st("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=gs.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Mu.has(o)===!0?(s&&s(Mu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return gs.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Mu.set(l,c),gs.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});gs.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var go=-90,_o=1,Do=class extends bn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dn(go,_o,e,t);s.layers=this.layers,this.add(s);let r=new Dn(go,_o,e,t);r.layers=this.layers,this.add(r);let o=new Dn(go,_o,e,t);o.layers=this.layers,this.add(o);let a=new Dn(go,_o,e,t);a.layers=this.layers,this.add(a);let l=new Dn(go,_o,e,t);l.layers=this.layers,this.add(l);let c=new Dn(go,_o,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ic=class extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var md="\\[\\]\\.:\\/",v_=new RegExp("["+md+"]","g"),gd="[^"+md+"]",M_="[^"+md.replace("\\.","")+"]",S_=/((?:WC+[\/:])*)/.source.replace("WC",gd),b_=/(WCOD+)?/.source.replace("WCOD",M_),w_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gd),T_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gd),A_=new RegExp("^"+S_+b_+w_+T_+"$"),E_=["material","materials","bones","map"],Uu=class{constructor(e,t,n){let s=n||gn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(v_,"")}static parseTrackName(e){let t=A_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);E_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){st("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){_t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){_t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){_t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){_t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){_t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){_t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){_t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;_t("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){_t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){_t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gn.Composite=Uu;gn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gn.prototype.GetterByBindingType=[gn.prototype._getValue_direct,gn.prototype._getValue_array,gn.prototype._getValue_arrayElement,gn.prototype._getValue_toArray];gn.prototype.SetterByBindingTypeAndVersioning=[[gn.prototype._setValue_direct,gn.prototype._setValue_direct_setNeedsUpdate,gn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_array,gn.prototype._setValue_array_setNeedsUpdate,gn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_arrayElement,gn.prototype._setValue_arrayElement_setNeedsUpdate,gn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_fromArray,gn.prototype._setValue_fromArray_setNeedsUpdate,gn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kS=new Float32Array(1);var Kp=new xt,Uo=class{constructor(e,t,n=0,s=1/0){this.ray=new fr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):_t("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kp),this}intersectObject(e,t=!0,n=[]){return Fu(e,this,n,t),n.sort(Zp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Fu(e[s],this,n,t);return n.sort(Zp),n}};function Zp(i,e){return i.distance-e.distance}function Fu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Fu(r[o],e,t,!0)}}var Sd=class Sd{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Sd.prototype.isMatrix2=!0;var Ou=Sd;function _d(i,e,t,n){let s=R_(n);switch(t){case td:return i*e;case Bc:return i*e/s.components*s.byteLength;case zc:return i*e/s.components*s.byteLength;case yr:return i*e*2/s.components*s.byteLength;case kc:return i*e*2/s.components*s.byteLength;case nd:return i*e*3/s.components*s.byteLength;case _i:return i*e*4/s.components*s.byteLength;case Gc:return i*e*4/s.components*s.byteLength;case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ja:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vc:case Xc:return Math.max(i,16)*Math.max(e,8)/4;case Hc:case Wc:return Math.max(i,8)*Math.max(e,8)/2;case qc:case Yc:case Zc:case Jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Kc:case Qa:case jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case th:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ih:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case rh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case oh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ah:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case dh:case fh:case ph:return Math.ceil(i/4)*Math.ceil(e/4)*16;case mh:case gh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case el:case _h:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function R_(i){switch(i){case Ci:case ju:return{byteLength:1,components:1};case Go:case $u:case gi:return{byteLength:2,components:1};case Fc:case Oc:return{byteLength:2,components:4};case os:case Uc:case ri:return{byteLength:4,components:1};case Qu:case ed:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function cg(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function I_(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],M=u[f];M.start<=p.start+p.count+1?p.count=Math.max(p.count,M.start+M.count-p.start):(++d,u[d]=M)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let M=u[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var P_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L_=`#ifdef USE_ALPHAHASH
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
#endif`,N_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O_=`#ifdef USE_AOMAP
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
#endif`,B_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z_=`#ifdef USE_BATCHING
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
#endif`,k_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W_=`#ifdef USE_IRIDESCENCE
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
#endif`,X_=`#ifdef USE_BUMPMAP
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
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,j_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Q_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ex=`#define PI 3.141592653589793
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
} // validated`,tx=`vec3 transformedNormal = objectNormal;
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
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",ax=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
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
#endif`,ux=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,px=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_x=`#ifdef USE_GRADIENTMAP
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
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Sx=`#ifdef USE_ENVMAP
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
#endif`,bx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
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
#endif`,Rx=`uniform sampler2D dfgLUT;
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
}`,Cx=`
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
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
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
#endif`,Px=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lx=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Nx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kx=`#if defined( USE_POINTS_UV )
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
#endif`,Gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wx=`#if defined( USE_MORPHCOLORS )
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
#endif`,Xx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`#ifdef USE_MORPHTARGETS
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
#endif`,Yx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qx=`#ifdef USE_NORMALMAP
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
#endif`,ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ry=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,my=`float getShadowMask() {
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
}`,gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_y=`#ifdef USE_SKINNING
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
#endif`,xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yy=`#ifdef USE_SKINNING
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
#endif`,vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,My=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,by=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wy=`#ifdef USE_TRANSMISSION
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
#endif`,Ty=`#ifdef USE_TRANSMISSION
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
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Iy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Py=`uniform sampler2D t2D;
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`uniform float backgroundBlurriness;
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`#include <common>
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
}`,Oy=`#if DEPTH_PACKING == 3200
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
}`,By=`#define DISTANCE
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
}`,zy=`#define DISTANCE
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
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`uniform float scale;
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
}`,Vy=`uniform vec3 diffuse;
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
}`,Wy=`#include <common>
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
}`,Xy=`uniform vec3 diffuse;
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
}`,qy=`#define LAMBERT
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
}`,Yy=`#define LAMBERT
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
}`,Ky=`#define MATCAP
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
}`,Zy=`#define MATCAP
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
}`,Jy=`#define NORMAL
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
}`,jy=`#define NORMAL
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
}`,$y=`#define PHONG
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
}`,Qy=`#define PHONG
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
}`,ev=`#define STANDARD
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
}`,tv=`#define STANDARD
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
}`,nv=`#define TOON
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
}`,iv=`#define TOON
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
}`,sv=`uniform float size;
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
}`,rv=`uniform vec3 diffuse;
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
}`,ov=`#include <common>
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
}`,av=`uniform vec3 color;
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
}`,lv=`uniform float rotation;
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
}`,cv=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:P_,alphahash_pars_fragment:L_,alphamap_fragment:N_,alphamap_pars_fragment:D_,alphatest_fragment:U_,alphatest_pars_fragment:F_,aomap_fragment:O_,aomap_pars_fragment:B_,batching_pars_vertex:z_,batching_vertex:k_,begin_vertex:G_,beginnormal_vertex:H_,bsdfs:V_,iridescence_fragment:W_,bumpmap_pars_fragment:X_,clipping_planes_fragment:q_,clipping_planes_pars_fragment:Y_,clipping_planes_pars_vertex:K_,clipping_planes_vertex:Z_,color_fragment:J_,color_pars_fragment:j_,color_pars_vertex:$_,color_vertex:Q_,common:ex,defaultnormal_vertex:tx,displacementmap_pars_vertex:nx,displacementmap_vertex:ix,emissivemap_fragment:sx,emissivemap_pars_fragment:rx,colorspace_fragment:ox,colorspace_pars_fragment:ax,envmap_fragment:lx,envmap_common_pars_fragment:cx,envmap_pars_fragment:hx,envmap_pars_vertex:ux,envmap_physical_pars_fragment:Sx,envmap_vertex:dx,fog_vertex:fx,fog_pars_vertex:px,fog_fragment:mx,fog_pars_fragment:gx,gradientmap_pars_fragment:_x,lightmap_pars_fragment:xx,lights_lambert_fragment:yx,lights_lambert_pars_fragment:vx,lights_pars_begin:Mx,lights_toon_fragment:bx,lights_toon_pars_fragment:wx,lights_phong_fragment:Tx,lights_phong_pars_fragment:Ax,lights_physical_fragment:Ex,lights_physical_pars_fragment:Rx,lights_fragment_begin:Cx,lights_fragment_maps:Ix,lights_fragment_end:Px,lightprobes_pars_fragment:Lx,logdepthbuf_fragment:Nx,logdepthbuf_pars_fragment:Dx,logdepthbuf_pars_vertex:Ux,logdepthbuf_vertex:Fx,map_fragment:Ox,map_pars_fragment:Bx,map_particle_fragment:zx,map_particle_pars_fragment:kx,metalnessmap_fragment:Gx,metalnessmap_pars_fragment:Hx,morphinstance_vertex:Vx,morphcolor_vertex:Wx,morphnormal_vertex:Xx,morphtarget_pars_vertex:qx,morphtarget_vertex:Yx,normal_fragment_begin:Kx,normal_fragment_maps:Zx,normal_pars_fragment:Jx,normal_pars_vertex:jx,normal_vertex:$x,normalmap_pars_fragment:Qx,clearcoat_normal_fragment_begin:ey,clearcoat_normal_fragment_maps:ty,clearcoat_pars_fragment:ny,iridescence_pars_fragment:iy,opaque_fragment:sy,packing:ry,premultiplied_alpha_fragment:oy,project_vertex:ay,dithering_fragment:ly,dithering_pars_fragment:cy,roughnessmap_fragment:hy,roughnessmap_pars_fragment:uy,shadowmap_pars_fragment:dy,shadowmap_pars_vertex:fy,shadowmap_vertex:py,shadowmask_pars_fragment:my,skinbase_vertex:gy,skinning_pars_vertex:_y,skinning_vertex:xy,skinnormal_vertex:yy,specularmap_fragment:vy,specularmap_pars_fragment:My,tonemapping_fragment:Sy,tonemapping_pars_fragment:by,transmission_fragment:wy,transmission_pars_fragment:Ty,uv_pars_fragment:Ay,uv_pars_vertex:Ey,uv_vertex:Ry,worldpos_vertex:Cy,background_vert:Iy,background_frag:Py,backgroundCube_vert:Ly,backgroundCube_frag:Ny,cube_vert:Dy,cube_frag:Uy,depth_vert:Fy,depth_frag:Oy,distance_vert:By,distance_frag:zy,equirect_vert:ky,equirect_frag:Gy,linedashed_vert:Hy,linedashed_frag:Vy,meshbasic_vert:Wy,meshbasic_frag:Xy,meshlambert_vert:qy,meshlambert_frag:Yy,meshmatcap_vert:Ky,meshmatcap_frag:Zy,meshnormal_vert:Jy,meshnormal_frag:jy,meshphong_vert:$y,meshphong_frag:Qy,meshphysical_vert:ev,meshphysical_frag:tv,meshtoon_vert:nv,meshtoon_frag:iv,points_vert:sv,points_frag:rv,shadow_vert:ov,shadow_frag:av,sprite_vert:lv,sprite_frag:cv},qe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},bs={basic:{uniforms:oi([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:oi([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:oi([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:oi([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:oi([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:oi([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:oi([qe.points,qe.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:oi([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:oi([qe.common,qe.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:oi([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:oi([qe.sprite,qe.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distance:{uniforms:oi([qe.common,qe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distance_vert,fragmentShader:Ut.distance_frag},shadow:{uniforms:oi([qe.lights,qe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};bs.physical={uniforms:oi([bs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var Mh={r:0,b:0,g:0},hv=new xt,hg=new wt;hg.set(-1,0,0,0,1,0,0,0,1);function uv(i,e,t,n,s,r){let o=new Ge(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){let S=v.backgroundBlurriness>0;A=e.get(A,S)}return A}function p(v){let A=!1,S=f(v);S===null?m(o,a):S&&S.isColor&&(m(S,1),A=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(v,A){let S=f(A);S&&S.isCubeTexture?(c===void 0&&(c=new ot(new Ei(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:qr(bs.backgroundCube.uniforms),vertexShader:bs.backgroundCube.vertexShader,fragmentShader:bs.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hv.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(hg),c.material.toneMapped=Ot.getTransfer(S.colorSpace)!==cn,(h!==S||u!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ot(new Nt(2,2),new Fi({name:"BackgroundMaterial",uniforms:qr(bs.background.uniforms),vertexShader:bs.background.vertexShader,fragmentShader:bs.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Ot.getTransfer(S.colorSpace)!==cn,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,A){v.getRGB(Mh,pd(i)),t.buffers.color.setClear(Mh.r,Mh.g,Mh.b,A,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,A=1){o.set(v),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:M,dispose:g}}function dv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(F,W,Z,P,Y){let K=!1,X=u(F,P,Z,W);r!==X&&(r=X,c(r.object)),K=f(F,P,Z,Y),K&&p(F,P,Z,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(F,W,Z,P),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function u(F,W,Z,P){let Y=P.wireframe===!0,K=n[W.id];K===void 0&&(K={},n[W.id]=K);let X=F.isInstancedMesh===!0?F.id:0,ye=K[X];ye===void 0&&(ye={},K[X]=ye);let te=ye[Z.id];te===void 0&&(te={},ye[Z.id]=te);let ce=te[Y];return ce===void 0&&(ce=d(l()),te[Y]=ce),ce}function d(F){let W=[],Z=[],P=[];for(let Y=0;Y<t;Y++)W[Y]=0,Z[Y]=0,P[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Z,attributeDivisors:P,object:F,attributes:{},index:null}}function f(F,W,Z,P){let Y=r.attributes,K=W.attributes,X=0,ye=Z.getAttributes();for(let te in ye)if(ye[te].location>=0){let me=Y[te],Oe=K[te];if(Oe===void 0&&(te==="instanceMatrix"&&F.instanceMatrix&&(Oe=F.instanceMatrix),te==="instanceColor"&&F.instanceColor&&(Oe=F.instanceColor)),me===void 0||me.attribute!==Oe||Oe&&me.data!==Oe.data)return!0;X++}return r.attributesNum!==X||r.index!==P}function p(F,W,Z,P){let Y={},K=W.attributes,X=0,ye=Z.getAttributes();for(let te in ye)if(ye[te].location>=0){let me=K[te];me===void 0&&(te==="instanceMatrix"&&F.instanceMatrix&&(me=F.instanceMatrix),te==="instanceColor"&&F.instanceColor&&(me=F.instanceColor));let Oe={};Oe.attribute=me,me&&me.data&&(Oe.data=me.data),Y[te]=Oe,X++}r.attributes=Y,r.attributesNum=X,r.index=P}function M(){let F=r.newAttributes;for(let W=0,Z=F.length;W<Z;W++)F[W]=0}function m(F){g(F,0)}function g(F,W){let Z=r.newAttributes,P=r.enabledAttributes,Y=r.attributeDivisors;Z[F]=1,P[F]===0&&(i.enableVertexAttribArray(F),P[F]=1),Y[F]!==W&&(i.vertexAttribDivisor(F,W),Y[F]=W)}function v(){let F=r.newAttributes,W=r.enabledAttributes;for(let Z=0,P=W.length;Z<P;Z++)W[Z]!==F[Z]&&(i.disableVertexAttribArray(Z),W[Z]=0)}function A(F,W,Z,P,Y,K,X){X===!0?i.vertexAttribIPointer(F,W,Z,Y,K):i.vertexAttribPointer(F,W,Z,P,Y,K)}function S(F,W,Z,P){M();let Y=P.attributes,K=Z.getAttributes(),X=W.defaultAttributeValues;for(let ye in K){let te=K[ye];if(te.location>=0){let ce=Y[ye];if(ce===void 0&&(ye==="instanceMatrix"&&F.instanceMatrix&&(ce=F.instanceMatrix),ye==="instanceColor"&&F.instanceColor&&(ce=F.instanceColor)),ce!==void 0){let me=ce.normalized,Oe=ce.itemSize,He=e.get(ce);if(He===void 0)continue;let re=He.buffer,Ie=He.type,We=He.bytesPerElement,et=Ie===i.INT||Ie===i.UNSIGNED_INT||ce.gpuType===Uc;if(ce.isInterleavedBufferAttribute){let de=ce.data,Be=de.isInterleavedBuffer===!0?de.stride:de.itemSize,an=ce.offset;if(de.isInstancedInterleavedBuffer||de.isInstancedBufferAttribute){for(let lt=0;lt<te.locationSize;lt++)g(te.location+lt,de.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let lt=0;lt<te.locationSize;lt++)m(te.location+lt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let lt=0;lt<te.locationSize;lt++)A(te.location+lt,Oe/te.locationSize,Ie,me,Be*We,(an+Oe/te.locationSize*lt)*We,et)}else{if(ce.isInstancedBufferAttribute){for(let de=0;de<te.locationSize;de++)g(te.location+de,ce.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let de=0;de<te.locationSize;de++)m(te.location+de);i.bindBuffer(i.ARRAY_BUFFER,re);for(let de=0;de<te.locationSize;de++)A(te.location+de,Oe/te.locationSize,Ie,me,Oe*We,Oe/te.locationSize*de*We,et)}}else if(X!==void 0){let me=X[ye];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(te.location,me);break;case 3:i.vertexAttrib3fv(te.location,me);break;case 4:i.vertexAttrib4fv(te.location,me);break;default:i.vertexAttrib1fv(te.location,me)}}}}v()}function C(){B();for(let F in n){let W=n[F];for(let Z in W){let P=W[Z];for(let Y in P){let K=P[Y];for(let X in K)h(K[X].object),delete K[X];delete P[Y]}}delete n[F]}}function T(F){if(n[F.id]===void 0)return;let W=n[F.id];for(let Z in W){let P=W[Z];for(let Y in P){let K=P[Y];for(let X in K)h(K[X].object),delete K[X];delete P[Y]}}delete n[F.id]}function x(F){for(let W in n){let Z=n[W];for(let P in Z){let Y=Z[P];if(Y[F.id]===void 0)continue;let K=Y[F.id];for(let X in K)h(K[X].object),delete K[X];delete Y[F.id]}}}function b(F){for(let W in n){let Z=n[W],P=F.isInstancedMesh===!0?F.id:0,Y=Z[P];if(Y!==void 0){for(let K in Y){let X=Y[K];for(let ye in X)h(X[ye].object),delete X[ye];delete Y[K]}delete Z[P],Object.keys(Z).length===0&&delete n[W]}}}function B(){N(),o=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:B,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:m,disableUnusedAttributes:v}}function fv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function pv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==_i&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Ci&&x!==ri&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(st("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&st("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:M,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:S,maxSamples:C,samples:T}}function mv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new wi,a=new wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,A=v*4,S=g.clippingState||null;l.value=S,S=h(p,d,A,f);for(let C=0;C!==A;++C)S[C]=t[C];g.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let M=u!==null?u.length:0,m=null;if(M!==0){if(m=l.value,p!==!0||m===null){let g=f+M*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let A=0,S=f;A!==M;++A,S+=4)o.copy(u[A]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}var sl=class extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ia(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ei(5,5,5),r=new Fi({name:"CubemapFromEquirect",uniforms:qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pi,blending:Gr});r.uniforms.tEquirect.value=t;let o=new ot(s,r),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=_n),new Do(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Hm=256,gv=3,_v=20,ug=256,dg=16,xv=3,yv=new U,vv=new Ge,vr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Do(1,10,null),this._boxMesh=new ot(new Ei(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=yv}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(vv));let m=new Do(n,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Hm,hd(e))}_fromTexture(e,t){e.mapping===Vr||e.mapping===zo?this._setSize(e.image.length===0?Hm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Vm(e,!1,!1),n=Math.log2(e)-gv;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Vm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Vr||e.mapping===zo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Mv(),this._integrationMaterial=Sv());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/dg);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-xv)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(ug*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=bv());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Vm(i,e,t){return new sl(i,{minFilter:mi,generateMipmaps:e,type:gi,colorSpace:Jn,depthBuffer:t})}function ol(i,e,t){return new Fi({name:i,uniforms:e,vertexShader:Ut.cube_vert,fragmentShader:t,side:pi,blending:Gr,depthTest:!1,depthWrite:!1})}function Mv(){return ol("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ug}u

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
	`)}function Sv(){return ol("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:dg}},`

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
	`)}function bv(){return ol("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${_v}
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
	`)}function Wm(){return ol("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Xm(){return ol("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function wv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Lc||f===Nc)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let M=new sl(p.height);return M.fromEquirectangularTexture(i,d),e.set(d,M),d.addEventListener("dispose",c),a(M.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Lc||f===Nc,M=f===Vr||f===zo;if(p||M){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new vr(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return p&&v&&v.height>0||M&&v&&l(v)?(n===null&&(n=new vr(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Lc?d.mapping=Vr:f===Nc&&(d.mapping=zo),d}function l(d){let f=0,p=6;for(let M=0;M<p;M++)d[M]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Tv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Rr("WebGLRenderer: "+n+" extension not supported."),s}}}function Av(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let M=r.get(p);M&&(e.remove(M),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),t.memory.geometries++),M}function h(p){let M=p.attributes;for(let m in M)e.update(M[m],i.ARRAY_BUFFER)}function u(p){let M=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=M!==null?M.array.length:m.array.length/3-1,A=m.count>=65535?wa:ba,S=new A(Math.ceil(v/3)*6,1),C=S.array;if(M!==null){let x=M.array;g=M.version;for(let b=0,B=0;b<v;b+=3){let N=x[b+0],F=x[b+1],W=x[b+2];C[B++]=N,C[B++]=F,C[B++]=F,C[B++]=W,C[B++]=W,C[B++]=N}}else{g=m.version;for(let x=0,b=0;x<v;x+=3){let B=x+0,N=x+1,F=x+2;C[b++]=B,C[b++]=N,C[b++]=N,C[b++]=F,C[b++]=F,C[b++]=B}}S.version=g;let T=r.get(p);T&&e.remove(T),r.set(p,S)}function d(p){let M=r.get(p);if(M){let m=p.index;m!==null&&M.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in s){let M=s[p].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Ev(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let M=0;for(let m=0;m<f;m++)M+=d[m];t.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Rv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:_t("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Cv(i,e,t){let n=new WeakMap,s=new on;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let B=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",B)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],A=0;f===!0&&(A=1),p===!0&&(A=2),M===!0&&(A=3);let S=a.attributes.position.count*A,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let T=new Float32Array(S*C*4*u),x=new Sa(T,S,C,u);x.type=ri,x.needsUpdate=!0;let b=A*4;for(let N=0;N<u;N++){let F=m[N],W=g[N],Z=v[N],P=S*C*4*N;for(let Y=0;Y<F.count;Y++){let K=Y*b;f===!0&&(s.fromBufferAttribute(F,Y),T[P+K+0]=s.x,T[P+K+1]=s.y,T[P+K+2]=s.z,T[P+K+3]=0),p===!0&&(s.fromBufferAttribute(W,Y),T[P+K+4]=s.x,T[P+K+5]=s.y,T[P+K+6]=s.z,T[P+K+7]=0),M===!0&&(s.fromBufferAttribute(Z,Y),T[P+K+8]=s.x,T[P+K+9]=s.y,T[P+K+10]=s.z,T[P+K+11]=Z.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new ge(S,C)},n.set(a,d),a.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Iv(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Pv={[Wu]:"LINEAR_TONE_MAPPING",[Xu]:"REINHARD_TONE_MAPPING",[qu]:"CINEON_TONE_MAPPING",[Bo]:"ACES_FILMIC_TONE_MAPPING",[Ku]:"AGX_TONE_MAPPING",[Zu]:"NEUTRAL_TONE_MAPPING",[Yu]:"CUSTOM_TONE_MAPPING"};function Lv(i,e,t,n,s,r){let o=new Ui(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new tn;h.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new en([0,2,0,0,2,0],2));let u=new Mc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ot(h,u),f=new kr(-1,1,1,-1,0,1),p=null,M=null,m=!1,g,v=null,A=[],S=!1;this.setSize=function(C,T){o.setSize(C,T),a!==null&&a.setSize(C,T),l!==null&&l.setSize(C,T);for(let x=0;x<A.length;x++){let b=A[x];b.setSize&&b.setSize(C,T)}},this.setEffects=function(C){A=C,S=A.length>0&&A[0].isRenderPass===!0;let T=o.width,x=o.height;A.length>0&&a===null&&(a=new Ui(T,x,{type:gi,depthBuffer:!1,stencilBuffer:!1}),l=new Ui(T,x,{type:gi,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&A.some(B=>B.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Hs(T,x),r===!0&&(c.format=Js,c.type=Xr)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let B=0;B<A.length;B++){let N=A[B];N.setSize&&N.setSize(T,x),b&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(C,T){if(m||C.toneMapping===Ms&&A.length===0)return!1;if(v=T,T!==null){let x=T.width,b=T.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return S===!1&&C.setRenderTarget(o),g=C.toneMapping,C.toneMapping=Ms,!0},this.hasRenderPass=function(){return S},this.end=function(C,T){C.toneMapping=g,m=!0;let x=o,b=a;for(let B=0;B<A.length;B++){let N=A[B];N.enabled!==!1&&(N.render(C,b,x,T),N.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(p!==C.outputColorSpace||M!==C.toneMapping){p=C.outputColorSpace,M=C.toneMapping,u.defines={},Ot.getTransfer(p)===cn&&(u.defines.SRGB_TRANSFER="");let B=Pv[M];B&&(u.defines[B]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,C.setRenderTarget(v),C.render(d,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var fg=new Fn,pg=new Hs(1,1),mg=new Pa(1),gg=new Sa,_g=new uc,xg=new Ia,qm=[],Ym=[],Km=new Float32Array(16),Zm=new Float32Array(9),Jm=new Float32Array(4);function Wo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=qm[s];if(r===void 0&&(r=new Float32Array(s),qm[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function bh(i,e){let t=Ym[e];t===void 0&&(t=new Int32Array(e),Ym[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;i.uniform2fv(this.addr,e),Vn(t,e)}}function Uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Hn(t,e))return;i.uniform3fv(this.addr,e),Vn(t,e)}}function Fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;i.uniform4fv(this.addr,e),Vn(t,e)}}function Ov(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vn(t,e)}else{if(Hn(t,n))return;Jm.set(n),i.uniformMatrix2fv(this.addr,!1,Jm),Vn(t,n)}}function Bv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vn(t,e)}else{if(Hn(t,n))return;Zm.set(n),i.uniformMatrix3fv(this.addr,!1,Zm),Vn(t,n)}}function zv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vn(t,e)}else{if(Hn(t,n))return;Km.set(n),i.uniformMatrix4fv(this.addr,!1,Km),Vn(t,n)}}function kv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;i.uniform2iv(this.addr,e),Vn(t,e)}}function Hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Hn(t,e))return;i.uniform3iv(this.addr,e),Vn(t,e)}}function Vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;i.uniform4iv(this.addr,e),Vn(t,e)}}function Wv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;i.uniform2uiv(this.addr,e),Vn(t,e)}}function qv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Hn(t,e))return;i.uniform3uiv(this.addr,e),Vn(t,e)}}function Yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;i.uniform4uiv(this.addr,e),Vn(t,e)}}function wh(i){return i.version===0&&(i.compareFunction=od,i.needsUpdate=!0),i}function Kv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=wh(pg):r=fg,t.setTexture2D(e||r,s)}function Zv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||_g,s)}function Jv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=wh(mg):r=xg,t.setTextureCube(e||r,s)}function jv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gg,s)}function $v(i){switch(i){case 5126:return Nv;case 35664:return Dv;case 35665:return Uv;case 35666:return Fv;case 35674:return Ov;case 35675:return Bv;case 35676:return zv;case 5124:case 35670:return kv;case 35667:case 35671:return Gv;case 35668:case 35672:return Hv;case 35669:case 35673:return Vv;case 5125:return Wv;case 36294:return Xv;case 36295:return qv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return jv}}function Qv(i,e){i.uniform1fv(this.addr,e)}function eM(i,e){let t=Wo(e,this.size,2);i.uniform2fv(this.addr,t)}function tM(i,e){let t=Wo(e,this.size,3);i.uniform3fv(this.addr,t)}function nM(i,e){let t=Wo(e,this.size,4);i.uniform4fv(this.addr,t)}function iM(i,e){let t=Wo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sM(i,e){let t=Wo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function rM(i,e){let t=Wo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function oM(i,e){i.uniform1iv(this.addr,e)}function aM(i,e){i.uniform2iv(this.addr,e)}function lM(i,e){i.uniform3iv(this.addr,e)}function cM(i,e){i.uniform4iv(this.addr,e)}function hM(i,e){i.uniform1uiv(this.addr,e)}function uM(i,e){i.uniform2uiv(this.addr,e)}function dM(i,e){i.uniform3uiv(this.addr,e)}function fM(i,e){i.uniform4uiv(this.addr,e)}function pM(i,e,t){let n=this.cache,s=e.length,r=bh(t,s);Hn(n,r)||(i.uniform1iv(this.addr,r),Vn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=wh(pg):o=fg;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function mM(i,e,t){let n=this.cache,s=e.length,r=bh(t,s);Hn(n,r)||(i.uniform1iv(this.addr,r),Vn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||_g,r[o])}function gM(i,e,t){let n=this.cache,s=e.length,r=bh(t,s);Hn(n,r)||(i.uniform1iv(this.addr,r),Vn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=wh(mg):o=xg;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function _M(i,e,t){let n=this.cache,s=e.length,r=bh(t,s);Hn(n,r)||(i.uniform1iv(this.addr,r),Vn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||gg,r[o])}function xM(i){switch(i){case 5126:return Qv;case 35664:return eM;case 35665:return tM;case 35666:return nM;case 35674:return iM;case 35675:return sM;case 35676:return rM;case 5124:case 35670:return oM;case 35667:case 35671:return aM;case 35668:case 35672:return lM;case 35669:case 35673:return cM;case 5125:return hM;case 36294:return uM;case 36295:return dM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35679:case 36299:case 36307:return mM;case 35680:case 36300:case 36308:case 36293:return gM;case 36289:case 36303:case 36311:case 36292:return _M}}var Td=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$v(t.type)}},Ad=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xM(t.type)}},Ed=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},bd=/(\w+)(\])?(\[|\.)?/g;function jm(i,e){i.seq.push(e),i.map[e.id]=e}function yM(i,e,t){let n=i.name,s=n.length;for(bd.lastIndex=0;;){let r=bd.exec(n),o=bd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){jm(t,c===void 0?new Td(a,i,e):new Ad(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Ed(a),jm(t,u)),t=u}}}var Vo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);yM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function $m(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var vM=37297,MM=0;function SM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Qm=new wt;function bM(i){Ot._getMatrix(Qm,Ot.workingColorSpace,i);let e=`mat3( ${Qm.elements.map(t=>t.toFixed(4))} )`;switch(Ot.getTransfer(i)){case va:return[e,"LinearTransferOETF"];case cn:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function eg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+SM(i.getShaderSource(e),a)}else return r}function wM(i,e){let t=bM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var TM={[Wu]:"Linear",[Xu]:"Reinhard",[qu]:"Cineon",[Bo]:"ACESFilmic",[Ku]:"AgX",[Zu]:"Neutral",[Yu]:"Custom"};function AM(i,e){let t=TM[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Sh=new U;function EM(){Ot.getLuminanceCoefficients(Sh);let i=Sh.x.toFixed(4),e=Sh.y.toFixed(4),t=Sh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function CM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function IM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function il(i){return i!==""}function tg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function ng(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var PM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(i){return i.replace(PM,LM)}function LM(i,e){let t=Ut[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Rd(t)}var NM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ig(i){return i.replace(NM,DM)}function DM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sg(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var UM={[xr]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function FM(i){return UM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var OM={[zo]:"ENVMAP_MODE_REFRACTION"};function BM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":OM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zM={[Vu]:"ENVMAP_BLENDING_MULTIPLY",[_m]:"ENVMAP_BLENDING_MIX",[xm]:"ENVMAP_BLENDING_ADD"};function kM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":zM[i.combine]||"ENVMAP_BLENDING_NONE"}function GM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=FM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=BM(t),u=kM(t),d=RM(t),f=CM(r),p=s.createProgram(),M,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(il).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(il).join(`
`),m.length>0&&(m+=`
`)):(M=[sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),m=[sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ms?"#define TONE_MAPPING":"",t.toneMapping!==Ms?Ut.tonemapping_pars_fragment:"",t.toneMapping!==Ms?AM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,wM("linearToOutputTexel",t.outputColorSpace),EM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(il).join(`
`)),o=Rd(o),o=tg(o,t),o=ng(o,t),a=Rd(a),a=tg(a,t),a=ng(a,t),o=ig(o),a=ig(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,M=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",t.glslVersion===ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+M+o,A=g+m+a,S=$m(s,s.VERTEX_SHADER,v),C=$m(s,s.FRAGMENT_SHADER,A);s.attachShader(p,S),s.attachShader(p,C),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(N){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(p)||"",W=s.getShaderInfoLog(S)||"",Z=s.getShaderInfoLog(C)||"",P=F.trim(),Y=W.trim(),K=Z.trim(),X=!0,ye=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,S,C);else{let te=eg(s,S,"vertex"),ce=eg(s,C,"fragment");_t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+P+`
`+te+`
`+ce)}else P!==""?st("WebGLProgram: Program Info Log:",P):(Y===""||K==="")&&(ye=!1);ye&&(N.diagnostics={runnable:X,programLog:P,vertexShader:{log:Y,prefix:M},fragmentShader:{log:K,prefix:m}})}s.deleteShader(S),s.deleteShader(C),x=new Vo(s,p),b=IM(s,p)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(p,vM)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=C,this}var HM=0,Cd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Id(e),t.set(e,n)),n}},Id=class{constructor(e){this.id=HM++,this.code=e,this.usedTimes=0}};function VM(i){return i===yr||i===Qa||i===el}function WM(i,e,t,n,s,r){let o=new wo,a=new Cd,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,b,B,N,F,W){let Z=N.fog,P=F.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=e.get(x.envMap||Y,K),ye=d[x.type],te=n.precision;x.precision!==null&&(te=n.getMaxPrecision(x.precision),te!==x.precision&&st("WebGLProgram.getParameters:",x.precision,"not supported, using",te,"instead."));let ce=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,me=ce!==void 0?ce.length:0,Oe=0;P.morphAttributes.position!==void 0&&(Oe=1),P.morphAttributes.normal!==void 0&&(Oe=2),P.morphAttributes.color!==void 0&&(Oe=3);let He,re,Ie,We;if(ye){let ke=bs[ye];He=ke.vertexShader,re=ke.fragmentShader}else{He=x.vertexShader,re=x.fragmentShader;let ke=a.getVertexShaderStage(x),Ft=a.getFragmentShaderStage(x);a.update(x,ke,Ft),Ie=ke.id,We=Ft.id}let et=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),Be=F.isInstancedMesh===!0,an=F.isBatchedMesh===!0,lt=!!x.map,Tt=!!x.matcap,mt=!!X,pe=mt&&X.isPMREMTexture===!0,oe=!!x.aoMap,Pe=!!x.lightMap,Ye=!!x.bumpMap&&x.wireframe===!1,Ue=!!x.normalMap,gt=!!x.displacementMap,Je=!!x.emissiveMap,tt=!!x.metalnessMap,rt=!!x.roughnessMap,It=x.anisotropy>0,G=x.clearcoat>0,qt=x.diffuseRoughness>0,ut=x.dispersion>0,At=x.retroreflectivity>0,Ne=x.iridescence>0,sn=x.sheen>0,at=x.transmission>0,ct=It&&!!x.anisotropyMap,I=G&&!!x.clearcoatMap,w=G&&!!x.clearcoatNormalMap,ee=G&&!!x.clearcoatRoughnessMap,be=qt&&!!x.diffuseRoughnessMap,ae=Ne&&!!x.iridescenceMap,we=Ne&&!!x.iridescenceThicknessMap,Le=sn&&!!x.sheenColorMap,he=sn&&!!x.sheenRoughnessMap,ue=!!x.specularMap,Fe=!!x.specularColorMap,O=!!x.specularIntensityMap,fe=at&&!!x.transmissionMap,se=at&&!!x.thicknessMap,ze=!!x.gradientMap,Ae=!!x.alphaMap,Me=x.alphaTest>0,$e=!!x.alphaHash,yt=!!x.extensions,Re=Ms;x.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Re=i.toneMapping);let nt=pe?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,it={shaderID:ye,shaderType:x.type,shaderName:x.name,vertexShader:He,fragmentShader:re,defines:x.defines,customVertexShaderID:Ie,customFragmentShaderID:We,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:te,batching:an,batchingColor:an&&F._colorsTexture!==null,instancing:Be,instancingColor:Be&&F.instanceColor!==null,instancingMorph:Be&&F.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Ot.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:lt,matcap:Tt,envMap:mt,envMapMode:mt&&X.mapping,envMapPMREM:pe,envMapMaxLod:pe?nt.length-1:null,envMapSize:pe?nt[0].width:null,aoMap:oe,lightMap:Pe,bumpMap:Ye,normalMap:Ue,displacementMap:gt,emissiveMap:Je,normalMapObjectSpace:Ue&&x.normalMapType===Sm,normalMapTangentSpace:Ue&&x.normalMapType===xh,packedNormalMap:Ue&&x.normalMapType===xh&&VM(x.normalMap.format),metalnessMap:tt,roughnessMap:rt,anisotropy:It,anisotropyMap:ct,clearcoat:G,clearcoatMap:I,clearcoatNormalMap:w,clearcoatRoughnessMap:ee,diffuseRoughness:qt,diffuseRoughnessMap:be,dispersion:ut,retroreflection:At,iridescence:Ne,iridescenceMap:ae,iridescenceThicknessMap:we,sheen:sn,sheenColorMap:Le,sheenRoughnessMap:he,specularMap:ue,specularColorMap:Fe,specularIntensityMap:O,transmission:at,transmissionMap:fe,thicknessMap:se,gradientMap:ze,opaque:x.transparent===!1&&x.blending===Oo&&x.alphaToCoverage===!1,alphaMap:Ae,alphaTest:Me,alphaHash:$e,combine:x.combine,mapUv:lt&&f(x.map.channel),aoMapUv:oe&&f(x.aoMap.channel),lightMapUv:Pe&&f(x.lightMap.channel),bumpMapUv:Ye&&f(x.bumpMap.channel),normalMapUv:Ue&&f(x.normalMap.channel),displacementMapUv:gt&&f(x.displacementMap.channel),emissiveMapUv:Je&&f(x.emissiveMap.channel),metalnessMapUv:tt&&f(x.metalnessMap.channel),roughnessMapUv:rt&&f(x.roughnessMap.channel),anisotropyMapUv:ct&&f(x.anisotropyMap.channel),clearcoatMapUv:I&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:be&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:we&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:he&&f(x.sheenRoughnessMap.channel),specularMapUv:ue&&f(x.specularMap.channel),specularColorMapUv:Fe&&f(x.specularColorMap.channel),specularIntensityMapUv:O&&f(x.specularIntensityMap.channel),transmissionMapUv:fe&&f(x.transmissionMap.channel),thicknessMapUv:se&&f(x.thicknessMap.channel),alphaMapUv:Ae&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Ue||It),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!P.attributes.uv&&(lt||Ae),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&Ue===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:de,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Oe,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:W.filter(ke=>ke.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:lt&&x.map.isVideoTexture===!0&&Ot.getTransfer(x.map.colorSpace)===cn,decodeVideoTextureEmissive:Je&&x.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(x.emissiveMap.colorSpace)===cn,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===nn,flipSided:x.side===pi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:yt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&x.extensions.multiDraw===!0||an)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function M(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let B in x.defines)b.push(B),b.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(m(b,x),g(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let b=d[x.type],B;if(b){let N=bs[b];B=zm.clone(N.uniforms)}else B=x.uniforms;return B}function A(x,b){let B=h.get(b);return B!==void 0?++B.usedTimes:(B=new GM(i,b,x,s),c.push(B),h.set(b,B)),B}function S(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function C(x){a.remove(x)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:v,acquireProgram:A,releaseProgram:S,releaseShaderCache:C,programs:c,dispose:T}}function XM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function qM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function rg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function og(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,M,m,g){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:M,renderOrder:d.renderOrder,z:m,group:g},i[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=p,v.materialVariant=o(d),v.groupOrder=M,v.renderOrder=d.renderOrder,v.z=m,v.group=g),e++,v}function l(d,f,p,M,m,g,v){v.reversedDepth===!0&&(m=-m);let A=a(d,f,p,M,m,g);p.transmission>0?n.push(A):p.transparent===!0?s.push(A):t.push(A)}function c(d,f,p,M,m,g){let v=a(d,f,p,M,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||qM),n.length>1&&n.sort(f||rg),s.length>1&&s.sort(f||rg)}function u(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function YM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new og,i.set(n,[o])):s>=r.length?(o=new og,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function KM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Ge};break;case"SpotLight":t={position:new U,direction:new U,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function ZM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var JM=0;function jM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $M(i){let e=new KM,t=ZM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new xt,o=new xt;function a(c){let h=0,u=0,d=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let f=0,p=0,M=0,m=0,g=0,v=0,A=0,S=0,C=0,T=0,x=0,b=0,B=0,N=0;c.sort(jM);for(let W=0,Z=c.length;W<Z;W++){let P=c[W],Y=P.color,K=P.intensity,X=P.distance,ye=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===yr?ye=P.shadow.map.texture:ye=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=Y.r*K,u+=Y.g*K,d+=Y.b*K;else if(P.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(P.sh.coefficients[te],K);N++}else if(P.isSunLight){let te=e.get(P);if(te.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ce=P.shadow,me=t.get(P);me.shadowIntensity=ce.intensity,me.shadowBias=ce.bias,me.shadowNormalBias=ce.normalBias,me.shadowRadius=ce.radius,me.shadowMapSize.copy(ce.mapSize).multiply(ce.getFrameExtents()),n.sunShadow[p]=me,n.sunShadowMap[p]=ye;let Oe=ce.getViewportCount();for(let He=0;He<Oe;He++)n.sunShadowMatrix[M+He]=ce.getMatrix(He),n.sunShadowCascade[M+He]=ce._cascadeData[He];M+=Oe,p++}n.sun[f]=te,f++}else if(P.isDirectionalLight){let te=e.get(P);if(te.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ce=P.shadow,me=t.get(P);me.shadowIntensity=ce.intensity,me.shadowBias=ce.bias,me.shadowNormalBias=ce.normalBias,me.shadowRadius=ce.radius,me.shadowMapSize=ce.mapSize,n.directionalShadow[m]=me,n.directionalShadowMap[m]=ye,n.directionalShadowMatrix[m]=P.shadow.matrix,C++}n.directional[m]=te,m++}else if(P.isSpotLight){let te=e.get(P);te.position.setFromMatrixPosition(P.matrixWorld),te.color.copy(Y).multiplyScalar(K),te.distance=X,te.coneCos=Math.cos(P.angle),te.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),te.decay=P.decay,n.spot[v]=te;let ce=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,ce.updateMatrices(P),P.castShadow&&B++),n.spotLightMatrix[v]=ce.matrix,P.castShadow){let me=t.get(P);me.shadowIntensity=ce.intensity,me.shadowBias=ce.bias,me.shadowNormalBias=ce.normalBias,me.shadowRadius=ce.radius,me.shadowMapSize=ce.mapSize,n.spotShadow[v]=me,n.spotShadowMap[v]=ye,x++}v++}else if(P.isRectAreaLight){let te=e.get(P);te.color.copy(Y).multiplyScalar(K),te.halfWidth.set(P.width*.5,0,0),te.halfHeight.set(0,P.height*.5,0),n.rectArea[A]=te,A++}else if(P.isPointLight){let te=e.get(P);if(te.color.copy(P.color).multiplyScalar(P.intensity),te.distance=P.distance,te.decay=P.decay,P.castShadow){let ce=P.shadow,me=t.get(P);me.shadowIntensity=ce.intensity,me.shadowBias=ce.bias,me.shadowNormalBias=ce.normalBias,me.shadowRadius=ce.radius,me.shadowMapSize=ce.mapSize,me.shadowCameraNear=ce.camera.near,me.shadowCameraFar=ce.camera.far,n.pointShadow[g]=me,n.pointShadowMap[g]=ye,n.pointShadowMatrix[g]=P.shadow.matrix,T++}n.point[g]=te,g++}else if(P.isHemisphereLight){let te=e.get(P);te.skyColor.copy(P.color).multiplyScalar(K),te.groundColor.copy(P.groundColor).multiplyScalar(K),n.hemi[S]=te,S++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=qe.LTC_FLOAT_1,n.rectAreaLTC2=qe.LTC_FLOAT_2):(n.rectAreaLTC1=qe.LTC_HALF_1,n.rectAreaLTC2=qe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let F=n.hash;(F.sunLength!==f||F.directionalLength!==m||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==A||F.hemiLength!==S||F.numSunShadows!==p||F.numDirectionalShadows!==C||F.numPointShadows!==T||F.numSpotShadows!==x||F.numSpotMaps!==b||F.numLightProbes!==N)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=A,n.point.length=g,n.hemi.length=S,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-B,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=N,F.sunLength=f,F.directionalLength=m,F.pointLength=g,F.spotLength=v,F.rectAreaLength=A,F.hemiLength=S,F.numSunShadows=p,F.numDirectionalShadows=C,F.numPointShadows=T,F.numSpotShadows=x,F.numSpotMaps=b,F.numLightProbes=N,n.version=JM++)}function l(c,h){let u=0,d=0,f=0,p=0,M=0,m=0,g=h.matrixWorldInverse;for(let v=0,A=c.length;v<A;v++){let S=c[v];if(S.isSunLight){let C=n.sun[u];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(g),u++}else if(S.isDirectionalLight){let C=n.directional[d];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),d++}else if(S.isSpotLight){let C=n.spot[p];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),p++}else if(S.isRectAreaLight){let C=n.rectArea[M];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),M++}else if(S.isPointLight){let C=n.point[f];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){let C=n.hemi[m];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function ag(i){let e=new $M(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function QM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new ag(i),e.set(s,[a])):r>=o.length?(a=new ag(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var eS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tS=`uniform sampler2D shadow_pass;
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
}`,nS=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],iS=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],lg=new xt,nl=new U,wd=new U;function sS(i,e,t){let n=new pr,s=new ge,r=new ge,o=new on,a=new Po,l=new Sc,c={},h=t.maxTextureSize,u={[vs]:pi,[pi]:vs,[nn]:nn},d=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:eS,fragmentShader:tS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new tn;p.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ot(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xr;let g=this.type;this.render=function(T,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===$p&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xr);let B=i.getRenderTarget(),N=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Gr),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let Z=g!==this.type;Z&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(Y=>Y.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,Y=T.length;P<Y;P++){let K=T[P],X=K.shadow;if(X===void 0){st("WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ye=X.getFrameExtents();s.multiply(ye),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ye.x),s.x=r.x*ye.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ye.y),s.y=r.y*ye.y,X.mapSize.y=r.y));let te=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=te,X.map===null||Z===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Fo){if(K.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ui(s.x,s.y,{format:yr,type:gi,minFilter:_n,magFilter:_n,generateMipmaps:!1}),X.map.texture.name=K.name+".shadowMap",X.map.depthTexture=new Hs(s.x,s.y,ri),X.map.depthTexture.name=K.name+".shadowMapDepth",X.map.depthTexture.format=ks,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Un,X.map.depthTexture.magFilter=Un}else K.isPointLight?(X.map=new sl(s.x),X.map.depthTexture=new Pa(s.x,os)):(X.map=new Ui(s.x,s.y),X.map.depthTexture=new Hs(s.x,s.y,os)),X.map.depthTexture.name=K.name+".shadowMap",X.map.depthTexture.format=ks,this.type===xr?(X.map.depthTexture.compareFunction=te?rd:sd,X.map.depthTexture.minFilter=_n,X.map.depthTexture.magFilter=_n):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Un,X.map.depthTexture.magFilter=Un);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let ce=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();K.isPointLight!==!0&&X.updateMatrices(K,b);let me=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:b.layers;for(let Oe=0;Oe<ce;Oe++){let He=X.getCamera(Oe);if(K.isPointLight){let re=X.camera,Ie=X.matrix,We=K.distance||re.far;We!==re.far&&(re.far=We,re.updateProjectionMatrix()),nl.setFromMatrixPosition(K.matrixWorld),re.position.copy(nl),wd.copy(re.position),wd.add(nS[Oe]),re.up.copy(iS[Oe]),re.lookAt(wd),re.updateMatrixWorld(),Ie.makeTranslation(-nl.x,-nl.y,-nl.z),lg.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),X._frustum.setFromProjectionMatrix(lg,re.coordinateSystem,re.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,Oe),i.clear();else{Oe===0&&(i.setRenderTarget(X.map),i.clear());let re=X.getViewport(Oe);o.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),W.viewport(o)}n=X.getFrustum(Oe),S(x,b,He,K,me,this.type)}X.isPointLightShadow!==!0&&this.type===Fo&&v(X,b),X.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(B,N,F)};function v(T,x){let b=e.update(M);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ui(s.x,s.y,{format:yr,type:gi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(x,null,b,d,M,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(x,null,b,f,M,null)}function A(T,x,b,B){let N=null,F=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)N=F;else if(N=b.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let W=N.uuid,Z=x.uuid,P=c[W];P===void 0&&(P={},c[W]=P);let Y=P[Z];Y===void 0&&(Y=N.clone(),P[Z]=Y,x.addEventListener("dispose",C)),N=Y}if(N.visible=x.visible,N.wireframe=x.wireframe,B===Fo?N.side=x.shadowSide!==null?x.shadowSide:x.side:N.side=x.shadowSide!==null?x.shadowSide:u[x.side],N.alphaMap=x.alphaMap,N.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,N.map=x.map,N.clipShadows=x.clipShadows,N.clippingPlanes=x.clippingPlanes,N.clipIntersection=x.clipIntersection,N.displacementMap=x.displacementMap,N.displacementScale=x.displacementScale,N.displacementBias=x.displacementBias,N.wireframeLinewidth=x.wireframeLinewidth,N.linewidth=x.linewidth,b.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let W=i.properties.get(N);W.light=b}return N}function S(T,x,b,B,N,F){if(T.visible===!1)return;if(T.layers.test(N)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===Fo)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let P=e.update(T),Y=T.material;if(Array.isArray(Y)){let K=P.groups;for(let X=0,ye=K.length;X<ye;X++){let te=K[X],ce=Y[te.materialIndex];if(ce&&ce.visible){let me=A(T,ce,B,F);T.onBeforeShadow(i,T,x,b,P,me,te),i.renderBufferDirect(b,null,P,me,T,te),T.onAfterShadow(i,T,x,b,P,me,te)}}}else if(Y.visible){let K=A(T,Y,B,F);T.onBeforeShadow(i,T,x,b,P,K,null),i.renderBufferDirect(b,null,P,K,T,null),T.onAfterShadow(i,T,x,b,P,K,null)}}let Z=T.children;for(let P=0,Y=Z.length;P<Y;P++)S(Z[P],x,b,B,N,F)}function C(T){T.target.removeEventListener("dispose",C);for(let b in c){let B=c[b],N=T.target.uuid;N in B&&(B[N].dispose(),delete B[N])}}}function rS(i,e){function t(){let O=!1,fe=new on,se=null,ze=new on(0,0,0,0);return{setMask:function(Ae){se!==Ae&&!O&&(i.colorMask(Ae,Ae,Ae,Ae),se=Ae)},setLocked:function(Ae){O=Ae},setClear:function(Ae,Me,$e,yt,Re){Re===!0&&(Ae*=yt,Me*=yt,$e*=yt),fe.set(Ae,Me,$e,yt),ze.equals(fe)===!1&&(i.clearColor(Ae,Me,$e,yt),ze.copy(fe))},reset:function(){O=!1,se=null,ze.set(-1,0,0,0)}}}function n(){let O=!1,fe=!1,se=null,ze=null,Ae=null;return{setReversed:function(Me){if(fe!==Me){let $e=e.get("EXT_clip_control");Me?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),fe=Me;let yt=Ae;Ae=null,this.setClear(yt)}},getReversed:function(){return fe},setTest:function(Me){Me?de(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(Me){se!==Me&&!O&&(i.depthMask(Me),se=Me)},setFunc:function(Me){if(fe&&(Me=Lm[Me]),ze!==Me){switch(Me){case nc:i.depthFunc(i.NEVER);break;case ic:i.depthFunc(i.ALWAYS);break;case sc:i.depthFunc(i.LESS);break;case yo:i.depthFunc(i.LEQUAL);break;case rc:i.depthFunc(i.EQUAL);break;case oc:i.depthFunc(i.GEQUAL);break;case ac:i.depthFunc(i.GREATER);break;case lc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ze=Me}},setLocked:function(Me){O=Me},setClear:function(Me){Ae!==Me&&(Ae=Me,fe&&(Me=1-Me),i.clearDepth(Me))},reset:function(){O=!1,se=null,ze=null,Ae=null,fe=!1}}}function s(){let O=!1,fe=null,se=null,ze=null,Ae=null,Me=null,$e=null,yt=null,Re=null;return{setTest:function(nt){O||(nt?de(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(nt){fe!==nt&&!O&&(i.stencilMask(nt),fe=nt)},setFunc:function(nt,it,ke){(se!==nt||ze!==it||Ae!==ke)&&(i.stencilFunc(nt,it,ke),se=nt,ze=it,Ae=ke)},setOp:function(nt,it,ke){(Me!==nt||$e!==it||yt!==ke)&&(i.stencilOp(nt,it,ke),Me=nt,$e=it,yt=ke)},setLocked:function(nt){O=nt},setClear:function(nt){Re!==nt&&(i.clearStencil(nt),Re=nt)},reset:function(){O=!1,fe=null,se=null,ze=null,Ae=null,Me=null,$e=null,yt=null,Re=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],M=null,m=!1,g=null,v=null,A=null,S=null,C=null,T=null,x=null,b=new Ge(0,0,0),B=0,N=!1,F=null,W=null,Z=null,P=null,Y=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ye=0,te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(ye=parseFloat(/^WebGL (\d)/.exec(te)[1]),X=ye>=1):te.indexOf("OpenGL ES")!==-1&&(ye=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),X=ye>=2);let ce=null,me={},Oe=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),re=new on().fromArray(Oe),Ie=new on().fromArray(He);function We(O,fe,se,ze){let Ae=new Uint8Array(4),Me=i.createTexture();i.bindTexture(O,Me),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<se;$e++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,ze,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(fe+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return Me}let et={};et[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(yo),Ye(!1),Ue(Bu),de(i.CULL_FACE),oe(Gr);function de(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Be(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function an(O,fe){return d[O]!==fe?(i.bindFramebuffer(O,fe),d[O]=fe,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=fe),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function lt(O,fe){let se=p,ze=!1;if(O){se=f.get(fe),se===void 0&&(se=[],f.set(fe,se));let Ae=O.textures;if(se.length!==Ae.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,$e=Ae.length;Me<$e;Me++)se[Me]=i.COLOR_ATTACHMENT0+Me;se.length=Ae.length,ze=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,ze=!0);ze&&i.drawBuffers(se)}function Tt(O){return M!==O?(i.useProgram(O),M=O,!0):!1}let mt={[Hr]:i.FUNC_ADD,[em]:i.FUNC_SUBTRACT,[tm]:i.FUNC_REVERSE_SUBTRACT};mt[nm]=i.MIN,mt[im]=i.MAX;let pe={[sm]:i.ZERO,[rm]:i.ONE,[om]:i.SRC_COLOR,[Gu]:i.SRC_ALPHA,[dm]:i.SRC_ALPHA_SATURATE,[hm]:i.DST_COLOR,[lm]:i.DST_ALPHA,[am]:i.ONE_MINUS_SRC_COLOR,[Hu]:i.ONE_MINUS_SRC_ALPHA,[um]:i.ONE_MINUS_DST_COLOR,[cm]:i.ONE_MINUS_DST_ALPHA,[fm]:i.CONSTANT_COLOR,[pm]:i.ONE_MINUS_CONSTANT_COLOR,[mm]:i.CONSTANT_ALPHA,[gm]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(O,fe,se,ze,Ae,Me,$e,yt,Re,nt){if(O===Gr){m===!0&&(Be(i.BLEND),m=!1);return}if(m===!1&&(de(i.BLEND),m=!0),O!==Qp){if(O!==g||nt!==N){if((v!==Hr||C!==Hr)&&(i.blendEquation(i.FUNC_ADD),v=Hr,C=Hr),nt)switch(O){case Oo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rs:i.blendFunc(i.ONE,i.ONE);break;case zu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ku:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:_t("WebGLState: Invalid blending: ",O);break}else switch(O){case Oo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zu:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ku:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",O);break}A=null,S=null,T=null,x=null,b.set(0,0,0),B=0,g=O,N=nt}return}Ae=Ae||fe,Me=Me||se,$e=$e||ze,(fe!==v||Ae!==C)&&(i.blendEquationSeparate(mt[fe],mt[Ae]),v=fe,C=Ae),(se!==A||ze!==S||Me!==T||$e!==x)&&(i.blendFuncSeparate(pe[se],pe[ze],pe[Me],pe[$e]),A=se,S=ze,T=Me,x=$e),(yt.equals(b)===!1||Re!==B)&&(i.blendColor(yt.r,yt.g,yt.b,Re),b.copy(yt),B=Re),g=O,N=!1}function Pe(O,fe){O.side===nn?Be(i.CULL_FACE):de(i.CULL_FACE);let se=O.side===pi;fe&&(se=!se),Ye(se),O.blending===Oo&&O.transparent===!1?oe(Gr):oe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let ze=O.stencilWrite;a.setTest(ze),ze&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Je(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(O){F!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),F=O)}function Ue(O){O!==Jp?(de(i.CULL_FACE),O!==W&&(O===Bu?i.cullFace(i.BACK):O===jp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),W=O}function gt(O){O!==Z&&(X&&i.lineWidth(O),Z=O)}function Je(O,fe,se){O?(de(i.POLYGON_OFFSET_FILL),(P!==fe||Y!==se)&&(P=fe,Y=se,o.getReversed()&&(fe=-fe,se=-se),i.polygonOffset(fe,se))):Be(i.POLYGON_OFFSET_FILL)}function tt(O){O?de(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function rt(O){O===void 0&&(O=i.TEXTURE0+K-1),ce!==O&&(i.activeTexture(O),ce=O)}function It(O,fe,se){se===void 0&&(ce===null?se=i.TEXTURE0+K-1:se=ce);let ze=me[se];ze===void 0&&(ze={type:void 0,texture:void 0},me[se]=ze),(ze.type!==O||ze.texture!==fe)&&(ce!==se&&(i.activeTexture(se),ce=se),i.bindTexture(O,fe||et[O]),ze.type=O,ze.texture=fe)}function G(){let O=me[ce];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function qt(){try{i.compressedTexImage2D(...arguments)}catch(O){_t("WebGLState:",O)}}function ut(){try{i.compressedTexImage3D(...arguments)}catch(O){_t("WebGLState:",O)}}function At(){try{i.texSubImage2D(...arguments)}catch(O){_t("WebGLState:",O)}}function Ne(){try{i.texSubImage3D(...arguments)}catch(O){_t("WebGLState:",O)}}function sn(){try{i.compressedTexSubImage2D(...arguments)}catch(O){_t("WebGLState:",O)}}function at(){try{i.compressedTexSubImage3D(...arguments)}catch(O){_t("WebGLState:",O)}}function ct(){try{i.texStorage2D(...arguments)}catch(O){_t("WebGLState:",O)}}function I(){try{i.texStorage3D(...arguments)}catch(O){_t("WebGLState:",O)}}function w(){try{i.texImage2D(...arguments)}catch(O){_t("WebGLState:",O)}}function ee(){try{i.texImage3D(...arguments)}catch(O){_t("WebGLState:",O)}}function be(O){return u[O]!==void 0?u[O]:i.getParameter(O)}function ae(O,fe){u[O]!==fe&&(i.pixelStorei(O,fe),u[O]=fe)}function we(O){re.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),re.copy(O))}function Le(O){Ie.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Ie.copy(O))}function he(O,fe){let se=c.get(fe);se===void 0&&(se=new WeakMap,c.set(fe,se));let ze=se.get(O);ze===void 0&&(ze=i.getUniformBlockIndex(fe,O.name),i.uniformBlockBinding(fe,ze,ze),se.set(O,ze))}function ue(O,fe,se){let Ae=c.get(fe).get(O);l[Ae]!==se&&(i.bindBufferBase(i.UNIFORM_BUFFER,Ae,se),l[Ae]=se)}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ce=null,me={},d={},l={},f=new WeakMap,p=[],M=null,m=!1,g=null,v=null,A=null,S=null,C=null,T=null,x=null,b=new Ge(0,0,0),B=0,N=!1,F=null,W=null,Z=null,P=null,Y=null,re.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Be,bindFramebuffer:an,drawBuffers:lt,useProgram:Tt,setBlending:oe,setMaterial:Pe,setFlipSided:Ye,setCullFace:Ue,setLineWidth:gt,setPolygonOffset:Je,setScissorTest:tt,activeTexture:rt,bindTexture:It,unbindTexture:G,compressedTexImage2D:qt,compressedTexImage3D:ut,texImage2D:w,texImage3D:ee,pixelStorei:ae,getParameter:be,updateUBOMapping:he,uniformBlockBinding:ue,texStorage2D:ct,texStorage3D:I,texSubImage2D:At,texSubImage3D:Ne,compressedTexSubImage2D:sn,compressedTexSubImage3D:at,scissor:we,viewport:Le,reset:Fe}}function oS(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,M=new FinalizationRegistry(I=>p.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return m?new OffscreenCanvas(I,w):Mo("canvas")}function v(I,w,ee){let be=1,ae=ct(I);if((ae.width>ee||ae.height>ee)&&(be=ee/Math.max(ae.width,ae.height)),be<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let we=Math.floor(be*ae.width),Le=Math.floor(be*ae.height);d===void 0&&(d=g(we,Le));let he=w?g(we,Le):d;return he.width=we,he.height=Le,he.getContext("2d").drawImage(I,0,0,we,Le),st("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+we+"x"+Le+")."),he}else return"data"in I&&st("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),I;return I}function A(I){return I.generateMipmaps}function S(I){i.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(I,w,ee,be,ae,we=!1){if(I!==null){if(i[I]!==void 0)return i[I];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Le;be&&(Le=e.get("EXT_texture_norm16"),Le||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=w;if(w===i.RED&&(ee===i.FLOAT&&(he=i.R32F),ee===i.HALF_FLOAT&&(he=i.R16F),ee===i.UNSIGNED_BYTE&&(he=i.R8),ee===i.UNSIGNED_SHORT&&Le&&(he=Le.R16_EXT),ee===i.SHORT&&Le&&(he=Le.R16_SNORM_EXT)),w===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(he=i.R8UI),ee===i.UNSIGNED_SHORT&&(he=i.R16UI),ee===i.UNSIGNED_INT&&(he=i.R32UI),ee===i.BYTE&&(he=i.R8I),ee===i.SHORT&&(he=i.R16I),ee===i.INT&&(he=i.R32I)),w===i.RG&&(ee===i.FLOAT&&(he=i.RG32F),ee===i.HALF_FLOAT&&(he=i.RG16F),ee===i.UNSIGNED_BYTE&&(he=i.RG8),ee===i.UNSIGNED_SHORT&&Le&&(he=Le.RG16_EXT),ee===i.SHORT&&Le&&(he=Le.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(he=i.RG8UI),ee===i.UNSIGNED_SHORT&&(he=i.RG16UI),ee===i.UNSIGNED_INT&&(he=i.RG32UI),ee===i.BYTE&&(he=i.RG8I),ee===i.SHORT&&(he=i.RG16I),ee===i.INT&&(he=i.RG32I)),w===i.RGB_INTEGER&&(ee===i.UNSIGNED_BYTE&&(he=i.RGB8UI),ee===i.UNSIGNED_SHORT&&(he=i.RGB16UI),ee===i.UNSIGNED_INT&&(he=i.RGB32UI),ee===i.BYTE&&(he=i.RGB8I),ee===i.SHORT&&(he=i.RGB16I),ee===i.INT&&(he=i.RGB32I)),w===i.RGBA_INTEGER&&(ee===i.UNSIGNED_BYTE&&(he=i.RGBA8UI),ee===i.UNSIGNED_SHORT&&(he=i.RGBA16UI),ee===i.UNSIGNED_INT&&(he=i.RGBA32UI),ee===i.BYTE&&(he=i.RGBA8I),ee===i.SHORT&&(he=i.RGBA16I),ee===i.INT&&(he=i.RGBA32I)),w===i.RGB&&(ee===i.UNSIGNED_SHORT&&Le&&(he=Le.RGB16_EXT),ee===i.SHORT&&Le&&(he=Le.RGB16_SNORM_EXT),ee===i.UNSIGNED_INT_5_9_9_9_REV&&(he=i.RGB9_E5),ee===i.UNSIGNED_INT_10F_11F_11F_REV&&(he=i.R11F_G11F_B10F)),w===i.RGBA){let ue=we?va:Ot.getTransfer(ae);ee===i.FLOAT&&(he=i.RGBA32F),ee===i.HALF_FLOAT&&(he=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(he=ue===cn?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT&&Le&&(he=Le.RGBA16_EXT),ee===i.SHORT&&Le&&(he=Le.RGBA16_SNORM_EXT),ee===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function x(I,w){let ee;return I?w===null||w===os||w===Xr?ee=i.DEPTH24_STENCIL8:w===ri?ee=i.DEPTH32F_STENCIL8:w===Go&&(ee=i.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===os||w===Xr?ee=i.DEPTH_COMPONENT24:w===ri?ee=i.DEPTH_COMPONENT32F:w===Go&&(ee=i.DEPTH_COMPONENT16),ee}function b(I,w){return A(I)===!0||I.isFramebufferTexture&&I.minFilter!==Un&&I.minFilter!==_n?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function B(I){let w=new WeakRef(I);n.get(I).__ref=w,p.add(w),M.register(I,w,w)}function N(I){let w=n.get(I).__ref;w!==void 0&&(p.delete(w),M.unregister(w))}function F(I){Z(I.target)}function W(I){P(I.target)}function Z(I){I.removeEventListener("dispose",F),N(I),K(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function P(I){I.removeEventListener("dispose",W),N(I),ye(I)}function Y(){for(let I of p){let w=I.deref();w!==void 0&&(w.isRenderTarget===!0?P(w):Z(w))}p.clear(),u.clear()}function K(I){let w=n.get(I);if(w.__webglInit===void 0)return;let ee=I.source,be=f.get(ee);if(be){let ae=be[w.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&X(I),Object.keys(be).length===0&&f.delete(ee)}n.remove(I)}function X(I){let w=n.get(I);i.deleteTexture(w.__webglTexture);let ee=I.source,be=f.get(ee);delete be[w.__cacheKey],o.memory.textures--}function ye(I){let w=n.get(I);w.__depthDisposeCallback&&w.__depthDisposeCallback();let ee=I.depthTexture;if(ee&&ee.renderTarget===I&&Z(ee),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(w.__webglFramebuffer[ae]))for(let we=0;we<w.__webglFramebuffer[ae].length;we++)i.deleteFramebuffer(w.__webglFramebuffer[ae][we]);else i.deleteFramebuffer(w.__webglFramebuffer[ae]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ae])}else{if(Array.isArray(w.__webglFramebuffer))for(let ae=0;ae<w.__webglFramebuffer.length;ae++)i.deleteFramebuffer(w.__webglFramebuffer[ae]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ae=0;ae<w.__webglColorRenderbuffer.length;ae++)w.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ae]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let be=I.textures;for(let ae=0,we=be.length;ae<we;ae++){let Le=n.get(be[ae]);Le.__webglTexture&&(i.deleteTexture(Le.__webglTexture),o.memory.textures--),n.remove(be[ae])}n.remove(I)}let te=0;function ce(){te=0}function me(){return te}function Oe(I){te=I}function He(){let I=te;return I>=s.maxTextures&&st("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),te+=1,I}function re(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.mipmapsAutoUpdate),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function Ie(I,w){let ee=n.get(I);if(I.isVideoTexture&&sn(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&ee.__version!==I.version){let be=I.image;if(be===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(ee,I,w);return}}else I.isExternalTexture&&(ee.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+w)}function We(I,w){let ee=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ee.__version!==I.version){Pe(ee,I,w);return}else I.isExternalTexture&&(ee.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+w)}function et(I,w){let ee=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ee.__version!==I.version){Pe(ee,I,w);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+w)}function de(I,w){let ee=n.get(I);if(I.version>0&&ee.__version!==I.version){Ye(ee,I,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+w)}let Be={[kn]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[lr]:i.MIRRORED_REPEAT},an={[Un]:i.NEAREST,[Dc]:i.NEAREST_MIPMAP_NEAREST,[Wr]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[ko]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},lt={[wm]:i.NEVER,[od]:i.ALWAYS,[Tm]:i.LESS,[sd]:i.LEQUAL,[Am]:i.EQUAL,[rd]:i.GEQUAL,[Em]:i.GREATER,[Rm]:i.NOTEQUAL};function Tt(I,w){if(w.type===ri&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===_n||w.magFilter===ko||w.magFilter===Wr||w.magFilter===mi||w.minFilter===_n||w.minFilter===ko||w.minFilter===Wr||w.minFilter===mi)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Be[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Be[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Be[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,an[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,an[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,lt[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Un||w.minFilter!==Wr&&w.minFilter!==mi||w.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function mt(I,w){let ee=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",F),B(w));let be=w.source,ae=f.get(be);ae===void 0&&(ae={},f.set(be,ae));let we=re(w);if(we!==I.__cacheKey){ae[we]===void 0&&(ae[we]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ee=!0),ae[we].usedTimes++;let Le=ae[I.__cacheKey];Le!==void 0&&(ae[I.__cacheKey].usedTimes--,Le.usedTimes===0&&X(w)),I.__cacheKey=we,I.__webglTexture=ae[we].texture}return ee}function pe(I,w,ee){return Math.floor(Math.floor(I/ee)/w)}function oe(I,w,ee,be){let we=I.updateRanges;if(we.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,ee,be,w.data);else{we.sort((O,fe)=>O.start-fe.start);let Le=0;for(let O=1;O<we.length;O++){let fe=we[Le],se=we[O],ze=fe.start+fe.count,Ae=pe(se.start,w.width,4),Me=pe(fe.start,w.width,4);se.start<=ze+1&&Ae===Me&&pe(se.start+se.count-1,w.width,4)===Ae?fe.count=Math.max(fe.count,se.start+se.count-fe.start):(++Le,we[Le]=se)}we.length=Le+1;let he=t.getParameter(i.UNPACK_ROW_LENGTH),ue=t.getParameter(i.UNPACK_SKIP_PIXELS),Fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let O=0,fe=we.length;O<fe;O++){let se=we[O],ze=Math.floor(se.start/4),Ae=Math.ceil(se.count/4),Me=ze%w.width,$e=Math.floor(ze/w.width),yt=Ae,Re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(i.UNPACK_SKIP_ROWS,$e),t.texSubImage2D(i.TEXTURE_2D,0,Me,$e,yt,Re,ee,be,w.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,he),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,Fe)}}function Pe(I,w,ee){let be=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(be=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(be=i.TEXTURE_3D);let ae=mt(I,w),we=w.source;t.bindTexture(be,I.__webglTexture,i.TEXTURE0+ee);let Le=n.get(we);if(we.version!==Le.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+ee),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let Re=Ot.getPrimaries(Ot.workingColorSpace),nt=w.colorSpace===js?null:Ot.getPrimaries(w.colorSpace),it=w.colorSpace===js||Re===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ue=v(w.image,!1,s.maxTextureSize);ue=at(w,ue);let Fe=r.convert(w.format,w.colorSpace),O=r.convert(w.type),fe=T(w.internalFormat,Fe,O,w.normalized,w.colorSpace,w.isVideoTexture);Tt(be,w);let se,ze=w.mipmaps,Ae=w.isVideoTexture!==!0,Me=Le.__version===void 0||ae===!0,$e=we.dataReady,yt=b(w,ue);if(w.isDepthTexture)fe=x(w.format===Js,w.type),Me&&(Ae?t.texStorage2D(i.TEXTURE_2D,1,fe,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,fe,ue.width,ue.height,0,Fe,O,null));else if(w.isDataTexture)if(ze.length>0){Ae&&Me&&t.texStorage2D(i.TEXTURE_2D,yt,fe,ze[0].width,ze[0].height);for(let Re=0,nt=ze.length;Re<nt;Re++)se=ze[Re],Ae?$e&&t.texSubImage2D(i.TEXTURE_2D,Re,0,0,se.width,se.height,Fe,O,se.data):t.texImage2D(i.TEXTURE_2D,Re,fe,se.width,se.height,0,Fe,O,se.data);w.generateMipmaps=!1}else Ae?(Me&&t.texStorage2D(i.TEXTURE_2D,yt,fe,ue.width,ue.height),$e&&oe(w,ue,Fe,O)):t.texImage2D(i.TEXTURE_2D,0,fe,ue.width,ue.height,0,Fe,O,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ae&&Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,yt,fe,ze[0].width,ze[0].height,ue.depth);for(let Re=0,nt=ze.length;Re<nt;Re++)if(se=ze[Re],w.format!==_i)if(Fe!==null)if(Ae){if($e)if(w.layerUpdates.size>0){let it=_d(se.width,se.height,w.format,w.type);for(let ke of w.layerUpdates){let Ft=se.data.subarray(ke*it/se.data.BYTES_PER_ELEMENT,(ke+1)*it/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,ke,se.width,se.height,1,Fe,Ft)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,0,se.width,se.height,ue.depth,Fe,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Re,fe,se.width,se.height,ue.depth,0,se.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?$e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,0,se.width,se.height,ue.depth,Fe,O,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Re,fe,se.width,se.height,ue.depth,0,Fe,O,se.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Ae&&Me&&t.texStorage2D(i.TEXTURE_2D,yt,fe,ze[0].width,ze[0].height);for(let Re=0,nt=ze.length;Re<nt;Re++)se=ze[Re],w.format!==_i?Fe!==null?Ae?$e&&t.compressedTexSubImage2D(i.TEXTURE_2D,Re,0,0,se.width,se.height,Fe,se.data):t.compressedTexImage2D(i.TEXTURE_2D,Re,fe,se.width,se.height,0,se.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?$e&&t.texSubImage2D(i.TEXTURE_2D,Re,0,0,se.width,se.height,Fe,O,se.data):t.texImage2D(i.TEXTURE_2D,Re,fe,se.width,se.height,0,Fe,O,se.data)}else if(w.isDataArrayTexture)if(Ae){if(Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,yt,fe,ue.width,ue.height,ue.depth),$e)if(w.layerUpdates.size>0){let Re=_d(ue.width,ue.height,w.format,w.type);for(let nt of w.layerUpdates){let it=ue.data.subarray(nt*Re/ue.data.BYTES_PER_ELEMENT,(nt+1)*Re/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,ue.width,ue.height,1,Fe,O,it)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Fe,O,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,ue.width,ue.height,ue.depth,0,Fe,O,ue.data);else if(w.isData3DTexture)Ae?(Me&&t.texStorage3D(i.TEXTURE_3D,yt,fe,ue.width,ue.height,ue.depth),$e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Fe,O,ue.data)):t.texImage3D(i.TEXTURE_3D,0,fe,ue.width,ue.height,ue.depth,0,Fe,O,ue.data);else if(w.isFramebufferTexture){if(Me)if(Ae)t.texStorage2D(i.TEXTURE_2D,yt,fe,ue.width,ue.height);else{let Re=ue.width,nt=ue.height;for(let it=0;it<yt;it++)t.texImage2D(i.TEXTURE_2D,it,fe,Re,nt,0,Fe,O,null),Re>>=1,nt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let Re=i.canvas;if(Re.hasAttribute("layoutsubtree")||Re.setAttribute("layoutsubtree","true"),ue.parentNode!==Re){Re.appendChild(ue),u.add(w),Re.onpaint=nt=>{let it=nt.changedElements;for(let ke of u)it.includes(ke.image)&&(ke.needsUpdate=!0)},Re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ue);else{let it=i.RGBA,ke=i.RGBA,Ft=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,it,ke,Ft,ue)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Ae&&Me){let Re=ct(ze[0]);t.texStorage2D(i.TEXTURE_2D,yt,fe,Re.width,Re.height)}for(let Re=0,nt=ze.length;Re<nt;Re++)se=ze[Re],Ae?$e&&t.texSubImage2D(i.TEXTURE_2D,Re,0,0,Fe,O,se):t.texImage2D(i.TEXTURE_2D,Re,fe,Fe,O,se);w.generateMipmaps=!1}else if(Ae){if(Me){let Re=ct(ue);t.texStorage2D(i.TEXTURE_2D,yt,fe,Re.width,Re.height)}$e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Fe,O,ue)}else t.texImage2D(i.TEXTURE_2D,0,fe,Fe,O,ue);A(w)&&w.mipmapsAutoUpdate===!0&&S(be),Le.__version=we.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Ye(I,w,ee){if(w.image.length!==6)return;let be=mt(I,w),ae=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+ee);let we=n.get(ae);if(ae.version!==we.__version||be===!0){t.activeTexture(i.TEXTURE0+ee);let Le=Ot.getPrimaries(Ot.workingColorSpace),he=w.colorSpace===js?null:Ot.getPrimaries(w.colorSpace),ue=w.colorSpace===js||Le===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Fe=w.isCompressedTexture||w.image[0].isCompressedTexture,O=w.image[0]&&w.image[0].isDataTexture,fe=[];for(let ke=0;ke<6;ke++)!Fe&&!O?fe[ke]=v(w.image[ke],!0,s.maxCubemapSize):fe[ke]=O?w.image[ke].image:w.image[ke],fe[ke]=at(w,fe[ke]);let se=fe[0],ze=r.convert(w.format,w.colorSpace),Ae=r.convert(w.type),Me=T(w.internalFormat,ze,Ae,w.normalized,w.colorSpace),$e=w.isVideoTexture!==!0,yt=we.__version===void 0||be===!0,Re=ae.dataReady,nt=b(w,se);Tt(i.TEXTURE_CUBE_MAP,w);let it;if(w.isDepthTexture){if(Me=x(w.format===Js,w.type),yt)if($e)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Me,se.width,se.height);else for(let ke=0;ke<6;ke++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Me,se.width,se.height,0,ze,Ae,null)}else if(Fe){$e&&yt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Me,se.width,se.height);for(let ke=0;ke<6;ke++){it=fe[ke].mipmaps;for(let Ft=0;Ft<it.length;Ft++){let An=it[Ft];w.format!==_i?ze!==null?$e?Re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Ft,0,0,An.width,An.height,ze,An.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Ft,Me,An.width,An.height,0,An.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Ft,0,0,An.width,An.height,ze,Ae,An.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Ft,Me,An.width,An.height,0,ze,Ae,An.data)}}}else{if(it=w.mipmaps,$e&&yt){it.length>0&&nt++;let ke=ct(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Me,ke.width,ke.height)}for(let ke=0;ke<6;ke++)if(O){$e?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,0,0,fe[ke].width,fe[ke].height,ze,Ae,fe[ke].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Me,fe[ke].width,fe[ke].height,0,ze,Ae,fe[ke].data);for(let Ft=0;Ft<it.length;Ft++){let Wn=it[Ft].image[ke].image;$e?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Ft+1,0,0,Wn.width,Wn.height,ze,Ae,Wn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Ft+1,Me,Wn.width,Wn.height,0,ze,Ae,Wn.data)}}else{$e?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,0,0,ze,Ae,fe[ke]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Me,ze,Ae,fe[ke]);for(let Ft=0;Ft<it.length;Ft++){let An=it[Ft];$e?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Ft+1,0,0,ze,Ae,An.image[ke]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Ft+1,Me,ze,Ae,An.image[ke])}}}A(w)&&w.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),we.__version=ae.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Ue(I,w,ee,be,ae,we){let Le=r.convert(ee.format,ee.colorSpace),he=r.convert(ee.type),ue=T(ee.internalFormat,Le,he,ee.normalized,ee.colorSpace),Fe=n.get(w),O=n.get(ee);if(O.__renderTarget=w,!Fe.__hasExternalTextures){let fe=Math.max(1,w.width>>we),se=Math.max(1,w.height>>we);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,we,ue,fe,se,w.depth,0,Le,he,null):t.texImage2D(ae,we,ue,fe,se,0,Le,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Ne(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,ae,O.__webglTexture,0,At(w)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,be,ae,O.__webglTexture,we),t.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(I,w,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){let be=w.depthTexture,ae=be&&be.isDepthTexture?be.type:null,we=x(w.stencilBuffer,ae),Le=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ne(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At(w),we,w.width,w.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,At(w),we,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,we,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,I)}else{let be=w.textures;for(let ae=0;ae<be.length;ae++){let we=be[ae],Le=r.convert(we.format,we.colorSpace),he=r.convert(we.type),ue=T(we.internalFormat,Le,he,we.normalized,we.colorSpace);Ne(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At(w),ue,w.width,w.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,At(w),ue,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ue,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Je(I,w,ee){let be=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=n.get(w.depthTexture);ae.__renderTarget=w;let we=be?w.depthTexture.image[0]:w.depthTexture.image;(!ae.__webglTexture||we.width!==w.width||we.height!==w.height)&&(we.width=w.width,we.height=w.height,w.depthTexture.needsUpdate=!0),be?de(w.depthTexture,0):Ie(w.depthTexture,0);let Le=ae.__webglTexture,he=At(w),ue=be?i.TEXTURE_CUBE_MAP_POSITIVE_X+ee:i.TEXTURE_2D,Fe=w.depthTexture.format===Js?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===ks)Ne(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Fe,ue,Le,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,Fe,ue,Le,0);else if(w.depthTexture.format===Js)Ne(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Fe,ue,Le,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,Fe,ue,Le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(I){let w=n.get(I),ee=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let be=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),be){let ae=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,be.removeEventListener("dispose",ae)};be.addEventListener("dispose",ae),w.__depthDisposeCallback=ae}w.__boundDepthTexture=be}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(ee)for(let be=0;be<6;be++)Je(w.__webglFramebuffer[be],I,be);else I.texture.mipmaps.length>0?Je(w.__webglFramebuffer[0],I,0):Je(w.__webglFramebuffer,I,0);else if(ee){w.__webglDepthbuffer=[];for(let be=0;be<6;be++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[be]),w.__webglDepthbuffer[be]===void 0)w.__webglDepthbuffer[be]=i.createRenderbuffer(),gt(w.__webglDepthbuffer[be],I,!1);else{let ae=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=w.__webglDepthbuffer[be];i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,we)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),gt(w.__webglDepthbuffer,I,!1);else{let ae=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,we)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(I,w,ee){let be=n.get(I);w!==void 0&&Ue(be.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&tt(I)}function It(I){let w=I.texture,ee=n.get(I),be=n.get(w);I.addEventListener("dispose",W),B(I);let ae=I.textures,we=I.isWebGLCubeRenderTarget===!0,Le=ae.length>1;if(Le||(be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture()),be.__version=w.version,o.memory.textures++),we){ee.__webglFramebuffer=[];for(let he=0;he<6;he++)if(w.mipmaps.length>0){ee.__webglFramebuffer[he]=[];for(let ue=0;ue<w.mipmaps.length;ue++)ee.__webglFramebuffer[he][ue]=i.createFramebuffer()}else ee.__webglFramebuffer[he]=i.createFramebuffer()}else{if(w.mipmaps.length>0){ee.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)ee.__webglFramebuffer[he]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(Le)for(let he=0,ue=ae.length;he<ue;he++){let Fe=n.get(ae[he]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Ne(I)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let he=0;he<ae.length;he++){let ue=ae[he];ee.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[he]);let Fe=r.convert(ue.format,ue.colorSpace),O=r.convert(ue.type),fe=T(ue.internalFormat,Fe,O,ue.normalized,ue.colorSpace,I.isXRRenderTarget===!0),se=At(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,se,fe,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,ee.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(ee.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(we){t.bindTexture(i.TEXTURE_CUBE_MAP,be.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,w);for(let he=0;he<6;he++)if(w.mipmaps.length>0)for(let ue=0;ue<w.mipmaps.length;ue++)Ue(ee.__webglFramebuffer[he][ue],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ue);else Ue(ee.__webglFramebuffer[he],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);A(w)?S(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(Le){for(let he=0,ue=ae.length;he<ue;he++){let Fe=ae[he],O=n.get(Fe),fe=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(fe=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,O.__webglTexture),Tt(fe,Fe),Ue(ee.__webglFramebuffer,I,Fe,i.COLOR_ATTACHMENT0+he,fe,0),A(Fe)&&S(fe)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(he=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,be.__webglTexture),Tt(he,w),w.mipmaps.length>0)for(let ue=0;ue<w.mipmaps.length;ue++)Ue(ee.__webglFramebuffer[ue],I,w,i.COLOR_ATTACHMENT0,he,ue);else Ue(ee.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,he,0);A(w)?S(he):w.mipmaps.length>0&&i.texParameteri(he,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&tt(I)}function G(I){let w=I.textures;for(let ee=0,be=w.length;ee<be;ee++){let ae=w[ee];if(A(ae)&&ae.mipmapsAutoUpdate===!0){let we=C(I),Le=n.get(ae).__webglTexture;t.bindTexture(we,Le),S(we),t.unbindTexture()}}}let qt=[];function ut(I){if(I.samples>0){if(Ne(I)===!1){let w=I.textures,ee=I.width,be=I.height,ae=i.COLOR_BUFFER_BIT,we=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(I),he=w.length>1;if(he)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Fe]);let O=n.get(w[Fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,ee,be,0,0,ee,be,ae,i.NEAREST),l===!0&&(qt.length=0,qt.push(i.COLOR_ATTACHMENT0+Fe),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&qt.push(we),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Fe]);let O=n.get(w[Fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,O,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function At(I){return Math.min(s.maxSamples,I.samples)}function Ne(I){let w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function sn(I){let w=o.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function at(I,w){let ee=I.colorSpace,be=I.format,ae=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ee!==Jn&&ee!==js&&(Ot.getTransfer(ee)===cn?(be!==_i||ae!==Ci)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",ee)),w}function ct(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=He,this.resetTextureUnits=ce,this.getTextureUnits=me,this.setTextureUnits=Oe,this.setTexture2D=Ie,this.setTexture2DArray=We,this.setTexture3D=et,this.setTextureCube=de,this.rebindTextures=rt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Ne,this.dispose=Y}function aS(i,e){function t(n,s=js){let r,o=Ot.getTransfer(s);if(n===Ci)return i.UNSIGNED_BYTE;if(n===Fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ed)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ju)return i.BYTE;if(n===$u)return i.SHORT;if(n===Go)return i.UNSIGNED_SHORT;if(n===Uc)return i.INT;if(n===os)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===gi)return i.HALF_FLOAT;if(n===td)return i.ALPHA;if(n===nd)return i.RGB;if(n===_i)return i.RGBA;if(n===ks)return i.DEPTH_COMPONENT;if(n===Js)return i.DEPTH_STENCIL;if(n===Bc)return i.RED;if(n===zc)return i.RED_INTEGER;if(n===yr)return i.RG;if(n===kc)return i.RG_INTEGER;if(n===Gc)return i.RGBA_INTEGER;if(n===Za||n===Ja||n===ja||n===$a)if(o===cn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hc||n===Vc||n===Wc||n===Xc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qc||n===Yc||n===Kc||n===Zc||n===Jc||n===Qa||n===jc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qc||n===Yc)return o===cn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Kc)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zc)return r.COMPRESSED_R11_EAC;if(n===Jc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Qa)return r.COMPRESSED_RG11_EAC;if(n===jc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$c||n===Qc||n===eh||n===th||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===lh||n===ch||n===hh||n===uh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$c)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qc)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eh)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===th)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nh)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ih)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sh)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rh)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oh)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ah)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lh)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ch)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hh)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uh)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dh||n===fh||n===ph)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===dh)return o===cn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ph)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mh||n===gh||n===el||n===_h)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===mh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_h)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var lS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cS=`
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

}`,Pd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new La(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Fi({vertexShader:lS,fragmentShader:cS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new Nt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ld=class extends _s{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,M=typeof XRWebGLBinding<"u",m=new Pd,g={},v=t.getContextAttributes(),A=null,S=null,C=[],T=[],x=new ge,b=null,B=null,N=new Dn;N.viewport=new on;let F=new Dn;F.viewport=new on;let W=[N,F],Z=new Ic,P=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Ie=C[re];return Ie===void 0&&(Ie=new To,C[re]=Ie),Ie.getTargetRaySpace()},this.getControllerGrip=function(re){let Ie=C[re];return Ie===void 0&&(Ie=new To,C[re]=Ie),Ie.getGripSpace()},this.getHand=function(re){let Ie=C[re];return Ie===void 0&&(Ie=new To,C[re]=Ie),Ie.getHandSpace()};function K(re){let Ie=T.indexOf(re.inputSource);if(Ie===-1)return;let We=C[Ie];We!==void 0&&(We.update(re.inputSource,re.frame,c||o),We.dispatchEvent({type:re.type,data:re.inputSource}))}function X(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ye);for(let re=0;re<C.length;re++){let Ie=T[re];Ie!==null&&(T[re]=null,C[re].disconnect(Ie))}P=null,Y=null,m.reset();for(let re in g)delete g[re];if(e.setRenderTarget(A),f=null,d=null,u=null,s=null,S=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),B!==null){let re=B.camera;re.fov=B.fov,re.zoom=B.zoom,re.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,n.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,n.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ye),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let We=null,et=null,de=null;v.depth&&(de=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,We=v.stencil?Js:ks,et=v.stencil?Xr:os);let Be={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ui(d.textureWidth,d.textureHeight,{format:_i,type:Ci,depthTexture:new Hs(d.textureWidth,d.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,We),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let We={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,We),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Ui(f.framebufferWidth,f.framebufferHeight,{format:_i,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),He.setContext(s),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ye(re){for(let Ie=0;Ie<re.removed.length;Ie++){let We=re.removed[Ie],et=T.indexOf(We);et>=0&&(T[et]=null,C[et].disconnect(We))}for(let Ie=0;Ie<re.added.length;Ie++){let We=re.added[Ie],et=T.indexOf(We);if(et===-1){for(let Be=0;Be<C.length;Be++)if(Be>=T.length){T.push(We),et=Be;break}else if(T[Be]===null){T[Be]=We,et=Be;break}if(et===-1)break}let de=C[et];de&&de.connect(We)}}function te(re,Ie){Ie===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Ie.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let Ie=re.near,We=re.far;m.texture!==null&&(m.depthNear>0&&(Ie=m.depthNear),m.depthFar>0&&(We=m.depthFar)),Z.near=F.near=N.near=Ie,Z.far=F.far=N.far=We,(P!==Z.near||Y!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),P=Z.near,Y=Z.far),Z.layers.mask=re.layers.mask|6,N.layers.mask=Z.layers.mask&-5,F.layers.mask=Z.layers.mask&-3;let et=re.parent,de=Z.cameras;te(Z,et);for(let Be=0;Be<de.length;Be++)te(de[Be],et);Z.projectionMatrix.copy(N.projectionMatrix),Z.projectionMatrixInverse.copy(N.projectionMatrixInverse),B===null&&re.isPerspectiveCamera&&(B={camera:re,fov:re.fov,zoom:re.zoom}),ce(re,Z,et)};function ce(re,Ie,We){We===null?re.matrix.copy(Ie.matrixWorld):(re.matrix.copy(We.matrixWorld),re.matrix.invert(),re.matrix.multiply(Ie.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Ie.projectionMatrix),re.projectionMatrixInverse.copy(Ie.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Pr*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=re)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Z)},this.getCameraTexture=function(re){return g[re]};let me=null;function Oe(re,Ie){if(h=Ie.getViewerPose(c||o),p=Ie,h!==null){let We=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let et=!1;We.length!==Z.cameras.length&&(Z.cameras.length=0,et=!0);for(let lt=0;lt<We.length;lt++){let Tt=We[lt],mt=null;if(f!==null)mt=f.getViewport(Tt);else{let oe=u.getViewSubImage(d,Tt);mt=oe.viewport,lt===0&&(e.setRenderTargetTextures(S,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(S))}let pe=W[lt];pe===void 0&&(pe=new Dn,pe.layers.enable(lt),pe.viewport=new on,W[lt]=pe),pe.matrix.fromArray(Tt.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Tt.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(mt.x,mt.y,mt.width,mt.height),lt===0&&(Z.matrix.copy(pe.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),et===!0&&Z.cameras.push(pe)}let de=s.enabledFeatures;if(de&&de.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=n.getBinding();let lt=u.getDepthInformation(We[0]);lt&&lt.isValid&&lt.texture&&m.init(lt,s.renderState)}if(de&&de.includes("camera-access")&&M){e.state.unbindTexture(),u=n.getBinding();for(let lt=0;lt<We.length;lt++){let Tt=We[lt].camera;if(Tt){let mt=g[Tt];mt||(mt=new La,g[Tt]=mt);let pe=u.getCameraImage(Tt);mt.sourceTexture=pe}}}}for(let We=0;We<C.length;We++){let et=T[We],de=C[We];et!==null&&de!==void 0&&de.update(et,Ie,c||o)}me&&me(re,Ie),Ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ie}),p=null}let He=new cg;He.setAnimationLoop(Oe),this.setAnimationLoop=function(re){me=re},this.dispose=function(){}}},hS=new xt,yg=new wt;yg.set(-1,0,0,0,1,0,0,0,1);function uS(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,pd(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,A,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,S)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),M(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,A):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===pi&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===pi&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),A=v.envMap,S=v.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(hS.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(yg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,A){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=A*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pi&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function M(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dS(i,e,t,n){let s={},r={};function o(v,A){let S=A.program;n.uniformBlockBinding(v,S,s[v.id])}function a(v,A){let S=s[v.id];S===void 0&&(p(v),S=l(v),s[v.id]=S,v.addEventListener("dispose",m));let C=A.program;n.updateUBOMapping(v,C);let T=e.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){let A=i.createBuffer(),S=v.__size,C=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,S,C),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(v){let A=s[v.id],S=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let T=0,x=S.length;T<x;T++){let b=S[T];if(Array.isArray(b))for(let B=0,N=b.length;B<N;B++)h(b[B],T,B,C);else h(b,T,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,A,S,C){if(d(v,A,S,C)===!0){let T=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let B=0;B<x.length;B++){let N=x[B],F=M(N,!0);u(N,v.__data,b),b+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,v.__data)}}function u(v,A,S){typeof v=="number"||typeof v=="boolean"?A[S]=v:v.isMatrix3?(A[S]=v.elements[0],A[S+1]=v.elements[1],A[S+2]=v.elements[2],A[S+3]=0,A[S+4]=v.elements[3],A[S+5]=v.elements[4],A[S+6]=v.elements[5],A[S+7]=0,A[S+8]=v.elements[6],A[S+9]=v.elements[7],A[S+10]=v.elements[8],A[S+11]=0):ArrayBuffer.isView(v)?A.set(v.subarray(0,A.length-S),S):v.toArray(A,S)}function d(v,A,S,C){let T=v.value,x=A+"_"+S;if(Array.isArray(T)){C[x]===void 0&&(C[x]=[]);let b=C[x],B=!1;for(let N=0;N<T.length;N++)f(T[N],b,N)===!0&&(B=!0);return B}return f(T,C,x)}function f(v,A,S){if(A[S]===void 0)return typeof v=="number"||typeof v=="boolean"?A[S]=v:ArrayBuffer.isView(v)?A[S]=v.slice():A[S]=v.clone(),!0;{let C=A[S];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return A[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function p(v){let A=v.uniforms,S=0,C=16;for(let x=0,b=A.length;x<b;x++){let B=Array.isArray(A[x])?A[x]:[A[x]];for(let N=0,F=B.length;N<F;N++){let W=B[N],Z=Array.isArray(W.value)?W.value:[W.value],P=Array.isArray(A[x])||Array.isArray(W.value),Y=S;for(let X=0,ye=Z.length;X<ye;X++){let te=Z[X],ce=M(te,P),me=S%C,Oe=me%ce.boundary,He=me+Oe;S+=Oe,He!==0&&C-He<ce.storage&&(S+=C-He),X===0&&(Y=S),S+=ce.storage}let K=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new K((S-Y)/Float32Array.BYTES_PER_ELEMENT),W.__offset=Y}}let T=S%C;return T>0&&(S+=C-T),v.__size=S,v.__cache={},this}function M(v,A){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):st("WebGLRenderer: Unsupported uniform value type.",v),A===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(v){let A=v.target;A.removeEventListener("dispose",m),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:g}}var fS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ss=null;function pS(){return Ss===null&&(Ss=new ts(fS,16,16,yr,gi),Ss.name="DFG_LUT",Ss.minFilter=_n,Ss.magFilter=_n,Ss.wrapS=Ti,Ss.wrapT=Ti,Ss.generateMipmaps=!1,Ss.needsUpdate=!0),Ss}var rl=class{constructor(e={}){let{canvas:t=Cm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ci}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let M=f,m=new Set([Gc,kc,zc]),g=new Set([Ci,os,Go,Xr,Fc,Oc]),v=new Uint32Array(4),A=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},C=null,T=null,x=[],b=[],B=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ms,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,F=!1,W=null,Z=null,P=null,Y=null;this._outputColorSpace=ln;let K=0,X=0,ye=null,te=-1,ce=null,me=new on,Oe=new on,He=null,re=new Ge(0),Ie=0,We=t.width,et=t.height,de=1,Be=null,an=null,lt=new on(0,0,We,et),Tt=new on(0,0,We,et),mt=!1,pe=new pr,oe=new dc,Pe=!1,Ye=!1,Ue=new xt,gt=new U,Je=new on,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function It(){return ye===null?de:1}let G=n;function qt(E,z){return t.getContext(E,z)}let ut,At,Ne,sn,at,ct,I,w,ee,be,ae,we,Le,he,ue,Fe,O,fe,se,ze,Ae,Me,$e;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",ke,!1),G===null){let z="webgl2";if(G=qt(z,E),G===null)throw qt(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}yt()}catch(E){throw t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),_t("WebGLRenderer: "+E.message),E}function yt(){ut=new Tv(G),ut.init(),Ae=new aS(G,ut),At=new pv(G,ut,e,Ae),Ne=new rS(G,ut),At.reversedDepthBuffer&&d&&Ne.buffers.depth.setReversed(!0),Z=G.createFramebuffer(),P=G.createFramebuffer(),Y=G.createFramebuffer(),sn=new Rv(G),at=new XM,ct=new oS(G,ut,Ne,at,At,Ae,sn),I=new wv(N),w=new I_(G),Me=new dv(G,w),ee=new Av(G,w,sn,Me),be=new Iv(G,ee,w,Me,sn),fe=new Cv(G,At,ct),ue=new mv(at),ae=new WM(N,I,ut,At,Me,ue),we=new uS(N,at),Le=new YM,he=new QM(ut),O=new uv(N,I,Ne,be,p,l),Fe=new sS(N,be,At),$e=new dS(G,sn,At,Ne),se=new fv(G,ut,sn),ze=new Ev(G,ut,sn),sn.programs=ae.programs,N.capabilities=At,N.extensions=ut,N.properties=at,N.renderLists=Le,N.shadowMap=Fe,N.state=Ne,N.info=sn}M!==Ci&&(B=new Lv(M,t.width,t.height,a,s,r));let Re=new Ld(N,G);this.xr=Re,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let E=ut.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ut.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(E){E!==void 0&&(de=E,this.setSize(We,et,!1))},this.getSize=function(E){return E.set(We,et)},this.setSize=function(E,z,ne=!0){if(Re.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}We=E,et=z,t.width=Math.floor(E*de),t.height=Math.floor(z*de),ne===!0&&(t.style.width=E+"px",t.style.height=z+"px"),B!==null&&B.setSize(t.width,t.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(We*de,et*de).floor()},this.setDrawingBufferSize=function(E,z,ne){We=E,et=z,de=ne,t.width=Math.floor(E*ne),t.height=Math.floor(z*ne),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(M===Ci){_t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(me)},this.getViewport=function(E){return E.copy(lt)},this.setViewport=function(E,z,ne,j){E.isVector4?lt.set(E.x,E.y,E.z,E.w):lt.set(E,z,ne,j),Ne.viewport(me.copy(lt).multiplyScalar(It()).round())},this.getScissor=function(E){return E.copy(Tt)},this.setScissor=function(E,z,ne,j){E.isVector4?Tt.set(E.x,E.y,E.z,E.w):Tt.set(E,z,ne,j),Ne.scissor(Oe.copy(Tt).multiplyScalar(It()).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(E){Ne.setScissorTest(mt=E)},this.setOpaqueSort=function(E){Be=E},this.setTransparentSort=function(E){an=E},this.getClearColor=function(E){return E.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,ne=!0){let j=0;if(E){let Q=!1;if(ye!==null){let Ce=ye.texture.format;Q=m.has(Ce)}if(Q){let Ce=ye.texture.type,Ke=g.has(Ce),Se=O.getClearColor(),De=O.getClearAlpha(),Ve=Se.r,ht=Se.g,St=Se.b;Ke?(v[0]=Ve,v[1]=ht,v[2]=St,v[3]=De,G.clearBufferuiv(G.COLOR,0,v)):(A[0]=Ve,A[1]=ht,A[2]=St,A[3]=De,G.clearBufferiv(G.COLOR,0,A))}else j|=G.COLOR_BUFFER_BIT}z&&(j|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(j|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&G.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),W=E},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),O.dispose(),Le.dispose(),he.dispose(),ct.dispose(),at.dispose(),I.dispose(),be.dispose(),ee.dispose(),Me.dispose(),$e.dispose(),ae.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",ls),Re.removeEventListener("sessionend",cs),ai.stop()};function nt(E){E.preventDefault(),Ma("WebGLRenderer: Context Lost."),F=!0}function it(){Ma("WebGLRenderer: Context Restored."),F=!1;let E=sn.autoReset,z=Fe.enabled,ne=Fe.autoUpdate,j=Fe.needsUpdate,Q=Fe.type;yt(),sn.autoReset=E,Fe.enabled=z,Fe.autoUpdate=ne,Fe.needsUpdate=j,Fe.type=Q}function ke(E){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ft(E){let z=E.target;z.removeEventListener("dispose",Ft),An(z)}function An(E){Wn(E),at.remove(E)}function Wn(E){let z=at.get(E).programs;z!==void 0&&(z.forEach(function(ne){ae.releaseProgram(ne)}),E.isShaderMaterial&&ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,ne,j,Q,Ce){z===null&&(z=tt);let Ke=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Se=Es(E,z,ne,j,Q);Ne.setMaterial(j,Ke);let De=ne.index,Ve=1;if(j.wireframe===!0){if(De=ee.getWireframeAttribute(ne),De===void 0)return;Ve=2}let ht=ne.drawRange,St=ne.attributes.position,Qe=ht.start*Ve,Et=(ht.start+ht.count)*Ve;Ce!==null&&(Qe=Math.max(Qe,Ce.start*Ve),Et=Math.min(Et,(Ce.start+Ce.count)*Ve)),De!==null?(Qe=Math.max(Qe,0),Et=Math.min(Et,De.count)):St!=null&&(Qe=Math.max(Qe,0),Et=Math.min(Et,St.count));let vn=Et-Qe;if(vn<0||vn===1/0)return;Me.setup(Q,j,Se,ne,De);let Yt,Gt=se;if(De!==null&&(Yt=w.get(De),Gt=ze,Gt.setIndex(Yt)),Q.isMesh)j.wireframe===!0?(Ne.setLineWidth(j.wireframeLinewidth*It()),Gt.setMode(G.LINES)):Gt.setMode(G.TRIANGLES);else if(Q.isLine){let pn=j.linewidth;pn===void 0&&(pn=1),Ne.setLineWidth(pn*It()),Q.isLineSegments?Gt.setMode(G.LINES):Q.isLineLoop?Gt.setMode(G.LINE_LOOP):Gt.setMode(G.LINE_STRIP)}else Q.isPoints?Gt.setMode(G.POINTS):Q.isSprite&&Gt.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))Gt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let pn=Q._multiDrawStarts,je=Q._multiDrawCounts,En=Q._multiDrawCount,zt=De?w.get(De).bytesPerElement:1,ki=at.get(j).currentProgram.getUniforms();for(let yn=0;yn<En;yn++)ki.setValue(G,"_gl_DrawID",yn),Gt.render(pn[yn]/zt,je[yn])}else if(Q.isInstancedMesh)Gt.renderInstances(Qe,vn,Q.count);else if(ne.isInstancedBufferGeometry){let pn=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,je=Math.min(ne.instanceCount,pn);Gt.renderInstances(Qe,vn,je)}else Gt.render(Qe,vn)};function Ki(E,z,ne,j){W!==null&&E.isNodeMaterial&&W.setObject(j,E),Pe===!0&&ue.setState(E,ne,!1),E.transparent===!0&&E.side===nn&&E.forceSinglePass===!1?(E.side=pi,E.needsUpdate=!0,zi(E,z,j),E.side=vs,E.needsUpdate=!0,zi(E,z,j),E.side=nn):zi(E,z,j)}this.compile=function(E,z,ne=null){ne===null&&(ne=E),W!==null&&W.renderStart(E,z,ne),T=he.get(ne),T.init(z),b.push(T),ne.traverseVisible(function(Q){Q.isLight&&Q.layers.test(z.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),E!==ne&&E.traverseVisible(function(Q){Q.isLight&&Q.layers.test(z.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),T.setupLights(),W!==null&&W.updateLights(T.state.lightsArray),Ye=this.localClippingEnabled,Pe=ue.init(this.clippingPlanes,Ye),Pe===!0&&ue.setGlobalState(this.clippingPlanes,z),W!==null&&Fe.render(T.state.shadowsArray,ne,z);let j=new Set;return E.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ce=Q.material;if(Ce)if(Array.isArray(Ce))for(let Ke=0;Ke<Ce.length;Ke++){let Se=Ce[Ke];Ki(Se,ne,z,Q),j.add(Se)}else Ki(Ce,ne,z,Q),j.add(Ce)}),T=b.pop(),W!==null&&W.renderEnd(),j},this.compileAsync=function(E,z,ne=null){let j=this.compile(E,z,ne);return new Promise(Q=>{function Ce(){if(j.forEach(function(Ke){let De=at.get(Ke).currentProgram;(De===void 0||De.isReady())&&j.delete(Ke)}),j.size===0){Q(E);return}setTimeout(Ce,10)}ut.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Ts=null;function Zr(E){Ts&&Ts(E)}function ls(){ai.stop()}function cs(){ai.start()}let ai=new cg;ai.setAnimationLoop(Zr),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(E){Ts=E,Re.setAnimationLoop(E),E===null?ai.stop():ai.start()},Re.addEventListener("sessionstart",ls),Re.addEventListener("sessionend",cs),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;W!==null&&W.renderStart(E,z);let ne=Re.enabled===!0&&Re.isPresenting===!0,j=B!==null&&(ye===null||ne)&&B.begin(N,ye);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(z),z=Re.getCamera()),E.isScene===!0&&E.onBeforeRender(N,E,z,ye),T=he.get(E,b.length),T.init(z),T.state.textureUnits=ct.getTextureUnits(),b.push(T),Ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?oe.setFromArrayCamera(z):pe.setFromProjectionMatrix(Ue,Wi,z.reversedDepth),Ye=this.localClippingEnabled,Pe=ue.init(this.clippingPlanes,Ye),C=Le.get(E,x.length),C.init(),x.push(C),this.info.render.frame++,Re.enabled===!0&&Re.isPresenting===!0){let Ke=N.xr.getDepthSensingMesh();Ke!==null&&xi(Ke,z,-1/0,N.sortObjects)}xi(E,z,0,N.sortObjects),C.finish(),W!==null&&W.updateLights(T.state.lightsArray),N.sortObjects===!0&&C.sort(Be,an),rt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,rt&&O.addToRenderList(C,E),this.info.autoReset===!0&&this.info.reset(),Pe===!0&&ue.beginShadows();let Q=T.state.shadowsArray;if(Fe.render(Q,E,z),Pe===!0&&ue.endShadows(),(j&&B.hasRenderPass())===!1){let Ke=C.opaque,Se=C.transmissive;if(T.setupLights(),z.isArrayCamera){let De=z.cameras;if(Se.length>0)for(let Ve=0,ht=De.length;Ve<ht;Ve++){let St=De[Ve];Qs(Ke,Se,E,St)}rt&&O.render(E);for(let Ve=0,ht=De.length;Ve<ht;Ve++){let St=De[Ve];Pi(C,E,St,St.viewport)}}else Se.length>0&&Qs(Ke,Se,E,z),rt&&O.render(E),Pi(C,E,z)}ye!==null&&X===0&&(ct.updateMultisampleRenderTarget(ye),ct.updateRenderTargetMipmap(ye)),j&&B.end(N),E.isScene===!0&&E.onAfterRender(N,E,z),Me.resetDefaultState(),te=-1,ce=null,b.pop(),b.length>0?(T=b[b.length-1],ct.setTextureUnits(T.state.textureUnits),Pe===!0&&ue.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?C=x[x.length-1]:C=null,W!==null&&W.renderEnd()};function xi(E,z,ne,j){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)ne=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){let Ke=z.isArrayCamera?oe:pe;if(!E.frustumCulled||E.intersectsFrustum(Ke)){j&&Je.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ue);let Se=be.update(E),De=E.material;De.visible&&C.push(E,Se,De,ne,Je.z,null,z)}}else if(E.isMesh||E.isLine||E.isPoints){let Ke=z.isArrayCamera?oe:pe;if(!E.frustumCulled||E.intersectsFrustum(Ke)){let Se=be.update(E),De=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Je.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Je.copy(Se.boundingSphere.center)),Je.applyMatrix4(E.matrixWorld).applyMatrix4(Ue)),Array.isArray(De)){let Ve=Se.groups;for(let ht=0,St=Ve.length;ht<St;ht++){let Qe=Ve[ht],Et=De[Qe.materialIndex];Et&&Et.visible&&C.push(E,Se,Et,ne,Je.z,Qe,z)}}else De.visible&&C.push(E,Se,De,ne,Je.z,null,z)}}}let Ce=E.children;for(let Ke=0,Se=Ce.length;Ke<Se;Ke++)xi(Ce[Ke],z,ne,j)}function Pi(E,z,ne,j){let{opaque:Q,transmissive:Ce,transparent:Ke}=E;T.setupLightsView(ne),Pe===!0&&ue.setGlobalState(N.clippingPlanes,ne),j&&Ne.viewport(me.copy(j)),Q.length>0&&On(Q,z,ne),Ce.length>0&&On(Ce,z,ne),Ke.length>0&&On(Ke,z,ne),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Qs(E,z,ne,j){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[j.id]===void 0){let Qe=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[j.id]=new Ui(1,1,{generateMipmaps:!0,type:Qe?gi:Ci,minFilter:mi,samples:Math.max(4,At.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}let Ce=T.state.transmissionRenderTarget[j.id],Ke=j.viewport||me;Ce.setSize(Ke.z*N.transmissionResolutionScale,Ke.w*N.transmissionResolutionScale);let Se=N.getRenderTarget(),De=N.getActiveCubeFace(),Ve=N.getActiveMipmapLevel();N.setRenderTarget(Ce),N.getClearColor(re),Ie=N.getClearAlpha(),Ie<1&&N.setClearColor(16777215,.5),N.clear(),rt&&O.render(ne);let ht=N.toneMapping;N.toneMapping=Ms;let St=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),T.setupLightsView(j),Pe===!0&&ue.setGlobalState(N.clippingPlanes,j),On(E,ne,j),ct.updateMultisampleRenderTarget(Ce),ct.updateRenderTargetMipmap(Ce),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Et=0,vn=z.length;Et<vn;Et++){let Yt=z[Et],{object:Gt,geometry:pn,material:je,group:En}=Yt;if(je.side===nn&&Gt.layers.test(j.layers)){let zt=je.side;je.side=pi,je.needsUpdate=!0,yi(Gt,ne,j,pn,je,En),je.side=zt,je.needsUpdate=!0,Qe=!0}}Qe===!0&&(ct.updateMultisampleRenderTarget(Ce),ct.updateRenderTargetMipmap(Ce))}N.setRenderTarget(Se,De,Ve),N.setClearColor(re,Ie),St!==void 0&&(j.viewport=St),N.toneMapping=ht}function On(E,z,ne){let j=z.isScene===!0?z.overrideMaterial:null;for(let Q=0,Ce=E.length;Q<Ce;Q++){let Ke=E[Q],{object:Se,geometry:De,group:Ve}=Ke,ht=Ke.material;ht.allowOverride===!0&&j!==null&&(ht=j),Se.layers.test(ne.layers)&&yi(Se,z,ne,De,ht,Ve)}}function yi(E,z,ne,j,Q,Ce){W!==null&&Q.isNodeMaterial&&W.setObject(E,Q),E.onBeforeRender(N,z,ne,j,Q,Ce),E.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Q.onBeforeRender(N,z,ne,j,E,Ce),Q.transparent===!0&&Q.side===nn&&Q.forceSinglePass===!1?(Q.side=pi,Q.needsUpdate=!0,N.renderBufferDirect(ne,z,j,Q,E,Ce),Q.side=vs,Q.needsUpdate=!0,N.renderBufferDirect(ne,z,j,Q,E,Ce),Q.side=nn):N.renderBufferDirect(ne,z,j,Q,E,Ce),E.onAfterRender(N,z,ne,j,Q,Ce)}function As(E){let z=0;for(let ne of E)ne.texture!==null&&z++;return z}function zi(E,z,ne){z.isScene!==!0&&(z=tt);let j=at.get(E),Q=T.state.lights,Ce=T.state.shadowsArray,Ke=Q.state.version,Se=ae.getParameters(E,Q.state,Ce,z,ne,T.state.lightProbeGridArray),De=ae.getProgramCacheKey(Se),Ve=j.programs;j.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,j.fog=z.fog;let ht=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;j.envMap=I.get(E.envMap||j.environment,ht),j.envMapRotation=j.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Ve===void 0&&(E.addEventListener("dispose",Ft),Ve=new Map,j.programs=Ve,j.programVariants=new Map);let St=Ve.get(De);if(St!==void 0){if(j.currentProgram===St&&j.lightsStateVersion===Ke)return ds(E,Se),St}else Se.uniforms=ae.getUniforms(E),W!==null&&E.isNodeMaterial&&W.build(E,ne,Se),E.onBeforeCompile(Se,N),St=ae.acquireProgram(Se,De),Ve.set(De,St),j.uniforms=Se.uniforms;let Qe=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Qe.clippingPlanes=ue.uniform),ds(E,Se),j.needsLights=vi(E),j.lightsStateVersion=Ke,j.needsLights&&(Qe.ambientLightColor.value=Q.state.ambient,Qe.lightProbe.value=Q.state.probe,Qe.sunLights.value=Q.state.sun,Qe.sunLightShadows.value=Q.state.sunShadow,Qe.directionalLights.value=Q.state.directional,Qe.directionalLightShadows.value=Q.state.directionalShadow,Qe.spotLights.value=Q.state.spot,Qe.spotLightShadows.value=Q.state.spotShadow,Qe.rectAreaLights.value=Q.state.rectArea,Qe.ltc_1.value=Q.state.rectAreaLTC1,Qe.ltc_2.value=Q.state.rectAreaLTC2,Qe.pointLights.value=Q.state.point,Qe.pointLightShadows.value=Q.state.pointShadow,Qe.hemisphereLights.value=Q.state.hemi,Qe.sunShadowMatrix.value=Q.state.sunShadowMatrix,Qe.sunShadowCascade.value=Q.state.sunShadowCascade,Qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Qe.spotLightMatrix.value=Q.state.spotLightMatrix,Qe.spotLightMap.value=Q.state.spotLightMap,Qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.numLightProbeGrids=As(T.state.lightProbeGridArray),j.currentProgram=St,j.uniformsList=null,St}function hs(E,z,ne,j,Q){let Ce=at.get(E),Ke=Ce.currentProgram.id+","+j+","+Q,Se=Ce.programVariants.get(Ke);return Se===void 0?(Se=zi(E,z,ne),Ce.programVariants.set(Ke,Se)):(Ce.currentProgram=Se,Ce.uniformsList=null,Ce.outputColorSpace=j,Ce.toneMapping=Q),Se}function us(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=Vo.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function ds(E,z){let ne=at.get(E);ne.outputColorSpace=z.outputColorSpace,ne.batching=z.batching,ne.batchingColor=z.batchingColor,ne.instancing=z.instancing,ne.instancingColor=z.instancingColor,ne.instancingMorph=z.instancingMorph,ne.skinning=z.skinning,ne.morphTargets=z.morphTargets,ne.morphNormals=z.morphNormals,ne.morphColors=z.morphColors,ne.morphTargetsCount=z.morphTargetsCount,ne.numClippingPlanes=z.numClippingPlanes,ne.numIntersection=z.numClipIntersection,ne.vertexAlphas=z.vertexAlphas,ne.vertexTangents=z.vertexTangents,ne.toneMapping=z.toneMapping}function Es(E,z,ne,j,Q){z.isScene!==!0&&(z=tt),ct.resetTextureUnits();let Ce=z.fog,Ke=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?z.environment:null,Se=ye===null?N.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Ot.workingColorSpace,De=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ve=I.get(j.envMap||Ke,De),ht=j.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,St=!!ne.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Qe=!!ne.morphAttributes.position,Et=!!ne.morphAttributes.normal,vn=!!ne.morphAttributes.color,Yt=Ms;j.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Yt=N.toneMapping);let Gt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,pn=Gt!==void 0?Gt.length:0,je=at.get(j),En=T.state.lights;if(Pe===!0&&(Ye===!0||E!==ce)){let dn=E===ce&&j.id===te;ue.setState(j,E,dn)}let zt=!1,ki=!1;j.version===je.__version?je.needsLights&&je.lightsStateVersion!==En.state.version||Q.isBatchedMesh&&je.batching===!1||!Q.isBatchedMesh&&je.batching===!0||Q.isBatchedMesh&&je.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&je.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&je.instancing===!1||!Q.isInstancedMesh&&je.instancing===!0||Q.isSkinnedMesh&&je.skinning===!1||!Q.isSkinnedMesh&&je.skinning===!0||Q.isInstancedMesh&&je.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&je.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&je.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&je.instancingMorph===!1&&Q.morphTexture!==null||je.envMap!==Ve||j.fog===!0&&je.fog!==Ce||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ue.numPlanes||je.numIntersection!==ue.numIntersection)||je.vertexAlphas!==ht||je.vertexTangents!==St||je.morphTargets!==Qe||je.morphNormals!==Et||je.morphColors!==vn||je.morphTargetsCount!==pn||je.numLightProbeGrids!==As(T.state.lightProbeGridArray)?zt=!0:(je.outputColorSpace!==Se||je.toneMapping!==Yt)&&(ki=!0):(zt=!0,je.__version=j.version);let yn=je.currentProgram;(zt===!0||ki===!0)&&(yn=ki===!0?hs(j,z,Q,Se,Yt):zi(j,z,Q),W&&j.isNodeMaterial&&W.onUpdateProgram(j,yn,je));let Rs=!1,Vt=!1,Mn=!1,bt=yn.getUniforms(),Rn=je.uniforms;if(Ne.useProgram(yn.program)&&(Rs=!0,Vt=!0,Mn=!0),j.id!==te&&(te=j.id,Vt=!0),Rs||ce!==E){Ne.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),bt.setValue(G,"projectionMatrix",E.projectionMatrix),bt.setValue(G,"viewMatrix",E.matrixWorldInverse);let Kt=bt.map.cameraPosition;Kt!==void 0&&Kt.setValue(G,gt.setFromMatrixPosition(E.matrixWorld)),At.logarithmicDepthBuffer&&bt.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&bt.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),ce!==E&&(ce=E,Vt=!0,Mn=!0)}if(je.needsLights&&(En.state.sunShadowMap.length>0&&bt.setValue(G,"sunShadowMap",En.state.sunShadowMap,ct),En.state.directionalShadowMap.length>0&&bt.setValue(G,"directionalShadowMap",En.state.directionalShadowMap,ct),En.state.spotShadowMap.length>0&&bt.setValue(G,"spotShadowMap",En.state.spotShadowMap,ct),En.state.pointShadowMap.length>0&&bt.setValue(G,"pointShadowMap",En.state.pointShadowMap,ct)),Q.isSkinnedMesh){bt.setOptional(G,Q,"bindMatrix"),bt.setOptional(G,Q,"bindMatrixInverse");let dn=Q.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),bt.setValue(G,"boneTexture",dn.boneTexture,ct))}Q.isBatchedMesh&&(bt.setOptional(G,Q,"batchingTexture"),bt.setValue(G,"batchingTexture",Q._matricesTexture,ct),bt.setOptional(G,Q,"batchingIdTexture"),bt.setValue(G,"batchingIdTexture",Q._indirectTexture,ct),bt.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&bt.setValue(G,"batchingColorTexture",Q._colorsTexture,ct));let Xn=ne.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&fe.update(Q,ne,yn),(Vt||je.receiveShadow!==Q.receiveShadow)&&(je.receiveShadow=Q.receiveShadow,bt.setValue(G,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&z.environment!==null&&(Rn.envMapIntensity.value=z.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=pS()),Vt){if(bt.setValue(G,"toneMappingExposure",N.toneMappingExposure),je.needsLights&&Wt(Rn,Mn),Ce&&j.fog===!0&&we.refreshFogUniforms(Rn,Ce),we.refreshMaterialUniforms(Rn,j,de,et,T.state.transmissionRenderTarget[E.id]),je.needsLights&&je.numLightProbeGrids>0){let dn=S,Kt=0;for(let li of T.state.lightProbeGridArray)li.texture!==null&&(dn.textures[Kt]=li.texture,dn.min[Kt]=li.boundingBox.min,dn.max[Kt]=li.boundingBox.max,dn.resolution[Kt]=li.resolution,Kt++);for(let li in dn)dn[li].length=Kt;Rn.probesSH.value=dn.textures,Rn.probesMin.value=dn.min,Rn.probesMax.value=dn.max,Rn.probesResolution.value=dn.resolution}Vo.upload(G,us(je),Rn,ct)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Vo.upload(G,us(je),Rn,ct),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&bt.setValue(G,"center",Q.center),bt.setValue(G,"modelViewMatrix",Q.modelViewMatrix),bt.setValue(G,"normalMatrix",Q.normalMatrix),bt.setValue(G,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){let dn=j.uniformsGroups;for(let Kt=0,li=dn.length;Kt<li;Kt++){let H=dn[Kt];$e.update(H,yn),$e.bind(H,yn)}}return yn}function Wt(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.sunLights.needsUpdate=z,E.sunLightShadows.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function vi(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ye},this.setRenderTargetTextures=function(E,z,ne){let j=at.get(E);j.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),at.get(E.texture).__webglTexture=z,at.get(E.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:ne,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){let ne=at.get(E);ne.__webglFramebuffer=z,ne.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,ne=0){ye=E,K=z,X=ne;let j=null,Q=!1,Ce=!1;if(E){let Se=at.get(E);if(Se.__useDefaultFramebuffer!==void 0){Ne.bindFramebuffer(G.FRAMEBUFFER,Se.__webglFramebuffer),me.copy(E.viewport),Oe.copy(E.scissor),He=E.scissorTest,Ne.viewport(me),Ne.scissor(Oe),Ne.setScissorTest(He),te=-1;return}else if(Se.__webglFramebuffer===void 0)ct.setupRenderTarget(E);else if(Se.__hasExternalTextures)ct.rebindTextures(E,at.get(E.texture).__webglTexture,at.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ht=E.depthTexture;if(Se.__boundDepthTexture!==ht){if(ht!==null&&at.has(ht)&&(E.width!==ht.image.width||E.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(E)}}let De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ce=!0);let Ve=at.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?j=Ve[z][ne]:j=Ve[z],Q=!0):E.samples>0&&ct.useMultisampledRTT(E)===!1?j=at.get(E).__webglMultisampledFramebuffer:Array.isArray(Ve)?j=Ve[ne]:j=Ve,me.copy(E.viewport),Oe.copy(E.scissor),He=E.scissorTest}else me.copy(lt).multiplyScalar(de).floor(),Oe.copy(Tt).multiplyScalar(de).floor(),He=mt;if(ne!==0&&(j=Z),Ne.bindFramebuffer(G.FRAMEBUFFER,j)&&Ne.drawBuffers(E,j),Ne.viewport(me),Ne.scissor(Oe),Ne.setScissorTest(He),Q){let Se=at.get(E.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+z,Se.__webglTexture,ne)}else if(Ce){let Se=z;for(let De=0;De<E.textures.length;De++){let Ve=at.get(E.textures[De]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+De,Ve.__webglTexture,ne,Se)}}else if(E!==null&&ne!==0){let Se=at.get(E.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Se.__webglTexture,ne)}te=-1};function Mi(E){let z=at.get(E);return(z.__readFormat!==E.format||z.__readType!==E.type)&&(z.__readFormat=E.format,z.__readType=E.type,z.__formatReadable=At.textureFormatReadable(E.format),z.__typeReadable=At.textureTypeReadable(E.type)),z}this.readRenderTargetPixels=function(E,z,ne,j,Q,Ce,Ke,Se=0){if(!(E&&E.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=at.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ke!==void 0&&(De=De[Ke],Array.isArray(De)&&(De=De[0])),De){Ne.bindFramebuffer(G.FRAMEBUFFER,De);try{let Ve=E.textures[Se],ht=Ve.format,St=Ve.type;E.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Se);let Qe=Mi(Ve);if(Qe.__formatReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-j&&ne>=0&&ne<=E.height-Q&&G.readPixels(z,ne,j,Q,Ae.convert(ht),Ae.convert(St),Ce)}finally{let Ve=ye!==null?at.get(ye).__webglFramebuffer:null;Ne.bindFramebuffer(G.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(E,z,ne,j,Q,Ce,Ke,Se=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=at.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ke!==void 0&&(De=De[Ke],Array.isArray(De)&&(De=De[0])),De)if(z>=0&&z<=E.width-j&&ne>=0&&ne<=E.height-Q){Ne.bindFramebuffer(G.FRAMEBUFFER,De);let Ve=E.textures[Se],ht=Ve.format,St=Ve.type;E.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Se);let Qe=Mi(Ve);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Et),G.bufferData(G.PIXEL_PACK_BUFFER,Ce.byteLength,G.STREAM_READ),G.readPixels(z,ne,j,Q,Ae.convert(ht),Ae.convert(St),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let vn=ye!==null?at.get(ye).__webglFramebuffer:null;Ne.bindFramebuffer(G.FRAMEBUFFER,vn);let Yt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Pm(G,Yt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Et),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ce),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(Et),G.deleteSync(Yt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,ne=0){let j=Math.pow(2,-ne),Q=Math.floor(E.image.width*j),Ce=Math.floor(E.image.height*j),Ke=z!==null?z.x:0,Se=z!==null?z.y:0;ct.setTexture2D(E,0),G.copyTexSubImage2D(G.TEXTURE_2D,ne,0,0,Ke,Se,Q,Ce),Ne.unbindTexture()},this.copyTextureToTexture=function(E,z,ne=null,j=null,Q=0,Ce=0){let Ke,Se,De,Ve,ht,St,Qe,Et,vn,Yt=E.isCompressedTexture?E.mipmaps[Ce]:E.image;if(ne!==null)Ke=ne.max.x-ne.min.x,Se=ne.max.y-ne.min.y,De=ne.isBox3?ne.max.z-ne.min.z:1,Ve=ne.min.x,ht=ne.min.y,St=ne.isBox3?ne.min.z:0;else{let bt=Math.pow(2,-Q);Ke=Math.floor(Yt.width*bt),Se=Math.floor(Yt.height*bt),E.isDataArrayTexture?De=Yt.depth:E.isData3DTexture?De=Math.floor(Yt.depth*bt):De=1,Ve=0,ht=0,St=0}j!==null?(Qe=j.x,Et=j.y,vn=j.z):(Qe=0,Et=0,vn=0);let Gt=Ae.convert(z.format),pn=Ae.convert(z.type),je;z.isData3DTexture?(ct.setTexture3D(z,0),je=G.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ct.setTexture2DArray(z,0),je=G.TEXTURE_2D_ARRAY):(ct.setTexture2D(z,0),je=G.TEXTURE_2D),Ne.activeTexture(G.TEXTURE0),Ne.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,z.flipY),Ne.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Ne.pixelStorei(G.UNPACK_ALIGNMENT,z.unpackAlignment);let En=Ne.getParameter(G.UNPACK_ROW_LENGTH),zt=Ne.getParameter(G.UNPACK_IMAGE_HEIGHT),ki=Ne.getParameter(G.UNPACK_SKIP_PIXELS),yn=Ne.getParameter(G.UNPACK_SKIP_ROWS),Rs=Ne.getParameter(G.UNPACK_SKIP_IMAGES);Ne.pixelStorei(G.UNPACK_ROW_LENGTH,Yt.width),Ne.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Yt.height),Ne.pixelStorei(G.UNPACK_SKIP_PIXELS,Ve),Ne.pixelStorei(G.UNPACK_SKIP_ROWS,ht),Ne.pixelStorei(G.UNPACK_SKIP_IMAGES,St);let Vt=E.isDataArrayTexture||E.isData3DTexture,Mn=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){let bt=at.get(E),Rn=at.get(z),Xn=at.get(bt.__renderTarget),dn=at.get(Rn.__renderTarget);Ne.bindFramebuffer(G.READ_FRAMEBUFFER,Xn.__webglFramebuffer),Ne.bindFramebuffer(G.DRAW_FRAMEBUFFER,dn.__webglFramebuffer);for(let Kt=0;Kt<De;Kt++)Vt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,at.get(E).__webglTexture,Q,St+Kt),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,at.get(z).__webglTexture,Ce,vn+Kt)),G.blitFramebuffer(Ve,ht,Ve+Ke,ht+Se,Qe,Et,Qe+Ke,Et+Se,G.DEPTH_BUFFER_BIT,G.NEAREST);Ne.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||E.isRenderTargetTexture||at.has(E)){let bt=at.get(E),Rn=at.get(z);Ne.bindFramebuffer(G.READ_FRAMEBUFFER,P),Ne.bindFramebuffer(G.DRAW_FRAMEBUFFER,Y);for(let Xn=0;Xn<De;Xn++)Vt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,bt.__webglTexture,Q,St+Xn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,bt.__webglTexture,Q),Mn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Rn.__webglTexture,Ce,vn+Xn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Rn.__webglTexture,Ce),Q!==0?G.blitFramebuffer(Ve,ht,Ve+Ke,ht+Se,Qe,Et,Qe+Ke,Et+Se,G.COLOR_BUFFER_BIT,G.NEAREST):Mn?G.copyTexSubImage3D(je,Ce,Qe,Et,vn+Xn,Ve,ht,Ke,Se):G.copyTexSubImage2D(je,Ce,Qe,Et,Ve,ht,Ke,Se);Ne.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Mn?E.isDataTexture||E.isData3DTexture?G.texSubImage3D(je,Ce,Qe,Et,vn,Ke,Se,De,Gt,pn,Yt.data):z.isCompressedArrayTexture?G.compressedTexSubImage3D(je,Ce,Qe,Et,vn,Ke,Se,De,Gt,Yt.data):G.texSubImage3D(je,Ce,Qe,Et,vn,Ke,Se,De,Gt,pn,Yt):E.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ce,Qe,Et,Ke,Se,Gt,pn,Yt.data):E.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ce,Qe,Et,Yt.width,Yt.height,Gt,Yt.data):G.texSubImage2D(G.TEXTURE_2D,Ce,Qe,Et,Ke,Se,Gt,pn,Yt);Ne.pixelStorei(G.UNPACK_ROW_LENGTH,En),Ne.pixelStorei(G.UNPACK_IMAGE_HEIGHT,zt),Ne.pixelStorei(G.UNPACK_SKIP_PIXELS,ki),Ne.pixelStorei(G.UNPACK_SKIP_ROWS,yn),Ne.pixelStorei(G.UNPACK_SKIP_IMAGES,Rs),Ce===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&G.generateMipmap(je),Ne.unbindTexture()},this.initRenderTarget=function(E){at.get(E).__webglFramebuffer===void 0&&ct.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ct.setTextureCube(E,0):E.isData3DTexture?ct.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ct.setTexture2DArray(E,0):ct.setTexture2D(E,0),Ne.unbindTexture()},this.resetState=function(){K=0,X=0,ye=null,Ne.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ot._getUnpackColorSpace()}};function Nd(i,e){if(e===id)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ho||e===tl){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ho)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function vg(i){let e=new Map,t=new Map,n=i.clone();return Mg(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Mg(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Mg(i.children[n],e.children[n],t)}var Th=class extends ss{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kd(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new jd(t)}),this.register(function(t){return new $d(t)}),this.register(function(t){return new Qd(t)}),this.register(function(t){return new Wd(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new Yd(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Kd(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new Jd(t)}),this.register(function(t){return new Zd(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new Ah(t,Bt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ah(t,Bt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ef(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Zs.extractUrlBase(e);o=Zs.resolveURL(c,this.path)}else o=Zs.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Or(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ag){try{o[Bt.KHR_BINARY_GLTF]=new tf(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Bt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new cf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Bt.KHR_MATERIALS_UNLIT:o[u]=new Bd;break;case Bt.KHR_DRACO_MESH_COMPRESSION:o[u]=new nf(r,this.dracoLoader);break;case Bt.KHR_TEXTURE_TRANSFORM:o[u]=new sf;break;case Bt.KHR_MESH_QUANTIZATION:o[u]=new rf;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function mS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Nn(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Bt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Od=class{constructor(e){this.parser=e,this.name=Bt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ge(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Jn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ys(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ks(h),c.distance=u;break;case"spot":c=new Ys(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ws(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Bd=class{constructor(){this.name=Bt.KHR_MATERIALS_UNLIT}getMaterialType(){return wn}extendParams(e,t,n){let s=[];e.color=new Ge(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Jn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ln))}return Promise.all(s)}},zd=class{constructor(e){this.parser=e,this.name=Bt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Nn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},kd=class{constructor(e){this.parser=e,this.name=Bt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Nn(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ge(r,r)}return Promise.all(s)}},Gd=class{constructor(e){this.parser=e,this.name=Bt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Nn(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},Hd=class{constructor(e){this.parser=e,this.name=Bt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Nn(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Nn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Vd=class{constructor(e){this.parser=e,this.name=Bt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Nn(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Wd=class{constructor(e){this.parser=e,this.name=Bt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Nn(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Jn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,ln)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Xd=class{constructor(e){this.parser=e,this.name=Bt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Nn(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},qd=class{constructor(e){this.parser=e,this.name=Bt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Nn(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(r[0],r[1],r[2],Jn),Promise.all(s)}},Yd=class{constructor(e){this.parser=e,this.name=Bt.KHR_MATERIALS_IOR}getMaterialType(e){return Nn(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Nn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Kd=class{constructor(e){this.parser=e,this.name=Bt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Nn(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(r[0],r[1],r[2],Jn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,ln)),Promise.all(s)}},Zd=class{constructor(e){this.parser=e,this.name=Bt.EXT_MATERIALS_BUMP}getMaterialType(e){return Nn(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Jd=class{constructor(e){this.parser=e,this.name=Bt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Nn(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=Nn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},jd=class{constructor(e){this.parser=e,this.name=Bt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},$d=class{constructor(e){this.parser=e,this.name=Bt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Qd=class{constructor(e){this.parser=e,this.name=Bt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Ah=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},ef=class{constructor(e){this.name=Bt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Xi.TRIANGLES&&c.mode!==Xi.TRIANGLE_STRIP&&c.mode!==Xi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let p of u){let M=new xt,m=new U,g=new hi,v=new U(1,1,1),A=new Ea(p.geometry,p.material,d);for(let C=0;C<d;C++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,C),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,C),l.SCALE&&v.fromBufferAttribute(l.SCALE,C),A.setMatrixAt(C,M.compose(m,g,v));let S=null;for(let C in l)if(C==="_COLOR_0"){let T=l[C];A.instanceColor=new Gs(T.array,T.itemSize,T.normalized)}else if(C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"){if(S===null){let x=A.geometry;S=new tn,S.name=x.name;for(let b in x.attributes)S.setAttribute(b,x.attributes[b]);for(let b in x.morphAttributes)S.morphAttributes[b]=x.morphAttributes[b];x.index!==null&&S.setIndex(x.index),S.morphTargetsRelative=x.morphTargetsRelative;for(let b of x.groups)S.addGroup(b.start,b.count,b.materialIndex);x.boundingBox!==null&&(S.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(S.boundingSphere=x.boundingSphere.clone()),S.drawRange.start=x.drawRange.start,S.drawRange.count=x.drawRange.count,S.userData=Object.assign({},x.userData),A.geometry=S}let T=l[C];S.setAttribute(C,new Gs(T.array,T.itemSize,T.normalized))}bn.prototype.copy.call(A,p),this.parser.assignFinalMaterial(A),f.push(A)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Ag="glTF",al=12,Sg={JSON:1313821514,BIN:5130562},tf=class{constructor(e){this.name=Bt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,al),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ag)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-al,r=new DataView(e,al),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Sg.JSON){let c=new Uint8Array(e,al+o,a);this.content=n.decode(c)}else if(l===Sg.BIN){let c=al+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},nf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Bt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=af[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=af[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Xo[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let M=f.attributes[p],m=l[p];m!==void 0&&(M.normalized=m)}u(f)},a,c,Jn,d)})})}},sf=class{constructor(){this.name=Bt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},rf=class{constructor(){this.name=Bt.KHR_MESH_QUANTIZATION}},Eh=class extends xs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,M=p-c,m=-2*f+3*d,g=f-d,v=1-m,A=g-d+u;for(let S=0;S!==a;S++){let C=o[M+S+a],T=o[M+S+l]*h,x=o[p+S+a],b=o[p+S]*h;r[S]=v*C+A*T+m*x+g*b}return r}},gS=new hi,of=class extends Eh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return gS.fromArray(r).normalize().toArray(r),r}},Xi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bg={9728:Un,9729:_n,9984:Dc,9985:ko,9986:Wr,9987:mi},wg={33071:Ti,33648:lr,10497:kn},Dd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},af={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Mr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_S={CUBICSPLINE:void 0,LINEAR:Ir,STEP:Cr},Ud={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new pt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vs})),i.DefaultMaterial}function Yr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ws(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function vS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function MS(i){let e,t=i.extensions&&i.extensions[Bt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fd(t.attributes):e=i.indices+":"+Fd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Fd(i.targets[n]);return e}function Fd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function lf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function SS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var bS=new xt,cf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new Br(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ka(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Or(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Yr(r,a,s),ws(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Bt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Zs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Dd[s.type],a=Xo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ct(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Dd[s.type],c=Xo[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,M,m;if(f&&f!==u){let g=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,A=t.cache.get(v);A||(M=new c(a,g*f,s.count*f/h),A=new Lr(M,f/h),t.cache.add(v,A)),m=new ur(A,l,d%f/h,p)}else a===null?M=new c(s.count*l):M=new c(a,d,s.count*l),m=new Ct(M,l,p);if(s.sparse!==void 0){let g=Dd.SCALAR,v=Xo[s.sparse.indices.componentType],A=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,C=new v(o[1],A,s.sparse.count*g),T=new c(o[2],S,s.sparse.count*l);a!==null&&(m=new Ct(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,b=C.length;x<b;x++){let B=C[x];if(m.setX(B,T[x*l]),l>=2&&m.setY(B,T[x*l+1]),l>=3&&m.setZ(B,T[x*l+2]),l>=4&&m.setW(B,T[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=bg[d.magFilter]||_n,h.minFilter=bg[d.minFilter]||mi,h.wrapS=wg[d.wrapS]||kn,h.wrapT=wg[d.wrapT]||kn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Un&&h.minFilter!==_n,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,p){t.parse(d,f,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let M=f;t.isImageBitmapLoader===!0&&(M=function(m){let g=new Fn(m);g.needsUpdate=!0,f(g)}),t.load(Zs.resolveURL(d,r.path),M,void 0,p)})})}let u=h.then(function(d){return c===!0&&a.revokeObjectURL(l),ws(d,o),d.userData.mimeType=o.mimeType||SS(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Bt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Bt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Bt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ro,di.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Eo,di.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return pt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Bt.KHR_MATERIALS_UNLIT]){let u=s[Bt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ge(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Jn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,ln)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=nn);let h=r.alphaMode||Ud.OPAQUE;if(h===Ud.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ud.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==wn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ge(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==wn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==wn){let u=r.emissiveFactor;a.emissive=new Ge().setRGB(u[0],u[1],u[2],Jn)}return r.emissiveTexture!==void 0&&o!==wn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ln)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ws(u,r),t.associations.set(u,{materials:e}),r.extensions&&Yr(s,u,r),u})}createUniqueName(e){let t=gn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Tg(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=MS(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Bt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Tg(new tn,c,t),c.mode===Xi.TRIANGLE_STRIP?d=d.then(f=>Nd(f,tl)):c.mode===Xi.TRIANGLE_FAN&&(d=d.then(f=>Nd(f,Ho))),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?xS(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let M=h[f],m=o[f],g,v=c[f];if(m.mode===Xi.TRIANGLES||m.mode===Xi.TRIANGLE_STRIP||m.mode===Xi.TRIANGLE_FAN||m.mode===void 0){let A=r.isSkinnedMesh===!0,S=M.hasAttribute("skinIndex")&&M.hasAttribute("skinWeight");A&&S===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=A&&S?new Ta(M,v):new ot(M,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Xi.LINES)g=new Ra(M,v);else if(m.mode===Xi.LINE_STRIP)g=new Dr(M,v);else if(m.mode===Xi.LINE_LOOP)g=new Ca(M,v);else if(m.mode===Xi.POINTS)g=new mr(M,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&vS(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),ws(g,r),m.extensions&&Yr(s,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Yr(s,u[0],r),u[0];let d=new kt;r.extensions&&Yr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dn(vh.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new kr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ws(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new xt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Aa(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],p=s.samplers[f.sampler],M=f.target,m=M.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,v=s.parameters!==void 0?s.parameters[p.output]:p.output;M.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(p),h.push(M))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],M=u[3],m=u[4],g=[];for(let A=0,S=d.length;A<S;A++){let C=d[A],T=f[A],x=p[A],b=M[A],B=m[A];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();let N=n._createAnimationTracks(C,T,x,b,B);if(N)for(let F=0;F<N.length;F++)g.push(N[F])}let v=new Xa(r,void 0,g);return ws(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,bS)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new U().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Ao:c.length>1?h=new kt:c.length===1?h=c[0]:h=new bn,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ws(h,r),r.extensions&&Yr(n,h,r),r.matrix!==void 0){let u=new xt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new kt;n.name&&(r.name=s.createUniqueName(n.name)),ws(r,n),n.extensions&&Yr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(vg(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof di||d instanceof Fn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Mr[r.path]===Mr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Mr[r.path]){case Mr.weights:h=Ws;break;case Mr.rotation:h=Xs;break;case Mr.translation:case Mr.scale:h=_r;break;default:n.itemSize===1?h=Ws:h=_r;break}let u=s.interpolation!==void 0?_S[s.interpolation]:Ir,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let M=new h(l[f]+"."+Mr[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),o.push(M)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=lf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Xs?of:Eh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function wS(i,e,t){let n=e.attributes,s=new ui;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),a.normalized){let h=lf(Xo[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new U,l=new U;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let M=lf(Xo[d.componentType]);l.multiplyScalar(M)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Ai;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Tg(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=af[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Ot.workingColorSpace!==Jn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ot.workingColorSpace}" not supported.`),ws(i,e),wS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?yS(i,e.targets,t):i})}var Rh=class extends qa{constructor(e){super(e),this.type=gi}parse(e){let o=function(b,B){switch(b){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(B||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(B||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(B||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(B||""))}},u=function(b,B,N){B=B||1024;let W=b.pos,Z=-1,P=0,Y="",K=String.fromCharCode.apply(null,new Uint16Array(b.subarray(W,W+128)));for(;0>(Z=K.indexOf(`
`))&&P<B&&W<b.byteLength;)Y+=K,P+=K.length,W+=128,K=String.fromCharCode.apply(null,new Uint16Array(b.subarray(W,W+128)));return-1<Z?(N!==!1&&(b.pos+=P+Z+1),Y+K.slice(0,Z)):!1},d=function(b){let B=/^#\?(\S+)/,N=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,F=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,W=/^\s*FORMAT=(\S+)\s*$/,Z=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},Y,K;for((b.pos>=b.byteLength||!(Y=u(b)))&&o(1,"no header found"),(K=Y.match(B))||o(3,"bad initial token"),P.valid|=1,P.programtype=K[1],P.string+=Y+`
`;Y=u(b),Y!==!1;){if(P.string+=Y+`
`,Y.charAt(0)==="#"){P.comments+=Y+`
`;continue}if((K=Y.match(N))&&(P.gamma=parseFloat(K[1])),(K=Y.match(F))&&(P.exposure=parseFloat(K[1])),(K=Y.match(W))&&(P.valid|=2,P.format=K[1]),(K=Y.match(Z))&&(P.valid|=4,P.height=parseInt(K[1],10),P.width=parseInt(K[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||o(3,"missing format specifier"),P.valid&4||o(3,"missing image size specifier"),P},f=function(b,B,N){let F=B;if(F<8||F>32767||b[0]!==2||b[1]!==2||b[2]&128)return new Uint8Array(b);F!==(b[2]<<8|b[3])&&o(3,"wrong scanline width");let W=new Uint8Array(4*B*N);W.length||o(4,"unable to allocate buffer space");let Z=0,P=0,Y=4*F,K=new Uint8Array(4),X=new Uint8Array(Y),ye=N;for(;ye>0&&P<b.byteLength;){P+4>b.byteLength&&o(1),K[0]=b[P++],K[1]=b[P++],K[2]=b[P++],K[3]=b[P++],(K[0]!=2||K[1]!=2||(K[2]<<8|K[3])!=F)&&o(3,"bad rgbe scanline format");let te=0,ce;for(;te<Y&&P<b.byteLength;){ce=b[P++];let Oe=ce>128;if(Oe&&(ce-=128),(ce===0||te+ce>Y)&&o(3,"bad scanline data"),Oe){let He=b[P++];for(let re=0;re<ce;re++)X[te++]=He}else X.set(b.subarray(P,P+ce),te),te+=ce,P+=ce}let me=F;for(let Oe=0;Oe<me;Oe++){let He=0;W[Z]=X[Oe+He],He+=F,W[Z+1]=X[Oe+He],He+=F,W[Z+2]=X[Oe+He],He+=F,W[Z+3]=X[Oe+He],Z+=4}ye--}return W},p=function(b,B,N,F){let W=b[B+3],Z=Math.pow(2,W-128)/255;N[F+0]=b[B+0]*Z,N[F+1]=b[B+1]*Z,N[F+2]=b[B+2]*Z,N[F+3]=1},M=function(b,B,N,F){let W=b[B+3],Z=Math.pow(2,W-128)/255;N[F+0]=hr.toHalfFloat(Math.min(b[B+0]*Z,65504)),N[F+1]=hr.toHalfFloat(Math.min(b[B+1]*Z,65504)),N[F+2]=hr.toHalfFloat(Math.min(b[B+2]*Z,65504)),N[F+3]=hr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let g=d(m),v=g.width,A=g.height,S=f(m.subarray(m.pos),v,A),C,T,x;switch(this.type){case ri:x=S.length/4;let b=new Float32Array(x*4);for(let N=0;N<x;N++)p(S,N*4,b,N*4);C=b,T=ri;break;case gi:x=S.length/4;let B=new Uint16Array(x*4);for(let N=0;N<x;N++)M(S,N*4,B,N*4);C=B,T=gi;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:v,height:A,data:C,header:g.string,gamma:g.gamma,exposure:g.exposure,type:T,colorSpace:Jn,minFilter:_n,magFilter:_n,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var Eg="data:image/webp;base64,UklGRoAUAABXRUJQVlA4IHQUAAAwgQCdASo9BFwAPpFInUylq6KiINGpmXASCWljPdvTL8bFE/y5sMAvcl5fz+2f8qj/jenCUE+0SEaJEJrv4A3nf9o/4fTQ/zPcEdT/yfsCfrHyibRTPh8kIzr40x6XnJDnF/N/93r9f///B77dl7mM/6uz/NfP/vNNyD/+cv/Vf3ygWEVCN9KRG7DqqcqZC8PKPZTPsNqytTYdy8ynk8G0Sg+Oellu5R983GFoGoJioppiEZk8BfGxQ3gDoUMnPfH/rrehXT82lvSAqw/fUWH7/il9aeuQkvYe41GALAyfBC+Tx2sc9YatbwvlCx95YdUN2/i+cYn1ZNN5XFjxB/Uw5OGW4pzsZWHbJ2a18QPmL7wHWSzNSy43me2bjhUxFpnU3U9QZyiy16kJ8HPGMSEeiEiHknbwF8/nadf+TWM1GDlLfPb5zDlVsJo5dlbs2N8nk/72+rNSV5kTgvPo2mff/LHrzhhurKa11UcuDJzI9Qqju9DKeUMSye25aFDais49brwKHWp8MhU6uqTCP+8c/BHZ2kMB5T74y3S3djvzWbxwmbDbjibrf1zIXvmiIrz2RVQ4tT1D0qJ8HDVdGS7b+H1uBNb7nFrXjTE6gOHfn85nSNKwgdgfDolyjG6Qdr2RBIY9QBB8xhF3w+nl3h9aJQY1YsZbgg/brlFCg+Nqa4hWqjKgxqs2zYlPXreBsGnJBK0LJegwXGvX8AhRCW81O+aHJqAuR252DSWx9YrqbwBYI+OnVttICyAEhnTr6JKAwXONGbQshy25wDldYlJQOr0pvyDRk0+DCrtYkfTHJWHA1Y/Z+w8EAq/YJMg9EbM47hwdJYYdliRjlzy4elbNfj6Yke3Ak4DjFuUXbfOft1kCI2LEWHp97njI4LalgiOXo3tucJwm4J0dkbjtm5Vw1REh33JqlYTVnRWXAfKCK7IsHKXQhjSybtE/SSRZpMAnNyuxKDlRWq7fPvJTrtuQ/d7ySj/Jzofhjn7BAR90YpvjlSuCMiUoE2ZRF1e9zqWjqQjKTWALy2c3wyY4fdws5WiiKXm6y9AgaisBjbbeVOTO6ZiWS4yuSE3p9THp6PtvLK14PhtEvKIEY14jQ4d01V/58ZPeqypCpze0G/wIFTLYS7CcdmQ8RGVHPXW+WckDPzm5+KUmQikrVFQLVmgc/bKThh32wJTEWO8coxjdIzvsLa9Ywf2U53X7N0GREixI0ReeOWOoIofkpv90C+H3T1kUCUhk51d8XsQVqUZypiMcVeqTAwpsKtrhIhnlycABKF91G/8KAlESNRAMx9+T+DIGocEooEUESKz/H1W9z+AKJIGNRvOa/+OoskSiamTFtS8O7Dm2cybaotFOjtuhIX9cwEyO5CYFNtK+vt0okcEAAP7ugz3WACH/XHS3OaneVtqNfBwC9k6+yRRWEw44g7Ea/Kn8Ip+0azUScgGGhuUR+3B8C2P/YgFAOEHRnd+WprYM+gDA+Ov4bjJ6TjMBsmWjk8jQg0XEvv4vACV0V4She2T7lsmzVVNLc04DCkCCBWqvInO11RO+OMKfpvwSJ86wErBZtFDq6lCeqxYhTUjEiA0b0hILUQ/6jVlhtOhwO7k4oZHEsF5fUO74qLgV61NYfEIh3njMvb91YtExbcg8d6GHM2e91zv8Q5r/WsdQZK3nwLe9oeoH51WCmEjqNEZhbQzTSafmWAfCX2TPLIhPbZL15DRn46c0pchVFrT6OyypEWffRGMcz9+dPXChlS+CTeeLzJlF3r7itLAk9I4skyyxZInGfR3iID4ZP7FtPcgU3xhupeXewgc0Gj5WdX/E65PFPie0CSKXmrNFMMcRRKUkvcnSHVprrjrcOFWcD8kOEHFIE3K/3Ek+eJkQyKwB9EeizyWx7SzxRvJCgQJbnc/blT4uL0ND4fJyYN/FG886mHxeuzeUx15Z3DtYI0nhpeFIyyYAnQU7c/COsgIWX11wEyd3vA8M9fX/vidBffSF3LhEt60oCvPjs1koX9r0C4cFs3mUnARWBKne3J53Mp78bakRRlMS/QY0jMFmwY6F/IWMbOfAJYkdlVP1hOZZ8h/fwNfiiZKcvQtsDkgFp/iZgQS1gw40ztDXVXl1hfA/mbbzkJ8/KYXetMIgpGMLGplvyrHvTBEkW2xXezH/mn4W0JgZTmpKPwp4+PhrE1zOdlbLz8Nuz2J85WUiQU44yequ1XaJMbwL8l7AiQzHzzVNdFTt1EZqCNKe6um2jlqgioihrR7Q4Chud6ILAUG2SYIipWn+ZpP4gnPaJeRQynHK7rQQcMMr276OLG9jQkk31bNNsINmjldnE9ZsYY1z61lzH0meP8eDNj/yzHNZFx3+yl3FLnL9jrjdBrPtCY1qxx/PnLhPc/0XoiL4PGndRiYgFiOKaCaKrR+geg1jH3PRtND1qEjx/StbKiBtS0yR8FD05vx1zblUImSbG8tzq6/nvnP5iIyGeDenI5dRjyTdZUzrZLnw7pQKOzIwdL55JU7Rgdd9Onerbykv3NJ+fx84OEXh5fAAg016508vANHqHjYU7Gm36IhFYAwcvHrB1Pp6/vhRi1TvD0ntQQbPPBa/3gzoYdZ3a6izTyTs9WRmr0IWz/425T+2Gx5S0RhAOHf826rA3d+F2K2j3nYicwBW5Y64PuryBZm3nqvCEm5YACeUe39CUJd/e46A6/d3yUwuzcBAi10Iq3lugTtBsNKhfS/ngVyQGEsE1ILkTg8QpmCgjPsj0EqZgWnDchpMWRdFooh7GT5i46T7BLNjBWHPXjrfQRffpKk7AREnt8EnNzqtMOlDsGwDhY+QmoaJRfoFkkpq6CcH4YXoDXenDK7Jzsk1DG0nJLtzHYdKc+ocM69FtTa8SCR8zuvsplcMfwfV7aPVZvQWgou7lvXmKKfd8EX4Zm16wllTHjydNmwb4RB7iLLPdZknDhUEa7oEYS5biXw5f4z9FSmBPmJveXYxyptzd0FIgCnUpgFa1Gbc75nA4KASPxkHJQtTjBkMV/pCef53m2mZ5kv3dH6blsVH53FdXjlA2GdFCC5+KNTP6phhIk10JR+NMRfrsuBM506MfhIqeFaiNoWu7YnaiwugBjUiAn7y5Fqtc0aJkjw8j3s+kpzyjGS5fqF0HoyELsdiwngEsZWiZKyfayKnS7OuNuhxqyBcZsXHYXDK5INWX5jMlNCSwC2B4icoocN9pFYWisXrN4Ne8IAne0Ow3x195IizkEKUEBYZlqRpxBzoa7euJ0+8b34PxafQLjhZXLMouV89PJ45UIUeX+KHJujLRuSJ5XUQ8MmtnDreeDYy8zyIRt9Z8QREQtVFaiipdrIL6a9zQzxjQK+kisJBKfOuJtT1BFgu5ZbaO1rH5Gjnu4y3nuFjrlG5Mf36JKTs1ZLgE1l9QkPPR80+njjHcABwAId5Mw3nzBSzLUGPxoy8gKikmU9tDs3dZFgJdV5z2lh6SDq8jLVEYv//GCqNC64KV84//jD6SgX6qSbssSYOCLGg0YqWjJrqFSaaCQ/GomYrINKmNrwjcvKY5F114POw5EVKdvJ5MARBlsZAyr1VqHQ6HFF11FtGwuB0EXduJ6UbaV036c+flaLv1pTl9cR8Ds9krNp5++u7fHYoGNBhqtyAXKHqtX223VDlL5JFzgN8CTErZX8NsitSHjF4JgVJHYRwA8+lZBfCqc2CM8soQYX4scx4JCkPL6LG1GBNlhurW20+FVIfEEJgNuREmwTIrp90vVEsqH/PmpZqpErubdwRVAQlCfXgxh3Hr+W+oBTvPP/4s1QiBMVtTTfKSVRNy0bA+fG5dJaLlBMT70unrl7qUEn0Xk7F1YoQr49OKgL1TsxTUB0gZtGeTnGObT1rcfVX/Zl0Oxm4iLDHSEms5GsKVUcTWfcxjNLDef965K2q/qNTAAJFoG0fC1uSY6g+A+qOvpzgVBx0KxjsKkcUARjyCgfn/gFqjE+C4Y0mjRxB7JzG2wNeyROD7osFSXXUSB9CBxiMSB4ZelWZmvRn7jWOlxiuEvVgVgXc97XbLfKZxAjWebo6KRWLfZ8qLk0ZPKEsClg2HAwC4lxXL9WsbSjyhLnbxyfRNqZdwoaRR25pD14djojgtDcvDd//GgseaAPunuppvuUq0LhDsRev9iq6OvcjI9eoYtZK0WRvt8YKijmVHuUzOBPWXrtvbXgTyTQfe7ywtXvo82BtTbvO8ZUbuVAcpu8Ll726QSIVWFF1kOC55CrouJHe82Y+8h7tSqO3eIz6xCk8p51aJ4AIJW+92jx4ZfZtVhrqtIUh9+FgVqZLNw7HMsg09apn1LuVG3wXxiBOE8ccZ00qCxQ08HKSMzGrbQnIrg2xWgHUuuWXKYxE3J48fv1/4zVpA96eMQIaUmAlxQYGhvL29iaXgaKu6uvHlwyFbdfkRl5nSJxW5VSVu/4DOOxpy4zKcmKmWIT8zk6NTyUH/44cPuAkVfFwF7cGgZGRa1XvfTGXV/RGfaTLlv8fBS6HoGyI9ntr+pM7K2VQZB7nYO8SsTYqr4LN/0yN9YeP4SJ8JQsOxP9glmL3JbzI925K/Ilx6X5bWPo750fL3x+HHxsgCNTyYNV3tIlgf8/gYUd1p3RNW+tMxU9gT/IWB5vbz97NC9c0MzPXQxNZIgqZ6gaXKiwelArQMk5f3/VBxS4sV2hRup7zRoOhd0WKUj9GukMSjQ2dDIm1534i3s5nUcO1gjl+n/zkxYNbVezKNqQ0GsVAlKTsfNVHVccKnTba4P140bO286GMss5zCLWYihS9lIGF5j42OhdpzlEyWixNiXiS9I6jbWo1IwWi6/FznLGv9f7e8+RzhMYdonY1Qfj7CKESW9g3F+3nGMg+P3KQ8EPl9lG/Iymd3+IcbzUGSKzAGuKdMXg2ozOrq++V0VLj+O/q82Sjr20v5DQ5Sovn4n3/MKWd3uc1L8LzGzopO0h+nRBYp+8xnrULFpOxBI01fqDtPv3QsVFQL7HB5hv621ea/L16EutJ1iHGemH3BNjQGMISoQCNH24e6Y4UlnFhWyls7Sr7rFUIgw4qJlsyx3NJdp104DDlS4PmFArmZZ/eSwRAXln2mTbaQVaSuaOpR9lk5QRQQYKeHzFE+p95UNWSsobn7fAA2KGSvdMfBWVhQxLJCMWRXUHpblgT0EXoyo5GXxzFzTjg0eFmoMK05L3pAEho/lM9YeYkaJBMcCeuGmjKe63tbMwo8h6YaY0UcOzEO205La9XnE6a83CP/OVjHklu1bLX1xJHjN/UMPl+G9jz0s5w9ti1TC3huiUQQii/P6mLMw5Wj4xtifgXCWeJ0qNfChi316NE+RmSlxl0x48pnPuE7epjgKUGLh1OA2AScLffOOrR0tCo0Nlwm0vibJUOtoG7eU/fXwWlvBSVWjfpyLUWZAHxeD5XdNsv8TegsgxrBTi/vh+9woIQgzojjauTqDARIUHo3BS/phVf4YtbzdZ2CKSxt7VLSDIuilzlsDUrqsunJW7QLr3mQ+H9ldjHYdn78f6lNK/OOAut4ZVuXvM6hscRjBxgw8u5y6dmHjPwG/QdyW9tLsv2F3iSvC9fulx7lCLxicw/rGRsl+iWs3vb2ZQRAkOhn7927gOhBSDB9FKlcr/jD1CFcfDrtVH3PJDHiU95J/pIcPA1VXFqusspLCgEYi71BFj4wG2J/lp/4yQVKjRx7ok+1WGdocdeXGGOHr+7rtmstG5YRlnhofGWfhE3ddIydtphNKWr1ewyff/whXs/+QVDiIdT/1TA6uLNzWAgFvxaDbpK7BoyYJYAw0ohNkKH16uZbi1IawFd+M/frJ1EYDnNU25n2qj4ekwFslC9VK6eLex1cZxFnnBE+XMoSjoLndc8JOVEGJ6OB4vhNhpPgcuxAAxlB8vFyplOZ23bG0nESLUlH8/QSYsBdM6dgDslP3CTyzv1X1iCaK5DGauEsZVMMQSymYJoCvebeOA7D9q6kuKg/Rcw5SZPARCGoFVcavYWZ6kwmWM5tr7IDzRNkkUojd/k3U24kjSrWwxhb5OXCBzlnsKYJyrF4TmKEiCesbRrVwjAGK90Vev10CEvOf2rYohJLYTgEyMjJ5Y4g2lWn5p8NqvqyYIwfirYoVCimZPPw+xibicl+rsWBOcnQSp32HC1Y3cm81v4eFkyHoTFM/45ol2kK1vA3OmRLExBaX8prVJ0dsWvnkT9OGHOGGA+YPDOg36Daqwio0NfNuAEiHNLNNTOZgh1hJTuSTlHTBkWhB82pty7QGCu6FwQ9Gf5wSmP7kIxCyUV9tS59K0krN35fsV1CIh49hc2b8ctPDGrgW+HRRrpY5bt4aKvcs1vVRbO1LPEeX/c2CptYTCzm1wDqyKSy4MSOBNZ6XhTFtH0M0EGlO9H8GloYXcDDqxK9hoep/RYIDcGq/MmQdHUfWoUb5QA/ev/hy9frqDC67bmhex6Tk5RA227rrH+HWGH6JyE7u4mm4PNtokJdltRHSnxBDJIYHV+LURzsd3F8jQDTvHIUoFAIkCD46bMu4bOOvQWoAd9ebAhGiyqBimJ2wAqU4Lwtlpz28YQGeYYvLxI9mWcwOGmC691Mb1DhrtNqnhCS27vtETybb/4icZI/UOnHoYQgZdBi1Sot/T+HYCAFQBQfFeF7eJO1Vek+uUnM4B+TuniMHZ8Ddg07SK23RXPCj+DrhEym/quS6VkGevK97YW+8qisd/tstmedzy5O6O7ex/5LisZTMP7M5+gM9heKJSj3IFcxPQpgYyydyX0GtKTxKJhyTlRNFVo+ECbp9vg1GrdHwSuiE2rC5jinvHiHhlQJub3qfMJlS4Y9J303mxirrt6E2euGPhgsLbfSKrPA3yTik419EUyII2DDIC+ew3tVP4D69bIo3H1+re01EIN7CMA1i/LV6IBzw4IK9zaJo/xCsVR1QnIDf6FeOCbxR6FQ8/fBWS1qiLTGKopV0WDwW3GQqONFGhA9+ZkAAAA",Rg="data:image/webp;base64,UklGRuQEAABXRUJQVlA4INgEAAAwMgCdASraAkwAPolEnEulI6wnoFgJSYARCWluCv+9wf/5wfXooaOTIArgRthwcxwe6p02yl7NNWTrxBF+2eX+v/0ZsgL/3ANxaYHcG/GVoVGNKmJ7J5dufJF4wtuvDOPRV92szkn8kntNVaj7hZCZPJ4UE76Ptn7NW9BaqVLrbUe35LenGfkmdSAmYWtPJz3JU9E/raG6fObpPQyP5N5R0WSX94My7Hh4HW3Yxlr97c0xQqdCfhqtwKVfp7K+zChWIIzPFMDwvkEVq33FAqAeWTWrVa40W62O2hrDB6ZL1U7tlxLt7325ObNRWnHe3XQzsHBKgtN4KjG0HBhifeZoYTK2nhwUdehpXouLgSKTXZL/v69jwllV9+/bz2t+7Dxq+Mya6HdWKpart+Z/tm0UgpShicDyPA+Kr3080/MkC4ineGxflDF3GawjXYfuAEswZpSMFKmsmKQDqFm5CRzSRH0DrjMGqTziMx/aVSZBDd6NKbDGYbQaT0KdyGxAGAGqMmuBy/P+qWfS9FPbkaY9OQfP1gRajTObAAD9pl3mU/DkD+1lpvfyB+VTd7MYptr3Ap3432QsRUgn+FrrKt8n0xDZoy8iTPvjeVy10+7BMPexT1a1AU2dZkSSszNMhFv8v8jnR5v3Xn5jBcqj7U229AHTlwSZpKUZIYs7ysJLPDJMel520QnLUEi8l4mPXFE4skzJAHCCckD+yyrAo/l3hobXi7cDmOr8esrUEDUvTPjrl7XEoUh7amMlAOxQvCWOftz/BsDf28nkJgW4OhCCJeUhykWoo/VGOQBVjai4HKsCA8Ss/B1eetJYhR4fLl07Jq25BQb3Sdbf5b/s6HMFRAsokU2+o8MbP8YINkJiNb4v6CcFfdV/eQUVr6/NAal2IoHmBEmi2BjspPf/KuUQBbyZuGx6HxXip+SynOJnhYYinLJPhUNkqw6SKgJ9BdMZ0LihR3PmYRJhIC9hwCiVzZeT19Fqs9Vo5n267BsvAOFc9uXwENvYuFxdI3fQ488zi7irnzQB2DwtkgGAT8iNwbbSNVWkjWpQtOZaaLjttCEm/F2yJ9zT2hc+hm1kE6udkpqan7ICQ+9lwlPf297iMLV0g9fkB0CvOzrUp61otptnr5HbfjxLfTM9kJ2vl5/ELueEaz29CEufGQJ/xvBtBoHjkyMlzIv+DFHsxy99MfRiZKYupMZtbLyjBUcfP1BpKDxM6sIiBBqyQtGOmm3lWhwr3HJ/liH8IK7Ft5wmu9Dz08zuUg9lz/Ajq3Kx4bNjmK8PjFPlT2NKHZ0PcNIfEvDxx0bpf5I3RTF6LviGrb6X2sOYkczfQALn/g+5jRFeXtcHncLR1xqN3G72LwNzaticBRKMZysHRMTkPria5mgxaAAVf88/e48gzvPjjiegFBu3MXLWdjTOnHK+BFkBBHWHqfraHUFmycrqXtFIH8FBlsIKyGFbzLRaJ0xoOfu29T/d9q/8hq7POGxeWZsUiDi2Cuvcl3gQyjGPaGw5jcBrewE2O4cR7SPYooUoIobgc2zyGANGzxG6zcFqw7hZ5YomhTeJLQ3EFH+gI9ZMoaqZCXqjbenfuz8XSXMVgsG8IFDO2YQAsQzHwv61hteyVEhvcZHppUU7jhRuy+FeqW2UR+OSAAAA";var TS=/^https?:$/.test(location.protocol),AS=document.currentScript?.src||location.href,hf=i=>new URL(`assets3d/${i}`,AS).href,Ch=null;function kg(i){if(!TS)return null;if(Ch)return Ch;let e=new Br,t=new Th,n=(o,a)=>new Promise(l=>e.load(hf(o),c=>{c.wrapS=c.wrapT=kn,c.anisotropy=$s,a&&(c.colorSpace=ln),l(c)},void 0,()=>l(null))),s=(o,a,l=!0)=>{let c=a&&i?"-sm":"";return Promise.all([l?n(`tex/${o}-col${c}.webp`,!0):null,n(`tex/${o}-nor${c}.webp`),n(`tex/${o}-rough.webp`)]).then(([h,u,d])=>u&&(h||!l)?{map:h,normalMap:u,roughnessMap:d}:null)},r=o=>new Promise(a=>t.load(hf(`models/${o}`),l=>a(l.scene),void 0,()=>a(null)));return Ch={oak:s("oak",!0),floor:s("floor",!0),plaster:s("plaster",!1,!1),rug:s("rug",!1,!1),linen:s("linen",!1,!1),jacquard:Promise.all([n("tex/jacquard-nor.webp"),n("tex/jacquard-rough.webp")]).then(([o,a])=>o?{normalMap:o,roughnessMap:a}:null),env:new Promise(o=>new Rh().load(hf("env/room-morning.hdr"),o,void 0,()=>o(null))),viewM:n("env/view-morning.webp",!0),viewN:n("env/view-night.webp",!0),plantTable:r("potted_plant_02.glb"),plantFloor:r("potted_plant_01.glb"),succulent:r("potted_plant_04.glb")},Ch}function Kr(i,e,t,n=0){if(!i)return null;let s=i.clone();return s.repeat.set(e,t),s.rotation=n,s.center.set(.5,.5),s.needsUpdate=!0,s}function Zn(i,e,t,n,s=0,r={}){!e||!i||(r.keepMap||(i.map=Kr(e.map,t,n,s)),i.normalMap=Kr(e.normalMap,t,n,s),i.normalScale?.set(r.ns??1,r.ns??1),e.roughnessMap&&!r.keepRough&&(i.roughnessMap=Kr(e.roughnessMap,t,n,s),i.roughness=r.rough??1),r.color&&i.color.set(r.color),i.needsUpdate=!0)}function uf(i,e,t,n,s,r,o=0){let a=new kt;a.add(i);let l=new ui().setFromObject(i),c=l.getSize(new U),h=r/(c.y||1);return i.position.set(-(l.min.x+l.max.x)/2,-l.min.y,-(l.min.z+l.max.z)/2),a.scale.setScalar(h),a.position.set(t,n,s),a.rotation.y=o,i.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0,(u.material.alphaTest>0||u.material.transparent)&&(u.material.side=nn))}),e.add(a),a}function Cg(i,e,t,n,s,r,o,a,l,c="#ffffff"){let d=[],f=[],p=[];for(let g=0;g<=24;g++){let v=hn(s,o,g/24),A=l+Math.tan(v)*e,C=((v>=0?v:Math.max(r,v*a))-r)/(o-r);for(let T=0;T<=72;T++){let x=T/72,b=t+(x-.5)*n;d.push(Math.sin(b)*e,A,-Math.cos(b)*e),f.push(x,C)}}for(let g=0;g<24;g++)for(let v=0;v<72;v++){let A=g*73+v,S=A+72+1;p.push(A,A+1,S,A+1,S+1,S)}let M=new tn;M.setAttribute("position",new Ct(new Float32Array(d),3)),M.setAttribute("uv",new Ct(new Float32Array(f),2)),M.setIndex(p);let m=new ot(M,new wn({map:i,color:c,toneMapped:!1,side:nn,fog:!1}));return m.frustumCulled=!1,m}var ve=Math.PI,Kn=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),hn=(i,e,t)=>i+(e-i)*t,Yi=(i,e,t)=>{let n=Kn((t-i)/(e-i));return n*n*(3-2*n)},Sr=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,Ig=i=>1-(1-i)**3,Ii=(i,e,t,n)=>e+(i-e)*Math.exp(-t*n),df=()=>new Promise(i=>setTimeout(i)),Tn=7.8,jn=1.5,ES=.17,Pg=30,ff=1.3,Ih=.16,pf={Hard:{depth:.08,radius:.85,k:250,c:27,crown:.018},Medium:{depth:.16,radius:1,k:130,c:15,crown:.045},Soft:{depth:.3,radius:1.2,k:72,c:8,crown:.08}},fn=i=>()=>{i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296};function qo(i,e,t,n){let s=fn(n),r=new Float32Array(e*t);for(let a=0;a<r.length;a++)r[a]=s();let o=new Float32Array(i*i);for(let a=0;a<i;a++){let l=a/i*t,c=l|0,h=(c+1)%t,u=l-c;u=u*u*(3-2*u);for(let d=0;d<i;d++){let f=d/i*e,p=f|0,M=(p+1)%e,m=f-p;m=m*m*(3-2*m);let g=r[c*e+p],v=r[c*e+M],A=r[h*e+p],S=r[h*e+M];o[a*i+d]=g+(v-g)*m+(A-g)*u+(g-v-A+S)*m*u}}return o}function yf(i,e,t){let n=new Uint8Array(e*e*4);for(let s=0,r=0;s<e;s++){let o=(s+e-1)%e*e,a=(s+1)%e*e,l=s*e;for(let c=0;c<e;c++,r+=4){let h=i[l+(c+e-1)%e],u=i[l+(c+1)%e],d=i[o+c],f=i[a+c],p=(h-u)*t,M=(d-f)*t,m=1/Math.sqrt(p*p+M*M+1);n[r]=(p*m*.5+.5)*255,n[r+1]=(M*m*.5+.5)*255,n[r+2]=(m*.5+.5)*255,n[r+3]=255}}return n}var $s=8;function vf(i,e,t){let n=new ts(i,e,e,_i);return n.wrapS=n.wrapT=kn,n.magFilter=_n,n.minFilter=mi,n.generateMipmaps=!0,n.anisotropy=$s,t&&(n.colorSpace=ln),n.needsUpdate=!0,n}function Lg(i,e){let t=new Float32Array(i*i),n=qo(i,10,e.threads,11),s=qo(i,e.threads,10,23),r=qo(i,e.threads,e.threads,5),o=qo(i,12,12,7);for(let a=0,l=0;a<i;a++){let c=a/i;for(let h=0;h<i;h++,l++){let u=h/i,d=(u+c)*e.cells,f=(u-c)*e.cells,p=Math.abs(Math.sin(ve*d)),M=Math.abs(Math.sin(ve*f)),m=(p*M)**e.round,g=Math.min(p,M),A=((p<M?f:d)*e.stitches%1+1)%1<.6?1:0,S=1-Yi(0,e.seam,g),C=1-Yi(.05,.24,Math.hypot(p,M)),T=n[l]*.5+s[l]*.5;t[l]=m+S*A*.018+C*.1*(e.tuft??1)+(o[l]-.5)*.05+(T-.5)*.011+(r[l]-.5)*.0016}}return vf(yf(t,i,e.normal),i,!1)}function Ng(i,e,t,n){let s=new Float32Array(i*i);return t.forEach(([r,o,a],l)=>{let c=qo(i,r,o,n+l);for(let h=0;h<s.length;h++)s[h]+=c[h]*a}),vf(yf(s,i,e),i,!1)}function RS(i,e){let t=new Float32Array(i*i),n=qo(i,48,48,81);for(let s=0,r=0;s<i;s++)for(let o=0;o<i;o++,r++)t[r]=Math.sin(2*ve*o/i*e)*Math.sin(2*ve*s/i*e)*.5+(n[r]-.5)*.08;return vf(yf(t,i,9),i,!1)}function Dg(i,e,t){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createRadialGradient(i/2,i/2,i*e,i/2,i/2,i*t);return r.addColorStop(0,"#fff"),r.addColorStop(.55,"#888"),r.addColorStop(1,"#000"),s.fillStyle=r,s.fillRect(0,0,i,i),new fi(n)}var Ug=i=>new Promise(e=>{let t=new Image;t.onload=()=>{let n=new Fn(t);n.wrapS=n.wrapT=kn,n.colorSpace=ln,n.anisotropy=$s,n.needsUpdate=!0,e(n)},t.src=i});function xf(i,e,t){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d");e(s,i);let r=new fi(n);return r.wrapS=r.wrapT=kn,r.colorSpace=ln,r.anisotropy=$s,r.repeat.set(t,t),r}function qi(i,e,t,n,s,r){for(let o of[-e,0,e])for(let a of[-e,0,e]){let l=t+o,c=n+a;l+s<0||l-s>e||c+s<0||c-s>e||(i.save(),i.translate(l,c),r(i),i.restore())}}function Oi(i,e,t,n=.05){i.fillStyle=t,i.fillRect(0,0,e,e);let s=fn(9),r=Math.max(2,e/512);for(let o=0;o<e;o+=r)i.fillStyle=`rgba(0,0,0,${(s()*n).toFixed(3)})`,i.fillRect(0,o,e,r/2),i.fillStyle=`rgba(255,255,255,${(s()*n).toFixed(3)})`,i.fillRect(o,0,r/2,e)}var Fg=(i,e,t)=>{i.beginPath(),i.moveTo(0,0),i.bezierCurveTo(t,-e*.25,t*.8,-e*.75,0,-e),i.bezierCurveTo(-t*.8,-e*.75,-t,-e*.25,0,0),i.closePath()},Og=(i,e,t,n)=>{i.beginPath(),i.moveTo(0,0),i.lineTo(0,-e*.97);for(let s=1;s<n;s++){let r=-e*s/n,o=t*Math.sin(ve*s/n)*.85;i.moveTo(0,r+e*.03),i.lineTo(o,r-e*.07),i.moveTo(0,r+e*.03),i.lineTo(-o,r-e*.07)}};function CS(i,e){let t="rgba(234,245,251,.96)";i.fillStyle=t,i.beginPath(),i.arc(0,0,e,0,ve*2),i.fill(),i.fillStyle="#2b4fbd",i.beginPath(),i.arc(0,0,e*.8,0,ve*2),i.fill(),i.fillStyle=t;for(let n=0;n<16;n++){let s=n/16*ve*2;i.beginPath(),i.ellipse(Math.cos(s)*e*.62,Math.sin(s)*e*.62,e*.16,e*.07,s,0,ve*2),i.fill()}i.strokeStyle="rgba(118,201,219,.95)",i.lineWidth=e*.05,i.beginPath(),i.arc(0,0,e*.4,0,ve*2),i.stroke(),i.fillStyle=t,i.beginPath(),i.arc(0,0,e*.2,0,ve*2),i.fill()}function IS(i,e){let t=["#f47a35","#ff9d5c","#e5506b","#f6c344"];for(let n=0;n<6;n++)i.save(),i.rotate(n/6*ve*2),i.fillStyle=t[n%t.length],i.beginPath(),i.moveTo(0,0),i.lineTo(e*.22,-e*.5),i.lineTo(0,-e),i.lineTo(-e*.22,-e*.5),i.closePath(),i.fill(),i.restore();i.fillStyle="#3a1f2b",i.beginPath(),i.arc(0,0,e*.12,0,ve*2),i.fill()}function mf(i,e,t){i.strokeStyle=t,i.fillStyle=t,i.lineWidth=e*.05;for(let n=0;n<8;n++)i.save(),i.rotate(n/8*ve*2),i.beginPath(),i.ellipse(0,-e*.42,e*.14,e*.3,0,0,ve*2),i.stroke(),i.restore();i.beginPath(),i.arc(0,0,e*.16,0,ve*2),i.fill();for(let n=0;n<4;n++)i.save(),i.rotate(n/4*ve*2+ve/4),i.beginPath(),i.moveTo(0,-e*.72),i.bezierCurveTo(e*.4,-e*.86,e*.34,-e*1.14,0,-e*1.02),i.stroke(),i.beginPath(),i.moveTo(0,-e*.72),i.bezierCurveTo(-e*.4,-e*.86,-e*.34,-e*1.14,0,-e*1.02),i.stroke(),i.restore()}function PS(i,e,t){i.strokeStyle=t,i.lineWidth=e*.055;for(let n=0;n<8;n++){let s=n/8*ve*2;i.beginPath(),i.arc(Math.cos(s)*e*.55,Math.sin(s)*e*.55,e*.42,0,ve*2),i.stroke()}i.beginPath(),i.arc(0,0,e*.2,0,ve*2),i.stroke()}function LS(i,e,t){i.strokeStyle=t,i.lineCap="round",i.lineWidth=e*.02,i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(e*.12,-e*.5,0,-e),i.stroke(),i.lineWidth=e*.014,i.beginPath();for(let n=1;n<24;n++){let s=n/24,r=-e*s,o=e*.12*Math.sin(ve*s)*.9,a=e*.34*Math.sin(ve*(s*.82+.1));i.moveTo(o,r),i.lineTo(o+a,r-a*.5),i.moveTo(o,r),i.lineTo(o-a,r-a*.5)}i.stroke()}function Bg(i,e,t,n,s,r){i.strokeStyle=t,i.lineWidth=r,i.lineCap="round";for(let o=0;o<n;o++){let a=(o+.5)*e/n;i.beginPath();for(let l=0;l<=e;l+=4){let c=a+Math.sin(l/e*ve*4+o*.9)*e*s;l?i.lineTo(l,c):i.moveTo(l,c)}i.stroke()}}function NS(i,e,t,n){Oi(i,e,t,.02);let s=4,r=e/s;i.strokeStyle=n,i.lineWidth=e*.007;for(let o=0;o<s;o++)for(let a=0;a<s;a++){let l=(a+.5)*r,c=(o+.5)*r,h=r*.5;for(let u=1;u<=4;u++){let d=h*u/4;i.beginPath();for(let f=0;f<=6;f++){let p=f/6*ve*2+ve/6,M=l+Math.cos(p)*d,m=c+Math.sin(p)*d;f?i.lineTo(M,m):i.moveTo(M,m)}i.stroke()}}}function DS(i,e,t,n,s){Oi(i,e,t,.05);let r=4,o=e/r,a=(l,c)=>{let h=Math.round((l%e+e)%e/(o/2))%(r*2),u=Math.round((c%e+e)%e/(o/2))%(r*2);return fn(h*31+u*7+3)()<.34};i.fillStyle=s;for(let l=-r;l<r*2;l++)for(let c=-r;c<r*2;c++){let h=(l+c+1)/2*o,u=(c-l)/2*o;h<-o||h>e+o||u<-o||u>e+o||!a(h,u)||(i.beginPath(),i.moveTo(h,u-o/2),i.lineTo(h+o/2,u),i.lineTo(h,u+o/2),i.lineTo(h-o/2,u),i.closePath(),i.fill())}i.strokeStyle=n,i.lineWidth=e*.008;for(let l=-r;l<=r*2;l++)i.beginPath(),i.moveTo(l*o,0),i.lineTo(l*o+e,e),i.stroke(),i.beginPath(),i.moveTo(l*o,0),i.lineTo(l*o-e,e),i.stroke()}var ll={eco:{top:(i,e)=>{Oi(i,e,"#2346ad",.06),[[.2,.25,.4],[.7,.6,1.9],[.45,.9,2.6]].forEach(([n,s,r])=>qi(i,e,n*e,s*e,e*.28,o=>{o.rotate(r),o.fillStyle="rgba(104,201,212,.55)",o.beginPath(),o.ellipse(0,0,e*.26,e*.13,0,0,ve*2),o.fill()})),[[.25,.3,.16],[.76,.18,.13],[.58,.7,.17],[.06,.8,.12]].forEach(([n,s,r])=>qi(i,e,n*e,s*e,e*r,o=>CS(o,e*r)))},side:(i,e)=>{Oi(i,e,"#f2f5fb",.03);let t=6,n=e/t;i.fillStyle="#2b4fbd";for(let s=0;s<t;s++)for(let r=0;r<=t;r++)i.beginPath(),i.arc((r+s%2*.5)*n,(s+.5)*n,n*.2,0,ve*2),i.fill()},rep:[.32,1.1],quilt:!1,dark:!0,piping:"#f2f5fb",under:"#c9ccd6",label:["#ffffff","#2b4fbd"]},plush:{top:(i,e)=>{Oi(i,e,"#1b3488",.07),[[.24,.36,.4],[.73,.3,-.9],[.5,.82,2.2],[.96,.74,1.2]].forEach(([n,s,r])=>qi(i,e,n*e,s*e,e*.34,o=>{o.rotate(r),o.strokeStyle="rgba(176,198,240,.9)",o.lineWidth=e*.006,Fg(o,e*.3,e*.11),o.stroke(),o.lineWidth=e*.003,Og(o,e*.3,e*.11,9),o.stroke()}));let t=fn(44);i.fillStyle="rgba(255,255,255,.08)";for(let n=0;n<2600;n++)i.fillRect(t()*e,t()*e,2,2)},rep:[.36,.5],quilt:!1,dark:!0,piping:"#eef0f7",under:"#1d2f6e",label:["#f3efe4","#223f98"]},vento:{top:(i,e)=>{Oi(i,e,"#132a4c",.05);let t=fn(52),n=["#1d6f57","#2c9a6c","#4fb983","#0f5651","#3d8f5c"],s=[],r=[];for(let o=0;o<16;o++){let a=e*(.12+t()*.12);s.push([t()*e,t()*e,t()*ve*2,a,n[o%n.length]])}for(let o=0;o<7;o++)r.push([t()*e,t()*e,t()*ve*2]);s.forEach(([o,a,l,c,h])=>qi(i,e,o,a,c,u=>{u.rotate(l),u.fillStyle=h,Fg(u,c,c*.38),u.fill(),u.strokeStyle="rgba(8,40,34,.55)",u.lineWidth=e*.0022,Og(u,c,c*.38,7),u.stroke()})),r.forEach(([o,a,l])=>qi(i,e,o,a,e*.07,c=>{c.rotate(l),IS(c,e*.055)}))},rep:[.34,.45],quilt:!1,dark:!0,piping:"#132a4c",under:"#10223e",label:["#f2c14e","#132a4c"]},aura:{top:(i,e)=>{Oi(i,e,"#f6f5f1",.025),[[.25,.25],[.75,.75]].forEach(([t,n])=>qi(i,e,t*e,n*e,e*.2,s=>mf(s,e*.16,"#6f727b"))),[[.75,.25],[.25,.75]].forEach(([t,n])=>qi(i,e,t*e,n*e,e*.09,s=>mf(s,e*.065,"#8d9097")))},side:(i,e)=>{Oi(i,e,"#f4f3ef",.025);for(let t=0;t<3;t++)qi(i,e,(t+.5)*e/3,e*.5,e*.14,n=>mf(n,e*.1,"#9d9fa6"))},rep:[.6,.8],quilt:!0,piping:"#e2e1dc",under:"#cfcdc6",label:["#1d2b5e","#e9ecf5"]},"imperio-white":{top:(i,e)=>{Oi(i,e,"#f7f6f2",.02);let t=fn(61),n=[];for(let s=0;s<5;s++)n.push([t()*e,t()*e,e*(.1+t()*.1),t()*ve*2]);i.strokeStyle="rgba(128,128,140,.6)",i.lineWidth=e*.011,n.forEach(([s,r,o,a])=>qi(i,e,s,r,o*1.1,l=>{l.rotate(a);for(let c=0;c<3;c++)l.beginPath(),l.arc(0,0,o*(1-c*.26),0,ve*1.35),l.stroke()}))},side:(i,e)=>NS(i,e,"#ecebe7","#9c9ca5"),rep:[.32,.9],quilt:!0,piping:"#e6e2d4",under:"#cdcac2",label:["#2b47a8","#ffffff"]},"imperio-blue":{top:(i,e)=>DS(i,e,"#1b2d68","#3f66c8","rgba(138,166,234,.45)"),rep:[.9,1.2],quilt:!1,dark:!0,piping:"#eef0f6",under:"#172656",label:["#ffffff","#1b2d68"]},"camellia-pt":{top:(i,e)=>{Oi(i,e,"#f8f7f3",.02),Bg(i,e,"rgba(118,118,126,.95)",3,.06,e*.02)},side:(i,e)=>{Oi(i,e,"#f5f4ef",.02),Bg(i,e,"rgba(176,176,184,.95)",5,.04,e*.016)},rep:[.5,1],quilt:!0,piping:"#ece4cb",under:"#d3cfc4",label:["#b98b3f","#fffaf0"],topper:"pillow"},"camellia-et":{top:(i,e)=>{Oi(i,e,"#f7f6f4",.02),[[.25,.25,.14,"#9893b3"],[.75,.75,.14,"#9893b3"],[.75,.25,.08,"#aeaac4"],[.25,.75,.08,"#aeaac4"]].forEach(([t,n,s,r])=>qi(i,e,t*e,n*e,e*s*1.1,o=>PS(o,e*s,r)))},rep:[.75,.9],quilt:!0,piping:"#e8e1cb",under:"#d3cfc4",label:["#24305f","#f2efe6"],topper:"euro"},emma:{top:(i,e)=>{Oi(i,e,"#edf3ea",.025),[[.2,.4,.5,"#6f757c"],[.7,.2,2.4,"#7fa66c"],[.55,.72,-.7,"#6f757c"],[.08,.92,1.6,"#7fa66c"],[.9,.62,3.6,"#80868d"]].forEach(([t,n,s,r])=>qi(i,e,t*e,n*e,e*.34,o=>{o.rotate(s),LS(o,e*.32,r)}))},rep:[.36,.5],quilt:!1,piping:"#e6e4d4",under:"#cfd3cb",label:["#2f5d34","#f4f1e4"]}};function US(i,e,t,n){let s=[];for(let r=0;r<t;r++)s.push(-(i-e+e*Math.tan((t-r)/t*ve/4)));for(let r=0;r<=n;r++)s.push(-(i-e)+2*(i-e)*r/n);for(let r=1;r<=t;r++)s.push(i-e+e*Math.tan(r/t*ve/4));return s}var gf=[{n:[0,1,0],u:0,v:2,g:0},{n:[0,-1,0],u:0,v:2,g:2},{n:[0,0,1],u:0,v:1,g:1},{n:[0,0,-1],u:0,v:1,g:1},{n:[1,0,0],u:2,v:1,g:1},{n:[-1,0,0],u:2,v:1,g:1}],hl=class{constructor({cs:e=3,seg:t=[1,1,1],groups:n=!1}){this.cs=e,this.seg=t;let s=gf.map(l=>[e*2+t[l.u]+1,e*2+t[l.v]+1]),r=s.reduce((l,[c,h])=>l+c*h,0),o=[];this.geometry=new tn;let a=0;gf.forEach((l,c)=>{let[h,u]=s[c],d=o.length,f=(l.u===0&&l.v===2?1:0)^(l.n[0]+l.n[1]+l.n[2]<0?1:0)^(l.u===2?1:0);for(let p=0;p<u-1;p++)for(let M=0;M<h-1;M++){let m=a+p*h+M,g=m+1,v=m+h,A=v+1;f?o.push(m,v,g,g,v,A):o.push(m,g,v,g,A,v)}n&&this.geometry.addGroup(d,o.length-d,l.g),a+=h*u}),this.geometry.setIndex(o),this.pos=new Float32Array(r*3),this.nor=new Float32Array(r*3),this.uvs=new Float32Array(r*2),this.geometry.setAttribute("position",new Ct(this.pos,3)),this.geometry.setAttribute("normal",new Ct(this.nor,3)),this.geometry.setAttribute("uv",new Ct(this.uvs,2))}fill(e,t,n,s,r={},o=[1,1,1]){let a=[e/2,t/2,n/2],{pos:l,nor:c,uvs:h,cs:u,seg:d}=this,f=a.map((T,x)=>US(T,s,u,d[x])),p=r.crown||0,M=r.bulge||0,m=r.sag||0,g=a[0],v=a[2],A=a[1],S=0;for(let T of gf){let x=3-T.u-T.v,b=T.n[x],B=o[T.g];for(let N of f[T.v])for(let F of f[T.u]){let W=[0,0,0];W[T.u]=F,W[T.v]=N,W[x]=b*a[x];let Z=W.map((He,re)=>Kn(He,-(a[re]-s),a[re]-s)),P=W[0]-Z[0],Y=W[1]-Z[1],K=W[2]-Z[2],X=1/(Math.sqrt(P*P+Y*Y+K*K)||1);P*=X,Y*=X,K*=X;let ye=Z[0]+P*s,te=Z[1]+Y*s,ce=Z[2]+K*s;if(p||M||m){let He=ye/g,re=ce/v,Ie=Yi(-A*.4,A,te),We=1-He**4,et=1-re**4;te+=p*We*et*Ie-m*He*He;let de=Math.cos(te/A*ve/2)*M;ye+=de*Math.sign(ye)*Yi(.7,1,Math.abs(He)),ce+=de*Math.sign(ce)*Yi(.8,1,Math.abs(re)),P+=4*p*He**3*et*Ie/g,K+=4*p*re**3*We*Ie/v;let Be=1/Math.sqrt(P*P+Y*Y+K*K);P*=Be,Y*=Be,K*=Be}let me=S*3,Oe=S*2;l[me]=ye,l[me+1]=te,l[me+2]=ce,c[me]=P,c[me+1]=Y,c[me+2]=K,h[Oe]=F/(B[0]??B),h[Oe+1]=N/(B[1]??B),S++}}let C=this.geometry;return C.attributes.position.needsUpdate=!0,C.attributes.normal.needsUpdate=!0,C.attributes.uv.needsUpdate=!0,C.computeBoundingSphere(),this}},Bi=(i,e,t,n,s={})=>new hl({cs:s.cs??2,seg:s.seg??[8,1,12],groups:!!s.groups}).fill(i,e,t,n,s.shape,s.tile??[1,1,1]);function FS(i,e,t,n,s=91,r=44){let o=fn(s),a=Array.from({length:14},()=>[o()*1.8-.9,o()*1.8-.9,.12+o()*.3,(o()-.55)*.16]),l=[],c=[],h=[],u=.36;[1,-1].forEach((f,p)=>{let M=p*(r+1)*(r+1);for(let m=0;m<=r;m++)for(let g=0;g<=r;g++){let v=g/r*2-1,A=m/r*2-1,S=Math.pow(Math.max(0,(1-Math.abs(v)**2.4)*(1-Math.abs(A)**2.4)),.46),C=0;for(let[B,N,F,W]of a)C+=W*Math.exp(-((v-B)**2+(A-N)**2)/(F*F));let T=v*i/2-Math.sign(v)*i*.028*(1-A*A)*Math.abs(v)**7,x=A*e/2-Math.sign(A)*e*.045*(1-v*v)*Math.abs(A)**7,b=f>0?t/2*S*(1+C*(p?0:1)):-t/2*S*u;l.push(T,b- -t/2*u+n,x),c.push((v+1)/2*i,(A+1)/2*e)}for(let m=0;m<r;m++)for(let g=0;g<r;g++){let v=M+m*(r+1)+g,A=v+r+1;f>0?h.push(v,A,v+1,v+1,A,A+1):h.push(v,v+1,A,v+1,A+1,A)}});let d=new tn;return d.setAttribute("position",new Ct(new Float32Array(l),3)),d.setAttribute("uv",new Ct(new Float32Array(c),2)),d.setIndex(h),d.computeVertexNormals(),d}var Nh=class extends si{constructor(e,t,n){super(),this.w=e,this.d=t,this.r=n}getPoint(e,t=new U){let{w:n,d:s,r}=this,o=n-2*r,a=s-2*r,l=ve*r/2,c=2*(o+a)+4*l,h=(e%1+1)%1*c,u=n/2-r,d=s/2-r,f=[[o,p=>t.set(-u+p*o,0,d+r)],[l,p=>t.set(u+Math.sin(p*ve/2)*r,0,d+Math.cos(p*ve/2)*r)],[a,p=>t.set(u+r,0,d-p*a)],[l,p=>t.set(u+Math.cos(p*ve/2)*r,0,-d-Math.sin(p*ve/2)*r)],[o,p=>t.set(u-p*o,0,-d-r)],[l,p=>t.set(-u-Math.sin(p*ve/2)*r,0,-d-Math.cos(p*ve/2)*r)],[a,p=>t.set(-u-r,0,-d+p*a)],[l,p=>t.set(-u-Math.cos(p*ve/2)*r,0,d+Math.sin(p*ve/2)*r)]];for(let[p,M]of f){if(h<=p)return M(h/p),t;h-=p}return t}},cl={uDentA:{value:new on(0,0,0,1)},uTopY:{value:jn+.7},uRange:{value:.5}};function _f(i){return i.onBeforeCompile=e=>{Object.assign(e.uniforms,cl),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
        uniform vec4 uDentA; uniform float uTopY, uRange;
        vec3 dentAt(vec4 d, vec3 p){ vec2 q = p.xz - d.xy; float g = exp(-dot(q, q) / (d.w * d.w)); return vec3(d.z * g, 2.0 * d.z * g * q / (d.w * d.w)); }`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        vec4 dentP = modelMatrix * vec4(position, 1.0);
        float dentMask = smoothstep(uTopY - uRange, uTopY - 0.05, dentP.y);
        vec3 dentS = dentAt(uDentA, dentP.xyz);
        objectNormal = normalize(objectNormal - vec3(dentS.y, 0.0, dentS.z) * dentMask);`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.y -= dentS.x * dentMask;`)},i.customProgramCacheKey=()=>"ec-dent",i}function OS(){let i=new Po({side:nn});return i.onBeforeCompile=e=>{Object.assign(e.uniforms,cl),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
        uniform vec4 uDentA; uniform float uTopY, uRange;
        float dentAt(vec4 d, vec3 p){ vec2 q = p.xz - d.xy; return d.z * exp(-dot(q, q) / (d.w * d.w)); }`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec4 dentP = modelMatrix * vec4(position, 1.0);
        transformed.y -= dentAt(uDentA, dentP.xyz) * smoothstep(uTopY - uRange, uTopY - 0.05, dentP.y);`)},i.customProgramCacheKey=()=>"ec-dent-depth",i}function zg(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}var Ph=null;function Gg(i){return Ph||(Ph=(async()=>{let e=i?512:1024,t=Lg(e,{cells:2,round:.42,seam:.13,stitches:12,normal:i?20:40,threads:i?96:190,tuft:.35});await df();let n=Lg(e,{cells:1,round:.5,seam:.075,stitches:22,normal:i?34:68,threads:i?96:190,tuft:1.3});await df();let s=Ng(256,2.2,[[96,96,.7],[40,40,.5]],40),r=Ng(256,1.5,[[256,10,.5],[10,256,.5],[64,64,.2]],70),o=RS(256,4),a=xf(512,(h,u)=>{h.fillStyle="#a8a294",h.fillRect(0,0,u,u);let d=fn(17),f=["#d9c27a","#7fa36b","#c96f63","#6b8cc7","#e6e1d3","#8c8c8c","#b9a27d","#f0e7c9","#6d6d64","#d08f4a","#cfd6e3"];for(let p=0;p<1500;p++){let M=d()*u,m=d()*u,g=3+d()*11,v=4+(d()*3|0),A=d()*ve,S=f[d()*f.length|0],C=[];for(let T=0;T<v;T++){let x=A+T/v*ve*2,b=g*(.6+d()*.5);C.push([Math.cos(x)*b,Math.sin(x)*b])}qi(h,u,M,m,g*1.2,T=>{T.fillStyle=S,T.beginPath(),C.forEach(([x,b],B)=>B?T.lineTo(x,b):T.moveTo(x,b)),T.closePath(),T.fill()})}},1.4);await df();let[l,c]=await Promise.all([Ug(Eg),Ug(Rg)]);return l.wrapS=l.wrapT=c.wrapS=c.wrapT=lr,{N:e,topQ:t,sideQ:n,pore:s,weave:r,egg:o,chips:a,oakRail:l,oakPlank:c}})(),Ph)}function Hg(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,.5)"),t.addColorStop(.5,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),i}async function BS(i,e){let t=matchMedia("(prefers-reduced-motion: reduce)").matches,n=Math.min(innerWidth,innerHeight)<600,s;try{s=new rl({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(_){return e.onFail?.(_),null}s.setPixelRatio(Math.min(devicePixelRatio||1,n?1.75:2)),s.toneMapping=Bo,s.toneMappingExposure=1,s.shadowMap.enabled=!0,s.shadowMap.type=xr,$s=Math.min(12,s.capabilities.getMaxAnisotropy());let r=new cr,o=new Dn(Pg,1.6,2,260),a=new wi(new U(0,1,0),-(jn+.7)),l=null,c=null;{let _=new cr,y=new vr(s);_.background=new Ge("#1b2340");let R=(L,D,k,V,$,le,_e)=>{let Ee=new ot(new Nt(k,V),new wn({color:new Ge(L).multiplyScalar(D),side:nn}));Ee.position.set($,le,_e),Ee.lookAt(0,0,0),_.add(Ee)};R("#ffcf9a",7,9,9,-14,8,7),R("#9db8ff",5,7,14,15,6,-7),R("#ffe9d4",1.6,26,12,0,16,2),R("#39456f",1.2,40,40,0,-10,0),l=r.environment=y.fromScene(_,.05).texture,r.environmentIntensity=.4,y.dispose()}let{N:h,topQ:u,sideQ:d,pore:f,weave:p,egg:M,chips:m,oakRail:g,oakPlank:v}=await Gg(n),A=(_={})=>new xn({roughness:.92,sheen:1,sheenRoughness:.55,sheenColor:new Ge("#fff6ec"),normalScale:new ge(.62,.62),side:nn,shadowSide:nn,..._}),S=(_,y={})=>new pt({color:_,roughness:.94,normalMap:f,...y}),C=new fi(document.createElement("canvas")),T={top:_f(A({map:C,normalMap:u})),side:_f(A({map:C,normalMap:d})),under:new pt({color:"#c9c7c0",roughness:1,side:nn}),piping:_f(new xn({color:"#dddcd8",roughness:.7,sheen:.6,sheenRoughness:.6})),foam22:S("#f4f2ea"),foam25:S("#efe7d3"),foam30:S("#e4d8bb"),hd:S("#e3eaf1"),memory:S("#e8bf78"),pu:S("#e2efe4"),profile:S("#f3f1e9",{normalMap:M,normalScale:new ge(1.5,1.5)}),rebond:S("#ffffff",{map:m}),zoneSoft:S("#f4f1e7"),zoneFirm:S("#cfb98a"),oak:new pt({map:g,roughness:.5,color:new Ge(1.5,1.42,1.32)}),plank:new pt({map:v,roughness:.55,color:new Ge(1.02,.98,.94)}),iron:new pt({color:"#17181c",roughness:.5}),pillow:new xn({color:"#f4f2ec",roughness:1,sheen:1,sheenRoughness:.7,sheenColor:new Ge("#ffffff"),normalMap:f,normalScale:new ge(.25,.25)})},x=new kt;r.add(x);let b=OS();{let _=document.createElement("canvas");_.width=_.height=256;let y=_.getContext("2d");y.filter="blur(22px)",y.fillStyle="#000",y.fillRect(50,50,156,156);let R=new ot(new Nt(1,1),new wn({map:new fi(_),transparent:!0,opacity:.55,depthWrite:!1}));R.rotation.x=-ve/2,R.position.y=.012,R.scale.set(11,13,1),x.add(R),x.contact=R}let B=new kt;x.add(B);let N=(_,y,R,L,D,k=B,V=!0)=>{let $=new ot(_,y);return $.position.set(R,L,D),$.castShadow=V,$.receiveShadow=!0,k.add($),$},F=.68,W=.19,Z=jn-F/2,P=Bi(1,F,W,.025,{seg:[1,1,1],tile:[[1,.74],[1,.74],[1,.74]]}).geometry,Y=Bi(W,F,Tn+.44,.025,{seg:[1,1,8],tile:[[1,.74],[8.3,.74],[1,.74]]}).geometry,K=N(P,T.oak,0,Z,Tn/2+.12),X=N(P,T.oak,0,Z,-Tn/2-.12),ye=[N(Y,T.oak,0,Z,0),N(Y,T.oak,0,Z,0)],te=new Gn(.13,.075,jn-F+.1,4,1);te.rotateY(ve/4);let ce=[-1,1].flatMap(_=>[-1,1].map(y=>{let R=N(te,T.oak,0,(jn-F+.1)/2,y*(Tn/2+.1));return R.userData.sx=_,R}));[-.34,.34].forEach(_=>N(new Gn(.06,.06,jn-F,16),T.iron,_*.9,(jn-F)/2,Tn*.22)),[-.34,.34].forEach(_=>N(new Gn(.06,.06,jn-F,16),T.iron,_*.9,(jn-F)/2,-Tn*.22));let me=Bi(1,.05,.32,.015,{seg:[1,1,1]}).geometry,Oe=Array.from({length:11},(_,y)=>N(me,T.oak,0,jn-.04,-Tn/2+.35+y*(Tn-.7)/10)),He=2.75,re=1,Ie=new ns;{let y=re/2,R=He,L=.36;Ie.moveTo(-y,0),Ie.lineTo(y,0),Ie.lineTo(y,R-L),Ie.absellipse(y-.055,R-L,.055,L,0,ve/2,!1,0),Ie.lineTo(-y+.055,R),Ie.absellipse(-y+.055,R-L,.055,L,ve/2,ve,!1,0),Ie.lineTo(-y,0)}let We=new gr(Ie,{depth:.13,bevelEnabled:!0,bevelThickness:.03,bevelSize:.012,bevelSegments:3,curveSegments:24}),et=N(We,T.plank,0,jn-.35,-Tn/2-.37),de=-Tn/2-.75,Be=(_,y,R,L=!0)=>{let D=document.createElement("canvas");D.width=_,D.height=y,R(D.getContext("2d"),_,y);let k=new fi(D);return L&&(k.colorSpace=ln),k.anisotropy=$s,k},an=new fi(Hg());an.colorSpace=ln;let lt=[],Tt=(_,y,R,L,D,k,V)=>{let $=new Nr(new dr({map:an,color:y,transparent:!0,opacity:L,blending:rs,depthWrite:!1,toneMapped:!1}));return $.scale.set(R,R,1),$.position.set(D,k,V),$.userData.o=L,_.add($),lt.push($),$},mt=(_,y,R)=>new wn({map:_,color:y,transparent:!0,opacity:R,blending:rs,depthWrite:!1,toneMapped:!1}),pe=_=>new wn({color:new Ge(_).multiplyScalar(1.6),toneMapped:!1}),oe=(_,y,R,L=0,D=0,k=0,V=!0)=>{let $=new ot(_,y);return $.position.set(L,D,k),$.castShadow=V,$.receiveShadow=!0,R.add($),$},Pe=(_,y=32)=>new Fr(_.map(([R,L])=>new ge(R,L)),y),Ye=new pt({color:"#c09a5f",roughness:.28,metalness:.9}),Ue=new pt({color:"#17171a",roughness:.42,metalness:.2}),gt=new xn({color:"#f3f1ec",roughness:.3,clearcoat:.5}),Je=new kt,tt=new kt;r.add(Je,tt);let rt=new kt;Je.add(rt);let It=new kt,G=new kt;x.add(It,G);let qt=new kt,ut=new kt,At=new kt;It.add(qt,ut),G.add(At);let Ne=[],sn=_=>{let y=Be(512,512,(R,L,D)=>{R.fillStyle="#fff",R.fillRect(0,0,L,D);let k=fn(3);for(let V=0;V<700;V++){let $=k()*L,le=k()*D,_e=8+k()*30,Ee=(k()*.02).toFixed(3);for(let Xe of $<_e?[0,L]:$>L-_e?[0,-L]:[0])for(let Dt of le<_e?[0,D]:le>D-_e?[0,-D]:[0]){let Qt=R.createRadialGradient($+Xe,le+Dt,0,$+Xe,le+Dt,_e);Qt.addColorStop(0,`rgba(0,0,0,${Ee})`),Qt.addColorStop(1,"rgba(0,0,0,0)"),R.fillStyle=Qt,R.fillRect($+Xe-_e,le+Dt-_e,_e*2,_e*2)}}});return y.wrapS=y.wrapT=kn,y.repeat.set(_[0],_[1]),y},at=_=>{let y=[],R=[],L=[],D=new U,k=new U;for(let{m:$,w:le,h:_e,bend:Ee=0}of _){let Xe=Ee?4:1,Dt=new xt().extractRotation($);for(let Qt=0;Qt<Xe;Qt++){let Pn=Qt/Xe,Si=(Qt+1)/Xe,bi=(Hi,Ji)=>{let na=Ee*Ji*Ji;return D.set(Hi*le,Ji*_e,na).applyMatrix4($),[D.x,D.y,D.z]},Gi=[[-.5,Pn],[.5,Pn],[.5,Si],[-.5,Pn],[.5,Si],[-.5,Si]];for(let[Hi,Ji]of Gi)y.push(...bi(Hi,Ji)),R.push(Hi+.5,Ji),k.set(0,-Ee*2*Ji,1).normalize().applyMatrix4(Dt),L.push(k.x,k.y,k.z)}}let V=new tn;return V.setAttribute("position",new Ct(new Float32Array(y),3)),V.setAttribute("normal",new Ct(new Float32Array(L),3)),V.setAttribute("uv",new Ct(new Float32Array(R),2)),V},ct=_=>{let y=_.map(le=>le.index?le.toNonIndexed():le),R=0;y.forEach(le=>{R+=le.attributes.position.count});let L=new Float32Array(R*3),D=new Float32Array(R*3),k=new Float32Array(R*2),V=0;y.forEach(le=>{L.set(le.attributes.position.array,V*3),D.set(le.attributes.normal.array,V*3),le.attributes.uv&&k.set(le.attributes.uv.array,V*2),V+=le.attributes.position.count});let $=new tn;return $.setAttribute("position",new Ct(L,3)),$.setAttribute("normal",new Ct(D,3)),$.setAttribute("uv",new Ct(k,2)),$},I=(_,y,R,L=0,D=0,k=0,V=1)=>new xt().compose(new U(_,y,R),new hi().setFromEuler(new es(D,L,k,"YXZ")),new U(V,V,V)),w=Be(128,128,(_,y,R)=>{_.translate(y/2,R-4);let L=_.createLinearGradient(-y*.4,0,y*.4,-R);L.addColorStop(0,"#2f7a33"),L.addColorStop(.5,"#4f9f45"),L.addColorStop(1,"#2a6a2e"),_.fillStyle=L,_.beginPath(),_.moveTo(0,0),_.bezierCurveTo(-y*.5,-R*.18,-y*.5,-R*.78,-y*.16,-R*.9),_.bezierCurveTo(-y*.05,-R*.94,0,-R*.86,0,-R*.82),_.bezierCurveTo(0,-R*.86,y*.05,-R*.94,y*.16,-R*.9),_.bezierCurveTo(y*.5,-R*.78,y*.5,-R*.18,0,0),_.fill(),_.strokeStyle="rgba(220,245,190,.35)",_.lineWidth=2,_.beginPath(),_.moveTo(0,0),_.lineTo(0,-R*.8),_.stroke(),_.strokeStyle="rgba(230,250,200,.18)",_.lineWidth=1;for(let D=1;D<6;D++){let k=-R*.14*D;_.beginPath(),_.moveTo(0,k),_.quadraticCurveTo(-y*.14,k-8,-y*.3,k-14),_.moveTo(0,k),_.quadraticCurveTo(y*.14,k-8,y*.3,k-14),_.stroke()}}),ee=_=>Be(128,512,(y,R,L)=>{let D=fn(_?41:42);y.strokeStyle=_?"#3c5a2c":"#5d8a3a",y.lineWidth=3,y.beginPath(),y.moveTo(R/2,L),y.lineTo(R/2,6),y.stroke();for(let k=0;k<34;k++){let V=k/34,$=L-18-V*(L-30),le=R*.47*Math.sin(ve*(.15+V*.8))*(1-V*.35);for(let _e of[-1,1]){let Ee=_?["#2f5a2a","#3e6e31","#274d24"]:["#4f8f3c","#6aa84a","#3f7a33"];y.fillStyle=Ee[(k+(_e>0?1:0))%3];let Xe=R/2+_e*le,Dt=$-le*.55-D()*4;y.beginPath(),y.moveTo(R/2,$),y.quadraticCurveTo(R/2+_e*le*.5,$-le*.1-4,Xe,Dt),y.quadraticCurveTo(R/2+_e*le*.45,$-le*.28+3,R/2,$-7),y.fill()}}}),be=(_,y={})=>new pt({map:_,roughness:.62,side:nn,alphaTest:.5,...y}),ae=5.45,we=10.6,Le=de+34,he=v.clone();he.wrapS=he.wrapT=kn;let ue=ae+50,Fe=40;he.repeat.set(Fe/9,ue/.52),he.needsUpdate=!0;let O=new Nt(ue,Fe);{let _=O.attributes.uv;for(let y=0;y<_.count;y++)_.setXY(y,_.getY(y),_.getX(y))}let fe=new ot(O,new pt({map:he,color:"#c49d78",roughness:.46}));fe.rotation.x=-ve/2,fe.position.set((ae-50)/2,0,de+Fe/2),fe.receiveShadow=!0,rt.add(fe);let se=new pt({color:"#efe2d1",map:sn([7,5]),roughness:.95}),ze=oe(new Nt(ae+50,40),se,rt,(ae-50)/2,20,de,!1);oe(new Ei(ae+50,.34,.06),new pt({color:"#f4ede3",roughness:.7}),rt,(ae-50)/2,.17,de+.03,!1);let Ae=new pt({color:"#141518",roughness:.34,metalness:.55}),Me=(_,y,R,L,D,k,V=rt)=>oe(new Ei(_,y,R),Ae,V,L,D,k);for(let _=de+.07;_<Le;_+=3.35)Me(.13,we,.13,ae,we/2,_);Me(.16,.16,Le-de,ae,we,(de+Le)/2),Me(.18,.1,Le-de,ae,.05,(de+Le)/2);let $e=Be(256,256,(_,y,R)=>{_.translate(y/2,R/2),_.rotate(-.5),_.translate(-y/2,-R/2),[[.2,.12,.1],[.42,.04,.07],[.7,.16,.06]].forEach(([L,D,k])=>{let V=L*y,$=_.createLinearGradient(V-D*y,0,V+D*y,0);$.addColorStop(0,"rgba(255,255,255,0)"),$.addColorStop(.5,`rgba(255,255,255,${k})`),$.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=$,_.fillRect(-y,-R,y*3,R*3)})});$e.wrapS=$e.wrapT=kn,$e.repeat.set(6,1);let yt=oe(new Nt(Le-de,we),mt($e,"#ffffff",.22),rt,ae-.01,we/2,(de+Le)/2,!1);yt.rotation.y=-ve/2,yt.renderOrder=5;let Re=oe(new Nt(Le-de,30),se,rt,ae,we+15.08,(de+Le)/2,!1);Re.rotation.y=-ve/2,oe(new Nt(7,90),new pt({color:"#d9d2c7",roughness:.85}),rt,ae+3.5,-.03,0,!1).rotation.x=-ve/2;let nt=ae+6.2;oe(new Nt(90,3.3),mt($e,"#e8f4ff",.14),rt,nt,1.65,0,!1).rotation.y=-ve/2;let it=oe(new Gn(.045,.045,90,8),Ae,rt,nt,3.3,0);it.rotation.x=ve/2;for(let _=-30;_<40;_+=3.6)Me(.07,3.3,.07,nt,1.65,_);let ke=new U(-4.5,0,20),Ft=new U(.6,0,-.8),An=(_,y,R,L,D,k,V)=>{let $=new ot(new Nt(y,R),new wn({map:_,toneMapped:!1,transparent:!0,depthWrite:!1}));return $.position.copy(ke).addScaledVector(Ft,L),$.position.y=D,$.lookAt(ke.x,D,ke.z),$.renderOrder=k,V.add($),$},Wn=(_,y,R,L,D,k,V,$=1)=>{let le=fn(k),_e=[le()*9,le()*9,le()*9,le()*9];_.fillStyle=V,_.beginPath(),_.moveTo(0,R);for(let Ee=0;Ee<=y;Ee+=4){let Xe=Ee/y*$,Dt=L-D*(.55*Math.sin(Xe*5.1+_e[0])+.3*Math.sin(Xe*11.7+_e[1])+.15*Math.sin(Xe*27+_e[2])+.08*Math.sin(Xe*61+_e[3]));_.lineTo(Ee,Dt)}_.lineTo(y,R),_.closePath(),_.fill()},Ki=(_,y,R,L,D,k,V,$=1)=>{let le=fn(V),_e=Math.max(10,k*4);for(let Ee=0;Ee<D.length;Ee++){_.fillStyle=D[Ee];let Xe=L*(1-Ee*.14),Dt=Ee*L*.1*$;for(let Qt=0;Qt<_e;Qt++){let Pn=le()*ve*2,Si=Math.sqrt(le())*Xe,bi=L*(.1+le()*.16)*(1-Ee*.1),Gi=y+Math.cos(Pn)*Si+Dt*.6,Hi=R+Math.sin(Pn)*Si*.78-Dt;_.beginPath(),_.arc(Gi,Hi,bi,0,ve*2),_.fill()}}},Ts=(_,y,R,L,D)=>{let k=fn(D);for(let V=0;V<y*R/90;V++)_.fillStyle=k()<.5?`rgba(255,255,255,${(k()*L).toFixed(3)})`:`rgba(0,0,0,${(k()*L).toFixed(3)})`,_.fillRect(k()*y,k()*R,1+k()*2,1+k()*2)},Zr=Be(2048,1024,(_,y,R)=>{let L=_.createLinearGradient(0,0,0,R*.66);L.addColorStop(0,"#86b2df"),L.addColorStop(.45,"#b7d1ec"),L.addColorStop(.82,"#efe3d4"),L.addColorStop(1,"#fbe1bd"),_.fillStyle=L,_.fillRect(0,0,y,R);let D=y*.82,k=R*.5,V=_.createRadialGradient(D,k,0,D,k,R*.6);V.addColorStop(0,"rgba(255,248,226,1)"),V.addColorStop(.1,"rgba(255,228,176,.6)"),V.addColorStop(.45,"rgba(255,214,160,.16)"),V.addColorStop(1,"rgba(255,214,160,0)"),_.fillStyle=V,_.fillRect(0,0,y,R),_.fillStyle="#fffbf2",_.beginPath(),_.arc(D,k,R*.045,0,ve*2),_.fill();let $=fn(14);for(let le=0;le<14;le++){let _e=$()*y,Ee=R*(.08+$()*.3),Xe=120+$()*260;_.save(),_.translate(_e,Ee),_.scale(1,.16);let Dt=_.createRadialGradient(0,0,0,0,0,Xe);Dt.addColorStop(0,"rgba(255,255,255,.45)"),Dt.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=Dt,_.beginPath(),_.arc(0,0,Xe,0,ve*2),_.fill(),_.restore()}[[.55,.1,3,"#c4cbdc"],[.585,.085,5,"#a9b7cb"],[.625,.07,7,"#8fa6ad"],[.67,.055,9,"#7c9c86"]].forEach(([le,_e,Ee,Xe],Dt)=>{Wn(_,y,R,R*le,R*_e,Ee,Xe,1+Dt*.3);let Qt=_.createLinearGradient(0,R*(le-.01),0,R*(le+.06));Qt.addColorStop(0,"rgba(250,240,228,0)"),Qt.addColorStop(1,"rgba(250,240,228,.5)"),_.fillStyle=Qt,_.fillRect(0,R*(le-.01),y,R*.07)}),_.fillStyle="#7c9c86",_.fillRect(0,R*.72,y,R)}),ls=Be(2048,512,(_,y,R)=>{let L=(V,$,le,_e,Ee,Xe)=>{let Dt=_.createLinearGradient(0,V-$,0,R);Dt.addColorStop(0,_e),Dt.addColorStop(1,Ee),Wn(_,y,R,V,$,le,Dt,Xe)};L(R*.3,R*.12,21,"#a9c6a0","#8fb488",1.3),L(R*.46,R*.11,22,"#93bd78","#77a560",1.7),L(R*.62,R*.1,23,"#7cad5f","#5e9148",2.2),_.globalCompositeOperation="source-atop",_.strokeStyle="rgba(45,85,35,.22)",_.lineWidth=2.5;for(let V=0;V<22;V++){let $=R*(.66+V*.015);_.beginPath();for(let le=0;le<=y;le+=14)_.lineTo(le,$+Math.sin(le*.0035+V*.35)*12);_.stroke()}_.globalCompositeOperation="source-over";let D=fn(24);for(let V=0;V<60;V++){let $=D()*y,le=R*(.3+D()*.5);Ki(_,$,le,10+D()*18,["#2f5a2a","#3f7034","#5a8d45","#7eae5e"],3,100+V)}let k=_.createLinearGradient(0,R*.22,0,R*.55);k.addColorStop(0,"rgba(240,236,226,.45)"),k.addColorStop(1,"rgba(240,236,226,0)"),_.globalCompositeOperation="source-atop",_.fillStyle=k,_.fillRect(0,0,y,R),_.globalCompositeOperation="source-over",Ts(_,y,R,.05,25)}),cs=Be(1024,512,(_,y,R)=>{let L=fn(31);for(let D=0;D<9;D++){let k=y*(D/8)+(L()-.5)*60,V=R*(.46+L()*.22);Ki(_,k,V,60+L()*50,["#1f4220","#2c5a2a","#3f7535","#5b9346","#86bb63"],10,200+D)}_.fillStyle="#244a23",_.fillRect(0,R*.84,y,R),_.globalCompositeOperation="source-atop",Ts(_,y,R,.07,32),_.globalCompositeOperation="source-over"}),ai=[An(Zr,220,88,95,16,1,rt),An(ls,120,30,50,-.5,2,rt),An(cs,56,20,30,1.2,3,rt)],xi=new pt({color:"#ffffff",roughness:.95,transparent:!0,opacity:.74,side:nn,depthWrite:!1,emissive:new Ge("#fff1de"),emissiveIntensity:.42}),Pi=Be(256,256,(_,y,R)=>{_.fillStyle="#fff",_.fillRect(0,0,y,R);let L=fn(8);for(let D=0;D<2600;D++)_.fillStyle=`rgba(0,0,0,${(L()*.07).toFixed(3)})`,_.fillRect(L()*y,L()*R,1+L()*3,1);for(let D=0;D<y;D+=3)_.fillStyle=`rgba(0,0,0,${(L()*.04).toFixed(3)})`,_.fillRect(D,0,1,R)});Pi.wrapS=Pi.wrapT=kn,Pi.repeat.set(3,6);let Qs=new pt({color:"#d9c8ae",map:Pi,roughness:1,side:nn}),On=[],yi=(_,y,R,L,D,k,V,$=rt,le="z",_e=we-.2)=>{let Ee=new Nt(y,_e,Math.round(y*12),14),Xe=new ot(Ee,_);return le==="z"?(Xe.rotation.y=-ve/2,Xe.position.set(R,_e/2,L+y/2)):Xe.position.set(R+y/2,_e/2,L),Xe.renderOrder=_.transparent?6:0,Xe.castShadow=!_.transparent,Xe.receiveShadow=!0,$.add(Xe),On.push({geo:Ee,base:Ee.attributes.position.array.slice(),ph:D,pleats:k,depth:V,w:y,h:_e}),Xe};yi(xi,2.2,ae-.3,de+.2,0,10,.12),yi(Qs,1.05,ae-.46,de+.14,1.7,6,.16),oe(new Gn(.03,.03,9,8),Ae,rt,ae-.4,we-.2,de+4.5).rotation.x=ve/2;let As=Be(512,128,(_,y,R)=>{_.filter="blur(6px)",_.fillStyle="#fff";for(let L=0;L<4;L++)_.fillRect(14+L*y/4,14,y/4-30,R-28)}),zi=new Nt(1,1);[[ae,de+3.6],[ae,de+17],[ae-9.5,de+20.5],[ae-9.5,de+7.1]].forEach(([_,y],R)=>zi.attributes.position.setXYZ([2,3,1,0][R],_,.07,y)),zi.computeVertexNormals();let hs=new ot(zi,Object.assign(mt(As,"#ffdcae",.2),{side:nn}));hs.renderOrder=2,hs.frustumCulled=!1,rt.add(hs);let us=(_,y,R)=>new Fi({uniforms:{uTime:{value:0},uPx:{value:s.getPixelRatio()},uCol:{value:new Ge(...y)},uA:{value:R}},vertexShader:`attribute float phase; uniform float uTime, uPx; varying float vA;
      void main(){ vec3 p = position;
        ${_==="dust"?"p += vec3(sin(uTime*.21 + phase)*.22, sin(uTime*.13 + phase*1.7)*.3, cos(uTime*.17 + phase*.9)*.22);":""}
        vA = .4 + .6 * (.5 + .5 * sin(uTime * (.9 + fract(phase) * 1.8) + phase * 3.1));
        vec4 mv = modelViewMatrix * vec4(p, 1.);
        gl_PointSize = uPx * ${_==="dust"?"(1.2 + fract(phase * 7.) * 1.8) * (44. / -mv.z)":"(1.1 + fract(phase * 3.) * 1.9)"};
        gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 uCol; uniform float uA; varying float vA; void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .04, d) * vA * uA; gl_FragColor = vec4(uCol * a, a); }",transparent:!0,depthWrite:!1,blending:rs}),ds=(_,y,R,L,D)=>{let k=new Float32Array(_*3),V=new Float32Array(_),$=fn(y);for(let Ee=0;Ee<_;Ee++)k.set(R($),Ee*3),V[Ee]=$()*50;let le=new tn;le.setAttribute("position",new Ct(k,3)),le.setAttribute("phase",new Ct(V,1));let _e=new mr(le,L);return _e.frustumCulled=!1,_e.renderOrder=7,D.add(_e),_e},Es=us("dust",[1,.93,.8],.32);ds(n?30:60,31,_=>[ae-.5-_()*7,.4+_()*7.5,de+2+_()*12],Es,rt);let Wt={A:4.6,hs:4.55,ry:3.4},vi=Wt.hs+Wt.ry,Mi=(_,y,R,L=72)=>{let D=[new ge(-_,0),new ge(-_,y)];for(let k=1;k<L;k++){let V=ve-k/L*ve;D.push(new ge(Math.cos(V)*_,y+Math.sin(V)*R))}return D.push(new ge(_,y),new ge(_,0)),D},E=new kt;Je.add(E);let z=Be(512,512,(_,y,R)=>{let L=y/(Wt.A*2),D=R/vi,k=le=>[(le.x+Wt.A)*L,R-le.y*D],V=()=>{_.beginPath(),Mi(Wt.A,Wt.hs,Wt.ry).forEach((le,_e)=>{let[Ee,Xe]=k(le);_e?_.lineTo(Ee,Xe):_.moveTo(Ee,Xe)})};_.fillStyle="#000",_.fillRect(0,0,y,R),_.globalCompositeOperation="lighter";for(let le=0;le<26;le++){let _e=le/25;V(),_.lineWidth=6+_e*150,_.strokeStyle=`rgba(255,255,255,${(.09*(1-_e)**1.6+.012).toFixed(3)})`,_.stroke()}_.globalCompositeOperation="multiply";let $=_.createLinearGradient(0,R,0,0);$.addColorStop(0,"#2a2a2a"),$.addColorStop(.35,"#b0b0b0"),$.addColorStop(1,"#ffffff"),_.fillStyle=$,_.fillRect(0,0,y,R)}),ne=new ns(Mi(Wt.A,Wt.hs,Wt.ry)),j=new Va(ne,24);{let _=j.attributes.position,y=j.attributes.uv;for(let R=0;R<_.count;R++)y.setXY(R,(_.getX(R)+Wt.A)/(Wt.A*2),_.getY(R)/vi)}let Q=new pt({color:"#f5eadb",map:sn([2,2]),roughness:.95,emissive:new Ge("#ffb46e"),emissiveMap:z,emissiveIntensity:.95});oe(j,Q,E,0,0,de+.004,!1);let Ce=new ns([...Mi(Wt.A+.17,Wt.hs,Wt.ry+.17),...Mi(Wt.A,Wt.hs,Wt.ry).reverse()]),Ke=new pt({color:"#f2e6d6",roughness:.9});oe(new gr(Ce,{depth:.2,bevelEnabled:!0,bevelThickness:.02,bevelSize:.02,bevelSegments:2,curveSegments:6}),Ke,E,0,0,de,!0);class Se extends si{constructor(y,R){super(),this.pts=R?[...y,y[0]]:y,this.acc=[0];for(let L=1;L<this.pts.length;L++)this.acc.push(this.acc[L-1]+this.pts[L].distanceTo(this.pts[L-1]))}getPoint(y,R=new U){let L=this.acc[this.acc.length-1]*Kn(y),D=1;for(;D<this.acc.length-1&&this.acc[D]<L;)D++;let k=this.acc[D-1],V=this.acc[D];return R.lerpVectors(this.pts[D-1],this.pts[D],V>k?(L-k)/(V-k):0)}}let De=oe(new is(new Se(Mi(Wt.A-.035,Wt.hs,Wt.ry-.035).map(_=>new U(_.x,Math.max(.35,_.y),de+.17))),240,.028,6,!1),pe("#ffd9a6"),E,0,0,0,!1),Ve=Be(512,512,(_,y,R)=>{let D=(y-120)/(Wt.A*2),k=(R-60)/vi;_.beginPath(),Mi(Wt.A,Wt.hs,Wt.ry).forEach((V,$)=>{let le=60+(V.x+Wt.A)*D,_e=R-V.y*k;$?_.lineTo(le,_e):_.moveTo(le,_e)}),_.globalCompositeOperation="lighter";for(let V=0;V<14;V++){let $=V/13;_.lineWidth=4+$*90,_.strokeStyle=`rgba(255,255,255,${(.12*(1-$)**2).toFixed(3)})`,_.stroke()}}),ht=oe(new Nt(Wt.A*2*512/392,vi*512/452),mt(Ve,"#ffb46a",.55),E,0,vi*512/452/2,de+.012,!1);ht.renderOrder=1;let St=new kt;Je.add(St);let Qe=_=>Be(256,360,(y,R,L)=>{let D=fn(_),k=y.createLinearGradient(0,0,0,L);k.addColorStop(0,"#f3ede3"),k.addColorStop(1,"#e9e0d2"),y.fillStyle=k,y.fillRect(0,0,R,L),y.fillStyle="rgba(232,170,120,.55)",y.beginPath(),y.arc(R*(.3+D()*.4),L*(.26+D()*.1),R*.11,0,ve*2),y.fill(),[["#d9cbb6",.5],["#b8b3aa",.6],["#8f98a3",.7],["#6f7c8a",.82]].forEach(([V,$],le)=>Wn(y,R,L,L*$,L*(.1-le*.012),_*7+le,V,.45+D()*.3))}),Et=new pt({color:"#3a2a20",roughness:.5}),vn=new pt({color:"#f8f5ef",roughness:.9}),Yt=(_,y,R,L,D)=>{let k=new kt;k.position.set(R,L,de+.02),St.add(k);let V=.07,$=.075;[[_,V,0,y/2-V/2],[_,V,0,-y/2+V/2],[V,y-2*V,-_/2+V/2,0],[V,y-2*V,_/2-V/2,0]].forEach(([le,_e,Ee,Xe])=>oe(new Ei(le,_e,$),Et,k,Ee,Xe,$/2)),oe(new Nt(_-2*V,y-2*V),vn,k,0,0,.014,!1),oe(new Nt((_-2*V)*.7,(y-2*V)*.74),new pt({map:Qe(D),roughness:.8}),k,0,.02,.018,!1)};Yt(1.16,1.6,-1.5,5.36,3),Yt(1.32,1.96,0,5.54,7),Yt(1.16,1.6,1.5,5.36,11);let Gt=Be(512,512,(_,y,R)=>{let L=fn(21);_.fillStyle="#ffffff",_.fillRect(0,0,y,R);for(let D=0;D<16e3;D++)_.fillStyle=L()<.5?`rgba(255,255,255,${(L()*.3).toFixed(3)})`:`rgba(120,100,80,${(L()*.08).toFixed(3)})`,_.fillRect(L()*y,L()*R,1+L()*2.5,1+L())});Gt.wrapS=Gt.wrapT=kn,Gt.repeat.set(4,4);let pn=oe(Bi(1,.06,1,.025,{seg:[1,1,1]}).geometry,new pt({map:Gt,color:"#e8dece",roughness:1,normalMap:f,normalScale:new ge(.5,.5)}),x,.9,.03,1.6,!1);pn.receiveShadow=!0,oe(new Gn(.82,.82,.07,48),Ue,qt,0,2.05,0),[0,2.09,4.19].forEach(_=>{oe(new Gn(.04,.028,2.02,10),Ue,qt,Math.cos(_)*.48,1.01,Math.sin(_)*.48).rotation.set(Math.sin(_)*.1,0,-Math.cos(_)*.1)});let je=new xn({color:"#fbf7ef",emissive:new Ge("#ffcf98"),emissiveIntensity:.7,roughness:.3,clearcoat:.4,side:nn}),En=(_,y,R,L,D,k)=>{let V=new kt;return V.position.set(y,R,L),V.scale.setScalar(D),_.add(V),oe(Pe([[0,0],[.27,0],[.29,.03],[.25,.07],[.07,.1],[0,.1]]),Ye,V),oe(new Gn(.03,.034,.92,12),Ye,V,0,.55,0),oe(Pe(Array.from({length:14},($,le)=>{let _e=le/13*ve/2;return[.5*Math.cos(_e),.4*Math.sin(_e)]}),40),je,V,0,.99,0),oe(new Na(.47,32),pe("#ffe3b8"),V,0,.985,0,!1).rotation.x=ve/2,Tt(V,k,2.6,.36,0,1.02,0),Tt(V,"#fff0d8",.9,.5,0,.96,0),V};En(qt,.28,2.09,-.34,1,"#ffc98a");let zt=new Ks("#ffc78c",0,10,2);zt.position.set(.28,2.95,-.34),It.add(zt);let ki=oe(Pe([[0,0],[.22,0],[.26,.05],[.29,.42],[.31,.46],[.28,.47],[0,.42]]),gt,qt,-.36,2.09,.3),yn;{let _=[],y=fn(57);for(let R=0;R<8;R++){let L=-ve*.2+R/8*ve*1.25+y()*.3,D=.3+y()*.5,k=.15+y()*(R%3?.45:1.1),V=6+Math.floor(k*5);for(let $=0;$<V;$++){let le=$/(V-1),_e=.22+D*Math.min(1,le*1.6),Ee=-.36+Math.cos(L)*_e,Xe=.3+Math.sin(L)*_e,Dt=Math.hypot(Ee,Xe)<.78,Qt=.5+.12*Math.sin(le*ve)-k*le*le;Dt&&(Qt=Math.max(Qt,.04+.1*(1-le))),_.push({m:I(Ee,2.09+Qt,Xe,L+ve/2+(y()-.5)*1.2,-.5-y()*.9+le*.8,(y()-.5)*.8,.17+y()*.09),w:1,h:1})}}yn=new ot(at(_),be(w)),yn.castShadow=!0,qt.add(yn),Ne.push({o:yn,axis:"z",amp:.012,speed:.7,ph:0})}let Rs=[oe(Bi(1.9,1.42,1.5,.03,{seg:[2,2,2]}).geometry,T.oak,At,0,1.2,0),oe(Bi(1.74,.62,.05,.012,{seg:[2,2,1]}).geometry,T.oak,At,0,1.42,.76)];oe(new Ei(.42,.05,.05),Ye,At,0,1.46,.8),[[-.8,-.6],[.8,-.6],[-.8,.6],[.8,.6]].forEach(([_,y])=>oe(new Gn(.06,.035,.5,8),T.oak,At,_,.25,y)),oe(Bi(.96,.085,.7,.012,{seg:[1,1,1]}).geometry,new pt({color:"#ece7de",roughness:.8}),At,-.3,1.955,.16).rotation.y=-.06,oe(Bi(.84,.075,.62,.012,{seg:[1,1,1]}).geometry,new pt({color:"#c9ccce",roughness:.8}),At,-.28,2.035,.14).rotation.y=.1,oe(Pe([[0,0],[.15,0],[.17,.02],[.18,.2],[.16,.27],[.065,.31],[.055,.37],[.065,.385],[0,.385]],28),new xn({color:"#a8641f",roughness:.12,clearcoat:1,transparent:!0,opacity:.86}),At,.4,1.91,-.2);{let _=fn(66),y=[];for(let R=0;R<8;R++){let L=new Gn(.007,.007,1.15,4);L.translate(0,.575,0),L.applyMatrix4(I(.4,1.91+.36,-.2,_()*ve*2,(.1+_()*.22)*(_()<.5?-1:1),(.1+_()*.22)*(_()<.5?-1:1))),y.push(L)}oe(ct(y),Ue,At)}let Vt=8.35,Mn=.18,bt=.5,Rn=oe(new Nt(110,60),new pt({color:"#1f2026",roughness:.2,metalness:.12}),tt,0,0,de+30,!1);Rn.rotation.x=-ve/2;let Xn=new pt({color:"#2a2930",map:sn([6,4]),roughness:.92});oe(new Nt(bt+55,Vt),Xn,tt,(bt-55)/2,Vt/2,de,!1);for(let _=bt;_<50;_+=3.6)Me(.13,Vt,.13,_,Vt/2,de+.06,tt);Me(60,.14,.14,bt+30,Vt-.07,de+.06,tt),Me(60,.1,.16,bt+30,.05,de+.07,tt);let dn=oe(new Nt(60,Vt),mt($e,"#c8d2ff",.1),tt,bt+30,Vt/2,de+.02,!1);dn.renderOrder=5;let Kt=new kt;tt.add(Kt);let li=new pt({color:"#1b1a1f",roughness:.9});oe(new Nt(110,60),li,Kt,0,Vt,de+30,!1).rotation.x=ve/2;let H={x:1.8,z:2.6,rx:9.6,rz:6.6},ie=(_,y)=>Array.from({length:160},(R,L)=>{let D=L/160*ve*2;return new U(H.x+Math.cos(D)*H.rx*_,y,H.z+Math.sin(D)*H.rz*_)});oe(new is(new Se(ie(1,Vt-.06),!0),320,.035,6,!0),pe("#ffcf8a"),Kt,0,0,0,!1),oe(new is(new Se(ie(.93,Vt-.03),!0),320,.018,5,!0),pe("#b07a45"),Kt,0,0,0,!1);let xe=Be(512,512,(_,y,R)=>{_.translate(y/2,R/2),((D,k,V)=>{let $=_.createRadialGradient(0,0,D,0,0,k);$.addColorStop(0,"rgba(255,255,255,0)"),$.addColorStop(.75,`rgba(255,255,255,${V})`),$.addColorStop(.86,`rgba(255,255,255,${V*.5})`),$.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=$,_.fillRect(-y/2,-R/2,y,R)})(y*.05,y*.5,.9)}),Te=oe(new Nt(H.rx*2/.86*1,H.rz*2/.86),mt(xe,"#ffb46a",.55),Kt,H.x,Vt-.015,H.z,!1);Te.rotation.x=ve/2,Te.renderOrder=1;let Ze;{let _=[];for(let L=-5.26;L<-3.45;L+=.31){let D=new Ei(.2,Vt,.13);D.translate(L,Vt/2,de+.075),_.push(D)}let y=g.clone();y.wrapS=y.wrapT=kn,y.repeat.set(.3,3),y.needsUpdate=!0,Ze=oe(ct(_),new pt({color:"#7a5236",map:y,roughness:.55}),tt);let R=Be(64,256,(L,D,k)=>{let V=L.createLinearGradient(0,0,D,0);V.addColorStop(0,"rgba(255,255,255,0)"),V.addColorStop(.5,"rgba(255,255,255,1)"),V.addColorStop(1,"rgba(255,255,255,0)"),L.fillStyle=V,L.fillRect(0,0,D,k)});[-4.795,-3.865].forEach(L=>{oe(new Ei(.035,Vt-.3,.02),pe("#ffc98a"),tt,L,Vt/2,de+.03,!1);let D=oe(new Nt(1.5,Vt),mt(R,"#ffa955",.5),tt,L,Vt/2,de+.145,!1);D.renderOrder=2})}let dt=new ge(.35,1.4),vt=9.4,Jt=de+.04,Rt=(()=>{let _=Math.asin(Kn((Jt-dt.y)/vt,-1,1)),y=_,R=ve-_,L=[];for(let D=0;D<=120;D++)L.push(y+D/120*(R-y));return L})(),Zt=new ns;Rt.forEach((_,y)=>{let R=dt.x+Math.cos(_)*vt,L=dt.y+Math.sin(_)*vt;y?Zt.lineTo(R,L):Zt.moveTo(R,L)}),Zt.closePath();let Cn=new gr(Zt,{depth:Mn,bevelEnabled:!0,bevelThickness:.015,bevelSize:.03,bevelSegments:2,curveSegments:4});Cn.rotateX(ve/2),Cn.translate(0,Mn,0);let jt=oe(Cn,[new pt({color:"#3b3a3d",roughness:.62,metalness:0}),new pt({color:"#25262b",roughness:.5})],tt,0,0,0,!1);jt.receiveShadow=!0,oe(new is(new Se(Rt.map(_=>new U(dt.x+Math.cos(_)*(vt+.04),.035,Math.max(Jt+.02,dt.y+Math.sin(_)*(vt+.04))))),260,.028,5,!1),pe("#ffc27a"),tt,0,0,0,!1);{let _=[],y=[];Rt.forEach((V,$)=>{let le=Math.cos(V),_e=Math.sin(V);_.push(dt.x+le*(vt-.1),.012,Math.max(Jt,dt.y+_e*(vt-.1)),dt.x+le*(vt+1.7),.012,Math.max(Jt,dt.y+_e*(vt+1.7))),y.push($/120,0,$/120,1)});let R=[];for(let V=0;V<Rt.length-1;V++){let $=V*2;R.push($,$+1,$+2,$+1,$+3,$+2)}let L=new tn;L.setAttribute("position",new Ct(new Float32Array(_),3)),L.setAttribute("uv",new Ct(new Float32Array(y),2)),L.setIndex(R);let D=Be(4,64,(V,$,le)=>{let _e=V.createLinearGradient(0,le,0,0);_e.addColorStop(0,"rgba(255,255,255,1)"),_e.addColorStop(.25,"rgba(255,255,255,.45)"),_e.addColorStop(1,"rgba(255,255,255,0)"),V.fillStyle=_e,V.fillRect(0,0,$,le)}),k=new ot(L,mt(D,"#ff9e50",.5));k.renderOrder=2,k.frustumCulled=!1,tt.add(k)}let Pt=Be(64,256,(_,y,R)=>{let L=_.createLinearGradient(0,0,0,R);L.addColorStop(0,"rgba(255,255,255,0)"),L.addColorStop(1,"rgba(255,255,255,.9)"),_.fillStyle=L,_.fillRect(0,0,y,R)}),rn=oe(new Nt(52,7),mt(Pt,"#7c6aa6",.13),tt,bt+26,.006,de+3.5,!1);rn.rotation.x=-ve/2,rn.renderOrder=1;let un=Be(2048,1024,(_,y,R)=>{let L=_.createLinearGradient(0,0,0,R*.7);L.addColorStop(0,"#18204a"),L.addColorStop(.32,"#2f3168"),L.addColorStop(.55,"#5d4c86"),L.addColorStop(.74,"#b4728c"),L.addColorStop(.88,"#ea9a6e"),L.addColorStop(1,"#f5bd86"),_.fillStyle=L,_.fillRect(0,0,y,R);let D=fn(77);for(let k=0;k<160;k++){_.fillStyle=`rgba(240,240,255,${(.15+D()*.5).toFixed(2)})`;let V=D()<.9?1.2:2;_.fillRect(D()*y,D()*R*.3,V,V)}for(let k=0;k<10;k++){let V=D()*y,$=R*(.42+D()*.2),le=160+D()*320;_.save(),_.translate(V,$),_.scale(1,.06);let _e=_.createRadialGradient(0,0,0,0,0,le);_e.addColorStop(0,"rgba(255,170,170,.35)"),_e.addColorStop(1,"rgba(255,170,170,0)"),_.fillStyle=_e,_.beginPath(),_.arc(0,0,le,0,ve*2),_.fill(),_.restore()}[[.66,.1,41,"#5a4f80"],[.7,.085,43,"#43426c"],[.745,.07,45,"#2f3253"],[.79,.055,47,"#1f2338"]].forEach(([k,V,$,le],_e)=>{Wn(_,y,R,R*k,R*V,$,le,1.2+_e*.35);let Ee=_.createLinearGradient(0,R*(k-.005),0,R*(k+.05));Ee.addColorStop(0,"rgba(240,150,140,0)"),Ee.addColorStop(1,`rgba(240,150,140,${(.18-_e*.04).toFixed(2)})`),_.fillStyle=Ee,_.fillRect(0,R*(k-.005),y,R*.06)}),_.fillStyle="#1f2338",_.fillRect(0,R*.84,y,R)}),$n=Be(2048,512,(_,y,R)=>{Wn(_,y,R,R*.5,R*.14,51,"#182029",1.6);let L=fn(52);for(let D=0;D<70;D++){let k=L()*y,V=R*(.4+L()*.3);Ki(_,k,V,12+L()*26,["#0f161b","#151f26","#1f2a2f"],3,300+D)}_.fillStyle="#141b22",_.fillRect(0,R*.72,y,R)}),Jr=Be(1024,768,(_,y,R)=>{let L=fn(61);_.strokeStyle="#0d1311",_.lineCap="round",[[.36,1,.33,.62,16],[.35,.78,.25,.52,7],[.34,.74,.46,.5,6]].forEach(([D,k,V,$,le])=>{_.lineWidth=le,_.beginPath(),_.moveTo(y*D,R*k),_.quadraticCurveTo(y*(D+V)/2,R*(k+$)/2+14,y*V,R*$),_.stroke()}),Ki(_,y*.35,R*.42,140,["#0a110f","#0f1815","#16211d","#202c26","#3a3433"],26,400),Ki(_,y*.2,R*.62,70,["#0a110f","#111a17","#1a2621","#352f2f"],10,402);for(let D=0;D<14;D++)Ki(_,y*(D/13),R*(.86+L()*.05),36+L()*26,["#0a100e","#101815"],6,410+D);_.fillStyle="#0a100e",_.fillRect(0,R*.91,y,R)}),fs=(_,y,R,L,D,k,V)=>{let $=new ot(new Nt(y,R),new wn({map:_,toneMapped:!1,transparent:!0,depthWrite:!1}));return $.position.set(L,D,k),$.renderOrder=V,tt.add($),$},er=[fs(un,340,170,18,22,de-90,1),fs($n,190,48,14,-9,de-44,2),fs(Jr,34,25.5,10,4.6,de-13,3)],Yo=us("star",[1,.97,.9],.8);er.stars=ds(n?30:60,9,_=>[-40+_()*110,22+_()*30,de-85],Yo,tt);let Dh=new pt({color:"#4b4c57",roughness:.95,transparent:!0,opacity:.55,side:nn,depthWrite:!1,emissive:new Ge("#2a2440"),emissiveIntensity:.5});yi(Dh,2.6,10.4,de+.38,2.2,11,.11,tt,"x",Vt-.12);let ft={x:.25,z:2.05,h:3.55};oe(new Gn(.34,.36,.05,32),Ue,ut,ft.x,Mn+.025,ft.z),oe(new Gn(.028,.028,ft.h,10),Ue,ut,ft.x,Mn+ft.h/2,ft.z),oe(new is(new Se([[0,0],[.05,.19],[.24,.3],[.44,.24],[.58,.06]].map(([_,y])=>new U(ft.x+_,Mn+ft.h+y,ft.z))),24,.026,8,!1),Ue,ut);let Xt=En(ut,ft.x+.58,Mn+ft.h+.06-1.39*1.08,ft.z,1.08,"#ffb870");Xt.children[0].visible=Xt.children[1].visible=!1;let Ht=new Ks("#ffb36b",0,12,1.8);Ht.position.set(ft.x+.58,Mn+ft.h-.5,ft.z),It.add(Ht);let Mt=oe(Pe([[0,0],[.36,0],[.42,.62],[.45,.66],[.4,.68],[0,.6]]),new pt({color:"#2b2b30",roughness:.55}),ut,.95,Mn,-.9),mn;{let _=[],y=fn(88);for(let R=0;R<26;R++){let L=-2.6+R/25*4+(y()-.5)*.35,D=.35+y()*1,k=2.1+y()*2.1;_.push({m:I(.95+(y()-.5)*.2,Mn+.55+y()*.15,-.9+(y()-.5)*.2,L,-(ve/2-D),(y()-.5)*.5,1),w:.95+y()*.3,h:k,bend:-.35-y()*.65})}mn=new ot(at(_),be(ee(!0))),mn.castShadow=!0,ut.add(mn),Ne.push({o:mn,axis:"z",amp:.02,speed:.5,ph:1.3})}let $t=new Ys("#fff1e0",300,90,.6,.85,1.2);$t.castShadow=!0,$t.shadow.mapSize.set(n?1024:2048,n?1024:2048),$t.shadow.radius=6,$t.shadow.blurSamples=16,$t.shadow.bias=-4e-4,$t.shadow.normalBias=.025,$t.shadow.camera.near=4,$t.shadow.camera.far=80,r.add($t,$t.target);let qn={pos:[new U(-6.5,13.5,11),new U(ae+22,17,9)],at:[new U(0,2,-.4),new U(-.5,1.6,-.8)]},Li=new ys("#fff6ec",1);Li.position.set(-4,5,14),r.add(Li);let Qn=new ys("#9a90e0",0);Qn.position.set(5,9,-30),r.add(Qn);let ei=new Lo("#e9f0ff","#dcb98f",1);r.add(ei);let Mf=_=>{Yo.uniforms.uTime.value=_,Es.uniforms.uTime.value=_,On.forEach(y=>{let R=y.geo.attributes.position.array,L=y.base;for(let D=0;D<R.length;D+=3){let k=L[D],V=L[D+1],$=(y.h/2-V)/y.h,le=Math.sin((k/y.w+.5)*ve*y.pleats)*y.depth;R[D+2]=L[D+2]+le+(Math.sin(_*.9+y.ph+V*.35)*.1*$*$+Math.sin(_*1.6+k*2.1)*.025*$)*(t?0:1),R[D]=L[D]+Math.sin(_*.7+y.ph)*.05*$*$*(t?0:1)}y.geo.attributes.position.needsUpdate=!0,y.geo.computeVertexNormals()}),t||Ne.forEach(y=>{y.o.rotation[y.axis]=Math.sin(_*y.speed+y.ph)*y.amp})};Mf(0);let ul=(_,y)=>[new Ge(_),new Ge(y)],dl={key:ul("#ffe6c8","#fff3e2"),fill:ul("#8c9cff","#fff6ec"),sky:ul("#ffcf9a","#e9f0ff"),ground:ul("#141419","#dcb98f")},fl=(_,y,R)=>_.copy(y[0]).lerp(y[1],R),Uh=null;function Ko(){let _=Yi(0,1,J.day),y=1-_,R=1-.85*Sr(J.buildPose),L=J.day>=.5;L!==Uh&&(Uh=L,Je.visible=qt.visible=At.visible=pn.visible=L,tt.visible=ut.visible=!L,r.environment=L&&c?c:l,x.contact.position.y=L?.012:Mn+.006),$t.position.lerpVectors(qn.pos[0],qn.pos[1],_),$t.target.position.lerpVectors(qn.at[0],qn.at[1],_),fl($t.color,dl.key,_),$t.intensity=hn(260,520,_),$t.angle=hn(.5,.62,_),fl(Li.color,dl.fill,_),Li.intensity=hn(.32,1,_),Qn.intensity=y*.75,fl(ei.color,dl.sky,_),fl(ei.groundColor,dl.ground,_),ei.intensity=hn(.4,1.05,_),r.environmentIntensity=hn(.3,.85,_),s.toneMappingExposure=hn(1,1.02,_),zt.intensity=2.2*R,Ht.intensity=13*R,je.emissiveIntensity=hn(1.5,.7,_)*hn(.15,1,R),lt.forEach(D=>{D.material.opacity=D.userData.o*hn(1,.55,_)*R}),Q.emissiveIntensity=.95*hn(.4,1,R)}let pl=de+.02,Vg=new wi(new U(0,0,1),-pl),Cs=new Dn(Pg,1.6,2,260),Sf=new Uo,bf=new ge,wf=new U,Fh=new U,In={sizes:{},blocks:{},dirty:!1,last:""},ml={desk:{hero:{pose:{tx:-2.7,shift:0,az:-.09,pol:1.36,zoom:.93,dy:.45,open:0},zone:{x0:.045,y:.19,minY:.8}},cap1:{pose:{tx:-3.3,shift:0,az:-.2,pol:1.3,zoom:.86,dy:.35,open:.45},zone:{x0:.05,y:.3,minY:.8}},cap2:{pose:{tx:-2.4,shift:0,az:-.03,pol:1.25,zoom:.92,dy:.95,open:1},zone:{x0:.05,y:.26,minY:1.2}},cap3:{pose:{tx:-3.6,shift:0,az:.13,pol:1.32,zoom:.88,dy:.3,open:.3},zone:{x0:.05,y:.32,minY:.8}},show:{pose:{tx:0,shift:0,az:-.5,pol:1.27,zoom:1,dy:0,open:0}}},phone:{hero:{pose:{tx:0,shift:0,az:-.2,pol:1.29,zoom:.98,dy:1.3,open:0},zone:{y:.105,align:"center",minY:3.4}},cap1:{pose:{tx:0,shift:0,az:-.26,pol:1.25,zoom:.94,dy:.55,open:.45},zone:{y:.11,align:"center",minY:4.6}},cap2:{pose:{tx:0,shift:0,az:-.16,pol:1.22,zoom:.92,dy:.55,open:1},zone:{y:.11,align:"center",minY:5.4}},cap3:{pose:{tx:0,shift:0,az:-.08,pol:1.24,zoom:.94,dy:.55,open:.3},zone:{y:.11,align:"center",minY:4.6}},show:{pose:{tx:0,shift:0,az:-.5,pol:1.27,zoom:1,dy:0,open:0}}}},gl=[[0,"hero"],[.07,"hero"],[.17,"cap1"],[.3,"cap1"],[.4,"cap2"],[.53,"cap2"],[.63,"cap3"],[.74,"cap3"],[.82,"show"]],Wg={hero:[-1,-.5,.055,.1],cap1:[.14,.19,.3,.34],cap2:[.37,.42,.53,.57],cap3:[.6,.65,.74,.78]},Tf=(_,y)=>{let R=Wg[_];return R?Math.min(Kn((y-R[0])/(R[1]-R[0])),Kn((R[3]-y)/(R[3]-R[2]))):0},Af=["tx","shift","az","pol","zoom","dy"];function Ef(_){let y=J.phone?ml.phone:ml.desk,R=0;for(;R<gl.length-2&&_>gl[R+1][0];)R++;let[L,D]=gl[R],[k,V]=gl[R+1],$=Yi(L,k,_),le=y[D].pose,_e=y[V].pose,Ee={};for(let Xe in le)Ee[Xe]=hn(le[Xe],_e[Xe],$);return Ee}let Rf=()=>jn+q.coverTop*.5+(J.phone?.1:.75),Oh=(_,y)=>({az:_.az,pol:Kn(_.pol+y*.08,.7,1.52),d:J.dist*_.zoom*(1+y*(J.phone?-.08:-.05)),ty:hn(J.ty,Math.max(J.ty,Rf()),y)+_.dy,shift:_.shift,tx:_.tx??0});function Cf(_,y,R,L,D,k,V=0){let $=-k*2*Math.tan(_.fov*ve/360)*_.aspect*_.getFilmWidth();Math.abs(_.filmOffset-$)>1e-5&&(_.filmOffset=$,_.updateProjectionMatrix()),_.position.set(V+Math.sin(y)*Math.sin(R)*L,D+Math.cos(R)*L,Math.cos(y)*Math.sin(R)*L),_.lookAt(V,D,0),_.updateMatrixWorld()}let If=(_,y)=>(bf.set(_*2-1,1-y*2),Sf.setFromCamera(bf,Cs),Sf.ray.intersectPlane(Vg,wf)?wf.clone():null);function Pf(){In.dirty=!1;let _=i.clientWidth,y=i.clientHeight;if(!_||!y)return;let R=`${_}x${y}:${J.phone}:${J.dist.toFixed(3)}:${JSON.stringify(In.sizes)}`;if(R===In.last)return;In.last=R;let L=J.phone?ml.phone:ml.desk;Cs.fov=o.fov,Cs.aspect=_/y,Cs.near=o.near,Cs.far=o.far,Cs.filmGauge=o.filmGauge,Cs.filmOffset=0,Cs.updateProjectionMatrix();for(let D in In.sizes){let k=L[D],[V,$]=In.sizes[D];if(!k?.zone||!V||!$)continue;let le=k.zone,_e=Oh(k.pose,Sr(k.pose.open));Cf(Cs,_e.az,_e.pol,_e.d,_e.ty,_e.shift,_e.tx);let Ee=le.align==="center"?.5-V/_/2:le.x0,Xe=If(Ee,le.y),Dt=If(Ee+V/_,le.y);if(!Xe||!Dt)continue;let Qt=(Dt.x-Xe.x)/V;Xe.y-$*Qt<le.minY&&(Qt=Math.max(Qt*.55,(Xe.y-le.minY)/$));let Pn=V*Qt,Si=$*Qt,bi=le.align==="center"?(Xe.x+Dt.x)/2-Pn/2:Xe.x,Gi=Xe.y,Hi=In.blocks[D]||(In.blocks[D]={o:0,oT:0,corners:[],center:new U});Hi.corners=[[bi,Gi],[bi+Pn,Gi],[bi+Pn,Gi-Si],[bi,Gi-Si]].map(([Ji,na])=>new U(Ji,na,pl)),Hi.center.set(bi+Pn/2,Gi-Si/2,pl)}}let Zo=new Ys("#ffd9a8",0,30,.5,.9,1.4);r.add(Zo,Zo.target);let Jo=new U(-6,5,pl),Lf=new U,Nf=_=>(Fh.copy(_).project(o),[(Fh.x*.5+.5)*i.clientWidth,(.5-Fh.y*.5)*i.clientHeight]),_l=[new U,new U,new U],Bh="",Df="";function Xg(_){let y=Sr(J.buildPose),R={},L=!1,D=null,k=0,V="",$=0;for(let le in In.blocks){let _e=In.blocks[le];_e.oT===0&&($=Math.max($,_e.o))}for(let le in In.blocks){let _e=In.blocks[le],Ee=_e.oT>_e.o&&$>.08?_e.o:_e.oT;_e.o!==_e.oT&&(_e.o=t?_e.oT:Ii(_e.o,Ee,Ee<_e.o?10:6,_),Math.abs(_e.o-_e.oT)<.002&&(_e.o=_e.oT),L=!0);let Xe=_e.o*(1-y);Xe>k&&(k=Xe,D=_e);let Dt=Xe>.002&&_e.corners.length?_e.corners.map(Nf):null;R[le]={o:Xe,quad:Dt},V+=le+Xe.toFixed(3)+(Dt?Dt.flat().map(Qt=>Qt.toFixed(1)).join(","):"")}if(V!==Bh&&(Bh=V,e.onWords?.(R)),D&&Lf.copy(D.center),Jo.lerp(Lf,t?1:1-Math.exp(-4*_)),Zo.target.position.copy(Jo),Zo.position.set(Jo.x+1.6,Jo.y+6.2,Jo.z+7),Zo.intensity=k*(1-y)*hn(70,18,Yi(0,1,J.day)),e.onSpots){let le=jr(),_e=jn+q.h+q.crown*.5;_l[0].set(-.35,_e+.02,-.4),_l[1].set(le*.31,_e+.01,Tn*.2),_l[2].set(le*.16,jn+q.h*.45,Tn/2+.05);let Ee=(In.blocks.hero?.o??0)*(1-y)*(1-Yi(0,.06,q.open))*(q.swap<1?0:1),Xe=_l.map(Nf),Dt=Xe.flat().map(Qt=>Qt.toFixed(1)).join(",")+Ee.toFixed(3);Dt!==Df&&(Df=Dt,e.onSpots(Xe,Ee))}return L}let J={w:(e.width??60)/10,wTarget:(e.width??60)/10,allOpen:!1,az:-.5,pol:1.27,azUser:0,polUser:0,vAz:0,scrollIn:t?1:0,intro:t?1:0,lift:0,dist:20,ty:2.25,visible:!1,last:0,raf:0,touched:!1,time:0,phone:!1,story:null,st:{tx:-2.7,shift:0,az:-.09,pol:1.36,zoom:.93,dy:.45},storyW:1,idle:!1,lastDraw:0,day:e.theme==="morning"?1:0,dayT:e.theme==="morning"?1:0,build:1,buildT:3,buildPose:0,released:!0},jr=()=>J.w-.02,xl=!n,q={root:new kt,stack:new kt,cover:new kt,open:0,hi:null,dent:0,dentV:0,dentT:0,dentX:0,dentZ:0,feel:"Medium",crown:pf.Medium.crown,h:.7,hT:.7,top:0,look:null,lookName:null,label:"",groups:{},mix:{},key:null,swap:1,swapTo:null,coverTop:.7,builtW:0};x.add(q.root),q.root.add(q.stack,q.cover),q.root.position.y=jn;let Uf=_=>{let y=new ot(_.geometry,[T.top,T.side,T.under]);return y.castShadow=!0,y.receiveShadow=!0,y.customDepthMaterial=b,q.cover.add(y),y};q.body=new hl({cs:4,seg:xl?[40,12,92]:[26,8,56],groups:!0}),q.bodyMesh=Uf(q.body),q.topBox=new hl({cs:3,seg:xl?[36,4,84]:[24,3,52],groups:!0}),q.topMesh=Uf(q.topBox);let zh=()=>{let _=new ot(new is(new Nh(1,1,.1),8,.01,3,!0),T.piping);return _.castShadow=!0,q.cover.add(_),_};q.pipeT=zh(),q.pipeB=zh(),q.pipeX=zh();let Is=640,jo=260,yl=document.createElement("canvas");yl.width=Is,yl.height=jo;let Sn=yl.getContext("2d"),vl=new fi(yl);vl.colorSpace=ln,vl.anisotropy=$s,q.decal=new ot(new Nt(1,1),new pt({map:vl,transparent:!0,roughness:.75,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})),q.cover.add(q.decal);function qg(){let[_,y]=q.look.label;Sn.clearRect(0,0,Is,jo),Sn.fillStyle=_,zg(Sn,6,6,Is-12,jo-12,16),Sn.fill(),Sn.strokeStyle=y,Sn.globalAlpha=.5,Sn.lineWidth=3,Sn.setLineDash([12,8]),zg(Sn,22,22,Is-44,jo-44,9),Sn.stroke(),Sn.setLineDash([]),Sn.globalAlpha=1,Sn.fillStyle=y,Sn.textAlign="center",Sn.textBaseline="middle",Sn.font='600 30px "Hanken Grotesk", system-ui, sans-serif';let R="EASY COMFORT",L=7,D=[...R].reduce((le,_e)=>le+Sn.measureText(_e).width+L,-L),k=Is/2-D/2;Sn.textAlign="left";for(let le of R)Sn.fillText(le,k,80),k+=Sn.measureText(le).width+L;Sn.textAlign="center";let V=92;Sn.font=`400 ${V}px "Young Serif", Georgia, serif`;let $=Sn.measureText(q.label).width;$>Is-96&&(V*=(Is-96)/$,Sn.font=`400 ${V}px "Young Serif", Georgia, serif`),Sn.fillText(q.label,Is/2,166),vl.needsUpdate=!0}q.pillows=[-1,1].map(_=>{let y=new ot(FS(2.5,1.66,.62,-.25,_>0?91:37,xl?44:28),T.pillow);return y.castShadow=!0,y.receiveShadow=!0,y.position.set(_*1.36,0,-Tn/2+1.06),y.rotation.set(-.07,_*.05,0),q.cover.add(y),y});let Ff=()=>Math.min(ES,(q.h-q.top)*.26);function Ml(){let _=jr(),y=q.top,R=q.h,L=R-y,D=Ff(),k=Math.min(.045,L*.07);if(q.body.fill(_,L,Tn,D,{crown:y?0:q.crown,bulge:k},[.92,.62,1]),q.bodyMesh.position.y=L/2,q.topMesh.visible=y>.001,y>.001){let $=Math.min(.09,y*.45);q.topBox.fill(_-.1,y+.03,Tn-.1,$,{crown:q.crown,bulge:.015},[.92,.62,1]),q.topMesh.position.y=L+y/2-.015,q.pipeX.position.y=R-$*.3}q.pipeT.position.y=L-D*.3,q.pipeB.position.y=D*.3,q.pipeX.visible=!!q.look?.topper,q.look?.topper==="euro"&&(q.pipeX.position.y=L-Math.min(.22,L*.24));let V=Math.min(.27,L*.5);q.decal.scale.set(V*Is/jo,V,1),q.decal.position.set(-_*.26,L*.5,Tn/2+k*Math.cos(0)*.9+.025),q.pillows.forEach($=>{$.userData.y=R+.26+q.crown*.7,$.position.y=$.userData.y}),cl.uTopY.value=jn+R,cl.uRange.value=Math.min(.75,R*.75),a.constant=-(jn+R)}function kh(){let _=jr(),y=Ff(),R=y*.3,L=(D,k,V,$)=>new is(new Nh(D,k,V),xl?260:140,$,7,!0);if([q.pipeT,q.pipeB].forEach(D=>{D.geometry.dispose(),D.geometry=L(_-R*2,Tn-R*2,Math.max(.05,y*.8),.034),D.scale.x=1}),q.pipeX.geometry.dispose(),q.look?.topper==="pillow"){let D=Math.min(.09,q.top*.45),k=D*.3;q.pipeX.geometry=L(_-.1-k*2,Tn-.1-k*2,Math.max(.05,D*.8),.03)}else q.pipeX.geometry=L(_+.05,Tn+.05,Math.max(.05,y),.03);q.pipeX.scale.x=1,q.builtW=_}let Of=_=>_.userData.slabs.forEach(y=>{y.scale.x=(jr()-.06)/3});function Yg(_,y){let R=_.inches/10,L=Math.min(.035,R*.3),D;if(_.zones){D=new kt;let k=[.34,.32,.34],V=Tn-.08,$=-V/2;k.forEach((le,_e)=>{let Ee=new ot(Bi(3,R,V*le-.06,L,{seg:[10,2,6]}).geometry,_e===1?T.zoneFirm:T.zoneSoft);Ee.castShadow=!0,Ee.receiveShadow=!0,Ee.position.z=$+V*le/2,$+=V*le,D.add(Ee)}),y.add(D)}else D=new ot(Bi(3,R,Tn-.08,L,{seg:[10,2,16],shape:{sag:.008}}).geometry,T[_.mat]??T.foam25),D.castShadow=!0,D.receiveShadow=!0,y.add(D);return D.userData={h:R,hi:0,hiT:0},D}function Bf(_){if(q.groups[_.key])return q.groups[_.key];let y=new kt;return y.visible=!1,q.stack.add(y),y.userData.slabs=[..._.layers].reverse().map(R=>Yg(R,y)),y.userData.sum=y.userData.slabs.reduce((R,L)=>R+L.userData.h,0),y.userData.openH=0,Of(y),q.groups[_.key]=y,q.mix[_.key]=0,y}let $o={},Qo=new ts(new Uint8Array([255,255,255,255]),1,1,_i);Qo.needsUpdate=!0;let $r={top:p,side:p,ns:.32,rTop:Qo,rSide:Qo},zf=_=>{let y=ll[_]??ll.aura;return $o[_]||($o[_]={top:xf(h,y.top,y.rep[0]),side:xf(h/2,y.side??y.top,y.rep[1])}),$o[_]};function Gh(_){let y=ll[_]??ll.aura;q.look=y,zf(_),T.top.map=$o[_].top,T.side.map=$o[_].side,T.top.normalMap=y.quilt?u:$r.top,T.side.normalMap=y.quilt?d:$r.side;let R=y.quilt?.62:$r.ns;T.top.normalScale.set(R,R),T.side.normalScale.set(R,R),T.top.roughnessMap=y.quilt?Qo:$r.rTop,T.side.roughnessMap=y.quilt?Qo:$r.rSide,T.top.sheen=T.side.sheen=y.dark?.16:.7,T.top.sheenColor.set(y.dark?"#a9b8e6":"#fff6ec"),T.side.sheenColor.copy(T.top.sheenColor),T.top.roughness=T.side.roughness=y.dark?.86:.92,T.piping.color.set(y.piping),T.under.color.set(y.under),q.top=y.topper==="pillow"?.2:0,qg(),Ml(),kh()}function Hh(){let _=J.w,y=jr();K.scale.x=X.scale.x=_+.44,ye[0].position.x=-(_/2+.12),ye[1].position.x=_/2+.12,ce.forEach(R=>{R.position.x=R.userData.sx*(_/2+.1)}),Oe.forEach(R=>{R.scale.x=_+.1}),et.scale.x=_+.78,x.contact.scale.x=(_+1.2)*1.55,It.position.set(-(_/2+1.55),0,-Tn/2+.55),G.position.set(_/2+1.25,0,-Tn/2+.35),pn.scale.set(_+7.6,1,Tn+5.6),E.scale.x=(_+3.2)/9.2,rt.position.x=(_-6)/2,Ml(),[q.pipeT,q.pipeB,q.pipeX].forEach(R=>{R.scale.x=y/(q.builtW||y)}),Object.values(q.groups).forEach(Of)}let Kg=()=>q.swap<1?Math.sin(ve*q.swap)*.55:0,Zg=.62,kf=()=>{let _=q.groups[q.key],y=_?_.userData.slabs.length:1,R=Math.min(.28,1.4/Math.max(1,y)),L=.3+y*R+.1,D=L+.66;return{st:R,cover:L,pillows:D,end:D+.15+.62}},tr=null,Vh=(_,y)=>_<=0?y:_<.72?y*(1-(_/.72)**2):-.03*Math.sin(ve*(_-.72)/.28);function Sl(){let _=q.open,y=J.build<1&&!!tr,R=J.build*J.buildT;q.stack.visible=_>.002||y,Object.entries(q.groups).forEach(([k,V])=>{let $=q.mix[k];V.visible=q.stack.visible&&$>.002;let le=V.userData.slabs,_e=le.length,Ee=Math.max(.05,q.h-.07)/V.userData.sum,Xe=Math.min(.05,.26/Math.max(1,_e-1)),Dt=.035,Qt=0;le.forEach((Pn,Si)=>{let bi=Pn.userData.h,Gi=(_e-1-Si)*Xe,Hi=Sr(Kn((_-Gi)/(1-Gi*.9)));if(Pn.position.y=hn(Dt+bi*Ee/2,Qt+bi*ff/2,Hi),Pn.scale.y=hn(Ee,ff,Hi),Dt+=bi*Ee,Qt+=bi*ff+Ih,y&&k===q.key){let Qf=(R-(.3+Si*tr.st))/Zg;Pn.visible=Qf>0,Pn.position.y+=Vh(Qf,2.6)}else Pn.visible=!0;if(!V.visible)return;let Ji=k===q.key?1:-1,na=Ig(Kn($*1.5-(_e-1-Si)*.1));Pn.position.x=Ji*(1-na)*8;let $f=Ii(Pn.userData.hi,Pn.userData.hiT,14,.016);Pn.userData.hi=$f,Pn.position.z=$f*.5}),V.userData.openH=Qt-Ih});let L=Sr(Kn(_*1.25)),D=y?(R-tr.cover)/.72:1;q.cover.visible=D>0,q.cover.position.y=hn(0,q.coverTop,L)+Kg()+(D<1?Vh(D,3.2):0),q.pillows.forEach((k,V)=>{let $=y?(R-tr.pillows-V*.15)/.6:1;k.visible=$>0,k.position.y=k.userData.y+($<1?Vh($,1.8):0)}),q.cover.rotation.x=q.swap<1?-Math.sin(ve*q.swap)*.035:0}function bl(){let _=i.clientWidth||1,y=i.clientHeight||1;s.setSize(_,y,!1),o.aspect=_/y,o.updateProjectionMatrix();let R=Math.tan(o.fov*ve/360),L=_>860,D=L&&_<1240,k=(L?D?23.5:19.5:11.5)/(2*R*o.aspect),V=(L?11.6:7.6)/(2*R);J.dist=Math.max(k,V),J.phone=!L,J.ty=L?2.85:1.75,In.dirty=!0,Bn()}let Gf={desk:{tx:0,shift:0,az:-.6,pol:1.15,zoom:.84,dy:.15},phone:{tx:0,shift:0,az:-.55,pol:1.17,zoom:.82,dy:.35}},br={};function Wh(){let _=t||J.touched?0:Math.sin(J.time*.35)*.07,y={az:J.az*(1-J.lift*.55),pol:J.pol+J.lift*.15,d:J.dist*(1+J.lift*(J.phone?-.08:-.05)),ty:hn(J.ty,Math.max(J.ty,Rf()),J.lift),shift:0,tx:0},R=Oh(J.st,J.lift),L=Oh(J.phone?Gf.phone:Gf.desk,0),D=J.storyW,k=Sr(J.buildPose);for(let le of["az","pol","d","ty","shift","tx"])br[le]=hn(hn(y[le],R[le],D),L[le],k);let V=br.az+J.azUser+_+(1-J.scrollIn)*.22,$=Kn(br.pol+J.polUser+(1-J.scrollIn)*.07,.7,1.52);Cf(o,V,$,br.d*(1+(1-J.scrollIn)*.1),br.ty,br.shift,br.tx)}let Hf=new Uo,Vf=new ge,ea=new U;function Wf(_){let y=i.getBoundingClientRect();return Vf.set((_.clientX-y.left)/y.width*2-1,-((_.clientY-y.top)/y.height)*2+1),Hf.setFromCamera(Vf,o),!Hf.ray.intersectPlane(a,ea)||Math.abs(ea.x)>jr()/2||Math.abs(ea.z)>Tn/2||q.open>.05||q.swap<1?null:{x:ea.x,z:ea.z}}let ti=null,ta=!1,Xf=_=>Kn(_,-1-J.az,(J.day>=.5?.16:.42)-J.az),qf=()=>{ta&&(q.dentT=0,ta=!1)},Yf=_=>{q.dentX=_.x,q.dentZ=_.z};i.addEventListener("pointerdown",_=>{if(J.story!=null||J.buildPose>0)return;J.touched=!0,ti={x:_.clientX,y:_.clientY,moved:!1,type:_.pointerType};let y=Wf(_);y&&(ta=!0,Yf(y),q.dentT=1,q.dentV-=.4,Bn()),i.setPointerCapture(_.pointerId)}),i.addEventListener("pointermove",_=>{if(ti){let R=_.clientX-ti.x,L=_.clientY-ti.y;!ti.moved&&Math.hypot(R,L)>6&&(ti.moved=!0,qf(),i.classList.add("is-dragging")),ti.moved&&(J.vAz=-R*.0045*60,J.azUser=Xf(J.azUser-R*.0045),ti.type==="mouse"&&(J.polUser=Kn(J.polUser-L*.004,-.5,.3)),ti.x=_.clientX,ti.y=_.clientY,Bn());return}if(_.pointerType!=="mouse"||J.story!=null||J.buildPose>0)return;let y=Wf(_);y?(Yf(y),q.dentT!==1&&(q.dentT=.4),Bn()):q.dentT===.4&&(q.dentT=0,Bn())});let Kf=()=>{ti&&(ti.type!=="mouse"&&!ti.moved&&ta?(setTimeout(()=>{q.dentT=0,Bn()},240),ta=!1):qf(),ti=null,i.classList.remove("is-dragging"),Bn())};i.addEventListener("pointerup",Kf),i.addEventListener("pointercancel",Kf),i.addEventListener("pointerleave",()=>{q.dentT===.4&&(q.dentT=0),Bn()});function Bn(){J.idle=!1,!J.raf&&J.visible&&(J.last=performance.now(),J.raf=requestAnimationFrame(qh))}let Zf=!t,Xh=!1;function qh(){J.raf=0;let _=performance.now();if(J.idle&&_-J.lastDraw<30){J.raf=requestAnimationFrame(qh);return}let y=Kn((_-J.last)/1e3,0,.05);J.last=_,J.time+=y;let R=!t&&!J.touched;Zf&&Mf(J.time),J.intro<1&&J.released&&(J.intro=Math.min(1,J.intro+y/2.6),J.scrollIn=Ig(J.intro),R=!0),J.w!==J.wTarget?(J.w=Math.abs(J.w-J.wTarget)<.003?J.wTarget:Ii(J.w,J.wTarget,7,y),Hh(),R=!0,Xh=!0):Xh&&(Xh=!1,kh(),Hh()),q.swap<1&&(q.swap=Math.min(1,q.swap+y/(t?.001:.62)),q.swap>=.5&&q.swapTo&&(Gh(q.swapTo),q.swapTo=null),R=!0),q.h!==q.hT&&(q.h=Math.abs(q.h-q.hT)<.002?q.hT:Ii(q.h,q.hT,6,y),Ml(),R=!0,q.h===q.hT&&kh()),J.day!==J.dayT&&(J.day=t?J.dayT:J.dayT>J.day?Math.min(J.dayT,J.day+y/1.5):Math.max(J.dayT,J.day-y/1.5),R=!0,Ko()),J.build<1&&(J.build=Math.min(1,J.build+y/J.buildT),R=!0,e.onBuild?.(J.build),J.build>=1&&e.onBuilt?.()),J.released&&J.buildPose>0&&(J.buildPose=Math.max(0,J.buildPose-y/2),R=!0,Ko(),J.buildPose===0&&e.onSettled?.());let L=J.story!=null?Ef(J.story):null;if(L){for(let Ee of Af)Math.abs(J.st[Ee]-L[Ee])>1e-4?(J.st[Ee]=t?L[Ee]:Ii(J.st[Ee],L[Ee],6,y),R=!0):J.st[Ee]=L[Ee];Math.abs(J.azUser)+Math.abs(J.polUser)>1e-4&&(J.azUser=Ii(J.azUser,0,4,y),J.polUser=Ii(J.polUser,0,4,y),R=!0)}let D=L?1:0;J.storyW!==D&&(J.storyW=t||Math.abs(J.storyW-D)<.002?D:Ii(J.storyW,D,5,y),R=!0);for(let Ee in In.blocks)In.blocks[Ee].oT=L?Tf(Ee,J.story):0;if(In.dirty&&Pf(),L&&L.open!=null)Math.abs(q.open-L.open)>8e-4?(q.open=t?L.open:Ii(q.open,L.open,7,y),R=!0):q.open=L.open;else{let Ee=J.allOpen||q.hi!==null?1:0;if(q.open!==Ee){let Xe=y/(t?.001:1.15);q.open=Ee>q.open?Math.min(1,q.open+Xe):Math.max(0,q.open-Xe*1.2),R=!0}}Object.keys(q.mix).forEach(Ee=>{let Xe=Ee===q.key?1:0;q.mix[Ee]!==Xe&&(R=!0,q.open<.02||t?q.mix[Ee]=Xe:q.open>.7&&(q.mix[Ee]=Xe?Math.min(1,q.mix[Ee]+y/.75):Math.max(0,q.mix[Ee]-y/.5)))});let k=pf[q.feel];Math.abs(q.crown-k.crown)>6e-4&&(q.crown=Ii(q.crown,k.crown,5,y),Ml(),R=!0);for(let Ee=0;Ee<3;Ee++){let Xe=y/3,Dt=(q.dentT*k.depth-q.dent)*k.k-q.dentV*k.c;q.dentV+=Dt*Xe,q.dent+=q.dentV*Xe}(Math.abs(q.dent-q.dentT*k.depth)>8e-4||Math.abs(q.dentV)>.002)&&(R=!0),cl.uDentA.value.set(q.dentX,q.dentZ,Math.max(0,q.dent),k.radius),Object.values(q.groups).forEach(Ee=>Ee.userData.slabs.forEach(Xe=>{Math.abs(Xe.userData.hi-Xe.userData.hiT)>.004&&(R=!0)})),Sl();let V=q.groups[q.key],$=(V?V.userData.openH:q.h)+Ih*1.4;Math.abs(q.coverTop-$)>.002&&(q.coverTop=Ii(q.coverTop,$,6,y),R=!0,Sl());let le=J.lift,_e=Sr(q.open);J.lift=Ii(J.lift,_e,5,y),Math.abs(J.lift-_e)<5e-4&&(J.lift=_e),J.lift!==le&&(R=!0,e.onLift?.(J.lift)),!ti&&Math.abs(J.vAz)>.002?(J.azUser=Xf(J.azUser+J.vAz*y),J.vAz*=Math.exp(-3.5*y),R=!0):ti||(J.vAz=0),Wh(),Kt.visible=o.position.y<Vt-.25,Xg(y)&&(R=!0),s.render(r,o),J.lastDraw=_,J.idle=!R,(R||Zf)&&J.visible&&(J.raf=requestAnimationFrame(qh))}let Yh=[];{let _=kg(n),y=(D,k)=>Yh.push(D.then(V=>{V&&(k(V),Bn())}).catch(()=>{})),R=3.937,L=ve/180;_&&(y(_.oak,D=>{let k=1.83*R;Zn(T.oak,D,.1,1.14,ve/2,{color:"#ffffff",rough:.82,ns:.9});let V=T.oak.clone();Zn(V,D,.09,.13,0,{ns:.9}),ce.forEach(le=>{le.material=V}),Zn(T.plank,D,.14,.95,ve/2,{color:"#ffffff",rough:.8,ns:.9});let $=T.oak.clone();Zn($,D,1/k,1/k,0,{ns:.9}),Rs.forEach(le=>{le.material=$}),Ze&&Zn(Ze.material,D,.03,Vt/k,0,{color:"#7a5639",rough:.75})}),y(_.floor,D=>{let k=1.7*R;Zn(fe.material,D,Fe/k,ue/k,0,{color:"#ffffff",rough:.8,ns:.8})}),y(_.plaster,D=>{let k=2*R;Zn(se,D,(ae+50)/k,40/k,0,{keepMap:!0,ns:.55}),Zn(Q,D,Wt.A*2/k,vi/k,0,{keepMap:!0,ns:.55}),Zn(Xn,D,(bt+55)/k,Vt/k,0,{keepMap:!0,ns:.7})}),y(_.rug,D=>{let k=.27*R;Zn(pn.material,D,13.6/k,13.4/k,0,{keepMap:!0,ns:1.2})}),y(_.jacquard,D=>{let k=.28*R;Object.assign($r,{top:Kr(D.normalMap,.92/k,.92/k),side:Kr(D.normalMap,.62/k,.62/k),ns:.55,rTop:Kr(D.roughnessMap,.92/k,.92/k),rSide:Kr(D.roughnessMap,.62/k,.62/k)}),q.lookName&&Gh(q.lookName)}),y(_.linen,D=>{let k=.27*R;Zn(T.pillow,D,1/k,1/k,0,{keepMap:!0,ns:.9})}),y(_.env,D=>{let k=new vr(s);c=k.fromEquirectangular(D).texture,k.dispose(),D.dispose(),Uh=null,Ko()}),y(_.viewM,D=>{ai.forEach(V=>{V.visible=!1});let k=Cg(D,130,Math.atan2(Ft.x,-Ft.z),ve,-48*L,-25.2*L,50.4*L,.8,1.5);k.position.set(ke.x,0,ke.z),rt.add(k)}),y(_.viewN,D=>{er.forEach(V=>{V.visible=!1}),er.stars.visible=!1;let k=Cg(D,140,.12,ve,-50*L,-21.6*L,54*L,.55,-10,"#a39bb8");k.position.set(0,0,14),tt.add(k)}),y(_.plantTable,D=>{yn.visible=ki.visible=!1,Ne.push({o:uf(D,qt,-.36,2.09,.3,1.5,.5),axis:"z",amp:.008,speed:.7,ph:0})}),y(_.plantFloor,D=>{mn.visible=Mt.visible=!1,Ne.push({o:uf(D,ut,.95,Mn,-.9,4.3,.4),axis:"z",amp:.01,speed:.5,ph:1.3})}),y(_.succulent,D=>{uf(D,At,.5,1.91,.36,.78,.3)}))}try{await Promise.all([document.fonts.load('200px "Young Serif"'),document.fonts.load('600 30px "Hanken Grotesk"'),document.fonts.load('400 30px "Hanken Grotesk"')])}catch{}let Zi=e.model;Bf(Zi),q.key=Zi.key,q.mix[Zi.key]=1,q.feel=Zi.feel,q.crown=pf[Zi.feel].crown,q.h=q.hT=Zi.inches/10,q.label=Zi.label,q.lookName=Zi.look,Gh(Zi.look),Hh(),Sl(),q.coverTop=q.groups[Zi.key].userData.openH+Ih*1.4,e.build&&!t?(tr=kf(),J.build=0,J.buildT=tr.end,J.buildPose=1,J.released=!1,J.intro=1,J.scrollIn=1):e.intro&&!t?(J.intro=0,J.scrollIn=0,J.released=!1):(J.intro=1,J.scrollIn=1),e.story!=null&&(J.story=e.story),bl(),Sl(),Ko();let Jf=window.requestIdleCallback||(_=>setTimeout(_,120)),Jg=Object.keys(ll).filter(_=>_!==Zi.look),jf=()=>{let _=Jg.shift();if(!_)return;let y=zf(_);s.initTexture(y.top),s.initTexture(y.side),Jf(jf)};setTimeout(()=>Jf(jf),1500),addEventListener("resize",bl),window.ResizeObserver&&new ResizeObserver(bl).observe(i),new IntersectionObserver(([_])=>{J.visible=_.isIntersecting,J.visible&&Bn()}).observe(i),J.visible=!0,Wh(),Yh.length&&await Promise.race([Promise.all(Yh),new Promise(_=>setTimeout(_,n?2500:4e3))]);{let _=[Je,tt,qt,ut,At,pn].filter(y=>!y.visible);_.forEach(y=>{y.visible=!0});try{s.compileAsync?await s.compileAsync(r,o):s.compile(r,o)}catch{}s.render(r,o),_.forEach(y=>{y.visible=!1})}return s.render(r,o),J.visible=i.getBoundingClientRect().top<innerHeight,e.onReady?.(),Bn(),{setModel(_){Bf(_);let y=_.look!==q.lookName||_.label!==q.label;q.key=_.key,q.feel=_.feel,q.hT=_.inches/10,y&&(q.lookName=_.look,q.label=_.label,q.swapTo=_.look,q.swap=0),Object.values(q.groups).forEach(R=>R.userData.slabs.forEach(L=>{L.userData.hiT=0})),q.hi=null,J.build<1&&(tr=kf(),J.buildT=tr.end),Bn()},setOpen(_){J.allOpen=_,Bn()},release(){J.released||(J.released=!0,J.build=1,Bn())},setStory(_,y){if(J.story=_,_!=null&&y){let R=Ef(_);for(let L of Af)J.st[L]=R[L];q.open=R.open,J.storyW=1}Bn()},setBlockSizes(_){In.sizes=_,In.last="",Pf();for(let y in In.blocks)In.blocks[y].o=In.blocks[y].oT=J.story!=null?Tf(y,J.story):0;Bh="",Bn()},setPalette({n:_,m:y}={}){let R=new Ge("#ffffff");_&&(Xn.color.set(_),li.color.set(_).multiplyScalar(.72)),y&&(se.color.set(y),Q.color.set(y).lerp(R,.38),Ke.color.set(y).lerp(R,.18)),Bn()},setTheme(_,y){J.dayT=_==="morning"?1:0,(y||t)&&(J.day=J.dayT,Ko()),Bn()},highlight(_){q.hi=_;let y=q.groups[q.key];y&&[...y.userData.slabs].reverse().forEach((R,L)=>{R.userData.hiT=L===_?1:0}),Bn()},setWidth(_){J.wTarget=_/10,Bn()},resize:bl,debug:{S:J,mat:q,renderer:s,words:In,render:()=>{Wh(),s.render(r,o)}}}}async function zS(i,e){let t=Math.min(innerWidth,innerHeight)<600,n;try{n=new rl({canvas:i,antialias:!0,alpha:!0,powerPreference:"default"})}catch(H){return e.onFail?.(H),null}n.setPixelRatio(Math.min(devicePixelRatio||1,t?1.75:1.5)),n.toneMapping=Bo,n.shadowMap.enabled=!0,n.shadowMap.type=xr,$s=Math.min(12,n.capabilities.getMaxAnisotropy());let{sideQ:s,pore:r,weave:o,egg:a,chips:l,oakRail:c,oakPlank:h}=await Gg(t),u=new cr,d=new Dn(28,1.8,1,160);{let H=new cr,ie=new vr(n);H.background=new Ge("#20294a");let xe=(Te,Ze,dt,vt,Jt,Rt,Zt)=>{let Cn=new ot(new Nt(dt,vt),new wn({color:new Ge(Te).multiplyScalar(Ze),side:nn}));Cn.position.set(Jt,Rt,Zt),Cn.lookAt(0,0,0),H.add(Cn)};xe("#ffe2c0",4,14,10,-10,9,8),xe("#b9cbff",3,10,14,12,7,-6),xe("#ffffff",1.4,30,10,0,16,0),u.environment=ie.fromScene(H,.05).texture,ie.dispose()}let f=7.8,p=5,M=1.15,m=1.35,g=72,v=8,A=-f/2,S=Array.from({length:g+1},(H,ie)=>A+f*ie/g),C=Array.from({length:v+1},(H,ie)=>-p/2+p*ie/v),T=(H,ie,xe)=>Math.exp(-((H-ie)**2)/(2*xe*xe)),x=H=>70+(H-A)/f*860,b=H=>{let ie=x(H);return .26*T(ie,178,66)+.74*T(ie,330,52)+T(ie,548,56)+.42*T(ie,652,58)+.22*T(ie,770,48)+.3*T(ie,862,22)},B=H=>.6+.4*Math.exp(-((H/1.15)**2)),N={cover:1.15,memory:1,foam22:.86,pu:.8,profile:.78,foam25:.66,foam30:.5,hd:.36,rebond:.14},F=(H,ie)=>{if(H!=="zones")return N[H]??.6;let xe=(ie-A)/f;return xe<1/3?.72:xe<2/3?.3:.66},W={Soft:.27,Medium:.2,Hard:.14},Z=(H,ie,xe)=>{let Te=document.createElement("canvas");Te.width=H,Te.height=ie,xe(Te.getContext("2d"),H,ie);let Ze=new fi(Te);return Ze.colorSpace=ln,Ze.anisotropy=$s,Ze},P=new fi(Hg());P.colorSpace=ln;let Y=(H,ie={})=>new pt({color:H,roughness:.95,normalMap:r,normalScale:new ge(.7,.7),vertexColors:!0,...ie}),K=o.clone();K.repeat.set(10,7),K.needsUpdate=!0;let X={cover:new xn({color:"#f5f3ee",roughness:.9,sheen:.8,sheenRoughness:.6,sheenColor:new Ge("#ffffff"),normalMap:s,normalScale:new ge(.5,.5),vertexColors:!0}),foam22:Y("#f4f2ea"),foam25:Y("#efe7d3"),foam30:Y("#e4d8bb"),hd:Y("#e3eaf1"),memory:Y("#e8bf78"),pu:Y("#e2efe4"),profile:Y("#f3f1e9",{normalMap:a,normalScale:new ge(1.2,1.2)}),rebond:Y("#ffffff",{map:l}),zoneSoft:Y("#f4f1e7"),zoneFirm:Y("#cfb98a"),oak:new pt({map:c,roughness:.5,color:new Ge(1.45,1.38,1.3)}),plank:new pt({map:h,roughness:.5,color:new Ge(1.1,1.04,.98)}),pillow:new xn({color:"#f4f2ec",roughness:1,sheen:1,sheenRoughness:.7,sheenColor:new Ge("#ffffff"),normalMap:r,normalScale:new ge(.2,.2)}),sheet:new xn({color:"#ebe7de",roughness:.92,sheen:.7,sheenRoughness:.6,sheenColor:new Ge("#ffffff"),normalMap:K,normalScale:new ge(.18,.18),side:nn}),duvet:new xn({color:"#2d3558",roughness:.96,sheen:.55,sheenRoughness:.55,sheenColor:new Ge("#8592c8"),normalMap:K,normalScale:new ge(.28,.28),side:nn}),skin:new pt({color:"#c79a7d",roughness:.62}),skinDark:new pt({color:"#a97c62",roughness:.7}),hair:new xn({color:"#2a1c12",roughness:.42,sheen:.6,sheenRoughness:.35,sheenColor:new Ge("#9a7656")}),dark:new pt({color:"#241d1a",roughness:.45}),brass:new pt({color:"#b8925a",roughness:.3,metalness:.85}),shade:new pt({color:"#f1e2c6",emissive:new Ge("#ffad5c"),emissiveIntensity:1.3,roughness:.9,side:nn}),frame:new pt({color:"#141824",roughness:.38,metalness:.4})},ye=-p/2-1.15,te=new ot(new Nt(34,16),new pt({color:"#1b2343",roughness:.95,alphaMap:Dg(512,.26,.5),transparent:!0}));te.position.set(.5,5.6,ye),te.receiveShadow=!0,u.add(te);let ce=h.clone();ce.wrapS=ce.wrapT=kn,ce.repeat.set(4.5,34),ce.needsUpdate=!0;let me=new ot(new Nt(34,24),new pt({map:ce,color:"#4c3c34",roughness:.42,alphaMap:Dg(512,.2,.5),transparent:!0}));me.rotation.x=-ve/2,me.position.set(.5,0,2.5),me.receiveShadow=!0,u.add(me);let Oe=.9,He=4.5,re=2.4,Ie=6.3,We=He-Oe,et=Ie-re,de=(Oe+He)/2,Be=(re+Ie)/2,an=Z(256,280,(H,ie,xe)=>{let Te=fn(8),Ze=H.createLinearGradient(0,0,0,xe);Ze.addColorStop(0,"#060a1d"),Ze.addColorStop(.55,"#15214b"),Ze.addColorStop(1,"#2d4174"),H.fillStyle=Ze,H.fillRect(0,0,ie,xe);for(let Zt=0;Zt<90;Zt++)H.fillStyle=`rgba(235,240,255,${(.15+Te()*.5).toFixed(2)})`,H.fillRect(Te()*ie,Te()*xe*.7,1.2,1.2);let dt=ie*.64,vt=xe*.24,Jt=ie*.08,Rt=H.createRadialGradient(dt,vt,Jt,dt,vt,Jt*6);Rt.addColorStop(0,"rgba(190,208,255,.38)"),Rt.addColorStop(1,"rgba(190,208,255,0)"),H.fillStyle=Rt,H.fillRect(0,0,ie,xe),H.fillStyle="#fbf8ea",H.beginPath(),H.arc(dt,vt,Jt,0,ve*2),H.fill(),H.fillStyle="rgba(15,22,52,.9)",H.beginPath(),H.moveTo(0,xe);for(let Zt=0;Zt<=ie;Zt+=4)H.lineTo(Zt,xe*(.86+.03*Math.sin(Zt*.05)+.015*Math.sin(Zt*.17)));H.lineTo(ie,xe),H.fill()}),lt=Z(256,280,(H,ie,xe)=>{let Te=H.createLinearGradient(0,0,0,xe);Te.addColorStop(0,"#7db1e2"),Te.addColorStop(.5,"#c9def0"),Te.addColorStop(.85,"#ffd9ab"),Te.addColorStop(1,"#ffc88f"),H.fillStyle=Te,H.fillRect(0,0,ie,xe);let Ze=ie*.3,dt=xe*.74,vt=ie*.07,Jt=H.createRadialGradient(Ze,dt,vt*.5,Ze,dt,vt*8);Jt.addColorStop(0,"rgba(255,242,218,.95)"),Jt.addColorStop(.25,"rgba(255,214,160,.4)"),Jt.addColorStop(1,"rgba(255,214,160,0)"),H.fillStyle=Jt,H.fillRect(0,0,ie,xe),H.fillStyle="#fffbf2",H.beginPath(),H.arc(Ze,dt,vt,0,ve*2),H.fill(),H.fillStyle="rgba(122,150,128,.85)",H.beginPath(),H.moveTo(0,xe);for(let Rt=0;Rt<=ie;Rt+=4)H.lineTo(Rt,xe*(.86+.03*Math.sin(Rt*.05)+.015*Math.sin(Rt*.17)));H.lineTo(ie,xe),H.fill()}),Tt=new ot(new Nt(We,et),new wn({map:an,toneMapped:!1})),mt=new ot(new Nt(We,et),new wn({map:lt,toneMapped:!1,transparent:!0,opacity:0,depthWrite:!1}));Tt.position.set(de,Be,ye+.01),mt.position.set(de,Be,ye+.015),mt.renderOrder=1,u.add(Tt,mt);let pe=(H,ie,xe,Te,Ze=.12)=>{let dt=new ot(new Ei(H,ie,Ze),X.frame);dt.position.set(xe,Te,ye+Ze/2+.02),dt.receiveShadow=!0,u.add(dt)},oe=.13;pe(We+oe*2,oe,de,Ie+oe/2),pe(We+oe*2,oe,de,re-oe/2),pe(oe,et,Oe-oe/2,Be),pe(oe,et,He+oe/2,Be),pe(.06,et,de,Be,.08),pe(We,.05,de,re+et*.55,.08);let Pe=new pt({color:"#d4d8e8",roughness:.92,transparent:!0,opacity:.55,side:nn,depthWrite:!1,emissive:new Ge("#3d4a7a"),emissiveIntensity:.4});{let H=new Nt(1.5,et+1.6,26,6),ie=H.attributes.position;for(let Te=0;Te<ie.count;Te++)ie.setZ(Te,Math.sin((ie.getX(Te)/1.5+.5)*ve*6)*.08);H.computeVertexNormals();let xe=new ot(H,Pe);xe.position.set(He+.55,Be+.3,ye+.3),xe.renderOrder=3,u.add(xe)}let Ye=Z(64,256,(H,ie,xe)=>{let Te=H.createLinearGradient(0,0,0,xe);Te.addColorStop(0,"rgba(255,255,255,1)"),Te.addColorStop(.6,"rgba(255,255,255,.35)"),Te.addColorStop(1,"rgba(255,255,255,0)"),H.fillStyle=Te,H.fillRect(0,0,ie,xe),H.globalCompositeOperation="destination-in";let Ze=H.createLinearGradient(0,0,ie,0);Ze.addColorStop(0,"rgba(0,0,0,0)"),Ze.addColorStop(.25,"#000"),Ze.addColorStop(.75,"#000"),Ze.addColorStop(1,"rgba(0,0,0,0)"),H.fillStyle=Ze,H.fillRect(0,0,ie,xe)}),Ue=new tn,gt=[[Oe,Ie-.1,ye+.04],[He,Ie-.1,ye+.04],[Oe-1.6,1.4,2.4],[He-1.6,1.4,2.4]];Ue.setAttribute("position",new Ct(new Float32Array(gt.flat()),3)),Ue.setAttribute("uv",new Ct(new Float32Array([0,1,1,1,0,0,1,0]),2)),Ue.setIndex([0,2,1,1,2,3]);let Je=new ot(Ue,new wn({map:Ye,color:"#9fb4ff",transparent:!0,opacity:.16,blending:rs,depthWrite:!1,side:nn,toneMapped:!1}));Je.renderOrder=4,Je.frustumCulled=!1,u.add(Je);let tt=t?50:110,rt=new Float32Array(tt*3),It=new Float32Array(tt),G=fn(5);for(let H=0;H<tt;H++){let ie=G(),xe=G(),Te=(Jt,Rt,Zt)=>Jt.map((Cn,jt)=>Cn+(Rt[jt]-Cn)*Zt),Ze=Te(gt[0],gt[1],xe),dt=Te(gt[2],gt[3],xe),vt=Te(Ze,dt,ie);rt.set([vt[0],vt[1],vt[2]+(G()-.5)*.8],H*3),It[H]=G()*50}let qt=new tn;qt.setAttribute("position",new Ct(rt,3)),qt.setAttribute("phase",new Ct(It,1));let ut=new Fi({uniforms:{uTime:{value:0},uPx:{value:n.getPixelRatio()},uCol:{value:new Ge(.85,.9,1)},uA:{value:.6}},vertexShader:`attribute float phase; uniform float uTime, uPx; varying float vA;
      void main(){ vec3 p = position + vec3(sin(uTime*.21 + phase)*.16, sin(uTime*.13 + phase*1.7)*.22, cos(uTime*.17 + phase*.9)*.16);
        vA = .35 + .65 * (.5 + .5 * sin(uTime * (.9 + fract(phase) * 1.8) + phase * 3.1));
        vec4 mv = modelViewMatrix * vec4(p, 1.); gl_PointSize = uPx * (1.1 + fract(phase * 7.) * 1.6) * (40. / -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 uCol; uniform float uA; varying float vA; void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .04, d) * vA * uA; gl_FragColor = vec4(uCol * a, a); }",transparent:!0,depthWrite:!1,blending:rs}),At=new mr(qt,ut);At.renderOrder=5,At.frustumCulled=!1,u.add(At);let Ne=new kt;Ne.position.set(A-1.2,0,-.55),u.add(Ne);let sn=(H,ie,xe,Te,Ze)=>{let dt=new ot(H,ie);return dt.position.set(xe,Te,Ze),dt.castShadow=!0,dt.receiveShadow=!0,Ne.add(dt),dt};sn(new Gn(.66,.66,.06,40),X.dark,0,1.62,0),[0,2.09,4.19].forEach(H=>{sn(new Gn(.04,.028,1.6,8),X.dark,Math.cos(H)*.4,.8,Math.sin(H)*.4).rotation.set(Math.sin(H)*.1,0,-Math.cos(H)*.1)}),sn(new Fr([[0,0],[.18,0],[.2,.03],[.18,.06],[.06,.1],[.04,.5],[0,.5]].map(([H,ie])=>new ge(H,ie)),24),X.brass,-.12,1.65,-.1);let at=sn(new Gn(.22,.31,.38,32,1,!0),X.shade,-.12,2.33,-.1);at.castShadow=!1;let ct=new Nr(new dr({map:P,color:"#ffb468",transparent:!0,opacity:.45,blending:rs,depthWrite:!1,toneMapped:!1}));ct.scale.set(2.6,2.6,1),ct.position.set(-.12,2.33,-.1),Ne.add(ct);let I=new Ks("#ffb06a",8,9,1.8);I.position.set(-.12,2.4,-.1),Ne.add(I);let w=document.createElement("canvas");w.width=256,w.height=112;let ee=new fi(w);ee.colorSpace=ln;let be="",ae=H=>{if(H===be)return;be=H;let ie=w.getContext("2d");ie.fillStyle="#0c0e15",ie.fillRect(0,0,256,112),ie.font='700 74px "Hanken Grotesk", system-ui, sans-serif',ie.textAlign="center",ie.textBaseline="middle",ie.shadowColor="#ff6a2a",ie.shadowBlur=14,ie.fillStyle="#ff8152",ie.fillText(H,128,60),ee.needsUpdate=!0};ae("11:34");let we=new kt;we.position.set(.3,1.65,.28),we.rotation.y=.35,Ne.add(we);let Le=new ot(Bi(.5,.24,.17,.025,{seg:[1,1,1]}).geometry,new pt({color:"#1a1c23",roughness:.4}));Le.position.y=.12,Le.castShadow=!0,we.add(Le);let he=new ot(new Nt(.42,.18),new wn({map:ee,toneMapped:!1}));he.position.set(0,.12,.087),we.add(he);let ue=new Nr(new dr({map:P,color:"#ff7a45",transparent:!0,opacity:.25,blending:rs,depthWrite:!1,toneMapped:!1}));ue.scale.set(.6,.6,1),ue.position.set(0,.12,.12),we.add(ue);let Fe=new kt;u.add(Fe);let O=(H,ie,xe,Te,Ze,dt=!0)=>{let vt=new ot(H,ie);return vt.position.set(xe,Te,Ze),vt.castShadow=dt,vt.receiveShadow=!0,Fe.add(vt),vt};O(Bi(f+.3,.5,p+.26,.03,{seg:[6,1,4],tile:[[2.6,.4],[8,.5],[2.6,.4]]}).geometry,X.oak,0,M-.25,0);let fe=new Gn(.12,.07,M-.5,6);fe.rotateY(ve/6),[[-1,1],[1,1],[-1,-1],[1,-1]].forEach(([H,ie])=>O(fe,X.oak,H*(f/2-.1),(M-.5)/2,ie*(p/2-.05)));{let H=new ns,ie=(p+.5)/2,xe=3.1,Te=.4,Ze=.06;H.moveTo(-ie,0),H.lineTo(ie,0),H.lineTo(ie,xe-Te),H.absellipse(ie-Ze,xe-Te,Ze,Te,0,ve/2,!1,0),H.lineTo(-ie+Ze,xe),H.absellipse(-ie+Ze,xe-Te,Ze,Te,ve/2,ve,!1,0),H.lineTo(-ie,0);let dt=new gr(H,{depth:.14,bevelEnabled:!0,bevelThickness:.03,bevelSize:.012,bevelSegments:3,curveSegments:20}),vt=O(dt,X.plank,A-.36,.2,0);vt.rotation.y=ve/2}let se;{let H=document.createElement("canvas");H.width=H.height=128;let ie=H.getContext("2d"),xe=ie.createRadialGradient(64,64,6,64,64,62);xe.addColorStop(0,"rgba(0,0,0,.75)"),xe.addColorStop(1,"rgba(0,0,0,0)"),ie.fillStyle=xe,ie.fillRect(0,0,128,128),se=new ot(new Nt(1,1),new wn({map:new fi(H),transparent:!0,depthWrite:!1})),se.rotation.x=-ve/2,se.position.set(0,.012,0),se.scale.set(f+3,p+2.2,1),u.add(se)}class ze{constructor(ie,xe,Te){this.ia=ie,this.ib=xe;let Ze=xe-ie+1,dt=Ze*(v+1)+Ze*2+(v+1)*4;this.pos=new Float32Array(dt*3),this.col=new Float32Array(dt*3).fill(1);let vt=new Float32Array(dt*2),Jt=[],Rt=this.geo=new tn;for(let Pt=0;Pt<Ze-1;Pt++)for(let rn=0;rn<v;rn++){let un=Pt*(v+1)+rn,$n=un+v+1;Jt.push(un,un+1,$n,$n,un+1,$n+1)}let Zt=Ze*(v+1);for(let Pt=0;Pt<Ze-1;Pt++){let rn=Zt+Pt*2,un=rn+2;Jt.push(rn,rn+1,un,un,rn+1,un+1)}let Cn=Zt+Ze*2,jt=Cn+(v+1)*2;for(let Pt=0;Pt<v;Pt++){let rn=Cn+Pt*2,un=rn+2;Jt.push(rn,un,rn+1,rn+1,un,un+1)}for(let Pt=0;Pt<v;Pt++){let rn=jt+Pt*2,un=rn+2;Jt.push(rn,rn+1,un,un,rn+1,un+1)}this.fr=Zt,Rt.setIndex(Jt),Rt.setAttribute("position",new Ct(this.pos,3)),Rt.setAttribute("color",new Ct(this.col,3)),Rt.setAttribute("uv",new Ct(vt,2)),this.uv=vt,this.mesh=new ot(Rt,Te),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1}fill(ie,xe,Te){let{pos:Ze,uv:dt,col:vt,ia:Jt,ib:Rt}=this,Zt=0,Cn=(jt,Pt,rn,un,$n)=>{Ze[Zt*3]=jt,Ze[Zt*3+1]=Pt,Ze[Zt*3+2]=rn,dt[Zt*2]=un,dt[Zt*2+1]=$n,Zt++};for(let jt=Jt;jt<=Rt;jt++)for(let Pt=0;Pt<=v;Pt++)Cn(S[jt],ie(jt,Pt),C[Pt],S[jt]/1.3,C[Pt]/1.3);for(let jt=Jt;jt<=Rt;jt++){let Pt=ie(jt,v),rn=xe(jt,v),un=Te(jt),$n=(this.fr+(jt-Jt)*2)*3;Cn(S[jt],Pt,p/2,S[jt]/1.3,Pt/1.3),Cn(S[jt],rn,p/2,S[jt]/1.3,rn/1.3);let Jr=1,fs=1-.36*un,er=1-.62*un;vt[$n]=Jr,vt[$n+1]=fs,vt[$n+2]=er,vt[$n+3]=Jr,vt[$n+4]=fs,vt[$n+5]=er}for(let jt of[Jt,Rt])for(let Pt=0;Pt<=v;Pt++){let rn=ie(jt,Pt),un=xe(jt,Pt);Cn(S[jt],rn,C[Pt],C[Pt]/1.3,rn/1.3),Cn(S[jt],un,C[Pt],C[Pt]/1.3,un/1.3)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.computeVertexNormals()}}let Ae=new kt;u.add(Ae);let Me=[],$e=[],yt=.7,Re="Medium",nt=1,it=[],ke=!1,Ft=0,An=new wn({color:"#0a0d1c",transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1}),Wn=[];function Ki(H){Wn.forEach(ie=>{Ae.remove(ie),ie.geometry.dispose()}),Wn=Array.from({length:Math.max(0,H-1)},()=>{let ie=new Nt(1,1,g,1),xe=new ot(ie,An);return xe.frustumCulled=!1,xe.renderOrder=2,Ae.add(xe),xe})}function Ts(H){$e.forEach(Te=>{Ae.remove(Te.mesh),Te.geo.dispose()}),Re=H.feel,Me=[{mat:"cover",h:(H.inches<=5?.045:.07)*m},...H.layers.map(Te=>({mat:Te.mat,h:Te.inches/10*m}))],yt=Me.reduce((Te,Ze)=>Te+Ze.h,0),ke=Me.some(Te=>Te.mat==="zones"),Ft=Me.findIndex(Te=>Te.mat==="rebond"),Ft<0&&(Ft=Me.length-1);let xe=Te=>Me.reduce((Ze,dt)=>Ze+F(dt.mat,Te)*dt.h,0);nt=S.reduce((Te,Ze)=>Te+xe(Ze),0)/S.length,$e=[],Me.forEach((Te,Ze)=>{(Te.mat==="zones"?[[0,g/3,X.zoneSoft],[g/3,g*2/3,X.zoneFirm],[g*2/3,g,X.zoneSoft]]:[[0,g,X[Te.mat]??X.foam25]]).forEach(([vt,Jt,Rt])=>{let Zt=new ze(vt,Jt,Rt);Zt.k=Ze,$e.push(Zt),Ae.add(Zt.mesh)})}),it=Array.from({length:Me.length+1},()=>Array.from({length:g+1},()=>new Float32Array(v+1))),Ki(Me.length),Vt=null}let Zr=Bi(2.05,.56,1.6,.25,{cs:4,seg:[12,3,10],shape:{crown:.1,bulge:.05}}).geometry,ls=new ot(Zr,X.pillow);ls.castShadow=!0,ls.receiveShadow=!0,u.add(ls);let cs=new ot(Zr,X.pillow);cs.castShadow=!0,cs.receiveShadow=!0,cs.rotation.y=-.06,u.add(cs);let ai=A+1.12,xi=new kt;u.add(xi);{let H=new ot(Lh(.4),X.hair);H.scale.set(1.12,.82,1),xi.add(H);let ie=new ot(Lh(.26),X.hair);ie.scale.set(1.1,.7,1),ie.position.set(-.22,.06,-.04),xi.add(ie);let xe=new ot(Lh(.075),X.skinDark);xe.scale.set(1.3,.5,1),xe.position.set(.06,.31,-.02),xi.add(xe);let Te=new ot(Lh(.2),X.skin);Te.scale.set(1.3,.9,.9),Te.position.set(.34,-.04,-.06),xi.add(Te),xi.traverse(Ze=>{Ze.castShadow=!0,Ze.receiveShadow=!0})}let Pi=A+1.62,Qs=f/2+.14,On=90,yi=30,As=-p/2-.55,zi=p/2+.015,hs=new Nt(1,1,On,yi),us=new ot(hs,X.duvet);us.castShadow=!0,us.receiveShadow=!0,us.frustumCulled=!1,u.add(us);let ds=5,Es=new Nt(1,1,On,ds),Wt=new ot(Es,X.duvet);Wt.castShadow=!0,Wt.receiveShadow=!0,Wt.frustumCulled=!1,u.add(Wt);let vi=8,Mi=new Nt(1,1,vi,yi),E=new ot(Mi,X.sheet);E.castShadow=!0,E.receiveShadow=!0,E.frustumCulled=!1,u.add(E);let z=[[0,.46,.7],[.32,.9,.82],[.8,.8,.8],[1.3,.64,.72],[1.9,.9,.8],[2.55,.74,.74],[3.25,.62,.7],[4.2,.46,.62],[5,.4,.55],[5.45,.3,.5],[5.9,.12,.45]],ne=(H,ie)=>{if(H<=z[0][0])return z[0][ie];for(let xe=1;xe<z.length;xe++)if(H<=z[xe][0]){let Te=(H-z[xe-1][0])/(z[xe][0]-z[xe-1][0]),Ze=Te*Te*(3-2*Te);return hn(z[xe-1][ie],z[xe][ie],Ze)}return z[z.length-1][ie]},j=new Lo("#3b4a86","#0b0f22",.55);u.add(j);let Q=new ys("#a9bcff",.45);Q.position.set(5,12,6),u.add(Q);let Ce=new Ys("#a9bcff",300,24,.5,.8,1.5);Ce.position.set(de,Be+.5,ye+.35),Ce.target.position.set(-.9,1.9,.2),Ce.castShadow=!0,Ce.shadow.mapSize.set(t?1024:2048,t?1024:2048),Ce.shadow.bias=-5e-4,Ce.shadow.normalBias=.02,Ce.shadow.radius=5,Ce.shadow.camera.near=.5,Ce.shadow.camera.far=30,u.add(Ce,Ce.target);let Ke=new ys("#c9d4ff",.5);Ke.position.set(-3,4,12),u.add(Ke);let Se=(H,ie)=>[new Ge(H),new Ge(ie)],De={hemiS:Se("#3b4a86","#eef3ff"),hemiG:Se("#0b0f22","#e8d6bf"),moon:Se("#a9bcff","#ffe3bd"),front:Se("#c9d4ff","#fff6ec"),duvet:Se("#2d3558","#eef1f6"),sheen:Se("#8592c8","#ffffff"),skin:Se("#c79a7d","#d8a888"),wall:Se("#1b2343","#ebe5db"),floor:Se("#3a2e29","#c9b195"),frame:Se("#141824","#f2eee8"),curtain:Se("#d4d8e8","#ffffff"),curtainE:Se("#3d4a7a","#fff0da"),beam:Se("#9fb4ff","#ffd59c"),dust:Se("#d9e6ff","#ffe2b0"),sheet:Se("#ebe7de","#f7f4ee")},Ve=(H,ie,xe)=>H.copy(ie[0]).lerp(ie[1],xe),ht=e.theme==="morning"?1:0,St=ht,Qe=0,Et=0,vn=1;function Yt(){let H=Yi(0,1,ht),ie=1-H;Ve(j.color,De.hemiS,H),Ve(j.groundColor,De.hemiG,H),j.intensity=hn(.55,1.15,H),Ve(Q.color,De.moon,H),Q.intensity=hn(.45,1.5,H),Ve(Ce.color,De.moon,H),Ce.intensity=hn(300,520,H),Ve(Ke.color,De.front,H),Ke.intensity=hn(.5,.75,H),Ve(X.duvet.color,De.duvet,H),Ve(X.duvet.sheenColor,De.sheen,H),Ve(X.sheet.color,De.sheet,H),Ve(X.skin.color,De.skin,H),Ve(te.material.color,De.wall,H),Ve(me.material.color,De.floor,H),Ve(X.frame.color,De.frame,H),Ve(Pe.color,De.curtain,H),Ve(Pe.emissive,De.curtainE,H),Pe.opacity=hn(.55,.75,H),mt.material.opacity=H,Ve(Je.material.color,De.beam,H),Je.material.opacity=hn(.16,.22,H),Ve(ut.uniforms.uCol.value,De.dust,H),ut.uniforms.uA.value=hn(.6,.85,H),u.environmentIntensity=hn(.35,.85,H),se.material.opacity=hn(.85,.5,H);let xe=ie*vn;I.intensity=8*xe,X.shade.emissiveIntensity=.05+1.25*xe,ct.material.opacity=.45*xe,ue.material.opacity=.25*ie}let Gt=0,pn=0,je=0,En=0,zt=0,ki=0;function yn(){let H=i.clientWidth||1,ie=i.clientHeight||1;n.setSize(H,ie,!1),d.aspect=H/ie;let xe=H>900&&H/ie>1.25,Te=Math.tan(d.fov*ve/360),Ze=f+3.6;ki=xe?.19:0,d.userData.d=Math.max(Ze/(2*Te*d.aspect*(xe?.58:.97)),3.4/Te),d.filmOffset=-ki*2*Te*d.aspect*d.getFilmWidth(),d.updateProjectionMatrix()}function Rs(){let H=d.userData.d*(1-.05*zt),ie=-.14+Gt,xe=.21+pn;d.position.set(-.5+Math.sin(ie)*Math.cos(xe)*H,1.95+Math.sin(xe)*H,Math.cos(ie)*Math.cos(xe)*H),d.lookAt(-.5,1.95,0),d.updateMatrixWorld()}i.addEventListener("pointermove",H=>{let ie=i.getBoundingClientRect();je=((H.clientX-ie.left)/ie.width-.5)*.12,En=-((H.clientY-ie.top)/ie.height-.5)*.06,Kt()},{passive:!0}),i.addEventListener("pointerleave",()=>{je=0,En=0,Kt()});let Vt=null,Mn={shoulders:new U,hips:new U,core:new U};function bt(H,ie){let xe=Sr(Kn(H)),Te=Me.length,Ze=Math.min(.42,yt*W[Re]*1.6);zt=xe,vn=1-Yi(.9,1,H);let dt=[M+yt];Me.forEach((ft,Xt)=>dt.push(dt[Xt]-ft.h));for(let ft=0;ft<=g;ft++){let Xt=S[ft],Ht=Me.map($t=>F($t.mat,Xt)*$t.h),Mt=Ht.reduce(($t,qn)=>$t+qn,0),mn=Ze*xe*b(Xt)*(Mt/nt);for(let $t=0;$t<=v;$t++){let qn=mn*B(C[$t]),Li=0;it[Te][ft][$t]=dt[Te];for(let Qn=Te-1;Qn>=0;Qn--){Li+=qn*Ht[Qn]/Mt;let ei=dt[Qn]-Li;Qn>0&&Me[Qn].mat==="profile"&&(ei+=.012*Math.sin(Xt*9.5)),it[Qn][ft][$t]=ei}}}$e.forEach(ft=>{let Xt=Me[ft.k].h;ft.fill((Ht,Mt)=>it[ft.k][Ht][Mt],(Ht,Mt)=>it[ft.k+1][Ht][Mt],Ht=>Kn((1-(it[ft.k][Ht][v]-it[ft.k+1][Ht][v])/Xt)*6.5))}),Wn.forEach((ft,Xt)=>{let Ht=ft.geometry.attributes.position.array;for(let Mt=0;Mt<=g;Mt++){let mn=it[Xt+1][Mt][v];Ht[Mt*3]=S[Mt],Ht[Mt*3+1]=mn+.006,Ht[Mt*3+2]=p/2+.004,Ht[(g+1+Mt)*3]=S[Mt],Ht[(g+1+Mt)*3+1]=mn-.006,Ht[(g+1+Mt)*3+2]=p/2+.004}ft.geometry.attributes.position.needsUpdate=!0});let vt=(ft,Xt)=>{let Ht=Kn((ft-A)/f*g,0,g),Mt=Math.min(g-1,Math.floor(Ht)),mn=Ht-Mt,$t=Kn((Xt+p/2)/p*v,0,v),qn=Math.min(v-1,Math.floor($t)),Li=$t-qn,Qn=it[0][Mt][qn]+(it[0][Mt+1][qn]-it[0][Mt][qn])*mn,ei=it[0][Mt][qn+1]+(it[0][Mt+1][qn+1]-it[0][Mt][qn+1])*mn;return Qn+(ei-Qn)*Li},Jt=vt(ai,0);ls.position.set(ai-.05,Jt+.26,-.05),ls.scale.set(1,1-.1*xe,1),cs.position.set(ai-.12,vt(ai,-1.4)+.26,-1.45),xi.position.set(ai+.02,Jt+.66+.025*(1-xe)+.006*Math.sin(ie),-.12),xi.rotation.z=.06+.03*(1-xe);let Rt=hs.attributes.position.array,Zt=1-xe;for(let ft=0;ft<=yi;ft++){let Xt=As+(zi-As)*ft/yi;for(let Ht=0;Ht<=On;Ht++){let Mt=Pi+(Qs-Pi)*Ht/On,mn=Mt-Pi,$t=(ft*(On+1)+Ht)*3,qn=ne(mn,2)*1.12,Li=1/(1+(Math.abs(Xt)/qn)**3.2),Qn=Math.exp(-(((mn-.75)/.5)**2)),ei=vt(Math.min(Mt,f/2),Math.max(-p/2,Math.min(p/2,Xt)))+.11+ne(mn,1)*Li*(1+.05*Zt)+Math.sin(ie)*.03*Qn*Li;ei+=.045*Math.exp(-((mn/.14)**2)),ei+=(.016*Math.sin(Mt*2.1+Xt*1.1+1.3)+.007*Math.sin(Mt*5.3-Xt*1.9))*Yi(.2,1.2,mn)*(1-Li*.6),Xt<-p/2&&(ei-=(-p/2-Xt)*1.7),Xt>p/2-.34&&(ei-=((Xt-(p/2-.34))/.36)**2*.1),Mt>f/2-.06&&(ei-=(Mt-(f/2-.06))*1.9),Rt[$t]=Mt,Rt[$t+1]=ei,Rt[$t+2]=Xt}}hs.attributes.position.needsUpdate=!0,hs.computeVertexNormals();let Cn=Es.attributes.position.array,jt=.1;for(let ft=0;ft<=ds;ft++){let Xt=ft/ds*ve/2;for(let Ht=0;Ht<=On;Ht++){let Mt=(yi*(On+1)+Ht)*3,mn=(ft*(On+1)+Ht)*3;Cn[mn]=Rt[Mt],Cn[mn+1]=Rt[Mt+1]-jt+Math.cos(Xt)*jt-(ft===ds?.02:0),Cn[mn+2]=Rt[Mt+2]+Math.sin(Xt)*jt*.9}}Es.attributes.position.needsUpdate=!0,Es.computeVertexNormals();let Pt=Mi.attributes.position.array,rn=.42;for(let ft=0;ft<=yi;ft++)for(let Xt=0;Xt<=vi;Xt++){let Ht=Math.round(Xt/vi*rn/(Qs-Pi)*On),Mt=(ft*(On+1)+Ht)*3,mn=(ft*(vi+1)+Xt)*3;Pt[mn]=Rt[Mt]-.012,Pt[mn+1]=Rt[Mt+1]+.028+.02*Math.sin(Xt/vi*ve),Pt[mn+2]=Rt[Mt+2]}Mi.attributes.position.needsUpdate=!0,Mi.computeVertexNormals();let un=ft=>{let Xt=Math.round(ft/(Qs-Pi)*On),Ht=Math.round((0-As)/(zi-As)*yi),Mt=(Ht*(On+1)+Xt)*3;return[Rt[Mt],Rt[Mt+1]]},[$n,Jr]=un(.36),[fs,er]=un(1.92);Mn.shoulders.set($n,Jr+.04,0),Mn.hips.set(fs,er+.04,0);let Yo=Math.round((fs-A)/f*g),Dh=(it[Ft][Yo][v]+it[Ft+1][Yo][v])/2;Mn.core.set(fs+.6,Dh,p/2+.01)}let Rn=new U;function Xn(){if(!e.onPoints)return;let H=i.clientWidth,ie=i.clientHeight,xe={};for(let Te in Mn)Rn.copy(Mn[Te]).project(d),xe[Te]=[(Rn.x*.5+.5)*H,(.5-Rn.y*.5)*ie];e.onPoints(xe)}function dn(H){let ie=Math.min(.1,Math.max(0,(H-Qe)/1e3));Qe=H;let xe=!1;return ht!==St&&(ht=St>ht?Math.min(St,ht+ie/1.4):Math.max(St,ht-ie/1.4),xe=!0),Yt(),Gt=Ii(Gt,je,4,ie),pn=Ii(pn,En,4,ie),Math.abs(Gt-je)+Math.abs(pn-En)>1e-4&&(xe=!0),ut.uniforms.uTime.value=H/1e3,Rs(),n.render(u,d),Xn(),xe}function Kt(){Et||(Qe=performance.now(),Et=requestAnimationFrame(li))}function li(H){Et=0,dn(H)&&(Et=requestAnimationFrame(li))}try{await document.fonts.load('700 74px "Hanken Grotesk"')}catch{}{let H=kg(t),ie=1.83*3.937,xe=(Te,Ze)=>Te.then(dt=>{dt&&(Ze(dt),Kt())}).catch(()=>{});H&&(xe(H.oak,Te=>{Zn(X.oak,Te,.07,1.1,ve/2,{color:"#ffffff",rough:.82,ns:.9}),Zn(X.plank,Te,1/ie,1/ie,ve/2,{color:"#ffffff",rough:.8,ns:.9})}),xe(H.floor,Te=>{Zn(me.material,Te,34/6.6929,24/6.6929,0,{rough:.7,ns:.8})}),xe(H.plaster,Te=>{Zn(te.material,Te,34/7.874,16/7.874,0,{keepMap:!0,ns:.7})}),xe(H.linen,Te=>{Zn(X.pillow,Te,1/1.06299,1/1.06299,0,{keepMap:!0,ns:.9}),Zn(X.sheet,Te,9,6.5,0,{keepMap:!0,ns:.6,keepRough:!0}),Zn(X.duvet,Te,9,6.5,0,{keepMap:!0,ns:.8,keepRough:!0})}))}return yn(),Ts(e.model),bt(e.settle??0,0),Yt(),Rs(),n.render(u,d),Xn(),addEventListener("resize",()=>{yn(),Kt()}),window.ResizeObserver&&new ResizeObserver(()=>{yn(),Kt()}).observe(i),e.onReady?.(),{setModel(H){Ts(H),Vt&&bt(Vt[0],Vt[1]),Kt()},draw(H,ie,xe){Vt=[H,ie],xe&&ae(xe),bt(H,ie),dn(performance.now())},setTheme(H,ie){St=H==="morning"?1:0,ie&&(ht=St),Kt()},setWall(H,ie){H&&De.wall[0].set(H),ie&&De.wall[1].set(ie),Yt(),Kt()},info(){return{zones:ke,rebond:Me.some(H=>H.mat==="rebond")}}}}function Lh(i){return new Fr(Array.from({length:17},(e,t)=>{let n=-ve/2+ve*t/16;return new ge(Math.cos(n)*i+1e-4,Math.sin(n)*i)}),28)}window.EasyComfortBed={mount:BS,mountNight:zS};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
