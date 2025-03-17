"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { useAccount } from "wagmi";
import { NextPage } from "next";

const Home: NextPage = () => {
  const router = useRouter();
  const { isConnected } = useAccount();

  const [redirectAttempted, setRedirectAttempted] = useState(false);

  // useEffect(() => {
  //   if (isConnected && !redirectAttempted) {
  //     setRedirectAttempted(true);
  //     // router.replace("/dashboard/employer");
  //     router.forward();
  //     setRedirectAttempted(false);
  //   }
  // }, [isConnected, router, redirectAttempted]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <About />
      <Footer />
    </main>
  );
};

export default Home;
