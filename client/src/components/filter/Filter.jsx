import React from "react"
import './filter.scss'

function Filter(){
    const [priceIsOpen, setPriceOpen] = React.useState(false)

    function priceClickHandler(){
        setPriceOpen(!priceIsOpen)
        setCityIsOpen(false)
        setBedroomIsOpen(false)
        setTagsIsOpen(false)
    }

    const [tags, setTags] = React.useState([
        {
            id: 1,
            title : "сауна или баня",
            isChecked: false,
        },
        {
            id: 2,
            title : "русская баня на дровах",
            isChecked: false,
        },
        {
            id: 3,
            title : "хаммам",
            isChecked: false,
        },
        {
            id: 4,
            title : "бильярд",
            isChecked: false,
        },
        {
            id: 5,
            title : "настольный теннис",
            isChecked: false,
        },
    ])

    function tagClickHandler(tag){
        tag.isChecked = (!tag.isChecked)
        setTags(()=>[...tags])
    }

    const [tagsIsOpen, setTagsIsOpen] = React.useState(false)

    function tagOpenClickHandler(){
        setTagsIsOpen(!tagsIsOpen)
        setPriceOpen(false)
        setCityIsOpen(false)
        setBedroomIsOpen(false)

    }

    const [bedroomIsOpen, setBedroomIsOpen] = React.useState(false)

    function bedroomOpenClickHandler(){
        setBedroomIsOpen(!bedroomIsOpen)
        setTagsIsOpen(false)
        setCityIsOpen(false)
        setPriceOpen(false)
    }

    const [bedroomCount, setBedroomCount] = React.useState(2)
    const [bedplaceCount, setBedplaceCount] = React.useState(5)

    function bedroomPlusClickHandler(){
        setBedroomCount(bedroomCount+1)
    }

    function bedroomMinusClickHandler(){
        setBedroomCount(bedroomCount-1)
    }

    function bedplacePlusClickHandler(){
        setBedplaceCount(bedplaceCount+1)
    }

    function bedplaceMinusClickHandler(){
        setBedplaceCount(bedplaceCount-1)
    }

    const [cities, setCities] = React.useState([
        {
            id: 1,
            title: "Костанай",
            isChecked: false
        },
        {
            id: 2,
            title: "Астана",
            isChecked: false
        },
        {
            id: 3,
            title: "Алматы",
            isChecked: false
        },
        {
            id: 4,
            title: "Актау",
            isChecked: false
        },
        {
            id: 5,
            title: "Шымкент",
            isChecked: false
        },
        {
            id: 6,
            title: "Кокшетау",
            isChecked: false
        },
        {
            id: 7,
            title: "Туркестан",
            isChecked: false
        },    
    ])

    function cityClickHandler(city){
        city.isChecked = (!city.isChecked)
        setCities(()=>[...cities])
    }

    const [cityIsOpen, setCityIsOpen] = React.useState(false)

    function cityOpenClickHandler(){
        setCityIsOpen(!cityIsOpen)
        setBedroomIsOpen(false)
        setTagsIsOpen(false)
        setPriceOpen(false)
    }
    return(
        <div className="hotel-info__wrapper">
                
                <div className="hotel-info__filter">

                    <div className="flex">
                        <div onClick={priceClickHandler} className="hotel-info__price">
                            <div className="hotel-info__button-content">
                                <span className="button-font">Цена</span>
                                <img className="price-arrow-light" src="/img/svg/arrow-down.svg" alt="arrow" />
                            </div>
                        </div>

                        <div className={priceIsOpen ? "price-dropdown" : "price-dropdown-novisible"}>

                            <div className="price-dropdown__input-block">
                                <div className="price-block">
                                    <span>Мин. цена</span>
                                    <input type="text" placeholder="15 000" name="" id="" />
                                </div>
                                <div className="price-block">
                                    <span>Макс. цена</span>
                                    <input type="text" placeholder="900 000" name="" id="" />
                                </div>
                            </div>

                            <div className="price-dropdown__submit-block">
                                <div className="p-div">
                                    <p>Сбросить</p>
                                </div>
                                <button onClick={priceClickHandler} className="price-dropdown__submit">Сохранить</button>
                            </div>


                        </div>

                        <div className="hotel-info__data">
                            <input type="date" />
                            <input type="date" />
                        </div>
                    </div>

                    <div className="flex">
                        <div onClick={tagOpenClickHandler} className="hotel-info__tags">
                            <div className="hotel-info__button-content">
                                <span className="button-font">Развлечения</span>
                                <img className="price-arrow-light" src="/img/svg/arrow-down.svg" alt="arrow" />
                            </div>
                        </div>

                        <div className={tagsIsOpen ? "tag-dropdown" : "tag-dropdown-hidden"}>
                            <div className="tags-block">
                                {tags.map((tag) => (
                                    <div onClick={()=>{tagClickHandler(tag)}} className="tag-item">
                                        <img  src={tag.isChecked ? "/img/svg/checkbox-active.png" : "/img/svg/checkbox-non-active.png"} alt="checkbox" />
                                        <span>{tag.title}</span>
                                    </div>
                                ))}
                            </div>
                            
                        </div>

                        <div onClick={bedroomOpenClickHandler} className="hotel-info__bedplace">
                            <div className="hotel-info__button-content">
                                <span className="button-font">Количество спален и спальных мест</span>
                                <img className="price-arrow-light" src="/img/svg/arrow-down.svg" alt="arrow" />
                            </div>
                        </div>

                        <div className={bedroomIsOpen ? "hotel-info__bedplace-dropdown" : "hotel-info__bedplace-dropdown-closed"}>
                            <div className="hotel-info__bedplace-dropdown-content">
                                <div className="bedplace-input-block">
                                    <span>Кол-во спален</span>
                                    <div className="bedplace-input">
                                        <img onClick={bedroomMinusClickHandler} className="minus-svg" src="/img/svg/minus.svg" alt="minus" />
                                        <span>{bedroomCount}</span>
                                        <img onClick={bedroomPlusClickHandler} className="plus-svg" src="/img/svg/plus.svg" alt="plus" />
                                    </div>
                                </div>

                                <div className="bedplace-input-block">
                                    <span>Кол-во спальных мест</span>
                                    <div className="bedplace-input">
                                        <img onClick={bedplaceMinusClickHandler} className="minus-svg" src="/img/svg/minus.svg" alt="minus" />
                                        <span>{bedplaceCount}</span>
                                        <img onClick={bedplacePlusClickHandler} className="plus-svg" src="/img/svg/plus.svg" alt="plus" />
                                    </div>
                                </div>
                            </div>

                            <div onClick={bedroomOpenClickHandler} className="bedplace-submit">
                                <span>Сохранить</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div onClick={cityOpenClickHandler} className="hotel-info__city">
                            <div className="hotel-info__button-content">
                                <span className="button-font">Город</span>
                                <img className="price-arrow-light" src="/img/svg/arrow-down.svg" alt="arrow" />
                            </div>
                        </div>

                        <div className={cityIsOpen ? "hotel-info__city-dropdown" : "hotel-info__city-dropdown-closed"}>
                            <div className="city-dropdown-container">
                                {cities.map((city)=>(
                                    <div onClick={()=>{cityClickHandler(city)}} className="city-item">
                                        <img  src={city.isChecked ? "/img/svg/checkbox-active.png" : "/img/svg/checkbox-non-active.png"} alt="checkbox" />
                                        <span>{city.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hotel-info__result-button">
                            <span>Показать результат</span>
                        </div>
                    </div>
    
                </div>
            </div>
    )
}

export default Filter