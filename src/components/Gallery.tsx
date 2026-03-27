import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const images = [
  { src: hero1, label: "Farmhouse" },
  { src: hero2, label: "Pool" },
  { src: gallery1, label: "Night View" },
  { src: gallery2, label: "BBQ Area" },
  { src: gallery3, label: "Living Room" },
  { src: hero3, label: "Bedroom" },
];

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  // Auto-scroll infinite loop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 2) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 270, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const closeLightbox = () => setLightbox(null);

  return (
    <>
      <section id="gallery" className="py-8 px-4">
        <h2 className="font-display text-2xl font-bold text-foreground text-center mb-4">
          Explore Our Farmhouse
        </h2>

        <div className="relative">
          <button onClick={() => scroll(-1)} aria-label="Scroll left" className="absolute -left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-background shadow-card flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button onClick={() => scroll(1)} aria-label="Scroll right" className="absolute -right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-background shadow-card flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-64 rounded-xl overflow-hidden shadow-card cursor-pointer active:scale-[0.98] transition-transform"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  loading="lazy"
                  className="w-full h-44 object-cover"
                />
                <div className="px-3 py-2 bg-card">
                  <span className="font-body text-sm font-medium text-foreground">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center animate-[fade-in_0.2s_ease-out]"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          <div className="w-full px-4 animate-[scale-in_0.2s_ease-out]" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightbox].src}
              alt={images[lightbox].label}
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />
            <p className="text-center text-white/80 font-body text-sm mt-3">{images[lightbox].label}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
