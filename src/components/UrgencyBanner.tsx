"use client";

import { useState } from "react";
import { X, AlertTriangle } from "lucide-react";

export default function UrgencyBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-[60] bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2.5 text-center text-sm font-medium text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
        <AlertTriangle size={14} className="shrink-0" />
        <span>
          <strong>CSRD 2025 :</strong> Les premières entreprises doivent publier
          leur rapport de durabilité cette année.{" "}
          <a
            href="#cta"
            className="underline underline-offset-2 hover:no-underline"
          >
            Vérifiez votre éligibilité →
          </a>
        </span>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 transition-colors hover:bg-white/20"
          aria-label="Fermer"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
