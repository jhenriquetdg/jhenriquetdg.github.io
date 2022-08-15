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
    <div className="curriculum z-10">
      <div className="publications">
        <h1>
          <a href={publications.url}> Publications</a>
        </h1>

        {publications?.papers?.map((paper, p) => {
          return (
            <div key={p}>
              <p>Citations: {paper.citationCount}</p>
              <a
                target="_blank"
                href={"https://doi.org/" + paper.externalIds.DOI}
              >
                <p>{paper.journal.name}</p>
                <p>{paper.externalIds.DOI}</p>
              </a>

              <a href={paper.url} target="_blank">
                <h2 className="title">
                  {paper.year} - {paper.title}
                </h2>
              </a>
              <div>
                {paper.authors.map((author, a) => {
                  return (
                    <span key={a} className="mr-4">
                      {author.name}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
