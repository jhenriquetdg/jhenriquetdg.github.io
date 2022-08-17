import React from "react";
import ReactDOM from "react-dom/client";

import CanvasWrap from "./components/Smoke";

import Education from "./components/Education";
import Scholarships from "./components/Scholarships";
import Publications from "./components/Publications";

import "./styles/index.css";
import SocialIcons from "./components/SocialIcons";
import Skills from "./components/Skills";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div className="flex flex-col sticky z-10">
      <div className="flex flex-col items-center">
        <h1 className="text-orange-600 text-4xl my-5">Welcome</h1>
        <img
          src="https://github.com/jhenriquetdg.png"
          alt=""
          className="rounded-[50%] border-4 w-60 h-60 mb-5 border-zinc-100 antialiased"
        />

        <p className="text-orange-400 text-2xl font-bold">
          José Henrique Targino Dias Gois
        </p>
        <p className="text-orange-300 text-2xl">Web developer</p>
        <SocialIcons />
        <Skills />
      </div>
      <div>
        <Education />
        <Scholarships />
        <Publications />
      </div>
    </div>
    <div className="absolute top-0 z-0 h-[450%] w-[100%]">
      <CanvasWrap></CanvasWrap>
    </div>
  </>
);
