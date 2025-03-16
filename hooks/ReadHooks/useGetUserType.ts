"use client";
import { useReadContract } from "wagmi";
import PayStreamABI from "../../ContractABI/PayStream";
import { getAddress } from "viem";

const useGetUserType = (address: any) => {
  const contractAddress = process.env.NEXT_PUBLIC_PAYSTREAM_CONTRACT_ADDRESS;
  const result = useReadContract({
    abi: PayStreamABI,
    address: getAddress(contractAddress ? contractAddress : ""),
    functionName: "userTypes",
    args: [address],
  });

  return result;
};

export default useGetUserType;
