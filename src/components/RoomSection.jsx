import { ArrowUpRight, Users, BedDouble } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { hotel } from "../data/hotel";

function RoomsSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-amber-600">
              Stay With Us
            </p>

            <h2 className="text-4xl font-light md:text-5xl">Rooms & Suites</h2>
          </div>

          <Link
            to="/rooms"
            className="flex items-center gap-2 text-sm font-medium hover:text-amber-600"
          >
            View all rooms
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {hotel.rooms.map((room, index) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-sm font-medium">
                  ₹{room.price.toLocaleString("en-IN")} / night
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-medium">{room.name}</h3>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                  {room.description}
                </p>

                <div className="mt-5 flex gap-5 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <Users size={17} />
                    {room.guests}
                  </span>

                  <span className="flex items-center gap-2">
                    <BedDouble size={17} />
                    {room.bed}
                  </span>
                </div>

                <Link
                  to={`/rooms/${room.id}`}
                  className="mt-6 block rounded-full border border-black py-3 text-center text-sm font-medium transition hover:bg-black hover:text-white"
                >
                  View Room
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoomsSection;
