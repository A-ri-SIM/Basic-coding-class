$(document).ready(function(){
// 상위메뉴영역
$(".mouse_menu").hover(function(){
    //서브메뉴보임
    //부모인 헤더의 높이값 변경
    $(".sub_menu_wrap").stop().animate({
        height:600
    },200);
    $("header").stop().animate({
        height:750
    },function(){
        $(this).css({
        borderBottom: "10px solid #002752"
        })
    })
},function(){
    //서브메뉴 안보임
    //부모인 헤더 높이값 돌아오기
    $(".sub_menu_wrap").stop().animate({
        height:0
    },200);
    $("header").stop().animate({
        height:150
    },function(){
        $(this).css({
        borderBottom: 0
        })
    });
});

// main_banner영역
let bg_img=["url(./img/main_banner_01.JPG)","url(./img/main_banner_02.JPG)",
"url(./img/main_banner_03.JPG)"]
$(".img_box").css({
    background:function(index){
        return bg_img[index]
    }
})
let text_num=1;
$(".right_but").click(function(){
    text_num++;
    if(text_num>3){
        text_num=1;
    }
    $(".move_box").animate({
        left:-1400
    },500,function(){
        $(".img_box").first().appendTo(".move_box");
        $(".move_box").css({
            left:0
        });
        $(".banner_text_box span").first().text(text_num);
    });
})
$(".left_but").click(function(){
    text_num--;
    if(text_num>=0){
        text_num=3;
    }
    $(".img_box").last().prependTo(".move_box");
    $(".move_box").css({
        left:-1400
    });
    $(".move_box").animate({
        left:0
    },500)
    $(".banner_text_box span").first().text(text_num);
});

let auto=setInterval(function(){
    $(".right_but").trigger("click")
},6000)

$(".stop_but").click(function(){
    clearInterval(auto)
});

$(".tab_but").click(function(){
    let click_i=$(this).index();
    $(".tab_con").css({
        display:"none"
    })
    $(".tab_con").eq(click_i).css({
        display:"block"
    })
});
$(".left_move_box").mouseenter(function(){
    $(".side_move").stop().animate({
        left:-1000
    })
    $(".side_move",this).stop().animate({
        left:120
    })
});
$(".close_box").click(function(){
    $(".side_move").stop().animate({
        left:-1000
    });
});
$(".left_move_box").mouseleave(function(){
    setTimeout(function(){
        $(".side_move").stop().animate({
            left:-1000
        });
    },3000)
});
$(".top_go").click(function(){
    $("html,body").animate({
        scrollTop:0
    })
})
















});//end