import { useState } from "react";
import { X } from "lucide-react";

import { hotel } from "../data/hotel";

function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
            Gallery
          </p>

          <h2 className="mt-3 text-4xl font-light md:text-5xl">
            Explore The Experience
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {hotel.gallery.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelected(image)}
              className={`group overflow-hidden rounded-xl ${
                index === 0 || index === 5 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image}
                alt={`Hotel gallery ${index + 1}`}
                className="h-full min-h-48 w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-5"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute right-6 top-6"
            onClick={() => setSelected(null)}
          >
            <X size={32} />
          </button>

          <img
            src={selected}
            alt="Selected hotel"
            className="max-h-[90vh] max-w-full rounded-xl object-contain"
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
