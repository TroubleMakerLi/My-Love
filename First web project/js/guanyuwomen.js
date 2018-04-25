/**
 * Created by Administrator on 2018/3/28.
 */

$(function () {
/*¹ö¶¯ÂÖ²¥;*/
    showgyTimes();
    var gycount = 0;
    var gytimes;
    function showgyTimes() {
        gytimes = setInterval(function () {
            gyimagelun();
        }, 8200);
    }
    function gyimagelun() {
        gycount++;
        $(".guanyulb").animate({
            "marginLeft": (-324* gycount) + "px"
        }, 8100, function () {
            if (gycount > 4) {
                $(this).css("marginLeft", "0");
                gycount = 0;
            }
        });
    }
    $(".lunbobo").mouseenter(function () {
        clearInterval(gytimes)
    }).mouseleave(function () {
        showgyTimes();
    })
});