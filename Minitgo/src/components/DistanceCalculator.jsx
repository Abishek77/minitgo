import React, { useState } from 'react';

const DistanceCalculator = () => {
  const [startLat, setStartLat] = useState('');
  const [startLng, setStartLng] = useState('');
  const [destLat, setDestLat] = useState('');
  const [destLng, setDestLng] = useState('');
  const [distance, setDistance] = useState('');

  const calculateDistance = () => {
    const startLatRad = degToRad(Number(startLat));
    const startLngRad = degToRad(Number(startLng));
    const destLatRad = degToRad(Number(destLat));
    const destLngRad = degToRad(Number(destLng));

    const earthRadius = 6371; // Radius of the Earth in kilometers

    const latDiffRad = destLatRad - startLatRad;
    const lngDiffRad = destLngRad - startLngRad;

    const a =
      Math.sin(latDiffRad / 2) * Math.sin(latDiffRad / 2) +
      Math.cos(startLatRad) *
        Math.cos(destLatRad) *
        Math.sin(lngDiffRad / 2) *
        Math.sin(lngDiffRad / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distanceInKm = earthRadius * c;

    setDistance(distanceInKm.toFixed(2));
  };

  const degToRad = (degrees) => {
    return (degrees * Math.PI) / 180;
  };

  return (
    <div>
      <h2>Distance Calculator</h2>
      <div>
        <label>Starting Latitude:</label>
        <input type="text" value={startLat} onChange={(e) => setStartLat(e.target.value)} />
      </div>
      <div>
        <label>Starting Longitude:</label>
        <input type="text" value={startLng} onChange={(e) => setStartLng(e.target.value)} />
      </div>
      <div>
        <label>Destination Latitude:</label>
        <input type="text" value={destLat} onChange={(e) => setDestLat(e.target.value)} />
      </div>
      <div>
        <label>Destination Longitude:</label>
        <input type="text" value={destLng} onChange={(e) => setDestLng(e.target.value)} />
      </div>
      <button onClick={calculateDistance}>Calculate Distance</button>
      {distance && <div>Distance: {distance} km</div>}
    </div>
  );
};

export default DistanceCalculator;
