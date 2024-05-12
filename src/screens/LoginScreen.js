import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import Loading from "../components/Loading";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/loginIcon.png")}
      />

      <CustomTextInput
        title="E-mail"
        isSecureText={false}
        handleOnChangeText={setEmail}
        handleValue={email}
        handlePlaceHolder="Your E-mail"
      />
      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={setPassword}
        handleValue={password}
        handlePlaceHolder="Your Password"
      />

      <CustomButton
        title="Login"
        setWidth="80%"
        handleOnPress={() => setIsLoading(true)}
        buttonColor="#8E24AA"
        pressedButtonColor="lightgray"
      />

      <CustomButton
        title="Sign Up"
        setWidth="20%"
        handleOnPress={() => navigation.navigate("SignUp")}
        buttonColor="gray"
        pressedButtonColor="lightgray"
      />

      {isLoading ? <Loading /> : null}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: "10%",
    marginTop: "-20%",
  },
  signUpButton: {
    marginTop: 40,
    width: "20%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    color: "white",
    fontWeight: "bold",
  },
});
