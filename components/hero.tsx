"use client";
import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import { motion } from "motion/react";
import { Button } from "./button";
import { Badge } from "./badge";
import Link from "next/link";
import { site } from "@/constants/site";
import { LogoSVG } from "./logo";

export const Hero = () => {
  const facts = ["One plant a day", "It stays forever", "Marked as yours"];
  return (
    <Container className="border-divide flex flex-col items-center justify-center border-x px-4 pt-10 pb-10 md:pt-32 md:pb-20">
      <Badge text="A Decentraland World you can plant in" />
      <Heading className="mt-4">
        A garden that remembers <br /> everyone who{" "}
        <span className="text-brand">visited</span>
      </Heading>

      <SubHeading className="mx-auto mt-6 max-w-lg">
        Trellis is a walled allotment garden built by the people who pass
        through it. Arrive, choose a plant, aim at open ground, tap. It stays,
        with your name on it.
      </SubHeading>

      <div className="mt-6 flex items-center gap-4">
        <Button as="a" href={site.openUrl}>
          Open on mobile
        </Button>
        <Button variant="secondary" as={Link} href="#how-it-works">
          How it works
        </Button>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        <LogoSVG className="size-4 text-gray-600 dark:text-neutral-300" />
        <div className="flex items-center">
          {facts.map((fact, index) => (
            <motion.span
              key={fact}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.15 }}
              className="border-gray-500 px-2 text-[10px] text-gray-600 not-first:border-l sm:text-sm dark:text-neutral-300"
            >
              {fact}
            </motion.span>
          ))}
        </div>
        <span className="font-mono border-l border-gray-500 pl-4 text-[10px] text-gray-600 sm:text-sm dark:text-neutral-300">
          {site.realm}
        </span>
      </div>
    </Container>
  );
};
