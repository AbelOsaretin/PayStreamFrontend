"use client";
import { useReadContract } from "wagmi";
import PayStreamABI from "../../ContractABI/PayStream";
import { getAddress } from "viem";

const useGetOwnerAddress = () => {
  const contractAddress = process.env.NEXT_PUBLIC_PAYSTREAM_CONTRACT_ADDRESS;
  const result = useReadContract({
    abi: PayStreamABI,
    address: getAddress(contractAddress ? contractAddress : ""),
    functionName: "owner",
  });

  return result;
};

export default useGetOwnerAddress;
