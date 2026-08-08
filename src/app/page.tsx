"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Code2,
  FlaskConical,
  Layers3,
  Menu,
  MousePointer2,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "motion/react";

const capabilities = [
  {
    number: "01",
    title: "Better websites",
    description:
      "Digital experiences that are clear, fast, useful, and built to actually help your business move.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Smarter systems",
    description:
      "Custom tools, dashboards, workflows, and automations built around the way your business really works.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Less boring work",
    description:
      "Useful technology that handles repetitive work and gives your team more time for the things that matter.",
    icon: Bot,
  },
];

const systemLayers = [
  {
    id: "presence",
    number: "01",
    label: "Presence",
    title: "Make a better first impression.",
    description:
      "Your website should make it easy for people to understand who you are, what you do, and what they should do next.",
    outcome: "Clearer message. Better experience. More useful attention.",
    icon: Code2,
  },
  {
    id: "operations",
    number: "02",
    label: "Operations",
    title: "Make everyday work easier.",
    description:
      "Replace messy spreadsheets, repeated tasks, and disconnected tools with systems built around your actual workflow.",
    outcome: "Less admin. Less confusion. Better flow.",
    icon: Workflow,
  },
  {
    id: "intelligence",
    number: "03",
    label: "Insight",
    title: "Know what is happening.",
    description:
      "Turn business activity into simple, useful information that helps you understand what needs attention.",
    outcome: "Better visibility. Faster decisions. Fewer surprises.",
    icon: BarChart3,
  },
  {
    id: "assistance",
    number: "04",
    label: "Assistance",
    title: "Give repetitive work somewhere else to go.",
    description:
      "Smart assistants can help organize information, support teams, and remove some of the repetitive work from your day.",
    outcome: "More focus. Less busywork. More room to think.",
    icon: Bot,
  },
];

const navigationItems = [
  {
    id: "building",
    label: "What we're building",
  },
  {
    id: "why",
    label: "Why Sylvexa",
  },
];

export default function Home() {
  const [activeLayer, setActiveLayer] = useState(systemLayers[0]);
  const [activeSection, setActiveSection] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);

  useEffect(() => {
    const sectionIds = ["top", "building", "why", "launch"];

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const currentSection = sectionIds
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) {
            return null;
          }

          return {
            id,
            distance: Math.abs(element.getBoundingClientRect().top - 180),
          };
        })
        .filter(
          (
            section,
          ): section is {
            id: string;
            distance: number;
          } => section !== null,
        )
        .sort((a, b) => a.distance - b.distance)[0];

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1050) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ActiveLayerIcon = activeLayer.icon;

  return (
    <main>
      <div className="fixed-wordmark" aria-hidden="true">
        SYLVEXA
      </div>

      <header
        className={`spatial-header ${scrolled ? "is-scrolled" : ""}`}
      >
        <div className="header-shell">
          <a className="header-brand" href="#top" aria-label="Sylvexa home">
            <span className="header-brand-mark">
              <Layers3 size={18} strokeWidth={1.7} />
            </span>

            <span className="header-brand-name">SYLVEXA</span>
          </a>

          <nav
            className="header-navigation"
            aria-label="Primary navigation"
          >
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "is-active" : ""}
              >
                <span>{item.label}</span>
                <span className="navigation-indicator" />
              </a>
            ))}

            <a href="/lab">
              <span>Lab</span>
              <span className="navigation-indicator" />
            </a>
          </nav>

          <div className="header-actions">
            <div className="header-status">
              <span className="header-status-dot" />

              <span className="header-status-copy">
                <small>Status</small>
                Building now
              </span>
            </div>

            <a className="header-launch-button" href="/lab">
              Enter the Lab
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </a>
          </div>

          <button
            type="button"
            className="header-menu-button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="header-mobile-menu"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <a href="#building" onClick={() => setMenuOpen(false)}>
                <span>01</span>
                What we're building
              </a>

              <a href="#why" onClick={() => setMenuOpen(false)}>
                <span>02</span>
                Why Sylvexa
              </a>

              <a href="/lab">
                <span>03</span>
                Enter the Lab
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <section className="hero" id="top" ref={heroRef}>
        <motion.div
          className="hero-copy"
          style={{
            y: heroContentY,
            opacity: heroOpacity,
          }}
        >
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Sparkles size={15} />
            We're building something new
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
          >
            Something better
            <span className="editorial-word">is taking shape.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            We're building smarter digital tools that help businesses work
            better, move faster, and do less of the boring stuff.
          </motion.p>

          <motion.div
            className="hero-actions hero-actions-stacked"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <div className="hero-main-actions">
              <a className="primary-button" href="#building">
                See what we're building
                <ArrowRight size={17} />
              </a>

              <a className="secondary-button" href="/lab">
                Enter the Sylvexa Lab
                <FlaskConical size={17} />
              </a>
            </div>

            <span className="launch-status">
              <span className="status-indicator" />
              Coming soon
            </span>
          </motion.div>
        </motion.div>

        <div className="scroll-marker">
          <MousePointer2 size={15} />
          Keep scrolling
        </div>
      </section>

      <section className="capabilities-section" id="building">
        <div className="section-introduction centred-introduction">
          <span className="section-label">What we're building</span>

          <h2>
            Useful technology.
            <span className="editorial-word">Without the fuss.</span>
          </h2>

          <p>
            Sylvexa is about making the digital side of business feel simpler,
            clearer, and easier to use.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.article
                className="capability-card"
                key={capability.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                  rotateX: 2,
                }}
              >
                <div className="capability-card-head">
                  <span>{capability.number}</span>

                  <div className="capability-icon">
                    <Icon size={24} strokeWidth={1.55} />
                  </div>
                </div>

                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>

                <ArrowUpRight className="card-arrow" size={21} />
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="dark-interlude" id="why">
        <div className="dark-orbit" aria-hidden="true">
          <motion.div
            className="orbit-ring orbit-ring-one"
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="orbit-ring orbit-ring-two"
            animate={{ rotate: -360 }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="orbit-centre">
            <Layers3 size={38} strokeWidth={1.2} />
          </div>
        </div>

        <motion.div
          className="dark-interlude-copy"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label section-label-light">
            Why Sylvexa
          </span>

          <h2>Good software should feel easy.</h2>

          <p>
            Not another dashboard you have to learn. Not another tool your
            team forgets to use. Just useful technology that helps you get
            things done.
          </p>
        </motion.div>
      </section>

      <section className="system-section">
        <div className="section-introduction centred-introduction">
          <span className="section-label">A little deeper</span>

          <h2>
            Different parts.
            <span className="editorial-word">One connected idea.</span>
          </h2>

          <p>
            Tap through the layers to see the kind of problems Sylvexa is being
            built to solve.
          </p>
        </div>

        <div className="system-interface">
          <div className="system-tabs-wrap">
            <div className="system-tabs" role="tablist">
              {systemLayers.map((layer) => {
                const Icon = layer.icon;
                const selected = activeLayer.id === layer.id;

                return (
                  <button
                    key={layer.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    className={`system-tab ${selected ? "is-active" : ""}`}
                    onClick={(event) => {
                      setActiveLayer(layer);

                      if (window.innerWidth <= 680) {
                        event.currentTarget.scrollIntoView({
                          behavior: "smooth",
                          inline: "center",
                          block: "nearest",
                        });
                      }
                    }}
                  >
                    <span className="tab-number">{layer.number}</span>

                    <Icon size={19} strokeWidth={1.6} />

                    <strong>{layer.label}</strong>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="system-stage">
            <div className="stage-grid" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer.id}
                className="system-stage-content"
                initial={{
                  opacity: 0,
                  scale: 0.97,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
              >
                <div className="stage-visual">
                  <motion.div
                    className="stage-plane stage-plane-back"
                    animate={{ y: [-6, 6, -6] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                    }}
                  />

                  <motion.div
                    className="stage-plane stage-plane-front"
                    animate={{ y: [7, -7, 7] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                    }}
                  >
                    <ActiveLayerIcon size={40} strokeWidth={1.2} />
                  </motion.div>
                </div>

                <div className="stage-copy">
                  <span className="stage-label">
                    {activeLayer.number} / {activeLayer.label}
                  </span>

                  <h3>{activeLayer.title}</h3>
                  <p>{activeLayer.description}</p>

                  <div className="stage-outcome">
                    <Layers3 size={18} />
                    {activeLayer.outcome}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="lab-teaser">
        <span className="section-label">While you wait</span>

        <h2>
          You're early.
          <span className="editorial-word">You may as well have some fun.</span>
        </h2>

        <p>
          The main thing isn't ready yet. So we built a small corner of Sylvexa
          for you to play with.
        </p>

        <a className="lab-teaser-button" href="/lab">
          Enter the Sylvexa Lab
          <FlaskConical size={18} />
        </a>
      </section>

      <section className="launch-section" id="launch">
        <div className="launch-copy launch-copy-centred">
          <span className="section-label section-label-light">
            Still building
          </span>

          <h2>
            We’re making something
            <span className="editorial-word editorial-word-light">
              worth waiting for.
            </span>
          </h2>

          <p>
            Sylvexa is still taking shape. But the idea is simple: make
            technology more useful, more thoughtful, and much less annoying.
          </p>

          <a className="launch-link" href="/lab">
            Play while you wait
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#top">
          <span className="footer-brand-symbol">
            <Layers3 size={18} />
          </span>

          <span>SYLVEXA</span>
        </a>

        <p>Something better is taking shape.</p>

        <span>© {new Date().getFullYear()} Sylvexa</span>
      </footer>
    </main>
  );
}