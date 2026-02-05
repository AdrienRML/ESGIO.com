"use client";

import { motion } from "framer-motion";
import { Upload, Cpu, FileCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Importez vos donnees",
    description:
      "Connectez vos ERP, uploadez vos documents ou utilisez notre OCR intelligent. ESGIO collecte automatiquement vos donnees ESG depuis toutes vos sources.",
    highlight: "OCR & Import automatique",
  },
  {
    step: "02",
    icon: Cpu,
    title: "L'IA mappe vos ESRS",
    description:
      "Notre moteur d'IA analyse vos donnees et les associe aux 12 standards ESRS de la directive CSRD. Identification automatique des ecarts de conformite.",
    highlight: "Mapping IA intelligent",
  },
  {
    step: "03",
    icon: FileCheck,
    title: "Generez votre rapport",
    description:
      "Obtenez un rapport de durabilite complet, avec dossier de preuves integre, pret pour l'audit de votre Commissaire aux Comptes.",
    highlight: "Audit-ready en 1 clic",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            La solution
          </span>
          <h2 className="mt-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            3 etapes pour un rapport{" "}
            <span className="text-primary">CSRD conforme</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            ESGIO automatise l&apos;integralite du processus de reporting. De la
            collecte a la generation du rapport final.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-16 hidden translate-x-1/2 lg:block">
                  <ArrowRight size={20} className="text-border" />
                </div>
              )}

              <div className="group rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-primary/20">
                    {step.step}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                    <step.icon size={24} className="text-primary" />
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">
                  {step.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                  {step.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
