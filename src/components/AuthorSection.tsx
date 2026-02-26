import authorPortrait from "@/assets/author-portrait.jpg";

const AuthorSection = () => {
  return (
    <section id="storia" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="space-y-6 order-2 lg:order-1">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary">
              Chi sono
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              La mia storia
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sono nato a Senigallia, sulle rive di un Adriatico che non smette mai di raccontare.
                Cresciuto tra i vicoli del centro storico e le colline dell'entroterra marchigiano,
                ho imparato che ogni luogo custodisce una storia — bisogna solo saperla ascoltare.
              </p>
              <p>
                Ho iniziato a scrivere per non dimenticare le voci del porto, i silenzi delle campagne
                e quel senso di appartenenza che solo chi ha radici profonde conosce davvero.
                I miei romanzi nascono da qui: dal legame viscerale con questa terra.
              </p>
              <p>
                Oggi scrivo per chi cerca nelle storie uno specchio in cui riconoscersi.
                Per chi crede che la narrativa possa ancora commuovere, far riflettere
                e restituire significato ai piccoli gesti quotidiani.
              </p>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2">
            <img
              src={authorPortrait}
              alt="Marco Ferretti - Ritratto"
              className="w-full max-w-md mx-auto rounded-sm shadow-xl object-cover aspect-[3/4]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
