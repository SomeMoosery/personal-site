import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import ReservationsPage from './pages/ReservationsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import AgentsAsPeople from './components/posts/AgentsAsPeople'
import DjProvider from './components/DjProvider'
import Decks from './components/Decks'
import PageTransitionProvider from './components/PageTransitionProvider'

function AppContent() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  // Each page starts at the top instead of inheriting the last page's scroll
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-cream">
      {!isHomePage && <Navigation />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog/thoughts-on-agent-vaults" element={<AgentsAsPeople />} />
      </Routes>
      <Decks />
    </div>
  )
}

function App() {
  return (
    <Router>
      <PageTransitionProvider>
        <DjProvider>
          <AppContent />
        </DjProvider>
      </PageTransitionProvider>
    </Router>
  )
}

export default App
