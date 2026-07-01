// centered on auckland
var map = L.map('map').setView([-36.85133, 174.76345], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

//fishing spot test marker
L.marker([-36.84072, 174.73182]).addTo(map)
    .bindPopup('<a href="fishingSpots/ponsonbySpot.html">Info</a>');

