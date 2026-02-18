import './Footer.css'
import { FaGithub, FaLinkedin, FaDribbble, FaBehance, FaFigma } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    <h2>Portfolio.</h2>
                </div>

                <div className="social-links">
                    <a href="https://github.com/Tharushika64" target="_blank" rel="noopener noreferrer" className="social-link"><FaGithub /></a>
                    <a href="https://www.linkedin.com/nadunitharushika" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin /></a>
                    <a href="#" className="social-link"><FaDribbble /></a>
                    <a href="https://www.behance.net/nadunitharush" target="_blank" rel="noopener noreferrer" className="social-link"><FaBehance /></a>
                    <a href="https://www.figma.com/files/team/1542722208522998210/recents-and-sharing?fuid=1469678677252344050" target="_blank" rel="noopener noreferrer" className="social-link"><FaFigma /></a>
                </div>

                <p className="copyright">
                    &copy; {new Date().getFullYear()} Naduni Jayasinghe. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
