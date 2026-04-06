import React from 'react';
import '../../pages/Service/ServicesPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Service = () => (
    <section className="servicios" id="servicios">
        <h2 className="heading">
            <FormattedMessage
                id='services'
                defaultMessage='Services'
            />
        </h2>
        <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
    <i className="fas fa-database"></i>
    <h3>
        <FormattedMessage
            id="data-annotation"
            defaultMessage="Data Annotation"
        />
    </h3>

    <p>
        <FormattedMessage
            id="data-annotation-info"
            defaultMessage="High-quality labeling and annotation of data including images, text, and audio to support accurate model training and reliable dataset development."
        />
    </p>
</div>

            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-laptop"></i>
                <h3>
                    <FormattedMessage
                        id='development'
                        defaultMessage='Web development'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
    <i className="fas fa-mobile-alt"></i>
    <h3>
        <FormattedMessage
            id="mobile-app-development"
            defaultMessage="Mobile App Development"
        />
    </h3>

    <p>
        <FormattedMessage
            id="mobile-app-info"
            defaultMessage="Design and development of modern mobile applications with responsive UI, smooth performance, and seamless user experiences for both Android and iOS."
        />
    </p>
</div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
                <i className="fas fa-wrench"></i>
                <h3>
                    <FormattedMessage
                        id='maintenance'
                        defaultMessage='Web maintenance'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='maintenance-info'
                        defaultMessage='Complete maintenance of web pages to detect and solve errors, update content whether text, photos, web design elements, add new functions, etc.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
                <i className="fas fa-search"></i>
                <h3>
                    <FormattedMessage
                        id='seo'
                        defaultMessage='Web positioning (SEO)'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='seo-info'
                        defaultMessage='Web positioning through SEO, so your website appears in the main search results according to your business, both in Google, Bing, or other internet search engines'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
                <i className="fas fa-tachometer-alt"></i>
                <h3>
                    <FormattedMessage
                        id='optimization'
                        defaultMessage='Website optimization'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='optimization-info'
                        defaultMessage='Complete optimization of your web page, improving loading speed, using optimized images, a good URL, to give a better experience to users who visit the website'
                    />
                </p>
            </div>
        </div>
        <div className='portafolio-btn'>
            <Link to="/service">
                <ButtomGet/>
            </Link>
        </div>
    </section>
);

export default React.memo(Service);