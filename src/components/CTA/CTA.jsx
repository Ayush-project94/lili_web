import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-14">
      <div className="flex flex-col justify-between gap-5 overflow-hidden rounded-2xl bg-brand-navy px-7 py-8 text-white md:flex-row md:items-center md:px-10">
        <div>
          <h2 className="text-2xl font-black">Book a Free Demo Class</h2>
          <p className="mt-1 text-sm text-blue-100">
            Experience the best teaching and take the first step towards your
            success.
          </p>
        </div>

        <Link
          to="/contact"
          className="rounded-md bg-brand-yellow px-6 py-3 text-sm font-black text-slate-900"
        >
          Book Now →
        </Link>
      </div>
    </section>
  );
}