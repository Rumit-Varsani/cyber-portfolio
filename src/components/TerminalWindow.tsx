import { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function TerminalWindow({
  title = "session — bash",
  children,
  className = "",
}: Props) {
  return (
    <div className={`panel glow-box overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 border-b border-[var(--border)] bg-black/40 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 truncate text-xs text-[var(--text-dim)]">
          {title}
        </span>
      </div>
      <div className="p-4 md:p-6">{children}</div>
    </div>
  );
}
