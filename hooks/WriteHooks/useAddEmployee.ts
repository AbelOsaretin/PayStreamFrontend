import { useWriteContract } from "wagmi";
import PayStreamABI from "../../ContractABI/PayStream";
import { getAddress } from "viem";
import { useCallback } from "react";
import { parseEther } from "viem";

const useAddEmployee = () => {
  const { writeContract } = useWriteContract();

  const contractAddress = process.env.NEXT_PUBLIC_PAYSTREAM_CONTRACT_ADDRESS;
  return useCallback(
    async (_employeeAddress: string, _name: string, _salary: number) => {
      const employeeAddress = getAddress(
        _employeeAddress ? _employeeAddress : ""
      );
      try {
        const result = writeContract({
          abi: PayStreamABI,
          address: getAddress(contractAddress ? contractAddress : ""),
          functionName: "addEmployee",
          args: [employeeAddress, _name, parseEther(_salary.toString())],
        });
        return result;
      } catch (err) {
        console.error("Error adding Employee:", err);
        throw err;
      }
    },
    [writeContract, contractAddress]
  );
};

export default useAddEmployee;
