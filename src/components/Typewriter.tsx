"use client";

import { useEffect, useState } from "react";

type Props = {
  lines: string[];
  typingSpeed?: number;
  linePause?: number;
  className?: string;
};

export default function Typewriter({
  lines,
  typingSpeed = 28,
  linePause = 500,
  className = "",
}: Props) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const done = lineIndex >= lines.length;

  useEffect(() => {
    if (done) return;

    const current = lines[lineIndex];
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), typingSpeed);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, linePause);
    return () => clearTimeout(t);
  }, [charIndex, lineIndex, lines, typingSpeed, linePause, done]);

  return (
    <div className={`font-mono text-sm leading-relaxed md:text-base ${className}`}>
      {lines.slice(0, lineIndex).map((line, i) => (
        <div key={i} className="whitespace-pre-wrap">
          <span className="text-[var(--green)]">› </span>
          <span className="text-[var(--text-muted)]">{line}</span>
        </div>
      ))}
      {!done ? (
        <div className="whitespace-pre-wrap">
          <span className="text-[var(--green)]">› </span>
          <span className="text-[var(--text-muted)]">
            {lines[lineIndex].slice(0, charIndex)}
          </span>
          <span className="cursor-blink" />
        </div>
      ) : (
        <div className="mt-1 text-[var(--green)]">
          <span className="text-[var(--text-dim)]">ready</span>
          <span className="cursor-blink" />
        </div>
      )}
    </div>
  );
}
