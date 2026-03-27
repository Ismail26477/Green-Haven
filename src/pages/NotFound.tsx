import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Amenities from "@/components/Amenities";
import Pricing from "@/components/Pricing";
import BookingForm from "@/components/BookingForm";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyBookButton from "@/components/StickyBookButton";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroSlider />
    <Gallery />
    <About />
    <Amenities />
    <Pricing />
    <BookingForm />
    <Location />
    <Testimonials />
    <Footer />
    <WhatsAppButton />
    <StickyBookButton />
  </div>
);

export default Index;
