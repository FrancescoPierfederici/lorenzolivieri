import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="section-padding pt-28 sm:pt-32">
        <div className="container-narrow max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Titolare del trattamento:</strong> Lorenzo Livieri<br />
              P.IVA 01236640429<br />
              Via Marchetti 27, 60019 Senigallia (AN)<br />
              Email:{" "}
              <a href="mailto:lorenzo.livieri.3@gmail.com" className="text-primary hover:underline">
                lorenzo.livieri.3@gmail.com
              </a>
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Cookie e tecnologie di analisi
            </h2>
            <p>
              Questo sito non utilizza cookie di profilazione, cookie di terze parti né strumenti di
              tracciamento (es. Google Analytics, Facebook Pixel, TikTok Pixel, ecc.).
              Sono presenti esclusivamente cookie tecnici necessari al funzionamento del sito.
            </p>
            <p>
              Qualora venisse attivato Vercel Web Analytics, verranno raccolti dati anonimi e
              aggregati (es. pagine visitate, paese di provenienza) in forma tale da non permettere
              l'identificazione dell'utente. Vercel non utilizza cookie per questa analisi e i dati
              vengono conservati per un periodo massimo di 12 mesi.
              Per maggiori informazioni: <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Vercel Analytics Privacy Policy</a>.
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Dati raccolti
            </h2>
            <p>
              Non vengono raccolti dati personali durante la navigazione. L'unico dato eventualmente
              trattato è l'indirizzo email fornito volontariamente dall'utente tramite la sezione contatti.
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Finalità del trattamento
            </h2>
            <p>
              I dati eventualmente forniti (es. email di contatto) saranno utilizzati esclusivamente
              per rispondere alle richieste dell'utente. Non verranno ceduti a terzi né utilizzati
              per finalità di marketing.
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Link esterni
            </h2>
            <p>
              Questo sito contiene link a siti esterni (es. Ventura Edizioni, Unilibro) per l'acquisto
              dei libri. La navigazione su tali siti è soggetta alle rispettive privacy policy.
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Intelligenza artificiale e trasparenza
            </h2>
            <p>
              Il presente sito non utilizza sistemi di intelligenza artificiale con cui l'utente interagisce (chatbot, assistenti virtuali o strumenti simili). Non vengono impiegate tecnologie di riconoscimento emotivo o biometrico, né vengono pubblicati contenuti generati o manipolati da sistemi AI (deepfake, immagini, audio, video o testo sintetico su questioni di interesse pubblico).
            </p>
            <p>
              Ai sensi dell'articolo 50 del Regolamento (UE) 2024/1689 (AI Act), gli obblighi di trasparenza per i fornitori e gli utilizzatori di sistemi di AI riguardano esclusivamente i casi in cui gli utenti interagiscono direttamente con un sistema AI o sono esposti a contenuti sintetici. Poiché nessuna di queste situazioni si verifica nella fruizione del sito, non sussistono specifici obblighi informativi nei confronti dei visitatori.
            </p>
            <p>
              Eventuali strumenti di intelligenza artificiale sono utilizzati, ove del caso, esclusivamente come supporto allo sviluppo tecnico e alla manutenzione del sito, senza alcun trattamento di dati personali degli utenti.
            </p>

            <h2 className="text-xl font-serif font-semibold text-foreground pt-4">
              Diritti dell'utente
            </h2>
            <p>
              Ai sensi del Regolamento UE 2016/679 (GDPR), l'utente può esercitare i propri diritti
              (accesso, rettifica, cancellazione) scrivendo a{" "}
              <a href="mailto:lorenzo.livieri.3@gmail.com" className="text-primary hover:underline">
                lorenzo.livieri.3@gmail.com
              </a>.
            </p>

            <p className="text-sm text-muted-foreground/70 pt-6">
              Ultimo aggiornamento: Aprile 2026
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
