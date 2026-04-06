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
        { id: 1, title: 'Nexo', img: 'nexo.png', link: 'https://github.com/arsema16/nexo', description: ['A Flutter + Supabase app that connects mobile and laptop technicians with people who need their services.'], tech: ['flutter'] },
        { id: 2, title: 'Facebook Clone', img: 'facebook-clone.png', link: 'https://github.com/arsema16/facebook', description: ['A Facebook clone app built with Flutter and Firebase.'], tech: ['flutter'] },
        { id: 3, title: 'Fullstack Recipe App', img: null, link: 'https://github.com/arsema16/fullstack-recipe-app', description: ['A fullstack recipe application built with React Native.'], tech: ['react', 'nodejs'] },
        { id: 4, title: 'Onboarding', img: 'onboarding.png', link: 'https://github.com/arsema16/onboarding', description: ['A Flutter onboarding app.'], tech: ['flutter'] },
        { id: 5, title: 'Recipe App API', img: null, link: 'https://github.com/arsema16/recipe-app-api', description: ['A recipe app with API integration built with React Native.'], tech: ['react'] },
        { id: 6, title: 'AgriPay Letter Flutter', img: 'agripay-letter.png', link: 'https://github.com/arsema16/AgriPay_Letter_flutter_GDG_Hackathon', description: ['A Flutter app for AgriPay letter management built for GDG Hackathon.'], tech: ['flutter'] },
        { id: 7, title: 'GDG Hackat', img: null, link: 'https://github.com/arsema16/GDG_Hackat', description: ['A Flutter app built for a GDG hackathon.'], tech: ['flutter'] },
        { id: 8, title: 'Internship Exam', img: null, link: 'https://github.com/arsema16/Internship_exam', description: ['A Flutter internship exam project.'], tech: ['flutter'] },
        { id: 9, title: '2024 Mobile Tasks', img: null, link: 'https://github.com/arsema16/2024-project-phase-mobile-tasks', description: ['Flutter mobile development tasks from the 2024 project phase.'], tech: ['flutter'] },
        { id: 10, title: 'Fluent Internship Task', img: 'dashboard.png', link: 'https://github.com/arsema16/fluent-internship-task1', description: ['A Flutter internship task project.'], tech: ['flutter'] },
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
                            <button onClick={() => toggleModal(proj.id)} style={{background:'none',border:'none',padding:0,cursor:'pointer',width:'100%'}}>
                                <img
                                    src={proj.img ? proyectsImgApp(`./${proj.img}`) : `https://placehold.co/400x250/1a1a2e/ffffff?text=${encodeURIComponent(proj.title)}`}
                                    alt={proj.title}
                                    className="projects__img"
                                />
                            </button>
                            <div className="app-card__overlay" onClick={() => toggleModal(proj.id)} style={{pointerEvents:'auto',cursor:'pointer'}}>
                                <h3>{proj.title}</h3>
                                <p>{proj.description[0]}</p>
                            </div>
                            <Modal estado={modalState[proj.id]} cambiarEstado={() => toggleModal(proj.id)}>
                                <div className="content-modal">
                                    <div className="pw-content">
                                        <div className="eins-modal-preview">
                                            <img
                                                src={proj.comImg ? proyectsImgApp(`./${proj.comImg}`) : proj.img ? proyectsImgApp(`./${proj.img}`) : `https://placehold.co/400x250/1a1a2e/ffffff?text=${encodeURIComponent(proj.title)}`}
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
