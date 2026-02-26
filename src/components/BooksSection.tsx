import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bookCover1 from "@/assets/book-cover-1.jpg";
import bookCover2 from "@/assets/book-cover-2.jpg";
import bookCover3 from "@/assets/book-cover-3.jpg";
import bookCover4 from "@/assets/book-cover-4.jpg";
import bookCover5 from "@/assets/book-cover-5.jpg";

const books = [
  { title: "L'Ombra del Porto", year: "2024", cover: bookCover1 },
  { title: "Vento di Senigallia", year: "2022", cover: bookCover2 },
  { title: "Le Colline Parlano", year: "2020", cover: bookCover3 },
  { title: "Radici di Sale", year: "2018", cover: bookCover4 },
  { title: "Il Confine dell'Anima", year: "2016", cover: bookCover5 },
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
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
              Bibliografia
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              I miei libri
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 border border-border rounded-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scorri a sinistra"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 border border-border rounded-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scorri a destra"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {books.map((book) => (
            <div
              key={book.title}
              className="flex-shrink-0 w-52 md:w-56 snap-start group cursor-pointer"
            >
              <div className="overflow-hidden rounded-sm shadow-lg mb-4">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-1">
                {book.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{book.year}</p>
              <a
                href="#"
                className="text-sm font-medium text-primary hover:underline underline-offset-4"
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
