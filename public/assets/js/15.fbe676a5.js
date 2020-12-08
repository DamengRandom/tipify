(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{155:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h3",{attrs:{id:"javascript-module-systems-understanding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-module-systems-understanding"}},[e._v("#")]),e._v(" JavaScript Module Systems Understanding")]),a("p",[e._v("*** Never forget I failed on interview with this question !!! ***")]),a("h4",{attrs:{id:"main-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-types"}},[e._v("#")]),e._v(" Main types:")]),a("ol",[a("li",[a("code",[e._v("CommonJS")]),e._v(":")])]),a("ul",[a("li",[e._v("implemented by NodeJS")]),a("li",[e._v("used for "),a("code",[e._v("server side")]),e._v(" when you have modules installed")]),a("li",[a("code",[e._v("no")]),e._v(" tree shaking (because when you import, you get an object)")]),a("li",[e._v("import ("),a("code",[e._v("require")]),e._v("), export ("),a("code",[e._v("module.exports")]),e._v(")")]),a("li",[e._v("you always got a copy of an object, "),a("code",[e._v("no live changes")]),e._v(" in module itself")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[e._v("AMD")]),e._v(" (Async Module Definition)")])]),a("ul",[a("li",[e._v("implemented by require.js")]),a("li",[e._v("used for "),a("code",[e._v("client side")]),e._v(" when you dynamically loading of modules")]),a("li",[e._v("import via "),a("code",[e._v("require")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("code",[e._v("UMD")]),e._v(" (Universal Module Definition)")])]),a("ul",[a("li",[e._v("combination of "),a("code",[e._v("CommonJS + AMD")])]),a("li",[e._v("can be used for both CommonJS or AMD "),a("code",[e._v("environment")])]),a("li",[e._v("capable of working on both "),a("code",[e._v("client")]),e._v(" and "),a("code",[e._v("server")]),e._v(" side")])]),a("ol",{attrs:{start:"4"}},[a("li",[a("code",[e._v("Harmony")]),e._v(" (ES6)")])]),a("ul",[a("li",[e._v("utilized for both "),a("code",[e._v("client")]),e._v(" & "),a("code",[e._v("server")]),e._v(" side")]),a("li",[e._v("using "),a("code",[e._v("import")]),e._v(" & "),a("code",[e._v("export")]),e._v(" syntax")]),a("li",[e._v("able to "),a("code",[e._v("tree shake")])]),a("li",[e._v("static analyzing: can determine "),a("code",[e._v("imports")]),e._v(" and "),a("code",[e._v("exports")]),e._v(" at "),a("code",[e._v("compile")]),e._v(" time")]),a("li",[e._v("support for "),a("code",[e._v("live changes")]),e._v(" in module itself")])]),a("h4",{attrs:{id:"general-module-bundler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-module-bundler"}},[e._v("#")]),e._v(" General module bundler:")]),a("ol",[a("li",[e._v("webpack:\n"),a("ul",[a("li",[e._v("bundle/package up js files for usage in a browser")]),a("li",[e._v("uses CommonJS module system")]),a("li",[e._v("features: code splitting, async loading & tree shaking")])])]),a("li",[e._v("rollup:\n"),a("ul",[a("li",[e._v("complies small pieces of JavaScript code into something larger, eg: library or application")]),a("li",[e._v("uses ES6 module system")]),a("li",[e._v("features: support tree shaking, but not async loading")])])])]),a("p",[e._v("Tips: Babel: is a transpiler  (just transpile, never bundle code)")]),a("p",[e._v("Suggestion: using rollup for building "),a("code",[e._v("library")]),e._v(", using webpack for building "),a("code",[e._v("application")])]),a("h4",{attrs:{id:"tree-shaking-in-webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking-in-webpack"}},[e._v("#")]),e._v(" Tree shaking in Webpack")]),a("p",[e._v("!! Please read this "),a("a",{attrs:{href:"https://medium.com/@craigmiller160/how-to-fully-optimize-webpack-4-tree-shaking-405e1c76038",target:"_blank"}},[e._v("article")]),e._v(" !!!!")]),a("p",[e._v("Basic configuration for webpack tree shaking:")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Base Webpack Config for Tree Shaking")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'production'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  optimization"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    usedExports"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    minimizer"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TerserPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("At the end, how to create your own library, here is a better "),a("a",{attrs:{href:"",target:"_blank"}},[e._v("reference")])])])}],!1,null,null,null);t.default=n.exports}}]);