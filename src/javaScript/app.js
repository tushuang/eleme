
//Tom 提交的
//dhl提交
//主要入口文件

const Router = require('./router/index');
// require('./modules/flexible');
const home_controller = require('./controllers/home_controller');
//调用render的渲染函数 

home_controller.render(); 


//开启陆由工具
const router = new Router('#/content');
window.router = router;    //将router设为全局变量 方便在其他文件里使用
router.init();