import React from 'react';
import './Home.css'
import Istockphoto from './img/istockphoto.jpg'
import Baytikposelok from './img/Baytik_poselok.png'
import Backgroundgreen from './img/BACKGROUND.png'
import Group6 from './img/Group6.svg'
import Vector1 from './img/Vector 4.svg'
import Vector2 from './img/Vector 7.svg'
import Vector3 from './img/Vector5.svg'
import Logo1 from './img/Logo1.svg'
import Logo2 from './img/Logo2.svg'
import Logo3 from './img/Logo3.svg'
import Logo4 from './img/Logo4.svg'
import Logo5 from './img/Logo5.svg'
import Logo6 from './img/Logo6.svg'
import Logo7 from './img/Logo7.svg'
import Vector4 from './img/Vector 21.png'
import Logo8 from './img/Logo.svg'
import Logo9 from './img/Logo9.svg'
import Logo10 from './img/Logo10.svg'
import Logo11 from './img/Logo11.svg'
import Logo12 from './img/logo12.svg'
import Logo13 from './img/Logo13.svg'
import Logo14 from './img/Logo14.svg'
import Rectangle from './img/Rectangle 56.svg'
import Telegram from './img/Telegram.svg'
import Youtube from './img/Youtube.svg'
import Vk from './img/VK.svg'
import Linkedin from './img/LinkedIN.svg'
import Instagram from './img/Instagram.svg'
import Facebook from './img/Facebook.svg'
import IMG from './img/IMG.svg'


function Home() {
    // Функция для обработки события нажатия кнопки "Оставить заявку"
    function showConfirmation() {
        // Создаем элемент <p> для отображения подтверждения заявки
        const confirmationMessage = document.createElement("p");
        confirmationMessage.textContent = "Ваша заявка принята";
        confirmationMessage.style.color = "#253659CC";
        confirmationMessage.style.fontFamily = "raleway";
        confirmationMessage.style.fontWeight = "900";
        confirmationMessage.style.border = "1px solid white"; // Добавление рамки
        confirmationMessage.style.marginLeft = "30px";
        confirmationMessage.style.width = "200px";
        confirmationMessage.style.height = "30px";
        confirmationMessage.style.background = "white";

        // Добавляем элемент <p> с подтверждением в блок с className "list2"
        document.querySelector(".list2").appendChild(confirmationMessage);
    }

    return (
        <div>
            <header className="wrap">
                <div className='header'>
                    <div className='header-background'>
                        <div className='header-background2'>
                            <div className="header-boxes">
                                <div className="header-box1">
                                    <div>
                                        <p className="header-text1">ПЕРЕНОСИМ СЕМЕЙНЫЙ УЮТ В НОВЫЕ СТЕНЫ</p>
                                    </div>

                                    <div>
                                        <p className="header-text2">заказать звонок</p>
                                    </div>
                                </div>

                                <div>
                                    <img
                                        src={Baytikposelok}
                                        className='header-img'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="wrap">
                {/* Секция */}
                <div className="section-background">
                    <div className="section-blokes">
                        <div className="section-blok1">
                            <p>. <br />.</p>
                            <p className="block-text1">О компании</p>
                            <p className="block-text2">Строительная компания «Байтик Люкс» - это команда профессионалов, стремящихся
                                улучшить инфраструктуру
                                города и украсить его, при этом, не изменяя традициям страны. Стабильность и надежность на рынке
                                строительства и недвижимости с 2014 года. Основная деятельность компании - это строительство
                                и реализация жилой недвижимости.</p>
                        </div>

                        <div className="section-block2">
                            <div className="blog1">
                                <img src={Group6} />
                                <p className="text2">Многолетний опыт since 1998 новейшие технологии</p>
                            </div>

                            <div className="blog1">
                                <img src={Vector1} />
                                <p className="text3">Построено <br /> более 6 обьектов</p>
                            </div>

                            <div className="blog1">
                                <img src={Vector2} />
                                <p className="text4">Введено в эксплуатацию более 600 000 квадр</p>
                            </div>

                            <div className="blog1">
                                <img src={Vector3} />
                                <p className="text5">Строительная компания байтик лукс доверие,заслуженное годами</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="section-boxes">
                    <div className="section-box1">
                        <p className="box-text2">Почему <br /> нас выбирают клиенты</p>
                    </div>

                    <div className="section-box2">
                        <div className="box">
                            <img src={Logo7} />
                            <p className="box-text1">Договор, который отвечает на все</p>
                        </div>

                        <div className="box">
                            <img src={Logo1} />
                            <p className="box-text1">Удобное расположение</p>
                        </div>

                        <div className="box">
                            <img src={Logo2} />
                            <p className="box-text1">Гарантия 5 лет</p>
                        </div>

                        <div className="box">
                            <img src={Logo3} />
                            <p className="box-text1">Качественые материалы</p>
                        </div>

                        <div className="box">
                            <img src={Logo4} />
                            <p className="box-text1">Полная юридическая безопасность</p>
                        </div>

                        <div className="box">
                            <img src={Logo5} />
                            <p className="box-text1">Оперативная работа с каждым клиентом</p>
                        </div>

                        <div className="box">
                            <img src={Logo6} />
                            <p className="box-text1">Стабильная работа на рынке более 10 лет</p>
                        </div>
                    </div>
                </div>



                <div className="containers">
                    <div className="containers1">
                        <div className="container1">
                            <p className="container-text1">Трехэтажный загородный коттедж с плоской крышей</p>
                            <div className="blok">
                                <p className="container-text2"> <img src={Vector4} /> 335 м2</p>
                                <p className="container-text3">2 этажа</p>
                            </div>
                        </div>

                        <div className="container2">
                            <p className="container-text1">Хай-тек в Дранишниках</p>
                            <div className="blok">
                                <p className="container-text2"> <img src={Vector4} /> 335 м2</p>
                                <p className="container-text3">2 этажа</p>
                            </div>
                        </div>
                    </div>



                    <div className="containers2">
                        <div className="container3">
                            <p className="container-text1">Современный коттедж</p>
                            <div className="blok">
                                <p className="container-text2"> <img src={Vector4} /> 335 м2</p>
                                <p className="container-text3">2 этажа</p>
                            </div>
                        </div>

                        <div className="container4">
                            <p className="container-text1">Хай-тек в Мяглово</p>
                            <div className="blok">
                                <p className="container-text2"> <img src={Vector4} /> 335 м2</p>
                                <p className="container-text3">2 этажа</p>
                            </div>
                        </div>

                        <div className="container5">
                            <p className="container-text1">Современная классика в Рощино</p>
                            <div className="blok">
                                <p className="container-text2"> <img src={Vector4} /> 335 м2</p>
                                <p className="container-text3">2 этажа</p>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="list-background">
                    <div className="list">
                        <div className="list1">
                            <img src={Logo8} />
                        </div>

                        <div className="list2">
                            <p className="list-text1">У Вас есть вопрос или предложение?</p>
                            <input className="list-input" type="text" placeholder="Ваша имя" /> <br />
                            <input className="list-input2" type="text" placeholder="+996 550 01 22 08" />
                            <button className="list-btn" onClick={showConfirmation}>Оставить заявку</button>
                        </div>
                    </div>
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
                        <img className="items-img1" src={Rectangle} alt="" />
                    </div>

                </div>
            </section>

            <footer className="wrap">
                <div className="footer-background">
                    <div className="footer-blockes">
                        <div className="footer-block1">
                            <img src={IMG}/>
                            <p className="footer-text1">BAYTIK LUX - это профессиональные услуги в области загородного строительства
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
                            <p className="footer-text3">г. Бишкек, ул. Токтогула 125/1 <br/> Бизнес- «Авангард» 1 и 2 этажи</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
