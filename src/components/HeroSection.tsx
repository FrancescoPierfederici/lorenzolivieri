import authorHero from "@/assets/author-hero.jpg";
import bookCover1 from "@/assets/book-cover-1.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] sm:min-h-screen flex items-end overflow-hidden">
      {/* Full background image */}
      <img
        src={authorHero}
        alt="Lorenzo Livieri, scrittore thriller"
        className="absolute inset-0 w-full h-full object-cover object-center sm:object-top"
        loading="eager"
      />
      {/* Dark overlays */}
      <div className="absolute inset-0" style={{ background: "var(--noir-overlay)" }} />
      <div className="absolute inset-0" style={{ background: "var(--noir-overlay-top)" }} />

      {/* Content */}
      <div className="relative z-10 w-full px-5 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-32 md:px-12 md:pb-20 lg:px-24 lg:pb-24">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-end">
            <div className="space-y-5 sm:space-y-5 animate-fade-in-up">
              <p className="text-sm sm:text-sm font-medium tracking-[0.3em] uppercase text-foreground animate-flicker">
                Thriller · Noir · Senigallia
              </p>
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-[1.1] text-foreground text-balance text-glow">
                Ogni ombra nasconde una verità
              </h1>
              <p className="text-base sm:text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
                Thriller ambientati nelle Marche, dove il silenzio custodisce segreti.
              </p>

              {/* Mobile: book + CTA side by side */}
              <div className="flex items-end gap-4 pt-2 sm:block">
                <a
                  href="#focus-libro"
                  className="block w-full sm:w-auto sm:inline-block text-center px-6 sm:px-8 py-3.5 sm:py-3.5 bg-primary text-primary-foreground font-semibold text-sm sm:text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-all duration-300 animate-pulse-glow"
                >
                  Scopri l'ultimo libro
                </a>
              </div>
            </div>

            {/* Book cover floating - desktop only */}
            <div
              className="hidden lg:block animate-fade-in-up relative"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="absolute -inset-6 rounded-lg bg-primary/20 blur-2xl animate-pulse-glow" />
              <img
                src={bookCover1}
                alt="La Notte di Ognissanti - ultimo thriller"
                className="relative w-48 rounded-sm shadow-[0_0_50px_-10px_hsl(0_72%_45%/0.6)] border border-primary/30 transition-transform duration-500 hover:scale-105 hover:-rotate-1"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
