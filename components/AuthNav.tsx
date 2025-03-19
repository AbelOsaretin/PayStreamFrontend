"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useEffect, useState, useMemo } from "react";
import useViewBalance from "@/hooks/ReadHooks/useViewBalance";
import useApproveToken from "@/hooks/WriteHooks/useApproveToken";
import useDepositToken from "@/hooks/WriteHooks/useDepositToken";
import { Button } from "@/components/ui/button";
import { WalletComponents } from "./WalletComponent";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";

const AuthNav = () => {
  const { data: viewBalance } = useViewBalance();
  const approveToken = useApproveToken();
  const depositToken = useDepositToken();
  const [depositAmount, setDepositAmount] = useState("");
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const { status } = useAccount();
  // const router = useRouter();

  // useEffect(() => {
  //   if (status === "disconnected") {
  //     router.push("/");
  //   }
  // }, [status, router]);

  const handleDepositSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // Show loading toast (optional)
      const loadingToast = toast.loading("Depositing Funds...");
      await approveToken(Number(depositAmount));

      await depositToken(Number(depositAmount));

      // Clear loading toast and show success
      toast.dismiss(loadingToast);
      toast.success("Funds Added successfully!");
      console.log("Depositing:", {
        Amount: depositAmount,
      });
      setIsDepositModalOpen(false);
      setDepositAmount("");
    } catch (error) {
      // Show error toast without dismissing previous toasts
      toast.error("Error depositing funds. Please try again.");
      console.error(error);
      // Don't close the modal on error so user can try again
    }
  };
  return (
    <div className="flex border-b rounded-[100px] justify-between items-center p-4 md:py-8 md:px-16 border-b border-[#8F8F8F]">
      <Image
        aria-hidden
        src="/logo.png"
        alt="PayStream Logo"
        width={190}
        height={38}
      />
      <div className="flex gap-[24px]">
        <div>
          <p className="text-[#667085] text-[14px]">Balance</p>
          <span className="flex items-center font-semibold ">
            {Number(viewBalance)}
            <Image
              aria-hidden
              src="/usdt.png"
              alt="USDT Logo"
              width={26}
              height={26}
            />{" "}
          </span>
        </div>
        <div className="flex gap-[8px]">
          {/* <button className="border-[4px] border-[#E9ECF6] rounded-[1000px]"> */}
          <button
            className="rounded-[1000px] bg-[#F6F6FD] border-1 border-[#FFFFFF] px-[20px] py-[12px]"
            onClick={() => setIsDepositModalOpen(true)}
          >
            Deposit
          </button>
          {/* </button> */}
          <button className="border-[4px] border-[#E2E9FF] rounded-[1000px]">
            <button className="rounded-[1000px] bg-[#1E3A8A] border-1 border-[#FFFFFF] px-[20px] py-[12px] text-white">
              Withdraw
            </button>
          </button>
        </div>
      </div>
      <div>
        {/* <button className="bg-[#1E3A8A] px-[26px] py-[12px] rounded-[24px] text-white flex items-center gap-[8px]">
          <Image
            aria-hidden
            src="/metamask-logo.png"
            alt="metamask Logo"
            width={20}
            height={20}
          />
          OxgYVLSK...SS12U
        </button>
         */}
        <WalletComponents />
      </div>
      {/* Deposit Modal */}
      <Dialog open={isDepositModalOpen} onOpenChange={setIsDepositModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Deposit</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Deposit Amount</label>
              <Input
                type="number"
                placeholder="Enter amount"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleDepositSubmit}>Deposit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AuthNav;
