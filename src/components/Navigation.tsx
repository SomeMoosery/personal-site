import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold font-mono uppercase tracking-tight hover:text-electric-blue transition-colors"
          >
            Restaurant
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Menu', 'Reservations', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-mono uppercase tracking-wider hover:text-vibrant-orange transition-colors font-semibold"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {['Menu', 'Reservations', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-sm font-mono uppercase tracking-wider hover:text-vibrant-orange transition-colors font-semibold"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
