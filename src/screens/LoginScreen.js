import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Loading from "../components/Loading";
import CustomTextInput from "../components/CustomTextInput";

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

      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "gray" : "#8E24AA" },
          styles.button,
        ]}
        onPress={() => {
          setIsLoading(true);
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("SignUp")}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "lightgray" : "gray" },
          styles.signUpButton,
        ]}
      >
        <Text style={styles.signUpText}>Sign Up</Text>
      </Pressable>
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
  button: {
    borderRadius: 10,
    height: 50,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
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
