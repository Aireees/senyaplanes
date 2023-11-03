import "./flight.css"
import photo1 from "../../img/Group 3.png"


export default function Flight3Choose(){
    return(
        <section className="flight_container">
            <div className="about_flight_box">
                <div className="about_flight_text_box">
                    <h3>
                        Полет по маршруту
                    </h3>
                    <p className="about_flight_text">
                        Воздушная экскурсия откроет вам город с новой стороны: увидите главные достопримечательности с высоты. Полет над Питером - отличный способ отметить день рождения или просто весело провести время с друзьями. Незабываемые впечатления на всю жизнь обеспечены! От 15 до 90 минут. До 3 человек. Несколько вариантов маршрутов, включая полет над всем Питером                    </p>
                    <p className="about_flight_price">
                            6.480 ₽
                        <span style={{visibility: "hidden"}}>
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