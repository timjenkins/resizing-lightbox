$(document).scroll(function(){
	lightboxSizer.resizeLightbox(lightboxSizer.calcWidth());
});




var lightboxSizer = (function(){

	function resizeLightbox(newWidth){
		var lightBox = $('.lightbox');
		lightBox.css('width', newWidth);
		lightBox.css('margin-left', -(newWidth/2));
	}


	function scrollPercent(){
		var totalHeight = $(document).height();
		var viewport = $(window).height();
		var adjustedHeight = totalHeight - viewport;
		return ($(document).scrollTop()) / adjustedHeight;
	}

	function calcWidth(){
		var width = 800 - (((800/3)*2) * scrollPercent());
		return width;
	}

	return {
		resizeLightbox: resizeLightbox,
		calcWidth: calcWidth
	};

}());
