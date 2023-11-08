import React, { useCallback, useEffect, useRef, useState} from 'react'

import userSvg from "../../assets/img/user.svg"
import shopperImg from "../../assets/img/Header-shopper.png"
import Menu from './Menu'
import {menuList} from './menuList'
import { Link,useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getShopItem, setCategory, setSearch } from '../../redux/slices/catalogSlice'
import Search, { notItem } from '../Search/Search'
import WindowItem from '../WindowItem/WindowItem'
import debounce from 'lodash.debounce'
import i18 from '../../utilites/i18next'
import { useTranslation } from 'react-i18next'

function Header (){
    const [burger,setBurger] = useState(false)
    const {search,items} = useSelector(state=>state.catalog)
    const location = useLocation().pathname
    const [inputSearch,setInputSearch] = useState(true)
    const {itemsCart,windowObj} = useSelector(state=>state.cart)
    const dispatch=useDispatch()
    const searchRef = useRef()
    const inputRef = useRef()
    const {t} = useTranslation()

    const getSearch = (e)=>{
        dispatch(setSearch(e.target.value))
    }
    
    const getItem = useCallback(
        debounce((a)=>{
        dispatch(getShopItem(a))
    },250),
    []
    )

    useEffect(()=>{ 
        getItem({search});
    },[search,getItem])

    const counter = (a) => a.reduce((sum, obj) => {
        return obj.count + sum;
    }, 0)

    useEffect(()=>{
        const clickNotSearch = (event) =>{
            !event.composedPath().includes(inputRef.current) && setInputSearch(false)
        }
        document.body.addEventListener('click',clickNotSearch)

        return () => document.body.removeEventListener('click',clickNotSearch)
    },[])

    return(<>
        <header className="header ">
            <div className="header__wrapper ">
                <div className="header__nav_bar-container wrapper">
                    <h3 className="header__nav_title"> <Link to='/' >GIFTS & MERCH</Link></h3>
                    <div  ref={inputRef} className="header__nav_search-cnt">
                        <input type="search"  value={search} onFocus={()=>setInputSearch(true)} onChange={(e)=>getSearch(e)} name="headerSerach" aria-label="Search" placeholder="Search"
                            className="header__nav_search" />
                            {
                                (search && location !== '/catalog' && inputSearch) && 
                                <div ref={searchRef} className="header__search_container">
                                    <div className='header__search_container-scroll'>
                                        {items.length>=1 ? 
                                        items.map(item => {return <Search key={item.id} i={item} inputSearch={setInputSearch} />}) 
                                        : notItem(t('header.searchNoItem'),t('header.searchNoItemSub'))}
                                    </div>
                                    <div className="header__search_link-cnt">
                                        <Link to='catalog'  className="header__search_link"> {t('header.searchCatalogLink')}</Link>
                                    </div>
                                </div>
                            }
                    </div>
                    <i className="fa fa-light fa-magnifying-glass header__nav_search-adaptive"></i>
                    <a className="header__nav_tel btn-special-green" href="tel:+380-630-130-103">+380 630 130 103</a>
                    <button className={burger ? "header__nav_btn active" : "header__nav_btn "}><img src={userSvg} alt="" /></button>
                    <Link to={'cart'} className="header__nav_cart">
                        <i className="fa-solid fa-basket-shopping cart"></i>
                        <div className='header__nav_cart_circle'>{counter(itemsCart)}</div>
                    </Link>
                    <div className={burger ? "header__slider_container active" : "header__slider_container "} onClick={()=>setBurger(!burger)}><span className="header__slider"></span></div>
                    <div className={burger ? "header__nav_ui-container active": "header__nav_ui-container"}>
                        <button className={ burger ? 'header__nav_language active':"header__nav_language"}>
                            <span onClick={()=>i18.changeLanguage('ru')} className={`header__nav_language-ru ${i18.language === 'ru' && 'active'}`}>RU</span>
                            <span onClick={()=>i18.changeLanguage('en')} className={`header__nav_language-eng ${i18.language === 'en' && 'active'}`}>ENG</span>
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
                            <Link to='catalog' onClick={()=>dispatch(setCategory('shopper'))} className="header__promo">{t('header.promo')}</Link>
                        </div>
                    </div>
                    <img src={shopperImg} alt="shopper" className="header__shopper" />
                </div>
            </div>
            {windowObj && <WindowItem key={windowObj} {...windowObj} />}
        </header>
    </>)
}

export default Header