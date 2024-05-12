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

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/loginIcon.png")}
      />
      <View style={styles.inputContainer}>
        <Text>E-Mail</Text>
        <TextInput
          inputMode="email"
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder="Your E-Mail"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          value={surname}
          onChangeText={setSurname}
          placeholder="Your Password"
        />
      </View>
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
  inputContainer: {
    width: "80%",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    height: 50,
    width: "100%",
    textAlign: "center",
    marginVertical: 10,
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
