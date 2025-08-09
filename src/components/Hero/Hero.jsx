import './Hero.css'
import linkedinIcon from './icons/linkedin.svg'
import githubIcon from './icons/github.svg'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-photo">
            <img src="/profile-photo.png" alt="Thomas Carsello" />
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/tom-carsello-63015b21b/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" width="24" height="24" />
            </a>
            <a href="https://github.com/tcarsello" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <img src={githubIcon} alt="GitHub" width="24" height="24" />
            </a>
          </div>
        </div>
        <div className="hero-text">
          <h2>Thomas Carsello</h2>
          <p className="hero-title">Software Developer @ Crowe | Chicago, IL</p>
          <p className="hero-tagline">Engineering cloud technologies, and seeking software opportunities</p>
        </div>
      </div>
      <div className="hero-cta">
        <a href="/Carsello Resume.pdf" className="download-resume-btn" download>
          Download Resume (PDF)
        </a>
      </div>
    </section>
  )
}

export default Hero