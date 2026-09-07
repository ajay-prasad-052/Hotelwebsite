import { MapPin, Phone, Mail } from "lucide-react";
import { hotel } from "../data/hotel";

function Location() {
  return (
    <section className="bg-stone-100 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-amber-600">
            Find Us
          </p>

          <h2 className="mt-3 text-4xl font-light">Conveniently located</h2>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <MapPin className="text-amber-600" />

              <div>
                <p className="font-medium">Address</p>
                <p className="mt-1 text-gray-500">{hotel.address}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-amber-600" />

              <div>
                <p className="font-medium">Phone</p>
                <p className="mt-1 text-gray-500">{hotel.phone}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="text-amber-600" />

              <div>
                <p className="font-medium">Email</p>
                <p className="mt-1 text-gray-500">{hotel.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-87.5 overflow-hidden rounded-3xl">
          <iframe
            title="Hotel Location"
            src="https://www.google.com/maps?q=Delhi,India&output=embed"
            className="h-full min-h-87.5 w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Location;
