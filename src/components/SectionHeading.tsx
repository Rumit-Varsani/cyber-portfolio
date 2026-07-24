type Props = {
  command: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ command, title, subtitle }: Props) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-xs tracking-widest text-[var(--text-dim)] uppercase">
        <span className="text-[var(--green)]">$</span> {command}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)] md:text-3xl glow-text">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
          {subtitle}
        </p>
      ) : null}
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-[var(--green)] to-transparent" />
    </div>
  );
}
