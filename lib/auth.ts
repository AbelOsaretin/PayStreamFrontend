"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ethers } from "ethers";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

type UserRole = "employer" | "employee" | null;

interface AuthContextType {
  isConnected: boolean;
  address: string | null;
  role: UserRole;
  connect: () => Promise<void>;
  disconnect: () => void;
}

interface Window {
  ethereum?: any;
}

const defaultContext: AuthContextType = {
  isConnected: false,
  address: null,
  role: null,
  connect: async () => {},
  disconnect: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [role, setRole] = useState<UserRole>(null);

  const determineRole = (address: string): UserRole => {
    const lastChar = address.slice(-1).toLowerCase();
    return parseInt(lastChar, 16) % 2 === 0 ? "employer" : "employee";
  };
  let provider = null;
  let signer = null;

  const connect = async () => {
    if (provider == null) {
      try {
        const provider = new ethers.JsonRpcProvider(process.env.NEXT_RPC_URL);
        const accounts = await provider.send("eth_requestAccounts", []);

        if (accounts.length > 0) {
          const userAddress = accounts[0];
          setAddress(userAddress);
          setIsConnected(true);
          setRole(determineRole(userAddress));
        }
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  const disconnect = () => {
    setAddress(null);
    setIsConnected(false);
    setRole(null);
  };
}

export const useAuth = () => useContext(AuthContext);

// export function WalletComponents() {
//   const router = useRouter();

//   const { status } = useAccount();
//   useEffect(() => {
//     if (status === "connected") {
//       router.push("");
//     }
//   });
// }
