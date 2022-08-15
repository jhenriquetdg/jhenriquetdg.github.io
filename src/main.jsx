import React from "react";
import ReactDOM from "react-dom/client";

import Curriculum from "./pages/Curriculum";
import Publications from "./pages/Publications";

import "./styles/index.css";
import CanvasWrap from "./components/Smoke";
import {
  FacebookLogo,
  GithubLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "phosphor-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div className="flex flex-col sticky z-10">
      <div>
        <aside className="h-[100vh] w-[100%] bg-transparent z-10 flex flex-col items-center">
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
          <div className="mt-16">
            <ul className="social flex flex-row gap-6">
              <li>
                <LinkedinLogo weight="duotone" color="cyan" size={40} />
              </li>
              <li>
                <GithubLogo weight="duotone" color="gray" size={40} />
              </li>
              <li>
                <FacebookLogo weight="duotone" color="lightblue" size={40} />
              </li>
              <li>
                <YoutubeLogo weight="duotone" color="red" size={40} />
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <div>
        <Curriculum />
        <Publications />
      </div>
    </div>
    <div className="absolute top-0 z-0 h-[450%] w-[100%]">
      <CanvasWrap></CanvasWrap>
    </div>
  </>
);
