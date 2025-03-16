"use client";

import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { AppKitButton } from "@reown/appkit/react"; // ✅ Import the button
import { WalletComponents } from "./WalletComponent";

export function Navbar() {
  // const { isConnected, connect, disconnect, role } = useAuth();

  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Wallet className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">PayStream</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            How it Works
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </Link>
        </div>
        <br />
        {/* <WalletComponents /> */}
      </div>
    </nav>
  );
}
