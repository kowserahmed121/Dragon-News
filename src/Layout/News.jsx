import { useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightNavbar from "../Components/RightNavbar";
import NewsDetails from "../Components/NewsDetails";

const News = () => {
  const data = useLoaderData();
  const newsData = data.data[0];
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 gap-6 w-11/12 mx-auto py-12">
        <section className="col-span-9">
          <h2 className="font-bold text-2xl">Dragon News</h2>
          <NewsDetails newsData={newsData}></NewsDetails>
        </section>
        <div className="col-span-3">
          <RightNavbar></RightNavbar>
        </div>
      </main>
    </div>
  );
};

export default News;
