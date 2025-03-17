import { useWriteContract } from "wagmi";
import PayStreamABI from "../../ContractABI/PayStream";
import { getAddress } from "viem";
import { useCallback } from "react";
import { parseEther } from "viem";

const useProcessPayment = () => {
  const { writeContract } = useWriteContract();

  const contractAddress = process.env.NEXT_PUBLIC_PAYSTREAM_CONTRACT_ADDRESS;
  const tokenAddr = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS;
  return useCallback(
    async (_employeeAddress: string) => {
      try {
        const employeeAddress = getAddress(
          _employeeAddress ? _employeeAddress : ""
        );

        const tokenAddress = getAddress(tokenAddr ? tokenAddr : "");
        const result = writeContract({
          abi: PayStreamABI,
          address: getAddress(contractAddress ? contractAddress : ""),
          functionName: "processPayment",
          args: [employeeAddress, tokenAddress],
        });
        return result;
      } catch (err) {
        console.error("Error Processing Payment:", err);
        throw err;
      }
    },
    [writeContract, tokenAddr, contractAddress]
  );
};

export default useProcessPayment;
