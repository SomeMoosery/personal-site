import { DECKS_H, DECKS_W, useDj } from '../context/dj';
import { usePageTransition } from '../context/pageTransition';
import PhotoScatter from './PhotoScatter';
import InkTrail from './InkTrail';
import TransitionLink from './TransitionLink';

const NAV_LINKS = [
  { name: 'Menu', path: '/menu' },
  // { name: 'Reservations', path: '/reservations' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Hero() {
  const { setSlot } = useDj();
  const { leaving } = usePageTransition();

  const exit = leaving ? 'hero-out' : '';

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-cream px-4 pt-16 pb-12 relative overflow-clip">
      <InkTrail />

      {/* Main heading */}
      <div className={`text-center mb-12 relative z-20 ${exit}`}>
        <h1 className="wordmark text-6xl md:text-8xl font-bold mb-6 font-heading text-red">
          Carter Klein
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto font-body text-red mb-8">
          Cooking up financial infrastructure <span className="text-sm font-bold font-heading text-red mt-2 inline-flex items-center justify-center px-2 py-1 border-2 border-red ml-3" style={{ borderRadius: '50% 45% 50% 45%', transform: 'rotate(-2deg)' }}>Brooklyn</span>
        </p>

        {/* Navigation links */}
        <nav className="flex justify-center items-center space-x-8 mt-4">
          {NAV_LINKS.map((link) => (
            <TransitionLink
              key={link.path}
              to={link.path}
              className="text-xl font-bold font-heading text-green hover:text-red transition-colors uppercase"
            >
              {link.name}
            </TransitionLink>
          ))}
        </nav>
      </div>

      <PhotoScatter leaving={leaving} />

      {/* Decorative squiggles */}
      <div className={`text-4xl text-red mb-8 relative z-20 ${exit}`}>
        <span className="hidden md:inline">〰〰〰〰〰〰</span>
        <span>〰〰〰〰〰〰</span>
      </div>

      {/* CTA Button */}
      {/* <Link
        to="/reservations"
        className="bg-red text-white px-8 py-4 text-lg font-heading hover:bg-green transition-all duration-300 transform hover:scale-105"
      >
        Book some time
      </Link> */}

      {/* The decks float over this slot (see Decks.tsx), flanked by stars on desktop */}
      <div className="relative z-20 flex items-center justify-center gap-10">
        <div className={`hidden md:block ${exit}`}>
          <div className="animate-spin-slow text-6xl text-green">✦</div>
        </div>
        <div ref={setSlot} style={{ width: DECKS_W, height: DECKS_H }} aria-hidden="true" />
        <div className={`hidden md:block ${exit}`}>
          <div className="animate-spin-slow text-6xl text-green">✦</div>
        </div>
      </div>

      {/* Mobile: one star under the decks */}
      <div className={`md:hidden mt-6 relative z-20 ${exit}`}>
        <div className="animate-spin-slow text-6xl text-green">✦</div>
      </div>
    </section>
  );
}
