import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold mb-6">Dragon News Home</h2>
      </div>
      <div>
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} card={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
