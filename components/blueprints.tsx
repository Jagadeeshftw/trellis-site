"use client";
import React, { useEffect, useState } from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import { AnimatePresence, motion } from "motion/react";
import { DivideX } from "./divide";
import { propIcons } from "./prop-icons";
import {
  Fence,
  Footprints,
  Hourglass,
  Tag,
  Users,
  Milestone,
} from "lucide-react";

const SLOTS = 8;

export const Blueprints = () => {
  const facts = [
    {
      title: "Eight slots",
      description:
        "The stone circle on the upper terrace has eight places for a standing stone. Each one is a single placement.",
      icon: <Milestone className="text-brand size-6" />,
    },
    {
      title: "One slot per visit",
      description:
        "Spending your daily plant on a slot adds a stone to the circle instead of a plant to the ground.",
      icon: <Footprints className="text-brand size-6" />,
    },
    {
      title: "Finished only together",
      description:
        "Eight slots and one placement a day means the circle needs at least eight visits. Alone, that is eight days.",
      icon: <Hourglass className="text-brand size-6" />,
    },
    {
      title: "Signed stone by stone",
      description:
        "Every stone in the circle is attributed like any other placement. Tap one and see who set it.",
      icon: <Tag className="text-brand size-6" />,
    },
    {
      title: "A reason to bring someone",
      description:
        "You cannot finish it by yourself. The fastest way to close the circle is to bring another person back with you.",
      icon: <Users className="text-brand size-6" />,
    },
    {
      title: "Marked out on the terrace",
      description:
        "Stakes and a sign stand where the circle goes, so an unfinished one still reads as something waiting to happen.",
      icon: <Fence className="text-brand size-6" />,
    },
  ];
  return (
    <Container className="border-divide relative overflow-hidden border-x px-4 py-20 md:px-8">
      <div id="blueprints" className="relative flex flex-col items-center">
        <Badge text="Blueprints" />
        <SectionHeading className="mt-4">
          Some things are too big for one person
        </SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-lg">
          A blueprint is a structure with slots. Each slot takes one daily
          placement, so it only gets built if people come back over several
          days. That is the whole social mechanic.
        </SubHeading>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="grid grid-cols-1 gap-4">
          {facts.slice(0, 3).map((fact) => (
            <Card key={fact.title} {...fact} />
          ))}
        </div>
        <MiddleCard />
        <div className="grid grid-cols-1 gap-4">
          {facts.slice(3, 6).map((fact) => (
            <Card key={fact.title} {...fact} />
          ))}
        </div>
      </div>
    </Container>
  );
};

/*
  The circle filling over days. Purely illustrative: the count cycles from
  one stone to eight and back, it is not the live state of the garden.
*/
const MiddleCard = () => {
  const [filled, setFilled] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setFilled((prev) => (prev % SLOTS) + 1);
    }, 1800);
    return () => clearInterval(interval);
  }, []);
  const StoneIcon = propIcons.standingStone;
  return (
    <div className="relative flex min-h-40 flex-col justify-end overflow-hidden rounded-lg bg-gray-50 p-4 md:p-5 dark:bg-neutral-900">
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] mask-radial-from-10% [background-size:10px_10px] shadow-xl"></div>

      <div className="relative z-20 flex items-center justify-between">
        <span className="text-charcoal-700 text-sm font-medium dark:text-neutral-100">
          Stone circle
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={filled}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="shadow-aceternity font-mono rounded-sm bg-white px-2 py-1 text-xs text-gray-600 dark:bg-neutral-700 dark:text-white"
          >
            day {filled} · {filled} of {SLOTS}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="relative z-20 mx-auto my-8 size-52">
        <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic [background-image:conic-gradient(at_center,transparent,var(--color-sky-pink)_20%,transparent_30%)] opacity-60 blur-2xl [animation-duration:6s]"></div>
        <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic [background-image:conic-gradient(at_center,transparent,var(--color-brand)_20%,transparent_30%)] opacity-40 blur-2xl [animation-delay:3s] [animation-duration:6s]"></div>
        <div className="absolute inset-6 rounded-full border border-dashed border-gray-400 dark:border-neutral-600" />
        {Array.from({ length: SLOTS }).map((_, i) => {
          const angle = (360 / SLOTS) * i - 90;
          const isFilled = i < filled;
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `rotate(${angle}deg) translateX(104px) rotate(${-angle}deg) translate(-50%, -50%)`,
              }}
            >
              <motion.div
                initial={false}
                animate={{
                  scale: isFilled ? 1 : 0.85,
                  opacity: isFilled ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
                className={
                  isFilled
                    ? "shadow-aceternity flex size-9 items-center justify-center rounded-md bg-white text-charcoal-700 dark:bg-neutral-800 dark:text-neutral-100"
                    : "flex size-9 items-center justify-center rounded-md border border-dashed border-gray-400 text-gray-400 dark:border-neutral-600 dark:text-neutral-600"
                }
              >
                <StoneIcon className="size-5" />
              </motion.div>
            </div>
          );
        })}
      </div>

      <DivideX className="relative z-20" />
      <div className="relative z-20 mt-4 flex flex-col gap-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600 dark:text-neutral-400">Slots filled</span>
          <span className="font-mono text-gray-600 dark:text-neutral-400">
            {filled}/{SLOTS}
          </span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-700">
          <motion.div
            animate={{ width: `${(filled / SLOTS) * 100}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-brand h-full rounded-full"
          />
        </div>
        <p className="mt-1 text-[11px] text-gray-500 dark:text-neutral-500">
          Illustration of the mechanic, not the live count.
        </p>
      </div>
    </div>
  );
};

const Card = (props: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  const { title, description, icon } = props;
  return (
    <div className="relative z-10 rounded-lg bg-gray-50 p-4 transition duration-200 hover:bg-transparent md:p-5 dark:bg-neutral-800">
      <div className="flex items-center gap-2">{icon}</div>
      <h3 className="mt-4 mb-2 text-lg font-medium">{title}</h3>
      <p className="text-gray-600 dark:text-neutral-400">{description}</p>
    </div>
  );
};
