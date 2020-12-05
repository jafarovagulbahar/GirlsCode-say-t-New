(function ($) {
	'use strict';

	// Preloader js    
	// $(window).on('load', function () {
	// 	$('.preloader').fadeOut(700);
		   

	// });

	// Sticky Menu
	$(window).scroll(function () {
		var height = $('.top-header').innerHeight();
		if ($('header').offset().top > 10) {
			$('.top-header').addClass('hide');
			$('.navigation').addClass('nav-bg');
			$('.navigation').css('margin-top', '-' + height + 'px');
		} else {
			$('.top-header').removeClass('hide');
			$('.navigation').removeClass('nav-bg');
			$('.navigation').css('margin-top', '-' + 0 + 'px');
		}
	});

	// Background-images
	$('[data-background]').each(function () {
		$(this).css({
			'background-image': 'url(' + $(this).data('background') + ')'
		});
	});

	//Hero Slider
	$('.hero-slider').slick({
		autoplay: true,
		autoplaySpeed: 7500,
		pauseOnFocus: false,
		pauseOnHover: false,
		infinite: true,
		arrows: true,
		fade: true,
		prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
		nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>',
		dots: true
	});
	$('.hero-slider').slickAnimation();

	// venobox popup
	$(document).ready(function () {
		$('.venobox').venobox();
	});


	// filter
	$(document).ready(function () {
		var containerEl = document.querySelector('.filtr-container');
		var filterizd;
		if (containerEl) {
			filterizd = $('.filtr-container').filterizr({});
		}
		//Active changer
		$('.filter-controls li').on('click', function () {
			$('.filter-controls li').removeClass('active');
			$(this).addClass('active');
		});
	});

	//  Count Up
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});

})(jQuery);

// mail submit function

  $(document).on("click", '#submit', function (e) {

	var to="ceferovagulbahar4@gmail.com";
	var subject="Girls Code sayıtından mesaj var!";

	var from = $('#mail').val();  

	var text = $('#message').val();  

	$('#mail').val('');  

	$('#message').val('');  
	if(from == '' || text == '')  
	{  
		 $('#error_message').html("All Fields are required");  
	}  
	else  
	{  
		 $('#error_message').html('');  
		 $.ajax({  
			  url:"https://send-mail-app.herokuapp.com/send/mail",  
			  method:"POST",  
			  data: JSON.stringify({to:to, from:from,subject:subject,text:text}),  
			   dataType: "json",
			   contentType: "application/json; charset=utf-8",
			  success:function(data){  
				
				   $("form").trigger("reset");  
				   $('#success_message').fadeIn().html(data);  
				   setTimeout(function(){  
						$('#success_message').fadeOut("Slow");  
				   }, 500);  
			  }  
		 });  
	}  
});  


$(window).on('load', function () {
	console.log('onn');

	// var get_post=true;
	// var post_id=13;

	// $.ajax({  
	// 	url:"http://localhost/girls_code_az/",  
	// 	method:"POST",  
	// 	data: JSON.stringify({get_post:get_post, post_id:post_id}),  
	// 	// dataType: "json",
	// 	contentType: "multipart/form-data; boundary=<calculated when request is sent>",
	// 	success:function(data){  
	// 	  console.log(data)  
	// 	},
	// 	error: function(err) { 
	// 	   console.log("err");
	// 	} 
 //   });

	// $.ajax({
	// 	method: "POST",
	// 	url: "http://localhost/girls_code_az/"
	//   })
	//   .done(function(title){
	// 	$(".events p").text(title[13]);
	//   })
	//   .fail(function(){
	// 	alert("uh oh it failed");
	//   })
});