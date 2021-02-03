﻿var List;List=function(){var t={"./src/add-async.js":function(t){t.exports=function(t){return function e(r,n,s){var i=r.splice(0,50);s=(s=s||[]).concat(t.add(i)),r.length>0?setTimeout((function(){e(r,n,s)}),1):(t.update(),n(s))}}},"./src/filter.js":function(t){t.exports=function(t){return t.handlers.filterStart=t.handlers.filterStart||[],t.handlers.filterComplete=t.handlers.filterComplete||[],function(e){if(t.trigger("filterStart"),t.i=1,t.reset.filter(),void 0===e)t.filtered=!1;else{t.filtered=!0;for(var r=t.items,n=0,s=r.length;n<s;n++){var i=r[n];e(i)?i.filtered=!0:i.filtered=!1}}return t.update(),t.trigger("filterComplete"),t.visibleItems}}},"./src/fuzzy-search.js":function(t,e,r){r("./src/utils/classes.js");var n=r("./src/utils/events.js"),s=r("./src/utils/extend.js"),i=r("./src/utils/to-string.js"),a=r("./src/utils/get-by-class.js"),o=r("./src/utils/fuzzy.js");t.exports=function(t,e){e=s({location:0,distance:100,threshold:.4,multiSearch:!0,searchClass:"fuzzy-search"},e=e||{});var r={search:function(n,s){for(var i=e.multiSearch?n.replace(/ +$/,"").split(/ +/):[n],a=0,o=t.items.length;a<o;a++)r.item(t.items[a],s,i)},item:function(t,e,n){for(var s=!0,i=0;i<n.length;i++){for(var a=!1,o=0,l=e.length;o<l;o++)r.values(t.values(),e[o],n[i])&&(a=!0);a||(s=!1)}t.found=s},values:function(t,r,n){if(t.hasOwnProperty(r)){var s=i(t[r]).toLowerCase();if(o(s,n,e))return!0}return!1}};return n.bind(a(t.listContainer,e.searchClass),"keyup",t.utils.events.debounce((function(e){var n=e.target||e.srcElement;t.search(n.value,r.search)}),t.searchDelay)),function(e,n){t.search(e,n,r.search)}}},"./src/index.js":function(t,e,r){var n=r("./node_modules/string-natural-compare/natural-compare.js"),s=r("./src/utils/get-by-class.js"),i=r("./src/utils/extend.js"),a=r("./src/utils/index-of.js"),o=r("./src/utils/events.js"),l=r("./src/utils/to-string.js"),u=r("./src/utils/classes.js"),c=r("./src/utils/get-attribute.js"),f=r("./src/utils/to-array.js");t.exports=function(t,e,h){var d,v=this,g=r("./src/item.js")(v),m=r("./src/add-async.js")(v),p=r("./src/pagination.js")(v);d={start:function(){v.listClass="list",v.searchClass="search",v.sortClass="sort",v.page=1e4,v.i=1,v.items=[],v.visibleItems=[],v.matchingItems=[],v.searched=!1,v.filtered=!1,v.searchColumns=void 0,v.searchDelay=0,v.handlers={updated:[]},v.valueNames=[],v.utils={getByClass:s,extend:i,indexOf:a,events:o,toString:l,naturalSort:n,classes:u,getAttribute:c,toArray:f},v.utils.extend(v,e),v.listContainer="string"==typeof t?document.getElementById(t):t,v.listContainer&&(v.list=s(v.listContainer,v.listClass,!0),v.parse=r("./src/parse.js")(v),v.templater=r("./src/templater.js")(v),v.search=r("./src/search.js")(v),v.filter=r("./src/filter.js")(v),v.sort=r("./src/sort.js")(v),v.fuzzySearch=r("./src/fuzzy-search.js")(v,e.fuzzySearch),this.handlers(),this.items(),this.pagination(),v.update())},handlers:function(){for(var t in v.handlers)v[t]&&v.handlers.hasOwnProperty(t)&&v.on(t,v[t])},items:function(){v.parse(v.list),void 0!==h&&v.add(h)},pagination:function(){if(void 0!==e.pagination){!0===e.pagination&&(e.pagination=[{}]),void 0===e.pagination[0]&&(e.pagination=[e.pagination]);for(var t=0,r=e.pagination.length;t<r;t++)p(e.pagination[t])}}},this.reIndex=function(){v.items=[],v.visibleItems=[],v.matchingItems=[],v.searched=!1,v.filtered=!1,v.parse(v.list)},this.toJSON=function(){for(var t=[],e=0,r=v.items.length;e<r;e++)t.push(v.items[e].values());return t},this.add=function(t,e){if(0!==t.length){if(!e){var r=[],n=!1;void 0===t[0]&&(t=[t]);for(var s=0,i=t.length;s<i;s++){var a;n=v.items.length>v.page,a=new g(t[s],void 0,n),v.items.push(a),r.push(a)}return v.update(),r}m(t.slice(0),e)}},this.show=function(t,e){return this.i=t,this.page=e,v.update(),v},this.remove=function(t,e,r){for(var n=0,s=0,i=v.items.length;s<i;s++)v.items[s].values()[t]==e&&(v.templater.remove(v.items[s],r),v.items.splice(s,1),i--,s--,n++);return v.update(),n},this.get=function(t,e){for(var r=[],n=0,s=v.items.length;n<s;n++){var i=v.items[n];i.values()[t]==e&&r.push(i)}return r},this.size=function(){return v.items.length},this.clear=function(){return v.templater.clear(),v.items=[],v},this.on=function(t,e){return v.handlers[t].push(e),v},this.off=function(t,e){var r=v.handlers[t],n=a(r,e);return n>-1&&r.splice(n,1),v},this.trigger=function(t){for(var e=v.handlers[t].length;e--;)v.handlers[t][e](v);return v},this.reset={filter:function(){for(var t=v.items,e=t.length;e--;)t[e].filtered=!1;return v},search:function(){for(var t=v.items,e=t.length;e--;)t[e].found=!1;return v}},this.update=function(){var t=v.items,e=t.length;v.visibleItems=[],v.matchingItems=[],v.templater.clear();for(var r=0;r<e;r++)t[r].matching()&&v.matchingItems.length+1>=v.i&&v.visibleItems.length<v.page?(t[r].show(),v.visibleItems.push(t[r]),v.matchingItems.push(t[r])):t[r].matching()?(v.matchingItems.push(t[r]),t[r].hide()):t[r].hide();return v.trigger("updated"),v},d.start()}},"./src/item.js":function(t){t.exports=function(t){return function(e,r,n){var s=this;this._values={},this.found=!1,this.filtered=!1;this.values=function(e,r){if(void 0===e)return s._values;for(var n in e)s._values[n]=e[n];!0!==r&&t.templater.set(s,s.values())},this.show=function(){t.templater.show(s)},this.hide=function(){t.templater.hide(s)},this.matching=function(){return t.filtered&&t.searched&&s.found&&s.filtered||t.filtered&&!t.searched&&s.filtered||!t.filtered&&t.searched&&s.found||!t.filtered&&!t.searched},this.visible=function(){return!(!s.elm||s.elm.parentNode!=t.list)},function(e,r,n){if(void 0===r)n?s.values(e,n):s.values(e);else{s.elm=r;var i=t.templater.get(s,e);s.values(i)}}(e,r,n)}}},"./src/pagination.js":function(t,e,r){var n=r("./src/utils/classes.js"),s=r("./src/utils/events.js"),i=r("./src/index.js");t.exports=function(t){var e=!1,r=function(r,s){if(t.page<1)return t.listContainer.style.display="none",void(e=!0);e&&(t.listContainer.style.display="block");var i,o=t.matchingItems.length,l=t.i,u=t.page,c=Math.ceil(o/u),f=Math.ceil(l/u),h=s.innerWindow||2,d=s.left||s.outerWindow||0,v=s.right||s.outerWindow||0;v=c-v,r.clear();for(var g=1;g<=c;g++){var m=f===g?"active":"";a.number(g,d,v,f,h)?(i=r.add({page:g,dotted:!1})[0],m&&n(i.elm).add(m),i.elm.firstChild.setAttribute("data-i",g),i.elm.firstChild.setAttribute("data-page",u)):a.dotted(r,g,d,v,f,h,r.size())&&(i=r.add({page:"...",dotted:!0})[0],n(i.elm).add("disabled"))}},a={number:function(t,e,r,n,s){return this.left(t,e)||this.right(t,r)||this.innerWindow(t,n,s)},left:function(t,e){return t<=e},right:function(t,e){return t>e},innerWindow:function(t,e,r){return t>=e-r&&t<=e+r},dotted:function(t,e,r,n,s,i,a){return this.dottedLeft(t,e,r,n,s,i)||this.dottedRight(t,e,r,n,s,i,a)},dottedLeft:function(t,e,r,n,s,i){return e==r+1&&!this.innerWindow(e,s,i)&&!this.right(e,n)},dottedRight:function(t,e,r,n,s,i,a){return!t.items[a-1].values().dotted&&(e==n&&!this.innerWindow(e,s,i)&&!this.right(e,n))}};return function(e){var n=new i(t.listContainer.id,{listClass:e.paginationClass||"pagination",item:e.item||"<li><a class='page' href='#'></a></li>",valueNames:["page","dotted"],searchClass:"pagination-search-that-is-not-supposed-to-exist",sortClass:"pagination-sort-that-is-not-supposed-to-exist"});s.bind(n.listContainer,"click",(function(e){var r=e.target||e.srcElement,n=t.utils.getAttribute(r,"data-page"),s=t.utils.getAttribute(r,"data-i");s&&t.show((s-1)*n+1,n)})),t.on("updated",(function(){r(n,e)})),r(n,e)}}},"./src/parse.js":function(t,e,r){t.exports=function(t){var e=r("./src/item.js")(t),n=function(r,n){for(var s=0,i=r.length;s<i;s++)t.items.push(new e(n,r[s]))},s=function e(r,s){var i=r.splice(0,50);n(i,s),r.length>0?setTimeout((function(){e(r,s)}),1):(t.update(),t.trigger("parseComplete"))};return t.handlers.parseComplete=t.handlers.parseComplete||[],function(){var e=function(t){for(var e=t.childNodes,r=[],n=0,s=e.length;n<s;n++)void 0===e[n].data&&r.push(e[n]);return r}(t.list),r=t.valueNames;t.indexAsync?s(e,r):n(e,r)}}},"./src/search.js":function(t){t.exports=function(t){var e,r,n,s={resetList:function(){t.i=1,t.templater.clear(),n=void 0},setOptions:function(t){2==t.length&&t[1]instanceof Array?e=t[1]:2==t.length&&"function"==typeof t[1]?(e=void 0,n=t[1]):3==t.length?(e=t[1],n=t[2]):e=void 0},setColumns:function(){0!==t.items.length&&void 0===e&&(e=void 0===t.searchColumns?s.toArray(t.items[0].values()):t.searchColumns)},setSearchString:function(e){e=(e=t.utils.toString(e).toLowerCase()).replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"),r=e},toArray:function(t){var e=[];for(var r in t)e.push(r);return e}},i=function(){for(var n,s=[],i=r;null!==(n=i.match(/"([^"]+)"/));)s.push(n[1]),i=i.substring(0,n.index)+i.substring(n.index+n[0].length);(i=i.trim()).length&&(s=s.concat(i.split(/\s+/)));for(var a=0,o=t.items.length;a<o;a++){var l=t.items[a];if(l.found=!1,s.length){for(var u=0,c=s.length;u<c;u++){for(var f=!1,h=0,d=e.length;h<d;h++){var v=l.values(),g=e[h];if(v.hasOwnProperty(g)&&void 0!==v[g]&&null!==v[g])if(-1!==("string"!=typeof v[g]?v[g].toString():v[g]).toLowerCase().indexOf(s[u])){f=!0;break}}if(!f)break}l.found=f}}},a=function(){t.reset.search(),t.searched=!1},o=function(o){return t.trigger("searchStart"),s.resetList(),s.setSearchString(o),s.setOptions(arguments),s.setColumns(),""===r?a():(t.searched=!0,n?n(r,e):i()),t.update(),t.trigger("searchComplete"),t.visibleItems};return t.handlers.searchStart=t.handlers.searchStart||[],t.handlers.searchComplete=t.handlers.searchComplete||[],t.utils.events.bind(t.utils.getByClass(t.listContainer,t.searchClass),"keyup",t.utils.events.debounce((function(e){var r=e.target||e.srcElement;""===r.value&&!t.searched||o(r.value)}),t.searchDelay)),t.utils.events.bind(t.utils.getByClass(t.listContainer,t.searchClass),"input",(function(t){""===(t.target||t.srcElement).value&&o("")})),o}},"./src/sort.js":function(t){t.exports=function(t){var e={els:void 0,clear:function(){for(var r=0,n=e.els.length;r<n;r++)t.utils.classes(e.els[r]).remove("asc"),t.utils.classes(e.els[r]).remove("desc")},getOrder:function(e){var r=t.utils.getAttribute(e,"data-order");return"asc"==r||"desc"==r?r:t.utils.classes(e).has("desc")?"asc":t.utils.classes(e).has("asc")?"desc":"asc"},getInSensitive:function(e,r){var n=t.utils.getAttribute(e,"data-insensitive");r.insensitive="false"!==n},setOrder:function(r){for(var n=0,s=e.els.length;n<s;n++){var i=e.els[n];if(t.utils.getAttribute(i,"data-sort")===r.valueName){var a=t.utils.getAttribute(i,"data-order");"asc"==a||"desc"==a?a==r.order&&t.utils.classes(i).add(r.order):t.utils.classes(i).add(r.order)}}}},r=function(){t.trigger("sortStart");var r={},n=arguments[0].currentTarget||arguments[0].srcElement||void 0;n?(r.valueName=t.utils.getAttribute(n,"data-sort"),e.getInSensitive(n,r),r.order=e.getOrder(n)):((r=arguments[1]||r).valueName=arguments[0],r.order=r.order||"asc",r.insensitive=void 0===r.insensitive||r.insensitive),e.clear(),e.setOrder(r);var s,i=r.sortFunction||t.sortFunction||null,a="desc"===r.order?-1:1;s=i?function(t,e){return i(t,e,r)*a}:function(e,n){var s=t.utils.naturalSort;return s.alphabet=t.alphabet||r.alphabet||void 0,!s.alphabet&&r.insensitive&&(s=t.utils.naturalSort.caseInsensitive),s(e.values()[r.valueName],n.values()[r.valueName])*a},t.items.sort(s),t.update(),t.trigger("sortComplete")};return t.handlers.sortStart=t.handlers.sortStart||[],t.handlers.sortComplete=t.handlers.sortComplete||[],e.els=t.utils.getByClass(t.listContainer,t.sortClass),t.utils.events.bind(e.els,"click",r),t.on("searchStart",e.clear),t.on("filterStart",e.clear),r}},"./src/templater.js":function(t){var e=function(t){var e,r=this,n=function(e,r){var n=e.cloneNode(!0);n.removeAttribute("id");for(var s=0,i=r.length;s<i;s++){var a=void 0,o=r[s];if(o.data)for(var l=0,u=o.data.length;l<u;l++)n.setAttribute("data-"+o.data[l],"");else o.attr&&o.name?(a=t.utils.getByClass(n,o.name,!0))&&a.setAttribute(o.attr,""):(a=t.utils.getByClass(n,o,!0))&&(a.innerHTML="")}return n},s=function(){for(var e=t.list.childNodes,r=0,n=e.length;r<n;r++)if(void 0===e[r].data)return e[r].cloneNode(!0)},i=function(t){if("string"==typeof t){if(/<tr[\s>]/g.exec(t)){var e=document.createElement("tbody");return e.innerHTML=t,e.firstElementChild}if(-1!==t.indexOf("<")){var r=document.createElement("div");return r.innerHTML=t,r.firstElementChild}}},a=function(e,r,n){var s=void 0,i=function(e){for(var r=0,n=t.valueNames.length;r<n;r++){var s=t.valueNames[r];if(s.data){for(var i=s.data,a=0,o=i.length;a<o;a++)if(i[a]===e)return{data:e}}else{if(s.attr&&s.name&&s.name==e)return s;if(s===e)return e}}}(r);i&&(i.data?e.elm.setAttribute("data-"+i.data,n):i.attr&&i.name?(s=t.utils.getByClass(e.elm,i.name,!0))&&s.setAttribute(i.attr,n):(s=t.utils.getByClass(e.elm,i,!0))&&(s.innerHTML=n))};this.get=function(e,n){r.create(e);for(var s={},i=0,a=n.length;i<a;i++){var o=void 0,l=n[i];if(l.data)for(var u=0,c=l.data.length;u<c;u++)s[l.data[u]]=t.utils.getAttribute(e.elm,"data-"+l.data[u]);else l.attr&&l.name?(o=t.utils.getByClass(e.elm,l.name,!0),s[l.name]=o?t.utils.getAttribute(o,l.attr):""):(o=t.utils.getByClass(e.elm,l,!0),s[l]=o?o.innerHTML:"")}return s},this.set=function(t,e){if(!r.create(t))for(var n in e)e.hasOwnProperty(n)&&a(t,n,e[n])},this.create=function(t){return void 0===t.elm&&(t.elm=e(t.values()),r.set(t,t.values()),!0)},this.remove=function(e){e.elm.parentNode===t.list&&t.list.removeChild(e.elm)},this.show=function(e){r.create(e),t.list.appendChild(e.elm)},this.hide=function(e){void 0!==e.elm&&e.elm.parentNode===t.list&&t.list.removeChild(e.elm)},this.clear=function(){if(t.list.hasChildNodes())for(;t.list.childNodes.length>=1;)t.list.removeChild(t.list.firstChild)},function(){var r;if("function"!=typeof t.item){if(!(r="string"==typeof t.item?-1===t.item.indexOf("<")?document.getElementById(t.item):i(t.item):s()))throw new Error("The list needs to have at least one item on init otherwise you'll have to add a template.");r=n(r,t.valueNames),e=function(){return r.cloneNode(!0)}}else e=function(e){var r=t.item(e);return i(r)}}()};t.exports=function(t){return new e(t)}},"./src/utils/classes.js":function(t,e,r){var n=r("./src/utils/index-of.js"),s=/\s+/;Object.prototype.toString;function i(t){if(!t||!t.nodeType)throw new Error("A DOM element reference is required");this.el=t,this.list=t.classList}t.exports=function(t){return new i(t)},i.prototype.add=function(t){if(this.list)return this.list.add(t),this;var e=this.array();return~n(e,t)||e.push(t),this.el.className=e.join(" "),this},i.prototype.remove=function(t){if(this.list)return this.list.remove(t),this;var e=this.array(),r=n(e,t);return~r&&e.splice(r,1),this.el.className=e.join(" "),this},i.prototype.toggle=function(t,e){return this.list?(void 0!==e?e!==this.list.toggle(t,e)&&this.list.toggle(t):this.list.toggle(t),this):(void 0!==e?e?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this)},i.prototype.array=function(){var t=(this.el.getAttribute("class")||"").replace(/^\s+|\s+$/g,"").split(s);return""===t[0]&&t.shift(),t},i.prototype.has=i.prototype.contains=function(t){return this.list?this.list.contains(t):!!~n(this.array(),t)}},"./src/utils/events.js":function(t,e,r){var n=window.addEventListener?"addEventListener":"attachEvent",s=window.removeEventListener?"removeEventListener":"detachEvent",i="addEventListener"!==n?"on":"",a=r("./src/utils/to-array.js");e.bind=function(t,e,r,s){for(var o=0,l=(t=a(t)).length;o<l;o++)t[o][n](i+e,r,s||!1)},e.unbind=function(t,e,r,n){for(var o=0,l=(t=a(t)).length;o<l;o++)t[o][s](i+e,r,n||!1)},e.debounce=function(t,e,r){var n;return e?function(){var s=this,i=arguments,a=function(){n=null,r||t.apply(s,i)},o=r&&!n;clearTimeout(n),n=setTimeout(a,e),o&&t.apply(s,i)}:t}},"./src/utils/extend.js":function(t){t.exports=function(t){for(var e,r=Array.prototype.slice.call(arguments,1),n=0;e=r[n];n++)if(e)for(var s in e)t[s]=e[s];return t}},"./src/utils/fuzzy.js":function(t){t.exports=function(t,e,r){var n=r.location||0,s=r.distance||100,i=r.threshold||.4;if(e===t)return!0;if(e.length>32)return!1;var a=n,o=function(){var t,r={};for(t=0;t<e.length;t++)r[e.charAt(t)]=0;for(t=0;t<e.length;t++)r[e.charAt(t)]|=1<<e.length-t-1;return r}();function l(t,r){var n=t/e.length,i=Math.abs(a-r);return s?n+i/s:i?1:n}var u=i,c=t.indexOf(e,a);-1!=c&&(u=Math.min(l(0,c),u),-1!=(c=t.lastIndexOf(e,a+e.length))&&(u=Math.min(l(0,c),u)));var f,h,d=1<<e.length-1;c=-1;for(var v,g=e.length+t.length,m=0;m<e.length;m++){for(f=0,h=g;f<h;)l(m,a+h)<=u?f=h:g=h,h=Math.floor((g-f)/2+f);g=h;var p=Math.max(1,a-h+1),y=Math.min(a+h,t.length)+e.length,C=Array(y+2);C[y+1]=(1<<m)-1;for(var b=y;b>=p;b--){var j=o[t.charAt(b-1)];if(C[b]=0===m?(C[b+1]<<1|1)&j:(C[b+1]<<1|1)&j|(v[b+1]|v[b])<<1|1|v[b+1],C[b]&d){var x=l(m,b-1);if(x<=u){if(u=x,!((c=b-1)>a))break;p=Math.max(1,2*a-c)}}}if(l(m+1,a)>u)break;v=C}return!(c<0)}},"./src/utils/get-attribute.js":function(t){t.exports=function(t,e){var r=t.getAttribute&&t.getAttribute(e)||null;if(!r)for(var n=t.attributes,s=n.length,i=0;i<s;i++)void 0!==n[i]&&n[i].nodeName===e&&(r=n[i].nodeValue);return r}},"./src/utils/get-by-class.js":function(t){t.exports=function(t,e,r,n){return(n=n||{}).test&&n.getElementsByClassName||!n.test&&document.getElementsByClassName?function(t,e,r){return r?t.getElementsByClassName(e)[0]:t.getElementsByClassName(e)}(t,e,r):n.test&&n.querySelector||!n.test&&document.querySelector?function(t,e,r){return e="."+e,r?t.querySelector(e):t.querySelectorAll(e)}(t,e,r):function(t,e,r){for(var n=[],s=t.getElementsByTagName("*"),i=s.length,a=new RegExp("(^|\\s)"+e+"(\\s|$)"),o=0,l=0;o<i;o++)if(a.test(s[o].className)){if(r)return s[o];n[l]=s[o],l++}return n}(t,e,r)}},"./src/utils/index-of.js":function(t){var e=[].indexOf;t.exports=function(t,r){if(e)return t.indexOf(r);for(var n=0,s=t.length;n<s;++n)if(t[n]===r)return n;return-1}},"./src/utils/to-array.js":function(t){t.exports=function(t){if(void 0===t)return[];if(null===t)return[null];if(t===window)return[window];if("string"==typeof t)return[t];if(function(t){return"[object Array]"===Object.prototype.toString.call(t)}(t))return t;if("number"!=typeof t.length)return[t];if("function"==typeof t&&t instanceof Function)return[t];for(var e=[],r=0,n=t.length;r<n;r++)(Object.prototype.hasOwnProperty.call(t,r)||r in t)&&e.push(t[r]);return e.length?e:[]}},"./src/utils/to-string.js":function(t){t.exports=function(t){return t=(t=null===(t=void 0===t?"":t)?"":t).toString()}},"./node_modules/string-natural-compare/natural-compare.js":function(t){"use strict";var e,r,n=0;function s(t){return t>=48&&t<=57}function i(t,e){for(var i=(t+="").length,a=(e+="").length,o=0,l=0;o<i&&l<a;){var u=t.charCodeAt(o),c=e.charCodeAt(l);if(s(u)){if(!s(c))return u-c;for(var f=o,h=l;48===u&&++f<i;)u=t.charCodeAt(f);for(;48===c&&++h<a;)c=e.charCodeAt(h);for(var d=f,v=h;d<i&&s(t.charCodeAt(d));)++d;for(;v<a&&s(e.charCodeAt(v));)++v;var g=d-f-v+h;if(g)return g;for(;f<d;)if(g=t.charCodeAt(f++)-e.charCodeAt(h++))return g;o=d,l=v}else{if(u!==c)return u<n&&c<n&&-1!==r[u]&&-1!==r[c]?r[u]-r[c]:u-c;++o,++l}}return o>=i&&l<a&&i>=a?-1:l>=a&&o<i&&a>=i?1:i-a}i.caseInsensitive=i.i=function(t,e){return i((""+t).toLowerCase(),(""+e).toLowerCase())},Object.defineProperties(i,{alphabet:{get:function(){return e},set:function(t){r=[];var s=0;if(e=t)for(;s<e.length;s++)r[e.charCodeAt(s)]=s;for(n=r.length,s=0;s<n;s++)void 0===r[s]&&(r[s]=-1)}}}),t.exports=i}},e={};return function r(n){if(e[n])return e[n].exports;var s=e[n]={exports:{}};return t[n](s,s.exports,r),s.exports}("./src/index.js")}();


const lightIcon =
"<svg xmlns='http://www.w3.org/2000/svg' width='1.75em' height='1.75em' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='4' /><path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7' /></svg>";

const darkIcon =
"<svg xmlns='http://www.w3.org/2000/svg' width='1.75em' height='1.75em' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z' /></svg>";

const uncheckIcon =
"<svg xmlns='http://www.w3.org/2000/svg' width='1.75em' height='1.75em' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z' /></svg>";
const checkIcon =
"<svg xmlns='http://www.w3.org/2000/svg' width='1.75em' height='1.75em' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z' /></svg>";


let color1 = "253, 58, 74";
let color2 = "245, 128, 37";
let color3 = "255, 167, 0";
let color4 = "123, 113, 81";
let color5 = "91, 170, 9";
let color6 = "26, 152, 90";
let color7 = "59, 168, 221";
let color8 = "0, 120, 215";
let color9 = "139, 102, 204";
let color10 = "228, 27, 144";

let c1 = "cat1";
let c2 = "cat2";
let c3 = "cat3";
let c4 = "cat4";
let c5 = "cat5";
let c6 = "cat6";
let c7 = "cat7";
let c8 = "cat8";
let c9 = "lanthanides";
let c10 = "actinides";
let naVal = "na";
let yesVal = "yes";
let noVal = "no";
let gas = "phaseGas";
let sld = "phaseSolid";
let lqd = "phaseLiquid";
let unw = "unknown";
let crsSH = "crystalSH";
let crsFCC = "crystalFCC";
let crsBCC = "crystalBCC";
let crsBCM = "crystalBCM";
let crsFCO = "crystalFCO";
let crsBCO = "crystalBCO";
let crsSTG = "crystalSTG";
let crsTP = "crystalTP";
let crsSTC = "crystalSTC";
let crsSC = "crystalSC";
let crsSO = "crystalSO";
let crsSM = "crystalSM";
let crsCT = "crystalCT";

let s1 = "<sup>1</sup>";
let s2 = "<sup>2</sup>";
let s3 = "<sup>3</sup>";
let s4 = "<sup>4</sup>";
let s5 = "<sup>5</sup>";
let s6 = "<sup>6</sup>";
let s7 = "<sup>7</sup>";
let s8 = "<sup>8</sup>";
let s9 = "<sup>9</sup>";
let s10 = "<sup>10</sup>";
let s11 = "<sup>11</sup>";
let s12 = "<sup>12</sup>";
let s13 = "<sup>13</sup>";
let s14 = "<sup>14</sup>";
let l3 = "2, 8, 18";
let l4 = "2, 8, 18, 32";
let l5 = "2, 8, 18, 32, 32";
let l6 = "2, 8, 18, 32, 32, 18";
let pc6 = "×10<sup>-6</sup>%";
let pc7 = "×10<sup>-7</sup>%";
let pc8 = "×10<sup>-8</sup>%";
let pc9 = "×10<sup>-9</sup>%";

let langValue = document.documentElement.getAttribute('lang'), defaultPunc

if (langValue === "sq" || langValue === "az" || langValue === "be" || langValue === "bg" || langValue === "ca" || langValue === "hr" ||
langValue === "cs" || langValue === "da" || langValue === "nl" || langValue === "et" || langValue === "fi" || langValue === "fr" ||
langValue === "de" || langValue === "el" || langValue === "hu" || langValue === "id" || langValue === "it" || langValue === "kk" ||
langValue === "lv" || langValue === "lt" || langValue === "mk" || langValue === "nn" || langValue === "ph" || langValue === "pt" ||
langValue === "ro" || langValue === "ru" || langValue === "sr" || langValue === "sk" || langValue === "sl" || langValue === "es" ||
langValue === "sv" || langValue === "tr" || langValue === "uk" || langValue === "uz" || langValue === "vi")
  defaultPunc = "comma";
else
  defaultPunc = "dot";

let rawData = []

if(defaultPunc === "comma")
{	
 rawData = [
  { id: "ele1", num: "1", nme: "hydrogen", sym: "H", grp: 1, prd: 1, blk: "s", aWt: "1,00794", ctg: c5, clr: "colorLess", rdo: noVal, stc: crsSH, phs: gas, dns: "0,00008988", mlt: -259.14, bln: -252.87,  fsn: "0,558", vpn: "0,452", spc: "14,304", elc: "1", cnf: "1s" + s1, aRd: "53", cRd: "31", eNg: "2,2", ion: "13,5984", trm: "0,001815", oxi: "-1, 1", vol: "14,4", crt: "0,15%", uni: "75%", yr: "1766", mNo: 1, p: 1, e: 1, n: 0, cid: "783", cas: "1333-74-0"},
  { id: "ele2", num: "2", nme: "helium", sym: "He", grp: 18, prd: 1, blk: "s", aWt: "4,002602", ctg: c8, clr: "colorLess", rdo: noVal, stc: crsFCC, phs: gas, dns: "0,0001785", mlt: -272.2, bln: -268.93,  fsn: "0,02", vpn: "0,083", spc: "5,193", elc: "2", cnf: "1s" + s2, aRd: "31", cRd: "28", eNg: "-", ion: "24,5874", trm: "0,00152", oxi: "0", vol: "27,2", crt: "5,5" + pc7, uni: "23%", yr: "1868", mNo: 4, p: 2, e: 2, n: 2, cid: "23987", cas: "7440-59-7"},
  { id: "ele3", num: "3", nme: "lithium", sym: "Li", grp: 1, prd: 2, blk: "s", aWt: "6,941", ctg: c1, clr: "colorSilver", rdo: noVal, stc: crsBCC, phs: sld, dns: "0,534", mlt: 180.54, bln: 1342,  fsn: "3", vpn: "147", spc: "3,582", elc: "2, 1", cnf: "[He] 2s" + s1, aRd: "152", cRd: "128", eNg: "0,98", ion: "5,3917", trm: "0,847", oxi: "1", vol: "13,10", crt: "0,0017%", uni: "6" + pc7, yr: "1817", mNo: 7, p: 3, e: 3, n: 4, cid: "3028194", cas: "7439-93-2"},
  { id: "ele4", num: "4", nme: "beryllium", sym: "Be", grp: 2, prd: 2, blk: "s", aWt: "9,012182", ctg: c2, clr: "colorSlateGray", rdo: noVal, stc: crsSH, phs: sld, dns: "1,85", mlt: 1287, bln: 2469,  fsn: "7,95", vpn: "297", spc: "1,825", elc: "2, 2", cnf: "[He] 2s" + s2, aRd: "112", cRd: "96", eNg: "1,57", ion: "9,3227", trm: "2,01", oxi: "1, 2", vol: "4,9", crt: "0,00019%", uni: "1" + pc7, yr: "1798", mNo: 9, p: 4, e: 4, n: 5, cid: "5460467", cas: "7440-41-7"},
  { id: "ele5", num: "5", nme: "boron", sym: "B", grp: 13, prd: 2, blk: "p", aWt: "10,811", ctg: c6, clr: "colorBlack", rdo: noVal, stc: crsSTG, phs: sld, dns: "2,34", mlt: 2076, bln: 3927,  fsn: "50", vpn: "507", spc: "1,026", elc: "2, 3", cnf: "[He] 2s" + s2 + " 2p" + s1, aRd: "90", cRd: "84", eNg: "2,04", ion: "8,298", trm: "0,274", oxi: "1, 2, 3", vol: "4,6", crt: "0,00086%", uni: "1" + pc7, yr: "1808", mNo: 11, p: 5, e: 5, n: 6, cid: "5462311", cas: "7440-42-8"},
  { id: "ele6", num: "6", nme: "carbon", sym: "C", grp: 14, prd: 2, blk: "p", aWt: "12,0107", ctg: c5, clr: "colorBlack", rdo: noVal, stc: crsSH, phs: sld, dns: "2,267", mlt: 3675, bln: 4027,  fsn: "105", vpn: "715", spc: "0,709", elc: "2, 4", cnf: "[He] 2s" + s2 + " 2p" + s2, aRd: "67", cRd: "77", eNg: "2,55", ion: "11,2603", trm: "1,29", oxi: "-4, -3, -2, -1, 1, 2, 3, 4", vol: "5,31", crt: "0,18%", uni: "0,5%", yr: "3750" + " BC", mNo: 12, p: 6, e: 6, n: 6, cid: "5462310", cas: "7440-44-0"},
  { id: "ele7", num: "7", nme: "nitrogen", sym: "N", grp: 15, prd: 2, blk: "p", aWt: "14,0067", ctg: c5, clr: "colorLess", rdo: noVal, stc: crsSH, phs: gas, dns: "0,0012506", mlt: -210, bln: -195.79,  fsn: "0,36", vpn: "2,79", spc: "1,04", elc: "2, 5", cnf: "[He] 2s" + s2 + " 2p" + s3, aRd: "56", cRd: "71", eNg: "3,04", ion: "14,5341", trm: "0,0002598", oxi: "-3, -2, -1, 1, 2, 3, 4, 5", vol: "17,3", crt: "0,002%", uni: "0,1%", yr: "1772", mNo: 14, p: 7, e: 7, n: 7, cid: "947", cas: "7727-37-9"},
  { id: "ele8", num: "8", nme: "oxygen", sym: "O", grp: 16, prd: 2, blk: "p", aWt: "15,9994", ctg: c5, clr: "colorLess", rdo: noVal, stc: crsBCM, phs: gas, dns: "0,001429", mlt: -218.79, bln: -182.95,  fsn: "0,222", vpn: "3,41", spc: "0,918", elc: "2, 6", cnf: "[He] 2s" + s2 + " 2p" + s4, aRd: "48", cRd: "66", eNg: "3,44", ion: "13,6181", trm: "0,0002674", oxi: "-2, -1, 1, 2", vol: "14,0", crt: "46%", uni: "1%", yr: "1771", mNo: 16, p: 8, e: 8, n: 8, cid: "977", cas: "7782-44-7"},
  { id: "ele9", num: "9", nme: "fluorine", sym: "F", grp: 17, prd: 2, blk: "p", aWt: "18,9984032", ctg: c7, clr: "colorLess", rdo: noVal, stc: crsBCM, phs: gas, dns: "0,001696", mlt: -219.62, bln: -188.12,  fsn: "0,26", vpn: "3,27", spc: "0,824", elc: "2, 7", cnf: "[He] 2s" + s2 + " 2p" + s5, aRd: "42", cRd: "64", eNg: "3,98", ion: "17,4228", trm: "0,000279", oxi: "-1", vol: "17,1", crt: "0,054%", uni: "0,00004%", yr: "1810", mNo: 19, p: 9, e: 9, n: 10, cid: "24524", cas: "7782-41-4"},
  { id: "ele10", num: "10", nme: "neon", sym: "Ne", grp: 18, prd: 2, blk: "p", aWt: "20,1797", ctg: c8, clr: "colorLess", rdo: noVal, stc: crsFCC, phs: gas, dns: "0,0008999", mlt: -248.59, bln: -246.08,  fsn: "0,34", vpn: "1,75", spc: "1,03", elc: "2, 8", cnf: "[He] 2s" + s2 + " 2p" + s6, aRd: "38", cRd: "58", eNg: "-", ion: "21,5645", trm: "0,000493", oxi: "0", vol: "16,7", crt: "3" + pc7, uni: "0,13%", yr: "1898", mNo: 20, p: 10, e: 10, n: 10, cid: "23935", cas: "7440-01-9"},
  { id: "ele11", num: "11", nme: "sodium", sym: "Na", grp: 1, prd: 3, blk: "s", aWt: "22,98976928", ctg: c1, clr: "colorSilver", rdo: noVal, stc: crsBCC, phs: sld, dns: "0,971", mlt: 97.72, bln: 883,  fsn: "2,6", vpn: "97,7", spc: "1,228", elc: "2, 8, 1", cnf: "[Ne] 3s" + s1, aRd: "186", cRd: "166", eNg: "0,93", ion: "5,1391", trm: "1,41", oxi: "-1, 1", vol: "23,7", crt: "2,3%", uni: "0,002%", yr: "1807", mNo: 23, p: 11, e: 11, n: 12, cid: "5360545", cas: "7440-23-5"},
  { id: "ele12", num: "12", nme: "magnesium", sym: "Mg", grp: 2, prd: 3, blk: "s", aWt: "24,305", ctg: c2, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "1,738", mlt: 650, bln: 1090,  fsn: "8,7", vpn: "128", spc: "1,023", elc: "2, 8, 2", cnf: "[Ne] 3s" + s2, aRd: "160", cRd: "141", eNg: "1,31", ion: "7,6462", trm: "1,56", oxi: "1, 2", vol: "13,97", crt: "2,9%", uni: "0,06%", yr: "1755", mNo: 24, p: 12, e: 12, n: 12, cid: "5462224", cas: "7439-95-4"},
  { id: "ele13", num: "13", nme: "aluminium", sym: "Al", grp: 13, prd: 3, blk: "p", aWt: "26,9815386", ctg: c4, clr: "colorSilver", rdo: noVal, stc: crsFCC, phs: sld, dns: "2,698", mlt: 660.32, bln: 2519,  fsn: "10,7", vpn: "293", spc: "0,897", elc: "2, 8, 3", cnf: "[Ne] 3s" + s2 + " 3p" + s1, aRd: "143", cRd: "121", eNg: "1,61", ion: "5,9858", trm: "2,37", oxi: "1, 3", vol: "9,98", crt: "8,1%", uni: "0,005%", yr: "1825", mNo: 27, p: 13, e: 13, n: 14, cid: "5359268", cas: "7429-90-5"},
  { id: "ele14", num: "14", nme: "silicon", sym: "Si", grp: 14, prd: 3, blk: "p", aWt: "28,0855", ctg: c6, clr: "colorGray", rdo: noVal, stc: crsTP, phs: sld, dns: "2,3296", mlt: 1414, bln: 3265,  fsn: "50,2", vpn: "359", spc: "0,705", elc: "2, 8, 4", cnf: "[Ne] 3s" + s2 + " 3p" + s2, aRd: "111", cRd: "111", eNg: "1,9", ion: "8,1517", trm: "1,48", oxi: "-4, -3, -2, -1, 1, 2, 3, 4", vol: "12,1", crt: "27%", uni: "0,07%", yr: "1824", mNo: 28, p: 14, e: 14, n: 14, cid: "5461123", cas: "7440-21-3"},
  { id: "ele15", num: "15", nme: "phosphorus", sym: "P", grp: 15, prd: 3, blk: "p", aWt: "30,973762", ctg: c5, clr: "colorLess", rdo: noVal, stc: crsSTC, phs: sld, dns: "1,82", mlt: 44.1, bln: 279.85,  fsn: "0,64", vpn: "12,4", spc: "0,769", elc: "2, 8, 5", cnf: "[Ne] 3s" + s2 + " 3p" + s3, aRd: "98", cRd: "107", eNg: "2,19", ion: "10,4867", trm: "0,00235", oxi: "-3, -2, -1, 1, 2, 3, 4, 5", vol: "17,0", crt: "0,099%", uni: "0,0007%", yr: "1669", mNo: 31, p: 15, e: 15, n: 16, cid: "5462309", cas: "7723-14-0"},
  { id: "ele16", num: "16", nme: "sulfur", sym: "S", grp: 16, prd: 3, blk: "p", aWt: "32,065", ctg: c5, clr: "colorYellow", rdo: noVal, stc: crsFCO, phs: sld, dns: "2,067", mlt: 115.21, bln: 444.65,  fsn: "1,73", vpn: "9,8", spc: "0,71", elc: "2, 8, 6", cnf: "[Ne] 3s" + s2 + " 3p" + s4, aRd: "88", cRd: "105", eNg: "2,58", ion: "10,36", trm: "0,00269", oxi: "-2, -1, 1, 2, 3, 4, 5, 6", vol: "15,5", crt: "0,042%", uni: "0,05%", yr: "500" + " BC", mNo: 32, p: 16, e: 16, n: 16, cid: "5362487", cas: "7704-34-9"},
  { id: "ele17", num: "17", nme: "chlorine", sym: "Cl", grp: 17, prd: 3, blk: "p", aWt: "35,453", ctg: c7, clr: "colorYellow", rdo: noVal, stc: crsBCO, phs: gas, dns: "0,003214", mlt: -101.5, bln: -34.04,  fsn: "3,2", vpn: "10,2", spc: "0,479", elc: "2, 8, 7", cnf: "[Ne] 3s" + s2 + " 3p" + s5, aRd: "79", cRd: "102", eNg: "3,16", ion: "12,9676", trm: "0,000089", oxi: "-1, 1, 2, 3, 4, 5, 6, 7", vol: "22,7", crt: "0,017%", uni: "0,0001%", yr: "1774", mNo: 35, p: 17, e: 17, n: 18, cid: "24526", cas: "7782-50-5"},
  { id: "ele18", num: "18", nme: "argon", sym: "Ar", grp: 18, prd: 3, blk: "p", aWt: "39,948", ctg: c8, clr: "colorLess", rdo: noVal, stc: crsFCC, phs: gas, dns: "0,0017837", mlt: -189.35, bln: -185.85,  fsn: "1,18", vpn: "6,5", spc: "0,52", elc: "2, 8, 8", cnf: "[Ne] 3s" + s2 + " 3p" + s6, aRd: "71", cRd: "106", eNg: "-", ion: "15,7596", trm: "0,0001772", oxi: "0", vol: "22,4", crt: "0,00015%", uni: "0,02%", yr: "1894", mNo: 40, p: 18, e: 18, n: 22, cid: "23968", cas: "7440-37-1"},
  { id: "ele19", num: "19", nme: "potassium", sym: "K", grp: 1, prd: 4, blk: "s", aWt: "39,0983", ctg: c1, clr: "colorSilver", rdo: noVal, stc: crsBCC, phs: sld, dns: "0,862", mlt: 63.38, bln: 759,  fsn: "2,33", vpn: "76,9", spc: "0,757", elc: "2, 8, 8, 1", cnf: "[Ar] 4s" + s1, aRd: "227", cRd: "203", eNg: "0,82", ion: "4,3407", trm: "1,024", oxi: "-1, 1", vol: "45,46", crt: "1,5%", uni: "0,0003%", yr: "1807", mNo: 39, p: 19, e: 19, n: 20, cid: "5462222", cas: "7440-09-7"},
  { id: "ele20", num: "20", nme: "calcium", sym: "Ca", grp: 2, prd: 4, blk: "s", aWt: "40,078", ctg: c2, clr: "colorSilver", rdo: noVal, stc: crsFCC, phs: sld, dns: "1,54", mlt: 842, bln: 1484,  fsn: "8,54", vpn: "155", spc: "0,647", elc: "2, 8, 8, 2", cnf: "[Ar] 4s" + s2, aRd: "197", cRd: "176", eNg: "1,00", ion: "6,1132", trm: "2,01", oxi: "1, 2", vol: "29,9", crt: "5%", uni: "0,007%", yr: "1808", mNo: 40, p: 20, e: 20, n: 20, cid: "5460341", cas: "7440-70-2"},
  { id: "ele21", num: "21", nme: "scandium", sym: "Sc", grp: 3, prd: 4, blk: "d", aWt: "44,955912", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "2,989", mlt: 1541, bln: 2836,  fsn: "16", vpn: "318", spc: "0,568", elc: "2, 8, 9, 2", cnf: "[Ar] 3d" + s1 + " 4s" + s2, aRd: "162", cRd: "170", eNg: "1,36", ion: "6,5615", trm: "0,158", oxi: "1, 2, 3", vol: "15,0", crt: "0,0026%", uni: "3" + pc6, yr: "1879", mNo: 45, p: 21, e: 21, n: 24, cid: "23952", cas: "7440-20-2"},
  { id: "ele22", num: "22", nme: "titanium", sym: "Ti", grp: 4, prd: 4, blk: "d", aWt: "47,867", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "4,54", mlt: 1668, bln: 3287,  fsn: "18,7", vpn: "425", spc: "0,523", elc: "2, 8, 10, 2", cnf: "[Ar] 3d" + s2 + " 4s" + s2, aRd: "147", cRd: "160", eNg: "1,54", ion: "6,8281", trm: "0,219", oxi: "-1, 2, 3, 4", vol: "10,64", crt: "0,66%", uni: "0,0003%", yr: "1791", mNo: 48, p: 22, e: 22, n: 26, cid: "23963", cas: "7440-32-6"},
  { id: "ele23", num: "23", nme: "vanadium", sym: "V", grp: 5, prd: 4, blk: "d", aWt: "50,9415", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsBCC, phs: sld, dns: "6,11", mlt: 1910, bln: 3407,  fsn: "22,8", vpn: "453", spc: "0,489", elc: "2, 8, 11, 2", cnf: "[Ar] 3d" + s3 + " 4s" + s2, aRd: "134", cRd: "153", eNg: "1,63", ion: "6,8281", trm: "0,307", oxi: "-1, 1, 2, 3, 4, 5", vol: "8,78", crt: "0,019%", uni: "0,0001%", yr: "1801", mNo: 51, p: 23, e: 23, n: 28, cid: "23990", cas: "7440-62-2"},
  { id: "ele24", num: "24", nme: "chromium", sym: "Cr", grp: 6, prd: 4, blk: "d", aWt: "51,9961", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsBCC, phs: sld, dns: "7,15", mlt: 1907, bln: 2671,  fsn: "20,5", vpn: "339", spc: "0,449", elc: "2, 8, 13, 1", cnf: "[Ar] 3d" + s5 + " 4s" + s1, aRd: "128", cRd: "139", eNg: "1,66", ion: "6,7665", trm: "0,937", oxi: "-2, -1, 1, 2, 3, 4, 5, 6", vol: "7,23", crt: "0,014%", uni: "0,0015%", yr: "1797", mNo: 52, p: 24, e: 24, n: 28, cid: "23976", cas: "7440-47-3"},
  { id: "ele25", num: "25", nme: "manganese", sym: "Mn", grp: 7, prd: 4, blk: "d", aWt: "54,938045", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsBCC, phs: sld, dns: "7,44", mlt: 1246, bln: 2061,  fsn: "13,2", vpn: "220", spc: "0,479", elc: "2, 8, 13, 2", cnf: "[Ar] 3d" + s5 + " 4s" + s2, aRd: "127", cRd: "139", eNg: "1,55", ion: "7,434", trm: "0,0782", oxi: "-3, -2, -1, 1, 2, 3, 4, 5, 6, 7", vol: "7,4", crt: "0,11%", uni: "0,0008%", yr: "1774", mNo: 55, p: 25, e: 25, n: 30, cid: "23930", cas: "7439-96-5"},
  { id: "ele26", num: "26", nme: "iron", sym: "Fe", grp: 8, prd: 4, blk: "d", aWt: "55,845", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsBCC, phs: sld, dns: "7,874", mlt: 1538, bln: 2861,  fsn: "13,8", vpn: "347", spc: "0,449", elc: "2, 8, 14, 2", cnf: "[Ar] 3d" + s6 + " 4s" + s2, aRd: "126", cRd: "132", eNg: "1,83", ion: "7,9024", trm: "0,802", oxi: "-2, -1, 1, 2, 3, 4, 5, 6, 7, 8", vol: "7,1", crt: "6,3%", uni: "0,11%", yr: "2000" + " BC", mNo: 56, p: 26, e: 26, n: 30, cid: "23925", cas: "7439-89-6"},
  { id: "ele27", num: "27", nme: "cobalt", sym: "Co", grp: 9, prd: 4, blk: "d", aWt: "58,933195", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsSH, phs: sld, dns: "8,86", mlt: 1495, bln: 2927,  fsn: "16,2", vpn: "375", spc: "0,421", elc: "2, 8, 15, 2", cnf: "[Ar] 3d" + s7 + " 4s" + s2, aRd: "125", cRd: "126", eNg: "1,88", ion: "7,881", trm: "1", oxi: "-1, 1, 2, 3, 4, 5", vol: "6,7", crt: "0,003%", uni: "0,0003%", yr: "1735", mNo: 59, p: 27, e: 27, n: 32, cid: "104730", cas: "7440-48-4"},
  { id: "ele28", num: "28", nme: "nickel", sym: "Ni", grp: 10, prd: 4, blk: "d", aWt: "58,6934", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsFCC, phs: sld, dns: "8,912", mlt: 1455, bln: 2913,  fsn: "17,2", vpn: "378", spc: "0,444", elc: "2, 8, 16, 2", cnf: "[Ar] 3d" + s8 + " 4s" + s2, aRd: "124", cRd: "124", eNg: "1,91", ion: "7,6398", trm: "0,907", oxi: "-1, 1, 2, 3, 4", vol: "6,59", crt: "0,0089%", uni: "0,006%", yr: "1751", mNo: 59, p: 28, e: 28, n: 31, cid: "935", cas: "7440-02-0"},
  { id: "ele29", num: "29", nme: "copper", sym: "Cu", grp: 11, prd: 4, blk: "d", aWt: "63,546", ctg: c3, clr: "colorCopper", rdo: noVal, stc: crsFCC, phs: sld, dns: "8,96", mlt: 1084.6, bln: 2562,  fsn: "13,1", vpn: "300", spc: "0,385", elc: l3 + ", 1", cnf: "[Ar] 3d" + s10 + " 4s" + s1, aRd: "128", cRd: "132", eNg: "1,9", ion: "7,7264", trm: "4,01", oxi: "1, 2, 3, 4", vol: "7,1", crt: "0,0068%", uni: "6" + pc6, yr: "8000" + " BC", mNo: 64, p: 29, e: 29, n: 35, cid: "23978", cas: "7440-50-8"},
  { id: "ele30", num: "30", nme: "zinc", sym: "Zn", grp: 12, prd: 4, blk: "d", aWt: "65,38", ctg: c3, clr: "colorSlateGray", rdo: noVal, stc: crsSH, phs: sld, dns: "7,134", mlt: 419.53, bln: 907,  fsn: "7,35", vpn: "119", spc: "0,388", elc: l3 + ", 2", cnf: "[Ar] 3d" + s10 + " 4s" + s2, aRd: "134", cRd: "122", eNg: "1,65", ion: "9,3942", trm: "1,16", oxi: "1, 2", vol: "9,2", crt: "0,0078%", uni: "0,00003%", yr: "1000" + " BC", mNo: 65, p: 30, e: 30, n: 35, cid: "23994", cas: "7440-66-6"},
  { id: "ele31", num: "31", nme: "gallium", sym: "Ga", grp: 13, prd: 4, blk: "p", aWt: "69,723", ctg: c4, clr: "colorSilver", rdo: noVal, stc: crsBCO, phs: sld, dns: "5,907", mlt: 29.76, bln: 2204,  fsn: "5,59", vpn: "256", spc: "0,371", elc: l3 + ", 3", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s1, aRd: "135", cRd: "122", eNg: "1,81", ion: "5,9993", trm: "0,406", oxi: "1, 2, 3", vol: "11,8", crt: "0,0019%", uni: "1" + pc6, yr: "1875", mNo: 70, p: 31, e: 31, n: 39, cid: "5360835", cas: "7440-55-3"},
  { id: "ele32", num: "32", nme: "germanium", sym: "Ge", grp: 14, prd: 4, blk: "p", aWt: "72,63", ctg: c6, clr: "colorGray", rdo: noVal, stc: crsFCC, phs: sld, dns: "5,323", mlt: 938.25, bln: 2833,  fsn: "31,8", vpn: "334", spc: "0,32", elc: l3 + ", 4", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s2, aRd: "122", cRd: "122", eNg: "2,01", ion: "7,8994", trm: "0,599", oxi: "-4, 1, 2, 3, 4", vol: "13,6", crt: "0,00014%", uni: "0,00002%", yr: "1886", mNo: 73, p: 32, e: 32, n: 41, cid: "6326954", cas: "7440-56-4"},
  { id: "ele33", num: "33", nme: "arsenic", sym: "As", grp: 15, prd: 4, blk: "p", aWt: "74,9216", ctg: c6, clr: "colorSilver", rdo: noVal, stc: crsSTG, phs: sld, dns: "5,776", mlt: 817, bln: 603,  fsn: "27,7", vpn: "32,4", spc: "0,329", elc: l3 + ", 5", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s3, aRd: "119", cRd: "119", eNg: "2,18", ion: "9,7886", trm: "0,502", oxi: "-3, 2, 3, 5", vol: "12,97", crt: "0,00021%", uni: "8" + pc7, yr: "2500" + " BC", mNo: 75, p: 33, e: 33, n: 42, cid: "5359596", cas: "7440-38-2"},
  { id: "ele34", num: "34", nme: "selenium", sym: "Se", grp: 16, prd: 4, blk: "p", aWt: "78,96", ctg: c5, clr: "colorGray", rdo: noVal, stc: crsSM, phs: sld, dns: "4,809", mlt: 221, bln: 685,  fsn: "5,4", vpn: "26", spc: "0,321", elc: l3 + ", 6", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s4, aRd: "120", cRd: "120", eNg: "2,55", ion: "9,7524", trm: "0,0204", oxi: "-2, 2, 4, 6", vol: "16,45", crt: "5" + pc6, uni: "3" + pc6, yr: "1817", mNo: 79, p: 34, e: 34, n: 45, cid: "6326970", cas: "7782-49-2"},
  { id: "ele35", num: "35", nme: "bromine", sym: "Br", grp: 17, prd: 4, blk: "p", aWt: "79,904", ctg: c7, clr: "colorRed", rdo: noVal, stc: crsBCO, phs: lqd, dns: "3,122", mlt: -7.2, bln: 58.8,  fsn: "5,8", vpn: "14,8", spc: "0,474", elc: l3 + ", 7", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s5, aRd: "120", cRd: "120", eNg: "2,96", ion: "11,8138", trm: "0,00122", oxi: "-1, 1, 3, 4, 5, 7", vol: "23,5", crt: "0,0003%", uni: "7" + pc7, yr: "1825", mNo: 80, p: 35, e: 35, n: 45, cid: "24408", cas: "7726-95-6"},
  { id: "ele36", num: "36", nme: "krypton", sym: "Kr", grp: 18, prd: 4, blk: "p", aWt: "83,798", ctg: c8, clr: "colorLess", rdo: noVal, stc: crsFCC, phs: gas, dns: "0,003733", mlt: -157.36, bln: -153.22,  fsn: "1,64", vpn: "9,02", spc: "0,248", elc: l3 + ", 8", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s6, aRd: "88", cRd: "116", eNg: "3,00", ion: "13,9996", trm: "0,0000949", oxi: "2", vol: "38,9", crt: "1,5" + pc8, uni: "4" + pc6, yr: "1898", mNo: 84, p: 36, e: 36, n: 48, cid: "5416", cas: "7439-90-9"},
  { id: "ele37", num: "37", nme: "rubidium", sym: "Rb", grp: 1, prd: 5, blk: "s", aWt: "85,4678", ctg: c1, clr: "colorSilver", rdo: noVal, stc: crsBCC, phs: sld, dns: "1,532", mlt: 39.31, bln: 688,  fsn: "2,19", vpn: "72", spc: "0,363", elc: l3 + ", 8, 1", cnf: "[Kr] 5s" + s1, aRd: "248", cRd: "220", eNg: "0,82", ion: "4,1771", trm: "0,582", oxi: "-1, 1", vol: "55,9", crt: "0,006%", uni: "1" + pc6, yr: "1861", mNo: 85, p: 37, e: 37, n: 48, cid: "5357696", cas: "7440-17-7"},
  { id: "ele38", num: "38", nme: "strontium", sym: "Sr", grp: 2, prd: 5, blk: "s", aWt: "87,62", ctg: c2, clr: "colorSilver", rdo: noVal, stc: crsFCC, phs: sld, dns: "2,64", mlt: 777, bln: 1382,  fsn: "8", vpn: "137", spc: "0,301", elc: l3 + ", 8, 2", cnf: "[Kr] 5s" + s2, aRd: "215", cRd: "195", eNg: "0,95", ion: "5,6949", trm: "0,353", oxi: "1, 2", vol: "33,7", crt: "0,036%", uni: "4" + pc6, yr: "1790", mNo: 88, p: 38, e: 38, n: 50, cid: "5359327", cas: "7440-24-6"},
  { id: "ele39", num: "39", nme: "yttrium", sym: "Y", grp: 3, prd: 5, blk: "d", aWt: "88,90585", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "4,469", mlt: 1526, bln: 3336,  fsn: "11,4", vpn: "380", spc: "0,298", elc: l3 + ", 9, 2", cnf: "[Kr] 4d" + s1 + " 5s" + s2, aRd: "180", cRd: "190", eNg: "1,22", ion: "6,2173", trm: "0,172", oxi: "1, 2, 3", vol: "19,8", crt: "0,0029%", uni: "7" + pc7, yr: "1794", mNo: 89, p: 39, e: 39, n: 50, cid: "23993", cas: "7440-65-5"},
  { id: "ele40", num: "40", nme: "zirconium", sym: "Zr", grp: 4, prd: 5, blk: "d", aWt: "91,224", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "6,506", mlt: 1855, bln: 4409,  fsn: "21", vpn: "580", spc: "0,278", elc: l3 + ", 10, 2", cnf: "[Kr] 4d" + s2 + " 5s" + s2, aRd: "160", cRd: "175", eNg: "1,33", ion: "6,6339", trm: "0,227", oxi: "1, 2, 3, 4", vol: "14,0", crt: "0,013%", uni: "5" + pc6, yr: "1789", mNo: 91, p: 40, e: 40, n: 51, cid: "23995", cas: "7440-67-7"},
  { id: "ele41", num: "41", nme: "niobium", sym: "Nb", grp: 5, prd: 5, blk: "d", aWt: "92,90638", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsBCC, phs: sld, dns: "8,57", mlt: 2477, bln: 4744,  fsn: "26,8", vpn: "690", spc: "0,265", elc: l3 + ", 12, 1", cnf: "[Kr] 4d" + s4 + " 5s" + s1, aRd: "146", cRd: "164", eNg: "1,6", ion: "6,7589", trm: "0,537", oxi: "-1, 2, 3, 4, 5", vol: "10,87", crt: "0,0017%", uni: "2" + pc7, yr: "1801", mNo: 93, p: 41, e: 41, n: 52, cid: "23936", cas: "7440-03-1"},
  { id: "ele42", num: "42", nme: "molybdenum", sym: "Mo", grp: 6, prd: 5, blk: "d", aWt: "95,96", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsBCC, phs: sld, dns: "10,22", mlt: 2623, bln: 4639,  fsn: "36", vpn: "600", spc: "0,251", elc: l3 + ", 13, 1", cnf: "[Kr] 4d" + s5 + " 5s" + s1, aRd: "139", cRd: "154", eNg: "2,16", ion: "7,0924", trm: "1,38", oxi: "-2, -1, 1, 2, 3, 4, 5, 6", vol: "9,4", crt: "0,00011%", uni: "5" + pc7, yr: "1778", mNo: 96, p: 42, e: 42, n: 54, cid: "23932", cas: "7439-98-7"},
  { id: "ele43", num: "43", nme: "technetium", sym: "Tc", grp: 7, prd: 5, blk: "d", aWt: "[98]", ctg: c3, clr: "colorSilver", rdo: yesVal, stc: crsSH, phs: sld, dns: "11,5", mlt: 2157, bln: 4265,  fsn: "23", vpn: "550", spc: "-", elc: l3 + ", 13, 2", cnf: "[Kr] 4d" + s5 + " 5s" + s2, aRd: "136", cRd: "147", eNg: "1,9", ion: "7,28", trm: "0,506", oxi: "-3, -1, 1, 2, 3, 4, 5, 6, 7", vol: "8,5", crt: naVal, uni: naVal, yr: "1937", mNo: 98, p: 43, e: 43, n: 55, cid: naVal, cas: "7440-26-8"},
  { id: "ele44", num: "44", nme: "ruthenium", sym: "Ru", grp: 8, prd: 5, blk: "d", aWt: "101,07", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "12,37", mlt: 2334, bln: 4150,  fsn: "25,7", vpn: "580", spc: "0,238", elc: l3 + ", 15, 1", cnf: "[Kr] 4d" + s7 + " 5s" + s1, aRd: "134", cRd: "146", eNg: "2,2", ion: "7,3605", trm: "1,17", oxi: "-2, 1, 2, 3, 4, 5, 6, 7, 8", vol: "8,3", crt: "9,9" + pc8, uni: "4" + pc7, yr: "1844", mNo: 101, p: 44, e: 44, n: 57, cid: "23950", cas: "7440-18-8"},
  { id: "ele45", num: "45", nme: "rhodium", sym: "Rh", grp: 9, prd: 5, blk: "d", aWt: "102,9055", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsFCC, phs: sld, dns: "12,41", mlt: 1964, bln: 3695,  fsn: "21,7", vpn: "495", spc: "0,243", elc: l3 + ", 16, 1", cnf: "[Kr] 4d" + s8 + " 5s" + s1, aRd: "134", cRd: "142", eNg: "2,28", ion: "7,4589", trm: "1,5", oxi: "-1, 1, 2, 3, 4, 5, 6", vol: "8,3", crt: "7" + pc8, uni: "6" + pc8, yr: "1803", mNo: 103, p: 45, e: 45, n: 58, cid: "23948", cas: "7440-16-6"},
  { id: "ele46", num: "46", nme: "palladium", sym: "Pd", grp: 10, prd: 5, blk: "d", aWt: "106,42", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsFCC, phs: sld, dns: "12,02", mlt: 1554.9, bln: 2963,  fsn: "16,7", vpn: "380", spc: "0,244", elc: l3 + ", 18", cnf: "[Kr] 4d" + s10, aRd: "137", cRd: "139", eNg: "2,2", ion: "8,3369", trm: "0,718", oxi: "2, 4", vol: "8,9", crt: "6,3" + pc7, uni: "2" + pc7, yr: "1803", mNo: 106, p: 46, e: 46, n: 60, cid: "23938", cas: "7440-05-3"},
  { id: "ele47", num: "47", nme: "silver", sym: "Ag", grp: 11, prd: 5, blk: "d", aWt: "107,8682", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsFCC, phs: sld, dns: "10,49", mlt: 961.78, bln: 2162,  fsn: "11,3", vpn: "255", spc: "0,235", elc: l3 + ", 18, 1", cnf: "[Kr] 4d" + s10 + " 5s" + s1, aRd: "144", cRd: "145", eNg: "1,93", ion: "7,5762", trm: "4,29", oxi: "1, 2, 3", vol: "10,3", crt: "7,9" + pc6, uni: "6" + pc8, yr: "3000" + " BC", mNo: 108, p: 47, e: 47, n: 61, cid: "23954", cas: "7440-22-4"},
  { id: "ele48", num: "48", nme: "cadmium", sym: "Cd", grp: 12, prd: 5, blk: "d", aWt: "112,411", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "8,69", mlt: 321.07, bln: 767,  fsn: "6,3", vpn: "100", spc: "0,232", elc: l3 + ", 18, 2", cnf: "[Kr] 4d" + s10 + " 5s" + s2, aRd: "151", cRd: "144", eNg: "1,69", ion: "8,9938", trm: "0,968", oxi: "1, 2", vol: "13,1", crt: "0,000015%", uni: "2" + pc7, yr: "1817", mNo: 112, p: 48, e: 48, n: 64, cid: "23973", cas: "7440-43-9"},
  { id: "ele49", num: "49", nme: "indium", sym: "In", grp: 13, prd: 5, blk: "p", aWt: "114,818", ctg: c4, clr: "colorSilver", rdo: noVal, stc: crsCT, phs: sld, dns: "7,31", mlt: 156.6, bln: 2072,  fsn: "3,26", vpn: "230", spc: "0,233", elc: l3 + ", 18, 3", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s1, aRd: "167", cRd: "142", eNg: "1,78", ion: "5,7864", trm: "0,816", oxi: "1, 2, 3", vol: "15,7", crt: "0,000016%", uni: "3" + pc8, yr: "1864", mNo: 115, p: 49, e: 49, n: 66, cid: "5359967", cas: "7440-74-6"},
  { id: "ele50", num: "50", nme: "tin", sym: "Sn", grp: 14, prd: 5, blk: "p", aWt: "118,71", ctg: c4, clr: "colorSilver", rdo: noVal, stc: crsCT, phs: sld, dns: "7,287", mlt: 231.93, bln: 2602,  fsn: "7", vpn: "290", spc: "0,228", elc: l3 + ", 18, 4", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s2, aRd: "140", cRd: "139", eNg: "1,96", ion: "7,3439", trm: "0,666", oxi: "-4, 2, 4", vol: "16,3", crt: "0,00022%", uni: "4" + pc7, yr: "3000" + " BC", mNo: 119, p: 50, e: 50, n: 69, cid: "5352426", cas: "7440-31-5"},
  { id: "ele51", num: "51", nme: "antimony", sym: "Sb", grp: 15, prd: 5, blk: "p", aWt: "121,76", ctg: c6, clr: "colorSilver", rdo: noVal, stc: crsSTG, phs: sld, dns: "6,685", mlt: 630.63, bln: 1587,  fsn: "19,7", vpn: "68", spc: "0,207", elc: l3 + ", 18, 5", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s3, aRd: "140", cRd: "139", eNg: "2,05", ion: "8,6084", trm: "0,243", oxi: "-3, 3, 5", vol: "18,22", crt: "0,00002%", uni: "4" + pc8, yr: "3000" + " BC", mNo: 122, p: 51, e: 51, n: 71, cid: "5354495", cas: "7440-36-0"},
  { id: "ele52", num: "52", nme: "tellurium", sym: "Te", grp: 16, prd: 5, blk: "p", aWt: "127,6", ctg: c6, clr: "colorSilver", rdo: noVal, stc: crsSTG, phs: sld, dns: "6,232", mlt: 449.51, bln: 988,  fsn: "17,5", vpn: "48", spc: "0,202", elc: l3 + ", 18, 6", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s4, aRd: "140", cRd: "138", eNg: "2,1", ion: "9,0096", trm: "0,0235", oxi: "-2, 2, 4, 5, 6", vol: "20,5", crt: "9,9" + pc8, uni: "9" + pc7, yr: "1782", mNo: 128, p: 52, e: 52, n: 76, cid: "6327182", cas: "13494-80-9"},
  { id: "ele53", num: "53", nme: "iodine", sym: "I", grp: 17, prd: 5, blk: "p", aWt: "126,90447", ctg: c7, clr: "colorSlateGray", rdo: noVal, stc: crsBCO, phs: sld, dns: "4,93", mlt: 113.7, bln: 184.25,  fsn: "7,76", vpn: "20,9", spc: "0,214", elc: l3 + ", 18, 7", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s5, aRd: "140", cRd: "139", eNg: "2,66", ion: "10,4513", trm: "0,00449", oxi: "-1, 1, 3, 5, 7", vol: "25,74", crt: "0,000049%", uni: "1" + pc7, yr: "1811", mNo: 127, p: 53, e: 53, n: 74, cid: "807", cas: "7553-56-2"},
  { id: "ele54", num: "54", nme: "xenon", sym: "Xe", grp: 18, prd: 5, blk: "p", aWt: "131,293", ctg: c8, clr: "colorLess", rdo: noVal, stc: crsFCC, phs: gas, dns: "0,005887", mlt: -111.7, bln: -108.12,  fsn: "2,3", vpn: "12,64", spc: "0,158", elc: l3 + ", 18, 8", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s6, aRd: "108", cRd: "140", eNg: "2,6", ion: "12,1298", trm: "0,0000569", oxi: "2, 4, 6, 8", vol: "37,3", crt: "2" + pc9, uni: "1" + pc6, yr: "1898", mNo: 131, p: 54, e: 54, n: 77, cid: "23991", cas: "7440-63-3"},
  { id: "ele55", num: "55", nme: "caesium", sym: "Cs", grp: 1, prd: 6, blk: "s", aWt: "132,9054519", ctg: c1, clr: "colorSilver", rdo: yesVal, stc: crsBCC, phs: sld, dns: "1,873", mlt: 28.44, bln: 671,  fsn: "2,09", vpn: "65", spc: "0,242", elc: l3 + ", 18, 8, 1", cnf: "[Xe] 6s" + s1, aRd: "265", cRd: "244", eNg: "0,79", ion: "3,8939", trm: "0,359", oxi: "-1, 1", vol: "71,07", crt: "0,00019%", uni: "8" + pc8, yr: "1860", mNo: 133, p: 55, e: 55, n: 78, cid: "5354618", cas: "7440-46-2"},
  { id: "ele56", num: "56", nme: "barium", sym: "Ba", grp: 2, prd: 6, blk: "s", aWt: "137,327", ctg: c2, clr: "colorSilver", rdo: noVal, stc: crsBCC, phs: sld, dns: "3,594", mlt: 727, bln: 1897,  fsn: "8", vpn: "140", spc: "0,204", elc: l3 + ", 18, 8, 2", cnf: "[Xe] 6s" + s2, aRd: "222", cRd: "215", eNg: "0,89", ion: "5,2117", trm: "0,184", oxi: "2", vol: "39,24", crt: "0,034%", uni: "1" + pc6, yr: "1774", mNo: 137, p: 56, e: 56, n: 81, cid: "5355457", cas: "7440-39-3"},
  { id: "ele57", num: "57", nme: "lanthanum", sym: "La", grp: naVal, prd: 6, blk: "f", aWt: "138,90547", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "6,145", mlt: 920, bln: 3464,  fsn: "6,2", vpn: "400", spc: "0,195", elc: l3 + ", 18, 9, 2", cnf: "[Xe] 5d" + s1 + " 6s" + s2, aRd: "187", cRd: "207", eNg: "1,1", ion: "5,5769", trm: "0,135", oxi: "2, 3", vol: "22,5", crt: "0,0034%", uni: "2" + pc7, yr: "1839", mNo: 139, p: 57, e: 57, n: 82, cid: "23926", cas: "7439-91-0"},
  { id: "ele58", num: "58", nme: "cerium", sym: "Ce", grp: naVal, prd: 6, blk: "f", aWt: "140,116", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "6,77", mlt: 795, bln: 3443,  fsn: "5,5", vpn: "350", spc: "0,192", elc: l3 + ", 19, 9, 2", cnf: "[Xe] 4f" + s1 + " 5d" + s1 + " 6s" + s2, aRd: "182", cRd: "204", eNg: "1,12", ion: "5,5387", trm: "0,114", oxi: "2, 3, 4", vol: "20,67", crt: "0,006%", uni: "1" + pc6, yr: "1803", mNo: 140, p: 58, e: 58, n: 82, cid: "23974", cas: "7440-45-1"},
  { id: "ele59", num: "59", nme: "praseodymium", sym: "Pr", grp: naVal, prd: 6, blk: "f", aWt: "140,90765", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "6,773", mlt: 935, bln: 3520,  fsn: "6,9", vpn: "330", spc: "0,193", elc: l3 + ", 21, 8, 2", cnf: "[Xe] 4f" + s3 + " 6s" + s2, aRd: "182", cRd: "203", eNg: "1,13", ion: "5,473", trm: "0,125", oxi: "2, 3, 4", vol: "20,8", crt: "0,00086%", uni: "2" + pc7, yr: "1885", mNo: 141, p: 59, e: 59, n: 82, cid: "23942", cas: "7440-10-0"},
  { id: "ele60", num: "60", nme: "neodymium", sym: "Nd", grp: naVal, prd: 6, blk: "f", aWt: "144,242", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "7,007", mlt: 1024, bln: 3074,  fsn: "7,1", vpn: "285", spc: "0,19", elc: l3 + ", 22, 8, 2", cnf: "[Xe] 4f" + s4 + " 6s" + s2, aRd: "181", cRd: "201", eNg: "1,14", ion: "5,525", trm: "0,165", oxi: "2, 3", vol: "20,6", crt: "0,0033%", uni: "1" + pc6, yr: "1885", mNo: 144, p: 60, e: 60, n: 84, cid: "23934", cas: "7440-00-8"},
  { id: "ele61", num: "61", nme: "promethium", sym: "Pm", grp: naVal, prd: 6, blk: "f", aWt: "[145]", ctg: c9, clr: "colorSilver", rdo: yesVal, stc: naVal, phs: sld, dns: "7,26", mlt: 1042, bln: 3000,  fsn: "7,7", vpn: "290", spc: "-", elc: l3 + ", 23, 8, 2", cnf: "[Xe] 4f" + s5 + " 6s" + s2, aRd: "183", cRd: "199", eNg: "-", ion: "5,582", trm: "0,179", oxi: "3", vol: "22,39", crt: naVal, uni: naVal, yr: "1945", mNo: 145, p: 61, e: 61, n: 84, cid: naVal, cas: "7440-12-2"},
  { id: "ele62", num: "62", nme: "samarium", sym: "Sm", grp: naVal, prd: 6, blk: "f", aWt: "150,36", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSTG, phs: sld, dns: "7,52", mlt: 1072, bln: 1794,  fsn: "8,6", vpn: "175", spc: "0,197", elc: l3 + ", 24, 8, 2", cnf: "[Xe] 4f" + s6 + " 6s" + s2, aRd: "180", cRd: "198", eNg: "1,17", ion: "5,6437", trm: "0,133", oxi: "2, 3", vol: "20,0", crt: "0,0006%", uni: "5" + pc7, yr: "1879", mNo: 150, p: 62, e: 62, n: 88, cid: "23951", cas: "7440-19-9"},
  { id: "ele63", num: "63", nme: "europium", sym: "Eu", grp: naVal, prd: 6, blk: "f", aWt: "151,964", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsBCC, phs: sld, dns: "5,243", mlt: 826, bln: 1529,  fsn: "9,2", vpn: "175", spc: "0,182", elc: l3 + ", 25, 8, 2", cnf: "[Xe] 4f" + s7 + " 6s" + s2, aRd: "180", cRd: "198", eNg: "1,2", ion: "5,6704", trm: "0,139", oxi: "2, 3", vol: "20,8", crt: "0,00018%", uni: "5" + pc8, yr: "1896", mNo: 152, p: 63, e: 63, n: 89, cid: "23981", cas: "7440-53-1"},
  { id: "ele64", num: "64", nme: "gadolinium", sym: "Gd", grp: naVal, prd: 6, blk: "f", aWt: "157,25", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "7,895", mlt: 1312, bln: 3273,  fsn: "10", vpn: "305", spc: "0,236", elc: l3 + ", 25, 9, 2", cnf: "[Xe] 4f" + s7 + " 5d" + s1 + " 6s" + s2, aRd: "180", cRd: "196", eNg: "1,2", ion: "6,1501", trm: "0,106", oxi: "1, 2, 3", vol: "19,9", crt: "0,00052%", uni: "2" + pc7, yr: "1880", mNo: 157, p: 64, e: 64, n: 93, cid: "23982", cas: "7440-54-2"},
  { id: "ele65", num: "65", nme: "terbium", sym: "Tb", grp: naVal, prd: 6, blk: "f", aWt: "158,92535", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "8,229", mlt: 1356, bln: 3230,  fsn: "10,8", vpn: "295", spc: "0,182", elc: l3 + ", 27, 8, 2", cnf: "[Xe] 4f" + s9 + " 6s" + s2, aRd: "177", cRd: "194", eNg: "1,2", ion: "5,8638", trm: "0,111", oxi: "1, 3, 4", vol: "19,20", crt: "0,000093%", uni: "5" + pc8, yr: "1843", mNo: 159, p: 65, e: 65, n: 94, cid: "23958", cas: "7440-27-9"},
  { id: "ele66", num: "66", nme: "dysprosium", sym: "Dy", grp: naVal, prd: 6, blk: "f", aWt: "162,5", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "8,55", mlt: 1407, bln: 2567,  fsn: "11,1", vpn: "280", spc: "0,17", elc: l3 + ", 28, 8, 2", cnf: "[Xe] 4f" + s10 + " 6s" + s2, aRd: "178", cRd: "192", eNg: "1,22", ion: "5,9389", trm: "0,107", oxi: "2, 3", vol: "19,0", crt: "0,00062%", uni: "2" + pc7, yr: "1886", mNo: 163, p: 66, e: 66, n: 97, cid: "23912", cas: "7429-91-6"},
  { id: "ele67", num: "67", nme: "holmium", sym: "Ho", grp: naVal, prd: 6, blk: "f", aWt: "164,93032", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "8,795", mlt: 1461, bln: 2720,  fsn: "17", vpn: "265", spc: "0,165", elc: l3 + ", 29, 8, 2", cnf: "[Xe] 4f" + s11 + " 6s" + s2, aRd: "176", cRd: "192", eNg: "1,23", ion: "6,0215", trm: "0,162", oxi: "3", vol: "18,7", crt: "0,00012%", uni: "5" + pc8, yr: "1878", mNo: 165, p: 67, e: 67, n: 98, cid: "23988", cas: "7440-60-0"},
  { id: "ele68", num: "68", nme: "erbium", sym: "Er", grp: naVal, prd: 6, blk: "f", aWt: "167,259", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "9,066", mlt: 1529, bln: 2868,  fsn: "19,9", vpn: "285", spc: "0,168", elc: l3 + ", 30, 8, 2", cnf: "[Xe] 4f" + s12 + " 6s" + s2, aRd: "176", cRd: "189", eNg: "1,24", ion: "6,1077", trm: "0,143", oxi: "3", vol: "18,4", crt: "0,0003%", uni: "2" + pc7, yr: "1843", mNo: 167, p: 68, e: 68, n: 99, cid: "23980", cas: "7440-52-0"},
  { id: "ele69", num: "69", nme: "thulium", sym: "Tm", grp: naVal, prd: 6, blk: "f", aWt: "168,93421", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "9,321", mlt: 1545, bln: 1950,  fsn: "16,8", vpn: "250", spc: "0,16", elc: l3 + ", 31, 8, 2", cnf: "[Xe] 4f" + s13 + " 6s" + s2, aRd: "176", cRd: "190", eNg: "1,25", ion: "6,1843", trm: "0,168", oxi: "2, 3", vol: "18,1", crt: "0,000045%", uni: "1" + pc8, yr: "1879", mNo: 169, p: 69, e: 69, n: 100, cid: "23961", cas: "7440-30-4"},
  { id: "ele70", num: "70", nme: "ytterbium", sym: "Yb", grp: naVal, prd: 6, blk: "f", aWt: "173,054", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsFCC, phs: sld, dns: "6,965", mlt: 824, bln: 1196,  fsn: "7,7", vpn: "160", spc: "0,155", elc: l4 + ", 8, 2", cnf: "[Xe] 4f" + s14 + " 6s" + s2, aRd: "176", cRd: "187", eNg: "1,1", ion: "6,2542", trm: "0,349", oxi: "2, 3", vol: "24,79", crt: "0,00028%", uni: "2" + pc7, yr: "1878", mNo: 173, p: 70, e: 70, n: 103, cid: "23992", cas: "7440-64-4"},
  { id: "ele71", num: "71", nme: "lutetium", sym: "Lu", grp: naVal, prd: 6, blk: "d", aWt: "174,9668", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "9,84", mlt: 1652, bln: 3402,  fsn: "22", vpn: "415", spc: "0,154", elc: l4 + ", 9, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s1 + " 6s" + s2, aRd: "174", cRd: "187", eNg: "1,27", ion: "5,4259", trm: "0,164", oxi: "3", vol: "17,78", crt: "0,000056%", uni: "1" + pc8, yr: "1907", mNo: 175, p: 71, e: 71, n: 104, cid: "23929", cas: "7439-94-3"},
  { id: "ele72", num: "72", nme: "hafnium", sym: "Hf", grp: 4, prd: 6, blk: "d", aWt: "178,49", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsSH, phs: sld, dns: "13,31", mlt: 2233, bln: 4603,  fsn: "25,5", vpn: "630", spc: "0,144", elc: l4 + ", 10, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s2 + " 6s" + s2, aRd: "159", cRd: "175", eNg: "1,3", ion: "6,8251", trm: "0,23", oxi: "2, 3, 4", vol: "13,6", crt: "0,00033%", uni: "7" + pc8, yr: "1922", mNo: 178, p: 72, e: 72, n: 106, cid: "23986", cas: "7440-58-6"},
  { id: "ele73", num: "73", nme: "tantalum", sym: "Ta", grp: 5, prd: 6, blk: "d", aWt: "180,94788", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsBCC, phs: sld, dns: "16,654", mlt: 3017, bln: 5458,  fsn: "36", vpn: "735", spc: "0,14", elc: l4 + ", 11, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s3 + " 6s" + s2, aRd: "146", cRd: "170", eNg: "1,5", ion: "7,5496", trm: "0,575", oxi: "-1, 2, 3, 4, 5", vol: "10,90", crt: "0,00017%", uni: "8" + pc9, yr: "1802", mNo: 181, p: 73, e: 73, n: 108, cid: "23956", cas: "7440-25-7"},
  { id: "ele74", num: "74", nme: "tungsten", sym: "W", grp: 6, prd: 6, blk: "d", aWt: "183,84", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsBCC, phs: sld, dns: "19,25", mlt: 3422, bln: 5555,  fsn: "35", vpn: "800", spc: "0,132", elc: l4 + ", 12, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s4 + " 6s" + s2, aRd: "139", cRd: "162", eNg: "2,36", ion: "7,864", trm: "1,74", oxi: "-2, -1, 1, 2, 3, 4, 5, 6", vol: "9,53", crt: "0,00011%", uni: "5" + pc8, yr: "1781", mNo: 184, p: 74, e: 74, n: 110, cid: "23964", cas: "7440-33-7"},
  { id: "ele75", num: "75", nme: "rhenium", sym: "Re", grp: 7, prd: 6, blk: "d", aWt: "186,207", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsSH, phs: sld, dns: "21,02", mlt: 3186, bln: 5596,  fsn: "33", vpn: "705", spc: "0,137", elc: l4 + ", 13, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s5 + " 6s" + s2, aRd: "137", cRd: "151", eNg: "1,9", ion: "7,8335", trm: "0,479", oxi: "-3, -1, 1, 2, 3, 4, 5, 6, 7", vol: "8,85", crt: "2,6" + pc7, uni: "2" + pc8, yr: "1908", mNo: 186, p: 75, e: 75, n: 111, cid: "23947", cas: "7440-15-5"},
  { id: "ele76", num: "76", nme: "osmium", sym: "Os", grp: 8, prd: 6, blk: "d", aWt: "190,23", ctg: c3, clr: "colorSlateGray", rdo: noVal, stc: crsSH, phs: sld, dns: "22,61", mlt: 3033, bln: 5012,  fsn: "31", vpn: "630", spc: "0,13", elc: l4 + ", 14, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s6 + " 6s" + s2, aRd: "135", cRd: "144", eNg: "2,2", ion: "8,4382", trm: "0,876", oxi: "-2, 1, 2, 3, 4, 5, 6, 7, 8", vol: "8,49", crt: "1,8" + pc7, uni: "3" + pc7, yr: "1803", mNo: 190, p: 76, e: 76, n: 114, cid: "23937", cas: "7440-04-2"},
  { id: "ele77", num: "77", nme: "iridium", sym: "Ir", grp: 9, prd: 6, blk: "d", aWt: "192,217", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsFCC, phs: sld, dns: "22,56", mlt: 2466, bln: 4428,  fsn: "26", vpn: "560", spc: "0,131", elc: l4 + ", 15, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s7 + " 6s" + s2, aRd: "136", cRd: "141", eNg: "2,2", ion: "8,967", trm: "1,47", oxi: "-3, -1, 1, 2, 3, 4, 5, 6, 7, 8", vol: "8,54", crt: "4" + pc8, uni: "2" + pc7, yr: "1803", mNo: 192, p: 77, e: 77, n: 115, cid: "23924", cas: "7439-88-5"},
  { id: "ele78", num: "78", nme: "platinum", sym: "Pt", grp: 10, prd: 6, blk: "d", aWt: "195,084", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsFCC, phs: sld, dns: "21,45", mlt: 1768.3, bln: 3825,  fsn: "20", vpn: "490", spc: "0,133", elc: l4 + ", 17, 1", cnf: "[Xe] 4f" + s14 + " 5d" + s9 + " 6s" + s1, aRd: "139", cRd: "136", eNg: "2,28", ion: "8,9587", trm: "0,716", oxi: "2, 4, 5, 6", vol: "9,10", crt: "3,7" + pc6, uni: "5" + pc7, yr: "1735", mNo: 195, p: 78, e: 78, n: 117, cid: "23939", cas: "7440-06-4"},
  { id: "ele79", num: "79", nme: "gold", sym: "Au", grp: 11, prd: 6, blk: "d", aWt: "196,966569", ctg: c3, clr: "colorGold", rdo: noVal, stc: crsFCC, phs: sld, dns: "19,282", mlt: 1064.2, bln: 2856,  fsn: "12,5", vpn: "330", spc: "0,129", elc: l4 + ", 18, 1", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s1, aRd: "144", cRd: "136", eNg: "2,54", ion: "9,2255", trm: "3,17", oxi: "-1, 1, 2, 3, 5", vol: "10,2", crt: "3,1" + pc7, uni: "6" + pc8, yr: "2500" + " BC", mNo: 197, p: 79, e: 79, n: 118, cid: "23985", cas: "7440-57-5"},
  { id: "ele80", num: "80", nme: "mercury", sym: "Hg", grp: 12, prd: 6, blk: "d", aWt: "200,59", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsSTG, phs: lqd, dns: "13,5336", mlt: -38.83, bln: 357,  fsn: "2,29", vpn: "59,2", spc: "0,14", elc: l4 + ", 18, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2, aRd: "151", cRd: "132", eNg: "2,00", ion: "10,4375", trm: "0,0834", oxi: "1, 2, 4", vol: "14,82", crt: "6,7" + pc6, uni: "1" + pc7, yr: "1500" + " BC", mNo: 201, p: 80, e: 80, n: 121, cid: "23931", cas: "7439-97-6"},
  { id: "ele81", num: "81", nme: "thallium", sym: "Tl", grp: 13, prd: 6, blk: "p", aWt: "204,3833", ctg: c4, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "11,85", mlt: 304, bln: 1473,  fsn: "4,2", vpn: "165", spc: "0,129", elc: l4 + ", 18, 3", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s1, aRd: "170", cRd: "145", eNg: "1,62", ion: "6,1082", trm: "0,461", oxi: "1, 3", vol: "17,2", crt: "0,000053%", uni: "5" + pc8, yr: "1861", mNo: 204, p: 81, e: 81, n: 123, cid: "5359464", cas: "7440-28-0"},
  { id: "ele82", num: "82", nme: "lead", sym: "Pb", grp: 14, prd: 6, blk: "p", aWt: "207,2", ctg: c4, clr: "colorSlateGray", rdo: noVal, stc: crsFCC, phs: sld, dns: "11,342", mlt: 327.46, bln: 1749,  fsn: "4,77", vpn: "178", spc: "0,129", elc: l4 + ", 18, 4", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s2, aRd: "175", cRd: "146", eNg: "2,33", ion: "7,4167", trm: "0,353", oxi: "-4, 2, 4", vol: "18,17", crt: "0,00099%", uni: "1" + pc6, yr: "4000" + " BC", mNo: 207, p: 82, e: 82, n: 125, cid: "5352425", cas: "7439-92-1"},
  { id: "ele83", num: "83", nme: "bismuth", sym: "Bi", grp: 15, prd: 6, blk: "p", aWt: "208,9804", ctg: c4, clr: "colorGray", rdo: noVal, stc: crsBCM, phs: sld, dns: "9,78", mlt: 271.5, bln: 1564,  fsn: "10,9", vpn: "160", spc: "0,122", elc: l4 + ", 18, 5", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s3, aRd: "156", cRd: "148", eNg: "2,02", ion: "7,2856", trm: "0,0797", oxi: "-3, 3, 5", vol: "21,3", crt: "2,5" + pc6, uni: "7" + pc8, yr: "1753", mNo: 209, p: 83, e: 83, n: 126, cid: "5359367", cas: "7440-69-9"},
  { id: "ele84", num: "84", nme: "polonium", sym: "Po", grp: 16, prd: 6, blk: "p", aWt: "[210]", ctg: c6, clr: "colorSilver", rdo: yesVal, stc: crsSC, phs: sld, dns: "9,196", mlt: 254, bln: 962,  fsn: "13", vpn: "100", spc: "-", elc: l4 + ", 18, 6", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s4, aRd: "168", cRd: "140", eNg: "2,00", ion: "8,417", trm: "0,2", oxi: "-2, 2, 4, 6", vol: "22,23", crt: naVal, uni: naVal, yr: "1898", mNo: 210, p: 84, e: 84, n: 126, cid: naVal, cas: "7440-08-6"},
  { id: "ele85", num: "85", nme: "astatine", sym: "At", grp: 17, prd: 6, blk: "p", aWt: "[210]", ctg: c7, clr: "colorSilver", rdo: yesVal, stc: naVal, phs: sld, dns: "7", mlt: 302, bln: 337,  fsn: "6", vpn: "40", spc: "-", elc: l4 + ", 18, 7", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s5, aRd: "-", cRd: "150", eNg: "2,2", ion: "9,3", trm: "0,017", oxi: "-1, 1, 3, 5, 7", vol: "30", crt: naVal, uni: naVal, yr: "1940", mNo: 210, p: 85, e: 85, n: 125, cid: naVal, cas: "7440-68-8"},
  { id: "ele86", num: "86", nme: "radon", sym: "Rn", grp: 18, prd: 6, blk: "p", aWt: "[222]", ctg: c8, clr: "colorLess", rdo: yesVal, stc: naVal, phs: gas, dns: "0,00973", mlt: -71.15, bln: -61.85,  fsn: "3", vpn: "17", spc: "0,094", elc: l4 + ", 18, 8", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s6, aRd: "120", cRd: "150", eNg: "-", ion: "10,7485", trm: "0,0000364", oxi: "2, 4, 6", vol: "50,5", crt: naVal, uni: naVal, yr: "1900", mNo: 222, p: 86, e: 86, n: 136, cid: "24857", cas: "10043-92-2"},
  { id: "ele87", num: "87", nme: "francium", sym: "Fr", grp: 1, prd: 7, blk: "s", aWt: "[223]", ctg: c1, clr: "colorSilver", rdo: yesVal, stc: naVal, phs: sld, dns: "1,87", mlt: 23, bln: 677,  fsn: "2", vpn: "65", spc: "-", elc: l4 + ", 18, 8, 1", cnf: "[Rn] 7s" + s1, aRd: "260", cRd: "348", eNg: "0,7", ion: "4,0727", trm: "0,15", oxi: "1", vol: "71,07", crt: naVal, uni: naVal, yr: "1939", mNo: 223, p: 87, e: 87, n: 136, cid: naVal, cas: "7440-73-5"},
  { id: "ele88", num: "88", nme: "radium", sym: "Ra", grp: 2, prd: 7, blk: "s", aWt: "[226]", ctg: c2, clr: "colorSilver", rdo: yesVal, stc: crsBCC, phs: sld, dns: "5,5", mlt: 700, bln: 1737,  fsn: "8", vpn: "125", spc: "-", elc: l4 + ", 18, 8, 2", cnf: "[Rn] 7s" + s2, aRd: "-", cRd: "221", eNg: "0,9", ion: "5,2784", trm: "0,186", oxi: "2", vol: "45,20", crt: "9,9×10<sup>-12</sup>%", uni: naVal, yr: "1898", mNo: 226, p: 88, e: 88, n: 138, cid: "6328144", cas: "7440-14-4"},
  { id: "ele89", num: "89", nme: "actinium", sym: "Ac", grp: naVal, prd: 7, blk: "f", aWt: "[227]", ctg: c10, clr: "colorSilver", rdo: yesVal, stc: crsFCC, phs: sld, dns: "10,07", mlt: 1050, bln: 3198,  fsn: "14", vpn: "400", spc: "0,12", elc: l4 + ", 18, 9, 2", cnf: "[Rn] 6d" + s1 + " 7s" + s2, aRd: "-", cRd: "215", eNg: "1,1", ion: "5,17", trm: "0,12", oxi: "3", vol: "22,54", crt: naVal, uni: naVal, yr: "1899", mNo: 227, p: 89, e: 89, n: 138, cid: naVal, cas: "7440-34-8"},
  { id: "ele90", num: "90", nme: "thorium", sym: "Th", grp: naVal, prd: 7, blk: "f", aWt: "232,03806", ctg: c10, clr: "colorSilver", rdo: yesVal, stc: crsFCC, phs: sld, dns: "11,7", mlt: 1842, bln: 4788,  fsn: "16", vpn: "530", spc: "0,113", elc: l4 + ", 18, 10, 2", cnf: "[Rn] 6d" + s2 + " 7s" + s2, aRd: "179", cRd: "206", eNg: "1,3", ion: "6,3067", trm: "0,54", oxi: "2, 3, 4", vol: "19,9", crt: "0,0006%", uni: "4" + pc8, yr: "1828", mNo: 232, p: 90, e: 90, n: 142, cid: "23960", cas: "7440-29-1"},
  { id: "ele91", num: "91", nme: "protactinium", sym: "Pa", grp: naVal, prd: 7, blk: "f", aWt: "231,03588", ctg: c10, clr: "colorSilver", rdo: yesVal, stc: crsCT, phs: sld, dns: "15,37", mlt: 1568, bln: 4027,  fsn: "15", vpn: "470", spc: "-", elc: l4 + ", 20, 9, 2", cnf: "[Rn] 5f" + s2 + " 6d" + s1 + " 7s" + s2, aRd: "163", cRd: "200", eNg: "1,5", ion: "5,89", trm: "0,47", oxi: "3, 4, 5", vol: "15,0", crt: "9,9×10<sup>-13</sup>%", uni: naVal, yr: "1913", mNo: 231, p: 91, e: 91, n: 140, cid: naVal, cas: "7440-13-3"},
  { id: "ele92", num: "92", nme: "uranium", sym: "U", grp: naVal, prd: 7, blk: "f", aWt: "238,02891", ctg: c10, clr: "colorSilver", rdo: yesVal, stc: crsBCO, phs: sld, dns: "18,95", mlt: 1132.2, bln: 4131,  fsn: "14", vpn: "420", spc: "0,116", elc: l4 + ", 21, 9, 2", cnf: "[Rn] 5f" + s3 + " 6d" + s1 + " 7s" + s2, aRd: "156", cRd: "196", eNg: "1,38", ion: "6,1941", trm: "0,276", oxi: "3, 4, 5, 6", vol: "12,59", crt: "0,00018%", uni: "2" + pc8, yr: "1789", mNo: 238, p: 92, e: 92, n: 146, cid: "23989", cas: "7440-61-1"},
  { id: "ele93", num: "93", nme: "neptunium", sym: "Np", grp: naVal, prd: 7, blk: "f", aWt: "[237]", ctg: c10, clr: "colorSilver", rdo: yesVal, stc: crsSO, phs: sld, dns: "20,45", mlt: 637, bln: 4000,  fsn: "10", vpn: "335", spc: "-", elc: l4 + ", 22, 9, 2", cnf: "[Rn] 5f" + s4 + " 6d" + s1 + " 7s" + s2, aRd: "155", cRd: "190", eNg: "1,36", ion: "6,2657", trm: "0,063", oxi: "3, 4, 5, 6, 7", vol: "11,62", crt: naVal, uni: naVal, yr: "1940", mNo: 237, p: 93, e: 93, n: 144, cid: naVal, cas: "7439-99-8"},
  { id: "ele94", num: "94", nme: "plutonium", sym: "Pu", grp: naVal, prd: 7, blk: "f", aWt: "[244]", ctg: c10, clr: "colorSilver", rdo: yesVal, stc: crsSM, phs: sld, dns: "19,816", mlt: 639.4, bln: 3228,  fsn: naVal, vpn: "325", spc: "-", elc: l4 + ", 24, 8, 2", cnf: "[Rn] 5f" + s6 + " 7s" + s2, aRd: "159", cRd: "187", eNg: "1,28", ion: "6,0262", trm: "0,0674", oxi: "3, 4, 5, 6, 7, 8", vol: "12,32", crt: naVal, uni: naVal, yr: "1940", mNo: 244, p: 94, e: 94, n: 150, cid: "23940", cas: "7440-07-5"},
  { id: "ele95", num: "95", nme: "americium", sym: "Am", grp: naVal, prd: 7, blk: "f", aWt: "[243]", ctg: c10, clr: "colorSilver", rdo: yesVal, stc: crsSH, phs: sld, dns: "13,69", mlt: 1176, bln: 2607,  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 25, 8, 2", cnf: "[Rn] 5f" + s7 + " 7s" + s2, aRd: "173", cRd: "180", eNg: "1,3", ion: "5,9738", trm: "0,1", oxi: "2, 3, 4, 5, 6", vol: "17,78", crt: naVal, uni: naVal, yr: "1944", mNo: 243, p: 95, e: 95, n: 148, cid: naVal, cas: "7440-35-9"},
  { id: "ele96", num: "96", nme: "curium", sym: "Cm", grp: naVal, prd: 7, blk: "f", aWt: "[247]", ctg: c10, clr: "colorSilver", rdo: yesVal, stc: crsSH, phs: sld, dns: "13,51", mlt: 1340, bln: 3110,  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 25, 9, 2", cnf: "[Rn] 5f" + s7 + " 6d" + s1 + " 7s" + s2, aRd: "174", cRd: "169", eNg: "1,3", ion: "5,9915", trm: "0,1", oxi: "3, 4", vol: "18,28", crt: naVal, uni: naVal, yr: "1944", mNo: 247, p: 96, e: 96, n: 151, cid: naVal, cas: "7440-51-9"},
  { id: "ele97", num: "97", nme: "berkelium", sym: "Bk", grp: naVal, prd: 7, blk: "f", aWt: "[247]", ctg: c10, clr: naVal, rdo: yesVal, stc: crsSH, phs: sld, dns: "14,78", mlt: 986, bln: 2900,  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 27, 8, 2", cnf: "[Rn] 5f" + s9 + " 7s" + s2, aRd: "170", cRd: "-", eNg: "1,3", ion: "6,1979", trm: "0,1", oxi: "3, 4", vol: "16,7", crt: naVal, uni: naVal, yr: "1949", mNo: 247, p: 97, e: 97, n: 150, cid: "23971", cas: "7440-40-6"},
  { id: "ele98", num: "98", nme: "californium", sym: "Cf", grp: naVal, prd: 7, blk: "f", aWt: "[251]", ctg: c10, clr: naVal, rdo: yesVal, stc: crsSH, phs: sld, dns: "15,1", mlt: 900, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 28, 8, 2", cnf: "[Rn] 5f" + s10 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1,3", ion: "6,2817", trm: "0,1", oxi: "2, 3, 4", vol: "18,4", crt: naVal, uni: naVal, yr: "1950", mNo: 251, p: 98, e: 98, n: 153, cid: naVal, cas: "7440-71-3"},
  { id: "ele99", num: "99", nme: "einsteinium", sym: "Es", grp: naVal, prd: 7, blk: "f", aWt: "[252]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "8,84", mlt: 860, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 29, 8, 2", cnf: "[Rn] 5f" + s11 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1,3", ion: "6,42", trm: "0,1", oxi: "2, 3", vol: "28,5", crt: naVal, uni: naVal, yr: "1952", mNo: 252, p: 99, e: 99, n: 153, cid: naVal, cas: "7429-92-7"},
  { id: "ele100", num: "100", nme: "fermium", sym: "Fm", grp: naVal, prd: 7, blk: "f", aWt: "[257]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: 1527, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 30, 8, 2", cnf: "[Rn] 5f" + s12 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1,3", ion: "6,5", trm: "0,1", oxi: "2, 3", vol: "29,1", crt: naVal, uni: naVal, yr: "1952", mNo: 257, p: 100, e: 100, n: 157, cid: naVal, cas: "7440-72-4"},
  { id: "ele101", num: "101", nme: "mendelevium", sym: "Md", grp: naVal, prd: 7, blk: "f", aWt: "[258]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: 826.85, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 31, 8, 2", cnf: "[Rn] 5f" + s13 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1,3", ion: "6,58", trm: "0,1", oxi: "2, 3", vol: "-", crt: naVal, uni: naVal, yr: "1955", mNo: 258, p: 101, e: 101, n: 157, cid: naVal, cas: "7440-11-1"},
  { id: "ele102", num: "102", nme: "nobelium", sym: "No", grp: naVal, prd: 7, blk: "f", aWt: "[259]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: 827, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 8, 2", cnf: "[Rn] 5f" + s14 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1,3", ion: "6,65", trm: "0,1", oxi: "2, 3", vol: "-", crt: naVal, uni: naVal, yr: "1958", mNo: 259, p: 102, e: 102, n: 157, cid: naVal, cas: "10028-14-5"},
  { id: "ele103", num: "103", nme: "lawrencium", sym: "Lr", grp: naVal, prd: 7, blk: "d", aWt: "[262]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: 1626.85, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 8, 3", cnf: "[Rn] 5f" + s14 + " 7s" + s2 + " 7p" + s1, aRd: "-", cRd: "-", eNg: "1,3", ion: "4,9", trm: "0,1", oxi: "3", vol: "-", crt: naVal, uni: naVal, yr: "1961", mNo: 262, p: 103, e: 103, n: 159, cid: naVal, cas: "22537-19-5"},
  { id: "ele104", num: "104", nme: "rutherfordium", sym: "Rf", grp: 4, prd: 7, blk: "d", aWt: "[267]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "23", mlt: 2100, bln: 5500,  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 10, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s2 + " 7s" + s2, aRd: "-", cRd: "157", eNg: "-", ion: "6,011", trm: "0,23", oxi: "4", vol: "-", crt: naVal, uni: naVal, yr: "1964", mNo: 261, p: 104, e: 104, n: 157, cid: naVal, cas: "53850-36-5"},
  { id: "ele105", num: "105", nme: "dubnium", sym: "Db", grp: 5, prd: 7, blk: "d", aWt: "[268]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "39", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 11, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s3 + " 7s" + s2, aRd: "-", cRd: "149", eNg: "-", ion: "-", trm: "0,58", oxi: "5", vol: "-", crt: naVal, uni: naVal, yr: "1968", mNo: 262, p: 105, e: 105, n: 157, cid: naVal, cas: "53850-35-4"},
  { id: "ele106", num: "106", nme: "seaborgium", sym: "Sg", grp: 6, prd: 7, blk: "d", aWt: "[269]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "35", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 12, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s4 + " 7s" + s2, aRd: "-", cRd: "143", eNg: "-", ion: "-", trm: "-", oxi: "6", vol: "-", crt: naVal, uni: naVal, yr: "1974", mNo: 262, p: 106, e: 106, n: 156, cid: naVal, cas: "54038-81-2"},
  { id: "ele107", num: "107", nme: "bohrium", sym: "Bh", grp: 7, prd: 7, blk: "d", aWt: "[270]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "37", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 13, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s5 + " 7s" + s2, aRd: "-", cRd: "141", eNg: "-", ion: "-", trm: "-", oxi: "7", vol: "-", crt: naVal, uni: naVal, yr: "1981", mNo: 264, p: 107, e: 107, n: 157, cid: naVal, cas: "54037-14-8"},
  { id: "ele108", num: "108", nme: "hassium", sym: "Hs", grp: 8, prd: 7, blk: "d", aWt: "[269]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "41", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 14, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s6 + " 7s" + s2, aRd: "-", cRd: "134", eNg: "-", ion: "-", trm: "-", oxi: "8", vol: "-", crt: naVal, uni: naVal, yr: "1984", mNo: 269, p: 108, e: 108, n: 161, cid: naVal, cas: "54037-57-9"},
  { id: "ele109", num: "109", nme: "meitnerium", sym: "Mt", grp: 9, prd: 7, blk: "d", aWt: "[278]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "35", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 15, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s7 + " 7s" + s2, aRd: "-", cRd: "129", eNg: "-", ion: "-", trm: "-", oxi: "3, 4, 6", vol: "-", crt: naVal, uni: naVal, yr: "1982", mNo: 268, p: 109, e: 109, n: 159, cid: naVal, cas: "54038-01-6"},
  { id: "ele110", num: "110", nme: "darmstadtium", sym: "Ds", grp: 10, prd: 7, blk: "d", aWt: "[281]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 16, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s8 + " 7s" + s2, aRd: "-", cRd: "128", eNg: "-", ion: "-", trm: "-", oxi: "6", vol: "-", crt: naVal, uni: naVal, yr: "1994", mNo: 281, p: 110, e: 110, n: 171, cid: naVal, cas: "54083-77-1"},
  { id: "ele111", num: "111", nme: "roentgenium", sym: "Rg", grp: 11, prd: 7, blk: "d", aWt: "[281]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 17, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s9 + " 7s" + s2, aRd: "-", cRd: "121", eNg: "-", ion: "-", trm: "-", oxi: "-1, 1, 3, 5", vol: "-", crt: naVal, uni: naVal, yr: "1994", mNo: 281, p: 111, e: 111, n: 170, cid: naVal, cas: "54386-24-2"},
  { id: "ele112", num: "112", nme: "copernicium", sym: "Cn", grp: 12, prd: 7, blk: "d", aWt: "[285]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: lqd, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 2", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2, aRd: "-", cRd: "122", eNg: "-", ion: "-", trm: "-", oxi: "2, 4", vol: "-", crt: naVal, uni: naVal, yr: "1996", mNo: 285, p: 112, e: 112, n: 173, cid: naVal, cas: "54084-26-3"},
  { id: "ele113", num: "113", nme: "nihonium", sym: "Nh", grp: 13, prd: 7, blk: "p", aWt: "[286]", ctg: c4, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "16", mlt: 430, bln: 1100,  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 3", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s1, aRd: "-", cRd: "136", eNg: "-", ion: "-", trm: "-", oxi: "1, 3, 5", vol: "-", crt: naVal, uni: naVal, yr: "2003", mNo: 286, p: 113, e: 113, n: 173, cid: naVal, cas: "54084-70-7"},
  { id: "ele114", num: "114", nme: "flerovium", sym: "Fl", grp: 14, prd: 7, blk: "p", aWt: "[289]", ctg: c4, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "14", mlt: 70, bln: 150,  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 4", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s2, aRd: "-", cRd: "143", eNg: "-", ion: "-", trm: "-", oxi: "2, 4", vol: "-", crt: naVal, uni: naVal, yr: "1998", mNo: 287, p: 114, e: 114, n: 173, cid: naVal, cas: "54085-16-4"},
  { id: "ele115", num: "115", nme: "moscovium", sym: "Mc", grp: 15, prd: 7, blk: "p", aWt: "[288]", ctg: c4, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 5", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s3, aRd: "-", cRd: "162", eNg: "-", ion: "-", trm: "-", oxi: "1, 3", vol: "-", crt: naVal, uni: naVal, yr: "2004", mNo: 288, p: 115, e: 115, n: 173, cid: naVal, cas: "54085-64-2"},
  { id: "ele116", num: "116", nme: "livermorium", sym: "Lv", grp: 16, prd: 7, blk: "p", aWt: "[293]", ctg: c4, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 6", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s4, aRd: "-", cRd: "175", eNg: "-", ion: "-", trm: "-", oxi: "2, 4", vol: "-", crt: naVal, uni: naVal, yr: "2000", mNo: 291, p: 116, e: 116, n: 175, cid: naVal, cas: "54100-71-9"},
  { id: "ele117", num: "117", nme: "tennessine", sym: "Ts", grp: 17, prd: 7, blk: "p", aWt: "[294]", ctg: c7, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 7", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s5, aRd: "-", cRd: "165", eNg: "-", ion: "-", trm: "-", oxi: "-1, 1, 3, 5", vol: "-", crt: naVal, uni: naVal, yr: "2010", mNo: 294, p: 117, e: 117, n: 177, cid: naVal, cas: "87658-56-8"},
  { id: "ele118", num: "118", nme: "oganesson", sym: "Og", grp: 18, prd: 7, blk: "p", aWt: "[294]", ctg: c8, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "13,65", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 8", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s6, aRd: "152", cRd: "157", eNg: "-", ion: "-", trm: "-", oxi: "-1, 0, 2, 4, 6", vol: "-", crt: naVal, uni: naVal, yr: "2002", mNo: 294, p: 118, e: 118, n: 176, cid: naVal, cas: "54144-19-3"}
];
}
else {
 rawData = [
  { id: "ele1", num: "1", nme: "hydrogen", sym: "H", grp: 1, prd: 1, blk: "s", aWt: "1.00794", ctg: c5, clr: "colorLess", rdo: noVal, stc: crsSH, phs: gas, dns: "0.00008988", mlt: -259.14, bln: -252.87,  fsn: "0.558", vpn: "0.452", spc: "14.304", elc: "1", cnf: "1s" + s1, aRd: "53", cRd: "31", eNg: "2.2", ion: "13.5984", trm: "0.001815", oxi: "-1, 1", vol: "14.4", crt: "0.15%", uni: "75%", yr: "1766", mNo: 1, p: 1, e: 1, n: 0, cid: "783", cas: "1333-74-0"},
  { id: "ele2", num: "2", nme: "helium", sym: "He", grp: 18, prd: 1, blk: "s", aWt: "4.002602", ctg: c8, clr: "colorLess", rdo: noVal, stc: crsFCC, phs: gas, dns: "0.0001785", mlt: -272.2, bln: -268.93,  fsn: "0.02", vpn: "0.083", spc: "5.193", elc: "2", cnf: "1s" + s2, aRd: "31", cRd: "28", eNg: "-", ion: "24.5874", trm: "0.00152", oxi: "0", vol: "27.2", crt: "5.5" + pc7, uni: "23%", yr: "1868", mNo: 4, p: 2, e: 2, n: 2, cid: "23987", cas: "7440-59-7"},
  { id: "ele3", num: "3", nme: "lithium", sym: "Li", grp: 1, prd: 2, blk: "s", aWt: "6.941", ctg: c1, clr: "colorSilver", rdo: noVal, stc: crsBCC, phs: sld, dns: "0.534", mlt: 180.54, bln: 1342,  fsn: "3", vpn: "147", spc: "3.582", elc: "2, 1", cnf: "[He] 2s" + s1, aRd: "152", cRd: "128", eNg: "0.98", ion: "5.3917", trm: "0.847", oxi: "1", vol: "13.10", crt: "0.0017%", uni: "6" + pc7, yr: "1817", mNo: 7, p: 3, e: 3, n: 4, cid: "3028194", cas: "7439-93-2"},
  { id: "ele4", num: "4", nme: "beryllium", sym: "Be", grp: 2, prd: 2, blk: "s", aWt: "9.012182", ctg: c2, clr: "colorSlateGray", rdo: noVal, stc: crsSH, phs: sld, dns: "1.85", mlt: 1287, bln: 2469,  fsn: "7.95", vpn: "297", spc: "1.825", elc: "2, 2", cnf: "[He] 2s" + s2, aRd: "112", cRd: "96", eNg: "1.57", ion: "9.3227", trm: "2.01", oxi: "1, 2", vol: "4.9", crt: "0.00019%", uni: "1" + pc7, yr: "1798", mNo: 9, p: 4, e: 4, n: 5, cid: "5460467", cas: "7440-41-7"},
  { id: "ele5", num: "5", nme: "boron", sym: "B", grp: 13, prd: 2, blk: "p", aWt: "10.811", ctg: c6, clr: "colorBlack", rdo: noVal, stc: crsSTG, phs: sld, dns: "2.34", mlt: 2076, bln: 3927,  fsn: "50", vpn: "507", spc: "1.026", elc: "2, 3", cnf: "[He] 2s" + s2 + " 2p" + s1, aRd: "90", cRd: "84", eNg: "2.04", ion: "8.298", trm: "0.274", oxi: "1, 2, 3", vol: "4.6", crt: "0.00086%", uni: "1" + pc7, yr: "1808", mNo: 11, p: 5, e: 5, n: 6, cid: "5462311", cas: "7440-42-8"},
  { id: "ele6", num: "6", nme: "carbon", sym: "C", grp: 14, prd: 2, blk: "p", aWt: "12.0107", ctg: c5, clr: "colorBlack", rdo: noVal, stc: crsSH, phs: sld, dns: "2.267", mlt: 3675, bln: 4027,  fsn: "105", vpn: "715", spc: "0.709", elc: "2, 4", cnf: "[He] 2s" + s2 + " 2p" + s2, aRd: "67", cRd: "77", eNg: "2.55", ion: "11.2603", trm: "1.29", oxi: "-4, -3, -2, -1, 1, 2, 3, 4", vol: "5.31", crt: "0.18%", uni: "0.5%", yr: "3750" + " BC", mNo: 12, p: 6, e: 6, n: 6, cid: "5462310", cas: "7440-44-0"},
  { id: "ele7", num: "7", nme: "nitrogen", sym: "N", grp: 15, prd: 2, blk: "p", aWt: "14.0067", ctg: c5, clr: "colorLess", rdo: noVal, stc: crsSH, phs: gas, dns: "0.0012506", mlt: -210, bln: -195.79,  fsn: "0.36", vpn: "2.79", spc: "1.04", elc: "2, 5", cnf: "[He] 2s" + s2 + " 2p" + s3, aRd: "56", cRd: "71", eNg: "3.04", ion: "14.5341", trm: "0.0002598", oxi: "-3, -2, -1, 1, 2, 3, 4, 5", vol: "17.3", crt: "0.002%", uni: "0.1%", yr: "1772", mNo: 14, p: 7, e: 7, n: 7, cid: "947", cas: "7727-37-9"},
  { id: "ele8", num: "8", nme: "oxygen", sym: "O", grp: 16, prd: 2, blk: "p", aWt: "15.9994", ctg: c5, clr: "colorLess", rdo: noVal, stc: crsBCM, phs: gas, dns: "0.001429", mlt: -218.79, bln: -182.95,  fsn: "0.222", vpn: "3.41", spc: "0.918", elc: "2, 6", cnf: "[He] 2s" + s2 + " 2p" + s4, aRd: "48", cRd: "66", eNg: "3.44", ion: "13.6181", trm: "0.0002674", oxi: "-2, -1, 1, 2", vol: "14.0", crt: "46%", uni: "1%", yr: "1771", mNo: 16, p: 8, e: 8, n: 8, cid: "977", cas: "7782-44-7"},
  { id: "ele9", num: "9", nme: "fluorine", sym: "F", grp: 17, prd: 2, blk: "p", aWt: "18.9984032", ctg: c7, clr: "colorLess", rdo: noVal, stc: crsBCM, phs: gas, dns: "0.001696", mlt: -219.62, bln: -188.12,  fsn: "0.26", vpn: "3.27", spc: "0.824", elc: "2, 7", cnf: "[He] 2s" + s2 + " 2p" + s5, aRd: "42", cRd: "64", eNg: "3.98", ion: "17.4228", trm: "0.000279", oxi: "-1", vol: "17.1", crt: "0.054%", uni: "0.00004%", yr: "1810", mNo: 19, p: 9, e: 9, n: 10, cid: "24524", cas: "7782-41-4"},
  { id: "ele10", num: "10", nme: "neon", sym: "Ne", grp: 18, prd: 2, blk: "p", aWt: "20.1797", ctg: c8, clr: "colorLess", rdo: noVal, stc: crsFCC, phs: gas, dns: "0.0008999", mlt: -248.59, bln: -246.08,  fsn: "0.34", vpn: "1.75", spc: "1.03", elc: "2, 8", cnf: "[He] 2s" + s2 + " 2p" + s6, aRd: "38", cRd: "58", eNg: "-", ion: "21.5645", trm: "0.000493", oxi: "0", vol: "16.7", crt: "3" + pc7, uni: "0.13%", yr: "1898", mNo: 20, p: 10, e: 10, n: 10, cid: "23935", cas: "7440-01-9"},
  { id: "ele11", num: "11", nme: "sodium", sym: "Na", grp: 1, prd: 3, blk: "s", aWt: "22.98976928", ctg: c1, clr: "colorSilver", rdo: noVal, stc: crsBCC, phs: sld, dns: "0.971", mlt: 97.72, bln: 883,  fsn: "2.6", vpn: "97.7", spc: "1.228", elc: "2, 8, 1", cnf: "[Ne] 3s" + s1, aRd: "186", cRd: "166", eNg: "0.93", ion: "5.1391", trm: "1.41", oxi: "-1, 1", vol: "23.7", crt: "2.3%", uni: "0.002%", yr: "1807", mNo: 23, p: 11, e: 11, n: 12, cid: "5360545", cas: "7440-23-5"},
  { id: "ele12", num: "12", nme: "magnesium", sym: "Mg", grp: 2, prd: 3, blk: "s", aWt: "24.305", ctg: c2, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "1.738", mlt: 650, bln: 1090,  fsn: "8.7", vpn: "128", spc: "1.023", elc: "2, 8, 2", cnf: "[Ne] 3s" + s2, aRd: "160", cRd: "141", eNg: "1.31", ion: "7.6462", trm: "1.56", oxi: "1, 2", vol: "13.97", crt: "2.9%", uni: "0.06%", yr: "1755", mNo: 24, p: 12, e: 12, n: 12, cid: "5462224", cas: "7439-95-4"},
  { id: "ele13", num: "13", nme: "aluminium", sym: "Al", grp: 13, prd: 3, blk: "p", aWt: "26.9815386", ctg: c4, clr: "colorSilver", rdo: noVal, stc: crsFCC, phs: sld, dns: "2.698", mlt: 660.32, bln: 2519,  fsn: "10.7", vpn: "293", spc: "0.897", elc: "2, 8, 3", cnf: "[Ne] 3s" + s2 + " 3p" + s1, aRd: "143", cRd: "121", eNg: "1.61", ion: "5.9858", trm: "2.37", oxi: "1, 3", vol: "9.98", crt: "8.1%", uni: "0.005%", yr: "1825", mNo: 27, p: 13, e: 13, n: 14, cid: "5359268", cas: "7429-90-5"},
  { id: "ele14", num: "14", nme: "silicon", sym: "Si", grp: 14, prd: 3, blk: "p", aWt: "28.0855", ctg: c6, clr: "colorGray", rdo: noVal, stc: crsTP, phs: sld, dns: "2.3296", mlt: 1414, bln: 3265,  fsn: "50.2", vpn: "359", spc: "0.705", elc: "2, 8, 4", cnf: "[Ne] 3s" + s2 + " 3p" + s2, aRd: "111", cRd: "111", eNg: "1.9", ion: "8.1517", trm: "1.48", oxi: "-4, -3, -2, -1, 1, 2, 3, 4", vol: "12.1", crt: "27%", uni: "0.07%", yr: "1824", mNo: 28, p: 14, e: 14, n: 14, cid: "5461123", cas: "7440-21-3"},
  { id: "ele15", num: "15", nme: "phosphorus", sym: "P", grp: 15, prd: 3, blk: "p", aWt: "30.973762", ctg: c5, clr: "colorLess", rdo: noVal, stc: crsSTC, phs: sld, dns: "1.82", mlt: 44.1, bln: 279.85,  fsn: "0.64", vpn: "12.4", spc: "0.769", elc: "2, 8, 5", cnf: "[Ne] 3s" + s2 + " 3p" + s3, aRd: "98", cRd: "107", eNg: "2.19", ion: "10.4867", trm: "0.00235", oxi: "-3, -2, -1, 1, 2, 3, 4, 5", vol: "17.0", crt: "0.099%", uni: "0.0007%", yr: "1669", mNo: 31, p: 15, e: 15, n: 16, cid: "5462309", cas: "7723-14-0"},
  { id: "ele16", num: "16", nme: "sulfur", sym: "S", grp: 16, prd: 3, blk: "p", aWt: "32.065", ctg: c5, clr: "colorYellow", rdo: noVal, stc: crsFCO, phs: sld, dns: "2.067", mlt: 115.21, bln: 444.65,  fsn: "1.73", vpn: "9.8", spc: "0.71", elc: "2, 8, 6", cnf: "[Ne] 3s" + s2 + " 3p" + s4, aRd: "88", cRd: "105", eNg: "2.58", ion: "10.36", trm: "0.00269", oxi: "-2, -1, 1, 2, 3, 4, 5, 6", vol: "15.5", crt: "0.042%", uni: "0.05%", yr: "500" + " BC", mNo: 32, p: 16, e: 16, n: 16, cid: "5362487", cas: "7704-34-9"},
  { id: "ele17", num: "17", nme: "chlorine", sym: "Cl", grp: 17, prd: 3, blk: "p", aWt: "35.453", ctg: c7, clr: "colorYellow", rdo: noVal, stc: crsBCO, phs: gas, dns: "0.003214", mlt: -101.5, bln: -34.04,  fsn: "3.2", vpn: "10.2", spc: "0.479", elc: "2, 8, 7", cnf: "[Ne] 3s" + s2 + " 3p" + s5, aRd: "79", cRd: "102", eNg: "3.16", ion: "12.9676", trm: "0.000089", oxi: "-1, 1, 2, 3, 4, 5, 6, 7", vol: "22.7", crt: "0.017%", uni: "0.0001%", yr: "1774", mNo: 35, p: 17, e: 17, n: 18, cid: "24526", cas: "7782-50-5"},
  { id: "ele18", num: "18", nme: "argon", sym: "Ar", grp: 18, prd: 3, blk: "p", aWt: "39.948", ctg: c8, clr: "colorLess", rdo: noVal, stc: crsFCC, phs: gas, dns: "0.0017837", mlt: -189.35, bln: -185.85,  fsn: "1.18", vpn: "6.5", spc: "0.52", elc: "2, 8, 8", cnf: "[Ne] 3s" + s2 + " 3p" + s6, aRd: "71", cRd: "106", eNg: "-", ion: "15.7596", trm: "0.0001772", oxi: "0", vol: "22.4", crt: "0.00015%", uni: "0.02%", yr: "1894", mNo: 40, p: 18, e: 18, n: 22, cid: "23968", cas: "7440-37-1"},
  { id: "ele19", num: "19", nme: "potassium", sym: "K", grp: 1, prd: 4, blk: "s", aWt: "39.0983", ctg: c1, clr: "colorSilver", rdo: noVal, stc: crsBCC, phs: sld, dns: "0.862", mlt: 63.38, bln: 759,  fsn: "2.33", vpn: "76.9", spc: "0.757", elc: "2, 8, 8, 1", cnf: "[Ar] 4s" + s1, aRd: "227", cRd: "203", eNg: "0.82", ion: "4.3407", trm: "1.024", oxi: "-1, 1", vol: "45.46", crt: "1.5%", uni: "0.0003%", yr: "1807", mNo: 39, p: 19, e: 19, n: 20, cid: "5462222", cas: "7440-09-7"},
  { id: "ele20", num: "20", nme: "calcium", sym: "Ca", grp: 2, prd: 4, blk: "s", aWt: "40.078", ctg: c2, clr: "colorSilver", rdo: noVal, stc: crsFCC, phs: sld, dns: "1.54", mlt: 842, bln: 1484,  fsn: "8.54", vpn: "155", spc: "0.647", elc: "2, 8, 8, 2", cnf: "[Ar] 4s" + s2, aRd: "197", cRd: "176", eNg: "1.00", ion: "6.1132", trm: "2.01", oxi: "1, 2", vol: "29.9", crt: "5%", uni: "0.007%", yr: "1808", mNo: 40, p: 20, e: 20, n: 20, cid: "5460341", cas: "7440-70-2"},
  { id: "ele21", num: "21", nme: "scandium", sym: "Sc", grp: 3, prd: 4, blk: "d", aWt: "44.955912", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "2.989", mlt: 1541, bln: 2836,  fsn: "16", vpn: "318", spc: "0.568", elc: "2, 8, 9, 2", cnf: "[Ar] 3d" + s1 + " 4s" + s2, aRd: "162", cRd: "170", eNg: "1.36", ion: "6.5615", trm: "0.158", oxi: "1, 2, 3", vol: "15.0", crt: "0.0026%", uni: "3" + pc6, yr: "1879", mNo: 45, p: 21, e: 21, n: 24, cid: "23952", cas: "7440-20-2"},
  { id: "ele22", num: "22", nme: "titanium", sym: "Ti", grp: 4, prd: 4, blk: "d", aWt: "47.867", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "4.54", mlt: 1668, bln: 3287,  fsn: "18.7", vpn: "425", spc: "0.523", elc: "2, 8, 10, 2", cnf: "[Ar] 3d" + s2 + " 4s" + s2, aRd: "147", cRd: "160", eNg: "1.54", ion: "6.8281", trm: "0.219", oxi: "-1, 2, 3, 4", vol: "10.64", crt: "0.66%", uni: "0.0003%", yr: "1791", mNo: 48, p: 22, e: 22, n: 26, cid: "23963", cas: "7440-32-6"},
  { id: "ele23", num: "23", nme: "vanadium", sym: "V", grp: 5, prd: 4, blk: "d", aWt: "50.9415", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsBCC, phs: sld, dns: "6.11", mlt: 1910, bln: 3407,  fsn: "22.8", vpn: "453", spc: "0.489", elc: "2, 8, 11, 2", cnf: "[Ar] 3d" + s3 + " 4s" + s2, aRd: "134", cRd: "153", eNg: "1.63", ion: "6.8281", trm: "0.307", oxi: "-1, 1, 2, 3, 4, 5", vol: "8.78", crt: "0.019%", uni: "0.0001%", yr: "1801", mNo: 51, p: 23, e: 23, n: 28, cid: "23990", cas: "7440-62-2"},
  { id: "ele24", num: "24", nme: "chromium", sym: "Cr", grp: 6, prd: 4, blk: "d", aWt: "51.9961", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsBCC, phs: sld, dns: "7.15", mlt: 1907, bln: 2671,  fsn: "20.5", vpn: "339", spc: "0.449", elc: "2, 8, 13, 1", cnf: "[Ar] 3d" + s5 + " 4s" + s1, aRd: "128", cRd: "139", eNg: "1.66", ion: "6.7665", trm: "0.937", oxi: "-2, -1, 1, 2, 3, 4, 5, 6", vol: "7.23", crt: "0.014%", uni: "0.0015%", yr: "1797", mNo: 52, p: 24, e: 24, n: 28, cid: "23976", cas: "7440-47-3"},
  { id: "ele25", num: "25", nme: "manganese", sym: "Mn", grp: 7, prd: 4, blk: "d", aWt: "54.938045", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsBCC, phs: sld, dns: "7.44", mlt: 1246, bln: 2061,  fsn: "13.2", vpn: "220", spc: "0.479", elc: "2, 8, 13, 2", cnf: "[Ar] 3d" + s5 + " 4s" + s2, aRd: "127", cRd: "139", eNg: "1.55", ion: "7.434", trm: "0.0782", oxi: "-3, -2, -1, 1, 2, 3, 4, 5, 6, 7", vol: "7.4", crt: "0.11%", uni: "0.0008%", yr: "1774", mNo: 55, p: 25, e: 25, n: 30, cid: "23930", cas: "7439-96-5"},
  { id: "ele26", num: "26", nme: "iron", sym: "Fe", grp: 8, prd: 4, blk: "d", aWt: "55.845", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsBCC, phs: sld, dns: "7.874", mlt: 1538, bln: 2861,  fsn: "13.8", vpn: "347", spc: "0.449", elc: "2, 8, 14, 2", cnf: "[Ar] 3d" + s6 + " 4s" + s2, aRd: "126", cRd: "132", eNg: "1.83", ion: "7.9024", trm: "0.802", oxi: "-2, -1, 1, 2, 3, 4, 5, 6, 7, 8", vol: "7.1", crt: "6.3%", uni: "0.11%", yr: "2000" + " BC", mNo: 56, p: 26, e: 26, n: 30, cid: "23925", cas: "7439-89-6"},
  { id: "ele27", num: "27", nme: "cobalt", sym: "Co", grp: 9, prd: 4, blk: "d", aWt: "58.933195", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsSH, phs: sld, dns: "8.86", mlt: 1495, bln: 2927,  fsn: "16.2", vpn: "375", spc: "0.421", elc: "2, 8, 15, 2", cnf: "[Ar] 3d" + s7 + " 4s" + s2, aRd: "125", cRd: "126", eNg: "1.88", ion: "7.881", trm: "1", oxi: "-1, 1, 2, 3, 4, 5", vol: "6.7", crt: "0.003%", uni: "0.0003%", yr: "1735", mNo: 59, p: 27, e: 27, n: 32, cid: "104730", cas: "7440-48-4"},
  { id: "ele28", num: "28", nme: "nickel", sym: "Ni", grp: 10, prd: 4, blk: "d", aWt: "58.6934", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsFCC, phs: sld, dns: "8.912", mlt: 1455, bln: 2913,  fsn: "17.2", vpn: "378", spc: "0.444", elc: "2, 8, 16, 2", cnf: "[Ar] 3d" + s8 + " 4s" + s2, aRd: "124", cRd: "124", eNg: "1.91", ion: "7.6398", trm: "0.907", oxi: "-1, 1, 2, 3, 4", vol: "6.59", crt: "0.0089%", uni: "0.006%", yr: "1751", mNo: 59, p: 28, e: 28, n: 31, cid: "935", cas: "7440-02-0"},
  { id: "ele29", num: "29", nme: "copper", sym: "Cu", grp: 11, prd: 4, blk: "d", aWt: "63.546", ctg: c3, clr: "colorCopper", rdo: noVal, stc: crsFCC, phs: sld, dns: "8.96", mlt: 1084.6, bln: 2562,  fsn: "13.1", vpn: "300", spc: "0.385", elc: l3 + ", 1", cnf: "[Ar] 3d" + s10 + " 4s" + s1, aRd: "128", cRd: "132", eNg: "1.9", ion: "7.7264", trm: "4.01", oxi: "1, 2, 3, 4", vol: "7.1", crt: "0.0068%", uni: "6" + pc6, yr: "8000" + " BC", mNo: 64, p: 29, e: 29, n: 35, cid: "23978", cas: "7440-50-8"},
  { id: "ele30", num: "30", nme: "zinc", sym: "Zn", grp: 12, prd: 4, blk: "d", aWt: "65.38", ctg: c3, clr: "colorSlateGray", rdo: noVal, stc: crsSH, phs: sld, dns: "7.134", mlt: 419.53, bln: 907,  fsn: "7.35", vpn: "119", spc: "0.388", elc: l3 + ", 2", cnf: "[Ar] 3d" + s10 + " 4s" + s2, aRd: "134", cRd: "122", eNg: "1.65", ion: "9.3942", trm: "1.16", oxi: "1, 2", vol: "9.2", crt: "0.0078%", uni: "0.00003%", yr: "1000" + " BC", mNo: 65, p: 30, e: 30, n: 35, cid: "23994", cas: "7440-66-6"},
  { id: "ele31", num: "31", nme: "gallium", sym: "Ga", grp: 13, prd: 4, blk: "p", aWt: "69.723", ctg: c4, clr: "colorSilver", rdo: noVal, stc: crsBCO, phs: sld, dns: "5.907", mlt: 29.76, bln: 2204,  fsn: "5.59", vpn: "256", spc: "0.371", elc: l3 + ", 3", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s1, aRd: "135", cRd: "122", eNg: "1.81", ion: "5.9993", trm: "0.406", oxi: "1, 2, 3", vol: "11.8", crt: "0.0019%", uni: "1" + pc6, yr: "1875", mNo: 70, p: 31, e: 31, n: 39, cid: "5360835", cas: "7440-55-3"},
  { id: "ele32", num: "32", nme: "germanium", sym: "Ge", grp: 14, prd: 4, blk: "p", aWt: "72.63", ctg: c6, clr: "colorGray", rdo: noVal, stc: crsFCC, phs: sld, dns: "5.323", mlt: 938.25, bln: 2833,  fsn: "31.8", vpn: "334", spc: "0.32", elc: l3 + ", 4", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s2, aRd: "122", cRd: "122", eNg: "2.01", ion: "7.8994", trm: "0.599", oxi: "-4, 1, 2, 3, 4", vol: "13.6", crt: "0.00014%", uni: "0.00002%", yr: "1886", mNo: 73, p: 32, e: 32, n: 41, cid: "6326954", cas: "7440-56-4"},
  { id: "ele33", num: "33", nme: "arsenic", sym: "As", grp: 15, prd: 4, blk: "p", aWt: "74.9216", ctg: c6, clr: "colorSilver", rdo: noVal, stc: crsSTG, phs: sld, dns: "5.776", mlt: 817, bln: 603,  fsn: "27.7", vpn: "32.4", spc: "0.329", elc: l3 + ", 5", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s3, aRd: "119", cRd: "119", eNg: "2.18", ion: "9.7886", trm: "0.502", oxi: "-3, 2, 3, 5", vol: "12.97", crt: "0.00021%", uni: "8" + pc7, yr: "2500" + " BC", mNo: 75, p: 33, e: 33, n: 42, cid: "5359596", cas: "7440-38-2"},
  { id: "ele34", num: "34", nme: "selenium", sym: "Se", grp: 16, prd: 4, blk: "p", aWt: "78.96", ctg: c5, clr: "colorGray", rdo: noVal, stc: crsSM, phs: sld, dns: "4.809", mlt: 221, bln: 685,  fsn: "5.4", vpn: "26", spc: "0.321", elc: l3 + ", 6", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s4, aRd: "120", cRd: "120", eNg: "2.55", ion: "9.7524", trm: "0.0204", oxi: "-2, 2, 4, 6", vol: "16.45", crt: "5" + pc6, uni: "3" + pc6, yr: "1817", mNo: 79, p: 34, e: 34, n: 45, cid: "6326970", cas: "7782-49-2"},
  { id: "ele35", num: "35", nme: "bromine", sym: "Br", grp: 17, prd: 4, blk: "p", aWt: "79.904", ctg: c7, clr: "colorRed", rdo: noVal, stc: crsBCO, phs: lqd, dns: "3.122", mlt: -7.2, bln: 58.8,  fsn: "5.8", vpn: "14.8", spc: "0.474", elc: l3 + ", 7", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s5, aRd: "120", cRd: "120", eNg: "2.96", ion: "11.8138", trm: "0.00122", oxi: "-1, 1, 3, 4, 5, 7", vol: "23.5", crt: "0.0003%", uni: "7" + pc7, yr: "1825", mNo: 80, p: 35, e: 35, n: 45, cid: "24408", cas: "7726-95-6"},
  { id: "ele36", num: "36", nme: "krypton", sym: "Kr", grp: 18, prd: 4, blk: "p", aWt: "83.798", ctg: c8, clr: "colorLess", rdo: noVal, stc: crsFCC, phs: gas, dns: "0.003733", mlt: -157.36, bln: -153.22,  fsn: "1.64", vpn: "9.02", spc: "0.248", elc: l3 + ", 8", cnf: "[Ar] 3d" + s10 + " 4s" + s2 + " 4p" + s6, aRd: "88", cRd: "116", eNg: "3.00", ion: "13.9996", trm: "0.0000949", oxi: "2", vol: "38.9", crt: "1.5" + pc8, uni: "4" + pc6, yr: "1898", mNo: 84, p: 36, e: 36, n: 48, cid: "5416", cas: "7439-90-9"},
  { id: "ele37", num: "37", nme: "rubidium", sym: "Rb", grp: 1, prd: 5, blk: "s", aWt: "85.4678", ctg: c1, clr: "colorSilver", rdo: noVal, stc: crsBCC, phs: sld, dns: "1.532", mlt: 39.31, bln: 688,  fsn: "2.19", vpn: "72", spc: "0.363", elc: l3 + ", 8, 1", cnf: "[Kr] 5s" + s1, aRd: "248", cRd: "220", eNg: "0.82", ion: "4.1771", trm: "0.582", oxi: "-1, 1", vol: "55.9", crt: "0.006%", uni: "1" + pc6, yr: "1861", mNo: 85, p: 37, e: 37, n: 48, cid: "5357696", cas: "7440-17-7"},
  { id: "ele38", num: "38", nme: "strontium", sym: "Sr", grp: 2, prd: 5, blk: "s", aWt: "87.62", ctg: c2, clr: "colorSilver", rdo: noVal, stc: crsFCC, phs: sld, dns: "2.64", mlt: 777, bln: 1382,  fsn: "8", vpn: "137", spc: "0.301", elc: l3 + ", 8, 2", cnf: "[Kr] 5s" + s2, aRd: "215", cRd: "195", eNg: "0.95", ion: "5.6949", trm: "0.353", oxi: "1, 2", vol: "33.7", crt: "0.036%", uni: "4" + pc6, yr: "1790", mNo: 88, p: 38, e: 38, n: 50, cid: "5359327", cas: "7440-24-6"},
  { id: "ele39", num: "39", nme: "yttrium", sym: "Y", grp: 3, prd: 5, blk: "d", aWt: "88.90585", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "4.469", mlt: 1526, bln: 3336,  fsn: "11.4", vpn: "380", spc: "0.298", elc: l3 + ", 9, 2", cnf: "[Kr] 4d" + s1 + " 5s" + s2, aRd: "180", cRd: "190", eNg: "1.22", ion: "6.2173", trm: "0.172", oxi: "1, 2, 3", vol: "19.8", crt: "0.0029%", uni: "7" + pc7, yr: "1794", mNo: 89, p: 39, e: 39, n: 50, cid: "23993", cas: "7440-65-5"},
  { id: "ele40", num: "40", nme: "zirconium", sym: "Zr", grp: 4, prd: 5, blk: "d", aWt: "91.224", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "6.506", mlt: 1855, bln: 4409,  fsn: "21", vpn: "580", spc: "0.278", elc: l3 + ", 10, 2", cnf: "[Kr] 4d" + s2 + " 5s" + s2, aRd: "160", cRd: "175", eNg: "1.33", ion: "6.6339", trm: "0.227", oxi: "1, 2, 3, 4", vol: "14.0", crt: "0.013%", uni: "5" + pc6, yr: "1789", mNo: 91, p: 40, e: 40, n: 51, cid: "23995", cas: "7440-67-7"},
  { id: "ele41", num: "41", nme: "niobium", sym: "Nb", grp: 5, prd: 5, blk: "d", aWt: "92.90638", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsBCC, phs: sld, dns: "8.57", mlt: 2477, bln: 4744,  fsn: "26.8", vpn: "690", spc: "0.265", elc: l3 + ", 12, 1", cnf: "[Kr] 4d" + s4 + " 5s" + s1, aRd: "146", cRd: "164", eNg: "1.6", ion: "6.7589", trm: "0.537", oxi: "-1, 2, 3, 4, 5", vol: "10.87", crt: "0.0017%", uni: "2" + pc7, yr: "1801", mNo: 93, p: 41, e: 41, n: 52, cid: "23936", cas: "7440-03-1"},
  { id: "ele42", num: "42", nme: "molybdenum", sym: "Mo", grp: 6, prd: 5, blk: "d", aWt: "95.96", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsBCC, phs: sld, dns: "10.22", mlt: 2623, bln: 4639,  fsn: "36", vpn: "600", spc: "0.251", elc: l3 + ", 13, 1", cnf: "[Kr] 4d" + s5 + " 5s" + s1, aRd: "139", cRd: "154", eNg: "2.16", ion: "7.0924", trm: "1.38", oxi: "-2, -1, 1, 2, 3, 4, 5, 6", vol: "9.4", crt: "0.00011%", uni: "5" + pc7, yr: "1778", mNo: 96, p: 42, e: 42, n: 54, cid: "23932", cas: "7439-98-7"},
  { id: "ele43", num: "43", nme: "technetium", sym: "Tc", grp: 7, prd: 5, blk: "d", aWt: "[98]", ctg: c3, clr: "colorSilver", rdo: yesVal, stc: crsSH, phs: sld, dns: "11.5", mlt: 2157, bln: 4265,  fsn: "23", vpn: "550", spc: "-", elc: l3 + ", 13, 2", cnf: "[Kr] 4d" + s5 + " 5s" + s2, aRd: "136", cRd: "147", eNg: "1.9", ion: "7.28", trm: "0.506", oxi: "-3, -1, 1, 2, 3, 4, 5, 6, 7", vol: "8.5", crt: naVal, uni: naVal, yr: "1937", mNo: 98, p: 43, e: 43, n: 55, cid: naVal, cas: "7440-26-8"},
  { id: "ele44", num: "44", nme: "ruthenium", sym: "Ru", grp: 8, prd: 5, blk: "d", aWt: "101.07", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "12.37", mlt: 2334, bln: 4150,  fsn: "25.7", vpn: "580", spc: "0.238", elc: l3 + ", 15, 1", cnf: "[Kr] 4d" + s7 + " 5s" + s1, aRd: "134", cRd: "146", eNg: "2.2", ion: "7.3605", trm: "1.17", oxi: "-2, 1, 2, 3, 4, 5, 6, 7, 8", vol: "8.3", crt: "9.9" + pc8, uni: "4" + pc7, yr: "1844", mNo: 101, p: 44, e: 44, n: 57, cid: "23950", cas: "7440-18-8"},
  { id: "ele45", num: "45", nme: "rhodium", sym: "Rh", grp: 9, prd: 5, blk: "d", aWt: "102.9055", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsFCC, phs: sld, dns: "12.41", mlt: 1964, bln: 3695,  fsn: "21.7", vpn: "495", spc: "0.243", elc: l3 + ", 16, 1", cnf: "[Kr] 4d" + s8 + " 5s" + s1, aRd: "134", cRd: "142", eNg: "2.28", ion: "7.4589", trm: "1.5", oxi: "-1, 1, 2, 3, 4, 5, 6", vol: "8.3", crt: "7" + pc8, uni: "6" + pc8, yr: "1803", mNo: 103, p: 45, e: 45, n: 58, cid: "23948", cas: "7440-16-6"},
  { id: "ele46", num: "46", nme: "palladium", sym: "Pd", grp: 10, prd: 5, blk: "d", aWt: "106.42", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsFCC, phs: sld, dns: "12.02", mlt: 1554.9, bln: 2963,  fsn: "16.7", vpn: "380", spc: "0.244", elc: l3 + ", 18", cnf: "[Kr] 4d" + s10, aRd: "137", cRd: "139", eNg: "2.2", ion: "8.3369", trm: "0.718", oxi: "2, 4", vol: "8.9", crt: "6.3" + pc7, uni: "2" + pc7, yr: "1803", mNo: 106, p: 46, e: 46, n: 60, cid: "23938", cas: "7440-05-3"},
  { id: "ele47", num: "47", nme: "silver", sym: "Ag", grp: 11, prd: 5, blk: "d", aWt: "107.8682", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsFCC, phs: sld, dns: "10.49", mlt: 961.78, bln: 2162,  fsn: "11.3", vpn: "255", spc: "0.235", elc: l3 + ", 18, 1", cnf: "[Kr] 4d" + s10 + " 5s" + s1, aRd: "144", cRd: "145", eNg: "1.93", ion: "7.5762", trm: "4.29", oxi: "1, 2, 3", vol: "10.3", crt: "7.9" + pc6, uni: "6" + pc8, yr: "3000" + " BC", mNo: 108, p: 47, e: 47, n: 61, cid: "23954", cas: "7440-22-4"},
  { id: "ele48", num: "48", nme: "cadmium", sym: "Cd", grp: 12, prd: 5, blk: "d", aWt: "112.411", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "8.69", mlt: 321.07, bln: 767,  fsn: "6.3", vpn: "100", spc: "0.232", elc: l3 + ", 18, 2", cnf: "[Kr] 4d" + s10 + " 5s" + s2, aRd: "151", cRd: "144", eNg: "1.69", ion: "8.9938", trm: "0.968", oxi: "1, 2", vol: "13.1", crt: "0.000015%", uni: "2" + pc7, yr: "1817", mNo: 112, p: 48, e: 48, n: 64, cid: "23973", cas: "7440-43-9"},
  { id: "ele49", num: "49", nme: "indium", sym: "In", grp: 13, prd: 5, blk: "p", aWt: "114.818", ctg: c4, clr: "colorSilver", rdo: noVal, stc: crsCT, phs: sld, dns: "7.31", mlt: 156.6, bln: 2072,  fsn: "3.26", vpn: "230", spc: "0.233", elc: l3 + ", 18, 3", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s1, aRd: "167", cRd: "142", eNg: "1.78", ion: "5.7864", trm: "0.816", oxi: "1, 2, 3", vol: "15.7", crt: "0.000016%", uni: "3" + pc8, yr: "1864", mNo: 115, p: 49, e: 49, n: 66, cid: "5359967", cas: "7440-74-6"},
  { id: "ele50", num: "50", nme: "tin", sym: "Sn", grp: 14, prd: 5, blk: "p", aWt: "118.71", ctg: c4, clr: "colorSilver", rdo: noVal, stc: crsCT, phs: sld, dns: "7.287", mlt: 231.93, bln: 2602,  fsn: "7", vpn: "290", spc: "0.228", elc: l3 + ", 18, 4", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s2, aRd: "140", cRd: "139", eNg: "1.96", ion: "7.3439", trm: "0.666", oxi: "-4, 2, 4", vol: "16.3", crt: "0.00022%", uni: "4" + pc7, yr: "3000" + " BC", mNo: 119, p: 50, e: 50, n: 69, cid: "5352426", cas: "7440-31-5"},
  { id: "ele51", num: "51", nme: "antimony", sym: "Sb", grp: 15, prd: 5, blk: "p", aWt: "121.76", ctg: c6, clr: "colorSilver", rdo: noVal, stc: crsSTG, phs: sld, dns: "6.685", mlt: 630.63, bln: 1587,  fsn: "19.7", vpn: "68", spc: "0.207", elc: l3 + ", 18, 5", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s3, aRd: "140", cRd: "139", eNg: "2.05", ion: "8.6084", trm: "0.243", oxi: "-3, 3, 5", vol: "18.22", crt: "0.00002%", uni: "4" + pc8, yr: "3000" + " BC", mNo: 122, p: 51, e: 51, n: 71, cid: "5354495", cas: "7440-36-0"},
  { id: "ele52", num: "52", nme: "tellurium", sym: "Te", grp: 16, prd: 5, blk: "p", aWt: "127.6", ctg: c6, clr: "colorSilver", rdo: noVal, stc: crsSTG, phs: sld, dns: "6.232", mlt: 449.51, bln: 988,  fsn: "17.5", vpn: "48", spc: "0.202", elc: l3 + ", 18, 6", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s4, aRd: "140", cRd: "138", eNg: "2.1", ion: "9.0096", trm: "0.0235", oxi: "-2, 2, 4, 5, 6", vol: "20.5", crt: "9.9" + pc8, uni: "9" + pc7, yr: "1782", mNo: 128, p: 52, e: 52, n: 76, cid: "6327182", cas: "13494-80-9"},
  { id: "ele53", num: "53", nme: "iodine", sym: "I", grp: 17, prd: 5, blk: "p", aWt: "126.90447", ctg: c7, clr: "colorSlateGray", rdo: noVal, stc: crsBCO, phs: sld, dns: "4.93", mlt: 113.7, bln: 184.25,  fsn: "7.76", vpn: "20.9", spc: "0.214", elc: l3 + ", 18, 7", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s5, aRd: "140", cRd: "139", eNg: "2.66", ion: "10.4513", trm: "0.00449", oxi: "-1, 1, 3, 5, 7", vol: "25.74", crt: "0.000049%", uni: "1" + pc7, yr: "1811", mNo: 127, p: 53, e: 53, n: 74, cid: "807", cas: "7553-56-2"},
  { id: "ele54", num: "54", nme: "xenon", sym: "Xe", grp: 18, prd: 5, blk: "p", aWt: "131.293", ctg: c8, clr: "colorLess", rdo: noVal, stc: crsFCC, phs: gas, dns: "0.005887", mlt: -111.7, bln: -108.12,  fsn: "2.3", vpn: "12.64", spc: "0.158", elc: l3 + ", 18, 8", cnf: "[Kr] 4d" + s10 + " 5s" + s2 + " 5p" + s6, aRd: "108", cRd: "140", eNg: "2.6", ion: "12.1298", trm: "0.0000569", oxi: "2, 4, 6, 8", vol: "37.3", crt: "2" + pc9, uni: "1" + pc6, yr: "1898", mNo: 131, p: 54, e: 54, n: 77, cid: "23991", cas: "7440-63-3"},
  { id: "ele55", num: "55", nme: "caesium", sym: "Cs", grp: 1, prd: 6, blk: "s", aWt: "132.9054519", ctg: c1, clr: "colorSilver", rdo: yesVal, stc: crsBCC, phs: sld, dns: "1.873", mlt: 28.44, bln: 671,  fsn: "2.09", vpn: "65", spc: "0.242", elc: l3 + ", 18, 8, 1", cnf: "[Xe] 6s" + s1, aRd: "265", cRd: "244", eNg: "0.79", ion: "3.8939", trm: "0.359", oxi: "-1, 1", vol: "71.07", crt: "0.00019%", uni: "8" + pc8, yr: "1860", mNo: 133, p: 55, e: 55, n: 78, cid: "5354618", cas: "7440-46-2"},
  { id: "ele56", num: "56", nme: "barium", sym: "Ba", grp: 2, prd: 6, blk: "s", aWt: "137.327", ctg: c2, clr: "colorSilver", rdo: noVal, stc: crsBCC, phs: sld, dns: "3.594", mlt: 727, bln: 1897,  fsn: "8", vpn: "140", spc: "0.204", elc: l3 + ", 18, 8, 2", cnf: "[Xe] 6s" + s2, aRd: "222", cRd: "215", eNg: "0.89", ion: "5.2117", trm: "0.184", oxi: "2", vol: "39.24", crt: "0.034%", uni: "1" + pc6, yr: "1774", mNo: 137, p: 56, e: 56, n: 81, cid: "5355457", cas: "7440-39-3"},
  { id: "ele57", num: "57", nme: "lanthanum", sym: "La", grp: naVal, prd: 6, blk: "f", aWt: "138.90547", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "6.145", mlt: 920, bln: 3464,  fsn: "6.2", vpn: "400", spc: "0.195", elc: l3 + ", 18, 9, 2", cnf: "[Xe] 5d" + s1 + " 6s" + s2, aRd: "187", cRd: "207", eNg: "1.1", ion: "5.5769", trm: "0.135", oxi: "2, 3", vol: "22.5", crt: "0.0034%", uni: "2" + pc7, yr: "1839", mNo: 139, p: 57, e: 57, n: 82, cid: "23926", cas: "7439-91-0"},
  { id: "ele58", num: "58", nme: "cerium", sym: "Ce", grp: naVal, prd: 6, blk: "f", aWt: "140.116", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "6.77", mlt: 795, bln: 3443,  fsn: "5.5", vpn: "350", spc: "0.192", elc: l3 + ", 19, 9, 2", cnf: "[Xe] 4f" + s1 + " 5d" + s1 + " 6s" + s2, aRd: "182", cRd: "204", eNg: "1.12", ion: "5.5387", trm: "0.114", oxi: "2, 3, 4", vol: "20.67", crt: "0.006%", uni: "1" + pc6, yr: "1803", mNo: 140, p: 58, e: 58, n: 82, cid: "23974", cas: "7440-45-1"},
  { id: "ele59", num: "59", nme: "praseodymium", sym: "Pr", grp: naVal, prd: 6, blk: "f", aWt: "140.90765", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "6.773", mlt: 935, bln: 3520,  fsn: "6.9", vpn: "330", spc: "0.193", elc: l3 + ", 21, 8, 2", cnf: "[Xe] 4f" + s3 + " 6s" + s2, aRd: "182", cRd: "203", eNg: "1.13", ion: "5.473", trm: "0.125", oxi: "2, 3, 4", vol: "20.8", crt: "0.00086%", uni: "2" + pc7, yr: "1885", mNo: 141, p: 59, e: 59, n: 82, cid: "23942", cas: "7440-10-0"},
  { id: "ele60", num: "60", nme: "neodymium", sym: "Nd", grp: naVal, prd: 6, blk: "f", aWt: "144.242", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "7.007", mlt: 1024, bln: 3074,  fsn: "7.1", vpn: "285", spc: "0.19", elc: l3 + ", 22, 8, 2", cnf: "[Xe] 4f" + s4 + " 6s" + s2, aRd: "181", cRd: "201", eNg: "1.14", ion: "5.525", trm: "0.165", oxi: "2, 3", vol: "20.6", crt: "0.0033%", uni: "1" + pc6, yr: "1885", mNo: 144, p: 60, e: 60, n: 84, cid: "23934", cas: "7440-00-8"},
  { id: "ele61", num: "61", nme: "promethium", sym: "Pm", grp: naVal, prd: 6, blk: "f", aWt: "[145]", ctg: c9, clr: "colorSilver", rdo: yesVal, stc: naVal, phs: sld, dns: "7.26", mlt: 1042, bln: 3000,  fsn: "7.7", vpn: "290", spc: "-", elc: l3 + ", 23, 8, 2", cnf: "[Xe] 4f" + s5 + " 6s" + s2, aRd: "183", cRd: "199", eNg: "-", ion: "5.582", trm: "0.179", oxi: "3", vol: "22.39", crt: naVal, uni: naVal, yr: "1945", mNo: 145, p: 61, e: 61, n: 84, cid: naVal, cas: "7440-12-2"},
  { id: "ele62", num: "62", nme: "samarium", sym: "Sm", grp: naVal, prd: 6, blk: "f", aWt: "150.36", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSTG, phs: sld, dns: "7.52", mlt: 1072, bln: 1794,  fsn: "8.6", vpn: "175", spc: "0.197", elc: l3 + ", 24, 8, 2", cnf: "[Xe] 4f" + s6 + " 6s" + s2, aRd: "180", cRd: "198", eNg: "1.17", ion: "5.6437", trm: "0.133", oxi: "2, 3", vol: "20.0", crt: "0.0006%", uni: "5" + pc7, yr: "1879", mNo: 150, p: 62, e: 62, n: 88, cid: "23951", cas: "7440-19-9"},
  { id: "ele63", num: "63", nme: "europium", sym: "Eu", grp: naVal, prd: 6, blk: "f", aWt: "151.964", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsBCC, phs: sld, dns: "5.243", mlt: 826, bln: 1529,  fsn: "9.2", vpn: "175", spc: "0.182", elc: l3 + ", 25, 8, 2", cnf: "[Xe] 4f" + s7 + " 6s" + s2, aRd: "180", cRd: "198", eNg: "1.2", ion: "5.6704", trm: "0.139", oxi: "2, 3", vol: "20.8", crt: "0.00018%", uni: "5" + pc8, yr: "1896", mNo: 152, p: 63, e: 63, n: 89, cid: "23981", cas: "7440-53-1"},
  { id: "ele64", num: "64", nme: "gadolinium", sym: "Gd", grp: naVal, prd: 6, blk: "f", aWt: "157.25", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "7.895", mlt: 1312, bln: 3273,  fsn: "10", vpn: "305", spc: "0.236", elc: l3 + ", 25, 9, 2", cnf: "[Xe] 4f" + s7 + " 5d" + s1 + " 6s" + s2, aRd: "180", cRd: "196", eNg: "1.2", ion: "6.1501", trm: "0.106", oxi: "1, 2, 3", vol: "19.9", crt: "0.00052%", uni: "2" + pc7, yr: "1880", mNo: 157, p: 64, e: 64, n: 93, cid: "23982", cas: "7440-54-2"},
  { id: "ele65", num: "65", nme: "terbium", sym: "Tb", grp: naVal, prd: 6, blk: "f", aWt: "158.92535", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "8.229", mlt: 1356, bln: 3230,  fsn: "10.8", vpn: "295", spc: "0.182", elc: l3 + ", 27, 8, 2", cnf: "[Xe] 4f" + s9 + " 6s" + s2, aRd: "177", cRd: "194", eNg: "1.2", ion: "5.8638", trm: "0.111", oxi: "1, 3, 4", vol: "19.20", crt: "0.000093%", uni: "5" + pc8, yr: "1843", mNo: 159, p: 65, e: 65, n: 94, cid: "23958", cas: "7440-27-9"},
  { id: "ele66", num: "66", nme: "dysprosium", sym: "Dy", grp: naVal, prd: 6, blk: "f", aWt: "162.5", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "8.55", mlt: 1407, bln: 2567,  fsn: "11.1", vpn: "280", spc: "0.17", elc: l3 + ", 28, 8, 2", cnf: "[Xe] 4f" + s10 + " 6s" + s2, aRd: "178", cRd: "192", eNg: "1.22", ion: "5.9389", trm: "0.107", oxi: "2, 3", vol: "19.0", crt: "0.00062%", uni: "2" + pc7, yr: "1886", mNo: 163, p: 66, e: 66, n: 97, cid: "23912", cas: "7429-91-6"},
  { id: "ele67", num: "67", nme: "holmium", sym: "Ho", grp: naVal, prd: 6, blk: "f", aWt: "164.93032", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "8.795", mlt: 1461, bln: 2720,  fsn: "17", vpn: "265", spc: "0.165", elc: l3 + ", 29, 8, 2", cnf: "[Xe] 4f" + s11 + " 6s" + s2, aRd: "176", cRd: "192", eNg: "1.23", ion: "6.0215", trm: "0.162", oxi: "3", vol: "18.7", crt: "0.00012%", uni: "5" + pc8, yr: "1878", mNo: 165, p: 67, e: 67, n: 98, cid: "23988", cas: "7440-60-0"},
  { id: "ele68", num: "68", nme: "erbium", sym: "Er", grp: naVal, prd: 6, blk: "f", aWt: "167.259", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "9.066", mlt: 1529, bln: 2868,  fsn: "19.9", vpn: "285", spc: "0.168", elc: l3 + ", 30, 8, 2", cnf: "[Xe] 4f" + s12 + " 6s" + s2, aRd: "176", cRd: "189", eNg: "1.24", ion: "6.1077", trm: "0.143", oxi: "3", vol: "18.4", crt: "0.0003%", uni: "2" + pc7, yr: "1843", mNo: 167, p: 68, e: 68, n: 99, cid: "23980", cas: "7440-52-0"},
  { id: "ele69", num: "69", nme: "thulium", sym: "Tm", grp: naVal, prd: 6, blk: "f", aWt: "168.93421", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "9.321", mlt: 1545, bln: 1950,  fsn: "16.8", vpn: "250", spc: "0.16", elc: l3 + ", 31, 8, 2", cnf: "[Xe] 4f" + s13 + " 6s" + s2, aRd: "176", cRd: "190", eNg: "1.25", ion: "6.1843", trm: "0.168", oxi: "2, 3", vol: "18.1", crt: "0.000045%", uni: "1" + pc8, yr: "1879", mNo: 169, p: 69, e: 69, n: 100, cid: "23961", cas: "7440-30-4"},
  { id: "ele70", num: "70", nme: "ytterbium", sym: "Yb", grp: naVal, prd: 6, blk: "f", aWt: "173.054", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsFCC, phs: sld, dns: "6.965", mlt: 824, bln: 1196,  fsn: "7.7", vpn: "160", spc: "0.155", elc: l4 + ", 8, 2", cnf: "[Xe] 4f" + s14 + " 6s" + s2, aRd: "176", cRd: "187", eNg: "1.1", ion: "6.2542", trm: "0.349", oxi: "2, 3", vol: "24.79", crt: "0.00028%", uni: "2" + pc7, yr: "1878", mNo: 173, p: 70, e: 70, n: 103, cid: "23992", cas: "7440-64-4"},
  { id: "ele71", num: "71", nme: "lutetium", sym: "Lu", grp: naVal, prd: 6, blk: "d", aWt: "174.9668", ctg: c9, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "9.84", mlt: 1652, bln: 3402,  fsn: "22", vpn: "415", spc: "0.154", elc: l4 + ", 9, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s1 + " 6s" + s2, aRd: "174", cRd: "187", eNg: "1.27", ion: "5.4259", trm: "0.164", oxi: "3", vol: "17.78", crt: "0.000056%", uni: "1" + pc8, yr: "1907", mNo: 175, p: 71, e: 71, n: 104, cid: "23929", cas: "7439-94-3"},
  { id: "ele72", num: "72", nme: "hafnium", sym: "Hf", grp: 4, prd: 6, blk: "d", aWt: "178.49", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsSH, phs: sld, dns: "13.31", mlt: 2233, bln: 4603,  fsn: "25.5", vpn: "630", spc: "0.144", elc: l4 + ", 10, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s2 + " 6s" + s2, aRd: "159", cRd: "175", eNg: "1.3", ion: "6.8251", trm: "0.23", oxi: "2, 3, 4", vol: "13.6", crt: "0.00033%", uni: "7" + pc8, yr: "1922", mNo: 178, p: 72, e: 72, n: 106, cid: "23986", cas: "7440-58-6"},
  { id: "ele73", num: "73", nme: "tantalum", sym: "Ta", grp: 5, prd: 6, blk: "d", aWt: "180.94788", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsBCC, phs: sld, dns: "16.654", mlt: 3017, bln: 5458,  fsn: "36", vpn: "735", spc: "0.14", elc: l4 + ", 11, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s3 + " 6s" + s2, aRd: "146", cRd: "170", eNg: "1.5", ion: "7.5496", trm: "0.575", oxi: "-1, 2, 3, 4, 5", vol: "10.90", crt: "0.00017%", uni: "8" + pc9, yr: "1802", mNo: 181, p: 73, e: 73, n: 108, cid: "23956", cas: "7440-25-7"},
  { id: "ele74", num: "74", nme: "tungsten", sym: "W", grp: 6, prd: 6, blk: "d", aWt: "183.84", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsBCC, phs: sld, dns: "19.25", mlt: 3422, bln: 5555,  fsn: "35", vpn: "800", spc: "0.132", elc: l4 + ", 12, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s4 + " 6s" + s2, aRd: "139", cRd: "162", eNg: "2.36", ion: "7.864", trm: "1.74", oxi: "-2, -1, 1, 2, 3, 4, 5, 6", vol: "9.53", crt: "0.00011%", uni: "5" + pc8, yr: "1781", mNo: 184, p: 74, e: 74, n: 110, cid: "23964", cas: "7440-33-7"},
  { id: "ele75", num: "75", nme: "rhenium", sym: "Re", grp: 7, prd: 6, blk: "d", aWt: "186.207", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsSH, phs: sld, dns: "21.02", mlt: 3186, bln: 5596,  fsn: "33", vpn: "705", spc: "0.137", elc: l4 + ", 13, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s5 + " 6s" + s2, aRd: "137", cRd: "151", eNg: "1.9", ion: "7.8335", trm: "0.479", oxi: "-3, -1, 1, 2, 3, 4, 5, 6, 7", vol: "8.85", crt: "2.6" + pc7, uni: "2" + pc8, yr: "1908", mNo: 186, p: 75, e: 75, n: 111, cid: "23947", cas: "7440-15-5"},
  { id: "ele76", num: "76", nme: "osmium", sym: "Os", grp: 8, prd: 6, blk: "d", aWt: "190.23", ctg: c3, clr: "colorSlateGray", rdo: noVal, stc: crsSH, phs: sld, dns: "22.61", mlt: 3033, bln: 5012,  fsn: "31", vpn: "630", spc: "0.13", elc: l4 + ", 14, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s6 + " 6s" + s2, aRd: "135", cRd: "144", eNg: "2.2", ion: "8.4382", trm: "0.876", oxi: "-2, 1, 2, 3, 4, 5, 6, 7, 8", vol: "8.49", crt: "1.8" + pc7, uni: "3" + pc7, yr: "1803", mNo: 190, p: 76, e: 76, n: 114, cid: "23937", cas: "7440-04-2"},
  { id: "ele77", num: "77", nme: "iridium", sym: "Ir", grp: 9, prd: 6, blk: "d", aWt: "192.217", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsFCC, phs: sld, dns: "22.56", mlt: 2466, bln: 4428,  fsn: "26", vpn: "560", spc: "0.131", elc: l4 + ", 15, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s7 + " 6s" + s2, aRd: "136", cRd: "141", eNg: "2.2", ion: "8.967", trm: "1.47", oxi: "-3, -1, 1, 2, 3, 4, 5, 6, 7, 8", vol: "8.54", crt: "4" + pc8, uni: "2" + pc7, yr: "1803", mNo: 192, p: 77, e: 77, n: 115, cid: "23924", cas: "7439-88-5"},
  { id: "ele78", num: "78", nme: "platinum", sym: "Pt", grp: 10, prd: 6, blk: "d", aWt: "195.084", ctg: c3, clr: "colorGray", rdo: noVal, stc: crsFCC, phs: sld, dns: "21.45", mlt: 1768.3, bln: 3825,  fsn: "20", vpn: "490", spc: "0.133", elc: l4 + ", 17, 1", cnf: "[Xe] 4f" + s14 + " 5d" + s9 + " 6s" + s1, aRd: "139", cRd: "136", eNg: "2.28", ion: "8.9587", trm: "0.716", oxi: "2, 4, 5, 6", vol: "9.10", crt: "3.7" + pc6, uni: "5" + pc7, yr: "1735", mNo: 195, p: 78, e: 78, n: 117, cid: "23939", cas: "7440-06-4"},
  { id: "ele79", num: "79", nme: "gold", sym: "Au", grp: 11, prd: 6, blk: "d", aWt: "196.966569", ctg: c3, clr: "colorGold", rdo: noVal, stc: crsFCC, phs: sld, dns: "19.282", mlt: 1064.2, bln: 2856,  fsn: "12.5", vpn: "330", spc: "0.129", elc: l4 + ", 18, 1", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s1, aRd: "144", cRd: "136", eNg: "2.54", ion: "9.2255", trm: "3.17", oxi: "-1, 1, 2, 3, 5", vol: "10.2", crt: "3.1" + pc7, uni: "6" + pc8, yr: "2500" + " BC", mNo: 197, p: 79, e: 79, n: 118, cid: "23985", cas: "7440-57-5"},
  { id: "ele80", num: "80", nme: "mercury", sym: "Hg", grp: 12, prd: 6, blk: "d", aWt: "200.59", ctg: c3, clr: "colorSilver", rdo: noVal, stc: crsSTG, phs: lqd, dns: "13.5336", mlt: -38.83, bln: 357,  fsn: "2.29", vpn: "59.2", spc: "0.14", elc: l4 + ", 18, 2", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2, aRd: "151", cRd: "132", eNg: "2.00", ion: "10.4375", trm: "0.0834", oxi: "1, 2, 4", vol: "14.82", crt: "6.7" + pc6, uni: "1" + pc7, yr: "1500" + " BC", mNo: 201, p: 80, e: 80, n: 121, cid: "23931", cas: "7439-97-6"},
  { id: "ele81", num: "81", nme: "thallium", sym: "Tl", grp: 13, prd: 6, blk: "p", aWt: "204.3833", ctg: c4, clr: "colorSilver", rdo: noVal, stc: crsSH, phs: sld, dns: "11.85", mlt: 304, bln: 1473,  fsn: "4.2", vpn: "165", spc: "0.129", elc: l4 + ", 18, 3", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s1, aRd: "170", cRd: "145", eNg: "1.62", ion: "6.1082", trm: "0.461", oxi: "1, 3", vol: "17.2", crt: "0.000053%", uni: "5" + pc8, yr: "1861", mNo: 204, p: 81, e: 81, n: 123, cid: "5359464", cas: "7440-28-0"},
  { id: "ele82", num: "82", nme: "lead", sym: "Pb", grp: 14, prd: 6, blk: "p", aWt: "207.2", ctg: c4, clr: "colorSlateGray", rdo: noVal, stc: crsFCC, phs: sld, dns: "11.342", mlt: 327.46, bln: 1749,  fsn: "4.77", vpn: "178", spc: "0.129", elc: l4 + ", 18, 4", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s2, aRd: "175", cRd: "146", eNg: "2.33", ion: "7.4167", trm: "0.353", oxi: "-4, 2, 4", vol: "18.17", crt: "0.00099%", uni: "1" + pc6, yr: "4000" + " BC", mNo: 207, p: 82, e: 82, n: 125, cid: "5352425", cas: "7439-92-1"},
  { id: "ele83", num: "83", nme: "bismuth", sym: "Bi", grp: 15, prd: 6, blk: "p", aWt: "208.9804", ctg: c4, clr: "colorGray", rdo: noVal, stc: crsBCM, phs: sld, dns: "9.78", mlt: 271.5, bln: 1564,  fsn: "10.9", vpn: "160", spc: "0.122", elc: l4 + ", 18, 5", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s3, aRd: "156", cRd: "148", eNg: "2.02", ion: "7.2856", trm: "0.0797", oxi: "-3, 3, 5", vol: "21.3", crt: "2.5" + pc6, uni: "7" + pc8, yr: "1753", mNo: 209, p: 83, e: 83, n: 126, cid: "5359367", cas: "7440-69-9"},
  { id: "ele84", num: "84", nme: "polonium", sym: "Po", grp: 16, prd: 6, blk: "p", aWt: "[210]", ctg: c6, clr: "colorSilver", rdo: yesVal, stc: crsSC, phs: sld, dns: "9.196", mlt: 254, bln: 962,  fsn: "13", vpn: "100", spc: "-", elc: l4 + ", 18, 6", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s4, aRd: "168", cRd: "140", eNg: "2.00", ion: "8.417", trm: "0.2", oxi: "-2, 2, 4, 6", vol: "22.23", crt: naVal, uni: naVal, yr: "1898", mNo: 210, p: 84, e: 84, n: 126, cid: naVal, cas: "7440-08-6"},
  { id: "ele85", num: "85", nme: "astatine", sym: "At", grp: 17, prd: 6, blk: "p", aWt: "[210]", ctg: c7, clr: "colorSilver", rdo: yesVal, stc: naVal, phs: sld, dns: "7", mlt: 302, bln: 337,  fsn: "6", vpn: "40", spc: "-", elc: l4 + ", 18, 7", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s5, aRd: "-", cRd: "150", eNg: "2.2", ion: "9.3", trm: "0.017", oxi: "-1, 1, 3, 5, 7", vol: "30", crt: naVal, uni: naVal, yr: "1940", mNo: 210, p: 85, e: 85, n: 125, cid: naVal, cas: "7440-68-8"},
  { id: "ele86", num: "86", nme: "radon", sym: "Rn", grp: 18, prd: 6, blk: "p", aWt: "[222]", ctg: c8, clr: "colorLess", rdo: yesVal, stc: naVal, phs: gas, dns: "0.00973", mlt: -71.15, bln: -61.85,  fsn: "3", vpn: "17", spc: "0.094", elc: l4 + ", 18, 8", cnf: "[Xe] 4f" + s14 + " 5d" + s10 + " 6s" + s2 + " 6p" + s6, aRd: "120", cRd: "150", eNg: "-", ion: "10.7485", trm: "0.0000364", oxi: "2, 4, 6", vol: "50.5", crt: naVal, uni: naVal, yr: "1900", mNo: 222, p: 86, e: 86, n: 136, cid: "24857", cas: "10043-92-2"},
  { id: "ele87", num: "87", nme: "francium", sym: "Fr", grp: 1, prd: 7, blk: "s", aWt: "[223]", ctg: c1, clr: "colorSilver", rdo: yesVal, stc: naVal, phs: sld, dns: "1.87", mlt: 23, bln: 677,  fsn: "2", vpn: "65", spc: "-", elc: l4 + ", 18, 8, 1", cnf: "[Rn] 7s" + s1, aRd: "260", cRd: "348", eNg: "0.7", ion: "4.0727", trm: "0.15", oxi: "1", vol: "71.07", crt: naVal, uni: naVal, yr: "1939", mNo: 223, p: 87, e: 87, n: 136, cid: naVal, cas: "7440-73-5"},
  { id: "ele88", num: "88", nme: "radium", sym: "Ra", grp: 2, prd: 7, blk: "s", aWt: "[226]", ctg: c2, clr: "colorSilver", rdo: yesVal, stc: crsBCC, phs: sld, dns: "5.5", mlt: 700, bln: 1737,  fsn: "8", vpn: "125", spc: "-", elc: l4 + ", 18, 8, 2", cnf: "[Rn] 7s" + s2, aRd: "-", cRd: "221", eNg: "0.9", ion: "5.2784", trm: "0.186", oxi: "2", vol: "45.20", crt: "9.9×10<sup>-12</sup>%", uni: naVal, yr: "1898", mNo: 226, p: 88, e: 88, n: 138, cid: "6328144", cas: "7440-14-4"},
  { id: "ele89", num: "89", nme: "actinium", sym: "Ac", grp: naVal, prd: 7, blk: "f", aWt: "[227]", ctg: c10, clr: "colorSilver", rdo: yesVal, stc: crsFCC, phs: sld, dns: "10.07", mlt: 1050, bln: 3198,  fsn: "14", vpn: "400", spc: "0.12", elc: l4 + ", 18, 9, 2", cnf: "[Rn] 6d" + s1 + " 7s" + s2, aRd: "-", cRd: "215", eNg: "1.1", ion: "5.17", trm: "0.12", oxi: "3", vol: "22.54", crt: naVal, uni: naVal, yr: "1899", mNo: 227, p: 89, e: 89, n: 138, cid: naVal, cas: "7440-34-8"},
  { id: "ele90", num: "90", nme: "thorium", sym: "Th", grp: naVal, prd: 7, blk: "f", aWt: "232.03806", ctg: c10, clr: "colorSilver", rdo: yesVal, stc: crsFCC, phs: sld, dns: "11.7", mlt: 1842, bln: 4788,  fsn: "16", vpn: "530", spc: "0.113", elc: l4 + ", 18, 10, 2", cnf: "[Rn] 6d" + s2 + " 7s" + s2, aRd: "179", cRd: "206", eNg: "1.3", ion: "6.3067", trm: "0.54", oxi: "2, 3, 4", vol: "19.9", crt: "0.0006%", uni: "4" + pc8, yr: "1828", mNo: 232, p: 90, e: 90, n: 142, cid: "23960", cas: "7440-29-1"},
  { id: "ele91", num: "91", nme: "protactinium", sym: "Pa", grp: naVal, prd: 7, blk: "f", aWt: "231.03588", ctg: c10, clr: "colorSilver", rdo: yesVal, stc: crsCT, phs: sld, dns: "15.37", mlt: 1568, bln: 4027,  fsn: "15", vpn: "470", spc: "-", elc: l4 + ", 20, 9, 2", cnf: "[Rn] 5f" + s2 + " 6d" + s1 + " 7s" + s2, aRd: "163", cRd: "200", eNg: "1.5", ion: "5.89", trm: "0.47", oxi: "3, 4, 5", vol: "15.0", crt: "9.9×10<sup>-13</sup>%", uni: naVal, yr: "1913", mNo: 231, p: 91, e: 91, n: 140, cid: naVal, cas: "7440-13-3"},
  { id: "ele92", num: "92", nme: "uranium", sym: "U", grp: naVal, prd: 7, blk: "f", aWt: "238.02891", ctg: c10, clr: "colorSilver", rdo: yesVal, stc: crsBCO, phs: sld, dns: "18.95", mlt: 1132.2, bln: 4131,  fsn: "14", vpn: "420", spc: "0.116", elc: l4 + ", 21, 9, 2", cnf: "[Rn] 5f" + s3 + " 6d" + s1 + " 7s" + s2, aRd: "156", cRd: "196", eNg: "1.38", ion: "6.1941", trm: "0.276", oxi: "3, 4, 5, 6", vol: "12.59", crt: "0.00018%", uni: "2" + pc8, yr: "1789", mNo: 238, p: 92, e: 92, n: 146, cid: "23989", cas: "7440-61-1"},
  { id: "ele93", num: "93", nme: "neptunium", sym: "Np", grp: naVal, prd: 7, blk: "f", aWt: "[237]", ctg: c10, clr: "colorSilver", rdo: yesVal, stc: crsSO, phs: sld, dns: "20.45", mlt: 637, bln: 4000,  fsn: "10", vpn: "335", spc: "-", elc: l4 + ", 22, 9, 2", cnf: "[Rn] 5f" + s4 + " 6d" + s1 + " 7s" + s2, aRd: "155", cRd: "190", eNg: "1.36", ion: "6.2657", trm: "0.063", oxi: "3, 4, 5, 6, 7", vol: "11.62", crt: naVal, uni: naVal, yr: "1940", mNo: 237, p: 93, e: 93, n: 144, cid: naVal, cas: "7439-99-8"},
  { id: "ele94", num: "94", nme: "plutonium", sym: "Pu", grp: naVal, prd: 7, blk: "f", aWt: "[244]", ctg: c10, clr: "colorSilver", rdo: yesVal, stc: crsSM, phs: sld, dns: "19.816", mlt: 639.4, bln: 3228,  fsn: naVal, vpn: "325", spc: "-", elc: l4 + ", 24, 8, 2", cnf: "[Rn] 5f" + s6 + " 7s" + s2, aRd: "159", cRd: "187", eNg: "1.28", ion: "6.0262", trm: "0.0674", oxi: "3, 4, 5, 6, 7, 8", vol: "12.32", crt: naVal, uni: naVal, yr: "1940", mNo: 244, p: 94, e: 94, n: 150, cid: "23940", cas: "7440-07-5"},
  { id: "ele95", num: "95", nme: "americium", sym: "Am", grp: naVal, prd: 7, blk: "f", aWt: "[243]", ctg: c10, clr: "colorSilver", rdo: yesVal, stc: crsSH, phs: sld, dns: "13.69", mlt: 1176, bln: 2607,  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 25, 8, 2", cnf: "[Rn] 5f" + s7 + " 7s" + s2, aRd: "173", cRd: "180", eNg: "1.3", ion: "5.9738", trm: "0.1", oxi: "2, 3, 4, 5, 6", vol: "17.78", crt: naVal, uni: naVal, yr: "1944", mNo: 243, p: 95, e: 95, n: 148, cid: naVal, cas: "7440-35-9"},
  { id: "ele96", num: "96", nme: "curium", sym: "Cm", grp: naVal, prd: 7, blk: "f", aWt: "[247]", ctg: c10, clr: "colorSilver", rdo: yesVal, stc: crsSH, phs: sld, dns: "13.51", mlt: 1340, bln: 3110,  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 25, 9, 2", cnf: "[Rn] 5f" + s7 + " 6d" + s1 + " 7s" + s2, aRd: "174", cRd: "169", eNg: "1.3", ion: "5.9915", trm: "0.1", oxi: "3, 4", vol: "18.28", crt: naVal, uni: naVal, yr: "1944", mNo: 247, p: 96, e: 96, n: 151, cid: naVal, cas: "7440-51-9"},
  { id: "ele97", num: "97", nme: "berkelium", sym: "Bk", grp: naVal, prd: 7, blk: "f", aWt: "[247]", ctg: c10, clr: naVal, rdo: yesVal, stc: crsSH, phs: sld, dns: "14.78", mlt: 986, bln: 2900,  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 27, 8, 2", cnf: "[Rn] 5f" + s9 + " 7s" + s2, aRd: "170", cRd: "-", eNg: "1.3", ion: "6.1979", trm: "0.1", oxi: "3, 4", vol: "16.7", crt: naVal, uni: naVal, yr: "1949", mNo: 247, p: 97, e: 97, n: 150, cid: "23971", cas: "7440-40-6"},
  { id: "ele98", num: "98", nme: "californium", sym: "Cf", grp: naVal, prd: 7, blk: "f", aWt: "[251]", ctg: c10, clr: naVal, rdo: yesVal, stc: crsSH, phs: sld, dns: "15.1", mlt: 900, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 28, 8, 2", cnf: "[Rn] 5f" + s10 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1.3", ion: "6.2817", trm: "0.1", oxi: "2, 3, 4", vol: "18.4", crt: naVal, uni: naVal, yr: "1950", mNo: 251, p: 98, e: 98, n: 153, cid: naVal, cas: "7440-71-3"},
  { id: "ele99", num: "99", nme: "einsteinium", sym: "Es", grp: naVal, prd: 7, blk: "f", aWt: "[252]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "8.84", mlt: 860, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 29, 8, 2", cnf: "[Rn] 5f" + s11 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1.3", ion: "6.42", trm: "0.1", oxi: "2, 3", vol: "28.5", crt: naVal, uni: naVal, yr: "1952", mNo: 252, p: 99, e: 99, n: 153, cid: naVal, cas: "7429-92-7"},
  { id: "ele100", num: "100", nme: "fermium", sym: "Fm", grp: naVal, prd: 7, blk: "f", aWt: "[257]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: 1527, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 30, 8, 2", cnf: "[Rn] 5f" + s12 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1.3", ion: "6.5", trm: "0.1", oxi: "2, 3", vol: "29.1", crt: naVal, uni: naVal, yr: "1952", mNo: 257, p: 100, e: 100, n: 157, cid: naVal, cas: "7440-72-4"},
  { id: "ele101", num: "101", nme: "mendelevium", sym: "Md", grp: naVal, prd: 7, blk: "f", aWt: "[258]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: 826.85, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l4 + ", 31, 8, 2", cnf: "[Rn] 5f" + s13 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1.3", ion: "6.58", trm: "0.1", oxi: "2, 3", vol: "-", crt: naVal, uni: naVal, yr: "1955", mNo: 258, p: 101, e: 101, n: 157, cid: naVal, cas: "7440-11-1"},
  { id: "ele102", num: "102", nme: "nobelium", sym: "No", grp: naVal, prd: 7, blk: "f", aWt: "[259]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: 827, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 8, 2", cnf: "[Rn] 5f" + s14 + " 7s" + s2, aRd: "-", cRd: "-", eNg: "1.3", ion: "6.65", trm: "0.1", oxi: "2, 3", vol: "-", crt: naVal, uni: naVal, yr: "1958", mNo: 259, p: 102, e: 102, n: 157, cid: naVal, cas: "10028-14-5"},
  { id: "ele103", num: "103", nme: "lawrencium", sym: "Lr", grp: naVal, prd: 7, blk: "d", aWt: "[262]", ctg: c10, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: 1626.85, bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 8, 3", cnf: "[Rn] 5f" + s14 + " 7s" + s2 + " 7p" + s1, aRd: "-", cRd: "-", eNg: "1.3", ion: "4.9", trm: "0.1", oxi: "3", vol: "-", crt: naVal, uni: naVal, yr: "1961", mNo: 262, p: 103, e: 103, n: 159, cid: naVal, cas: "22537-19-5"},
  { id: "ele104", num: "104", nme: "rutherfordium", sym: "Rf", grp: 4, prd: 7, blk: "d", aWt: "[267]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "23", mlt: 2100, bln: 5500,  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 10, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s2 + " 7s" + s2, aRd: "-", cRd: "157", eNg: "-", ion: "6.011", trm: "0.23", oxi: "4", vol: "-", crt: naVal, uni: naVal, yr: "1964", mNo: 261, p: 104, e: 104, n: 157, cid: naVal, cas: "53850-36-5"},
  { id: "ele105", num: "105", nme: "dubnium", sym: "Db", grp: 5, prd: 7, blk: "d", aWt: "[268]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "39", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 11, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s3 + " 7s" + s2, aRd: "-", cRd: "149", eNg: "-", ion: "-", trm: "0.58", oxi: "5", vol: "-", crt: naVal, uni: naVal, yr: "1968", mNo: 262, p: 105, e: 105, n: 157, cid: naVal, cas: "53850-35-4"},
  { id: "ele106", num: "106", nme: "seaborgium", sym: "Sg", grp: 6, prd: 7, blk: "d", aWt: "[269]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "35", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 12, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s4 + " 7s" + s2, aRd: "-", cRd: "143", eNg: "-", ion: "-", trm: "-", oxi: "6", vol: "-", crt: naVal, uni: naVal, yr: "1974", mNo: 262, p: 106, e: 106, n: 156, cid: naVal, cas: "54038-81-2"},
  { id: "ele107", num: "107", nme: "bohrium", sym: "Bh", grp: 7, prd: 7, blk: "d", aWt: "[270]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "37", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 13, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s5 + " 7s" + s2, aRd: "-", cRd: "141", eNg: "-", ion: "-", trm: "-", oxi: "7", vol: "-", crt: naVal, uni: naVal, yr: "1981", mNo: 264, p: 107, e: 107, n: 157, cid: naVal, cas: "54037-14-8"},
  { id: "ele108", num: "108", nme: "hassium", sym: "Hs", grp: 8, prd: 7, blk: "d", aWt: "[269]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "41", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 14, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s6 + " 7s" + s2, aRd: "-", cRd: "134", eNg: "-", ion: "-", trm: "-", oxi: "8", vol: "-", crt: naVal, uni: naVal, yr: "1984", mNo: 269, p: 108, e: 108, n: 161, cid: naVal, cas: "54037-57-9"},
  { id: "ele109", num: "109", nme: "meitnerium", sym: "Mt", grp: 9, prd: 7, blk: "d", aWt: "[278]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "35", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 15, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s7 + " 7s" + s2, aRd: "-", cRd: "129", eNg: "-", ion: "-", trm: "-", oxi: "3, 4, 6", vol: "-", crt: naVal, uni: naVal, yr: "1982", mNo: 268, p: 109, e: 109, n: 159, cid: naVal, cas: "54038-01-6"},
  { id: "ele110", num: "110", nme: "darmstadtium", sym: "Ds", grp: 10, prd: 7, blk: "d", aWt: "[281]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: unw, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 16, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s8 + " 7s" + s2, aRd: "-", cRd: "128", eNg: "-", ion: "-", trm: "-", oxi: "6", vol: "-", crt: naVal, uni: naVal, yr: "1994", mNo: 281, p: 110, e: 110, n: 171, cid: naVal, cas: "54083-77-1"},
  { id: "ele111", num: "111", nme: "roentgenium", sym: "Rg", grp: 11, prd: 7, blk: "d", aWt: "[281]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l5 + ", 17, 2", cnf: "[Rn] 5f" + s14 + " 6d" + s9 + " 7s" + s2, aRd: "-", cRd: "121", eNg: "-", ion: "-", trm: "-", oxi: "-1, 1, 3, 5", vol: "-", crt: naVal, uni: naVal, yr: "1994", mNo: 281, p: 111, e: 111, n: 170, cid: naVal, cas: "54386-24-2"},
  { id: "ele112", num: "112", nme: "copernicium", sym: "Cn", grp: 12, prd: 7, blk: "d", aWt: "[285]", ctg: c3, clr: naVal, rdo: yesVal, stc: naVal, phs: lqd, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 2", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2, aRd: "-", cRd: "122", eNg: "-", ion: "-", trm: "-", oxi: "2, 4", vol: "-", crt: naVal, uni: naVal, yr: "1996", mNo: 285, p: 112, e: 112, n: 173, cid: naVal, cas: "54084-26-3"},
  { id: "ele113", num: "113", nme: "nihonium", sym: "Nh", grp: 13, prd: 7, blk: "p", aWt: "[286]", ctg: c4, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "16", mlt: 430, bln: 1100,  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 3", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s1, aRd: "-", cRd: "136", eNg: "-", ion: "-", trm: "-", oxi: "1, 3, 5", vol: "-", crt: naVal, uni: naVal, yr: "2003", mNo: 286, p: 113, e: 113, n: 173, cid: naVal, cas: "54084-70-7"},
  { id: "ele114", num: "114", nme: "flerovium", sym: "Fl", grp: 14, prd: 7, blk: "p", aWt: "[289]", ctg: c4, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "14", mlt: 70, bln: 150,  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 4", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s2, aRd: "-", cRd: "143", eNg: "-", ion: "-", trm: "-", oxi: "2, 4", vol: "-", crt: naVal, uni: naVal, yr: "1998", mNo: 287, p: 114, e: 114, n: 173, cid: naVal, cas: "54085-16-4"},
  { id: "ele115", num: "115", nme: "moscovium", sym: "Mc", grp: 15, prd: 7, blk: "p", aWt: "[288]", ctg: c4, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 5", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s3, aRd: "-", cRd: "162", eNg: "-", ion: "-", trm: "-", oxi: "1, 3", vol: "-", crt: naVal, uni: naVal, yr: "2004", mNo: 288, p: 115, e: 115, n: 173, cid: naVal, cas: "54085-64-2"},
  { id: "ele116", num: "116", nme: "livermorium", sym: "Lv", grp: 16, prd: 7, blk: "p", aWt: "[293]", ctg: c4, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 6", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s4, aRd: "-", cRd: "175", eNg: "-", ion: "-", trm: "-", oxi: "2, 4", vol: "-", crt: naVal, uni: naVal, yr: "2000", mNo: 291, p: 116, e: 116, n: 175, cid: naVal, cas: "54100-71-9"},
  { id: "ele117", num: "117", nme: "tennessine", sym: "Ts", grp: 17, prd: 7, blk: "p", aWt: "[294]", ctg: c7, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "-", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 7", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s5, aRd: "-", cRd: "165", eNg: "-", ion: "-", trm: "-", oxi: "-1, 1, 3, 5", vol: "-", crt: naVal, uni: naVal, yr: "2010", mNo: 294, p: 117, e: 117, n: 177, cid: naVal, cas: "87658-56-8"},
  { id: "ele118", num: "118", nme: "oganesson", sym: "Og", grp: 18, prd: 7, blk: "p", aWt: "[294]", ctg: c8, clr: naVal, rdo: yesVal, stc: naVal, phs: sld, dns: "13.65", mlt: "-", bln: "-",  fsn: naVal, vpn: naVal, spc: "-", elc: l6 + ", 8", cnf: "[Rn] 5f" + s14 + " 6d" + s10 + " 7s" + s2 + " 7p" + s6, aRd: "152", cRd: "157", eNg: "-", ion: "-", trm: "-", oxi: "-1, 0, 2, 4, 6", vol: "-", crt: naVal, uni: naVal, yr: "2002", mNo: 294, p: 118, e: 118, n: 176, cid: naVal, cas: "54144-19-3"}  
];
}


function id(text) {
  return document.getElementById(text);
}

function cls(classId) {
  return document.getElementsByClassName(classId);
}

function setDegreesFirst() {
  id("meltPoint1").textContent = getTemp(firstEle.mlt);
  id("boilPoint1").textContent = getTemp(firstEle.bln);
}

function setDegreesSecond() {
  id("meltPoint2").textContent = getTemp(secondEle.mlt);
  id("boilPoint2").textContent = getTemp(secondEle.bln);
}

function getElement(val) {
  let selectedElement = newRawData.find((x) => x.id === val);
  if (selectedElement) return selectedElement;
  else return newRawData[0];
}

function getNum(value) {
  if (langValue === "ar") {
    // Arabic
    value = value.toString().replace(/\./g, "٫");
    let id = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return value.toString().replace(/[0-9]/g, function (w) {
      return id[+w];
    });
  } else if (langValue === "fa") {
    // Persian
    value = value.toString().replace(/\./g, "٫");
    let id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return value.toString().replace(/[0-9]/g, function (w) {
      return id[+w];
    });
  } else return value;
}

function getTemp(tempValue) {
  let newTemp;
  let defaultTemp = localStorage.getItem("defaultTemp");
  let defaultPunc = "dot";

  if (tempValue == "-") newTemp = "-";
  else {
    if (langValue === "ar" || langValue === "fa" || langValue === "he")
      newTemp =
        getNum(Math.round((tempValue + 273.15) * 100) / 100) +
        " K " +
        (defaultTemp == "celsius" ? getNum(tempValue) + " | °C" : getNum(Math.round((tempValue * 1.8 + 32) * 100) / 100) + " °F");
    else
      newTemp =
        Math.round((tempValue + 273.15) * 100) / 100 +
        " K | " +
        (defaultTemp == "celsius" ? tempValue + " °C" : Math.round((tempValue * 1.8 + 32) * 100) / 100 + " °F");
  }

  if (defaultPunc === "comma") newTemp = newTemp.replace(/\./g, ",");

  return newTemp;
}

function sortFunc(var1, var2, var3) {
  let sortUp = "&nbsp;&nbsp;↑";
  let sortDown = "&nbsp;&nbsp;↓";

  id(var1).innerHTML = id(var1).innerHTML === sortUp ? sortDown : sortUp;
  id(var2).innerHTML = "";
  id(var3).innerHTML = "";
}

function sortByNumber() {
  sortFunc("sortNum", "sortNm", "sortSym");
}

function sortByName() {
  sortFunc("sortNm", "sortNum", "sortSym");
}

function sortBySymbol() {
  sortFunc("sortSym", "sortNm", "sortNum");
}

let options = {
  valueNames: ["listName", "listNum", "listSym"],
};

let userList = new List("mainList", options);

function returnItem(itemId) {
  for (let j = 0; j < rawData.length; j++) {
    if (rawData[j].id === itemId) return rawData[j];
  }
}

function firstChanged() {
  let firstElement = id("firstElement").value;
  let firstDetails = returnItem(firstElement);

  let el = id("firstElement");
  let link = el.options[el.selectedIndex].innerHTML;

  id("atmNo1").textContent = getNum(firstDetails.num);
  id("name1").textContent = id("firstElement").options[id("firstElement").selectedIndex].innerHTML;
  id("compEle1").href = "element-" + firstDetails.num
  id("symbol1").textContent = firstDetails.sym;
  id("periods1").textContent = getNum(firstDetails.prd);
  id("block1").textContent = firstDetails.blk;
  id("atmWeight1").textContent = getNum(firstDetails.aWt);
  id("category1").textContent = categoriesList[firstDetails.ctg];
  id("eleColor1").textContent = colorsList[firstDetails.clr];
  id("radioactive1").textContent = radioactiveList[firstDetails.rdo];
  id("structure1").textContent = structureList[firstDetails.stc];
  id("density1").textContent = getNum(firstDetails.dns);
  id("phase1").textContent = phaseList[firstDetails.phs];
  id("meltPoint1").textContent = getTemp(firstDetails.mlt);
  id("boilPoint1").textContent = getTemp(firstDetails.bln);
  id("spHeat1").textContent = getNum(firstDetails.spc);
  id("atmRadius1").textContent = firstDetails.aRd === "-" ? "-" : getNum(firstDetails.aRd) + " pm";
  id("covRadius1").textContent = firstDetails.cRd === "-" ? "-" : getNum(firstDetails.cRd) + " pm";
  id("eleNeg1").textContent = getNum(firstDetails.eNg);
  id("ionization1").textContent = getNum(firstDetails.ion);
  id("volume1").textContent = getNum(firstDetails.vol);
  id("theCond1").textContent = getNum(firstDetails.trm);
  id("oxidation1").textContent = getNum(firstDetails.oxi);
  id("elecConfig1").innerHTML = firstDetails.cnf;
  id("electrons1").textContent = getNum(firstDetails.elc);

  id("groups1").innerHTML = firstDetails.grp === "na" ? na : getNum(firstDetails.grp);
  id("crust1").innerHTML = firstDetails.crt === "na" ? na : getNum(firstDetails.crt);
  id("universe1").innerHTML = firstDetails.uni === "na" ? na : getNum(firstDetails.uni);
  id("fusion1").innerHTML = firstDetails.fsn === "na" ? na : getNum(firstDetails.fsn);
  id("vaporization1").innerHTML = firstDetails.vpn === "na" ? na : getNum(firstDetails.vpn);
}

function secondChanged() {
  let secondElement = id("secondElement").value;
  let secondDetails = returnItem(secondElement);

  let el = id("secondElement");
  let link = el.options[el.selectedIndex].innerHTML;

  id("atmNo2").textContent = getNum(secondDetails.num);
  id("name2").textContent = id("secondElement").options[id("secondElement").selectedIndex].text;
  id("compEle2").href = "element-" + secondDetails.num;
  id("symbol2").textContent = secondDetails.sym;
  id("periods2").textContent = getNum(secondDetails.prd);
  id("block2").textContent = secondDetails.blk;
  id("atmWeight2").textContent = getNum(secondDetails.aWt);
  id("category2").textContent = categoriesList[secondDetails.ctg];
  id("eleColor2").textContent = colorsList[secondDetails.clr];
  id("radioactive2").textContent = radioactiveList[secondDetails.rdo];
  id("structure2").textContent = structureList[secondDetails.stc];
  id("density2").textContent = getNum(secondDetails.dns);
  id("phase2").textContent = phaseList[secondDetails.phs];
  id("meltPoint2").textContent = getTemp(secondDetails.mlt);
  id("boilPoint2").textContent = getTemp(secondDetails.bln);
  id("spHeat2").textContent = getNum(secondDetails.spc);
  id("atmRadius2").textContent = secondDetails.aRd === "-" ? "-" : getNum(secondDetails.aRd) + " pm";
  id("covRadius2").textContent = secondDetails.cRd === "-" ? "-" : getNum(secondDetails.cRd) + " pm";
  id("eleNeg2").textContent = getNum(secondDetails.eNg);
  id("ionization2").textContent = getNum(secondDetails.ion);
  id("volume2").textContent = getNum(secondDetails.vol);
  id("theCond2").textContent = getNum(secondDetails.trm);
  id("oxidation2").textContent = getNum(secondDetails.oxi);
  id("elecConfig2").innerHTML = secondDetails.cnf;
  id("electrons2").textContent = getNum(secondDetails.elc);

  id("groups2").innerHTML = secondDetails.grp === "na" ? na : getNum(secondDetails.grp);
  id("crust2").innerHTML = secondDetails.crt === "na" ? na : getNum(secondDetails.crt);
  id("universe2").innerHTML = secondDetails.uni === "na" ? na : getNum(secondDetails.uni);
  id("fusion2").innerHTML = secondDetails.fsn === "na" ? na : getNum(secondDetails.fsn);
  id("vaporization2").innerHTML = secondDetails.vpn === "na" ? na : getNum(secondDetails.vpn);
}

// Navbar and dropdowns
// let toggle = document.getElementsByClassName("navbar-toggle")[0]
// let collapse = document.getElementsByClassName("burger")[0];

// document.addEventListener("click", function(evt) {
//   var targetElement = evt.target;  // clicked element

// do {
//   if (targetElement.id === "topNavbar") {
//       return;
//   }
//   // Go up the DOM
//   targetElement = targetElement.parentNode;
// } while (targetElement);
// closeMenu();
// });

// // Toggle if navbar menu is open or closed
// function toggleMenu() {
//   collapse.classList.toggle("collapse");
//   collapse.classList.toggle("in");
// }

// function closeMenu() {
//   collapse.classList.add("collapse");
//   collapse.classList.remove("in");
// }

function toggleMenu() {
  console.log("Toggle Menu");
}



function setColor(color) {
  let hexValue = rgbToHex(color);

  let darkerColor50 = colorLuminance(hexValue, -0.5);
  let darkerColor0 = colorLuminance(hexValue, -0.6);

  let metaThemeColor = document.querySelector("meta[name=theme-color]");
  metaThemeColor.setAttribute("content", darkerColor50);

  let metaTileColor = document.querySelector("meta[name=msapplication-TileColor]");
  metaTileColor.setAttribute("content", hexValue);
  
  let root = document.documentElement;
  console.log("color: " + color)
  root.style.setProperty("--theme-color", color);
  root.style.setProperty("--darker-color-50", darkerColor50);
  root.style.setProperty("--darker-color-0", darkerColor0);
}

function rgbToHex(rgb) {
  console.log(rgb)
  let r = rgb.split(",")[0];
  g = rgb.split(",")[1];
  b = rgb.split(",")[2];

  let rgbNew = b | (g << 8) | (r << 16);
  return "#" + (0x1000000 + rgbNew).toString(16).slice(1);
}

function colorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	let rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}





// Index


function resizeEvent() {
  
  console.log("resizeEvent");
  setSize(defaultMargin);
}

let singleElement, singleGroup, singlePeriod, singleCategory;

let elementLength, categoryLength, periodLength, groupLength;
let defaultNewTheme, defaultColor, defaultTemp, defaultStyle, defaultMargin;

let outerElement = cls("outerElement");
let singleNum = cls("eleNum");
let singleWt = cls("eleWt");

initializePage();

function setSize(tablePercent) {
  let pageWidth = id("headerwrap").clientWidth; //(document.body.scrollWidth || document.documentElement.clientWidth || document.body.clientWidth);

  let pageHeight = (window.innerHeight || document.documentElement.clientHeight) - 70;

  let clientWidth, individualWidth;

  clientWidth = (pageHeight < pageWidth) ? (pageWidth * tablePercent) : (pageHeight * 1.8);

  id("ptable").style.marginLeft = (pageHeight < pageWidth) ? ((pageWidth * (1 - tablePercent)) / 2 + "px") : "0px";
  id("ptable").style.width = clientWidth + "px";

  individualWidth = (clientWidth / 21);

  for (let i = 0; i < singleGroup.length; i++) {
    singleGroup[i].style.width = individualWidth + "px";
    singleGroup[i].style.height = individualWidth + "px";
  }
  for (let i = 0; i < singlePeriod.length; i++) {
    singlePeriod[i].style.width = individualWidth + "px";
    singlePeriod[i].style.height = individualWidth + "px";
  }
  for (let i = 0; i < outerElement.length; i++) {
    outerElement[i].style.width = individualWidth + "px";
    outerElement[i].style.height = individualWidth + "px";
  }

  let newWidth = individualWidth - (clientWidth * 0.003);

  for (let i = 0; i < singleElement.length; i++) {
    singleElement[i].style.width = newWidth + "px";
    singleElement[i].style.height = newWidth + "px";
  }

  id("groupPeriod").style.width = (individualWidth * 2) + "px";
  id("ptable").style.fontSize = (individualWidth / 4) + "px";
}


if (id("ptable")) {

  id("snippetDetails").style.visibility = "hidden";
  
  window.addEventListener("resize", resizeEvent);
  id("snippetDetails").style.visibility = "hidden";
  singleElement = cls("elements");
  singleGroup = cls("groups");
  singlePeriod = cls("periods");
  singleCategory = cls("category");

  elementLength = singleElement.length;
  categoryLength = singleCategory.length;
  periodLength = singlePeriod.length;
  groupLength = singleGroup.length;

  for (let i = 0; i < elementLength; i++) {
    singleElement[i].addEventListener("mouseenter", setOutline, false);
    singleElement[i].addEventListener("mouseleave", removeOutline, false);
  }

  for (let i = 0; i < categoryLength; i++) {
    singleCategory[i].addEventListener("mouseenter", setOpacity15, false);
    singleCategory[i].addEventListener("mouseleave", setOpacity100, false);
  }

  for (let i = 0; i < periodLength; i++) {
    if (langValue === "ar" || langValue === "fa" || langValue === "he") singlePeriod[i].textContent = getNum(singlePeriod[i].textContent);
    singlePeriod[i].addEventListener("mouseenter", setOpacity15, false);
    singlePeriod[i].addEventListener("mouseleave", setOpacity100, false);
  }

  for (let i = 0; i < groupLength; i++) {
    if (langValue === "ar" || langValue === "fa" || langValue === "he") singleGroup[i].textContent = getNum(singleGroup[i].textContent);
    singleGroup[i].addEventListener("mouseenter", setOpacity15, false);
    singleGroup[i].addEventListener("mouseleave", setOpacity100, false);
  }

  if (langValue === "ar" || langValue === "fa" || langValue === "he") {
    for (let i = 0; i < singleNum.length; i++) singleNum[i].textContent = getNum(singleNum[i].textContent);

    for (let i = 0; i < singleWt.length; i++) singleWt[i].textContent = getNum(singleWt[i].textContent);
  }

  defaultName = localStorage.getItem("defaultName");

  if (!defaultName) {
    localStorage.setItem("defaultName", "off");
    defaultName = "off";
  }

  defaultAtmNo = localStorage.getItem("defaultAtmNo");

  if (!defaultAtmNo) {
    localStorage.setItem("defaultAtmNo", "off");
    defaultAtmNo = "off";
  }

  id("nameSelectSetting").checked = (defaultName === "on") ? true : false;
  id("nameSelectSetting").addEventListener("change", setNm, false);

  id("atmNoSelectSetting").checked = (defaultAtmNo === "on") ? true : false;
  id("atmNoSelectSetting").addEventListener("change", setAtmNo, false);

  id("marginSetting").addEventListener("change", setMargin, false);
  id("marginSetting").value = defaultMargin;

  setScenarios();
  resizeEvent();
}

function setOpacity(percent) {
  for (let i = 0; i < singleElement.length; i++) singleElement[i].style.opacity = percent;
  for (let i = 0; i < singleCategory.length; i++) singleCategory[i].style.opacity = percent;
  for (let i = 0; i < singleGroup.length; i++) singleGroup[i].style.opacity = percent;
  for (let i = 0; i < singlePeriod.length; i++) singlePeriod[i].style.opacity = percent;
  id("lanthanidesMain").style.opacity = percent;
  id("actinidesMain").style.opacity = percent;
  id("star1").style.opacity = percent;
  id("star2").style.opacity = percent;
  id("groupHeader").style.opacity = percent;
  id("periodHeader").style.opacity = percent;
}

function setOpacity100() {
  setOpacity(1);
}

function setOpacity15() {
  let className = this.id;
  let classVal = className;
  let classes = cls(classVal);
  setOpacity(0.15);
  for (let i = 0; i < classes.length; i++) classes[i].style.opacity = 1;
  if (
    className === "r1" ||
    className === "r2" ||
    className === "r3" ||
    className === "r4" ||
    className === "r5" ||
    className === "r6" ||
    className === "r7"
  )
    id("periodHeader").style.opacity = 1;
  if (
    className === "c1" ||
    className === "c2" ||
    className === "c3" ||
    className === "c4" ||
    className === "c5" ||
    className === "c6" ||
    className === "c7" ||
    className === "c8" ||
    className === "c9" ||
    className === "c10" ||
    className === "c11" ||
    className === "c12" ||
    className === "c13" ||
    className === "c14" ||
    className === "c15" ||
    className === "c16" ||
    className === "c17" ||
    className === "c18"
  )
    id("groupHeader").style.opacity = 1;
}

function setNm() {
  defaultName = id("nameSelectSetting").checked ? "on" : "off";
  localStorage.setItem("defaultName", defaultName);
  setScenarios();
}

function setAtmNo() {
  defaultAtmNo = id("atmNoSelectSetting").checked ? "on" : "off";
  localStorage.setItem("defaultAtmNo", defaultAtmNo);
  setScenarios();
}

function setMargin() {
  defaultMargin = id("marginSetting").value;
  localStorage.setItem("defaultMargin", defaultMargin);
  setSize(defaultMargin);
}

function setScenarios() {
  // scenario 1 - Name and AtmNo off
  // scenario 2 - Name off, AtmNo on
  // scenario 3 - Name on, AtmNo off
  // scenario 4 - Name and AtmNo on

  defaultAtmNo = localStorage.getItem("defaultAtmNo");
  defaultName = localStorage.getItem("defaultName");
  var scenario;
  var singleSym = cls("eleSym");
  var singleNm = cls("eleNm");

  if (defaultName === "off")
    scenario = (defaultAtmNo === "off") ? "scenario1" : "scenario2";
  else
    scenario = (defaultAtmNo === "off") ? "scenario3" : "scenario4";

  for (var i = 0; i < singleNum.length; i++) {
    if (scenario === "scenario1")
      singleNum[i].style.fontSize = "0.84em";
    else if (scenario === "scenario4")
      singleNum[i].style.fontSize = "0.78em";
    else
      singleNum[i].style.fontSize = "0.8em";
  }

  for (var i = 0; i < singleSym.length; i++) {
    if (scenario === "scenario1") {
      singleSym[i].style.fontSize = "1.33em";
      singleSym[i].style.paddingTop = "10%";
    } else if (scenario === "scenario4") {
      singleSym[i].style.fontSize = "1.14em";
      singleSym[i].style.paddingTop = "0%";
    } else {
      singleSym[i].style.fontSize = "1.21em";
      singleSym[i].style.paddingTop = "2%";
    }
  }

  for (var i = 0; i < singleWt.length; i++) {
    if (defaultAtmNo === "off")
      singleWt[i].style.display = "none";
    else {
      singleWt[i].style.display = "block";
      singleWt[i].style.fontSize = (scenario === "scenario4") ? "0.56em" : "0.64em";
      singleWt[i].style.paddingTop = (scenario === "scenario4") ? "0%" : "15%";
      if (defaultPunc === "comma")
        singleWt[i].textContent = singleWt[i].textContent.replace(/\./g, ",");
    }
  }

  for (var i = 0; i < singleNm.length; i++) {
    if (defaultName === "off")
      singleNm[i].style.display = "none";
    else {
      singleNm[i].style.display = "block";
      singleNm[i].style.fontSize = (scenario === "scenario4") ? "0.56em" : "0.64em";
      singleNm[i].style.paddingTop = (scenario === "scenario4") ? "0%" : "15%";
    }
  }

  setSize(defaultMargin);
}

function setOutline() {
  let element = this.id;
  let tempClass = id(element).className.replace("elements ", "");
  let colClass = tempClass.substring(0, tempClass.indexOf(" "));
  let elementColor;

  switch (colClass) {
    case "alkaliMetals":
      elementColor = "rgba(" + color10 + ",0.5)";
      break;
    case "alkalineEarthMetals":
      elementColor = "rgba(" + color8 + ",0.5)";
      break;
    case "transitionMetals":
      elementColor = "rgba(" + color1 + ",0.5)";
      break;
    case "postTransitionMetals":
      elementColor = "rgba(" + color9 + ",0.5)";
      break;
    case "otherNonmetals":
      elementColor = "rgba(" + color6 + ",0.5)";
      break;
    case "metalloids":
      elementColor = "rgba(" + color2 + ",0.5)";
      break;
    case "halogens":
      elementColor = "rgba(" + color7 + ",0.5)";
      break;
    case "nobleGases":
      elementColor = "rgba(" + color5 + ",0.5)";
      break;
    case "lanthanides":
      elementColor = "rgba(" + color3 + ",0.5)";
      break;
    case "actinides":
      elementColor = "rgba(" + color4 + ",0.5)";
      break;
  }

  if (document.documentElement.getAttribute("data-style") === "2") {
    id("snippet").style.backgroundColor = "transparent";
    id("details").style.backgroundColor = "transparent";
    id("snippet").style.border = "none";
    id("details").style.border = "none";
    id("snippet").style.borderBottom = "0.125em solid " + elementColor;
    id("details").style.borderBottom = "0.125em solid " + elementColor;
  } else if (document.documentElement.getAttribute("data-style") === "3") {
    id("snippet").style.backgroundColor = "transparent";
    id("details").style.backgroundColor = "transparent";
    id("snippet").style.border = "0.125em solid " + elementColor;
    id("details").style.border = "0.125em solid " + elementColor;
  } else {
    id("snippet").style.backgroundColor = elementColor;
    id("details").style.backgroundColor = elementColor;
    id("snippet").style.border = "none";
    id("details").style.border = "none";
  }
  let eleId = rawData[element.replace("element", "") - 1];

  id("snippetNum").innerHTML = getNum(eleId.num);
  id("snippetSym").innerHTML = eleId.sym;
  id("snippetWt").innerHTML = getNum(eleId.aWt).toString();

  const divs = [...document.querySelector("#element" + eleId.num).children];
  id("detailRow1").innerHTML = divs[2].textContent;
  let eleYear = eleId.yr + "";

  if (eleYear.indexOf(" ") > 0) {
    if (langValue === "zs") eleYear = "公元前" + eleYear.substring(0, eleYear.indexOf(" ")) + "年";
    else if (langValue === "ko") eleYear = "기원전 " + eleYear.substring(0, eleYear.indexOf(" ")) + "년";
    else if (langValue === "ja") eleYear = "紀元前" + eleYear.substring(0, eleYear.indexOf(" ")) + "年";
    else if (langValue === "kk") eleYear = "б.з.д" + eleYear.substring(0, eleYear.indexOf(" ")) + "ж.";
    else if (langValue === "hu" || langValue === "tr" || langValue === "ms" || langValue === "th")
      eleYear = bc + " " + eleYear.substring(0, eleYear.indexOf(" "));
    else eleYear = eleYear.substring(0, eleYear.indexOf(" ")) + " " + bc;
  } else {
    if (langValue === "ko") eleYear = eleYear + "년";
  }

  id("valueRow2").innerHTML = eleYear;
  id("valueRow3").innerHTML = getTemp(eleId.mlt);
  id("valueRow4").innerHTML = getTemp(eleId.bln);
  id("valueRow5").innerHTML = getNum(eleId.elc);
  id("valueRow6").innerHTML = eleId.cnf;
  id(element).style.outline = "2px solid #505050";
  id(element).style.opacity = "0.75";
  id("snippetDetails").style.visibility = "visible";
}

function removeOutline() {
  let element = this.id;
  if (id("snippet")) {
    id(element).style.outline = "none";
    id("snippetDetails").style.visibility = "hidden";
    id(element).style.opacity = "1";
  }
}

function sideBar() {
  id("sidebar").classList.toggle("collapsed");
  id("overlap").classList.toggle("collapsed");
}

function setStyle() {
  defaultStyle = document.querySelector('input[name="tableStyle"]:checked').value;
  document.documentElement.setAttribute("data-style", defaultStyle);
  localStorage.setItem("defaultStyle", defaultStyle);
}

function setColorSettings() {
  // defaultColor = document.querySelector('input[name="tableColor"]:checked').value;
  defaultColor = document.querySelector('input[name="tableColor"]:checked').id;
  // console.log(document.querySelector('input[name="tableColor"]:checked').value)
  // console.log(this.id)
  setColor(document.querySelector('input[name="tableColor"]:checked').value);
  localStorage.setItem("defaultColor", defaultColor);
}

function setTemp() {
  defaultTemp = document.querySelector('input[name="temperature"]:checked').value;
  localStorage.setItem("defaultTemp", defaultTemp);

  if (id("outputConfigMain"))
    setDegrees(); 

  if (id("firstElement")) {
    setDegreesFirst();
    setDegreesSecond();
  }
}

function setSettings() {
  // id("languageSelectSetting").addEventListener("change", setLanguage, false);
  id("languageSelectSetting").value = langValue;
  id("temp"+ defaultTemp).checked = true;
  id("style"+ defaultStyle).checked = true;
  id(defaultColor).checked = true;
}

function changeTheme() {
  let defaultNewTheme = document.documentElement.getAttribute("data-theme");

  if (defaultNewTheme === "dark") {
    defaultNewTheme = "light";
    id("themeIcon").innerHTML = darkIcon;
  } else {
    defaultNewTheme = "dark";
    id("themeIcon").innerHTML = lightIcon;
  }

  document.documentElement.setAttribute("data-theme", defaultNewTheme);

  // document.documentElement.setAttribute('data-theme', defaultNewTheme);

  // if (id("themeIcon").textContent === "N"){
  //   id("themeIcon").textContent = "t";
  //   defaultNewTheme = "light";
  // }
  // else{
  //   id("themeIcon").textContent = "N";
  //   defaultNewTheme = "dark";
  // }

  // document.documentElement.setAttribute('data-theme', defaultNewTheme);
  localStorage.setItem("defaultNewTheme", defaultNewTheme);
  // setTheme()
}

function setLanguage() {
  langValue = id("languageSelectSetting").value;
  location.href= '../' + langValue


  // localStorage.setItem("langValue", langValue);

  // urlLang = getUrlLang(langValue)
  // setLangFile(langValue);
  // document.documentElement.setAttribute('lang', urlLang)

  // loadjs(["locales/locale." + langValue + ".js"], {
  //   success: loaderFunc
  // });
  
  // // console.log("urlLang: " + urlLang)
  // if (id("outputConfigMain"))
  //   history.pushState({page: 2}, "title 2", "?num=" + num + "&lang=" + urlLang);
  // else
  //   history.pushState({page: 2}, "title 2", "?lang=" + urlLang);
}

function initializePage() {
  defaultNewTheme = localStorage.getItem("defaultNewTheme");

  if (!defaultNewTheme) {
    defaultNewTheme = "light";

    if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) defaultNewTheme = "dark";
      else defaultNewTheme = "light";
    }

    localStorage.setItem("defaultNewTheme", defaultNewTheme);
  }
  document.documentElement.setAttribute("data-theme", defaultNewTheme);

  if (defaultNewTheme === "dark") id("themeIcon").innerHTML = lightIcon;
  else id("themeIcon").innerHTML = darkIcon;

  defaultColor = localStorage.getItem("defaultColor");

  let invalidColors = [
    "color11",
    "color12",
    "color13",
    "color14",
    "color15",
    "color16",
    "color17",
    "color18",
    "color19",
    "color20",
    "color21",
    "color22",
    "color23",
    "color24",
    "color25",
  ];

  if (!defaultColor || invalidColors.indexOf(defaultColor) > -1) {
    // Added so that users already using invalidcolors are reset to color8
    localStorage.setItem("defaultColor", "color8");
    defaultColor = "color8";
  } else {
    if (defaultColor.indexOf(",") > 0) {
      localStorage.setItem("defaultColor", "color10");
      defaultColor = "color10";
    }
  }

  setColor(window[defaultColor].value);

  defaultTemp = localStorage.getItem("defaultTemp");

  if (!defaultTemp) {
    localStorage.setItem("defaultTemp", "celsius");
    defaultTemp = "celsius";
  }

  defaultStyle = localStorage.getItem("defaultStyle");

  if (!defaultStyle) {
    localStorage.setItem("defaultStyle", "1");
    defaultStyle = "1";
  }

  defaultMargin = localStorage.getItem("defaultMargin");

  if (!defaultMargin) {
    localStorage.setItem("defaultMargin", "1");
    defaultMargin = "1";
  }

  document.documentElement.setAttribute("data-style", defaultStyle);


  setSettings();
  // console.log(defaultNewTheme);
  // console.log(defaultColor);
  // console.log(defaultTemp);
  // console.log(defaultStyle);
  // console.log(defaultMargin);
}


document.onkeydown = function(evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) 
      isEscape = (evt.key === "Escape" || evt.key === "Esc");
   else
      isEscape = (evt.keyCode === 27);
  if (isEscape && !id("sidebar").classList.contains("collapsed"))
      sideBar();
};