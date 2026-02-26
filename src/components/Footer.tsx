const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6 lg:px-24">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-sm text-muted-foreground">
          © 2024 Marco Ferretti. Tutti i diritti riservati.
        </p>
        <p className="text-xs text-muted-foreground">
          Senigallia, Marche — Italia
        </p>
      </div>
    </footer>
  );
};

export default Footer;
