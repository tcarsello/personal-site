import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App