import { ProjectContext } from "@/contexts/project-context";
import { useContext } from "react";

const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
};

export default useProject;
