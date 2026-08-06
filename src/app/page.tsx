"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Code2,
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
    title: "Digital Presence",
    description:
      "Digital experiences that establish authority, capture attention, and turn interest into meaningful action.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Business Systems",
    description:
      "Connected platforms, workflows, dashboards, and automations shaped around the way your business really operates.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Intelligent Assistance",
    description:
      "Focused tools that organize information, reduce repetitive work, and give your team more room to think.",
    icon: Bot,
  },
];

const systemLayers = [
  {
    id: "presence",
    number: "01",
    label: "Presence",
    title: "Make every interaction carry weight.",
    description:
      "Your website becomes an active part of the business. It communicates clearly, captures demand, and connects customers to the right next step.",
    outcome: "Position clearly. Convert deliberately. Stay memorable.",
    icon: Code2,
  },
  {
    id: "operations",
    number: "02",
    label: "Operations",
    title: "Bring scattered work into one flow.",
    description:
      "Replace fragile spreadsheets, disconnected tools, and repeated manual tasks with systems designed around your actual operation.",
    outcome: "Reduce friction. Improve visibility. Move consistently.",
    icon: Workflow,
  },
  {
    id: "intelligence",
    number: "03",
    label: "Intelligence",
    title: "Turn activity into usable direction.",
    description:
      "Focused reporting and decision-support tools surface the signals that matter, without burying your team under another dashboard.",
    outcome: "Understand faster. Decide earlier. Act with context.",
    icon: BarChart3,
  },
  {
    id: "assistance",
    number: "04",
    label: "Assistance",
    title: "Move repetitive work out of the way.",
    description:
      "Purpose-built assistants help coordinate tasks, structure information, and support the everyday work that quietly consumes entire weeks.",
    outcome: "Protect focus. Reduce admin. Increase capacity.",
    icon: Bot,
  },
];

const navigationItems = [
  {
    id: "capabilities",
    label: "Capabilities",
  },
  {
    id: "system",
    label: "System",
  },
  {
    id: "vision",
    label: "Vision",
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

  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, 75]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);

  useEffect(() => {
    const sectionIds = [
      "top",
      "capabilities",
      "system",
      "vision",
      "launch",
    ];

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
            <span className="header-brand-edition">01</span>
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
          </nav>

          <div className="header-actions">
            <div className="header-status">
              <span className="header-status-dot" />

              <span className="header-status-copy">
                <small>Status</small>
                In development
              </span>
            </div>

            <a className="header-launch-button" href="#launch">
              Enter Sylvexa
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
              initial={{
                opacity: 0,
                y: -12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -12,
              }}
              transition={{
                duration: 0.22,
              }}
            >
              <a
                href="#capabilities"
                onClick={() => setMenuOpen(false)}
              >
                <span>01</span>
                Capabilities
              </a>

              <a href="#system" onClick={() => setMenuOpen(false)}>
                <span>02</span>
                System
              </a>

              <a href="#vision" onClick={() => setMenuOpen(false)}>
                <span>03</span>
                Vision
              </a>

              <a href="#launch" onClick={() => setMenuOpen(false)}>
                <span>04</span>
                Enter Sylvexa
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
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
            }}
          >
            <Sparkles size={15} />
            The operating layer for modern business
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 45,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.85,
              delay: 0.08,
            }}
          >
            Run less
            <span className="editorial-word">manually.</span>
            <strong>Move more intelligently.</strong>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 26,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.2,
            }}
          >
            Sylvexa connects presence, operations, intelligence, and
            assistance into one deliberate digital environment built around
            how your business moves.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >
            <a className="primary-button" href="#system">
              Experience the system
              <ArrowRight size={17} />
            </a>

            <span className="launch-status">
              <span className="status-indicator" />
              Taking shape
            </span>
          </motion.div>
        </motion.div>

        <div className="scroll-marker">
          <MousePointer2 size={15} />
          Scroll to enter
        </div>
      </section>

      <section className="capabilities-section" id="capabilities">
        <div className="section-introduction centred-introduction">
          <span className="section-label">The structure</span>

          <h2>
            One connected system.
            <span className="editorial-word">
              Three essential layers.
            </span>
          </h2>

          <p>
            Sylvexa is not a collection of unrelated services. Each
            capability strengthens the next, creating a digital foundation
            that works as one.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.article
                className="capability-card"
                key={capability.title}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -12,
                  rotateX: 2,
                  rotateY: index === 0 ? -2 : index === 2 ? 2 : 0,
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

      <section className="dark-interlude">
        <div className="dark-orbit" aria-hidden="true">
          <motion.div
            className="orbit-ring orbit-ring-one"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="orbit-ring orbit-ring-two"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="orbit-centre">
            <Layers3 size={38} strokeWidth={1.2} />
          </div>

          <span className="orbit-point orbit-point-one" />
          <span className="orbit-point orbit-point-two" />
          <span className="orbit-point orbit-point-three" />
        </div>

        <motion.div
          className="dark-interlude-copy"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.75,
          }}
        >
          <span className="section-label section-label-light">
            Beyond the website
          </span>

          <h2>
            Your digital presence should not be disconnected from the
            business behind it.
          </h2>

          <p>
            Sylvexa closes the distance between what customers see, what your
            team does, and what your business needs to know next.
          </p>
        </motion.div>
      </section>

      <section className="system-section" id="system">
        <div className="section-introduction centred-introduction">
          <span className="section-label">Explore the system</span>

          <h2>
            Select a layer.
            <span className="editorial-word">See the shift.</span>
          </h2>

          <p>
            Move through the system to see how each layer changes a different
            part of the business.
          </p>
        </div>

        <div className="system-interface">
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
                  className={`system-tab ${
                    selected ? "is-active" : ""
                  }`}
                  onClick={() => setActiveLayer(layer)}
                >
                  <span className="tab-number">{layer.number}</span>
                  <Icon size={19} strokeWidth={1.6} />
                  <strong>{layer.label}</strong>
                </button>
              );
            })}
          </div>

          <div className="system-stage">
            <div className="stage-grid" aria-hidden="true" />

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
                  y: -12,
                }}
                transition={{
                  duration: 0.38,
                  ease: "easeOut",
                }}
              >
                <div className="stage-visual">
                  <motion.div
                    className="stage-plane stage-plane-back"
                    animate={{
                      y: [-6, 6, -6],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="stage-plane stage-plane-front"
                    animate={{
                      y: [7, -7, 7],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ActiveLayerIcon size={40} strokeWidth={1.2} />
                  </motion.div>

                  <span className="stage-node stage-node-one" />
                  <span className="stage-node stage-node-two" />
                  <span className="stage-node stage-node-three" />
                </div>

                <div className="stage-copy">
                  <span className="stage-label">
                    {activeLayer.number} / {activeLayer.label}
                  </span>

                  <h3>{activeLayer.title}</h3>
                  <p>{activeLayer.description}</p>

                  <div className="stage-outcome">
                    <Layers3 size={18} strokeWidth={1.5} />
                    <span>{activeLayer.outcome}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="vision-section" id="vision">
        <div className="vision-sticky">
          <span className="section-label">The idea</span>

          <h2>
            Technology should make the business feel more
            <span className="editorial-word">coherent.</span>
          </h2>
        </div>

        <div className="vision-stories">
          <motion.article
            initial={{
              opacity: 0.25,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              amount: 0.5,
            }}
          >
            <span>01</span>
            <h3>Fewer disconnected surfaces.</h3>

            <p>
              Your website, workflows, reporting, and internal tools should
              reinforce one another rather than live in separate digital
              worlds.
            </p>
          </motion.article>

          <motion.article
            initial={{
              opacity: 0.25,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              amount: 0.5,
            }}
          >
            <span>02</span>
            <h3>More visible momentum.</h3>

            <p>
              Better systems make progress easier to see, decisions easier to
              make, and the next action easier to understand.
            </p>
          </motion.article>

          <motion.article
            initial={{
              opacity: 0.25,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              amount: 0.5,
            }}
          >
            <span>03</span>
            <h3>Technology shaped around people.</h3>

            <p>
              The system should support your team’s thinking, not force them
              to adapt to another generic tool built for nobody in
              particular.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="launch-section" id="launch">
        <div className="launch-object" aria-hidden="true">
          <motion.div
            className="launch-cube"
            animate={{
              rotateX: [58, 64, 58],
              rotateY: [0, 12, 0],
              rotateZ: [45, 50, 45],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="cube-face cube-face-front" />
            <div className="cube-face cube-face-back" />

            <div className="cube-face cube-face-middle">
              <Layers3 size={40} strokeWidth={1.15} />
            </div>
          </motion.div>
        </div>

        <div className="launch-copy">
          <span className="section-label section-label-light">
            Coming into focus
          </span>

          <h2>
            A clearer way to build,
            <span className="editorial-word editorial-word-light">
              operate and grow.
            </span>
          </h2>

          <p>
            Sylvexa is being shaped for businesses that have outgrown
            scattered tools, generic digital experiences, and systems that
            create more work than they remove.
          </p>

          <a className="launch-link" href="mailto:hello@sylvexa.com">
            Start a conversation
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#top">
          <span className="footer-brand-symbol">
            <Layers3 size={18} strokeWidth={1.7} />
          </span>

          <span>SYLVEXA</span>
        </a>

        <p>Build the business behind the brand.</p>

        <span>© {new Date().getFullYear()} Sylvexa</span>
      </footer>
    </main>
  );
}