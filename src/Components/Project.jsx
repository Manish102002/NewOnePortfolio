import React from "react";
// import React from "react";
// import { TweenMax, Power3, Power4 } from "gsap";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
import { FaLink } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        animation: animation,
        scrub: true,
        // markers: true,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <React.Fragment>
        <div className="hidden lg:block md:block sm:hidden">
          <div className=" relative ">
            <div className="text-white absolute ml-20 my-10">
              <h1 className="text-7xl text-darkBlack font-thin font-[gem] mb-2">
                crafted with <span className=" text-red">love</span>.
              </h1>
              <h2 className="text-3xl text-darkBlack font-[gem]">
                these are few of my recent Projects
              </h2>
            </div>
          </div>

          <Box
            className="gallery bg-white mx-20 my-20  rounded-lg"
            sx={{ display: "flex", flexDirection: "flex-wrap" }}
          >
            <Box
              className="left"
              sx={{
                width: "50%",
                marginLeft: "auto",
                "& .details": {
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "40vw",
                  marginLeft: "auto",
                  color: "#000",
                  // fontSize: "3rem",
                  // fontWeight: 900,
                },
              }}
            >
              <Box className="details">
                <div className=" font-[gem] flex flex-col text-center items-center">
                  <h1 className=" text-4xl">Dice_Game</h1>
                  <h4 className=" text-md opacity-30 mb-10">
                    Jun 2023 - Jul 2023
                  </h4>
                  <div className="w-96">
                    Experience the thrill of rolling dice in this React project
                    enhanced with Tailwind CSS. Navigate sea...
                  </div>
                  <div className=" flex  mt-12 gap-8">
                    <a
                      href="https://github.com/Manish102002/DiceGame"
                      target="_blank"
                    >
                      <div className=" flex gap-2 items-center border px-3 cursor-pointer py-2 ">
                        <div>Code</div>
                        <div>
                          <FaCode />
                        </div>
                      </div>
                    </a>
                    <a href="https://dicerelated.netlify.app" target="_blank">
                      <div className=" flex gap-2 items-center cursor-pointer px-3 py-2 border ">
                        <div>Live</div>
                        <div>
                          <FaLink />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Box>
              <Box className="details">
                <div className=" font-[gem] flex flex-col text-center items-center">
                  <h1 className=" text-4xl">PaperPortolio</h1>
                  <h4 className=" text-md opacity-30 mb-10">
                    Jun 2023 - Jul 2023
                  </h4>
                  <div className="w-96">
                    Experience the thrill of rolling dice in this React project
                    enhanced with Tailwind CSS. Navigate sea...
                  </div>
                  <div className=" flex  mt-12 gap-8">
                    <a
                      href="https://github.com/Manish102002/NewsPaper"
                      target="_blank"
                    >
                      <div className=" flex gap-2 items-center border px-3 cursor-pointer py-2 ">
                        <div>Code</div>
                        <div>
                          <FaCode />
                        </div>
                      </div>
                    </a>
                    <a href="https://newsportfolio.netlify.app" target="_blank">
                      {" "}
                      <div className=" flex gap-2 items-center cursor-pointer px-3 py-2 border ">
                        <div>Live</div>
                        <div>
                          <FaLink />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Box>
              <Box className="details">
                <div className=" font-[gem] flex flex-col text-center items-center">
                  <h1 className=" text-4xl">ToDO</h1>
                  <h4 className=" text-md opacity-30 mb-10">
                    Jan 2023 - Mar 2023
                  </h4>
                  <div className="w-96">
                    A minimalist task manager built with HTML, CSS, and
                    JavaScript. Stay organized with ease using this ....
                  </div>
                  <div className=" flex  mt-12 gap-8">
                    <a
                      href="https://github.com/Manish102002/To-doList"
                      target="_blank"
                    >
                      <div className=" flex gap-2 items-center border px-3 cursor-pointer py-2 ">
                        <div>Code</div>
                        <div>
                          <FaCode />
                        </div>
                      </div>
                    </a>
                    <a href="https://timetablelist.netlify.app" target="_blank">
                      <div className=" flex gap-2 items-center border px-3 cursor-pointer py-2 ">
                        <div>live</div>
                        <div>
                          <FaLink />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Box>
              {/* <Box className="details">New One</Box> */}
            </Box>
            <Box
              className="rightblock"
              sx={{
                width: "60%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                //   marginLeft: "500px"
              }}
            >
              <Box
                sx={{
                  width: "40vw",
                  height: "44vh",
                  // border: "2px",
                  borderRadius: "50px", // Add border radius for rounded corners
                  position: "relative",
                  // Add box-shadow
                  "& .photo": {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    "& img": {
                      height: "100%",
                      width: "100%",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      // objectFit: "cover", // Maintain aspect ratio and fill the container
                    },
                  },
                }}
              >
                <Box className="photo rounded-lg">
                  <div className=" rounded-lg shadow-xl">
                    <img
                      src="/public/project/dice.png"
                      alt="img-2"
                      className=" w-72 h-96"
                    />
                  </div>
                </Box>
                <Box className="photo rounded-lg">
                  <div className=" rounded-lg shadow-xl">
                    <img
                      src="/public/project/paper.png"
                      alt="img-2"
                      className=" w-72 h-96"
                    />
                  </div>
                </Box>
                <Box className="photo rounded-lg">
                  <div className=" rounded-lg shadow-xl">
                    <img
                      src="/public/project/todo.png"
                      alt="img-2"
                      className=" w-72 h-96"
                    />
                  </div>
                </Box>
                {/* <Box className="photo">
                <img
                  src="http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg"
                  alt="img-3"
                />
              </Box> */}
              </Box>
            </Box>
          </Box>
        </div>

        {/* ---------------------responsive */}
        <div className=" bg-white block sm:block lg:hidden md:hidden">
          <div className="">
            <div className="text-darkBlack py-10 mx-3 block lg:hidden md:hidden sm:block">
              <h1 className="text-4xl text-darkBlack  font-thin font-[gem] mb-2">
                crafted with <span className=" text-red">love</span>.
              </h1>
              <h2 className="text-xl  font-[gem]">
                these are few of my recent Projects
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Box className=" rounded-lg mb-10">
              <div className="">
                <img
                  src="/public/project/dice.png"
                  alt="img-2"
                  className="w-72 h-44 shadow-lg border rounded-lg"
                />
              </div>
            </Box>
            <Box className=" ">
              <div className=" font-[gem] flex flex-col text-center items-center">
                <h1 className=" text-4xl">Dice_Game</h1>
                <h4 className=" text-md opacity-30 mb-5">
                  Jun 2023 - Jul 2023
                </h4>
                <div className="w-96">
                  Experience the thrill of rolling dice in this React project
                  enhanced with Tailwind CSS. Navigate sea...
                </div>
                
                  <div className=" flex  mt-5 gap-8">
                    <a
                      href="https://github.com/Manish102002/DiceGame"
                      target="_blank"
                    >
                      <div className=" flex gap-2 items-center border px-3 cursor-pointer py-2 ">
                        <div>Code</div>
                        <div>
                          <FaCode />
                        </div>
                      </div>
                    </a>
                    <a href="https://dicerelated.netlify.app" target="_blank">
                      <div className=" flex gap-2 items-center cursor-pointer px-3 py-2 border ">
                        <div>Live</div>
                        <div>
                          <FaLink />
                        </div>
                      </div>
                    </a>
                  </div>
                
              </div>
            </Box>
          </div>

          <hr className="mt-14 opacity-40" />

          <div className="flex flex-col justify-center items-center mt-14">
            <Box className=" rounded-lg mb-10">
              <div className="">
                <img
                  src="/public/project/paper.png"
                  alt="img-2"
                  className="w-72 h-44 shadow-lg border rounded-lg"
                />
              </div>
            </Box>

            <Box className="details">
              <div className=" font-[gem] flex flex-col text-center items-center">
                <h1 className=" text-4xl">PaperPortolio</h1>
                <h4 className=" text-md opacity-30 mb-5">
                  Jun 2023 - Jul 2023
                </h4>
                <div className="w-96">
                  Experience the thrill of rolling dice in this React project
                  enhanced with Tailwind CSS. Navigate sea...
                </div>
                <div className=" flex  mt-5 gap-8">
                    <a
                      href="https://github.com/Manish102002/NewsPaper"
                      target="_blank"
                    >
                      <div className=" flex gap-2 items-center border px-3 cursor-pointer py-2 ">
                        <div>Code</div>
                        <div>
                          <FaCode />
                        </div>
                      </div>
                    </a>
                    <a href="https://newsportfolio.netlify.app" target="_blank">
                      {" "}
                      <div className=" flex gap-2 items-center cursor-pointer px-3 py-2 border ">
                        <div>Live</div>
                        <div>
                          <FaLink />
                        </div>
                      </div>
                    </a>
                  </div>
              </div>
            </Box>
          </div>

          <hr className="mt-14 opacity-40" />

          <div className="flex flex-col justify-center items-center py-14">
            <Box className=" rounded-lg mb-10">
              <div className="">
                <img
                  src="/public/project/todo.png"
                  alt="img-2"
                  className="w-72 h-44 shadow-lg border rounded-lg"
                />
              </div>
            </Box>

            <Box className="">
              <div className=" font-[gem] flex flex-col text-center items-center">
                <h1 className=" text-4xl">ToDO</h1>
                <h4 className=" text-md opacity-30 mb-5">
                  Jan 2023 - Mar 2023
                </h4>
                <div className="w-96">
                  A minimalist task manager built with HTML, CSS, and
                  JavaScript. Stay organized with ease using this ....
                </div>
                <div className=" flex  mt-5 gap-8">
                    <a
                      href="https://github.com/Manish102002/To-doList"
                      target="_blank"
                    >
                      <div className=" flex gap-2 items-center border px-3 cursor-pointer py-2 ">
                        <div>Code</div>
                        <div>
                          <FaCode />
                        </div>
                      </div>
                    </a>
                    <a href="https://timetablelist.netlify.app" target="_blank">
                      <div className=" flex gap-2 items-center border px-3 cursor-pointer py-2 ">
                        <div>live</div>
                        <div>
                          <FaLink />
                        </div>
                      </div>
                    </a>
                  </div>
              </div>
            </Box>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

export default Project;
