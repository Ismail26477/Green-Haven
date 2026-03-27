import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer id="footer" className="bg-foreground text-primary-foreground py-10 px-5">
    <div className="max-w-md mx-auto">
      <h3 className="font-display text-xl font-bold mb-6 text-center">Green Haven</h3>

      <div className="space-y-3 mb-8">
        <a href="tel:+919876543210" className="flex items-center gap-3 font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
          <Phone className="w-4 h-4 shrink-0" /> +91 98765 43210
        </a>
        <a href="mailto:hello@greenhaven.com" className="flex items-center gap-3 font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
          <Mail className="w-4 h-4 shrink-0" /> hello@greenhaven.com
        </a>
        <div className="flex items-start gap-3 font-body text-sm text-primary-foreground/80">
          <MapPin className="w-4 h-4 shrink-0 mt-0.5" /> Green Haven Farmhouse, Village Road, Countryside District
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 gap-2 mb-8">
        {["Gallery", "Amenities", "Packages", "Book Now", "Location", "Reviews"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "")}`}
            className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Socials */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
          <Facebook className="w-5 h-5" />
        </a>
      </div>

      <p className="font-body text-xs text-primary-foreground/40 text-center">
        © {new Date().getFullYear()} Green Haven Farmhouse. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
