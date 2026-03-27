import { MapPin } from "lucide-react";

const Location = () => (
  <section id="location" className="py-8 px-5">
    <h2 className="font-display text-2xl font-bold text-foreground text-center mb-2">
      How to Reach Us
    </h2>
    <div className="flex items-center justify-center gap-2 mb-6">
      <MapPin className="w-4 h-4 text-accent" />
      <p className="font-body text-sm text-muted-foreground">
        Green Haven Farmhouse, Village Road, Countryside District
      </p>
    </div>
    <div className="rounded-2xl overflow-hidden shadow-card max-w-md mx-auto">
      <iframe
        title="Green Haven Farmhouse Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0!2d72.8!3d19.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
        className="w-full h-56 border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  </section>
);

export default Location;
