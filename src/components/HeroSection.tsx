import authorHero from "@/assets/author-hero.jpg";
import bookCover1 from "@/assets/book-cover-1.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Full background image */}
      <img
        src={authorHero}
        alt="Lorenzo Livieri, scrittore thriller"
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="eager"
      />
      {/* Dark overlays */}
      <div className="absolute inset-0" style={{ background: "var(--noir-overlay)" }} />
      <div className="absolute inset-0" style={{ background: "var(--noir-overlay-top)" }} />

      {/* Content */}
      <div className="relative z-10 w-full px-6 pb-12 pt-32 md:px-12 md:pb-20 lg:px-24 lg:pb-24">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-end">
            <div className="space-y-5 animate-fade-in-up">
              <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-primary animate-flicker">
                Thriller · Noir · Senigallia
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-[1.1] text-foreground text-balance text-glow">
                Ogni ombra nasconde una verità
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
                Thriller ambientati nelle Marche. Dove il silenzio delle colline custodisce segreti
                e le acque del porto cancellano le tracce.
              </p>
              <a
                href="#focus-libro"
                className="inline-block mt-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-primary-foreground font-semibold text-xs sm:text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-all duration-300 animate-pulse-glow"
              >
                Scopri l'ultimo libro
              </a>
            </div>

            {/* Book cover floating - hidden on small screens */}
            <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <img
                src={bookCover1}
                alt="L'Ombra del Porto - ultimo thriller"
                className="w-44 rounded-sm shadow-2xl noir-glow"
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
