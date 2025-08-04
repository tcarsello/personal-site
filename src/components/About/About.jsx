import './About.css'

const About = () => {
  const skills = {
    'Languages': 'Java, Python, JavaScript, C#, C++, C, SQL',
    'Frameworks & Tools': 'Spring Boot, React.js, Node.js, Express.js, MongoDB, Git, Docker',
    'Cloud & Databases': 'AWS (S3, RDS, ECS, CloudFront), PostgreSQL, MongoDB',
    'Expertise': 'Object-Oriented Design, Database Normalization, Cloud-Native Design, Data Structures & Algorithms'
  }

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a Software Developer at Crowe with a strong foundation in computer science from Purdue University. 
            I love to explore new technologies and build projects from the ground up, solving real-world problems.
          </p>
          <p>
            With experience in full-stack development, cloud computing, and data analytics, I strive every day to
            build practical technical solutions that suit specific business needs. 
          </p>
        </div>
        <div className="education-skills">
          <div className="education">
            <h3>Education</h3>
            <h4>Purdue University</h4>
            <p>B.S. Computer Science</p>
            <p>Minors: Math, Business Management</p>
            <p>GPA: 3.9 / 4.0</p>
          </div>
          <div className="skills">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-category">
                  <h4>{category}</h4>
                  <p>{items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About