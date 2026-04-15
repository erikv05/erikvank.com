import './App.css'

const work = [
  { year: '2025', title: 'Narrative', role: 'CEO & Co-Founder, YC F25', loc: 'San Francisco' },
  { year: '2025', title: 'Apple', role: 'Software Engineer Intern, AI Infra & Tools', loc: 'San Diego' },
  { year: '2024', title: 'Brown University', role: 'Computer Science', loc: 'Providence' },
  { year: '2023', title: 'Allen School, UW', role: 'Undergraduate Researcher', loc: 'Seattle' },
]

export default function App() {
  return (
    <div className="app">
      <div className="grid-bg" />
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <div className="glow glow-3" />
      <div className="grain" />

      <nav className="nav">
        <div className="container nav-inner">
          <a href="#" className="mark">erikvank<span>.</span>com</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero container">
        <svg className="deco pitch" viewBox="0 0 600 600" fill="none" aria-hidden="true">
          <circle cx="300" cy="300" r="280" stroke="rgba(255,107,53,0.22)" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="140" stroke="rgba(255,107,53,0.28)" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="4" fill="rgba(255,107,53,0.6)" />
          <line x1="300" y1="20" x2="300" y2="580" stroke="rgba(255,107,53,0.16)" strokeWidth="1.5" strokeDasharray="6 10" />
          <path d="M 60 300 A 240 240 0 0 1 540 300" stroke="rgba(255,107,53,0.14)" strokeWidth="1.5" strokeDasharray="3 6" />
        </svg>
        <svg className="deco tactics" viewBox="0 0 240 140" fill="none" aria-hidden="true">
          <circle cx="24" cy="70" r="6" fill="rgba(255,107,53,0.85)" />
          <path d="M 24 70 Q 90 10 150 70 T 220 70" stroke="rgba(255,107,53,0.55)" strokeWidth="2" strokeDasharray="4 6" fill="none" />
          <path d="M 212 62 L 224 70 L 212 78" stroke="rgba(255,107,53,0.75)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <g stroke="rgba(247,241,227,0.4)" strokeWidth="1.5" strokeLinecap="round">
            <line x1="80" y1="100" x2="92" y2="112" />
            <line x1="92" y1="100" x2="80" y2="112" />
          </g>
          <g stroke="rgba(247,241,227,0.4)" strokeWidth="1.5" strokeLinecap="round">
            <line x1="160" y1="20" x2="172" y2="32" />
            <line x1="172" y1="20" x2="160" y2="32" />
          </g>
        </svg>
        <span className="shape shape-a" />
        <span className="shape shape-b" />
        <span className="shape shape-c" />
        <div className="hero-meta">
          <span className="status-dot" />
          <span>San Francisco</span>
        </div>
        <h1>
          Erik Vank.
        </h1>
        <p className="hero-sub">
          I'm the co-founder and CEO of <strong>Narrative</strong>, a YC-backed startup
          building AI tools for sports content.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="https://narrative-sports.com" target="_blank" rel="noreferrer">
            Narrative <span className="arrow">↗</span>
          </a>
          <a className="btn btn-ghost" href="#contact">Get in touch</a>
        </div>
      </header>

      <section id="about" className="section container">
        <div className="section-label">About</div>
        <h2>A bit about me.</h2>
        <div className="about-grid">
          <div className="prose">
            <p>
              I started Narrative with two friends in 2025. We make AI-generated
              highlights for teams, leagues, and broadcasters. Give us a livestream
              and we turn the game into clips that are ready to post.
            </p>
            <p>
              Before Narrative, I was CS '27 at Brown after transferring from
              the University of Washington, where I spent a couple of years
              doing undergraduate research at the Allen School on using LLMs
              for document annotations. I also interned on AI infrastructure
              at Apple last summer.
            </p>
            <p>
              Outside of work, I love playing and watching sports. I'm a huge
              Seahawks fan and always have been, growing up in Seattle.
            </p>
          </div>
          <ul className="fact-list">
            <li><span>Based in</span><span>San Francisco</span></li>
            <li><span>Company</span><span>Narrative</span></li>
            <li><span>Previously</span><span>Apple, UW, Brown</span></li>
          </ul>
        </div>
      </section>

      <section id="work" className="section container">
        <div className="section-label">Work</div>
        <h2>Where I've been.</h2>
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

      <footer id="contact" className="footer container">
        <div className="section-label">Contact</div>
        <div className="footer-grid">
          <div>
            <h2>
              Say <a href="mailto:erik@narrative-sports.com">hello</a>.
            </h2>
            <p className="footer-lede">
              Always happy to chat about sports, video, or building companies.
            </p>
          </div>
          <div className="footer-links">
            <a href="mailto:erik@narrative-sports.com">erik@narrative-sports.com ↗</a>
            <a href="https://narrative-sports.com" target="_blank" rel="noreferrer">narrative-sports.com ↗</a>
            <a href="https://www.linkedin.com/in/erik-vank" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://www.ycombinator.com/companies/usenarrative" target="_blank" rel="noreferrer">Y Combinator ↗</a>
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
