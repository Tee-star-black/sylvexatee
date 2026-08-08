"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Dices,
  FlaskConical,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Timer,
  WandSparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

type Tool =
  | "reaction"
  | "decision"
  | "ideas"
  | null;

const ideaFirst = [
  "AI-powered",
  "community-led",
  "tiny",
  "premium",
  "mobile-first",
  "anonymous",
  "subscription-based",
  "voice-controlled",
];

const ideaBusiness = [
  "bakery",
  "gym",
  "taxi service",
  "dating app",
  "bookshop",
  "clinic",
  "restaurant",
  "travel company",
  "coffee shop",
  "delivery service",
];

const ideaTwist = [
  "for people who hate leaving home",
  "that only works after midnight",
  "for extremely busy parents",
  "with no screens",
  "run entirely by robots",
  "for small towns",
  "where customers set the price",
  "that rewards people for doing nothing",
];

function ReactionTest() {
  const [phase, setPhase] = useState<
    "idle" | "waiting" | "ready" | "done" | "tooEarly"
  >("idle");

  const [result, setResult] = useState<number | null>(null);

  const startedAt = useRef<number>(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const start = () => {
    setResult(null);
    setPhase("waiting");

    const delay = 1800 + Math.random() * 3000;

    timer.current = setTimeout(() => {
      startedAt.current = performance.now();
      setPhase("ready");
    }, delay);
  };

  const react = () => {
    if (phase === "waiting") {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      setPhase("tooEarly");
      return;
    }

    if (phase === "ready") {
      const time = Math.round(performance.now() - startedAt.current);

      setResult(time);
      setPhase("done");
    }
  };

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return (
    <div className="lab-tool-content">
      <div className="tool-heading">
        <span>Reaction Test</span>
        <h2>How fast are you?</h2>
        <p>
          Wait for the screen to turn green. Then click as fast as you can.
          Resist your primitive urge to click early.
        </p>
      </div>

      {phase === "idle" && (
        <button className="reaction-area reaction-idle" onClick={start}>
          <Timer size={34} />
          <strong>Start test</strong>
          <span>Click when you're ready</span>
        </button>
      )}

      {phase === "waiting" && (
        <button
          className="reaction-area reaction-waiting"
          onClick={react}
        >
          <strong>Wait for it...</strong>
        </button>
      )}

      {phase === "ready" && (
        <button
          className="reaction-area reaction-ready"
          onClick={react}
        >
          <strong>NOW!</strong>
        </button>
      )}

      {phase === "tooEarly" && (
        <div className="reaction-result">
          <Brain size={32} />

          <h3>Too early.</h3>

          <p>Your enthusiasm has betrayed you.</p>

          <button onClick={start}>
            Try again
            <RotateCcw size={16} />
          </button>
        </div>
      )}

      {phase === "done" && result !== null && (
        <div className="reaction-result">
          <span className="reaction-time">{result}ms</span>

          <h3>
            {result < 200
              ? "Suspiciously fast."
              : result < 260
                ? "Very quick."
                : result < 350
                  ? "Respectable."
                  : "The mouse survived, at least."}
          </h3>

          <button onClick={start}>
            Try again
            <RotateCcw size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

function DecisionMaker() {
  const [options, setOptions] = useState([
    "Build it",
    "Sleep on it",
    "Pretend the problem does not exist",
  ]);

  const [result, setResult] = useState<string | null>(null);

  const updateOption = (index: number, value: string) => {
    const next = [...options];
    next[index] = value;
    setOptions(next);
  };

  const addOption = () => {
    if (options.length >= 6) {
      return;
    }

    setOptions([...options, ""]);
  };

  const decide = () => {
    const available = options.filter((option) => option.trim());

    if (!available.length) {
      return;
    }

    const chosen =
      available[Math.floor(Math.random() * available.length)];

    setResult(chosen);
  };

  return (
    <div className="lab-tool-content">
      <div className="tool-heading">
        <span>Decision Maker</span>
        <h2>Outsource one decision.</h2>

        <p>
          Add your options. Sylvexa will assume absolutely no legal,
          financial, emotional, or spiritual responsibility for what happens
          next.
        </p>
      </div>

      <div className="decision-options">
        {options.map((option, index) => (
          <input
            key={index}
            value={option}
            onChange={(event) =>
              updateOption(index, event.target.value)
            }
            placeholder={`Option ${index + 1}`}
          />
        ))}
      </div>

      <div className="tool-buttons">
        <button className="tool-secondary-button" onClick={addOption}>
          Add option
        </button>

        <button className="tool-primary-button" onClick={decide}>
          Decide for me
          <Dices size={17} />
        </button>
      </div>

      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            key={result}
            className="decision-result"
            initial={{
              opacity: 0,
              y: 15,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
          >
            <span>Sylvexa has spoken</span>
            <strong>{result}</strong>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function IdeaGenerator() {
  const [idea, setIdea] = useState<string | null>(null);

  const generate = () => {
    const first =
      ideaFirst[Math.floor(Math.random() * ideaFirst.length)];

    const business =
      ideaBusiness[Math.floor(Math.random() * ideaBusiness.length)];

    const twist =
      ideaTwist[Math.floor(Math.random() * ideaTwist.length)];

    setIdea(`${first} ${business} ${twist}.`);
  };

  return (
    <div className="lab-tool-content">
      <div className="tool-heading">
        <span>Idea Machine</span>

        <h2>Generate a questionable business idea.</h2>

        <p>
          Most businesses begin with research. This one begins with three
          arrays and questionable confidence.
        </p>
      </div>

      <button className="idea-generator-button" onClick={generate}>
        <WandSparkles size={20} />
        Give me an idea
      </button>

      <AnimatePresence mode="wait">
        {idea && (
          <motion.div
            key={idea}
            className="idea-result"
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <Lightbulb size={25} />

            <p>{idea}</p>

            <button onClick={generate}>
              Another one
              <RotateCcw size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LabPage() {
  const [activeTool, setActiveTool] = useState<Tool>(null);

  const tools = [
    {
      id: "reaction" as Tool,
      number: "01",
      title: "Reaction Test",
      description:
        "Discover whether your reflexes are impressive or merely functional.",
      icon: Timer,
    },
    {
      id: "decision" as Tool,
      number: "02",
      title: "Decision Maker",
      description:
        "Hand one insignificant decision over to an algorithm.",
      icon: Dices,
    },
    {
      id: "ideas" as Tool,
      number: "03",
      title: "Idea Machine",
      description:
        "Generate business ideas nobody requested and some may regret.",
      icon: Lightbulb,
    },
  ];

  const surprise = () => {
    const choices: Tool[] = ["reaction", "decision", "ideas"];

    setActiveTool(
      choices[Math.floor(Math.random() * choices.length)],
    );
  };

  return (
    <main className="lab-page">
      <header className="lab-header">
        <a href="/" className="lab-brand">
          <span className="lab-brand-symbol">
            <FlaskConical size={18} />
          </span>

          <span>SYLVEXA / LAB</span>
        </a>

        <a href="/" className="lab-back-link">
          <ArrowLeft size={16} />
          Back to Sylvexa
        </a>
      </header>

      <section className="lab-hero">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <span className="lab-eyebrow">
            <Sparkles size={14} />
            Experimental corner
          </span>

          <h1>
            You're
            <span>early.</span>
          </h1>

          <p>
            The main thing isn't ready yet. So we left a few things here for
            you to play with.
          </p>

          <button className="surprise-button" onClick={surprise}>
            Surprise me
            <WandSparkles size={17} />
          </button>
        </motion.div>
      </section>

      <section className="lab-tools-section">
        <div className="lab-tool-grid">
          {tools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <motion.button
                key={tool.id}
                className="lab-tool-card"
                type="button"
                onClick={() => setActiveTool(tool.id)}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -8,
                }}
              >
                <div className="lab-tool-card-top">
                  <span>{tool.number}</span>
                  <Icon size={25} />
                </div>

                <div>
                  <h2>{tool.title}</h2>
                  <p>{tool.description}</p>
                </div>

                <span className="lab-tool-open">
                  Open
                  <ArrowRight size={16} />
                </span>
              </motion.button>
            );
          })}
        </div>
      </section>

      <AnimatePresence>
        {activeTool && (
          <motion.div
            className="lab-modal-backdrop"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <motion.div
              className="lab-modal"
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
            >
              <button
                type="button"
                className="lab-modal-close"
                onClick={() => setActiveTool(null)}
              >
                Close
              </button>

              {activeTool === "reaction" && <ReactionTest />}
              {activeTool === "decision" && <DecisionMaker />}
              {activeTool === "ideas" && <IdeaGenerator />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="lab-footer">
        <span>SYLVEXA / LAB</span>
        <p>More experiments coming as we build.</p>
      </footer>
    </main>
  );
}