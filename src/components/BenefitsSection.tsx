"use client";

import { motion } from "framer-motion";
import {
  Zap,
  TrendingDown,
  ShieldCheck,
  Database,
  RefreshCw,
  Lock,
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "6 mois → 3 semaines",
    description:
      "Notre IA automatise la collecte, le mapping et la génération du rapport. Réduisez votre cycle de reporting de 85%.",
    stat: "85%",
    statLabel: "plus rapide",
    accent: "from-primary to-teal-400",
  },
  {
    icon: TrendingDown,
    title: "75% moins cher",
    description:
      "Éliminez les centaines de jours-hommes de conseil. ESGIO remplace un budget Big Four à 6 chiffres par un abonnement mensuel.",
    stat: "75%",
    statLabel: "d'économie",
    accent: "from-indigo-500 to-violet-500",
  },
  {
    icon: ShieldCheck,
    title: "Rapport Audit-Ready",
    description:
      "Chaque donnée est sourcée, tracée et documentée. Votre Commissaire aux Comptes reçoit un dossier de preuves inattaquable.",
    stat: "100%",
    statLabel: "traçabilité",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: Database,
    title: "IA sectorielle",
    description:
      "Plus ESGIO analyse de rapports, plus son IA est précise pour votre secteur. Luxe, Industrie, Tech : des recommandations ciblées.",
    stat: "12",
    statLabel: "standards ESRS",
    accent: "from-amber-500 to-orange-500",
  },
  {
    icon: RefreshCw,
    title: "Mises à jour réglementaires",
    description:
      "Dès que l'EFRAG modifie un standard, ESGIO est mis à jour. Vous restez toujours conforme sans effort supplémentaire.",
    stat: "24h",
    statLabel: "de réactivité",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    icon: Lock,
    title: "Hébergement souverain EU",
    description:
      "Vos données financières et sociales sont hébergées exclusivement dans l'Union Européenne. Conformité RGPD garantie.",
    stat: "EU",
    statLabel: "souverain",
    accent: "from-primary to-emerald-500",
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-[13px] font-semibold text-primary">
            Avantages
          </span>
          <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            Pourquoi les entreprises choisissent{" "}
            <span className="text-primary">ESGIO</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 lg:p-7"
            >
              {/* Gradient accent line */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${benefit.accent} opacity-0 transition-opacity group-hover:opacity-100`} />

              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/[0.06] ring-1 ring-primary/[0.08] transition-all group-hover:bg-primary/10 group-hover:ring-primary/15">
                  <benefit.icon size={20} className="text-primary" />
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold tracking-tight text-foreground">
                    {benefit.stat}
                  </span>
                  <p className="text-[11px] font-medium text-muted">{benefit.statLabel}</p>
                </div>
              </div>
              <h3 className="mt-4 text-[15px] font-bold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
