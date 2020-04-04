function initMap(){
    var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center:{
                lat:62.577939,
                lng:15.666002
            }
        });

        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        



        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    }
    