import React from 'react'
import { useForm } from 'react-hook-form'

import ideaRocket from "../../assets/img/rocket1.png"
import ideaRocket2 from "../../assets/img/rocket2.png"
import ideaLamp from "../../assets/img/idea-lamp.png"



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

return(<>
  <section className="idea">
            <div className="idea__wrapper wrapper">
                <div className="idea__text_container">
                    <h2 className="idea__text_title">
                        У вас своя УНИКАЛЬНАЯ идея по разработке мерча?
                    </h2>
                    <p className="idea__text_text sub-text">
                        Изготовим мерч по вашему дизайну. Расскажем лайфхаки и ознакомим с технологией производства,
                        предоставим образцы матералов.
                    </p>
                </div>
                <div className="idea__form_container">
                    <p className="idea__form_title">
                        Введите свои контактные данные, и наш менеджер свяжется с Вами в течении 1 часа
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="idea__form_form" method="POST">
                        <div className='idea__form_input-cnt'>
                            <input className="idea__form_input input_name" placeholder="Ваше Имя" type="text" {...register("contactName",{
                                minLength:{
                                    value:2,
                                    message:'Мин. длинна 2 символа'
                                },
                                required: 'Обязательное поле',
                            })} />
                            {errors?.contactName && <div className='idea__form_input-err'><i className="fa-solid fa-triangle-exclamation" style={{color:'#b30f0f'}}></i> {errors.contactName.message}</div> }
                        </div>
                        <div className='idea__form_input-cnt'>
                        <input className="idea__form_input input_email" placeholder="Ваша електронная почта" type="email"
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
                        <div className='idea__form_input-cnt'>
                            <input className="idea__form_input input_tel" placeholder="Ваш номер телефона" type="tel" {...register("contactTel",{   
                                    required: 'Обязательное поле',
                                    minLength:{
                                        value:3,
                                        message:'Мин. длинна 3 символа'
                                    },
                                    validate:(valueForm)=>{return Number.isInteger(+valueForm) || 'Проверьте введенный номер'},
                                })} />
                            {errors?.contactTel && <div className='idea__form_input-err'><i className="fa-solid fa-triangle-exclamation" style={{color:'#b30f0f'}}></i> {errors.contactTel.message}</div> }
                        </div>
                            
                        <input className="idea__form_input-search btn-special-green" type="submit" disabled={!isValid}  value="Заказать" />
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