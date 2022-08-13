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
      <h1>
        <a href={publications.url}> Publications</a>
      </h1>
      {/* { publications ? () : (<span></span)} */}
      {publications?.papers?.map((paper) => {
        return (
          <div className="bg-slate-500 w-[90%] p-8 mb-4 rounded-2xl">
            <div className="flex flex-row justify-between my-2">
              <span>{paper.journal.name}</span>
              <a href={"http://" + paper.externalIds.DOI}>
                {paper.externalIds.DOI}
              </a>
            </div>
            <div className="flex flex-row justify-between">
              <a href={paper.url}>
                <h2>
                  {paper.year} - {paper.title}
                </h2>
              </a>
              <span>Citations: {paper.citationCount}</span>
            </div>

            <div className="my-2">
              {paper.authors.map((author) => {
                return <span className="mr-4">{author.name}</span>;
              })}
            </div>
            <p>{paper.abstract}</p>
          </div>
        );
      })}
    </div>
  );
}
