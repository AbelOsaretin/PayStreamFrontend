import Image from "next/image";
import { WalletComponents } from "./WalletComponent";

const Nav = () => {
  console.log();
  return (
    <div className="flex justify-between items-center p-4 md:py-8 md:px-16 border-b border-[#8F8F8F]">
      <Image
        aria-hidden
        src="/logo.png"
        alt="PayStream Logo"
        width={190}
        height={38}
      />
      <div className="flex space-x-4 font-semibold text-[#15202E] leading-[24px]">
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Plan</p>
      </div>
      <div>
        {/* <button className="bg-[#1E3A8A] px-[26px] py-[12px] rounded-[24px] text-white">Connect Wallet</button> */}
        {/* <appkit-button /> */}
        <WalletComponents />
      </div>
    </div>
  );
};

export default Nav;
