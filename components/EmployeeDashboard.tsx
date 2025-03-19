"use client";

import React from "react";
import Image from "next/image";
import useGetAllEmployeesCount from "@/hooks/ReadHooks/useGetAllEmployeesCount";

interface TransactionProps {
  name: string;
  role: string;
  amount: number;
  currency: string;
}

const PayrollDashboard: React.FC = () => {
  const transactions: TransactionProps[] = [
    {
      name: "Chloe Wallows",
      role: "Developer",
      amount: 1546.12,
      currency: "USDT",
    },
    {
      name: "Chloe Wallows",
      role: "Developer",
      amount: 1546.12,
      currency: "USDT",
    },
    {
      name: "Chloe Wallows",
      role: "Developer",
      amount: 1546.12,
      currency: "USDT",
    },
    {
      name: "Chloe Wallows",
      role: "Developer",
      amount: 1546.12,
      currency: "USDT",
    },
  ];

  const { data: totalEmployees } = useGetAllEmployeesCount();

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Upcoming Date Card */}
        <div className="bg-[#1E3A8A] rounded-lg p-6 text-white relative">
          <h2 className="text-xl font-semibold mb-1">Upcoming</h2>
          <p className="text-lg">April 1st, 2022</p>
          <div className="absolute top-8 right-6 bg-[#5392F8] rounded-full p-2">
            <CalendarIcon className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Total Employees Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 relative">
          <h2 className="text-gray-500 text-lg font-medium mb-2">
            Total Employees
          </h2>
          <p className="text-3xl font-bold">{Number(totalEmployees)}</p>
          <div className="absolute top-8 right-6 bg-[#F5F9FF] rounded-full p-2">
            <EmployeesIcon className="h-6 w-6 text-[#1E3A8A]" />
          </div>
        </div>

        {/* Payroll Crypto Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-500 text-lg font-medium">
              Payroll Crypto
            </h2>
            <button className="text-red-500 font-medium">Change</button>
          </div>
          <div className="flex items-center">
            <TetherIcon className="h-6 w-6 text-teal-500 mr-2" />
            <div className="bg-green-100 text-green-600 px-4 py-1 rounded-full flex items-center">
              <CheckIcon className="h-4 w-4 mr-1" />
              <span>Connected</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Payroll Summary Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex gap-[34px] items-center mb-4">
            <h2 className="text-xl font-bold">Payroll Summary</h2>
            <div className="relative">
              <select className="appearance-none border border-gray-300 rounded-[100px] px-4 py-2 pr-8 text-sm focus:outline-none">
                <option>Last 30 days</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <ChevronDownIcon className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
          <p className="text-gray-500 mb-6">From 1-31 March, 2022</p>
          <div className="flex justify-center mb-4">
            <div className="relative w-48 h-48">
              {/* This would be replaced with a proper chart component */}
              <div className="rounded-full h-48 w-48 bg-gray-100 overflow-hidden">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div
                    className="h-full w-full bg-orange-500"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0)",
                    }}
                  ></div>
                  <div
                    className="h-full w-full bg-green-500"
                    style={{
                      clipPath:
                        "polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0)",
                    }}
                  ></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full h-32 w-32"></div>
                </div>
                <div className="absolute top-1/4 right-0 bg-white px-2 py-1 rounded-md">
                  <span className="font-bold">54%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-3 h-8 bg-green-500 rounded-sm mr-2"></div>
              <div>
                <p className="text-gray-500">Paid</p>
                <div className="flex items-center">
                  <span className="text-xl font-bold">3000</span>
                  <TetherIcon className="h-4 w-4 text-teal-500 ml-1" />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-8 bg-orange-500 rounded-sm mr-2"></div>
              <div>
                <p className="text-gray-500">Pending</p>
                <div className="flex items-center">
                  <span className="text-xl font-bold">3000</span>
                  <TetherIcon className="h-4 w-4 text-teal-500 ml-1" />
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center mt-6 px-4 py-2 border border-gray-300 rounded-lg text-sm">
            <EyeIcon className="h-4 w-4 mr-2" />
            View Transactions
          </button>
        </div>

        {/* Transaction History Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Transaction History</h2>
            <button className="text-blue-700 font-medium">See All</button>
          </div>
          <div className="space-y-4">
            {transactions.map((transaction, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gray-200 rounded-full mr-3 overflow-hidden">
                    <Image
                      src="/avatar.png"
                      alt={transaction.name}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className="font-medium">{transaction.name}</p>
                    <p className="text-gray-500 text-sm">{transaction.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">{transaction.amount.toFixed(2)}</p>
                  <div className="flex items-center justify-end">
                    <TetherIcon className="h-4 w-4 text-teal-500 mr-1" />
                    <span className="text-gray-500 text-sm">
                      {transaction.currency}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollDashboard;

// Icon components
const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const EmployeesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const TetherIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v5h3l-4 4-4-4h3V7z" />
  </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const EyeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);
