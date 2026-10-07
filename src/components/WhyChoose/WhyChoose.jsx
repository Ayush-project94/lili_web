import classroomImage from "../../assets/classroom.jpg";

export default function WhyChoose() {
  const points = [
    "Experienced & Qualified Faculty",
    "Practical & Project Based Learning",
    "Regular Tests & Performance Analysis",
    "Career Guidance & Support",
  ];

  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2">
        <div className="relative">
          <img
            src={classroomImage}
            alt="Lili Institute classroom"
            className="h-80 w-full rounded-2xl object-cover shadow-lg"
          />
          <div className="absolute bottom-4 right-4 rounded-xl bg-brand-yellow px-5 py-4 text-center shadow-lg">
            <p className="text-2xl font-black">100%</p>
            <p className="text-xs font-bold">Personal Attention</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase text-brand-blue">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-3xl font-black leading-tight">
            We Don't Just Teach,
            <br />
            We Build Futures.
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            At Lili Institute of Technology, we believe every student is
            unique. Our practical and result-oriented approach helps students
            achieve their goals.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li
                key={point}
                className="text-sm font-semibold text-slate-700"
              >
                <span className="mr-2 font-black text-brand-blue">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}