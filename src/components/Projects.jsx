import { useState } from 'react'
import './Projects.css'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = () => {
    const [activeTab, setActiveTab] = useState('ui/ux')

    const uiUxProjects = [
        {
            title: 'E-Commerce Dashboard',
            category: 'UI/UX Design',
            image: 'https://via.placeholder.com/600x400/1e293b/818cf8?text=UI/UX+Project+1',
            description: 'A modern dashboard layout for an online store with analytics and product management.'
        },
        {
            title: 'Mobile Banking App',
            category: 'UI/UX Design',
            image: 'https://via.placeholder.com/600x400/1e293b/c084fc?text=UI/UX+Project+2',
            description: 'User-centered design for a fintech application focusing on accessibility and ease of use.'
        }
    ]

    const frontendProjects = [
        {
            title: 'Travel Agency App',
            category: 'Frontend Development',
            image: 'https://via.placeholder.com/600x400/1e293b/38bdf8?text=Frontend+Project+1',
            description: 'Responsive travel booking website built with React and Framer Motion.'
        },
        {
            title: 'Finance Tracker',
            category: 'Frontend Development',
            image: 'https://via.placeholder.com/600x400/1e293b/4ade80?text=Frontend+Project+2',
            description: 'Personal finance management tool with data visualization and budget planning.'
        }
    ]

    const ProjectCard = ({ project }) => (
        <div className="project-card">
            <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                    <a href="#" className="icon-btn"><FaExternalLinkAlt /></a>
                    <a href="#" className="icon-btn"><FaGithub /></a>
                </div>
            </div>
            <div className="project-info">
                <span className="category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
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
                        <ProjectCard project={project} key={`ui-${index}`} />
                    ))}

                    {activeTab === 'frontend' && frontendProjects.map((project, index) => (
                        <ProjectCard project={project} key={`fe-${index}`} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
