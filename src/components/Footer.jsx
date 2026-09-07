import { Link } from "react-router-dom";
import { Globe, Mail, MessageCircle, Phone } from "lucide-react";

import { hotel } from "../data/hotel";

function Footer() {
  return (
    <footer className="bg-black px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-semibold">
            GRAND<span className="font-light">HAVEN</span>
          </h2>

          <p className="mt-5 leading-7 text-white/50">{hotel.tagline}</p>
        </div>

        <div>
          <h3 className="font-medium">Explore</h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
            <Link to="/rooms">Rooms</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-medium">Contact</h3>

          <div className="mt-5 space-y-4 text-sm text-white/60">
            <p className="flex gap-3">
              <Phone size={17} />
              {hotel.phone}
            </p>

            <p className="flex gap-3">
              <Mail size={17} />
              {hotel.email}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-medium">Follow Us</h3>

          <div className="mt-5 flex gap-3">
            <a className="rounded-full border border-white/20 p-3">
              <Globe size={18} />
            </a>

            <a className="rounded-full border border-white/20 p-3">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/40">
        © {new Date().getFullYear()} {hotel.name}. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
