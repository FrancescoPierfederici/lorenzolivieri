const Footer = () => {
  return (
    <footer className="border-t border-border py-6 sm:py-8 px-6 lg:px-24">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="font-serif text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
          <p>© 2026 <span className="text-primary">Lorenzo Livieri</span>. Tutti i diritti riservati.</p>
          <p className="mt-1">P.IVA 01236640429 — Via Marchetti 27, 60019 Senigallia (AN)</p>
        </div>
        <nav aria-label="Link legali" className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <a
            href="/privacy"
            className="text-xs text-muted-foreground tracking-widest uppercase hover:text-primary transition-colors"
          >
            Privacy Policy
          </a>
          <span aria-hidden="true" className="text-muted-foreground/30">|</span>
          <a
            href="/cookie-policy"
            className="text-xs text-muted-foreground tracking-widest uppercase hover:text-primary transition-colors"
          >
            Cookie Policy
          </a>
          <span aria-hidden="true" className="text-muted-foreground/30">|</span>
          <a
            href="/termini"
            className="text-xs text-muted-foreground tracking-widest uppercase hover:text-primary transition-colors"
          >
            Termini
          </a>
          <span aria-hidden="true" className="text-muted-foreground/30">|</span>
          <p className="text-xs text-muted-foreground tracking-widest uppercase">
            Senigallia, Marche — Italia
          </p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
