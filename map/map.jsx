import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export default class Map extends React.Component {
    constructor(){
        super();
        this.state={
            latitude:'',
            longitude:''
        }
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        });
    }
    render() {
        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: this.state.latitude, lng: this.state.longitude }}
        >
          {props.isMarkerShown && <Marker draggable={true} position={{ lat: this.state.latitude, lng: this.state.longitude }} />}
        </GoogleMap>
      ))
        return (
            <div style={{marginLeft:'30%'}}>
                <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `600px` ,width: `600px`}} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        )
    }
}