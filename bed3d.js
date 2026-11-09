(()=>{var Od=0,bh=1,Bd=2;var Hs=1,zd=2,eo=3,Ws=0,ai=1,ln=2,lr=0,to=1,Yi=2,wh=3,Th=4,kd=5;var cr=100,Gd=101,Vd=102,Hd=103,Wd=104,Xd=200,qd=201,Yd=202,Zd=203,Ah=204,Eh=205,Jd=206,Kd=207,$d=208,Qd=209,jd=210,ef=211,tf=212,nf=213,sf=214,$a=0,Qa=1,ja=2,Or=3,el=4,tl=5,nl=6,il=7,Ch=0,rf=1,of=2,os=0,Rh=1,Ph=2,Ih=3,no=4,Lh=5,Dh=6,Nh=7;var Uh=300,hr=301,io=302,Il=303,Ll=304,si=1e3,ns=1001,Br=1002,Gn=1003,af=1004;var jo=1005;var Wn=1006,Dl=1007;var Zi=1008;var pi=1009,Fh=1010,Oh=1011,so=1012,Nl=1013,Ji=1014,Ki=1015,$i=1016,Ul=1017,Fl=1018,ur=1020,Bh=35902,zh=35899,kh=1021,Gh=1022,Ai=1023,Ms=1026,ws=1027,Vh=1028,Ol=1029,Xs=1030,Bl=1031;var zl=1033,ea=33776,ta=33777,na=33778,ia=33779,kl=35840,Gl=35841,Vl=35842,Hl=35843,Wl=36196,Xl=37492,ql=37496,Yl=37488,Zl=37489,sa=37490,Jl=37491,Kl=37808,$l=37809,Ql=37810,jl=37811,ec=37812,tc=37813,nc=37814,ic=37815,sc=37816,rc=37817,oc=37818,ac=37819,lc=37820,cc=37821,hc=36492,uc=36494,dc=36495,fc=36283,pc=36284,ra=36285,mc=36286;var Ao=2300,sl=2301,Ja=2302,ch=2303,hh=2400,uh=2401,dh=2402;var lf=3200;var gc=0,cf=1,Ts="",bn="srgb",Eo="srgb-linear",Co="linear",nn="srgb";var Ka=7680;var hf=519,uf=512,df=513,ff=514,Hh=515,pf=516,mf=517,Wh=518,Xh=519,qh=35044;var Yh="300 es",Di=2e3,zr=2001;function Lp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Dp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gf(){let i=Ro("canvas");return i.style.display="block",i}var td={},kr=null;function Po(...i){let e="THREE."+i.shift();kr?kr("log",e,...i):console.log(e,...i)}function _f(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function dt(...i){i=_f(i);let e="THREE."+i.shift();if(kr)kr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ut(...i){i=_f(i);let e="THREE."+i.shift();if(kr)kr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function er(...i){let e=i.join(" ");e in td||(td[e]=!0,dt(...i))}function xf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var yf={[$a]:$a,[ja]:nl,[el]:el,[Or]:tl,[Qa]:Qa,[nl]:ja,[il]:il,[tl]:Or},ss=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Oc=Math.PI/180,Io=180/Math.PI;function qs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kn[i&255]+Kn[i>>8&255]+Kn[i>>16&255]+Kn[i>>24&255]+"-"+Kn[e&255]+Kn[e>>8&255]+"-"+Kn[e>>16&15|64]+Kn[e>>24&255]+"-"+Kn[t&63|128]+Kn[t>>8&255]+"-"+Kn[t>>16&255]+Kn[t>>24&255]+Kn[n&255]+Kn[n>>8&255]+Kn[n>>16&255]+Kn[n>>24&255]).toLowerCase()}function Ut(i,e,t){return Math.max(e,Math.min(t,i))}function Np(i,e){return(i%e+e)%e}function Bc(i,e,t){return(1-t)*i+t*e}function vf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _c(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Sf(i,e){if(e.constructor===Float32Array)return i;let t=_c(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Mf(i,e){if(e.constructor===Float32Array)return i;let t=_c(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var jh=class jh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ut(this.x,e.x,t.x),this.y=Ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ut(this.x,e,t),this.y=Ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jh.prototype.isVector2=!0;var ge=jh,Ni=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],m=r[o+2],T=r[o+3];if(u!==T||l!==d||c!==p||h!==m){let g=l*d+c*p+h*m+u*T;g<0&&(d=-d,p=-p,m=-m,T=-T,g=-g);let _=1-a;if(g<.9995){let M=Math.acos(g),E=Math.sin(M);_=Math.sin(_*M)/E,a=Math.sin(a*M)/E,l=l*_+d*a,c=c*_+p*a,h=h*_+m*a,u=u*_+T*a}else{l=l*_+d*a,c=c*_+p*a,h=h*_+m*a,u=u*_+T*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*p-c*d,e[t+1]=l*m+h*d+c*u-a*p,e[t+2]=c*m+h*p+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},eu=class eu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ut(this.x,e.x,t.x),this.y=Ut(this.y,e.y,t.y),this.z=Ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ut(this.x,e,t),this.y=Ut(this.y,e,t),this.z=Ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zc.copy(this).projectOnVector(e),this.sub(zc)}reflect(e){return this.sub(zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};eu.prototype.isVector3=!0;var N=eu,zc=new N,nd=new Ni,tu=class tu{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],T=s[0],g=s[3],_=s[6],M=s[1],E=s[4],v=s[7],P=s[2],C=s[5],y=s[8];return r[0]=o*T+a*M+l*P,r[3]=o*g+a*E+l*C,r[6]=o*_+a*v+l*y,r[1]=c*T+h*M+u*P,r[4]=c*g+h*E+u*C,r[7]=c*_+h*v+u*y,r[2]=d*T+p*M+m*P,r[5]=d*g+p*E+m*C,r[8]=d*_+p*v+m*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,m=t*u+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/m;return e[0]=u*T,e[1]=(s*c-h*n)*T,e[2]=(a*n-s*o)*T,e[3]=d*T,e[4]=(h*t-s*l)*T,e[5]=(s*r-a*t)*T,e[6]=p*T,e[7]=(n*l-c*t)*T,e[8]=(o*t-n*r)*T,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kc.makeScale(e,t)),this}rotate(e){return er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kc.makeRotation(-e)),this}translate(e,t){return er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};tu.prototype.isMatrix3=!0;var vt=tu,kc=new vt,id=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sd=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Up(){let i={enabled:!0,workingColorSpace:Eo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===nn&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nn&&(s.r=Fr(s.r),s.g=Fr(s.g),s.b=Fr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ts?Co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Eo]:{primaries:e,whitePoint:n,transfer:Co,toXYZ:id,fromXYZ:sd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:n,transfer:nn,toXYZ:id,fromXYZ:sd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),i}var kt=Up();function Ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var yr,rl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yr===void 0&&(yr=Ro("canvas")),yr.width=e.width,yr.height=e.height;let s=yr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=yr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ro("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ss(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ss(t[n]/255)*255):t[n]=Ss(t[n]);return{data:t,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fp=0,Gr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=qs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gc(s[o].image)):r.push(Gc(s[o]))}else r=Gc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Gc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}var Op=0,Vc=new N,Xn=class i extends ss{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ns,s=ns,r=Wn,o=Zi,a=Ai,l=pi,c=i.DEFAULT_ANISOTROPY,h=Ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=qs(),this.name="",this.source=new Gr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Vc).x}get height(){return this.source.getSize(Vc).y}get depth(){return this.source.getSize(Vc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){dt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){dt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case si:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case Br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case si:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case Br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Uh;Xn.DEFAULT_ANISOTROPY=1;var nu=class nu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],T=l[2],g=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-T)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+T)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,v=(p+1)/2,P=(_+1)/2,C=(h+d)/4,y=(u+T)/4,A=(m+g)/4;return E>v&&E>P?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=C/n,r=y/n):v>P?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=A/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=y/r,s=A/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(u-T)*(u-T)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-T)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ut(this.x,e.x,t.x),this.y=Ut(this.y,e.y,t.y),this.z=Ut(this.z,e.z,t.z),this.w=Ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ut(this.x,e,t),this.y=Ut(this.y,e,t),this.z=Ut(this.z,e,t),this.w=Ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nu.prototype.isVector4=!0;var dn=nu,ol=class extends ss{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dn(0,0,e,t),this.scissorTest=!1,this.viewport=new dn(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Xn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bi=class extends ol{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Lo=class extends Xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var al=class extends Xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Pl=class Pl{constructor(e,t,n,s,r,o,a,l,c,h,u,d,p,m,T,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,p,m,T,g)}set(e,t,n,s,r,o,a,l,c,h,u,d,p,m,T,g){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=d,_[3]=p,_[7]=m,_[11]=T,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/vr.setFromMatrixColumn(e,0).length(),r=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,m=a*h,T=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=d-T*c,t[9]=-a*l,t[2]=T-d*c,t[6]=m+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,m=c*h,T=c*u;t[0]=d+T*a,t[4]=m*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-m,t[6]=T+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,m=c*h,T=c*u;t[0]=d-T*a,t[4]=-o*u,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*h,t[9]=T-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,p=o*u,m=a*h,T=a*u;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+T,t[1]=l*u,t[5]=T*c+d,t[9]=p*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,m=a*l,T=a*c;t[0]=l*h,t[4]=T-d*u,t[8]=m*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+m,t[10]=d-T*u}else if(e.order==="XZY"){let d=o*l,p=o*c,m=a*l,T=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+T,t[5]=o*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=a*h,t[10]=T*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bp,e,zp)}lookAt(e,t,n){let s=this.elements;return Si.subVectors(e,t),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Rs.crossVectors(n,Si),Rs.lengthSq()===0&&(Math.abs(n.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Rs.crossVectors(n,Si)),Rs.normalize(),Ma.crossVectors(Si,Rs),s[0]=Rs.x,s[4]=Ma.x,s[8]=Si.x,s[1]=Rs.y,s[5]=Ma.y,s[9]=Si.y,s[2]=Rs.z,s[6]=Ma.z,s[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],T=n[6],g=n[10],_=n[14],M=n[3],E=n[7],v=n[11],P=n[15],C=s[0],y=s[4],A=s[8],G=s[12],F=s[1],z=s[5],q=s[9],j=s[13],D=s[2],J=s[6],ee=s[10],X=s[14],xe=s[3],ne=s[7],he=s[11],fe=s[15];return r[0]=o*C+a*F+l*D+c*xe,r[4]=o*y+a*z+l*J+c*ne,r[8]=o*A+a*q+l*ee+c*he,r[12]=o*G+a*j+l*X+c*fe,r[1]=h*C+u*F+d*D+p*xe,r[5]=h*y+u*z+d*J+p*ne,r[9]=h*A+u*q+d*ee+p*he,r[13]=h*G+u*j+d*X+p*fe,r[2]=m*C+T*F+g*D+_*xe,r[6]=m*y+T*z+g*J+_*ne,r[10]=m*A+T*q+g*ee+_*he,r[14]=m*G+T*j+g*X+_*fe,r[3]=M*C+E*F+v*D+P*xe,r[7]=M*y+E*z+v*J+P*ne,r[11]=M*A+E*q+v*ee+P*he,r[15]=M*G+E*j+v*X+P*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],m=e[3],T=e[7],g=e[11],_=e[15],M=l*p-c*d,E=a*p-c*u,v=a*d-l*u,P=o*p-c*h,C=o*d-l*h,y=o*u-a*h;return t*(T*M-g*E+_*v)-n*(m*M-g*P+_*C)+s*(m*E-T*P+_*y)-r*(m*v-T*C+g*y)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],T=e[13],g=e[14],_=e[15],M=t*a-n*o,E=t*l-s*o,v=t*c-r*o,P=n*l-s*a,C=n*c-r*a,y=s*c-r*l,A=h*T-u*m,G=h*g-d*m,F=h*_-p*m,z=u*g-d*T,q=u*_-p*T,j=d*_-p*g,D=M*j-E*q+v*z+P*F-C*G+y*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let J=1/D;return e[0]=(a*j-l*q+c*z)*J,e[1]=(s*q-n*j-r*z)*J,e[2]=(T*y-g*C+_*P)*J,e[3]=(d*C-u*y-p*P)*J,e[4]=(l*F-o*j-c*G)*J,e[5]=(t*j-s*F+r*G)*J,e[6]=(g*v-m*y-_*E)*J,e[7]=(h*y-d*v+p*E)*J,e[8]=(o*q-a*F+c*A)*J,e[9]=(n*F-t*q-r*A)*J,e[10]=(m*C-T*v+_*M)*J,e[11]=(u*v-h*C-p*M)*J,e[12]=(a*G-o*z-l*A)*J,e[13]=(t*z-n*G+s*A)*J,e[14]=(T*E-m*P-g*M)*J,e[15]=(h*P-u*E+d*M)*J,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,m=r*u,T=o*h,g=o*u,_=a*u,M=l*c,E=l*h,v=l*u,P=n.x,C=n.y,y=n.z;return s[0]=(1-(T+_))*P,s[1]=(p+v)*P,s[2]=(m-E)*P,s[3]=0,s[4]=(p-v)*C,s[5]=(1-(d+_))*C,s[6]=(g+M)*C,s[7]=0,s[8]=(m+E)*y,s[9]=(g-M)*y,s[10]=(1-(d+T))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=vr.set(s[0],s[1],s[2]).length(),a=vr.set(s[4],s[5],s[6]).length(),l=vr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Gi.copy(this);let c=1/o,h=1/a,u=1/l;return Gi.elements[0]*=c,Gi.elements[1]*=c,Gi.elements[2]*=c,Gi.elements[4]*=h,Gi.elements[5]*=h,Gi.elements[6]*=h,Gi.elements[8]*=u,Gi.elements[9]*=u,Gi.elements[10]*=u,t.setFromRotationMatrix(Gi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Di,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),m,T;if(l)m=r/(o-r),T=o*r/(o-r);else if(a===Di)m=-(o+r)/(o-r),T=-2*o*r/(o-r);else if(a===zr)m=-o/(o-r),T=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Di,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),m,T;if(l)m=1/(o-r),T=o/(o-r);else if(a===Di)m=-2/(o-r),T=-(o+r)/(o-r);else if(a===zr)m=-1/(o-r),T=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Pl.prototype.isMatrix4=!0;var $t=Pl,vr=new N,Gi=new $t,Bp=new N(0,0,0),zp=new N(1,1,1),Rs=new N,Ma=new N,Si=new N,rd=new $t,od=new Ni,Wi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return od.setFromEuler(this),this.setFromQuaternion(od,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wi.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kp=0,ad=new N,Sr=new Ni,ms=new $t,ba=new N,go=new N,Gp=new N,Vp=new Ni,ld=new N(1,0,0),cd=new N(0,1,0),hd=new N(0,0,1),ud={type:"added"},Hp={type:"removed"},Mr={type:"childadded",child:null},Hc={type:"childremoved",child:null},Ln=class i extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new Wi,n=new Ni,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new vt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(ld,e)}rotateY(e){return this.rotateOnAxis(cd,e)}rotateZ(e){return this.rotateOnAxis(hd,e)}translateOnAxis(e,t){return ad.copy(e).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ld,e)}translateY(e){return this.translateOnAxis(cd,e)}translateZ(e){return this.translateOnAxis(hd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ms.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ba.copy(e):ba.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ms.lookAt(go,ba,this.up):ms.lookAt(ba,go,this.up),this.quaternion.setFromRotationMatrix(ms),s&&(ms.extractRotation(s.matrixWorld),Sr.setFromRotationMatrix(ms),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ud),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hp),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ms.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ms.multiply(e.parent.matrixWorld)),e.applyMatrix4(ms),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ud),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,Gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,Vp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ln.DEFAULT_UP=new N(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qt=class extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wp={type:"move"},Hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let T of e.hand.values()){let g=t.getJointPose(T,n),_=this._getHandJoint(c,T);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ps={h:0,s:0,l:0},wa={h:0,s:0,l:0};function Wc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,kt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=kt.workingColorSpace){if(e=Np(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Wc(o,r,e+1/3),this.g=Wc(o,r,e),this.b=Wc(o,r,e-1/3)}return kt.colorSpaceToWorking(this,s),this}setStyle(e,t=bn){function n(r){r!==void 0&&parseFloat(r)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:dt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){let n=bf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return kt.workingToColorSpace($n.copy(this),e),Math.round(Ut($n.r*255,0,255))*65536+Math.round(Ut($n.g*255,0,255))*256+Math.round(Ut($n.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.workingToColorSpace($n.copy(this),t);let n=$n.r,s=$n.g,r=$n.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=kt.workingColorSpace){return kt.workingToColorSpace($n.copy(this),t),e.r=$n.r,e.g=$n.g,e.b=$n.b,e}getStyle(e=bn){kt.workingToColorSpace($n.copy(this),e);let t=$n.r,n=$n.g,s=$n.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ps),this.setHSL(Ps.h+e,Ps.s+t,Ps.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ps),e.getHSL(wa);let n=Bc(Ps.h,wa.h,t),s=Bc(Ps.s,wa.s,t),r=Bc(Ps.l,wa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$n=new Ke;Ke.NAMES=bf;var Ns=class extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vi=new N,gs=new N,Xc=new N,_s=new N,br=new N,wr=new N,dd=new N,qc=new N,Yc=new N,Zc=new N,Jc=new dn,Kc=new dn,$c=new dn,vs=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vi.subVectors(e,t),s.cross(Vi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Vi.subVectors(s,t),gs.subVectors(n,t),Xc.subVectors(e,t);let o=Vi.dot(Vi),a=Vi.dot(gs),l=Vi.dot(Xc),c=gs.dot(gs),h=gs.dot(Xc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,_s)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_s.x),l.addScaledVector(o,_s.y),l.addScaledVector(a,_s.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Jc.setScalar(0),Kc.setScalar(0),$c.setScalar(0),Jc.fromBufferAttribute(e,t),Kc.fromBufferAttribute(e,n),$c.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Jc,r.x),o.addScaledVector(Kc,r.y),o.addScaledVector($c,r.z),o}static isFrontFacing(e,t,n,s){return Vi.subVectors(n,t),gs.subVectors(e,t),Vi.cross(gs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),gs.subVectors(this.a,this.b),Vi.cross(gs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;br.subVectors(s,n),wr.subVectors(r,n),qc.subVectors(e,n);let l=br.dot(qc),c=wr.dot(qc);if(l<=0&&c<=0)return t.copy(n);Yc.subVectors(e,s);let h=br.dot(Yc),u=wr.dot(Yc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(br,o);Zc.subVectors(e,r);let p=br.dot(Zc),m=wr.dot(Zc);if(m>=0&&p<=m)return t.copy(r);let T=p*c-l*m;if(T<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(wr,a);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return dd.subVectors(r,s),a=(u-h)/(u-h+(p-m)),t.copy(s).addScaledVector(dd,a);let _=1/(g+T+d);return o=T*_,a=d*_,t.copy(n).addScaledVector(br,o).addScaledVector(wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Us=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hi):Hi.fromBufferAttribute(r,o),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ta.copy(n.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),Aa.subVectors(this.max,_o),Tr.subVectors(e.a,_o),Ar.subVectors(e.b,_o),Er.subVectors(e.c,_o),Is.subVectors(Ar,Tr),Ls.subVectors(Er,Ar),Ks.subVectors(Tr,Er);let t=[0,-Is.z,Is.y,0,-Ls.z,Ls.y,0,-Ks.z,Ks.y,Is.z,0,-Is.x,Ls.z,0,-Ls.x,Ks.z,0,-Ks.x,-Is.y,Is.x,0,-Ls.y,Ls.x,0,-Ks.y,Ks.x,0];return!Qc(t,Tr,Ar,Er,Aa)||(t=[1,0,0,0,1,0,0,0,1],!Qc(t,Tr,Ar,Er,Aa))?!1:(Ea.crossVectors(Is,Ls),t=[Ea.x,Ea.y,Ea.z],Qc(t,Tr,Ar,Er,Aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xs=[new N,new N,new N,new N,new N,new N,new N,new N],Hi=new N,Ta=new Us,Tr=new N,Ar=new N,Er=new N,Is=new N,Ls=new N,Ks=new N,_o=new N,Aa=new N,Ea=new N,$s=new N;function Qc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$s.fromArray(i,r);let a=s.x*Math.abs($s.x)+s.y*Math.abs($s.y)+s.z*Math.abs($s.z),l=e.dot($s),c=t.dot($s),h=n.dot($s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var In=new N,Ca=new ge,Xp=0,Yt=class extends ss{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qh,this.updateRanges=[],this.gpuType=Ki,this.version=0,this._normalizationScale=e!==void 0?_c(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ca.fromBufferAttribute(this,t),Ca.applyMatrix3(e),this.setXY(t,Ca.x,Ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix3(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Sf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Mf(e,this.array)}};var Do=class extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var No=class extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var rn=class extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},qp=new Us,xo=new N,jc=new N,tr=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):qp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);let t=xo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(jc)),this.expandByPoint(xo.copy(e.center).sub(jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Yp=0,Li=new $t,eh=new Ln,Cr=new N,Mi=new Us,yo=new Us,kn=new N,gn=class i extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lp(e)?No:Do)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new vt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,t,n){return Li.makeTranslation(e,t,n),this.applyMatrix4(Li),this}scale(e,t,n){return Li.makeScale(e,t,n),this.applyMatrix4(Li),this}lookAt(e){return eh.lookAt(e),eh.updateMatrix(),this.applyMatrix4(eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rn(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Us);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Mi.setFromBufferAttribute(r),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];yo.setFromBufferAttribute(a),this.morphTargetsRelative?(kn.addVectors(Mi.min,yo.min),Mi.expandByPoint(kn),kn.addVectors(Mi.max,yo.max),Mi.expandByPoint(kn)):(Mi.expandByPoint(yo.min),Mi.expandByPoint(yo.max))}Mi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)kn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)kn.fromBufferAttribute(a,c),l&&(Cr.fromBufferAttribute(e,c),kn.add(Cr)),s=Math.max(s,n.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Yt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let G=0;G<n.count;G++)a[G]=new N,l[G]=new N;let h=new N,u=new N,d=new N,p=new ge,m=new ge,T=new ge,g=new N,_=new N;function M(G,F,z){c[G]=c[F]=c[z]=1,h.fromBufferAttribute(n,G),u.fromBufferAttribute(n,F),d.fromBufferAttribute(n,z),p.fromBufferAttribute(r,G),m.fromBufferAttribute(r,F),T.fromBufferAttribute(r,z),u.sub(h),d.sub(h),m.sub(p),T.sub(p);let q=1/(m.x*T.y-T.x*m.y);isFinite(q)&&(g.copy(u).multiplyScalar(T.y).addScaledVector(d,-m.y).multiplyScalar(q),_.copy(d).multiplyScalar(m.x).addScaledVector(u,-T.x).multiplyScalar(q),a[G].add(g),a[F].add(g),a[z].add(g),l[G].add(_),l[F].add(_),l[z].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let G=0,F=E.length;G<F;++G){let z=E[G],q=z.start,j=z.count;for(let D=q,J=q+j;D<J;D+=3)M(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let v=new N,P=new N,C=new N,y=new N;function A(G){C.fromBufferAttribute(s,G),y.copy(C);let F=a[G];v.copy(F),v.sub(C.multiplyScalar(C.dot(F))).normalize(),P.crossVectors(y,F);let q=P.dot(l[G])<0?-1:1;o.setXYZW(G,v.x,v.y,v.z,q)}for(let G=0,F=n.count;G<F;++G)c[G]&&A(G);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),T=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,T),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(T,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kn.fromBufferAttribute(e,t),kn.normalize(),e.setXYZ(t,kn.x,kn.y,kn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let T=0,g=l.length;T<g;T++){a.isInterleavedBufferAttribute?p=l[T]*a.data.stride+a.offset:p=l[T]*h;for(let _=0;_<h;_++)d[m++]=c[p++]}return new Yt(d,h,u)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ll=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qh,this.updateRanges=[],this.version=0,this.uuid=qs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=fd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=fd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function fd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=qs()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var ii=new N,Uo=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?_c(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ii.fromBufferAttribute(this,t),ii.applyMatrix4(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ii.fromBufferAttribute(this,t),ii.applyNormalMatrix(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ii.fromBufferAttribute(this,t),ii.transformDirection(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Po("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Po("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Sf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Mf(e,this.data.array)}},th=new N,Zp=new N,Jp=new vt,di=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=th.subVectors(n,t).cross(Zp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(th),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jp.getNormalMatrix(e),s=this.coplanarPoint(th).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Kp=0,rs=class extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=to,this.side=Ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Eh,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ka,this.stencilZFail=Ka,this.stencilZPass=Ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){dt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){dt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new di().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Fs=class extends rs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Rr,vo=new N,Pr=new N,Ir=new N,Lr=new ge,So=new ge,wf=new $t,Ra=new N,Mo=new N,Pa=new N,pd=new ge,nh=new ge,md=new ge,nr=class extends Ln{constructor(e=new Fs){if(super(),this.isSprite=!0,this.type="Sprite",Rr===void 0){Rr=new gn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ll(t,5);Rr.setIndex([0,1,2,0,2,3]),Rr.setAttribute("position",new Uo(n,3,0,!1)),Rr.setAttribute("uv",new Uo(n,2,3,!1))}this.geometry=Rr,this.material=e,this.center=new ge(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pr.setFromMatrixScale(this.matrixWorld),wf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ir.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pr.multiplyScalar(-Ir.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ia(Ra.set(-.5,-.5,0),Ir,o,Pr,s,r),Ia(Mo.set(.5,-.5,0),Ir,o,Pr,s,r),Ia(Pa.set(.5,.5,0),Ir,o,Pr,s,r),pd.set(0,0),nh.set(1,0),md.set(1,1);let a=e.ray.intersectTriangle(Ra,Mo,Pa,!1,vo);if(a===null&&(Ia(Mo.set(-.5,.5,0),Ir,o,Pr,s,r),nh.set(0,1),a=e.ray.intersectTriangle(Ra,Pa,Mo,!1,vo),a===null))return;let l=e.ray.origin.distanceTo(vo);l<e.near||l>e.far||t.push({distance:l,point:vo.clone(),uv:vs.getInterpolation(vo,Ra,Mo,Pa,pd,nh,md,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ia(i,e,t,n,s,r){Lr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(So.x=r*Lr.x-s*Lr.y,So.y=s*Lr.x+r*Lr.y):So.copy(Lr),i.copy(e),i.x+=So.x,i.y+=So.y,i.applyMatrix4(wf)}var ys=new N,ih=new N,La=new N,Da=new N,Wr=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ys)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ys.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ys.copy(this.origin).addScaledVector(this.direction,t),ys.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ih.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),Da.copy(this.origin).sub(ih);let r=e.distanceTo(t)*.5,o=-this.direction.dot(La),a=Da.dot(this.direction),l=-Da.dot(La),c=Da.lengthSq(),h=Math.abs(1-o*o),u,d,p,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let T=1/h;u*=T,d*=T,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ih).addScaledVector(La,d),p}intersectSphere(e,t){if(e.radius<0)return null;ys.subVectors(e.center,this.origin);let n=ys.dot(this.direction),s=ys.dot(ys)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ys)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,p=e.z-o.z,m=t.x-o.x,T=t.y-o.y,g=t.z-o.z,_=n.x-o.x,M=n.y-o.y,E=n.z-o.z,v=Math.abs(l),P=Math.abs(c),C=Math.abs(h),y,A,G,F,z,q,j,D,J,ee,X,xe;if(v>=P&&v>=C?(G=l,q=u,J=m,xe=_,l>=0?(y=c,A=h,F=d,z=p,j=T,D=g,ee=M,X=E):(y=h,A=c,F=p,z=d,j=g,D=T,ee=E,X=M)):P>=C?(G=c,q=d,J=T,xe=M,c>=0?(y=h,A=l,F=p,z=u,j=g,D=m,ee=E,X=_):(y=l,A=h,F=u,z=p,j=m,D=g,ee=_,X=E)):(G=h,q=p,J=g,xe=E,h>=0?(y=l,A=c,F=u,z=d,j=m,D=T,ee=_,X=M):(y=c,A=l,F=d,z=u,j=T,D=m,ee=M,X=_)),G===0)return null;let ne=y/G,he=A/G,fe=1/G,Xe=F-ne*q,qe=z-he*q,re=j-ne*J,Oe=D-he*J,me=ee-ne*xe,Ge=X-he*xe,Fe=me*Oe-Ge*re,et=Xe*Ge-qe*me,Qt=re*qe-Oe*Xe;if(s){if(Fe<0||et<0||Qt<0)return null}else if((Fe<0||et<0||Qt<0)&&(Fe>0||et>0||Qt>0))return null;let it=Fe+et+Qt;if(it===0)return null;let pt=fe*(Fe*q+et*J+Qt*xe);return(it>0?pt<0:pt>0)?null:this.at(pt/it,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vn=class extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=Ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gd=new $t,Qs=new Wr,Na=new tr,_d=new N,Ua=new N,Fa=new N,Oa=new N,sh=new N,Ba=new N,xd=new N,za=new N,ct=class extends Ln{constructor(e=new gn,t=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(sh.fromBufferAttribute(u,e),o?Ba.addScaledVector(sh,h):Ba.addScaledVector(sh.sub(t),h))}t.add(Ba)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(r),Qs.copy(e.ray).recast(e.near),!(Na.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(Na,_d)===null||Qs.origin.distanceToSquared(_d)>(e.far-e.near)**2))&&(gd.copy(r).invert(),Qs.copy(e.ray).applyMatrix4(gd),!(n.boundingBox!==null&&Qs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,T=d.length;m<T;m++){let g=d[m],_=o[g.materialIndex],M=Math.max(g.start,p.start),E=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let v=M,P=E;v<P;v+=3){let C=a.getX(v),y=a.getX(v+1),A=a.getX(v+2);s=ka(this,_,e,n,c,h,u,C,y,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),T=Math.min(a.count,p.start+p.count);for(let g=m,_=T;g<_;g+=3){let M=a.getX(g),E=a.getX(g+1),v=a.getX(g+2);s=ka(this,o,e,n,c,h,u,M,E,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,T=d.length;m<T;m++){let g=d[m],_=o[g.materialIndex],M=Math.max(g.start,p.start),E=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let v=M,P=E;v<P;v+=3){let C=v,y=v+1,A=v+2;s=ka(this,_,e,n,c,h,u,C,y,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),T=Math.min(l.count,p.start+p.count);for(let g=m,_=T;g<_;g+=3){let M=g,E=g+1,v=g+2;s=ka(this,o,e,n,c,h,u,M,E,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function $p(i,e,t,n,s,r,o,a){let l;if(e.side===ai?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ws,a),l===null)return null;za.copy(a),za.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(za);return c<t.near||c>t.far?null:{distance:c,point:za.clone(),object:i}}function ka(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ua),i.getVertexPosition(l,Fa),i.getVertexPosition(c,Oa);let h=$p(i,e,t,n,Ua,Fa,Oa,xd);if(h){let u=new N;vs.getBarycoord(xd,Ua,Fa,Oa,u),s&&(h.uv=vs.getInterpolatedAttribute(s,a,l,c,u,new ge)),r&&(h.uv1=vs.getInterpolatedAttribute(r,a,l,c,u,new ge)),o&&(h.normal=vs.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new N,materialIndex:0};vs.getNormal(Ua,Fa,Oa,d.normal),h.face=d,h.barycoord=u}return h}var Xr=class extends Xn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Gn,h=Gn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var js=new tr,Qp=new ge(.5,.5),Ga=new N,Os=class{constructor(e=new di,t=new di,n=new di,s=new di,r=new di,o=new di){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Di,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],m=r[8],T=r[9],g=r[10],_=r[11],M=r[12],E=r[13],v=r[14],P=r[15];if(s[0].setComponents(c-o,p-h,_-m,P-M).normalize(),s[1].setComponents(c+o,p+h,_+m,P+M).normalize(),s[2].setComponents(c+a,p+u,_+T,P+E).normalize(),s[3].setComponents(c-a,p-u,_-T,P-E).normalize(),n)s[4].setComponents(l,d,g,v).normalize(),s[5].setComponents(c-l,p-d,_-g,P-v).normalize();else if(s[4].setComponents(c-l,p-d,_-g,P-v).normalize(),t===Di)s[5].setComponents(c+l,p+d,_+g,P+v).normalize();else if(t===zr)s[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(e){js.center.set(0,0,0);let t=Qp.distanceTo(e.center);return js.radius=.7071067811865476+t,js.applyMatrix4(e.matrixWorld),this.intersectsSphere(js)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ga.x=s.normal.x>0?e.max.x:e.min.x,Ga.y=s.normal.y>0?e.max.y:e.min.y,Ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yd=new $t,cl=class i{constructor(){this.coordinateSystem=Di,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];yd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Os),n[s].setFromProjectionMatrix(yd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Os),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var hl=class extends rs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vd=new $t,fh=new Wr,Va=new tr,Ha=new N,qr=class extends Ln{constructor(e=new gn,t=new hl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(s),Va.radius+=r,e.ray.intersectsSphere(Va)===!1)return;vd.copy(s).invert(),fh.copy(e.ray).applyMatrix4(vd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=d,T=p;m<T;m++){let g=c.getX(m);Ha.fromBufferAttribute(u,g),Sd(Ha,g,l,s,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let m=d,T=p;m<T;m++)Ha.fromBufferAttribute(u,m),Sd(Ha,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sd(i,e,t,n,s,r,o){let a=fh.distanceSqToPoint(i);if(a<t){let l=new N;fh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Fo=class extends Xn{constructor(e=[],t=hr,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ri=class extends Xn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bs=class extends Xn{constructor(e,t,n=Ji,s,r,o,a=Gn,l=Gn,c,h=Ms,u=1){if(h!==Ms&&h!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Oo=class extends bs{constructor(e,t=Ji,n=hr,s,r,o=Gn,a=Gn,l,c=Ms){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Bo=class extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},fi=class i extends gn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(h,3)),this.setAttribute("uv",new rn(u,2));function m(T,g,_,M,E,v,P,C,y,A,G){let F=v/y,z=P/A,q=v/2,j=P/2,D=C/2,J=y+1,ee=A+1,X=0,xe=0,ne=new N;for(let he=0;he<ee;he++){let fe=he*z-j;for(let Xe=0;Xe<J;Xe++){let qe=Xe*F-q;ne[T]=qe*M,ne[g]=fe*E,ne[_]=D,c.push(ne.x,ne.y,ne.z),ne[T]=0,ne[g]=0,ne[_]=C>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Xe/y),u.push(1-he/A),X+=1}}for(let he=0;he<A;he++)for(let fe=0;fe<y;fe++){let Xe=d+fe+J*he,qe=d+fe+J*(he+1),re=d+(fe+1)+J*(he+1),Oe=d+(fe+1)+J*he;l.push(Xe,qe,Oe),l.push(qe,re,Oe),xe+=6}a.addGroup(p,xe,G),p+=xe,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var zo=class i extends gn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new N,h=new ge;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new rn(o,3)),this.setAttribute("normal",new rn(a,3)),this.setAttribute("uv",new rn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Dn=class i extends gn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],m=0,T=[],g=n/2,_=0;M(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new rn(u,3)),this.setAttribute("normal",new rn(d,3)),this.setAttribute("uv",new rn(p,2));function M(){let v=new N,P=new N,C=0,y=(t-e)/n;for(let A=0;A<=r;A++){let G=[],F=A/r,z=F*(t-e)+e;for(let q=0;q<=s;q++){let j=q/s,D=j*l+a,J=Math.sin(D),ee=Math.cos(D);P.x=z*J,P.y=-F*n+g,P.z=z*ee,u.push(P.x,P.y,P.z),v.set(J,y,ee).normalize(),d.push(v.x,v.y,v.z),p.push(j,1-F),G.push(m++)}T.push(G)}for(let A=0;A<s;A++)for(let G=0;G<r;G++){let F=T[G][A],z=T[G+1][A],q=T[G+1][A+1],j=T[G][A+1];(e>0||G!==0)&&(h.push(F,z,j),C+=3),(t>0||G!==r-1)&&(h.push(z,q,j),C+=3)}c.addGroup(_,C,0),_+=C}function E(v){let P=m,C=new ge,y=new N,A=0,G=v===!0?e:t,F=v===!0?1:-1;for(let q=1;q<=s;q++)u.push(0,g*F,0),d.push(0,F,0),p.push(.5,.5),m++;let z=m;for(let q=0;q<=s;q++){let D=q/s*l+a,J=Math.cos(D),ee=Math.sin(D);y.x=G*ee,y.y=g*F,y.z=G*J,u.push(y.x,y.y,y.z),d.push(0,F,0),C.x=J*.5+.5,C.y=ee*.5*F+.5,p.push(C.x,C.y),m++}for(let q=0;q<s;q++){let j=P+q,D=z+q;v===!0?h.push(D,D+1,j):h.push(D+1,D,j),A+=3}c.addGroup(_,A,v===!0?1:2),_+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){dt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ge:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new N,s=[],r=[],o=[],a=new N,l=new $t;for(let p=0;p<=e;p++){let m=p/e;s[p]=this.getTangentAt(m,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ut(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ut(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Yr=class extends Qn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ge){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ul=class extends Yr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Md=new N,bd=new N,rh=new Zh,oh=new Zh,ah=new Zh,dl=class extends Qn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(bd.subVectors(s[0],s[1]).add(s[0]),c=bd);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Md.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Md),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),p),T=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);T<1e-4&&(T=1),m<1e-4&&(m=T),g<1e-4&&(g=T),rh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,T,g),oh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,T,g),ah.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,T,g)}else this.curveType==="catmullrom"&&(rh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),oh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ah.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(rh.calc(l),oh.calc(l),ah.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function jp(i,e){let t=1-i;return t*t*e}function em(i,e){return 2*(1-i)*i*e}function tm(i,e){return i*i*e}function wo(i,e,t,n){return jp(i,e)+em(i,t)+tm(i,n)}function nm(i,e){let t=1-i;return t*t*t*e}function im(i,e){let t=1-i;return 3*t*t*i*e}function sm(i,e){return 3*(1-i)*i*i*e}function rm(i,e){return i*i*i*e}function To(i,e,t,n,s){return nm(i,e)+im(i,t)+sm(i,n)+rm(i,s)}var ko=class extends Qn{constructor(e=new ge,t=new ge,n=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(To(e,s.x,r.x,o.x,a.x),To(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fl=class extends Qn{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(To(e,s.x,r.x,o.x,a.x),To(e,s.y,r.y,o.y,a.y),To(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Go=class extends Qn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pl=class extends Qn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vo=class extends Qn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(wo(e,s.x,r.x,o.x),wo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ho=class extends Qn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(wo(e,s.x,r.x,o.x),wo(e,s.y,r.y,o.y),wo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wo=class extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(wd(a,l.x,c.x,h.x,u.x),wd(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ge().fromArray(s))}return this}},ml=Object.freeze({__proto__:null,ArcCurve:ul,CatmullRomCurve3:dl,CubicBezierCurve:ko,CubicBezierCurve3:fl,EllipseCurve:Yr,LineCurve:Go,LineCurve3:pl,QuadraticBezierCurve:Vo,QuadraticBezierCurve3:Ho,SplineCurve:Wo}),gl=class extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ml[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ml[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Xo=class extends gl{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Go(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Vo(this.currentPoint.clone(),new ge(e,t),new ge(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new ko(this.currentPoint.clone(),new ge(e,t),new ge(n,s),new ge(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Wo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Yr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Xi=class extends Xo{constructor(e){super(e),this.uuid=qs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Xo().fromJSON(s))}return this}};function om(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Tf(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=um(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,u=l;for(let d=t;d<s;d+=t){let p=i[d],m=i[d+1];p<a&&(a=p),m<l&&(l=m),p>h&&(h=p),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return qo(r,o,t,a,l,c,0),o}function Tf(i,e,t,n,s){let r;if(s===Mm(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Td(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Td(o/n|0,i[o],i[o+1],r);return r&&Zr(r,r.next)&&(Zo(r),r=r.next),r}function ir(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Zr(t,t.next)||wn(t.prev,t,t.next)===0)){if(Zo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function qo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&gm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?lm(i,n,s,r):am(i)){e.push(l.i,i.i,c.i),Zo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=cm(ir(i),e),qo(i,e,t,n,s,r,2)):o===2&&hm(i,e,t,n,s,r):qo(ir(i),e,t,n,s,r,1);break}}}function am(i){let e=i.prev,t=i,n=i.next;if(wn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),p=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&bo(s,a,r,l,o,c,m.x,m.y)&&wn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function lm(i,e,t,n){let s=i.prev,r=i,o=i.next;if(wn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,p=Math.min(a,l,c),m=Math.min(h,u,d),T=Math.max(a,l,c),g=Math.max(h,u,d),_=ph(p,m,e,t,n),M=ph(T,g,e,t,n),E=i.prevZ,v=i.nextZ;for(;E&&E.z>=_&&v&&v.z<=M;){if(E.x>=p&&E.x<=T&&E.y>=m&&E.y<=g&&E!==s&&E!==o&&bo(a,h,l,u,c,d,E.x,E.y)&&wn(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=p&&v.x<=T&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&bo(a,h,l,u,c,d,v.x,v.y)&&wn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=_;){if(E.x>=p&&E.x<=T&&E.y>=m&&E.y<=g&&E!==s&&E!==o&&bo(a,h,l,u,c,d,E.x,E.y)&&wn(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=M;){if(v.x>=p&&v.x<=T&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&bo(a,h,l,u,c,d,v.x,v.y)&&wn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function cm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Zr(n,s)&&Ef(n,t,t.next,s)&&Yo(n,s)&&Yo(s,n)&&(e.push(n.i,t.i,s.i),Zo(t),Zo(t.next),t=i=s),t=t.next}while(t!==i);return ir(t)}function hm(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ym(o,a)){let l=Cf(o,a);o=ir(o,o.next),l=ir(l,l.next),qo(o,e,t,n,s,r,0),qo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function um(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Tf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(xm(c))}s.sort(dm);for(let r=0;r<s.length;r++)t=fm(s[r],t);return t}function dm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function fm(i,e){let t=pm(i,e);if(!t)return e;let n=Cf(t,i);return ir(n,n.next),ir(t,t.next)}function pm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Zr(i,t))return t;do{if(Zr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Af(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Yo(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&mm(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function mm(i,e){return wn(i.prev,i,e.prev)<0&&wn(e.next,i,i.next)<0}function gm(i,e,t,n){let s=i;do s.z===0&&(s.z=ph(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_m(s)}function _m(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function ph(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function xm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Af(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function bo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Af(i,e,t,n,s,r,o,a)}function ym(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!vm(i,e)&&(Yo(i,e)&&Yo(e,i)&&Sm(i,e)&&(wn(i.prev,i,e.prev)||wn(i,e.prev,e))||Zr(i,e)&&wn(i.prev,i,i.next)>0&&wn(e.prev,e,e.next)>0)}function wn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Zr(i,e){return i.x===e.x&&i.y===e.y}function Ef(i,e,t,n){let s=Xa(wn(i,e,t)),r=Xa(wn(i,e,n)),o=Xa(wn(t,n,i)),a=Xa(wn(t,n,e));return!!(s!==r&&o!==a||s===0&&Wa(i,t,e)||r===0&&Wa(i,n,e)||o===0&&Wa(t,i,n)||a===0&&Wa(t,e,n))}function Wa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Xa(i){return i>0?1:i<0?-1:0}function vm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ef(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Yo(i,e){return wn(i.prev,i,i.next)<0?wn(i,e,i.next)>=0&&wn(i,i.prev,e)>=0:wn(i,e,i.prev)<0||wn(i,i.next,e)<0}function Sm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Cf(i,e){let t=mh(i.i,i.x,i.y),n=mh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Td(i,e,t,n){let s=mh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var gh=class{static triangulate(e,t,n=2){return om(e,t,n)}},is=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ad(e),Ed(n,e);let o=e.length;t.forEach(Ad);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Ed(n,t[l]);let a=gh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ad(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ed(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Bs=class i extends gn{constructor(e=new Xi([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new rn(s,3)),this.setAttribute("uv",new rn(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,T=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:bm,E,v=!1,P,C,y,A;if(_){E=_.getSpacedPoints(h),v=!0,d=!1;let ue=_.isCatmullRomCurve3?_.closed:!1;P=_.computeFrenetFrames(h,ue),C=new N,y=new N,A=new N}d||(g=0,p=0,m=0,T=0);let G=a.extractPoints(c),F=G.shape,z=G.holes;if(!is.isClockWise(F)){F=F.reverse();for(let ue=0,we=z.length;ue<we;ue++){let Ce=z[ue];is.isClockWise(Ce)&&(z[ue]=Ce.reverse())}}function j(ue){let Ce=10000000000000001e-36,Je=ue[0];for(let De=1;De<=ue.length;De++){let je=De%ue.length,Ve=ue[je],gt=Ve.x-Je.x,wt=Ve.y-Je.y,Mt=gt*gt+wt*wt,O=Math.max(Math.abs(Ve.x),Math.abs(Ve.y),Math.abs(Je.x),Math.abs(Je.y)),Bt=Ce*O*O;if(Mt<=Bt){ue.splice(je,1),De--;continue}Je=Ve}}j(F),z.forEach(j);let D=z.length,J=F;for(let ue=0;ue<D;ue++){let we=z[ue];F=F.concat(we)}function ee(ue,we,Ce){return we||ut("ExtrudeGeometry: vec does not exist"),ue.clone().addScaledVector(we,Ce)}let X=F.length;function xe(ue,we,Ce){let Je,De,je,Ve=ue.x-we.x,gt=ue.y-we.y,wt=Ce.x-ue.x,Mt=Ce.y-ue.y,O=Ve*Ve+gt*gt,Bt=Ve*Mt-gt*wt;if(Math.abs(Bt)>Number.EPSILON){let _t=Math.sqrt(O),Gt=Math.sqrt(wt*wt+Mt*Mt),Ne=we.x-gt/_t,jt=we.y+Ve/_t,ot=Ce.x-Mt/Gt,lt=Ce.y+wt/Gt,R=((ot-Ne)*Mt-(lt-jt)*wt)/(Ve*Mt-gt*wt);Je=Ne+Ve*R-ue.x,De=jt+gt*R-ue.y;let S=Je*Je+De*De;if(S<=2)return new ge(Je,De);je=Math.sqrt(S/2)}else{let _t=!1;Ve>Number.EPSILON?wt>Number.EPSILON&&(_t=!0):Ve<-Number.EPSILON?wt<-Number.EPSILON&&(_t=!0):Math.sign(gt)===Math.sign(Mt)&&(_t=!0),_t?(Je=-gt,De=Ve,je=Math.sqrt(O)):(Je=Ve,De=gt,je=Math.sqrt(O/2))}return new ge(Je/je,De/je)}let ne=[];for(let ue=0,we=J.length,Ce=we-1,Je=ue+1;ue<we;ue++,Ce++,Je++)Ce===we&&(Ce=0),Je===we&&(Je=0),ne[ue]=xe(J[ue],J[Ce],J[Je]);let he=[],fe,Xe=ne.concat();for(let ue=0,we=D;ue<we;ue++){let Ce=z[ue];fe=[];for(let Je=0,De=Ce.length,je=De-1,Ve=Je+1;Je<De;Je++,je++,Ve++)je===De&&(je=0),Ve===De&&(Ve=0),fe[Je]=xe(Ce[Je],Ce[je],Ce[Ve]);he.push(fe),Xe=Xe.concat(fe)}let qe;if(g===0)qe=is.triangulateShape(J,z);else{let ue=[],we=[];for(let Ce=0;Ce<g;Ce++){let Je=Ce/g,De=p*Math.cos(Je*Math.PI/2),je=m*Math.sin(Je*Math.PI/2)+T;for(let Ve=0,gt=J.length;Ve<gt;Ve++){let wt=ee(J[Ve],ne[Ve],je);et(wt.x,wt.y,-De),Je===0&&ue.push(wt)}for(let Ve=0,gt=D;Ve<gt;Ve++){let wt=z[Ve];fe=he[Ve];let Mt=[];for(let O=0,Bt=wt.length;O<Bt;O++){let _t=ee(wt[O],fe[O],je);et(_t.x,_t.y,-De),Je===0&&Mt.push(_t)}Je===0&&we.push(Mt)}}qe=is.triangulateShape(ue,we)}let re=qe.length,Oe=m+T;for(let ue=0;ue<X;ue++){let we=d?ee(F[ue],Xe[ue],Oe):F[ue];v?(y.copy(P.normals[0]).multiplyScalar(we.x),C.copy(P.binormals[0]).multiplyScalar(we.y),A.copy(E[0]).add(y).add(C),et(A.x,A.y,A.z)):et(we.x,we.y,0)}for(let ue=1;ue<=h;ue++)for(let we=0;we<X;we++){let Ce=d?ee(F[we],Xe[we],Oe):F[we];v?(y.copy(P.normals[ue]).multiplyScalar(Ce.x),C.copy(P.binormals[ue]).multiplyScalar(Ce.y),A.copy(E[ue]).add(y).add(C),et(A.x,A.y,A.z)):et(Ce.x,Ce.y,u/h*ue)}for(let ue=g-1;ue>=0;ue--){let we=ue/g,Ce=p*Math.cos(we*Math.PI/2),Je=m*Math.sin(we*Math.PI/2)+T;for(let De=0,je=J.length;De<je;De++){let Ve=ee(J[De],ne[De],Je);et(Ve.x,Ve.y,u+Ce)}for(let De=0,je=z.length;De<je;De++){let Ve=z[De];fe=he[De];for(let gt=0,wt=Ve.length;gt<wt;gt++){let Mt=ee(Ve[gt],fe[gt],Je);v?et(Mt.x,Mt.y+E[h-1].y,E[h-1].x+Ce):et(Mt.x,Mt.y,u+Ce)}}}me(),Ge();function me(){let ue=s.length/3;if(d){let we=0,Ce=X*we;for(let Je=0;Je<re;Je++){let De=qe[Je];Qt(De[2]+Ce,De[1]+Ce,De[0]+Ce)}we=h+g*2,Ce=X*we;for(let Je=0;Je<re;Je++){let De=qe[Je];Qt(De[0]+Ce,De[1]+Ce,De[2]+Ce)}}else{for(let we=0;we<re;we++){let Ce=qe[we];Qt(Ce[2],Ce[1],Ce[0])}for(let we=0;we<re;we++){let Ce=qe[we];Qt(Ce[0]+X*h,Ce[1]+X*h,Ce[2]+X*h)}}n.addGroup(ue,s.length/3-ue,0)}function Ge(){let ue=s.length/3,we=0;Fe(J,we),we+=J.length;for(let Ce=0,Je=z.length;Ce<Je;Ce++){let De=z[Ce];Fe(De,we),we+=De.length}n.addGroup(ue,s.length/3-ue,1)}function Fe(ue,we){let Ce=ue.length;for(;--Ce>=0;){let Je=Ce,De=Ce-1;De<0&&(De=ue.length-1);for(let je=0,Ve=h+g*2;je<Ve;je++){let gt=X*je,wt=X*(je+1),Mt=we+Je+gt,O=we+De+gt,Bt=we+De+wt,_t=we+Je+wt;it(Mt,O,Bt,_t)}}}function et(ue,we,Ce){l.push(ue),l.push(we),l.push(Ce)}function Qt(ue,we,Ce){pt(ue),pt(we),pt(Ce);let Je=s.length/3,De=M.generateTopUV(n,s,Je-3,Je-2,Je-1);Le(De[0]),Le(De[1]),Le(De[2])}function it(ue,we,Ce,Je){pt(ue),pt(we),pt(Je),pt(we),pt(Ce),pt(Je);let De=s.length/3,je=M.generateSideWallUV(n,s,De-6,De-3,De-2,De-1);Le(je[0]),Le(je[1]),Le(je[3]),Le(je[1]),Le(je[2]),Le(je[3])}function pt(ue){s.push(l[ue*3+0]),s.push(l[ue*3+1]),s.push(l[ue*3+2])}function Le(ue){r.push(ue.x),r.push(ue.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return wm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ml[s.type]().fromJSON(s)),new i(n,e.options)}},bm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ge(r,o),new ge(a,l),new ge(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],p=e[s*3+1],m=e[s*3+2],T=e[r*3],g=e[r*3+1],_=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ge(o,1-l),new ge(c,1-u),new ge(d,1-m),new ge(T,1-_)]:[new ge(a,1-l),new ge(h,1-u),new ge(p,1-m),new ge(g,1-_)]}};function wm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var sr=class i extends gn{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ut(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new N,d=new ge,p=new N,m=new N,T=new N,g=0,_=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,_=e[M+1].y-e[M].y,p.x=_*1,p.y=-g,p.z=_*0,T.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:T.normalize(),l.push(T.x,T.y,T.z);break;default:g=e[M+1].x-e[M].x,_=e[M+1].y-e[M].y,p.x=_*1,p.y=-g,p.z=_*0,m.copy(p),p.x+=T.x,p.y+=T.y,p.z+=T.z,p.normalize(),l.push(p.x,p.y,p.z),T.copy(m)}for(let M=0;M<=t;M++){let E=n+M*h*s,v=Math.sin(E),P=Math.cos(E);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*v,u.y=e[C].y,u.z=e[C].x*P,o.push(u.x,u.y,u.z),d.x=M/t,d.y=C/(e.length-1),a.push(d.x,d.y);let y=l[3*C+0]*v,A=l[3*C+1],G=l[3*C+0]*P;c.push(y,A,G)}}for(let M=0;M<t;M++)for(let E=0;E<e.length-1;E++){let v=E+M*e.length,P=v,C=v+e.length,y=v+e.length+1,A=v+1;r.push(P,C,A),r.push(y,A,C)}this.setIndex(r),this.setAttribute("position",new rn(o,3)),this.setAttribute("uv",new rn(a,2)),this.setAttribute("normal",new rn(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Pt=class i extends gn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,p=[],m=[],T=[],g=[];for(let _=0;_<h;_++){let M=_*d-o;for(let E=0;E<c;E++){let v=E*u-r;m.push(v,-M,0),T.push(0,0,1),g.push(E/a),g.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<a;M++){let E=M+c*_,v=M+c*(_+1),P=M+1+c*(_+1),C=M+1+c*_;p.push(E,v,C),p.push(v,P,C)}this.setIndex(p),this.setAttribute("position",new rn(m,3)),this.setAttribute("normal",new rn(T,3)),this.setAttribute("uv",new rn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Jo=class i extends gn{constructor(e=new Xi([new ge(0,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new rn(s,3)),this.setAttribute("normal",new rn(r,3)),this.setAttribute("uv",new rn(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),p=d.shape,m=d.holes;is.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,_=m.length;g<_;g++){let M=m[g];is.isClockWise(M)===!0&&(m[g]=M.reverse())}let T=is.triangulateShape(p,m);for(let g=0,_=m.length;g<_;g++){let M=m[g];p=p.concat(M)}for(let g=0,_=p.length;g<_;g++){let M=p[g];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let g=0,_=T.length;g<_;g++){let M=T[g],E=M[0]+u,v=M[1]+u,P=M[2]+u;n.push(E,v,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Tm(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Tm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var qi=class i extends gn{constructor(e=new Ho(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,l=new N,c=new ge,h=new N,u=[],d=[],p=[],m=[];T(),this.setIndex(m),this.setAttribute("position",new rn(u,3)),this.setAttribute("normal",new rn(d,3)),this.setAttribute("uv",new rn(p,2));function T(){for(let E=0;E<t;E++)g(E);g(r===!1?t:0),M(),_()}function g(E){h=e.getPointAt(E/t,h);let v=o.normals[E],P=o.binormals[E];for(let C=0;C<=s;C++){let y=C/s*Math.PI*2,A=Math.sin(y),G=-Math.cos(y);l.x=G*v.x+A*P.x,l.y=G*v.y+A*P.y,l.z=G*v.z+A*P.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function _(){for(let E=1;E<=t;E++)for(let v=1;v<=s;v++){let P=(s+1)*(E-1)+(v-1),C=(s+1)*E+(v-1),y=(s+1)*E+v,A=(s+1)*(E-1)+v;m.push(P,C,A),m.push(C,y,A)}}function M(){for(let E=0;E<=t;E++)for(let v=0;v<=s;v++)c.x=E/t,c.y=v/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ml[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function dr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Cd(s))s.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Cd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function jn(i){let e={};for(let t=0;t<i.length;t++){let n=dr(i[t]);for(let s in n)e[s]=n[s]}return e}function Cd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Am(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:kt.workingColorSpace}var Rf={clone:dr,merge:jn},Em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wi=class extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Em,this.fragmentShader=Cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=Am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new ge().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new dn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new vt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new $t().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},_l=class extends wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ft=class extends rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gc,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},oi=class extends ft{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return er('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){er('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Jr=class extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xl=class extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Dr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function qa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var zs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yl=class extends zs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hh,endingEnd:hh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case uh:r=e,a=2*t-n;break;case dh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case uh:o=e,l=2*n-t;break;case dh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-t)/(s-t),T=m*m,g=T*m,_=-d*g+2*d*T-d*m,M=(1+d)*g+(-1.5-2*d)*T+(-.5+d)*m+1,E=(-1-p)*g+(1.5+p)*T+.5*m,v=p*g-p*T;for(let P=0;P!==a;++P)r[P]=_*o[h+P]+M*o[c+P]+E*o[l+P]+v*o[u+P];return r}},vl=class extends zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Sl=class extends zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ml=class extends zs{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),T=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*T+o[l+g]*m;return r}let d=a*2,p=e-1;for(let m=0;m!==a;++m){let T=o[c+m],g=o[l+m],_=p*d+m*2,M=u[_],E=u[_+1],v=e*d+m*2,P=h[v],C=h[v+1],y=Pm(n,t,M,P,s);r[m]=Pf(y,T,E,C,g)}return r}};function Pf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Rm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Pm(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Pf(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Rm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Ti=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dr(t,this.TimeBufferType),this.values=Dr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Dr(e.times,Array),values:Dr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),qa(e.settings)&&(n.settings={inTangents:Dr(e.settings.inTangents,Array),outTangents:Dr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ml(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ao:t=this.InterpolantFactoryMethodDiscrete;break;case sl:t=this.InterpolantFactoryMethodLinear;break;case Ja:t=this.InterpolantFactoryMethodSmooth;break;case ch:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return dt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ao;case this.InterpolantFactoryMethodLinear:return sl;case this.InterpolantFactoryMethodSmooth:return Ja;case this.InterpolantFactoryMethodBezier:return ch}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;qa(this.settings)&&(Rd(this.settings.inTangents,e),Rd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;qa(this.settings)&&(Pd(this.settings.inTangents,e),Pd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ut("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ut("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ut("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ut("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Dp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ut("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ja,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let m=0;m!==n;++m){let T=t[u+m];if(T!==t[d+m]||T!==t[p+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,qa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Pd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Ti.prototype.ValueTypeName="";Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=sl;var ks=class extends Ti{constructor(e,t,n){super(e,t,n)}};ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=Ao;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}};bl.prototype.ValueTypeName="color";var wl=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}};wl.prototype.ValueTypeName="number";var Tl=class extends zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ni.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ko=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Tl(this.times,this.values,this.getValueSize(),e)}};Ko.prototype.ValueTypeName="quaternion";Ko.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends Ti{constructor(e,t,n){super(e,t,n)}};Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Ao;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}};Al.prototype.ValueTypeName="vector";var El=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},If=new El,Cl=class{constructor(e){this.manager=e!==void 0?e:If,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var rr=class extends Ln{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Kr=class extends rr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},lh=new $t,Id=new N,Ld=new N,$r=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Id.setFromMatrixPosition(e.matrixWorld),t.position.copy(Id),Ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ld),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){lh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(lh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===zr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ya=new N,Za=new Ni,ts=new N,$o=class extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ya,Za,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Za,ts.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ya,Za,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Za,ts.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ds=new N,Dd=new ge,Nd=new ge,Un=class extends $o{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(Oc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z),Ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z)}getViewSize(e,t){return this.getViewBounds(e,Dd,Nd),t.subVectors(Nd,Dd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_h=class extends $r{constructor(){super(new Un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Io*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},or=class extends rr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new _h}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},xh=class extends $r{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0}},ar=class extends rr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Qo=class extends $o{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yh=class extends $r{constructor(){super(new Qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new yh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Nr=-90,Ur=1,Qr=class extends Ln{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Un(Nr,Ur,e,t);s.layers=this.layers,this.add(s);let r=new Un(Nr,Ur,e,t);r.layers=this.layers,this.add(r);let o=new Un(Nr,Ur,e,t);o.layers=this.layers,this.add(o);let a=new Un(Nr,Ur,e,t);a.layers=this.layers,this.add(a);let l=new Un(Nr,Ur,e,t);l.layers=this.layers,this.add(l);let c=new Un(Nr,Ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let T=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=T,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Rl=class extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Kh="\\[\\]\\.:\\/",Im=new RegExp("["+Kh+"]","g"),$h="[^"+Kh+"]",Lm="[^"+Kh.replace("\\.","")+"]",Dm=/((?:WC+[\/:])*)/.source.replace("WC",$h),Nm=/(WCOD+)?/.source.replace("WCOD",Lm),Um=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),Fm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),Om=new RegExp("^"+Dm+Nm+Um+Fm+"$"),Bm=["material","materials","bones","map"],vh=class{constructor(e,t,n){let s=n||mn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Im,"")}static parseTrackName(e){let t=Om.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;ut("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mn.Composite=vh;mn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mn.prototype.GetterByBindingType=[mn.prototype._getValue_direct,mn.prototype._getValue_array,mn.prototype._getValue_arrayElement,mn.prototype._getValue_toArray];mn.prototype.SetterByBindingTypeAndVersioning=[[mn.prototype._setValue_direct,mn.prototype._setValue_direct_setNeedsUpdate,mn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_array,mn.prototype._setValue_array_setNeedsUpdate,mn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_arrayElement,mn.prototype._setValue_arrayElement_setNeedsUpdate,mn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_fromArray,mn.prototype._setValue_fromArray_setNeedsUpdate,mn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var By=new Float32Array(1);var Ud=new $t,jr=class{constructor(e,t,n=0,s=1/0){this.ray=new Wr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ut("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ud.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ud),this}intersectObject(e,t=!0,n=[]){return Sh(e,this,n,t),n.sort(Fd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Sh(e[s],this,n,t);return n.sort(Fd),n}};function Fd(i,e){return i.distance-e.distance}function Sh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Sh(r[o],e,t,!0)}}var iu=class iu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};iu.prototype.isMatrix2=!0;var Mh=iu;function Qh(i,e,t,n){let s=zm(n);switch(t){case kh:return i*e;case Vh:return i*e/s.components*s.byteLength;case Ol:return i*e/s.components*s.byteLength;case Xs:return i*e*2/s.components*s.byteLength;case Bl:return i*e*2/s.components*s.byteLength;case Gh:return i*e*3/s.components*s.byteLength;case Ai:return i*e*4/s.components*s.byteLength;case zl:return i*e*4/s.components*s.byteLength;case ea:case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Hl:return Math.max(i,16)*Math.max(e,8)/4;case kl:case Vl:return Math.max(i,8)*Math.max(e,8)/2;case Wl:case Xl:case Yl:case Zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ql:case sa:case Jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case rc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case lc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case hc:case uc:case dc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fc:case pc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ra:case mc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zm(i){switch(i){case pi:case Fh:return{byteLength:1,components:1};case so:case Oh:case $i:return{byteLength:2,components:1};case Ul:case Fl:return{byteLength:2,components:4};case Ji:case Nl:case Ki:return{byteLength:4,components:1};case Bh:case zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function jf(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Gm(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){let m=u[d],T=u[p];T.start<=m.start+m.count+1?m.count=Math.max(m.count,T.start+T.count-m.start):(++d,u[d]=T)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){let T=u[p];i.bufferSubData(c,T.start*h.BYTES_PER_ELEMENT,h,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hm=`#ifdef USE_ALPHAHASH
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
#endif`,Wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ym=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
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
#endif`,Jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km=`#ifdef USE_BATCHING
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
#endif`,$m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t0=`#ifdef USE_IRIDESCENCE
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
#endif`,n0=`#ifdef USE_BUMPMAP
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
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,u0=`#define PI 3.141592653589793
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
} // validated`,d0=`vec3 transformedNormal = objectNormal;
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
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_0="gl_FragColor = linearToOutputTexel( gl_FragColor );",x0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C0=`#ifdef USE_GRADIENTMAP
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
}`,R0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,D0=`#ifdef USE_ENVMAP
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
#endif`,N0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B0=`PhysicalMaterial material;
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
#endif`,z0=`uniform sampler2D dfgLUT;
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
}`,k0=`
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
#endif`,G0=`#if defined( RE_IndirectDiffuse )
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,W0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$0=`#if defined( USE_POINTS_UV )
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
#endif`,Q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tg=`#if defined( USE_MORPHCOLORS )
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
#endif`,ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ig=`#ifdef USE_MORPHTARGETS
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
#endif`,sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,og=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hg=`#ifdef USE_NORMALMAP
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
#endif`,ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ag=`float getShadowMask() {
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
}`,Eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ug=`#ifdef USE_TRANSMISSION
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
#endif`,Fg=`#ifdef USE_TRANSMISSION
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vg=`uniform sampler2D t2D;
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`uniform float backgroundBlurriness;
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`#include <common>
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
}`,Zg=`#if DEPTH_PACKING == 3200
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
}`,Jg=`#define DISTANCE
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
}`,Kg=`#define DISTANCE
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`uniform float scale;
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
}`,e_=`uniform vec3 diffuse;
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
}`,t_=`#include <common>
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#define LAMBERT
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
}`,s_=`#define LAMBERT
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
}`,r_=`#define MATCAP
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
}`,o_=`#define MATCAP
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
}`,a_=`#define NORMAL
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
}`,l_=`#define NORMAL
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
}`,c_=`#define PHONG
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
}`,h_=`#define PHONG
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
}`,u_=`#define STANDARD
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
}`,d_=`#define STANDARD
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
}`,f_=`#define TOON
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
}`,p_=`#define TOON
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
}`,m_=`uniform float size;
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
}`,g_=`uniform vec3 diffuse;
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
}`,__=`#include <common>
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
}`,x_=`uniform vec3 color;
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
}`,y_=`uniform float rotation;
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
}`,v_=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:Vm,alphahash_pars_fragment:Hm,alphamap_fragment:Wm,alphamap_pars_fragment:Xm,alphatest_fragment:qm,alphatest_pars_fragment:Ym,aomap_fragment:Zm,aomap_pars_fragment:Jm,batching_pars_vertex:Km,batching_vertex:$m,begin_vertex:Qm,beginnormal_vertex:jm,bsdfs:e0,iridescence_fragment:t0,bumpmap_pars_fragment:n0,clipping_planes_fragment:i0,clipping_planes_pars_fragment:s0,clipping_planes_pars_vertex:r0,clipping_planes_vertex:o0,color_fragment:a0,color_pars_fragment:l0,color_pars_vertex:c0,color_vertex:h0,common:u0,defaultnormal_vertex:d0,displacementmap_pars_vertex:f0,displacementmap_vertex:p0,emissivemap_fragment:m0,emissivemap_pars_fragment:g0,colorspace_fragment:_0,colorspace_pars_fragment:x0,envmap_fragment:y0,envmap_common_pars_fragment:v0,envmap_pars_fragment:S0,envmap_pars_vertex:M0,envmap_physical_pars_fragment:D0,envmap_vertex:b0,fog_vertex:w0,fog_pars_vertex:T0,fog_fragment:A0,fog_pars_fragment:E0,gradientmap_pars_fragment:C0,lightmap_pars_fragment:R0,lights_lambert_fragment:P0,lights_lambert_pars_fragment:I0,lights_pars_begin:L0,lights_toon_fragment:N0,lights_toon_pars_fragment:U0,lights_phong_fragment:F0,lights_phong_pars_fragment:O0,lights_physical_fragment:B0,lights_physical_pars_fragment:z0,lights_fragment_begin:k0,lights_fragment_maps:G0,lights_fragment_end:V0,lightprobes_pars_fragment:H0,logdepthbuf_fragment:W0,logdepthbuf_pars_fragment:X0,logdepthbuf_pars_vertex:q0,logdepthbuf_vertex:Y0,map_fragment:Z0,map_pars_fragment:J0,map_particle_fragment:K0,map_particle_pars_fragment:$0,metalnessmap_fragment:Q0,metalnessmap_pars_fragment:j0,morphinstance_vertex:eg,morphcolor_vertex:tg,morphnormal_vertex:ng,morphtarget_pars_vertex:ig,morphtarget_vertex:sg,normal_fragment_begin:rg,normal_fragment_maps:og,normal_pars_fragment:ag,normal_pars_vertex:lg,normal_vertex:cg,normalmap_pars_fragment:hg,clearcoat_normal_fragment_begin:ug,clearcoat_normal_fragment_maps:dg,clearcoat_pars_fragment:fg,iridescence_pars_fragment:pg,opaque_fragment:mg,packing:gg,premultiplied_alpha_fragment:_g,project_vertex:xg,dithering_fragment:yg,dithering_pars_fragment:vg,roughnessmap_fragment:Sg,roughnessmap_pars_fragment:Mg,shadowmap_pars_fragment:bg,shadowmap_pars_vertex:wg,shadowmap_vertex:Tg,shadowmask_pars_fragment:Ag,skinbase_vertex:Eg,skinning_pars_vertex:Cg,skinning_vertex:Rg,skinnormal_vertex:Pg,specularmap_fragment:Ig,specularmap_pars_fragment:Lg,tonemapping_fragment:Dg,tonemapping_pars_fragment:Ng,transmission_fragment:Ug,transmission_pars_fragment:Fg,uv_pars_fragment:Og,uv_pars_vertex:Bg,uv_vertex:zg,worldpos_vertex:kg,background_vert:Gg,background_frag:Vg,backgroundCube_vert:Hg,backgroundCube_frag:Wg,cube_vert:Xg,cube_frag:qg,depth_vert:Yg,depth_frag:Zg,distance_vert:Jg,distance_frag:Kg,equirect_vert:$g,equirect_frag:Qg,linedashed_vert:jg,linedashed_frag:e_,meshbasic_vert:t_,meshbasic_frag:n_,meshlambert_vert:i_,meshlambert_frag:s_,meshmatcap_vert:r_,meshmatcap_frag:o_,meshnormal_vert:a_,meshnormal_frag:l_,meshphong_vert:c_,meshphong_frag:h_,meshphysical_vert:u_,meshphysical_frag:d_,meshtoon_vert:f_,meshtoon_frag:p_,points_vert:m_,points_frag:g_,shadow_vert:__,shadow_frag:x_,sprite_vert:y_,sprite_frag:v_},Ze={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},ls={basic:{uniforms:jn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:jn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:jn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:jn([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:jn([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:jn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:jn([Ze.points,Ze.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:jn([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:jn([Ze.common,Ze.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:jn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:jn([Ze.sprite,Ze.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distance:{uniforms:jn([Ze.common,Ze.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distance_vert,fragmentShader:Dt.distance_frag},shadow:{uniforms:jn([Ze.lights,Ze.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};ls.physical={uniforms:jn([ls.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};var xc={r:0,b:0,g:0},S_=new $t,ep=new vt;ep.set(-1,0,0,0,1,0,0,0,1);function M_(i,e,t,n,s,r){let o=new Ke(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function p(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let v=M.backgroundBlurriness>0;E=e.get(E,v)}return E}function m(M){let E=!1,v=p(M);v===null?g(o,a):v&&v.isColor&&(g(v,1),E=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(M,E){let v=p(E);v&&v.isCubeTexture?(c===void 0&&(c=new ct(new fi(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:dr(ls.backgroundCube.uniforms),vertexShader:ls.backgroundCube.vertexShader,fragmentShader:ls.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,C,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(S_.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ep),c.material.toneMapped=kt.getTransfer(v.colorSpace)!==nn,(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ct(new Pt(2,2),new wi({name:"BackgroundMaterial",uniforms:dr(ls.background.uniforms),vertexShader:ls.background.vertexShader,fragmentShader:ls.background.fragmentShader,side:Ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=kt.getTransfer(v.colorSpace)!==nn,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,E){M.getRGB(xc,Jh(i)),t.buffers.color.setClear(xc.r,xc.g,xc.b,E,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:m,addToRenderList:T,dispose:_}}function b_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(z,q,j,D,J){let ee=!1,X=u(z,D,j,q);r!==X&&(r=X,c(r.object)),ee=p(z,D,j,J),ee&&m(z,D,j,J),J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,v(z,q,j,D),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return i.createVertexArray()}function c(z){return i.bindVertexArray(z)}function h(z){return i.deleteVertexArray(z)}function u(z,q,j,D){let J=D.wireframe===!0,ee=n[q.id];ee===void 0&&(ee={},n[q.id]=ee);let X=z.isInstancedMesh===!0?z.id:0,xe=ee[X];xe===void 0&&(xe={},ee[X]=xe);let ne=xe[j.id];ne===void 0&&(ne={},xe[j.id]=ne);let he=ne[J];return he===void 0&&(he=d(l()),ne[J]=he),he}function d(z){let q=[],j=[],D=[];for(let J=0;J<t;J++)q[J]=0,j[J]=0,D[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:j,attributeDivisors:D,object:z,attributes:{},index:null}}function p(z,q,j,D){let J=r.attributes,ee=q.attributes,X=0,xe=j.getAttributes();for(let ne in xe)if(xe[ne].location>=0){let fe=J[ne],Xe=ee[ne];if(Xe===void 0&&(ne==="instanceMatrix"&&z.instanceMatrix&&(Xe=z.instanceMatrix),ne==="instanceColor"&&z.instanceColor&&(Xe=z.instanceColor)),fe===void 0||fe.attribute!==Xe||Xe&&fe.data!==Xe.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function m(z,q,j,D){let J={},ee=q.attributes,X=0,xe=j.getAttributes();for(let ne in xe)if(xe[ne].location>=0){let fe=ee[ne];fe===void 0&&(ne==="instanceMatrix"&&z.instanceMatrix&&(fe=z.instanceMatrix),ne==="instanceColor"&&z.instanceColor&&(fe=z.instanceColor));let Xe={};Xe.attribute=fe,fe&&fe.data&&(Xe.data=fe.data),J[ne]=Xe,X++}r.attributes=J,r.attributesNum=X,r.index=D}function T(){let z=r.newAttributes;for(let q=0,j=z.length;q<j;q++)z[q]=0}function g(z){_(z,0)}function _(z,q){let j=r.newAttributes,D=r.enabledAttributes,J=r.attributeDivisors;j[z]=1,D[z]===0&&(i.enableVertexAttribArray(z),D[z]=1),J[z]!==q&&(i.vertexAttribDivisor(z,q),J[z]=q)}function M(){let z=r.newAttributes,q=r.enabledAttributes;for(let j=0,D=q.length;j<D;j++)q[j]!==z[j]&&(i.disableVertexAttribArray(j),q[j]=0)}function E(z,q,j,D,J,ee,X){X===!0?i.vertexAttribIPointer(z,q,j,J,ee):i.vertexAttribPointer(z,q,j,D,J,ee)}function v(z,q,j,D){T();let J=D.attributes,ee=j.getAttributes(),X=q.defaultAttributeValues;for(let xe in ee){let ne=ee[xe];if(ne.location>=0){let he=J[xe];if(he===void 0&&(xe==="instanceMatrix"&&z.instanceMatrix&&(he=z.instanceMatrix),xe==="instanceColor"&&z.instanceColor&&(he=z.instanceColor)),he!==void 0){let fe=he.normalized,Xe=he.itemSize,qe=e.get(he);if(qe===void 0)continue;let re=qe.buffer,Oe=qe.type,me=qe.bytesPerElement,Ge=Oe===i.INT||Oe===i.UNSIGNED_INT||he.gpuType===Nl;if(he.isInterleavedBufferAttribute){let Fe=he.data,et=Fe.isInterleavedBuffer===!0?Fe.stride:Fe.itemSize,Qt=he.offset;if(Fe.isInstancedInterleavedBuffer||Fe.isInstancedBufferAttribute){for(let it=0;it<ne.locationSize;it++)_(ne.location+it,Fe.meshPerAttribute);z.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let it=0;it<ne.locationSize;it++)g(ne.location+it);i.bindBuffer(i.ARRAY_BUFFER,re);for(let it=0;it<ne.locationSize;it++)E(ne.location+it,Xe/ne.locationSize,Oe,fe,et*me,(Qt+Xe/ne.locationSize*it)*me,Ge)}else{if(he.isInstancedBufferAttribute){for(let Fe=0;Fe<ne.locationSize;Fe++)_(ne.location+Fe,he.meshPerAttribute);z.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Fe=0;Fe<ne.locationSize;Fe++)g(ne.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,re);for(let Fe=0;Fe<ne.locationSize;Fe++)E(ne.location+Fe,Xe/ne.locationSize,Oe,fe,Xe*me,Xe/ne.locationSize*Fe*me,Ge)}}else if(X!==void 0){let fe=X[xe];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(ne.location,fe);break;case 3:i.vertexAttrib3fv(ne.location,fe);break;case 4:i.vertexAttrib4fv(ne.location,fe);break;default:i.vertexAttrib1fv(ne.location,fe)}}}}M()}function P(){G();for(let z in n){let q=n[z];for(let j in q){let D=q[j];for(let J in D){let ee=D[J];for(let X in ee)h(ee[X].object),delete ee[X];delete D[J]}}delete n[z]}}function C(z){if(n[z.id]===void 0)return;let q=n[z.id];for(let j in q){let D=q[j];for(let J in D){let ee=D[J];for(let X in ee)h(ee[X].object),delete ee[X];delete D[J]}}delete n[z.id]}function y(z){for(let q in n){let j=n[q];for(let D in j){let J=j[D];if(J[z.id]===void 0)continue;let ee=J[z.id];for(let X in ee)h(ee[X].object),delete ee[X];delete J[z.id]}}}function A(z){for(let q in n){let j=n[q],D=z.isInstancedMesh===!0?z.id:0,J=j[D];if(J!==void 0){for(let ee in J){let X=J[ee];for(let xe in X)h(X[xe].object),delete X[xe];delete J[ee]}delete j[D],Object.keys(j).length===0&&delete n[q]}}}function G(){F(),o=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:G,resetDefaultState:F,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfObject:A,releaseStatesOfProgram:y,initAttributes:T,enableAttribute:g,disableUnusedAttributes:M}}function w_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function T_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(y){return!(y!==Ai&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let A=y===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==pi&&y!==Ki&&!A&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(dt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&dt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:T,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:v,maxSamples:P,samples:C}}function A_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new di,a=new vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let m=u.clippingPlanes,T=u.clipIntersection,g=u.clipShadows,_=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,E=M*4,v=_.clippingState||null;l.value=v,v=h(m,d,E,p);for(let P=0;P!==E;++P)v[P]=t[P];_.clippingState=v,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,m){let T=u!==null?u.length:0,g=null;if(T!==0){if(g=l.value,m!==!0||g===null){let _=p+T*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<_)&&(g=new Float32Array(_));for(let E=0,v=p;E!==T;++E,v+=4)o.copy(u[E]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,g}}var la=class extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Fo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fi(5,5,5),r=new wi({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ai,blending:lr});r.uniforms.tEquirect.value=t;let o=new ct(s,r),a=t.minFilter;return t.minFilter===Zi&&(t.minFilter=Wn),new Qr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Lf=256,E_=3,C_=20,tp=256,np=16,R_=3,P_=new N,I_=new Ke,fr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Qr(1,10,null),this._boxMesh=new ct(new fi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=P_}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,m=l.autoClearStencil,T=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,T===null&&(e.background=l.getClearColor(I_));let g=new Qr(n,s,h);return g.position.copy(a),g.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=m,e.background=T,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Lf,vf(e))}_fromTexture(e,t){e.mapping===hr||e.mapping===io?this._setSize(e.image.length===0?Lf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Df(e,!1,!1),n=Math.log2(e)-E_;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Df(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===hr||e.mapping===io?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Nf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=L_(),this._integrationMaterial=D_());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/np);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-R_)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(tp*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=N_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Df(i,e,t){return new la(i,{minFilter:Zi,generateMipmaps:e,type:$i,colorSpace:Eo,depthBuffer:t})}function ha(i,e,t){return new wi({name:i,uniforms:e,vertexShader:Dt.cube_vert,fragmentShader:t,side:ai,blending:lr,depthTest:!1,depthWrite:!1})}function L_(){return ha("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${tp}u

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
	`)}function D_(){return ha("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:np}},`

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
	`)}function N_(){return ha("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${C_}
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
	`)}function Nf(){return ha("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Uf(){return ha("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function U_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?o(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===Il||p===Ll)if(e.has(d)){let m=e.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let T=new la(m.height);return T.fromEquirectangularTexture(i,d),e.set(d,T),d.addEventListener("dispose",c),a(T.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,m=p===Il||p===Ll,T=p===hr||p===io;if(m||T){let g=t.get(d),_=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new fr(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let M=d.image;return m&&M&&M.height>0||T&&M&&l(M)?(n===null&&(n=new fr(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function a(d,p){return p===Il?d.mapping=hr:p===Ll&&(d.mapping=io),d}function l(d){let p=0,m=6;for(let T=0;T<m;T++)d[T]!==void 0&&p++;return p===m}function c(d){let p=d.target;p.removeEventListener("dispose",c);let m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(d){let p=d.target;p.removeEventListener("dispose",h);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function F_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&er("WebGLRenderer: "+n+" extension not supported."),s}}}function O_(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let T=r.get(m);T&&(e.remove(T),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,T){return s[T.id]!==void 0||(T.addEventListener("dispose",a),s[T.id]=new WeakRef(T),o.register(T,T.id,T),t.memory.geometries++),T}function h(m){let T=m.attributes;for(let g in T)e.update(T[g],i.ARRAY_BUFFER)}function u(m){let T=m.index,g=m.attributes.position,_=0;if(g===void 0)return;let M=T!==null?T.array.length:g.array.length/3-1,E=g.count>=65535?No:Do,v=new E(Math.ceil(M/3)*6,1),P=v.array;if(T!==null){let y=T.array;_=T.version;for(let A=0,G=0;A<M;A+=3){let F=y[A+0],z=y[A+1],q=y[A+2];P[G++]=F,P[G++]=z,P[G++]=z,P[G++]=q,P[G++]=q,P[G++]=F}}else{_=g.version;for(let y=0,A=0;y<M;y+=3){let G=y+0,F=y+1,z=y+2;P[A++]=G,P[A++]=F,P[A++]=F,P[A++]=z,P[A++]=z,P[A++]=G}}v.version=_;let C=r.get(m);C&&e.remove(C),r.set(m,v)}function d(m){let T=r.get(m);if(T){let g=m.index;g!==null&&T.version<g.version&&u(m)}else u(m);return r.get(m)}function p(){for(let m in s){let T=s[m].deref();T!==void 0&&l(T)}}return{get:c,update:h,getWireframeAttribute:d,dispose:p}}function B_(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function c(u,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,u*o,p),t.update(d,n,p))}function h(u,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,p);let T=0;for(let g=0;g<p;g++)T+=d[g];t.update(T,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function z_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:ut("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function k_(i,e,t){let n=new WeakMap,s=new dn;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let G=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",G)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,T=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],E=0;p===!0&&(E=1),m===!0&&(E=2),T===!0&&(E=3);let v=a.attributes.position.count*E,P=1;v>e.maxTextureSize&&(P=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let C=new Float32Array(v*P*4*u),y=new Lo(C,v,P,u);y.type=Ki,y.needsUpdate=!0;let A=E*4;for(let F=0;F<u;F++){let z=g[F],q=_[F],j=M[F],D=v*P*4*F;for(let J=0;J<z.count;J++){let ee=J*A;p===!0&&(s.fromBufferAttribute(z,J),C[D+ee+0]=s.x,C[D+ee+1]=s.y,C[D+ee+2]=s.z,C[D+ee+3]=0),m===!0&&(s.fromBufferAttribute(q,J),C[D+ee+4]=s.x,C[D+ee+5]=s.y,C[D+ee+6]=s.z,C[D+ee+7]=0),T===!0&&(s.fromBufferAttribute(j,J),C[D+ee+8]=s.x,C[D+ee+9]=s.y,C[D+ee+10]=s.z,C[D+ee+11]=j.itemSize===4?s.w:1)}}d={count:u,texture:y,size:new ge(v,P)},n.set(a,d),a.addEventListener("dispose",G)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let T=0;T<c.length;T++)p+=c[T];let m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function G_(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var V_={[Rh]:"LINEAR_TONE_MAPPING",[Ph]:"REINHARD_TONE_MAPPING",[Ih]:"CINEON_TONE_MAPPING",[no]:"ACES_FILMIC_TONE_MAPPING",[Dh]:"AGX_TONE_MAPPING",[Nh]:"NEUTRAL_TONE_MAPPING",[Lh]:"CUSTOM_TONE_MAPPING"};function H_(i,e,t,n,s,r){let o=new bi(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new gn;h.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new rn([0,2,0,0,2,0],2));let u=new _l({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ct(h,u),p=new Qo(-1,1,1,-1,0,1),m=null,T=null,g=!1,_,M=null,E=[],v=!1;this.setSize=function(P,C){o.setSize(P,C),a!==null&&a.setSize(P,C),l!==null&&l.setSize(P,C);for(let y=0;y<E.length;y++){let A=E[y];A.setSize&&A.setSize(P,C)}},this.setEffects=function(P){E=P,v=E.length>0&&E[0].isRenderPass===!0;let C=o.width,y=o.height;E.length>0&&a===null&&(a=new bi(C,y,{type:$i,depthBuffer:!1,stencilBuffer:!1}),l=new bi(C,y,{type:$i,depthBuffer:!1,stencilBuffer:!1}));let A=s===!0&&E.some(G=>G.needsDepthTexture===!0);A!==(o.depthTexture!==null)&&(A===!0&&c===null&&(c=new bs(C,y),r===!0&&(c.format=ws,c.type=ur)),o.dispose(),o.depthTexture=A?c:null,o.resolveDepthBuffer=A,o.storeMultisampledDepthBuffer=A);for(let G=0;G<E.length;G++){let F=E[G];F.setSize&&F.setSize(C,y),A&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(c)}},this.begin=function(P,C){if(g||P.toneMapping===os&&E.length===0)return!1;if(M=C,C!==null){let y=C.width,A=C.height;(o.width!==y||o.height!==A)&&this.setSize(y,A)}return v===!1&&P.setRenderTarget(o),_=P.toneMapping,P.toneMapping=os,!0},this.hasRenderPass=function(){return v},this.end=function(P,C){P.toneMapping=_,g=!0;let y=o,A=a;for(let G=0;G<E.length;G++){let F=E[G];F.enabled!==!1&&(F.render(P,A,y,C),F.needsSwap!==!1&&(y=A,A=A===a?l:a))}if(m!==P.outputColorSpace||T!==P.toneMapping){m=P.outputColorSpace,T=P.toneMapping,u.defines={},kt.getTransfer(m)===nn&&(u.defines.SRGB_TRANSFER="");let G=V_[T];G&&(u.defines[G]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,P.setRenderTarget(M),P.render(d,p),M=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var ip=new Xn,sp=new bs(1,1),rp=new Oo(1),op=new Lo,ap=new al,lp=new Fo,Ff=[],Of=[],Bf=new Float32Array(16),zf=new Float32Array(9),kf=new Float32Array(4);function oo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ff[s];if(r===void 0&&(r=new Float32Array(s),Ff[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Fn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function On(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vc(i,e){let t=Of[e];t===void 0&&(t=new Int32Array(e),Of[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function W_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function X_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;i.uniform2fv(this.addr,e),On(t,e)}}function q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Fn(t,e))return;i.uniform3fv(this.addr,e),On(t,e)}}function Y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;i.uniform4fv(this.addr,e),On(t,e)}}function Z_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Fn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),On(t,e)}else{if(Fn(t,n))return;kf.set(n),i.uniformMatrix2fv(this.addr,!1,kf),On(t,n)}}function J_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Fn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),On(t,e)}else{if(Fn(t,n))return;zf.set(n),i.uniformMatrix3fv(this.addr,!1,zf),On(t,n)}}function K_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Fn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),On(t,e)}else{if(Fn(t,n))return;Bf.set(n),i.uniformMatrix4fv(this.addr,!1,Bf),On(t,n)}}function $_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;i.uniform2iv(this.addr,e),On(t,e)}}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Fn(t,e))return;i.uniform3iv(this.addr,e),On(t,e)}}function ex(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;i.uniform4iv(this.addr,e),On(t,e)}}function tx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;i.uniform2uiv(this.addr,e),On(t,e)}}function ix(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Fn(t,e))return;i.uniform3uiv(this.addr,e),On(t,e)}}function sx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;i.uniform4uiv(this.addr,e),On(t,e)}}function Sc(i){return i.version===0&&(i.compareFunction=Xh,i.needsUpdate=!0),i}function rx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Sc(sp):r=ip,t.setTexture2D(e||r,s)}function ox(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ap,s)}function ax(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Sc(rp):r=lp,t.setTextureCube(e||r,s)}function lx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||op,s)}function cx(i){switch(i){case 5126:return W_;case 35664:return X_;case 35665:return q_;case 35666:return Y_;case 35674:return Z_;case 35675:return J_;case 35676:return K_;case 5124:case 35670:return $_;case 35667:case 35671:return Q_;case 35668:case 35672:return j_;case 35669:case 35673:return ex;case 5125:return tx;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return lx}}function hx(i,e){i.uniform1fv(this.addr,e)}function ux(i,e){let t=oo(e,this.size,2);i.uniform2fv(this.addr,t)}function dx(i,e){let t=oo(e,this.size,3);i.uniform3fv(this.addr,t)}function fx(i,e){let t=oo(e,this.size,4);i.uniform4fv(this.addr,t)}function px(i,e){let t=oo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mx(i,e){let t=oo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gx(i,e){let t=oo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _x(i,e){i.uniform1iv(this.addr,e)}function xx(i,e){i.uniform2iv(this.addr,e)}function yx(i,e){i.uniform3iv(this.addr,e)}function vx(i,e){i.uniform4iv(this.addr,e)}function Sx(i,e){i.uniform1uiv(this.addr,e)}function Mx(i,e){i.uniform2uiv(this.addr,e)}function bx(i,e){i.uniform3uiv(this.addr,e)}function wx(i,e){i.uniform4uiv(this.addr,e)}function Tx(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);Fn(n,r)||(i.uniform1iv(this.addr,r),On(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Sc(sp):o=ip;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Ax(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);Fn(n,r)||(i.uniform1iv(this.addr,r),On(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ap,r[o])}function Ex(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);Fn(n,r)||(i.uniform1iv(this.addr,r),On(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Sc(rp):o=lp;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Cx(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);Fn(n,r)||(i.uniform1iv(this.addr,r),On(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||op,r[o])}function Rx(i){switch(i){case 5126:return hx;case 35664:return ux;case 35665:return dx;case 35666:return fx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return _x;case 35667:case 35671:return xx;case 35668:case 35672:return yx;case 35669:case 35673:return vx;case 5125:return Sx;case 36294:return Mx;case 36295:return bx;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Cx}}var ou=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cx(t.type)}},au=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rx(t.type)}},lu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},su=/(\w+)(\])?(\[|\.)?/g;function Gf(i,e){i.seq.push(e),i.map[e.id]=e}function Px(i,e,t){let n=i.name,s=n.length;for(su.lastIndex=0;;){let r=su.exec(n),o=su.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Gf(t,c===void 0?new ou(a,i,e):new au(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new lu(a),Gf(t,u)),t=u}}}var ro=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Px(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Vf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ix=37297,Lx=0;function Dx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Hf=new vt;function Nx(i){kt._getMatrix(Hf,kt.workingColorSpace,i);let e=`mat3( ${Hf.elements.map(t=>t.toFixed(4))} )`;switch(kt.getTransfer(i)){case Co:return[e,"LinearTransferOETF"];case nn:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Dx(i.getShaderSource(e),a)}else return r}function Ux(i,e){let t=Nx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Fx={[Rh]:"Linear",[Ph]:"Reinhard",[Ih]:"Cineon",[no]:"ACESFilmic",[Dh]:"AgX",[Nh]:"Neutral",[Lh]:"Custom"};function Ox(i,e){let t=Fx[e];return t===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var yc=new N;function Bx(){kt.getLuminanceCoefficients(yc);let i=yc.x.toFixed(4),e=yc.y.toFixed(4),t=yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function kx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function aa(i){return i!==""}function Xf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function qf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function cu(i){return i.replace(Vx,Hx)}function Hx(i,e){let t=Dt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return cu(t)}var Wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yf(i){return i.replace(Wx,Xx)}function Xx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var qx={[Hs]:"SHADOWMAP_TYPE_PCF",[eo]:"SHADOWMAP_TYPE_VSM"};function Yx(i){return qx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zx={[io]:"ENVMAP_MODE_REFRACTION"};function Jx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Zx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Kx={[Ch]:"ENVMAP_BLENDING_MULTIPLY",[rf]:"ENVMAP_BLENDING_MIX",[of]:"ENVMAP_BLENDING_ADD"};function $x(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Kx[i.combine]||"ENVMAP_BLENDING_NONE"}function Qx(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Yx(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Jx(t),u=$x(t),d=zx(t),p=kx(r),m=s.createProgram(),T,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(T=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(aa).join(`
`),T.length>0&&(T+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(aa).join(`
`),g.length>0&&(g+=`
`)):(T=[Zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),g=[Zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==os?"#define TONE_MAPPING":"",t.toneMapping!==os?Dt.tonemapping_pars_fragment:"",t.toneMapping!==os?Ox("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,Ux("linearToOutputTexel",t.outputColorSpace),Bx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),o=cu(o),o=Xf(o,t),o=qf(o,t),a=cu(a),a=Xf(a,t),a=qf(a,t),o=Yf(o),a=Yf(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,T=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,g=["#define varying in",t.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=_+T+o,E=_+g+a,v=Vf(s,s.VERTEX_SHADER,M),P=Vf(s,s.FRAGMENT_SHADER,E);s.attachShader(m,v),s.attachShader(m,P),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function C(F){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(m)||"",q=s.getShaderInfoLog(v)||"",j=s.getShaderInfoLog(P)||"",D=z.trim(),J=q.trim(),ee=j.trim(),X=!0,xe=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,v,P);else{let ne=Wf(s,v,"vertex"),he=Wf(s,P,"fragment");ut("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+D+`
`+ne+`
`+he)}else D!==""?dt("WebGLProgram: Program Info Log:",D):(J===""||ee==="")&&(xe=!1);xe&&(F.diagnostics={runnable:X,programLog:D,vertexShader:{log:J,prefix:T},fragmentShader:{log:ee,prefix:g}})}s.deleteShader(v),s.deleteShader(P),y=new ro(s,m),A=Gx(s,m)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(m,Ix)),G},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=P,this}var jx=0,hu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new uu(e),t.set(e,n)),n}},uu=class{constructor(e){this.id=jx++,this.code=e,this.usedTimes=0}};function ey(i){return i===Xs||i===sa||i===ra}function ty(i,e,t,n,s,r){let o=new Vr,a=new hu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,A,G,F,z,q){let j=F.fog,D=z.geometry,J=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,ee=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,X=e.get(y.envMap||J,ee),xe=d[y.type],ne=n.precision;y.precision!==null&&(ne=n.getMaxPrecision(y.precision),ne!==y.precision&&dt("WebGLProgram.getParameters:",y.precision,"not supported, using",ne,"instead."));let he=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,fe=he!==void 0?he.length:0,Xe=0;D.morphAttributes.position!==void 0&&(Xe=1),D.morphAttributes.normal!==void 0&&(Xe=2),D.morphAttributes.color!==void 0&&(Xe=3);let qe,re,Oe,me;if(xe){let He=ls[xe];qe=He.vertexShader,re=He.fragmentShader}else{qe=y.vertexShader,re=y.fragmentShader;let He=a.getVertexShaderStage(y),Et=a.getFragmentShaderStage(y);a.update(y,He,Et),Oe=He.id,me=Et.id}let Ge=i.getRenderTarget(),Fe=i.state.buffers.depth.getReversed(),et=z.isInstancedMesh===!0,Qt=z.isBatchedMesh===!0,it=!!y.map,pt=!!y.matcap,Le=!!X,ue=Le&&X.isPMREMTexture===!0,we=!!y.aoMap,Ce=!!y.lightMap,Je=!!y.bumpMap&&y.wireframe===!1,De=!!y.normalMap,je=!!y.displacementMap,Ve=!!y.emissiveMap,gt=!!y.metalnessMap,wt=!!y.roughnessMap,Mt=y.anisotropy>0,O=y.clearcoat>0,Bt=y.diffuseRoughness>0,_t=y.dispersion>0,Gt=y.retroreflectivity>0,Ne=y.iridescence>0,jt=y.sheen>0,ot=y.transmission>0,lt=Mt&&!!y.anisotropyMap,R=O&&!!y.clearcoatMap,S=O&&!!y.clearcoatNormalMap,W=O&&!!y.clearcoatRoughnessMap,ye=Bt&&!!y.diffuseRoughnessMap,ce=Ne&&!!y.iridescenceMap,Ae=Ne&&!!y.iridescenceThicknessMap,Be=jt&&!!y.sheenColorMap,ae=jt&&!!y.sheenRoughnessMap,le=!!y.specularMap,Ue=!!y.specularColorMap,L=!!y.specularIntensityMap,de=ot&&!!y.transmissionMap,se=ot&&!!y.thicknessMap,Ie=!!y.gradientMap,Me=!!y.alphaMap,Se=y.alphaTest>0,nt=!!y.alphaHash,mt=!!y.extensions,Ee=os;y.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(Ee=i.toneMapping);let st=ue?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,rt={shaderID:xe,shaderType:y.type,shaderName:y.name,vertexShader:qe,fragmentShader:re,defines:y.defines,customVertexShaderID:Oe,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:ne,batching:Qt,batchingColor:Qt&&z._colorsTexture!==null,instancing:et,instancingColor:et&&z.instanceColor!==null,instancingMorph:et&&z.morphTexture!==null,outputColorSpace:Ge===null?i.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:kt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:it,matcap:pt,envMap:Le,envMapMode:Le&&X.mapping,envMapPMREM:ue,envMapMaxLod:ue?st.length-1:null,envMapSize:ue?st[0].width:null,aoMap:we,lightMap:Ce,bumpMap:Je,normalMap:De,displacementMap:je,emissiveMap:Ve,normalMapObjectSpace:De&&y.normalMapType===cf,normalMapTangentSpace:De&&y.normalMapType===gc,packedNormalMap:De&&y.normalMapType===gc&&ey(y.normalMap.format),metalnessMap:gt,roughnessMap:wt,anisotropy:Mt,anisotropyMap:lt,clearcoat:O,clearcoatMap:R,clearcoatNormalMap:S,clearcoatRoughnessMap:W,diffuseRoughness:Bt,diffuseRoughnessMap:ye,dispersion:_t,retroreflection:Gt,iridescence:Ne,iridescenceMap:ce,iridescenceThicknessMap:Ae,sheen:jt,sheenColorMap:Be,sheenRoughnessMap:ae,specularMap:le,specularColorMap:Ue,specularIntensityMap:L,transmission:ot,transmissionMap:de,thicknessMap:se,gradientMap:Ie,opaque:y.transparent===!1&&y.blending===to&&y.alphaToCoverage===!1,alphaMap:Me,alphaTest:Se,alphaHash:nt,combine:y.combine,mapUv:it&&p(y.map.channel),aoMapUv:we&&p(y.aoMap.channel),lightMapUv:Ce&&p(y.lightMap.channel),bumpMapUv:Je&&p(y.bumpMap.channel),normalMapUv:De&&p(y.normalMap.channel),displacementMapUv:je&&p(y.displacementMap.channel),emissiveMapUv:Ve&&p(y.emissiveMap.channel),metalnessMapUv:gt&&p(y.metalnessMap.channel),roughnessMapUv:wt&&p(y.roughnessMap.channel),anisotropyMapUv:lt&&p(y.anisotropyMap.channel),clearcoatMapUv:R&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:S&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&p(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&p(y.diffuseRoughnessMap.channel),iridescenceMapUv:ce&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:ae&&p(y.sheenRoughnessMap.channel),specularMapUv:le&&p(y.specularMap.channel),specularColorMapUv:Ue&&p(y.specularColorMap.channel),specularIntensityMapUv:L&&p(y.specularIntensityMap.channel),transmissionMapUv:de&&p(y.transmissionMap.channel),thicknessMapUv:se&&p(y.thicknessMap.channel),alphaMapUv:Me&&p(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(De||Mt),vertexNormals:!!D.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!D.attributes.uv&&(it||Me),fog:!!j,useFog:y.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||D.attributes.normal===void 0&&De===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Fe,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Xe,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:q.filter(He=>He.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:it&&y.map.isVideoTexture===!0&&kt.getTransfer(y.map.colorSpace)===nn,decodeVideoTextureEmissive:Ve&&y.emissiveMap.isVideoTexture===!0&&kt.getTransfer(y.emissiveMap.colorSpace)===nn,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ln,flipSided:y.side===ai,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:mt&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&y.extensions.multiDraw===!0||Qt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function T(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let G in y.defines)A.push(G),A.push(y.defines[G]);return y.isRawShaderMaterial===!1&&(g(A,y),_(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function g(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapPMREM),y.push(A.envMapMaxLod),y.push(A.envMapSize),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.diffuseRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.numLightProbeGrids),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function _(y,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.diffuseRoughness&&o.enable(25),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function M(y){let A=d[y.type],G;if(A){let F=ls[A];G=Rf.clone(F.uniforms)}else G=y.uniforms;return G}function E(y,A){let G=h.get(A);return G!==void 0?++G.usedTimes:(G=new Qx(i,A,y,s),c.push(G),h.set(A,G)),G}function v(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function P(y){a.remove(y)}function C(){a.dispose()}return{getParameters:m,getProgramCacheKey:T,getUniforms:M,acquireProgram:E,releaseProgram:v,releaseShaderCache:P,programs:c,dispose:C}}function ny(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function iy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Jf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,m,T,g,_){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:p,material:m,materialVariant:o(d),groupOrder:T,renderOrder:d.renderOrder,z:g,group:_},i[e]=M):(M.id=d.id,M.object=d,M.geometry=p,M.material=m,M.materialVariant=o(d),M.groupOrder=T,M.renderOrder=d.renderOrder,M.z=g,M.group=_),e++,M}function l(d,p,m,T,g,_,M){M.reversedDepth===!0&&(g=-g);let E=a(d,p,m,T,g,_);m.transmission>0?n.push(E):m.transparent===!0?s.push(E):t.push(E)}function c(d,p,m,T,g,_){let M=a(d,p,m,T,g,_);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,p){t.length>1&&t.sort(d||iy),n.length>1&&n.sort(p||Jf),s.length>1&&s.sort(p||Jf)}function u(){for(let d=e,p=i.length;d<p;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function sy(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Kf,i.set(n,[o])):s>=r.length?(o=new Kf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ry(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Ke};break;case"SpotLight":t={position:new N,direction:new N,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function oy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ay=0;function ly(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cy(i){let e=new ry,t=oy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new $t,o=new $t;function a(c){let h=0,u=0,d=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let p=0,m=0,T=0,g=0,_=0,M=0,E=0,v=0,P=0,C=0,y=0,A=0,G=0,F=0;c.sort(ly);for(let q=0,j=c.length;q<j;q++){let D=c[q],J=D.color,ee=D.intensity,X=D.distance,xe=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Xs?xe=D.shadow.map.texture:xe=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=J.r*ee,u+=J.g*ee,d+=J.b*ee;else if(D.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(D.sh.coefficients[ne],ee);F++}else if(D.isSunLight){let ne=e.get(D);if(ne.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let he=D.shadow,fe=t.get(D);fe.shadowIntensity=he.intensity,fe.shadowBias=he.bias,fe.shadowNormalBias=he.normalBias,fe.shadowRadius=he.radius,fe.shadowMapSize.copy(he.mapSize).multiply(he.getFrameExtents()),n.sunShadow[m]=fe,n.sunShadowMap[m]=xe;let Xe=he.getViewportCount();for(let qe=0;qe<Xe;qe++)n.sunShadowMatrix[T+qe]=he.getMatrix(qe),n.sunShadowCascade[T+qe]=he._cascadeData[qe];T+=Xe,m++}n.sun[p]=ne,p++}else if(D.isDirectionalLight){let ne=e.get(D);if(ne.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let he=D.shadow,fe=t.get(D);fe.shadowIntensity=he.intensity,fe.shadowBias=he.bias,fe.shadowNormalBias=he.normalBias,fe.shadowRadius=he.radius,fe.shadowMapSize=he.mapSize,n.directionalShadow[g]=fe,n.directionalShadowMap[g]=xe,n.directionalShadowMatrix[g]=D.shadow.matrix,P++}n.directional[g]=ne,g++}else if(D.isSpotLight){let ne=e.get(D);ne.position.setFromMatrixPosition(D.matrixWorld),ne.color.copy(J).multiplyScalar(ee),ne.distance=X,ne.coneCos=Math.cos(D.angle),ne.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ne.decay=D.decay,n.spot[M]=ne;let he=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,he.updateMatrices(D),D.castShadow&&G++),n.spotLightMatrix[M]=he.matrix,D.castShadow){let fe=t.get(D);fe.shadowIntensity=he.intensity,fe.shadowBias=he.bias,fe.shadowNormalBias=he.normalBias,fe.shadowRadius=he.radius,fe.shadowMapSize=he.mapSize,n.spotShadow[M]=fe,n.spotShadowMap[M]=xe,y++}M++}else if(D.isRectAreaLight){let ne=e.get(D);ne.color.copy(J).multiplyScalar(ee),ne.halfWidth.set(D.width*.5,0,0),ne.halfHeight.set(0,D.height*.5,0),n.rectArea[E]=ne,E++}else if(D.isPointLight){let ne=e.get(D);if(ne.color.copy(D.color).multiplyScalar(D.intensity),ne.distance=D.distance,ne.decay=D.decay,D.castShadow){let he=D.shadow,fe=t.get(D);fe.shadowIntensity=he.intensity,fe.shadowBias=he.bias,fe.shadowNormalBias=he.normalBias,fe.shadowRadius=he.radius,fe.shadowMapSize=he.mapSize,fe.shadowCameraNear=he.camera.near,fe.shadowCameraFar=he.camera.far,n.pointShadow[_]=fe,n.pointShadowMap[_]=xe,n.pointShadowMatrix[_]=D.shadow.matrix,C++}n.point[_]=ne,_++}else if(D.isHemisphereLight){let ne=e.get(D);ne.skyColor.copy(D.color).multiplyScalar(ee),ne.groundColor.copy(D.groundColor).multiplyScalar(ee),n.hemi[v]=ne,v++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ze.LTC_FLOAT_1,n.rectAreaLTC2=Ze.LTC_FLOAT_2):(n.rectAreaLTC1=Ze.LTC_HALF_1,n.rectAreaLTC2=Ze.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let z=n.hash;(z.sunLength!==p||z.directionalLength!==g||z.pointLength!==_||z.spotLength!==M||z.rectAreaLength!==E||z.hemiLength!==v||z.numSunShadows!==m||z.numDirectionalShadows!==P||z.numPointShadows!==C||z.numSpotShadows!==y||z.numSpotMaps!==A||z.numLightProbes!==F)&&(n.sun.length=p,n.directional.length=g,n.spot.length=M,n.rectArea.length=E,n.point.length=_,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=T,n.sunShadowCascade.length=T,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.directionalShadowMatrix.length=P,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+A-G,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=G,n.numLightProbes=F,z.sunLength=p,z.directionalLength=g,z.pointLength=_,z.spotLength=M,z.rectAreaLength=E,z.hemiLength=v,z.numSunShadows=m,z.numDirectionalShadows=P,z.numPointShadows=C,z.numSpotShadows=y,z.numSpotMaps=A,z.numLightProbes=F,n.version=ay++)}function l(c,h){let u=0,d=0,p=0,m=0,T=0,g=0,_=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let v=c[M];if(v.isSunLight){let P=n.sun[u];P.direction.setFromMatrixPosition(v.matrixWorld),P.direction.transformDirection(_),u++}else if(v.isDirectionalLight){let P=n.directional[d];P.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(_),d++}else if(v.isSpotLight){let P=n.spot[m];P.position.setFromMatrixPosition(v.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(_),m++}else if(v.isRectAreaLight){let P=n.rectArea[T];P.position.setFromMatrixPosition(v.matrixWorld),P.position.applyMatrix4(_),o.identity(),r.copy(v.matrixWorld),r.premultiply(_),o.extractRotation(r),P.halfWidth.set(v.width*.5,0,0),P.halfHeight.set(0,v.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),T++}else if(v.isPointLight){let P=n.point[p];P.position.setFromMatrixPosition(v.matrixWorld),P.position.applyMatrix4(_),p++}else if(v.isHemisphereLight){let P=n.hemi[g];P.direction.setFromMatrixPosition(v.matrixWorld),P.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:n}}function $f(i){let e=new cy(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function hy(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new $f(i),e.set(s,[a])):r>=o.length?(a=new $f(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dy=`uniform sampler2D shadow_pass;
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
}`,fy=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],py=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Qf=new $t,oa=new N,ru=new N;function my(i,e,t){let n=new Os,s=new ge,r=new ge,o=new dn,a=new Jr,l=new xl,c={},h=t.maxTextureSize,u={[Ws]:ai,[ai]:Ws,[ln]:ln},d=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:uy,fragmentShader:dy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new gn;m.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new ct(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hs;let _=this.type;this.render=function(C,y,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;this.type===zd&&(dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hs);let G=i.getRenderTarget(),F=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),q=i.state;q.setBlending(lr),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let j=_!==this.type;j&&y.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(J=>J.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,J=C.length;D<J;D++){let ee=C[D],X=ee.shadow;if(X===void 0){dt("WebGLShadowMap:",ee,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let xe=X.getFrameExtents();s.multiply(xe),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/xe.x),s.x=r.x*xe.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/xe.y),s.y=r.y*xe.y,X.mapSize.y=r.y));let ne=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=ne,X.map===null||j===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===eo){if(ee.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new bi(s.x,s.y,{format:Xs,type:$i,minFilter:Wn,magFilter:Wn,generateMipmaps:!1}),X.map.texture.name=ee.name+".shadowMap",X.map.depthTexture=new bs(s.x,s.y,Ki),X.map.depthTexture.name=ee.name+".shadowMapDepth",X.map.depthTexture.format=Ms,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Gn,X.map.depthTexture.magFilter=Gn}else ee.isPointLight?(X.map=new la(s.x),X.map.depthTexture=new Oo(s.x,Ji)):(X.map=new bi(s.x,s.y),X.map.depthTexture=new bs(s.x,s.y,Ji)),X.map.depthTexture.name=ee.name+".shadowMap",X.map.depthTexture.format=Ms,this.type===Hs?(X.map.depthTexture.compareFunction=ne?Wh:Hh,X.map.depthTexture.minFilter=Wn,X.map.depthTexture.magFilter=Wn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Gn,X.map.depthTexture.magFilter=Gn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let he=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();ee.isPointLight!==!0&&X.updateMatrices(ee,A);let fe=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:A.layers;for(let Xe=0;Xe<he;Xe++){let qe=X.getCamera(Xe);if(ee.isPointLight){let re=X.camera,Oe=X.matrix,me=ee.distance||re.far;me!==re.far&&(re.far=me,re.updateProjectionMatrix()),oa.setFromMatrixPosition(ee.matrixWorld),re.position.copy(oa),ru.copy(re.position),ru.add(fy[Xe]),re.up.copy(py[Xe]),re.lookAt(ru),re.updateMatrixWorld(),Oe.makeTranslation(-oa.x,-oa.y,-oa.z),Qf.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Qf,re.coordinateSystem,re.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,Xe),i.clear();else{Xe===0&&(i.setRenderTarget(X.map),i.clear());let re=X.getViewport(Xe);o.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),q.viewport(o)}n=X.getFrustum(Xe),v(y,A,qe,ee,fe,this.type)}X.isPointLightShadow!==!0&&this.type===eo&&M(X,A),X.needsUpdate=!1}_=this.type,g.needsUpdate=!1,i.setRenderTarget(G,F,z)};function M(C,y){let A=e.update(T);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null?C.mapPass=new bi(s.x,s.y,{format:Xs,type:$i}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(y,null,A,d,T,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value.set(C.map.width,C.map.height),p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(y,null,A,p,T,null)}function E(C,y,A,G){let F=null,z=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(z!==void 0)F=z;else if(F=A.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let q=F.uuid,j=y.uuid,D=c[q];D===void 0&&(D={},c[q]=D);let J=D[j];J===void 0&&(J=F.clone(),D[j]=J,y.addEventListener("dispose",P)),F=J}if(F.visible=y.visible,F.wireframe=y.wireframe,G===eo?F.side=y.shadowSide!==null?y.shadowSide:y.side:F.side=y.shadowSide!==null?y.shadowSide:u[y.side],F.alphaMap=y.alphaMap,F.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,F.map=y.map,F.clipShadows=y.clipShadows,F.clippingPlanes=y.clippingPlanes,F.clipIntersection=y.clipIntersection,F.displacementMap=y.displacementMap,F.displacementScale=y.displacementScale,F.displacementBias=y.displacementBias,F.wireframeLinewidth=y.wireframeLinewidth,F.linewidth=y.linewidth,A.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let q=i.properties.get(F);q.light=A}return F}function v(C,y,A,G,F,z){if(C.visible===!1)return;if(C.layers.test(F)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&z===eo)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);let D=e.update(C),J=C.material;if(Array.isArray(J)){let ee=D.groups;for(let X=0,xe=ee.length;X<xe;X++){let ne=ee[X],he=J[ne.materialIndex];if(he&&he.visible){let fe=E(C,he,G,z);C.onBeforeShadow(i,C,y,A,D,fe,ne),i.renderBufferDirect(A,null,D,fe,C,ne),C.onAfterShadow(i,C,y,A,D,fe,ne)}}}else if(J.visible){let ee=E(C,J,G,z);C.onBeforeShadow(i,C,y,A,D,ee,null),i.renderBufferDirect(A,null,D,ee,C,null),C.onAfterShadow(i,C,y,A,D,ee,null)}}let j=C.children;for(let D=0,J=j.length;D<J;D++)v(j[D],y,A,G,F,z)}function P(C){C.target.removeEventListener("dispose",P);for(let A in c){let G=c[A],F=C.target.uuid;F in G&&(G[F].dispose(),delete G[F])}}}function gy(i,e){function t(){let L=!1,de=new dn,se=null,Ie=new dn(0,0,0,0);return{setMask:function(Me){se!==Me&&!L&&(i.colorMask(Me,Me,Me,Me),se=Me)},setLocked:function(Me){L=Me},setClear:function(Me,Se,nt,mt,Ee){Ee===!0&&(Me*=mt,Se*=mt,nt*=mt),de.set(Me,Se,nt,mt),Ie.equals(de)===!1&&(i.clearColor(Me,Se,nt,mt),Ie.copy(de))},reset:function(){L=!1,se=null,Ie.set(-1,0,0,0)}}}function n(){let L=!1,de=!1,se=null,Ie=null,Me=null;return{setReversed:function(Se){if(de!==Se){let nt=e.get("EXT_clip_control");Se?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),de=Se;let mt=Me;Me=null,this.setClear(mt)}},getReversed:function(){return de},setTest:function(Se){Se?Fe(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(Se){se!==Se&&!L&&(i.depthMask(Se),se=Se)},setFunc:function(Se){if(de&&(Se=yf[Se]),Ie!==Se){switch(Se){case $a:i.depthFunc(i.NEVER);break;case Qa:i.depthFunc(i.ALWAYS);break;case ja:i.depthFunc(i.LESS);break;case Or:i.depthFunc(i.LEQUAL);break;case el:i.depthFunc(i.EQUAL);break;case tl:i.depthFunc(i.GEQUAL);break;case nl:i.depthFunc(i.GREATER);break;case il:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=Se}},setLocked:function(Se){L=Se},setClear:function(Se){Me!==Se&&(Me=Se,de&&(Se=1-Se),i.clearDepth(Se))},reset:function(){L=!1,se=null,Ie=null,Me=null,de=!1}}}function s(){let L=!1,de=null,se=null,Ie=null,Me=null,Se=null,nt=null,mt=null,Ee=null;return{setTest:function(st){L||(st?Fe(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(st){de!==st&&!L&&(i.stencilMask(st),de=st)},setFunc:function(st,rt,He){(se!==st||Ie!==rt||Me!==He)&&(i.stencilFunc(st,rt,He),se=st,Ie=rt,Me=He)},setOp:function(st,rt,He){(Se!==st||nt!==rt||mt!==He)&&(i.stencilOp(st,rt,He),Se=st,nt=rt,mt=He)},setLocked:function(st){L=st},setClear:function(st){Ee!==st&&(i.clearStencil(st),Ee=st)},reset:function(){L=!1,de=null,se=null,Ie=null,Me=null,Se=null,nt=null,mt=null,Ee=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},u={},d={},p=new WeakMap,m=[],T=null,g=!1,_=null,M=null,E=null,v=null,P=null,C=null,y=null,A=new Ke(0,0,0),G=0,F=!1,z=null,q=null,j=null,D=null,J=null,ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,xe=0,ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(xe=parseFloat(/^WebGL (\d)/.exec(ne)[1]),X=xe>=1):ne.indexOf("OpenGL ES")!==-1&&(xe=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),X=xe>=2);let he=null,fe={},Xe=i.getParameter(i.SCISSOR_BOX),qe=i.getParameter(i.VIEWPORT),re=new dn().fromArray(Xe),Oe=new dn().fromArray(qe);function me(L,de,se,Ie){let Me=new Uint8Array(4),Se=i.createTexture();i.bindTexture(L,Se),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<se;nt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(de+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return Se}let Ge={};Ge[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),Ge[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ge[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ge[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Fe(i.DEPTH_TEST),o.setFunc(Or),Je(!1),De(bh),Fe(i.CULL_FACE),we(lr);function Fe(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function et(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Qt(L,de){return d[L]!==de?(i.bindFramebuffer(L,de),d[L]=de,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=de),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=de),!0):!1}function it(L,de){let se=m,Ie=!1;if(L){se=p.get(de),se===void 0&&(se=[],p.set(de,se));let Me=L.textures;if(se.length!==Me.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,nt=Me.length;Se<nt;Se++)se[Se]=i.COLOR_ATTACHMENT0+Se;se.length=Me.length,Ie=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(se)}function pt(L){return T!==L?(i.useProgram(L),T=L,!0):!1}let Le={[cr]:i.FUNC_ADD,[Gd]:i.FUNC_SUBTRACT,[Vd]:i.FUNC_REVERSE_SUBTRACT};Le[Hd]=i.MIN,Le[Wd]=i.MAX;let ue={[Xd]:i.ZERO,[qd]:i.ONE,[Yd]:i.SRC_COLOR,[Ah]:i.SRC_ALPHA,[jd]:i.SRC_ALPHA_SATURATE,[$d]:i.DST_COLOR,[Jd]:i.DST_ALPHA,[Zd]:i.ONE_MINUS_SRC_COLOR,[Eh]:i.ONE_MINUS_SRC_ALPHA,[Qd]:i.ONE_MINUS_DST_COLOR,[Kd]:i.ONE_MINUS_DST_ALPHA,[ef]:i.CONSTANT_COLOR,[tf]:i.ONE_MINUS_CONSTANT_COLOR,[nf]:i.CONSTANT_ALPHA,[sf]:i.ONE_MINUS_CONSTANT_ALPHA};function we(L,de,se,Ie,Me,Se,nt,mt,Ee,st){if(L===lr){g===!0&&(et(i.BLEND),g=!1);return}if(g===!1&&(Fe(i.BLEND),g=!0),L!==kd){if(L!==_||st!==F){if((M!==cr||P!==cr)&&(i.blendEquation(i.FUNC_ADD),M=cr,P=cr),st)switch(L){case to:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yi:i.blendFunc(i.ONE,i.ONE);break;case wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Th:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ut("WebGLState: Invalid blending: ",L);break}else switch(L){case to:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wh:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Th:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",L);break}E=null,v=null,C=null,y=null,A.set(0,0,0),G=0,_=L,F=st}return}Me=Me||de,Se=Se||se,nt=nt||Ie,(de!==M||Me!==P)&&(i.blendEquationSeparate(Le[de],Le[Me]),M=de,P=Me),(se!==E||Ie!==v||Se!==C||nt!==y)&&(i.blendFuncSeparate(ue[se],ue[Ie],ue[Se],ue[nt]),E=se,v=Ie,C=Se,y=nt),(mt.equals(A)===!1||Ee!==G)&&(i.blendColor(mt.r,mt.g,mt.b,Ee),A.copy(mt),G=Ee),_=L,F=!1}function Ce(L,de){L.side===ln?et(i.CULL_FACE):Fe(i.CULL_FACE);let se=L.side===ai;de&&(se=!se),Je(se),L.blending===to&&L.transparent===!1?we(lr):we(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let Ie=L.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ve(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Fe(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(L){z!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),z=L)}function De(L){L!==Od?(Fe(i.CULL_FACE),L!==q&&(L===bh?i.cullFace(i.BACK):L===Bd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),q=L}function je(L){L!==j&&(X&&i.lineWidth(L),j=L)}function Ve(L,de,se){L?(Fe(i.POLYGON_OFFSET_FILL),(D!==de||J!==se)&&(D=de,J=se,o.getReversed()&&(de=-de,se=-se),i.polygonOffset(de,se))):et(i.POLYGON_OFFSET_FILL)}function gt(L){L?Fe(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function wt(L){L===void 0&&(L=i.TEXTURE0+ee-1),he!==L&&(i.activeTexture(L),he=L)}function Mt(L,de,se){se===void 0&&(he===null?se=i.TEXTURE0+ee-1:se=he);let Ie=fe[se];Ie===void 0&&(Ie={type:void 0,texture:void 0},fe[se]=Ie),(Ie.type!==L||Ie.texture!==de)&&(he!==se&&(i.activeTexture(se),he=se),i.bindTexture(L,de||Ge[L]),Ie.type=L,Ie.texture=de)}function O(){let L=fe[he];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Bt(){try{i.compressedTexImage2D(...arguments)}catch(L){ut("WebGLState:",L)}}function _t(){try{i.compressedTexImage3D(...arguments)}catch(L){ut("WebGLState:",L)}}function Gt(){try{i.texSubImage2D(...arguments)}catch(L){ut("WebGLState:",L)}}function Ne(){try{i.texSubImage3D(...arguments)}catch(L){ut("WebGLState:",L)}}function jt(){try{i.compressedTexSubImage2D(...arguments)}catch(L){ut("WebGLState:",L)}}function ot(){try{i.compressedTexSubImage3D(...arguments)}catch(L){ut("WebGLState:",L)}}function lt(){try{i.texStorage2D(...arguments)}catch(L){ut("WebGLState:",L)}}function R(){try{i.texStorage3D(...arguments)}catch(L){ut("WebGLState:",L)}}function S(){try{i.texImage2D(...arguments)}catch(L){ut("WebGLState:",L)}}function W(){try{i.texImage3D(...arguments)}catch(L){ut("WebGLState:",L)}}function ye(L){return u[L]!==void 0?u[L]:i.getParameter(L)}function ce(L,de){u[L]!==de&&(i.pixelStorei(L,de),u[L]=de)}function Ae(L){re.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),re.copy(L))}function Be(L){Oe.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Oe.copy(L))}function ae(L,de){let se=c.get(de);se===void 0&&(se=new WeakMap,c.set(de,se));let Ie=se.get(L);Ie===void 0&&(Ie=i.getUniformBlockIndex(de,L.name),i.uniformBlockBinding(de,Ie,Ie),se.set(L,Ie))}function le(L,de,se){let Me=c.get(de).get(L);l[Me]!==se&&(i.bindBufferBase(i.UNIFORM_BUFFER,Me,se),l[Me]=se)}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},he=null,fe={},d={},l={},p=new WeakMap,m=[],T=null,g=!1,_=null,M=null,E=null,v=null,P=null,C=null,y=null,A=new Ke(0,0,0),G=0,F=!1,z=null,q=null,j=null,D=null,J=null,re.set(0,0,i.canvas.width,i.canvas.height),Oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Fe,disable:et,bindFramebuffer:Qt,drawBuffers:it,useProgram:pt,setBlending:we,setMaterial:Ce,setFlipSided:Je,setCullFace:De,setLineWidth:je,setPolygonOffset:Ve,setScissorTest:gt,activeTexture:wt,bindTexture:Mt,unbindTexture:O,compressedTexImage2D:Bt,compressedTexImage3D:_t,texImage2D:S,texImage3D:W,pixelStorei:ce,getParameter:ye,updateUBOMapping:ae,uniformBlockBinding:le,texStorage2D:lt,texStorage3D:R,texSubImage2D:Gt,texSubImage3D:Ne,compressedTexSubImage2D:jt,compressedTexSubImage3D:ot,scissor:Ae,viewport:Be,reset:Ue}}function _y(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,h=new WeakMap,u=new Set,d,p=new WeakMap,m=new Set,T=new FinalizationRegistry(R=>m.delete(R)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return g?new OffscreenCanvas(R,S):Ro("canvas")}function M(R,S,W){let ye=1,ce=lt(R);if((ce.width>W||ce.height>W)&&(ye=W/Math.max(ce.width,ce.height)),ye<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Ae=Math.floor(ye*ce.width),Be=Math.floor(ye*ce.height);d===void 0&&(d=_(Ae,Be));let ae=S?_(Ae,Be):d;return ae.width=Ae,ae.height=Be,ae.getContext("2d").drawImage(R,0,0,Ae,Be),dt("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Ae+"x"+Be+")."),ae}else return"data"in R&&dt("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),R;return R}function E(R){return R.generateMipmaps}function v(R){i.generateMipmap(R)}function P(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(R,S,W,ye,ce,Ae=!1){if(R!==null){if(i[R]!==void 0)return i[R];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Be;ye&&(Be=e.get("EXT_texture_norm16"),Be||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=S;if(S===i.RED&&(W===i.FLOAT&&(ae=i.R32F),W===i.HALF_FLOAT&&(ae=i.R16F),W===i.UNSIGNED_BYTE&&(ae=i.R8),W===i.UNSIGNED_SHORT&&Be&&(ae=Be.R16_EXT),W===i.SHORT&&Be&&(ae=Be.R16_SNORM_EXT)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ae=i.R8UI),W===i.UNSIGNED_SHORT&&(ae=i.R16UI),W===i.UNSIGNED_INT&&(ae=i.R32UI),W===i.BYTE&&(ae=i.R8I),W===i.SHORT&&(ae=i.R16I),W===i.INT&&(ae=i.R32I)),S===i.RG&&(W===i.FLOAT&&(ae=i.RG32F),W===i.HALF_FLOAT&&(ae=i.RG16F),W===i.UNSIGNED_BYTE&&(ae=i.RG8),W===i.UNSIGNED_SHORT&&Be&&(ae=Be.RG16_EXT),W===i.SHORT&&Be&&(ae=Be.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ae=i.RG8UI),W===i.UNSIGNED_SHORT&&(ae=i.RG16UI),W===i.UNSIGNED_INT&&(ae=i.RG32UI),W===i.BYTE&&(ae=i.RG8I),W===i.SHORT&&(ae=i.RG16I),W===i.INT&&(ae=i.RG32I)),S===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),W===i.UNSIGNED_INT&&(ae=i.RGB32UI),W===i.BYTE&&(ae=i.RGB8I),W===i.SHORT&&(ae=i.RGB16I),W===i.INT&&(ae=i.RGB32I)),S===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),W===i.UNSIGNED_INT&&(ae=i.RGBA32UI),W===i.BYTE&&(ae=i.RGBA8I),W===i.SHORT&&(ae=i.RGBA16I),W===i.INT&&(ae=i.RGBA32I)),S===i.RGB&&(W===i.UNSIGNED_SHORT&&Be&&(ae=Be.RGB16_EXT),W===i.SHORT&&Be&&(ae=Be.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(ae=i.R11F_G11F_B10F)),S===i.RGBA){let le=Ae?Co:kt.getTransfer(ce);W===i.FLOAT&&(ae=i.RGBA32F),W===i.HALF_FLOAT&&(ae=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ae=le===nn?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&Be&&(ae=Be.RGBA16_EXT),W===i.SHORT&&Be&&(ae=Be.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function y(R,S){let W;return R?S===null||S===Ji||S===ur?W=i.DEPTH24_STENCIL8:S===Ki?W=i.DEPTH32F_STENCIL8:S===so&&(W=i.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ji||S===ur?W=i.DEPTH_COMPONENT24:S===Ki?W=i.DEPTH_COMPONENT32F:S===so&&(W=i.DEPTH_COMPONENT16),W}function A(R,S){return E(R)===!0||R.isFramebufferTexture&&R.minFilter!==Gn&&R.minFilter!==Wn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function G(R){let S=new WeakRef(R);n.get(R).__ref=S,m.add(S),T.register(R,S,S)}function F(R){let S=n.get(R).__ref;S!==void 0&&(m.delete(S),T.unregister(S))}function z(R){j(R.target)}function q(R){D(R.target)}function j(R){R.removeEventListener("dispose",z),F(R),ee(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function D(R){R.removeEventListener("dispose",q),F(R),xe(R)}function J(){for(let R of m){let S=R.deref();S!==void 0&&(S.isRenderTarget===!0?D(S):j(S))}m.clear(),u.clear()}function ee(R){let S=n.get(R);if(S.__webglInit===void 0)return;let W=R.source,ye=p.get(W);if(ye){let ce=ye[S.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&X(R),Object.keys(ye).length===0&&p.delete(W)}n.remove(R)}function X(R){let S=n.get(R);i.deleteTexture(S.__webglTexture);let W=R.source,ye=p.get(W);delete ye[S.__cacheKey],o.memory.textures--}function xe(R){let S=n.get(R);S.__depthDisposeCallback&&S.__depthDisposeCallback();let W=R.depthTexture;if(W&&W.renderTarget===R&&j(W),R.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(S.__webglFramebuffer[ce]))for(let Ae=0;Ae<S.__webglFramebuffer[ce].length;Ae++)i.deleteFramebuffer(S.__webglFramebuffer[ce][Ae]);else i.deleteFramebuffer(S.__webglFramebuffer[ce]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ce])}else{if(Array.isArray(S.__webglFramebuffer))for(let ce=0;ce<S.__webglFramebuffer.length;ce++)i.deleteFramebuffer(S.__webglFramebuffer[ce]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ce=0;ce<S.__webglColorRenderbuffer.length;ce++)S.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ce]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ye=R.textures;for(let ce=0,Ae=ye.length;ce<Ae;ce++){let Be=n.get(ye[ce]);Be.__webglTexture&&(i.deleteTexture(Be.__webglTexture),o.memory.textures--),n.remove(ye[ce])}n.remove(R)}let ne=0;function he(){ne=0}function fe(){return ne}function Xe(R){ne=R}function qe(){let R=ne;return R>=s.maxTextures&&dt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),ne+=1,R}function re(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.mipmapsAutoUpdate),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Oe(R,S){let W=n.get(R);if(R.isVideoTexture&&jt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){let ye=R.image;if(ye===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(W,R,S);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function me(R,S){let W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){Ce(W,R,S);return}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function Ge(R,S){let W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){Ce(W,R,S);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function Fe(R,S){let W=n.get(R);if(R.version>0&&W.__version!==R.version){Je(W,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}let et={[si]:i.REPEAT,[ns]:i.CLAMP_TO_EDGE,[Br]:i.MIRRORED_REPEAT},Qt={[Gn]:i.NEAREST,[af]:i.NEAREST_MIPMAP_NEAREST,[jo]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[Dl]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},it={[uf]:i.NEVER,[Xh]:i.ALWAYS,[df]:i.LESS,[Hh]:i.LEQUAL,[ff]:i.EQUAL,[Wh]:i.GEQUAL,[pf]:i.GREATER,[mf]:i.NOTEQUAL};function pt(R,S){if(S.type===Ki&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Wn||S.magFilter===Dl||S.magFilter===jo||S.magFilter===Zi||S.minFilter===Wn||S.minFilter===Dl||S.minFilter===jo||S.minFilter===Zi)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,et[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,et[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,et[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Qt[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Qt[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,it[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Gn||S.minFilter!==jo&&S.minFilter!==Zi||S.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Le(R,S){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",z),G(S));let ye=S.source,ce=p.get(ye);ce===void 0&&(ce={},p.set(ye,ce));let Ae=re(S);if(Ae!==R.__cacheKey){ce[Ae]===void 0&&(ce[Ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ce[Ae].usedTimes++;let Be=ce[R.__cacheKey];Be!==void 0&&(ce[R.__cacheKey].usedTimes--,Be.usedTimes===0&&X(S)),R.__cacheKey=Ae,R.__webglTexture=ce[Ae].texture}return W}function ue(R,S,W){return Math.floor(Math.floor(R/W)/S)}function we(R,S,W,ye){let Ae=R.updateRanges;if(Ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,W,ye,S.data);else{Ae.sort((L,de)=>L.start-de.start);let Be=0;for(let L=1;L<Ae.length;L++){let de=Ae[Be],se=Ae[L],Ie=de.start+de.count,Me=ue(se.start,S.width,4),Se=ue(de.start,S.width,4);se.start<=Ie+1&&Me===Se&&ue(se.start+se.count-1,S.width,4)===Me?de.count=Math.max(de.count,se.start+se.count-de.start):(++Be,Ae[Be]=se)}Ae.length=Be+1;let ae=t.getParameter(i.UNPACK_ROW_LENGTH),le=t.getParameter(i.UNPACK_SKIP_PIXELS),Ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let L=0,de=Ae.length;L<de;L++){let se=Ae[L],Ie=Math.floor(se.start/4),Me=Math.ceil(se.count/4),Se=Ie%S.width,nt=Math.floor(Ie/S.width),mt=Me,Ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(i.UNPACK_SKIP_ROWS,nt),t.texSubImage2D(i.TEXTURE_2D,0,Se,nt,mt,Ee,W,ye,S.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ae),t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ue)}}function Ce(R,S,W){let ye=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ye=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ye=i.TEXTURE_3D);let ce=Le(R,S),Ae=S.source;t.bindTexture(ye,R.__webglTexture,i.TEXTURE0+W);let Be=n.get(Ae);if(Ae.version!==Be.__version||ce===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let Ee=kt.getPrimaries(kt.workingColorSpace),st=S.colorSpace===Ts?null:kt.getPrimaries(S.colorSpace),rt=S.colorSpace===Ts||Ee===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let le=M(S.image,!1,s.maxTextureSize);le=ot(S,le);let Ue=r.convert(S.format,S.colorSpace),L=r.convert(S.type),de=C(S.internalFormat,Ue,L,S.normalized,S.colorSpace,S.isVideoTexture);pt(ye,S);let se,Ie=S.mipmaps,Me=S.isVideoTexture!==!0,Se=Be.__version===void 0||ce===!0,nt=Ae.dataReady,mt=A(S,le);if(S.isDepthTexture)de=y(S.format===ws,S.type),Se&&(Me?t.texStorage2D(i.TEXTURE_2D,1,de,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,de,le.width,le.height,0,Ue,L,null));else if(S.isDataTexture)if(Ie.length>0){Me&&Se&&t.texStorage2D(i.TEXTURE_2D,mt,de,Ie[0].width,Ie[0].height);for(let Ee=0,st=Ie.length;Ee<st;Ee++)se=Ie[Ee],Me?nt&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,se.width,se.height,Ue,L,se.data):t.texImage2D(i.TEXTURE_2D,Ee,de,se.width,se.height,0,Ue,L,se.data);S.generateMipmaps=!1}else Me?(Se&&t.texStorage2D(i.TEXTURE_2D,mt,de,le.width,le.height),nt&&we(S,le,Ue,L)):t.texImage2D(i.TEXTURE_2D,0,de,le.width,le.height,0,Ue,L,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Me&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,mt,de,Ie[0].width,Ie[0].height,le.depth);for(let Ee=0,st=Ie.length;Ee<st;Ee++)if(se=Ie[Ee],S.format!==Ai)if(Ue!==null)if(Me){if(nt)if(S.layerUpdates.size>0){let rt=Qh(se.width,se.height,S.format,S.type);for(let He of S.layerUpdates){let Et=se.data.subarray(He*rt/se.data.BYTES_PER_ELEMENT,(He+1)*rt/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,He,se.width,se.height,1,Ue,Et)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,se.width,se.height,le.depth,Ue,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ee,de,se.width,se.height,le.depth,0,se.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?nt&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,se.width,se.height,le.depth,Ue,L,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ee,de,se.width,se.height,le.depth,0,Ue,L,se.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Me&&Se&&t.texStorage2D(i.TEXTURE_2D,mt,de,Ie[0].width,Ie[0].height);for(let Ee=0,st=Ie.length;Ee<st;Ee++)se=Ie[Ee],S.format!==Ai?Ue!==null?Me?nt&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ee,0,0,se.width,se.height,Ue,se.data):t.compressedTexImage2D(i.TEXTURE_2D,Ee,de,se.width,se.height,0,se.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?nt&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,se.width,se.height,Ue,L,se.data):t.texImage2D(i.TEXTURE_2D,Ee,de,se.width,se.height,0,Ue,L,se.data)}else if(S.isDataArrayTexture)if(Me){if(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,mt,de,le.width,le.height,le.depth),nt)if(S.layerUpdates.size>0){let Ee=Qh(le.width,le.height,S.format,S.type);for(let st of S.layerUpdates){let rt=le.data.subarray(st*Ee/le.data.BYTES_PER_ELEMENT,(st+1)*Ee/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,le.width,le.height,1,Ue,L,rt)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ue,L,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,le.width,le.height,le.depth,0,Ue,L,le.data);else if(S.isData3DTexture)Me?(Se&&t.texStorage3D(i.TEXTURE_3D,mt,de,le.width,le.height,le.depth),nt&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ue,L,le.data)):t.texImage3D(i.TEXTURE_3D,0,de,le.width,le.height,le.depth,0,Ue,L,le.data);else if(S.isFramebufferTexture){if(Se)if(Me)t.texStorage2D(i.TEXTURE_2D,mt,de,le.width,le.height);else{let Ee=le.width,st=le.height;for(let rt=0;rt<mt;rt++)t.texImage2D(i.TEXTURE_2D,rt,de,Ee,st,0,Ue,L,null),Ee>>=1,st>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let Ee=i.canvas;if(Ee.hasAttribute("layoutsubtree")||Ee.setAttribute("layoutsubtree","true"),le.parentNode!==Ee){Ee.appendChild(le),u.add(S),Ee.onpaint=st=>{let rt=st.changedElements;for(let He of u)rt.includes(He.image)&&(He.needsUpdate=!0)},Ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,le);else{let rt=i.RGBA,He=i.RGBA,Et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,rt,He,Et,le)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Me&&Se){let Ee=lt(Ie[0]);t.texStorage2D(i.TEXTURE_2D,mt,de,Ee.width,Ee.height)}for(let Ee=0,st=Ie.length;Ee<st;Ee++)se=Ie[Ee],Me?nt&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,Ue,L,se):t.texImage2D(i.TEXTURE_2D,Ee,de,Ue,L,se);S.generateMipmaps=!1}else if(Me){if(Se){let Ee=lt(le);t.texStorage2D(i.TEXTURE_2D,mt,de,Ee.width,Ee.height)}nt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ue,L,le)}else t.texImage2D(i.TEXTURE_2D,0,de,Ue,L,le);E(S)&&S.mipmapsAutoUpdate===!0&&v(ye),Be.__version=Ae.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Je(R,S,W){if(S.image.length!==6)return;let ye=Le(R,S),ce=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+W);let Ae=n.get(ce);if(ce.version!==Ae.__version||ye===!0){t.activeTexture(i.TEXTURE0+W);let Be=kt.getPrimaries(kt.workingColorSpace),ae=S.colorSpace===Ts?null:kt.getPrimaries(S.colorSpace),le=S.colorSpace===Ts||Be===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Ue=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,de=[];for(let He=0;He<6;He++)!Ue&&!L?de[He]=M(S.image[He],!0,s.maxCubemapSize):de[He]=L?S.image[He].image:S.image[He],de[He]=ot(S,de[He]);let se=de[0],Ie=r.convert(S.format,S.colorSpace),Me=r.convert(S.type),Se=C(S.internalFormat,Ie,Me,S.normalized,S.colorSpace),nt=S.isVideoTexture!==!0,mt=Ae.__version===void 0||ye===!0,Ee=ce.dataReady,st=A(S,se);pt(i.TEXTURE_CUBE_MAP,S);let rt;if(S.isDepthTexture){if(Se=y(S.format===ws,S.type),mt)if(nt)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Se,se.width,se.height);else for(let He=0;He<6;He++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Se,se.width,se.height,0,Ie,Me,null)}else if(Ue){nt&&mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,st,Se,se.width,se.height);for(let He=0;He<6;He++){rt=de[He].mipmaps;for(let Et=0;Et<rt.length;Et++){let cn=rt[Et];S.format!==Ai?Ie!==null?nt?Ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,Et,0,0,cn.width,cn.height,Ie,cn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,Et,Se,cn.width,cn.height,0,cn.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,Et,0,0,cn.width,cn.height,Ie,Me,cn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,Et,Se,cn.width,cn.height,0,Ie,Me,cn.data)}}}else{if(rt=S.mipmaps,nt&&mt){rt.length>0&&st++;let He=lt(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,st,Se,He.width,He.height)}for(let He=0;He<6;He++)if(L){nt?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,de[He].width,de[He].height,Ie,Me,de[He].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Se,de[He].width,de[He].height,0,Ie,Me,de[He].data);for(let Et=0;Et<rt.length;Et++){let ei=rt[Et].image[He].image;nt?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,Et+1,0,0,ei.width,ei.height,Ie,Me,ei.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,Et+1,Se,ei.width,ei.height,0,Ie,Me,ei.data)}}else{nt?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,Ie,Me,de[He]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Se,Ie,Me,de[He]);for(let Et=0;Et<rt.length;Et++){let cn=rt[Et];nt?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,Et+1,0,0,Ie,Me,cn.image[He]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+He,Et+1,Se,Ie,Me,cn.image[He])}}}E(S)&&S.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),Ae.__version=ce.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function De(R,S,W,ye,ce,Ae){let Be=r.convert(W.format,W.colorSpace),ae=r.convert(W.type),le=C(W.internalFormat,Be,ae,W.normalized,W.colorSpace),Ue=n.get(S),L=n.get(W);if(L.__renderTarget=S,!Ue.__hasExternalTextures){let de=Math.max(1,S.width>>Ae),se=Math.max(1,S.height>>Ae);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,Ae,le,de,se,S.depth,0,Be,ae,null):t.texImage2D(ce,Ae,le,de,se,0,Be,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ne(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,ce,L.__webglTexture,0,Gt(S)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ye,ce,L.__webglTexture,Ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(R,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){let ye=S.depthTexture,ce=ye&&ye.isDepthTexture?ye.type:null,Ae=y(S.stencilBuffer,ce),Be=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ne(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(S),Ae,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(S),Ae,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Be,i.RENDERBUFFER,R)}else{let ye=S.textures;for(let ce=0;ce<ye.length;ce++){let Ae=ye[ce],Be=r.convert(Ae.format,Ae.colorSpace),ae=r.convert(Ae.type),le=C(Ae.internalFormat,Be,ae,Ae.normalized,Ae.colorSpace);Ne(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(S),le,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(S),le,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,le,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(R,S,W){let ye=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ce=n.get(S.depthTexture);ce.__renderTarget=S;let Ae=ye?S.depthTexture.image[0]:S.depthTexture.image;(!ce.__webglTexture||Ae.width!==S.width||Ae.height!==S.height)&&(Ae.width=S.width,Ae.height=S.height,S.depthTexture.needsUpdate=!0),ye?Fe(S.depthTexture,0):Oe(S.depthTexture,0);let Be=ce.__webglTexture,ae=Gt(S),le=ye?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,Ue=S.depthTexture.format===ws?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ms)Ne(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ue,le,Be,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,Ue,le,Be,0);else if(S.depthTexture.format===ws)Ne(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ue,le,Be,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,Ue,le,Be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gt(R){let S=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let ye=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ye){let ce=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ye.removeEventListener("dispose",ce)};ye.addEventListener("dispose",ce),S.__depthDisposeCallback=ce}S.__boundDepthTexture=ye}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(W)for(let ye=0;ye<6;ye++)Ve(S.__webglFramebuffer[ye],R,ye);else R.texture.mipmaps.length>0?Ve(S.__webglFramebuffer[0],R,0):Ve(S.__webglFramebuffer,R,0);else if(W){S.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ye]),S.__webglDepthbuffer[ye]===void 0)S.__webglDepthbuffer[ye]=i.createRenderbuffer(),je(S.__webglDepthbuffer[ye],R,!1);else{let ce=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=S.__webglDepthbuffer[ye];i.bindRenderbuffer(i.RENDERBUFFER,Ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,Ae)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),je(S.__webglDepthbuffer,R,!1);else{let ce=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,Ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(R,S,W){let ye=n.get(R);S!==void 0&&De(ye.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&gt(R)}function Mt(R){let S=R.texture,W=n.get(R),ye=n.get(S);R.addEventListener("dispose",q),G(R);let ce=R.textures,Ae=R.isWebGLCubeRenderTarget===!0,Be=ce.length>1;if(Be||(ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture()),ye.__version=S.version,o.memory.textures++),Ae){W.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps.length>0){W.__webglFramebuffer[ae]=[];for(let le=0;le<S.mipmaps.length;le++)W.__webglFramebuffer[ae][le]=i.createFramebuffer()}else W.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(S.mipmaps.length>0){W.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)W.__webglFramebuffer[ae]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Be)for(let ae=0,le=ce.length;ae<le;ae++){let Ue=n.get(ce[ae]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Ne(R)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ae=0;ae<ce.length;ae++){let le=ce[ae];W.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ae]);let Ue=r.convert(le.format,le.colorSpace),L=r.convert(le.type),de=C(le.internalFormat,Ue,L,le.normalized,le.colorSpace,R.isXRRenderTarget===!0),se=Gt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,se,de,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,W.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),je(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(i.TEXTURE_CUBE_MAP,ye.__webglTexture),pt(i.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps.length>0)for(let le=0;le<S.mipmaps.length;le++)De(W.__webglFramebuffer[ae][le],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,le);else De(W.__webglFramebuffer[ae],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);E(S)?v(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(Be){for(let ae=0,le=ce.length;ae<le;ae++){let Ue=ce[ae],L=n.get(Ue),de=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,L.__webglTexture),pt(de,Ue),De(W.__webglFramebuffer,R,Ue,i.COLOR_ATTACHMENT0+ae,de,0),E(Ue)&&v(de)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,ye.__webglTexture),pt(ae,S),S.mipmaps.length>0)for(let le=0;le<S.mipmaps.length;le++)De(W.__webglFramebuffer[le],R,S,i.COLOR_ATTACHMENT0,ae,le);else De(W.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,ae,0);E(S)?v(ae):S.mipmaps.length>0&&i.texParameteri(ae,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&gt(R)}function O(R){let S=R.textures;for(let W=0,ye=S.length;W<ye;W++){let ce=S[W];if(E(ce)&&ce.mipmapsAutoUpdate===!0){let Ae=P(R),Be=n.get(ce).__webglTexture;t.bindTexture(Ae,Be),v(Ae),t.unbindTexture()}}}let Bt=[];function _t(R){if(R.samples>0){if(Ne(R)===!1){let S=R.textures,W=R.width,ye=R.height,ce=i.COLOR_BUFFER_BIT,Ae=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Be=n.get(R),ae=S.length>1;if(ae)for(let Ue=0;Ue<S.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ue=0;Ue<S.length;Ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Be.__webglColorRenderbuffer[Ue]);let L=n.get(S[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,W,ye,0,0,W,ye,ce,i.NEAREST),l===!0&&(Bt.length=0,Bt.push(i.COLOR_ATTACHMENT0+Ue),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Bt.push(Ae),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Ue=0;Ue<S.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,Be.__webglColorRenderbuffer[Ue]);let L=n.get(S[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Gt(R){return Math.min(s.maxSamples,R.samples)}function Ne(R){let S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function jt(R){let S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function ot(R,S){let W=R.colorSpace,ye=R.format,ce=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==Eo&&W!==Ts&&(kt.getTransfer(W)===nn?(ye!==Ai||ce!==pi)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",W)),S}function lt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=qe,this.resetTextureUnits=he,this.getTextureUnits=fe,this.setTextureUnits=Xe,this.setTexture2D=Oe,this.setTexture2DArray=me,this.setTexture3D=Ge,this.setTextureCube=Fe,this.rebindTextures=wt,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ne,this.dispose=J}function xy(i,e){function t(n,s=Ts){let r,o=kt.getTransfer(s);if(n===pi)return i.UNSIGNED_BYTE;if(n===Ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fh)return i.BYTE;if(n===Oh)return i.SHORT;if(n===so)return i.UNSIGNED_SHORT;if(n===Nl)return i.INT;if(n===Ji)return i.UNSIGNED_INT;if(n===Ki)return i.FLOAT;if(n===$i)return i.HALF_FLOAT;if(n===kh)return i.ALPHA;if(n===Gh)return i.RGB;if(n===Ai)return i.RGBA;if(n===Ms)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===Vh)return i.RED;if(n===Ol)return i.RED_INTEGER;if(n===Xs)return i.RG;if(n===Bl)return i.RG_INTEGER;if(n===zl)return i.RGBA_INTEGER;if(n===ea||n===ta||n===na||n===ia)if(o===nn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kl||n===Gl||n===Vl||n===Hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===sa||n===Jl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wl||n===Xl)return o===nn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ql)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yl)return r.COMPRESSED_R11_EAC;if(n===Zl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sa)return r.COMPRESSED_RG11_EAC;if(n===Jl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kl||n===$l||n===Ql||n===jl||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kl)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$l)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jl)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ec)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ic)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ac)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hc||n===uc||n===dc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===hc)return o===nn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fc||n===pc||n===ra||n===mc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===fc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var yy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vy=`
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

}`,du=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Bo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wi({vertexShader:yy,fragmentShader:vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new Pt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fu=class extends ss{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,T=typeof XRWebGLBinding<"u",g=new du,_={},M=t.getContextAttributes(),E=null,v=null,P=[],C=[],y=new ge,A=null,G=null,F=new Un;F.viewport=new dn;let z=new Un;z.viewport=new dn;let q=[F,z],j=new Rl,D=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Oe=P[re];return Oe===void 0&&(Oe=new Hr,P[re]=Oe),Oe.getTargetRaySpace()},this.getControllerGrip=function(re){let Oe=P[re];return Oe===void 0&&(Oe=new Hr,P[re]=Oe),Oe.getGripSpace()},this.getHand=function(re){let Oe=P[re];return Oe===void 0&&(Oe=new Hr,P[re]=Oe),Oe.getHandSpace()};function ee(re){let Oe=C.indexOf(re.inputSource);if(Oe===-1)return;let me=P[Oe];me!==void 0&&(me.update(re.inputSource,re.frame,c||o),me.dispatchEvent({type:re.type,data:re.inputSource}))}function X(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",xe);for(let re=0;re<P.length;re++){let Oe=C[re];Oe!==null&&(C[re]=null,P[re].disconnect(Oe))}D=null,J=null,g.reset();for(let re in _)delete _[re];if(e.setRenderTarget(E),p=null,d=null,u=null,s=null,v=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(y.width,y.height,!1),G!==null){let re=G.camera;re.fov=G.fov,re.zoom=G.zoom,re.updateProjectionMatrix(),G=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,n.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,n.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&T&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",X),s.addEventListener("inputsourceschange",xe),M.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(y),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ge=null,Fe=null;M.depth&&(Fe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=M.stencil?ws:Ms,Ge=M.stencil?ur:Ji);let et={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(et),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new bi(d.textureWidth,d.textureHeight,{format:Ai,type:pi,depthTexture:new bs(d.textureWidth,d.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let me={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new bi(p.framebufferWidth,p.framebufferHeight,{format:Ai,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function xe(re){for(let Oe=0;Oe<re.removed.length;Oe++){let me=re.removed[Oe],Ge=C.indexOf(me);Ge>=0&&(C[Ge]=null,P[Ge].disconnect(me))}for(let Oe=0;Oe<re.added.length;Oe++){let me=re.added[Oe],Ge=C.indexOf(me);if(Ge===-1){for(let et=0;et<P.length;et++)if(et>=C.length){C.push(me),Ge=et;break}else if(C[et]===null){C[et]=me,Ge=et;break}if(Ge===-1)break}let Fe=P[Ge];Fe&&Fe.connect(me)}}function ne(re,Oe){Oe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Oe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let Oe=re.near,me=re.far;g.texture!==null&&(g.depthNear>0&&(Oe=g.depthNear),g.depthFar>0&&(me=g.depthFar)),j.near=z.near=F.near=Oe,j.far=z.far=F.far=me,(D!==j.near||J!==j.far)&&(s.updateRenderState({depthNear:j.near,depthFar:j.far}),D=j.near,J=j.far),j.layers.mask=re.layers.mask|6,F.layers.mask=j.layers.mask&-5,z.layers.mask=j.layers.mask&-3;let Ge=re.parent,Fe=j.cameras;ne(j,Ge);for(let et=0;et<Fe.length;et++)ne(Fe[et],Ge);j.projectionMatrix.copy(F.projectionMatrix),j.projectionMatrixInverse.copy(F.projectionMatrixInverse),G===null&&re.isPerspectiveCamera&&(G={camera:re,fov:re.fov,zoom:re.zoom}),he(re,j,Ge)};function he(re,Oe,me){me===null?re.matrix.copy(Oe.matrixWorld):(re.matrix.copy(me.matrixWorld),re.matrix.invert(),re.matrix.multiply(Oe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Oe.projectionMatrix),re.projectionMatrixInverse.copy(Oe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Io*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(j)},this.getCameraTexture=function(re){return _[re]};let fe=null;function Xe(re,Oe){if(h=Oe.getViewerPose(c||o),m=Oe,h!==null){let me=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Ge=!1;me.length!==j.cameras.length&&(j.cameras.length=0,Ge=!0);for(let it=0;it<me.length;it++){let pt=me[it],Le=null;if(p!==null)Le=p.getViewport(pt);else{let we=u.getViewSubImage(d,pt);Le=we.viewport,it===0&&(e.setRenderTargetTextures(v,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(v))}let ue=q[it];ue===void 0&&(ue=new Un,ue.layers.enable(it),ue.viewport=new dn,q[it]=ue),ue.matrix.fromArray(pt.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(pt.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Le.x,Le.y,Le.width,Le.height),it===0&&(j.matrix.copy(ue.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ge===!0&&j.cameras.push(ue)}let Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){u=n.getBinding();let it=u.getDepthInformation(me[0]);it&&it.isValid&&it.texture&&g.init(it,s.renderState)}if(Fe&&Fe.includes("camera-access")&&T){e.state.unbindTexture(),u=n.getBinding();for(let it=0;it<me.length;it++){let pt=me[it].camera;if(pt){let Le=_[pt];Le||(Le=new Bo,_[pt]=Le);let ue=u.getCameraImage(pt);Le.sourceTexture=ue}}}}for(let me=0;me<P.length;me++){let Ge=C[me],Fe=P[me];Ge!==null&&Fe!==void 0&&Fe.update(Ge,Oe,c||o)}fe&&fe(re,Oe),Oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Oe}),m=null}let qe=new jf;qe.setAnimationLoop(Xe),this.setAnimationLoop=function(re){fe=re},this.dispose=function(){}}},Sy=new $t,cp=new vt;cp.set(-1,0,0,0,1,0,0,0,1);function My(i,e){function t(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function n(g,_){_.color.getRGB(g.fogColor.value,Jh(i)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function s(g,_,M,E,v){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(g,_):_.isMeshLambertMaterial?(r(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(g,_),u(g,_)):_.isMeshPhongMaterial?(r(g,_),h(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(g,_),d(g,_),_.isMeshPhysicalMaterial&&p(g,_,v)):_.isMeshMatcapMaterial?(r(g,_),m(g,_)):_.isMeshDepthMaterial?r(g,_):_.isMeshDistanceMaterial?(r(g,_),T(g,_)):_.isMeshNormalMaterial?r(g,_):_.isLineBasicMaterial?(o(g,_),_.isLineDashedMaterial&&a(g,_)):_.isPointsMaterial?l(g,_,M,E):_.isSpriteMaterial?c(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,t(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===ai&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,t(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===ai&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,t(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,t(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);let M=e.get(_),E=M.envMap,v=M.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(cp),g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,g.aoMapTransform))}function o(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform))}function a(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function l(g,_,M,E){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*M,g.scale.value=E*.5,_.map&&(g.map.value=_.map,t(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function c(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function h(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function u(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function d(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function p(g,_,M){g.ior.value=_.ior,_.diffuseRoughness>0&&(g.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ai&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.retroreflectivity>0&&(g.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,_){_.matcap&&(g.matcap.value=_.matcap)}function T(g,_){let M=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function by(i,e,t,n){let s={},r={};function o(M,E){let v=E.program;n.uniformBlockBinding(M,v,s[M.id])}function a(M,E){let v=s[M.id];v===void 0&&(m(M),v=l(M),s[M.id]=v,M.addEventListener("dispose",g));let P=E.program;n.updateUBOMapping(M,P);let C=e.render.frame;r[M.id]!==C&&(c(M),r[M.id]=C)}function l(M){let E=i.createBuffer(),v=M.__size,P=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,v,P),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(M){let E=s[M.id],v=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,y=v.length;C<y;C++){let A=v[C];if(Array.isArray(A))for(let G=0,F=A.length;G<F;G++)h(A[G],C,G,P);else h(A,C,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,E,v,P){if(d(M,E,v,P)===!0){let C=M.__offset,y=M.value;if(Array.isArray(y)){let A=0;for(let G=0;G<y.length;G++){let F=y[G],z=T(F,!0);u(F,M.__data,A),A+=z.storage/Float32Array.BYTES_PER_ELEMENT}}else u(y,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,M.__data)}}function u(M,E,v){typeof M=="number"||typeof M=="boolean"?E[v]=M:M.isMatrix3?(E[v]=M.elements[0],E[v+1]=M.elements[1],E[v+2]=M.elements[2],E[v+3]=0,E[v+4]=M.elements[3],E[v+5]=M.elements[4],E[v+6]=M.elements[5],E[v+7]=0,E[v+8]=M.elements[6],E[v+9]=M.elements[7],E[v+10]=M.elements[8],E[v+11]=0):ArrayBuffer.isView(M)?E.set(M.subarray(0,E.length-v),v):M.toArray(E,v)}function d(M,E,v,P){let C=M.value,y=E+"_"+v;if(Array.isArray(C)){P[y]===void 0&&(P[y]=[]);let A=P[y],G=!1;for(let F=0;F<C.length;F++)p(C[F],A,F)===!0&&(G=!0);return G}return p(C,P,y)}function p(M,E,v){if(E[v]===void 0)return typeof M=="number"||typeof M=="boolean"?E[v]=M:ArrayBuffer.isView(M)?E[v]=M.slice():E[v]=M.clone(),!0;{let P=E[v];if(typeof M=="number"||typeof M=="boolean"){if(P!==M)return E[v]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(P.equals(M)===!1)return P.copy(M),!0}}return!1}function m(M){let E=M.uniforms,v=0,P=16;for(let y=0,A=E.length;y<A;y++){let G=Array.isArray(E[y])?E[y]:[E[y]];for(let F=0,z=G.length;F<z;F++){let q=G[F],j=Array.isArray(q.value)?q.value:[q.value],D=Array.isArray(E[y])||Array.isArray(q.value),J=v;for(let X=0,xe=j.length;X<xe;X++){let ne=j[X],he=T(ne,D),fe=v%P,Xe=fe%he.boundary,qe=fe+Xe;v+=Xe,qe!==0&&P-qe<he.storage&&(v+=P-qe),X===0&&(J=v),v+=he.storage}let ee=q.type==="int"?Int32Array:q.type==="uint"?Uint32Array:Float32Array;q.__data=new ee((v-J)/Float32Array.BYTES_PER_ELEMENT),q.__offset=J}}let C=v%P;return C>0&&(v+=P-C),M.__size=v,M.__cache={},this}function T(M,E){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=16,v.storage=48):M.isMatrix4?(v.boundary=16,v.storage=64):M.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(v.boundary=16,v.storage=M.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",M),E===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(M){let E=M.target;E.removeEventListener("dispose",g),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function _(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:_}}var wy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),as=null;function Ty(){return as===null&&(as=new Xr(wy,16,16,Xs,$i),as.name="DFG_LUT",as.minFilter=Wn,as.magFilter=Wn,as.wrapS=ns,as.wrapT=ns,as.generateMipmaps=!1,as.needsUpdate=!0),as}var ca=class{constructor(e={}){let{canvas:t=gf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=pi}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let T=p,g=new Set([zl,Bl,Ol]),_=new Set([pi,Ji,so,ur,Ul,Fl]),M=new Uint32Array(4),E=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},P=null,C=null,y=[],A=[],G=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=os,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,z=!1,q=null,j=null,D=null,J=null;this._outputColorSpace=bn;let ee=0,X=0,xe=null,ne=-1,he=null,fe=new dn,Xe=new dn,qe=null,re=new Ke(0),Oe=0,me=t.width,Ge=t.height,Fe=1,et=null,Qt=null,it=new dn(0,0,me,Ge),pt=new dn(0,0,me,Ge),Le=!1,ue=new Os,we=new cl,Ce=!1,Je=!1,De=new $t,je=new N,Ve=new dn,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function Mt(){return xe===null?Fe:1}let O=n;function Bt(b,U){return t.getContext(b,U)}let _t,Gt,Ne,jt,ot,lt,R,S,W,ye,ce,Ae,Be,ae,le,Ue,L,de,se,Ie,Me,Se,nt;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",He,!1),O===null){let U="webgl2";if(O=Bt(U,b),O===null)throw Bt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}mt()}catch(b){throw t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",He,!1),ut("WebGLRenderer: "+b.message),b}function mt(){_t=new F_(O),_t.init(),Me=new xy(O,_t),Gt=new T_(O,_t,e,Me),Ne=new gy(O,_t),Gt.reversedDepthBuffer&&d&&Ne.buffers.depth.setReversed(!0),j=O.createFramebuffer(),D=O.createFramebuffer(),J=O.createFramebuffer(),jt=new z_(O),ot=new ny,lt=new _y(O,_t,Ne,ot,Gt,Me,jt),R=new U_(F),S=new Gm(O),Se=new b_(O,S),W=new O_(O,S,jt,Se),ye=new G_(O,W,S,Se,jt),de=new k_(O,Gt,lt),le=new A_(ot),ce=new ty(F,R,_t,Gt,Se,le),Ae=new My(F,ot),Be=new sy,ae=new hy(_t),L=new M_(F,R,Ne,ye,m,l),Ue=new my(F,ye,Gt),nt=new by(O,jt,Gt,Ne),se=new w_(O,_t,jt),Ie=new B_(O,_t,jt),jt.programs=ce.programs,F.capabilities=Gt,F.extensions=_t,F.properties=ot,F.renderLists=Be,F.shadowMap=Ue,F.state=Ne,F.info=jt}T!==pi&&(G=new H_(T,t.width,t.height,a,s,r));let Ee=new fu(F,O);this.xr=Ee,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=_t.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=_t.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(b){b!==void 0&&(Fe=b,this.setSize(me,Ge,!1))},this.getSize=function(b){return b.set(me,Ge)},this.setSize=function(b,U,te=!0){if(Ee.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}me=b,Ge=U,t.width=Math.floor(b*Fe),t.height=Math.floor(U*Fe),te===!0&&(t.style.width=b+"px",t.style.height=U+"px"),G!==null&&G.setSize(t.width,t.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(me*Fe,Ge*Fe).floor()},this.setDrawingBufferSize=function(b,U,te){me=b,Ge=U,Fe=te,t.width=Math.floor(b*te),t.height=Math.floor(U*te),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(T===pi){ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(fe)},this.getViewport=function(b){return b.copy(it)},this.setViewport=function(b,U,te,K){b.isVector4?it.set(b.x,b.y,b.z,b.w):it.set(b,U,te,K),Ne.viewport(fe.copy(it).multiplyScalar(Mt()).round())},this.getScissor=function(b){return b.copy(pt)},this.setScissor=function(b,U,te,K){b.isVector4?pt.set(b.x,b.y,b.z,b.w):pt.set(b,U,te,K),Ne.scissor(Xe.copy(pt).multiplyScalar(Mt()).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(b){Ne.setScissorTest(Le=b)},this.setOpaqueSort=function(b){et=b},this.setTransparentSort=function(b){Qt=b},this.getClearColor=function(b){return b.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,te=!0){let K=0;if(b){let $=!1;if(xe!==null){let Re=xe.texture.format;$=g.has(Re)}if($){let Re=xe.texture.type,$e=_.has(Re),be=L.getClearColor(),Pe=L.getClearAlpha(),We=be.r,at=be.g,St=be.b;$e?(M[0]=We,M[1]=at,M[2]=St,M[3]=Pe,O.clearBufferuiv(O.COLOR,0,M)):(E[0]=We,E[1]=at,E[2]=St,E[3]=Pe,O.clearBufferiv(O.COLOR,0,E))}else K|=O.COLOR_BUFFER_BIT}U&&(K|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(K|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&O.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),q=b},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",He,!1),L.dispose(),Be.dispose(),ae.dispose(),lt.dispose(),ot.dispose(),R.dispose(),ye.dispose(),W.dispose(),Se.dispose(),nt.dispose(),ce.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Qi),Ee.removeEventListener("sessionend",_i),ti.stop()};function st(b){b.preventDefault(),Po("WebGLRenderer: Context Lost."),z=!0}function rt(){Po("WebGLRenderer: Context Restored."),z=!1;let b=jt.autoReset,U=Ue.enabled,te=Ue.autoUpdate,K=Ue.needsUpdate,$=Ue.type;mt(),jt.autoReset=b,Ue.enabled=U,Ue.autoUpdate=te,Ue.needsUpdate=K,Ue.type=$}function He(b){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Et(b){let U=b.target;U.removeEventListener("dispose",Et),cn(U)}function cn(b){ei(b),ot.remove(b)}function ei(b){let U=ot.get(b).programs;U!==void 0&&(U.forEach(function(te){ce.releaseProgram(te)}),b.isShaderMaterial&&ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,te,K,$,Re){U===null&&(U=gt);let $e=$.isMesh&&$.matrixWorld.determinantAffine()<0,be=yi(b,U,te,K,$);Ne.setMaterial(K,$e);let Pe=te.index,We=1;if(K.wireframe===!0){if(Pe=W.getWireframeAttribute(te),Pe===void 0)return;We=2}let at=te.drawRange,St=te.attributes.position,Qe=at.start*We,xt=(at.start+at.count)*We;Re!==null&&(Qe=Math.max(Qe,Re.start*We),xt=Math.min(xt,(Re.start+Re.count)*We)),Pe!==null?(Qe=Math.max(Qe,0),xt=Math.min(xt,Pe.count)):St!=null&&(Qe=Math.max(Qe,0),xt=Math.min(xt,St.count));let an=xt-Qe;if(an<0||an===1/0)return;Se.setup($,K,be,te,Pe);let Xt,Ht=se;if(Pe!==null&&(Xt=S.get(Pe),Ht=Ie,Ht.setIndex(Xt)),$.isMesh)K.wireframe===!0?(Ne.setLineWidth(K.wireframeLinewidth*Mt()),Ht.setMode(O.LINES)):Ht.setMode(O.TRIANGLES);else if($.isLine){let fn=K.linewidth;fn===void 0&&(fn=1),Ne.setLineWidth(fn*Mt()),$.isLineSegments?Ht.setMode(O.LINES):$.isLineLoop?Ht.setMode(O.LINE_LOOP):Ht.setMode(O.LINE_STRIP)}else $.isPoints?Ht.setMode(O.POINTS):$.isSprite&&Ht.setMode(O.TRIANGLES);if($.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))Ht.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let fn=$._multiDrawStarts,ze=$._multiDrawCounts,Zt=$._multiDrawCount,At=Pe?S.get(Pe).bytesPerElement:1,Ri=ot.get(K).currentProgram.getUniforms();for(let vn=0;vn<Zt;vn++)Ri.setValue(O,"_gl_DrawID",vn),Ht.render(fn[vn]/At,ze[vn])}else if($.isInstancedMesh)Ht.renderInstances(Qe,an,$.count);else if(te.isInstancedBufferGeometry){let fn=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,ze=Math.min(te.instanceCount,fn);Ht.renderInstances(Qe,an,ze)}else Ht.render(Qe,an)};function pr(b,U,te,K){q!==null&&b.isNodeMaterial&&q.setObject(K,b),Ce===!0&&le.setState(b,te,!1),b.transparent===!0&&b.side===ln&&b.forceSinglePass===!1?(b.side=ai,b.needsUpdate=!0,Oi(b,U,K),b.side=Ws,b.needsUpdate=!0,Oi(b,U,K),b.side=ln):Oi(b,U,K)}this.compile=function(b,U,te=null){te===null&&(te=b),q!==null&&q.renderStart(b,U,te),C=ae.get(te),C.init(U),A.push(C),te.traverseVisible(function($){$.isLight&&$.layers.test(U.layers)&&(C.pushLight($),$.castShadow&&C.pushShadow($))}),b!==te&&b.traverseVisible(function($){$.isLight&&$.layers.test(U.layers)&&(C.pushLight($),$.castShadow&&C.pushShadow($))}),C.setupLights(),q!==null&&q.updateLights(C.state.lightsArray),Je=this.localClippingEnabled,Ce=le.init(this.clippingPlanes,Je),Ce===!0&&le.setGlobalState(this.clippingPlanes,U),q!==null&&Ue.render(C.state.shadowsArray,te,U);let K=new Set;return b.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Re=$.material;if(Re)if(Array.isArray(Re))for(let $e=0;$e<Re.length;$e++){let be=Re[$e];pr(be,te,U,$),K.add(be)}else pr(Re,te,U,$),K.add(Re)}),C=A.pop(),q!==null&&q.renderEnd(),K},this.compileAsync=function(b,U,te=null){let K=this.compile(b,U,te);return new Promise($=>{function Re(){if(K.forEach(function($e){let Pe=ot.get($e).currentProgram;(Pe===void 0||Pe.isReady())&&K.delete($e)}),K.size===0){$(b);return}setTimeout(Re,10)}_t.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let As=null;function mr(b){As&&As(b)}function Qi(){ti.stop()}function _i(){ti.start()}let ti=new jf;ti.setAnimationLoop(mr),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(b){As=b,Ee.setAnimationLoop(b),b===null?ti.stop():ti.start()},Ee.addEventListener("sessionstart",Qi),Ee.addEventListener("sessionend",_i),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;q!==null&&q.renderStart(b,U);let te=Ee.enabled===!0&&Ee.isPresenting===!0,K=G!==null&&(xe===null||te)&&G.begin(F,xe);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(U),U=Ee.getCamera()),b.isScene===!0&&b.onBeforeRender(F,b,U,xe),C=ae.get(b,A.length),C.init(U),C.state.textureUnits=lt.getTextureUnits(),A.push(C),De.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?we.setFromArrayCamera(U):ue.setFromProjectionMatrix(De,Di,U.reversedDepth),Je=this.localClippingEnabled,Ce=le.init(this.clippingPlanes,Je),P=Be.get(b,y.length),P.init(),y.push(P),this.info.render.frame++,Ee.enabled===!0&&Ee.isPresenting===!0){let $e=F.xr.getDepthSensingMesh();$e!==null&&ni($e,U,-1/0,F.sortObjects)}ni(b,U,0,F.sortObjects),P.finish(),q!==null&&q.updateLights(C.state.lightsArray),F.sortObjects===!0&&P.sort(et,Qt),wt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,wt&&L.addToRenderList(P,b),this.info.autoReset===!0&&this.info.reset(),Ce===!0&&le.beginShadows();let $=C.state.shadowsArray;if(Ue.render($,b,U),Ce===!0&&le.endShadows(),(K&&G.hasRenderPass())===!1){let $e=P.opaque,be=P.transmissive;if(C.setupLights(),U.isArrayCamera){let Pe=U.cameras;if(be.length>0)for(let We=0,at=Pe.length;We<at;We++){let St=Pe[We];Es($e,be,b,St)}wt&&L.render(b);for(let We=0,at=Pe.length;We<at;We++){let St=Pe[We];Ci(P,b,St,St.viewport)}}else be.length>0&&Es($e,be,b,U),wt&&L.render(b),Ci(P,b,U)}xe!==null&&X===0&&(lt.updateMultisampleRenderTarget(xe),lt.updateRenderTargetMipmap(xe)),K&&G.end(F),b.isScene===!0&&b.onAfterRender(F,b,U),Se.resetDefaultState(),ne=-1,he=null,A.pop(),A.length>0?(C=A[A.length-1],lt.setTextureUnits(C.state.textureUnits),Ce===!0&&le.setGlobalState(F.clippingPlanes,C.state.camera)):C=null,y.pop(),y.length>0?P=y[y.length-1]:P=null,q!==null&&q.renderEnd()};function ni(b,U,te,K){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)te=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)C.pushLight(b),b.castShadow&&C.pushShadow(b);else if(b.isSprite){let $e=U.isArrayCamera?we:ue;if(!b.frustumCulled||b.intersectsFrustum($e)){K&&Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(De);let be=ye.update(b),Pe=b.material;Pe.visible&&P.push(b,be,Pe,te,Ve.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){let $e=U.isArrayCamera?we:ue;if(!b.frustumCulled||b.intersectsFrustum($e)){let be=ye.update(b),Pe=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ve.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ve.copy(be.boundingSphere.center)),Ve.applyMatrix4(b.matrixWorld).applyMatrix4(De)),Array.isArray(Pe)){let We=be.groups;for(let at=0,St=We.length;at<St;at++){let Qe=We[at],xt=Pe[Qe.materialIndex];xt&&xt.visible&&P.push(b,be,xt,te,Ve.z,Qe,U)}}else Pe.visible&&P.push(b,be,Pe,te,Ve.z,null,U)}}}let Re=b.children;for(let $e=0,be=Re.length;$e<be;$e++)ni(Re[$e],U,te,K)}function Ci(b,U,te,K){let{opaque:$,transmissive:Re,transparent:$e}=b;C.setupLightsView(te),Ce===!0&&le.setGlobalState(F.clippingPlanes,te),K&&Ne.viewport(fe.copy(K)),$.length>0&&Cn($,U,te),Re.length>0&&Cn(Re,U,te),$e.length>0&&Cn($e,U,te),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Es(b,U,te,K){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[K.id]===void 0){let Qe=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[K.id]=new bi(1,1,{generateMipmaps:!0,type:Qe?$i:pi,minFilter:Zi,samples:Math.max(4,Gt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:kt.workingColorSpace})}let Re=C.state.transmissionRenderTarget[K.id],$e=K.viewport||fe;Re.setSize($e.z*F.transmissionResolutionScale,$e.w*F.transmissionResolutionScale);let be=F.getRenderTarget(),Pe=F.getActiveCubeFace(),We=F.getActiveMipmapLevel();F.setRenderTarget(Re),F.getClearColor(re),Oe=F.getClearAlpha(),Oe<1&&F.setClearColor(16777215,.5),F.clear(),wt&&L.render(te);let at=F.toneMapping;F.toneMapping=os;let St=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),C.setupLightsView(K),Ce===!0&&le.setGlobalState(F.clippingPlanes,K),Cn(b,te,K),lt.updateMultisampleRenderTarget(Re),lt.updateRenderTargetMipmap(Re),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let xt=0,an=U.length;xt<an;xt++){let Xt=U[xt],{object:Ht,geometry:fn,material:ze,group:Zt}=Xt;if(ze.side===ln&&Ht.layers.test(K.layers)){let At=ze.side;ze.side=ai,ze.needsUpdate=!0,li(Ht,te,K,fn,ze,Zt),ze.side=At,ze.needsUpdate=!0,Qe=!0}}Qe===!0&&(lt.updateMultisampleRenderTarget(Re),lt.updateRenderTargetMipmap(Re))}F.setRenderTarget(be,Pe,We),F.setClearColor(re,Oe),St!==void 0&&(K.viewport=St),F.toneMapping=at}function Cn(b,U,te){let K=U.isScene===!0?U.overrideMaterial:null;for(let $=0,Re=b.length;$<Re;$++){let $e=b[$],{object:be,geometry:Pe,group:We}=$e,at=$e.material;at.allowOverride===!0&&K!==null&&(at=K),be.layers.test(te.layers)&&li(be,U,te,Pe,at,We)}}function li(b,U,te,K,$,Re){q!==null&&$.isNodeMaterial&&q.setObject(b,$),b.onBeforeRender(F,U,te,K,$,Re),b.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(F,U,te,K,b,Re),$.transparent===!0&&$.side===ln&&$.forceSinglePass===!1?($.side=ai,$.needsUpdate=!0,F.renderBufferDirect(te,U,K,$,b,Re),$.side=Ws,$.needsUpdate=!0,F.renderBufferDirect(te,U,K,$,b,Re),$.side=ln):F.renderBufferDirect(te,U,K,$,b,Re),b.onAfterRender(F,U,te,K,$,Re)}function ji(b){let U=0;for(let te of b)te.texture!==null&&U++;return U}function Oi(b,U,te){U.isScene!==!0&&(U=gt);let K=ot.get(b),$=C.state.lights,Re=C.state.shadowsArray,$e=$.state.version,be=ce.getParameters(b,$.state,Re,U,te,C.state.lightProbeGridArray),Pe=ce.getProgramCacheKey(be),We=K.programs;K.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,K.fog=U.fog;let at=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;K.envMap=R.get(b.envMap||K.environment,at),K.envMapRotation=K.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,We===void 0&&(b.addEventListener("dispose",Et),We=new Map,K.programs=We,K.programVariants=new Map);let St=We.get(Pe);if(St!==void 0){if(K.currentProgram===St&&K.lightsStateVersion===$e)return xi(b,be),St}else be.uniforms=ce.getUniforms(b),q!==null&&b.isNodeMaterial&&q.build(b,te,be),b.onBeforeCompile(be,F),St=ce.acquireProgram(be,Pe),We.set(Pe,St),K.uniforms=be.uniforms;let Qe=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Qe.clippingPlanes=le.uniform),xi(b,be),K.needsLights=hs(b),K.lightsStateVersion=$e,K.needsLights&&(Qe.ambientLightColor.value=$.state.ambient,Qe.lightProbe.value=$.state.probe,Qe.sunLights.value=$.state.sun,Qe.sunLightShadows.value=$.state.sunShadow,Qe.directionalLights.value=$.state.directional,Qe.directionalLightShadows.value=$.state.directionalShadow,Qe.spotLights.value=$.state.spot,Qe.spotLightShadows.value=$.state.spotShadow,Qe.rectAreaLights.value=$.state.rectArea,Qe.ltc_1.value=$.state.rectAreaLTC1,Qe.ltc_2.value=$.state.rectAreaLTC2,Qe.pointLights.value=$.state.point,Qe.pointLightShadows.value=$.state.pointShadow,Qe.hemisphereLights.value=$.state.hemi,Qe.sunShadowMatrix.value=$.state.sunShadowMatrix,Qe.sunShadowCascade.value=$.state.sunShadowCascade,Qe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Qe.spotLightMatrix.value=$.state.spotLightMatrix,Qe.spotLightMap.value=$.state.spotLightMap,Qe.pointShadowMatrix.value=$.state.pointShadowMatrix),K.numLightProbeGrids=ji(C.state.lightProbeGridArray),K.currentProgram=St,K.uniformsList=null,St}function cs(b,U,te,K,$){let Re=ot.get(b),$e=Re.currentProgram.id+","+K+","+$,be=Re.programVariants.get($e);return be===void 0?(be=Oi(b,U,te),Re.programVariants.set($e,be)):(Re.currentProgram=be,Re.uniformsList=null,Re.outputColorSpace=K,Re.toneMapping=$),be}function Vt(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=ro.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function xi(b,U){let te=ot.get(b);te.outputColorSpace=U.outputColorSpace,te.batching=U.batching,te.batchingColor=U.batchingColor,te.instancing=U.instancing,te.instancingColor=U.instancingColor,te.instancingMorph=U.instancingMorph,te.skinning=U.skinning,te.morphTargets=U.morphTargets,te.morphNormals=U.morphNormals,te.morphColors=U.morphColors,te.morphTargetsCount=U.morphTargetsCount,te.numClippingPlanes=U.numClippingPlanes,te.numIntersection=U.numClipIntersection,te.vertexAlphas=U.vertexAlphas,te.vertexTangents=U.vertexTangents,te.toneMapping=U.toneMapping}function yi(b,U,te,K,$){U.isScene!==!0&&(U=gt),lt.resetTextureUnits();let Re=U.fog,$e=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?U.environment:null,be=xe===null?F.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:kt.workingColorSpace,Pe=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,We=R.get(K.envMap||$e,Pe),at=K.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,St=!!te.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Qe=!!te.morphAttributes.position,xt=!!te.morphAttributes.normal,an=!!te.morphAttributes.color,Xt=os;K.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Xt=F.toneMapping);let Ht=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,fn=Ht!==void 0?Ht.length:0,ze=ot.get(K),Zt=C.state.lights;if(Ce===!0&&(Je===!0||b!==he)){let sn=b===he&&K.id===ne;le.setState(K,b,sn)}let At=!1,Ri=!1;K.version===ze.__version?ze.needsLights&&ze.lightsStateVersion!==Zt.state.version||$.isBatchedMesh&&ze.batching===!1||!$.isBatchedMesh&&ze.batching===!0||$.isBatchedMesh&&ze.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&ze.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&ze.instancing===!1||!$.isInstancedMesh&&ze.instancing===!0||$.isSkinnedMesh&&ze.skinning===!1||!$.isSkinnedMesh&&ze.skinning===!0||$.isInstancedMesh&&ze.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ze.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ze.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ze.instancingMorph===!1&&$.morphTexture!==null||ze.envMap!==We||K.fog===!0&&ze.fog!==Re||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==le.numPlanes||ze.numIntersection!==le.numIntersection)||ze.vertexAlphas!==at||ze.vertexTangents!==St||ze.morphTargets!==Qe||ze.morphNormals!==xt||ze.morphColors!==an||ze.morphTargetsCount!==fn||ze.numLightProbeGrids!==ji(C.state.lightProbeGridArray)?At=!0:(ze.outputColorSpace!==be||ze.toneMapping!==Xt)&&(Ri=!0):(At=!0,ze.__version=K.version);let vn=ze.currentProgram;(At===!0||Ri===!0)&&(vn=Ri===!0?cs(K,U,$,be,Xt):Oi(K,U,$),q&&K.isNodeMaterial&&q.onUpdateProgram(K,vn,ze));let ds=!1,Rn=!1,Yn=!1,yt=vn.getUniforms(),xn=ze.uniforms;if(Ne.useProgram(vn.program)&&(ds=!0,Rn=!0,Yn=!0),K.id!==ne&&(ne=K.id,Rn=!0),ds||he!==b){Ne.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),yt.setValue(O,"projectionMatrix",b.projectionMatrix),yt.setValue(O,"viewMatrix",b.matrixWorldInverse);let zt=yt.map.cameraPosition;zt!==void 0&&zt.setValue(O,je.setFromMatrixPosition(b.matrixWorld)),Gt.logarithmicDepthBuffer&&yt.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&yt.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),he!==b&&(he=b,Rn=!0,Yn=!0)}if(ze.needsLights&&(Zt.state.sunShadowMap.length>0&&yt.setValue(O,"sunShadowMap",Zt.state.sunShadowMap,lt),Zt.state.directionalShadowMap.length>0&&yt.setValue(O,"directionalShadowMap",Zt.state.directionalShadowMap,lt),Zt.state.spotShadowMap.length>0&&yt.setValue(O,"spotShadowMap",Zt.state.spotShadowMap,lt),Zt.state.pointShadowMap.length>0&&yt.setValue(O,"pointShadowMap",Zt.state.pointShadowMap,lt)),$.isSkinnedMesh){yt.setOptional(O,$,"bindMatrix"),yt.setOptional(O,$,"bindMatrixInverse");let sn=$.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),yt.setValue(O,"boneTexture",sn.boneTexture,lt))}$.isBatchedMesh&&(yt.setOptional(O,$,"batchingTexture"),yt.setValue(O,"batchingTexture",$._matricesTexture,lt),yt.setOptional(O,$,"batchingIdTexture"),yt.setValue(O,"batchingIdTexture",$._indirectTexture,lt),yt.setOptional(O,$,"batchingColorTexture"),$._colorsTexture!==null&&yt.setValue(O,"batchingColorTexture",$._colorsTexture,lt));let Zn=te.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&de.update($,te,vn),(Rn||ze.receiveShadow!==$.receiveShadow)&&(ze.receiveShadow=$.receiveShadow,yt.setValue(O,"receiveShadow",$.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&U.environment!==null&&(xn.envMapIntensity.value=U.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=Ty()),Rn){if(yt.setValue(O,"toneMappingExposure",F.toneMappingExposure),ze.needsLights&&vi(xn,Yn),Re&&K.fog===!0&&Ae.refreshFogUniforms(xn,Re),Ae.refreshMaterialUniforms(xn,K,Fe,Ge,C.state.transmissionRenderTarget[b.id]),ze.needsLights&&ze.numLightProbeGrids>0){let sn=v,zt=0;for(let Tn of C.state.lightProbeGridArray)Tn.texture!==null&&(sn.textures[zt]=Tn.texture,sn.min[zt]=Tn.boundingBox.min,sn.max[zt]=Tn.boundingBox.max,sn.resolution[zt]=Tn.resolution,zt++);for(let Tn in sn)sn[Tn].length=zt;xn.probesSH.value=sn.textures,xn.probesMin.value=sn.min,xn.probesMax.value=sn.max,xn.probesResolution.value=sn.resolution}ro.upload(O,Vt(ze),xn,lt)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ro.upload(O,Vt(ze),xn,lt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&yt.setValue(O,"center",$.center),yt.setValue(O,"modelViewMatrix",$.modelViewMatrix),yt.setValue(O,"normalMatrix",$.normalMatrix),yt.setValue(O,"modelMatrix",$.matrixWorld),K.uniformsGroups!==void 0){let sn=K.uniformsGroups;for(let zt=0,Tn=sn.length;zt<Tn;zt++){let k=sn[zt];nt.update(k,vn),nt.bind(k,vn)}}return vn}function vi(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function hs(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return xe},this.setRenderTargetTextures=function(b,U,te){let K=ot.get(b);K.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ot.get(b.texture).__webglTexture=U,ot.get(b.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:te,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let te=ot.get(b);te.__webglFramebuffer=U,te.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,te=0){xe=b,ee=U,X=te;let K=null,$=!1,Re=!1;if(b){let be=ot.get(b);if(be.__useDefaultFramebuffer!==void 0){Ne.bindFramebuffer(O.FRAMEBUFFER,be.__webglFramebuffer),fe.copy(b.viewport),Xe.copy(b.scissor),qe=b.scissorTest,Ne.viewport(fe),Ne.scissor(Xe),Ne.setScissorTest(qe),ne=-1;return}else if(be.__webglFramebuffer===void 0)lt.setupRenderTarget(b);else if(be.__hasExternalTextures)lt.rebindTextures(b,ot.get(b.texture).__webglTexture,ot.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let at=b.depthTexture;if(be.__boundDepthTexture!==at){if(at!==null&&ot.has(at)&&(b.width!==at.image.width||b.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(b)}}let Pe=b.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Re=!0);let We=ot.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(We[U])?K=We[U][te]:K=We[U],$=!0):b.samples>0&&lt.useMultisampledRTT(b)===!1?K=ot.get(b).__webglMultisampledFramebuffer:Array.isArray(We)?K=We[te]:K=We,fe.copy(b.viewport),Xe.copy(b.scissor),qe=b.scissorTest}else fe.copy(it).multiplyScalar(Fe).floor(),Xe.copy(pt).multiplyScalar(Fe).floor(),qe=Le;if(te!==0&&(K=j),Ne.bindFramebuffer(O.FRAMEBUFFER,K)&&Ne.drawBuffers(b,K),Ne.viewport(fe),Ne.scissor(Xe),Ne.setScissorTest(qe),$){let be=ot.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,te)}else if(Re){let be=U;for(let Pe=0;Pe<b.textures.length;Pe++){let We=ot.get(b.textures[Pe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Pe,We.__webglTexture,te,be)}}else if(b!==null&&te!==0){let be=ot.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,be.__webglTexture,te)}ne=-1};function us(b){let U=ot.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=Gt.textureFormatReadable(b.format),U.__typeReadable=Gt.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,te,K,$,Re,$e,be=0){if(!(b&&b.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ot.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&$e!==void 0&&(Pe=Pe[$e],Array.isArray(Pe)&&(Pe=Pe[0])),Pe){Ne.bindFramebuffer(O.FRAMEBUFFER,Pe);try{let We=b.textures[be],at=We.format,St=We.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+be);let Qe=us(We);if(Qe.__formatReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-K&&te>=0&&te<=b.height-$&&O.readPixels(U,te,K,$,Me.convert(at),Me.convert(St),Re)}finally{let We=xe!==null?ot.get(xe).__webglFramebuffer:null;Ne.bindFramebuffer(O.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(b,U,te,K,$,Re,$e,be=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=ot.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&$e!==void 0&&(Pe=Pe[$e],Array.isArray(Pe)&&(Pe=Pe[0])),Pe)if(U>=0&&U<=b.width-K&&te>=0&&te<=b.height-$){Ne.bindFramebuffer(O.FRAMEBUFFER,Pe);let We=b.textures[be],at=We.format,St=We.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+be);let Qe=us(We);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,xt),O.bufferData(O.PIXEL_PACK_BUFFER,Re.byteLength,O.STREAM_READ),O.readPixels(U,te,K,$,Me.convert(at),Me.convert(St),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let an=xe!==null?ot.get(xe).__webglFramebuffer:null;Ne.bindFramebuffer(O.FRAMEBUFFER,an);let Xt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await xf(O,Xt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,xt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Re),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(xt),O.deleteSync(Xt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,te=0){let K=Math.pow(2,-te),$=Math.floor(b.image.width*K),Re=Math.floor(b.image.height*K),$e=U!==null?U.x:0,be=U!==null?U.y:0;lt.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,te,0,0,$e,be,$,Re),Ne.unbindTexture()},this.copyTextureToTexture=function(b,U,te=null,K=null,$=0,Re=0){let $e,be,Pe,We,at,St,Qe,xt,an,Xt=b.isCompressedTexture?b.mipmaps[Re]:b.image;if(te!==null)$e=te.max.x-te.min.x,be=te.max.y-te.min.y,Pe=te.isBox3?te.max.z-te.min.z:1,We=te.min.x,at=te.min.y,St=te.isBox3?te.min.z:0;else{let yt=Math.pow(2,-$);$e=Math.floor(Xt.width*yt),be=Math.floor(Xt.height*yt),b.isDataArrayTexture?Pe=Xt.depth:b.isData3DTexture?Pe=Math.floor(Xt.depth*yt):Pe=1,We=0,at=0,St=0}K!==null?(Qe=K.x,xt=K.y,an=K.z):(Qe=0,xt=0,an=0);let Ht=Me.convert(U.format),fn=Me.convert(U.type),ze;U.isData3DTexture?(lt.setTexture3D(U,0),ze=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(lt.setTexture2DArray(U,0),ze=O.TEXTURE_2D_ARRAY):(lt.setTexture2D(U,0),ze=O.TEXTURE_2D),Ne.activeTexture(O.TEXTURE0),Ne.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),Ne.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),Ne.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let Zt=Ne.getParameter(O.UNPACK_ROW_LENGTH),At=Ne.getParameter(O.UNPACK_IMAGE_HEIGHT),Ri=Ne.getParameter(O.UNPACK_SKIP_PIXELS),vn=Ne.getParameter(O.UNPACK_SKIP_ROWS),ds=Ne.getParameter(O.UNPACK_SKIP_IMAGES);Ne.pixelStorei(O.UNPACK_ROW_LENGTH,Xt.width),Ne.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Xt.height),Ne.pixelStorei(O.UNPACK_SKIP_PIXELS,We),Ne.pixelStorei(O.UNPACK_SKIP_ROWS,at),Ne.pixelStorei(O.UNPACK_SKIP_IMAGES,St);let Rn=b.isDataArrayTexture||b.isData3DTexture,Yn=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let yt=ot.get(b),xn=ot.get(U),Zn=ot.get(yt.__renderTarget),sn=ot.get(xn.__renderTarget);Ne.bindFramebuffer(O.READ_FRAMEBUFFER,Zn.__webglFramebuffer),Ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let zt=0;zt<Pe;zt++)Rn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ot.get(b).__webglTexture,$,St+zt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ot.get(U).__webglTexture,Re,an+zt)),O.blitFramebuffer(We,at,We+$e,at+be,Qe,xt,Qe+$e,xt+be,O.DEPTH_BUFFER_BIT,O.NEAREST);Ne.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if($!==0||b.isRenderTargetTexture||ot.has(b)){let yt=ot.get(b),xn=ot.get(U);Ne.bindFramebuffer(O.READ_FRAMEBUFFER,D),Ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,J);for(let Zn=0;Zn<Pe;Zn++)Rn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,yt.__webglTexture,$,St+Zn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,yt.__webglTexture,$),Yn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,xn.__webglTexture,Re,an+Zn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xn.__webglTexture,Re),$!==0?O.blitFramebuffer(We,at,We+$e,at+be,Qe,xt,Qe+$e,xt+be,O.COLOR_BUFFER_BIT,O.NEAREST):Yn?O.copyTexSubImage3D(ze,Re,Qe,xt,an+Zn,We,at,$e,be):O.copyTexSubImage2D(ze,Re,Qe,xt,We,at,$e,be);Ne.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Yn?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(ze,Re,Qe,xt,an,$e,be,Pe,Ht,fn,Xt.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(ze,Re,Qe,xt,an,$e,be,Pe,Ht,Xt.data):O.texSubImage3D(ze,Re,Qe,xt,an,$e,be,Pe,Ht,fn,Xt):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Re,Qe,xt,$e,be,Ht,fn,Xt.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Re,Qe,xt,Xt.width,Xt.height,Ht,Xt.data):O.texSubImage2D(O.TEXTURE_2D,Re,Qe,xt,$e,be,Ht,fn,Xt);Ne.pixelStorei(O.UNPACK_ROW_LENGTH,Zt),Ne.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At),Ne.pixelStorei(O.UNPACK_SKIP_PIXELS,Ri),Ne.pixelStorei(O.UNPACK_SKIP_ROWS,vn),Ne.pixelStorei(O.UNPACK_SKIP_IMAGES,ds),Re===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(ze),Ne.unbindTexture()},this.initRenderTarget=function(b){ot.get(b).__webglFramebuffer===void 0&&lt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?lt.setTextureCube(b,0):b.isData3DTexture?lt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?lt.setTexture2DArray(b,0):lt.setTexture2D(b,0),Ne.unbindTexture()},this.resetState=function(){ee=0,X=0,xe=null,Ne.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(e),t.unpackColorSpace=kt._getUnpackColorSpace()}};var hp="data:image/webp;base64,UklGRoAUAABXRUJQVlA4IHQUAAAwgQCdASo9BFwAPpFInUylq6KiINGpmXASCWljPdvTL8bFE/y5sMAvcl5fz+2f8qj/jenCUE+0SEaJEJrv4A3nf9o/4fTQ/zPcEdT/yfsCfrHyibRTPh8kIzr40x6XnJDnF/N/93r9f///B77dl7mM/6uz/NfP/vNNyD/+cv/Vf3ygWEVCN9KRG7DqqcqZC8PKPZTPsNqytTYdy8ynk8G0Sg+Oellu5R983GFoGoJioppiEZk8BfGxQ3gDoUMnPfH/rrehXT82lvSAqw/fUWH7/il9aeuQkvYe41GALAyfBC+Tx2sc9YatbwvlCx95YdUN2/i+cYn1ZNN5XFjxB/Uw5OGW4pzsZWHbJ2a18QPmL7wHWSzNSy43me2bjhUxFpnU3U9QZyiy16kJ8HPGMSEeiEiHknbwF8/nadf+TWM1GDlLfPb5zDlVsJo5dlbs2N8nk/72+rNSV5kTgvPo2mff/LHrzhhurKa11UcuDJzI9Qqju9DKeUMSye25aFDais49brwKHWp8MhU6uqTCP+8c/BHZ2kMB5T74y3S3djvzWbxwmbDbjibrf1zIXvmiIrz2RVQ4tT1D0qJ8HDVdGS7b+H1uBNb7nFrXjTE6gOHfn85nSNKwgdgfDolyjG6Qdr2RBIY9QBB8xhF3w+nl3h9aJQY1YsZbgg/brlFCg+Nqa4hWqjKgxqs2zYlPXreBsGnJBK0LJegwXGvX8AhRCW81O+aHJqAuR252DSWx9YrqbwBYI+OnVttICyAEhnTr6JKAwXONGbQshy25wDldYlJQOr0pvyDRk0+DCrtYkfTHJWHA1Y/Z+w8EAq/YJMg9EbM47hwdJYYdliRjlzy4elbNfj6Yke3Ak4DjFuUXbfOft1kCI2LEWHp97njI4LalgiOXo3tucJwm4J0dkbjtm5Vw1REh33JqlYTVnRWXAfKCK7IsHKXQhjSybtE/SSRZpMAnNyuxKDlRWq7fPvJTrtuQ/d7ySj/Jzofhjn7BAR90YpvjlSuCMiUoE2ZRF1e9zqWjqQjKTWALy2c3wyY4fdws5WiiKXm6y9AgaisBjbbeVOTO6ZiWS4yuSE3p9THp6PtvLK14PhtEvKIEY14jQ4d01V/58ZPeqypCpze0G/wIFTLYS7CcdmQ8RGVHPXW+WckDPzm5+KUmQikrVFQLVmgc/bKThh32wJTEWO8coxjdIzvsLa9Ywf2U53X7N0GREixI0ReeOWOoIofkpv90C+H3T1kUCUhk51d8XsQVqUZypiMcVeqTAwpsKtrhIhnlycABKF91G/8KAlESNRAMx9+T+DIGocEooEUESKz/H1W9z+AKJIGNRvOa/+OoskSiamTFtS8O7Dm2cybaotFOjtuhIX9cwEyO5CYFNtK+vt0okcEAAP7ugz3WACH/XHS3OaneVtqNfBwC9k6+yRRWEw44g7Ea/Kn8Ip+0azUScgGGhuUR+3B8C2P/YgFAOEHRnd+WprYM+gDA+Ov4bjJ6TjMBsmWjk8jQg0XEvv4vACV0V4She2T7lsmzVVNLc04DCkCCBWqvInO11RO+OMKfpvwSJ86wErBZtFDq6lCeqxYhTUjEiA0b0hILUQ/6jVlhtOhwO7k4oZHEsF5fUO74qLgV61NYfEIh3njMvb91YtExbcg8d6GHM2e91zv8Q5r/WsdQZK3nwLe9oeoH51WCmEjqNEZhbQzTSafmWAfCX2TPLIhPbZL15DRn46c0pchVFrT6OyypEWffRGMcz9+dPXChlS+CTeeLzJlF3r7itLAk9I4skyyxZInGfR3iID4ZP7FtPcgU3xhupeXewgc0Gj5WdX/E65PFPie0CSKXmrNFMMcRRKUkvcnSHVprrjrcOFWcD8kOEHFIE3K/3Ek+eJkQyKwB9EeizyWx7SzxRvJCgQJbnc/blT4uL0ND4fJyYN/FG886mHxeuzeUx15Z3DtYI0nhpeFIyyYAnQU7c/COsgIWX11wEyd3vA8M9fX/vidBffSF3LhEt60oCvPjs1koX9r0C4cFs3mUnARWBKne3J53Mp78bakRRlMS/QY0jMFmwY6F/IWMbOfAJYkdlVP1hOZZ8h/fwNfiiZKcvQtsDkgFp/iZgQS1gw40ztDXVXl1hfA/mbbzkJ8/KYXetMIgpGMLGplvyrHvTBEkW2xXezH/mn4W0JgZTmpKPwp4+PhrE1zOdlbLz8Nuz2J85WUiQU44yequ1XaJMbwL8l7AiQzHzzVNdFTt1EZqCNKe6um2jlqgioihrR7Q4Chud6ILAUG2SYIipWn+ZpP4gnPaJeRQynHK7rQQcMMr276OLG9jQkk31bNNsINmjldnE9ZsYY1z61lzH0meP8eDNj/yzHNZFx3+yl3FLnL9jrjdBrPtCY1qxx/PnLhPc/0XoiL4PGndRiYgFiOKaCaKrR+geg1jH3PRtND1qEjx/StbKiBtS0yR8FD05vx1zblUImSbG8tzq6/nvnP5iIyGeDenI5dRjyTdZUzrZLnw7pQKOzIwdL55JU7Rgdd9Onerbykv3NJ+fx84OEXh5fAAg016508vANHqHjYU7Gm36IhFYAwcvHrB1Pp6/vhRi1TvD0ntQQbPPBa/3gzoYdZ3a6izTyTs9WRmr0IWz/425T+2Gx5S0RhAOHf826rA3d+F2K2j3nYicwBW5Y64PuryBZm3nqvCEm5YACeUe39CUJd/e46A6/d3yUwuzcBAi10Iq3lugTtBsNKhfS/ngVyQGEsE1ILkTg8QpmCgjPsj0EqZgWnDchpMWRdFooh7GT5i46T7BLNjBWHPXjrfQRffpKk7AREnt8EnNzqtMOlDsGwDhY+QmoaJRfoFkkpq6CcH4YXoDXenDK7Jzsk1DG0nJLtzHYdKc+ocM69FtTa8SCR8zuvsplcMfwfV7aPVZvQWgou7lvXmKKfd8EX4Zm16wllTHjydNmwb4RB7iLLPdZknDhUEa7oEYS5biXw5f4z9FSmBPmJveXYxyptzd0FIgCnUpgFa1Gbc75nA4KASPxkHJQtTjBkMV/pCef53m2mZ5kv3dH6blsVH53FdXjlA2GdFCC5+KNTP6phhIk10JR+NMRfrsuBM506MfhIqeFaiNoWu7YnaiwugBjUiAn7y5Fqtc0aJkjw8j3s+kpzyjGS5fqF0HoyELsdiwngEsZWiZKyfayKnS7OuNuhxqyBcZsXHYXDK5INWX5jMlNCSwC2B4icoocN9pFYWisXrN4Ne8IAne0Ow3x195IizkEKUEBYZlqRpxBzoa7euJ0+8b34PxafQLjhZXLMouV89PJ45UIUeX+KHJujLRuSJ5XUQ8MmtnDreeDYy8zyIRt9Z8QREQtVFaiipdrIL6a9zQzxjQK+kisJBKfOuJtT1BFgu5ZbaO1rH5Gjnu4y3nuFjrlG5Mf36JKTs1ZLgE1l9QkPPR80+njjHcABwAId5Mw3nzBSzLUGPxoy8gKikmU9tDs3dZFgJdV5z2lh6SDq8jLVEYv//GCqNC64KV84//jD6SgX6qSbssSYOCLGg0YqWjJrqFSaaCQ/GomYrINKmNrwjcvKY5F114POw5EVKdvJ5MARBlsZAyr1VqHQ6HFF11FtGwuB0EXduJ6UbaV036c+flaLv1pTl9cR8Ds9krNp5++u7fHYoGNBhqtyAXKHqtX223VDlL5JFzgN8CTErZX8NsitSHjF4JgVJHYRwA8+lZBfCqc2CM8soQYX4scx4JCkPL6LG1GBNlhurW20+FVIfEEJgNuREmwTIrp90vVEsqH/PmpZqpErubdwRVAQlCfXgxh3Hr+W+oBTvPP/4s1QiBMVtTTfKSVRNy0bA+fG5dJaLlBMT70unrl7qUEn0Xk7F1YoQr49OKgL1TsxTUB0gZtGeTnGObT1rcfVX/Zl0Oxm4iLDHSEms5GsKVUcTWfcxjNLDef965K2q/qNTAAJFoG0fC1uSY6g+A+qOvpzgVBx0KxjsKkcUARjyCgfn/gFqjE+C4Y0mjRxB7JzG2wNeyROD7osFSXXUSB9CBxiMSB4ZelWZmvRn7jWOlxiuEvVgVgXc97XbLfKZxAjWebo6KRWLfZ8qLk0ZPKEsClg2HAwC4lxXL9WsbSjyhLnbxyfRNqZdwoaRR25pD14djojgtDcvDd//GgseaAPunuppvuUq0LhDsRev9iq6OvcjI9eoYtZK0WRvt8YKijmVHuUzOBPWXrtvbXgTyTQfe7ywtXvo82BtTbvO8ZUbuVAcpu8Ll726QSIVWFF1kOC55CrouJHe82Y+8h7tSqO3eIz6xCk8p51aJ4AIJW+92jx4ZfZtVhrqtIUh9+FgVqZLNw7HMsg09apn1LuVG3wXxiBOE8ccZ00qCxQ08HKSMzGrbQnIrg2xWgHUuuWXKYxE3J48fv1/4zVpA96eMQIaUmAlxQYGhvL29iaXgaKu6uvHlwyFbdfkRl5nSJxW5VSVu/4DOOxpy4zKcmKmWIT8zk6NTyUH/44cPuAkVfFwF7cGgZGRa1XvfTGXV/RGfaTLlv8fBS6HoGyI9ntr+pM7K2VQZB7nYO8SsTYqr4LN/0yN9YeP4SJ8JQsOxP9glmL3JbzI925K/Ilx6X5bWPo750fL3x+HHxsgCNTyYNV3tIlgf8/gYUd1p3RNW+tMxU9gT/IWB5vbz97NC9c0MzPXQxNZIgqZ6gaXKiwelArQMk5f3/VBxS4sV2hRup7zRoOhd0WKUj9GukMSjQ2dDIm1534i3s5nUcO1gjl+n/zkxYNbVezKNqQ0GsVAlKTsfNVHVccKnTba4P140bO286GMss5zCLWYihS9lIGF5j42OhdpzlEyWixNiXiS9I6jbWo1IwWi6/FznLGv9f7e8+RzhMYdonY1Qfj7CKESW9g3F+3nGMg+P3KQ8EPl9lG/Iymd3+IcbzUGSKzAGuKdMXg2ozOrq++V0VLj+O/q82Sjr20v5DQ5Sovn4n3/MKWd3uc1L8LzGzopO0h+nRBYp+8xnrULFpOxBI01fqDtPv3QsVFQL7HB5hv621ea/L16EutJ1iHGemH3BNjQGMISoQCNH24e6Y4UlnFhWyls7Sr7rFUIgw4qJlsyx3NJdp104DDlS4PmFArmZZ/eSwRAXln2mTbaQVaSuaOpR9lk5QRQQYKeHzFE+p95UNWSsobn7fAA2KGSvdMfBWVhQxLJCMWRXUHpblgT0EXoyo5GXxzFzTjg0eFmoMK05L3pAEho/lM9YeYkaJBMcCeuGmjKe63tbMwo8h6YaY0UcOzEO205La9XnE6a83CP/OVjHklu1bLX1xJHjN/UMPl+G9jz0s5w9ti1TC3huiUQQii/P6mLMw5Wj4xtifgXCWeJ0qNfChi316NE+RmSlxl0x48pnPuE7epjgKUGLh1OA2AScLffOOrR0tCo0Nlwm0vibJUOtoG7eU/fXwWlvBSVWjfpyLUWZAHxeD5XdNsv8TegsgxrBTi/vh+9woIQgzojjauTqDARIUHo3BS/phVf4YtbzdZ2CKSxt7VLSDIuilzlsDUrqsunJW7QLr3mQ+H9ldjHYdn78f6lNK/OOAut4ZVuXvM6hscRjBxgw8u5y6dmHjPwG/QdyW9tLsv2F3iSvC9fulx7lCLxicw/rGRsl+iWs3vb2ZQRAkOhn7927gOhBSDB9FKlcr/jD1CFcfDrtVH3PJDHiU95J/pIcPA1VXFqusspLCgEYi71BFj4wG2J/lp/4yQVKjRx7ok+1WGdocdeXGGOHr+7rtmstG5YRlnhofGWfhE3ddIydtphNKWr1ewyff/whXs/+QVDiIdT/1TA6uLNzWAgFvxaDbpK7BoyYJYAw0ohNkKH16uZbi1IawFd+M/frJ1EYDnNU25n2qj4ekwFslC9VK6eLex1cZxFnnBE+XMoSjoLndc8JOVEGJ6OB4vhNhpPgcuxAAxlB8vFyplOZ23bG0nESLUlH8/QSYsBdM6dgDslP3CTyzv1X1iCaK5DGauEsZVMMQSymYJoCvebeOA7D9q6kuKg/Rcw5SZPARCGoFVcavYWZ6kwmWM5tr7IDzRNkkUojd/k3U24kjSrWwxhb5OXCBzlnsKYJyrF4TmKEiCesbRrVwjAGK90Vev10CEvOf2rYohJLYTgEyMjJ5Y4g2lWn5p8NqvqyYIwfirYoVCimZPPw+xibicl+rsWBOcnQSp32HC1Y3cm81v4eFkyHoTFM/45ol2kK1vA3OmRLExBaX8prVJ0dsWvnkT9OGHOGGA+YPDOg36Daqwio0NfNuAEiHNLNNTOZgh1hJTuSTlHTBkWhB82pty7QGCu6FwQ9Gf5wSmP7kIxCyUV9tS59K0krN35fsV1CIh49hc2b8ctPDGrgW+HRRrpY5bt4aKvcs1vVRbO1LPEeX/c2CptYTCzm1wDqyKSy4MSOBNZ6XhTFtH0M0EGlO9H8GloYXcDDqxK9hoep/RYIDcGq/MmQdHUfWoUb5QA/ev/hy9frqDC67bmhex6Tk5RA227rrH+HWGH6JyE7u4mm4PNtokJdltRHSnxBDJIYHV+LURzsd3F8jQDTvHIUoFAIkCD46bMu4bOOvQWoAd9ebAhGiyqBimJ2wAqU4Lwtlpz28YQGeYYvLxI9mWcwOGmC691Mb1DhrtNqnhCS27vtETybb/4icZI/UOnHoYQgZdBi1Sot/T+HYCAFQBQfFeF7eJO1Vek+uUnM4B+TuniMHZ8Ddg07SK23RXPCj+DrhEym/quS6VkGevK97YW+8qisd/tstmedzy5O6O7ex/5LisZTMP7M5+gM9heKJSj3IFcxPQpgYyydyX0GtKTxKJhyTlRNFVo+ECbp9vg1GrdHwSuiE2rC5jinvHiHhlQJub3qfMJlS4Y9J303mxirrt6E2euGPhgsLbfSKrPA3yTik419EUyII2DDIC+ew3tVP4D69bIo3H1+re01EIN7CMA1i/LV6IBzw4IK9zaJo/xCsVR1QnIDf6FeOCbxR6FQ8/fBWS1qiLTGKopV0WDwW3GQqONFGhA9+ZkAAAA",up="data:image/webp;base64,UklGRuQEAABXRUJQVlA4INgEAAAwMgCdASraAkwAPolEnEulI6wnoFgJSYARCWluCv+9wf/5wfXooaOTIArgRthwcxwe6p02yl7NNWTrxBF+2eX+v/0ZsgL/3ANxaYHcG/GVoVGNKmJ7J5dufJF4wtuvDOPRV92szkn8kntNVaj7hZCZPJ4UE76Ptn7NW9BaqVLrbUe35LenGfkmdSAmYWtPJz3JU9E/raG6fObpPQyP5N5R0WSX94My7Hh4HW3Yxlr97c0xQqdCfhqtwKVfp7K+zChWIIzPFMDwvkEVq33FAqAeWTWrVa40W62O2hrDB6ZL1U7tlxLt7325ObNRWnHe3XQzsHBKgtN4KjG0HBhifeZoYTK2nhwUdehpXouLgSKTXZL/v69jwllV9+/bz2t+7Dxq+Mya6HdWKpart+Z/tm0UgpShicDyPA+Kr3080/MkC4ineGxflDF3GawjXYfuAEswZpSMFKmsmKQDqFm5CRzSRH0DrjMGqTziMx/aVSZBDd6NKbDGYbQaT0KdyGxAGAGqMmuBy/P+qWfS9FPbkaY9OQfP1gRajTObAAD9pl3mU/DkD+1lpvfyB+VTd7MYptr3Ap3432QsRUgn+FrrKt8n0xDZoy8iTPvjeVy10+7BMPexT1a1AU2dZkSSszNMhFv8v8jnR5v3Xn5jBcqj7U229AHTlwSZpKUZIYs7ysJLPDJMel520QnLUEi8l4mPXFE4skzJAHCCckD+yyrAo/l3hobXi7cDmOr8esrUEDUvTPjrl7XEoUh7amMlAOxQvCWOftz/BsDf28nkJgW4OhCCJeUhykWoo/VGOQBVjai4HKsCA8Ss/B1eetJYhR4fLl07Jq25BQb3Sdbf5b/s6HMFRAsokU2+o8MbP8YINkJiNb4v6CcFfdV/eQUVr6/NAal2IoHmBEmi2BjspPf/KuUQBbyZuGx6HxXip+SynOJnhYYinLJPhUNkqw6SKgJ9BdMZ0LihR3PmYRJhIC9hwCiVzZeT19Fqs9Vo5n267BsvAOFc9uXwENvYuFxdI3fQ488zi7irnzQB2DwtkgGAT8iNwbbSNVWkjWpQtOZaaLjttCEm/F2yJ9zT2hc+hm1kE6udkpqan7ICQ+9lwlPf297iMLV0g9fkB0CvOzrUp61otptnr5HbfjxLfTM9kJ2vl5/ELueEaz29CEufGQJ/xvBtBoHjkyMlzIv+DFHsxy99MfRiZKYupMZtbLyjBUcfP1BpKDxM6sIiBBqyQtGOmm3lWhwr3HJ/liH8IK7Ft5wmu9Dz08zuUg9lz/Ajq3Kx4bNjmK8PjFPlT2NKHZ0PcNIfEvDxx0bpf5I3RTF6LviGrb6X2sOYkczfQALn/g+5jRFeXtcHncLR1xqN3G72LwNzaticBRKMZysHRMTkPria5mgxaAAVf88/e48gzvPjjiegFBu3MXLWdjTOnHK+BFkBBHWHqfraHUFmycrqXtFIH8FBlsIKyGFbzLRaJ0xoOfu29T/d9q/8hq7POGxeWZsUiDi2Cuvcl3gQyjGPaGw5jcBrewE2O4cR7SPYooUoIobgc2zyGANGzxG6zcFqw7hZ5YomhTeJLQ3EFH+gI9ZMoaqZCXqjbenfuz8XSXMVgsG8IFDO2YQAsQzHwv61hteyVEhvcZHppUU7jhRuy+FeqW2UR+OSAAAA";var ve=Math.PI,Hn=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),on=(i,e,t)=>i+(e-i)*t,Fi=(i,e,t)=>{let n=Hn((t-i)/(e-i));return n*n*(3-2*n)},Ys=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,dp=i=>1-(1-i)**3,mi=(i,e,t,n)=>e+(i-e)*Math.exp(-t*n),pu=()=>new Promise(i=>setTimeout(i)),_n=7.8,qn=1.5,Ay=.17,fp=30,mu=1.3,Mc=.16,gu={Hard:{depth:.08,radius:.85,k:250,c:27,crown:.018},Medium:{depth:.16,radius:1,k:130,c:15,crown:.045},Soft:{depth:.3,radius:1.2,k:72,c:8,crown:.08}},un=i=>()=>{i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296};function ao(i,e,t,n){let s=un(n),r=new Float32Array(e*t);for(let a=0;a<r.length;a++)r[a]=s();let o=new Float32Array(i*i);for(let a=0;a<i;a++){let l=a/i*t,c=l|0,h=(c+1)%t,u=l-c;u=u*u*(3-2*u);for(let d=0;d<i;d++){let p=d/i*e,m=p|0,T=(m+1)%e,g=p-m;g=g*g*(3-2*g);let _=r[c*e+m],M=r[c*e+T],E=r[h*e+m],v=r[h*e+T];o[a*i+d]=_+(M-_)*g+(E-_)*u+(_-M-E+v)*g*u}}return o}function Su(i,e,t){let n=new Uint8Array(e*e*4);for(let s=0,r=0;s<e;s++){let o=(s+e-1)%e*e,a=(s+1)%e*e,l=s*e;for(let c=0;c<e;c++,r+=4){let h=i[l+(c+e-1)%e],u=i[l+(c+1)%e],d=i[o+c],p=i[a+c],m=(h-u)*t,T=(d-p)*t,g=1/Math.sqrt(m*m+T*T+1);n[r]=(m*g*.5+.5)*255,n[r+1]=(T*g*.5+.5)*255,n[r+2]=(g*.5+.5)*255,n[r+3]=255}}return n}var Zs=8;function Mu(i,e,t){let n=new Xr(i,e,e,Ai);return n.wrapS=n.wrapT=si,n.magFilter=Wn,n.minFilter=Zi,n.generateMipmaps=!0,n.anisotropy=Zs,t&&(n.colorSpace=bn),n.needsUpdate=!0,n}function pp(i,e){let t=new Float32Array(i*i),n=ao(i,10,e.threads,11),s=ao(i,e.threads,10,23),r=ao(i,e.threads,e.threads,5),o=ao(i,12,12,7);for(let a=0,l=0;a<i;a++){let c=a/i;for(let h=0;h<i;h++,l++){let u=h/i,d=(u+c)*e.cells,p=(u-c)*e.cells,m=Math.abs(Math.sin(ve*d)),T=Math.abs(Math.sin(ve*p)),g=(m*T)**e.round,_=Math.min(m,T),E=((m<T?p:d)*e.stitches%1+1)%1<.6?1:0,v=1-Fi(0,e.seam,_),P=1-Fi(.05,.24,Math.hypot(m,T)),C=n[l]*.5+s[l]*.5;t[l]=g+v*E*.018+P*.1*(e.tuft??1)+(o[l]-.5)*.05+(C-.5)*.011+(r[l]-.5)*.0016}}return Mu(Su(t,i,e.normal),i,!1)}function mp(i,e,t,n){let s=new Float32Array(i*i);return t.forEach(([r,o,a],l)=>{let c=ao(i,r,o,n+l);for(let h=0;h<s.length;h++)s[h]+=c[h]*a}),Mu(Su(s,i,e),i,!1)}function Ey(i,e){let t=new Float32Array(i*i),n=ao(i,48,48,81);for(let s=0,r=0;s<i;s++)for(let o=0;o<i;o++,r++)t[r]=Math.sin(2*ve*o/i*e)*Math.sin(2*ve*s/i*e)*.5+(n[r]-.5)*.08;return Mu(Su(t,i,9),i,!1)}function gp(i,e,t){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createRadialGradient(i/2,i/2,i*e,i/2,i/2,i*t);return r.addColorStop(0,"#fff"),r.addColorStop(.55,"#888"),r.addColorStop(1,"#000"),s.fillStyle=r,s.fillRect(0,0,i,i),new ri(n)}var _p=i=>new Promise(e=>{let t=new Image;t.onload=()=>{let n=new Xn(t);n.wrapS=n.wrapT=si,n.colorSpace=bn,n.anisotropy=Zs,n.needsUpdate=!0,e(n)},t.src=i});function vu(i,e,t){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d");e(s,i);let r=new ri(n);return r.wrapS=r.wrapT=si,r.colorSpace=bn,r.anisotropy=Zs,r.repeat.set(t,t),r}function Ui(i,e,t,n,s,r){for(let o of[-e,0,e])for(let a of[-e,0,e]){let l=t+o,c=n+a;l+s<0||l-s>e||c+s<0||c-s>e||(i.save(),i.translate(l,c),r(i),i.restore())}}function Ei(i,e,t,n=.05){i.fillStyle=t,i.fillRect(0,0,e,e);let s=un(9),r=Math.max(2,e/512);for(let o=0;o<e;o+=r)i.fillStyle=`rgba(0,0,0,${(s()*n).toFixed(3)})`,i.fillRect(0,o,e,r/2),i.fillStyle=`rgba(255,255,255,${(s()*n).toFixed(3)})`,i.fillRect(o,0,r/2,e)}var xp=(i,e,t)=>{i.beginPath(),i.moveTo(0,0),i.bezierCurveTo(t,-e*.25,t*.8,-e*.75,0,-e),i.bezierCurveTo(-t*.8,-e*.75,-t,-e*.25,0,0),i.closePath()},yp=(i,e,t,n)=>{i.beginPath(),i.moveTo(0,0),i.lineTo(0,-e*.97);for(let s=1;s<n;s++){let r=-e*s/n,o=t*Math.sin(ve*s/n)*.85;i.moveTo(0,r+e*.03),i.lineTo(o,r-e*.07),i.moveTo(0,r+e*.03),i.lineTo(-o,r-e*.07)}};function Cy(i,e){let t="rgba(234,245,251,.96)";i.fillStyle=t,i.beginPath(),i.arc(0,0,e,0,ve*2),i.fill(),i.fillStyle="#2b4fbd",i.beginPath(),i.arc(0,0,e*.8,0,ve*2),i.fill(),i.fillStyle=t;for(let n=0;n<16;n++){let s=n/16*ve*2;i.beginPath(),i.ellipse(Math.cos(s)*e*.62,Math.sin(s)*e*.62,e*.16,e*.07,s,0,ve*2),i.fill()}i.strokeStyle="rgba(118,201,219,.95)",i.lineWidth=e*.05,i.beginPath(),i.arc(0,0,e*.4,0,ve*2),i.stroke(),i.fillStyle=t,i.beginPath(),i.arc(0,0,e*.2,0,ve*2),i.fill()}function Ry(i,e){let t=["#f47a35","#ff9d5c","#e5506b","#f6c344"];for(let n=0;n<6;n++)i.save(),i.rotate(n/6*ve*2),i.fillStyle=t[n%t.length],i.beginPath(),i.moveTo(0,0),i.lineTo(e*.22,-e*.5),i.lineTo(0,-e),i.lineTo(-e*.22,-e*.5),i.closePath(),i.fill(),i.restore();i.fillStyle="#3a1f2b",i.beginPath(),i.arc(0,0,e*.12,0,ve*2),i.fill()}function _u(i,e,t){i.strokeStyle=t,i.fillStyle=t,i.lineWidth=e*.05;for(let n=0;n<8;n++)i.save(),i.rotate(n/8*ve*2),i.beginPath(),i.ellipse(0,-e*.42,e*.14,e*.3,0,0,ve*2),i.stroke(),i.restore();i.beginPath(),i.arc(0,0,e*.16,0,ve*2),i.fill();for(let n=0;n<4;n++)i.save(),i.rotate(n/4*ve*2+ve/4),i.beginPath(),i.moveTo(0,-e*.72),i.bezierCurveTo(e*.4,-e*.86,e*.34,-e*1.14,0,-e*1.02),i.stroke(),i.beginPath(),i.moveTo(0,-e*.72),i.bezierCurveTo(-e*.4,-e*.86,-e*.34,-e*1.14,0,-e*1.02),i.stroke(),i.restore()}function Py(i,e,t){i.strokeStyle=t,i.lineWidth=e*.055;for(let n=0;n<8;n++){let s=n/8*ve*2;i.beginPath(),i.arc(Math.cos(s)*e*.55,Math.sin(s)*e*.55,e*.42,0,ve*2),i.stroke()}i.beginPath(),i.arc(0,0,e*.2,0,ve*2),i.stroke()}function Iy(i,e,t){i.strokeStyle=t,i.lineCap="round",i.lineWidth=e*.02,i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(e*.12,-e*.5,0,-e),i.stroke(),i.lineWidth=e*.014,i.beginPath();for(let n=1;n<24;n++){let s=n/24,r=-e*s,o=e*.12*Math.sin(ve*s)*.9,a=e*.34*Math.sin(ve*(s*.82+.1));i.moveTo(o,r),i.lineTo(o+a,r-a*.5),i.moveTo(o,r),i.lineTo(o-a,r-a*.5)}i.stroke()}function vp(i,e,t,n,s,r){i.strokeStyle=t,i.lineWidth=r,i.lineCap="round";for(let o=0;o<n;o++){let a=(o+.5)*e/n;i.beginPath();for(let l=0;l<=e;l+=4){let c=a+Math.sin(l/e*ve*4+o*.9)*e*s;l?i.lineTo(l,c):i.moveTo(l,c)}i.stroke()}}function Ly(i,e,t,n){Ei(i,e,t,.02);let s=4,r=e/s;i.strokeStyle=n,i.lineWidth=e*.007;for(let o=0;o<s;o++)for(let a=0;a<s;a++){let l=(a+.5)*r,c=(o+.5)*r,h=r*.5;for(let u=1;u<=4;u++){let d=h*u/4;i.beginPath();for(let p=0;p<=6;p++){let m=p/6*ve*2+ve/6,T=l+Math.cos(m)*d,g=c+Math.sin(m)*d;p?i.lineTo(T,g):i.moveTo(T,g)}i.stroke()}}}function Dy(i,e,t,n,s){Ei(i,e,t,.05);let r=4,o=e/r,a=(l,c)=>{let h=Math.round((l%e+e)%e/(o/2))%(r*2),u=Math.round((c%e+e)%e/(o/2))%(r*2);return un(h*31+u*7+3)()<.34};i.fillStyle=s;for(let l=-r;l<r*2;l++)for(let c=-r;c<r*2;c++){let h=(l+c+1)/2*o,u=(c-l)/2*o;h<-o||h>e+o||u<-o||u>e+o||!a(h,u)||(i.beginPath(),i.moveTo(h,u-o/2),i.lineTo(h+o/2,u),i.lineTo(h,u+o/2),i.lineTo(h-o/2,u),i.closePath(),i.fill())}i.strokeStyle=n,i.lineWidth=e*.008;for(let l=-r;l<=r*2;l++)i.beginPath(),i.moveTo(l*o,0),i.lineTo(l*o+e,e),i.stroke(),i.beginPath(),i.moveTo(l*o,0),i.lineTo(l*o-e,e),i.stroke()}var ua={eco:{top:(i,e)=>{Ei(i,e,"#2346ad",.06),[[.2,.25,.4],[.7,.6,1.9],[.45,.9,2.6]].forEach(([n,s,r])=>Ui(i,e,n*e,s*e,e*.28,o=>{o.rotate(r),o.fillStyle="rgba(104,201,212,.55)",o.beginPath(),o.ellipse(0,0,e*.26,e*.13,0,0,ve*2),o.fill()})),[[.25,.3,.16],[.76,.18,.13],[.58,.7,.17],[.06,.8,.12]].forEach(([n,s,r])=>Ui(i,e,n*e,s*e,e*r,o=>Cy(o,e*r)))},side:(i,e)=>{Ei(i,e,"#f2f5fb",.03);let t=6,n=e/t;i.fillStyle="#2b4fbd";for(let s=0;s<t;s++)for(let r=0;r<=t;r++)i.beginPath(),i.arc((r+s%2*.5)*n,(s+.5)*n,n*.2,0,ve*2),i.fill()},rep:[.32,1.1],quilt:!1,dark:!0,piping:"#f2f5fb",under:"#c9ccd6",label:["#ffffff","#2b4fbd"]},plush:{top:(i,e)=>{Ei(i,e,"#1b3488",.07),[[.24,.36,.4],[.73,.3,-.9],[.5,.82,2.2],[.96,.74,1.2]].forEach(([n,s,r])=>Ui(i,e,n*e,s*e,e*.34,o=>{o.rotate(r),o.strokeStyle="rgba(176,198,240,.9)",o.lineWidth=e*.006,xp(o,e*.3,e*.11),o.stroke(),o.lineWidth=e*.003,yp(o,e*.3,e*.11,9),o.stroke()}));let t=un(44);i.fillStyle="rgba(255,255,255,.08)";for(let n=0;n<2600;n++)i.fillRect(t()*e,t()*e,2,2)},rep:[.36,.5],quilt:!1,dark:!0,piping:"#eef0f7",under:"#1d2f6e",label:["#f3efe4","#223f98"]},vento:{top:(i,e)=>{Ei(i,e,"#132a4c",.05);let t=un(52),n=["#1d6f57","#2c9a6c","#4fb983","#0f5651","#3d8f5c"],s=[],r=[];for(let o=0;o<16;o++){let a=e*(.12+t()*.12);s.push([t()*e,t()*e,t()*ve*2,a,n[o%n.length]])}for(let o=0;o<7;o++)r.push([t()*e,t()*e,t()*ve*2]);s.forEach(([o,a,l,c,h])=>Ui(i,e,o,a,c,u=>{u.rotate(l),u.fillStyle=h,xp(u,c,c*.38),u.fill(),u.strokeStyle="rgba(8,40,34,.55)",u.lineWidth=e*.0022,yp(u,c,c*.38,7),u.stroke()})),r.forEach(([o,a,l])=>Ui(i,e,o,a,e*.07,c=>{c.rotate(l),Ry(c,e*.055)}))},rep:[.34,.45],quilt:!1,dark:!0,piping:"#132a4c",under:"#10223e",label:["#f2c14e","#132a4c"]},aura:{top:(i,e)=>{Ei(i,e,"#f6f5f1",.025),[[.25,.25],[.75,.75]].forEach(([t,n])=>Ui(i,e,t*e,n*e,e*.2,s=>_u(s,e*.16,"#6f727b"))),[[.75,.25],[.25,.75]].forEach(([t,n])=>Ui(i,e,t*e,n*e,e*.09,s=>_u(s,e*.065,"#8d9097")))},side:(i,e)=>{Ei(i,e,"#f4f3ef",.025);for(let t=0;t<3;t++)Ui(i,e,(t+.5)*e/3,e*.5,e*.14,n=>_u(n,e*.1,"#9d9fa6"))},rep:[.6,.8],quilt:!0,piping:"#e2e1dc",under:"#cfcdc6",label:["#1d2b5e","#e9ecf5"]},"imperio-white":{top:(i,e)=>{Ei(i,e,"#f7f6f2",.02);let t=un(61),n=[];for(let s=0;s<5;s++)n.push([t()*e,t()*e,e*(.1+t()*.1),t()*ve*2]);i.strokeStyle="rgba(128,128,140,.6)",i.lineWidth=e*.011,n.forEach(([s,r,o,a])=>Ui(i,e,s,r,o*1.1,l=>{l.rotate(a);for(let c=0;c<3;c++)l.beginPath(),l.arc(0,0,o*(1-c*.26),0,ve*1.35),l.stroke()}))},side:(i,e)=>Ly(i,e,"#ecebe7","#9c9ca5"),rep:[.32,.9],quilt:!0,piping:"#e6e2d4",under:"#cdcac2",label:["#2b47a8","#ffffff"]},"imperio-blue":{top:(i,e)=>Dy(i,e,"#1b2d68","#3f66c8","rgba(138,166,234,.45)"),rep:[.9,1.2],quilt:!1,dark:!0,piping:"#eef0f6",under:"#172656",label:["#ffffff","#1b2d68"]},"camellia-pt":{top:(i,e)=>{Ei(i,e,"#f8f7f3",.02),vp(i,e,"rgba(118,118,126,.95)",3,.06,e*.02)},side:(i,e)=>{Ei(i,e,"#f5f4ef",.02),vp(i,e,"rgba(176,176,184,.95)",5,.04,e*.016)},rep:[.5,1],quilt:!0,piping:"#ece4cb",under:"#d3cfc4",label:["#b98b3f","#fffaf0"],topper:"pillow"},"camellia-et":{top:(i,e)=>{Ei(i,e,"#f7f6f4",.02),[[.25,.25,.14,"#9893b3"],[.75,.75,.14,"#9893b3"],[.75,.25,.08,"#aeaac4"],[.25,.75,.08,"#aeaac4"]].forEach(([t,n,s,r])=>Ui(i,e,t*e,n*e,e*s*1.1,o=>Py(o,e*s,r)))},rep:[.75,.9],quilt:!0,piping:"#e8e1cb",under:"#d3cfc4",label:["#24305f","#f2efe6"],topper:"euro"},emma:{top:(i,e)=>{Ei(i,e,"#edf3ea",.025),[[.2,.4,.5,"#6f757c"],[.7,.2,2.4,"#7fa66c"],[.55,.72,-.7,"#6f757c"],[.08,.92,1.6,"#7fa66c"],[.9,.62,3.6,"#80868d"]].forEach(([t,n,s,r])=>Ui(i,e,t*e,n*e,e*.34,o=>{o.rotate(s),Iy(o,e*.32,r)}))},rep:[.36,.5],quilt:!1,piping:"#e6e4d4",under:"#cfd3cb",label:["#2f5d34","#f4f1e4"]}};function Ny(i,e,t,n){let s=[];for(let r=0;r<t;r++)s.push(-(i-e+e*Math.tan((t-r)/t*ve/4)));for(let r=0;r<=n;r++)s.push(-(i-e)+2*(i-e)*r/n);for(let r=1;r<=t;r++)s.push(i-e+e*Math.tan(r/t*ve/4));return s}var xu=[{n:[0,1,0],u:0,v:2,g:0},{n:[0,-1,0],u:0,v:2,g:2},{n:[0,0,1],u:0,v:1,g:1},{n:[0,0,-1],u:0,v:1,g:1},{n:[1,0,0],u:2,v:1,g:1},{n:[-1,0,0],u:2,v:1,g:1}],fa=class{constructor({cs:e=3,seg:t=[1,1,1],groups:n=!1}){this.cs=e,this.seg=t;let s=xu.map(l=>[e*2+t[l.u]+1,e*2+t[l.v]+1]),r=s.reduce((l,[c,h])=>l+c*h,0),o=[];this.geometry=new gn;let a=0;xu.forEach((l,c)=>{let[h,u]=s[c],d=o.length,p=(l.u===0&&l.v===2?1:0)^(l.n[0]+l.n[1]+l.n[2]<0?1:0)^(l.u===2?1:0);for(let m=0;m<u-1;m++)for(let T=0;T<h-1;T++){let g=a+m*h+T,_=g+1,M=g+h,E=M+1;p?o.push(g,M,_,_,M,E):o.push(g,_,M,_,E,M)}n&&this.geometry.addGroup(d,o.length-d,l.g),a+=h*u}),this.geometry.setIndex(o),this.pos=new Float32Array(r*3),this.nor=new Float32Array(r*3),this.uvs=new Float32Array(r*2),this.geometry.setAttribute("position",new Yt(this.pos,3)),this.geometry.setAttribute("normal",new Yt(this.nor,3)),this.geometry.setAttribute("uv",new Yt(this.uvs,2))}fill(e,t,n,s,r={},o=[1,1,1]){let a=[e/2,t/2,n/2],{pos:l,nor:c,uvs:h,cs:u,seg:d}=this,p=a.map((C,y)=>Ny(C,s,u,d[y])),m=r.crown||0,T=r.bulge||0,g=r.sag||0,_=a[0],M=a[2],E=a[1],v=0;for(let C of xu){let y=3-C.u-C.v,A=C.n[y],G=o[C.g];for(let F of p[C.v])for(let z of p[C.u]){let q=[0,0,0];q[C.u]=z,q[C.v]=F,q[y]=A*a[y];let j=q.map((qe,re)=>Hn(qe,-(a[re]-s),a[re]-s)),D=q[0]-j[0],J=q[1]-j[1],ee=q[2]-j[2],X=1/(Math.sqrt(D*D+J*J+ee*ee)||1);D*=X,J*=X,ee*=X;let xe=j[0]+D*s,ne=j[1]+J*s,he=j[2]+ee*s;if(m||T||g){let qe=xe/_,re=he/M,Oe=Fi(-E*.4,E,ne),me=1-qe**4,Ge=1-re**4;ne+=m*me*Ge*Oe-g*qe*qe;let Fe=Math.cos(ne/E*ve/2)*T;xe+=Fe*Math.sign(xe)*Fi(.7,1,Math.abs(qe)),he+=Fe*Math.sign(he)*Fi(.8,1,Math.abs(re)),D+=4*m*qe**3*Ge*Oe/_,ee+=4*m*re**3*me*Oe/M;let et=1/Math.sqrt(D*D+J*J+ee*ee);D*=et,J*=et,ee*=et}let fe=v*3,Xe=v*2;l[fe]=xe,l[fe+1]=ne,l[fe+2]=he,c[fe]=D,c[fe+1]=J,c[fe+2]=ee,h[Xe]=z/(G[0]??G),h[Xe+1]=F/(G[1]??G),v++}}let P=this.geometry;return P.attributes.position.needsUpdate=!0,P.attributes.normal.needsUpdate=!0,P.attributes.uv.needsUpdate=!0,P.computeBoundingSphere(),this}},gi=(i,e,t,n,s={})=>new fa({cs:s.cs??2,seg:s.seg??[8,1,12],groups:!!s.groups}).fill(i,e,t,n,s.shape,s.tile??[1,1,1]),Tc=class extends Qn{constructor(e,t,n){super(),this.w=e,this.d=t,this.r=n}getPoint(e,t=new N){let{w:n,d:s,r}=this,o=n-2*r,a=s-2*r,l=ve*r/2,c=2*(o+a)+4*l,h=(e%1+1)%1*c,u=n/2-r,d=s/2-r,p=[[o,m=>t.set(-u+m*o,0,d+r)],[l,m=>t.set(u+Math.sin(m*ve/2)*r,0,d+Math.cos(m*ve/2)*r)],[a,m=>t.set(u+r,0,d-m*a)],[l,m=>t.set(u+Math.cos(m*ve/2)*r,0,-d-Math.sin(m*ve/2)*r)],[o,m=>t.set(u-m*o,0,-d-r)],[l,m=>t.set(-u-Math.sin(m*ve/2)*r,0,-d-Math.cos(m*ve/2)*r)],[a,m=>t.set(-u-r,0,-d+m*a)],[l,m=>t.set(-u-Math.cos(m*ve/2)*r,0,d+Math.sin(m*ve/2)*r)]];for(let[m,T]of p){if(h<=m)return T(h/m),t;h-=m}return t}},da={uDentA:{value:new dn(0,0,0,1)},uTopY:{value:qn+.7},uRange:{value:.5}};function yu(i){return i.onBeforeCompile=e=>{Object.assign(e.uniforms,da),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
        uniform vec4 uDentA; uniform float uTopY, uRange;
        vec3 dentAt(vec4 d, vec3 p){ vec2 q = p.xz - d.xy; float g = exp(-dot(q, q) / (d.w * d.w)); return vec3(d.z * g, 2.0 * d.z * g * q / (d.w * d.w)); }`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        vec4 dentP = modelMatrix * vec4(position, 1.0);
        float dentMask = smoothstep(uTopY - uRange, uTopY - 0.05, dentP.y);
        vec3 dentS = dentAt(uDentA, dentP.xyz);
        objectNormal = normalize(objectNormal - vec3(dentS.y, 0.0, dentS.z) * dentMask);`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.y -= dentS.x * dentMask;`)},i.customProgramCacheKey=()=>"ec-dent",i}function Uy(){let i=new Jr({side:ln});return i.onBeforeCompile=e=>{Object.assign(e.uniforms,da),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
        uniform vec4 uDentA; uniform float uTopY, uRange;
        float dentAt(vec4 d, vec3 p){ vec2 q = p.xz - d.xy; return d.z * exp(-dot(q, q) / (d.w * d.w)); }`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec4 dentP = modelMatrix * vec4(position, 1.0);
        transformed.y -= dentAt(uDentA, dentP.xyz) * smoothstep(uTopY - uRange, uTopY - 0.05, dentP.y);`)},i.customProgramCacheKey=()=>"ec-dent-depth",i}function Sp(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}var bc=null;function Mp(i){return bc||(bc=(async()=>{let e=i?512:1024,t=pp(e,{cells:2,round:.42,seam:.13,stitches:12,normal:i?20:40,threads:i?96:190,tuft:.35});await pu();let n=pp(e,{cells:1,round:.5,seam:.075,stitches:22,normal:i?34:68,threads:i?96:190,tuft:1.3});await pu();let s=mp(256,2.2,[[96,96,.7],[40,40,.5]],40),r=mp(256,1.5,[[256,10,.5],[10,256,.5],[64,64,.2]],70),o=Ey(256,4),a=vu(512,(h,u)=>{h.fillStyle="#a8a294",h.fillRect(0,0,u,u);let d=un(17),p=["#d9c27a","#7fa36b","#c96f63","#6b8cc7","#e6e1d3","#8c8c8c","#b9a27d","#f0e7c9","#6d6d64","#d08f4a","#cfd6e3"];for(let m=0;m<1500;m++){let T=d()*u,g=d()*u,_=3+d()*11,M=4+(d()*3|0),E=d()*ve,v=p[d()*p.length|0],P=[];for(let C=0;C<M;C++){let y=E+C/M*ve*2,A=_*(.6+d()*.5);P.push([Math.cos(y)*A,Math.sin(y)*A])}Ui(h,u,T,g,_*1.2,C=>{C.fillStyle=v,C.beginPath(),P.forEach(([y,A],G)=>G?C.lineTo(y,A):C.moveTo(y,A)),C.closePath(),C.fill()})}},1.4);await pu();let[l,c]=await Promise.all([_p(hp),_p(up)]);return l.wrapS=l.wrapT=c.wrapS=c.wrapT=Br,{N:e,topQ:t,sideQ:n,pore:s,weave:r,egg:o,chips:a,oakRail:l,oakPlank:c}})(),bc)}function bp(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,.5)"),t.addColorStop(.5,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),i}async function Fy(i,e){let t=matchMedia("(prefers-reduced-motion: reduce)").matches,n=Math.min(innerWidth,innerHeight)<600,s;try{s=new ca({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(f){return e.onFail?.(f),null}s.setPixelRatio(Math.min(devicePixelRatio||1,n?1.75:2)),s.toneMapping=no,s.toneMappingExposure=1,s.shadowMap.enabled=!0,s.shadowMap.type=Hs,Zs=Math.min(12,s.capabilities.getMaxAnisotropy());let r=new Ns,o=new Un(fp,1.6,2,260),a=new di(new N(0,1,0),-(qn+.7));{let f=new Ns,x=new fr(s);f.background=new Ke("#1b2340");let w=(I,B,Y,V,Q,oe,pe)=>{let Te=new ct(new Pt(Y,V),new Vn({color:new Ke(I).multiplyScalar(B),side:ln}));Te.position.set(Q,oe,pe),Te.lookAt(0,0,0),f.add(Te)};w("#ffcf9a",7,9,9,-14,8,7),w("#9db8ff",5,7,14,15,6,-7),w("#ffe9d4",1.6,26,12,0,16,2),w("#39456f",1.2,40,40,0,-10,0),r.environment=x.fromScene(f,.05).texture,r.environmentIntensity=.4,x.dispose()}let{N:l,topQ:c,sideQ:h,pore:u,weave:d,egg:p,chips:m,oakRail:T,oakPlank:g}=await Mp(n),_=(f={})=>new oi({roughness:.92,sheen:1,sheenRoughness:.55,sheenColor:new Ke("#fff6ec"),normalScale:new ge(.62,.62),side:ln,shadowSide:ln,...f}),M=(f,x={})=>new ft({color:f,roughness:.94,normalMap:u,...x}),E=new ri(document.createElement("canvas")),v={top:yu(_({map:E,normalMap:c})),side:yu(_({map:E,normalMap:h})),under:new ft({color:"#c9c7c0",roughness:1,side:ln}),piping:yu(new oi({color:"#dddcd8",roughness:.7,sheen:.6,sheenRoughness:.6})),foam22:M("#f4f2ea"),foam25:M("#efe7d3"),foam30:M("#e4d8bb"),hd:M("#e3eaf1"),memory:M("#e8bf78"),pu:M("#e2efe4"),profile:M("#f3f1e9",{normalMap:p,normalScale:new ge(1.5,1.5)}),rebond:M("#ffffff",{map:m}),zoneSoft:M("#f4f1e7"),zoneFirm:M("#cfb98a"),oak:new ft({map:T,roughness:.5,color:new Ke(1.5,1.42,1.32)}),plank:new ft({map:g,roughness:.55,color:new Ke(1.02,.98,.94)}),iron:new ft({color:"#17181c",roughness:.5}),pillow:new oi({color:"#f4f2ec",roughness:1,sheen:1,sheenRoughness:.7,sheenColor:new Ke("#ffffff"),normalMap:u,normalScale:new ge(.25,.25)})},P=new qt;r.add(P);let C=Uy();{let f=document.createElement("canvas");f.width=f.height=256;let x=f.getContext("2d");x.filter="blur(22px)",x.fillStyle="#000",x.fillRect(50,50,156,156);let w=new ct(new Pt(1,1),new Vn({map:new ri(f),transparent:!0,opacity:.55,depthWrite:!1}));w.rotation.x=-ve/2,w.position.y=.012,w.scale.set(11,13,1),P.add(w),P.contact=w}let y=new qt;P.add(y);let A=(f,x,w,I,B,Y=y,V=!0)=>{let Q=new ct(f,x);return Q.position.set(w,I,B),Q.castShadow=V,Q.receiveShadow=!0,Y.add(Q),Q},G=.68,F=.19,z=qn-G/2,q=gi(1,G,F,.025,{seg:[1,1,1],tile:[[1,.74],[1,.74],[1,.74]]}).geometry,j=gi(F,G,_n+.44,.025,{seg:[1,1,8],tile:[[1,.74],[8.3,.74],[1,.74]]}).geometry,D=A(q,v.oak,0,z,_n/2+.12),J=A(q,v.oak,0,z,-_n/2-.12),ee=[A(j,v.oak,0,z,0),A(j,v.oak,0,z,0)],X=new Dn(.13,.075,qn-G+.1,4,1);X.rotateY(ve/4);let xe=[-1,1].flatMap(f=>[-1,1].map(x=>{let w=A(X,v.oak,0,(qn-G+.1)/2,x*(_n/2+.1));return w.userData.sx=f,w}));[-.34,.34].forEach(f=>A(new Dn(.06,.06,qn-G,16),v.iron,f*.9,(qn-G)/2,_n*.22)),[-.34,.34].forEach(f=>A(new Dn(.06,.06,qn-G,16),v.iron,f*.9,(qn-G)/2,-_n*.22));let ne=gi(1,.05,.32,.015,{seg:[1,1,1]}).geometry,he=Array.from({length:11},(f,x)=>A(ne,v.oak,0,qn-.04,-_n/2+.35+x*(_n-.7)/10)),fe=2.75,Xe=1,qe=new Xi;{let x=Xe/2,w=fe,I=.36;qe.moveTo(-x,0),qe.lineTo(x,0),qe.lineTo(x,w-I),qe.absellipse(x-.055,w-I,.055,I,0,ve/2,!1,0),qe.lineTo(-x+.055,w),qe.absellipse(-x+.055,w-I,.055,I,ve/2,ve,!1,0),qe.lineTo(-x,0)}let re=new Bs(qe,{depth:.13,bevelEnabled:!0,bevelThickness:.03,bevelSize:.012,bevelSegments:3,curveSegments:24}),Oe=A(re,v.plank,0,qn-.35,-_n/2-.37),me=-_n/2-.75,Ge=(f,x,w,I=!0)=>{let B=document.createElement("canvas");B.width=f,B.height=x,w(B.getContext("2d"),f,x);let Y=new ri(B);return I&&(Y.colorSpace=bn),Y.anisotropy=Zs,Y},Fe=new ri(bp());Fe.colorSpace=bn;let et=[],Qt=(f,x,w,I,B,Y,V)=>{let Q=new nr(new Fs({map:Fe,color:x,transparent:!0,opacity:I,blending:Yi,depthWrite:!1,toneMapped:!1}));return Q.scale.set(w,w,1),Q.position.set(B,Y,V),Q.userData.o=I,f.add(Q),et.push(Q),Q},it=(f,x,w)=>new Vn({map:f,color:x,transparent:!0,opacity:w,blending:Yi,depthWrite:!1,toneMapped:!1}),pt=f=>new Vn({color:new Ke(f).multiplyScalar(1.6),toneMapped:!1}),Le=(f,x,w,I=0,B=0,Y=0,V=!0)=>{let Q=new ct(f,x);return Q.position.set(I,B,Y),Q.castShadow=V,Q.receiveShadow=!0,w.add(Q),Q},ue=(f,x=32)=>new sr(f.map(([w,I])=>new ge(w,I)),x),we=new ft({color:"#c09a5f",roughness:.28,metalness:.9}),Ce=new ft({color:"#17171a",roughness:.42,metalness:.2}),Je=new oi({color:"#f3f1ec",roughness:.3,clearcoat:.5}),De=new qt,je=new qt;r.add(De,je);let Ve=new qt;De.add(Ve);let gt=new qt,wt=new qt;P.add(gt,wt);let Mt=new qt,O=new qt,Bt=new qt;gt.add(Mt,O),wt.add(Bt);let _t=[],Gt=f=>{let x=Ge(512,512,(w,I,B)=>{w.fillStyle="#fff",w.fillRect(0,0,I,B);let Y=un(3);for(let V=0;V<700;V++){let Q=Y()*I,oe=Y()*B,pe=8+Y()*30,Te=(Y()*.02).toFixed(3);for(let Ye of Q<pe?[0,I]:Q>I-pe?[0,-I]:[0])for(let Rt of oe<pe?[0,B]:oe>B-pe?[0,-B]:[0]){let Kt=w.createRadialGradient(Q+Ye,oe+Rt,0,Q+Ye,oe+Rt,pe);Kt.addColorStop(0,`rgba(0,0,0,${Te})`),Kt.addColorStop(1,"rgba(0,0,0,0)"),w.fillStyle=Kt,w.fillRect(Q+Ye-pe,oe+Rt-pe,pe*2,pe*2)}}});return x.wrapS=x.wrapT=si,x.repeat.set(f[0],f[1]),x},Ne=f=>{let x=[],w=[],I=[],B=new N,Y=new N;for(let{m:Q,w:oe,h:pe,bend:Te=0}of f){let Ye=Te?4:1,Rt=new $t().extractRotation(Q);for(let Kt=0;Kt<Ye;Kt++){let hn=Kt/Ye,hi=(Kt+1)/Ye,ui=(Ii,ki)=>{let mo=Te*ki*ki;return B.set(Ii*oe,ki*pe,mo).applyMatrix4(Q),[B.x,B.y,B.z]},Pi=[[-.5,hn],[.5,hn],[.5,hi],[-.5,hn],[.5,hi],[-.5,hi]];for(let[Ii,ki]of Pi)x.push(...ui(Ii,ki)),w.push(Ii+.5,ki),Y.set(0,-Te*2*ki,1).normalize().applyMatrix4(Rt),I.push(Y.x,Y.y,Y.z)}}let V=new gn;return V.setAttribute("position",new Yt(new Float32Array(x),3)),V.setAttribute("normal",new Yt(new Float32Array(I),3)),V.setAttribute("uv",new Yt(new Float32Array(w),2)),V},jt=f=>{let x=f.map(oe=>oe.index?oe.toNonIndexed():oe),w=0;x.forEach(oe=>{w+=oe.attributes.position.count});let I=new Float32Array(w*3),B=new Float32Array(w*3),Y=new Float32Array(w*2),V=0;x.forEach(oe=>{I.set(oe.attributes.position.array,V*3),B.set(oe.attributes.normal.array,V*3),oe.attributes.uv&&Y.set(oe.attributes.uv.array,V*2),V+=oe.attributes.position.count});let Q=new gn;return Q.setAttribute("position",new Yt(I,3)),Q.setAttribute("normal",new Yt(B,3)),Q.setAttribute("uv",new Yt(Y,2)),Q},ot=(f,x,w,I=0,B=0,Y=0,V=1)=>new $t().compose(new N(f,x,w),new Ni().setFromEuler(new Wi(B,I,Y,"YXZ")),new N(V,V,V)),lt=Ge(128,128,(f,x,w)=>{f.translate(x/2,w-4);let I=f.createLinearGradient(-x*.4,0,x*.4,-w);I.addColorStop(0,"#2f7a33"),I.addColorStop(.5,"#4f9f45"),I.addColorStop(1,"#2a6a2e"),f.fillStyle=I,f.beginPath(),f.moveTo(0,0),f.bezierCurveTo(-x*.5,-w*.18,-x*.5,-w*.78,-x*.16,-w*.9),f.bezierCurveTo(-x*.05,-w*.94,0,-w*.86,0,-w*.82),f.bezierCurveTo(0,-w*.86,x*.05,-w*.94,x*.16,-w*.9),f.bezierCurveTo(x*.5,-w*.78,x*.5,-w*.18,0,0),f.fill(),f.strokeStyle="rgba(220,245,190,.35)",f.lineWidth=2,f.beginPath(),f.moveTo(0,0),f.lineTo(0,-w*.8),f.stroke(),f.strokeStyle="rgba(230,250,200,.18)",f.lineWidth=1;for(let B=1;B<6;B++){let Y=-w*.14*B;f.beginPath(),f.moveTo(0,Y),f.quadraticCurveTo(-x*.14,Y-8,-x*.3,Y-14),f.moveTo(0,Y),f.quadraticCurveTo(x*.14,Y-8,x*.3,Y-14),f.stroke()}}),R=f=>Ge(128,512,(x,w,I)=>{let B=un(f?41:42);x.strokeStyle=f?"#3c5a2c":"#5d8a3a",x.lineWidth=3,x.beginPath(),x.moveTo(w/2,I),x.lineTo(w/2,6),x.stroke();for(let Y=0;Y<34;Y++){let V=Y/34,Q=I-18-V*(I-30),oe=w*.47*Math.sin(ve*(.15+V*.8))*(1-V*.35);for(let pe of[-1,1]){let Te=f?["#2f5a2a","#3e6e31","#274d24"]:["#4f8f3c","#6aa84a","#3f7a33"];x.fillStyle=Te[(Y+(pe>0?1:0))%3];let Ye=w/2+pe*oe,Rt=Q-oe*.55-B()*4;x.beginPath(),x.moveTo(w/2,Q),x.quadraticCurveTo(w/2+pe*oe*.5,Q-oe*.1-4,Ye,Rt),x.quadraticCurveTo(w/2+pe*oe*.45,Q-oe*.28+3,w/2,Q-7),x.fill()}}}),S=(f,x={})=>new ft({map:f,roughness:.62,side:ln,alphaTest:.5,...x}),W=5.45,ye=10.6,ce=me+34,Ae=g.clone();Ae.wrapS=Ae.wrapT=si;let Be=W+50,ae=40;Ae.repeat.set(ae/9,Be/.52),Ae.needsUpdate=!0;let le=new Pt(Be,ae);{let f=le.attributes.uv;for(let x=0;x<f.count;x++)f.setXY(x,f.getY(x),f.getX(x))}let Ue=new ct(le,new ft({map:Ae,color:"#c49d78",roughness:.46}));Ue.rotation.x=-ve/2,Ue.position.set((W-50)/2,0,me+ae/2),Ue.receiveShadow=!0,Ve.add(Ue);let L=new ft({color:"#efe2d1",map:Gt([7,5]),roughness:.95}),de=Le(new Pt(W+50,40),L,Ve,(W-50)/2,20,me,!1);Le(new fi(W+50,.34,.06),new ft({color:"#f4ede3",roughness:.7}),Ve,(W-50)/2,.17,me+.03,!1);let se=new ft({color:"#141518",roughness:.34,metalness:.55}),Ie=(f,x,w,I,B,Y,V=Ve)=>Le(new fi(f,x,w),se,V,I,B,Y);for(let f=me+.07;f<ce;f+=3.35)Ie(.13,ye,.13,W,ye/2,f);Ie(.16,.16,ce-me,W,ye,(me+ce)/2),Ie(.18,.1,ce-me,W,.05,(me+ce)/2);let Me=Ge(256,256,(f,x,w)=>{f.translate(x/2,w/2),f.rotate(-.5),f.translate(-x/2,-w/2),[[.2,.12,.1],[.42,.04,.07],[.7,.16,.06]].forEach(([I,B,Y])=>{let V=I*x,Q=f.createLinearGradient(V-B*x,0,V+B*x,0);Q.addColorStop(0,"rgba(255,255,255,0)"),Q.addColorStop(.5,`rgba(255,255,255,${Y})`),Q.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=Q,f.fillRect(-x,-w,x*3,w*3)})});Me.wrapS=Me.wrapT=si,Me.repeat.set(6,1);let Se=Le(new Pt(ce-me,ye),it(Me,"#ffffff",.22),Ve,W-.01,ye/2,(me+ce)/2,!1);Se.rotation.y=-ve/2,Se.renderOrder=5;let nt=Le(new Pt(ce-me,30),L,Ve,W,ye+15.08,(me+ce)/2,!1);nt.rotation.y=-ve/2,Le(new Pt(7,90),new ft({color:"#d9d2c7",roughness:.85}),Ve,W+3.5,-.03,0,!1).rotation.x=-ve/2;let mt=W+6.2;Le(new Pt(90,3.3),it(Me,"#e8f4ff",.14),Ve,mt,1.65,0,!1).rotation.y=-ve/2;let Ee=Le(new Dn(.045,.045,90,8),se,Ve,mt,3.3,0);Ee.rotation.x=ve/2;for(let f=-30;f<40;f+=3.6)Ie(.07,3.3,.07,mt,1.65,f);let st=new N(-4.5,0,20),rt=new N(.6,0,-.8),He=(f,x,w,I,B,Y,V)=>{let Q=new ct(new Pt(x,w),new Vn({map:f,toneMapped:!1,transparent:!0,depthWrite:!1}));return Q.position.copy(st).addScaledVector(rt,I),Q.position.y=B,Q.lookAt(st.x,B,st.z),Q.renderOrder=Y,V.add(Q),Q},Et=(f,x,w,I,B,Y,V,Q=1)=>{let oe=un(Y),pe=[oe()*9,oe()*9,oe()*9,oe()*9];f.fillStyle=V,f.beginPath(),f.moveTo(0,w);for(let Te=0;Te<=x;Te+=4){let Ye=Te/x*Q,Rt=I-B*(.55*Math.sin(Ye*5.1+pe[0])+.3*Math.sin(Ye*11.7+pe[1])+.15*Math.sin(Ye*27+pe[2])+.08*Math.sin(Ye*61+pe[3]));f.lineTo(Te,Rt)}f.lineTo(x,w),f.closePath(),f.fill()},cn=(f,x,w,I,B,Y,V,Q=1)=>{let oe=un(V),pe=Math.max(10,Y*4);for(let Te=0;Te<B.length;Te++){f.fillStyle=B[Te];let Ye=I*(1-Te*.14),Rt=Te*I*.1*Q;for(let Kt=0;Kt<pe;Kt++){let hn=oe()*ve*2,hi=Math.sqrt(oe())*Ye,ui=I*(.1+oe()*.16)*(1-Te*.1),Pi=x+Math.cos(hn)*hi+Rt*.6,Ii=w+Math.sin(hn)*hi*.78-Rt;f.beginPath(),f.arc(Pi,Ii,ui,0,ve*2),f.fill()}}},ei=(f,x,w,I,B)=>{let Y=un(B);for(let V=0;V<x*w/90;V++)f.fillStyle=Y()<.5?`rgba(255,255,255,${(Y()*I).toFixed(3)})`:`rgba(0,0,0,${(Y()*I).toFixed(3)})`,f.fillRect(Y()*x,Y()*w,1+Y()*2,1+Y()*2)},pr=Ge(2048,1024,(f,x,w)=>{let I=f.createLinearGradient(0,0,0,w*.66);I.addColorStop(0,"#86b2df"),I.addColorStop(.45,"#b7d1ec"),I.addColorStop(.82,"#efe3d4"),I.addColorStop(1,"#fbe1bd"),f.fillStyle=I,f.fillRect(0,0,x,w);let B=x*.82,Y=w*.5,V=f.createRadialGradient(B,Y,0,B,Y,w*.6);V.addColorStop(0,"rgba(255,248,226,1)"),V.addColorStop(.1,"rgba(255,228,176,.6)"),V.addColorStop(.45,"rgba(255,214,160,.16)"),V.addColorStop(1,"rgba(255,214,160,0)"),f.fillStyle=V,f.fillRect(0,0,x,w),f.fillStyle="#fffbf2",f.beginPath(),f.arc(B,Y,w*.045,0,ve*2),f.fill();let Q=un(14);for(let oe=0;oe<14;oe++){let pe=Q()*x,Te=w*(.08+Q()*.3),Ye=120+Q()*260;f.save(),f.translate(pe,Te),f.scale(1,.16);let Rt=f.createRadialGradient(0,0,0,0,0,Ye);Rt.addColorStop(0,"rgba(255,255,255,.45)"),Rt.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=Rt,f.beginPath(),f.arc(0,0,Ye,0,ve*2),f.fill(),f.restore()}[[.55,.1,3,"#c4cbdc"],[.585,.085,5,"#a9b7cb"],[.625,.07,7,"#8fa6ad"],[.67,.055,9,"#7c9c86"]].forEach(([oe,pe,Te,Ye],Rt)=>{Et(f,x,w,w*oe,w*pe,Te,Ye,1+Rt*.3);let Kt=f.createLinearGradient(0,w*(oe-.01),0,w*(oe+.06));Kt.addColorStop(0,"rgba(250,240,228,0)"),Kt.addColorStop(1,"rgba(250,240,228,.5)"),f.fillStyle=Kt,f.fillRect(0,w*(oe-.01),x,w*.07)}),f.fillStyle="#7c9c86",f.fillRect(0,w*.72,x,w)}),As=Ge(2048,512,(f,x,w)=>{let I=(V,Q,oe,pe,Te,Ye)=>{let Rt=f.createLinearGradient(0,V-Q,0,w);Rt.addColorStop(0,pe),Rt.addColorStop(1,Te),Et(f,x,w,V,Q,oe,Rt,Ye)};I(w*.3,w*.12,21,"#a9c6a0","#8fb488",1.3),I(w*.46,w*.11,22,"#93bd78","#77a560",1.7),I(w*.62,w*.1,23,"#7cad5f","#5e9148",2.2),f.globalCompositeOperation="source-atop",f.strokeStyle="rgba(45,85,35,.22)",f.lineWidth=2.5;for(let V=0;V<22;V++){let Q=w*(.66+V*.015);f.beginPath();for(let oe=0;oe<=x;oe+=14)f.lineTo(oe,Q+Math.sin(oe*.0035+V*.35)*12);f.stroke()}f.globalCompositeOperation="source-over";let B=un(24);for(let V=0;V<60;V++){let Q=B()*x,oe=w*(.3+B()*.5);cn(f,Q,oe,10+B()*18,["#2f5a2a","#3f7034","#5a8d45","#7eae5e"],3,100+V)}let Y=f.createLinearGradient(0,w*.22,0,w*.55);Y.addColorStop(0,"rgba(240,236,226,.45)"),Y.addColorStop(1,"rgba(240,236,226,0)"),f.globalCompositeOperation="source-atop",f.fillStyle=Y,f.fillRect(0,0,x,w),f.globalCompositeOperation="source-over",ei(f,x,w,.05,25)}),mr=Ge(1024,512,(f,x,w)=>{let I=un(31);for(let B=0;B<9;B++){let Y=x*(B/8)+(I()-.5)*60,V=w*(.46+I()*.22);cn(f,Y,V,60+I()*50,["#1f4220","#2c5a2a","#3f7535","#5b9346","#86bb63"],10,200+B)}f.fillStyle="#244a23",f.fillRect(0,w*.84,x,w),f.globalCompositeOperation="source-atop",ei(f,x,w,.07,32),f.globalCompositeOperation="source-over"});He(pr,220,88,95,16,1,Ve),He(As,120,30,50,-.5,2,Ve),He(mr,56,20,30,1.2,3,Ve);let Qi=new ft({color:"#ffffff",roughness:.95,transparent:!0,opacity:.74,side:ln,depthWrite:!1,emissive:new Ke("#fff1de"),emissiveIntensity:.42}),_i=Ge(256,256,(f,x,w)=>{f.fillStyle="#fff",f.fillRect(0,0,x,w);let I=un(8);for(let B=0;B<2600;B++)f.fillStyle=`rgba(0,0,0,${(I()*.07).toFixed(3)})`,f.fillRect(I()*x,I()*w,1+I()*3,1);for(let B=0;B<x;B+=3)f.fillStyle=`rgba(0,0,0,${(I()*.04).toFixed(3)})`,f.fillRect(B,0,1,w)});_i.wrapS=_i.wrapT=si,_i.repeat.set(3,6);let ti=new ft({color:"#d9c8ae",map:_i,roughness:1,side:ln}),ni=[],Ci=(f,x,w,I,B,Y,V,Q=Ve,oe="z",pe=ye-.2)=>{let Te=new Pt(x,pe,Math.round(x*12),14),Ye=new ct(Te,f);return oe==="z"?(Ye.rotation.y=-ve/2,Ye.position.set(w,pe/2,I+x/2)):Ye.position.set(w+x/2,pe/2,I),Ye.renderOrder=f.transparent?6:0,Ye.castShadow=!f.transparent,Ye.receiveShadow=!0,Q.add(Ye),ni.push({geo:Te,base:Te.attributes.position.array.slice(),ph:B,pleats:Y,depth:V,w:x,h:pe}),Ye};Ci(Qi,2.2,W-.3,me+.2,0,10,.12),Ci(ti,1.05,W-.46,me+.14,1.7,6,.16),Le(new Dn(.03,.03,9,8),se,Ve,W-.4,ye-.2,me+4.5).rotation.x=ve/2;let Es=Ge(512,128,(f,x,w)=>{f.filter="blur(6px)",f.fillStyle="#fff";for(let I=0;I<4;I++)f.fillRect(14+I*x/4,14,x/4-30,w-28)}),Cn=new Pt(1,1);[[W,me+3.6],[W,me+17],[W-9.5,me+20.5],[W-9.5,me+7.1]].forEach(([f,x],w)=>Cn.attributes.position.setXYZ([2,3,1,0][w],f,.07,x)),Cn.computeVertexNormals();let li=new ct(Cn,Object.assign(it(Es,"#ffdcae",.2),{side:ln}));li.renderOrder=2,li.frustumCulled=!1,Ve.add(li);let ji=(f,x,w)=>new wi({uniforms:{uTime:{value:0},uPx:{value:s.getPixelRatio()},uCol:{value:new Ke(...x)},uA:{value:w}},vertexShader:`attribute float phase; uniform float uTime, uPx; varying float vA;
      void main(){ vec3 p = position;
        ${f==="dust"?"p += vec3(sin(uTime*.21 + phase)*.22, sin(uTime*.13 + phase*1.7)*.3, cos(uTime*.17 + phase*.9)*.22);":""}
        vA = .4 + .6 * (.5 + .5 * sin(uTime * (.9 + fract(phase) * 1.8) + phase * 3.1));
        vec4 mv = modelViewMatrix * vec4(p, 1.);
        gl_PointSize = uPx * ${f==="dust"?"(1.2 + fract(phase * 7.) * 1.8) * (44. / -mv.z)":"(1.1 + fract(phase * 3.) * 1.9)"};
        gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 uCol; uniform float uA; varying float vA; void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .04, d) * vA * uA; gl_FragColor = vec4(uCol * a, a); }",transparent:!0,depthWrite:!1,blending:Yi}),Oi=(f,x,w,I,B)=>{let Y=new Float32Array(f*3),V=new Float32Array(f),Q=un(x);for(let Te=0;Te<f;Te++)Y.set(w(Q),Te*3),V[Te]=Q()*50;let oe=new gn;oe.setAttribute("position",new Yt(Y,3)),oe.setAttribute("phase",new Yt(V,1));let pe=new qr(oe,I);return pe.frustumCulled=!1,pe.renderOrder=7,B.add(pe),pe},cs=ji("dust",[1,.93,.8],.32);Oi(n?30:60,31,f=>[W-.5-f()*7,.4+f()*7.5,me+2+f()*12],cs,Ve);let Vt={A:4.6,hs:4.55,ry:3.4},xi=Vt.hs+Vt.ry,yi=(f,x,w,I=72)=>{let B=[new ge(-f,0),new ge(-f,x)];for(let Y=1;Y<I;Y++){let V=ve-Y/I*ve;B.push(new ge(Math.cos(V)*f,x+Math.sin(V)*w))}return B.push(new ge(f,x),new ge(f,0)),B},vi=new qt;De.add(vi);let hs=Ge(512,512,(f,x,w)=>{let I=x/(Vt.A*2),B=w/xi,Y=oe=>[(oe.x+Vt.A)*I,w-oe.y*B],V=()=>{f.beginPath(),yi(Vt.A,Vt.hs,Vt.ry).forEach((oe,pe)=>{let[Te,Ye]=Y(oe);pe?f.lineTo(Te,Ye):f.moveTo(Te,Ye)})};f.fillStyle="#000",f.fillRect(0,0,x,w),f.globalCompositeOperation="lighter";for(let oe=0;oe<26;oe++){let pe=oe/25;V(),f.lineWidth=6+pe*150,f.strokeStyle=`rgba(255,255,255,${(.09*(1-pe)**1.6+.012).toFixed(3)})`,f.stroke()}f.globalCompositeOperation="multiply";let Q=f.createLinearGradient(0,w,0,0);Q.addColorStop(0,"#2a2a2a"),Q.addColorStop(.35,"#b0b0b0"),Q.addColorStop(1,"#ffffff"),f.fillStyle=Q,f.fillRect(0,0,x,w)}),us=new Xi(yi(Vt.A,Vt.hs,Vt.ry)),b=new Jo(us,24);{let f=b.attributes.position,x=b.attributes.uv;for(let w=0;w<f.count;w++)x.setXY(w,(f.getX(w)+Vt.A)/(Vt.A*2),f.getY(w)/xi)}let U=new ft({color:"#f5eadb",map:Gt([2,2]),roughness:.95,emissive:new Ke("#ffb46e"),emissiveMap:hs,emissiveIntensity:.95});Le(b,U,vi,0,0,me+.004,!1);let te=new Xi([...yi(Vt.A+.17,Vt.hs,Vt.ry+.17),...yi(Vt.A,Vt.hs,Vt.ry).reverse()]),K=new ft({color:"#f2e6d6",roughness:.9});Le(new Bs(te,{depth:.2,bevelEnabled:!0,bevelThickness:.02,bevelSize:.02,bevelSegments:2,curveSegments:6}),K,vi,0,0,me,!0);class $ extends Qn{constructor(x,w){super(),this.pts=w?[...x,x[0]]:x,this.acc=[0];for(let I=1;I<this.pts.length;I++)this.acc.push(this.acc[I-1]+this.pts[I].distanceTo(this.pts[I-1]))}getPoint(x,w=new N){let I=this.acc[this.acc.length-1]*Hn(x),B=1;for(;B<this.acc.length-1&&this.acc[B]<I;)B++;let Y=this.acc[B-1],V=this.acc[B];return w.lerpVectors(this.pts[B-1],this.pts[B],V>Y?(I-Y)/(V-Y):0)}}let Re=Le(new qi(new $(yi(Vt.A-.035,Vt.hs,Vt.ry-.035).map(f=>new N(f.x,Math.max(.35,f.y),me+.17))),240,.028,6,!1),pt("#ffd9a6"),vi,0,0,0,!1),$e=Ge(512,512,(f,x,w)=>{let B=(x-120)/(Vt.A*2),Y=(w-60)/xi;f.beginPath(),yi(Vt.A,Vt.hs,Vt.ry).forEach((V,Q)=>{let oe=60+(V.x+Vt.A)*B,pe=w-V.y*Y;Q?f.lineTo(oe,pe):f.moveTo(oe,pe)}),f.globalCompositeOperation="lighter";for(let V=0;V<14;V++){let Q=V/13;f.lineWidth=4+Q*90,f.strokeStyle=`rgba(255,255,255,${(.12*(1-Q)**2).toFixed(3)})`,f.stroke()}}),be=Le(new Pt(Vt.A*2*512/392,xi*512/452),it($e,"#ffb46a",.55),vi,0,xi*512/452/2,me+.012,!1);be.renderOrder=1;let Pe=new qt;De.add(Pe);let We=f=>Ge(256,360,(x,w,I)=>{let B=un(f),Y=x.createLinearGradient(0,0,0,I);Y.addColorStop(0,"#f3ede3"),Y.addColorStop(1,"#e9e0d2"),x.fillStyle=Y,x.fillRect(0,0,w,I),x.fillStyle="rgba(232,170,120,.55)",x.beginPath(),x.arc(w*(.3+B()*.4),I*(.26+B()*.1),w*.11,0,ve*2),x.fill(),[["#d9cbb6",.5],["#b8b3aa",.6],["#8f98a3",.7],["#6f7c8a",.82]].forEach(([V,Q],oe)=>Et(x,w,I,I*Q,I*(.1-oe*.012),f*7+oe,V,.45+B()*.3))}),at=new ft({color:"#3a2a20",roughness:.5}),St=new ft({color:"#f8f5ef",roughness:.9}),Qe=(f,x,w,I,B)=>{let Y=new qt;Y.position.set(w,I,me+.02),Pe.add(Y);let V=.07,Q=.075;[[f,V,0,x/2-V/2],[f,V,0,-x/2+V/2],[V,x-2*V,-f/2+V/2,0],[V,x-2*V,f/2-V/2,0]].forEach(([oe,pe,Te,Ye])=>Le(new fi(oe,pe,Q),at,Y,Te,Ye,Q/2)),Le(new Pt(f-2*V,x-2*V),St,Y,0,0,.014,!1),Le(new Pt((f-2*V)*.7,(x-2*V)*.74),new ft({map:We(B),roughness:.8}),Y,0,.02,.018,!1)};Qe(1.16,1.6,-1.5,5.36,3),Qe(1.32,1.96,0,5.54,7),Qe(1.16,1.6,1.5,5.36,11);let xt=Ge(512,512,(f,x,w)=>{let I=un(21);f.fillStyle="#ffffff",f.fillRect(0,0,x,w);for(let B=0;B<16e3;B++)f.fillStyle=I()<.5?`rgba(255,255,255,${(I()*.3).toFixed(3)})`:`rgba(120,100,80,${(I()*.08).toFixed(3)})`,f.fillRect(I()*x,I()*w,1+I()*2.5,1+I())});xt.wrapS=xt.wrapT=si,xt.repeat.set(4,4);let an=Le(gi(1,.06,1,.025,{seg:[1,1,1]}).geometry,new ft({map:xt,color:"#e8dece",roughness:1,normalMap:u,normalScale:new ge(.5,.5)}),P,.9,.03,1.6,!1);an.receiveShadow=!0,Le(new Dn(.82,.82,.07,48),Ce,Mt,0,2.05,0),[0,2.09,4.19].forEach(f=>{Le(new Dn(.04,.028,2.02,10),Ce,Mt,Math.cos(f)*.48,1.01,Math.sin(f)*.48).rotation.set(Math.sin(f)*.1,0,-Math.cos(f)*.1)});let Xt=new oi({color:"#fbf7ef",emissive:new Ke("#ffcf98"),emissiveIntensity:.7,roughness:.3,clearcoat:.4,side:ln}),Ht=(f,x,w,I,B,Y)=>{let V=new qt;return V.position.set(x,w,I),V.scale.setScalar(B),f.add(V),Le(ue([[0,0],[.27,0],[.29,.03],[.25,.07],[.07,.1],[0,.1]]),we,V),Le(new Dn(.03,.034,.92,12),we,V,0,.55,0),Le(ue(Array.from({length:14},(Q,oe)=>{let pe=oe/13*ve/2;return[.5*Math.cos(pe),.4*Math.sin(pe)]}),40),Xt,V,0,.99,0),Le(new zo(.47,32),pt("#ffe3b8"),V,0,.985,0,!1).rotation.x=ve/2,Qt(V,Y,2.6,.36,0,1.02,0),Qt(V,"#fff0d8",.9,.5,0,.96,0),V};Ht(Mt,.28,2.09,-.34,1,"#ffc98a");let fn=new ar("#ffc78c",0,10,2);fn.position.set(.28,2.95,-.34),gt.add(fn),Le(ue([[0,0],[.22,0],[.26,.05],[.29,.42],[.31,.46],[.28,.47],[0,.42]]),Je,Mt,-.36,2.09,.3);{let f=[],x=un(57);for(let I=0;I<8;I++){let B=-ve*.2+I/8*ve*1.25+x()*.3,Y=.3+x()*.5,V=.15+x()*(I%3?.45:1.1),Q=6+Math.floor(V*5);for(let oe=0;oe<Q;oe++){let pe=oe/(Q-1),Te=.22+Y*Math.min(1,pe*1.6),Ye=-.36+Math.cos(B)*Te,Rt=.3+Math.sin(B)*Te,Kt=Math.hypot(Ye,Rt)<.78,hn=.5+.12*Math.sin(pe*ve)-V*pe*pe;Kt&&(hn=Math.max(hn,.04+.1*(1-pe))),f.push({m:ot(Ye,2.09+hn,Rt,B+ve/2+(x()-.5)*1.2,-.5-x()*.9+pe*.8,(x()-.5)*.8,.17+x()*.09),w:1,h:1})}}let w=new ct(Ne(f),S(lt));w.castShadow=!0,Mt.add(w),_t.push({o:w,axis:"z",amp:.012,speed:.7,ph:0})}Le(gi(1.9,1.42,1.5,.03,{seg:[2,2,2]}).geometry,v.oak,Bt,0,1.2,0),Le(gi(1.74,.62,.05,.012,{seg:[2,2,1]}).geometry,v.oak,Bt,0,1.42,.76),Le(new fi(.42,.05,.05),we,Bt,0,1.46,.8),[[-.8,-.6],[.8,-.6],[-.8,.6],[.8,.6]].forEach(([f,x])=>Le(new Dn(.06,.035,.5,8),v.oak,Bt,f,.25,x)),Le(gi(.96,.085,.7,.012,{seg:[1,1,1]}).geometry,new ft({color:"#ece7de",roughness:.8}),Bt,-.3,1.955,.16).rotation.y=-.06,Le(gi(.84,.075,.62,.012,{seg:[1,1,1]}).geometry,new ft({color:"#c9ccce",roughness:.8}),Bt,-.28,2.035,.14).rotation.y=.1,Le(ue([[0,0],[.15,0],[.17,.02],[.18,.2],[.16,.27],[.065,.31],[.055,.37],[.065,.385],[0,.385]],28),new oi({color:"#a8641f",roughness:.12,clearcoat:1,transparent:!0,opacity:.86}),Bt,.4,1.91,-.2);{let f=un(66),x=[];for(let w=0;w<8;w++){let I=new Dn(.007,.007,1.15,4);I.translate(0,.575,0),I.applyMatrix4(ot(.4,1.91+.36,-.2,f()*ve*2,(.1+f()*.22)*(f()<.5?-1:1),(.1+f()*.22)*(f()<.5?-1:1))),x.push(I)}Le(jt(x),Ce,Bt)}let ze=8.35,Zt=.18,At=.5,Ri=Le(new Pt(110,60),new ft({color:"#1f2026",roughness:.2,metalness:.12}),je,0,0,me+30,!1);Ri.rotation.x=-ve/2;let vn=new ft({color:"#2a2930",map:Gt([6,4]),roughness:.92});Le(new Pt(At+55,ze),vn,je,(At-55)/2,ze/2,me,!1);for(let f=At;f<50;f+=3.6)Ie(.13,ze,.13,f,ze/2,me+.06,je);Ie(60,.14,.14,At+30,ze-.07,me+.06,je),Ie(60,.1,.16,At+30,.05,me+.07,je);let ds=Le(new Pt(60,ze),it(Me,"#c8d2ff",.1),je,At+30,ze/2,me+.02,!1);ds.renderOrder=5;let Rn=new qt;je.add(Rn);let Yn=new ft({color:"#1b1a1f",roughness:.9});Le(new Pt(110,60),Yn,Rn,0,ze,me+30,!1).rotation.x=ve/2;let yt={x:1.8,z:2.6,rx:9.6,rz:6.6},xn=(f,x)=>Array.from({length:160},(w,I)=>{let B=I/160*ve*2;return new N(yt.x+Math.cos(B)*yt.rx*f,x,yt.z+Math.sin(B)*yt.rz*f)});Le(new qi(new $(xn(1,ze-.06),!0),320,.035,6,!0),pt("#ffcf8a"),Rn,0,0,0,!1),Le(new qi(new $(xn(.93,ze-.03),!0),320,.018,5,!0),pt("#b07a45"),Rn,0,0,0,!1);let Zn=Ge(512,512,(f,x,w)=>{f.translate(x/2,w/2),((B,Y,V)=>{let Q=f.createRadialGradient(0,0,B,0,0,Y);Q.addColorStop(0,"rgba(255,255,255,0)"),Q.addColorStop(.75,`rgba(255,255,255,${V})`),Q.addColorStop(.86,`rgba(255,255,255,${V*.5})`),Q.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=Q,f.fillRect(-x/2,-w/2,x,w)})(x*.05,x*.5,.9)}),sn=Le(new Pt(yt.rx*2/.86*1,yt.rz*2/.86),it(Zn,"#ffb46a",.55),Rn,yt.x,ze-.015,yt.z,!1);sn.rotation.x=ve/2,sn.renderOrder=1;{let f=[];for(let I=-5.26;I<-3.45;I+=.31){let B=new fi(.2,ze,.13);B.translate(I,ze/2,me+.075),f.push(B)}let x=T.clone();x.wrapS=x.wrapT=si,x.repeat.set(.3,3),x.needsUpdate=!0,Le(jt(f),new ft({color:"#7a5236",map:x,roughness:.55}),je);let w=Ge(64,256,(I,B,Y)=>{let V=I.createLinearGradient(0,0,B,0);V.addColorStop(0,"rgba(255,255,255,0)"),V.addColorStop(.5,"rgba(255,255,255,1)"),V.addColorStop(1,"rgba(255,255,255,0)"),I.fillStyle=V,I.fillRect(0,0,B,Y)});[-4.795,-3.865].forEach(I=>{Le(new fi(.035,ze-.3,.02),pt("#ffc98a"),je,I,ze/2,me+.03,!1);let B=Le(new Pt(1.5,ze),it(w,"#ffa955",.5),je,I,ze/2,me+.145,!1);B.renderOrder=2})}let zt=new ge(.35,1.4),Tn=9.4,k=me+.04,ie=(()=>{let f=Math.asin(Hn((k-zt.y)/Tn,-1,1)),x=f,w=ve-f,I=[];for(let B=0;B<=120;B++)I.push(x+B/120*(w-x));return I})(),_e=new Xi;ie.forEach((f,x)=>{let w=zt.x+Math.cos(f)*Tn,I=zt.y+Math.sin(f)*Tn;x?_e.lineTo(w,I):_e.moveTo(w,I)}),_e.closePath();let ke=new Bs(_e,{depth:Zt,bevelEnabled:!0,bevelThickness:.015,bevelSize:.03,bevelSegments:2,curveSegments:4});ke.rotateX(ve/2),ke.translate(0,Zt,0);let tt=Le(ke,[new ft({color:"#3b3a3d",roughness:.62,metalness:0}),new ft({color:"#25262b",roughness:.5})],je,0,0,0,!1);tt.receiveShadow=!0,Le(new qi(new $(ie.map(f=>new N(zt.x+Math.cos(f)*(Tn+.04),.035,Math.max(k+.02,zt.y+Math.sin(f)*(Tn+.04))))),260,.028,5,!1),pt("#ffc27a"),je,0,0,0,!1);{let f=[],x=[];ie.forEach((V,Q)=>{let oe=Math.cos(V),pe=Math.sin(V);f.push(zt.x+oe*(Tn-.1),.012,Math.max(k,zt.y+pe*(Tn-.1)),zt.x+oe*(Tn+1.7),.012,Math.max(k,zt.y+pe*(Tn+1.7))),x.push(Q/120,0,Q/120,1)});let w=[];for(let V=0;V<ie.length-1;V++){let Q=V*2;w.push(Q,Q+1,Q+2,Q+1,Q+3,Q+2)}let I=new gn;I.setAttribute("position",new Yt(new Float32Array(f),3)),I.setAttribute("uv",new Yt(new Float32Array(x),2)),I.setIndex(w);let B=Ge(4,64,(V,Q,oe)=>{let pe=V.createLinearGradient(0,oe,0,0);pe.addColorStop(0,"rgba(255,255,255,1)"),pe.addColorStop(.25,"rgba(255,255,255,.45)"),pe.addColorStop(1,"rgba(255,255,255,0)"),V.fillStyle=pe,V.fillRect(0,0,Q,oe)}),Y=new ct(I,it(B,"#ff9e50",.5));Y.renderOrder=2,Y.frustumCulled=!1,je.add(Y)}let Tt=Ge(64,256,(f,x,w)=>{let I=f.createLinearGradient(0,0,0,w);I.addColorStop(0,"rgba(255,255,255,0)"),I.addColorStop(1,"rgba(255,255,255,.9)"),f.fillStyle=I,f.fillRect(0,0,x,w)}),It=Le(new Pt(52,7),it(Tt,"#7c6aa6",.13),je,At+26,.006,me+3.5,!1);It.rotation.x=-ve/2,It.renderOrder=1;let en=Ge(2048,1024,(f,x,w)=>{let I=f.createLinearGradient(0,0,0,w*.7);I.addColorStop(0,"#18204a"),I.addColorStop(.32,"#2f3168"),I.addColorStop(.55,"#5d4c86"),I.addColorStop(.74,"#b4728c"),I.addColorStop(.88,"#ea9a6e"),I.addColorStop(1,"#f5bd86"),f.fillStyle=I,f.fillRect(0,0,x,w);let B=un(77);for(let Y=0;Y<160;Y++){f.fillStyle=`rgba(240,240,255,${(.15+B()*.5).toFixed(2)})`;let V=B()<.9?1.2:2;f.fillRect(B()*x,B()*w*.3,V,V)}for(let Y=0;Y<10;Y++){let V=B()*x,Q=w*(.42+B()*.2),oe=160+B()*320;f.save(),f.translate(V,Q),f.scale(1,.06);let pe=f.createRadialGradient(0,0,0,0,0,oe);pe.addColorStop(0,"rgba(255,170,170,.35)"),pe.addColorStop(1,"rgba(255,170,170,0)"),f.fillStyle=pe,f.beginPath(),f.arc(0,0,oe,0,ve*2),f.fill(),f.restore()}[[.66,.1,41,"#5a4f80"],[.7,.085,43,"#43426c"],[.745,.07,45,"#2f3253"],[.79,.055,47,"#1f2338"]].forEach(([Y,V,Q,oe],pe)=>{Et(f,x,w,w*Y,w*V,Q,oe,1.2+pe*.35);let Te=f.createLinearGradient(0,w*(Y-.005),0,w*(Y+.05));Te.addColorStop(0,"rgba(240,150,140,0)"),Te.addColorStop(1,`rgba(240,150,140,${(.18-pe*.04).toFixed(2)})`),f.fillStyle=Te,f.fillRect(0,w*(Y-.005),x,w*.06)}),f.fillStyle="#1f2338",f.fillRect(0,w*.84,x,w)}),Nt=Ge(2048,512,(f,x,w)=>{Et(f,x,w,w*.5,w*.14,51,"#182029",1.6);let I=un(52);for(let B=0;B<70;B++){let Y=I()*x,V=w*(.4+I()*.3);cn(f,Y,V,12+I()*26,["#0f161b","#151f26","#1f2a2f"],3,300+B)}f.fillStyle="#141b22",f.fillRect(0,w*.72,x,w)}),Jt=Ge(1024,768,(f,x,w)=>{let I=un(61);f.strokeStyle="#0d1311",f.lineCap="round",[[.36,1,.33,.62,16],[.35,.78,.25,.52,7],[.34,.74,.46,.5,6]].forEach(([B,Y,V,Q,oe])=>{f.lineWidth=oe,f.beginPath(),f.moveTo(x*B,w*Y),f.quadraticCurveTo(x*(B+V)/2,w*(Y+Q)/2+14,x*V,w*Q),f.stroke()}),cn(f,x*.35,w*.42,140,["#0a110f","#0f1815","#16211d","#202c26","#3a3433"],26,400),cn(f,x*.2,w*.62,70,["#0a110f","#111a17","#1a2621","#352f2f"],10,402);for(let B=0;B<14;B++)cn(f,x*(B/13),w*(.86+I()*.05),36+I()*26,["#0a100e","#101815"],6,410+B);f.fillStyle="#0a100e",f.fillRect(0,w*.91,x,w)}),Sn=(f,x,w,I,B,Y,V)=>{let Q=new ct(new Pt(x,w),new Vn({map:f,toneMapped:!1,transparent:!0,depthWrite:!1}));return Q.position.set(I,B,Y),Q.renderOrder=V,je.add(Q),Q};Sn(en,340,170,18,22,me-90,1),Sn(Nt,190,48,14,-9,me-44,2),Sn(Jt,34,25.5,10,4.6,me-13,3);let Wt=ji("star",[1,.97,.9],.8);Oi(n?30:60,9,f=>[-40+f()*110,22+f()*30,me-85],Wt,je);let Ct=new ft({color:"#4b4c57",roughness:.95,transparent:!0,opacity:.55,side:ln,depthWrite:!1,emissive:new Ke("#2a2440"),emissiveIntensity:.5});Ci(Ct,2.6,10.4,me+.38,2.2,11,.11,je,"x",ze-.12);let bt={x:.25,z:2.05,h:3.55};Le(new Dn(.34,.36,.05,32),Ce,O,bt.x,Zt+.025,bt.z),Le(new Dn(.028,.028,bt.h,10),Ce,O,bt.x,Zt+bt.h/2,bt.z),Le(new qi(new $([[0,0],[.05,.19],[.24,.3],[.44,.24],[.58,.06]].map(([f,x])=>new N(bt.x+f,Zt+bt.h+x,bt.z))),24,.026,8,!1),Ce,O);let tn=Ht(O,bt.x+.58,Zt+bt.h+.06-1.39*1.08,bt.z,1.08,"#ffb870");tn.children[0].visible=tn.children[1].visible=!1;let Bn=new ar("#ffb36b",0,12,1.8);Bn.position.set(bt.x+.58,Zt+bt.h-.5,bt.z),gt.add(Bn),Le(ue([[0,0],[.36,0],[.42,.62],[.45,.66],[.4,.68],[0,.6]]),new ft({color:"#2b2b30",roughness:.55}),O,.95,Zt,-.9);{let f=[],x=un(88);for(let I=0;I<26;I++){let B=-2.6+I/25*4+(x()-.5)*.35,Y=.35+x()*1,V=2.1+x()*2.1;f.push({m:ot(.95+(x()-.5)*.2,Zt+.55+x()*.15,-.9+(x()-.5)*.2,B,-(ve/2-Y),(x()-.5)*.5,1),w:.95+x()*.3,h:V,bend:-.35-x()*.65})}let w=new ct(Ne(f),S(R(!0)));w.castShadow=!0,O.add(w),_t.push({o:w,axis:"z",amp:.02,speed:.5,ph:1.3})}let Pn=new or("#fff1e0",300,90,.6,.85,1.2);Pn.castShadow=!0,Pn.shadow.mapSize.set(n?1024:2048,n?1024:2048),Pn.shadow.radius=6,Pn.shadow.blurSamples=16,Pn.shadow.bias=-4e-4,Pn.shadow.normalBias=.025,Pn.shadow.camera.near=4,Pn.shadow.camera.far=80,r.add(Pn,Pn.target);let Bi={pos:[new N(-6.5,13.5,11),new N(W+22,17,9)],at:[new N(0,2,-.4),new N(-.5,1.6,-.8)]},fs=new Vs("#fff6ec",1);fs.position.set(-4,5,14),r.add(fs);let gr=new Vs("#9a90e0",0);gr.position.set(5,9,-30),r.add(gr);let _r=new Kr("#e9f0ff","#dcb98f",1);r.add(_r);let Lt=f=>{Wt.uniforms.uTime.value=f,cs.uniforms.uTime.value=f,ni.forEach(x=>{let w=x.geo.attributes.position.array,I=x.base;for(let B=0;B<w.length;B+=3){let Y=I[B],V=I[B+1],Q=(x.h/2-V)/x.h,oe=Math.sin((Y/x.w+.5)*ve*x.pleats)*x.depth;w[B+2]=I[B+2]+oe+(Math.sin(f*.9+x.ph+V*.35)*.1*Q*Q+Math.sin(f*1.6+Y*2.1)*.025*Q)*(t?0:1),w[B]=I[B]+Math.sin(f*.7+x.ph)*.05*Q*Q*(t?0:1)}x.geo.attributes.position.needsUpdate=!0,x.geo.computeVertexNormals()}),t||_t.forEach(x=>{x.o.rotation[x.axis]=Math.sin(f*x.speed+x.ph)*x.amp})};Lt(0);let Ot=(f,x)=>[new Ke(f),new Ke(x)],Ft={key:Ot("#ffe6c8","#fff3e2"),fill:Ot("#8c9cff","#fff6ec"),sky:Ot("#ffcf9a","#e9f0ff"),ground:Ot("#141419","#dcb98f")},ht=(f,x,w)=>f.copy(x[0]).lerp(x[1],w),yn=null;function An(){let f=Fi(0,1,Z.day),x=1-f,w=1-.85*Ys(Z.buildPose),I=Z.day>=.5;I!==yn&&(yn=I,De.visible=Mt.visible=Bt.visible=an.visible=I,je.visible=O.visible=!I,P.contact.position.y=I?.012:Zt+.006),Pn.position.lerpVectors(Bi.pos[0],Bi.pos[1],f),Pn.target.position.lerpVectors(Bi.at[0],Bi.at[1],f),ht(Pn.color,Ft.key,f),Pn.intensity=on(260,520,f),Pn.angle=on(.5,.62,f),ht(fs.color,Ft.fill,f),fs.intensity=on(.32,1,f),gr.intensity=x*.75,ht(_r.color,Ft.sky,f),ht(_r.groundColor,Ft.ground,f),_r.intensity=on(.4,1.05,f),r.environmentIntensity=on(.3,.85,f),s.toneMappingExposure=on(1,1.02,f),fn.intensity=2.2*w,Bn.intensity=13*w,Xt.emissiveIntensity=on(1.5,.7,f)*on(.15,1,w),et.forEach(B=>{B.material.opacity=B.userData.o*on(1,.55,f)*w}),U.emissiveIntensity=.95*on(.4,1,w)}let zn=me+.02,es=new di(new N(0,0,1),-zn),En=new Un(fp,1.6,2,260),ci=new jr,bu=new ge,wu=new N,Ac=new N,Mn={sizes:{},blocks:{},dirty:!1,last:""},pa={desk:{hero:{pose:{tx:-2.7,shift:0,az:-.09,pol:1.36,zoom:.93,dy:.45,open:0},zone:{x0:.045,y:.19,minY:.8}},cap1:{pose:{tx:-3.3,shift:0,az:-.2,pol:1.3,zoom:.86,dy:.35,open:.45},zone:{x0:.05,y:.3,minY:.8}},cap2:{pose:{tx:-2.4,shift:0,az:-.03,pol:1.25,zoom:.92,dy:.95,open:1},zone:{x0:.05,y:.26,minY:1.2}},cap3:{pose:{tx:-3.6,shift:0,az:.13,pol:1.32,zoom:.88,dy:.3,open:.3},zone:{x0:.05,y:.32,minY:.8}},show:{pose:{tx:0,shift:0,az:-.5,pol:1.27,zoom:1,dy:0,open:0}}},phone:{hero:{pose:{tx:0,shift:0,az:-.2,pol:1.29,zoom:.98,dy:1.3,open:0},zone:{y:.105,align:"center",minY:3.4}},cap1:{pose:{tx:0,shift:0,az:-.26,pol:1.25,zoom:.94,dy:.55,open:.45},zone:{y:.11,align:"center",minY:4.6}},cap2:{pose:{tx:0,shift:0,az:-.16,pol:1.22,zoom:.92,dy:.55,open:1},zone:{y:.11,align:"center",minY:5.4}},cap3:{pose:{tx:0,shift:0,az:-.08,pol:1.24,zoom:.94,dy:.55,open:.3},zone:{y:.11,align:"center",minY:4.6}},show:{pose:{tx:0,shift:0,az:-.5,pol:1.27,zoom:1,dy:0,open:0}}}},ma=[[0,"hero"],[.07,"hero"],[.17,"cap1"],[.3,"cap1"],[.4,"cap2"],[.53,"cap2"],[.63,"cap3"],[.74,"cap3"],[.82,"show"]],wp={hero:[-1,-.5,.055,.1],cap1:[.14,.19,.3,.34],cap2:[.37,.42,.53,.57],cap3:[.6,.65,.74,.78]},Tu=(f,x)=>{let w=wp[f];return w?Math.min(Hn((x-w[0])/(w[1]-w[0])),Hn((w[3]-x)/(w[3]-w[2]))):0},Au=["tx","shift","az","pol","zoom","dy"];function Eu(f){let x=Z.phone?pa.phone:pa.desk,w=0;for(;w<ma.length-2&&f>ma[w+1][0];)w++;let[I,B]=ma[w],[Y,V]=ma[w+1],Q=Fi(I,Y,f),oe=x[B].pose,pe=x[V].pose,Te={};for(let Ye in oe)Te[Ye]=on(oe[Ye],pe[Ye],Q);return Te}let Cu=()=>qn+H.coverTop*.5+(Z.phone?.1:.75),Ec=(f,x)=>({az:f.az,pol:Hn(f.pol+x*.08,.7,1.52),d:Z.dist*f.zoom*(1+x*(Z.phone?-.08:-.05)),ty:on(Z.ty,Math.max(Z.ty,Cu()),x)+f.dy,shift:f.shift,tx:f.tx??0});function Ru(f,x,w,I,B,Y,V=0){let Q=-Y*2*Math.tan(f.fov*ve/360)*f.aspect*f.getFilmWidth();Math.abs(f.filmOffset-Q)>1e-5&&(f.filmOffset=Q,f.updateProjectionMatrix()),f.position.set(V+Math.sin(x)*Math.sin(w)*I,B+Math.cos(w)*I,Math.cos(x)*Math.sin(w)*I),f.lookAt(V,B,0),f.updateMatrixWorld()}let Pu=(f,x)=>(bu.set(f*2-1,1-x*2),ci.setFromCamera(bu,En),ci.ray.intersectPlane(es,wu)?wu.clone():null);function Iu(){Mn.dirty=!1;let f=i.clientWidth,x=i.clientHeight;if(!f||!x)return;let w=`${f}x${x}:${Z.phone}:${Z.dist.toFixed(3)}:${JSON.stringify(Mn.sizes)}`;if(w===Mn.last)return;Mn.last=w;let I=Z.phone?pa.phone:pa.desk;En.fov=o.fov,En.aspect=f/x,En.near=o.near,En.far=o.far,En.filmGauge=o.filmGauge,En.filmOffset=0,En.updateProjectionMatrix();for(let B in Mn.sizes){let Y=I[B],[V,Q]=Mn.sizes[B];if(!Y?.zone||!V||!Q)continue;let oe=Y.zone,pe=Ec(Y.pose,Ys(Y.pose.open));Ru(En,pe.az,pe.pol,pe.d,pe.ty,pe.shift,pe.tx);let Te=oe.align==="center"?.5-V/f/2:oe.x0,Ye=Pu(Te,oe.y),Rt=Pu(Te+V/f,oe.y);if(!Ye||!Rt)continue;let Kt=(Rt.x-Ye.x)/V;Ye.y-Q*Kt<oe.minY&&(Kt=Math.max(Kt*.55,(Ye.y-oe.minY)/Q));let hn=V*Kt,hi=Q*Kt,ui=oe.align==="center"?(Ye.x+Rt.x)/2-hn/2:Ye.x,Pi=Ye.y,Ii=Mn.blocks[B]||(Mn.blocks[B]={o:0,oT:0,corners:[],center:new N});Ii.corners=[[ui,Pi],[ui+hn,Pi],[ui+hn,Pi-hi],[ui,Pi-hi]].map(([ki,mo])=>new N(ki,mo,zn)),Ii.center.set(ui+hn/2,Pi-hi/2,zn)}}let lo=new or("#ffd9a8",0,30,.5,.9,1.4);r.add(lo,lo.target);let co=new N(-6,5,zn),Lu=new N,Du=f=>(Ac.copy(f).project(o),[(Ac.x*.5+.5)*i.clientWidth,(.5-Ac.y*.5)*i.clientHeight]),ga=[new N,new N,new N],Cc="",Nu="";function Tp(f){let x=Ys(Z.buildPose),w={},I=!1,B=null,Y=0,V="",Q=0;for(let oe in Mn.blocks){let pe=Mn.blocks[oe];pe.oT===0&&(Q=Math.max(Q,pe.o))}for(let oe in Mn.blocks){let pe=Mn.blocks[oe],Te=pe.oT>pe.o&&Q>.08?pe.o:pe.oT;pe.o!==pe.oT&&(pe.o=t?pe.oT:mi(pe.o,Te,Te<pe.o?10:6,f),Math.abs(pe.o-pe.oT)<.002&&(pe.o=pe.oT),I=!0);let Ye=pe.o*(1-x);Ye>Y&&(Y=Ye,B=pe);let Rt=Ye>.002&&pe.corners.length?pe.corners.map(Du):null;w[oe]={o:Ye,quad:Rt},V+=oe+Ye.toFixed(3)+(Rt?Rt.flat().map(Kt=>Kt.toFixed(1)).join(","):"")}if(V!==Cc&&(Cc=V,e.onWords?.(w)),B&&Lu.copy(B.center),co.lerp(Lu,t?1:1-Math.exp(-4*f)),lo.target.position.copy(co),lo.position.set(co.x+1.6,co.y+6.2,co.z+7),lo.intensity=Y*(1-x)*on(70,18,Fi(0,1,Z.day)),e.onSpots){let oe=xr(),pe=qn+H.h+H.crown*.5;ga[0].set(-.35,pe+.02,-.4),ga[1].set(oe*.31,pe+.01,_n*.2),ga[2].set(oe*.16,qn+H.h*.45,_n/2+.05);let Te=(Mn.blocks.hero?.o??0)*(1-x)*(1-Fi(0,.06,H.open))*(H.swap<1?0:1),Ye=ga.map(Du),Rt=Ye.flat().map(Kt=>Kt.toFixed(1)).join(",")+Te.toFixed(3);Rt!==Nu&&(Nu=Rt,e.onSpots(Ye,Te))}return I}let Z={w:(e.width??60)/10,wTarget:(e.width??60)/10,allOpen:!1,az:-.5,pol:1.27,azUser:0,polUser:0,vAz:0,scrollIn:t?1:0,intro:t?1:0,lift:0,dist:20,ty:2.25,visible:!1,last:0,raf:0,touched:!1,time:0,phone:!1,story:null,st:{tx:-2.7,shift:0,az:-.09,pol:1.36,zoom:.93,dy:.45},storyW:1,idle:!1,lastDraw:0,day:e.theme==="morning"?1:0,dayT:e.theme==="morning"?1:0,build:1,buildT:3,buildPose:0,released:!0},xr=()=>Z.w-.02,Rc=!n,H={root:new qt,stack:new qt,cover:new qt,open:0,hi:null,dent:0,dentV:0,dentT:0,dentX:0,dentZ:0,feel:"Medium",crown:gu.Medium.crown,h:.7,hT:.7,top:0,look:null,lookName:null,label:"",groups:{},mix:{},key:null,swap:1,swapTo:null,coverTop:.7,builtW:0};P.add(H.root),H.root.add(H.stack,H.cover),H.root.position.y=qn;let Uu=f=>{let x=new ct(f.geometry,[v.top,v.side,v.under]);return x.castShadow=!0,x.receiveShadow=!0,x.customDepthMaterial=C,H.cover.add(x),x};H.body=new fa({cs:4,seg:Rc?[40,12,92]:[26,8,56],groups:!0}),H.bodyMesh=Uu(H.body),H.topBox=new fa({cs:3,seg:Rc?[36,4,84]:[24,3,52],groups:!0}),H.topMesh=Uu(H.topBox);let Pc=()=>{let f=new ct(new qi(new Tc(1,1,.1),8,.01,3,!0),v.piping);return f.castShadow=!0,H.cover.add(f),f};H.pipeT=Pc(),H.pipeB=Pc(),H.pipeX=Pc();let ps=640,ho=260,_a=document.createElement("canvas");_a.width=ps,_a.height=ho;let pn=_a.getContext("2d"),xa=new ri(_a);xa.colorSpace=bn,xa.anisotropy=Zs,H.decal=new ct(new Pt(1,1),new ft({map:xa,transparent:!0,roughness:.75,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})),H.cover.add(H.decal);function Ap(){let[f,x]=H.look.label;pn.clearRect(0,0,ps,ho),pn.fillStyle=f,Sp(pn,6,6,ps-12,ho-12,16),pn.fill(),pn.strokeStyle=x,pn.globalAlpha=.5,pn.lineWidth=3,pn.setLineDash([12,8]),Sp(pn,22,22,ps-44,ho-44,9),pn.stroke(),pn.setLineDash([]),pn.globalAlpha=1,pn.fillStyle=x,pn.textAlign="center",pn.textBaseline="middle",pn.font='600 30px "Hanken Grotesk", system-ui, sans-serif';let w="EASY COMFORT",I=7,B=[...w].reduce((oe,pe)=>oe+pn.measureText(pe).width+I,-I),Y=ps/2-B/2;pn.textAlign="left";for(let oe of w)pn.fillText(oe,Y,80),Y+=pn.measureText(oe).width+I;pn.textAlign="center";let V=92;pn.font=`400 ${V}px "Young Serif", Georgia, serif`;let Q=pn.measureText(H.label).width;Q>ps-96&&(V*=(ps-96)/Q,pn.font=`400 ${V}px "Young Serif", Georgia, serif`),pn.fillText(H.label,ps/2,166),xa.needsUpdate=!0}let Ep=gi(2.4,.5,1.6,.24,{cs:4,seg:[14,4,10],shape:{crown:.1,bulge:.05}});H.pillows=[-1,1].map(f=>{let x=new ct(Ep.geometry,v.pillow);return x.castShadow=!0,x.receiveShadow=!0,x.position.set(f*1.36,0,-_n/2+1.06),x.rotation.set(-.07,f*.05,0),H.cover.add(x),x});let Fu=()=>Math.min(Ay,(H.h-H.top)*.26);function ya(){let f=xr(),x=H.top,w=H.h,I=w-x,B=Fu(),Y=Math.min(.045,I*.07);if(H.body.fill(f,I,_n,B,{crown:x?0:H.crown,bulge:Y},[.92,.62,1]),H.bodyMesh.position.y=I/2,H.topMesh.visible=x>.001,x>.001){let Q=Math.min(.09,x*.45);H.topBox.fill(f-.1,x+.03,_n-.1,Q,{crown:H.crown,bulge:.015},[.92,.62,1]),H.topMesh.position.y=I+x/2-.015,H.pipeX.position.y=w-Q*.3}H.pipeT.position.y=I-B*.3,H.pipeB.position.y=B*.3,H.pipeX.visible=!!H.look?.topper,H.look?.topper==="euro"&&(H.pipeX.position.y=I-Math.min(.22,I*.24));let V=Math.min(.27,I*.5);H.decal.scale.set(V*ps/ho,V,1),H.decal.position.set(-f*.26,I*.5,_n/2+Y*Math.cos(0)*.9+.025),H.pillows.forEach(Q=>{Q.userData.y=w+.26+H.crown*.7,Q.position.y=Q.userData.y}),da.uTopY.value=qn+w,da.uRange.value=Math.min(.75,w*.75),a.constant=-(qn+w)}function Ic(){let f=xr(),x=Fu(),w=x*.3,I=(B,Y,V,Q)=>new qi(new Tc(B,Y,V),Rc?260:140,Q,7,!0);if([H.pipeT,H.pipeB].forEach(B=>{B.geometry.dispose(),B.geometry=I(f-w*2,_n-w*2,Math.max(.05,x*.8),.034),B.scale.x=1}),H.pipeX.geometry.dispose(),H.look?.topper==="pillow"){let B=Math.min(.09,H.top*.45),Y=B*.3;H.pipeX.geometry=I(f-.1-Y*2,_n-.1-Y*2,Math.max(.05,B*.8),.03)}else H.pipeX.geometry=I(f+.05,_n+.05,Math.max(.05,x),.03);H.pipeX.scale.x=1,H.builtW=f}let Ou=f=>f.userData.slabs.forEach(x=>{x.scale.x=(xr()-.06)/3});function Cp(f,x){let w=f.inches/10,I=Math.min(.035,w*.3),B;if(f.zones){B=new qt;let Y=[.34,.32,.34],V=_n-.08,Q=-V/2;Y.forEach((oe,pe)=>{let Te=new ct(gi(3,w,V*oe-.06,I,{seg:[10,2,6]}).geometry,pe===1?v.zoneFirm:v.zoneSoft);Te.castShadow=!0,Te.receiveShadow=!0,Te.position.z=Q+V*oe/2,Q+=V*oe,B.add(Te)}),x.add(B)}else B=new ct(gi(3,w,_n-.08,I,{seg:[10,2,16],shape:{sag:.008}}).geometry,v[f.mat]??v.foam25),B.castShadow=!0,B.receiveShadow=!0,x.add(B);return B.userData={h:w,hi:0,hiT:0},B}function Bu(f){if(H.groups[f.key])return H.groups[f.key];let x=new qt;return x.visible=!1,H.stack.add(x),x.userData.slabs=[...f.layers].reverse().map(w=>Cp(w,x)),x.userData.sum=x.userData.slabs.reduce((w,I)=>w+I.userData.h,0),x.userData.openH=0,Ou(x),H.groups[f.key]=x,H.mix[f.key]=0,x}let uo={},zu=f=>{let x=ua[f]??ua.aura;return uo[f]||(uo[f]={top:vu(l,x.top,x.rep[0]),side:vu(l/2,x.side??x.top,x.rep[1])}),uo[f]};function ku(f){let x=ua[f]??ua.aura;H.look=x,zu(f),v.top.map=uo[f].top,v.side.map=uo[f].side,v.top.normalMap=x.quilt?c:d,v.side.normalMap=x.quilt?h:d;let w=x.quilt?.62:.32;v.top.normalScale.set(w,w),v.side.normalScale.set(w,w),v.top.sheen=v.side.sheen=x.dark?.16:.7,v.top.sheenColor.set(x.dark?"#a9b8e6":"#fff6ec"),v.side.sheenColor.copy(v.top.sheenColor),v.top.roughness=v.side.roughness=x.dark?.86:.92,v.piping.color.set(x.piping),v.under.color.set(x.under),H.top=x.topper==="pillow"?.2:0,Ap(),ya(),Ic()}function Lc(){let f=Z.w,x=xr();D.scale.x=J.scale.x=f+.44,ee[0].position.x=-(f/2+.12),ee[1].position.x=f/2+.12,xe.forEach(w=>{w.position.x=w.userData.sx*(f/2+.1)}),he.forEach(w=>{w.scale.x=f+.1}),Oe.scale.x=f+.78,P.contact.scale.x=(f+1.2)*1.55,gt.position.set(-(f/2+1.55),0,-_n/2+.55),wt.position.set(f/2+1.25,0,-_n/2+.35),an.scale.set(f+7.6,1,_n+5.6),vi.scale.x=(f+3.2)/9.2,Ve.position.x=(f-6)/2,ya(),[H.pipeT,H.pipeB,H.pipeX].forEach(w=>{w.scale.x=x/(H.builtW||x)}),Object.values(H.groups).forEach(Ou)}let Rp=()=>H.swap<1?Math.sin(ve*H.swap)*.55:0,Pp=.62,Gu=()=>{let f=H.groups[H.key],x=f?f.userData.slabs.length:1,w=Math.min(.28,1.4/Math.max(1,x)),I=.3+x*w+.1,B=I+.66;return{st:w,cover:I,pillows:B,end:B+.15+.62}},Cs=null,Dc=(f,x)=>f<=0?x:f<.72?x*(1-(f/.72)**2):-.03*Math.sin(ve*(f-.72)/.28);function va(){let f=H.open,x=Z.build<1&&!!Cs,w=Z.build*Z.buildT;H.stack.visible=f>.002||x,Object.entries(H.groups).forEach(([Y,V])=>{let Q=H.mix[Y];V.visible=H.stack.visible&&Q>.002;let oe=V.userData.slabs,pe=oe.length,Te=Math.max(.05,H.h-.07)/V.userData.sum,Ye=Math.min(.05,.26/Math.max(1,pe-1)),Rt=.035,Kt=0;oe.forEach((hn,hi)=>{let ui=hn.userData.h,Pi=(pe-1-hi)*Ye,Ii=Ys(Hn((f-Pi)/(1-Pi*.9)));if(hn.position.y=on(Rt+ui*Te/2,Kt+ui*mu/2,Ii),hn.scale.y=on(Te,mu,Ii),Rt+=ui*Te,Kt+=ui*mu+Mc,x&&Y===H.key){let ed=(w-(.3+hi*Cs.st))/Pp;hn.visible=ed>0,hn.position.y+=Dc(ed,2.6)}else hn.visible=!0;if(!V.visible)return;let ki=Y===H.key?1:-1,mo=dp(Hn(Q*1.5-(pe-1-hi)*.1));hn.position.x=ki*(1-mo)*8;let ju=mi(hn.userData.hi,hn.userData.hiT,14,.016);hn.userData.hi=ju,hn.position.z=ju*.5}),V.userData.openH=Kt-Mc});let I=Ys(Hn(f*1.25)),B=x?(w-Cs.cover)/.72:1;H.cover.visible=B>0,H.cover.position.y=on(0,H.coverTop,I)+Rp()+(B<1?Dc(B,3.2):0),H.pillows.forEach((Y,V)=>{let Q=x?(w-Cs.pillows-V*.15)/.6:1;Y.visible=Q>0,Y.position.y=Y.userData.y+(Q<1?Dc(Q,1.8):0)}),H.cover.rotation.x=H.swap<1?-Math.sin(ve*H.swap)*.035:0}function Sa(){let f=i.clientWidth||1,x=i.clientHeight||1;s.setSize(f,x,!1),o.aspect=f/x,o.updateProjectionMatrix();let w=Math.tan(o.fov*ve/360),I=f>860,B=I&&f<1240,Y=(I?B?23.5:19.5:11.5)/(2*w*o.aspect),V=(I?11.6:7.6)/(2*w);Z.dist=Math.max(Y,V),Z.phone=!I,Z.ty=I?2.85:1.75,Mn.dirty=!0,Nn()}let Vu={desk:{tx:0,shift:0,az:-.6,pol:1.15,zoom:.84,dy:.15},phone:{tx:0,shift:0,az:-.55,pol:1.17,zoom:.82,dy:.35}},Js={};function Nc(){let f=t||Z.touched?0:Math.sin(Z.time*.35)*.07,x={az:Z.az*(1-Z.lift*.55),pol:Z.pol+Z.lift*.15,d:Z.dist*(1+Z.lift*(Z.phone?-.08:-.05)),ty:on(Z.ty,Math.max(Z.ty,Cu()),Z.lift),shift:0,tx:0},w=Ec(Z.st,Z.lift),I=Ec(Z.phone?Vu.phone:Vu.desk,0),B=Z.storyW,Y=Ys(Z.buildPose);for(let oe of["az","pol","d","ty","shift","tx"])Js[oe]=on(on(x[oe],w[oe],B),I[oe],Y);let V=Js.az+Z.azUser+f+(1-Z.scrollIn)*.22,Q=Hn(Js.pol+Z.polUser+(1-Z.scrollIn)*.07,.7,1.52);Ru(o,V,Q,Js.d*(1+(1-Z.scrollIn)*.1),Js.ty,Js.shift,Js.tx)}let Hu=new jr,Wu=new ge,fo=new N;function Xu(f){let x=i.getBoundingClientRect();return Wu.set((f.clientX-x.left)/x.width*2-1,-((f.clientY-x.top)/x.height)*2+1),Hu.setFromCamera(Wu,o),!Hu.ray.intersectPlane(a,fo)||Math.abs(fo.x)>xr()/2||Math.abs(fo.z)>_n/2||H.open>.05||H.swap<1?null:{x:fo.x,z:fo.z}}let Jn=null,po=!1,qu=f=>Hn(f,-1-Z.az,(Z.day>=.5?.16:.42)-Z.az),Yu=()=>{po&&(H.dentT=0,po=!1)},Zu=f=>{H.dentX=f.x,H.dentZ=f.z};i.addEventListener("pointerdown",f=>{if(Z.story!=null||Z.buildPose>0)return;Z.touched=!0,Jn={x:f.clientX,y:f.clientY,moved:!1,type:f.pointerType};let x=Xu(f);x&&(po=!0,Zu(x),H.dentT=1,H.dentV-=.4,Nn()),i.setPointerCapture(f.pointerId)}),i.addEventListener("pointermove",f=>{if(Jn){let w=f.clientX-Jn.x,I=f.clientY-Jn.y;!Jn.moved&&Math.hypot(w,I)>6&&(Jn.moved=!0,Yu(),i.classList.add("is-dragging")),Jn.moved&&(Z.vAz=-w*.0045*60,Z.azUser=qu(Z.azUser-w*.0045),Jn.type==="mouse"&&(Z.polUser=Hn(Z.polUser-I*.004,-.5,.3)),Jn.x=f.clientX,Jn.y=f.clientY,Nn());return}if(f.pointerType!=="mouse"||Z.story!=null||Z.buildPose>0)return;let x=Xu(f);x?(Zu(x),H.dentT!==1&&(H.dentT=.4),Nn()):H.dentT===.4&&(H.dentT=0,Nn())});let Ju=()=>{Jn&&(Jn.type!=="mouse"&&!Jn.moved&&po?(setTimeout(()=>{H.dentT=0,Nn()},240),po=!1):Yu(),Jn=null,i.classList.remove("is-dragging"),Nn())};i.addEventListener("pointerup",Ju),i.addEventListener("pointercancel",Ju),i.addEventListener("pointerleave",()=>{H.dentT===.4&&(H.dentT=0),Nn()});function Nn(){Z.idle=!1,!Z.raf&&Z.visible&&(Z.last=performance.now(),Z.raf=requestAnimationFrame(Fc))}let Ku=!t,Uc=!1;function Fc(){Z.raf=0;let f=performance.now();if(Z.idle&&f-Z.lastDraw<30){Z.raf=requestAnimationFrame(Fc);return}let x=Hn((f-Z.last)/1e3,0,.05);Z.last=f,Z.time+=x;let w=!t&&!Z.touched;Ku&&Lt(Z.time),Z.intro<1&&Z.released&&(Z.intro=Math.min(1,Z.intro+x/2.6),Z.scrollIn=dp(Z.intro),w=!0),Z.w!==Z.wTarget?(Z.w=Math.abs(Z.w-Z.wTarget)<.003?Z.wTarget:mi(Z.w,Z.wTarget,7,x),Lc(),w=!0,Uc=!0):Uc&&(Uc=!1,Ic(),Lc()),H.swap<1&&(H.swap=Math.min(1,H.swap+x/(t?.001:.62)),H.swap>=.5&&H.swapTo&&(ku(H.swapTo),H.swapTo=null),w=!0),H.h!==H.hT&&(H.h=Math.abs(H.h-H.hT)<.002?H.hT:mi(H.h,H.hT,6,x),ya(),w=!0,H.h===H.hT&&Ic()),Z.day!==Z.dayT&&(Z.day=t?Z.dayT:Z.dayT>Z.day?Math.min(Z.dayT,Z.day+x/1.5):Math.max(Z.dayT,Z.day-x/1.5),w=!0,An()),Z.build<1&&(Z.build=Math.min(1,Z.build+x/Z.buildT),w=!0,e.onBuild?.(Z.build),Z.build>=1&&e.onBuilt?.()),Z.released&&Z.buildPose>0&&(Z.buildPose=Math.max(0,Z.buildPose-x/2),w=!0,An(),Z.buildPose===0&&e.onSettled?.());let I=Z.story!=null?Eu(Z.story):null;if(I){for(let Te of Au)Math.abs(Z.st[Te]-I[Te])>1e-4?(Z.st[Te]=t?I[Te]:mi(Z.st[Te],I[Te],6,x),w=!0):Z.st[Te]=I[Te];Math.abs(Z.azUser)+Math.abs(Z.polUser)>1e-4&&(Z.azUser=mi(Z.azUser,0,4,x),Z.polUser=mi(Z.polUser,0,4,x),w=!0)}let B=I?1:0;Z.storyW!==B&&(Z.storyW=t||Math.abs(Z.storyW-B)<.002?B:mi(Z.storyW,B,5,x),w=!0);for(let Te in Mn.blocks)Mn.blocks[Te].oT=I?Tu(Te,Z.story):0;if(Mn.dirty&&Iu(),I&&I.open!=null)Math.abs(H.open-I.open)>8e-4?(H.open=t?I.open:mi(H.open,I.open,7,x),w=!0):H.open=I.open;else{let Te=Z.allOpen||H.hi!==null?1:0;if(H.open!==Te){let Ye=x/(t?.001:1.15);H.open=Te>H.open?Math.min(1,H.open+Ye):Math.max(0,H.open-Ye*1.2),w=!0}}Object.keys(H.mix).forEach(Te=>{let Ye=Te===H.key?1:0;H.mix[Te]!==Ye&&(w=!0,H.open<.02||t?H.mix[Te]=Ye:H.open>.7&&(H.mix[Te]=Ye?Math.min(1,H.mix[Te]+x/.75):Math.max(0,H.mix[Te]-x/.5)))});let Y=gu[H.feel];Math.abs(H.crown-Y.crown)>6e-4&&(H.crown=mi(H.crown,Y.crown,5,x),ya(),w=!0);for(let Te=0;Te<3;Te++){let Ye=x/3,Rt=(H.dentT*Y.depth-H.dent)*Y.k-H.dentV*Y.c;H.dentV+=Rt*Ye,H.dent+=H.dentV*Ye}(Math.abs(H.dent-H.dentT*Y.depth)>8e-4||Math.abs(H.dentV)>.002)&&(w=!0),da.uDentA.value.set(H.dentX,H.dentZ,Math.max(0,H.dent),Y.radius),Object.values(H.groups).forEach(Te=>Te.userData.slabs.forEach(Ye=>{Math.abs(Ye.userData.hi-Ye.userData.hiT)>.004&&(w=!0)})),va();let V=H.groups[H.key],Q=(V?V.userData.openH:H.h)+Mc*1.4;Math.abs(H.coverTop-Q)>.002&&(H.coverTop=mi(H.coverTop,Q,6,x),w=!0,va());let oe=Z.lift,pe=Ys(H.open);Z.lift=mi(Z.lift,pe,5,x),Math.abs(Z.lift-pe)<5e-4&&(Z.lift=pe),Z.lift!==oe&&(w=!0,e.onLift?.(Z.lift)),!Jn&&Math.abs(Z.vAz)>.002?(Z.azUser=qu(Z.azUser+Z.vAz*x),Z.vAz*=Math.exp(-3.5*x),w=!0):Jn||(Z.vAz=0),Nc(),Rn.visible=o.position.y<ze-.25,Tp(x)&&(w=!0),s.render(r,o),Z.lastDraw=f,Z.idle=!w,(w||Ku)&&Z.visible&&(Z.raf=requestAnimationFrame(Fc))}try{await Promise.all([document.fonts.load('200px "Young Serif"'),document.fonts.load('600 30px "Hanken Grotesk"'),document.fonts.load('400 30px "Hanken Grotesk"')])}catch{}let zi=e.model;Bu(zi),H.key=zi.key,H.mix[zi.key]=1,H.feel=zi.feel,H.crown=gu[zi.feel].crown,H.h=H.hT=zi.inches/10,H.label=zi.label,H.lookName=zi.look,ku(zi.look),Lc(),va(),H.coverTop=H.groups[zi.key].userData.openH+Mc*1.4,e.build&&!t?(Cs=Gu(),Z.build=0,Z.buildT=Cs.end,Z.buildPose=1,Z.released=!1,Z.intro=1,Z.scrollIn=1):e.intro&&!t?(Z.intro=0,Z.scrollIn=0,Z.released=!1):(Z.intro=1,Z.scrollIn=1),e.story!=null&&(Z.story=e.story),Sa(),va(),An();let $u=window.requestIdleCallback||(f=>setTimeout(f,120)),Ip=Object.keys(ua).filter(f=>f!==zi.look),Qu=()=>{let f=Ip.shift();if(!f)return;let x=zu(f);s.initTexture(x.top),s.initTexture(x.side),$u(Qu)};setTimeout(()=>$u(Qu),1500),addEventListener("resize",Sa),window.ResizeObserver&&new ResizeObserver(Sa).observe(i),new IntersectionObserver(([f])=>{Z.visible=f.isIntersecting,Z.visible&&Nn()}).observe(i),Z.visible=!0,Nc();{let f=[De,je,Mt,O,Bt,an].filter(x=>!x.visible);f.forEach(x=>{x.visible=!0});try{s.compileAsync?await s.compileAsync(r,o):s.compile(r,o)}catch{}s.render(r,o),f.forEach(x=>{x.visible=!1})}return s.render(r,o),Z.visible=i.getBoundingClientRect().top<innerHeight,e.onReady?.(),Nn(),{setModel(f){Bu(f);let x=f.look!==H.lookName||f.label!==H.label;H.key=f.key,H.feel=f.feel,H.hT=f.inches/10,x&&(H.lookName=f.look,H.label=f.label,H.swapTo=f.look,H.swap=0),Object.values(H.groups).forEach(w=>w.userData.slabs.forEach(I=>{I.userData.hiT=0})),H.hi=null,Z.build<1&&(Cs=Gu(),Z.buildT=Cs.end),Nn()},setOpen(f){Z.allOpen=f,Nn()},release(){Z.released||(Z.released=!0,Z.build=1,Nn())},setStory(f,x){if(Z.story=f,f!=null&&x){let w=Eu(f);for(let I of Au)Z.st[I]=w[I];H.open=w.open,Z.storyW=1}Nn()},setBlockSizes(f){Mn.sizes=f,Mn.last="",Iu();for(let x in Mn.blocks)Mn.blocks[x].o=Mn.blocks[x].oT=Z.story!=null?Tu(x,Z.story):0;Cc="",Nn()},setPalette({n:f,m:x}={}){let w=new Ke("#ffffff");f&&(vn.color.set(f),Yn.color.set(f).multiplyScalar(.72)),x&&(L.color.set(x),U.color.set(x).lerp(w,.38),K.color.set(x).lerp(w,.18)),Nn()},setTheme(f,x){Z.dayT=f==="morning"?1:0,(x||t)&&(Z.day=Z.dayT,An()),Nn()},highlight(f){H.hi=f;let x=H.groups[H.key];x&&[...x.userData.slabs].reverse().forEach((w,I)=>{w.userData.hiT=I===f?1:0}),Nn()},setWidth(f){Z.wTarget=f/10,Nn()},resize:Sa,debug:{S:Z,mat:H,renderer:s,words:Mn,render:()=>{Nc(),s.render(r,o)}}}}async function Oy(i,e){let t=Math.min(innerWidth,innerHeight)<600,n;try{n=new ca({canvas:i,antialias:!0,alpha:!0,powerPreference:"default"})}catch(k){return e.onFail?.(k),null}n.setPixelRatio(Math.min(devicePixelRatio||1,t?1.75:1.5)),n.toneMapping=no,n.shadowMap.enabled=!0,n.shadowMap.type=Hs,Zs=Math.min(12,n.capabilities.getMaxAnisotropy());let{sideQ:s,pore:r,weave:o,egg:a,chips:l,oakRail:c,oakPlank:h}=await Mp(t),u=new Ns,d=new Un(28,1.8,1,160);{let k=new Ns,ie=new fr(n);k.background=new Ke("#20294a");let _e=(ke,tt,Tt,It,en,Nt,Jt)=>{let Sn=new ct(new Pt(Tt,It),new Vn({color:new Ke(ke).multiplyScalar(tt),side:ln}));Sn.position.set(en,Nt,Jt),Sn.lookAt(0,0,0),k.add(Sn)};_e("#ffe2c0",4,14,10,-10,9,8),_e("#b9cbff",3,10,14,12,7,-6),_e("#ffffff",1.4,30,10,0,16,0),u.environment=ie.fromScene(k,.05).texture,ie.dispose()}let p=7.8,m=5,T=1.15,g=1.35,_=72,M=8,E=-p/2,v=Array.from({length:_+1},(k,ie)=>E+p*ie/_),P=Array.from({length:M+1},(k,ie)=>-m/2+m*ie/M),C=(k,ie,_e)=>Math.exp(-((k-ie)**2)/(2*_e*_e)),y=k=>70+(k-E)/p*860,A=k=>{let ie=y(k);return .26*C(ie,178,66)+.74*C(ie,330,52)+C(ie,548,56)+.42*C(ie,652,58)+.22*C(ie,770,48)+.3*C(ie,862,22)},G=k=>.6+.4*Math.exp(-((k/1.15)**2)),F={cover:1.15,memory:1,foam22:.86,pu:.8,profile:.78,foam25:.66,foam30:.5,hd:.36,rebond:.14},z=(k,ie)=>{if(k!=="zones")return F[k]??.6;let _e=(ie-E)/p;return _e<1/3?.72:_e<2/3?.3:.66},q={Soft:.27,Medium:.2,Hard:.14},j=(k,ie,_e)=>{let ke=document.createElement("canvas");ke.width=k,ke.height=ie,_e(ke.getContext("2d"),k,ie);let tt=new ri(ke);return tt.colorSpace=bn,tt.anisotropy=Zs,tt},D=new ri(bp());D.colorSpace=bn;let J=(k,ie={})=>new ft({color:k,roughness:.95,normalMap:r,normalScale:new ge(.7,.7),vertexColors:!0,...ie}),ee=o.clone();ee.repeat.set(10,7),ee.needsUpdate=!0;let X={cover:new oi({color:"#f5f3ee",roughness:.9,sheen:.8,sheenRoughness:.6,sheenColor:new Ke("#ffffff"),normalMap:s,normalScale:new ge(.5,.5),vertexColors:!0}),foam22:J("#f4f2ea"),foam25:J("#efe7d3"),foam30:J("#e4d8bb"),hd:J("#e3eaf1"),memory:J("#e8bf78"),pu:J("#e2efe4"),profile:J("#f3f1e9",{normalMap:a,normalScale:new ge(1.2,1.2)}),rebond:J("#ffffff",{map:l}),zoneSoft:J("#f4f1e7"),zoneFirm:J("#cfb98a"),oak:new ft({map:c,roughness:.5,color:new Ke(1.45,1.38,1.3)}),plank:new ft({map:h,roughness:.5,color:new Ke(1.1,1.04,.98)}),pillow:new oi({color:"#f4f2ec",roughness:1,sheen:1,sheenRoughness:.7,sheenColor:new Ke("#ffffff"),normalMap:r,normalScale:new ge(.2,.2)}),sheet:new oi({color:"#ebe7de",roughness:.92,sheen:.7,sheenRoughness:.6,sheenColor:new Ke("#ffffff"),normalMap:ee,normalScale:new ge(.18,.18),side:ln}),duvet:new oi({color:"#2d3558",roughness:.96,sheen:.55,sheenRoughness:.55,sheenColor:new Ke("#8592c8"),normalMap:ee,normalScale:new ge(.28,.28),side:ln}),skin:new ft({color:"#c79a7d",roughness:.62}),skinDark:new ft({color:"#a97c62",roughness:.7}),hair:new oi({color:"#2a1c12",roughness:.42,sheen:.6,sheenRoughness:.35,sheenColor:new Ke("#9a7656")}),dark:new ft({color:"#241d1a",roughness:.45}),brass:new ft({color:"#b8925a",roughness:.3,metalness:.85}),shade:new ft({color:"#f1e2c6",emissive:new Ke("#ffad5c"),emissiveIntensity:1.3,roughness:.9,side:ln}),frame:new ft({color:"#141824",roughness:.38,metalness:.4})},xe=-m/2-1.15,ne=new ct(new Pt(34,16),new ft({color:"#1b2343",roughness:.95,alphaMap:gp(512,.26,.5),transparent:!0}));ne.position.set(.5,5.6,xe),ne.receiveShadow=!0,u.add(ne);let he=h.clone();he.wrapS=he.wrapT=si,he.repeat.set(4.5,34),he.needsUpdate=!0;let fe=new ct(new Pt(34,24),new ft({map:he,color:"#4c3c34",roughness:.42,alphaMap:gp(512,.2,.5),transparent:!0}));fe.rotation.x=-ve/2,fe.position.set(.5,0,2.5),fe.receiveShadow=!0,u.add(fe);let Xe=.9,qe=4.5,re=2.4,Oe=6.3,me=qe-Xe,Ge=Oe-re,Fe=(Xe+qe)/2,et=(re+Oe)/2,Qt=j(256,280,(k,ie,_e)=>{let ke=un(8),tt=k.createLinearGradient(0,0,0,_e);tt.addColorStop(0,"#060a1d"),tt.addColorStop(.55,"#15214b"),tt.addColorStop(1,"#2d4174"),k.fillStyle=tt,k.fillRect(0,0,ie,_e);for(let Jt=0;Jt<90;Jt++)k.fillStyle=`rgba(235,240,255,${(.15+ke()*.5).toFixed(2)})`,k.fillRect(ke()*ie,ke()*_e*.7,1.2,1.2);let Tt=ie*.64,It=_e*.24,en=ie*.08,Nt=k.createRadialGradient(Tt,It,en,Tt,It,en*6);Nt.addColorStop(0,"rgba(190,208,255,.38)"),Nt.addColorStop(1,"rgba(190,208,255,0)"),k.fillStyle=Nt,k.fillRect(0,0,ie,_e),k.fillStyle="#fbf8ea",k.beginPath(),k.arc(Tt,It,en,0,ve*2),k.fill(),k.fillStyle="rgba(15,22,52,.9)",k.beginPath(),k.moveTo(0,_e);for(let Jt=0;Jt<=ie;Jt+=4)k.lineTo(Jt,_e*(.86+.03*Math.sin(Jt*.05)+.015*Math.sin(Jt*.17)));k.lineTo(ie,_e),k.fill()}),it=j(256,280,(k,ie,_e)=>{let ke=k.createLinearGradient(0,0,0,_e);ke.addColorStop(0,"#7db1e2"),ke.addColorStop(.5,"#c9def0"),ke.addColorStop(.85,"#ffd9ab"),ke.addColorStop(1,"#ffc88f"),k.fillStyle=ke,k.fillRect(0,0,ie,_e);let tt=ie*.3,Tt=_e*.74,It=ie*.07,en=k.createRadialGradient(tt,Tt,It*.5,tt,Tt,It*8);en.addColorStop(0,"rgba(255,242,218,.95)"),en.addColorStop(.25,"rgba(255,214,160,.4)"),en.addColorStop(1,"rgba(255,214,160,0)"),k.fillStyle=en,k.fillRect(0,0,ie,_e),k.fillStyle="#fffbf2",k.beginPath(),k.arc(tt,Tt,It,0,ve*2),k.fill(),k.fillStyle="rgba(122,150,128,.85)",k.beginPath(),k.moveTo(0,_e);for(let Nt=0;Nt<=ie;Nt+=4)k.lineTo(Nt,_e*(.86+.03*Math.sin(Nt*.05)+.015*Math.sin(Nt*.17)));k.lineTo(ie,_e),k.fill()}),pt=new ct(new Pt(me,Ge),new Vn({map:Qt,toneMapped:!1})),Le=new ct(new Pt(me,Ge),new Vn({map:it,toneMapped:!1,transparent:!0,opacity:0,depthWrite:!1}));pt.position.set(Fe,et,xe+.01),Le.position.set(Fe,et,xe+.015),Le.renderOrder=1,u.add(pt,Le);let ue=(k,ie,_e,ke,tt=.12)=>{let Tt=new ct(new fi(k,ie,tt),X.frame);Tt.position.set(_e,ke,xe+tt/2+.02),Tt.receiveShadow=!0,u.add(Tt)},we=.13;ue(me+we*2,we,Fe,Oe+we/2),ue(me+we*2,we,Fe,re-we/2),ue(we,Ge,Xe-we/2,et),ue(we,Ge,qe+we/2,et),ue(.06,Ge,Fe,et,.08),ue(me,.05,Fe,re+Ge*.55,.08);let Ce=new ft({color:"#d4d8e8",roughness:.92,transparent:!0,opacity:.55,side:ln,depthWrite:!1,emissive:new Ke("#3d4a7a"),emissiveIntensity:.4});{let k=new Pt(1.5,Ge+1.6,26,6),ie=k.attributes.position;for(let ke=0;ke<ie.count;ke++)ie.setZ(ke,Math.sin((ie.getX(ke)/1.5+.5)*ve*6)*.08);k.computeVertexNormals();let _e=new ct(k,Ce);_e.position.set(qe+.55,et+.3,xe+.3),_e.renderOrder=3,u.add(_e)}let Je=j(64,256,(k,ie,_e)=>{let ke=k.createLinearGradient(0,0,0,_e);ke.addColorStop(0,"rgba(255,255,255,1)"),ke.addColorStop(.6,"rgba(255,255,255,.35)"),ke.addColorStop(1,"rgba(255,255,255,0)"),k.fillStyle=ke,k.fillRect(0,0,ie,_e),k.globalCompositeOperation="destination-in";let tt=k.createLinearGradient(0,0,ie,0);tt.addColorStop(0,"rgba(0,0,0,0)"),tt.addColorStop(.25,"#000"),tt.addColorStop(.75,"#000"),tt.addColorStop(1,"rgba(0,0,0,0)"),k.fillStyle=tt,k.fillRect(0,0,ie,_e)}),De=new gn,je=[[Xe,Oe-.1,xe+.04],[qe,Oe-.1,xe+.04],[Xe-1.6,1.4,2.4],[qe-1.6,1.4,2.4]];De.setAttribute("position",new Yt(new Float32Array(je.flat()),3)),De.setAttribute("uv",new Yt(new Float32Array([0,1,1,1,0,0,1,0]),2)),De.setIndex([0,2,1,1,2,3]);let Ve=new ct(De,new Vn({map:Je,color:"#9fb4ff",transparent:!0,opacity:.16,blending:Yi,depthWrite:!1,side:ln,toneMapped:!1}));Ve.renderOrder=4,Ve.frustumCulled=!1,u.add(Ve);let gt=t?50:110,wt=new Float32Array(gt*3),Mt=new Float32Array(gt),O=un(5);for(let k=0;k<gt;k++){let ie=O(),_e=O(),ke=(en,Nt,Jt)=>en.map((Sn,Wt)=>Sn+(Nt[Wt]-Sn)*Jt),tt=ke(je[0],je[1],_e),Tt=ke(je[2],je[3],_e),It=ke(tt,Tt,ie);wt.set([It[0],It[1],It[2]+(O()-.5)*.8],k*3),Mt[k]=O()*50}let Bt=new gn;Bt.setAttribute("position",new Yt(wt,3)),Bt.setAttribute("phase",new Yt(Mt,1));let _t=new wi({uniforms:{uTime:{value:0},uPx:{value:n.getPixelRatio()},uCol:{value:new Ke(.85,.9,1)},uA:{value:.6}},vertexShader:`attribute float phase; uniform float uTime, uPx; varying float vA;
      void main(){ vec3 p = position + vec3(sin(uTime*.21 + phase)*.16, sin(uTime*.13 + phase*1.7)*.22, cos(uTime*.17 + phase*.9)*.16);
        vA = .35 + .65 * (.5 + .5 * sin(uTime * (.9 + fract(phase) * 1.8) + phase * 3.1));
        vec4 mv = modelViewMatrix * vec4(p, 1.); gl_PointSize = uPx * (1.1 + fract(phase * 7.) * 1.6) * (40. / -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 uCol; uniform float uA; varying float vA; void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .04, d) * vA * uA; gl_FragColor = vec4(uCol * a, a); }",transparent:!0,depthWrite:!1,blending:Yi}),Gt=new qr(Bt,_t);Gt.renderOrder=5,Gt.frustumCulled=!1,u.add(Gt);let Ne=new qt;Ne.position.set(E-1.2,0,-.55),u.add(Ne);let jt=(k,ie,_e,ke,tt)=>{let Tt=new ct(k,ie);return Tt.position.set(_e,ke,tt),Tt.castShadow=!0,Tt.receiveShadow=!0,Ne.add(Tt),Tt};jt(new Dn(.66,.66,.06,40),X.dark,0,1.62,0),[0,2.09,4.19].forEach(k=>{jt(new Dn(.04,.028,1.6,8),X.dark,Math.cos(k)*.4,.8,Math.sin(k)*.4).rotation.set(Math.sin(k)*.1,0,-Math.cos(k)*.1)}),jt(new sr([[0,0],[.18,0],[.2,.03],[.18,.06],[.06,.1],[.04,.5],[0,.5]].map(([k,ie])=>new ge(k,ie)),24),X.brass,-.12,1.65,-.1);let ot=jt(new Dn(.22,.31,.38,32,1,!0),X.shade,-.12,2.33,-.1);ot.castShadow=!1;let lt=new nr(new Fs({map:D,color:"#ffb468",transparent:!0,opacity:.45,blending:Yi,depthWrite:!1,toneMapped:!1}));lt.scale.set(2.6,2.6,1),lt.position.set(-.12,2.33,-.1),Ne.add(lt);let R=new ar("#ffb06a",8,9,1.8);R.position.set(-.12,2.4,-.1),Ne.add(R);let S=document.createElement("canvas");S.width=256,S.height=112;let W=new ri(S);W.colorSpace=bn;let ye="",ce=k=>{if(k===ye)return;ye=k;let ie=S.getContext("2d");ie.fillStyle="#0c0e15",ie.fillRect(0,0,256,112),ie.font='700 74px "Hanken Grotesk", system-ui, sans-serif',ie.textAlign="center",ie.textBaseline="middle",ie.shadowColor="#ff6a2a",ie.shadowBlur=14,ie.fillStyle="#ff8152",ie.fillText(k,128,60),W.needsUpdate=!0};ce("11:34");let Ae=new qt;Ae.position.set(.3,1.65,.28),Ae.rotation.y=.35,Ne.add(Ae);let Be=new ct(gi(.5,.24,.17,.025,{seg:[1,1,1]}).geometry,new ft({color:"#1a1c23",roughness:.4}));Be.position.y=.12,Be.castShadow=!0,Ae.add(Be);let ae=new ct(new Pt(.42,.18),new Vn({map:W,toneMapped:!1}));ae.position.set(0,.12,.087),Ae.add(ae);let le=new nr(new Fs({map:D,color:"#ff7a45",transparent:!0,opacity:.25,blending:Yi,depthWrite:!1,toneMapped:!1}));le.scale.set(.6,.6,1),le.position.set(0,.12,.12),Ae.add(le);let Ue=new qt;u.add(Ue);let L=(k,ie,_e,ke,tt,Tt=!0)=>{let It=new ct(k,ie);return It.position.set(_e,ke,tt),It.castShadow=Tt,It.receiveShadow=!0,Ue.add(It),It};L(gi(p+.3,.5,m+.26,.03,{seg:[6,1,4],tile:[[2.6,.4],[8,.5],[2.6,.4]]}).geometry,X.oak,0,T-.25,0);let de=new Dn(.12,.07,T-.5,6);de.rotateY(ve/6),[[-1,1],[1,1],[-1,-1],[1,-1]].forEach(([k,ie])=>L(de,X.oak,k*(p/2-.1),(T-.5)/2,ie*(m/2-.05)));{let k=new Xi,ie=(m+.5)/2,_e=3.1,ke=.4,tt=.06;k.moveTo(-ie,0),k.lineTo(ie,0),k.lineTo(ie,_e-ke),k.absellipse(ie-tt,_e-ke,tt,ke,0,ve/2,!1,0),k.lineTo(-ie+tt,_e),k.absellipse(-ie+tt,_e-ke,tt,ke,ve/2,ve,!1,0),k.lineTo(-ie,0);let Tt=new Bs(k,{depth:.14,bevelEnabled:!0,bevelThickness:.03,bevelSize:.012,bevelSegments:3,curveSegments:20}),It=L(Tt,X.plank,E-.36,.2,0);It.rotation.y=ve/2}let se;{let k=document.createElement("canvas");k.width=k.height=128;let ie=k.getContext("2d"),_e=ie.createRadialGradient(64,64,6,64,64,62);_e.addColorStop(0,"rgba(0,0,0,.75)"),_e.addColorStop(1,"rgba(0,0,0,0)"),ie.fillStyle=_e,ie.fillRect(0,0,128,128),se=new ct(new Pt(1,1),new Vn({map:new ri(k),transparent:!0,depthWrite:!1})),se.rotation.x=-ve/2,se.position.set(0,.012,0),se.scale.set(p+3,m+2.2,1),u.add(se)}class Ie{constructor(ie,_e,ke){this.ia=ie,this.ib=_e;let tt=_e-ie+1,Tt=tt*(M+1)+tt*2+(M+1)*4;this.pos=new Float32Array(Tt*3),this.col=new Float32Array(Tt*3).fill(1);let It=new Float32Array(Tt*2),en=[],Nt=this.geo=new gn;for(let Ct=0;Ct<tt-1;Ct++)for(let bt=0;bt<M;bt++){let tn=Ct*(M+1)+bt,Bn=tn+M+1;en.push(tn,tn+1,Bn,Bn,tn+1,Bn+1)}let Jt=tt*(M+1);for(let Ct=0;Ct<tt-1;Ct++){let bt=Jt+Ct*2,tn=bt+2;en.push(bt,bt+1,tn,tn,bt+1,tn+1)}let Sn=Jt+tt*2,Wt=Sn+(M+1)*2;for(let Ct=0;Ct<M;Ct++){let bt=Sn+Ct*2,tn=bt+2;en.push(bt,tn,bt+1,bt+1,tn,tn+1)}for(let Ct=0;Ct<M;Ct++){let bt=Wt+Ct*2,tn=bt+2;en.push(bt,bt+1,tn,tn,bt+1,tn+1)}this.fr=Jt,Nt.setIndex(en),Nt.setAttribute("position",new Yt(this.pos,3)),Nt.setAttribute("color",new Yt(this.col,3)),Nt.setAttribute("uv",new Yt(It,2)),this.uv=It,this.mesh=new ct(Nt,ke),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1}fill(ie,_e,ke){let{pos:tt,uv:Tt,col:It,ia:en,ib:Nt}=this,Jt=0,Sn=(Wt,Ct,bt,tn,Bn)=>{tt[Jt*3]=Wt,tt[Jt*3+1]=Ct,tt[Jt*3+2]=bt,Tt[Jt*2]=tn,Tt[Jt*2+1]=Bn,Jt++};for(let Wt=en;Wt<=Nt;Wt++)for(let Ct=0;Ct<=M;Ct++)Sn(v[Wt],ie(Wt,Ct),P[Ct],v[Wt]/1.3,P[Ct]/1.3);for(let Wt=en;Wt<=Nt;Wt++){let Ct=ie(Wt,M),bt=_e(Wt,M),tn=ke(Wt),Bn=(this.fr+(Wt-en)*2)*3;Sn(v[Wt],Ct,m/2,v[Wt]/1.3,Ct/1.3),Sn(v[Wt],bt,m/2,v[Wt]/1.3,bt/1.3);let Pn=1,Bi=1-.36*tn,fs=1-.62*tn;It[Bn]=Pn,It[Bn+1]=Bi,It[Bn+2]=fs,It[Bn+3]=Pn,It[Bn+4]=Bi,It[Bn+5]=fs}for(let Wt of[en,Nt])for(let Ct=0;Ct<=M;Ct++){let bt=ie(Wt,Ct),tn=_e(Wt,Ct);Sn(v[Wt],bt,P[Ct],P[Ct]/1.3,bt/1.3),Sn(v[Wt],tn,P[Ct],P[Ct]/1.3,tn/1.3)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.computeVertexNormals()}}let Me=new qt;u.add(Me);let Se=[],nt=[],mt=.7,Ee="Medium",st=1,rt=[],He=!1,Et=0,cn=new Vn({color:"#0a0d1c",transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1}),ei=[];function pr(k){ei.forEach(ie=>{Me.remove(ie),ie.geometry.dispose()}),ei=Array.from({length:Math.max(0,k-1)},()=>{let ie=new Pt(1,1,_,1),_e=new ct(ie,cn);return _e.frustumCulled=!1,_e.renderOrder=2,Me.add(_e),_e})}function As(k){nt.forEach(ke=>{Me.remove(ke.mesh),ke.geo.dispose()}),Ee=k.feel,Se=[{mat:"cover",h:(k.inches<=5?.045:.07)*g},...k.layers.map(ke=>({mat:ke.mat,h:ke.inches/10*g}))],mt=Se.reduce((ke,tt)=>ke+tt.h,0),He=Se.some(ke=>ke.mat==="zones"),Et=Se.findIndex(ke=>ke.mat==="rebond"),Et<0&&(Et=Se.length-1);let _e=ke=>Se.reduce((tt,Tt)=>tt+z(Tt.mat,ke)*Tt.h,0);st=v.reduce((ke,tt)=>ke+_e(tt),0)/v.length,nt=[],Se.forEach((ke,tt)=>{(ke.mat==="zones"?[[0,_/3,X.zoneSoft],[_/3,_*2/3,X.zoneFirm],[_*2/3,_,X.zoneSoft]]:[[0,_,X[ke.mat]??X.foam25]]).forEach(([It,en,Nt])=>{let Jt=new Ie(It,en,Nt);Jt.k=tt,nt.push(Jt),Me.add(Jt.mesh)})}),rt=Array.from({length:Se.length+1},()=>Array.from({length:_+1},()=>new Float32Array(M+1))),pr(Se.length),Rn=null}let mr=gi(2.05,.56,1.6,.25,{cs:4,seg:[12,3,10],shape:{crown:.1,bulge:.05}}).geometry,Qi=new ct(mr,X.pillow);Qi.castShadow=!0,Qi.receiveShadow=!0,u.add(Qi);let _i=new ct(mr,X.pillow);_i.castShadow=!0,_i.receiveShadow=!0,_i.rotation.y=-.06,u.add(_i);let ti=E+1.12,ni=new qt;u.add(ni);{let k=new ct(wc(.4),X.hair);k.scale.set(1.12,.82,1),ni.add(k);let ie=new ct(wc(.26),X.hair);ie.scale.set(1.1,.7,1),ie.position.set(-.22,.06,-.04),ni.add(ie);let _e=new ct(wc(.075),X.skinDark);_e.scale.set(1.3,.5,1),_e.position.set(.06,.31,-.02),ni.add(_e);let ke=new ct(wc(.2),X.skin);ke.scale.set(1.3,.9,.9),ke.position.set(.34,-.04,-.06),ni.add(ke),ni.traverse(tt=>{tt.castShadow=!0,tt.receiveShadow=!0})}let Ci=E+1.62,Es=p/2+.14,Cn=90,li=30,ji=-m/2-.55,Oi=m/2+.015,cs=new Pt(1,1,Cn,li),Vt=new ct(cs,X.duvet);Vt.castShadow=!0,Vt.receiveShadow=!0,Vt.frustumCulled=!1,u.add(Vt);let xi=5,yi=new Pt(1,1,Cn,xi),vi=new ct(yi,X.duvet);vi.castShadow=!0,vi.receiveShadow=!0,vi.frustumCulled=!1,u.add(vi);let hs=8,us=new Pt(1,1,hs,li),b=new ct(us,X.sheet);b.castShadow=!0,b.receiveShadow=!0,b.frustumCulled=!1,u.add(b);let U=[[0,.46,.7],[.32,.9,.82],[.8,.8,.8],[1.3,.64,.72],[1.9,.9,.8],[2.55,.74,.74],[3.25,.62,.7],[4.2,.46,.62],[5,.4,.55],[5.45,.3,.5],[5.9,.12,.45]],te=(k,ie)=>{if(k<=U[0][0])return U[0][ie];for(let _e=1;_e<U.length;_e++)if(k<=U[_e][0]){let ke=(k-U[_e-1][0])/(U[_e][0]-U[_e-1][0]),tt=ke*ke*(3-2*ke);return on(U[_e-1][ie],U[_e][ie],tt)}return U[U.length-1][ie]},K=new Kr("#3b4a86","#0b0f22",.55);u.add(K);let $=new Vs("#a9bcff",.45);$.position.set(5,12,6),u.add($);let Re=new or("#a9bcff",300,24,.5,.8,1.5);Re.position.set(Fe,et+.5,xe+.35),Re.target.position.set(-.9,1.9,.2),Re.castShadow=!0,Re.shadow.mapSize.set(t?1024:2048,t?1024:2048),Re.shadow.bias=-5e-4,Re.shadow.normalBias=.02,Re.shadow.radius=5,Re.shadow.camera.near=.5,Re.shadow.camera.far=30,u.add(Re,Re.target);let $e=new Vs("#c9d4ff",.5);$e.position.set(-3,4,12),u.add($e);let be=(k,ie)=>[new Ke(k),new Ke(ie)],Pe={hemiS:be("#3b4a86","#eef3ff"),hemiG:be("#0b0f22","#e8d6bf"),moon:be("#a9bcff","#ffe3bd"),front:be("#c9d4ff","#fff6ec"),duvet:be("#2d3558","#eef1f6"),sheen:be("#8592c8","#ffffff"),skin:be("#c79a7d","#d8a888"),wall:be("#1b2343","#ebe5db"),floor:be("#3a2e29","#c9b195"),frame:be("#141824","#f2eee8"),curtain:be("#d4d8e8","#ffffff"),curtainE:be("#3d4a7a","#fff0da"),beam:be("#9fb4ff","#ffd59c"),dust:be("#d9e6ff","#ffe2b0"),sheet:be("#ebe7de","#f7f4ee")},We=(k,ie,_e)=>k.copy(ie[0]).lerp(ie[1],_e),at=e.theme==="morning"?1:0,St=at,Qe=0,xt=0,an=1;function Xt(){let k=Fi(0,1,at),ie=1-k;We(K.color,Pe.hemiS,k),We(K.groundColor,Pe.hemiG,k),K.intensity=on(.55,1.15,k),We($.color,Pe.moon,k),$.intensity=on(.45,1.5,k),We(Re.color,Pe.moon,k),Re.intensity=on(300,520,k),We($e.color,Pe.front,k),$e.intensity=on(.5,.75,k),We(X.duvet.color,Pe.duvet,k),We(X.duvet.sheenColor,Pe.sheen,k),We(X.sheet.color,Pe.sheet,k),We(X.skin.color,Pe.skin,k),We(ne.material.color,Pe.wall,k),We(fe.material.color,Pe.floor,k),We(X.frame.color,Pe.frame,k),We(Ce.color,Pe.curtain,k),We(Ce.emissive,Pe.curtainE,k),Ce.opacity=on(.55,.75,k),Le.material.opacity=k,We(Ve.material.color,Pe.beam,k),Ve.material.opacity=on(.16,.22,k),We(_t.uniforms.uCol.value,Pe.dust,k),_t.uniforms.uA.value=on(.6,.85,k),u.environmentIntensity=on(.35,.85,k),se.material.opacity=on(.85,.5,k);let _e=ie*an;R.intensity=8*_e,X.shade.emissiveIntensity=.05+1.25*_e,lt.material.opacity=.45*_e,le.material.opacity=.25*ie}let Ht=0,fn=0,ze=0,Zt=0,At=0,Ri=0;function vn(){let k=i.clientWidth||1,ie=i.clientHeight||1;n.setSize(k,ie,!1),d.aspect=k/ie;let _e=k>900&&k/ie>1.25,ke=Math.tan(d.fov*ve/360),tt=p+3.6;Ri=_e?.19:0,d.userData.d=Math.max(tt/(2*ke*d.aspect*(_e?.58:.97)),3.4/ke),d.filmOffset=-Ri*2*ke*d.aspect*d.getFilmWidth(),d.updateProjectionMatrix()}function ds(){let k=d.userData.d*(1-.05*At),ie=-.14+Ht,_e=.21+fn;d.position.set(-.5+Math.sin(ie)*Math.cos(_e)*k,1.95+Math.sin(_e)*k,Math.cos(ie)*Math.cos(_e)*k),d.lookAt(-.5,1.95,0),d.updateMatrixWorld()}i.addEventListener("pointermove",k=>{let ie=i.getBoundingClientRect();ze=((k.clientX-ie.left)/ie.width-.5)*.12,Zt=-((k.clientY-ie.top)/ie.height-.5)*.06,zt()},{passive:!0}),i.addEventListener("pointerleave",()=>{ze=0,Zt=0,zt()});let Rn=null,Yn={shoulders:new N,hips:new N,core:new N};function yt(k,ie){let _e=Ys(Hn(k)),ke=Se.length,tt=Math.min(.42,mt*q[Ee]*1.6);At=_e,an=1-Fi(.9,1,k);let Tt=[T+mt];Se.forEach((Lt,Ot)=>Tt.push(Tt[Ot]-Lt.h));for(let Lt=0;Lt<=_;Lt++){let Ot=v[Lt],Ft=Se.map(An=>z(An.mat,Ot)*An.h),ht=Ft.reduce((An,zn)=>An+zn,0),yn=tt*_e*A(Ot)*(ht/st);for(let An=0;An<=M;An++){let zn=yn*G(P[An]),es=0;rt[ke][Lt][An]=Tt[ke];for(let En=ke-1;En>=0;En--){es+=zn*Ft[En]/ht;let ci=Tt[En]-es;En>0&&Se[En].mat==="profile"&&(ci+=.012*Math.sin(Ot*9.5)),rt[En][Lt][An]=ci}}}nt.forEach(Lt=>{let Ot=Se[Lt.k].h;Lt.fill((Ft,ht)=>rt[Lt.k][Ft][ht],(Ft,ht)=>rt[Lt.k+1][Ft][ht],Ft=>Hn((1-(rt[Lt.k][Ft][M]-rt[Lt.k+1][Ft][M])/Ot)*6.5))}),ei.forEach((Lt,Ot)=>{let Ft=Lt.geometry.attributes.position.array;for(let ht=0;ht<=_;ht++){let yn=rt[Ot+1][ht][M];Ft[ht*3]=v[ht],Ft[ht*3+1]=yn+.006,Ft[ht*3+2]=m/2+.004,Ft[(_+1+ht)*3]=v[ht],Ft[(_+1+ht)*3+1]=yn-.006,Ft[(_+1+ht)*3+2]=m/2+.004}Lt.geometry.attributes.position.needsUpdate=!0});let It=(Lt,Ot)=>{let Ft=Hn((Lt-E)/p*_,0,_),ht=Math.min(_-1,Math.floor(Ft)),yn=Ft-ht,An=Hn((Ot+m/2)/m*M,0,M),zn=Math.min(M-1,Math.floor(An)),es=An-zn,En=rt[0][ht][zn]+(rt[0][ht+1][zn]-rt[0][ht][zn])*yn,ci=rt[0][ht][zn+1]+(rt[0][ht+1][zn+1]-rt[0][ht][zn+1])*yn;return En+(ci-En)*es},en=It(ti,0);Qi.position.set(ti-.05,en+.26,-.05),Qi.scale.set(1,1-.1*_e,1),_i.position.set(ti-.12,It(ti,-1.4)+.26,-1.45),ni.position.set(ti+.02,en+.66+.025*(1-_e)+.006*Math.sin(ie),-.12),ni.rotation.z=.06+.03*(1-_e);let Nt=cs.attributes.position.array,Jt=1-_e;for(let Lt=0;Lt<=li;Lt++){let Ot=ji+(Oi-ji)*Lt/li;for(let Ft=0;Ft<=Cn;Ft++){let ht=Ci+(Es-Ci)*Ft/Cn,yn=ht-Ci,An=(Lt*(Cn+1)+Ft)*3,zn=te(yn,2)*1.12,es=1/(1+(Math.abs(Ot)/zn)**3.2),En=Math.exp(-(((yn-.75)/.5)**2)),ci=It(Math.min(ht,p/2),Math.max(-m/2,Math.min(m/2,Ot)))+.11+te(yn,1)*es*(1+.05*Jt)+Math.sin(ie)*.03*En*es;ci+=.045*Math.exp(-((yn/.14)**2)),ci+=(.016*Math.sin(ht*2.1+Ot*1.1+1.3)+.007*Math.sin(ht*5.3-Ot*1.9))*Fi(.2,1.2,yn)*(1-es*.6),Ot<-m/2&&(ci-=(-m/2-Ot)*1.7),Ot>m/2-.34&&(ci-=((Ot-(m/2-.34))/.36)**2*.1),ht>p/2-.06&&(ci-=(ht-(p/2-.06))*1.9),Nt[An]=ht,Nt[An+1]=ci,Nt[An+2]=Ot}}cs.attributes.position.needsUpdate=!0,cs.computeVertexNormals();let Sn=yi.attributes.position.array,Wt=.1;for(let Lt=0;Lt<=xi;Lt++){let Ot=Lt/xi*ve/2;for(let Ft=0;Ft<=Cn;Ft++){let ht=(li*(Cn+1)+Ft)*3,yn=(Lt*(Cn+1)+Ft)*3;Sn[yn]=Nt[ht],Sn[yn+1]=Nt[ht+1]-Wt+Math.cos(Ot)*Wt-(Lt===xi?.02:0),Sn[yn+2]=Nt[ht+2]+Math.sin(Ot)*Wt*.9}}yi.attributes.position.needsUpdate=!0,yi.computeVertexNormals();let Ct=us.attributes.position.array,bt=.42;for(let Lt=0;Lt<=li;Lt++)for(let Ot=0;Ot<=hs;Ot++){let Ft=Math.round(Ot/hs*bt/(Es-Ci)*Cn),ht=(Lt*(Cn+1)+Ft)*3,yn=(Lt*(hs+1)+Ot)*3;Ct[yn]=Nt[ht]-.012,Ct[yn+1]=Nt[ht+1]+.028+.02*Math.sin(Ot/hs*ve),Ct[yn+2]=Nt[ht+2]}us.attributes.position.needsUpdate=!0,us.computeVertexNormals();let tn=Lt=>{let Ot=Math.round(Lt/(Es-Ci)*Cn),Ft=Math.round((0-ji)/(Oi-ji)*li),ht=(Ft*(Cn+1)+Ot)*3;return[Nt[ht],Nt[ht+1]]},[Bn,Pn]=tn(.36),[Bi,fs]=tn(1.92);Yn.shoulders.set(Bn,Pn+.04,0),Yn.hips.set(Bi,fs+.04,0);let gr=Math.round((Bi-E)/p*_),_r=(rt[Et][gr][M]+rt[Et+1][gr][M])/2;Yn.core.set(Bi+.6,_r,m/2+.01)}let xn=new N;function Zn(){if(!e.onPoints)return;let k=i.clientWidth,ie=i.clientHeight,_e={};for(let ke in Yn)xn.copy(Yn[ke]).project(d),_e[ke]=[(xn.x*.5+.5)*k,(.5-xn.y*.5)*ie];e.onPoints(_e)}function sn(k){let ie=Math.min(.1,Math.max(0,(k-Qe)/1e3));Qe=k;let _e=!1;return at!==St&&(at=St>at?Math.min(St,at+ie/1.4):Math.max(St,at-ie/1.4),_e=!0),Xt(),Ht=mi(Ht,ze,4,ie),fn=mi(fn,Zt,4,ie),Math.abs(Ht-ze)+Math.abs(fn-Zt)>1e-4&&(_e=!0),_t.uniforms.uTime.value=k/1e3,ds(),n.render(u,d),Zn(),_e}function zt(){xt||(Qe=performance.now(),xt=requestAnimationFrame(Tn))}function Tn(k){xt=0,sn(k)&&(xt=requestAnimationFrame(Tn))}try{await document.fonts.load('700 74px "Hanken Grotesk"')}catch{}return vn(),As(e.model),yt(e.settle??0,0),Xt(),ds(),n.render(u,d),Zn(),addEventListener("resize",()=>{vn(),zt()}),window.ResizeObserver&&new ResizeObserver(()=>{vn(),zt()}).observe(i),e.onReady?.(),{setModel(k){As(k),Rn&&yt(Rn[0],Rn[1]),zt()},draw(k,ie,_e){Rn=[k,ie],_e&&ce(_e),yt(k,ie),sn(performance.now())},setTheme(k,ie){St=k==="morning"?1:0,ie&&(at=St),zt()},setWall(k,ie){k&&Pe.wall[0].set(k),ie&&Pe.wall[1].set(ie),Xt(),zt()},info(){return{zones:He,rebond:Se.some(k=>k.mat==="rebond")}}}}function wc(i){return new sr(Array.from({length:17},(e,t)=>{let n=-ve/2+ve*t/16;return new ge(Math.cos(n)*i+1e-4,Math.sin(n)*i)}),28)}window.EasyComfortBed={mount:Fy,mountNight:Oy};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
