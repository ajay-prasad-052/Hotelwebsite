import { useState } from "react";

function Booking() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-stone-100 px-6 pb-24 pt-36">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-600">
            Reservations
          </p>

          <h1 className="mt-3 text-5xl font-light">Book Your Stay</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-7 shadow-xl md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm">First Name</label>
              <input
                required
                className="mt-2 w-full rounded-xl border p-4 outline-none focus:border-amber-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm">Phone</label>
              <input
                required
                type="tel"
                className="mt-2 w-full rounded-xl border p-4 outline-none focus:border-amber-500"
                placeholder="+91"
              />
            </div>

            <div>
              <label className="text-sm">Check In</label>
              <input
                required
                type="date"
                className="mt-2 w-full rounded-xl border p-4 outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="text-sm">Check Out</label>
              <input
                required
                type="date"
                className="mt-2 w-full rounded-xl border p-4 outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="text-sm">Guests</label>
              <select className="mt-2 w-full rounded-xl border p-4 outline-none">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5 Guests</option>
              </select>
            </div>

            <div>
              <label className="text-sm">Room</label>
              <select className="mt-2 w-full rounded-xl border p-4 outline-none">
                <option>Deluxe Room</option>
                <option>Premium Suite</option>
                <option>Luxury Balcony Suite</option>
              </select>
            </div>
          </div>

          <button className="mt-8 w-full rounded-full bg-black py-4 font-medium text-white transition hover:bg-amber-600">
            Request Reservation
          </button>

          {submitted && (
            <p className="mt-5 rounded-xl bg-green-50 p-4 text-center text-green-700">
              Reservation request received! This is a frontend demo.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Booking;
