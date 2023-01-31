import "./card.scss"

function Card(){
    return(
        <div className="card-wrapper">
            <div className="buttons">
                <div className="guest-count-button">
                    <img src="/img/svg/user.svg" alt="user" />
                    <h2>до 30</h2>
                </div>

                <div className="fav-button">
                    <img src="/img/svg/fav-button.svg" alt="fav" />
                </div>
            </div>

            <div className="hotel-img__containter">
                <img src="/img/hotels/hotel_1.png" alt="hotel" />
            </div>

            <div className="card-title">
                <h3>Новая сосновка</h3>
            </div>

            <div className="tags">
                <div className="tag">
                    <div className="icon-container">
                        <img src="/img/svg/bedplace.svg" alt="bedplace" />
                    </div>
                    <h4>5 спальных мест</h4>
                </div>
               
                <div className="tag">
                    <div className="icon-container">
                        <img src="/img/svg/entertainment.svg" alt="entertainment" />
                    </div>
                    <h4>Настольный теннис</h4>
                </div>

                <div className="tag">
                    <div className="icon-container">
                        <img src="/img/svg/banya.svg" alt="banya" />
                    </div>
                    <h4>Баня</h4>
                </div>
                
                <div className="tag">
                    <div className="icon-container">
                        <img src="/img/svg/waterpool.svg" alt="waterpool" />
                    </div>
                    <h4>Бассейн</h4>
                </div>
            </div>

            <div className="price-info">
                <h6>от 70 000 ₸ / сутки </h6>
                <span>Подробнее</span>
            </div>

        </div>
    )
}

export default Card;