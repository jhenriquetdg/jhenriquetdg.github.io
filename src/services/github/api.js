import axios from "axios";

export const api_github = axios.create({
  baseURL: "https://api.github.com/users/jhenriquetdg",
});
