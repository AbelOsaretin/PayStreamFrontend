import AuthNav from "@/components/AuthNav";
import EmployeeNav from "@/components/EmployeeNav";
import PayrollDashboard from "@/components/EmployeeDashboard";

const page = () => {
  return (
    <div>
      <AuthNav />
      <div className="flex justify-center gap-[32px] mt-[50px]">
        <EmployeeNav />
        <PayrollDashboard />
      </div>
    </div>
  );
};

export default page;
