import "./stylesheets/styles.css";
import "./stylesheets/nav.css";
import "./stylesheets/utils.css";

import logo from "./assets/images/Discord-logo.png";
import image_1 from "./assets/images/left__img.svg";

import React, {useState} from 'react';

export default function Header_Nav() {

    const [nav__opened, setNavOpened] = useState('hidden');

    function navHide() {
      if (nav__opened == 'close') {
        setNavOpened('hidden');
      }
    }

    return (
    <>
    <section 
    className={`nav__BG ${nav__opened}`}
    onAnimationEnd={navHide}
    ></section>

    <div className={`nav__conteiner ${nav__opened}`} onAnimationEnd={navHide}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="x-mark"
        onClick={() => {setNavOpened('close')}}
    >
        <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
        />
    </svg>

    <div className="nav__content">
        <img src={logo} alt="Logo" className="logo nav" />
        <div className="nav__line"></div>
        <div className="main__content">
        <a className="nav__link">На головну</a>
        <a className="nav__link">Завантажити</a>
        <a className="nav__link">Nitro</a>
        <a className="nav__link">Ознайомитися</a>
        <a className="nav__link flex">
            Безпека
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="icon arrow nav"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
            </svg>
        </a>
        <a className="nav__link flex"
            >Академія модераторів
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="icon arrow nav"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
            </svg>
        </a>
        <a className="nav__link">Підтримка</a>
        <a className="nav__link">Блог</a>
        <a className="nav__link">Вакансії</a>
        </div>
    </div>

    <div className="nav__btn__conteiner">
        <button className="nav__btn btn">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="icon download"
        >
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
        </svg>
        Завантажити з Google Play
        </button>
    </div>
    </div>

    <section className="hero__wrapper">
        <header className="header conteiner">
        <div className="header__content padding">
            <div className="header__left">
            <img
                className="logo"
                src={logo}
                alt="Logo"
            />
            </div>
            <div className="header__right">
            <div className="hamburger" onClick={() => {setNavOpened('block')}}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            </div>
        </div>
        </header>
        <div className="hero conteiner">
        <div className="hero__content padding">
            <h1 className="hero__title">Уяви місце<strong>...</strong></h1>
            <p className="hero__paragraph">
            ...де залюбки збирається твій шкільний клуб, геймерська тусовка
            або міжнародна спільнота митців. Або близькі друзі, які хочуть
            провести час разом. Місце, де так просто спілкуватися щодня та
            чутися частіше.
            </p>
            <button className="hero__btn btn">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon download"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
            </svg>
            Завантажити з Google Play
            </button>
        </div>
        <div className="hero__img">
            <img src={image_1} alt="background" />
        </div>
        </div>
    </section>
    </>
    )
}