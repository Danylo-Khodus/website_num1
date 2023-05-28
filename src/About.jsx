import "./stylesheets/styles.css";
import "./stylesheets/about.css";
import "./stylesheets/utils.css";

import image_2 from "./assets/images/first__hero.svg";
import image_3 from "./assets/images/second__hero.svg";
import image_4 from "./assets/images/third__hero.svg";
import image_5 from "./assets/images/fourth__hero.svg";

import { useState, useRef, useEffect } from "react";

export default function About() {

    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        });
        console.log(isIntersecting);
        observer.observe(ref.current);
        return () => observer.disconnect();
      }, []);



      
    return (
    <>
    <section className="bg-clr-white">
        <div className="about conteiner">
        <div className="about__content padding" ref={ref}>
            <img
            className="about__image"
            src={image_2}
            alt="first"
            />
            <h2 className="about__title">
            Місце, куди можна потрапити тільки за запрошенням, створене тобою
            та для тебе. Де тобі добре.
            </h2>
            <p className="about__paragraph">
            Сервери Discord - це організовані за тематиками канали, в яких
            можна співпрацювати, ділитися та просто поговорити про свій день,
            не засмічуючи груповий чат.
            </p>
        </div>
        </div>
    </section>
    <section className="bg-clr-darker-white">
        <div className="about conteiner">
        <div className="about__content padding">
            <img
            className="about__image"
            src={image_3}
            alt="first"
            />
            <h2 className="about__title">Де відриватися - легко</h2>
            <p className="about__paragraph">
            Займай місце в голосовому каналі, коли маєш вільний час. Друзі на
            твоєму сервері побачать, що ти в мережі, і миттєво з'являться, щоб
            поспілкуватися з тобою без дзвінка.
            </p>
        </div>
        </div>
    </section>
    <section className="bg-clr-white">
        <div className="about conteiner">
        <div className="about__content padding">
            <img
            className="about__image"
            src={image_4}
            alt="first"
            />
            <h2 className="about__title">
            Від кількох осіб до справжньої спільноти фанатів
            </h2>
            <p className="about__paragraph">
            Створи спільноту за допомогою інструментів модерування та
            персоналізованого доступу учасників. Надавай їм особливі
            можливості, створюй приватні канали та ще багато іншого.
            </p>
        </div>
        </div>
    </section>
    <section className="bg-clr-darker-white">
        <div className="about conteiner">
        <div className="about__content last padding">
            <h2 className="about__title last">
            Надійні технології<strong>,</strong> щоб залишатися на зв'язку
            </h2>
            <p className="about__paragraph last">
            Голосове та відео-спілкування з малою затримкою, ніби всі
            знаходяться в одній кімнаті. Помаши рукою на відео, дивись
            трансляцію ігор друзів, або збирайтеся разом та малюйте, показуючи
            свій екран іншим.
            </p>
            <img
            className="about__image last"
            src={image_5}
            alt="first"
            />
            <h2 className="about__title end">Готовий розпочати свою подорож?</h2>
            <button className="about__btn btn">
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
    </section>
    </>
    )
}