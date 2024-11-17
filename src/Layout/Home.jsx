import React from "react";
import Header from "../Components/Header";
import LetestNews from "../Components/LetestNews";

const Home = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
            <LetestNews></LetestNews>
        </section>
      </header>
    </div>
  );
};

export default Home;
