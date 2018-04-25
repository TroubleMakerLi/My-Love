/**
 * Created by Administrator on 2018/4/3.
 */
/*Êó±ê¹öÂÖÊÂ¼þ*/
$("html,body").on("mousewheel", function (e) {
    var x=$(document).scrollTop();
    if(e.originalEvent.deltaY>0){
        if(x>699){
            $(".connect-a").animate({"opacity":"1"},1200)
        }
        if(x>1099){
            $(".ly-img1").animate({"marginTop":"0"},1200)
        }
        if(x>1499){
            $(".ly-img2").animate({"marginLeft":"0"},1200)
        }
        if(x>1799){
            $(".ly-img3").animate({"marginLeft":"0"},1200)
        }
    }
});