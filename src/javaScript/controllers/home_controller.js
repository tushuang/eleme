

const home_template = require('../views/home.html'); 
// const home_content = require('./home_content_controller'); 

//控制home的渲染
const render = ()=>{
    document.querySelector('#main').innerHTML = home_template;
    // home_content.render();  //使用spa陆由 就不需要主页面控制内容的渲染

    $('#footer').on('tap','span',function(e){
        let hash = $(this).attr('hash');
        router.switchHash(hash);
    })
}

module.exports = {
    render
}; 