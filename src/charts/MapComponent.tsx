import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet';
import L from 'leaflet'; // Import Leaflet library

interface MapComponentProps {
  countries: Array<{
    country: string;
    countryInfo: {
      lat: number | undefined;
      long: number | undefined;
    };
    cases: number;
    recovered: number;
    deaths: number;
  }>;
}

const MapComponent: React.FC<MapComponentProps> = ({ countries }) => {
  const defaultCenter: LatLngTuple = [20, 0];
  const defaultZoom = 2;

  // Define the default marker icon
  const defaultIcon = new L.Icon.Default();

  return (
    <div className="w-full h-80">
      <MapContainer center={defaultCenter} zoom={defaultZoom} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {countries.map((country) => {
          if (country.countryInfo.lat !== undefined && country.countryInfo.long !== undefined) {
            return (
              <Marker
                key={country.country}
                position={[country.countryInfo.lat, country.countryInfo.long]}
                icon={defaultIcon} // Use the default marker icon
              >
                <Popup>
                  <div>
                    <h3>{country.country}</h3>
                    <p>Cases: {country.cases}</p>
                    <p>Recovered: {country.recovered}</p>
                    <p>Deaths: {country.deaths}</p>
                  </div>
                </Popup>
              </Marker>
            );
          } else {
            return null; // Skip creating marker for invalid lat/long
          }
        })}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
