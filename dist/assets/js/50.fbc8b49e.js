(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{533:function(t,a,s){"use strict";s.r(a);var e=s(50),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"http基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http基础"}},[t._v("#")]),t._v(" HTTP基础")]),t._v(" "),s("h2",{attrs:{id:"_1、http-请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、http-请求"}},[t._v("#")]),t._v(" 1、HTTP 请求")]),t._v(" "),s("p",[s("img",{attrs:{src:"D:%5Cuser%5CDesktop%5Cscripthqs%5Cnote%5Cmaterial%5Cajax%5CHTTP.png",alt:"HTTP"}})]),t._v(" "),s("ol",[s("li",[t._v("前端应用从浏览器端向服务器发送HTTP 请求("),s("strong",[t._v("请求报文")]),t._v(")")]),t._v(" "),s("li",[t._v("后台服务器接收到请求后, 调度服务器应用处理请求, 向浏览器端返回HTTP响应("),s("strong",[t._v("响应报文")]),t._v(")")]),t._v(" "),s("li",[t._v("浏览器端接收到响应, 解析显示响应体/调用监视回调")])]),t._v(" "),s("h2",{attrs:{id:"_2、http-请求报文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、http-请求报文"}},[t._v("#")]),t._v(" 2、HTTP 请求报文")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("请求行")])])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("method url\nGET /product_detail?id=2\nPOST /login\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[s("strong",[t._v("多个请求头")])])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Host: www.baidu.com\nCookie: BAIDUID=AD3B0FA706E; BIDUPSID=AD3B0FA706;`\nContent-Type: application/x-www-form-urlencoded 或者application/json\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[s("strong",[t._v("请求体")])])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('username=tom&pwd=123\n{"username": "tom", "pwd": 123}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"_2-1、请求报文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、请求报文"}},[t._v("#")]),t._v(" 2.1、请求报文")]),t._v(" "),s("ul",[s("li",[t._v("行：GET/URL/HTTP1.1")]),t._v(" "),s("li",[t._v("头：Host:Cookie:Content-type:User-Agent：")]),t._v(" "),s("li",[t._v("空行:")]),t._v(" "),s("li",[t._v("体:get请求为空，username=admin&password=admin")])]),t._v(" "),s("h2",{attrs:{id:"_3、-http-响应报文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、-http-响应报文"}},[t._v("#")]),t._v(" 3、 HTTP 响应报文")]),t._v(" "),s("ol",[s("li",[t._v("响应状态行:")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("status statusText\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("多个响应头")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Content-Type: text/html;charset=utf-8\nSet-Cookie: BD_CK_SAM=1;path=/\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("响应体")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("html 文本/json 文本/js/css/图片...\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"_3-1、响应报文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、响应报文"}},[t._v("#")]),t._v(" 3.1、响应报文")]),t._v(" "),s("ul",[s("li",[t._v("行：HTTP/1.1  200（OK） 404（找不到） 403（被禁止）401（未授权）")]),t._v(" "),s("li",[t._v("头：content-type：content-length content-encoding")]),t._v(" "),s("li",[t._v("空行")]),t._v(" "),s("li",[t._v("体:HTML的内容")])]),t._v(" "),s("h2",{attrs:{id:"_4、post-请求体参数格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、post-请求体参数格式"}},[t._v("#")]),t._v(" 4、post 请求体参数格式")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("Content-Type: application/x-www-form-urlencoded;charset=utf-8")]),t._v("\n用于键值对参数，参数的键值用=连接, 参数之间用&连接\n例如: "),s("code",[t._v("name=%E5%B0%8F%E6%98%8E&age=12")])]),t._v(" "),s("li",[s("code",[t._v("Content-Type: application/json;charset=utf-8")]),t._v("\n用于 json 字符串参数\n例如: "),s("code",[t._v('{"name": "%E5%B0%8F%E6%98%8E", "age": 12}')])]),t._v(" "),s("li",[s("code",[t._v("Content-Type: multipart/form-data")]),t._v("\n用于文件上传请求")])]),t._v(" "),s("h2",{attrs:{id:"_5、常见的响应状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、常见的响应状态码"}},[t._v("#")]),t._v(" 5、常见的响应状态码")]),t._v(" "),s("p",[s("code",[t._v("200 OK")]),t._v(" 请求成功。一般用于GET 与POST 请求\n"),s("code",[t._v("201 Created")]),t._v(" 已创建。成功请求并创建了新的资源\n"),s("code",[t._v("401 Unauthorized")]),t._v(" 未授权/请求要求用户的身份认证\n"),s("code",[t._v("404 Not Found")]),t._v(" 服务器无法根据客户端的请求找到资源\n"),s("code",[t._v("500 Internal Server Error")]),t._v(" 服务器内部错误，无法完成请求")]),t._v(" "),s("h2",{attrs:{id:"_6、不同类型的请求及其作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、不同类型的请求及其作用"}},[t._v("#")]),t._v(" 6、不同类型的请求及其作用")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("GET")]),t._v(": 从服务器端"),s("strong",[t._v("读取")]),t._v("数据（查）")]),t._v(" "),s("li",[s("code",[t._v("POST")]),t._v(": 向服务器端"),s("strong",[t._v("添加")]),t._v("新数据 （增）")]),t._v(" "),s("li",[s("code",[t._v("PUT")]),t._v(": "),s("strong",[t._v("更新")]),t._v("服务器端已经数据 （改）")]),t._v(" "),s("li",[s("code",[t._v("DELETE")]),t._v(": "),s("strong",[t._v("删除")]),t._v("服务器端数据 （删）")])]),t._v(" "),s("h2",{attrs:{id:"_7、api-的分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、api-的分类"}},[t._v("#")]),t._v(" 7、API 的分类")]),t._v(" "),s("ol",[s("li",[t._v("REST API: restful （Representational State Transfer (资源)表现层状态转化）\n(1) 发送请求进行CRUD 哪个操作由请求方式来决定\n(2) 同一个请求路径可以进行多个操作\n(3) 请求方式会用到GET/POST/PUT/DELETE")]),t._v(" "),s("li",[t._v("非REST API: restless\n(1) 请求方式不决定请求的CRUD 操作\n(2) 一个请求路径只对应一个操作\n(3) 一般只有GET/POST")])]),t._v(" "),s("h2",{attrs:{id:"_8、-区别-一般http请求-与-ajax请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、-区别-一般http请求-与-ajax请求"}},[t._v("#")]),t._v(" 8、 区别 一般http请求 与 ajax请求")]),t._v(" "),s("ol",[s("li",[t._v("ajax请求 是一种特别的 http请求")]),t._v(" "),s("li",[t._v("对服务器端来说, 没有任何区别, 区别在"),s("strong",[t._v("浏览器端")])]),t._v(" "),s("li",[t._v("浏览器端发请求: 只有"),s("code",[t._v("XHR")]),t._v(" 或"),s("code",[t._v("fetch")]),t._v(" 发出的才是ajax 请求, 其它所有的都是非ajax 请求")]),t._v(" "),s("li",[t._v("浏览器端接收到响应\n(1) 一般请求: 浏览器一般会直接显示响应体数据, 也就是我们常说的刷新/跳转页面\n(2) ajax请求: 浏览器不会对界面进行任何更新操作, 只是"),s("strong",[t._v("调用监视的回调函数")]),t._v("并"),s("strong",[t._v("传入响应相关数据")])])]),t._v(" "),s("h2",{attrs:{id:"_9、http协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9、http协议"}},[t._v("#")]),t._v(" 9、HTTP协议")]),t._v(" "),s("p",[t._v("URL的组成：")]),t._v(" "),s("ul",[s("li",[t._v("协议://主机:端口/路径?查询")]),t._v(" "),s("li",[t._v("scheme://host:port/path?query#fragment")])]),t._v(" "),s("p",[t._v("HTTP协议，超文本传输协议，详细规定了浏览器和万维网服务器之间相互通信的规则。协议就是约定，规定。")])])}),[],!1,null,null,null);a.default=r.exports}}]);