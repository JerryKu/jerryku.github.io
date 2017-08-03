$(document).ready(function(){
	$('.arrow').on('click', function(){
		$('#page3').slideToggle(1000);
	});

	$("#page3 .tech span").addClass("bordered");

	$("#portfoliolink").on("click",function(){
		$("#page3").slideToggle(1000);
	});

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
