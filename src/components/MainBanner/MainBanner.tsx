import React from 'react'
import circle from "../../assets/img/circle.png"
import bannerGirl from "../../assets/img/main-banner-girl.png"
import bannerHoodie from '../../assets/img/bannerHoodie.png'
import { useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'

export const MainBanner:React.FC = () => {
    const location = useLocation().pathname
    const {t} = useTranslation()

    return(<>
        <section className="main__banner">
            <div className="wrapper">
                <div className="main__banner_container">
                    <div className={`main__banner_text-container ${location === '/catalog' && 'catalogMain__banner_text-container'}`}>
                       {location === '/' ? 
                        <h2 className="main__banner_text">{t('main.title')}</h2> : 
                        <h2 className="main__banner_text catalogMain__banner_text">{t('main.titleCatalog')}</h2>
                        }
                        {location === '/' ? 
                        <p className="main__banner_sub-text sub-text">{t('main.bannerText')}
                        </p>
                        : <p className="main__banner_sub-text catalogMain__banner_sub-text sub-text">{t('main.bannerCatalogText')}
                        </p>
                        }
                       {location === '/' && <div className="main__banner_about-container">
                            <div className="main__banner_about">
                                <img className="main__banner_about-circle" src={circle} alt="" />
                                <p className="main__banner_about_text">
                                {t('main.bannerAboutFirst.1')} <br />{t('main.bannerAboutFirst.2')} <b>ONLY</b>
                                </p>
                            </div>
                            <div className="main__banner_about">
                                <img className="main__banner_about-circle" src={circle} alt="" />
                                <p className="main__banner_about_text">
                                {t('main.bannerAboutSecond.1')} <br />{t('main.bannerAboutSecond.2')} <b>24/7</b>
                                </p>
                            </div>
                            <div className="main__banner_about">
                                <img className="main__banner_about-circle" src={circle} alt="" />
                                <p className="main__banner_about_text">
                                {t('main.bannerAboutThird.1')} <br />{t('main.bannerAboutThird.2')}
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