import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import CustomButton from "../components/CustomButton";

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "cars"));
    const carsArray = [];
    querySnapshot.forEach((doc) => {
      carsArray.push({ ...doc.data(), id: doc.id });
    });
    setData(carsArray);
  };

  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "cars"), {
        brand: "Tesla",
        model: "x",
        modelYear: 2020,
      });
      alert("Car Added");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const deleteData = async (id) => {
    try {
      await deleteDoc(doc(db, "cars", id));
      console.log("Document deleted with ID: ", id);
      fetchData();
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <View key={index}>
            <Text>{item.brand}</Text>
            <Text>{item.model}</Text>
            <Text>{item.modelYear}</Text>
            <Button title="Delete" onPress={() => deleteData(item.id)} />
          </View>
        );
      })}
      <View style={{ flexDirection: "row", gap: "15" }}>
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
