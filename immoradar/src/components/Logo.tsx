export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-semibold tracking-tight ${className}`}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="3" fill="currentColor" />
          <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
          <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.4" opacity="0.3" />
        </svg>
      </span>
      <span className="text-lg text-ink-900">
        Immo<span className="text-brand-600">Radar</span>
      </span>
    </span>
  );
}
