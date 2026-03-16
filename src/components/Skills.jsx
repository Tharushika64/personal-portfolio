import './Skills.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaGitAlt, FaAngular } from 'react-icons/fa'
import { SiTailwindcss, SiAdobephotoshop, SiCanva, SiAdobeillustrator } from 'react-icons/si'

const Skills = () => {
    const fullstackSkills = [
        { name: 'HTML5', icon: <FaHtml5 />, level: '95%' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: '90%' },
        { name: 'JavaScript', icon: <FaJs />, level: '85%' },
        { name: 'React', icon: <FaReact />, level: '80%' },
        { name: 'Tailwind', icon: <SiTailwindcss />, level: '85%' },
        { name: 'Angular', icon: <FaAngular />, level: '40%' },
        { name: 'Git', icon: <FaGitAlt />, level: '80%' },
    ]

    const uiuxSkills = [
        { name: 'Figma', icon: <FaFigma />, level: '90%' },
        { name: 'Photoshop', icon: <SiAdobephotoshop />, level: '75%' },
        { name: 'Canva', icon: <SiCanva />, level: '90%' },
        { name: 'Illustrator', icon: <SiAdobeillustrator />, level: '60%' },
    ]

    const renderSkills = (skillList) =>
        skillList.map((skill, index) => (
            <div className="skill-card" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
                <div className="progress-bar">
                    <div className="progress" style={{ width: skill.level }}></div>
                </div>
            </div>
        ))

    return (
        <section className="section skills" id="skills">
            <div className="container">
                <h2 className="section-title">My Skills</h2>

                <div className="skills-category">
                    <h3 className="category-title">Fullstack Development</h3>
                    <div className="skills-grid">
                        {renderSkills(fullstackSkills)}
                    </div>
                </div>

                <div className="skills-category">
                    <h3 className="category-title">UI/UX Design</h3>
                    <div className="skills-grid">
                        {renderSkills(uiuxSkills)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
