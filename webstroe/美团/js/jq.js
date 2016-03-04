/**
 * Created by Administrator on 2015/8/12.
 */
$(function(){
    $('.w_btn a').mouseover(function(){
        $('.w_btn a').removeClass('active');
        $(this).addClass('active');
        $('.w_goods_ct').hide();
        $('.w_goods_ct').eq($(this).index()).show();
    });
    var n= 0;
    function changeN(){
        if(n< $('.w_goods_ct').length-1){
            n=n+1;
        }else{
            n=0;
        }

        $('.w_goods_ct').hide();
        $('.w_goods_ct').eq(n).show();
        $('.w_btn a').removeClass('active');
        $('.w_btn a').eq(n).addClass('active');
    }
    var timer = setInterval(changeN,1000);

    $('.w_pic_btn a').mouseover(function(){
        $('.w_pic_btn a').removeClass('active');
        $(this).addClass('active');
    });
});
