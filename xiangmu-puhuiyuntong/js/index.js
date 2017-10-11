//头部广告栏
$(function() {
	$('.header_bg_logo_box2 a,.hover_bg').hover(function() {
		$('.header_bg_logo_box2 a,.hover_bg').css('background', 'url(img/icon_04.png) no-repeat center right');
		$('.hover_bg').css('display', 'block');
	}, function() {
		$('.header_bg_logo_box2 a,.hover_bg').css('background', 'url(img/icon_03.png) no-repeat center right');
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
});

//头部轮播图
$(function() {
	var Box = $('.banner_auto_box');
	var Auto = Box.find('.move_auto');
	var Width = Box.find('.move_auto a img').eq(0).width();
	var btn = Box.find('.hd ul li');
	var timer = null;
	var num = 0;

	btn.hover(function() {
		$(this).addClass('select').siblings('li').removeClass('select');
		Auto.stop().animate({
			left: -Width * $(this).index()
		});
	});

	timer = setInterval(function() {
		num++;
		same();
	}, 5000);

	Box.hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(function() {
			num++;
			same();
		}, 5000);
	});

	function same() {
		if(num == btn.length) {
			num = 0;
		}
		Box.find(".hd ul").children('li').removeClass('select');
		Box.find(".hd ul").children('li').eq(num).addClass('select');
		Auto.stop().animate({
			left: -Width * num
		}, 1000, 'linear');
	};
});

//顶部导航栏
$(function() {
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		if(scrollTop >= 100) {
			$('#logo_box').css('display', 'block');
		} else {
			$('#logo_box').css('display', 'none');
		}
	});
});

//创始团队
$(function() {
	$('.main_new_menu_box ul li').mouseenter(function() {
		$(this).addClass('move').siblings('li').removeClass('move');
	});
	$('.main_new_menu_box ul li').mouseout(function() {
		$(this).removeClass('move');
	});

	$('.main_new_menu_box ul li').click(function() {
		$(this).addClass('selected').siblings('li').removeClass('selected');
		$('.menu_list_box').css('display', 'none');
		$('.menu_list_box').eq($(this).index()).css('display', 'block');
	});

	$('.tjzq_left_img').hover(function() {
		$('.main_new_ad img').css('transform', 'scale(1.2,1.2)');
	}, function() {
		$('.main_new_ad img').css('transform', 'scale(1,1)');
	});
});

//底部广告轮播
$(function() {
	var num = 0;
	var page = $('.bottom_banner');
	var ipage = $('.bottom_banner').find('li');
	var timer = setInterval(function() {
		num++;
		same();
	}, 5000);

	function same() {
		if(num == ipage.length - 5) {
			num = 0;
		}
		page.stop().animate({
			left: -236 * num
		}, 300, 'linear');
	};

	page.hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(function() {
			num++;
			same();
		}, 5000);
	});

	$('.left').click(function() {
		num++;
		same();
	});
	$('.right').click(function() {
		if(num >= 1) {
			num--;
			same();
		}
	});
});

//底部
$(function() {
	$('.wechat_footer_img').hover(function() {
		$('.wechat_b').css('display', 'block');
	}, function() {
		$('.wechat_b').css('display', 'none');
	});

	var b = true;
	$('.see_more').click(function() {
		if(b) {
			$('.link_more').css('display', 'block');
			$('.footer_header').animate({
				'height': '273'
			}, 300, 'linear');
			b = false;
		} else {
			$('.link_more').css('display', 'none');
			$('.footer_header').animate({
				'height': '241'
			}, 300, 'linear');
			b = true;
		}
	});
});

//边栏框
$(function() {
	$('.side_box ul li').hover(function() {
		$(this).stop().animate({
			"background-positionY": '-41px'
		}, 200, 'linear');
	}, function() {
		$(this).stop().animate({
			"background-positionY": '0'
		}, 200, 'linear');
	});

	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		if(scrollTop >= 200) {
			$('.callback').show();
		} else {
			$('.callback').hide();
		}
	});

	$('.callback').click(function() {
		var scrollTop = $('window').scrollTop();
		$('body').animate({
			scrollTop: 0
		}, 300);
	});
});

//底部广告分栏
$(function() {
	$('.b_close').click(function() {
		$('.index_left').css('display', 'none');
	});

	$('.show_more').click(function() {
		$('.cls_bg').css('display', 'block');
	});

	$('.cls_close').click(function() {
		$('.cls_bg').css('display', 'none');
	});
});

$('.callback').click(function() {
	var scrollTop = $('window').scrollTop();
	$('body,html').animate({
		scrollTop: 0
	}, 300, 'linear');
});