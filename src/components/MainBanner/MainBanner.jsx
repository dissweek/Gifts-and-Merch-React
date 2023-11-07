import React from 'react'
import circle from "../../assets/img/circle.png"
import bannerGirl from "../../assets/img/main-banner-girl.png"
import bannerHoodie from '../../assets/img/bannerHoodie.png'
import { useLocation } from 'react-router'

function MainBanner (){
    const location = useLocation().pathname
return(<>
            <section className="main__banner">
            <div className="wrapper">
                <div className="main__banner_container">
                    <div className={`main__banner_text-container ${location === '/catalog' && 'catalogMain__banner_text-container'}`}>
                       {location === '/' ? 
                        <h2 className="main__banner_text">Свежее дыхание в корпоративной жизни</h2> : 
                        <h2 className="main__banner_text catalogMain__banner_text">купить чашку с логотипом</h2>
                        }
                        {location === '/' ? 
                        <p className="main__banner_sub-text sub-text">Ми вдосконалили процес замовлення продукції для того,
                            щоб Ви і Ваша компанія сконцентрувались на основних задачах і досягали поставлених цілей.
                        </p>
                        : <p className="main__banner_sub-text catalogMain__banner_sub-text sub-text">Чашки с логотипом - это классика. Любая конференция или бизнес встреча не обойдется без данного реквизина. Так же  это прекрасный подарок для ваших сотрудников, деловых партнеров, друзей или постоянных клиентов . Владельцы заведений общественного питания могут заказать крупные партии чашек для своего ресторана или кафе. Также вы можете распространять эти изделия во время рекламных мероприятий, презентаций, выставок или конференций.
                        </p>
                        }
                       {location === '/' && <div className="main__banner_about-container">
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
                        </div>}
                    </div>
                    <div className={`main__banner_photo-container ${location === '/catalog' && 'catalogMain__banner_photo-container'}`}>
                        <img src={location === '/' ? bannerGirl : bannerHoodie} alt="" />
                    </div>
                </div>
            </div>
            <div className={`main__banner_adaptive-space ${location === '/catalog' && 'catalogMain__adaptive-space'}`} ></div>
        </section>
</>)
}

export default MainBanner