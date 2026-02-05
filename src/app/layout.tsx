import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ESGIO | Conformite CSRD automatisee par l'IA",
  description:
    "Automatisez votre reporting de durabilite CSRD/ESRS en 3 semaines au lieu de 6 mois. 75% moins cher qu'un cabinet Big Four. Rapports audit-ready garantis.",
  keywords: [
    "CSRD",
    "ESRS",
    "reporting durabilite",
    "conformite ESG",
    "IA",
    "automatisation",
    "audit",
  ],
  openGraph: {
    title: "ESGIO | Conformite CSRD automatisee par l'IA",
    description:
      "Automatisez votre reporting CSRD/ESRS. 75% moins cher. Audit-ready en 3 semaines.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
