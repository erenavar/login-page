import React, { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import CustomButton from "../components/CustomButton";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, [fetched]);

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
        model: "X",
        modelYear: 2020,
      });
      alert("Car Added");
      setFetched(!fetched);
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
    } catch (error) {}
  };

  const logOut = () => {
    dispatch(logout());
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        {data.map((item) => {
          return (
            <View style={styles.dataLine}>
              <Text style={styles.text}>{item.brand}</Text>
              <Text style={styles.text}>{item.model}</Text>
              <Text style={styles.text}>{item.modelYear}</Text>
              <Button title="Delete" onPress={() => deleteData(item.id)} />
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.buttonArea}>
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
        <CustomButton
          title={"Logout"}
          setWidth={"40%"}
          buttonColor={"red"}
          pressedButtonColor={"gray"}
          handleOnPress={logOut}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  dataLine: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  text: {
    fontSize: 17,
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 5,
    gap: 5,
  },
});
