import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Shuvo");
  const [age, setAge] = useState("1");
  return (
    <View style={styles.container}>
      <Text>Enter Name </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g Doe"
        onChangeText={(e) => setName(e)}
      />

      <Text>Enter Age </Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder="e.g Doe"
        onChangeText={(e) => setAge(e)}
      />
      <Text>
        Name: {name} , Age: {age}
      </Text>
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
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
