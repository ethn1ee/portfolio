"use client";

import useProject from "@/hooks/use-project";
import { Project } from "@/lib/data";
import { motion } from "motion/react";
import { memo } from "react";
import { Highlighter } from "../highlighter";

type ProjectListItemProps = {
  project: Project;
};

const ProjectListItem = memo(({ project }: ProjectListItemProps) => {
  const { selectedProject, setSelectedProject } = useProject();
  const isSelected = selectedProject === project;

  return (
    <Highlighter>
      <motion.div
        animate={
          isSelected
            ? {
                background: "var(--color-primary)",
                color: "var(--color-background)",
              }
            : {}
        }
        transition={{
          duration: 0.3,
          ease: "circOut",
        }}
        onClick={() => setSelectedProject(isSelected ? null : project)}
        className="h-18 flex flex-col gap-2 justify-center border-t px-4 cursor-pointer"
      >
        <p className="uppercase">{project.title}</p>
        <p className="text-secondary font-sans tracking-wide">
          {project.description[0]}
        </p>
      </motion.div>
    </Highlighter>
  );
});
ProjectListItem.displayName = "ProjectListItem";

export default ProjectListItem;
