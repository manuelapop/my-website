import type { ReactNode } from 'react'
import {
  profile,
  githubUrl,
  aiProjects,
  skillGroups,
  experience,
  education,
} from './data'
import { useReveal, useScrolled, useTyped } from './hooks'
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
  DownloadIcon,
  ArrowIcon,
  SparkIcon,
  PaperIcon,
  ExternalIcon,
} from './icons'
import type { ProjectLink } from './data'

function ProjectLinkIcon({ kind }: { kind?: ProjectLink['kind'] }) {
  if (kind === 'github') return <GitHubIcon />
  if (kind === 'paper') return <PaperIcon />
  return <ExternalIcon />
}

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal ${className ?? ''}`}>
      {children}
    </div>
  )
}

function Navbar() {
  const scrolled = useScrolled()
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          Manuela<span className="gradient-text">.</span>
        </a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#resume">Resume</a>
          <a href="#contact" className="nav-cta">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  const typed = useTyped(profile.taglines)
  return (
    <header id="top" className="hero">
      <div className="container">
        <span className="hero-badge">
          <span className="dot" /> Open to AI Software Engineering roles
        </span>
        <h1>
          {profile.name.replace(' A. ', ' ')}
          <span className="gradient-text">.</span>
        </h1>
        <div className="hero-role">
          <span className="typed">{typed}</span>
          <span className="cursor">&nbsp;</span>
        </div>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            <SparkIcon /> View AI Projects
          </a>
          <a className="btn btn-ghost" href={githubUrl} target="_blank" rel="noreferrer">
            <GitHubIcon /> GitHub
          </a>
          <a className="btn btn-ghost" href={profile.resumePath} target="_blank" rel="noreferrer">
            <DownloadIcon /> Resume
          </a>
        </div>
        <div className="hero-meta">
          <span>
            <PinIcon /> {profile.location}
          </span>
          <span>
            <MailIcon /> {profile.email}
          </span>
        </div>
      </div>
    </header>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">// AI Projects & Research</span>
          <h2 className="section-title">
            Building <span className="gradient-text">intelligent systems</span>
          </h2>
          <p className="section-sub">
            Selected work across retrieval-augmented generation, agentic AI, and ML
            optimization. More on{' '}
            <a href={githubUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
              GitHub
            </a>
            .
          </p>
        </Reveal>
        <div className="grid grid-2">
          {aiProjects.map((p) => (
            <Reveal key={p.title}>
              <article className="card">
                {p.highlight && <span className="project-tag">{p.highlight}</span>}
                <h3 className="project-title">{p.title}</h3>
                <p className="project-blurb">{p.blurb}</p>
                <div className="chips">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                {p.links && p.links.length > 0 && (
                  <div className="project-links">
                    {p.links.map((l) => (
                      <a
                        key={l.url}
                        className="project-link"
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ProjectLinkIcon kind={l.kind} />
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div style={{ marginTop: 32 }}>
            <a className="btn btn-ghost" href={githubUrl} target="_blank" rel="noreferrer">
              <GitHubIcon /> See all projects on GitHub <ArrowIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">// Toolbox</span>
          <h2 className="section-title">Skills &amp; technologies</h2>
        </Reveal>
        <Reveal>
          <div className="card">
            {skillGroups.map((g) => (
              <div key={g.label} className="skill-group">
                <div className="skill-label">{g.label}</div>
                <div className="skill-pills">
                  {g.skills.map((s) => (
                    <span key={s} className="skill-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">// Career</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-sub">
            15+ years shipping production software across platform engineering and, most
            recently, AI-enabled systems.
          </p>
        </Reveal>
        <Reveal>
          <div className="timeline">
            {experience.map((job) => (
              <div key={job.company + job.period} className="tl-item">
                <div className="tl-head">
                  <span className="tl-role">{job.role}</span>
                  <span className="tl-company">@ {job.company}</span>
                  <span className="tl-period">{job.period}</span>
                </div>
                {job.location && <div className="tl-loc">{job.location}</div>}
                <ul className="tl-points">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                {job.tech && (
                  <div className="chips">
                    {job.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="card" style={{ marginTop: 32 }}>
            <div className="skill-label">Education</div>
            {education.map((e) => (
              <div key={e.degree} className="edu-row">
                <div>
                  <div className="edu-degree">{e.degree}</div>
                  <div className="edu-school">{e.school}</div>
                </div>
                {e.period && <div className="edu-period">{e.period}</div>}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ResumeSection() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">// Resume</span>
          <h2 className="section-title">My resume</h2>
          <p className="section-sub">Read it inline below, or grab a copy to keep.</p>
        </Reveal>
        <Reveal>
          <div className="resume-actions" style={{ marginTop: 0, marginBottom: 22 }}>
            <a className="btn btn-primary" href={profile.resumePath} download>
              <DownloadIcon /> Download PDF
            </a>
            <a className="btn btn-ghost" href={profile.resumePath} target="_blank" rel="noreferrer">
              Open in new tab <ArrowIcon />
            </a>
          </div>
        </Reveal>
        <Reveal>
          <object
            className="resume-frame"
            data={`${profile.resumePath}#view=FitH`}
            type="application/pdf"
            aria-label="Resume PDF"
          >
            <div style={{ padding: 28, textAlign: 'center', color: 'var(--text-dim)' }}>
              Your browser can&apos;t display the PDF here.{' '}
              <a href={profile.resumePath} style={{ color: 'var(--accent)' }}>
                Download it instead
              </a>
              .
            </div>
          </object>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <h2>
              Let&apos;s build something <span className="gradient-text">intelligent</span>
            </h2>
            <p>
              I&apos;m open to AI software engineering opportunities and collaborations.
              The fastest way to reach me is email.
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                <MailIcon /> {profile.email}
              </a>
              <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon /> LinkedIn
              </a>
              <a className="btn btn-ghost" href={githubUrl} target="_blank" rel="noreferrer">
                <GitHubIcon /> GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <div className="footer-links">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
