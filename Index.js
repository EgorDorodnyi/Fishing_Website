// Centered on New Zealand
var map = L.map('map').setView([-41.2865, 174.7762], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Example fishing spot marker
L.marker([-36.8485, 174.7633]).addTo(map)
    .bindPopup('Auckland fishing spot');