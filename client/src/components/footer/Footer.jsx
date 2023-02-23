import "./footer.scss"

function Footer(){
    return(
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-content">
                    <div className="footer-logo-block">
                        <img src="/img/svg/logo_light.svg" alt="logo" />
                        <div className="footer-logo-text-block">
                            <p>Политика конфиденциальности</p>
                            <p>Согласие на обработку персональных данных </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;