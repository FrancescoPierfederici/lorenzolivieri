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
                Sono cresciuto nei vicoli di Senigallia, dove ogni angolo nasconde un segreto.
                È lì che ho imparato a osservare — i dettagli che sfuggono,
                le ombre che si allungano al calar della sera.
              </p>
              <p>
                I miei thriller nascono dall'entroterra marchigiano, da quei silenzi
                carichi di tensione. Scrivo di delitti che affondano nel passato,
                di investigatori imperfetti e verità scomode.
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
