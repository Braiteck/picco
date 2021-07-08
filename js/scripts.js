$(() => {
	// Основной слайдер на главной
	if ($('.main_slider .swiper-container').length) {
		new Swiper('.main_slider .swiper-container', {
			loop: true,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active',
			}
		})
	}


	// ПРОДУКЦИЯ
	if ($('.categories .swiper-container').length) {
		new Swiper('.categories .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active',
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1208: {
					spaceBetween: 32,
					slidesPerView: 3
				}
			}
		})
	}


	// ЛК - сметы
	$('.lk_info .estimates .estimate .spoler .btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.estimates'),
			estimate = $(this).closest('.estimate')

		if (!$(this).hasClass('active')) {
			$(this).addClass('active')

			parent.find('.titles .product').addClass('show')

			estimate.find('.product, .links').addClass('show')
		} else {
			$(this).removeClass('active')

			if (!parent.find('.estimate .spoler .btn.active').length) {
				parent.find('.titles .product').removeClass('show')
			}

			estimate.find('.product, .links').removeClass('show')
		}
	})


	// Страница товара
	if ($('.product_info .images').length) {
		const productSlider = new Swiper('.product_info .images .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			autoHeight: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active',
			}
		})
	}


	// Сопутствующие товары
	if ($('.related_products .swiper-container').length) {
		new Swiper('.related_products .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active',
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1208: {
					spaceBetween: 32,
					slidesPerView: 3
				}
			}
		})
	}


	// Страница контакты
	$('.contacts_info .data .item.location button').click(function (e) {
		e.preventDefault()

		let map = $(this).data('map')

		$('.contacts_info .map_wrap .map').hide()
		$('.contacts_info .map_wrap ' + map).fadeIn(300)
	})


	// Конфигуратор
	$('.configurator .option.engraving .vals label').click(function (e) {
		if ($(this).prev().prop('checked')) {
			e.preventDefault()

			$('.configurator .option.engraving .vals input').prop('checked', false)
		}
	})


	if (is_touch_device()) {
		$('.category_info .head .burger .mini_modal > * > a').click(function (e) {
			const $dropdown = $(this).next()

			if ($dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				$('.category_info .head .burger .mini_modal .sub').removeClass('show')
				$dropdown.addClass('show')
			}
		})
	}


	// Моб. меню
	$('header .mob_menu_btn, .overlay').click((e) => {
		e.preventDefault()

		if (!$('header .mob_menu_btn').hasClass('active')) {
			$('header .mob_menu_btn').addClass('active')
			$('body').addClass('menu_open')
			$('header .menu, .overlay').fadeIn(200)
		} else {
			$('header .mob_menu_btn').removeClass('active')
			$('body').removeClass('menu_open')
			$('header .menu, .overlay').fadeOut(200)
		}
	})
})


$(window).on('load', () => {
	// Статьи - сетка
	let articles = $('.articles .masonry'),
		articlesGutter = parseInt(articles.css('--articles_gutter'))

	masonry = articles.masonry({
		percentPosition: true,
		gutter: articlesGutter,
		itemSelector: '.article',
		columnWidth: articles.find('.article').width()
	})
})