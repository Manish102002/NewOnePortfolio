import { IoIosArrowRoundDown } from "react-icons/io";
const Navbar = () => {
  return (
    <>
      <div className=" relative">
        <div class=" font-[ranga] fixed text-white flex justify-between items-center px-4 py-5 inset-x-0 top-0">
          <h1 className=" font-bold lg:text-[2.3vw] md:text-[2.3vw] sm:text-[2.3vw] text-[15px] text-center lg:leading-9 md:leading-9 cursor-pointer">
            <div className="">Manish</div>
            <div>Choudhary</div>
          </h1>
          {/* <div className=" font-[ranga] text-center cursor-pointer border-white bg-darkBlack opacity-50 lg:text-5xl md:text-5xl sm:text-5xl text-xl border p-2 rotate-[90deg] rounded-[50%] font-bold ">
            <IoIosArrowRoundDown />
          </div> */}
          <div>
            <div className="btn border-blue cursor-pointer py-2 hidden lg:block md:block sm:block  font-bold bg-blue shadow text-sm sm:text-sm">
             <a href="https://ik.imagekit.io/js3v2388q/portfolio/Manish%20(2).pdf?updatedAt=1712307286156" download> get my Resume Offline</a>
            </div>
            <div className="btn border-blue cursor-pointer py-2 block lg:hidden md:hidden sm:hidden  font-bold bg-blue shadow text-sm sm:text-sm">
              my Resume
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
