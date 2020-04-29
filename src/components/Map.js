import React from 'react'
import mapboxgl from "mapbox-gl";


class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1IjoiZW1pa3VzYWJhIiwiYSI6ImNrOWxudHVhaDBlNDIzZnFzZHk5YTlmeG8ifQ.tnFptw0938NlNdsem5LuRA";
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.props.lng, this.props.lat],
      zoom: this.props.zoom,
    });

    const marker = new mapboxgl.Marker()
    .setLngLat([this.props.lng, this.props.lat])
    .addTo(map);
  }

  render() {
    return (
      <div>
        <div ref={el => this.mapContainer = el}
          style={{ height: "100%", width: "100%" }} 
          />
      </div>
    )
  }
}

export default Map;