import { useState } from "react";
import logo from "../assets/logo.svg";
import "../styles/Home.css";

import CanvasWrap from "../components/Smoke";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="flex z-10 flex-col items-center bg-transparent ">
        <div className="flex z-10 flex-row h-[20rem] w-[100%] justify-between p-8 bg-transparent outline outline-1">
          <div className="flex flex-col justify-between p4y-10">
            <h1 className="text-orange-600 text-3xl">Welcome</h1>
            <div>
              <p className="text-orange-400">José Henrique Targino Dias Gois</p>
              <p className="text-orange-300">Web developer</p>
            </div>
          </div>

          <img
            src="https://github.com/jhenriquetdg.png"
            alt=""
            className="rounded-[50%] border-8"
          />
        </div>
        <div className="absolute top-[3rem] z-0 h-[20rem] w-full flex justify-center items-center">
          <CanvasWrap></CanvasWrap>
        </div>
      </section>
    </>
  );
}

export default Home;
