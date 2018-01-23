function jiu(n){
	var i = 0;
	var z = 24;
	var quan = z+n;
	var seep = 100;
	zuo();
	function zuo(){
		jiu.time = setInterval(function(){
			i++;
			quan--;
			if(i==8){
				seep*=1.2;
				clearInterval(jiu.time);
				i = 0;
				zuo();
			}
			if(quan==4){
				seep = 500;
				clearInterval(jiu.time);
				zuo();
			}
			$(".jg_01 img").eq(i).css("border","solid 4px #0000FF");
			$(".jg_01 img").eq(i).siblings("img").css("border","solid 4px white");
			if(quan==0){
				clearInterval(jiu.time);
				$(".cmeng").css("display","none");
				if(i==7){
				   $(".p_04 img")[0].src=$(".jg_01 img")[7].src;
				   $(".myx").css("display","block");
				   $(".buz").css("display","block");
				   $(".tank").css("display","none");
				}else{
				   $(".p_04 img")[0].src=$(".jg_01 img")[i].src;
				   $(".myx").css("display","block");
				   $(".tank").css("display","block");
				   $(".buz").css("display","none");
				}
				
			}
		},seep);
	}
}
