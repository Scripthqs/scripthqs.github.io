(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{642:function(s,t,a){"use strict";a.r(t);var n=a(50),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"css问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css问题"}},[s._v("#")]),s._v(" CSS问题")]),s._v(" "),a("h2",{attrs:{id:"display-none和visibility-hidden的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display-none和visibility-hidden的区别"}},[s._v("#")]),s._v(" display:none和visibility:hidden的区别")]),s._v(" "),a("p",[s._v("共同点：都可以使元素不可见")]),s._v(" "),a("p",[s._v("不同点：display:none会让元素完全从渲染树中消失，不占据任何空间，visibility:hidden不会让元素从渲染树中消失，占据空间，只是内容不可见。display:none是非继承属性，visibility:hidden是继承属性，子孙节点继承了hidden属性，可以设置visibility:visible让子孙节点显性。")]),s._v(" "),a("h2",{attrs:{id:"为什么要初始化css样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要初始化css样式"}},[s._v("#")]),s._v(" 为什么要初始化CSS样式")]),s._v(" "),a("p",[s._v("主要原因是浏览器的兼容问题，不同浏览器对有些元素的默认样式是不同的，并且默认样式会影响项目的最终布局，如果没有对CSS进行初始化，那么有可能出现浏览器之间的页面显示差距。")]),s._v(" "),a("h2",{attrs:{id:"什么是postcss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是postcss"}},[s._v("#")]),s._v(" 什么是PostCSS")]),s._v(" "),a("p",[s._v("PostCSS是一个平台，基于这个平台，可以使用一些插件来优化css代码，比如autoprefixer插件，它基于postcss使用，可以帮助我们为css增加不同的浏览器前缀")]),s._v(" "),a("h2",{attrs:{id:"css选择器优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css选择器优先级"}},[s._v("#")]),s._v(" css选择器优先级")]),s._v(" "),a("p",[s._v("元素选择器、类选择器、id选择器、通用选择器、后代选择器")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token important"}},[s._v("!important")]),s._v(">行内样式>id选择器>类选择器>标签选择器>通配符>继承\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("选择器的优先级越高，就显示什么样式，行内样式1000，id选择器0100，类选择器0010，元素选择器0001，通配选择器0000。")]),s._v(" "),a("h2",{attrs:{id:"盒模型的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#盒模型的理解"}},[s._v("#")]),s._v(" 盒模型的理解")]),s._v(" "),a("p",[s._v("css3有2种盒模型，标准盒模型和IE盒模型，盒模型都是由margin、padding、border、content组成。区别在于设置width和height时，所对应的范围不同，标准盒模型的width和height属性范围只包含content，IE盒模型的width和height包含了content、padding、border。可以通过修改元素的box-sizing属性来元素的盒模型。")]),s._v(" "),a("ul",[a("li",[s._v("box-sizing: content-box; 表示标准盒模型")]),s._v(" "),a("li",[s._v("box-sizing: border-box; 表示IE盒模型")])]),s._v(" "),a("h2",{attrs:{id:"精灵图-雪碧图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#精灵图-雪碧图"}},[s._v("#")]),s._v(" 精灵图（雪碧图）")]),s._v(" "),a("p",[s._v("精灵图将一个页面涉及的小图都包含到一张大图中，，然后利用css的background-image,background-repeat,background-position属性进行背景定位。")]),s._v(" "),a("ul",[a("li",[s._v("利用精灵图能够减少网页的http请求，从而提高页面的性能，能够减少图片的大小")])]),s._v(" "),a("h2",{attrs:{id:"水平垂直居中的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#水平垂直居中的实现"}},[s._v("#")]),s._v(" 水平垂直居中的实现")]),s._v(" "),a("p",[s._v("行内元素：文字和图片")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("text-align")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("line-height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("块级元素：元素的宽高确定")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".father")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*开启BFC，解决外边距重叠问题*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".son")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0 auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("father.h-son.h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("块级元素：元素的宽高确定，使用定位，子绝父相")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".father")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".son")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -son.w/2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -son.h/2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("块级元素：宽高不定时")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".father")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".son")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50%\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50%\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("translate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("-50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("使用flex布局")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".father")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[s._v("#")]),s._v(" BFC")]),s._v(" "),a("p",[s._v("BFC是块级格式化环境，当元素开启BFC后，该区域会变成一个独立的布局区域。")]),s._v(" "),a("ul",[a("li",[s._v("开启BFC的元素，不会被浮动元素覆盖")]),s._v(" "),a("li",[s._v("开启BFC的元素，子元素和父元素的外边距不会重叠")]),s._v(" "),a("li",[s._v("开启BFC的元素，可以包含浮动的子元素")])]),s._v(" "),a("h3",{attrs:{id:"如何开启bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何开启bfc"}},[s._v("#")]),s._v(" 如何开启BFC")]),s._v(" "),a("ul",[a("li",[s._v("设置浮动，会脱离文档流，不推荐")]),s._v(" "),a("li",[s._v("设置为行内块元素")]),s._v(" "),a("li",[s._v("将overflow设置为一个非visible的值")])]),s._v(" "),a("h2",{attrs:{id:"定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定位"}},[s._v("#")]),s._v(" 定位")]),s._v(" "),a("p",[s._v("相对定位不会脱离文档流，以自身为参照物，灵魂出窍。绝对定位会脱离文档流，参照物是包含块。")]),s._v(" "),a("h3",{attrs:{id:"包含块是离它最近那个开启定位的祖先元素-没有就是html根元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包含块是离它最近那个开启定位的祖先元素-没有就是html根元素"}},[s._v("#")]),s._v(" 包含块是离它最近那个开启定位的祖先元素，没有就是HTML根元素")]),s._v(" "),a("p",[s._v("固定定位是特殊的绝对定位，参照物是浏览器视口。粘滞定位是特殊的相对定位，参照物是浏览器视口。开启定位的元素可以是z-index来设置层级。")]),s._v(" "),a("h2",{attrs:{id:"css画三角形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css画三角形"}},[s._v("#")]),s._v(" css画三角形")]),s._v(" "),a("p",[s._v("主要是利用盒模型的border属性来设置的")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50px solid transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50px solid transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);