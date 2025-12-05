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
                I've been interested in building financial infrastructure since reading Joe Nocera's book "A Piece of the Action"
                back in college. You grow up thinking that "finance" is just... the way it is. Some pseudo-governmental system that
                you can either buy into, or not. I didn't realize that the 401(k), personal investing, credit cards... are all just products. 
              </p>
              <p>
                At the same time, I (like any 2010s college guy) knew I could use Bitcoin to buy fake IDs for me and my friends.
                I spent what's now $100,000+ on fake IDs by paying in BTC and ETH. I also starting thinking, "if a 401(k) is just a product,"
                what's stopping crypto from eventually becoming as engrained is young peoples' minds so as to seem "automatic."
              </p>
              <p>
                I didn't realize fintech has been around since the 60s, and I wanted to explore it from as many angles as I could.
                I've spent time at a big bank <span className="text-red font-bold">(Capital One)</span>, as the first engineer at 
                consumer crypto startup <span className="text-red font-bold">cmorq (now OpenFi)</span>, and now leading a new vertical at 
                <span className="text-red font-bold"> Brigit</span> after scaling our flagship product through acquisition in 1/2025.
              </p>
              <p>
                I spend my professional time tinkering with crypto, specifically stablecoins, and looking for ways to blend it with the
                increasingly-autonomously economy we're barreling towards.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-heading text-red">Personal</h3>
              <p>
                I love to eat. I thought I loved to cook, which I do, but really... I love to eat. It's why I live in New York City, it's why my
                Beli profile has over 800 ratings. It's why I like to exercise... so I can eat more.
              </p>
              <p>
                I'm very lucky to have a wife, Abby, who loves to do the same. Our catalogue of meals we excel at
                runs deep - we've been been known to host "pot luck" dinners where we cook all the food and just ask
                people to bring wine and/or dessert. It's gonna be better that way, trust us.
              </p>
              <p>
                We're both ethnically New Jerseyan (half-Jewish, half-Italian), and our cooking mostly reflects that.
                Pesto, pomodoro pasta, Sunday sauce (no, not gravy), chicken cutlets (schnitzel, if you will), hummus.
                All homemade, from scratch. We have a system in the kitchen where we can churn out exceedingly delicious
                meals as if we're working on a line.
              </p>
              <p>
                Alright, enough about eating. I also try to do a bit of everything. I've been playing the piano since I was 6, I love to
                exercise (jury's still out on if that's just so I can eat more), I'm getting into golf (my childhood baseball skills don't translate).
                I'm really loving what I can create with AI because while I don't consider myself the most artistic, I do think I know what looks good.
                Now, I can build it... or at least get close.
              </p>
              <p>
                Oh, and once we get a dog, this site will become 99% dog pics, 1% resume.
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
