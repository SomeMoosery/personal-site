import TransitionLink from '../TransitionLink';

export default function AgentsAsPeople() {
  return (
    <section className="min-h-screen py-20 px-4 bg-cream">
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <TransitionLink
          to="/menu"
          className="inline-block mb-8 text-green hover:text-red transition-colors font-heading"
        >
          ← Back to Menu
        </TransitionLink>

        {/* Article Header */}
        <article className="bg-cream">
          <header className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading text-red">
              Thoughts on Agent Vaults
            </h1>
            <div className="flex items-center gap-4 text-green/70 font-body">
              <time dateTime="2024-12-05">June 2025</time>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-green font-body leading-relaxed">
              <h2 className="text-2xl font-bold font-heading text-green mt-8 mb-4">
                Questions
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>What does a general "tech" company (e.g., "better back office for dentists") look like when it's built on the SaaS stack vs the AI stack, and does the AI stack create a better business?</li>
                <li>Is there a benefit of AI agents having their own "wallets" (actual crypto wallets, bank accounts) etc that they can operate independently (or semi-independently) of the deployer, with the agent being physically unable to act maliciously?</li>
                <li>What does the world of software development look like when you're building for the AI stack and not the SaaS stack? </li>
              </ul>

              <h2 className="text-2xl font-bold font-heading text-green mt-8 mb-4">
                Background
              </h2>

              <p>
                Most of my career so far has been spent figuring out how to retrofit modern fintech solutions onto inherently outdated pieces of technology.
              </p>

              <p>
                Instant payments, microtransactions, and payment streaming doesn't work for people or businesses run by people. The periodicity of payments is a feature, not a bug. People and businesses need to be able to budget, borrow, and spend in daily, weekly, monthly, quarterly, or yearly intervals.
              </p>

              <p>
                However, an agentic financial stack removes the need for this periodicity. The collection of agents autonomously running the finances of a business can continuously balance books instantly. These agents can spit out point-in-time snapshots and periodic projections to retrofit to the processes still used by individuals and businesses deploying these agents, similar to how much of American fintech is ultimately retrofitted to ACH rails and beholden to the processing speed of the federally-chartered bank they partner with.
              </p>

              <h2 className="text-2xl font-bold font-heading text-green mt-8 mb-4">
                Motivation
              </h2>

              <p>
              I'm a software engineer who started off his career well within (and possibly near the end) of the “SaaS model” of developing software. Teams of engineers work with product managers and designers to encode business logic, maintain APIs, reconcile fragmented data models, and build UIs for their customers to operate workflows. This process powers basically every software company that exists today, from “the back-office for dentists” to “checking accounts for senior citizens” to “programmatic SMS.”
              </p>

              <p>
              There's 2 major shifts I see happening that I think will rewire how software companies are structured. Due to the introduction of AI agents that are increasingly complex, long-lived, and trusted:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Products will become increasingly agentic; nondeterministic workflows aimed at contextualizing a user's needs and doing things autonomously, only asking the user for permission when needed. This is very different from the deterministic, A/B test-driven world we have today.</li>
                <li>Workflows triggered by customers can increasingly be handled by AI agents (e.g., requests for refunds, claims, procurement, etc).</li>
                <li>The customers of these workflows will increasingly become AI agents, not humans (agents purchasing goods and services, negotiating terms, asking for refunds, etc).</li>
              </ol>

              <p>
              The first two bullets shift what companies focus on building. Instead of feature teams building features required due to humans needing to run a process, they build agents to manage those workflows in the background and focus on only showing their customers the data they need to understand or next steps that require a human in the loop. The old split of Backend / Frontend is quickly being replaced by AI / Product as feature development becomes smaller in scope and more easily iterated on.
              </p>

              <p>
              The third bullet shifts what companies ship as products. Instead of shipping dashboards or APIs, companies will increasingly ship control planes or toolsets for other agents to ingest, make decisions off of, and pay for programmatically.
              </p>

              <p>
              A semi-hot take: AI agents will become the next legal entity with personhood, after corporations became people in 1886. Companies are already hiring AI agents on a contract basis and paying their creators a retainer. Agents are hiring other agents to complete complex workflows. Just as “SaaS stack” companies shrunk the number of people required to do a company by 100x, the “AI stack” is poised to do the same.
              </p>

              <p>
              In a world where most business workflows are operated by agents, and workflows increasingly involve more than one agent, it's imperative that each agent has its own “vault” (a crypto wallet or bank account / FBO account) with a tightly-scoped rule set and budget. Most importantly, it's critical that the agent can't unilaterally move funds. It's not enough for the agent to hold API keys and assume it will always check its ruleset before initiating a payment. In a world where multi-billion dollar companies are deploying agents while they're “80% correct,” operating largely “on vibes,” and then hill-climbing, it's dangerous to assume the agent in a way you don't expect and move funds in a way you don't want, if it's able to. It's critical that authority to spend must be distributed to another party outside the agent's physical infrastructure.
              </p>

              <p>
              As agents become more trusted, they'll need to run increasingly complex treasury management tasks such as budgeting, lending, borrowing, and spending in order to reach a goal. Without the agent's ability to freely operate a wallet within the bounds set by its deployer, it becomes impossible to, for example, underwrite that agent without implicitly needing to underwrite the agent's deployer.
              </p>

              <p>
              This will rewrite how software companies structure themselves, and will ultimately lead to how software interacts. Initially, “AI stack” companies will all roll their own budgeting, borrowing, and spending toolsets. Eventually, software companies will emerge to build generic tools that will help other software companies' agents budget, borrow, or spend. The tools that AI agents will use to manage their wallets' budgets will look drastically different from tools that humans use to manage their wallets' budgets.
              </p>

              <p>
              The collapse of SVB marked the end of the “SaaS Era.” The next era is likely going to be the “AI Era.” I'm still not certain exactly what that looks like, which is why I didn't mention any specific frameworks or protocols in this section. Once the protocols fall into place, the next step will be infrastructure. Agent-owned wallets and agent-integratable interfaces need to be created before companies can be fully built on the “AI stack” and propel us into the “AI Era.” 
              </p>

              <h2 className="text-2xl font-bold font-heading text-green mt-8 mb-4">
                Agent Identity
              </h2>

              <p>
              Before we can get into what an agent can own and how agents can interact with each other, it's important to establish how we can publicly define an agent over time and multiple instances. Without this stable identity, agents can't own wallets, and performing most financial actions (e.g., underwriting an agent) is impossible. Without persistent cardinality (what makes agent A still agent A tomorrow), you can't model obligations, reputation, or continuity of service.
              </p>

              <p>
              The three invariants an agent must have are:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>A persistent root identity</li>
                <li>A governance envelope</li>
                <li>A permission surface</li>
              </ol>

              <p>
              With these 3, the agent can own a wallet or continuously talk to another agent or interface. If any of these break, the wallet wouldn't know it's the same agent interacting with it. The interface would have to re-authenticate and re-authorize the agent every time.
              </p>

              <h2 className="text-2xl font-bold font-heading text-green mt-8 mb-4">
              Agent-Owned Wallets
              </h2>
              <p>Agents are beginning to be able to spend, but there are still a lot of unsolved problems that lead to less-than-optimal solutions:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Agent identity is largely unsolved. Who controls the association, and at what point does it mean that the vault provider becomes fully custodial? If the provider loses the link between the agent and the wallet, how can you prove the agent owns it?</li>
                <li>Agent permissioning is largely unsolved. If the agent has access to the keys to make payments, and the ruleset is context that nobody can fully control, how can you fully trust the agent to ignore the context and not make a rogue payment?</li>
              </ul>
              <p>Agents will eventually need to operate with wallets that the deployer doesn't have access to, but these problems must be figured out long before we get to this point.</p>
              <p>Imagine you're a creditor. Would you give a loan to someone who has impeccable cash flow history, but that you know could have all of their funds drained by some unknown actor at any given point?</p>
              <p>Imagine you're creating a budget for your family. How would your thinking about saving or spending change if you knew that, at any given point, someone you don't know might come in and drain your savings account?</p>
              <p>Naively, this could work using multi-party communication where distribution key generation runs and generates 3 key shares, of which 2 are required to sign a transaction. The key shares are distributed as follows:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>One key share (D) is stored by the agent's deployer. This should be stored in some HSM or TEE, but how this key is stored is ultimately up to the agent deployer.</li>
                <li>One key share (V) is stored by the vault provider. This should be stored as securely as possible in an HSM or TEE.</li>
                <li>One key share (A) is stored by the agent within the deployer's backend, passed to the agent on runtime.</li>
              </ul>
              <p>The agent could then control the wallet in the following way:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The agent deployer could define a mutable ruleset, stored on the wallet infra side, for what the agent can or can't spend money on.</li>
                <li>The agent can go about its business, choosing when and how to transact from the wallet it controls. To transact, it would combine its key share with the wallet provider's key share to generate a signing key.</li>
                <li>In the case the agent deployer wants to withdraw funds, the agent deployer must coordinate with the wallet provider in order to form a signing key, and the wallet provider would have a strict (likely contractual) ruleset on when these operations are allowed.</li>
              </ul>

              <h2 className="text-2xl font-bold font-heading text-green mt-8 mb-4">
              Fintech toolsets for Agents
              </h2>
              <p>Initially, early adopters of the “AI stack” will build many agentic tools and workflows in-house, from scratch. Budgeting rulesets, UI/UX generators, etc. However, just like in the “SaaS Era,” a set of best practices will inevitably emerge, and valuable third-party companies will arise to focus solely on distributing best-in-class tools for agents to operate with. Examples of this would be:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Credit facilities / working capital</li>
                <li>Budgeting / internal finance</li>
                <li>Financing</li>
              </ul>
              <p>While it's certainly possible that large incumbents could retrofit their workflows to work nicely with AI agents, it's likely that newcomers will be able to iterate faster and provide better solutions. The periodic structure and human-centric workflows that are at the core of incumbents' business models will be hard to adapt to the inherently continuous nature of agentic finance. This, coupled with the possibility that most transactions completed by agents will be far smaller than those completed by humans (e.g., a per-interaction, protocol-based payment), presents a completely different product surface</p>
              <p>An example of this: just as humans and businesses need to build up their creditworthiness or ability to stick to budgets, agents and the tools agents use will have to do the same. A credit facility or budgeting tool for agents will have to check with the agent to confirm whether the creator has the ability to drain funds.</p>
              <p>To build a truly vertical agentic finance stack, it's not enough to rely solely on agent deployers to build the financial suite every time. They'll need to plug into tools, much like “SaaS stack” products integrate with APIs today.</p>

              <h2 className="text-2xl font-bold font-heading text-green mt-8 mb-4">
              Outstanding Questions
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Will snapshots or projections of continuous, agent-controlled processes be enough for actual corporate bookkeeping?</li>
                <li>Would the agent wallet infra provider, who owns one of the wallet key-shares, ultimately take on co-custodian / co-fiduciary duties to the funds the agent manages on behalf of the agent deployer?</li>
                <li>Is this three-party model totally tamper-proof?</li>
                <li>What happens when the deployer doesn't own the agent, but is just using a third-party agent? Does that deployer handle the wallet?</li>
              </ul>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t-2 border-red/30">
            <TransitionLink
              to="/menu"
              className="inline-block px-6 py-3 bg-red text-cream font-heading hover:bg-green transition-colors"
            >
              Explore More Posts
            </TransitionLink>
          </footer>
        </article>
      </div>
    </section>
  );
}
