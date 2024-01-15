import React, { useState } from "react";
import { setWindowObj } from "../../redux/slices/cartSlice";
import { useAppDispatch } from "../../hooks/hooks";
import { CatalogItems } from "../../redux/slices/catalogSlice";

export const CardCatalog:React.FC<CatalogItems> = ({...i}) =>{
    const [mainImg,setMainImg] = useState(i.res[0].img)
    const dispatch = useAppDispatch()

    return(
        <div onClick={()=>dispatch(setWindowObj(i))} className="catalog__card">
            <div className="catalog__card_img-container">
                <img src={mainImg} alt="Item" className="catalog__card_img" />
            </div>
            <div className="catalog__card_sub-container">
                <p className="catalog__card_name">
                    {i.fullName}
                </p>
                <p className="catalog__card_sub-name sub-text">
                    {'Article:' + i.article}
                </p>
                <div className="catalog__card_btn-container">
                    {i.res.map((obj,index)=>{
                        return <button key={index} style={{backgroundColor:obj.color}} onMouseOver={()=>setMainImg(obj.img)} className="catalog__card_btn"></button>
                    })}
                </div>
                <div className="catalog__card_footer">
                    <div className="catalog__card_price-container">
                        <p className="catalog__card_price-text">From Price</p>
                        <p className="catalog__card_price">${i.price}</p>
                    </div>
                        <button className="catalog__card_basket-continer">
                            <i className="fa fa-light fa-basket-shopping basket" style={{color: '#000000'}} />
                        </button>
                </div>
            </div>
        </div>

    )
}
