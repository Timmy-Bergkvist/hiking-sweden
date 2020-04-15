

let search_wrapper = document.getElementsByClassName('search_wrapper');
let input = document.getElementById('search-input');
let select = document.getElementById('strict-bounds-selector');

//map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

let autocomplete = new google.maps.places.Autocomplete(input);

// Bind the map's bounds (viewport) property to the autocomplete object,
// so that the autocomplete requests use the current map bounds for the
// bounds option in the request.
autocomplete.bindTo('bounds', map);

// Set the data fields to return when the user selects a place.
autocomplete.setFields(
    ['address_components', 'geometry', 'icon', 'name']);

let infowindow = new google.maps.InfoWindow();
let infowindowContent = document.getElementById('infowindow-content');
infowindow.setContent(infowindowContent);
let marker = new google.maps.Marker({
  map: map,
  anchorPoint: new google.maps.Point(0, -29)
});

autocomplete.addListener('place_changed', function() {
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
  let radioButton = document.getElementById(id);
  radioButton.addEventListener('click', function() {
    autocomplete.setTypes(types);
  });
}

//a click listner for the radio buttons to change
//the lockations all , north and  south
function clickListener(id, types){
  let radioButton = document.getElementById(id);
  radioButton.addEventListener('click', function(){
    autocomplete.setTypes(types);
  });
}
clickListener('whole',[]);        //view-all
clickListener('north',['north']); //view-north
clickListener('south',['south']); //view-south
/*-----------------------------------------------------*/

