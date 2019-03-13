
(function($) { 
	"use strict";
//For background slider


// for skill chat jquary
$(document).ready(function(e) {
//var windowBottom = $(window).height();
	var index=0;
	$(document).scroll(function(){
		var top = $('.technical').height()-$(window).scrollTop();
		if(top<-150){
			if(index==0){	
				
				$('.chart').easyPieChart({
					easing: 'easeOutBounce',
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});
				
			}
			index++;
		}
	});
});



// for banner height js
$(document).ready(function(e)  {
    var wi = $(window).width();  
		
		var wi = $(window).width();
 
        if (wi <= 767){
			var windowWidth = $(window).width();
			var windowHeight =$(window).height();
            $('.banner').css({'height':windowHeight -"50" });
            }
        else if (wi >= 768){
			var windowWidth = $(window).width();
			var windowHeight =$(window).height();
            $('.banner').css({'height':windowHeight -"140" });
            }
});

// for banner height js
$(window).resize(function(){
  var wi = $(window).width();  
		
		var wi = $(window).width();
 
        if (wi <= 767){
			var windowWidth = $(window).width();
			var windowHeight =$(window).height();
            $('.banner').css({'height':windowHeight -"50" });
            }
        else if (wi >= 768){
			var windowWidth = $(window).width();
			var windowHeight =$(window).height();
            $('.banner').css({'height':windowHeight -"140" });
            }
});

// Somth page scroll

$(document).ready(function(e)  {
  var wi = $(window).width();  
		
		var wi = $(window).width();
 
        if (wi <= 767){
			$(function() {
			  $('a[href*=#]:not([href=#])').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				  var target = $(this.hash);
				  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				  if (target.length) {
					$('html,body').animate({
					  scrollTop: target.offset().top -30
					}, 1000);
					return false;
				  }
				}
			  });
			});
            }
        else if (wi >= 768){
			$(function() {
			  $('a[href*=#]:not([href=#])').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				  var target = $(this.hash);
				  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				  if (target.length) {
					$('html,body').animate({
					  scrollTop: target.offset().top -140
					}, 1000);
					return false;
				  }
				}
			  });
			});
            }
});


// chart loding
$(window).load(function() {
	
	var chart = window.chart = $('.chart').data('easyPieChart');
	$('.js_update').on('click', function() {
		chart.update(Math.random()*100);
	});
});

}(jQuery));


