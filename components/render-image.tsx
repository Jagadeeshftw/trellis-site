import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Render } from "@/constants/images";

/*
  One image slot. While `pending` is set on the render it carries a small
  label so a placeholder can never ship unnoticed.
*/
export const RenderImage = ({
  render,
  className,
  imgClassName,
  priority,
  sizes,
}: {
  render: Render;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
}) => {
  return (
    <div className={cn("relative", className)}>
      <Image
        src={render.src}
        alt={render.alt}
        width={render.width}
        height={render.height}
        priority={priority}
        sizes={sizes}
        draggable={false}
        className={cn("h-auto w-full select-none", imgClassName)}
      />
      {render.pending && (
        <span className="font-mono absolute bottom-2 left-2 rounded-sm bg-white/80 px-2 py-0.5 text-[10px] tracking-wide text-gray-600 uppercase dark:bg-neutral-900/80 dark:text-neutral-300">
          render pending
        </span>
      )}
    </div>
  );
};
