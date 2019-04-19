function initMap() {
    //Map options
    var options = {
        zoom: 6,
        center: { lat: 52.3555, lng: -1.1743 }
    };
    //New Map
    var map = new google.maps.Map(document.getElementById('map'), options);
    /*
        //Map Markers
        var marker = new google.maps.Marker({
            position: { lat: 54.5742, lng: -1.2350 },
            map: map
        });

        var infoWindow = new google.maps.InfoWindow({
            content: '<h1>Middlesbough</h1>'
        });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    */

    //Array of Markers
    var markers = [{
            coords: { lat: 54.5742, lng: -1.2350 },
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<h1>Middlesbrough</h1>'
        },
        {
            coords: { lat: 53.4084, lng: -2.9916 },
            content: '<h1>Liverpool</h1>'
        },
        {
            coords: { lat: 53.4808, lng: -2.2426 }
        }
    ];

    //loop through markers
    for (i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    //Add Marker Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //icon: props.iconImage
        });

        //Check for custom Marker
        if (props.iconImage) {
            marker.setIcon(props.iconImage);
        }

        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }
        
        //listen for onclick map
        google.maps.event.addListener(map, 'click', 
        function(event){
            //add marker
            addMarker({coords:event.latLng});
        });
    }
}
