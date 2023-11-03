import "./header.css"
import { useEffect, useRef, useState } from "react";
export default function Header(){
    const Header = useRef(null);
    const defaultOffset = 799;
    useEffect(()=>{
        let lastScroll = 0;
        let scrollPosition = () => document.documentElement.scrollTop;
        window.addEventListener('scroll', ()=>{
            if(scrollPosition() >= defaultOffset){
                if(scrollPosition() > lastScroll) {
                    Header.current.style.transform="translateY(-101%)"
                }
                else{
                    Header.current.style.transform="translateY(0%)"
                }
            }
            lastScroll = scrollPosition();
        });
    })

    return(
        <header className="header_container" ref={Header}>
            <nav className="nav_buttons_container">
                <a className="nav_button" href="#section0">Главная</a>
                <a className="nav_button" href="#section1">О нас</a>
                <a className="nav_button" href="#section2">Преимущества</a>
                <a className="nav_button" href="#section3">Предложения</a>
                <a className="nav_button" href="#section4">Как добраться</a>
                <a className="nav_button" href="#section5">Пилоты</a>
                <a className="nav_button" href="#section6">Контакты</a>
            </nav>
        </header>
    )
}