import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Thomas Carsello. All rights reserved.</p>
    </footer>
  )
}

export default Footer