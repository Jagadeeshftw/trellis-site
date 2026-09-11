"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import { Scale } from "./scale";
import { motion } from "motion/react";
import { founding } from "@/constants/site";
import { Sprout, Milestone, Tag, UserRound } from "lucide-react";

/*
  The honesty section. The statement is rendered verbatim from constants;
  the cards restate its parts and what they mean for a visitor.
*/
export const Founding = () => {
  const cards = [
    {
      title: `${founding.seeds} seeds`,
      description:
        "Trees, bushes, grass, rocks and the rest, spread across the rooms so nobody arrives to bare ground. None of them are in the circle.",
      icon: <Sprout className="text-brand size-6" />,
    },
    {
      title: `${founding.stones} founding stones`,
      description:
        "The first four contributions to the stone circle. Four of its eight slots are built and four show a stake, so the blueprint arrives half done and asks for a fifth.",
      icon: <Milestone className="text-brand size-6" />,
    },
    {
      title: `All ${founding.total} say "${founding.attribution}"`,
      description:
        "Tap any of them and that is the name you get. None of them are attributed to a visitor, because none were planted by one.",
      icon: <Tag className="text-brand size-6" />,
    },
    {
      title: "Everything else is a person",
      description:
        `Anything in the garden that is not attributed to "${founding.attribution}" was placed by someone who visited after launch.`,
      icon: <UserRound className="text-brand size-6" />,
    },
  ];
  const [active, setActive] = useState<number | null>(null);
  return (
    <Container className="border-divide relative overflow-hidden border-x px-4 py-20 md:px-8">
      <div id="today" className="relative flex flex-col items-center">
        <Badge text="What is in the garden today" />
        <SectionHeading className="mt-4 max-w-3xl">
          {founding.statement}
        </SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-lg">
          We started the garden so it would not be empty on day one. We are
          saying so here, in full, because a garden that claims a community it
          does not have is just another empty World.
        </SubHeading>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
        {cards.map((card, index) => (
          <div
            onMouseEnter={() => setActive(index)}
            key={card.title}
            className="relative h-full"
          >
            {active === index && (
              <motion.div
                layoutId="scale-founding"
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
              >
                <Scale />
              </motion.div>
            )}
            <div className="relative z-10 h-full rounded-lg bg-gray-50 p-4 transition duration-200 hover:bg-transparent md:p-5 dark:bg-neutral-800">
              <div className="flex items-center gap-2">{card.icon}</div>
              <h3 className="mt-4 mb-2 text-base font-medium">{card.title}</h3>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
