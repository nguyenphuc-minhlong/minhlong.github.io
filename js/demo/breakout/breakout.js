var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,b){var c=$jscomp.propertyToPolyfillSymbol[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]};$jscomp.polyfill=function(a,b,c,d){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,c,d):$jscomp.polyfillUnisolated(a,b,c,d))};$jscomp.polyfillUnisolated=function(a,b,c,d){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))return;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})};$jscomp.polyfillIsolated=function(a,b,c,d){var e=a.split(".");a=1===e.length;d=e[0];d=!a&&d in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var f=0;f<e.length-1;f++){var g=e[f];if(!(g in d))return;d=d[g]}e=e[e.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?d[e]:null;b=b(c);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,e,{configurable:!0,writable:!0,value:b}):b!==c&&(void 0===$jscomp.propertyToPolyfillSymbol[e]&&(c=1E9*Math.random()>>>0,$jscomp.propertyToPolyfillSymbol[e]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(e):$jscomp.POLYFILL_PREFIX+c+"$"+e),$jscomp.defineProperty(d,$jscomp.propertyToPolyfillSymbol[e],{configurable:!0,writable:!0,value:b})))};$jscomp.initSymbol=function(){};$jscomp.polyfill("Symbol",function(a){if(a)return a;var b=function(f,g){this.$jscomp$symbol$id_=f;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:g})};b.prototype.toString=function(){return this.$jscomp$symbol$id_};var c="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",d=0,e=function(f){if(this instanceof e)throw new TypeError("Symbol is not a constructor");return new b(c+(f||"")+"_"+d++,f)};return e},"es6","es3");$jscomp.polyfill("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=$jscomp.global[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&$jscomp.defineProperty(d.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}})}return a},"es6","es3");$jscomp.iteratorPrototype=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a};$jscomp.iteratorFromArray=function(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e};$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(b){return b})}},"es6","es3");var ball,game_info,game_loop,game_playing=!1,block_list=[],MAX_LEVEL=Object.keys(LEVEL).length;window.onunload=function(){ball&&!ball.closed&&ball.close();game_info&&!game_info.closed&&game_info.close();block_list.forEach(function(a){a&&!a.closed&&a.close()})};function getRandomInt(a,b){a=Math.ceil(a);b=Math.floor(b);return Math.floor(Math.random()*(b-a+1))+a}
function gameInfo(a){a=void 0===a?"":a;game_info=window.open("about:blank","_blank","toolbar=no,scrollbars=no,location=no,menubar=no,statusbar=no,resizable=no,top="+gameBoardTop+",left="+gameBoardLeft+",width="+gameBoardWidth+",height="+gameBoardHeight);var b=""===a?"Serve Game":"win"===a?current_level>MAX_LEVEL?"Play Again":"Next Level":"Play Again";current_level>MAX_LEVEL&&--current_level;game_info.document.write('<html><head><title>Breakout Game | Minh Long</title><style>.game-control{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;}.game-control>div{width:100%;display:flex;justify-content:center;}.game-info{position:absolute;top:10px;left:0;justify-content:space-between !important;}.h-score{padding-right:15px}.score{padding-left:15px;}.lvl{position:absolute;top:45px;font-size:26pt;left:50%;transform:translateX(-50%);}.game-status{margin-top:50px;margin-bottom:50px;font-size:45px;}.game-status.win{margin-bottom:30px;color:green;}.game-status.lose{margin-bottom:30px;color:red;}</style><script>function serve(){window.close();window.opener.gameServe();}\x3c/script><body><div class="game-control"><div class="game-info"><div class="score">Score: '+
score+'</div><div class="lvl">Level: '+current_level+'</div><div class="h-score">Highest Score: '+high_score+'</div></div><div class="game-status '+a+'">'+(""===a?"":"win"===a?"You won":"You lost")+'</div><div class="game-play"><div style="width:55%;"><button style="width:100%;height:30px;font-size:20px;" onclick="serve()">'+b+"</button></div></div></div></body></html>")}gameInfo();function removeItemOnce(a,b){b=a.indexOf(b);-1<b&&a.splice(b,1);return a}
function gameServe(){serve=!0;document.querySelector(".game-bar").classList.remove("hidden");window.moveTo(gameBoardLeft,screenHeight-100);window.focus();var a=LEVEL[current_level].cols,b=screenHeight/2/LEVEL[current_level].rows,c=screenWidth/a,d=0,e=0,f=1,g=9<current_level?'<div style="height:100vh;width:100%;object-fit-cover;" id="image"></div><script>function ajax_get(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){console.log("responseText:"+n.responseText);try{var e=JSON.parse(n.responseText)}catch(e){return void console.log(e.message+" in "+n.responseText)}t(e)}},n.open("GET",e,!0),n.send()}ajax_get("https://api.thecatapi.com/v1/images/search?size=full",function(e){e=\'<img style="height:100%;width:100%;" src="\'+e[0].url+\'">\';document.getElementById("image").innerHTML=e});\x3c/script>':'<script>var randomColor="#"+((1<<24)*Math.random()|0).toString(16);document.querySelector("body").style.background=randomColor;\x3c/script>';LEVEL[current_level].map.forEach(function(h){"*"===h&&(h=window.open("about:blank","_blank","toolbar=no,scrollbars=no,location=no,menubar=no,statusbar=no,resizable=no,top="+e+",left="+d+",width="+c+",height="+b),h.document.write("<html><head><title>Brick</title><body>"+g+"</body></html>"),block_list.push(h));d+=c;f+=1;f>a&&(f=1,d=0,e+=b)});ball=window.open("about:blank","_blank","toolbar=no,scrollbars=no,location=no,menubar=no,statusbar=no,resizable=no,top="+(gameBarTop-ballSize-50)+",left="+(screenWidth/2-ballSize/2)+",width="+ballSize+",height="+ballSize);ball.document.write("<html><head><title>Ball</title><style>.ball{width:100%;position:absolute;"+(isChrome?"top:0;left:40%;transform:translate(-50%,-25%);":"left:-50%;top:-50%;")+'width:100%;}</style><body style="overflow:hidden;"><div class="ball"><svg width="200" height="200" style="transform:scale(0.5);" xmlns="http://www.w3.org/2000/svg"><g><path stroke-width="1.1" d="m193,98c0,-1 0,-2 0,-2c0,-1 -0.48625,-1.82375 -1,-4c-0.22975,-0.97325 -0.48625,-2.82375 -1,-5c-0.68925,-2.91975 0.36655,-7.02248 0,-10c-0.50377,-4.09222 -3.87766,-10.066 -5,-12c-1.80972,-3.11848 -3.1731,-6.85273 -4,-8c-1.30745,-1.81399 -3.19028,-5.88152 -5,-9c-1.12234,-1.934 -2,-4 -5,-7c-2,-2 -2.70546,-4.34619 -5,-6c-1.814,-1.30745 -1.54915,-2.95517 -5,-4c-0.95709,-0.28978 -5.21167,-2.71412 -8,-5c-2.18735,-1.79319 -4.07843,-2.78985 -7,-4c-2.06586,-0.85571 -4.88152,-2.19028 -8,-4c-1.93399,-1.12234 -3.64749,-2.97251 -8,-4c-1.9465,-0.45951 -5.97734,-2.09544 -10,-3c-4.97479,-1.11866 -7,-1 -10,-1c-5,0 -7.07844,-0.21015 -10,1c-2.06586,0.85571 -5.80565,1.44841 -10,3c-3.867,1.4305 -7.04132,0.84723 -11,2c-3.03616,0.88413 -4.54916,1.95517 -8,3c-1.91418,0.57957 -4.07278,-0.1181 -9,3c-3.04673,1.92807 -5.90633,6.1034 -7,7c-2.78833,2.28588 -5.95915,2.43547 -8,7c-2.08126,4.65493 -1.53237,6.19892 -3,9c-2.32053,4.4289 -4.84723,5.04132 -6,9c-0.88413,3.03617 -1.73145,3.07689 -3,7c-1.65685,5.12395 -3.23463,10.15224 -4,12c-1.08239,2.61313 -3.33749,7.31001 -5,10c-2.23049,3.60901 -5,10 -6,12c-2,4 -3.61065,9.15928 -5,12c-1.5841,3.23892 -1.75563,5.01498 -2,7c-0.50377,4.09222 -1,6 -1,8c0,2 -0.68926,5.08025 0,8c0.51374,2.17625 0.33749,2.31001 2,5c0.7435,1.203 1.1731,3.85274 2,5c2.6149,3.62799 4.20681,6.81265 6,9c2.28588,2.78833 4.90633,7.10341 6,8c2.78832,2.28587 7,5 11,9c2,2 7.62532,3.41362 12,7c2.78833,2.28587 7,4 11,6c2,1 6,3 11,5c5,2 7.0966,1.53374 13,3c3.06903,0.76227 8.9258,1.49756 14,2c2.9854,0.29561 11.04453,0.20139 16,-1c7.07516,-1.71527 9.74674,-2.37134 14,-5c1.90211,-1.17557 7,-3 11,-7c2,-2 6.40967,-3.52013 10,-7c4.59785,-4.45642 6.22733,-5.78491 10,-10c4.27039,-4.77115 6.11214,-6.9183 9,-11c4.16493,-5.8867 6.49741,-8.67137 9,-13c3.81183,-6.59317 5.19089,-10.95469 7,-19c2.23732,-9.94959 2.99245,-14.81557 4,-23c0.97746,-7.94006 -0.08075,-13.98453 -1,-19c-1.0966,-5.9831 -0.53374,-9.0966 -2,-15c-1.52455,-6.13806 -4.94464,-12.01902 -6,-15c-2.85141,-8.05416 -4.14388,-10.90654 -8,-17c-3.1181,-4.92722 -5.82285,-7.18537 -10,-11c-5.76726,-5.26675 -7.62062,-6.92553 -14,-9c-5.78461,-1.88106 -13,-3 -17,-3c-7,0 -9.95332,-0.49903 -18,-1c-9.98067,-0.62137 -18.00773,0.75145 -22,1c-8.04668,0.50097 -14.92232,1.27346 -18,2c-6.88191,1.6246 -12,3 -15,4c-6,2 -12.91143,6.09268 -15,8c-5.76727,5.26675 -10.07193,8.95327 -12,12c-3.1181,4.92722 -7.44298,10.63871 -9,13c-2.96449,4.49576 -4.11894,10.2154 -6,16c-0.69149,2.12646 -1.5839,7.029 -2,10c-1.00976,7.20974 -1.14472,12.05244 -2,19c-0.50377,4.09222 -1,11 -1,18c0,4 -1.90262,7.57824 2,17c1.37979,3.33109 7,11 13,20c2,3 7.98837,10.84694 14,17c3.49419,3.5764 10.94341,8.14774 16,10c2.96933,1.08769 8.94672,3.49873 16,4c4.98742,0.35445 14.97923,-1.09584 24,-3c4.98908,-1.05313 13.08265,-2.69446 21,-5c6.07233,-1.76826 15.80836,-6.23108 23,-12c7.80042,-6.25728 12.44547,-8.44798 20,-15c6.41023,-5.55957 10.59706,-8.54909 15,-15c1.7827,-2.61189 6.37315,-9.86983 9,-18c3.50546,-10.8495 3.50063,-13.9626 3,-24c-0.19925,-3.99503 0.4594,-13.2557 -2,-23c-3.18135,-12.60472 -5.53105,-16.24856 -11,-26c-4.6147,-8.22828 -10,-12 -18,-18c-4,-3 -12.95551,-7.32897 -23,-7c-12.159,0.39823 -20.06561,2.66906 -36,6c-13.05938,2.72994 -20.44647,5.19223 -30,11c-11.62236,7.06546 -16.23887,10.73909 -25,19c-7.20259,6.79136 -12.25766,13.76278 -15,17c-5.56033,6.56374 -7.17754,9.91447 -10,16c-3.20432,6.90886 -4.59308,9.85713 -6,17c-1.75,8.88468 -3.18323,16.96682 -4,22c-1.29143,7.95815 -0.50245,16.9258 0,22c0.68976,6.96593 1.1169,10.96765 3,18c2.133,7.96558 6.88708,15.11734 10,18c6.76458,6.26422 15.50274,11.59808 19,14c8.11853,5.57579 17.69913,8.4866 29,10c3.96461,0.53093 15,0 20,0c10,0 20.11499,-1.539 29,-4c6.09507,-1.68823 16.2126,-7.67122 21,-11c10.51434,-7.31087 21.08052,-17.90492 27,-23c9.12646,-7.85542 17.21005,-15.85075 20,-20c3.2536,-4.83881 5,-9 7,-17c1,-4 2.70909,-15.00605 3,-22c0.50043,-12.03119 0.54022,-22.84235 -2,-31c-1.22585,-3.93666 -2.97432,-13.5824 -9,-23c-3.45099,-5.39358 -10.96779,-17.16708 -21,-25c-4.59599,-3.58844 -13.84283,-7.35136 -18,-9c-9.70499,-3.84878 -19.9626,-5.49938 -30,-6c-4.99379,-0.24907 -15.10981,-1.84494 -26,0c-4.06518,0.68869 -16.09443,3.79726 -27,9c-10.09083,4.81405 -15,9 -23,15c-4,3 -12.73137,9.53148 -17,17c-4.88718,8.55076 -7.93103,11.67617 -11,22c-1.45295,4.88763 -3.49923,13.95847 -4,23c-0.6636,11.98164 -0.2679,15.04353 1,22c1.65314,9.07012 4.03492,13.98068 9,23c6.04259,10.97667 9.16408,18.65947 18,29c7.34972,8.60126 12.60709,12.87842 23,17c9.70499,3.84879 15.0113,3.49846 26,3c11.03401,-0.50052 17.25816,-1.11038 29,-5c12.34053,-4.08795 19.15663,-6.75974 30,-14c10.15155,-6.77834 19.52287,-15.407 23,-19c8.48874,-8.77162 10.66972,-14.79716 14,-27c3.76961,-13.81268 4.15472,-22.0477 3,-36c-1.00342,-12.12408 -4.81757,-21.53446 -8,-27c-6.76968,-11.62632 -13.37764,-15.93454 -25,-23c-11.46423,-6.96932 -26.80991,-10.26362 -36,-11c-16.97498,-1.36016 -35.09114,4.79568 -42,8c-18.2566,8.46739 -34.30509,16.57642 -40,21c-10.62489,8.25299 -17,19 -19,25c-3,9 -4.24935,21.00518 -4,27c0.50043,12.03119 1.82849,25.03738 3,30c2.61959,11.09674 6.34242,21.4252 13,31c3.65543,5.25717 12.80486,14.27957 17,17c8.63834,5.60172 21.93797,9.49829 28,10c12.9557,1.07225 26.25621,-1.37898 39,-7c8.18357,-3.6096 23.47083,-13.47157 37,-26c6.22585,-5.76532 17.52225,-18.66467 27,-34c4.23859,-6.85817 12.98289,-26.60743 15,-42c0.90953,-6.94066 0.28406,-22.55592 -5,-33c-3.25543,-6.43445 -12.50914,-21.50748 -28,-36c-7.76262,-7.26235 -25.80312,-17.49426 -43,-19c-8.9657,-0.78503 -26.6187,4.10349 -40,14c-13.6917,10.12607 -18.51147,14.51607 -27,24c-8.54076,9.54229 -11.99913,13.51125 -17,25c-2.52421,5.799 -4,16 -4,28c0,7 -0.47248,20.10229 3,35c3.52403,15.1189 5.56834,22.20805 12,35c5.62854,11.19463 7.55798,13.58408 14,18c8.49201,5.82115 14.994,6.08788 29,7c16.99339,1.10667 28.37574,1.88757 48,-3c17.49336,-4.35686 25.34601,-9.3434 38,-21c12.52509,-11.53786 19.51846,-19.00281 24,-34c4.90091,-16.40064 1.61221,-33.10059 0,-41c-2.91161,-14.26614 -5.1261,-21.57381 -18,-35c-13.29491,-13.86525 -28.26588,-23.2339 -36,-27c-15.9316,-7.75784 -26.99921,-8.98644 -44,-8c-17.23369,0.99995 -30.43626,8.43967 -37,14c-10.79073,9.14112 -20,22 -23,28c-6,12 -10,27 -11,36c-2,18 -3.05634,27.03285 -2,44c1.00194,16.09335 5.89339,32.0545 9,38c5.80271,11.10535 13.74288,17.45366 17,19c12.28706,5.83337 28.07248,3.30203 37,1c17.15878,-4.42451 36.1353,-13.84566 43,-20c16.32994,-14.64011 30.28995,-30.82593 35,-39c9.60353,-16.6665 15.56573,-36.74279 16,-54c0.20282,-8.05971 -2.87173,-23.06911 -11,-38c-4.92268,-9.04252 -9.84964,-16.74314 -31,-24c-9.64606,-3.30964 -31.24399,-1.88656 -40,1c-18.70737,6.16719 -35.19958,19.74273 -43,26c-14.38326,11.53784 -26.54389,23.16821 -33,37c-2.675,5.731 -6,20 -6,35c0,7 0.2927,20.32477 7,34c4.53374,9.24365 17.14005,26.08295 32,37c7.60279,5.58548 21.07153,11.77219 36,10c16.64617,-1.97609 26.28236,-7.45781 41,-21c8.86119,-8.15347 22.87723,-26.63519 30,-45c3.43048,-8.84488 5.18576,-30.15432 2,-50c-1.46127,-9.103 -7.5387,-25.02153 -17,-37c-10.51888,-13.31741 -18.16112,-18.948 -38,-23c-19.61993,-4.00728 -30.94434,-3.27198 -50,4c-18.4269,7.03203 -24.27437,15.07043 -32,27c-3.6464,5.63061 -7.662,17.81448 -11,31c-3.75412,14.82925 -4.76138,21.985 -4,36c0.60649,11.16388 2.44871,16.26765 8,27c6.38258,12.33948 10.91962,19.22916 21,27c11.00266,8.48183 18.13948,10.2104 32,8c12.21497,-1.94798 19.83768,-4.69604 36,-16c18.04678,-12.62195 25.65047,-20.49275 38,-37c11.63126,-15.54715 17.05078,-23.56882 24,-42c5.91389,-15.68521 9.61386,-22.26549 7,-35c-3.06255,-14.92048 -14.18224,-25.94845 -21,-31c-13.65916,-10.12063 -36.00312,-13.75023 -46,-14c-20.01874,-0.50016 -36.43626,3.43967 -43,9c-11.8698,10.05523 -17.86426,23.04697 -20,29c-4.70348,13.1102 -9.32044,26.95531 -10,33c-1.9025,16.92278 -0.67131,31.10018 1,40c2.86523,15.25748 10.88293,30.07437 16,38c9.7784,15.14539 22.83316,26.30725 30,30c12.72765,6.55798 28.21384,6.51791 36,3c15.49211,-6.9996 30.07921,-21.93895 37,-31c12.13988,-15.89413 19.13969,-34.12343 22,-51c1.5406,-9.08991 2.67131,-27.10018 1,-36c-2.86523,-15.25747 -9.50345,-29.57508 -21,-39c-4.50932,-3.69676 -18.02568,-8.6696 -33,-10c-9.01986,-0.80137 -27.47649,1.15248 -44,11c-9.29169,5.53756 -27.68656,16.18886 -42,29c-7.37639,6.60219 -18.69167,20.30241 -25,38c-2.76874,7.7675 -5.49972,21.97503 -6,37c-0.26622,7.99557 -1.15473,24.0477 0,38c0.50171,6.06204 3.2289,15.64117 10,23c8.15348,8.86119 13.51363,13.53534 28,15c12.97227,1.31158 20.34389,-1.17302 38,-9c10.22105,-4.53101 32.53242,-17.33977 50,-35c15.48677,-15.65758 20.54436,-24.72836 31,-39c4.76469,-6.50367 11.4866,-18.69913 13,-30c1.1946,-8.92036 1.36166,-14.30815 -2,-26c-3.59225,-12.49383 -7.1244,-17.63234 -16,-29c-9.14876,-11.71752 -13.2874,-16.27156 -25,-22c-13.35442,-6.53143 -28.04185,-5.29143 -36,-4c-15.09953,2.45032 -23.3188,7.39187 -39,16c-15.33434,8.41772 -23.5023,11.67954 -33,24c-8.48183,11.00266 -12.49874,23.94672 -13,31c-0.92156,12.96729 0.72197,19.07295 4,31c2.76682,10.06702 2.9413,14.38091 7,24c4.00246,9.48579 11.22206,19.45679 15,25c7.57684,11.11717 16.82132,16.25435 21,19c6.73792,4.42723 16.00966,6.31068 21,6c8.04668,-0.50096 17.70728,-4.47841 24,-8c12.49436,-6.9922 23,-13 27,-16l3,-4l2,-3" id="svg_18" stroke="#000" fill="none"/><path d="m133,186c2,-2 7.70546,-7.34619 10,-9c5.44197,-3.92236 13.3851,-10.37201 16,-14c4.13452,-5.73634 10.80818,-12.13715 13,-15c6.4621,-8.44046 14.2935,-16.88138 17,-24c1.12381,-2.95585 3,-12 3,-14c0,-4 0.76537,-9.15224 0,-11c-0.5412,-1.30656 -2,1 -2,2c0,2 -1,7 -1,14c0,3 -0.26691,11.04495 -1,17c-0.50377,4.09221 -4.57277,11.26207 -9,18c-2.74565,4.17868 -10.08743,9.79393 -15,12c-8.15932,3.66408 -19.23531,7.36955 -28,11c-4.13171,1.71141 -11.37202,4.3851 -15,7c-1.14727,0.8269 -2.14727,0.8269 -1,0c1.814,-1.30745 4.9203,-2.11351 12,-7c2.96736,-2.04811 14.65947,-10.16408 25,-19c4.30063,-3.67487 12,-9 18,-15c4,-4 5,-5 7,-7c1,-1 2,-1 2,-1c0,1 1.46626,6.0966 0,12c-0.76227,3.06903 -3.41643,12.39389 -11,23c-7.44855,10.41725 -17.54948,17.70003 -25,22c-10.46519,6.03984 -15.79291,7.71318 -25,10c-5.9034,1.46626 -11,1 -13,1c-1,0 -2,-2 -2,-2c2,-2 6.12601,-5.82281 9,-8c7.34892,-5.56717 17.19768,-14.74814 30,-25c6.09645,-4.88193 18.42336,-13.42824 24,-18c8.74937,-7.17276 14.14429,-13.93414 15,-16c1.21014,-2.92156 2,-5 2,-5c0,-1 -0.14935,-2.52573 -1,-2c-3.80423,2.35114 -2.6682,7.00919 -3,13c-0.50076,9.04153 -1.84888,13.04659 -5,23c-2.86334,9.0444 -4.31186,14.77806 -11,20c-4.59599,3.58844 -8.70848,5.67261 -15,8c-7.73399,2.86099 -11.78275,3.56868 -19,6c-3.90735,1.31628 -6,2 -7,2c0,0 0.11648,-0.79486 2,-2c5.39359,-3.45099 13.08784,-9.91405 17,-14c11.25809,-11.75821 24.65434,-26.48366 34,-39c4.31436,-5.77809 9.88052,-12.95783 12,-19c0.66202,-1.88726 1,-3 1,-3c0,0 0.36655,1.02248 0,4c-0.50377,4.09222 -2.44519,9.03867 -3,13c-1.00977,7.20975 -2.69508,12.54614 -7,21c-3.90355,7.66566 -9.76279,14.25766 -13,17c-6.56375,5.56033 -12.93294,9.10445 -16,11c-6.85817,4.23859 -11.88152,6.19028 -15,8c-1.93399,1.12234 -3.82375,3.48625 -6,4c-0.97325,0.22975 -0.38687,0.9176 -3,2c-0.92387,0.38269 -4,0 -5,0c-1,0 -1,0 -1,0l-1,0" id="svg_19" stroke="#000" fill="none"/><path stroke-width="1.5" d="m29,79c2,-1 4.94379,-2.07645 9,-5c12.82687,-9.24508 23.94507,-19.67117 58,-40c31.11344,-18.57293 51.07843,-24.78985 54,-26c2.06586,-0.85571 0.78833,-1.28588 -2,1c-3.28101,2.68979 -8.78391,4.8096 -26,17c-28.424,20.12651 -53.84402,46.15822 -65,57c-17.75538,17.25533 -25.23738,23.73766 -33,31c-2.06545,1.93233 0.15776,1.28848 4,-1c10.48728,-6.24635 18.23917,-14.69136 48,-38c30.24629,-23.68885 42.81546,-32.39433 55,-48c3.58844,-4.59599 4.17514,-4.04076 -5,6c-7.17077,7.84729 -32.77782,29.20892 -61,59c-24.80608,26.18507 -36.29965,34.51882 -44,49c-1.48469,2.79208 -0.933,5.51334 1,5c7.79217,-2.06932 13.246,-8.74603 37,-32c15.1587,-14.83961 43,-42 61,-60c10,-10 10.58578,-13 12,-13c1.41422,0 0.07944,4.04459 -5,13c-10.83144,19.09659 -22.57085,32.57085 -45,63c-17.45037,23.67456 -25.88705,31.76125 -29,43c-0.8008,2.89114 3.58051,2.56017 19,-14c13.52643,-14.52707 41.07971,-48.93962 60,-74c9.03818,-11.97128 11.5112,-13.77782 10,-11c-3.05995,5.62465 -15.24929,24.18169 -38,56c-11.17281,15.62589 -21.24265,28.86157 -32,48c-6.13948,10.92276 -6.58793,15.03145 -3,13c11.07584,-6.27103 18.57238,-19.61394 40,-52c21.58336,-32.62144 34.32718,-51.74183 39,-58c2.15718,-2.88905 2.96109,0.07748 2,6c-1.01308,6.24289 -14.88533,27.07224 -25,43c-19.7768,31.14287 -35.2935,54.88138 -38,62c-2.24763,5.9117 0.51633,6.6535 7,1c18.66101,-16.27165 26.48219,-29.64122 42,-51c9.29359,-12.79176 10,-16 9,-16c-1,0 -0.31538,3.20303 -3,11c-3.20638,9.31232 -9.53874,15.67024 -21,35c-5.25097,8.85591 -13,23 -17,32l-2,4l0,1" id="svg_20" stroke="#000" fill="none"/></g></svg><div></body></html>')}
function moveBar(a){if("ArrowRight"===a.code||"KeyD"===a.code)go_left=!1,window.moveBy(dx,0);if("KeyA"===a.code||"ArrowLeft"===a.code)go_left=!0,window.moveBy(-dx,0)}
function gamePlay(){game_playing=!0;ball_dx=getRandomInt(-150,150);ball_dy=getRandomInt(-50,-150);document.querySelector(".play-game").classList.add("hidden");document.addEventListener("keydown",moveBar);game_loop=setInterval(function(){var a=$jscomp.makeIterator(getCurrentBall()),b=a.next().value;a=a.next().value;if(0>=b||b+ball.outerWidth>=screenWidth)ball_dx=-ball_dx,serve=!1;100>=a&&(serve=!1,ball_dy=9<current_level?getRandomInt(50,100):getRandomInt(30,50));a+ball.outerHeight>=screenHeight-10&&(game_playing&&gameLose(),game_playing=!1);if(collisionDetect(window)&&!serve&&(ball_dy=getRandomInt(-50,-150),0<ball_dy)){a=$jscomp.makeIterator(getCurrentBar());var c=a.next().value;a.next();b<c+gameBoardWidth/2&&go_left?ball_dx=-50+-(25*(c+gameBoardWidth/2-ball_dx)):b>c+gameBoardWidth/2&&!go_left&&(ball_dx=50+25*Math.abs(c+gameBoardWidth/2-ball_dx))}if(0===block_list.length||block_list.every(function(e){return e.closed}))game_playing&&gameWin(),game_playing=!1;block_list.forEach(function(e){if(collisionDetect(e)){var f=$jscomp.makeIterator(getCurrentBlock(e));f.next();f.next();e.close();score=10<current_level?score+4:score+1;removeItemOnce(block_list,e)}});var d;null==(d=ball)||d.moveBy(ball_dx,ball_dy)},100)}function gameLose(){gameOver();gameInfo(state="lose")}
function gameOver(){document.removeEventListener("keydown",moveBar);game_loop&&clearInterval(game_loop);score>high_score&&(high_score=score);localStorage.setItem("breakout",JSON.stringify({level:current_level,high_score:high_score}));block_list.forEach(function(a){a&&!a.closed&&a.close()});ball&&!ball.closed&&ball.close();document.querySelector(".play-game").classList.remove("hidden");document.querySelector(".game-bar").classList.add("hidden");window.moveTo(gameBoardLeft,gameBoardTop);game_info=ball=null;block_list=[]}function gameWin(){gameOver();current_level<=MAX_LEVEL&&(current_level+=1);gameInfo(state="win")}function getCurrentBlock(a){return[(null==a?void 0:a.screenX)||(null==a?void 0:a.screenLeft),(null==a?void 0:a.screenY)||(null==a?void 0:a.screenTop)]}function getCurrentBall(){return getCurrentBlock(ball)}function getCurrentBar(){return getCurrentBlock(window)}
function collisionDetect(a){try{var b=(null==a?void 0:a.screenY)||(null==a?void 0:a.screenTop),c=(null==a?void 0:a.screenX)||(null==a?void 0:a.screenLeft),d=$jscomp.makeIterator(getCurrentBall()),e=d.next().value,f=d.next().value,g,h;return!(f+(null==(g=ball)?void 0:g.outerHeight)<b||f>b+a.outerHeight||e+(null==(h=ball)?void 0:h.outerWidth)<c||e>c+a.outerWidth)}catch(k){}};