"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const rows = [
  {
    feature: "Coût annuel moyen",
    esgio: "2 400 - 6 000 €",
    bigfour: "80 000 - 300 000 €",
    internal: "40 000 - 120 000 €",
  },
  {
    feature: "Délai de production",
    esgio: "3 semaines",
    bigfour: "4 à 6 mois",
    internal: "3 à 5 mois",
  },
  {
    feature: "Couverture 12 ESRS",
    esgio: "full",
    bigfour: "full",
    internal: "partial",
  },
  {
    feature: "Dossier de preuves automatisé",
    esgio: "full",
    bigfour: "partial",
    internal: "none",
  },
  {
    feature: "Mise à jour réglementaire auto",
    esgio: "full",
    bigfour: "none",
    internal: "none",
  },
  {
    feature: "Multi-filiales & consolidation",
    esgio: "full",
    bigfour: "full",
    internal: "partial",
  },
  {
    feature: "Accès auditeur intégré",
    esgio: "full",
    bigfour: "none",
    internal: "none",
  },
  {
    feature: "Connecteurs ERP",
    esgio: "full",
    bigfour: "partial",
    internal: "none",
  },
  {
    feature: "Indépendance (pas de dépendance conseil)",
    esgio: "full",
    bigfour: "none",
    internal: "full",
  },
];

function StatusIcon({ status }: { status: string }) {
  if (status === "full")
    return (
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
        <Check size={14} className="text-green-600" />
      </div>
    );
  if (status === "partial")
    return (
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100">
        <Minus size={14} className="text-amber-600" />
      </div>
    );
  if (status === "none")
    return (
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
        <X size={14} className="text-red-500" />
      </div>
    );
  return <span className="text-sm font-semibold text-foreground">{status}</span>;
}

export default function ComparisonSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Comparatif
          </span>
          <h2 className="mt-6 text-3xl font-bold text-foreground sm:text-4xl">
            ESGIO vs. les alternatives
          </h2>
          <p className="mt-4 text-lg text-muted">
            Comparez objectivement les options pour votre reporting CSRD.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 overflow-x-auto"
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="py-4 pr-4 text-left text-sm font-medium text-muted">
                  Critère
                </th>
                <th className="px-4 py-4 text-center">
                  <div className="rounded-xl bg-primary/5 px-4 py-2">
                    <span className="text-sm font-bold text-primary">
                      ESGIO
                    </span>
                  </div>
                </th>
                <th className="px-4 py-4 text-center text-sm font-medium text-muted">
                  Cabinet Big Four
                </th>
                <th className="pl-4 py-4 text-center text-sm font-medium text-muted">
                  Équipe interne
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.feature}
                  className={`border-b border-border ${
                    index % 2 === 0 ? "bg-surface/50" : ""
                  }`}
                >
                  <td className="py-4 pr-4 text-sm font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex justify-center">
                      <StatusIcon status={row.esgio} />
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex justify-center">
                      <StatusIcon status={row.bigfour} />
                    </div>
                  </td>
                  <td className="pl-4 py-4">
                    <div className="flex justify-center">
                      <StatusIcon status={row.internal} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
