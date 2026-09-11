import {
  Armchair,
  Cylinder,
  Fence,
  Flower2,
  Landmark,
  Leaf,
  Mountain,
  Shrub,
  Sprout,
  Stone,
  TreeDeciduous,
} from "lucide-react";
import type { PropIcon } from "@/constants/props";

type IconProps = React.SVGProps<SVGSVGElement>;

const Toadstool = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 11a8 6 0 0 1 16 0H4z" />
    <path d="M9 11v7a3 3 0 0 0 6 0v-7" />
    <circle cx="9" cy="7.5" r="0.5" fill="currentColor" />
    <circle cx="14" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const StandingStone = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 21V7a3 3 0 0 1 6 0v14" />
    <path d="M5 21h14" />
  </svg>
);

const RedShrub = (props: IconProps) => (
  <Flower2 {...props} className={props.className} />
);

export const propIcons: Record<PropIcon, React.FC<IconProps>> = {
  tree: TreeDeciduous,
  bush: Shrub,
  leafy: Leaf,
  redShrub: RedShrub,
  grass: Sprout,
  boulder: Mountain,
  rock: Stone,
  toadstool: Toadstool,
  log: Cylinder,
  bench: Armchair,
  statue: Landmark,
  standingStone: StandingStone,
  fence: Fence,
};
