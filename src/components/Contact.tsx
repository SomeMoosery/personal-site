export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 uppercase">Contact</h2>
          <div className="text-3xl text-electric-blue">〰〰〰</div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Location */}
          <div className="border-4 border-black p-8 hover:border-electric-blue transition-colors">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-2xl font-bold font-mono uppercase mb-4">Location</h3>
            <p className="text-lg">
              123 Culinary Street
              <br />
              Brooklyn, NY 11201
            </p>
          </div>

          {/* Hours */}
          <div className="border-4 border-black p-8 hover:border-vibrant-orange transition-colors">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-2xl font-bold font-mono uppercase mb-4">Hours</h3>
            <div className="space-y-2 text-lg">
              <p><span className="font-semibold">Tue - Thu:</span> 5:00 PM - 10:00 PM</p>
              <p><span className="font-semibold">Fri - Sat:</span> 5:00 PM - 11:00 PM</p>
              <p><span className="font-semibold">Sunday:</span> 4:00 PM - 9:00 PM</p>
              <p className="text-vibrant-orange font-bold">Closed Mondays</p>
            </div>
          </div>

          {/* Phone */}
          <div className="border-4 border-black p-8 hover:border-electric-blue transition-colors">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-2xl font-bold font-mono uppercase mb-4">Phone</h3>
            <a
              href="tel:+15551234567"
              className="text-lg hover:text-electric-blue transition-colors"
            >
              (555) 123-4567
            </a>
          </div>

          {/* Email */}
          <div className="border-4 border-black p-8 hover:border-vibrant-orange transition-colors">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-2xl font-bold font-mono uppercase mb-4">Email</h3>
            <a
              href="mailto:hello@restaurant.com"
              className="text-lg hover:text-vibrant-orange transition-colors"
            >
              hello@restaurant.com
            </a>
          </div>
        </div>

        {/* Social */}
        <div className="text-center">
          <h3 className="text-2xl font-bold font-mono uppercase mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-8 text-3xl">
            <a href="#" className="hover:text-electric-blue transition-colors">📷</a>
            <a href="#" className="hover:text-vibrant-orange transition-colors">🐦</a>
            <a href="#" className="hover:text-electric-blue transition-colors">📘</a>
          </div>
        </div>

        {/* Footer decoration */}
        <div className="mt-16 text-center">
          <div className="text-4xl text-vibrant-orange mb-4">〰〰〰</div>
          <p className="font-mono text-sm">© 2024 Restaurant. Made with ❤️ in Brooklyn.</p>
        </div>
      </div>
    </section>
  );
}
