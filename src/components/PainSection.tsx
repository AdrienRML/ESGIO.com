"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Scale, FileWarning, Ban } from "lucide-react";

const painPoints = [
  {
    icon: Scale,
    title: "Obligation légale",
    description:
      "La Directive CSRD impose un rapport de durabilité audité à plus de 50 000 entreprises européennes. Ce n'est plus optionnel.",
    accent: "from-red-500/20 to-orange-500/20",
  },
  {
    icon: AlertTriangle,
    title: "Jusqu'à 75 000 € d'amende",
    description:
      "Les dirigeants engagent leur responsabilité pénale en cas de non-conformité ou de rapport incomplet.",
    accent: "from-red-500/20 to-pink-500/20",
  },
  {
    icon: FileWarning,
    title: "12 standards ESRS complexes",
    description:
      "Environnement, Social, Gouvernance : des centaines d'indicateurs à collecter, documenter et justifier auprès de l'auditeur.",
    accent: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: Ban,
    title: "Les Big Four facturent des fortunes",
    description:
      "Des centaines de jours-hommes, des cycles de 6 mois et des budgets à 6 chiffres pour un résultat souvent standardisé.",
    accent: "from-red-500/20 to-rose-500/20",
  },
];

export default function PainSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1120] py-20 lg:py-28">
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-red-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-[13px] font-semibold text-red-400">
            <AlertTriangle size={13} />
            Le problème
          </span>
          <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
            La conformité CSRD est un{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">cauchemar opérationnel</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Sans les bons outils, votre entreprise fait face à des risques
            juridiques, financiers et réputationnels majeurs.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:bg-white/[0.06] hover:border-white/[0.1] lg:p-8"
            >
              {/* Card glow on hover */}
              <div className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${point.accent} blur-3xl opacity-0 transition-opacity group-hover:opacity-100`} />

              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/15 to-red-500/5 ring-1 ring-red-500/20">
                  <point.icon size={20} className="text-red-400" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  {point.title}
                </h3>
                <p className="mt-2 text-[15px] text-slate-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
