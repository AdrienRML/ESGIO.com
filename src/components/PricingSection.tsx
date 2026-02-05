"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "PME",
    price: "199",
    period: "/mois",
    description: "Pour les entreprises mono-entité soumises à la CSRD.",
    features: [
      "Accès aux 12 standards ESRS",
      "1 utilisateur administrateur",
      "OCR & Import de documents",
      "Génération de rapport automatique",
      "Dossier de preuves intégré",
      "Support par email",
      "Hébergement EU souverain",
    ],
    cta: "Commencer l'essai gratuit",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "499",
    period: "/mois",
    description:
      "Pour les ETI et Grands Groupes avec plusieurs filiales.",
    features: [
      "Tout le plan PME, plus :",
      "Multi-filiales & consolidation",
      "Utilisateurs illimités",
      "API d'importation ERP (SAP, Oracle)",
      "Accès Lecteur pour auditeur externe",
      "Dashboard de pilotage avancé",
      "Support prioritaire & CSM dédié",
      "Connecteurs custom sur demande",
    ],
    cta: "Contacter l'équipe commerciale",
    highlighted: true,
    badge: "Le plus populaire",
  },
];

const addons = [
  {
    name: "Certification Assistée",
    price: "2 500 - 5 000 €",
    description:
      "Revue finale du rapport par notre IA 'Auditor Mode' avant soumission officielle à votre CAC.",
  },
  {
    name: "Connecteur ERP Custom",
    price: "Sur devis",
    description:
      "Intégration sur mesure avec vos systèmes complexes (SAP S/4HANA, Oracle Cloud, etc.).",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-[13px] font-semibold text-primary">
            Tarifs
          </span>
          <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            Un investissement,{" "}
            <span className="text-primary">pas un coût</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            75% moins cher qu&apos;un cabinet de conseil. ROI immédiat dès le
            premier rapport.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2 mx-auto max-w-4xl">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 lg:p-8 ${
                plan.highlighted
                  ? "gradient-border bg-white shadow-xl shadow-primary/8"
                  : "border border-border bg-white hover:shadow-lg hover:shadow-primary/5"
              }`}
            >
              {plan.badge && (
                <span className="absolute top-0 right-8 rounded-b-lg bg-foreground px-3 py-1 text-[11px] font-bold text-white uppercase tracking-wide">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-[13px] text-muted">{plan.description}</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-foreground">
                  {plan.price}€
                </span>
                <span className="text-muted text-sm">{plan.period}</span>
              </div>
              <p className="mt-1 text-[11px] text-muted">HT — Engagement annuel</p>

              <ul className="mt-6 space-y-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-[13px] text-foreground"
                  >
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-7 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-[13px] font-semibold transition-all hover:scale-[1.01] active:scale-[0.99] ${
                  plan.highlighted
                    ? "bg-foreground text-white hover:bg-foreground/90"
                    : "border border-border bg-white text-foreground hover:bg-surface"
                }`}
              >
                {plan.cta}
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <h3 className="text-center text-[13px] font-bold uppercase tracking-wider text-muted mb-4">
            Add-ons
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="rounded-xl border border-border bg-white p-5 transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-[14px] font-semibold text-foreground">{addon.name}</h4>
                  <span className="text-[13px] font-bold text-primary">
                    {addon.price}
                  </span>
                </div>
                <p className="mt-1.5 text-[13px] text-muted">{addon.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Partner wholesale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="gradient-border overflow-hidden rounded-2xl p-7 text-center">
            <h3 className="text-lg font-bold text-foreground">
              Vous êtes un cabinet d&apos;expertise comptable ?
            </h3>
            <p className="mt-2 text-[15px] text-muted">
              Découvrez notre modèle Partenaire (Wholesale). Utilisez ESGIO pour
              servir vos propres clients avec une licence par dossier.
            </p>
            <a
              href="#cta"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 text-[13px] font-semibold text-white transition-all hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98]"
            >
              Devenir Partenaire
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
