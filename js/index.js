$(function() {
	var changjing = $('.changjing');

	changjing.on('click', function () {
		$('.changjing').addClass('animation').delay(1000).queue(function () {
			$(this).addClass('yichu');


		})

	})


/*
	for (var i = 0; i < 80; i++) {

		var w = Math.floor(Math.random() * 20 + 10);
		var div = $('<div>').addClass('circle').addClass(function () {
			if (Math.random() > 0.5) {
				return 'zuo';
			} else {
				return 'you';
			}
		}).width(w).height(w).css({
			top: Math.floor(Math.random() * 600),
			left: Math.floor(Math.random() * 800),
			background: "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")"
		});
		$('.dom').append(div);

	}

	$('.dom .circle').on('click', function () {
		$(this).toggleClass('slected');
		if ($(this).hasClass('slected')) {

			$(this).data('color', $(this).css('background'));
			$(this).css('background', 'red');

		} else {
			$(this).css('background', $(this).data('color'));
		}
	})
	$(document).on('keydown', function (e) {
		if (e.keyCode === 13) {
			$('.dom .slected').removeClass('zuo you').appendTo('.dom .rongqi');
			$('.dom .rongqi .slected').removeClass('slected');
		}
		if (e.keyCode === 37) {
			$('.dom .zuo').wrap('<div class="wrap"></div>');
			$('.dom .wrap').each(function () {
				var circle = $(this).find('.zuo');
				var weizhi = circle.position();
				circle.css({top: 0, left: 0})
				$(this).css({
					width: circle.width(),
					height: circle.height(),
					top: weizhi.top,
					left: weizhi.left
				})
			})
		}
		if (e.keyCode === 8) {
			$('.dom .slected').remove();
		}

	})
*/



	// var star = function(){

		var huanyipi = [
			{img: 'img/a.jpg', one: '墨染流年', link: 'http://biadu.com'},
			{img: 'img/b.jpg', one: '墨染流年', link: 'http://12306.com'},
			{img: 'img/c.jpg', one: '墨染流年', link: 'http://xinlang.com'},
			{img: 'img/d.jpg', one: '墨染流年', link: 'http://biadu.com'},
			{img: 'img/e.jpg', one: '墨染流年', link: 'http://biadu.com'},
			{img: 'img/f.jpg', one: '墨染流年', link: 'http://biadu.com'},
			{img: 'img/g.jpg', one: '墨染流年', link: 'http://biadu.com'},
			{img: 'img/h.jpg', one: '墨染流年', link: 'http://biadu.com'}
		]

		$('.button').on('click', function () {
			var url = $('.box img').attr('src');
			$('.box img').attr('src', url);
			$('.box img').attr('src', function (i, oldsrc) {
				return huanyipi[i].img;
			})
			$('.box .info').text('墨染流年', function (i, oldinfo) {
				return huanyipi[i].one;
			})
			$('.box a').attr('href', function (i, oldsrc) {
				return huanyipi[i].link;
			})

		});



	$('.box ul li').on('click', function (e) {
		var ev = e || window.event;
		ev.preventDefault();
		$('.cart').addClass('show');//窗帘出来
		$('.cart img').attr('src', $(this).find('img').attr('src'));
		// TODO设置图片宽度
		/* var img=$(this).find('img');
		 var x=img.width()/img.height()*$(window).outerHeight();
		 if(x<$('.cart .rongqi').width()){
		 $('.cart img').width(x);
		 }
		 */
		$('.cart').attr('index', $(this).index());

	})
	$('.cart .close').on('click', function (e) {
		e.stopPropagation();
		$('.cart').removeClass('show');
	})

	var imgs = $('.box img');

	$('.cart').on('mousedown', function (e) {
		e.preventDefault();
	})
	$('.cart').on('click', function (e) {
		var index = parseInt($(this).attr('index'));

		if (e.clientX > $(this).outerWidth(true) / 2) {
			index += 1;
		} else {
			index -= 1;
		}
		if (index === imgs.length) {

			var win = function () {
				$('.cart .tishi').addClass('diaoluo').css('opacity', '1');
			}
			win();
			var fanhui = function () {
				$('.cart .tishi').addClass('fanhui').css('opacity', '0');
			}
			setTimeout(fanhui, 2000);
			return;
		}
		if (index === -1) {
			// alert("前面没有了");
			var win = function () {
				$('.cart .tishi').addClass('diaoluo').css('opacity', '1');
			}
			win();
			var fanhui = function () {
				$('.cart .tishi').addClass('fanhui').css('opacity', '0');
			}
			setTimeout(fanhui, 2000);
			return;

		}
		$('.cart').attr('index', index);
		$('.cart img').attr('src', imgs.eq(index).attr('src'));


	})

  // }

	// var kaishi=function(){
			/*.delay(800).queue(function (){
			 $(this).removeClass('changjing').dequeue();*/
			// })
		// })
		// }
		// kaishi();


})