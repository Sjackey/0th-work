window.__require=function t(e,o,r){function n(i,p){if(!o[i]){if(!e[i]){var u=i.split("/");if(u=u[u.length-1],!e[u]){var f="function"==typeof __require&&__require;if(!p&&f)return f(u,!0);if(c)return c(u,!0);throw new Error("Cannot find module '"+i+"'")}i=u}var s=o[i]={exports:{}};e[i][0].call(s.exports,function(t){return n(e[i][1][t]||t)},s,s.exports,t,e,o,r)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<r.length;i++)n(r[i]);return n}({drkz:[function(t,e,o){"use strict";cc._RF.push(e,"76acfJJYWFNB79g1yH4hFcO","drkz");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./\u5766\u514b\u63a7\u5236"),i=cc._decorator,p=i.ccclass,u=(i.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ok=!1,e}return r(e,t),e.prototype.start=function(){},e.prototype.update=function(t){0==this.ok&&(this.node.y-=100*t),this.node.y<0&&this.node.destroy()},e.prototype.die=function(){var t=this;this.ok=!0,cc.loader.loadRes("boom",cc.SpriteFrame,function(e,o){t.node.getComponent(cc.Sprite).spriteFrame=o}),setTimeout(function(){t.node.destroy()},500)},e.prototype.onCollisionEnter=function(t){2==t.tag&&(t.getComponent(c.default).die(),this.node.destroy())},e=n([p],e)}(cc.Component));o.default=u,cc._RF.pop()},{"./\u5766\u514b\u63a7\u5236":"\u5766\u514b\u63a7\u5236"}],"\u5766\u514b\u63a7\u5236":[function(t,e,o){"use strict";cc._RF.push(e,"767a1WuPZVPwrlWrVD8GBxH","\u5766\u514b\u63a7\u5236");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.pao=null,e.ok=!1,e}return r(e,t),e.prototype.start=function(){var t=this;this.node.on(cc.Node.EventType.TOUCH_MOVE,function(e){1!=t.ok&&t.node.setPosition(e.getLocation())}),1!=this.ok&&this.schedule(function(){var e=cc.instantiate(t.pao);e.setParent(cc.director.getScene()),e.x=t.node.x,e.y=t.node.y+110},2),cc.director.getCollisionManager().enabled=!0},e.prototype.die=function(){var t=this;this.ok=!0,cc.loader.loadRes("boom",cc.SpriteFrame,function(e,o){t.node.getComponent(cc.Sprite).spriteFrame=o}),setTimeout(function(){t.node.destroy()},1e3)},n([p(cc.Prefab)],e.prototype,"pao",void 0),e=n([i],e)}(cc.Component);o.default=u,cc._RF.pop()},{}],"\u654c\u4eba\u751f\u6210":[function(t,e,o){"use strict";cc._RF.push(e,"fca2cfbz2VF+LeYydoypmUU","\u654c\u4eba\u751f\u6210");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.\u654c\u4eba=null,e}return r(e,t),e.prototype.start=function(){var t=this;this.schedule(function(){var e=cc.instantiate(t.\u654c\u4eba);e.setParent(cc.director.getScene()),e.x=540*Math.random(),e.y=t.node.y},1.5)},n([p(cc.Prefab)],e.prototype,"\u654c\u4eba",void 0),e=n([i],e)}(cc.Component);o.default=u,cc._RF.pop()},{}],"\u70ae\u5f39\u63a7\u5236":[function(t,e,o){"use strict";cc._RF.push(e,"9f5daIrK79BoI2RCrgwF6fR","\u70ae\u5f39\u63a7\u5236");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./drkz"),i=cc._decorator,p=i.ccclass,u=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.start=function(){},e.prototype.update=function(t){this.node.y+=1e3*t,this.node.y>1e3&&this.node.destroy()},e.prototype.onCollisionEnter=function(t){1==t.tag&&(t.getComponent(c.default).die(),this.node.destroy())},e=n([p],e)}(cc.Component));o.default=u,cc._RF.pop()},{"./drkz":"drkz"}]},{},["drkz","\u5766\u514b\u63a7\u5236","\u654c\u4eba\u751f\u6210","\u70ae\u5f39\u63a7\u5236"]);