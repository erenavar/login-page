import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import CustomButton from "../components/CustomButton";
import { useSafeAreaFrame } from "react-native-safe-area-context";

const HomeScreen = () => {
  const [data, setData] = useState([]);
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

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "cars"));
    const carsArray = [];
    querySnapshot.forEach((doc) => {
      carsArray.push(doc.data());
    });
    setData(carsArray);
    console.log("data :>> ", carsArray);
  };

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <View key={index}>
            <Text>{item.brand}</Text>
            <Text>{item.model}</Text>
            <Text>{item.modelYear}</Text>
          </View>
        );
      })}

      <CustomButton
        title={"Save"}
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={sendData}
      />
      <CustomButton
        title={"Get Data"}
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={fetchData}
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
