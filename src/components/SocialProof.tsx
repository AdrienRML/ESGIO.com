"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50 000+", label: "Entreprises concernées par la CSRD en Europe" },
  { value: "3 sem.", label: "Temps moyen pour générer un rapport complet" },
  { value: "12/12", label: "Standards ESRS couverts nativement" },
  { value: "99,8%", label: "Taux de disponibilité de la plateforme" },
];

const logos = [
  "PME Industrielles",
  "ETI du Luxe",
  "Cabinets Comptables",
  "Groupes Tech",
  "Grands Distributeurs",
];

const testimonials = [
  {
    quote:
      "ESGIO nous a permis de générer notre premier rapport CSRD en moins d'un mois. Notre CAC a validé le dossier de preuves sans aucune réserve. Le ROI est immédiat comparé aux devis des cabinets de conseil.",
    name: "Marie Laurent",
    initials: "ML",
    role: "Directrice RSE — ETI Industrielle (850 salariés)",
  },
  {
    quote:
      "Nous utilisons ESGIO pour accompagner nos propres clients PME dans leur conformité CSRD. La licence partenaire nous permet de proposer un service clé en main, avec une marge garantie. Un vrai game-changer pour notre cabinet.",
    name: "Philippe Moreau",
    initials: "PM",
    role: "Associé — Cabinet d'Expertise Comptable",
  },
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

        {/* Trust logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="text-center text-sm font-medium uppercase tracking-wider text-muted">
            La confiance des professionnels de tous secteurs
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {logos.map((logo) => (
              <div
                key={logo}
                className="rounded-lg border border-border bg-white px-6 py-3 text-sm font-medium text-muted"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-white p-8 lg:p-10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-base text-foreground leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
