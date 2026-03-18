import { Experience, ExperienceProps } from "@/components/experience";
import { Globe } from "@/components/globe";
import { LinkButton, LinkButtonProps } from "@/components/link-button";

const Page = () => {
  return (
    <main className="w-svw h-svh p-10 flex flex-col justify-between">
      <div>
        <h1 className="text-6xl font-bold flex justify-between mb-10">
          taehoon lee
        </h1>

        <div className="flex justify-between">
          <div className="space-y-10">
            <p className="text-sm text-muted-foreground">
              by day, i study distributed systems as a master’s student at
              carnegie mellon university.
              <br />
              by night, i contribute to open source or play with my kubernetes
              homelab.
            </p>

            <div className="flex flex-col gap-4 w-fit">
              {links.map((l, i) => (
                <LinkButton key={i} {...l} />
              ))}
            </div>
          </div>

          <div className="w-100">
            <Globe />
          </div>
        </div>
      </div>

      <div className="mask-b-from-0% flex flex-col pb-4">
        {experiences.map((e, i) => (
          <Experience key={i} {...e} />
        ))}
      </div>
    </main>
  );
};

export default Page;

const links: LinkButtonProps[] = [
  { type: "link", href: "https://github.com/thdxg", name: "github" },
  { type: "link", href: "https://linkedin.com/in/ethantlee", name: "linkedin" },
  { type: "copy", name: "ethantlee21@gmail.com" },
];

const experiences: ExperienceProps[] = [
  {
    company: "ukg",
    position: "software engineering intern",
    start: new Date("2025-05-01"),
    end: new Date("2025-08-01"),
  },
  {
    company: "estreamly",
    position: "software engineering intern",
    start: new Date("2024-05-01"),
    end: new Date("2024-08-01"),
  },
  {
    company: "emory university cav lab",
    position: "hci research assistant",
    start: new Date("2023-11-01"),
    end: new Date("2025-09-01"),
  },
];
