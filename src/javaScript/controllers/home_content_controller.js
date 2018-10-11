const home_content_template = require('../views/home_content.html');
const foot_models = require('../models/foot-models');

const render = async ()=>{
    // document.querySelector("#content").innerHTML = home_content_template;
    let _foot_data = await foot_models.foot_list();  //会直接把函数返回的对象拿过来赋给foot_date
    let _dataObj = _foot_data.items;
    
    let _template = Handlebars.compile(home_content_template);  //将模板字符串变成一个函数

    let _html = _template({_dataObj});
    




 



    //最后还要渲染
    $('#content').html(_html);
    var footEntry = document.querySelector(".foot-entry");
    console.log($('.foot-entry'));
    var str = "";
    for(var i=0;i<10;i++){
        str += `<div class="foot-item">
                <div class="foot-img">
                    <img width="50" height="50" src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                </div>
                <div class="foot-name">美食</div>
            </div>`
    }
    footEntry.innerHTML = str;
} 

module.exports = { 
    render
}