import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookie = () => {
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <main className="section-padding pt-28 sm:pt-32">
        <div className="container-narrow max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
            Cookie Policy
          </h1>
          <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              Questa pagina descrive l'uso dei cookie e delle tecnologie simili su questo sito, ai
              sensi dell'art. 122 del D.Lgs. 196/2003 e delle Linee guida del Garante per la
              protezione dei dati personali del 10 giugno 2021.
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Cosa sono i cookie
            </h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati possono salvare sul dispositivo
              dell'utente. Possono essere tecnici (necessari al funzionamento) oppure di
              profilazione (utilizzati per tracciare l'utente e mostrare pubblicità personalizzata).
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Cookie utilizzati da questo sito
            </h2>
            <p>
              Questo sito utilizza <strong className="text-foreground">esclusivamente cookie
              tecnici</strong> e memorizzazione locale necessari al corretto funzionamento della
              navigazione e a ricordare la chiusura dell'informativa sui cookie. Per questi cookie
              non è richiesto il consenso preventivo dell'utente.
            </p>
            <p>
              <strong className="text-foreground">Non</strong> sono presenti cookie di profilazione,
              cookie pubblicitari, cookie di social network né strumenti di tracciamento di terze
              parti (Google Analytics, Meta Pixel, TikTok Pixel o simili).
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Statistiche anonime
            </h2>
            <p>
              Qualora venisse attivato Vercel Web Analytics, la raccolta avviene in forma anonima e
              aggregata, senza cookie e senza identificazione dell'utente.
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Log tecnici dell'hosting
            </h2>
            <p>
              Il fornitore di hosting (Vercel Inc.) può registrare log tecnici di sistema, come
              indirizzo IP, data e ora della richiesta e tipo di browser, per finalità di sicurezza e
              funzionamento. Tali dati non vengono utilizzati per profilare l'utente.
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Come gestire o disattivare i cookie
            </h2>
            <p>
              L'utente può in qualsiasi momento eliminare o bloccare i cookie tramite le impostazioni
              del proprio browser (Chrome, Safari, Firefox, Edge). La disattivazione dei cookie
              tecnici può compromettere alcune funzionalità del sito.
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Titolare del trattamento
            </h2>
            <p>
              Lorenzo Livieri — P.IVA 01236640429 — Via Marchetti 27, 60019 Senigallia (AN)<br />
              Email:{" "}
              <a href="mailto:lorenzo.livieri.3@gmail.com" className="text-primary hover:underline">
                lorenzo.livieri.3@gmail.com
              </a>
            </p>
            <p>
              Per informazioni complete sul trattamento dei dati consulta la{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </p>

            <p className="text-sm text-muted-foreground/70 pt-6">
              Ultimo aggiornamento: Agosto 2026 — Reclami: Garante per la protezione dei dati
              personali (www.garanteprivacy.it)
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookie;
