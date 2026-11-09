(()=>{var Ud=0,Rh=1,Fd=2;var Ks=1,Od=2,lo=3,$s=0,ci=1,bn=2,xr=0,co=1,Ci=2,Ph=3,Ih=4,Bd=5;var _r=100,zd=101,kd=102,Gd=103,Vd=104,Hd=200,Wd=201,qd=202,Xd=203,Lh=204,Dh=205,Yd=206,Zd=207,Jd=208,Kd=209,$d=210,Qd=211,jd=212,ef=213,tf=214,nl=0,il=1,sl=2,qr=3,rl=4,ol=5,al=6,ll=7,Nh=0,nf=1,sf=2,ls=0,Uh=1,Fh=2,Oh=3,ho=4,Bh=5,zh=6,kh=7;var Gh=300,yr=301,uo=302,Fl=303,Ol=304,Xi=1e3,is=1001,Xr=1002,qn=1003,rf=1004;var oa=1005;var Zn=1006,Bl=1007;var Yi=1008;var xi=1009,Vh=1010,Hh=1011,fo=1012,zl=1013,Zi=1014,Ji=1015,Ki=1016,kl=1017,Gl=1018,vr=1020,Wh=35902,qh=35899,Xh=1021,Yh=1022,Ri=1023,bs=1026,Es=1027,Zh=1028,Vl=1029,Qs=1030,Hl=1031;var Wl=1033,aa=33776,la=33777,ca=33778,ha=33779,ql=35840,Xl=35841,Yl=35842,Zl=35843,Jl=36196,Kl=37492,$l=37496,Ql=37488,jl=37489,ua=37490,ec=37491,tc=37808,nc=37809,ic=37810,sc=37811,rc=37812,oc=37813,ac=37814,lc=37815,cc=37816,hc=37817,uc=37818,dc=37819,fc=37820,pc=37821,mc=36492,gc=36494,xc=36495,_c=36283,yc=36284,da=36285,vc=36286;var No=2300,cl=2301,el=2302,mh=2303,gh=2400,xh=2401,_h=2402;var of=3200;var Sc=0,af=1,Cs="",Tn="srgb",Uo="srgb-linear",Fo="linear",jt="srgb";var tl=7680;var lf=519,cf=512,hf=513,uf=514,Jh=515,df=516,ff=517,Kh=518,$h=519,Qh=35044;var jh="300 es",Ni=2e3,Yr=2001;function Tp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ap(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pf(){let i=Oo("canvas");return i.style.display="block",i}var Qu={},Zr=null;function Bo(...i){let e="THREE."+i.shift();Zr?Zr("log",e,...i):console.log(e,...i)}function mf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ft(...i){i=mf(i);let e="THREE."+i.shift();if(Zr)Zr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function pt(...i){i=mf(i);let e="THREE."+i.shift();if(Zr)Zr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function lr(...i){let e=i.join(" ");e in Qu||(Qu[e]=!0,ft(...i))}function gf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var xf={[nl]:nl,[sl]:al,[rl]:rl,[qr]:ol,[il]:il,[al]:sl,[ll]:ll,[ol]:qr},ss=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Hc=Math.PI/180,zo=180/Math.PI;function js(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jn[i&255]+jn[i>>8&255]+jn[i>>16&255]+jn[i>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[t&63|128]+jn[t>>8&255]+"-"+jn[t>>16&255]+jn[t>>24&255]+jn[n&255]+jn[n>>8&255]+jn[n>>16&255]+jn[n>>24&255]).toLowerCase()}function Bt(i,e,t){return Math.max(e,Math.min(t,i))}function Ep(i,e){return(i%e+e)%e}function Wc(i,e,t){return(1-t)*i+t*e}function _f(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function yf(i,e){if(e.constructor===Float32Array)return i;let t=Mc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function vf(i,e){if(e.constructor===Float32Array)return i;let t=Mc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var ru=class ru{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ru.prototype.isVector2=!0;var me=ru,rs=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],S=r[o+3];if(u!==S||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*S;m<0&&(d=-d,f=-f,p=-p,S=-S,m=-m);let g=1-a;if(m<.9995){let b=Math.acos(m),A=Math.sin(b);g=Math.sin(g*b)/A,a=Math.sin(a*b)/A,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+S*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+S*a;let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ou=class ou{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ju.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this.z=Bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this.z=Bt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qc.copy(this).projectOnVector(e),this.sub(qc)}reflect(e){return this.sub(qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ou.prototype.isVector3=!0;var B=ou,qc=new B,ju=new rs,au=class au{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],S=s[0],m=s[3],g=s[6],b=s[1],A=s[4],y=s[7],R=s[2],E=s[5],x=s[8];return r[0]=o*S+a*b+l*R,r[3]=o*m+a*A+l*E,r[6]=o*g+a*y+l*x,r[1]=c*S+h*b+u*R,r[4]=c*m+h*A+u*E,r[7]=c*g+h*y+u*x,r[2]=d*S+f*b+p*R,r[5]=d*m+f*A+p*E,r[8]=d*g+f*y+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/p;return e[0]=u*S,e[1]=(s*c-h*n)*S,e[2]=(a*n-s*o)*S,e[3]=d*S,e[4]=(h*t-s*l)*S,e[5]=(s*r-a*t)*S,e[6]=f*S,e[7]=(n*l-c*t)*S,e[8]=(o*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xc.makeScale(e,t)),this}rotate(e){return lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xc.makeRotation(-e)),this}translate(e,t){return lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};au.prototype.isMatrix3=!0;var vt=au,Xc=new vt,ed=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),td=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cp(){let i={enabled:!0,workingColorSpace:Uo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===jt&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===jt&&(s.r=Wr(s.r),s.g=Wr(s.g),s.b=Wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cs?Fo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Uo]:{primaries:e,whitePoint:n,transfer:Fo,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:n,transfer:jt,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),i}var Vt=Cp();function Ms(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Er,hl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Er===void 0&&(Er=Oo("canvas")),Er.width=e.width,Er.height=e.height;let s=Er.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Er}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Oo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ms(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ms(t[n]/255)*255):t[n]=Ms(t[n]);return{data:t,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Rp=0,Jr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Yc(s[o].image)):r.push(Yc(s[o]))}else r=Yc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Yc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}var Pp=0,Zc=new B,Jn=class i extends ss{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=is,s=is,r=Zn,o=Yi,a=Ri,l=xi,c=i.DEFAULT_ANISOTROPY,h=Cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=js(),this.name="",this.source=new Jr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zc).x}get height(){return this.source.getSize(Zc).y}get depth(){return this.source.getSize(Zc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xi:e.x=e.x-Math.floor(e.x);break;case is:e.x=e.x<0?0:1;break;case Xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xi:e.y=e.y-Math.floor(e.y);break;case is:e.y=e.y<0?0:1;break;case Xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Gh;Jn.DEFAULT_ANISOTROPY=1;var lu=class lu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],S=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-S)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+S)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,y=(f+1)/2,R=(g+1)/2,E=(h+d)/4,x=(u+S)/4,w=(p+m)/4;return A>y&&A>R?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=E/n,r=x/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=w/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=x/r,s=w/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-p)*(m-p)+(u-S)*(u-S)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(u-S)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this.z=Bt(this.z,e.z,t.z),this.w=Bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this.z=Bt(this.z,e,t),this.w=Bt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lu.prototype.isVector4=!0;var pn=lu,ul=class extends ss{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pn(0,0,e,t),this.scissorTest=!1,this.viewport=new pn(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Jn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Jr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ti=class extends ul{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ko=class extends Jn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qn,this.minFilter=qn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var dl=class extends Jn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qn,this.minFilter=qn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ul=class Ul{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,p,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,p,S,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,p,S,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=S,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ul().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Cr.setFromMatrixColumn(e,0).length(),r=1/Cr.setFromMatrixColumn(e,1).length(),o=1/Cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,S=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-S*c,t[9]=-a*l,t[2]=S-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,S=c*u;t[0]=d+S*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=S+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,S=c*u;t[0]=d-S*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=S-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,S=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+S,t[1]=l*u,t[5]=S*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,S=a*c;t[0]=l*h,t[4]=S-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-S*u}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,S=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+S,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=S*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ip,e,Lp)}lookAt(e,t,n){let s=this.elements;return bi.subVectors(e,t),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),Ns.crossVectors(n,bi),Ns.lengthSq()===0&&(Math.abs(n.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),Ns.crossVectors(n,bi)),Ns.normalize(),Ea.crossVectors(bi,Ns),s[0]=Ns.x,s[4]=Ea.x,s[8]=bi.x,s[1]=Ns.y,s[5]=Ea.y,s[9]=bi.y,s[2]=Ns.z,s[6]=Ea.z,s[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],S=n[6],m=n[10],g=n[14],b=n[3],A=n[7],y=n[11],R=n[15],E=s[0],x=s[4],w=s[8],k=s[12],N=s[1],O=s[5],H=s[9],J=s[13],I=s[2],q=s[6],K=s[10],V=s[14],pe=s[3],$=s[7],re=s[11],le=s[15];return r[0]=o*E+a*N+l*I+c*pe,r[4]=o*x+a*O+l*q+c*$,r[8]=o*w+a*H+l*K+c*re,r[12]=o*k+a*J+l*V+c*le,r[1]=h*E+u*N+d*I+f*pe,r[5]=h*x+u*O+d*q+f*$,r[9]=h*w+u*H+d*K+f*re,r[13]=h*k+u*J+d*V+f*le,r[2]=p*E+S*N+m*I+g*pe,r[6]=p*x+S*O+m*q+g*$,r[10]=p*w+S*H+m*K+g*re,r[14]=p*k+S*J+m*V+g*le,r[3]=b*E+A*N+y*I+R*pe,r[7]=b*x+A*O+y*q+R*$,r[11]=b*w+A*H+y*K+R*re,r[15]=b*k+A*J+y*V+R*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],S=e[7],m=e[11],g=e[15],b=l*f-c*d,A=a*f-c*u,y=a*d-l*u,R=o*f-c*h,E=o*d-l*h,x=o*u-a*h;return t*(S*b-m*A+g*y)-n*(p*b-m*R+g*E)+s*(p*A-S*R+g*x)-r*(p*y-S*E+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],S=e[13],m=e[14],g=e[15],b=t*a-n*o,A=t*l-s*o,y=t*c-r*o,R=n*l-s*a,E=n*c-r*a,x=s*c-r*l,w=h*S-u*p,k=h*m-d*p,N=h*g-f*p,O=u*m-d*S,H=u*g-f*S,J=d*g-f*m,I=b*J-A*H+y*O+R*N-E*k+x*w;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/I;return e[0]=(a*J-l*H+c*O)*q,e[1]=(s*H-n*J-r*O)*q,e[2]=(S*x-m*E+g*R)*q,e[3]=(d*E-u*x-f*R)*q,e[4]=(l*N-o*J-c*k)*q,e[5]=(t*J-s*N+r*k)*q,e[6]=(m*y-p*x-g*A)*q,e[7]=(h*x-d*y+f*A)*q,e[8]=(o*H-a*N+c*w)*q,e[9]=(n*N-t*H-r*w)*q,e[10]=(p*E-S*y+g*b)*q,e[11]=(u*y-h*E-f*b)*q,e[12]=(a*k-o*O-l*w)*q,e[13]=(t*O-n*k+s*w)*q,e[14]=(S*A-p*R-m*b)*q,e[15]=(h*R-u*A+d*b)*q,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,S=o*h,m=o*u,g=a*u,b=l*c,A=l*h,y=l*u,R=n.x,E=n.y,x=n.z;return s[0]=(1-(S+g))*R,s[1]=(f+y)*R,s[2]=(p-A)*R,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+g))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(p+A)*x,s[9]=(m-b)*x,s[10]=(1-(d+S))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Cr.set(s[0],s[1],s[2]).length(),a=Cr.set(s[4],s[5],s[6]).length(),l=Cr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Hi.copy(this);let c=1/o,h=1/a,u=1/l;return Hi.elements[0]*=c,Hi.elements[1]*=c,Hi.elements[2]*=c,Hi.elements[4]*=h,Hi.elements[5]*=h,Hi.elements[6]*=h,Hi.elements[8]*=u,Hi.elements[9]*=u,Hi.elements[10]*=u,t.setFromRotationMatrix(Hi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Ni,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,S;if(l)p=r/(o-r),S=o*r/(o-r);else if(a===Ni)p=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===Yr)p=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ni,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,S;if(l)p=1/(o-r),S=o/(o-r);else if(a===Ni)p=-2/(o-r),S=-(o+r)/(o-r);else if(a===Yr)p=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ul.prototype.isMatrix4=!0;var ln=Ul,Cr=new B,Hi=new ln,Ip=new B(0,0,0),Lp=new B(1,1,1),Ns=new B,Ea=new B,bi=new B,nd=new ln,id=new rs,ws=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return id.setFromEuler(this),this.setFromQuaternion(id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ws.DEFAULT_ORDER="XYZ";var Kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dp=0,sd=new B,Rr=new rs,gs=new ln,Ca=new B,wo=new B,Np=new B,Up=new rs,rd=new B(1,0,0),od=new B(0,1,0),ad=new B(0,0,1),ld={type:"added"},Fp={type:"removed"},Pr={type:"childadded",child:null},Jc={type:"childremoved",child:null},Fn=class i extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new ws,n=new rs,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ln},normalMatrix:{value:new vt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(rd,e)}rotateY(e){return this.rotateOnAxis(od,e)}rotateZ(e){return this.rotateOnAxis(ad,e)}translateOnAxis(e,t){return sd.copy(e).applyQuaternion(this.quaternion),this.position.add(sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rd,e)}translateY(e){return this.translateOnAxis(od,e)}translateZ(e){return this.translateOnAxis(ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ca.copy(e):Ca.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gs.lookAt(wo,Ca,this.up):gs.lookAt(Ca,wo,this.up),this.quaternion.setFromRotationMatrix(gs),s&&(gs.extractRotation(s.matrixWorld),Rr.setFromRotationMatrix(gs),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ld),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fp),Jc.child=e,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gs.multiply(e.parent.matrixWorld)),e.applyMatrix4(gs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ld),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,Np),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,Up,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Fn.DEFAULT_UP=new B(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=class extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Op={type:"move"},$r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let S of e.hand.values()){let m=t.getJointPose(S,n),g=this._getHandJoint(c,S);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Op)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function Kc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Vt.workingColorSpace){if(e=Ep(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Kc(o,r,e+1/3),this.g=Kc(o,r,e),this.b=Kc(o,r,e-1/3)}return Vt.colorSpaceToWorking(this,s),this}setStyle(e,t=Tn){function n(r){r!==void 0&&parseFloat(r)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ft("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){let n=Sf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return Vt.workingToColorSpace(ei.copy(this),e),Math.round(Bt(ei.r*255,0,255))*65536+Math.round(Bt(ei.g*255,0,255))*256+Math.round(Bt(ei.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.workingToColorSpace(ei.copy(this),t);let n=ei.r,s=ei.g,r=ei.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Vt.workingColorSpace){return Vt.workingToColorSpace(ei.copy(this),t),e.r=ei.r,e.g=ei.g,e.b=ei.b,e}getStyle(e=Tn){Vt.workingToColorSpace(ei.copy(this),e);let t=ei.r,n=ei.g,s=ei.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Us),this.setHSL(Us.h+e,Us.s+t,Us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Us),e.getHSL(Ra);let n=Wc(Us.h,Ra.h,t),s=Wc(Us.s,Ra.s,t),r=Wc(Us.l,Ra.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ei=new Ye;Ye.NAMES=Sf;var ks=class extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ws,this.environmentIntensity=1,this.environmentRotation=new ws,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wi=new B,xs=new B,$c=new B,_s=new B,Ir=new B,Lr=new B,cd=new B,Qc=new B,jc=new B,eh=new B,th=new pn,nh=new pn,ih=new pn,Ss=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Wi.subVectors(e,t),s.cross(Wi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Wi.subVectors(s,t),xs.subVectors(n,t),$c.subVectors(e,t);let o=Wi.dot(Wi),a=Wi.dot(xs),l=Wi.dot($c),c=xs.dot(xs),h=xs.dot($c),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,_s)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_s.x),l.addScaledVector(o,_s.y),l.addScaledVector(a,_s.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return th.setScalar(0),nh.setScalar(0),ih.setScalar(0),th.fromBufferAttribute(e,t),nh.fromBufferAttribute(e,n),ih.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(th,r.x),o.addScaledVector(nh,r.y),o.addScaledVector(ih,r.z),o}static isFrontFacing(e,t,n,s){return Wi.subVectors(n,t),xs.subVectors(e,t),Wi.cross(xs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wi.subVectors(this.c,this.b),xs.subVectors(this.a,this.b),Wi.cross(xs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ir.subVectors(s,n),Lr.subVectors(r,n),Qc.subVectors(e,n);let l=Ir.dot(Qc),c=Lr.dot(Qc);if(l<=0&&c<=0)return t.copy(n);jc.subVectors(e,s);let h=Ir.dot(jc),u=Lr.dot(jc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(Ir,o);eh.subVectors(e,r);let f=Ir.dot(eh),p=Lr.dot(eh);if(p>=0&&f<=p)return t.copy(r);let S=f*c-l*p;if(S<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Lr,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return cd.subVectors(r,s),a=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(cd,a);let g=1/(m+S+d);return o=S*g,a=d*g,t.copy(n).addScaledVector(Ir,o).addScaledVector(Lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gs=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qi):qi.fromBufferAttribute(r,o),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pa.copy(n.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),Ia.subVectors(this.max,To),Dr.subVectors(e.a,To),Nr.subVectors(e.b,To),Ur.subVectors(e.c,To),Fs.subVectors(Nr,Dr),Os.subVectors(Ur,Nr),sr.subVectors(Dr,Ur);let t=[0,-Fs.z,Fs.y,0,-Os.z,Os.y,0,-sr.z,sr.y,Fs.z,0,-Fs.x,Os.z,0,-Os.x,sr.z,0,-sr.x,-Fs.y,Fs.x,0,-Os.y,Os.x,0,-sr.y,sr.x,0];return!sh(t,Dr,Nr,Ur,Ia)||(t=[1,0,0,0,1,0,0,0,1],!sh(t,Dr,Nr,Ur,Ia))?!1:(La.crossVectors(Fs,Os),t=[La.x,La.y,La.z],sh(t,Dr,Nr,Ur,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ys[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ys[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ys[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ys[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ys[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ys[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ys[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ys[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ys),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ys=[new B,new B,new B,new B,new B,new B,new B,new B],qi=new B,Pa=new Gs,Dr=new B,Nr=new B,Ur=new B,Fs=new B,Os=new B,sr=new B,To=new B,Ia=new B,La=new B,rr=new B;function sh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){rr.fromArray(i,r);let a=s.x*Math.abs(rr.x)+s.y*Math.abs(rr.y)+s.z*Math.abs(rr.z),l=e.dot(rr),c=t.dot(rr),h=n.dot(rr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Un=new B,Da=new me,Bp=0,fn=class extends ss{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qh,this.updateRanges=[],this.gpuType=Ji,this.version=0,this._normalizationScale=e!==void 0?Mc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix3(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):yf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):vf(e,this.array)}};var Go=class extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Vo=class extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Pn=class extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}},zp=new Gs,Ao=new B,rh=new B,cr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):zp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);let t=Ao.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ao,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(rh)),this.expandByPoint(Ao.copy(e.center).sub(rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},kp=0,Di=new ln,oh=new Fn,Fr=new B,wi=new Gs,Eo=new Gs,Wn=new B,In=class i extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tp(e)?Vo:Go)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new vt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,n){return Di.makeTranslation(e,t,n),this.applyMatrix4(Di),this}scale(e,t,n){return Di.makeScale(e,t,n),this.applyMatrix4(Di),this}lookAt(e){return oh.lookAt(e),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pn(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];wi.setFromBufferAttribute(r),this.morphTargetsRelative?(Wn.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(Wn),Wn.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(Wn)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(wi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Eo.setFromBufferAttribute(a),this.morphTargetsRelative?(Wn.addVectors(wi.min,Eo.min),wi.expandByPoint(Wn),Wn.addVectors(wi.max,Eo.max),wi.expandByPoint(Wn)):(wi.expandByPoint(Eo.min),wi.expandByPoint(Eo.max))}wi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Wn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Wn.fromBufferAttribute(a,c),l&&(Fr.fromBufferAttribute(e,c),Wn.add(Fr)),s=Math.max(s,n.distanceToSquared(Wn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new fn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let k=0;k<n.count;k++)a[k]=new B,l[k]=new B;let h=new B,u=new B,d=new B,f=new me,p=new me,S=new me,m=new B,g=new B;function b(k,N,O){c[k]=c[N]=c[O]=1,h.fromBufferAttribute(n,k),u.fromBufferAttribute(n,N),d.fromBufferAttribute(n,O),f.fromBufferAttribute(r,k),p.fromBufferAttribute(r,N),S.fromBufferAttribute(r,O),u.sub(h),d.sub(h),p.sub(f),S.sub(f);let H=1/(p.x*S.y-S.x*p.y);isFinite(H)&&(m.copy(u).multiplyScalar(S.y).addScaledVector(d,-p.y).multiplyScalar(H),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-S.x).multiplyScalar(H),a[k].add(m),a[N].add(m),a[O].add(m),l[k].add(g),l[N].add(g),l[O].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let k=0,N=A.length;k<N;++k){let O=A[k],H=O.start,J=O.count;for(let I=H,q=H+J;I<q;I+=3)b(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let y=new B,R=new B,E=new B,x=new B;function w(k){E.fromBufferAttribute(s,k),x.copy(E);let N=a[k];y.copy(N),y.sub(E.multiplyScalar(E.dot(N))).normalize(),R.crossVectors(x,N);let H=R.dot(l[k])<0?-1:1;o.setXYZW(k,y.x,y.y,y.z,H)}for(let k=0,N=n.count;k<N;++k)c[k]&&w(k);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),S=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wn.fromBufferAttribute(e,t),Wn.normalize(),e.setXYZ(t,Wn.x,Wn.y,Wn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?f=l[S]*a.data.stride+a.offset:f=l[S]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new fn(d,h,u)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},fl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qh,this.updateRanges=[],this.version=0,this.uuid=js()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=hd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=hd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function hd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=js()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var ai=new B,Ho=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Mc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ai.fromBufferAttribute(this,t),ai.applyMatrix4(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ai.fromBufferAttribute(this,t),ai.applyNormalMatrix(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ai.fromBufferAttribute(this,t),ai.transformDirection(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Bo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Bo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):yf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):vf(e,this.data.array)}},ah=new B,Gp=new B,Vp=new vt,mi=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ah.subVectors(n,t).cross(Gp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(ah),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vp.getNormalMatrix(e),s=this.coplanarPoint(ah).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Hp=0,os=class extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=js(),this.name="",this.type="Material",this.blending=co,this.side=$s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Dh,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tl,this.stencilZFail=tl,this.stencilZPass=tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new mi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new me().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Vs=class extends os{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Or,Co=new B,Br=new B,zr=new B,kr=new me,Ro=new me,Mf=new ln,Na=new B,Po=new B,Ua=new B,ud=new me,lh=new me,dd=new me,hr=class extends Fn{constructor(e=new Vs){if(super(),this.isSprite=!0,this.type="Sprite",Or===void 0){Or=new In;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fl(t,5);Or.setIndex([0,1,2,0,2,3]),Or.setAttribute("position",new Ho(n,3,0,!1)),Or.setAttribute("uv",new Ho(n,2,3,!1))}this.geometry=Or,this.material=e,this.center=new me(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&pt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Br.setFromMatrixScale(this.matrixWorld),Mf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Br.multiplyScalar(-zr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Fa(Na.set(-.5,-.5,0),zr,o,Br,s,r),Fa(Po.set(.5,-.5,0),zr,o,Br,s,r),Fa(Ua.set(.5,.5,0),zr,o,Br,s,r),ud.set(0,0),lh.set(1,0),dd.set(1,1);let a=e.ray.intersectTriangle(Na,Po,Ua,!1,Co);if(a===null&&(Fa(Po.set(-.5,.5,0),zr,o,Br,s,r),lh.set(0,1),a=e.ray.intersectTriangle(Na,Ua,Po,!1,Co),a===null))return;let l=e.ray.origin.distanceTo(Co);l<e.near||l>e.far||t.push({distance:l,point:Co.clone(),uv:Ss.getInterpolation(Co,Na,Po,Ua,ud,lh,dd,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Fa(i,e,t,n,s,r){kr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ro.x=r*kr.x-s*kr.y,Ro.y=s*kr.x+r*kr.y):Ro.copy(kr),i.copy(e),i.x+=Ro.x,i.y+=Ro.y,i.applyMatrix4(Mf)}var vs=new B,ch=new B,Oa=new B,Ba=new B,Qr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vs.copy(this.origin).addScaledVector(this.direction,t),vs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ch.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),Ba.copy(this.origin).sub(ch);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Oa),a=Ba.dot(this.direction),l=-Ba.dot(Oa),c=Ba.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let S=1/h;u*=S,d*=S,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ch).addScaledVector(Oa,d),f}intersectSphere(e,t){if(e.radius<0)return null;vs.subVectors(e.center,this.origin);let n=vs.dot(this.direction),s=vs.dot(vs)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vs)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,S=t.y-o.y,m=t.z-o.z,g=n.x-o.x,b=n.y-o.y,A=n.z-o.z,y=Math.abs(l),R=Math.abs(c),E=Math.abs(h),x,w,k,N,O,H,J,I,q,K,V,pe;if(y>=R&&y>=E?(k=l,H=u,q=p,pe=g,l>=0?(x=c,w=h,N=d,O=f,J=S,I=m,K=b,V=A):(x=h,w=c,N=f,O=d,J=m,I=S,K=A,V=b)):R>=E?(k=c,H=d,q=S,pe=b,c>=0?(x=h,w=l,N=f,O=u,J=m,I=p,K=A,V=g):(x=l,w=h,N=u,O=f,J=p,I=m,K=g,V=A)):(k=h,H=f,q=m,pe=A,h>=0?(x=l,w=c,N=u,O=d,J=p,I=S,K=g,V=b):(x=c,w=l,N=d,O=u,J=S,I=p,K=b,V=g)),k===0)return null;let $=x/k,re=w/k,le=1/k,ke=N-$*H,Ze=O-re*H,ne=J-$*q,Re=I-re*q,Ue=K-$*pe,Qe=V-re*pe,Pe=Ue*Re-Qe*ne,We=ke*Qe-Ze*Ue,Nt=ne*Ze-Re*ke;if(s){if(Pe<0||We<0||Nt<0)return null}else if((Pe<0||We<0||Nt<0)&&(Pe>0||We>0||Nt>0))return null;let lt=Pe+We+Nt;if(lt===0)return null;let St=le*(Pe*H+We*q+Nt*pe);return(lt>0?St<0:St>0)?null:this.at(St/lt,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xn=class extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ws,this.combine=Nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fd=new ln,or=new Qr,za=new cr,pd=new B,ka=new B,Ga=new B,Va=new B,hh=new B,Ha=new B,md=new B,Wa=new B,nt=class extends Fn{constructor(e=new In,t=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(hh.fromBufferAttribute(u,e),o?Ha.addScaledVector(hh,h):Ha.addScaledVector(hh.sub(t),h))}t.add(Ha)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(r),or.copy(e.ray).recast(e.near),!(za.containsPoint(or.origin)===!1&&(or.intersectSphere(za,pd)===null||or.origin.distanceToSquared(pd)>(e.far-e.near)**2))&&(fd.copy(r).invert(),or.copy(e.ray).applyMatrix4(fd),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,S=d.length;p<S;p++){let m=d[p],g=o[m.materialIndex],b=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,R=A;y<R;y+=3){let E=a.getX(y),x=a.getX(y+1),w=a.getX(y+2);s=qa(this,g,e,n,c,h,u,E,x,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),S=Math.min(a.count,f.start+f.count);for(let m=p,g=S;m<g;m+=3){let b=a.getX(m),A=a.getX(m+1),y=a.getX(m+2);s=qa(this,o,e,n,c,h,u,b,A,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,S=d.length;p<S;p++){let m=d[p],g=o[m.materialIndex],b=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,R=A;y<R;y+=3){let E=y,x=y+1,w=y+2;s=qa(this,g,e,n,c,h,u,E,x,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let m=p,g=S;m<g;m+=3){let b=m,A=m+1,y=m+2;s=qa(this,o,e,n,c,h,u,b,A,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Wp(i,e,t,n,s,r,o,a){let l;if(e.side===ci?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===$s,a),l===null)return null;Wa.copy(a),Wa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Wa);return c<t.near||c>t.far?null:{distance:c,point:Wa.clone(),object:i}}function qa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ka),i.getVertexPosition(l,Ga),i.getVertexPosition(c,Va);let h=Wp(i,e,t,n,ka,Ga,Va,md);if(h){let u=new B;Ss.getBarycoord(md,ka,Ga,Va,u),s&&(h.uv=Ss.getInterpolatedAttribute(s,a,l,c,u,new me)),r&&(h.uv1=Ss.getInterpolatedAttribute(r,a,l,c,u,new me)),o&&(h.normal=Ss.getInterpolatedAttribute(o,a,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new B,materialIndex:0};Ss.getNormal(ka,Ga,Va,d.normal),h.face=d,h.barycoord=u}return h}var jr=class extends Jn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=qn,h=qn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ar=new cr,qp=new me(.5,.5),Xa=new B,Hs=class{constructor(e=new mi,t=new mi,n=new mi,s=new mi,r=new mi,o=new mi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ni,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],S=r[9],m=r[10],g=r[11],b=r[12],A=r[13],y=r[14],R=r[15];if(s[0].setComponents(c-o,f-h,g-p,R-b).normalize(),s[1].setComponents(c+o,f+h,g+p,R+b).normalize(),s[2].setComponents(c+a,f+u,g+S,R+A).normalize(),s[3].setComponents(c-a,f-u,g-S,R-A).normalize(),n)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,f-d,g-m,R-y).normalize();else if(s[4].setComponents(c-l,f-d,g-m,R-y).normalize(),t===Ni)s[5].setComponents(c+l,f+d,g+m,R+y).normalize();else if(t===Yr)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){ar.center.set(0,0,0);let t=qp.distanceTo(e.center);return ar.radius=.7071067811865476+t,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Xa.x=s.normal.x>0?e.max.x:e.min.x,Xa.y=s.normal.y>0?e.max.y:e.min.y,Xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},gd=new ln,pl=class i{constructor(){this.coordinateSystem=Ni,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];gd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Hs),n[s].setFromProjectionMatrix(gd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Hs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var ml=class extends os{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xd=new ln,yh=new Qr,Ya=new cr,Za=new B,ur=class extends Fn{constructor(e=new In,t=new ml){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(s),Ya.radius+=r,e.ray.intersectsSphere(Ya)===!1)return;xd.copy(s).invert(),yh.copy(e.ray).applyMatrix4(xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,S=f;p<S;p++){let m=c.getX(p);Za.fromBufferAttribute(u,m),_d(Za,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,S=f;p<S;p++)Za.fromBufferAttribute(u,p),_d(Za,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _d(i,e,t,n,s,r,o){let a=yh.distanceSqToPoint(i);if(a<t){let l=new B;yh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Wo=class extends Jn{constructor(e=[],t=yr,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ti=class extends Jn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ts=class extends Jn{constructor(e,t,n=Zi,s,r,o,a=qn,l=qn,c,h=bs,u=1){if(h!==bs&&h!==Es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},qo=class extends Ts{constructor(e,t=Zi,n=yr,s,r,o=qn,a=qn,l,c=bs){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xo=class extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},As=class i extends In{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Pn(c,3)),this.setAttribute("normal",new Pn(h,3)),this.setAttribute("uv",new Pn(u,2));function p(S,m,g,b,A,y,R,E,x,w,k){let N=y/x,O=R/w,H=y/2,J=R/2,I=E/2,q=x+1,K=w+1,V=0,pe=0,$=new B;for(let re=0;re<K;re++){let le=re*O-J;for(let ke=0;ke<q;ke++){let Ze=ke*N-H;$[S]=Ze*b,$[m]=le*A,$[g]=I,c.push($.x,$.y,$.z),$[S]=0,$[m]=0,$[g]=E>0?1:-1,h.push($.x,$.y,$.z),u.push(ke/x),u.push(1-re/w),V+=1}}for(let re=0;re<w;re++)for(let le=0;le<x;le++){let ke=d+le+q*re,Ze=d+le+q*(re+1),ne=d+(le+1)+q*(re+1),Re=d+(le+1)+q*re;l.push(ke,Ze,Re),l.push(Ze,ne,Re),pe+=6}a.addGroup(f,pe,k),f+=pe,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Kn=class i extends In{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,S=[],m=n/2,g=0;b(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Pn(u,3)),this.setAttribute("normal",new Pn(d,3)),this.setAttribute("uv",new Pn(f,2));function b(){let y=new B,R=new B,E=0,x=(t-e)/n;for(let w=0;w<=r;w++){let k=[],N=w/r,O=N*(t-e)+e;for(let H=0;H<=s;H++){let J=H/s,I=J*l+a,q=Math.sin(I),K=Math.cos(I);R.x=O*q,R.y=-N*n+m,R.z=O*K,u.push(R.x,R.y,R.z),y.set(q,x,K).normalize(),d.push(y.x,y.y,y.z),f.push(J,1-N),k.push(p++)}S.push(k)}for(let w=0;w<s;w++)for(let k=0;k<r;k++){let N=S[k][w],O=S[k+1][w],H=S[k+1][w+1],J=S[k][w+1];(e>0||k!==0)&&(h.push(N,O,J),E+=3),(t>0||k!==r-1)&&(h.push(O,H,J),E+=3)}c.addGroup(g,E,0),g+=E}function A(y){let R=p,E=new me,x=new B,w=0,k=y===!0?e:t,N=y===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*N,0),d.push(0,N,0),f.push(.5,.5),p++;let O=p;for(let H=0;H<=s;H++){let I=H/s*l+a,q=Math.cos(I),K=Math.sin(I);x.x=k*K,x.y=m*N,x.z=k*q,u.push(x.x,x.y,x.z),d.push(0,N,0),E.x=q*.5+.5,E.y=K*.5*N+.5,f.push(E.x,E.y),p++}for(let H=0;H<s;H++){let J=R+H,I=O+H;y===!0?h.push(I,I+1,J):h.push(I+1,I,J),w+=3}c.addGroup(g,w,y===!0?1:2),g+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ft("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new me:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,s=[],r=[],o=[],a=new B,l=new ln;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Bt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Bt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},eo=class extends li{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},gl=class extends eo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function eu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var yd=new B,vd=new B,uh=new eu,dh=new eu,fh=new eu,xl=class extends li{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new B){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(vd.subVectors(s[0],s[1]).add(s[0]),c=vd);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(yd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),S=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);S<1e-4&&(S=1),p<1e-4&&(p=S),m<1e-4&&(m=S),uh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,S,m),dh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,S,m),fh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,S,m)}else this.curveType==="catmullrom"&&(uh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),dh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),fh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(uh.calc(l),dh.calc(l),fh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Xp(i,e){let t=1-i;return t*t*e}function Yp(i,e){return 2*(1-i)*i*e}function Zp(i,e){return i*i*e}function Lo(i,e,t,n){return Xp(i,e)+Yp(i,t)+Zp(i,n)}function Jp(i,e){let t=1-i;return t*t*t*e}function Kp(i,e){let t=1-i;return 3*t*t*i*e}function $p(i,e){return 3*(1-i)*i*i*e}function Qp(i,e){return i*i*i*e}function Do(i,e,t,n,s){return Jp(i,e)+Kp(i,t)+$p(i,n)+Qp(i,s)}var Yo=class extends li{constructor(e=new me,t=new me,n=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Do(e,s.x,r.x,o.x,a.x),Do(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_l=class extends li{constructor(e=new B,t=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Do(e,s.x,r.x,o.x,a.x),Do(e,s.y,r.y,o.y,a.y),Do(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zo=class extends li{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yl=class extends li{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jo=class extends li{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Lo(e,s.x,r.x,o.x),Lo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ko=class extends li{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Lo(e,s.x,r.x,o.x),Lo(e,s.y,r.y,o.y),Lo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$o=class extends li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Sd(a,l.x,c.x,h.x,u.x),Sd(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},vl=Object.freeze({__proto__:null,ArcCurve:gl,CatmullRomCurve3:xl,CubicBezierCurve:Yo,CubicBezierCurve3:_l,EllipseCurve:eo,LineCurve:Zo,LineCurve3:yl,QuadraticBezierCurve:Jo,QuadraticBezierCurve3:Ko,SplineCurve:$o}),Sl=class extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new vl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},dr=class extends Sl{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Zo(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Jo(this.currentPoint.clone(),new me(e,t),new me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Yo(this.currentPoint.clone(),new me(e,t),new me(n,s),new me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new $o(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new eo(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ws=class extends dr{constructor(e){super(e),this.uuid=js(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new dr().fromJSON(s))}return this}};function jp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=bf(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=sm(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,u=l;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Qo(r,o,t,a,l,c,0),o}function bf(i,e,t,n,s){let r;if(s===mm(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Md(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Md(o/n|0,i[o],i[o+1],r);return r&&to(r,r.next)&&(ea(r),r=r.next),r}function fr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(to(t,t.next)||Rn(t.prev,t,t.next)===0)){if(ea(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&cm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?tm(i,n,s,r):em(i)){e.push(l.i,i.i,c.i),ea(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=nm(fr(i),e),Qo(i,e,t,n,s,r,2)):o===2&&im(i,e,t,n,s,r):Qo(fr(i),e,t,n,s,r,1);break}}}function em(i){let e=i.prev,t=i,n=i.next;if(Rn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Io(s,a,r,l,o,c,p.x,p.y)&&Rn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function tm(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Rn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),S=Math.max(a,l,c),m=Math.max(h,u,d),g=vh(f,p,e,t,n),b=vh(S,m,e,t,n),A=i.prevZ,y=i.nextZ;for(;A&&A.z>=g&&y&&y.z<=b;){if(A.x>=f&&A.x<=S&&A.y>=p&&A.y<=m&&A!==s&&A!==o&&Io(a,h,l,u,c,d,A.x,A.y)&&Rn(A.prev,A,A.next)>=0||(A=A.prevZ,y.x>=f&&y.x<=S&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&Io(a,h,l,u,c,d,y.x,y.y)&&Rn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;A&&A.z>=g;){if(A.x>=f&&A.x<=S&&A.y>=p&&A.y<=m&&A!==s&&A!==o&&Io(a,h,l,u,c,d,A.x,A.y)&&Rn(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;y&&y.z<=b;){if(y.x>=f&&y.x<=S&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&Io(a,h,l,u,c,d,y.x,y.y)&&Rn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function nm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!to(n,s)&&Tf(n,t,t.next,s)&&jo(n,s)&&jo(s,n)&&(e.push(n.i,t.i,s.i),ea(t),ea(t.next),t=i=s),t=t.next}while(t!==i);return fr(t)}function im(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&dm(o,a)){let l=Af(o,a);o=fr(o,o.next),l=fr(l,l.next),Qo(o,e,t,n,s,r,0),Qo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function sm(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=bf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(um(c))}s.sort(rm);for(let r=0;r<s.length;r++)t=om(s[r],t);return t}function rm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function om(i,e){let t=am(i,e);if(!t)return e;let n=Af(t,i);return fr(n,n.next),fr(t,t.next)}function am(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(to(i,t))return t;do{if(to(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&wf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);jo(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&lm(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function lm(i,e){return Rn(i.prev,i,e.prev)<0&&Rn(e.next,i,i.next)<0}function cm(i,e,t,n){let s=i;do s.z===0&&(s.z=vh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hm(s)}function hm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function vh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function um(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function wf(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Io(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&wf(i,e,t,n,s,r,o,a)}function dm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!fm(i,e)&&(jo(i,e)&&jo(e,i)&&pm(i,e)&&(Rn(i.prev,i,e.prev)||Rn(i,e.prev,e))||to(i,e)&&Rn(i.prev,i,i.next)>0&&Rn(e.prev,e,e.next)>0)}function Rn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function to(i,e){return i.x===e.x&&i.y===e.y}function Tf(i,e,t,n){let s=Ka(Rn(i,e,t)),r=Ka(Rn(i,e,n)),o=Ka(Rn(t,n,i)),a=Ka(Rn(t,n,e));return!!(s!==r&&o!==a||s===0&&Ja(i,t,e)||r===0&&Ja(i,n,e)||o===0&&Ja(t,i,n)||a===0&&Ja(t,e,n))}function Ja(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ka(i){return i>0?1:i<0?-1:0}function fm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Tf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function jo(i,e){return Rn(i.prev,i,i.next)<0?Rn(i,e,i.next)>=0&&Rn(i,i.prev,e)>=0:Rn(i,e,i.prev)<0||Rn(i,i.next,e)<0}function pm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Af(i,e){let t=Sh(i.i,i.x,i.y),n=Sh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Md(i,e,t,n){let s=Sh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ea(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Mh=class{static triangulate(e,t,n=2){return jp(e,t,n)}},zs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];bd(e),wd(n,e);let o=e.length;t.forEach(bd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,wd(n,t[l]);let a=Mh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function bd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function wd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var qs=class i extends In{constructor(e=new Ws([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Pn(s,3)),this.setAttribute("uv",new Pn(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:gm,A,y=!1,R,E,x,w;if(g){A=g.getSpacedPoints(h),y=!0,d=!1;let ce=g.isCatmullRomCurve3?g.closed:!1;R=g.computeFrenetFrames(h,ce),E=new B,x=new B,w=new B}d||(m=0,f=0,p=0,S=0);let k=a.extractPoints(c),N=k.shape,O=k.holes;if(!zs.isClockWise(N)){N=N.reverse();for(let ce=0,ge=O.length;ce<ge;ce++){let ve=O[ce];zs.isClockWise(ve)&&(O[ce]=ve.reverse())}}function J(ce){let ve=10000000000000001e-36,Fe=ce[0];for(let De=1;De<=ce.length;De++){let ut=De%ce.length,Ke=ce[ut],Tt=Ke.x-Fe.x,Ve=Ke.y-Fe.y,Mt=Tt*Tt+Ve*Ve,U=Math.max(Math.abs(Ke.x),Math.abs(Ke.y),Math.abs(Fe.x),Math.abs(Fe.y)),Zt=ve*U*U;if(Mt<=Zt){ce.splice(ut,1),De--;continue}Fe=Ke}}J(N),O.forEach(J);let I=O.length,q=N;for(let ce=0;ce<I;ce++){let ge=O[ce];N=N.concat(ge)}function K(ce,ge,ve){return ge||pt("ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(ge,ve)}let V=N.length;function pe(ce,ge,ve){let Fe,De,ut,Ke=ce.x-ge.x,Tt=ce.y-ge.y,Ve=ve.x-ce.x,Mt=ve.y-ce.y,U=Ke*Ke+Tt*Tt,Zt=Ke*Mt-Tt*Ve;if(Math.abs(Zt)>Number.EPSILON){let gt=Math.sqrt(U),zt=Math.sqrt(Ve*Ve+Mt*Mt),Ae=ge.x-Tt/gt,en=ge.y+Ke/gt,ot=ve.x-Mt/zt,at=ve.y+Ve/zt,C=((ot-Ae)*Mt-(at-en)*Ve)/(Ke*Mt-Tt*Ve);Fe=Ae+Ke*C-ce.x,De=en+Tt*C-ce.y;let v=Fe*Fe+De*De;if(v<=2)return new me(Fe,De);ut=Math.sqrt(v/2)}else{let gt=!1;Ke>Number.EPSILON?Ve>Number.EPSILON&&(gt=!0):Ke<-Number.EPSILON?Ve<-Number.EPSILON&&(gt=!0):Math.sign(Tt)===Math.sign(Mt)&&(gt=!0),gt?(Fe=-Tt,De=Ke,ut=Math.sqrt(U)):(Fe=Ke,De=Tt,ut=Math.sqrt(U/2))}return new me(Fe/ut,De/ut)}let $=[];for(let ce=0,ge=q.length,ve=ge-1,Fe=ce+1;ce<ge;ce++,ve++,Fe++)ve===ge&&(ve=0),Fe===ge&&(Fe=0),$[ce]=pe(q[ce],q[ve],q[Fe]);let re=[],le,ke=$.concat();for(let ce=0,ge=I;ce<ge;ce++){let ve=O[ce];le=[];for(let Fe=0,De=ve.length,ut=De-1,Ke=Fe+1;Fe<De;Fe++,ut++,Ke++)ut===De&&(ut=0),Ke===De&&(Ke=0),le[Fe]=pe(ve[Fe],ve[ut],ve[Ke]);re.push(le),ke=ke.concat(le)}let Ze;if(m===0)Ze=zs.triangulateShape(q,O);else{let ce=[],ge=[];for(let ve=0;ve<m;ve++){let Fe=ve/m,De=f*Math.cos(Fe*Math.PI/2),ut=p*Math.sin(Fe*Math.PI/2)+S;for(let Ke=0,Tt=q.length;Ke<Tt;Ke++){let Ve=K(q[Ke],$[Ke],ut);We(Ve.x,Ve.y,-De),Fe===0&&ce.push(Ve)}for(let Ke=0,Tt=I;Ke<Tt;Ke++){let Ve=O[Ke];le=re[Ke];let Mt=[];for(let U=0,Zt=Ve.length;U<Zt;U++){let gt=K(Ve[U],le[U],ut);We(gt.x,gt.y,-De),Fe===0&&Mt.push(gt)}Fe===0&&ge.push(Mt)}}Ze=zs.triangulateShape(ce,ge)}let ne=Ze.length,Re=p+S;for(let ce=0;ce<V;ce++){let ge=d?K(N[ce],ke[ce],Re):N[ce];y?(x.copy(R.normals[0]).multiplyScalar(ge.x),E.copy(R.binormals[0]).multiplyScalar(ge.y),w.copy(A[0]).add(x).add(E),We(w.x,w.y,w.z)):We(ge.x,ge.y,0)}for(let ce=1;ce<=h;ce++)for(let ge=0;ge<V;ge++){let ve=d?K(N[ge],ke[ge],Re):N[ge];y?(x.copy(R.normals[ce]).multiplyScalar(ve.x),E.copy(R.binormals[ce]).multiplyScalar(ve.y),w.copy(A[ce]).add(x).add(E),We(w.x,w.y,w.z)):We(ve.x,ve.y,u/h*ce)}for(let ce=m-1;ce>=0;ce--){let ge=ce/m,ve=f*Math.cos(ge*Math.PI/2),Fe=p*Math.sin(ge*Math.PI/2)+S;for(let De=0,ut=q.length;De<ut;De++){let Ke=K(q[De],$[De],Fe);We(Ke.x,Ke.y,u+ve)}for(let De=0,ut=O.length;De<ut;De++){let Ke=O[De];le=re[De];for(let Tt=0,Ve=Ke.length;Tt<Ve;Tt++){let Mt=K(Ke[Tt],le[Tt],Fe);y?We(Mt.x,Mt.y+A[h-1].y,A[h-1].x+ve):We(Mt.x,Mt.y,u+ve)}}}Ue(),Qe();function Ue(){let ce=s.length/3;if(d){let ge=0,ve=V*ge;for(let Fe=0;Fe<ne;Fe++){let De=Ze[Fe];Nt(De[2]+ve,De[1]+ve,De[0]+ve)}ge=h+m*2,ve=V*ge;for(let Fe=0;Fe<ne;Fe++){let De=Ze[Fe];Nt(De[0]+ve,De[1]+ve,De[2]+ve)}}else{for(let ge=0;ge<ne;ge++){let ve=Ze[ge];Nt(ve[2],ve[1],ve[0])}for(let ge=0;ge<ne;ge++){let ve=Ze[ge];Nt(ve[0]+V*h,ve[1]+V*h,ve[2]+V*h)}}n.addGroup(ce,s.length/3-ce,0)}function Qe(){let ce=s.length/3,ge=0;Pe(q,ge),ge+=q.length;for(let ve=0,Fe=O.length;ve<Fe;ve++){let De=O[ve];Pe(De,ge),ge+=De.length}n.addGroup(ce,s.length/3-ce,1)}function Pe(ce,ge){let ve=ce.length;for(;--ve>=0;){let Fe=ve,De=ve-1;De<0&&(De=ce.length-1);for(let ut=0,Ke=h+m*2;ut<Ke;ut++){let Tt=V*ut,Ve=V*(ut+1),Mt=ge+Fe+Tt,U=ge+De+Tt,Zt=ge+De+Ve,gt=ge+Fe+Ve;lt(Mt,U,Zt,gt)}}}function We(ce,ge,ve){l.push(ce),l.push(ge),l.push(ve)}function Nt(ce,ge,ve){St(ce),St(ge),St(ve);let Fe=s.length/3,De=b.generateTopUV(n,s,Fe-3,Fe-2,Fe-1);wt(De[0]),wt(De[1]),wt(De[2])}function lt(ce,ge,ve,Fe){St(ce),St(ge),St(Fe),St(ge),St(ve),St(Fe);let De=s.length/3,ut=b.generateSideWallUV(n,s,De-6,De-3,De-2,De-1);wt(ut[0]),wt(ut[1]),wt(ut[3]),wt(ut[1]),wt(ut[2]),wt(ut[3])}function St(ce){s.push(l[ce*3+0]),s.push(l[ce*3+1]),s.push(l[ce*3+2])}function wt(ce){r.push(ce.x),r.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return xm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new vl[s.type]().fromJSON(s)),new i(n,e.options)}},gm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new me(r,o),new me(a,l),new me(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],S=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new me(o,1-l),new me(c,1-u),new me(d,1-p),new me(S,1-g)]:[new me(a,1-l),new me(h,1-u),new me(f,1-p),new me(m,1-g)]}};function xm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var as=class i extends In{constructor(e=[new me(0,-.5),new me(.5,0),new me(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Bt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new B,d=new me,f=new B,p=new B,S=new B,m=0,g=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,f.x=g*1,f.y=-m,f.z=g*0,S.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:S.normalize(),l.push(S.x,S.y,S.z);break;default:m=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=S.x,f.y+=S.y,f.z+=S.z,f.normalize(),l.push(f.x,f.y,f.z),S.copy(p)}for(let b=0;b<=t;b++){let A=n+b*h*s,y=Math.sin(A),R=Math.cos(A);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*R,o.push(u.x,u.y,u.z),d.x=b/t,d.y=E/(e.length-1),a.push(d.x,d.y);let x=l[3*E+0]*y,w=l[3*E+1],k=l[3*E+0]*R;c.push(x,w,k)}}for(let b=0;b<t;b++)for(let A=0;A<e.length-1;A++){let y=A+b*e.length,R=y,E=y+e.length,x=y+e.length+1,w=y+1;r.push(R,E,w),r.push(x,w,E)}this.setIndex(r),this.setAttribute("position",new Pn(o,3)),this.setAttribute("uv",new Pn(a,2)),this.setAttribute("normal",new Pn(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Qt=class i extends In{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],S=[],m=[];for(let g=0;g<h;g++){let b=g*d-o;for(let A=0;A<c;A++){let y=A*u-r;p.push(y,-b,0),S.push(0,0,1),m.push(A/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){let A=b+c*g,y=b+c*(g+1),R=b+1+c*(g+1),E=b+1+c*g;f.push(A,y,E),f.push(y,R,E)}this.setIndex(f),this.setAttribute("position",new Pn(p,3)),this.setAttribute("normal",new Pn(S,3)),this.setAttribute("uv",new Pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var no=class i extends In{constructor(e=new Ko(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new B,l=new B,c=new me,h=new B,u=[],d=[],f=[],p=[];S(),this.setIndex(p),this.setAttribute("position",new Pn(u,3)),this.setAttribute("normal",new Pn(d,3)),this.setAttribute("uv",new Pn(f,2));function S(){for(let A=0;A<t;A++)m(A);m(r===!1?t:0),b(),g()}function m(A){h=e.getPointAt(A/t,h);let y=o.normals[A],R=o.binormals[A];for(let E=0;E<=s;E++){let x=E/s*Math.PI*2,w=Math.sin(x),k=-Math.cos(x);l.x=k*y.x+w*R.x,l.y=k*y.y+w*R.y,l.z=k*y.z+w*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let A=1;A<=t;A++)for(let y=1;y<=s;y++){let R=(s+1)*(A-1)+(y-1),E=(s+1)*A+(y-1),x=(s+1)*A+y,w=(s+1)*(A-1)+y;p.push(R,E,w),p.push(E,x,w)}}function b(){for(let A=0;A<=t;A++)for(let y=0;y<=s;y++)c.x=A/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new vl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Sr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Td(s))s.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Td(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function ni(i){let e={};for(let t=0;t<i.length;t++){let n=Sr(i[t]);for(let s in n)e[s]=n[s]}return e}function Td(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _m(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Vt.workingColorSpace}var Ef={clone:Sr,merge:ni},ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ai=class extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ym,this.fragmentShader=vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=_m(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ye().setHex(s.value);break;case"v2":this.uniforms[n].value=new me().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new vt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ln().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ml=class extends Ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Lt=class extends os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sc,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ws,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gi=class extends Lt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return lr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){lr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var io=class extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bl=class extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Gr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function $a(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Xs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wl=class extends Xs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gh,endingEnd:gh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case xh:r=e,a=2*t-n;break;case _h:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xh:o=e,l=2*n-t;break;case _h:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),S=p*p,m=S*p,g=-d*m+2*d*S-d*p,b=(1+d)*m+(-1.5-2*d)*S+(-.5+d)*p+1,A=(-1-f)*m+(1.5+f)*S+.5*p,y=f*m-f*S;for(let R=0;R!==a;++R)r[R]=g*o[h+R]+b*o[c+R]+A*o[l+R]+y*o[u+R];return r}},Tl=class extends Xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Al=class extends Xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},El=class extends Xs{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(s-t),S=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*S+o[l+m]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let S=o[c+p],m=o[l+p],g=f*d+p*2,b=u[g],A=u[g+1],y=e*d+p*2,R=h[y],E=h[y+1],x=Mm(n,t,b,R,s);r[p]=Cf(x,S,A,E,m)}return r}};function Cf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Sm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Mm(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Cf(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Sm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Ei=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gr(t,this.TimeBufferType),this.values=Gr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gr(e.times,Array),values:Gr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),$a(e.settings)&&(n.settings={inTangents:Gr(e.settings.inTangents,Array),outTangents:Gr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new El(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case No:t=this.InterpolantFactoryMethodDiscrete;break;case cl:t=this.InterpolantFactoryMethodLinear;break;case el:t=this.InterpolantFactoryMethodSmooth;break;case mh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ft("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return No;case this.InterpolantFactoryMethodLinear:return cl;case this.InterpolantFactoryMethodSmooth:return el;case this.InterpolantFactoryMethodBezier:return mh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;$a(this.settings)&&(Ad(this.settings.inTangents,e),Ad(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;$a(this.settings)&&(Ed(this.settings.inTangents,e),Ed(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(pt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(pt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){pt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){pt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ap(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){pt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===el,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let S=t[u+p];if(S!==t[d+p]||S!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,$a(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ad(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Ed(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Ei.prototype.ValueTypeName="";Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=cl;var Ys=class extends Ei{constructor(e,t,n){super(e,t,n)}};Ys.prototype.ValueTypeName="bool";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=No;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}};Cl.prototype.ValueTypeName="color";var Rl=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}};Rl.prototype.ValueTypeName="number";var Pl=class extends Xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)rs.slerpFlat(r,0,o,c-a,o,c,l);return r}},ta=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Pl(this.times,this.values,this.getValueSize(),e)}};ta.prototype.ValueTypeName="quaternion";ta.prototype.InterpolantFactoryMethodSmooth=void 0;var Zs=class extends Ei{constructor(e,t,n){super(e,t,n)}};Zs.prototype.ValueTypeName="string";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=No;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}};Il.prototype.ValueTypeName="vector";var Ll=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Rf=new Ll,na=class{constructor(e){this.manager=e!==void 0?e:Rf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};na.DEFAULT_MATERIAL_NAME="__DEFAULT";var pr=class extends Fn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},so=class extends pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ph=new ln,Cd=new B,Rd=new B,ro=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cd),Rd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ph.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ph,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Yr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(ph)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Qa=new B,ja=new rs,ns=new B,ia=class extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qa,ja,ns),ns.x===1&&ns.y===1&&ns.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,ja,ns.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Qa,ja,ns),ns.x===1&&ns.y===1&&ns.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,ja,ns.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bs=new B,Pd=new me,Id=new me,Bn=class extends ia{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(Hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bs.x,Bs.y).multiplyScalar(-e/Bs.z),Bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bs.x,Bs.y).multiplyScalar(-e/Bs.z)}getViewSize(e,t){return this.getViewBounds(e,Pd,Id),t.subVectors(Id,Pd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bh=class extends ro{constructor(){super(new Bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=zo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},mr=class extends pr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new bh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},wh=class extends ro{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0}},gr=class extends pr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new wh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},sa=class extends ia{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Th=class extends ro{constructor(){super(new sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Js=class extends pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new Th}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Vr=-90,Hr=1,oo=class extends Fn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bn(Vr,Hr,e,t);s.layers=this.layers,this.add(s);let r=new Bn(Vr,Hr,e,t);r.layers=this.layers,this.add(r);let o=new Bn(Vr,Hr,e,t);o.layers=this.layers,this.add(o);let a=new Bn(Vr,Hr,e,t);a.layers=this.layers,this.add(a);let l=new Bn(Vr,Hr,e,t);l.layers=this.layers,this.add(l);let c=new Bn(Vr,Hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Dl=class extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var nu="\\[\\]\\.:\\/",bm=new RegExp("["+nu+"]","g"),iu="[^"+nu+"]",wm="[^"+nu.replace("\\.","")+"]",Tm=/((?:WC+[\/:])*)/.source.replace("WC",iu),Am=/(WCOD+)?/.source.replace("WCOD",wm),Em=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iu),Cm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iu),Rm=new RegExp("^"+Tm+Am+Em+Cm+"$"),Pm=["material","materials","bones","map"],Ah=class{constructor(e,t,n){let s=n||Mn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bm,"")}static parseTrackName(e){let t=Rm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;pt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mn.Composite=Ah;Mn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mn.prototype.GetterByBindingType=[Mn.prototype._getValue_direct,Mn.prototype._getValue_array,Mn.prototype._getValue_arrayElement,Mn.prototype._getValue_toArray];Mn.prototype.SetterByBindingTypeAndVersioning=[[Mn.prototype._setValue_direct,Mn.prototype._setValue_direct_setNeedsUpdate,Mn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_array,Mn.prototype._setValue_array_setNeedsUpdate,Mn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_arrayElement,Mn.prototype._setValue_arrayElement_setNeedsUpdate,Mn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_fromArray,Mn.prototype._setValue_fromArray_setNeedsUpdate,Mn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var N1=new Float32Array(1);var Ld=new ln,ao=class{constructor(e,t,n=0,s=1/0){this.ray=new Qr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):pt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ld.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ld),this}intersectObject(e,t=!0,n=[]){return Eh(e,this,n,t),n.sort(Dd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Eh(e[s],this,n,t);return n.sort(Dd),n}};function Dd(i,e){return i.distance-e.distance}function Eh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Eh(r[o],e,t,!0)}}var cu=class cu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};cu.prototype.isMatrix2=!0;var Ch=cu,Nd=new me,Nl=class{constructor(e=new me(1/0,1/0),t=new me(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Nd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nd).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var ra=class{constructor(){this.type="ShapePath",this.color=new Ye,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new dr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let h=!1,u=c.length;for(let d=0,f=u-1;d<u;f=d++){let p=c[d],S=c[f];p.y>l.y!=S.y>l.y&&l.x<(S.x-p.x)*(l.y-p.y)/(S.y-p.y)+p.x&&(h=!h)}return h}function t(l,c){let h=c.getCenter(new me);if(e(h,l))return h;let u=h.y,d=[],f=l.length;for(let p=0;p<f;p++){let S=l[p],m=l[(p+1)%f];if(S.y>u!=m.y>u){let g=S.x+(u-S.y)*(m.x-S.x)/(m.y-S.y);d.push(g)}}return d.length>1&&(d.sort((p,S)=>p-S),h.x=(d[0]+d[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(ft('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let s=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=zs.area(c);if(h===0)continue;let u=new Nl;for(let d=0;d<c.length;d++)u.expandByPoint(c[d]);r.push({subPath:l,points:c,boundingBox:u,interiorPoint:t(c,u),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let u=l-1;u>=0;u--){let d=r[u];if(d.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,d.points)){c.container=d.exclude?d.container:d,h=d.winding,c.winding+=h;break}}s(c.winding)===s(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let o=[],a=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new Ws;c.curves=l.subPath.curves,o.push(c),a.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=a.get(l.container);if(!c)continue;let h=new dr;h.curves=l.subPath.curves,c.holes.push(h)}return o}};function su(i,e,t,n){let s=Im(n);switch(t){case Xh:return i*e;case Zh:return i*e/s.components*s.byteLength;case Vl:return i*e/s.components*s.byteLength;case Qs:return i*e*2/s.components*s.byteLength;case Hl:return i*e*2/s.components*s.byteLength;case Yh:return i*e*3/s.components*s.byteLength;case Ri:return i*e*4/s.components*s.byteLength;case Wl:return i*e*4/s.components*s.byteLength;case aa:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ca:case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xl:case Zl:return Math.max(i,16)*Math.max(e,8)/4;case ql:case Yl:return Math.max(i,8)*Math.max(e,8)/2;case Jl:case Kl:case Ql:case jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $l:case ua:case ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case rc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case mc:case gc:case xc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _c:case yc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case da:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Im(i){switch(i){case xi:case Vh:return{byteLength:1,components:1};case fo:case Hh:case Ki:return{byteLength:2,components:1};case kl:case Gl:return{byteLength:2,components:4};case Zi:case zl:case Ji:return{byteLength:4,components:1};case Wh:case qh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function $f(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Nm(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],S=u[f];S.start<=p.start+p.count+1?p.count=Math.max(p.count,S.start+S.count-p.start):(++d,u[d]=S)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let S=u[f];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fm=`#ifdef USE_ALPHAHASH
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
#endif`,Om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,km=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gm=`#ifdef USE_AOMAP
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
#endif`,Vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hm=`#ifdef USE_BATCHING
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
#endif`,Wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ym=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zm=`#ifdef USE_IRIDESCENCE
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
#endif`,Jm=`#ifdef USE_BUMPMAP
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
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,s0=`#define PI 3.141592653589793
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
} // validated`,r0=`vec3 transformedNormal = objectNormal;
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
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",u0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S0=`#ifdef USE_GRADIENTMAP
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
}`,M0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,A0=`#ifdef USE_ENVMAP
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
#endif`,E0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I0=`PhysicalMaterial material;
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
#endif`,L0=`uniform sampler2D dfgLUT;
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
}`,D0=`
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W0=`#if defined( USE_POINTS_UV )
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
#endif`,q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z0=`#if defined( USE_MORPHCOLORS )
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
#endif`,J0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`#ifdef USE_MORPHTARGETS
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
#endif`,$0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,j0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ig=`#ifdef USE_NORMALMAP
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
#endif`,sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yg=`float getShadowMask() {
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
}`,vg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,Mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bg=`#ifdef USE_SKINNING
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
#endif`,wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cg=`#ifdef USE_TRANSMISSION
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
#endif`,Rg=`#ifdef USE_TRANSMISSION
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ug=`uniform sampler2D t2D;
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Og=`uniform float backgroundBlurriness;
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
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`#include <common>
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
}`,Gg=`#if DEPTH_PACKING == 3200
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
}`,Vg=`#define DISTANCE
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
}`,Hg=`#define DISTANCE
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`uniform float scale;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Zg=`#include <common>
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
}`,Jg=`uniform vec3 diffuse;
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
}`,Kg=`#define LAMBERT
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
}`,$g=`#define LAMBERT
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
}`,Qg=`#define MATCAP
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
}`,jg=`#define MATCAP
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
}`,ex=`#define NORMAL
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
}`,tx=`#define NORMAL
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
}`,nx=`#define PHONG
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
}`,ix=`#define PHONG
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
}`,sx=`#define STANDARD
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
}`,rx=`#define STANDARD
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
}`,ox=`#define TOON
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
}`,ax=`#define TOON
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
}`,lx=`uniform float size;
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
}`,cx=`uniform vec3 diffuse;
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
}`,hx=`#include <common>
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
}`,ux=`uniform vec3 color;
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
}`,dx=`uniform float rotation;
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
}`,fx=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:Um,alphahash_pars_fragment:Fm,alphamap_fragment:Om,alphamap_pars_fragment:Bm,alphatest_fragment:zm,alphatest_pars_fragment:km,aomap_fragment:Gm,aomap_pars_fragment:Vm,batching_pars_vertex:Hm,batching_vertex:Wm,begin_vertex:qm,beginnormal_vertex:Xm,bsdfs:Ym,iridescence_fragment:Zm,bumpmap_pars_fragment:Jm,clipping_planes_fragment:Km,clipping_planes_pars_fragment:$m,clipping_planes_pars_vertex:Qm,clipping_planes_vertex:jm,color_fragment:e0,color_pars_fragment:t0,color_pars_vertex:n0,color_vertex:i0,common:s0,defaultnormal_vertex:r0,displacementmap_pars_vertex:o0,displacementmap_vertex:a0,emissivemap_fragment:l0,emissivemap_pars_fragment:c0,colorspace_fragment:h0,colorspace_pars_fragment:u0,envmap_fragment:d0,envmap_common_pars_fragment:f0,envmap_pars_fragment:p0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:A0,envmap_vertex:g0,fog_vertex:x0,fog_pars_vertex:_0,fog_fragment:y0,fog_pars_fragment:v0,gradientmap_pars_fragment:S0,lightmap_pars_fragment:M0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:w0,lights_pars_begin:T0,lights_toon_fragment:E0,lights_toon_pars_fragment:C0,lights_phong_fragment:R0,lights_phong_pars_fragment:P0,lights_physical_fragment:I0,lights_physical_pars_fragment:L0,lights_fragment_begin:D0,lights_fragment_maps:N0,lights_fragment_end:U0,lightprobes_pars_fragment:F0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:k0,map_fragment:G0,map_pars_fragment:V0,map_particle_fragment:H0,map_particle_pars_fragment:W0,metalnessmap_fragment:q0,metalnessmap_pars_fragment:X0,morphinstance_vertex:Y0,morphcolor_vertex:Z0,morphnormal_vertex:J0,morphtarget_pars_vertex:K0,morphtarget_vertex:$0,normal_fragment_begin:Q0,normal_fragment_maps:j0,normal_pars_fragment:eg,normal_pars_vertex:tg,normal_vertex:ng,normalmap_pars_fragment:ig,clearcoat_normal_fragment_begin:sg,clearcoat_normal_fragment_maps:rg,clearcoat_pars_fragment:og,iridescence_pars_fragment:ag,opaque_fragment:lg,packing:cg,premultiplied_alpha_fragment:hg,project_vertex:ug,dithering_fragment:dg,dithering_pars_fragment:fg,roughnessmap_fragment:pg,roughnessmap_pars_fragment:mg,shadowmap_pars_fragment:gg,shadowmap_pars_vertex:xg,shadowmap_vertex:_g,shadowmask_pars_fragment:yg,skinbase_vertex:vg,skinning_pars_vertex:Sg,skinning_vertex:Mg,skinnormal_vertex:bg,specularmap_fragment:wg,specularmap_pars_fragment:Tg,tonemapping_fragment:Ag,tonemapping_pars_fragment:Eg,transmission_fragment:Cg,transmission_pars_fragment:Rg,uv_pars_fragment:Pg,uv_pars_vertex:Ig,uv_vertex:Lg,worldpos_vertex:Dg,background_vert:Ng,background_frag:Ug,backgroundCube_vert:Fg,backgroundCube_frag:Og,cube_vert:Bg,cube_frag:zg,depth_vert:kg,depth_frag:Gg,distance_vert:Vg,distance_frag:Hg,equirect_vert:Wg,equirect_frag:qg,linedashed_vert:Xg,linedashed_frag:Yg,meshbasic_vert:Zg,meshbasic_frag:Jg,meshlambert_vert:Kg,meshlambert_frag:$g,meshmatcap_vert:Qg,meshmatcap_frag:jg,meshnormal_vert:ex,meshnormal_frag:tx,meshphong_vert:nx,meshphong_frag:ix,meshphysical_vert:sx,meshphysical_frag:rx,meshtoon_vert:ox,meshtoon_frag:ax,points_vert:lx,points_frag:cx,shadow_vert:hx,shadow_frag:ux,sprite_vert:dx,sprite_frag:fx},Ge={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},hs={basic:{uniforms:ni([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:ni([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:ni([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:ni([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:ni([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:ni([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:ni([Ge.points,Ge.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:ni([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:ni([Ge.common,Ge.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:ni([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:ni([Ge.sprite,Ge.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distance:{uniforms:ni([Ge.common,Ge.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distance_vert,fragmentShader:Dt.distance_frag},shadow:{uniforms:ni([Ge.lights,Ge.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};hs.physical={uniforms:ni([hs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};var bc={r:0,b:0,g:0},px=new ln,Qf=new vt;Qf.set(-1,0,0,0,1,0,0,0,1);function mx(i,e,t,n,s,r){let o=new Ye(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let y=b.backgroundBlurriness>0;A=e.get(A,y)}return A}function p(b){let A=!1,y=f(b);y===null?m(o,a):y&&y.isColor&&(m(y,1),A=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(b,A){let y=f(A);y&&y.isCubeTexture?(c===void 0&&(c=new nt(new As(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Sr(hs.backgroundCube.uniforms),vertexShader:hs.backgroundCube.vertexShader,fragmentShader:hs.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(px.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qf),c.material.toneMapped=Vt.getTransfer(y.colorSpace)!==jt,(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new nt(new Qt(2,2),new Ai({name:"BackgroundMaterial",uniforms:Sr(hs.background.uniforms),vertexShader:hs.background.vertexShader,fragmentShader:hs.background.fragmentShader,side:$s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Vt.getTransfer(y.colorSpace)!==jt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,A){b.getRGB(bc,tu(i)),t.buffers.color.setClear(bc.r,bc.g,bc.b,A,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,A=1){o.set(b),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:p,addToRenderList:S,dispose:g}}function gx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(O,H,J,I,q){let K=!1,V=u(O,I,J,H);r!==V&&(r=V,c(r.object)),K=f(O,I,J,q),K&&p(O,I,J,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(O,H,J,I),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(O){return i.bindVertexArray(O)}function h(O){return i.deleteVertexArray(O)}function u(O,H,J,I){let q=I.wireframe===!0,K=n[H.id];K===void 0&&(K={},n[H.id]=K);let V=O.isInstancedMesh===!0?O.id:0,pe=K[V];pe===void 0&&(pe={},K[V]=pe);let $=pe[J.id];$===void 0&&($={},pe[J.id]=$);let re=$[q];return re===void 0&&(re=d(l()),$[q]=re),re}function d(O){let H=[],J=[],I=[];for(let q=0;q<t;q++)H[q]=0,J[q]=0,I[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:J,attributeDivisors:I,object:O,attributes:{},index:null}}function f(O,H,J,I){let q=r.attributes,K=H.attributes,V=0,pe=J.getAttributes();for(let $ in pe)if(pe[$].location>=0){let le=q[$],ke=K[$];if(ke===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(ke=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(ke=O.instanceColor)),le===void 0||le.attribute!==ke||ke&&le.data!==ke.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function p(O,H,J,I){let q={},K=H.attributes,V=0,pe=J.getAttributes();for(let $ in pe)if(pe[$].location>=0){let le=K[$];le===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(le=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(le=O.instanceColor));let ke={};ke.attribute=le,le&&le.data&&(ke.data=le.data),q[$]=ke,V++}r.attributes=q,r.attributesNum=V,r.index=I}function S(){let O=r.newAttributes;for(let H=0,J=O.length;H<J;H++)O[H]=0}function m(O){g(O,0)}function g(O,H){let J=r.newAttributes,I=r.enabledAttributes,q=r.attributeDivisors;J[O]=1,I[O]===0&&(i.enableVertexAttribArray(O),I[O]=1),q[O]!==H&&(i.vertexAttribDivisor(O,H),q[O]=H)}function b(){let O=r.newAttributes,H=r.enabledAttributes;for(let J=0,I=H.length;J<I;J++)H[J]!==O[J]&&(i.disableVertexAttribArray(J),H[J]=0)}function A(O,H,J,I,q,K,V){V===!0?i.vertexAttribIPointer(O,H,J,q,K):i.vertexAttribPointer(O,H,J,I,q,K)}function y(O,H,J,I){S();let q=I.attributes,K=J.getAttributes(),V=H.defaultAttributeValues;for(let pe in K){let $=K[pe];if($.location>=0){let re=q[pe];if(re===void 0&&(pe==="instanceMatrix"&&O.instanceMatrix&&(re=O.instanceMatrix),pe==="instanceColor"&&O.instanceColor&&(re=O.instanceColor)),re!==void 0){let le=re.normalized,ke=re.itemSize,Ze=e.get(re);if(Ze===void 0)continue;let ne=Ze.buffer,Re=Ze.type,Ue=Ze.bytesPerElement,Qe=Re===i.INT||Re===i.UNSIGNED_INT||re.gpuType===zl;if(re.isInterleavedBufferAttribute){let Pe=re.data,We=Pe.isInterleavedBuffer===!0?Pe.stride:Pe.itemSize,Nt=re.offset;if(Pe.isInstancedInterleavedBuffer||Pe.isInstancedBufferAttribute){for(let lt=0;lt<$.locationSize;lt++)g($.location+lt,Pe.meshPerAttribute);O.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let lt=0;lt<$.locationSize;lt++)m($.location+lt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let lt=0;lt<$.locationSize;lt++)A($.location+lt,ke/$.locationSize,Re,le,We*Ue,(Nt+ke/$.locationSize*lt)*Ue,Qe)}else{if(re.isInstancedBufferAttribute){for(let Pe=0;Pe<$.locationSize;Pe++)g($.location+Pe,re.meshPerAttribute);O.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Pe=0;Pe<$.locationSize;Pe++)m($.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let Pe=0;Pe<$.locationSize;Pe++)A($.location+Pe,ke/$.locationSize,Re,le,ke*Ue,ke/$.locationSize*Pe*Ue,Qe)}}else if(V!==void 0){let le=V[pe];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv($.location,le);break;case 3:i.vertexAttrib3fv($.location,le);break;case 4:i.vertexAttrib4fv($.location,le);break;default:i.vertexAttrib1fv($.location,le)}}}}b()}function R(){k();for(let O in n){let H=n[O];for(let J in H){let I=H[J];for(let q in I){let K=I[q];for(let V in K)h(K[V].object),delete K[V];delete I[q]}}delete n[O]}}function E(O){if(n[O.id]===void 0)return;let H=n[O.id];for(let J in H){let I=H[J];for(let q in I){let K=I[q];for(let V in K)h(K[V].object),delete K[V];delete I[q]}}delete n[O.id]}function x(O){for(let H in n){let J=n[H];for(let I in J){let q=J[I];if(q[O.id]===void 0)continue;let K=q[O.id];for(let V in K)h(K[V].object),delete K[V];delete q[O.id]}}}function w(O){for(let H in n){let J=n[H],I=O.isInstancedMesh===!0?O.id:0,q=J[I];if(q!==void 0){for(let K in q){let V=q[K];for(let pe in V)h(V[pe].object),delete V[pe];delete q[K]}delete J[I],Object.keys(J).length===0&&delete n[H]}}}function k(){N(),o=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:k,resetDefaultState:N,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:S,enableAttribute:m,disableUnusedAttributes:b}}function xx(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function _x(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Ri&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let w=x===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==xi&&x!==Ji&&!w&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ft("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&ft("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:S,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:y,maxSamples:R,samples:E}}function yx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new mi,a=new vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,S=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,A=b*4,y=g.clippingState||null;l.value=y,y=h(p,d,A,f);for(let R=0;R!==A;++R)y[R]=t[R];g.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let S=u!==null?u.length:0,m=null;if(S!==0){if(m=l.value,p!==!0||m===null){let g=f+S*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let A=0,y=f;A!==S;++A,y+=4)o.copy(u[A]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}var ma=class extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new As(5,5,5),r=new Ai({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ci,blending:xr});r.uniforms.tEquirect.value=t;let o=new nt(s,r),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Zn),new oo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Pf=256,vx=3,Sx=20,jf=256,ep=16,Mx=3,bx=new B,wx=new Ye,Mr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new oo(1,10,null),this._boxMesh=new nt(new As(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=bx}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,S=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(e.background=l.getClearColor(wx));let m=new oo(n,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,e.background=S,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Pf,_f(e))}_fromTexture(e,t){e.mapping===yr||e.mapping===uo?this._setSize(e.image.length===0?Pf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=If(e,!1,!1),n=Math.log2(e)-vx;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=If(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===yr||e.mapping===uo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Df()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Lf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Tx(),this._integrationMaterial=Ax());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/ep);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Mx)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(jf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ex());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function If(i,e,t){return new ma(i,{minFilter:Yi,generateMipmaps:e,type:Ki,colorSpace:Uo,depthBuffer:t})}function xa(i,e,t){return new Ai({name:i,uniforms:e,vertexShader:Dt.cube_vert,fragmentShader:t,side:ci,blending:xr,depthTest:!1,depthWrite:!1})}function Tx(){return xa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${jf}u

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
	`)}function Ax(){return xa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ep}},`

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
	`)}function Ex(){return xa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Sx}
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
	`)}function Lf(){return xa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Df(){return xa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Cx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Fl||f===Ol)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let S=new ma(p.height);return S.fromEquirectangularTexture(i,d),e.set(d,S),d.addEventListener("dispose",c),a(S.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Fl||f===Ol,S=f===yr||f===uo;if(p||S){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Mr(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let b=d.image;return p&&b&&b.height>0||S&&b&&l(b)?(n===null&&(n=new Mr(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Fl?d.mapping=yr:f===Ol&&(d.mapping=uo),d}function l(d){let f=0,p=6;for(let S=0;S<p;S++)d[S]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Rx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&lr("WebGLRenderer: "+n+" extension not supported."),s}}}function Px(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let S=r.get(p);S&&(e.remove(S),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,S){return s[S.id]!==void 0||(S.addEventListener("dispose",a),s[S.id]=new WeakRef(S),o.register(S,S.id,S),t.memory.geometries++),S}function h(p){let S=p.attributes;for(let m in S)e.update(S[m],i.ARRAY_BUFFER)}function u(p){let S=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let b=S!==null?S.array.length:m.array.length/3-1,A=m.count>=65535?Vo:Go,y=new A(Math.ceil(b/3)*6,1),R=y.array;if(S!==null){let x=S.array;g=S.version;for(let w=0,k=0;w<b;w+=3){let N=x[w+0],O=x[w+1],H=x[w+2];R[k++]=N,R[k++]=O,R[k++]=O,R[k++]=H,R[k++]=H,R[k++]=N}}else{g=m.version;for(let x=0,w=0;x<b;x+=3){let k=x+0,N=x+1,O=x+2;R[w++]=k,R[w++]=N,R[w++]=N,R[w++]=O,R[w++]=O,R[w++]=k}}y.version=g;let E=r.get(p);E&&e.remove(E),r.set(p,y)}function d(p){let S=r.get(p);if(S){let m=p.index;m!==null&&S.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in s){let S=s[p].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Ix(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let S=0;for(let m=0;m<f;m++)S+=d[m];t.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Lx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:pt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Dx(i,e,t){let n=new WeakMap,s=new pn;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let k=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",k)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],A=0;f===!0&&(A=1),p===!0&&(A=2),S===!0&&(A=3);let y=a.attributes.position.count*A,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*R*4*u),x=new ko(E,y,R,u);x.type=Ji,x.needsUpdate=!0;let w=A*4;for(let N=0;N<u;N++){let O=m[N],H=g[N],J=b[N],I=y*R*4*N;for(let q=0;q<O.count;q++){let K=q*w;f===!0&&(s.fromBufferAttribute(O,q),E[I+K+0]=s.x,E[I+K+1]=s.y,E[I+K+2]=s.z,E[I+K+3]=0),p===!0&&(s.fromBufferAttribute(H,q),E[I+K+4]=s.x,E[I+K+5]=s.y,E[I+K+6]=s.z,E[I+K+7]=0),S===!0&&(s.fromBufferAttribute(J,q),E[I+K+8]=s.x,E[I+K+9]=s.y,E[I+K+10]=s.z,E[I+K+11]=J.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new me(y,R)},n.set(a,d),a.addEventListener("dispose",k)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let S=0;S<c.length;S++)f+=c[S];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Nx(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Ux={[Uh]:"LINEAR_TONE_MAPPING",[Fh]:"REINHARD_TONE_MAPPING",[Oh]:"CINEON_TONE_MAPPING",[ho]:"ACES_FILMIC_TONE_MAPPING",[zh]:"AGX_TONE_MAPPING",[kh]:"NEUTRAL_TONE_MAPPING",[Bh]:"CUSTOM_TONE_MAPPING"};function Fx(i,e,t,n,s,r){let o=new Ti(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new In;h.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Pn([0,2,0,0,2,0],2));let u=new Ml({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new nt(h,u),f=new sa(-1,1,1,-1,0,1),p=null,S=null,m=!1,g,b=null,A=[],y=!1;this.setSize=function(R,E){o.setSize(R,E),a!==null&&a.setSize(R,E),l!==null&&l.setSize(R,E);for(let x=0;x<A.length;x++){let w=A[x];w.setSize&&w.setSize(R,E)}},this.setEffects=function(R){A=R,y=A.length>0&&A[0].isRenderPass===!0;let E=o.width,x=o.height;A.length>0&&a===null&&(a=new Ti(E,x,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),l=new Ti(E,x,{type:Ki,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&A.some(k=>k.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new Ts(E,x),r===!0&&(c.format=Es,c.type=vr)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let k=0;k<A.length;k++){let N=A[k];N.setSize&&N.setSize(E,x),w&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(R,E){if(m||R.toneMapping===ls&&A.length===0)return!1;if(b=E,E!==null){let x=E.width,w=E.height;(o.width!==x||o.height!==w)&&this.setSize(x,w)}return y===!1&&R.setRenderTarget(o),g=R.toneMapping,R.toneMapping=ls,!0},this.hasRenderPass=function(){return y},this.end=function(R,E){R.toneMapping=g,m=!0;let x=o,w=a;for(let k=0;k<A.length;k++){let N=A[k];N.enabled!==!1&&(N.render(R,w,x,E),N.needsSwap!==!1&&(x=w,w=w===a?l:a))}if(p!==R.outputColorSpace||S!==R.toneMapping){p=R.outputColorSpace,S=R.toneMapping,u.defines={},Vt.getTransfer(p)===jt&&(u.defines.SRGB_TRANSFER="");let k=Ux[S];k&&(u.defines[k]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,R.setRenderTarget(b),R.render(d,f),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var tp=new Jn,np=new Ts(1,1),ip=new qo(1),sp=new ko,rp=new dl,op=new Wo,Nf=[],Uf=[],Ff=new Float32Array(16),Of=new Float32Array(9),Bf=new Float32Array(4);function mo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Nf[s];if(r===void 0&&(r=new Float32Array(s),Nf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function zn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Tc(i,e){let t=Uf[e];t===void 0&&(t=new Int32Array(e),Uf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ox(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zn(t,e))return;i.uniform2fv(this.addr,e),kn(t,e)}}function zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zn(t,e))return;i.uniform3fv(this.addr,e),kn(t,e)}}function kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zn(t,e))return;i.uniform4fv(this.addr,e),kn(t,e)}}function Gx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kn(t,e)}else{if(zn(t,n))return;Bf.set(n),i.uniformMatrix2fv(this.addr,!1,Bf),kn(t,n)}}function Vx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kn(t,e)}else{if(zn(t,n))return;Of.set(n),i.uniformMatrix3fv(this.addr,!1,Of),kn(t,n)}}function Hx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kn(t,e)}else{if(zn(t,n))return;Ff.set(n),i.uniformMatrix4fv(this.addr,!1,Ff),kn(t,n)}}function Wx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zn(t,e))return;i.uniform2iv(this.addr,e),kn(t,e)}}function Xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zn(t,e))return;i.uniform3iv(this.addr,e),kn(t,e)}}function Yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zn(t,e))return;i.uniform4iv(this.addr,e),kn(t,e)}}function Zx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zn(t,e))return;i.uniform2uiv(this.addr,e),kn(t,e)}}function Kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zn(t,e))return;i.uniform3uiv(this.addr,e),kn(t,e)}}function $x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zn(t,e))return;i.uniform4uiv(this.addr,e),kn(t,e)}}function Ac(i){return i.version===0&&(i.compareFunction=$h,i.needsUpdate=!0),i}function Qx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ac(np):r=tp,t.setTexture2D(e||r,s)}function jx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||rp,s)}function e_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ac(ip):r=op,t.setTextureCube(e||r,s)}function t_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||sp,s)}function n_(i){switch(i){case 5126:return Ox;case 35664:return Bx;case 35665:return zx;case 35666:return kx;case 35674:return Gx;case 35675:return Vx;case 35676:return Hx;case 5124:case 35670:return Wx;case 35667:case 35671:return qx;case 35668:case 35672:return Xx;case 35669:case 35673:return Yx;case 5125:return Zx;case 36294:return Jx;case 36295:return Kx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return t_}}function i_(i,e){i.uniform1fv(this.addr,e)}function s_(i,e){let t=mo(e,this.size,2);i.uniform2fv(this.addr,t)}function r_(i,e){let t=mo(e,this.size,3);i.uniform3fv(this.addr,t)}function o_(i,e){let t=mo(e,this.size,4);i.uniform4fv(this.addr,t)}function a_(i,e){let t=mo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function l_(i,e){let t=mo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function c_(i,e){let t=mo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function h_(i,e){i.uniform1iv(this.addr,e)}function u_(i,e){i.uniform2iv(this.addr,e)}function d_(i,e){i.uniform3iv(this.addr,e)}function f_(i,e){i.uniform4iv(this.addr,e)}function p_(i,e){i.uniform1uiv(this.addr,e)}function m_(i,e){i.uniform2uiv(this.addr,e)}function g_(i,e){i.uniform3uiv(this.addr,e)}function x_(i,e){i.uniform4uiv(this.addr,e)}function __(i,e,t){let n=this.cache,s=e.length,r=Tc(t,s);zn(n,r)||(i.uniform1iv(this.addr,r),kn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ac(np):o=tp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function y_(i,e,t){let n=this.cache,s=e.length,r=Tc(t,s);zn(n,r)||(i.uniform1iv(this.addr,r),kn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||rp,r[o])}function v_(i,e,t){let n=this.cache,s=e.length,r=Tc(t,s);zn(n,r)||(i.uniform1iv(this.addr,r),kn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Ac(ip):o=op;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function S_(i,e,t){let n=this.cache,s=e.length,r=Tc(t,s);zn(n,r)||(i.uniform1iv(this.addr,r),kn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||sp,r[o])}function M_(i){switch(i){case 5126:return i_;case 35664:return s_;case 35665:return r_;case 35666:return o_;case 35674:return a_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return h_;case 35667:case 35671:return u_;case 35668:case 35672:return d_;case 35669:case 35673:return f_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return v_;case 36289:case 36303:case 36311:case 36292:return S_}}var du=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=n_(t.type)}},fu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=M_(t.type)}},pu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},hu=/(\w+)(\])?(\[|\.)?/g;function zf(i,e){i.seq.push(e),i.map[e.id]=e}function b_(i,e,t){let n=i.name,s=n.length;for(hu.lastIndex=0;;){let r=hu.exec(n),o=hu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zf(t,c===void 0?new du(a,i,e):new fu(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new pu(a),zf(t,u)),t=u}}}var po=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);b_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function kf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var w_=37297,T_=0;function A_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Gf=new vt;function E_(i){Vt._getMatrix(Gf,Vt.workingColorSpace,i);let e=`mat3( ${Gf.elements.map(t=>t.toFixed(4))} )`;switch(Vt.getTransfer(i)){case Fo:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+A_(i.getShaderSource(e),a)}else return r}function C_(i,e){let t=E_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var R_={[Uh]:"Linear",[Fh]:"Reinhard",[Oh]:"Cineon",[ho]:"ACESFilmic",[zh]:"AgX",[kh]:"Neutral",[Bh]:"Custom"};function P_(i,e){let t=R_[e];return t===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wc=new B;function I_(){Vt.getLuminanceCoefficients(wc);let i=wc.x.toFixed(4),e=wc.y.toFixed(4),t=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function D_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function N_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function pa(i){return i!==""}function Hf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Wf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var U_=/^[ \t]*#include +<([\w\d./]+)>/gm;function mu(i){return i.replace(U_,F_)}function F_(i,e){let t=Dt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return mu(t)}var O_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qf(i){return i.replace(O_,B_)}function B_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var z_={[Ks]:"SHADOWMAP_TYPE_PCF",[lo]:"SHADOWMAP_TYPE_VSM"};function k_(i){return z_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var G_={[uo]:"ENVMAP_MODE_REFRACTION"};function V_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":G_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var H_={[Nh]:"ENVMAP_BLENDING_MULTIPLY",[nf]:"ENVMAP_BLENDING_MIX",[sf]:"ENVMAP_BLENDING_ADD"};function W_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":H_[i.combine]||"ENVMAP_BLENDING_NONE"}function q_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=k_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=V_(t),u=W_(t),d=L_(t),f=D_(r),p=s.createProgram(),S,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(pa).join(`
`),S.length>0&&(S+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(pa).join(`
`),m.length>0&&(m+=`
`)):(S=[Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),m=[Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ls?"#define TONE_MAPPING":"",t.toneMapping!==ls?Dt.tonemapping_pars_fragment:"",t.toneMapping!==ls?P_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,C_("linearToOutputTexel",t.outputColorSpace),I_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),o=mu(o),o=Hf(o,t),o=Wf(o,t),a=mu(a),a=Hf(a,t),a=Wf(a,t),o=qf(o),a=qf(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,S=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",t.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=g+S+o,A=g+m+a,y=kf(s,s.VERTEX_SHADER,b),R=kf(s,s.FRAGMENT_SHADER,A);s.attachShader(p,y),s.attachShader(p,R),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(N){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(p)||"",H=s.getShaderInfoLog(y)||"",J=s.getShaderInfoLog(R)||"",I=O.trim(),q=H.trim(),K=J.trim(),V=!0,pe=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,y,R);else{let $=Vf(s,y,"vertex"),re=Vf(s,R,"fragment");pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+I+`
`+$+`
`+re)}else I!==""?ft("WebGLProgram: Program Info Log:",I):(q===""||K==="")&&(pe=!1);pe&&(N.diagnostics={runnable:V,programLog:I,vertexShader:{log:q,prefix:S},fragmentShader:{log:K,prefix:m}})}s.deleteShader(y),s.deleteShader(R),x=new po(s,p),w=N_(s,p)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(p,w_)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=T_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=R,this}var X_=0,gu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xu(e),t.set(e,n)),n}},xu=class{constructor(e){this.id=X_++,this.code=e,this.usedTimes=0}};function Y_(i){return i===Qs||i===ua||i===da}function Z_(i,e,t,n,s,r){let o=new Kr,a=new gu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,w,k,N,O,H){let J=N.fog,I=O.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=e.get(x.envMap||q,K),pe=d[x.type],$=n.precision;x.precision!==null&&($=n.getMaxPrecision(x.precision),$!==x.precision&&ft("WebGLProgram.getParameters:",x.precision,"not supported, using",$,"instead."));let re=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,le=re!==void 0?re.length:0,ke=0;I.morphAttributes.position!==void 0&&(ke=1),I.morphAttributes.normal!==void 0&&(ke=2),I.morphAttributes.color!==void 0&&(ke=3);let Ze,ne,Re,Ue;if(pe){let Oe=hs[pe];Ze=Oe.vertexShader,ne=Oe.fragmentShader}else{Ze=x.vertexShader,ne=x.fragmentShader;let Oe=a.getVertexShaderStage(x),Rt=a.getFragmentShaderStage(x);a.update(x,Oe,Rt),Re=Oe.id,Ue=Rt.id}let Qe=i.getRenderTarget(),Pe=i.state.buffers.depth.getReversed(),We=O.isInstancedMesh===!0,Nt=O.isBatchedMesh===!0,lt=!!x.map,St=!!x.matcap,wt=!!V,ce=wt&&V.isPMREMTexture===!0,ge=!!x.aoMap,ve=!!x.lightMap,Fe=!!x.bumpMap&&x.wireframe===!1,De=!!x.normalMap,ut=!!x.displacementMap,Ke=!!x.emissiveMap,Tt=!!x.metalnessMap,Ve=!!x.roughnessMap,Mt=x.anisotropy>0,U=x.clearcoat>0,Zt=x.diffuseRoughness>0,gt=x.dispersion>0,zt=x.retroreflectivity>0,Ae=x.iridescence>0,en=x.sheen>0,ot=x.transmission>0,at=Mt&&!!x.anisotropyMap,C=U&&!!x.clearcoatMap,v=U&&!!x.clearcoatNormalMap,Y=U&&!!x.clearcoatRoughnessMap,Se=Zt&&!!x.diffuseRoughnessMap,ae=Ae&&!!x.iridescenceMap,Ee=Ae&&!!x.iridescenceThicknessMap,Le=en&&!!x.sheenColorMap,ie=en&&!!x.sheenRoughnessMap,se=!!x.specularMap,Ce=!!x.specularColorMap,L=!!x.specularIntensityMap,oe=ot&&!!x.transmissionMap,ee=ot&&!!x.thicknessMap,Ie=!!x.gradientMap,Me=!!x.alphaMap,ye=x.alphaTest>0,je=!!x.alphaHash,dt=!!x.extensions,xe=ls;x.toneMapped&&(Qe===null||Qe.isXRRenderTarget===!0)&&(xe=i.toneMapping);let st=ce?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,it={shaderID:pe,shaderType:x.type,shaderName:x.name,vertexShader:Ze,fragmentShader:ne,defines:x.defines,customVertexShaderID:Re,customFragmentShaderID:Ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:$,batching:Nt,batchingColor:Nt&&O._colorsTexture!==null,instancing:We,instancingColor:We&&O.instanceColor!==null,instancingMorph:We&&O.morphTexture!==null,outputColorSpace:Qe===null?i.outputColorSpace:Qe.isXRRenderTarget===!0?Qe.texture.colorSpace:Vt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:lt,matcap:St,envMap:wt,envMapMode:wt&&V.mapping,envMapPMREM:ce,envMapMaxLod:ce?st.length-1:null,envMapSize:ce?st[0].width:null,aoMap:ge,lightMap:ve,bumpMap:Fe,normalMap:De,displacementMap:ut,emissiveMap:Ke,normalMapObjectSpace:De&&x.normalMapType===af,normalMapTangentSpace:De&&x.normalMapType===Sc,packedNormalMap:De&&x.normalMapType===Sc&&Y_(x.normalMap.format),metalnessMap:Tt,roughnessMap:Ve,anisotropy:Mt,anisotropyMap:at,clearcoat:U,clearcoatMap:C,clearcoatNormalMap:v,clearcoatRoughnessMap:Y,diffuseRoughness:Zt,diffuseRoughnessMap:Se,dispersion:gt,retroreflection:zt,iridescence:Ae,iridescenceMap:ae,iridescenceThicknessMap:Ee,sheen:en,sheenColorMap:Le,sheenRoughnessMap:ie,specularMap:se,specularColorMap:Ce,specularIntensityMap:L,transmission:ot,transmissionMap:oe,thicknessMap:ee,gradientMap:Ie,opaque:x.transparent===!1&&x.blending===co&&x.alphaToCoverage===!1,alphaMap:Me,alphaTest:ye,alphaHash:je,combine:x.combine,mapUv:lt&&f(x.map.channel),aoMapUv:ge&&f(x.aoMap.channel),lightMapUv:ve&&f(x.lightMap.channel),bumpMapUv:Fe&&f(x.bumpMap.channel),normalMapUv:De&&f(x.normalMap.channel),displacementMapUv:ut&&f(x.displacementMap.channel),emissiveMapUv:Ke&&f(x.emissiveMap.channel),metalnessMapUv:Tt&&f(x.metalnessMap.channel),roughnessMapUv:Ve&&f(x.roughnessMap.channel),anisotropyMapUv:at&&f(x.anisotropyMap.channel),clearcoatMapUv:C&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Se&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:ie&&f(x.sheenRoughnessMap.channel),specularMapUv:se&&f(x.specularMap.channel),specularColorMapUv:Ce&&f(x.specularColorMap.channel),specularIntensityMapUv:L&&f(x.specularIntensityMap.channel),transmissionMapUv:oe&&f(x.transmissionMap.channel),thicknessMapUv:ee&&f(x.thicknessMap.channel),alphaMapUv:Me&&f(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(De||Mt),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!I.attributes.uv&&(lt||Me),fog:!!J,useFog:x.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&De===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Pe,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ke,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.filter(Oe=>Oe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:lt&&x.map.isVideoTexture===!0&&Vt.getTransfer(x.map.colorSpace)===jt,decodeVideoTextureEmissive:Ke&&x.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(x.emissiveMap.colorSpace)===jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===bn,flipSided:x.side===ci,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:dt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&x.extensions.multiDraw===!0||Nt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function S(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let k in x.defines)w.push(k),w.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(m(w,x),g(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function m(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function g(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function b(x){let w=d[x.type],k;if(w){let N=hs[w];k=Ef.clone(N.uniforms)}else k=x.uniforms;return k}function A(x,w){let k=h.get(w);return k!==void 0?++k.usedTimes:(k=new q_(i,w,x,s),c.push(k),h.set(w,k)),k}function y(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function R(x){a.remove(x)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:S,getUniforms:b,acquireProgram:A,releaseProgram:y,releaseShaderCache:R,programs:c,dispose:E}}function J_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function K_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Yf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,S,m,g){let b=i[e];return b===void 0?(b={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:S,renderOrder:d.renderOrder,z:m,group:g},i[e]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=p,b.materialVariant=o(d),b.groupOrder=S,b.renderOrder=d.renderOrder,b.z=m,b.group=g),e++,b}function l(d,f,p,S,m,g,b){b.reversedDepth===!0&&(m=-m);let A=a(d,f,p,S,m,g);p.transmission>0?n.push(A):p.transparent===!0?s.push(A):t.push(A)}function c(d,f,p,S,m,g){let b=a(d,f,p,S,m,g);p.transmission>0?n.unshift(b):p.transparent===!0?s.unshift(b):t.unshift(b)}function h(d,f){t.length>1&&t.sort(d||K_),n.length>1&&n.sort(f||Yf),s.length>1&&s.sort(f||Yf)}function u(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function $_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Zf,i.set(n,[o])):s>=r.length?(o=new Zf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Q_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Ye};break;case"SpotLight":t={position:new B,direction:new B,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function j_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var e1=0;function t1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function n1(i){let e=new Q_,t=j_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new ln,o=new ln;function a(c){let h=0,u=0,d=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let f=0,p=0,S=0,m=0,g=0,b=0,A=0,y=0,R=0,E=0,x=0,w=0,k=0,N=0;c.sort(t1);for(let H=0,J=c.length;H<J;H++){let I=c[H],q=I.color,K=I.intensity,V=I.distance,pe=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Qs?pe=I.shadow.map.texture:pe=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=q.r*K,u+=q.g*K,d+=q.b*K;else if(I.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(I.sh.coefficients[$],K);N++}else if(I.isSunLight){let $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let re=I.shadow,le=t.get(I);le.shadowIntensity=re.intensity,le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize.copy(re.mapSize).multiply(re.getFrameExtents()),n.sunShadow[p]=le,n.sunShadowMap[p]=pe;let ke=re.getViewportCount();for(let Ze=0;Ze<ke;Ze++)n.sunShadowMatrix[S+Ze]=re.getMatrix(Ze),n.sunShadowCascade[S+Ze]=re._cascadeData[Ze];S+=ke,p++}n.sun[f]=$,f++}else if(I.isDirectionalLight){let $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let re=I.shadow,le=t.get(I);le.shadowIntensity=re.intensity,le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize=re.mapSize,n.directionalShadow[m]=le,n.directionalShadowMap[m]=pe,n.directionalShadowMatrix[m]=I.shadow.matrix,R++}n.directional[m]=$,m++}else if(I.isSpotLight){let $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(q).multiplyScalar(K),$.distance=V,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,n.spot[b]=$;let re=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,re.updateMatrices(I),I.castShadow&&k++),n.spotLightMatrix[b]=re.matrix,I.castShadow){let le=t.get(I);le.shadowIntensity=re.intensity,le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize=re.mapSize,n.spotShadow[b]=le,n.spotShadowMap[b]=pe,x++}b++}else if(I.isRectAreaLight){let $=e.get(I);$.color.copy(q).multiplyScalar(K),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=$,A++}else if(I.isPointLight){let $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){let re=I.shadow,le=t.get(I);le.shadowIntensity=re.intensity,le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize=re.mapSize,le.shadowCameraNear=re.camera.near,le.shadowCameraFar=re.camera.far,n.pointShadow[g]=le,n.pointShadowMap[g]=pe,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=$,g++}else if(I.isHemisphereLight){let $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(K),$.groundColor.copy(I.groundColor).multiplyScalar(K),n.hemi[y]=$,y++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ge.LTC_FLOAT_1,n.rectAreaLTC2=Ge.LTC_FLOAT_2):(n.rectAreaLTC1=Ge.LTC_HALF_1,n.rectAreaLTC2=Ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let O=n.hash;(O.sunLength!==f||O.directionalLength!==m||O.pointLength!==g||O.spotLength!==b||O.rectAreaLength!==A||O.hemiLength!==y||O.numSunShadows!==p||O.numDirectionalShadows!==R||O.numPointShadows!==E||O.numSpotShadows!==x||O.numSpotMaps!==w||O.numLightProbes!==N)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=A,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+w-k,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=N,O.sunLength=f,O.directionalLength=m,O.pointLength=g,O.spotLength=b,O.rectAreaLength=A,O.hemiLength=y,O.numSunShadows=p,O.numDirectionalShadows=R,O.numPointShadows=E,O.numSpotShadows=x,O.numSpotMaps=w,O.numLightProbes=N,n.version=e1++)}function l(c,h){let u=0,d=0,f=0,p=0,S=0,m=0,g=h.matrixWorldInverse;for(let b=0,A=c.length;b<A;b++){let y=c[b];if(y.isSunLight){let R=n.sun[u];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(g),u++}else if(y.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(g),d++}else if(y.isSpotLight){let R=n.spot[p];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(g),R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let R=n.rectArea[S];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),S++}else if(y.isPointLight){let R=n.point[f];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let R=n.hemi[m];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Jf(i){let e=new n1(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function i1(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Jf(i),e.set(s,[a])):r>=o.length?(a=new Jf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var s1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r1=`uniform sampler2D shadow_pass;
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
}`,o1=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],a1=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Kf=new ln,fa=new B,uu=new B;function l1(i,e,t){let n=new Hs,s=new me,r=new me,o=new pn,a=new io,l=new bl,c={},h=t.maxTextureSize,u={[$s]:ci,[ci]:$s,[bn]:bn},d=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:s1,fragmentShader:r1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new In;p.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new nt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ks;let g=this.type;this.render=function(E,x,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Od&&(ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ks);let k=i.getRenderTarget(),N=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),H=i.state;H.setBlending(xr),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let J=g!==this.type;J&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(q=>q.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,q=E.length;I<q;I++){let K=E[I],V=K.shadow;if(V===void 0){ft("WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let pe=V.getFrameExtents();s.multiply(pe),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pe.x),s.x=r.x*pe.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pe.y),s.y=r.y*pe.y,V.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=$,V.map===null||J===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===lo){if(K.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ti(s.x,s.y,{format:Qs,type:Ki,minFilter:Zn,magFilter:Zn,generateMipmaps:!1}),V.map.texture.name=K.name+".shadowMap",V.map.depthTexture=new Ts(s.x,s.y,Ji),V.map.depthTexture.name=K.name+".shadowMapDepth",V.map.depthTexture.format=bs,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=qn,V.map.depthTexture.magFilter=qn}else K.isPointLight?(V.map=new ma(s.x),V.map.depthTexture=new qo(s.x,Zi)):(V.map=new Ti(s.x,s.y),V.map.depthTexture=new Ts(s.x,s.y,Zi)),V.map.depthTexture.name=K.name+".shadowMap",V.map.depthTexture.format=bs,this.type===Ks?(V.map.depthTexture.compareFunction=$?Kh:Jh,V.map.depthTexture.minFilter=Zn,V.map.depthTexture.magFilter=Zn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=qn,V.map.depthTexture.magFilter=qn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let re=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();K.isPointLight!==!0&&V.updateMatrices(K,w);let le=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:w.layers;for(let ke=0;ke<re;ke++){let Ze=V.getCamera(ke);if(K.isPointLight){let ne=V.camera,Re=V.matrix,Ue=K.distance||ne.far;Ue!==ne.far&&(ne.far=Ue,ne.updateProjectionMatrix()),fa.setFromMatrixPosition(K.matrixWorld),ne.position.copy(fa),uu.copy(ne.position),uu.add(o1[ke]),ne.up.copy(a1[ke]),ne.lookAt(uu),ne.updateMatrixWorld(),Re.makeTranslation(-fa.x,-fa.y,-fa.z),Kf.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Kf,ne.coordinateSystem,ne.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,ke),i.clear();else{ke===0&&(i.setRenderTarget(V.map),i.clear());let ne=V.getViewport(ke);o.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),H.viewport(o)}n=V.getFrustum(ke),y(x,w,Ze,K,le,this.type)}V.isPointLightShadow!==!0&&this.type===lo&&b(V,w),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(k,N,O)};function b(E,x){let w=e.update(S);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ti(s.x,s.y,{format:Qs,type:Ki}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(x,null,w,d,S,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(x,null,w,f,S,null)}function A(E,x,w,k){let N=null,O=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)N=O;else if(N=w.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let H=N.uuid,J=x.uuid,I=c[H];I===void 0&&(I={},c[H]=I);let q=I[J];q===void 0&&(q=N.clone(),I[J]=q,x.addEventListener("dispose",R)),N=q}if(N.visible=x.visible,N.wireframe=x.wireframe,k===lo?N.side=x.shadowSide!==null?x.shadowSide:x.side:N.side=x.shadowSide!==null?x.shadowSide:u[x.side],N.alphaMap=x.alphaMap,N.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,N.map=x.map,N.clipShadows=x.clipShadows,N.clippingPlanes=x.clippingPlanes,N.clipIntersection=x.clipIntersection,N.displacementMap=x.displacementMap,N.displacementScale=x.displacementScale,N.displacementBias=x.displacementBias,N.wireframeLinewidth=x.wireframeLinewidth,N.linewidth=x.linewidth,w.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let H=i.properties.get(N);H.light=w}return N}function y(E,x,w,k,N,O){if(E.visible===!1)return;if(E.layers.test(N)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&O===lo)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let I=e.update(E),q=E.material;if(Array.isArray(q)){let K=I.groups;for(let V=0,pe=K.length;V<pe;V++){let $=K[V],re=q[$.materialIndex];if(re&&re.visible){let le=A(E,re,k,O);E.onBeforeShadow(i,E,x,w,I,le,$),i.renderBufferDirect(w,null,I,le,E,$),E.onAfterShadow(i,E,x,w,I,le,$)}}}else if(q.visible){let K=A(E,q,k,O);E.onBeforeShadow(i,E,x,w,I,K,null),i.renderBufferDirect(w,null,I,K,E,null),E.onAfterShadow(i,E,x,w,I,K,null)}}let J=E.children;for(let I=0,q=J.length;I<q;I++)y(J[I],x,w,k,N,O)}function R(E){E.target.removeEventListener("dispose",R);for(let w in c){let k=c[w],N=E.target.uuid;N in k&&(k[N].dispose(),delete k[N])}}}function c1(i,e){function t(){let L=!1,oe=new pn,ee=null,Ie=new pn(0,0,0,0);return{setMask:function(Me){ee!==Me&&!L&&(i.colorMask(Me,Me,Me,Me),ee=Me)},setLocked:function(Me){L=Me},setClear:function(Me,ye,je,dt,xe){xe===!0&&(Me*=dt,ye*=dt,je*=dt),oe.set(Me,ye,je,dt),Ie.equals(oe)===!1&&(i.clearColor(Me,ye,je,dt),Ie.copy(oe))},reset:function(){L=!1,ee=null,Ie.set(-1,0,0,0)}}}function n(){let L=!1,oe=!1,ee=null,Ie=null,Me=null;return{setReversed:function(ye){if(oe!==ye){let je=e.get("EXT_clip_control");ye?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),oe=ye;let dt=Me;Me=null,this.setClear(dt)}},getReversed:function(){return oe},setTest:function(ye){ye?Pe(i.DEPTH_TEST):We(i.DEPTH_TEST)},setMask:function(ye){ee!==ye&&!L&&(i.depthMask(ye),ee=ye)},setFunc:function(ye){if(oe&&(ye=xf[ye]),Ie!==ye){switch(ye){case nl:i.depthFunc(i.NEVER);break;case il:i.depthFunc(i.ALWAYS);break;case sl:i.depthFunc(i.LESS);break;case qr:i.depthFunc(i.LEQUAL);break;case rl:i.depthFunc(i.EQUAL);break;case ol:i.depthFunc(i.GEQUAL);break;case al:i.depthFunc(i.GREATER);break;case ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=ye}},setLocked:function(ye){L=ye},setClear:function(ye){Me!==ye&&(Me=ye,oe&&(ye=1-ye),i.clearDepth(ye))},reset:function(){L=!1,ee=null,Ie=null,Me=null,oe=!1}}}function s(){let L=!1,oe=null,ee=null,Ie=null,Me=null,ye=null,je=null,dt=null,xe=null;return{setTest:function(st){L||(st?Pe(i.STENCIL_TEST):We(i.STENCIL_TEST))},setMask:function(st){oe!==st&&!L&&(i.stencilMask(st),oe=st)},setFunc:function(st,it,Oe){(ee!==st||Ie!==it||Me!==Oe)&&(i.stencilFunc(st,it,Oe),ee=st,Ie=it,Me=Oe)},setOp:function(st,it,Oe){(ye!==st||je!==it||dt!==Oe)&&(i.stencilOp(st,it,Oe),ye=st,je=it,dt=Oe)},setLocked:function(st){L=st},setClear:function(st){xe!==st&&(i.clearStencil(st),xe=st)},reset:function(){L=!1,oe=null,ee=null,Ie=null,Me=null,ye=null,je=null,dt=null,xe=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],S=null,m=!1,g=null,b=null,A=null,y=null,R=null,E=null,x=null,w=new Ye(0,0,0),k=0,N=!1,O=null,H=null,J=null,I=null,q=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,pe=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec($)[1]),V=pe>=1):$.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=pe>=2);let re=null,le={},ke=i.getParameter(i.SCISSOR_BOX),Ze=i.getParameter(i.VIEWPORT),ne=new pn().fromArray(ke),Re=new pn().fromArray(Ze);function Ue(L,oe,ee,Ie){let Me=new Uint8Array(4),ye=i.createTexture();i.bindTexture(L,ye),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<ee;je++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(oe+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return ye}let Qe={};Qe[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),Qe[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Qe[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Qe[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Pe(i.DEPTH_TEST),o.setFunc(qr),Fe(!1),De(Rh),Pe(i.CULL_FACE),ge(xr);function Pe(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function We(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Nt(L,oe){return d[L]!==oe?(i.bindFramebuffer(L,oe),d[L]=oe,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=oe),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function lt(L,oe){let ee=p,Ie=!1;if(L){ee=f.get(oe),ee===void 0&&(ee=[],f.set(oe,ee));let Me=L.textures;if(ee.length!==Me.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,je=Me.length;ye<je;ye++)ee[ye]=i.COLOR_ATTACHMENT0+ye;ee.length=Me.length,Ie=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(ee)}function St(L){return S!==L?(i.useProgram(L),S=L,!0):!1}let wt={[_r]:i.FUNC_ADD,[zd]:i.FUNC_SUBTRACT,[kd]:i.FUNC_REVERSE_SUBTRACT};wt[Gd]=i.MIN,wt[Vd]=i.MAX;let ce={[Hd]:i.ZERO,[Wd]:i.ONE,[qd]:i.SRC_COLOR,[Lh]:i.SRC_ALPHA,[$d]:i.SRC_ALPHA_SATURATE,[Jd]:i.DST_COLOR,[Yd]:i.DST_ALPHA,[Xd]:i.ONE_MINUS_SRC_COLOR,[Dh]:i.ONE_MINUS_SRC_ALPHA,[Kd]:i.ONE_MINUS_DST_COLOR,[Zd]:i.ONE_MINUS_DST_ALPHA,[Qd]:i.CONSTANT_COLOR,[jd]:i.ONE_MINUS_CONSTANT_COLOR,[ef]:i.CONSTANT_ALPHA,[tf]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(L,oe,ee,Ie,Me,ye,je,dt,xe,st){if(L===xr){m===!0&&(We(i.BLEND),m=!1);return}if(m===!1&&(Pe(i.BLEND),m=!0),L!==Bd){if(L!==g||st!==N){if((b!==_r||R!==_r)&&(i.blendEquation(i.FUNC_ADD),b=_r,R=_r),st)switch(L){case co:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ci:i.blendFunc(i.ONE,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ih:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pt("WebGLState: Invalid blending: ",L);break}else switch(L){case co:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ph:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ih:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",L);break}A=null,y=null,E=null,x=null,w.set(0,0,0),k=0,g=L,N=st}return}Me=Me||oe,ye=ye||ee,je=je||Ie,(oe!==b||Me!==R)&&(i.blendEquationSeparate(wt[oe],wt[Me]),b=oe,R=Me),(ee!==A||Ie!==y||ye!==E||je!==x)&&(i.blendFuncSeparate(ce[ee],ce[Ie],ce[ye],ce[je]),A=ee,y=Ie,E=ye,x=je),(dt.equals(w)===!1||xe!==k)&&(i.blendColor(dt.r,dt.g,dt.b,xe),w.copy(dt),k=xe),g=L,N=!1}function ve(L,oe){L.side===bn?We(i.CULL_FACE):Pe(i.CULL_FACE);let ee=L.side===ci;oe&&(ee=!ee),Fe(ee),L.blending===co&&L.transparent===!1?ge(xr):ge(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let Ie=L.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ke(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Pe(i.SAMPLE_ALPHA_TO_COVERAGE):We(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(L){O!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),O=L)}function De(L){L!==Ud?(Pe(i.CULL_FACE),L!==H&&(L===Rh?i.cullFace(i.BACK):L===Fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):We(i.CULL_FACE),H=L}function ut(L){L!==J&&(V&&i.lineWidth(L),J=L)}function Ke(L,oe,ee){L?(Pe(i.POLYGON_OFFSET_FILL),(I!==oe||q!==ee)&&(I=oe,q=ee,o.getReversed()&&(oe=-oe,ee=-ee),i.polygonOffset(oe,ee))):We(i.POLYGON_OFFSET_FILL)}function Tt(L){L?Pe(i.SCISSOR_TEST):We(i.SCISSOR_TEST)}function Ve(L){L===void 0&&(L=i.TEXTURE0+K-1),re!==L&&(i.activeTexture(L),re=L)}function Mt(L,oe,ee){ee===void 0&&(re===null?ee=i.TEXTURE0+K-1:ee=re);let Ie=le[ee];Ie===void 0&&(Ie={type:void 0,texture:void 0},le[ee]=Ie),(Ie.type!==L||Ie.texture!==oe)&&(re!==ee&&(i.activeTexture(ee),re=ee),i.bindTexture(L,oe||Qe[L]),Ie.type=L,Ie.texture=oe)}function U(){let L=le[re];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Zt(){try{i.compressedTexImage2D(...arguments)}catch(L){pt("WebGLState:",L)}}function gt(){try{i.compressedTexImage3D(...arguments)}catch(L){pt("WebGLState:",L)}}function zt(){try{i.texSubImage2D(...arguments)}catch(L){pt("WebGLState:",L)}}function Ae(){try{i.texSubImage3D(...arguments)}catch(L){pt("WebGLState:",L)}}function en(){try{i.compressedTexSubImage2D(...arguments)}catch(L){pt("WebGLState:",L)}}function ot(){try{i.compressedTexSubImage3D(...arguments)}catch(L){pt("WebGLState:",L)}}function at(){try{i.texStorage2D(...arguments)}catch(L){pt("WebGLState:",L)}}function C(){try{i.texStorage3D(...arguments)}catch(L){pt("WebGLState:",L)}}function v(){try{i.texImage2D(...arguments)}catch(L){pt("WebGLState:",L)}}function Y(){try{i.texImage3D(...arguments)}catch(L){pt("WebGLState:",L)}}function Se(L){return u[L]!==void 0?u[L]:i.getParameter(L)}function ae(L,oe){u[L]!==oe&&(i.pixelStorei(L,oe),u[L]=oe)}function Ee(L){ne.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ne.copy(L))}function Le(L){Re.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Re.copy(L))}function ie(L,oe){let ee=c.get(oe);ee===void 0&&(ee=new WeakMap,c.set(oe,ee));let Ie=ee.get(L);Ie===void 0&&(Ie=i.getUniformBlockIndex(oe,L.name),i.uniformBlockBinding(oe,Ie,Ie),ee.set(L,Ie))}function se(L,oe,ee){let Me=c.get(oe).get(L);l[Me]!==ee&&(i.bindBufferBase(i.UNIFORM_BUFFER,Me,ee),l[Me]=ee)}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},re=null,le={},d={},l={},f=new WeakMap,p=[],S=null,m=!1,g=null,b=null,A=null,y=null,R=null,E=null,x=null,w=new Ye(0,0,0),k=0,N=!1,O=null,H=null,J=null,I=null,q=null,ne.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Pe,disable:We,bindFramebuffer:Nt,drawBuffers:lt,useProgram:St,setBlending:ge,setMaterial:ve,setFlipSided:Fe,setCullFace:De,setLineWidth:ut,setPolygonOffset:Ke,setScissorTest:Tt,activeTexture:Ve,bindTexture:Mt,unbindTexture:U,compressedTexImage2D:Zt,compressedTexImage3D:gt,texImage2D:v,texImage3D:Y,pixelStorei:ae,getParameter:Se,updateUBOMapping:ie,uniformBlockBinding:se,texStorage2D:at,texStorage3D:C,texSubImage2D:zt,texSubImage3D:Ae,compressedTexSubImage2D:en,compressedTexSubImage3D:ot,scissor:Ee,viewport:Le,reset:Ce}}function h1(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,S=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return m?new OffscreenCanvas(C,v):Oo("canvas")}function b(C,v,Y){let Se=1,ae=at(C);if((ae.width>Y||ae.height>Y)&&(Se=Y/Math.max(ae.width,ae.height)),Se<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Ee=Math.floor(Se*ae.width),Le=Math.floor(Se*ae.height);d===void 0&&(d=g(Ee,Le));let ie=v?g(Ee,Le):d;return ie.width=Ee,ie.height=Le,ie.getContext("2d").drawImage(C,0,0,Ee,Le),ft("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Ee+"x"+Le+")."),ie}else return"data"in C&&ft("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),C;return C}function A(C){return C.generateMipmaps}function y(C){i.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(C,v,Y,Se,ae,Ee=!1){if(C!==null){if(i[C]!==void 0)return i[C];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Le;Se&&(Le=e.get("EXT_texture_norm16"),Le||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=v;if(v===i.RED&&(Y===i.FLOAT&&(ie=i.R32F),Y===i.HALF_FLOAT&&(ie=i.R16F),Y===i.UNSIGNED_BYTE&&(ie=i.R8),Y===i.UNSIGNED_SHORT&&Le&&(ie=Le.R16_EXT),Y===i.SHORT&&Le&&(ie=Le.R16_SNORM_EXT)),v===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.R8UI),Y===i.UNSIGNED_SHORT&&(ie=i.R16UI),Y===i.UNSIGNED_INT&&(ie=i.R32UI),Y===i.BYTE&&(ie=i.R8I),Y===i.SHORT&&(ie=i.R16I),Y===i.INT&&(ie=i.R32I)),v===i.RG&&(Y===i.FLOAT&&(ie=i.RG32F),Y===i.HALF_FLOAT&&(ie=i.RG16F),Y===i.UNSIGNED_BYTE&&(ie=i.RG8),Y===i.UNSIGNED_SHORT&&Le&&(ie=Le.RG16_EXT),Y===i.SHORT&&Le&&(ie=Le.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RG16UI),Y===i.UNSIGNED_INT&&(ie=i.RG32UI),Y===i.BYTE&&(ie=i.RG8I),Y===i.SHORT&&(ie=i.RG16I),Y===i.INT&&(ie=i.RG32I)),v===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),Y===i.UNSIGNED_INT&&(ie=i.RGB32UI),Y===i.BYTE&&(ie=i.RGB8I),Y===i.SHORT&&(ie=i.RGB16I),Y===i.INT&&(ie=i.RGB32I)),v===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ie=i.RGBA32UI),Y===i.BYTE&&(ie=i.RGBA8I),Y===i.SHORT&&(ie=i.RGBA16I),Y===i.INT&&(ie=i.RGBA32I)),v===i.RGB&&(Y===i.UNSIGNED_SHORT&&Le&&(ie=Le.RGB16_EXT),Y===i.SHORT&&Le&&(ie=Le.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),v===i.RGBA){let se=Ee?Fo:Vt.getTransfer(ae);Y===i.FLOAT&&(ie=i.RGBA32F),Y===i.HALF_FLOAT&&(ie=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ie=se===jt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&Le&&(ie=Le.RGBA16_EXT),Y===i.SHORT&&Le&&(ie=Le.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function x(C,v){let Y;return C?v===null||v===Zi||v===vr?Y=i.DEPTH24_STENCIL8:v===Ji?Y=i.DEPTH32F_STENCIL8:v===fo&&(Y=i.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Zi||v===vr?Y=i.DEPTH_COMPONENT24:v===Ji?Y=i.DEPTH_COMPONENT32F:v===fo&&(Y=i.DEPTH_COMPONENT16),Y}function w(C,v){return A(C)===!0||C.isFramebufferTexture&&C.minFilter!==qn&&C.minFilter!==Zn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function k(C){let v=new WeakRef(C);n.get(C).__ref=v,p.add(v),S.register(C,v,v)}function N(C){let v=n.get(C).__ref;v!==void 0&&(p.delete(v),S.unregister(v))}function O(C){J(C.target)}function H(C){I(C.target)}function J(C){C.removeEventListener("dispose",O),N(C),K(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function I(C){C.removeEventListener("dispose",H),N(C),pe(C)}function q(){for(let C of p){let v=C.deref();v!==void 0&&(v.isRenderTarget===!0?I(v):J(v))}p.clear(),u.clear()}function K(C){let v=n.get(C);if(v.__webglInit===void 0)return;let Y=C.source,Se=f.get(Y);if(Se){let ae=Se[v.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&V(C),Object.keys(Se).length===0&&f.delete(Y)}n.remove(C)}function V(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let Y=C.source,Se=f.get(Y);delete Se[v.__cacheKey],o.memory.textures--}function pe(C){let v=n.get(C);v.__depthDisposeCallback&&v.__depthDisposeCallback();let Y=C.depthTexture;if(Y&&Y.renderTarget===C&&J(Y),C.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(v.__webglFramebuffer[ae]))for(let Ee=0;Ee<v.__webglFramebuffer[ae].length;Ee++)i.deleteFramebuffer(v.__webglFramebuffer[ae][Ee]);else i.deleteFramebuffer(v.__webglFramebuffer[ae]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ae])}else{if(Array.isArray(v.__webglFramebuffer))for(let ae=0;ae<v.__webglFramebuffer.length;ae++)i.deleteFramebuffer(v.__webglFramebuffer[ae]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ae=0;ae<v.__webglColorRenderbuffer.length;ae++)v.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ae]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Se=C.textures;for(let ae=0,Ee=Se.length;ae<Ee;ae++){let Le=n.get(Se[ae]);Le.__webglTexture&&(i.deleteTexture(Le.__webglTexture),o.memory.textures--),n.remove(Se[ae])}n.remove(C)}let $=0;function re(){$=0}function le(){return $}function ke(C){$=C}function Ze(){let C=$;return C>=s.maxTextures&&ft("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,C}function ne(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.mipmapsAutoUpdate),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function Re(C,v){let Y=n.get(C);if(C.isVideoTexture&&en(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Y.__version!==C.version){let Se=C.image;if(Se===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(Y,C,v);return}}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+v)}function Ue(C,v){let Y=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){ve(Y,C,v);return}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+v)}function Qe(C,v){let Y=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){ve(Y,C,v);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+v)}function Pe(C,v){let Y=n.get(C);if(C.version>0&&Y.__version!==C.version){Fe(Y,C,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+v)}let We={[Xi]:i.REPEAT,[is]:i.CLAMP_TO_EDGE,[Xr]:i.MIRRORED_REPEAT},Nt={[qn]:i.NEAREST,[rf]:i.NEAREST_MIPMAP_NEAREST,[oa]:i.NEAREST_MIPMAP_LINEAR,[Zn]:i.LINEAR,[Bl]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},lt={[cf]:i.NEVER,[$h]:i.ALWAYS,[hf]:i.LESS,[Jh]:i.LEQUAL,[uf]:i.EQUAL,[Kh]:i.GEQUAL,[df]:i.GREATER,[ff]:i.NOTEQUAL};function St(C,v){if(v.type===Ji&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Zn||v.magFilter===Bl||v.magFilter===oa||v.magFilter===Yi||v.minFilter===Zn||v.minFilter===Bl||v.minFilter===oa||v.minFilter===Yi)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,We[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,We[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,We[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Nt[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Nt[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,lt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qn||v.minFilter!==oa&&v.minFilter!==Yi||v.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function wt(C,v){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",O),k(v));let Se=v.source,ae=f.get(Se);ae===void 0&&(ae={},f.set(Se,ae));let Ee=ne(v);if(Ee!==C.__cacheKey){ae[Ee]===void 0&&(ae[Ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ae[Ee].usedTimes++;let Le=ae[C.__cacheKey];Le!==void 0&&(ae[C.__cacheKey].usedTimes--,Le.usedTimes===0&&V(v)),C.__cacheKey=Ee,C.__webglTexture=ae[Ee].texture}return Y}function ce(C,v,Y){return Math.floor(Math.floor(C/Y)/v)}function ge(C,v,Y,Se){let Ee=C.updateRanges;if(Ee.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,Y,Se,v.data);else{Ee.sort((L,oe)=>L.start-oe.start);let Le=0;for(let L=1;L<Ee.length;L++){let oe=Ee[Le],ee=Ee[L],Ie=oe.start+oe.count,Me=ce(ee.start,v.width,4),ye=ce(oe.start,v.width,4);ee.start<=Ie+1&&Me===ye&&ce(ee.start+ee.count-1,v.width,4)===Me?oe.count=Math.max(oe.count,ee.start+ee.count-oe.start):(++Le,Ee[Le]=ee)}Ee.length=Le+1;let ie=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),Ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let L=0,oe=Ee.length;L<oe;L++){let ee=Ee[L],Ie=Math.floor(ee.start/4),Me=Math.ceil(ee.count/4),ye=Ie%v.width,je=Math.floor(Ie/v.width),dt=Me,xe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(i.UNPACK_SKIP_ROWS,je),t.texSubImage2D(i.TEXTURE_2D,0,ye,je,dt,xe,Y,Se,v.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function ve(C,v,Y){let Se=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Se=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Se=i.TEXTURE_3D);let ae=wt(C,v),Ee=v.source;t.bindTexture(Se,C.__webglTexture,i.TEXTURE0+Y);let Le=n.get(Ee);if(Ee.version!==Le.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let xe=Vt.getPrimaries(Vt.workingColorSpace),st=v.colorSpace===Cs?null:Vt.getPrimaries(v.colorSpace),it=v.colorSpace===Cs||xe===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let se=b(v.image,!1,s.maxTextureSize);se=ot(v,se);let Ce=r.convert(v.format,v.colorSpace),L=r.convert(v.type),oe=E(v.internalFormat,Ce,L,v.normalized,v.colorSpace,v.isVideoTexture);St(Se,v);let ee,Ie=v.mipmaps,Me=v.isVideoTexture!==!0,ye=Le.__version===void 0||ae===!0,je=Ee.dataReady,dt=w(v,se);if(v.isDepthTexture)oe=x(v.format===Es,v.type),ye&&(Me?t.texStorage2D(i.TEXTURE_2D,1,oe,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,oe,se.width,se.height,0,Ce,L,null));else if(v.isDataTexture)if(Ie.length>0){Me&&ye&&t.texStorage2D(i.TEXTURE_2D,dt,oe,Ie[0].width,Ie[0].height);for(let xe=0,st=Ie.length;xe<st;xe++)ee=Ie[xe],Me?je&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,ee.width,ee.height,Ce,L,ee.data):t.texImage2D(i.TEXTURE_2D,xe,oe,ee.width,ee.height,0,Ce,L,ee.data);v.generateMipmaps=!1}else Me?(ye&&t.texStorage2D(i.TEXTURE_2D,dt,oe,se.width,se.height),je&&ge(v,se,Ce,L)):t.texImage2D(i.TEXTURE_2D,0,oe,se.width,se.height,0,Ce,L,se.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Me&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,dt,oe,Ie[0].width,Ie[0].height,se.depth);for(let xe=0,st=Ie.length;xe<st;xe++)if(ee=Ie[xe],v.format!==Ri)if(Ce!==null)if(Me){if(je)if(v.layerUpdates.size>0){let it=su(ee.width,ee.height,v.format,v.type);for(let Oe of v.layerUpdates){let Rt=ee.data.subarray(Oe*it/ee.data.BYTES_PER_ELEMENT,(Oe+1)*it/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,Oe,ee.width,ee.height,1,Ce,Rt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,ee.width,ee.height,se.depth,Ce,ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xe,oe,ee.width,ee.height,se.depth,0,ee.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?je&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,ee.width,ee.height,se.depth,Ce,L,ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,xe,oe,ee.width,ee.height,se.depth,0,Ce,L,ee.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Me&&ye&&t.texStorage2D(i.TEXTURE_2D,dt,oe,Ie[0].width,Ie[0].height);for(let xe=0,st=Ie.length;xe<st;xe++)ee=Ie[xe],v.format!==Ri?Ce!==null?Me?je&&t.compressedTexSubImage2D(i.TEXTURE_2D,xe,0,0,ee.width,ee.height,Ce,ee.data):t.compressedTexImage2D(i.TEXTURE_2D,xe,oe,ee.width,ee.height,0,ee.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?je&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,ee.width,ee.height,Ce,L,ee.data):t.texImage2D(i.TEXTURE_2D,xe,oe,ee.width,ee.height,0,Ce,L,ee.data)}else if(v.isDataArrayTexture)if(Me){if(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,dt,oe,se.width,se.height,se.depth),je)if(v.layerUpdates.size>0){let xe=su(se.width,se.height,v.format,v.type);for(let st of v.layerUpdates){let it=se.data.subarray(st*xe/se.data.BYTES_PER_ELEMENT,(st+1)*xe/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,se.width,se.height,1,Ce,L,it)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Ce,L,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,oe,se.width,se.height,se.depth,0,Ce,L,se.data);else if(v.isData3DTexture)Me?(ye&&t.texStorage3D(i.TEXTURE_3D,dt,oe,se.width,se.height,se.depth),je&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Ce,L,se.data)):t.texImage3D(i.TEXTURE_3D,0,oe,se.width,se.height,se.depth,0,Ce,L,se.data);else if(v.isFramebufferTexture){if(ye)if(Me)t.texStorage2D(i.TEXTURE_2D,dt,oe,se.width,se.height);else{let xe=se.width,st=se.height;for(let it=0;it<dt;it++)t.texImage2D(i.TEXTURE_2D,it,oe,xe,st,0,Ce,L,null),xe>>=1,st>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let xe=i.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),se.parentNode!==xe){xe.appendChild(se),u.add(v),xe.onpaint=st=>{let it=st.changedElements;for(let Oe of u)it.includes(Oe.image)&&(Oe.needsUpdate=!0)},xe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{let it=i.RGBA,Oe=i.RGBA,Rt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,it,Oe,Rt,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Me&&ye){let xe=at(Ie[0]);t.texStorage2D(i.TEXTURE_2D,dt,oe,xe.width,xe.height)}for(let xe=0,st=Ie.length;xe<st;xe++)ee=Ie[xe],Me?je&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,Ce,L,ee):t.texImage2D(i.TEXTURE_2D,xe,oe,Ce,L,ee);v.generateMipmaps=!1}else if(Me){if(ye){let xe=at(se);t.texStorage2D(i.TEXTURE_2D,dt,oe,xe.width,xe.height)}je&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,L,se)}else t.texImage2D(i.TEXTURE_2D,0,oe,Ce,L,se);A(v)&&v.mipmapsAutoUpdate===!0&&y(Se),Le.__version=Ee.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Fe(C,v,Y){if(v.image.length!==6)return;let Se=wt(C,v),ae=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Y);let Ee=n.get(ae);if(ae.version!==Ee.__version||Se===!0){t.activeTexture(i.TEXTURE0+Y);let Le=Vt.getPrimaries(Vt.workingColorSpace),ie=v.colorSpace===Cs?null:Vt.getPrimaries(v.colorSpace),se=v.colorSpace===Cs||Le===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Ce=v.isCompressedTexture||v.image[0].isCompressedTexture,L=v.image[0]&&v.image[0].isDataTexture,oe=[];for(let Oe=0;Oe<6;Oe++)!Ce&&!L?oe[Oe]=b(v.image[Oe],!0,s.maxCubemapSize):oe[Oe]=L?v.image[Oe].image:v.image[Oe],oe[Oe]=ot(v,oe[Oe]);let ee=oe[0],Ie=r.convert(v.format,v.colorSpace),Me=r.convert(v.type),ye=E(v.internalFormat,Ie,Me,v.normalized,v.colorSpace),je=v.isVideoTexture!==!0,dt=Ee.__version===void 0||Se===!0,xe=ae.dataReady,st=w(v,ee);St(i.TEXTURE_CUBE_MAP,v);let it;if(v.isDepthTexture){if(ye=x(v.format===Es,v.type),dt)if(je)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ye,ee.width,ee.height);else for(let Oe=0;Oe<6;Oe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,ye,ee.width,ee.height,0,Ie,Me,null)}else if(Ce){je&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,st,ye,ee.width,ee.height);for(let Oe=0;Oe<6;Oe++){it=oe[Oe].mipmaps;for(let Rt=0;Rt<it.length;Rt++){let mn=it[Rt];v.format!==Ri?Ie!==null?je?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Rt,0,0,mn.width,mn.height,Ie,mn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Rt,ye,mn.width,mn.height,0,mn.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Rt,0,0,mn.width,mn.height,Ie,Me,mn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Rt,ye,mn.width,mn.height,0,Ie,Me,mn.data)}}}else{if(it=v.mipmaps,je&&dt){it.length>0&&st++;let Oe=at(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,st,ye,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(L){je?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,oe[Oe].width,oe[Oe].height,Ie,Me,oe[Oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,ye,oe[Oe].width,oe[Oe].height,0,Ie,Me,oe[Oe].data);for(let Rt=0;Rt<it.length;Rt++){let fi=it[Rt].image[Oe].image;je?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Rt+1,0,0,fi.width,fi.height,Ie,Me,fi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Rt+1,ye,fi.width,fi.height,0,Ie,Me,fi.data)}}else{je?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,Ie,Me,oe[Oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,ye,Ie,Me,oe[Oe]);for(let Rt=0;Rt<it.length;Rt++){let mn=it[Rt];je?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Rt+1,0,0,Ie,Me,mn.image[Oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Rt+1,ye,Ie,Me,mn.image[Oe])}}}A(v)&&v.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),Ee.__version=ae.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function De(C,v,Y,Se,ae,Ee){let Le=r.convert(Y.format,Y.colorSpace),ie=r.convert(Y.type),se=E(Y.internalFormat,Le,ie,Y.normalized,Y.colorSpace),Ce=n.get(v),L=n.get(Y);if(L.__renderTarget=v,!Ce.__hasExternalTextures){let oe=Math.max(1,v.width>>Ee),ee=Math.max(1,v.height>>Ee);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,Ee,se,oe,ee,v.depth,0,Le,ie,null):t.texImage2D(ae,Ee,se,oe,ee,0,Le,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Ae(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,ae,L.__webglTexture,0,zt(v)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Se,ae,L.__webglTexture,Ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(C,v,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let Se=v.depthTexture,ae=Se&&Se.isDepthTexture?Se.type:null,Ee=x(v.stencilBuffer,ae),Le=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ae(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt(v),Ee,v.width,v.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt(v),Ee,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,C)}else{let Se=v.textures;for(let ae=0;ae<Se.length;ae++){let Ee=Se[ae],Le=r.convert(Ee.format,Ee.colorSpace),ie=r.convert(Ee.type),se=E(Ee.internalFormat,Le,ie,Ee.normalized,Ee.colorSpace);Ae(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt(v),se,v.width,v.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt(v),se,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,se,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ke(C,v,Y){let Se=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=n.get(v.depthTexture);ae.__renderTarget=v;let Ee=Se?v.depthTexture.image[0]:v.depthTexture.image;(!ae.__webglTexture||Ee.width!==v.width||Ee.height!==v.height)&&(Ee.width=v.width,Ee.height=v.height,v.depthTexture.needsUpdate=!0),Se?Pe(v.depthTexture,0):Re(v.depthTexture,0);let Le=ae.__webglTexture,ie=zt(v),se=Se?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,Ce=v.depthTexture.format===Es?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===bs)Ae(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,se,Le,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,se,Le,0);else if(v.depthTexture.format===Es)Ae(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,se,Le,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,se,Le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Tt(C){let v=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let Se=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Se){let ae=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Se.removeEventListener("dispose",ae)};Se.addEventListener("dispose",ae),v.__depthDisposeCallback=ae}v.__boundDepthTexture=Se}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(Y)for(let Se=0;Se<6;Se++)Ke(v.__webglFramebuffer[Se],C,Se);else C.texture.mipmaps.length>0?Ke(v.__webglFramebuffer[0],C,0):Ke(v.__webglFramebuffer,C,0);else if(Y){v.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Se]),v.__webglDepthbuffer[Se]===void 0)v.__webglDepthbuffer[Se]=i.createRenderbuffer(),ut(v.__webglDepthbuffer[Se],C,!1);else{let ae=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=v.__webglDepthbuffer[Se];i.bindRenderbuffer(i.RENDERBUFFER,Ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Ee)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ut(v.__webglDepthbuffer,C,!1);else{let ae=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(C,v,Y){let Se=n.get(C);v!==void 0&&De(Se.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Tt(C)}function Mt(C){let v=C.texture,Y=n.get(C),Se=n.get(v);C.addEventListener("dispose",H),k(C);let ae=C.textures,Ee=C.isWebGLCubeRenderTarget===!0,Le=ae.length>1;if(Le||(Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture()),Se.__version=v.version,o.memory.textures++),Ee){Y.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(v.mipmaps.length>0){Y.__webglFramebuffer[ie]=[];for(let se=0;se<v.mipmaps.length;se++)Y.__webglFramebuffer[ie][se]=i.createFramebuffer()}else Y.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(v.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ie=0;ie<v.mipmaps.length;ie++)Y.__webglFramebuffer[ie]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Le)for(let ie=0,se=ae.length;ie<se;ie++){let Ce=n.get(ae[ie]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Ae(C)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ie=0;ie<ae.length;ie++){let se=ae[ie];Y.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ie]);let Ce=r.convert(se.format,se.colorSpace),L=r.convert(se.type),oe=E(se.internalFormat,Ce,L,se.normalized,se.colorSpace,C.isXRRenderTarget===!0),ee=zt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,oe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(i.TEXTURE_CUBE_MAP,Se.__webglTexture),St(i.TEXTURE_CUBE_MAP,v);for(let ie=0;ie<6;ie++)if(v.mipmaps.length>0)for(let se=0;se<v.mipmaps.length;se++)De(Y.__webglFramebuffer[ie][se],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,se);else De(Y.__webglFramebuffer[ie],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);A(v)?y(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(Le){for(let ie=0,se=ae.length;ie<se;ie++){let Ce=ae[ie],L=n.get(Ce),oe=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,L.__webglTexture),St(oe,Ce),De(Y.__webglFramebuffer,C,Ce,i.COLOR_ATTACHMENT0+ie,oe,0),A(Ce)&&y(oe)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ie=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,Se.__webglTexture),St(ie,v),v.mipmaps.length>0)for(let se=0;se<v.mipmaps.length;se++)De(Y.__webglFramebuffer[se],C,v,i.COLOR_ATTACHMENT0,ie,se);else De(Y.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,ie,0);A(v)?y(ie):v.mipmaps.length>0&&i.texParameteri(ie,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&Tt(C)}function U(C){let v=C.textures;for(let Y=0,Se=v.length;Y<Se;Y++){let ae=v[Y];if(A(ae)&&ae.mipmapsAutoUpdate===!0){let Ee=R(C),Le=n.get(ae).__webglTexture;t.bindTexture(Ee,Le),y(Ee),t.unbindTexture()}}}let Zt=[];function gt(C){if(C.samples>0){if(Ae(C)===!1){let v=C.textures,Y=C.width,Se=C.height,ae=i.COLOR_BUFFER_BIT,Ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(C),ie=v.length>1;if(ie)for(let Ce=0;Ce<v.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ce=0;Ce<v.length;Ce++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);let L=n.get(v[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,Y,Se,0,0,Y,Se,ae,i.NEAREST),l===!0&&(Zt.length=0,Zt.push(i.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Zt.push(Ee),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Ce=0;Ce<v.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);let L=n.get(v[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function zt(C){return Math.min(s.maxSamples,C.samples)}function Ae(C){let v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function en(C){let v=o.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function ot(C,v){let Y=C.colorSpace,Se=C.format,ae=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==Uo&&Y!==Cs&&(Vt.getTransfer(Y)===jt?(Se!==Ri||ae!==xi)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",Y)),v}function at(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Ze,this.resetTextureUnits=re,this.getTextureUnits=le,this.setTextureUnits=ke,this.setTexture2D=Re,this.setTexture2DArray=Ue,this.setTexture3D=Qe,this.setTextureCube=Pe,this.rebindTextures=Ve,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ae,this.dispose=q}function u1(i,e){function t(n,s=Cs){let r,o=Vt.getTransfer(s);if(n===xi)return i.UNSIGNED_BYTE;if(n===kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vh)return i.BYTE;if(n===Hh)return i.SHORT;if(n===fo)return i.UNSIGNED_SHORT;if(n===zl)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===Ji)return i.FLOAT;if(n===Ki)return i.HALF_FLOAT;if(n===Xh)return i.ALPHA;if(n===Yh)return i.RGB;if(n===Ri)return i.RGBA;if(n===bs)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===Zh)return i.RED;if(n===Vl)return i.RED_INTEGER;if(n===Qs)return i.RG;if(n===Hl)return i.RG_INTEGER;if(n===Wl)return i.RGBA_INTEGER;if(n===aa||n===la||n===ca||n===ha)if(o===jt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ql||n===Xl||n===Yl||n===Zl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jl||n===Kl||n===$l||n===Ql||n===jl||n===ua||n===ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jl||n===Kl)return o===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$l)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ql)return r.COMPRESSED_R11_EAC;if(n===jl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ua)return r.COMPRESSED_RG11_EAC;if(n===ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tc)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nc)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ic)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rc)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oc)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ac)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hc)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uc)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fc)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pc)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mc||n===gc||n===xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mc)return o===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_c||n===yc||n===da||n===vc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_c)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var d1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f1=`
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

}`,_u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ai({vertexShader:d1,fragmentShader:f1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new Qt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yu=class extends ss{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,S=typeof XRWebGLBinding<"u",m=new _u,g={},b=t.getContextAttributes(),A=null,y=null,R=[],E=[],x=new me,w=null,k=null,N=new Bn;N.viewport=new pn;let O=new Bn;O.viewport=new pn;let H=[N,O],J=new Dl,I=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let Re=R[ne];return Re===void 0&&(Re=new $r,R[ne]=Re),Re.getTargetRaySpace()},this.getControllerGrip=function(ne){let Re=R[ne];return Re===void 0&&(Re=new $r,R[ne]=Re),Re.getGripSpace()},this.getHand=function(ne){let Re=R[ne];return Re===void 0&&(Re=new $r,R[ne]=Re),Re.getHandSpace()};function K(ne){let Re=E.indexOf(ne.inputSource);if(Re===-1)return;let Ue=R[Re];Ue!==void 0&&(Ue.update(ne.inputSource,ne.frame,c||o),Ue.dispatchEvent({type:ne.type,data:ne.inputSource}))}function V(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",pe);for(let ne=0;ne<R.length;ne++){let Re=E[ne];Re!==null&&(E[ne]=null,R[ne].disconnect(Re))}I=null,q=null,m.reset();for(let ne in g)delete g[ne];if(e.setRenderTarget(A),f=null,d=null,u=null,s=null,y=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),k!==null){let ne=k.camera;ne.fov=k.fov,ne.zoom=k.zoom,ne.updateProjectionMatrix(),k=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",V),s.addEventListener("inputsourceschange",pe),b.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,Qe=null,Pe=null;b.depth&&(Pe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ue=b.stencil?Es:bs,Qe=b.stencil?vr:Zi);let We={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(We),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ti(d.textureWidth,d.textureHeight,{format:Ri,type:xi,depthTexture:new Ts(d.textureWidth,d.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ue={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ti(f.framebufferWidth,f.framebufferHeight,{format:Ri,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function pe(ne){for(let Re=0;Re<ne.removed.length;Re++){let Ue=ne.removed[Re],Qe=E.indexOf(Ue);Qe>=0&&(E[Qe]=null,R[Qe].disconnect(Ue))}for(let Re=0;Re<ne.added.length;Re++){let Ue=ne.added[Re],Qe=E.indexOf(Ue);if(Qe===-1){for(let We=0;We<R.length;We++)if(We>=E.length){E.push(Ue),Qe=We;break}else if(E[We]===null){E[We]=Ue,Qe=We;break}if(Qe===-1)break}let Pe=R[Qe];Pe&&Pe.connect(Ue)}}function $(ne,Re){Re===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(Re.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let Re=ne.near,Ue=ne.far;m.texture!==null&&(m.depthNear>0&&(Re=m.depthNear),m.depthFar>0&&(Ue=m.depthFar)),J.near=O.near=N.near=Re,J.far=O.far=N.far=Ue,(I!==J.near||q!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),I=J.near,q=J.far),J.layers.mask=ne.layers.mask|6,N.layers.mask=J.layers.mask&-5,O.layers.mask=J.layers.mask&-3;let Qe=ne.parent,Pe=J.cameras;$(J,Qe);for(let We=0;We<Pe.length;We++)$(Pe[We],Qe);J.projectionMatrix.copy(N.projectionMatrix),J.projectionMatrixInverse.copy(N.projectionMatrixInverse),k===null&&ne.isPerspectiveCamera&&(k={camera:ne,fov:ne.fov,zoom:ne.zoom}),re(ne,J,Qe)};function re(ne,Re,Ue){Ue===null?ne.matrix.copy(Re.matrixWorld):(ne.matrix.copy(Ue.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(Re.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(Re.projectionMatrix),ne.projectionMatrixInverse.copy(Re.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=zo*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(J)},this.getCameraTexture=function(ne){return g[ne]};let le=null;function ke(ne,Re){if(h=Re.getViewerPose(c||o),p=Re,h!==null){let Ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Qe=!1;Ue.length!==J.cameras.length&&(J.cameras.length=0,Qe=!0);for(let lt=0;lt<Ue.length;lt++){let St=Ue[lt],wt=null;if(f!==null)wt=f.getViewport(St);else{let ge=u.getViewSubImage(d,St);wt=ge.viewport,lt===0&&(e.setRenderTargetTextures(y,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(y))}let ce=H[lt];ce===void 0&&(ce=new Bn,ce.layers.enable(lt),ce.viewport=new pn,H[lt]=ce),ce.matrix.fromArray(St.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(St.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(wt.x,wt.y,wt.width,wt.height),lt===0&&(J.matrix.copy(ce.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Qe===!0&&J.cameras.push(ce)}let Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){u=n.getBinding();let lt=u.getDepthInformation(Ue[0]);lt&&lt.isValid&&lt.texture&&m.init(lt,s.renderState)}if(Pe&&Pe.includes("camera-access")&&S){e.state.unbindTexture(),u=n.getBinding();for(let lt=0;lt<Ue.length;lt++){let St=Ue[lt].camera;if(St){let wt=g[St];wt||(wt=new Xo,g[St]=wt);let ce=u.getCameraImage(St);wt.sourceTexture=ce}}}}for(let Ue=0;Ue<R.length;Ue++){let Qe=E[Ue],Pe=R[Ue];Qe!==null&&Pe!==void 0&&Pe.update(Qe,Re,c||o)}le&&le(ne,Re),Re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Re}),p=null}let Ze=new $f;Ze.setAnimationLoop(ke),this.setAnimationLoop=function(ne){le=ne},this.dispose=function(){}}},p1=new ln,ap=new vt;ap.set(-1,0,0,0,1,0,0,0,1);function m1(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,tu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,b,A,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),S(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,b,A):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===ci&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===ci&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let b=e.get(g),A=b.envMap,y=b.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(p1.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ap),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,b,A){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=A*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,b){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ci&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function S(m,g){let b=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function g1(i,e,t,n){let s={},r={};function o(b,A){let y=A.program;n.uniformBlockBinding(b,y,s[b.id])}function a(b,A){let y=s[b.id];y===void 0&&(p(b),y=l(b),s[b.id]=y,b.addEventListener("dispose",m));let R=A.program;n.updateUBOMapping(b,R);let E=e.render.frame;r[b.id]!==E&&(c(b),r[b.id]=E)}function l(b){let A=i.createBuffer(),y=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,y,R),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(b){let A=s[b.id],y=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let E=0,x=y.length;E<x;E++){let w=y[E];if(Array.isArray(w))for(let k=0,N=w.length;k<N;k++)h(w[k],E,k,R);else h(w,E,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(b,A,y,R){if(d(b,A,y,R)===!0){let E=b.__offset,x=b.value;if(Array.isArray(x)){let w=0;for(let k=0;k<x.length;k++){let N=x[k],O=S(N,!0);u(N,b.__data,w),w+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,b.__data)}}function u(b,A,y){typeof b=="number"||typeof b=="boolean"?A[y]=b:b.isMatrix3?(A[y]=b.elements[0],A[y+1]=b.elements[1],A[y+2]=b.elements[2],A[y+3]=0,A[y+4]=b.elements[3],A[y+5]=b.elements[4],A[y+6]=b.elements[5],A[y+7]=0,A[y+8]=b.elements[6],A[y+9]=b.elements[7],A[y+10]=b.elements[8],A[y+11]=0):ArrayBuffer.isView(b)?A.set(b.subarray(0,A.length-y),y):b.toArray(A,y)}function d(b,A,y,R){let E=b.value,x=A+"_"+y;if(Array.isArray(E)){R[x]===void 0&&(R[x]=[]);let w=R[x],k=!1;for(let N=0;N<E.length;N++)f(E[N],w,N)===!0&&(k=!0);return k}return f(E,R,x)}function f(b,A,y){if(A[y]===void 0)return typeof b=="number"||typeof b=="boolean"?A[y]=b:ArrayBuffer.isView(b)?A[y]=b.slice():A[y]=b.clone(),!0;{let R=A[y];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return A[y]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(R.equals(b)===!1)return R.copy(b),!0}}return!1}function p(b){let A=b.uniforms,y=0,R=16;for(let x=0,w=A.length;x<w;x++){let k=Array.isArray(A[x])?A[x]:[A[x]];for(let N=0,O=k.length;N<O;N++){let H=k[N],J=Array.isArray(H.value)?H.value:[H.value],I=Array.isArray(A[x])||Array.isArray(H.value),q=y;for(let V=0,pe=J.length;V<pe;V++){let $=J[V],re=S($,I),le=y%R,ke=le%re.boundary,Ze=le+ke;y+=ke,Ze!==0&&R-Ze<re.storage&&(y+=R-Ze),V===0&&(q=y),y+=re.storage}let K=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new K((y-q)/Float32Array.BYTES_PER_ELEMENT),H.__offset=q}}let E=y%R;return E>0&&(y+=R-E),b.__size=y,b.__cache={},this}function S(b,A){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=16,y.storage=48):b.isMatrix4?(y.boundary=16,y.storage=64):b.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(y.boundary=16,y.storage=b.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",b),A===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(b){let A=b.target;A.removeEventListener("dispose",m),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function g(){for(let b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:o,update:a,dispose:g}}var x1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cs=null;function _1(){return cs===null&&(cs=new jr(x1,16,16,Qs,Ki),cs.name="DFG_LUT",cs.minFilter=Zn,cs.magFilter=Zn,cs.wrapS=is,cs.wrapT=is,cs.generateMipmaps=!1,cs.needsUpdate=!0),cs}var ga=class{constructor(e={}){let{canvas:t=pf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=xi}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let S=f,m=new Set([Wl,Hl,Vl]),g=new Set([xi,Zi,fo,vr,kl,Gl]),b=new Uint32Array(4),A=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},R=null,E=null,x=[],w=[],k=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ls,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,O=!1,H=null,J=null,I=null,q=null;this._outputColorSpace=Tn;let K=0,V=0,pe=null,$=-1,re=null,le=new pn,ke=new pn,Ze=null,ne=new Ye(0),Re=0,Ue=t.width,Qe=t.height,Pe=1,We=null,Nt=null,lt=new pn(0,0,Ue,Qe),St=new pn(0,0,Ue,Qe),wt=!1,ce=new Hs,ge=new pl,ve=!1,Fe=!1,De=new ln,ut=new B,Ke=new pn,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function Mt(){return pe===null?Pe:1}let U=n;function Zt(M,D){return t.getContext(M,D)}let gt,zt,Ae,en,ot,at,C,v,Y,Se,ae,Ee,Le,ie,se,Ce,L,oe,ee,Ie,Me,ye,je;try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),U===null){let D="webgl2";if(U=Zt(D,M),U===null)throw Zt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}dt()}catch(M){throw t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),pt("WebGLRenderer: "+M.message),M}function dt(){gt=new Rx(U),gt.init(),Me=new u1(U,gt),zt=new _x(U,gt,e,Me),Ae=new c1(U,gt),zt.reversedDepthBuffer&&d&&Ae.buffers.depth.setReversed(!0),J=U.createFramebuffer(),I=U.createFramebuffer(),q=U.createFramebuffer(),en=new Lx(U),ot=new J_,at=new h1(U,gt,Ae,ot,zt,Me,en),C=new Cx(N),v=new Nm(U),ye=new gx(U,v),Y=new Px(U,v,en,ye),Se=new Nx(U,Y,v,ye,en),oe=new Dx(U,zt,at),se=new yx(ot),ae=new Z_(N,C,gt,zt,ye,se),Ee=new m1(N,ot),Le=new $_,ie=new i1(gt),L=new mx(N,C,Ae,Se,p,l),Ce=new l1(N,Se,zt),je=new g1(U,en,zt,Ae),ee=new xx(U,gt,en),Ie=new Ix(U,gt,en),en.programs=ae.programs,N.capabilities=zt,N.extensions=gt,N.properties=ot,N.renderLists=Le,N.shadowMap=Ce,N.state=Ae,N.info=en}S!==xi&&(k=new Fx(S,t.width,t.height,a,s,r));let xe=new yu(N,U);this.xr=xe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=gt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=gt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(M){M!==void 0&&(Pe=M,this.setSize(Ue,Qe,!1))},this.getSize=function(M){return M.set(Ue,Qe)},this.setSize=function(M,D,Q=!0){if(xe.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=M,Qe=D,t.width=Math.floor(M*Pe),t.height=Math.floor(D*Pe),Q===!0&&(t.style.width=M+"px",t.style.height=D+"px"),k!==null&&k.setSize(t.width,t.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(Ue*Pe,Qe*Pe).floor()},this.setDrawingBufferSize=function(M,D,Q){Ue=M,Qe=D,Pe=Q,t.width=Math.floor(M*Q),t.height=Math.floor(D*Q),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(S===xi){pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(le)},this.getViewport=function(M){return M.copy(lt)},this.setViewport=function(M,D,Q,X){M.isVector4?lt.set(M.x,M.y,M.z,M.w):lt.set(M,D,Q,X),Ae.viewport(le.copy(lt).multiplyScalar(Mt()).round())},this.getScissor=function(M){return M.copy(St)},this.setScissor=function(M,D,Q,X){M.isVector4?St.set(M.x,M.y,M.z,M.w):St.set(M,D,Q,X),Ae.scissor(ke.copy(St).multiplyScalar(Mt()).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(M){Ae.setScissorTest(wt=M)},this.setOpaqueSort=function(M){We=M},this.setTransparentSort=function(M){Nt=M},this.getClearColor=function(M){return M.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,Q=!0){let X=0;if(M){let Z=!1;if(pe!==null){let be=pe.texture.format;Z=m.has(be)}if(Z){let be=pe.texture.type,Xe=g.has(be),_e=L.getClearColor(),Te=L.getClearAlpha(),ze=_e.r,ht=_e.g,mt=_e.b;Xe?(b[0]=ze,b[1]=ht,b[2]=mt,b[3]=Te,U.clearBufferuiv(U.COLOR,0,b)):(A[0]=ze,A[1]=ht,A[2]=mt,A[3]=Te,U.clearBufferiv(U.COLOR,0,A))}else X|=U.COLOR_BUFFER_BIT}D&&(X|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),H=M},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),L.dispose(),Le.dispose(),ie.dispose(),at.dispose(),ot.dispose(),C.dispose(),Se.dispose(),Y.dispose(),ye.dispose(),je.dispose(),ae.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",$i),xe.removeEventListener("sessionend",Qi),$n.stop()};function st(M){M.preventDefault(),Bo("WebGLRenderer: Context Lost."),O=!0}function it(){Bo("WebGLRenderer: Context Restored."),O=!1;let M=en.autoReset,D=Ce.enabled,Q=Ce.autoUpdate,X=Ce.needsUpdate,Z=Ce.type;dt(),en.autoReset=M,Ce.enabled=D,Ce.autoUpdate=Q,Ce.needsUpdate=X,Ce.type=Z}function Oe(M){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Rt(M){let D=M.target;D.removeEventListener("dispose",Rt),mn(D)}function mn(M){fi(M),ot.remove(M)}function fi(M){let D=ot.get(M).programs;D!==void 0&&(D.forEach(function(Q){ae.releaseProgram(Q)}),M.isShaderMaterial&&ae.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,Q,X,Z,be){D===null&&(D=Tt);let Xe=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,_e=Ps(M,D,Q,X,Z);Ae.setMaterial(X,Xe);let Te=Q.index,ze=1;if(X.wireframe===!0){if(Te=Y.getWireframeAttribute(Q),Te===void 0)return;ze=2}let ht=Q.drawRange,mt=Q.attributes.position,Je=ht.start*ze,xt=(ht.start+ht.count)*ze;be!==null&&(Je=Math.max(Je,be.start*ze),xt=Math.min(xt,(be.start+be.count)*ze)),Te!==null?(Je=Math.max(Je,0),xt=Math.min(xt,Te.count)):mt!=null&&(Je=Math.max(Je,0),xt=Math.min(xt,mt.count));let hn=xt-Je;if(hn<0||hn===1/0)return;ye.setup(Z,X,_e,Q,Te);let At,Gt=ee;if(Te!==null&&(At=v.get(Te),Gt=Ie,Gt.setIndex(At)),Z.isMesh)X.wireframe===!0?(Ae.setLineWidth(X.wireframeLinewidth*Mt()),Gt.setMode(U.LINES)):Gt.setMode(U.TRIANGLES);else if(Z.isLine){let gn=X.linewidth;gn===void 0&&(gn=1),Ae.setLineWidth(gn*Mt()),Z.isLineSegments?Gt.setMode(U.LINES):Z.isLineLoop?Gt.setMode(U.LINE_LOOP):Gt.setMode(U.LINE_STRIP)}else Z.isPoints?Gt.setMode(U.POINTS):Z.isSprite&&Gt.setMode(U.TRIANGLES);if(Z.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))Gt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let gn=Z._multiDrawStarts,qe=Z._multiDrawCounts,xn=Z._multiDrawCount,kt=Te?v.get(Te).bytesPerElement:1,on=ot.get(X).currentProgram.getUniforms();for(let Pt=0;Pt<xn;Pt++)on.setValue(U,"_gl_DrawID",Pt),Gt.render(gn[Pt]/kt,qe[Pt])}else if(Z.isInstancedMesh)Gt.renderInstances(Je,hn,Z.count);else if(Q.isInstancedBufferGeometry){let gn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,qe=Math.min(Q.instanceCount,gn);Gt.renderInstances(Je,hn,qe)}else Gt.render(Je,hn)};function br(M,D,Q,X){H!==null&&M.isNodeMaterial&&H.setObject(X,M),ve===!0&&se.setState(M,Q,!1),M.transparent===!0&&M.side===bn&&M.forceSinglePass===!1?(M.side=ci,M.needsUpdate=!0,yi(M,D,X),M.side=$s,M.needsUpdate=!0,yi(M,D,X),M.side=bn):yi(M,D,X)}this.compile=function(M,D,Q=null){Q===null&&(Q=M),H!==null&&H.renderStart(M,D,Q),E=ie.get(Q),E.init(D),w.push(E),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(D.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),M!==Q&&M.traverseVisible(function(Z){Z.isLight&&Z.layers.test(D.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),E.setupLights(),H!==null&&H.updateLights(E.state.lightsArray),Fe=this.localClippingEnabled,ve=se.init(this.clippingPlanes,Fe),ve===!0&&se.setGlobalState(this.clippingPlanes,D),H!==null&&Ce.render(E.state.shadowsArray,Q,D);let X=new Set;return M.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let be=Z.material;if(be)if(Array.isArray(be))for(let Xe=0;Xe<be.length;Xe++){let _e=be[Xe];br(_e,Q,D,Z),X.add(_e)}else br(be,Q,D,Z),X.add(be)}),E=w.pop(),H!==null&&H.renderEnd(),X},this.compileAsync=function(M,D,Q=null){let X=this.compile(M,D,Q);return new Promise(Z=>{function be(){if(X.forEach(function(Xe){let Te=ot.get(Xe).currentProgram;(Te===void 0||Te.isReady())&&X.delete(Xe)}),X.size===0){Z(M);return}setTimeout(be,10)}gt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let us=null;function tr(M){us&&us(M)}function $i(){$n.stop()}function Qi(){$n.start()}let $n=new $f;$n.setAnimationLoop(tr),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(M){us=M,xe.setAnimationLoop(M),M===null?$n.stop():$n.start()},xe.addEventListener("sessionstart",$i),xe.addEventListener("sessionend",Qi),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;H!==null&&H.renderStart(M,D);let Q=xe.enabled===!0&&xe.isPresenting===!0,X=k!==null&&(pe===null||Q)&&k.begin(N,pe);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(D),D=xe.getCamera()),M.isScene===!0&&M.onBeforeRender(N,M,D,pe),E=ie.get(M,w.length),E.init(D),E.state.textureUnits=at.getTextureUnits(),w.push(E),De.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?ge.setFromArrayCamera(D):ce.setFromProjectionMatrix(De,Ni,D.reversedDepth),Fe=this.localClippingEnabled,ve=se.init(this.clippingPlanes,Fe),R=Le.get(M,x.length),R.init(),x.push(R),this.info.render.frame++,xe.enabled===!0&&xe.isPresenting===!0){let Xe=N.xr.getDepthSensingMesh();Xe!==null&&Gn(Xe,D,-1/0,N.sortObjects)}Gn(M,D,0,N.sortObjects),R.finish(),H!==null&&H.updateLights(E.state.lightsArray),N.sortObjects===!0&&R.sort(We,Nt),Ve=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,Ve&&L.addToRenderList(R,M),this.info.autoReset===!0&&this.info.reset(),ve===!0&&se.beginShadows();let Z=E.state.shadowsArray;if(Ce.render(Z,M,D),ve===!0&&se.endShadows(),(X&&k.hasRenderPass())===!1){let Xe=R.opaque,_e=R.transmissive;if(E.setupLights(),D.isArrayCamera){let Te=D.cameras;if(_e.length>0)for(let ze=0,ht=Te.length;ze<ht;ze++){let mt=Te[ze];ds(Xe,_e,M,mt)}Ve&&L.render(M);for(let ze=0,ht=Te.length;ze<ht;ze++){let mt=Te[ze];Ii(R,M,mt,mt.viewport)}}else _e.length>0&&ds(Xe,_e,M,D),Ve&&L.render(M),Ii(R,M,D)}pe!==null&&V===0&&(at.updateMultisampleRenderTarget(pe),at.updateRenderTargetMipmap(pe)),X&&k.end(N),M.isScene===!0&&M.onAfterRender(N,M,D),ye.resetDefaultState(),$=-1,re=null,w.pop(),w.length>0?(E=w[w.length-1],at.setTextureUnits(E.state.textureUnits),ve===!0&&se.setGlobalState(N.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?R=x[x.length-1]:R=null,H!==null&&H.renderEnd()};function Gn(M,D,Q,X){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)Q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){let Xe=D.isArrayCamera?ge:ce;if(!M.frustumCulled||M.intersectsFrustum(Xe)){X&&Ke.setFromMatrixPosition(M.matrixWorld).applyMatrix4(De);let _e=Se.update(M),Te=M.material;Te.visible&&R.push(M,_e,Te,Q,Ke.z,null,D)}}else if(M.isMesh||M.isLine||M.isPoints){let Xe=D.isArrayCamera?ge:ce;if(!M.frustumCulled||M.intersectsFrustum(Xe)){let _e=Se.update(M),Te=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ke.copy(M.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ke.copy(_e.boundingSphere.center)),Ke.applyMatrix4(M.matrixWorld).applyMatrix4(De)),Array.isArray(Te)){let ze=_e.groups;for(let ht=0,mt=ze.length;ht<mt;ht++){let Je=ze[ht],xt=Te[Je.materialIndex];xt&&xt.visible&&R.push(M,_e,xt,Q,Ke.z,Je,D)}}else Te.visible&&R.push(M,_e,Te,Q,Ke.z,null,D)}}}let be=M.children;for(let Xe=0,_e=be.length;Xe<_e;Xe++)Gn(be[Xe],D,Q,X)}function Ii(M,D,Q,X){let{opaque:Z,transmissive:be,transparent:Xe}=M;E.setupLightsView(Q),ve===!0&&se.setGlobalState(N.clippingPlanes,Q),X&&Ae.viewport(le.copy(X)),Z.length>0&&Ln(Z,D,Q),be.length>0&&Ln(be,D,Q),Xe.length>0&&Ln(Xe,D,Q),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function ds(M,D,Q,X){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){let Je=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new Ti(1,1,{generateMipmaps:!0,type:Je?Ki:xi,minFilter:Yi,samples:Math.max(4,zt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Vt.workingColorSpace})}let be=E.state.transmissionRenderTarget[X.id],Xe=X.viewport||le;be.setSize(Xe.z*N.transmissionResolutionScale,Xe.w*N.transmissionResolutionScale);let _e=N.getRenderTarget(),Te=N.getActiveCubeFace(),ze=N.getActiveMipmapLevel();N.setRenderTarget(be),N.getClearColor(ne),Re=N.getClearAlpha(),Re<1&&N.setClearColor(16777215,.5),N.clear(),Ve&&L.render(Q);let ht=N.toneMapping;N.toneMapping=ls;let mt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),ve===!0&&se.setGlobalState(N.clippingPlanes,X),Ln(M,Q,X),at.updateMultisampleRenderTarget(be),at.updateRenderTargetMipmap(be),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let xt=0,hn=D.length;xt<hn;xt++){let At=D[xt],{object:Gt,geometry:gn,material:qe,group:xn}=At;if(qe.side===bn&&Gt.layers.test(X.layers)){let kt=qe.side;qe.side=ci,qe.needsUpdate=!0,ii(Gt,Q,X,gn,qe,xn),qe.side=kt,qe.needsUpdate=!0,Je=!0}}Je===!0&&(at.updateMultisampleRenderTarget(be),at.updateRenderTargetMipmap(be))}N.setRenderTarget(_e,Te,ze),N.setClearColor(ne,Re),mt!==void 0&&(X.viewport=mt),N.toneMapping=ht}function Ln(M,D,Q){let X=D.isScene===!0?D.overrideMaterial:null;for(let Z=0,be=M.length;Z<be;Z++){let Xe=M[Z],{object:_e,geometry:Te,group:ze}=Xe,ht=Xe.material;ht.allowOverride===!0&&X!==null&&(ht=X),_e.layers.test(Q.layers)&&ii(_e,D,Q,Te,ht,ze)}}function ii(M,D,Q,X,Z,be){H!==null&&Z.isNodeMaterial&&H.setObject(M,Z),M.onBeforeRender(N,D,Q,X,Z,be),M.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Z.onBeforeRender(N,D,Q,X,M,be),Z.transparent===!0&&Z.side===bn&&Z.forceSinglePass===!1?(Z.side=ci,Z.needsUpdate=!0,N.renderBufferDirect(Q,D,X,Z,M,be),Z.side=$s,Z.needsUpdate=!0,N.renderBufferDirect(Q,D,X,Z,M,be),Z.side=bn):N.renderBufferDirect(Q,D,X,Z,M,be),M.onAfterRender(N,D,Q,X,Z,be)}function Oi(M){let D=0;for(let Q of M)Q.texture!==null&&D++;return D}function yi(M,D,Q){D.isScene!==!0&&(D=Tt);let X=ot.get(M),Z=E.state.lights,be=E.state.shadowsArray,Xe=Z.state.version,_e=ae.getParameters(M,Z.state,be,D,Q,E.state.lightProbeGridArray),Te=ae.getProgramCacheKey(_e),ze=X.programs;X.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,X.fog=D.fog;let ht=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;X.envMap=C.get(M.envMap||X.environment,ht),X.envMapRotation=X.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,ze===void 0&&(M.addEventListener("dispose",Rt),ze=new Map,X.programs=ze,X.programVariants=new Map);let mt=ze.get(Te);if(mt!==void 0){if(X.currentProgram===mt&&X.lightsStateVersion===Xe)return ps(M,_e),mt}else _e.uniforms=ae.getUniforms(M),H!==null&&M.isNodeMaterial&&H.build(M,Q,_e),M.onBeforeCompile(_e,N),mt=ae.acquireProgram(_e,Te),ze.set(Te,mt),X.uniforms=_e.uniforms;let Je=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Je.clippingPlanes=se.uniform),ps(M,_e),X.needsLights=zi(M),X.lightsStateVersion=Xe,X.needsLights&&(Je.ambientLightColor.value=Z.state.ambient,Je.lightProbe.value=Z.state.probe,Je.sunLights.value=Z.state.sun,Je.sunLightShadows.value=Z.state.sunShadow,Je.directionalLights.value=Z.state.directional,Je.directionalLightShadows.value=Z.state.directionalShadow,Je.spotLights.value=Z.state.spot,Je.spotLightShadows.value=Z.state.spotShadow,Je.rectAreaLights.value=Z.state.rectArea,Je.ltc_1.value=Z.state.rectAreaLTC1,Je.ltc_2.value=Z.state.rectAreaLTC2,Je.pointLights.value=Z.state.point,Je.pointLightShadows.value=Z.state.pointShadow,Je.hemisphereLights.value=Z.state.hemi,Je.sunShadowMatrix.value=Z.state.sunShadowMatrix,Je.sunShadowCascade.value=Z.state.sunShadowCascade,Je.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Je.spotLightMatrix.value=Z.state.spotLightMatrix,Je.spotLightMap.value=Z.state.spotLightMap,Je.pointShadowMatrix.value=Z.state.pointShadowMatrix),X.numLightProbeGrids=Oi(E.state.lightProbeGridArray),X.currentProgram=mt,X.uniformsList=null,mt}function ji(M,D,Q,X,Z){let be=ot.get(M),Xe=be.currentProgram.id+","+X+","+Z,_e=be.programVariants.get(Xe);return _e===void 0?(_e=yi(M,D,Q),be.programVariants.set(Xe,_e)):(be.currentProgram=_e,be.uniformsList=null,be.outputColorSpace=X,be.toneMapping=Z),_e}function fs(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=po.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function ps(M,D){let Q=ot.get(M);Q.outputColorSpace=D.outputColorSpace,Q.batching=D.batching,Q.batchingColor=D.batchingColor,Q.instancing=D.instancing,Q.instancingColor=D.instancingColor,Q.instancingMorph=D.instancingMorph,Q.skinning=D.skinning,Q.morphTargets=D.morphTargets,Q.morphNormals=D.morphNormals,Q.morphColors=D.morphColors,Q.morphTargetsCount=D.morphTargetsCount,Q.numClippingPlanes=D.numClippingPlanes,Q.numIntersection=D.numClipIntersection,Q.vertexAlphas=D.vertexAlphas,Q.vertexTangents=D.vertexTangents,Q.toneMapping=D.toneMapping}function Ps(M,D,Q,X,Z){D.isScene!==!0&&(D=Tt),at.resetTextureUnits();let be=D.fog,Xe=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?D.environment:null,_e=pe===null?N.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Vt.workingColorSpace,Te=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,ze=C.get(X.envMap||Xe,Te),ht=X.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,mt=!!Q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Je=!!Q.morphAttributes.position,xt=!!Q.morphAttributes.normal,hn=!!Q.morphAttributes.color,At=ls;X.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(At=N.toneMapping);let Gt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,gn=Gt!==void 0?Gt.length:0,qe=ot.get(X),xn=E.state.lights;if(ve===!0&&(Fe===!0||M!==re)){let tn=M===re&&X.id===$;se.setState(X,M,tn)}let kt=!1,on=!1;X.version===qe.__version?qe.needsLights&&qe.lightsStateVersion!==xn.state.version||Z.isBatchedMesh&&qe.batching===!1||!Z.isBatchedMesh&&qe.batching===!0||Z.isBatchedMesh&&qe.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&qe.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&qe.instancing===!1||!Z.isInstancedMesh&&qe.instancing===!0||Z.isSkinnedMesh&&qe.skinning===!1||!Z.isSkinnedMesh&&qe.skinning===!0||Z.isInstancedMesh&&qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&qe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&qe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&qe.instancingMorph===!1&&Z.morphTexture!==null||qe.envMap!==ze||X.fog===!0&&qe.fog!==be||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==se.numPlanes||qe.numIntersection!==se.numIntersection)||qe.vertexAlphas!==ht||qe.vertexTangents!==mt||qe.morphTargets!==Je||qe.morphNormals!==xt||qe.morphColors!==hn||qe.morphTargetsCount!==gn||qe.numLightProbeGrids!==Oi(E.state.lightProbeGridArray)?kt=!0:(qe.outputColorSpace!==_e||qe.toneMapping!==At)&&(on=!0):(kt=!0,qe.__version=X.version);let Pt=qe.currentProgram;(kt===!0||on===!0)&&(Pt=on===!0?ji(X,D,Z,_e,At):yi(X,D,Z),H&&X.isNodeMaterial&&H.onUpdateProgram(X,Pt,qe));let _n=!1,Vn=!1,Hn=!1,bt=Pt.getUniforms(),En=qe.uniforms;if(Ae.useProgram(Pt.program)&&(_n=!0,Vn=!0,Hn=!0),X.id!==$&&($=X.id,Vn=!0),_n||re!==M){Ae.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),bt.setValue(U,"projectionMatrix",M.projectionMatrix),bt.setValue(U,"viewMatrix",M.matrixWorldInverse);let an=bt.map.cameraPosition;an!==void 0&&an.setValue(U,ut.setFromMatrixPosition(M.matrixWorld)),zt.logarithmicDepthBuffer&&bt.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&bt.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),re!==M&&(re=M,Vn=!0,Hn=!0)}if(qe.needsLights&&(xn.state.sunShadowMap.length>0&&bt.setValue(U,"sunShadowMap",xn.state.sunShadowMap,at),xn.state.directionalShadowMap.length>0&&bt.setValue(U,"directionalShadowMap",xn.state.directionalShadowMap,at),xn.state.spotShadowMap.length>0&&bt.setValue(U,"spotShadowMap",xn.state.spotShadowMap,at),xn.state.pointShadowMap.length>0&&bt.setValue(U,"pointShadowMap",xn.state.pointShadowMap,at)),Z.isSkinnedMesh){bt.setOptional(U,Z,"bindMatrix"),bt.setOptional(U,Z,"bindMatrixInverse");let tn=Z.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),bt.setValue(U,"boneTexture",tn.boneTexture,at))}Z.isBatchedMesh&&(bt.setOptional(U,Z,"batchingTexture"),bt.setValue(U,"batchingTexture",Z._matricesTexture,at),bt.setOptional(U,Z,"batchingIdTexture"),bt.setValue(U,"batchingIdTexture",Z._indirectTexture,at),bt.setOptional(U,Z,"batchingColorTexture"),Z._colorsTexture!==null&&bt.setValue(U,"batchingColorTexture",Z._colorsTexture,at));let yn=Q.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&oe.update(Z,Q,Pt),(Vn||qe.receiveShadow!==Z.receiveShadow)&&(qe.receiveShadow=Z.receiveShadow,bt.setValue(U,"receiveShadow",Z.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&D.environment!==null&&(En.envMapIntensity.value=D.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=_1()),Vn){if(bt.setValue(U,"toneMappingExposure",N.toneMappingExposure),qe.needsLights&&Bi(En,Hn),be&&X.fog===!0&&Ee.refreshFogUniforms(En,be),Ee.refreshMaterialUniforms(En,X,Pe,Qe,E.state.transmissionRenderTarget[M.id]),qe.needsLights&&qe.numLightProbeGrids>0){let tn=y,an=0;for(let si of E.state.lightProbeGridArray)si.texture!==null&&(tn.textures[an]=si.texture,tn.min[an]=si.boundingBox.min,tn.max[an]=si.boundingBox.max,tn.resolution[an]=si.resolution,an++);for(let si in tn)tn[si].length=an;En.probesSH.value=tn.textures,En.probesMin.value=tn.min,En.probesMax.value=tn.max,En.probesResolution.value=tn.resolution}po.upload(U,fs(qe),En,at)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(po.upload(U,fs(qe),En,at),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&bt.setValue(U,"center",Z.center),bt.setValue(U,"modelViewMatrix",Z.modelViewMatrix),bt.setValue(U,"normalMatrix",Z.normalMatrix),bt.setValue(U,"modelMatrix",Z.matrixWorld),X.uniformsGroups!==void 0){let tn=X.uniformsGroups;for(let an=0,si=tn.length;an<si;an++){let z=tn[an];je.update(z,Pt),je.bind(z,Pt)}}return Pt}function Bi(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.sunLights.needsUpdate=D,M.sunLightShadows.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function zi(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return pe},this.setRenderTargetTextures=function(M,D,Q){let X=ot.get(M);X.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ot.get(M.texture).__webglTexture=D,ot.get(M.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){let Q=ot.get(M);Q.__webglFramebuffer=D,Q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,Q=0){pe=M,K=D,V=Q;let X=null,Z=!1,be=!1;if(M){let _e=ot.get(M);if(_e.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(U.FRAMEBUFFER,_e.__webglFramebuffer),le.copy(M.viewport),ke.copy(M.scissor),Ze=M.scissorTest,Ae.viewport(le),Ae.scissor(ke),Ae.setScissorTest(Ze),$=-1;return}else if(_e.__webglFramebuffer===void 0)at.setupRenderTarget(M);else if(_e.__hasExternalTextures)at.rebindTextures(M,ot.get(M.texture).__webglTexture,ot.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ht=M.depthTexture;if(_e.__boundDepthTexture!==ht){if(ht!==null&&ot.has(ht)&&(M.width!==ht.image.width||M.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(M)}}let Te=M.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(be=!0);let ze=ot.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ze[D])?X=ze[D][Q]:X=ze[D],Z=!0):M.samples>0&&at.useMultisampledRTT(M)===!1?X=ot.get(M).__webglMultisampledFramebuffer:Array.isArray(ze)?X=ze[Q]:X=ze,le.copy(M.viewport),ke.copy(M.scissor),Ze=M.scissorTest}else le.copy(lt).multiplyScalar(Pe).floor(),ke.copy(St).multiplyScalar(Pe).floor(),Ze=wt;if(Q!==0&&(X=J),Ae.bindFramebuffer(U.FRAMEBUFFER,X)&&Ae.drawBuffers(M,X),Ae.viewport(le),Ae.scissor(ke),Ae.setScissorTest(Ze),Z){let _e=ot.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e.__webglTexture,Q)}else if(be){let _e=D;for(let Te=0;Te<M.textures.length;Te++){let ze=ot.get(M.textures[Te]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Te,ze.__webglTexture,Q,_e)}}else if(M!==null&&Q!==0){let _e=ot.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_e.__webglTexture,Q)}$=-1};function es(M){let D=ot.get(M);return(D.__readFormat!==M.format||D.__readType!==M.type)&&(D.__readFormat=M.format,D.__readType=M.type,D.__formatReadable=zt.textureFormatReadable(M.format),D.__typeReadable=zt.textureTypeReadable(M.type)),D}this.readRenderTargetPixels=function(M,D,Q,X,Z,be,Xe,_e=0){if(!(M&&M.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ot.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Xe!==void 0&&(Te=Te[Xe],Array.isArray(Te)&&(Te=Te[0])),Te){Ae.bindFramebuffer(U.FRAMEBUFFER,Te);try{let ze=M.textures[_e],ht=ze.format,mt=ze.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e);let Je=es(ze);if(Je.__formatReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Je.__typeReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-X&&Q>=0&&Q<=M.height-Z&&U.readPixels(D,Q,X,Z,Me.convert(ht),Me.convert(mt),be)}finally{let ze=pe!==null?ot.get(pe).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(M,D,Q,X,Z,be,Xe,_e=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ot.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Xe!==void 0&&(Te=Te[Xe],Array.isArray(Te)&&(Te=Te[0])),Te)if(D>=0&&D<=M.width-X&&Q>=0&&Q<=M.height-Z){Ae.bindFramebuffer(U.FRAMEBUFFER,Te);let ze=M.textures[_e],ht=ze.format,mt=ze.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e);let Je=es(ze);if(Je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,xt),U.bufferData(U.PIXEL_PACK_BUFFER,be.byteLength,U.STREAM_READ),U.readPixels(D,Q,X,Z,Me.convert(ht),Me.convert(mt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let hn=pe!==null?ot.get(pe).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,hn);let At=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await gf(U,At,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,xt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,be),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(xt),U.deleteSync(At),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,Q=0){let X=Math.pow(2,-Q),Z=Math.floor(M.image.width*X),be=Math.floor(M.image.height*X),Xe=D!==null?D.x:0,_e=D!==null?D.y:0;at.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,Q,0,0,Xe,_e,Z,be),Ae.unbindTexture()},this.copyTextureToTexture=function(M,D,Q=null,X=null,Z=0,be=0){let Xe,_e,Te,ze,ht,mt,Je,xt,hn,At=M.isCompressedTexture?M.mipmaps[be]:M.image;if(Q!==null)Xe=Q.max.x-Q.min.x,_e=Q.max.y-Q.min.y,Te=Q.isBox3?Q.max.z-Q.min.z:1,ze=Q.min.x,ht=Q.min.y,mt=Q.isBox3?Q.min.z:0;else{let bt=Math.pow(2,-Z);Xe=Math.floor(At.width*bt),_e=Math.floor(At.height*bt),M.isDataArrayTexture?Te=At.depth:M.isData3DTexture?Te=Math.floor(At.depth*bt):Te=1,ze=0,ht=0,mt=0}X!==null?(Je=X.x,xt=X.y,hn=X.z):(Je=0,xt=0,hn=0);let Gt=Me.convert(D.format),gn=Me.convert(D.type),qe;D.isData3DTexture?(at.setTexture3D(D,0),qe=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(at.setTexture2DArray(D,0),qe=U.TEXTURE_2D_ARRAY):(at.setTexture2D(D,0),qe=U.TEXTURE_2D),Ae.activeTexture(U.TEXTURE0),Ae.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),Ae.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),Ae.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let xn=Ae.getParameter(U.UNPACK_ROW_LENGTH),kt=Ae.getParameter(U.UNPACK_IMAGE_HEIGHT),on=Ae.getParameter(U.UNPACK_SKIP_PIXELS),Pt=Ae.getParameter(U.UNPACK_SKIP_ROWS),_n=Ae.getParameter(U.UNPACK_SKIP_IMAGES);Ae.pixelStorei(U.UNPACK_ROW_LENGTH,At.width),Ae.pixelStorei(U.UNPACK_IMAGE_HEIGHT,At.height),Ae.pixelStorei(U.UNPACK_SKIP_PIXELS,ze),Ae.pixelStorei(U.UNPACK_SKIP_ROWS,ht),Ae.pixelStorei(U.UNPACK_SKIP_IMAGES,mt);let Vn=M.isDataArrayTexture||M.isData3DTexture,Hn=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){let bt=ot.get(M),En=ot.get(D),yn=ot.get(bt.__renderTarget),tn=ot.get(En.__renderTarget);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,yn.__webglFramebuffer),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,tn.__webglFramebuffer);for(let an=0;an<Te;an++)Vn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ot.get(M).__webglTexture,Z,mt+an),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ot.get(D).__webglTexture,be,hn+an)),U.blitFramebuffer(ze,ht,ze+Xe,ht+_e,Je,xt,Je+Xe,xt+_e,U.DEPTH_BUFFER_BIT,U.NEAREST);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Z!==0||M.isRenderTargetTexture||ot.has(M)){let bt=ot.get(M),En=ot.get(D);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,I),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,q);for(let yn=0;yn<Te;yn++)Vn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.__webglTexture,Z,mt+yn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,bt.__webglTexture,Z),Hn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,En.__webglTexture,be,hn+yn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,En.__webglTexture,be),Z!==0?U.blitFramebuffer(ze,ht,ze+Xe,ht+_e,Je,xt,Je+Xe,xt+_e,U.COLOR_BUFFER_BIT,U.NEAREST):Hn?U.copyTexSubImage3D(qe,be,Je,xt,hn+yn,ze,ht,Xe,_e):U.copyTexSubImage2D(qe,be,Je,xt,ze,ht,Xe,_e);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Hn?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(qe,be,Je,xt,hn,Xe,_e,Te,Gt,gn,At.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(qe,be,Je,xt,hn,Xe,_e,Te,Gt,At.data):U.texSubImage3D(qe,be,Je,xt,hn,Xe,_e,Te,Gt,gn,At):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,be,Je,xt,Xe,_e,Gt,gn,At.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,be,Je,xt,At.width,At.height,Gt,At.data):U.texSubImage2D(U.TEXTURE_2D,be,Je,xt,Xe,_e,Gt,gn,At);Ae.pixelStorei(U.UNPACK_ROW_LENGTH,xn),Ae.pixelStorei(U.UNPACK_IMAGE_HEIGHT,kt),Ae.pixelStorei(U.UNPACK_SKIP_PIXELS,on),Ae.pixelStorei(U.UNPACK_SKIP_ROWS,Pt),Ae.pixelStorei(U.UNPACK_SKIP_IMAGES,_n),be===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&U.generateMipmap(qe),Ae.unbindTexture()},this.initRenderTarget=function(M){ot.get(M).__webglFramebuffer===void 0&&at.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?at.setTextureCube(M,0):M.isData3DTexture?at.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?at.setTexture2DArray(M,0):at.setTexture2D(M,0),Ae.unbindTexture()},this.resetState=function(){K=0,V=0,pe=null,Ae.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Vt._getUnpackColorSpace()}};var go=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,n="ltr"){let s=[],r=y1(e,t,this.data,n);for(let o=0,a=r.length;o<a;o++)s.push(...r[o].toShapes());return s}};function y1(i,e,t,n){let s=Array.from(i),r=e/t.resolution,o=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,a=[],l=0,c=0;(n=="rtl"||n=="tb")&&s.reverse();for(let h=0;h<s.length;h++){let u=s[h];if(u===`
`)l=0,c-=o;else{let d=v1(u,r,l,c,t);n=="tb"?(l=0,c+=t.ascender*r):l+=d.offsetX,a.push(d.path)}}return a}function v1(i,e,t,n,s){let r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}let o=new ra,a,l,c,h,u,d,f,p;if(r.o){let S=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,g=S.length;m<g;)switch(S[m++]){case"m":a=S[m++]*e+t,l=S[m++]*e+n,o.moveTo(a,l);break;case"l":a=S[m++]*e+t,l=S[m++]*e+n,o.lineTo(a,l);break;case"q":c=S[m++]*e+t,h=S[m++]*e+n,u=S[m++]*e+t,d=S[m++]*e+n,o.quadraticCurveTo(u,d,c,h);break;case"b":c=S[m++]*e+t,h=S[m++]*e+n,u=S[m++]*e+t,d=S[m++]*e+n,f=S[m++]*e+t,p=S[m++]*e+n,o.bezierCurveTo(u,d,f,p,c,h);break}}return{offsetX:r.ha*e,path:o}}var Ec=class i extends qs{constructor(e,t={}){let n=t.font;if(n===void 0)super();else{let s=n.generateShapes(e,t.size,t.direction);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}toJSON(){return super.toJSON()}static fromJSON(e){let t=e.options;return t.font=new go(t.font.data),new i(t.text,t)}};var lp="data:image/webp;base64,UklGRoAUAABXRUJQVlA4IHQUAAAwgQCdASo9BFwAPpFInUylq6KiINGpmXASCWljPdvTL8bFE/y5sMAvcl5fz+2f8qj/jenCUE+0SEaJEJrv4A3nf9o/4fTQ/zPcEdT/yfsCfrHyibRTPh8kIzr40x6XnJDnF/N/93r9f///B77dl7mM/6uz/NfP/vNNyD/+cv/Vf3ygWEVCN9KRG7DqqcqZC8PKPZTPsNqytTYdy8ynk8G0Sg+Oellu5R983GFoGoJioppiEZk8BfGxQ3gDoUMnPfH/rrehXT82lvSAqw/fUWH7/il9aeuQkvYe41GALAyfBC+Tx2sc9YatbwvlCx95YdUN2/i+cYn1ZNN5XFjxB/Uw5OGW4pzsZWHbJ2a18QPmL7wHWSzNSy43me2bjhUxFpnU3U9QZyiy16kJ8HPGMSEeiEiHknbwF8/nadf+TWM1GDlLfPb5zDlVsJo5dlbs2N8nk/72+rNSV5kTgvPo2mff/LHrzhhurKa11UcuDJzI9Qqju9DKeUMSye25aFDais49brwKHWp8MhU6uqTCP+8c/BHZ2kMB5T74y3S3djvzWbxwmbDbjibrf1zIXvmiIrz2RVQ4tT1D0qJ8HDVdGS7b+H1uBNb7nFrXjTE6gOHfn85nSNKwgdgfDolyjG6Qdr2RBIY9QBB8xhF3w+nl3h9aJQY1YsZbgg/brlFCg+Nqa4hWqjKgxqs2zYlPXreBsGnJBK0LJegwXGvX8AhRCW81O+aHJqAuR252DSWx9YrqbwBYI+OnVttICyAEhnTr6JKAwXONGbQshy25wDldYlJQOr0pvyDRk0+DCrtYkfTHJWHA1Y/Z+w8EAq/YJMg9EbM47hwdJYYdliRjlzy4elbNfj6Yke3Ak4DjFuUXbfOft1kCI2LEWHp97njI4LalgiOXo3tucJwm4J0dkbjtm5Vw1REh33JqlYTVnRWXAfKCK7IsHKXQhjSybtE/SSRZpMAnNyuxKDlRWq7fPvJTrtuQ/d7ySj/Jzofhjn7BAR90YpvjlSuCMiUoE2ZRF1e9zqWjqQjKTWALy2c3wyY4fdws5WiiKXm6y9AgaisBjbbeVOTO6ZiWS4yuSE3p9THp6PtvLK14PhtEvKIEY14jQ4d01V/58ZPeqypCpze0G/wIFTLYS7CcdmQ8RGVHPXW+WckDPzm5+KUmQikrVFQLVmgc/bKThh32wJTEWO8coxjdIzvsLa9Ywf2U53X7N0GREixI0ReeOWOoIofkpv90C+H3T1kUCUhk51d8XsQVqUZypiMcVeqTAwpsKtrhIhnlycABKF91G/8KAlESNRAMx9+T+DIGocEooEUESKz/H1W9z+AKJIGNRvOa/+OoskSiamTFtS8O7Dm2cybaotFOjtuhIX9cwEyO5CYFNtK+vt0okcEAAP7ugz3WACH/XHS3OaneVtqNfBwC9k6+yRRWEw44g7Ea/Kn8Ip+0azUScgGGhuUR+3B8C2P/YgFAOEHRnd+WprYM+gDA+Ov4bjJ6TjMBsmWjk8jQg0XEvv4vACV0V4She2T7lsmzVVNLc04DCkCCBWqvInO11RO+OMKfpvwSJ86wErBZtFDq6lCeqxYhTUjEiA0b0hILUQ/6jVlhtOhwO7k4oZHEsF5fUO74qLgV61NYfEIh3njMvb91YtExbcg8d6GHM2e91zv8Q5r/WsdQZK3nwLe9oeoH51WCmEjqNEZhbQzTSafmWAfCX2TPLIhPbZL15DRn46c0pchVFrT6OyypEWffRGMcz9+dPXChlS+CTeeLzJlF3r7itLAk9I4skyyxZInGfR3iID4ZP7FtPcgU3xhupeXewgc0Gj5WdX/E65PFPie0CSKXmrNFMMcRRKUkvcnSHVprrjrcOFWcD8kOEHFIE3K/3Ek+eJkQyKwB9EeizyWx7SzxRvJCgQJbnc/blT4uL0ND4fJyYN/FG886mHxeuzeUx15Z3DtYI0nhpeFIyyYAnQU7c/COsgIWX11wEyd3vA8M9fX/vidBffSF3LhEt60oCvPjs1koX9r0C4cFs3mUnARWBKne3J53Mp78bakRRlMS/QY0jMFmwY6F/IWMbOfAJYkdlVP1hOZZ8h/fwNfiiZKcvQtsDkgFp/iZgQS1gw40ztDXVXl1hfA/mbbzkJ8/KYXetMIgpGMLGplvyrHvTBEkW2xXezH/mn4W0JgZTmpKPwp4+PhrE1zOdlbLz8Nuz2J85WUiQU44yequ1XaJMbwL8l7AiQzHzzVNdFTt1EZqCNKe6um2jlqgioihrR7Q4Chud6ILAUG2SYIipWn+ZpP4gnPaJeRQynHK7rQQcMMr276OLG9jQkk31bNNsINmjldnE9ZsYY1z61lzH0meP8eDNj/yzHNZFx3+yl3FLnL9jrjdBrPtCY1qxx/PnLhPc/0XoiL4PGndRiYgFiOKaCaKrR+geg1jH3PRtND1qEjx/StbKiBtS0yR8FD05vx1zblUImSbG8tzq6/nvnP5iIyGeDenI5dRjyTdZUzrZLnw7pQKOzIwdL55JU7Rgdd9Onerbykv3NJ+fx84OEXh5fAAg016508vANHqHjYU7Gm36IhFYAwcvHrB1Pp6/vhRi1TvD0ntQQbPPBa/3gzoYdZ3a6izTyTs9WRmr0IWz/425T+2Gx5S0RhAOHf826rA3d+F2K2j3nYicwBW5Y64PuryBZm3nqvCEm5YACeUe39CUJd/e46A6/d3yUwuzcBAi10Iq3lugTtBsNKhfS/ngVyQGEsE1ILkTg8QpmCgjPsj0EqZgWnDchpMWRdFooh7GT5i46T7BLNjBWHPXjrfQRffpKk7AREnt8EnNzqtMOlDsGwDhY+QmoaJRfoFkkpq6CcH4YXoDXenDK7Jzsk1DG0nJLtzHYdKc+ocM69FtTa8SCR8zuvsplcMfwfV7aPVZvQWgou7lvXmKKfd8EX4Zm16wllTHjydNmwb4RB7iLLPdZknDhUEa7oEYS5biXw5f4z9FSmBPmJveXYxyptzd0FIgCnUpgFa1Gbc75nA4KASPxkHJQtTjBkMV/pCef53m2mZ5kv3dH6blsVH53FdXjlA2GdFCC5+KNTP6phhIk10JR+NMRfrsuBM506MfhIqeFaiNoWu7YnaiwugBjUiAn7y5Fqtc0aJkjw8j3s+kpzyjGS5fqF0HoyELsdiwngEsZWiZKyfayKnS7OuNuhxqyBcZsXHYXDK5INWX5jMlNCSwC2B4icoocN9pFYWisXrN4Ne8IAne0Ow3x195IizkEKUEBYZlqRpxBzoa7euJ0+8b34PxafQLjhZXLMouV89PJ45UIUeX+KHJujLRuSJ5XUQ8MmtnDreeDYy8zyIRt9Z8QREQtVFaiipdrIL6a9zQzxjQK+kisJBKfOuJtT1BFgu5ZbaO1rH5Gjnu4y3nuFjrlG5Mf36JKTs1ZLgE1l9QkPPR80+njjHcABwAId5Mw3nzBSzLUGPxoy8gKikmU9tDs3dZFgJdV5z2lh6SDq8jLVEYv//GCqNC64KV84//jD6SgX6qSbssSYOCLGg0YqWjJrqFSaaCQ/GomYrINKmNrwjcvKY5F114POw5EVKdvJ5MARBlsZAyr1VqHQ6HFF11FtGwuB0EXduJ6UbaV036c+flaLv1pTl9cR8Ds9krNp5++u7fHYoGNBhqtyAXKHqtX223VDlL5JFzgN8CTErZX8NsitSHjF4JgVJHYRwA8+lZBfCqc2CM8soQYX4scx4JCkPL6LG1GBNlhurW20+FVIfEEJgNuREmwTIrp90vVEsqH/PmpZqpErubdwRVAQlCfXgxh3Hr+W+oBTvPP/4s1QiBMVtTTfKSVRNy0bA+fG5dJaLlBMT70unrl7qUEn0Xk7F1YoQr49OKgL1TsxTUB0gZtGeTnGObT1rcfVX/Zl0Oxm4iLDHSEms5GsKVUcTWfcxjNLDef965K2q/qNTAAJFoG0fC1uSY6g+A+qOvpzgVBx0KxjsKkcUARjyCgfn/gFqjE+C4Y0mjRxB7JzG2wNeyROD7osFSXXUSB9CBxiMSB4ZelWZmvRn7jWOlxiuEvVgVgXc97XbLfKZxAjWebo6KRWLfZ8qLk0ZPKEsClg2HAwC4lxXL9WsbSjyhLnbxyfRNqZdwoaRR25pD14djojgtDcvDd//GgseaAPunuppvuUq0LhDsRev9iq6OvcjI9eoYtZK0WRvt8YKijmVHuUzOBPWXrtvbXgTyTQfe7ywtXvo82BtTbvO8ZUbuVAcpu8Ll726QSIVWFF1kOC55CrouJHe82Y+8h7tSqO3eIz6xCk8p51aJ4AIJW+92jx4ZfZtVhrqtIUh9+FgVqZLNw7HMsg09apn1LuVG3wXxiBOE8ccZ00qCxQ08HKSMzGrbQnIrg2xWgHUuuWXKYxE3J48fv1/4zVpA96eMQIaUmAlxQYGhvL29iaXgaKu6uvHlwyFbdfkRl5nSJxW5VSVu/4DOOxpy4zKcmKmWIT8zk6NTyUH/44cPuAkVfFwF7cGgZGRa1XvfTGXV/RGfaTLlv8fBS6HoGyI9ntr+pM7K2VQZB7nYO8SsTYqr4LN/0yN9YeP4SJ8JQsOxP9glmL3JbzI925K/Ilx6X5bWPo750fL3x+HHxsgCNTyYNV3tIlgf8/gYUd1p3RNW+tMxU9gT/IWB5vbz97NC9c0MzPXQxNZIgqZ6gaXKiwelArQMk5f3/VBxS4sV2hRup7zRoOhd0WKUj9GukMSjQ2dDIm1534i3s5nUcO1gjl+n/zkxYNbVezKNqQ0GsVAlKTsfNVHVccKnTba4P140bO286GMss5zCLWYihS9lIGF5j42OhdpzlEyWixNiXiS9I6jbWo1IwWi6/FznLGv9f7e8+RzhMYdonY1Qfj7CKESW9g3F+3nGMg+P3KQ8EPl9lG/Iymd3+IcbzUGSKzAGuKdMXg2ozOrq++V0VLj+O/q82Sjr20v5DQ5Sovn4n3/MKWd3uc1L8LzGzopO0h+nRBYp+8xnrULFpOxBI01fqDtPv3QsVFQL7HB5hv621ea/L16EutJ1iHGemH3BNjQGMISoQCNH24e6Y4UlnFhWyls7Sr7rFUIgw4qJlsyx3NJdp104DDlS4PmFArmZZ/eSwRAXln2mTbaQVaSuaOpR9lk5QRQQYKeHzFE+p95UNWSsobn7fAA2KGSvdMfBWVhQxLJCMWRXUHpblgT0EXoyo5GXxzFzTjg0eFmoMK05L3pAEho/lM9YeYkaJBMcCeuGmjKe63tbMwo8h6YaY0UcOzEO205La9XnE6a83CP/OVjHklu1bLX1xJHjN/UMPl+G9jz0s5w9ti1TC3huiUQQii/P6mLMw5Wj4xtifgXCWeJ0qNfChi316NE+RmSlxl0x48pnPuE7epjgKUGLh1OA2AScLffOOrR0tCo0Nlwm0vibJUOtoG7eU/fXwWlvBSVWjfpyLUWZAHxeD5XdNsv8TegsgxrBTi/vh+9woIQgzojjauTqDARIUHo3BS/phVf4YtbzdZ2CKSxt7VLSDIuilzlsDUrqsunJW7QLr3mQ+H9ldjHYdn78f6lNK/OOAut4ZVuXvM6hscRjBxgw8u5y6dmHjPwG/QdyW9tLsv2F3iSvC9fulx7lCLxicw/rGRsl+iWs3vb2ZQRAkOhn7927gOhBSDB9FKlcr/jD1CFcfDrtVH3PJDHiU95J/pIcPA1VXFqusspLCgEYi71BFj4wG2J/lp/4yQVKjRx7ok+1WGdocdeXGGOHr+7rtmstG5YRlnhofGWfhE3ddIydtphNKWr1ewyff/whXs/+QVDiIdT/1TA6uLNzWAgFvxaDbpK7BoyYJYAw0ohNkKH16uZbi1IawFd+M/frJ1EYDnNU25n2qj4ekwFslC9VK6eLex1cZxFnnBE+XMoSjoLndc8JOVEGJ6OB4vhNhpPgcuxAAxlB8vFyplOZ23bG0nESLUlH8/QSYsBdM6dgDslP3CTyzv1X1iCaK5DGauEsZVMMQSymYJoCvebeOA7D9q6kuKg/Rcw5SZPARCGoFVcavYWZ6kwmWM5tr7IDzRNkkUojd/k3U24kjSrWwxhb5OXCBzlnsKYJyrF4TmKEiCesbRrVwjAGK90Vev10CEvOf2rYohJLYTgEyMjJ5Y4g2lWn5p8NqvqyYIwfirYoVCimZPPw+xibicl+rsWBOcnQSp32HC1Y3cm81v4eFkyHoTFM/45ol2kK1vA3OmRLExBaX8prVJ0dsWvnkT9OGHOGGA+YPDOg36Daqwio0NfNuAEiHNLNNTOZgh1hJTuSTlHTBkWhB82pty7QGCu6FwQ9Gf5wSmP7kIxCyUV9tS59K0krN35fsV1CIh49hc2b8ctPDGrgW+HRRrpY5bt4aKvcs1vVRbO1LPEeX/c2CptYTCzm1wDqyKSy4MSOBNZ6XhTFtH0M0EGlO9H8GloYXcDDqxK9hoep/RYIDcGq/MmQdHUfWoUb5QA/ev/hy9frqDC67bmhex6Tk5RA227rrH+HWGH6JyE7u4mm4PNtokJdltRHSnxBDJIYHV+LURzsd3F8jQDTvHIUoFAIkCD46bMu4bOOvQWoAd9ebAhGiyqBimJ2wAqU4Lwtlpz28YQGeYYvLxI9mWcwOGmC691Mb1DhrtNqnhCS27vtETybb/4icZI/UOnHoYQgZdBi1Sot/T+HYCAFQBQfFeF7eJO1Vek+uUnM4B+TuniMHZ8Ddg07SK23RXPCj+DrhEym/quS6VkGevK97YW+8qisd/tstmedzy5O6O7ex/5LisZTMP7M5+gM9heKJSj3IFcxPQpgYyydyX0GtKTxKJhyTlRNFVo+ECbp9vg1GrdHwSuiE2rC5jinvHiHhlQJub3qfMJlS4Y9J303mxirrt6E2euGPhgsLbfSKrPA3yTik419EUyII2DDIC+ew3tVP4D69bIo3H1+re01EIN7CMA1i/LV6IBzw4IK9zaJo/xCsVR1QnIDf6FeOCbxR6FQ8/fBWS1qiLTGKopV0WDwW3GQqONFGhA9+ZkAAAA",cp="data:image/webp;base64,UklGRuQEAABXRUJQVlA4INgEAAAwMgCdASraAkwAPolEnEulI6wnoFgJSYARCWluCv+9wf/5wfXooaOTIArgRthwcxwe6p02yl7NNWTrxBF+2eX+v/0ZsgL/3ANxaYHcG/GVoVGNKmJ7J5dufJF4wtuvDOPRV92szkn8kntNVaj7hZCZPJ4UE76Ptn7NW9BaqVLrbUe35LenGfkmdSAmYWtPJz3JU9E/raG6fObpPQyP5N5R0WSX94My7Hh4HW3Yxlr97c0xQqdCfhqtwKVfp7K+zChWIIzPFMDwvkEVq33FAqAeWTWrVa40W62O2hrDB6ZL1U7tlxLt7325ObNRWnHe3XQzsHBKgtN4KjG0HBhifeZoYTK2nhwUdehpXouLgSKTXZL/v69jwllV9+/bz2t+7Dxq+Mya6HdWKpart+Z/tm0UgpShicDyPA+Kr3080/MkC4ineGxflDF3GawjXYfuAEswZpSMFKmsmKQDqFm5CRzSRH0DrjMGqTziMx/aVSZBDd6NKbDGYbQaT0KdyGxAGAGqMmuBy/P+qWfS9FPbkaY9OQfP1gRajTObAAD9pl3mU/DkD+1lpvfyB+VTd7MYptr3Ap3432QsRUgn+FrrKt8n0xDZoy8iTPvjeVy10+7BMPexT1a1AU2dZkSSszNMhFv8v8jnR5v3Xn5jBcqj7U229AHTlwSZpKUZIYs7ysJLPDJMel520QnLUEi8l4mPXFE4skzJAHCCckD+yyrAo/l3hobXi7cDmOr8esrUEDUvTPjrl7XEoUh7amMlAOxQvCWOftz/BsDf28nkJgW4OhCCJeUhykWoo/VGOQBVjai4HKsCA8Ss/B1eetJYhR4fLl07Jq25BQb3Sdbf5b/s6HMFRAsokU2+o8MbP8YINkJiNb4v6CcFfdV/eQUVr6/NAal2IoHmBEmi2BjspPf/KuUQBbyZuGx6HxXip+SynOJnhYYinLJPhUNkqw6SKgJ9BdMZ0LihR3PmYRJhIC9hwCiVzZeT19Fqs9Vo5n267BsvAOFc9uXwENvYuFxdI3fQ488zi7irnzQB2DwtkgGAT8iNwbbSNVWkjWpQtOZaaLjttCEm/F2yJ9zT2hc+hm1kE6udkpqan7ICQ+9lwlPf297iMLV0g9fkB0CvOzrUp61otptnr5HbfjxLfTM9kJ2vl5/ELueEaz29CEufGQJ/xvBtBoHjkyMlzIv+DFHsxy99MfRiZKYupMZtbLyjBUcfP1BpKDxM6sIiBBqyQtGOmm3lWhwr3HJ/liH8IK7Ft5wmu9Dz08zuUg9lz/Ajq3Kx4bNjmK8PjFPlT2NKHZ0PcNIfEvDxx0bpf5I3RTF6LviGrb6X2sOYkczfQALn/g+5jRFeXtcHncLR1xqN3G72LwNzaticBRKMZysHRMTkPria5mgxaAAVf88/e48gzvPjjiegFBu3MXLWdjTOnHK+BFkBBHWHqfraHUFmycrqXtFIH8FBlsIKyGFbzLRaJ0xoOfu29T/d9q/8hq7POGxeWZsUiDi2Cuvcl3gQyjGPaGw5jcBrewE2O4cR7SPYooUoIobgc2zyGANGzxG6zcFqw7hZ5YomhTeJLQ3EFH+gI9ZMoaqZCXqjbenfuz8XSXMVgsG8IFDO2YQAsQzHwv61hteyVEhvcZHppUU7jhRuy+FeqW2UR+OSAAAA";var hp={glyphs:{0:{ha:400,x_min:33,x_max:367,o:"m 200 -10 q 76 36 119 -10 q 33 166 33 82 l 33 166 l 33 534 q 76 664 33 618 q 200 710 119 710 l 200 710 q 324 664 281 710 q 367 534 367 618 l 367 534 l 367 166 q 324 36 367 82 q 200 -10 281 -10 l 200 -10 z m 200 90 q 257 159 257 90 l 257 159 l 257 541 q 200 610 257 610 l 200 610 q 143 541 143 610 l 143 541 l 143 159 q 200 90 143 90 l 200 90 z"},1:{ha:400,x_min:80,x_max:305,o:"m 195 0 l 195 534 l 80 534 l 80 612 q 156 620 127 612 q 201 647 184 628 q 231 700 218 665 l 231 700 l 305 700 l 305 0 l 195 0 z"},2:{ha:400,x_min:39,x_max:367,o:"m 39 0 l 39 76 q 63 205 39 151 q 149 323 87 258 l 149 323 q 234 434 210 388 q 257 530 257 480 l 257 530 q 243 593 257 575 q 200 610 228 610 l 200 610 q 143 541 143 610 l 143 541 l 143 466 l 39 466 l 39 534 q 81 665 39 619 q 203 710 123 710 l 203 710 q 325 665 283 710 q 367 534 367 619 l 367 534 q 337 409 367 470 q 231 269 306 348 l 231 269 q 165 185 182 217 q 148 115 148 152 l 148 115 l 148 100 l 357 100 l 357 0 l 39 0 z"},3:{ha:400,x_min:33,x_max:361,o:"m 197 -10 q 75 35 116 -10 q 33 164 33 80 l 33 164 l 33 221 l 137 221 l 137 159 q 194 90 137 90 l 194 90 q 237 108 222 90 q 251 169 251 125 l 251 169 l 251 226 q 234 295 251 274 q 179 315 217 315 l 179 315 l 142 315 l 142 415 l 182 415 q 232 432 215 415 q 248 489 248 449 l 248 489 l 248 540 q 233 593 248 576 q 193 610 218 610 l 193 610 q 140 545 140 610 l 140 545 l 140 499 l 36 499 l 36 536 q 78 665 36 620 q 197 710 119 710 l 197 710 q 317 666 276 710 q 358 537 358 621 l 358 537 l 358 512 q 339 421 358 455 q 280 371 320 386 l 280 371 l 280 369 q 342 317 323 353 q 361 225 361 281 l 361 225 l 361 163 q 320 35 361 79 q 197 -10 278 -10 l 197 -10 z"},4:{ha:400,x_min:15,x_max:387,o:"m 225 0 l 225 127 l 15 127 l 15 227 l 215 700 l 335 700 l 335 227 l 387 227 l 387 127 l 335 127 l 335 0 l 225 0 z m 115 227 l 225 227 l 225 500 l 223 500 l 115 227 z"},5:{ha:400,x_min:38,x_max:366,o:"m 202 -10 q 80 36 122 -10 q 38 166 38 81 l 38 166 l 38 221 l 142 221 l 142 158 q 199 90 142 90 l 199 90 q 256 158 256 90 l 256 158 l 256 315 q 199 384 256 384 l 199 384 q 142 315 142 384 l 142 315 l 142 309 l 38 309 l 58 700 l 348 700 l 348 600 l 156 600 l 147 433 l 149 433 q 244 484 180 484 l 244 484 q 335 443 304 484 q 366 324 366 402 l 366 324 l 366 166 q 324 36 366 81 q 202 -10 282 -10 l 202 -10 z"},6:{ha:400,x_min:36,x_max:370,o:"m 203 -10 q 79 36 122 -10 q 36 166 36 82 l 36 166 l 36 528 q 204 710 36 710 l 204 710 q 326 665 284 710 q 368 534 368 619 l 368 534 l 368 521 l 264 521 l 264 541 q 207 610 264 610 l 207 610 q 161 591 176 610 q 146 524 146 572 l 146 524 l 146 390 l 148 390 q 248 451 177 451 l 248 451 q 339 410 308 451 q 370 291 370 369 l 370 291 l 370 166 q 327 36 370 82 q 203 -10 284 -10 l 203 -10 z m 203 90 q 260 158 260 90 l 260 158 l 260 282 q 203 351 260 351 l 203 351 q 146 282 146 351 l 146 282 l 146 158 q 203 90 146 90 l 203 90 z"},7:{ha:400,x_min:34,x_max:364,o:"m 80 0 l 256 600 l 34 600 l 34 700 l 364 700 l 364 604 l 192 0 l 80 0 z"},8:{ha:400,x_min:28,x_max:372,o:"m 200 -10 q 73 35 117 -10 q 28 163 28 79 l 28 163 l 28 225 q 45 313 28 277 q 100 368 62 348 l 100 368 l 100 370 q 49 423 65 389 q 32 508 32 456 l 32 508 l 32 537 q 76 666 32 621 q 200 710 119 710 l 200 710 q 325 666 281 710 q 368 537 368 621 l 368 537 l 368 508 q 300 370 368 408 l 300 370 l 300 368 q 355 313 338 348 q 372 225 372 277 l 372 225 l 372 163 q 328 35 372 79 q 200 -10 283 -10 l 200 -10 z m 200 415 q 258 485 258 415 l 258 485 l 258 540 q 200 610 258 610 l 200 610 q 142 540 142 610 l 142 540 l 142 485 q 200 415 142 415 l 200 415 z m 200 90 q 262 169 262 90 l 262 169 l 262 236 q 200 315 262 315 l 200 315 q 138 236 138 315 l 138 236 l 138 169 q 200 90 138 90 l 200 90 z"},9:{ha:400,x_min:30,x_max:364,o:"m 196 -10 q 74 36 116 -10 q 32 166 32 81 l 32 166 l 32 179 l 136 179 l 136 159 q 193 90 136 90 l 193 90 q 239 109 224 90 q 254 176 254 128 l 254 176 l 254 310 l 252 310 q 152 249 223 249 l 152 249 q 61 290 92 249 q 30 409 30 331 l 30 409 l 30 534 q 73 664 30 618 q 197 710 116 710 l 197 710 q 321 664 278 710 q 364 534 364 618 l 364 534 l 364 172 q 196 -10 364 -10 l 196 -10 z m 197 349 q 254 418 254 349 l 254 418 l 254 542 q 197 610 254 610 l 197 610 q 140 542 140 610 l 140 542 l 140 418 q 197 349 140 349 l 197 349 z"},A:{ha:401,x_min:12,x_max:389,o:"m 12 0 l 126 700 l 275 700 l 389 0 l 279 0 l 259 139 l 259 137 l 134 137 l 114 0 l 12 0 z m 147 232 l 246 232 l 197 578 l 195 578 l 147 232 z"},B:{ha:404,x_min:41,x_max:381,o:"m 41 0 l 41 700 l 207 700 q 331 661 292 700 q 370 539 370 621 l 370 539 l 370 511 q 353 423 370 457 q 299 374 335 389 l 299 374 l 299 372 q 381 226 381 344 l 381 226 l 381 166 q 339 43 381 85 q 214 0 296 0 l 214 0 l 41 0 z m 151 415 l 194 415 q 244 432 227 415 q 260 489 260 449 l 260 489 l 260 528 q 247 583 260 566 q 204 600 233 600 l 204 600 l 151 600 l 151 415 z m 151 100 l 214 100 q 257 116 243 100 q 271 169 271 131 l 271 169 l 271 230 q 255 297 271 278 q 200 315 238 315 l 200 315 l 151 315 l 151 100 z"},C:{ha:383,x_min:34,x_max:358,o:"m 196 -10 q 76 35 117 -10 q 34 162 34 80 l 34 162 l 34 538 q 76 665 34 620 q 196 710 117 710 l 196 710 q 317 665 275 710 q 358 538 358 620 l 358 538 l 358 464 l 254 464 l 254 545 q 199 610 254 610 l 199 610 q 144 545 144 610 l 144 545 l 144 154 q 199 90 144 90 l 199 90 q 254 154 254 90 l 254 154 l 254 261 l 358 261 l 358 162 q 317 35 358 80 q 196 -10 275 -10 l 196 -10 z"},D:{ha:406,x_min:41,x_max:373,o:"m 41 0 l 41 700 l 209 700 q 332 656 291 700 q 373 527 373 612 l 373 527 l 373 173 q 332 44 373 88 q 209 0 291 0 l 209 0 l 41 0 z m 151 100 l 207 100 q 249 116 234 100 q 263 168 263 132 l 263 168 l 263 532 q 249 584 263 568 q 207 600 234 600 l 207 600 l 151 600 l 151 100 z"},E:{ha:363,x_min:41,x_max:341,o:"m 41 0 l 41 700 l 341 700 l 341 600 l 151 600 l 151 415 l 302 415 l 302 315 l 151 315 l 151 100 l 341 100 l 341 0 l 41 0 z"},F:{ha:344,x_min:41,x_max:332,o:"m 41 0 l 41 700 l 332 700 l 332 600 l 151 600 l 151 405 l 293 405 l 293 305 l 151 305 l 151 0 l 41 0 z"},G:{ha:391,x_min:33,x_max:361,o:"m 197 -10 q 75 36 117 -10 q 33 166 33 81 l 33 166 l 33 534 q 75 665 33 619 q 197 710 117 710 l 197 710 q 319 665 277 710 q 361 534 361 619 l 361 534 l 361 474 l 257 474 l 257 541 q 200 610 257 610 l 200 610 q 143 541 143 610 l 143 541 l 143 158 q 200 90 143 90 l 200 90 q 257 158 257 90 l 257 158 l 257 295 l 202 295 l 202 395 l 361 395 l 361 166 q 319 36 361 81 q 197 -10 277 -10 l 197 -10 z"},H:{ha:420,x_min:41,x_max:379,o:"m 41 0 l 41 700 l 151 700 l 151 415 l 269 415 l 269 700 l 379 700 l 379 0 l 269 0 l 269 315 l 151 315 l 151 0 l 41 0 z"},I:{ha:192,x_min:41,x_max:151,o:"m 41 0 l 41 700 l 151 700 l 151 0 l 41 0 z"},J:{ha:265,x_min:16,x_max:227,o:"m 67 -4 q 16 0 37 -4 l 16 0 l 16 100 q 52 96 32 96 l 52 96 q 101 113 85 96 q 117 163 117 129 l 117 163 l 117 700 l 227 700 l 227 166 q 188 38 227 80 q 67 -4 148 -4 l 67 -4 z"},K:{ha:414,x_min:41,x_max:403,o:"m 41 0 l 41 700 l 151 700 l 151 405 l 291 700 l 401 700 l 270 443 l 403 0 l 288 0 l 195 312 l 151 223 l 151 0 l 41 0 z"},L:{ha:344,x_min:41,x_max:332,o:"m 41 0 l 41 700 l 151 700 l 151 100 l 332 100 l 332 0 l 41 0 z"},M:{ha:538,x_min:41,x_max:497,o:"m 41 0 l 41 700 l 198 700 l 268 199 l 270 199 l 340 700 l 497 700 l 497 0 l 393 0 l 393 530 l 391 530 l 311 0 l 219 0 l 139 530 l 137 530 l 137 0 l 41 0 z"},N:{ha:427,x_min:41,x_max:386,o:"m 41 0 l 41 700 l 179 700 l 286 281 l 288 281 l 288 700 l 386 700 l 386 0 l 273 0 l 141 511 l 139 511 l 139 0 l 41 0 z"},O:{ha:400,x_min:33,x_max:367,o:"m 200 -10 q 76 36 119 -10 q 33 166 33 82 l 33 166 l 33 534 q 76 664 33 618 q 200 710 119 710 l 200 710 q 324 664 281 710 q 367 534 367 618 l 367 534 l 367 166 q 324 36 367 82 q 200 -10 281 -10 l 200 -10 z m 200 90 q 257 159 257 90 l 257 159 l 257 541 q 200 610 257 610 l 200 610 q 143 541 143 610 l 143 541 l 143 159 q 200 90 143 90 l 200 90 z"},P:{ha:386,x_min:41,x_max:367,o:"m 41 0 l 41 700 l 203 700 q 326 656 285 700 q 367 527 367 612 l 367 527 l 367 458 q 326 329 367 373 q 203 285 285 285 l 203 285 l 151 285 l 151 0 l 41 0 z m 151 385 l 203 385 q 244 400 230 385 q 257 451 257 415 l 257 451 l 257 534 q 244 585 257 570 q 203 600 230 600 l 203 600 l 151 600 l 151 385 z"},Q:{ha:400,x_min:33,x_max:394,o:"m 365 -65 q 273 2 290 -65 l 273 2 q 200 -10 242 -10 l 200 -10 q 76 36 119 -10 q 33 166 33 82 l 33 166 l 33 534 q 76 664 33 618 q 200 710 119 710 l 200 710 q 324 664 281 710 q 367 534 367 618 l 367 534 l 367 166 q 336 51 367 96 l 336 51 q 351 38 342 41 q 377 35 360 35 l 377 35 l 394 35 l 394 -65 l 365 -65 z m 200 90 q 257 159 257 90 l 257 159 l 257 541 q 200 610 257 610 l 200 610 q 143 541 143 610 l 143 541 l 143 159 q 200 90 143 90 l 200 90 z"},R:{ha:403,x_min:41,x_max:380,o:"m 41 0 l 41 700 l 204 700 q 328 661 289 700 q 367 539 367 621 l 367 539 l 367 496 q 295 358 367 387 l 295 358 l 295 356 q 352 307 335 344 q 368 208 368 270 l 368 208 l 368 85 q 370 37 368 55 q 380 0 372 18 l 380 0 l 268 0 q 260 32 262 17 q 258 86 258 47 l 258 86 l 258 214 q 243 281 258 262 q 189 300 227 300 l 189 300 l 151 300 l 151 0 l 41 0 z m 151 400 l 191 400 q 241 417 224 400 q 257 474 257 434 l 257 474 l 257 528 q 244 583 257 566 q 201 600 230 600 l 201 600 l 151 600 l 151 400 z"},S:{ha:372,x_min:22,x_max:350,o:"m 184 -10 q 63 36 104 -10 q 22 166 22 81 l 22 166 l 22 206 l 126 206 l 126 158 q 183 90 126 90 l 183 90 q 226 107 211 90 q 240 160 240 123 l 240 160 q 220 238 240 204 q 146 318 200 271 l 146 318 q 51 427 78 378 q 24 536 24 475 l 24 536 q 66 665 24 619 q 188 710 108 710 l 188 710 q 308 665 267 710 q 348 534 348 619 l 348 534 l 348 505 l 244 505 l 244 541 q 230 594 244 577 q 189 610 216 610 l 189 610 q 134 543 134 610 l 134 543 q 155 472 134 505 q 229 392 175 439 l 229 392 q 324 283 298 332 q 350 168 350 234 l 350 168 q 308 36 350 82 q 184 -10 265 -10 l 184 -10 z"},T:{ha:364,x_min:12,x_max:352,o:"m 127 0 l 127 600 l 12 600 l 12 700 l 352 700 l 352 600 l 237 600 l 237 0 l 127 0 z"},U:{ha:402,x_min:37,x_max:365,o:"m 201 -10 q 79 36 121 -10 q 37 166 37 81 l 37 166 l 37 700 l 147 700 l 147 158 q 162 106 147 122 q 203 90 176 90 l 203 90 q 245 106 230 90 q 259 158 259 122 l 259 158 l 259 700 l 365 700 l 365 166 q 323 36 365 81 q 201 -10 281 -10 l 201 -10 z"},V:{ha:382,x_min:12,x_max:370,o:"m 118 0 l 12 700 l 123 700 l 195 157 l 197 157 l 269 700 l 370 700 l 264 0 l 118 0 z"},W:{ha:557,x_min:15,x_max:542,o:"m 86 0 l 15 700 l 121 700 l 170 162 l 172 162 l 224 700 l 344 700 l 396 162 l 398 162 l 447 700 l 542 700 l 471 0 l 334 0 l 284 472 l 282 472 l 232 0 l 86 0 z"},X:{ha:406,x_min:11,x_max:395,o:"m 11 0 l 138 358 l 17 700 l 133 700 l 207 474 l 209 474 l 285 700 l 389 700 l 268 358 l 395 0 l 279 0 l 199 244 l 197 244 l 115 0 l 11 0 z"},Y:{ha:394,x_min:9,x_max:385,o:"m 142 0 l 142 298 l 9 700 l 126 700 l 201 443 l 203 443 l 278 700 l 385 700 l 252 298 l 252 0 l 142 0 z"},Z:{ha:362,x_min:19,x_max:341,o:"m 19 0 l 19 98 l 223 600 l 29 600 l 29 700 l 341 700 l 341 602 l 137 100 l 341 100 l 341 0 l 19 0 z"}," ":{ha:160,x_min:0,x_max:0,o:""},".":{ha:188,x_min:41,x_max:147,o:"m 41 0 l 41 106 l 147 106 l 147 0 l 41 0 z"},",":{ha:188,x_min:41,x_max:147,o:"m 41 -120 l 77 0 l 41 0 l 41 106 l 147 106 l 147 11 l 92 -120 l 41 -120 z"},"'":{ha:188,x_min:38,x_max:150,o:"m 64 474 l 38 700 l 150 700 l 123 474 l 64 474 z"},"\u2019":{ha:188,x_min:35,x_max:147,o:"m 35 474 l 77 594 l 41 594 l 41 700 l 147 700 l 147 605 l 86 474 l 35 474 z"},'"':{ha:336,x_min:38,x_max:298,o:"m 64 474 l 38 700 l 150 700 l 123 474 l 64 474 z m 212 474 l 186 700 l 298 700 l 271 474 l 212 474 z"},"\u2013":{ha:300,x_min:0,x_max:300,o:"m 0 305 l 0 395 l 300 395 l 300 305 l 0 305 z"},"-":{ha:270,x_min:25,x_max:245,o:"m 25 300 l 25 400 l 245 400 l 245 300 l 25 300 z"},":":{ha:188,x_min:41,x_max:147,o:"m 41 381 l 41 487 l 147 487 l 147 381 l 41 381 z m 41 0 l 41 106 l 147 106 l 147 0 l 41 0 z"},"%":{ha:589,x_min:35,x_max:554,o:"m 141 311 q 62 340 89 311 q 35 423 35 369 l 35 423 l 35 598 q 62 681 35 652 q 141 710 89 710 l 141 710 q 220 681 193 710 q 247 598 247 652 l 247 598 l 247 423 q 220 340 247 369 q 141 311 193 311 l 141 311 z m 124 0 l 395 700 l 465 700 l 194 0 l 124 0 z m 141 374 q 177 418 177 374 l 177 418 l 177 603 q 141 647 177 647 l 141 647 q 105 603 105 647 l 105 603 l 105 418 q 141 374 105 374 l 141 374 z m 448 -10 q 369 19 396 -10 q 342 102 342 48 l 342 102 l 342 277 q 369 360 342 331 q 448 389 396 389 l 448 389 q 527 360 500 389 q 554 277 554 331 l 554 277 l 554 102 q 527 19 554 48 q 448 -10 500 -10 l 448 -10 z m 448 53 q 484 97 484 53 l 484 97 l 484 282 q 448 326 484 326 l 448 326 q 412 282 412 326 l 412 282 l 412 97 q 448 53 412 53 l 448 53 z"},"&":{ha:417,x_min:34,x_max:397,o:"m 156 -10 q 65 31 96 -10 q 34 150 34 72 l 34 150 l 34 223 q 53 315 34 278 q 115 369 72 352 l 115 369 l 115 371 q 58 423 76 387 q 39 514 39 458 l 39 514 l 39 527 q 80 656 39 612 q 203 700 121 700 l 203 700 l 329 700 l 329 600 l 205 600 q 164 584 178 600 q 149 532 149 568 l 149 532 l 149 489 q 166 432 149 449 q 215 415 182 415 l 215 415 l 258 415 l 258 493 l 366 493 l 366 415 l 397 415 l 397 315 l 366 315 l 366 85 q 368 37 366 55 q 378 0 370 18 l 378 0 l 268 0 q 258 55 260 22 l 258 55 l 256 55 q 215 6 238 22 q 156 -10 191 -10 l 156 -10 z m 197 90 q 258 153 249 90 l 258 153 l 258 315 l 216 315 q 161 295 178 315 q 144 226 144 274 l 144 226 l 144 155 q 158 105 144 120 q 197 90 172 90 l 197 90 z"},"/":{ha:389,x_min:9,x_max:380,o:"m 9 0 l 285 700 l 380 700 l 104 0 l 9 0 z"},"!":{ha:210,x_min:50,x_max:160,o:"m 64 185 l 50 408 l 50 700 l 160 700 l 160 408 l 146 185 l 64 185 z m 52 0 l 52 106 l 158 106 l 158 0 l 52 0 z"},"?":{ha:363,x_min:19,x_max:343,o:"m 117 185 l 117 227 q 129 298 117 264 q 171 375 140 331 l 171 375 q 220 463 207 426 q 233 541 233 500 l 233 541 q 219 594 233 577 q 178 610 205 610 l 178 610 q 137 594 151 610 q 123 541 123 577 l 123 541 l 123 465 l 19 465 l 19 534 q 60 665 19 619 q 180 710 101 710 l 180 710 q 302 665 260 710 q 343 534 343 619 l 343 534 q 327 446 343 488 q 270 350 310 403 l 270 350 q 226 279 238 307 q 213 223 213 250 l 213 223 l 213 185 l 117 185 z m 112 0 l 112 106 l 218 106 l 218 0 l 112 0 z"}},familyName:"Bebas Neue",ascender:900,descender:-300,underlinePosition:-100,underlineThickness:50,boundingBox:{yMin:-200,xMin:-209,yMax:912,xMax:810},resolution:1e3,original_font_information:{format:0,copyright:"Copyright 2010 Dharma Type. SIL Open Font License 1.1",fontFamily:"Bebas Neue"}};var Ne=Math.PI,wn=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Ht=(i,e,t)=>i+(e-i)*t,Fi=(i,e,t)=>{let n=wn((t-i)/(e-i));return n*n*(3-2*n)},er=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,vu=i=>1-(1-i)**3,_i=(i,e,t,n)=>e+(i-e)*Math.exp(-t*n),Su=()=>new Promise(i=>setTimeout(i)),An=7.8,hi=1.5,S1=.17,Mu=1.3,Cc=.16,bu={Hard:{depth:.08,radius:.85,k:250,c:27,crown:.018},Medium:{depth:.16,radius:1,k:130,c:15,crown:.045},Soft:{depth:.3,radius:1.2,k:72,c:8,crown:.08}},di=i=>()=>{i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296};function xo(i,e,t,n){let s=di(n),r=new Float32Array(e*t);for(let a=0;a<r.length;a++)r[a]=s();let o=new Float32Array(i*i);for(let a=0;a<i;a++){let l=a/i*t,c=l|0,h=(c+1)%t,u=l-c;u=u*u*(3-2*u);for(let d=0;d<i;d++){let f=d/i*e,p=f|0,S=(p+1)%e,m=f-p;m=m*m*(3-2*m);let g=r[c*e+p],b=r[c*e+S],A=r[h*e+p],y=r[h*e+S];o[a*i+d]=g+(b-g)*m+(A-g)*u+(g-b-A+y)*m*u}}return o}function Pu(i,e,t){let n=new Uint8Array(e*e*4);for(let s=0,r=0;s<e;s++){let o=(s+e-1)%e*e,a=(s+1)%e*e,l=s*e;for(let c=0;c<e;c++,r+=4){let h=i[l+(c+e-1)%e],u=i[l+(c+1)%e],d=i[o+c],f=i[a+c],p=(h-u)*t,S=(d-f)*t,m=1/Math.sqrt(p*p+S*S+1);n[r]=(p*m*.5+.5)*255,n[r+1]=(S*m*.5+.5)*255,n[r+2]=(m*.5+.5)*255,n[r+3]=255}}return n}var Rs=8;function Iu(i,e,t){let n=new jr(i,e,e,Ri);return n.wrapS=n.wrapT=Xi,n.magFilter=Zn,n.minFilter=Yi,n.generateMipmaps=!0,n.anisotropy=Rs,t&&(n.colorSpace=Tn),n.needsUpdate=!0,n}function up(i,e){let t=new Float32Array(i*i),n=xo(i,10,e.threads,11),s=xo(i,e.threads,10,23),r=xo(i,e.threads,e.threads,5),o=xo(i,12,12,7);for(let a=0,l=0;a<i;a++){let c=a/i;for(let h=0;h<i;h++,l++){let u=h/i,d=(u+c)*e.cells,f=(u-c)*e.cells,p=Math.abs(Math.sin(Ne*d)),S=Math.abs(Math.sin(Ne*f)),m=(p*S)**e.round,g=Math.min(p,S),A=((p<S?f:d)*e.stitches%1+1)%1<.6?1:0,y=1-Fi(0,e.seam,g),R=1-Fi(.05,.24,Math.hypot(p,S)),E=n[l]*.5+s[l]*.5;t[l]=m+y*A*.018+R*.1*(e.tuft??1)+(o[l]-.5)*.05+(E-.5)*.011+(r[l]-.5)*.0016}}return Iu(Pu(t,i,e.normal),i,!1)}function dp(i,e,t,n){let s=new Float32Array(i*i);return t.forEach(([r,o,a],l)=>{let c=xo(i,r,o,n+l);for(let h=0;h<s.length;h++)s[h]+=c[h]*a}),Iu(Pu(s,i,e),i,!1)}function M1(i,e){let t=new Float32Array(i*i),n=xo(i,48,48,81);for(let s=0,r=0;s<i;s++)for(let o=0;o<i;o++,r++)t[r]=Math.sin(2*Ne*o/i*e)*Math.sin(2*Ne*s/i*e)*.5+(n[r]-.5)*.08;return Iu(Pu(t,i,9),i,!1)}function Ic(i,e,t){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createRadialGradient(i/2,i/2,i*e,i/2,i/2,i*t);return r.addColorStop(0,"#fff"),r.addColorStop(.55,"#888"),r.addColorStop(1,"#000"),s.fillStyle=r,s.fillRect(0,0,i,i),new ti(n)}var fp=i=>new Promise(e=>{let t=new Image;t.onload=()=>{let n=new Jn(t);n.wrapS=n.wrapT=Xi,n.colorSpace=Tn,n.anisotropy=Rs,n.needsUpdate=!0,e(n)},t.src=i});function Eu(i,e,t){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d");e(s,i);let r=new ti(n);return r.wrapS=r.wrapT=Xi,r.colorSpace=Tn,r.anisotropy=Rs,r.repeat.set(t,t),r}function Ui(i,e,t,n,s,r){for(let o of[-e,0,e])for(let a of[-e,0,e]){let l=t+o,c=n+a;l+s<0||l-s>e||c+s<0||c-s>e||(i.save(),i.translate(l,c),r(i),i.restore())}}function Pi(i,e,t,n=.05){i.fillStyle=t,i.fillRect(0,0,e,e);let s=di(9),r=Math.max(2,e/512);for(let o=0;o<e;o+=r)i.fillStyle=`rgba(0,0,0,${(s()*n).toFixed(3)})`,i.fillRect(0,o,e,r/2),i.fillStyle=`rgba(255,255,255,${(s()*n).toFixed(3)})`,i.fillRect(o,0,r/2,e)}var Cu=(i,e,t)=>{i.beginPath(),i.moveTo(0,0),i.bezierCurveTo(t,-e*.25,t*.8,-e*.75,0,-e),i.bezierCurveTo(-t*.8,-e*.75,-t,-e*.25,0,0),i.closePath()},Ru=(i,e,t,n)=>{i.beginPath(),i.moveTo(0,0),i.lineTo(0,-e*.97);for(let s=1;s<n;s++){let r=-e*s/n,o=t*Math.sin(Ne*s/n)*.85;i.moveTo(0,r+e*.03),i.lineTo(o,r-e*.07),i.moveTo(0,r+e*.03),i.lineTo(-o,r-e*.07)}};function b1(i,e){let t="rgba(234,245,251,.96)";i.fillStyle=t,i.beginPath(),i.arc(0,0,e,0,Ne*2),i.fill(),i.fillStyle="#2b4fbd",i.beginPath(),i.arc(0,0,e*.8,0,Ne*2),i.fill(),i.fillStyle=t;for(let n=0;n<16;n++){let s=n/16*Ne*2;i.beginPath(),i.ellipse(Math.cos(s)*e*.62,Math.sin(s)*e*.62,e*.16,e*.07,s,0,Ne*2),i.fill()}i.strokeStyle="rgba(118,201,219,.95)",i.lineWidth=e*.05,i.beginPath(),i.arc(0,0,e*.4,0,Ne*2),i.stroke(),i.fillStyle=t,i.beginPath(),i.arc(0,0,e*.2,0,Ne*2),i.fill()}function w1(i,e){let t=["#f47a35","#ff9d5c","#e5506b","#f6c344"];for(let n=0;n<6;n++)i.save(),i.rotate(n/6*Ne*2),i.fillStyle=t[n%t.length],i.beginPath(),i.moveTo(0,0),i.lineTo(e*.22,-e*.5),i.lineTo(0,-e),i.lineTo(-e*.22,-e*.5),i.closePath(),i.fill(),i.restore();i.fillStyle="#3a1f2b",i.beginPath(),i.arc(0,0,e*.12,0,Ne*2),i.fill()}function wu(i,e,t){i.strokeStyle=t,i.fillStyle=t,i.lineWidth=e*.05;for(let n=0;n<8;n++)i.save(),i.rotate(n/8*Ne*2),i.beginPath(),i.ellipse(0,-e*.42,e*.14,e*.3,0,0,Ne*2),i.stroke(),i.restore();i.beginPath(),i.arc(0,0,e*.16,0,Ne*2),i.fill();for(let n=0;n<4;n++)i.save(),i.rotate(n/4*Ne*2+Ne/4),i.beginPath(),i.moveTo(0,-e*.72),i.bezierCurveTo(e*.4,-e*.86,e*.34,-e*1.14,0,-e*1.02),i.stroke(),i.beginPath(),i.moveTo(0,-e*.72),i.bezierCurveTo(-e*.4,-e*.86,-e*.34,-e*1.14,0,-e*1.02),i.stroke(),i.restore()}function T1(i,e,t){i.strokeStyle=t,i.lineWidth=e*.055;for(let n=0;n<8;n++){let s=n/8*Ne*2;i.beginPath(),i.arc(Math.cos(s)*e*.55,Math.sin(s)*e*.55,e*.42,0,Ne*2),i.stroke()}i.beginPath(),i.arc(0,0,e*.2,0,Ne*2),i.stroke()}function A1(i,e,t){i.strokeStyle=t,i.lineCap="round",i.lineWidth=e*.02,i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(e*.12,-e*.5,0,-e),i.stroke(),i.lineWidth=e*.014,i.beginPath();for(let n=1;n<24;n++){let s=n/24,r=-e*s,o=e*.12*Math.sin(Ne*s)*.9,a=e*.34*Math.sin(Ne*(s*.82+.1));i.moveTo(o,r),i.lineTo(o+a,r-a*.5),i.moveTo(o,r),i.lineTo(o-a,r-a*.5)}i.stroke()}function pp(i,e,t,n,s,r){i.strokeStyle=t,i.lineWidth=r,i.lineCap="round";for(let o=0;o<n;o++){let a=(o+.5)*e/n;i.beginPath();for(let l=0;l<=e;l+=4){let c=a+Math.sin(l/e*Ne*4+o*.9)*e*s;l?i.lineTo(l,c):i.moveTo(l,c)}i.stroke()}}function E1(i,e,t,n){Pi(i,e,t,.02);let s=4,r=e/s;i.strokeStyle=n,i.lineWidth=e*.007;for(let o=0;o<s;o++)for(let a=0;a<s;a++){let l=(a+.5)*r,c=(o+.5)*r,h=r*.5;for(let u=1;u<=4;u++){let d=h*u/4;i.beginPath();for(let f=0;f<=6;f++){let p=f/6*Ne*2+Ne/6,S=l+Math.cos(p)*d,m=c+Math.sin(p)*d;f?i.lineTo(S,m):i.moveTo(S,m)}i.stroke()}}}function C1(i,e,t,n,s){Pi(i,e,t,.05);let r=4,o=e/r,a=(l,c)=>{let h=Math.round((l%e+e)%e/(o/2))%(r*2),u=Math.round((c%e+e)%e/(o/2))%(r*2);return di(h*31+u*7+3)()<.34};i.fillStyle=s;for(let l=-r;l<r*2;l++)for(let c=-r;c<r*2;c++){let h=(l+c+1)/2*o,u=(c-l)/2*o;h<-o||h>e+o||u<-o||u>e+o||!a(h,u)||(i.beginPath(),i.moveTo(h,u-o/2),i.lineTo(h+o/2,u),i.lineTo(h,u+o/2),i.lineTo(h-o/2,u),i.closePath(),i.fill())}i.strokeStyle=n,i.lineWidth=e*.008;for(let l=-r;l<=r*2;l++)i.beginPath(),i.moveTo(l*o,0),i.lineTo(l*o+e,e),i.stroke(),i.beginPath(),i.moveTo(l*o,0),i.lineTo(l*o-e,e),i.stroke()}var _a={eco:{top:(i,e)=>{Pi(i,e,"#2346ad",.06),[[.2,.25,.4],[.7,.6,1.9],[.45,.9,2.6]].forEach(([n,s,r])=>Ui(i,e,n*e,s*e,e*.28,o=>{o.rotate(r),o.fillStyle="rgba(104,201,212,.55)",o.beginPath(),o.ellipse(0,0,e*.26,e*.13,0,0,Ne*2),o.fill()})),[[.25,.3,.16],[.76,.18,.13],[.58,.7,.17],[.06,.8,.12]].forEach(([n,s,r])=>Ui(i,e,n*e,s*e,e*r,o=>b1(o,e*r)))},side:(i,e)=>{Pi(i,e,"#f2f5fb",.03);let t=6,n=e/t;i.fillStyle="#2b4fbd";for(let s=0;s<t;s++)for(let r=0;r<=t;r++)i.beginPath(),i.arc((r+s%2*.5)*n,(s+.5)*n,n*.2,0,Ne*2),i.fill()},rep:[.32,1.1],quilt:!1,dark:!0,piping:"#f2f5fb",under:"#c9ccd6",label:["#ffffff","#2b4fbd"]},plush:{top:(i,e)=>{Pi(i,e,"#1b3488",.07),[[.24,.36,.4],[.73,.3,-.9],[.5,.82,2.2],[.96,.74,1.2]].forEach(([n,s,r])=>Ui(i,e,n*e,s*e,e*.34,o=>{o.rotate(r),o.strokeStyle="rgba(176,198,240,.9)",o.lineWidth=e*.006,Cu(o,e*.3,e*.11),o.stroke(),o.lineWidth=e*.003,Ru(o,e*.3,e*.11,9),o.stroke()}));let t=di(44);i.fillStyle="rgba(255,255,255,.08)";for(let n=0;n<2600;n++)i.fillRect(t()*e,t()*e,2,2)},rep:[.36,.5],quilt:!1,dark:!0,piping:"#eef0f7",under:"#1d2f6e",label:["#f3efe4","#223f98"]},vento:{top:(i,e)=>{Pi(i,e,"#132a4c",.05);let t=di(52),n=["#1d6f57","#2c9a6c","#4fb983","#0f5651","#3d8f5c"],s=[],r=[];for(let o=0;o<16;o++){let a=e*(.12+t()*.12);s.push([t()*e,t()*e,t()*Ne*2,a,n[o%n.length]])}for(let o=0;o<7;o++)r.push([t()*e,t()*e,t()*Ne*2]);s.forEach(([o,a,l,c,h])=>Ui(i,e,o,a,c,u=>{u.rotate(l),u.fillStyle=h,Cu(u,c,c*.38),u.fill(),u.strokeStyle="rgba(8,40,34,.55)",u.lineWidth=e*.0022,Ru(u,c,c*.38,7),u.stroke()})),r.forEach(([o,a,l])=>Ui(i,e,o,a,e*.07,c=>{c.rotate(l),w1(c,e*.055)}))},rep:[.34,.45],quilt:!1,dark:!0,piping:"#132a4c",under:"#10223e",label:["#f2c14e","#132a4c"]},aura:{top:(i,e)=>{Pi(i,e,"#f6f5f1",.025),[[.25,.25],[.75,.75]].forEach(([t,n])=>Ui(i,e,t*e,n*e,e*.2,s=>wu(s,e*.16,"#6f727b"))),[[.75,.25],[.25,.75]].forEach(([t,n])=>Ui(i,e,t*e,n*e,e*.09,s=>wu(s,e*.065,"#8d9097")))},side:(i,e)=>{Pi(i,e,"#f4f3ef",.025);for(let t=0;t<3;t++)Ui(i,e,(t+.5)*e/3,e*.5,e*.14,n=>wu(n,e*.1,"#9d9fa6"))},rep:[.6,.8],quilt:!0,piping:"#e2e1dc",under:"#cfcdc6",label:["#1d2b5e","#e9ecf5"]},"imperio-white":{top:(i,e)=>{Pi(i,e,"#f7f6f2",.02);let t=di(61),n=[];for(let s=0;s<5;s++)n.push([t()*e,t()*e,e*(.1+t()*.1),t()*Ne*2]);i.strokeStyle="rgba(128,128,140,.6)",i.lineWidth=e*.011,n.forEach(([s,r,o,a])=>Ui(i,e,s,r,o*1.1,l=>{l.rotate(a);for(let c=0;c<3;c++)l.beginPath(),l.arc(0,0,o*(1-c*.26),0,Ne*1.35),l.stroke()}))},side:(i,e)=>E1(i,e,"#ecebe7","#9c9ca5"),rep:[.32,.9],quilt:!0,piping:"#e6e2d4",under:"#cdcac2",label:["#2b47a8","#ffffff"]},"imperio-blue":{top:(i,e)=>C1(i,e,"#1b2d68","#3f66c8","rgba(138,166,234,.45)"),rep:[.9,1.2],quilt:!1,dark:!0,piping:"#eef0f6",under:"#172656",label:["#ffffff","#1b2d68"]},"camellia-pt":{top:(i,e)=>{Pi(i,e,"#f8f7f3",.02),pp(i,e,"rgba(118,118,126,.95)",3,.06,e*.02)},side:(i,e)=>{Pi(i,e,"#f5f4ef",.02),pp(i,e,"rgba(176,176,184,.95)",5,.04,e*.016)},rep:[.5,1],quilt:!0,piping:"#ece4cb",under:"#d3cfc4",label:["#b98b3f","#fffaf0"],topper:"pillow"},"camellia-et":{top:(i,e)=>{Pi(i,e,"#f7f6f4",.02),[[.25,.25,.14,"#9893b3"],[.75,.75,.14,"#9893b3"],[.75,.25,.08,"#aeaac4"],[.25,.75,.08,"#aeaac4"]].forEach(([t,n,s,r])=>Ui(i,e,t*e,n*e,e*s*1.1,o=>T1(o,e*s,r)))},rep:[.75,.9],quilt:!0,piping:"#e8e1cb",under:"#d3cfc4",label:["#24305f","#f2efe6"],topper:"euro"},emma:{top:(i,e)=>{Pi(i,e,"#edf3ea",.025),[[.2,.4,.5,"#6f757c"],[.7,.2,2.4,"#7fa66c"],[.55,.72,-.7,"#6f757c"],[.08,.92,1.6,"#7fa66c"],[.9,.62,3.6,"#80868d"]].forEach(([t,n,s,r])=>Ui(i,e,t*e,n*e,e*.34,o=>{o.rotate(s),A1(o,e*.32,r)}))},rep:[.36,.5],quilt:!1,piping:"#e6e4d4",under:"#cfd3cb",label:["#2f5d34","#f4f1e4"]}};function R1(i,e,t,n){let s=[];for(let r=0;r<t;r++)s.push(-(i-e+e*Math.tan((t-r)/t*Ne/4)));for(let r=0;r<=n;r++)s.push(-(i-e)+2*(i-e)*r/n);for(let r=1;r<=t;r++)s.push(i-e+e*Math.tan(r/t*Ne/4));return s}var Tu=[{n:[0,1,0],u:0,v:2,g:0},{n:[0,-1,0],u:0,v:2,g:2},{n:[0,0,1],u:0,v:1,g:1},{n:[0,0,-1],u:0,v:1,g:1},{n:[1,0,0],u:2,v:1,g:1},{n:[-1,0,0],u:2,v:1,g:1}],va=class{constructor({cs:e=3,seg:t=[1,1,1],groups:n=!1}){this.cs=e,this.seg=t;let s=Tu.map(l=>[e*2+t[l.u]+1,e*2+t[l.v]+1]),r=s.reduce((l,[c,h])=>l+c*h,0),o=[];this.geometry=new In;let a=0;Tu.forEach((l,c)=>{let[h,u]=s[c],d=o.length,f=(l.u===0&&l.v===2?1:0)^(l.n[0]+l.n[1]+l.n[2]<0?1:0)^(l.u===2?1:0);for(let p=0;p<u-1;p++)for(let S=0;S<h-1;S++){let m=a+p*h+S,g=m+1,b=m+h,A=b+1;f?o.push(m,b,g,g,b,A):o.push(m,g,b,g,A,b)}n&&this.geometry.addGroup(d,o.length-d,l.g),a+=h*u}),this.geometry.setIndex(o),this.pos=new Float32Array(r*3),this.nor=new Float32Array(r*3),this.uvs=new Float32Array(r*2),this.geometry.setAttribute("position",new fn(this.pos,3)),this.geometry.setAttribute("normal",new fn(this.nor,3)),this.geometry.setAttribute("uv",new fn(this.uvs,2))}fill(e,t,n,s,r={},o=[1,1,1]){let a=[e/2,t/2,n/2],{pos:l,nor:c,uvs:h,cs:u,seg:d}=this,f=a.map((E,x)=>R1(E,s,u,d[x])),p=r.crown||0,S=r.bulge||0,m=r.sag||0,g=a[0],b=a[2],A=a[1],y=0;for(let E of Tu){let x=3-E.u-E.v,w=E.n[x],k=o[E.g];for(let N of f[E.v])for(let O of f[E.u]){let H=[0,0,0];H[E.u]=O,H[E.v]=N,H[x]=w*a[x];let J=H.map((Ze,ne)=>wn(Ze,-(a[ne]-s),a[ne]-s)),I=H[0]-J[0],q=H[1]-J[1],K=H[2]-J[2],V=1/(Math.sqrt(I*I+q*q+K*K)||1);I*=V,q*=V,K*=V;let pe=J[0]+I*s,$=J[1]+q*s,re=J[2]+K*s;if(p||S||m){let Ze=pe/g,ne=re/b,Re=Fi(-A*.4,A,$),Ue=1-Ze**4,Qe=1-ne**4;$+=p*Ue*Qe*Re-m*Ze*Ze;let Pe=Math.cos($/A*Ne/2)*S;pe+=Pe*Math.sign(pe)*Fi(.7,1,Math.abs(Ze)),re+=Pe*Math.sign(re)*Fi(.8,1,Math.abs(ne)),I+=4*p*Ze**3*Qe*Re/g,K+=4*p*ne**3*Ue*Re/b;let We=1/Math.sqrt(I*I+q*q+K*K);I*=We,q*=We,K*=We}let le=y*3,ke=y*2;l[le]=pe,l[le+1]=$,l[le+2]=re,c[le]=I,c[le+1]=q,c[le+2]=K,h[ke]=O/(k[0]??k),h[ke+1]=N/(k[1]??k),y++}}let R=this.geometry;return R.attributes.position.needsUpdate=!0,R.attributes.normal.needsUpdate=!0,R.attributes.uv.needsUpdate=!0,R.computeBoundingSphere(),this}},ui=(i,e,t,n,s={})=>new va({cs:s.cs??2,seg:s.seg??[8,1,12],groups:!!s.groups}).fill(i,e,t,n,s.shape,s.tile??[1,1,1]),Lc=class extends li{constructor(e,t,n){super(),this.w=e,this.d=t,this.r=n}getPoint(e,t=new B){let{w:n,d:s,r}=this,o=n-2*r,a=s-2*r,l=Ne*r/2,c=2*(o+a)+4*l,h=(e%1+1)%1*c,u=n/2-r,d=s/2-r,f=[[o,p=>t.set(-u+p*o,0,d+r)],[l,p=>t.set(u+Math.sin(p*Ne/2)*r,0,d+Math.cos(p*Ne/2)*r)],[a,p=>t.set(u+r,0,d-p*a)],[l,p=>t.set(u+Math.cos(p*Ne/2)*r,0,-d-Math.sin(p*Ne/2)*r)],[o,p=>t.set(u-p*o,0,-d-r)],[l,p=>t.set(-u-Math.sin(p*Ne/2)*r,0,-d-Math.cos(p*Ne/2)*r)],[a,p=>t.set(-u-r,0,-d+p*a)],[l,p=>t.set(-u-Math.cos(p*Ne/2)*r,0,d+Math.sin(p*Ne/2)*r)]];for(let[p,S]of f){if(h<=p)return S(h/p),t;h-=p}return t}},ya={uDentA:{value:new pn(0,0,0,1)},uTopY:{value:hi+.7},uRange:{value:.5}};function Au(i){return i.onBeforeCompile=e=>{Object.assign(e.uniforms,ya),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
        uniform vec4 uDentA; uniform float uTopY, uRange;
        vec3 dentAt(vec4 d, vec3 p){ vec2 q = p.xz - d.xy; float g = exp(-dot(q, q) / (d.w * d.w)); return vec3(d.z * g, 2.0 * d.z * g * q / (d.w * d.w)); }`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        vec4 dentP = modelMatrix * vec4(position, 1.0);
        float dentMask = smoothstep(uTopY - uRange, uTopY - 0.05, dentP.y);
        vec3 dentS = dentAt(uDentA, dentP.xyz);
        objectNormal = normalize(objectNormal - vec3(dentS.y, 0.0, dentS.z) * dentMask);`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.y -= dentS.x * dentMask;`)},i.customProgramCacheKey=()=>"ec-dent",i}function P1(){let i=new io({side:bn});return i.onBeforeCompile=e=>{Object.assign(e.uniforms,ya),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
        uniform vec4 uDentA; uniform float uTopY, uRange;
        float dentAt(vec4 d, vec3 p){ vec2 q = p.xz - d.xy; return d.z * exp(-dot(q, q) / (d.w * d.w)); }`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec4 dentP = modelMatrix * vec4(position, 1.0);
        transformed.y -= dentAt(uDentA, dentP.xyz) * smoothstep(uTopY - uRange, uTopY - 0.05, dentP.y);`)},i.customProgramCacheKey=()=>"ec-dent-depth",i}function mp(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}var Rc=null;function gp(i){return Rc||(Rc=(async()=>{let e=i?512:1024,t=up(e,{cells:2,round:.42,seam:.13,stitches:12,normal:i?20:40,threads:i?96:190,tuft:.35});await Su();let n=up(e,{cells:1,round:.5,seam:.075,stitches:22,normal:i?34:68,threads:i?96:190,tuft:1.3});await Su();let s=dp(256,2.2,[[96,96,.7],[40,40,.5]],40),r=dp(256,1.5,[[256,10,.5],[10,256,.5],[64,64,.2]],70),o=M1(256,4),a=Eu(512,(h,u)=>{h.fillStyle="#a8a294",h.fillRect(0,0,u,u);let d=di(17),f=["#d9c27a","#7fa36b","#c96f63","#6b8cc7","#e6e1d3","#8c8c8c","#b9a27d","#f0e7c9","#6d6d64","#d08f4a","#cfd6e3"];for(let p=0;p<1500;p++){let S=d()*u,m=d()*u,g=3+d()*11,b=4+(d()*3|0),A=d()*Ne,y=f[d()*f.length|0],R=[];for(let E=0;E<b;E++){let x=A+E/b*Ne*2,w=g*(.6+d()*.5);R.push([Math.cos(x)*w,Math.sin(x)*w])}Ui(h,u,S,m,g*1.2,E=>{E.fillStyle=y,E.beginPath(),R.forEach(([x,w],k)=>k?E.lineTo(x,w):E.moveTo(x,w)),E.closePath(),E.fill()})}},1.4);await Su();let[l,c]=await Promise.all([fp(lp),fp(cp)]);return l.wrapS=l.wrapT=c.wrapS=c.wrapT=Xr,{N:e,topQ:t,sideQ:n,pore:s,weave:r,egg:o,chips:a,oakRail:l,oakPlank:c}})(),Rc)}function xp(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,.5)"),t.addColorStop(.5,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),i}function I1(i,e,t){let n=document.createElement("canvas");n.width=Math.max(1,Math.ceil(i.width/t)),n.height=Math.max(1,Math.ceil(i.height/t));let s=n.getContext("2d"),r=32;s.globalCompositeOperation="lighter",s.globalAlpha=1/r,s.imageSmoothingQuality="high";for(let o=0;o<r;o++){let a=e/t*Math.sqrt((o+.5)/r),l=o*2.39996;s.drawImage(i,Math.cos(l)*a,Math.sin(l)*a,n.width,n.height)}return n}async function L1(i,e){let t=matchMedia("(prefers-reduced-motion: reduce)").matches,n=Math.min(innerWidth,innerHeight)<600,s;try{s=new ga({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(_){return e.onFail?.(_),null}s.setPixelRatio(Math.min(devicePixelRatio||1,n?1.75:2)),s.toneMapping=ho,s.toneMappingExposure=1,s.shadowMap.enabled=!0,s.shadowMap.type=Ks,Rs=Math.min(12,s.capabilities.getMaxAnisotropy());let r=new ks,o=new Bn(20,1.6,4,120),a=new mi(new B(0,1,0),-(hi+.7));{let _=new ks,T=new Mr(s);_.background=new Ye("#1b2340");let P=(F,j,ue,we,de,He,rt)=>{let Be=new nt(new Qt(ue,we),new Xn({color:new Ye(F).multiplyScalar(j),side:bn}));Be.position.set(de,He,rt),Be.lookAt(0,0,0),_.add(Be)};P("#ffcf9a",7,9,9,-14,8,7),P("#9db8ff",5,7,14,15,6,-7),P("#ffe9d4",1.6,26,12,0,16,2),P("#39456f",1.2,40,40,0,-10,0),r.environment=T.fromScene(_,.05).texture,r.environmentIntensity=.4,T.dispose()}let{N:l,topQ:c,sideQ:h,pore:u,weave:d,egg:f,chips:p,oakRail:S,oakPlank:m}=await gp(n),g=(_={})=>new gi({roughness:.92,sheen:1,sheenRoughness:.55,sheenColor:new Ye("#fff6ec"),normalScale:new me(.62,.62),side:bn,shadowSide:bn,..._}),b=(_,T={})=>new Lt({color:_,roughness:.94,normalMap:u,...T}),A=new ti(document.createElement("canvas")),y={top:Au(g({map:A,normalMap:c})),side:Au(g({map:A,normalMap:h})),under:new Lt({color:"#c9c7c0",roughness:1,side:bn}),piping:Au(new gi({color:"#dddcd8",roughness:.7,sheen:.6,sheenRoughness:.6})),foam22:b("#f4f2ea"),foam25:b("#efe7d3"),foam30:b("#e4d8bb"),hd:b("#e3eaf1"),memory:b("#e8bf78"),pu:b("#e2efe4"),profile:b("#f3f1e9",{normalMap:f,normalScale:new me(1.5,1.5)}),rebond:b("#ffffff",{map:p}),zoneSoft:b("#f4f1e7"),zoneFirm:b("#cfb98a"),oak:new Lt({map:S,roughness:.5,color:new Ye(1.5,1.42,1.32)}),plank:new Lt({map:m,roughness:.55,color:new Ye(1.02,.98,.94)}),iron:new Lt({color:"#17181c",roughness:.5}),pillow:new gi({color:"#f4f2ec",roughness:1,sheen:1,sheenRoughness:.7,sheenColor:new Ye("#ffffff"),normalMap:u,normalScale:new me(.25,.25)})},R=new rn;r.add(R);let E=P1(),x=m.clone();x.wrapS=x.wrapT=Xi,x.repeat.set(5.2,64),x.needsUpdate=!0;let w=new nt(new Qt(64,52),new Lt({map:x,color:"#56423a",roughness:.4,alphaMap:Ic(512,.2,.5),transparent:!0}));w.rotation.x=-Ne/2,w.position.x=2,w.receiveShadow=!0,r.add(w);let k=new nt(new Qt(64,24),new Lt({color:"#1d2547",roughness:.96,alphaMap:Ic(512,.3,.5),transparent:!0}));k.position.set(2,7.4,-An/2-.75),k.receiveShadow=!0,r.add(k);{let _=document.createElement("canvas");_.width=_.height=256;let T=_.getContext("2d");T.filter="blur(22px)",T.fillStyle="#000",T.fillRect(50,50,156,156);let P=new nt(new Qt(1,1),new Xn({map:new ti(_),transparent:!0,opacity:.55,depthWrite:!1}));P.rotation.x=-Ne/2,P.position.y=.012,P.scale.set(11,13,1),R.add(P),R.contact=P}let N=new rn;R.add(N);let O=(_,T,P,F,j,ue=N,we=!0)=>{let de=new nt(_,T);return de.position.set(P,F,j),de.castShadow=we,de.receiveShadow=!0,ue.add(de),de},H=.68,J=.19,I=hi-H/2,q=ui(1,H,J,.025,{seg:[1,1,1],tile:[[1,.74],[1,.74],[1,.74]]}).geometry,K=ui(J,H,An+.44,.025,{seg:[1,1,8],tile:[[1,.74],[8.3,.74],[1,.74]]}).geometry,V=O(q,y.oak,0,I,An/2+.12),pe=O(q,y.oak,0,I,-An/2-.12),$=[O(K,y.oak,0,I,0),O(K,y.oak,0,I,0)],re=new Kn(.13,.075,hi-H+.1,4,1);re.rotateY(Ne/4);let le=[-1,1].flatMap(_=>[-1,1].map(T=>{let P=O(re,y.oak,0,(hi-H+.1)/2,T*(An/2+.1));return P.userData.sx=_,P}));[-.34,.34].forEach(_=>O(new Kn(.06,.06,hi-H,16),y.iron,_*.9,(hi-H)/2,An*.22)),[-.34,.34].forEach(_=>O(new Kn(.06,.06,hi-H,16),y.iron,_*.9,(hi-H)/2,-An*.22));let ke=ui(1,.05,.32,.015,{seg:[1,1,1]}).geometry,Ze=Array.from({length:11},(_,T)=>O(ke,y.oak,0,hi-.04,-An/2+.35+T*(An-.7)/10)),ne=2.75,Re=1,Ue=new Ws;{let T=Re/2,P=ne,F=.36;Ue.moveTo(-T,0),Ue.lineTo(T,0),Ue.lineTo(T,P-F),Ue.absellipse(T-.055,P-F,.055,F,0,Ne/2,!1,0),Ue.lineTo(-T+.055,P),Ue.absellipse(-T+.055,P-F,.055,F,Ne/2,Ne,!1,0),Ue.lineTo(-T,0)}let Qe=new qs(Ue,{depth:.13,bevelEnabled:!0,bevelThickness:.03,bevelSize:.012,bevelSegments:3,curveSegments:24}),Pe=O(Qe,y.plank,0,hi-.35,-An/2-.37),We=new rn,Nt=new rn;R.add(We,Nt);let lt=new Lt({color:"#2a2320",roughness:.45}),St=new gi({color:"#ece9e2",roughness:.35,clearcoat:.4});O(new Kn(.82,.82,.07,48),lt,0,2.05,0,We),[0,2.09,4.19].forEach(_=>{O(new Kn(.045,.03,2.02,10),lt,Math.cos(_)*.48,1.01,Math.sin(_)*.48,We).rotation.set(Math.sin(_)*.1,0,-Math.cos(_)*.1)});let wt=new as([[0,0],[.2,.02],[.34,.16],[.36,.28],[.26,.42],[.12,.5],[.1,.58]].map(([_,T])=>new me(_,T)),32);O(wt,St,-.15,2.09,.05,We),O(ui(1.9,1.42,1.5,.03,{seg:[2,2,2]}).geometry,y.oak,0,1.2,0,Nt),O(ui(1.74,.62,.05,.012,{seg:[2,2,1]}).geometry,y.oak,0,1.42,.76,Nt),[[-.8,-.6],[.8,-.6],[-.8,.6],[.8,.6]].forEach(([_,T])=>O(new Kn(.06,.035,.5,8),y.oak,_,.25,T,Nt));let ce=new as([[0,0],[.2,0],[.25,.05],[.26,.34],[.24,.36],[.22,.06],[0,.05]].map(([_,T])=>new me(_,T)),36);O(ce,St,.2,1.91,.1,Nt),O(ui(.92,.08,.66,.012,{seg:[1,1,1]}).geometry,new Lt({color:"#a7825b",roughness:.7}),-.28,1.95,.15,Nt),O(ui(.8,.07,.6,.012,{seg:[1,1,1]}).geometry,new Lt({color:"#d9d2c4",roughness:.8}),-.26,2.03,.13,Nt).rotation.y=.14;let ge=-An/2-.75,ve=new rn;r.add(ve);let Fe=(_,T,P)=>{let F=document.createElement("canvas");F.width=_,F.height=T,P(F.getContext("2d"),_,T);let j=new ti(F);return j.colorSpace=Tn,j.anisotropy=Rs,j},De=new ti(xp());De.colorSpace=Tn;let ut=[],Ke=(_,T,P,F,j,ue,we)=>{let de=new hr(new Vs({map:De,color:T,transparent:!0,opacity:F,blending:Ci,depthWrite:!1,toneMapped:!1}));return de.scale.set(P,P,1),de.position.set(j,ue,we),de.userData.o=F,_.add(de),ut.push(de),de},Tt=(_,T,P)=>new Xn({map:_,color:T,transparent:!0,opacity:P,blending:Ci,depthWrite:!1,toneMapped:!1}),Ve={x0:9.3,x1:13.5,y0:1.05,y1:6.9},Mt=Ve.x1-Ve.x0,U=Ve.y1-Ve.y0,Zt=(Ve.x0+Ve.x1)/2,gt=(Ve.y0+Ve.y1)/2,zt=360,Ae=Math.round(zt*U/Mt),en=Fe(zt,Ae,(_,T,P)=>{let F=di(5),j=_.createLinearGradient(0,0,0,P);j.addColorStop(0,"#060a1e"),j.addColorStop(.5,"#111d48"),j.addColorStop(.82,"#26386f"),j.addColorStop(1,"#3a4f8c"),_.fillStyle=j,_.fillRect(0,0,T,P);for(let Be=0;Be<150;Be++){let et=F()<.9?1:1.6;_.fillStyle=`rgba(235,240,255,${(.12+F()*.45).toFixed(2)})`,_.fillRect(F()*T,F()*P*.72,et,et)}let ue=T*.64,we=P*.19,de=T*.075,He=_.createRadialGradient(ue,we,de,ue,we,de*6);He.addColorStop(0,"rgba(190,208,255,.34)"),He.addColorStop(1,"rgba(190,208,255,0)"),_.fillStyle=He,_.fillRect(0,0,T,P);let rt=_.createRadialGradient(ue-de*.35,we-de*.35,de*.1,ue,we,de);rt.addColorStop(0,"#fffef6"),rt.addColorStop(1,"#d6dbc8"),_.fillStyle=rt,_.beginPath(),_.arc(ue,we,de,0,Ne*2),_.fill(),_.fillStyle="rgba(140,145,135,.22)",[[.25,-.3,.2],[-.3,.12,.16],[.28,.36,.12],[-.05,.45,.09]].forEach(([Be,et,Ot])=>{_.beginPath(),_.arc(ue+Be*de,we+et*de,Ot*de,0,Ne*2),_.fill()})}),ot=Fe(zt,Ae,(_,T,P)=>{let F=_.createLinearGradient(0,0,0,P);F.addColorStop(0,"#77abe0"),F.addColorStop(.42,"#b6d3ee"),F.addColorStop(.72,"#f2dcc6"),F.addColorStop(.88,"#ffd09e"),F.addColorStop(1,"#ffc489"),_.fillStyle=F,_.fillRect(0,0,T,P);let j=T*.34,ue=P*.73,we=T*.068,de=_.createRadialGradient(j,ue,we*.6,j,ue,we*8);de.addColorStop(0,"rgba(255,242,218,.92)"),de.addColorStop(.22,"rgba(255,214,160,.4)"),de.addColorStop(1,"rgba(255,214,160,0)"),_.fillStyle=de,_.fillRect(0,0,T,P),_.fillStyle="#fffbf2",_.beginPath(),_.arc(j,ue,we,0,Ne*2),_.fill()}),at=Fe(512,256,(_,T,P)=>{let F=di(12);for(let j=0;j<24;j++){let ue=F()*T,we=P*(.15+F()*.55),de=40+F()*90,He=(10+F()*22)/de,rt=(.12+F()*.2).toFixed(3);for(let Be of[-T,0,T]){_.save(),_.translate(ue+Be,we),_.scale(1,He);let et=_.createRadialGradient(0,0,0,0,0,de);et.addColorStop(0,`rgba(255,255,255,${rt})`),et.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=et,_.beginPath(),_.arc(0,0,de,0,Ne*2),_.fill(),_.restore()}}});at.wrapS=Xi,at.repeat.set(.7,1);let C=(_,T,P)=>(F,j,ue)=>{F.fillStyle=_,F.beginPath(),F.moveTo(0,ue);for(let de=0;de<=j;de+=6)F.lineTo(de,ue*(.83+.035*Math.sin(de*.021+1)+.018*Math.sin(de*.083)));F.lineTo(j,ue),F.closePath(),F.fill(),F.fillStyle=T,F.beginPath(),F.moveTo(0,ue);for(let de=0;de<=j;de+=4)F.lineTo(de,ue*(.92+.02*Math.sin(de*.05)+.012*Math.sin(de*.19)));F.lineTo(j,ue),F.closePath(),F.fill();let we=(de,He,rt,Be)=>{let et=de+rt*He,Ot=ue-He,ct=Ct=>[de+(et-de)*Ct-Math.sin(Ct*Ne)*rt*He*.25,ue-He*Ct];F.strokeStyle=P,F.fillStyle=P,F.lineCap="round";for(let Ct=0;Ct<24;Ct++){let[Yt,Nn]=ct(Ct/24),[Yn,Si]=ct((Ct+1)/24);F.lineWidth=(6.5-3.5*Ct/24)*Be,F.beginPath(),F.moveTo(Yt,Nn),F.lineTo(Yn,Si),F.stroke()}let tt=10;for(let Ct=0;Ct<tt;Ct++){let Yt=-Ne/2+((Ct+.5)/tt-.5)*Ne*1.75,Nn=(42+16*Math.sin(Ct*2.7))*Be,Yn=et+Math.cos(Yt)*Nn,Si=Ot+Math.sin(Yt)*Nn*.55+Nn*.5,Gi=et+Math.cos(Yt)*Nn*.5,ts=Ot+Math.sin(Yt)*Nn*.5-Nn*.2,sn=dn=>[(1-dn)**2*et+2*(1-dn)*dn*Gi+dn*dn*Yn,(1-dn)**2*Ot+2*(1-dn)*dn*ts+dn*dn*Si];F.lineWidth=2*Be,F.beginPath(),F.moveTo(et,Ot),F.quadraticCurveTo(Gi,ts,Yn,Si),F.stroke(),F.lineWidth=1.3*Be;for(let dn=1;dn<16;dn++){let oi=dn/16,[Mi,Li]=sn(oi),[Ar,ir]=sn(Math.min(1,oi+.02)),Vi=Ar-Mi,Gc=ir-Li,Aa=Math.hypot(Vi,Gc)||1,Vc=Nn*.3*Math.sin(Ne*(oi*.85+.1));for(let $u of[-1,1])F.beginPath(),F.moveTo(Mi,Li),F.lineTo(Mi+(-Gc/Aa*$u*.8+Vi/Aa*.5)*Vc,Li+(Vi/Aa*$u*.8+Gc/Aa*.5)*Vc+Vc*.35),F.stroke()}}F.beginPath(),F.arc(et,Ot+2*Be,4.5*Be,0,Ne*2),F.fill()};we(j*.14,ue*.64,.1,1),we(j*.43,ue*.47,-.06,.78),we(j*.9,ue*.72,-.15,1.1)},v=Fe(zt,Ae,C("#0a1230","#060c22","#03071a")),Y=Fe(zt,Ae,C("#a7bccb","#86a28f","#2f4b3b")),Se=Fe(128,256,(_,T,P)=>{_.translate(T/2,P/2),_.rotate(-.45),_.translate(-T/2,-P/2),[[.26,.1,.1],[.45,.035,.06],[.72,.14,.06]].forEach(([F,j,ue])=>{let we=F*T,de=_.createLinearGradient(we-j*T,0,we+j*T,0);de.addColorStop(0,"rgba(255,255,255,0)"),de.addColorStop(.5,`rgba(255,255,255,${ue})`),de.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=de,_.fillRect(-T,-P,T*3,P*3)})}),ae=(_,T,P,F,j=U,ue=gt)=>{let we=new nt(new Qt(Mt,j),new Xn({map:_,toneMapped:!1,...T}));return we.position.set(Zt,ue,ge+P),we.renderOrder=F,ve.add(we),we};ae(en,{},.02,1);let Ee=ae(ot,{transparent:!0,opacity:0,depthWrite:!1},.021,1.2).material,Le=ae(at,{transparent:!0,depthWrite:!1,color:new Ye("#aab9e6"),opacity:.5},.026,3,U*.75,Ve.y1-U*.375).material;ae(v,{transparent:!0,depthWrite:!1},.032,4);let ie=ae(Y,{transparent:!0,depthWrite:!1,opacity:0},.033,4.2).material;ae(Se,{transparent:!0,depthWrite:!1,blending:Ci,opacity:.55},.05,5);let se=(_,T,P)=>new Ai({uniforms:{uTime:{value:0},uPx:{value:s.getPixelRatio()},uCol:{value:new Ye(...T)},uA:{value:P}},vertexShader:`attribute float phase; uniform float uTime, uPx; varying float vA;
      void main(){ vec3 p = position;
        ${_==="dust"?"p += vec3(sin(uTime*.21 + phase)*.22, sin(uTime*.13 + phase*1.7)*.3, cos(uTime*.17 + phase*.9)*.22);":""}
        vA = .4 + .6 * (.5 + .5 * sin(uTime * (.9 + fract(phase) * 1.8) + phase * 3.1));
        vec4 mv = modelViewMatrix * vec4(p, 1.);
        gl_PointSize = uPx * ${_==="dust"?"(1.2 + fract(phase * 7.) * 1.8) * (44. / -mv.z)":"(1.3 + fract(phase * 3.) * 2.2)"};
        gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 uCol; uniform float uA; varying float vA; void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .04, d) * vA * uA; gl_FragColor = vec4(uCol * a, a); }",transparent:!0,depthWrite:!1,blending:Ci}),Ce=n?36:70,L=new Float32Array(Ce*3),oe=new Float32Array(Ce),ee=di(9);for(let _=0;_<Ce;_++)L.set([Ve.x0+.1+ee()*(Mt-.2),Ve.y0+U*(.42+ee()*.56),ge+.024],_*3),oe[_]=ee()*50;let Ie=new In;Ie.setAttribute("position",new fn(L,3)),Ie.setAttribute("phase",new fn(oe,1));let Me=se("star",[1,.97,.9],1),ye=new ur(Ie,Me);ye.renderOrder=2,ye.frustumCulled=!1,ve.add(ye);let je=new Lt({color:"#151925",roughness:.36,metalness:.45}),dt=(_,T,P,F,j=.14)=>{let ue=new nt(new As(_,T,j),je);ue.position.set(P,F,ge+j/2+.01),ue.receiveShadow=!0,ve.add(ue)},xe=.16;dt(Mt+xe*2,xe,Zt,Ve.y1+xe/2),dt(Mt+xe*2,xe,Zt,Ve.y0-xe/2),dt(xe,U,Ve.x0-xe/2,gt),dt(xe,U,Ve.x1+xe/2,gt),dt(.07,U,Zt,gt,.1),[Ve.y0+U*.36,Ve.y0+U*.72].forEach(_=>dt(Mt,.06,Zt,_,.1));let st=new Lt({color:"#2a2e3a",roughness:.5}),it=new nt(ui(Mt+.7,.1,.46,.02,{seg:[1,1,1]}).geometry,st);it.position.set(Zt,Ve.y0-xe-.05,ge+.23),it.receiveShadow=!0,ve.add(it);let Oe=new nt(new Kn(.03,.03,Mt+3.2,10),je);Oe.rotation.z=Ne/2,Oe.position.set(Zt,Ve.y1+.95,ge+.34),ve.add(Oe);let Rt=new Lt({color:"#d4d8e8",roughness:.92,transparent:!0,opacity:.6,side:bn,depthWrite:!1,emissive:new Ye("#3d4a7a"),emissiveIntensity:.45}),mn=U+1.9,fi=[[Ve.x0-.2,0],[Ve.x1+.2,1]].map(([_,T])=>{let P=new Qt(1.75,mn,30,16),F=new nt(P,Rt);return F.position.set(_,Ve.y1+.95-mn/2,ge+.36),F.renderOrder=6,ve.add(F),{geo:P,base:P.attributes.position.array.slice(),i:T}}),br=_=>fi.forEach(T=>{let P=T.geo.attributes.position.array,F=T.base;for(let j=0;j<P.length;j+=3){let ue=F[j],we=F[j+1],de=(mn/2-we)/mn,He=Math.sin((ue/1.75+.5)*Ne*7)*.09;P[j+2]=F[j+2]+He+(Math.sin(_*.9+T.i*1.7+we*.35)*.1*de*de+Math.sin(_*1.6+ue*2.1)*.025*de)*(t?0:1),P[j]=F[j]+Math.sin(_*.7+T.i)*.05*de*de*(t?0:1)}T.geo.attributes.position.needsUpdate=!0,T.geo.computeVertexNormals()}),us=-.38,tr=.95,$i=(_,T)=>[_+us*T,.02,ge+tr*T],Qi=Fe(256,256,(_,T,P)=>{_.filter="blur(5px)",_.fillStyle="#fff";let F=12,j=[[0,.28],[.28,.64],[.64,1]];[0,1].forEach(ue=>j.forEach(([we,de])=>_.fillRect(F+ue*(T-F)/2,F+we*(P-F),(T-F)/2-F,(de-we)*(P-F)-F)))}),$n=new Qt(1,1);[[Ve.x0,Ve.y1],[Ve.x1,Ve.y1],[Ve.x0,Ve.y0],[Ve.x1,Ve.y0]].forEach(([_,T],P)=>$n.attributes.position.setXYZ(P,...$i(_,T)));let Gn=new nt($n,Tt(Qi,"#90a6ff",.3));Gn.renderOrder=1,Gn.frustumCulled=!1,ve.add(Gn);let Ii=n?60:140,ds=new Float32Array(Ii*3),Ln=new Float32Array(Ii),ii=di(31);for(let _=0;_<Ii;_++){let T=Ve.x0+ii()*Mt,P=Ve.y0+ii()*U*.95,F=P*ii()*.9;ds.set([T+us*F,P-F,ge+tr*F],_*3),Ln[_]=ii()*50}let Oi=new In;Oi.setAttribute("position",new fn(ds,3)),Oi.setAttribute("phase",new fn(Ln,1));let yi=se("dust",[.85,.9,1],.55),ji=new ur(Oi,yi);ji.renderOrder=7,ji.frustumCulled=!1,ve.add(ji);let fs=Fe(128,256,(_,T,P)=>{_.translate(T/2,P-4);let F=_.createLinearGradient(-T*.4,0,T*.4,0);F.addColorStop(0,"#2c5531"),F.addColorStop(.5,"#4f8a4c"),F.addColorStop(1,"#294d2e"),_.fillStyle=F,Cu(_,P-8,T*.42),_.fill(),_.strokeStyle="rgba(205,235,185,.35)",_.lineWidth=2,_.beginPath(),_.moveTo(0,0),_.lineTo(0,-(P-14)),_.stroke(),_.strokeStyle="rgba(15,35,15,.3)",_.lineWidth=1,Ru(_,P-8,T*.42,9),_.stroke()}),ps=new Lt({map:fs,roughness:.7,side:bn,alphaTest:.5}),Ps=new Lt({color:"#3b5a31",roughness:.8}),Bi=new rn;Bi.position.set(Ve.x1+1.45,0,ge+1),ve.add(Bi);let zi=new nt(new as([[0,0],[.4,0],[.47,.06],[.52,1.1],[.56,1.14],[.53,1.17],[0,1.08]].map(([_,T])=>new me(_,T)),32),new gi({color:"#2a2b31",roughness:.42,clearcoat:.35}));zi.castShadow=!0,zi.receiveShadow=!0,Bi.add(zi);let es=[],M=di(77);for(let _=0;_<9;_++){let T=1.4+M()*1.7,P=.2+M()*.45,F=new rn;F.position.y=1.08,F.rotation.y=_/9*Ne*2+M()*.5,Bi.add(F);let j=new rn;j.rotation.z=P*.5,F.add(j);let ue=new nt(new Kn(.016,.026,T,5),Ps);ue.position.y=T/2,j.add(ue);let we=new Qt(.64,1.5);we.translate(0,.75,0);let de=new nt(we,ps);de.position.y=T,de.rotation.set(0,(M()-.5)*1.6,P*1.3),de.castShadow=!0,j.add(de),es.push({arm:j,base:j.rotation.z,ph:M()*6})}let D=new Lt({color:"#f1e2c6",emissive:new Ye("#ffad5c"),emissiveIntensity:1.35,roughness:.9,side:bn}),Q=new Lt({color:"#b8925a",roughness:.3,metalness:.85}),X=(_,T,P,F)=>{let j=new rn;j.position.set(T,P,F),_.add(j);let ue=new nt(new as([[0,0],[.2,0],[.22,.03],[.2,.06],[.07,.1],[.045,.55],[0,.55]].map(([de,He])=>new me(de,He)),28),Q);ue.castShadow=!0,j.add(ue);let we=new nt(new Kn(.24,.34,.42,32,1,!0),D);we.position.y=.74,j.add(we),Ke(j,"#ffb468",2.6,.42,0,.74,0),Ke(j,"#ffd6a8",.8,.55,0,.74,0)};X(We,.36,2.09,-.32),X(Nt,.5,1.91,-.36);let Z=_=>Fe(256,112,(T,P,F)=>{T.fillStyle="#0c0e15",T.fillRect(0,0,P,F),T.font='700 74px "Hanken Grotesk", system-ui, sans-serif',T.textAlign="center",T.textBaseline="middle",T.shadowColor="#ff6a2a",T.shadowBlur=14,T.fillStyle="#ff8152",T.fillText(_,P/2,F/2+4)}),be=Z("11:40"),Xe=Z("06:40"),_e=new rn;_e.position.set(-.3,2.07,.2),_e.rotation.y=-.22,Nt.add(_e);let Te=new nt(ui(.62,.3,.2,.03,{seg:[1,1,1]}).geometry,new Lt({color:"#1a1c23",roughness:.4}));Te.position.y=.15,Te.castShadow=!0,_e.add(Te);let ze=new nt(new Qt(.52,.23),new Xn({map:be,toneMapped:!1}));ze.position.set(0,.15,.102),_e.add(ze),Ke(_e,"#ff7a45",.6,.22,0,.15,.13);let ht=Fe(256,128,(_,T,P)=>{let F=_.createLinearGradient(0,P,0,0);F.addColorStop(0,"rgba(255,255,255,1)"),F.addColorStop(.3,"rgba(255,255,255,.42)"),F.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=F,_.fillRect(0,0,T,P),_.globalCompositeOperation="destination-in";let j=_.createLinearGradient(0,0,T,0);j.addColorStop(0,"rgba(0,0,0,0)"),j.addColorStop(.2,"#000"),j.addColorStop(.8,"#000"),j.addColorStop(1,"rgba(0,0,0,0)"),_.fillStyle=j,_.fillRect(0,0,T,P)}),mt=new nt(new Qt(1,1),Tt(ht,"#ffa95a",.5));mt.position.set(0,4.7,ge+.02),mt.renderOrder=1,R.add(mt);let Je=Fe(512,512,(_,T,P)=>{let F=di(21);_.fillStyle="#ffffff",_.fillRect(0,0,T,P);for(let j=0;j<9e3;j++)_.fillStyle=F()<.5?`rgba(255,255,255,${(F()*.2).toFixed(3)})`:`rgba(0,0,0,${(F()*.06).toFixed(3)})`,_.fillRect(F()*T,F()*P,1+F()*2,1);_.strokeStyle="rgba(214,160,92,.9)",_.lineWidth=3,_.strokeRect(T*.05,P*.05,T*.9,P*.9),_.strokeStyle="rgba(0,0,0,.1)",_.lineWidth=10,_.strokeRect(T*.08,P*.08,T*.84,P*.84)}),xt=new nt(new Qt(1,1),new Lt({map:Je,color:"#30364b",roughness:1}));xt.rotation.x=-Ne/2,xt.position.set(0,.006,1.1),xt.receiveShadow=!0,R.add(xt);let hn=_=>{Me.uniforms.uTime.value=_,yi.uniforms.uTime.value=_,at.offset.x=_*.006%1,br(_),es.forEach(T=>{T.arm.rotation.z=T.base+Math.sin(_*.8+T.ph)*.03})};hn(0);let At=new mr("#ffe4c6",520,44,.78,1,1.7);At.position.set(-11,8.2,3.2),At.target.position.set(.4,2.2,0),At.castShadow=!0,At.shadow.mapSize.set(n?1024:2048,n?1024:2048),At.shadow.radius=5,At.shadow.blurSamples=16,At.shadow.bias=-5e-4,At.shadow.normalBias=.02,At.shadow.camera.near=4,At.shadow.camera.far=34,r.add(At,At.target);let Gt=new gr("#ffb570",9,9,1.9);We.add(Gt),Gt.position.set(.36,2.86,-.32);let gn=new gr("#ffb570",8,9,1.9);Nt.add(gn),gn.position.set(.5,2.68,-.36);let qe=new Js("#c3cff2",.42);qe.position.set(13,8,-5),r.add(qe);let xn=new Js("#e6e9ff",.55);xn.position.set(-3,3.2,12),r.add(xn);let kt=new so("#dfe8ff","#e2cdb2",0);r.add(kt);let on=(_,T)=>[new Ye(_),new Ye(T)],Pt={floor:on("#56423a","#c7ae92"),wall:on("#1d2547","#ece6dc"),frame:on("#151925","#f3efe8"),sill:on("#2a2e3a","#ebe5dc"),curtain:on("#d4d8e8","#ffffff"),curtainE:on("#3d4a7a","#fff0da"),patch:on("#90a6ff","#ffd59c"),clouds:on("#aab9e6","#ffffff"),key:on("#ffe4c6","#fff2e2"),fill:on("#e6e9ff","#fff6ec"),moon:on("#c3cff2","#ffdcae"),rug:on("#30364b","#e4dccd"),dust:on("#d9e6ff","#ffe2b0"),fg:on("#f3eee5","#17181d"),acc:on("#dcab69","#8a5a22"),letters:on("#efe4cf","#26282e"),sign:on("#ffd9a8","#fff4e6")},_n=(_,T,P)=>_.copy(T[0]).lerp(T[1],P),Vn=()=>{};function Hn(){let _=Fi(0,1,W.day),T=1-_,P=1-.85*er(W.buildPose);_n(w.material.color,Pt.floor,_),_n(k.material.color,Pt.wall,_),_n(je.color,Pt.frame,_),_n(st.color,Pt.sill,_),_n(Rt.color,Pt.curtain,_),_n(Rt.emissive,Pt.curtainE,_),Rt.opacity=Ht(.6,.8,_),Rt.emissiveIntensity=Ht(.45,.55,_),_n(Gn.material.color,Pt.patch,_),Gn.material.opacity=Ht(.3,.5,_),_n(Le.color,Pt.clouds,_),Le.opacity=Ht(.5,.95,_),Ee.opacity=_,ie.opacity=_,Me.uniforms.uA.value=T,_n(yi.uniforms.uCol.value,Pt.dust,_),yi.uniforms.uA.value=Ht(.55,.85,_),_n(xt.material.color,Pt.rug,_),_n(At.color,Pt.key,_),At.intensity=Ht(520,400,_),_n(xn.color,Pt.fill,_),xn.intensity=Ht(.55,1.05,_),_n(qe.color,Pt.moon,_),qe.intensity=Ht(.42,1.8,_),kt.intensity=Ht(0,1.15,_),r.environmentIntensity=Ht(.4,.85,_),Gt.intensity=9*T*P,gn.intensity=8*T*P,D.emissiveIntensity=Ht(1.35,.04,_)*Ht(.1,1,P),ut.forEach(F=>{F.material.opacity=F.userData.o*T*P}),mt.material.opacity=.5*T*P,ze.material.map=_>.5?Xe:be,Vn(_)}let bt=ge+.035,En=new mi(new B(0,0,1),-bt),yn=new Bn(20,1.6,4,120),tn=new ao,an=new me,si=new B,z=new B,te='"Bebas Neue", Impact, "Arial Narrow", sans-serif',fe='"Hanken Grotesk", system-ui, sans-serif',he={defs:null,blocks:{},dirty:!1,flickT:-10,last:"",cta:null},$e={desk:{hero:{pose:{shift:.19,az:-.52,pol:1.33,zoom:1.1,dy:.3,open:0},zone:{x0:.05,x1:.45,y:.17,anchor:"top",align:"left",minY:.35}},cap1:{pose:{shift:.22,az:-.5,pol:1.3,zoom:1.02,dy:.2,open:.45},zone:{x0:.055,x1:.41,y:.25,anchor:"top",align:"left",minY:.5}},cap2:{pose:{shift:0,az:-.26,pol:1.24,zoom:1.05,dy:.75,open:1},zone:{x0:.27,x1:.73,y:.13,anchor:"top",align:"center",minY:5.3}},cap3:{pose:{shift:-.2,az:.4,pol:1.28,zoom:1.02,dy:.1,open:.3},zone:{x0:.54,x1:.85,y:.38,anchor:"mid",align:"left",minY:2.9}},show:{pose:{shift:0,az:-.5,pol:1.27,zoom:1,dy:0,open:0}}},phone:{hero:{pose:{shift:0,az:-.45,pol:1.26,zoom:.98,dy:1.15,open:0},zone:{x0:.06,x1:.94,y:.12,anchor:"top",align:"center",minY:3.3}},cap1:{pose:{shift:0,az:-.42,pol:1.24,zoom:.94,dy:.5,open:.45},zone:{x0:.07,x1:.93,y:.12,anchor:"top",align:"center",minY:4.8}},cap2:{pose:{shift:0,az:-.26,pol:1.22,zoom:.92,dy:.5,open:1},zone:{x0:.07,x1:.93,y:.12,anchor:"top",align:"center",minY:5.5}},cap3:{pose:{shift:0,az:-.12,pol:1.24,zoom:.94,dy:.5,open:.3},zone:{x0:.07,x1:.93,y:.12,anchor:"top",align:"center",minY:4.8}},show:{pose:{shift:0,az:-.5,pol:1.27,zoom:1,dy:0,open:0}}}},yt=[[0,"hero"],[.07,"hero"],[.17,"cap1"],[.3,"cap1"],[.4,"cap2"],[.53,"cap2"],[.63,"cap3"],[.74,"cap3"],[.82,"show"]],Ut={hero:[-1,-.5,.055,.1],cap1:[.14,.19,.3,.34],cap2:[.37,.42,.53,.57],cap3:[.6,.65,.74,.78]},Kt=(_,T)=>{let P=Ut[_];return P?Math.min(wn((T-P[0])/(P[1]-P[0])),wn((P[3]-T)/(P[3]-P[2]))):0};function It(_){let T=W.phone?$e.phone:$e.desk,P=0;for(;P<yt.length-2&&_>yt[P+1][0];)P++;let[F,j]=yt[P],[ue,we]=yt[P+1],de=Fi(F,ue,_),He=T[j].pose,rt=T[we].pose,Be={};for(let et in He)Be[et]=Ht(He[et],rt[et],de);return Be}let Jt=()=>hi+G.coverTop*.5+(W.phone?.1:.75),Cn=(_,T)=>({az:_.az,pol:wn(_.pol+T*.08,.7,1.52),d:W.dist*_.zoom*(1+T*(W.phone?-.08:-.05)),ty:Ht(W.ty,Math.max(W.ty,Jt()),T)+_.dy,shift:_.shift});function Xt(_,T,P,F,j,ue){let we=-ue*2*Math.tan(_.fov*Ne/360)*_.aspect*_.getFilmWidth();Math.abs(_.filmOffset-we)>1e-5&&(_.filmOffset=we,_.updateProjectionMatrix()),_.position.set(Math.sin(T)*Math.sin(P)*F,j+Math.cos(P)*F,Math.cos(T)*Math.sin(P)*F),_.lookAt(0,j,0),_.updateMatrixWorld()}let Et=(_,T)=>(an.set(_*2-1,1-T*2),tn.setFromCamera(an,yn),tn.ray.intersectPlane(En,si)?si.clone():null),$t=(_,T,P)=>{let F=[],j="";for(let ue of T.split(/\s+/).filter(Boolean)){let we=j?`${j} ${ue}`:ue;j&&_.measureText(we).width>P?(F.push(j),j=ue):j=we}return j&&F.push(j),F};function nn(_,T,P,F,j){let ue=document.createElement("canvas").getContext("2d"),we=i.clientWidth,de=[],He=[],rt=F==="center"?T/2:0,Be=_.kind==="hero",et=0,Ot=null,ct=0;if(_.eyebrow){let tt=Math.round(13*wn(P,.9,1.1));de.push({acc:1,font:`700 ${tt}px ${fe}`,text:_.eyebrow.toUpperCase(),x:rt,y:et+tt,ls:`${(tt*.2).toFixed(1)}px`}),et+=tt*1.5+10*P,ct=et}if(_.title){let tt=(Be?wn(we*(j?.2:.088),60,142):wn(we*(j?.115:.05),40,76))*P;if(ue.font=`400 ${tt}px ${te}`,!Be){let Ct=ue.measureText(_.title.toUpperCase()).width;Ct>T&&(tt*=Math.max(.7,T/Ct*.98),ue.font=`400 ${tt}px ${te}`)}for(let Ct of $t(ue,_.title.toUpperCase(),T))He.push({text:Ct,x:rt,base:et+tt*.74,fs:tt}),et+=tt*.9;et+=tt*.06}if(_.lead){let tt=(Be?wn(we*.0135,15.5,20):wn(we*.0122,15,18.5))*wn(P,.85,1);ue.font=`500 ${tt}px ${fe}`,et+=14*P;for(let Ct of $t(ue,_.lead,Math.min(T,tt*(Be?17:18.5))))de.push({font:ue.font,text:Ct,x:rt,y:et+tt*1.02,a:.9}),et+=tt*1.46}if(_.cta&&(et+=22*P,Ot={x:rt,y:et},et+=50+30*P),_.facts&&!j){let tt=wn(we*.026,30,42)*P,Ct=13.5*wn(P,.9,1),Yt=34*P,Nn={line:1,x:0,y:et,w:0,a:.25};de.push(Nn),et+=20*P;let Yn=0;for(let[Si,Gi]of _.facts){ue.font=`400 ${tt}px ${te}`;let ts=ue.measureText(Si).width;ue.font=`600 ${Ct}px ${fe}`;let sn=ue.measureText(Gi).width;de.push({font:`400 ${tt}px ${te}`,text:Si,x:Yn,y:et+tt*.9}),de.push({font:`600 ${Ct}px ${fe}`,text:Gi,x:Yn,y:et+tt+Ct*1.2,a:.78}),Yn+=Math.max(ts,sn)+Yt}Nn.w=Yn-Yt,et+=tt+Ct*1.6}return{ops:de,titles:He,h:et,cta:Ot,brow:ct,align:F}}let un=44;function wr(_,T,P){let F=Math.ceil((T+un*2)*P),j=Math.ceil((_.h+un*2)*P),ue=ct=>{let tt=document.createElement("canvas");tt.width=F,tt.height=ct;let Ct=tt.getContext("2d");return Ct.scale(P,P),Ct.translate(un,un),Ct.fillStyle="#fff",[tt,Ct]},[we,de]=ue(j),[He,rt]=ue(j),[Be,et]=_.brow?ue(Math.ceil((_.brow+un*2)*P)):[null,null],Ot=_.align==="center"?"center":"left";for(let ct of _.ops){let tt=ct.acc?et:de;if(tt.globalAlpha=ct.a??1,ct.line){tt.fillRect(ct.x,ct.y,ct.w,1.2);continue}tt.font=ct.font,tt.textAlign=Ot,tt.textBaseline="alphabetic","letterSpacing"in tt&&(tt.letterSpacing=ct.ls||"0px"),tt.fillText(ct.text,ct.x,ct.y)}for(let ct of _.titles)rt.font=`400 ${ct.fs}px ${te}`,rt.textAlign=Ot,rt.fillText(ct.text,ct.x,ct.base+ct.fs*.12);return{fc:we,hc:I1(He,18*P,3),ac:Be}}let Is=()=>new Lt({color:"#efe4cf",roughness:.4,metalness:.18,emissive:new Ye("#ffdcaa"),emissiveIntensity:.07,transparent:!0}),nr=_=>new Lt({color:_.clone(),emissive:_.clone(),emissiveIntensity:.32,roughness:.95,transparent:!0,depthWrite:!1}),_o=new go(hp),Ls={},Ft=(_,T)=>{let P=`${_}@${T.toFixed(3)}`;if(!Ls[P]){let F=T*.11;Ls[P]=new Ec(_,{font:_o,size:T,depth:F,curveSegments:5,bevelEnabled:!0,bevelThickness:F*.18,bevelSize:T*.012,bevelSegments:2})}return Ls[P]},Wt=(_,T)=>(_o.data.glyphs[_]?.ha??300)*T/1e3;function qt(){let _={g:new rn,o:0,oT:0,cta:null,letters:[],mat:Is(),center:new B},T=(P,F)=>{let j=new nt(new Qt(1,1),P);return j.renderOrder=F,_.g.add(j),j};return _.halo=T(new Xn({color:"#ffb36b",transparent:!0,depthWrite:!1,blending:Ci,toneMapped:!1}),2),_.paint=T(nr(Pt.fg[0]),3),_.brow=T(nr(Pt.acc[0]),3),_.paint.receiveShadow=!0,_.brow.receiveShadow=!0,_.g.visible=!1,r.add(_.g),_}let _t=_=>{let T=new ti(_);return T.colorSpace=Tn,T.anisotropy=Rs,T},vn=(_,T)=>{_.material.map?.dispose(),_.material.map=T?_t(T):null,_.material.needsUpdate=!0,_.visible=!!T};function Dn(){he.dirty=!1;let _=i.clientWidth,T=i.clientHeight;if(!he.defs||!_||!T)return;let P=`${_}x${T}:${W.phone}:${G.coverTop.toFixed(2)}:${W.w.toFixed(2)}`;if(P===he.last)return;he.last=P;let F=W.phone?$e.phone:$e.desk,j=Math.min(2.2,(devicePixelRatio||1)*1.3);yn.fov=o.fov,yn.aspect=_/T,yn.near=o.near,yn.far=o.far,yn.filmGauge=o.filmGauge,yn.filmOffset=0,yn.updateProjectionMatrix(),Object.values(Ls).forEach(ue=>ue.dispose());for(let ue in Ls)delete Ls[ue];for(let ue of he.defs){let we=F[ue.id];if(!we||!we.zone)continue;let de=Cn(we.pose,er(we.pose.open)),He={...we.zone};Xt(yn,de.az,de.pol,de.d,de.ty,de.shift);let rt=Et(He.x0,He.y);if(rt){z.set(Ve.x0-1.2,rt.y,ge+.36).project(yn);let sn=z.x*.5+.5-.02;sn<He.x1&&sn>He.x0+.12&&(He.align==="center"&&(He.x0+=He.x1-sn),He.x1=sn),He.align!=="center"&&He.anchor!=="top"&&(He.x1-He.x0)*_<380&&Object.assign(He,{x0:Math.max(.06,He.x1-.5),y:.14,anchor:"top"})}let Be=(He.x1-He.x0)*_,et=1,Ot=null,ct=0,tt=0,Ct=0;for(let sn=0;sn<9;sn++){let dn=Et(He.x0,He.y),oi=Et(He.x1,He.y);if(!dn||!oi)break;ct=(oi.x-dn.x)/Be,tt=dn.x,Ot=nn(ue,Be,et,He.align,W.phone);let Mi=(dn.y+oi.y)/2,Li=Ot.h*ct;if(Ct=He.anchor==="top"?Mi:Mi+Li/2,Ct-Li>=He.minY||et<.5)break;et*=.9}if(!Ot||!(ct>0))continue;let Yt=he.blocks[ue.id]||(he.blocks[ue.id]=qt()),Nn=wr(Ot,Be,j);vn(Yt.paint,Nn.fc),vn(Yt.halo,Nn.hc),vn(Yt.brow,Nn.ac);let Yn=(Be+un*2)*ct,Si=(Ot.h+un*2)*ct,Gi=tt-un*ct+Yn/2,ts=Ct+un*ct-Si/2;if(Yt.paint.scale.set(Yn,Si,1),Yt.paint.position.set(Gi,ts,bt),Yt.halo.scale.set(Yn,Si,1),Yt.halo.position.set(Gi,ts,bt-.01),Nn.ac){let sn=(Ot.brow+un*2)*ct;Yt.brow.scale.set(Yn,sn,1),Yt.brow.position.set(Gi,Ct+un*ct-sn/2,bt+.001)}Yt.letters.forEach(sn=>Yt.g.remove(sn.m)),Yt.letters=[];for(let sn of Ot.titles){let dn=sn.fs*ct,oi=[...sn.text],Mi=oi.reduce((ir,Vi)=>ir+Wt(Vi,dn),0),Li=He.align==="center"?tt+Be*ct/2-Mi/2:tt+sn.x*ct,Ar=Ct-sn.base*ct;oi.forEach(ir=>{if(ir!==" "){let Vi=new nt(Ft(ir,dn),Yt.mat);Vi.castShadow=!0,Vi.receiveShadow=!0,Vi.position.set(Li,Ar,ge+.05),Yt.g.add(Vi),Yt.letters.push({m:Vi,x:Li,y:Ar,i:Yt.letters.length})}Li+=Wt(ir,dn)})}if(Yt.center.set(tt+Be*ct/2,Ct-Ot.h*ct/2,bt),Yt.cta=null,Ot.cta&&he.cta){let sn=he.cta.w*ct,dn=he.cta.h*ct,oi=He.align==="center"?tt+Be*ct/2-sn/2:tt+Ot.cta.x*ct,Mi=Ct-Ot.cta.y*ct;Yt.cta=[[oi,Mi],[oi+sn,Mi],[oi+sn,Mi-dn],[oi,Mi-dn]].map(([Li,Ar])=>new B(Li,Ar,bt+.006))}}Vn(Fi(0,1,W.day))}Vn=_=>{for(let T in he.blocks){let P=he.blocks[T];_n(P.mat.color,Pt.letters,_),P.mat.roughness=Ht(.4,.62,_),P.mat.metalness=Ht(.18,0,_),P.mat.emissiveIntensity=Ht(.07,0,_);let F=P.paint.material,j=P.brow.material;_n(F.color,Pt.fg,_),F.emissive.copy(F.color),F.emissiveIntensity=Ht(.32,0,_),_n(j.color,Pt.acc,_),j.emissive.copy(j.color),j.emissiveIntensity=Ht(.4,0,_)}_n(cn.color,Pt.sign,_)};let cn=new mr("#ffd9a8",0,26,.42,.85,1.4);cn.castShadow=!n,cn.shadow.mapSize.set(1024,1024),cn.shadow.radius=4,cn.shadow.bias=-4e-4,cn.shadow.normalBias=.02,cn.shadow.camera.near=2,cn.shadow.camera.far=30,r.add(cn,cn.target);let pi=new B(-6,5,bt),ri=new B,vi=_=>_<0?0:_<.07?1:_<.15?.12:_<.24?.9:_<.3?.35:1,Lu="";function _p(_){let T=er(W.buildPose),P=Fi(0,1,W.day),F=vi(W.time-he.flickT),j=W.time-he.flickT<.4,ue=null,we=0;for(let He in he.blocks){let rt=he.blocks[He];rt.o!==rt.oT&&(rt.o=t?rt.oT:_i(rt.o,rt.oT,6,_),Math.abs(rt.o-rt.oT)<.002&&(rt.o=rt.oT),j=!0);let Be=rt.o*(1-T);if(rt.g.visible=Be>.004,Be>we&&(we=Be,ue=rt),!rt.g.visible)continue;rt.paint.material.opacity=Be,rt.brow.material.opacity=Be,rt.halo.material.opacity=Be*.5*(1-P)*F,rt.mat.opacity=Math.min(1,Be*1.4);let et=rt.letters.length;rt.letters.forEach(Ot=>{let ct=t?1:wn((Be-Ot.i/Math.max(1,et)*.45)/.55),tt=vu(ct);Ot.m.position.set(Ot.x,Ot.y-(1-tt)*.12,ge+.05+(1-tt)*.45),Ot.m.rotation.x=-(1-tt)*.55})}ue&&ri.copy(ue.center),pi.lerp(ri,t?1:1-Math.exp(-4*_)),cn.target.position.copy(pi),cn.position.set(pi.x+1.6,pi.y+6.2,pi.z+7),cn.intensity=we*(1-T)*Ht(150,110,P);let de=he.blocks.hero;if(de?.cta&&e.onAnchor){let He=de.o*(1-T),rt=i.clientWidth,Be=i.clientHeight,et=de.cta.map(ct=>(z.copy(ct).project(o),[(z.x*.5+.5)*rt,(.5-z.y*.5)*Be])),Ot=et.flat().map(ct=>ct.toFixed(1)).join(",")+He.toFixed(3);Ot!==Lu&&(Lu=Ot,e.onAnchor(et,He))}return j}let W={w:(e.width??60)/10,wTarget:(e.width??60)/10,allOpen:!1,az:-.5,pol:1.27,azUser:0,polUser:0,vAz:0,scrollIn:t?1:0,intro:t?1:0,lift:0,dist:20,ty:2.25,visible:!1,last:0,raf:0,touched:!1,time:0,phone:!1,story:null,st:{shift:.19,az:-.52,pol:1.33,zoom:1.1,dy:.3},storyW:1,idle:!1,lastDraw:0,day:e.theme==="morning"?1:0,dayT:e.theme==="morning"?1:0,build:1,buildT:3,buildPose:0,released:!0},yo=()=>W.w-.02,Dc=!n,G={root:new rn,stack:new rn,cover:new rn,open:0,hi:null,dent:0,dentV:0,dentT:0,dentX:0,dentZ:0,feel:"Medium",crown:bu.Medium.crown,h:.7,hT:.7,top:0,look:null,lookName:null,label:"",groups:{},mix:{},key:null,swap:1,swapTo:null,coverTop:.7,builtW:0};R.add(G.root),G.root.add(G.stack,G.cover),G.root.position.y=hi;let Du=_=>{let T=new nt(_.geometry,[y.top,y.side,y.under]);return T.castShadow=!0,T.receiveShadow=!0,T.customDepthMaterial=E,G.cover.add(T),T};G.body=new va({cs:4,seg:Dc?[40,12,92]:[26,8,56],groups:!0}),G.bodyMesh=Du(G.body),G.topBox=new va({cs:3,seg:Dc?[36,4,84]:[24,3,52],groups:!0}),G.topMesh=Du(G.topBox);let Nc=()=>{let _=new nt(new no(new Lc(1,1,.1),8,.01,3,!0),y.piping);return _.castShadow=!0,G.cover.add(_),_};G.pipeT=Nc(),G.pipeB=Nc(),G.pipeX=Nc();let ms=640,vo=260,Sa=document.createElement("canvas");Sa.width=ms,Sa.height=vo;let Sn=Sa.getContext("2d"),Ma=new ti(Sa);Ma.colorSpace=Tn,Ma.anisotropy=Rs,G.decal=new nt(new Qt(1,1),new Lt({map:Ma,transparent:!0,roughness:.75,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})),G.cover.add(G.decal);function yp(){let[_,T]=G.look.label;Sn.clearRect(0,0,ms,vo),Sn.fillStyle=_,mp(Sn,6,6,ms-12,vo-12,16),Sn.fill(),Sn.strokeStyle=T,Sn.globalAlpha=.5,Sn.lineWidth=3,Sn.setLineDash([12,8]),mp(Sn,22,22,ms-44,vo-44,9),Sn.stroke(),Sn.setLineDash([]),Sn.globalAlpha=1,Sn.fillStyle=T,Sn.textAlign="center",Sn.textBaseline="middle",Sn.font='600 30px "Hanken Grotesk", system-ui, sans-serif';let P="EASY COMFORT",F=7,j=[...P].reduce((He,rt)=>He+Sn.measureText(rt).width+F,-F),ue=ms/2-j/2;Sn.textAlign="left";for(let He of P)Sn.fillText(He,ue,80),ue+=Sn.measureText(He).width+F;Sn.textAlign="center";let we=92;Sn.font=`400 ${we}px "Young Serif", Georgia, serif`;let de=Sn.measureText(G.label).width;de>ms-96&&(we*=(ms-96)/de,Sn.font=`400 ${we}px "Young Serif", Georgia, serif`),Sn.fillText(G.label,ms/2,166),Ma.needsUpdate=!0}let vp=ui(2.4,.5,1.6,.24,{cs:4,seg:[14,4,10],shape:{crown:.1,bulge:.05}});G.pillows=[-1,1].map(_=>{let T=new nt(vp.geometry,y.pillow);return T.castShadow=!0,T.receiveShadow=!0,T.position.set(_*1.36,0,-An/2+1.06),T.rotation.set(-.07,_*.05,0),G.cover.add(T),T});let Nu=()=>Math.min(S1,(G.h-G.top)*.26);function ba(){let _=yo(),T=G.top,P=G.h,F=P-T,j=Nu(),ue=Math.min(.045,F*.07);if(G.body.fill(_,F,An,j,{crown:T?0:G.crown,bulge:ue},[.92,.62,1]),G.bodyMesh.position.y=F/2,G.topMesh.visible=T>.001,T>.001){let de=Math.min(.09,T*.45);G.topBox.fill(_-.1,T+.03,An-.1,de,{crown:G.crown,bulge:.015},[.92,.62,1]),G.topMesh.position.y=F+T/2-.015,G.pipeX.position.y=P-de*.3}G.pipeT.position.y=F-j*.3,G.pipeB.position.y=j*.3,G.pipeX.visible=!!G.look?.topper,G.look?.topper==="euro"&&(G.pipeX.position.y=F-Math.min(.22,F*.24));let we=Math.min(.27,F*.5);G.decal.scale.set(we*ms/vo,we,1),G.decal.position.set(-_*.26,F*.5,An/2+ue*Math.cos(0)*.9+.025),G.pillows.forEach(de=>{de.userData.y=P+.26+G.crown*.7,de.position.y=de.userData.y}),ya.uTopY.value=hi+P,ya.uRange.value=Math.min(.75,P*.75),a.constant=-(hi+P)}function Uc(){let _=yo(),T=Nu(),P=T*.3,F=(j,ue,we,de)=>new no(new Lc(j,ue,we),Dc?260:140,de,7,!0);if([G.pipeT,G.pipeB].forEach(j=>{j.geometry.dispose(),j.geometry=F(_-P*2,An-P*2,Math.max(.05,T*.8),.034),j.scale.x=1}),G.pipeX.geometry.dispose(),G.look?.topper==="pillow"){let j=Math.min(.09,G.top*.45),ue=j*.3;G.pipeX.geometry=F(_-.1-ue*2,An-.1-ue*2,Math.max(.05,j*.8),.03)}else G.pipeX.geometry=F(_+.05,An+.05,Math.max(.05,T),.03);G.pipeX.scale.x=1,G.builtW=_}let Uu=_=>_.userData.slabs.forEach(T=>{T.scale.x=(yo()-.06)/3});function Sp(_,T){let P=_.inches/10,F=Math.min(.035,P*.3),j;if(_.zones){j=new rn;let ue=[.34,.32,.34],we=An-.08,de=-we/2;ue.forEach((He,rt)=>{let Be=new nt(ui(3,P,we*He-.06,F,{seg:[10,2,6]}).geometry,rt===1?y.zoneFirm:y.zoneSoft);Be.castShadow=!0,Be.receiveShadow=!0,Be.position.z=de+we*He/2,de+=we*He,j.add(Be)}),T.add(j)}else j=new nt(ui(3,P,An-.08,F,{seg:[10,2,16],shape:{sag:.008}}).geometry,y[_.mat]??y.foam25),j.castShadow=!0,j.receiveShadow=!0,T.add(j);return j.userData={h:P,hi:0,hiT:0},j}function Fu(_){if(G.groups[_.key])return G.groups[_.key];let T=new rn;return T.visible=!1,G.stack.add(T),T.userData.slabs=[..._.layers].reverse().map(P=>Sp(P,T)),T.userData.sum=T.userData.slabs.reduce((P,F)=>P+F.userData.h,0),T.userData.openH=0,Uu(T),G.groups[_.key]=T,G.mix[_.key]=0,T}let So={},Ou=_=>{let T=_a[_]??_a.aura;return So[_]||(So[_]={top:Eu(l,T.top,T.rep[0]),side:Eu(l/2,T.side??T.top,T.rep[1])}),So[_]};function Bu(_){let T=_a[_]??_a.aura;G.look=T,Ou(_),y.top.map=So[_].top,y.side.map=So[_].side,y.top.normalMap=T.quilt?c:d,y.side.normalMap=T.quilt?h:d;let P=T.quilt?.62:.32;y.top.normalScale.set(P,P),y.side.normalScale.set(P,P),y.top.sheen=y.side.sheen=T.dark?.16:.7,y.top.sheenColor.set(T.dark?"#a9b8e6":"#fff6ec"),y.side.sheenColor.copy(y.top.sheenColor),y.top.roughness=y.side.roughness=T.dark?.86:.92,y.piping.color.set(T.piping),y.under.color.set(T.under),G.top=T.topper==="pillow"?.2:0,yp(),ba(),Uc()}function Fc(){let _=W.w,T=yo();V.scale.x=pe.scale.x=_+.44,$[0].position.x=-(_/2+.12),$[1].position.x=_/2+.12,le.forEach(P=>{P.position.x=P.userData.sx*(_/2+.1)}),Ze.forEach(P=>{P.scale.x=_+.1}),Pe.scale.x=_+.78,R.contact.scale.x=(_+1.2)*1.55,We.position.set(-(_/2+1.55),0,-An/2+.55),Nt.position.set(_/2+1.5,0,-An/2+.35),xt.scale.set(_+4.6,An+3.6,1),mt.scale.set(_+3.2,3.6,1),ve.position.x=(_-6)/2,ba(),[G.pipeT,G.pipeB,G.pipeX].forEach(P=>{P.scale.x=T/(G.builtW||T)}),Object.values(G.groups).forEach(Uu)}let Mp=()=>G.swap<1?Math.sin(Ne*G.swap)*.55:0,bp=.62,zu=()=>{let _=G.groups[G.key],T=_?_.userData.slabs.length:1,P=Math.min(.28,1.4/Math.max(1,T)),F=.3+T*P+.1,j=F+.66;return{st:P,cover:F,pillows:j,end:j+.15+.62}},Ds=null,Oc=(_,T)=>_<=0?T:_<.72?T*(1-(_/.72)**2):-.03*Math.sin(Ne*(_-.72)/.28);function wa(){let _=G.open,T=W.build<1&&!!Ds,P=W.build*W.buildT;G.stack.visible=_>.002||T,Object.entries(G.groups).forEach(([ue,we])=>{let de=G.mix[ue];we.visible=G.stack.visible&&de>.002;let He=we.userData.slabs,rt=He.length,Be=Math.max(.05,G.h-.07)/we.userData.sum,et=Math.min(.05,.26/Math.max(1,rt-1)),Ot=.035,ct=0;He.forEach((tt,Ct)=>{let Yt=tt.userData.h,Nn=(rt-1-Ct)*et,Yn=er(wn((_-Nn)/(1-Nn*.9)));if(tt.position.y=Ht(Ot+Yt*Be/2,ct+Yt*Mu/2,Yn),tt.scale.y=Ht(Be,Mu,Yn),Ot+=Yt*Be,ct+=Yt*Mu+Cc,T&&ue===G.key){let sn=(P-(.3+Ct*Ds.st))/bp;tt.visible=sn>0,tt.position.y+=Oc(sn,2.6)}else tt.visible=!0;if(!we.visible)return;let Si=ue===G.key?1:-1,Gi=vu(wn(de*1.5-(rt-1-Ct)*.1));tt.position.x=Si*(1-Gi)*8;let ts=_i(tt.userData.hi,tt.userData.hiT,14,.016);tt.userData.hi=ts,tt.position.z=ts*.5}),we.userData.openH=ct-Cc});let F=er(wn(_*1.25)),j=T?(P-Ds.cover)/.72:1;G.cover.visible=j>0,G.cover.position.y=Ht(0,G.coverTop,F)+Mp()+(j<1?Oc(j,3.2):0),G.pillows.forEach((ue,we)=>{let de=T?(P-Ds.pillows-we*.15)/.6:1;ue.visible=de>0,ue.position.y=ue.userData.y+(de<1?Oc(de,1.8):0)}),G.cover.rotation.x=G.swap<1?-Math.sin(Ne*G.swap)*.035:0}function Ta(){let _=i.clientWidth||1,T=i.clientHeight||1;s.setSize(_,T,!1),o.aspect=_/T,o.updateProjectionMatrix();let P=Math.tan(o.fov*Ne/360),F=_>860,j=F&&_<1240,ue=(F?j?23.5:19.5:11.5)/(2*P*o.aspect),we=(F?11.6:7.6)/(2*P);W.dist=Math.max(ue,we),W.phone=!F,W.ty=F?2.85:1.75,he.dirty=!0,On()}let ku={desk:{shift:0,az:-.6,pol:1.15,zoom:.84,dy:.15},phone:{shift:0,az:-.55,pol:1.17,zoom:.82,dy:.35}},Tr={};function Bc(){let _=t||W.touched?0:Math.sin(W.time*.35)*.07,T={az:W.az*(1-W.lift*.55),pol:W.pol+W.lift*.15,d:W.dist*(1+W.lift*(W.phone?-.08:-.05)),ty:Ht(W.ty,Math.max(W.ty,Jt()),W.lift),shift:0},P=Cn(W.st,W.lift),F=Cn(W.phone?ku.phone:ku.desk,0),j=W.storyW,ue=er(W.buildPose);for(let He of["az","pol","d","ty","shift"])Tr[He]=Ht(Ht(T[He],P[He],j),F[He],ue);let we=Tr.az+W.azUser+_+(1-W.scrollIn)*.5,de=wn(Tr.pol+W.polUser+(1-W.scrollIn)*.16,.7,1.52);Xt(o,we,de,Tr.d*(1+(1-W.scrollIn)*.18),Tr.ty,Tr.shift)}let Gu=new ao,Vu=new me,Mo=new B;function Hu(_){let T=i.getBoundingClientRect();return Vu.set((_.clientX-T.left)/T.width*2-1,-((_.clientY-T.top)/T.height)*2+1),Gu.setFromCamera(Vu,o),!Gu.ray.intersectPlane(a,Mo)||Math.abs(Mo.x)>yo()/2||Math.abs(Mo.z)>An/2||G.open>.05||G.swap<1?null:{x:Mo.x,z:Mo.z}}let Qn=null,bo=!1,Wu=_=>wn(_,-1-W.az,.42-W.az),qu=()=>{bo&&(G.dentT=0,bo=!1)},Xu=_=>{G.dentX=_.x,G.dentZ=_.z};i.addEventListener("pointerdown",_=>{if(W.story!=null||W.buildPose>0)return;W.touched=!0,Qn={x:_.clientX,y:_.clientY,moved:!1,type:_.pointerType};let T=Hu(_);T&&(bo=!0,Xu(T),G.dentT=1,G.dentV-=.4,On()),i.setPointerCapture(_.pointerId)}),i.addEventListener("pointermove",_=>{if(Qn){let P=_.clientX-Qn.x,F=_.clientY-Qn.y;!Qn.moved&&Math.hypot(P,F)>6&&(Qn.moved=!0,qu(),i.classList.add("is-dragging")),Qn.moved&&(W.vAz=-P*.0045*60,W.azUser=Wu(W.azUser-P*.0045),Qn.type==="mouse"&&(W.polUser=wn(W.polUser-F*.004,-.5,.3)),Qn.x=_.clientX,Qn.y=_.clientY,On());return}if(_.pointerType!=="mouse"||W.story!=null||W.buildPose>0)return;let T=Hu(_);T?(Xu(T),G.dentT!==1&&(G.dentT=.4),On()):G.dentT===.4&&(G.dentT=0,On())});let Yu=()=>{Qn&&(Qn.type!=="mouse"&&!Qn.moved&&bo?(setTimeout(()=>{G.dentT=0,On()},240),bo=!1):qu(),Qn=null,i.classList.remove("is-dragging"),On())};i.addEventListener("pointerup",Yu),i.addEventListener("pointercancel",Yu),i.addEventListener("pointerleave",()=>{G.dentT===.4&&(G.dentT=0),On()});function On(){W.idle=!1,!W.raf&&W.visible&&(W.last=performance.now(),W.raf=requestAnimationFrame(kc))}let Zu=!t,zc=!1;function kc(){W.raf=0;let _=performance.now();if(W.idle&&_-W.lastDraw<30){W.raf=requestAnimationFrame(kc);return}let T=wn((_-W.last)/1e3,0,.05);W.last=_,W.time+=T;let P=!t&&!W.touched;Zu&&hn(W.time),W.intro<1&&(W.intro=Math.min(1,W.intro+T/2.2),W.scrollIn=vu(W.intro),P=!0),W.w!==W.wTarget?(W.w=Math.abs(W.w-W.wTarget)<.003?W.wTarget:_i(W.w,W.wTarget,7,T),Fc(),P=!0,zc=!0):zc&&(zc=!1,Uc(),Fc()),G.swap<1&&(G.swap=Math.min(1,G.swap+T/(t?.001:.62)),G.swap>=.5&&G.swapTo&&(Bu(G.swapTo),G.swapTo=null),P=!0),G.h!==G.hT&&(G.h=Math.abs(G.h-G.hT)<.002?G.hT:_i(G.h,G.hT,6,T),ba(),P=!0,G.h===G.hT&&Uc()),W.day!==W.dayT&&(W.day=t?W.dayT:W.dayT>W.day?Math.min(W.dayT,W.day+T/1.5):Math.max(W.dayT,W.day-T/1.5),P=!0,Hn()),W.build<1&&(W.build=Math.min(1,W.build+T/W.buildT),P=!0,e.onBuild?.(W.build),W.build>=1&&e.onBuilt?.()),W.released&&W.buildPose>0&&(W.buildPose=Math.max(0,W.buildPose-T/2),P=!0,Hn(),W.buildPose===0&&e.onSettled?.());let F=W.story!=null?It(W.story):null;if(F){for(let Be of["shift","az","pol","zoom","dy"])Math.abs(W.st[Be]-F[Be])>1e-4?(W.st[Be]=t?F[Be]:_i(W.st[Be],F[Be],6,T),P=!0):W.st[Be]=F[Be];Math.abs(W.azUser)+Math.abs(W.polUser)>1e-4&&(W.azUser=_i(W.azUser,0,4,T),W.polUser=_i(W.polUser,0,4,T),P=!0)}let j=F?1:0;W.storyW!==j&&(W.storyW=t||Math.abs(W.storyW-j)<.002?j:_i(W.storyW,j,5,T),P=!0);for(let Be in he.blocks)he.blocks[Be].oT=F?Kt(Be,W.story):0;if(he.dirty&&Dn(),F&&F.open!=null)Math.abs(G.open-F.open)>8e-4?(G.open=t?F.open:_i(G.open,F.open,7,T),P=!0):G.open=F.open;else{let Be=W.allOpen||G.hi!==null?1:0;if(G.open!==Be){let et=T/(t?.001:1.15);G.open=Be>G.open?Math.min(1,G.open+et):Math.max(0,G.open-et*1.2),P=!0}}Object.keys(G.mix).forEach(Be=>{let et=Be===G.key?1:0;G.mix[Be]!==et&&(P=!0,G.open<.02||t?G.mix[Be]=et:G.open>.7&&(G.mix[Be]=et?Math.min(1,G.mix[Be]+T/.75):Math.max(0,G.mix[Be]-T/.5)))});let ue=bu[G.feel];Math.abs(G.crown-ue.crown)>6e-4&&(G.crown=_i(G.crown,ue.crown,5,T),ba(),P=!0);for(let Be=0;Be<3;Be++){let et=T/3,Ot=(G.dentT*ue.depth-G.dent)*ue.k-G.dentV*ue.c;G.dentV+=Ot*et,G.dent+=G.dentV*et}(Math.abs(G.dent-G.dentT*ue.depth)>8e-4||Math.abs(G.dentV)>.002)&&(P=!0),ya.uDentA.value.set(G.dentX,G.dentZ,Math.max(0,G.dent),ue.radius),Object.values(G.groups).forEach(Be=>Be.userData.slabs.forEach(et=>{Math.abs(et.userData.hi-et.userData.hiT)>.004&&(P=!0)})),wa();let we=G.groups[G.key],de=(we?we.userData.openH:G.h)+Cc*1.4;Math.abs(G.coverTop-de)>.002&&(G.coverTop=_i(G.coverTop,de,6,T),P=!0,wa());let He=W.lift,rt=er(G.open);W.lift=_i(W.lift,rt,5,T),Math.abs(W.lift-rt)<5e-4&&(W.lift=rt),W.lift!==He&&(P=!0,e.onLift?.(W.lift)),!Qn&&Math.abs(W.vAz)>.002?(W.azUser=Wu(W.azUser+W.vAz*T),W.vAz*=Math.exp(-3.5*T),P=!0):Qn||(W.vAz=0),Bc(),_p(T)&&(P=!0),s.render(r,o),W.lastDraw=_,W.idle=!P,(P||Zu)&&W.visible&&(W.raf=requestAnimationFrame(kc))}try{await Promise.all([document.fonts.load('200px "Young Serif"'),document.fonts.load('600 30px "Hanken Grotesk"'),document.fonts.load('400 30px "Hanken Grotesk"'),document.fonts.load('400 100px "Bebas Neue"')])}catch{}let ki=e.model;Fu(ki),G.key=ki.key,G.mix[ki.key]=1,G.feel=ki.feel,G.crown=bu[ki.feel].crown,G.h=G.hT=ki.inches/10,G.label=ki.label,G.lookName=ki.look,Bu(ki.look),Fc(),wa(),G.coverTop=G.groups[ki.key].userData.openH+Cc*1.4,e.build&&!t?(Ds=zu(),W.build=0,W.buildT=Ds.end,W.buildPose=1,W.released=!1,W.intro=1,W.scrollIn=1):(W.intro=1,W.scrollIn=1),e.story!=null&&(W.story=e.story),Ta(),wa(),Hn();let Ju=window.requestIdleCallback||(_=>setTimeout(_,120)),wp=Object.keys(_a).filter(_=>_!==ki.look),Ku=()=>{let _=wp.shift();if(!_)return;let T=Ou(_);s.initTexture(T.top),s.initTexture(T.side),Ju(Ku)};return setTimeout(()=>Ju(Ku),1500),addEventListener("resize",Ta),window.ResizeObserver&&new ResizeObserver(Ta).observe(i),new IntersectionObserver(([_])=>{W.visible=_.isIntersecting,W.visible&&On()}).observe(i),W.visible=!0,Bc(),s.render(r,o),W.visible=i.getBoundingClientRect().top<innerHeight,e.onReady?.(),On(),{setModel(_){Fu(_);let T=_.look!==G.lookName||_.label!==G.label;G.key=_.key,G.feel=_.feel,G.hT=_.inches/10,T&&(G.lookName=_.look,G.label=_.label,G.swapTo=_.look,G.swap=0),Object.values(G.groups).forEach(P=>P.userData.slabs.forEach(F=>{F.userData.hiT=0})),G.hi=null,W.build<1&&(Ds=zu(),W.buildT=Ds.end),On()},setOpen(_){W.allOpen=_,On()},release(){W.released||(W.released=!0,W.build=1,he.flickT=W.time+.85,On())},setStory(_,T){if(W.story=_,_!=null&&T){let P=It(_);for(let F of["shift","az","pol","zoom","dy"])W.st[F]=P[F];G.open=P.open,W.storyW=1}On()},setWords(_){he.defs=_,he.last="",Dn();for(let T in he.blocks)he.blocks[T].o=he.blocks[T].oT=W.story!=null?Kt(T,W.story):0;W.released&&W.buildPose===0&&(he.flickT=-10),On()},setCtaSize(_,T){(!he.cta||he.cta.w!==_||he.cta.h!==T)&&(he.cta={w:_,h:T},he.last="",he.dirty=!0,On())},setTheme(_,T){W.dayT=_==="morning"?1:0,(T||t)&&(W.day=W.dayT,Hn()),On()},highlight(_){G.hi=_;let T=G.groups[G.key];T&&[...T.userData.slabs].reverse().forEach((P,F)=>{P.userData.hiT=F===_?1:0}),On()},setWidth(_){W.wTarget=_/10,On()},resize:Ta,debug:{S:W,mat:G,renderer:s,words:he,render:()=>{Bc(),s.render(r,o)}}}}async function D1(i,e){let t=Math.min(innerWidth,innerHeight)<600,n;try{n=new ga({canvas:i,antialias:!0,alpha:!0,powerPreference:"default"})}catch(z){return e.onFail?.(z),null}n.setPixelRatio(Math.min(devicePixelRatio||1,t?1.75:1.5)),n.toneMapping=ho,n.shadowMap.enabled=!0,n.shadowMap.type=Ks,Rs=Math.min(12,n.capabilities.getMaxAnisotropy());let{sideQ:s,pore:r,weave:o,egg:a,chips:l,oakRail:c,oakPlank:h}=await gp(t),u=new ks,d=new Bn(28,1.8,1,160);{let z=new ks,te=new Mr(n);z.background=new Ye("#20294a");let fe=(he,$e,yt,Ut,Kt,It,Jt)=>{let Cn=new nt(new Qt(yt,Ut),new Xn({color:new Ye(he).multiplyScalar($e),side:bn}));Cn.position.set(Kt,It,Jt),Cn.lookAt(0,0,0),z.add(Cn)};fe("#ffe2c0",4,14,10,-10,9,8),fe("#b9cbff",3,10,14,12,7,-6),fe("#ffffff",1.4,30,10,0,16,0),u.environment=te.fromScene(z,.05).texture,te.dispose()}let f=7.8,p=5,S=1.15,m=1.35,g=72,b=8,A=-f/2,y=Array.from({length:g+1},(z,te)=>A+f*te/g),R=Array.from({length:b+1},(z,te)=>-p/2+p*te/b),E=(z,te,fe)=>Math.exp(-((z-te)**2)/(2*fe*fe)),x=z=>70+(z-A)/f*860,w=z=>{let te=x(z);return .26*E(te,178,66)+.74*E(te,330,52)+E(te,548,56)+.42*E(te,652,58)+.22*E(te,770,48)+.3*E(te,862,22)},k=z=>.6+.4*Math.exp(-((z/1.15)**2)),N={cover:1.15,memory:1,foam22:.86,pu:.8,profile:.78,foam25:.66,foam30:.5,hd:.36,rebond:.14},O=(z,te)=>{if(z!=="zones")return N[z]??.6;let fe=(te-A)/f;return fe<1/3?.72:fe<2/3?.3:.66},H={Soft:.27,Medium:.2,Hard:.14},J=(z,te,fe)=>{let he=document.createElement("canvas");he.width=z,he.height=te,fe(he.getContext("2d"),z,te);let $e=new ti(he);return $e.colorSpace=Tn,$e.anisotropy=Rs,$e},I=new ti(xp());I.colorSpace=Tn;let q=(z,te={})=>new Lt({color:z,roughness:.95,normalMap:r,normalScale:new me(.7,.7),vertexColors:!0,...te}),K=o.clone();K.repeat.set(10,7),K.needsUpdate=!0;let V={cover:new gi({color:"#f5f3ee",roughness:.9,sheen:.8,sheenRoughness:.6,sheenColor:new Ye("#ffffff"),normalMap:s,normalScale:new me(.5,.5),vertexColors:!0}),foam22:q("#f4f2ea"),foam25:q("#efe7d3"),foam30:q("#e4d8bb"),hd:q("#e3eaf1"),memory:q("#e8bf78"),pu:q("#e2efe4"),profile:q("#f3f1e9",{normalMap:a,normalScale:new me(1.2,1.2)}),rebond:q("#ffffff",{map:l}),zoneSoft:q("#f4f1e7"),zoneFirm:q("#cfb98a"),oak:new Lt({map:c,roughness:.5,color:new Ye(1.45,1.38,1.3)}),plank:new Lt({map:h,roughness:.5,color:new Ye(1.1,1.04,.98)}),pillow:new gi({color:"#f4f2ec",roughness:1,sheen:1,sheenRoughness:.7,sheenColor:new Ye("#ffffff"),normalMap:r,normalScale:new me(.2,.2)}),sheet:new gi({color:"#ebe7de",roughness:.92,sheen:.7,sheenRoughness:.6,sheenColor:new Ye("#ffffff"),normalMap:K,normalScale:new me(.18,.18),side:bn}),duvet:new gi({color:"#2d3558",roughness:.96,sheen:.55,sheenRoughness:.55,sheenColor:new Ye("#8592c8"),normalMap:K,normalScale:new me(.28,.28),side:bn}),skin:new Lt({color:"#c79a7d",roughness:.62}),skinDark:new Lt({color:"#a97c62",roughness:.7}),hair:new gi({color:"#2a1c12",roughness:.42,sheen:.6,sheenRoughness:.35,sheenColor:new Ye("#9a7656")}),dark:new Lt({color:"#241d1a",roughness:.45}),brass:new Lt({color:"#b8925a",roughness:.3,metalness:.85}),shade:new Lt({color:"#f1e2c6",emissive:new Ye("#ffad5c"),emissiveIntensity:1.3,roughness:.9,side:bn}),frame:new Lt({color:"#141824",roughness:.38,metalness:.4})},pe=-p/2-1.15,$=new nt(new Qt(34,16),new Lt({color:"#1b2343",roughness:.95,alphaMap:Ic(512,.26,.5),transparent:!0}));$.position.set(.5,5.6,pe),$.receiveShadow=!0,u.add($);let re=h.clone();re.wrapS=re.wrapT=Xi,re.repeat.set(4.5,34),re.needsUpdate=!0;let le=new nt(new Qt(34,24),new Lt({map:re,color:"#4c3c34",roughness:.42,alphaMap:Ic(512,.2,.5),transparent:!0}));le.rotation.x=-Ne/2,le.position.set(.5,0,2.5),le.receiveShadow=!0,u.add(le);let ke=.9,Ze=4.5,ne=2.4,Re=6.3,Ue=Ze-ke,Qe=Re-ne,Pe=(ke+Ze)/2,We=(ne+Re)/2,Nt=J(256,280,(z,te,fe)=>{let he=di(8),$e=z.createLinearGradient(0,0,0,fe);$e.addColorStop(0,"#060a1d"),$e.addColorStop(.55,"#15214b"),$e.addColorStop(1,"#2d4174"),z.fillStyle=$e,z.fillRect(0,0,te,fe);for(let Jt=0;Jt<90;Jt++)z.fillStyle=`rgba(235,240,255,${(.15+he()*.5).toFixed(2)})`,z.fillRect(he()*te,he()*fe*.7,1.2,1.2);let yt=te*.64,Ut=fe*.24,Kt=te*.08,It=z.createRadialGradient(yt,Ut,Kt,yt,Ut,Kt*6);It.addColorStop(0,"rgba(190,208,255,.38)"),It.addColorStop(1,"rgba(190,208,255,0)"),z.fillStyle=It,z.fillRect(0,0,te,fe),z.fillStyle="#fbf8ea",z.beginPath(),z.arc(yt,Ut,Kt,0,Ne*2),z.fill(),z.fillStyle="rgba(15,22,52,.9)",z.beginPath(),z.moveTo(0,fe);for(let Jt=0;Jt<=te;Jt+=4)z.lineTo(Jt,fe*(.86+.03*Math.sin(Jt*.05)+.015*Math.sin(Jt*.17)));z.lineTo(te,fe),z.fill()}),lt=J(256,280,(z,te,fe)=>{let he=z.createLinearGradient(0,0,0,fe);he.addColorStop(0,"#7db1e2"),he.addColorStop(.5,"#c9def0"),he.addColorStop(.85,"#ffd9ab"),he.addColorStop(1,"#ffc88f"),z.fillStyle=he,z.fillRect(0,0,te,fe);let $e=te*.3,yt=fe*.74,Ut=te*.07,Kt=z.createRadialGradient($e,yt,Ut*.5,$e,yt,Ut*8);Kt.addColorStop(0,"rgba(255,242,218,.95)"),Kt.addColorStop(.25,"rgba(255,214,160,.4)"),Kt.addColorStop(1,"rgba(255,214,160,0)"),z.fillStyle=Kt,z.fillRect(0,0,te,fe),z.fillStyle="#fffbf2",z.beginPath(),z.arc($e,yt,Ut,0,Ne*2),z.fill(),z.fillStyle="rgba(122,150,128,.85)",z.beginPath(),z.moveTo(0,fe);for(let It=0;It<=te;It+=4)z.lineTo(It,fe*(.86+.03*Math.sin(It*.05)+.015*Math.sin(It*.17)));z.lineTo(te,fe),z.fill()}),St=new nt(new Qt(Ue,Qe),new Xn({map:Nt,toneMapped:!1})),wt=new nt(new Qt(Ue,Qe),new Xn({map:lt,toneMapped:!1,transparent:!0,opacity:0,depthWrite:!1}));St.position.set(Pe,We,pe+.01),wt.position.set(Pe,We,pe+.015),wt.renderOrder=1,u.add(St,wt);let ce=(z,te,fe,he,$e=.12)=>{let yt=new nt(new As(z,te,$e),V.frame);yt.position.set(fe,he,pe+$e/2+.02),yt.receiveShadow=!0,u.add(yt)},ge=.13;ce(Ue+ge*2,ge,Pe,Re+ge/2),ce(Ue+ge*2,ge,Pe,ne-ge/2),ce(ge,Qe,ke-ge/2,We),ce(ge,Qe,Ze+ge/2,We),ce(.06,Qe,Pe,We,.08),ce(Ue,.05,Pe,ne+Qe*.55,.08);let ve=new Lt({color:"#d4d8e8",roughness:.92,transparent:!0,opacity:.55,side:bn,depthWrite:!1,emissive:new Ye("#3d4a7a"),emissiveIntensity:.4});{let z=new Qt(1.5,Qe+1.6,26,6),te=z.attributes.position;for(let he=0;he<te.count;he++)te.setZ(he,Math.sin((te.getX(he)/1.5+.5)*Ne*6)*.08);z.computeVertexNormals();let fe=new nt(z,ve);fe.position.set(Ze+.55,We+.3,pe+.3),fe.renderOrder=3,u.add(fe)}let Fe=J(64,256,(z,te,fe)=>{let he=z.createLinearGradient(0,0,0,fe);he.addColorStop(0,"rgba(255,255,255,1)"),he.addColorStop(.6,"rgba(255,255,255,.35)"),he.addColorStop(1,"rgba(255,255,255,0)"),z.fillStyle=he,z.fillRect(0,0,te,fe),z.globalCompositeOperation="destination-in";let $e=z.createLinearGradient(0,0,te,0);$e.addColorStop(0,"rgba(0,0,0,0)"),$e.addColorStop(.25,"#000"),$e.addColorStop(.75,"#000"),$e.addColorStop(1,"rgba(0,0,0,0)"),z.fillStyle=$e,z.fillRect(0,0,te,fe)}),De=new In,ut=[[ke,Re-.1,pe+.04],[Ze,Re-.1,pe+.04],[ke-1.6,1.4,2.4],[Ze-1.6,1.4,2.4]];De.setAttribute("position",new fn(new Float32Array(ut.flat()),3)),De.setAttribute("uv",new fn(new Float32Array([0,1,1,1,0,0,1,0]),2)),De.setIndex([0,2,1,1,2,3]);let Ke=new nt(De,new Xn({map:Fe,color:"#9fb4ff",transparent:!0,opacity:.16,blending:Ci,depthWrite:!1,side:bn,toneMapped:!1}));Ke.renderOrder=4,Ke.frustumCulled=!1,u.add(Ke);let Tt=t?50:110,Ve=new Float32Array(Tt*3),Mt=new Float32Array(Tt),U=di(5);for(let z=0;z<Tt;z++){let te=U(),fe=U(),he=(Kt,It,Jt)=>Kt.map((Cn,Xt)=>Cn+(It[Xt]-Cn)*Jt),$e=he(ut[0],ut[1],fe),yt=he(ut[2],ut[3],fe),Ut=he($e,yt,te);Ve.set([Ut[0],Ut[1],Ut[2]+(U()-.5)*.8],z*3),Mt[z]=U()*50}let Zt=new In;Zt.setAttribute("position",new fn(Ve,3)),Zt.setAttribute("phase",new fn(Mt,1));let gt=new Ai({uniforms:{uTime:{value:0},uPx:{value:n.getPixelRatio()},uCol:{value:new Ye(.85,.9,1)},uA:{value:.6}},vertexShader:`attribute float phase; uniform float uTime, uPx; varying float vA;
      void main(){ vec3 p = position + vec3(sin(uTime*.21 + phase)*.16, sin(uTime*.13 + phase*1.7)*.22, cos(uTime*.17 + phase*.9)*.16);
        vA = .35 + .65 * (.5 + .5 * sin(uTime * (.9 + fract(phase) * 1.8) + phase * 3.1));
        vec4 mv = modelViewMatrix * vec4(p, 1.); gl_PointSize = uPx * (1.1 + fract(phase * 7.) * 1.6) * (40. / -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 uCol; uniform float uA; varying float vA; void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .04, d) * vA * uA; gl_FragColor = vec4(uCol * a, a); }",transparent:!0,depthWrite:!1,blending:Ci}),zt=new ur(Zt,gt);zt.renderOrder=5,zt.frustumCulled=!1,u.add(zt);let Ae=new rn;Ae.position.set(A-1.2,0,-.55),u.add(Ae);let en=(z,te,fe,he,$e)=>{let yt=new nt(z,te);return yt.position.set(fe,he,$e),yt.castShadow=!0,yt.receiveShadow=!0,Ae.add(yt),yt};en(new Kn(.66,.66,.06,40),V.dark,0,1.62,0),[0,2.09,4.19].forEach(z=>{en(new Kn(.04,.028,1.6,8),V.dark,Math.cos(z)*.4,.8,Math.sin(z)*.4).rotation.set(Math.sin(z)*.1,0,-Math.cos(z)*.1)}),en(new as([[0,0],[.18,0],[.2,.03],[.18,.06],[.06,.1],[.04,.5],[0,.5]].map(([z,te])=>new me(z,te)),24),V.brass,-.12,1.65,-.1);let ot=en(new Kn(.22,.31,.38,32,1,!0),V.shade,-.12,2.33,-.1);ot.castShadow=!1;let at=new hr(new Vs({map:I,color:"#ffb468",transparent:!0,opacity:.45,blending:Ci,depthWrite:!1,toneMapped:!1}));at.scale.set(2.6,2.6,1),at.position.set(-.12,2.33,-.1),Ae.add(at);let C=new gr("#ffb06a",8,9,1.8);C.position.set(-.12,2.4,-.1),Ae.add(C);let v=document.createElement("canvas");v.width=256,v.height=112;let Y=new ti(v);Y.colorSpace=Tn;let Se="",ae=z=>{if(z===Se)return;Se=z;let te=v.getContext("2d");te.fillStyle="#0c0e15",te.fillRect(0,0,256,112),te.font='700 74px "Hanken Grotesk", system-ui, sans-serif',te.textAlign="center",te.textBaseline="middle",te.shadowColor="#ff6a2a",te.shadowBlur=14,te.fillStyle="#ff8152",te.fillText(z,128,60),Y.needsUpdate=!0};ae("11:34");let Ee=new rn;Ee.position.set(.3,1.65,.28),Ee.rotation.y=.35,Ae.add(Ee);let Le=new nt(ui(.5,.24,.17,.025,{seg:[1,1,1]}).geometry,new Lt({color:"#1a1c23",roughness:.4}));Le.position.y=.12,Le.castShadow=!0,Ee.add(Le);let ie=new nt(new Qt(.42,.18),new Xn({map:Y,toneMapped:!1}));ie.position.set(0,.12,.087),Ee.add(ie);let se=new hr(new Vs({map:I,color:"#ff7a45",transparent:!0,opacity:.25,blending:Ci,depthWrite:!1,toneMapped:!1}));se.scale.set(.6,.6,1),se.position.set(0,.12,.12),Ee.add(se);let Ce=new rn;u.add(Ce);let L=(z,te,fe,he,$e,yt=!0)=>{let Ut=new nt(z,te);return Ut.position.set(fe,he,$e),Ut.castShadow=yt,Ut.receiveShadow=!0,Ce.add(Ut),Ut};L(ui(f+.3,.5,p+.26,.03,{seg:[6,1,4],tile:[[2.6,.4],[8,.5],[2.6,.4]]}).geometry,V.oak,0,S-.25,0);let oe=new Kn(.12,.07,S-.5,6);oe.rotateY(Ne/6),[[-1,1],[1,1],[-1,-1],[1,-1]].forEach(([z,te])=>L(oe,V.oak,z*(f/2-.1),(S-.5)/2,te*(p/2-.05)));{let z=new Ws,te=(p+.5)/2,fe=3.1,he=.4,$e=.06;z.moveTo(-te,0),z.lineTo(te,0),z.lineTo(te,fe-he),z.absellipse(te-$e,fe-he,$e,he,0,Ne/2,!1,0),z.lineTo(-te+$e,fe),z.absellipse(-te+$e,fe-he,$e,he,Ne/2,Ne,!1,0),z.lineTo(-te,0);let yt=new qs(z,{depth:.14,bevelEnabled:!0,bevelThickness:.03,bevelSize:.012,bevelSegments:3,curveSegments:20}),Ut=L(yt,V.plank,A-.36,.2,0);Ut.rotation.y=Ne/2}let ee;{let z=document.createElement("canvas");z.width=z.height=128;let te=z.getContext("2d"),fe=te.createRadialGradient(64,64,6,64,64,62);fe.addColorStop(0,"rgba(0,0,0,.75)"),fe.addColorStop(1,"rgba(0,0,0,0)"),te.fillStyle=fe,te.fillRect(0,0,128,128),ee=new nt(new Qt(1,1),new Xn({map:new ti(z),transparent:!0,depthWrite:!1})),ee.rotation.x=-Ne/2,ee.position.set(0,.012,0),ee.scale.set(f+3,p+2.2,1),u.add(ee)}class Ie{constructor(te,fe,he){this.ia=te,this.ib=fe;let $e=fe-te+1,yt=$e*(b+1)+$e*2+(b+1)*4;this.pos=new Float32Array(yt*3),this.col=new Float32Array(yt*3).fill(1);let Ut=new Float32Array(yt*2),Kt=[],It=this.geo=new In;for(let Et=0;Et<$e-1;Et++)for(let $t=0;$t<b;$t++){let nn=Et*(b+1)+$t,un=nn+b+1;Kt.push(nn,nn+1,un,un,nn+1,un+1)}let Jt=$e*(b+1);for(let Et=0;Et<$e-1;Et++){let $t=Jt+Et*2,nn=$t+2;Kt.push($t,$t+1,nn,nn,$t+1,nn+1)}let Cn=Jt+$e*2,Xt=Cn+(b+1)*2;for(let Et=0;Et<b;Et++){let $t=Cn+Et*2,nn=$t+2;Kt.push($t,nn,$t+1,$t+1,nn,nn+1)}for(let Et=0;Et<b;Et++){let $t=Xt+Et*2,nn=$t+2;Kt.push($t,$t+1,nn,nn,$t+1,nn+1)}this.fr=Jt,It.setIndex(Kt),It.setAttribute("position",new fn(this.pos,3)),It.setAttribute("color",new fn(this.col,3)),It.setAttribute("uv",new fn(Ut,2)),this.uv=Ut,this.mesh=new nt(It,he),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1}fill(te,fe,he){let{pos:$e,uv:yt,col:Ut,ia:Kt,ib:It}=this,Jt=0,Cn=(Xt,Et,$t,nn,un)=>{$e[Jt*3]=Xt,$e[Jt*3+1]=Et,$e[Jt*3+2]=$t,yt[Jt*2]=nn,yt[Jt*2+1]=un,Jt++};for(let Xt=Kt;Xt<=It;Xt++)for(let Et=0;Et<=b;Et++)Cn(y[Xt],te(Xt,Et),R[Et],y[Xt]/1.3,R[Et]/1.3);for(let Xt=Kt;Xt<=It;Xt++){let Et=te(Xt,b),$t=fe(Xt,b),nn=he(Xt),un=(this.fr+(Xt-Kt)*2)*3;Cn(y[Xt],Et,p/2,y[Xt]/1.3,Et/1.3),Cn(y[Xt],$t,p/2,y[Xt]/1.3,$t/1.3);let wr=1,Is=1-.36*nn,nr=1-.62*nn;Ut[un]=wr,Ut[un+1]=Is,Ut[un+2]=nr,Ut[un+3]=wr,Ut[un+4]=Is,Ut[un+5]=nr}for(let Xt of[Kt,It])for(let Et=0;Et<=b;Et++){let $t=te(Xt,Et),nn=fe(Xt,Et);Cn(y[Xt],$t,R[Et],R[Et]/1.3,$t/1.3),Cn(y[Xt],nn,R[Et],R[Et]/1.3,nn/1.3)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.computeVertexNormals()}}let Me=new rn;u.add(Me);let ye=[],je=[],dt=.7,xe="Medium",st=1,it=[],Oe=!1,Rt=0,mn=new Xn({color:"#0a0d1c",transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1}),fi=[];function br(z){fi.forEach(te=>{Me.remove(te),te.geometry.dispose()}),fi=Array.from({length:Math.max(0,z-1)},()=>{let te=new Qt(1,1,g,1),fe=new nt(te,mn);return fe.frustumCulled=!1,fe.renderOrder=2,Me.add(fe),fe})}function us(z){je.forEach(he=>{Me.remove(he.mesh),he.geo.dispose()}),xe=z.feel,ye=[{mat:"cover",h:(z.inches<=5?.045:.07)*m},...z.layers.map(he=>({mat:he.mat,h:he.inches/10*m}))],dt=ye.reduce((he,$e)=>he+$e.h,0),Oe=ye.some(he=>he.mat==="zones"),Rt=ye.findIndex(he=>he.mat==="rebond"),Rt<0&&(Rt=ye.length-1);let fe=he=>ye.reduce(($e,yt)=>$e+O(yt.mat,he)*yt.h,0);st=y.reduce((he,$e)=>he+fe($e),0)/y.length,je=[],ye.forEach((he,$e)=>{(he.mat==="zones"?[[0,g/3,V.zoneSoft],[g/3,g*2/3,V.zoneFirm],[g*2/3,g,V.zoneSoft]]:[[0,g,V[he.mat]??V.foam25]]).forEach(([Ut,Kt,It])=>{let Jt=new Ie(Ut,Kt,It);Jt.k=$e,je.push(Jt),Me.add(Jt.mesh)})}),it=Array.from({length:ye.length+1},()=>Array.from({length:g+1},()=>new Float32Array(b+1))),br(ye.length),Vn=null}let tr=ui(2.05,.56,1.6,.25,{cs:4,seg:[12,3,10],shape:{crown:.1,bulge:.05}}).geometry,$i=new nt(tr,V.pillow);$i.castShadow=!0,$i.receiveShadow=!0,u.add($i);let Qi=new nt(tr,V.pillow);Qi.castShadow=!0,Qi.receiveShadow=!0,Qi.rotation.y=-.06,u.add(Qi);let $n=A+1.12,Gn=new rn;u.add(Gn);{let z=new nt(Pc(.4),V.hair);z.scale.set(1.12,.82,1),Gn.add(z);let te=new nt(Pc(.26),V.hair);te.scale.set(1.1,.7,1),te.position.set(-.22,.06,-.04),Gn.add(te);let fe=new nt(Pc(.075),V.skinDark);fe.scale.set(1.3,.5,1),fe.position.set(.06,.31,-.02),Gn.add(fe);let he=new nt(Pc(.2),V.skin);he.scale.set(1.3,.9,.9),he.position.set(.34,-.04,-.06),Gn.add(he),Gn.traverse($e=>{$e.castShadow=!0,$e.receiveShadow=!0})}let Ii=A+1.62,ds=f/2+.14,Ln=90,ii=30,Oi=-p/2-.55,yi=p/2+.015,ji=new Qt(1,1,Ln,ii),fs=new nt(ji,V.duvet);fs.castShadow=!0,fs.receiveShadow=!0,fs.frustumCulled=!1,u.add(fs);let ps=5,Ps=new Qt(1,1,Ln,ps),Bi=new nt(Ps,V.duvet);Bi.castShadow=!0,Bi.receiveShadow=!0,Bi.frustumCulled=!1,u.add(Bi);let zi=8,es=new Qt(1,1,zi,ii),M=new nt(es,V.sheet);M.castShadow=!0,M.receiveShadow=!0,M.frustumCulled=!1,u.add(M);let D=[[0,.46,.7],[.32,.9,.82],[.8,.8,.8],[1.3,.64,.72],[1.9,.9,.8],[2.55,.74,.74],[3.25,.62,.7],[4.2,.46,.62],[5,.4,.55],[5.45,.3,.5],[5.9,.12,.45]],Q=(z,te)=>{if(z<=D[0][0])return D[0][te];for(let fe=1;fe<D.length;fe++)if(z<=D[fe][0]){let he=(z-D[fe-1][0])/(D[fe][0]-D[fe-1][0]),$e=he*he*(3-2*he);return Ht(D[fe-1][te],D[fe][te],$e)}return D[D.length-1][te]},X=new so("#3b4a86","#0b0f22",.55);u.add(X);let Z=new Js("#a9bcff",.45);Z.position.set(5,12,6),u.add(Z);let be=new mr("#a9bcff",300,24,.5,.8,1.5);be.position.set(Pe,We+.5,pe+.35),be.target.position.set(-.9,1.9,.2),be.castShadow=!0,be.shadow.mapSize.set(t?1024:2048,t?1024:2048),be.shadow.bias=-5e-4,be.shadow.normalBias=.02,be.shadow.radius=5,be.shadow.camera.near=.5,be.shadow.camera.far=30,u.add(be,be.target);let Xe=new Js("#c9d4ff",.5);Xe.position.set(-3,4,12),u.add(Xe);let _e=(z,te)=>[new Ye(z),new Ye(te)],Te={hemiS:_e("#3b4a86","#eef3ff"),hemiG:_e("#0b0f22","#e8d6bf"),moon:_e("#a9bcff","#ffe3bd"),front:_e("#c9d4ff","#fff6ec"),duvet:_e("#2d3558","#eef1f6"),sheen:_e("#8592c8","#ffffff"),skin:_e("#c79a7d","#d8a888"),wall:_e("#1b2343","#ebe5db"),floor:_e("#3a2e29","#c9b195"),frame:_e("#141824","#f2eee8"),curtain:_e("#d4d8e8","#ffffff"),curtainE:_e("#3d4a7a","#fff0da"),beam:_e("#9fb4ff","#ffd59c"),dust:_e("#d9e6ff","#ffe2b0"),sheet:_e("#ebe7de","#f7f4ee")},ze=(z,te,fe)=>z.copy(te[0]).lerp(te[1],fe),ht=e.theme==="morning"?1:0,mt=ht,Je=0,xt=0,hn=1;function At(){let z=Fi(0,1,ht),te=1-z;ze(X.color,Te.hemiS,z),ze(X.groundColor,Te.hemiG,z),X.intensity=Ht(.55,1.15,z),ze(Z.color,Te.moon,z),Z.intensity=Ht(.45,1.5,z),ze(be.color,Te.moon,z),be.intensity=Ht(300,520,z),ze(Xe.color,Te.front,z),Xe.intensity=Ht(.5,.75,z),ze(V.duvet.color,Te.duvet,z),ze(V.duvet.sheenColor,Te.sheen,z),ze(V.sheet.color,Te.sheet,z),ze(V.skin.color,Te.skin,z),ze($.material.color,Te.wall,z),ze(le.material.color,Te.floor,z),ze(V.frame.color,Te.frame,z),ze(ve.color,Te.curtain,z),ze(ve.emissive,Te.curtainE,z),ve.opacity=Ht(.55,.75,z),wt.material.opacity=z,ze(Ke.material.color,Te.beam,z),Ke.material.opacity=Ht(.16,.22,z),ze(gt.uniforms.uCol.value,Te.dust,z),gt.uniforms.uA.value=Ht(.6,.85,z),u.environmentIntensity=Ht(.35,.85,z),ee.material.opacity=Ht(.85,.5,z);let fe=te*hn;C.intensity=8*fe,V.shade.emissiveIntensity=.05+1.25*fe,at.material.opacity=.45*fe,se.material.opacity=.25*te}let Gt=0,gn=0,qe=0,xn=0,kt=0,on=0;function Pt(){let z=i.clientWidth||1,te=i.clientHeight||1;n.setSize(z,te,!1),d.aspect=z/te;let fe=z>900&&z/te>1.25,he=Math.tan(d.fov*Ne/360),$e=f+3.6;on=fe?.19:0,d.userData.d=Math.max($e/(2*he*d.aspect*(fe?.58:.97)),3.4/he),d.filmOffset=-on*2*he*d.aspect*d.getFilmWidth(),d.updateProjectionMatrix()}function _n(){let z=d.userData.d*(1-.05*kt),te=-.14+Gt,fe=.21+gn;d.position.set(-.5+Math.sin(te)*Math.cos(fe)*z,1.95+Math.sin(fe)*z,Math.cos(te)*Math.cos(fe)*z),d.lookAt(-.5,1.95,0),d.updateMatrixWorld()}i.addEventListener("pointermove",z=>{let te=i.getBoundingClientRect();qe=((z.clientX-te.left)/te.width-.5)*.12,xn=-((z.clientY-te.top)/te.height-.5)*.06,an()},{passive:!0}),i.addEventListener("pointerleave",()=>{qe=0,xn=0,an()});let Vn=null,Hn={shoulders:new B,hips:new B,core:new B};function bt(z,te){let fe=er(wn(z)),he=ye.length,$e=Math.min(.42,dt*H[xe]*1.6);kt=fe,hn=1-Fi(.9,1,z);let yt=[S+dt];ye.forEach((Ft,Wt)=>yt.push(yt[Wt]-Ft.h));for(let Ft=0;Ft<=g;Ft++){let Wt=y[Ft],qt=ye.map(Dn=>O(Dn.mat,Wt)*Dn.h),_t=qt.reduce((Dn,cn)=>Dn+cn,0),vn=$e*fe*w(Wt)*(_t/st);for(let Dn=0;Dn<=b;Dn++){let cn=vn*k(R[Dn]),pi=0;it[he][Ft][Dn]=yt[he];for(let ri=he-1;ri>=0;ri--){pi+=cn*qt[ri]/_t;let vi=yt[ri]-pi;ri>0&&ye[ri].mat==="profile"&&(vi+=.012*Math.sin(Wt*9.5)),it[ri][Ft][Dn]=vi}}}je.forEach(Ft=>{let Wt=ye[Ft.k].h;Ft.fill((qt,_t)=>it[Ft.k][qt][_t],(qt,_t)=>it[Ft.k+1][qt][_t],qt=>wn((1-(it[Ft.k][qt][b]-it[Ft.k+1][qt][b])/Wt)*6.5))}),fi.forEach((Ft,Wt)=>{let qt=Ft.geometry.attributes.position.array;for(let _t=0;_t<=g;_t++){let vn=it[Wt+1][_t][b];qt[_t*3]=y[_t],qt[_t*3+1]=vn+.006,qt[_t*3+2]=p/2+.004,qt[(g+1+_t)*3]=y[_t],qt[(g+1+_t)*3+1]=vn-.006,qt[(g+1+_t)*3+2]=p/2+.004}Ft.geometry.attributes.position.needsUpdate=!0});let Ut=(Ft,Wt)=>{let qt=wn((Ft-A)/f*g,0,g),_t=Math.min(g-1,Math.floor(qt)),vn=qt-_t,Dn=wn((Wt+p/2)/p*b,0,b),cn=Math.min(b-1,Math.floor(Dn)),pi=Dn-cn,ri=it[0][_t][cn]+(it[0][_t+1][cn]-it[0][_t][cn])*vn,vi=it[0][_t][cn+1]+(it[0][_t+1][cn+1]-it[0][_t][cn+1])*vn;return ri+(vi-ri)*pi},Kt=Ut($n,0);$i.position.set($n-.05,Kt+.26,-.05),$i.scale.set(1,1-.1*fe,1),Qi.position.set($n-.12,Ut($n,-1.4)+.26,-1.45),Gn.position.set($n+.02,Kt+.66+.025*(1-fe)+.006*Math.sin(te),-.12),Gn.rotation.z=.06+.03*(1-fe);let It=ji.attributes.position.array,Jt=1-fe;for(let Ft=0;Ft<=ii;Ft++){let Wt=Oi+(yi-Oi)*Ft/ii;for(let qt=0;qt<=Ln;qt++){let _t=Ii+(ds-Ii)*qt/Ln,vn=_t-Ii,Dn=(Ft*(Ln+1)+qt)*3,cn=Q(vn,2)*1.12,pi=1/(1+(Math.abs(Wt)/cn)**3.2),ri=Math.exp(-(((vn-.75)/.5)**2)),vi=Ut(Math.min(_t,f/2),Math.max(-p/2,Math.min(p/2,Wt)))+.11+Q(vn,1)*pi*(1+.05*Jt)+Math.sin(te)*.03*ri*pi;vi+=.045*Math.exp(-((vn/.14)**2)),vi+=(.016*Math.sin(_t*2.1+Wt*1.1+1.3)+.007*Math.sin(_t*5.3-Wt*1.9))*Fi(.2,1.2,vn)*(1-pi*.6),Wt<-p/2&&(vi-=(-p/2-Wt)*1.7),Wt>p/2-.34&&(vi-=((Wt-(p/2-.34))/.36)**2*.1),_t>f/2-.06&&(vi-=(_t-(f/2-.06))*1.9),It[Dn]=_t,It[Dn+1]=vi,It[Dn+2]=Wt}}ji.attributes.position.needsUpdate=!0,ji.computeVertexNormals();let Cn=Ps.attributes.position.array,Xt=.1;for(let Ft=0;Ft<=ps;Ft++){let Wt=Ft/ps*Ne/2;for(let qt=0;qt<=Ln;qt++){let _t=(ii*(Ln+1)+qt)*3,vn=(Ft*(Ln+1)+qt)*3;Cn[vn]=It[_t],Cn[vn+1]=It[_t+1]-Xt+Math.cos(Wt)*Xt-(Ft===ps?.02:0),Cn[vn+2]=It[_t+2]+Math.sin(Wt)*Xt*.9}}Ps.attributes.position.needsUpdate=!0,Ps.computeVertexNormals();let Et=es.attributes.position.array,$t=.42;for(let Ft=0;Ft<=ii;Ft++)for(let Wt=0;Wt<=zi;Wt++){let qt=Math.round(Wt/zi*$t/(ds-Ii)*Ln),_t=(Ft*(Ln+1)+qt)*3,vn=(Ft*(zi+1)+Wt)*3;Et[vn]=It[_t]-.012,Et[vn+1]=It[_t+1]+.028+.02*Math.sin(Wt/zi*Ne),Et[vn+2]=It[_t+2]}es.attributes.position.needsUpdate=!0,es.computeVertexNormals();let nn=Ft=>{let Wt=Math.round(Ft/(ds-Ii)*Ln),qt=Math.round((0-Oi)/(yi-Oi)*ii),_t=(qt*(Ln+1)+Wt)*3;return[It[_t],It[_t+1]]},[un,wr]=nn(.36),[Is,nr]=nn(1.92);Hn.shoulders.set(un,wr+.04,0),Hn.hips.set(Is,nr+.04,0);let _o=Math.round((Is-A)/f*g),Ls=(it[Rt][_o][b]+it[Rt+1][_o][b])/2;Hn.core.set(Is+.6,Ls,p/2+.01)}let En=new B;function yn(){if(!e.onPoints)return;let z=i.clientWidth,te=i.clientHeight,fe={};for(let he in Hn)En.copy(Hn[he]).project(d),fe[he]=[(En.x*.5+.5)*z,(.5-En.y*.5)*te];e.onPoints(fe)}function tn(z){let te=Math.min(.1,Math.max(0,(z-Je)/1e3));Je=z;let fe=!1;return ht!==mt&&(ht=mt>ht?Math.min(mt,ht+te/1.4):Math.max(mt,ht-te/1.4),fe=!0),At(),Gt=_i(Gt,qe,4,te),gn=_i(gn,xn,4,te),Math.abs(Gt-qe)+Math.abs(gn-xn)>1e-4&&(fe=!0),gt.uniforms.uTime.value=z/1e3,_n(),n.render(u,d),yn(),fe}function an(){xt||(Je=performance.now(),xt=requestAnimationFrame(si))}function si(z){xt=0,tn(z)&&(xt=requestAnimationFrame(si))}try{await document.fonts.load('700 74px "Hanken Grotesk"')}catch{}return Pt(),us(e.model),bt(e.settle??0,0),At(),_n(),n.render(u,d),yn(),addEventListener("resize",()=>{Pt(),an()}),window.ResizeObserver&&new ResizeObserver(()=>{Pt(),an()}).observe(i),e.onReady?.(),{setModel(z){us(z),Vn&&bt(Vn[0],Vn[1]),an()},draw(z,te,fe){Vn=[z,te],fe&&ae(fe),bt(z,te),tn(performance.now())},setTheme(z,te){mt=z==="morning"?1:0,te&&(ht=mt),an()},info(){return{zones:Oe,rebond:ye.some(z=>z.mat==="rebond")}}}}function Pc(i){return new as(Array.from({length:17},(e,t)=>{let n=-Ne/2+Ne*t/16;return new me(Math.cos(n)*i+1e-4,Math.sin(n)*i)}),28)}window.EasyComfortBed={mount:L1,mountNight:D1};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
