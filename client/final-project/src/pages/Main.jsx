import Navbar from "../components/Navbar"

import './main.scss'
function Main(){
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
                        <div className="test"></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Main