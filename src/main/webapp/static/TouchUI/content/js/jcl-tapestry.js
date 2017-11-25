/*!
 * tapestry adapter
 * http://www.wadecn.com/
 * auth:xiedx@asiainfo.com
 * Copyright 2011, WADE
 */
!function(t,e,n){t.extend({UI_POPUP_JS:"v5/jcl/ui/component/base/popup.js",UI_DIALOG_JS:"v5/jcl/ui/component/base/dialog.js",UI_FRAME_JS:"v5/jcl/ui/component/base/frame.js",UI_TABSET_JS:"v5/jcl/ui/component/tabset/tabset.js",FILE_UPLOAD_URL:"attach?action=upload",FILE_DELETE_URL:"attach?action=delete",FILE_DOWNLOAD_URL:"attach?action=download",FILE_QUERY_URL:"attach?action=query",IMPEXP_URL:"impexp"})}(window.Wade,window,document),/*!
 * page common api for webframe 
 * http://www.wadecn.com/
 * auth:xiedx@asiainfo.com
 * Copyright 2011, WADE
 */
function(t,e,n){"use strict";if(t){var a="x-wade-loading-",i=0,r=5e3,o=[];t.extend({ctx:t("#ctx"),isSameDomain:function(t){var e=!1;try{t&&t.document&&(e=t.document.domain==document.domain)}catch(n){}return e},isSamePage:function(t){var n;try{t&&t.document&&t.Wade&&e.Wade&&(n=!1,n=t.Wade.expando==e.Wade.expando)}catch(a){}return n},getParentIframe:function(){if(t.isSameDomain(parent)&&!t.isSamePage(parent)){var n,a=!1,i=parent.document.getElementsByTagName("iframe");if(i&&i.length>0)for(var r=0,o=i.length;r<o;r++)if((n=i[r])&&n.contentWindow&&n.contentWindow==e){a=!0;break}return i=null,1==a?n:void 0}},beginLoading:function(e,l,d){var s,c,u=!l,p=u?t(n.body):l&&t.isString(l)?t("#"+l):l&&l.nodeType?t(l):null;if(p&&p.length){void 0==e&&(e=t.lang.get("ui.page.loading"));var g=u?t("#"+a+"global"):p.find("div[x-wade-uicomponent=loading]:first");if(!g.length){s=u?a+"global":a+i++;var v=t.extend({},d),f=v.className?v.className:"c_msg c_msg-loading";!1!==v.full&&(f+=" c_msg-full"),p.append('<div id="'+s+'" class="'+f+'" x-wade-uicomponent="loading"><div class="wrapper"><div class="emote"></div><div class="info"><div class="text"><div class="title">'+e+"</div></div></div></div></div>"),g=u?t("#"+s):p.find("div[x-wade-uicomponent=loading]:first"),v=null}if(!u&&(s=g.attr("id"))?(o.push(s),c=r+o.indexOf(s)):c=r+1e3,g.length){g.css("z-index",c),g.css("display","");var h=g.find("div .title");h.length&&h.html(e),h=null}g=null,p=null,s=c=null}},endLoading:function(e){var i,r=!e,l=r?t(n.body):e&&t.isString(e)?t("#"+e):e&&e.nodeType?t(e):null,d=r?t("#"+a+"global"):l.find("div[x-wade-uicomponent=loading]:first");d.length&&(!r&&(i=d.attr("id"))&&o.splice(o.indexOf(i),1),d.css("display","none")),d=null,l=null,i=null},removeLoading:function(e){var i,r=!e,l=r?t(n.body):e&&t.isString(e)?t("#"+e):e&&e.nodeType?t(e):null,d=r?t("#"+a+"global"):l.find("div[x-wade-uicomponent=loading]:first");d.length&&(!r&&(i=d.attr("id"))&&o.splice(o.indexOf(i),1),d.css("display","none"),d.remove()),d=null,l=null,i=null},beginPageLoading:function(e,n){t.beginLoading(e,n)},endPageLoading:function(e){t.endLoading(e)},removePageLoading:function(e){t.removeLoading(e)}}),t.each("beginLoading,endLoading,beginPageLoading,endPageLoading,removePageLoading".split(","),function(n,a){e[a]=t[a]})}}(window.Wade,window,document),/*!
 * page redirect api for webframe 
 * http://www.wadecn.com/
 * auth:xiedx@asiainfo.com
 * Copyright 2011, WADE
 */
function(t,e,n){"use strict";if(t&&"undefined"==typeof t.redirect){var a,i,r=t.ctx.attr("urlparams");t.redirect={getPathName:function(){if(void 0==a){if(e.getPathName&&t.isFunction(e.getPathName))return a=e.getPathName();var n=e.location.protocol;"http:"==n||"https:"==n?(a=e.location.pathname,a&&a.indexOf("/")>0&&(a="/"+a)):a=""}return a},getPageName:function(){var n=t.ctx.attr("page");if(!n){var a=e.location.pathname,i=a.indexOf(".html");if(i>0){pathName=a.substring(0,i);var r=pathName.split("/");n=r[r.length-1]}}return n},getSessionIdFromUrl:function(){return this.isSessionIdFromUrl()?i:null},isSessionIdFromUrl:function(){if(void 0==i){var t=e.location.search;if(t){var n=t.lastIndexOf("SESSIONID=");n>-1&&(t=t.substring(n+10,t.length),n=t.indexOf("&"),n>-1&&(t=t.substring(0,n)),i=t)}i||(i=null)}return null!=i},parseUrl:function(e){if(e&&t.isString(e)){if(r&&""!=r){for(var n,a,o,l,d=t.params.load(e),s=r.split(","),c=0;c<s.length;c++)if(s[c]&&s[c].length){if(n=s[c].indexOf(":"),n==-1?a=o=s[c]:(a=s[c].substring(n+1),o=s[c].substring(0,n)),d.get(o)&&""!=d.get(o))continue;var u=d.get("service");if(u&&"ajax"==u?"page"==a?l=d.get("page"):(l=d.get(a),null!=l&&""!=l||(l=t.ctx.attr(a))):"page"==a?l=u?u.substring(u.indexOf("/")+1):"":(l=d.get(a),null!=l&&""!=l||(l=t.ctx.attr(a))),u=null,null!=l&&""!=l){e+=(e.indexOf("?")!=-1?"&":"?")+o+"="+l;continue}null!=d.get(a)&&""!=d.get(a)||(e+=(e.indexOf("?")!=-1?"&":"?")+a+"="+l)}d=null}return this.isSessionIdFromUrl()&&(e+=(e.indexOf("?")!=-1?"&":"?")+"SESSIONID="+i),e}},buildUrl:function(e,n,a,i){for(var r=0;r<arguments.length;r++)null!=arguments[r]&&void 0!=arguments[r]||(arguments[r]="");3==arguments.length?(i=a,a=n,n=e,e=null):2==arguments.length?(a=n,n=e,e=null):1==arguments.length&&(n=e,e=null);var o="";if(e?o+=e:o=t.redirect.getPathName()+o,n&&(o+="?service=page/"+n),a&&(o+="&listener="+a),i&&"string"==typeof i){var l=i.charAt(0);"?"==l?i="&"+i.substring(1):"&"!=l&&(i="&"+i),o+=i}return o=this.parseUrl(o)},buildSysUrl:function(e,n){if(1==arguments.length&&(n=e,e=null),n){n=t.trim(n);var a="";return 0!=n.indexOf("http")&&"/"!=n.charAt(0)&&n.indexOf("?")<0&&(e?a+=e:a=t.redirect.getPathName()+a,a+="?"),a+=n,a=this.parseUrl(a)}},to:function(t){t&&(t=this.parseUrl(t),n.location.href=t)},toUrl:function(e){e&&(e=t.redirect.parseUrl(e),n.location.href=e)},toSysUrl:function(t,e){e=this.buildSysUrl.apply(this,arguments),n.location.href=e},toPage:function(t,e,a,i){var r=this.buildUrl.apply(this,arguments);n.location.href=r}},e.redirectTo=t.redirectTo=t.redirect.toPage}}(window.Wade,window,document),/*!
 * ajax request library for webframe
 * http://www.wadecn.com/
 * auth:xiedx@asiainfo.com
 * Copyright 2011, WADE
 */
function(t,e,n){"use strict";function a(e){var n=[];if(e&&t.isPlainObject(e))for(var a in e){var i=e[a],r=encodeURIComponent(a),o=typeof i;if("undefined"==o||null==i||""==i)n.push('"'+r+'":""');else if("function"!=o&&"object"!=o)n.push('"'+r+'":"'+encodeURIComponent(i)+'"');else if(t.isArray(i))if(i.length)for(var l=0,d=i.length;l<d;l++)n.push('"'+r+'":"'+encodeURIComponent(void 0===i[l]?"":i[l])+'"');else n.push('"'+r+'":""')}return"{"+n.join(",")+"}"}function i(n,a,i){if(n&&t.isString(n)){var r={},o=t("#"+n+" input[name],#"+n+" select[name],#"+n+" textarea[name]");if(o.length){var l,d,s,c,u=!1;o.each(function(){l=this,d=t.attr(l,"name"),u=!1,d&&(a&&t.isString(a)&&0!=d.indexOf(a)||(t.nodeName(l,"input")?(s=t.attr(l,"type"),u=!0,!s||"radio"!=s&&"checkbox"!=s||l.checked||(u=!1)):u=!0,t.nodeName(l,"select")&&!t("option:first",l).length&&(u=!1),u&&(c=t.trim(t(l).val()),t.nodeName(l,"textarea")&&e.CKEDITOR&&"true"==t.attr(l,"__ckeditor")&&(c=CKEDITOR.instances[t.attr(l,"id")].getData()),void 0!=c&&null!=c||(c=""),c=t.xss(c,1==i),t.isArray(c)?"undefined"!=typeof r[d]?t.isArray(r[d])?r[d]=r[d].concat(c):(r[d]=[r[d]],r[d]=r[d].concat(c)):r[d]=c:"undefined"!=typeof r[d]?t.isArray(r[d])?r[d].push(c):(r[d]=[r[d]],r[d].push(c)):r[d]=c)))})}return r}}function r(e,n,r,o){if(e&&t.isString(e)){var l=t("#"+e).attr("uiid"),d=l&&t.isString(l),s=i(e,r,o);if(d){var c=t.ctx.attr("oldAjaxJsonData");return"false"==c?l+"="+a(s):l+"=["+a(s)+","+a(t("#"+e).data("oldAjaxJsonData"))+"]"}var u=[];for(var p in s){var g=s[p],v=0==n?p:encodeURIComponent(p),f=typeof g;if("undefined"==f||null==g||""==g)u.push(v,"=&");else if("function"!=f&&"object"!=f)u.push(v,"=",0==n?g:encodeURIComponent(g),"&");else if(t.isArray(g))if(g.length)for(var h=0,y=g.length;h<y;h++)u.push(v,"=",0==n?void 0===g[h]?"":g[h]:encodeURIComponent(void 0===g[h]?"":g[h]),"&");else u.push(v,"=&")}return u.pop(),u.join("")}}function o(e,n){var a="";if(e&&t.isString(e)){var i,o=[];t.each(e.split(","),function(e,n){o.push(r(n)),i=t("#"+n).attr("exparams"),i&&t.isString(i)&&(a+=i),i=null}),a+="&"+o.join("&")}return n&&n instanceof t.DataMap&&n.length&&(n=n.map),n&&t.isObject(n)&&(n=t.param(n)),n&&(a+="&"+n),a&&0==a.indexOf("&")&&(a=a.substring(1)),a}function l(e){var n=t.extend(!0,{},e);t.ajaxRequest(n)}function d(e,n,a,r){if(r.simple)return void(r.callback&&t.isFunction(r.callback)&&r.callback(e,n,a));var o,l,d,s,c,u,p;if(e&&t.isString(e)){var g=e.lastIndexOf("\n");g>-1&&(p=e.substring(0,g),e=e.substring(g+1,e.length)),e=t.parseJSON(t.parseJsonString(e)),l=e.context.x_resultcode,d=e.context.x_resultinfo,u=e.context.x_errorlevel,"DEBUG"!=u&&"LOG"!=u||(s=e.context.x_errorid,c=e.context.x_errorinfo,c=u+"|"+s+"|"+c),e=e.data}if(r.partids&&p&&t.each(r.partids.split(","),function(e,n){var a=n.substring(n.lastIndexOf(".")+1),r="<__part_"+a+">",o="</__part_"+a+">",l=p.indexOf(r),d=p.indexOf(o);if(!(l<0||d<0)){var s=p.substring(l+r.length,d),c=t("#"+a);if(c.length&&(c.html(s),c.attr("uiid"))){var u=t.ctx.attr("oldAjaxJsonData");"false"!=u&&c.data("oldAjaxJsonData",i(c.attr("id")))}}}),e&&(t.isArray(e)||t.isObject(e)))if(t.isArray(e)){var v=!0;if(e.length){var f=e.length;f&&/^\d+$/.test(f)&&parseInt(f)>0||(v=!1)}else v=!1;o=v?new t.DatasetList(e):new t.DatasetList}else o=new t.DataMap(e);if(!/^(-)?[@#\s\.:;$\{\}\[\]a-zA-Z0-9_-]+$/.test(l))return void(r.errorback&&t.isFunction(r.errorback)?r.errorback(-1,"Incorrect format:X_RESULTCODE","Incorrect format:X_RESULTCODE"):alert("Incorrect format:X_RESULTCODE"));if("0"!=l){d||(d="");var h="";return h=d.indexOf("Caused")!=-1?d.indexOf(":")!=-1?d.substring(d.lastIndexOf(":")+1):d.substring(d.lastIndexOf("Caused")+6):d,void(r.errorback&&t.isFunction(r.errorback)?r.errorback(l,d,c):alert(h))}o&&r.callback&&t.isFunction(r.callback)&&r.callback(o,n,a)}function s(e,n,a,i){var r=e&&4==e.readyState?e.status:n,o=a?a.getMessage():"HttpStatus:"+r+"\nXMLHttp Request Error";i.errorback&&t.isFunction(i.errorback)?i.errorback(r,o,o):alert(o)}if(t&&"undefined"==typeof t.httphandler){"undefined"==typeof t.ajax&&(t.ajax={});var c,u="handler";(c=t.ctx.attr("ajax"))||(c="ajax"),t.extend(t.ajax,{buildUrl:function(e,n,a,i){for(var r=0;r<arguments.length;r++)null!=arguments[r]&&void 0!=arguments[r]||(arguments[r]="");3==arguments.length?(i=a,a=n,n=e,e=null):2==arguments.length?(a=n,n=e,e=null):1==arguments.length&&(n=e,e=null),n||(n=t.redirect.getPageName());var o="";return e?o+=e:o=t.redirect.getPathName()+o,o+="?service="+c,n&&(o+="&page="+n),a&&(o+="&listener="+a),o=t.redirect.parseUrl(o),i&&"string"==typeof i&&(o+=("&"==i.indexOf(0)?"":"&")+i),o},buildJsonData:function(t,e,n){return i(t,e,n)},buildPostData:function(t,e,n,a){return r(t,e,n,a)},buildSubmitData:function(t,e){return o(t,e)},ajaxSettings:{simple:!1,type:"GET",async:!0,cache:!1,dataType:"text",loading:!0,timeout:18e4},setup:function(e){e&&t.isPlainObject(e)&&t.extend(this.ajaxSettings,e)},request:function(e,n,a,i,r,o,c){function u(t,e,n){d(t,e,n,y)}function p(t,e,n){s(t,e,n,y)}a&&t.isFunction(a)&&(o=r,r=a,a=null),a&&a instanceof t.DataMap&&a.length&&(a=a.map);var g=this.buildUrl(e,n);if(i&&t.isString(i)){var v=[],f=i.split(",");t.each(f,function(e,n){if(n&&n.indexOf(".")<0){var a=t("#"+n).attr("_jwc_path");v[e]=a?a:""}}),i=f.join(","),g+="&partids="+i,g+="&jwcpaths="+v.join(","),v=f=null}a||t.isString(a)||(a="");var h=t.ctx.attr("ws_randomCode");h&&(a+="&ws_randomCode="+h);var y=t.extend({url:g,data:a,type:"GET",partids:i,success:u,error:p,callback:r,errorback:o},t.ajax.ajaxSettings,c);"text"!=y.dataType&&(y.simple=!0),l(y)},getString:function(e,n,a,i,r,o){t.ajax.request(e,n,a,null,i,r,t.extend({simple:!0},o))},getJson:function(e,n,a,i,r,o){t.ajax.request(e,n,a,null,i,r,t.extend({dataType:"json",simple:!0},o))},getJsonp:function(e,n,a,i,r){t.ajax.request(e,n,a,null,i,r,{dataType:"jsonp",simple:!0})},getScript:function(e,n,a,i,r,o){t.ajax.request(e,n,a,null,i,r,t.extend({dataType:"script",simple:!0},o))},get:function(e,n,a,i,r,o,l){t.ajax.request(e,n,a,i,r,o,l)},post:function(e,n,a,i,r,o,l){t.ajax.request(e,n,a,i,r,o,t.extend({type:"POST",encoding:"UTF-8"},l))},submit:function(e,n,a,i,r,l,d){t.ajax.post(null,n,o(e,a),i,r,l,d)}}),t.httphandler={buildUrl:function(e,n,a,i){for(var r=0;r<arguments.length;r++)null!=arguments[r]&&void 0!=arguments[r]||(arguments[r]="");3==arguments.length?(i=a,a=n,n=e,e=null):2==arguments.length?(a=n,n=e,e=null):1==arguments.length&&(a=e,e=null);var o="";if(e)o+=e;else{var l=t.redirect.getPathName();o=l.substring(0,l.lastIndexOf("/")+1)+u+o}o+="?clazz="+n,a&&(o+="&method="+a);var d=t.redirect.getPageName();return d&&(o+="&page="+d),o=t.redirect.parseUrl(o),i&&"string"==typeof i&&(o+=("&"==i.indexOf(0)?"":"&")+i),o},buildJsonData:function(t,e,n){return i(t,e,n)},buildPostData:function(t,e,n,a){return r(t,e,n,a)},buildSubmitData:function(t,e){return o(t,e)},httphandlerSettings:{simple:!1,type:"GET",async:!0,cache:!1,dataType:"text",loading:!0,timeout:18e4},setup:function(e){e&&t.isPlainObject(e)&&t.extend(this.httphandlerSettings,e)},request:function(e,n,a,i,r,o){function c(t,e,n){d(t,e,n,g)}function u(t,e,n){s(t,e,n,g)}a&&t.isFunction(a)&&(r=i,i=a,a=null),a&&a instanceof t.DataMap&&a.length&&(a=a.map);var p=this.buildUrl(e,n),g=t.extend({url:p,data:a,type:"GET",success:c,error:u,callback:i,errorback:r},t.httphandler.httphandlerSettings,o);"text"!=g.dataType&&(g.simple=!0),l(g)},getJson:function(e,n,a,i,r,o){t.httphandler.request(e,n,a,i,r,t.extend({dataType:"json",simple:!0},o))},getJsonp:function(e,n,a,i,r){t.httphandler.request(e,n,a,i,r,{dataType:"jsonp",simple:!0})},getScript:function(e,n,a,i,r,o){t.httphandler.request(e,n,a,i,r,t.extend({dataType:"script",simple:!0},o))},get:function(e,n,a,i,r,o){t.httphandler.request(e,n,a,i,r,o)},post:function(e,n,a,i,r,o){t.httphandler.request(e,n,a,i,r,t.extend({type:"POST",encoding:"UTF-8"},o))},submit:function(e,n,a,i,r,l,d){t.httphandler.post(n,a,o(e,i),r,l,d)}};var p=t.ctx.attr("oldAjaxJsonData");"false"!=p&&t(n).ready(function(){t("*[uiid]").each(function(){var e=t.attr(this,"id");e&&t.data(this,"oldAjaxJsonData",i(e))})}),e.ajaxGet=t.ajax.get,e.ajaxPost=t.ajax.post,e.ajaxSubmit=t.ajax.submit,e.hhGet=t.httphandler.get,e.hhPost=t.httphandler.post,e.hhSubmit=t.httphandler.submit}}(window.Wade,window,document),/*!
 * nav control api
 * http://www.wadecn.com/
 * auth:xiedx@asiainfo.com
 * Copyright 2011, WADE
 */
function(t,e,n){"use strict";function a(){void 0==s&&(s=t.isSameDomain(top)),void 0==c&&(c=t.isSamePage(top))}function i(){return t.nav&&t.nav.adapter}function r(t){return t&&a(),s&&!c&&top.Wade&&top.Wade.nav&&top.Wade.nav.adapter}function o(t){return t&&a(),s&&top.Wade&&top.Wade&&top.Wade.extNavAdapter}function l(e,n,a,i){var r;return r=e&&t.isString(e)?t.redirect.buildUrl(e,n,a,i):t.redirect.buildUrl(n,a,i)}function d(e,n){return n=e&&t.isString(e)?t.redirect.buildSysUrl(e,n):t.redirect.buildSysUrl(n)}if(t&&"undefined"==typeof t.nav){var s,c;t.nav={adapter:void 0,events:{active:"onActive",unactive:"onUnActive",close:"onClose"},methods:{init:t.lang.get("ui.nav.init")+"void init(window win,document doc)",open:t.lang.get("ui.nav.open")+"void open(string title,string page,string listener,string params,string subsys,object data)",openLock:t.lang.get("ui.nav.openLock")+"void openLock(string title,string page,string listener,string params,string subsys,object data)",openByUrl:t.lang.get("ui.nav.openByUrl")+"void openByUrl(string title,string url,string subsys,object data)",redirect:t.lang.get("ui.nav.redirect")+"void redirect(string title,string page,string listener,string params,string subsys,object data)",redirectByUrl:t.lang.get("ui.nav.redirectByUrl")+"void redirectByUrl(string title,string url,string subsys,object data)",reload:t.lang.get("ui.nav.reload")+"void reload(string url)",getData:t.lang.get("ui.nav.getData")+"object getData()",getDataByTitle:t.lang.get("ui.nav.getDataByTitle")+"object getDataByTitle()",getTitle:t.lang.get("ui.nav.getTitle")+"string getTitle()",getContentWindow:t.lang.get("ui.nav.getContentWindow")+"[frame]contentWindow getContentWindow()",getContentWindowByTitle:t.lang.get("ui.nav.getContentWindowByTitle")+"[frame]contentWindow getContentWindowByTitle(string title)",switchByTitle:t.lang.get("ui.nav.switchByTitle")+"void switchByTitle(string title)",close:t.lang.get("ui.nav.close")+"void close()",closeByTitle:t.lang.get("ui.nav.closeByTitle")+"void closeByTitle()"},init:function(e,n){o(!0)?top.Wade.extNavAdapter.init(e,n):r()?top.Wade.nav.adapter.init(e,n):i()&&t.nav.adapter.init(e,n)},open:function(n,a,d,s,c,u){n&&t.isString(n)||t.error("title"+t.lang.get("ui.nav.notnull")),a&&t.isString(a)||t.error("page"+t.lang.get("ui.nav.notnull"));var p=t.redirect.getPathName();if(o(!0)&&top.Wade.extNavAdapter.openByUrl){var g=l(c,a,d,s);return void top.Wade.extNavAdapter.openByUrl.apply(e,[n,g,c?c:p,u])}return r()?void top.Wade.nav.adapter.open.apply(e,[n,a,d,s,c?c:p,u]):i()?void t.nav.adapter.open.apply(e,[n,a,d,s,c,u]):void t.redirect.toPage(c,a,d,s)},openLock:function(n,a,d,s,c,u){n&&t.isString(n)||t.error("title"+t.lang.get("ui.nav.notnull")),a&&t.isString(a)||t.error("page"+t.lang.get("ui.nav.notnull"));var p=t.redirect.getPathName();if(o(!0)&&top.Wade.extNavAdapter.openLockByUrl){var g=l(c,a,d,s);return void top.Wade.extNavAdapter.openLockByUrl.apply(e,[n,g,c?c:p,u])}return r()?void top.Wade.nav.adapter.openLock.apply(e,[n,a,d,s,c?c:p,u]):i()?void t.nav.adapter.openLock.apply(e,[n,a,d,s,c,u]):void t.redirect.toPage(c,a,d,s)},openByUrl:function(n,a,l,s){return n&&t.isString(n)||t.error("title"+t.lang.get("ui.nav.notnull")),a&&t.isString(a)||t.error("url"+t.lang.get("ui.nav.notnull")),a.indexOf("?")<0&&!l&&(l=t.redirect.getPathName()),o(!0)&&top.Wade.extNavAdapter.openByUrl?(a=d(l,a),void top.Wade.extNavAdapter.openByUrl.apply(e,[n,a,l,s])):r()?void top.Wade.nav.adapter.openByUrl.apply(e,[n,a,l,s]):i()?void t.nav.adapter.openByUrl.apply(e,[n,a,l,s]):void t.redirect.toUrl(a)},openLockByUrl:function(n,a){return n&&t.isString(n)||t.error("title"+t.lang.get("ui.nav.notnull")),a&&t.isString(a)||t.error("url"+t.lang.get("ui.nav.notnull")),a.indexOf("?")<0&&!subsys&&(subsys=t.redirect.getPathName()),o(!0)&&top.Wade.extNavAdapter.openLockByUrl?(a=d(subsys,a),void top.Wade.extNavAdapter.openLockByUrl.apply(e,[n,a,subsys,data])):r()?void top.Wade.nav.adapter.openLockByUrl.apply(e,[n,a,subsys,data]):i()?void t.nav.adapter.openLockByUrl.apply(e,[n,a,subsys,data]):void t.redirect.toUrl(a)},redirect:function(n,a,d,s,c,u){var p=t.redirect.getPathName();if(o(!0)&&top.Wade.extNavAdapter.redirectByUrl){var g=l(c,a,d,s);return void top.Wade.extNavAdapter.redirectByUrl.apply(e,[n,g,c?c:p,u])}return r()?void top.Wade.nav.adapter.redirect.apply(e,[n,a,d,s,c?c:p,u]):i()?void t.nav.adapter.redirect.apply(e,[n,a,d,s,c,u]):void t.redirect.toPage(c,a,d,s)},redirectByUrl:function(n,a,l,s){return n&&t.isString(n)||t.error("title"+t.lang.get("ui.nav.notnull")),a&&t.isString(a)||t.error("url"+t.lang.get("ui.nav.notnull")),a.indexOf("?")<0&&!l&&(l=t.redirect.getPathName()),o(!0)&&top.Wade.extNavAdapter.redirectByUrl?(a=d(l,a),void top.Wade.extNavAdapter.redirectByUrl.apply(e,[n,a,l,s])):r()?void top.Wade.nav.adapter.redirectByUrl.apply(e,[n,a,l,s]):i()?void t.nav.adapter.redirectByUrl.apply(e,[n,a,l,s]):void t.redirect.toUrl(a)},reload:function(n){var a=e.location.href;if(a){if(a=a.replace(/#.*$/,""),o(!0)&&top.Wade.extNavAdapter.reload)return top.Wade.extNavAdapter.reload(a,n);if(r())return top.Wade.nav.adapter.reload(a,n);if(i())return t.nav.adapter.reload(a,n)}},getData:function(){return o(!0)&&top.Wade.extNavAdapter.getData?top.Wade.extNavAdapter.getData():r()?top.Wade.nav.adapter.getData():i()?t.nav.adapter.getData():void 0},getDataByTitle:function(e){return e&&t.isString(e)||t.error("title"+t.lang.get("ui.nav.notnull")),o(!0)&&top.Wade.extNavAdapter.getDataByTitle?top.Wade.extNavAdapter.getDataByTitle(e):r()?top.Wade.nav.adapter.getDataByTitle(e):i()?t.nav.adapter.getDataByTitle(e):void 0},getTitle:function(){return o(!0)&&top.Wade.extNavAdapter.getTitle?top.Wade.extNavAdapter.getTitle():r()?top.Wade.nav.adapter.getTitle():i()?t.nav.adapter.getTitle():void 0},getContentWindow:function(){return o(!0)&&top.Wade.extNavAdapter.getContentWindow?top.Wade.extNavAdapter.getContentWindow():r()?top.Wade.nav.adapter.getContentWindow():i()?t.nav.adapter.getContentWindow():void 0},getContentWindowByTitle:function(e){return e&&t.isString(e)||t.error("title"+t.lang.get("ui.nav.notnull")),o(!0)&&top.Wade.extNavAdapter.getContentWindowByTitle?top.Wade.extNavAdapter.getContentWindowByTitle(e):r()?top.Wade.nav.adapter.getContentWindowByTitle(e):i()?t.nav.adapter.getContentWindowByTitle(e):void 0},switchByTitle:function(e){return e&&t.isString(e)||t.error("title"+t.lang.get("ui.nav.notnull")),o(!0)&&top.Wade.extNavAdapter.switchByTitle?top.Wade.extNavAdapter.switchByTitle(e):r()?top.Wade.nav.adapter.switchByTitle(e):!!i()&&t.nav.adapter.switchByTitle(e)},close:function(){return o(!0)&&top.Wade.extNavAdapter.close?top.Wade.extNavAdapter.close():r()?top.Wade.nav.adapter.close():i()?t.nav.adapter.close():(e.close(),!1)},closeByTitle:function(n){return n&&t.isString(n)||t.error("title"+t.lang.get("ui.nav.notnull")),o(!0)&&top.Wade.extNavAdapter.closeByTitle?top.Wade.extNavAdapter.closeByTitle(n):r()?top.Wade.nav.adapter.closeByTitle(n):i()?t.nav.adapter.closeByTitle(n):(e.close(),!1)},createAdapter:function(e){e&&t.isPlainObject(e)||t.error(t.lang.get("ui.nav.navobj")),t.each("init,open,openByUrl,redirect,redirectByUrl,reload,getData,getDataByTitle,getTitle,getContentWindow,getContentWindowByTitle,switchByTitle,close,closeByTitle".split(","),function(n,a){e[a]&&t.isFunction(e[a])||t.error(t.lang.get("ui.nav.navimp",'"'+(t.nav.methods[a]?t.nav.methods[a]:a)+'"'))}),t.nav.adapter=e}},t(function(){t.nav.init(e,n)}),e.openNav=t.nav.open,e.openNavByUrl=t.nav.openByUrl,e.redirectNav=t.nav.redirect,e.redirectNavByUrl=t.nav.redirectByUrl,e.reloadNav=t.nav.reload,e.closeNav=t.nav.close,e.closeNavByTitle=t.nav.closeByTitle,e.getNavTitle=t.nav.getTitle,e.getNavContent=t.nav.getContentWindow,e.getNavContentByTitle=t.nav.getContentWindowByTitle,e.switchToNav=t.nav.switchByTitle,e.getNavData=t.nav.getData,e.getNavDataByTitle=t.nav.getDataByTitle}}(window.Wade,window,document),/*!
 * resource util for webframe
 * http://www.wadecn.com/
 * auth:xiedx@asiainfo.com
 * Copyright 2011, WADE
 */
function(t,e,n){"use strict";t&&"undefined"==typeof t.resource&&(t.resource={combinePath:function(n,a,i){if(n&&t.isString(n)){var r=e.releaseNumber||t.ctx.attr("v"),o=e.wadeWebResourcePath&&t.isString(e.wadeWebResourcePath);return i||(a&&o?e.wadeWebResourcePath&&(n=t.combinePath(e.wadeWebResourcePath,n)):e.webResourcePath&&(n=t.combinePath(e.webResourcePath,n))),n+=a&&o?(n.indexOf("?")>-1?"&":"?")+"v="+e.wadeWebResourceVersion:(n.indexOf("?")>-1?"&":"?")+"v="+r}}},e.includeScript=function(e,n,a,i){e=t.resource.combinePath(e,a,i),t.includeScript(e,n)},t.extend({vendorIncludeScript:function(n,a,i,r){n&&(n=(""+n).replace(/(.*)\/([0-9a-zA-Z_-]+).js/g,"$1/$2"+t.feat.osSuffix+".js"),t.isFunction(e.includeScript)?e.includeScript(n,a,i,r):t.includeScript(n,a))}}),e.vendorIncludeScript=t.vendorIncludeScript,n.write('<script src="handler?clazz=com.ailk.web.BaseHttpHandlerJSVariable&method=init&v='+t.ctx.attr("v")+'"></script>\r\n'))}(window.Wade,window,document);