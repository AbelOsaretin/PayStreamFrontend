"use client";
import { useReadContract } from "wagmi";
import PayStreamABI from "../../ContractABI/PayStream";
import { getAddress } from "viem";

const useViewBalance = () => {
  const contractAddress = process.env.NEXT_PUBLIC_PAYSTREAM_CONTRACT_ADDRESS;
  const tokenAdd = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS;
  const tokenAddress = getAddress(tokenAdd ? tokenAdd : "");
  const result = useReadContract({
    abi: PayStreamABI,
    address: getAddress(contractAddress ? contractAddress : ""),
    functionName: "viewBalance",
    args: [tokenAdd],
  });

  return result;
};

export default useViewBalance;
