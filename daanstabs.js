(function ( $ ) {
 
    $.fn.daansTabs = function(options) {
		 
		 var settings = $.extend({
            /* These are the defaults.*/
            duration: 1000,/*animatie-snelheid.*/
			background:"red",/*achtergrondkleur van de tabs.*/
			menuside:"right"/*de kant waar het menu staat.*/
			
        }, options );
		
		$(".tab-links").each(function() {
            $(this).css(settings.menuside, 0);
      	});
		
		
		/*vind elke a in een li en geef deze een href naar een id*/ 
		$("li a").each(function(n) {
            $(this).attr("href", "#tab" + n);
      	});
		/*vind elke div met class="tab" en geef deze een id*/	
		$(".tab").each(function(n) {
            $(this).attr("id", "tab" + n);
			$(this).css("background-color",settings.background);
			$(this).css(settings.menuside, 0);
      	});

		function changeTab () {
			/*hier wordt de href van een a opgeslagen*/
			var getHref = $(this).attr("href");
			
			/*hier worden alle andere tabs weggefade*/
			$('.daans-tabs ' + getHref).siblings().fadeOut(settings.duration);
			/*Hier wordt de goede tab ingeslide*/
			$('.daans-tabs ' + getHref).delay(settings.duration).animate({
        		width: 'toggle'
    		},settings.duration);
			/*Hier wordt de geklikte link op actief gezet*/
			$(this).parent('li').addClass('active').siblings().removeClass('active');
        }

		/*elke keer als er op een link is gedrukt wordt dit doorlopen*/
		$(".daans-tabs .tab-links a").on("click", changeTab);


    };
 
}( jQuery ));