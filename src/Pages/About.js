import './About.css'
import React, { useState } from 'react';
import Logologo from './img/Logologo.png'
import Rectangle from './img/Rectangle 68.jpg'
import Rectangle1 from './img/Rectangle 56.svg'
import House1 from './img/House1.jpg'
import House2 from './img/House2.jpg'
import House3 from './img/House3.jpg'
import House4 from './img/House4.jpg'
import Logo9 from './img/Logo9.svg'
import Logo10 from './img/Logo10.svg'
import Logo11 from './img/Logo11.svg'
import Logo12 from './img/logo12.svg'
import Logo13 from './img/Logo13.svg'
import Logo14 from './img/Logo14.svg'
import IMG from './img/IMG.svg'
import Telegram from './img/Telegram.svg'
import Youtube from './img/Youtube.svg'
import Vk from './img/VK.svg'
import Linkedin from './img/LinkedIN.svg'
import Instagram from './img/Instagram.svg'
import Facebook from './img/Facebook.svg'
import Vector1 from './img/Vector 33.png'
import Vector2 from './img/Ellipse 6.png'
import Vector3 from './img/Vector 32.png'


function About() {


    const [isActive, setIsActive] = useState(false); // Состояние для отслеживания активности стиля

    // Функция для переключения стиля
    const toggleStyle = (event) => {
        event.target.classList.toggle("active"); // Переключаем класс на целевом элементе
    };


    return (
        <div>
            <header className="wrap">
                <div className="about">
                    <div className="about-wrap">
                        <div>
                            <img className="header-logo2" src={Logologo} alt="" />
                        </div>
                    </div>
                </div>
            </header>

            <section className="wrap">
                <div className="about-blockes">
                    <div className="about-block1">
                        <div className="about-block2">
                            <button className="block-btn2" onClick={toggleStyle}>Недвижимость</button>
                            <button className="block-btn2" onClick={toggleStyle}>Автомобиль</button>
                        </div>

                        <div className='abut-block2'>
                            <p className="about-text1">Стоимость дома</p>

                            <div className="about-block3">
                                <p className="about-text2">10 000$</p>
                                <img style={{marginLeft:'20px', marginTop: '-15px'}} src={Vector1} /> <img style={{marginLeft:'-10px',  marginTop: '-15px'}} src={Vector2} /> <img style={{width: '250px', marginLeft:'-20px',  marginTop: '-15px'}} src={Vector3}/>
                            </div>

                            <div className="about-block4">
                                <p className='circle'/>
                                <p className="about-text3"> USD</p>
                                <p className='circle'/>
                                <p className="about-text3"> СОМ</p>
                                <p className='circle'/>
                                <p className="about-text3"> РУБ</p>
                            </div>

                            <div>
                                <p className="abut-text1">Первоначальный взнос</p>

                                <div className="about-block5">
                                    <p className="about-text4" onClick={toggleStyle}>25%</p>
                                    <p className="about-text4" onClick={toggleStyle}>35%</p>
                                    <p className="about-text4" onClick={toggleStyle}>50%</p>
                                    <p className="about-text6">3,500$</p>
                                </div>
                            </div>


                            <div>
                                <p className="about-text1">Cрок договора</p>
                                <div className="about-block6">
                                    <p className="about-text2">1 год</p>
                                </div>
                            </div>

                            <div className="about-block7">
                                <p className="block-btn3">Рассчитать</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-blockes2">
                        <div className="about-blockes3">
                            <div className="blokes">
                                <div className="about-block9">
                                    <p className="about-text7">Курсы валют</p>
                                    <p className="about-text7">НБКР (21.08.2021)</p>
                                </div>

                                <div className="about-block8">
                                    <p className="about-text7">USD</p>
                                    <p className="about-text8">89.32 сом</p>
                                </div>

                                <div className="about-block8">
                                    <p className="about-text7">СОМ</p>
                                    <p className="about-text8">98.82 сом</p>
                                </div>

                                <div className="about-block8">
                                    <p className="about-text7">РУБ</p>
                                    <p className="about-text8">0.975 сом</p>
                                </div>
                            </div>
                        </div>

                        <div className="about-blockes4">
                            <div>
                                <p className="about-text9">Результаты расчета</p>
                            </div>

                            <div className="about-block10">
                                <div className="about-text10">
                                    <p>Стоимость недвижимости:</p>
                                    <p>Первоначальный взнос:</p>
                                    <p>Вступительный взнос:</p>
                                    <p>Сумма финансирования:</p>
                                    <p>Ежемесячный платеж:</p>
                                </div>

                                <div className="about-text11">
                                    <p>0 $</p>
                                    <p>0 $</p>
                                    <p>0 $</p>
                                    <p>0 $</p>
                                    <p>0 $</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-block11">
                    <p className="about-text12">О ЖИЛОМ КОМПЛЕКСЕ</p>
                    <p className="about-text13">«Испанский дом» – уникальный жилой комплекс премиум-класса с небывалым архитектурным решением, непривычным <br />
                        для нашего любимого города. На создание «Испанского дома» нас вдохновила архитектура зданий города Мадрид. <br />
                        Посетив в 2018 году город столицу Испании наше руководство решило украсить город частичкой испанского <br />
                        духа и красотой сооружений этого необычного города. Мы вдохновлялись такими зданиями города <br />
                        Мадрид, как «Edificio Metrópolis», «Four Seasons Hotel Madrid», «Edificio Banesto» где ныне расположен <br />
                        «Испанский кредитный банк». Все эти архитектурные шедевры воплощены <br />
                        в жилом комплексе премиум-класса «Испанский дом»
                    </p>
                </div>

                <div className="about-block12">
                    <div>
                        <p className="about-text14">ЛОКАЦИЯ</p>
                        <p className="about-text15">Одним из важных преимуществ является локация, которая
                            определяет статус и класс дома. «Испанский дом»
                            расположен в 7 микрорайоне, который по праву
                            считается одним из престижных районов
                            нашего любимого Бишкека. </p>
                    </div>

                    <div>
                        <img className="list-img1" src={Rectangle} alt="" />
                    </div>
                </div>

                <div>
                    <p className="abut-text2">ПРЕИМУЩЕСТВА «ИСПАНСКОГО ДОМА»</p>
                    <p className="abut-text3">Дом будут оснащены новейшими инженерными решениями, соответствуя высокой планке требований
                        к комфорту и безопасности жителей:</p>
                </div>

                <div className="boxes">
                    <img className="box-img" src={House1} alt="" />
                    <img className="box-img" src={House2} alt="" />
                    <img className="box-img" src={House3} alt="" />
                    <img className="box-img" src={House4} alt="" />
                </div>
                <div className="box-img2">
                    <img src="img2/подробнее (1).png" alt="" />
                    <img src="img2/подробнее.png" alt="" />
                </div>

                <div className="items">
                    <div className="item1">
                        <div>
                            <p className="item-text1">Наши партнеры</p>
                        </div>

                        <div className="logos">
                            <img className="logo1" src={Logo9} alt="" />
                            <img className="logo2" src={Logo10} alt="" />
                            <img className="logo3" src={Logo11} alt="" />
                            <img className="logo4" src={Logo12} alt="" />
                            <img className="logo5" src={Logo13} alt="" />
                            <img className="logo6" src={Logo14} alt="" />
                        </div>

                    </div>

                    <div>
                        <img className="items-img1" src={Rectangle1} alt="" />
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

function toggleStyle() {
    // Ваша функция toggleStyle
}

export default About;
