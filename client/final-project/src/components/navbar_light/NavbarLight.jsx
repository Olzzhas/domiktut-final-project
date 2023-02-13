import "./navbarlight.scss"

function NavbarLight(){
    return(
        <div className="navbar-light">

            <div className="left-side">
                <img src="/img/svg/logo_dark.svg" alt="logo" />

                <div className="city">
                    <img className="map" src="./img/svg/map-locator.svg" alt="map-locator"/>

                    <h1>Костанай</h1>

                    <img className="arrow" src="./img/svg/arrow-down.svg" alt="arrow" />
                </div>
            </div>
            
        </div>
    )
}

export default NavbarLight