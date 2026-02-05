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
    <section id="pricing" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Tarifs
          </span>
          <h2 className="mt-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Un investissement,{" "}
            <span className="text-primary">pas un coût</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            75% moins cher qu&apos;un cabinet de conseil. ROI immédiat dès le
            premier rapport.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6 mx-auto max-w-4xl">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl border p-8 lg:p-10 ${
                plan.highlighted
                  ? "border-primary bg-primary/[0.02] shadow-lg shadow-primary/10"
                  : "border-border bg-white"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-foreground">
                  {plan.price}€
                </span>
                <span className="text-muted">{plan.period}</span>
              </div>
              <p className="mt-1 text-xs text-muted">HT — Engagement annuel</p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-dark"
                    : "border border-border bg-surface text-foreground hover:border-primary/30 hover:bg-primary/5"
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <h3 className="text-center text-lg font-semibold text-foreground mb-6">
            Add-ons à haute valeur ajoutée
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-foreground">{addon.name}</h4>
                  <span className="text-sm font-bold text-primary">
                    {addon.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted">{addon.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Modèle Wholesale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-4xl rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center"
        >
          <h3 className="text-xl font-bold text-foreground">
            Vous êtes un cabinet d&apos;expertise comptable ?
          </h3>
          <p className="mt-2 text-muted">
            Découvrez notre modèle Partenaire (Wholesale). Utilisez ESGIO pour
            servir vos propres clients avec une licence par dossier. Marge
            garantie.
          </p>
          <a
            href="#cta"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
          >
            Devenir Partenaire
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
