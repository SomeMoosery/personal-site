export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-white px-4 pt-16">
      {/* Main heading */}
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 uppercase tracking-tight">
          Your
          <br />
          <span className="text-electric-blue">Restaurant</span>
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
          Sophisticated dining meets playful energy
        </p>
      </div>

      {/* Animated Marquee */}
      <div className="w-full overflow-hidden bg-black text-white py-4 mb-12 relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center mx-8">
              <span className="text-2xl md:text-4xl font-mono">
                Fresh ingredients 〰 Bold flavors 〰 Unforgettable moments 〰
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative squiggles */}
      <div className="text-4xl text-vibrant-orange mb-8">
        〰〰〰
      </div>

      {/* CTA Button */}
      <button
        onClick={() => document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-vibrant-orange text-white px-8 py-4 text-lg font-mono uppercase tracking-wider hover:bg-electric-blue transition-all duration-300 transform hover:scale-105"
      >
        Reserve a Table
      </button>

      {/* Rotating element */}
      <div className="mt-12 animate-spin-slow text-6xl">
        ✦
      </div>
    </section>
  );
}
