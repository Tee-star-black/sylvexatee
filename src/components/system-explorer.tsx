"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Code2,
  Layers3,
  Workflow,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const systems = [
  {
    id: "presence",
    number: "01",
    label: "Digital Presence",
    title: "Turn attention into momentum.",
    description:
      "Websites and digital experiences that do more than look polished. They communicate clearly, capture demand, and connect directly to the way your business operates.",
    outcome: "Stronger positioning. Better conversion. Clearer customer journeys.",
    icon: Code2,
  },
  {
    id: "operations",
    number: "02",
    label: "Connected Operations",
    title: "Replace scattered work with one clear flow.",
    description:
      "Dashboards, workflows, automations, and internal systems designed around how your business actually runs.",
    outcome: "Less duplication. Fewer bottlenecks. More visibility.",
    icon: Workflow,
  },
  {
    id: "intelligence",
    number: "03",
    label: "Business Intelligence",
    title: "See what matters before it becomes urgent.",
    description:
      "Useful reporting and decision-support tools that turn business activity into focused, understandable information.",
    outcome: "Faster decisions. Better context. More control.",
    icon: BarChart3,
  },
  {
    id: "assistance",
    number: "04",
    label: "Intelligent Assistance",
    title: "Give repetitive work somewhere else to live.",
    description:
      "Purpose-built assistants that support teams, organize information, and reduce the administrative weight of everyday operations.",
    outcome: "Less manual effort. More focused teams. Better execution.",
    icon: Bot,
  },
];

export function SystemExplorer() {
  const [activeSystem, setActiveSystem] = useState(systems[0]);

  const ActiveIcon = activeSystem.icon;

  return (
    <section className="system-explorer" id="system">
      <div className="explorer-heading">
        <div>
          <span className="section-kicker">Explore the system</span>
          <h2>See how the pieces connect.</h2>
        </div>

        <p>
          Select a layer to understand how Sylvexa helps shape a more connected
          and capable business.
        </p>
      </div>

      <div className="explorer-layout">
        <div className="system-list" role="tablist">
          {systems.map((system) => {
            const Icon = system.icon;
            const isActive = activeSystem.id === system.id;

            return (
              <button
                key={system.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`system-button ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveSystem(system)}
              >
                <span className="system-button-number">{system.number}</span>

                <span className="system-button-icon">
                  <Icon size={20} strokeWidth={1.7} />
                </span>

                <span className="system-button-label">{system.label}</span>

                <ArrowUpRight
                  className="system-button-arrow"
                  size={17}
                  strokeWidth={1.7}
                />
              </button>
            );
          })}
        </div>

        <div className="system-display">
          <div className="system-display-grid" aria-hidden="true">
            <div className="system-node node-one" />
            <div className="system-node node-two" />
            <div className="system-node node-three" />
            <div className="system-connector connector-one" />
            <div className="system-connector connector-two" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSystem.id}
              className="system-content"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="system-content-top">
                <div className="system-main-icon">
                  <ActiveIcon size={30} strokeWidth={1.5} />
                </div>

                <span>{activeSystem.number}</span>
              </div>

              <div>
                <span className="system-label">{activeSystem.label}</span>
                <h3>{activeSystem.title}</h3>
                <p>{activeSystem.description}</p>
              </div>

              <div className="system-outcome">
                <Layers3 size={18} strokeWidth={1.6} />
                <span>{activeSystem.outcome}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}