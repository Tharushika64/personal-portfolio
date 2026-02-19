import './About.css'
import { FaUserTie, FaPaintBrush, FaCode } from 'react-icons/fa'

const About = () => {
    return (
        <section className="section about" id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a passionate <strong>UI/UX Designer</strong> and <strong>Frontend Developer</strong> with a keen eye for detail and a drive for creating user-centric digital experiences.
                        </p>
                        <p>
                            With a background in both design and development, I bridge the gap between aesthetics and functionality. I believe that good design is not just about how things look, but how they work.
                        </p>
                        <div className="stats">
                            <div className="stat-item">
                                <h3>0+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat-item">
                                <h3>7+</h3>
                                <p>Projects Completed</p>
                            </div>
                            <div className="stat-item">
                                <h3>2+</h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon"><FaPaintBrush /></div>
                            <h3>UI/UX Design</h3>
                            <p>Creating intuitive interfaces and meaningful user experiences through research and design.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><FaCode /></div>
                            <h3>Frontend Dev</h3>
                            <p>Building responsive, pixel-perfect websites using modern technologies like Html, Css, JavaScript, React,Tailwind CSS, Angular.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><FaUserTie /></div>
                            <h3>Consulting</h3>
                            <p>Providing expert advice on web strategy, accessibility, and design systems for your business.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
