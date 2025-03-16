// "use client";

// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { ArrowLeft, UserPlus, Trash2, Edit } from "lucide-react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import useGetAllEmployees from "@/hooks/ReadHooks/useGetAllEmployess";
// import useGetAllEmployeesCount from "@/hooks/ReadHooks/useGetAllEmployeesCount";

// // Sample employees data
// // const employees = [
// //   {
// //     id: 1,
// //     name: "John Doe",
// //     position: "Software Engineer",
// //     department: "Engineering",
// //     status: "Active",
// //     joinDate: "2024-01-15",
// //   },
// //   {
// //     id: 2,
// //     name: "Alice Smith",
// //     position: "Product Manager",
// //     department: "Product",
// //     status: "Active",
// //     joinDate: "2023-11-01",
// //   },
// //   {
// //     id: 3,
// //     name: "Bob Johnson",
// //     position: "UI Designer",
// //     department: "Design",
// //     status: "Active",
// //     joinDate: "2024-02-01",
// //   },
// // ];

// type Employee = {
//   employeeAddress: string;
//   name: string;
//   salary: bigint;
//   lastPaymentDate: bigint;
//   isActive: boolean;
//   kycStatus: number;
//   kycDocumentHash: string;
//   taxRate: bigint;
// };

// export default function ManageEmployees() {
//   const router = useRouter();
//   const [kycModalOpen, setKycModalOpen] = useState(false);
//   const [payModalOpen, setPayModalOpen] = useState(false);
//   const [addEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false);
//   const [kycText, setKycText] = useState("");
//   const [payText, setPayText] = useState("");
//   const [newEmployeeData, setNewEmployeeData] = useState({
//     name: "",
//     address: "",
//     salary: "",
//   });

//   const handleApproveKYC = () => {
//     console.log("KYC Approved with text:", kycText);
//     setKycModalOpen(false);
//     setKycText("");
//   };

//   const handlePay = () => {
//     console.log("Payment processed with amount:", payText);
//     setPayModalOpen(false);
//     setPayText("");
//   };

//   const handleBatchPay = () => {
//     console.log("Batch Pay Successful");
//   };

//   const handleAddBatch = () => {
//     console.log("Batch User Added");
//   };

//   const handleAddEmployee = () => {
//     console.log("New employee added:", newEmployeeData);
//     setAddEmployeeModalOpen(false);
//     setNewEmployeeData({ name: "", address: "", salary: "" });
//   };

//   const handleInputChange = (e: any) => {
//     const { id, value } = e.target;
//     setNewEmployeeData({
//       ...newEmployeeData,
//       [id.replace("employee-", "")]: value,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container py-8">
//         {/* Header with Back Button */}
//         <div className="flex items-center justify-between mb-8">
//           <div className="flex items-center gap-4">
//             <Button
//               variant="ghost"
//               className="gap-2"
//               onClick={() => router.push("/dashboard/employer")}
//             >
//               <ArrowLeft className="h-4 w-4" />
//               Back to Dashboard
//             </Button>
//             <h1 className="text-3xl font-bold">Manage Employees</h1>
//           </div>
//           <div className="flex items-center justify-between gap-4">
//             <Button
//               className="gap-2"
//               onClick={() => setAddEmployeeModalOpen(true)}
//             >
//               <UserPlus className="h-4 w-4" />
//               Add New Employee
//             </Button>
//             <Button className="gap-2" onClick={handleAddBatch}>
//               <UserPlus className="h-4 w-4" />
//               Add Batch
//             </Button>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex gap-4 mb-6">
//           <Button onClick={() => setKycModalOpen(true)}>Approve KYC</Button>
//           <Button onClick={() => setPayModalOpen(true)}>Pay</Button>
//           <Button onClick={handleBatchPay}>Pay Batch</Button>
//         </div>

//         {/* Employee Management Section */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Employee List</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="rounded-md border">
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Address</TableHead>
//                     <TableHead>Name</TableHead>
//                     <TableHead>Salary</TableHead>
//                     <TableHead>Last Pay Day</TableHead>
//                     <TableHead>Status</TableHead>
//                     <TableHead>KYC</TableHead>
//                     <TableHead>KYC Link</TableHead>
//                     <TableHead>Tax</TableHead>
//                     <TableHead className="text-right">Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 {/* <TableBody>
//                   {employees.map((employees) => (
//                     <TableRow key={employees.id}>
//                       <TableCell className="font-medium">
//                         {employee.name}
//                       </TableCell>
//                       <TableCell>{employee.position}</TableCell>
//                       <TableCell>{employee.department}</TableCell>
//                       <TableCell>
//                         <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-50 text-green-700">
//                           {employee.status}
//                         </span>
//                       </TableCell>
//                       <TableCell>{employee.joinDate}</TableCell>
//                       <TableCell className="text-right">
//                         <div className="flex justify-end gap-2">
//                           <Button variant="ghost" size="icon">
//                             <Edit className="h-4 w-4" />
//                           </Button>
//                           <Button
//                             variant="ghost"
//                             size="icon"
//                             className="text-red-500"
//                           >
//                             <Trash2 className="h-4 w-4" />
//                           </Button>
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody> */}
//               </Table>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* KYC Modal */}
//       <Dialog open={kycModalOpen} onOpenChange={setKycModalOpen}>
//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>Approve KYC</DialogTitle>
//           </DialogHeader>
//           <div className="grid gap-4 py-4">
//             <div className="grid gap-2">
//               <Label htmlFor="kyc-text">KYC Information</Label>
//               <Input
//                 id="kyc-text"
//                 value={kycText}
//                 onChange={(e) => setKycText(e.target.value)}
//                 placeholder="Enter KYC details"
//               />
//             </div>
//           </div>
//           <DialogFooter>
//             <Button type="button" onClick={handleApproveKYC}>
//               Submit
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>

//       {/* Pay Modal */}
//       <Dialog open={payModalOpen} onOpenChange={setPayModalOpen}>
//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>Process Payment</DialogTitle>
//           </DialogHeader>
//           <div className="grid gap-4 py-4">
//             <div className="grid gap-2">
//               <Label htmlFor="pay-text">Payment Amount</Label>
//               <Input
//                 id="pay-text"
//                 value={payText}
//                 onChange={(e) => setPayText(e.target.value)}
//                 placeholder="Enter payment amount"
//               />
//             </div>
//           </div>
//           <DialogFooter>
//             <Button type="button" onClick={handlePay}>
//               Submit
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>

//       {/* Add Employee Modal */}
//       <Dialog
//         open={addEmployeeModalOpen}
//         onOpenChange={setAddEmployeeModalOpen}
//       >
//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>Add New Employee</DialogTitle>
//           </DialogHeader>
//           <div className="grid gap-4 py-4">
//             <div className="grid gap-2">
//               <Label htmlFor="employee-name">Name</Label>
//               <Input
//                 id="employee-name"
//                 value={newEmployeeData.name}
//                 onChange={handleInputChange}
//                 placeholder="Enter employee name"
//               />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="employee-address">Address</Label>
//               <Input
//                 id="employee-address"
//                 value={newEmployeeData.address}
//                 onChange={handleInputChange}
//                 placeholder="Enter employee address"
//               />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="employee-salary">Salary</Label>
//               <Input
//                 id="employee-salary"
//                 type="number"
//                 value={newEmployeeData.salary}
//                 onChange={handleInputChange}
//                 placeholder="Enter employee salary"
//               />
//             </div>
//           </div>
//           <DialogFooter>
//             <Button type="button" onClick={handleAddEmployee}>
//               Submit
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, UserPlus, Trash2, Edit } from "lucide-react";
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
import useGetAllEmployees from "@/hooks/ReadHooks/useGetAllEmployees";
import useAddEmployee from "@/hooks/WriteHooks/useAddEmployee";
import useApproveEmployeeKYC from "@/hooks/WriteHooks/useApproveEmployeeKYC";
import { useWriteContract } from "wagmi";
import PayStreamABI from "../../../../ContractABI/PayStream";
import { getAddress, formatEther } from "viem";
import { toast } from "sonner";
import useProcessPayment from "@/hooks/WriteHooks/useProcessPayment";

export default function ManageEmployees() {
  const router = useRouter();
  const [kycModalOpen, setKycModalOpen] = useState(false);
  const [payModalOpen, setPayModalOpen] = useState(false);
  const [addEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false);
  const [kycText, setKycText] = useState("");
  const [payText, setPayText] = useState("");
  const [newEmployeeData, setNewEmployeeData] = useState({
    name: "",
    address: "",
    salary: 0,
  });
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | null>(
    null
  );

  const { data: allEmployees } = useGetAllEmployees();
  const { writeContract } = useWriteContract();
  const addNewEmployee = useAddEmployee();
  const approveEmployeeKYC = useApproveEmployeeKYC();
  const processPayment = useProcessPayment();

  // Get all employees using our custom hook

  const handleApproveKYC = async (e: any) => {
    e.preventDefault();

    try {
      // Show loading toast (optional)
      const loadingToast = toast.loading("Approving employee KYC...");

      await approveEmployeeKYC(getAddress(kycText));

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

  const handlePay = async (e: any) => {
    e.preventDefault();

    try {
      // Show loading toast (optional)
      const loadingToast = toast.loading("Processing Payment...");

      await processPayment(payText);

      // Clear loading toast and show success
      toast.dismiss(loadingToast);
      toast.success("Payment Processed successfully!");
      console.log("Payment processed for:", payText);
      setPayModalOpen(false);
      setPayText("");
    } catch (error) {
      // Show error toast without dismissing previous toasts
      toast.error("Error processing payment. Please try again.");
      console.error(error);
      // Don't close the modal on error so user can try again
    }
  };

  // const handleAddEmployee = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     await addNewEmployee(
  //       getAddress(newEmployeeData.address),
  //       newEmployeeData.name,
  //       Number(newEmployeeData.salary)
  //     );
  //     toast.dismiss();
  //     toast.success("Employee added Successfully!");
  //     console.log("New employee added:", newEmployeeData);

  //     setNewEmployeeData({ name: "", address: "", salary: 0 });
  //     setAddEmployeeModalOpen(false);
  //   } catch (error) {
  //     toast.dismiss();
  //     toast.error("Error Adding farm product. Please try again.");
  //     console.error(error);
  //   }
  // };

  const handleAddEmployee = async (e: any) => {
    e.preventDefault();

    try {
      // Show loading toast (optional)
      const loadingToast = toast.loading("Adding employee...");

      await addNewEmployee(
        getAddress(newEmployeeData.address),
        newEmployeeData.name,
        Number(newEmployeeData.salary)
      );

      // Clear loading toast and show success
      toast.dismiss(loadingToast);
      toast.success("Employee added successfully!");

      console.log("New employee added:", newEmployeeData);

      // Reset form and close modal only after successful operation
      setNewEmployeeData({ name: "", address: "", salary: 0 });
      setAddEmployeeModalOpen(false);
    } catch (error) {
      // Show error toast without dismissing previous toasts
      toast.error("Error adding employee. Please try again.");
      console.error(error);
      // Don't close the modal on error so user can try again
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setNewEmployeeData({
      ...newEmployeeData,
      [id.replace("employee-", "")]: value,
    });
  };

  // Format timestamp to date string
  const formatDate = (timestamp: bigint) => {
    if (!timestamp) return "N/A";
    return new Date(Number(timestamp) * 1000).toLocaleDateString();
  };

  // Format kyc status to readable string
  const formatKycStatus = (status: number) => {
    switch (status) {
      case 0:
        return "Not Submitted";
      case 1:
        return "Pending";
      case 2:
        return "Approved";
      case 3:
        return "Rejected";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="gap-2"
              onClick={() => router.push("/dashboard/employer")}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
            <h1 className="text-3xl font-bold">Manage Employees</h1>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <Button
            className="gap-2"
            onClick={() => setAddEmployeeModalOpen(true)}
          >
            <UserPlus className="h-4 w-4" />
            Add New Employee
          </Button>
          <Button onClick={() => setKycModalOpen(true)}>Approve KYC</Button>
          <Button onClick={() => setPayModalOpen(true)}>Pay</Button>
        </div>

        {/* Employee Management Section */}
        {/* <Card>
          <CardHeader>
            <CardTitle>
              Employee List 
              ({loading ? "Loading..." : count})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-md">
                {error}
              </div>
            )}
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
                    <TableHead>Tax Rate</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-4">
                        Loading employees...
                      </TableCell>
                    </TableRow>
                  ) : employees.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-4">
                        No employees found
                      </TableCell>
                    </TableRow>
                  ) : (
                    employees.map((employee: any, index: any) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {employee.employeeAddress.substring(0, 6)}...
                          {employee.employeeAddress.substring(38)}
                        </TableCell>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>
                          {Number(employee.salary) / 10 ** 18} ETH
                        </TableCell>
                        <TableCell>
                          {formatDate(employee.lastPaymentDate)}
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
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card> */}
        <Card>
          <CardHeader>
            <CardTitle>Employee List</CardTitle>
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
                <TableBody>
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
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* KYC Modal */}
      <Dialog open={kycModalOpen} onOpenChange={setKycModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Approve KYC</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="kyc-text">Employee Adderss</Label>
              <Input
                id="kyc-text"
                value={kycText}
                onChange={(e) => setKycText(e.target.value)}
                placeholder="Enter Employee Address"
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

      {/* Pay Modal */}
      <Dialog open={payModalOpen} onOpenChange={setPayModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Process Payment</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="pay-text">Payment Amount</Label>
              <Input
                id="pay-text"
                value={payText}
                onChange={(e) => setPayText(e.target.value)}
                placeholder="Enter payment amount"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handlePay}>
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Employee Modal */}
      <Dialog
        open={addEmployeeModalOpen}
        onOpenChange={setAddEmployeeModalOpen}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Employee</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="employee-name">Name</Label>
              <Input
                id="employee-name"
                value={newEmployeeData.name}
                onChange={handleInputChange}
                placeholder="Enter employee name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="employee-address">Address</Label>
              <Input
                id="employee-address"
                value={newEmployeeData.address}
                onChange={handleInputChange}
                placeholder="Enter employee address"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="employee-salary">Salary</Label>
              <Input
                id="employee-salary"
                type="number"
                value={newEmployeeData.salary}
                onChange={handleInputChange}
                placeholder="Enter employee salary"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleAddEmployee}>
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
