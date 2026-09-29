/** Server-rendered number that ScrollAnimator animates when visible. Renders the final value for no-JS/SEO. */
export function Counter({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const final = value.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
  return (
    <span data-count={value} data-suffix={suffix} data-decimals={decimals} className="tabular-nums">
      {final}
    </span>
  );
}
