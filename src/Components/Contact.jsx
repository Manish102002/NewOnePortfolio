import React from "react";

const Contact = () => {
  return (
    <>
      <div className=" min-h-full  bg-browncontact">
        <div className=" pt-20  text-white  text-[8.8vw] px-10 font-[gem] line-height-reduced">
          you can get in touch with me via{" "}
          <a href="mailto:i.m.manish100202@gmail.com" target="_blank" className="">
            <span class="text-red scale-transition">mail</span>
          </a>{" "}
          {/* or{" "}
          <a href="https://www.instagram.com/manish_choudhary__x04" target="_blank">
            <span className="scale-transition text-yellow">instagram</span>
          </a>{" "} */}
          or{" "}
          <a href="https://www.linkedin.com/in/manish-choudhary-2a1036290/" target="_blank">
            {" "}
            <span className="scale-transition text-blue">linkedIn</span>
          </a>
          .
        </div>
        <h1 className=" text-center text-white font-[gem] lg:text-[1.2vw] md:text-[2vw] sm:text-[3vw] text-[3vw] pb-5 pt-5">created with ❤️ by me</h1>
      </div>
    </>
  );
};

export default Contact;
