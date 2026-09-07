import { Link, useParams } from "react-router-dom";
import { Check } from "lucide-react";

import { hotel } from "../data/hotel";

function RoomDetails() {
  const { id } = useParams();

  const room = hotel.rooms.find((item) => item.id === Number(id));

  if (!room) {
    return (
      <div className="px-6 pb-24 pt-40 text-center">
        <h1 className="text-4xl">Room not found</h1>
      </div>
    );
  }

  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2">
          <img
            src={room.image}
            alt={room.name}
            className="h-96 w-full rounded-3xl object-cover"
          />

          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-600">
              Room Details
            </p>

            <h1 className="mt-4 text-5xl font-light">{room.name}</h1>

            <p className="mt-6 leading-8 text-gray-500">{room.description}</p>

            <div className="mt-8">
              <p className="text-3xl font-medium">
                ₹{room.price.toLocaleString("en-IN")}
                <span className="text-base font-normal text-gray-400">
                  {" "}
                  / night
                </span>
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <p>{room.size}</p>
              <p>{room.guests}</p>
              <p>{room.bed}</p>
              <p>24/7 Service</p>
            </div>

            <h3 className="mt-10 text-xl font-medium">Amenities</h3>

            <div className="mt-5 grid grid-cols-2 gap-4">
              {room.amenities.map((amenity) => (
                <p
                  key={amenity}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <Check size={17} className="text-amber-600" />
                  {amenity}
                </p>
              ))}
            </div>

            <Link
              to="/booking"
              className="mt-10 rounded-full bg-black px-7 py-4 text-center font-medium text-white hover:bg-amber-600"
            >
              Book This Room
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
