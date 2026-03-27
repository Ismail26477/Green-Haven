import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Day Outing",
    price: "₹5,999",
    unit: "per day",
    features: ["Pool Access", "Garden & BBQ", "10 AM – 6 PM", "Up to 20 Guests", "Music System"],
    popular: false,
  },
  {
    name: "Overnight Stay",
    price: "₹12,999",
    unit: "per night",
    features: ["3 AC Bedrooms", "Pool & Garden", "BBQ & Bonfire", "Up to 15 Guests", "Breakfast Included"],
    popular: true,
  },
  {
    name: "Weekend Getaway",
    price: "₹22,999",
    unit: "2 nights",
    features: ["Full Property Access", "All Meals Included", "Up to 15 Guests", "Bonfire + BBQ", "Late Checkout"],
    popular: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="py-8 px-5">
    <h2 className="font-display text-2xl font-bold text-foreground text-center mb-2">
      Packages & Pricing
    </h2>
    <p className="font-body text-sm text-muted-foreground text-center mb-5">
      Choose the perfect plan for your getaway
    </p>

    <div className="flex flex-col gap-5 max-w-sm mx-auto">
      {packages.map((pkg) => (
        <div
          key={pkg.name}
          className={`rounded-2xl p-5 shadow-card relative overflow-hidden ${
            pkg.popular ? "bg-primary text-primary-foreground ring-2 ring-primary" : "bg-card text-card-foreground"
          }`}
        >
          {pkg.popular && (
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
              <Star className="w-3 h-3" /> Popular
            </div>
          )}
          <h3 className="font-display text-lg font-bold mb-1">{pkg.name}</h3>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="font-display text-3xl font-bold">{pkg.price}</span>
            <span className="font-body text-sm opacity-70">/ {pkg.unit}</span>
          </div>
          <ul className="space-y-2 mb-5">
            {pkg.features.map((f) => (
              <li key={f} className="flex items-center gap-2 font-body text-sm">
                <Check className="w-4 h-4 shrink-0" /> {f}
              </li>
            ))}
          </ul>
          <a
            href="#booking"
            className={`block text-center py-3 rounded-full font-body font-semibold text-sm transition-transform active:scale-95 ${
              pkg.popular
                ? "bg-primary-foreground text-primary"
                : "bg-primary text-primary-foreground"
            }`}
          >
            Book Now
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Pricing;
