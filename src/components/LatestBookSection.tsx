import bookCover1 from "@/assets/book-cover-1.jpg";
import marcheLandscape from "@/assets/marche-landscape.jpg";

const LatestBookSection = () => {
  return (
    <section id="focus-libro" className="section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual side */}
          <div className="relative">
            <img
              src={marcheLandscape}
              alt="Paesaggio delle Marche"
              className="w-full rounded-sm shadow-xl object-cover aspect-[4/3]"
              loading="lazy"
            />
            <img
              src={bookCover1}
              alt="L'Ombra del Porto"
              className="absolute -bottom-6 -right-6 md:-right-10 w-36 md:w-44 rounded-sm shadow-2xl border-4 border-background"
              loading="lazy"
            />
          </div>

          {/* Text side */}
          <div className="space-y-6">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary">
              Ultimo libro · 2024
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
              L'Ombra del Porto
            </h2>
            <blockquote className="border-l-2 border-primary pl-6 italic text-lg text-muted-foreground leading-relaxed font-serif">
              "Il porto non è mai solo un luogo. È il confine tra ciò che sei stato e ciò che potresti diventare."
            </blockquote>
            <p className="text-muted-foreground leading-relaxed">
              Un romanzo ambientato nella Senigallia degli anni Settanta, dove il destino di tre famiglie si intreccia
              lungo le banchine del porto. Una storia di segreti, coraggio e radici che affondano nella salsedine
              adriatica.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3.5 bg-primary text-primary-foreground font-medium text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
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
