"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import { Scale } from "./scale";
import { motion } from "motion/react";
import { RenderImage } from "./render-image";
import { renders } from "@/constants/images";
import { Layers, Warehouse, Shovel, Fence } from "lucide-react";

export const Grounds = () => {
  const rooms = [
    {
      title: "Three levels",
      description:
        "The garden steps up from the entrance to an upper terrace, where the stone circle stands.",
      icon: <Layers className="text-brand size-6" />,
    },
    {
      title: "Rooms divided by hedges",
      description:
        "Deep green hedges split the ground into rooms, so a full room and an empty one are both easy to see.",
      icon: <Fence className="text-brand size-6" />,
    },
    {
      title: "A potting shed by the entrance",
      description:
        "The first thing you see on arrival. It marks the spawn and gives the garden a front door.",
      icon: <Warehouse className="text-brand size-6" />,
    },
    {
      title: "Allotment plots, one left bare",
      description:
        "Beds of soil for planting in. One is deliberately dug and empty, so there is always somewhere obvious to start.",
      icon: <Shovel className="text-brand size-6" />,
    },
  ];
  const [active, setActive] = useState<number | null>(null);
  return (
    <Container className="border-divide relative overflow-hidden border-x px-4 py-20 md:px-8">
      <div id="grounds" className="relative flex flex-col items-center">
        <Badge text="The grounds" />
        <SectionHeading className="mt-4">A walled garden on three levels</SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-lg">
          Small enough to walk in a few minutes, divided enough that every
          placement lands somewhere particular.
        </SubHeading>
      </div>
      <div className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <RenderImage
          render={renders.plots}
          sizes="(min-width: 1024px) 600px, 100vw"
          imgClassName="rounded-lg shadow-aceternity"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {rooms.map((room, index) => (
            <div
              onMouseEnter={() => setActive(index)}
              key={room.title}
              className="relative h-full"
            >
              {active === index && (
                <motion.div
                  layoutId="scale-grounds"
                  className="absolute inset-0 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                >
                  <Scale />
                </motion.div>
              )}
              <div className="relative z-10 h-full rounded-lg bg-gray-50 p-4 transition duration-200 hover:bg-transparent md:p-5 dark:bg-neutral-800">
                <div className="flex items-center gap-2">{room.icon}</div>
                <h3 className="mt-4 mb-2 text-base font-medium">{room.title}</h3>
                <p className="text-sm text-gray-600 dark:text-neutral-400">
                  {room.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
