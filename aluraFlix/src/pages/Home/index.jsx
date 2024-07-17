import Banner from "../../components/Banner";
import Card from "../../components/Card";
import "./Home.css";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
import EditCard from "../../components/EditCard";

function Home() {
  return (
    <>
      <Banner />
      <section className="home-body">
        <Card />
        <EditCard/>
      </section>
    </>
  );
}

export default Home;
