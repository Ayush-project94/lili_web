import studentsImage from "../../assets/students.jpg";

const testimonials = [
  ["Anita", "The guidance and support helped me build my skills with confidence."],
  ["Ayush kumar", "The faculty is amazing and the study material is excellent."],
  ["Sneha Patel", "Personal attention helped me improve my performance."],
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14">
      <div className="text-center">
        <p className="text-xs font-extrabold uppercase text-brand-blue">
          Student Success Stories
        </p>
        <h2 className="mt-2 text-3xl font-black">What Our Students Say</h2>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {testimonials.map(([name, text]) => (
          <div
            key={name}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex gap-4">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-slate-100">
                <img
                  src={studentsImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm leading-6 text-slate-600">“{text}”</p>
                <p className="mt-2 text-sm font-black text-brand-blue">
                  {name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}