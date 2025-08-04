import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Course Clash',
      description: 'A scalable, cloud-native web platform for teachers and students to engage with course-specific study materials in a gamified, competitive setting.',
      technologies: ['AWS (RDS, S3, ECS, SES)', 'PostgreSQL', 'React.js', 'JWT Authentication'],
      githubUrl: 'https://github.com/tcarsello/cs407-fall2024'
    },
    {
      title: 'ManageHelp Schedule Manager',
      description: 'A software platform tailored toward retail and resturant businesses for managing employee shift scheduling, task delegation, and communications.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      githubUrl: 'https://github.com/tcarsello/cs307-group24'
    },
    {
      title: 'Personal Website',
      description: 'A personal portfolio website to showcase projects and professional experience through a dynamic, user-friendly web interface.',
      technologies: ['React.js', 'AWS S3', 'CloudFront CDN'],
      githubUrl: 'https://github.com/tcarsello/personal-site'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <p className="projects-subtext">Here are some personal projects I've been working on.</p>
      <p className="projects-subtext">Click to vist each on GitHub.</p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-card-link"
          >
            <div className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
      <p className="projects-subtext">More coming soon!</p>
    </section>
  )
}

export default Projects