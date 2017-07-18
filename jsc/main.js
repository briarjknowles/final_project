function initMap() {

	var styles = [

	// adding specific styles to your map's image

		{
			stylers: [
				{ hue: '#00ffe6' },
				{ saturation: -20 }
			]
		},{
			featureType: 'road',
			elementType: 'geometry',
			stylers: [
				{ lightness: 100 },
				{ visibility: 'simplified' }
			]
		},{
			featureType: 'road',
			elementType: 'labels',
			stylers: [
				{visibility: 'off' }
			]
		}

	];

  		var map = new google.maps.Map(document.getElementById('map'), {

    		center: {lat: -34.397, lng: 150.644},
    		zoom: 8
	    	zoomControl: false,
	    	fullScreenControl: true,
	    	styles: styles

	});

	var marker = new google.maps.Marker({

		position: {lat: -34.397, lng: 150.644},
		map: map
	
	});

}

