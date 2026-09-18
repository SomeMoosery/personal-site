import { useEffect, useState } from 'react';

// Open/close as minutes after midnight, New York time. null = closed all day.
// Indexed by Date#getDay(), so Sunday first.
const HOURS: { day: string; hours: [number, number] | null }[] = [
  { day: 'Sunday', hours: null },
  { day: 'Monday', hours: [5 * 60 + 30, 22 * 60] },
  { day: 'Tuesday', hours: [5 * 60 + 30, 22 * 60] },
  { day: 'Wednesday', hours: [5 * 60 + 30, 22 * 60] },
  { day: 'Thursday', hours: [5 * 60 + 30, 22 * 60] },
  { day: 'Friday', hours: [5 * 60 + 30, 22 * 60] },
  { day: 'Saturday', hours: [8 * 60, 14 * 60] },
];

// Monday-first for display, the way a restaurant door lists them
const DISPLAY_ORDER = [1, 2, 3, 4, 5, 6, 0];

const LOCATIONS = [
  { label: 'Current', place: 'Brooklyn, NY 11249' },
  { label: 'College', place: 'Madison, WI 53703' },
  { label: 'Past', place: 'Gladstone, NJ 07934' },
];

const EMAIL = 'carterklein13@gmail.com';

const CHECK_LINES = [
  { item: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { item: 'Call or text', value: '(908) 307-7151', href: 'tel:+19083077151' },
  { item: 'Instagram', value: '@kleinwinder', href: 'https://www.instagram.com/kleinwinder/' },
  { item: 'X', value: '@kleinwinder', href: 'https://x.com/kleinwinder' },
  { item: 'LinkedIn', value: 'carter-klein13', href: 'https://www.linkedin.com/in/carter-klein13/' },
];

function formatTime(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const suffix = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, '0')} ${suffix}`;
}

function nowInNewYork(date: Date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { day, minutes: Number(get('hour')) * 60 + Number(get('minute')) };
}

function status(date: Date) {
  const { day, minutes } = nowInNewYork(date);
  const today = HOURS[day].hours;
  if (today && minutes >= today[0] && minutes < today[1]) {
    return { open: true, today: day, text: `Open now · closes ${formatTime(today[1])}` };
  }
  if (today && minutes < today[0]) {
    return { open: false, today: day, text: `Closed · opens ${formatTime(today[0])}` };
  }
  for (let offset = 1; offset <= 7; offset++) {
    const next = (day + offset) % 7;
    const hours = HOURS[next].hours;
    if (hours) {
      const when = offset === 1 ? 'tomorrow' : HOURS[next].day;
      return { open: false, today: day, text: `Closed · opens ${when} ${formatTime(hours[0])}` };
    }
  }
  return { open: false, today: day, text: 'Closed' };
}

export default function Contact() {
  const [now, setNow] = useState(() => new Date());
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  const { open, today, text } = status(now);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard blocked: the mailto link beside it still works
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-cream text-green">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 font-heading text-green">Contact</h2>
          <div className="text-3xl text-red">〰〰〰</div>
        </div>

        {/* Live status, like the sign on the door */}
        <p className="flex items-center justify-center gap-3 mb-14 font-heading font-bold uppercase text-lg md:text-xl" aria-live="polite">
          <span className={`status-dot ${open ? 'is-open' : ''}`} aria-hidden="true" />
          <span className={open ? 'text-green' : 'text-red'}>{text}</span>
        </p>

        <div className="grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-12 md:gap-16 items-start">
          {/* The guest check: every way to reach me */}
          <div className="guest-check">
            <div className="guest-check-head">
              <span>Guest check</span>
              <span>No. 11249</span>
            </div>
            <dl className="guest-check-body">
              {CHECK_LINES.map((line) => (
                <div key={line.item} className="guest-check-line">
                  <dt>{line.item}</dt>
                  <dd>
                    <a
                      href={line.href}
                      {...(line.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {line.value}
                    </a>
                    {line.value === EMAIL && (
                      <button type="button" onClick={copyEmail} className="copy-button" aria-live="polite">
                        {copied ? 'Copied' : 'Copy'}
                      </button>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="guest-check-total">
              <span>Total</span>
              <span>On the house</span>
            </div>
            <p className="guest-check-foot">Thank you · please come again</p>
          </div>

          <div className="space-y-12">
            {/* Hours, one line per day, today marked */}
            <div>
              <h3 className="text-3xl font-bold font-heading text-green mb-4">Hours</h3>
              <ul className="hours-list">
                {DISPLAY_ORDER.map((d) => {
                  const { day, hours } = HOURS[d];
                  return (
                    <li key={day} className={d === today ? 'is-today' : ''}>
                      <span>{day}</span>
                      <span>{hours ? `${formatTime(hours[0])} – ${formatTime(hours[1])}` : 'Closed'}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Locations, restaurant-group style */}
            <div>
              <h3 className="text-3xl font-bold font-heading text-green mb-4">Locations</h3>
              <ul className="space-y-3">
                {LOCATIONS.map((loc) => (
                  <li key={loc.label} className="flex items-baseline justify-between gap-4 border-b-2 border-red/30 pb-2">
                    <span className="font-heading font-bold uppercase text-red text-sm">{loc.label}</span>
                    <span className="font-body text-lg text-right">{loc.place}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sign-off */}
        <div className="mt-20 text-center">
          <p className="font-heading font-bold uppercase text-4xl md:text-5xl text-red">Grazie ✦</p>
          <div className="text-3xl text-red mt-4">〰〰〰</div>
        </div>
      </div>
    </section>
  );
}
