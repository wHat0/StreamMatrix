import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

const SupportScreen = () => {
  return (
    <ScrollView
      style={[
        {
          display: "flex",
          flex: 1,
        },
      ]}
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Pakistan Office</Text>
        <Text style={styles.address}>
          442A Eden Lane Villas2 street #2,{"\n"}
          DHA Rahber, Lahore, Pakistan
        </Text>
        <Text style={styles.email}>
          Email: customerservices@streammatrix.com
        </Text>
        <Text style={styles.phone}>Phone: +92-317-4685867</Text>
      </View>
    </ScrollView>
  );
};
export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#59666678",
    borderRadius: 12,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    marginBottom: 10,
    color: "white",
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
    color: "white",
  },
  phone: {
    fontSize: 16,
    color: "white",
  },
});
