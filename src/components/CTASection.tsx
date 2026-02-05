"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="bg-slate-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-primary to-teal-600 p-8 text-center sm:p-12 lg:p-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white">
              <ShieldCheck size={16} />
              Mise en conformite CSRD
            </div>
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ne risquez pas 75 000 € d&apos;amende.
              <br />
              <span className="text-teal-200">
                Automatisez votre conformite.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-teal-100">
              Rejoignez les entreprises qui ont deja automatise leur reporting
              CSRD avec ESGIO. Demo personnalisee en 30 minutes.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:contact@esgio.com"
                className="group flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
              >
                <Phone size={18} />
                Planifier ma demo gratuite
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 text-sm text-teal-200 sm:flex-row sm:gap-8">
              <div className="flex items-center gap-2">
                <Clock size={14} />
                Demo de 30 min
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} />
                Sans engagement
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} />
                Resultat sous 3 semaines
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
