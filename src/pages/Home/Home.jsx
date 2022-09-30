import React from "react";
import S from "./Home.module.css";
import rocket from "../../assets/rocket.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={S.container}>
      <h1>Bem vindo a Venture Labs!</h1>
      <img src={rocket} alt="rocket" />
    </div>
  );
};

export default Home;
