
const Newsletter = () => {
  return (
   <div className="mt-[70px] bg-[#69D9F280] py-[80px] px-[98px]">
     <div className="relative overflow-hidden bg-blue-800 py-16 px-4 rounded-[16px]">
      {/* Large circle on the left */}
      <div className="absolute -left-24 -top-24 w-64 h-64 rounded-full bg-blue-500 opacity-80"></div>

      {/* Circles on the right bottom */}
      <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-blue-500 opacity-80"></div>
      <div className="absolute right-20 bottom-10 w-24 h-24 rounded-full bg-blue-400 opacity-60"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Subscribe To Our Newsletter
        </h2>
        <p className="text-white mb-8 opacity-90">
          Lorem ipsum dolor sit amet consectetur. Mi est proin convallis morbi
          cursus et volutpat.
        </p>

        <button className="bg-white text-blue-800 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
          Subscribe Now
        </button>
      </div>
    </div>
   </div>
  );
};

export default Newsletter;
