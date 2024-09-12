"use client";

import { usePathname } from "next/navigation";
import Container from "./Container";
import Link from "next/link";

const mainNavLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/steam-top-100",
    label: "Steam",
  },
  {
    href: "/create-entry",
    label: "Add game",
  },
  {
    href: "/about",
    label: "About",
  },
];
export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-background text-foreground">
      <Container>
        <ul className="flex gap-6 mainnav justify-center">
          {mainNavLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`${
                  pathname === link.href && "text-neongreen underline"
                }`}
                href={link.href}
              >
                {link.label.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
