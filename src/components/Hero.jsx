import './Hero.css'
import HeroImg from '../assets/IMG_3888.jpeg'

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <h3 className="subtitle">Hello, I'm</h3>
                    <h1 className="title">Naduni Jayasingha</h1>
                    <h2 className="role">
                        <span className="text-gradient">UI/UX Designer</span> & <span className="text-gradient">Frontend Developer</span>
                    </h2>
                    <p className="description">
                        "Crafting visually stunning, human-centered interfaces that convert. I combine aesthetic design with robust frontend development to elevate your brand’s digital presence."
                    </p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn">View Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                        <a href="/naduni-cv.pdf" download="naduni-cv.pdf" className="btn btn-outline">Download CV</a>
                    </div>
                </div>
                <div className="hero-img-wrapper">
                    <div className="hero-img-placeholder">
                        <div className="circle"></div>
                        <img src={HeroImg} alt="Naduni Jayasingha" className="hero-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
