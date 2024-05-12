import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const CustomButton = ({
  setWidth,
  handleOnPress,
  title,
  buttonColor,
  pressedButtonColor,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? pressedButtonColor : buttonColor,
          width: setWidth,
        },
        styles.button,
      ]}
      onPress={() => {
        handleOnPress();
      }}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
