$(document).ready(function(){
    let bg=["red","blue","yellow","green","plum"]
    $(".img_box").css({
        background : function(index){
            return bg[index];
        }
    })
    // 기본화살표갤러리
    // let a=0;
    // $(".right_but").click(function(){ 
    //     a++;
    //     if(a>4){
    //         a=4;
    //     }
    //     $(".move_box").animate({
    //         left:-a*700
    //     },500)
        
    // });
    // $(".left_but").click(function(){ 
    //     a--;
    //     if(a<=0){
    //         a=0;
    //     }
    //     $(".move_box").animate({
    //         left:-a*700
    //     },500)
        
    // });

    $(".right_but").click(function(){
        $(".move_box").animate({
            left:-700
        },1000,function(){
            $(".img_box").first().appendTo(".move_box");
            $(".move_box").css({
                left:0
            })
        });
    });
    // setInterval(function(){
    //     $(".right_but").trigger("click")
    // },3000);
    $(".left_but").click(function(){
        $(".img_box").last().prependTo(".move_box");
        $(".move_box").css({
            left:-700
        }).animate({
            left:0
        },1000)
    });

    let end_time=setInterval(function(){
        $(".right_but").trigger("click")
    },3000);


    $(".but").hover(function(){
        clearInterval(end_time);
    },function(){
        end_time=setInterval(function(){
            $(".right_but").trigger("click")
        },3000);
    });

    // 전역변수
    // =>문서전체에서 활용가능한 변수
    // 지역변수
    // =>{},함수내부에서만 사용가능한 변수
    // =>let로 함수 내부에 정의를 하면 지역변수
    // =>(let)선언자없이 함수내부에 변수사용시 -> 전역변수





});//끝