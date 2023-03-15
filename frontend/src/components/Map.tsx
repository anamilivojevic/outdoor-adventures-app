const Map = (): JSX.Element => {
  console.log(process.env.REACT_APP_MAPS_API_KEY);
  function initMap() {}
  return (
    <div className="map-container">
      <p>Map</p>
    </div>
  );
};

export default Map;
