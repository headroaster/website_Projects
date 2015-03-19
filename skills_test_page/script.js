$(document).ready(function() {
		   
			$("head").append("<title>headroaster.space</title>");
		    $("body").prepend("<h1>welcome to headroaster.space</h1>");
		    $("body").append("<img src='http://i.imgur.com/pQ3tu1x.png' />");
		    $("body").append("<img id = 'two' src='http://i.imgur.com/TT8lGRc.jpg' />");
		    $("body").append("<div class='primary'></div>");
			
		    for (n=0; n<6; n++){$("body").append("<div class='secondary'></div>");};
	    	$("body").append("<div class='tertiary'></div>");
			$("body").append("<p id='clicks'></p>");
			$("#clicks").append("<a href='indexed.html'><p>CLICKS</p></a>");
			
		
   			$('.secondary').fadeTo('fast', .5);   
		    $('.secondary').hover(function() {
		    	$(this).fadeTo('fast', 1);
		    },function(){
		    	$(this).fadeTo('fast', .5);
		    });

		    
			
			$(".primary").append("<p>Some placeholding words.</p>");
			$(".secondary").append("<p>A bit of text</p>");
			$(".tertiary").append("<p>Some other, kinda wider placeholding words...for the bottom part.</p>");
			
			
});
