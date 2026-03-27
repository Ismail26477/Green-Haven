import { useState } from "react";
import { CalendarIcon, Users, Phone as PhoneIcon, User, MessageCircle } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState<Date>();
  const [guests, setGuests] = useState("2");

  const handleWhatsApp = () => {
    const msg = `Hi! I'd like to book Green Haven Farmhouse.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ADate: ${date ? format(date, "PPP") : "Not selected"}%0AGuests: ${guests}`;
    window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Booking request sent! We'll contact you shortly.");
  };

  return (
    <section id="booking" className="py-8 px-5 bg-secondary/50">
      <h2 className="font-display text-2xl font-bold text-foreground text-center mb-2">
        Book Your Stay
      </h2>
      <p className="font-body text-sm text-muted-foreground text-center mb-5">
        Reserve your dates and escape to nature
      </p>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4">
        {/* Name */}
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Date */}
        <Popover>
          <PopoverTrigger asChild>
            <button
              type="button"
              className={cn(
                "w-full flex items-center gap-2 pl-10 pr-4 py-3 rounded-xl bg-background border border-border font-body text-sm text-left focus:outline-none focus:ring-2 focus:ring-ring relative",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              {date ? format(date, "PPP") : "Select Date"}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(d) => d < new Date()}
              initialFocus
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>

        {/* Guests */}
        <div className="relative">
          <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border font-body text-sm text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {[...Array(20)].map((_, i) => (
              <option key={i + 1} value={String(i + 1)}>
                {i + 1} Guest{i > 0 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm shadow-elevated transition-transform active:scale-95"
        >
          Send Booking Request
        </button>

        {/* WhatsApp */}
        <button
          type="button"
          onClick={handleWhatsApp}
          className="w-full py-3 rounded-full bg-[hsl(142,70%,40%)] text-primary-foreground font-body font-semibold text-sm flex items-center justify-center gap-2 transition-transform active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          Book via WhatsApp
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
