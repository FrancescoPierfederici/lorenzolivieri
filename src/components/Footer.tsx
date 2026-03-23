const Footer = () => {
  return (
    <footer className="border-t border-border py-6 sm:py-8 px-6 lg:px-24">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <p className="font-serif text-xs sm:text-sm text-muted-foreground">
          © 2026 <span className="text-primary">Lorenzo Livieri</span>. Tutti i diritti riservati. <span className="text-primary">Lorenzo Livieri</span>. Tutti i diritti riservati.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="/privacy"
            className="text-xs text-muted-foreground tracking-widest uppercase hover:text-primary transition-colors"
          >
            Privacy Policy
          </a>
          <span className="text-muted-foreground/30">|</span>
          <p className="text-xs text-muted-foreground tracking-widest uppercase">
            Senigallia, Marche — Italia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
