import React from "react"
import axios from "axios"

import Navbar from "../components/navbar/Navbar"
import Card from "../components/card/Card"

import './main.scss'
function Main(){
    const [hotel, addToHotel] = React.useState([])

    React.useEffect(() => {
        axios.get('http://localhost:5000/api/getAllHotels').then((response) => {
            addToHotel(response.data)
            console.log(response.data.hotel.capacity);
        })
    },[])

    console.log(hotel);

    return(
        <div>
            <Navbar/>
            
            <div className="welcome-block">

                <ul className="full-block">
                    <li className="left-block">
                        <div className="text-block">
                            <h1>Аренда коттеджей и домов в Казахстане</h1>
                        </div>

                        <div className="text-block-2">
                            <h2>Найдите идеальный вариант сами или предоставьте это нам</h2>
                        </div>

                        <div className="photo-slider">
                            <div>
                                <img src="./img/svg/arrow-left.svg" alt="arrow" />
                            </div>

                            <div className="photo-block">
                                <img src="./img/main-page-photos/photo_1.png" alt="ph" />
                                <p>С бассейном</p>
                            </div>
                            <div className="photo-block">
                                <img src="./img/main-page-photos/photo_2.png" alt="ph" />
                                <p>Семейные</p>
                            </div>
                            <div className="photo-block">
                                <img src="./img/main-page-photos/photo_3.png" alt="ph" />
                                <p>Хиты продаж</p>
                            </div>

                            <div>
                                <img src="./img/svg/arrow-right.svg" alt="arrow" />
                            </div>
                        </div>

                        <div className="social">
                            <img className="social-ico" src="./img/social/youtube.svg" alt="social-ico"/>
                            <img className="social-ico" src="./img/social/instagram.svg" alt="social-ico"/>
                            <img className="social-ico" src="./img/social/vk.svg" alt="social-ico"/>
                            <img className="social-ico" src="./img/social/telegram.svg" alt="social-ico"/>
                            <img className="social-ico"src="./img/social/whatsapp.svg" alt="social-ico"/>
                        </div>
                    </li>

                    <li className="right-block">
                        <div className="filter">

                            <div className="in-out-title">
                                <h1>Въезд</h1>
                                <h1>Отъезд</h1>
                            </div>

                            <div className="data-filter">
                                <ul className="data-input">
                                    <li>
                                        <input type="date" name="date-in" id="1" />
                                    </li>
                                    
                                    <li className="horizontal-line"></li>
                                    
                                    <li>
                                        <input type="date" name="date-in" id="2" />
                                    </li>
                                </ul>
                            </div>

                            <div className="quantity-title">
                                <h1>Количество людей</h1>
                            </div>
                            
                            <input type="text" className="quantity-of-people" placeholder="2" />

                            <div className="range">
                                <h1>Цена</h1>
                                <input type="text" className="range-from" placeholder="От"/>
                                <input type="text" className="range-to" placeholder="До"/>
                            </div>

                            <div className="find">
                                <h2>Найти</h2>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="wrapper">
                <div className="popular-hotels">
                    <h1>Популярное в каталоге</h1>
                    <div className="cards">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>

                    <div className="catalog-button">
                        <span>Перейти в каталог</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main