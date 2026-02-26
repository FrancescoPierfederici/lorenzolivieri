import { Mail, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contatti" className="section-padding">
      <div className="container-narrow text-center max-w-2xl">
        <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
          Indagini aperte
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
          Contatti
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          Per collaborazioni, presentazioni, eventi letterari o semplicemente
          per condividere una teoria sul colpevole.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:marco.ferretti@esempio.it"
            className="flex items-center gap-3 px-6 py-3 border border-border rounded-sm text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
          >
            <Mail size={18} />
            <span className="text-sm font-medium">marco.ferretti@esempio.it</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Facebook"
          >
            <Facebook size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
