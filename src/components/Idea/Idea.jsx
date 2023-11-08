import React from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router'

import ideaRocket from "../../assets/img/rocket1.png"
import ideaRocket2 from "../../assets/img/rocket2.png"
import ideaLamp from "../../assets/img/idea-lamp.png"
import { useTranslation } from 'react-i18next'


function Idea (){
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

    const location = useLocation().pathname
    const {t} = useTranslation()

    return(<>
        <section className={`idea ${location !== '/' && 'ideaCatalog'}`}>
                    <div className="idea__wrapper wrapper">
                        <div className="idea__text_container ">
                            <h2 className="idea__text_title">
                                {t('idea.title')}
                            </h2>
                            <p className="idea__text_text sub-text">
                            {t('idea.subTitle')}
                            </p>
                        </div>
                        <div className="idea__form_container">
                            <p className="idea__form_title">
                                {t('idea.formTitle')}
                            </p>
                            <form  onSubmit={handleSubmit(onSubmit)} className="idea__form_form" method="POST">
                                <div className='idea__form_input-cnt'>
                                    <input className="idea__form_input input_name" id='contact-tel' placeholder={t('idea.placeholder.name')} type="text" {...register("contactName",{
                                        minLength:{
                                            value:2,
                                            message:t('idea.check.name.message')
                                        },
                                        required: t('idea.checkReq'),
                                    })} />
                                    {errors?.contactName && <div className='idea__form_input-err'><i className="fa-solid fa-triangle-exclamation" style={{color:'#b30f0f'}}></i> {errors.contactName.message}</div> }
                                </div>
                                <div className='idea__form_input-cnt'>
                                <input className="idea__form_input input_email" placeholder={t('idea.placeholder.mail')} type="email"
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
                                    {errors?.contactEmail && <div className='idea__form_input-err'><i className="fa-solid fa-triangle-exclamation" style={{color:'#b30f0f'}}></i> {errors.contactEmail.message}</div> }
                                </div>
                                <div className='idea__form_input-cnt'>
                                    <input className="idea__form_input input_tel" placeholder={t('idea.placeholder.tel')} type="tel" {...register("contactTel",{   
                                            required: t('idea.checkReq'),
                                            minLength:{
                                                value:3,
                                                message:t('idea.check.tel.message')
                                            },
                                            validate:(valueForm)=>{return Number.isInteger(+valueForm) || t('idea.check.tel.valid')},
                                        })} />
                                    {errors?.contactTel && <div className='idea__form_input-err'><i className="fa-solid fa-triangle-exclamation" style={{color:'#b30f0f'}}></i> {errors.contactTel.message}</div> }
                                </div>
                                    
                                <input className="idea__form_input-search btn-special-green" type="submit" disabled={!isValid}  value={t('idea.order')} />
                            </form>
                        </div>
                        <img src={ideaRocket} alt="" className="idea__rocket-1" />
                        <img src={ideaLamp} alt="" className="idea__lamp" />
                        <img src={ideaRocket2} alt="" className="idea__rocket-2" />
                    </div>
        </section>
    </>)
}

export default Idea