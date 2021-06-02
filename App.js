import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Faysal", key: "1" },
    { name: "Islam", key: "2" },
    { name: "Shuvo", key: "3" },
    { name: "Omuk", key: "4" },
    { name: "Tomuk", key: "5" },
    { name: "Ouk", key: "6" },
    { name: "omu", key: "7" },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((ppl) => (
          <View key={ppl.key}>
            <Text style={styles.ppl}>{ppl.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  ppl: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
