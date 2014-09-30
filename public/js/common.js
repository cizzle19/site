$(document).ready(function(){

	var devString = ["W", "e", "b", " ",  "D", "e", "v", "e", "l", "o", "p", "m", "e", "n", "t"];
	var devLength = devString.length;
	var stringing =  "";

	/*$(".home-input").slideDown("easeInBounce");
	$(".home-go").slideDown("easeInBounce");*/
	
	setTimeout(function(){
			
		$(".home-input").typed({
			strings: ["Web Development"],
			typeSpeed: 8,
			showCursor: true
		});

	},2000);

	setTimeout(function(){
		$(".home-go").addClass("home-go2");
	},3000);

	setTimeout(function(){
		//$(".home-input").slideUp();
		//$(".home-go").slideUp();
		$("html, body").animate({
			scrollTop: $("#wrap2").offset().top
		}, "slow");
		$(".home-2").addClass("slideUp");
		$(".header-one").addClass("slideUp");
		$(".text-one").addClass("slideUp");
		$(".header-two").addClass("slideUp");
		$(".text-two").addClass("slideUp");
		$(".list-one").addClass("slideUp");
		$(".list-one li").addClass("slideUp");
		$(".contact-button").addClass("slideUp");

	}, 3800);
});
