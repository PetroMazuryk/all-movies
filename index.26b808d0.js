var e,t,n={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(t){if(e===setTimeout)return setTimeout(t,0);if((e===r||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:r}catch(t){e=r}try{t="function"==typeof clearTimeout?clearTimeout:o}catch(e){t=o}}();var c,u=[],a=!1,s=-1;function l(){a&&c&&(a=!1,c.length?u=c.concat(u):s=-1,u.length&&f())}function f(){if(!a){var e=i(l);a=!0;for(var n=u.length;n;){for(c=u,u=[];++s<n;)c&&c[s].run();s=-1,n=u.length}c=null,a=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===o||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||a||i(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=m,n.addListener=m,n.once=m,n.off=m,n.removeListener=m,n.removeAllListeners=m,n.emit=m,n.prependListener=m,n.prependOnceListener=m,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};async function d(){try{const e=fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=ba520957137ad46ba4502dabb5237445");return(await e).json()}catch(e){return console.log("error :>> ",e)}}document.querySelector(".gallery"),document.querySelector(".search-form");let p;!async function(){p=await d()}();
//# sourceMappingURL=index.26b808d0.js.map
