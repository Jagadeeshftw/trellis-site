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
    width: 2000,
    height: 2000,
  },
  spawn: {
    src: "/images/spawn.png",
    alt: "Arriving in Trellis: the view from the spawn point into the walled garden.",
    width: 2340,
    height: 1080,
  },
  stoneCircle: {
    src: "/images/stone-circle.png",
    alt: "The stone circle blueprint on the upper terrace, with stakes marking the open slots and a sign beside it.",
    width: 2400,
    height: 1500,
  },
  plots: {
    src: "/images/plots.png",
    alt: "The allotment plots, including the one left bare and dug.",
    width: 1600,
    height: 1000,
  },
  thumbnail: {
    src: "/images/thumbnail.png",
    alt: "The Trellis garden from above.",
    width: 570,
    height: 400,
  },
} satisfies Record<string, Render>;

/*
  Two more renders ship alongside these but aren't wired through the
  Render type above, since neither is embedded as an <Image> on the
  page:
    - public/images/og.png (1200x630) — the Open Graph share card,
      referenced by a plain string path in lib/seo.ts.
    - public/images/logo.png (480x480) — the hackathon submission
      logo, not used on the page at all.
*/
