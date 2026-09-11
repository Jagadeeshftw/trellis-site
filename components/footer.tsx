import Link from "next/link";
import { Button } from "./button";
import { Container } from "./container";
import { Logo } from "./logo";
import { SubHeading } from "./subheading";
import { founding, navItems, site } from "@/constants/site";

export const Footer = () => {
  const visit = [
    { title: "Open on mobile", href: site.openUrl },
    { title: site.realm, href: site.openUrl },
  ];

  const page = [...navItems, { title: "The wheel", href: "#wheel" }, { title: "The grounds", href: "#grounds" }];

  return (
    <Container>
      {/*
        One rhythm for the whole footer: gap-y-12 spaces the stacked
        blocks on mobile/tablet, gap-3 spaces every heading-to-item and
        item-to-item pair inside a column. No child carries its own
        margin, so nothing can compound.
      */}
      <div className="grid grid-cols-1 gap-y-12 px-4 py-20 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        <div className="flex flex-col items-start gap-4 sm:col-span-2 md:col-span-4 lg:col-span-3">
          <Logo />
          <SubHeading as="p" className="max-w-lg text-left">
            {site.tagline}
          </SubHeading>
          <Button as="a" href={site.openUrl}>
            Open on mobile
          </Button>
        </div>
        <div className="flex flex-col gap-3 md:col-span-1">
          <p className="text-sm font-medium text-gray-600">Visit</p>
          {visit.map((item) => (
            <a
              href={item.href}
              key={item.title}
              className="text-footer-link text-sm font-medium"
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-3 md:col-span-1">
          <p className="text-sm font-medium text-gray-600">On this page</p>
          {page.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="text-footer-link text-sm font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-start gap-3 sm:col-span-2 md:col-span-2 lg:col-span-3">
          <p className="text-footer-link text-sm font-medium">Founding garden</p>
          <SubHeading as="p" className="text-left text-sm md:text-sm lg:text-sm">
            {founding.statement} Everything else was planted by a visitor.
          </SubHeading>
        </div>
      </div>
      <div className="flex flex-col items-center px-4 pt-8 pb-4">
        <p className="text-footer-link text-center text-sm">
          © {new Date().getFullYear()} Trellis. A Decentraland World, not an
          official Decentraland product.
        </p>
      </div>
    </Container>
  );
};
