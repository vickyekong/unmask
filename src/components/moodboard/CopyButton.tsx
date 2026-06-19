"use client";

import { useState } from "react";

export function CopyButton({ value, label }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group inline-flex items-center gap-2 font-body text-[0.65rem] tracking-wider uppercase text-aged-paper/40 transition-colors hover:text-burnished-gold"
      title={`Copy ${value}`}
    >
      <span className="font-mono text-xs normal-case tracking-normal text-aged-paper/70 group-hover:text-burnished-gold">
        {label ?? value}
      </span>
      <span className="text-[0.55rem]">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
