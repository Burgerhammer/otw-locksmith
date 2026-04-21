export function LogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield shape */}
      <path
        d="M40 2L4 18V52C4 72 40 94 40 94C40 94 76 72 76 52V18L40 2Z"
        fill="#e8651a"
        stroke="#c7520f"
        strokeWidth="2"
      />
      {/* Key silhouette */}
      <g transform="translate(18, 16)">
        {/* Key head (circular bow) */}
        <circle cx="22" cy="18" r="14" fill="#1a1a2e" opacity="0.85" />
        <circle cx="22" cy="18" r="8" fill="#e8651a" />
        {/* Key shaft */}
        <rect x="19" y="30" width="6" height="34" rx="1" fill="#1a1a2e" opacity="0.85" />
        {/* Key teeth */}
        <rect x="25" y="50" width="8" height="5" rx="1" fill="#1a1a2e" opacity="0.85" />
        <rect x="25" y="58" width="6" height="4" rx="1" fill="#1a1a2e" opacity="0.85" />
      </g>
    </svg>
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon className="w-10 h-12" />
      <div className="flex flex-col leading-tight">
        <span className="text-2xl font-black tracking-tight text-otw-orange">
          OTW
        </span>
        <span className="text-sm font-semibold tracking-widest uppercase text-white">
          Locksmith
        </span>
      </div>
    </div>
  );
}
