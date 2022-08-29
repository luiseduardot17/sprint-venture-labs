import React from "react";
import S from "./Home.module.css";
import rocket from "../../assets/rocket.svg";

const Home = () => {
  return (
    <div className={S.container}>
      <img src={rocket} alt="rocket" />
    </div>
  );
};

export default Home;
