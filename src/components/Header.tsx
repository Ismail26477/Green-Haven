import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Packages", href: "#pricing" },
  { label: "Book Now", href: "#booking" },
  { label: "Location", href: "#location" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#footer" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
  };

  useEffect(() => {
    if (closing) {
      const timer = setTimeout(() => {
        setOpen(false);
        setClosing(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [closing]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center justify-between px-4 h-14">
        <button onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="w-6 h-6 text-foreground" />
        </button>

        <a href="#hero" className="font-display text-lg font-bold text-primary tracking-wide">
          Green Haven
        </a>

        <a href="tel:+919876543210" aria-label="Call us" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Phone className="w-4 h-4" />
        </a>
      </div>

      {open && (
        <div
          className={`fixed inset-0 z-[100] transition-colors duration-300 ${closing ? "bg-transparent" : "bg-foreground/60"}`}
          onClick={handleClose}
        >
          <nav
            className={`absolute top-0 left-0 bottom-0 w-72 shadow-elevated p-6 z-[101] transition-transform duration-300 ease-out ${closing ? "-translate-x-full" : "translate-x-0"}`}
            style={{ backgroundColor: "hsl(40, 33%, 97%)", animation: closing ? undefined : "slide-in 0.3s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-display text-xl font-bold text-primary">Green Haven</span>
              <button onClick={handleClose} aria-label="Close menu">
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>
            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <li
                  key={link.href}
                  className="opacity-0"
                  style={{
                    animation: closing ? undefined : `fade-up 0.3s ease-out ${0.1 + i * 0.04}s forwards`,
                  }}
                >
                  <a
                    href={link.href}
                    onClick={handleClose}
                    className="block px-4 py-3 rounded-lg text-foreground font-body text-base hover:bg-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
