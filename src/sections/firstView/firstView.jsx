import "./firstView.css"
import blackPlane from "../../img/blackPlane.png"
import vk from "../../img/vk.png"
import facebook from "../../img/facebook.png"
import instagram from "../../img/instagram.png"

export default function FirstView(){
    return(
        <section className="first_view_container" id="section0">
            <div className="first_view_header">
                <img src={blackPlane}/>
                <div className="icons_box">
                    <img src={vk}/>
                    <img src={facebook}/>
                    <img src={instagram}/>
                </div>
            </div>
            <h1>
                Полеты над акваторией <br/> Петербурга
            </h1>
            <p>
                Полеты на самолете по доступным ценам для себя или в подарок
            </p>
            <div className="first_view_button">
                полетели!
            </div>
        </section>
    )
}