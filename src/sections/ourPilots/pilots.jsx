import "./pilots.css"
import pilot1 from "../../img/image 1.png"
import pilot2 from "../../img/image 2.png"
import pilot3 from "../../img/image 3.png"
import pilot4 from "../../img/image 4.png"
import pilot5 from "../../img/image 5.png"




export default function OurPilots(){
    return(
        <section className="our_pilots_container" id="section5">
            <h2>
                наши пилоты
            </h2>
            <h4>
                Мы собрали команду опытных инженеров и пилотов, которые ежедневно обслуживают технику и проводят полеты. Вы будете в руках <br/> профессионалов: пилоты регулярно проходят аттестацию и медицинское обследование. 
            </h4>
            <div className="pilots_photos_box">
                <div className="pilot_card">
                    <img src={pilot1}/>
                    <p>иван иванов</p>
                </div>
                <div className="pilot_card">
                    <img src={pilot2}/>
                    <p>ВАСЯ ВАСИЬЕВ</p>
                </div>
                <div className="pilot_card">
                    <img src={pilot3}/>
                    <p>ДЖЕЙСОН СТЭТХЭМ</p>
                </div>
                <div className="pilot_card">
                    <img src={pilot4}/>
                    <p>СЕРГЕЙ СЕРГЕЕВ</p>
                </div>
                <div className="pilot_card">
                    <img src={pilot5}/>
                    <p>ТАРАС БУЛЬБА</p>
                </div>
            </div>
        </section>
    )
}