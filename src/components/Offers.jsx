import { ArrowRight } from "lucide-react";
import { hotel } from "../data/hotel";

function Offers() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-600">
            Special Offers
          </p>

          <h2 className="mt-3 text-4xl font-light md:text-5xl">
            Make your stay special
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {hotel.offers.map((offer) => (
            <div
              key={offer.title}
              className="rounded-3xl bg-stone-900 p-8 text-white md:p-10"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
                {offer.discount}
              </p>

              <h3 className="mt-4 text-3xl font-light">{offer.title}</h3>

              <p className="mt-4 max-w-lg leading-7 text-white/60">
                {offer.description}
              </p>

              <button className="mt-7 flex items-center gap-2 text-sm font-medium text-amber-400">
                Learn More
                <ArrowRight size={17} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offers;
