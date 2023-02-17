import React, { useState } from "react";
import "./splash.css";
import bgVideo from "../../assets/bg2.mp4";
import { SiAlltrails } from "react-icons/si";
import { Link } from "react-router-dom";

const Swiper = () => {
  return (
    <div className="w-full h-[100vh]">
      <video
        className="w-full h-[100vh] object-cover"
        src={bgVideo}
        autoPlay
        muted
        loop
      />
      {/* overlay div */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.7)]" />
      {/* header */}
      <div className="absolute w-full h-full top-0  flex justify-between pt-[1em] pl-[2em] pr-[2em]">
        <div className="text-white text-3xl font-bold">
          <h1>
            V-<span className="text-emerald-400">RATE</span>{" "}
          </h1>
        </div>
        <div className="text-white text-3xl font-bold">
          <SiAlltrails />
        </div>
      </div>
      <div className="absolute  h-full top-0 flex flex-col justify-center items-left ml-[40%] text-white">
        <div className="flex flex-col text-left justify-start items-start mb-[2em]">
          <h1
            className="text-8xl mb-[10px]"
            style={{ fontWeight: "400", letterSpacing: "16px" }}
          >
            V-SHARE
          </h1>
          <h2
            className="text-xl"
            style={{ fontWeight: "300", letterSpacing: "16px" }}
          >
            REVIEW SERVICES
          </h2>
        </div>
        <div
          className="flex flex-col justify-start items-start"
          style={{ lineHeight: "1.8em" }}
        >
          <p className="text-zinc-300 text-base">Review modern services</p>
          <p className="text-zinc-300 text-base">and help people find the</p>
          <p className="text-zinc-300 text-base">best services out there</p>
          <p className="text-zinc-300 text-base">share your experience with</p>
          <p className="text-zinc-300 text-base">
            the community without any fear
          </p>

          <Link to="/home">
            <div className="mt-[3em]">
              <span className="splashGetStarted">GET STARTED</span>
            </div>
          </Link>
        </div>
      </div>
      {/* FOOTER */}
      {/* <div className="absolute w-full h-full   flex justify-between pt-[1em] pl-[2em] pr-[2em]">
        <div className="text-white text-3xl font-bold">
          <p>FB / IG / UT</p>
        </div>
        <div className="text-white text-3xl font-bold">03/64</div>
      </div> */}
    </div>
  );
};

export default Swiper;
