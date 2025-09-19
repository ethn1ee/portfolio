import { ProjectListItem } from "@/components/project";
import { projects } from "@/lib/data";

const Page = () => {
  return (
    <main className="@lg:w-2/3 @lg:pt-40 border-r space-y-10">
      <h1 className="text-7xl mb-5 font-bold tracking-tight px-4 font-sans">
        TAEHOON LEE
      </h1>
      <p className="px-4 font-sans text-primary text-lg leading-snug">
        I love experimenting with web and dev tools.
        <br />I spend most of my time playing with my Kubernetes homelab,
        building cool CLIs in Go, making websites, or writing helix editor
        configs.
      </p>
      <div className="flex flex-col">
        <div className="text-secondary text-sm mb-2 px-4">PROJECTS</div>
        {projects.map((p, i) => (
          <ProjectListItem key={i} project={p} />
        ))}
      </div>
    </main>
  );
};

export default Page;
