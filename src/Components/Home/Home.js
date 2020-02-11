import React, { Component } from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import Destinations from '../Destinations/Destinations'
import Activities from '../Activities/Activities'
import ShelterMap from '../MapMarker/MapMarker'
import { withRouter } from 'react-router-dom'


class Home extends Component  {
    
  render(){
    console.log("-------------------in")
    return (
      <div>
        <div class="sliderNav">
          <Slider />
        </div>
        <div class="mapdiv">
          <ShelterMap />
        </div>
        <div class="destDiv">
          <Destinations />
        </div>
        <div class="destDiv">
          <Activities />
        </div>
          
      </div>
      
    );
  }
  
}

export default withRouter(Home);
