import "./footer.css"
import facebook from "../../img/facebook.png"
import vk from "../../img/vk.png"
import inst from "../../img/instagram.png"





export default function Footer(){
    return(
        <section className="footer_container" id="section6">
            <div className="up_footer">
                <p>
                    Адрес учебного центра:д.Гостилицы, <br/> Ломоносовский р-н., аэродром Гостилицы
                </p>
                <div className="up_right_footer">
                    <div className="footer_faceboock_vk_inst_box">
                        facebook
                        <img src={facebook}/>
                    </div>
                    <div className="footer_vk_inst_box">
                        <div className="footer_faceboock_vk_inst_box">
                            вконтакте
                            <img src={vk}/>
                        </div>
                        <div className="footer_faceboock_vk_inst_box">
                            инстаграм
                            <img src={inst}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="down_footer">
                <p>
                    Адрес офиса нашего авиаклуба:м. Пл.Восстания, <br/> ул.Гончарная 29, БЦ ЗАО "Энергомашстрой", 3 этаж направо (на <br/> охране предъявить паспорт или водительское)Машину <br/> можно поставить на Гончарной, направо на Полтавской или <br/> въехать в арку с Полтавской.Тел. офиса (с 10 до 20) : <br/> +7 (812) 985-95-01 E-mail: piterpolet@mail.ru <br/> Адрес учебного центра:д.Гостилицы, Ломоносовский р-н., <br/> аэродром Гостилицы <br/> Публичная оферта
                </p>
                <p>
                2013-2023 © Авиаклуб «ПитерПолет» - полеты на самолетах в <br/> СПбОГРН:1177800000641 ИНН: 7810657012АНО "АВИАКЛУБ РАЗВИТИЯ <br/> МАЛОЙ И СВЕРХЛЕГКОЙ АВИАЦИИ "ПИТЕРПОЛЕТ" <br/> Вся информация, предоставленная посетителями, <br/> используется исключительно для обратной связи. Ваши <br/> данные не будут использоваться в иных целях <br/> Обращаем ваше внимание на то, что данный интернет-сайт <br/> носит исключительно информационный характер и ни при <br/> каких условиях не является публичной офертой
                </p>
            </div>
        </section>
    )
}