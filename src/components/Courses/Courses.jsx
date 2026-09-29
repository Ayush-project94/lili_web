import { Link } from "react-router-dom";
import { courses } from "../../data/courses";

export default function Courses() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-extrabold uppercase text-brand-blue">
            Our Programs
          </p>
          <h2 className="mt-2 text-3xl font-black">Top Courses</h2>
        </div>

        <Link
          to="/courses"
          className="hidden text-sm font-bold text-brand-blue sm:block"
        >
          View All Courses →
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
        {courses.map((course) => (
          <div
            key={course.name}
            className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">
              {course.icon}
            </div>

            <h3 className="mt-3 font-black text-slate-900">{course.name}</h3>
            <p className="mt-1 min-h-10 text-xs text-slate-500">
              {course.title}
            </p>

            <Link
              to="/courses"
              className="mt-4 inline-block text-xs font-extrabold text-brand-blue"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}