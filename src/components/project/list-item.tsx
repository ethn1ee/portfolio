"use client";

import useProject from "@/hooks/use-project";
import { Project } from "@/lib/data";
import { memo } from "react";
import { Highlighter } from "../highlighter";
import { motion, type Variants } from "motion/react";

type ProjectListItemProps = {
  project: Project;
};

const ProjectListItem = memo(({ project }: ProjectListItemProps) => {
  const { selectedProject, setSelectedProject } = useProject();
  const isSelected = selectedProject === project;

  const itemVariant: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const borderVariant: Variants = {
    hidden: { width: "0%" },
    show: {
      width: "100%",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Highlighter>
      <motion.div
        variants={itemVariant}
        onClick={() => setSelectedProject(isSelected ? null : project)}
        data-selected={isSelected}
        className="space-y-2 px-4 py-3 overflow-hidden relative cursor-pointer data-[selected=true]:bg-primary data-[selected=true]:text-background transition-all"
      >
        <motion.div
          variants={borderVariant}
          className="h-[1px] absolute w-full top-0 left-0 bg-border"
        />
        <p className="uppercase">{project.title}</p>
        <p className="text-secondary font-sans leading-tight">
          {project.description[0]}
        </p>
      </motion.div>
    </Highlighter>
  );
});
ProjectListItem.displayName = "ProjectListItem";

export default ProjectListItem;
