import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-info">
        <p>I'm actively seeking software engineering opportunities and am always interested in discussing new opportunities or project collaborations.</p>
        <div className="contact-links">
          <a href="mailto:tkcarsello@gmail.com" className="contact-link">tkcarsello@gmail.com</a>
          <a href="tel:+16304323996" className="contact-link">630.432.3996</a>
          <p className="location">Chicago, IL</p>
        </div>
      </div>
    </section>
  )
}

export default Contact