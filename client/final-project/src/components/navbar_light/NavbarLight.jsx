import "./navbarlight.scss"

function NavbarLight(){
    return(
        <div className="navbar-light">

            <div className="left-side">
                <img className="logo-light" src="/img/svg/logo_dark.svg" alt="logo" />

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

                <img className="phone-svg" src="/img/svg/phone.svg" alt="phone" />
                <span className="phone-span">8 (843) 528-65-48</span>
            </div>
            
        </div>
    )
}

export default NavbarLight