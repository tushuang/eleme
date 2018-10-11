/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javaScript/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javaScript/app.js":
/*!*******************************!*\
  !*** ./src/javaScript/app.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n//主要入口文件\r\n\r\nconst Router = __webpack_require__(/*! ./router/index */ \"./src/javaScript/router/index.js\");\r\n// require('./modules/flexible');\r\nconst home_controller = __webpack_require__(/*! ./controllers/home_controller */ \"./src/javaScript/controllers/home_controller.js\");\r\n//调用render的渲染函数 \r\n\r\nhome_controller.render(); \r\n\r\n\r\n//开启陆由工具\r\nconst router = new Router('#/content');\r\nwindow.router = router;    //将router设为全局变量 方便在其他文件里使用\r\nrouter.init();\n\n//# sourceURL=webpack:///./src/javaScript/app.js?");

/***/ }),

/***/ "./src/javaScript/controllers/find_controller.js":
/*!*******************************************************!*\
  !*** ./src/javaScript/controllers/find_controller.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const find_template = __webpack_require__(/*! ../views/find.html */ \"./src/javaScript/views/find.html\");\r\n\r\nconst render = () => {\r\n    $('#content').html(find_template);\r\n}\r\n\r\nmodule.exports = {\r\n    render\r\n}\n\n//# sourceURL=webpack:///./src/javaScript/controllers/find_controller.js?");

/***/ }),

/***/ "./src/javaScript/controllers/home_content_controller.js":
/*!***************************************************************!*\
  !*** ./src/javaScript/controllers/home_content_controller.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const home_content_template = __webpack_require__(/*! ../views/home_content.html */ \"./src/javaScript/views/home_content.html\");\r\nconst foot_models = __webpack_require__(/*! ../models/foot-models */ \"./src/javaScript/models/foot-models.js\");\r\n\r\nconst render = async ()=>{\r\n    // document.querySelector(\"#content\").innerHTML = home_content_template;\r\n    let _foot_data = await foot_models.foot_list();  //会直接把函数返回的对象拿过来赋给foot_date\r\n    let _dataObj = _foot_data.items;\r\n    \r\n    let _template = Handlebars.compile(home_content_template);  //将模板字符串变成一个函数\r\n\r\n    let _html = _template({_dataObj});\r\n    \r\n\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n    //最后还要渲染\r\n    $('#content').html(_html);\r\n    var footEntry = document.querySelector(\".foot-entry\");\r\n    console.log($('.foot-entry'));\r\n    var str = \"\";\r\n    for(var i=0;i<10;i++){\r\n        str += `<div class=\"foot-item\">\r\n                <div class=\"foot-img\">\r\n                    <img width=\"50\" height=\"50\" src=\"https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/\" alt=\"\">\r\n                </div>\r\n                <div class=\"foot-name\">美食</div>\r\n            </div>`\r\n    }\r\n    footEntry.innerHTML = str;\r\n} \r\n\r\nmodule.exports = { \r\n    render\r\n}\n\n//# sourceURL=webpack:///./src/javaScript/controllers/home_content_controller.js?");

/***/ }),

/***/ "./src/javaScript/controllers/home_controller.js":
/*!*******************************************************!*\
  !*** ./src/javaScript/controllers/home_controller.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n\r\nconst home_template = __webpack_require__(/*! ../views/home.html */ \"./src/javaScript/views/home.html\"); \r\n// const home_content = require('./home_content_controller'); \r\n\r\n//控制home的渲染\r\nconst render = ()=>{\r\n    document.querySelector('#main').innerHTML = home_template;\r\n    // home_content.render();  //使用spa陆由 就不需要主页面控制内容的渲染\r\n\r\n    $('#footer').on('tap','span',function(e){\r\n        let hash = $(this).attr('hash');\r\n        router.switchHash(hash);\r\n    })\r\n}\r\n\r\nmodule.exports = {\r\n    render\r\n}; \n\n//# sourceURL=webpack:///./src/javaScript/controllers/home_controller.js?");

/***/ }),

/***/ "./src/javaScript/controllers/mine_controller.js":
/*!*******************************************************!*\
  !*** ./src/javaScript/controllers/mine_controller.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mine_template = __webpack_require__(/*! ../views/mine.html */ \"./src/javaScript/views/mine.html\");\r\n\r\nconst render = () => {\r\n    $('#content').html(mine_template);\r\n}\r\n\r\nmodule.exports = {\r\n    render\r\n}\n\n//# sourceURL=webpack:///./src/javaScript/controllers/mine_controller.js?");

/***/ }),

/***/ "./src/javaScript/models/foot-models.js":
/*!**********************************************!*\
  !*** ./src/javaScript/models/foot-models.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval(" \r\n //  https://m.lagou.com/listmore.json?pageNo=2&pageSize=15\r\n //https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=39.903189&longitude=116.416322&offset=8&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=5697d47ae2aa44ecb1faebca1216fe04&terminal=h5\r\n const foot_list = () => {\r\n     //使用接口请求数据\r\n    // return $.ajax({\r\n    //     url: '/ele/restapi/shopping/v3/restaurants?latitude=39.903189&longitude=116.416322&offset=8&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=5697d47ae2aa44ecb1faebca1216fe04&terminal=h5', //能自动生成http://....\r\n    //     success: (res) => {\r\n    //        return res;\r\n    //     }\r\n    // }) \r\n    //请求mock数据\r\n    return $.ajax({\r\n        url: '/api/foot/list_time',  \r\n        success: (res) => {\r\n           return res;\r\n        }\r\n    })  \r\n } \r\n\r\n module.exports = { \r\n    foot_list\r\n }\n\n//# sourceURL=webpack:///./src/javaScript/models/foot-models.js?");

/***/ }),

/***/ "./src/javaScript/router/index.js":
/*!****************************************!*\
  !*** ./src/javaScript/router/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n\r\n// 实现路由工具\r\n\r\nconst routes = __webpack_require__(/*! ./route */ \"./src/javaScript/router/route.js\");\r\n\r\nclass Router {\r\n\r\n    constructor({initial}){\r\n        this.routes = routes,\r\n        this.initial = initial  || '#/content'\r\n    }\r\n    init(){\r\n        this.initialHash();\r\n        this.listenrHash();\r\n    }\r\n\r\n    initialHash(){\r\n        if(!location.hash){\r\n            location.hash = this.initial;\r\n        }\r\n    }\r\n\r\n    refresh(){  //根据地址栏的hash值来渲染页面 \r\n        let hash = location.hash;\r\n        if(!this.routes[hash]){\r\n            this.routes[this.initial].render();\r\n        }\r\n        this.routes[hash].render();\r\n        this.switchStyle();\r\n    }\r\n\r\n    switchHash(hash){\r\n        location.hash = hash;\r\n    }\r\n    //根据地址栏来渲染底部图标的颜色\r\n    switchStyle(){\r\n        $('#footer span').each(function(){\r\n            let hash = $(this).attr('hash')\r\n            if ( hash == location.hash){\r\n                $(this).addClass('tap');\r\n            }else{\r\n                $(this).removeClass('tap');\r\n            }\r\n\r\n        })\r\n    }\r\n\r\n    // 监听hash的变化\r\n    listenrHash () {\r\n        window.addEventListener('load', this.refresh.bind(this));  //页面加载完时 渲染一次\r\n        window.addEventListener('hashchange',this.refresh.bind(this));\r\n    }\r\n}\r\n\r\nmodule.exports = Router;\n\n//# sourceURL=webpack:///./src/javaScript/router/index.js?");

/***/ }),

/***/ "./src/javaScript/router/route.js":
/*!****************************************!*\
  !*** ./src/javaScript/router/route.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//通过控制控制器的渲染函数 来控制页面的渲染\r\n\r\n//先引进不同的页面控制器\r\nconst find_controller = __webpack_require__(/*! ../controllers/find_controller */ \"./src/javaScript/controllers/find_controller.js\");\r\nconst mine_controller = __webpack_require__(/*! ../controllers/mine_controller */ \"./src/javaScript/controllers/mine_controller.js\");\r\nconst content_controller = __webpack_require__(/*! ../controllers/home_content_controller */ \"./src/javaScript/controllers/home_content_controller.js\");\r\n\r\nmodule.exports = {\r\n    '#/find':find_controller,\r\n    '#/mine':mine_controller,\r\n    '#/content':content_controller\r\n}\r\n\n\n//# sourceURL=webpack:///./src/javaScript/router/route.js?");

/***/ }),

/***/ "./src/javaScript/views/find.html":
/*!****************************************!*\
  !*** ./src/javaScript/views/find.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>    find find .......</div> \"\n\n//# sourceURL=webpack:///./src/javaScript/views/find.html?");

/***/ }),

/***/ "./src/javaScript/views/home.html":
/*!****************************************!*\
  !*** ./src/javaScript/views/home.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<header id=\\\"header\\\">    <i class=\\\"iconfont icon-dingwei\\\"></i>    北京市人民政府</header><div class=\\\"find\\\">    <div class=\\\"find-item\\\">        <i class=\\\"iconfont icon-sousuo\\\"></i>        搜索饿了么商家，商品名称    </div></div><div id=\\\"content\\\"></div><footer id=\\\"footer\\\">    <span hash = \\'#/content\\'>        <i class=\\\"iconfont icon-changyonglogo40\\\"></i>        <em>首页</em>    </span>    <span hash = \\'#/find\\'>        <i class=\\\"iconfont icon-faxian\\\"></i>        <em>发现</em>    </span>    <span>        <i class=\\\"iconfont icon-weibiaoti-\\\"></i>        <em>订单</em>    </span>    <span hash = \\'#/mine\\'>        <i class=\\\"iconfont icon-wode\\\"></i>        <em>我的</em>    </span></footer>\"\n\n//# sourceURL=webpack:///./src/javaScript/views/home.html?");

/***/ }),

/***/ "./src/javaScript/views/home_content.html":
/*!************************************************!*\
  !*** ./src/javaScript/views/home_content.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"foot-entry\\\"> </div><div class=\\\"purchase\\\">    <div class=\\\"purchase-item\\\">        <div class=\\\"text\\\">            <h3>品质套餐</h3>            <p>搭配齐全吃得好</p>            <p>立即抢购 ></p>        </div>        <div class=\\\"img\\\">            <img src=\\\"https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/\\\" alt=\\\"\\\">        </div>    </div>    <div class=\\\"purchase-item\\\">        <div class=\\\"text\\\">            <h3>品质套餐</h3>            <p>搭配齐全吃得好</p>            <p>立即抢购 ></p>        </div>        <div class=\\\"img\\\">            <img src=\\\"https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/\\\" alt=\\\"\\\">        </div>    </div></div><div class=\\\"recommend-shop\\\">    <p class=\\\"title\\\"> <em>—</em> &nbsp;  推荐商家 &nbsp;<em>—</em></p>    <ul class=\\\"recommend-top\\\">        <li>{{name}} <i class=\\\"iconfont icon-jiantouarrow486\\\"></i> </li>        <li>{{name}}</li>        <li>品质联盟</li>        <li>筛选 <i class=\\\"iconfont icon-shaixuan\\\"></i> </li>    </ul>    <ul class=\\\"recommend-list\\\">    {{#each _dataObj}}        <li>             <div class=\\\"shop-img\\\">                <img src=\\\"https://fuss10.elemecdn.com/0/46/ee233f76bf7fa98dec4c0dd980ee4png.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/\\\" alt=\\\"\\\">            </div>            <div class=\\\"shop-detail\\\">                <p>                    <span class=\\\"left\\\">                        <em>品牌</em>                         <strong class=\\\"shop-title\\\">{{this.restaurant.name}}</strong>                    </span>                    <span class=\\\"right\\\">                        <i class=\\\"iconfont icon-tel\\\"></i>                        <i class=\\\"iconfont icon-gengduo\\\"></i>                    </span>                 </p>                <p>                    <span class=\\\"left\\\">                        <img src=\\\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=\\\" alt=\\\"\\\">                        4.8月 4315单                    </span>                    <span class=\\\"right\\\">                        {{name}}                    </span>                </p>                <p>                    <span class=\\\"left\\\">                        ￥20起送 &nbsp; 远距离配送费￥7                    </span>                    <span class=\\\"right\\\">                        3.37km &nbsp; 23分钟                    </span>                </p>                           </div>            <div class=\\\"active\\\">                 <p>                    <span class=\\\"left\\\">                        <em>{{name}}</em> &nbsp;                        <span class=\\\"icon\\\">                            <i class=\\\"iconfont icon-koubei\\\"></i>                            口碑人气好店                        </span>                    </span>                </p>                <p>                    <span class=\\\"left\\\">                        <em>新</em> &nbsp;                        <span>                            新用户下单立减17元                        </span>                                            </span>                    <span class=\\\"right\\\">                        3个活动 <i class=\\\"iconfont icon-jiantouarrow486\\\"></i>                    </span>                </p>                <p>                    <span class=\\\"left\\\">                        <em>减</em> &nbsp;                        <span>满30减28，满40减30，满88减39，满1...</span>                    </span>                </p>            </div>        </li>    {{/each}}    </ul></div> \"\n\n//# sourceURL=webpack:///./src/javaScript/views/home_content.html?");

/***/ }),

/***/ "./src/javaScript/views/mine.html":
/*!****************************************!*\
  !*** ./src/javaScript/views/mine.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>    mine mine.......</div>\"\n\n//# sourceURL=webpack:///./src/javaScript/views/mine.html?");

/***/ })

/******/ });