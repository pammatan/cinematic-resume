type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  const words = title.split(" ");
  const lead = words.slice(0, -1).join(" ");
  const accent = words.at(-1) ?? title;

  return (
    <div>
      <p className="text-[0.72rem] tracking-[0.22em] text-blood">{eyebrow}</p>
      <h2 className="mt-3 text-7xl leading-[0.95] font-semibold tracking-tight">
        {lead ? <span className="text-paper">{lead} </span> : null}
        <span className="text-blood">{accent}</span>
      </h2>
    </div>
  );
}
