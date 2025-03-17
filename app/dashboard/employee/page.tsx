"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LineChart, Wallet, ArrowUpRight, Clock } from "lucide-react";
import { DashNavBar } from "@/components/EmployeeDashNavBar";
import { useAccount } from "wagmi";
import { getAddress, formatEther } from "viem";
import { toast } from "sonner";
import useSubmitEmployeeKYC from "@/hooks/WriteHooks/useSubmitEmployeeKYC";
import useGetEmployee from "@/hooks/ReadHooks/useGetEmployee";

export default function EmployeeDashboard() {
  const router = useRouter();
  const account = useAccount();
  const [kycModalOpen, setKycModalOpen] = useState(false);
  const [kycText, setKycText] = useState("");
  const submitEmployeeKYC = useSubmitEmployeeKYC();
  const { data: allEmployees } = useGetEmployee(account.address);

  const { status } = useAccount();
  useEffect(() => {
    if (status === "disconnected") {
      router.push("../");
    }
  }, [status, router]);

  const handleApproveKYC = async (e: any) => {
    e.preventDefault();

    try {
      // Show loading toast (optional)
      const loadingToast = toast.loading("Approving employee KYC...");

      await submitEmployeeKYC(kycText);

      // Clear loading toast and show success
      toast.dismiss(loadingToast);
      toast.success("KYC Approved successfully!");
      console.log("Approving KYC for :", kycText);
      setKycModalOpen(false);
      setKycText("");
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
        <DashNavBar />
        <br />
        <br />

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Payment
              </CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$3,284.00</div>
              <p className="text-xs text-muted-foreground">+$142.80 today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Stream Rate</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$0.16</div>
              <p className="text-xs text-muted-foreground">Per second</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Payout</CardTitle>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,420.00</div>
              <p className="text-xs text-muted-foreground">In 2 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Stream Health
              </CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.2%</div>
              <p className="text-xs text-muted-foreground">Optimal</p>
            </CardContent>
          </Card>
        </div>

        {/* Actions and Stream Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Withdraw Funds</Button>
              <Button
                onClick={() => setKycModalOpen(true)}
                variant="outline"
                className="w-full"
              >
                Submit KYC
              </Button>
              {/* <Button variant="outline" className="w-full">
                View Payment History
              </Button> */}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Streams</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Base Salary</p>
                    <p className="text-sm text-muted-foreground">
                      Active for 45 days
                    </p>
                  </div>
                  <span className="text-sm font-medium text-green-600">
                    Streaming
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Performance Bonus</p>
                    <p className="text-sm text-muted-foreground">
                      Starts in 5 days
                    </p>
                  </div>
                  <span className="text-sm font-medium text-yellow-600">
                    Pending
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Project Completion</p>
                    <p className="text-sm text-muted-foreground">Completed</p>
                  </div>
                  <span className="text-sm font-medium text-blue-600">
                    Finished
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Address</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Salary</TableHead>
                    <TableHead>Last Pay Day</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>KYC</TableHead>
                    <TableHead>KYC Link</TableHead>
                    <TableHead>Tax</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                {/* <TableBody>
                  {Array.isArray(allEmployees) && allEmployees.length > 0 ? (
                    allEmployees.map((employee, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {employee.employeeAddress.substring(0, 6)}...
                          {employee.employeeAddress.substring(38)}
                        </TableCell>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>
                          {employee.salary.toString().substring(0, 2)}
                        </TableCell>
                        <TableCell>
                          {employee.lastPaymentDate > 0
                            ? new Date(
                                Number(employee.lastPaymentDate)
                              ).toLocaleDateString()
                            : "N/A"}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                              employee.isActive
                                ? "bg-green-50 text-green-700"
                                : "bg-red-50 text-red-700"
                            }`}
                          >
                            {employee.isActive ? "Active" : "Inactive"}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                              employee.kycStatus === 2
                                ? "bg-green-50 text-green-700"
                                : employee.kycStatus === 1
                                ? "bg-yellow-50 text-yellow-700"
                                : "bg-gray-50 text-gray-700"
                            }`}
                          >
                            {formatKycStatus(employee.kycStatus)}
                          </span>
                        </TableCell>
                        <TableCell>
                          {employee.kycDocumentHash ? (
                            <a
                              href={`https://ipfs.io/ipfs/${employee.kycDocumentHash}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              View Doc
                            </a>
                          ) : (
                            "N/A"
                          )}
                        </TableCell>
                        <TableCell>{Number(employee.taxRate) / 100}%</TableCell>

                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-red-500"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-4">
                        <div className="p-4 mb-4 text-black-700  rounded-md">
                          Loading Employees......
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody> */}
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* KYC Modal */}
      <Dialog open={kycModalOpen} onOpenChange={setKycModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Submit KYC</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="kyc-text">Document Hash</Label>
              <Input
                id="kyc-text"
                value={kycText}
                onChange={(e) => setKycText(e.target.value)}
                placeholder="Enter IPFS Hash"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleApproveKYC}>
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
