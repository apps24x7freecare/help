/**
 * Driving School Scripts
 */
; ( function( $ ) {
	"use strict";
	
	/* CountDown */
	var countDiv = $("#countdown");
	if(countDiv.length == 0) {
	} else {
		var countUntil = countDiv.attr('data-until');
		function t(t) {
			var d = $(".countdown__item-d"),
				i = $(".countdown__item-s"),
				l = $(".countdown__item-m"),
				s = $(".countdown__item-h"),
				a = t[6],
				n = t[5],
				r = t[4],
				f = t[3];
			d.val(f).trigger("change");
			i.val(a).trigger("change");
			l.val(n).trigger("change");
			s.val(r).trigger("change");
			//console.log(d.val());
			if(d.val() == 0){
				d.parents('.countdown__section').css('display','none');
			}
		}
		var until = new Date;
		var countUntil = countUntil.split(',');
		until = new Date(countUntil[0],countUntil[1]-1,countUntil[2],countUntil[3],countUntil[4]);
	
		$(".countdown__item-d").knob({
			'font':   'inherit',
			'readOnly': true,
		}),
		$(".countdown__item-h").knob({
			'font':   'inherit',
			'readOnly': true,
		}), $(".countdown__item-m").knob({
			'font':   'inherit',
			'readOnly': true,
		}), $(".countdown__item-s").knob({
			'font':   'inherit',
			'readOnly': true,
		});
		countDiv.countdown({
			until: until,
			format: "DHMS",
			padZeroes: !1,
			//layout: $("#countdownLayout").html(),
			onTick: t
		});
	};
	
	$('select').styler({
		singleSelectzIndex: 4
	});
	
	$(".faq__question").on("click", function() {
		var thisParent = $(this).closest(".faq__item");
		var allParents = $(".faq__item");
		allParents.not(thisParent).removeClass("faq__item_active");
		thisParent.toggleClass("faq__item_active");
	});
	
	/**
	 * Magnific Popup
	 */
	$(".video__body-inner").magnificPopup({
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 160,
		preloader: !1,
		fixedContentPos: !1
	});

	$(".photo__list").each(function() {
		$(this).magnificPopup({
			delegate: "a",
			type: "image",
			showCloseBtn: !1,
			gallery: {
				enabled: !0
			}
		});
	});
	
	$(".gallery__list").each(function() {
		$(this).magnificPopup({
			delegate: "a",
			type: "image",
			showCloseBtn: !1,
			gallery: {
				enabled: !0
			}
		});
	});
	
	$(".footer__instagramm-list").each(function() {
		$(this).magnificPopup({
			delegate: "a",
			type: "image",
			showCloseBtn: !1,
			gallery: {
				enabled: !0
			}
		});
	});
	
	$(".sertificate__thumb").magnificPopup({
		type: "image",
		showCloseBtn: true,
		closeBtnInside: false,
		gallery: {
			enabled: true
		}
	});
	
	/**
	 * Swiper
	 */
	//var swiperAutoplay = $('#tiserSlider').data('autoplay');
	var tiserSwiper = new Swiper ('#tiserSlider', {
		loop: true,
	}); 

	var reviewPageItem = $(".review__pager .review__pager-item");
	var reviewActiveClass = 'review__pager-item_active';
	var reviewSlider = new Swiper("#reviewSlider", {
		loop: false,
		onInit: function (swiper) {
			var thisIndex = swiper.activeIndex;
			reviewPageItem.eq(thisIndex).addClass(reviewActiveClass);
		},
		onSlideChangeStart: function (swiper) {
			var thisIndex = swiper.activeIndex;
			reviewPageItem.removeClass(reviewActiveClass);
			reviewPageItem.eq(thisIndex).addClass(reviewActiveClass);
		},
	});

	var instructorPageItem = $(".instructor__pager .instructor__pager-item");
	var instructorActiveClass = 'instructor__pager-item_active';
	var instructorSlider = new Swiper("#instructorSlider", {
		loop: false,
		onInit: function (swiper) {
			var thisIndex = swiper.activeIndex;
			instructorPageItem.eq(thisIndex).addClass("instructor__pager-item_active");
		},
		onSlideChangeStart: function (swiper) {
			var thisIndex = swiper.activeIndex;
			instructorPageItem.removeClass(instructorActiveClass);
			instructorPageItem.eq(thisIndex).addClass(instructorActiveClass);
		},
	});

	new Swiper("#courseSlider", {
		loop: true,
		spaceBetween: 5
	});

	$(".tiser__pager-item").on("click", function() {
		var e = $(this);
		e.siblings().removeClass("tiser__pager-item_active");
		var t = e.index() + 1;
		e.addClass("tiser__pager-item_active"), tiserSwiper.slideTo(t);
	});
	
	$(".review__pager-item").on("click", function() {
		var e = $(this);
		var t = e.index();
		reviewSlider.slideTo(t);
	});

	$(".instructor__pager-item").on("click", function() {
		var e = $(this);
		var t = e.index();
		instructorSlider.slideTo(t);
	});
	
	/**
	 * Nav
	 */
	$(".nav__btn").on("click", function() {
		$("body").addClass("nav_open");
	});
	$(".nav__close").on("click", function() {
		$("body").removeClass("nav_open");
	});

	$(".contact").on("click", function() {
		$(".contact__map").css("pointer-events", "auto");
	});

	$('.gallery__list').imagesLoaded( function() {
		var e = $(".gallery__list").isotope({
			itemSelector: ".gallery__list-item",
			layoutMode: "fitRows"
		});
		$(".gallery__filter").on("click", ".filter__item", function() {
			var t = $(this).attr("data-filter");
			e.isotope({
				filter: t
			});
		});
		$(".gallery__filter").each(function(e, t) {
			var i = $(t);
			i.on("click", ".filter__item", function() {
				i.find(".filter__item_active").removeClass("filter__item_active");
				$(this).addClass("filter__item_active");
			});
		});
	});	
	
	$('.course__filter .filter__item').on('click', function () {
		var linkActiveVal = $(this).index();
		$(this).addClass('filter__item_active').siblings().removeClass('filter__item_active');
		var displayContentVal = $('.course__slider .course__slider-item').eq(linkActiveVal).addClass('active').siblings().removeClass('active');
	});
	
	$('.profile__fig-thumb img').on('click', function(){
		var bigImgVal = $('.profile__fig-img img');
		var thumbImgVal = $(this).attr('src');
		bigImgVal.attr('src',thumbImgVal);
	});
	
	$( ".nav__list ul" ).addClass( "nav__sub" );
	$( ".nav__list .nav__sub" ).parent().find('a').addClass( "nav__link_has-sub" );
	
	$('.popup-bestsellers-btn').on('click', function(){
		var pricePlan = $(this).find('.data-form').data('price');
		$(".popup_bestsellers__num").text(pricePlan);
		var namePlan = $(this).find('.data-form').data('name');
		$(".popup_bestsellers__desc").text(namePlan);
		var activePlan = $(this).find('.data-form').data('active');
		if(activePlan == 'no') {
			$( ".popup_bestsellers__title__icon, .popup_bestsellers__title__text" ).addClass( "none" );
		} else {
			$( ".popup_bestsellers__title__icon, .popup_bestsellers__title__text" ).removeClass( "none" );
		}
		$(".nameplan-input").val(namePlan);
	});

	$('.popup-protect-btn:not(.techrs-form)').on('click', function(){
		var priceTitle = $(this).find('.data-form').data('title');
		$(".popup_protect__def__title").text(priceTitle);
		$(".course-input").val(priceTitle);
		var DurationPlan = $(this).find('.data-form').data('duration');
		if(DurationPlan == '') { 
			$(".popup_protect__def__days").css("display", "none"); 
		} else { 
			$(".popup_protect__def__days").css("display", "block");
			$(".popup_protect__def__days").text(DurationPlan); 
		}
		var priceIcon = $(this).find('.data-form').data('icon');
		if(priceIcon == '') { 
			$(".popup_protect__def__img").css("display", "none");
		} else { 
			$(".popup_protect__def__img").css("display", "block");
			$(".popup_protect__def__img img").attr("src", priceIcon)
		}
		var priceImg = $(this).find('.data-form').data('img');
		if(priceImg == '') { 
			$(".popup_protect__img").css("display", "none");
		} else { 
			$(".popup_protect__img").css("display", "block");
			$(".popup_protect__img img").attr("src", priceImg)
		}
		var priceText = $(this).parent().find('.form-li').html();
		if(typeof(priceText)=="undefined") {
			$('.popup_protect__list').remove();
		} else {
			$('.popup_protect__list').remove();
			$('.popup_protect__data').append('<ul class="popup_protect__list">' + priceText + '</ul>');
		}
	});
	
	$('button').on('click', function(){
		setTimeout(function () { $('#subscription-form .inp__control').val(''); }, 1000);
	});
			
	$("#message_form, #callme-form, #question_form, #plan_form, #course_form, #review_form, #teachers_form, #teachers_message, #slader1-form, #course_techer").on('submit', function(e) {
		e.preventDefault();
		var urlFormSend = $(this).attr('action');
		var msg   = new FormData(this);
		var TTF     = $(this);
		$.ajax({
			type: 'POST',
			url: urlFormSend,
			data: msg,
			cache:false,
			processData: false,
			contentType: false,
			success: function(data) {
				$(TTF).find('.results-ajax').html(data);
				$(TTF).find('*').removeClass( "err-po" );
				$(TTF).find('*').removeClass( "err-pot" );
				if($(TTF).find('.results-ajax span').hasClass('err0')){
					$(TTF).find('input:not(.nonce, #my_image_upload_nonce)').val('');
					$(TTF).find('textarea').val('');
					$('#star1, #star2, #star3, #star4, #star5').removeAttr('checked');
					$(TTF).find(".jq-selectbox__select-text").addClass('placeholder');
				} else {
					$.each($(TTF).find('.mand'),function() {
						if($(this).val() == "") { 
							if($(this).hasClass('textarea')) {
								$(this).addClass( "err-pot" );
							} else {
								$(this).parent().parent().addClass( "err-po" ); 
							}
						} else {
							$(this).parent().parent().removeClass( "err-po" )
							$(this).removeClass( "err-pot" );
						}
					});
				}
			},
			error:  function(xhr, str){
				alert('Error: ' + xhr.responseCode);
			}
		});
	});

	/* Load More */
	$(document).on( 'click','#true_loadmore', function() {
		$(this).find('span').text( drivingschool_params.loading_text );
		var data = {
			'action': 'loadmore',
			'query': true_posts,
			'page' : current_page,
			'template' : template
		};
		$.ajax({
			url:ajaxurl,
			data:data, 
			type:'POST', 
			success:function(data){
				if( data ) { 
					$('.loadmore_container').append(data);
					$('#true_loadmore').find('span').text( drivingschool_params.load_text );
					current_page++;
					if (current_page == max_pages) $("#true_loadmore").remove();
				} else {
					$('#true_loadmore').remove();
				}
			}
		});
	});
	
	/* Date Picker */
	$('.input-datepicker').datepicker({
		showOtherMonths: true,
		selectOtherMonths: true,
	});
	
	var Popup = { this: $('.popup'), wrapper: $('.popup__wrapper'), close: $('.popup__close'), bg: $('.popup__bg')},
			body = $('body'),
			w = $(window);
			
	function abs(object) {
		$(this).removeAttr('href');
		var scrollTop = w.scrollTop(),
		height = body.height();
		object.css('padding-top', scrollTop+20).fadeIn(500).height(height-scrollTop-20);
	}
	
	Popup.close.on('click', function() {
		Popup.this.fadeOut(500);
	});
	
	Popup.bg.on('click', function() {
		Popup.this.fadeOut(500);
	});
	
	var popups = [$('.popup_usual'), $('.popup_bestsellers'), $('.popup_teacher'), $('.popup_protect'), $('.popup_callback')];
	
	$('.popup-usual-btn').on('click', function() {
		$(this).removeAttr('href');
		abs(popups[0]);
	});
	$('.popup-bestsellers-btn').on('click', function() {
		$(this).removeAttr('href');
		abs(popups[1]);
	});
	$('.popup-teacher-btn').on('click', function() {
		$(this).removeAttr('href');
		abs(popups[2]);
	});
	$('.popup-protect-btn').on('click', function() {
		$(this).removeAttr('href');
		abs(popups[3]);
	});
	$('.header__callback').on('click', function() {
		$(this).removeAttr('href');
		abs(popups[4]);
	});
	
	/**
	 * Google Map
	 */
	function initContactMap() {
		var mapLat = parseFloat($('#contactMap').data('lat'));
		var mapLng = parseFloat($('#contactMap').data('lng'));
		var mapCenter = {lat: mapLat, lng: mapLng + 0.2 };
		var mapZoom = 11;
		var map = new google.maps.Map(document.getElementById('contactMap'), {
			zoom: mapZoom,
			center: mapCenter,
			styles: [
				{
					featureType: "all",
					elementType: "labels.text.fill",
					stylers: [
						{
							saturation: 36
						}, {
							color: "#000000"
						}, {
							lightness: 40
						}
					]
				},
				{
					featureType: "all",
					elementType: "labels.text.stroke",
					stylers: [{
						visibility: "on"
					}, {
						color: "#000000"
					}, {
						lightness: 16
					}]
				}, {
					featureType: "all",
					elementType: "labels.icon",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "administrative",
					elementType: "geometry.fill",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 20
					}]
				}, {
					featureType: "administrative",
					elementType: "geometry.stroke",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 17
					}, {
						weight: 1.2
					}]
				}, {
					featureType: "administrative",
					elementType: "labels",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "administrative.country",
					elementType: "all",
					stylers: [{
						visibility: "simplified"
					}]
				}, {
					featureType: "administrative.country",
					elementType: "geometry",
					stylers: [{
						visibility: "simplified"
					}]
				}, {
					featureType: "administrative.country",
					elementType: "labels.text",
					stylers: [{
						visibility: "simplified"
					}]
				}, {
					featureType: "administrative.province",
					elementType: "all",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "administrative.locality",
					elementType: "all",
					stylers: [{
						visibility: "simplified"
					}, {
						saturation: "-100"
					}, {
						lightness: "30"
					}]
				}, {
					featureType: "administrative.neighborhood",
					elementType: "all",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "administrative.land_parcel",
					elementType: "all",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "landscape",
					elementType: "all",
					stylers: [{
						visibility: "simplified"
					}, {
						gamma: "0.00"
					}, {
						lightness: "74"
					}]
				}, {
					featureType: "landscape",
					elementType: "geometry",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 20
					}]
				}, {
					featureType: "landscape.man_made",
					elementType: "all",
					stylers: [{
						lightness: "3"
					}]
				}, {
					featureType: "poi",
					elementType: "all",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "poi",
					elementType: "geometry",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 21
					}]
				}, {
					featureType: "road",
					elementType: "geometry",
					stylers: [{
						visibility: "simplified"
					}]
				}, {
					featureType: "road.highway",
					elementType: "geometry.fill",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 17
					}]
				}, {
					featureType: "road.highway",
					elementType: "geometry.stroke",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 29
					}, {
						weight: .2
					}]
				}, {
					featureType: "road.arterial",
					elementType: "geometry",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 18
					}]
				}, {
					featureType: "road.local",
					elementType: "geometry",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 16
					}]
				}, {
					featureType: "transit",
					elementType: "geometry",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 19
					}]
				}, {
					featureType: "water",
					elementType: "geometry",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 17
					}]
				}
			]
				
		});
		
		var image = {
			url: drivingschool_params.theme_uri + '/assets/images/pin_y.png',
			scaledSize: new google.maps.Size(17, 24),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(0, 24)
		};
		
		var markerPos = {lat: mapLat, lng: mapLng};
		var marker = new google.maps.Marker({
			position: markerPos,
			map: map,
			icon: image,
		});

	}
	
	/* initAddressMaps */
	function initAddressMaps() {
		
		var mapsArray = [];
		var mapsDoom = $('#addressMaps .address__map-item');
		var markerImage = drivingschool_params.theme_uri + '/assets/images/pin.png';
		
		//console.log(mapsDoom.length);
		var mapZoom = parseInt(17);
		
		for (var i = 0; i < mapsDoom.length; i++) {
			var mapId  = mapsDoom.eq(i).attr('id');
			var mapLat = parseFloat(mapsDoom.eq(i).data('lat'));
			var mapLng = parseFloat(mapsDoom.eq(i).data('lng'));
			var mapTitle = mapsDoom.eq(i).data('title');
			
			var mapCenter = {lat: mapLat, lng: mapLng };
			
			var map = new google.maps.Map(document.getElementById(mapId), {
				zoom: mapZoom,
				center: mapCenter,
				styles: [
					{
						"featureType": "landscape",
						"stylers": [
							{
								"saturation": -100
							}, {
								"lightness": 65
							}, {
								"visibility": "on"
							}
						]
					}, {
						"featureType": "poi",
						"stylers": [
							{
								"saturation": -100
							}, {
								"lightness": 51
							}, {
								"visibility": "simplified"
							}
						]
					}, {
						"featureType": "road.highway",
						"stylers": [
							{
								"saturation": -100
							}, {
								"visibility": "simplified"
							}
						]
					}, {
						"featureType": "road.arterial",
						"stylers": [
							{
								"saturation": -100
							}, {
								"lightness": 30
							}, {
								"visibility": "on"
							}
						]
					}, {
						"featureType": "road.local",
						"stylers": [
							{
								"saturation": -100
							}, {
								"lightness": 40
							}, {
								"visibility": "on"
							}
						]
					}, {
						"featureType": "transit",
						"stylers": [
							{
								"saturation": -100
							}, {
								"visibility": "simplified"
							}
						]
					}, {
						"featureType": "administrative.province",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					}, {
						"featureType": "water",
						"elementType": "labels",
						"stylers": [
							{
								"visibility": "on"
							}, {
								"lightness": -25
							}, {
								"saturation": -100
							}
						]
					}, {
						"featureType": "water",
						"elementType": "geometry",
						"stylers": [
							{
								"hue": "#ffff00"
							}, {
								"lightness": -25
							}, {
								"saturation": -97
							}
						]
					}
				]
			});
			var image = {
				url: markerImage,
				scaledSize: new google.maps.Size(25, 33),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(0, 24)
			};
			
			var markerPos = {lat: mapLat, lng: mapLng};
			var marker = new google.maps.Marker({
				position: markerPos,
				map: map,
				icon: image,
				title: mapTitle
			});
			
		} // end for

	};
	
	//
	var contactMap = document.getElementById('contactMap');
	var addressMaps = document.getElementById('addressMaps');
	if (contactMap !== null){
		initContactMap();
	}
	if (addressMaps !== null){
		initAddressMaps();
	}
	
	/* Map Filter */
	$('.address__filter .filter__item').click(function(){
		var linkActiveVal = $(this).index();
		$(this).addClass('filter__item_active').siblings().removeClass('filter__item_active');
		$('.address__map .address__map-item').eq(linkActiveVal).addClass('active').siblings().removeClass('active');			
	});

})( jQuery );