import "./hotelinfo.scss"

import React from "react"
import NavbarLight from "../../components/navbar_light/NavbarLight"
import Filter from "../../components/filter/Filter"
import HotelCard from "../../components/hotelcard/HotelCard"


function HotelInfo({hotels}){
    return(
        <div>
            <NavbarLight/>
            <Filter/>
            <div className="hotel-info__wrapper">
                <div className="hotel-info-page-content">
                    <div className="info-card-block">
                        {hotels.map((hotel)=>(
                            <HotelCard title={hotel.title} img={hotel.img} capacity={hotel.capacity} city={hotel.city} price={hotel.price}/>
                        ))}
                    </div>

                    <div className="card-info-map-block">
                        <div className="card-info-map">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelInfo