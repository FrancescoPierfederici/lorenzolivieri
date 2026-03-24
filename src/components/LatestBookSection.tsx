import bookEmerge from "@/assets/book-emerge.jpg";

const LatestBookSection = () => {
  return (
    <section id="focus-libro" className="relative overflow-hidden">
      {/* Mobile: visible image block + text below */}
      <div className="sm:hidden">
        <img
          src={bookEmerge}
          alt="La Notte di Ognissanti - ultimo thriller di Lorenzo Livieri"
          className="w-full h-[45vh] object-cover object-[70%_center]"
          loading="lazy"
        />
        <div className="bg-background px-5 py-10 space-y-5">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary animate-flicker">
            Ultimo libro · 2025
          </p>
          <h2 className="text-3xl font-serif font-bold text-foreground text-balance text-glow">
            La Notte di Ognissanti
          </h2>
          <blockquote className="border-l-2 border-primary pl-4 italic text-base text-muted-foreground leading-relaxed font-serif">
            "Un'anima incastonata nel nulla attende da secoli chi avrà il coraggio di ascoltarla."
          </blockquote>
          <p className="text-base text-muted-foreground leading-relaxed">
            Tra il 1850 e i giorni nostri, un'anima intrappolata in un limbo cerca liberazione.
            Nel 2012, un dodicenne scopre un diario in un vecchio baule e da quel giorno
            incubi ricorrenti lo perseguiteranno. La notte di Ognissanti, a Ostra,
            tra le cantine della festa degli Sprevengoli, il coraggio sarà l'unica via d'uscita.
          </p>
          <a
            href="https://www.venturaedizioni.it/prodotto/la-notte-di-ognissanti/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-all duration-300 animate-pulse-glow"
          >
            Acquista ora
          </a>
        </div>
      </div>

      {/* Desktop (sm+): original layout with background image */}
      <div className="hidden sm:block">
        <img
          src={bookEmerge}
          alt="La Notte di Ognissanti - ultimo thriller di Lorenzo Livieri"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

        <div className="relative z-10 px-6 py-24 md:px-12 md:py-32 lg:px-24 lg:py-40">
          <div className="container-narrow">
            <div className="max-w-lg space-y-6">
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary animate-flicker">
                Ultimo libro · 2025
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance text-glow">
                La Notte di Ognissanti
              </h2>
              <blockquote className="border-l-2 border-primary pl-6 italic text-base md:text-lg text-muted-foreground leading-relaxed font-serif">
                "Un'anima incastonata nel nulla attende da secoli chi avrà il coraggio di ascoltarla."
              </blockquote>
              <p className="text-base text-muted-foreground leading-relaxed">
                Tra il 1850 e i giorni nostri, un'anima intrappolata in un limbo cerca liberazione.
                Nel 2012, un dodicenne scopre un diario in un vecchio baule e da quel giorno
                incubi ricorrenti lo perseguiteranno. La notte di Ognissanti, a Ostra,
                tra le cantine della festa degli Sprevengoli, il coraggio sarà l'unica via d'uscita.
              </p>
              <a
                href="https://www.venturaedizioni.it/prodotto/la-notte-di-ognissanti/"
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
    </section>
  );
};

export default LatestBookSection;
