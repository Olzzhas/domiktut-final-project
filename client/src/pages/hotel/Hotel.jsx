import "./hotel.scss"
import NavbarLight from "../../components/navbar_light/NavbarLight"
import Footer from "../../components/footer/Footer"
import React from "react"
import axios from "axios"

function Hotel(){

    const [dateIn, setDateIn] = React.useState("")
    const [dateOut, setDateOut] = React.useState("")

    function makeBooking(){
        // event.prevent.defalut()

        axios.post("http://localhost:5000/api/booking",
        {
            date_in:dateIn,
            date_out:dateOut,
            hotel_id:JSON.parse(localStorage.getItem("cardId"))
        },
        {
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res=>console.log(res.data))
    }

    return (
        <div>
            <NavbarLight/>
            <div className="hor-line"> </div>

            <div className="hotel-wrapper">


                <div className="title-address-div">
                    <div className="div-address">
                        <h1>{localStorage.getItem("cardTitle")}</h1>
                        <span>Рублево-Успенское шоссе 24 км от МКАД</span>
                    </div>
                    <img src="/img/svg/fav-button.svg" alt="fav" />
                </div>

                <div className="photo-container">
                     <div className="big-photo-container">
                        <img src={localStorage.getItem("cardImg")} alt="hotel" />
                     </div>

                     <div className="four-photo-container">
                        <div className="row-container">

                            <div className="first-photo-block">
                                <img src="/img/hotels/temp/temp_1.png" alt="temp" />
                            </div>

                            <div className="second-top-photo-block">
                                <img src="/img/hotels/temp/temp_2.png" alt="temp" />
                            </div>
                            
                        </div>

                        <div className="row-container">

                            <div className="first-photo-block">
                                <img src="/img/hotels/temp/temp_3.png" alt="temp" />
                            </div>

                            <div className="second-bottom-photo-block">
                                <img src="/img/hotels/temp/temp_4.png" alt="temp" />
                            </div>
                            
                        </div>
                     </div>
                </div>

                 <div className="info-parent-contianer"> 
                    <div className="info-left-side-container">

                        <div className="flat-info">
                            <div className="span-p-info">
                                <p>Тип жилья</p>
                                <span>Уникальное жилье</span>
                            </div>

                            <div className="span-p-info">
                                <p>Этажи</p>
                                <span>2 этажа</span>
                            </div>

                            <div className="span-p-info">
                                <p>Площадь</p>
                                <span>234 м²</span>
                            </div>

                            <div className="span-p-info">
                                <p>Участок</p>
                                <span>12 соток</span>
                            </div>
                        </div>

                        <div className="flat-line"></div>

                        <div className="bedplace-info-container">
                            <div className="svg-bedplace-block">
                                <img src="/img/svg/bedplace.svg" alt="bedplace" />
                                <span>25 спальных мест</span>
                            </div>

                            <div className="svg-bedplace-block">
                                <img src="/img/svg/bedplace.svg" alt="bedplace" />
                                <span>5 спален</span>
                            </div>

                            <div className="svg-bedplace-block">
                                <img src="/img/svg/user.svg" alt="user" />
                                <span>до {localStorage.getItem("cardCapacity")} человек</span>
                            </div>
                        </div>

                        <div className="hotel-description-block">
                            <h1 className="hotel-info-h1">Описание</h1>
                            <p>
                                Гостевой дом с садом, террасой, рестораном и баром расположен в курортном поселке Боровое. На территории обустроена бесплатная частная парковка. В гостевом доме можно воспользоваться бесплатным Wi-Fi.

                                <br/><br/>Все номера гостевого дома оснащены телевизором с плоским экраном, в числе удобств шкаф для одежды и собственная ванная комната. Предоставляются полотенца и постельное белье. В некоторых номерах обустроена кухня с микроволновой печью и плитой. Во всех номерах гостевого дома «СКАЛА» установлен холодильник.

                                Гостям предлагают завтрак по меню или континентальный завтрак.<br/><br/>

                                Сотрудники стойки регистрации, говорящие на английском и русском языках, всегда готовы оказать необходимую помощь.

                                Расстояние до международного аэропорта Кокшетау составляет 82 км.

                                Парам особенно нравится расположение — они оценили проживание в этом районе для поездки вдвоем на 8,6. 
                            </p>
                        </div>

                        <div className="time-in-out-block">
                            <h1 className="hotel-info-h1">Время заезда и выезда</h1>
                            <div className="time-block">
                                <p className="time-in">17:00</p>
                                <div className="time-ver-line">

                                </div>
                                <p className="time-out">15:00</p>
                            </div>
                        </div>
                    </div>

                    <div className="info-right-side-container">
                        <div className="info-right-side-wrapper">
                            <h1 className="hotel-info-h1">Стоимость</h1>

                            <div className="prices-zalog-block">
                                <div className="prices-container">
                                    <div className="prices-first-row">

                                        <div className="price-day">
                                            <p>Будни</p>
                                            <span>{localStorage.getItem("cardPrice")} ₸</span>
                                            {/* <span>75 000 ₸</span> */}
                                        </div>

                                        <div className="price-day">
                                            <p>Пятница</p>
                                            <span>{localStorage.getItem("cardPrice")*1 +20000} ₸</span>
                                        </div>
                                    </div>

                                    <div className="prices-first-row">

                                        <div className="price-day">
                                            <p>Суббота</p>
                                            <span>{localStorage.getItem("cardPrice")*1 +30000} ₸</span>
                                        </div>

                                        <div className="price-day">
                                            <p>Воскресенье</p>
                                            <span>{localStorage.getItem("cardPrice")*1 +30000} ₸</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="zalog-ver-line"></div>

                                <div className="zalog">
                                    <div className="price-day">
                                        <p>Залог</p>
                                        <span>15 000 ₸</span>
                                    </div>
                                </div>
                            </div>

                            <div className="price-hor-line"></div>

                            <div className="full-weekend">
                                <p>Полные выходные (ПТ-ВС)</p> <span>{localStorage.getItem("cardPrice")*1 +30000} ₸</span>
                            </div>

                            <div className="price-hor-line"></div>

                            <div className="full-weekend">
                                <p>Новый год (2 дня)</p> <span>от {localStorage.getItem("cardPrice")*3 } ₸</span>
                            </div>

                            <div className="full-weekend">
                                <p>Январские празднкии (сутки)</p> <span>от {localStorage.getItem("cardPrice")*4} ₸</span>
                            </div>
                            <form onSubmit={(e)=>makeBooking(e)} >
                            <div className="make-reservation-block">
                                
                                <div className="hotel-info__data">
                                    <input value={dateIn} onChange={(e)=>{setDateIn(e.target.value)}} type="date" />
                                    <input value={dateOut} onChange={(e)=>{setDateOut(e.target.value)}} type="date" />
                                </div>
                                
                                <div onClick={()=>makeBooking()} type="submit" className="reserve-button"><span>Забронировать</span></div>
                                
                            </div>
                            </form>
                        </div>
                    </div>
                 </div>

                 


            </div>

            <Footer/>
        </div>
    )
}

export default Hotel