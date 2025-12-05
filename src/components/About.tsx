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
            Not an <span className="text-red font-bold">Olympiad,</span> not a{' '}
            <span className="text-red font-bold">schmuck.</span>
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-heading text-red">Professional</h3>
              <p>
                When I was 18, I thought that "finance" - 401(k)s, credit cards, ETFs, payment networks - was some longstanding,
                pseudo-governmental infrastructure akin to telecoms or utilities. I was drawn to study this infra because,
                unlike telecoms or utilties, you didn't just "sign up." You could optimize it and leverage it so that, frankly,
                you could get an edge over others.
              </p>
              <p>
                Two actions made me realize that I could actually reshape finance, not just participate in it: Reading Joe Nocera's <span className="text-red font-bold">"A Piece of the Action,"</span>
                and <span className="text-red font-bold">buying fake IDs with Bitcoin</span>. A lot of the tech powering banks and fintechs was a remnant of the stuff that powered
                Diners Club, while parallel infrastructure was being built that, if adopted, would pull
                "finance" into the digital age, not retrofit it to paper-based systems.
              </p>
              <p>
                Fintech is a larger, longer story than I realized, and I wanted to explore it from as many angles as I could.
                I've spent time at a big bank <span className="text-red font-bold">(Capital One)</span>, as the first engineer at 
                consumer crypto startup <span className="text-red font-bold">cmorq (now OpenFi)</span>, and now leading a new vertical at 
                <span className="text-red font-bold"> Brigit</span> after scaling our flagship product through acquisition in 1/2025.
              </p>
              <p>
                We're now at an inflection point where all that I've learned about fintech, at companies with dramatically
                different makeups, is converging. It's obvious in hindsight that stablecoins were crypto's killer product, and that they
                created the perfect surface for agents to transact over. We have the building blocks to rebuild finance, and I'm on mission to
                shape what someone in 2040 will think always existed.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-heading text-red">Personal</h3>
              <p>
                I love to eat. I also love to cook, but really... I cook because I love to eat. It's why I live in New York City, it's why my
                Beli profile has over 800 rankings.
              </p>
              <p>
                I'm very lucky to have a wife, Abby, who loves to do the same. Our catalogue of meals we excel at
                runs deep - we've been been known to host pot lucks where we cook all the food and just ask
                people to bring wine and/or dessert. It's gonna be better that way, trust us.
              </p>
              <p>
                We're both ethnically New Jerseyan (half-Jewish, half-Italian), and our cooking mostly reflects that.
                Pesto, pomodoro pasta, Sunday sauce (no, not gravy), chicken cutlets (schnitzel, if you will), hummus.
                All homemade, from scratch. We have a system in the kitchen where we can churn out exceedingly delicious
                meals as if we're working on a line.
              </p>
              <p>
                If I'm not eating, you can find me playing the piano, meticulously building a travel itinerary,
                lifting heavy weights, talking with my wife about which dog we want to get when we move out of our tiny
                1-bedroom apartment, and more recently... golfing (my childhood baseball-playing didn't translate).
                I'm also really loving what I can do with AI - I'm not artistic, but I do think I know what looks good,
                and now I can at least get closer to building it!
              </p>
            </div>
          </div>

          {/* Decorative element */}
          <div className="flex justify-center items-center space-x-8 py-12">
            <span className="text-4xl animate-spin-slow text-green">✦</span>
            <span className="text-2xl font-heading text-green">EST. 1996</span>
            <span className="text-4xl animate-spin-slow text-green">✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}
