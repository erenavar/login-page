import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
  isLoading: false,
  isAuth: false,
  users: {
    userMail: "test@test.com",
    userPassword: "12345",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      const lowerCaseEmail = action.payload.toLowerCase();
      state.email = lowerCaseEmail;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setLogin: (state) => {
      if (
        state.email == state.users.userMail &&
        state.password == state.users.userPassword
      ) {
        state.isAuth = true;
      } else {
      }
    },
  },
});

export const { setEmail, setPassword, setIsLoading, setLogin } =
  userSlice.actions;
export default userSlice.reducer;
