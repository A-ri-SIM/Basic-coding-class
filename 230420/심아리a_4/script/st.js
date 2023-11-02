        $(document).ready(function(){
        let num=0;
        setInterval(function(){
            num++;
            if(num>2){
                num=0;
            }
            $(".img_box").fadeOut(700);
            $(".img_box").eq(num).fadeIn(700)
        },3000);
        
        $(".info_bottom").click(function(){
            $(".pop_up_box").fadeIn(500);
        });
        
        $(".close_but").click(function(){
            $(".pop_up_box").fadeOut(500);
        })
        $(".bottom_menu_box").hover(function(){
            let a=$(this).index()
            $(".top_menu").eq(a).css({
                background: "lightblue",
                color: "white"
            })
        },function(){
            $(".top_menu").css({
                background: "white",
                color: "black"
            })
        })

        });
        