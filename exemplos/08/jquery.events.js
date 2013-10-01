$(function(){
	$(window).bind("orientationchange", function(e){
		if( e.orientation == "portrait" ){
			$("#landscape").fadeOut(500, function(){
				$("#portrait").fadeIn(300);
			});
		} else {
			$("#portrait").fadeOut(500, function(){
				$("#landscape").fadeIn(300);
			});
		}
	})
})