import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput style={styles.textInput} placeholder="Your Name" />
      <Text>Surname</Text>
      <TextInput style={styles.textInput} placeholder="Your Surname" />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
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
    backgroundColor: "rebeccapurple",
    marginTop: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
