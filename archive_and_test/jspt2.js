$(document).ready(function () {
	$(".cardtext1").hide();
	$(".cardtext2").hide();
	$(".cardtext3").hide();
	$(".cardtext4").hide();
	var boxHeight = $(".card").height();
	$(".jscard1").mouseenter(function () {
		$(this).animate({
			height: "300"
		});
		$(".cardtext1").show();
	}).mouseleave(function () {
		$(this).animate({
			height: boxHeight
		});
	});
	$(".jscard2").mouseenter(function () {
		$(this).animate({
			height: "300"
		});
		$(".cardtext2").show();
	}).mouseleave(function () {
		$(this).animate({
			height: boxHeight
		});
	});
	$(".jscard3").mouseenter(function () {
		$(this).animate({
			height: "300"
		});
		$(".cardtext3").show();
	}).mouseleave(function () {
		$(this).animate({
			height: boxHeight
		});
	});
	$(".jscard4").mouseenter(function () {
		$(this).animate({
			height: "300"
		});
		$(".cardtext4").show();
	}).mouseleave(function () {
		$(this).animate({
			height: boxHeight
		});
	});
});