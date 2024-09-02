import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBOS2O7Mr7oLjLQm4jCWQBvntSMZQnrq-o",
  authDomain: "login-page-45a74.firebaseapp.com",
  projectId: "login-page-45a74",
  storageBucket: "login-page-45a74.appspot.com",
  messagingSenderId: "747768133619",
  appId: "1:747768133619:web:28d94ec6743d7febb8c486",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export default app;
