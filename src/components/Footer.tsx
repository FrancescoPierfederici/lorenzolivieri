const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6 lg:px-24">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-sm text-muted-foreground">
          © 2024 <span className="text-primary">Marco Ferretti</span>. Tutti i diritti riservati.
        </p>
        <p className="text-xs text-muted-foreground tracking-widest uppercase">
          Senigallia, Marche — Italia
        </p>
      </div>
    </footer>
  );
};

export default Footer;
