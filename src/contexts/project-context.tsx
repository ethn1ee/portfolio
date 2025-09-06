"use client";

import { Project } from "@/lib/data";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type ProjectContextType = {
  selectedProject: Project | null;
  setSelectedProject: Dispatch<SetStateAction<Project | null>>;
};

const ProjectContext = createContext<ProjectContextType | null>(null);

type ProjectContextProviderProps = {
  children: ReactNode;
};

const ProjectContextProvider = ({ children }: ProjectContextProviderProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <ProjectContext value={{ selectedProject, setSelectedProject }}>
      {children}
    </ProjectContext>
  );
};

export { ProjectContext, ProjectContextProvider };
