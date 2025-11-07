"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import {   FaInstagram, FaLinkedinIn, FaGithub, FaArrowRight  } from 'react-icons/fa';



const Info = () => {
  return (
    <div className="flex flex-col  pl-25 gap-6 z-20 absolute w-full h-100 mt-50 ">
      <div className="bg-[#1D89BD] w-[145px] h-[35px] px-2 text-[15px] text-white mt-2 flex items-center  ">
        {" "}
        5 years experience
      </div>
      <div className="flex gap-3 ">
        <div className="bg-[#1D89BD] h-[105px] w-1 mt-3"></div>
        <div className="flex flex-col gap-8  -mt-2">
          <h1 className="text-white w-[385px] h-[20px] text-[60px]  font-medium font-oxanium">
            Hy, I’m Gerald
          </h1>
          <h1 className="text-[#1D89BD] text-[65px]  font-medium w-[440px] h-[20px] font-oxanium">
            <Typewriter
              options={{
                strings: ["Software Dev", "UI Designer", "Network Eng"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
      <div className="text-white">
        {" "}
        <p className="w-[530px] h-[80px] font-poppins">
       
I’m a UI/UX Designer, Software Developer, and Network Engineer passionate about creating seamless digital experiences.
I love teamwork, collaboration, and continuously learning new things in the ever-evolving tech space.
        </p>
      </div>
      <div className=" flex items-center gap-6">
        <div className=" bg-[#1D89BD] text-white py-2 px-4 w-[163px] flex  items-center gap-2 h-[40px] rounded-lg font-poppins">
          <Link
            href="/"
            
          >
            Get in Touch
          </Link>
           <FaArrowRight className="text-white"/>
        </div>
       <div className="text-white flex gap-4 text-[25px] ">
      <Link href={"/"}> <FaGithub className="hover:text-[#1D89BD]"/></Link> 
        <Link href={"/"}> <FaLinkedinIn className="hover:text-[#1D89BD]"/></Link>
        <Link href={"/"}> <FaInstagram className="hover:text-[#1D89BD]"/></Link>
       </div>
      </div>
    </div>
  );
};

export default Info;
