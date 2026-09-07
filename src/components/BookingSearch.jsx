import { CalendarDays, Users, Search } from "lucide-react";

function BookingSearch() {
  return (
    <section className="relative z-20 mx-auto -mt-10 max-w-6xl px-6">
      <div className="grid gap-3 rounded-2xl bg-white p-4 shadow-2xl md:grid-cols-4">
        <div className="flex items-center gap-3 rounded-xl border p-4">
          <CalendarDays className="text-amber-600" size={22} />

          <div>
            <p className="text-xs text-gray-500">Check In</p>
            <input
              type="date"
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl border p-4">
          <CalendarDays className="text-amber-600" size={22} />

          <div>
            <p className="text-xs text-gray-500">Check Out</p>
            <input
              type="date"
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl border p-4">
          <Users className="text-amber-600" size={22} />

          <div>
            <p className="text-xs text-gray-500">Guests</p>
            <select className="bg-transparent text-sm outline-none">
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5 Guests</option>
            </select>
          </div>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-black px-5 py-4 font-medium text-white transition hover:bg-amber-600">
          <Search size={20} />
          Check Availability
        </button>
      </div>
    </section>
  );
}

export default BookingSearch;
