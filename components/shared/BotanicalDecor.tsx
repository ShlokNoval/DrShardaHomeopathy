interface BotanicalDecorProps {
  variant?: "leaf" | "branch" | "sprig" | "herb";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

export default function BotanicalDecor({
  variant = "leaf",
  position = "bottom-left",
  className = "",
}: BotanicalDecorProps) {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  const svgPaths: Record<string, JSX.Element> = {
    leaf: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 100C20 100 25 60 60 40C95 20 100 20 100 20C100 20 95 60 60 80C25 100 20 100 20 100Z"
          fill="currentColor"
          opacity="0.15"
        />
        <path
          d="M60 40C60 40 55 70 30 90"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    branch: (
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 130C30 100 50 80 70 70C90 60 110 55 130 10"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.15"
          strokeLinecap="round"
        />
        <circle cx="50" cy="85" r="8" fill="currentColor" opacity="0.1" />
        <circle cx="90" cy="55" r="6" fill="currentColor" opacity="0.12" />
        <circle cx="110" cy="30" r="5" fill="currentColor" opacity="0.08" />
      </svg>
    ),
    sprig: (
      <svg width="100" height="160" viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M50 160V20"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.15"
          strokeLinecap="round"
        />
        <path
          d="M50 120C50 120 30 100 25 80"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.12"
          strokeLinecap="round"
        />
        <path
          d="M50 90C50 90 70 70 75 50"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.12"
          strokeLinecap="round"
        />
        <ellipse cx="25" cy="75" rx="12" ry="18" fill="currentColor" opacity="0.1" transform="rotate(-20 25 75)" />
        <ellipse cx="75" cy="45" rx="12" ry="18" fill="currentColor" opacity="0.1" transform="rotate(20 75 45)" />
      </svg>
    ),
    herb: (
      <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M40 120C40 120 40 60 40 30"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.15"
          strokeLinecap="round"
        />
        <path
          d="M40 80C30 70 15 65 10 55C15 55 35 60 40 80Z"
          fill="currentColor"
          opacity="0.12"
        />
        <path
          d="M40 55C50 45 65 40 70 30C65 30 45 35 40 55Z"
          fill="currentColor"
          opacity="0.12"
        />
        <circle cx="40" cy="20" r="10" fill="currentColor" opacity="0.08" />
      </svg>
    ),
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} text-accent pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {svgPaths[variant]}
    </div>
  );
}
