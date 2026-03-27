const StickyBookButton = () => (
  <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-t border-border p-3 flex items-center justify-between gap-3">
    <div>
      <span className="font-body text-xs text-muted-foreground">Starting from</span>
      <p className="font-display text-lg font-bold text-foreground">₹5,999</p>
    </div>
    <a
      href="#booking"
      className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm shadow-elevated transition-transform active:scale-95"
    >
      Book Now
    </a>
  </div>
);

export default StickyBookButton;
