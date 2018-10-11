 
 //  https://m.lagou.com/listmore.json?pageNo=2&pageSize=15
 //https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=39.903189&longitude=116.416322&offset=8&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=5697d47ae2aa44ecb1faebca1216fe04&terminal=h5
 const foot_list = () => {
     //使用接口请求数据
    // return $.ajax({
    //     url: '/ele/restapi/shopping/v3/restaurants?latitude=39.903189&longitude=116.416322&offset=8&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=5697d47ae2aa44ecb1faebca1216fe04&terminal=h5', //能自动生成http://....
    //     success: (res) => {
    //        return res;
    //     }
    // }) 
    //请求mock数据
    return $.ajax({
        url: '/api/foot/list_time',  
        success: (res) => {
           return res;
        }
    })  
 } 

 module.exports = { 
    foot_list
 }