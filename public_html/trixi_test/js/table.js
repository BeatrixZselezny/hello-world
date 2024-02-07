
     ;(function($) {
	     $.fn.fixMe = function () {
		     return this.each(function () {
			     var $this = $(this),
				     $t_fixed;
			     function init () {
				     $this.wrap('<div class="container"/>');
				     $t_fixed = $this.clone();
				     $t_fixed.find("tbody").remove().end().addClass("fixed").insertBefore($this);
				     resizeFixed();
				     }
			    function resizeFixed() {
				    $t_fixed.find("th").each(function(index) {
					    $(this).css("width",$this.find("th").eq(index).outerWidth()+"px");
				    });
			    }

				    $(window).resize(resizeFixed);
				    init();
			    });
		     };
	     })(jQuery);

             $(document).ready(function() {
		     $("table").fixMe();
			     $('html, body').animate({
			     }, 2000);
		     });
	 
