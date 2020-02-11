import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Slider from './Components/Slider/Slider'
// import Destinations from './Components/Destinations/Destinations'
// import Activities from './Components/Activities/Activities'
// import ShelterMap from './Components/MapMarker/MapMarker'
import Home from './Components/Home/Home'
import Tours from './Components/Tours/Tours'
import Packages from './Components/Packages/Packages'
import Contact from './Components/Contact/Contact'
import Destination from './Components/Destination/Destination'
import { Route, Switch } from 'react-router-dom'


class App extends Component  {
  render(){
    return (
      <div>
        <Navbar />
        {/* <div class="sliderNav">
          <Slider />
        </div> */}
        <Switch>
          <Route path="/packages" component={Packages}/>
          <Route path="/tours" component={Tours}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/destination" component={Destination}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
      
    );
  }
  
}

export default App;
