import React, { useState, useEffect } from 'react';
import './leaflet.css';


const Map = () => {
		
		useEffect(() => {
			const L = window.L
						var mymap = L.map('mapid').setView([51.505, -0.09], 13);
						var marker = L.marker([51.5, -0.09]).addTo(mymap);
						var polygon = L.polygon([
										[51.509, -0.08],
										[51.503, -0.06],
										[51.51, -0.047]
						]).addTo(mymap);

			L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={pk.eyJ1Ijoia21zbG92ZXIyMDAyIiwiYSI6ImNrN3MzOHFnMjBiYjIza3FycXprbDh4eXgifQ._sYAuzpAQlJm8o2Lvvy_1w}', {
								attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
								maxZoom: 18,
								id: 'mapbox/satellite-v9',
								tileSize: 512,
								zoomOffset: -1,
								accessToken: 'pk.eyJ1Ijoia21zbG92ZXIyMDAyIiwiYSI6ImNrN3MzOHFnMjBiYjIza3FycXprbDh4eXgifQ._sYAuzpAQlJm8o2Lvvy_1w'
				}).addTo(mymap);
		});
return (

	<div id="mapid"></div>



		)
}

export default Map;

