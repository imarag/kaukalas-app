import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const serviceLat = 35.513;
const setviceLon = 24.018;
var map = L.map('map').setView([serviceLat, setviceLon], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var polygon = L.polygon([
    [35.509425, 23.992274],
    [35.491338, 24.049318],
    [35.521281, 24.058794],
    [35.518812, 24.013995],
]).addTo(map);