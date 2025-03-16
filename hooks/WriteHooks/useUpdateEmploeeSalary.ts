import { useWriteContract } from "wagmi";
import PayStreamABI from "../../ContractABI/PayStream";
import { getAddress } from "viem";
import { useCallback } from "react";
import { parseEther } from "viem";

const useUpdateEmploeeSalary = () => {
  const { writeContract } = useWriteContract();

  const contractAddress = process.env.NEXT_PUBLIC_PAYSTREAM_CONTRACT_ADDRESS;
  return useCallback(
    async (_employeeAddress: string, _newSalary: number) => {
      try {
        const result = writeContract({
          abi: PayStreamABI,
          address: getAddress(contractAddress ? contractAddress : ""),
          functionName: "updateEmployeeSalary",
          args: [_employeeAddress, parseEther(_newSalary.toString())],
        });
        return result;
      } catch (err) {
        console.error("Error update Employee Salary:", err);
        throw err;
      }
    },
    [writeContract, contractAddress]
  );
};

export default useUpdateEmploeeSalary;
