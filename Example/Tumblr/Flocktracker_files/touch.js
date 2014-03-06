/* :files, 'spec_javascripts', ... @ (none) */


/* :files, 'spec_javascripts', ... @ (none) */


/* :asset_packager_compatibility, 'config/asset_packages.yml' @ 1393973407 */
/* public/javascripts/shared/vendor/lazy_image.js @ 1393973407 */
/*
  lazyload.js: Image lazy loading

  Copyright (c) 2012 Vincent Voyer, Stéphane Rios

  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
!function(t,e){function n(t){t.onload=null,c(t,m.push(t)-1)}function i(){_(),setTimeout(_,20)}function r(){h=!0,_(),setTimeout(_,20)}function o(t,e){var n=0;return function(){var i=+new Date;e>i-n||(n=i,t.apply(this,arguments))}}function s(t,e,n){t.attachEvent?t.attachEvent&&t.attachEvent("on"+e,n):t.addEventListener(e,n,!1)}function a(t,e){t.getAttribute(f)&&(t.src=t.getAttribute(f),t.removeAttribute(f),e||0===e||(e=v.call(m,t)),e>=0&&(m[e]=null))}function c(t,e){var n=0==t.getBoundingClientRect().top&&0==t.getBoundingClientRect().bottom;return!n&&t.getBoundingClientRect().top<d+p?(a(t,e),!0):!1}function l(){d=t.innerHeight||e.documentElement&&e.documentElement.clientHeight||e.body&&e.body.clientHeight||1e4}function u(){var t,e=m.length,n=!0;for(t=0;e>t;t++){var i=m[t];null===i||c(i,t)||(n=!1)}}var d,h,p=200,f="data-src",m=[],g=o(l,20),_=o(u,20);t.lzld=n,t.force_lzld=a,l(),s(t,"resize",g),s(t,"scroll",_),s(e,"DOMContentLoaded",i),s(t,"load",r);var v=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1}}(this,document);


/* public/javascripts/mobile/touch_gestures.js @ 1393973407 */
var TouchGestures={};TouchGestures.enabled=!!("ontouchstart"in window||window.navigator.msPointerEnabled);var msTouchEvents={touchstart:"MSPointerDown",touchmove:"MSPointerMove",touchend:"MSPointerUp"},t=TouchGestures.touchEvent=function(t){return window.navigator.msPointerEnabled?msTouchEvents[t]:t};TouchGestures.normalizeEvent=function(t){return _.invert(msTouchEvents)[t]||t},TouchGestures.clickWithNoDelay=function(e,n,i){e&&(e=$(e),TouchGestures.enabled?(window.jQuery===window.$&&(e=e[0]),e.addEventListener(t("touchstart"),function(){var r=!1,o=function(t){i?t.preventDefault():r=!0},s=function(i){e.removeEventListener(t("touchmove"),o,!1),e.removeEventListener(t("touchend"),s,!1),!r&&n(i)};e.addEventListener(t("touchmove"),o,!1),e.addEventListener(t("touchend"),s,!1)})):window.jQuery===$?e.on("click",n):e.observe("click",n))},TouchGestures.Press=function(e,n){n=n||{delay:1e3,touches:1},this.element=$(e),this.delay=n.delay||1e3,this.touches=n.touches||1,this.timer=null,this.pressed=!1;var i=this;window.jQuery===$?(this.element[0].addEventListener(t("touchstart"),function(t){i.touchstart(t)},!1),this.element[0].addEventListener(t("touchend"),function(t){i.touchend(t)},!1)):(this.element.addEventListener(t("touchstart"),function(t){i.touchstart(t)},!1),this.element.addEventListener(t("touchend"),function(t){i.touchend(t)},!1)),window.navigator.msPointerEnabled&&(this.element.css("-ms-touch-action","none"),this.msTouch=!0)},TouchGestures.Press.prototype={touchstart:function(t){clearTimeout(this.timer),this.msTouch||t.touches.length===this.touches?this.timer=setTimeout(function(){this.pressed=!0,window.jQuery===$?this.element.trigger("scribd:touch:pressstart"):this.element.fire("scribd:touch:pressstart")}.bind(this),this.delay):this.pressed=!1},touchend:function(t){this.pressed===!0&&(this.pressed=!1,t.preventDefault(),window.jQuery===$?this.element.trigger("scribd:touch:pressend"):this.element.fire("scribd:touch:pressend")),clearTimeout(this.timer)}},TouchGestures.Swipe=function(e,n,i){this.element=$(n),this.name=e,this.minLength=i.minLength||200,this.tolerance=i.tolerance||100,this.swiping=i.swiping||null,this.complete=i.complete||function(){},this.incomplete=i.incomplete||function(){},"X"===i.orientation||"x"===i.orientation?(this.moveOrientation="X",this.toleranceOrientation="Y"):(this.moveOrientation="Y",this.toleranceOrientation="X"),this.direction=i.direction||1,this.tracking=!1,this.originX=null,this.originY=null;var r=this;window.jQuery===$?(this.element[0].addEventListener(t("touchstart"),function(t){r.touchstart(t)},!1),this.element[0].addEventListener(t("touchmove"),function(t){r.touchmove(t)},!1),this.element[0].addEventListener(t("touchend"),function(t){r.touchend(t)},!1)):(this.element.addEventListener(t("touchstart"),function(t){r.touchstart(t)},!1),this.element.addEventListener(t("touchmove"),function(t){r.touchmove(t)},!1),this.element.addEventListener(t("touchend"),function(t){r.touchend(t)},!1)),window.navigator.msPointerEnabled&&(this.msTouch=!0,this.element.css("-ms-touch-action","none"),this.pointerId=null)},TouchGestures.Swipe.prototype={touchstart:function(t){(this.msTouch||1===t.touches.length)&&(this.originX=t.pageX||t.touches[0].clientX,this.originY=t.pageY||t.touches[0].clientY,this.tracking=!0,this.msTouch&&(this.pointerId=t.pointerId))},touchmove:function(t){if(this.tracking){var e,n;this.msTouch?(e=t.pointerId===this.pointerId,n=t):(e=1===t.touches.length,n=t.touches[0]),e&&this.validMovingTouch(n)?this.swiping&&this.swiping(t):this.reset()}},touchend:function(t){if(this.tracking){var e,n;this.msTouch?(e=t.pointerId===this.pointerId,n=t):(e=0===t.touches.length&&1===t.changedTouches.length,n=t.changedTouches[0]),e&&this.validEndingTouch(n)?this.complete(t):this.incomplete(t),this.reset()}},reset:function(){this.tracking&&(this.tracking=!1)},validEndingTouch:function(t){return this.validMovingTouch(t)&&this.validMinLength(t)},validMovingTouch:function(t){return this.tracking&&this.validDirection(t)&&this.validTolerance(t)},validDirection:function(t){var e=this["origin"+this.moveOrientation],n=t["page"+this.moveOrientation]||t["client"+this.moveOrientation];return 1===this.direction?n>=e:e>=n},validTolerance:function(t){return this.movedTolerance(t)<this.tolerance},validMinLength:function(t){return this.movedDistance(t)>this.minLength},movedTolerance:function(t){var e=this["origin"+this.toleranceOrientation],n=t["page"+this.toleranceOrientation]||t["client"+this.toleranceOrientation];return Math.abs(e-n)},movedDistance:function(t){var e=this["origin"+this.moveOrientation],n=t["page"+this.moveOrientation]||t["client"+this.moveOrientation];return 1===this.direction?Math.abs(n-e):Math.abs(e-n)}};


/* public/javascripts/mobile/touch_slider.js @ 1393973407 */
var TouchSlider=function(t){this.handle=t.handle,this.track=t.track,this.scroll=(t.scroll||"X").toUpperCase(),this.previousStep=parseInt(t.currentStep||0),"X"===this.scroll?(this.handleSize=parseFloat(t.handleSize||this.handle.offsetWidth),this.trackSize=parseFloat(t.trackSize||this.track.offsetWidth),this.handleMovement="left"):(this.handleSize=parseFloat(t.handleSize||this.handle.offsetHeight),this.trackSize=parseFloat(t.trackSize||this.track.offsetHeight),this.handleMovement="top"),this.totalSteps=parseInt(t.totalSteps||this.trackSize),this.handleMoveOffset=parseFloat(t.handleMoveOffset||0),this.reset(),this.touchStarted=t.touchStarted||function(){},this.touchMoved=t.touchMoved||function(){},this.touchEnded=t.touchEnded||function(){},this.handleMoved=t.handleMoved||function(){},this.moveHandleToStep(this.previousStep),this.track.addEventListener(TouchGestures.touchEvent("touchstart"),this,!1),this.track.addEventListener(TouchGestures.touchEvent("touchmove"),this,!1),this.track.addEventListener(TouchGestures.touchEvent("touchend"),this,!1),window.navigator.msPointerEnabled&&(this.msTouch=!0,$(this.track).parent().parent().css("-ms-touch-action","none"),this.pointerId=null)};TouchSlider.prototype={reset:function(){this.handleOffset=this.handleSize/2,this.pixelsPerStep=this.trackSize/this.totalSteps,this.stepOffset=this.pixelsPerStep/2-this.handleOffset},handleEvent:function(t){var e=this[TouchGestures.normalizeEvent(t.type)];e&&e.call(this,t)},touchstart:function(t){t.preventDefault(),(this.msTouch||1===t.targetTouches.length)&&(this.touchStarted(t),this.msTouch&&(this.pointerId=t.pointerId))},touchmove:function(t){t.stopPropagation();var e,n;this.msTouch?(e=t.pointerId===this.pointerId,n=t):(e=1===t.targetTouches.length,n=t.targetTouches[0]),e&&(this.moveHandleToPosition(this.touchPosition(n)),this.touchMoved(t))},touchend:function(t){t.preventDefault(),this.moveHandleToStep(this.currentStep()),this.touchEnded(t),this.msTouch&&(this.pointerId=null)},currentStep:function(){return this.positionStep(this.handlePosition)},moveHandleToStep:function(t){return this.moveHandleToPosition(this.stepPosition(t))},touchPosition:function(t){return(t["page"+this.scroll]||t["client"+this.scroll])-(this.handleOffset+this.handleMoveOffset)},moveHandleToPosition:function(t){t-=this.handleOffset,t=this.validPosition(t),this.handlePosition=t,$(this.handle).css("transform","translate"+this.scroll+"("+t+"px)"),this.handleMoved(t)},positionStep:function(t){return Math.round((t+this.handleSize+this.stepOffset)/this.pixelsPerStep)-1},stepPosition:function(t){return this.pixelsPerStep*t+this.handleOffset+this.stepOffset},validPosition:function(t){return Math.max(this.stepOffset,Math.min(this.trackSize-(this.stepOffset+this.handleSize),t))}};


/* :asset_packager_compatibility, 'config/asset_packages.yml' @ 1393973213 */


/* :files, 'public/javascripts/shared', ... @ (none) */


/* :files, 'app/views', ... @ (none) */


/* :files, 'app/views', ... @ (none) */


/* :class_inlines, 'app/views', ... @ (none) */
