/**
 * Created by Administrator on 2018/4/3.
 */
/*Êó±ê¹öÂÖÊÂ¼þ*/
$("html,body").on("mousewheel", function (e) {
    var x=$(document).scrollTop();
    if(e.originalEvent.deltaY>0){
        if(x>199){
            $(".zsq-img1").animate({"marginLeft":"0"},1200)
        }
        if(x>699){
            $(".zsq-img2").animate({"marginLeft":"0"},1200)
        }
        if(x>1299){
            $(".zsq-img3").animate({"marginLeft":"0"},1200)
        }
        if(x>1899){
            $(".zsq-img4").animate({"marginLeft":"0"},1200)
        }
        if(x>2499){
            $(".zsq-img5").animate({"marginLeft":"0"},1200)
        }
        if(x>2999){
            $(".zsq-img6").animate({"marginLeft":"0"},1200)
        }
    }
});