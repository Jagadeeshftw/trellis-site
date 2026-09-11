/*
  The thirteen props on the planting wheel, in wheel order as given by
  the repository owner. Icon names refer to components in
  components/prop-icons.tsx.
*/
export type PropIcon =
  | "tree"
  | "bush"
  | "leafy"
  | "redShrub"
  | "grass"
  | "boulder"
  | "rock"
  | "toadstool"
  | "log"
  | "bench"
  | "statue"
  | "standingStone"
  | "fence";

export const props: { name: string; note: string; icon: PropIcon }[] = [
  { name: "Tree", note: "Tall. Casts a shadow over the plot.", icon: "tree" },
  { name: "Bush", note: "Round and dense. Good along a hedge.", icon: "bush" },
  { name: "Leafy plant", note: "Broad leaves, low to the ground.", icon: "leafy" },
  { name: "Red shrub", note: "The one splash of colour on the wheel.", icon: "redShrub" },
  { name: "Grass", note: "A tuft. Fills a gap without blocking a view.", icon: "grass" },
  { name: "Boulder", note: "Big enough to sit on.", icon: "boulder" },
  { name: "Rock", note: "Smaller. Marks a corner or an edge.", icon: "rock" },
  { name: "Toadstool", note: "Small, and easy to miss until you look down.", icon: "toadstool" },
  { name: "Log", note: "Fallen timber. Lies where you point it.", icon: "log" },
  { name: "Bench", note: "Somewhere for the next visitor to stop.", icon: "bench" },
  { name: "Statue", note: "The one figure on the wheel.", icon: "statue" },
  { name: "Standing stone", note: "Also what the stone circle is built from.", icon: "standingStone" },
  { name: "Fence", note: "A short run of timber. Line them up to make a border.", icon: "fence" },
];
