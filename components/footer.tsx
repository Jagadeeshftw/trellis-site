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
      <div className="grid grid-cols-1 px-4 py-20 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        <div className="mb-6 sm:col-span-2 md:col-span-4 lg:col-span-3">
          <Logo />
          <SubHeading as="p" className="mt-4 max-w-lg text-left">
            {site.tagline}
          </SubHeading>
          <Button as="a" href={site.openUrl} className="mt-4 mb-8 lg:mb-0">
            Open on mobile
          </Button>
        </div>
        <div className="col-span-1 mb-4 flex flex-col gap-2 md:col-span-1 md:mb-0">
          <p className="text-sm font-medium text-gray-600">Visit</p>
          {visit.map((item) => (
            <a
              href={item.href}
              key={item.title}
              className="text-footer-link my-2 text-sm font-medium"
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="col-span-1 mb-4 flex flex-col gap-2 md:col-span-1 md:mb-0">
          <p className="text-sm font-medium text-gray-600">On this page</p>
          {page.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="text-footer-link my-2 text-sm font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="col-span-1 mb-4 flex flex-col items-start sm:col-span-2 md:col-span-2 md:mb-0 lg:col-span-3">
          <p className="text-footer-link text-sm font-medium">Founding garden</p>
          <SubHeading
            as="p"
            className="mt-2 text-left text-sm md:text-sm lg:text-sm"
          >
            {founding.statement} Everything else was planted by a visitor.
          </SubHeading>
        </div>
      </div>
      <div className="my-4 flex flex-col items-center justify-between px-4 pt-8 md:flex-row">
        <p className="text-footer-link text-sm">
          © {new Date().getFullYear()} Trellis. A Decentraland World, not an
          official Decentraland product.
        </p>
        <p className="text-footer-link mt-4 text-sm md:mt-0">
          Built on an Aceternity UI template.
        </p>
      </div>
    </Container>
  );
};
