"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "@/components/NavItems";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar relative">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        <NavItems />
      </div>

      {/* Right-side buttons (Sign In/User + Hamburger) */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Sign In/UserButton (always visible) */}
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {hasMounted && isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 z-50 md:hidden">
          <NavItems isMobile onClick={closeMenu} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
