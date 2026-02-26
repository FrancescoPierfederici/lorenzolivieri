import authorHero from "@/assets/author-hero.jpg";
import bookCover1 from "@/assets/book-cover-1.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-32">
      <div className="container-narrow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary">
              Scrittore · Senigallia
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-foreground text-balance">
              Le storie nascono dove la terra incontra il mare
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Narrativa ambientata nelle Marche. Storie di radici, legami e orizzonti che raccontano chi siamo attraverso i luoghi che abitiamo.
            </p>
            <a
              href="#focus-libro"
              className="inline-block mt-4 px-8 py-3.5 bg-primary text-primary-foreground font-medium text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
            >
              Scopri l'ultimo libro
            </a>
          </div>

          {/* Image + Book */}
          <div className="relative flex justify-center lg:justify-end" style={{ animationDelay: "0.2s" }}>
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <img
                src={authorHero}
                alt="Marco Ferretti, scrittore"
                className="w-full max-w-md rounded-sm shadow-2xl object-cover aspect-[4/3]"
                loading="eager"
              />
              <img
                src={bookCover1}
                alt="L'Ombra del Porto - ultimo libro"
                className="absolute -bottom-8 -left-8 w-32 md:w-40 rounded-sm shadow-xl border-4 border-background"
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
