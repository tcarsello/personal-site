import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      company: 'Crowe LLP',
      location: 'Chicago, IL',
      title: 'Software Developer',
      dates: 'January 2025 – Present',
      bullets: [
        'Designed and implemented technical solutions using object-oriented principles and normalized relational databases to fulfill functional and technical requirements, thereby enhancing client business workflows',
        'Architected business process and data analytics features within ERP systems for public sector clients including airports, rail authorities, seaports, and local governments',
        'Engaged in cross-functional collaboration with team members and client representatives to translate specific business needs into functional and technical requirements',
        'Leveraged Agile methodologies and Azure DevOps to manage cloud-based CI/CD pipelines and coordinate feature development, testing, and deployment across several client projects'
      ]
    },
    {
      company: 'Crowe LLP',
      location: 'Chicago, IL',
      title: 'Software Development Intern',
      dates: 'May 2023 – December 2024',
      bullets: [
        'Completed two consecutive internships and selected to return full-time based on strong technical and client-facing performance',
        'Invited to extend the internship experience and continue working with team members throughout two academic years, gaining additional technical experience and providing additional value to client engagements',
        'Led onboarding and mentorship efforts for incoming software development interns during second summer'
      ]
    },
    {
      company: 'Purdue University',
      location: 'West Lafayette, IN',
      title: 'Undergraduate Teaching Assistant',
      dates: 'August 2023 – December 2024',
      bullets: [
        'Selected by an Associate Professor of Practice of Computer Science to serve as a teaching assistant for Systems Programming, a core Computer Science required course of over 200 students',
        'Attended multiple weekly lab sessions, hosted office hours, and monitored the course\'s online forum to clarify concepts related to systems programming, provide constructive feedback on students\' code, and answer administrative questions',
        'Collaborated closely with professors, graduate TAs, and students to communicate technical concepts in Systems Programming such as memory management, process synchronization, and multi-threading'
      ]
    },
    {
      company: 'Prime Communications LP',
      location: 'Houston, TX (remote)',
      title: 'Business Systems Automation Intern',
      dates: 'May 2022 – August 2022',
      bullets: [
        'Developed Python-based automation solutions using frameworks such as Pandas, NumPy, and Selenium to streamline the aggregation and analysis of retail sales data across 2,000+ store locations in North America',
        'Designed and implemented automated data processing tools reducing manual intervention and minimizing errors in sales reporting for key stakeholders of Prime Communications – AT&T\'s largest authorized retailer',
        'Conducted ad-hoc data analyses to support operational decision-making, presenting insights to the VP of Business Systems'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2>Professional Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3 className="company-name">{exp.company}</h3>
              <span className="company-location">{exp.location}</span>
            </div>
            <h4 className="position-title">{exp.title}</h4>
            <p className="dates">{exp.dates}</p>
            <ul>
              {exp.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience