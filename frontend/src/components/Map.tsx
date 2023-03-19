import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState, useEffect, useCallback } from "react";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 41.903,
  lng: 12.496,
};

const Map = ({ locations }: LocationWithCompanyInfoProps): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.REACT_APP_MAPS_API_KEY}`,
  });

  const [activeMarkerId, setActiveMarkerId] = useState<number | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const handleActiveMarker = (markerId: number) => {
    if (markerId !== activeMarkerId) {
      setActiveMarkerId(markerId);
    }
  };

  const handleOnLoad = (map: google.maps.Map) => {
    let bounds = new window.google.maps.LatLngBounds(center);
    // this is a workaround for the problem of zoom option not working when I use
    // map.fitBounds() -- the map is super zoomed in when loaded. setTimeout on loading
    // zoom from state variable doesn't work either when there is fitBounds
    bounds.extend(new window.google.maps.LatLng(43.460974, 10.50757));
    bounds.extend(new window.google.maps.LatLng(41.320469, 15.390762));
    if (locations.length > 0) {
      locations.forEach((loc) => {
        bounds.extend(
          new window.google.maps.LatLng(loc.latitude, loc.longitude)
        );
      });
    }
    map.fitBounds(bounds);
    setMap(map);
  };

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    handleOnLoad(map);
  }, []);

  useEffect(() => {
    if (map) {
      handleOnLoad(map);
    }
  }, [map, locations]);

  return isLoaded ? (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        options={{
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
        }}
        onLoad={onLoad}
        zoom={8}
        onClick={() => setActiveMarkerId(null)}
        onUnmount={() => {
          setMap(null);
        }}>
        {locations.map((loc) => (
          <Marker
            key={loc.locationId}
            position={{ lat: loc.latitude, lng: loc.longitude }}
            icon={{
              url: require("../resources/icons/location-marker.svg").default,
            }}
            onClick={() => handleActiveMarker(loc.locationId)}>
            {activeMarkerId === loc.locationId ? (
              <InfoWindow onCloseClick={() => setActiveMarkerId(null)}>
                <div>
                  <p className="fs-6 fw-bold mt-0 mb-2">{loc.company}</p>
                  <p className="mb-1 text-small" style={{ fontSize: "0.8rem" }}>
                    Address: {loc.fullAddress}
                  </p>
                  <p className="mb-1 text-small" style={{ fontSize: "0.8rem" }}>
                    Activities: {loc.activities.join(", ")}
                  </p>
                  <a href={`${loc.websiteLink}`} target="_blank">
                    <p
                      className="mb-1 text-small"
                      style={{ fontSize: "0.8rem" }}>
                      {loc.websiteLink}
                    </p>
                  </a>
                </div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
    </div>
  ) : (
    <div>Loading map...</div>
  );
};

export default Map;
