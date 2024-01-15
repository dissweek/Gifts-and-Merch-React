import React, { Dispatch, SetStateAction } from "react";
import style from './style.module.scss'
import { setWindowObj } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { CatalogItems } from "../../redux/slices/catalogSlice";


export const notItem = (a:string,b:string) => {
    return (
        <div className={`${style.header__search_item} ${style.header__search_noItem}`}>
            <p className={style.header__search_noItem_text}> {a} </p><br />
            <p className={style.header__search_noItem_subText}> {b} </p>
        </div>
    )
}

type SearchStateType = {
    id:number;
    category:string;
    name:string;
    res:{img:string;color:string}[];
    fullName:string;
    article:string;
    about:string;
    parametr:{name:string;value:string}[];
    price:number;
    size:[string]
    inputSearch: Dispatch<SetStateAction<boolean>> 
}

export const Search:React.FC<SearchStateType> =({...i})=> {

    
    const dispatch=useDispatch()
    const openWindow =(i:SearchStateType)=>{
        dispatch(setWindowObj(i))
        i.inputSearch(false)
    }

    return(
        <div className={style.header__search_item}>
            <div className={style.wrapper}>
                <div className={style.header__search_img_cnt}>
                    <img src={i.res[0].img} alt="item" className={style.header__search_img} />
                </div>
                <div className={style.header__search_info}>
                    <p className={style.header__search_info_name}>{i.fullName}</p>
                    <p className={style.header__search_info_subName}>Art. : {i.article}</p>
                </div>
            </div>
            <div className={style.header__search_price_cnt}>
                <p className={style.header__search_price}>${i.price}</p>
                <div className={style.header__search_price_btn} onClick={()=>openWindow(i)}><i className={`fa-solid fa-cart-plus ${style.cart}`}></i></div>
            </div>

        </div>
    )
}
