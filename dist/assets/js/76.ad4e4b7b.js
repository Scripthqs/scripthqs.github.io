(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{531:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue数据代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue数据代理"}},[s._v("#")]),s._v(" Vue数据代理")]),s._v(" "),a("h2",{attrs:{id:"_1-object-defineproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-object-defineproperty"}},[s._v("#")]),s._v(" 1 Object.defineProperty()")]),s._v(" "),a("p",[a("code",[s._v("Object.defineProperty()")]),s._v("是用来在一个对象上添加一个新属性，或者修改一个对象的现有属性， 并返回这个对象。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("defineProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("修改的对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'对象的属性名'")]),s._v("，"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("属性描述对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("属性描述对象提供6个元属性")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("value 是该属性的属性值，默认为undefined")])]),s._v(" "),a("li",[a("p",[s._v("writable 控制属性是否可以被删除，默认值是false")])]),s._v(" "),a("li",[a("p",[s._v("enumerable 控制属性是否可以被枚举，默认值是false")])]),s._v(" "),a("li",[a("p",[s._v("configurable 控制属性是否可以被删除，默认值是false")])]),s._v(" "),a("li",[a("p",[s._v("get  表示该属性的取值函数（"),a("code",[s._v("getter")]),s._v("），默认为"),a("code",[s._v("undefined")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("set  表示该属性的存值函数（setter），默认为"),a("code",[s._v("undefined")]),s._v("。")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("        let num = 18\n        let person = {\n            name: '张三',\n            gender: '男',\n        }\n        Object.defineProperty(person,'age',{\n            // value: 18,\n            // enumerable: true,//控制属性是否可以被枚举，默认值是false\n            // writable: true,//控制属性是否可以被修改，默认值是false\n            // configurable: true,//控制属性是否可以被删除，默认值是false\n            get(){//当有人读取age属性时，get函数（getter）会被调用，且返回值就是age的值\n                console.log('有人读取了age属性');\n                return num\n            },\n            set(value){//当有人修改了age属性时，set函数（setter）会被调用，且会收到修改的具体值\n                console.log('有人修改了age属性，且值是' + value);\n            }\n        })\n\n        console.log(person);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("当有人读取age属性时，get函数（getter）会被调用，且"),a("strong",[s._v("返回值就是age")]),s._v("的值")])]),s._v(" "),a("li",[a("p",[s._v("当有人修改了age属性时，set函数（setter）会被调用，且会收到修改的具体值")])]),s._v(" "),a("li",[a("p",[s._v("Object.defineProperty()将num和person绑定在一起，这就是Vue框架中，数据代理的原理")])])]),s._v(" "),a("h2",{attrs:{id:"_2-数据代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据代理"}},[s._v("#")]),s._v(" 2 数据代理")]),s._v(" "),a("p",[s._v("数据代理：通过一个对象代理对另一个对象的属性的操作（读/写）")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\tObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("defineProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//value = obj.x")]),s._v("\n\t\t  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" value\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[s._v("通过obj2也可以修改obj1")])]),s._v(" "),a("h2",{attrs:{id:"_3-vue数据代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-vue数据代理"}},[s._v("#")]),s._v(" 3 Vue数据代理")])])}),[],!1,null,null,null);t.default=e.exports}}]);