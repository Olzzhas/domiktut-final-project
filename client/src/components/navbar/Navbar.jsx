import "./navbar.scss"

import { Link } from "react-router-dom"

function Navbar(){
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

            <ul className="second-ul">
                <img src="./img/svg/favorites.svg" alt="favorites" />

                <h1 className="auth">Зарегистрироваться</h1>

                <img src="./img/svg/phone.svg" alt="phone" />

                <h1 className="phone">8 (747) 574-64-02</h1>
            </ul>
            
        </div>
    )
}

export default Navbar;