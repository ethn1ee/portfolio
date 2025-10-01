"use client";

import { projects } from "@/lib/data";
import ProjectListItem from "./list-item";
import { motion, stagger, type Variants } from "motion/react";

const ProjectList = () => {
  const listVariant: Variants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: stagger(0.1, { ease: "easeIn" }),
      },
    },
  };

  return (
    <motion.div
      variants={listVariant}
      initial="hidden"
      animate="show"
      className="flex flex-col"
    >
      <div className="text-secondary text-sm mb-2 px-4">PROJECTS</div>
      {projects.map((p, i) => (
        <ProjectListItem key={i} project={p} />
      ))}
    </motion.div>
  );
};

export default ProjectList;
