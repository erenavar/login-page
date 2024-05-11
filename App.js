import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Loading from "./src/components/Loading";

export default function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./assets/images/loginIcon.png")}
      />
      <Text>E-Mail</Text>
      <TextInput
        inputMode="email"
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder="Your E-Mail"
      />
      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        value={surname}
        onChangeText={setSurname}
        placeholder="Your Password"
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
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
      {isLoading ? <Loading /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    height: 50,
    width: "80%",
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
});
