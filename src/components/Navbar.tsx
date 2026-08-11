import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "La mia storia", href: "#storia" },
  { label: "I miei libri", href: "#libri" },
  { label: "Blog", href: "https://substack.com/@lorenzolivieri/notes", external: true },
  { label: "Contatti", href: "#contatti" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Navigazione principale" className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container-narrow flex items-center justify-between h-14 sm:h-16 px-5 sm:px-6 lg:px-24">
        <a href="#home" className="font-serif text-lg sm:text-xl font-bold tracking-wider text-foreground">
          <span className="text-primary">L</span>orenzo <span className="text-primary">L</span>ivieri
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex min-h-11 min-w-11 items-center justify-center text-foreground -mr-2 active:text-primary transition-colors"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div id="menu-mobile" className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in">
          <ul className="flex flex-col items-center gap-1 py-4">
            {navItems.map((item) => (
              <li key={item.label} className="w-full">
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="block text-center py-3 text-base font-medium tracking-widest uppercase text-foreground active:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
