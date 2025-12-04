export default function Menu() {
  const menuCategories = [
    {
      title: 'Starters',
      items: [
        { name: 'Crispy Brussels Sprouts', description: 'With honey glaze & toasted almonds', price: '$12' },
        { name: 'Burrata & Heirloom Tomatoes', description: 'Fresh basil, olive oil, balsamic reduction', price: '$16' },
        { name: 'Tuna Tartare', description: 'Avocado, crispy wontons, sesame-soy dressing', price: '$18' },
      ],
    },
    {
      title: 'Mains',
      items: [
        { name: 'Grilled Ribeye', description: '12oz ribeye, herb butter, seasonal vegetables', price: '$38' },
        { name: 'Pan-Seared Salmon', description: 'Lemon beurre blanc, asparagus, fingerling potatoes', price: '$32' },
        { name: 'Wild Mushroom Risotto', description: 'Truffle oil, parmesan, microgreens', price: '$26' },
      ],
    },
    {
      title: 'Desserts',
      items: [
        { name: 'Chocolate Lava Cake', description: 'Vanilla ice cream, raspberry coulis', price: '$12' },
        { name: 'Lemon Tart', description: 'Fresh berries, whipped cream', price: '$10' },
        { name: 'Affogato', description: 'Espresso, vanilla gelato, biscotti', price: '$9' },
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
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="border-b-2 border-red/30 pb-4 hover:border-red transition-colors">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-xl font-semibold font-heading text-green">{item.name}</h4>
                      <span className="text-xl font-heading font-bold text-red">{item.price}</span>
                    </div>
                    <p className="text-green/80 italic font-body">{item.description}</p>
                  </div>
                ))}
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
