import { useState } from "react";
import logo from "../assets/logo.svg";
import "../styles/Home.css";
import Primeiro from "../components/Primeiro";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="flex flex-col items-center bg-zinc-800 ">
        <div className="flex flex-row h-[20rem] w-[100%] justify-between p-8 bg-zinc-900 outline outline-1">
          <div className="flex flex-col justify-between p4y-10">
            <h1 className="text-orange-600 text-3xl">Welcome</h1>
            <div>
              <p className="text-orange-400">José Henrique Targino Dias Gois</p>
              <p className="text-orange-300">Web developer</p>
            </div>
          </div>
          <div className="h-[255px] w-[255px] rounded-[50%] border-8 bg-gray-500">
            <img
              src="https://github.com/jhenriquetdg.png"
              alt=""
              className="rounded-[50%]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
