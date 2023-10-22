import React, {useEffect, useRef, useState} from 'react'
import { partnersSlider } from '../../assets/list/sliders'
import {Swiper,SwiperSlide,} from 'swiper/react'
import {Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation';

function Partners (){
    const checkSliderWidth= useRef()
    const checkImgWidth = useRef()
    const [sliders,setSliders] = useState()
    useEffect(()=>{
    setSliders(Math.floor(checkSliderWidth.current.clientWidth / checkImgWidth.current.clientWidth))
    console.log(sliders)
    },[checkSliderWidth,checkImgWidth,sliders])

    return(
        <section className="partners">
            <div className="partners__slider wrapper">
                <h2 className="partners__slider_title">
                    С нами соотрудничают
                </h2>
                <div className="partners__slider_wrapper">
                    <div className="partners__slider_overflow">
                        <div ref={checkSliderWidth} className="partners__slider_slider">
                            <Swiper modules={[Navigation]} spaceBetween={0} slidesPerView={sliders} navigation={{ prevEl: '.prev', nextEl: '.next' }} slidesPerGroup={sliders} loop={true}>
                                {partnersSlider.map((i,index)=>{ return (
                                    <SwiperSlide key={index}>
                                        <div className="partners__slider_img-container">
                                            <img ref={checkImgWidth} src={i.logo} alt="logo" className="partners__slider_img" />
                                        </div>
                                    </SwiperSlide>
                                )})}
                                <button slot="container-start"  className='prev'><i className="fa fa-light fa-chevron-left slider-btn btn-left cl-grey" ></i></button>
                                <button slot="container-end"  className='next'><i className="fa fa-light fa-chevron-right slider-btn btn-right cl-grey "></i></button>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners