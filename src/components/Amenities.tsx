import {
  Waves, TreePine, Flame, Wifi, Car, Wind, Tv, UtensilsCrossed,
  ShieldCheck, Music, Dumbbell, Coffee
} from "lucide-react";

const amenities = [
  { icon: Waves, label: "Swimming Pool" },
  { icon: TreePine, label: "Garden Area" },
  { icon: Flame, label: "BBQ Setup" },
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Car, label: "Free Parking" },
  { icon: Wind, label: "AC Rooms" },
  { icon: Tv, label: "Smart TV" },
  { icon: UtensilsCrossed, label: "Kitchen" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Music, label: "Music System" },
  { icon: Dumbbell, label: "Outdoor Games" },
  { icon: Coffee, label: "Bonfire Area" },
];

const Amenities = () => (
  <section id="amenities" className="py-8 px-5 bg-secondary/50">
    <h2 className="font-display text-2xl font-bold text-foreground text-center mb-4">
      Amenities
    </h2>
    <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
      {amenities.map((a) => (
        <div
          key={a.label}
          className="flex flex-col items-center text-center p-4 rounded-xl bg-background shadow-card hover:shadow-elevated transition-shadow"
        >
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <a.icon className="w-5 h-5 text-primary" />
          </div>
          <span className="font-body text-xs font-medium text-foreground leading-tight">{a.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Amenities;
