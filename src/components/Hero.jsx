import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

import { hotel } from "../data/hotel";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src={hotel.heroImage}
        alt={hotel.name}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl text-white"
        >
          <div className="mb-5 flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-amber-400">
            <Star size={16} fill="currentColor" />
            Premium Hospitality
          </div>

          <h1 className="text-5xl font-light leading-tight sm:text-6xl lg:text-8xl">
            {hotel.name}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
            {hotel.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/booking"
              className="group flex items-center gap-3 rounded-full bg-amber-500 px-7 py-4 font-medium text-black transition hover:bg-amber-400"
            >
              Reserve Your Stay
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/rooms"
              className="rounded-full border border-white/40 px-7 py-4 transition hover:bg-white hover:text-black"
            >
              Explore Rooms
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
