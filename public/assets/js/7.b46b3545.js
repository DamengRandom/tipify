(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[s("h3",{attrs:{id:"javascript-event-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-event-loop"}},[t._v("#")]),t._v(" Javascript Event Loop")]),s("h4",{attrs:{id:"concept"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#concept"}},[t._v("#")]),t._v(" Concept:")]),s("p",[t._v("Event loop is how JavaScript handle events, according to my current understanding, we can understand like this:")]),s("p",[t._v("we have 4 compoennts to describe how JavaScript code running sequence, "),s("code",[t._v("heap")]),t._v(", "),s("code",[t._v("stack")]),t._v(", "),s("code",[t._v("web APIs")]),t._v(" and "),s("code",[t._v("event queue")]),t._v(".")]),s("p",[t._v("Step 1: heap -> stack (pass code to run on stack)")]),s("p",[t._v("Step 2: stack -> web APIs (eg: "),s("code",[t._v("setTimeout()")]),t._v(" could be like web APIs, and it will run behind the scense, making sure nothing blocked)")]),s("p",[t._v("Step 3: webAPIs -> event queue (pass function event into event queue and event queue will listen if stack run out of tasks, then pass the function event back to stack and run)")]),s("p",[t._v("stack run the function event and when it finished, Javascript function are finished running.")]),s("p",[t._v("Classic Example:")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'normal heap stack task 1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'web API task 1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'normal heap stack task 2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// normal heap stack task 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// normal heap stack task 2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// web API task 1")]),t._v("\n")])])]),s("p",[t._v("One word: runing all normal heap stack task first, then run web API function event tasks")]),s("h4",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),s("ol",[s("li",[s("a",{attrs:{href:"https://www.youtube.com/watch?v=8aGhZQkoFbQ",target:"_blank"}},[t._v("Reference 1")])]),s("li",[s("a",{attrs:{href:"https://www.youtube.com/watch?v=XzXIMZMN9k4",target:"_blank"}},[t._v("Reference 2")])])])])}],!1,null,null,null);n.default=e.exports}}]);