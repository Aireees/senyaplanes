import "./flight.css"
import photo1 from "../../img/Group 2.png"


export default function Flight2Choose(){
    return(
        <section className="flight_container">
            <div className="about_flight_box">
                <div className="about_flight_text_box">
                    <h3>
                        Учебный полет
                    </h3>
                    <p className="about_flight_text">
                        Демонстрация управления самолетом, выполнение мелких и глубоких виражей, изменение режимов полета (набор высоты и снижение), выполнение фигур простого пилотажа (горки, виражи). От 15 до 90 минут в небе. Подробная инструкция по управлению самолетом. Маршрут в районе аэродрома. Опытный инструктор контролирует процесс.                    </p>
                    <p className="about_flight_price">
                            7.999 ₽
                        <span>
                            10.000 ₽
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