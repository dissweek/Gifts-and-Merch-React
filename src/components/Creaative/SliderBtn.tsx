import React from "react"
import { useSwiper } from "swiper/react"

export const SliderBtn: React.FC = ()=> {
    const swiper = useSwiper()
    return (
        <div className="creative__we-can_slider-btn-container ">
            <button  className="slider" onClick={()=>swiper.slidePrev()}><i className="fa fa-light fa-chevron-left creative__we-can_slider-btn btn-left cl-grey "></i></button>
            <button className="slider" onClick={()=>swiper.slideNext()}><i  className="fa fa-light fa-chevron-right creative__we-can_slider-btn btn-right cl-grey " ></i></button>
        </div>
    )
}