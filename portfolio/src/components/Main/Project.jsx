import React, { useEffect, useState } from "react";
import "../../pages/Project/ProjectPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";
import { FormattedMessage } from "react-intl";

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const APP_REPOS = ['nexo', 'facebook', 'facebook-clone', 'facebook_clone', 'facebookclone', 'fullstack-recipe-app', 'fullstack_recipe_app', 'onboarding', 'gdg_study_session_g2', 'campus-menu-compass', 'recipe-app-api', 'agripay_letter_flutter', 'agripay_letter_flutter_gdg_hackathon', 'gdg_hackat', 'internship_exam', '2024-project-phase-mobile-tasks', 'fluent-internship-task'];

const LIVE_LINKS = {
    'tova': 'https://tova-kgvz.vercel.app/',
    'infnova-internship': 'https://infnova-internship1-2mus.vercel.app/',
    'campus-menu-compass-ip2': 'https://campusmenucompass.great-site.net',
    'schoolinspectionsystem': 'https://schoolinspectionsystem.onrender.com/dashboard.html',
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
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage id="projects" defaultMessage="Projects" />
            </h2>

            <div
                className="proyect-site"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="proyectos-slider mySwiper"
                >
                    {repos.map((repo) => {
                        const liveLink = LIVE_LINKS[repo.name.toLowerCase()] || repo.homepage || repo.html_url;
                        const hasLive = !!(LIVE_LINKS[repo.name.toLowerCase()] || repo.homepage);
                        return (
                            <SwiperSlide className="caja" key={repo.id}>
                                {hasLive ? (
                                    <div className="project-card__iframe-wrap">
                                        <iframe
                                            src={liveLink}
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
                                    />
                                )}
                                <div className="content">
                                    <h3>{repo.name}</h3>
                                    <p>
                                        {repo.description
                                            ? repo.description
                                            : "No description available for this project."}
                                    </p>
                                    <a
                                        href={liveLink}
                                        className="custom-btn btn-codigo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={repo.html_url}
                                        className="custom-btn btn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>GitHub</span>
                                    </a>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                <div className="swiper-pagination"></div>
            </div>

            <div className="portafolio-btn">
                <Link to="/project">
                    <ButtomGet />
                </Link>
            </div>
        </section>
    );
};

export default React.memo(Project);
