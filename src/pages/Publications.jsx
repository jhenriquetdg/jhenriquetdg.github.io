import { useEffect, useState } from "react";
import api_scholar from "../services/scholar/api";

export default function Publications() {
  const [publications, setPublications] = useState([]);

  async function fetchScholarPublications() {
    const response = await api_scholar.get("");
    setPublications(response.data);
    console.log(publications);
  }

  useEffect(() => {
    fetchScholarPublications();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-orange-400 text-5xl border-b-2 border-b-orange-400 w-full text-center mt-10">
        Publications
      </h1>

      <h2 className="text-orange-400 text-3xl border-b-2 border-b-orange-400 my-10">
        <a href={publications.url}> Scientific</a>
      </h2>

      {/* { publications ? () : (<span></span)} */}
      {publications?.papers?.map((paper, p) => {
        return (
          <div
            key={p}
            className="bg-slate-500 w-[90%] p-8 mb-4 rounded-2xl text-xs"
          >
            <div className="flex flex-row justify-between my-2">
              <a
                target="_blank"
                href={"https://doi.org/" + paper.externalIds.DOI}
              >
                <span className="font-bold text-black">
                  {paper.journal.name} : {paper.externalIds.DOI}
                </span>
              </a>

              <span>Citations: {paper.citationCount}</span>
            </div>

            <div className="flex flex-row justify-between">
              <a href={paper.url} target="_blank">
                <h2 className="text-orange-500 text-bold text-2xl">
                  {paper.year} - {paper.title}
                </h2>
              </a>
            </div>

            <div className="my-2">
              {paper.authors.map((author, a) => {
                return (
                  <span key={a} className="mr-4 text-xs">
                    {author.name}
                  </span>
                );
              })}
            </div>
            {/* <p className="text-justify text-sm">{paper.abstract}</p> */}
          </div>
        );
      })}
    </div>
  );
}
