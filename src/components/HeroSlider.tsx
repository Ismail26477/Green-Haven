import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  { src: hero1, alt: "Green Haven farmhouse exterior at golden hour" },
  { src: hero2, alt: "Premium swimming pool at Green Haven" },
  { src: hero3, alt: "Cozy luxury bedroom at Green Haven" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.alt}
          width={1080}
          height={1920}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          {...(i === 0 ? {} : { loading: "lazy" as const })}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-28 px-6 text-center">
        <h1
          className="font-display text-4xl font-bold text-primary-foreground mb-3 drop-shadow-lg"
          style={{ animation: "fade-up 0.8s ease-out" }}
        >
          Green Haven Farmhouse
        </h1>
        <p
          className="font-body text-primary-foreground/90 text-lg mb-8 max-w-xs"
          style={{ animation: "fade-up 0.8s 0.15s ease-out both" }}
        >
          Escape to Nature · Luxury · Privacy
        </p>
        <div className="flex gap-3" style={{ animation: "fade-up 0.8s 0.3s ease-out both" }}>
          <a
            href="#booking"
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm shadow-elevated transition-transform active:scale-95"
          >
            Book Now
          </a>
          <a
            href="#amenities"
            className="px-6 py-3 rounded-full bg-primary-foreground/20 backdrop-blur text-primary-foreground font-body font-semibold text-sm border border-primary-foreground/30 transition-transform active:scale-95"
          >
            View Amenities
          </a>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prev} aria-label="Previous slide" className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-primary-foreground/20 backdrop-blur flex items-center justify-center">
        <ChevronLeft className="w-5 h-5 text-primary-foreground" />
      </button>
      <button onClick={next} aria-label="Next slide" className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-primary-foreground/20 backdrop-blur flex items-center justify-center">
        <ChevronRight className="w-5 h-5 text-primary-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-primary-foreground w-6" : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
