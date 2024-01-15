import React from "react";
import style from './style.module.scss'

const CartLoader: React.FC = () => {
    return (
        <div className={style.loader__container}>
            <p className={style.loader__text}>
                <span className={style.loader}></span>
                <span className={style.loader__text_span}>YOUR CART IS LOAD...</span></p>
        </div>
    )
}

export default CartLoader