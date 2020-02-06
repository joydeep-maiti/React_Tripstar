import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Slider from './Components/Slider/Slider'
import Destinations from './Components/Destinations/Destinations'
import Activities from './Components/Activities/Activities'
import ShelterMap from './Components/MapMarker/MapMarker'

class App extends Component  {
  render(){
    return (
      <div>
        <Navbar />
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

export default App;
