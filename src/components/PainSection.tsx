"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Scale, FileWarning, Ban } from "lucide-react";

const painPoints = [
  {
    icon: Scale,
    title: "Obligation légale",
    description:
      "La Directive CSRD impose un rapport de durabilité audité à plus de 50 000 entreprises européennes. Ce n'est plus optionnel.",
  },
  {
    icon: AlertTriangle,
    title: "Jusqu'à 75 000 € d'amende",
    description:
      "Les dirigeants engagent leur responsabilité pénale en cas de non-conformité ou de rapport incomplet.",
  },
  {
    icon: FileWarning,
    title: "12 standards ESRS complexes",
    description:
      "Environnement, Social, Gouvernance : des centaines d'indicateurs à collecter, documenter et justifier auprès de l'auditeur.",
  },
  {
    icon: Ban,
    title: "Les cabinets Big Four facturent des fortunes",
    description:
      "Des centaines de jours-hommes, des cycles de 6 mois et des budgets à 6 chiffres pour un résultat souvent standardisé.",
  },
];

export default function PainSection() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400">
            <AlertTriangle size={14} />
            Le problème
          </span>
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            La conformité CSRD est un{" "}
            <span className="text-red-400">cauchemar opérationnel</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Sans les bons outils, votre entreprise fait face à des risques
            juridiques, financiers et réputationnels majeurs.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl border border-slate-800/80 bg-slate-800/30 backdrop-blur-sm p-6 transition-all hover:border-red-500/30 hover:bg-slate-800/60 lg:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 ring-1 ring-red-500/20">
                <point.icon size={24} className="text-red-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {point.title}
              </h3>
              <p className="mt-2 text-slate-400 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
