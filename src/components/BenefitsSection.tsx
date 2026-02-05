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
      "Notre IA automatise la collecte, le mapping et la generation du rapport. Reduisez votre cycle de reporting de 85%.",
    stat: "85%",
    statLabel: "plus rapide",
  },
  {
    icon: TrendingDown,
    title: "75% moins cher",
    description:
      "Eliminez les centaines de jours-hommes de conseil. ESGIO remplace un budget Big Four a 6 chiffres par un abonnement mensuel.",
    stat: "75%",
    statLabel: "d'economie",
  },
  {
    icon: ShieldCheck,
    title: "Rapport Audit-Ready",
    description:
      "Chaque donnee est sourcee, tracee et documentee. Votre Commissaire aux Comptes recoit un dossier de preuves inattaquable.",
    stat: "100%",
    statLabel: "tracabilite",
  },
  {
    icon: Database,
    title: "IA sectorielle",
    description:
      "Plus ESGIO analyse de rapports, plus son IA est precise pour votre secteur. Luxe, Industrie, Tech : des recommandations ciblees.",
    stat: "12",
    statLabel: "standards ESRS",
  },
  {
    icon: RefreshCw,
    title: "Mises a jour reglementaires",
    description:
      "Des que l'EFRAG modifie un standard, ESGIO est mis a jour. Vous restez toujours conforme sans effort supplementaire.",
    stat: "24h",
    statLabel: "de reactivite",
  },
  {
    icon: Lock,
    title: "Hebergement souverain EU",
    description:
      "Vos donnees financieres et sociales sont hebergees exclusivement dans l'Union Europeenne. Conformite RGPD garantie.",
    stat: "EU",
    statLabel: "souverain",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Avantages
          </span>
          <h2 className="mt-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Pourquoi les entreprises choisissent{" "}
            <span className="text-primary">ESGIO</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative rounded-2xl border border-border bg-white p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 lg:p-8"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <benefit.icon size={24} className="text-primary" />
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-primary">
                    {benefit.stat}
                  </span>
                  <p className="text-xs text-muted">{benefit.statLabel}</p>
                </div>
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
