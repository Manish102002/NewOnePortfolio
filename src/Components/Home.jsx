import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  //  const textRef = useRef(null);
  //  const tl = useRef(null);

  //  useEffect(() => {
  //    tl.current = gsap.timeline({
  //      scrollTrigger: {
  //        trigger: '.animation-container',
  //        start: 'top top',
  //        end: '+=200%',
  //        scrub: true,
  //        pin: true,
  //      },
  //    });

  //    tl.current
  //      .fromTo(
  //        textRef.current,
  //        {
  //          x: '100vw',
  //        },
  //        {
  //          x: '-100vw',
  //          duration: 1,
  //          ease: 'none',
  //        }
  //      )
  //      .fromTo(
  //        textRef.current,
  //        {
  //          x: '-100vw',
  //        },
  //        {
  //          x: 0,
  //          duration: 1,
  //          ease: 'none',
  //        }
  //      );

  //    return () => {
  //      tl.current.kill();
  //    };
  //  }, []);

  return (
    <div className="animation-container flex justify-center  bg-black text-white">
      <div className="text-container mt-40 mb-14 ">
        {/* <span className="mansih lg:-mt-[240px] md:-mt-[100px] lg:text-[650px] md:text-[400px] sm:-mt-[50px] text-[300px] text-start lg:ml-40 md:ml-40 ml-10 font-[heading] whitespace-nowrap font-bold">
         I AM FRONTEND DEVELOPER.
       </span> */}
        <img src="https://i.ibb.co/kgLj2z1/manishkk.jpg" alt="" className="lg:w-[60vw] md:w-[60vw] sm:w-[70vw] w-[200vw]" />
      </div>
    </div>
  );
};

export default Home;
