export type ExperienceProps = {
  company: string;
  position: string;
  start: Date;
  end: Date;
};

export const Experience = (props: ExperienceProps) => {
  return (
    <div className="">
      <div className="text-sm text-muted-foreground">
        {leftPad(props.start.getUTCMonth() + 1, 2)}
        {"/"}
        {props.start.getUTCFullYear()}
        {" - "}
        {leftPad(props.end.getUTCMonth() + 1, 2)}
        {"/"}
        {props.end.getUTCFullYear()}
      </div>
      <div className="">
        <p className="text-sm">
          {props.position} @ {props.company}
        </p>
      </div>
    </div>
  );
};

const leftPad = (n: number, len: number) => {
  const ns = n.toString();
  const pad = len - ns.length;
  return pad > 0 ? "0".repeat(pad) + ns : ns;
};
