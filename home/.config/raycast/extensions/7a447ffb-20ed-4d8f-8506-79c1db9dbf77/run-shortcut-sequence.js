"use strict";var bn=Object.create;var V=Object.defineProperty;var vn=Object.getOwnPropertyDescriptor;var In=Object.getOwnPropertyNames;var En=Object.getPrototypeOf,Tn=Object.prototype.hasOwnProperty;var l=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Cn=(e,t)=>{for(var n in t)V(e,n,{get:t[n],enumerable:!0})},Ge=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of In(t))!Tn.call(e,o)&&o!==n&&V(e,o,{get:()=>t[o],enumerable:!(r=vn(t,o))||r.enumerable});return e};var Ne=(e,t,n)=>(n=e!=null?bn(En(e)):{},Ge(t||!e||!e.__esModule?V(n,"default",{value:e,enumerable:!0}):n,e)),kn=e=>Ge(V({},"__esModule",{value:!0}),e);var Le=l((To,Fe)=>{Fe.exports=$e;$e.sync=Pn;var Re=require("fs");function qn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var o=n[r].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function Oe(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:qn(t,n)}function $e(e,t,n){Re.stat(e,function(r,o){n(r,r?!1:Oe(o,e,t))})}function Pn(e,t){return Oe(Re.statSync(e),e,t)}});var De=l((Co,je)=>{je.exports=Me;Me.sync=An;var _e=require("fs");function Me(e,t,n){_e.stat(e,function(r,o){n(r,r?!1:Be(o,t))})}function An(e,t){return Be(_e.statSync(e),t)}function Be(e,t){return e.isFile()&&Gn(e,t)}function Gn(e,t){var n=e.mode,r=e.uid,o=e.gid,s=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),c=parseInt("100",8),f=parseInt("010",8),d=parseInt("001",8),h=c|f,S=n&d||n&f&&o===i||n&c&&r===s||n&h&&s===0;return S}});var Ke=l((qo,Ue)=>{var ko=require("fs"),X;process.platform==="win32"||global.TESTING_WINDOWS?X=Le():X=De();Ue.exports=ue;ue.sync=Nn;function ue(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,o){ue(e,t||{},function(s,i){s?o(s):r(i)})})}X(e,t||{},function(r,o){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,o=!1),n(r,o)})}function Nn(e,t){try{return X.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var Je=l((Po,Ye)=>{var R=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",He=require("path"),Rn=R?";":":",Ve=Ke(),Xe=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),We=(e,t)=>{let n=t.colon||Rn,r=e.match(/\//)||R&&e.match(/\\/)?[""]:[...R?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],o=R?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=R?o.split(n):[""];return R&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:r,pathExt:s,pathExtExe:o}},ze=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:o,pathExtExe:s}=We(e,t),i=[],c=d=>new Promise((h,S)=>{if(d===r.length)return t.all&&i.length?h(i):S(Xe(e));let y=r[d],v=/^".*"$/.test(y)?y.slice(1,-1):y,w=He.join(v,e),E=!v&&/^\.[\\\/]/.test(e)?e.slice(0,2)+w:w;h(f(E,d,0))}),f=(d,h,S)=>new Promise((y,v)=>{if(S===o.length)return y(c(h+1));let w=o[S];Ve(d+w,{pathExt:s},(E,C)=>{if(!E&&C)if(t.all)i.push(d+w);else return y(d+w);return y(f(d,h,S+1))})});return n?c(0).then(d=>n(null,d),n):c(0)},On=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:o}=We(e,t),s=[];for(let i=0;i<n.length;i++){let c=n[i],f=/^".*"$/.test(c)?c.slice(1,-1):c,d=He.join(f,e),h=!f&&/^\.[\\\/]/.test(e)?e.slice(0,2)+d:d;for(let S=0;S<r.length;S++){let y=h+r[S];try{if(Ve.sync(y,{pathExt:o}))if(t.all)s.push(y);else return y}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw Xe(e)};Ye.exports=ze;ze.sync=On});var de=l((Ao,le)=>{"use strict";var Qe=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};le.exports=Qe;le.exports.default=Qe});var nt=l((Go,tt)=>{"use strict";var Ze=require("path"),$n=Je(),Fn=de();function et(e,t){let n=e.options.env||process.env,r=process.cwd(),o=e.options.cwd!=null,s=o&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let i;try{i=$n.sync(e.command,{path:n[Fn({env:n})],pathExt:t?Ze.delimiter:void 0})}catch{}finally{s&&process.chdir(r)}return i&&(i=Ze.resolve(o?e.options.cwd:"",i)),i}function Ln(e){return et(e)||et(e,!0)}tt.exports=Ln});var rt=l((No,me)=>{"use strict";var fe=/([()\][%!^"`<>&|;, *?])/g;function _n(e){return e=e.replace(fe,"^$1"),e}function Mn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(fe,"^$1"),t&&(e=e.replace(fe,"^$1")),e}me.exports.command=_n;me.exports.argument=Mn});var st=l((Ro,ot)=>{"use strict";ot.exports=/^#!(.*)/});var ct=l((Oo,it)=>{"use strict";var Bn=st();it.exports=(e="")=>{let t=e.match(Bn);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),o=n.split("/").pop();return o==="env"?r:r?`${o} ${r}`:o}});var ut=l(($o,at)=>{"use strict";var pe=require("fs"),jn=ct();function Dn(e){let n=Buffer.alloc(150),r;try{r=pe.openSync(e,"r"),pe.readSync(r,n,0,150,0),pe.closeSync(r)}catch{}return jn(n.toString())}at.exports=Dn});var mt=l((Fo,ft)=>{"use strict";var Un=require("path"),lt=nt(),dt=rt(),Kn=ut(),Hn=process.platform==="win32",Vn=/\.(?:com|exe)$/i,Xn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Wn(e){e.file=lt(e);let t=e.file&&Kn(e.file);return t?(e.args.unshift(e.file),e.command=t,lt(e)):e.file}function zn(e){if(!Hn)return e;let t=Wn(e),n=!Vn.test(t);if(e.options.forceShell||n){let r=Xn.test(t);e.command=Un.normalize(e.command),e.command=dt.command(e.command),e.args=e.args.map(s=>dt.argument(s,r));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Yn(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:zn(r)}ft.exports=Yn});var St=l((Lo,ht)=>{"use strict";var he=process.platform==="win32";function Se(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Jn(e,t){if(!he)return;let n=e.emit;e.emit=function(r,o){if(r==="exit"){let s=pt(o,t,"spawn");if(s)return n.call(e,"error",s)}return n.apply(e,arguments)}}function pt(e,t){return he&&e===1&&!t.file?Se(t.original,"spawn"):null}function Qn(e,t){return he&&e===1&&!t.file?Se(t.original,"spawnSync"):null}ht.exports={hookChildProcess:Jn,verifyENOENT:pt,verifyENOENTSync:Qn,notFoundError:Se}});var xt=l((_o,O)=>{"use strict";var yt=require("child_process"),ye=mt(),ge=St();function gt(e,t,n){let r=ye(e,t,n),o=yt.spawn(r.command,r.args,r.options);return ge.hookChildProcess(o,r),o}function Zn(e,t,n){let r=ye(e,t,n),o=yt.spawnSync(r.command,r.args,r.options);return o.error=o.error||ge.verifyENOENTSync(o.status,r),o}O.exports=gt;O.exports.spawn=gt;O.exports.sync=Zn;O.exports._parse=ye;O.exports._enoent=ge});var bt=l((Mo,wt)=>{"use strict";wt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var Et=l((Bo,D)=>{"use strict";var j=require("path"),vt=de(),It=e=>{e={cwd:process.cwd(),path:process.env[vt()],execPath:process.execPath,...e};let t,n=j.resolve(e.cwd),r=[];for(;t!==n;)r.push(j.join(n,"node_modules/.bin")),t=n,n=j.resolve(n,"..");let o=j.resolve(e.cwd,e.execPath,"..");return r.push(o),r.concat(e.path).join(j.delimiter)};D.exports=It;D.exports.default=It;D.exports.env=e=>{e={env:process.env,...e};let t={...e.env},n=vt({env:t});return e.path=t[n],t[n]=D.exports(e),t}});var Ct=l((jo,xe)=>{"use strict";var Tt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};xe.exports=Tt;xe.exports.default=Tt});var qt=l((Do,z)=>{"use strict";var er=Ct(),W=new WeakMap,kt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,o=e.displayName||e.name||"<anonymous>",s=function(...i){if(W.set(s,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return n};return er(s,e),W.set(s,r),s};z.exports=kt;z.exports.default=kt;z.exports.callCount=e=>{if(!W.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return W.get(e)}});var Pt=l(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.SIGNALS=void 0;var tr=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];Y.SIGNALS=tr});var we=l($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});$.SIGRTMAX=$.getRealtimeSignals=void 0;var nr=function(){let e=Gt-At+1;return Array.from({length:e},rr)};$.getRealtimeSignals=nr;var rr=function(e,t){return{name:`SIGRT${t+1}`,number:At+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},At=34,Gt=64;$.SIGRTMAX=Gt});var Nt=l(J=>{"use strict";Object.defineProperty(J,"__esModule",{value:!0});J.getSignals=void 0;var or=require("os"),sr=Pt(),ir=we(),cr=function(){let e=(0,ir.getRealtimeSignals)();return[...sr.SIGNALS,...e].map(ar)};J.getSignals=cr;var ar=function({name:e,number:t,description:n,action:r,forced:o=!1,standard:s}){let{signals:{[e]:i}}=or.constants,c=i!==void 0;return{name:e,number:c?i:t,description:n,supported:c,action:r,forced:o,standard:s}}});var Ot=l(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});F.signalsByNumber=F.signalsByName=void 0;var ur=require("os"),Rt=Nt(),lr=we(),dr=function(){return(0,Rt.getSignals)().reduce(fr,{})},fr=function(e,{name:t,number:n,description:r,supported:o,action:s,forced:i,standard:c}){return{...e,[t]:{name:t,number:n,description:r,supported:o,action:s,forced:i,standard:c}}},mr=dr();F.signalsByName=mr;var pr=function(){let e=(0,Rt.getSignals)(),t=lr.SIGRTMAX+1,n=Array.from({length:t},(r,o)=>hr(o,e));return Object.assign({},...n)},hr=function(e,t){let n=Sr(e,t);if(n===void 0)return{};let{name:r,description:o,supported:s,action:i,forced:c,standard:f}=n;return{[e]:{name:r,number:e,description:o,supported:s,action:i,forced:c,standard:f}}},Sr=function(e,t){let n=t.find(({name:r})=>ur.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},yr=pr();F.signalsByNumber=yr});var Ft=l((Xo,$t)=>{"use strict";var{signalsByName:gr}=Ot(),xr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:o,exitCode:s,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${o})`:s!==void 0?`failed with exit code ${s}`:"failed",wr=({stdout:e,stderr:t,all:n,error:r,signal:o,exitCode:s,command:i,escapedCommand:c,timedOut:f,isCanceled:d,killed:h,parsed:{options:{timeout:S}}})=>{s=s===null?void 0:s,o=o===null?void 0:o;let y=o===void 0?void 0:gr[o].description,v=r&&r.code,E=`Command ${xr({timedOut:f,timeout:S,errorCode:v,signal:o,signalDescription:y,exitCode:s,isCanceled:d})}: ${i}`,C=Object.prototype.toString.call(r)==="[object Error]",a=C?`${E}
${r.message}`:E,b=[a,t,e].filter(Boolean).join(`
`);return C?(r.originalMessage=r.message,r.message=b):r=new Error(b),r.shortMessage=a,r.command=i,r.escapedCommand=c,r.exitCode=s,r.signal=o,r.signalDescription=y,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=!!f,r.isCanceled=d,r.killed=h&&!f,r};$t.exports=wr});var _t=l((Wo,be)=>{"use strict";var Q=["stdin","stdout","stderr"],br=e=>Q.some(t=>e[t]!==void 0),Lt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return Q.map(r=>e[r]);if(br(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${Q.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,Q.length);return Array.from({length:n},(r,o)=>t[o])};be.exports=Lt;be.exports.node=e=>{let t=Lt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Mt=l((zo,Z)=>{Z.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&Z.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&Z.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Kt=l((Yo,M)=>{var p=global.process,P=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};P(p)?(Bt=require("assert"),L=Mt(),jt=/^win/i.test(p.platform),U=require("events"),typeof U!="function"&&(U=U.EventEmitter),p.__signal_exit_emitter__?x=p.__signal_exit_emitter__:(x=p.__signal_exit_emitter__=new U,x.count=0,x.emitted={}),x.infinite||(x.setMaxListeners(1/0),x.infinite=!0),M.exports=function(e,t){if(!P(global.process))return function(){};Bt.equal(typeof e,"function","a callback must be provided for exit handler"),_===!1&&ve();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){x.removeListener(n,e),x.listeners("exit").length===0&&x.listeners("afterexit").length===0&&ee()};return x.on(n,e),r},ee=function(){!_||!P(global.process)||(_=!1,L.forEach(function(t){try{p.removeListener(t,te[t])}catch{}}),p.emit=ne,p.reallyExit=Ie,x.count-=1)},M.exports.unload=ee,A=function(t,n,r){x.emitted[t]||(x.emitted[t]=!0,x.emit(t,n,r))},te={},L.forEach(function(e){te[e]=function(){if(P(global.process)){var n=p.listeners(e);n.length===x.count&&(ee(),A("exit",null,e),A("afterexit",null,e),jt&&e==="SIGHUP"&&(e="SIGINT"),p.kill(p.pid,e))}}}),M.exports.signals=function(){return L},_=!1,ve=function(){_||!P(global.process)||(_=!0,x.count+=1,L=L.filter(function(t){try{return p.on(t,te[t]),!0}catch{return!1}}),p.emit=Ut,p.reallyExit=Dt)},M.exports.load=ve,Ie=p.reallyExit,Dt=function(t){P(global.process)&&(p.exitCode=t||0,A("exit",p.exitCode,null),A("afterexit",p.exitCode,null),Ie.call(p,p.exitCode))},ne=p.emit,Ut=function(t,n){if(t==="exit"&&P(global.process)){n!==void 0&&(p.exitCode=n);var r=ne.apply(this,arguments);return A("exit",p.exitCode,null),A("afterexit",p.exitCode,null),r}else return ne.apply(this,arguments)}):M.exports=function(){return function(){}};var Bt,L,jt,U,x,ee,A,te,_,ve,Ie,Dt,ne,Ut});var Vt=l((Jo,Ht)=>{"use strict";var vr=require("os"),Ir=Kt(),Er=1e3*5,Tr=(e,t="SIGTERM",n={})=>{let r=e(t);return Cr(e,t,n,r),r},Cr=(e,t,n,r)=>{if(!kr(t,n,r))return;let o=Pr(n),s=setTimeout(()=>{e("SIGKILL")},o);s.unref&&s.unref()},kr=(e,{forceKillAfterTimeout:t},n)=>qr(e)&&t!==!1&&n,qr=e=>e===vr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Pr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Er;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Ar=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Gr=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Nr=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let o,s=new Promise((c,f)=>{o=setTimeout(()=>{Gr(e,n,f)},t)}),i=r.finally(()=>{clearTimeout(o)});return Promise.race([s,i])},Rr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Or=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let o=Ir(()=>{e.kill()});return r.finally(()=>{o()})};Ht.exports={spawnedKill:Tr,spawnedCancel:Ar,setupTimeout:Nr,validateTimeout:Rr,setExitHandler:Or}});var Wt=l((Qo,Xt)=>{"use strict";var k=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";k.writable=e=>k(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";k.readable=e=>k(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";k.duplex=e=>k.writable(e)&&k.readable(e);k.transform=e=>k.duplex(e)&&typeof e._transform=="function";Xt.exports=k});var Yt=l((Zo,zt)=>{"use strict";var{PassThrough:$r}=require("stream");zt.exports=e=>{e={...e};let{array:t}=e,{encoding:n}=e,r=n==="buffer",o=!1;t?o=!(n||r):n=n||"utf8",r&&(n=null);let s=new $r({objectMode:o});n&&s.setEncoding(n);let i=0,c=[];return s.on("data",f=>{c.push(f),o?i=c.length:i+=f.length}),s.getBufferedValue=()=>t?c:r?Buffer.concat(c,i):c.join(""),s.getBufferedLength=()=>i,s}});var Jt=l((es,K)=>{"use strict";var{constants:Fr}=require("buffer"),Lr=require("stream"),{promisify:_r}=require("util"),Mr=Yt(),Br=_r(Lr.pipeline),re=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function Ee(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:n}=t,r=Mr(t);return await new Promise((o,s)=>{let i=c=>{c&&r.getBufferedLength()<=Fr.MAX_LENGTH&&(c.bufferedData=r.getBufferedValue()),s(c)};(async()=>{try{await Br(e,r),o()}catch(c){i(c)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new re)})}),r.getBufferedValue()}K.exports=Ee;K.exports.buffer=(e,t)=>Ee(e,{...t,encoding:"buffer"});K.exports.array=(e,t)=>Ee(e,{...t,array:!0});K.exports.MaxBufferError=re});var Zt=l((ts,Qt)=>{"use strict";var{PassThrough:jr}=require("stream");Qt.exports=function(){var e=[],t=new jr({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(n),t;function n(s){return Array.isArray(s)?(s.forEach(n),this):(e.push(s),s.once("end",o.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function r(){return e.length==0}function o(s){e=e.filter(function(i){return i!==s}),!e.length&&t.readable&&t.end()}}});var rn=l((ns,nn)=>{"use strict";var tn=Wt(),en=Jt(),Dr=Zt(),Ur=(e,t)=>{t===void 0||e.stdin===void 0||(tn(t)?t.pipe(e.stdin):e.stdin.end(t))},Kr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=Dr();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},Te=async(e,t)=>{if(e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},Ce=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?en(e,{encoding:t,maxBuffer:r}):en.buffer(e,{maxBuffer:r})},Hr=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:o,maxBuffer:s},i)=>{let c=Ce(e,{encoding:r,buffer:o,maxBuffer:s}),f=Ce(t,{encoding:r,buffer:o,maxBuffer:s}),d=Ce(n,{encoding:r,buffer:o,maxBuffer:s*2});try{return await Promise.all([i,c,f,d])}catch(h){return Promise.all([{error:h,signal:h.signal,timedOut:h.timedOut},Te(e,c),Te(t,f),Te(n,d)])}},Vr=({input:e})=>{if(tn(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};nn.exports={handleInput:Ur,makeAllStream:Kr,getSpawnedResult:Hr,validateInputSync:Vr}});var sn=l((rs,on)=>{"use strict";var Xr=(async()=>{})().constructor.prototype,Wr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Xr,e)]),zr=(e,t)=>{for(let[n,r]of Wr){let o=typeof t=="function"?(...s)=>Reflect.apply(r.value,t(),s):r.value.bind(t);Reflect.defineProperty(e,n,{...r,value:o})}return e},Yr=e=>new Promise((t,n)=>{e.on("exit",(r,o)=>{t({exitCode:r,signal:o})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});on.exports={mergePromise:zr,getSpawnedPromise:Yr}});var un=l((os,an)=>{"use strict";var cn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Jr=/^[\w.-]+$/,Qr=/"/g,Zr=e=>typeof e!="string"||Jr.test(e)?e:`"${e.replace(Qr,'\\"')}"`,eo=(e,t)=>cn(e,t).join(" "),to=(e,t)=>cn(e,t).map(n=>Zr(n)).join(" "),no=/ +/g,ro=e=>{let t=[];for(let n of e.trim().split(no)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};an.exports={joinCommand:eo,getEscapedCommand:to,parseCommand:ro}});var Sn=l((ss,B)=>{"use strict";var oo=require("path"),ke=require("child_process"),so=xt(),io=bt(),co=Et(),ao=qt(),oe=Ft(),dn=_t(),{spawnedKill:uo,spawnedCancel:lo,setupTimeout:fo,validateTimeout:mo,setExitHandler:po}=Vt(),{handleInput:ho,getSpawnedResult:So,makeAllStream:yo,validateInputSync:go}=rn(),{mergePromise:ln,getSpawnedPromise:xo}=sn(),{joinCommand:fn,parseCommand:mn,getEscapedCommand:pn}=un(),wo=1e3*1e3*100,bo=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:o})=>{let s=t?{...process.env,...e}:e;return n?co.env({env:s,cwd:r,execPath:o}):s},hn=(e,t,n={})=>{let r=so._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n={maxBuffer:wo,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...n},n.env=bo(n),n.stdio=dn(n),process.platform==="win32"&&oo.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},H=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?io(t):t,se=(e,t,n)=>{let r=hn(e,t,n),o=fn(e,t),s=pn(e,t);mo(r.options);let i;try{i=ke.spawn(r.file,r.args,r.options)}catch(v){let w=new ke.ChildProcess,E=Promise.reject(oe({error:v,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return ln(w,E)}let c=xo(i),f=fo(i,r.options,c),d=po(i,r.options,f),h={isCanceled:!1};i.kill=uo.bind(null,i.kill.bind(i)),i.cancel=lo.bind(null,i,h);let y=ao(async()=>{let[{error:v,exitCode:w,signal:E,timedOut:C},a,b,T]=await So(i,r.options,d),q=H(r.options,a),G=H(r.options,b),Pe=H(r.options,T);if(v||w!==0||E!==null){let Ae=oe({error:v,exitCode:w,signal:E,stdout:q,stderr:G,all:Pe,command:o,escapedCommand:s,parsed:r,timedOut:C,isCanceled:h.isCanceled,killed:i.killed});if(!r.options.reject)return Ae;throw Ae}return{command:o,escapedCommand:s,exitCode:0,stdout:q,stderr:G,all:Pe,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return ho(i,r.options.input),i.all=yo(i,r.options),ln(i,y)};B.exports=se;B.exports.sync=(e,t,n)=>{let r=hn(e,t,n),o=fn(e,t),s=pn(e,t);go(r.options);let i;try{i=ke.spawnSync(r.file,r.args,r.options)}catch(d){throw oe({error:d,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let c=H(r.options,i.stdout,i.error),f=H(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let d=oe({stdout:c,stderr:f,error:i.error,signal:i.signal,exitCode:i.status,command:o,escapedCommand:s,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return d;throw d}return{command:o,escapedCommand:s,exitCode:0,stdout:c,stderr:f,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};B.exports.command=(e,t)=>{let[n,...r]=mn(e);return se(n,r,t)};B.exports.commandSync=(e,t)=>{let[n,...r]=mn(e);return se.sync(n,r,t)};B.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=dn.node(n),o=process.execArgv.filter(c=>!c.startsWith("--inspect")),{nodePath:s=process.execPath,nodeOptions:i=o}=n;return se(s,[...i,e,...Array.isArray(t)?t:[]],{...n,stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1})}});var vo={};Cn(vo,{default:()=>wn});module.exports=kn(vo);var m=require("@raycast/api"),ce=require("react");var u=require("@raycast/api"),N=require("react"),g=require("react/jsx-runtime");function ae(e){let{sequence:t,setSequences:n}=e,[r,o]=(0,N.useState)(),[s,i]=(0,N.useState)(t?t.shortcuts.length:1),[c,f]=(0,N.useState)(),[d,h]=(0,N.useState)(t?t.shortcuts.map(a=>a.keystrokes):[]),[S,y]=(0,N.useState)(t?t.shortcuts.map(a=>a.modifiers):[[]]),{pop:v}=(0,u.useNavigation)(),w=a=>a?(o(void 0),!0):(o("Name cannot be empty"),!1),E=a=>{if(a?.length){if(!parseInt(a)||parseInt(a)<1)return f("Count must be a positive integer"),!1}else return f("Must configure at least 1 shortcut"),!1;f(void 0);let b=parseInt(a);i(b);let T=[...d.slice(0,b)],q=[...S.slice(0,b)];for(;T.length<b;)T.push(""),q.push([]);return h(T),y(q),!0},C=[];for(let a=0;a<s;a++)C.push((0,g.jsx)(u.Form.Separator,{},`separator${a}`)),C.push((0,g.jsx)(u.Form.Description,{title:`Shortcut #${a+1}:`,text:a==0?"The first keyboard shortcut to execute":""},`description${a}`)),C.push((0,g.jsx)(u.Form.TextField,{id:`shortcutKeys${a}`,title:"Keystrokes",placeholder:"Keys to stroke",defaultValue:d[a],info:"The non-modifier keys to stroke as one contiguous string. For example, for the keyboard shortcut Command+A, the keystroke would be A. For Shift+Command+D, the keyboard would be D. This can also be an ASCII key code, e.g. 'ASCII character 31' (no quotes in input). You could also use key codes, e.g. 'key code 123' for left d-pad keystroke.",onChange:b=>{let T=[...d];T[a]=b||"",h(T)}},`keystrokes${a}`)),C.push((0,g.jsxs)(u.Form.TagPicker,{id:`shortcutModifiers${a}`,title:"Modifiers",defaultValue:S[a],info:"The modifier keys to stroke",onChange:b=>{let T=[...S];T[a]=b,y(T)},children:[(0,g.jsx)(u.Form.TagPicker.Item,{value:"command down",title:"command down",icon:{source:u.Icon.Circle,tintColor:u.Color.Red}}),(0,g.jsx)(u.Form.TagPicker.Item,{value:"control down",title:"control down",icon:{source:u.Icon.Circle,tintColor:u.Color.Blue}}),(0,g.jsx)(u.Form.TagPicker.Item,{value:"option down",title:"option down",icon:{source:u.Icon.Circle,tintColor:u.Color.Green}}),(0,g.jsx)(u.Form.TagPicker.Item,{value:"shift down",title:"shift down",icon:{source:u.Icon.Circle,tintColor:u.Color.Yellow}})]},`modifiers${a}`));return(0,g.jsxs)(u.Form,{actions:(0,g.jsx)(u.ActionPanel,{children:(0,g.jsx)(u.Action.SubmitForm,{title:"Save Shortcut Sequence",icon:u.Icon.Link,onSubmit:async a=>{if(!w(a.sequenceNameField))return;let b=d.map((q,G)=>({keystrokes:q,modifiers:S[G]})),T={name:a.sequenceNameField,description:a.sequenceDescriptionField,icon:a.sequenceIconField,shortcuts:b};if(t&&await u.LocalStorage.removeItem(t.name),await u.LocalStorage.setItem(a.sequenceNameField,JSON.stringify(T)),n){let q=await u.LocalStorage.allItems();n(Object.values(q).map(G=>JSON.parse(G)))}(0,u.showToast)({title:"Added Shortcut Sequence"}),t?v():(0,u.launchCommand)({name:"run-shortcut-sequence",type:u.LaunchType.UserInitiated,arguments:{sequenceName:""}})}})}),children:[(0,g.jsx)(u.Form.TextField,{id:"sequenceNameField",title:"Sequence Name",placeholder:"Name of shortcut sequence",defaultValue:t?t.name:void 0,info:"The name that will appear in list of shortcut sequences. This name is also the default provided when using the 'Save As Quicklink' action.",onChange:a=>w(a),error:r}),(0,g.jsx)(u.Form.Dropdown,{id:"sequenceIconField",title:"Icon",defaultValue:t?t.icon:void 0,info:"The icon that will appear next to this sequence in the list of shortcut sequences.",children:Object.entries(u.Icon).map(a=>(0,g.jsx)(u.Form.Dropdown.Item,{title:a[0],value:a[1],icon:a[1]},a[0]))}),(0,g.jsx)(u.Form.TextArea,{id:"sequenceDescriptionField",title:"Description (Optional)",defaultValue:t?t.description:void 0,placeholder:"This shortcut sequence is for...",info:"A description of this shortcut sequence to help you and others know what it does."}),(0,g.jsx)(u.Form.TextField,{id:"sequenceShortcutCount",title:"Number of Shortcuts",defaultValue:s.toString(),info:"The number of shortcuts that this shortcut sequence will run sequentially.",error:c,onChange:a=>E(a)}),C]})}var ie=require("@raycast/api");var yn=Ne(require("node:process"),1),gn=Ne(Sn(),1);async function xn(e,{humanReadableOutput:t=!0}={}){if(yn.default.platform!=="darwin")throw new Error("macOS only");let n=t?[]:["-ss"],{stdout:r}=await(0,gn.default)("osascript",["-e",e,n]);return r}var qe=async e=>{let t=await(0,ie.getFrontmostApplication)();e.shortcuts.forEach(async n=>{let r=function(){return n.keystrokes.includes("ASCII character")?`(${n.keystrokes})`:n.keystrokes.includes("key code")?n.keystrokes:`"${n.keystrokes}"`}(),o=n.modifiers.length?`using ${n.modifiers.length>1?`[${n.modifiers.join(", ")}]`:n.modifiers[0]}`:"",s=`tell application "${t.name}"
            tell application "System Events"
                keystroke ${r} ${o}
            end tell
        end tell`;await xn(s)}),await(0,ie.showHUD)(`Ran Shortcut Sequence: ${e.name}`)};var I=require("react/jsx-runtime");function wn(e){let{sequenceName:t}=e.arguments,[n,r]=(0,ce.useState)();if((0,ce.useEffect)(()=>{m.LocalStorage.allItems().then(s=>{r(Object.values(s).map(i=>JSON.parse(i)))})},[]),t.length!=0){let s;if(n)for(let i=0;i<n.length;i++){let c=n[i];if(c.name==t){Promise.resolve(qe(c)),s=c;break}}if(s)return null}let o=n?.map(s=>(0,I.jsx)(m.List.Item,{title:s.name,icon:s.icon,subtitle:s.description,actions:(0,I.jsxs)(m.ActionPanel,{children:[(0,I.jsxs)(m.ActionPanel.Section,{title:"General",children:[(0,I.jsx)(m.Action,{title:"Run Shortcut Sequence",icon:m.Icon.ArrowRightCircle,shortcut:{modifiers:["cmd"],key:"r"},onAction:()=>{Promise.resolve(qe(s))}}),(0,I.jsx)(m.Action.CopyToClipboard,{title:"Copy JSON Representation",content:JSON.stringify(s),shortcut:{modifiers:["cmd"],key:"j"}})]}),(0,I.jsxs)(m.ActionPanel.Section,{title:"Sequence Controls",children:[(0,I.jsx)(m.Action.CreateQuicklink,{quicklink:{name:s.name,link:`raycast://extensions/HelloImSteven/keyboard-shortcut-sequences/run-shortcut-sequence?arguments=%7B%22sequenceName%22%3A%22${encodeURI(s.name).replaceAll("&","%26")}%22%7D`}}),(0,I.jsx)(m.Action.Push,{title:"Edit Sequence",icon:m.Icon.Pencil,shortcut:{modifiers:["cmd"],key:"e"},target:(0,I.jsx)(ae,{sequence:s,setSequences:r})}),(0,I.jsx)(m.Action,{title:"Delete Sequence",icon:m.Icon.Trash,style:m.Action.Style.Destructive,shortcut:{modifiers:["cmd"],key:"d"},onAction:async()=>{if(await(0,m.confirmAlert)({title:"Delete Sequence",message:"Are you sure?",primaryAction:{title:"Delete",style:m.Alert.ActionStyle.Destructive}})){let i=n.filter(c=>c.name!=s.name);r(i),await m.LocalStorage.removeItem(s.name)}}})]})]})},s.name));return(0,I.jsxs)(m.List,{searchBarPlaceholder:"Search shortcut sequences...",searchText:t||void 0,isLoading:n==null,children:[(0,I.jsx)(m.List.EmptyView,{title:"No Shortcut Sequences",icon:{source:"no-view.png"}}),o]})}
