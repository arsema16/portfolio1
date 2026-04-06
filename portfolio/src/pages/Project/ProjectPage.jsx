import React, { useEffect, useState } from 'react'
import './ProjectPage.css';
import { NavLink } from 'react-router-dom';
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { FormattedMessage } from 'react-intl';

const APP_REPOS = ['nexo', 'facebook', 'facebook-clone', 'facebook_clone', 'facebookclone', 'fullstack-recipe-app', 'fullstack_recipe_app', 'onboarding', 'gdg_study_session_g2', 'campus-menu-compass', 'recipe-app-api', 'agripay_letter_flutter', 'agripay_letter_flutter_gdg_hackathon', 'gdg_hackat', 'internship_exam', '2024-project-phase-mobile-tasks', 'fluent-internship-task'];

const LIVE_LINKS = {
  'tova': 'https://tova-kgvz.vercel.app/',
  'infnova-internship': 'https://infnova-internship1-2mus.vercel.app/',
  'schoolinspectionsystem': 'https://schoolinspectionsystem.onrender.com/dashboard.html',
};

const STATIC_IMAGES = {
  'campus-menu-compass-ip2': require('../../img/campus-menu-compass.png'),
  'arsema16': require('../../img/arsema16.png'),
};

const CARD_LINKS = {
  'schoolinspectionsystem': 'https://schoolinspectionsystem.onrender.com/dashboard.html',
  'arsema16': 'https://github.com/arsema16',
  'tova': 'https://tova-kgvz.vercel.app/',
  'infnova-internship': 'https://infnova-internship1-2mus.vercel.app/',
  'campus-menu-compass-ip2': 'https://campusmenucompass.great-site.net',
};

const getPreviewImg = (repo) => {
  return `https://placehold.co/600x400/1a1a2e/ffffff?text=${encodeURIComponent(repo.name)}`;
};

const Project = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/arsema16/repos")
      .then(res => res.json())
      .then(data => {
        const filtered = data
          .filter(repo => !repo.fork && !APP_REPOS.includes(repo.name.toLowerCase()))
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(filtered);
      })
      .catch(err => console.log("Error fetching repos:", err));
  }, []);

  return (
    <div>
      <HeaderPage />
      <ParticleBackground />
      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage id='projects' defaultMessage='Projects' />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              <FormattedMessage id='site-web' defaultMessage='websites' />
            </NavLink>
            <NavLink to="/project/app" offset={-150} duration={500}>Apps</NavLink>
            <NavLink to="/project/game" offset={-150} duration={500}>
              <FormattedMessage id='games' defaultMessage='games' />
            </NavLink>
          </nav>
        </section>

        <section className="projects__grid paginas-web">
          {repos.map((repo) => {
            const liveLink = CARD_LINKS[repo.name.toLowerCase()] || repo.homepage || repo.html_url;
            const iframeSrc = LIVE_LINKS[repo.name.toLowerCase()] || repo.homepage;
            const staticImg = STATIC_IMAGES[repo.name.toLowerCase()];
            const hasLive = !!iframeSrc;
            return (
              <div className="projects__item project-card" key={repo.id}>
                {staticImg ? (
                  <img src={staticImg} alt={repo.name} className="projects__img" />
                ) : hasLive ? (
                  <div className="project-card__iframe-wrap">
                    <iframe
                      src={iframeSrc}
                      title={repo.name}
                      className="project-card__iframe"
                      scrolling="no"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <img
                    src={`https://placehold.co/600x400/1a1a2e/ffffff?text=${encodeURIComponent(repo.name)}`}
                    alt={repo.name}
                    className="projects__img"
                  />
                )}
                <div className="project-card__overlay">
                  <h3 className="project-card__title">{repo.name}</h3>
                  <p className="project-card__desc">
                    {repo.description ? repo.description : "A web development project."}
                  </p>
                  <div className="project-card__btns">
                    <a href={liveLink} target="_blank" rel="noopener noreferrer" className="custom-btn btn-codigo">
                      Live Demo
                    </a>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="custom-btn btn">
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Project;
