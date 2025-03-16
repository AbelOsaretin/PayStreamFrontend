"use client";

import { Wallet } from "lucide-react";
import Link from "next/link";
import { WalletComponents } from "./WalletComponent";
import { Title } from "@radix-ui/react-toast";

export function DashNavBar({ titleName }) {
  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Wallet className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">{titleName}</span>
        </Link>
        <WalletComponents />
      </div>
    </nav>
  );
}
