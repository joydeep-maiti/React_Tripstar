import React from 'react'
import './Navbar.css'

const navbar = ()=> {
    return(
        <nav class="navbar navbar-expand-sm navbar-dark myNavClass" >
            <a href="#" class="navbar-brand myNavTitle">Tripster</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarMenu">
                <ul class="navbar-nav ml-auto navMenu" >
                    <li class="active nav-item">
                        <a href="#" class="nav-link myNavLink">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link myNavLink">Packages</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link myNavLink">Tours</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link myNavLink">Contact</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default navbar;