import Image from "next/image";

const Info = () => {
  return (
    <div className="mt-[70px]">
      <h2 className="text-center font-bold text-[67px] leading-[88px]">
        Effortless Payroll,
      </h2>
      <h2 className="text-center font-bold text-[67px] leading-[88px]">
        Maximum Efficiency!
      </h2>
      <p className="text-center mt-[24px]">
        Lorem ipsum dolor sit amet consectetur. Tellus arcu egestas sollicitudin
        tristique nisi lacus at adipiscing euismod.{" "}
      </p>
      <div className="flex justify-center mt-[30px] gap-[40px]">
        <div className="flex flex-col gap-[40px]">
          <div className="flex justify-between rounded-[16px] shadow-lg">
            <div className="max-w-[371px] p-[24px]">
              <h3 className="font-bold text-[28px] leading-[40px] mb-[11px]">
                Secure & Transparent Transactions
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Tellus arcu egestas
                sollicitudin tristique nisi lacus at adipiscing euismod.{" "}
              </p>
            </div>
            <Image className="rounded-[16px]" alt="info" src="/image1.png" width={183} height={225} />
          </div>
          <div className="flex justify-between rounded-[16px] shadow-lg">
            <div className="max-w-[371px] p-[24px]">
              <h3 className="font-bold text-[28px] leading-[40px] mb-[11px]">
                Smart Contract Payroll Execution
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Tellus arcu egestas
                sollicitudin tristique nisi lacus at adipiscing euismod.{" "}
              </p>
            </div>
            <Image className="rounded-[16px]" alt="info" src="/image2.png" width={183} height={225} />
          </div>
        </div>
        <div className="bg-[#1E3A8A] rounded-[16px] p-[24px]">
          <h3 className="font-bold text-[28px] leading-[40px] text-white">
            Automated Salary Disbursements
          </h3>
          <p className="text-white max-w-[400px] mt-[11px] mb-[16px]">
            Lorem ipsum dolor sit amet consectetur. Vestibulum duis elementum eu
            commodo. Aliquam vulputate nec in porttitor rhoncus lacus.
          </p>
          <Image alt="info" src="/funds.png" width={554} height={323} />
        </div>
      </div>
    </div>
  );
};

export default Info;
