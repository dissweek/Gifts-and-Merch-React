import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router'

function Footer (){
    const location = useLocation().pathname
    const {t} = useTranslation()
return(<>
 <footer className={`footer ${location !== '/' && 'footerCatalog'}`}>
    
        <div className="footer__wrapper wrapper">
            <div className="footer__title-and-contacts">
                <div className="footer__title_container">
                    <h2 className="footer__title">
                        GIFTS & MERCH
                    </h2>
                    <p className="footer__title_subtitle sub-text">
                    {t('footer.subTitle.1')} <br /> {t('footer.subTitle.2')} 
                    </p>
                </div>
                <div className="footer__contacts">
                    <div className="footer__contacts_phone-and-mail">
                        <a href="tel:+375291814961" className="footer__contacts_phone">+380 630 130 103</a>
                        <a href="mailto:dissfx2@gmail.com" className="footer__contacts_mail link-mail">dissfx2@gmail.com</a>
                    </div>
                    <div className="footer__contacts_social-container">
                        <i className="fa fa-brands fa-facebook footer__contacts_social contacts-social cl-blue"></i>
                        <i className="fa-brands fa-instagram footer__contacts_social contacts-social cl-pink"></i>
                        <i className="fa-brands fa-linkedin footer__contacts_social contacts-social cl-blueGrey"></i>
                    </div>
                </div>
            </div>
            <div className="footer__menu">
                <ul className="footer__menu_container" id="footer__menu_container-first">
                    <li className="footer__menu_title">{t('footer.list.category')}</li>
                    <li className="footer__menu_item"><a href="./pages/index.html" className="footer__menu_link sub-text">{t('footer.list.sewing')}</a></li>
                    <li className="footer__menu_item"><a href="./pages/index.html" className="footer__menu_link sub-text">{t('footer.list.allGoods')}</a></li>
                    <li className="footer__menu_item"><a href="./pages/index.html" className="footer__menu_link sub-text">{t('footer.list.sets')}</a></li>
                    <li className="footer__menu_item"><a href="./pages/index.html" className="footer__menu_link sub-text">{t('footer.list.production')}</a></li>
                </ul>
                <ul className="footer__menu_container" id="footer__menu_container-second">
                    <li className="footer__menu_title">{t('footer.list.information')}</li>
                    <li className="footer__menu_item"><a href="./pages/index.html" className="footer__menu_link sub-text">{t('footer.list.about')}</a></li>
                    <li className="footer__menu_item"><a href="./pages/index.html" className="footer__menu_link sub-text">{t('footer.list.faq')}</a></li>
                    <li className="footer__menu_item"><a href="./pages/index.html" className="footer__menu_link sub-text">{t('footer.list.contacts')}</a></li>
                </ul>
            </div>
            <div className="footer__form">
                <p className="footer__form_title">
                {t('footer.formTitle')}
                </p>
                <p className="footer__form_subtitle">
                {t('footer.formSubTitle.1')} <span><br /></span>{t('footer.formSubTitle.2')}
                </p>
                <form action="sendmail.php" className="footer__form_input-container">
                    <input className="footer__form_input input_tel " type="tel" name="contact-tel" id="footer-tel"
                        aria-label="footer-tel" placeholder="Номер телефона" />
                    <input className="footer__form_input-submit submit disabled" type="submit"  value="&rarr;" />
                </form>
            </div>
        </div>
        <div className="footer__sub-text sub-text wrapper"><span>© 2022 . All rights reserved.</span></div>
    </footer>
</>)
}

export default Footer