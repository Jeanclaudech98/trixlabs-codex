"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Cpu, Factory, ShieldCheck } from "lucide-react";

const panelIntro = {
  hidden: { opacity: 0, y: 80, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.17, 0.67, 0.2, 1] },
  },
};

const feed = [
  { label: "LOT TRACE", value: "TL-2279-AX", delta: "+14" },
  { label: "THERMAL", value: "47.2C", delta: "-03" },
  { label: "UPTIME", value: "99.982%", delta: "+01" },
  { label: "BATCH", value: "PHASE-07", delta: "+09" },
];

const rails = [
  {
    title: "Capital Rail",
    text: "Treasury rotation funds fabrication with delivery-linked checkpoints.",
    icon: Box,
  },
  {
    title: "Factory Rail",
    text: "Industrial AI compute units move from blueprint to audited shipment.",
    icon: Factory,
  },
  {
    title: "Protocol Rail",
    text: "Revenue cycles to token buyback and on-chain liquidity reinforcement.",
    icon: ArrowRight,
  },
];

export default function Home() {
  return (
    <main className="industrial-shell relative min-h-screen overflow-hidden">
      <div className="noise-layer" aria-hidden />
      <div className="blueprint-layer" aria-hidden />
      <div className="scanline-layer" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-col gap-10 px-4 py-6 md:px-8 md:py-10">
        <motion.header
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="nav-rack"
        >
          <div className="flex items-center gap-3">
            <span className="header-mark">TLX//CORE</span>
            <span className="header-tag">Industrial AI Hardware Layer</span>
          </div>
          <span className="status-chip">
            <ShieldCheck className="h-4 w-4" />
            Verified Inventory Online
          </span>
        </motion.header>

        <section className="hero-composition">
          <motion.div
            initial={{ x: -160, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-stripe"
          >
            <p className="kicker">TrixLabs / fabrication protocol</p>
            <h1 className="headline">
              BRIDGING CRYPTO CAPITAL WITH
              <span> PHYSICAL AI MACHINERY</span>
            </h1>
            <p className="hero-copy">
              The market is saturated with vaporware claims. TrixLabs deploys audited inventory, industrial
              production partners, and measurable output you can verify in the real world.
            </p>
            <div className="hero-actions">
              <button type="button" className="action-primary">
                Enter Inventory Grid
              </button>
              <button type="button" className="action-ghost">
                Open Whitepaper
              </button>
            </div>
          </motion.div>

          <motion.aside
            initial={{ x: 140, opacity: 0, rotate: 6 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="telemetry-stack"
          >
            <div className="telemetry-head">
              <Cpu className="h-5 w-5" />
              <span>Telemetry Matrix</span>
            </div>
            <div className="telemetry-grid">
              {feed.map((entry, idx) => (
                <motion.article
                  key={entry.label}
                  variants={panelIntro}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.25 + idx * 0.08 }}
                  className="telemetry-cell"
                >
                  <p>{entry.label}</p>
                  <h3>{entry.value}</h3>
                  <span>{entry.delta}</span>
                </motion.article>
              ))}
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="signal-band"
          >
            <span>Operational Throughput :: 12.6 PH/s</span>
            <span>Warehouse Count :: 03</span>
            <span>Batch Status :: Active</span>
          </motion.div>
        </section>

        <section className="rails-grid">
          {rails.map((rail, index) => (
            <motion.article
              key={rail.title}
              variants={panelIntro}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08 }}
              className="rail-card"
            >
              <rail.icon className="h-6 w-6" />
              <h2>{rail.title}</h2>
              <p>{rail.text}</p>
            </motion.article>
          ))}
        </section>

        <section className="mission-deck">
          <motion.article
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
            className="mission-panel"
          >
            <p className="panel-label">MISSION BRIEF</p>
            <h2>Zero Vapor. Deliverable Hardware.</h2>
            <p>
              TrixLabs closes the trust gap by pairing token economics with deployable machine inventory. Units,
              lots, and throughput are tracked as hard data, not narrative.
            </p>
          </motion.article>

          <motion.article
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mission-panel mission-panel-alt"
          >
            <p className="panel-label">TOKEN ALLOCATION</p>
            <div className="allocation-bar" aria-hidden>
              <span style={{ width: "50%" }} />
              <span style={{ width: "29%" }} />
              <span style={{ width: "15%" }} />
              <span style={{ width: "6%" }} />
            </div>
            <ul>
              <li>Ecosystem 50%</li>
              <li>Protocol 29%</li>
              <li>Investors 15%</li>
              <li>Liquidity 6%</li>
            </ul>
          </motion.article>
        </section>
      </div>
    </main>
  );
}
