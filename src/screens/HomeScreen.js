import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import CustomButton from "../components/CustomButton";

const HomeScreen = () => {
  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "cars"), {
        brand: "Tesla",
        model: "x",
        modelYear: 2020,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <CustomButton
        title={"Save"}
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={sendData}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
