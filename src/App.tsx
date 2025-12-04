import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Reservations from './components/Reservations'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Menu />
      <Reservations />
      <About />
      <Contact />
    </div>
  )
}

export default App
