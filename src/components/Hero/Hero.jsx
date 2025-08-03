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
          <p className="hero-title">Software Developer</p>
          <p className="hero-tagline">Building scalable cloud solutions and seeking new software engineering opportunities</p>
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