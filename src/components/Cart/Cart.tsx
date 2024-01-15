
import React from "react";
import { useAppDispatch,useAppSelector } from "../../hooks/hooks";
import { useForm,SubmitHandler } from 'react-hook-form'
import style from './style.module.scss'
import {CardCart} from "../index";
import { Link } from "react-router-dom";
import { clearCart} from "../../redux/slices/cartSlice";
import { useTranslation } from "react-i18next";


type FormValues = {
    contactEmail: string
    contactName: string
    contactTel: string
}

export const Cart: React.FC = () => {
    const dispatch = useAppDispatch()
    const {itemsCart,totalPrice} = useAppSelector((state)=>state.cart)
    const totalPriceLocal: number = JSON.parse(localStorage.totalPrice).toFixed(2)
    const {t} = useTranslation()

    const { 
        register,
        handleSubmit,
        reset,
        formState: {errors,isValid}
    } = useForm<FormValues>({
        mode:'onBlur',
    })

    const onSubmit: SubmitHandler<FormValues> = (data)=>{
        console.log(data)
        reset()
    }


    return (
      <>
        <section className={`${style.cart} main__banner`}>
            <div className="wrapper">
                <div className={style.cart_order}>
                    <div className={style.cart_order_contacts}>
                        <h3 className={style.cart_order_contacts_title}>{t('cart.contactsTitle')}</h3>
                        <p className={`${style.cart_order_contacts_text} sub-text`}>{t('cart.contactsText')}</p>
                        <form onSubmit={handleSubmit(onSubmit)} className={style.cart_form}>
                            <div className={`${style.cart_form_input_cnt} idea__form_input-cnt`}>
                                <input className={`${style.cart_form_input} idea__form_input input_name`} placeholder={t('idea.placeholder.name')} type="text" {...register("contactName",{
                                    minLength:{
                                        value:2,
                                        message:t('idea.check.name.message')
                                    },
                                    required: t('idea.checkReq'),
                                })} />
                                {errors?.contactName && <div className='idea__form_input-err'><i className="fa-solid fa-triangle-exclamation" style={{color:'#b30f0f'}}></i> 
                                {errors.contactName.message as string}
                                </div>}
                            </div>
                            <div className={`${style.cart_form_input_cnt} idea__form_input-cnt`}>
                                <input className={`${style.cart_form_input} idea__form_input input_email`} placeholder={t('idea.placeholder.mail')} type="email"
                                {...register("contactEmail",{
                                    required: t('idea.checkReq'),
                                    minLength:{
                                        value:5,
                                        message:t('idea.check.mail.message')
                                    },
                                    pattern:{
                                        value:/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                                        message:t('idea.check.mail.valid')
                                    },
                                })} />
                                {errors?.contactEmail && <div className='idea__form_input-err'><i className="fa-solid fa-triangle-exclamation" style={{color:'#b30f0f'}}></i> {errors.contactEmail.message as string}</div> }
                            </div>
                            <div className={`${style.cart_form_input_cnt} idea__form_input-cnt`}>
                                <input className={`${style.cart_form_input} idea__form_input input_tel`} placeholder={t('idea.placeholder.tel')} type="tel" {...register("contactTel",{   
                                        required: t('idea.checkReq'),
                                        minLength:{
                                            value:3,
                                            message:t('idea.check.tel.message')
                                        },
                                        validate:(valueForm)=>{return Number.isInteger(+valueForm) || t('idea.check.tel.valid')},
                                    })} />
                                {errors?.contactTel && <div className='idea__form_input-err'><i className="fa-solid fa-triangle-exclamation" style={{color:'#b30f0f'}}></i> {errors.contactTel.message as string}</div> }
                            </div>
                            <button type="submit" disabled={!isValid} className={`${style.cart_form_submit} btn-special-green`}>{t('cart.order')}</button>
                        </form>
                        <p className={`${style.cart_order_contacts_subtext} sub-text`}>{t('cart.contactsSubText')}</p>
                    </div>
                    <div className={style.cart_items}>
                        <div className={style.cart_items_title_cnt}>
                            <h3 className={`${style.cart_order_contacts_title} ${style.cart_items_title}`}>{t('cart.cart')}</h3>
                            {itemsCart.length>0 && <h3 onClick={()=>dispatch(clearCart())} className={`${style.cart_order_contacts_title} ${style.cart_items_title} ${style.cart_items_title_clear}`}>{t('cart.clearCart')}</h3>}
                        </div>
                        {itemsCart.length > 0 ?
                            <div className={style.cart_items_cards}>
                                {itemsCart.map(i=>{return <CardCart key={i.id+i.size+i.color} {...i} />})}
                                <p className={style.cart_totalPrice}>{t('cart.totalPrice')}{totalPrice ? totalPrice.toFixed(2) : totalPriceLocal}</p>
                            </div>
                            : 
                            <div className={style.cart_empty}>
                                <p className={style.cart_empty_text}>{t('cart.noItem')}</p>
                                <Link className={style.cart_empty_link} to={'/catalog'} >{t('cart.linkToCatalog')}</Link>
                            </div>
                        }
                        
                    </div>

                </div>
            </div>

        </section>
      </>
    );
}
