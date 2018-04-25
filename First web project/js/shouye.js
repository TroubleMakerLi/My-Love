/**
 * Created by Administrator on 2018/3/26.
 */
/*首页*/
$(function () {
 /*鼠标滚轮事件*/
    $(function () {
        $("html,body").on("mousewheel DOMMouseScroll", function (e) {
            var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
            var x=$(document).scrollTop();
            if (delta < 0) {
                if(x>299){
                    $(".tu1").animate({"marginLeft":"0"},900);
                    $(".tu2").animate({"marginLeft":"0"},700);
                    $(".tu3").animate({"marginLeft":"0"},700);
                    $(".tu4").animate({"marginLeft":"0"},900)
                }
                if(x>799){
                    $(".youshi").animate({"paddingTop":"0"},900)
                }

                if(x>1499){
                    $(".tu5").animate({"marginLeft":"0"},900);
                    $(".tu6").animate({"marginLeft":"0"},700);
                    $(".tu7").animate({"marginLeft":"0"},700);
                    $(".tu8").animate({"marginLeft":"0"},900)
                }
            }
        });
    });
    /*banner图轮播*/
    showTimes();
    var count = 0;
    var times;
    function showTimes() {
        times = setInterval(function () {
            imagelun();
        }, 5000);
    }
    function imagelun() {
        count++;
        $(".bannershouye").animate({
            "marginLeft": (-1939 * count) + "px"
        }, 1400, function () {
            if (count > 1) {
                $(this).css("marginLeft", "-5px");
                count = 0;
            }
        });
    }
    /*banner图的字*/
    $(".sy-banner-zi").animate({"marginTop":"-680px"},800);
    /*banner的预订*/
    $(".sy-bhl").mouseover(function () {
        $(".sy-bhlx").animate({"top":"0"},200)
    }).mouseleave(function () {
        $(".sy-bhlx").animate({"top":"-50px"},150)
    });
    $(".sy-bhr").mouseover(function () {
        $(".sy-bhrx").animate({"top":"0"},200)
    }).mouseleave(function () {
        $(".sy-bhrx").animate({"top":"-50px"},150)
    });
    /*主题*/
    $(".zhuti").each(function(){
        $(this).mouseover(function () {
            $(this).css({"border":"solid 1px blue"})
        }).mouseleave(function () {
            $(this).css({"border":"solid 1px goldenrod"})
        })
    });
    /*定制*/
    $(".dingzhi1").mouseenter(function(){
        $(".dzone").stop().animate({width:"120%",height:"120%",marginTop:"-10%",marginLeft:"-10%"})
    }).mouseleave(function(){
        $(".dzone").stop().animate({width:"100%",height:"100%",marginTop:0,marginLeft:0})
    });
    $(".dingzhi2").mouseenter(function(){
        $(".dztwo").stop().animate({width:"120%",height:"120%",marginTop:"-10%",marginLeft:"-10%"})
    }).mouseleave(function(){
        $(".dztwo").stop().animate({width:"100%",height:"100%",marginTop:0,marginLeft:0})
    });
    $(".dingzhi3").mouseenter(function(){
        $(".dzthree").stop().animate({width:"120%",height:"120%",marginTop:"-10%",marginLeft:"-10%"})
    }).mouseleave(function(){
        $(".dzthree").stop().animate({width:"100%",height:"100%",marginTop:0,marginLeft:0})
    });
    /*线路*/
    $(function () {
       $(".xlbgc").each(function () {
           $(this).mouseover(function () {
               $(this).css({"backgroundColor":"#564A94","color":"white"})
           }).mouseleave(function () {
               $(this).css({"backgroundColor":"#C0C0C0","color":"black"})
           })
       })
    });
    $(".remen").each(function(){
        $(this).mouseover(function () {
            $(this).css({"border":"solid 1px blue"})
        }).mouseleave(function () {
            $(this).css({"border":"solid 1px #EEEEEE"})
        })
    });
    /*游记*/
    $(".youjili").each(function(){
        $(this).mouseover(function () {
            $(this).css({"border":"solid 1px blue"})
        }).mouseleave(function () {
            $(this).css({"border":"solid 1px silver"})
        })
    });
});