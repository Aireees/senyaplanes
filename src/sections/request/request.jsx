import "./request.css"

export default function Request(){
    return(
        <section className="request_container">
            <div className="request_box">
                <h2>
                    заявка
                </h2>
                <h4>
                    ФИО
                </h4>
                <input type={"text"}/>
                <h4>
                    Номер телефона
                </h4>
                <input type={"tel"}/>
                <h4>
                    Почта(e-mail)
                </h4>
                <input type={"email"}/>
                <h4>
                    Полёт
                </h4>
                <div className="choice_flight_row">
                    <div className="choice_flight_button">
                        <input type={"radio"} id="choice1" name="flight_choice" value="love"/>
                        <label for="choice1">свидание</label>
                    </div>
                    <div className="choice_flight_button">
                        <input type={"radio"} id="choice2" name="flight_choice" value="flyer"/>
                        <label for="choice2">полёт по маршруту</label>
                    </div>
                </div>
                <div className="choice_flight_row">
                    <div className="choice_flight_button">
                        <input type={"radio"} id="choice3" name="flight_choice" value="learn"/>
                        <label for="choice3">учебный полет</label>
                    </div>
                    <div className="choice_flight_button">
                        <input type={"radio"} id="choice4" name="flight_choice" value="present"/>
                        <label for="choice4">сертификат</label>
                    </div>
                </div>
                <h4>
                    Дата и время
                </h4>
                <select>
                    <option>10.09.1999</option>
                </select>
                <div className="request_button">
                    оформить заказ
                </div>
            </div>

        </section>
    )
}