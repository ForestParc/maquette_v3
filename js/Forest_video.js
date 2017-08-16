$(function() { 
	
	var windowWidth= $(window).width();
	if(windowWidth < 420){
		 $(".video_etat1").html('<iframe src="https://player.vimeo.com/video/229723937"></iframe>');
        $(".video_etat1").removeClass("video_etat1").addClass("video_etat2");
	}
	   
});