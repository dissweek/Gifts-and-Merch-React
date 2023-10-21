import React from 'react'
import LogoNike from "../../assets/img/logo/Logo_nike.png"
import LogoCoca from "../../assets/img/logo/Logo_coca.png"
import LogoAtlas from "../../assets/img/logo/Logo_atlas.png"
import LogoMegogo from "../../assets/img/logo/Logo_megogo.png"
import LogoBox from "../../assets/img/logo/Logo_box.png"


function Partners (){
return(<>
     <section className="partners">
            <div className="partners__slider wrapper">
                <h2 className="partners__slider_title">
                    С нами соотрудничают
                </h2>
                <div className="partners__slider_wrapper">
                    <div><i className="fa fa-light fa-chevron-left slider-btn btn-left cl-grey"></i></div>
                    <div className="partners__slider_overflow">
                        <div className="partners__slider_slider">
                            <div className="partners__slider_img-container">
                                <img src={LogoNike} alt="logo" className="partners__slider_img" />
                            </div>
                            <div className="partners__slider_img-container">
                                <img src={LogoCoca} alt="logo" className="partners__slider_img" />
                            </div>
                            <div className="partners__slider_img-container">
                                <img src={LogoAtlas} alt="logo" className="partners__slider_img" />
                            </div>
                            <div className="partners__slider_img-container">
                                <img src={LogoMegogo} alt="logo" className="partners__slider_img" />
                            </div>
                            <div className="partners__slider_img-container">
                                <img src={LogoBox} alt="logo" className="partners__slider_img" />
                            </div>
                            <div className="partners__slider_img-container">
                                <img src={LogoNike} alt="logo" className="partners__slider_img" />
                            </div>
                            <div className="partners__slider_img-container">
                                <img src={LogoCoca} alt="logo" className="partners__slider_img" />
                            </div>
                            <div className="partners__slider_img-container">
                                <img src={LogoAtlas} alt="logo" className="partners__slider_img" />
                            </div>
                            <div className="partners__slider_img-container">
                                <img src={LogoMegogo} alt="logo" className="partners__slider_img" />
                            </div>
                            <div className="partners__slider_img-container">
                                <img src={LogoBox} alt="logo" className="partners__slider_img" />
                            </div>
                        </div>
                    </div>
                    <i className="fa fa-light fa-chevron-right slider-btn btn-right cl-grey"></i>
                </div>
            </div>
        </section>
</>)
}

export default Partners