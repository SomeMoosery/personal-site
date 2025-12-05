import { Link } from 'react-router-dom';

export default function Menu() {
  const menuCategories = [
    {
      title: 'Starters (unpolished thoughts)',
      items: [
        { name: 'Thoughts on Agent Vaults', description: 'How I\'m thinking about wallets, bank accounts... "vaults" for AI agents', price: 'June 2025', link: '/blog/thoughts-on-agent-vaults' },
      ],
    },
    {
      title: 'Mains (ideas I stand by)',
      items: [
        { name: 'Solving context bloat', description: 'Agents need to be able to spend/earn/budget/borrow/lend with other agents, automatically', price: 'December 2025' },
      ],
    },
    {
      title: 'Desserts (food itineraries)',
      items: [
        { name: 'Enjoying the wait for Lucali\'s', description: 'Lucali\'s is an institution and rite of passage that I believe every New Yorker should do once. I only say that now because I\'ve done it - but I think you should too.', price: 'June 2025', link: 'https://substack.com/home/post/p-166198424', external: true },
        { name: 'A day trip up to Beacon', description: 'I grew up in New Jersey and somehow never really went up this way as a kid. The Hudson Valley is beautiful, and Beacon is a short train away with tons of cool stuff to do. A great summer day trip!', price: 'June 2025', link: 'https://substack.com/home/post/p-166768691', external: true },
        { name: 'A nostalgic Greenpoint morning', description: 'A mix of what\'s cool and what\'s not to give you a sense of home while reminding you why you live somewhere cool.', price: 'April 2025', link: 'https://substack.com/home/post/p-160675037', external: true },
      ],
    },
  ];

  return (
    <section id="menu" className="min-h-screen py-20 px-4 bg-cream">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 font-heading text-green">Menu</h2>
          <div className="text-3xl text-red">〰〰〰</div>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category, idx) => (
            <div key={idx} className="border-l-4 border-red pl-6">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-heading text-green">{category.title}</h3>
              <div className="space-y-6">
                {category.items.map((item, itemIdx) => {
                  const content = (
                    <>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-xl font-semibold font-heading text-green">{item.name}</h4>
                        <span className="text-xl font-heading font-bold text-red">{item.price}</span>
                      </div>
                      <p className="text-green/80 italic font-body">{item.description}</p>
                    </>
                  );

                  return 'link' in item && item.link ? (
                    'external' in item && item.external ? (
                      <a
                        key={itemIdx}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block border-b-2 border-red/30 pb-4 hover:border-red transition-colors cursor-pointer"
                      >
                        {content}
                      </a>
                    ) : (
                      <Link
                        key={itemIdx}
                        to={item.link}
                        className="block border-b-2 border-red/30 pb-4 hover:border-red transition-colors cursor-pointer"
                      >
                        {content}
                      </Link>
                    )
                  ) : (
                    <div key={itemIdx} className="border-b-2 border-red/30 pb-4 hover:border-red transition-colors">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Playful note */}
        <div className="mt-16 text-center">
          <p className="text-lg font-heading text-green">
            ✦ Menu changes seasonally ✦
          </p>
        </div>
      </div>
    </section>
  );
}
