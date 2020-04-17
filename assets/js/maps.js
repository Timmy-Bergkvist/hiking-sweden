src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDV_4v7EGiKy6Hjba3aLnkxuGgNIOMlr7w&libraries=places"
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
  var card = document.getElementById('pac-card');
        var input = document.getElementById('pac-input');
        var types = document.getElementById('type-selector');
        

        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

        var autocomplete = new google.maps.places.Autocomplete(input);

        // Bind the map's bounds (viewport) property to the autocomplete object,
        // so that the autocomplete requests use the current map bounds for the
        // bounds option in the request.
        autocomplete.bindTo('bounds', map);

        // Set the data fields to return when the user selects a place.
        autocomplete.setFields(
            ['address_components', 'geometry', 'icon', 'name']);

        var infowindow = new google.maps.InfoWindow();
        var infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);
        var marker = new google.maps.Marker({
          map: map,
          anchorPoint: new google.maps.Point(0, -29)
        });

        autocomplete.addListener('place_changed', function() {
          infowindow.close();
          marker.setVisible(false);
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }

          // If the place has a geometry, then present it on a map.
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
          }
          marker.setPosition(place.geometry.location);
          marker.setVisible(true);

          var address = '';
          if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
          }

          infowindowContent.children['place-icon'].src = place.icon;
          infowindowContent.children['place-name'].textContent = place.name;
          infowindowContent.children['place-address'].textContent = address;
          infowindow.open(map, marker);
        });

        // Sets a listener on a radio button to change the filter type on Places
        // Autocomplete.
        function setupClickListener(id, types) {
          var radioButton = document.getElementById(id);
          radioButton.addEventListener('click', function() {
            autocomplete.setTypes(types);
          });
        }

        setupClickListener('changetype-all', []);
        setupClickListener('changetype-address', ['address']);
        setupClickListener('changetype-establishment', ['establishment']);


        
      
  /*
        / When the user enter a location.

function onPlaceChanged() {
    var place = autocomplete.getPlace();
    if ($("#accommodation").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(13);
            var search = {
                bounds: map.getBounds(),
                types: ['lodging']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a county");
        }
    }
    else if ($("#camping").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(13);
                search = {
                bounds: map.getBounds(),
                types: ['campground']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a town or city");
        }
    }
    else if ($("#attraction").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(13);
                search = {
                bounds: map.getBounds(),
                types: ['art_gallery', 'aquarium', 'amusement_park', 'museum', 'tourist_attraction', 'zoo']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a town or city");
        }
    }
    else if ($("#park").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(13);
                search = {
                bounds: map.getBounds(),
                types: ['park']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a town or city");
        }
    }
    else if ($("#stadium").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(13);
                search = {
                bounds: map.getBounds(),
                types: ['stadium']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a town or city");
        }
    }
    else if ($("#food").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(13);
                search = {
                bounds: map.getBounds(),
                types: ['cafe', 'restaurant', 'bakery']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a town or city");
        }
    }
}




  let search = document.getElementById('#div1');
  let input = document.getElementById('#search-input');
  let types = document.getElementById('#search-wrapper');

  map.controls[google.maps.ControlPosition.getElementById('#div1')].push(search);

  let autocomplete = new google.maps.places.Autocomplete(input);

  // Bind the map's bounds (viewport) property to the autocomplete object,
  // so that the autocomplete requests use the current map bounds for the
  // bounds option in the request.
  autocomplete.bindTo('bounds', map);

  // Set the data fields to return when the user selects a place.
  autocomplete.setFields(
    ['nationalparks', 'geometry', 'icon', 'name']);

  let infowindow = new google.maps.InfoWindow();
  let infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent);
  let marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });

  autocomplete.addListener('place_changed', function () {
    infowindow.close();
    marker.setVisible(false);
    let place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    let address = '';
    if (place.nationalparks) {
      address = [
        (place.nationalparks[0] && place.nationalparks[0].short_name || ''),
        (place.nationalparks[1] && place.nationalparks[1].short_name || ''),
        (place.nationalparks[2] && place.nationalparks[2].short_name || '')
      ].join(' ');
    }

    infowindowContent.children['place-icon'].src = place.icon;
    infowindowContent.children['place-name'].textContent = place.name;
    infowindowContent.children['place-address'].textContent = address;
    infowindow.open(map, marker);
    */
    /*-----------------------------------------------------*/
    //a click listner for the radio buttons to change
    //the lockations whole sweden , north and  south
    /*
    function setupClickListener(id, types) {
      let radioButton = document.getElementById(id);
      radioButton.addEventListener('click', function () {
        autocomplete.setTypes(types);
      });
    }
    setupClickListener('whole', []);        //view-all
    setupClickListener('north', ['north']); //view-north
    setupClickListener('south', ['south']); //view-south
    
    
  });
  */
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
/*
function reset() {
  $('#category')[0].selectedIndex = 0;
  $("#search-input").val("");
  $('#locationContainer').html("");
  place = "";
}
*/
/*-----------------------------------------------------*/

