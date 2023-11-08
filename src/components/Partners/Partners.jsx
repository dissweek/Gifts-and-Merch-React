import React, {useRef} from 'react'
import { partnersSlider } from '../../assets/list/sliders'
import {Swiper,SwiperSlide,} from 'swiper/react'
import {Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next'

function Partners (){
    const checkSliderWidth= useRef()
    const checkImgWidth = useRef()
    // const [sliders,setSliders] = useState(5)
    // useEffect(()=>{
    //     setSliders(Math.floor(checkSliderWidth.current.clientWidth / checkImgWidth.current.clientWidth))
    // },[checkSliderWidth,checkImgWidth,sliders])
    const {t} = useTranslation()

    return(
        <section className="partners">
            <div className="partners__slider wrapper">
                <h2 className="partners__slider_title">
                    {t('partners.partners')}
                </h2>
                <div className="partners__slider_wrapper">
                    <div className="partners__slider_overflow">
                        <div ref={checkSliderWidth} className="partners__slider_slider">
                            <Swiper modules={[Autoplay]}  autoplay= {{delay:0,disableOnInteraction: false}} speed={2000}  spaceBetween={0} slidesPerGroup={1} loop={true}  breakpoints={
                                {
                                    320:{
                                        slidesPerView:1
                                    },
                                    425:{
                                        slidesPerView:2
                                    },
                                    768:{
                                        slidesPerView:3
                                    },
                                    1024:{
                                        slidesPerView:4
                                    },
                                    1440:{
                                        slidesPerView:5
                                    },
                                }
                                } >
                                {partnersSlider.map((i,index)=>{ return (
                                    <SwiperSlide key={index}>
                                        <div className="partners__slider_img-container">
                                            <img ref={checkImgWidth} src={i.logo} alt="logo" className="partners__slider_img" />
                                        </div>
                                    </SwiperSlide>
                                )})}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners