import React from "react";
import Header from "../Components/Header";
import LetestNews from "../Components/LetestNews";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LetestNews></LetestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto my-8">
        <Navbar></Navbar>
      </nav>
      <main className="grid grid-cols-12 w-11/12 mx-auto gap-3 mt-10">
        <aside className="col-span-3">left nav</aside>
        <section className="col-span-6">main content</section>
        <aside className="col-span-3">right nav</aside>
      </main>
    </div>
  );
};

export default Home;
