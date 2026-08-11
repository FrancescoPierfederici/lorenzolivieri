import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Termini = () => {
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <main className="section-padding pt-28 sm:pt-32">
        <div className="container-narrow max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
            Termini di utilizzo
          </h1>
          <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              L'accesso e l'utilizzo di questo sito implicano l'accettazione delle condizioni
              riportate di seguito.
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Titolare del sito
            </h2>
            <p>
              Lorenzo Livieri — P.IVA 01236640429 — Via Marchetti 27, 60019 Senigallia (AN)<br />
              Email:{" "}
              <a href="mailto:lorenzo.livieri.3@gmail.com" className="text-primary hover:underline">
                lorenzo.livieri.3@gmail.com
              </a>
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Natura del sito
            </h2>
            <p>
              Questo sito ha finalità informative e di presentazione dell'attività letteraria
              dell'autore. Non è un negozio online: gli acquisti dei volumi avvengono su siti di terze
              parti (editori e librerie), soggetti alle rispettive condizioni di vendita.
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Proprietà intellettuale
            </h2>
            <p>
              Tutti i contenuti presenti sul sito — testi, titoli, estratti delle opere, copertine,
              fotografie e materiali grafici — sono protetti dalla Legge 22 aprile 1941 n. 633 sul
              diritto d'autore e sono di proprietà di Lorenzo Livieri o dei rispettivi titolari
              (case editrici, fotografi).
            </p>
            <p>
              È vietata la riproduzione, la distribuzione, la modifica o l'utilizzo commerciale dei
              contenuti senza autorizzazione scritta. È consentita la citazione di brevi estratti a
              fini di recensione, studio o informazione, con indicazione della fonte.
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Contenuti generati con intelligenza artificiale
            </h2>
            <p>
              Alcune immagini decorative del sito sono state generate o elaborate con strumenti di
              intelligenza artificiale e sono segnalate come tali, ai sensi dell'art. 50 del
              Regolamento (UE) 2024/1689 (AI Act). I testi letterari e le copertine sono materiali
              originali dell'autore o dell'editore.
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Link a siti esterni
            </h2>
            <p>
              Il sito contiene collegamenti a risorse esterne. Il titolare non esercita alcun
              controllo su tali siti e non risponde dei loro contenuti, della loro disponibilità o
              delle politiche in materia di dati personali.
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Limitazione di responsabilità
            </h2>
            <p>
              I contenuti sono forniti con la massima cura, ma senza garanzia di completezza o
              aggiornamento costante. Il titolare non risponde di eventuali danni derivanti
              dall'utilizzo del sito o dall'impossibilità di accedervi, né di interruzioni tecniche
              imputabili al fornitore di hosting.
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Accessibilità
            </h2>
            <p>
              Il sito è realizzato seguendo le buone pratiche di accessibilità (HTML semantico,
              contrasti adeguati, navigazione da tastiera). Per segnalare un problema di accessibilità
              è possibile scrivere a{" "}
              <a href="mailto:lorenzo.livieri.3@gmail.com" className="text-primary hover:underline">
                lorenzo.livieri.3@gmail.com
              </a>
              .
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Legge applicabile
            </h2>
            <p>
              I presenti termini sono regolati dalla legge italiana. Per le controversie con
              consumatori è competente il foro di residenza o domicilio del consumatore.
            </p>

            <p className="text-sm text-muted-foreground/70 pt-6">
              Ultimo aggiornamento: Agosto 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Termini;
