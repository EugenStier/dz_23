import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Удаляем токен
    dispatch(logout()); // Вызываем действие logout
    navigate("/login"); // Редиректим на страницу логина
  };

  return (
    <div>
      <h1>Профиль пользователя</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
