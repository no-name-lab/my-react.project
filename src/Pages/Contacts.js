import React from 'react';
import './Contacts.css'
import House5 from './img/House5.png'
import Vector1 from './img/Vector 22.png'
import House6 from './img/House6.png'
import IMG from './img/IMG.svg'
import Logo1 from './img/Logo.svg'
import Telegram from './img/Telegram.svg'
import Youtube from './img/Youtube.svg'
import Vk from './img/VK.svg'
import Linkedin from './img/LinkedIN.svg'
import Instagram from './img/Instagram.svg'
import Facebook from './img/Facebook.svg'

function Contacts() {
    return (
        <div>
            <header className="wrap">
                    <div className="contact-wrap">
                        <div className="contact-boxes">
                            <div className="contact-box1">
                                <img src={House5} alt="" />
                            </div>

                            <div className="contact-box2">
                                <p className="contact-text3">Современный коттедж </p>
                                <div>
                                    <img style={{ width: '700px' }} src="img2/Для стажеров.zip" alt="" />
                                </div>


                                <div className="contact-box3">
                                    <div>
                                        <p className="contact-text1"><img src={Vector1} alt="" />Жилая / общая площадь:</p>
                                        <p className="contact-text2">140 / 158</p>
                                        <p className="contact-text1"><img src={Vector1} alt="" />Количество этажей:</p>
                                        <p className="contact-text2">2 этажа</p>
                                        <p className="contact-text1"><img src={Vector1} alt="" />Материал кровли:</p>
                                        <p className="contact-text2">Эксплуатируемая</p>
                                        <p className="contact-text1"><img src={Vector1} alt="" />Типы комнат:</p>
                                        <p className="contact-text2">Кухня/гостиная, 3 санузла, кабинет,<br />
                                            3 спальни, 1 гардеробных,<br />
                                            кладовая, котельная.</p>
                                    </div>


                                    <div>
                                        <p className="contact-text1"><img src={Vector1} alt="" />Площадь застройки:</p>
                                        <p className="contact-text2">100</p>
                                        <p className="contact-text1"><img src={Vector1} alt="" />Материал стен:</p>
                                        <p className="contact-text2">Газобетон</p>
                                        <p className="contact-text1"><img src={Vector1} alt="" />Количество помещений:</p>
                                        <p className="contact-text2">11 помещений</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="contact-text4">О проекте</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </header>

            <section className="wrap">
                <div className="section-blockes">
                    <div className="section-block1">
                        <img className="section-img2" src="img2/подробнее (1).png" alt="" />
                        <img className="section-img3" src="img2/подробнее.png" alt="" />
                    </div>

                    <div className="section-blockes2">
                        <div>
                            <p className="section-text1">Белые стены, кирпичная кладка и <br />
                                цементная отделка преобладают <br />
                                в этом доме от студии <br />
                                дизайна Bodhi</p>

                            <p className="section-text2">Как устроен участок площадью 3370 квадратных <br />
                                футовна окраине Бангалора стать домом мечты для <br />
                                семьи из четырех человек? Ответ кроется где-то <br />
                                на трех этажах эклектичной закрытой резиденции, <br />
                                которую Амира Ахамед делит со своим мужем и <br />
                                двумя дочерьми.</p>
                        </div>


                        <div>
                            <img className="section-img1" src={House6} alt="" />
                        </div>
                    </div>
                </div>

                <div className="list-background">
                    <div className="list">
                        <div className="list1">
                            <img src={Logo1} alt="" />
                        </div>

                        <div className="list2">
                            <p className="list-text1">У Вас есть вопрос или предложение?</p>
                            <input className="list-input" type="text" placeholder="Ваша имя" /> <br />
                            <input className="list-input2" type="text" placeholder="+996 550 01 22 08" />
                            <button className="list-btn">Оставить заявку</button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="wrap">
                <div className="footer-background">
                    <div className="footer-blockes">
                        <div className="footer-block1">
                        <img src={IMG}/>
                            <p className="footer-text1">BAYTIK LUX - это профессиональные услугив области загородного строительства
                                и архитектурного проектирования в соответствии с европейскими стандартами</p>
                        </div>


                        <div className="footer-block2">
                            <p className="footer-text2">Меню</p>
                            <p className="footer-text3">Главная</p>
                            <p className="footer-text3">О компании</p>
                            <p className="footer-text3">ЖК - Байтик</p>
                            <p className="footer-text3">Выбрать дом</p>
                        </div>


                        <div className="footer-block3">
                            <p className="footer-text2">Контакты</p>
                            <p className="footer-text3">0550 01 22 08</p>
                            <p className="footer-text3">0777 32 95 46</p>
                        </div>


                        <div className="footer-block4">
                            <p className="footer-text2">Мы в социальных сетях</p>
                            <div className="footer-logos">
                                <img src={Facebook}/>
                                <img src={Instagram}/>
                                <img src={Telegram}/>
                                <img src={Linkedin} /> <br/>
                                <img style={{marginRight: '20px', marginTop: '20px'}} src={Youtube} alt=""/>
                                <img style={{marginTop: '20px'}} src={Vk}/>
                            </div>
                        </div>


                        <div className="footer-block5">
                            <p className="footer-text2">Адрес</p>
                            <p className="footer-text3">г. Бишкек, ул. Токтогула 125/1 <br /> Бизнес- «Авангард» 1 и 2 этажи</p>
                        </div>
                    </div>


                    <div className="footer-boxes">
                        <div className="footer-box">
                            <div>
                                <p className="footer-text4"> c 2018-2021 “BAYTIK LUX” <br /> Все права защищены</p>
                            </div>

                            <div className="footer-box1">
                                <li className="footer-text5"><a href="" className="footer-text6">Политика конфиденциальсности</a></li>
                                <p className="footer-text4">Сделано с любовью в Paradigma.website</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Contacts;
