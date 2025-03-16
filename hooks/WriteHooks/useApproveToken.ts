import { useWriteContract } from "wagmi";
import TestTokenABI from "@/ContractABI/TestToken";
import { getAddress } from "viem";
import { useCallback } from "react";
import { parseEther } from "viem";

const useApproveToken = () => {
  const { writeContract } = useWriteContract();

  const contractAddress = process.env.NEXT_PUBLIC_PAYSTREAM_CONTRACT_ADDRESS;
  const tokenAddress = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS;
  return useCallback(
    async (_amount: number) => {
      try {
        const approveAmount = writeContract({
          abi: TestTokenABI,
          address: getAddress(tokenAddress ? tokenAddress : ""),
          functionName: "approve",
          args: [contractAddress, parseEther(_amount.toString())],
        });
        console.log("Approved Amount", _amount);
        return approveAmount;
      } catch (err) {
        console.error("Error Approving Funds:", err);
        throw err;
      }
    },
    [writeContract, tokenAddress, contractAddress]
  );
};

export default useApproveToken;
