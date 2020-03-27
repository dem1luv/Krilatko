"use strict";

// ajax
$(document).ready(function () {
	$(".home__form,.delivery__form,.popup__form").submit(function () {
		$.ajax({
			type: "POST",
			url: 'feedback.php',
			data: $(this).serialize(),
			success: function (data) {
				// when success
			},
			error: function (jqXHR, text, error) {
				// when error
			}
		});
	$.fancybox.close($("#popup-back-call"));
	$.fancybox.open($("#popup-thanks"));
	return false;
	});
});

// ibg
$(document).ready(function(){
	let ibg = document.getElementsByClassName("ibg");
	for (let i = 0; i < ibg.length; i++) {
	let item = $(ibg[i]);
	let child = item.children("img");
		let link = child.attr("src");
		let background = item.css("background-image");
		item.css("background", `${background} 100% 100% no-repeat, url(${link}) 50% 50% no-repeat`);
		item.css("background-size", "cover");
		child.remove();
	}
});

// fancybox
$(document).ready(function(){
	$(".certificate__zoom").fancybox();
});

// inputmask
$(document).ready(function(){
	$(".home__tel,.delivery__tel,.popup__tel").inputmask({"mask": "+7 (999) 999-99-99"})
});