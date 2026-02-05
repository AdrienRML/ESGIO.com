"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Solution", href: "#solution" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "Tarifs", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "top-0 bg-white/70 backdrop-blur-2xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] border-b border-black/[0.04]"
          : "top-[40px] bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[60px] items-center justify-between lg:h-[68px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <Logo size={30} />
            <span className="text-lg font-bold tracking-tight text-foreground">
              ESG<span className="text-primary">IO</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-[13px] font-medium text-muted transition-all hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <a
              href="#pricing"
              className="rounded-lg px-3.5 py-2 text-[13px] font-medium text-muted transition-colors hover:text-foreground"
            >
              Connexion
            </a>
            <a
              href="#cta"
              className="rounded-xl bg-foreground px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98]"
            >
              Demander une démo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 transition-colors hover:bg-black/5 lg:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-black/[0.04] bg-white/90 backdrop-blur-2xl lg:hidden">
          <div className="space-y-0.5 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-[14px] font-medium text-muted transition-colors hover:bg-black/[0.03] hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 border-t border-border/50 pt-3">
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl bg-foreground px-4 py-3 text-center text-[14px] font-semibold text-white"
              >
                Demander une démo
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
