import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/src/assets/lili-logo.png"
            alt="Lili Org."
            className="h-12 w-12 object-contain"
          />
          <div className="leading-tight">
            <p className="text-lg font-black text-brand-navy">Lili INSTITUTE </p>
            <p className="text-[9px] font-bold tracking-wide text-slate-500">
              OF TECHNOLOGY
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive
                    ? "text-brand-blue"
                    : "text-slate-700 hover:text-brand-blue"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="rounded-md bg-brand-yellow px-5 py-2.5 text-xs font-extrabold text-slate-900 shadow-sm hover:bg-yellow-300"
          >
            admission open
          </Link>
        </div>

        <button
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="font-semibold text-slate-700"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-md bg-brand-yellow px-4 py-3 text-center text-sm font-bold"
            >
              Book Free Demo Class
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}