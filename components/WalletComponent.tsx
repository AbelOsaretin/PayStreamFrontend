import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import useGetUserType from "@/hooks/ReadHooks/useGetUserType";

export function WalletComponents() {
  const router = useRouter();

  const { status } = useAccount();
  const account = useAccount();

  const { data: userRole, isLoading } = useGetUserType(account.address);

  // useEffect(() => {
  //   if (status === "connected") {
  //     router.push("../dashboard/employer");
  //   } else {
  //     router.push("/");
  //   }
  // }, [status, router]);

  useEffect(() => {
    if (status === "connected") {
      if (userRole !== undefined && Number(userRole) === 1) {
        router.push("../dashboard/employer");
      } else if (userRole !== undefined && Number(userRole) === 2) {
        router.push("../dashboard/employee");
      } else {
        router.push("/");
      }
    }
  }, [status, router, userRole]);

  return (
    <div className="flex justify-end">
      <appkit-button />
    </div>
  );
}
