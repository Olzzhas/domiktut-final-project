import "./navbar.scss"
import React, {useContext} from "react"
import { UserContext } from "../../UserContext"

import { Link } from "react-router-dom"

function Navbar(){
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
        <div className="navbar">

            <ul className="first-ul">
                <Link to="/">
                    <img className="logo" src="./img/svg/logo_light.svg" alt="logo"></img>
                </Link>
                <div className="city">
                    <img className="map" src="./img/svg/map-locator.svg" alt="map-locator"/>

                    <h1>Костанай</h1>

                    <img className="arrow" src="./img/svg/arrow-down.svg" alt="arrow" />
                </div>

                <Link className="link" to="/hotels">
                    <div className="catalog">
                        <h1>Каталог</h1>
                    </div>
                </Link>
            </ul>

            <button onClick={()=>testLocalStorage()}>test localstorage</button>

            {localStorage.getItem("accessToken") === "" ?
                <ul className="second-ul">
                <img src="./img/svg/favorites.svg" alt="favorites" />
                <a href="http://localhost:3000/favorites"><h1 className="auth">Избранные</h1></a>

                <a href="http://localhost:3000/register"><h1 className="auth">Зарегистрироваться</h1></a>

                <img src="./img/svg/user.svg" alt="user" />

                <a href="http://localhost:3000/login"><h1 className="phone">Войти</h1></a>
            </ul>
            :
            <ul className="second-ul">
                <img src="./img/svg/favorites.svg" alt="favorites" />
                <a href="http://localhost:3000/favorites"><h1 className="auth">Избранные</h1></a>


                <img src="./img/svg/user.svg" alt="user" />

               <h1 className="phone">{username}</h1>

                <a onClick={()=>logout()} href="http://localhost:3000/"><h1 className="phone">Log Out</h1></a>
            </ul>
            
            }
            
        </div>
    )
}

export default Navbar;