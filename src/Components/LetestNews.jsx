import { Link } from "react-router-dom";

const LetestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-300 rounded-md">
      <h2 className="text-white text-xl rounded-l-md bg-red-500 px-4 py-2 ">Latest</h2>
      <marquee className="space-x-10">
        <Link to="/news">
          Keep your finger on the pulse of cyber security and stay up to date
          with our Dragon News Blog.
        </Link>
        <Link to="/news">
          Keep your finger on the pulse of cyber security and stay up to date
          with our Dragon News Blog.
        </Link>
        <Link to="/news">
          Keep your finger on the pulse of cyber security and stay up to date
          with our Dragon News Blog.
        </Link>
      </marquee>
    </div>
  );
};

export default LetestNews;
