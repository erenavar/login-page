import {
  createSlice,
  asyncThunkCreator,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const login = createAsyncThunk(
  "user/login",
  async ({ username, password }) => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      const user = userCredential.user;
      const token = user.stsTokenManager.accessToken;
      const userData = { token, user: user };
      return userData;
    } catch (error) {
      console.log("userSlice createAsyncThunk function: ", error);
    }
  }
);

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
