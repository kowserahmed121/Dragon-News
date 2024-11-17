import React from "react";
import { AiFillStar, AiOutlineEye, AiOutlineShareAlt } from "react-icons/ai";

const NewsCard = ({ card }) => {
  return (
    <div className="card w-full bg-base-100 ">
      {/* Card Header */}
      <div className="flex items-center gap-4 p-4 bg-slate-100">
        <img
          src={card.author.img}
          alt={card.author.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="text-sm font-semibold">{card.author.name}</h2>
          <p className="text-xs text-gray-500">{card.author.published_date}</p>
        </div>
        <div className="ml-auto">
          <AiOutlineShareAlt size={20} className="cursor-pointer" />
        </div>
      </div>

      {/* Thumbnail */}
      <img
        src={card.thumbnail_url}
        alt="Thumbnail"
        className="w-full h-80 object-cover"
      />

      {/* Card Body */}
      <div className="card-body p-4">
        <h3 className="card-title text-lg font-semibold">{card.title}</h3>
        <p className="text-sm text-gray-500 mt-2">
          {card.details.substring(0, 100)}...
        </p>
        <a href="#" className="text-orange-500 font-bold mt-4">
          Read More
        </a>
      </div>

      {/* Footer */}
      <div className="card-footer flex items-center justify-between p-4">
        <div className="flex items-center text-orange-500">
          <AiFillStar size={20} />
          <span className="ml-2 font-semibold">{card.rating.number}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <AiOutlineEye size={20} />
          <span>{card.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
