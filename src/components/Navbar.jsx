import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 text-white backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-semibold tracking-wide">
          GRAND<span className="font-light">HAVEN</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm transition ${
                  isActive
                    ? "text-amber-400"
                    : "text-white/80 hover:text-amber-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/booking"
            className="rounded-full bg-amber-500 px-6 py-3 text-sm font-medium text-black transition hover:bg-amber-400"
          >
            Book Now
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-amber-400"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="rounded-full bg-amber-500 px-5 py-3 text-center font-medium text-black"
            >
              Book Your Stay
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
