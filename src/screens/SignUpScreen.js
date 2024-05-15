import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("../../assets/images/loginIcon.png")}
        />
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <View style={styles.inputContainer}>
        <CustomTextInput
          title="Name"
          isSecureText={false}
          handleOnChangeText={setName}
          handleValue={name}
          handlePlaceHolder="Text Your Name"
        />
        <CustomTextInput
          title="E-mail"
          isSecureText={false}
          handleOnChangeText={setEmail}
          handleValue={email}
          handlePlaceHolder="Text Your Email"
        />
        <CustomTextInput
          title="Password"
          isSecureText={true}
          handleOnChangeText={setPassword}
          handleValue={password}
          handlePlaceHolder="Text Your Password"
        />
      </View>
      <View style={styles.signUpOptions}>
        <CustomButton
          title="Sign Up"
          setWidth="80%"
          buttonColor="purple"
          pressedButtonColor="lighrgray"
          handleOnPress={() => console.log(name, " ", email, "", password)}
        />
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={{ fontWeight: "bold" }}>
            Already have an account? Login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 130,
    height: 130,
    marginBottom: "10%",
  },
  inputContainer: {
    flex: 2,
    width: "100%",
    paddingVertical: 20,
    alignItems: "center",
  },
  header: {
    flex: 2,
    paddingTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: "30",
  },
  signUpOptions: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
