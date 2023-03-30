import { Article } from "../components/NewsWrapper";

const fetchNews = async (countryCode: string): Promise<Article> => {
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${process.env.REACT_APP_API_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json().then(data => data.articles as Article);
  });
};

export default fetchNews;
