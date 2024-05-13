import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";

const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
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
          title="email"
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
      <View style={styles.loginOptions}>
        <CustomButton
          title="Sign Up"
          setWidth="80%"
          buttonColor="purple"
          pressedButtonColor="lighrgray"
          handleOnPress={() => console.log(name, " ", email, "", password)}
        />
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
  inputContainer: {
    flex: 2,
    width: "100%",
    paddingVertical: 20,
    alignItems: "center",
  },
  header: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: "30",
  },
  loginOptions: {
    flex: 3,
    width: "100%",
    alignItems: "center",
  },
});
