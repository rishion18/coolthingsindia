export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 50"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Abstract Indian map outline */}
      <path
        d="M15 20c2-3 4-5 8-6 6-2 12 0 16 3 3 2 5 5 6 8 1 4-1 8-4 10-2 1-4 1-6 0-3-1-5-4-6-7-1-2 0-4 2-5 1-1 3-1 4 0"
        fill="none"
        stroke="#FF9933"
        strokeWidth="1"
        opacity="0.6"
      />
      
      {/* Saffron accent dot */}
      <circle cx="25" cy="15" r="2" fill="#FF9933" />
      
      {/* Green accent dot */}
      <circle cx="35" cy="25" r="1.5" fill="#138808" />
      
      {/* Main text */}
      <text x="50" y="20" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="#030213">
        Cool Things
      </text>
      <text x="50" y="35" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="400" fill="#2563eb">
        India
      </text>
      
      {/* Subtle decorative line */}
      <line x1="50" y1="25" x2="180" y2="25" stroke="#e5e7eb" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}