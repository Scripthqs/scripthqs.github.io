(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{667:function(v,_,e){"use strict";e.r(_);var l=e(50),o=Object(l.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"dom操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dom操作"}},[v._v("#")]),v._v(" DOM操作")]),v._v(" "),e("h2",{attrs:{id:"_1、dom查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、dom查询"}},[v._v("#")]),v._v(" 1、DOM查询")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("innerHTML")]),v._v(" 这个属性可以获取到元素内部的html代码，对于自结束标签没有意义")]),v._v(" "),e("li",[v._v("如果需要读取元素节点属性："),e("code",[v._v("元素.id")]),v._v(" "),e("code",[v._v("元素.name")]),v._v(" "),e("code",[v._v("元素.value")])]),v._v(" "),e("li",[v._v("class属性不能采用这种方式，读取class采用："),e("code",[v._v("元素.className")])])]),v._v(" "),e("p",[v._v("获取元素节点的子节点")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("元素.getElementsByTagName('li');")])]),v._v(" "),e("li",[e("code",[v._v("子节点数组 = 父节点.childNodes;")]),v._v("  获取所有子节点。根据DOM，标签中的空白和换行也会当成文本节点。")]),v._v(" "),e("li",[e("code",[v._v("子节点数组 = 父节点.children;")]),v._v(" 获取当前元素的所有子元素")]),v._v(" "),e("li",[e("code",[v._v(".innerHTML")]),v._v("和"),e("code",[v._v(".innerText")]),v._v("的区别，innerText没有标签，只有文本")]),v._v(" "),e("li",[v._v("在事件的响应函数中，响应函数是给谁绑定的，this就是谁")])]),v._v(" "),e("h2",{attrs:{id:"_2、获取-html-文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、获取-html-文档"}},[v._v("#")]),v._v(" 2、获取 html 文档")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("document.title")]),v._v(" 获取文档标题")]),v._v(" "),e("li",[e("code",[v._v("document.head")]),v._v(" 获取文档的头标签")]),v._v(" "),e("li",[e("code",[v._v("document.documentElement;")]),v._v("获取html根标签")]),v._v(" "),e("li",[e("code",[v._v("document.body;")]),v._v("获取body标签")]),v._v(" "),e("li",[e("code",[v._v("documment.all;")]),v._v("获取页面中所有元素")]),v._v(" "),e("li",[e("code",[v._v('var div = document.querySelector(".box1 div");')]),v._v("这个方法总会返回第一个元素，兼容IE8及以上")]),v._v(" "),e("li",[e("code",[v._v('var div = document.querySelectorAll(".box1 div");')]),v._v("这个方法会返回符合条件的数组，兼容IE8及以上")])]),v._v(" "),e("h2",{attrs:{id:"_3、dom的增删改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、dom的增删改"}},[v._v("#")]),v._v(" 3、DOM的增删改")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("createElement()")]),v._v("创建元素节点")]),v._v(" "),e("li",[e("code",[v._v("createTextNode()")]),v._v("创建文本节点")]),v._v(" "),e("li",[e("code",[v._v('元素.innerHTML="新标签"')])]),v._v(" "),e("li",[e("code",[v._v("appendChild()")]),v._v("把新的子节点添加到指定节点")]),v._v(" "),e("li",[e("code",[v._v("父节点.insertBefore(前节点,后节点)")]),v._v("在指定的子节点前面插入新的子节点")]),v._v(" "),e("li",[e("code",[v._v("父节点.replaceChild(新节点,旧节点)")]),v._v("在指定的子节点前面插入新的子节点")]),v._v(" "),e("li",[e("code",[v._v("父节点.removeChild(新节点,旧节点)")]),v._v(" 删除指定节点")]),v._v(" "),e("li",[e("code",[v._v("需要删除的节点.parentNode.removeChild(需要删除的节点);")])]),v._v(" "),e("li",[v._v("使用innerHTML也能完成DOM增删改的相关操作")]),v._v(" "),e("li",[e("code",[v._v('父元素.innerHTML += "<li>新标签</li>";')]),v._v(" 但是修改的内容较大")]),v._v(" "),e("li",[v._v("一般会将两种方法结合使用")]),v._v(" "),e("li",[v._v("在响应函数的末尾加"),e("code",[v._v("return false;")]),v._v("可以取消默认行为")]),v._v(" "),e("li",[e("code",[v._v('confirm("确认删除吗?")')]),v._v("可以弹出确认取消框")])]),v._v(" "),e("h2",{attrs:{id:"_4、dom操作css"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、dom操作css"}},[v._v("#")]),v._v(" 4、DOM操作CSS")]),v._v(" "),e("p",[v._v("通过JS修改元素的样式")]),v._v(" "),e("ul",[e("li",[v._v("内联样式\n"),e("ul",[e("li",[e("code",[v._v('元素.style.样式名 = "样式值"')])]),v._v(" "),e("li",[v._v("如果CSS中的样式名中含有"),e("code",[v._v("-")]),v._v("，比如"),e("code",[v._v("background-color")]),v._v("，需要将这种样式名修改为驼峰命名法,"),e("code",[v._v("backgroundColor")])]),v._v(" "),e("li",[e("code",[v._v("border-top-width")]),v._v("修改为"),e("code",[v._v("borderTopWidth")])]),v._v(" "),e("li",[v._v("w3cschool中css的参考手册可以查到")]),v._v(" "),e("li",[v._v("通过这种方法设置的样式是内联样式，具有较高的优先级")]),v._v(" "),e("li",[v._v("通过"),e("code",[v._v("元素.style.样式名")]),v._v("可以读取内联样式的属性值")]),v._v(" "),e("li",[e("code",[v._v('元素.style["属性"];')]),v._v("这种方法读取更加灵活")]),v._v(" "),e("li",[v._v("这两种方法返回的属性值都是字符串，并且带单位")])])]),v._v(" "),e("li",[v._v("元素当前显示的样式\n"),e("ul",[e("li",[e("code",[v._v("元素.currentStyle.样式")]),v._v(" 但是这种方法只有IE才能用")]),v._v(" "),e("li",[e("code",[v._v("getComputedStyle()")]),v._v("这个方法IE9以上及其他浏览器可以使用，这是window的方法，可以直接使用，需要两个参数\n"),e("ul",[e("li",[v._v("需要获取的样式")]),v._v(" "),e("li",[v._v("可以传递一个伪元素，一般都传null")]),v._v(" "),e("li",[v._v("该方法会返回一个对象，对象封装了当前元素对应的样式")]),v._v(" "),e("li",[e("code",[v._v("getComputedStyle(box1,null).width")])]),v._v(" "),e("li",[v._v("该方法或获取真实的值，而不是默认值，比如宽度，不会获取auto，而是真实的像素值")])])])])])])])}),[],!1,null,null,null);_.default=o.exports}}]);