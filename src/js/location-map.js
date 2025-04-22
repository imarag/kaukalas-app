import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const serviceLat = 35.513;
const setviceLon = 24.018;
var map = L.map('map').setView([serviceLat, setviceLon], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([serviceLat, setviceLon]).addTo(map);