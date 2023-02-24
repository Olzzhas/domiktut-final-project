import "./navbarlight.scss"

import React, {useContext} from "react"
import { UserContext } from "../../UserContext"

import { Link } from "react-router-dom"

function NavbarLight(){
    const {user, setUser} =  useContext(UserContext)
    let username = user.name

    function logout(){
        localStorage.setItem("accessToken", "")
        localStorage.setItem("currentUser", "")
    }

    function testLocalStorage(){
        console.log(localStorage.getItem("accessToken"));
        console.log(localStorage.getItem("currentUser"));
    }
    return(
        <div className="navbar-light">

            <div className="left-side">
            
                <Link className="link" to="/">
                    <img className="logo-light" src="/img/svg/logo_dark.svg" alt="logo" />
                </Link>

                <div className="city-light">
                    <img className="map" src="./img/svg/map-locator.svg" alt="map-locator"/>

                    <h1>Костанай</h1>

                    <img className="arrow" src="./img/svg/arrow-down.svg" alt="arrow" />
                </div>
            </div>

            <div className="right-side-light">
                <img className="favorite-svg"src="/img/svg/favorites.svg" alt="heart" />

                <div className="search">
                    <img src="/img/svg/search.svg" alt="search" />
                    <input type="text" placeholder="Поиск по названию" />
                </div>
                {localStorage.getItem("accessToken"==="") ?
                <>
                    
                    <img className="phone-svg" src="/img/svg/user.svg" alt="phone" />
                    <a href="http://localhost:3000/login"><span className="phone-span">Войти</span></a>
                </>:
                <>
                    <img className="phone-svg" src="/img/svg/user.svg" alt="phone" />
                    <span className="phone-span">8 (843) 528-65-48</span>
                    
                </>
            
                }
                
            </div>
            
        </div>
    )
}

export default NavbarLight