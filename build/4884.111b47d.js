"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4884],{39694:(t,e,s)=>{s.d(e,{IO:()=>n,Lt:()=>a,ot:()=>u});const a=16895,n=33206,r=new TextEncoder,i=new TextDecoder("utf-8"),o={0:!1,1:!0,2:!0,64:!0,65:!0,66:!0,129:!0,193:!0,514:!0,577:!0,578:!0,705:!0,706:!0,1024:!0,1025:!0,1026:!0,1089:!0,1090:!0,1153:!0,1154:!0,1217:!0,1218:!0,4096:!0,4098:!0};class c{constructor(t){this.fs=t}open(t){const e=this.fs.realPath(t.node);this.fs.FS.isFile(t.node.mode)&&(t.file=this.fs.API.get(e))}close(t){if(!this.fs.FS.isFile(t.node.mode)||!t.file)return;const e=this.fs.realPath(t.node),s=t.flags;let a="string"==typeof s?parseInt(s,10):s;a&=8191;let n=!0;a in o&&(n=o[a]),n&&(this.fs.API.put(e,t.file),t.file=void 0)}read(t,e,s,a,n){var r;if(a<=0||void 0===t.file)return 0;const i=Math.min((null!==(r=t.file.data.length)&&void 0!==r?r:0)-n,a);try{e.set(t.file.data.subarray(n,n+i),s)}catch(t){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}return i}write(t,e,s,a,n){var r,i;if(a<=0||void 0===t.file)return 0;t.node.timestamp=Date.now();try{if(n+a>(null!==(i=null===(r=t.file)||void 0===r?void 0:r.data.length)&&void 0!==i?i:0)){const e=t.file.data?t.file.data:new Uint8Array;t.file.data=new Uint8Array(n+a),t.file.data.set(e)}return t.file.data.set(e.subarray(s,s+a),n),a}catch(t){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}}llseek(t,e,s){let a=e;if(1===s)a+=t.position;else if(2===s&&this.fs.FS.isFile(t.node.mode)){if(void 0===t.file)throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM);a+=t.file.data.length}if(a<0)throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EINVAL);return a}}class l{constructor(t){this.fs=t}getattr(t){return{...this.fs.API.getattr(this.fs.realPath(t)),mode:t.mode,ino:t.id}}setattr(t,e){}lookup(t,e){const s=this.fs.PATH.join2(this.fs.realPath(t),e),a=this.fs.API.lookup(s);if(!a.ok)throw this.fs.FS.genericErrors[this.fs.ERRNO_CODES.ENOENT];return this.fs.createNode(t,e,a.mode)}mknod(t,e,s,a){const n=this.fs.PATH.join2(this.fs.realPath(t),e);return this.fs.API.mknod(n,s),this.fs.createNode(t,e,s,a)}rename(t,e,s){this.fs.API.rename(t.parent?this.fs.PATH.join2(this.fs.realPath(t.parent),t.name):t.name,this.fs.PATH.join2(this.fs.realPath(e),s)),t.name=s,t.parent=e}unlink(t,e){this.fs.API.rmdir(this.fs.PATH.join2(this.fs.realPath(t),e))}rmdir(t,e){this.fs.API.rmdir(this.fs.PATH.join2(this.fs.realPath(t),e))}readdir(t){return this.fs.API.readdir(this.fs.realPath(t))}symlink(t,e,s){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}readlink(t){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}}class h{constructor(t,e,s,a,n){this._baseUrl=t,this._driveName=e,this._mountpoint=s,this.FS=a,this.ERRNO_CODES=n}request(t){const e=new XMLHttpRequest;e.open("POST",encodeURI(this.endpoint),!1);try{e.send(JSON.stringify(t))}catch(t){console.error(t)}if(e.status>=400)throw new this.FS.ErrnoError(this.ERRNO_CODES.EINVAL);return JSON.parse(e.responseText)}lookup(t){return this.request({method:"lookup",path:this.normalizePath(t)})}getmode(t){return Number.parseInt(this.request({method:"getmode",path:this.normalizePath(t)}))}mknod(t,e){return this.request({method:"mknod",path:this.normalizePath(t),data:{mode:e}})}rename(t,e){return this.request({method:"rename",path:this.normalizePath(t),data:{newPath:this.normalizePath(e)}})}readdir(t){const e=this.request({method:"readdir",path:this.normalizePath(t)});return e.push("."),e.push(".."),e}rmdir(t){return this.request({method:"rmdir",path:this.normalizePath(t)})}get(t){const e=this.request({method:"get",path:this.normalizePath(t)}),s=e.content,a=e.format;switch(a){case"json":case"text":return{data:r.encode(s),format:a};case"base64":{const t=atob(s),e=t.length,n=new Uint8Array(e);for(let s=0;s<e;s++)n[s]=t.charCodeAt(s);return{data:n,format:a}}default:throw new this.FS.ErrnoError(this.ERRNO_CODES.ENOENT)}}put(t,e){switch(e.format){case"json":case"text":return this.request({method:"put",path:this.normalizePath(t),data:{format:e.format,data:i.decode(e.data)}});case"base64":{let s="";for(let t=0;t<e.data.byteLength;t++)s+=String.fromCharCode(e.data[t]);return this.request({method:"put",path:this.normalizePath(t),data:{format:e.format,data:btoa(s)}})}}}getattr(t){const e=this.request({method:"getattr",path:this.normalizePath(t)});return e.atime=new Date(e.atime),e.mtime=new Date(e.mtime),e.ctime=new Date(e.ctime),e.size=e.size||0,e}normalizePath(t){return t.startsWith(this._mountpoint)&&(t=t.slice(this._mountpoint.length)),this._driveName&&(t=`${this._driveName}:${t}`),t}get endpoint(){return`${this._baseUrl}api/drive`}}class u{constructor(t){this.FS=t.FS,this.PATH=t.PATH,this.ERRNO_CODES=t.ERRNO_CODES,this.API=new h(t.baseUrl,t.driveName,t.mountpoint,this.FS,this.ERRNO_CODES),this.driveName=t.driveName,this.node_ops=new l(this),this.stream_ops=new c(this)}mount(t){return this.createNode(null,t.mountpoint,511|a,0)}createNode(t,e,s,a){const n=this.FS;if(!n.isDir(s)&&!n.isFile(s))throw new n.ErrnoError(this.ERRNO_CODES.EINVAL);const r=n.createNode(t,e,s,a);return r.node_ops=this.node_ops,r.stream_ops=this.stream_ops,r}getMode(t){return this.API.getmode(t)}realPath(t){const e=[];let s=t;for(e.push(s.name);s.parent!==s;)s=s.parent,e.push(s.name);return e.reverse(),this.PATH.join.apply(null,e)}}},24884:(t,e,s)=>{s.r(e),s.d(e,{default:()=>F});var a=s(27476),n=s(9879),r=s.n(n),i=s(26169);const o=new i.Token("@jupyterlite/contents:IContents");var c,l;!function(t){t.JSON="application/json",t.PLAIN_TEXT="text/plain",t.OCTET_STREAM="octet/stream"}(c||(c={})),function(t){const e=JSON.parse(a.PageConfig.getOption("fileTypes")||"{}");t.getType=function(t,s=null){t=t.toLowerCase();for(const s of Object.values(e))for(const e of s.extensions||[])if(e===t&&s.mimeTypes&&s.mimeTypes.length)return s.mimeTypes[0];return r().getType(t)||s||c.OCTET_STREAM},t.hasFormat=function(t,s){t=t.toLowerCase();for(const a of Object.values(e))if(a.fileFormat===s)for(const e of a.extensions||[])if(e===t)return!0;return!1}}(l||(l={}));const h="JupyterLite Storage";class u{constructor(t){this.reduceBytesToString=(t,e)=>t+String.fromCharCode(e),this._serverContents=new Map,this._storageName=h,this._storageDrivers=null,this._localforage=t.localforage,this._storageName=t.storageName||h,this._storageDrivers=t.storageDrivers||null,this._ready=new i.PromiseDelegate}async initialize(){await this.initStorage(),this._ready.resolve(void 0)}async initStorage(){this._storage=this.createDefaultStorage(),this._counters=this.createDefaultCounters(),this._checkpoints=this.createDefaultCheckpoints()}get ready(){return this._ready.promise}get storage(){return this.ready.then((()=>this._storage))}get counters(){return this.ready.then((()=>this._counters))}get checkpoints(){return this.ready.then((()=>this._checkpoints))}get defaultStorageOptions(){const t=this._storageDrivers&&this._storageDrivers.length?this._storageDrivers:null;return{version:1,name:this._storageName,...t?{driver:t}:{}}}createDefaultStorage(){return this._localforage.createInstance({description:"Offline Storage for Notebooks and Files",storeName:"files",...this.defaultStorageOptions})}createDefaultCounters(){return this._localforage.createInstance({description:"Store the current file suffix counters",storeName:"counters",...this.defaultStorageOptions})}createDefaultCheckpoints(){return this._localforage.createInstance({description:"Offline Storage for Checkpoints",storeName:"checkpoints",...this.defaultStorageOptions})}async newUntitled(t){var e,s,n;const r=null!==(e=null==t?void 0:t.path)&&void 0!==e?e:"",i=null!==(s=null==t?void 0:t.type)&&void 0!==s?s:"notebook",o=(new Date).toISOString();let h=a.PathExt.dirname(r);const u=a.PathExt.basename(r),d=a.PathExt.extname(r),f=await this.get(h);let m,g="";switch(r&&!d&&f?(h=`${r}/`,g=""):h&&u?(h=`${h}/`,g=u):(h="",g=r),i){case"directory":g=`Untitled Folder${await this._incrementCounter("directory")||""}`,m={name:g,path:`${h}${g}`,last_modified:o,created:o,format:"json",mimetype:"",content:null,size:0,writable:!0,type:"directory"};break;case"notebook":{const t=await this._incrementCounter("notebook");g=g||`Untitled${t||""}.ipynb`,m={name:g,path:`${h}${g}`,last_modified:o,created:o,format:"json",mimetype:c.JSON,content:p.EMPTY_NB,size:JSON.stringify(p.EMPTY_NB).length,writable:!0,type:"notebook"};break}default:{const e=null!==(n=null==t?void 0:t.ext)&&void 0!==n?n:".txt",s=await this._incrementCounter("file"),a=l.getType(e)||c.OCTET_STREAM;let r;r=l.hasFormat(e,"text")||-1!==a.indexOf("text")?"text":-1!==e.indexOf("json")||-1!==e.indexOf("ipynb")?"json":"base64",g=g||`untitled${s||""}${e}`,m={name:g,path:`${h}${g}`,last_modified:o,created:o,format:r,mimetype:a,content:"",size:0,writable:!0,type:"file"};break}}const w=m.path;return await(await this.storage).setItem(w,m),m}async copy(t,e){let s=a.PathExt.basename(t);for(e=""===e?"":`${e.slice(1)}/`;await this.get(`${e}${s}`,{content:!0});){const t=a.PathExt.extname(s),e=s.replace(t,"");s=`${e} (copy)${t}`}const n=`${e}${s}`;let r=await this.get(t,{content:!0});if(!r)throw Error(`Could not find file with path ${t}`);return r={...r,name:s,path:n},await(await this.storage).setItem(n,r),r}async get(t,e){if(""===(t=decodeURIComponent(t.replace(/^\//,""))))return await this._getFolder(t);const s=await this.storage,n=await s.getItem(t),r=await this._getServerContents(t,e),i=n||r;if(!i)return null;if(!(null==e?void 0:e.content))return{size:0,...i,content:null};if("directory"===i.type){const e=new Map;await s.iterate(((s,a)=>{a===`${t}/${s.name}`&&e.set(s.name,s)}));const n=r?r.content:Array.from((await this._getServerDirectory(t)).values());for(const t of n)e.has(t.name)||e.set(t.name,t);const o=[...e.values()];return{name:a.PathExt.basename(t),path:t,last_modified:i.last_modified,created:i.created,format:"json",mimetype:c.JSON,content:o,size:0,writable:!0,type:"directory"}}return i}async rename(t,e){const s=decodeURIComponent(t),n=await this.get(s,{content:!0});if(!n)throw Error(`Could not find file with path ${s}`);const r=(new Date).toISOString(),i=a.PathExt.basename(e),o={...n,name:i,path:e,last_modified:r},c=await this.storage;if(await c.setItem(e,o),await c.removeItem(s),await(await this.checkpoints).removeItem(s),"directory"===n.type){let s;for(s of n.content)await this.rename(a.URLExt.join(t,s.name),a.URLExt.join(e,s.name))}return o}async save(t,e={}){var s;t=decodeURIComponent(t);const n=a.PathExt.extname(null!==(s=e.name)&&void 0!==s?s:"");let r=await this.get(t);if(r||(r=await this.newUntitled({path:t,ext:n,type:"file"})),!r)return null;const i=(new Date).toISOString();if(r={...r,...e,last_modified:i},e.content&&"base64"===e.format)if(".ipynb"===n){const t=this.unescapeContent(e.content),s=t.length;r={...r,content:JSON.parse(t),format:"json",type:"notebook",size:s}}else if(l.hasFormat(n,"json")){const t=this.unescapeContent(e.content),s=t.length;r={...r,content:JSON.parse(t),format:"json",type:"file",size:s}}else if(l.hasFormat(n,"text")){const t=this.unescapeContent(e.content),s=t.length;r={...r,content:t,format:"text",type:"file",size:s}}else r={...r,size:atob(e.content).length};return await(await this.storage).setItem(t,r),r}unescapeContent(t){return decodeURIComponent(escape(atob(t)))}async delete(t){const e=`${t=decodeURIComponent(t)}/`,s=(await(await this.storage).keys()).filter((s=>s===t||s.startsWith(e)));await Promise.all(s.map(this.forgetPath,this))}async forgetPath(t){await Promise.all([(await this.storage).removeItem(t),(await this.checkpoints).removeItem(t)])}async createCheckpoint(t){var e;const s=await this.checkpoints;t=decodeURIComponent(t);const a=await this.get(t,{content:!0});if(!a)throw Error(`Could not find file with path ${t}`);const n=(null!==(e=await s.getItem(t))&&void 0!==e?e:[]).filter(Boolean);return n.push(a),n.length>5&&n.splice(0,n.length-5),await s.setItem(t,n),{id:""+(n.length-1),last_modified:a.last_modified}}async listCheckpoints(t){return(await(await this.checkpoints).getItem(t)||[]).filter(Boolean).map(this.normalizeCheckpoint,this)}normalizeCheckpoint(t,e){return{id:e.toString(),last_modified:t.last_modified}}async restoreCheckpoint(t,e){t=decodeURIComponent(t);const s=(await(await this.checkpoints).getItem(t)||[])[parseInt(e)];await(await this.storage).setItem(t,s)}async deleteCheckpoint(t,e){t=decodeURIComponent(t);const s=await(await this.checkpoints).getItem(t)||[],a=parseInt(e);s.splice(a,1),await(await this.checkpoints).setItem(t,s)}async _getFolder(t){const e=new Map,s=await this.storage;await s.iterate(((t,s)=>{s.includes("/")||e.set(t.path,t)}));for(const s of(await this._getServerDirectory(t)).values())e.has(s.path)||e.set(s.path,s);return t&&0===e.size?null:{name:"",path:t,last_modified:new Date(0).toISOString(),created:new Date(0).toISOString(),format:"json",mimetype:c.JSON,content:Array.from(e.values()),size:0,writable:!0,type:"directory"}}async _getServerContents(t,e){const s=a.PathExt.basename(t);let n=(await this._getServerDirectory(a.URLExt.join(t,".."))).get(s);if(!n)return null;if(n=n||{name:s,path:t,last_modified:new Date(0).toISOString(),created:new Date(0).toISOString(),format:"text",mimetype:c.PLAIN_TEXT,type:"file",writable:!0,size:0,content:""},null==e?void 0:e.content)if("directory"===n.type){const e=await this._getServerDirectory(t);n={...n,content:Array.from(e.values())}}else{const e=a.URLExt.join(a.PageConfig.getBaseUrl(),"files",t),r=await fetch(e);if(!r.ok)return null;const i=n.mimetype||r.headers.get("Content-Type"),o=a.PathExt.extname(s);if("notebook"===n.type||l.hasFormat(o,"json")||-1!==(null==i?void 0:i.indexOf("json"))||t.match(/\.(ipynb|[^/]*json[^/]*)$/)){const t=await r.text();n={...n,content:JSON.parse(t),format:"json",mimetype:n.mimetype||c.JSON,size:t.length}}else if(l.hasFormat(o,"text")||-1!==i.indexOf("text")){const t=await r.text();n={...n,content:t,format:"text",mimetype:i||c.PLAIN_TEXT,size:t.length}}else{const t=await r.arrayBuffer(),e=new Uint8Array(t);n={...n,content:btoa(e.reduce(this.reduceBytesToString,"")),format:"base64",mimetype:i||c.OCTET_STREAM,size:e.length}}}return n}async _getServerDirectory(t){const e=this._serverContents.get(t)||new Map;if(!this._serverContents.has(t)){const s=a.URLExt.join(a.PageConfig.getBaseUrl(),"api/contents",t,"all.json");try{const t=await fetch(s),a=JSON.parse(await t.text());for(const t of a.content)e.set(t.name,t)}catch(t){console.warn(`don't worry, about ${t}... nothing's broken. If there had been a\n          file at ${s}, you might see some more files.`)}this._serverContents.set(t,e)}return e}async _incrementCounter(t){var e;const s=await this.counters,a=(null!==(e=await s.getItem(t))&&void 0!==e?e:-1)+1;return await s.setItem(t,a),a}}var p;!function(t){t.EMPTY_NB={metadata:{orig_nbformat:4},nbformat_minor:4,nbformat:4,cells:[]}}(p||(p={}));var d=s(39694),f=s(43284),m=s(24329),g=s(27189),w=s(7392),y=s(78160),S=s(9760),v=s(51404),O=s(20927),E=s.n(O);const _={id:"@jupyterlite/server-extension:localforage",autoStart:!0,provides:v.ILocalForage,activate:t=>({localforage:E()})},N={id:"@jupyterlite/server-extension:localforage-memory-storage",autoStart:!0,requires:[v.ILocalForage],activate:async(t,e)=>{JSON.parse(a.PageConfig.getOption("enableMemoryStorage")||"false")&&(console.warn("Memory storage fallback enabled: contents and settings may not be saved"),await(0,v.ensureMemoryStorage)(e.localforage))}},k={id:"@jupyterlite/server-extension:contents",requires:[v.ILocalForage],autoStart:!0,provides:o,activate:(t,e)=>{const s=a.PageConfig.getOption("contentsStorageName"),n=JSON.parse(a.PageConfig.getOption("contentsStorageDrivers")||"null"),{localforage:r}=e,i=new u({storageName:s,storageDrivers:n,localforage:r});return t.started.then((()=>i.initialize().catch(console.warn))),i}},P={id:"@jupyterlite/server-extension:contents-routes",autoStart:!0,requires:[o],activate:(t,e)=>{t.router.get("/api/contents/(.+)/checkpoints",(async(t,s)=>{const a=await e.listCheckpoints(s);return new Response(JSON.stringify(a))})),t.router.post("/api/contents/(.+)/checkpoints/(.*)",(async(t,s,a)=>{const n=await e.restoreCheckpoint(s,a);return new Response(JSON.stringify(n),{status:204})})),t.router.post("/api/contents/(.+)/checkpoints",(async(t,s)=>{const a=await e.createCheckpoint(s);return new Response(JSON.stringify(a),{status:201})})),t.router.delete("/api/contents/(.+)/checkpoints/(.*)",(async(t,s,a)=>{const n=await e.deleteCheckpoint(s,a);return new Response(JSON.stringify(n),{status:204})})),t.router.get("/api/contents(.*)",(async(t,s)=>{var a;const n={content:"1"===(null===(a=t.query)||void 0===a?void 0:a.content)},r=await e.get(s,n);return r?new Response(JSON.stringify(r)):new Response(null,{status:404})})),t.router.post("/api/contents(.*)",(async(t,s)=>{const a=t.body,n=null==a?void 0:a.copy_from;let r;return r=n?await e.copy(n,s):await e.newUntitled(a),r?new Response(JSON.stringify(r),{status:201}):new Response(null,{status:400})})),t.router.patch("/api/contents(.*)",(async(t,s)=>{var a,n;const r=null!==(n=null===(a=t.body)||void 0===a?void 0:a.path)&&void 0!==n?n:"";s="/"===s[0]?s.slice(1):s;const i=await e.rename(s,r);return new Response(JSON.stringify(i))})),t.router.put("/api/contents/(.+)",(async(t,s)=>{const a=t.body,n=await e.save(s,a);return new Response(JSON.stringify(n))})),t.router.delete("/api/contents/(.+)",(async(t,s)=>(await e.delete(s),new Response(null,{status:204}))))}},R={id:"@jupyterlite/server-extension:service-worker",autoStart:!0,provides:g.IServiceWorkerRegistrationWrapper,activate:t=>new g.ServiceWorkerRegistrationWrapper},I={id:"@jupyterlite/server-extension:emscripten-filesystem",autoStart:!0,activate:t=>{const e=new BroadcastChannel("/api/drive.v1");let s;e.onmessage=async n=>{const r=n.data,i=t.serviceManager.contents,o=r.path;let c;switch(r.method){case"readdir":c=await i.get(o,{content:!0}),"directory"===c.type&&c.content?(s=c.content.map((t=>t.name)),e.postMessage(s)):e.postMessage([]);break;case"rmdir":await i.delete(o),e.postMessage(null);break;case"rename":await i.rename(o,r.data.newPath),e.postMessage(null);break;case"getmode":c=await i.get(o),"directory"===c.type?e.postMessage(d.Lt):e.postMessage(d.IO);break;case"lookup":try{c=await i.get(o),e.postMessage({ok:!0,mode:"directory"===c.type?d.Lt:d.IO})}catch(t){e.postMessage({ok:!1})}break;case"mknod":{const t=Number.parseInt(r.data.mode);c=await i.newUntitled({path:a.PathExt.dirname(o),type:t===d.Lt?"directory":"file",ext:a.PathExt.extname(o)}),await i.rename(c.path,o),e.postMessage(null);break}case"getattr":{c=await i.get(o);const t=c.size||0;e.postMessage({dev:1,nlink:1,uid:0,gid:0,rdev:0,size:t,blksize:4096,blocks:Math.ceil(t/4096),atime:c.last_modified,mtime:c.last_modified,ctime:c.created,timestamp:0});break}case"get":{if(c=await i.get(o,{content:!0}),"directory"===c.type)return void e.postMessage(null);let t=c.content;"json"===c.format&&(t=JSON.stringify(c.content)),e.postMessage({content:t,format:c.format});break}case"put":await i.save(o,{content:"json"===r.data.format?JSON.parse(r.data.data):r.data.data,type:"file",format:r.data.format}),e.postMessage(null)}}}},C={id:"@jupyterlite/server-extension:kernels",autoStart:!0,provides:f.IKernels,requires:[f.IKernelSpecs],activate:(t,e)=>new f.Kernels({kernelspecs:e})},b={id:"@jupyterlite/server-extension:kernels-routes",autoStart:!0,requires:[f.IKernels],activate:(t,e)=>{t.router.post("/api/kernels/(.*)/restart",(async(t,s)=>{const a=await e.restart(s);return new Response(JSON.stringify(a))})),t.router.delete("/api/kernels/(.*)",(async(t,s)=>{const a=await e.shutdown(s);return new Response(JSON.stringify(a),{status:204})}))}},x={id:"@jupyterlite/server-extension:kernelspec",autoStart:!0,provides:f.IKernelSpecs,activate:t=>new f.KernelSpecs},T={id:"@jupyterlite/server-extension:kernelspec-routes",autoStart:!0,requires:[f.IKernelSpecs],activate:(t,e)=>{t.router.get("/api/kernelspecs",(async t=>{const{specs:s}=e;if(!s)return new Response(null);const a={},n=s.kernelspecs;Object.keys(n).forEach((t=>{const e=n[t],{resources:s}=null!=e?e:{};a[t]={name:t,spec:e,resources:s}}));const r={default:s.default,kernelspecs:a};return new Response(JSON.stringify(r))}))}},j={id:"@jupyterlite/server-extension:licenses",autoStart:!0,provides:m.ILicenses,activate:t=>new m.Licenses},D={id:"@jupyterlite/server-extension:licenses-routes",autoStart:!0,requires:[m.ILicenses],activate(t,e){t.router.get("/api/licenses",(async t=>{const s=await e.get();return new Response(JSON.stringify(s))}))}},J={id:"@jupyterlite/server-extension:nbconvert-routes",autoStart:!0,activate:t=>{t.router.get("/api/nbconvert",(async t=>new Response(JSON.stringify({}))))}},A={id:"@jupyterlite/server-extension:sessions",autoStart:!0,provides:w.ISessions,requires:[f.IKernels],activate:(t,e)=>new w.Sessions({kernels:e})},z={id:"@jupyterlite/server-extension:sessions-routes",autoStart:!0,requires:[w.ISessions],activate:(t,e)=>{t.router.get("/api/sessions/(.+)",(async(t,s)=>{const a=await e.get(s);return new Response(JSON.stringify(a),{status:200})})),t.router.get("/api/sessions",(async t=>{const s=await e.list();return new Response(JSON.stringify(s),{status:200})})),t.router.patch("/api/sessions(.*)",(async(t,s)=>{const a=t.body,n=await e.patch(a);return new Response(JSON.stringify(n),{status:200})})),t.router.delete("/api/sessions/(.+)",(async(t,s)=>(await e.shutdown(s),new Response(null,{status:204})))),t.router.post("/api/sessions",(async t=>{const s=t.body,a=await e.startNew(s);return new Response(JSON.stringify(a),{status:201})}))}},M={id:"@jupyterlite/server-extension:settings",autoStart:!0,requires:[v.ILocalForage],provides:y.ISettings,activate:(t,e)=>{const s=a.PageConfig.getOption("settingsStorageName"),n=JSON.parse(a.PageConfig.getOption("settingsStorageDrivers")||"null"),{localforage:r}=e,i=new y.Settings({storageName:s,storageDrivers:n,localforage:r});return t.started.then((()=>i.initialize().catch(console.warn))),i}},F=[k,P,I,C,b,x,T,j,D,N,_,J,R,A,z,M,{id:"@jupyterlite/server-extension:settings-routes",autoStart:!0,requires:[y.ISettings],activate:(t,e)=>{const s="/api/settings/((?:@([^/]+?)[/])?([^/]+?):([^:]+))$";t.router.get(s,(async(t,s)=>{const a=await e.get(s);return new Response(JSON.stringify(a))})),t.router.put(s,(async(t,s)=>{const a=t.body,{raw:n}=a;return await e.save(s,n),new Response(null,{status:204})})),t.router.get("/api/settings",(async t=>{const s=await e.getAll();return new Response(JSON.stringify(s))}))}},{id:"@jupyterlite/server-extension:translation",autoStart:!0,provides:S.ITranslation,activate:t=>{const e=new S.Translation;return t.router.get("/api/translations/?(.*)",(async(t,s)=>{const a=await e.get(s||"all");return new Response(JSON.stringify(a))})),e}},{id:"@jupyterlite/server-extension:translation-routes",autoStart:!0,requires:[S.ITranslation],activate:(t,e)=>{t.router.get("/api/translations/?(.*)",(async(t,s)=>{const a=await e.get(s||"all");return new Response(JSON.stringify(a))}))}}]}}]);
//# sourceMappingURL=4884.111b47d.js.map