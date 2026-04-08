import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border px-5 py-4 sm:px-8 animate-fade-in">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-3 max-w-4xl mx-auto">
        <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left leading-relaxed">
          Questo sito utilizza solo cookie tecnici necessari al funzionamento. Nessun dato di profilazione viene raccolto.{" "}
          <a href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </p>
        <button
          onClick={accept}
          className="shrink-0 px-5 py-2 bg-primary text-primary-foreground text-xs font-semibold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
        >
          Ho capito
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
