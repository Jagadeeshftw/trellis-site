"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import { Scale } from "./scale";
import { motion } from "motion/react";
import { props } from "@/constants/props";
import { propIcons } from "./prop-icons";

export const Wheel = () => {
  const [activeProp, setActiveProp] = useState<number | null>(null);
  return (
    <Container className="border-divide relative overflow-hidden border-x px-4 md:px-8">
      <div id="wheel" className="relative flex flex-col items-center py-20">
        <Badge text="The wheel" />
        <SectionHeading className="mt-4">Thirteen things to plant</SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-lg">
          Open the wheel, turn it to a prop, and it appears where you are
          aiming. Nothing is rare and nothing costs anything. The choice is
          about what the plot needs.
        </SubHeading>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {props.map((prop, index) => {
            const Icon = propIcons[prop.icon];
            return (
              <div
                onMouseEnter={() => setActiveProp(index)}
                key={prop.name}
                className="relative"
              >
                {activeProp === index && (
                  <motion.div
                    layoutId="scale"
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                  >
                    <Scale />
                  </motion.div>
                )}
                <div className="relative z-10 h-full rounded-lg bg-gray-50 p-4 transition duration-200 hover:bg-transparent md:p-5 dark:bg-neutral-800">
                  <div className="flex items-center gap-2">
                    <Icon className="text-brand size-6" />
                  </div>
                  <h3 className="mt-4 mb-2 text-lg font-medium">{prop.name}</h3>
                  <p className="text-gray-600 dark:text-neutral-400">{prop.note}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
