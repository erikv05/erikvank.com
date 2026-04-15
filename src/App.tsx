import './App.css'

const work = [
  { year: '2025', title: 'Narrative', role: 'CEO & Co-Founder', url: 'https://narrative-sports.com' },
  { year: '2025', title: 'Apple', role: 'SWE Intern', url: 'https://www.apple.com' },
  { year: '2024', title: 'Brown University', role: 'CS', url: 'https://cs.brown.edu' },
  { year: '2023', title: 'Allen School, UW', role: 'Researcher', url: 'https://www.cs.washington.edu' },
]

export default function App() {
  return (
    <div className="app">
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <div className="glow glow-3" />
      <div className="grain" />

      <nav className="nav">
        <div className="container nav-inner">
          <a href="#" className="mark">erikvank<span>.</span>com</a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="mailto:erik@narrative-sports.com">Email</a>
          </div>
        </div>
      </nav>

      <header className="hero container">
        <svg className="deco pitch" viewBox="0 0 600 600" fill="none" aria-hidden="true">
          <circle cx="300" cy="300" r="280" stroke="rgba(217,74,16,0.22)" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="140" stroke="rgba(217,74,16,0.28)" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="4" fill="rgba(217,74,16,0.6)" />
          <line x1="300" y1="20" x2="300" y2="580" stroke="rgba(217,74,16,0.16)" strokeWidth="1.5" strokeDasharray="6 10" />
          <path d="M 60 300 A 240 240 0 0 1 540 300" stroke="rgba(217,74,16,0.14)" strokeWidth="1.5" strokeDasharray="3 6" />
        </svg>
        <span className="shape shape-a" />
        <span className="shape shape-b" />
        <div className="hero-meta">
          <span className="status-dot" />
          <span>San Francisco</span>
        </div>
        <h1>Erik Vank.</h1>
        <p className="hero-sub">
          Building <a href="https://narrative-sports.com" target="_blank" rel="noreferrer"><strong>Narrative</strong></a>, the future of sports content.
        </p>
      </header>

      <section id="work" className="section container">
        <div className="work-list">
          {work.map((w) => (
            <a className="work-item" key={w.title} href={w.url} target="_blank" rel="noreferrer">
              <div className="work-year">{w.year}</div>
              <div>
                <div className="work-title">{w.title}</div>
                <span className="work-role">{w.role}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer container">
        <div className="footer-links">
          <a href="mailto:erik@narrative-sports.com">erik@narrative-sports.com ↗</a>
          <a href="https://narrative-sports.com" target="_blank" rel="noreferrer">narrative-sports.com ↗</a>
          <a href="https://www.linkedin.com/in/erik-vank" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://www.ycombinator.com/companies/usenarrative" target="_blank" rel="noreferrer">Y Combinator ↗</a>
        </div>
      </footer>
    </div>
  )
}
