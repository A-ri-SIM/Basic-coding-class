$(document).ready(function(){
    $(".menu_wrap").hover(function(){
        $(".top_menu",this).addClass("on")
        $(".bottom_menu_wrap",this).animate({
            height:90
        },500)
    },function(){
        $(".top_menu",this).removeClass("on")
        $(".bottom_menu_wrap",this).animate({
            height:0
        },500)
    });
    $(".bottom_menu").hover(function(){
        $(this).addClass("on")
    },function(){
        $(this).removeClass("on")
    });
    let bg=["red","plum","purple"]
    $(".img_box").css({
        background: function(index){
            return bg[index]
        }
    });
    let img_index=0;
    setInterval(function(){
        // $(".img_01").fadeOut(500,function(){
        //     $(".img_02").fadeIn(500,function(){
        //         $(this).fadeOut(500,function(){
        //             $(".img_03").fadeIn(500,function(){
        //                 $(this).fadeOut(500,function(){
        //                     $(".img_01").fadeIn(500)
        //                 });
        //             });
        //         });
        //     });
        // });
        img_index++;
        if(img_index>2){
            img_index=0;
        }
        $(".img_box").fadeOut(500);
        $(".img_box").eq(img_index).fadeIn(500);
        
    },3000);
    $(".info_02").click(function(){
        $(".info_01").removeClass("on");
        $(this).addClass("on");
        $(".info_01_in_box").fadeOut(500);
        $(".info_02_in_box").fadeIn(500);
    });
    $(".info_01").click(function(){
        $(".info_02").removeClass("on");
        $(this).addClass("on");
        $(".info_02_in_box").fadeOut(500);
        $(".info_01_in_box").fadeIn(500);
    });
    $(".pop_up_click").click(function(){
        $(".pop_up_box").fadeIn(500)
    })
    $("button").click(function(){
        $(".pop_up_box").fadeOut(500)
    })
    



});//end