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
      <div className="w-full overflow-hidden bg-cream text-green py-4 mb-6 relative">
        <svg
          className="w-full"
          viewBox="0 0 2000 180"
          preserveAspectRatio="xMidYMid slice"
          style={{ height: '110px' }}
        >
          <defs>
            <path
              id="wave-marquee-path"
              d="M 0,90 Q 125,50 250,90 T 500,90 T 750,90 T 1000,90 T 1250,90 T 1500,90 T 1750,90 T 2000,90 T 2250,90 T 2500,90 T 2750,90 T 3000,90 T 3250,90 T 3500,90 T 3750,90 T 4000,90"
              fill="none"
            />
          </defs>
          <text
            fill="currentColor"
            className="text-green"
            style={{
              fontSize: '52px',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontFamily: '"obviously-narrow", Arial Narrow, Arial, sans-serif'
            }}
          >
            <textPath href="#wave-marquee-path" startOffset="0" method="stretch" spacing="exact">
              Fresh ingredients 〰 Bold flavors 〰 Unforgettable moments 〰 Fresh ingredients 〰 Bold flavors 〰 Unforgettable moments 〰 Fresh ingredients 〰 Bold flavors 〰 Unforgettable moments 〰 Fresh ingredients 〰 Bold flavors 〰 Unforgettable moments 〰
              <animate
                attributeName="startOffset"
                from="0"
                to="-2000"
                dur="20s"
                repeatCount="indefinite"
              />
            </textPath>
          </text>
        </svg>
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
