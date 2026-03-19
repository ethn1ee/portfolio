import { Hero } from "@/components/hero";
import { LinkButton, LinkButtonProps } from "@/components/link-button";

const Page = () => {
  return (
    <main className="h-full flex flex-col gap-10 justify-center">
      <Hero />

      <h1 className="text-6xl font-bold flex justify-between">taehoon lee</h1>

      <p className="text-sm text-muted-foreground">
        kubernetes, next.js contributor
        <br />
        studying distributed system @ carnegie mellon
        <br />
        building things in web and cloud
      </p>

      <div className="flex flex-col gap-4 w-fit">
        {links.map((l, i) => (
          <LinkButton key={i} {...l} />
        ))}
      </div>
    </main>
  );
};

export default Page;

const links: LinkButtonProps[] = [
  // { type: "link", href: "/blog", name: "blog", internal: true },
  { type: "link", href: "https://github.com/thdxg", name: "github" },
  { type: "link", href: "https://linkedin.com/in/ethantlee", name: "linkedin" },
  { type: "copy", name: "ethantlee21@gmail.com" },
];
