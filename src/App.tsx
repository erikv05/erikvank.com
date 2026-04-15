import './App.css'

const work = [
  { year: '2025 —', title: 'Narrative', role: 'CEO & Co-Founder · Y Combinator F25', loc: 'San Francisco' },
  { year: '2025', title: 'Apple', role: 'Software Engineer Intern · AI Infra & Tools', loc: 'San Diego' },
  { year: '2025', title: 'Emergent Conference', role: 'Founding Team · 300+ attendees', loc: 'Providence' },
  { year: '2023–25', title: 'Allen School (UW)', role: 'Research Assistant · LLMs for document annotations', loc: 'Seattle' },
  { year: '2024', title: 'Continental Finance', role: 'Software Intern · Databases & Ops', loc: 'Wilmington' },
]

const posts = [
  {
    date: '1 week ago',
    title: 'Gen Z is rewriting the sports media playbook.',
    blurb: "90% consume sports content on social. 72% engaged with the World Cup via clips, not the broadcast. The game hasn't changed — the distribution has.",
  },
  {
    date: '3 weeks ago',
    title: "The most important moment in a highlight isn't the goal.",
    blurb: "It's the 15 seconds after. The celebration, the reactions. That's why people watch sports — and why our crop tracks all of it in 9:16.",
  },
  {
    date: '3 weeks ago',
    title: 'We just launched the AI Editor in Narrative.',
    blurb: 'Pick your games, player, and events. Our editor pulls the most relevant moments ranked by what performs on social — ready to post in under a minute.',
  },
  {
    date: '1 month ago',
    title: 'Highlight packages in under 30 seconds.',
    blurb: 'Set your filters in Narrative and get dozens of fully rendered packages before you would even import the game into Premiere.',
  },
]

export default function App() {
  return (
    <div className="app">
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <div className="grain" />

      <nav className="nav">
        <div className="container nav-inner">
          <a href="#" className="mark">erik<span>.</span>vank</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#writing">Writing</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero container">
        <div className="hero-meta">
          <span className="status-dot" />
          <span>Available · San Francisco</span>
        </div>
        <h1>
          Building the <em>future</em><br />
          of sports content.
        </h1>
        <p className="hero-sub">
          I'm <strong>Erik Vank</strong> — CEO & Co-Founder of <strong>Narrative (YC F25)</strong>.
          We turn every big moment in a game into a shareable clip, in real time.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="https://narrative-sports.com" target="_blank" rel="noreferrer">
            Visit Narrative <span className="arrow">↗</span>
          </a>
          <a className="btn btn-ghost" href="#contact">Get in touch</a>
        </div>
      </header>

      <section className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>AI highlights</span><span className="dot">✦</span>
          <span>sports content</span><span className="dot">✦</span>
          <span>real-time video</span><span className="dot">✦</span>
          <span>YC F25</span><span className="dot">✦</span>
          <span>AI highlights</span><span className="dot">✦</span>
          <span>sports content</span><span className="dot">✦</span>
          <span>real-time video</span><span className="dot">✦</span>
          <span>YC F25</span><span className="dot">✦</span>
        </div>
      </section>

      <section id="about" className="section container">
        <div className="section-label">About</div>
        <h2>Obsessing over <em>the 15 seconds</em> that matter most.</h2>
        <div className="about-grid">
          <div className="prose">
            <p>
              I grew up loving sports — and I couldn't stop thinking about why the broadcast version
              of a game is never the version fans actually share. At <strong>Narrative</strong>, we
              map every moment of a live game to the most viral piece of content possible, generate
              it in seconds, and push it straight to social.
            </p>
            <p>
              Before Narrative, I studied CS at <strong>Brown</strong>, worked on AI infra at
              <strong> Apple</strong>, and spent nearly two years as an undergraduate researcher at
              the Allen School using LLMs for document-external annotations.
            </p>
            <p>
              Now I'm in San Francisco, working with some of the biggest names in college football
              and broadcast sports. If you run content for a team, league, or broadcaster — let's talk.
            </p>
          </div>
          <ul className="fact-list">
            <li><span>Based in</span><span>San Francisco</span></li>
            <li><span>Company</span><span>Narrative · YC F25</span></li>
            <li><span>Education</span><span>Brown · CS · 4.0</span></li>
            <li><span>Previously</span><span>Apple · UW Allen</span></li>
            <li><span>Fun fact</span><span>#1 PF Debate · WA</span></li>
          </ul>
        </div>
      </section>

      <section id="work" className="section container">
        <div className="section-label">Work</div>
        <h2>A short list of <em>places</em> that shaped me.</h2>
        <div className="work-list">
          {work.map((w) => (
            <div className="work-item" key={w.title}>
              <div className="work-year">{w.year}</div>
              <div>
                <div className="work-title">{w.title}</div>
                <span className="work-role">{w.role}</span>
              </div>
              <div className="work-loc">{w.loc}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="writing" className="section container">
        <div className="section-label">Writing</div>
        <h2>Notes from <em>building</em> Narrative.</h2>
        <div className="posts">
          {posts.map((p) => (
            <article className="post" key={p.title}>
              <div className="post-date">{p.date}</div>
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="footer container">
        <div className="section-label">Contact</div>
        <div className="footer-grid">
          <div>
            <h2>
              Let's <a href="mailto:erik@narrative-sports.com">talk</a>.
            </h2>
            <p className="footer-lede">
              Teams, leagues, broadcasters, operators, builders — I read every email.
            </p>
          </div>
          <div className="footer-links">
            <a href="mailto:erik@narrative-sports.com">erik@narrative-sports.com ↗</a>
            <a href="https://narrative-sports.com" target="_blank" rel="noreferrer">narrative-sports.com ↗</a>
            <a href="https://www.linkedin.com/in/erik-vank" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://www.ycombinator.com" target="_blank" rel="noreferrer">Y Combinator ↗</a>
          </div>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Erik Vank</span>
          <span>erikvank.com</span>
        </div>
      </footer>
    </div>
  )
}
