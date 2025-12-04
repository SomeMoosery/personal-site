import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-cream px-4 pt-16">
      {/* Main heading */}
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 font-heading text-red">
          Carter Klein
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto font-body text-red mb-8">
          Cooking up financial infra in Brooklyn, NY
        </p>

        {/* Navigation links */}
        <nav className="flex justify-center items-center space-x-8 mt-4">
          <Link to="/menu" className="text-xl font-bold font-heading text-green hover:text-red transition-colors uppercase">
            Menu
          </Link>
          <Link to="/reservations" className="text-xl font-bold font-heading text-green hover:text-red transition-colors uppercase">
            Reservations
          </Link>
          <Link to="/about" className="text-xl font-bold font-heading text-green hover:text-red transition-colors uppercase">
            About
          </Link>
          <Link to="/contact" className="text-xl font-bold font-heading text-green hover:text-red transition-colors uppercase">
            Contact
          </Link>
        </nav>
      </div>

      {/* Wavy Animated Marquee */}
      <div className="w-full overflow-hidden bg-cream text-green py-8 mb-12 relative border-y-2 border-green">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center mx-8">
              {['Fresh', 'ingredients', '〰', 'Bold', 'flavors', '〰', 'Unforgettable', 'moments', '〰'].map((word, idx) => (
                <span
                  key={`${i}-${idx}`}
                  className="text-3xl md:text-5xl font-heading font-bold mx-2"
                  style={{
                    display: 'inline-block',
                    animation: `wave 2s ease-in-out infinite`,
                    animationDelay: `${idx * 0.1}s`,
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative squiggles */}
      <div className="text-4xl text-red mb-8">
        〰〰〰〰〰〰〰〰〰〰〰〰
      </div>

      {/* CTA Button */}
      <Link
        to="/reservations"
        className="bg-red text-white px-8 py-4 text-lg font-heading hover:bg-green transition-all duration-300 transform hover:scale-105"
      >
        Reserve a Table
      </Link>

      {/* Rotating element */}
      <div className="mt-12 animate-spin-slow text-6xl text-green">
        ✦
      </div>
    </section>
  );
}
