import { Link } from "react-router-dom";
import { navLinks } from "../../data/site";
import logo from "../../assets/lili-logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-4">
        <div>
          <img
            src={logo}
            alt="Lili Org."
            className="h-16 w-16 object-contain"
          />
          <p className="mt-3 text-sm text-slate-400">
            Education | Growth | Better Tomorrow
          </p>
        </div>

        <div>
          <h3 className="font-bold">Quick Links</h3>
          <div className="mt-3 space-y-2 text-sm text-slate-400">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold">Our Courses</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            DCA • PGDCA • BCA
            <br />
            BCC • DEO • ADCA • TALLY
          </p>
        </div>

        <div>
          <h3 className="font-bold">Contact Us</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            +91 8516047098
            <br />
            liliorg8516@gmail.com
            <br />
           patna koria Chhattisgarh, India
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-slate-500">
        © 2026 Lili Institute of Technology. All Rights Reserved.
      </div>
    </footer>
  );
}