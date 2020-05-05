
//Most of the information to make google maps can you get here:
//https://developers.google.com/maps/documentation/javascript/examples/place-details
//Some of the code and inspiration was obtained from:
//https://jsudron.github.io/Nordic-Discovery-Project/index.html

let map, places, infoWindow;
let markers = [];
let autocomplete;
let MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
let hostnameRegexp = new RegExp('^https?://.+?/');

let countries = {
  'se': {                     
    center: { lat: 62.8, lng: 15.6 },
    zoom: 4
  }
};

//Reset function to reset all the results and options.

function reset() {
  clearResults();
  clearMarkers();
  $('#category')[0].selectedIndex = 0;
  $("#autocomplete").val("");
  $('#results-heading').html("");
  map.setZoom(countries['se'].zoom);
  map.setCenter(countries['se'].center);
  $('#information-container').show();
  place = "";
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    zoom: countries['se'].zoom,
    center: countries['se'].center,
    mapTypeControl: false,
    panControl: false,
    streetViewControl: false,
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

  //Location, Trails and content.
  
  let nationalParkLocations = [
    //Index for Nationalparks locations North:
    ["Muddus National Park", 66.929681, 20.220471],
    ["Sarek National Park", 67.283337, 17.700021],
    ["Björnlandets National Park", 63.971291, 18.055406],
    ["Skuleskogen National Park", 63.119522, 18.493946],
    ["Pieljekaise National Park", 66.350583, 16.742662],
    ["Sånfjället National Park", 62.299990, 13.583215],
    ["Vadvetjåkka National Park", 68.539931, 18.434607],
    //Index for Nationalpark locations South:
    ["Ängsö National Park", 59.621690, 18.764867],
    ["Tiveden National Park", 58.717104, 14.606406],
    ["Garphyttan National Park", 59.278629, 14.883532],
    ["Norra Kvill National Park", 57.762927, 15.593638],
    ["Tresticklan National Park", 59.044018, 11.795059],
    ["Åsnens National Park", 56.643113, 14.651639],
    ["Dalby Söderskog National Park", 55.676284, 13.330185]
  ];

  let hikingLocations = [
    //Index for Hiking trails locations North:
    ["Bergslagsleden", 59.895249, 15.286127],
    ["Kebnekaise Around", 67.868110, 18.620005],
    ["Solanderleden", 65.142164, 21.504825],
    ["Isälvsleden", 64.208718, 19.724474],
    ["kungsleden Abisko", 68.358473, 18.782304],
    ["Kungsleden Saltoluokta", 67.394106, 18.520452],
    ["Vasaloppsleden", 61.105255, 13.298212],
    //Index for Hiking trails locations South:
    ["Bohusleden", 57.576861, 12.078465],
    ["Sörmlandsleden", 59.167825, 18.238210],
    ["Blekingeleden", 56.050123, 14.583317],
    ["Upplandsleden", 59.468613, 17.403918],
    ["Öland", 56.668273, 16.487067],
    ["Smålandslederna", 57.358761, 13.737409],
    ["Ostkustleden", 57.276451, 16.379862]
  ];

  let nationalParkContent = [
    //Index for Nationalparks content North:
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
      "</div>"],
    //Index for Nationalparks content South:
    ["Ängsö National Park", "<div>" +
      "<h3>Ängsö National Park</h3>" +
      "<p>At the heart of Roslagen lies Ängsö, well known for its floral splendor. Species richness is a result of the interaction between man and nature.</p>" +
      "<p>The landscape is kept open with mowing and grazing animals.</p>" +
      "<p>For more information <a href='https://naturkartan.se/sv/nationalparker/angso-nationalpark-2' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/ängsö-nationalpark.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"],
    ["Tiveden National Park", "<div>" +
      "<h3>Tiveden National Park</h3>" +
      "<p>Enjoy the wilderness feeling in a hilly and wild forest landscape with dramatic crack valleys, beautiful forest lakes, giant blocks at Stenkälla,</p>" +
      "<p>views from the Trollkyrkobergen and the beach at Vitsand.</p>" +
      "<p>For more information <a href='https://naturkartan.se/sv/nationalparker/tiveden-nationalpark' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/tiveden-nationalpark.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"],
    ["Garphyttan National Park", "<div>" +
      "<h3>Garphyttan National Park</h3>" +
      "<p>Garphyttan National Park offers you many opportunities for varied and rich nature experiences.</p>" +
      "<p>Garphyttan National Park was founded in 1909 and is one of Sweden's oldest national parks.</p>" +
      "<p>For more information <a href='https://naturkartan.se/sv/nationalparker/garphyttan-nationalpark' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/garphyttan-nationalpark.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"],
    ["Norra Kvill National Park", "<div>" +
      "<h3>Norra Kvill National Park</h3>" +
      "<p>In the park opens a magical world of rolling moss mats, boulders in abundance, coarse spruce and pine giants and water lily-covered tarns.</p>" +
      "<p>As untouched forest in southern Sweden, the central parts of Norra Kvill maintain uniquely high quality with great natural values. The area is also a major attraction.</p>" +
      "<p>For more information <a href='https://naturkartan.se/sv/nationalparker/norra-kvill-nationalpark' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/norra-kvill-nationalpark.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"],
    ["Tresticklan National Park", "<div>" +
      "<h3>Tresticklan National Park</h3>" +
      "<p>The Tresticklan area is an unusually large forest area for Götaland without buildings and roads.</p>" +
      "<p>The nature is characterized by narrow and high ridges that extend in a north-south direction.</p>" +
      "<p>For more information <a href='https://naturkartan.se/sv/nationalparker/tresticklan-nationalpark' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/tresticklan-nationalpark.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"],
    ["Åsnens National Park", "<div>" +
      "<h3>Åsnens National Park</h3>" +
      "<p>Åsnen National Park offers a Sweden in miniature. Almost all environments are here; shimmering noble leaves, large coniferous forests, lake shores, marshes and reefs.</p>" +
      "<p>Unique to the area is the archipelago that unfolds a band of quiet islands where the trees are old and time seems to stand still</p>" +
      "<p>For more information <a href='https://naturkartan.se/sv/nationalparker/asnens-nationalpark' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/åsnens-nationalpark.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"],
    ["Dalby Söderskog National Park", "<div>" +
      "<h3>Dalby Söderskog National Park</h3>" +
      "<p>Dalby Söderskog is Sweden's smallest national park and is the most beautiful in the spring.</p>" +
      "<p>A concert of bird song and a carpet of white sips, yellow sips and bunnies will meet you at the end of April / May.</p>" +
      "<p>For more information <a href='https://naturkartan.se/sv/nationalparker/dalby-soderskog-nationalpark' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/dalby-söderskog-nationalpark.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"]

  ];

  let hikingContent = [
    //Index for Hiking trails content North:
    ["Bergslagsleden", "<div>" +
      "<h3>Bergslagsleden</h3>" +
      "<p>The trail is divided into 17 stages. The hike are between 280 kilometers long.</p>" +
      "<p>The stretch of the mountain trail is gradually supplemented on the Nature Map.</p>" +
      "<p>For more information <a href='https://www.bergslagsleden.se/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/bergslagsleden.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"],
    ["Kebnekaise Around", "<div>" +
      "<h3>Kebnekaise Around</h3>" +
      "<p>The trail is divided into 6 stages. The hike are between 76  kilometers long</p>" +
      "<p>Impressive peaks, steep slopes and large glaciers make your way across the moors around Sweden's highest mountain, Kebnekaise</p>" +
      "<p>For more information <a href='https://www.svenskaturistforeningen.se/guider-tips/leder/kebnekaise-runt/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/kebnekaise-runt.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"],
    ["Solanderleden", "<div>" +
      "<h3>Solanderleden</h3>" +
      "<p>The trail is divided into 4 stages. The hike are between 24,5  kilometers long</p>" +
      "<p>footpath extending between Luleå in the north and the coastal village of Jävre in the south.</p>" +
      "<p>For more information <a href='https://www.svenskaturistforeningen.se/guider-tips/leder/solanderleden/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/solanderleden.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"],
    ["Isälvsleden", "<div>" +
      "<h3>Isälvsleden</h3>" +
      "<p>The trail is divided into 6 stages. The hike are between 60 kilometers long</p>" +
      "<p>Trail from Vindeln to Åmsele. The nature you walk in has got its exciting and dramatic form of the inland ice.</p>" +
      "<p>For more information <a href='https://www.svenskaturistforeningen.se/guider-tips/leder/isalvsleden/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/isälvsleden.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"],
    ["kungsleden Abisko", "<div>" +
      "<h3>kungsleden Abisko</h3>" +
      "<p>The trail is divided into 7 stages. The hike are between 108  kilometers long</p>" +
      "<p>In the beginning of the 20th century, a continuous hiking trail in the mountain world in Swedish Lapland.</p>" +
      "<p>For more information <a href='https://www.svenskaturistforeningen.se/guider-tips/leder/abisko-nikkaluokta/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/kungsleden-abisko.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"],
    ["Kungsleden Saltoluokta", "<div>" +
      "<h3>Kungsleden Saltoluokta</h3>" +
      "<p>The trail is divided into 4 stages. The hike are between 73  kilometers long</p>" +
      "<p>Kungsleden, in the borderland between Sarek's high mountains to the west and forest landscapes to the east.</p>" +
      "<p>For more information <a href='https://www.svenskaturistforeningen.se/guider-tips/leder/saltoluokta-kvikkjokk/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/kungsleden-altoluokta.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"],
    ["Vasaloppsleden", "<div>" +
      "<h3>Vasaloppsleden</h3>" +
      "<p>The trail is divided into 5 stages. The hike are between 90  kilometers long</p>" +
      "<p>One of Sweden's most appreciated hiking trails between Berga village and Mora </p>" +
      "<p>For more information <a href='https://www.svenskaturistforeningen.se/guider-tips/leder/vasaloppsleden/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/vasaloppsleden.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"],
    //Index for Hiking trails content South:
    ["Bohusleden", "<div>" +
      "<h3>Bohusleden</h3>" +
      "<p>The trail is divided into 27 stages. The hike are between 37 kilometers long</p>" +
      "<p>The Bohus Trail extends from Lindome in Halland to Strömstad in Bohuslän. On the road there are rest areas with shelters, fireplaces, toilets.</p>" +
      "<p>For more information <a href='https://naturkartan.se/sv/bohusleden' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/bohusleden.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"],
    ["Sörmlandsleden", "<div>" +
      "<h3>Sörmlandsleden</h3>" +
      "<p>The trail has optionally stages and that are between 1 000 kilometers long</p>" +
      "<p>The trail starts almost in the middle of Stockholm and passes cities such as Södertälje, Katrineholm and Nyköping.</p>" +
      "<p>For more information <a href='https://www.svenskaturistforeningen.se/guider-tips/leder/sormlandsleden/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/sörmlandsleden.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"],
    ["Blekingeleden", "<div>" +
      "<h3>Blekingeleden</h3>" +
      "<p>The trail is divided into 6 stages. The hike are between 103 kilometers long</p>" +
      "<p>Access to toilets and water at most stages. Some days you pass communities with grocery stores.</p>" +
      "<p>For more information <a href='https://www.svenskaturistforeningen.se/guider-tips/leder/blekingeleden/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/blekingeleden.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"],
    ["Upplandsleden", "<div>" +
      "<h3>Upplandsleden</h3>" +
      "<p>The trail has optionally stages and that are between 500 kilometers long</p>" +
      "<p>The Upplands trail starts at Lake Mälaren, goes in an arch up to Gävle and ends at the Dalälven archipelago</p>" +
      "<p>For more information <a href='https://www.svenskaturistforeningen.se/guider-tips/leder/upplandsleden/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/upplandsleden.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"],
    ["Öland", "<div>" +
      "<h3>Öland</h3>" +
      "<p>The trail is divided into 5 stages. The hike are between 84  kilometers long</p>" +
      "<p>The hiking trail passes large parts of Öland and thus there are a variety of things to do along the way</p>" +
      "<p>For more information <a href='https://www.svenskaturistforeningen.se/guider-tips/leder/signaturled-oland/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/öland.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"],
    ["Smålandslederna", "<div>" +
      "<h3>Smålandslederna</h3>" +
      "<p>The trail is divided into 4 stages. The hikeare between 39  kilometers long</p>" +
      "<p>The Smålands Trail is a combination of the hiking trails Västra and Södra Vätterleden.</p>" +
      "<p>For more information <a href='https://www.svenskaturistforeningen.se/guider-tips/leder/smalandslederna/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/smålandsleden.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"],
    ["Ostkustleden", "<div>" +
      "<h3>Ostkustleden</h3>" +
      "<p>The trail is divided into 6 stages. The hike are between 160  kilometers long</p>" +
      "<p>The east coast route is a tour that starts and ends in Lilla Hycklinge in Småland. The tour takes eight days.</p>" +
      "<p>For more information <a href='https://www.svenskaturistforeningen.se/guider-tips/leder/ostkustleden/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
      "<p><img src='./assets/images/ostkustleden.jpg' class='rounded mx-auto d-block'></p>" +
      "</div>"]

  ];

  let markers = [];
  let ginfowindow = new google.maps.InfoWindow({
    maxHeight: 300
  });

  //Displays National parks locations:

  for (let i = 0; i < nationalParkLocations.length; i++) {
    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(nationalParkLocations[i][1], nationalParkLocations[i][2]),
      map: map,
      title: nationalParkLocations[i][0]
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        ginfowindow.setContent(nationalParkContent[i][1]);
        ginfowindow.open(map, marker);
      };
    })(marker, i));
    markers.push(marker);
  }

  //Displays Hiking trails locations:

  for (let i = 0; i < hikingLocations.length; i++) {
    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(hikingLocations[i][1], hikingLocations[i][2]),
      map: map,
      title: hikingLocations[i][0]
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        ginfowindow.setContent(hikingContent[i][1]);
        ginfowindow.open(map, marker);
      };
    })(marker, i));
    markers.push(marker);
  }

  let markerCluster = new MarkerClusterer(map, markers,
    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

infoWindow = new google.maps.InfoWindow({
  content: document.getElementById('info-content')
});
  
// Create the autocomplete object and associate it with the UI input control.
// Restrict the search to the default country, and to place type "cities".

  autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */
    (
        document.getElementById('autocomplete')), {
    types: ['(cities)'],
    componentRestrictions: { country: ['se'] }
});
places = new google.maps.places.PlacesService(map);


// Add a DOM event listener to react when the user selects a category.

autocomplete.addListener('place_changed', onPlaceChanged);
document.getElementById('category').addEventListener('change', onPlaceChanged);
$('#information-container').show();
}

// When the user selects a city, they will get the place details for the city and
// zoom the map in on the city.

function onPlaceChanged() {
  let place = autocomplete.getPlace();
  if ($("#accommodation").is(':selected')) {
      if (place.geometry) {
          map.panTo(place.geometry.location);
          map.setZoom(13);
          let search = {
              bounds: map.getBounds(),
              types: ['lodging']
          };
          doNearbySearch(search);
      }
      else {
          $('#autocomplete').attr("placeholder", "Enter a city");
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
          $('#autocomplete').attr("placeholder", "Enter a city");
      }
  }
  else if ($("#attraction").is(':selected')) {
      if (place.geometry) {
          map.panTo(place.geometry.location);
          map.setZoom(13);
              search = {
              bounds: map.getBounds(),
              types: ['tourist_attraction']
          };
          doNearbySearch(search);
      }
      else {
          $('#autocomplete').attr("placeholder", "Enter a city");
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
          $('#autocomplete').attr("placeholder", "Enter a city");
      }
  }
  else if ($("#travel_agency").is(':selected')) {
      if (place.geometry) {
          map.panTo(place.geometry.location);
          map.setZoom(13);
              search = {
              bounds: map.getBounds(),
              types: ['travel_agency']
          };
          doNearbySearch(search);
      }
      else {
          $('#autocomplete').attr("placeholder", "Enter a city");
      }
  }
}

// Search for the selected category in the selected city, within the viewport of the map.

function doNearbySearch(search) {

  places.nearbySearch(search, function (results, status) {

      if (status === google.maps.places.PlacesServiceStatus.OK) {
          clearResults();
          clearMarkers();
          document.getElementById('results-heading').innerHTML = "Results";
          $('#information-container').hide();

          // Create a marker for each category found, and
          // assign a letter of the alphabetic to each marker icon.

          for (let i = 0; i < results.length; i++) {
              let markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
              let markerIcon = MARKER_PATH + markerLetter + '.png';

              // Use marker animation to drop the icons incrementally on the map.

              markers[i] = new google.maps.Marker({
                  position: results[i].geometry.location,
                  animation: google.maps.Animation.DROP,
                  icon: markerIcon
              });

              // If the user clicks a category marker, show the details of that category
              // in an info window.

              markers[i].placeResult = results[i];
              google.maps.event.addListener(markers[i], 'click', showInfoWindow);
              setTimeout(dropMarker(i), i * 100);
              addResult(results[i], i);
          }
      }

      //If no results is found. No results! will be displayed and clear all the markers.
       else {
        document.getElementById('results-heading').innerHTML = "No Results!";
        clearResults();
        clearMarkers();
      }
  });
}

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    if (markers[i]) {
      markers[i].setMap(null);
    }
  }
  markers = [];
}

function dropMarker(i) {
  return function () {
    markers[i].setMap(map);
  };
}

// Adds the results in locationContainer
// and displays results in the resultsTable.
function addResult(result, i) {
  let results = document.getElementById('results');
  let markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
  let markerIcon = MARKER_PATH + markerLetter + '.png';

  let tr = document.createElement('tr');
  tr.style.background = ('transparent');
  tr.onclick = function () {
    google.maps.event.trigger(markers[i], 'click');

  };

  let iconTd = document.createElement('td');
  let nameTd = document.createElement('td');
  let icon = document.createElement('img');
  icon.src = markerIcon;
  icon.setAttribute('class', 'placeIcon');
  icon.setAttribute('className', 'placeIcon');
  let name = document.createTextNode(result.name);
  iconTd.appendChild(icon);
  nameTd.appendChild(name);
  tr.appendChild(iconTd);
  tr.appendChild(nameTd);
  results.appendChild(tr);
}

function clearResults() {
  let results = document.getElementById('results');
  while (results.childNodes[0]) {
    results.removeChild(results.childNodes[0]);
  }
}

// Get the place details for the results. Show the information in an info window,
// anchored on the marker for the category that the user selected.

function showInfoWindow() {
  let marker = this;
  places.getDetails({ placeId: marker.placeResult.place_id },
    function (place, status) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
      }
      infoWindow.open(map, marker);
      buildPopUpContent(place);

    });
}

// Load the place information into the HTML elements used by the info window.

function buildPopUpContent(place) {
  document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
    'src="' + place.icon + '"/>';
  document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
    '">' + place.name + '</a></b>';
  document.getElementById('iw-address').textContent = place.vicinity;

  if (place.formatted_phone_number) {
    document.getElementById('iw-phone-row').style.display = '';
    document.getElementById('iw-phone').textContent =
      place.formatted_phone_number;
  } else {
    document.getElementById('iw-phone-row').style.display = 'none';
  }

  // Assign a five-star rating to the hotel, using a black star ('&#10029;')
  // to indicate the rating the hotel has earned, and a white star ('&#10025;')
  // for the rating points not achieved.
  if (place.rating) {
    let ratingHtml = '';
    for (let i = 0; i < 5; i++) {
      if (place.rating < (i + 0.5)) {
        ratingHtml += '&#10025;';
      } else {
        ratingHtml += '&#10029;';
      }
      document.getElementById('iw-rating-row').style.display = '';
      document.getElementById('iw-rating').innerHTML = ratingHtml;
    }
  } else {
    document.getElementById('iw-rating-row').style.display = 'none';
  }

  // The regexp isolates the first part of the URL (domain plus subdomain)
  // to give a short URL for displaying in the info window.
  if (place.website) {
    let fullUrl = place.website;
    let website = hostnameRegexp.exec(place.website);
    if (website === null) {
      website = 'http://' + place.website + '/';
      fullUrl = website;
    }
    document.getElementById('iw-website-row').style.display = '';
    document.getElementById('iw-website').textContent = website;
  } else {
    document.getElementById('iw-website-row').style.display = 'none';
  }
}
