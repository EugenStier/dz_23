import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // Создаем экземпляр navigate

  const handleLogin = () => {
    localStorage.setItem("token", "fake-token"); // Устанавливаем фейковый токен
    navigate("/profile"); // Перенаправляем на страницу профиля
  };

  return (
    <div>
      <h1>Страница входа</h1>
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
};

export default Login;
