export function LogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield outline */}
      <path
        d="M40 4L6 20V54C6 76 40 96 40 96C40 96 74 76 74 54V20L40 4Z"
        fill="#e8651a"
      />
      <path
        d="M40 8L10 22V53C10 72 40 91 40 91C40 91 70 72 70 53V22L40 8Z"
        fill="#d45a15"
      />
      <path
        d="M40 10L12 23.5V53C12 71 40 89 40 89C40 89 68 71 68 53V23.5L40 10Z"
        fill="#e8651a"
      />
      {/* Key silhouette — side profile of a traditional key */}
      <g transform="translate(22, 14)">
        {/* Key bow (round head with hole) */}
        <circle cx="18" cy="16" r="13" fill="#1a1a2e" />
        <circle cx="18" cy="16" r="7" fill="#e8651a" />
        {/* Key shoulder */}
        <rect x="14" y="27" width="8" height="6" fill="#1a1a2e" />
        {/* Key blade (shaft) */}
        <rect x="15.5" y="33" width="5" height="38" fill="#1a1a2e" />
        {/* Key cuts (teeth) — stepped profile on right side */}
        <polygon
          points="20.5,48 28,48 28,52 25,52 25,56 28,56 28,59 25,59 25,63 28,63 28,67 20.5,67"
          fill="#1a1a2e"
        />
        {/* Key tip */}
        <polygon
          points="15.5,71 20.5,71 22,68 20.5,67 15.5,67"
          fill="#1a1a2e"
        />
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
