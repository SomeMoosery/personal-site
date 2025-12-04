import { useState } from 'react';

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    alert('Reservation request submitted! We\'ll contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="reservations" className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 uppercase">Reservations</h2>
          <div className="text-3xl text-vibrant-orange mb-4">〰〰〰</div>
          <p className="text-lg">Book your table for an unforgettable experience</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 border-4 border-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-mono uppercase mb-2 font-semibold">
                Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-electric-blue transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-mono uppercase mb-2 font-semibold">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-electric-blue transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-mono uppercase mb-2 font-semibold">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-electric-blue transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-sm font-mono uppercase mb-2 font-semibold">
                Guests *
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-electric-blue transition-colors"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-mono uppercase mb-2 font-semibold">
                Date *
              </label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-electric-blue transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-mono uppercase mb-2 font-semibold">
                Time *
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-electric-blue transition-colors"
              >
                <option value="">Select time</option>
                <option value="17:00">5:00 PM</option>
                <option value="17:30">5:30 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="18:30">6:30 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="20:30">8:30 PM</option>
                <option value="21:00">9:00 PM</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-electric-blue text-white py-4 font-mono uppercase tracking-wider hover:bg-vibrant-orange transition-all duration-300 transform hover:scale-105 text-lg font-bold"
          >
            Request Reservation
          </button>
        </form>

        {/* Additional info */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p className="font-mono">For parties of 9 or more, please call us at (555) 123-4567</p>
        </div>
      </div>
    </section>
  );
}
