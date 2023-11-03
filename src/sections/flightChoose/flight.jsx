import "./flight.css"
import photo1 from "../../img/Group 1.png"


export default function FlightChoose(){
    return(
        <section className="flight_container" id="section3">
            <h2 className="choose_flight_title">Выбор полета</h2>
            <div className="about_flight_box">
                <div className="about_flight_text_box">
                    <h3>
                        Свидание в частном самолете
                    </h3>
                    <p className="about_flight_text">
                        Cамый романтичный подарок для любимого человека, который мы с удовольствием <br/> организуем для вас. Вы вдвоем насладитесь захватывающими дух видами столичных <br/> достопримечательностей в роскошной обстановке. Это идеальный момент, чтобы признаться <br/> в чувствах или сделать предложение руки и сердца. От 15 до 90 минут в небе над Питером. <br/> Баннеры «Я люблю тебя» или «Выходи за меня». 30-40 фото профессионального фотографа. <br/> Минутный видеоролик с историей вашего полета. Экскурсия по аэродрому.  
                    </p>
                    <p className="about_flight_price">
                            6.550 ₽
                        <span>
                            7.800 ₽
                        </span>
                    </p>
                </div>
                <div className="about_flight_photos">
                    <img src={photo1}/>
                </div>
            </div>
            <div className="about_flight_buy_button">
                купить
            </div> 
        </section>
    )
}