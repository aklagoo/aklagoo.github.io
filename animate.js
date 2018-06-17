$(document).ready(function() {
	$(".main-page-content").fadeIn();
	$("#projectredirect").click(function(){
		$(".main-page-background").fadeOut(500);
		$(".project-page-background").fadeIn(1000);
		$(".project-page-content").fadeIn(1500);
		console.log("Here");
	});
});
