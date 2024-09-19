import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../components/CustomButton";
import Loading from "../components/Loading";
import { login, autoLogin } from "../redux/userSlice";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const { isLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/loginIcon.png")}
      />
      <View style={styles.inputArea}>
        <CustomTextInput
          title="E-mail"
          isSecureText={false}
          handleOnChangeText={(text) => setEmail(text.toLowerCase())}
          handleValue={email}
          handlePlaceHolder="Your E-mail"
        />
        <CustomTextInput
          title="Password"
          isSecureText={true}
          handleOnChangeText={(text) => setPassword(text)}
          handleValue={password}
          handlePlaceHolder="Your Password"
        />
      </View>
      <View style={styles.buttonArea}>
        <CustomButton
          title="Login"
          setWidth="80%"
          handleOnPress={() => dispatch(login({ email, password }))}
          buttonColor="#8E24AA"
          pressedButtonColor="lightgray"
          style={styles.login}
        />
        <CustomButton
          title="Sign Up"
          setWidth="20%"
          handleOnPress={() => navigation.navigate("SignUp")}
          buttonColor="gray"
          pressedButtonColor="lightgray"
        />
      </View>
      {isLoading ? <Loading /> : null}
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
  },
  inputArea: {
    width: "100%",
    backgroundColor: "blue",
    alignItems: "center",
  },

  buttonArea: {
    flex: 0.1,
  },
  signUpButton: {
    marginTop: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    padding: 30,
  },

  signUpText: {
    color: "white",
    fontWeight: "bold",
  },
});
