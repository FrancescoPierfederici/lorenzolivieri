import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contatti" className="section-padding">
      <div className="container-narrow text-center max-w-2xl mx-auto px-4">
        <p className="text-sm sm:text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
          Restiamo in contatto
        </p>
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 sm:mb-6">
          Contatti
        </h2>
        <p className="text-base sm:text-base text-muted-foreground leading-relaxed mb-8 sm:mb-10">
          Per collaborazioni, presentazioni o eventi letterari.
        </p>

        <div className="flex flex-col items-center gap-6">
          <a
            href="mailto:lorenzo.livieri.3@gmail.com"
            className="flex items-center gap-3 px-5 sm:px-6 py-3.5 border border-border rounded-sm text-foreground hover:border-primary hover:text-primary transition-colors duration-300 text-sm sm:text-sm"
          >
            <Mail size={20} />
            <span className="font-medium">lorenzo.livieri.3@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
