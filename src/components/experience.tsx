export type ExperienceProps = {
  company: string;
  position: string;
  start: Date;
  end: Date;
};

export const Experience = (props: ExperienceProps) => {
  return (
    <div className="flex cursor-pointer group">
      <div className="w-0.5 h-full bg-muted-foreground" />
      <div className="w-2 h-0.5 bg-muted-foreground mt-2 mr-4" />
      <div className="pb-4 group-hover:opacity-80">
        <p className="text-sm">{props.position}</p>
        <p className="text-sm text-muted-foreground">{props.company}</p>
      </div>
      <span className="text-sm text-muted-foreground relative left-4 invisible group-hover:visible">
        {props.start.getUTCMonth() + 1}/{props.start.getUTCFullYear()}
        {" - "}
        {props.end.getUTCMonth() + 1}/{props.end.getUTCFullYear()}
      </span>
    </div>
  );
};
