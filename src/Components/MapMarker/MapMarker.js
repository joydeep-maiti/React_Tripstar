import React, { Component } from "react";
import { compose } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import './MapMarker.css';
import Logo from '../../assets/sik2.jpg'

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {

  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 29.5, lng: -95 }}>
      {props.markers.map(marker => {
        const onClick = props.onClick.bind(this, marker)
        return (
          <Marker
            key={marker.id}
            onClick={onClick}
            position={{ lat: marker.latitude, lng: marker.longitude }}
          >
            {props.selectedMarker === marker &&
              <InfoWindow>
                <div>
                  <div style={{display:"inline-block","vertical-align": "top"}}>
                      <img src={Logo} width="70px" height="70px"></img>
                  </div>
                  <div style={{display:"inline-block", marginLeft:"20px",fontSize:"15px","vertical-align": "center", height:"70px"}}>
                    {marker.shelter}<br/>
                    <span style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span><br/>
                    <a style={{fontSize:"12px",position: "absolute",bottom: "14px", fontWeight:500}} href="https://react-tripster.firebaseapp.com" target="blank">Know More</a>
                  </div>
                  
                </div>
              </InfoWindow>}
            
          </Marker>
        )
      })}
    </GoogleMap>
  )
})

export default class ShelterMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shelters: [],
      selectedMarker: false
    }
  }
  componentDidMount() {
    fetch("https://api.harveyneeds.org/api/v1/shelters?limit=20")
      .then(r => r.json())
      .then(data => {
        this.setState({ shelters: data.shelters })
      })
  }
  handleClick = (marker, event) => {
    // console.log({ marker })
    this.setState({ selectedMarker: marker })
  }
  render() {
    return (
        <div>
            <h3 class="pt-5 titlehead">Map Section</h3>
            <div class="pt-2">
                <MapWithAMarker
                    selectedMarker={this.state.selectedMarker}
                    markers={this.state.shelters}
                    onClick={this.handleClick}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </div>
    )
  }
}