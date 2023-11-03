import "./advantages.css"
import advantagesBottom from "../../img/image 7.png"
export default function Advantages(){
    return(
        <section className="advantages_container" id="section2">
            <h2>
                преимущества
            </h2>
            <div className="advantages_imgs_box">
                <div className="advantages_imgs_left advantages_imgs">
                    <h3>
                        безопасность
                    </h3>
                    <p>
                        Самолеты перед вылетом тщательно <br/> проверяются механиками
                    </p>
                </div>
                <div className="advantages_imgs_mid advantages_imgs">
                    <h3>
                        24/7
                    </h3>
                    <p>
                        Возможность наслаждаться красотами <br/> Петербурга как в светлое, так и в <br/> темное время суток
                    </p>
                </div>
                <div className="advantages_imgs_right advantages_imgs">
                    <h3>
                        локация
                    </h3>
                    <p>
                        Наши аэродромы расположены рядом <br/> с городом, поэтому до нас удобно <br/> добираться. И вам гарантированы <br/> лучшие виды во время полета на <br/> самолете
                    </p>
                </div>
            </div>
            <div className="advantages_bottom">
                <img src={advantagesBottom}/>
                <p>
                    Вам гарантированы лучшие виды во <br/> время полета на самолете!
                </p>
            </div>
        </section>
    )
}