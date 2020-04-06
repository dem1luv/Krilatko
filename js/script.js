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

// lazy load the google map
let certificate_top = $(".certificate").offset().top;
$(window).bind("scroll", function(){
	let window_top = $(this).scrollTop();
	if (window_top > certificate_top) {
		$('.address__google-map').attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d796.6281880212321!2d37.62545406840918!3d55.615852489087665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab25bfbda3a63%3A0x8cc74fb6605a0a52!2z0JTQvtGA0L7QttC90LDRjyDRg9C7LiwgOCDQutC-0YDQv9GD0YEgMSwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDExNzU0NQ!5e0!3m2!1sru!2sua!4v1585131809789!5m2!1sru!2sua");
		$(window).unbind("scroll");
	}
});