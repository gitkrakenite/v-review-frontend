import React from "react";
import { MdOutlineSportsRugby } from "react-icons/md";
import "./landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col gap-[2em] items-center justify-center h-[100vh] w-[80%] m-auto">
      <div className="bg-emerald-600 w-[100%] p-[2em] text-center rounded-lg text-slate-200">
        <h1 className="text-4xl mb-[1em]">
          Hello There. Page Currently in Development
        </h1>
        <h3 className="text-2xl mb-[1em]">Check Back Later for Progress</h3>
        <h4 className="text-xl mb-[1em]">Thank you for visiting</h4>
        <Link to="/">
          <span>Back home ?</span>
        </Link>
      </div>

      <div className="rotate-center">
        <MdOutlineSportsRugby className="text-5xl text-emerald-500 rotate-center" />
      </div>
    </div>
  );
};

export default Landing;
