import { courses } from "../data/courses";

export default function Courses() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <p className="text-xs font-extrabold uppercase text-brand-blue">Our Programs</p>
      <h1 className="mt-2 text-4xl font-black">All Courses</h1>

      <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <div key={course.name} className="rounded-xl border p-6 shadow-sm">
            <div className="text-3xl">{course.icon}</div>
            <h2 className="mt-4 text-xl font-black">{course.name}</h2>
            <p className="mt-2 text-sm text-slate-500">{course.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
}