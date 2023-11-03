import "./presents.css"
import photo1 from "../../img/Rectangle 14.1.png"
import photo2 from "../../img/Rectangle 14.2.png"
import photo3 from "../../img/Rectangle 14.3.png"




export default function Presents(){
    return(
        <section className="presents_container">
            <div className="about_presents_box">
                <h3>
                    подарочные сертефикаты
                </h3>
                <p>
                    Дарите впечатления, а не вещи ― подарочный сертификат на полет на самолете. Воздушная экскурсия гарантирует новые яркие впечатления, а московские городские пейзажи с высоты никогда не забудутся виновнику торжества. Вы навсегда останетесь в его сердце как человек, подаривший небо! Доставка сертификата по городу. От 15 до 90 минут в небе над Питером. Пролет над баннерами с поздравлениями или признаниями. 30-40 фото профессионального фотографа. Минутный видеоролик с историей вашего полета. Экскурсия по аэродрому. Скидка 30% при покупке второго подарочного сертификата.
                </p>
            </div>
            <div className="presents_type_box">
                <div className="presents_type">
                    <h3>свидание</h3>
                    <img src={photo2}/>
                    <p>6.550 ₽</p>
                    <div>купить</div>
                </div>
                <div className="presents_type">
                    <h3>по маршруту</h3>
                    <img src={photo3}/>
                    <p>6.480 ₽</p>
                    <div>купить</div>
                </div>
                <div className="presents_type">
                    <h3>учебный полет</h3>
                    <img src={photo1}/>
                    <p>7.999 ₽</p>
                    <div>купить</div>
                </div>
            </div>
        </section>
    )
}