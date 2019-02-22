function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    var lat= position.coords.latitude;
    var long= position.coords.longitude;
    console.log(lat);
    console.log(long);
  
  
  
              //**********************************************
          var map = L.map('mapContainer').setView([lat,long], 14);
  
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
  
      //******************************************

      var redIcon = L.icon({
        iconUrl: 'html.png',
        shadowUrl: 'leaf-shadow.png',
    
        iconSize:     [60, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
      
      
     var geojson = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                long,
                lat
              ],
              [
                -76.2988859,
                3.5011634999999997
              ]
            ]
          }
        },
        
        
      ]
    };


      L.geoJSON(geojson).addTo(map);
      
      

      
      
      L.marker([3.5011634999999997,-76.29890879999999 ]).addTo(map)
      L.marker([lat,long ]).addTo(map)
      
      //L.marker([lat, long ], {icon: redIcon}).addTo(map)
      //.bindPopup('Estas Aquí')
      //.openPopup();
  
  };




