/*!
 * User: Vincent Chen
 * Date: 13-9-3 下午5:19
 * Contact way: QQ77642304
 * Detail: 幻灯片
 
"effect":'x', //效果  水平 - x | 垂直 - y | 渐隐 - fade | 隐藏 - none
"speed":600, //动画速度
"space":5000, //时间间隔
"auto":true, //自动滚动
"trigger":'mouseenter', //触发事件
"content_box":'.contents', //内容容器id或class
"content_tag":'li', //内容标签 默认为<li>
"switcher_box":'.switchers', //内容标签 默认为<li>
"switcher_tag":'li', //切换器标签 默认为<li>
"active_class":'active', //当前切换器样式名称 不含"."
"prev":'prev', //上一个幅箭头样式名称
"next":'next', //下一个幅箭头样式名称
"rand":false, //是否随机指定默认幻灯页
"callback":null // 回调函数
 
 
 */
! function(a) {
	function b(b, c) { this.config = a.extend({ effect: "fade", speed: 2000, space: 5e3, auto: !0, trigger: "mouseenter", content_box: ".contents", content_tag: "li", switcher_box: ".switchers", switcher_tag: "li", active_class: "active", prev: "prev", next: "next", rand: !1, callback: null }, c || {}), this.el = b, this.init() } b.prototype = { init: function() {
			function b() { f >= i.length && (f = 0), k.removeClass(e.active_class).eq(f).addClass(e.active_class); switch(e.effect) {
					case "x":
						h.width(i.length * i.width()), h.stop().animate({ left: -parseFloat(i.width()) * f }, e.speed); break;
					case "y":
						i.css("display", "block"), h.stop().animate({ top: -parseFloat(i.height()) * f }, e.speed); break;
					case "fade":
						i.eq(g).stop().animate({ opacity: 0 }, e.speed / 2).css("z-index", 1).end().eq(f).css("z-index", 9).stop().animate({ opacity: 1 }, e.speed / 2); break;
					case "none":
						i.hide().eq(f).show() } g = f, f++, typeof e.callback == "function" && e.callback.call(this) }

			function c() { clearInterval(m) }

			function d() { e.auto && (m = setInterval(b, e.space)) } var e = this.config,
				f = 1,
				g = 0,
				h = this.el.find(e.content_box),
				i = h.find(e.content_tag),
				j = this.el.find(e.switcher_box),
				k = j.find(e.switcher_tag);
			e.rand && (f = Math.floor(Math.random() * i.length), b()), e.effect == "fade" && a.each(i, function(b, c) { b === 0 ? a(this).css({ position: "absolute", "z-index": 9 }) : a(this).css({ position: "absolute", "z-index": 1, opacity: 0 }) }), e.trigger = e.trigger === "mouseover" || e.trigger === "hover" ? "mouseenter" : e.trigger, k.on(e.trigger, function() { c(), f = a(this).index(), b() }); var l = this.el.find(".arrow");
			l.on("click", function(a) { c(), a || (a = window.event); if(a.target.className == e.prev) { if(!g) return !1;
					f = g - 1, b() } a.target.className == e.next && b() }), k.add(l).on({ mouseenter: c, mouseleave: d }); if(e.auto) var m = setInterval(b, e.space);
			h.hover(c, d) } }, a.fn.slider = function(c) { return this.each(function() { var d = a(this),
				e = new b(d, c);
			d.data("slider", e) }) } }(jQuery)