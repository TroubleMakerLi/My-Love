/**
 * Created by Administrator on 2018/4/1.
 */
$(function () {
    $(".xuanfuzi").animate({"opacity":"1"},1200);
    /*bannerÍ¼Æ¬ÂÖ²¥*/
    showTimes();
    var count = 0;
    var times;
    var x=window.screen.width;
    function showTimes() {
        times = setInterval(function () {
            imagelun();
        }, 3000);
    }
    function imagelun() {
        count++;
        $(".banner").animate({
            "marginLeft": (-x* count)
        }, 2000, function () {
            if (count > 1) {
                $(this).css("marginLeft", "0");
                count = 0;
            }
        });
    }
    /*Êó±ê¹öÂÖÊÂ¼þ*/
    $("html,body").on("mousewheel", function (e) {
        var x=$(document).scrollTop();
        if(e.originalEvent.deltaY>0){
            if(x>199){
                $(".gywm-t").animate({"marginLeft":"0"},1000);
                $(".gywm-eng").animate({"marginLeft":"0"},1400)
            }
            if(x>599){
                $(".gywm-jieshao").animate({"opacity":"1"},1500);
            }
            if(x>2299){
                $(".connect-a").animate({"opacity":"1"},1500);
            }
        }
    });
});