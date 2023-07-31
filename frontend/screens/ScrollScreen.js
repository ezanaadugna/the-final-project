import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

const ScrollScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Well done!</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },
});

export default ScrollScreen;
