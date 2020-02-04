import React from 'react'
import img1 from '../../assets/mg2.jpg'
import img2 from '../../assets/img02.jpg'
import img3 from '../../assets/img03.jpg'
import img4 from '../../assets/img04.jpg'
import img5 from '../../assets/img05.jpg'
import img6 from '../../assets/img06.jpg'
// import classes from './slider.css'

const destinations = ()=> {
    return (
        <div class="container pt-5 text-center">
            <h4 class="pt-2">Destinations</h4>
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6 text-center px-1 destsmbximg1">
                    <img class="pt-2 img-fluid" src={img2} alt="heart" />
                </div>
                <div class="col-sm-12 col-md-3 col-lg-3 text-center px-1">
                    <div class="destsmbx">
                        <img class="pt-2 img-fluid" src={img3} alt="desktop" />
                    </div>
                    <div class="destsmbx">
                        <img class="pt-2 img-fluid" src={img5} alt="desktop" />
                    </div>
                    
                </div>
                <div class="col-sm-12 col-md-3 col-lg-3 text-center px-1">
                    <div class="destsmbx">
                        <img class="pt-2 img-fluid" src={img4} alt="desktop" />
                    </div>
                    <div class="destsmbx">
                        <img class="pt-2 img-fluid" src={img6} alt="desktop" />
                    </div>
                    
                </div>
                {/* <div class="col-sm-12 col-lg-3 text-center">
                    <div class="row">
                        <h5 class="pt-2">Multi Purpose</h5>
                        <img class="iconImg pt-2" src={img1} alt="desktop" />
                    </div>
                    <div class="row">
                        <h5 class="pt-2">Multi Purpose</h5>
                        <img class="iconImg pt-2" src={img1} alt="desktop" />
                    </div>
                    
                </div> */}
                
            </div>
        </div>
    )
}

export default destinations;