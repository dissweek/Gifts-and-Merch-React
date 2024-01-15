import React from 'react'
import {Swiper,SwiperSlide,} from 'swiper/react'
import {Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation';
import {SliderBtn} from '../index';
import creativeImage from "../../assets/img/creative-image.png"
import creativePhoto from "../../assets/img/creative-we-can-photo.png"
import creativeCircle from "../../assets/img/creative-circle.png"

import { sliderCreative } from '../../assets/list/sliders'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export const Creative: React.FC =()=>{
    const {t} = useTranslation()
    return(<>
        <section className="creative">
            <div className="creative__wrapper">
                <div className="creative__container wrapper">
                    <div className="creative__title">
                        <span className="creative__title_span creative__title_span-red">C</span>
                        <span className="creative__title_span creative__title_span-blue-light">R</span>
                        <span className="creative__title_span creative__title_span-blue-black">E</span>
                        <span className="creative__title_span creative__title_span-purple">A</span>
                        <span className="creative__title_span creative__title_span-black">T</span>
                        <span className="creative__title_span creative__title_span-red">I</span>
                        <span className="creative__title_span creative__title_span-yellow">V</span>
                        <span className="creative__title_span creative__title_span-green">E</span>
                    </div>
                    <h3 className="creative__subtitle">{t('creative.subTitle')}</h3>
                    <p className="creative__text sub-text">{t('creative.subText')}</p>
                    <div className="creative__buttons">
                        <Link to={'/catalog'} onClick={()=>window.scrollTo(0,550)} className="creative__buttons_btn creative__buttons_btn-left">{t('creative.linkSets')}</Link>
                        <Link to={'/catalog'} onClick={()=>window.scrollTo(0,550)} className="creative__buttons_btn creative__buttons_btn-right">{t('creative.linkYour')}</Link>
                    </div>
                    <div className="creative__image">
                        <img className="creative__image_img" src={creativeImage} alt="" />
                    </div>
                </div>
            </div>
            <div className="creative__we-can wrapper">
                <div className="creative__we-can_image" >
                    <img src={creativePhoto} alt="" className="creative__we-can_image-photo" />
                    <img src={creativeCircle} alt="" className="creative__we-can_image-up" />
                    <img src={creativeCircle} alt="" className="creative__we-can_image-down" />
                </div>
                <div className="creative__we-can_content">
                    <p className="creative__we-can_content-title">
                        {t('creative.contentTitle')}
                    </p>
                    <p className="creative__we-can_content-subtitle sub-text">
                        {t('creative.contentSubTitle')}
                    </p>
                    <div className="creative__we-can_slider">
                        <div  className="creative__we-can_slider-wrapper">
                            <Swiper modules={[Navigation]} spaceBetween={0} slidesPerView={4} slidesPerGroup={4} loop={true}>
                                {sliderCreative.map((i:{logo:string},index)=>{return (
                                    <SwiperSlide key={index}>
                                        <div className="creative__we-can_slider-link-cnt">
                                            <img src={i.logo} alt="logo" />
                                        </div>
                                    </SwiperSlide>
                                )})}
                                <SliderBtn />
                            </Swiper>   
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
