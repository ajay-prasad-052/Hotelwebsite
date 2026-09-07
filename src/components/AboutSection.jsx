import { Link } from "react-router-dom";
import { hotel } from "../data/hotel";

function AboutSection() {
  return (
    <section className="bg-stone-100 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={hotel.aboutImage}
            alt="Hotel interior"
            className=" h-125 w-full object-cover"
          />
        </div>

        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-amber-600">
            About The Hotel
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-5xl">
            A place where every stay becomes a memory.
          </h2>

          <p className="mt-6 leading-8 text-gray-600">{hotel.description}</p>

          <p className="mt-5 leading-8 text-gray-600">
            From thoughtfully designed rooms to warm hospitality, every detail
            is created to make your stay comfortable and memorable.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-block rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:bg-amber-600"
          >
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
