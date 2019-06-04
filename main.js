$( document ).ready(function() {
	var $grid = $('.grid').isotope({
		// options...
		itemSelector: '.grid-item',
		sortBy: 'random'
	});

	// layout Isotope after each image loads
	$grid.imagesLoaded().progress( function() {
		$grid.isotope('layout');

	// filter items on button click
		$('.filter-button-group').on( 'click', 'li', function() {
		  var filterValue = $(this).attr('data-filter');
			  $('.grid').isotope({ filter: filterValue });
			  $('.filter-button-group li').removeClass('active');
			  $(this).addClass('active');
		});

	});
});


