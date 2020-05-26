import fetch from "isomorphic-fetch";

export function getNews(queryString = "React", pageNo = 1) {
  return fetch(
    `https://hn.algolia.com/api/v1/search?query=${queryString}&page=${pageNo}`
  )
    .then((res) => res.json())
    .then((res) => res);
}
