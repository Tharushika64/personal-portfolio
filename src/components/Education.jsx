import './Education.css'
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'

import pythonPdf from '../assets/python.pdf'
import dataSciencePdf from '../assets/Data Science & Analytics.pdf'
import uiPdf from '../assets/ui.pdf'
import udemyPdf from '../assets/udemy.pdf'

const Education = () => {
    const education = [
        {
            type: 'degree',
            title: 'BSc (Hons) in Software Engineering ',
            institution: 'BCI Campus',
            year: '2023 - 2027',
            description: 'Undergraduate Student.'
        },
        {
            type: 'certification',
            title: 'Figma + AI + Real Project',
            institution: 'Udemy',
            year: '2025',
            description: 'Mastered advanced Figma techniques, integrated AI tools for design efficiency, and completed a real-world project to apply learned skills.',
            link: udemyPdf
        },
        {
            type: 'certification',
            title: 'Intro to UI/UX Design',
            institution: 'Le Wagon',
            year: '2025',
            description: 'Gained a solid foundation in UI/UX design principles, including user research, wireframing, and prototyping using Figma.',
            link: uiPdf
        },
        {
            type: 'certification',
            title: 'Data Science & Analytics',
            institution: 'HP LIFE',
            year: '2026',
            description: 'Learned the fundamentals of data analysis, including data collection, interpretation, and visualization techniques to drive business insights.',
            link: dataSciencePdf
        },
        {
            type: 'degree',
            title: 'NVQ Level 4 in Graphic Design',
            institution: 'NAITA',
            year: '2022',
            description: 'Professional qualification in graphic design principles, software, and visual communication.'
        },
        {
            type: 'certification',
            title: 'Python for Data Science',
            institution: 'Cognitiveclass.ai',
            year: '2025',
            description: 'Mastered fundamental Python programming, including data structures, logic, and data manipulation using libraries like Pandas and NumPy for data analysis.',
            link: pythonPdf
        }
    ]

    return (
        <section className="section education" id="education">
            <div className="container">
                <h2 className="section-title">Education & Certifications</h2>

                <div className="timeline">
                    {education.map((item, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-dot">
                                {item.type === 'degree' ? <FaGraduationCap /> : <FaCertificate />}
                            </div>
                            <div className="timeline-content">
                                <span className="timeline-date">{item.year}</span>
                                <h3>{item.title}</h3>
                                <h4>{item.institution}</h4>
                                <p>{item.description}</p>
                                {item.link && (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="edu-link">
                                        <FaExternalLinkAlt /> View Achievement
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
