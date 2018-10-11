//通过控制控制器的渲染函数 来控制页面的渲染

//先引进不同的页面控制器
const find_controller = require('../controllers/find_controller');
const mine_controller = require('../controllers/mine_controller');
const content_controller = require('../controllers/home_content_controller');

module.exports = {
    '#/find':find_controller,
    '#/mine':mine_controller,
    '#/content':content_controller
}
