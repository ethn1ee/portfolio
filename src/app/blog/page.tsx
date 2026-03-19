import Link from "next/link";

const Page = () => {
  return (
    <main>
      <div className="flex flex-col gap-6">
        {posts
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((p) => (
            <Link
              key={p.id}
              href={`/blog/${p.id}`}
              className="flex justify-between"
            >
              <p>{p.title}</p>
              <p className="text-muted-foreground">
                {p.date.toLocaleDateString("en", {
                  timeZone: "UTC",
                })}
              </p>
            </Link>
          ))}
      </div>
    </main>
  );
};

export default Page;

const posts = [
  { id: 0, title: "lorem ipsum", date: new Date() },
  { id: 1, title: "lorem ipsum2", date: new Date("2026-01-01") },
];
