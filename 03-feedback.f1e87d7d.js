function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return c.Date.now()};function g(e,t,n){var i,o,r,f,a,u,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,l=t,f=e.apply(r,n)}function h(e){return l=e,a=setTimeout(w,t),c?b(e):f}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=r}function w(){var e=p();if(j(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-u);return s?v(n,r-(e-l)):n}(e))}function O(e){return a=void 0,g&&i?b(e):(i=o=void 0,f)}function T(){var e=p(),n=j(e);if(i=arguments,o=this,u=e,n){if(void 0===a)return h(u);if(s)return a=setTimeout(w,t),b(u)}return void 0===a&&(a=setTimeout(w,t)),f}return t=y(t)||0,m(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=u=o=a=void 0},T.flush=function(){return void 0===a?f:O(p())},T}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),h=()=>localStorage.setItem("feedback-form-state",JSON.stringify(w)),j=()=>JSON.parse(localStorage.getItem("feedback-form-state"));let w=null!=j()?j():{};j(),(()=>{for(const e in w)b.elements[e].value=w[e]})(),b.addEventListener("input",e(t)((e=>{const{target:t}=e,n=t.value,i=t.name;w[i]=n,h()}),500)),b.lastElementChild.addEventListener("click",(()=>{event.preventDefault(),localStorage.clear(),b.reset(),console.log(w),w={}}));
//# sourceMappingURL=03-feedback.f1e87d7d.js.map
