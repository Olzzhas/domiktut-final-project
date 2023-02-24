import "./hotelcard.scss"

function HotelCard({hotel,title, capacity, city, price, img}){
    function redirectToHotel(){
        window.location.href = "http://localhost:3000/hotel";
        localStorage.setItem("cardId", hotel.id)
        localStorage.setItem("cardTitle", hotel.title)
        localStorage.setItem("cardPrice", hotel.price)
        localStorage.setItem("cardCapacity", hotel.capacity)
        localStorage.setItem("cardImg", hotel.img)
        localStorage.setItem("cardTags", hotel.tags)
        console.log("clicked");
        console.log(hotel);
    }
    return(
        <div className="info-card">
            <div className="info-card-img-block">
                <div className="img-buttons-block">
                    <div className="favbutton">
                        <img src="/img/svg/fav-button.svg" alt="fav" />
                    </div>
                    <div className="arrow-buttons">
                        <div className="arrow-circle">
                            <img src="/img/svg/arrow-left.svg" alt="left" />
                        </div>
                        <div className="arrow-circle">
                            <img src="/img/svg/arrow-right.svg" alt="right" />
                        </div>
                    </div>
                </div>
                <img className="card-img" src={img} alt="hotel" />
            </div>

            <div className="card-right-info">
                <div className="card-title-block">
                    <h1>{title}</h1>

                    <div className="people-count-block">
                        <img src="/img/svg/user.svg" alt="user" />
                        <span>до {capacity}</span>
                    </div>
                </div>
                
                <div className="main-info-block">

                    <div className="main-info">
                        <div className="main-info-img-wrapper">
                            <img src="/img/svg/map-locator.svg" alt="location" />
                        </div>
                        <span>{city}</span>
                    </div>

                    <div className="main-info">
                        <div className="main-info-img-wrapper">
                            <img src="/img/svg/bedplace.svg" alt="bedplace" />
                        </div>
                        <span>{capacity} спальных мест</span>
                    </div>

                    <div className="main-info">
                        <div className="main-info-img-wrapper">
                            <img src="/img/svg/waterpool.svg" alt="waterpool" />
                        </div>
                        <span>Бассейн</span>
                    </div>

                    <div className="main-info">
                        <div className="main-info-img-wrapper">
                            <img src="/img/svg/banya.svg" alt="banya" />
                        </div>
                        <span>Хаммам</span>
                    </div>

                    <div className="main-info">
                        <div className="main-info-img-wrapper">
                            <img src="/img/svg/entertainment.svg" alt="banya" />
                        </div>
                        <span>Бильярд</span>
                    </div>

                </div>

                <div className="card-info-price">
                    <span>от {price} ₸ / сутки </span>
                    <div className="other-info">
                        <span>Показать на карте</span>
                        <p onClick={()=>{redirectToHotel()}}>Подробнее</p>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default HotelCard