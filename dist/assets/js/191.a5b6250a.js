(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{641:function(_,v,t){"use strict";t.r(v);var l=t(50),s=Object(l.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[_._v("#")]),_._v(" 数据类型")]),_._v(" "),t("h2",{attrs:{id:"_1-js数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-js数据类型"}},[_._v("#")]),_._v(" 1.js数据类型")]),_._v(" "),t("p",[_._v("截至到2021年，已经有8种数据类型。7种原始数据类型（值类型），1种引用数据类型（引用类型）。")]),_._v(" "),t("ul",[t("li",[t("strong",[t("code",[_._v("String")]),_._v(" 字符串")])]),_._v(" "),t("li",[t("strong",[t("code",[_._v("Number")]),_._v(" 数值")])]),_._v(" "),t("li",[t("strong",[t("code",[_._v("Boolean")]),_._v(" 布尔值")])]),_._v(" "),t("li",[t("strong",[t("code",[_._v("Null")]),_._v(" 空值")])]),_._v(" "),t("li",[t("strong",[t("code",[_._v("Undefined")]),_._v(" 未定义")])]),_._v(" "),t("li",[t("strong",[t("code",[_._v("Symbol")]),_._v(" (ES6) 独一无二的值类型。")])]),_._v(" "),t("li",[t("strong",[t("code",[_._v("BigInt")]),_._v(" (ES10) 大整数基本类型。")])])]),_._v(" "),t("p",[_._v("原始数据类型和引用数据类型两种类型的区别在于"),t("strong",[_._v("存储位置的不同")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("原始数据类型直接存储在栈（stack）中")])]),_._v(" "),t("li",[t("p",[_._v("引用数据类型存储在堆（heap）中的对象，引用数据类型在"),t("strong",[_._v("栈中存储了指针")]),_._v("，该"),t("strong",[_._v("指针指向")]),_._v("堆中该实体的"),t("strong",[_._v("起始地址")]),_._v("。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。")])])]),_._v(" "),t("h2",{attrs:{id:"_2-堆和栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-堆和栈"}},[_._v("#")]),_._v(" 2.堆和栈")]),_._v(" "),t("p",[_._v("堆和栈的概念存在于"),t("strong",[_._v("数据结构")]),_._v("和"),t("strong",[_._v("操作系统内存")]),_._v("中。")]),_._v(" "),t("p",[_._v("在数据结构中：")]),_._v(" "),t("ul",[t("li",[_._v("在数据结构中，栈中数据的存取方式为先进后出。")]),_._v(" "),t("li",[_._v("堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。")])]),_._v(" "),t("p",[_._v("在操作系统中：")]),_._v(" "),t("ul",[t("li",[_._v("内存被分为栈区和堆区")]),_._v(" "),t("li",[_._v("栈区内存由编译器自动分配释放，"),t("strong",[_._v("js所有的变量都存在栈内存中")])]),_._v(" "),t("li",[_._v("堆区内存一般由开发着分配释放，若开发者不释放，程序结束时可能由垃圾回收机制回收。")])]),_._v(" "),t("h2",{attrs:{id:"_3-数据类型检测"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据类型检测"}},[_._v("#")]),_._v(" 3.数据类型检测")]),_._v(" "),t("p",[t("strong",[_._v("（1）typeof")])]),_._v(" "),t("p",[_._v("数组、对象、null都会被判断为object，其他判断都正确。")]),_._v(" "),t("p",[t("strong",[_._v("（2）instanceof")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("可以正确判断对象的类型，"),t("strong",[_._v("其内部运行机制是判断在其原型链中能否找到该类型的原型")]),_._v("。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("只能正确判断引用数据类型")]),_._v("，而不能判断基本数据类型。")])])]),_._v(" "),t("p",[t("strong",[_._v("（3）===")])]),_._v(" "),t("ul",[t("li",[t("code",[_._v("===")]),_._v(" 可以判断undefined、null")]),_._v(" "),t("li",[_._v("数量类型判断不要使用"),t("code",[_._v("==")]),_._v("，因为它有可能会做数据类型转换。")])]),_._v(" "),t("p",[_._v("（4）"),t("strong",[_._v("Object.prototype.toString.call()")])]),_._v(" "),t("ul",[t("li",[_._v("使用 Object 对象的原型方法 toString 来判断数据类型")]),_._v(" "),t("li",[_._v("这个方法很准确的判断各种类型")])]),_._v(" "),t("h2",{attrs:{id:"_4、undefined与null"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、undefined与null"}},[_._v("#")]),_._v(" 4、undefined与null")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("undefined代表变量没有赋值")])]),_._v(" "),t("li",[t("p",[_._v("null: 代表变量赋值了, 只是值为null，表示"),t("strong",[_._v("空对象")])])])]),_._v(" "),t("p",[t("strong",[_._v("什么时候将变量赋值为null?")])]),_._v(" "),t("ul",[t("li",[_._v("初始化赋值: 将要作为引用变量使用, 但对象还没有确定")]),_._v(" "),t("li",[_._v("结束时: 将变量指向的对象成为垃圾对象")])]),_._v(" "),t("p",[_._v("typeof null返回一个对象")]),_._v(" "),t("h2",{attrs:{id:"_5、js变量类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、js变量类型"}},[_._v("#")]),_._v(" 5、js变量类型")]),_._v(" "),t("p",[_._v("js的变量本身是没有类型的, 变量的类型实际上是变量内存中数据的类型 。")]),_._v(" "),t("p",[t("strong",[_._v("变量类型")])]),_._v(" "),t("ul",[t("li",[_._v("基本类型: 保存基本类型数据的变量")]),_._v(" "),t("li",[_._v("引用类型: 保存对象地址值的变量")])])])}),[],!1,null,null,null);v.default=s.exports}}]);