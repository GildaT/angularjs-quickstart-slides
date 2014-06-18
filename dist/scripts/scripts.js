var Showdown={extensions:{}},forEach=Showdown.forEach=function(a,b){if("function"==typeof a.forEach)a.forEach(b);else{var c,d=a.length;for(c=0;d>c;c++)b(a[c],c,a)}},stdExtName=function(a){return a.replace(/[_-]||\s/g,"").toLowerCase()};Showdown.converter=function(a){var b,c,d,e=0,f=[],g=[];if("undefind"!=typeof module&&"undefined"!=typeof exports&&"undefind"!=typeof require){var h=require("fs");if(h){var i=h.readdirSync((__dirname||".")+"/extensions").filter(function(a){return~a.indexOf(".js")}).map(function(a){return a.replace(/\.js$/,"")});Showdown.forEach(i,function(a){var b=stdExtName(a);Showdown.extensions[b]=require("./extensions/"+a)})}}if(this.makeHtml=function(a){return b={},c={},d=[],a=a.replace(/~/g,"~T"),a=a.replace(/\$/g,"~D"),a=a.replace(/\r\n/g,"\n"),a=a.replace(/\r/g,"\n"),a="\n\n"+a+"\n\n",a=M(a),a=a.replace(/^[ \t]+$/gm,""),Showdown.forEach(f,function(b){a=l(b,a)}),a=z(a),a=n(a),a=m(a),a=p(a),a=K(a),a=a.replace(/~D/g,"$$"),a=a.replace(/~T/g,"~"),Showdown.forEach(g,function(b){a=l(b,a)}),a},a&&a.extensions){var j=this;Showdown.forEach(a.extensions,function(a){if("string"==typeof a&&(a=Showdown.extensions[stdExtName(a)]),"function"!=typeof a)throw"Extension '"+a+"' could not be loaded.  It was either not found or is not a valid extension.";Showdown.forEach(a(j),function(a){a.type?"language"===a.type||"lang"===a.type?f.push(a):("output"===a.type||"html"===a.type)&&g.push(a):g.push(a)})})}var k,l=function(a,b){if(a.regex){var c=new RegExp(a.regex,"g");return b.replace(c,a.replace)}return a.filter?a.filter(b):void 0},m=function(a){return a+="~0",a=a.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm,function(a,d,e,f,g){return d=d.toLowerCase(),b[d]=G(e),f?f+g:(g&&(c[d]=g.replace(/"/g,"&quot;")),"")}),a=a.replace(/~0/,"")},n=function(a){a=a.replace(/\n/g,"\n\n");return a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,o),a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm,o),a=a.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,o),a=a.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g,o),a=a.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,o),a=a.replace(/\n\n/g,"\n")},o=function(a,b){var c=b;return c=c.replace(/\n\n/g,"\n"),c=c.replace(/^\n/,""),c=c.replace(/\n+$/g,""),c="\n\n~K"+(d.push(c)-1)+"K\n\n"},p=function(a){a=w(a);var b=A("<hr />");return a=a.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,b),a=a.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,b),a=a.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm,b),a=x(a),a=y(a),a=E(a),a=n(a),a=F(a)},q=function(a){return a=B(a),a=r(a),a=H(a),a=u(a),a=s(a),a=I(a),a=G(a),a=D(a),a=a.replace(/  +\n/g," <br />\n")},r=function(a){var b=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return a=a.replace(b,function(a){var b=a.replace(/(.)<\/?code>(?=.)/g,"$1`");return b=N(b,"\\`*_")})},s=function(a){return a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,t),a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,t),a=a.replace(/(\[([^\[\]]+)\])()()()()()/g,t)},t=function(a,d,e,f,g,h,i,j){void 0==j&&(j="");var k=d,l=e,m=f.toLowerCase(),n=g,o=j;if(""==n)if(""==m&&(m=l.toLowerCase().replace(/ ?\n/g," ")),n="#"+m,void 0!=b[m])n=b[m],void 0!=c[m]&&(o=c[m]);else{if(!(k.search(/\(\s*\)$/m)>-1))return k;n=""}n=N(n,"*_");var p='<a href="'+n+'"';return""!=o&&(o=o.replace(/"/g,"&quot;"),o=N(o,"*_"),p+=' title="'+o+'"'),p+=">"+l+"</a>"},u=function(a){return a=a.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,v),a=a.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,v)},v=function(a,d,e,f,g,h,i,j){var k=d,l=e,m=f.toLowerCase(),n=g,o=j;if(o||(o=""),""==n){if(""==m&&(m=l.toLowerCase().replace(/ ?\n/g," ")),n="#"+m,void 0==b[m])return k;n=b[m],void 0!=c[m]&&(o=c[m])}l=l.replace(/"/g,"&quot;"),n=N(n,"*_");var p='<img src="'+n+'" alt="'+l+'"';return o=o.replace(/"/g,"&quot;"),o=N(o,"*_"),p+=' title="'+o+'"',p+=" />"},w=function(a){function b(a){return a.replace(/[^\w]/g,"").toLowerCase()}return a=a.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(a,c){return A('<h1 id="'+b(c)+'">'+q(c)+"</h1>")}),a=a.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(a,c){return A('<h2 id="'+b(c)+'">'+q(c)+"</h2>")}),a=a.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(a,c,d){var e=c.length;return A("<h"+e+' id="'+b(d)+'">'+q(d)+"</h"+e+">")})},x=function(a){a+="~0";var b=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return e?a=a.replace(b,function(a,b,c){var d=b,e=c.search(/[*+-]/g)>-1?"ul":"ol";d=d.replace(/\n{2,}/g,"\n\n\n");var f=k(d);return f=f.replace(/\s+$/,""),f="<"+e+">"+f+"</"+e+">\n"}):(b=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,a=a.replace(b,function(a,b,c,d){var e=b,f=c,g=d.search(/[*+-]/g)>-1?"ul":"ol",f=f.replace(/\n{2,}/g,"\n\n\n"),h=k(f);return h=e+"<"+g+">\n"+h+"</"+g+">\n"})),a=a.replace(/~0/,"")};k=function(a){return e++,a=a.replace(/\n{2,}$/,"\n"),a+="~0",a=a.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,function(a,b,c,d,e){var f=e,g=b;return g||f.search(/\n{2,}/)>-1?f=p(L(f)):(f=x(L(f)),f=f.replace(/\n$/,""),f=q(f)),"<li>"+f+"</li>\n"}),a=a.replace(/~0/g,""),e--,a};var y=function(a){return a+="~0",a=a.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(a,b,c){var d=b,e=c;return d=C(L(d)),d=M(d),d=d.replace(/^\n+/g,""),d=d.replace(/\n+$/g,""),d="<pre><code>"+d+"\n</code></pre>",A(d)+e}),a=a.replace(/~0/,"")},z=function(a){return a+="~0",a=a.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(a,b,c){var d=b,e=c;return e=C(e),e=M(e),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),e="<pre><code"+(d?' class="'+d+'"':"")+">"+e+"\n</code></pre>",A(e)}),a=a.replace(/~0/,"")},A=function(a){return a=a.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(d.push(a)-1)+"K\n\n"},B=function(a){return a=a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(a,b,c,d){var e=d;return e=e.replace(/^([ \t]*)/g,""),e=e.replace(/[ \t]*$/g,""),e=C(e),b+"<code>"+e+"</code>"})},C=function(a){return a=a.replace(/&/g,"&amp;"),a=a.replace(/</g,"&lt;"),a=a.replace(/>/g,"&gt;"),a=N(a,"*_{}[]\\",!1)},D=function(a){return a=a.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>"),a=a.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>")},E=function(a){return a=a.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(a,b){var c=b;return c=c.replace(/^[ \t]*>[ \t]?/gm,"~0"),c=c.replace(/~0/g,""),c=c.replace(/^[ \t]+$/gm,""),c=p(c),c=c.replace(/(^|\n)/g,"$1  "),c=c.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,b){var c=b;return c=c.replace(/^  /gm,"~0"),c=c.replace(/~0/g,"")}),A("<blockquote>\n"+c+"\n</blockquote>")})},F=function(a){a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,"");for(var b=a.split(/\n{2,}/g),c=[],e=b.length,f=0;e>f;f++){var g=b[f];g.search(/~K(\d+)K/g)>=0?c.push(g):g.search(/\S/)>=0&&(g=q(g),g=g.replace(/^([ \t]*)/g,"<p>"),g+="</p>",c.push(g))}e=c.length;for(var f=0;e>f;f++)for(;c[f].search(/~K(\d+)K/)>=0;){var h=d[RegExp.$1];h=h.replace(/\$/g,"$$$$"),c[f]=c[f].replace(/~K\d+K/,h)}return c.join("\n\n")},G=function(a){return a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),a=a.replace(/<(?![a-z\/?\$!])/gi,"&lt;")},H=function(a){return a=a.replace(/\\(\\)/g,O),a=a.replace(/\\([`*_{}\[\]()>#+-.!])/g,O)},I=function(a){return a=a.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi,'<a href="$1">$1</a>'),a=a.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,function(a,b){return J(K(b))})},J=function(a){var b=[function(a){return"&#"+a.charCodeAt(0)+";"},function(a){return"&#x"+a.charCodeAt(0).toString(16)+";"},function(a){return a}];return a="mailto:"+a,a=a.replace(/./g,function(a){if("@"==a)a=b[Math.floor(2*Math.random())](a);else if(":"!=a){var c=Math.random();a=c>.9?b[2](a):c>.45?b[1](a):b[0](a)}return a}),a='<a href="'+a+'">'+a+"</a>",a=a.replace(/">.+:/g,'">')},K=function(a){return a=a.replace(/~E(\d+)E/g,function(a,b){var c=parseInt(b);return String.fromCharCode(c)})},L=function(a){return a=a.replace(/^(\t|[ ]{1,4})/gm,"~0"),a=a.replace(/~0/g,"")},M=function(a){return a=a.replace(/\t(?=\t)/g,"    "),a=a.replace(/\t/g,"~A~B"),a=a.replace(/~B(.+?)~A/g,function(a,b){for(var c=b,d=4-c.length%4,e=0;d>e;e++)c+=" ";return c}),a=a.replace(/~A/g,"    "),a=a.replace(/~B/g,"")},N=function(a,b,c){var d="(["+b.replace(/([\[\]\\])/g,"\\$1")+"])";c&&(d="\\\\"+d);var e=new RegExp(d,"g");return a=a.replace(e,O)},O=function(a,b){var c=b.charCodeAt(0);return"~E"+c+"E"}},"undefined"!=typeof module&&(module.exports=Showdown),"function"==typeof define&&define.amd&&define("showdown",function(){return Showdown});var applause=angular.module("applauseApp",["ngAnimate","ngSanitize","hljs"]);applause.controller("DeckCtrl",["$scope","Appdata",function(a,b){a.$watch(function(){return b},function(b){a.currentSlide=b.currentSlide,a.lastSlide=b.slides.length},!0),a.next=function(){b.currentSlide<a.lastSlide&&(b.currentSlide+=1)},a.prev=function(){b.currentSlide>1&&(b.currentSlide-=1)},a.$parent.keyup=function(b){switch(b.keyCode){case 27:a.showGoTo=!a.showGoTo;break;case 37:a.prev();break;case 32:case 39:a.next()}}}]),applause.directive("slide",["Appdata",function(a){var b=1,c=function(c){c.n=b,a.slides.push(b),b+=1};return{template:'<section class="slide" ng-transclude="" ng-show="n === $parent.currentSlide" fit></section>',restrict:"E",transclude:!0,replace:!0,scope:{},link:c}}]),applause.directive("fit",["$window",function(a){var b=function(b,c){b.resizeSlide=function(){var b=a.document.querySelector(".slide"),d=a.innerWidth/b.clientWidth,e=a.innerHeight/b.clientHeight,f=Math.min(d,e),g=(a.innerHeight-b.clientHeight*f)/2,h=(a.innerWidth-b.clientWidth*f)/2,i="scale("+f+")";c.css({transformOrigin:"0 0",webkitTransformOrigin:"0 0",transform:i,webkitTransform:i,top:g+"px",left:h+"px"})},b.resizeSlide(),angular.element(a).bind("resize",function(){b.resizeSlide(),b.$apply()})};return{link:b}}]),applause.directive("progressBar",function(){var a=function(a,b){a.$watch(function(a){var c=(a.currentSlide/a.lastSlide*100).toFixed(2);b.css("width",c+"%")})};return{template:'<div id="progress-bar"></div>',restrict:"E",replace:!0,link:a}}),applause.factory("Appdata",function(){var a=[],b=1;return{slides:a,currentSlide:b}}),applause.directive("markdown",["$window",function(a){String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var b=new a.Showdown.converter,c=function(a,c){c.html(b.makeHtml(c.text().trim()))};return{restrict:"EA",link:c}}]),applause.directive("bgImg",["$filter",function(a){return function(b,c,d){var e="";if(e=/^(f|ht)tps?:\/\//i.test(d.bgImg)?d.bgImg:"images/"+d.bgImg,c.css({background:"transparent url("+e+") no-repeat 0 0","background-size":"cover"}),d.credits){var f=a("linky")(d.credits,"_blank"),g='<div class="credits">Photo credits: '+f+"</div>";c.append(g)}}}]),applause.directive("goto",["Appdata",function(a){var b=function(b){b.goTo=function(){return isNaN(parseInt(b.goToSlide))?!1:(a.currentSlide=parseInt(b.goToSlide)<=a.slides.length?parseInt(b.goToSlide):a.slides.length,b.goToSlide="",b.showGoTo=!1,void 0)}};return{restrict:"EA",template:'<form ng-submit="goTo()" ng-show="showGoTo" id="go-to" name="goto"><label>Go to: <input required ng-model="goToSlide" type="text" placeholder="slide" autofocus="autofocus"></label></form>',link:b}}]);