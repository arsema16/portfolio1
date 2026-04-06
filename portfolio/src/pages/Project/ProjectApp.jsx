import React, { useState } from 'react';
import './ProjectPage.css';
import Modal from "./Modal";
import { NavLink } from 'react-router-dom';
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { FormattedMessage } from 'react-intl';

const proyectsImgApp = require.context('../../img', true);

function ProjectApp() {
    const [modalState, setModalState] = useState({});

    const toggleModal = (id) => {
        setModalState(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const projects = [
        { id: 1, title: 'Nexo', img: null, link: 'https://github.com/arsema16/nexo', description: ['A full-featured mobile app.'], tech: ['react'] },
        { id: 2, title: 'Facebook Clone', img: 'facebook-clone.png', link: 'https://github.com/arsema16/facebook', description: ['A Facebook clone app with core social features.'], tech: ['react'] },
        { id: 3, title: 'Fullstack Recipe App', img: null, link: 'https://github.com/arsema16/fullstack-recipe-app', description: ['A fullstack recipe application.'], tech: ['react', 'nodejs'] },
        { id: 4, title: 'Onboarding', img: null, link: 'https://github.com/arsema16/onboarding', description: ['An onboarding app.'], tech: ['react'] },
        { id: 5, title: 'Recipe App API', img: null, link: 'https://github.com/arsema16/recipe-app-api', description: ['A recipe app with API integration.'], tech: ['react'] },
        { id: 6, title: 'AgriPay Letter Flutter', img: 'agripay-letter.png', link: 'https://github.com/arsema16/AgriPay_Letter_flutter_GDG_Hackathon', description: ['A Flutter app for AgriPay letter management.'], tech: ['flutter'] },
        { id: 7, title: 'GDG Hackat', img: null, link: 'https://github.com/arsema16/GDG_Hackat', description: ['A GDG hackathon project.'], tech: ['react'] },
        { id: 8, title: 'Internship Exam', img: null, link: 'https://github.com/arsema16/Internship_exam', description: ['An internship exam project.'], tech: ['react'] },
        { id: 9, title: '2024 Mobile Tasks', img: null, link: 'https://github.com/arsema16/2024-project-phase-mobile-tasks', description: ['Mobile development tasks from 2024 project phase.'], tech: ['flutter'] },
        { id: 10, title: 'Fluent Internship Task', img: 'dashboard.png', link: 'https://github.com/arsema16/fluent-internship-task', description: ['Internship task project.'], tech: ['flutter'] },
        { id: 18, title: 'CoinPlus', img: 'proyecto-app-18.png', comImg: 'proyecto-app-18-com.png', link: 'https://coin-plus.vercel.app/', description: [
            'An app that offers exchange services for all the cryptocurrencies of the Ethereum network.',
            'The application has an authentication system so the user can access their account and carry out operations.'
        ], tech: ['react', 'redux', 'bootstrap', 'typescript', 'mongodb', 'nodejs'] },
        { id: 17, title: 'PI Dogs', img: 'proyecto-app-17.png', comImg: 'proyecto-app-17-com.png', link: 'https://pi-dogs-main-ashy.vercel.app/', description: [
            'A SPA developed with the neumorphism style, makes use of The Dog API, with data stored in PostgreSQL.'
        ], tech: ['react', 'css3', 'redux', 'nodejs', 'sequelize', 'postgresql'] },
        { id: 16, title: 'Weather App', img: 'proyecto-app-16.jpg', comImg: 'proyecto-app-16.jpg', link: 'https://github.com/arsema16/Weather-App-React', description: [
            'It allows you to search for the weather of the city you choose, you can delete the city you searched for and also see more details of the city.'
        ], tech: ['html5','css3','javascript','react'] },
    ];

    return (
        <div>
            <HeaderPage />
            <ParticleBackground />

            <main>
                <section className="proyectos mas-proyect" id="proyectos">
                    <h1 className="heading">
                        <FormattedMessage id='projects' defaultMessage='Projects' />
                    </h1>
                    <nav className="navbar nav-proj">
                        <NavLink to="/project/" offset={-150} duration={500}>
                            <FormattedMessage id='site-web' defaultMessage='websites' />
                        </NavLink>
                        <NavLink to="/project/app" offset={-150} duration={500}>Apps</NavLink>
                        <NavLink to="/project/game" offset={-150} duration={500}>
                            <FormattedMessage id='games' defaultMessage='games' />
                        </NavLink>
                    </nav>
                </section>

                <section className="projects__grid apps">
                    {projects.map(proj => (
                        <div className="projects__item" key={proj.id}>
                            <button onClick={() => toggleModal(proj.id)} style={{background:'none',border:'none',padding:0,cursor:'pointer'}}>
                                <img
                                    src={proj.img ? proyectsImgApp(`./${proj.img}`) : `https://via.placeholder.com/400x250?text=${encodeURIComponent(proj.title)}`}
                                    alt={proj.title}
                                    className="projects__img"
                                />
                            </button>
                            <Modal estado={modalState[proj.id]} cambiarEstado={() => toggleModal(proj.id)}>
                                <div className="content-modal">
                                    <div className="pw-content">
                                        <div className="eins-modal-preview">
                                            <img
                                                src={proj.comImg ? proyectsImgApp(`./${proj.comImg}`) : proj.img ? proyectsImgApp(`./${proj.img}`) : `https://via.placeholder.com/400x250?text=${encodeURIComponent(proj.title)}`}
                                                alt={proj.title}
                                            />
                                        </div>
                                        <div className="eins-modal-text">
                                            <p>{proj.title}</p>
                                            {proj.description.map((desc, i) => <p key={i}>{desc}</p>)}
                                            <div className="eins-modal-text-2">
                                                <span>Link:</span> <a href={proj.link} target="_blank" rel="noreferrer">{proj.link}</a>
                                            </div>
                                            <div className="eins-modal-text-3">
                                                <span><FormattedMessage id='projects-tec' defaultMessage='Used technology:' /></span>
                                                <div className="eins-modal-tec-2">
                                                    {proj.tech.map((tech, i) => (
                                                        <img key={i} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`} alt={tech} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    ))}
                </section>
            </main>

            <ScrollToTop />
            <Footer />
        </div>
    )
}

export default ProjectApp;
