import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BooksSection from "@/components/BooksSection";
import LatestBookSection from "@/components/LatestBookSection";
import BestsellerSection from "@/components/BestsellerSection";
import AuthorSection from "@/components/AuthorSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-dvh bg-background">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Vai al contenuto principale
      </a>
      <Navbar />
      <main id="contenuto">
      <HeroSection />
      <BooksSection />
      <LatestBookSection />
      <BestsellerSection />
      <AuthorSection />
      <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
