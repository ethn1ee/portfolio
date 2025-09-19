"use client";

import { ProjectDetail } from "@/components/project";
import useProject from "@/hooks/use-project";

const Page = () => {
  const { selectedProject } = useProject();

  return (
    <aside className="@lg:w-1/3 h-svh sticky top-0 py-40">
      {selectedProject ? (
        <ProjectDetail project={selectedProject} />
      ) : (
        <p className="px-4 font-sans text-secondary text-lg leading-snug">
          I’m Taehoon (Ethan).
          <br />I spend most of my time playing with Kubernetes, making CLIs in
          Go, and writing helix editor configs.
        </p>
      )}
    </aside>
  );
};

export default Page;
