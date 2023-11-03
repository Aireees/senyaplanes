import "./aboutUs.css"
import imgCenter from "../../img/Rectangle 5.png"
import imgRight from "../../img/Rectangle 6.png"

export default function AboutUs(){
    return(
        <section className="about_us_container" id="section1">
            <h2>
               о нас 
            </h2>
            <div className="about_us_content">
                <div className="about_us_content_text">
                    <h3>
                        кто мы?
                    </h3>
                    <p>
                    Компания <b>Sputnik</b>. Профессионально <br/> организуем полеты более 4 лет в 10 городах <br/> РФ с гарантией безопасности и ярких эмоций.
                    </p>
                </div>
                <img className="about_us_content_img_center" src={imgCenter}/>
                <img className="about_us_content_img_right" src={imgRight}/>
            </div>
        </section>
    )
}