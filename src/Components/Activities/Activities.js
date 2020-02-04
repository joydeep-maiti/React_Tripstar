import React from 'react'
import img1 from '../../assets/act1.jpg'
import img2 from '../../assets/act2.jpg'
import img3 from '../../assets/act3.jpg'
import img4 from '../../assets/act4.jfif'

const activities = ()=> {
    return (
        <div class="container pt-5 text-center">
            <h4 class="pt-2">Activities</h4>
            <div class="row">
                <div class="col-sm-6 col-md-3 col-lg-3 text-center px-1 destsmbximg1">
                    <img class="pt-2 img-fluid" src={img1} alt="heart" />
                </div>
                <div class="col-sm-6 col-md-3 col-lg-3 text-center px-1">
                    <div class="destsmbx">
                        <img class="pt-2 img-fluid" src={img2} alt="desktop" />
                    </div>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-3 text-center px-1">
                    <div class="destsmbx">
                        <img class="pt-2 img-fluid" src={img3} alt="desktop" />
                    </div>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-3 text-center px-1">
                    <div class="destsmbx">
                        <img class="pt-2 img-fluid" src={img4} alt="desktop" />
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default activities;