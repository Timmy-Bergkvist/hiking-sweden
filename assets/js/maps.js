
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
      $("locationsNorth");
      //on click display content
      $("markers").on('click',function(){
        $("contentNorth");
      });
    });
  
    
    $("#changetype-south").click(function(){
      //on click display all elements in south
      $("locationsSouth");
      //on click display content
      $("markers").on('click',function(){
        $("contentSouth");
      });
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
  let locationsNorth = [
    ["Muddus National Park", 66.929681, 20.220471 ], //Nationalpark
    ["Sarek National Park", 67.283337, 17.700021 ], //Nationalpark
    ["Björnlandets National Park", 63.971291, 18.055406 ], //Nationalpark
    ["Skuleskogen National Park", 63.119522, 18.493946 ],  //Nationalpark
    ["Pieljekaise National Park", 66.350583, 16.742662],  //Nationalpark
    ["Sånfjället National Park", 62.299990, 13.583215 ],  //Nationalpark
    ["Vadvetjåkka National Park", 68.539931, 18.434607 ]  //Nationalpark
  ];
  
  let content = [
    ["Muddus National Park", "<div>" +
    "<h3>Muddus National Park</h3>" +
    "<p>Muddus / Muttos National Park is the vast marshes and deep ancient forests.</p>" +
    "<p>There are large waterfalls, deep ravines, rocky outcrops and forests.</p>" +
    "<p>For more information <a  href='https://naturkartan.se/sv/nationalparker/muddus-nationalpark' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
    "<p><img src='./assets/images/muddus-nationalpark.jpg'></p>" +
    "</div>"],
    ["Sarek National Park", "<div>" +
    "<h3>Sarek National Park</h3>" +
    "<p>In Sarek there are our most dramatic markers; old forests, valleys covered by birch forest,</p>" +
    "<p>delta, mountain heaths and high mountain masses with glaciers and 2000-meter peaks.</p>" +
    "<p>For more information <a href='https://naturkartan.se/sv/nationalparker/sarek' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
    "<p><img src='./assets/images/sarek-nationalpark.jpg' class='rounded mx-auto d-block'></p>" +
    "</div>"],
    ["Björnlandets National Park", "<div>" +
    "<h3>Björnlandets National Park</h3>" +
    "<p>Experience the magnificent wilderness in one of the country's most valuable primeval forests.</p>" +
    "<p>In the national park of bearland there are two overnight berths, several resting places and an extensive trail system.</p>" +
    "<p>For more information <a  href='https://naturkartan.se/sv/nationalparker/bjornlandets-nationalpark-2' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
    "<p><img src='./assets/images/björnlandets-nationalpark.jpg' class='rounded mx-auto d-block'></p>" +
    "</div>"],
    ["Skuleskogen National Park", "<div>" +
    "<h3>Skuleskogen National Park</h3>" +
    "<p>In the Skuleskogen you will find one of the few remaining large forests in the coastal country.</p>" +
    "<p>Here you can hike for days, enjoy lush brook forests or go out on the barren hillsides and be enchanted by the powerful views.</p>" +
    "<p>For more information <a href='https://naturkartan.se/sv/nationalparker/skuleskogen-nationalpark' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
    "<p><img src='./assets/images/Skuleskogen-nationalpark.jpg' class='rounded mx-auto d-block'></p>" +
    "</div>"],
    ["Pieljekaise National Park", "<div>" +
    "<h3>Pieljekaise National Park</h3>" +
    "<p>Pieljekaise National Park is located in the Arjeplogsfjällen, between Jäkkvik and Adolfström. The highest mountain, 1,138 meters above sea level, is Pieljekaise, which also gave its national park its name.</p>" +
    "<p>In Sami, the mountain is called Bieljijgájse, which means the ear tips.</p>" +
    "<p>For more information <a href='https://naturkartan.se/sv/nationalparker/pieljekaise-nationalpark' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
    "<p><img src='./assets/images/pieljekaise-nationalpark.jpg' class='rounded mx-auto d-block'></p>" +
    "</div>"],
    ["Sånfjället National Park", "<div>" +
    "<h3>Sånfjället National Park</h3>" +
    "<p>Almost wherever you are in Härjedalen, Sonfjället's characteristic silhouette stands out on the horizon.</p>" +
    "<p>This is the bear's home. The area is today regarded as one of the country's most densely bearde</p>" +
    "<p>For more information <a href='https://naturkartan.se/sv/nationalparker/sanfjallet-nationalpark' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
    "<p><img src='./assets/images/sånfjället-nationalpark.jpg' class='rounded mx-auto d-block'></p>" +
    "</div>"],
    ["Vadvetjåkka National Park", "<div>" +
    "<h3>Vadvetjåkka National Park</h3>" +
    "<p>Vadvetjåkka is a small national park in a mountainous area northwest of Torneträsk at the border with Norway.</p>" +
    "<p>The park is named after the mountain Vadvetjåkka, which dominates the area. Here you go if you want to experience the real solitude, a rich mountain flora and deep cave systems.</p>" +
    "<p>For more information <a href='https://naturkartan.se/sv/nationalparker/vadvetjakka-nationalpark' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
    "<p><img src='./assets/images/vadvetjåkka-nationalpark.jpg' class='rounded mx-auto d-block'></p>" +
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
  var ginfowindow = new google.maps.InfoWindow({
    maxHeight: 300
});
  for (var i = 0; i < locationsNorth.length; i++) {
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locationsNorth[i][1], locationsNorth[i][2]),
        map: map,
        title: locationsNorth[i][0]
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

