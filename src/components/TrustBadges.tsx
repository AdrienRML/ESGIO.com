"use client";

import { motion } from "framer-motion";
import { Shield, Server, Lock, FileCheck, Scale, Globe } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "RGPD Conforme",
    description: "Traitement des donnees 100% conforme au reglement europeen.",
  },
  {
    icon: Server,
    title: "Hebergement EU",
    description:
      "Serveurs exclusivement situes dans l'Union Europeenne. Souverainete garantie.",
  },
  {
    icon: Lock,
    title: "Chiffrement E2E",
    description:
      "Chiffrement de bout en bout de toutes vos donnees financieres et sociales.",
  },
  {
    icon: FileCheck,
    title: "Piste d'Audit Complete",
    description:
      "Chaque action, modification et import est trace et horodate automatiquement.",
  },
  {
    icon: Scale,
    title: "Conforme EFRAG",
    description:
      "Standards mis a jour des que l'EFRAG publie une modification reglementaire.",
  },
  {
    icon: Globe,
    title: "Multi-juridictions",
    description:
      "Support des specificites reglementaires par pays au sein de l'UE.",
  },
];

export default function TrustBadges() {
  return (
    <section className="border-t border-border bg-surface py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-lg font-bold text-foreground sm:text-xl">
            Securite & Conformite de niveau entreprise
          </h3>
          <p className="mt-2 text-sm text-muted">
            Vos donnees sont protegees selon les standards les plus exigeants.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center rounded-xl border border-border bg-white p-4 text-center transition-all hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                <badge.icon size={20} className="text-slate-600" />
              </div>
              <h4 className="mt-3 text-xs font-semibold text-foreground">
                {badge.title}
              </h4>
              <p className="mt-1 text-[11px] leading-tight text-muted">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
