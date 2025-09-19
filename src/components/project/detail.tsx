import { Project } from "@/lib/data";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { Highlighter } from "../highlighter";
import Image from "next/image";

type ProjectDetailProps = {
  project: Project;
};

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div className="flex flex-col h-full justify-between gap-10">
      <div className="px-4">
        <h2 className="text-xl font-sans mb-1 uppercase">{project.title}</h2>
        {project.description.map((d, i) => (
          <p key={i} className="text-secondary text-lg font-sans leading-snug">
            {d}
          </p>
        ))}
      </div>

      <div className="px-4 grow-1 flex flex-wrap gap-2">
        {project.images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={img}
            width={200}
            height={200}
            className="h-50 static w-fit object-contain overflow-hidden inline-block mb-2"
          />
        ))}
      </div>

      <div>
        {project.github && <ProjectLink label="GITHUB" link={project.github} />}
        {project.website && (
          <ProjectLink label="WEBSITE" link={project.website} />
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;

type ProjectLinkProps = {
  label: string;
  link: string;
};
const ProjectLink = ({ label, link }: ProjectLinkProps) => {
  return (
    <Highlighter>
      <Link
        href={link}
        className="px-4 h-10 flex justify-between items-center w-full text-secondary"
      >
        {label}
        <ArrowUpRightIcon size={20} />
      </Link>
    </Highlighter>
  );
};
