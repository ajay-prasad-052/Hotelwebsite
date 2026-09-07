import AboutSection from "../components/AboutSection";
import Facilities from "../components/Facilities";

function About() {
  return (
    <>
      <div className="px-6 pb-10 pt-36 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-600">
          Our Story
        </p>

        <h1 className="mt-3 text-5xl font-light">About Our Hotel</h1>
      </div>

      <AboutSection />
      <Facilities />
    </>
  );
}

export default About;
