"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Coins, Factory, ShieldCheck } from "lucide-react";

const flywheel = [
  {
    title: "Capital Inflow",
    description: "Treasury deployment and strategic raises power hardware output.",
    icon: Coins,
  },
  {
    title: "Hardware Sales",
    description: "AI-ready miners and edge units ship with auditable inventory.",
    icon: Factory,
  },
  {
    title: "Token Buyback",
    description: "Revenue cycles back to protocol alignment and market confidence.",
    icon: ArrowRight,
  },
];

const tokenomics = [
  { label: "Ecosystem", value: 50, color: "bg-cyan-300" },
  { label: "Protocol", value: 29, color: "bg-cyan-500" },
  { label: "Investors", value: 15, color: "bg-cyan-700" },
];

export default function Home() {
  return (
    <main className="tech-grid relative overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-8 md:px-10 md:py-14">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="glass-panel flex items-center justify-between rounded-xl px-5 py-3"
        >
          <span className="section-heading text-sm font-semibold text-cyan-300">
            TrixLabs
          </span>
          <span className="flex items-center gap-2 text-xs tracking-[0.2em] text-cyan-100/80 uppercase">
            <ShieldCheck className="h-4 w-4 text-cyan-300" />
            Verified Inventory
          </span>
        </motion.header>

        <section className="grid items-center gap-8 py-6 md:grid-cols-2 md:py-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="section-heading text-sm text-cyan-300">Web3 AI Hardware Manufacturer</p>
            <h1 className="section-heading text-4xl leading-tight text-cyan-50 md:text-5xl">
              Bridging Digital Crypto &amp; Physical Reality
            </h1>
            <p className="max-w-xl text-base text-cyan-50/80 md:text-lg">
              TrixLabs delivers industrial-grade, real-world AI compute hardware backed by transparent
              stock and verifiable operations.
            </p>
            <div className="flex gap-3">
              <button className="cursor-pointer rounded-md border border-cyan-300/70 bg-cyan-300/15 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/25">
                Explore Inventory
              </button>
              <button className="cursor-pointer rounded-md border border-cyan-200/25 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/70">
                Read Whitepaper
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-panel flex min-h-[280px] items-center justify-center rounded-2xl p-8"
          >
            <div className="cube-scene">
              <div className="cube">
                <div className="cube-face face-front" />
                <div className="cube-face face-back" />
                <div className="cube-face face-right" />
                <div className="cube-face face-left" />
                <div className="cube-face face-top" />
                <div className="cube-face face-bottom" />
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="glass-panel rounded-2xl p-6 md:p-8"
        >
          <h2 className="section-heading text-2xl text-cyan-100 md:text-3xl">Mission</h2>
          <p className="mt-4 text-cyan-50/80">
            The market suffers from a Vaporware Crisis: empty claims, no hardware, no delivery proof. TrixLabs
            fixes this with real inventory, industrial partnerships, and assets that can be audited in the physical world.
          </p>
        </motion.section>

        <section className="space-y-4">
          <h2 className="section-heading text-2xl text-cyan-100 md:text-3xl">Flywheel</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {flywheel.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="glass-panel rounded-xl p-5"
              >
                <item.icon className="mb-4 h-6 w-6 text-cyan-300" />
                <h3 className="section-heading text-lg text-cyan-100">{item.title}</h3>
                <p className="mt-2 text-sm text-cyan-50/75">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-2xl p-6 md:p-8"
        >
          <h2 className="section-heading text-2xl text-cyan-100 md:text-3xl">Tokenomics</h2>
          <div className="mt-5 space-y-4">
            <div className="h-3 w-full overflow-hidden rounded-full bg-cyan-950/70">
              <div className="flex h-full">
                {tokenomics.map((slice) => (
                  <div key={slice.label} className={slice.color} style={{ width: `${slice.value}%` }} />
                ))}
              </div>
            </div>
            <div className="grid gap-2 text-sm sm:grid-cols-3">
              {tokenomics.map((slice) => (
                <div key={slice.label} className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2">
                  <span className="text-cyan-100">{slice.label}</span>
                  <span className="font-semibold text-cyan-300">{slice.value}%</span>
                </div>
              ))}
            </div>
            <p className="flex items-center gap-2 text-xs tracking-[0.14em] text-cyan-100/65 uppercase">
              <Box className="h-4 w-4 text-cyan-300" />
              Asset-backed allocation designed for long-term liquidity resilience
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
