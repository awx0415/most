/*!
 * scroller component
 * http://www.wadecn.com/
 * auth:xiedx@asiainfo.com
 * Copyright 2015, WADE
 */
!function(r,l,e){"use strict";if(r&&"undefined"==typeof r.Scroller){var o=Array.prototype.push,n=Array.prototype.splice,c=r.os.phone||!0===r.ratioPhone,t=[],s=function(l,o){var n=this;n.el=l&&1==l.nodeType?l:e.getElementById(l),n.el&&n.el.nodeType&&(n.id=r.attr(n.el,"id"))&&(o&&r.isObject(o)&&r.extend(n,o),r.attr(n.el,"x-wade-uicomponent")||r.attr(n.el,"x-wade-uicomponent","scroller"),n._init(),n.constructor.call(n))};s.prototype=r.extend(new r.UIComponent,{x:function(){var r=this;r.scroller&&r.scroller.x},y:function(){var r=this;r.scroller&&r.scroller.y},dirX:function(){var r=this;r.scroller&&r.scroller.dirX},dirY:function(){var r=this;r.scroller&&r.scroller.dirY},scrollerW:function(){var r=this;r.scroller&&r.scroller.scrollerW},scrollerH:function(){var r=this;r.scroller&&r.scroller.scrollerH},refresh:function(){var r=this;r.scroller&&r.scroller.refresh()},scrollTo:function(r,l,e,o){var n=this;n.scroller&&n.scroller.scrollTo(r,l,e,o)},scrollToElement:function(r,l){var e=this;e.scroller&&e.scroller.scrollToElement(r,l)},scrollToPage:function(r,l,e){var o=this;o.scroller&&o.scroller.scrollToPage(r,l,e)},destroy:function(){var l=this;l.scroller&&l.scroller.destroy(),l.scroller=null,l.el=null,n.call(t,r.inArray(l.id,t),1)},_init:function(){var l=this;(c||r.os.pad)&&(l.el.style.overflow="hidden",l.scroller=new r.Scroll(l.el,{hScroll:l.hScroll,vScroll:l.vScroll,hScrollbar:l.hScrollbar,vScrollbar:l.vScrollbar,bounce:l.bounce,momentum:l.momentum,checkDOMChanges:l.checkDOMChanges,snap:l.snap,snapThreshold:l.snapThreshold,onRefresh:function(){r.event.trigger({type:"refresh",context:this},null,l.el)},onScrollMove:function(){r.event.trigger({type:"scrollMove",context:this},null,l.el)},onScrollEnd:function(){r.event.trigger({type:"scrollEnd",context:this},null,l.el)}})),r.inArray(l.id,t)<0&&o.call(t,l.id),r(function(){l.refresh()})}}),r.extend(s,{refresh:function(){if(t.length>0)for(var r,e=0,o=t.length;e<o;e++)r=t[e],l[r]&&l[r].refresh()}}),l.Scroller=r.Scroller=s}}(window.Wade,window,document);