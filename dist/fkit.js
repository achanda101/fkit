var fkit=F=function(r){function n(e){if(t[e])return t[e].exports;var u=t[e]={exports:{},id:e,loaded:!1};return r[e].call(u.exports,u,u.exports,n),u.loaded=!0,u.exports}var t={};return n.m=r,n.c=t,n.p="",n(0)}([function(r,n,t){"use strict";var e=t(6);r.exports=e.extend({Signal:t(15)},[t(1),t(12),t(10),t(7),t(11),t(16)])},function(r,n,t){"use strict";function e(r){return r.reduce(function(r,n){return r.concat(n)},[])}function u(r){function n(e,u){return function(){var c=e.concat(arguments.length>0?o.slice.call(arguments,0):void 0);return c.length>=t?r.apply(this,c):n(c,u+1)}}var t=r.length;return 1>=t?r:n([],0)}function c(r){var n=r.length;return 1>n?r:1===n?function(){var n=o.slice.call(arguments,0),t=1===arguments.length?e(n):n;return r.call(this,t)}:function(){var t=Math.max(n-arguments.length-1,0),e=new Array(t),u=o.slice.call(arguments,0,n-1),c=o.slice.call(arguments,r.length-1);return r.apply(this,u.concat(e).concat([c]))}}var i,o=t(6);i=r.exports={flatten:e,apply:u(function(r,n){return r(n)}),apply2:u(function(r,n,t){return r(n,t)}),apply3:u(function(r,n,t,e){return r(n,t,e)}),applyRight:u(function(r,n){return n(r)}),compose:c(function(r){return function(n){return r.reduceRight(function(r,n){return n(r)},n)}}),flip:u(function(r,n,t){return r(t,n)}),id:function(r){return r},"const":function(r){return function(){return r}},curry:u,uncurry:u(function(r,n){return r(n[0],n[1])}),unary:function(r){return 1===r.length?r:i.apply(r)},binary:function(r){return 2===r.length?r:i.apply2(r)},variadic:c,tap:u(function(r,n){return r(n),n}),equal:u(function(r,n){return n===r}),notEqual:u(function(r,n){return n!==r}),compare:u(function(r,n){return r>n?1:n>r?-1:0})}},function(r,n,t){"use strict";var e,u=t(1);e=r.exports={isString:function(r){return"string"==typeof r||r.length>0&&r.reduce(function(r,n){return r&&"string"==typeof n},!0)},mempty:function(r){return e.isString(r)?"":[]},pure:function(r){return e.isString(r)?r:[r]},toArray:function(r){return"string"==typeof r?r.split(""):r},length:function(r){return r.length},empty:function(r){return 0===r.length},append:u.curry(function(r,n){return"string"==typeof n?n+r:n.concat([r])}),prepend:u.curry(function(r,n){return"string"==typeof n?r+n:[r].concat(n)}),surround:u.curry(function(r,n,t){return e.append(n,e.prepend(r,t))}),head:function(r){return r[0]},last:function(r){return r[r.length-1]},init:function(r){return r.slice(0,r.length-1)},tail:function(r){return r.slice(1)},inits:function c(r){return e.prepend(e.mempty(r),e.empty(r)?[]:c(e.tail(r)).map(e.prepend(e.head(r))))},tails:function i(r){return e.prepend(r,e.empty(r)?[]:i(e.tail(r)))}}},function(r,n,t){"use strict";function e(r){return c.toArray(i.flatten(r)).reduce(i.flip(c.append),c.mempty(r))}var u,c=t(2),i=t(1),o=t(7);u=r.exports={concat:i.variadic(e),concatMap:i.curry(function(r,n){var t=c.toArray(n).map(r).concat(c.mempty(n));return e(t)}),fold:i.curry(function(r,n,t){return c.toArray(t).reduce(r,n)}),foldRight:i.curry(function(r,n,t){return c.toArray(t).reduceRight(i.flip(r),n)}),scan:i.curry(function(r,n,t){var e=[n];return u.fold(function(n,t){return i.tap(e.push.bind(e),r(n,t))},n,t),e}),scanRight:i.curry(function(r,n,t){var e=[n];return u.foldRight(function(n,t){return i.tap(e.unshift.bind(e),r(n,t))},n,t),e}),maximum:function(r){return u.fold(o.max,r[0],r)},minimum:function(r){return u.fold(o.min,r[0],r)},sum:function(r){return u.fold(o.add,0,r)},product:function(r){return u.fold(o.mul,1,r)}}},function(r,n,t){"use strict";var e,u=t(2),c=t(1),i=t(3),o=t(7);e=r.exports={array:function(r){return Array.apply(null,Array(r))},pair:c.curry(function(r,n){return[r,n]}),range:c.curry(function(r,n){return e.array(n).map(function(n,t){return r+t})}),replicate:c.curry(function(r,n){return i.concatMap(c.const(u.pure(n)),e.array(r))}),sample:c.curry(function(r,n){var t=n.length;return e.range(1,Math.min(t,r)).map(function(){var r=o.randomInt(0,t-1);return n[r]})})}},function(r,n,t){"use strict";var e=t(2),u=t(1),c=t(3);r.exports={map:u.curry(function(r,n){return e.toArray(n).map(r)}),reverse:function(r){return e.toArray(r).reduce(u.flip(e.prepend),e.mempty(r))},intersperse:u.curry(function(r,n){function t(n){return e.empty(n)?e.mempty(n):c.concat(r,e.head(n),t(e.tail(n)))}return e.empty(n)?e.mempty(n):c.concat(e.head(n),t(e.tail(n)))})}},function(r){"use strict";r.exports={extend:function(r,n){return n.forEach(function(n){Object.getOwnPropertyNames(n).forEach(function(t){r[t]=n[t]})}),r},slice:Array.prototype.slice}},function(r,n,t){"use strict";var e=t(1);r.exports={add:e.curry(function(r,n){return n+r}),sub:e.curry(function(r,n){return n-r}),mul:e.curry(function(r,n){return n*r}),div:e.curry(function(r,n){return n/r}),mod:e.curry(function(r,n){return n%r}),max:e.curry(function(r,n){return n>r?n:r}),min:e.curry(function(r,n){return r>n?n:r}),negate:function(r){return-r},eq:e.curry(function(r,n){return n==r}),neq:e.curry(function(r,n){return n!=r}),gt:e.curry(function(r,n){return n>r}),gte:e.curry(function(r,n){return n>=r}),lt:e.curry(function(r,n){return r>n}),lte:e.curry(function(r,n){return r>=n}),inc:function(r){return r+1},dec:function(r){return r-1},randomInt:e.curry(function(r,n){return Math.floor(Math.random()*(n-r+1))+r}),randomFloat:e.curry(function(r,n){return Math.random()*(n-r)+r})}},function(r,n,t){"use strict";var e,u=t(2),c=t(1),i=t(3),o=t(10),f=t(5);e=r.exports={elem:c.curry(function(r,n){return n.indexOf(r)>=0}),elemIndex:c.curry(function(r,n){var t=n.indexOf(r);return t>=0?t:void 0}),elemIndices:c.curry(function(r,n){return e.findIndices(c.equal(r),n)}),find:c.curry(function(r,n){return u.head(e.filter(r,n))}),findIndex:c.curry(function(r,n){for(var t=n.length,e=0;t>e;e++)if(r(n[e]))return e;return void 0}),findIndices:c.curry(function(r,n){for(var t=[],e=n.length,u=0;e>u;u++)r(n[u])&&t.push(u);return t}),filter:c.curry(function(r,n){var t=o.branch(r,c.id,c.const(""));return"string"==typeof n?i.concatMap(t,n):n.filter(r)}),partition:c.curry(function(r,n){return[e.filter(r,n),e.filter(c.compose(o.not,r),n)]}),all:c.curry(function(r,n){return e.filter(r,n).length===n.length}),any:c.curry(function(r,n){return e.filter(r,n).length>0}),isPrefixOf:c.curry(function a(r,n){return u.empty(r)?!0:u.empty(n)?!1:u.head(r)===u.head(n)&&a(u.tail(r),u.tail(n))}),isSuffixOf:c.curry(function(r,n){return e.isPrefixOf(f.reverse(r),f.reverse(n))}),isInfixOf:c.curry(function(r,n){return e.any(e.isPrefixOf(r),u.tails(n))})}},function(r,n,t){"use strict";var e,u=t(2),c=t(4),i=t(1),o=t(3),f=t(5),a=t(8);e=r.exports={nub:function(r){return e.nubBy(i.equal,r)},nubBy:i.curry(function p(r,n){var t=u.head(n);return u.empty(n)?u.mempty(n):u.prepend(t,p(r,a.filter(function(n){return!r(t,n)},u.tail(n))))}),union:i.curry(function(r,n){return o.fold(function(r,n){return a.elem(n,r)?r:u.append(n,r)},r,n)}),intersect:i.curry(function(r,n){return o.fold(function(r,t){return a.elem(t,n)?u.append(t,r):r},u.mempty(r),r)}),difference:i.curry(function(r,n){return o.fold(i.flip(e.remove),r,n)}),remove:i.curry(function(r,n){return e.removeBy(i.equal,r,n)}),removeBy:i.curry(function s(r,n,t){var e=u.head(t),c=u.tail(t);return u.empty(t)?u.mempty(t):r(n,e)?c:u.prepend(e,s(r,n,c))}),cartesian:i.curry(function y(r,n){return u.empty(r)?[]:o.concat(f.map(c.pair(u.head(r)),n),y(u.tail(r),n))}),subsequences:function(r){function n(r){function t(r,n){return o.concat(u.pure(r),u.pure(u.prepend(e,r)),n)}var e=u.head(r);return u.empty(r)?[]:u.prepend(u.pure(e),o.foldRight(t,[],n(u.tail(r))))}return u.prepend(u.mempty(r),n(r))},permutations:function l(r){function n(r,t){function e(r,n){function t(r,e){if(u.empty(e))return[f,n];var a=u.head(e),p=u.tail(e),s=t(i.compose(r,u.prepend(a)),p);return[u.prepend(a,s[0]),u.prepend(r(o.concat(c,a,s[0])),s[1])]}return t(i.id,r)[1]}var c=u.head(r),f=u.tail(r);return u.empty(r)?[]:o.foldRight(e,n(f,u.prepend(c,t)),l(t))}return u.prepend(r,n(r,[]))}}},function(r,n,t){"use strict";{var e,u=t(1);t(5)}e=r.exports={and:u.curry(function(r,n){return n&&r}),or:u.curry(function(r,n){return n||r}),not:function(r){return!r},branch:u.curry(function(r,n,t,e){return r(e)?n(e):t(e)}),whereAll:u.curry(function(r,n){return r.map(u.applyRight(n)).reduce(e.and,!0)}),whereAny:u.curry(function(r,n){return r.map(u.applyRight(n)).reduce(e.or,!1)})}},function(r,n,t){"use strict";var e,u=t(1),c=t(9),i=t(6);e=r.exports={copy:u.variadic(function(r,n){return i.extend(new r.constructor,[r].concat(n))}),get:u.curry(function(r,n){return n[r]}),set:u.curry(function(r,n,t){var u={};return u[r]=n,e.copy(t,u)}),update:u.curry(function(r,n,t){return e.set(r,n(e.get(r,t)),t)}),pick:u.curry(function(r,n){return r.reduce(function(r,t){return e.set(t,e.get(t,n),r)},{})}),omit:u.curry(function(r,n){return c.difference(e.keys(n),r).reduce(function(r,t){return e.set(t,e.get(t,n),r)},{})}),pairs:function(r){return Object.keys(r).map(function(n){return[n,e.get(n,r)]})},keys:function(r){return Object.keys(r)},values:function(r){return Object.keys(r).map(u.flip(e.get)(r))}}},function(r,n,t){"use strict";var e=t(6);r.exports=e.extend({},[t(2),t(4),t(3),t(5),t(8),t(9),t(13),t(14)])},function(r,n,t){"use strict";{var e,u=t(2),c=t(1);t(3)}e=r.exports={take:c.curry(function(r,n){for(var t=u.mempty(n),e=n.length,c=0;c<Math.min(e,r);c++)t=t.concat(n[c]);return t}),drop:c.curry(function(r,n){for(var t=u.mempty(n),e=n.length,c=r;e>c;c++)t=t.concat(n[c]);return t}),takeWhile:c.curry(function(r,n){for(var t=u.mempty(n),e=n.length,c=0;e>c&&r(n[c]);c++)t=t.concat(n[c]);return t}),dropWhile:c.curry(function(r,n){for(var t=u.mempty(n),e=n.length,c=0;r(n[c])&&c<n.length;)c++;for(var i=c;e>i;i++)t=t.concat(n[i]);return t}),splitAt:c.curry(function(r,n){return[e.take(r,n),e.drop(r,n)]}),span:c.curry(function(r,n){return[e.takeWhile(r,n),e.dropWhile(r,n)]}),group:function(r){return e.groupBy(c.equal,r)},groupBy:c.curry(function i(r,n){var t=u.head(n),c=e.span(r(t),u.tail(n));return u.empty(n)?[]:u.prepend(u.prepend(t,u.head(c)),i(r,u.last(c)))})}},function(r,n,t){"use strict";var e,u=t(2),c=t(4),i=t(1);e=r.exports={zipWith:i.curry(function(r,n,t){var e=Math.min(n.length,t.length);return u.toArray(n.slice(0,e)).map(function(n,e){return r(n,t[e])})}),zip:i.curry(function(r,n){return e.zipWith(c.pair,r,n)}),unzip:function(r){var n=u.mempty(r[0]);return r.reduceRight(function(r,n){var t=n[0],e=n[1],c=r[0],i=r[1];return[u.prepend(t,c),u.prepend(e,i)]},[n,n])}}},function(r,n,t){"use strict";function e(r){this.subscribe=r}var u=t(4),c=t(1),i=t(11);e.prototype.constructor=e,e.fromArray=function(r){return new e(function(n,t){r.map(c.unary(n)),t()})},e.fromCallback=function(r){return new e(function(n){r(n)})},e.fromEvent=function(r,n){return new e(function(t){r.on?r.on(n,t):r.addEventListener&&r.addEventListener(n,c.compose(t,i.get("detail")))})},e.fromPromise=function(r){return new e(function(n){r.then(n)})},e.of=function(r){return new e(function(n,t){r&&n(r),t()})},e.prototype.concatMap=function(r){var n=this;return i.copy(this,{subscribe:function(t,e){n.subscribe(function(n){r(n).subscribe(t,function(){})},e)}})},e.prototype.map=function(r){var n=this;return i.copy(this,{subscribe:function(t,e){n.subscribe(c.compose(t,r),e)}})},e.prototype.filter=function(r){var n=this;return i.copy(this,{subscribe:function(t,e){n.subscribe(function(n){r(n)&&t(n)},e)}})},e.prototype.fold=function(r,n){var t=this;return i.copy(this,{subscribe:function(e,u){t.subscribe(function(t){return r=n(r,t)},function(){return e(r),u()})}})},e.prototype.scan=function(r,n){var t=this;return i.copy(this,{subscribe:function(e,u){e(r),t.subscribe(function(t){return r=n(r,t),e(r)},u)}})},e.prototype.merge=c.variadic(function(r){var n=this;return i.copy(this,{subscribe:function(t,e){var u=0,c=function(){++u>r.length&&e()};[n].concat(r).map(function(r){r.subscribe(t,c)})}})}),e.prototype.split=function(r){function n(){e||t.subscribe(function(r){o.map(c.applyRight(r))},function(){f.map(c.applyRight())}),e=!0}var t=this,e=!1,o=[],f=[],a=u.range(0,r).map(function(){return i.copy(t,{subscribe:function(r,t){o.push(r),f.push(t),n()}})});return a},e.prototype.zip=c.variadic(function(r){var n=this;return i.copy(this,{subscribe:function(t,e){var u=!1,c=0,i=new Array(r.length),o=function(n,e){i[e]=n,++c>r.length&&(t(i),c=0)},f=function(){u||e(),u=!0};[n].concat(r).map(function(r,n){r.subscribe(function(r){o(r,n)},f)})}})}),r.exports=e},function(r,n,t){"use strict";var e=t(1);r.exports={toUpper:function(r){return r.toUpperCase()},toLower:function(r){return r.toLowerCase()},replace:e.curry(function(r,n,t){return t.replace(r,n)})}}]);