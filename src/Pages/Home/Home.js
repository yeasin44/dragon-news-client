import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      {allNews.map((news) => (
        <NewsSummaryCard news={news} key={news._id}></NewsSummaryCard>
      ))}
    </div>
  );
};

export default Home;
