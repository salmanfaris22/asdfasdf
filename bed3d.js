(()=>{var $p=0,$u=1,Qp=2;var Ar=1,em=2,Qo=3,ws=0,Mi=1,tn=2,Qr=0,ea=1,Di=2,Qu=3,ed=4,tm=5;var eo=100,nm=101,im=102,sm=103,rm=104,om=200,am=201,lm=202,cm=203,td=204,nd=205,hm=206,um=207,dm=208,fm=209,pm=210,mm=211,gm=212,_m=213,xm=214,_c=0,xc=1,yc=2,Do=3,vc=4,Mc=5,Sc=6,bc=7,id=0,ym=1,vm=2,Ts=0,sd=1,rd=2,od=3,ta=4,ad=5,ld=6,cd=7,Fu="attached",Mm="detached",hd=300,to=301,na=302,Yc=303,Kc=304,Xn=1e3,ci=1001,gr=1002,Gn=1003,Zc=1004;var no=1005;var Mn=1006,ia=1007;var Si=1008;var Ui=1009,ud=1010,dd=1011,sa=1012,Jc=1013,fs=1014,di=1015,bi=1016,jc=1017,$c=1018,io=1020,fd=35902,pd=35899,md=1021,gd=1022,wi=1023,Xs=1026,nr=1027,Qc=1028,eh=1029,Er=1030,th=1031;var nh=1033,pl=33776,ml=33777,gl=33778,_l=33779,ih=35840,sh=35841,rh=35842,oh=35843,ah=36196,lh=37492,ch=37496,hh=37488,uh=37489,xl=37490,dh=37491,fh=37808,ph=37809,mh=37810,gh=37811,_h=37812,xh=37813,yh=37814,vh=37815,Mh=37816,Sh=37817,bh=37818,wh=37819,Th=37820,Ah=37821,Eh=36492,Rh=36494,Ch=36495,Ih=36283,Ph=36284,yl=36285,Lh=36286;var Hr=2300,Vr=2301,mc=2302,Ou=2303,Bu=2400,zu=2401,ku=2402,Sm=2500;var _d=0,vl=1,ra=2,bm=3200;var Nh=0,wm=1,ir="",dn="srgb",ni="srgb-linear",Ga="linear",fn="srgb";var gc=7680;var Tm=519,Am=512,Em=513,Rm=514,xd=515,Cm=516,Im=517,yd=518,vd=519,Md=35044;var Sd="300 es",$i=2e3,Uo=2001;function $g(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pm(){let i=Fo("canvas");return i.style.display="block",i}var np={},Oo=null;function Ha(...i){let e="THREE."+i.shift();Oo?Oo("log",e,...i):console.log(e,...i)}function Lm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function lt(...i){i=Lm(i);let e="THREE."+i.shift();if(Oo)Oo("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function yt(...i){i=Lm(i);let e="THREE."+i.shift();if(Oo)Oo("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Gr(...i){let e=i.join(" ");e in np||(np[e]=!0,lt(...i))}function Nm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Dm={[_c]:_c,[yc]:Sc,[vc]:vc,[Do]:Mc,[xc]:xc,[Sc]:yc,[bc]:bc,[Mc]:Do},Ms=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},ai=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ip=1234567,Oa=Math.PI/180,Wr=180/Math.PI;function ps(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ai[i&255]+ai[i>>8&255]+ai[i>>16&255]+ai[i>>24&255]+"-"+ai[e&255]+ai[e>>8&255]+"-"+ai[e>>16&15|64]+ai[e>>24&255]+"-"+ai[t&63|128]+ai[t>>8&255]+"-"+ai[t>>16&255]+ai[t>>24&255]+ai[n&255]+ai[n>>8&255]+ai[n>>16&255]+ai[n>>24&255]).toLowerCase()}function Bt(i,e,t){return Math.max(e,Math.min(t,i))}function bd(i,e){return(i%e+e)%e}function e0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function t0(i,e,t){return i!==e?(t-i)/(e-i):0}function Ba(i,e,t){return(1-t)*i+t*e}function n0(i,e,t,n){return Ba(i,e,1-Math.exp(-t*n))}function i0(i,e=1){return e-Math.abs(bd(i,e*2)-e)}function s0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function r0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function o0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function a0(i,e){return i+Math.random()*(e-i)}function l0(i){return i*(.5-Math.random())}function c0(i){i!==void 0&&(ip=i);let e=ip+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function h0(i){return i*Oa}function u0(i){return i*Wr}function d0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function f0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function p0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Td(i,e){if(e.constructor===Float32Array)return i;let t=Dh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Ad(i,e){if(e.constructor===Float32Array)return i;let t=Dh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Uh={DEG2RAD:Oa,RAD2DEG:Wr,generateUUID:ps,clamp:Bt,euclideanModulo:bd,mapLinear:e0,inverseLerp:t0,lerp:Ba,damp:n0,pingpong:i0,smoothstep:s0,smootherstep:r0,randInt:o0,randFloat:a0,randFloatSpread:l0,seededRandom:c0,degToRad:h0,radToDeg:u0,isPowerOfTwo:d0,ceilPowerOfTwo:f0,floorPowerOfTwo:wd,setQuaternionFromProperEuler:p0,normalize:Ad,denormalize:Td},Ld=class Ld{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ld.prototype.isVector2=!0;var Me=Ld,_i=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],M=r[o+3];if(u!==M||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*M;m<0&&(d=-d,f=-f,p=-p,M=-M,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),A=Math.sin(v);g=Math.sin(g*v)/A,a=Math.sin(a*v)/A,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+M*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+M*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Nd=class Nd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this.z=Bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this.z=Bt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lu.copy(this).projectOnVector(e),this.sub(lu)}reflect(e){return this.sub(lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nd.prototype.isVector3=!0;var F=Nd,lu=new F,sp=new _i,Dd=class Dd{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],M=s[0],m=s[3],g=s[6],v=s[1],A=s[4],S=s[7],C=s[2],T=s[5],x=s[8];return r[0]=o*M+a*v+l*C,r[3]=o*m+a*A+l*T,r[6]=o*g+a*S+l*x,r[1]=c*M+h*v+u*C,r[4]=c*m+h*A+u*T,r[7]=c*g+h*S+u*x,r[2]=d*M+f*v+p*C,r[5]=d*m+f*A+p*T,r[8]=d*g+f*S+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/p;return e[0]=u*M,e[1]=(s*c-h*n)*M,e[2]=(a*n-s*o)*M,e[3]=d*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=f*M,e[7]=(n*l-c*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cu.makeScale(e,t)),this}rotate(e){return Gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cu.makeRotation(-e)),this}translate(e,t){return Gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Dd.prototype.isMatrix3=!0;var Rt=Dd,cu=new Rt,rp=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),op=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m0(){let i={enabled:!0,workingColorSpace:ni,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fn&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fn&&(s.r=No(s.r),s.g=No(s.g),s.b=No(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ir?Ga:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ni]:{primaries:e,whitePoint:n,transfer:Ga,toXYZ:rp,fromXYZ:op,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:n,transfer:fn,toXYZ:rp,fromXYZ:op,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),i}var Wt=m0();function Ws(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function No(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mo,wc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mo===void 0&&(mo=Fo("canvas")),mo.width=e.width,mo.height=e.height;let s=mo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=mo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ws(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ws(t[n]/255)*255):t[n]=Ws(t[n]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},g0=0,Bo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hu(s[o].image)):r.push(hu(s[o]))}else r=hu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function hu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}var _0=0,uu=new F,Hn=class i extends Ms{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ci,s=ci,r=Mn,o=Si,a=wi,l=Ui,c=i.DEFAULT_ANISOTROPY,h=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=ps(),this.name="",this.source=new Bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(uu).x}get height(){return this.source.getSize(uu).y}get depth(){return this.source.getSize(uu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xn:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xn:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=hd;Hn.DEFAULT_ANISOTROPY=1;var Ud=class Ud{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],M=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,S=(f+1)/2,C=(g+1)/2,T=(h+d)/4,x=(u+M)/4,b=(p+m)/4;return A>S&&A>C?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=T/n,r=x/n):S>C?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=b/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=x/r,s=b/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(u-M)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this.z=Bt(this.z,e.z,t.z),this.w=Bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this.z=Bt(this.z,e,t),this.w=Bt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ud.prototype.isVector4=!0;var hn=Ud,Tc=class extends Ms{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Hn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Bo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gi=class extends Tc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Va=class extends Hn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ac=class extends Hn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var qc=class qc{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,p,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,p,M,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,p,M,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=M,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/go.setFromMatrixColumn(e,0).length(),r=1/go.setFromMatrixColumn(e,1).length(),o=1/go.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,M=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-M*c,t[9]=-a*l,t[2]=M-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,M=c*u;t[0]=d+M*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=M+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,M=c*u;t[0]=d-M*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=M-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,M=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+M,t[1]=l*u,t[5]=M*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,M=a*c;t[0]=l*h,t[4]=M-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-M*u}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,M=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+M,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=M*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(x0,e,y0)}lookAt(e,t,n){let s=this.elements;return zi.subVectors(e,t),zi.lengthSq()===0&&(zi.z=1),zi.normalize(),hr.crossVectors(n,zi),hr.lengthSq()===0&&(Math.abs(n.z)===1?zi.x+=1e-4:zi.z+=1e-4,zi.normalize(),hr.crossVectors(n,zi)),hr.normalize(),zl.crossVectors(zi,hr),s[0]=hr.x,s[4]=zl.x,s[8]=zi.x,s[1]=hr.y,s[5]=zl.y,s[9]=zi.y,s[2]=hr.z,s[6]=zl.z,s[10]=zi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],M=n[6],m=n[10],g=n[14],v=n[3],A=n[7],S=n[11],C=n[15],T=s[0],x=s[4],b=s[8],z=s[12],N=s[1],O=s[5],W=s[9],Z=s[13],P=s[2],q=s[6],Y=s[10],ee=s[14],re=s[3],ne=s[7],ce=s[11],_e=s[15];return r[0]=o*T+a*N+l*P+c*re,r[4]=o*x+a*O+l*q+c*ne,r[8]=o*b+a*W+l*Y+c*ce,r[12]=o*z+a*Z+l*ee+c*_e,r[1]=h*T+u*N+d*P+f*re,r[5]=h*x+u*O+d*q+f*ne,r[9]=h*b+u*W+d*Y+f*ce,r[13]=h*z+u*Z+d*ee+f*_e,r[2]=p*T+M*N+m*P+g*re,r[6]=p*x+M*O+m*q+g*ne,r[10]=p*b+M*W+m*Y+g*ce,r[14]=p*z+M*Z+m*ee+g*_e,r[3]=v*T+A*N+S*P+C*re,r[7]=v*x+A*O+S*q+C*ne,r[11]=v*b+A*W+S*Y+C*ce,r[15]=v*z+A*Z+S*ee+C*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],M=e[7],m=e[11],g=e[15],v=l*f-c*d,A=a*f-c*u,S=a*d-l*u,C=o*f-c*h,T=o*d-l*h,x=o*u-a*h;return t*(M*v-m*A+g*S)-n*(p*v-m*C+g*T)+s*(p*A-M*C+g*x)-r*(p*S-M*T+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],M=e[13],m=e[14],g=e[15],v=t*a-n*o,A=t*l-s*o,S=t*c-r*o,C=n*l-s*a,T=n*c-r*a,x=s*c-r*l,b=h*M-u*p,z=h*m-d*p,N=h*g-f*p,O=u*m-d*M,W=u*g-f*M,Z=d*g-f*m,P=v*Z-A*W+S*O+C*N-T*z+x*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/P;return e[0]=(a*Z-l*W+c*O)*q,e[1]=(s*W-n*Z-r*O)*q,e[2]=(M*x-m*T+g*C)*q,e[3]=(d*T-u*x-f*C)*q,e[4]=(l*N-o*Z-c*z)*q,e[5]=(t*Z-s*N+r*z)*q,e[6]=(m*S-p*x-g*A)*q,e[7]=(h*x-d*S+f*A)*q,e[8]=(o*W-a*N+c*b)*q,e[9]=(n*N-t*W-r*b)*q,e[10]=(p*T-M*S+g*v)*q,e[11]=(u*S-h*T-f*v)*q,e[12]=(a*z-o*O-l*b)*q,e[13]=(t*O-n*z+s*b)*q,e[14]=(M*A-p*C-m*v)*q,e[15]=(h*C-u*A+d*v)*q,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,M=o*h,m=o*u,g=a*u,v=l*c,A=l*h,S=l*u,C=n.x,T=n.y,x=n.z;return s[0]=(1-(M+g))*C,s[1]=(f+S)*C,s[2]=(p-A)*C,s[3]=0,s[4]=(f-S)*T,s[5]=(1-(d+g))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(p+A)*x,s[9]=(m-v)*x,s[10]=(1-(d+M))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=go.set(s[0],s[1],s[2]).length(),a=go.set(s[4],s[5],s[6]).length(),l=go.set(s[8],s[9],s[10]).length();r<0&&(o=-o),os.copy(this);let c=1/o,h=1/a,u=1/l;return os.elements[0]*=c,os.elements[1]*=c,os.elements[2]*=c,os.elements[4]*=h,os.elements[5]*=h,os.elements[6]*=h,os.elements[8]*=u,os.elements[9]*=u,os.elements[10]*=u,t.setFromRotationMatrix(os),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=$i,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,M;if(l)p=r/(o-r),M=o*r/(o-r);else if(a===$i)p=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Uo)p=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=$i,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,M;if(l)p=1/(o-r),M=o/(o-r);else if(a===$i)p=-2/(o-r),M=-(o+r)/(o-r);else if(a===Uo)p=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};qc.prototype.isMatrix4=!0;var Mt=qc,go=new F,os=new Mt,x0=new F(0,0,0),y0=new F(1,1,1),hr=new F,zl=new F,zi=new F,ap=new Mt,lp=new _i,cs=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ap.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ap,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lp.setFromEuler(this),this.setFromQuaternion(lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cs.DEFAULT_ORDER="XYZ";var zo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},v0=0,cp=new F,_o=new _i,Fs=new Mt,kl=new F,wa=new F,M0=new F,S0=new _i,hp=new F(1,0,0),up=new F(0,1,0),dp=new F(0,0,1),fp={type:"added"},b0={type:"removed"},xo={type:"childadded",child:null},du={type:"childremoved",child:null},Tn=class i extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new cs,n=new _i,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Rt}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.multiply(_o),this}rotateOnWorldAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.premultiply(_o),this}rotateX(e){return this.rotateOnAxis(hp,e)}rotateY(e){return this.rotateOnAxis(up,e)}rotateZ(e){return this.rotateOnAxis(dp,e)}translateOnAxis(e,t){return cp.copy(e).applyQuaternion(this.quaternion),this.position.add(cp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hp,e)}translateY(e){return this.translateOnAxis(up,e)}translateZ(e){return this.translateOnAxis(dp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kl.copy(e):kl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fs.lookAt(wa,kl,this.up):Fs.lookAt(kl,wa,this.up),this.quaternion.setFromRotationMatrix(Fs),s&&(Fs.extractRotation(s.matrixWorld),_o.setFromRotationMatrix(Fs),this.quaternion.premultiply(_o.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(yt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fp),xo.child=e,this.dispatchEvent(xo),xo.child=null):yt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(b0),du.child=e,this.dispatchEvent(du),du.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fp),xo.child=e,this.dispatchEvent(xo),xo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,M0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,S0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Tn.DEFAULT_UP=new F(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xt=class extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},w0={type:"move"},ko=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let M of e.hand.values()){let m=t.getJointPose(M,n),g=this._getHandJoint(c,M);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(w0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Um={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function fu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Wt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Wt.workingColorSpace){if(e=bd(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=fu(o,r,e+1/3),this.g=fu(o,r,e),this.b=fu(o,r,e-1/3)}return Wt.colorSpaceToWorking(this,s),this}setStyle(e,t=dn){function n(r){r!==void 0&&parseFloat(r)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){let n=Um[e.toLowerCase()];return n!==void 0?this.setHex(n,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}copyLinearToSRGB(e){return this.r=No(e.r),this.g=No(e.g),this.b=No(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return Wt.workingToColorSpace(li.copy(this),e),Math.round(Bt(li.r*255,0,255))*65536+Math.round(Bt(li.g*255,0,255))*256+Math.round(Bt(li.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.workingToColorSpace(li.copy(this),t);let n=li.r,s=li.g,r=li.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Wt.workingColorSpace){return Wt.workingToColorSpace(li.copy(this),t),e.r=li.r,e.g=li.g,e.b=li.b,e}getStyle(e=dn){Wt.workingToColorSpace(li.copy(this),e);let t=li.r,n=li.g,s=li.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+t,ur.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ur),e.getHSL(Gl);let n=Ba(ur.h,Gl.h,t),s=Ba(ur.s,Gl.s,t),r=Ba(ur.l,Gl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},li=new Ve;Ve.NAMES=Um;var _r=class extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cs,this.environmentIntensity=1,this.environmentRotation=new cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},as=new F,Os=new F,pu=new F,Bs=new F,yo=new F,vo=new F,pp=new F,mu=new F,gu=new F,_u=new F,xu=new hn,yu=new hn,vu=new hn,Hs=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),as.subVectors(e,t),s.cross(as);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){as.subVectors(s,t),Os.subVectors(n,t),pu.subVectors(e,t);let o=as.dot(as),a=as.dot(Os),l=as.dot(pu),c=Os.dot(Os),h=Os.dot(pu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bs)===null?!1:Bs.x>=0&&Bs.y>=0&&Bs.x+Bs.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Bs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bs.x),l.addScaledVector(o,Bs.y),l.addScaledVector(a,Bs.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return xu.setScalar(0),yu.setScalar(0),vu.setScalar(0),xu.fromBufferAttribute(e,t),yu.fromBufferAttribute(e,n),vu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(xu,r.x),o.addScaledVector(yu,r.y),o.addScaledVector(vu,r.z),o}static isFrontFacing(e,t,n,s){return as.subVectors(n,t),Os.subVectors(e,t),as.cross(Os).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return as.subVectors(this.c,this.b),Os.subVectors(this.a,this.b),as.cross(Os).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;yo.subVectors(s,n),vo.subVectors(r,n),mu.subVectors(e,n);let l=yo.dot(mu),c=vo.dot(mu);if(l<=0&&c<=0)return t.copy(n);gu.subVectors(e,s);let h=yo.dot(gu),u=vo.dot(gu);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(yo,o);_u.subVectors(e,r);let f=yo.dot(_u),p=vo.dot(_u);if(p>=0&&f<=p)return t.copy(r);let M=f*c-l*p;if(M<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(vo,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return pp.subVectors(r,s),a=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(pp,a);let g=1/(m+M+d);return o=M*g,a=d*g,t.copy(n).addScaledVector(yo,o).addScaledVector(vo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xi=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ls.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ls.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ls.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ls):ls.fromBufferAttribute(r,o),ls.applyMatrix4(e.matrixWorld),this.expandByPoint(ls);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hl.copy(n.boundingBox)),Hl.applyMatrix4(e.matrixWorld),this.union(Hl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ls),ls.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),Vl.subVectors(this.max,Ta),Mo.subVectors(e.a,Ta),So.subVectors(e.b,Ta),bo.subVectors(e.c,Ta),dr.subVectors(So,Mo),fr.subVectors(bo,So),Or.subVectors(Mo,bo);let t=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-Or.z,Or.y,dr.z,0,-dr.x,fr.z,0,-fr.x,Or.z,0,-Or.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-Or.y,Or.x,0];return!Mu(t,Mo,So,bo,Vl)||(t=[1,0,0,0,1,0,0,0,1],!Mu(t,Mo,So,bo,Vl))?!1:(Wl.crossVectors(dr,fr),t=[Wl.x,Wl.y,Wl.z],Mu(t,Mo,So,bo,Vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ls).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ls).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zs=[new F,new F,new F,new F,new F,new F,new F,new F],ls=new F,Hl=new xi,Mo=new F,So=new F,bo=new F,dr=new F,fr=new F,Or=new F,Ta=new F,Vl=new F,Wl=new F,Br=new F;function Mu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Br.fromArray(i,r);let a=s.x*Math.abs(Br.x)+s.y*Math.abs(Br.y)+s.z*Math.abs(Br.z),l=e.dot(Br),c=t.dot(Br),h=n.dot(Br);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Vs=T0();function T0(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function A0(i){Math.abs(i)>65504&&lt("DataUtils.toHalfFloat(): Value out of range."),i=Bt(i,-65504,65504),Vs.floatView[0]=i;let e=Vs.uint32View[0],t=e>>23&511;return Vs.baseTable[t]+((e&8388607)>>Vs.shiftTable[t])}function E0(i){let e=i>>10;return Vs.uint32View[0]=Vs.mantissaTable[Vs.offsetTable[e]+(i&1023)]+Vs.exponentTable[e],Vs.floatView[0]}var xr=class{static toHalfFloat(e){return A0(e)}static fromHalfFloat(e){return E0(e)}},Wn=new F,Xl=new Me,R0=0,Ut=class extends Ms{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:R0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Md,this.updateRanges=[],this.gpuType=di,this.version=0,this._normalizationScale=e!==void 0?Dh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xl.fromBufferAttribute(this,t),Xl.applyMatrix3(e),this.setXY(t,Xl.x,Xl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix3(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Td(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ad(e,this.array)}};var Wa=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xa=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var an=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},C0=new xi,Aa=new F,Su=new F,Li=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):C0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);let t=Aa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Aa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(Su)),this.expandByPoint(Aa.copy(e.center).sub(Su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},I0=0,ji=new Mt,bu=new Tn,wo=new F,ki=new xi,Ea=new xi,Qn=new F,ln=class i extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($g(e)?Xa:Wa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ji.makeRotationFromQuaternion(e),this.applyMatrix4(ji),this}rotateX(e){return ji.makeRotationX(e),this.applyMatrix4(ji),this}rotateY(e){return ji.makeRotationY(e),this.applyMatrix4(ji),this}rotateZ(e){return ji.makeRotationZ(e),this.applyMatrix4(ji),this}translate(e,t,n){return ji.makeTranslation(e,t,n),this.applyMatrix4(ji),this}scale(e,t,n){return ji.makeScale(e,t,n),this.applyMatrix4(ji),this}lookAt(e){return bu.lookAt(e),bu.updateMatrix(),this.applyMatrix4(bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wo).negate(),this.translate(wo.x,wo.y,wo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new an(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ki.setFromBufferAttribute(r),this.morphTargetsRelative?(Qn.addVectors(this.boundingBox.min,ki.min),this.boundingBox.expandByPoint(Qn),Qn.addVectors(this.boundingBox.max,ki.max),this.boundingBox.expandByPoint(Qn)):(this.boundingBox.expandByPoint(ki.min),this.boundingBox.expandByPoint(ki.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(ki.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ea.setFromBufferAttribute(a),this.morphTargetsRelative?(Qn.addVectors(ki.min,Ea.min),ki.expandByPoint(Qn),Qn.addVectors(ki.max,Ea.max),ki.expandByPoint(Qn)):(ki.expandByPoint(Ea.min),ki.expandByPoint(Ea.max))}ki.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Qn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Qn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qn.fromBufferAttribute(a,c),l&&(wo.fromBufferAttribute(e,c),Qn.add(wo)),s=Math.max(s,n.distanceToSquared(Qn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ut(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let z=0;z<n.count;z++)a[z]=new F,l[z]=new F;let h=new F,u=new F,d=new F,f=new Me,p=new Me,M=new Me,m=new F,g=new F;function v(z,N,O){c[z]=c[N]=c[O]=1,h.fromBufferAttribute(n,z),u.fromBufferAttribute(n,N),d.fromBufferAttribute(n,O),f.fromBufferAttribute(r,z),p.fromBufferAttribute(r,N),M.fromBufferAttribute(r,O),u.sub(h),d.sub(h),p.sub(f),M.sub(f);let W=1/(p.x*M.y-M.x*p.y);isFinite(W)&&(m.copy(u).multiplyScalar(M.y).addScaledVector(d,-p.y).multiplyScalar(W),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-M.x).multiplyScalar(W),a[z].add(m),a[N].add(m),a[O].add(m),l[z].add(g),l[N].add(g),l[O].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let z=0,N=A.length;z<N;++z){let O=A[z],W=O.start,Z=O.count;for(let P=W,q=W+Z;P<q;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let S=new F,C=new F,T=new F,x=new F;function b(z){T.fromBufferAttribute(s,z),x.copy(T);let N=a[z];S.copy(N),S.sub(T.multiplyScalar(T.dot(N))).normalize(),C.crossVectors(x,N);let W=C.dot(l[z])<0?-1:1;o.setXYZW(z,S.x,S.y,S.z,W)}for(let z=0,N=n.count;z<N;++z)c[z]&&b(z);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),M=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qn.fromBufferAttribute(e,t),Qn.normalize(),e.setXYZ(t,Qn.x,Qn.y,Qn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?f=l[M]*a.data.stride+a.offset:f=l[M]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new Ut(d,h,u)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Md,this.updateRanges=[],this.version=0,this.uuid=ps()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=mp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=mp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function mp(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ps()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var gi=new F,yr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Dh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gi.fromBufferAttribute(this,t),gi.applyMatrix4(e),this.setXYZ(t,gi.x,gi.y,gi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gi.fromBufferAttribute(this,t),gi.applyNormalMatrix(e),this.setXYZ(t,gi.x,gi.y,gi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gi.fromBufferAttribute(this,t),gi.transformDirection(e),this.setXYZ(t,gi.x,gi.y,gi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ha("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ha("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Td(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ad(e,this.data.array)}},wu=new F,P0=new F,L0=new Rt,Pi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=wu.subVectors(n,t).cross(P0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(wu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||L0.getNormalMatrix(e),s=this.coplanarPoint(wu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},N0=0,yi=class extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=ea,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=td,this.blendDst=nd,this.blendEquation=eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gc,this.stencilZFail=gc,this.stencilZPass=gc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Pi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Me().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},qs=class extends yi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},To,Ra=new F,Ao=new F,Eo=new F,Ro=new Me,Ca=new Me,Fm=new Mt,ql=new F,Ia=new F,Yl=new F,gp=new Me,Tu=new Me,_p=new Me,vr=class extends Tn{constructor(e=new qs){if(super(),this.isSprite=!0,this.type="Sprite",To===void 0){To=new ln;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xr(t,5);To.setIndex([0,1,2,0,2,3]),To.setAttribute("position",new yr(n,3,0,!1)),To.setAttribute("uv",new yr(n,2,3,!1))}this.geometry=To,this.material=e,this.center=new Me(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ao.setFromMatrixScale(this.matrixWorld),Fm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Eo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ao.multiplyScalar(-Eo.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Kl(ql.set(-.5,-.5,0),Eo,o,Ao,s,r),Kl(Ia.set(.5,-.5,0),Eo,o,Ao,s,r),Kl(Yl.set(.5,.5,0),Eo,o,Ao,s,r),gp.set(0,0),Tu.set(1,0),_p.set(1,1);let a=e.ray.intersectTriangle(ql,Ia,Yl,!1,Ra);if(a===null&&(Kl(Ia.set(-.5,.5,0),Eo,o,Ao,s,r),Tu.set(0,1),a=e.ray.intersectTriangle(ql,Yl,Ia,!1,Ra),a===null))return;let l=e.ray.origin.distanceTo(Ra);l<e.near||l>e.far||t.push({distance:l,point:Ra.clone(),uv:Hs.getInterpolation(Ra,ql,Ia,Yl,gp,Tu,_p,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Kl(i,e,t,n,s,r){Ro.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ca.x=r*Ro.x-s*Ro.y,Ca.y=s*Ro.x+r*Ro.y):Ca.copy(Ro),i.copy(e),i.x+=Ca.x,i.y+=Ca.y,i.applyMatrix4(Fm)}var ks=new F,Au=new F,Zl=new F,Jl=new F,Mr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ks)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ks.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ks.copy(this.origin).addScaledVector(this.direction,t),ks.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Au.copy(e).add(t).multiplyScalar(.5),Zl.copy(t).sub(e).normalize(),Jl.copy(this.origin).sub(Au);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Zl),a=Jl.dot(this.direction),l=-Jl.dot(Zl),c=Jl.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let M=1/h;u*=M,d*=M,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Au).addScaledVector(Zl,d),f}intersectSphere(e,t){if(e.radius<0)return null;ks.subVectors(e.center,this.origin);let n=ks.dot(this.direction),s=ks.dot(ks)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ks)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,M=t.y-o.y,m=t.z-o.z,g=n.x-o.x,v=n.y-o.y,A=n.z-o.z,S=Math.abs(l),C=Math.abs(c),T=Math.abs(h),x,b,z,N,O,W,Z,P,q,Y,ee,re;if(S>=C&&S>=T?(z=l,W=u,q=p,re=g,l>=0?(x=c,b=h,N=d,O=f,Z=M,P=m,Y=v,ee=A):(x=h,b=c,N=f,O=d,Z=m,P=M,Y=A,ee=v)):C>=T?(z=c,W=d,q=M,re=v,c>=0?(x=h,b=l,N=f,O=u,Z=m,P=p,Y=A,ee=g):(x=l,b=h,N=u,O=f,Z=p,P=m,Y=g,ee=A)):(z=h,W=f,q=m,re=A,h>=0?(x=l,b=c,N=u,O=d,Z=p,P=M,Y=g,ee=v):(x=c,b=l,N=d,O=u,Z=M,P=p,Y=v,ee=g)),z===0)return null;let ne=x/z,ce=b/z,_e=1/z,Fe=N-ne*W,He=O-ce*W,ie=Z-ne*q,we=P-ce*q,Ge=Y-ne*re,$e=ee-ce*re,me=Ge*we-$e*ie,ze=Fe*$e-He*Ge,un=ie*He-we*Fe;if(s){if(me<0||ze<0||un<0)return null}else if((me<0||ze<0||un<0)&&(me>0||ze>0||un>0))return null;let rt=me+ze+un;if(rt===0)return null;let Ct=_e*(me*W+ze*q+un*re);return(rt>0?Ct<0:Ct>0)?null:this.at(Ct/rt,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_n=class extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xp=new Mt,zr=new Mr,jl=new Li,yp=new F,$l=new F,Ql=new F,ec=new F,Eu=new F,tc=new F,vp=new F,nc=new F,tt=class extends Tn{constructor(e=new ln,t=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){tc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Eu.fromBufferAttribute(u,e),o?tc.addScaledVector(Eu,h):tc.addScaledVector(Eu.sub(t),h))}t.add(tc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jl.copy(n.boundingSphere),jl.applyMatrix4(r),zr.copy(e.ray).recast(e.near),!(jl.containsPoint(zr.origin)===!1&&(zr.intersectSphere(jl,yp)===null||zr.origin.distanceToSquared(yp)>(e.far-e.near)**2))&&(xp.copy(r).invert(),zr.copy(e.ray).applyMatrix4(xp),!(n.boundingBox!==null&&zr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,M=d.length;p<M;p++){let m=d[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,C=A;S<C;S+=3){let T=a.getX(S),x=a.getX(S+1),b=a.getX(S+2);s=ic(this,g,e,n,c,h,u,T,x,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let m=p,g=M;m<g;m+=3){let v=a.getX(m),A=a.getX(m+1),S=a.getX(m+2);s=ic(this,o,e,n,c,h,u,v,A,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,M=d.length;p<M;p++){let m=d[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,C=A;S<C;S+=3){let T=S,x=S+1,b=S+2;s=ic(this,g,e,n,c,h,u,T,x,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=p,g=M;m<g;m+=3){let v=m,A=m+1,S=m+2;s=ic(this,o,e,n,c,h,u,v,A,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function D0(i,e,t,n,s,r,o,a){let l;if(e.side===Mi?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ws,a),l===null)return null;nc.copy(a),nc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(nc);return c<t.near||c>t.far?null:{distance:c,point:nc.clone(),object:i}}function ic(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,$l),i.getVertexPosition(l,Ql),i.getVertexPosition(c,ec);let h=D0(i,e,t,n,$l,Ql,ec,vp);if(h){let u=new F;Hs.getBarycoord(vp,$l,Ql,ec,u),s&&(h.uv=Hs.getInterpolatedAttribute(s,a,l,c,u,new Me)),r&&(h.uv1=Hs.getInterpolatedAttribute(r,a,l,c,u,new Me)),o&&(h.normal=Hs.getInterpolatedAttribute(o,a,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};Hs.getNormal($l,Ql,ec,d.normal),h.face=d,h.barycoord=u}return h}var Pa=new hn,Mp=new hn,Sp=new hn,U0=new hn,bp=new Mt,sc=new F,Ru=new Li,wp=new Mt,Cu=new Mr,qa=class extends tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fu,this.bindMatrix=new Mt,this.bindMatrixInverse=new Mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sc),this.boundingBox.expandByPoint(sc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Li),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sc),this.boundingSphere.expandByPoint(sc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ru.copy(this.boundingSphere),Ru.applyMatrix4(s),e.ray.intersectsSphere(Ru)!==!1&&(wp.copy(s).invert(),Cu.copy(e.ray).applyMatrix4(wp),!(this.boundingBox!==null&&Cu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new hn,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mm?this.bindMatrixInverse.copy(this.bindMatrix).invert():lt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Mp.fromBufferAttribute(s.attributes.skinIndex,e),Sp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Pa.copy(t),t.set(0,0,0,0)):(Pa.set(t.x,t.y,t.z,1),t.set(0,0,0)),Pa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Sp.getComponent(r);if(o!==0){let a=Mp.getComponent(r);bp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(U0.copy(Pa).applyMatrix4(bp),o)}}return t.isVector4&&(t.w=Pa.w),t.applyMatrix4(this.bindMatrixInverse)}},Go=class extends Tn{constructor(){super(),this.isBone=!0,this.type="Bone"}},hs=class extends Hn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Gn,h=Gn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Tp=new Mt,F0=new Mt,Ya=class i{constructor(e=[],t=[]){this.uuid=ps(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){lt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Mt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:F0;Tp.multiplyMatrices(a,t[r]),Tp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new hs(t,e,e,wi,di);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(lt("Skeleton: No bone found with UUID:",r),o=new Go),this.bones.push(o),this.boneInverses.push(new Mt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Ys=class extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Co=new Mt,Ap=new Mt,rc=[],Ep=new xi,O0=new Mt,La=new tt,Na=new Li,Ka=class extends tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ys(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,O0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Co),Ep.copy(e.boundingBox).applyMatrix4(Co),this.boundingBox.union(Ep)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Co),Na.copy(e.boundingSphere).applyMatrix4(Co),this.boundingSphere.union(Na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(La.geometry=this.geometry,La.material=this.material,La.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(n),e.ray.intersectsSphere(Na)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Co),Ap.multiplyMatrices(n,Co),La.matrixWorld=Ap,La.raycast(e,rc);for(let o=0,a=rc.length;o<a;o++){let l=rc[o];l.instanceId=r,l.object=this,t.push(l)}rc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new hs(new Float32Array(s*this.count),s,this.count,Qc,di));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},kr=new Li,B0=new Me(.5,.5),oc=new F,Sr=class{constructor(e=new Pi,t=new Pi,n=new Pi,s=new Pi,r=new Pi,o=new Pi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$i,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],M=r[9],m=r[10],g=r[11],v=r[12],A=r[13],S=r[14],C=r[15];if(s[0].setComponents(c-o,f-h,g-p,C-v).normalize(),s[1].setComponents(c+o,f+h,g+p,C+v).normalize(),s[2].setComponents(c+a,f+u,g+M,C+A).normalize(),s[3].setComponents(c-a,f-u,g-M,C-A).normalize(),n)s[4].setComponents(l,d,m,S).normalize(),s[5].setComponents(c-l,f-d,g-m,C-S).normalize();else if(s[4].setComponents(c-l,f-d,g-m,C-S).normalize(),t===$i)s[5].setComponents(c+l,f+d,g+m,C+S).normalize();else if(t===Uo)s[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){kr.center.set(0,0,0);let t=B0.distanceTo(e.center);return kr.radius=.7071067811865476+t,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(oc.x=s.normal.x>0?e.max.x:e.min.x,oc.y=s.normal.y>0?e.max.y:e.min.y,oc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Rp=new Mt,Ec=class i{constructor(){this.coordinateSystem=$i,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Rp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Sr),n[s].setFromProjectionMatrix(Rp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Sr),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Ho=class extends yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Rc=new F,Cc=new F,Cp=new Mt,Da=new Mr,ac=new Li,Iu=new F,Ip=new F,qr=class extends Tn{constructor(e=new ln,t=new Ho){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Rc.fromBufferAttribute(t,s-1),Cc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Rc.distanceTo(Cc);e.setAttribute("lineDistance",new an(n,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(s),ac.radius+=r,e.ray.intersectsSphere(ac)===!1)return;Cp.copy(s).invert(),Da.copy(e.ray).applyMatrix4(Cp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let M=f,m=p-1;M<m;M+=c){let g=h.getX(M),v=h.getX(M+1),A=lc(this,e,Da,l,g,v,M);A&&t.push(A)}if(this.isLineLoop){let M=h.getX(p-1),m=h.getX(f),g=lc(this,e,Da,l,M,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let M=f,m=p-1;M<m;M+=c){let g=lc(this,e,Da,l,M,M+1,M);g&&t.push(g)}if(this.isLineLoop){let M=lc(this,e,Da,l,p-1,f,p-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lc(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Rc.fromBufferAttribute(a,s),Cc.fromBufferAttribute(a,r),t.distanceSqToSegment(Rc,Cc,Iu,Ip)>n)return;Iu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Iu);if(!(c<e.near||c>e.far))return{distance:c,point:Ip.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Pp=new F,Lp=new F,Za=class extends qr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Pp.fromBufferAttribute(t,s),Lp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Pp.distanceTo(Lp);e.setAttribute("lineDistance",new an(n,1))}else lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ja=class extends qr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Vo=class extends yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Np=new Mt,Gu=new Mr,cc=new Li,hc=new F,br=class extends Tn{constructor(e=new ln,t=new Vo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(s),cc.radius+=r,e.ray.intersectsSphere(cc)===!1)return;Np.copy(s).invert(),Gu.copy(e.ray).applyMatrix4(Np);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,M=f;p<M;p++){let m=c.getX(p);hc.fromBufferAttribute(u,m),Dp(hc,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,M=f;p<M;p++)hc.fromBufferAttribute(u,p),Dp(hc,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Dp(i,e,t,n,s,r,o){let a=Gu.distanceSqToPoint(i);if(a<t){let l=new F;Gu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ja=class extends Hn{constructor(e=[],t=to,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vi=class extends Hn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ks=class extends Hn{constructor(e,t,n=fs,s,r,o,a=Gn,l=Gn,c,h=Xs,u=1){if(h!==Xs&&h!==nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},$a=class extends Ks{constructor(e,t=fs,n=to,s,r,o=Gn,a=Gn,l,c=Xs){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Qa=class extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},hi=class i extends ln{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(u,2));function p(M,m,g,v,A,S,C,T,x,b,z){let N=S/x,O=C/b,W=S/2,Z=C/2,P=T/2,q=x+1,Y=b+1,ee=0,re=0,ne=new F;for(let ce=0;ce<Y;ce++){let _e=ce*O-Z;for(let Fe=0;Fe<q;Fe++){let He=Fe*N-W;ne[M]=He*v,ne[m]=_e*A,ne[g]=P,c.push(ne.x,ne.y,ne.z),ne[M]=0,ne[m]=0,ne[g]=T>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Fe/x),u.push(1-ce/b),ee+=1}}for(let ce=0;ce<b;ce++)for(let _e=0;_e<x;_e++){let Fe=d+_e+q*ce,He=d+_e+q*(ce+1),ie=d+(_e+1)+q*(ce+1),we=d+(_e+1)+q*ce;l.push(Fe,He,we),l.push(He,ie,we),re+=6}a.addGroup(f,re,z),f+=re,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Wo=class i extends ln{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new F,h=new Me;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new an(o,3)),this.setAttribute("normal",new an(a,3)),this.setAttribute("uv",new an(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Nn=class i extends ln{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,M=[],m=n/2,g=0;v(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new an(u,3)),this.setAttribute("normal",new an(d,3)),this.setAttribute("uv",new an(f,2));function v(){let S=new F,C=new F,T=0,x=(t-e)/n;for(let b=0;b<=r;b++){let z=[],N=b/r,O=N*(t-e)+e;for(let W=0;W<=s;W++){let Z=W/s,P=Z*l+a,q=Math.sin(P),Y=Math.cos(P);C.x=O*q,C.y=-N*n+m,C.z=O*Y,u.push(C.x,C.y,C.z),S.set(q,x,Y).normalize(),d.push(S.x,S.y,S.z),f.push(Z,1-N),z.push(p++)}M.push(z)}for(let b=0;b<s;b++)for(let z=0;z<r;z++){let N=M[z][b],O=M[z+1][b],W=M[z+1][b+1],Z=M[z][b+1];(e>0||z!==0)&&(h.push(N,O,Z),T+=3),(t>0||z!==r-1)&&(h.push(O,W,Z),T+=3)}c.addGroup(g,T,0),g+=T}function A(S){let C=p,T=new Me,x=new F,b=0,z=S===!0?e:t,N=S===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*N,0),d.push(0,N,0),f.push(.5,.5),p++;let O=p;for(let W=0;W<=s;W++){let P=W/s*l+a,q=Math.cos(P),Y=Math.sin(P);x.x=z*Y,x.y=m*N,x.z=z*q,u.push(x.x,x.y,x.z),d.push(0,N,0),T.x=q*.5+.5,T.y=Y*.5*N+.5,f.push(T.x,T.y),p++}for(let W=0;W<s;W++){let Z=C+W,P=O+W;S===!0?h.push(P,P+1,Z):h.push(P+1,P,Z),b+=3}c.addGroup(g,b,S===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){lt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Me:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],o=[],a=new F,l=new Mt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Bt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Bt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Xo=class extends ui{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ic=class extends Xo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ed(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Up=new F,Fp=new F,Pu=new Ed,Lu=new Ed,Nu=new Ed,Pc=class extends ui{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Fp.subVectors(s[0],s[1]).add(s[0]),c=Fp);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Up.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Up),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),M=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);M<1e-4&&(M=1),p<1e-4&&(p=M),m<1e-4&&(m=M),Pu.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,M,m),Lu.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,M,m),Nu.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,M,m)}else this.curveType==="catmullrom"&&(Pu.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Lu.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Nu.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Pu.calc(l),Lu.calc(l),Nu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Op(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function z0(i,e){let t=1-i;return t*t*e}function k0(i,e){return 2*(1-i)*i*e}function G0(i,e){return i*i*e}function za(i,e,t,n){return z0(i,e)+k0(i,t)+G0(i,n)}function H0(i,e){let t=1-i;return t*t*t*e}function V0(i,e){let t=1-i;return 3*t*t*i*e}function W0(i,e){return 3*(1-i)*i*i*e}function X0(i,e){return i*i*i*e}function ka(i,e,t,n,s){return H0(i,e)+V0(i,t)+W0(i,n)+X0(i,s)}var el=class extends ui{constructor(e=new Me,t=new Me,n=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Me){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ka(e,s.x,r.x,o.x,a.x),ka(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lc=class extends ui{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ka(e,s.x,r.x,o.x,a.x),ka(e,s.y,r.y,o.y,a.y),ka(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},tl=class extends ui{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nc=class extends ui{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nl=class extends ui{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(za(e,s.x,r.x,o.x),za(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},il=class extends ui{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(za(e,s.x,r.x,o.x),za(e,s.y,r.y,o.y),za(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sl=class extends ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Op(a,l.x,c.x,h.x,u.x),Op(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Me().fromArray(s))}return this}},Dc=Object.freeze({__proto__:null,ArcCurve:Ic,CatmullRomCurve3:Pc,CubicBezierCurve:el,CubicBezierCurve3:Lc,EllipseCurve:Xo,LineCurve:tl,LineCurve3:Nc,QuadraticBezierCurve:nl,QuadraticBezierCurve3:il,SplineCurve:sl}),Uc=class extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Dc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},rl=class extends Uc{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new tl(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new nl(this.currentPoint.clone(),new Me(e,t),new Me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new el(this.currentPoint.clone(),new Me(e,t),new Me(n,s),new Me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new sl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Xo(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Hi=class extends rl{constructor(e){super(e),this.uuid=ps(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new rl().fromJSON(s))}return this}};function q0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Om(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=j0(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,u=l;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ol(r,o,t,a,l,c,0),o}function Om(i,e,t,n,s){let r;if(s===l_(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Bp(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Bp(o/n|0,i[o],i[o+1],r);return r&&qo(r,r.next)&&(ll(r),r=r.next),r}function Yr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(qo(t,t.next)||Ln(t.prev,t,t.next)===0)){if(ll(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ol(i,e,t,n,s,r,o){if(!i)return;!o&&r&&n_(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?K0(i,n,s,r):Y0(i)){e.push(l.i,i.i,c.i),ll(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Z0(Yr(i),e),ol(i,e,t,n,s,r,2)):o===2&&J0(i,e,t,n,s,r):ol(Yr(i),e,t,n,s,r,1);break}}}function Y0(i){let e=i.prev,t=i,n=i.next;if(Ln(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Ua(s,a,r,l,o,c,p.x,p.y)&&Ln(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function K0(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ln(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),M=Math.max(a,l,c),m=Math.max(h,u,d),g=Hu(f,p,e,t,n),v=Hu(M,m,e,t,n),A=i.prevZ,S=i.nextZ;for(;A&&A.z>=g&&S&&S.z<=v;){if(A.x>=f&&A.x<=M&&A.y>=p&&A.y<=m&&A!==s&&A!==o&&Ua(a,h,l,u,c,d,A.x,A.y)&&Ln(A.prev,A,A.next)>=0||(A=A.prevZ,S.x>=f&&S.x<=M&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&Ua(a,h,l,u,c,d,S.x,S.y)&&Ln(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;A&&A.z>=g;){if(A.x>=f&&A.x<=M&&A.y>=p&&A.y<=m&&A!==s&&A!==o&&Ua(a,h,l,u,c,d,A.x,A.y)&&Ln(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;S&&S.z<=v;){if(S.x>=f&&S.x<=M&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&Ua(a,h,l,u,c,d,S.x,S.y)&&Ln(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Z0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!qo(n,s)&&zm(n,t,t.next,s)&&al(n,s)&&al(s,n)&&(e.push(n.i,t.i,s.i),ll(t),ll(t.next),t=i=s),t=t.next}while(t!==i);return Yr(t)}function J0(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&r_(o,a)){let l=km(o,a);o=Yr(o,o.next),l=Yr(l,l.next),ol(o,e,t,n,s,r,0),ol(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function j0(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Om(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(s_(c))}s.sort($0);for(let r=0;r<s.length;r++)t=Q0(s[r],t);return t}function $0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Q0(i,e){let t=e_(i,e);if(!t)return e;let n=km(t,i);return Yr(n,n.next),Yr(t,t.next)}function e_(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(qo(i,t))return t;do{if(qo(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Bm(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);al(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&t_(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function t_(i,e){return Ln(i.prev,i,e.prev)<0&&Ln(e.next,i,i.next)<0}function n_(i,e,t,n){let s=i;do s.z===0&&(s.z=Hu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,i_(s)}function i_(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Hu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function s_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Bm(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Ua(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Bm(i,e,t,n,s,r,o,a)}function r_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!o_(i,e)&&(al(i,e)&&al(e,i)&&a_(i,e)&&(Ln(i.prev,i,e.prev)||Ln(i,e.prev,e))||qo(i,e)&&Ln(i.prev,i,i.next)>0&&Ln(e.prev,e,e.next)>0)}function Ln(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function qo(i,e){return i.x===e.x&&i.y===e.y}function zm(i,e,t,n){let s=dc(Ln(i,e,t)),r=dc(Ln(i,e,n)),o=dc(Ln(t,n,i)),a=dc(Ln(t,n,e));return!!(s!==r&&o!==a||s===0&&uc(i,t,e)||r===0&&uc(i,n,e)||o===0&&uc(t,i,n)||a===0&&uc(t,e,n))}function uc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function dc(i){return i>0?1:i<0?-1:0}function o_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&zm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function al(i,e){return Ln(i.prev,i,i.next)<0?Ln(i,e,i.next)>=0&&Ln(i,i.prev,e)>=0:Ln(i,e,i.prev)<0||Ln(i,i.next,e)<0}function a_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function km(i,e){let t=Vu(i.i,i.x,i.y),n=Vu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Bp(i,e,t,n){let s=Vu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ll(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function l_(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Wu=class{static triangulate(e,t,n=2){return q0(e,t,n)}},ys=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];zp(e),kp(n,e);let o=e.length;t.forEach(zp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,kp(n,t[l]);let a=Wu.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function zp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function kp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var wr=class i extends ln{constructor(e=new Hi([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new an(s,3)),this.setAttribute("uv",new an(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:c_,A,S=!1,C,T,x,b;if(g){A=g.getSpacedPoints(h),S=!0,d=!1;let ye=g.isCatmullRomCurve3?g.closed:!1;C=g.computeFrenetFrames(h,ye),T=new F,x=new F,b=new F}d||(m=0,f=0,p=0,M=0);let z=a.extractPoints(c),N=z.shape,O=z.holes;if(!ys.isClockWise(N)){N=N.reverse();for(let ye=0,de=O.length;ye<de;ye++){let De=O[ye];ys.isClockWise(De)&&(O[ye]=De.reverse())}}function Z(ye){let De=10000000000000001e-36,We=ye[0];for(let Pe=1;Pe<=ye.length;Pe++){let _t=Pe%ye.length,Ze=ye[_t],ot=Ze.x-We.x,it=Ze.y-We.y,zt=ot*ot+it*it,H=Math.max(Math.abs(Ze.x),Math.abs(Ze.y),Math.abs(We.x),Math.abs(We.y)),jt=De*H*H;if(zt<=jt){ye.splice(_t,1),Pe--;continue}We=Ze}}Z(N),O.forEach(Z);let P=O.length,q=N;for(let ye=0;ye<P;ye++){let de=O[ye];N=N.concat(de)}function Y(ye,de,De){return de||yt("ExtrudeGeometry: vec does not exist"),ye.clone().addScaledVector(de,De)}let ee=N.length;function re(ye,de,De){let We,Pe,_t,Ze=ye.x-de.x,ot=ye.y-de.y,it=De.x-ye.x,zt=De.y-ye.y,H=Ze*Ze+ot*ot,jt=Ze*zt-ot*it;if(Math.abs(jt)>Number.EPSILON){let ut=Math.sqrt(H),xt=Math.sqrt(it*it+zt*zt),Ue=de.x-ot/ut,gn=de.y+Ze/ut,at=De.x-zt/xt,dt=De.y+it/xt,I=((at-Ue)*zt-(dt-gn)*it)/(Ze*zt-ot*it);We=Ue+Ze*I-ye.x,Pe=gn+ot*I-ye.y;let w=We*We+Pe*Pe;if(w<=2)return new Me(We,Pe);_t=Math.sqrt(w/2)}else{let ut=!1;Ze>Number.EPSILON?it>Number.EPSILON&&(ut=!0):Ze<-Number.EPSILON?it<-Number.EPSILON&&(ut=!0):Math.sign(ot)===Math.sign(zt)&&(ut=!0),ut?(We=-ot,Pe=Ze,_t=Math.sqrt(H)):(We=Ze,Pe=ot,_t=Math.sqrt(H/2))}return new Me(We/_t,Pe/_t)}let ne=[];for(let ye=0,de=q.length,De=de-1,We=ye+1;ye<de;ye++,De++,We++)De===de&&(De=0),We===de&&(We=0),ne[ye]=re(q[ye],q[De],q[We]);let ce=[],_e,Fe=ne.concat();for(let ye=0,de=P;ye<de;ye++){let De=O[ye];_e=[];for(let We=0,Pe=De.length,_t=Pe-1,Ze=We+1;We<Pe;We++,_t++,Ze++)_t===Pe&&(_t=0),Ze===Pe&&(Ze=0),_e[We]=re(De[We],De[_t],De[Ze]);ce.push(_e),Fe=Fe.concat(_e)}let He;if(m===0)He=ys.triangulateShape(q,O);else{let ye=[],de=[];for(let De=0;De<m;De++){let We=De/m,Pe=f*Math.cos(We*Math.PI/2),_t=p*Math.sin(We*Math.PI/2)+M;for(let Ze=0,ot=q.length;Ze<ot;Ze++){let it=Y(q[Ze],ne[Ze],_t);ze(it.x,it.y,-Pe),We===0&&ye.push(it)}for(let Ze=0,ot=P;Ze<ot;Ze++){let it=O[Ze];_e=ce[Ze];let zt=[];for(let H=0,jt=it.length;H<jt;H++){let ut=Y(it[H],_e[H],_t);ze(ut.x,ut.y,-Pe),We===0&&zt.push(ut)}We===0&&de.push(zt)}}He=ys.triangulateShape(ye,de)}let ie=He.length,we=p+M;for(let ye=0;ye<ee;ye++){let de=d?Y(N[ye],Fe[ye],we):N[ye];S?(x.copy(C.normals[0]).multiplyScalar(de.x),T.copy(C.binormals[0]).multiplyScalar(de.y),b.copy(A[0]).add(x).add(T),ze(b.x,b.y,b.z)):ze(de.x,de.y,0)}for(let ye=1;ye<=h;ye++)for(let de=0;de<ee;de++){let De=d?Y(N[de],Fe[de],we):N[de];S?(x.copy(C.normals[ye]).multiplyScalar(De.x),T.copy(C.binormals[ye]).multiplyScalar(De.y),b.copy(A[ye]).add(x).add(T),ze(b.x,b.y,b.z)):ze(De.x,De.y,u/h*ye)}for(let ye=m-1;ye>=0;ye--){let de=ye/m,De=f*Math.cos(de*Math.PI/2),We=p*Math.sin(de*Math.PI/2)+M;for(let Pe=0,_t=q.length;Pe<_t;Pe++){let Ze=Y(q[Pe],ne[Pe],We);ze(Ze.x,Ze.y,u+De)}for(let Pe=0,_t=O.length;Pe<_t;Pe++){let Ze=O[Pe];_e=ce[Pe];for(let ot=0,it=Ze.length;ot<it;ot++){let zt=Y(Ze[ot],_e[ot],We);S?ze(zt.x,zt.y+A[h-1].y,A[h-1].x+De):ze(zt.x,zt.y,u+De)}}}Ge(),$e();function Ge(){let ye=s.length/3;if(d){let de=0,De=ee*de;for(let We=0;We<ie;We++){let Pe=He[We];un(Pe[2]+De,Pe[1]+De,Pe[0]+De)}de=h+m*2,De=ee*de;for(let We=0;We<ie;We++){let Pe=He[We];un(Pe[0]+De,Pe[1]+De,Pe[2]+De)}}else{for(let de=0;de<ie;de++){let De=He[de];un(De[2],De[1],De[0])}for(let de=0;de<ie;de++){let De=He[de];un(De[0]+ee*h,De[1]+ee*h,De[2]+ee*h)}}n.addGroup(ye,s.length/3-ye,0)}function $e(){let ye=s.length/3,de=0;me(q,de),de+=q.length;for(let De=0,We=O.length;De<We;De++){let Pe=O[De];me(Pe,de),de+=Pe.length}n.addGroup(ye,s.length/3-ye,1)}function me(ye,de){let De=ye.length;for(;--De>=0;){let We=De,Pe=De-1;Pe<0&&(Pe=ye.length-1);for(let _t=0,Ze=h+m*2;_t<Ze;_t++){let ot=ee*_t,it=ee*(_t+1),zt=de+We+ot,H=de+Pe+ot,jt=de+Pe+it,ut=de+We+it;rt(zt,H,jt,ut)}}}function ze(ye,de,De){l.push(ye),l.push(de),l.push(De)}function un(ye,de,De){Ct(ye),Ct(de),Ct(De);let We=s.length/3,Pe=v.generateTopUV(n,s,We-3,We-2,We-1);gt(Pe[0]),gt(Pe[1]),gt(Pe[2])}function rt(ye,de,De,We){Ct(ye),Ct(de),Ct(We),Ct(de),Ct(De),Ct(We);let Pe=s.length/3,_t=v.generateSideWallUV(n,s,Pe-6,Pe-3,Pe-2,Pe-1);gt(_t[0]),gt(_t[1]),gt(_t[3]),gt(_t[1]),gt(_t[2]),gt(_t[3])}function Ct(ye){s.push(l[ye*3+0]),s.push(l[ye*3+1]),s.push(l[ye*3+2])}function gt(ye){r.push(ye.x),r.push(ye.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return h_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Dc[s.type]().fromJSON(s)),new i(n,e.options)}},c_={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Me(r,o),new Me(a,l),new Me(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],M=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Me(o,1-l),new Me(c,1-u),new Me(d,1-p),new Me(M,1-g)]:[new Me(a,1-l),new Me(h,1-u),new Me(f,1-p),new Me(m,1-g)]}};function h_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Kr=class i extends ln{constructor(e=[new Me(0,-.5),new Me(.5,0),new Me(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Bt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new F,d=new Me,f=new F,p=new F,M=new F,m=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,f.x=g*1,f.y=-m,f.z=g*0,M.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:M.normalize(),l.push(M.x,M.y,M.z);break;default:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=M.x,f.y+=M.y,f.z+=M.z,f.normalize(),l.push(f.x,f.y,f.z),M.copy(p)}for(let v=0;v<=t;v++){let A=n+v*h*s,S=Math.sin(A),C=Math.cos(A);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*S,u.y=e[T].y,u.z=e[T].x*C,o.push(u.x,u.y,u.z),d.x=v/t,d.y=T/(e.length-1),a.push(d.x,d.y);let x=l[3*T+0]*S,b=l[3*T+1],z=l[3*T+0]*C;c.push(x,b,z)}}for(let v=0;v<t;v++)for(let A=0;A<e.length-1;A++){let S=A+v*e.length,C=S,T=S+e.length,x=S+e.length+1,b=S+1;r.push(C,T,b),r.push(x,b,T)}this.setIndex(r),this.setAttribute("position",new an(o,3)),this.setAttribute("uv",new an(a,2)),this.setAttribute("normal",new an(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Nt=class i extends ln{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],M=[],m=[];for(let g=0;g<h;g++){let v=g*d-o;for(let A=0;A<c;A++){let S=A*u-r;p.push(S,-v,0),M.push(0,0,1),m.push(A/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let A=v+c*g,S=v+c*(g+1),C=v+1+c*(g+1),T=v+1+c*g;f.push(A,S,T),f.push(S,C,T)}this.setIndex(f),this.setAttribute("position",new an(p,3)),this.setAttribute("normal",new an(M,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Yo=class i extends ln{constructor(e=new Hi([new Me(0,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new an(s,3)),this.setAttribute("normal",new an(r,3)),this.setAttribute("uv",new an(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,p=d.holes;ys.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let v=p[m];ys.isClockWise(v)===!0&&(p[m]=v.reverse())}let M=ys.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let v=p[m];f=f.concat(v)}for(let m=0,g=f.length;m<g;m++){let v=f[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,g=M.length;m<g;m++){let v=M[m],A=v[0]+u,S=v[1]+u,C=v[2]+u;n.push(A,S,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return u_(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function u_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var us=class i extends ln{constructor(e=new il(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new F,l=new F,c=new Me,h=new F,u=[],d=[],f=[],p=[];M(),this.setIndex(p),this.setAttribute("position",new an(u,3)),this.setAttribute("normal",new an(d,3)),this.setAttribute("uv",new an(f,2));function M(){for(let A=0;A<t;A++)m(A);m(r===!1?t:0),v(),g()}function m(A){h=e.getPointAt(A/t,h);let S=o.normals[A],C=o.binormals[A];for(let T=0;T<=s;T++){let x=T/s*Math.PI*2,b=Math.sin(x),z=-Math.cos(x);l.x=z*S.x+b*C.x,l.y=z*S.y+b*C.y,l.z=z*S.z+b*C.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let A=1;A<=t;A++)for(let S=1;S<=s;S++){let C=(s+1)*(A-1)+(S-1),T=(s+1)*A+(S-1),x=(s+1)*A+S,b=(s+1)*(A-1)+S;p.push(C,T,b),p.push(T,x,b)}}function v(){for(let A=0;A<=t;A++)for(let S=0;S<=s;S++)c.x=A/t,c.y=S/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Dc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function so(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Gp(s))s.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Gp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function fi(i){let e={};for(let t=0;t<i.length;t++){let n=so(i[t]);for(let s in n)e[s]=n[s]}return e}function Gp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function d_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Wt.workingColorSpace}var Gm={clone:so,merge:fi},f_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vi=class extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f_,this.fragmentShader=p_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=d_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(s.value);break;case"v2":this.uniforms[n].value=new Me().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new hn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fc=class extends Vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ct=class extends yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nh,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pn=class extends ct{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Gr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Gr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ko=class extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oc=class extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function mr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Fa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function m_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Hp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function g_(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Ss=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Bc=class extends Ss{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bu,endingEnd:Bu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zu:r=e,a=2*t-n;break;case ku:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zu:o=e,l=2*n-t;break;case ku:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),M=p*p,m=M*p,g=-d*m+2*d*M-d*p,v=(1+d)*m+(-1.5-2*d)*M+(-.5+d)*p+1,A=(-1-f)*m+(1.5+f)*M+.5*p,S=f*m-f*M;for(let C=0;C!==a;++C)r[C]=g*o[h+C]+v*o[c+C]+A*o[l+C]+S*o[u+C];return r}},zc=class extends Ss{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},kc=class extends Ss{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gc=class extends Ss{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(s-t),M=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*M+o[l+m]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let M=o[c+p],m=o[l+p],g=f*d+p*2,v=u[g],A=u[g+1],S=e*d+p*2,C=h[S],T=h[S+1],x=x_(n,t,v,C,s);r[p]=Hm(x,M,A,T,m)}return r}};function Hm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function __(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function x_(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Hm(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=__(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Ni=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mr(t,this.TimeBufferType),this.values=mr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:mr(e.times,Array),values:mr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Fa(e.settings)&&(n.settings={inTangents:mr(e.settings.inTangents,Array),outTangents:mr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Gc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Hr:t=this.InterpolantFactoryMethodDiscrete;break;case Vr:t=this.InterpolantFactoryMethodLinear;break;case mc:t=this.InterpolantFactoryMethodSmooth;break;case Ou:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return lt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hr;case this.InterpolantFactoryMethodLinear:return Vr;case this.InterpolantFactoryMethodSmooth:return mc;case this.InterpolantFactoryMethodBezier:return Ou}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Fa(this.settings)&&(Vp(this.settings.inTangents,e),Vp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Fa(this.settings)&&(Wp(this.settings.inTangents,e),Wp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(yt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(yt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){yt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){yt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Qg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){yt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===mc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let M=t[u+p];if(M!==t[d+p]||M!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Fa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Vp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Wp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Ni.prototype.ValueTypeName="";Ni.prototype.TimeBufferType=Float32Array;Ni.prototype.ValueBufferType=Float32Array;Ni.prototype.DefaultInterpolation=Vr;var Zs=class extends Ni{constructor(e,t,n){super(e,t,n)}};Zs.prototype.ValueTypeName="bool";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Hr;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}};cl.prototype.ValueTypeName="color";var Js=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}};Js.prototype.ValueTypeName="number";var Hc=class extends Ss{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)_i.slerpFlat(r,0,o,c-a,o,c,l);return r}},js=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}};js.prototype.ValueTypeName="quaternion";js.prototype.InterpolantFactoryMethodSmooth=void 0;var $s=class extends Ni{constructor(e,t,n){super(e,t,n)}};$s.prototype.ValueTypeName="string";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Hr;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;var Tr=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}};Tr.prototype.ValueTypeName="vector";var hl=class{constructor(e="",t=-1,n=[],s=Sm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ps(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(v_(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Ni.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=m_(l);l=Hp(l,1,h),c=Hp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Js(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function y_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Js;case"vector":case"vector2":case"vector3":case"vector4":return Tr;case"color":return cl;case"quaternion":return js;case"bool":case"boolean":return Zs;case"string":return $s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function v_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=y_(i.type);if(i.times===void 0){let n=[],s=[];g_(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Fa(i.settings)&&(t.settings={inTangents:mr(i.settings.inTangents,Float32Array),outTangents:mr(i.settings.outTangents,Float32Array)}),t}var vs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Xp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Xp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Xp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Vc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vm=new Vc,ds=class{constructor(e){this.manager=e!==void 0?e:Vm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ds.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gs={},Xu=class extends Error{constructor(e,t){super(e),this.response=t}},Zr=class extends ds{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=vs.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Gs[e]!==void 0){Gs[e].push({onLoad:t,onProgress:n,onError:s});return}Gs[e]=[],Gs[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&lt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Gs[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,M=0,m=new ReadableStream({start(g){v();function v(){u.read().then(({done:A,value:S})=>{if(A)g.close();else{M+=S.byteLength;let C=new ProgressEvent("progress",{lengthComputable:p,loaded:M,total:f});for(let T=0,x=h.length;T<x;T++){let b=h[T];b.onProgress&&b.onProgress(C)}g.enqueue(S),v()}},A=>{g.error(A)})}}});return new Response(m)}else throw new Xu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{vs.add(`file:${e}`,c);let h=Gs[e];delete Gs[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Gs[e];if(h===void 0)throw this.manager.itemError(e),c;delete Gs[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Io=new WeakMap,Wc=class extends ds{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=vs.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Io.get(o);u===void 0&&(u=[],Io.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Fo("img");function l(){h(),t&&t(this);let u=Io.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Io.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),vs.remove(`image:${e}`);let d=Io.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}Io.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),vs.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var ul=class extends ds{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new hs,a=new Zr(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){s!==void 0?s(h):yt(h);return}r._applyTexData(o,c),t&&t(o,c)},n,s),o}createDataTexture(e){let t=new hs;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:ci,e.wrapT=t.wrapT!==void 0?t.wrapT:ci,e.magFilter=t.magFilter!==void 0?t.magFilter:Mn,e.minFilter=t.minFilter!==void 0?t.minFilter:Mn,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Si),t.mipmapCount===1&&(e.minFilter=Mn),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Jr=class extends ds{constructor(e){super(e)}load(e,t,n,s){let r=new Hn,o=new Wc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},jr=class extends Tn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Zo=class extends jr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Du=new Mt,qp=new F,Yp=new F,Jo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=Ui,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sr,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;qp.setFromMatrixPosition(e.matrixWorld),t.position.copy(qp),Yp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Du.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Du,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Uo||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},fc=new F,pc=new _i,xs=new F,dl=class extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fc,pc,xs),xs.x===1&&xs.y===1&&xs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fc,pc,xs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fc,pc,xs),xs.x===1&&xs.y===1&&xs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fc,pc,xs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},pr=new F,Kp=new Me,Zp=new Me,kn=class extends dl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,t){return this.getViewBounds(e,Kp,Zp),t.subVectors(Zp,Kp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qu=class extends Jo{constructor(){super(new kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Wr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Qs=class extends jr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new qu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Yu=class extends Jo{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0}},er=class extends jr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},$r=class extends dl{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ku=class extends Jo{constructor(){super(new $r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bs=class extends jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new Ku}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var tr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Uu=new WeakMap,fl=class extends ds{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&lt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&lt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=vs.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Uu.has(o)===!0?(s&&s(Uu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return vs.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Uu.set(l,c),vs.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});vs.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Po=-90,Lo=1,jo=class extends Tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kn(Po,Lo,e,t);s.layers=this.layers,this.add(s);let r=new kn(Po,Lo,e,t);r.layers=this.layers,this.add(r);let o=new kn(Po,Lo,e,t);o.layers=this.layers,this.add(o);let a=new kn(Po,Lo,e,t);a.layers=this.layers,this.add(a);let l=new kn(Po,Lo,e,t);l.layers=this.layers,this.add(l);let c=new kn(Po,Lo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===$i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Xc=class extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Cd="\\[\\]\\.:\\/",M_=new RegExp("["+Cd+"]","g"),Id="[^"+Cd+"]",S_="[^"+Cd.replace("\\.","")+"]",b_=/((?:WC+[\/:])*)/.source.replace("WC",Id),w_=/(WCOD+)?/.source.replace("WCOD",S_),T_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Id),A_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Id),E_=new RegExp("^"+b_+w_+T_+A_+"$"),R_=["material","materials","bones","map"],Zu=class{constructor(e,t,n){let s=n||vn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(M_,"")}static parseTrackName(e){let t=E_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);R_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;yt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vn.Composite=Zu;vn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vn.prototype.GetterByBindingType=[vn.prototype._getValue_direct,vn.prototype._getValue_array,vn.prototype._getValue_arrayElement,vn.prototype._getValue_toArray];vn.prototype.SetterByBindingTypeAndVersioning=[[vn.prototype._setValue_direct,vn.prototype._setValue_direct_setNeedsUpdate,vn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vn.prototype._setValue_array,vn.prototype._setValue_array_setNeedsUpdate,vn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vn.prototype._setValue_arrayElement,vn.prototype._setValue_arrayElement_setNeedsUpdate,vn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vn.prototype._setValue_fromArray,vn.prototype._setValue_fromArray_setNeedsUpdate,vn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kS=new Float32Array(1);var Jp=new Mt,$o=class{constructor(e,t,n=0,s=1/0){this.ray=new Mr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):yt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jp),this}intersectObject(e,t=!0,n=[]){return Ju(e,this,n,t),n.sort(jp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ju(e[s],this,n,t);return n.sort(jp),n}};function jp(i,e){return i.distance-e.distance}function Ju(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Ju(r[o],e,t,!0)}}var Fd=class Fd{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Fd.prototype.isMatrix2=!0;var ju=Fd;function Pd(i,e,t,n){let s=C_(n);switch(t){case md:return i*e;case Qc:return i*e/s.components*s.byteLength;case eh:return i*e/s.components*s.byteLength;case Er:return i*e*2/s.components*s.byteLength;case th:return i*e*2/s.components*s.byteLength;case gd:return i*e*3/s.components*s.byteLength;case wi:return i*e*4/s.components*s.byteLength;case nh:return i*e*4/s.components*s.byteLength;case pl:case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gl:case _l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sh:case oh:return Math.max(i,16)*Math.max(e,8)/4;case ih:case rh:return Math.max(i,8)*Math.max(e,8)/2;case ah:case lh:case hh:case uh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ch:case xl:case dh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case mh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case gh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _h:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case yh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Th:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Eh:case Rh:case Ch:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ih:case Ph:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yl:case Lh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function C_(i){switch(i){case Ui:case ud:return{byteLength:1,components:1};case sa:case dd:case bi:return{byteLength:2,components:1};case jc:case $c:return{byteLength:2,components:4};case fs:case Jc:case di:return{byteLength:4,components:1};case fd:case pd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ug(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function P_(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],M=u[f];M.start<=p.start+p.count+1?p.count=Math.max(p.count,M.start+M.count-p.start):(++d,u[d]=M)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let M=u[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var L_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N_=`#ifdef USE_ALPHAHASH
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
#endif`,D_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B_=`#ifdef USE_AOMAP
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
#endif`,z_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k_=`#ifdef USE_BATCHING
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
#endif`,G_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,X_=`#ifdef USE_IRIDESCENCE
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
#endif`,q_=`#ifdef USE_BUMPMAP
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
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Q_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,tx=`#define PI 3.141592653589793
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
} // validated`,nx=`vec3 transformedNormal = objectNormal;
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
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ox=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",lx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xx=`#ifdef USE_GRADIENTMAP
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
}`,yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bx=`#ifdef USE_ENVMAP
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
#endif`,wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rx=`PhysicalMaterial material;
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
#endif`,Cx=`uniform sampler2D dfgLUT;
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
}`,Ix=`
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
#endif`,Px=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nx=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ux=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gx=`#if defined( USE_POINTS_UV )
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
#endif`,Hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xx=`#if defined( USE_MORPHCOLORS )
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
#endif`,qx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yx=`#ifdef USE_MORPHTARGETS
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
#endif`,Kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ey=`#ifdef USE_NORMALMAP
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
#endif`,ty=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ay=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ly=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,my=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gy=`float getShadowMask() {
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
}`,_y=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xy=`#ifdef USE_SKINNING
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
#endif`,yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vy=`#ifdef USE_SKINNING
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
#endif`,My=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,by=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ty=`#ifdef USE_TRANSMISSION
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
#endif`,Ay=`#ifdef USE_TRANSMISSION
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
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ly=`uniform sampler2D t2D;
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
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dy=`uniform float backgroundBlurriness;
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
}`,Uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oy=`#include <common>
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
}`,By=`#if DEPTH_PACKING == 3200
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
}`,zy=`#define DISTANCE
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
}`,ky=`#define DISTANCE
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
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`uniform float scale;
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
}`,Wy=`uniform vec3 diffuse;
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
}`,Xy=`#include <common>
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
}`,qy=`uniform vec3 diffuse;
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
}`,Yy=`#define LAMBERT
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
}`,Ky=`#define LAMBERT
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
}`,Zy=`#define MATCAP
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
}`,Jy=`#define MATCAP
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
}`,jy=`#define NORMAL
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
}`,$y=`#define NORMAL
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
}`,Qy=`#define PHONG
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
}`,ev=`#define PHONG
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
}`,tv=`#define STANDARD
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
}`,nv=`#define STANDARD
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
}`,iv=`#define TOON
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
}`,sv=`#define TOON
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
}`,rv=`uniform float size;
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
}`,ov=`uniform vec3 diffuse;
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
}`,av=`#include <common>
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
}`,lv=`uniform vec3 color;
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
}`,cv=`uniform float rotation;
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
}`,hv=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:L_,alphahash_pars_fragment:N_,alphamap_fragment:D_,alphamap_pars_fragment:U_,alphatest_fragment:F_,alphatest_pars_fragment:O_,aomap_fragment:B_,aomap_pars_fragment:z_,batching_pars_vertex:k_,batching_vertex:G_,begin_vertex:H_,beginnormal_vertex:V_,bsdfs:W_,iridescence_fragment:X_,bumpmap_pars_fragment:q_,clipping_planes_fragment:Y_,clipping_planes_pars_fragment:K_,clipping_planes_pars_vertex:Z_,clipping_planes_vertex:J_,color_fragment:j_,color_pars_fragment:$_,color_pars_vertex:Q_,color_vertex:ex,common:tx,defaultnormal_vertex:nx,displacementmap_pars_vertex:ix,displacementmap_vertex:sx,emissivemap_fragment:rx,emissivemap_pars_fragment:ox,colorspace_fragment:ax,colorspace_pars_fragment:lx,envmap_fragment:cx,envmap_common_pars_fragment:hx,envmap_pars_fragment:ux,envmap_pars_vertex:dx,envmap_physical_pars_fragment:bx,envmap_vertex:fx,fog_vertex:px,fog_pars_vertex:mx,fog_fragment:gx,fog_pars_fragment:_x,gradientmap_pars_fragment:xx,lightmap_pars_fragment:yx,lights_lambert_fragment:vx,lights_lambert_pars_fragment:Mx,lights_pars_begin:Sx,lights_toon_fragment:wx,lights_toon_pars_fragment:Tx,lights_phong_fragment:Ax,lights_phong_pars_fragment:Ex,lights_physical_fragment:Rx,lights_physical_pars_fragment:Cx,lights_fragment_begin:Ix,lights_fragment_maps:Px,lights_fragment_end:Lx,lightprobes_pars_fragment:Nx,logdepthbuf_fragment:Dx,logdepthbuf_pars_fragment:Ux,logdepthbuf_pars_vertex:Fx,logdepthbuf_vertex:Ox,map_fragment:Bx,map_pars_fragment:zx,map_particle_fragment:kx,map_particle_pars_fragment:Gx,metalnessmap_fragment:Hx,metalnessmap_pars_fragment:Vx,morphinstance_vertex:Wx,morphcolor_vertex:Xx,morphnormal_vertex:qx,morphtarget_pars_vertex:Yx,morphtarget_vertex:Kx,normal_fragment_begin:Zx,normal_fragment_maps:Jx,normal_pars_fragment:jx,normal_pars_vertex:$x,normal_vertex:Qx,normalmap_pars_fragment:ey,clearcoat_normal_fragment_begin:ty,clearcoat_normal_fragment_maps:ny,clearcoat_pars_fragment:iy,iridescence_pars_fragment:sy,opaque_fragment:ry,packing:oy,premultiplied_alpha_fragment:ay,project_vertex:ly,dithering_fragment:cy,dithering_pars_fragment:hy,roughnessmap_fragment:uy,roughnessmap_pars_fragment:dy,shadowmap_pars_fragment:fy,shadowmap_pars_vertex:py,shadowmap_vertex:my,shadowmask_pars_fragment:gy,skinbase_vertex:_y,skinning_pars_vertex:xy,skinning_vertex:yy,skinnormal_vertex:vy,specularmap_fragment:My,specularmap_pars_fragment:Sy,tonemapping_fragment:by,tonemapping_pars_fragment:wy,transmission_fragment:Ty,transmission_pars_fragment:Ay,uv_pars_fragment:Ey,uv_pars_vertex:Ry,uv_vertex:Cy,worldpos_vertex:Iy,background_vert:Py,background_frag:Ly,backgroundCube_vert:Ny,backgroundCube_frag:Dy,cube_vert:Uy,cube_frag:Fy,depth_vert:Oy,depth_frag:By,distance_vert:zy,distance_frag:ky,equirect_vert:Gy,equirect_frag:Hy,linedashed_vert:Vy,linedashed_frag:Wy,meshbasic_vert:Xy,meshbasic_frag:qy,meshlambert_vert:Yy,meshlambert_frag:Ky,meshmatcap_vert:Zy,meshmatcap_frag:Jy,meshnormal_vert:jy,meshnormal_frag:$y,meshphong_vert:Qy,meshphong_frag:ev,meshphysical_vert:tv,meshphysical_frag:nv,meshtoon_vert:iv,meshtoon_frag:sv,points_vert:rv,points_frag:ov,shadow_vert:av,shadow_frag:lv,sprite_vert:cv,sprite_frag:hv},Ke={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},Es={basic:{uniforms:fi([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:fi([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:fi([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:fi([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:fi([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:fi([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:fi([Ke.points,Ke.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:fi([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:fi([Ke.common,Ke.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:fi([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:fi([Ke.sprite,Ke.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:fi([Ke.common,Ke.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:fi([Ke.lights,Ke.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Es.physical={uniforms:fi([Es.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Fh={r:0,b:0,g:0},uv=new Mt,dg=new Rt;dg.set(-1,0,0,0,1,0,0,0,1);function dv(i,e,t,n,s,r){let o=new Ve(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){let S=v.backgroundBlurriness>0;A=e.get(A,S)}return A}function p(v){let A=!1,S=f(v);S===null?m(o,a):S&&S.isColor&&(m(S,1),A=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(v,A){let S=f(A);S&&S.isCubeTexture?(c===void 0&&(c=new tt(new hi(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:so(Es.backgroundCube.uniforms),vertexShader:Es.backgroundCube.vertexShader,fragmentShader:Es.backgroundCube.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(uv.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(dg),c.material.toneMapped=Wt.getTransfer(S.colorSpace)!==fn,(h!==S||u!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new tt(new Nt(2,2),new Vi({name:"BackgroundMaterial",uniforms:so(Es.background.uniforms),vertexShader:Es.background.vertexShader,fragmentShader:Es.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Wt.getTransfer(S.colorSpace)!==fn,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,A){v.getRGB(Fh,Rd(i)),t.buffers.color.setClear(Fh.r,Fh.g,Fh.b,A,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,A=1){o.set(v),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:M,dispose:g}}function fv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(O,W,Z,P,q){let Y=!1,ee=u(O,P,Z,W);r!==ee&&(r=ee,c(r.object)),Y=f(O,P,Z,q),Y&&p(O,P,Z,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(O,W,Z,P),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(O){return i.bindVertexArray(O)}function h(O){return i.deleteVertexArray(O)}function u(O,W,Z,P){let q=P.wireframe===!0,Y=n[W.id];Y===void 0&&(Y={},n[W.id]=Y);let ee=O.isInstancedMesh===!0?O.id:0,re=Y[ee];re===void 0&&(re={},Y[ee]=re);let ne=re[Z.id];ne===void 0&&(ne={},re[Z.id]=ne);let ce=ne[q];return ce===void 0&&(ce=d(l()),ne[q]=ce),ce}function d(O){let W=[],Z=[],P=[];for(let q=0;q<t;q++)W[q]=0,Z[q]=0,P[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Z,attributeDivisors:P,object:O,attributes:{},index:null}}function f(O,W,Z,P){let q=r.attributes,Y=W.attributes,ee=0,re=Z.getAttributes();for(let ne in re)if(re[ne].location>=0){let _e=q[ne],Fe=Y[ne];if(Fe===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(Fe=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(Fe=O.instanceColor)),_e===void 0||_e.attribute!==Fe||Fe&&_e.data!==Fe.data)return!0;ee++}return r.attributesNum!==ee||r.index!==P}function p(O,W,Z,P){let q={},Y=W.attributes,ee=0,re=Z.getAttributes();for(let ne in re)if(re[ne].location>=0){let _e=Y[ne];_e===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(_e=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(_e=O.instanceColor));let Fe={};Fe.attribute=_e,_e&&_e.data&&(Fe.data=_e.data),q[ne]=Fe,ee++}r.attributes=q,r.attributesNum=ee,r.index=P}function M(){let O=r.newAttributes;for(let W=0,Z=O.length;W<Z;W++)O[W]=0}function m(O){g(O,0)}function g(O,W){let Z=r.newAttributes,P=r.enabledAttributes,q=r.attributeDivisors;Z[O]=1,P[O]===0&&(i.enableVertexAttribArray(O),P[O]=1),q[O]!==W&&(i.vertexAttribDivisor(O,W),q[O]=W)}function v(){let O=r.newAttributes,W=r.enabledAttributes;for(let Z=0,P=W.length;Z<P;Z++)W[Z]!==O[Z]&&(i.disableVertexAttribArray(Z),W[Z]=0)}function A(O,W,Z,P,q,Y,ee){ee===!0?i.vertexAttribIPointer(O,W,Z,q,Y):i.vertexAttribPointer(O,W,Z,P,q,Y)}function S(O,W,Z,P){M();let q=P.attributes,Y=Z.getAttributes(),ee=W.defaultAttributeValues;for(let re in Y){let ne=Y[re];if(ne.location>=0){let ce=q[re];if(ce===void 0&&(re==="instanceMatrix"&&O.instanceMatrix&&(ce=O.instanceMatrix),re==="instanceColor"&&O.instanceColor&&(ce=O.instanceColor)),ce!==void 0){let _e=ce.normalized,Fe=ce.itemSize,He=e.get(ce);if(He===void 0)continue;let ie=He.buffer,we=He.type,Ge=He.bytesPerElement,$e=we===i.INT||we===i.UNSIGNED_INT||ce.gpuType===Jc;if(ce.isInterleavedBufferAttribute){let me=ce.data,ze=me.isInterleavedBuffer===!0?me.stride:me.itemSize,un=ce.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let rt=0;rt<ne.locationSize;rt++)g(ne.location+rt,me.meshPerAttribute);O.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let rt=0;rt<ne.locationSize;rt++)m(ne.location+rt);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let rt=0;rt<ne.locationSize;rt++)A(ne.location+rt,Fe/ne.locationSize,we,_e,ze*Ge,(un+Fe/ne.locationSize*rt)*Ge,$e)}else{if(ce.isInstancedBufferAttribute){for(let me=0;me<ne.locationSize;me++)g(ne.location+me,ce.meshPerAttribute);O.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let me=0;me<ne.locationSize;me++)m(ne.location+me);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let me=0;me<ne.locationSize;me++)A(ne.location+me,Fe/ne.locationSize,we,_e,Fe*Ge,Fe/ne.locationSize*me*Ge,$e)}}else if(ee!==void 0){let _e=ee[re];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(ne.location,_e);break;case 3:i.vertexAttrib3fv(ne.location,_e);break;case 4:i.vertexAttrib4fv(ne.location,_e);break;default:i.vertexAttrib1fv(ne.location,_e)}}}}v()}function C(){z();for(let O in n){let W=n[O];for(let Z in W){let P=W[Z];for(let q in P){let Y=P[q];for(let ee in Y)h(Y[ee].object),delete Y[ee];delete P[q]}}delete n[O]}}function T(O){if(n[O.id]===void 0)return;let W=n[O.id];for(let Z in W){let P=W[Z];for(let q in P){let Y=P[q];for(let ee in Y)h(Y[ee].object),delete Y[ee];delete P[q]}}delete n[O.id]}function x(O){for(let W in n){let Z=n[W];for(let P in Z){let q=Z[P];if(q[O.id]===void 0)continue;let Y=q[O.id];for(let ee in Y)h(Y[ee].object),delete Y[ee];delete q[O.id]}}}function b(O){for(let W in n){let Z=n[W],P=O.isInstancedMesh===!0?O.id:0,q=Z[P];if(q!==void 0){for(let Y in q){let ee=q[Y];for(let re in ee)h(ee[re].object),delete ee[re];delete q[Y]}delete Z[P],Object.keys(Z).length===0&&delete n[W]}}}function z(){N(),o=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:m,disableUnusedAttributes:v}}function pv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function mv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==wi&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Ui&&x!==di&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(lt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&lt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:M,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:S,maxSamples:C,samples:T}}function gv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Pi,a=new Rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,A=v*4,S=g.clippingState||null;l.value=S,S=h(p,d,A,f);for(let C=0;C!==A;++C)S[C]=t[C];g.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let M=u!==null?u.length:0,m=null;if(M!==0){if(m=l.value,p!==!0||m===null){let g=f+M*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let A=0,S=f;A!==M;++A,S+=4)o.copy(u[A]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}var bl=class extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ja(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hi(5,5,5),r=new Vi({name:"CubemapFromEquirect",uniforms:so(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mi,blending:Qr});r.uniforms.tEquirect.value=t;let o=new tt(s,r),a=t.minFilter;return t.minFilter===Si&&(t.minFilter=Mn),new jo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Wm=256,_v=3,xv=20,fg=256,pg=16,yv=3,vv=new F,Mv=new Ve,Rr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new jo(1,10,null),this._boxMesh=new tt(new hi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=vv}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(Mv));let m=new jo(n,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Wm,wd(e))}_fromTexture(e,t){e.mapping===to||e.mapping===na?this._setSize(e.image.length===0?Wm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Xm(e,!1,!1),n=Math.log2(e)-_v;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Xm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===to||e.mapping===na?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ym()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=qm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Sv(),this._integrationMaterial=bv());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/pg);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-yv)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(fg*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=wv());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Xm(i,e,t){return new bl(i,{minFilter:Si,generateMipmaps:e,type:bi,colorSpace:ni,depthBuffer:t})}function Tl(i,e,t){return new Vi({name:i,uniforms:e,vertexShader:Vt.cube_vert,fragmentShader:t,side:Mi,blending:Qr,depthTest:!1,depthWrite:!1})}function Sv(){return Tl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${fg}u

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
	`)}function bv(){return Tl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:pg}},`

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
	`)}function wv(){return Tl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${xv}
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
	`)}function qm(){return Tl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ym(){return Tl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Tv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Yc||f===Kc)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let M=new bl(p.height);return M.fromEquirectangularTexture(i,d),e.set(d,M),d.addEventListener("dispose",c),a(M.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Yc||f===Kc,M=f===to||f===na;if(p||M){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Rr(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return p&&v&&v.height>0||M&&v&&l(v)?(n===null&&(n=new Rr(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Yc?d.mapping=to:f===Kc&&(d.mapping=na),d}function l(d){let f=0,p=6;for(let M=0;M<p;M++)d[M]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Av(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Gr("WebGLRenderer: "+n+" extension not supported."),s}}}function Ev(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let M=r.get(p);M&&(e.remove(M),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),t.memory.geometries++),M}function h(p){let M=p.attributes;for(let m in M)e.update(M[m],i.ARRAY_BUFFER)}function u(p){let M=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=M!==null?M.array.length:m.array.length/3-1,A=m.count>=65535?Xa:Wa,S=new A(Math.ceil(v/3)*6,1),C=S.array;if(M!==null){let x=M.array;g=M.version;for(let b=0,z=0;b<v;b+=3){let N=x[b+0],O=x[b+1],W=x[b+2];C[z++]=N,C[z++]=O,C[z++]=O,C[z++]=W,C[z++]=W,C[z++]=N}}else{g=m.version;for(let x=0,b=0;x<v;x+=3){let z=x+0,N=x+1,O=x+2;C[b++]=z,C[b++]=N,C[b++]=N,C[b++]=O,C[b++]=O,C[b++]=z}}S.version=g;let T=r.get(p);T&&e.remove(T),r.set(p,S)}function d(p){let M=r.get(p);if(M){let m=p.index;m!==null&&M.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in s){let M=s[p].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Rv(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let M=0;for(let m=0;m<f;m++)M+=d[m];t.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Cv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:yt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Iv(i,e,t){let n=new WeakMap,s=new hn;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let z=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",z)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],A=0;f===!0&&(A=1),p===!0&&(A=2),M===!0&&(A=3);let S=a.attributes.position.count*A,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let T=new Float32Array(S*C*4*u),x=new Va(T,S,C,u);x.type=di,x.needsUpdate=!0;let b=A*4;for(let N=0;N<u;N++){let O=m[N],W=g[N],Z=v[N],P=S*C*4*N;for(let q=0;q<O.count;q++){let Y=q*b;f===!0&&(s.fromBufferAttribute(O,q),T[P+Y+0]=s.x,T[P+Y+1]=s.y,T[P+Y+2]=s.z,T[P+Y+3]=0),p===!0&&(s.fromBufferAttribute(W,q),T[P+Y+4]=s.x,T[P+Y+5]=s.y,T[P+Y+6]=s.z,T[P+Y+7]=0),M===!0&&(s.fromBufferAttribute(Z,q),T[P+Y+8]=s.x,T[P+Y+9]=s.y,T[P+Y+10]=s.z,T[P+Y+11]=Z.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new Me(S,C)},n.set(a,d),a.addEventListener("dispose",z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Pv(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Lv={[sd]:"LINEAR_TONE_MAPPING",[rd]:"REINHARD_TONE_MAPPING",[od]:"CINEON_TONE_MAPPING",[ta]:"ACES_FILMIC_TONE_MAPPING",[ld]:"AGX_TONE_MAPPING",[cd]:"NEUTRAL_TONE_MAPPING",[ad]:"CUSTOM_TONE_MAPPING"};function Nv(i,e,t,n,s,r){let o=new Gi(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new ln;h.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new an([0,2,0,0,2,0],2));let u=new Fc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new tt(h,u),f=new $r(-1,1,1,-1,0,1),p=null,M=null,m=!1,g,v=null,A=[],S=!1;this.setSize=function(C,T){o.setSize(C,T),a!==null&&a.setSize(C,T),l!==null&&l.setSize(C,T);for(let x=0;x<A.length;x++){let b=A[x];b.setSize&&b.setSize(C,T)}},this.setEffects=function(C){A=C,S=A.length>0&&A[0].isRenderPass===!0;let T=o.width,x=o.height;A.length>0&&a===null&&(a=new Gi(T,x,{type:bi,depthBuffer:!1,stencilBuffer:!1}),l=new Gi(T,x,{type:bi,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&A.some(z=>z.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Ks(T,x),r===!0&&(c.format=nr,c.type=io)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let z=0;z<A.length;z++){let N=A[z];N.setSize&&N.setSize(T,x),b&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(C,T){if(m||C.toneMapping===Ts&&A.length===0)return!1;if(v=T,T!==null){let x=T.width,b=T.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return S===!1&&C.setRenderTarget(o),g=C.toneMapping,C.toneMapping=Ts,!0},this.hasRenderPass=function(){return S},this.end=function(C,T){C.toneMapping=g,m=!0;let x=o,b=a;for(let z=0;z<A.length;z++){let N=A[z];N.enabled!==!1&&(N.render(C,b,x,T),N.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(p!==C.outputColorSpace||M!==C.toneMapping){p=C.outputColorSpace,M=C.toneMapping,u.defines={},Wt.getTransfer(p)===fn&&(u.defines.SRGB_TRANSFER="");let z=Lv[M];z&&(u.defines[z]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,C.setRenderTarget(v),C.render(d,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var mg=new Hn,gg=new Ks(1,1),_g=new $a(1),xg=new Va,yg=new Ac,vg=new ja,Km=[],Zm=[],Jm=new Float32Array(16),jm=new Float32Array(9),$m=new Float32Array(4);function aa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Km[s];if(r===void 0&&(r=new Float32Array(s),Km[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Yn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Bh(i,e){let t=Zm[e];t===void 0&&(t=new Int32Array(e),Zm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;i.uniform2fv(this.addr,e),Kn(t,e)}}function Fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yn(t,e))return;i.uniform3fv(this.addr,e),Kn(t,e)}}function Ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;i.uniform4fv(this.addr,e),Kn(t,e)}}function Bv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kn(t,e)}else{if(Yn(t,n))return;$m.set(n),i.uniformMatrix2fv(this.addr,!1,$m),Kn(t,n)}}function zv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kn(t,e)}else{if(Yn(t,n))return;jm.set(n),i.uniformMatrix3fv(this.addr,!1,jm),Kn(t,n)}}function kv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kn(t,e)}else{if(Yn(t,n))return;Jm.set(n),i.uniformMatrix4fv(this.addr,!1,Jm),Kn(t,n)}}function Gv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;i.uniform2iv(this.addr,e),Kn(t,e)}}function Vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yn(t,e))return;i.uniform3iv(this.addr,e),Kn(t,e)}}function Wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;i.uniform4iv(this.addr,e),Kn(t,e)}}function Xv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;i.uniform2uiv(this.addr,e),Kn(t,e)}}function Yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yn(t,e))return;i.uniform3uiv(this.addr,e),Kn(t,e)}}function Kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;i.uniform4uiv(this.addr,e),Kn(t,e)}}function zh(i){return i.version===0&&(i.compareFunction=vd,i.needsUpdate=!0),i}function Zv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=zh(gg):r=mg,t.setTexture2D(e||r,s)}function Jv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||yg,s)}function jv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=zh(_g):r=vg,t.setTextureCube(e||r,s)}function $v(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||xg,s)}function Qv(i){switch(i){case 5126:return Dv;case 35664:return Uv;case 35665:return Fv;case 35666:return Ov;case 35674:return Bv;case 35675:return zv;case 35676:return kv;case 5124:case 35670:return Gv;case 35667:case 35671:return Hv;case 35668:case 35672:return Vv;case 35669:case 35673:return Wv;case 5125:return Xv;case 36294:return qv;case 36295:return Yv;case 36296:return Kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return $v}}function eM(i,e){i.uniform1fv(this.addr,e)}function tM(i,e){let t=aa(e,this.size,2);i.uniform2fv(this.addr,t)}function nM(i,e){let t=aa(e,this.size,3);i.uniform3fv(this.addr,t)}function iM(i,e){let t=aa(e,this.size,4);i.uniform4fv(this.addr,t)}function sM(i,e){let t=aa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rM(i,e){let t=aa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function oM(i,e){let t=aa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function aM(i,e){i.uniform1iv(this.addr,e)}function lM(i,e){i.uniform2iv(this.addr,e)}function cM(i,e){i.uniform3iv(this.addr,e)}function hM(i,e){i.uniform4iv(this.addr,e)}function uM(i,e){i.uniform1uiv(this.addr,e)}function dM(i,e){i.uniform2uiv(this.addr,e)}function fM(i,e){i.uniform3uiv(this.addr,e)}function pM(i,e){i.uniform4uiv(this.addr,e)}function mM(i,e,t){let n=this.cache,s=e.length,r=Bh(t,s);Yn(n,r)||(i.uniform1iv(this.addr,r),Kn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=zh(gg):o=mg;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function gM(i,e,t){let n=this.cache,s=e.length,r=Bh(t,s);Yn(n,r)||(i.uniform1iv(this.addr,r),Kn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||yg,r[o])}function _M(i,e,t){let n=this.cache,s=e.length,r=Bh(t,s);Yn(n,r)||(i.uniform1iv(this.addr,r),Kn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=zh(_g):o=vg;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function xM(i,e,t){let n=this.cache,s=e.length,r=Bh(t,s);Yn(n,r)||(i.uniform1iv(this.addr,r),Kn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||xg,r[o])}function yM(i){switch(i){case 5126:return eM;case 35664:return tM;case 35665:return nM;case 35666:return iM;case 35674:return sM;case 35675:return rM;case 35676:return oM;case 5124:case 35670:return aM;case 35667:case 35671:return lM;case 35668:case 35672:return cM;case 35669:case 35673:return hM;case 5125:return uM;case 36294:return dM;case 36295:return fM;case 36296:return pM;case 35678:case 36198:case 36298:case 36306:case 35682:return mM;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return _M;case 36289:case 36303:case 36311:case 36292:return xM}}var zd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qv(t.type)}},kd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yM(t.type)}},Gd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Od=/(\w+)(\])?(\[|\.)?/g;function Qm(i,e){i.seq.push(e),i.map[e.id]=e}function vM(i,e,t){let n=i.name,s=n.length;for(Od.lastIndex=0;;){let r=Od.exec(n),o=Od.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Qm(t,c===void 0?new zd(a,i,e):new kd(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Gd(a),Qm(t,u)),t=u}}}var oa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);vM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function eg(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var MM=37297,SM=0;function bM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var tg=new Rt;function wM(i){Wt._getMatrix(tg,Wt.workingColorSpace,i);let e=`mat3( ${tg.elements.map(t=>t.toFixed(4))} )`;switch(Wt.getTransfer(i)){case Ga:return[e,"LinearTransferOETF"];case fn:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ng(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+bM(i.getShaderSource(e),a)}else return r}function TM(i,e){let t=wM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var AM={[sd]:"Linear",[rd]:"Reinhard",[od]:"Cineon",[ta]:"ACESFilmic",[ld]:"AgX",[cd]:"Neutral",[ad]:"Custom"};function EM(i,e){let t=AM[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Oh=new F;function RM(){Wt.getLuminanceCoefficients(Oh);let i=Oh.x.toFixed(4),e=Oh.y.toFixed(4),t=Oh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sl).join(`
`)}function IM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function PM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Sl(i){return i!==""}function ig(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function sg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var LM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(i){return i.replace(LM,NM)}function NM(i,e){let t=Vt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Hd(t)}var DM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rg(i){return i.replace(DM,UM)}function UM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function og(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var FM={[Ar]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function OM(i){return FM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var BM={[na]:"ENVMAP_MODE_REFRACTION"};function zM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":BM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var kM={[id]:"ENVMAP_BLENDING_MULTIPLY",[ym]:"ENVMAP_BLENDING_MIX",[vm]:"ENVMAP_BLENDING_ADD"};function GM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":kM[i.combine]||"ENVMAP_BLENDING_NONE"}function HM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=OM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=zM(t),u=GM(t),d=CM(t),f=IM(r),p=s.createProgram(),M,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Sl).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Sl).join(`
`),m.length>0&&(m+=`
`)):(M=[og(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),m=[og(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ts?"#define TONE_MAPPING":"",t.toneMapping!==Ts?Vt.tonemapping_pars_fragment:"",t.toneMapping!==Ts?EM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,TM("linearToOutputTexel",t.outputColorSpace),RM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sl).join(`
`)),o=Hd(o),o=ig(o,t),o=sg(o,t),a=Hd(a),a=ig(a,t),a=sg(a,t),o=rg(o),a=rg(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,M=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",t.glslVersion===Sd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+M+o,A=g+m+a,S=eg(s,s.VERTEX_SHADER,v),C=eg(s,s.FRAGMENT_SHADER,A);s.attachShader(p,S),s.attachShader(p,C),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(N){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(p)||"",W=s.getShaderInfoLog(S)||"",Z=s.getShaderInfoLog(C)||"",P=O.trim(),q=W.trim(),Y=Z.trim(),ee=!0,re=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,S,C);else{let ne=ng(s,S,"vertex"),ce=ng(s,C,"fragment");yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+P+`
`+ne+`
`+ce)}else P!==""?lt("WebGLProgram: Program Info Log:",P):(q===""||Y==="")&&(re=!1);re&&(N.diagnostics={runnable:ee,programLog:P,vertexShader:{log:q,prefix:M},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(S),s.deleteShader(C),x=new oa(s,p),b=PM(s,p)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(p,MM)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=C,this}var VM=0,Vd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wd(e),t.set(e,n)),n}},Wd=class{constructor(e){this.id=VM++,this.code=e,this.usedTimes=0}};function WM(i){return i===Er||i===xl||i===yl}function XM(i,e,t,n,s,r){let o=new zo,a=new Vd,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,b,z,N,O,W){let Z=N.fog,P=O.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ee=e.get(x.envMap||q,Y),re=d[x.type],ne=n.precision;x.precision!==null&&(ne=n.getMaxPrecision(x.precision),ne!==x.precision&&lt("WebGLProgram.getParameters:",x.precision,"not supported, using",ne,"instead."));let ce=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,_e=ce!==void 0?ce.length:0,Fe=0;P.morphAttributes.position!==void 0&&(Fe=1),P.morphAttributes.normal!==void 0&&(Fe=2),P.morphAttributes.color!==void 0&&(Fe=3);let He,ie,we,Ge;if(re){let ke=Es[re];He=ke.vertexShader,ie=ke.fragmentShader}else{He=x.vertexShader,ie=x.fragmentShader;let ke=a.getVertexShaderStage(x),Zt=a.getFragmentShaderStage(x);a.update(x,ke,Zt),we=ke.id,Ge=Zt.id}let $e=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),ze=O.isInstancedMesh===!0,un=O.isBatchedMesh===!0,rt=!!x.map,Ct=!!x.matcap,gt=!!ee,ye=gt&&ee.isPMREMTexture===!0,de=!!x.aoMap,De=!!x.lightMap,We=!!x.bumpMap&&x.wireframe===!1,Pe=!!x.normalMap,_t=!!x.displacementMap,Ze=!!x.emissiveMap,ot=!!x.metalnessMap,it=!!x.roughnessMap,zt=x.anisotropy>0,H=x.clearcoat>0,jt=x.diffuseRoughness>0,ut=x.dispersion>0,xt=x.retroreflectivity>0,Ue=x.iridescence>0,gn=x.sheen>0,at=x.transmission>0,dt=zt&&!!x.anisotropyMap,I=H&&!!x.clearcoatMap,w=H&&!!x.clearcoatNormalMap,te=H&&!!x.clearcoatRoughnessMap,Te=jt&&!!x.diffuseRoughnessMap,oe=Ue&&!!x.iridescenceMap,Ie=Ue&&!!x.iridescenceThicknessMap,Le=gn&&!!x.sheenColorMap,ue=gn&&!!x.sheenRoughnessMap,fe=!!x.specularMap,Ae=!!x.specularColorMap,U=!!x.specularIntensityMap,ge=at&&!!x.transmissionMap,le=at&&!!x.thicknessMap,Oe=!!x.gradientMap,Ne=!!x.alphaMap,Ce=x.alphaTest>0,Qe=!!x.alphaHash,It=!!x.extensions,Ee=Ts;x.toneMapped&&($e===null||$e.isXRRenderTarget===!0)&&(Ee=i.toneMapping);let st=ye?ee.isCompressedCubeTexture?ee.image[0].mipmaps:ee.mipmaps:null,St={shaderID:re,shaderType:x.type,shaderName:x.name,vertexShader:He,fragmentShader:ie,defines:x.defines,customVertexShaderID:we,customFragmentShaderID:Ge,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:ne,batching:un,batchingColor:un&&O._colorsTexture!==null,instancing:ze,instancingColor:ze&&O.instanceColor!==null,instancingMorph:ze&&O.morphTexture!==null,outputColorSpace:$e===null?i.outputColorSpace:$e.isXRRenderTarget===!0?$e.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:rt,matcap:Ct,envMap:gt,envMapMode:gt&&ee.mapping,envMapPMREM:ye,envMapMaxLod:ye?st.length-1:null,envMapSize:ye?st[0].width:null,aoMap:de,lightMap:De,bumpMap:We,normalMap:Pe,displacementMap:_t,emissiveMap:Ze,normalMapObjectSpace:Pe&&x.normalMapType===wm,normalMapTangentSpace:Pe&&x.normalMapType===Nh,packedNormalMap:Pe&&x.normalMapType===Nh&&WM(x.normalMap.format),metalnessMap:ot,roughnessMap:it,anisotropy:zt,anisotropyMap:dt,clearcoat:H,clearcoatMap:I,clearcoatNormalMap:w,clearcoatRoughnessMap:te,diffuseRoughness:jt,diffuseRoughnessMap:Te,dispersion:ut,retroreflection:xt,iridescence:Ue,iridescenceMap:oe,iridescenceThicknessMap:Ie,sheen:gn,sheenColorMap:Le,sheenRoughnessMap:ue,specularMap:fe,specularColorMap:Ae,specularIntensityMap:U,transmission:at,transmissionMap:ge,thicknessMap:le,gradientMap:Oe,opaque:x.transparent===!1&&x.blending===ea&&x.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Ce,alphaHash:Qe,combine:x.combine,mapUv:rt&&f(x.map.channel),aoMapUv:de&&f(x.aoMap.channel),lightMapUv:De&&f(x.lightMap.channel),bumpMapUv:We&&f(x.bumpMap.channel),normalMapUv:Pe&&f(x.normalMap.channel),displacementMapUv:_t&&f(x.displacementMap.channel),emissiveMapUv:Ze&&f(x.emissiveMap.channel),metalnessMapUv:ot&&f(x.metalnessMap.channel),roughnessMapUv:it&&f(x.roughnessMap.channel),anisotropyMapUv:dt&&f(x.anisotropyMap.channel),clearcoatMapUv:I&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Te&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:oe&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:ue&&f(x.sheenRoughnessMap.channel),specularMapUv:fe&&f(x.specularMap.channel),specularColorMapUv:Ae&&f(x.specularColorMap.channel),specularIntensityMapUv:U&&f(x.specularIntensityMap.channel),transmissionMapUv:ge&&f(x.transmissionMap.channel),thicknessMapUv:le&&f(x.thicknessMap.channel),alphaMapUv:Ne&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Pe||zt),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!P.attributes.uv&&(rt||Ne),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&Pe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Fe,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:W.filter(ke=>ke.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:rt&&x.map.isVideoTexture===!0&&Wt.getTransfer(x.map.colorSpace)===fn,decodeVideoTextureEmissive:Ze&&x.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(x.emissiveMap.colorSpace)===fn,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===tn,flipSided:x.side===Mi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:It&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&x.extensions.multiDraw===!0||un)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function M(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let z in x.defines)b.push(z),b.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(m(b,x),g(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let b=d[x.type],z;if(b){let N=Es[b];z=Gm.clone(N.uniforms)}else z=x.uniforms;return z}function A(x,b){let z=h.get(b);return z!==void 0?++z.usedTimes:(z=new HM(i,b,x,s),c.push(z),h.set(b,z)),z}function S(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function C(x){a.remove(x)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:v,acquireProgram:A,releaseProgram:S,releaseShaderCache:C,programs:c,dispose:T}}function qM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function YM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ag(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lg(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,M,m,g){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:M,renderOrder:d.renderOrder,z:m,group:g},i[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=p,v.materialVariant=o(d),v.groupOrder=M,v.renderOrder=d.renderOrder,v.z=m,v.group=g),e++,v}function l(d,f,p,M,m,g,v){v.reversedDepth===!0&&(m=-m);let A=a(d,f,p,M,m,g);p.transmission>0?n.push(A):p.transparent===!0?s.push(A):t.push(A)}function c(d,f,p,M,m,g){let v=a(d,f,p,M,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||YM),n.length>1&&n.sort(f||ag),s.length>1&&s.sort(f||ag)}function u(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function KM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new lg,i.set(n,[o])):s>=r.length?(o=new lg,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ZM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ve};break;case"SpotLight":t={position:new F,direction:new F,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function JM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var jM=0;function $M(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function QM(i){let e=new ZM,t=JM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new Mt,o=new Mt;function a(c){let h=0,u=0,d=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let f=0,p=0,M=0,m=0,g=0,v=0,A=0,S=0,C=0,T=0,x=0,b=0,z=0,N=0;c.sort($M);for(let W=0,Z=c.length;W<Z;W++){let P=c[W],q=P.color,Y=P.intensity,ee=P.distance,re=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Er?re=P.shadow.map.texture:re=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=q.r*Y,u+=q.g*Y,d+=q.b*Y;else if(P.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(P.sh.coefficients[ne],Y);N++}else if(P.isSunLight){let ne=e.get(P);if(ne.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ce=P.shadow,_e=t.get(P);_e.shadowIntensity=ce.intensity,_e.shadowBias=ce.bias,_e.shadowNormalBias=ce.normalBias,_e.shadowRadius=ce.radius,_e.shadowMapSize.copy(ce.mapSize).multiply(ce.getFrameExtents()),n.sunShadow[p]=_e,n.sunShadowMap[p]=re;let Fe=ce.getViewportCount();for(let He=0;He<Fe;He++)n.sunShadowMatrix[M+He]=ce.getMatrix(He),n.sunShadowCascade[M+He]=ce._cascadeData[He];M+=Fe,p++}n.sun[f]=ne,f++}else if(P.isDirectionalLight){let ne=e.get(P);if(ne.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ce=P.shadow,_e=t.get(P);_e.shadowIntensity=ce.intensity,_e.shadowBias=ce.bias,_e.shadowNormalBias=ce.normalBias,_e.shadowRadius=ce.radius,_e.shadowMapSize=ce.mapSize,n.directionalShadow[m]=_e,n.directionalShadowMap[m]=re,n.directionalShadowMatrix[m]=P.shadow.matrix,C++}n.directional[m]=ne,m++}else if(P.isSpotLight){let ne=e.get(P);ne.position.setFromMatrixPosition(P.matrixWorld),ne.color.copy(q).multiplyScalar(Y),ne.distance=ee,ne.coneCos=Math.cos(P.angle),ne.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),ne.decay=P.decay,n.spot[v]=ne;let ce=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,ce.updateMatrices(P),P.castShadow&&z++),n.spotLightMatrix[v]=ce.matrix,P.castShadow){let _e=t.get(P);_e.shadowIntensity=ce.intensity,_e.shadowBias=ce.bias,_e.shadowNormalBias=ce.normalBias,_e.shadowRadius=ce.radius,_e.shadowMapSize=ce.mapSize,n.spotShadow[v]=_e,n.spotShadowMap[v]=re,x++}v++}else if(P.isRectAreaLight){let ne=e.get(P);ne.color.copy(q).multiplyScalar(Y),ne.halfWidth.set(P.width*.5,0,0),ne.halfHeight.set(0,P.height*.5,0),n.rectArea[A]=ne,A++}else if(P.isPointLight){let ne=e.get(P);if(ne.color.copy(P.color).multiplyScalar(P.intensity),ne.distance=P.distance,ne.decay=P.decay,P.castShadow){let ce=P.shadow,_e=t.get(P);_e.shadowIntensity=ce.intensity,_e.shadowBias=ce.bias,_e.shadowNormalBias=ce.normalBias,_e.shadowRadius=ce.radius,_e.shadowMapSize=ce.mapSize,_e.shadowCameraNear=ce.camera.near,_e.shadowCameraFar=ce.camera.far,n.pointShadow[g]=_e,n.pointShadowMap[g]=re,n.pointShadowMatrix[g]=P.shadow.matrix,T++}n.point[g]=ne,g++}else if(P.isHemisphereLight){let ne=e.get(P);ne.skyColor.copy(P.color).multiplyScalar(Y),ne.groundColor.copy(P.groundColor).multiplyScalar(Y),n.hemi[S]=ne,S++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ke.LTC_FLOAT_1,n.rectAreaLTC2=Ke.LTC_FLOAT_2):(n.rectAreaLTC1=Ke.LTC_HALF_1,n.rectAreaLTC2=Ke.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let O=n.hash;(O.sunLength!==f||O.directionalLength!==m||O.pointLength!==g||O.spotLength!==v||O.rectAreaLength!==A||O.hemiLength!==S||O.numSunShadows!==p||O.numDirectionalShadows!==C||O.numPointShadows!==T||O.numSpotShadows!==x||O.numSpotMaps!==b||O.numLightProbes!==N)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=A,n.point.length=g,n.hemi.length=S,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-z,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=z,n.numLightProbes=N,O.sunLength=f,O.directionalLength=m,O.pointLength=g,O.spotLength=v,O.rectAreaLength=A,O.hemiLength=S,O.numSunShadows=p,O.numDirectionalShadows=C,O.numPointShadows=T,O.numSpotShadows=x,O.numSpotMaps=b,O.numLightProbes=N,n.version=jM++)}function l(c,h){let u=0,d=0,f=0,p=0,M=0,m=0,g=h.matrixWorldInverse;for(let v=0,A=c.length;v<A;v++){let S=c[v];if(S.isSunLight){let C=n.sun[u];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(g),u++}else if(S.isDirectionalLight){let C=n.directional[d];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),d++}else if(S.isSpotLight){let C=n.spot[p];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),p++}else if(S.isRectAreaLight){let C=n.rectArea[M];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),M++}else if(S.isPointLight){let C=n.point[f];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){let C=n.hemi[m];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function cg(i){let e=new QM(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function eS(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new cg(i),e.set(s,[a])):r>=o.length?(a=new cg(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var tS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nS=`uniform sampler2D shadow_pass;
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
}`,iS=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],sS=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],hg=new Mt,Ml=new F,Bd=new F;function rS(i,e,t){let n=new Sr,s=new Me,r=new Me,o=new hn,a=new Ko,l=new Oc,c={},h=t.maxTextureSize,u={[ws]:Mi,[Mi]:ws,[tn]:tn},d=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:tS,fragmentShader:nS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new ln;p.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new tt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ar;let g=this.type;this.render=function(T,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===em&&(lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ar);let z=i.getRenderTarget(),N=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Qr),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let Z=g!==this.type;Z&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(q=>q.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,q=T.length;P<q;P++){let Y=T[P],ee=Y.shadow;if(ee===void 0){lt("WebGLShadowMap:",Y,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;s.copy(ee.mapSize);let re=ee.getFrameExtents();s.multiply(re),r.copy(ee.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,ee.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,ee.mapSize.y=r.y));let ne=i.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=ne,ee.map===null||Z===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===Qo){if(Y.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new Gi(s.x,s.y,{format:Er,type:bi,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),ee.map.texture.name=Y.name+".shadowMap",ee.map.depthTexture=new Ks(s.x,s.y,di),ee.map.depthTexture.name=Y.name+".shadowMapDepth",ee.map.depthTexture.format=Xs,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Gn,ee.map.depthTexture.magFilter=Gn}else Y.isPointLight?(ee.map=new bl(s.x),ee.map.depthTexture=new $a(s.x,fs)):(ee.map=new Gi(s.x,s.y),ee.map.depthTexture=new Ks(s.x,s.y,fs)),ee.map.depthTexture.name=Y.name+".shadowMap",ee.map.depthTexture.format=Xs,this.type===Ar?(ee.map.depthTexture.compareFunction=ne?yd:xd,ee.map.depthTexture.minFilter=Mn,ee.map.depthTexture.magFilter=Mn):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Gn,ee.map.depthTexture.magFilter=Gn);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==s.x||ee.map.height!==s.y)&&ee.map.setSize(s.x,s.y);let ce=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();Y.isPointLight!==!0&&ee.updateMatrices(Y,b);let _e=(ee.camera.layers.mask&4294967294)!==0?ee.camera.layers:b.layers;for(let Fe=0;Fe<ce;Fe++){let He=ee.getCamera(Fe);if(Y.isPointLight){let ie=ee.camera,we=ee.matrix,Ge=Y.distance||ie.far;Ge!==ie.far&&(ie.far=Ge,ie.updateProjectionMatrix()),Ml.setFromMatrixPosition(Y.matrixWorld),ie.position.copy(Ml),Bd.copy(ie.position),Bd.add(iS[Fe]),ie.up.copy(sS[Fe]),ie.lookAt(Bd),ie.updateMatrixWorld(),we.makeTranslation(-Ml.x,-Ml.y,-Ml.z),hg.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(hg,ie.coordinateSystem,ie.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)i.setRenderTarget(ee.map,Fe),i.clear();else{Fe===0&&(i.setRenderTarget(ee.map),i.clear());let ie=ee.getViewport(Fe);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),W.viewport(o)}n=ee.getFrustum(Fe),S(x,b,He,Y,_e,this.type)}ee.isPointLightShadow!==!0&&this.type===Qo&&v(ee,b),ee.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(z,N,O)};function v(T,x){let b=e.update(M);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Gi(s.x,s.y,{format:Er,type:bi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(x,null,b,d,M,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(x,null,b,f,M,null)}function A(T,x,b,z){let N=null,O=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)N=O;else if(N=b.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let W=N.uuid,Z=x.uuid,P=c[W];P===void 0&&(P={},c[W]=P);let q=P[Z];q===void 0&&(q=N.clone(),P[Z]=q,x.addEventListener("dispose",C)),N=q}if(N.visible=x.visible,N.wireframe=x.wireframe,z===Qo?N.side=x.shadowSide!==null?x.shadowSide:x.side:N.side=x.shadowSide!==null?x.shadowSide:u[x.side],N.alphaMap=x.alphaMap,N.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,N.map=x.map,N.clipShadows=x.clipShadows,N.clippingPlanes=x.clippingPlanes,N.clipIntersection=x.clipIntersection,N.displacementMap=x.displacementMap,N.displacementScale=x.displacementScale,N.displacementBias=x.displacementBias,N.wireframeLinewidth=x.wireframeLinewidth,N.linewidth=x.linewidth,b.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let W=i.properties.get(N);W.light=b}return N}function S(T,x,b,z,N,O){if(T.visible===!1)return;if(T.layers.test(N)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&O===Qo)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let P=e.update(T),q=T.material;if(Array.isArray(q)){let Y=P.groups;for(let ee=0,re=Y.length;ee<re;ee++){let ne=Y[ee],ce=q[ne.materialIndex];if(ce&&ce.visible){let _e=A(T,ce,z,O);T.onBeforeShadow(i,T,x,b,P,_e,ne),i.renderBufferDirect(b,null,P,_e,T,ne),T.onAfterShadow(i,T,x,b,P,_e,ne)}}}else if(q.visible){let Y=A(T,q,z,O);T.onBeforeShadow(i,T,x,b,P,Y,null),i.renderBufferDirect(b,null,P,Y,T,null),T.onAfterShadow(i,T,x,b,P,Y,null)}}let Z=T.children;for(let P=0,q=Z.length;P<q;P++)S(Z[P],x,b,z,N,O)}function C(T){T.target.removeEventListener("dispose",C);for(let b in c){let z=c[b],N=T.target.uuid;N in z&&(z[N].dispose(),delete z[N])}}}function oS(i,e){function t(){let U=!1,ge=new hn,le=null,Oe=new hn(0,0,0,0);return{setMask:function(Ne){le!==Ne&&!U&&(i.colorMask(Ne,Ne,Ne,Ne),le=Ne)},setLocked:function(Ne){U=Ne},setClear:function(Ne,Ce,Qe,It,Ee){Ee===!0&&(Ne*=It,Ce*=It,Qe*=It),ge.set(Ne,Ce,Qe,It),Oe.equals(ge)===!1&&(i.clearColor(Ne,Ce,Qe,It),Oe.copy(ge))},reset:function(){U=!1,le=null,Oe.set(-1,0,0,0)}}}function n(){let U=!1,ge=!1,le=null,Oe=null,Ne=null;return{setReversed:function(Ce){if(ge!==Ce){let Qe=e.get("EXT_clip_control");Ce?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),ge=Ce;let It=Ne;Ne=null,this.setClear(It)}},getReversed:function(){return ge},setTest:function(Ce){Ce?me(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(Ce){le!==Ce&&!U&&(i.depthMask(Ce),le=Ce)},setFunc:function(Ce){if(ge&&(Ce=Dm[Ce]),Oe!==Ce){switch(Ce){case _c:i.depthFunc(i.NEVER);break;case xc:i.depthFunc(i.ALWAYS);break;case yc:i.depthFunc(i.LESS);break;case Do:i.depthFunc(i.LEQUAL);break;case vc:i.depthFunc(i.EQUAL);break;case Mc:i.depthFunc(i.GEQUAL);break;case Sc:i.depthFunc(i.GREATER);break;case bc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Oe=Ce}},setLocked:function(Ce){U=Ce},setClear:function(Ce){Ne!==Ce&&(Ne=Ce,ge&&(Ce=1-Ce),i.clearDepth(Ce))},reset:function(){U=!1,le=null,Oe=null,Ne=null,ge=!1}}}function s(){let U=!1,ge=null,le=null,Oe=null,Ne=null,Ce=null,Qe=null,It=null,Ee=null;return{setTest:function(st){U||(st?me(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(st){ge!==st&&!U&&(i.stencilMask(st),ge=st)},setFunc:function(st,St,ke){(le!==st||Oe!==St||Ne!==ke)&&(i.stencilFunc(st,St,ke),le=st,Oe=St,Ne=ke)},setOp:function(st,St,ke){(Ce!==st||Qe!==St||It!==ke)&&(i.stencilOp(st,St,ke),Ce=st,Qe=St,It=ke)},setLocked:function(st){U=st},setClear:function(st){Ee!==st&&(i.clearStencil(st),Ee=st)},reset:function(){U=!1,ge=null,le=null,Oe=null,Ne=null,Ce=null,Qe=null,It=null,Ee=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],M=null,m=!1,g=null,v=null,A=null,S=null,C=null,T=null,x=null,b=new Ve(0,0,0),z=0,N=!1,O=null,W=null,Z=null,P=null,q=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,re=0,ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ee=re>=1):ne.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ee=re>=2);let ce=null,_e={},Fe=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),ie=new hn().fromArray(Fe),we=new hn().fromArray(He);function Ge(U,ge,le,Oe){let Ne=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(U,Ce),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<le;Qe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,Oe,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(ge+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return Ce}let $e={};$e[i.TEXTURE_2D]=Ge(i.TEXTURE_2D,i.TEXTURE_2D,1),$e[i.TEXTURE_CUBE_MAP]=Ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$e[i.TEXTURE_2D_ARRAY]=Ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$e[i.TEXTURE_3D]=Ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(i.DEPTH_TEST),o.setFunc(Do),We(!1),Pe($u),me(i.CULL_FACE),de(Qr);function me(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function ze(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function un(U,ge){return d[U]!==ge?(i.bindFramebuffer(U,ge),d[U]=ge,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ge),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function rt(U,ge){let le=p,Oe=!1;if(U){le=f.get(ge),le===void 0&&(le=[],f.set(ge,le));let Ne=U.textures;if(le.length!==Ne.length||le[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,Qe=Ne.length;Ce<Qe;Ce++)le[Ce]=i.COLOR_ATTACHMENT0+Ce;le.length=Ne.length,Oe=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,Oe=!0);Oe&&i.drawBuffers(le)}function Ct(U){return M!==U?(i.useProgram(U),M=U,!0):!1}let gt={[eo]:i.FUNC_ADD,[nm]:i.FUNC_SUBTRACT,[im]:i.FUNC_REVERSE_SUBTRACT};gt[sm]=i.MIN,gt[rm]=i.MAX;let ye={[om]:i.ZERO,[am]:i.ONE,[lm]:i.SRC_COLOR,[td]:i.SRC_ALPHA,[pm]:i.SRC_ALPHA_SATURATE,[dm]:i.DST_COLOR,[hm]:i.DST_ALPHA,[cm]:i.ONE_MINUS_SRC_COLOR,[nd]:i.ONE_MINUS_SRC_ALPHA,[fm]:i.ONE_MINUS_DST_COLOR,[um]:i.ONE_MINUS_DST_ALPHA,[mm]:i.CONSTANT_COLOR,[gm]:i.ONE_MINUS_CONSTANT_COLOR,[_m]:i.CONSTANT_ALPHA,[xm]:i.ONE_MINUS_CONSTANT_ALPHA};function de(U,ge,le,Oe,Ne,Ce,Qe,It,Ee,st){if(U===Qr){m===!0&&(ze(i.BLEND),m=!1);return}if(m===!1&&(me(i.BLEND),m=!0),U!==tm){if(U!==g||st!==N){if((v!==eo||C!==eo)&&(i.blendEquation(i.FUNC_ADD),v=eo,C=eo),st)switch(U){case ea:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Di:i.blendFunc(i.ONE,i.ONE);break;case Qu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ed:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:yt("WebGLState: Invalid blending: ",U);break}else switch(U){case ea:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Qu:yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ed:yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yt("WebGLState: Invalid blending: ",U);break}A=null,S=null,T=null,x=null,b.set(0,0,0),z=0,g=U,N=st}return}Ne=Ne||ge,Ce=Ce||le,Qe=Qe||Oe,(ge!==v||Ne!==C)&&(i.blendEquationSeparate(gt[ge],gt[Ne]),v=ge,C=Ne),(le!==A||Oe!==S||Ce!==T||Qe!==x)&&(i.blendFuncSeparate(ye[le],ye[Oe],ye[Ce],ye[Qe]),A=le,S=Oe,T=Ce,x=Qe),(It.equals(b)===!1||Ee!==z)&&(i.blendColor(It.r,It.g,It.b,Ee),b.copy(It),z=Ee),g=U,N=!1}function De(U,ge){U.side===tn?ze(i.CULL_FACE):me(i.CULL_FACE);let le=U.side===Mi;ge&&(le=!le),We(le),U.blending===ea&&U.transparent===!1?de(Qr):de(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Oe=U.stencilWrite;a.setTest(Oe),Oe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ze(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(U){O!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),O=U)}function Pe(U){U!==$p?(me(i.CULL_FACE),U!==W&&(U===$u?i.cullFace(i.BACK):U===Qp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),W=U}function _t(U){U!==Z&&(ee&&i.lineWidth(U),Z=U)}function Ze(U,ge,le){U?(me(i.POLYGON_OFFSET_FILL),(P!==ge||q!==le)&&(P=ge,q=le,o.getReversed()&&(ge=-ge,le=-le),i.polygonOffset(ge,le))):ze(i.POLYGON_OFFSET_FILL)}function ot(U){U?me(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function it(U){U===void 0&&(U=i.TEXTURE0+Y-1),ce!==U&&(i.activeTexture(U),ce=U)}function zt(U,ge,le){le===void 0&&(ce===null?le=i.TEXTURE0+Y-1:le=ce);let Oe=_e[le];Oe===void 0&&(Oe={type:void 0,texture:void 0},_e[le]=Oe),(Oe.type!==U||Oe.texture!==ge)&&(ce!==le&&(i.activeTexture(le),ce=le),i.bindTexture(U,ge||$e[U]),Oe.type=U,Oe.texture=ge)}function H(){let U=_e[ce];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function jt(){try{i.compressedTexImage2D(...arguments)}catch(U){yt("WebGLState:",U)}}function ut(){try{i.compressedTexImage3D(...arguments)}catch(U){yt("WebGLState:",U)}}function xt(){try{i.texSubImage2D(...arguments)}catch(U){yt("WebGLState:",U)}}function Ue(){try{i.texSubImage3D(...arguments)}catch(U){yt("WebGLState:",U)}}function gn(){try{i.compressedTexSubImage2D(...arguments)}catch(U){yt("WebGLState:",U)}}function at(){try{i.compressedTexSubImage3D(...arguments)}catch(U){yt("WebGLState:",U)}}function dt(){try{i.texStorage2D(...arguments)}catch(U){yt("WebGLState:",U)}}function I(){try{i.texStorage3D(...arguments)}catch(U){yt("WebGLState:",U)}}function w(){try{i.texImage2D(...arguments)}catch(U){yt("WebGLState:",U)}}function te(){try{i.texImage3D(...arguments)}catch(U){yt("WebGLState:",U)}}function Te(U){return u[U]!==void 0?u[U]:i.getParameter(U)}function oe(U,ge){u[U]!==ge&&(i.pixelStorei(U,ge),u[U]=ge)}function Ie(U){ie.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ie.copy(U))}function Le(U){we.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),we.copy(U))}function ue(U,ge){let le=c.get(ge);le===void 0&&(le=new WeakMap,c.set(ge,le));let Oe=le.get(U);Oe===void 0&&(Oe=i.getUniformBlockIndex(ge,U.name),i.uniformBlockBinding(ge,Oe,Oe),le.set(U,Oe))}function fe(U,ge,le){let Ne=c.get(ge).get(U);l[Ne]!==le&&(i.bindBufferBase(i.UNIFORM_BUFFER,Ne,le),l[Ne]=le)}function Ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ce=null,_e={},d={},l={},f=new WeakMap,p=[],M=null,m=!1,g=null,v=null,A=null,S=null,C=null,T=null,x=null,b=new Ve(0,0,0),z=0,N=!1,O=null,W=null,Z=null,P=null,q=null,ie.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:ze,bindFramebuffer:un,drawBuffers:rt,useProgram:Ct,setBlending:de,setMaterial:De,setFlipSided:We,setCullFace:Pe,setLineWidth:_t,setPolygonOffset:Ze,setScissorTest:ot,activeTexture:it,bindTexture:zt,unbindTexture:H,compressedTexImage2D:jt,compressedTexImage3D:ut,texImage2D:w,texImage3D:te,pixelStorei:oe,getParameter:Te,updateUBOMapping:ue,uniformBlockBinding:fe,texStorage2D:dt,texStorage3D:I,texSubImage2D:xt,texSubImage3D:Ue,compressedTexSubImage2D:gn,compressedTexSubImage3D:at,scissor:Ie,viewport:Le,reset:Ae}}function aS(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,M=new FinalizationRegistry(I=>p.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return m?new OffscreenCanvas(I,w):Fo("canvas")}function v(I,w,te){let Te=1,oe=dt(I);if((oe.width>te||oe.height>te)&&(Te=te/Math.max(oe.width,oe.height)),Te<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Ie=Math.floor(Te*oe.width),Le=Math.floor(Te*oe.height);d===void 0&&(d=g(Ie,Le));let ue=w?g(Ie,Le):d;return ue.width=Ie,ue.height=Le,ue.getContext("2d").drawImage(I,0,0,Ie,Le),lt("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Ie+"x"+Le+")."),ue}else return"data"in I&&lt("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),I;return I}function A(I){return I.generateMipmaps}function S(I){i.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(I,w,te,Te,oe,Ie=!1){if(I!==null){if(i[I]!==void 0)return i[I];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Le;Te&&(Le=e.get("EXT_texture_norm16"),Le||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=w;if(w===i.RED&&(te===i.FLOAT&&(ue=i.R32F),te===i.HALF_FLOAT&&(ue=i.R16F),te===i.UNSIGNED_BYTE&&(ue=i.R8),te===i.UNSIGNED_SHORT&&Le&&(ue=Le.R16_EXT),te===i.SHORT&&Le&&(ue=Le.R16_SNORM_EXT)),w===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(ue=i.R8UI),te===i.UNSIGNED_SHORT&&(ue=i.R16UI),te===i.UNSIGNED_INT&&(ue=i.R32UI),te===i.BYTE&&(ue=i.R8I),te===i.SHORT&&(ue=i.R16I),te===i.INT&&(ue=i.R32I)),w===i.RG&&(te===i.FLOAT&&(ue=i.RG32F),te===i.HALF_FLOAT&&(ue=i.RG16F),te===i.UNSIGNED_BYTE&&(ue=i.RG8),te===i.UNSIGNED_SHORT&&Le&&(ue=Le.RG16_EXT),te===i.SHORT&&Le&&(ue=Le.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(te===i.UNSIGNED_BYTE&&(ue=i.RG8UI),te===i.UNSIGNED_SHORT&&(ue=i.RG16UI),te===i.UNSIGNED_INT&&(ue=i.RG32UI),te===i.BYTE&&(ue=i.RG8I),te===i.SHORT&&(ue=i.RG16I),te===i.INT&&(ue=i.RG32I)),w===i.RGB_INTEGER&&(te===i.UNSIGNED_BYTE&&(ue=i.RGB8UI),te===i.UNSIGNED_SHORT&&(ue=i.RGB16UI),te===i.UNSIGNED_INT&&(ue=i.RGB32UI),te===i.BYTE&&(ue=i.RGB8I),te===i.SHORT&&(ue=i.RGB16I),te===i.INT&&(ue=i.RGB32I)),w===i.RGBA_INTEGER&&(te===i.UNSIGNED_BYTE&&(ue=i.RGBA8UI),te===i.UNSIGNED_SHORT&&(ue=i.RGBA16UI),te===i.UNSIGNED_INT&&(ue=i.RGBA32UI),te===i.BYTE&&(ue=i.RGBA8I),te===i.SHORT&&(ue=i.RGBA16I),te===i.INT&&(ue=i.RGBA32I)),w===i.RGB&&(te===i.UNSIGNED_SHORT&&Le&&(ue=Le.RGB16_EXT),te===i.SHORT&&Le&&(ue=Le.RGB16_SNORM_EXT),te===i.UNSIGNED_INT_5_9_9_9_REV&&(ue=i.RGB9_E5),te===i.UNSIGNED_INT_10F_11F_11F_REV&&(ue=i.R11F_G11F_B10F)),w===i.RGBA){let fe=Ie?Ga:Wt.getTransfer(oe);te===i.FLOAT&&(ue=i.RGBA32F),te===i.HALF_FLOAT&&(ue=i.RGBA16F),te===i.UNSIGNED_BYTE&&(ue=fe===fn?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT&&Le&&(ue=Le.RGBA16_EXT),te===i.SHORT&&Le&&(ue=Le.RGBA16_SNORM_EXT),te===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)}return(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function x(I,w){let te;return I?w===null||w===fs||w===io?te=i.DEPTH24_STENCIL8:w===di?te=i.DEPTH32F_STENCIL8:w===sa&&(te=i.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===fs||w===io?te=i.DEPTH_COMPONENT24:w===di?te=i.DEPTH_COMPONENT32F:w===sa&&(te=i.DEPTH_COMPONENT16),te}function b(I,w){return A(I)===!0||I.isFramebufferTexture&&I.minFilter!==Gn&&I.minFilter!==Mn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function z(I){let w=new WeakRef(I);n.get(I).__ref=w,p.add(w),M.register(I,w,w)}function N(I){let w=n.get(I).__ref;w!==void 0&&(p.delete(w),M.unregister(w))}function O(I){Z(I.target)}function W(I){P(I.target)}function Z(I){I.removeEventListener("dispose",O),N(I),Y(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function P(I){I.removeEventListener("dispose",W),N(I),re(I)}function q(){for(let I of p){let w=I.deref();w!==void 0&&(w.isRenderTarget===!0?P(w):Z(w))}p.clear(),u.clear()}function Y(I){let w=n.get(I);if(w.__webglInit===void 0)return;let te=I.source,Te=f.get(te);if(Te){let oe=Te[w.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&ee(I),Object.keys(Te).length===0&&f.delete(te)}n.remove(I)}function ee(I){let w=n.get(I);i.deleteTexture(w.__webglTexture);let te=I.source,Te=f.get(te);delete Te[w.__cacheKey],o.memory.textures--}function re(I){let w=n.get(I);w.__depthDisposeCallback&&w.__depthDisposeCallback();let te=I.depthTexture;if(te&&te.renderTarget===I&&Z(te),I.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(w.__webglFramebuffer[oe]))for(let Ie=0;Ie<w.__webglFramebuffer[oe].length;Ie++)i.deleteFramebuffer(w.__webglFramebuffer[oe][Ie]);else i.deleteFramebuffer(w.__webglFramebuffer[oe]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[oe])}else{if(Array.isArray(w.__webglFramebuffer))for(let oe=0;oe<w.__webglFramebuffer.length;oe++)i.deleteFramebuffer(w.__webglFramebuffer[oe]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let oe=0;oe<w.__webglColorRenderbuffer.length;oe++)w.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[oe]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let Te=I.textures;for(let oe=0,Ie=Te.length;oe<Ie;oe++){let Le=n.get(Te[oe]);Le.__webglTexture&&(i.deleteTexture(Le.__webglTexture),o.memory.textures--),n.remove(Te[oe])}n.remove(I)}let ne=0;function ce(){ne=0}function _e(){return ne}function Fe(I){ne=I}function He(){let I=ne;return I>=s.maxTextures&&lt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),ne+=1,I}function ie(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.mipmapsAutoUpdate),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function we(I,w){let te=n.get(I);if(I.isVideoTexture&&gn(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&te.__version!==I.version){let Te=I.image;if(Te===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(Te.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{De(te,I,w);return}}else I.isExternalTexture&&(te.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+w)}function Ge(I,w){let te=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&te.__version!==I.version){De(te,I,w);return}else I.isExternalTexture&&(te.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+w)}function $e(I,w){let te=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&te.__version!==I.version){De(te,I,w);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+w)}function me(I,w){let te=n.get(I);if(I.version>0&&te.__version!==I.version){We(te,I,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+w)}let ze={[Xn]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[gr]:i.MIRRORED_REPEAT},un={[Gn]:i.NEAREST,[Zc]:i.NEAREST_MIPMAP_NEAREST,[no]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[ia]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},rt={[Am]:i.NEVER,[vd]:i.ALWAYS,[Em]:i.LESS,[xd]:i.LEQUAL,[Rm]:i.EQUAL,[yd]:i.GEQUAL,[Cm]:i.GREATER,[Im]:i.NOTEQUAL};function Ct(I,w){if(w.type===di&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Mn||w.magFilter===ia||w.magFilter===no||w.magFilter===Si||w.minFilter===Mn||w.minFilter===ia||w.minFilter===no||w.minFilter===Si)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ze[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ze[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ze[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,un[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,un[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,rt[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Gn||w.minFilter!==no&&w.minFilter!==Si||w.type===di&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let te=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function gt(I,w){let te=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",O),z(w));let Te=w.source,oe=f.get(Te);oe===void 0&&(oe={},f.set(Te,oe));let Ie=ie(w);if(Ie!==I.__cacheKey){oe[Ie]===void 0&&(oe[Ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,te=!0),oe[Ie].usedTimes++;let Le=oe[I.__cacheKey];Le!==void 0&&(oe[I.__cacheKey].usedTimes--,Le.usedTimes===0&&ee(w)),I.__cacheKey=Ie,I.__webglTexture=oe[Ie].texture}return te}function ye(I,w,te){return Math.floor(Math.floor(I/te)/w)}function de(I,w,te,Te){let Ie=I.updateRanges;if(Ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,te,Te,w.data);else{Ie.sort((U,ge)=>U.start-ge.start);let Le=0;for(let U=1;U<Ie.length;U++){let ge=Ie[Le],le=Ie[U],Oe=ge.start+ge.count,Ne=ye(le.start,w.width,4),Ce=ye(ge.start,w.width,4);le.start<=Oe+1&&Ne===Ce&&ye(le.start+le.count-1,w.width,4)===Ne?ge.count=Math.max(ge.count,le.start+le.count-ge.start):(++Le,Ie[Le]=le)}Ie.length=Le+1;let ue=t.getParameter(i.UNPACK_ROW_LENGTH),fe=t.getParameter(i.UNPACK_SKIP_PIXELS),Ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let U=0,ge=Ie.length;U<ge;U++){let le=Ie[U],Oe=Math.floor(le.start/4),Ne=Math.ceil(le.count/4),Ce=Oe%w.width,Qe=Math.floor(Oe/w.width),It=Ne,Ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,Qe),t.texSubImage2D(i.TEXTURE_2D,0,Ce,Qe,It,Ee,te,Te,w.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ue),t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function De(I,w,te){let Te=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Te=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Te=i.TEXTURE_3D);let oe=gt(I,w),Ie=w.source;t.bindTexture(Te,I.__webglTexture,i.TEXTURE0+te);let Le=n.get(Ie);if(Ie.version!==Le.__version||oe===!0){if(t.activeTexture(i.TEXTURE0+te),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let Ee=Wt.getPrimaries(Wt.workingColorSpace),st=w.colorSpace===ir?null:Wt.getPrimaries(w.colorSpace),St=w.colorSpace===ir||Ee===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let fe=v(w.image,!1,s.maxTextureSize);fe=at(w,fe);let Ae=r.convert(w.format,w.colorSpace),U=r.convert(w.type),ge=T(w.internalFormat,Ae,U,w.normalized,w.colorSpace,w.isVideoTexture);Ct(Te,w);let le,Oe=w.mipmaps,Ne=w.isVideoTexture!==!0,Ce=Le.__version===void 0||oe===!0,Qe=Ie.dataReady,It=b(w,fe);if(w.isDepthTexture)ge=x(w.format===nr,w.type),Ce&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,ge,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,ge,fe.width,fe.height,0,Ae,U,null));else if(w.isDataTexture)if(Oe.length>0){Ne&&Ce&&t.texStorage2D(i.TEXTURE_2D,It,ge,Oe[0].width,Oe[0].height);for(let Ee=0,st=Oe.length;Ee<st;Ee++)le=Oe[Ee],Ne?Qe&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,le.width,le.height,Ae,U,le.data):t.texImage2D(i.TEXTURE_2D,Ee,ge,le.width,le.height,0,Ae,U,le.data);w.generateMipmaps=!1}else Ne?(Ce&&t.texStorage2D(i.TEXTURE_2D,It,ge,fe.width,fe.height),Qe&&de(w,fe,Ae,U)):t.texImage2D(i.TEXTURE_2D,0,ge,fe.width,fe.height,0,Ae,U,fe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ne&&Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,It,ge,Oe[0].width,Oe[0].height,fe.depth);for(let Ee=0,st=Oe.length;Ee<st;Ee++)if(le=Oe[Ee],w.format!==wi)if(Ae!==null)if(Ne){if(Qe)if(w.layerUpdates.size>0){let St=Pd(le.width,le.height,w.format,w.type);for(let ke of w.layerUpdates){let Zt=le.data.subarray(ke*St/le.data.BYTES_PER_ELEMENT,(ke+1)*St/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,ke,le.width,le.height,1,Ae,Zt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,le.width,le.height,fe.depth,Ae,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ee,ge,le.width,le.height,fe.depth,0,le.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?Qe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,le.width,le.height,fe.depth,Ae,U,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ee,ge,le.width,le.height,fe.depth,0,Ae,U,le.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Ne&&Ce&&t.texStorage2D(i.TEXTURE_2D,It,ge,Oe[0].width,Oe[0].height);for(let Ee=0,st=Oe.length;Ee<st;Ee++)le=Oe[Ee],w.format!==wi?Ae!==null?Ne?Qe&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ee,0,0,le.width,le.height,Ae,le.data):t.compressedTexImage2D(i.TEXTURE_2D,Ee,ge,le.width,le.height,0,le.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?Qe&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,le.width,le.height,Ae,U,le.data):t.texImage2D(i.TEXTURE_2D,Ee,ge,le.width,le.height,0,Ae,U,le.data)}else if(w.isDataArrayTexture)if(Ne){if(Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,It,ge,fe.width,fe.height,fe.depth),Qe)if(w.layerUpdates.size>0){let Ee=Pd(fe.width,fe.height,w.format,w.type);for(let st of w.layerUpdates){let St=fe.data.subarray(st*Ee/fe.data.BYTES_PER_ELEMENT,(st+1)*Ee/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,fe.width,fe.height,1,Ae,U,St)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ae,U,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,fe.width,fe.height,fe.depth,0,Ae,U,fe.data);else if(w.isData3DTexture)Ne?(Ce&&t.texStorage3D(i.TEXTURE_3D,It,ge,fe.width,fe.height,fe.depth),Qe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ae,U,fe.data)):t.texImage3D(i.TEXTURE_3D,0,ge,fe.width,fe.height,fe.depth,0,Ae,U,fe.data);else if(w.isFramebufferTexture){if(Ce)if(Ne)t.texStorage2D(i.TEXTURE_2D,It,ge,fe.width,fe.height);else{let Ee=fe.width,st=fe.height;for(let St=0;St<It;St++)t.texImage2D(i.TEXTURE_2D,St,ge,Ee,st,0,Ae,U,null),Ee>>=1,st>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let Ee=i.canvas;if(Ee.hasAttribute("layoutsubtree")||Ee.setAttribute("layoutsubtree","true"),fe.parentNode!==Ee){Ee.appendChild(fe),u.add(w),Ee.onpaint=st=>{let St=st.changedElements;for(let ke of u)St.includes(ke.image)&&(ke.needsUpdate=!0)},Ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,fe);else{let St=i.RGBA,ke=i.RGBA,Zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,St,ke,Zt,fe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Ne&&Ce){let Ee=dt(Oe[0]);t.texStorage2D(i.TEXTURE_2D,It,ge,Ee.width,Ee.height)}for(let Ee=0,st=Oe.length;Ee<st;Ee++)le=Oe[Ee],Ne?Qe&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,Ae,U,le):t.texImage2D(i.TEXTURE_2D,Ee,ge,Ae,U,le);w.generateMipmaps=!1}else if(Ne){if(Ce){let Ee=dt(fe);t.texStorage2D(i.TEXTURE_2D,It,ge,Ee.width,Ee.height)}Qe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,U,fe)}else t.texImage2D(i.TEXTURE_2D,0,ge,Ae,U,fe);A(w)&&w.mipmapsAutoUpdate===!0&&S(Te),Le.__version=Ie.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function We(I,w,te){if(w.image.length!==6)return;let Te=gt(I,w),oe=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+te);let Ie=n.get(oe);if(oe.version!==Ie.__version||Te===!0){t.activeTexture(i.TEXTURE0+te);let Le=Wt.getPrimaries(Wt.workingColorSpace),ue=w.colorSpace===ir?null:Wt.getPrimaries(w.colorSpace),fe=w.colorSpace===ir||Le===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Ae=w.isCompressedTexture||w.image[0].isCompressedTexture,U=w.image[0]&&w.image[0].isDataTexture,ge=[];for(let ke=0;ke<6;ke++)!Ae&&!U?ge[ke]=v(w.image[ke],!0,s.maxCubemapSize):ge[ke]=U?w.image[ke].image:w.image[ke],ge[ke]=at(w,ge[ke]);let le=ge[0],Oe=r.convert(w.format,w.colorSpace),Ne=r.convert(w.type),Ce=T(w.internalFormat,Oe,Ne,w.normalized,w.colorSpace),Qe=w.isVideoTexture!==!0,It=Ie.__version===void 0||Te===!0,Ee=oe.dataReady,st=b(w,le);Ct(i.TEXTURE_CUBE_MAP,w);let St;if(w.isDepthTexture){if(Ce=x(w.format===nr,w.type),It)if(Qe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ce,le.width,le.height);else for(let ke=0;ke<6;ke++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Ce,le.width,le.height,0,Oe,Ne,null)}else if(Ae){Qe&&It&&t.texStorage2D(i.TEXTURE_CUBE_MAP,st,Ce,le.width,le.height);for(let ke=0;ke<6;ke++){St=ge[ke].mipmaps;for(let Zt=0;Zt<St.length;Zt++){let Sn=St[Zt];w.format!==wi?Oe!==null?Qe?Ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Zt,0,0,Sn.width,Sn.height,Oe,Sn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Zt,Ce,Sn.width,Sn.height,0,Sn.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Zt,0,0,Sn.width,Sn.height,Oe,Ne,Sn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Zt,Ce,Sn.width,Sn.height,0,Oe,Ne,Sn.data)}}}else{if(St=w.mipmaps,Qe&&It){St.length>0&&st++;let ke=dt(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,st,Ce,ke.width,ke.height)}for(let ke=0;ke<6;ke++)if(U){Qe?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,0,0,ge[ke].width,ge[ke].height,Oe,Ne,ge[ke].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Ce,ge[ke].width,ge[ke].height,0,Oe,Ne,ge[ke].data);for(let Zt=0;Zt<St.length;Zt++){let Fn=St[Zt].image[ke].image;Qe?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Zt+1,0,0,Fn.width,Fn.height,Oe,Ne,Fn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Zt+1,Ce,Fn.width,Fn.height,0,Oe,Ne,Fn.data)}}else{Qe?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,0,0,Oe,Ne,ge[ke]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Ce,Oe,Ne,ge[ke]);for(let Zt=0;Zt<St.length;Zt++){let Sn=St[Zt];Qe?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Zt+1,0,0,Oe,Ne,Sn.image[ke]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Zt+1,Ce,Oe,Ne,Sn.image[ke])}}}A(w)&&w.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),Ie.__version=oe.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Pe(I,w,te,Te,oe,Ie){let Le=r.convert(te.format,te.colorSpace),ue=r.convert(te.type),fe=T(te.internalFormat,Le,ue,te.normalized,te.colorSpace),Ae=n.get(w),U=n.get(te);if(U.__renderTarget=w,!Ae.__hasExternalTextures){let ge=Math.max(1,w.width>>Ie),le=Math.max(1,w.height>>Ie);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,Ie,fe,ge,le,w.depth,0,Le,ue,null):t.texImage2D(oe,Ie,fe,ge,le,0,Le,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Ue(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,oe,U.__webglTexture,0,xt(w)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Te,oe,U.__webglTexture,Ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(I,w,te){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){let Te=w.depthTexture,oe=Te&&Te.isDepthTexture?Te.type:null,Ie=x(w.stencilBuffer,oe),Le=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ue(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(w),Ie,w.width,w.height):te?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(w),Ie,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,I)}else{let Te=w.textures;for(let oe=0;oe<Te.length;oe++){let Ie=Te[oe],Le=r.convert(Ie.format,Ie.colorSpace),ue=r.convert(Ie.type),fe=T(Ie.internalFormat,Le,ue,Ie.normalized,Ie.colorSpace);Ue(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(w),fe,w.width,w.height):te?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(w),fe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,fe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ze(I,w,te){let Te=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=n.get(w.depthTexture);oe.__renderTarget=w;let Ie=Te?w.depthTexture.image[0]:w.depthTexture.image;(!oe.__webglTexture||Ie.width!==w.width||Ie.height!==w.height)&&(Ie.width=w.width,Ie.height=w.height,w.depthTexture.needsUpdate=!0),Te?me(w.depthTexture,0):we(w.depthTexture,0);let Le=oe.__webglTexture,ue=xt(w),fe=Te?i.TEXTURE_CUBE_MAP_POSITIVE_X+te:i.TEXTURE_2D,Ae=w.depthTexture.format===nr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Xs)Ue(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ae,fe,Le,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,Ae,fe,Le,0);else if(w.depthTexture.format===nr)Ue(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ae,fe,Le,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,Ae,fe,Le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(I){let w=n.get(I),te=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let Te=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Te){let oe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Te.removeEventListener("dispose",oe)};Te.addEventListener("dispose",oe),w.__depthDisposeCallback=oe}w.__boundDepthTexture=Te}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(te)for(let Te=0;Te<6;Te++)Ze(w.__webglFramebuffer[Te],I,Te);else I.texture.mipmaps.length>0?Ze(w.__webglFramebuffer[0],I,0):Ze(w.__webglFramebuffer,I,0);else if(te){w.__webglDepthbuffer=[];for(let Te=0;Te<6;Te++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Te]),w.__webglDepthbuffer[Te]===void 0)w.__webglDepthbuffer[Te]=i.createRenderbuffer(),_t(w.__webglDepthbuffer[Te],I,!1);else{let oe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=w.__webglDepthbuffer[Te];i.bindRenderbuffer(i.RENDERBUFFER,Ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,Ie)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),_t(w.__webglDepthbuffer,I,!1);else{let oe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,Ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(I,w,te){let Te=n.get(I);w!==void 0&&Pe(Te.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&ot(I)}function zt(I){let w=I.texture,te=n.get(I),Te=n.get(w);I.addEventListener("dispose",W),z(I);let oe=I.textures,Ie=I.isWebGLCubeRenderTarget===!0,Le=oe.length>1;if(Le||(Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture()),Te.__version=w.version,o.memory.textures++),Ie){te.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(w.mipmaps.length>0){te.__webglFramebuffer[ue]=[];for(let fe=0;fe<w.mipmaps.length;fe++)te.__webglFramebuffer[ue][fe]=i.createFramebuffer()}else te.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(w.mipmaps.length>0){te.__webglFramebuffer=[];for(let ue=0;ue<w.mipmaps.length;ue++)te.__webglFramebuffer[ue]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(Le)for(let ue=0,fe=oe.length;ue<fe;ue++){let Ae=n.get(oe[ue]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Ue(I)===!1){te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let ue=0;ue<oe.length;ue++){let fe=oe[ue];te.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[ue]);let Ae=r.convert(fe.format,fe.colorSpace),U=r.convert(fe.type),ge=T(fe.internalFormat,Ae,U,fe.normalized,fe.colorSpace,I.isXRRenderTarget===!0),le=xt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,ge,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,te.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(te.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ie){t.bindTexture(i.TEXTURE_CUBE_MAP,Te.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,w);for(let ue=0;ue<6;ue++)if(w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)Pe(te.__webglFramebuffer[ue][fe],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,fe);else Pe(te.__webglFramebuffer[ue],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);A(w)?S(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(Le){for(let ue=0,fe=oe.length;ue<fe;ue++){let Ae=oe[ue],U=n.get(Ae),ge=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,U.__webglTexture),Ct(ge,Ae),Pe(te.__webglFramebuffer,I,Ae,i.COLOR_ATTACHMENT0+ue,ge,0),A(Ae)&&S(ge)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ue=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Te.__webglTexture),Ct(ue,w),w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)Pe(te.__webglFramebuffer[fe],I,w,i.COLOR_ATTACHMENT0,ue,fe);else Pe(te.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,ue,0);A(w)?S(ue):w.mipmaps.length>0&&i.texParameteri(ue,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&ot(I)}function H(I){let w=I.textures;for(let te=0,Te=w.length;te<Te;te++){let oe=w[te];if(A(oe)&&oe.mipmapsAutoUpdate===!0){let Ie=C(I),Le=n.get(oe).__webglTexture;t.bindTexture(Ie,Le),S(Ie),t.unbindTexture()}}}let jt=[];function ut(I){if(I.samples>0){if(Ue(I)===!1){let w=I.textures,te=I.width,Te=I.height,oe=i.COLOR_BUFFER_BIT,Ie=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(I),ue=w.length>1;if(ue)for(let Ae=0;Ae<w.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ae=0;Ae<w.length;Ae++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ae]);let U=n.get(w[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,U,0)}i.blitFramebuffer(0,0,te,Te,0,0,te,Te,oe,i.NEAREST),l===!0&&(jt.length=0,jt.push(i.COLOR_ATTACHMENT0+Ae),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&jt.push(Ie),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let Ae=0;Ae<w.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ae]);let U=n.get(w[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,U,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function xt(I){return Math.min(s.maxSamples,I.samples)}function Ue(I){let w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function gn(I){let w=o.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function at(I,w){let te=I.colorSpace,Te=I.format,oe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||te!==ni&&te!==ir&&(Wt.getTransfer(te)===fn?(Te!==wi||oe!==Ui)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yt("WebGLTextures: Unsupported texture color space:",te)),w}function dt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=He,this.resetTextureUnits=ce,this.getTextureUnits=_e,this.setTextureUnits=Fe,this.setTexture2D=we,this.setTexture2DArray=Ge,this.setTexture3D=$e,this.setTextureCube=me,this.rebindTextures=it,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Ue,this.dispose=q}function lS(i,e){function t(n,s=ir){let r,o=Wt.getTransfer(s);if(n===Ui)return i.UNSIGNED_BYTE;if(n===jc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$c)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ud)return i.BYTE;if(n===dd)return i.SHORT;if(n===sa)return i.UNSIGNED_SHORT;if(n===Jc)return i.INT;if(n===fs)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===bi)return i.HALF_FLOAT;if(n===md)return i.ALPHA;if(n===gd)return i.RGB;if(n===wi)return i.RGBA;if(n===Xs)return i.DEPTH_COMPONENT;if(n===nr)return i.DEPTH_STENCIL;if(n===Qc)return i.RED;if(n===eh)return i.RED_INTEGER;if(n===Er)return i.RG;if(n===th)return i.RG_INTEGER;if(n===nh)return i.RGBA_INTEGER;if(n===pl||n===ml||n===gl||n===_l)if(o===fn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_l)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ml)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_l)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ih||n===sh||n===rh||n===oh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ih)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ah||n===lh||n===ch||n===hh||n===uh||n===xl||n===dh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ah||n===lh)return o===fn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ch)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===hh)return r.COMPRESSED_R11_EAC;if(n===uh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xl)return r.COMPRESSED_RG11_EAC;if(n===dh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fh||n===ph||n===mh||n===gh||n===_h||n===xh||n===yh||n===vh||n===Mh||n===Sh||n===bh||n===wh||n===Th||n===Ah)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fh)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ph)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mh)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gh)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_h)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xh)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yh)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vh)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mh)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sh)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bh)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wh)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Th)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ah)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eh||n===Rh||n===Ch)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Eh)return o===fn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ch)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ih||n===Ph||n===yl||n===Lh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ih)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ph)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===io?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var cS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hS=`
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

}`,Xd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Qa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Vi({vertexShader:cS,fragmentShader:hS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new Nt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qd=class extends Ms{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,M=typeof XRWebGLBinding<"u",m=new Xd,g={},v=t.getContextAttributes(),A=null,S=null,C=[],T=[],x=new Me,b=null,z=null,N=new kn;N.viewport=new hn;let O=new kn;O.viewport=new hn;let W=[N,O],Z=new Xc,P=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let we=C[ie];return we===void 0&&(we=new ko,C[ie]=we),we.getTargetRaySpace()},this.getControllerGrip=function(ie){let we=C[ie];return we===void 0&&(we=new ko,C[ie]=we),we.getGripSpace()},this.getHand=function(ie){let we=C[ie];return we===void 0&&(we=new ko,C[ie]=we),we.getHandSpace()};function Y(ie){let we=T.indexOf(ie.inputSource);if(we===-1)return;let Ge=C[we];Ge!==void 0&&(Ge.update(ie.inputSource,ie.frame,c||o),Ge.dispatchEvent({type:ie.type,data:ie.inputSource}))}function ee(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",re);for(let ie=0;ie<C.length;ie++){let we=T[ie];we!==null&&(T[ie]=null,C[ie].disconnect(we))}P=null,q=null,m.reset();for(let ie in g)delete g[ie];if(e.setRenderTarget(A),f=null,d=null,u=null,s=null,S=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),z!==null){let ie=z.camera;ie.fov=z.fov,ie.zoom=z.zoom,ie.updateProjectionMatrix(),z=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,n.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",re),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ge=null,$e=null,me=null;v.depth&&(me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ge=v.stencil?nr:Xs,$e=v.stencil?io:fs);let ze={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Gi(d.textureWidth,d.textureHeight,{format:wi,type:Ui,depthTexture:new Ks(d.textureWidth,d.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,Ge),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ge={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ge),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Gi(f.framebufferWidth,f.framebufferHeight,{format:wi,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),He.setContext(s),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(ie){for(let we=0;we<ie.removed.length;we++){let Ge=ie.removed[we],$e=T.indexOf(Ge);$e>=0&&(T[$e]=null,C[$e].disconnect(Ge))}for(let we=0;we<ie.added.length;we++){let Ge=ie.added[we],$e=T.indexOf(Ge);if($e===-1){for(let ze=0;ze<C.length;ze++)if(ze>=T.length){T.push(Ge),$e=ze;break}else if(T[ze]===null){T[ze]=Ge,$e=ze;break}if($e===-1)break}let me=C[$e];me&&me.connect(Ge)}}function ne(ie,we){we===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(we.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let we=ie.near,Ge=ie.far;m.texture!==null&&(m.depthNear>0&&(we=m.depthNear),m.depthFar>0&&(Ge=m.depthFar)),Z.near=O.near=N.near=we,Z.far=O.far=N.far=Ge,(P!==Z.near||q!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),P=Z.near,q=Z.far),Z.layers.mask=ie.layers.mask|6,N.layers.mask=Z.layers.mask&-5,O.layers.mask=Z.layers.mask&-3;let $e=ie.parent,me=Z.cameras;ne(Z,$e);for(let ze=0;ze<me.length;ze++)ne(me[ze],$e);Z.projectionMatrix.copy(N.projectionMatrix),Z.projectionMatrixInverse.copy(N.projectionMatrixInverse),z===null&&ie.isPerspectiveCamera&&(z={camera:ie,fov:ie.fov,zoom:ie.zoom}),ce(ie,Z,$e)};function ce(ie,we,Ge){Ge===null?ie.matrix.copy(we.matrixWorld):(ie.matrix.copy(Ge.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(we.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(we.projectionMatrix),ie.projectionMatrixInverse.copy(we.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Wr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Z)},this.getCameraTexture=function(ie){return g[ie]};let _e=null;function Fe(ie,we){if(h=we.getViewerPose(c||o),p=we,h!==null){let Ge=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let $e=!1;Ge.length!==Z.cameras.length&&(Z.cameras.length=0,$e=!0);for(let rt=0;rt<Ge.length;rt++){let Ct=Ge[rt],gt=null;if(f!==null)gt=f.getViewport(Ct);else{let de=u.getViewSubImage(d,Ct);gt=de.viewport,rt===0&&(e.setRenderTargetTextures(S,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(S))}let ye=W[rt];ye===void 0&&(ye=new kn,ye.layers.enable(rt),ye.viewport=new hn,W[rt]=ye),ye.matrix.fromArray(Ct.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Ct.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(gt.x,gt.y,gt.width,gt.height),rt===0&&(Z.matrix.copy(ye.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),$e===!0&&Z.cameras.push(ye)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=n.getBinding();let rt=u.getDepthInformation(Ge[0]);rt&&rt.isValid&&rt.texture&&m.init(rt,s.renderState)}if(me&&me.includes("camera-access")&&M){e.state.unbindTexture(),u=n.getBinding();for(let rt=0;rt<Ge.length;rt++){let Ct=Ge[rt].camera;if(Ct){let gt=g[Ct];gt||(gt=new Qa,g[Ct]=gt);let ye=u.getCameraImage(Ct);gt.sourceTexture=ye}}}}for(let Ge=0;Ge<C.length;Ge++){let $e=T[Ge],me=C[Ge];$e!==null&&me!==void 0&&me.update($e,we,c||o)}_e&&_e(ie,we),we.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:we}),p=null}let He=new ug;He.setAnimationLoop(Fe),this.setAnimationLoop=function(ie){_e=ie},this.dispose=function(){}}},uS=new Mt,Mg=new Rt;Mg.set(-1,0,0,0,1,0,0,0,1);function dS(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Rd(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,A,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,S)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),M(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,A):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Mi&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Mi&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),A=v.envMap,S=v.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(uS.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Mg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,A){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=A*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Mi&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function M(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fS(i,e,t,n){let s={},r={};function o(v,A){let S=A.program;n.uniformBlockBinding(v,S,s[v.id])}function a(v,A){let S=s[v.id];S===void 0&&(p(v),S=l(v),s[v.id]=S,v.addEventListener("dispose",m));let C=A.program;n.updateUBOMapping(v,C);let T=e.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){let A=i.createBuffer(),S=v.__size,C=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,S,C),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(v){let A=s[v.id],S=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let T=0,x=S.length;T<x;T++){let b=S[T];if(Array.isArray(b))for(let z=0,N=b.length;z<N;z++)h(b[z],T,z,C);else h(b,T,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,A,S,C){if(d(v,A,S,C)===!0){let T=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let z=0;z<x.length;z++){let N=x[z],O=M(N,!0);u(N,v.__data,b),b+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,v.__data)}}function u(v,A,S){typeof v=="number"||typeof v=="boolean"?A[S]=v:v.isMatrix3?(A[S]=v.elements[0],A[S+1]=v.elements[1],A[S+2]=v.elements[2],A[S+3]=0,A[S+4]=v.elements[3],A[S+5]=v.elements[4],A[S+6]=v.elements[5],A[S+7]=0,A[S+8]=v.elements[6],A[S+9]=v.elements[7],A[S+10]=v.elements[8],A[S+11]=0):ArrayBuffer.isView(v)?A.set(v.subarray(0,A.length-S),S):v.toArray(A,S)}function d(v,A,S,C){let T=v.value,x=A+"_"+S;if(Array.isArray(T)){C[x]===void 0&&(C[x]=[]);let b=C[x],z=!1;for(let N=0;N<T.length;N++)f(T[N],b,N)===!0&&(z=!0);return z}return f(T,C,x)}function f(v,A,S){if(A[S]===void 0)return typeof v=="number"||typeof v=="boolean"?A[S]=v:ArrayBuffer.isView(v)?A[S]=v.slice():A[S]=v.clone(),!0;{let C=A[S];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return A[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function p(v){let A=v.uniforms,S=0,C=16;for(let x=0,b=A.length;x<b;x++){let z=Array.isArray(A[x])?A[x]:[A[x]];for(let N=0,O=z.length;N<O;N++){let W=z[N],Z=Array.isArray(W.value)?W.value:[W.value],P=Array.isArray(A[x])||Array.isArray(W.value),q=S;for(let ee=0,re=Z.length;ee<re;ee++){let ne=Z[ee],ce=M(ne,P),_e=S%C,Fe=_e%ce.boundary,He=_e+Fe;S+=Fe,He!==0&&C-He<ce.storage&&(S+=C-He),ee===0&&(q=S),S+=ce.storage}let Y=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new Y((S-q)/Float32Array.BYTES_PER_ELEMENT),W.__offset=q}}let T=S%C;return T>0&&(S+=C-T),v.__size=S,v.__cache={},this}function M(v,A){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",v),A===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(v){let A=v.target;A.removeEventListener("dispose",m),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:g}}var pS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),As=null;function mS(){return As===null&&(As=new hs(pS,16,16,Er,bi),As.name="DFG_LUT",As.minFilter=Mn,As.magFilter=Mn,As.wrapS=ci,As.wrapT=ci,As.generateMipmaps=!1,As.needsUpdate=!0),As}var wl=class{constructor(e={}){let{canvas:t=Pm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ui}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let M=f,m=new Set([nh,th,eh]),g=new Set([Ui,fs,sa,io,jc,$c]),v=new Uint32Array(4),A=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},C=null,T=null,x=[],b=[],z=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,O=!1,W=null,Z=null,P=null,q=null;this._outputColorSpace=dn;let Y=0,ee=0,re=null,ne=-1,ce=null,_e=new hn,Fe=new hn,He=null,ie=new Ve(0),we=0,Ge=t.width,$e=t.height,me=1,ze=null,un=null,rt=new hn(0,0,Ge,$e),Ct=new hn(0,0,Ge,$e),gt=!1,ye=new Sr,de=new Ec,De=!1,We=!1,Pe=new Mt,_t=new F,Ze=new hn,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function zt(){return re===null?me:1}let H=n;function jt(E,G){return t.getContext(E,G)}let ut,xt,Ue,gn,at,dt,I,w,te,Te,oe,Ie,Le,ue,fe,Ae,U,ge,le,Oe,Ne,Ce,Qe;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",ke,!1),H===null){let G="webgl2";if(H=jt(G,E),H===null)throw jt(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}It()}catch(E){throw t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),yt("WebGLRenderer: "+E.message),E}function It(){ut=new Av(H),ut.init(),Ne=new lS(H,ut),xt=new mv(H,ut,e,Ne),Ue=new oS(H,ut),xt.reversedDepthBuffer&&d&&Ue.buffers.depth.setReversed(!0),Z=H.createFramebuffer(),P=H.createFramebuffer(),q=H.createFramebuffer(),gn=new Cv(H),at=new qM,dt=new aS(H,ut,Ue,at,xt,Ne,gn),I=new Tv(N),w=new P_(H),Ce=new fv(H,w),te=new Ev(H,w,gn,Ce),Te=new Pv(H,te,w,Ce,gn),ge=new Iv(H,xt,dt),fe=new gv(at),oe=new XM(N,I,ut,xt,Ce,fe),Ie=new dS(N,at),Le=new KM,ue=new eS(ut),U=new dv(N,I,Ue,Te,p,l),Ae=new rS(N,Te,xt),Qe=new fS(H,gn,xt,Ue),le=new pv(H,ut,gn),Oe=new Rv(H,ut,gn),gn.programs=oe.programs,N.capabilities=xt,N.extensions=ut,N.properties=at,N.renderLists=Le,N.shadowMap=Ae,N.state=Ue,N.info=gn}M!==Ui&&(z=new Nv(M,t.width,t.height,a,s,r));let Ee=new qd(N,H);this.xr=Ee,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let E=ut.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ut.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(E){E!==void 0&&(me=E,this.setSize(Ge,$e,!1))},this.getSize=function(E){return E.set(Ge,$e)},this.setSize=function(E,G,se=!0){if(Ee.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=E,$e=G,t.width=Math.floor(E*me),t.height=Math.floor(G*me),se===!0&&(t.style.width=E+"px",t.style.height=G+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(Ge*me,$e*me).floor()},this.setDrawingBufferSize=function(E,G,se){Ge=E,$e=G,me=se,t.width=Math.floor(E*se),t.height=Math.floor(G*se),this.setViewport(0,0,E,G)},this.setEffects=function(E){if(M===Ui){yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let G=0;G<E.length;G++)if(E[G].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(_e)},this.getViewport=function(E){return E.copy(rt)},this.setViewport=function(E,G,se,$){E.isVector4?rt.set(E.x,E.y,E.z,E.w):rt.set(E,G,se,$),Ue.viewport(_e.copy(rt).multiplyScalar(zt()).round())},this.getScissor=function(E){return E.copy(Ct)},this.setScissor=function(E,G,se,$){E.isVector4?Ct.set(E.x,E.y,E.z,E.w):Ct.set(E,G,se,$),Ue.scissor(Fe.copy(Ct).multiplyScalar(zt()).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(E){Ue.setScissorTest(gt=E)},this.setOpaqueSort=function(E){ze=E},this.setTransparentSort=function(E){un=E},this.getClearColor=function(E){return E.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(E=!0,G=!0,se=!0){let $=0;if(E){let Q=!1;if(re!==null){let Be=re.texture.format;Q=m.has(Be)}if(Q){let Be=re.texture.type,Je=g.has(Be),Re=U.getClearColor(),Xe=U.getClearAlpha(),nt=Re.r,ht=Re.g,Tt=Re.b;Je?(v[0]=nt,v[1]=ht,v[2]=Tt,v[3]=Xe,H.clearBufferuiv(H.COLOR,0,v)):(A[0]=nt,A[1]=ht,A[2]=Tt,A[3]=Xe,H.clearBufferiv(H.COLOR,0,A))}else $|=H.COLOR_BUFFER_BIT}G&&($|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),W=E},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),U.dispose(),Le.dispose(),ue.dispose(),dt.dispose(),at.dispose(),I.dispose(),Te.dispose(),te.dispose(),Ce.dispose(),Qe.dispose(),oe.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Lr),Ee.removeEventListener("sessionend",or),Xi.stop()};function st(E){E.preventDefault(),Ha("WebGLRenderer: Context Lost."),O=!0}function St(){Ha("WebGLRenderer: Context Restored."),O=!1;let E=gn.autoReset,G=Ae.enabled,se=Ae.autoUpdate,$=Ae.needsUpdate,Q=Ae.type;It(),gn.autoReset=E,Ae.enabled=G,Ae.autoUpdate=se,Ae.needsUpdate=$,Ae.type=Q}function ke(E){yt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Zt(E){let G=E.target;G.removeEventListener("dispose",Zt),Sn(G)}function Sn(E){Fn(E),at.remove(E)}function Fn(E){let G=at.get(E).programs;G!==void 0&&(G.forEach(function(se){oe.releaseProgram(se)}),E.isShaderMaterial&&oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,se,$,Q,Be){G===null&&(G=ot);let Je=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Re=On(E,G,se,$,Q);Ue.setMaterial($,Je);let Xe=se.index,nt=1;if($.wireframe===!0){if(Xe=te.getWireframeAttribute(se),Xe===void 0)return;nt=2}let ht=se.drawRange,Tt=se.attributes.position,et=ht.start*nt,Ft=(ht.start+ht.count)*nt;Be!==null&&(et=Math.max(et,Be.start*nt),Ft=Math.min(Ft,(Be.start+Be.count)*nt)),Xe!==null?(et=Math.max(et,0),Ft=Math.min(Ft,Xe.count)):Tt!=null&&(et=Math.max(et,0),Ft=Math.min(Ft,Tt.count));let xn=Ft-et;if(xn<0||xn===1/0)return;Ce.setup(Q,$,Re,se,Xe);let $t,Kt=le;if(Xe!==null&&($t=w.get(Xe),Kt=Oe,Kt.setIndex($t)),Q.isMesh)$.wireframe===!0?(Ue.setLineWidth($.wireframeLinewidth*zt()),Kt.setMode(H.LINES)):Kt.setMode(H.TRIANGLES);else if(Q.isLine){let yn=$.linewidth;yn===void 0&&(yn=1),Ue.setLineWidth(yn*zt()),Q.isLineSegments?Kt.setMode(H.LINES):Q.isLineLoop?Kt.setMode(H.LINE_LOOP):Kt.setMode(H.LINE_STRIP)}else Q.isPoints?Kt.setMode(H.POINTS):Q.isSprite&&Kt.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))Kt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let yn=Q._multiDrawStarts,je=Q._multiDrawCounts,En=Q._multiDrawCount,kt=Xe?w.get(Xe).bytesPerElement:1,pi=at.get($).currentProgram.getUniforms();for(let en=0;en<En;en++)pi.setValue(H,"_gl_DrawID",en),Kt.render(yn[en]/kt,je[en])}else if(Q.isInstancedMesh)Kt.renderInstances(et,xn,Q.count);else if(se.isInstancedBufferGeometry){let yn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,je=Math.min(se.instanceCount,yn);Kt.renderInstances(et,xn,je)}else Kt.render(et,xn)};function Oi(E,G,se,$){W!==null&&E.isNodeMaterial&&W.setObject($,E),De===!0&&fe.setState(E,se,!1),E.transparent===!0&&E.side===tn&&E.forceSinglePass===!1?(E.side=Mi,E.needsUpdate=!0,Ai(E,G,$),E.side=ws,E.needsUpdate=!0,Ai(E,G,$),E.side=tn):Ai(E,G,$)}this.compile=function(E,G,se=null){se===null&&(se=E),W!==null&&W.renderStart(E,G,se),T=ue.get(se),T.init(G),b.push(T),se.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),E!==se&&E.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),T.setupLights(),W!==null&&W.updateLights(T.state.lightsArray),We=this.localClippingEnabled,De=fe.init(this.clippingPlanes,We),De===!0&&fe.setGlobalState(this.clippingPlanes,G),W!==null&&Ae.render(T.state.shadowsArray,se,G);let $=new Set;return E.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Be=Q.material;if(Be)if(Array.isArray(Be))for(let Je=0;Je<Be.length;Je++){let Re=Be[Je];Oi(Re,se,G,Q),$.add(Re)}else Oi(Be,se,G,Q),$.add(Be)}),T=b.pop(),W!==null&&W.renderEnd(),$},this.compileAsync=function(E,G,se=null){let $=this.compile(E,G,se);return new Promise(Q=>{function Be(){if($.forEach(function(Je){let Xe=at.get(Je).currentProgram;(Xe===void 0||Xe.isReady())&&$.delete(Je)}),$.size===0){Q(E);return}setTimeout(Be,10)}ut.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Cs=null;function rr(E){Cs&&Cs(E)}function Lr(){Xi.stop()}function or(){Xi.start()}let Xi=new ug;Xi.setAnimationLoop(rr),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(E){Cs=E,Ee.setAnimationLoop(E),E===null?Xi.stop():Xi.start()},Ee.addEventListener("sessionstart",Lr),Ee.addEventListener("sessionend",or),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;W!==null&&W.renderStart(E,G);let se=Ee.enabled===!0&&Ee.isPresenting===!0,$=z!==null&&(re===null||se)&&z.begin(N,re);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(G),G=Ee.getCamera()),E.isScene===!0&&E.onBeforeRender(N,E,G,re),T=ue.get(E,b.length),T.init(G),T.state.textureUnits=dt.getTextureUnits(),b.push(T),Pe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?de.setFromArrayCamera(G):ye.setFromProjectionMatrix(Pe,$i,G.reversedDepth),We=this.localClippingEnabled,De=fe.init(this.clippingPlanes,We),C=Le.get(E,x.length),C.init(),x.push(C),this.info.render.frame++,Ee.enabled===!0&&Ee.isPresenting===!0){let Je=N.xr.getDepthSensingMesh();Je!==null&&qi(Je,G,-1/0,N.sortObjects)}qi(E,G,0,N.sortObjects),C.finish(),W!==null&&W.updateLights(T.state.lightsArray),N.sortObjects===!0&&C.sort(ze,un),it=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,it&&U.addToRenderList(C,E),this.info.autoReset===!0&&this.info.reset(),De===!0&&fe.beginShadows();let Q=T.state.shadowsArray;if(Ae.render(Q,E,G),De===!0&&fe.endShadows(),($&&z.hasRenderPass())===!1){let Je=C.opaque,Re=C.transmissive;if(T.setupLights(),G.isArrayCamera){let Xe=G.cameras;if(Re.length>0)for(let nt=0,ht=Xe.length;nt<ht;nt++){let Tt=Xe[nt];ar(Je,Re,E,Tt)}it&&U.render(E);for(let nt=0,ht=Xe.length;nt<ht;nt++){let Tt=Xe[nt];ts(C,E,Tt,Tt.viewport)}}else Re.length>0&&ar(Je,Re,E,G),it&&U.render(E),ts(C,E,G)}re!==null&&ee===0&&(dt.updateMultisampleRenderTarget(re),dt.updateRenderTargetMipmap(re)),$&&z.end(N),E.isScene===!0&&E.onAfterRender(N,E,G),Ce.resetDefaultState(),ne=-1,ce=null,b.pop(),b.length>0?(T=b[b.length-1],dt.setTextureUnits(T.state.textureUnits),De===!0&&fe.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?C=x[x.length-1]:C=null,W!==null&&W.renderEnd()};function qi(E,G,se,$){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)se=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){let Je=G.isArrayCamera?de:ye;if(!E.frustumCulled||E.intersectsFrustum(Je)){$&&Ze.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pe);let Re=Te.update(E),Xe=E.material;Xe.visible&&C.push(E,Re,Xe,se,Ze.z,null,G)}}else if(E.isMesh||E.isLine||E.isPoints){let Je=G.isArrayCamera?de:ye;if(!E.frustumCulled||E.intersectsFrustum(Je)){let Re=Te.update(E),Xe=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ze.copy(E.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ze.copy(Re.boundingSphere.center)),Ze.applyMatrix4(E.matrixWorld).applyMatrix4(Pe)),Array.isArray(Xe)){let nt=Re.groups;for(let ht=0,Tt=nt.length;ht<Tt;ht++){let et=nt[ht],Ft=Xe[et.materialIndex];Ft&&Ft.visible&&C.push(E,Re,Ft,se,Ze.z,et,G)}}else Xe.visible&&C.push(E,Re,Xe,se,Ze.z,null,G)}}}let Be=E.children;for(let Je=0,Re=Be.length;Je<Re;Je++)qi(Be[Je],G,se,$)}function ts(E,G,se,$){let{opaque:Q,transmissive:Be,transparent:Je}=E;T.setupLightsView(se),De===!0&&fe.setGlobalState(N.clippingPlanes,se),$&&Ue.viewport(_e.copy($)),Q.length>0&&Is(Q,G,se),Be.length>0&&Is(Be,G,se),Je.length>0&&Is(Je,G,se),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function ar(E,G,se,$){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[$.id]===void 0){let et=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[$.id]=new Gi(1,1,{generateMipmaps:!0,type:et?bi:Ui,minFilter:Si,samples:Math.max(4,xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}let Be=T.state.transmissionRenderTarget[$.id],Je=$.viewport||_e;Be.setSize(Je.z*N.transmissionResolutionScale,Je.w*N.transmissionResolutionScale);let Re=N.getRenderTarget(),Xe=N.getActiveCubeFace(),nt=N.getActiveMipmapLevel();N.setRenderTarget(Be),N.getClearColor(ie),we=N.getClearAlpha(),we<1&&N.setClearColor(16777215,.5),N.clear(),it&&U.render(se);let ht=N.toneMapping;N.toneMapping=Ts;let Tt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),T.setupLightsView($),De===!0&&fe.setGlobalState(N.clippingPlanes,$),Is(E,se,$),dt.updateMultisampleRenderTarget(Be),dt.updateRenderTargetMipmap(Be),ut.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ft=0,xn=G.length;Ft<xn;Ft++){let $t=G[Ft],{object:Kt,geometry:yn,material:je,group:En}=$t;if(je.side===tn&&Kt.layers.test($.layers)){let kt=je.side;je.side=Mi,je.needsUpdate=!0,Yi(Kt,se,$,yn,je,En),je.side=kt,je.needsUpdate=!0,et=!0}}et===!0&&(dt.updateMultisampleRenderTarget(Be),dt.updateRenderTargetMipmap(Be))}N.setRenderTarget(Re,Xe,nt),N.setClearColor(ie,we),Tt!==void 0&&($.viewport=Tt),N.toneMapping=ht}function Is(E,G,se){let $=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,Be=E.length;Q<Be;Q++){let Je=E[Q],{object:Re,geometry:Xe,group:nt}=Je,ht=Je.material;ht.allowOverride===!0&&$!==null&&(ht=$),Re.layers.test(se.layers)&&Yi(Re,G,se,Xe,ht,nt)}}function Yi(E,G,se,$,Q,Be){W!==null&&Q.isNodeMaterial&&W.setObject(E,Q),E.onBeforeRender(N,G,se,$,Q,Be),E.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Q.onBeforeRender(N,G,se,$,E,Be),Q.transparent===!0&&Q.side===tn&&Q.forceSinglePass===!1?(Q.side=Mi,Q.needsUpdate=!0,N.renderBufferDirect(se,G,$,Q,E,Be),Q.side=ws,Q.needsUpdate=!0,N.renderBufferDirect(se,G,$,Q,E,Be),Q.side=tn):N.renderBufferDirect(se,G,$,Q,E,Be),E.onAfterRender(N,G,se,$,Q,Be)}function Vn(E){let G=0;for(let se of E)se.texture!==null&&G++;return G}function Ai(E,G,se){G.isScene!==!0&&(G=ot);let $=at.get(E),Q=T.state.lights,Be=T.state.shadowsArray,Je=Q.state.version,Re=oe.getParameters(E,Q.state,Be,G,se,T.state.lightProbeGridArray),Xe=oe.getProgramCacheKey(Re),nt=$.programs;$.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,$.fog=G.fog;let ht=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;$.envMap=I.get(E.envMap||$.environment,ht),$.envMapRotation=$.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,nt===void 0&&(E.addEventListener("dispose",Zt),nt=new Map,$.programs=nt,$.programVariants=new Map);let Tt=nt.get(Xe);if(Tt!==void 0){if($.currentProgram===Tt&&$.lightsStateVersion===Je)return cr(E,Re),Tt}else Re.uniforms=oe.getUniforms(E),W!==null&&E.isNodeMaterial&&W.build(E,se,Re),E.onBeforeCompile(Re,N),Tt=oe.acquireProgram(Re,Xe),nt.set(Xe,Tt),$.uniforms=Re.uniforms;let et=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(et.clippingPlanes=fe.uniform),cr(E,Re),$.needsLights=Ei(E),$.lightsStateVersion=Je,$.needsLights&&(et.ambientLightColor.value=Q.state.ambient,et.lightProbe.value=Q.state.probe,et.sunLights.value=Q.state.sun,et.sunLightShadows.value=Q.state.sunShadow,et.directionalLights.value=Q.state.directional,et.directionalLightShadows.value=Q.state.directionalShadow,et.spotLights.value=Q.state.spot,et.spotLightShadows.value=Q.state.spotShadow,et.rectAreaLights.value=Q.state.rectArea,et.ltc_1.value=Q.state.rectAreaLTC1,et.ltc_2.value=Q.state.rectAreaLTC2,et.pointLights.value=Q.state.point,et.pointLightShadows.value=Q.state.pointShadow,et.hemisphereLights.value=Q.state.hemi,et.sunShadowMatrix.value=Q.state.sunShadowMatrix,et.sunShadowCascade.value=Q.state.sunShadowCascade,et.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,et.spotLightMatrix.value=Q.state.spotLightMatrix,et.spotLightMap.value=Q.state.spotLightMap,et.pointShadowMatrix.value=Q.state.pointShadowMatrix),$.numLightProbeGrids=Vn(T.state.lightProbeGridArray),$.currentProgram=Tt,$.uniformsList=null,Tt}function Ps(E,G,se,$,Q){let Be=at.get(E),Je=Be.currentProgram.id+","+$+","+Q,Re=Be.programVariants.get(Je);return Re===void 0?(Re=Ai(E,G,se),Be.programVariants.set(Je,Re)):(Be.currentProgram=Re,Be.uniformsList=null,Be.outputColorSpace=$,Be.toneMapping=Q),Re}function lr(E){if(E.uniformsList===null){let G=E.currentProgram.getUniforms();E.uniformsList=oa.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function cr(E,G){let se=at.get(E);se.outputColorSpace=G.outputColorSpace,se.batching=G.batching,se.batchingColor=G.batchingColor,se.instancing=G.instancing,se.instancingColor=G.instancingColor,se.instancingMorph=G.instancingMorph,se.skinning=G.skinning,se.morphTargets=G.morphTargets,se.morphNormals=G.morphNormals,se.morphColors=G.morphColors,se.morphTargetsCount=G.morphTargetsCount,se.numClippingPlanes=G.numClippingPlanes,se.numIntersection=G.numClipIntersection,se.vertexAlphas=G.vertexAlphas,se.vertexTangents=G.vertexTangents,se.toneMapping=G.toneMapping}function On(E,G,se,$,Q){G.isScene!==!0&&(G=ot),dt.resetTextureUnits();let Be=G.fog,Je=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?G.environment:null,Re=re===null?N.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Wt.workingColorSpace,Xe=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,nt=I.get($.envMap||Je,Xe),ht=$.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Tt=!!se.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),et=!!se.morphAttributes.position,Ft=!!se.morphAttributes.normal,xn=!!se.morphAttributes.color,$t=Ts;$.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&($t=N.toneMapping);let Kt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,yn=Kt!==void 0?Kt.length:0,je=at.get($),En=T.state.lights;if(De===!0&&(We===!0||E!==ce)){let At=E===ce&&$.id===ne;fe.setState($,E,At)}let kt=!1,pi=!1;$.version===je.__version?je.needsLights&&je.lightsStateVersion!==En.state.version||Q.isBatchedMesh&&je.batching===!1||!Q.isBatchedMesh&&je.batching===!0||Q.isBatchedMesh&&je.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&je.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&je.instancing===!1||!Q.isInstancedMesh&&je.instancing===!0||Q.isSkinnedMesh&&je.skinning===!1||!Q.isSkinnedMesh&&je.skinning===!0||Q.isInstancedMesh&&je.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&je.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&je.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&je.instancingMorph===!1&&Q.morphTexture!==null||je.envMap!==nt||$.fog===!0&&je.fog!==Be||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==fe.numPlanes||je.numIntersection!==fe.numIntersection)||je.vertexAlphas!==ht||je.vertexTangents!==Tt||je.morphTargets!==et||je.morphNormals!==Ft||je.morphColors!==xn||je.morphTargetsCount!==yn||je.numLightProbeGrids!==Vn(T.state.lightProbeGridArray)?kt=!0:(je.outputColorSpace!==Re||je.toneMapping!==$t)&&(pi=!0):(kt=!0,je.__version=$.version);let en=je.currentProgram;(kt===!0||pi===!0)&&(en=pi===!0?Ps($,G,Q,Re,$t):Ai($,G,Q),W&&$.isNodeMaterial&&W.onUpdateProgram($,en,je));let Ls=!1,Qt=!1,Rn=!1,ft=en.getUniforms(),Cn=je.uniforms;if(Ue.useProgram(en.program)&&(Ls=!0,Qt=!0,Rn=!0),$.id!==ne&&(ne=$.id,Qt=!0),Ls||ce!==E){Ue.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ft.setValue(H,"projectionMatrix",E.projectionMatrix),ft.setValue(H,"viewMatrix",E.matrixWorldInverse);let Dt=ft.map.cameraPosition;Dt!==void 0&&Dt.setValue(H,_t.setFromMatrixPosition(E.matrixWorld)),xt.logarithmicDepthBuffer&&ft.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ft.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),ce!==E&&(ce=E,Qt=!0,Rn=!0)}if(je.needsLights&&(En.state.sunShadowMap.length>0&&ft.setValue(H,"sunShadowMap",En.state.sunShadowMap,dt),En.state.directionalShadowMap.length>0&&ft.setValue(H,"directionalShadowMap",En.state.directionalShadowMap,dt),En.state.spotShadowMap.length>0&&ft.setValue(H,"spotShadowMap",En.state.spotShadowMap,dt),En.state.pointShadowMap.length>0&&ft.setValue(H,"pointShadowMap",En.state.pointShadowMap,dt)),Q.isSkinnedMesh){ft.setOptional(H,Q,"bindMatrix"),ft.setOptional(H,Q,"bindMatrixInverse");let At=Q.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),ft.setValue(H,"boneTexture",At.boneTexture,dt))}Q.isBatchedMesh&&(ft.setOptional(H,Q,"batchingTexture"),ft.setValue(H,"batchingTexture",Q._matricesTexture,dt),ft.setOptional(H,Q,"batchingIdTexture"),ft.setValue(H,"batchingIdTexture",Q._indirectTexture,dt),ft.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ft.setValue(H,"batchingColorTexture",Q._colorsTexture,dt));let sn=se.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&ge.update(Q,se,en),(Qt||je.receiveShadow!==Q.receiveShadow)&&(je.receiveShadow=Q.receiveShadow,ft.setValue(H,"receiveShadow",Q.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&G.environment!==null&&(Cn.envMapIntensity.value=G.environmentIntensity),Cn.dfgLUT!==void 0&&(Cn.dfgLUT.value=mS()),Qt){if(ft.setValue(H,"toneMappingExposure",N.toneMappingExposure),je.needsLights&&nn(Cn,Rn),Be&&$.fog===!0&&Ie.refreshFogUniforms(Cn,Be),Ie.refreshMaterialUniforms(Cn,$,me,$e,T.state.transmissionRenderTarget[E.id]),je.needsLights&&je.numLightProbeGrids>0){let At=S,Dt=0;for(let Bn of T.state.lightProbeGridArray)Bn.texture!==null&&(At.textures[Dt]=Bn.texture,At.min[Dt]=Bn.boundingBox.min,At.max[Dt]=Bn.boundingBox.max,At.resolution[Dt]=Bn.resolution,Dt++);for(let Bn in At)At[Bn].length=Dt;Cn.probesSH.value=At.textures,Cn.probesMin.value=At.min,Cn.probesMax.value=At.max,Cn.probesResolution.value=At.resolution}oa.upload(H,lr(je),Cn,dt)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(oa.upload(H,lr(je),Cn,dt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ft.setValue(H,"center",Q.center),ft.setValue(H,"modelViewMatrix",Q.modelViewMatrix),ft.setValue(H,"normalMatrix",Q.normalMatrix),ft.setValue(H,"modelMatrix",Q.matrixWorld),$.uniformsGroups!==void 0){let At=$.uniformsGroups;for(let Dt=0,Bn=At.length;Dt<Bn;Dt++){let Jn=At[Dt];Qe.update(Jn,en),Qe.bind(Jn,en)}}return en}function nn(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.sunLights.needsUpdate=G,E.sunLightShadows.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function Ei(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(E,G,se){let $=at.get(E);$.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),at.get(E.texture).__webglTexture=G,at.get(E.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:se,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,G){let se=at.get(E);se.__webglFramebuffer=G,se.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,se=0){re=E,Y=G,ee=se;let $=null,Q=!1,Be=!1;if(E){let Re=at.get(E);if(Re.__useDefaultFramebuffer!==void 0){Ue.bindFramebuffer(H.FRAMEBUFFER,Re.__webglFramebuffer),_e.copy(E.viewport),Fe.copy(E.scissor),He=E.scissorTest,Ue.viewport(_e),Ue.scissor(Fe),Ue.setScissorTest(He),ne=-1;return}else if(Re.__webglFramebuffer===void 0)dt.setupRenderTarget(E);else if(Re.__hasExternalTextures)dt.rebindTextures(E,at.get(E.texture).__webglTexture,at.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ht=E.depthTexture;if(Re.__boundDepthTexture!==ht){if(ht!==null&&at.has(ht)&&(E.width!==ht.image.width||E.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(E)}}let Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Be=!0);let nt=at.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(nt[G])?$=nt[G][se]:$=nt[G],Q=!0):E.samples>0&&dt.useMultisampledRTT(E)===!1?$=at.get(E).__webglMultisampledFramebuffer:Array.isArray(nt)?$=nt[se]:$=nt,_e.copy(E.viewport),Fe.copy(E.scissor),He=E.scissorTest}else _e.copy(rt).multiplyScalar(me).floor(),Fe.copy(Ct).multiplyScalar(me).floor(),He=gt;if(se!==0&&($=Z),Ue.bindFramebuffer(H.FRAMEBUFFER,$)&&Ue.drawBuffers(E,$),Ue.viewport(_e),Ue.scissor(Fe),Ue.setScissorTest(He),Q){let Re=at.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,Re.__webglTexture,se)}else if(Be){let Re=G;for(let Xe=0;Xe<E.textures.length;Xe++){let nt=at.get(E.textures[Xe]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Xe,nt.__webglTexture,se,Re)}}else if(E!==null&&se!==0){let Re=at.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Re.__webglTexture,se)}ne=-1};function ns(E){let G=at.get(E);return(G.__readFormat!==E.format||G.__readType!==E.type)&&(G.__readFormat=E.format,G.__readType=E.type,G.__formatReadable=xt.textureFormatReadable(E.format),G.__typeReadable=xt.textureTypeReadable(E.type)),G}this.readRenderTargetPixels=function(E,G,se,$,Q,Be,Je,Re=0){if(!(E&&E.isWebGLRenderTarget)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=at.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Je!==void 0&&(Xe=Xe[Je],Array.isArray(Xe)&&(Xe=Xe[0])),Xe){Ue.bindFramebuffer(H.FRAMEBUFFER,Xe);try{let nt=E.textures[Re],ht=nt.format,Tt=nt.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Re);let et=ns(nt);if(et.__formatReadable===!1){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(et.__typeReadable===!1){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-$&&se>=0&&se<=E.height-Q&&H.readPixels(G,se,$,Q,Ne.convert(ht),Ne.convert(Tt),Be)}finally{let nt=re!==null?at.get(re).__webglFramebuffer:null;Ue.bindFramebuffer(H.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(E,G,se,$,Q,Be,Je,Re=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=at.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Je!==void 0&&(Xe=Xe[Je],Array.isArray(Xe)&&(Xe=Xe[0])),Xe)if(G>=0&&G<=E.width-$&&se>=0&&se<=E.height-Q){Ue.bindFramebuffer(H.FRAMEBUFFER,Xe);let nt=E.textures[Re],ht=nt.format,Tt=nt.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Re);let et=ns(nt);if(et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ft=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ft),H.bufferData(H.PIXEL_PACK_BUFFER,Be.byteLength,H.STREAM_READ),H.readPixels(G,se,$,Q,Ne.convert(ht),Ne.convert(Tt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let xn=re!==null?at.get(re).__webglFramebuffer:null;Ue.bindFramebuffer(H.FRAMEBUFFER,xn);let $t=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Nm(H,$t,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ft),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Be),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Ft),H.deleteSync($t),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,G=null,se=0){let $=Math.pow(2,-se),Q=Math.floor(E.image.width*$),Be=Math.floor(E.image.height*$),Je=G!==null?G.x:0,Re=G!==null?G.y:0;dt.setTexture2D(E,0),H.copyTexSubImage2D(H.TEXTURE_2D,se,0,0,Je,Re,Q,Be),Ue.unbindTexture()},this.copyTextureToTexture=function(E,G,se=null,$=null,Q=0,Be=0){let Je,Re,Xe,nt,ht,Tt,et,Ft,xn,$t=E.isCompressedTexture?E.mipmaps[Be]:E.image;if(se!==null)Je=se.max.x-se.min.x,Re=se.max.y-se.min.y,Xe=se.isBox3?se.max.z-se.min.z:1,nt=se.min.x,ht=se.min.y,Tt=se.isBox3?se.min.z:0;else{let ft=Math.pow(2,-Q);Je=Math.floor($t.width*ft),Re=Math.floor($t.height*ft),E.isDataArrayTexture?Xe=$t.depth:E.isData3DTexture?Xe=Math.floor($t.depth*ft):Xe=1,nt=0,ht=0,Tt=0}$!==null?(et=$.x,Ft=$.y,xn=$.z):(et=0,Ft=0,xn=0);let Kt=Ne.convert(G.format),yn=Ne.convert(G.type),je;G.isData3DTexture?(dt.setTexture3D(G,0),je=H.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(dt.setTexture2DArray(G,0),je=H.TEXTURE_2D_ARRAY):(dt.setTexture2D(G,0),je=H.TEXTURE_2D),Ue.activeTexture(H.TEXTURE0),Ue.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),Ue.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),Ue.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);let En=Ue.getParameter(H.UNPACK_ROW_LENGTH),kt=Ue.getParameter(H.UNPACK_IMAGE_HEIGHT),pi=Ue.getParameter(H.UNPACK_SKIP_PIXELS),en=Ue.getParameter(H.UNPACK_SKIP_ROWS),Ls=Ue.getParameter(H.UNPACK_SKIP_IMAGES);Ue.pixelStorei(H.UNPACK_ROW_LENGTH,$t.width),Ue.pixelStorei(H.UNPACK_IMAGE_HEIGHT,$t.height),Ue.pixelStorei(H.UNPACK_SKIP_PIXELS,nt),Ue.pixelStorei(H.UNPACK_SKIP_ROWS,ht),Ue.pixelStorei(H.UNPACK_SKIP_IMAGES,Tt);let Qt=E.isDataArrayTexture||E.isData3DTexture,Rn=G.isDataArrayTexture||G.isData3DTexture;if(E.isDepthTexture){let ft=at.get(E),Cn=at.get(G),sn=at.get(ft.__renderTarget),At=at.get(Cn.__renderTarget);Ue.bindFramebuffer(H.READ_FRAMEBUFFER,sn.__webglFramebuffer),Ue.bindFramebuffer(H.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Dt=0;Dt<Xe;Dt++)Qt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,at.get(E).__webglTexture,Q,Tt+Dt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,at.get(G).__webglTexture,Be,xn+Dt)),H.blitFramebuffer(nt,ht,nt+Je,ht+Re,et,Ft,et+Je,Ft+Re,H.DEPTH_BUFFER_BIT,H.NEAREST);Ue.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||E.isRenderTargetTexture||at.has(E)){let ft=at.get(E),Cn=at.get(G);Ue.bindFramebuffer(H.READ_FRAMEBUFFER,P),Ue.bindFramebuffer(H.DRAW_FRAMEBUFFER,q);for(let sn=0;sn<Xe;sn++)Qt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ft.__webglTexture,Q,Tt+sn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ft.__webglTexture,Q),Rn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Cn.__webglTexture,Be,xn+sn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Cn.__webglTexture,Be),Q!==0?H.blitFramebuffer(nt,ht,nt+Je,ht+Re,et,Ft,et+Je,Ft+Re,H.COLOR_BUFFER_BIT,H.NEAREST):Rn?H.copyTexSubImage3D(je,Be,et,Ft,xn+sn,nt,ht,Je,Re):H.copyTexSubImage2D(je,Be,et,Ft,nt,ht,Je,Re);Ue.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Rn?E.isDataTexture||E.isData3DTexture?H.texSubImage3D(je,Be,et,Ft,xn,Je,Re,Xe,Kt,yn,$t.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(je,Be,et,Ft,xn,Je,Re,Xe,Kt,$t.data):H.texSubImage3D(je,Be,et,Ft,xn,Je,Re,Xe,Kt,yn,$t):E.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Be,et,Ft,Je,Re,Kt,yn,$t.data):E.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Be,et,Ft,$t.width,$t.height,Kt,$t.data):H.texSubImage2D(H.TEXTURE_2D,Be,et,Ft,Je,Re,Kt,yn,$t);Ue.pixelStorei(H.UNPACK_ROW_LENGTH,En),Ue.pixelStorei(H.UNPACK_IMAGE_HEIGHT,kt),Ue.pixelStorei(H.UNPACK_SKIP_PIXELS,pi),Ue.pixelStorei(H.UNPACK_SKIP_ROWS,en),Ue.pixelStorei(H.UNPACK_SKIP_IMAGES,Ls),Be===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&H.generateMipmap(je),Ue.unbindTexture()},this.initRenderTarget=function(E){at.get(E).__webglFramebuffer===void 0&&dt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?dt.setTextureCube(E,0):E.isData3DTexture?dt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?dt.setTexture2DArray(E,0):dt.setTexture2D(E,0),Ue.unbindTexture()},this.resetState=function(){Y=0,ee=0,re=null,Ue.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Wt._getUnpackColorSpace()}};function Yd(i,e){if(e===_d)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ra||e===vl){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ra)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Sg(i){let e=new Map,t=new Map,n=i.clone();return bg(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function bg(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)bg(i.children[n],e.children[n],t)}var kh=class extends ds{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ef(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new pf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new Qd(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new jd(t)}),this.register(function(t){return new Gh(t,qt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Gh(t,qt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new mf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=tr.extractUrlBase(e);o=tr.resolveURL(c,this.path)}else o=tr.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Zr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Rg){try{o[qt.KHR_BINARY_GLTF]=new gf(e)}catch(u){s&&s(u);return}r=JSON.parse(o[qt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new bf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case qt.KHR_MATERIALS_UNLIT:o[u]=new $d;break;case qt.KHR_DRACO_MESH_COMPRESSION:o[u]=new _f(r,this.dracoLoader);break;case qt.KHR_TEXTURE_TRANSFORM:o[u]=new xf;break;case qt.KHR_MESH_QUANTIZATION:o[u]=new yf;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function gS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Dn(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var qt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},jd=class{constructor(e){this.parser=e,this.name=qt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ve(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],ni);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new bs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new er(h),c.distance=u;break;case"spot":c=new Qs(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Rs(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},$d=class{constructor(){this.name=qt.KHR_MATERIALS_UNLIT}getMaterialType(){return _n}extendParams(e,t,n){let s=[];e.color=new Ve(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ni),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,dn))}return Promise.all(s)}},Qd=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Dn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ef=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Dn(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let n=Dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(r,r)}return Promise.all(s)}},tf=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Dn(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let n=Dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},nf=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Dn(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let n=Dn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},sf=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Dn(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let n=Dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},rf=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Dn(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let n=Dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],ni)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,dn)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},of=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Dn(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let n=Dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},af=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Dn(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let n=Dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(r[0],r[1],r[2],ni),Promise.all(s)}},lf=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_IOR}getMaterialType(e){return Dn(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let n=Dn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},cf=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Dn(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let n=Dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(r[0],r[1],r[2],ni),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,dn)),Promise.all(s)}},hf=class{constructor(e){this.parser=e,this.name=qt.EXT_MATERIALS_BUMP}getMaterialType(e){return Dn(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let n=Dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},uf=class{constructor(e){this.parser=e,this.name=qt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Dn(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let n=Dn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},df=class{constructor(e){this.parser=e,this.name=qt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},ff=class{constructor(e){this.parser=e,this.name=qt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},pf=class{constructor(e){this.parser=e,this.name=qt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Gh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},mf=class{constructor(e){this.name=qt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Qi.TRIANGLES&&c.mode!==Qi.TRIANGLE_STRIP&&c.mode!==Qi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let p of u){let M=new Mt,m=new F,g=new _i,v=new F(1,1,1),A=new Ka(p.geometry,p.material,d);for(let C=0;C<d;C++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,C),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,C),l.SCALE&&v.fromBufferAttribute(l.SCALE,C),A.setMatrixAt(C,M.compose(m,g,v));let S=null;for(let C in l)if(C==="_COLOR_0"){let T=l[C];A.instanceColor=new Ys(T.array,T.itemSize,T.normalized)}else if(C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"){if(S===null){let x=A.geometry;S=new ln,S.name=x.name;for(let b in x.attributes)S.setAttribute(b,x.attributes[b]);for(let b in x.morphAttributes)S.morphAttributes[b]=x.morphAttributes[b];x.index!==null&&S.setIndex(x.index),S.morphTargetsRelative=x.morphTargetsRelative;for(let b of x.groups)S.addGroup(b.start,b.count,b.materialIndex);x.boundingBox!==null&&(S.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(S.boundingSphere=x.boundingSphere.clone()),S.drawRange.start=x.drawRange.start,S.drawRange.count=x.drawRange.count,S.userData=Object.assign({},x.userData),A.geometry=S}let T=l[C];S.setAttribute(C,new Ys(T.array,T.itemSize,T.normalized))}Tn.prototype.copy.call(A,p),this.parser.assignFinalMaterial(A),f.push(A)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Rg="glTF",Al=12,wg={JSON:1313821514,BIN:5130562},gf=class{constructor(e){this.name=qt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Al),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Al,r=new DataView(e,Al),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===wg.JSON){let c=new Uint8Array(e,Al+o,a);this.content=n.decode(c)}else if(l===wg.BIN){let c=Al+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},_f=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Mf[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Mf[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=la[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let M=f.attributes[p],m=l[p];m!==void 0&&(M.normalized=m)}u(f)},a,c,ni,d)})})}},xf=class{constructor(){this.name=qt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},yf=class{constructor(){this.name=qt.KHR_MESH_QUANTIZATION}},Hh=class extends Ss{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,M=p-c,m=-2*f+3*d,g=f-d,v=1-m,A=g-d+u;for(let S=0;S!==a;S++){let C=o[M+S+a],T=o[M+S+l]*h,x=o[p+S+a],b=o[p+S]*h;r[S]=v*C+A*T+m*x+g*b}return r}},_S=new _i,vf=class extends Hh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return _S.fromArray(r).normalize().toArray(r),r}},Qi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},la={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tg={9728:Gn,9729:Mn,9984:Zc,9985:ia,9986:no,9987:Si},Ag={33071:ci,33648:gr,10497:Xn},Kd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Cr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xS={CUBICSPLINE:void 0,LINEAR:Vr,STEP:Hr},Zd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ct({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ws})),i.DefaultMaterial}function ro(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Rs(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function MS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function SS(i){let e,t=i.extensions&&i.extensions[qt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jd(t.attributes):e=i.indices+":"+Jd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Jd(i.targets[n]);return e}function Jd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Sf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var wS=new Mt,bf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new Jr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new fl(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ro(r,a,s),Rs(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(tr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Kd[s.type],a=la[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ut(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Kd[s.type],c=la[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,M,m;if(f&&f!==u){let g=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,A=t.cache.get(v);A||(M=new c(a,g*f,s.count*f/h),A=new Xr(M,f/h),t.cache.add(v,A)),m=new yr(A,l,d%f/h,p)}else a===null?M=new c(s.count*l):M=new c(a,d,s.count*l),m=new Ut(M,l,p);if(s.sparse!==void 0){let g=Kd.SCALAR,v=la[s.sparse.indices.componentType],A=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,C=new v(o[1],A,s.sparse.count*g),T=new c(o[2],S,s.sparse.count*l);a!==null&&(m=new Ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,b=C.length;x<b;x++){let z=C[x];if(m.setX(z,T[x*l]),l>=2&&m.setY(z,T[x*l+1]),l>=3&&m.setZ(z,T[x*l+2]),l>=4&&m.setW(z,T[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Tg[d.magFilter]||Mn,h.minFilter=Tg[d.minFilter]||Si,h.wrapS=Ag[d.wrapS]||Xn,h.wrapT=Ag[d.wrapT]||Xn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Gn&&h.minFilter!==Mn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,p){t.parse(d,f,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let M=f;t.isImageBitmapLoader===!0&&(M=function(m){let g=new Hn(m);g.needsUpdate=!0,f(g)}),t.load(tr.resolveURL(d,r.path),M,void 0,p)})})}let u=h.then(function(d){return c===!0&&a.revokeObjectURL(l),Rs(d,o),d.userData.mimeType=o.mimeType||bS(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[qt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[qt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[qt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Vo,yi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ho,yi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ct}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[qt.KHR_MATERIALS_UNLIT]){let u=s[qt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ve(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],ni),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,dn)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=tn);let h=r.alphaMode||Zd.OPAQUE;if(h===Zd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Zd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==_n&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Me(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==_n&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==_n){let u=r.emissiveFactor;a.emissive=new Ve().setRGB(u[0],u[1],u[2],ni)}return r.emissiveTexture!==void 0&&o!==_n&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,dn)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Rs(u,r),t.associations.set(u,{materials:e}),r.extensions&&ro(s,u,r),u})}createUniqueName(e){let t=vn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[qt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Eg(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=SS(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[qt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Eg(new ln,c,t),c.mode===Qi.TRIANGLE_STRIP?d=d.then(f=>Yd(f,vl)):c.mode===Qi.TRIANGLE_FAN&&(d=d.then(f=>Yd(f,ra))),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?yS(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let M=h[f],m=o[f],g,v=c[f];if(m.mode===Qi.TRIANGLES||m.mode===Qi.TRIANGLE_STRIP||m.mode===Qi.TRIANGLE_FAN||m.mode===void 0){let A=r.isSkinnedMesh===!0,S=M.hasAttribute("skinIndex")&&M.hasAttribute("skinWeight");A&&S===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=A&&S?new qa(M,v):new tt(M,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Qi.LINES)g=new Za(M,v);else if(m.mode===Qi.LINE_STRIP)g=new qr(M,v);else if(m.mode===Qi.LINE_LOOP)g=new Ja(M,v);else if(m.mode===Qi.POINTS)g=new br(M,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&MS(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Rs(g,r),m.extensions&&ro(s,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ro(s,u[0],r),u[0];let d=new Xt;r.extensions&&ro(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kn(Uh.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new $r(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Rs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Mt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ya(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],p=s.samplers[f.sampler],M=f.target,m=M.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,v=s.parameters!==void 0?s.parameters[p.output]:p.output;M.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(p),h.push(M))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],M=u[3],m=u[4],g=[];for(let A=0,S=d.length;A<S;A++){let C=d[A],T=f[A],x=p[A],b=M[A],z=m[A];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();let N=n._createAnimationTracks(C,T,x,b,z);if(N)for(let O=0;O<N.length;O++)g.push(N[O])}let v=new hl(r,void 0,g);return Rs(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,wS)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new F().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Go:c.length>1?h=new Xt:c.length===1?h=c[0]:h=new Tn,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Rs(h,r),r.extensions&&ro(n,h,r),r.matrix!==void 0){let u=new Mt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Xt;n.name&&(r.name=s.createUniqueName(n.name)),Rs(r,n),n.extensions&&ro(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Sg(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof yi||d instanceof Hn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Cr[r.path]===Cr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Cr[r.path]){case Cr.weights:h=Js;break;case Cr.rotation:h=js;break;case Cr.translation:case Cr.scale:h=Tr;break;default:n.itemSize===1?h=Js:h=Tr;break}let u=s.interpolation!==void 0?xS[s.interpolation]:Vr,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let M=new h(l[f]+"."+Cr[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),o.push(M)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Sf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof js?vf:Hh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function TS(i,e,t){let n=e.attributes,s=new xi;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){let h=Sf(la[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new F,l=new F;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let M=Sf(la[d.componentType]);l.multiplyScalar(M)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Li;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Eg(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Mf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Wt.workingColorSpace!==ni&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Wt.workingColorSpace}" not supported.`),Rs(i,e),TS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?vS(i,e.targets,t):i})}var Vh=class extends ul{constructor(e){super(e),this.type=bi}parse(e){let o=function(b,z){switch(b){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(z||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(z||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(z||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(z||""))}},u=function(b,z,N){z=z||1024;let W=b.pos,Z=-1,P=0,q="",Y=String.fromCharCode.apply(null,new Uint16Array(b.subarray(W,W+128)));for(;0>(Z=Y.indexOf(`
`))&&P<z&&W<b.byteLength;)q+=Y,P+=Y.length,W+=128,Y=String.fromCharCode.apply(null,new Uint16Array(b.subarray(W,W+128)));return-1<Z?(N!==!1&&(b.pos+=P+Z+1),q+Y.slice(0,Z)):!1},d=function(b){let z=/^#\?(\S+)/,N=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,W=/^\s*FORMAT=(\S+)\s*$/,Z=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},q,Y;for((b.pos>=b.byteLength||!(q=u(b)))&&o(1,"no header found"),(Y=q.match(z))||o(3,"bad initial token"),P.valid|=1,P.programtype=Y[1],P.string+=q+`
`;q=u(b),q!==!1;){if(P.string+=q+`
`,q.charAt(0)==="#"){P.comments+=q+`
`;continue}if((Y=q.match(N))&&(P.gamma=parseFloat(Y[1])),(Y=q.match(O))&&(P.exposure=parseFloat(Y[1])),(Y=q.match(W))&&(P.valid|=2,P.format=Y[1]),(Y=q.match(Z))&&(P.valid|=4,P.height=parseInt(Y[1],10),P.width=parseInt(Y[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||o(3,"missing format specifier"),P.valid&4||o(3,"missing image size specifier"),P},f=function(b,z,N){let O=z;if(O<8||O>32767||b[0]!==2||b[1]!==2||b[2]&128)return new Uint8Array(b);O!==(b[2]<<8|b[3])&&o(3,"wrong scanline width");let W=new Uint8Array(4*z*N);W.length||o(4,"unable to allocate buffer space");let Z=0,P=0,q=4*O,Y=new Uint8Array(4),ee=new Uint8Array(q),re=N;for(;re>0&&P<b.byteLength;){P+4>b.byteLength&&o(1),Y[0]=b[P++],Y[1]=b[P++],Y[2]=b[P++],Y[3]=b[P++],(Y[0]!=2||Y[1]!=2||(Y[2]<<8|Y[3])!=O)&&o(3,"bad rgbe scanline format");let ne=0,ce;for(;ne<q&&P<b.byteLength;){ce=b[P++];let Fe=ce>128;if(Fe&&(ce-=128),(ce===0||ne+ce>q)&&o(3,"bad scanline data"),Fe){let He=b[P++];for(let ie=0;ie<ce;ie++)ee[ne++]=He}else ee.set(b.subarray(P,P+ce),ne),ne+=ce,P+=ce}let _e=O;for(let Fe=0;Fe<_e;Fe++){let He=0;W[Z]=ee[Fe+He],He+=O,W[Z+1]=ee[Fe+He],He+=O,W[Z+2]=ee[Fe+He],He+=O,W[Z+3]=ee[Fe+He],Z+=4}re--}return W},p=function(b,z,N,O){let W=b[z+3],Z=Math.pow(2,W-128)/255;N[O+0]=b[z+0]*Z,N[O+1]=b[z+1]*Z,N[O+2]=b[z+2]*Z,N[O+3]=1},M=function(b,z,N,O){let W=b[z+3],Z=Math.pow(2,W-128)/255;N[O+0]=xr.toHalfFloat(Math.min(b[z+0]*Z,65504)),N[O+1]=xr.toHalfFloat(Math.min(b[z+1]*Z,65504)),N[O+2]=xr.toHalfFloat(Math.min(b[z+2]*Z,65504)),N[O+3]=xr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let g=d(m),v=g.width,A=g.height,S=f(m.subarray(m.pos),v,A),C,T,x;switch(this.type){case di:x=S.length/4;let b=new Float32Array(x*4);for(let N=0;N<x;N++)p(S,N*4,b,N*4);C=b,T=di;break;case bi:x=S.length/4;let z=new Uint16Array(x*4);for(let N=0;N<x;N++)M(S,N*4,z,N*4);C=z,T=bi;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:v,height:A,data:C,header:g.string,gamma:g.gamma,exposure:g.exposure,type:T,colorSpace:ni,minFilter:Mn,magFilter:Mn,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var Cg="data:image/webp;base64,UklGRoAUAABXRUJQVlA4IHQUAAAwgQCdASo9BFwAPpFInUylq6KiINGpmXASCWljPdvTL8bFE/y5sMAvcl5fz+2f8qj/jenCUE+0SEaJEJrv4A3nf9o/4fTQ/zPcEdT/yfsCfrHyibRTPh8kIzr40x6XnJDnF/N/93r9f///B77dl7mM/6uz/NfP/vNNyD/+cv/Vf3ygWEVCN9KRG7DqqcqZC8PKPZTPsNqytTYdy8ynk8G0Sg+Oellu5R983GFoGoJioppiEZk8BfGxQ3gDoUMnPfH/rrehXT82lvSAqw/fUWH7/il9aeuQkvYe41GALAyfBC+Tx2sc9YatbwvlCx95YdUN2/i+cYn1ZNN5XFjxB/Uw5OGW4pzsZWHbJ2a18QPmL7wHWSzNSy43me2bjhUxFpnU3U9QZyiy16kJ8HPGMSEeiEiHknbwF8/nadf+TWM1GDlLfPb5zDlVsJo5dlbs2N8nk/72+rNSV5kTgvPo2mff/LHrzhhurKa11UcuDJzI9Qqju9DKeUMSye25aFDais49brwKHWp8MhU6uqTCP+8c/BHZ2kMB5T74y3S3djvzWbxwmbDbjibrf1zIXvmiIrz2RVQ4tT1D0qJ8HDVdGS7b+H1uBNb7nFrXjTE6gOHfn85nSNKwgdgfDolyjG6Qdr2RBIY9QBB8xhF3w+nl3h9aJQY1YsZbgg/brlFCg+Nqa4hWqjKgxqs2zYlPXreBsGnJBK0LJegwXGvX8AhRCW81O+aHJqAuR252DSWx9YrqbwBYI+OnVttICyAEhnTr6JKAwXONGbQshy25wDldYlJQOr0pvyDRk0+DCrtYkfTHJWHA1Y/Z+w8EAq/YJMg9EbM47hwdJYYdliRjlzy4elbNfj6Yke3Ak4DjFuUXbfOft1kCI2LEWHp97njI4LalgiOXo3tucJwm4J0dkbjtm5Vw1REh33JqlYTVnRWXAfKCK7IsHKXQhjSybtE/SSRZpMAnNyuxKDlRWq7fPvJTrtuQ/d7ySj/Jzofhjn7BAR90YpvjlSuCMiUoE2ZRF1e9zqWjqQjKTWALy2c3wyY4fdws5WiiKXm6y9AgaisBjbbeVOTO6ZiWS4yuSE3p9THp6PtvLK14PhtEvKIEY14jQ4d01V/58ZPeqypCpze0G/wIFTLYS7CcdmQ8RGVHPXW+WckDPzm5+KUmQikrVFQLVmgc/bKThh32wJTEWO8coxjdIzvsLa9Ywf2U53X7N0GREixI0ReeOWOoIofkpv90C+H3T1kUCUhk51d8XsQVqUZypiMcVeqTAwpsKtrhIhnlycABKF91G/8KAlESNRAMx9+T+DIGocEooEUESKz/H1W9z+AKJIGNRvOa/+OoskSiamTFtS8O7Dm2cybaotFOjtuhIX9cwEyO5CYFNtK+vt0okcEAAP7ugz3WACH/XHS3OaneVtqNfBwC9k6+yRRWEw44g7Ea/Kn8Ip+0azUScgGGhuUR+3B8C2P/YgFAOEHRnd+WprYM+gDA+Ov4bjJ6TjMBsmWjk8jQg0XEvv4vACV0V4She2T7lsmzVVNLc04DCkCCBWqvInO11RO+OMKfpvwSJ86wErBZtFDq6lCeqxYhTUjEiA0b0hILUQ/6jVlhtOhwO7k4oZHEsF5fUO74qLgV61NYfEIh3njMvb91YtExbcg8d6GHM2e91zv8Q5r/WsdQZK3nwLe9oeoH51WCmEjqNEZhbQzTSafmWAfCX2TPLIhPbZL15DRn46c0pchVFrT6OyypEWffRGMcz9+dPXChlS+CTeeLzJlF3r7itLAk9I4skyyxZInGfR3iID4ZP7FtPcgU3xhupeXewgc0Gj5WdX/E65PFPie0CSKXmrNFMMcRRKUkvcnSHVprrjrcOFWcD8kOEHFIE3K/3Ek+eJkQyKwB9EeizyWx7SzxRvJCgQJbnc/blT4uL0ND4fJyYN/FG886mHxeuzeUx15Z3DtYI0nhpeFIyyYAnQU7c/COsgIWX11wEyd3vA8M9fX/vidBffSF3LhEt60oCvPjs1koX9r0C4cFs3mUnARWBKne3J53Mp78bakRRlMS/QY0jMFmwY6F/IWMbOfAJYkdlVP1hOZZ8h/fwNfiiZKcvQtsDkgFp/iZgQS1gw40ztDXVXl1hfA/mbbzkJ8/KYXetMIgpGMLGplvyrHvTBEkW2xXezH/mn4W0JgZTmpKPwp4+PhrE1zOdlbLz8Nuz2J85WUiQU44yequ1XaJMbwL8l7AiQzHzzVNdFTt1EZqCNKe6um2jlqgioihrR7Q4Chud6ILAUG2SYIipWn+ZpP4gnPaJeRQynHK7rQQcMMr276OLG9jQkk31bNNsINmjldnE9ZsYY1z61lzH0meP8eDNj/yzHNZFx3+yl3FLnL9jrjdBrPtCY1qxx/PnLhPc/0XoiL4PGndRiYgFiOKaCaKrR+geg1jH3PRtND1qEjx/StbKiBtS0yR8FD05vx1zblUImSbG8tzq6/nvnP5iIyGeDenI5dRjyTdZUzrZLnw7pQKOzIwdL55JU7Rgdd9Onerbykv3NJ+fx84OEXh5fAAg016508vANHqHjYU7Gm36IhFYAwcvHrB1Pp6/vhRi1TvD0ntQQbPPBa/3gzoYdZ3a6izTyTs9WRmr0IWz/425T+2Gx5S0RhAOHf826rA3d+F2K2j3nYicwBW5Y64PuryBZm3nqvCEm5YACeUe39CUJd/e46A6/d3yUwuzcBAi10Iq3lugTtBsNKhfS/ngVyQGEsE1ILkTg8QpmCgjPsj0EqZgWnDchpMWRdFooh7GT5i46T7BLNjBWHPXjrfQRffpKk7AREnt8EnNzqtMOlDsGwDhY+QmoaJRfoFkkpq6CcH4YXoDXenDK7Jzsk1DG0nJLtzHYdKc+ocM69FtTa8SCR8zuvsplcMfwfV7aPVZvQWgou7lvXmKKfd8EX4Zm16wllTHjydNmwb4RB7iLLPdZknDhUEa7oEYS5biXw5f4z9FSmBPmJveXYxyptzd0FIgCnUpgFa1Gbc75nA4KASPxkHJQtTjBkMV/pCef53m2mZ5kv3dH6blsVH53FdXjlA2GdFCC5+KNTP6phhIk10JR+NMRfrsuBM506MfhIqeFaiNoWu7YnaiwugBjUiAn7y5Fqtc0aJkjw8j3s+kpzyjGS5fqF0HoyELsdiwngEsZWiZKyfayKnS7OuNuhxqyBcZsXHYXDK5INWX5jMlNCSwC2B4icoocN9pFYWisXrN4Ne8IAne0Ow3x195IizkEKUEBYZlqRpxBzoa7euJ0+8b34PxafQLjhZXLMouV89PJ45UIUeX+KHJujLRuSJ5XUQ8MmtnDreeDYy8zyIRt9Z8QREQtVFaiipdrIL6a9zQzxjQK+kisJBKfOuJtT1BFgu5ZbaO1rH5Gjnu4y3nuFjrlG5Mf36JKTs1ZLgE1l9QkPPR80+njjHcABwAId5Mw3nzBSzLUGPxoy8gKikmU9tDs3dZFgJdV5z2lh6SDq8jLVEYv//GCqNC64KV84//jD6SgX6qSbssSYOCLGg0YqWjJrqFSaaCQ/GomYrINKmNrwjcvKY5F114POw5EVKdvJ5MARBlsZAyr1VqHQ6HFF11FtGwuB0EXduJ6UbaV036c+flaLv1pTl9cR8Ds9krNp5++u7fHYoGNBhqtyAXKHqtX223VDlL5JFzgN8CTErZX8NsitSHjF4JgVJHYRwA8+lZBfCqc2CM8soQYX4scx4JCkPL6LG1GBNlhurW20+FVIfEEJgNuREmwTIrp90vVEsqH/PmpZqpErubdwRVAQlCfXgxh3Hr+W+oBTvPP/4s1QiBMVtTTfKSVRNy0bA+fG5dJaLlBMT70unrl7qUEn0Xk7F1YoQr49OKgL1TsxTUB0gZtGeTnGObT1rcfVX/Zl0Oxm4iLDHSEms5GsKVUcTWfcxjNLDef965K2q/qNTAAJFoG0fC1uSY6g+A+qOvpzgVBx0KxjsKkcUARjyCgfn/gFqjE+C4Y0mjRxB7JzG2wNeyROD7osFSXXUSB9CBxiMSB4ZelWZmvRn7jWOlxiuEvVgVgXc97XbLfKZxAjWebo6KRWLfZ8qLk0ZPKEsClg2HAwC4lxXL9WsbSjyhLnbxyfRNqZdwoaRR25pD14djojgtDcvDd//GgseaAPunuppvuUq0LhDsRev9iq6OvcjI9eoYtZK0WRvt8YKijmVHuUzOBPWXrtvbXgTyTQfe7ywtXvo82BtTbvO8ZUbuVAcpu8Ll726QSIVWFF1kOC55CrouJHe82Y+8h7tSqO3eIz6xCk8p51aJ4AIJW+92jx4ZfZtVhrqtIUh9+FgVqZLNw7HMsg09apn1LuVG3wXxiBOE8ccZ00qCxQ08HKSMzGrbQnIrg2xWgHUuuWXKYxE3J48fv1/4zVpA96eMQIaUmAlxQYGhvL29iaXgaKu6uvHlwyFbdfkRl5nSJxW5VSVu/4DOOxpy4zKcmKmWIT8zk6NTyUH/44cPuAkVfFwF7cGgZGRa1XvfTGXV/RGfaTLlv8fBS6HoGyI9ntr+pM7K2VQZB7nYO8SsTYqr4LN/0yN9YeP4SJ8JQsOxP9glmL3JbzI925K/Ilx6X5bWPo750fL3x+HHxsgCNTyYNV3tIlgf8/gYUd1p3RNW+tMxU9gT/IWB5vbz97NC9c0MzPXQxNZIgqZ6gaXKiwelArQMk5f3/VBxS4sV2hRup7zRoOhd0WKUj9GukMSjQ2dDIm1534i3s5nUcO1gjl+n/zkxYNbVezKNqQ0GsVAlKTsfNVHVccKnTba4P140bO286GMss5zCLWYihS9lIGF5j42OhdpzlEyWixNiXiS9I6jbWo1IwWi6/FznLGv9f7e8+RzhMYdonY1Qfj7CKESW9g3F+3nGMg+P3KQ8EPl9lG/Iymd3+IcbzUGSKzAGuKdMXg2ozOrq++V0VLj+O/q82Sjr20v5DQ5Sovn4n3/MKWd3uc1L8LzGzopO0h+nRBYp+8xnrULFpOxBI01fqDtPv3QsVFQL7HB5hv621ea/L16EutJ1iHGemH3BNjQGMISoQCNH24e6Y4UlnFhWyls7Sr7rFUIgw4qJlsyx3NJdp104DDlS4PmFArmZZ/eSwRAXln2mTbaQVaSuaOpR9lk5QRQQYKeHzFE+p95UNWSsobn7fAA2KGSvdMfBWVhQxLJCMWRXUHpblgT0EXoyo5GXxzFzTjg0eFmoMK05L3pAEho/lM9YeYkaJBMcCeuGmjKe63tbMwo8h6YaY0UcOzEO205La9XnE6a83CP/OVjHklu1bLX1xJHjN/UMPl+G9jz0s5w9ti1TC3huiUQQii/P6mLMw5Wj4xtifgXCWeJ0qNfChi316NE+RmSlxl0x48pnPuE7epjgKUGLh1OA2AScLffOOrR0tCo0Nlwm0vibJUOtoG7eU/fXwWlvBSVWjfpyLUWZAHxeD5XdNsv8TegsgxrBTi/vh+9woIQgzojjauTqDARIUHo3BS/phVf4YtbzdZ2CKSxt7VLSDIuilzlsDUrqsunJW7QLr3mQ+H9ldjHYdn78f6lNK/OOAut4ZVuXvM6hscRjBxgw8u5y6dmHjPwG/QdyW9tLsv2F3iSvC9fulx7lCLxicw/rGRsl+iWs3vb2ZQRAkOhn7927gOhBSDB9FKlcr/jD1CFcfDrtVH3PJDHiU95J/pIcPA1VXFqusspLCgEYi71BFj4wG2J/lp/4yQVKjRx7ok+1WGdocdeXGGOHr+7rtmstG5YRlnhofGWfhE3ddIydtphNKWr1ewyff/whXs/+QVDiIdT/1TA6uLNzWAgFvxaDbpK7BoyYJYAw0ohNkKH16uZbi1IawFd+M/frJ1EYDnNU25n2qj4ekwFslC9VK6eLex1cZxFnnBE+XMoSjoLndc8JOVEGJ6OB4vhNhpPgcuxAAxlB8vFyplOZ23bG0nESLUlH8/QSYsBdM6dgDslP3CTyzv1X1iCaK5DGauEsZVMMQSymYJoCvebeOA7D9q6kuKg/Rcw5SZPARCGoFVcavYWZ6kwmWM5tr7IDzRNkkUojd/k3U24kjSrWwxhb5OXCBzlnsKYJyrF4TmKEiCesbRrVwjAGK90Vev10CEvOf2rYohJLYTgEyMjJ5Y4g2lWn5p8NqvqyYIwfirYoVCimZPPw+xibicl+rsWBOcnQSp32HC1Y3cm81v4eFkyHoTFM/45ol2kK1vA3OmRLExBaX8prVJ0dsWvnkT9OGHOGGA+YPDOg36Daqwio0NfNuAEiHNLNNTOZgh1hJTuSTlHTBkWhB82pty7QGCu6FwQ9Gf5wSmP7kIxCyUV9tS59K0krN35fsV1CIh49hc2b8ctPDGrgW+HRRrpY5bt4aKvcs1vVRbO1LPEeX/c2CptYTCzm1wDqyKSy4MSOBNZ6XhTFtH0M0EGlO9H8GloYXcDDqxK9hoep/RYIDcGq/MmQdHUfWoUb5QA/ev/hy9frqDC67bmhex6Tk5RA227rrH+HWGH6JyE7u4mm4PNtokJdltRHSnxBDJIYHV+LURzsd3F8jQDTvHIUoFAIkCD46bMu4bOOvQWoAd9ebAhGiyqBimJ2wAqU4Lwtlpz28YQGeYYvLxI9mWcwOGmC691Mb1DhrtNqnhCS27vtETybb/4icZI/UOnHoYQgZdBi1Sot/T+HYCAFQBQfFeF7eJO1Vek+uUnM4B+TuniMHZ8Ddg07SK23RXPCj+DrhEym/quS6VkGevK97YW+8qisd/tstmedzy5O6O7ex/5LisZTMP7M5+gM9heKJSj3IFcxPQpgYyydyX0GtKTxKJhyTlRNFVo+ECbp9vg1GrdHwSuiE2rC5jinvHiHhlQJub3qfMJlS4Y9J303mxirrt6E2euGPhgsLbfSKrPA3yTik419EUyII2DDIC+ew3tVP4D69bIo3H1+re01EIN7CMA1i/LV6IBzw4IK9zaJo/xCsVR1QnIDf6FeOCbxR6FQ8/fBWS1qiLTGKopV0WDwW3GQqONFGhA9+ZkAAAA",Ig="data:image/webp;base64,UklGRuQEAABXRUJQVlA4INgEAAAwMgCdASraAkwAPolEnEulI6wnoFgJSYARCWluCv+9wf/5wfXooaOTIArgRthwcxwe6p02yl7NNWTrxBF+2eX+v/0ZsgL/3ANxaYHcG/GVoVGNKmJ7J5dufJF4wtuvDOPRV92szkn8kntNVaj7hZCZPJ4UE76Ptn7NW9BaqVLrbUe35LenGfkmdSAmYWtPJz3JU9E/raG6fObpPQyP5N5R0WSX94My7Hh4HW3Yxlr97c0xQqdCfhqtwKVfp7K+zChWIIzPFMDwvkEVq33FAqAeWTWrVa40W62O2hrDB6ZL1U7tlxLt7325ObNRWnHe3XQzsHBKgtN4KjG0HBhifeZoYTK2nhwUdehpXouLgSKTXZL/v69jwllV9+/bz2t+7Dxq+Mya6HdWKpart+Z/tm0UgpShicDyPA+Kr3080/MkC4ineGxflDF3GawjXYfuAEswZpSMFKmsmKQDqFm5CRzSRH0DrjMGqTziMx/aVSZBDd6NKbDGYbQaT0KdyGxAGAGqMmuBy/P+qWfS9FPbkaY9OQfP1gRajTObAAD9pl3mU/DkD+1lpvfyB+VTd7MYptr3Ap3432QsRUgn+FrrKt8n0xDZoy8iTPvjeVy10+7BMPexT1a1AU2dZkSSszNMhFv8v8jnR5v3Xn5jBcqj7U229AHTlwSZpKUZIYs7ysJLPDJMel520QnLUEi8l4mPXFE4skzJAHCCckD+yyrAo/l3hobXi7cDmOr8esrUEDUvTPjrl7XEoUh7amMlAOxQvCWOftz/BsDf28nkJgW4OhCCJeUhykWoo/VGOQBVjai4HKsCA8Ss/B1eetJYhR4fLl07Jq25BQb3Sdbf5b/s6HMFRAsokU2+o8MbP8YINkJiNb4v6CcFfdV/eQUVr6/NAal2IoHmBEmi2BjspPf/KuUQBbyZuGx6HxXip+SynOJnhYYinLJPhUNkqw6SKgJ9BdMZ0LihR3PmYRJhIC9hwCiVzZeT19Fqs9Vo5n267BsvAOFc9uXwENvYuFxdI3fQ488zi7irnzQB2DwtkgGAT8iNwbbSNVWkjWpQtOZaaLjttCEm/F2yJ9zT2hc+hm1kE6udkpqan7ICQ+9lwlPf297iMLV0g9fkB0CvOzrUp61otptnr5HbfjxLfTM9kJ2vl5/ELueEaz29CEufGQJ/xvBtBoHjkyMlzIv+DFHsxy99MfRiZKYupMZtbLyjBUcfP1BpKDxM6sIiBBqyQtGOmm3lWhwr3HJ/liH8IK7Ft5wmu9Dz08zuUg9lz/Ajq3Kx4bNjmK8PjFPlT2NKHZ0PcNIfEvDxx0bpf5I3RTF6LviGrb6X2sOYkczfQALn/g+5jRFeXtcHncLR1xqN3G72LwNzaticBRKMZysHRMTkPria5mgxaAAVf88/e48gzvPjjiegFBu3MXLWdjTOnHK+BFkBBHWHqfraHUFmycrqXtFIH8FBlsIKyGFbzLRaJ0xoOfu29T/d9q/8hq7POGxeWZsUiDi2Cuvcl3gQyjGPaGw5jcBrewE2O4cR7SPYooUoIobgc2zyGANGzxG6zcFqw7hZ5YomhTeJLQ3EFH+gI9ZMoaqZCXqjbenfuz8XSXMVgsG8IFDO2YQAsQzHwv61hteyVEhvcZHppUU7jhRuy+FeqW2UR+OSAAAA";var AS=/^https?:$/.test(location.protocol),ES=document.currentScript?.src||location.href,wf=i=>new URL(`assets3d/${i}`,ES).href,Wh=null;function Hg(i){if(!AS)return null;if(Wh)return Wh;let e=new Jr,t=new kh,n=(o,a)=>new Promise(l=>e.load(wf(o),c=>{c.wrapS=c.wrapT=Xn,c.anisotropy=sr,a&&(c.colorSpace=dn),l(c)},void 0,()=>l(null))),s=(o,a,l=!0)=>{let c=a&&i?"-sm":"";return Promise.all([l?n(`tex/${o}-col${c}.webp`,!0):null,n(`tex/${o}-nor${c}.webp`),n(`tex/${o}-rough.webp`)]).then(([h,u,d])=>u&&(h||!l)?{map:h,normalMap:u,roughnessMap:d}:null)},r=o=>new Promise(a=>t.load(wf(`models/${o}`),l=>a(l.scene),void 0,()=>a(null)));return Wh={oak:s("oak",!0),floor:s("floor",!0),plaster:s("plaster",!1,!1),rug:s("rug",!1,!1),linen:s("linen",!1,!1),jacquard:Promise.all([n("tex/jacquard-nor.webp"),n("tex/jacquard-rough.webp")]).then(([o,a])=>o?{normalMap:o,roughnessMap:a}:null),env:new Promise(o=>new Vh().load(wf("env/room-morning.hdr"),o,void 0,()=>o(null))),viewM:n("env/view-morning.webp",!0),viewN:n("env/view-night.webp",!0),plantTable:i?Promise.resolve(null):r("potted_plant_02.glb"),plantFloor:i?Promise.resolve(null):r("potted_plant_01.glb"),succulent:i?Promise.resolve(null):r("potted_plant_04.glb")},Wh}function oo(i,e,t,n=0){if(!i)return null;let s=i.clone();return s.repeat.set(e,t),s.rotation=n,s.center.set(.5,.5),s.needsUpdate=!0,s}function Zn(i,e,t,n,s=0,r={}){!e||!i||(r.keepMap||(i.map=oo(e.map,t,n,s)),i.normalMap=oo(e.normalMap,t,n,s),i.normalScale?.set(r.ns??1,r.ns??1),e.roughnessMap&&!r.keepRough&&(i.roughnessMap=oo(e.roughnessMap,t,n,s),i.roughness=r.rough??1),r.color&&i.color.set(r.color),i.needsUpdate=!0)}function Yh(i,e,t,n,s,r,o=0){let a=new Xt;a.add(i);let l=new xi().setFromObject(i),c=l.getSize(new F),h=r/(c.y||1);return i.position.set(-(l.min.x+l.max.x)/2,-l.min.y,-(l.min.z+l.max.z)/2),a.scale.setScalar(h),a.position.set(t,n,s),a.rotation.y=o,i.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0,(u.material.alphaTest>0||u.material.transparent)&&(u.material.side=tn))}),e.add(a),a}function Pg(i,e,t,n,s,r,o,a,l,c="#ffffff"){let d=[],f=[],p=[];for(let g=0;g<=24;g++){let v=cn(s,o,g/24),A=l+Math.tan(v)*e,C=((v>=0?v:Math.max(r,v*a))-r)/(o-r);for(let T=0;T<=72;T++){let x=T/72,b=t+(x-.5)*n;d.push(Math.sin(b)*e,A,-Math.cos(b)*e),f.push(x,C)}}for(let g=0;g<24;g++)for(let v=0;v<72;v++){let A=g*73+v,S=A+72+1;p.push(A,A+1,S,A+1,S+1,S)}let M=new ln;M.setAttribute("position",new Ut(new Float32Array(d),3)),M.setAttribute("uv",new Ut(new Float32Array(f),2)),M.setIndex(p);let m=new tt(M,new _n({map:i,color:c,toneMapped:!1,side:tn,fog:!1}));return m.frustumCulled=!1,m}var Se=Math.PI,ei=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),cn=(i,e,t)=>i+(e-i)*t,Ti=(i,e,t)=>{let n=ei((t-i)/(e-i));return n*n*(3-2*n)},Ir=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,Lg=i=>1-(1-i)**3,Fi=(i,e,t,n)=>e+(i-e)*Math.exp(-t*n),Tf=()=>new Promise(i=>setTimeout(i)),An=7.8,ii=1.5,RS=.17,Ng=30,Af=1.3,Xh=.16,Ef={Hard:{depth:.08,radius:.85,k:250,c:27,crown:.018},Medium:{depth:.16,radius:1,k:130,c:15,crown:.045},Soft:{depth:.3,radius:1.2,k:72,c:8,crown:.08}},mn=i=>()=>{i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296};function Pr(i,e,t,n){let s=mn(n),r=new Float32Array(e*t);for(let a=0;a<r.length;a++)r[a]=s();let o=new Float32Array(i*i);for(let a=0;a<i;a++){let l=a/i*t,c=l|0,h=(c+1)%t,u=l-c;u=u*u*(3-2*u);for(let d=0;d<i;d++){let f=d/i*e,p=f|0,M=(p+1)%e,m=f-p;m=m*m*(3-2*m);let g=r[c*e+p],v=r[c*e+M],A=r[h*e+p],S=r[h*e+M];o[a*i+d]=g+(v-g)*m+(A-g)*u+(g-v-A+S)*m*u}}return o}function Zh(i,e,t){let n=new Uint8Array(e*e*4);for(let s=0,r=0;s<e;s++){let o=(s+e-1)%e*e,a=(s+1)%e*e,l=s*e;for(let c=0;c<e;c++,r+=4){let h=i[l+(c+e-1)%e],u=i[l+(c+1)%e],d=i[o+c],f=i[a+c],p=(h-u)*t,M=(d-f)*t,m=1/Math.sqrt(p*p+M*M+1);n[r]=(p*m*.5+.5)*255,n[r+1]=(M*m*.5+.5)*255,n[r+2]=(m*.5+.5)*255,n[r+3]=255}}return n}var sr=8;function Jh(i,e,t){let n=new hs(i,e,e,wi);return n.wrapS=n.wrapT=Xn,n.magFilter=Mn,n.minFilter=Si,n.generateMipmaps=!0,n.anisotropy=sr,t&&(n.colorSpace=dn),n.needsUpdate=!0,n}function Dg(i,e){let t=new Float32Array(i*i),n=Pr(i,10,e.threads,11),s=Pr(i,e.threads,10,23),r=Pr(i,e.threads,e.threads,5),o=Pr(i,12,12,7);for(let a=0,l=0;a<i;a++){let c=a/i;for(let h=0;h<i;h++,l++){let u=h/i,d=(u+c)*e.cells,f=(u-c)*e.cells,p=Math.abs(Math.sin(Se*d)),M=Math.abs(Math.sin(Se*f)),m=(p*M)**e.round,g=Math.min(p,M),A=((p<M?f:d)*e.stitches%1+1)%1<.6?1:0,S=1-Ti(0,e.seam,g),C=1-Ti(.05,.24,Math.hypot(p,M)),T=n[l]*.5+s[l]*.5;t[l]=m+S*A*.018+C*.1*(e.tuft??1)+(o[l]-.5)*.05+(T-.5)*.011+(r[l]-.5)*.0016}}return Jh(Zh(t,i,e.normal),i,!1)}function Ug(i,e,t,n){let s=new Float32Array(i*i);return t.forEach(([r,o,a],l)=>{let c=Pr(i,r,o,n+l);for(let h=0;h<s.length;h++)s[h]+=c[h]*a}),Jh(Zh(s,i,e),i,!1)}function CS(i,e){let t=new Float32Array(i*i),n=Pr(i,48,48,81);for(let s=0,r=0;s<i;s++)for(let o=0;o<i;o++,r++)t[r]=Math.sin(2*Se*o/i*e)*Math.sin(2*Se*s/i*e)*.5+(n[r]-.5)*.08;return Jh(Zh(t,i,9),i,!1)}function Fg(i,e,t){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createRadialGradient(i/2,i/2,i*e,i/2,i/2,i*t);return r.addColorStop(0,"#fff"),r.addColorStop(.55,"#888"),r.addColorStop(1,"#000"),s.fillStyle=r,s.fillRect(0,0,i,i),new vi(n)}var Og=i=>new Promise(e=>{let t=new Image;t.onload=()=>{let n=new Hn(t);n.wrapS=n.wrapT=Xn,n.colorSpace=dn,n.anisotropy=sr,n.needsUpdate=!0,e(n)},t.src=i});function Pf(i,e,t){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d");e(s,i);let r=new vi(n);return r.wrapS=r.wrapT=Xn,r.colorSpace=dn,r.anisotropy=sr,r.repeat.set(t,t),r}function es(i,e,t,n,s,r){for(let o of[-e,0,e])for(let a of[-e,0,e]){let l=t+o,c=n+a;l+s<0||l-s>e||c+s<0||c-s>e||(i.save(),i.translate(l,c),r(i),i.restore())}}function Wi(i,e,t,n=.05){i.fillStyle=t,i.fillRect(0,0,e,e);let s=mn(9),r=Math.max(2,e/512);for(let o=0;o<e;o+=r)i.fillStyle=`rgba(0,0,0,${(s()*n).toFixed(3)})`,i.fillRect(0,o,e,r/2),i.fillStyle=`rgba(255,255,255,${(s()*n).toFixed(3)})`,i.fillRect(o,0,r/2,e)}var Bg=(i,e,t)=>{i.beginPath(),i.moveTo(0,0),i.bezierCurveTo(t,-e*.25,t*.8,-e*.75,0,-e),i.bezierCurveTo(-t*.8,-e*.75,-t,-e*.25,0,0),i.closePath()},zg=(i,e,t,n)=>{i.beginPath(),i.moveTo(0,0),i.lineTo(0,-e*.97);for(let s=1;s<n;s++){let r=-e*s/n,o=t*Math.sin(Se*s/n)*.85;i.moveTo(0,r+e*.03),i.lineTo(o,r-e*.07),i.moveTo(0,r+e*.03),i.lineTo(-o,r-e*.07)}};function IS(i,e){let t="rgba(234,245,251,.96)";i.fillStyle=t,i.beginPath(),i.arc(0,0,e,0,Se*2),i.fill(),i.fillStyle="#2b4fbd",i.beginPath(),i.arc(0,0,e*.8,0,Se*2),i.fill(),i.fillStyle=t;for(let n=0;n<16;n++){let s=n/16*Se*2;i.beginPath(),i.ellipse(Math.cos(s)*e*.62,Math.sin(s)*e*.62,e*.16,e*.07,s,0,Se*2),i.fill()}i.strokeStyle="rgba(118,201,219,.95)",i.lineWidth=e*.05,i.beginPath(),i.arc(0,0,e*.4,0,Se*2),i.stroke(),i.fillStyle=t,i.beginPath(),i.arc(0,0,e*.2,0,Se*2),i.fill()}function PS(i,e){let t=["#f47a35","#ff9d5c","#e5506b","#f6c344"];for(let n=0;n<6;n++)i.save(),i.rotate(n/6*Se*2),i.fillStyle=t[n%t.length],i.beginPath(),i.moveTo(0,0),i.lineTo(e*.22,-e*.5),i.lineTo(0,-e),i.lineTo(-e*.22,-e*.5),i.closePath(),i.fill(),i.restore();i.fillStyle="#3a1f2b",i.beginPath(),i.arc(0,0,e*.12,0,Se*2),i.fill()}function Rf(i,e,t){i.strokeStyle=t,i.fillStyle=t,i.lineWidth=e*.05;for(let n=0;n<8;n++)i.save(),i.rotate(n/8*Se*2),i.beginPath(),i.ellipse(0,-e*.42,e*.14,e*.3,0,0,Se*2),i.stroke(),i.restore();i.beginPath(),i.arc(0,0,e*.16,0,Se*2),i.fill();for(let n=0;n<4;n++)i.save(),i.rotate(n/4*Se*2+Se/4),i.beginPath(),i.moveTo(0,-e*.72),i.bezierCurveTo(e*.4,-e*.86,e*.34,-e*1.14,0,-e*1.02),i.stroke(),i.beginPath(),i.moveTo(0,-e*.72),i.bezierCurveTo(-e*.4,-e*.86,-e*.34,-e*1.14,0,-e*1.02),i.stroke(),i.restore()}function LS(i,e,t){i.strokeStyle=t,i.lineWidth=e*.055;for(let n=0;n<8;n++){let s=n/8*Se*2;i.beginPath(),i.arc(Math.cos(s)*e*.55,Math.sin(s)*e*.55,e*.42,0,Se*2),i.stroke()}i.beginPath(),i.arc(0,0,e*.2,0,Se*2),i.stroke()}function NS(i,e,t){i.strokeStyle=t,i.lineCap="round",i.lineWidth=e*.02,i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(e*.12,-e*.5,0,-e),i.stroke(),i.lineWidth=e*.014,i.beginPath();for(let n=1;n<24;n++){let s=n/24,r=-e*s,o=e*.12*Math.sin(Se*s)*.9,a=e*.34*Math.sin(Se*(s*.82+.1));i.moveTo(o,r),i.lineTo(o+a,r-a*.5),i.moveTo(o,r),i.lineTo(o-a,r-a*.5)}i.stroke()}function kg(i,e,t,n,s,r){i.strokeStyle=t,i.lineWidth=r,i.lineCap="round";for(let o=0;o<n;o++){let a=(o+.5)*e/n;i.beginPath();for(let l=0;l<=e;l+=4){let c=a+Math.sin(l/e*Se*4+o*.9)*e*s;l?i.lineTo(l,c):i.moveTo(l,c)}i.stroke()}}function DS(i,e,t,n){Wi(i,e,t,.02);let s=4,r=e/s;i.strokeStyle=n,i.lineWidth=e*.007;for(let o=0;o<s;o++)for(let a=0;a<s;a++){let l=(a+.5)*r,c=(o+.5)*r,h=r*.5;for(let u=1;u<=4;u++){let d=h*u/4;i.beginPath();for(let f=0;f<=6;f++){let p=f/6*Se*2+Se/6,M=l+Math.cos(p)*d,m=c+Math.sin(p)*d;f?i.lineTo(M,m):i.moveTo(M,m)}i.stroke()}}}function US(i,e,t,n,s){Wi(i,e,t,.05);let r=4,o=e/r,a=(l,c)=>{let h=Math.round((l%e+e)%e/(o/2))%(r*2),u=Math.round((c%e+e)%e/(o/2))%(r*2);return mn(h*31+u*7+3)()<.34};i.fillStyle=s;for(let l=-r;l<r*2;l++)for(let c=-r;c<r*2;c++){let h=(l+c+1)/2*o,u=(c-l)/2*o;h<-o||h>e+o||u<-o||u>e+o||!a(h,u)||(i.beginPath(),i.moveTo(h,u-o/2),i.lineTo(h+o/2,u),i.lineTo(h,u+o/2),i.lineTo(h-o/2,u),i.closePath(),i.fill())}i.strokeStyle=n,i.lineWidth=e*.008;for(let l=-r;l<=r*2;l++)i.beginPath(),i.moveTo(l*o,0),i.lineTo(l*o+e,e),i.stroke(),i.beginPath(),i.moveTo(l*o,0),i.lineTo(l*o-e,e),i.stroke()}var El={eco:{top:(i,e)=>{Wi(i,e,"#2346ad",.06),[[.2,.25,.4],[.7,.6,1.9],[.45,.9,2.6]].forEach(([n,s,r])=>es(i,e,n*e,s*e,e*.28,o=>{o.rotate(r),o.fillStyle="rgba(104,201,212,.55)",o.beginPath(),o.ellipse(0,0,e*.26,e*.13,0,0,Se*2),o.fill()})),[[.25,.3,.16],[.76,.18,.13],[.58,.7,.17],[.06,.8,.12]].forEach(([n,s,r])=>es(i,e,n*e,s*e,e*r,o=>IS(o,e*r)))},side:(i,e)=>{Wi(i,e,"#f2f5fb",.03);let t=6,n=e/t;i.fillStyle="#2b4fbd";for(let s=0;s<t;s++)for(let r=0;r<=t;r++)i.beginPath(),i.arc((r+s%2*.5)*n,(s+.5)*n,n*.2,0,Se*2),i.fill()},rep:[.32,1.1],quilt:!1,dark:!0,piping:"#f2f5fb",under:"#c9ccd6",label:["#ffffff","#2b4fbd"]},plush:{top:(i,e)=>{Wi(i,e,"#1b3488",.07),[[.24,.36,.4],[.73,.3,-.9],[.5,.82,2.2],[.96,.74,1.2]].forEach(([n,s,r])=>es(i,e,n*e,s*e,e*.34,o=>{o.rotate(r),o.strokeStyle="rgba(176,198,240,.9)",o.lineWidth=e*.006,Bg(o,e*.3,e*.11),o.stroke(),o.lineWidth=e*.003,zg(o,e*.3,e*.11,9),o.stroke()}));let t=mn(44);i.fillStyle="rgba(255,255,255,.08)";for(let n=0;n<2600;n++)i.fillRect(t()*e,t()*e,2,2)},rep:[.36,.5],quilt:!1,dark:!0,piping:"#eef0f7",under:"#1d2f6e",label:["#f3efe4","#223f98"]},vento:{top:(i,e)=>{Wi(i,e,"#132a4c",.05);let t=mn(52),n=["#1d6f57","#2c9a6c","#4fb983","#0f5651","#3d8f5c"],s=[],r=[];for(let o=0;o<16;o++){let a=e*(.12+t()*.12);s.push([t()*e,t()*e,t()*Se*2,a,n[o%n.length]])}for(let o=0;o<7;o++)r.push([t()*e,t()*e,t()*Se*2]);s.forEach(([o,a,l,c,h])=>es(i,e,o,a,c,u=>{u.rotate(l),u.fillStyle=h,Bg(u,c,c*.38),u.fill(),u.strokeStyle="rgba(8,40,34,.55)",u.lineWidth=e*.0022,zg(u,c,c*.38,7),u.stroke()})),r.forEach(([o,a,l])=>es(i,e,o,a,e*.07,c=>{c.rotate(l),PS(c,e*.055)}))},rep:[.34,.45],quilt:!1,dark:!0,piping:"#132a4c",under:"#10223e",label:["#f2c14e","#132a4c"]},aura:{top:(i,e)=>{Wi(i,e,"#f6f5f1",.025),[[.25,.25],[.75,.75]].forEach(([t,n])=>es(i,e,t*e,n*e,e*.2,s=>Rf(s,e*.16,"#6f727b"))),[[.75,.25],[.25,.75]].forEach(([t,n])=>es(i,e,t*e,n*e,e*.09,s=>Rf(s,e*.065,"#8d9097")))},side:(i,e)=>{Wi(i,e,"#f4f3ef",.025);for(let t=0;t<3;t++)es(i,e,(t+.5)*e/3,e*.5,e*.14,n=>Rf(n,e*.1,"#9d9fa6"))},rep:[.6,.8],quilt:!0,piping:"#e2e1dc",under:"#cfcdc6",label:["#1d2b5e","#e9ecf5"]},"imperio-white":{top:(i,e)=>{Wi(i,e,"#f7f6f2",.02);let t=mn(61),n=[];for(let s=0;s<5;s++)n.push([t()*e,t()*e,e*(.1+t()*.1),t()*Se*2]);i.strokeStyle="rgba(128,128,140,.6)",i.lineWidth=e*.011,n.forEach(([s,r,o,a])=>es(i,e,s,r,o*1.1,l=>{l.rotate(a);for(let c=0;c<3;c++)l.beginPath(),l.arc(0,0,o*(1-c*.26),0,Se*1.35),l.stroke()}))},side:(i,e)=>DS(i,e,"#ecebe7","#9c9ca5"),rep:[.32,.9],quilt:!0,piping:"#e6e2d4",under:"#cdcac2",label:["#2b47a8","#ffffff"]},"imperio-blue":{top:(i,e)=>US(i,e,"#1b2d68","#3f66c8","rgba(138,166,234,.45)"),rep:[.9,1.2],quilt:!1,dark:!0,piping:"#eef0f6",under:"#172656",label:["#ffffff","#1b2d68"]},"camellia-pt":{top:(i,e)=>{Wi(i,e,"#f8f7f3",.02),kg(i,e,"rgba(118,118,126,.95)",3,.06,e*.02)},side:(i,e)=>{Wi(i,e,"#f5f4ef",.02),kg(i,e,"rgba(176,176,184,.95)",5,.04,e*.016)},rep:[.5,1],quilt:!0,piping:"#ece4cb",under:"#d3cfc4",label:["#b98b3f","#fffaf0"],topper:"pillow"},"camellia-et":{top:(i,e)=>{Wi(i,e,"#f7f6f4",.02),[[.25,.25,.14,"#9893b3"],[.75,.75,.14,"#9893b3"],[.75,.25,.08,"#aeaac4"],[.25,.75,.08,"#aeaac4"]].forEach(([t,n,s,r])=>es(i,e,t*e,n*e,e*s*1.1,o=>LS(o,e*s,r)))},rep:[.75,.9],quilt:!0,piping:"#e8e1cb",under:"#d3cfc4",label:["#24305f","#f2efe6"],topper:"euro"},emma:{top:(i,e)=>{Wi(i,e,"#edf3ea",.025),[[.2,.4,.5,"#6f757c"],[.7,.2,2.4,"#7fa66c"],[.55,.72,-.7,"#6f757c"],[.08,.92,1.6,"#7fa66c"],[.9,.62,3.6,"#80868d"]].forEach(([t,n,s,r])=>es(i,e,t*e,n*e,e*.34,o=>{o.rotate(s),NS(o,e*.32,r)}))},rep:[.36,.5],quilt:!1,piping:"#e6e4d4",under:"#cfd3cb",label:["#2f5d34","#f4f1e4"]}};function FS(i,e,t,n){let s=[];for(let r=0;r<t;r++)s.push(-(i-e+e*Math.tan((t-r)/t*Se/4)));for(let r=0;r<=n;r++)s.push(-(i-e)+2*(i-e)*r/n);for(let r=1;r<=t;r++)s.push(i-e+e*Math.tan(r/t*Se/4));return s}var Cf=[{n:[0,1,0],u:0,v:2,g:0},{n:[0,-1,0],u:0,v:2,g:2},{n:[0,0,1],u:0,v:1,g:1},{n:[0,0,-1],u:0,v:1,g:1},{n:[1,0,0],u:2,v:1,g:1},{n:[-1,0,0],u:2,v:1,g:1}],Cl=class{constructor({cs:e=3,seg:t=[1,1,1],groups:n=!1}){this.cs=e,this.seg=t;let s=Cf.map(l=>[e*2+t[l.u]+1,e*2+t[l.v]+1]),r=s.reduce((l,[c,h])=>l+c*h,0),o=[];this.geometry=new ln;let a=0;Cf.forEach((l,c)=>{let[h,u]=s[c],d=o.length,f=(l.u===0&&l.v===2?1:0)^(l.n[0]+l.n[1]+l.n[2]<0?1:0)^(l.u===2?1:0);for(let p=0;p<u-1;p++)for(let M=0;M<h-1;M++){let m=a+p*h+M,g=m+1,v=m+h,A=v+1;f?o.push(m,v,g,g,v,A):o.push(m,g,v,g,A,v)}n&&this.geometry.addGroup(d,o.length-d,l.g),a+=h*u}),this.geometry.setIndex(o),this.pos=new Float32Array(r*3),this.nor=new Float32Array(r*3),this.uvs=new Float32Array(r*2),this.geometry.setAttribute("position",new Ut(this.pos,3)),this.geometry.setAttribute("normal",new Ut(this.nor,3)),this.geometry.setAttribute("uv",new Ut(this.uvs,2))}fill(e,t,n,s,r={},o=[1,1,1]){let a=[e/2,t/2,n/2],{pos:l,nor:c,uvs:h,cs:u,seg:d}=this,f=a.map((T,x)=>FS(T,s,u,d[x])),p=r.crown||0,M=r.bulge||0,m=r.sag||0,g=a[0],v=a[2],A=a[1],S=0;for(let T of Cf){let x=3-T.u-T.v,b=T.n[x],z=o[T.g];for(let N of f[T.v])for(let O of f[T.u]){let W=[0,0,0];W[T.u]=O,W[T.v]=N,W[x]=b*a[x];let Z=W.map((He,ie)=>ei(He,-(a[ie]-s),a[ie]-s)),P=W[0]-Z[0],q=W[1]-Z[1],Y=W[2]-Z[2],ee=1/(Math.sqrt(P*P+q*q+Y*Y)||1);P*=ee,q*=ee,Y*=ee;let re=Z[0]+P*s,ne=Z[1]+q*s,ce=Z[2]+Y*s;if(p||M||m){let He=re/g,ie=ce/v,we=Ti(-A*.4,A,ne),Ge=1-He**4,$e=1-ie**4;ne+=p*Ge*$e*we-m*He*He;let me=Math.cos(ne/A*Se/2)*M;re+=me*Math.sign(re)*Ti(.7,1,Math.abs(He)),ce+=me*Math.sign(ce)*Ti(.8,1,Math.abs(ie)),P+=4*p*He**3*$e*we/g,Y+=4*p*ie**3*Ge*we/v;let ze=1/Math.sqrt(P*P+q*q+Y*Y);P*=ze,q*=ze,Y*=ze}let _e=S*3,Fe=S*2;l[_e]=re,l[_e+1]=ne,l[_e+2]=ce,c[_e]=P,c[_e+1]=q,c[_e+2]=Y,h[Fe]=O/(z[0]??z),h[Fe+1]=N/(z[1]??z),S++}}let C=this.geometry;return C.attributes.position.needsUpdate=!0,C.attributes.normal.needsUpdate=!0,C.attributes.uv.needsUpdate=!0,C.computeBoundingSphere(),this}},ti=(i,e,t,n,s={})=>new Cl({cs:s.cs??2,seg:s.seg??[8,1,12],groups:!!s.groups}).fill(i,e,t,n,s.shape,s.tile??[1,1,1]);function Vg(i,e,t,n,s=91,r=44){let o=mn(s),a=Array.from({length:14},()=>[o()*1.8-.9,o()*1.8-.9,.12+o()*.3,(o()-.55)*.16]),l=[],c=[],h=[],u=.36;[1,-1].forEach((f,p)=>{let M=p*(r+1)*(r+1);for(let m=0;m<=r;m++)for(let g=0;g<=r;g++){let v=g/r*2-1,A=m/r*2-1,S=Math.pow(Math.max(0,(1-Math.abs(v)**2.4)*(1-Math.abs(A)**2.4)),.46),C=0;for(let[z,N,O,W]of a)C+=W*Math.exp(-((v-z)**2+(A-N)**2)/(O*O));let T=v*i/2-Math.sign(v)*i*.028*(1-A*A)*Math.abs(v)**7,x=A*e/2-Math.sign(A)*e*.045*(1-v*v)*Math.abs(A)**7,b=f>0?t/2*S*(1+C*(p?0:1)):-t/2*S*u;l.push(T,b- -t/2*u+n,x),c.push((v+1)/2*i,(A+1)/2*e)}for(let m=0;m<r;m++)for(let g=0;g<r;g++){let v=M+m*(r+1)+g,A=v+r+1;f>0?h.push(v,A,v+1,v+1,A,A+1):h.push(v,v+1,A,v+1,A+1,A)}});let d=new ln;return d.setAttribute("position",new Ut(new Float32Array(l),3)),d.setAttribute("uv",new Ut(new Float32Array(c),2)),d.setIndex(h),d.computeVertexNormals(),d}var Kh=class extends ui{constructor(e,t,n){super(),this.w=e,this.d=t,this.r=n}getPoint(e,t=new F){let{w:n,d:s,r}=this,o=n-2*r,a=s-2*r,l=Se*r/2,c=2*(o+a)+4*l,h=(e%1+1)%1*c,u=n/2-r,d=s/2-r,f=[[o,p=>t.set(-u+p*o,0,d+r)],[l,p=>t.set(u+Math.sin(p*Se/2)*r,0,d+Math.cos(p*Se/2)*r)],[a,p=>t.set(u+r,0,d-p*a)],[l,p=>t.set(u+Math.cos(p*Se/2)*r,0,-d-Math.sin(p*Se/2)*r)],[o,p=>t.set(u-p*o,0,-d-r)],[l,p=>t.set(-u-Math.sin(p*Se/2)*r,0,-d-Math.cos(p*Se/2)*r)],[a,p=>t.set(-u-r,0,-d+p*a)],[l,p=>t.set(-u-Math.cos(p*Se/2)*r,0,d+Math.sin(p*Se/2)*r)]];for(let[p,M]of f){if(h<=p)return M(h/p),t;h-=p}return t}},Rl={uDentA:{value:new hn(0,0,0,1)},uTopY:{value:ii+.7},uRange:{value:.5}};function If(i){return i.onBeforeCompile=e=>{Object.assign(e.uniforms,Rl),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
        uniform vec4 uDentA; uniform float uTopY, uRange;
        vec3 dentAt(vec4 d, vec3 p){ vec2 q = p.xz - d.xy; float g = exp(-dot(q, q) / (d.w * d.w)); return vec3(d.z * g, 2.0 * d.z * g * q / (d.w * d.w)); }`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        vec4 dentP = modelMatrix * vec4(position, 1.0);
        float dentMask = smoothstep(uTopY - uRange, uTopY - 0.05, dentP.y);
        vec3 dentS = dentAt(uDentA, dentP.xyz);
        objectNormal = normalize(objectNormal - vec3(dentS.y, 0.0, dentS.z) * dentMask);`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.y -= dentS.x * dentMask;`)},i.customProgramCacheKey=()=>"ec-dent",i}function OS(){let i=new Ko({side:tn});return i.onBeforeCompile=e=>{Object.assign(e.uniforms,Rl),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
        uniform vec4 uDentA; uniform float uTopY, uRange;
        float dentAt(vec4 d, vec3 p){ vec2 q = p.xz - d.xy; return d.z * exp(-dot(q, q) / (d.w * d.w)); }`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec4 dentP = modelMatrix * vec4(position, 1.0);
        transformed.y -= dentAt(uDentA, dentP.xyz) * smoothstep(uTopY - uRange, uTopY - 0.05, dentP.y);`)},i.customProgramCacheKey=()=>"ec-dent-depth",i}function Gg(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}var qh=null;function Wg(i){return qh||(qh=(async()=>{let e=i?512:1024,t=Dg(e,{cells:2,round:.42,seam:.13,stitches:12,normal:i?20:40,threads:i?96:190,tuft:.35});await Tf();let n=Dg(e,{cells:1,round:.5,seam:.075,stitches:22,normal:i?34:68,threads:i?96:190,tuft:1.3});await Tf();let s=Ug(256,2.2,[[96,96,.7],[40,40,.5]],40),r=Ug(256,1.5,[[256,10,.5],[10,256,.5],[64,64,.2]],70),o=CS(256,4),a=Pf(512,(h,u)=>{h.fillStyle="#a8a294",h.fillRect(0,0,u,u);let d=mn(17),f=["#d9c27a","#7fa36b","#c96f63","#6b8cc7","#e6e1d3","#8c8c8c","#b9a27d","#f0e7c9","#6d6d64","#d08f4a","#cfd6e3"];for(let p=0;p<1500;p++){let M=d()*u,m=d()*u,g=3+d()*11,v=4+(d()*3|0),A=d()*Se,S=f[d()*f.length|0],C=[];for(let T=0;T<v;T++){let x=A+T/v*Se*2,b=g*(.6+d()*.5);C.push([Math.cos(x)*b,Math.sin(x)*b])}es(h,u,M,m,g*1.2,T=>{T.fillStyle=S,T.beginPath(),C.forEach(([x,b],z)=>z?T.lineTo(x,b):T.moveTo(x,b)),T.closePath(),T.fill()})}},1.4);await Tf();let[l,c]=await Promise.all([Og(Cg),Og(Ig)]);return l.wrapS=l.wrapT=c.wrapS=c.wrapT=gr,{N:e,topQ:t,sideQ:n,pore:s,weave:r,egg:o,chips:a,oakRail:l,oakPlank:c}})(),qh)}function Xg(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,.5)"),t.addColorStop(.5,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),i}async function BS(i,e){let t=matchMedia("(prefers-reduced-motion: reduce)").matches,n=Math.min(innerWidth,innerHeight)<600,s;try{s=new wl({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(_){return e.onFail?.(_),null}s.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),s.toneMapping=ta,s.toneMappingExposure=1,s.shadowMap.enabled=!0,s.shadowMap.type=Ar,sr=Math.min(12,s.capabilities.getMaxAnisotropy());let r=new _r,o=new kn(Ng,1.6,2,260),a=new Pi(new F(0,1,0),-(ii+.7)),l=null,c=null;{let _=new _r,y=new Rr(s);_.background=new Ve("#1b2340");let R=(L,D,k,V,j,he,ve)=>{let be=new tt(new Nt(k,V),new _n({color:new Ve(L).multiplyScalar(D),side:tn}));be.position.set(j,he,ve),be.lookAt(0,0,0),_.add(be)};R("#ffcf9a",7,9,9,-14,8,7),R("#9db8ff",5,7,14,15,6,-7),R("#ffe9d4",1.6,26,12,0,16,2),R("#39456f",1.2,40,40,0,-10,0),l=r.environment=y.fromScene(_,.05).texture,r.environmentIntensity=.4,y.dispose()}let{N:h,topQ:u,sideQ:d,pore:f,weave:p,egg:M,chips:m,oakRail:g,oakPlank:v}=await Wg(n),A=(_={})=>new pn({roughness:.92,sheen:1,sheenRoughness:.55,sheenColor:new Ve("#fff6ec"),normalScale:new Me(.62,.62),side:tn,shadowSide:tn,..._}),S=(_,y={})=>new ct({color:_,roughness:.94,normalMap:f,...y}),C=new vi(document.createElement("canvas")),T={top:If(A({map:C,normalMap:u})),side:If(A({map:C,normalMap:d})),under:new ct({color:"#c9c7c0",roughness:1,side:tn}),piping:If(new pn({color:"#dddcd8",roughness:.7,sheen:.6,sheenRoughness:.6})),foam22:S("#f4f2ea"),foam25:S("#efe7d3"),foam30:S("#e4d8bb"),hd:S("#e3eaf1"),memory:S("#e8bf78"),pu:S("#e2efe4"),profile:S("#f3f1e9",{normalMap:M,normalScale:new Me(1.5,1.5)}),rebond:S("#ffffff",{map:m}),zoneSoft:S("#f4f1e7"),zoneFirm:S("#cfb98a"),oak:new ct({map:g,roughness:.5,color:new Ve(1.5,1.42,1.32)}),plank:new ct({map:v,roughness:.55,color:new Ve(1.02,.98,.94)}),iron:new ct({color:"#17181c",roughness:.5}),pillow:new pn({color:"#f4f2ec",roughness:1,sheen:1,sheenRoughness:.7,sheenColor:new Ve("#ffffff"),normalMap:f,normalScale:new Me(.25,.25)})},x=new Xt;r.add(x);let b=OS();{let _=document.createElement("canvas");_.width=_.height=256;let y=_.getContext("2d");y.filter="blur(22px)",y.fillStyle="#000",y.fillRect(50,50,156,156);let R=new tt(new Nt(1,1),new _n({map:new vi(_),transparent:!0,opacity:.55,depthWrite:!1}));R.rotation.x=-Se/2,R.position.y=.012,R.scale.set(11,13,1),x.add(R),x.contact=R}let z=new Xt;x.add(z);let N=(_,y,R,L,D,k=z,V=!0)=>{let j=new tt(_,y);return j.position.set(R,L,D),j.castShadow=V,j.receiveShadow=!0,k.add(j),j},O=.68,W=.19,Z=ii-O/2,P=ti(1,O,W,.025,{seg:[1,1,1],tile:[[1,.74],[1,.74],[1,.74]]}).geometry,q=ti(W,O,An+.44,.025,{seg:[1,1,8],tile:[[1,.74],[8.3,.74],[1,.74]]}).geometry,Y=N(P,T.oak,0,Z,An/2+.12),ee=N(P,T.oak,0,Z,-An/2-.12),re=[N(q,T.oak,0,Z,0),N(q,T.oak,0,Z,0)],ne=new Nn(.13,.075,ii-O+.1,4,1);ne.rotateY(Se/4);let ce=[-1,1].flatMap(_=>[-1,1].map(y=>{let R=N(ne,T.oak,0,(ii-O+.1)/2,y*(An/2+.1));return R.userData.sx=_,R}));[-.34,.34].forEach(_=>N(new Nn(.06,.06,ii-O,16),T.iron,_*.9,(ii-O)/2,An*.22)),[-.34,.34].forEach(_=>N(new Nn(.06,.06,ii-O,16),T.iron,_*.9,(ii-O)/2,-An*.22));let _e=ti(1,.05,.32,.015,{seg:[1,1,1]}).geometry,Fe=Array.from({length:11},(_,y)=>N(_e,T.oak,0,ii-.04,-An/2+.35+y*(An-.7)/10)),He=2.75,ie=1,we=new Hi;{let y=ie/2,R=He,L=.36;we.moveTo(-y,0),we.lineTo(y,0),we.lineTo(y,R-L),we.absellipse(y-.055,R-L,.055,L,0,Se/2,!1,0),we.lineTo(-y+.055,R),we.absellipse(-y+.055,R-L,.055,L,Se/2,Se,!1,0),we.lineTo(-y,0)}let Ge=new wr(we,{depth:.13,bevelEnabled:!0,bevelThickness:.03,bevelSize:.012,bevelSegments:3,curveSegments:24}),$e=N(Ge,T.plank,0,ii-.35,-An/2-.37),me=-An/2-.75,ze=(_,y,R,L=!0)=>{let D=document.createElement("canvas");D.width=_,D.height=y,R(D.getContext("2d"),_,y);let k=new vi(D);return L&&(k.colorSpace=dn),k.anisotropy=sr,k},un=new vi(Xg());un.colorSpace=dn;let rt=[],Ct=(_,y,R,L,D,k,V)=>{let j=new vr(new qs({map:un,color:y,transparent:!0,opacity:L,blending:Di,depthWrite:!1,toneMapped:!1}));return j.scale.set(R,R,1),j.position.set(D,k,V),j.userData.o=L,_.add(j),rt.push(j),j},gt=(_,y,R)=>new _n({map:_,color:y,transparent:!0,opacity:R,blending:Di,depthWrite:!1,toneMapped:!1}),ye=_=>new _n({color:new Ve(_).multiplyScalar(1.6),toneMapped:!1}),de=(_,y,R,L=0,D=0,k=0,V=!0)=>{let j=new tt(_,y);return j.position.set(L,D,k),j.castShadow=V,j.receiveShadow=!0,R.add(j),j},De=(_,y=32)=>new Kr(_.map(([R,L])=>new Me(R,L)),y),We=new ct({color:"#c09a5f",roughness:.28,metalness:.9}),Pe=new ct({color:"#17171a",roughness:.42,metalness:.2}),_t=new pn({color:"#f3f1ec",roughness:.3,clearcoat:.5}),Ze=new Xt,ot=new Xt;r.add(Ze,ot);let it=new Xt;Ze.add(it);let zt=new Xt,H=new Xt;x.add(zt,H);let jt=new Xt,ut=new Xt,xt=new Xt;zt.add(jt,ut),H.add(xt);let Ue=[],gn=_=>{let y=ze(512,512,(R,L,D)=>{R.fillStyle="#fff",R.fillRect(0,0,L,D);let k=mn(3);for(let V=0;V<700;V++){let j=k()*L,he=k()*D,ve=8+k()*30,be=(k()*.02).toFixed(3);for(let qe of j<ve?[0,L]:j>L-ve?[0,-L]:[0])for(let Ht of he<ve?[0,D]:he>D-ve?[0,-D]:[0]){let on=R.createRadialGradient(j+qe,he+Ht,0,j+qe,he+Ht,ve);on.addColorStop(0,`rgba(0,0,0,${be})`),on.addColorStop(1,"rgba(0,0,0,0)"),R.fillStyle=on,R.fillRect(j+qe-ve,he+Ht-ve,ve*2,ve*2)}}});return y.wrapS=y.wrapT=Xn,y.repeat.set(_[0],_[1]),y},at=_=>{let y=[],R=[],L=[],D=new F,k=new F;for(let{m:j,w:he,h:ve,bend:be=0}of _){let qe=be?4:1,Ht=new Mt().extractRotation(j);for(let on=0;on<qe;on++){let Pn=on/qe,Ci=(on+1)/qe,Ii=(Ji,rs)=>{let ba=be*rs*rs;return D.set(Ji*he,rs*ve,ba).applyMatrix4(j),[D.x,D.y,D.z]},Zi=[[-.5,Pn],[.5,Pn],[.5,Ci],[-.5,Pn],[.5,Ci],[-.5,Ci]];for(let[Ji,rs]of Zi)y.push(...Ii(Ji,rs)),R.push(Ji+.5,rs),k.set(0,-be*2*rs,1).normalize().applyMatrix4(Ht),L.push(k.x,k.y,k.z)}}let V=new ln;return V.setAttribute("position",new Ut(new Float32Array(y),3)),V.setAttribute("normal",new Ut(new Float32Array(L),3)),V.setAttribute("uv",new Ut(new Float32Array(R),2)),V},dt=_=>{let y=_.map(he=>he.index?he.toNonIndexed():he),R=0;y.forEach(he=>{R+=he.attributes.position.count});let L=new Float32Array(R*3),D=new Float32Array(R*3),k=new Float32Array(R*2),V=0;y.forEach(he=>{L.set(he.attributes.position.array,V*3),D.set(he.attributes.normal.array,V*3),he.attributes.uv&&k.set(he.attributes.uv.array,V*2),V+=he.attributes.position.count});let j=new ln;return j.setAttribute("position",new Ut(L,3)),j.setAttribute("normal",new Ut(D,3)),j.setAttribute("uv",new Ut(k,2)),j},I=(_,y,R,L=0,D=0,k=0,V=1)=>new Mt().compose(new F(_,y,R),new _i().setFromEuler(new cs(D,L,k,"YXZ")),new F(V,V,V)),w=ze(128,128,(_,y,R)=>{_.translate(y/2,R-4);let L=_.createLinearGradient(-y*.4,0,y*.4,-R);L.addColorStop(0,"#2f7a33"),L.addColorStop(.5,"#4f9f45"),L.addColorStop(1,"#2a6a2e"),_.fillStyle=L,_.beginPath(),_.moveTo(0,0),_.bezierCurveTo(-y*.5,-R*.18,-y*.5,-R*.78,-y*.16,-R*.9),_.bezierCurveTo(-y*.05,-R*.94,0,-R*.86,0,-R*.82),_.bezierCurveTo(0,-R*.86,y*.05,-R*.94,y*.16,-R*.9),_.bezierCurveTo(y*.5,-R*.78,y*.5,-R*.18,0,0),_.fill(),_.strokeStyle="rgba(220,245,190,.35)",_.lineWidth=2,_.beginPath(),_.moveTo(0,0),_.lineTo(0,-R*.8),_.stroke(),_.strokeStyle="rgba(230,250,200,.18)",_.lineWidth=1;for(let D=1;D<6;D++){let k=-R*.14*D;_.beginPath(),_.moveTo(0,k),_.quadraticCurveTo(-y*.14,k-8,-y*.3,k-14),_.moveTo(0,k),_.quadraticCurveTo(y*.14,k-8,y*.3,k-14),_.stroke()}}),te=_=>ze(128,512,(y,R,L)=>{let D=mn(_?41:42);y.strokeStyle=_?"#3c5a2c":"#5d8a3a",y.lineWidth=3,y.beginPath(),y.moveTo(R/2,L),y.lineTo(R/2,6),y.stroke();for(let k=0;k<34;k++){let V=k/34,j=L-18-V*(L-30),he=R*.47*Math.sin(Se*(.15+V*.8))*(1-V*.35);for(let ve of[-1,1]){let be=_?["#2f5a2a","#3e6e31","#274d24"]:["#4f8f3c","#6aa84a","#3f7a33"];y.fillStyle=be[(k+(ve>0?1:0))%3];let qe=R/2+ve*he,Ht=j-he*.55-D()*4;y.beginPath(),y.moveTo(R/2,j),y.quadraticCurveTo(R/2+ve*he*.5,j-he*.1-4,qe,Ht),y.quadraticCurveTo(R/2+ve*he*.45,j-he*.28+3,R/2,j-7),y.fill()}}}),Te=(_,y={})=>new ct({map:_,roughness:.62,side:tn,alphaTest:.5,...y}),oe=5.45,Ie=10.6,Le=me+34,ue=v.clone();ue.wrapS=ue.wrapT=Xn;let fe=oe+50,Ae=40;ue.repeat.set(Ae/9,fe/.52),ue.needsUpdate=!0;let U=new Nt(fe,Ae);{let _=U.attributes.uv;for(let y=0;y<_.count;y++)_.setXY(y,_.getY(y),_.getX(y))}let ge=new tt(U,new ct({map:ue,color:"#c49d78",roughness:.46}));ge.rotation.x=-Se/2,ge.position.set((oe-50)/2,0,me+Ae/2),ge.receiveShadow=!0,it.add(ge);let le=new ct({color:"#efe2d1",map:gn([7,5]),roughness:.95}),Oe=de(new Nt(oe+50,40),le,it,(oe-50)/2,20,me,!1);de(new hi(oe+50,.34,.06),new ct({color:"#f4ede3",roughness:.7}),it,(oe-50)/2,.17,me+.03,!1);let Ne=new ct({color:"#141518",roughness:.34,metalness:.55}),Ce=(_,y,R,L,D,k,V=it)=>de(new hi(_,y,R),Ne,V,L,D,k);for(let _=me+.07;_<Le;_+=3.35)Ce(.13,Ie,.13,oe,Ie/2,_);Ce(.16,.16,Le-me,oe,Ie,(me+Le)/2),Ce(.18,.1,Le-me,oe,.05,(me+Le)/2);let Qe=ze(256,256,(_,y,R)=>{_.translate(y/2,R/2),_.rotate(-.5),_.translate(-y/2,-R/2),[[.2,.12,.1],[.42,.04,.07],[.7,.16,.06]].forEach(([L,D,k])=>{let V=L*y,j=_.createLinearGradient(V-D*y,0,V+D*y,0);j.addColorStop(0,"rgba(255,255,255,0)"),j.addColorStop(.5,`rgba(255,255,255,${k})`),j.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=j,_.fillRect(-y,-R,y*3,R*3)})});Qe.wrapS=Qe.wrapT=Xn,Qe.repeat.set(6,1);let It=de(new Nt(Le-me,Ie),gt(Qe,"#ffffff",.22),it,oe-.01,Ie/2,(me+Le)/2,!1);It.rotation.y=-Se/2,It.renderOrder=5;let Ee=de(new Nt(Le-me,30),le,it,oe,Ie+15.08,(me+Le)/2,!1);Ee.rotation.y=-Se/2,de(new Nt(7,90),new ct({color:"#d9d2c7",roughness:.85}),it,oe+3.5,-.03,0,!1).rotation.x=-Se/2;let st=oe+6.2;de(new Nt(90,3.3),gt(Qe,"#e8f4ff",.14),it,st,1.65,0,!1).rotation.y=-Se/2;let St=de(new Nn(.045,.045,90,8),Ne,it,st,3.3,0);St.rotation.x=Se/2;for(let _=-30;_<40;_+=3.6)Ce(.07,3.3,.07,st,1.65,_);let ke=new F(-4.5,0,20),Zt=new F(.6,0,-.8),Sn=(_,y,R,L,D,k,V)=>{let j=new tt(new Nt(y,R),new _n({map:_,toneMapped:!1,transparent:!0,depthWrite:!1}));return j.position.copy(ke).addScaledVector(Zt,L),j.position.y=D,j.lookAt(ke.x,D,ke.z),j.renderOrder=k,V.add(j),j},Fn=(_,y,R,L,D,k,V,j=1)=>{let he=mn(k),ve=[he()*9,he()*9,he()*9,he()*9];_.fillStyle=V,_.beginPath(),_.moveTo(0,R);for(let be=0;be<=y;be+=4){let qe=be/y*j,Ht=L-D*(.55*Math.sin(qe*5.1+ve[0])+.3*Math.sin(qe*11.7+ve[1])+.15*Math.sin(qe*27+ve[2])+.08*Math.sin(qe*61+ve[3]));_.lineTo(be,Ht)}_.lineTo(y,R),_.closePath(),_.fill()},Oi=(_,y,R,L,D,k,V,j=1)=>{let he=mn(V),ve=Math.max(10,k*4);for(let be=0;be<D.length;be++){_.fillStyle=D[be];let qe=L*(1-be*.14),Ht=be*L*.1*j;for(let on=0;on<ve;on++){let Pn=he()*Se*2,Ci=Math.sqrt(he())*qe,Ii=L*(.1+he()*.16)*(1-be*.1),Zi=y+Math.cos(Pn)*Ci+Ht*.6,Ji=R+Math.sin(Pn)*Ci*.78-Ht;_.beginPath(),_.arc(Zi,Ji,Ii,0,Se*2),_.fill()}}},Cs=(_,y,R,L,D)=>{let k=mn(D);for(let V=0;V<y*R/90;V++)_.fillStyle=k()<.5?`rgba(255,255,255,${(k()*L).toFixed(3)})`:`rgba(0,0,0,${(k()*L).toFixed(3)})`,_.fillRect(k()*y,k()*R,1+k()*2,1+k()*2)},rr=ze(2048,1024,(_,y,R)=>{let L=_.createLinearGradient(0,0,0,R*.66);L.addColorStop(0,"#86b2df"),L.addColorStop(.45,"#b7d1ec"),L.addColorStop(.82,"#efe3d4"),L.addColorStop(1,"#fbe1bd"),_.fillStyle=L,_.fillRect(0,0,y,R);let D=y*.82,k=R*.5,V=_.createRadialGradient(D,k,0,D,k,R*.6);V.addColorStop(0,"rgba(255,248,226,1)"),V.addColorStop(.1,"rgba(255,228,176,.6)"),V.addColorStop(.45,"rgba(255,214,160,.16)"),V.addColorStop(1,"rgba(255,214,160,0)"),_.fillStyle=V,_.fillRect(0,0,y,R),_.fillStyle="#fffbf2",_.beginPath(),_.arc(D,k,R*.045,0,Se*2),_.fill();let j=mn(14);for(let he=0;he<14;he++){let ve=j()*y,be=R*(.08+j()*.3),qe=120+j()*260;_.save(),_.translate(ve,be),_.scale(1,.16);let Ht=_.createRadialGradient(0,0,0,0,0,qe);Ht.addColorStop(0,"rgba(255,255,255,.45)"),Ht.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=Ht,_.beginPath(),_.arc(0,0,qe,0,Se*2),_.fill(),_.restore()}[[.55,.1,3,"#c4cbdc"],[.585,.085,5,"#a9b7cb"],[.625,.07,7,"#8fa6ad"],[.67,.055,9,"#7c9c86"]].forEach(([he,ve,be,qe],Ht)=>{Fn(_,y,R,R*he,R*ve,be,qe,1+Ht*.3);let on=_.createLinearGradient(0,R*(he-.01),0,R*(he+.06));on.addColorStop(0,"rgba(250,240,228,0)"),on.addColorStop(1,"rgba(250,240,228,.5)"),_.fillStyle=on,_.fillRect(0,R*(he-.01),y,R*.07)}),_.fillStyle="#7c9c86",_.fillRect(0,R*.72,y,R)}),Lr=ze(2048,512,(_,y,R)=>{let L=(V,j,he,ve,be,qe)=>{let Ht=_.createLinearGradient(0,V-j,0,R);Ht.addColorStop(0,ve),Ht.addColorStop(1,be),Fn(_,y,R,V,j,he,Ht,qe)};L(R*.3,R*.12,21,"#a9c6a0","#8fb488",1.3),L(R*.46,R*.11,22,"#93bd78","#77a560",1.7),L(R*.62,R*.1,23,"#7cad5f","#5e9148",2.2),_.globalCompositeOperation="source-atop",_.strokeStyle="rgba(45,85,35,.22)",_.lineWidth=2.5;for(let V=0;V<22;V++){let j=R*(.66+V*.015);_.beginPath();for(let he=0;he<=y;he+=14)_.lineTo(he,j+Math.sin(he*.0035+V*.35)*12);_.stroke()}_.globalCompositeOperation="source-over";let D=mn(24);for(let V=0;V<60;V++){let j=D()*y,he=R*(.3+D()*.5);Oi(_,j,he,10+D()*18,["#2f5a2a","#3f7034","#5a8d45","#7eae5e"],3,100+V)}let k=_.createLinearGradient(0,R*.22,0,R*.55);k.addColorStop(0,"rgba(240,236,226,.45)"),k.addColorStop(1,"rgba(240,236,226,0)"),_.globalCompositeOperation="source-atop",_.fillStyle=k,_.fillRect(0,0,y,R),_.globalCompositeOperation="source-over",Cs(_,y,R,.05,25)}),or=ze(1024,512,(_,y,R)=>{let L=mn(31);for(let D=0;D<9;D++){let k=y*(D/8)+(L()-.5)*60,V=R*(.46+L()*.22);Oi(_,k,V,60+L()*50,["#1f4220","#2c5a2a","#3f7535","#5b9346","#86bb63"],10,200+D)}_.fillStyle="#244a23",_.fillRect(0,R*.84,y,R),_.globalCompositeOperation="source-atop",Cs(_,y,R,.07,32),_.globalCompositeOperation="source-over"}),Xi=[Sn(rr,220,88,95,16,1,it),Sn(Lr,120,30,50,-.5,2,it),Sn(or,56,20,30,1.2,3,it)],qi=new ct({color:"#ffffff",roughness:.95,transparent:!0,opacity:.74,side:tn,depthWrite:!1,emissive:new Ve("#fff1de"),emissiveIntensity:.42}),ts=ze(256,256,(_,y,R)=>{_.fillStyle="#fff",_.fillRect(0,0,y,R);let L=mn(8);for(let D=0;D<2600;D++)_.fillStyle=`rgba(0,0,0,${(L()*.07).toFixed(3)})`,_.fillRect(L()*y,L()*R,1+L()*3,1);for(let D=0;D<y;D+=3)_.fillStyle=`rgba(0,0,0,${(L()*.04).toFixed(3)})`,_.fillRect(D,0,1,R)});ts.wrapS=ts.wrapT=Xn,ts.repeat.set(3,6);let ar=new ct({color:"#d9c8ae",map:ts,roughness:1,side:tn}),Is=[],Yi=(_,y,R,L,D,k,V,j=it,he="z",ve=Ie-.2)=>{let be=new Nt(y,ve,Math.round(y*12),14),qe=new tt(be,_);return he==="z"?(qe.rotation.y=-Se/2,qe.position.set(R,ve/2,L+y/2)):qe.position.set(R+y/2,ve/2,L),qe.renderOrder=_.transparent?6:0,qe.castShadow=!_.transparent,qe.receiveShadow=!0,j.add(qe),Is.push({geo:be,base:be.attributes.position.array.slice(),ph:D,pleats:k,depth:V,w:y,h:ve}),qe};Yi(qi,2.2,oe-.3,me+.2,0,10,.12),Yi(ar,1.05,oe-.46,me+.14,1.7,6,.16),de(new Nn(.03,.03,9,8),Ne,it,oe-.4,Ie-.2,me+4.5).rotation.x=Se/2;let Vn=ze(512,128,(_,y,R)=>{_.filter="blur(6px)",_.fillStyle="#fff";for(let L=0;L<4;L++)_.fillRect(14+L*y/4,14,y/4-30,R-28)}),Ai=new Nt(1,1);[[oe,me+3.6],[oe,me+17],[oe-9.5,me+20.5],[oe-9.5,me+7.1]].forEach(([_,y],R)=>Ai.attributes.position.setXYZ([2,3,1,0][R],_,.07,y)),Ai.computeVertexNormals();let Ps=new tt(Ai,Object.assign(gt(Vn,"#ffdcae",.2),{side:tn}));Ps.renderOrder=2,Ps.frustumCulled=!1,it.add(Ps);let lr=(_,y,R)=>new Vi({uniforms:{uTime:{value:0},uPx:{value:s.getPixelRatio()},uCol:{value:new Ve(...y)},uA:{value:R}},vertexShader:`attribute float phase; uniform float uTime, uPx; varying float vA;
      void main(){ vec3 p = position;
        ${_==="dust"?"p += vec3(sin(uTime*.21 + phase)*.22, sin(uTime*.13 + phase*1.7)*.3, cos(uTime*.17 + phase*.9)*.22);":""}
        vA = .4 + .6 * (.5 + .5 * sin(uTime * (.9 + fract(phase) * 1.8) + phase * 3.1));
        vec4 mv = modelViewMatrix * vec4(p, 1.);
        gl_PointSize = uPx * ${_==="dust"?"(1.2 + fract(phase * 7.) * 1.8) * (44. / -mv.z)":"(1.1 + fract(phase * 3.) * 1.9)"};
        gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 uCol; uniform float uA; varying float vA; void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .04, d) * vA * uA; gl_FragColor = vec4(uCol * a, a); }",transparent:!0,depthWrite:!1,blending:Di}),cr=(_,y,R,L,D)=>{let k=new Float32Array(_*3),V=new Float32Array(_),j=mn(y);for(let be=0;be<_;be++)k.set(R(j),be*3),V[be]=j()*50;let he=new ln;he.setAttribute("position",new Ut(k,3)),he.setAttribute("phase",new Ut(V,1));let ve=new br(he,L);return ve.frustumCulled=!1,ve.renderOrder=7,D.add(ve),ve},On=lr("dust",[1,.93,.8],.32);cr(n?30:60,31,_=>[oe-.5-_()*7,.4+_()*7.5,me+2+_()*12],On,it);let nn={A:4.6,hs:4.55,ry:3.4},Ei=nn.hs+nn.ry,ns=(_,y,R,L=72)=>{let D=[new Me(-_,0),new Me(-_,y)];for(let k=1;k<L;k++){let V=Se-k/L*Se;D.push(new Me(Math.cos(V)*_,y+Math.sin(V)*R))}return D.push(new Me(_,y),new Me(_,0)),D},E=new Xt;Ze.add(E);let G=ze(512,512,(_,y,R)=>{let L=y/(nn.A*2),D=R/Ei,k=he=>[(he.x+nn.A)*L,R-he.y*D],V=()=>{_.beginPath(),ns(nn.A,nn.hs,nn.ry).forEach((he,ve)=>{let[be,qe]=k(he);ve?_.lineTo(be,qe):_.moveTo(be,qe)})};_.fillStyle="#000",_.fillRect(0,0,y,R),_.globalCompositeOperation="lighter";for(let he=0;he<26;he++){let ve=he/25;V(),_.lineWidth=6+ve*150,_.strokeStyle=`rgba(255,255,255,${(.09*(1-ve)**1.6+.012).toFixed(3)})`,_.stroke()}_.globalCompositeOperation="multiply";let j=_.createLinearGradient(0,R,0,0);j.addColorStop(0,"#2a2a2a"),j.addColorStop(.35,"#b0b0b0"),j.addColorStop(1,"#ffffff"),_.fillStyle=j,_.fillRect(0,0,y,R)}),se=new Hi(ns(nn.A,nn.hs,nn.ry)),$=new Yo(se,24);{let _=$.attributes.position,y=$.attributes.uv;for(let R=0;R<_.count;R++)y.setXY(R,(_.getX(R)+nn.A)/(nn.A*2),_.getY(R)/Ei)}let Q=new ct({color:"#f5eadb",map:gn([2,2]),roughness:.95,emissive:new Ve("#ffb46e"),emissiveMap:G,emissiveIntensity:.95});de($,Q,E,0,0,me+.004,!1);let Be=new Hi([...ns(nn.A+.17,nn.hs,nn.ry+.17),...ns(nn.A,nn.hs,nn.ry).reverse()]),Je=new ct({color:"#f2e6d6",roughness:.9});de(new wr(Be,{depth:.2,bevelEnabled:!0,bevelThickness:.02,bevelSize:.02,bevelSegments:2,curveSegments:6}),Je,E,0,0,me,!0);class Re extends ui{constructor(y,R){super(),this.pts=R?[...y,y[0]]:y,this.acc=[0];for(let L=1;L<this.pts.length;L++)this.acc.push(this.acc[L-1]+this.pts[L].distanceTo(this.pts[L-1]))}getPoint(y,R=new F){let L=this.acc[this.acc.length-1]*ei(y),D=1;for(;D<this.acc.length-1&&this.acc[D]<L;)D++;let k=this.acc[D-1],V=this.acc[D];return R.lerpVectors(this.pts[D-1],this.pts[D],V>k?(L-k)/(V-k):0)}}let Xe=de(new us(new Re(ns(nn.A-.035,nn.hs,nn.ry-.035).map(_=>new F(_.x,Math.max(.35,_.y),me+.17))),240,.028,6,!1),ye("#ffd9a6"),E,0,0,0,!1),nt=ze(512,512,(_,y,R)=>{let D=(y-120)/(nn.A*2),k=(R-60)/Ei;_.beginPath(),ns(nn.A,nn.hs,nn.ry).forEach((V,j)=>{let he=60+(V.x+nn.A)*D,ve=R-V.y*k;j?_.lineTo(he,ve):_.moveTo(he,ve)}),_.globalCompositeOperation="lighter";for(let V=0;V<14;V++){let j=V/13;_.lineWidth=4+j*90,_.strokeStyle=`rgba(255,255,255,${(.12*(1-j)**2).toFixed(3)})`,_.stroke()}}),ht=de(new Nt(nn.A*2*512/392,Ei*512/452),gt(nt,"#ffb46a",.55),E,0,Ei*512/452/2,me+.012,!1);ht.renderOrder=1;let Tt=new Xt;Ze.add(Tt);let et=_=>ze(256,360,(y,R,L)=>{let D=mn(_),k=y.createLinearGradient(0,0,0,L);k.addColorStop(0,"#f3ede3"),k.addColorStop(1,"#e9e0d2"),y.fillStyle=k,y.fillRect(0,0,R,L),y.fillStyle="rgba(232,170,120,.55)",y.beginPath(),y.arc(R*(.3+D()*.4),L*(.26+D()*.1),R*.11,0,Se*2),y.fill(),[["#d9cbb6",.5],["#b8b3aa",.6],["#8f98a3",.7],["#6f7c8a",.82]].forEach(([V,j],he)=>Fn(y,R,L,L*j,L*(.1-he*.012),_*7+he,V,.45+D()*.3))}),Ft=new ct({color:"#3a2a20",roughness:.5}),xn=new ct({color:"#f8f5ef",roughness:.9}),$t=(_,y,R,L,D)=>{let k=new Xt;k.position.set(R,L,me+.02),Tt.add(k);let V=.07,j=.075;[[_,V,0,y/2-V/2],[_,V,0,-y/2+V/2],[V,y-2*V,-_/2+V/2,0],[V,y-2*V,_/2-V/2,0]].forEach(([he,ve,be,qe])=>de(new hi(he,ve,j),Ft,k,be,qe,j/2)),de(new Nt(_-2*V,y-2*V),xn,k,0,0,.014,!1),de(new Nt((_-2*V)*.7,(y-2*V)*.74),new ct({map:et(D),roughness:.8}),k,0,.02,.018,!1)};$t(1.16,1.6,-1.5,5.36,3),$t(1.32,1.96,0,5.54,7),$t(1.16,1.6,1.5,5.36,11);let Kt=ze(512,512,(_,y,R)=>{let L=mn(21);_.fillStyle="#ffffff",_.fillRect(0,0,y,R);for(let D=0;D<16e3;D++)_.fillStyle=L()<.5?`rgba(255,255,255,${(L()*.3).toFixed(3)})`:`rgba(120,100,80,${(L()*.08).toFixed(3)})`,_.fillRect(L()*y,L()*R,1+L()*2.5,1+L())});Kt.wrapS=Kt.wrapT=Xn,Kt.repeat.set(4,4);let yn=de(ti(1,.06,1,.025,{seg:[1,1,1]}).geometry,new ct({map:Kt,color:"#e8dece",roughness:1,normalMap:f,normalScale:new Me(.5,.5)}),x,.9,.03,1.6,!1);yn.receiveShadow=!0,de(new Nn(.82,.82,.07,48),Pe,jt,0,2.05,0),[0,2.09,4.19].forEach(_=>{de(new Nn(.04,.028,2.02,10),Pe,jt,Math.cos(_)*.48,1.01,Math.sin(_)*.48).rotation.set(Math.sin(_)*.1,0,-Math.cos(_)*.1)});let je=new pn({color:"#fbf7ef",emissive:new Ve("#ffcf98"),emissiveIntensity:.7,roughness:.3,clearcoat:.4,side:tn}),En=(_,y,R,L,D,k)=>{let V=new Xt;return V.position.set(y,R,L),V.scale.setScalar(D),_.add(V),de(De([[0,0],[.27,0],[.29,.03],[.25,.07],[.07,.1],[0,.1]]),We,V),de(new Nn(.03,.034,.92,12),We,V,0,.55,0),de(De(Array.from({length:14},(j,he)=>{let ve=he/13*Se/2;return[.5*Math.cos(ve),.4*Math.sin(ve)]}),40),je,V,0,.99,0),de(new Wo(.47,32),ye("#ffe3b8"),V,0,.985,0,!1).rotation.x=Se/2,Ct(V,k,2.6,.36,0,1.02,0),Ct(V,"#fff0d8",.9,.5,0,.96,0),V};En(jt,.28,2.09,-.34,1,"#ffc98a");let kt=new er("#ffc78c",0,10,2);kt.position.set(.28,2.95,-.34),zt.add(kt);let pi=de(De([[0,0],[.22,0],[.26,.05],[.29,.42],[.31,.46],[.28,.47],[0,.42]]),_t,jt,-.36,2.09,.3),en;{let _=[],y=mn(57);for(let R=0;R<8;R++){let L=-Se*.2+R/8*Se*1.25+y()*.3,D=.3+y()*.5,k=.15+y()*(R%3?.45:1.1),V=6+Math.floor(k*5);for(let j=0;j<V;j++){let he=j/(V-1),ve=.22+D*Math.min(1,he*1.6),be=-.36+Math.cos(L)*ve,qe=.3+Math.sin(L)*ve,Ht=Math.hypot(be,qe)<.78,on=.5+.12*Math.sin(he*Se)-k*he*he;Ht&&(on=Math.max(on,.04+.1*(1-he))),_.push({m:I(be,2.09+on,qe,L+Se/2+(y()-.5)*1.2,-.5-y()*.9+he*.8,(y()-.5)*.8,.17+y()*.09),w:1,h:1})}}en=new tt(at(_),Te(w)),en.castShadow=!0,jt.add(en),Ue.push({o:en,axis:"z",amp:.012,speed:.7,ph:0})}let Ls=[de(ti(1.9,1.42,1.5,.03,{seg:[2,2,2]}).geometry,T.oak,xt,0,1.2,0),de(ti(1.74,.62,.05,.012,{seg:[2,2,1]}).geometry,T.oak,xt,0,1.42,.76)];de(new hi(.42,.05,.05),We,xt,0,1.46,.8),[[-.8,-.6],[.8,-.6],[-.8,.6],[.8,.6]].forEach(([_,y])=>de(new Nn(.06,.035,.5,8),T.oak,xt,_,.25,y)),de(ti(.96,.085,.7,.012,{seg:[1,1,1]}).geometry,new ct({color:"#ece7de",roughness:.8}),xt,-.3,1.955,.16).rotation.y=-.06,de(ti(.84,.075,.62,.012,{seg:[1,1,1]}).geometry,new ct({color:"#c9ccce",roughness:.8}),xt,-.28,2.035,.14).rotation.y=.1,de(De([[0,0],[.15,0],[.17,.02],[.18,.2],[.16,.27],[.065,.31],[.055,.37],[.065,.385],[0,.385]],28),new pn({color:"#a8641f",roughness:.12,clearcoat:1,transparent:!0,opacity:.86}),xt,.4,1.91,-.2);{let _=mn(66),y=[];for(let R=0;R<8;R++){let L=new Nn(.007,.007,1.15,4);L.translate(0,.575,0),L.applyMatrix4(I(.4,1.91+.36,-.2,_()*Se*2,(.1+_()*.22)*(_()<.5?-1:1),(.1+_()*.22)*(_()<.5?-1:1))),y.push(L)}de(dt(y),Pe,xt)}let Qt=8.35,Rn=.18,ft=.5,Cn=de(new Nt(110,60),new ct({color:"#1f2026",roughness:.2,metalness:.12}),ot,0,0,me+30,!1);Cn.rotation.x=-Se/2;let sn=new ct({color:"#2a2930",map:gn([6,4]),roughness:.92});de(new Nt(ft+55,Qt),sn,ot,(ft-55)/2,Qt/2,me,!1);for(let _=ft;_<50;_+=3.6)Ce(.13,Qt,.13,_,Qt/2,me+.06,ot);Ce(60,.14,.14,ft+30,Qt-.07,me+.06,ot),Ce(60,.1,.16,ft+30,.05,me+.07,ot);let At=de(new Nt(60,Qt),gt(Qe,"#c8d2ff",.1),ot,ft+30,Qt/2,me+.02,!1);At.renderOrder=5;let Dt=new Xt;ot.add(Dt);let Bn=new ct({color:"#1b1a1f",roughness:.9});de(new Nt(110,60),Bn,Dt,0,Qt,me+30,!1).rotation.x=Se/2;let Jn={x:1.8,z:2.6,rx:9.6,rz:6.6},ao=(_,y)=>Array.from({length:160},(R,L)=>{let D=L/160*Se*2;return new F(Jn.x+Math.cos(D)*Jn.rx*_,y,Jn.z+Math.sin(D)*Jn.rz*_)});de(new us(new Re(ao(1,Qt-.06),!0),320,.035,6,!0),ye("#ffcf8a"),Dt,0,0,0,!1),de(new us(new Re(ao(.93,Qt-.03),!0),320,.018,5,!0),ye("#b07a45"),Dt,0,0,0,!1);let lo=ze(512,512,(_,y,R)=>{_.translate(y/2,R/2),((D,k,V)=>{let j=_.createRadialGradient(0,0,D,0,0,k);j.addColorStop(0,"rgba(255,255,255,0)"),j.addColorStop(.75,`rgba(255,255,255,${V})`),j.addColorStop(.86,`rgba(255,255,255,${V*.5})`),j.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=j,_.fillRect(-y/2,-R/2,y,R)})(y*.05,y*.5,.9)}),ha=de(new Nt(Jn.rx*2/.86*1,Jn.rz*2/.86),gt(lo,"#ffb46a",.55),Dt,Jn.x,Qt-.015,Jn.z,!1);ha.rotation.x=Se/2,ha.renderOrder=1;let co;{let _=[];for(let L=-5.26;L<-3.45;L+=.31){let D=new hi(.2,Qt,.13);D.translate(L,Qt/2,me+.075),_.push(D)}let y=g.clone();y.wrapS=y.wrapT=Xn,y.repeat.set(.3,3),y.needsUpdate=!0,co=de(dt(_),new ct({color:"#7a5236",map:y,roughness:.55}),ot);let R=ze(64,256,(L,D,k)=>{let V=L.createLinearGradient(0,0,D,0);V.addColorStop(0,"rgba(255,255,255,0)"),V.addColorStop(.5,"rgba(255,255,255,1)"),V.addColorStop(1,"rgba(255,255,255,0)"),L.fillStyle=V,L.fillRect(0,0,D,k)});[-4.795,-3.865].forEach(L=>{de(new hi(.035,Qt-.3,.02),ye("#ffc98a"),ot,L,Qt/2,me+.03,!1);let D=de(new Nt(1.5,Qt),gt(R,"#ffa955",.5),ot,L,Qt/2,me+.145,!1);D.renderOrder=2})}let Ri=new Me(.35,1.4),si=9.4,Ns=me+.04,Ds=(()=>{let _=Math.asin(ei((Ns-Ri.y)/si,-1,1)),y=_,R=Se-_,L=[];for(let D=0;D<=120;D++)L.push(y+D/120*(R-y));return L})(),Us=new Hi;Ds.forEach((_,y)=>{let R=Ri.x+Math.cos(_)*si,L=Ri.y+Math.sin(_)*si;y?Us.lineTo(R,L):Us.moveTo(R,L)}),Us.closePath();let ho=new wr(Us,{depth:Rn,bevelEnabled:!0,bevelThickness:.015,bevelSize:.03,bevelSegments:2,curveSegments:4});ho.rotateX(Se/2),ho.translate(0,Rn,0);let Il=de(ho,[new ct({color:"#3b3a3d",roughness:.62,metalness:0}),new ct({color:"#25262b",roughness:.5})],ot,0,0,0,!1);Il.receiveShadow=!0,de(new us(new Re(Ds.map(_=>new F(Ri.x+Math.cos(_)*(si+.04),.035,Math.max(Ns+.02,Ri.y+Math.sin(_)*(si+.04))))),260,.028,5,!1),ye("#ffc27a"),ot,0,0,0,!1);{let _=[],y=[];Ds.forEach((V,j)=>{let he=Math.cos(V),ve=Math.sin(V);_.push(Ri.x+he*(si-.1),.012,Math.max(Ns,Ri.y+ve*(si-.1)),Ri.x+he*(si+1.7),.012,Math.max(Ns,Ri.y+ve*(si+1.7))),y.push(j/120,0,j/120,1)});let R=[];for(let V=0;V<Ds.length-1;V++){let j=V*2;R.push(j,j+1,j+2,j+1,j+3,j+2)}let L=new ln;L.setAttribute("position",new Ut(new Float32Array(_),3)),L.setAttribute("uv",new Ut(new Float32Array(y),2)),L.setIndex(R);let D=ze(4,64,(V,j,he)=>{let ve=V.createLinearGradient(0,he,0,0);ve.addColorStop(0,"rgba(255,255,255,1)"),ve.addColorStop(.25,"rgba(255,255,255,.45)"),ve.addColorStop(1,"rgba(255,255,255,0)"),V.fillStyle=ve,V.fillRect(0,0,j,he)}),k=new tt(L,gt(D,"#ff9e50",.5));k.renderOrder=2,k.frustumCulled=!1,ot.add(k)}let ua=ze(64,256,(_,y,R)=>{let L=_.createLinearGradient(0,0,0,R);L.addColorStop(0,"rgba(255,255,255,0)"),L.addColorStop(1,"rgba(255,255,255,.9)"),_.fillStyle=L,_.fillRect(0,0,y,R)}),da=de(new Nt(52,7),gt(ua,"#7c6aa6",.13),ot,ft+26,.006,me+3.5,!1);da.rotation.x=-Se/2,da.renderOrder=1;let Nr=ze(2048,1024,(_,y,R)=>{let L=_.createLinearGradient(0,0,0,R*.7);L.addColorStop(0,"#18204a"),L.addColorStop(.32,"#2f3168"),L.addColorStop(.55,"#5d4c86"),L.addColorStop(.74,"#b4728c"),L.addColorStop(.88,"#ea9a6e"),L.addColorStop(1,"#f5bd86"),_.fillStyle=L,_.fillRect(0,0,y,R);let D=mn(77);for(let k=0;k<160;k++){_.fillStyle=`rgba(240,240,255,${(.15+D()*.5).toFixed(2)})`;let V=D()<.9?1.2:2;_.fillRect(D()*y,D()*R*.3,V,V)}for(let k=0;k<10;k++){let V=D()*y,j=R*(.42+D()*.2),he=160+D()*320;_.save(),_.translate(V,j),_.scale(1,.06);let ve=_.createRadialGradient(0,0,0,0,0,he);ve.addColorStop(0,"rgba(255,170,170,.35)"),ve.addColorStop(1,"rgba(255,170,170,0)"),_.fillStyle=ve,_.beginPath(),_.arc(0,0,he,0,Se*2),_.fill(),_.restore()}[[.66,.1,41,"#5a4f80"],[.7,.085,43,"#43426c"],[.745,.07,45,"#2f3253"],[.79,.055,47,"#1f2338"]].forEach(([k,V,j,he],ve)=>{Fn(_,y,R,R*k,R*V,j,he,1.2+ve*.35);let be=_.createLinearGradient(0,R*(k-.005),0,R*(k+.05));be.addColorStop(0,"rgba(240,150,140,0)"),be.addColorStop(1,`rgba(240,150,140,${(.18-ve*.04).toFixed(2)})`),_.fillStyle=be,_.fillRect(0,R*(k-.005),y,R*.06)}),_.fillStyle="#1f2338",_.fillRect(0,R*.84,y,R)}),Dr=ze(2048,512,(_,y,R)=>{Fn(_,y,R,R*.5,R*.14,51,"#182029",1.6);let L=mn(52);for(let D=0;D<70;D++){let k=L()*y,V=R*(.4+L()*.3);Oi(_,k,V,12+L()*26,["#0f161b","#151f26","#1f2a2f"],3,300+D)}_.fillStyle="#141b22",_.fillRect(0,R*.72,y,R)}),fa=ze(1024,768,(_,y,R)=>{let L=mn(61);_.strokeStyle="#0d1311",_.lineCap="round",[[.36,1,.33,.62,16],[.35,.78,.25,.52,7],[.34,.74,.46,.5,6]].forEach(([D,k,V,j,he])=>{_.lineWidth=he,_.beginPath(),_.moveTo(y*D,R*k),_.quadraticCurveTo(y*(D+V)/2,R*(k+j)/2+14,y*V,R*j),_.stroke()}),Oi(_,y*.35,R*.42,140,["#0a110f","#0f1815","#16211d","#202c26","#3a3433"],26,400),Oi(_,y*.2,R*.62,70,["#0a110f","#111a17","#1a2621","#352f2f"],10,402);for(let D=0;D<14;D++)Oi(_,y*(D/13),R*(.86+L()*.05),36+L()*26,["#0a100e","#101815"],6,410+D);_.fillStyle="#0a100e",_.fillRect(0,R*.91,y,R)}),Ur=(_,y,R,L,D,k,V)=>{let j=new tt(new Nt(y,R),new _n({map:_,toneMapped:!1,transparent:!0,depthWrite:!1}));return j.position.set(L,D,k),j.renderOrder=V,ot.add(j),j},uo=[Ur(Nr,340,170,18,22,me-90,1),Ur(Dr,190,48,14,-9,me-44,2),Ur(fa,34,25.5,10,4.6,me-13,3)],pa=lr("star",[1,.97,.9],.8);uo.stars=cr(n?30:60,9,_=>[-40+_()*110,22+_()*30,me-85],pa,ot);let ms=new ct({color:"#4b4c57",roughness:.95,transparent:!0,opacity:.55,side:tn,depthWrite:!1,emissive:new Ve("#2a2440"),emissiveIntensity:.5});Yi(ms,2.6,10.4,me+.38,2.2,11,.11,ot,"x",Qt-.12);let jn={x:.25,z:2.05,h:3.55};de(new Nn(.34,.36,.05,32),Pe,ut,jn.x,Rn+.025,jn.z),de(new Nn(.028,.028,jn.h,10),Pe,ut,jn.x,Rn+jn.h/2,jn.z),de(new us(new Re([[0,0],[.05,.19],[.24,.3],[.44,.24],[.58,.06]].map(([_,y])=>new F(jn.x+_,Rn+jn.h+y,jn.z))),24,.026,8,!1),Pe,ut);let B=En(ut,jn.x+.58,Rn+jn.h+.06-1.39*1.08,jn.z,1.08,"#ffb870");B.children[0].visible=B.children[1].visible=!1;let J=new er("#ffb36b",0,12,1.8);J.position.set(jn.x+.58,Rn+jn.h-.5,jn.z),zt.add(J);let ae=de(De([[0,0],[.36,0],[.42,.62],[.45,.66],[.4,.68],[0,.6]]),new ct({color:"#2b2b30",roughness:.55}),ut,.95,Rn,-.9),xe;{let _=[],y=mn(88);for(let R=0;R<26;R++){let L=-2.6+R/25*4+(y()-.5)*.35,D=.35+y()*1,k=2.1+y()*2.1;_.push({m:I(.95+(y()-.5)*.2,Rn+.55+y()*.15,-.9+(y()-.5)*.2,L,-(Se/2-D),(y()-.5)*.5,1),w:.95+y()*.3,h:k,bend:-.35-y()*.65})}xe=new tt(at(_),Te(te(!0))),xe.castShadow=!0,ut.add(xe),Ue.push({o:xe,axis:"z",amp:.02,speed:.5,ph:1.3})}let pe=new Qs("#fff1e0",300,90,.6,.85,1.2);pe.castShadow=!0,pe.shadow.mapSize.set(n?1024:2048,n?1024:2048),pe.shadow.radius=6,pe.shadow.blurSamples=16,pe.shadow.bias=-4e-4,pe.shadow.normalBias=.025,pe.shadow.camera.near=4,pe.shadow.camera.far=80,r.add(pe,pe.target);let Ye={pos:[new F(-6.5,13.5,11),new F(oe+22,17,9)],at:[new F(0,2,-.4),new F(-.5,1.6,-.8)]},pt=new bs("#fff6ec",1);pt.position.set(-4,5,14),r.add(pt);let Pt=new bs("#9a90e0",0);Pt.position.set(5,9,-30),r.add(Pt);let Lt=new Zo("#e9f0ff","#dcb98f",1);r.add(Lt);let bt=_=>{pa.uniforms.uTime.value=_,On.uniforms.uTime.value=_,Is.forEach(y=>{let R=y.geo.attributes.position.array,L=y.base;for(let D=0;D<R.length;D+=3){let k=L[D],V=L[D+1],j=(y.h/2-V)/y.h,he=Math.sin((k/y.w+.5)*Se*y.pleats)*y.depth;R[D+2]=L[D+2]+he+(Math.sin(_*.9+y.ph+V*.35)*.1*j*j+Math.sin(_*1.6+k*2.1)*.025*j)*(t?0:1),R[D]=L[D]+Math.sin(_*.7+y.ph)*.05*j*j*(t?0:1)}y.geo.attributes.position.needsUpdate=!0,y.geo.computeVertexNormals()}),t||Ue.forEach(y=>{y.o.rotation[y.axis]=Math.sin(_*y.speed+y.ph)*y.amp})};bt(0);let rn=(_,y)=>[new Ve(_),new Ve(y)],Et={key:rn("#ffe6c8","#fff3e2"),fill:rn("#8c9cff","#fff6ec"),sky:rn("#ffcf9a","#e9f0ff"),ground:rn("#141419","#dcb98f")},wt=(_,y,R)=>_.copy(y[0]).lerp(y[1],R),Gt=null;function Jt(){let _=Ti(0,1,K.day),y=1-_,R=1-.85*Ir(K.buildPose),L=K.day>=.5;L!==Gt&&(Gt=L,Ze.visible=jt.visible=xt.visible=yn.visible=L,ot.visible=ut.visible=!L,r.environment=L&&c?c:l,x.contact.position.y=L?.012:Rn+.006),pe.position.lerpVectors(Ye.pos[0],Ye.pos[1],_),pe.target.position.lerpVectors(Ye.at[0],Ye.at[1],_),wt(pe.color,Et.key,_),pe.intensity=cn(260,520,_),pe.angle=cn(.5,.62,_),wt(pt.color,Et.fill,_),pt.intensity=cn(.32,1,_),Pt.intensity=y*.75,wt(Lt.color,Et.sky,_),wt(Lt.groundColor,Et.ground,_),Lt.intensity=cn(.4,1.05,_),r.environmentIntensity=cn(.3,.85,_),s.toneMappingExposure=cn(1,1.02,_),kt.intensity=2.2*R,J.intensity=13*R,je.emissiveIntensity=cn(1.5,.7,_)*cn(.15,1,R),rt.forEach(D=>{D.material.opacity=D.userData.o*cn(1,.55,_)*R}),Q.emissiveIntensity=.95*cn(.4,1,R)}let zn=me+.02,gs=new Pi(new F(0,0,1),-zn),$n=new kn(Ng,1.6,2,260),Bi=new $o,ma=new Me,Pl=new F,Ot=new F,mt={sizes:{},blocks:{},dirty:!1,last:""},Yt={desk:{hero:{pose:{tx:-2.7,shift:0,az:-.09,pol:1.36,zoom:.93,dy:.45,open:0},zone:{x0:.045,y:.19,minY:.8}},cap1:{pose:{tx:-3.3,shift:0,az:-.2,pol:1.3,zoom:.86,dy:.35,open:.45},zone:{x0:.05,y:.3,minY:.8}},cap2:{pose:{tx:-2.4,shift:0,az:-.03,pol:1.25,zoom:.92,dy:.95,open:1},zone:{x0:.05,y:.26,minY:1.2}},cap3:{pose:{tx:-3.6,shift:0,az:.13,pol:1.32,zoom:.88,dy:.3,open:.3},zone:{x0:.05,y:.32,minY:.8}},show:{pose:{tx:0,shift:0,az:-.5,pol:1.27,zoom:1,dy:0,open:0}}},phone:{hero:{pose:{tx:0,shift:0,az:-.2,pol:1.29,zoom:.98,dy:1.3,open:0},zone:{y:.105,align:"center",minY:3.4}},cap1:{pose:{tx:0,shift:0,az:-.26,pol:1.25,zoom:.94,dy:.55,open:.45},zone:{y:.11,align:"center",minY:4.6}},cap2:{pose:{tx:0,shift:0,az:-.16,pol:1.22,zoom:.92,dy:.55,open:1},zone:{y:.11,align:"center",minY:5.4}},cap3:{pose:{tx:0,shift:0,az:-.08,pol:1.24,zoom:.94,dy:.55,open:.3},zone:{y:.11,align:"center",minY:4.6}},show:{pose:{tx:0,shift:0,az:-.5,pol:1.27,zoom:1,dy:0,open:0}}}},vt=[[0,"hero"],[.07,"hero"],[.17,"cap1"],[.3,"cap1"],[.4,"cap2"],[.53,"cap2"],[.63,"cap3"],[.74,"cap3"],[.82,"show"]],In={hero:[-1,-.5,.055,.1],cap1:[.14,.19,.3,.34],cap2:[.37,.42,.53,.57],cap3:[.6,.65,.74,.78]},bn=(_,y)=>{let R=In[_];return R?Math.min(ei((y-R[0])/(R[1]-R[0])),ei((R[3]-y)/(R[3]-R[2]))):0},qn=["tx","shift","az","pol","zoom","dy"];function Ki(_){let y=K.phone?Yt.phone:Yt.desk,R=0;for(;R<vt.length-2&&_>vt[R+1][0];)R++;let[L,D]=vt[R],[k,V]=vt[R+1],j=Ti(L,k,_),he=y[D].pose,ve=y[V].pose,be={};for(let qe in he)be[qe]=cn(he[qe],ve[qe],j);return be}let mi=()=>ii+X.coverTop*.5+(K.phone?.1:.75),ri=(_,y)=>({az:_.az,pol:ei(_.pol+y*.08,.7,1.52),d:K.dist*_.zoom*(1+y*(K.phone?-.08:-.05)),ty:cn(K.ty,Math.max(K.ty,mi()),y)+_.dy,shift:_.shift,tx:_.tx??0});function Lf(_,y,R,L,D,k,V=0){let j=-k*2*Math.tan(_.fov*Se/360)*_.aspect*_.getFilmWidth();Math.abs(_.filmOffset-j)>1e-5&&(_.filmOffset=j,_.updateProjectionMatrix()),_.position.set(V+Math.sin(y)*Math.sin(R)*L,D+Math.cos(R)*L,Math.cos(y)*Math.sin(R)*L),_.lookAt(V,D,0),_.updateMatrixWorld()}let Nf=(_,y)=>(ma.set(_*2-1,1-y*2),Bi.setFromCamera(ma,$n),Bi.ray.intersectPlane(gs,Pl)?Pl.clone():null);function Df(){mt.dirty=!1;let _=i.clientWidth,y=i.clientHeight;if(!_||!y)return;let R=`${_}x${y}:${K.phone}:${K.dist.toFixed(3)}:${JSON.stringify(mt.sizes)}`;if(R===mt.last)return;mt.last=R;let L=K.phone?Yt.phone:Yt.desk;$n.fov=o.fov,$n.aspect=_/y,$n.near=o.near,$n.far=o.far,$n.filmGauge=o.filmGauge,$n.filmOffset=0,$n.updateProjectionMatrix();for(let D in mt.sizes){let k=L[D],[V,j]=mt.sizes[D];if(!k?.zone||!V||!j)continue;let he=k.zone,ve=ri(k.pose,Ir(k.pose.open));Lf($n,ve.az,ve.pol,ve.d,ve.ty,ve.shift,ve.tx);let be=he.align==="center"?.5-V/_/2:he.x0,qe=Nf(be,he.y),Ht=Nf(be+V/_,he.y);if(!qe||!Ht)continue;let on=(Ht.x-qe.x)/V;qe.y-j*on<he.minY&&(on=Math.max(on*.55,(qe.y-he.minY)/j));let Pn=V*on,Ci=j*on,Ii=he.align==="center"?(qe.x+Ht.x)/2-Pn/2:qe.x,Zi=qe.y,Ji=mt.blocks[D]||(mt.blocks[D]={o:0,oT:0,corners:[],center:new F});Ji.corners=[[Ii,Zi],[Ii+Pn,Zi],[Ii+Pn,Zi-Ci],[Ii,Zi-Ci]].map(([rs,ba])=>new F(rs,ba,zn)),Ji.center.set(Ii+Pn/2,Zi-Ci/2,zn)}}let ga=new Qs("#ffd9a8",0,30,.5,.9,1.4);r.add(ga,ga.target);let _a=new F(-6,5,zn),Uf=new F,Ff=_=>(Ot.copy(_).project(o),[(Ot.x*.5+.5)*i.clientWidth,(.5-Ot.y*.5)*i.clientHeight]),Ll=[new F,new F,new F],jh="",Of="";function qg(_){let y=Ir(K.buildPose),R={},L=!1,D=null,k=0,V="",j=0;for(let he in mt.blocks){let ve=mt.blocks[he];ve.oT===0&&(j=Math.max(j,ve.o))}for(let he in mt.blocks){let ve=mt.blocks[he],be=ve.oT>ve.o&&j>.08?ve.o:ve.oT;ve.o!==ve.oT&&(ve.o=t?ve.oT:Fi(ve.o,be,be<ve.o?10:6,_),Math.abs(ve.o-ve.oT)<.002&&(ve.o=ve.oT),L=!0);let qe=ve.o*(1-y);qe>k&&(k=qe,D=ve);let Ht=qe>.002&&ve.corners.length?ve.corners.map(Ff):null;R[he]={o:qe,quad:Ht},V+=he+qe.toFixed(3)+(Ht?Ht.flat().map(on=>on.toFixed(1)).join(","):"")}if(V!==jh&&(jh=V,e.onWords?.(R)),D&&Uf.copy(D.center),_a.lerp(Uf,t?1:1-Math.exp(-4*_)),ga.target.position.copy(_a),ga.position.set(_a.x+1.6,_a.y+6.2,_a.z+7),ga.intensity=k*(1-y)*cn(70,18,Ti(0,1,K.day)),e.onSpots){let he=fo(),ve=ii+X.h+X.crown*.5;Ll[0].set(-.35,ve+.02,-.4),Ll[1].set(he*.31,ve+.01,An*.2),Ll[2].set(he*.16,ii+X.h*.45,An/2+.05);let be=(mt.blocks.hero?.o??0)*(1-y)*(1-Ti(0,.06,X.open))*(X.swap<1?0:1),qe=Ll.map(Ff),Ht=qe.flat().map(on=>on.toFixed(1)).join(",")+be.toFixed(3);Ht!==Of&&(Of=Ht,e.onSpots(qe,be))}return L}let K={w:(e.width??60)/10,wTarget:(e.width??60)/10,allOpen:!1,az:-.5,pol:1.27,azUser:0,polUser:0,vAz:0,scrollIn:t?1:0,intro:t?1:0,lift:0,dist:20,ty:2.25,visible:!1,last:0,raf:0,touched:!1,time:0,phone:!1,story:null,st:{tx:-2.7,shift:0,az:-.09,pol:1.36,zoom:.93,dy:.45},storyW:1,idle:!1,lastDraw:0,day:e.theme==="morning"?1:0,dayT:e.theme==="morning"?1:0,build:1,buildT:3,buildPose:0,released:!0},fo=()=>K.w-.02,Nl=!n,X={root:new Xt,stack:new Xt,cover:new Xt,open:0,hi:null,dent:0,dentV:0,dentT:0,dentX:0,dentZ:0,feel:"Medium",crown:Ef.Medium.crown,h:.7,hT:.7,top:0,look:null,lookName:null,label:"",groups:{},mix:{},key:null,swap:1,swapTo:null,coverTop:.7,builtW:0};x.add(X.root),X.root.add(X.stack,X.cover),X.root.position.y=ii;let Bf=_=>{let y=new tt(_.geometry,[T.top,T.side,T.under]);return y.castShadow=!0,y.receiveShadow=!0,y.customDepthMaterial=b,X.cover.add(y),y};X.body=new Cl({cs:4,seg:Nl?[40,12,92]:[26,8,56],groups:!0}),X.bodyMesh=Bf(X.body),X.topBox=new Cl({cs:3,seg:Nl?[36,4,84]:[24,3,52],groups:!0}),X.topMesh=Bf(X.topBox);let $h=()=>{let _=new tt(new us(new Kh(1,1,.1),8,.01,3,!0),T.piping);return _.castShadow=!0,X.cover.add(_),_};X.pipeT=$h(),X.pipeB=$h(),X.pipeX=$h();let is=640,xa=260,Dl=document.createElement("canvas");Dl.width=is,Dl.height=xa;let wn=Dl.getContext("2d"),Ul=new vi(Dl);Ul.colorSpace=dn,Ul.anisotropy=sr,X.decal=new tt(new Nt(1,1),new ct({map:Ul,transparent:!0,roughness:.75,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})),X.cover.add(X.decal);function Yg(){let[_,y]=X.look.label;wn.clearRect(0,0,is,xa),wn.fillStyle=_,Gg(wn,6,6,is-12,xa-12,16),wn.fill(),wn.strokeStyle=y,wn.globalAlpha=.5,wn.lineWidth=3,wn.setLineDash([12,8]),Gg(wn,22,22,is-44,xa-44,9),wn.stroke(),wn.setLineDash([]),wn.globalAlpha=1,wn.fillStyle=y,wn.textAlign="center",wn.textBaseline="middle";let R="EASY COMFORT SLEEP SOLUTIONS",L=30,D=7,k=()=>(wn.font=`600 ${L}px "Hanken Grotesk", system-ui, sans-serif`,[...R].reduce((be,qe)=>be+wn.measureText(qe).width+D,-D)),V=k();if(V>is-90){let be=(is-90)/V;L*=be,D*=be,V=k()}let j=is/2-V/2;wn.textAlign="left";for(let be of R)wn.fillText(be,j,80),j+=wn.measureText(be).width+D;wn.textAlign="center";let he=92;wn.font=`400 ${he}px "Young Serif", Georgia, serif`;let ve=wn.measureText(X.label).width;ve>is-96&&(he*=(is-96)/ve,wn.font=`400 ${he}px "Young Serif", Georgia, serif`),wn.fillText(X.label,is/2,166),Ul.needsUpdate=!0}X.pillows=[-1,1].map(_=>{let y=new tt(Vg(2.5,1.66,.62,-.25,_>0?91:37,Nl?44:28),T.pillow);return y.castShadow=!0,y.receiveShadow=!0,y.position.set(_*1.36,0,-An/2+1.06),y.rotation.set(-.07,_*.05,0),X.cover.add(y),y});let zf=()=>Math.min(RS,(X.h-X.top)*.26);function Fl(){let _=fo(),y=X.top,R=X.h,L=R-y,D=zf(),k=Math.min(.045,L*.07);if(X.body.fill(_,L,An,D,{crown:y?0:X.crown,bulge:k},[.92,.62,1]),X.bodyMesh.position.y=L/2,X.topMesh.visible=y>.001,y>.001){let j=Math.min(.09,y*.45);X.topBox.fill(_-.1,y+.03,An-.1,j,{crown:X.crown,bulge:.015},[.92,.62,1]),X.topMesh.position.y=L+y/2-.015,X.pipeX.position.y=R-j*.3}X.pipeT.position.y=L-D*.3,X.pipeB.position.y=D*.3,X.pipeX.visible=!!X.look?.topper,X.look?.topper==="euro"&&(X.pipeX.position.y=L-Math.min(.22,L*.24));let V=Math.min(.27,L*.5);X.decal.scale.set(V*is/xa,V,1),X.decal.position.set(-_*.26,L*.5,An/2+k*Math.cos(0)*.9+.025),X.pillows.forEach(j=>{j.userData.y=R+.26+X.crown*.7,j.position.y=j.userData.y}),Rl.uTopY.value=ii+R,Rl.uRange.value=Math.min(.75,R*.75),a.constant=-(ii+R)}function Qh(){let _=fo(),y=zf(),R=y*.3,L=(D,k,V,j)=>new us(new Kh(D,k,V),Nl?260:140,j,7,!0);if([X.pipeT,X.pipeB].forEach(D=>{D.geometry.dispose(),D.geometry=L(_-R*2,An-R*2,Math.max(.05,y*.8),.034),D.scale.x=1}),X.pipeX.geometry.dispose(),X.look?.topper==="pillow"){let D=Math.min(.09,X.top*.45),k=D*.3;X.pipeX.geometry=L(_-.1-k*2,An-.1-k*2,Math.max(.05,D*.8),.03)}else X.pipeX.geometry=L(_+.05,An+.05,Math.max(.05,y),.03);X.pipeX.scale.x=1,X.builtW=_}let kf=_=>_.userData.slabs.forEach(y=>{y.scale.x=(fo()-.06)/3});function Kg(_,y){let R=_.inches/10,L=Math.min(.035,R*.3),D;if(_.zones){D=new Xt;let k=[.34,.32,.34],V=An-.08,j=-V/2;k.forEach((he,ve)=>{let be=new tt(ti(3,R,V*he-.06,L,{seg:[10,2,6]}).geometry,ve===1?T.zoneFirm:T.zoneSoft);be.castShadow=!0,be.receiveShadow=!0,be.position.z=j+V*he/2,j+=V*he,D.add(be)}),y.add(D)}else D=new tt(ti(3,R,An-.08,L,{seg:[10,2,16],shape:{sag:.008}}).geometry,T[_.mat]??T.foam25),D.castShadow=!0,D.receiveShadow=!0,y.add(D);return D.userData={h:R,hi:0,hiT:0},D}function Gf(_){if(X.groups[_.key])return X.groups[_.key];let y=new Xt;return y.visible=!1,X.stack.add(y),y.userData.slabs=[..._.layers].reverse().map(R=>Kg(R,y)),y.userData.sum=y.userData.slabs.reduce((R,L)=>R+L.userData.h,0),y.userData.openH=0,kf(y),X.groups[_.key]=y,X.mix[_.key]=0,y}let ya={},va=new hs(new Uint8Array([255,255,255,255]),1,1,wi);va.needsUpdate=!0;let po={top:p,side:p,ns:.32,rTop:va,rSide:va},Hf=_=>{let y=El[_]??El.aura;return ya[_]||(ya[_]={top:Pf(h,y.top,y.rep[0]),side:Pf(h/2,y.side??y.top,y.rep[1])}),ya[_]};function eu(_){let y=El[_]??El.aura;X.look=y,Hf(_),T.top.map=ya[_].top,T.side.map=ya[_].side,T.top.normalMap=y.quilt?u:po.top,T.side.normalMap=y.quilt?d:po.side;let R=y.quilt?.62:po.ns;T.top.normalScale.set(R,R),T.side.normalScale.set(R,R),T.top.roughnessMap=y.quilt?va:po.rTop,T.side.roughnessMap=y.quilt?va:po.rSide,T.top.sheen=T.side.sheen=y.dark?.16:.7,T.top.sheenColor.set(y.dark?"#a9b8e6":"#fff6ec"),T.side.sheenColor.copy(T.top.sheenColor),T.top.roughness=T.side.roughness=y.dark?.86:.92,T.piping.color.set(y.piping),T.under.color.set(y.under),X.top=y.topper==="pillow"?.2:0,Yg(),Fl(),Qh()}function tu(){let _=K.w,y=fo();Y.scale.x=ee.scale.x=_+.44,re[0].position.x=-(_/2+.12),re[1].position.x=_/2+.12,ce.forEach(R=>{R.position.x=R.userData.sx*(_/2+.1)}),Fe.forEach(R=>{R.scale.x=_+.1}),$e.scale.x=_+.78,x.contact.scale.x=(_+1.2)*1.55,zt.position.set(-(_/2+1.55),0,-An/2+.55),H.position.set(_/2+1.25,0,-An/2+.35),yn.scale.set(_+7.6,1,An+5.6),E.scale.x=(_+3.2)/9.2,it.position.x=(_-6)/2,Fl(),[X.pipeT,X.pipeB,X.pipeX].forEach(R=>{R.scale.x=y/(X.builtW||y)}),Object.values(X.groups).forEach(kf)}let Zg=()=>X.swap<1?Math.sin(Se*X.swap)*.55:0,Jg=.62,nu=()=>{let _=X.groups[X.key],y=_?_.userData.slabs.length:1,R=Math.min(.28,1.4/Math.max(1,y)),L=.3+y*R+.1,D=L+.66;return{st:R,cover:L,pillows:D,end:D+.15+.62}},_s=null,iu=(_,y)=>_<=0?y:_<.72?y*(1-(_/.72)**2):-.03*Math.sin(Se*(_-.72)/.28);function Ol(){let _=X.open,y=K.build<1&&!!_s,R=K.build*K.buildT;X.stack.visible=_>.002||y,Object.entries(X.groups).forEach(([k,V])=>{let j=X.mix[k];V.visible=X.stack.visible&&j>.002;let he=V.userData.slabs,ve=he.length,be=Math.max(.05,X.h-.07)/V.userData.sum,qe=Math.min(.05,.26/Math.max(1,ve-1)),Ht=.035,on=0;he.forEach((Pn,Ci)=>{let Ii=Pn.userData.h,Zi=(ve-1-Ci)*qe,Ji=Ir(ei((_-Zi)/(1-Zi*.9)));if(Pn.position.y=cn(Ht+Ii*be/2,on+Ii*Af/2,Ji),Pn.scale.y=cn(be,Af,Ji),Ht+=Ii*be,on+=Ii*Af+Xh,y&&k===X.key){let tp=(R-(.3+Ci*_s.st))/Jg;Pn.visible=tp>0,Pn.position.y+=iu(tp,2.6)}else Pn.visible=!0;if(!V.visible)return;let rs=k===X.key?1:-1,ba=Lg(ei(j*1.5-(ve-1-Ci)*.1));Pn.position.x=rs*(1-ba)*8;let ep=Fi(Pn.userData.hi,Pn.userData.hiT,14,.016);Pn.userData.hi=ep,Pn.position.z=ep*.5}),V.userData.openH=on-Xh});let L=Ir(ei(_*1.25)),D=y?(R-_s.cover)/.72:1;X.cover.visible=D>0,X.cover.position.y=cn(0,X.coverTop,L)+Zg()+(D<1?iu(D,3.2):0),X.pillows.forEach((k,V)=>{let j=y?(R-_s.pillows-V*.15)/.6:1;k.visible=j>0,k.position.y=k.userData.y+(j<1?iu(j,1.8):0)}),X.cover.rotation.x=X.swap<1?-Math.sin(Se*X.swap)*.035:0}function Bl(){let _=i.clientWidth||1,y=i.clientHeight||1;s.setSize(_,y,!1),o.aspect=_/y,o.updateProjectionMatrix();let R=Math.tan(o.fov*Se/360),L=_>860,D=L&&_<1240,k=(L?D?23.5:19.5:11.5)/(2*R*o.aspect),V=(L?11.6:7.6)/(2*R);K.dist=Math.max(k,V),K.phone=!L,K.ty=L?2.85:1.75,mt.dirty=!0,Un()}let Vf={desk:{tx:0,shift:0,az:-.6,pol:1.15,zoom:.84,dy:.15},phone:{tx:0,shift:0,az:-.55,pol:1.17,zoom:.82,dy:.35}},Fr={};function su(){let _=t||K.touched?0:Math.sin(K.time*.35)*.07,y=!K.phone&&e.frame||{},R={az:K.az*(1-K.lift*.55),pol:K.pol+K.lift*.15,d:K.dist*(y.zoom??1)*(1+K.lift*(K.phone?-.08:-.05)),ty:cn(K.ty,Math.max(K.ty,mi()),K.lift)+(y.dy??0),shift:0,tx:y.tx??0},L=ri(K.st,K.lift),D=ri(K.phone?Vf.phone:Vf.desk,0),k=K.storyW,V=Ir(K.buildPose);for(let ve of["az","pol","d","ty","shift","tx"])Fr[ve]=cn(cn(R[ve],L[ve],k),D[ve],V);let j=Fr.az+K.azUser+_+(1-K.scrollIn)*.22,he=ei(Fr.pol+K.polUser+(1-K.scrollIn)*.07,.7,1.52);Lf(o,j,he,Fr.d*(1+(1-K.scrollIn)*.1),Fr.ty,Fr.shift,Fr.tx)}let Wf=new $o,Xf=new Me,Ma=new F;function qf(_){let y=i.getBoundingClientRect();return Xf.set((_.clientX-y.left)/y.width*2-1,-((_.clientY-y.top)/y.height)*2+1),Wf.setFromCamera(Xf,o),!Wf.ray.intersectPlane(a,Ma)||Math.abs(Ma.x)>fo()/2||Math.abs(Ma.z)>An/2||X.open>.05||X.swap<1?null:{x:Ma.x,z:Ma.z}}let oi=null,Sa=!1,Yf=_=>ei(_,-1-K.az,(K.day>=.5?.16:.42)-K.az),Kf=()=>{Sa&&(X.dentT=0,Sa=!1)},Zf=_=>{X.dentX=_.x,X.dentZ=_.z};i.addEventListener("pointerdown",_=>{if(K.story!=null||K.buildPose>0)return;K.touched=!0,oi={x:_.clientX,y:_.clientY,moved:!1,type:_.pointerType};let y=qf(_);y&&(Sa=!0,Zf(y),X.dentT=1,X.dentV-=.4,Un()),i.setPointerCapture(_.pointerId)}),i.addEventListener("pointermove",_=>{if(oi){let R=_.clientX-oi.x,L=_.clientY-oi.y;!oi.moved&&Math.hypot(R,L)>6&&(oi.moved=!0,Kf(),i.classList.add("is-dragging")),oi.moved&&(K.vAz=-R*.0045*60,K.azUser=Yf(K.azUser-R*.0045),oi.type==="mouse"&&(K.polUser=ei(K.polUser-L*.004,-.5,.3)),oi.x=_.clientX,oi.y=_.clientY,Un());return}if(_.pointerType!=="mouse"||K.story!=null||K.buildPose>0)return;let y=qf(_);y?(Zf(y),X.dentT!==1&&(X.dentT=.4),Un()):X.dentT===.4&&(X.dentT=0,Un())});let Jf=()=>{oi&&(oi.type!=="mouse"&&!oi.moved&&Sa?(setTimeout(()=>{X.dentT=0,Un()},240),Sa=!1):Kf(),oi=null,i.classList.remove("is-dragging"),Un())};i.addEventListener("pointerup",Jf),i.addEventListener("pointercancel",Jf),i.addEventListener("pointerleave",()=>{X.dentT===.4&&(X.dentT=0),Un()});function Un(){K.idle=!1,!K.raf&&K.visible&&(K.last=performance.now(),K.raf=requestAnimationFrame(ou))}let jf=!t,ru=!1;function ou(){K.raf=0;let _=performance.now();if(K.idle&&_-K.lastDraw<30){K.raf=requestAnimationFrame(ou);return}let y=ei((_-K.last)/1e3,0,.05);K.last=_,K.time+=y;let R=!t&&!K.touched;jf&&bt(K.time),K.intro<1&&K.released&&(K.intro=Math.min(1,K.intro+y/2.6),K.scrollIn=Lg(K.intro),R=!0),K.w!==K.wTarget?(K.w=Math.abs(K.w-K.wTarget)<.003?K.wTarget:Fi(K.w,K.wTarget,7,y),tu(),R=!0,ru=!0):ru&&(ru=!1,Qh(),tu()),X.swap<1&&(X.swap=Math.min(1,X.swap+y/(t?.001:.62)),X.swap>=.5&&X.swapTo&&(eu(X.swapTo),X.swapTo=null),R=!0),X.h!==X.hT&&(X.h=Math.abs(X.h-X.hT)<.002?X.hT:Fi(X.h,X.hT,6,y),Fl(),R=!0,X.h===X.hT&&Qh()),K.day!==K.dayT&&(K.day=t?K.dayT:K.dayT>K.day?Math.min(K.dayT,K.day+y/1.5):Math.max(K.dayT,K.day-y/1.5),R=!0,Jt()),K.build<1&&(K.build=Math.min(1,K.build+y/K.buildT),R=!0,e.onBuild?.(K.build),K.build>=1&&e.onBuilt?.()),K.released&&K.buildPose>0&&(K.buildPose=Math.max(0,K.buildPose-y/2),R=!0,Jt(),K.buildPose===0&&e.onSettled?.());let L=K.story!=null?Ki(K.story):null;if(L){for(let be of qn)Math.abs(K.st[be]-L[be])>1e-4?(K.st[be]=t?L[be]:Fi(K.st[be],L[be],6,y),R=!0):K.st[be]=L[be];Math.abs(K.azUser)+Math.abs(K.polUser)>1e-4&&(K.azUser=Fi(K.azUser,0,4,y),K.polUser=Fi(K.polUser,0,4,y),R=!0)}let D=L?1:0;K.storyW!==D&&(K.storyW=t||Math.abs(K.storyW-D)<.002?D:Fi(K.storyW,D,5,y),R=!0);for(let be in mt.blocks)mt.blocks[be].oT=L?bn(be,K.story):0;if(mt.dirty&&Df(),L&&L.open!=null)Math.abs(X.open-L.open)>8e-4?(X.open=t?L.open:Fi(X.open,L.open,7,y),R=!0):X.open=L.open;else{let be=K.allOpen||X.hi!==null?1:0;if(X.open!==be){let qe=y/(t?.001:1.15);X.open=be>X.open?Math.min(1,X.open+qe):Math.max(0,X.open-qe*1.2),R=!0}}Object.keys(X.mix).forEach(be=>{let qe=be===X.key?1:0;X.mix[be]!==qe&&(R=!0,X.open<.02||t?X.mix[be]=qe:X.open>.7&&(X.mix[be]=qe?Math.min(1,X.mix[be]+y/.75):Math.max(0,X.mix[be]-y/.5)))});let k=Ef[X.feel];Math.abs(X.crown-k.crown)>6e-4&&(X.crown=Fi(X.crown,k.crown,5,y),Fl(),R=!0);for(let be=0;be<3;be++){let qe=y/3,Ht=(X.dentT*k.depth-X.dent)*k.k-X.dentV*k.c;X.dentV+=Ht*qe,X.dent+=X.dentV*qe}(Math.abs(X.dent-X.dentT*k.depth)>8e-4||Math.abs(X.dentV)>.002)&&(R=!0),Rl.uDentA.value.set(X.dentX,X.dentZ,Math.max(0,X.dent),k.radius),Object.values(X.groups).forEach(be=>be.userData.slabs.forEach(qe=>{Math.abs(qe.userData.hi-qe.userData.hiT)>.004&&(R=!0)})),Ol();let V=X.groups[X.key],j=(V?V.userData.openH:X.h)+Xh*1.4;Math.abs(X.coverTop-j)>.002&&(X.coverTop=Fi(X.coverTop,j,6,y),R=!0,Ol());let he=K.lift,ve=Ir(X.open);K.lift=Fi(K.lift,ve,5,y),Math.abs(K.lift-ve)<5e-4&&(K.lift=ve),K.lift!==he&&(R=!0,e.onLift?.(K.lift)),!oi&&Math.abs(K.vAz)>.002?(K.azUser=Yf(K.azUser+K.vAz*y),K.vAz*=Math.exp(-3.5*y),R=!0):oi||(K.vAz=0),su(),Dt.visible=o.position.y<Qt-.25,qg(y)&&(R=!0),s.render(r,o),K.lastDraw=_,K.idle=!R,(R||jf)&&K.visible&&(K.raf=requestAnimationFrame(ou))}let au=[];{let _=Hg(n),y=(D,k)=>au.push(D.then(V=>{V&&(k(V),Un())}).catch(()=>{})),R=3.937,L=Se/180;_&&(y(_.oak,D=>{let k=1.83*R;Zn(T.oak,D,.1,1.14,Se/2,{color:"#ffffff",rough:.82,ns:.9});let V=T.oak.clone();Zn(V,D,.09,.13,0,{ns:.9}),ce.forEach(he=>{he.material=V}),Zn(T.plank,D,.14,.95,Se/2,{color:"#ffffff",rough:.8,ns:.9});let j=T.oak.clone();Zn(j,D,1/k,1/k,0,{ns:.9}),Ls.forEach(he=>{he.material=j}),co&&Zn(co.material,D,.03,Qt/k,0,{color:"#7a5639",rough:.75})}),y(_.floor,D=>{let k=1.7*R;Zn(ge.material,D,Ae/k,fe/k,0,{color:"#ffffff",rough:.8,ns:.8})}),y(_.plaster,D=>{let k=2*R;Zn(le,D,(oe+50)/k,40/k,0,{keepMap:!0,ns:.55}),Zn(Q,D,nn.A*2/k,Ei/k,0,{keepMap:!0,ns:.55}),Zn(sn,D,(ft+55)/k,Qt/k,0,{keepMap:!0,ns:.7})}),y(_.rug,D=>{let k=.27*R;Zn(yn.material,D,13.6/k,13.4/k,0,{keepMap:!0,ns:1.2})}),y(_.jacquard,D=>{let k=.28*R;Object.assign(po,{top:oo(D.normalMap,.92/k,.92/k),side:oo(D.normalMap,.62/k,.62/k),ns:.55,rTop:oo(D.roughnessMap,.92/k,.92/k),rSide:oo(D.roughnessMap,.62/k,.62/k)}),X.lookName&&eu(X.lookName)}),y(_.linen,D=>{let k=.27*R;Zn(T.pillow,D,1/k,1/k,0,{keepMap:!0,ns:.9})}),y(_.env,D=>{let k=new Rr(s);c=k.fromEquirectangular(D).texture,k.dispose(),D.dispose(),Gt=null,Jt()}),y(_.viewM,D=>{Xi.forEach(V=>{V.visible=!1});let k=Pg(D,130,Math.atan2(Zt.x,-Zt.z),Se,-48*L,-25.2*L,50.4*L,.8,1.5);k.position.set(ke.x,0,ke.z),it.add(k)}),y(_.viewN,D=>{uo.forEach(V=>{V.visible=!1}),uo.stars.visible=!1;let k=Pg(D,140,.12,Se,-50*L,-21.6*L,54*L,.55,-10,"#a39bb8");k.position.set(0,0,14),ot.add(k)}),y(_.plantTable,D=>{en.visible=pi.visible=!1,Ue.push({o:Yh(D,jt,-.36,2.09,.3,1.5,.5),axis:"z",amp:.008,speed:.7,ph:0})}),y(_.plantFloor,D=>{xe.visible=ae.visible=!1,Ue.push({o:Yh(D,ut,.95,Rn,-.9,4.3,.4),axis:"z",amp:.01,speed:.5,ph:1.3})}),y(_.succulent,D=>{Yh(D,xt,.5,1.91,.36,.78,.3)}))}try{await Promise.all([document.fonts.load('200px "Young Serif"'),document.fonts.load('600 30px "Hanken Grotesk"'),document.fonts.load('400 30px "Hanken Grotesk"')])}catch{}let ss=e.model;Gf(ss),X.key=ss.key,X.mix[ss.key]=1,X.feel=ss.feel,X.crown=Ef[ss.feel].crown,X.h=X.hT=ss.inches/10,X.label=ss.label,X.lookName=ss.look,eu(ss.look),tu(),Ol(),X.coverTop=X.groups[ss.key].userData.openH+Xh*1.4,e.build&&!t?(_s=nu(),K.build=0,K.buildT=_s.end,K.buildPose=1,K.released=!1,K.intro=1,K.scrollIn=1):e.intro&&!t?(K.intro=0,K.scrollIn=0,K.released=!1):(K.intro=1,K.scrollIn=1),e.story!=null?K.story=e.story:K.storyW=0,Bl(),Ol(),Jt();let $f=window.requestIdleCallback||(_=>setTimeout(_,120)),jg=Object.keys(El).filter(_=>_!==ss.look),Qf=()=>{let _=jg.shift();if(!_)return;let y=Hf(_);s.initTexture(y.top),s.initTexture(y.side),$f(Qf)};setTimeout(()=>$f(Qf),1500),addEventListener("resize",Bl),window.ResizeObserver&&new ResizeObserver(Bl).observe(i),new IntersectionObserver(([_])=>{K.visible=_.isIntersecting,K.visible&&Un()}).observe(i),K.visible=!0,su(),au.length&&await Promise.race([Promise.all(au),new Promise(_=>setTimeout(_,n?2500:4e3))]);{let _=[Ze,ot,jt,ut,xt,yn].filter(y=>!y.visible);_.forEach(y=>{y.visible=!0});try{s.compileAsync?await s.compileAsync(r,o):s.compile(r,o)}catch{}s.render(r,o),_.forEach(y=>{y.visible=!1})}return s.render(r,o),K.visible=i.getBoundingClientRect().top<innerHeight,e.onReady?.(),Un(),{setModel(_){Gf(_);let y=_.look!==X.lookName||_.label!==X.label;X.key=_.key,X.feel=_.feel,X.hT=_.inches/10,y&&(X.lookName=_.look,X.label=_.label,X.swapTo=_.look,X.swap=0),Object.values(X.groups).forEach(R=>R.userData.slabs.forEach(L=>{L.userData.hiT=0})),X.hi=null,K.build<1&&(_s=nu(),K.buildT=_s.end),Un()},setOpen(_){K.allOpen=_,Un()},release(){K.released||(K.released=!0,K.build=1,Un())},replay(){if(K.allOpen=!1,X.hi=null,t){Un();return}X.open=0,K.lift=0,K.azUser=0,K.polUser=0,K.vAz=0,_s=nu(),K.build=0,K.buildT=_s.end,K.buildPose=1,K.released=!1,Jt(),Un()},setStory(_,y){if(K.story=_,_!=null&&y){let R=Ki(_);for(let L of qn)K.st[L]=R[L];X.open=R.open,K.storyW=1}Un()},setBlockSizes(_){mt.sizes=_,mt.last="",Df();for(let y in mt.blocks)mt.blocks[y].o=mt.blocks[y].oT=K.story!=null?bn(y,K.story):0;jh="",Un()},setPalette({n:_,m:y}={}){let R=new Ve("#ffffff");_&&(sn.color.set(_),Bn.color.set(_).multiplyScalar(.72)),y&&(le.color.set(y),Q.color.set(y).lerp(R,.38),Je.color.set(y).lerp(R,.18)),Un()},setTheme(_,y){K.dayT=_==="morning"?1:0,(y||t)&&(K.day=K.dayT,Jt()),Un()},highlight(_){X.hi=_;let y=X.groups[X.key];y&&[...y.userData.slabs].reverse().forEach((R,L)=>{R.userData.hiT=L===_?1:0}),Un()},setWidth(_){K.wTarget=_/10,Un()},resize:Bl,debug:{S:K,mat:X,renderer:s,words:mt,render:()=>{su(),s.render(r,o)}}}}async function zS(i,e){let t=Math.min(innerWidth,innerHeight)<600,n;try{n=new wl({canvas:i,antialias:!0,alpha:!0,powerPreference:"default"})}catch(B){return e.onFail?.(B),null}n.setPixelRatio(Math.min(devicePixelRatio||1,t?1.75:1.5)),n.toneMapping=ta,n.shadowMap.enabled=!0,n.shadowMap.type=Ar,sr=Math.min(12,n.capabilities.getMaxAnisotropy());let{sideQ:s,pore:r,weave:o,egg:a,chips:l,oakRail:c,oakPlank:h}=await Wg(t),u=new _r,d=new kn(28,1.8,1,160);{let B=new _r,J=new Rr(n);B.background=new Ve("#20294a");let ae=(xe,pe,Ye,pt,Pt,Lt,bt)=>{let rn=new tt(new Nt(Ye,pt),new _n({color:new Ve(xe).multiplyScalar(pe),side:tn}));rn.position.set(Pt,Lt,bt),rn.lookAt(0,0,0),B.add(rn)};ae("#ffe2c0",4,14,10,-10,9,8),ae("#b9cbff",3,10,14,12,7,-6),ae("#ffffff",1.4,30,10,0,16,0),u.environment=J.fromScene(B,.05).texture,J.dispose()}let f=7.8,p=5,M=1.15,m=1.35,g=72,v=8,A=-f/2,S=Array.from({length:g+1},(B,J)=>A+f*J/g),C=Array.from({length:v+1},(B,J)=>-p/2+p*J/v),T=(B,J,ae)=>Math.exp(-((B-J)**2)/(2*ae*ae)),x=B=>70+(B-A)/f*860,b=B=>{let J=x(B);return .26*T(J,178,66)+.74*T(J,330,52)+T(J,548,56)+.42*T(J,652,58)+.22*T(J,770,48)+.3*T(J,862,22)},z=B=>.6+.4*Math.exp(-((B/1.15)**2)),N={cover:1.15,memory:1,foam22:.86,pu:.8,profile:.78,foam25:.66,foam30:.5,hd:.36,rebond:.14},O=(B,J)=>{if(B!=="zones")return N[B]??.6;let ae=(J-A)/f;return ae<1/3?.72:ae<2/3?.3:.66},W={Soft:.27,Medium:.2,Hard:.14},Z={su:.7*(3.6/3.9)*1290/3072,sv:.7,n:[.56,.07],m:[.5,.12]},P=(B,J,ae)=>{let xe=document.createElement("canvas");xe.width=B,xe.height=J,ae(xe.getContext("2d"),B,J);let pe=new vi(xe);return pe.colorSpace=dn,pe.anisotropy=sr,pe},q=new vi(Xg());q.colorSpace=dn;let Y=(B,J={})=>new ct({color:B,roughness:.95,normalMap:r,normalScale:new Me(.7,.7),vertexColors:!0,...J}),ee=o.clone();ee.repeat.set(10,7),ee.needsUpdate=!0;let re={cover:new pn({color:"#f5f3ee",roughness:.9,sheen:.8,sheenRoughness:.6,sheenColor:new Ve("#ffffff"),normalMap:s,normalScale:new Me(.5,.5),vertexColors:!0}),foam22:Y("#f4f2ea"),foam25:Y("#efe7d3"),foam30:Y("#e4d8bb"),hd:Y("#e3eaf1"),memory:Y("#e8bf78"),pu:Y("#e2efe4"),profile:Y("#f3f1e9",{normalMap:a,normalScale:new Me(1.2,1.2)}),rebond:Y("#ffffff",{map:l}),zoneSoft:Y("#f4f1e7"),zoneFirm:Y("#cfb98a"),oak:new ct({map:c,roughness:.5,color:new Ve(1.45,1.38,1.3)}),plank:new ct({map:h,roughness:.5,color:new Ve(1.1,1.04,.98)}),pillow:new pn({color:"#ebe8e1",roughness:1,sheen:.35,sheenRoughness:.8,sheenColor:new Ve("#ffffff"),normalMap:r,normalScale:new Me(.2,.2)}),sheet:new pn({color:"#ebe7de",roughness:.92,sheen:.7,sheenRoughness:.6,sheenColor:new Ve("#ffffff"),normalMap:ee,normalScale:new Me(.18,.18),side:tn}),duvet:new pn({color:"#2d3558",roughness:.96,sheen:.55,sheenRoughness:.55,sheenColor:new Ve("#8592c8"),normalMap:ee,normalScale:new Me(.28,.28),side:tn}),skin:new ct({color:"#c79a7d",roughness:.62}),skinDark:new ct({color:"#a97c62",roughness:.7}),hair:new pn({color:"#33231a",roughness:.72,sheen:.45,sheenRoughness:.45,sheenColor:new Ve("#8a6a52"),normalMap:(()=>{let J=Pr(256,180,4,3),ae=Pr(256,70,3,9),xe=new Float32Array(256*256);for(let pe=0;pe<xe.length;pe++)xe[pe]=J[pe]*.65+ae[pe]*.35;return Jh(Zh(xe,256,7),256,!1)})(),normalScale:new Me(.35,.35)}),dark:new ct({color:"#241d1a",roughness:.45}),brass:new ct({color:"#b8925a",roughness:.3,metalness:.85}),shade:new ct({color:"#f1e2c6",emissive:new Ve("#ffad5c"),emissiveIntensity:1.3,roughness:.9,side:tn}),frame:new ct({color:"#141824",roughness:.38,metalness:.4})},ne=-p/2-1.15,ce=.9,_e=4.5,Fe=2.4,He=6.3,ie=_e-ce,we=He-Fe,Ge=(ce+_e)/2,$e=(Fe+He)/2,me=.42,ze=ne-me,un=(()=>{let B=new Hi;B.moveTo(-17,-8),B.lineTo(17,-8),B.lineTo(17,8),B.lineTo(-17,8),B.lineTo(-17,-8);let J=new Hi;J.moveTo(ce-.5,Fe-5.6),J.lineTo(ce-.5,He-5.6),J.lineTo(_e-.5,He-5.6),J.lineTo(_e-.5,Fe-5.6),J.lineTo(ce-.5,Fe-5.6),B.holes.push(J);let ae=new Yo(B,4),xe=ae.attributes.position,pe=ae.attributes.uv;for(let Ye=0;Ye<xe.count;Ye++)pe.setXY(Ye,(xe.getX(Ye)+17)/34,(xe.getY(Ye)+8)/16);return ae})(),rt=new tt(un,new ct({color:"#1b2343",roughness:.95,alphaMap:Fg(512,.26,.5),transparent:!0}));rt.position.set(.5,5.6,ne),rt.receiveShadow=!0,u.add(rt);let Ct=new ct({color:"#1b2343",roughness:.95,side:tn});[[ie,me,Ge,He,-Se/2,"x"],[ie,me,Ge,Fe,Se/2,"x"],[me,we,ce,$e,Se/2,"y"],[me,we,_e,$e,-Se/2,"y"]].forEach(([B,J,ae,xe,pe,Ye])=>{let pt=new tt(new Nt(B,J),Ct);pt.position.set(ae,xe,ne-me/2),pt.rotation[Ye]=pe,pt.receiveShadow=!0,u.add(pt)});let gt=h.clone();gt.wrapS=gt.wrapT=Xn,gt.repeat.set(4.5,34),gt.needsUpdate=!0;let ye=new tt(new Nt(34,24),new ct({map:gt,color:"#4c3c34",roughness:.42,alphaMap:Fg(512,.2,.5),transparent:!0}));ye.rotation.x=-Se/2,ye.position.set(.5,0,2.5),ye.receiveShadow=!0,u.add(ye);let de=P(256,280,(B,J,ae)=>{let xe=mn(8),pe=B.createLinearGradient(0,0,0,ae);pe.addColorStop(0,"#060a1d"),pe.addColorStop(.55,"#15214b"),pe.addColorStop(1,"#2d4174"),B.fillStyle=pe,B.fillRect(0,0,J,ae);for(let bt=0;bt<90;bt++)B.fillStyle=`rgba(235,240,255,${(.15+xe()*.5).toFixed(2)})`,B.fillRect(xe()*J,xe()*ae*.7,1.2,1.2);let Ye=J*.64,pt=ae*.24,Pt=J*.08,Lt=B.createRadialGradient(Ye,pt,Pt,Ye,pt,Pt*6);Lt.addColorStop(0,"rgba(190,208,255,.38)"),Lt.addColorStop(1,"rgba(190,208,255,0)"),B.fillStyle=Lt,B.fillRect(0,0,J,ae),B.fillStyle="#fbf8ea",B.beginPath(),B.arc(Ye,pt,Pt,0,Se*2),B.fill(),B.fillStyle="rgba(15,22,52,.9)",B.beginPath(),B.moveTo(0,ae);for(let bt=0;bt<=J;bt+=4)B.lineTo(bt,ae*(.86+.03*Math.sin(bt*.05)+.015*Math.sin(bt*.17)));B.lineTo(J,ae),B.fill()}),De=P(256,280,(B,J,ae)=>{let xe=B.createLinearGradient(0,0,0,ae);xe.addColorStop(0,"#7db1e2"),xe.addColorStop(.5,"#c9def0"),xe.addColorStop(.85,"#ffd9ab"),xe.addColorStop(1,"#ffc88f"),B.fillStyle=xe,B.fillRect(0,0,J,ae);let pe=J*.3,Ye=ae*.74,pt=J*.07,Pt=B.createRadialGradient(pe,Ye,pt*.5,pe,Ye,pt*8);Pt.addColorStop(0,"rgba(255,242,218,.95)"),Pt.addColorStop(.25,"rgba(255,214,160,.4)"),Pt.addColorStop(1,"rgba(255,214,160,0)"),B.fillStyle=Pt,B.fillRect(0,0,J,ae),B.fillStyle="#fffbf2",B.beginPath(),B.arc(pe,Ye,pt,0,Se*2),B.fill(),B.fillStyle="rgba(122,150,128,.85)",B.beginPath(),B.moveTo(0,ae);for(let Lt=0;Lt<=J;Lt+=4)B.lineTo(Lt,ae*(.86+.03*Math.sin(Lt*.05)+.015*Math.sin(Lt*.17)));B.lineTo(J,ae),B.fill()}),We=new tt(new Nt(ie,we),new _n({map:de,toneMapped:!1})),Pe=new tt(new Nt(ie,we),new _n({map:De,toneMapped:!1,transparent:!0,opacity:0,depthWrite:!1}));We.position.set(Ge,$e,ze+.01),Pe.position.set(Ge,$e,ze+.015),Pe.renderOrder=1,u.add(We,Pe);let _t=new tt(new Wo(.15,32),new _n({color:"#f4f1e4",toneMapped:!1,transparent:!0}));_t.position.set(ce+ie*.7,He-we*.2,ze+.02),_t.visible=!1,_t.renderOrder=2,u.add(_t);let Ze=new vr(new qs({map:q,color:"#b8c6ff",transparent:!0,opacity:.4,blending:Di,depthWrite:!1,toneMapped:!1}));Ze.scale.set(1.5,1.5,1),Ze.position.copy(_t.position),Ze.visible=!1,Ze.renderOrder=2,u.add(Ze);let ot=P(256,280,(B,J,ae)=>{let xe=mn(31);for(let pe=0;pe<70;pe++){B.fillStyle=`rgba(235,240,255,${(.2+xe()*.6).toFixed(2)})`;let Ye=xe()<.1?1.8:1.1;B.fillRect(xe()*J,xe()*ae*.5,Ye,Ye)}}),it=new tt(new Nt(ie,we),new _n({map:ot,transparent:!0,blending:Di,depthWrite:!1,toneMapped:!1}));it.position.set(Ge,$e,ze+.018),it.visible=!1,it.renderOrder=2,u.add(it);let zt=P(128,128,(B,J,ae)=>{let xe=B.createLinearGradient(0,ae,J,0);xe.addColorStop(0,"rgba(255,255,255,0)"),xe.addColorStop(.42,"rgba(255,255,255,0)"),xe.addColorStop(.5,"rgba(255,255,255,.55)"),xe.addColorStop(.56,"rgba(255,255,255,.1)"),xe.addColorStop(.64,"rgba(255,255,255,.3)"),xe.addColorStop(.7,"rgba(255,255,255,0)"),B.fillStyle=xe,B.fillRect(0,0,J,ae)}),H=new tt(new Nt(ie,we),new _n({map:zt,color:"#c9d4ff",transparent:!0,opacity:.07,blending:Di,depthWrite:!1,toneMapped:!1}));H.position.set(Ge,$e,ze+.1),H.renderOrder=3,u.add(H);let jt=new tt(ti(ie+.5,.1,me+.24,.02,{seg:[1,1,1]}).geometry,re.plank);jt.position.set(Ge,Fe-.05,ne-me/2+.12),jt.castShadow=jt.receiveShadow=!0,u.add(jt);let ut=(B,J,ae,xe,pe=.12)=>{let Ye=new tt(new hi(B,J,pe),re.frame);Ye.position.set(ae,xe,ze+pe/2+.02),Ye.castShadow=!0,Ye.receiveShadow=!0,u.add(Ye)},xt=.13;ut(ie+xt*2,xt,Ge,He+xt/2),ut(ie+xt*2,xt,Ge,Fe-xt/2),ut(xt,we,ce-xt/2,$e),ut(xt,we,_e+xt/2,$e),ut(.06,we,Ge,$e,.08),ut(ie,.05,Ge,Fe+we*.55,.08);let Ue=new ct({color:"#d4d8e8",roughness:.92,transparent:!0,opacity:.55,side:tn,depthWrite:!1,emissive:new Ve("#3d4a7a"),emissiveIntensity:.4});{let B=new Nt(1.5,we+1.6,26,6),J=B.attributes.position;for(let xe=0;xe<J.count;xe++)J.setZ(xe,Math.sin((J.getX(xe)/1.5+.5)*Se*6)*.08);B.computeVertexNormals();let ae=new tt(B,Ue);ae.position.set(_e+.55,$e+.3,ne+.3),ae.renderOrder=3,u.add(ae)}let gn=P(64,256,(B,J,ae)=>{let xe=B.createLinearGradient(0,0,0,ae);xe.addColorStop(0,"rgba(255,255,255,1)"),xe.addColorStop(.6,"rgba(255,255,255,.35)"),xe.addColorStop(1,"rgba(255,255,255,0)"),B.fillStyle=xe,B.fillRect(0,0,J,ae),B.globalCompositeOperation="destination-in";let pe=B.createLinearGradient(0,0,J,0);pe.addColorStop(0,"rgba(0,0,0,0)"),pe.addColorStop(.25,"#000"),pe.addColorStop(.75,"#000"),pe.addColorStop(1,"rgba(0,0,0,0)"),B.fillStyle=pe,B.fillRect(0,0,J,ae)}),at=new ln,dt=[[ce,He-.1,ne+.04],[_e,He-.1,ne+.04],[ce-1.6,1.4,2.4],[_e-1.6,1.4,2.4]];at.setAttribute("position",new Ut(new Float32Array(dt.flat()),3)),at.setAttribute("uv",new Ut(new Float32Array([0,1,1,1,0,0,1,0]),2)),at.setIndex([0,2,1,1,2,3]);let I=new tt(at,new _n({map:gn,color:"#9fb4ff",transparent:!0,opacity:.16,blending:Di,depthWrite:!1,side:tn,toneMapped:!1}));I.renderOrder=4,I.frustumCulled=!1,u.add(I);let w=t?50:110,te=new Float32Array(w*3),Te=new Float32Array(w),oe=mn(5);for(let B=0;B<w;B++){let J=oe(),ae=oe(),xe=(Pt,Lt,bt)=>Pt.map((rn,Et)=>rn+(Lt[Et]-rn)*bt),pe=xe(dt[0],dt[1],ae),Ye=xe(dt[2],dt[3],ae),pt=xe(pe,Ye,J);te.set([pt[0],pt[1],pt[2]+(oe()-.5)*.8],B*3),Te[B]=oe()*50}let Ie=new ln;Ie.setAttribute("position",new Ut(te,3)),Ie.setAttribute("phase",new Ut(Te,1));let Le=new Vi({uniforms:{uTime:{value:0},uPx:{value:n.getPixelRatio()},uCol:{value:new Ve(.85,.9,1)},uA:{value:.6}},vertexShader:`attribute float phase; uniform float uTime, uPx; varying float vA;
      void main(){ vec3 p = position + vec3(sin(uTime*.21 + phase)*.16, sin(uTime*.13 + phase*1.7)*.22, cos(uTime*.17 + phase*.9)*.16);
        vA = .35 + .65 * (.5 + .5 * sin(uTime * (.9 + fract(phase) * 1.8) + phase * 3.1));
        vec4 mv = modelViewMatrix * vec4(p, 1.); gl_PointSize = uPx * (1.1 + fract(phase * 7.) * 1.6) * (40. / -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 uCol; uniform float uA; varying float vA; void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .04, d) * vA * uA; gl_FragColor = vec4(uCol * a, a); }",transparent:!0,depthWrite:!1,blending:Di}),ue=new br(Ie,Le);ue.renderOrder=5,ue.frustumCulled=!1,u.add(ue);let fe=new Xt;fe.position.set(A-1.3,0,-.6),u.add(fe);let Ae=(B,J,ae,xe,pe)=>{let Ye=new tt(B,J);return Ye.position.set(ae,xe,pe),Ye.castShadow=!0,Ye.receiveShadow=!0,fe.add(Ye),Ye},U=1.86,ge=1.5,le=1.2,Oe=.34;Ae(ti(ge,U-Oe-.06,le,.03,{seg:[2,2,2],tile:[[1.2,.8],[1,.8],[1.2,.8]]}).geometry,re.oak,0,Oe+(U-Oe-.06)/2,0),Ae(ti(ge+.08,.07,le+.08,.025,{seg:[2,1,2]}).geometry,re.plank,0,U-.035,0),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([B,J])=>Ae(new Nn(.05,.032,Oe,10),re.oak,B*(ge/2-.1),Oe/2,J*(le/2-.1)));let Ne=new Nn(.018,.018,.32,10);Ne.rotateZ(Se/2),[U-.42,U-1.03].forEach(B=>{Ae(ti(ge-.12,.52,.04,.012,{seg:[1,1,1]}).geometry,re.plank,0,B,le/2+.02),Ae(Ne,re.brass,0,B+.08,le/2+.07)});let Ce=-.32,Qe=-.2;Ae(new Kr([[0,0],[.16,0],[.17,.02],[.2,.14],[.22,.3],[.19,.44],[.1,.52],[.05,.56],[.05,.66],[0,.66]].map(([B,J])=>new Me(B,J)),32),new pn({color:"#d8cdbd",roughness:.32,clearcoat:.6,clearcoatRoughness:.3}),Ce,U,Qe);let It=Ae(new Nn(.36,.38,.44,40,1,!0),re.shade,Ce,U+.86,Qe);It.castShadow=!1,Ae(new Nn(.012,.012,.3,6),re.brass,Ce,U+.74,Qe).castShadow=!1;let Ee=new vr(new qs({map:q,color:"#ffb468",transparent:!0,opacity:.45,blending:Di,depthWrite:!1,toneMapped:!1}));Ee.scale.set(2.8,2.8,1),Ee.position.set(Ce,U+.86,Qe),fe.add(Ee);let st=new er("#ffb06a",8,9,1.8);st.position.set(Ce,U+.8,Qe),fe.add(st),[["#6b4b3a",.62,.07,.46,.02],["#2f4656",.56,.06,.42,-.12]].forEach(([B,J,ae,xe,pe],Ye)=>{let pt=Ae(ti(J,ae,xe,.008,{seg:[1,1,1]}).geometry,new ct({color:B,roughness:.7}),.3,U+ae/2+Ye*.07,-.28);pt.rotation.y=pe;let Pt=Ae(new hi(J-.03,ae*.7,xe-.02),new ct({color:"#efe8da",roughness:.9}),.3+.012,U+ae/2+Ye*.07,-.28);Pt.rotation.y=pe}),Ae(new Nn(.075,.066,.27,24,1,!0),new pn({color:"#dfe8f2",roughness:.06,transparent:!0,opacity:.28,side:tn}),-.02,U+.135,.4).castShadow=!1,Ae(new Nn(.069,.062,.18,24),new pn({color:"#b9cfe6",roughness:.05,transparent:!0,opacity:.35}),-.02,U+.09,.4).castShadow=!1;let St=document.createElement("canvas");St.width=256,St.height=112;let ke=new vi(St);ke.colorSpace=dn;let Zt="",Sn=B=>{if(B===Zt)return;Zt=B;let J=St.getContext("2d");J.fillStyle="#0c0e15",J.fillRect(0,0,256,112),J.font='700 74px "Hanken Grotesk", system-ui, sans-serif',J.textAlign="center",J.textBaseline="middle",J.shadowColor="#ff6a2a",J.shadowBlur=14,J.fillStyle="#ff8152",J.fillText(B,128,60),ke.needsUpdate=!0};Sn("11:34");let Fn=new Xt;Fn.position.set(.38,U,.3),Fn.rotation.y=.35,fe.add(Fn);let Oi=new tt(ti(.5,.24,.17,.025,{seg:[1,1,1]}).geometry,new ct({color:"#1a1c23",roughness:.4}));Oi.position.y=.12,Oi.castShadow=!0,Fn.add(Oi);let Cs=new tt(new Nt(.42,.18),new _n({map:ke,toneMapped:!1}));Cs.position.set(0,.12,.087),Fn.add(Cs);let rr=new vr(new qs({map:q,color:"#ff7a45",transparent:!0,opacity:.25,blending:Di,depthWrite:!1,toneMapped:!1}));rr.scale.set(.6,.6,1),rr.position.set(0,.12,.12),Fn.add(rr);let Lr=new Xt;u.add(Lr);let or=(B,J,ae,xe,pe,Ye=!0)=>{let pt=new tt(B,J);return pt.position.set(ae,xe,pe),pt.castShadow=Ye,pt.receiveShadow=!0,Lr.add(pt),pt};or(ti(f+.3,.5,p+.26,.03,{seg:[6,1,4],tile:[[2.6,.4],[8,.5],[2.6,.4]]}).geometry,re.oak,0,M-.25,0);let Xi=new Nn(.12,.07,M-.5,6);Xi.rotateY(Se/6),[[-1,1],[1,1],[-1,-1],[1,-1]].forEach(([B,J])=>or(Xi,re.oak,B*(f/2-.1),(M-.5)/2,J*(p/2-.05)));{let B=new Hi,J=(p+.5)/2,ae=3.1,xe=.4,pe=.06;B.moveTo(-J,0),B.lineTo(J,0),B.lineTo(J,ae-xe),B.absellipse(J-pe,ae-xe,pe,xe,0,Se/2,!1,0),B.lineTo(-J+pe,ae),B.absellipse(-J+pe,ae-xe,pe,xe,Se/2,Se,!1,0),B.lineTo(-J,0);let Ye=new wr(B,{depth:.14,bevelEnabled:!0,bevelThickness:.03,bevelSize:.012,bevelSegments:3,curveSegments:20}),pt=or(Ye,re.plank,A-.36,.2,0);pt.rotation.y=Se/2}let qi;{let B=document.createElement("canvas");B.width=B.height=128;let J=B.getContext("2d"),ae=J.createRadialGradient(64,64,6,64,64,62);ae.addColorStop(0,"rgba(0,0,0,.75)"),ae.addColorStop(1,"rgba(0,0,0,0)"),J.fillStyle=ae,J.fillRect(0,0,128,128),qi=new tt(new Nt(1,1),new _n({map:new vi(B),transparent:!0,depthWrite:!1})),qi.rotation.x=-Se/2,qi.position.set(0,.012,0),qi.scale.set(f+3,p+2.2,1),u.add(qi)}let ts=new ct({color:"#2f3040",roughness:1,normalMap:r,normalScale:new Me(.6,.6)}),ar=new tt(ti(f+2.6,.05,p+2.8,.025,{seg:[1,1,1]}).geometry,ts);ar.position.set(.3,.025,.5),ar.receiveShadow=!0,u.add(ar);{let B=P(256,340,(bt,rn,Et)=>{let wt=mn(17),Gt=bt.createLinearGradient(0,0,0,Et);Gt.addColorStop(0,"#efe9df"),Gt.addColorStop(1,"#e4dccf"),bt.fillStyle=Gt,bt.fillRect(0,0,rn,Et),bt.fillStyle="rgba(214,170,120,.6)",bt.beginPath(),bt.arc(rn*.64,Et*.3,rn*.1,0,Se*2),bt.fill(),[["#cfc3b0",.52],["#a9aeb4",.62],["#7e8b99",.72],["#56657a",.84]].forEach(([Jt,zn],gs)=>{let $n=wt()*6;bt.fillStyle=Jt,bt.beginPath(),bt.moveTo(0,Et);for(let Bi=0;Bi<=rn;Bi+=4)bt.lineTo(Bi,Et*zn-Et*(.07-gs*.01)*(.6+.4*Math.sin(Bi*.018+$n))*Math.sin(Bi/rn*Se*(1+gs*.3)+gs));bt.lineTo(rn,Et),bt.fill()})}),J=new Xt;J.position.set(A+.2,4.7,ne+.02),u.add(J);let ae=1.25,xe=1.65,pe=.07,Ye=.07,pt=new ct({color:"#3a2a20",roughness:.5});[[ae,pe,0,xe/2-pe/2],[ae,pe,0,-xe/2+pe/2],[pe,xe-2*pe,-ae/2+pe/2,0],[pe,xe-2*pe,ae/2-pe/2,0]].forEach(([bt,rn,Et,wt])=>{let Gt=new tt(new hi(bt,rn,Ye),pt);Gt.position.set(Et,wt,Ye/2),Gt.castShadow=!0,J.add(Gt)});let Pt=new tt(new Nt(ae-2*pe,xe-2*pe),new ct({color:"#f6f2ea",roughness:.9}));Pt.position.z=.012,J.add(Pt);let Lt=new tt(new Nt((ae-2*pe)*.72,(xe-2*pe)*.76),new ct({map:B,roughness:.8}));Lt.position.set(0,.02,.016),J.add(Lt)}class Is{constructor(J,ae,xe){this.ia=J,this.ib=ae;let pe=ae-J+1,Ye=pe*(v+1)+pe*2+(v+1)*4;this.pos=new Float32Array(Ye*3),this.col=new Float32Array(Ye*3).fill(1);let pt=new Float32Array(Ye*2),Pt=[],Lt=this.geo=new ln;for(let wt=0;wt<pe-1;wt++)for(let Gt=0;Gt<v;Gt++){let Jt=wt*(v+1)+Gt,zn=Jt+v+1;Pt.push(Jt,Jt+1,zn,zn,Jt+1,zn+1)}let bt=pe*(v+1);for(let wt=0;wt<pe-1;wt++){let Gt=bt+wt*2,Jt=Gt+2;Pt.push(Gt,Gt+1,Jt,Jt,Gt+1,Jt+1)}let rn=bt+pe*2,Et=rn+(v+1)*2;for(let wt=0;wt<v;wt++){let Gt=rn+wt*2,Jt=Gt+2;Pt.push(Gt,Jt,Gt+1,Gt+1,Jt,Jt+1)}for(let wt=0;wt<v;wt++){let Gt=Et+wt*2,Jt=Gt+2;Pt.push(Gt,Gt+1,Jt,Jt,Gt+1,Jt+1)}this.fr=bt,Lt.setIndex(Pt),Lt.setAttribute("position",new Ut(this.pos,3)),Lt.setAttribute("color",new Ut(this.col,3)),Lt.setAttribute("uv",new Ut(pt,2)),this.uv=pt,this.mesh=new tt(Lt,xe),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1}fill(J,ae,xe){let{pos:pe,uv:Ye,col:pt,ia:Pt,ib:Lt}=this,bt=0,rn=(Et,wt,Gt,Jt,zn)=>{pe[bt*3]=Et,pe[bt*3+1]=wt,pe[bt*3+2]=Gt,Ye[bt*2]=Jt,Ye[bt*2+1]=zn,bt++};for(let Et=Pt;Et<=Lt;Et++)for(let wt=0;wt<=v;wt++)rn(S[Et],J(Et,wt),C[wt],S[Et]/1.3,C[wt]/1.3);for(let Et=Pt;Et<=Lt;Et++){let wt=J(Et,v),Gt=ae(Et,v),Jt=xe(Et),zn=(this.fr+(Et-Pt)*2)*3;rn(S[Et],wt,p/2,S[Et]/1.3,wt/1.3),rn(S[Et],Gt,p/2,S[Et]/1.3,Gt/1.3);let gs=1,$n=1-.36*Jt,Bi=1-.62*Jt;pt[zn]=gs,pt[zn+1]=$n,pt[zn+2]=Bi,pt[zn+3]=gs,pt[zn+4]=$n,pt[zn+5]=Bi}for(let Et of[Pt,Lt])for(let wt=0;wt<=v;wt++){let Gt=J(Et,wt),Jt=ae(Et,wt);rn(S[Et],Gt,C[wt],C[wt]/1.3,Gt/1.3),rn(S[Et],Jt,C[wt],C[wt]/1.3,Jt/1.3)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.computeVertexNormals()}}let Yi=new Xt;u.add(Yi);let Vn=[],Ai=[],Ps=.7,lr="Medium",cr=1,On=[],nn=!1,Ei=0,ns=new _n({color:"#0a0d1c",transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1}),E=[];function G(B){E.forEach(J=>{Yi.remove(J),J.geometry.dispose()}),E=Array.from({length:Math.max(0,B-1)},()=>{let J=new Nt(1,1,g,1),ae=new tt(J,ns);return ae.frustumCulled=!1,ae.renderOrder=2,Yi.add(ae),ae})}function se(B){Ai.forEach(xe=>{Yi.remove(xe.mesh),xe.geo.dispose()}),lr=B.feel,Vn=[{mat:"cover",h:(B.inches<=5?.045:.07)*m},...B.layers.map(xe=>({mat:xe.mat,h:xe.inches/10*m}))],Ps=Vn.reduce((xe,pe)=>xe+pe.h,0),nn=Vn.some(xe=>xe.mat==="zones"),Ei=Vn.findIndex(xe=>xe.mat==="rebond"),Ei<0&&(Ei=Vn.length-1);let ae=xe=>Vn.reduce((pe,Ye)=>pe+O(Ye.mat,xe)*Ye.h,0);cr=S.reduce((xe,pe)=>xe+ae(pe),0)/S.length,Ai=[],Vn.forEach((xe,pe)=>{(xe.mat==="zones"?[[0,g/3,re.zoneSoft],[g/3,g*2/3,re.zoneFirm],[g*2/3,g,re.zoneSoft]]:[[0,g,re[xe.mat]??re.foam25]]).forEach(([pt,Pt,Lt])=>{let bt=new Is(pt,Pt,Lt);bt.k=pe,Ai.push(bt),Yi.add(bt.mesh)})}),On=Array.from({length:Vn.length+1},()=>Array.from({length:g+1},()=>new Float32Array(v+1))),G(Vn.length),Nr=null}let $=Vg(1.7,2.3,.52,-.26,91,t?28:40),Q=new tt($,re.pillow);Q.castShadow=!0,Q.receiveShadow=!0,u.add(Q);let Be=new tt($,re.pillow);Be.castShadow=!0,Be.receiveShadow=!0,Be.rotation.y=-.06,u.add(Be);let Je=A+1.12,Re=new Xt;u.add(Re);{let B=new tt(ca(.4),re.hair);B.scale.set(1.1,.8,.96),Re.add(B);let J=new tt(ca(.27),re.hair);J.scale.set(1.15,.72,1),J.position.set(-.24,.05,-.04),Re.add(J);let ae=new tt(ca(.32),re.hair);ae.scale.set(1.25,.42,1.15),ae.position.set(-.26,-.17,.02),Re.add(ae);let xe=new tt(ca(.08),re.skinDark);xe.scale.set(1.25,.45,.95),xe.position.set(.1,.3,.02),xe.rotation.z=-.2,Re.add(xe);let pe=new tt(ca(.21),re.skin);pe.scale.set(1.35,.85,.9),pe.position.set(.36,-.06,-.04),Re.add(pe);let Ye=new tt(ca(.2),re.skin);Ye.scale.set(1.1,.8,.7),Ye.position.set(.22,-.12,-.28),Re.add(Ye),Re.traverse(pt=>{pt.castShadow=!0,pt.receiveShadow=!0})}let Xe=A+1.62,nt=f/2+.14,ht=90,Tt=30,et=-p/2-.55,Ft=p/2+.015,xn=new Nt(1,1,ht,Tt),$t=new tt(xn,re.duvet);$t.castShadow=!0,$t.receiveShadow=!0,$t.frustumCulled=!1,u.add($t);let Kt=5,yn=new Nt(1,1,ht,Kt),je=new tt(yn,re.duvet);je.castShadow=!0,je.receiveShadow=!0,je.frustumCulled=!1,u.add(je);let En=8,kt=new Nt(1,1,En,Tt),pi=new tt(kt,re.sheet);pi.castShadow=!0,pi.receiveShadow=!0,pi.frustumCulled=!1,pi.visible=!1,u.add(pi);let en=[[0,.46,.7],[.32,.9,.82],[.8,.8,.8],[1.3,.64,.72],[1.9,.9,.8],[2.55,.74,.74],[3.25,.62,.7],[4.2,.46,.62],[5,.4,.55],[5.45,.3,.5],[5.9,.12,.45]],Ls=(B,J)=>{if(B<=en[0][0])return en[0][J];for(let ae=1;ae<en.length;ae++)if(B<=en[ae][0]){let xe=(B-en[ae-1][0])/(en[ae][0]-en[ae-1][0]),pe=xe*xe*(3-2*xe);return cn(en[ae-1][J],en[ae][J],pe)}return en[en.length-1][J]},Qt=new Zo("#3b4a86","#0b0f22",.55);u.add(Qt);let Rn=new bs("#a9bcff",.45);Rn.position.set(5,12,6),u.add(Rn);let ft=new Qs("#a9bcff",300,24,.5,.8,1.5);ft.position.set(Ge,$e+.5,ne+.35),ft.target.position.set(-.9,1.9,.2),ft.castShadow=!0,ft.shadow.mapSize.set(t?1024:2048,t?1024:2048),ft.shadow.bias=-5e-4,ft.shadow.normalBias=.02,ft.shadow.radius=5,ft.shadow.camera.near=.5,ft.shadow.camera.far=30,u.add(ft,ft.target);let Cn=new bs("#c9d4ff",.5);Cn.position.set(-3,4,12),u.add(Cn);let sn=(B,J)=>[new Ve(B),new Ve(J)],At={hemiS:sn("#3b4a86","#eef3ff"),hemiG:sn("#0b0f22","#e8d6bf"),moon:sn("#a9bcff","#ffe3bd"),front:sn("#c9d4ff","#fff6ec"),duvet:sn("#2d3558","#eef1f6"),sheen:sn("#8592c8","#ffffff"),skin:sn("#c79a7d","#d8a888"),wall:sn("#1b2343","#ebe5db"),floor:sn("#3a2e29","#c9b195"),frame:sn("#141824","#f2eee8"),curtain:sn("#d4d8e8","#ffffff"),curtainE:sn("#3d4a7a","#fff0da"),beam:sn("#9fb4ff","#ffd59c"),dust:sn("#d9e6ff","#ffe2b0"),sheet:sn("#ebe7de","#f7f4ee"),rug:sn("#2b2c3a","#d8cbb8"),view:sn("#55629c","#fff8ee")},Dt=(B,J,ae)=>B.copy(J[0]).lerp(J[1],ae),Bn=e.theme==="morning"?1:0,Jn=Bn,ao=0,lo=0,ha=1,co=!1;function Ri(){let B=Ti(0,1,Bn),J=1-B;Dt(Qt.color,At.hemiS,B),Dt(Qt.groundColor,At.hemiG,B),Qt.intensity=cn(.55,1.15,B),Dt(Rn.color,At.moon,B),Rn.intensity=cn(.45,1.5,B),Dt(ft.color,At.moon,B),ft.intensity=cn(300,520,B),Dt(Cn.color,At.front,B),Cn.intensity=cn(.5,.75,B),Dt(re.duvet.color,At.duvet,B),Dt(re.duvet.sheenColor,At.sheen,B),Dt(re.sheet.color,At.sheet,B),Dt(re.skin.color,At.skin,B),Dt(rt.material.color,At.wall,B),Dt(ye.material.color,At.floor,B),Dt(re.frame.color,At.frame,B),Ct.color.copy(rt.material.color).multiplyScalar(cn(1.25,.97,B)),Dt(ts.color,At.rug,B),co&&(_t.material.opacity=J,Ze.material.opacity=.4*J,it.material.opacity=J),H.material.opacity=cn(.07,.14,B),Dt(Ue.color,At.curtain,B),Dt(Ue.emissive,At.curtainE,B),Ue.opacity=cn(.55,.75,B),Pe.material.opacity=B,Dt(I.material.color,At.beam,B),I.material.opacity=cn(.16,.22,B),Dt(Le.uniforms.uCol.value,At.dust,B),Le.uniforms.uA.value=cn(.6,.85,B),u.environmentIntensity=cn(.35,.85,B),qi.material.opacity=cn(.85,.5,B);let ae=J*ha;st.intensity=8*ae,re.shade.emissiveIntensity=.05+1.25*ae,Ee.material.opacity=.45*ae,rr.material.opacity=.25*J}let si=0,Ns=0,Ds=0,Us=0,ho=0,Il=0;function ua(){let B=i.clientWidth||1,J=i.clientHeight||1;n.setSize(B,J,!1),d.aspect=B/J;let ae=B>900&&B/J>1.25,xe=Math.tan(d.fov*Se/360),pe=f+3.6;Il=ae?.19:0,d.userData.d=Math.max(pe/(2*xe*d.aspect*(ae?.58:.97)),3.4/xe),d.filmOffset=-Il*2*xe*d.aspect*d.getFilmWidth(),d.updateProjectionMatrix()}function da(){let B=d.userData.d*(1-.05*ho),J=-.14+si,ae=.21+Ns;d.position.set(-.5+Math.sin(J)*Math.cos(ae)*B,1.95+Math.sin(ae)*B,Math.cos(J)*Math.cos(ae)*B),d.lookAt(-.5,1.95,0),d.updateMatrixWorld()}i.addEventListener("pointermove",B=>{let J=i.getBoundingClientRect();Ds=((B.clientX-J.left)/J.width-.5)*.12,Us=-((B.clientY-J.top)/J.height-.5)*.06,ms()},{passive:!0}),i.addEventListener("pointerleave",()=>{Ds=0,Us=0,ms()});let Nr=null,Dr={shoulders:new F,hips:new F,core:new F};function fa(B,J){let ae=Ir(ei(B)),xe=Vn.length,pe=Math.min(.42,Ps*W[lr]*1.6);ho=ae,ha=1-Ti(.9,1,B);let Ye=[M+Ps];Vn.forEach((Ot,mt)=>Ye.push(Ye[mt]-Ot.h));for(let Ot=0;Ot<=g;Ot++){let mt=S[Ot],Yt=Vn.map(bn=>O(bn.mat,mt)*bn.h),vt=Yt.reduce((bn,qn)=>bn+qn,0),In=pe*ae*b(mt)*(vt/cr);for(let bn=0;bn<=v;bn++){let qn=In*z(C[bn]),Ki=0;On[xe][Ot][bn]=Ye[xe];for(let mi=xe-1;mi>=0;mi--){Ki+=qn*Yt[mi]/vt;let ri=Ye[mi]-Ki;mi>0&&Vn[mi].mat==="profile"&&(ri+=.012*Math.sin(mt*9.5)),On[mi][Ot][bn]=ri}}}Ai.forEach(Ot=>{let mt=Vn[Ot.k].h;Ot.fill((Yt,vt)=>On[Ot.k][Yt][vt],(Yt,vt)=>On[Ot.k+1][Yt][vt],Yt=>ei((1-(On[Ot.k][Yt][v]-On[Ot.k+1][Yt][v])/mt)*6.5))}),E.forEach((Ot,mt)=>{let Yt=Ot.geometry.attributes.position.array;for(let vt=0;vt<=g;vt++){let In=On[mt+1][vt][v];Yt[vt*3]=S[vt],Yt[vt*3+1]=In+.006,Yt[vt*3+2]=p/2+.004,Yt[(g+1+vt)*3]=S[vt],Yt[(g+1+vt)*3+1]=In-.006,Yt[(g+1+vt)*3+2]=p/2+.004}Ot.geometry.attributes.position.needsUpdate=!0});let pt=(Ot,mt)=>{let Yt=ei((Ot-A)/f*g,0,g),vt=Math.min(g-1,Math.floor(Yt)),In=Yt-vt,bn=ei((mt+p/2)/p*v,0,v),qn=Math.min(v-1,Math.floor(bn)),Ki=bn-qn,mi=On[0][vt][qn]+(On[0][vt+1][qn]-On[0][vt][qn])*In,ri=On[0][vt][qn+1]+(On[0][vt+1][qn+1]-On[0][vt][qn+1])*In;return mi+(ri-mi)*Ki},Pt=pt(Je,0);Q.position.set(Je-.05,Pt+.26,-.05),Q.scale.set(1,1-.1*ae,1),Be.position.set(Je-.12,pt(Je,-1.4)+.26,-1.45),Re.position.set(Je+.02,Pt+.66+.025*(1-ae)+.006*Math.sin(J),-.12),Re.rotation.z=.06+.03*(1-ae);let Lt=xn.attributes.position.array,bt=1-ae;for(let Ot=0;Ot<=Tt;Ot++){let mt=et+(Ft-et)*Ot/Tt;for(let Yt=0;Yt<=ht;Yt++){let vt=Xe+(nt-Xe)*Yt/ht,In=vt-Xe,bn=(Ot*(ht+1)+Yt)*3,qn=Ls(In,2)*1.12,Ki=1/(1+(Math.abs(mt)/qn)**3.2),mi=Math.exp(-(((In-.75)/.5)**2)),ri=pt(Math.min(vt,f/2),Math.max(-p/2,Math.min(p/2,mt)))+.11+Ls(In,1)*Ki*(1+.05*bt)+Math.sin(J)*.03*mi*Ki;ri+=.045*Math.exp(-((In/.14)**2)),ri-=(1-Ti(0,.16,In))*.14*(1-Ki*.5),ri+=(.016*Math.sin(vt*2.1+mt*1.1+1.3)+.007*Math.sin(vt*5.3-mt*1.9))*Ti(.2,1.2,In)*(1-Ki*.6),mt<-p/2&&(ri-=(-p/2-mt)*1.7),mt>p/2-.34&&(ri-=((mt-(p/2-.34))/.36)**2*.1),vt>f/2-.06&&(ri-=(vt-(f/2-.06))*1.9),Lt[bn]=vt,Lt[bn+1]=ri,Lt[bn+2]=mt}}xn.attributes.position.needsUpdate=!0,xn.computeVertexNormals();let rn=yn.attributes.position.array,Et=.1;for(let Ot=0;Ot<=Kt;Ot++){let mt=Ot/Kt*Se/2;for(let Yt=0;Yt<=ht;Yt++){let vt=(Tt*(ht+1)+Yt)*3,In=(Ot*(ht+1)+Yt)*3;rn[In]=Lt[vt],rn[In+1]=Lt[vt+1]-Et+Math.cos(mt)*Et-(Ot===Kt?.02:0),rn[In+2]=Lt[vt+2]+Math.sin(mt)*Et*.9}}yn.attributes.position.needsUpdate=!0,yn.computeVertexNormals();let wt=kt.attributes.position.array,Gt=.42;for(let Ot=0;Ot<=Tt;Ot++)for(let mt=0;mt<=En;mt++){let Yt=Math.round(mt/En*Gt/(nt-Xe)*ht),vt=(Ot*(ht+1)+Yt)*3,In=(Ot*(En+1)+mt)*3,bn=Lt[vt+2],qn=Ti(p/2-.2,p/2-.7,bn)*Ti(-p/2+.05,-p/2+.5,bn);wt[In]=Lt[vt]-.012+.03*Math.sin(bn*3.1+1),wt[In+1]=Lt[vt+1]+(.028+.02*Math.sin(mt/En*Se))*qn-.04*(1-qn),wt[In+2]=bn}kt.attributes.position.needsUpdate=!0,kt.computeVertexNormals();let Jt=Ot=>{let mt=Math.round(Ot/(nt-Xe)*ht),Yt=Math.round((0-et)/(Ft-et)*Tt),vt=(Yt*(ht+1)+mt)*3;return[Lt[vt],Lt[vt+1]]},[zn,gs]=Jt(.36),[$n,Bi]=Jt(1.92);Dr.shoulders.set(zn,gs+.04,0),Dr.hips.set($n,Bi+.04,0);let ma=Math.round(($n-A)/f*g),Pl=(On[Ei][ma][v]+On[Ei+1][ma][v])/2;Dr.core.set($n+.6,Pl,p/2+.01)}let Ur=new F;function uo(){if(!e.onPoints)return;let B=i.clientWidth,J=i.clientHeight,ae={};for(let xe in Dr)Ur.copy(Dr[xe]).project(d),ae[xe]=[(Ur.x*.5+.5)*B,(.5-Ur.y*.5)*J];e.onPoints(ae)}function pa(B){let J=Math.min(.1,Math.max(0,(B-ao)/1e3));ao=B;let ae=!1;return Bn!==Jn&&(Bn=Jn>Bn?Math.min(Jn,Bn+J/1.4):Math.max(Jn,Bn-J/1.4),ae=!0),Ri(),si=Fi(si,Ds,4,J),Ns=Fi(Ns,Us,4,J),Math.abs(si-Ds)+Math.abs(Ns-Us)>1e-4&&(ae=!0),Le.uniforms.uTime.value=B/1e3,We.material.map.userData.real&&(We.material.map.offset.x=Z.n[0]+si*.1),Pe.material.map.userData.real&&(Pe.material.map.offset.x=Z.m[0]+si*.1),da(),n.render(u,d),uo(),ae}function ms(){lo||(ao=performance.now(),lo=requestAnimationFrame(jn))}function jn(B){lo=0,pa(B)&&(lo=requestAnimationFrame(jn))}try{await document.fonts.load('700 74px "Hanken Grotesk"')}catch{}{let B=Hg(t),J=1.83*3.937,ae=(xe,pe)=>xe.then(Ye=>{Ye&&(pe(Ye),ms())}).catch(()=>{});if(B){ae(B.oak,pe=>{Zn(re.oak,pe,.07,1.1,Se/2,{color:"#ffffff",rough:.82,ns:.9}),Zn(re.plank,pe,1/J,1/J,Se/2,{color:"#ffffff",rough:.8,ns:.9})}),ae(B.floor,pe=>{Zn(ye.material,pe,34/6.6929,24/6.6929,0,{rough:.7,ns:.8})}),ae(B.rug,pe=>{Zn(ts,pe,(f+2.6)/1.9685,(p+2.8)/1.9685,0,{keepMap:!0,ns:1})});let xe=(pe,[Ye,pt])=>{let Pt=pe.clone();return Pt.wrapS=Pt.wrapT=ci,Pt.repeat.set(Z.su,Z.sv),Pt.offset.set(Ye,pt),Pt.userData.real=!0,Pt.needsUpdate=!0,Pt};ae(B.viewN,pe=>{We.material.map=xe(pe,Z.n),We.material.color.copy(At.view[0]),We.material.needsUpdate=!0,co=!0,_t.visible=Ze.visible=it.visible=!0,Ri()}),ae(B.viewM,pe=>{Pe.material.map=xe(pe,Z.m),Pe.material.color.copy(At.view[1]),Pe.material.needsUpdate=!0}),ae(B.plantFloor,pe=>{Yh(pe.clone(),u,_e+1.15,0,ne+.75,3.1,.6)}),ae(B.plaster,pe=>{Zn(rt.material,pe,34/7.874,16/7.874,0,{keepMap:!0,ns:.7})}),ae(B.linen,pe=>{Zn(re.pillow,pe,1/1.06299,1/1.06299,0,{keepMap:!0,ns:.9}),Zn(re.sheet,pe,9,6.5,0,{keepMap:!0,ns:.6,keepRough:!0}),Zn(re.duvet,pe,9,6.5,0,{keepMap:!0,ns:.8,keepRough:!0})})}}return ua(),se(e.model),fa(e.settle??0,0),Ri(),da(),n.render(u,d),uo(),addEventListener("resize",()=>{ua(),ms()}),window.ResizeObserver&&new ResizeObserver(()=>{ua(),ms()}).observe(i),e.onReady?.(),{setModel(B){se(B),Nr&&fa(Nr[0],Nr[1]),ms()},draw(B,J,ae){Nr=[B,J],ae&&Sn(ae),fa(B,J),pa(performance.now())},setTheme(B,J){Jn=B==="morning"?1:0,J&&(Bn=Jn),ms()},setWall(B,J){B&&At.wall[0].set(B),J&&At.wall[1].set(J),Ri(),ms()},info(){return{zones:nn,rebond:Vn.some(B=>B.mat==="rebond")}}}}function ca(i){return new Kr(Array.from({length:17},(e,t)=>{let n=-Se/2+Se*t/16;return new Me(Math.cos(n)*i+1e-4,Math.sin(n)*i)}),28)}window.EasyComfortBed={mount:BS,mountNight:zS};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
