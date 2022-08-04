import { X } from "phosphor-react";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "May 1940",
    cardTitle: "Bachelor",
    url: "#",
    cardSubtitle: "Bachalor in Science and Technology",
    cardDetailedText: "Studied calculus, physics and neuroscience",
    media: {
      name: "Diploma BCT",
      type: "IMAGE",
      source: {
        url: "/src/assets/diploma.jpg",
      },
    },
  },
  {
    title: "May 1940",
    cardTitle: "Master",
    url: "#",
    cardSubtitle: "Bachalor in Science and Technology",
    cardDetailedText: "Studied calculus, physics and neuroscience",
    media: {
      name: "Diploma BCT",
      type: "IMAGE",
      source: {
        url: "/src/assets/diploma.jpg",
      },
    },
  },
  {
    title: "May 1940",
    cardTitle: "Bachelor",
    url: "#",
    cardSubtitle: "Bachalor in Science and Technology",
    cardDetailedText: "Studied calculus, physics and neuroscience",
    media: {
      name: "Diploma BCT",
      type: "IMAGE",
      source: {
        url: "/src/assets/diploma.jpg",
      },
    },
  },
];

export default function Curriculum() {
  return (
    <>
      <div className="w-full h-full bg-zinc-300 flex flex-col items-center p-4">
        <h1 className="text-orange-400 text-5xl border-b-2 border-b-orange-400 w-full text-center ">
          Curriculum
        </h1>
        <div className="w-full">
          <h2 className="text-orange-400 text-3xl border-b-2 border-b-orange-400 ">
            Academic
          </h2>
          <Chrono
            className="text-orange-400 h-24"
            items={items}
            mode="VERTICAL_ALTERNATING"
            theme={{
              primary: "orange",
              secondary: "orange",
              cardBgColor: "#52525b",
              cardForeColor: "orange",
              titleColor: "orange",
              titleColorActive: "red",
            }}
          >
            <div className="chrono-icons">
              <img src="/src/assets/student.svg"></img>
              <img src="/src/assets/logo.svg"></img>
              <img src="/src/assets/logo.svg"></img>
            </div>
          </Chrono>
        </div>
      </div>
    </>
  );
}
