function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var i,o,r,u,a,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function S(e){return c=e,a=setTimeout(T,t),l?b(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function T(){var e=v();if(j(e))return h(e);a=setTimeout(T,function(e){var n=t-(e-f);return s?d(n,r-(e-c)):n}(e))}function h(e){return a=void 0,g&&i?b(e):(i=o=void 0,u)}function w(){var e=v(),n=j(e);if(i=arguments,o=this,f=e,n){if(void 0===a)return S(f);if(s)return a=setTimeout(T,t),b(f)}return void 0===a&&(a=setTimeout(T,t)),u}return t=y(t)||0,p(n)&&(l=!!n.leading,r=(s="maxWait"in n)?m(y(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=f=o=a=void 0},w.flush=function(){return void 0===a?u:h(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const b={form:document.querySelector("form"),email:document.querySelector('[name="email"]'),messg:document.querySelector('[name="message"]'),submit:document.querySelector('[type="submit"]')};b.form.addEventListener("submit",(function(e){e.preventDefault();const t={email:b.email.value,message:b.messg.value};console.log(t),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),b.form.addEventListener("input",e(t)((function(e){const t={email:b.email.value,message:b.messg.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),function(){const e=localStorage.getItem("feedback-form-state");e&&(input=JSON.parse(e),b.email.value=input.email,b.messg.value=input.message)}();
//# sourceMappingURL=03-feedback.8528263f.js.map
