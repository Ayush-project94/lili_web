import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-slate-50">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 md:grid-cols-2 md:py-14">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-brand-yellow">
            Shape Your Future
          </p>

          <h1 className="mt-3 text-4xl font-black leading-tight text-slate-900 md:text-6xl">
            Better Learning.
            <br />
            <span className="text-brand-blue">Brighter Future.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Expert guidance. Smart strategies. Personal attention.
            Your success is our mission.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/courses"
              className="rounded-md bg-brand-blue px-6 py-3 text-sm font-bold text-white hover:bg-brand-navy"
            >
              Explore Courses
            </Link>

            <Link
              to="/contact"
              className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700"
            >
              ▶ Watch Video
            </Link>
          </div>

          <p className="mt-5 text-sm font-bold text-slate-600">
            Join 5000+ Successful Students
          </p>
        </div>

        <div className="relative">
          <img
            src="/src/assets/hero.jpg"
            alt="Students learning"
            className="h-[340px] w-full rounded-2xl object-cover shadow-xl md:h-[430px]"
          />

          <div className="absolute right-5 top-5 rounded-xl bg-white px-5 py-4 text-center shadow-lg">
            <p className="text-3xl font-black text-brand-blue">20+</p>
            <p className="text-[10px] font-extrabold uppercase text-slate-600">
              Years of Excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}