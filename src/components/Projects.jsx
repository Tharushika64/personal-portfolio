import { useState } from 'react'
import './Projects.css'
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa'
import busCardImg from '../assets/bus card.jpg'
import busVideo from '../assets/bus.mp4'

const Projects = () => {
    const [activeTab, setActiveTab] = useState('ui/ux')
    const [selectedProject, setSelectedProject] = useState(null)
    const [playingVideo, setPlayingVideo] = useState(null)

    const uiUxProjects = [
        {
            title: 'Bus Card Payment App',
            category: 'UI/UX Design',
            image: busCardImg,
            description: 'A modern dashboard layout for an online store with analytics and product management.',
            details: 'The Bus Card Payment App is a user-friendly mobile application designed to streamline public transportation payments.',
            productOverview: [
                'Pay bus fares by scanning a QR code',
                'View card balance instantly',
                'Track transaction history',
                'Recharge balance digitally'
            ],
            problemStatement: [
                'Long queues to buy tickets',
                'Need for exact cash',
                'No record of transactions',
                'Delays during peak hours',
                'Reduced travel efficiency and passenger satisfaction'
            ],
            proposedSolution: [
                'Pay bus fares by scanning a QR code',
                'View card balance instantly',
                'Track transaction history',
                'Recharge balance digitally'
            ],
            technologies: ['Figma', 'UI/UX Design', 'Mobile Design'],
            liveLink: busVideo,
            figmaLink: 'https://www.figma.com/design/n4GVrT20zlYm7i5swWnQBu/bus-payement?t=8afARXhr2HU5DwO2-1',
            isVideo: true
        },
        {
            title: 'Mobile Banking App',
            category: 'UI/UX Design',
            image: 'https://via.placeholder.com/600x400/1e293b/c084fc?text=UI/UX+Project+2',
            description: 'User-centered design for a fintech application focusing on accessibility and ease of use.',
            details: 'The Mobile Banking App brings secure and intuitive financial management to your fingertips. Key features include: account management, fund transfers, bill payments, investment tracking, and 24/7 customer support. Built with security and user experience at its core.',
            technologies: ['Figma', 'Prototyping', 'User Research'],
            liveLink: '#',
            githubLink: '#'
        }
    ]

    const frontendProjects = [
        {
            title: 'Travel Agency App',
            category: 'Frontend Development',
            image: 'https://via.placeholder.com/600x400/1e293b/38bdf8?text=Frontend+Project+1',
            description: 'Responsive travel booking website built with React and Framer Motion.',
            details: 'A comprehensive travel booking platform with an intuitive interface for searching flights, hotels, and vacation packages. Features include advanced filtering, real-time availability, secure payment processing, and personalized travel recommendations.',
            technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Node.js'],
            liveLink: '#',
            githubLink: '#'
        },
        {
            title: 'Finance Tracker',
            category: 'Frontend Development',
            image: 'https://via.placeholder.com/600x400/1e293b/4ade80?text=Frontend+Project+2',
            description: 'Personal finance management tool with data visualization and budget planning.',
            details: 'Track your spending, manage budgets, and achieve financial goals with this comprehensive finance tracker. Includes expense categorization, visual analytics, goal setting, recurring expense tracking, and detailed financial reports.',
            technologies: ['React', 'Chart.js', 'Context API', 'Local Storage'],
            liveLink: '#',
            githubLink: '#'
        }
    ]

    const ProjectCard = ({ project, onClick }) => (
        <div className="project-card" onClick={onClick} style={{ cursor: 'pointer' }}>
            <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="icon-btn" onClick={(e) => e.stopPropagation()}><FaExternalLinkAlt /></a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="icon-btn" onClick={(e) => e.stopPropagation()}><FaGithub /></a>
                </div>
            </div>
            <div className="project-info">
                <span className="category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    )

    const VideoPlayer = ({ videoSrc, onClose }) => (
        <div className="modal-overlay" onClick={onClose}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}><FaTimes /></button>
                <video width="100%" height="auto" controls autoPlay>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )

    const ProjectModal = ({ project, onClose }) => (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}><FaTimes /></button>
                <img src={project.image} alt={project.title} className="modal-image" />
                <div className="modal-body">
                    <h2>{project.title}</h2>
                    <span className="modal-category">{project.category}</span>
                    <p className="modal-details">{project.details}</p>

                    {project.productOverview && (
                        <div className="modal-section">
                            <h4 className="section-title">📱 Product Overview</h4>
                            <ul className="feature-list">
                                {project.productOverview.map((feature, index) => (
                                    <li key={index}><span className="check-mark">✓</span>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.problemStatement && (
                        <div className="modal-section">
                            <h4 className="section-title">⚠️ Problem Statement</h4>
                            <ul className="issue-list">
                                {project.problemStatement.map((problem, index) => (
                                    <li key={index}><span className="issue-mark">•</span>{problem}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.proposedSolution && (
                        <div className="modal-section">
                            <h4 className="section-title">💡 Proposed Solution</h4>
                            <ul className="solution-list">
                                {project.proposedSolution.map((solution, index) => (
                                    <li key={index}><span className="solution-mark">→</span>{solution}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    
                    <div className="modal-tech">
                        <h4>🛠️ Technologies Used:</h4>
                        <div className="tech-tags">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                    <div className="modal-links">
                        {project.isVideo ? (
                            <button onClick={() => setPlayingVideo(project.liveLink)} className="modal-btn live-btn"><FaExternalLinkAlt /> View Live</button>
                        ) : (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="modal-btn live-btn"><FaExternalLinkAlt /> View Live</a>
                        )}
                        {project.figmaLink ? (
                            <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="modal-btn figma-btn">🎨 Figma</a>
                        ) : (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="modal-btn github-btn"><FaGithub /> GitHub</a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <section className="section projects" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'ui/ux' ? 'active' : ''}`}
                        onClick={() => setActiveTab('ui/ux')}
                    >
                        UI/UX Projects
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'frontend' ? 'active' : ''}`}
                        onClick={() => setActiveTab('frontend')}
                    >
                        Frontend Projects
                    </button>
                </div>

                <div className="projects-grid">
                    {activeTab === 'ui/ux' && uiUxProjects.map((project, index) => (
                        <ProjectCard project={project} key={`ui-${index}`} onClick={() => setSelectedProject(project)} />
                    ))}

                    {activeTab === 'frontend' && frontendProjects.map((project, index) => (
                        <ProjectCard project={project} key={`fe-${index}`} onClick={() => setSelectedProject(project)} />
                    ))}
                </div>
            </div>

            {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
            {playingVideo && <VideoPlayer videoSrc={playingVideo} onClose={() => setPlayingVideo(null)} />}
        </section>
    )
}

export default Projects
