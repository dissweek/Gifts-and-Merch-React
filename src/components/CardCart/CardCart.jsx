
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShopItem, setCategory, setSearch } from "../../redux/slices/catalogSlice";
import { useForm } from 'react-hook-form'
import style from './style.module.scss'
import { addProduct, minusItem, removeProduct } from "../../redux/slices/cartSlice";




function CardCart({i}){
    const totalPriceCard = i.price * i.count 
    const dispatch = useDispatch()

    const add = () =>{
        const item = {
          id:i.id,
          size:i.size,
          color: i.color
        } 
        dispatch(addProduct(item))
      }

    return (
      <>
       <div className={style.card_cnt}>
           <div className={style.card_cnt_f}>
                <div className={style.card_img_cnt}>
                    <img src={i.img} alt="" className={style.card_img} />
                </div>
                <div className={style.card_name_cnt}>
                    <p className={style.card_name}>{i.fullName}</p>
                </div>
            </div>
           <div className={style.card_cnt_f }>
                <div className={style.card_params_cnt}>
                    <div className={style.card_params_color}><span className={`${style.card_params_color_span} sub-text`}>Цвет:</span> <div className={style.card_params_color_circle} style={{backgroundColor:i.color}}></div></div>
                    <p className={`${style.card_params} sub-text`}>Размер: {i.size}</p>
                </div>
                <div className={style.card_counter_cnt}>
                    <button className={style.card_counter_btn} onClick={()=>dispatch(minusItem(i))}>-</button>
                    <p className={style.card_counter}>{i.count}</p>
                    <button className={style.card_counter_btn} onClick={()=>add()}>+</button>
                </div>
                <div className={style.card_price_cnt}>
                    <button className={style.card_close} onClick={()=>dispatch(removeProduct(i))} ><i className="fa-solid fa-xmark" /></button>
                    <div className={style.card_price_div}>
                        <p className={style.card_price}>${i.price} <span>/</span> <br />  ${totalPriceCard.toFixed(2)}</p>
                    </div>
                </div>
           </div>
       </div>

      </>
    );
}

export default CardCart