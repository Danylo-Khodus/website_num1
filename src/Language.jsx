import "./stylesheets/styles.css";
import "./stylesheets/footer.css";
import "./stylesheets/utils.css";

import React, {useState} from 'react';

import flag_DT from "./assets/images/flags/deutchland.png";
import flag_FR from "./assets/images/flags/france.png";
import flag_GB from "./assets/images/flags/gb.png";
import flag_UA from "./assets/images/flags/ua.png";

export default function Language() {

    const [langOpened, setLangOpened] = useState(false);

    const [lang, setLang] = useState('Українська');
    const [flag, setFlag] = useState(flag_UA);

    return (
      <div className="lang__conteiner">
        <div className={`lang__dropdown ${langOpened ? 'flex' : 'hidden'}`}>
            <div className="lang__selected dropdown" onClick={() => {setFlag(flag_GB); setLang('English, GB')}}>
            <img
                className="flag"
                src={flag_GB}
                alt="Flag__GB"
            />
            <a className="language">English, GB</a>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon arrow"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
            </svg>
            </div>
            <div className="lang__selected dropdown" onClick={() => {setFlag(flag_DT); setLang('Deutsch')}}>
            <img
                className="flag"
                src={flag_DT}
                alt="Flag__DT"
            />
            <a className="language">Deutsch</a>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon arrow"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
            </svg>
            </div>
            <div className="lang__selected dropdown" onClick={() => {setFlag(flag_FR); setLang('Français')}}>
            <img
                className="flag"
                src={flag_FR}
                alt="Flag__FR"
            />
            <a className="language">Français</a>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon arrow"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
            </svg>
            </div>
            <div className="lang__selected dropdown" onClick={() => {setFlag(flag_UA); setLang('Українська')}}>
            <img
                className="flag"
                src={flag_UA}
                alt="Flag__UA"
            />
            <a className="language">Українська</a>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon arrow"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
            </svg>
            </div>
        </div>
        <div className="lang__selected selected" onClick={() => {setLangOpened(!langOpened)}}>
            <img
            className="flag"
            src={flag}
            alt="Flag"
            />
            <a className="language">{lang}</a>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="icon arrow"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
            </svg>
        </div>
      </div>
    )
}