import { LinkButton, LinkButtonProps } from "@/components/link-button";
import DitherShader from "@/components/ui/dither-shader";

const Page = () => {
  return (
    <main className="h-svh px-4 py-10 flex flex-col gap-10 justify-center">
      <DitherShader
        src="/photo.jpg"
        gridSize={2}
        ditherMode="bayer"
        colorMode="duotone"
        primaryColor="#001813"
        secondaryColor="#E6F7F3"
        threshold={0.5}
        objectFit="contain"
        className="h-80 w-60"
      />

      <h1 className="text-6xl font-bold flex justify-between">taehoon lee</h1>

      <p className="text-sm text-muted-foreground">
        kubernetes, next.js contributor
        <br />
        master of software engineering @ carnegie mellon
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
  { type: "link", href: "https://github.com/thdxg", name: "github" },
  { type: "link", href: "https://linkedin.com/in/ethantlee", name: "linkedin" },
  { type: "copy", name: "ethantlee21@gmail.com" },
];

// const experiences: ExperienceProps[] = [
//   {
//     company: "huddle",
//     position: "founding software engineer",
//     start: new Date("2025-08"),
//     end: new Date(),
//   },
//   {
//     company: "ukg",
//     position: "software engineering intern",
//     start: new Date("2025-05"),
//     end: new Date("2025-08"),
//   },
//   {
//     company: "estreamly",
//     position: "software engineering intern",
//     start: new Date("2024-05"),
//     end: new Date("2024-08"),
//   },
//   {
//     company: "ursatech",
//     position: "software engineering intern",
//     start: new Date("2024-01"),
//     end: new Date("2024-04"),
//   },
//   {
//     company: "emory university cav lab",
//     position: "research assistant",
//     start: new Date("2023-11"),
//     end: new Date("2025-09"),
//   },
// ];
