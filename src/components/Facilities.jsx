import { Car, Waves, Dumbbell, Utensils } from "lucide-react";

import { hotel } from "../data/hotel";

const icons = {
  Car,
  Waves,
  Dumbbell,
  Utensils,
};

function Facilities() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-600">
            Hotel Facilities
          </p>

          <h2 className="mt-3 text-4xl font-light md:text-5xl">
            Everything you need
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hotel.facilities.map((facility) => {
            const Icon = icons[facility.icon];

            return (
              <div
                key={facility.title}
                className="group overflow-hidden rounded-2xl border bg-white"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <Icon className="text-amber-600" size={26} />

                  <h3 className="mt-4 text-xl font-medium">{facility.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {facility.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Facilities;
