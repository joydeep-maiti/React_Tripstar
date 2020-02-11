import React, { Component } from 'react';
import './Destination.css';
import Cover from '../../assets/banner.jpg'

import { withRouter } from 'react-router-dom'


class Destination extends Component  {
  render(){
    const destination = this.props.location.state.destination
    return (
      <div>
        <div class="coverDiv">
          <img class="coverimg" src={Cover}  alt="destination" />
          <span class="covertitle">{destination}</span>
          <div class="overlaycls"></div>
        </div>
      </div>
      
    );
  }
  
}

export default withRouter(Destination);
