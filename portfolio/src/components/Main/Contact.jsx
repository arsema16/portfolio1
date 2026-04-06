import React, { useState } from 'react';
import '../../pages/Contact/ContactPage.css'
import Typical from 'react-typical';
import { FormattedMessage } from 'react-intl';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await emailjs.send(
                'service_19xxtkc',
                'template_h6ybtb8',
                { name: form.name, from_email: form.email, message: form.message },
                'SPg0kXSBpu2k_1GSS'
            );
            setStatus('success');
            setForm({ name: '', email: '', message: '' });
        } catch (err) {
            console.error('EmailJS error:', err?.text || err);
            setStatus('error');
        }
    };

    return (
        <section className="contactos" id="contactos">
            <h2 className="heading">
                <FormattedMessage id='contact' defaultMessage='Contact' />
            </h2>
            <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
                <FormattedMessage id='contact-info' defaultMessage='Contact me by: ' />
                <Typical
                    className="site-contacto"
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'Gmail', 1500,
                        'WhatsApp', 1500,
                        'Instragram', 1500,
                        'Telegram', 1500,
                        'Linkedin', 1500,
                        'Github', 1500,
                    ]}
                />
            </h3>

            <div className="icons">
                <a href="mailto:arsematefera87@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                    <div className="layer"><span></span><span></span><span></span><span></span><span className="fab fas fa-envelope"></span></div>
                    <div className="text">Gmail</div>
                </a>
                <a href="https://api.whatsapp.com/send?phone=0956457728" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                    <div className="layer"><span></span><span></span><span></span><span></span><span className="fab fa-whatsapp"></span></div>
                    <div className="text">Whatsapp</div>
                </a>
                <a href="https://www.instagram.com/a.r.s.m.a_?igsh=MWF0ODN1eW52a3NzbA==" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                    <div className="layer"><span></span><span></span><span></span><span></span><span className="fab fa-instagram"></span></div>
                    <div className="text">Instagram</div>
                </a>
                <a href="https://t.me/arsetefera" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                    <div className="layer"><span></span><span></span><span></span><span></span><span className="fab fa-telegram"></span></div>
                    <div className="text">Telegram</div>
                </a>
                <a href="https://www.linkedin.com/in/arsema-tefera-a0257b325" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                    <div className="layer"><span></span><span></span><span></span><span></span><span className="fab fa-linkedin-in"></span></div>
                    <div className="text">Linkedin</div>
                </a>
                <a href="https://github.com/arsema16/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                    <div className="layer"><span></span><span></span><span></span><span></span><span className="fab fa-github-square"></span></div>
                    <div className="text">GitHub</div>
                </a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up">
                <h3 className="contact-form__title">Send me a message</h3>
                <div className="contact-form__group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="custom-btn btn-codigo" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && <p className="contact-form__success">Message sent successfully!</p>}
                {status === 'error' && <p className="contact-form__error">Something went wrong. Please try again.</p>}
            </form>
        </section>
    );
};

export default React.memo(Contact);