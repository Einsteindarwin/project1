$(function() {
	$('#btn1').click(function() {
		if($('#list2')) {
			$('#list2').html('');
			$('#list2').attr('id', 'list1');
		}
		if($('#list3')) {
			$('#list3').html('');
			$('#list3').attr('id', 'list1');
		}
		$.ajax({
			type: "POST",
			url: "new_file2.json",
			async: true,
			success: function(str) {
				var html = '';
				$.each(str, function(i, n) {
					console.log(n["score"]);
					html += '<li>' + '<div class="w">' + '<img src="' + n['imgSrc'] + '">' + '</div>' + '<h6>' + n['code'] + '</h6>' +
						'<p>' + '<s>￥' + n['money'] + '</s>' + '<strong>' + n["socre"] + '</strong>' + '积分' + '</p>' +
						'<button>' + '兑换' + '</button>' + '</li>';
				});
				$('#list1').append(html);
			}
		});
	});
	$('#btn2').click(function() {
		if($('#list1')) {
			$('#list1').html('');
			$('#list1').attr('id', 'list2');
		}
		if($('#list3')) {
			$('#list3').html('');
			$('#list3').attr('id', 'list2');
		}
		$.ajax({
			type: "POST",
			url: "new_file.json",
			async: true,
			success: function(str) {
				var html = '';
				$.each(str, function(i, n) {
					console.log(n["score"]);
					html += '<li>' + '<div class="w">' + '<img src="' + n['imgSrc'] + '">' + '</div>' + '<h6>' + n['code'] + '</h6>' +
						'<p>' + '<s>￥' + n['money'] + '</s>' + '<strong>' + n["socre"] + '</strong>' + '积分' + '</p>' +
						'<button>' + '兑换' + '</button>' + '</li>';
				});
				$('#list2').append(html);
			}
		});
	});
	$('#btn3').click(function() {
		if($('#list2')) {
			$('#list2').html('');
			$('#list2').attr('id', 'list3');
		}
		if($('#list1')) {
			$('#list1').html('');
			$('#list1').attr('id', 'list3');
		}
		$.ajax({
			type: "POST",
			url: "new_file1.json",
			async: true,
			success: function(str) {
				var html = '';
				$.each(str, function(i, n) {
					console.log(n["score"]);
					html += '<li>' + '<div class="w">' + '<img src="' + n['imgSrc'] + '">' + '</div>' + '<h6>' + n['code'] + '</h6>' +
						'<p>' + '<s>￥' + n['money'] + '</s>' + '<strong>' + n["socre"] + '</strong>' + '积分' + '</p>' +
						'<button>' + '兑换' + '</button>' + '</li>';
				});
				$('#list3').append(html);
			}
		});
	});
})