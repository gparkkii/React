import React, { Component } from 'react';
import './Navbar.css'
import mainLogo from './Jamsil_eats_logo.png'

class Navbar extends Component {
    render(){
        return(
            <nav className = 'navbar'>
                <h1 className="navbar-logo"><img src={mainLogo} alt="logo"/></h1>
                <ul className = "nav-menu">
                    <li>
                        <img src="" alt="즐겨찾기"/>
                    </li>
                    <li>
                        <button className = 'nav-sign-in'>로그인</button>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar