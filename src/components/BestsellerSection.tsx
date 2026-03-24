import bestsellerBg from "@/assets/bestseller-bg.jpg";

const BestsellerSection = () => {
  return (
    <section id="bestseller" className="relative overflow-hidden">
      {/* Mobile: visible image block + text below */}
      <div className="sm:hidden">
        <img
          src={bestsellerBg}
          alt="Atmosfera noir blues bar - Vincisgrassi e Rock and Roll"
          className="w-full h-[45vh] object-cover object-left"
          loading="lazy"
        />
        <div className="bg-background px-5 py-10 space-y-5">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary animate-flicker">
            Il mio romanzo · Bestseller
          </p>
          <h2 className="text-3xl font-serif font-bold text-foreground text-balance text-glow">
            Vincisgrassi & Rock and Roll
          </h2>
          <blockquote className="border-l-2 border-primary pl-4 italic text-base text-muted-foreground leading-relaxed font-serif">
            "Si comporta come se non gli importasse più di vivere.
            Poi si innamora. E la reazione è forte, decisa, inaspettata."
          </blockquote>
          <p className="text-base text-muted-foreground leading-relaxed">
            La storia di John Smith L'Italiano: un uomo che combatte
            i suoi demoni tra locali fumosi, whiskey e blues. Un viaggio
            ironico, spregiudicato e politicamente scorretto.
          </p>
          <a
            href="https://www.venturaedizioni.it/prodotto/vincisgrassi-rock-and-roll/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-all duration-300 animate-pulse-glow"
          >
            Acquista ora
          </a>
        </div>
      </div>

      {/* Desktop (sm+): original layout with background image */}
      <div className="hidden sm:block relative">
        <img
          src={bestsellerBg}
          alt="Atmosfera noir blues bar - Vincisgrassi e Rock and Roll"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/70 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

        <div className="relative z-10 px-6 py-24 md:px-12 md:py-32 lg:px-24 lg:py-40">
          <div className="container-narrow">
            <div className="flex justify-end">
              <div className="max-w-lg space-y-6 text-right">
                <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary animate-flicker">
                  Il mio romanzo
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance text-glow">
                  Vincisgrassi & Rock and Roll
                </h2>
                <blockquote className="border-r-2 border-primary pr-6 italic text-base md:text-lg text-muted-foreground leading-relaxed font-serif">
                  "Si comporta come se non gli importasse più di vivere.
                  Poi si innamora. E la reazione è forte, decisa, inaspettata."
                </blockquote>
                <p className="text-base text-muted-foreground leading-relaxed">
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
                    className="inline-block text-center px-8 py-3.5 bg-primary text-primary-foreground font-semibold text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-all duration-300 animate-pulse-glow"
                  >
                    Acquista ora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestsellerSection;
