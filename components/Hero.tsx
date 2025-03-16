"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Wallet } from "lucide-react";
import { WalletComponents } from "./WalletComponent";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import useGetUserType from "@/hooks/ReadHooks/useGetUserType";

export function Hero() {
  const router = useRouter();
  const { status } = useAccount();
  const account = useAccount();
  const { data: userRole } = useGetUserType(account.address);

  const handleClick = () => {
    if (status === "connected") {
      if (userRole !== undefined && Number(userRole) === 1) {
        router.push("../dashboard/employer");
      } else if (userRole !== undefined && Number(userRole) === 2) {
        router.push("../dashboard/employee");
      } else {
        router.push("/");
      }
    }
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)]" />
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-6xl font-bold tracking-tight">
            Stream Payments,{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Seamlessly
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Experience the future of payments with PayStream. Real-time, secure,
            and efficient payment streaming for the modern digital economy.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="gap-2" onClick={handleClick}>
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            {/* <Button variant="outline" size="lg" className="gap-2">
              <Wallet className="h-4 w-4" /> Connect Wallet
            </Button> */}
            <WalletComponents />
          </div>
        </div>
      </div>
    </section>
  );
}
