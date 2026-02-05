"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, BadgeEuro } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Directive CSRD 2024 — Mise en conformite obligatoire
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Votre rapport CSRD,{" "}
            <span className="bg-gradient-to-r from-primary to-teal-500 bg-clip-text text-transparent">
              automatise par l&apos;IA
            </span>
            <br />
            en 3 semaines.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            ESGIO collecte vos donnees, mappe les 12 standards ESRS et genere un
            rapport <strong className="text-foreground">audit-ready</strong>{" "}
            pour votre Commissaire aux Comptes. Sans cabinet de conseil.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#cta"
              className="group flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
            >
              Demander une demo gratuite
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#solution"
              className="flex items-center gap-2 rounded-xl border border-border bg-white px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-surface"
            >
              Decouvrir la solution
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10"
          >
            <div className="flex items-center gap-2 text-sm text-muted">
              <Clock size={16} className="text-primary" />
              <span>
                <strong className="text-foreground">3 semaines</strong> au lieu
                de 6 mois
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <BadgeEuro size={16} className="text-primary" />
              <span>
                <strong className="text-foreground">75% moins cher</strong>{" "}
                qu&apos;un Big Four
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <ShieldCheck size={16} className="text-primary" />
              <span>
                <strong className="text-foreground">Audit-ready</strong>{" "}
                garanti
              </span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="rounded-2xl border border-border bg-white p-2 shadow-2xl shadow-black/5">
            <div className="rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 sm:p-10">
              {/* Mock Dashboard */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-muted font-mono">
                  dashboard.esgio.com
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <DashboardCard
                  label="Score de Completude"
                  value="87%"
                  trend="+12% ce mois"
                  color="text-primary"
                />
                <DashboardCard
                  label="Standards ESRS Couverts"
                  value="10/12"
                  trend="2 en cours"
                  color="text-amber-600"
                />
                <DashboardCard
                  label="Time-to-Report"
                  value="18 jours"
                  trend="-4 jours vs. Q3"
                  color="text-green-600"
                />
              </div>

              {/* Progress bars */}
              <div className="mt-8 space-y-3">
                <ProgressBar label="E1 - Changement climatique" progress={95} />
                <ProgressBar
                  label="S1 - Effectifs de l'entreprise"
                  progress={82}
                />
                <ProgressBar
                  label="G1 - Conduite des affaires"
                  progress={71}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DashboardCard({
  label,
  value,
  trend,
  color,
}: {
  label: string;
  value: string;
  trend: string;
  color: string;
}) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm border border-slate-100">
      <p className="text-xs font-medium uppercase tracking-wider text-muted">
        {label}
      </p>
      <p className={`mt-2 text-3xl font-bold ${color}`}>{value}</p>
      <p className="mt-1 text-xs text-muted">{trend}</p>
    </div>
  );
}

function ProgressBar({
  label,
  progress,
}: {
  label: string;
  progress: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm font-semibold text-primary">{progress}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-200">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-primary to-teal-400 transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
