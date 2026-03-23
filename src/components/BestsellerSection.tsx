import bestsellerBg from "@/assets/bestseller-bg.jpg";

const BestsellerSection = () => {
  return (
    <section id="bestseller" className="relative overflow-hidden">
      {/* Full-bleed immersive background */}
      <img
        src={bestsellerBg}
        alt="Atmosfera noir blues bar - Vincisgrassi e Rock and Roll"
        className="absolute inset-0 w-full h-full object-cover object-left sm:object-center"
        loading="lazy"
      />
      {/* Gradient overlays - mirrored (text on right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/90 to-background sm:from-transparent sm:via-background/70 sm:to-background/95" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60 sm:to-background/50" />

      <div className="relative z-10 px-5 py-16 sm:px-6 sm:py-24 md:px-12 md:py-32 lg:px-24 lg:py-40">
        <div className="container-narrow">
          <div className="flex justify-end">
            <div className="max-w-md sm:max-w-lg space-y-5 sm:space-y-6 text-right">
              <p className="text-sm sm:text-sm font-medium tracking-[0.3em] uppercase text-primary animate-flicker">
                Il mio romanzo
              </p>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance text-glow">
                Vincisgrassi & Rock and Roll
              </h2>
              <blockquote className="border-r-2 border-primary pr-4 sm:pr-6 italic text-base sm:text-base md:text-lg text-muted-foreground leading-relaxed font-serif">
                "Si comporta come se non gli importasse più di vivere.
                Poi si innamora. E la reazione è forte, decisa, inaspettata."
              </blockquote>
              <p className="text-base sm:text-base text-muted-foreground leading-relaxed">
                La storia di John Smith L'Italiano: un uomo che combatte
                i suoi demoni tra locali fumosi, whiskey e blues. Un viaggio
                ironico, spregiudicato e politicamente scorretto dove
                l'amore arriva quando meno te lo aspetti.
              </p>
              <div className="flex justify-end">
                <a
                  href="https://www.venturaedizioni.it/prodotto/vincisgrassi-rock-and-roll/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full sm:w-auto sm:inline-block text-center px-6 sm:px-8 py-3.5 sm:py-3.5 bg-primary text-primary-foreground font-semibold text-sm sm:text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-all duration-300 animate-pulse-glow"
                >
                  Acquista ora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestsellerSection;
