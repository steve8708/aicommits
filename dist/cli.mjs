#!/usr/bin/env node
import{Buffer as wt}from"node:buffer";import A from"node:path";import Te from"node:child_process";import v,{stdin as Oe,stdout as Pe}from"node:process";import xt from"child_process";import M from"path";import Z from"fs";import St from"node:url";import $t,{constants as Ae}from"node:os";import vt from"assert";import Et from"events";import It from"buffer";import ee from"stream";import Ct from"util";import{WriteStream as Tt}from"node:tty";import*as U from"node:readline";import Re from"node:readline";import Ot from"tty";import Ge from"fs/promises";import Pt from"os";import{OpenAIApi as At,Configuration as Rt}from"openai";var E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C={},Gt={get exports(){return C},set exports(e){C=e}},te,_e;function _t(){if(_e)return te;_e=1,te=r,r.sync=i;var e=Z;function t(s,o){var c=o.pathExt!==void 0?o.pathExt:process.env.PATHEXT;if(!c||(c=c.split(";"),c.indexOf("")!==-1))return!0;for(var a=0;a<c.length;a++){var u=c[a].toLowerCase();if(u&&s.substr(-u.length).toLowerCase()===u)return!0}return!1}function n(s,o,c){return!s.isSymbolicLink()&&!s.isFile()?!1:t(o,c)}function r(s,o,c){e.stat(s,function(a,u){c(a,a?!1:n(u,s,o))})}function i(s,o){return n(e.statSync(s),s,o)}return te}var ne,ke;function kt(){if(ke)return ne;ke=1,ne=t,t.sync=n;var e=Z;function t(s,o,c){e.stat(s,function(a,u){c(a,a?!1:r(u,o))})}function n(s,o){return r(e.statSync(s),o)}function r(s,o){return s.isFile()&&i(s,o)}function i(s,o){var c=s.mode,a=s.uid,u=s.gid,d=o.uid!==void 0?o.uid:process.getuid&&process.getuid(),f=o.gid!==void 0?o.gid:process.getgid&&process.getgid(),m=parseInt("100",8),y=parseInt("010",8),x=parseInt("001",8),S=m|y,$=c&x||c&y&&u===f||c&m&&a===d||c&S&&d===0;return $}return ne}var D;process.platform==="win32"||E.TESTING_WINDOWS?D=_t():D=kt();var Lt=re;re.sync=Nt;function re(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,i){re(e,t||{},function(s,o){s?i(s):r(o)})})}D(e,t||{},function(r,i){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,i=!1),n(r,i)})}function Nt(e,t){try{return D.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}const R=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Le=M,jt=R?";":":",Ne=Lt,je=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Be=(e,t)=>{const n=t.colon||jt,r=e.match(/\//)||R&&e.match(/\\/)?[""]:[...R?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],i=R?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=R?i.split(n):[""];return R&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:r,pathExt:s,pathExtExe:i}},Fe=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});const{pathEnv:r,pathExt:i,pathExtExe:s}=Be(e,t),o=[],c=u=>new Promise((d,f)=>{if(u===r.length)return t.all&&o.length?d(o):f(je(e));const m=r[u],y=/^".*"$/.test(m)?m.slice(1,-1):m,x=Le.join(y,e),S=!y&&/^\.[\\\/]/.test(e)?e.slice(0,2)+x:x;d(a(S,u,0))}),a=(u,d,f)=>new Promise((m,y)=>{if(f===i.length)return m(c(d+1));const x=i[f];Ne(u+x,{pathExt:s},(S,$)=>{if(!S&&$)if(t.all)o.push(u+x);else return m(u+x);return m(a(u,d,f+1))})});return n?c(0).then(u=>n(null,u),n):c(0)},Bt=(e,t)=>{t=t||{};const{pathEnv:n,pathExt:r,pathExtExe:i}=Be(e,t),s=[];for(let o=0;o<n.length;o++){const c=n[o],a=/^".*"$/.test(c)?c.slice(1,-1):c,u=Le.join(a,e),d=!a&&/^\.[\\\/]/.test(e)?e.slice(0,2)+u:u;for(let f=0;f<r.length;f++){const m=d+r[f];try{if(Ne.sync(m,{pathExt:i}))if(t.all)s.push(m);else return m}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw je(e)};var Ft=Fe;Fe.sync=Bt;var K={},Mt={get exports(){return K},set exports(e){K=e}};const Me=(e={})=>{const t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};Mt.exports=Me,K.default=Me;const Ue=M,Ut=Ft,Dt=K;function De(e,t){const n=e.options.env||process.env,r=process.cwd(),i=e.options.cwd!=null,s=i&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let o;try{o=Ut.sync(e.command,{path:n[Dt({env:n})],pathExt:t?Ue.delimiter:void 0})}catch{}finally{s&&process.chdir(r)}return o&&(o=Ue.resolve(i?e.options.cwd:"",o)),o}function Kt(e){return De(e)||De(e,!0)}var Wt=Kt,se={};const ie=/([()\][%!^"`<>&|;, *?])/g;function qt(e){return e=e.replace(ie,"^$1"),e}function Ht(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(ie,"^$1"),t&&(e=e.replace(ie,"^$1")),e}se.command=qt,se.argument=Ht;var Vt=/^#!(.*)/;const Yt=Vt;var zt=(e="")=>{const t=e.match(Yt);if(!t)return null;const[n,r]=t[0].replace(/#! ?/,"").split(" "),i=n.split("/").pop();return i==="env"?r:r?`${i} ${r}`:i};const oe=Z,Xt=zt;function Jt(e){const n=Buffer.alloc(150);let r;try{r=oe.openSync(e,"r"),oe.readSync(r,n,0,150,0),oe.closeSync(r)}catch{}return Xt(n.toString())}var Qt=Jt;const Zt=M,Ke=Wt,We=se,en=Qt,tn=process.platform==="win32",nn=/\.(?:com|exe)$/i,rn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function sn(e){e.file=Ke(e);const t=e.file&&en(e.file);return t?(e.args.unshift(e.file),e.command=t,Ke(e)):e.file}function on(e){if(!tn)return e;const t=sn(e),n=!nn.test(t);if(e.options.forceShell||n){const r=rn.test(t);e.command=Zt.normalize(e.command),e.command=We.command(e.command),e.args=e.args.map(s=>We.argument(s,r));const i=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${i}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function cn(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);const r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:on(r)}var an=cn;const ce=process.platform==="win32";function ae(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function un(e,t){if(!ce)return;const n=e.emit;e.emit=function(r,i){if(r==="exit"){const s=qe(i,t);if(s)return n.call(e,"error",s)}return n.apply(e,arguments)}}function qe(e,t){return ce&&e===1&&!t.file?ae(t.original,"spawn"):null}function ln(e,t){return ce&&e===1&&!t.file?ae(t.original,"spawnSync"):null}var fn={hookChildProcess:un,verifyENOENT:qe,verifyENOENTSync:ln,notFoundError:ae};const He=xt,ue=an,le=fn;function Ve(e,t,n){const r=ue(e,t,n),i=He.spawn(r.command,r.args,r.options);return le.hookChildProcess(i,r),i}function dn(e,t,n){const r=ue(e,t,n),i=He.spawnSync(r.command,r.args,r.options);return i.error=i.error||le.verifyENOENTSync(i.status,r),i}Gt.exports=Ve,C.spawn=Ve,C.sync=dn,C._parse=ue,C._enoent=le;function mn(e){const t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===n&&(e=e.slice(0,-1)),e}function Ye(e={}){const{env:t=process.env,platform:n=process.platform}=e;return n!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"}function pn(e={}){const{cwd:t=v.cwd(),path:n=v.env[Ye()],execPath:r=v.execPath}=e;let i;const s=t instanceof URL?St.fileURLToPath(t):t;let o=A.resolve(s);const c=[];for(;i!==o;)c.push(A.join(o,"node_modules/.bin")),i=o,o=A.resolve(o,"..");return c.push(A.resolve(s,r,"..")),[...c,n].join(A.delimiter)}function hn({env:e=v.env,...t}={}){e={...e};const n=Ye({env:e});return t.path=e[n],e[n]=pn(t),e}const gn=(e,t,n,r)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;const i=Object.getOwnPropertyDescriptor(e,n),s=Object.getOwnPropertyDescriptor(t,n);!yn(i,s)&&r||Object.defineProperty(e,n,s)},yn=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},bn=(e,t)=>{const n=Object.getPrototypeOf(t);n!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,n)},wn=(e,t)=>`/* Wrapped ${e}*/
${t}`,xn=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Sn=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),$n=(e,t,n)=>{const r=n===""?"":`with ${n.trim()}() `,i=wn.bind(null,r,t.toString());Object.defineProperty(i,"name",Sn),Object.defineProperty(e,"toString",{...xn,value:i})};function vn(e,t,{ignoreNonConfigurable:n=!1}={}){const{name:r}=e;for(const i of Reflect.ownKeys(t))gn(e,t,i,n);return bn(e,t),$n(e,t,r),e}const W=new WeakMap,ze=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0;const i=e.displayName||e.name||"<anonymous>",s=function(...o){if(W.set(s,++r),r===1)n=e.apply(this,o),e=null;else if(t.throw===!0)throw new Error(`Function \`${i}\` can only be called once`);return n};return vn(s,e),W.set(s,r),s};ze.callCount=e=>{if(!W.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return W.get(e)};const En=function(){const e=Je-Xe+1;return Array.from({length:e},In)},In=function(e,t){return{name:`SIGRT${t+1}`,number:Xe+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Xe=34,Je=64,Cn=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}],Qe=function(){const e=En();return[...Cn,...e].map(Tn)},Tn=function({name:e,number:t,description:n,action:r,forced:i=!1,standard:s}){const{signals:{[e]:o}}=Ae,c=o!==void 0;return{name:e,number:c?o:t,description:n,supported:c,action:r,forced:i,standard:s}},On=function(){const e=Qe();return Object.fromEntries(e.map(Pn))},Pn=function({name:e,number:t,description:n,supported:r,action:i,forced:s,standard:o}){return[e,{name:e,number:t,description:n,supported:r,action:i,forced:s,standard:o}]},An=On(),Rn=function(){const e=Qe(),t=Je+1,n=Array.from({length:t},(r,i)=>Gn(i,e));return Object.assign({},...n)},Gn=function(e,t){const n=_n(e,t);if(n===void 0)return{};const{name:r,description:i,supported:s,action:o,forced:c,standard:a}=n;return{[e]:{name:r,number:e,description:i,supported:s,action:o,forced:c,standard:a}}},_n=function(e,t){const n=t.find(({name:r})=>Ae.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)};Rn();const kn=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:i,exitCode:s,isCanceled:o})=>e?`timed out after ${t} milliseconds`:o?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${i})`:s!==void 0?`failed with exit code ${s}`:"failed",Ze=({stdout:e,stderr:t,all:n,error:r,signal:i,exitCode:s,command:o,escapedCommand:c,timedOut:a,isCanceled:u,killed:d,parsed:{options:{timeout:f}}})=>{s=s===null?void 0:s,i=i===null?void 0:i;const m=i===void 0?void 0:An[i].description,y=r&&r.code,S=`Command ${kn({timedOut:a,timeout:f,errorCode:y,signal:i,signalDescription:m,exitCode:s,isCanceled:u})}: ${o}`,$=Object.prototype.toString.call(r)==="[object Error]",B=$?`${S}
${r.message}`:S,F=[B,t,e].filter(Boolean).join(`
`);return $?(r.originalMessage=r.message,r.message=F):r=new Error(F),r.shortMessage=B,r.command=o,r.escapedCommand=c,r.exitCode=s,r.signal=i,r.signalDescription=m,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(a),r.isCanceled=u,r.killed=d&&!a,r},q=["stdin","stdout","stderr"],Ln=e=>q.some(t=>e[t]!==void 0),Nn=e=>{if(!e)return;const{stdio:t}=e;if(t===void 0)return q.map(r=>e[r]);if(Ln(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${q.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);const n=Math.max(t.length,q.length);return Array.from({length:n},(r,i)=>t[i])};var G={},et={get exports(){return G},set exports(e){G=e}},H={},jn={get exports(){return H},set exports(e){H=e}},tt;function Bn(){return tt||(tt=1,function(e){e.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"],process.platform!=="win32"&&e.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT"),process.platform==="linux"&&e.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")}(jn)),H}var p=E.process;const T=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};if(!T(p))et.exports=function(){return function(){}};else{var Fn=vt,N=Bn(),Mn=/^win/i.test(p.platform),V=Et;typeof V!="function"&&(V=V.EventEmitter);var b;p.__signal_exit_emitter__?b=p.__signal_exit_emitter__:(b=p.__signal_exit_emitter__=new V,b.count=0,b.emitted={}),b.infinite||(b.setMaxListeners(1/0),b.infinite=!0),et.exports=function(e,t){if(!T(E.process))return function(){};Fn.equal(typeof e,"function","a callback must be provided for exit handler"),j===!1&&nt();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){b.removeListener(n,e),b.listeners("exit").length===0&&b.listeners("afterexit").length===0&&fe()};return b.on(n,e),r};var fe=function(){!j||!T(E.process)||(j=!1,N.forEach(function(t){try{p.removeListener(t,de[t])}catch{}}),p.emit=me,p.reallyExit=rt,b.count-=1)};G.unload=fe;var _=function(t,n,r){b.emitted[t]||(b.emitted[t]=!0,b.emit(t,n,r))},de={};N.forEach(function(e){de[e]=function(){if(T(E.process)){var n=p.listeners(e);n.length===b.count&&(fe(),_("exit",null,e),_("afterexit",null,e),Mn&&e==="SIGHUP"&&(e="SIGINT"),p.kill(p.pid,e))}}}),G.signals=function(){return N};var j=!1,nt=function(){j||!T(E.process)||(j=!0,b.count+=1,N=N.filter(function(t){try{return p.on(t,de[t]),!0}catch{return!1}}),p.emit=Dn,p.reallyExit=Un)};G.load=nt;var rt=p.reallyExit,Un=function(t){T(E.process)&&(p.exitCode=t||0,_("exit",p.exitCode,null),_("afterexit",p.exitCode,null),rt.call(p,p.exitCode))},me=p.emit,Dn=function(t,n){if(t==="exit"&&T(E.process)){n!==void 0&&(p.exitCode=n);var r=me.apply(this,arguments);return _("exit",p.exitCode,null),_("afterexit",p.exitCode,null),r}else return me.apply(this,arguments)}}const Kn=1e3*5,Wn=(e,t="SIGTERM",n={})=>{const r=e(t);return qn(e,t,n,r),r},qn=(e,t,n,r)=>{if(!Hn(t,n,r))return;const i=Yn(n),s=setTimeout(()=>{e("SIGKILL")},i);s.unref&&s.unref()},Hn=(e,{forceKillAfterTimeout:t},n)=>Vn(e)&&t!==!1&&n,Vn=e=>e===$t.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Yn=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Kn;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},zn=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Xn=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Jn=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let i;const s=new Promise((c,a)=>{i=setTimeout(()=>{Xn(e,n,a)},t)}),o=r.finally(()=>{clearTimeout(i)});return Promise.race([s,o])},Qn=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Zn=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;const i=G(()=>{e.kill()});return r.finally(()=>{i()})};function er(e){return e!==null&&typeof e=="object"&&typeof e.pipe=="function"}var O={},tr={get exports(){return O},set exports(e){O=e}};const{PassThrough:nr}=ee;var rr=e=>{e={...e};const{array:t}=e;let{encoding:n}=e;const r=n==="buffer";let i=!1;t?i=!(n||r):n=n||"utf8",r&&(n=null);const s=new nr({objectMode:i});n&&s.setEncoding(n);let o=0;const c=[];return s.on("data",a=>{c.push(a),i?o=c.length:o+=a.length}),s.getBufferedValue=()=>t?c:r?Buffer.concat(c,o):c.join(""),s.getBufferedLength=()=>o,s};const{constants:sr}=It,ir=ee,{promisify:or}=Ct,cr=rr,ar=or(ir.pipeline);class st extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}}async function pe(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};const{maxBuffer:n}=t,r=cr(t);return await new Promise((i,s)=>{const o=c=>{c&&r.getBufferedLength()<=sr.MAX_LENGTH&&(c.bufferedData=r.getBufferedValue()),s(c)};(async()=>{try{await ar(e,r),i()}catch(c){o(c)}})(),r.on("data",()=>{r.getBufferedLength()>n&&o(new st)})}),r.getBufferedValue()}tr.exports=pe,O.buffer=(e,t)=>pe(e,{...t,encoding:"buffer"}),O.array=(e,t)=>pe(e,{...t,array:!0}),O.MaxBufferError=st;const{PassThrough:ur}=ee;var lr=function(){var e=[],t=new ur({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",i),Array.prototype.slice.call(arguments).forEach(n),t;function n(s){return Array.isArray(s)?(s.forEach(n),this):(e.push(s),s.once("end",i.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function r(){return e.length==0}function i(s){e=e.filter(function(o){return o!==s}),!e.length&&t.readable&&t.end()}};const fr=(e,t)=>{t!==void 0&&(er(t)?t.pipe(e.stdin):e.stdin.end(t))},dr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;const n=lr();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},he=async(e,t)=>{if(!(!e||t===void 0)){e.destroy();try{return await t}catch(n){return n.bufferedData}}},ge=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?O(e,{encoding:t,maxBuffer:r}):O.buffer(e,{maxBuffer:r})},mr=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:i,maxBuffer:s},o)=>{const c=ge(e,{encoding:r,buffer:i,maxBuffer:s}),a=ge(t,{encoding:r,buffer:i,maxBuffer:s}),u=ge(n,{encoding:r,buffer:i,maxBuffer:s*2});try{return await Promise.all([o,c,a,u])}catch(d){return Promise.all([{error:d,signal:d.signal,timedOut:d.timedOut},he(e,c),he(t,a),he(n,u)])}},pr=(async()=>{})().constructor.prototype,hr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(pr,e)]),it=(e,t)=>{for(const[n,r]of hr){const i=typeof t=="function"?(...s)=>Reflect.apply(r.value,t(),s):r.value.bind(t);Reflect.defineProperty(e,n,{...r,value:i})}return e},gr=e=>new Promise((t,n)=>{e.on("exit",(r,i)=>{t({exitCode:r,signal:i})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})}),ot=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],yr=/^[\w.-]+$/,br=/"/g,wr=e=>typeof e!="string"||yr.test(e)?e:`"${e.replace(br,'\\"')}"`,xr=(e,t)=>ot(e,t).join(" "),Sr=(e,t)=>ot(e,t).map(n=>wr(n)).join(" "),$r=1e3*1e3*100,vr=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:i})=>{const s=t?{...v.env,...e}:e;return n?hn({env:s,cwd:r,execPath:i}):s},Er=(e,t,n={})=>{const r=C._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n={maxBuffer:$r,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||v.cwd(),execPath:v.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...n},n.env=vr(n),n.stdio=Nn(n),v.platform==="win32"&&A.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},ye=(e,t,n)=>typeof t!="string"&&!wt.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?mn(t):t;function Y(e,t,n){const r=Er(e,t,n),i=xr(e,t),s=Sr(e,t);Qn(r.options);let o;try{o=Te.spawn(r.file,r.args,r.options)}catch(y){const x=new Te.ChildProcess,S=Promise.reject(Ze({error:y,stdout:"",stderr:"",all:"",command:i,escapedCommand:s,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return it(x,S)}const c=gr(o),a=Jn(o,r.options,c),u=Zn(o,r.options,a),d={isCanceled:!1};o.kill=Wn.bind(null,o.kill.bind(o)),o.cancel=zn.bind(null,o,d);const m=ze(async()=>{const[{error:y,exitCode:x,signal:S,timedOut:$},B,F,bt]=await mr(o,r.options,u),ve=ye(r.options,B),Ee=ye(r.options,F),Ie=ye(r.options,bt);if(y||x!==0||S!==null){const Ce=Ze({error:y,exitCode:x,signal:S,stdout:ve,stderr:Ee,all:Ie,command:i,escapedCommand:s,parsed:r,timedOut:$,isCanceled:d.isCanceled||(r.options.signal?r.options.signal.aborted:!1),killed:o.killed});if(!r.options.reject)return Ce;throw Ce}return{command:i,escapedCommand:s,exitCode:0,stdout:ve,stderr:Ee,all:Ie,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return fr(o,r.options.input),o.all=dr(o,r.options),it(o,m)}let P=!0;const k=typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{};let ct=0;if(k.process&&k.process.env&&k.process.stdout){const{FORCE_COLOR:e,NODE_DISABLE_COLORS:t,NO_COLOR:n,TERM:r}=k.process.env;t||n||e==="0"?P=!1:e==="1"||e==="2"||e==="3"?P=!0:r==="dumb"?P=!1:"CI"in k.process.env&&["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI","GITHUB_ACTIONS","BUILDKITE","DRONE"].some(i=>i in k.process.env)?P=!0:P=process.stdout.isTTY,P&&(ct=r&&r.endsWith("-256color")?2:1)}let at={enabled:P,supportLevel:ct};function z(e,t,n=1){const r=`\x1B[${e}m`,i=`\x1B[${t}m`,s=new RegExp(`\\x1b\\[${t}m`,"g");return o=>at.enabled&&at.supportLevel>=n?r+(""+o).replace(s,r)+i:""+o}const Ir=z(30,39),Cr=z(31,39),Tr=z(32,39),Or=z(46,49),be="\x1B",g=`${be}[`,Pr="\x07",we={to(e,t){return t?`${g}${t+1};${e+1}H`:`${g}${e+1}G`},move(e,t){let n="";return e<0?n+=`${g}${-e}D`:e>0&&(n+=`${g}${e}C`),t<0?n+=`${g}${-t}A`:t>0&&(n+=`${g}${t}B`),n},up:(e=1)=>`${g}${e}A`,down:(e=1)=>`${g}${e}B`,forward:(e=1)=>`${g}${e}C`,backward:(e=1)=>`${g}${e}D`,nextLine:(e=1)=>`${g}E`.repeat(e),prevLine:(e=1)=>`${g}F`.repeat(e),left:`${g}G`,hide:`${g}?25l`,show:`${g}?25h`,save:`${be}7`,restore:`${be}8`},Ar={up:(e=1)=>`${g}S`.repeat(e),down:(e=1)=>`${g}T`.repeat(e)},Rr={screen:`${g}2J`,up:(e=1)=>`${g}1J`.repeat(e),down:(e=1)=>`${g}J`.repeat(e),line:`${g}2K`,lineEnd:`${g}K`,lineStart:`${g}1K`,lines(e){let t="";for(let n=0;n<e;n++)t+=this.line+(n<e-1?we.up():"");return e&&(t+=we.left),t}};var w={cursor:we,scroll:Ar,erase:Rr,beep:Pr},l={},Gr={get exports(){return l},set exports(e){l=e}};let _r=Ot,kr=!("NO_COLOR"in process.env||process.argv.includes("--no-color"))&&("FORCE_COLOR"in process.env||process.argv.includes("--color")||process.platform==="win32"||_r.isatty(1)&&process.env.TERM!=="dumb"||"CI"in process.env),h=(e,t,n=e)=>r=>{let i=""+r,s=i.indexOf(t,e.length);return~s?e+ut(i,t,n,s)+t:e+i+t},ut=(e,t,n,r)=>{let i=e.substring(0,r)+n,s=e.substring(r+t.length),o=s.indexOf(t);return~o?i+ut(s,t,n,o):i+s},lt=(e=kr)=>({isColorSupported:e,reset:e?t=>`\x1B[0m${t}\x1B[0m`:String,bold:e?h("\x1B[1m","\x1B[22m","\x1B[22m\x1B[1m"):String,dim:e?h("\x1B[2m","\x1B[22m","\x1B[22m\x1B[2m"):String,italic:e?h("\x1B[3m","\x1B[23m"):String,underline:e?h("\x1B[4m","\x1B[24m"):String,inverse:e?h("\x1B[7m","\x1B[27m"):String,hidden:e?h("\x1B[8m","\x1B[28m"):String,strikethrough:e?h("\x1B[9m","\x1B[29m"):String,black:e?h("\x1B[30m","\x1B[39m"):String,red:e?h("\x1B[31m","\x1B[39m"):String,green:e?h("\x1B[32m","\x1B[39m"):String,yellow:e?h("\x1B[33m","\x1B[39m"):String,blue:e?h("\x1B[34m","\x1B[39m"):String,magenta:e?h("\x1B[35m","\x1B[39m"):String,cyan:e?h("\x1B[36m","\x1B[39m"):String,white:e?h("\x1B[37m","\x1B[39m"):String,gray:e?h("\x1B[90m","\x1B[39m"):String,bgBlack:e?h("\x1B[40m","\x1B[49m"):String,bgRed:e?h("\x1B[41m","\x1B[49m"):String,bgGreen:e?h("\x1B[42m","\x1B[49m"):String,bgYellow:e?h("\x1B[43m","\x1B[49m"):String,bgBlue:e?h("\x1B[44m","\x1B[49m"):String,bgMagenta:e?h("\x1B[45m","\x1B[49m"):String,bgCyan:e?h("\x1B[46m","\x1B[49m"):String,bgWhite:e?h("\x1B[47m","\x1B[49m"):String});Gr.exports=lt(),l.createColors=lt;function Lr(e,t){if(e===t)return;const n=e.split(`
`),r=t.split(`
`),i=[];for(let s=0;s<Math.max(n.length,r.length);s++)n[s]!==r[s]&&i.push(s);return i}const ft=Symbol("clack:cancel");function Nr(e){return e===ft}function X(e,t){e.isTTY&&e.setRawMode(t)}const jr=new Set(["up","down","left","right","space","enter"]);class Br{constructor({render:t,input:n=Oe,output:r=Pe,...i},s=!0){this._track=!1,this._cursor=0,this.state="initial",this.error="",this.subscribers=new Map,this._prevFrame="",this.opts=i,this.onKeypress=this.onKeypress.bind(this),this.close=this.close.bind(this),this.render=this.render.bind(this),this._render=t.bind(this),this._track=s,this.input=n,this.output=r}prompt(){const t=new Tt(0);return t._write=(n,r,i)=>{this._track&&(this.value=this.rl.line.replace(/\t/g,""),this._cursor=this.rl.cursor,this.emit("value",this.value)),i()},this.input.pipe(t),this.rl=Re.createInterface({input:this.input,output:t,tabSize:2,prompt:"",escapeCodeTimeout:50}),Re.emitKeypressEvents(this.input,this.rl),this.rl.prompt(),this.opts.initialValue!==void 0&&this._track&&this.rl.write(this.opts.initialValue),this.input.on("keypress",this.onKeypress),X(this.input,!0),this.render(),new Promise((n,r)=>{this.once("submit",()=>{this.output.write(w.cursor.show),X(this.input,!1),n(this.value)}),this.once("cancel",()=>{this.output.write(w.cursor.show),X(this.input,!1),n(ft)})})}on(t,n){const r=this.subscribers.get(t)??[];r.push({cb:n}),this.subscribers.set(t,r)}once(t,n){const r=this.subscribers.get(t)??[];r.push({cb:n,once:!0}),this.subscribers.set(t,r)}emit(t,...n){const r=this.subscribers.get(t)??[],i=[];for(const s of r)s.cb(...n),s.once&&i.push(()=>r.splice(r.indexOf(s),1));for(const s of i)s()}unsubscribe(){this.subscribers.clear()}onKeypress(t,n){if(this.state==="error"&&(this.state="active"),n?.name&&jr.has(n.name)&&this.emit("cursor",n.name),t&&(t.toLowerCase()==="y"||t.toLowerCase()==="n")&&this.emit("confirm",t.toLowerCase()==="y"),n?.name==="return"){if("placeholder"in this.opts&&!this.value&&(this.value=this.opts.placeholder),this.opts.validate){const r=this.opts.validate(this.value);r&&(this.error=r,this.state="error",this.rl.write(this.value))}this.state!=="error"&&(this.state="submit")}t===""&&(this.state="cancel"),(this.state==="submit"||this.state==="cancel")&&this.emit("finalize"),this.render(),(this.state==="submit"||this.state==="cancel")&&this.close()}close(){this.input.removeListener("keypress",this.onKeypress),this.output.write(`
`),X(this.input,!1),this.rl.close(),this.emit(`${this.state}`,this.value),this.unsubscribe()}restoreCursor(){const t=this._prevFrame.split(`
`).length-1;this.output.write(w.cursor.move(-999,t*-1))}render(){const t=this._render(this)??"";if(t!==this._prevFrame){if(this.state==="initial")this.output.write(w.cursor.hide);else{const n=Lr(this._prevFrame,t);if(this.restoreCursor(),n&&n?.length===1){const r=n[0];this.output.write(w.cursor.move(0,r)),this.output.write(w.erase.lines(1));const i=t.split(`
`);this.output.write(i[r]),this._prevFrame=t,this.output.write(w.cursor.move(0,i.length-r-1));return}else if(n&&n?.length>1){const r=n[0];this.output.write(w.cursor.move(0,r)),this.output.write(w.erase.down());const i=t.split(`
`).slice(r);this.output.write(i.join(`
`)),this._prevFrame=t;return}this.output.write(w.erase.down())}this.output.write(t),this.state==="initial"&&(this.state="active"),this._prevFrame=t}}}class Fr extends Br{get cursor(){return this.value?0:1}get _value(){return this.cursor===0}constructor(t){super(t,!1),this.value=!!t.initialValue,this.on("value",()=>{this.value=this._value}),this.on("confirm",n=>{this.output.write(w.cursor.move(0,-1)),this.value=n,this.state="submit",this.close()}),this.on("cursor",()=>{this.value=!this.value})}}function Mr({input:e=Oe,output:t=Pe,overwrite:n=!0,hideCursor:r=!0}={}){const i=U.createInterface({input:e,output:t,prompt:"",tabSize:1});U.emitKeypressEvents(e,i),e.isTTY&&e.setRawMode(!0);const s=(o,{name:c})=>{if(String(o)===""&&process.exit(0),!n)return;let a=c==="return"?0:-1,u=c==="return"?-1:0;U.moveCursor(t,a,u,()=>{U.clearLine(t,1,()=>{e.once("keypress",s)})})};return r&&process.stdout.write(w.cursor.hide),e.once("keypress",s),()=>{e.off("keypress",s),r&&process.stdout.write(w.cursor.show),i.close()}}const Ur=e=>{switch(e){case"initial":case"active":return l.cyan("\u25CF");case"cancel":return l.red("\u25A0");case"error":return l.yellow("\u25B2");case"submit":return l.green("\u25CB")}},Dr="\u250C",I="\u2502",dt="\u2514",Kr=e=>{const t=e.active??"Yes",n=e.inactive??"No";return new Fr({active:t,inactive:n,initialValue:e.initialValue??!0,render(){const r=`${l.gray(I)}
${Ur(this.state)}  ${e.message}
`,i=this.value?t:n;switch(this.state){case"submit":return`${r}${l.gray(I)}  ${l.dim(i)}`;case"cancel":return`${r}${l.gray(I)}  ${l.strikethrough(l.dim(i))}
${l.gray(I)}`;default:return`${r}${l.cyan(I)}  ${this.value?`${l.green("\u25CF")} ${t}`:`${l.dim("\u25CB")} ${l.dim(t)}`} ${l.dim("/")} ${this.value?`${l.dim("\u25CB")} ${l.dim(n)}`:`${l.green("\u25CF")} ${n}`}
${l.cyan(dt)}
`}}}).prompt()},Wr=(e="")=>{process.stdout.write(`${l.gray(Dr)}  ${e}
`)},xe=(e="")=>{process.stdout.write(`${l.gray(I)}
${l.gray(dt)}  ${e}

`)},qr=["\u25D2","\u25D0","\u25D3","\u25D1"],mt=()=>{let e,t;const n=qr,r=80;return{start(i=""){i=i.replace(/\.?\.?\.$/,""),e=Mr(),process.stdout.write(`${l.gray(I)}
${l.magenta("\u25CB")}  ${i}
`);let s=0,o=0;t=setInterval(()=>{let c=n[s];process.stdout.write(w.cursor.move(-999,-1)),process.stdout.write(`${l.magenta(c)}  ${i}${Math.floor(o)>=1?".".repeat(Math.floor(o)).slice(0,3):""}   
`),s=s===n.length-1?0:s+1,o=o===n.length?0:o+.125},r)},stop(i=""){process.stdout.write(w.cursor.move(-999,-2)),process.stdout.write(w.erase.down(2)),clearInterval(t),process.stdout.write(`${l.gray(I)}
${l.green("\u25CB")}  ${i}
`),e()}}},{hasOwnProperty:Se}=Object.prototype,J=typeof process<"u"&&process.platform==="win32"?`\r
`:`
`,$e=(e,t)=>{const n=[];let r="";typeof t=="string"?t={section:t,whitespace:!1}:(t=t||Object.create(null),t.whitespace=t.whitespace===!0);const i=t.whitespace?" = ":"=";for(const s of Object.keys(e)){const o=e[s];if(o&&Array.isArray(o))for(const c of o)r+=L(s+"[]")+i+L(c)+J;else o&&typeof o=="object"?n.push(s):r+=L(s)+i+L(o)+J}t.section&&r.length&&(r="["+L(t.section)+"]"+J+r);for(const s of n){const o=pt(s).join("\\."),c=(t.section?t.section+".":"")+o,{whitespace:a}=t,u=$e(e[s],{section:c,whitespace:a});r.length&&u.length&&(r+=J),r+=u}return r},pt=e=>e.replace(/\1/g,"LITERAL\\1LITERAL").replace(/\\\./g,"").split(/\./).map(t=>t.replace(/\1/g,"\\.").replace(/\2LITERAL\\1LITERAL\2/g,"")),ht=e=>{const t=Object.create(null);let n=t,r=null;const i=/^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i,s=e.split(/[\r\n]+/g);for(const c of s){if(!c||c.match(/^\s*[;#]/))continue;const a=c.match(i);if(!a)continue;if(a[1]!==void 0){if(r=Q(a[1]),r==="__proto__"){n=Object.create(null);continue}n=t[r]=t[r]||Object.create(null);continue}const u=Q(a[2]),d=u.length>2&&u.slice(-2)==="[]",f=d?u.slice(0,-2):u;if(f==="__proto__")continue;const m=a[3]?Q(a[4]):!0,y=m==="true"||m==="false"||m==="null"?JSON.parse(m):m;d&&(Se.call(n,f)?Array.isArray(n[f])||(n[f]=[n[f]]):n[f]=[]),Array.isArray(n[f])?n[f].push(y):n[f]=y}const o=[];for(const c of Object.keys(t)){if(!Se.call(t,c)||typeof t[c]!="object"||Array.isArray(t[c]))continue;const a=pt(c);n=t;const u=a.pop(),d=u.replace(/\\\./g,".");for(const f of a)f!=="__proto__"&&((!Se.call(n,f)||typeof n[f]!="object")&&(n[f]=Object.create(null)),n=n[f]);n===t&&d===u||(n[d]=t[c],o.push(c))}for(const c of o)delete t[c];return t},gt=e=>e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'"),L=e=>typeof e!="string"||e.match(/[=\r\n]/)||e.match(/^\[/)||e.length>1&&gt(e)||e!==e.trim()?JSON.stringify(e):e.split(";").join("\\;").split("#").join("\\#"),Q=(e,t)=>{if(e=(e||"").trim(),gt(e)){e.charAt(0)==="'"&&(e=e.slice(1,-1));try{e=JSON.parse(e)}catch{}}else{let n=!1,r="";for(let i=0,s=e.length;i<s;i++){const o=e.charAt(i);if(n)"\\;#".indexOf(o)!==-1?r+=o:r+="\\"+o,n=!1;else{if(";#".indexOf(o)!==-1)break;o==="\\"?n=!0:r+=o}}return n&&(r+="\\"),r.trim()}return e};var Hr={parse:ht,decode:ht,stringify:$e,encode:$e,safe:L,unsafe:Q};const Vr=e=>Ge.access(e).then(()=>!0,()=>!1),Yr=async()=>{const e=M.join(Pt.homedir(),".aicommits");if(!await Vr(e))return{};const n=await Ge.readFile(e,"utf8");return Hr.parse(n)},zr=async()=>{const{stdout:e}=await Y("git",["rev-parse","--is-inside-work-tree"],{reject:!1});if(e!=="true")throw new Error("The current directory must be a Git repository!")},yt=["package-lock.json","yarn.lock","pnpm-lock.yaml"].map(e=>`:(exclude)${e}`),Xr=async()=>{const e=["diff","--cached"],{stdout:t}=await Y("git",[...e,"--name-only",...yt]);if(!t)return;const{stdout:n}=await Y("git",[...e,...yt]);return{files:t.split(`
`),diff:n}},Jr=e=>`Detected ${e.length.toLocaleString()} staged file${e.length>1?"s":""}`,Qr="Write an insightful but concise Git commit message in a complete sentence in present tense for the following diff without prefacing it with anything:",Zr=async(e,t)=>{const n=`${Qr}
${t}`;if(n.length>8e3)throw new Error("The diff is too large for the OpenAI API");const r=new At(new Rt({apiKey:e}));try{return(await r.createCompletion({model:"text-davinci-003",prompt:n,temperature:.7,top_p:1,frequency_penalty:0,presence_penalty:0,max_tokens:200,stream:!1,n:1})).data.choices[0].text.trim().replace(/[\n\r]/g,"")}catch(i){const s=i;throw s.message=`OpenAI API Error: ${s.message} - ${s.response.statusText}`,s}};(async()=>{Wr(Or(Ir(" aicommits "))),await zr();const e=mt();e.start("Detecting staged files");const t=await Xr();if(!t)throw new Error("No staged changes found. Make sure to stage your changes with `git add`.");e.stop(`${Jr(t.files)}:
${t.files.map(c=>`     ${c}`).join(`
`)}`);const n=await Yr(),r=process.env.OPENAI_KEY??process.env.OPENAI_API_KEY??n.OPENAI_KEY;if(!r)throw new Error("Please set your OpenAI API key in ~/.aicommits");const i=mt();i.start("The AI is analyzing your changes");const s=await Zr(r,t.diff);i.stop("The commit message is ready for review");const o=await Kr({message:`Would you like to commit with this message:

   ${s}
`});if(!o||Nr(o)){xe("Commit cancelled");return}await Y("git",["commit","-m",s]),xe(`${Tr("\u2714")} Successfully committed!`)})().catch(e=>{xe(`${Cr("\u2716")} ${e.message}`),process.exit(1)});
