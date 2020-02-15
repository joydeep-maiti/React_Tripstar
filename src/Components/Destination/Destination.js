import React, { Component } from 'react';
import './Destination.css';
import Cover from '../../assets/banner.jpg'

import { withRouter } from 'react-router-dom'


class Destination extends Component  {
  render(){
    const destination = this.props.location.state.destination
    return (
      <div>
        <div class="coverDiv" style={{backgroundImage: "url(" +  Cover + ")"}}>
          {/* <img class="coverimg" src={Cover}  alt="destination" /> */}
          <h1 class="covertitle">{destination}</h1>
          <div class="overlaycls"></div>
          {/* <h2 class="covertitle">{destination}</h2> */}
        </div>
      </div>
      
    );
  }
  
}

export default withRouter(Destination);
