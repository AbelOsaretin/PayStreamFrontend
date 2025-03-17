import { useWriteContract } from "wagmi";
import PayStreamABI from "../../ContractABI/PayStream";
import { getAddress } from "viem";
import { useCallback } from "react";

const useApproveEmployeeKYC = () => {
  const { writeContract } = useWriteContract();

  const contractAddress = process.env.NEXT_PUBLIC_PAYSTREAM_CONTRACT_ADDRESS;
  return useCallback(
    async (_employeeAddress: string) => {
      const employeeAddress = getAddress(
        _employeeAddress ? _employeeAddress : ""
      );
      try {
        const result = writeContract({
          abi: PayStreamABI,
          address: getAddress(contractAddress ? contractAddress : ""),
          functionName: "approveEmployeeKYC",
          args: [employeeAddress],
        });
        return result;
      } catch (err) {
        console.error("Error approving employee KYC:", err);
        throw err;
      }
    },
    [writeContract, contractAddress]
  );
};

export default useApproveEmployeeKYC;
