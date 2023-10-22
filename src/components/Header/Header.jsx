import React, { useState } from 'react'
import userSvg from "../../assets/img/user.svg"
import shopperImg from "../../assets/img/Header-shopper.png"
import Menu from './Menu'
import {menuList} from './menuList'

function Header (){
    const [burger,setBurger] = useState(false)
return(<>
    <header className="header ">
        <div className="header__wrapper ">
            <div className="header__nav_bar-container wrapper">
               <h3 className="header__nav_title"> <a href="./../../index.html">GIFTS & MERCH</a></h3>
                <input type="search" name="headerSerach" aria-label="Search" placeholder="Search"
                    className="header__nav_search" />
                <i className="fa fa-light fa-magnifying-glass header__nav_search-adaptive"></i>
                <a className="header__nav_tel btn-special-green" href="tel:+380-630-130-103">+380 630 130 103</a>
                <button className={burger ? "header__nav_btn active" : "header__nav_btn active"}><img src={userSvg} alt="" /></button>
                <div className={burger ? "header__slider_container active" : "header__slider_container active"} onClick={()=>setBurger(!burger)}><span className="header__slider"></span></div>
                <div className={burger ? "header__nav_ui-container active": "header__nav_ui-container"}>
                    <button className={ burger ? 'header__nav_language active':"header__nav_language"}>
                        <span className="header__nav_language-ru active">RU</span>/<span
                            className="header__nav_language-eng">ENG</span>
                    </button>
                </div>
            </div>
            <div className={burger ? "header__menu active" : "header__menu"}>
                <div className="header__menu-container wrapper">
                    <div className="header__list-container">
                        <ul className="header__list">
                        {menuList.map((i,index)=>{
                        return <Menu key={index} {...menuList[index]}/>})}
                            
                        </ul> 
                        <div className="header__adaptive_contacts">
                            <a href="mailto:dissfx2@gmail.com" className="header__adaptive_mail link-mail">dissfx2@gmail.com</a>
                            <a className="header__adaptive_tel btn-special-green" href="tel:+380-630-130-103">+380 630 130 103</a>
                            <div className="header__adaptive_social-container">
                                <i className="fa fa-brands fa-facebook header__adaptive_social contacts-social cl-blue"></i>
                                <i className="fa-brands fa-instagram header__adaptive_social contacts-social cl-pink"></i>
                                <i className="fa-brands fa-linkedin header__adaptive_social contacts-social cl-blueGrey"></i>
                            </div>
                        </div>
                    </div>
                    <div className="header__promo-container">
                        <a href="./pages/index.html" className="header__promo">шопперы со скидкой -25%</a>
                    </div>
                </div>
                <img src={shopperImg} alt="shopper" className="header__shopper" />
            </div>
        </div>
    </header>
</>)
}

export default Header