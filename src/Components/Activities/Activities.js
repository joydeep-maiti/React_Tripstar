import React from 'react'
import img1 from '../../assets/act1.jpg'
import img2 from '../../assets/act2.jpg'
import img3 from '../../assets/act3.jpg'
import img4 from '../../assets/act4.jfif'
import './Activities.css'

const activities = ()=> {
    return (
        <div class="container pt-5 text-center">
            <h3 class="pt-2 titlehead">Activities</h3>
            <span class="descspan">We offer vaious activities from where you can choose what suits you<br/>most</span>
            <div class="row">
                <div class="col-6 col-sm-6 col-md-3 col-lg-3 text-center px-2">
                    <img class="pt-2 img-fluid" src={img1} alt="Trekking" />
                    <span class="activitiesTitle">Trekking</span>
                </div>
                <div class="col-6 col-sm-6 col-md-3 col-lg-3 text-center px-2">
                    <img class="pt-2 img-fluid" src={img2} alt="Cycling" />
                    <span class="activitiesTitle">Cycling</span>
                </div>
                <div class="col-6 col-sm-6 col-md-3 col-lg-3 text-center px-2">
                    <img class="pt-2 img-fluid" src={img3} alt="Rafting" />
                    <span class="activitiesTitle">Rafting</span>
                </div>
                <div class="col-6 col-sm-6 col-md-3 col-lg-3 text-center px-2">
                    <img class="pt-2 img-fluid" src={img4} alt="Climbing" />
                    <span class="activitiesTitle">Climbing</span>
                </div>
                
                
            </div>
        </div>
    )
}

export default activities;