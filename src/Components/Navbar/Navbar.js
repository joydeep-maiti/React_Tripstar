import React from 'react'
import './Navbar.css'
import { withRouter, NavLink,Link  } from 'react-router-dom'


const navbar = (props)=> {
    // console.log("----props",props);
    // console.log("-----------------hi");
    return(
        <nav class="navbar navbar-expand-sm navbar-dark myNavClass" >
            <a href="#" class="navbar-brand myNavTitle">Tripster</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarMenu">
                <ul class="navbar-nav ml-auto navMenu" >
                    <li class="active nav-item">
                        <Link  to="/" class="nav-link myNavLink">Home</Link>
                        {/* <a href="#" class="nav-link myNavLink">Home</a> */}
                    </li>
                    <li class="nav-item">
                        <Link  to="/packages" class="nav-link myNavLink" >Packages</Link>
                        {/* <a href="#" class="nav-link myNavLink">Packages</a> */}
                    </li>
                    <li class="nav-item">
                        <Link  to="/tours" class="nav-link myNavLink" >Tours</Link>
                        {/* <a href="#" class="nav-link myNavLink">Tours</a> */}
                    </li>
                    <li class="nav-item">
                        <Link  to="/contact" class="nav-link myNavLink" >Contact</Link>
                        {/* <a href="#" class="nav-link myNavLink">Contact</a> */}
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default withRouter(navbar);