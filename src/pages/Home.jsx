import Hero from "../components/Hero";
import BookingSearch from "../components/BookingSearch";
import AboutSection from "../components/AboutSection";
import RoomsSection from "../components/RoomSection";
import Facilities from "../components/Facilities";
import Offers from "../components/Offers";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Location from "../components/Location";
import FAQ from "../components/FAQ";

function Home() {
  return (
    <>
      <Hero />
      <BookingSearch />
      <AboutSection />
      <RoomsSection />
      <Facilities />
      <Offers />
      <Gallery />
      <Testimonials />
      <Location />
      <FAQ />
    </>
  );
}

export default Home;
