"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const NavItems = ({
  isMobile = false,
  onClick,
}: {
  isMobile?: boolean;
  onClick?: () => void;
}) => {
  const pathname = usePathname();

  return (
    <nav className={cn("flex gap-4", isMobile ? "flex-col" : "items-center")}>
      {navItems.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          onClick={onClick}
          className={cn(
            pathname === href && "text-primary font-semibold",
            isMobile && "text-lg py-2"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
