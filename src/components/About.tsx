export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 uppercase">About</h2>
          <div className="text-3xl text-vibrant-orange">〰〰〰</div>
        </div>

        {/* Story */}
        <div className="space-y-8 text-lg leading-relaxed">
          <p className="text-2xl md:text-3xl font-light text-center mb-12">
            Where <span className="text-electric-blue font-bold">culinary craft</span> meets{' '}
            <span className="text-vibrant-orange font-bold">playful spirit</span>
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-mono uppercase text-vibrant-orange">Our Story</h3>
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
              <h3 className="text-2xl font-bold font-mono uppercase text-electric-blue">Our Philosophy</h3>
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
            <span className="text-4xl animate-spin-slow">✦</span>
            <span className="text-2xl font-mono">EST. 2024</span>
            <span className="text-4xl animate-spin-slow">✦</span>
          </div>

          {/* Team callout */}
          <div className="bg-white text-black p-8 border-4 border-vibrant-orange">
            <h3 className="text-2xl font-bold font-mono uppercase mb-4 text-center">Meet The Team</h3>
            <p className="text-center">
              Our talented chefs, sommeliers, and staff are dedicated to making every visit memorable.
              Come say hello!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
