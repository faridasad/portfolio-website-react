import './app.scss'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
