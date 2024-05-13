import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../components/CustomTextInput";

const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>
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
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
