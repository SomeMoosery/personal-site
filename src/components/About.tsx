export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-cream text-green">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 font-heading text-green">About</h2>
          <div className="text-3xl text-red">〰〰〰</div>
        </div>

        {/* Story */}
        <div className="space-y-8 text-lg leading-relaxed font-body">
          <p className="text-2xl md:text-3xl font-light text-center mb-12 font-body">
            I might not be <span className="text-red font-bold">bright,</span> but I am{' '}
            <span className="text-red font-bold">sharp</span>
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-heading text-red">Professional</h3>
              <p>
                Founded in 2024, our restaurant brings together the best of modern culinary techniques
                with a vibrant, welcoming atmosphere. We believe dining should be an experience that
                delights all your senses.
              </p>
              <p>
                Our team of passionate chefs sources the finest seasonal ingredients, crafting dishes
                that are as beautiful as they are delicious.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-heading text-red">Personal</h3>
              <p>
                We believe in sustainable sourcing, creative expression, and genuine hospitality.
                Every dish tells a story, and every guest becomes part of our family.
              </p>
              <p>
                From farm to table, we work with local producers to ensure the freshest ingredients
                while supporting our community.
              </p>
            </div>
          </div>

          {/* Decorative element */}
          <div className="flex justify-center items-center space-x-8 py-12">
            <span className="text-4xl animate-spin-slow text-green">✦</span>
            <span className="text-2xl font-heading text-green">EST. 2024</span>
            <span className="text-4xl animate-spin-slow text-green">✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}
