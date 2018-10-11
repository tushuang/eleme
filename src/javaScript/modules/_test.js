// onload = function(){
    console.log(4);
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
    // $('.foot-entry').html(str);
// }