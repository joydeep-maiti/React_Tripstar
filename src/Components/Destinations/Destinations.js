import React from 'react'
import img1 from '../../assets/mg2.jpg'
import img2 from '../../assets/img02.jpg'
import img3 from '../../assets/img03.jpg'
import img4 from '../../assets/img04.jpg'
import img5 from '../../assets/img05.jpg'
import img6 from '../../assets/img06.jpg'
import './Destinations.css'

const destinations = ()=> {
    return (
        <div class="container pt-5 text-center">
            <h3 class="pt-2 titlehead">Destinations</h3>
            <span class="descspan">Take the break you deserve, pick your dream<br/> destination</span>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 text-center px-1 destsmbximg1">
                    <img class="pt-2 img-fluid" src={img2} alt="heart" />
                    <div class="destinfodiv">
                        <div class="destprcdiv">
                            <span class="fromspn">from</span>
                            <span class="pricespn">$450.00</span>
                        </div>
                        <span class="desttitle">Himalayan Beauty, Sikkim</span>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-3 col-lg-3 text-center px-1">
                    <div>
                        <img class="pt-2 img-fluid" src={img3} alt="desktop" />
                        <div class="destinfodiv2">
                            <div class="destprcdiv">
                                <span class="fromspn">from</span>
                                <span class="pricespn">$890.00</span>
                            </div>
                            <span class="desttitle">Dzukou, Nagaland</span>
                        </div>
                    </div>
                    <div>
                        <img class="pt-2 img-fluid" src={img5} alt="desktop" />
                        <div class="destinfodiv">
                            <div class="destprcdiv">
                                <span class="fromspn">from</span>
                                <span class="pricespn">$450.00</span>
                            </div>
                            <span class="desttitle">Paro, Bhutan</span>
                        </div>
                    </div>
                    
                </div>
                <div class="col-12 col-sm-6 col-md-3 col-lg-3 text-center px-1">
                    <div>
                        <img class="pt-2 img-fluid" src={img4} alt="desktop" />
                        <div class="destinfodiv2">
                            <div class="destprcdiv">
                                <span class="fromspn">from</span>
                                <span class="pricespn">$978.00</span>
                            </div>
                            <span class="desttitle">Tezu, Arunachal</span>
                        </div>
                    </div>
                    <div>
                        <img class="pt-2 img-fluid" src={img6} alt="desktop" />
                        <div class="destinfodiv">
                            <div class="destprcdiv">
                                <span class="fromspn">from</span>
                                <span class="pricespn">$670.00</span>
                            </div>
                            <span class="desttitle">Tea Garden, Assam</span>
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
    )
}

export default destinations;