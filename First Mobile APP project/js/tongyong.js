/**
 * Created by Administrator on 2018/4/3.
 */
$(function () {
    var isshow=false;
    $(".menu").click(function(){
        if(isshow==false){
            $(".menuul").show();
            isshow=true;
        }else{
            $(".menuul").css({"display":"none"});
            isshow=false;
        }
    });
});