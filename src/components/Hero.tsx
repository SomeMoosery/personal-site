import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-cream px-4 pt-16">
      {/* Main heading */}
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 font-heading text-navy">
          Your
          <br />
          <span className="text-accent-pink">Restaurant</span>
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto font-body text-navy">
          Sophisticated dining meets playful energy
        </p>
      </div>

      {/* Wavy Animated Marquee */}
      <div className="w-full overflow-hidden bg-cream text-navy py-8 mb-12 relative border-y-2 border-navy">
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
      <div className="text-4xl text-accent-gold mb-8">
        〰〰〰
      </div>

      {/* CTA Button */}
      <Link
        to="/reservations"
        className="bg-accent-pink text-cream px-8 py-4 text-lg font-heading hover:bg-accent-gold transition-all duration-300 transform hover:scale-105"
      >
        Reserve a Table
      </Link>

      {/* Rotating element */}
      <div className="mt-12 animate-spin-slow text-6xl text-navy">
        ✦
      </div>
    </section>
  );
}
