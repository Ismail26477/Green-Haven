import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919876543210?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20Green%20Haven%20Farmhouse"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-20 right-4 z-40 w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] text-primary-foreground shadow-elevated flex items-center justify-center animate-pulse-gentle"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
