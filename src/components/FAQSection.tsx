"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Qu'est-ce que la directive CSRD et qui est concerne ?",
    answer:
      "La Corporate Sustainability Reporting Directive (CSRD) est une directive europeenne qui oblige les entreprises a publier un rapport de durabilite audite. Depuis 2024, elle concerne progressivement toutes les entreprises de plus de 250 salaries, 50M€ de CA ou 25M€ de bilan. A terme, plus de 50 000 entreprises europeennes seront concernees.",
  },
  {
    question: "Combien de temps faut-il pour generer un rapport avec ESGIO ?",
    answer:
      "En moyenne, nos clients generent leur premier rapport CSRD complet en 3 semaines, contre 4 a 6 mois avec un processus manuel ou un cabinet de conseil. Le temps depend du volume de donnees et de la maturite ESG de votre entreprise.",
  },
  {
    question: "Est-ce que le rapport genere par ESGIO est accepte par les auditeurs ?",
    answer:
      "Oui. Chaque rapport genere par ESGIO est accompagne d'un dossier de preuves complet : chaque donnee est sourcee, datee et tracee. Notre mode 'Auditor Mode' effectue une pre-verification avant soumission. Votre Commissaire aux Comptes peut acceder au dossier en lecture seule 24/7.",
  },
  {
    question: "Quels standards ESRS sont couverts ?",
    answer:
      "ESGIO couvre nativement les 12 standards ESRS de la directive CSRD : ESRS 1 et 2 (transversaux), E1 a E5 (Environnement), S1 a S4 (Social) et G1 (Gouvernance). Le moteur de mapping IA associe automatiquement vos donnees aux indicateurs correspondants.",
  },
  {
    question: "Mes donnees sont-elles securisees ?",
    answer:
      "Absolument. Toutes les donnees sont hebergees exclusivement dans l'Union Europeenne (hebergement souverain). Nous sommes conformes au RGPD et utilisons un chiffrement de bout en bout. Vos donnees financieres et sociales ne quittent jamais l'espace europeen.",
  },
  {
    question: "Peut-on integrer ESGIO avec notre ERP existant ?",
    answer:
      "Oui. Le plan Enterprise inclut une API d'importation native compatible avec les principaux ERP (SAP, Oracle, Sage). Pour les systemes plus complexes, nous proposons des connecteurs custom sur mesure. L'import peut egalement se faire par upload de documents (OCR intelligent).",
  },
  {
    question: "Quelle est la difference avec un cabinet de conseil Big Four ?",
    answer:
      "Un cabinet Big Four facture generalement plusieurs centaines de milliers d'euros pour un reporting CSRD (centaines de jours-hommes). ESGIO automatise 80% du processus par l'IA, pour un abonnement mensuel representant 75% d'economie. Vous gardez le controle et la rapidite.",
  },
  {
    question: "Proposez-vous un essai gratuit ?",
    answer:
      "Nous proposons une demonstration personnalisee gratuite avec un expert CSRD qui vous montre exactement comment ESGIO s'applique a votre entreprise. Contactez-nous pour planifier votre demo.",
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
            Questions frequentes
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
