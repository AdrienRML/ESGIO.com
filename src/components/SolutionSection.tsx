"use client";

import { motion } from "framer-motion";
import { Upload, Cpu, FileCheck } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Importez vos données",
    description:
      "Connectez vos ERP, uploadez vos documents ou utilisez notre OCR intelligent. ESGIO collecte automatiquement vos données ESG depuis toutes vos sources.",
    highlight: "OCR & Import automatique",
  },
  {
    step: "02",
    icon: Cpu,
    title: "L'IA mappe vos ESRS",
    description:
      "Notre moteur d'IA analyse vos données et les associe aux 12 standards ESRS de la directive CSRD. Identification automatique des écarts de conformité.",
    highlight: "Mapping IA intelligent",
  },
  {
    step: "03",
    icon: FileCheck,
    title: "Générez votre rapport",
    description:
      "Obtenez un rapport de durabilité complet, avec dossier de preuves intégré, prêt pour l'audit de votre Commissaire aux Comptes.",
    highlight: "Audit-ready en 1 clic",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-[13px] font-semibold text-primary">
            La solution
          </span>
          <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            3 étapes pour un rapport{" "}
            <span className="text-primary">CSRD conforme</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            ESGIO automatise l&apos;intégralité du processus de reporting. De la
            collecte à la génération du rapport final.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-12 right-0 hidden h-px w-6 translate-x-full bg-gradient-to-r from-border to-transparent lg:block" />
              )}

              <div className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 duration-300">
                {/* Step number watermark */}
                <span className="absolute -top-3 -right-2 text-[80px] font-black leading-none text-primary/[0.04]">
                  {step.step}
                </span>

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-teal-400/10 ring-1 ring-primary/[0.08]">
                    <step.icon size={22} className="text-primary" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] text-muted leading-relaxed">
                    {step.description}
                  </p>
                  <div className="mt-4 inline-flex items-center rounded-lg bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
                    {step.highlight}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
