"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useEffect, useState, useMemo } from "react";
import { toast } from "sonner";
import { getAddress, formatEther } from "viem";
import useUpdateEmploeeSalary from "@/hooks/WriteHooks/useUpdateEmploeeSalary";
import useSetEmployeeTaxRate from "@/hooks/WriteHooks/useSetEmployeeTaxRate";
import useDepositToken from "@/hooks/WriteHooks/useDepositToken";
import useApproveToken from "@/hooks/WriteHooks/useApproveToken";
const EmployeeNav = () => {
  const router = useRouter();
  // Modal states
  const [isSalaryModalOpen, setIsSalaryModalOpen] = useState(false);
  const [isTaxModalOpen, setIsTaxModalOpen] = useState(false);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);

  // Form states
  const [salaryAmount, setSalaryAmount] = useState("");
  const [employeeAddressSalary, setEmployeeAddressSalary] = useState("");
  const [taxRate, setTaxRate] = useState("");
  const [employeeAddressTax, setEmployeeAddressTax] = useState("");
  const [depositAmount, setDepositAmount] = useState("");

  // Hooks
  const updateEmployeeSalary = useUpdateEmploeeSalary();
  const setEmployeeTaxRate = useSetEmployeeTaxRate();
  const approveToken = useApproveToken();
  const depositToken = useDepositToken();

  const handleSalarySubmit = async (e: any) => {
    e.preventDefault();

    try {
      // Show loading toast (optional)
      const loadingToast = toast.loading("Updating employee salary...");

      await updateEmployeeSalary(
        getAddress(employeeAddressSalary),
        Number(salaryAmount)
      );

      // Clear loading toast and show success
      toast.dismiss(loadingToast);
      toast.success("Employee added successfully!");
      console.log("Salary:", {
        Amount: salaryAmount,
        Address: employeeAddressSalary,
      });
      setIsSalaryModalOpen(false);
      setSalaryAmount("");
      setEmployeeAddressSalary("");
    } catch (error) {
      // Show error toast without dismissing previous toasts
      toast.error("Error adding employee. Please try again.");
      console.error(error);
      // Don't close the modal on error so user can try again
    }
  };

  const handleTaxSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // Show loading toast (optional)
      const loadingToast = toast.loading("Setting employee Tax...");

      await setEmployeeTaxRate(getAddress(employeeAddressTax), Number(taxRate));

      // Clear loading toast and show success
      toast.dismiss(loadingToast);
      toast.success("Employee added successfully!");

      console.log("Tax:", { Rate: taxRate, Address: employeeAddressTax });
      setIsTaxModalOpen(false);
      setTaxRate("");
      setEmployeeAddressTax("");
    } catch (error) {
      // Show error toast without dismissing previous toasts
      toast.error("Error adding employee. Please try again.");
      console.error(error);
      // Don't close the modal on error so user can try again
    }
  };

  return (
    <div className="self-start bg-[#1E3A8A] text-white px-[27px] pt-[50px] pb-[38px] rounded-[18px]">
      <h2 className="text-[32px] leading-[100%]">DASHBOARD</h2>
      <div className="flex flex-col gap-[24px] mt-[32px]">
        <div className="border-1 border-[#22D3EE] px-[16px] py-[12px] rounded-[40px] flex items-center gap-[12px]">
          <Image
            src="/manage-accounts.svg"
            alt="manage-accounts icon"
            width={20}
            height={20}
          />
          <button
            className="rounded-[1000px] bg-[#1E3A8A] border-2 border-[#FFFFFF] px-[20px] py-[12px] text-white"
            onClick={() => router.push("/dashboard/employer/manage")}
          >
            Manage Employee
          </button>
        </div>
        <div className="border-1 border-[#22D3EE] px-[16px] py-[12px] rounded-[40px] flex items-center gap-[12px]">
          <Image src="/tax.svg" alt="tax icon" width={20} height={20} />
          <button
            className="rounded-[1000px] bg-[#1E3A8A] border-2 border-[#FFFFFF] px-[20px] py-[12px] text-white"
            onClick={() => setIsSalaryModalOpen(true)}
          >
            Update Salary
          </button>
        </div>
        <div className="border-1 border-[#22D3EE] px-[16px] py-[12px] rounded-[40px] flex items-center gap-[12px]">
          <Image src="/tax.svg" alt="tax icon" width={20} height={20} />
          <button
            className="rounded-[1000px] bg-[#1E3A8A] border-2 border-[#FFFFFF] px-[20px] py-[12px] text-white"
            onClick={() => setIsTaxModalOpen(true)}
          >
            Set Tax
          </button>
        </div>
        {/* <div className="border-1 border-[#22D3EE] px-[16px] py-[12px] rounded-[40px] flex items-center gap-[12px]">
          <Image src="/history.svg" alt="history icon" width={20} height={20} />
          <p>View Payment History</p>
        </div> */}
        <div className="border-1 border-[#22D3EE] px-[16px] py-[12px] rounded-[40px] flex items-center gap-[12px]">
          <Image
            src="/settings.svg"
            alt="history icon"
            width={20}
            height={20}
          />
          <p>Settings</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-[#F9FAFB] text-[#FF3729] font-bold text-[15px] rounded-[40px] px-[16px] py-[12px] mt-[76px]">
          Log Out
        </button>
      </div>

      {/* Salary Modal */}
      <Dialog open={isSalaryModalOpen} onOpenChange={setIsSalaryModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Employee Salary</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Employee Address</label>
              <Input
                placeholder="e.g.0x23....."
                value={employeeAddressSalary}
                onChange={(e) => setEmployeeAddressSalary(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Salary Amount</label>
              <Input
                type="number"
                placeholder="Enter amount"
                value={salaryAmount}
                onChange={(e) => setSalaryAmount(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSalarySubmit}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Tax Modal */}
      <Dialog open={isTaxModalOpen} onOpenChange={setIsTaxModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Set Tax Details</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Employee Address</label>
              <Input
                placeholder="e.g.0x23....."
                value={employeeAddressTax}
                onChange={(e) => setEmployeeAddressTax(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Tax Rate (%)</label>
              <Input
                type="number"
                placeholder="Enter tax rate"
                value={taxRate}
                onChange={(e) => setTaxRate(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleTaxSubmit}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmployeeNav;
