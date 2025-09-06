import { ProjectListItem } from "@/components/project";
import { projects } from "@/lib/data";

const Page = () => {
  return (
    <main className="@lg:w-2/3 @lg:pt-40 border-r space-y-10">
      <h1 className="text-7xl mb-5 font-bold tracking-tight px-4 font-sans">
        TAEHOON LEE
      </h1>

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
