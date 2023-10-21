import React from 'react'
import creativeImage from "../../assets/img/creative-image.png"
import creativePhoto from "../../assets/img/creative-we-can-photo.png"
import creativeCircle from "../../assets/img/creative-circle.png"
import creativeWeCan1 from "../../assets/img/wecan1.png"
import creativeWeCan2 from "../../assets/img/wecan2.png"
import creativeWeCan3 from "../../assets/img/wecan3.png"
import creativeWeCan4 from "../../assets/img/wecan4.png"




function Creative (){
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
            <h3 className="creative__subtitle">Хотите удивить ваших коллег/партнеров необычными подарками?</h3>
            <p className="creative__text sub-text">Выбирайте готовые подарочные наборы или укажите критерии по
                которым мы соберем для Вас уникальный бокс.</p>
            <div className="creative__buttons">
                <a href="./pages/index.html" className="creative__buttons_btn creative__buttons_btn-left">Перейти к наборам</a>
                <a href="./pages/index.html" className="creative__buttons_btn creative__buttons_btn-right">Создать свой</a>
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
                Помимо готовой продукции высокого качества, мы можем для Вас произвести одежду, аксессуры,
                вкусности и другое под заказ.
            </p>
            <p className="creative__we-can_content-subtitle sub-text">
                Благодаря личному производству мы изготавливаем большие партии в короткие сроки, а так же у Вас
                всегда есть возможность кастомизировать изделия.
            </p>
            <div className="creative__we-can_slider">
                <div  className="creative__we-can_slider-wrapper">
                    <div className="creative__we-can_slider-link">
                        <div className="creative__we-can_slider-link-cnt"><img src={creativeWeCan1} alt="" />
                        </div>
                        <div className="creative__we-can_slider-link-cnt"><img src={creativeWeCan2} alt="" />
                        </div>
                        <div className="creative__we-can_slider-link-cnt"><img src={creativeWeCan3} alt="" /> 
                        </div>
                        <div className="creative__we-can_slider-link-cnt"><img src={creativeWeCan4} alt="" />
                        </div>
                        <div className="creative__we-can_slider-link-cnt"><img src={creativeWeCan1} alt="" />
                        </div>
                        <div className="creative__we-can_slider-link-cnt"><img src={creativeWeCan2} alt="" />
                        </div>
                        <div className="creative__we-can_slider-link-cnt"><img src={creativeWeCan3} alt="" />
                        </div>
                        <div className="creative__we-can_slider-link-cnt"><img src={creativeWeCan4} alt="" />
                        </div>
                    </div>
                </div>
                <div className="creative__we-can_slider-btn-container">
                    <i className="fa fa-light fa-chevron-left creative__we-can_slider-btn btn-left
                        cl-grey"></i>
                    <i className="fa fa-light fa-chevron-right creative__we-can_slider-btn btn-right cl-grey "></i>
                </div>
            </div>
        </div>
    </div>
</section>
</>)
}

export default Creative