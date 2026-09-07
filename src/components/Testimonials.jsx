import { Star } from "lucide-react";
import { hotel } from "../data/hotel";

function Testimonials() {
  return (
    <section className="bg-stone-100 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-600">
            Guest Reviews
          </p>

          <h2 className="mt-3 text-4xl font-light md:text-5xl">
            What our guests say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {hotel.testimonials.map((item) => (
            <div key={item.name} className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex gap-1 text-amber-500">
                {[...Array(item.rating)].map((_, index) => (
                  <Star key={index} size={17} fill="currentColor" />
                ))}
              </div>

              <p className="mt-6 leading-7 text-gray-600">"{item.review}"</p>

              <p className="mt-6 font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
