import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Slider from './Components/Slider/Slider'
import Destinations from './Components/Destinations/Destinations'
import Activities from './Components/Activities/Activities'

class App extends Component  {
  render(){
    return (
      <div>
        {/* <Navbar /> */}
        
          <Slider />
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
