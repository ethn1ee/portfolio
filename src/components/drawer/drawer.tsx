"use client";

import useProject from "@/hooks/use-project";
import { ProjectDetail } from "../project";
import { useRef } from "react";
import { motion } from "motion/react";

const Drawer = () => {
  const { selectedProject } = useProject();
  const ref = useRef<HTMLDivElement>(null);
  const isOpen = !!selectedProject;

  return (
    <motion.div
      ref={ref}
      initial={{
        right: "-80svw",
      }}
      animate={
        isOpen
          ? {
              right: 0,
            }
          : {
              right: "-80svw",
            }
      }
      transition={{
        duration: 0.3,
        ease: "circOut",
      }}
      className="fixed block lg:hidden top-0 h-svh w-[80svw] bg-background/90 bg-noise border-l backdrop-blur-2xl"
    >
      {selectedProject && <ProjectDetail project={selectedProject} />}
    </motion.div>
  );
};

export default Drawer;
