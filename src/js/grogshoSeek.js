$(function(){
	//全城
	$(".Regional").on("touchend",function(){
        if ($('.grade-eject').hasClass('grade-w-roll')) {
            $('.grade-eject').removeClass('grade-w-roll');
        } else {
            $('.grade-eject').addClass('grade-w-roll');
        }
    });
    //价格
    $(".Price").on("touchend",function(e){
        if ($('.Price-eject').hasClass('grade-w-roll')) {
            $('.Price-eject').removeClass('grade-w-roll');
        } else {
            $('.Price-eject').addClass('grade-w-roll');
        }
    });
   
    //智能排序
     $(".Capacity").on("touchend",function(){
        if ($('.Capacity-eject').hasClass('grade-w-roll')) {
            $('.Capacity-eject').removeClass('grade-w-roll');
        } else {
            $('.Capacity-eject').addClass('grade-w-roll');
        }
    });
    //筛选
     $(".Screen").on("touchend",function(){
        if ($('.Screen-eject').hasClass('grade-w-roll')) {
            $('.Screen-eject').removeClass('grade-w-roll');
        } else {
            $('.Screen-eject').addClass('grade-w-roll');
        }
    });
    
    //判断页面是否有弹出
    $(".Regional").on("touchend",function(){
        if ($('.Price-eject').hasClass('grade-w-roll')||$('.Capacity-eject').hasClass('grade-w-roll')||$('.Screen-eject').hasClass('grade-w-roll')){
            $('.Capacity-eject').removeClass('grade-w-roll');
            $('.Price-eject').removeClass('grade-w-roll');
            $('.Screen-eject').removeClass('grade-w-roll');
        };
    });
   
    $(".Price").on("touchend",function(){
        if ($('.Capacity-eject').hasClass('grade-w-roll')||$('.Screen-eject').hasClass('grade-w-roll')||$(".grade-eject").hasClass('grade-w-roll')){
            $('.Capacity-eject').removeClass('grade-w-roll');
            $('.Screen-eject').removeClass('grade-w-roll');
            $(".grade-eject").removeClass('grade-w-roll');
        };
    });
     $(".Capacity").on("touchend",function(){
        if ($('.Price-eject').hasClass('grade-w-roll')||$('.Screen-eject').hasClass('grade-w-roll')||$(".grade-eject").hasClass('grade-w-roll')){
            $('.Price-eject').removeClass('grade-w-roll');
            $('.Screen-eject').removeClass('grade-w-roll');
            $(".grade-eject").removeClass('grade-w-roll');
        };
    });
     $(".Screen").on("touchend",function(){
        if ($('.Price-eject').hasClass('grade-w-roll')||$('.Capacity-eject').hasClass('grade-w-roll')||$(".grade-eject").hasClass('grade-w-roll')){
            $('.Capacity-eject').removeClass('grade-w-roll');
            $('.Price-eject').removeClass('grade-w-roll');
            $(".grade-eject").removeClass('grade-w-roll');
        };
    });
    
    //滑出附近
    $(".nearby").on("touchend",function(){
        $(".nearbys").css("left","26.667%").siblings().not(".grade-w").css("left","100%");
    });
    //滑出行政区/商圈
    $(".ad-tive").on("touchend",function(){
    	$(".ad-tives").css("left","26.667%").siblings().not(".grade-w").css("left","100%");
        
    })
    //滑出具体行政区/商圈
     $(".all-region").on("touchend",function(){
        $(".grade-ws").nextAll().css("left","100%");
        $(".all-regions").css("left","47%");
    });
    $(".yy-region").on("touchend",function(){
        $(".grade-ws").nextAll().css("left","100%");
        $(".yy-regions").css("left","47%");
    });
   	regionTend($(".all-region"),$(".all-regions"));
   	regionTend($(".yy-region"),$(".yy-regions"));
   	regionTend($(".nm-region"),$(".nm-regions"));
   	regionTend($(".by-region"),$(".by-regions"));
   	regionTend($(".wd-region"),$(".wd-regions"));
   	regionTend($(".hx-region"),$(".hx-regions"));
   	regionTend($(".jj-region"),$(".jj-regions"));
   	regionTend($(".qz-region"),$(".qz-regions"));
   	regionTend($(".ky-region"),$(".ky-regions"));
   	regionTend($(".xw-region"),$(".xw-regions"));
   	regionTend($(".gs-region"),$(".gs-regions"));
     //滑出机场车站
    $(".airport").on("touchend",function(){
    	$(".airports").css("left","26.667%").siblings().not(".grade-w").css("left","100%");
        
    })
     //滑出高校
    $(".high-school").on("touchend",function(){
    	$(".high-schools").css("left","26.667%").siblings().not(".grade-w").css("left","100%");
        
    })
     //滑出景点
    $(".scenic").on("touchend",function(){
    	$(".scenics").css("left","26.667%").siblings().not(".grade-w").css("left","100%");
        
    })
      //滑出医院
    $(".hospital").on("touchend",function(){
    	$(".hospitals").css("left","26.667%").siblings().not(".grade-w").css("left","100%");
        
    })
      //滑出全城
    $(".all-city").on("touchend",function(){
    	$(".all-citys").css("left","26.667%").siblings().not(".grade-w").css("left","100%");
        
    })
    //Sort开始
     $(".Sort").on("touchend",function(){
        if ($('.Sort-eject').hasClass('grade-w-roll')) {
            $('.Sort-eject').removeClass('grade-w-roll');
        } else {
            $('.Sort-eject').addClass('grade-w-roll');
        }
    });
    
    function regionTend(obj,objs){
    	obj.on("touchend",function(){
    		 $(".grade-ws").nextAll().css("left","100%");
        	 objs.css("left","47%");
    	})
    }
});




//js点击事件监听开始
//全城
function gradew(wbj){
    var arr = document.getElementsByClassName("gradew")[0].getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "";
    };
    wbj.style.background = "#f6f6f6"
}
//附近
function nearbys(tbj){
   var arr = document.getElementsByClassName("nearbys")[0].getElementsByTagName("li");
   console.log(arr)
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "#f6f6f6";
    };
    tbj.style.background = "#eaeaea"
}
//行政区/商区
function adTives(tbj){
   var arr = document.getElementsByClassName("ad-tives")[0].getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "#f6f6f6";
    };
    tbj.style.background = "#eaeaea"
}
//具体行政商区
function adTivesAll(sbj){
    var arr = sbj.siblings();
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "#eaeaea";
    };
    sbj.css("background","#D6D6D6")
}

//机场车站
function airports(tbj){
   var arr = document.getElementsByClassName("airports")[0].getElementsByTagName("li");
   console.log(arr)
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "#f6f6f6";
    };
    tbj.style.background = "#eaeaea"
}
//高校
function highSchools(tbj){
   var arr = document.getElementsByClassName("high-schools")[0].getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "#f6f6f6";
    };
    tbj.style.background = "#eaeaea"
}
//景点
function scenics(tbj){
   var arr = document.getElementsByClassName("scenics")[0].getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "#f6f6f6";
    };
    tbj.style.background = "#eaeaea"
}
//医院
function hospitals(tbj){
   var arr = document.getElementsByClassName("hospitals")[0].getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "#f6f6f6";
    };
    tbj.style.background = "#eaeaea"
}
//全城
function allCityS(tbj){
   var arr = document.getElementsByClassName("all-citys")[0].getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "#f6f6f6";
    };
    tbj.style.background = "#eaeaea"
}
//智能排序
function Sorts(sbj){
    var arr = document.getElementById("Capacity-Capacity").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "#FFFFFF"
    };
    sbj.style.background = "#eee"
}


