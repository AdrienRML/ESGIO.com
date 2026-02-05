"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Qu'est-ce que la directive CSRD et qui est concerné ?",
    answer:
      "La Corporate Sustainability Reporting Directive (CSRD) est une directive européenne qui oblige les entreprises à publier un rapport de durabilité audité. Depuis 2024, elle concerne progressivement toutes les entreprises de plus de 250 salariés, 50M€ de CA ou 25M€ de bilan. À terme, plus de 50 000 entreprises européennes seront concernées.",
  },
  {
    question: "Combien de temps faut-il pour générer un rapport avec ESGIO ?",
    answer:
      "En moyenne, nos clients génèrent leur premier rapport CSRD complet en 3 semaines, contre 4 à 6 mois avec un processus manuel ou un cabinet de conseil. Le temps dépend du volume de données et de la maturité ESG de votre entreprise.",
  },
  {
    question: "Est-ce que le rapport généré par ESGIO est accepté par les auditeurs ?",
    answer:
      "Oui. Chaque rapport généré par ESGIO est accompagné d'un dossier de preuves complet : chaque donnée est sourcée, datée et tracée. Notre mode 'Auditor Mode' effectue une pré-vérification avant soumission. Votre Commissaire aux Comptes peut accéder au dossier en lecture seule 24/7.",
  },
  {
    question: "Quels standards ESRS sont couverts ?",
    answer:
      "ESGIO couvre nativement les 12 standards ESRS de la directive CSRD : ESRS 1 et 2 (transversaux), E1 à E5 (Environnement), S1 à S4 (Social) et G1 (Gouvernance). Le moteur de mapping IA associe automatiquement vos données aux indicateurs correspondants.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer:
      "Absolument. Toutes les données sont hébergées exclusivement dans l'Union Européenne (hébergement souverain). Nous sommes conformes au RGPD et utilisons un chiffrement de bout en bout. Vos données financières et sociales ne quittent jamais l'espace européen.",
  },
  {
    question: "Peut-on intégrer ESGIO avec notre ERP existant ?",
    answer:
      "Oui. Le plan Enterprise inclut une API d'importation native compatible avec les principaux ERP (SAP, Oracle, Sage). Pour les systèmes plus complexes, nous proposons des connecteurs custom sur mesure. L'import peut également se faire par upload de documents (OCR intelligent).",
  },
  {
    question: "Quelle est la différence avec un cabinet de conseil Big Four ?",
    answer:
      "Un cabinet Big Four facture généralement plusieurs centaines de milliers d'euros pour un reporting CSRD (centaines de jours-hommes). ESGIO automatise 80% du processus par l'IA, pour un abonnement mensuel représentant 75% d'économie. Vous gardez le contrôle et la rapidité.",
  },
  {
    question: "Proposez-vous un essai gratuit ?",
    answer:
      "Nous proposons une démonstration personnalisée gratuite avec un expert CSRD qui vous montre exactement comment ESGIO s'applique à votre entreprise. Contactez-nous pour planifier votre démo.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            FAQ
          </span>
          <h2 className="mt-6 text-3xl font-bold text-foreground sm:text-4xl">
            Questions fréquentes
          </h2>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl border border-border bg-white overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-muted transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-border px-6 py-5">
                  <p className="text-sm text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
