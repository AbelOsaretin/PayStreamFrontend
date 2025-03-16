"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Wallet, ArrowUpRight, Clock } from "lucide-react";
import { DashNavBar } from "@/components/DashNavBar";
import { useAccount } from "wagmi";

export default function EmployeeDashboard() {
  const router = useRouter();

  const { status } = useAccount();
  useEffect(() => {
    if (status === "disconnected") {
      router.push("../");
    }
  }, [status, router]);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <DashNavBar titleName={"Employee Dashboard"} />
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
              <Button variant="outline" className="w-full">
                View Payment History
              </Button>
              <Button variant="outline" className="w-full">
                Update Payment Details
              </Button>
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
      </div>
    </div>
  );
}
