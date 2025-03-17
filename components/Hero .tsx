import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-between items-center p-4 md:py-8 md:px-16">
      <div>
        <h1 className="font-bold text-[90px] leading-[96px] text-[#15202E]">
          Payroll.
        </h1>
        <h1 className="font-bold text-[90px] leading-[96px] text-[#15202E]">
          Simplified on
        </h1>
        <h1 className="font-bold text-[90px] leading-[96px] text-[#1E3A8A]">
          Blockchain.
        </h1>
        <p className="text-[24px] leading-[26px] text-[#525252] mt-[20px]">
          Automate salary disbursements securely and efficiently.
        </p>
        <div className="mt-[40px] flex space-x-8">
          <div className="flex items-center">
            <span className="font-bold text-[50px] leading-[64px] mr-[8px]">
              500+
            </span>
            <span>
              Companies <br /> Registered
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-bold text-[50px] leading-[64px] mr-[8px]">
              35k+
            </span>
            <span>
              Employee <br /> Joined
            </span>
          </div>
        </div>
      </div>
      <div>
        <Image src="/hero.jpg" alt="Hero Image" width={615} height={615} />
      </div>
    </div>
  );
};

export default Hero;
