import React from "react";
import { Link } from "react-router-dom";

const NewsDetails = ({ newsData }) => {
  // console.log(newsData);
  return (
    <div>
      <div className="card bg-base-100 border-2 mt-6 ">
        <figure className="w-full p-4">
          <img
            src={newsData?.image_url}
            alt="Shoes"
            className="rounded-xl w-full"
          />
        </figure>
        <div className="card-body space-y-3">
          <h2 className="card-title text-2xl">{newsData?.title}</h2>
          <p className="text-justify">{newsData?.details}</p>
          <div className="card-actions">
            <Link
              to={`/category/${newsData?.category_id}`}
              className="btn btn-warning"
            >
              Back To News Category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
