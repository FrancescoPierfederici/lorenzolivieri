import authorPortrait from "@/assets/author-portrait.jpg";

const AuthorSection = () => {
  return (
    <section id="storia" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Text */}
          <div className="space-y-5 sm:space-y-6 order-2 lg:order-1">
            <p className="text-sm sm:text-sm font-medium tracking-[0.3em] uppercase text-primary">
              L'autore
            </p>
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground">
              La mia storia
            </h2>
            <div className="space-y-4 text-base sm:text-base text-muted-foreground leading-relaxed">
              <p>
                Il mio lavoro è tutt'altro che fare lo scrittore, ma amo trascorrere
                il tempo libero scrivendo storie. Otto libri pubblicati, una collana tutta mia,
                spaziando tra generi diversi.
              </p>
              <p>
                Ho creato personaggi seriali che si intrecciano tra i romanzi: Ocra Luigi,
                detto Gigi — un libraio gentile, spiritoso e brillante, sempre coinvolto
                in circostanze misteriose. E il suo alter ego, John Smith L'Italiano —
                sfacciato, cupo, rissoso e romantico, con una personalità che gli crea
                più problemi di quanti ne risolva.
              </p>
              <p>
                La passione per la scrittura è innata, ma è stato un particolare stato d'animo
                nel 2014 ad accendere la scintilla che mi porta a raccontare e a raccontarmi,
                storia dopo storia.
              </p>
            </div>
          </div>

          {/* Photo - bigger on mobile */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src={authorPortrait}
              alt="Lorenzo Livieri - Ritratto"
              className="w-full max-w-sm sm:max-w-sm md:max-w-md rounded-sm shadow-2xl noir-glow object-cover aspect-[3/4]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
