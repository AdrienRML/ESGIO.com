"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50 000+", label: "Entreprises concernées par la CSRD en Europe" },
  { value: "3 sem.", label: "Temps moyen pour générer un rapport complet" },
  { value: "12/12", label: "Standards ESRS couverts nativement" },
  { value: "99,8%", label: "Taux de disponibilité de la plateforme" },
];

const sectors = [
  "PME Industrielles",
  "ETI du Luxe",
  "Cabinets Comptables",
  "Groupes Tech",
  "Grands Distributeurs",
];

export default function SocialProof() {
  return (
    <section className="border-y border-border bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Sectors */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="text-center text-sm font-medium uppercase tracking-wider text-muted">
            Conçu pour les professionnels de tous secteurs
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {sectors.map((sector) => (
              <div
                key={sector}
                className="rounded-lg border border-border bg-white px-6 py-3 text-sm font-medium text-muted"
              >
                {sector}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
