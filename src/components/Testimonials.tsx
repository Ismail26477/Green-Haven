import { useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Priya S.", rating: 5, text: "Absolutely magical! The pool, the garden, the bonfire — everything was perfect. Our family had the best weekend ever." },
  { name: "Rahul M.", rating: 5, text: "Best farmhouse experience near the city. The property is well-maintained and the host is super responsive. Highly recommend!" },
  { name: "Ananya K.", rating: 4, text: "Beautiful property with great amenities. The kids loved the pool and open space. We're already planning our next visit!" },
  { name: "Vikram T.", rating: 5, text: "A true hidden gem. We celebrated our anniversary here and it felt like a private resort. Incredible value for money." },
  { name: "Sneha D.", rating: 5, text: "Clean rooms, amazing food, and the sunset views are breathtaking. Green Haven is our happy place now!" },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
        el.scrollBy({ left: 280, behavior: "smooth" });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-8 px-5 bg-secondary/50">
      <h2 className="font-display text-2xl font-bold text-foreground text-center mb-4">
        Guest Reviews
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
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((r, i) => (
            <div key={i} className="snap-center shrink-0 w-72 p-5 rounded-2xl bg-background shadow-card">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < r.rating ? "text-accent fill-accent" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="font-body text-sm text-foreground leading-relaxed mb-4">"{r.text}"</p>
              <span className="font-body text-xs font-semibold text-muted-foreground">— {r.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
