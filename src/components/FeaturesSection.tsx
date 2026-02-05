"use client";

import { motion } from "framer-motion";
import {
  ScanSearch,
  GitMerge,
  FileText,
  Users,
  Plug,
  BarChart3,
  Globe,
  ShieldAlert,
} from "lucide-react";

const features = [
  {
    icon: ScanSearch,
    title: "OCR & Extraction IA",
    description:
      "Scannez vos factures, rapports internes et documents RH. Notre IA extrait automatiquement les données ESG pertinentes.",
  },
  {
    icon: GitMerge,
    title: "Mapping ESRS Automatique",
    description:
      "Association intelligente de chaque donnée aux standards ESRS correspondants (E1-E5, S1-S4, G1).",
  },
  {
    icon: FileText,
    title: "Génération de Rapport",
    description:
      "Rapport de durabilité complet généré automatiquement, conforme aux exigences de la directive CSRD.",
  },
  {
    icon: ShieldAlert,
    title: "Auditor Mode",
    description:
      "Mode de revue pré-audit qui identifie les faiblesses et écarts avant la vérification par votre CAC.",
  },
  {
    icon: Users,
    title: "Multi-filiales",
    description:
      "Consolidation automatique des données de toutes vos entités. Chaque filiale contribue, le siège consolide.",
  },
  {
    icon: Plug,
    title: "Connecteurs ERP",
    description:
      "Intégration native avec SAP, Oracle, Sage et vos principaux outils. Import API automatisé.",
  },
  {
    icon: BarChart3,
    title: "Dashboard en temps réel",
    description:
      "Suivez votre score de complétude, les écarts de conformité et le time-to-report en temps réel.",
  },
  {
    icon: Globe,
    title: "Accès Auditeur",
    description:
      "Donnez un accès en lecture seule à votre auditeur externe. Dossier de preuves accessible 24/7.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Fonctionnalités
          </span>
          <h2 className="mt-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Tout ce qu&apos;il faut pour être{" "}
            <span className="text-primary">conforme</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Une plateforme complète qui couvre l&apos;intégralité du cycle de
            reporting CSRD.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group rounded-2xl border border-border p-6 transition-all hover:border-primary/20 hover:bg-surface hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                <feature.icon size={20} className="text-primary" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
