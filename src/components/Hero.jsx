import { useState, useRef, useEffect } from 'react'
import './Hero.css'
import HeroImg from '../assets/IMG_3888.jpeg'
import cvPdf from '../assets/naduni-cv.pdf'
import seInternCv from '../assets/Naduni_SE_Intern_CV.pdf'

const Hero = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

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
                        <div className="dropdown-wrapper" ref={dropdownRef}>
                            <button
                                className="btn btn-outline"
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                Download CV
                            </button>
                            {showDropdown && (
                                <div className="dropdown-menu">
                                    <a href={cvPdf} download="Naduni_Jayasingha_CV.pdf" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                                        General CV
                                    </a>
                                    <a href={seInternCv} download="Naduni_SE_Intern_CV.pdf" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                                        SE Intern CV
                                    </a>
                                </div>
                            )}
                        </div>
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
