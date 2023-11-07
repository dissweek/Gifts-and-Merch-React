
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form'
import style from './style.module.scss'
import CardCart from "../CardCart/CardCart";
import { Link } from "react-router-dom";
import { clearCart, getTotalPriceRed } from "../../redux/slices/cartSlice";




function Cart(){
    const dispatch = useDispatch()
    const {itemsCart,totalPrice} = useSelector((state)=>state.cart)
    const totalPriceLocal = JSON.parse(localStorage.totalPrice).toFixed(2)
    const { 
        register,
        handleSubmit,
        reset,
        formState: {errors,isValid}
    } = useForm({
        mode:'onBlur',
    })

    const onSubmit = (data)=>{
        console.log(data)
        reset()
    }


    return (
      <>
        <section className={`${style.cart} main__banner`}>
            <div className="wrapper">
                <div className={style.cart_order}>
                    <div className={style.cart_order_contacts}>
                        <h3 className={style.cart_order_contacts_title}>Оформить заказ</h3>
                        <p className={`${style.cart_order_contacts_text} sub-text`}>Введите свои контактные данные, и наш менеджер свяжется с Вами в течении 1 часа</p>
                        <form onSubmit={handleSubmit(onSubmit)} className={style.cart_form}>
                            <div className={`${style.cart_form_input_cnt} idea__form_input-cnt`}>
                                <input className={`${style.cart_form_input} idea__form_input input_name`} placeholder="Ваше Имя" type="text" {...register("contactName",{
                                    minLength:{
                                        value:2,
                                        message:'Мин. длинна 2 символа'
                                    },
                                    required: 'Обязательное поле',
                                })} />
                                {errors?.contactName && <div className='idea__form_input-err'><i className="fa-solid fa-triangle-exclamation" style={{color:'#b30f0f'}}></i> {errors.contactName.message}</div> }
                            </div>
                            <div className={`${style.cart_form_input_cnt} idea__form_input-cnt`}>
                                <input className={`${style.cart_form_input} idea__form_input input_email`} placeholder="Ваша електронная почта" type="email"
                                {...register("contactEmail",{
                                    required: 'Обязательное поле',
                                    minLength:{
                                        value:5,
                                        message:'Мин. длинна 5 символа'
                                    },
                                    pattern:{
                                        value:/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                                        message:'Проверьте данные почты'
                                    },
                                })} />
                                {errors?.contactEmail && <div className='idea__form_input-err'><i className="fa-solid fa-triangle-exclamation" style={{color:'#b30f0f'}}></i> {errors.contactEmail.message}</div> }
                            </div>
                            <div className={`${style.cart_form_input_cnt} idea__form_input-cnt`}>
                                <input className={`${style.cart_form_input} idea__form_input input_tel`} placeholder="Ваш номер телефона" type="tel" {...register("contactTel",{   
                                        required: 'Обязательное поле',
                                        minLength:{
                                            value:3,
                                            message:'Мин. длинна 3 символа'
                                        },
                                        validate:(valueForm)=>{return Number.isInteger(+valueForm) || 'Проверьте введенный номер'},
                                    })} />
                                {errors?.contactTel && <div className='idea__form_input-err'><i className="fa-solid fa-triangle-exclamation" style={{color:'#b30f0f'}}></i> {errors.contactTel.message}</div> }
                            </div>
                            <button type="submit" className={`${style.cart_form_submit} btn-special-green`}>Заказать</button>
                        </form>
                        <p className={`${style.cart_order_contacts_subtext} sub-text`}>Натискаючи "Підтвердити замовлення", Ви даєте згоду на обробку Ваших персональних даних</p>
                    </div>
                    <div className={style.cart_items}>
                        <div className={style.cart_items_title_cnt}>
                            <h3 className={`${style.cart_order_contacts_title} ${style.cart_items_title}`}>Корзина</h3>
                            {itemsCart.length>0 && <h3 onClick={()=>dispatch(clearCart())} className={`${style.cart_order_contacts_title} ${style.cart_items_title} ${style.cart_items_title_clear}`}>Очистить корзину</h3>}
                        </div>
                        {itemsCart.length > 0 ?
                            <div className={style.cart_items_cards}>
                                {itemsCart.map(i=>{return <CardCart key={i.id+i.size+i.color} i={i} />})}
                                <p className={style.cart_totalPrice}>Всего: ${totalPrice ? totalPrice.toFixed(2) : totalPriceLocal}</p>
                            </div>
                            : 
                            <div className={style.cart_empty}>
                                <p className={style.cart_empty_text}>В Вашей корзине, пока, ничего нет.</p>
                                <Link className={style.cart_empty_link} to={'/catalog'} >Перейти в каталог</Link>
                            </div>
                        }
                        
                    </div>

                </div>
            </div>

        </section>
      </>
    );
}

export default Cart