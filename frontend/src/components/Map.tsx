import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState, useCallback } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 41.903,
  lng: 12.496,
};

const Map = ({ locations }: LocationsProps): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.REACT_APP_MAPS_API_KEY}`,
  });

  const [activeMarkerId, setActiveMarkerId] = useState<number | null>(null);

  const handleActiveMarker = (markerId: number) => {
    if (markerId !== activeMarkerId) {
      setActiveMarkerId(markerId);
    }
  };

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const handleOnLoad = (map: google.maps.Map) => {
    const bounds = new google.maps.LatLngBounds(center);
    //locations.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
    setMap(map);
  };

  /* const onLoad = useCallback(function callback(map: google.maps.Map) {
    map.fitBounds(new window.google.maps.LatLngBounds(center));
    setMap(map)
    }, []); */

  return isLoaded ? (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        options={{
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
        }}
        onLoad={handleOnLoad}
        onClick={() => setActiveMarkerId(null)}
        onUnmount={() => {
          setMap(null);
        }}>
        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={{ lat: loc.latitude, lng: loc.longitude }}
            icon={{
              url: require("../resources/icons/location-marker.svg").default,
            }}
            onClick={() => handleActiveMarker(loc.id)}>
            {activeMarkerId === loc.id ? (
              <InfoWindow onCloseClick={() => setActiveMarkerId(null)}>
                <div>{`${loc.address}, ${loc.city}\n${loc.activities.forEach(
                  (act) => {
                    return act.name + ", ";
                  }
                )}\n${loc.company.websiteLink}`}</div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
        <Marker
          position={center}
          icon={{
            url: require("../resources/icons/location-marker.svg").default,
          }}
          onClick={() => handleActiveMarker(1)}>
          {activeMarkerId === 1 ? (
            <InfoWindow onCloseClick={() => setActiveMarkerId(null)}>
              <div>Babeee, let's go to bed :3</div>
            </InfoWindow>
          ) : null}
        </Marker>
      </GoogleMap>
    </div>
  ) : (
    <div>Unable to load map</div>
  );
};

export default Map;
