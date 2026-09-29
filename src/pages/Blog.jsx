const posts = [
  "Importance of Computer Skills",
  "How to Choose the Right Course",
  "Benefits of Practical Learning",
];

export default function Blog() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <p className="text-xs font-extrabold uppercase text-brand-blue">Latest Updates</p>
      <h1 className="mt-2 text-4xl font-black">Blog</h1>

      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post} className="rounded-xl border p-5 shadow-sm">
            <div className="h-36 rounded-lg bg-slate-100" />
            <h2 className="mt-4 font-black">{post}</h2>
            <p className="mt-2 text-sm text-slate-500">
              Useful education, computer and career guidance from Lili Institute.
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}