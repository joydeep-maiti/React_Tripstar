import React, { Component } from 'react';
// import './Home.css';
import { withRouter } from 'react-router-dom'
import { findByLabelText } from '@testing-library/react';


class Packages extends Component  {
    
  render(){
    return (
      <div>
        <h1 style={{position:"absolute", top:200, textAlign:"center",width:"100vw"}}>Packages Page</h1>
      </div>
      
    );
  }
  
}

export default withRouter(Packages);
