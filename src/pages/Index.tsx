import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BooksSection from "@/components/BooksSection";
import LatestBookSection from "@/components/LatestBookSection";
import AuthorSection from "@/components/AuthorSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BooksSection />
      <LatestBookSection />
      <AuthorSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
