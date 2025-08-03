import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Course Clash',
      description: 'A scalable, cloud-native web platform for teachers and students to engage with course-specific study materials in a gamified, competitive setting.',
      technologies: ['AWS (RDS, S3, ECS, SES)', 'PostgreSQL', 'React.js', 'JWT Authentication']
    },
    {
      title: 'Schedule Manager',
      description: 'Led a four-member scrum team to design a product for fast food and retail businesses to manage employee shift scheduling, task delegation, and communications.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js']
    },
    {
      title: 'Personal Website',
      description: 'Developed a portfolio website to showcase personal projects and professional experience through a dynamic, user-friendly web interface.',
      technologies: ['React.js', 'AWS S3', 'CloudFront CDN']
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects