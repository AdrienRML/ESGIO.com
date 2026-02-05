export default function Footer() {
  return (
    <footer className="border-t border-border bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-white">E</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                ESG<span className="text-primary">IO</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted leading-relaxed">
              La plateforme IA de conformite CSRD. Automatisez votre reporting
              de durabilite et restez conforme a la reglementation europeenne.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Produit</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#solution"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Solution
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Fonctionnalites
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Tarifs
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Entreprise
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  A propos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Carrieres
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@esgio.com"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Mentions legales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Politique de confidentialite
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  CGU
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Securite & RGPD
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} ESGIO. Tous droits reserves.
            Hebergement souverain EU.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Systeme operationnel
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
