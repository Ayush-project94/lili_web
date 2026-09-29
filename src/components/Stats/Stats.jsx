import { stats } from "../../data/site";

export default function Stats() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="border-white/20 px-5 py-6 text-center md:border-r"
          >
            <p className="text-2xl font-black text-brand-yellow">
              {item.number}
            </p>
            <p className="mt-1 text-xs text-blue-100">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}