src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDV_4v7EGiKy6Hjba3aLnkxuGgNIOMlr7w&libraries=places"

let map, places, infoWindow;
      let autocomplete;
      let MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
      let hostnameRegexp = new RegExp('^https?://.+?/');

function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 62.577939, lng: 15.666002 },
    styles: [  // Stylising of the map, obtain from https://developers.google.com/maps/documentation/javascript/styling
      { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#c9b2a6' }]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#dcd2be' }]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#ae9e90' }]
      },
      {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [{ color: '#dfd2ae' }]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{ color: '#dfd2ae' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#93817c' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [{ color: '#a5b076' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#447530' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#f5f1e6' }]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{ color: '#fdfcf8' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#f8c967' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#e9bc62' }]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry',
        stylers: [{ color: '#e98d58' }]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#db8555' }]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#806b63' }]
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{ color: '#dfd2ae' }]
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#8f7d77' }]
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#ebe3cd' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{ color: '#dfd2ae' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [{ color: '#b9d3c2' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#92998d' }]
      }
    ],
    
  });

  
  let card = document.getElementById('pac-card');
  /*let input = document.getElementById('pac-input');*/
  let types = document.getElementById('type-selector');

  var autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.bindTo('bounds', map);
  
  // Sets a listener on a radio button to change the filter type on Places
  // Autocomplete.
  function setupClickListener(id, types) {
    let radioButton = document.getElementById(id);
    radioButton.addEventListener('click', function () {
      autocomplete.setTypes(types);
    });
  }

  setupClickListener('changetype-all', []);
  setupClickListener('changetype-north', ['north']);
  setupClickListener('changetype-south', ['south']);


  autocomplete.setupClickListener('place_changed', onPlaceChanged);
  document.getElementById('category').addEventListener('change', onPlaceChanged);

  // when a user choose a category 

  let locations = [
    ["Nationalpark1", 66.929681, 20.220471 ], //Nationalpark
    ["Nationalpark2", 67.283337, 17.700021 ], //Nationalpark
    ["Nationalpark3", 63.971291, 18.055406 ], //Nationalpark
    ["Nationalpark4", 63.119522, 18.493946 ]  //Nationalpark
  ];

  let = content [
    ["Nationalpark1"]
    ["Nationalpark2"]
    ["Nationalpark3"]
    ["Nationalpark4"]
  ];

  function clearResults() {
    let results = document.getElementById('results');
    while (results.childNodes[0]) {
      results.removeChild(results.childNodes[0]);
    }
  }
  /*-----------------------------------------------------*/

  let locations = [
    { lat: 66.929681, lng: 20.220471 }, //Nationalpark
    { lat: 67.283337, lng: 17.700021 }, //Nationalpark
    { lat: 63.971291, lng: 18.055406 }, //Nationalpark
    { lat: 63.119522, lng: 18.493946 }  //Nationalpark
  ];

  let labels = [];
  let markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });

  let markerCluster = new MarkerClusterer(map, markers,
    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}

/*--------------a reset click function----------------*/

function reset() {
    clearResults();
    clearMarkers();
    $('#category')[0].selectedIndex = 0;
    $("#autocomplete").val("");
    map.setZoom (4);
    map.setCenter ({ lat: 62.577939, lng: 15.666002 });
    place = "";
}

/*-----------------------------------------------------*/

