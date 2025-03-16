import { useWriteContract } from "wagmi";
import PayStreamABI from "../../ContractABI/PayStream";
import { getAddress } from "viem";
import { useCallback } from "react";
import { parseEther } from "viem";

const useDepositToken = () => {
  const { writeContract } = useWriteContract();

  const contractAddress = process.env.NEXT_PUBLIC_PAYSTREAM_CONTRACT_ADDRESS;
  const tokenAddress = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS;
  return useCallback(
    async (_amount: number) => {
      try {
        const result = writeContract({
          abi: PayStreamABI,
          address: getAddress(contractAddress ? contractAddress : ""),
          functionName: "depositToken",
          args: [tokenAddress, parseEther(_amount.toString())],
        });
        return result;
      } catch (err) {
        console.error("Error Depositing Funds:", err);
        throw err;
      }
    },
    [writeContract, tokenAddress, contractAddress]
  );
};

export default useDepositToken;
