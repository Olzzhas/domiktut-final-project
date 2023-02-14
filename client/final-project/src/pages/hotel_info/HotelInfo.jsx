import React from "react"

import "./hotelinfo.scss"
import NavbarLight from "../../components/navbar_light/NavbarLight"
import Filter from "../../components/filter/Filter"

function HotelInfo(){
    return(
        <div>
            <NavbarLight/>
            <Filter/>
        </div>
    )
}

export default HotelInfo