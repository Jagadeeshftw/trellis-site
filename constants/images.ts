/*
  Every render on the page is listed here so a slot can be filled by
  replacing one file under public/images and, if the aspect changes,
  one width/height pair below. `pending` shows a small label over the
  placeholder; clear it when the real render lands.
*/
export type Render = {
  src: string;
  alt: string;
  width: number;
  height: number;
  pending?: boolean;
};

export const renders = {
  overhead: {
    src: "/images/overhead.png",
    alt: "The whole Trellis garden seen from above: hedged rooms on three levels, the potting shed by the entrance, and the allotment plots.",
    width: 1600,
    height: 1120,
    pending: true,
  },
  spawn: {
    src: "/images/spawn.png",
    alt: "Arriving in Trellis: the view from the spawn point into the walled garden.",
    width: 1600,
    height: 1000,
    pending: true,
  },
  stoneCircle: {
    src: "/images/stone-circle.png",
    alt: "The stone circle blueprint on the upper terrace, with stakes marking the open slots and a sign beside it.",
    width: 1600,
    height: 1000,
    pending: true,
  },
  plots: {
    src: "/images/plots.png",
    alt: "The allotment plots, including the one left bare and dug.",
    width: 1600,
    height: 1000,
    pending: true,
  },
  thumbnail: {
    src: "/images/thumbnail.png",
    alt: "The Trellis garden from above.",
    width: 570,
    height: 400,
    pending: true,
  },
} satisfies Record<string, Render>;
