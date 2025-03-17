import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between py-[80px] px-[98px] bg-[#1E3A8A] text-white">
        <div>
          <Image src="/logo2.png" alt="logo" width={257} height={49} />
          <p className="max-w-[376px] mt-[20px]">
            Lorem ipsum dolor sit amet consectetur. Nulla convallis egestas
            lobortis semper. Tempus sed gravida aliquam velit sed.
          </p>
          <div className="flex gap-[20px] mt-[20px]">
            <Image src="/fb.svg" alt="facebook" width={24} height={24} />
            <Image src="/tw.svg" alt="twitter" width={24} height={24} />
            <Image src="/ig.svg" alt="instagram" width={24} height={24} />
            <Image src="/yt.svg" alt="youtube" width={24} height={24} />
          </div>
        </div>
        <div>
          <h4 className="font-medium text-[21px] mb-[40px]">Quick Links</h4>
          <ul className="flex flex-col gap-[16px]">
            <li>About Us</li>
            <li>Our Services</li>
            <li>Testimonial</li>
            <li>Pricelist</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-[21px] mb-[40px]">Contact Us</h4>
          <div className="flex flex-col gap-[16px]">
            <p className="flex items-center gap-[5px]">
              <Image src="/email.svg" alt="email" width={24} height={24} />
              <span>hello@paystream.com</span>
            </p>
            <p className="flex items-center gap-[5px]">
              <Image
                src="/location.svg"
                alt="location"
                width={24}
                height={24}
              />
              <span>Hq Paystream</span>
            </p>
            <p className="flex items-center gap-[5px]">
              <Image src="/call.svg" alt="call" width={24} height={24} />
              <span>+01 23567890</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center py-[20px] bg-[#22D3EE] text-[#1E3A8A]">
          &copy; {new Date().getFullYear()} PayStream. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
