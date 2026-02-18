import './Contact.css'
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
    return (
        <section className="section contact" id="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3>Let's Talk</h3>
                        <p>
                            I'm open to freelance work, full-time opportunities, or just a friendly chat. Feel free to reach out!
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <FaEnvelope className="icon" />
                                <a href="mailto:tharushikanaduni526@gmail.com">tharushikanaduni526@gmail.com</a>
                            </div>
                            <div className="contact-item">
                                <FaPhone className="icon" />
                                <div>
                                    <a href="tel:+94716966164">+94 71 696 6164</a> / <a href="tel:0761942903">076 194 2903</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt className="icon" />
                                <span>Madampe, Galmuruwa , Sri Lanka</span>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn">
                            Send Message <FaPaperPlane style={{ marginLeft: '0.5rem' }} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
