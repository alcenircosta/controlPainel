$(function(){
	var windowWidth = $(window)[0].innerWidth;
	if(windowWidth <= 768){
		$('div.clk').click(function(){
			var el = $('.sidebar');
			if(el.is(':visible')){
				console.log('oi');
				el.css('display','none');
				$('.main-content').css('left','0');
			}else{
				console.log('tchau');
				el.css('display','block');
				$('.main-content').css('left','300px');
			}
		});
	}
	$(window).resize(function(){
		windowWidth = $(window)[0].innerWidth;
	})
});