import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-photo">
          <img src="/profile-photo.png" alt="Thomas Carsello" />
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