"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8928,7900],{67900:(t,e,i)=>{i.r(e),i.d(e,{IImageTracker:()=>r,ImageViewer:()=>l,ImageViewerFactory:()=>d});var s=i(26169);const r=new s.Token("@jupyterlab/imageviewer:IImageTracker");var o,n=i(27476),a=i(94367),c=i(5992),h=i(60150);class l extends h.Widget{constructor(t){super(),this._scale=1,this._matrix=[1,0,0,1],this._colorinversion=0,this._ready=new s.PromiseDelegate,this.context=t,this.node.tabIndex=0,this.addClass("jp-ImageViewer"),this._img=document.createElement("img"),this.node.appendChild(this._img),this._onTitleChanged(),t.pathChanged.connect(this._onTitleChanged,this),t.ready.then((()=>{if(this.isDisposed)return;const e=t.contentsModel;this._mimeType=e.mimetype,this._render(),t.model.contentChanged.connect(this.update,this),t.fileChanged.connect(this.update,this),this._ready.resolve(void 0)}))}[a.Printing.symbol](){return()=>a.Printing.printWidget(this)}get ready(){return this._ready.promise}get scale(){return this._scale}set scale(t){t!==this._scale&&(this._scale=t,this._updateStyle())}get colorinversion(){return this._colorinversion}set colorinversion(t){t!==this._colorinversion&&(this._colorinversion=t,this._updateStyle())}dispose(){this._img.src&&URL.revokeObjectURL(this._img.src||""),super.dispose()}resetRotationFlip(){this._matrix=[1,0,0,1],this._updateStyle()}rotateCounterclockwise(){this._matrix=o.prod(this._matrix,o.rotateCounterclockwiseMatrix),this._updateStyle()}rotateClockwise(){this._matrix=o.prod(this._matrix,o.rotateClockwiseMatrix),this._updateStyle()}flipHorizontal(){this._matrix=o.prod(this._matrix,o.flipHMatrix),this._updateStyle()}flipVertical(){this._matrix=o.prod(this._matrix,o.flipVMatrix),this._updateStyle()}onUpdateRequest(t){!this.isDisposed&&this.context.isReady&&this._render()}onActivateRequest(t){this.node.focus()}_onTitleChanged(){this.title.label=n.PathExt.basename(this.context.localPath)}_render(){const t=this.context,e=t.contentsModel;if(!e)return;const i=this._img.src||"";let s=t.model.toString();if("base64"===e.format)this._img.src=`data:${this._mimeType};base64,${s}`;else{const t=new Blob([s],{type:this._mimeType});this._img.src=URL.createObjectURL(t)}URL.revokeObjectURL(i)}_updateStyle(){const[t,e,i,s]=this._matrix,[r,n]=o.prodVec(this._matrix,[1,1]),a=`matrix(${t}, ${e}, ${i}, ${s}, 0, 0) translate(${r<0?-100:0}%, ${n<0?-100:0}%) `;this._img.style.transform=`scale(${this._scale}) ${a}`,this._img.style.filter=`invert(${this._colorinversion})`}}class d extends c.ABCWidgetFactory{createNewWidget(t){const e=new l(t);return new c.DocumentWidget({content:e,context:t})}}!function(t){t.prod=function([t,e,i,s],[r,o,n,a]){return[t*r+e*n,t*o+e*a,i*r+s*n,i*o+s*a]},t.prodVec=function([t,e,i,s],[r,o]){return[t*r+e*o,i*r+s*o]},t.rotateClockwiseMatrix=[0,1,-1,0],t.rotateCounterclockwiseMatrix=[0,-1,1,0],t.flipHMatrix=[-1,0,0,1],t.flipVMatrix=[1,0,0,-1]}(o||(o={}))}}]);
//# sourceMappingURL=8928.1cf8b9c.js.map