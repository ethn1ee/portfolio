"use client";

import { GameOfLife } from "@/components/gameoflife";
import { ProjectDetail } from "@/components/project";
import useProject from "@/hooks/use-project";

const Aside = () => {
  const { selectedProject } = useProject();

  return (
    <aside className="hidden lg:block w-1/3 h-svh sticky top-0">
      {selectedProject ? (
        <ProjectDetail project={selectedProject} />
      ) : (
        <GameOfLife />
      )}
    </aside>
  );
};

export default Aside;
