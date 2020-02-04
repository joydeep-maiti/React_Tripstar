import React from 'react'
import { Carousel } from 'react-bootstrap';
import img1 from '../../assets/mg.jpg'
import classes from './slider.css'

const slider = ()=> {
    return (
        <div class="maindiv">
          <div id="demo" class="carousel slide" data-ride="carousel">
          
            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
            </ul>
          
        
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="carouselimg" src={img1}  alt="Los Angeles" />
                <div class="readmoreDiv1">
                  <span class="rdminfo1">Magical</span> 
                  <span class="rdminfo2">Meghalaya</span>
                  <div class="rdmbtn">Read More</div>
                </div>
              </div>
              <div class="carousel-item">
                <img class="carouselimg" src={img1}  alt="Chicago" />
                <div class="readmoreDiv2">
                  <span class="rdminfo11">Magical</span> 
                  <span class="rdminfo2">Meghalaya</span>
                  <div class="rdmbtn2">Read More</div>
                </div>
              </div>
            </div>
          
          
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          
          </div>
        </div>
    
    )
}

export default slider;

