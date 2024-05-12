import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const CustomTextInput = ({
  title,
  isSecureText,
  handlePlaceHolder,
  handleValue,
  handleOnChangeText,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text>{title}</Text>
      <TextInput
        inputMode="email"
        style={styles.textInput}
        secureTextEntry={isSecureText}
        value={handleValue}
        onChangeText={handleOnChangeText}
        placeholder={handlePlaceHolder}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
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
});
