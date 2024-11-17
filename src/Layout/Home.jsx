import React from "react";
import Header from "../Components/Header";
import LetestNews from "../Components/LetestNews";
import Navbar from "../Components/Navbar";
import LeftNavbar from "../Components/LeftNavbar";
import RightNavbar from "../Components/RightNavbar";

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
      <main className="grid md:grid-cols-12 w-11/12 mx-auto gap-3 my-10">
        <aside className="col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">main content</section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default Home;
