import bookEmerge from "@/assets/book-emerge.jpg";

const LatestBookSection = () => {
  return (
    <section id="focus-libro" className="relative overflow-hidden">
      {/* Full-bleed immersive background */}
      <img
        src={bookEmerge}
        alt="Personaggio che emerge dal libro - L'Ombra del Porto"
        className="absolute inset-0 w-full h-full object-cover object-right sm:object-center"
        loading="lazy"
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50 sm:from-background/95 sm:via-background/70 sm:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60 sm:to-background/50" />

      <div className="relative z-10 px-5 py-16 sm:px-6 sm:py-24 md:px-12 md:py-32 lg:px-24 lg:py-40">
        <div className="container-narrow">
          <div className="max-w-md sm:max-w-lg space-y-5 sm:space-y-6">
            <p className="text-sm sm:text-sm font-medium tracking-[0.3em] uppercase text-primary animate-flicker">
              Ultimo libro · 2024
            </p>
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance text-glow">
              L'Ombra del Porto
            </h2>
            <blockquote className="border-l-2 border-primary pl-4 sm:pl-6 italic text-base sm:text-base md:text-lg text-muted-foreground leading-relaxed font-serif">
              "Il porto non dimentica mai. Le sue acque custodiscono i nomi
              di chi non è più tornato."
            </blockquote>
            <p className="text-base sm:text-base text-muted-foreground leading-relaxed">
              Senigallia, 1978. Un corpo riemerge dal porto dopo trent'anni.
              L'ispettore Morandi scava nei segreti di tre famiglie
              per una verità che nessuno vuole ascoltare.
            </p>
            <a
              href="#"
              className="block w-full sm:w-auto sm:inline-block text-center px-6 sm:px-8 py-3.5 sm:py-3.5 bg-primary text-primary-foreground font-semibold text-sm sm:text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-all duration-300 animate-pulse-glow"
            >
              Acquista ora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBookSection;
