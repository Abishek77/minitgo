import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        lat: null,
        lng: null
      }
    };
  }

  componentDidMount() {
    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState(prevState => ({
          currentLocation: {
            ...prevState.currentLocation,
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        }));
      });
    }
  }

  render() {
    const { currentLocation } = this.state;
    const mapStyles = {
      width: '100%',
      height: '400px'
    };

    return (
      <Map
        google={this.props.google}
        zoom={4}
        style={mapStyles}
        initialCenter={currentLocation}
        disableDefaultUI // Disable the default UI controls
        options={{ mapTypeId: 'streetview', gestureHandling: ' ' }} // Customize map options
      >
        <Marker position={currentLocation} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: '',
  libraries: ['hyderabad'] // Include the 'places' library
})(MapContainer);
