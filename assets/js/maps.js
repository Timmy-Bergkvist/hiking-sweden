
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
  let types = document.getElementById('type-selector');

  let all = document.getElementById('changetype-all');

  let north = document.getElementById('changetype-north');
  
  let south = document.getElementById('changetype-south');

  
  


  $(document).ready(function(){
    $("#changetype-north").click(function(){
      //on click display all elements in north
      $("locations");
      //on click display content
      $("markers").on('click',function(){
        $("content");
      });
    });
  
    
    $("#changetype-south").click(function(){
      //on click display all elements in south
      alert("button south test");
    });

    $("#reset").click(function(){
      alert("reset test");
    });
  });

  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent);
  var marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
  });
/*------------location and content for North------------*/
  let locations = [
    ["Nationalpark1", 66.929681, 20.220471 ], //Nationalpark
    ["Nationalpark2", 67.283337, 17.700021 ], //Nationalpark
    ["Nationalpark3", 63.971291, 18.055406 ], //Nationalpark
    ["Nationalpark4", 63.119522, 18.493946 ]  //Nationalpark
  ];
  
  let content = [
    ["Nationalpark1", "<div>" +
    "<h3>text</h3>" +
    "<p>text.</p>" +
    "<p>text</p>" +
    "<p>text<a  href='#' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
    "<p></p>" +
    "</div>"],
    ["Nationalpark2", "<div>" +
    "<h3>text</h3>" +
    "<p>text.</p>" +
    "<p>text</p>" +
    "<p>text<a  href='#' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
    "<p></p>" +
    "</div>"],
    ["Nationalpark3", "<div>" +
    "<h3>text</h3>" +
    "<p>text.</p>" +
    "<p>text</p>" +
    "<p>text<a  href='#' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
    "<p></p>" +
    "</div>"],
    ["Nationalpark4", "<div>" +
    "<h3>text</h3>" +
    "<p>text.</p>" +
    "<p>text</p>" +
    "<p>text<a  href='#' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
    "<p></p>" +
    "</div>"]
  ];
  /*-----------------------------------------------------*/

  /*------------location and content for South------------*/
  /*
  let locationsSouth = [
    ["Nationalpark5", ], //Nationalpark
    ["Nationalpark6", ], //Nationalpark
    ["Nationalpark7", ], //Nationalpark
    ["Nationalpark8", ]  //Nationalpark
  ];

  let = contentSouth [
    ["Nationalpark5"]
    ["Nationalpark6"]
    ["Nationalpark7"]
    ["Nationalpark8"]
  ];*/
  /*-----------------------------------------------------*/
/*
  let locations = [
    { lat: 66.929681, lng: 20.220471 }, //Nationalpark
    { lat: 67.283337, lng: 17.700021 }, //Nationalpark
    { lat: 63.971291, lng: 18.055406 }, //Nationalpark
    { lat: 63.119522, lng: 18.493946 }  //Nationalpark
  ];*/


  let markers = [];

  for (var i = 0; i < locations.length; i++) {
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        title: locations[i][0]
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            ginfowindow.setContent(content[i][1]);
            ginfowindow.open(map, marker);
        };
    })(marker, i));
    markers.push(marker);
}


  let markerCluster = new MarkerClusterer(map, markers,
    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}


/*let labels = [];
  
  let markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  }); */
/*--------------a reset click function----------------*/


/*-----------------------------------------------------*/

