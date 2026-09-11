import Link from "next/link";

/* A trellis lattice: two uprights and two crossbars with a climbing stem. */
export const LogoSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 2v20M18 2v20M1 8h20M1 16h20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11 22c0-5 0-9-4-11 4 0 6-2 6-6 0 4 2 6 6 6-4 2-4 6-4 11"
        stroke="var(--color-brand)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <LogoSVG />
      <span className="text-2xl font-medium">Trellis</span>
    </Link>
  );
};
