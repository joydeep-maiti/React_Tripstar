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
          <Destinations />
          <Activities />
      </div>
      
    );
  }
  
}

export default App;
