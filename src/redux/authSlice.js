import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: !!localStorage.getItem("token"), // Определяем состояние аутентификации
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false; // Устанавливаем аутентификацию в false
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
