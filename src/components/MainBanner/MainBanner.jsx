import React from 'react'
import circle from "../../assets/img/circle.png"
import bannerGirl from "../../assets/img/main-banner-girl.png"

function MainBanner (){
return(<>
            <section className="main__banner">
            <div className="wrapper">
                <div className="main__banner_container">
                    <div className="main__banner_text-container">
                        <h2 className="main__banner_text">Свежее дыхание в корпоративной жизни</h2>
                        <p className="main__banner_sub-text sub-text">Ми вдосконалили процес замовлення продукції для того,
                            щоб Ви і Ваша компанія сконцентрувались на основних задачах і досягали поставлених цілей.
                        </p>
                        <div className="main__banner_about-container">
                            <div className="main__banner_about">
                                <img className="main__banner_about-circle" src={circle} alt="" />
                                <p className="main__banner_about_text">
                                    Высокое <br />качество <b>ONLY</b>
                                </p>
                            </div>
                            <div className="main__banner_about">
                                <img className="main__banner_about-circle" src={circle} alt="" />
                                <p className="main__banner_about_text">
                                    Поддержка <br /> менеджера <b>24/7</b>
                                </p>
                            </div>
                            <div className="main__banner_about">
                                <img className="main__banner_about-circle" src={circle} alt="" />
                                <p className="main__banner_about_text">
                                    Выполнение заказа <br /> <b>в turbo-режиме</b>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="main__banner_photo-container">
                        <img src={bannerGirl} alt="" />
                    </div>
                </div>
            </div>
            <div className="main__banner_adaptive-space"></div>
        </section>
</>)
}

export default MainBanner