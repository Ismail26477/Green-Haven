import { Leaf, Shield, Sun } from "lucide-react";

const features = [
  { icon: Leaf, title: "Nature", desc: "Surrounded by lush greenery and open fields" },
  { icon: Shield, title: "Privacy", desc: "Exclusive property — your private getaway" },
  { icon: Sun, title: "Peace", desc: "Far from the city noise, close to calm" },
];

const About = () => (
  <section id="about" className="py-8 px-5">
    <h2 className="font-display text-2xl font-bold text-foreground text-center mb-4">
      About Green Haven
    </h2>
    <p className="font-body text-muted-foreground text-center text-sm leading-relaxed max-w-md mx-auto mb-6">
      Nestled in the heart of the countryside, Green Haven is a luxury farmhouse designed for families,
      couples, and groups seeking a peaceful escape. Enjoy world-class amenities surrounded by nature's
      finest — from sunrise yoga on the lawn to starlit BBQ nights by the pool.
    </p>
    <div className="grid grid-cols-3 gap-3">
      {features.map((f) => (
        <div key={f.title} className="flex flex-col items-center text-center p-4 rounded-xl bg-card shadow-card">
          <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <f.icon className="w-5 h-5 text-primary" />
          </div>
          <span className="font-display text-sm font-semibold text-foreground mb-1">{f.title}</span>
          <span className="font-body text-xs text-muted-foreground leading-snug">{f.desc}</span>
        </div>
      ))}
    </div>
  </section>
);

export default About;
