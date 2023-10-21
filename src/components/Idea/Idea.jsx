import React from 'react'
import ideaRocket from "../../assets/img/rocket1.png"
import ideaRocket2 from "../../assets/img/rocket2.png"
import ideaLamp from "../../assets/img/idea-lamp.png"

function Idea (){
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
                    <form action="sendmail.php" className="idea__form_form" method="POST">
                        <input className="idea__form_input input_name req" placeholder="Ваше Имя" type="text" name="contact-name"
                            id="form_contact-name" />
                        <input className="idea__form_input input_email req" placeholder="Ваша електронная почта" type="email"
                            name="contact-email" id="form_contact-email" />
                        <input className="idea__form_input input_tel req" placeholder="Ваш номер телефона" type="tel" name="contact-tel"
                            id="form_contact-tel" />
                        <input className="idea__form_input-search btn-special-green disabled submit" type="submit" value="Заказать" />
                    </form>
                </div>
                <img src={ideaRocket} alt="" className="idea__rocket-1" />
                <img src={ideaLamp} alt="" className="idea__lamp" />
                <img src={ideaRocket} alt="" className="idea__rocket-2" />
            </div>
        </section>
</>)
}

export default Idea