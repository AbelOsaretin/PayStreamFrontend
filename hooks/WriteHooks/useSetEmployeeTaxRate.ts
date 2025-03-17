import { useWriteContract } from "wagmi";
import PayStreamABI from "../../ContractABI/PayStream";
import { formatEther, getAddress } from "viem";
import { useCallback } from "react";
import { parseEther } from "viem";

const useSetEmployeeTaxRate = () => {
  const { writeContract } = useWriteContract();

  const contractAddress = process.env.NEXT_PUBLIC_PAYSTREAM_CONTRACT_ADDRESS;
  return useCallback(
    async (_employeeAddress: string, _taxRate: number) => {
      const employeeAddress = getAddress(
        _employeeAddress ? _employeeAddress : ""
      );
      try {
        const result = writeContract({
          abi: PayStreamABI,
          address: getAddress(contractAddress ? contractAddress : ""),
          functionName: "setEmployeeTaxRate",
          args: [employeeAddress, BigInt(_taxRate)],
        });
        console.log("Hook Tax Rate: ", _taxRate.toString());
        return result;
      } catch (err) {
        console.error("Error setting Employee Tax:", err);
        throw err;
      }
    },
    [writeContract, contractAddress]
  );
};

export default useSetEmployeeTaxRate;
