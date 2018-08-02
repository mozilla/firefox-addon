!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";n.d(t,"i",function(){return i}),n.d(t,"f",function(){return o}),n.d(t,"d",function(){return s}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return l}),n.d(t,"h",function(){return u}),n.d(t,"l",function(){return c}),n.d(t,"j",function(){return h}),n.d(t,"a",function(){return f}),n.d(t,"k",function(){return d}),n.d(t,"g",function(){return p}),n.d(t,"e",function(){return g});const r=!1;function i(e){r&&console.log(e)}function o(e){r&&console.error(e)}const s="https://laserlike.com",a=".laserlike.com",l={apiServer:"api_server_url",webServer:"web_server_url",extensionOrigin:"extension_origin",userID:"user_id",token:"token",compactMode:"compact_mode",paused:"paused",userDisplayName:"user_display_name",accountDeleted:"account_deleted",newTabUrl:"new_tab_url"},u="FOR_YOU",c={myWindowId:null,paused:!1,userId:0,authToken:"",isLoggingIn:!1,compactMode:!0,accountDeleted:!1,newTabUrl:void 0,API_SERVER:"https://feed.laserlike.com",WEB_SERVER:"https://feed.laserlike.com",activeTabs:{},focusedWindowId:-1,isStandalone:!1,extensionOrigin:void 0,userDisplayName:"",userEmail:"",emailConfirmed:!1,sendingEmailDigest:!1,relatedCards:[],forYouCards:[],currentUrl:void 0,originalUrl:void 0,baseUrl:void 0,previewCards:void 0,isDeletingAccount:!1},h={get login(){return`${c.API_SERVER}/auth/api/v1/login`},get updateEmail(){return`${c.API_SERVER}/auth/api/v1/update-email`},get emailValidate(){return`${c.API_SERVER}/auth/api/v1/email/validate`},get sendVerification(){return`${c.API_SERVER}/auth/api/v1/email/sendverification?verification_method=2`},get deleteAccount(){return`${c.API_SERVER}/auth/api/v1/delete-account`},get preferences(){return`${c.API_SERVER}/auth/api/v1/user/preferences`},get managePreferences(){return`${c.API_SERVER}/auth/api/v1/user/manage-preferences`},get log(){return`${c.API_SERVER}/logging/api/v1/log`},get trendfeed(){return`${c.API_SERVER}/searchlike/api/v1/trendfeed`},get related(){return`${c.API_SERVER}/searchlike/api/v1/related`},get profile(){return`${c.API_SERVER}/searchlike/api/v1/profile`},get getProfile(){return`${c.API_SERVER}/searchlike/api/v1/get_profile`},get defaultTab(){return`${c.WEB_SERVER}/`},get downloadData(){return`${c.API_SERVER}/account/data/download/`}},f={product_enum:"TrendsAndFriends",os_type:"extension"};function d(e){if(!e)return"";return(e=e.split("#")[0]).startsWith("about:reader?url=")?e=decodeURIComponent(e.slice("about:reader?url=".length)):(e.startsWith("about:")||e.startsWith("chrome:")||e.startsWith("chrome-extension:")||""===e)&&(e=u),e}const p={email:"Email Feedback",notInteresting:"Not Interesting",offTopic:"Off-Topic / Spam",block:"Block"};class g{constructor(e){const{card_id:t,position:n,url:r,orig_url:i,title:o,host:s,display_host:a,description:l,card_age_time_sec:u,article:c,feed_type:h,logging_tags:f}=e;this.card_id=t,this.position=n,this.url=r,this.orig_url=i,this.title=o,this.host=a||s,this.description=l,this.card_age_time_sec=u,this.image_url=c?c.image_url:void 0,this.feed_type=h,this.logging_tags=f,this.sentFeedback=void 0}get elementId(){return`card-${this.card_id}`}get unoElementId(){return`undo-${this.card_id}`}get emailBody(){return`{\n      userId: ${c.userId},\n      display_name: ${c.userDisplayName}\n      email: ${c.userEmail}\n      card:\n      { card_id: ${this.card_id},\n        position: ${this.position},\n        url: "${this.url}",\n        orig_url: "${this.orig_url}",\n        host: ${this.host},\n        card_age_time_sec: ${this.card_age_time_sec},\n        image_url: "${this.image_url}",\n      },\n    }`}get length(){return JSON.stringify(this).length}}},function(e,t,n){"use strict";e.exports=b;var r,i=n(10),o=n(8),s=n(5),a=(r="function"==typeof Symbol?function(e){return Symbol(e)}:function(e){return"_"+e})("max"),l=r("length"),u=r("lengthCalculator"),c=r("allowStale"),h=r("maxAge"),f=r("dispose"),d=r("noDisposeOnSet"),p=r("lruList"),g=r("cache");function v(){return 1}function b(e){if(!(this instanceof b))return new b(e);"number"==typeof e&&(e={max:e}),e||(e={});var t=this[a]=e.max;(!t||"number"!=typeof t||t<=0)&&(this[a]=1/0);var n=e.length||v;"function"!=typeof n&&(n=v),this[u]=n,this[c]=e.stale||!1,this[h]=e.maxAge||0,this[f]=e.dispose,this[d]=e.noDisposeOnSet||!1,this.reset()}function m(e,t,n,r){var i=n.value;w(e,i)&&(_(e,n),e[c]||(i=void 0)),i&&t.call(r,i.value,i.key,e)}function y(e,t,n){var r=e[g].get(t);if(r){var i=r.value;w(e,i)?(_(e,r),e[c]||(i=void 0)):n&&e[p].unshiftNode(r),i&&(i=i.value)}return i}function w(e,t){if(!t||!t.maxAge&&!e[h])return!1;var n=Date.now()-t.now;return t.maxAge?n>t.maxAge:e[h]&&n>e[h]}function E(e){if(e[l]>e[a])for(var t=e[p].tail;e[l]>e[a]&&null!==t;){var n=t.prev;_(e,t),t=n}}function _(e,t){if(t){var n=t.value;e[f]&&e[f](n.key,n.value),e[l]-=n.length,e[g].delete(n.key),e[p].removeNode(t)}}Object.defineProperty(b.prototype,"max",{set:function(e){(!e||"number"!=typeof e||e<=0)&&(e=1/0),this[a]=e,E(this)},get:function(){return this[a]},enumerable:!0}),Object.defineProperty(b.prototype,"allowStale",{set:function(e){this[c]=!!e},get:function(){return this[c]},enumerable:!0}),Object.defineProperty(b.prototype,"maxAge",{set:function(e){(!e||"number"!=typeof e||e<0)&&(e=0),this[h]=e,E(this)},get:function(){return this[h]},enumerable:!0}),Object.defineProperty(b.prototype,"lengthCalculator",{set:function(e){"function"!=typeof e&&(e=v),e!==this[u]&&(this[u]=e,this[l]=0,this[p].forEach(function(e){e.length=this[u](e.value,e.key),this[l]+=e.length},this)),E(this)},get:function(){return this[u]},enumerable:!0}),Object.defineProperty(b.prototype,"length",{get:function(){return this[l]},enumerable:!0}),Object.defineProperty(b.prototype,"itemCount",{get:function(){return this[p].length},enumerable:!0}),b.prototype.rforEach=function(e,t){t=t||this;for(var n=this[p].tail;null!==n;){var r=n.prev;m(this,e,n,t),n=r}},b.prototype.forEach=function(e,t){t=t||this;for(var n=this[p].head;null!==n;){var r=n.next;m(this,e,n,t),n=r}},b.prototype.keys=function(){return this[p].toArray().map(function(e){return e.key},this)},b.prototype.values=function(){return this[p].toArray().map(function(e){return e.value},this)},b.prototype.reset=function(){this[f]&&this[p]&&this[p].length&&this[p].forEach(function(e){this[f](e.key,e.value)},this),this[g]=new i,this[p]=new s,this[l]=0},b.prototype.dump=function(){return this[p].map(function(e){if(!w(this,e))return{k:e.key,v:e.value,e:e.now+(e.maxAge||0)}},this).toArray().filter(function(e){return e})},b.prototype.dumpLru=function(){return this[p]},b.prototype.inspect=function(e,t){var n="LRUCache {",r=!1;this[c]&&(n+="\n  allowStale: true",r=!0);var i=this[a];i&&i!==1/0&&(r&&(n+=","),n+="\n  max: "+o.inspect(i,t),r=!0);var s=this[h];s&&(r&&(n+=","),n+="\n  maxAge: "+o.inspect(s,t),r=!0);var f=this[u];f&&f!==v&&(r&&(n+=","),n+="\n  length: "+o.inspect(this[l],t),r=!0);var d=!1;return this[p].forEach(function(e){d?n+=",\n  ":(r&&(n+=",\n"),d=!0,n+="\n  ");var i=o.inspect(e.key).split("\n").join("\n  "),a={value:e.value};e.maxAge!==s&&(a.maxAge=e.maxAge),f!==v&&(a.length=e.length),w(this,e)&&(a.stale=!0),a=o.inspect(a,t).split("\n").join("\n  "),n+=i+" => "+a}),(d||r)&&(n+="\n"),n+="}"},b.prototype.set=function(e,t,n){var r=(n=n||this[h])?Date.now():0,i=this[u](t,e);if(this[g].has(e)){if(i>this[a])return _(this,this[g].get(e)),!1;var o=this[g].get(e).value;return this[f]&&(this[d]||this[f](e,o.value)),o.now=r,o.maxAge=n,o.value=t,this[l]+=i-o.length,o.length=i,this.get(e),E(this),!0}var s=new function(e,t,n,r,i){this.key=e,this.value=t,this.length=n,this.now=r,this.maxAge=i||0}(e,t,i,r,n);return s.length>this[a]?(this[f]&&this[f](e,t),!1):(this[l]+=s.length,this[p].unshift(s),this[g].set(e,this[p].head),E(this),!0)},b.prototype.has=function(e){return!!this[g].has(e)&&!w(this,this[g].get(e).value)},b.prototype.get=function(e){return y(this,e,!0)},b.prototype.peek=function(e){return y(this,e,!1)},b.prototype.pop=function(){var e=this[p].tail;return e?(_(this,e),e.value):null},b.prototype.del=function(e){_(this,this[g].get(e))},b.prototype.load=function(e){this.reset();for(var t=Date.now(),n=e.length-1;n>=0;n--){var r=e[n],i=r.e||0;if(0===i)this.set(r.k,r.v);else{var o=i-t;o>0&&this.set(r.k,r.v,o)}}},b.prototype.prune=function(){var e=this;this[g].forEach(function(t,n){y(e,n,!1)})}},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var l,u=[],c=!1,h=-1;function f(){c&&l&&(c=!1,l.length?u=l.concat(u):h=-1,u.length&&d())}function d(){if(!c){var e=a(f);c=!0;for(var t=u.length;t;){for(l=u,u=[];++h<t;)l&&l[h].run();h=-1,t=u.length}l=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||c||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},,function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),o=n.n(i);const s=3e5,a=36e5,l=3600,u=1e7;class c{constructor(e,t){this.url=e,this.count=t.count,this.fetchTime=Date.now(),this.ttl=t.ttl||0,this.cards=(t.cards||[]).map(e=>new r.e(e))}expired(){if(this.url===r.h){const e=Math.max(s,this.ttl);return Date.now()-this.fetchTime>e}return Date.now()-this.fetchTime>a}length(){return this.cards&&this.url?this.url.length+this.cards.reduce(function(e,t){return e+t.length},0):0}removeCardsWithFeedback(){return Object(r.i)(`removeCardsWithFeedback: feed ${this.url} has ${this.cards.length} cards`),this.cards=this.cards.filter(e=>!e.sentFeedback),Object(r.i)(`feed ${this.url} has ${this.cards.length} cards`),this}}var h,f=new class{constructor(){this.cache=o()({max:u,length:(e,t)=>e.length()+t.length}),this.fetchPromises=o()({max:100,maxAge:6e4})}clear(){this.cache.reset(),this.fetchPromises.reset()}get(e){if(r.l.paused)return new c(e,{});let t=this.cache.get(e);const n=!t||t&&t.expired();Object(r.i)(`$FEED: get ${e}, fetching: ${n}`);let i=this.fetchPromises.get(e);return!i&&n&&(i=this.fetchFeed(e),this.fetchPromises.set(e,i)),t&&!n?t:i}set(e,t){Object(r.i)(`FEED$ saving feed ${e}`);let n=new c(e,t);return this.cache.get(r.h),this.cache.set(e,n),n}fetchFeed(e,t=1){if(r.l.paused)return Promise.resolve(new c(e,{}));Object(r.i)(`FEED$ fetching ${e}`);let n,i=new Headers({Accept:"application/json",Authorization:`Token ${r.l.authToken}`});if(e===r.h){let e={method:"POST",body:JSON.stringify({client_info:r.a,tf_trend:{key:{type:2}},last_card_pos:"0"}),headers:i,credentials:"include"};n=new Request(r.j.trendfeed,e),t=0}else{"1"===navigator.doNotTrack&&(i=new Headers({Accept:"application/json"}));let t={method:"POST",body:JSON.stringify({client_info:r.a,search_like:{vibe:[{target:{target:`u:${e}`}}]}}),headers:i,credentials:"include"};n=new Request(r.j.related,t)}return fetch(n).then(n=>n.json().then(n=>{let i={cards:n.cards||[],ttl:1e3*(n.ttl||0)};return i.cards=i.cards.filter(e=>!!e.article),e!==r.h?(i.count=(n.search_like||{}).num_results_to_show_first||i.cards.length,i.count=Math.min(i.count,4)):i.count=i.cards.length,Object(r.i)(`FEED$ got ${i.cards.length} new ${e} cards`),t&&i.ttl&&i.ttl<l&&(Object(r.i)(`retry in ${i.ttl} seconds`),setTimeout(()=>this.fetchFeed(e,t-1),i.ttl)),this.set(e,i)}))}blockCardsFromHostExcept(e,t){this.cache.values().forEach(n=>{n.cards.forEach(n=>{n.host===e&&n.card_id!==t.card_id&&(Object(r.i)(`block ${t.title}`),n.sentFeedback=r.g.block)})})}},d=new Map;function p(e){return["about:newtab","about:home"].indexOf(e)>=0}function g(e,t,n=!1){const i=Object(r.k)(t),o=r.l.activeTabs[e];if(o)if(o.url!==i||n)if(r.l.activeTabs[e]={tabId:o.tabId,url:i},browser.runtime.sendMessage({method:"newUrl",windowId:e,url:t,normalizedUrl:i}),r.l.paused||r.l.accountDeleted)Object(r.i)(`BG$ extension disabled ${r.l.paused} ${r.l.accountDeleted}`);else if(i!==r.h){Object(r.i)(`fetch related feed in window ${e} to: ${t} ${i}`);let n=f.get(i);if(Promise.resolve(n)!=n){Object(r.i)("use existing count"),v(n.count,i)}else{Object(r.i)("got a new count"),v(0,i),n.then(t=>{t.url===r.l.activeTabs[e].url&&v(t.count,i)})}}else Object(r.i)("ignoring for you feed in the background"),v(0);else Object(r.i)(`BG$ same url: ${i}`);else Object(r.f)("Internal error, should never happend!")}function v(e,t){if(!e)return void browser.browserAction.setBadgeText({text:""});let n="green",i=e.toString();if(t==r.h){let e=Date.now()/1e3;h&&e-h<28800&&(i=""),n="red"}browser.browserAction.setBadgeText({text:i}),browser.browserAction.setBadgeBackgroundColor({color:n})}function b(e,t,n=2147483647){Object(r.i)(`setcookie: ${e}, ${t}`);let i={url:r.d,name:e,value:t};r.b&&(i.domain=r.b),0!=n&&(i.expirationDate=n),browser.cookies.set(i)}function m(e){const t=e.cookie;Object(r.i)(`cookie changed: ${JSON.stringify(e)}`),!t||t.domain!==r.b&&"localhost"!==t.domain||(t.name===r.c.apiServer?r.l.API_SERVER=t.value:t.name===r.c.webServer?r.l.WEB_SERVER=t.value:t.name===r.c.newTabUrl?(e.removed?(Object(r.i)("unset laserlike from home page"),r.l.newTabUrl=void 0):(r.l.newTabUrl=t.value,Object(r.i)(`set home to: ${r.l.newTabUrl}`)),browser.runtime.sendMessage({method:"homePageChanged"})):t.name===r.c.accountDeleted?e.removed?(r.l.accountDeleted=!1,browser.runtime.sendMessage({method:"loggedOut"})):(r.l.accountDeleted=!0,browser.runtime.sendMessage({method:"loggedIn"})):t.name===r.c.paused&&(e.removed?r.l.paused=!0:r.l.paused="true"===t.value,browser.runtime.sendMessage({method:"pauseStateChanged"})))}function y(e){d.set(e,Date.now()),setTimeout(()=>{let t=d.get(e);t&&Date.now()-t>1e3&&(Object(r.i)(`sidebar in ${e} is closed`),d.delete(e))},1100)}browser.tabs.onActivated.addListener(function(e){Object(r.i)(`BG$ activated a new tab: (${e.windowId}, ${e.tabId})`),w(e.tabId).then(t=>{Object(r.i)(t);const n=r.l.activeTabs[e.windowId];n||(r.l.activeTabs[e.windowId]={tabId:e.tabId,url:""}),g(e.windowId,t.url)})}),browser.tabs.onUpdated.addListener(function(e,t){if(!t.url)return;if(Object(r.i)(`BG$ update tab ${e}: ${t.url}`),p(t.url)&&r.l.newTabUrl){if(r.l.paused||r.l.accountDeleted)return;const t={loadReplace:!0,url:r.l.newTabUrl};var n=browser.tabs.update(e,t);n.then(Object(r.i)("update to laserlike done"))}else w(e).then(e=>{g(e.windowId,t.url)})}),browser.tabs.onCreated.addListener(function(e){if(Object(r.i)(`BG$ created new tab: ${e.url}`),r.l.paused||r.l.accountDeleted)return;if(r.l.newTabUrl&&p(e.url)){const n={loadReplace:!0,url:r.l.newTabUrl};var t=browser.tabs.update(e.id,n);t.then(Object(r.i)("set default to laserlike done"))}}),browser.runtime.onMessage.addListener(function(e){if(Object(r.i)(`BG$: got message: ${e}`),"iframeActive"==e.method)Object(r.i)(`iframe active windowId: ${e.windowId} ${e.uiElement} ${e.url}`),"/toolbar"==e.uiElement&&Object(r.k)(e.url)==r.h&&(h=Date.now()/1e3),r.l.accountDeleted?browser.runtime.sendMessage({method:"loggedOut"}):g(e.windowId,e.url,!0),y(e.windowId);else if("iframeAlive"==e.method)y(e.windowId);else if("read"==e.method){const t=e.card.orig_url||e.card.url;browser.tabs.create({url:t})}return Promise.resolve("Dummy response to keep the console quiet")}),window.onload=function(){(function(){return browser.storage.local.get("installed").then(function(e){if(browser.storage.local.set({installed:new Date}),e.installed)return Object(r.i)(`extension installed on: ${e.installed}`);{Object(r.i)("fresh install..."),browser.storage.local.set({installed:new Date});let e=browser.cookies.getAll({url:r.d});return e.then(e=>{function t(e){Object(r.i)(`Removed: ${e.name}`)}function n(e){Object(r.f)(`Error removing cookie: ${e}`)}Object(r.i)(`got ${e.length} old cookies`);var i=[];const o=Object.keys(r.c).map(e=>r.c[e]);if(e.length>0)for(let s of e)if(Object(r.i)(`got cookie: ${JSON.stringify(s)}`),o.indexOf(s.name)>=0){Object(r.i)(`remove cookie: ${JSON.stringify(s)}`);let e=browser.cookies.remove({name:s.name,url:r.d});e.then(t,n),i.push(e)}return Object(r.i)(`removing ${i.length} old cookies`),Promise.all(i)})}},function(e){return Object(r.i)(`failed to get install: ${e}`),browser.storage.local.set({installed:new Date})})})().then(()=>{browser.tabs.query({}).then(e=>{!e||e.length<1?Object(r.i)("Error initializing: no tabs at all!"):e.forEach(function(e){Object(r.i)(`found tab: ${e.windowId} ${e.id}`),r.l.activeTabs[e.windowId]={tabId:e.id,url:""}})}),browser.cookies.getAll({url:r.d}).then(e=>{if(e.length>0){Object(r.i)(`got ${e.length} cookies`);for(let t of e)Object(r.i)(JSON.stringify(t)),t.name===r.c.apiServer?r.l.API_SERVER=t.value:t.name===r.c.webServer?r.l.WEB_SERVER=t.value:t.name===r.c.paused?r.l.paused="true"===t.value:t.name===r.c.accountDeleted?r.l.accountDeleted="true"===t.value:t.name===r.c.newTabUrl&&(r.l.newTabUrl=t.value);b(r.c.apiServer,r.l.API_SERVER,0),b(r.c.webServer,r.l.WEB_SERVER,0)}else Object(r.i)("no cookies found!"),b(r.c.apiServer,r.l.API_SERVER,0),b(r.c.webServer,r.l.WEB_SERVER,0);b(r.c.extensionOrigin,browser.extension.getURL("/").slice(0,-1),0)}),browser.cookies.onChanged.addListener(m)})},browser.browserAction.onClicked.addListener(({windowId:e})=>{Object(r.i)(`browser action onClick window id: ${e}`),d.has(e)?(browser.sidebarAction.close(),d.delete(e)):browser.sidebarAction.open()});function w(e){return browser.tabs.query({active:!0}).then(t=>{for(var n=0;n<t.length;n++)if(t[n].id===e)return t[n]})}browser.menus.create({id:"searchLaserlikeId",title:"Search Laserlike for related",contexts:["selection","link"]}),browser.menus.onClicked.addListener(e=>{let t;if("searchLaserlikeId"===e.menuItemId){t=e.linkUrl?`url=${encodeURIComponent(e.linkUrl)}`:`q=${encodeURIComponent(e.selectionText)}`,browser.tabs.create({url:`${r.l.WEB_SERVER}/search?${t}`}).then(function(e){Object(r.i)(`Created new tab: ${e.id}`)},function(e){Object(r.i)(`Error: ${e}`)})}}),browser.menus.onShown.addListener(()=>{browser.menus.update("searchLaserlikeId",{title:"Search Laserlike for related"}),browser.menus.refresh()})},function(e,t){function n(e){var t=this;if(t instanceof n||(t=new n),t.tail=null,t.head=null,t.length=0,e&&"function"==typeof e.forEach)e.forEach(function(e){t.push(e)});else if(arguments.length>0)for(var r=0,i=arguments.length;r<i;r++)t.push(arguments[r]);return t}function r(e,t){e.tail=new o(t,e.tail,null,e),e.head||(e.head=e.tail),e.length++}function i(e,t){e.head=new o(t,null,e.head,e),e.tail||(e.tail=e.head),e.length++}function o(e,t,n,r){if(!(this instanceof o))return new o(e,t,n,r);this.list=r,this.value=e,t?(t.next=this,this.prev=t):this.prev=null,n?(n.prev=this,this.next=n):this.next=null}e.exports=n,n.Node=o,n.create=n,n.prototype.removeNode=function(e){if(e.list!==this)throw new Error("removing node which does not belong to this list");var t=e.next,n=e.prev;t&&(t.prev=n),n&&(n.next=t),e===this.head&&(this.head=t),e===this.tail&&(this.tail=n),e.list.length--,e.next=null,e.prev=null,e.list=null},n.prototype.unshiftNode=function(e){if(e!==this.head){e.list&&e.list.removeNode(e);var t=this.head;e.list=this,e.next=t,t&&(t.prev=e),this.head=e,this.tail||(this.tail=e),this.length++}},n.prototype.pushNode=function(e){if(e!==this.tail){e.list&&e.list.removeNode(e);var t=this.tail;e.list=this,e.prev=t,t&&(t.next=e),this.tail=e,this.head||(this.head=e),this.length++}},n.prototype.push=function(){for(var e=0,t=arguments.length;e<t;e++)r(this,arguments[e]);return this.length},n.prototype.unshift=function(){for(var e=0,t=arguments.length;e<t;e++)i(this,arguments[e]);return this.length},n.prototype.pop=function(){if(this.tail){var e=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}},n.prototype.shift=function(){if(this.head){var e=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}},n.prototype.forEach=function(e,t){t=t||this;for(var n=this.head,r=0;null!==n;r++)e.call(t,n.value,r,this),n=n.next},n.prototype.forEachReverse=function(e,t){t=t||this;for(var n=this.tail,r=this.length-1;null!==n;r--)e.call(t,n.value,r,this),n=n.prev},n.prototype.get=function(e){for(var t=0,n=this.head;null!==n&&t<e;t++)n=n.next;if(t===e&&null!==n)return n.value},n.prototype.getReverse=function(e){for(var t=0,n=this.tail;null!==n&&t<e;t++)n=n.prev;if(t===e&&null!==n)return n.value},n.prototype.map=function(e,t){t=t||this;for(var r=new n,i=this.head;null!==i;)r.push(e.call(t,i.value,this)),i=i.next;return r},n.prototype.mapReverse=function(e,t){t=t||this;for(var r=new n,i=this.tail;null!==i;)r.push(e.call(t,i.value,this)),i=i.prev;return r},n.prototype.reduce=function(e,t){var n,r=this.head;if(arguments.length>1)n=t;else{if(!this.head)throw new TypeError("Reduce of empty list with no initial value");r=this.head.next,n=this.head.value}for(var i=0;null!==r;i++)n=e(n,r.value,i),r=r.next;return n},n.prototype.reduceReverse=function(e,t){var n,r=this.tail;if(arguments.length>1)n=t;else{if(!this.tail)throw new TypeError("Reduce of empty list with no initial value");r=this.tail.prev,n=this.tail.value}for(var i=this.length-1;null!==r;i--)n=e(n,r.value,i),r=r.prev;return n},n.prototype.toArray=function(){for(var e=new Array(this.length),t=0,n=this.head;null!==n;t++)e[t]=n.value,n=n.next;return e},n.prototype.toArrayReverse=function(){for(var e=new Array(this.length),t=0,n=this.tail;null!==n;t++)e[t]=n.value,n=n.prev;return e},n.prototype.slice=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var r=new n;if(t<e||t<0)return r;e<0&&(e=0),t>this.length&&(t=this.length);for(var i=0,o=this.head;null!==o&&i<e;i++)o=o.next;for(;null!==o&&i<t;i++,o=o.next)r.push(o.value);return r},n.prototype.sliceReverse=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var r=new n;if(t<e||t<0)return r;e<0&&(e=0),t>this.length&&(t=this.length);for(var i=this.length,o=this.tail;null!==o&&i>t;i--)o=o.prev;for(;null!==o&&i>e;i--,o=o.prev)r.push(o.value);return r},n.prototype.reverse=function(){for(var e=this.head,t=this.tail,n=e;null!==n;n=n.prev){var r=n.prev;n.prev=n.next,n.next=r}return this.head=t,this.tail=e,this}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t,n){(function(e){var r=/%[sdj%]/g;t.format=function(e){if(!v(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(s(arguments[n]));return t.join(" ")}n=1;for(var i=arguments,o=i.length,a=String(e).replace(r,function(e){if("%%"===e)return"%";if(n>=o)return e;switch(e){case"%s":return String(i[n++]);case"%d":return Number(i[n++]);case"%j":try{return JSON.stringify(i[n++])}catch(e){return"[Circular]"}default:return e}}),l=i[n];n<o;l=i[++n])p(l)||!y(l)?a+=" "+l:a+=" "+s(l);return a},t.deprecate=function(n,r){if(b(global.process))return function(){return t.deprecate(n,r).apply(this,arguments)};if(!0===e.noDeprecation)return n;var i=!1;return function(){if(!i){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),i=!0}return n.apply(this,arguments)}};var i,o={};function s(e,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&t._extend(r,n),b(r.showHidden)&&(r.showHidden=!1),b(r.depth)&&(r.depth=2),b(r.colors)&&(r.colors=!1),b(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=a),u(r,e,r.depth)}function a(e,t){var n=s.styles[t];return n?"["+s.colors[n][0]+"m"+e+"["+s.colors[n][1]+"m":e}function l(e,t){return e}function u(e,n,r){if(e.customInspect&&n&&_(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,e);return v(i)||(i=u(e,i,r)),i}var o=function(e,t){if(b(t))return e.stylize("undefined","undefined");if(v(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(g(t))return e.stylize(""+t,"number");if(d(t))return e.stylize(""+t,"boolean");if(p(t))return e.stylize("null","null")}(e,n);if(o)return o;var s=Object.keys(n),a=function(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(n)),E(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return c(n);if(0===s.length){if(_(n)){var l=n.name?": "+n.name:"";return e.stylize("[Function"+l+"]","special")}if(m(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return e.stylize(Date.prototype.toString.call(n),"date");if(E(n))return c(n)}var y,O="",j=!1,x=["{","}"];(f(n)&&(j=!0,x=["[","]"]),_(n))&&(O=" [Function"+(n.name?": "+n.name:"")+"]");return m(n)&&(O=" "+RegExp.prototype.toString.call(n)),w(n)&&(O=" "+Date.prototype.toUTCString.call(n)),E(n)&&(O=" "+c(n)),0!==s.length||j&&0!=n.length?r<0?m(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),y=j?function(e,t,n,r,i){for(var o=[],s=0,a=t.length;s<a;++s)$(t,String(s))?o.push(h(e,t,n,r,String(s),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(h(e,t,n,r,i,!0))}),o}(e,n,r,a,s):s.map(function(t){return h(e,n,r,a,t,j)}),e.seen.pop(),function(e,t,n){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(y,O,x)):x[0]+O+x[1]}function c(e){return"["+Error.prototype.toString.call(e)+"]"}function h(e,t,n,r,i,o){var s,a,l;if((l=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?a=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(a=e.stylize("[Setter]","special")),$(r,i)||(s="["+i+"]"),a||(e.seen.indexOf(l.value)<0?(a=p(n)?u(e,l.value,null):u(e,l.value,n-1)).indexOf("\n")>-1&&(a=o?a.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+a.split("\n").map(function(e){return"   "+e}).join("\n")):a=e.stylize("[Circular]","special")),b(s)){if(o&&i.match(/^\d+$/))return a;(s=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+a}function f(e){return Array.isArray(e)}function d(e){return"boolean"==typeof e}function p(e){return null===e}function g(e){return"number"==typeof e}function v(e){return"string"==typeof e}function b(e){return void 0===e}function m(e){return y(e)&&"[object RegExp]"===O(e)}function y(e){return"object"==typeof e&&null!==e}function w(e){return y(e)&&"[object Date]"===O(e)}function E(e){return y(e)&&("[object Error]"===O(e)||e instanceof Error)}function _(e){return"function"==typeof e}function O(e){return Object.prototype.toString.call(e)}function j(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(b(i)&&(i=e.env.NODE_DEBUG||""),n=n.toUpperCase(),!o[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=e.pid;o[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e)}}else o[n]=function(){};return o[n]},t.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=f,t.isBoolean=d,t.isNull=p,t.isNullOrUndefined=function(e){return null==e},t.isNumber=g,t.isString=v,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=b,t.isRegExp=m,t.isObject=y,t.isDate=w,t.isError=E,t.isFunction=_,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(7);var x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function $(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){var e,n;console.log("%s - %s",(e=new Date,n=[j(e.getHours()),j(e.getMinutes()),j(e.getSeconds())].join(":"),[e.getDate(),x[e.getMonth()],n].join(" ")),t.format.apply(t,arguments))},t.inherits=n(6),t._extend=function(e,t){if(!t||!y(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(this,n(2))},function(e,t){var n=Object.prototype.hasOwnProperty;function r(e){if(!(this instanceof r))throw new TypeError("Constructor PseudoMap requires 'new'");if(this.clear(),e)if(e instanceof r||"function"==typeof Map&&e instanceof Map)e.forEach(function(e,t){this.set(t,e)},this);else{if(!Array.isArray(e))throw new TypeError("invalid argument");e.forEach(function(e){this.set(e[0],e[1])},this)}}function i(e,t){return e===t||e!=e&&t!=t}function o(e,t){for(var r=0,o="_"+t,s=o;n.call(e,s);s=o+r++)if(i(e[s].key,t))return e[s]}e.exports=r,r.prototype.forEach=function(e,t){t=t||this,Object.keys(this._data).forEach(function(n){"size"!==n&&e.call(t,this._data[n].value,this._data[n].key)},this)},r.prototype.has=function(e){return!!o(this._data,e)},r.prototype.get=function(e){var t=o(this._data,e);return t&&t.value},r.prototype.set=function(e,t){!function(e,t,r){for(var o=0,s="_"+t,a=s;n.call(e,a);a=s+o++)if(i(e[a].key,t))return void(e[a].value=r);e.size++,e[a]=new function(e,t,n){this.key=e,this.value=t,this._index=n}(t,r,a)}(this._data,e,t)},r.prototype.delete=function(e){var t=o(this._data,e);t&&(delete this._data[t._index],this._data.size--)},r.prototype.clear=function(){var e=Object.create(null);e.size=0,Object.defineProperty(this,"_data",{value:e,enumerable:!1,configurable:!0,writable:!1})},Object.defineProperty(r.prototype,"size",{get:function(){return this._data.size},set:function(e){},enumerable:!0,configurable:!0}),r.prototype.values=r.prototype.keys=r.prototype.entries=function(){throw new Error("iterators are not implemented in this version")}},function(e,t,n){(function(t){"pseudomap"===t.env.npm_package_name&&"test"===t.env.npm_lifecycle_script&&(t.env.TEST_PSEUDOMAP="true"),"function"!=typeof Map||t.env.TEST_PSEUDOMAP?e.exports=n(9):e.exports=Map}).call(this,n(2))}]);