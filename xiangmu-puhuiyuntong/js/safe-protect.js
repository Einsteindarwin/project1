$(function() {
	$('.header_bg_logo_box2 a,.hover_bg').hover(function() {
		$('.hover_bg').css('display', 'block');
	}, function() {
		$('.hover_bg').css('display', 'none');
	});

	$('.nav_first,.nav_second').hover(function() {
		$('.nav_second').css('display', 'block');
	}, function() {
		$('.nav_second').css('display', 'none');
	});

	$('.nav_second a').hover(function() {
		$(this).addClass('active').siblings('a').removeClass('active');
	});

	$('.footer a').hover(function() {
		$(this).css('text-decoration', 'underline');
	}, function() {
		$(this).css('text-decoration', 'none');
	});

	$(function() { //顶部导航栏
		$(window).scroll(function() {
			var scrollTop = $(window).scrollTop();
			if(scrollTop >= 100) {
				$('#logo_box').css('display', 'block');
			} else {
				$('#logo_box').css('display', 'none');
			}
		});
	});

	$('.callback').click(function() {
		var scrollTop = $('window').scrollTop();
		$('body,html').animate({
			scrollTop: 0
		}, 300, 'linear');
	});
})