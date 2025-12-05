import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

export default function Hero() {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    const element = lottieRef.current;
    if (!element) return;

    const handleClick = () => {
      const dotLottie = element.dotLottie;
      if (dotLottie) {
        if (dotLottie.isPlaying) {
          dotLottie.stop();
        } else {
          dotLottie.play();
        }
      }
    };

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-cream px-4 pt-16 relative">
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
        <span className="hidden md:inline">〰〰〰〰〰〰</span>
        <span>〰〰〰〰〰〰</span>
      </div>

      {/* CTA Button */}
      <Link
        to="/reservations"
        className="bg-red text-white px-8 py-4 text-lg font-heading hover:bg-green transition-all duration-300 transform hover:scale-105"
      >
        Book some time
      </Link>

      {/* Rotating element */}
      <div className="mt-12 animate-spin-slow text-6xl text-green">
        ✦
      </div>

      {/* Lottie Animation - Mobile: below rotating element, Desktop: bottom right */}
      <div className="mt-8 md:mt-0 md:absolute md:bottom-8 md:right-8 flex flex-col items-center">
        <div className="cursor-pointer overflow-hidden" style={{ height: '250px', marginBottom: '-50px' }}>
          {/* @ts-ignore - web component */}
          <dotlottie-wc
            ref={lottieRef}
            src="https://lottie.host/dd10aa3e-1c62-43de-b554-80ef77c2de40/yCbNKVsaDn.lottie"
            style={{ width: '300px', height: '300px' }}
            loop
          />
        </div>
        <p className="text-lg font-bold font-heading text-green mt-2">
          Let's hear it
        </p>
      </div>
    </section>
  );
}
