import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Shuvo");

  const [person, setPerson] = useState({ name: "Nilima", age: 26 });
  const clickHandler = () => {
    setName("Faysal");
    setPerson({ name: "Bindu", age: 20 });
  };
  return (
    <View style={styles.container}>
      <Text>My Name is {name}</Text>
      <Text>
        Her Name is {person.name} and her age is {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Update Name" onPress={clickHandler} />
      </View>
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
  buttonContainer: {
    marginTop: 20,
  },
});
