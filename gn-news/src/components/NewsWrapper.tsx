import News from "./News";
import { useState, useEffect } from "react";
import fetchNews from "../api/fetchNews";

export type Article = {
  author: string;
  content: string | null;
  description: string | null;
  published: Date;
  source: object;
  title: string;
  url: string;
  urlToImage: string | null;
};

const NewsWrapper = (props: {}): JSX.Element => {
  const [newsList, setNewsList] = useState<Article[]>([]);

  useEffect(() => {
    return () => {
      async function getArticles() {
        const news = await fetchNews("pl");
        return news;
      }

      getArticles().then((data) => {
        const news: Article[] = data.articles;
        setNewsList(news);
      });
    };
  }, []);

  return (
    <div className="news-wrapper">

    </div>
  );
};

export default NewsWrapper;
