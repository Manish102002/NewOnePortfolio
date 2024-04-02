import React from "react";

const Skills = () => {
  return (
    <>
      <div className=" text-white h-screen bg-brownskill lg:pl-24 md:pl-20 sm:pl-5 px-4 lg:pt-44 md:pt-44 sm:pt-40 pt-24">
        <h1 className="text-7xl font-thin font-[gem] mb-2">
          Things I'm <span className=" text-blue">good</span> at
        </h1>
        <h2 className="text-3xl font-[gem]">
          skills, interests, passion and hobbies
        </h2>
        <div className=" mt-20 ">
          <button className="border-white border-[2px] font-[gem] py-2 px-7 lg:text-3xl md:text-3xl sm:text-3xl text-xl rounded-lg">
            Development
          </button>
        </div>
        <div className=" ">
          <div className="flex flex-wrap mt-16 gap-4">
            <div className="  ">
              <img
                src="https://i.ibb.co/8DBjkfD/React-icon-svg.webp"
                alt=""
                className=" lg:h-[15vh] md:h-[15vh] sm:h-[15vh] h-[8vh] w-full border px-2 py-1 bg-white rounded-lg"
              />
            </div>
            <div className="  ">
              <img
                src="https://i.ibb.co/kxXTyFV/css-min.webp"
                alt=""
                className=" lg:h-[15vh] md:h-[15vh] sm:h-[15vh] h-[8vh] w-full border px-2 py-1 bg-white rounded-lg"
              />
            </div>
            <div className="  ">
              <img
                src="https://i.ibb.co/F373H0S/html-min.webp"
                alt=""
                className=" lg:h-[15vh] md:h-[15vh] sm:h-[15vh] h-[8vh] w-full border px-2 py-1 bg-white rounded-lg"
              />
            </div>
            <div className="  ">
              <img
                src="https://i.ibb.co/vwk3Drd/js-min.webp"
                alt=""
                className=" lg:h-[15vh] md:h-[15vh] sm:h-[15vh] h-[8vh] w-full border px-2 py-1 bg-white rounded-lg"
              />
            </div>
            <div className="  ">
              <img
                src="https://i.ibb.co/0rKc3X4/node-min.webp"
                alt=""
                className=" lg:h-[15vh] md:h-[15vh] sm:h-[15vh] h-[8vh] w-full border px-2 py-1 bg-white rounded-lg"
              />
            </div>
            <div className="  ">
              <img
                src="https://i.ibb.co/7n2TKfB/github-min.webp"
                alt=""
                className=" lg:h-[15vh] md:h-[15vh] sm:h-[15vh] h-[8vh] w-full border px-2 py-1 bg-white rounded-lg"
              />
            </div>
            <div className="  ">
              <img
                src="https://i.ibb.co/3WWXRV3/My-SQL-min.webp"
                alt=""
                className=" lg:h-[15vh] md:h-[15vh] sm:h-[15vh] h-[8vh] w-full border px-2 py-1 bg-white rounded-lg"
              />
            </div>
            <div className="  ">
              <img
                src="https://i.ibb.co/qYjBcrQ/mongodb-min.webp"
                alt=""
                className=" lg:h-[15vh] md:h-[15vh] sm:h-[15vh] h-[8vh] w-full border px-2 py-1 bg-white rounded-lg"
              />
            </div>
                     
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
