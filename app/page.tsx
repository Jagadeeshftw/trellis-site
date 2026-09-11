import { Blueprints } from "@/components/blueprints";
import { CTA } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { FAQs } from "@/components/faqs";
import { Founding } from "@/components/founding";
import { Grounds } from "@/components/grounds";
import { Hero } from "@/components/hero";
import { HeroImage } from "@/components/hero-image";
import { HowItWorks } from "@/components/how-it-works";
import { Wheel } from "@/components/wheel";

export default function Home() {
  return (
    <main>
      <DivideX />
      <Hero />
      <DivideX />
      <HeroImage />
      <DivideX />
      <HowItWorks />
      <DivideX />
      <Wheel />
      <DivideX />
      <Blueprints />
      <DivideX />
      <Founding />
      <DivideX />
      <Grounds />
      <DivideX />
      <FAQs />
      <DivideX />
      <CTA />
      <DivideX />
    </main>
  );
}
