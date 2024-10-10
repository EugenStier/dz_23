import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <p>Добро пожаловать на главную страницу!</p>
      <Link to="/login">
        <button>Перейти на страницу входа</button>
      </Link>
    </div>
  );
};

export default Home;
