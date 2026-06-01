import './App.css';

function App() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <span className="nav-logo">GB<span className="nav-logo-dot">.</span></span>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Available for opportunities
            </div>
            <h1 className="hero-name">
              Gabriel<br />
              <span>Bacaron</span>
            </h1>
            <p className="hero-role">Aspiring IT Specialist</p>
            <p className="hero-desc">
              Passionate about technology, problem-solving, and innovation.
              Building skills in software, hardware, and programming to create
              solutions that make life easier.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn-primary">Get in touch</a>
              <a href="#skills" className="btn-ghost">View skills</a>
            </div>
            <div className="hero-meta">
              <span className="hero-meta-item">
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                San Jose Del Monte City, PH
              </span>
              <span className="hero-meta-item">
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                STI College — Currently Enrolled
              </span>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-img-wrap">
              <img src="/img/bakal ako.jpg" alt="Gabriel Bacaron" className="hero-img" />
              <div className="hero-img-ring" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="chip">About me</span>
            <h2 className="section-title">Who I am</h2>
          </div>
          <div className="about-grid">
            <div className="about-text-block">
              <p>
                Hello! I am <strong>Gabriel Bacaron</strong>, an aspiring IT Specialist with a
                genuine passion for technology and how it shapes the world around us. I enjoy
                diving deep into both software and hardware — from writing code to physically
                assembling machines.
              </p>
              <p>
                Currently studying at <strong>STI College</strong>, I'm building a solid
                foundation in programming, database systems, and PC hardware to become a
                well-rounded IT professional.
              </p>
            </div>
            <div className="about-cards">
              <div className="about-card">
                <span className="about-card-num">4+</span>
                <span className="about-card-label">Core Skills</span>
              </div>
              <div className="about-card">
                <span className="about-card-num">STEM</span>
                <span className="about-card-label">Academic Track</span>
              </div>
              <div className="about-card about-card-wide">
                <span className="about-card-num">STI</span>
                <span className="about-card-label">Current College</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <span className="chip">Expertise</span>
            <h2 className="section-title">What I can do</h2>
          </div>
          <div className="skills-grid">
            {[
              { img: '/img/ms.png',      name: 'Microsoft Office', sub: 'Word · Excel · PowerPoint' },
              { img: '/img/program.png', name: 'Programming',      sub: 'Logic · Algorithms · Code' },
              { img: '/img/pc.png',      name: 'PC Assembly',      sub: 'Build · Troubleshoot · Maintain' },
              { img: '/img/sql.jpg',     name: 'Database (SQL)',   sub: 'Query · Design · Manage' },
            ].map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon-wrap">
                  <img src={skill.img} alt={skill.name} className="skill-img" />
                </div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-sub">{skill.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOBBIES */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="chip">Interests</span>
            <h2 className="section-title">Outside the lab</h2>
          </div>
          <div className="hobbies-grid">
            <div className="hobby-card">
              <div className="hobby-icon-wrap">
                <img src="/img/gaming.png" alt="Gaming" className="hobby-img" />
              </div>
              <div className="hobby-info">
                <div className="hobby-name">Gaming</div>
                <div className="hobby-desc">Strategic thinking &amp; sharp reflexes</div>
              </div>
            </div>
            <div className="hobby-card">
              <div className="hobby-icon-wrap">
                <img src="/img/gundam.png" alt="Gundam Building" className="hobby-img" />
              </div>
              <div className="hobby-info">
                <div className="hobby-name">Gundam Building</div>
                <div className="hobby-desc">Precision &amp; patience in model craft</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <span className="chip">Background</span>
            <h2 className="section-title">My journey</h2>
          </div>
          <div className="timeline">
            {[
              { name: 'Academia De San Lorenzo De Ma Ala', level: 'Elementary Education',            current: false },
              { name: 'Academia De San Lorenzo De Ma Ala', level: 'Junior High School',              current: false },
              { name: 'Academia De San Lorenzo De Ma Ala', level: 'Senior High School — STEM Track', current: false },
              { name: 'STI College',                       level: 'Information Technology',          current: true  },
            ].map((edu, i) => (
              <div className={`timeline-item${edu.current ? ' active' : ''}`} key={i}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-name">{edu.name}</div>
                  <div className="timeline-level">{edu.level}</div>
                </div>
                {edu.current && <span className="timeline-badge">Current</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="chip">Reach out</span>
            <h2 className="section-title">Let's connect</h2>
          </div>
          <div className="contact-grid">
            {[
              { label: 'Email',    value: 'Bacarongabriel09@gmail.com', href: 'mailto:Bacarongabriel09@gmail.com' },
              { label: 'Phone',    value: '092046272626',               href: null },
              { label: 'Location', value: 'San Jose Del Monte, Bulacan',href: null },
              { label: 'Facebook', value: 'View Profile →',             href: 'https://www.facebook.com/gabrielbacaron11' },
            ].map((c) => (
              <div className="contact-card" key={c.label}>
                <span className="contact-label">{c.label}</span>
                <span className="contact-value">
                  {c.href
                    ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{c.value}</a>
                    : c.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span>© 2025 Gabriel Bacaron — Aspiring IT Specialist</span>
      </footer>
    </>
  );
}

export default App;