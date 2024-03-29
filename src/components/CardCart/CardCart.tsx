
import React from "react";
import { useAppDispatch } from "../../hooks/hooks";
import style from './style.module.scss'
import { addProduct, minusItem, removeProduct } from "../../redux/slices/cartSlice";
import { useTranslation } from "react-i18next";
import { CartItem } from "../../redux/slices/cartSlice";


export const CardCart: React.FC<CartItem> = (i) =>{
    const totalPriceCard = i.price * i.count 
    const dispatch = useAppDispatch()
    const {t} = useTranslation()

    const add = (i:CartItem) =>{
        dispatch(addProduct(i))
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
                    <div className={style.card_params_color}><span className={`${style.card_params_color_span} sub-text`}>{t('cardCart.color')}</span> <div className={style.card_params_color_circle} style={{backgroundColor:i.color}}></div></div>
                    <p className={`${style.card_params} sub-text`}>{t('cardCart.size')} {i.size}</p>
                </div>
                <div className={style.card_counter_cnt}>
                    <button className={style.card_counter_btn} onClick={()=>dispatch(minusItem(i))}>-</button>
                    <p className={style.card_counter}>{i.count}</p>
                    <button className={style.card_counter_btn} onClick={()=>add(i)}>+</button>
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
