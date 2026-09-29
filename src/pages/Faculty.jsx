import faculty1 from "../assets/faculty/faculty-1.jpg";
import faculty2 from "../assets/faculty/faculty-2.jpg";
import faculty3 from "../assets/faculty/faculty-3.jpg";
import faculty4 from "../assets/faculty/faculty-4.jpg";

export default function Faculty() {
  const faculty = [
    {
      image: faculty1,
      name: "AJAY KUMAR ",
      role: "founder,",
    },
    {
      image: faculty2,
      name: "DHARMRAJ ",
      role: "Senior Faculty | Computer Science",
    },
    {
      image: faculty3,
      name: "TULESHWAR ",
      role: "Computer Instructor",
    },
    {
      image: faculty4,
      name: "AJAY THAKUR",
      role: "Faculty | Computer Applications",
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <p className="text-xs font-extrabold uppercase text-brand-blue">
        Our Team
      </p>

      <h1 className="mt-2 text-4xl font-black">
        Faculty
      </h1>

      <p className="mt-4 max-w-2xl text-slate-600">
        Meet our experienced faculty members.
      </p>

      <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {faculty.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border bg-white p-6 text-center shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="mx-auto h-28 w-28 rounded-full object-cover"
            />

            <p className="mt-4 font-bold">
              {item.name}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {item.role}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}