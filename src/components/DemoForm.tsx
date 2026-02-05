"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Building2,
  Mail,
  User,
  Phone,
} from "lucide-react";

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="cta" className="bg-slate-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-light">
              <ShieldCheck size={16} />
              Mise en conformité CSRD
            </div>
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ne risquez pas
              <br />
              <span className="text-red-400">75 000 € d&apos;amende.</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Planifiez votre démo personnalisée avec un expert CSRD. En 30
              minutes, découvrez exactement comment ESGIO s&apos;applique à
              votre entreprise.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Démo personnalisée sur vos données",
                "Analyse gratuite de votre éligibilité CSRD",
                "Estimation du time-to-report pour votre cas",
                "Sans engagement, sans carte bancaire",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-primary" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Clock size={14} />
                30 min
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} />
                Gratuit
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8 text-center lg:p-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <CheckCircle2 size={32} className="text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  Demande envoyée !
                </h3>
                <p className="mt-2 text-slate-400">
                  Notre équipe vous contactera sous 24h pour planifier votre
                  démo personnalisée.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-8 lg:p-10"
              >
                <h3 className="text-xl font-bold text-white">
                  Demander une démo gratuite
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Remplissez le formulaire, nous vous recontactons sous 24h.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Nom complet
                    </label>
                    <div className="relative">
                      <User
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Jean Dupont"
                        className="w-full rounded-lg border border-slate-600 bg-slate-700/50 py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Email professionnel
                    </label>
                    <div className="relative">
                      <Mail
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                      />
                      <input
                        type="email"
                        required
                        placeholder="jean@entreprise.com"
                        className="w-full rounded-lg border border-slate-600 bg-slate-700/50 py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Entreprise
                    </label>
                    <div className="relative">
                      <Building2
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Nom de votre entreprise"
                        className="w-full rounded-lg border border-slate-600 bg-slate-700/50 py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Téléphone
                    </label>
                    <div className="relative">
                      <Phone
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                      />
                      <input
                        type="tel"
                        placeholder="+33 6 00 00 00 00"
                        className="w-full rounded-lg border border-slate-600 bg-slate-700/50 py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Nombre de salariés
                    </label>
                    <select
                      required
                      className="w-full rounded-lg border border-slate-600 bg-slate-700/50 py-3 px-4 text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="50-250">50 - 250</option>
                      <option value="250-1000">250 - 1 000</option>
                      <option value="1000-5000">1 000 - 5 000</option>
                      <option value="5000+">5 000+</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
                >
                  Planifier ma démo gratuite
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="mt-4 text-center text-xs text-slate-500">
                  En soumettant ce formulaire, vous acceptez notre{" "}
                  <a href="#" className="underline hover:text-slate-400">
                    politique de confidentialité
                  </a>
                  .
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
