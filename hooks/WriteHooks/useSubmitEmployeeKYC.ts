import { useWriteContract } from "wagmi";
import PayStreamABI from "../../ContractABI/PayStream";
import { getAddress } from "viem";
import { useCallback } from "react";
import { parseEther } from "viem";

const useSubmitEmployeeKYC = () => {
  const { writeContract } = useWriteContract();

  const contractAddress = process.env.NEXT_PUBLIC_PAYSTREAM_CONTRACT_ADDRESS;
  return useCallback(
    async (_documentHash: string) => {
      try {
        const result = writeContract({
          abi: PayStreamABI,
          address: getAddress(contractAddress ? contractAddress : ""),
          functionName: "submitEmployeeKYC",
          args: [_documentHash],
        });
        return result;
      } catch (err) {
        console.error("Error submitting Employee KYC:", err);
        throw err;
      }
    },
    [writeContract, contractAddress]
  );
};

export default useSubmitEmployeeKYC;
