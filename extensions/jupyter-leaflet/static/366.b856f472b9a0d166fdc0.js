(self.webpackChunkjupyter_leaflet=self.webpackChunkjupyter_leaflet||[]).push([[366],{9915:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});var i=t(8012),a=t.n(i),s=t(905),r=t.n(s)()(a());r.push([n.id,".leaflet-sbs-range {\n    position: absolute;\n    top: 50%;\n    width: 100%;\n    z-index: 999;\n}\n.leaflet-sbs-divider {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 50%;\n    margin-left: -2px;\n    width: 4px;\n    background-color: #fff;\n    pointer-events: none;\n    z-index: 999;\n}\n",""]);const o=r},3655:(n,e,t)=>{"use strict";t.d(e,{Z:()=>h});var i=t(8012),a=t.n(i),s=t(905),r=t.n(s),o=t(7188),l=t.n(o),d=new URL(t(4199),t.b),p=r()(a()),u=l()(d);p.push([n.id,`.leaflet-sbs-range {\n    -webkit-appearance: none;\n    display: inline-block!important;\n    vertical-align: middle;\n    height: 0;\n    padding: 0;\n    margin: 0;\n    border: 0;\n    background: rgba(0, 0, 0, 0.25);\n    min-width: 100px;\n    cursor: pointer;\n    pointer-events: none;\n    z-index: 999;\n}\n.leaflet-sbs-range::-ms-fill-upper {\n    background: transparent;\n}\n.leaflet-sbs-range::-ms-fill-lower {\n    background: rgba(255, 255, 255, 0.25);\n}\n/* Browser thingies */\n\n.leaflet-sbs-range::-moz-range-track {\n    opacity: 0;\n}\n.leaflet-sbs-range::-ms-track {\n    opacity: 0;\n}\n.leaflet-sbs-range::-ms-tooltip {\n    display: none;\n}\n/* For whatever reason, these need to be defined\n * on their own so dont group them */\n\n.leaflet-sbs-range::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    margin: 0;\n    padding: 0;\n    background: #fff;\n    height: 40px;\n    width: 40px;\n    border-radius: 20px;\n    cursor: ew-resize;\n    pointer-events: auto;\n    border: 1px solid #ddd;\n    background-image: url(${u});\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: 40px 40px;\n}\n.leaflet-sbs-range::-ms-thumb {\n    margin: 0;\n    padding: 0;\n    background: #fff;\n    height: 40px;\n    width: 40px;\n    border-radius: 20px;\n    cursor: ew-resize;\n    pointer-events: auto;\n    border: 1px solid #ddd;\n    background-image: url(${u});\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: 40px 40px;\n}\n.leaflet-sbs-range::-moz-range-thumb {\n    padding: 0;\n    right: 0    ;\n    background: #fff;\n    height: 40px;\n    width: 40px;\n    border-radius: 20px;\n    cursor: ew-resize;\n    pointer-events: auto;\n    border: 1px solid #ddd;\n    background-image: url(${u});\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: 40px 40px;\n}\n.leaflet-sbs-range:disabled::-moz-range-thumb {\n    cursor: default;\n}\n.leaflet-sbs-range:disabled::-ms-thumb {\n    cursor: default;\n}\n.leaflet-sbs-range:disabled::-webkit-slider-thumb {\n    cursor: default;\n}\n.leaflet-sbs-range:disabled {\n    cursor: default;\n}\n.leaflet-sbs-range:focus {\n    outline: none!important;\n}\n.leaflet-sbs-range::-moz-focus-outer {\n    border: 0;\n}\n\n`,""]);const h=p},3893:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>m});var i=t(3534),a=t.n(i),s=t(619),r=t.n(s),o=t(628),l=t.n(o),d=t(4991),p=t.n(d),u=t(1211),h=t.n(u),c=t(1034),g=t.n(c),f=t(9915),b={};b.styleTagTransform=g(),b.setAttributes=p(),b.insert=l().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=h(),a()(f.Z,b);const m=f.Z&&f.Z.locals?f.Z.locals:void 0},3672:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>m});var i=t(3534),a=t.n(i),s=t(619),r=t.n(s),o=t(628),l=t.n(o),d=t(4991),p=t.n(d),u=t(1211),h=t.n(u),c=t(1034),g=t.n(c),f=t(3655),b={};b.styleTagTransform=g(),b.setAttributes=p(),b.insert=l().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=h(),a()(f.Z,b);const m=f.Z&&f.Z.locals?f.Z.locals:void 0},665:(n,e,t)=>{var i,a,s=t(5881);function r(n,e,t,i){e.split(" ").forEach((function(e){s.DomEvent.on(n,e,t,i)}))}function o(n,e,t,i){e.split(" ").forEach((function(e){s.DomEvent.off(n,e,t,i)}))}function l(n){return"oninput"in n?"input":"change"}function d(){i=this._map.dragging.enabled(),a=this._map.tap&&this._map.tap.enabled(),this._map.dragging.disable(),this._map.tap&&this._map.tap.disable()}function p(n){this._refocusOnMap(n),i&&this._map.dragging.enable(),a&&this._map.tap.enable()}function u(n){return"undefined"===n?[]:Array.isArray(n)?n:[n]}t(3893),t(3672),s.Control.SplitMap=s.Control.extend({options:{thumbSize:42,padding:0},initialize:function(n,e,t){this._leftLayers=u(n),this._rightLayers=u(e),this._updateClip(),s.setOptions(this,t)},getPosition:function(){var n=this._range.value,e=(.5-n)*(2*this.options.padding+this.options.thumbSize);return this._map.getSize().x*n+e},setPosition:function(){},includes:"1"===s.version.split(".")[0]?s.Evented.prototype:s.Mixin.Events,addTo:function(n){this.remove(),this._map=n;var e=this._container=s.DomUtil.create("div","leaflet-sbs",n._controlContainer);this._divider=s.DomUtil.create("div","leaflet-sbs-divider",e);var t=this._range=s.DomUtil.create("input","leaflet-sbs-range",e);return t.type="range",t.min=0,t.max=1,t.step="any",t.value=.5,t.style.paddingLeft=t.style.paddingRight=this.options.padding+"px",this._addEvents(),this._updateClip(),this},remove:function(){return this._map?(this._leftLayers.forEach((n=>{n.getContainer?n.getContainer().style.clip="":n.getPane().style.clip=""})),this._rightLayers.forEach((n=>{n.getContainer?n.getContainer().style.clip="":n.getPane().style.clip=""})),this._removeEvents(),s.DomUtil.remove(this._container),this._map=null,this):this},_updateClip:function(){if(!this._map)return this;var n=this._map,e=n.containerPointToLayerPoint([0,0]),t=n.containerPointToLayerPoint(n.getSize()),i=e.x+this.getPosition(),a=this.getPosition();this._divider.style.left=a+"px",this.fire("dividermove",{x:a});var s="rect("+[e.y,i,t.y,e.x].join("px,")+"px)",r="rect("+[e.y,t.x,t.y,i].join("px,")+"px)";this._leftLayers.forEach((n=>{n.getContainer?n.getContainer().style.clip=s:n.getPane().style.clip=s})),this._rightLayers.forEach((n=>{n.getContainer?n.getContainer().style.clip=r:n.getPane().style.clip=r}))},_addEvents:function(){var n=this._range,e=this._map;e&&n&&(e.on("move",this._updateClip,this),e.on("layeradd layerremove",this._updateLayers,this),r(n,l(n),this._updateClip,this),r(n,"ontouchstart"in window?"touchstart":"mousedown",d,this),r(n,"ontouchend"in window?"touchend":"mouseup",p,this))},_removeEvents:function(){var n=this._range,e=this._map;n&&(o(n,l(n),this._updateClip,this),o(n,"ontouchstart"in window?"touchstart":"mousedown",d,this),o(n,"ontouchend"in window?"touchend":"mouseup",p,this)),e&&(e.off("layeradd layerremove",this._updateLayers,this),e.off("move",this._updateClip,this))}}),s.control.splitMap=function(n,e,t){return new s.Control.SplitMap(n,e,t)},n.exports=s.Control.SplitMap},4199:(n,e,t)=>{"use strict";n.exports=t.p+"5d55e5b00993a8a670e7.png"}}]);