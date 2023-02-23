import React from "react"
import axios from "axios"

import Navbar from "../../components/navbar/Navbar"
import Card from "../../components/card/Card"

import { Link } from 'react-router-dom'

import './main.scss'
function Main({hotels}){

    const [filteredData, setFilteredData] = React.useState({
        "date_in":"",
        "date_out":"",
        "quantity_of_people":0,
        "city":"",
        "price_min":0,
        "price_max":0
    })

    function handle(e){
        const newdata={...filteredData}
        newdata[e.target.id] = e.target.value
        setFilteredData(newdata)
    }

    function submit(e){
        e.preventDefault();

        axios.post("http://localhost:5000/api/filter",{
            date_in: filteredData.date_in,
            date_out: filteredData.date_out,
            quantity_of_people: filteredData.quantity_of_people,
            city: filteredData.city,
            price_min: filteredData.price_min,
            price_max: filteredData.price_max
        },)
        .then(res=>{
            console.log(res.data);
        })
    }

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
                            <img className="social-ico" src="./img/social/youtube.svg"  alt="social-ico"/>
                            <img className="social-ico" src="./img/social/instagram.svg"alt="social-ico"/>
                            <img className="social-ico" src="./img/social/vk.svg"       alt="social-ico"/>
                            <img className="social-ico" src="./img/social/telegram.svg" alt="social-ico"/>
                            <img className="social-ico" src="./img/social/whatsapp.svg" alt="social-ico"/>
                        </div>
                    </li>

                    <li className="right-block">
                        <form action="http://localhost:5000/api/filter" onSubmit={(e)=>submit(e)} method="post" id="filter">
                            <div className="filter">

                                <div className="in-out-title">
                                    <h1>Въезд</h1>
                                    <h1>Отъезд</h1>
                                </div>

                                <div className="data-filter">
                                    <ul className="data-input">
                                        <li>
                                            <input onChange={(e)=>handle(e)} id="date_in" value={filteredData.date_in} type="date" name="date_in"  />
                                        </li>
                                        
                                        <li className="horizontal-line"></li>
                                        
                                        <li>
                                            <input onChange={(e)=>handle(e)} id="date_out" value={filteredData.date_out} type="date" name="date_out" />
                                        </li>
                                    </ul>
                                </div>

                                <div className="quantity-title">
                                    <h1>Количество людей</h1>
                                </div>
                                
                                <input onChange={(e)=>handle(e)} id="quantity_of_people" value={filteredData.quantity_of_people} name="quantity_of_people" type="text" className="quantity-of-people" placeholder="2" />

                                <div className="range">
                                    <h1>Цена</h1>
                                    <input onChange={(e)=>handle(e)} id="price_min" value={filteredData.price_min} name="price_min" type="text" className="range-from" placeholder="От"/>
                                    <input onChange={(e)=>handle(e)} id="price_max" value={filteredData.price_max} name="price_max" type="text" className="range-to" placeholder="До"/>
                                </div>

                                <button type="submit" value="submit" form="filter" className="find">
                                    <h2>Найти</h2>
                                </button>
                            </div>
                        </form>
                    </li>
                </ul>
            </div>

            <div className="wrapper">
                <div className="popular-hotels">
                    <h1>Популярное в каталоге</h1>
                    <div className="cards">
                        {hotels.map((hotel) => (
                            <Card hotel={hotel} title={hotel.title} price={hotel.price} city={hotel.city} capacity={hotel.capacity} img={hotel.img} tags={hotel.tags}/>
                        ))}
                    </div>

                    <Link className="link" to="/hotels">
                        <div className="catalog-button">
                            <span>Перейти в каталог</span>
                        </div>
                    </Link>

                    
                </div>
            </div>
        </div>
    )
}

export default Main