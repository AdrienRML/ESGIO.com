"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, BadgeEuro, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
      {/* Dot grid background */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/10 via-teal-400/8 to-transparent blur-[100px]" />
        <div className="absolute top-1/3 -left-32 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-500/6 via-primary/5 to-transparent blur-[100px]" />
        <div className="absolute -bottom-20 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-t from-primary/6 to-transparent blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 backdrop-blur-md px-4 py-1.5 text-[13px] font-semibold text-primary shadow-sm shadow-primary/5">
              <Sparkles size={13} className="text-primary" />
              Directive CSRD 2024 — Mise en conformité obligatoire
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-8 text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-[4rem]"
          >
            Votre rapport CSRD,{" "}
            <span className="bg-gradient-to-r from-primary via-teal-400 to-cyan-500 bg-clip-text text-transparent animate-gradient-text">
              automatisé par l&apos;IA
            </span>
            <br />
            en 3 semaines.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-[1.125rem] leading-[1.7] text-muted"
          >
            ESGIO collecte vos données, mappe les 12 standards ESRS et génère un
            rapport <strong className="font-semibold text-foreground">audit-ready</strong>{" "}
            pour votre Commissaire aux Comptes. Sans cabinet de conseil.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <a
              href="#cta"
              className="group relative flex items-center gap-2.5 rounded-2xl bg-foreground px-8 py-4 text-[15px] font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-black/10 active:scale-[0.98]"
            >
              Demander une démo gratuite
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#solution"
              className="flex items-center gap-2 rounded-2xl border border-border bg-white px-8 py-4 text-[15px] font-semibold text-foreground transition-all hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 active:scale-[0.98]"
            >
              Découvrir la solution
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8"
          >
            {[
              { icon: Clock, label: "3 semaines", sub: "au lieu de 6 mois" },
              { icon: BadgeEuro, label: "75% moins cher", sub: "qu'un Big Four" },
              { icon: ShieldCheck, label: "Audit-ready", sub: "garanti" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2.5 rounded-full border border-border/60 bg-white/60 backdrop-blur-sm px-4 py-2 shadow-sm">
                <badge.icon size={15} className="text-primary" />
                <span className="text-[13px] text-muted">
                  <strong className="font-semibold text-foreground">{badge.label}</strong>{" "}
                  {badge.sub}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dashboard Preview - Bento style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-20 max-w-5xl"
        >
          <div className="gradient-border overflow-hidden rounded-2xl shadow-2xl shadow-black/8">
            <div className="rounded-2xl bg-white p-1.5">
              <div className="rounded-xl bg-gradient-to-b from-slate-50 to-white p-5 sm:p-8">
                {/* Browser chrome */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FDBB2E]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#27CA40]" />
                  </div>
                  <div className="flex-1 rounded-lg bg-slate-100 px-4 py-1.5 text-xs text-slate-400 font-mono">
                    dashboard.esgio.com
                  </div>
                </div>

                {/* Bento grid */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <BentoCard
                    label="Score de Complétude"
                    value="87%"
                    trend="+12%"
                    trendLabel="ce mois"
                    color="primary"
                  />
                  <BentoCard
                    label="Standards ESRS"
                    value="10/12"
                    trend="2"
                    trendLabel="en cours"
                    color="amber"
                  />
                  <BentoCard
                    label="Time-to-Report"
                    value="18j"
                    trend="-4j"
                    trendLabel="vs. Q3"
                    color="green"
                  />
                </div>

                {/* Progress section */}
                <div className="mt-4 rounded-xl bg-white border border-slate-100 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Progression ESRS</span>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">En cours</span>
                  </div>
                  <div className="space-y-3">
                    <ProgressBar label="E1 - Changement climatique" progress={95} />
                    <ProgressBar label="S1 - Effectifs de l'entreprise" progress={82} />
                    <ProgressBar label="G1 - Conduite des affaires" progress={71} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BentoCard({
  label,
  value,
  trend,
  trendLabel,
  color,
}: {
  label: string;
  value: string;
  trend: string;
  trendLabel: string;
  color: "primary" | "amber" | "green";
}) {
  const colors = {
    primary: { value: "text-primary", bg: "bg-primary/5", badge: "text-primary bg-primary/10" },
    amber: { value: "text-amber-600", bg: "bg-amber-50", badge: "text-amber-600 bg-amber-100" },
    green: { value: "text-emerald-600", bg: "bg-emerald-50", badge: "text-emerald-600 bg-emerald-100" },
  };
  const c = colors[color];

  return (
    <div className={`rounded-xl ${c.bg} border border-white p-5`}>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>
      <div className="mt-2 flex items-end justify-between">
        <p className={`text-3xl font-extrabold tracking-tight ${c.value}`}>{value}</p>
        <span className={`rounded-md px-2 py-0.5 text-[11px] font-bold ${c.badge}`}>
          {trend} <span className="font-medium opacity-70">{trendLabel}</span>
        </span>
      </div>
    </div>
  );
}

function ProgressBar({ label, progress }: { label: string; progress: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[13px] font-medium text-slate-600">{label}</span>
        <span className="text-[13px] font-bold text-primary">{progress}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-teal-400"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
