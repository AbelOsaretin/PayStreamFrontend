// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// import { Navbar } from "@/components/Navbar";
// import { Hero } from "@/components/Hero";
// import { Features } from "@/components/Features";
// import { HowItWorks } from "@/components/HowItWorks";
// import { Benefits } from "@/components/Benefits";
// import { Pricing } from "@/components/Pricing";
// import { About } from "@/components/About";
// import { Footer } from "@/components/Footer";
// import { useAccount } from "wagmi";
// import { NextPage } from "next";

// const Home: NextPage = () => {
//   const router = useRouter();
//   const { isConnected } = useAccount();

//   const [redirectAttempted, setRedirectAttempted] = useState(false);

//   // useEffect(() => {
//   //   if (isConnected && !redirectAttempted) {
//   //     setRedirectAttempted(true);
//   //     // router.replace("/dashboard/employer");
//   //     router.forward();
//   //     setRedirectAttempted(false);
//   //   }
//   // }, [isConnected, router, redirectAttempted]);

//   return (
//     <main className="min-h-screen">
//       <Navbar />
//       <Hero />
//       <Features />
//       <HowItWorks />
//       <Benefits />
//       <Pricing />
//       <About />
//       <Footer />
//     </main>
//   );
// };

// export default Home;

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Navbar } from "@/components/Navbar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero ";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import Footer from "@/components/Footer";
import { useAccount } from "wagmi";
import { NextPage } from "next";
import Image from "next/image";
import Info from "@/components/Info";
import Newsletter from "@/components/Newsletter";

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
      <Nav />
      {/* <Navbar /> */}
      <Hero />
      <div className="bg-[#1E3A8A] h-[150px] flex justify-center items-center ">
        <Image
          src="/blocverse.png"
          alt="Blocverse Icon"
          width={208}
          height={90}
        />
        <Image
          src="/metamask.png"
          alt="Metamask Icon"
          width={208}
          height={90}
        />
        <Image src="/google.png" alt="Google Icon" width={208} height={90} />
        <Image src="/phantom.png" alt="Phantom Icon" width={208} height={90} />
      </div>
      <Info />
      <div className="flex justify-center mt-[70px] gap-[80px]">
        <div className="max-w-[695px]">
          <h3 className="font-bold text-[67px] leading-[88px] mb-[24px]">
            One Powerful System for Your Team & Business
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tellus arcu egestas
            sollicitudin tristique nisi lacus at adipiscing euismod. Faucibus
            sollicitudin urna ante fermentum magna amet ut nulla ut. Mi tortor
            tincidunt viverra quis viverra consectetur blandit. Tincidunt
            habitant convallis neque tellus tellus enim viverra vitae.
          </p>
        </div>
        <Image src="/system.png" alt="system" width={450} height={440} />
      </div>
      <Newsletter />
      {/* <Features />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <About /> */}
      <Footer />
    </main>
  );
};

export default Home;
