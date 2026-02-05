"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Scale, FileWarning, Ban } from "lucide-react";

const painPoints = [
  {
    icon: Scale,
    title: "Obligation legale",
    description:
      "La Directive CSRD impose un rapport de durabilite audite a plus de 50 000 entreprises europeennes. Ce n'est plus optionnel.",
  },
  {
    icon: AlertTriangle,
    title: "Jusqu'a 75 000 € d'amende",
    description:
      "Les dirigeants engagent leur responsabilite penale en cas de non-conformite ou de rapport incomplet.",
  },
  {
    icon: FileWarning,
    title: "12 standards ESRS complexes",
    description:
      "Environnement, Social, Gouvernance : des centaines d'indicateurs a collecter, documenter et justifier aupres de l'auditeur.",
  },
  {
    icon: Ban,
    title: "Les cabinets Big Four facturent des fortunes",
    description:
      "Des centaines de jours-hommes, des cycles de 6 mois et des budgets a 6 chiffres pour un resultat souvent standardise.",
  },
];

export default function PainSection() {
  return (
    <section className="bg-slate-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400">
            <AlertTriangle size={14} />
            Le probleme
          </span>
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            La conformite CSRD est un{" "}
            <span className="text-red-400">cauchemar operationnel</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Sans les bons outils, votre entreprise fait face a des risques
            juridiques, financiers et reputationnels majeurs.
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
              className="group rounded-2xl border border-slate-800 bg-slate-800/50 p-6 transition-all hover:border-red-500/30 hover:bg-slate-800/80 lg:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
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
