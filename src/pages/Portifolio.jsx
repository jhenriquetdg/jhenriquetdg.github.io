import axios from "axios";
import { Spinner } from "phosphor-react";
import { useEffect, useState } from "react";
import { api_github } from "../services/github/api";

function GithubCard({ repo }) {
  return (
    <div className="w-[90vw] bg-zinc-700 rounded-lg p-4 mb-8 text-orange-400">
      <p>{repo.name}</p>
      <p>{repo.created_at}</p>
      <p>{repo.pushed_at}</p>
      <p>{repo.html_url}</p>
      <p>{repo.description}</p>
    </div>
  );
}

export default function Portifolio() {
  const [repositories, setRepositories] = useState([]);

  async function fetchGithubRepos() {
    const response = await api_github.get("/repos");
    setRepositories(response.data);
    console.log(repositories);
  }

  useEffect(() => {
    fetchGithubRepos();
  }, []);

  return (
    <div className="bg-zinc-200 p-8">
      <h1 className="w-full border-b-2 border-b-orange-400 mb-4">Portifolio</h1>
      <h1 className="w-full border-b-2 border-b-orange-400 mb-4">Curriculum</h1>
      {repositories
        .filter((r) => r.name.includes("jhenriquetdg.github.io"))
        .map((repo) => {
          return <GithubCard key={repo.id} repo={repo} />;
        })}
      <h1 className="w-full border-b-2 border-b-orange-400 mb-4 mt-10">
        Originals
      </h1>
      {repositories
        .filter((r) => r.name.includes("original"))
        .map((repo) => {
          return <GithubCard key={repo.id} repo={repo} />;
        })}
      <h1 className="w-full border-b-2 border-b-orange-400 mb-4  mt-10">
        Tutorials
      </h1>
      {repositories
        .filter((r) => r.name.includes("tutorial"))
        .map((repo) => {
          return <GithubCard key={repo.id} repo={repo} />;
        })}
      <h1 className="w-full border-b-2 border-b-orange-400 mb-4  mt-10">
        Remakes
      </h1>
      {repositories
        .filter((r) => r.name.includes("remake"))
        .map((repo) => {
          return <GithubCard key={repo.id} repo={repo} />;
        })}
    </div>
  );
}
