import { useEffect, useState } from "react";

const LeftNavbar = () => {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data.data.news_category));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">All Category</h2>
      <div className="flex flex-col gap-2 bg-gray-100 rounded-md p-4">
        {categories.map((category) => (
          <button className="btn text-gray-500 btn-ghost">{category.category_name}</button>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
