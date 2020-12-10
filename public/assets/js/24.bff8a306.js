(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{164:function(e,s,a){"use strict";a.r(s);var t=a(0),r=Object(t.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"content"},[a("h3",{attrs:{id:"sql-general-recalls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-general-recalls"}},[e._v("#")]),e._v(" SQL General recalls")]),a("ol",[a("li",[a("p",[a("code",[e._v("SQL")]),e._v(": Structured Query Language")])]),a("li",[a("p",[e._v("Important Query Commands:")])])]),a("ul",[a("li",[a("code",[e._v("USE")]),e._v(": use database TEST")]),a("li",[a("code",[e._v("SELECT")]),e._v(": select database columns (eg: select *)")]),a("li",[a("code",[e._v("FROM")]),e._v(": from which database table")]),a("li",[a("code",[e._v("WHERE")]),e._v(": condition")]),a("li",[a("code",[e._v("ORDER BY")]),e._v(": default is ascending order")]),a("li",[a("code",[e._v("AS")]),e._v(": give a custom column name")]),a("li",[a("code",[e._v("AND")]),a("code",[e._v("OR")]),a("code",[e._v("NOT")]),e._v(": operators, ☞ venn diagram (eg: <>: means not equal)")]),a("li",[a("code",[e._v("IN")]),e._v(": contains which values, eg:")])]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" customers "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" state "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("not")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("in")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'CO'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'IL'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" 'FL’"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("ul",[a("li",[a("code",[e._v("LIKE")]),e._v(": find similar data eg:")])]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'%part_of_string%'")]),e._v("\n")])])]),a("ul",[a("li",[a("code",[e._v("REGEX")]),e._v(": regular expression, powerful for using searching strings inside a table,\n"),a("ul",[a("li",[a("code",[e._v("^")]),e._v(": beginning of the string")]),a("li",[a("code",[e._v("$")]),e._v(": end of the string")]),a("li",[a("code",[e._v("|")]),e._v(": logical or (multiple patterns)\neg:")])])])]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" last_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("regexp")]),e._v(" 'ey$"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("on")]),e._v("$’ last_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("with")]),e._v(" ey "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("or")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("on")]),e._v("\n")])])]),a("ul",[a("li",[a("code",[e._v("IS NULL")]),e._v(" or "),a("code",[e._v("IS NOT NULL")]),e._v(": check condition the attribute is not null or is null records eg:")])]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" phone "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("is")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("not")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("null")]),e._v("\n")])])]),a("ul",[a("li",[a("code",[e._v("ORDER BY")]),e._v(": ascending order or descending order eg:")])]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("order")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("by")]),e._v(" first_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("desc")]),e._v("\n")])])]),a("ul",[a("li",[a("code",[e._v("LIMIT")]),e._v(": top number of records (eg: top 10 records)")]),a("li",[a("code",[e._v("JOIN ON")]),e._v(":  join two tables together")])])])}],!1,null,null,null);s.default=r.exports}}]);