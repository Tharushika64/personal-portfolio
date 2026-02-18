import './Education.css'
import { FaGraduationCap, FaCertificate } from 'react-icons/fa'

const Education = () => {
    const education = [
        {
            type: 'degree',
            title: 'BSc in Computer Science (Hons)',
            institution: 'University of Westminster',
            year: '2020 - 2024',
            description: 'Specialized in Software Engineering with First Class Honours.'
        },
        {
            type: 'certification',
            title: 'Google UX Design Professional Certificate',
            institution: 'Coursera',
            year: '2023',
            description: 'Completed rigorous training in user-centric design research, prototyping, and testing.'
        },
        {
            type: 'certification',
            title: 'Graphic Design NVQ Level 4',
            institution: 'NAITA',
            year: '2021',
            description: 'Professional qualification in graphic design principles, software, and visual communication.'
        },
        {
            type: 'certification',
            title: 'Meta Frontend Developer Certificate',
            institution: 'Coursera',
            year: '2022',
            description: 'Mastered React, advanced JavaScript, and modern frontend frameworks.'
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
