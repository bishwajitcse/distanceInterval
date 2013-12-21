// Bootstrap accordion

$(".accordion").collapse();
$(function() {
    $('.accordion').on('show', function (e) {
         $(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('accordion-active');
    });
    $('.accordion').on('hide', function (e) {
        $(this).find('.accordion-toggle').not($(e.target)).removeClass('accordion-active');
    }); 
});

// Bootstrap Menu

$(document).ready(function(){
	$('.main-menu>li>a').append('<div class="no_active_devices_icon"></div><div class="active_devices_icon"></div>');
	$('.main-menu>li').each(function(){
		if(!$(this).children('ul').length){
			$(this).children('a').css('background-image','none');
			$(this).children('a').children('div').hide();
		}
	});
});

// button style

$(document).ready(function(){
	$('.join-button,.small_button_style_5,.medium_button_style_5,.large_button_style_5,.post_time dt,.recent-work a,.news-content a,.read-more-link,.indicator>div,.learn-more-link,.search-button,.list-type1>li>a,.list-type2>li>ul>li>a').append("<span class='button-element'></span>");
	$('.recent-work figure div').append('<i></i>');
	
	$('.portfolio_navigation>li>a.selected').delay(500).append('<span class="button-element"></span>');
});

if($("#layer-slider").length){
$(document).ready(function(){
        $('#layer-slider').layerSlider({
			autoStart:true,
			navPrevNext:true,
			hoverPrevNext:false,
			navButtons:true,
			skin: 'default',
			skinsPath:false,
			touchNav:true,
			thumbnailNavigation:'disabled',
			imgPreload:true,
			responsive:true
		});
 });
}
// first-letter

$(document).ready(function(){
		$('.first-letter').each(function(){

		var first = $(this).text().slice(0,1);
		var last = $(this).text().slice(1,$(this).text().length);

		$(this).html('<span class="first_letter_style_1">'+first+'</span>' + last);
		});	
		$('.first_letter_default').each(function(){

		var first = $(this).text().slice(0,1);
		var last = $(this).text().slice(1,$(this).text().length);

		$(this).html('<span class="first_letter_default_style">'+first+'</span>' + last);
		});	
		$('.first-letter-type2').each(function(){

		var first = $(this).text().slice(0,1);
		var last = $(this).text().slice(1,$(this).text().length);

		$(this).html('<span class="first_letter_style_2">'+first+'</span>' + last);
		});
		$('.first-letter-type3').each(function(){

		var first = $(this).text().slice(0,1);
		var last = $(this).text().slice(1,$(this).text().length);

		$(this).html('<span class="first_letter_style_3">'+first+'</span>' + last);
		});	
});

// ipad fix

if( 'devicePixelRatio' in window && window.devicePixelRatio == 2 ){
	$(".recent-work").click(function(){});
	$(".tweet_list>li").click(function(){});
	$('.bwWrapperPartners').find('img').css('visibility','hidden');
}
$(document).ready(function(){
	$('.box-2-column,.box-3-column,.box-4-column').on('mouseenter', function(){
		$(this).find('div.portfolio_description').css('top','0');
	});
	$('.box-2-column,.box-3-column,.box-4-column').on('mouseleave', function(){
		$(this).find('div.portfolio_description').removeAttr('style');
	});
});
$(document).ready(function(){
	$('.pricing_table_column').on('mouseenter', function(){
		$(this).addClass('hover_table_column');
	});
	$('.pricing_table_column').on('mouseleave', function(){
		$(this).removeClass('hover_table_column');
	});
});
$(document).ready(function(){
	$('.box_blog_wrap').on('mouseenter', function(){
		$(this).addClass('box_blog_wrap_hover');
	});
	$('.box_blog_wrap').on('mouseleave', function(){
		$(this).removeClass('box_blog_wrap_hover');
	});
});

//sidebar height fix

if($('.sidebar-page-content').length){
$(document).ready(function(){
	$('.sidebar-page-content>.container>.row,.single-project-content>.row').eqHeight(".content-part-sidebar-page, aside");
});
}
if($('.recent-work').length){
$(document).ready(function(){
	$('.recent-work-container').eqHeight(".recent-work");
});
}

if($("#carousel-featured-work").length){
$(window).load(function(){
	$('#carousel-featured-work').carouFredSel({
	responsive: true,
	width: "auto",
	auto: false,
	circular	: true,
	infinite	: false,
	prev : {
		button		: "#car_prev",
		key			: "left",
			},
	next : {
		button		: "#car_next",
		key			: "right",
				},
	swipe: {
		onMouse: true,
		onTouch: true
		},
	items: {
		width: 245,
		visible: {
			min: 1,
			max: 4
		}
	}
	});
});
}
if($("#carousel-recent-news").length){
$(window).load(function(){
	$('#carousel-recent-news').carouFredSel({
	responsive: true,
	width: 'auto',
	auto: false,
	circular	: true,
	infinite	: false,
	swipe: {
		onMouse: true,
		onTouch: true
		},
	items: {
		width: 500,
		visible: {
			min: 1,
			max: 1
		},
		height: 'auto'
	},
	pagination: "#carousel-news-nav"
	});
});
}
if($("#team-carousel").length){
$(window).load(function(){
	$('#team-carousel').carouFredSel({
	responsive: true,
	width: "auto",
	auto: true,
	circular	: true,
	infinite	: false,
	swipe: {
		onMouse: true,
		onTouch: true
		},
	items: {
		width: 250,
		visible: {
			min: 1,
			max: 4
		},
		height: 'auto'
	},
	pagination: "#carousel-team-nav"
	});
});
}

if($("#our_partners_carousel").length){
$(window).load(function(){
	$('#our_partners_carousel').carouFredSel({
	responsive: true,
	width: "auto",
	auto: false,
	circular	: true,
	infinite	: false,
	swipe: {
		onMouse: true,
		onTouch: true
		},
	items: {
		width:143,
		visible: {
			min: 1,
			max: 6
		}
	},
	pagination: "#our_partners_carousel_nav"
	});
});
}

$(document).ready(function(){
	$('.bwWrapper').BlackAndWhite({
		hoverEffect: true,
		responsive: true
	})
}); 

$(document).ready(function(){
	$('.bwWrapperPartners').BlackAndWhite({
		hoverEffect: true,
		responsive: true
	})
}); 

if($(".featured-work-description a").length){
$(document).ready(function(){
$('.featured-work-description a').not('.link_icon').addClass('fancy_not_link');
	$('.featured-work-description a.fancy_not_link').fancybox({
		transitionIn: 'elastic',
		transitionOut: 'elastic',
		speedIn: 600,
		speedOut: 300
	});
});
}
if($(".fancybox_blog_container a").length){
$(document).ready(function(){
	$('.fancybox_blog_container a').fancybox({
		transitionIn: 'elastic',
		transitionOut: 'elastic',
		speedIn: 600,
		speedOut: 300
	});
});
}
if($(".portfolio_description a").length){
$(document).ready(function(){
	$('.portfolio_description a').fancybox({
		transitionIn: 'elastic',
		transitionOut: 'elastic',
		speedIn: 600,
		speedOut: 300
	});
});
}

if($('a.video-button').length){
$(document).ready(function(){
    $("a.video-button").fancybox({
		 "width": 620, // or whatever
		 "height": 420,
		 "type": "iframe"
	});
});
}

if($("#layer-slider-fullwidth").length){
 $(document).ready(function(){
	$('#layer-slider-fullwidth').layerSlider({
		autoStart:true,
		touchNav: true,
		thumbnailNavigation:'disabled',
		imgPreload:true,
		responsive:false,
		skinsPath:false,
		responsiveUnder: '1000',
		navPrevNext: true,
		hoverPrevNext: false,
		sublayerContainer: '1000',
		navButtons: true
	});
});
}

// Scroll up

if($('.scrollup').length){
  $(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	}); 

	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 800);
		return false;
	});
}
$(document).ready(function(){
	$('.main_menu_container').wrap('<div class="menu_effect"></div>');
	$('.slider-wrap').wrap('<div class="slider_effect"></div>');
	
  $(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.main_menu_container').css({'position':'fixed','top':'0','background':'#fff','margin-top':'0','box-shadow':'0px 1px 1px 1px rgba(154,154,154,0.2)'});
			$('.slider-wrap').css({'position':'fixed','top':'53px','z-index':'0'});
		} else {
			$('.main_menu_container').removeAttr('style');
			$('.slider-wrap').removeAttr('style');
		}
	}); 
})

$(".btn").click(function(){
	if($(".btn").hasClass("btn-active")){
		$(this).removeClass("btn-active");
	}
	else{
		$(this).addClass("btn-active");
	}
});

// Colorpicker

$(document).ready(function(){
	$("#colorSelector").minicolors({
		swatchPosition:'right',
		change: function(hex){
			$(".month,.layer-description,.layer-description-full-width,#carousel-news-nav>a.selected,.join-button,.comment_info a div,.apply_button,.title-page-block,.accordion-active .accordion-icon,.process-icon-block,.third_icon_block,.search-button,.portfolio_navigation>li>a.selected,.small_button_style_1,.medium_button_style_1,.pagination_style_2 li.selected_pag a,.social_icons_type_2 li a,.first_letter_style_2,mark,.reset_button,.scrollup,.fancy_button,.ps-container .ps-scrollbar-x").css({"background-color": hex });
			$(".featured-work-description a, .portfolio_description a,.join-button,#carousel-team-nav a.selected,.indicator>div,.recent_work_icon_block,.small_button_style_3,#our_partners_carousel_nav a.selected,.large_button_style_1,.large_button_style_3,.medium_button_style_3,.large_button_style_4,.medium_button_style_4,.small_button_style_4,.large_button_style_5,.medium_button_style_5,.small_button_style_5,.pricing_table_column.active_table_column>footer>a,.post_time dt,.jp-play-bar,.jp-play,.jp-pause,.jp-volume-bar-value,.menu_button").css({"background": hex });
			$(".main-menu>li>ul li.current-item>a,.recent-work a,.news-content a,.tweet_text a,.author,first-letter:first-letter,.first_letter_style_1,#team-carousel>li p,.team-list>li p,.read-more-link,.learn-more-link,.first_letter_default_style,.pagination_style_1 .hidden_pages a,.active_table_column .content_column_part dl dt,.active_table_column .content_column_part dl dd,.active_table_column header h5,.first_letter_style_3,.link_demo,.container_404>p:first-child,#time_container dl dt,#time_container dl dd,.track_name dt,.comment_info a,.ls-bottom-slidebuttons a.ls-nav-active,.current_item_top_level>a").css({"color":hex});
			$(".main-menu ul,.accordion-active .accordion-icon-arrow,.search-button .button-element,.portfolio_navigation>li>a.selected .button-element,.post_time dt .button-element").css({'border-top-color':hex});
			$(".recent-work a,.featured-work-description,.news-content a,.join-button .button-element,.read-more-link,.learn-more-link,.portfolio_description,.large_button_style_5 .button-element,.medium_button_style_5 .button-element,.small_button_style_5 .button-element,.team-gallery-part ul.team-list > li > figure img").css({'border-bottom-color':hex});
			$(".recent-work a .button-element,.news-content a .button-element,.read-more-link .button-element,.indicator>div .button-element,.learn-more-link .button-element").css({'border-left-color':hex});
			$(".pagination_style_2 li.selected_pag a,.ls-bottom-slidebuttons a.ls-nav-active").css({'border-color':hex});
			$(".recent-work a,.news-content a,.tweet_text a,.read-more-link,.learn-more-link").mouseover(function(){
				$(this).css({'color':'#000'});
			});
			$(".recent-work a,.news-content a,.tweet_text a,.read-more-link,.learn-more-link").mouseout(function(){
				$(this).css({'color':hex});
			});
			$(".recent-work a,.news-content a,.read-more-link,.learn-more-link").mouseover(function(){
				$(this).css({'border-bottom-color':'#000'});
			});
			$(".recent-work a,.news-content a,.read-more-link,.learn-more-link").mouseout(function(){
				$(this).css({'border-bottom-color':hex});
			});
			$(".recent-work a,.news-content a,.read-more-link,.learn-more-link").mouseover(function(){
				$(this).find("span").css({'border-left-color':'#000'});
			});
			$(".recent-work a,.news-content a,.read-more-link,.learn-more-link").mouseout(function(){
				$(this).find("span").css({'border-left-color':hex});
			});
			$(".list-type1 > li > a").mouseover(function(){
				$(this).find("span").css({'border-left-color':hex});
			});
			$(".list-type1 > li > a").mouseout(function(){
				$(this).find("span").css({'border-left-color':'#626262'});
			});
			$('.main-menu ul li:not(li.current-item)').mouseover(function(){
				$(this).children('a').css({'color':hex});
			});
			$('.main-menu ul li:not(li.current-item)').mouseout(function(){
				$(this).children('a').css({'color':'#585858'});
			});
			$('.main-menu>li:not(.current_item_top_level)').mouseover(function(){
				$(this).children('a').css({'color':hex});
			});
			$('.main-menu>li:not(.current_item_top_level)').mouseout(function(){
				$(this).children('a').css({'color':'#000'})
			});
			$('.tweet_list>li').mouseover(function(){
				$(this).find('.twitter_logo').css({'background-color':hex});
			});
			$('.tweet_list>li').mouseout(function(){
				$(this).find('.twitter_logo').css({'background-color':'#e3e3e3'});
			});
			$('.social_icons_type_5 li a').mouseover(function(){
				$(this).css({'background-color':hex});
			});
			$('.social_icons_type_5 li a').mouseout(function(){
				$(this).css({'background-color':'#d7d7d7'});
			});
			$(".personal-social>li>a,.view-all-button,.personal-social>li>a,.social_icons_type_3 li a").mouseover(function(){
				$(this).css({'background-color':hex});
			});
			$(".personal-social>li>a,.view-all-button,.personal-social>li>a,.social_icons_type_3 li a").mouseout(function(){
				$(this).css({'background-color':'#cdcdcd'});
			});
			$("#carousel_process>li>figure").mouseover(function(){
				$(this).find('.process_2_icon').css({'background-color':hex});
			});
			$("#carousel_process>li>figure").mouseout(function(){
				$(this).find('.process_2_icon').css({'background-color':'#c7c7c7'});
			});
			$("#carousel_process>li>figure").mouseover(function(){
				$(this).find('.process_2_icon').children('i').css({'border-top-color':hex});
			});
			$("#carousel_process>li>figure").mouseout(function(){
				$(this).find('.process_2_icon').children('i').css({'border-top-color':'#c7c7c7'});
			});
			$("#latest_post_next,#latest_post_prev,.related-projects-container .carousel-fw-nav #car_prev,.related-projects-container .carousel-fw-nav #car_next,.blog_small_nav .blog_small_prev,.blog_small_nav .blog_small_next,#car_process_prev,#car_process_next").mouseover(function(){
				$(this).css({'background-color':hex});
			});
			$("#latest_post_next,#latest_post_prev,.related-projects-container .carousel-fw-nav #car_prev,.related-projects-container .carousel-fw-nav #car_next,.blog_small_nav .blog_small_prev,.blog_small_nav .blog_small_next,#car_process_prev,#car_process_next").mouseout(function(){
				$(this).css({'background-color':'#000'});
			});
			$(".list-type1 > li > a,.list-type2 > li > a,.list-type3 > li > a,.list-type4 > li > a,.post_links div a,.list-type4 > li > a").mouseover(function(){
				$(this).css({'color':hex});
				$(this).find('div.no_active_link_icon').css({'background':hex});
				$(this).find('div.active_link_icon').css({'background':hex});
			});
			$(".list-type1 > li > a,.list-type2 > li > a,.list-type3 > li > a,.list-type4 > li > a,.post_links div a").mouseout(function(){
				$(this).css({'color':'#616262'});
				$(this).find('div.no_active_link_icon').css({'background':'#616262'});
				$(this).find('div.active_link_icon').css({'background':'#616262'});;
			});
			$(".track_stat a").mouseover(function(){
				$(this).css({'color':hex});
			});
			$(".track_stat a").mouseout(function(){
				$(this).css({'color':'#878787'});
			});
			$(".list-type2>li>ul>li>a").mouseover(function(){
				$(this).find("span").css({'background':hex});
			});
			$(".list-type2>li>ul>li>a").mouseout(function(){
				$(this).find("span").css({'background':'#989898'});
			});
			$(".list-type2>li>ul>li>a").mouseover(function(){
				$(this).css({'color':hex});
			});
			$(".list-type2>li>ul>li>a").mouseout(function(){
				$(this).css({'color':'#989898'});
			});
			$(".comment_info a").mouseover(function(){
				$(this).css({'color':'#989898'});
			});
			$(".comment_info a").mouseout(function(){
				$(this).css({'color':hex});
			});
			$(".subscribers-list li a,.responsive_menu>ul.main-menu>li>a").mouseover(function(){
				$(this).css({'background':hex});
			});
			$(".subscribers-list li a,.responsive_menu>ul.main-menu>li>a").mouseout(function(){
				$(this).css({'background':'transparent'});
			});
			$(".pagination_style_2 li a").mouseover(function(){
				$(this).css({'background':hex});
				$(this).css({'border-color':hex});
			});
			$(".pagination_style_2 li a").mouseout(function(){
				$(this).css({'background':'transparent'});
				$(this).css({'border-color':'#DFDFDF'});
			});
			$(".recent-work").mouseover(function(){
				$(this).find('figure').find('div').css({'background':hex});
				$(this).find('figure').find('i').css({'border-top-color':hex});
			});
			$(".recent-work").mouseout(function(){
				$(this).find('figure').find('div').css({'background':'#c1c1c1'});
				$(this).find('figure').find('i').css({'border-top-color':'#c1c1c1'});
			});
			$(".box_blog_wrap").mouseover(function(){
				$(this).css({'border-color':hex});
			});
			$(".box_blog_wrap").mouseout(function(){
				$(this).css({'border-color':'#D3D3D3'});
			});
			$(".pricing_table_column:not(.active_table_column)").mouseover(function(){
				$(this).find("h5").css({'color':hex});
				$(this).find("dt").css({'color':hex});
			});
			$(".pricing_table_column:not(.active_table_column)").mouseout(function(){
				$(this).find("h5").css({'color':'#373737'});
				$(this).find("dt").css({'color':'#373737'});
			});
			$(".pricing_table_column:not(.active_table_column)").mouseover(function(){
				$(this).find("dd").css({'color':hex});
			});
			$(".pricing_table_column:not(.active_table_column)").mouseout(function(){
				$(this).find("dd").css({'color':'#989898'});
			});
			$(".pricing_table_column:not(.active_table_column)").mouseover(function(){
				$(this).find("a").css({'background':hex});
			});
			$(".pricing_table_column:not(.active_table_column)").mouseout(function(){
				$(this).find("a").css({'background':'#c0c0c0'});
			});
			$(window).resize(function(){
				$('.main-menu ul').css({
					'border-color':hex
				});
			});
		},
		DefaultValue: '#237dc8'
	});
});

// reset to default

$(document).ready(function(){
	var reset = $('.reset_button');
	var valueNull = $('#colorSelector');
	reset.click(function(){
		if(valueNull.val().length){
			window.location.reload();
		}
	});
});

$(document).ready(function(){
	
	var $defaultColor = $("#colorSelector");
	var $hoverButton = $(".apply_button");
	var $hoverButtonColor = $("#hoverButton");
	
	$hoverButton.click(function(){
		$(".join-button,.featured-work-description a,.fancy_button, .portfolio_description a,.small_button_style_3,.small_button_style_1,.medium_button_style_1,.large_button_style_1,.large_button_style_3,.medium_button_style_3,.large_button_style_4,.medium_button_style_4,.small_button_style_4,.large_button_style_5,.medium_button_style_5,.small_button_style_5").hover(function(){
			$(this).css({'background-color':$hoverButtonColor.val()});
			$(this).find('span').css({'border-bottom-color':$hoverButtonColor.val()})
		},function(){
			$(this).css({'background-color':$defaultColor.val()});
			$(this).find('span').css({'border-bottom-color':$defaultColor.val()})
		});
		$('.search-button,.portfolio_navigation>li>a.selected').hover(function(){
			$(this).css({'background-color':$hoverButtonColor.val()});
			$(this).find('span').css({'border-top-color':$hoverButtonColor.val()})
		},function(){
			$(this).css({'background-color':$defaultColor.val()});
			$(this).find('span').css({'border-top-color':$defaultColor.val()})
		});
	});
	
});

// youtube fix

$(document).ready(function(){
    $('iframe').each(function(){
          var url = $(this).attr("src");
          var char = "?";
          if(url.indexOf("?") != -1){
                  var char = "&";
           }
         
          $(this).attr("src",url+char+"wmode=transparent");
    });
});

if($("#carousel_process").length){
$(window).load(function(){
	$('#carousel_process').carouFredSel({
	responsive: true,
	width: "auto",
	auto: false,
	circular	: true,
	infinite	: false,
	prev : {
		button		: "#car_process_prev",
		key			: "left",
			},
	next : {
		button		: "#car_process_next",
		key			: "right",
				},
	swipe: {
		onMouse: true,
		onTouch: true
		},
	items: {
		width: 240,
		visible: {
			min: 1,
			max: 4
		},
		height: 'auto'
	}
	});
});
}

if($("#latest_post_carousel").length){
$(window).load(function(){
	$('#latest_post_carousel').carouFredSel({
	responsive: true,
	width: "auto",
	auto: false,
	circular	: true,
	infinite	: false,
	prev : {
		button		: "#latest_post_prev",
		key			: "left",
			},
	next : {
		button		: "#latest_post_next",
		key			: "right",
				},
	swipe: {
		onMouse: true,
		onTouch: true
		},
	items: {
		width: 219,
		height: 'auto',
		visible: {
			min: 1,
			max: 1
		}
	}
	});
});
}
if($("#portfolio_carousel").length){
$(window).load(function(){
	$('#portfolio_carousel').carouFredSel({
	responsive: true,
	width: "auto",
	auto: false,
	circular	: true,
	infinite	: false,
	prev : {
		button		: "#portfolio_prev",
		key			: "left",
			},
	next : {
		button		: "#portfolio_next",
		key			: "right",
				},
	swipe: {
		onMouse: true,
		onTouch: true
		},
	items: {
		width: 730,
		height: 'auto',
		visible: {
			min: 1,
			max: 1
		}
	}
});
});
}


if($("#post_carousel").length){
$(window).load(function(){
	$('#post_carousel').carouFredSel({
	responsive: true,
	width: "auto",
	auto: false,
	circular	: true,
	infinite	: false,
	prev : {
		button		: "#post_prev",
		key			: "left",
			},
	next : {
		button		: "#post_next",
		key			: "right",
				},
	swipe: {
		onMouse: true,
		onTouch: true
		},
	items: {
		width: 729,
		height: 'auto',
		visible: {
			min: 1,
			max: 1
		}
	}
});
});
}
if($("#carousel_v4").length){
$(window).load(function(){
	$('#carousel_v4').carouFredSel({
	responsive: true,
	width: "auto",
	auto: false,
	circular	: true,
	infinite	: false,
	prev : {
		button		: "#post_prev",
		key			: "left",
			},
	next : {
		button		: "#post_next",
		key			: "right",
				},
	swipe: {
		onMouse: true,
		onTouch: true
		},
	items: {
		width: 729,
		height: 'auto',
		visible: {
			min: 1,
			max: 1
		}
	}
});
});
}

if($(".blog_small_images_carousel").length){
$(window).load(function(){
	$('.blog_small_images_carousel').carouFredSel({
	responsive: true,
	width: "auto",
	auto: false,
	circular	: true,
	infinite	: false,
	prev        : {
        button      : function() {
            return $(this).parents(".blog_small_image_part,.box_blog_carousel_container").find(".blog_small_prev");
        }
    },
    next        : {
        button      : function() {
            return $(this).parents(".blog_small_image_part,.box_blog_carousel_container").find(".blog_small_next");
        }
    },
	swipe: {
		onMouse: true,
		onTouch: true
		},
	items: {
		width: 281,
		visible: {
			min: 1,
			max: 1
		}
	}
	});
});
}

// isotope

if($('.portfolio-content').length){
var $container = $('.portfolio-content');
$container.imagesLoaded(function() {
$container.isotope({
	itemSelector: '.box-2-column',
	layoutMode: 'fitRows'
});
});
 $(window).smartresize(function(){
	  $container.isotope({
		// update columnWidth to a percentage of container width
		masonry: { columnWidth: $container.width() / 5 }
	  });
	});
 }
 if($('.portfolio-content-3-column').length){
var $container = $('.portfolio-content-3-column');
$container.imagesLoaded(function() {
$container.isotope({
	itemSelector: '.box-3-column',
	layoutMode: 'fitRows'
});
});
 $(window).smartresize(function(){
	  $container.isotope({
		// update columnWidth to a percentage of container width
		masonry: { columnWidth: $container.width() / 5 }
	  });
	});
 }
  if($('.portfolio-content-4-column').length){
var $container = $('.portfolio-content-4-column');
$container.imagesLoaded(function() {
$container.isotope({
	itemSelector: '.box-4-column',
	layoutMode: 'fitRows'
});
});
 $(window).smartresize(function(){
	  $container.isotope({
		// update columnWidth to a percentage of container width
		masonry: { columnWidth: $container.width() / 5 }
	  });
	});
 }
 
 if($('.blog_container_isotope').length){
		var $container = $('.blog_container_isotope');
	$container.imagesLoaded(function() {
		$container.isotope({
			itemSelector: '.box_blog',
			masonry: {
				columnWidth: 1
			}
		});
	});
}
 
 // isotope menu
 
 if($('.portfolio_navigation a').length){
$('.portfolio_navigation a').click(function(){
  var selector = $(this).attr('data-filter');
	$container.isotope({ 
	filter: selector,
	animationOptions: {
	 duration: 750,
	 easing: 'linear',
	 queue: false,
   }
  });
  return false;
});
}
if($('.portfolio_navigation').length){
var $optionSets = $('.portfolio_navigation'),
	  $optionLinks = $optionSets.find('a');

  $optionLinks.click(function(){
	var $this = $(this);
	// don't proceed if already selected
	if ( $this.hasClass('selected') ) {
	  return false;
	}
	var $optionSet = $this.parents('.portfolio_navigation');
	$optionSet.find('.selected').removeClass('selected');
	$this.addClass('selected').append("<span class='button-element'></span>");
	// make option object dynamically, i.e. { filter: '.my-filter-class' }
	var options = {},
		key = $optionSet.attr('data-option-key'),
		value = $this.attr('data-option-value');
	// parse 'false' as false boolean
	value = value === 'false' ? false : value;
	options[ key ] = value;
	return false;
  });
}

// tabs

$(function () {
    var tabContainers = $('div#tabs > div');
    tabContainers.hide().filter(':first').show(500).fadeIn(700);
    $('div#tabs ul.tabs-nav a').click(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).fadeIn(1000);
        $('div#tabs ul.tabs-nav a').removeClass('tab_selected');
		$('div#tabs ul.tabs-nav a').find("div").remove();
        $(this).addClass('tab_selected');
		$(this).append('<div class="tabs-selected-element1"><div class="tabs-selected-element2"></div><div class="tabs-selected-element3"></div></div>');
        return false;
    }).filter(':first').click();
});


// allert messages

$(function(){
	
	var $blue = $('.alert_information_message');
	var $yellow = $('.alert_warning_message');
	var $green = $('.alert_succes_message');
	var $red = $('.alert_error_message');
	
	$blue.append("<a class='close_message'></a>");
	$yellow.append("<a class='close_message'></a>");
	$green.append("<a class='close_message'></a>");
	$red.append("<a class='close_message'></a>");
	
	$('.close_message').click(function(){
		$(this).parent().animate({opacity:0},1000,function(){
			$(this).slideUp(600,function(){
				$(this).remove();
			})
		});
	});
	$('.ie8 .close_message').click(function(){
		$(this).animate({opacity:0},1000,function(){
			$(this).slideUp(600,function(){
				$(this).remove();
			});
		});
	});
});

// list types

$(function(){

	var $list_link = $('.list-type4>li>a');
	
	$list_link.append("<div class='list_icon_container'><div class='active_link_icon'></div><div class='no_active_link_icon'></div></div>");

});

//tables 
$(function(){
	$('table tr:nth-child(2n)').addClass('table-light-row');
});

$(function(){
	$('.list_of_services div:nth-child(2n+1)').addClass('pricing-table-light-row');
});

// forms

$(function(){
	$('#uploadfile').click(function(){
		$('#upfile').trigger('click');
	});
});

if($("#time_container").length){
function clock() {
	var now = new Date();
	var outStrHours = (now.getHours() < 10) ? ("0" + now.getHours()) : (now.getHours());
	var outStrMinutes = (now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes());
	var outStrSeconds = (now.getSeconds() < 10) ? ("0" + now.getSeconds()) : (now.getSeconds());
	document.getElementById('time_hour').innerHTML=outStrHours;
	document.getElementById('time_minute').innerHTML=outStrMinutes;
	document.getElementById('time_second').innerHTML = outStrSeconds;
	setTimeout('clock()',1000);
}
clock();
}

// audio

$(document).ready(function(){
	$('.audio_controls li:first-child+li+li a').click(function(){
		if($(this).hasClass('audio_list')){
			$(this).removeClass('audio_list');
		}
		else{
			$(this).addClass('audio_list')
		}
	});
});

$(function(){
	$('.player_controls li a').on('click' , function(){
		$(this).find('img').toggleClass('m_top_0');
	});
});

$(function(){

	var $fstar = $('.popular_list>li:first-child>a');
	var $secstar = $('.popular_list>li:first-child+li>a');
	var $thrstar = $('.popular_list>li:first-child+li+li>a');
	var $frstar = $('.popular_list>li:first-child+li+li+li>a');
	var $fvstar = $('.popular_list>li:first-child+li+li+li+li>a');
	
	$fstar.click(function(){
		$(this).addClass("active_popular");
		$secstar.removeClass("active_popular");
		$thrstar.removeClass("active_popular");
		$frstar.removeClass("active_popular");
		$fvstar.removeClass("active_popular");
	});
	$secstar.click(function(){
		$secstar.addClass("active_popular");
		$thrstar.removeClass("active_popular");
		$frstar.removeClass("active_popular");
		$fvstar.removeClass("active_popular");
	});
	$thrstar.click(function(){
		$secstar.addClass("active_popular");
		$thrstar.addClass("active_popular");
		$frstar.removeClass("active_popular");
		$fvstar.removeClass("active_popular");
	});
	$frstar.click(function(){
		$secstar.addClass("active_popular");
		$thrstar.addClass("active_popular");
		$frstar.addClass("active_popular");
		$fvstar.removeClass("active_popular");
	});
	$fvstar.click(function(){
		$secstar.addClass("active_popular");
		$thrstar.addClass("active_popular");
		$frstar.addClass("active_popular");
		$fvstar.addClass("active_popular");
	});
});

// contact

(function() {

		if($('#contactform').length) {

			var $form = $('#contactform'),
			$loader = '<img src="http://smartframeworkbd.com/images/form-preloader.gif" alt="Loading..." />';
			$form.children("fieldset").append('<div id="contact_form_responce">');
			var $response = $('#contact_form_responce');
			$response.append('<p></p>');

			$form.submit(function(e){
				
				$response.find('p').removeClass();
				$response.find('p').html($loader);
				
				var data = {
					action: "contact_form_request",
					values: $("#contactform").serialize()
				};

				//send data to server
				$.post("http://smartframeworkbd.com/send-message.php", data, function(response) {

					response = $.parseJSON(response);
					
					$(".wrong-data").removeClass("wrong-data");
					$response.find('img').remove();

					if(response.is_errors){
						
						$response.find('p').removeClass().addClass("alert_error_message");
						$.each(response.info,function(input_name, input_label) {

							$("[name="+input_name+"]").addClass("wrong-data");
							$response.find('p').append(input_label+ '</br>');
						});

					} else {
						$response.find('p').removeClass().addClass('alert_succes_message');

						if(response.info == 'success'){
							$response.find('p').append('Your message has been successfully sent!');
								$response.delay(10000).hide(500,function(){
									$(this).removeClass().text("").fadeIn(500);
								});
								$form.find('input:not(input[type="submit"], button), textarea, select').val('').attr( 'checked', false );
						}

						if(response.info == 'server_fail'){
							$response.find('p').append('Server failed. Send later!');
						}
					}

					// Scroll to bottom of the form to show respond message
					var bottomPosition = $form.offset().top + $form.outerHeight() - $(window).height();

					if($(document).scrollTop() < bottomPosition) {
						$('html, body').animate({
							scrollTop : bottomPosition
						});
					}

					if(!$('#contact_form_responce').css('display') == 'block') {
						$response.show(450);
					}

				});

				e.preventDefault();

			});				

		}

	})();
	
$(document).ready(function() {
	if ($('#tweets').length) {
		$('#tweets').tweet({
		username: '',
		count: 2,
		loading_text: 'loading twitter feed...',
		/* etc... */
	});
}
});

// menu
$(document).ready(function(){
	
	var container = $('.main-menu');
	menu_button = $('.menu_button');
	
	function resizer(){
		if($(window).width() < 767){
			container.hide();
			container.find('ul').css({
				'visibility':'visible',
				'opacity':'1',
				'display':'none'
			});
			menu_button.removeClass('menu_button_active');
			menu_button.unbind('click').on('click', function(){
				$(this).toggleClass('menu_button_active');
				container.slideToggle(500);
			});
			
			container.find('li').each(function(){
				if($(this).children('ul').length){
					$(this).children('a').removeAttr('href').css('cursor','pointer');
				}
			});
			
			container.find('a').unbind('click').on('click',function(){
				$(this).parent('li').toggleClass('active_item_devices');
				$(this).parent('li').siblings().removeClass('active_item_devices');
				$(this).next('ul').slideToggle(500);
				$(this).parent().siblings().children('ul').slideUp(500);
			});
		}
		else if ($(window).width() > 767){
			container.find('a').off('click');
			container.removeAttr('style');
			container.find('ul').removeAttr('style');
		}
	}
	resizer();
	if((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPad") != -1)){
		$(window).off('resize');
		$(window).on('orientationchange', resizer);

	} else {
		$(window).on('resize', resizer);
	}
});