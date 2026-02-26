import bookEmerge from "@/assets/book-emerge.jpg";

const LatestBookSection = () => {
  return (
    <section id="focus-libro" className="relative overflow-hidden">
      {/* Full-bleed immersive background */}
      <img
        src={bookEmerge}
        alt="Personaggio che emerge dal libro - L'Ombra del Porto"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

      <div className="relative z-10 px-6 py-24 md:px-12 md:py-32 lg:px-24 lg:py-40">
        <div className="container-narrow">
          <div className="max-w-lg space-y-6">
            <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-primary animate-flicker">
              Ultimo libro · 2024
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground text-balance text-glow">
              L'Ombra del Porto
            </h2>
            <blockquote className="border-l-2 border-primary pl-5 sm:pl-6 italic text-base sm:text-lg text-muted-foreground leading-relaxed font-serif">
              "Il porto non dimentica mai. Le sue acque scure custodiscono i nomi
              di chi non è più tornato — e di chi li ha fatti sparire."
            </blockquote>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Senigallia, 1978. Un corpo riemerge dalle acque del porto dopo trent'anni.
              L'ispettore Morandi dovrà scavare nei segreti di tre famiglie
              per scoprire che la verità più pericolosa è quella che nessuno vuole ascoltare.
            </p>
            <a
              href="#"
              className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-primary-foreground font-semibold text-xs sm:text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-all duration-300 animate-pulse-glow"
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
