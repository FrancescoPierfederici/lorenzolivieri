import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bookCover1 from "@/assets/book-cover-1.jpg";
import bookCover2 from "@/assets/book-cover-2.jpg";
import bookCover3 from "@/assets/book-cover-3.jpg";
import bookCover4 from "@/assets/book-cover-4.jpg";
import bookCover5 from "@/assets/book-cover-5.jpg";
import bookCover6 from "@/assets/book-cover-6.jpg";
import bookCover7 from "@/assets/book-cover-7.jpg";

const books = [
  { title: "La Notte di Ognissanti", cover: bookCover1, link: "https://www.venturaedizioni.it/prodotto/la-notte-di-ognissanti/" },
  { title: "Il Verdicchio Uccide", cover: bookCover2, link: "https://www.venturaedizioni.it/prodotto/il-verdicchio-uccide/" },
  { title: "Vincisgrassi & Rock and Roll", cover: bookCover3, link: "https://www.venturaedizioni.it/prodotto/vincisgrassi-rock-and-roll/" },
  { title: "Ciavattoni alla Vinicio", cover: bookCover4, link: "https://www.venturaedizioni.it/prodotto/ciavattoni-alla-vinicio/" },
  { title: "Posta di Donna Soprana e Altera", cover: bookCover5, link: "https://www.unilibro.it/libro/livieri-lorenzo/posta-di-donna-soprana-e-altera/9788868848446" },
  { title: "Mai Sobrio a Natale", cover: bookCover6, link: "https://www.venturaedizioni.it/prodotto/mai-sobrio-a-natale/" },
  { title: "L'America di John Smith l'Italiano", cover: bookCover7, link: "https://www.venturaedizioni.it/prodotto/lamerica-di-john-smith-litaliano/" },
];

const BooksSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="libri" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <div>
            <p className="text-sm sm:text-sm font-medium tracking-[0.3em] uppercase text-primary mb-2 sm:mb-3">
              Bibliografia
            </p>
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground">
              I miei libri
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
              aria-label="Scorri a sinistra"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
              aria-label="Scorri a destra"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {books.map((book) => (
            <div
              key={book.title}
              className="flex-shrink-0 w-44 sm:w-52 md:w-56 snap-start group cursor-pointer"
            >
              <div className="overflow-hidden rounded-sm mb-3 sm:mb-4 noir-glow">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full aspect-[2/3] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-base sm:text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {book.title}
              </h3>
              <div className="h-2" />
              <a
                href="#"
                className="text-sm sm:text-sm font-semibold tracking-wider uppercase text-primary hover:underline underline-offset-4"
              >
                Acquista →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
