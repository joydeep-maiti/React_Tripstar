import React from 'react'


const navbar = ()=> {
    return(
        <nav class="navbar navbar-expand-sm navbar-dark myNavClass" >
            <a href="#" class="navbar-brand myNavTitle">eNno</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarMenu">
                <ul class="navbar-nav ml-auto navMenu" >
                    <li class="active nav-item">
                        <a href="#" class="nav-link myNavLink">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link myNavLink">SERVICES</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link myNavLink">BLOG</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link myNavLink">PORTFOLIO</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link myNavLink">CONTACT</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default navbar;