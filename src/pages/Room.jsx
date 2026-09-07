import { Link } from "react-router-dom";
import { hotel } from "../data/hotel";

function Rooms() {
  return (
    <div className="px-6 pb-24 pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-600">
            Accommodation
          </p>

          <h1 className="mt-3 text-5xl font-light">Rooms & Suites</h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hotel.rooms.map((room) => (
            <div key={room.id} className="overflow-hidden rounded-2xl border">
              <img
                src={room.image}
                alt={room.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl">{room.name}</h2>

                <p className="mt-3 text-gray-500">{room.description}</p>

                <div className="mt-5 flex items-center justify-between">
                  <strong>
                    ₹{room.price.toLocaleString("en-IN")}
                    <span className="font-normal text-gray-400"> / night</span>
                  </strong>

                  <Link
                    to={`/rooms/${room.id}`}
                    className="rounded-full bg-black px-5 py-3 text-sm text-white"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rooms;
