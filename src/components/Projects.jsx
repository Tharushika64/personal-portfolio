import { useState } from 'react'
import './Projects.css'
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa'
import busCardImg from '../assets/bus card.jpg'
import busVideo from '../assets/bus.mp4'
import cricketImg from '../assets/cricket.png'
import cricketVideo from '../assets/CriVedio.mp4'
import travelImg from '../assets/tarvel app.png'
import travelVideo from '../assets/travel.mp4'
import ecommerceImg from '../assets/e commerce.png'
import coffeeShopImg from '../assets/coffee shop.png'
import coffeeImg from '../assets/coffe (1).png'
import clothingImg from '../assets/clothing website.png'
import fashionVideo from '../assets/fashion.mp4'
import securityImg from '../assets/security.png'
import securityVideo from '../assets/security.mp4'
import auraluxeImg from '../assets/AuraLuxe.png'
import auraluxeVideo from '../assets/auraluxa - Trim.mp4'
import salonEaseImg from '../assets/saloneasa.png'
import salonEaseVideo from '../assets/saloneasa.mp4'
import eventImg from '../assets/EVENT.png'
import eventVideo from '../assets/eventmanagement.mp4'

const Projects = () => {
    const [activeTab, setActiveTab] = useState('ui/ux')
    const [selectedProject, setSelectedProject] = useState(null)
    const [playingVideo, setPlayingVideo] = useState(null)

    const uiUxProjects = [
        {
            title: 'Bus Card Payment App',
            category: 'UI/UX Design',
            image: busCardImg,
            description: 'A comprehensive mobile solution for seamless public transportation payments with real-time balance tracking and transaction history.',
            details: 'The Bus Card Payment App is a user-friendly mobile application designed to streamline public transportation payments. It provides an intuitive interface for managing bus fares, viewing card balances, and tracking transaction history. The design prioritizes quick access to payment features with a focus on accessibility and user experience. Created with a mobile-first approach to ensure smooth navigation and secure digital transactions for daily commuters.',
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
            isVideo: true,
            completed: true
        },
        {
            title: 'Cricket Website',
            category: 'UI/UX Design',
            image: cricketImg,
            description: 'A modern landing page designed for a cricket platform that provides match updates, live scores, team details, player statistics, and rankings.',
            details: 'A modern landing page designed for a cricket platform that provides match updates, live scores, team details, player statistics, and rankings. The design focuses on clear information hierarchy, easy navigation, and engaging visuals to help users quickly access upcoming, live, and completed match information. Created using a user-centered design approach to deliver a clean and intuitive browsing experience.',
            productOverview: [
                'Live score updates and match tracking',
                'Comprehensive team and player statistics',
                'Real-time player rankings and performance metrics',
                'Intuitive navigation for match information access',
                'Engaging visual design for better user experience',
                'Clean information hierarchy for quick browsing'
            ],
            technologies: ['Figma', 'UI/UX Design', 'Web Design'],
            liveLink: cricketVideo,
            figmaLink: 'https://www.figma.com/design/1n9sXo7l2mLh5j8vHqkKZP/Cricket-Website?t=8afARXhr2HU5DwO2-1',
            isVideo: true,
            isClient: true,
            completed: true
        },
        {
            title: 'Travel Mobile App',
            category: 'UI/UX Design',
            image: travelImg,
            description: 'A visually engaging travel app that simplifies destination discovery, detailed exploration, and hassle-free bookings with an intuitive user interface.',
            details: 'This travel mobile application is designed to help users discover popular travel destinations, explore place details, and make bookings easily through a visually engaging and user-friendly interface. The app focuses on providing a smooth browsing experience with clear navigation and attractive destination previews.',
            productOverview: [
                'Browse popular travel destinations',
                'Search for places easily',
                'View detailed information about each location',
                'Book trips with a simple and clear call-to-action',
                'Clean and minimal UI design',
                'Smooth user browsing experience'
            ],
            problemStatement: [
                'Many travel apps feel cluttered and overwhelming',
                'Difficult to quickly find destinations',
                'Unclear presentation of key details',
                'Missing location, duration, pricing, and ratings information',
                'Poor user experience affecting booking decisions'
            ],
            proposedSolution: [
                'Clean and minimal UI that reduces visual clutter',
                'Browse popular travel destinations easily',
                'Quick and efficient search functionality',
                'Detailed information display for each location',
                'Simple and clear call-to-action for bookings',
                'Improved user experience with intuitive navigation'
            ],
            technologies: ['Figma', 'Mobile Design', 'UI/UX Design'],
            liveLink: travelVideo,
            figmaLink: 'https://www.figma.com/design/zLhZwCHksA12fKPL7Y2tzl/TRAVEL?t=8afARXhr2HU5DwO2-1',
            isVideo: true,
            completed: true
        },
        {
            title: 'E-Commerce Coffee Shop',
            category: 'UI/UX Design',
            image: ecommerceImg,
            description: 'A strategically designed conversion-oriented coffee shop website with clear user journey from brand introduction to purchase, featuring social proof and visual engagement.',
            details: 'Conceptualized and structured the core content sections for a modern, conversion-oriented coffee shop website. The layout is designed to guide users from brand introduction through to social proof, following a strategic user journey. Features include a strong value proposition with Hero Statement, Social Proof & Process section highlighting authenticity through live coffee making, Navigation & Discovery pathways for menu exploration and product sales, Trust & Validation through customer testimonials, and dedicated Visual Engagement gallery space to showcase products and brand aesthetic.',
            productOverview: [
                'Strong Hero Statement with value proposition and promotional offer',
                'Social Proof & Process section with Live Coffee Making',
                'Clear Navigation & Discovery pathways for Menus and Products',
                'Customer Testimonials for Trust & Validation',
                'Dedicated Visual Gallery for products and ambiance',
                'Strategic user journey designed for conversions'
            ],
            problemStatement: [
                'Coffee shop websites often lack clear product presentation',
                'Difficult user journey from discovery to purchase',
                'Missing social proof and authenticity elements',
                'Poor visual representation of brand and products',
                'Unclear call-to-action pathways for sales'
            ],
            proposedSolution: [
                'Strategic content structure guiding users through brand to sales',
                'Hero statement with compelling value proposition',
                'Live coffee making section for authenticity and engagement',
                'Clear menu and product discovery sections',
                'Customer testimonials to build credibility',
                'Visual gallery showcasing products and brand aesthetic'
            ],
            technologies: ['Figma', 'Web Design', 'UI/UX Design'],
            liveLink: coffeeShopImg,
            figmaLink: 'https://www.figma.com/design/g7Wnl2qxrNfOEq3sO2xiSN/coffee-shop?node-id=0-1&t=ybefPWdQR8n9yXfe-1',
            completed: true
        },
        {
            title: 'Clothing Website',
            category: 'UI/UX Design',
            image: clothingImg,
            description: 'A modern, trendy fashion e-commerce platform with curated collections, easy browsing, and seamless shopping experience. (Design in Progress)',
            details: 'A contemporary fashion website designed to showcase clothing collections with a focus on visual appeal and user engagement. The platform features trend-focused product discovery, easy navigation through categories, and a smooth checkout experience. Built with a clean and modern aesthetic to highlight products while maintaining an intuitive shopping journey. ⚠️ Note: This design is currently incomplete and under development.',
            productOverview: [
                'Browse curated fashion collections',
                'Trend-focused product discovery',
                'Easy category navigation',
                'Quick product detail viewing',
                'Simple add-to-cart functionality',
                'Streamlined checkout process'
            ],
            problemStatement: [
                'Fashion websites often have overwhelming product layouts',
                'Difficult to find specific styles and trends',
                'Complex navigation and checkout process',
                'Poor product presentation and filtering',
                'Users abandon carts due to complicated UX'
            ],
            proposedSolution: [
                'Clean and organized product layout',
                'Curated collections for easy browsing',
                'Intuitive category and filter options',
                'Attractive product showcase design',
                'Simple and fast checkout process',
                'Trend-focused homepage for engagement'
            ],
            technologies: ['Figma', 'E-commerce Design', 'UI/UX Design'],
            liveLink: fashionVideo,
            figmaLink: 'https://www.figma.com/design/S2rGcmxMtecAy3jBqBfA6J/fashion-website?t=jHUM2mrJb2EiPsiE-1',
            isVideo: true,
            completed: false
        },
        {
            title: 'Security Home System',
            category: 'UI/UX Design',
            image: securityImg,
            description: 'A comprehensive smart home security system interface designed for intuitive monitoring, control, and real-time alerts with modern aesthetics.',
            details: 'A professional security home system UI designed to provide homeowners with complete control and monitoring of their security devices. The interface features real-time status monitoring, device management, alert notifications, and emergency controls. Built with a clean, modern design that prioritizes user safety and quick access to critical security functions. The system integrates multiple security cameras, sensors, and smart locks into one unified dashboard for comprehensive home protection.',
            productOverview: [
                'Real-time security device monitoring',
                'Multi-camera live feed display',
                'Smart sensor integration and status tracking',
                'Emergency alert notifications',
                'Device control and automation',
                'Security history and activity logs',
                'User-friendly dashboard interface'
            ],
            problemStatement: [
                'Security systems are often complex and difficult to navigate',
                'Multiple devices scattered across different apps',
                'Delayed notifications and alerts',
                'Poor visualization of home security status',
                'Slow emergency response mechanisms'
            ],
            proposedSolution: [
                'Unified dashboard for all security devices',
                'Real-time monitoring and instant notifications',
                'Quick access emergency controls',
                'Visual status indicators for all sensors and cameras',
                'Integrated automation and scheduling',
                'Activity history and analytics'
            ],
            technologies: ['Figma', 'IoT Design', 'UI/UX Design', 'Dashboard Design'],
            liveLink: securityVideo,
            figmaLink: 'https://www.figma.com/design/f02eJKN04b458GyBRswYYJ/security-system?node-id=301-807&t=A1FXAi6iNc5Ri9dk-1',
            isVideo: true,
            isClient: true,
            completed: true
        }
    ]

    const frontendProjects = [
        {
            title: 'Event Planning Management System',
            category: 'Fullstack',
            image: eventImg,
            description: 'A streamlined platform for planning and managing events, featuring scheduling, guest list management, and real-time updates.',
            details: 'The Event Planning Management System is a comprehensive tool designed to simplify the complexities of event coordination. Built with a focus on ease of use, it allows planners to manage every detail from guest lists and vendor coordination to real-time event updates and scheduling. The application provides a central hub for all stakeholders to collaborate and ensure the success of any event, whether large or small. (Note: Frontend is completed; Backend and Database are currently in development).',
            productOverview: [
                'Effortless event scheduling and planning',
                'Vendor and resource management',
                'Real-time updates and notification system',
                'Collaborative tools for event coordinators'
            ],
            technologies: ['React', 'HTML', 'CSS', 'JS', 'python', 'MongoDB'],
            liveLink: eventVideo,
            githubLink: 'https://github.com/Tharushika64/EventManagement',
            isVideo: true,
            completed: false
        },
        {
            title: 'SalonEase',
            category: 'Fullstack',
            image: salonEaseImg,
            description: 'A comprehensive salon appointment booking system offering seamless scheduling, service management, and user profiles.',
            details: 'SalonEase is a robust full-stack application designed to modernize the salon booking experience. It features an intuitive interface for clients to browse services, book appointments, and manage their profiles. For salon administrators, it offers comprehensive tools to manage appointments, services, and staff. The system is built to enhance operational efficiency and improve customer satisfaction.',
            productOverview: [
                'User-friendly appointment booking interface',
                'Comprehensive service catalog',
                'Secure user authentication and profiles',
                'Admin dashboard for calendar and service management',
                'Responsive design for mobile and desktop'
            ],
            technologies: ['HTML', 'CSS', 'JS', 'Php', 'MySQL'],
            liveLink: salonEaseVideo,
            githubLink: 'https://github.com/Tharushika64/SalonEase',
            isVideo: true,
            completed: true
        },
        {
            title: 'Security Home System',
            category: 'frontend',
            image: securityImg,
            description: 'A comprehensive smart home security system interface with real-time monitoring and control.',
            details: 'A professional security home system frontend built with React featuring real-time status monitoring, device management, alert notifications, and emergency controls. The application integrates multiple security cameras, sensors, and smart locks into one unified dashboard for comprehensive home protection.',
            productOverview: [
                'Real-time security device monitoring',
                'Multi-camera live feed display',
                'Smart sensor integration and status tracking',
                'Emergency alert notifications',
                'Device control and automation',
                'Security history and activity logs',
                'User-friendly dashboard interface'
            ],
            technologies: ['HTML', 'CSS', 'JS'],
            liveLink: securityVideo,
            githubLink: '#',
            isVideo: true,
            isClient: true,
            completed: false
        },
        {
            title: 'AuraLuxe',
            category: 'frontend',
            image: auraluxeImg,
            description: 'A premium clothing website featuring a modern design, built with Angular to provide a seamless fashion shopping experience.',
            details: 'AuraLuxe is a state-of-the-art fashion e-commerce platform that combines aesthetic excellence with robust functionality. Developed using Angular and TypeScript, it offers users a smooth and responsive interface for exploring the latest clothing trends. The project focuses on high-quality visuals, intuitive navigation, and a premium user experience tailored for modern fashion enthusiasts.',
            productOverview: [
                'Modern fashion e-commerce interface',
                'Seamless shopping experience',
                'Responsive design for all devices',
                'Curated clothing collections',
                'High-quality visual presentation',
                'Intuitive navigation and search'
            ],
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
            liveLink: auraluxeVideo,
            githubLink: 'https://github.com/Tharushika64/ANGULAR-PROJECT',
            isVideo: true,
            completed: true
        },

    ]

    const ProjectCard = ({ project, onClick }) => (
        <div className={`project-card ${project.completed ? 'completed' : 'in-progress'}`} onClick={onClick} style={{ cursor: 'pointer' }}>
            {project.isClient && <div className="client-badge">👤 Client Project</div>}
            <div className={`status-badge ${project.completed ? 'completed-badge' : 'in-progress-badge'}`}>
                {project.completed ? '✓ Completed' : '◐ In Progress'}
            </div>
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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', gap: '10px', flexWrap: 'wrap' }}>
                        <h2 style={{ margin: 0 }}>{project.title}</h2>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                            {project.isClient && <span style={{ backgroundColor: '#4f46e5', color: 'white', padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>👤 Client Project</span>}
                            <span style={{ backgroundColor: project.completed ? '#10b981' : '#f59e0b', color: 'white', padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                                {project.completed ? '✓ Completed' : '◐ In Progress'}
                            </span>
                        </div>
                    </div>
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
                        Fullstack Projects
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
