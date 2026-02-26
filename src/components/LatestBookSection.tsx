import bookCover1 from "@/assets/book-cover-1.jpg";
import marcheLandscape from "@/assets/marche-landscape.jpg";

const LatestBookSection = () => {
  return (
    <section id="focus-libro" className="relative overflow-hidden">
      {/* Background landscape */}
      <img
        src={marcheLandscape}
        alt="Porto notturno nelle Marche"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative z-10 section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Book cover */}
            <div className="flex justify-center">
              <img
                src={bookCover1}
                alt="L'Ombra del Porto"
                className="w-64 md:w-72 rounded-sm shadow-2xl noir-glow"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary">
                Ultimo thriller · 2024
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
                L'Ombra del Porto
              </h2>
              <blockquote className="border-l-2 border-primary pl-6 italic text-lg text-muted-foreground leading-relaxed font-serif">
                "Il porto non dimentica mai. Le sue acque scure custodiscono i nomi
                di chi non è più tornato — e di chi li ha fatti sparire."
              </blockquote>
              <p className="text-muted-foreground leading-relaxed">
                Senigallia, 1978. Un corpo riemerge dalle acque del porto dopo trent'anni.
                L'ispettore Morandi dovrà scavare nei segreti di tre famiglie
                per scoprire che la verità più pericolosa è quella che nessuno vuole ascoltare.
              </p>
              <a
                href="#"
                className="inline-block px-8 py-3.5 bg-primary text-primary-foreground font-semibold text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-all duration-300"
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
