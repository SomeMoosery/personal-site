export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-cream">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 font-heading text-green">Contact</h2>
          <div className="text-3xl text-red">〰〰〰</div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Location */}
          <div className="border-4 border-green p-8 hover:border-red transition-colors bg-cream">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-2xl font-bold font-heading text-green mb-4">Location</h3>
            <p className="text-lg font-body text-green">
              <strong>Current:</strong> Brooklyn, NY 11249
              <br/>
              <strong>College:</strong> Madison, WI 53703
              <br/>
              <strong>Past:</strong> Gladstone, NJ 07934
            </p>
          </div>

          {/* Hours */}
          <div className="border-4 border-green p-8 hover:border-red transition-colors bg-cream">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-2xl font-bold font-display uppercase mb-4">Hours</h3>
            <div className="space-y-2 text-lg">
              <p><span className="font-semibold">Mon - Fri:</span> 5:30 AM - 10:00 PM</p>
              <p><span className="font-semibold">Saturday:</span> 8:00 AM - 2:00 PM</p>
              <p className="text-red font-bold">Closed Sundays</p>
            </div>
          </div>

          {/* Phone */}
          <div className="border-4 border-green p-8 hover:border-red transition-colors bg-cream">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-2xl font-bold font-display uppercase mb-4">Phone</h3>
            <a
              href="tel:+19083077151"
              className="text-lg hover:text-red transition-colors"
            >
              (555) 123-4567
            </a>
          </div>

          {/* Email */}
          <div className="border-4 border-green p-8 hover:border-red transition-colors bg-cream">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-2xl font-bold font-display uppercase mb-4">Email</h3>
            <a
              href="mailto:carterklein13@gmail.com"
              className="text-lg hover:text-red transition-colors"
            >
              carterklein13@gmail.com
            </a>
          </div>
        </div>

        {/* Social */}
        <div className="text-center">
          <div className="flex justify-center space-x-8 text-3xl">
            <a href="https://www.instagram.com/kleinwinder/" className="hover:text-red transition-colors">📷</a>
            <a href="https://x.com/kleinwinder" className="hover:text-red transition-colors">🐦</a>
            <a href="https://www.linkedin.com/in/carter-klein13/" className="hover:text-red transition-colors">📘</a>
          </div>
        </div>

        {/* Footer decoration */}
        <div className="mt-16 text-center">
          <div className="text-4xl text-red mb-4">〰〰〰</div>
        </div>
      </div>
    </section>
  );
}
