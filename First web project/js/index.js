/**
 * Created by Administrator on 2018/2/28.
 */
/*ͨ��ҳ������*/
$(function(){
    /*ͨ�ý�����ֲ�������任*/
    $(".tyziti").animate({"marginTop":"-680px"},1200);
    /*ͨ�ý���banner��ͼ�ֲ�*/
    showtyTimes();
    var tycount = 0;
    var tytimes;
    function showtyTimes() {
        tytimes = setInterval(function () {
            tyimagelun();
        }, 5000);
    }
    function tyimagelun() {
        tycount++;
        $(".tylunbo").animate({
            "marginLeft": (-1939 * tycount) + "px"
        }, 1400, function () {
            if (tycount > 1) {
                $(this).css("marginLeft", "-5px");
                tycount = 0;
            }
        });
    }
    $("html,body").on("mousewheel DOMMouseScroll", function (e) {
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
        var x=$(document).scrollTop();
        if (delta > 0) {
            if(x<101){
                $(".fixed").removeClass("fixeddaohang")
            }
            console.log(x)
        } else if (delta < 0) {
            if(x>-1){
                $(".fixed").addClass("fixeddaohang")
            }
        }
    });
    $(".erweima").mouseover(function () {
        $(".sys").css("display","block")
    }).mouseleave(function(){
        $(".sys").css("display","none")
    });
    $(".top").click(function () {
        $('html,body').animate({scrollTop: '0px'}, 1000);
        $(".fixed").removeClass("fixeddaohang")
    });
    /*��Ա*/
    $(".huiyuan").click(function () {
        $(".huiyuanc").css("display","block")
    });
    $(".hyclose").click(function () {
        $(".huiyuanc").css("display","none")
    });
    /*�ͷ�*/
    $(".kefu").click(function(){
        $(".kefukuang").animate({"right":"0px"},500)
    }).mouseleave(function () {
        $(".kefukuang").animate({"right":"-240px"},500)
    });
    /*��¼*/
    $(".denglu").click(function () {
        $(".huiyuanc").css("display","block")
    });
    $(".zcclose").click(function () {
        $(".zhuceyemian").css("display","none")
    });
    /*ע��*/
    $(".zhuce").click(function () {
        $(".zhuceyemian").css("display","block")
    });
    /*��¼�����е��û�ע��*/
    $(".yhzc").click(function () {
        $(".huiyuanc").css("display","none");
        $(".zhuceyemian").css("display","block")
    });
    /*΢����΢��*/
    $(".weibo").mouseover(function () {
        $(".weibo1").css("display","none");
        $(".weibo2").css("display","block")
    }).mouseleave(function(){
        $(".weibo2").css("display","none");
        $(".weibo1").css("display","block")
    });
    $(".weixin").mouseover(function () {
        $(".weixin1").css("display","none");
        $(".weixin2").css("display","block")
    }).mouseleave(function(){
        $(".weixin2").css("display","none");
        $(".weixin1").css("display","block")
    });
    /*�ȼ�·��*/
    $(function () {
        $(".a").each(function(){
            $(this).mouseover(function () {
                $(this).addClass("beijing")
            }).mouseleave(function(){
                $(this).removeClass("beijing")
            })
        })
    });
    /*�ȼ�·��ͨ�ñ�ɫ����*/
    /*#564A94��*/
    $(".tybsl").each(function(){
        $(this).mouseenter(function () {
            $(this).css({"border":"solid 1px #564A94"})
        }).mouseleave(function () {
            $(this).css({"border":"solid 1px silver"})
        })
    });
    /*#FF3C00��*/
    $(".tybslorange").each(function(){
        $(this).mouseenter(function () {
            $(this).css({"border":"solid 1px #FF3C00"})
        }).mouseleave(function () {
            $(this).css({"border":"solid 1px silver"})
        })
    });
    /*�����μ�li��ɫ��*/
    $(".lxyj-libs").each(function () {
        $(this).mouseenter(function () {
            $(this).css({"backgroundColor":"#564A94","color":"white"})
        }).mouseleave(function () {
            $(this).css({"backgroundColor":"#F4F4F4","color":"black"})
        })
    })
});


