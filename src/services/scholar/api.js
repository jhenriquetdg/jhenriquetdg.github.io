import axios from "axios";

const api_scholar = axios.create({
  baseURL:
    "https://api.semanticscholar.org/graph/v1/author/51901962?fields=authorId,externalIds,url,name,aliases,affiliations,homepage,paperCount,citationCount,hIndex,papers.paperId,papers.externalIds,papers.url,papers.title,papers.abstract,papers.venue,papers.year,papers.referenceCount,papers.citationCount,papers.influentialCitationCount,papers.isOpenAccess,papers.fieldsOfStudy,papers.s2FieldsOfStudy,papers.publicationTypes,papers.publicationDate,papers.journal,papers.authors",
});

export default api_scholar;
