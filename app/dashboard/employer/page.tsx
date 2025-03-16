"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { getAddress, formatEther } from "viem";
import { toast } from "sonner";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { BarChart, Users, DollarSign, Clock, ArrowUpDown } from "lucide-react";
import { useAccount } from "wagmi";

import { DashNavBar } from "@/components/DashNavBar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import useGetAllEmployeesCount from "@/hooks/ReadHooks/useGetAllEmployeesCount";
import useGetEmployerPaymentHistory from "@/hooks/ReadHooks/useGetEmployerPaymentHistory";
import useViewBalance from "@/hooks/ReadHooks/useViewBalance";
import useSetEmployeeTaxRate from "@/hooks/WriteHooks/useSetEmployeeTaxRate";
import useUpdateEmploeeSalary from "@/hooks/WriteHooks/useUpdateEmploeeSalary";
import useDepositToken from "@/hooks/WriteHooks/useDepositToken";
import useApproveToken from "@/hooks/WriteHooks/useApproveToken";

// Sample payment history data
const paymentHistory = [
  {
    id: 1,
    employee: "John Doe",
    amount: "$3,500.00",
    type: "Salary",
    status: "Completed",
    date: "2025-03-15",
  },
  {
    id: 2,
    employee: "Alice Smith",
    amount: "$4,200.00",
    type: "Salary",
    status: "Streaming",
    date: "2025-03-15",
  },
  {
    id: 3,
    employee: "Bob Johnson",
    amount: "$750.00",
    type: "Bonus",
    status: "Completed",
    date: "2025-03-14",
  },
  {
    id: 4,
    employee: "Emma Wilson",
    amount: "$3,800.00",
    type: "Salary",
    status: "Streaming",
    date: "2025-03-15",
  },
  {
    id: 5,
    employee: "Michael Brown",
    amount: "$1,000.00",
    type: "Commission",
    status: "Completed",
    date: "2025-03-13",
  },
];

export default function EmployerDashboard() {
  const router = useRouter();
  const { status } = useAccount();
  const account = useAccount();
  const { data: allEmployeesCount } = useGetAllEmployeesCount();
  const { data: employerPaymentHistory } = useGetEmployerPaymentHistory();
  const {
    data: paymentHistory,
    isLoading,
    isError,
  } = useGetEmployerPaymentHistory();
  const { data: viewBalance } = useViewBalance();
  const setEmployeeTaxRate = useSetEmployeeTaxRate();
  const updateEmployeeSalary = useUpdateEmploeeSalary();
  const approveToken = useApproveToken();
  const depositToken = useDepositToken();

  const [sortField, setSortField] = useState("timestamp");
  const [sortDirection, setSortDirection] = useState("desc");

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

  // useEffect(() => {
  //   // Only check role if we have loaded the data and user is connected
  //   if (
  //     status === "disconnected" ||
  //     (userRole !== undefined && Number(userRole) !== 1)
  //   ) {
  //     router.push("../");
  //   }
  // }, [status, router, userRole]);

  useEffect(() => {
    if (status === "disconnected") {
      router.push("/");
    }
  }, [status, router]);

  const handleSort = (field: any) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const formattedPayments = useMemo(() => {
    if (!paymentHistory) return [];

    return paymentHistory.map((payment, index) => {
      // Convert timestamp to Date object
      const date = new Date(Number(payment.timestamp) * 1000);

      // Format date as string
      const formattedDate = date.toLocaleDateString();

      // Format the amount (convert from Wei to Ether)
      const formattedAmount = formatEther(payment.amount) + " ETH";

      // Format employee address (truncate for display)
      const formattedEmployee = `${payment.employee.slice(
        0,
        6
      )}...${payment.employee.slice(-4)}`;

      return {
        id: index, // Use index as id since there's no unique id in the struct
        employee: formattedEmployee,
        amount: formattedAmount,
        taxAmount: formatEther(payment.taxAmount) + " ETH",
        type: "Salary", // Default type since it's not in the original data
        status: "Completed", // Default status since it's not in the original data
        date: formattedDate,
        rawData: payment, // Keep the original data for reference
      };
    });
  }, [paymentHistory]);

  // Sort the payments
  const sortedPayments = useMemo(() => {
    if (!formattedPayments.length) return [];

    return [...formattedPayments].sort((a, b) => {
      if (sortField === "date" || sortField === "timestamp") {
        const dateA = new Date(a.rawData.timestamp * 1000);
        const dateB = new Date(b.rawData.timestamp * 1000);
        return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
      }

      if (sortField === "amount") {
        const amountA = Number(a.rawData.amount);
        const amountB = Number(b.rawData.amount);
        return sortDirection === "asc" ? amountA - amountB : amountB - amountA;
      }

      // Default string comparison for other fields
      const valA = a[sortField];
      const valB = b[sortField];
      return sortDirection === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    });
  }, [formattedPayments, sortField, sortDirection]);

  // if (isLoading) return <div>Loading payment history...</div>;
  // if (isError) return <div>Error loading payment history</div>;
  // if (!paymentHistory || paymentHistory.length === 0)
  //   return <div>No payment history found</div>;

  const handleClick = () => {
    console.log("Contract Balance: ", viewBalance);
  };

  const handleDepositSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // Show loading toast (optional)
      const loadingToast = toast.loading("Depositing Funds...");
      await approveToken(Number(depositAmount));

      await depositToken(Number(depositAmount));

      // Clear loading toast and show success
      toast.dismiss(loadingToast);
      toast.success("Funds Added successfully!");
      console.log("Depositing:", {
        Amount: depositAmount,
      });
      setIsDepositModalOpen(false);
      setDepositAmount("");
    } catch (error) {
      // Show error toast without dismissing previous toasts
      toast.error("Error depositing funds. Please try again.");
      console.error(error);
      // Don't close the modal on error so user can try again
    }
  };

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
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <DashNavBar titleName={"Employer Dashboard"} />

        <br />
        <br />

        {/* Stats Overview */}

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Balance</CardTitle>
              {/* <BarChart className="h-4 w-4 text-muted-foreground" /> */}
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${Number(viewBalance)}</div>
              <p className="text-xs text-muted-foreground"></p>
              <Button onClick={() => setIsDepositModalOpen(true)}>
                Deposit
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Employees
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Number(allEmployeesCount)}
              </div>
              <p className="text-xs text-muted-foreground">
                +14 from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Streams
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">
                Active payment streams
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Monthly Payroll
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$284,789.24</div>
              <p className="text-xs text-muted-foreground">
                +2.4% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Button
            className="w-full"
            onClick={() => router.push("/dashboard/employer/manage")}
          >
            Manage Employee
          </Button>
          <Button className="w-full" onClick={() => setIsSalaryModalOpen(true)}>
            Update Salary
          </Button>
          <Button className="w-full" onClick={() => setIsTaxModalOpen(true)}>
            Set Tax
          </Button>
          {/* <Button className="w-full" onClick={handleClick}>
            Balance
          </Button> */}
        </div>

        {/* Payment History Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Employee Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">
                      <Button
                        variant="ghost"
                        className="h-8 flex items-center gap-2"
                        onClick={() => handleSort("employee")}
                      >
                        Employee
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button
                        variant="ghost"
                        className="h-8 flex items-center gap-2"
                        onClick={() => handleSort("amount")}
                      >
                        Amount
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button
                        variant="ghost"
                        className="h-8 flex items-center gap-2"
                      >
                        Type
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>
                      <Button
                        variant="ghost"
                        className="h-8 flex items-center gap-2"
                        onClick={() => handleSort("date")}
                      >
                        Date
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">
                        {payment.employee}
                      </TableCell>
                      <TableCell>{payment.amount}</TableCell>
                      <TableCell>{payment.type}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-50 text-green-700">
                          {payment.status}
                        </span>
                      </TableCell>
                      <TableCell>{payment.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Deposit Modal */}
        <Dialog open={isDepositModalOpen} onOpenChange={setIsDepositModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Deposit</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Deposit Amount</label>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleDepositSubmit}>Deposit</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

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
    </div>
  );
}
