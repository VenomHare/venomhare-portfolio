import Image from "next/image";
import Navbar from "@/components/Navbar";
import CursorDot from "@/components/CursorDot";
import HeroReveal from "@/components/HeroReveal";
import AnimatedSection from "@/components/AnimatedSection";
import CtaButton from "@/components/CtaButton";

export default function Home() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend & DevOps",
      skills: ["Node.js", "Express.js", "Docker", "Git", "GitHub Actions", "Vercel", "CI/CD", "Nginx"]
    },
    {
      title: "Databases & ORM",
      skills: ["PostgreSQL", "Supabase", "MongoDB", "MySQL", "Prisma", "Drizzle ORM"]
    },
    {
      title: "Other Skills & AI",
      skills: ["REST APIs", "Zod", "TDD", "JSON Schema", "Gemini API", "OpenAI SDK", "Anthropic SDK"]
    }
  ];

  return (
    <>
      {/* Custom Cursor Dot */}
      <CursorDot />

      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <header id="hero" className="hero-section">
        <div className="grid-bg"></div>
        <div className="container">
          <div className="hero-layout">
            {/* Left column: Text content */}
            <div className="hero-text-col">
              <div className="hero-status-tag font-mono-ui">
                <span className="dot-indicator"></span>
                <span>Based in Kalyan, India · Available for work</span>
              </div>

              <HeroReveal text="Sarthak Kadam" />
              
              <p className="hero-subtitle font-mono-ui">
                Full-Stack Developer · TypeScript · React · Node.js · AI
              </p>

              <p className="hero-description font-mono-ui">
                Specializing in building production-ready SaaS products, secure payment gateways, and progressive Gmail integrations.
              </p>

              <div className="hero-ctas">
                <a href="#work" className="btn-primary">
                  View Work
                </a>
                <a 
                  href="https://github.com/venomhare" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-ghost"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* Right column: Premium Technical Photo Card */}
            <div className="hero-image-wrapper">
              <div className="hero-image-card">
                <div className="image-technical-header font-mono-ui">
                  <span>SARTHAK_KADAM.JPG</span>
                  <span>750x1000</span>
                </div>
                <div className="image-frame">
                  <Image 
                    src="/sarthak.jpg" 
                    alt="Sarthak Kadam" 
                    width={350} 
                    height={466}
                    priority
                    style={{ objectFit: "cover" }}
                  />
                  <div className="frame-corner top-left"></div>
                  <div className="frame-corner top-right"></div>
                  <div className="frame-corner bottom-left"></div>
                  <div className="frame-corner bottom-right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* About / Philosophy Section */}
        <AnimatedSection id="about" className="section-padding border-top">
          <div className="container">
            <div className="section-grid-2">
              <div>
                <p className="section-label font-mono-ui">// About &amp; Philosophy</p>
                <h2 className="section-title italic">Building complete products.</h2>
                <p className="about-text font-mono-ui">
                  I focus on bridging the gap between elegant interface design and robust, high-performance backends. My philosophy is centered around creating user-centric products that load instantly, scale effortlessly, and solve real-world problems through clean, maintainable architecture.
                </p>
              </div>
              <div className="philosophy-cards-container">
                <div className="philosophy-card">
                  <h3 className="philosophy-card-title font-mono-ui">01 / Product-Minded</h3>
                  <p className="philosophy-card-body font-mono-ui">
                    Designing with the end-user in mind. I write code that serves the user experience, integrates smart workflows, and drives product objectives first.
                  </p>
                </div>
                <div className="philosophy-card">
                  <h3 className="philosophy-card-title font-mono-ui">02 / Performance-First</h3>
                  <p className="philosophy-card-body font-mono-ui">
                    Zero-bloat architecture. Ensuring pages load in milliseconds, optimizing core web vitals, and minimizing API and AI generation cost structures.
                  </p>
                </div>
                <div className="philosophy-card">
                  <h3 className="philosophy-card-title font-mono-ui">03 / Developer-First</h3>
                  <p className="philosophy-card-body font-mono-ui">
                    Type safety, clean schema validations, and automated CI/CD deployments. Building modular codebases that teams love to collaborate on.
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-grid for Education and Credentials */}
            <div className="credentials-section border-top" style={{ marginTop: "6rem", paddingTop: "4rem" }}>
              <div className="section-grid-2">
                <div>
                  <p className="section-label font-mono-ui">// Education</p>
                  <div className="philosophy-card" style={{ background: "transparent" }}>
                    <h3 className="project-title" style={{ fontSize: "1.75rem", fontFamily: "var(--font-instrument-serif)", fontWeight: 700 }}>
                      B.Sc. in Information Technology
                    </h3>
                    <p className="font-mono-ui" style={{ color: "var(--accent)", fontSize: "0.8125rem", margin: "0.25rem 0 1rem" }}>
                      KM Agrawal College, Kalyan · Mar 2024 – May 2026
                    </p>
                    <p className="philosophy-card-body font-mono-ui" style={{ paddingLeft: 0 }}>
                      Focused on database systems, software engineering principles, and core IT infrastructure.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="section-label font-mono-ui">// Training &amp; Bootcamps</p>
                  <div className="philosophy-card" style={{ background: "transparent" }}>
                    <h3 className="project-title" style={{ fontSize: "1.75rem", fontFamily: "var(--font-instrument-serif)", fontWeight: 700 }}>
                      Cohort 2.0 – Full Stack &amp; DevOps
                    </h3>
                    <p className="font-mono-ui" style={{ color: "var(--accent)", fontSize: "0.8125rem", margin: "0.25rem 0 1rem" }}>
                      100xDevs by Harkirat Singh · Oct 2024 – Jan 2025
                    </p>
                    <p className="philosophy-card-body font-mono-ui" style={{ paddingLeft: 0 }}>
                      Intensive training in system design, MERN stack, Docker, Kubernetes, CI/CD, Redis caching, and message queues like Kafka.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </AnimatedSection>

        {/* Featured Projects Section */}
        <AnimatedSection id="work" className="section-padding border-top">
          <div className="container">
            <p className="section-label font-mono-ui">// Selected Projects</p>
            <h2 className="section-title italic">Things I&apos;ve Built</h2>
            
            <div className="section-grid-2 gap-8">
              {/* Featured Card 1 - DraftMyMail */}
              <div className="project-card featured-card">
                <div className="project-card-header">
                  <h3 className="project-title">DraftMyMail AI</h3>
                  <a 
                    href="https://draftmymail.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    ↗
                  </a>
                </div>
                <p className="project-desc font-mono-ui">
                  An AI-powered SaaS for generating professional HTML emails with progressive Gmail Draft API integrations.
                </p>
                <div className="project-tags">
                  <span className="project-tag font-mono-ui">React (Vite)</span>
                  <span className="project-tag font-mono-ui">Bun JS</span>
                  <span className="project-tag font-mono-ui">Hono</span>
                  <span className="project-tag font-mono-ui">PostgreSQL</span>
                  <span className="project-tag font-mono-ui">Gemini API</span>
                </div>
              </div>

              {/* Featured Card 2 - PowerPay */}
              <div className="project-card featured-card">
                <div className="project-card-header">
                  <h3 className="project-title">PowerPay Wallet</h3>
                  <a 
                    href="https://powerpay.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    ↗
                  </a>
                </div>
                <p className="project-desc font-mono-ui">
                  A full-stack digital payments wallet with User Auth, transfer logic, and real-time balance lookup.
                </p>
                <div className="project-tags">
                  <span className="project-tag font-mono-ui">Next.js</span>
                  <span className="project-tag font-mono-ui">Express.js</span>
                  <span className="project-tag font-mono-ui">Node.js</span>
                  <span className="project-tag font-mono-ui">PostgreSQL</span>
                  <span className="project-tag font-mono-ui">JWT</span>
                </div>
              </div>
            </div>

            {/* Smaller Secondary Card */}
            <div style={{ marginTop: "2rem" }}>
              <div className="project-card low-card secondary-project-card">
                <div className="project-card-header">
                  <h3 className="project-title" style={{ fontSize: "1.75rem" }}>LGI Modz Showcase</h3>
                  <a 
                    href="https://lgimodz.store" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    ↗
                  </a>
                </div>
                <p className="project-desc font-mono-ui" style={{ fontSize: "0.875rem" }}>
                  Product showcase website with customer support chat, image uploads, automated transactional emails, and PayPal checkout integration.
                </p>
                <div className="project-tags">
                  <span className="project-tag font-mono-ui">Next.js</span>
                  <span className="project-tag font-mono-ui">TypeScript</span>
                  <span className="project-tag font-mono-ui">Vercel</span>
                  <span className="project-tag font-mono-ui">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection id="skills" className="section-padding border-top">
          <div className="container">
            <p className="section-label font-mono-ui">// Technical Stack</p>
            <h2 className="section-title italic">Capabilities &amp; Tools</h2>

            <div className="skills-grid">
              {skillCategories.map((category) => (
                <div key={category.title} className="skill-category-block">
                  <h3 className="skill-category-title font-mono-ui">{category.title}</h3>
                  <div className="skill-tags-list">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Open Source Section */}
        <AnimatedSection id="open-source" className="section-padding border-top">
          <div className="container">
            <p className="section-label font-mono-ui">// Open Source</p>
            <h2 className="section-title italic">Community Contributions</h2>

            <div className="project-card shimmer-card open-source-card">
              <div className="project-card-header">
                <h3 className="project-title">VoltAgent</h3>
                <a 
                  href="https://github.com/voltagent/voltagent" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  GitHub ↗
                </a>
              </div>
              <p className="project-desc font-mono-ui" style={{ color: "var(--text)" }}>
                Core contributor to VoltAgent, a high-performance agentic AI framework.
              </p>
              <ul className="contribution-list font-mono-ui">
                <li>
                  Integrated Claude model support using the Anthropic AI SDK (TypeScript){" "}
                  <a href="https://github.com/VoltAgent/voltagent/issues/10" target="_blank" rel="noopener noreferrer" className="contribution-link">[Feature #10]</a>.
                </li>
                <li>
                  Added multi-modal input support (images/files) for LLMs{" "}
                  <a href="https://github.com/VoltAgent/voltagent/pull/110" target="_blank" rel="noopener noreferrer" className="contribution-link">[PR #110]</a>.
                </li>
                <li>
                  Fixed JSON Schema to Zod schema parsing bug for better automated validation{" "}
                  <a href="https://github.com/VoltAgent/voltagent/issues/87" target="_blank" rel="noopener noreferrer" className="contribution-link">[Issue #87]</a>.
                </li>
                <li>Contributed to code review and collaborative discussions to ensure alignment.</li>
              </ul>
              <div className="project-tags">
                <span className="project-tag font-mono-ui">TypeScript</span>
                <span className="project-tag font-mono-ui">Anthropic SDK</span>
                <span className="project-tag font-mono-ui">JSON Schema</span>
                <span className="project-tag font-mono-ui">Zod</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="section-padding border-top" style={{ paddingBottom: "10rem" }}>
          <div className="container text-center">
            <p className="section-label font-mono-ui">// Reach Out</p>
            <h2 className="contact-heading italic">Let&apos;s Build Something.</h2>
            
            <div className="contact-details">
              <a href="mailto:sarthakkadam147@gmail.com" className="contact-email font-mono-ui" style={{ marginBottom: "1.5rem" }}>
                sarthakkadam147@gmail.com
              </a>
              <div className="contact-socials font-mono-ui">
                <a 
                  href="https://github.com/venomhare" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <span>·</span>
                <a 
                  href="https://linkedin.com/in/sarthak00dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <span>·</span>
                <a 
                  href="https://x.com/KadamSarthak" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </div>
            </div>

            <div style={{ marginTop: "3rem" }}>
              <CtaButton href="/SarthakFullStackResume.pdf" download={true}>
                Download Resume
              </CtaButton>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer Section */}
      <footer className="footer-bar border-top">
        <div className="container footer-content font-mono-ui" style={{ justifyContent: "center" }}>
          <p>© 2026 Sarthak Kadam. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
