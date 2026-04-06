import React, { useContext } from "react";
import './Header.css';

/* React router */
import { NavLink, useNavigate } from 'react-router-dom';

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';

/* Language */
import { FormattedMessage } from "react-intl";
import { langContext } from '../../context/Context';

const HeaderPage = () => {
    const idioma = useContext(langContext);
    const navigate = useNavigate();

    const menuDesplegable = () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle("activar");

        window.onscroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".site-header").classList.add("activar")
            } else document.querySelector(".site-header").classList.remove("activar")

            navbar.classList.remove("activar")
        }
    }

    return (
        <header className="site-header">
            <div id="menu-btn" className="fas fa-bars" onClick={menuDesplegable}></div>

            <NavLink className="logo" to="/" >
                <p>=(<span>Arsema</span>)={">"}</p>
            </NavLink>

            <nav className="navbar">
                <NavLink to="/" offset={-150} duration={500}>
                    <FormattedMessage id='home' defaultMessage='Home' />
                </NavLink>
                <NavLink to="/about" offset={-150} duration={500}>
                    <FormattedMessage id='about' defaultMessage='About me' />
                </NavLink>
                <NavLink to="/service" offset={-150} duration={500}>
                    <FormattedMessage id='services' defaultMessage='Services' />
                </NavLink>
                <NavLink to="/project" offset={-150} duration={500}>
                    <FormattedMessage id='projects' defaultMessage='Projects' />
                </NavLink>
                <div id="buttons">
                    <img onClick={() => idioma.selectLanguage('en-US')} src="https://nahuel61920.github.io/Portafoliovirtual/img/en.png" alt="English" />
                    <img onClick={() => idioma.selectLanguage('es-ES')} src="https://flagcdn.com/w40/et.png" alt="አማርኛ" />
                </div>
            </nav>

            <button className="back-btn" onClick={() => navigate(-1)}>
                <i className="fas fa-arrow-left"></i> Back
            </button>

            <div className="switch" id="switch">
                <DarkMode />
            </div>
        </header>
    )
}

export default React.memo(HeaderPage);